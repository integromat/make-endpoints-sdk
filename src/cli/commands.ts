import { Make, MakeError } from '@makehq/sdk';
import { Command } from 'commander';

import type { JSONValue } from '../lib/shared.ts';
import type { EndpointTool, JSONSchema } from '../lib/tools.ts';

import { resolveAuth } from './auth.ts';
import type { OutputFormat } from './output.ts';
import { formatOutput } from './output.ts';

export type GlobalOptions = {
	apiKey?: string;
	zone?: string;
	output?: OutputFormat;
};

/** Flags of the program itself. Input fields that would map to them are only reachable through `--input`. */
const RESERVED_FLAGS = new Set(['api-key', 'zone', 'output', 'help', 'version']);

/** Descriptions of tool categories that aren't apps, like make-cli's category titles. */
const CATEGORY_TITLES: Record<string, string> = {
	endpoints: 'List the endpoints a team can use, or call any endpoint by name',
	connections: 'Connections of a team, filtered by app or endpoint',
	users: 'The current user',
	organizations: 'List your organizations',
	teams: 'List the teams of an organization',
};

/** Commands this module created to group other commands, as opposed to commands that run a tool. */
const groupCommands = new WeakSet<Command>();

/** `google-docs_get-document` in category `google-docs` → `get-document`. */
export const deriveActionName = (toolName: string, category: string): string => {
	const prefix = `${category.replace(/\./g, '-')}_`;
	return toolName.slice(prefix.length).replace(/_/g, '-');
};

/** `documentId` → `document-id`. Characters a flag can't hold collapse into dashes. */
const _toFlagName = (property: string): string => {
	return property
		.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
		.replace(/[^a-z0-9-]+/g, '-')
		.replace(/-{2,}/g, '-')
		.replace(/^-|-$/g, '');
};

/** Converts a flag value to the type its schema declares. */
export const coerceValue = (value: string, schema: JSONSchema): JSONValue => {
	// Definitions come from JSON at runtime, so `type` can still be a JSON Schema type array.
	const type: unknown = Array.isArray(schema.type) ? schema.type[0] : schema.type;
	switch (type) {
		case 'number':
		case 'integer': {
			const num = Number(value);
			if (Number.isNaN(num) || (type === 'integer' && !Number.isInteger(num))) {
				throw new Error(
					`Expected ${type === 'integer' ? 'an integer' : 'a number'}, got: ${value}`,
				);
			}
			return num;
		}
		case 'boolean':
			return value === 'true' || value === '1';
		case 'object':
		case 'array': {
			let parsed: JSONValue;
			try {
				parsed = JSON.parse(value) as JSONValue;
			} catch {
				throw new Error(`Expected valid JSON, got: ${value}`);
			}
			if (type === 'array' && !Array.isArray(parsed)) {
				throw new Error(`Expected JSON array for schema type "array", got: ${value}`);
			}
			if (
				type === 'object' &&
				(parsed === null || Array.isArray(parsed) || typeof parsed !== 'object')
			) {
				throw new Error(`Expected JSON object for schema type "object", got: ${value}`);
			}
			return parsed;
		}
		default:
			return value;
	}
};

const _warnSkipped = (parent: Command, name: string): undefined => {
	process.stderr.write(
		`Warning: skipped "${parent.name()} ${name}", the name is already taken.\n`,
	);
	return undefined;
};

const _getOrCreateGroup = (
	parent: Command,
	name: string,
	description: string,
): Command | undefined => {
	const existing = parent.commands.find((command) => command.name() === name);
	if (existing) {
		return groupCommands.has(existing) ? existing : _warnSkipped(parent, name);
	}
	const group = parent.command(name).description(description);
	groupCommands.add(group);
	return group;
};

/** Prints an error and exits: `2` for a failed API call, `1` for anything else, as in `make-cli`. */
export const exitWithError = (error: unknown): never => {
	if (error instanceof MakeError) {
		process.stderr.write(`Error [${error.statusCode}]: ${error.message}\n`);
		return process.exit(2);
	}
	if (error instanceof Error) {
		process.stderr.write(`Error: ${error.message}\n`);
		return process.exit(1);
	}
	process.stderr.write(`Unknown error: ${String(error)}\n`);
	return process.exit(1);
};

/** Resolves credentials from the global options, like `make-cli`, and builds a `Make` client. */
export const createMakeClient = async (cmd: Command): Promise<{ make: Make; zone: string }> => {
	const { apiKey, zone: zoneOption } = cmd.optsWithGlobals<GlobalOptions>();
	const { token, zone } = await resolveAuth({ apiKey, zone: zoneOption });
	return { make: new Make(token, zone), zone };
};

const _registerToolAsCommand = (parent: Command, tool: EndpointTool, actionName: string): void => {
	if (parent.commands.some((command) => command.name() === actionName)) {
		_warnSkipped(parent, actionName);
		return;
	}
	const cmd = parent.command(actionName).description(tool.description);
	const properties = tool.inputSchema.properties ?? {};
	const required = new Set(tool.inputSchema.required ?? []);
	// Flag names are derived lossily, so map each option back to the property it was made for.
	const optionProperties = new Map<string, string>();

	for (const [property, schema] of Object.entries(properties)) {
		const flagName = _toFlagName(property);
		if (
			!flagName ||
			RESERVED_FLAGS.has(flagName) ||
			cmd.options.some((o) => o.long === `--${flagName}`)
		) {
			continue;
		}
		const isBoolean = schema.type === 'boolean';
		// No defaults: a default would override the same key passed inside `--input`.
		const option = cmd.createOption(
			isBoolean ? `--${flagName} [value]` : `--${flagName} <value>`,
			schema.description ?? '',
		);
		if (required.has(property) && !isBoolean) {
			option.makeOptionMandatory(true);
		}
		if (schema.enum && !isBoolean) {
			option.choices(schema.enum.map(String));
		}
		cmd.addOption(option);
		optionProperties.set(option.attributeName(), property);
	}

	cmd.action(async (localOptions: Record<string, unknown>) => {
		const globalOptions = cmd.optsWithGlobals<GlobalOptions>();
		const { make } = await createMakeClient(cmd);
		const args: Record<string, JSONValue> = {};
		for (const [key, value] of Object.entries(localOptions)) {
			const property = optionProperties.get(key);
			const schema = property === undefined ? undefined : properties[property];
			if (value === undefined || property === undefined || schema === undefined) continue;
			args[property] = coerceValue(String(value), schema);
		}
		try {
			const result = await tool.execute(make, args);
			process.stdout.write(`${formatOutput(result, globalOptions.output ?? 'json')}\n`);
		} catch (error) {
			exitWithError(error);
		}
	});
};

/**
 * Registers one command per tool. Endpoint tools go under `<app> v<N> <endpoint>`, and tools of an
 * app's latest version also under `<app> <endpoint>`. Other tools go under `<category> <action>`.
 */
export const buildCommands = (program: Command, tools: EndpointTool[]): void => {
	for (const tool of tools) {
		const actionName = deriveActionName(tool.name, tool.category);
		if (!tool.definition) {
			const categoryCommand = _getOrCreateGroup(
				program,
				tool.category,
				CATEGORY_TITLES[tool.category] ?? `${tool.category} commands`,
			);
			if (categoryCommand) {
				_registerToolAsCommand(categoryCommand.helpGroup('Others:'), tool, actionName);
			}
			continue;
		}
		const { appName, appVersion } = tool.definition;
		const appCommand = _getOrCreateGroup(program, appName, `Endpoints of ${appName}`);
		if (!appCommand) continue;
		appCommand.helpGroup('Apps:');
		const versionCommand = _getOrCreateGroup(
			appCommand,
			`v${appVersion}`,
			`Endpoints of ${appName} v${appVersion}`,
		);
		if (versionCommand) {
			_registerToolAsCommand(versionCommand.helpGroup('Versions:'), tool, actionName);
		}
		if (tool.latest) _registerToolAsCommand(appCommand, tool, actionName);
	}
	program.addHelpCommand(
		new Command('help [command]').description('Display help for command').helpGroup('Others:'),
	);
};
