import type { Connection, Make } from '@makehq/sdk';

import { EndpointsSdk } from './endpoints-sdk.ts';
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

/** An endpoint of a package returned by `listUsableEndpoints`. */
export type UsableEndpoint = {
	name: string;
	label: string;
	description?: string;
	annotations?: EndpointAnnotations;
	deprecated: boolean;
	private: boolean;
	credentialsRequired: boolean;
	/** Connections of the team that cover the endpoint's scopes. Each `id` is a valid `connectionId`. */
	credentialsAvailable: { id: number; name: string }[];
};

/** An app with the versions and endpoints a team can call, as returned by `listUsableEndpoints`. */
export type UsableEndpointPackage = {
	name: string;
	label: string;
	description?: string;
	versions: { version: number; endpoints: UsableEndpoint[] }[];
};

/** A row of the `connections_list` tool. */
export type UsableConnection = {
	id: number;
	name: string;
	accountName: string;
	accountLabel: string;
	accountType: string;
	expire: string | null;
	/** With `scopes` or `endpoint`: whether the connection has the scopes required for its type. */
	scoped?: boolean;
	/** With `endpoint`: the OAuth scopes the endpoint needs on a connection of this type. */
	requiredScopes?: string[];
	/** With `app`: wire names of the app version's endpoints that accept a connection of this type. */
	usableFor?: string[];
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
	// The SDK's own escape hatch for pointer-based calls, so tools share its call path.
	const sdk = new EndpointsSdk({ transport: new SdkTransport(make), teamId });
	const { output } = await sdk.execute<JSONValue>(pointer, {
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
		accounts,
		annotations,
	} = definition;
	const { properties, required } = definition.inputSchema;
	const category = latest ? appName : `${appName}-v${appVersion}`;
	const name = `${category}_${_toKebabCase(endpointName)}`;
	const fields = Object.entries(_isRecord(properties) ? properties : {}).filter(
		([field]) => !RESERVED_ARGUMENTS.has(field),
	);
	const requiredFields = Array.isArray(required) ? required.map(String) : [];
	const connectionTypes = Object.keys(accounts);
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

const READ_ONLY_ANNOTATIONS: EndpointAnnotations = {
	readOnlyHint: true,
	destructiveHint: false,
	openWorldHint: false,
};

/**
 * Lists the apps, versions and endpoints a team can call, each endpoint with the team's connections
 * that cover its scopes. This is the route behind the Make MCP Server's `endpoints_list-usable`; it
 * rejects with HTTP 400 when Endpoints aren't enabled for the user.
 */
export const listUsableEndpoints = async (
	make: Make,
	teamId: number,
): Promise<UsableEndpointPackage[]> => {
	const { body } = await new SdkTransport(make).send<{ packages: UsableEndpointPackage[] }>({
		path: '/imt/endpoints-usable',
		query: new URLSearchParams({ teamId: String(teamId) }),
	});
	return body.packages;
};

const LIST_USABLE_TOOL: EndpointTool = {
	name: 'endpoints_list-usable',
	title: 'List Usable Endpoints',
	description:
		'Retrieves a list of versioned Packages of Endpoints which can be used in the given Team. This list considers all the Connections that are available in the Team (including their Scopes), and returns only Endpoints which are usable within this context. The ids in `credentialsAvailable` are valid `connectionId`s for the Endpoint. Fails with HTTP 400 when Endpoints are not enabled for the user.',
	category: 'endpoints',
	scope: 'apps:read',
	scopeId: 'teamId',
	annotations: READ_ONLY_ANNOTATIONS,
	inputSchema: {
		type: 'object',
		properties: {
			teamId: { type: 'number', description: 'The ID of the Team to list usable Endpoints for.' },
		},
		required: ['teamId'],
	},
	execute: async (make, { teamId }) => {
		if (typeof teamId !== 'number') {
			throw new Error('teamId must be a number.');
		}
		return listUsableEndpoints(make, teamId);
	},
};

type DefinitionQuery = {
	app: string;
	appVersion: number | undefined;
	endpoint: string | undefined;
};

/** `connections.list` filters, and the extra columns they make meaningful on each row. */
type ConnectionFilter = {
	options: { type?: string[]; scopes?: Record<string, string[]> };
	describe: (
		row: Connection,
	) => Pick<UsableConnection, 'scoped' | 'requiredScopes' | 'usableFor'>;
};

const _isStringArray = (value: JSONValue): value is string[] => {
	return Array.isArray(value) && value.every((item) => typeof item === 'string');
};

const _isScopes = (value: JSONValue): value is Record<string, string[]> => {
	return _isRecord(value) && Object.values(value).every(_isStringArray);
};

/** Definitions of one app version (latest when omitted), narrowed to one endpoint when given. */
const _findDefinitions = (
	endpointDefinitions: EndpointDefinition[],
	latestVersions: Map<string, number>,
	{ app, appVersion, endpoint }: DefinitionQuery,
): EndpointDefinition[] => {
	const latest = latestVersions.get(app);
	if (latest === undefined) {
		throw new Error(`Unknown app "${app}".`);
	}
	const version = appVersion ?? latest;
	const versionDefinitions = endpointDefinitions.filter(
		(definition) => definition.appName === app && definition.appVersion === version,
	);
	if (versionDefinitions.length === 0) {
		throw new Error(`Unknown version ${version} of app "${app}".`);
	}
	if (endpoint === undefined) return versionDefinitions;
	const definition = versionDefinitions.find(
		({ endpointName }) => endpointName === endpoint || _toKebabCase(endpointName) === endpoint,
	);
	if (!definition) {
		throw new Error(`Unknown endpoint "${endpoint}" of app "${app}" v${version}.`);
	}
	return [definition];
};

const _filterByType = ({
	type,
	scopes,
	appVersion,
	endpoint,
}: Record<string, JSONValue>): ConnectionFilter => {
	if (appVersion !== undefined || endpoint !== undefined) {
		throw new Error('appVersion and endpoint require app.');
	}
	if (type !== undefined && !_isStringArray(type)) {
		throw new Error('type must be an array of strings.');
	}
	if (scopes !== undefined && !_isScopes(scopes)) {
		throw new Error('scopes must be an object of string arrays.');
	}
	// The API ignores scopes of unlisted types and reports their connections as `scoped`.
	if (scopes !== undefined && Object.keys(scopes).some((key) => !type?.includes(key))) {
		throw new Error('Every connection type in scopes must also be listed in type.');
	}
	return {
		options: {
			...(type === undefined ? {} : { type }),
			...(scopes === undefined ? {} : { scopes }),
		},
		describe: (row) => (scopes === undefined ? {} : { scoped: row.scoped }),
	};
};

const _filterByApp = (
	endpointDefinitions: EndpointDefinition[],
	latestVersions: Map<string, number>,
	{ type, scopes, app, appVersion, endpoint }: Record<string, JSONValue>,
): ConnectionFilter => {
	if (type !== undefined || scopes !== undefined) {
		throw new Error('Use either app/endpoint or type/scopes.');
	}
	if (typeof app !== 'string') {
		throw new Error('app must be a string.');
	}
	if (appVersion !== undefined && typeof appVersion !== 'number') {
		throw new Error('appVersion must be a number.');
	}
	if (endpoint !== undefined && typeof endpoint !== 'string') {
		throw new Error('endpoint must be a string.');
	}
	const matched = _findDefinitions(endpointDefinitions, latestVersions, {
		app,
		appVersion,
		endpoint,
	});
	const types = [...new Set(matched.flatMap(({ accounts }) => Object.keys(accounts)))];
	if (types.length === 0) {
		// An empty `type` filter would list every connection of the team.
		const subject =
			endpoint === undefined ? `App "${app}"` : `Endpoint "${endpoint}" of app "${app}"`;
		throw new Error(`${subject} takes no connection.`);
	}
	const usableFor = (accountName: string): string[] => {
		return matched
			.filter(({ accounts }) => Object.hasOwn(accounts, accountName))
			.map(({ endpointName }) => endpointName);
	};
	const [definition] = matched;
	if (endpoint === undefined || definition === undefined) {
		return {
			options: { type: types },
			describe: (row) => ({ usableFor: usableFor(row.accountName) }),
		};
	}
	const requiredScopes = (accountName: string): string[] => {
		return definition.accounts[accountName]?.scope ?? [];
	};
	// Types left out get `scoped: true` from the API, which is right for types that need no scopes.
	const scopesByType: Record<string, string[]> = {};
	for (const accountName of types) {
		const required = requiredScopes(accountName);
		if (required.length > 0) scopesByType[accountName] = required;
	}
	return {
		options: {
			type: types,
			...(Object.keys(scopesByType).length > 0 ? { scopes: scopesByType } : {}),
		},
		describe: (row) => ({
			scoped: row.scoped,
			requiredScopes: requiredScopes(row.accountName),
			usableFor: usableFor(row.accountName),
		}),
	};
};

/**
 * `connections_list`, filtered by connection type or by what an app version or endpoint accepts. It
 * supersedes `connections_list` from `@makehq/sdk/tools`: same name, a superset of its input, and
 * rows trimmed to `UsableConnection`.
 */
const _buildConnectionsListTool = (
	endpointDefinitions: EndpointDefinition[],
	latestVersions: Map<string, number>,
): EndpointTool => ({
	name: 'connections_list',
	title: 'List connections',
	description:
		"Lists the connections of a team. With `app`, lists only connections of the types the app's endpoints accept, each with the endpoints that accept its type (`usableFor`). With `endpoint` too, each row also has the scopes the endpoint needs on that connection type (`requiredScopes`) and whether the connection has them (`scoped`). Alternatively, filter by connection `type` and required `scopes` per type.",
	category: 'connections',
	scope: 'connections:read',
	scopeId: 'teamId',
	annotations: READ_ONLY_ANNOTATIONS,
	inputSchema: {
		type: 'object',
		properties: {
			teamId: { type: 'number', description: 'The ID of the Team to list connections of.' },
			type: {
				type: 'array',
				items: { type: 'string' },
				description: 'Only connections of these types, as a JSON array, e.g. ["google"].',
			},
			scopes: {
				type: 'object',
				patternProperties: { '^.*$': { type: 'array', items: { type: 'string' } } },
				description:
					'Required scopes per connection type, as a JSON object, e.g. {"google":["email"]}. Applies to the types listed in `type` and sets `scoped` on each row.',
			},
			app: {
				type: 'string',
				description: "Only connections usable by this app's endpoints, e.g. google-docs.",
			},
			appVersion: { type: 'number', description: 'Version of the app. Latest when omitted.' },
			endpoint: {
				type: 'string',
				description:
					'Only connections usable by this endpoint of the app, e.g. get-document or getDocument.',
			},
		},
		required: ['teamId'],
	},
	execute: async (make, args) => {
		const { teamId, app } = args;
		if (typeof teamId !== 'number') {
			throw new Error('teamId must be a number.');
		}
		const { options, describe } =
			app === undefined
				? _filterByType(args)
				: _filterByApp(endpointDefinitions, latestVersions, args);
		const rows = await make.connections.list(teamId, { ...options, cols: ['*'] });
		return rows.map((row): UsableConnection => {
			const { id, name, accountName, accountLabel, accountType, expire } = row;
			return { id, name, accountName, accountLabel, accountType, expire, ...describe(row) };
		});
	},
});

/**
 * Turns endpoint definitions into tools: one per endpoint, then `connections_list` (which filters
 * by the connection types of these definitions), `endpoints_list-usable` and, last, the generic
 * `endpoints_execute`. The latest version of an app is named `<app>_<endpoint>` in category
 * `<app>`; older versions are `<app>-v<N>_<endpoint>` in category `<app>-v<N>`.
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
		_buildConnectionsListTool(endpointDefinitions, latestVersions),
		LIST_USABLE_TOOL,
		EXECUTE_TOOL,
	];
};

/**
 * Tools for every endpoint generated into this package, plus `connections_list`,
 * `endpoints_list-usable` and the generic `endpoints_execute`.
 */
export const EndpointTools: EndpointTool[] = buildEndpointTools(definitions);
