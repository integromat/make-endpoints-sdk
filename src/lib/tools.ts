import type { Make } from '@makehq/sdk';

import { definitions } from './generated/definitions.ts';
import type {
	EndpointAnnotations,
	EndpointDefinition,
	EndpointPointer,
	JSONValue,
} from './shared.ts';
import { SdkTransport } from './transport/sdk-transport.ts';

/** JSON Schema of a tool's input. Same shape as `JSONSchema` from `@makehq/sdk/tools`. */
export type JSONSchema = {
	type?: 'object' | 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'null';
	properties?: Record<string, JSONSchema>;
	patternProperties?: Record<string, JSONSchema>;
	required?: string[];
	items?: JSONSchema;
	description?: string;
	enum?: JSONValue[];
	const?: JSONValue;
	oneOf?: JSONSchema[];
	anyOf?: JSONSchema[];
	allOf?: JSONSchema[];
	default?: JSONValue;
	minimum?: number;
	maximum?: number;
	minLength?: number;
	maxLength?: number;
	minItems?: number;
	maxItems?: number;
	pattern?: string;
	additionalProperties?: boolean;
};

/**
 * A Make Endpoint as a tool, assignable to `MakeTool` from `@makehq/sdk/tools`. Declared here
 * because that subpath doesn't resolve under `node10`, which our CommonJS types support.
 */
export type EndpointTool = {
	name: string;
	title: string;
	description: string;
	category: string;
	scope?: string;
	scopeId?: string;
	annotations?: EndpointAnnotations;
	inputSchema: JSONSchema;
	/** The generated endpoint this tool calls. Absent on the generic `endpoints_execute` tool. */
	definition?: EndpointDefinition;
	/** Whether `definition` belongs to the latest version of its app. */
	latest?: boolean;
	execute(make: Make, args: Record<string, JSONValue>): Promise<JSONValue>;
};

const SCOPE = 'endpoints:run';

/** Tool arguments that aren't input fields. Input fields with these names are only reachable through `input`. */
const RESERVED_ARGUMENTS = new Set(['teamId', 'connectionId', 'input']);

const TEAM_ID_SCHEMA: JSONSchema = {
	type: 'number',
	description: 'The ID of the Team the Endpoint is executed in.',
};

type CallEndpointParams = {
	pointer: EndpointPointer;
	teamId: JSONValue;
	connectionId: JSONValue;
	input: JSONValue;
};

const _isRecord = (value: JSONValue): value is Record<string, JSONValue> => {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/** `getDocument` → `get-document`, `LegacyCall` → `legacy-call`, `getHTMLPage` → `get-html-page`. */
const _toKebabCase = (name: string): string => {
	return name
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
		.replace(/[\s._]+/g, '-')
		.toLowerCase();
};

const _callEndpoint = async (
	make: Make,
	{ pointer, teamId, connectionId, input }: CallEndpointParams,
): Promise<JSONValue> => {
	if (typeof teamId !== 'number') {
		throw new Error('teamId must be a number.');
	}
	if (connectionId !== undefined && typeof connectionId !== 'number') {
		throw new Error('connectionId must be a number.');
	}
	if (input !== undefined && !_isRecord(input)) {
		throw new Error('input must be an object.');
	}
	const { output } = await new SdkTransport(make).callEndpoint<JSONValue>({ teamId }, pointer, {
		input: input ?? {},
		...(connectionId === undefined ? {} : { connectionId }),
	});
	return output;
};

const _buildEndpointTool = (definition: EndpointDefinition, latest: boolean): EndpointTool => {
	const {
		appName,
		appVersion,
		endpointName,
		label,
		description,
		deprecated,
		connectionTypes,
		annotations,
	} = definition;
	const { properties, required } = definition.inputSchema;
	const category = latest ? appName : `${appName}-v${appVersion}`;
	const name = `${category}_${_toKebabCase(endpointName)}`;
	const fields = Object.entries(_isRecord(properties) ? properties : {}).filter(
		([field]) => !RESERVED_ARGUMENTS.has(field),
	);
	const requiredFields = Array.isArray(required) ? required.map(String) : [];
	const takesConnection = connectionTypes.length > 0;

	return {
		name,
		title: label ?? endpointName,
		description: `${deprecated ? '[DEPRECATED] ' : ''}${description ?? label ?? name}`,
		category,
		scope: SCOPE,
		scopeId: 'teamId',
		...(annotations ? { annotations } : {}),
		inputSchema: {
			type: 'object',
			properties: {
				teamId: TEAM_ID_SCHEMA,
				...(takesConnection
					? {
							connectionId: {
								type: 'number',
								description: `ID of the Connection to use (${connectionTypes.join(', ')}).`,
							},
						}
					: {}),
				...(Object.fromEntries(fields) as Record<string, JSONSchema>),
				input: {
					...(definition.inputSchema as JSONSchema),
					description:
						'The whole endpoint input as a JSON object. Separately passed fields override its keys.',
				},
			},
			// Input fields can arrive separately or inside `input`, so they're checked in `execute`.
			required: takesConnection ? ['teamId', 'connectionId'] : ['teamId'],
		},
		definition,
		latest,
		execute: async (make, { teamId, connectionId, input, ...rest }) => {
			const merged = { ...(input !== undefined && _isRecord(input) ? input : {}), ...rest };
			const missing = requiredFields.filter((field) => merged[field] === undefined);
			if (missing.length > 0) {
				throw new Error(`Missing required input fields: ${missing.join(', ')}.`);
			}
			return _callEndpoint(make, {
				pointer: { appName, appVersion, endpointName },
				teamId,
				connectionId,
				input: merged,
			});
		},
	};
};

const EXECUTE_TOOL: EndpointTool = {
	name: 'endpoints_execute',
	title: 'Execute Endpoint',
	description:
		'Executes a Make Endpoint with the provided input. Works for any app, version and endpoint, including ones missing from this package.',
	category: 'endpoints',
	scope: SCOPE,
	scopeId: 'teamId',
	annotations: { readOnlyHint: false, openWorldHint: true, destructiveHint: true },
	inputSchema: {
		type: 'object',
		properties: {
			appName: {
				type: 'string',
				description: 'Name of the App from which the Endpoint should be executed.',
			},
			appVersion: {
				type: 'number',
				description: 'Version of the App from which the Endpoint should be executed.',
			},
			endpointName: { type: 'string', description: 'Name of the Endpoint to be executed.' },
			teamId: TEAM_ID_SCHEMA,
			connectionId: {
				type: 'number',
				description: 'ID of the Connection to be used for executing the Endpoint.',
			},
			input: {
				type: 'object',
				description: 'Object containing input values of the Endpoint.',
			},
		},
		required: ['appName', 'appVersion', 'endpointName', 'teamId'],
	},
	execute: async (make, { appName, appVersion, endpointName, teamId, connectionId, input }) => {
		if (
			typeof appName !== 'string' ||
			typeof appVersion !== 'number' ||
			typeof endpointName !== 'string'
		) {
			throw new Error('appName, appVersion and endpointName are required.');
		}
		return _callEndpoint(make, {
			pointer: { appName, appVersion, endpointName },
			teamId,
			connectionId,
			input,
		});
	},
};

/**
 * Turns endpoint definitions into tools: one per endpoint, plus the generic `endpoints_execute`.
 * The latest version of an app is named `<app>_<endpoint>` in category `<app>`; older versions are
 * `<app>-v<N>_<endpoint>` in category `<app>-v<N>`.
 */
export const buildEndpointTools = (endpointDefinitions: EndpointDefinition[]): EndpointTool[] => {
	const latestVersions = new Map<string, number>();
	for (const { appName, appVersion } of endpointDefinitions) {
		latestVersions.set(
			appName,
			Math.max(appVersion, latestVersions.get(appName) ?? appVersion),
		);
	}
	return [
		...endpointDefinitions.map((definition) =>
			_buildEndpointTool(
				definition,
				latestVersions.get(definition.appName) === definition.appVersion,
			),
		),
		EXECUTE_TOOL,
	];
};

/** Tools for every endpoint generated into this package, plus the generic `endpoints_execute`. */
export const EndpointTools: EndpointTool[] = buildEndpointTools(definitions);
