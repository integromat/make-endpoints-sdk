import type { Command } from 'commander';

import type { EndpointDefinition } from '../lib/shared.ts';
import type { EndpointTool, UsableEndpointPackage } from '../lib/tools.ts';
import { listUsableEndpoints } from '../lib/tools.ts';

import type { GlobalOptions } from './commands.ts';
import { createMakeClient, deriveActionName, exitWithError } from './commands.ts';
import { formatOutput } from './output.ts';

type DefinedTool = EndpointTool & { definition: EndpointDefinition };

const _actionName = (tool: DefinedTool): string => deriveActionName(tool.name, tool.category);

/** Union of the OAuth scopes across the endpoint's connection types, like the MCP Server's `app_endpoint_list`. */
const _scopesOf = (definition: EndpointDefinition): string[] => [
	...new Set(Object.values(definition.accounts).flatMap((account) => account.scope ?? [])),
];

const _requireDefinitions = (tools: DefinedTool[]): void => {
	if (tools.length === 0) {
		throw new Error(
			'This build has no endpoint metadata. Use "make-endpoints-cli endpoints execute" instead.',
		);
	}
};

const _parseVersion = (version: string): number => {
	const match = /^v(\d+)$/.exec(version);
	if (!match) {
		throw new Error(`Invalid version "${version}", expected v<N> (e.g. v2).`);
	}
	return Number(match[1]);
};

/** Tools of one app, narrowed to one version when given. */
const _findTools = (
	tools: DefinedTool[],
	app: string,
	version: string | undefined,
): DefinedTool[] => {
	const appTools = tools.filter((tool) => tool.definition.appName === app);
	if (appTools.length === 0) {
		throw new Error(`Unknown app "${app}". Run "make-endpoints-cli list" to see all apps.`);
	}
	if (version === undefined) return appTools;
	const appVersion = _parseVersion(version);
	const versionTools = appTools.filter((tool) => tool.definition.appVersion === appVersion);
	if (versionTools.length === 0) {
		throw new Error(`Unknown version "${version}" of app "${app}".`);
	}
	return versionTools;
};

const _listApps = (
	tools: DefinedTool[],
): { name: string; versions: string[]; endpointCount: number }[] => {
	const apps = new Map<string, { versions: Set<number>; endpointCount: number }>();
	for (const { definition } of tools) {
		const app = apps.get(definition.appName) ?? { versions: new Set(), endpointCount: 0 };
		app.versions.add(definition.appVersion);
		app.endpointCount += 1;
		apps.set(definition.appName, app);
	}
	return [...apps].map(([name, { versions, endpointCount }]) => ({
		name,
		versions: [...versions].sort((a, b) => a - b).map((version) => `v${version}`),
		endpointCount,
	}));
};

const _listEndpoints = (tools: DefinedTool[]): Record<string, unknown>[] => {
	return tools.map((tool) => ({
		name: _actionName(tool),
		version: `v${tool.definition.appVersion}`,
		endpointName: tool.definition.endpointName,
		title: tool.title,
		deprecated: tool.definition.deprecated ?? false,
		connectionTypes: Object.keys(tool.definition.accounts),
		scopes: _scopesOf(tool.definition),
	}));
};

const _parseTeamId = (teamId: string): number => {
	if (!/^\d+$/.test(teamId)) {
		throw new Error(`Invalid team ID "${teamId}", expected an integer.`);
	}
	return Number(teamId);
};

const _listUsableApps = (packages: UsableEndpointPackage[]): Record<string, unknown>[] => {
	return packages.map(({ name, label, versions }) => ({
		name,
		label,
		versions: versions.map(({ version }) => `v${version}`),
		endpointCount: versions.reduce((count, { endpoints }) => count + endpoints.length, 0),
	}));
};

type ListUsableEndpointsParams = {
	packages: UsableEndpointPackage[];
	tools: DefinedTool[];
	teamId: number;
	app: string;
	appVersion: number | undefined;
};

/**
 * Usable endpoints of one app, narrowed to one version when given. `name` is set only when this
 * package bundles the endpoint, so `<app> v<N> <name>` exists exactly when it's present.
 */
const _listUsableEndpoints = ({
	packages,
	tools,
	teamId,
	app,
	appVersion,
}: ListUsableEndpointsParams): Record<string, unknown>[] => {
	const appPackage = packages.find((candidate) => candidate.name === app);
	const versions = (appPackage?.versions ?? []).filter(
		(candidate) => appVersion === undefined || candidate.version === appVersion,
	);
	if (versions.length === 0) {
		const subject =
			appVersion === undefined ? `App "${app}"` : `Version "v${appVersion}" of app "${app}"`;
		throw new Error(`${subject} has no usable endpoints in team ${teamId}.`);
	}
	return versions.flatMap(({ version, endpoints }) =>
		endpoints.map((endpoint) => {
			const tool = tools.find(
				({ definition }) =>
					definition.appName === app &&
					definition.appVersion === version &&
					definition.endpointName === endpoint.name,
			);
			return {
				...(tool ? { name: _actionName(tool) } : {}),
				version: `v${version}`,
				endpointName: endpoint.name,
				title: endpoint.label,
				deprecated: endpoint.deprecated,
				credentialsRequired: endpoint.credentialsRequired,
				connections: endpoint.credentialsAvailable,
			};
		}),
	);
};

/**
 * `describe` output: the tool without its runtime parts, plus the rest of the endpoint's definition.
 * Output schemas can run to hundreds of kilobytes, so they're only included on request.
 */
const _describeTool = (
	{ execute, definition, latest, ...tool }: DefinedTool,
	options: { outputSchema: boolean },
): Record<string, unknown> => {
	const { appName, appVersion, endpointName, context, deprecated, accounts, outputSchema } =
		definition;
	return {
		...tool,
		appName,
		appVersion,
		endpointName,
		...(context ? { context } : {}),
		...(deprecated ? { deprecated } : {}),
		accounts,
		...(options.outputSchema ? { outputSchema } : {}),
	};
};

/**
 * Registers `list` and `describe`, which read the endpoint definitions bundled in this package.
 * `list --team-id` asks the API instead, for what that team can use.
 */
export const registerCatalogCommands = (program: Command, tools: EndpointTool[]): void => {
	const definedTools = tools.filter((tool): tool is DefinedTool => tool.definition !== undefined);
	const print = (data: unknown): void => {
		const { output } = program.opts<GlobalOptions>();
		process.stdout.write(`${formatOutput(data, output ?? 'json')}\n`);
	};

	program
		.command('list')
		.description('List apps, or the endpoints of an app or app version')
		.argument('[app]', 'app name, e.g. google-docs')
		.argument('[version]', 'app version, e.g. v2')
		.option(
			'--team-id <id>',
			'List only what this team can use, with its connections, from the API (needs apps:read)',
		)
		.helpGroup('Others:')
		.action(
			async (
				app: string | undefined,
				version: string | undefined,
				options: { teamId?: string },
				cmd: Command,
			) => {
				if (options.teamId === undefined) {
					_requireDefinitions(definedTools);
					print(
						app === undefined
							? _listApps(definedTools)
							: _listEndpoints(_findTools(definedTools, app, version)),
					);
					return;
				}
				try {
					const teamId = _parseTeamId(options.teamId);
					const appVersion = version === undefined ? undefined : _parseVersion(version);
					const { make } = await createMakeClient(cmd);
					const packages = await listUsableEndpoints(make, teamId);
					print(
						app === undefined
							? _listUsableApps(packages)
							: _listUsableEndpoints({
									packages,
									tools: definedTools,
									teamId,
									app,
									appVersion,
								}),
					);
				} catch (error) {
					exitWithError(error);
				}
			},
		);

	program
		.command('describe')
		.description('Show the definition of an endpoint, including its input schema')
		.usage('<app> [v<N>] <endpoint> [--output-schema]')
		.argument('<parts...>', 'app, optional version (latest when omitted) and endpoint')
		.option('--output-schema', 'Include the output JSON Schema, which can be very large')
		.helpGroup('Others:')
		.action((parts: string[], options: { outputSchema?: boolean }) => {
			_requireDefinitions(definedTools);
			const [app, version, endpoint] =
				parts.length === 3 ? parts : [parts[0], undefined, parts[1]];
			if (
				parts.length < 2 ||
				parts.length > 3 ||
				app === undefined ||
				endpoint === undefined
			) {
				throw new Error('Usage: make-endpoints-cli describe <app> [v<N>] <endpoint>');
			}
			const candidates = _findTools(definedTools, app, version).filter(
				(tool) => version !== undefined || tool.latest,
			);
			const tool = candidates.find(
				(candidate) =>
					_actionName(candidate) === endpoint ||
					candidate.definition.endpointName === endpoint,
			);
			if (!tool) {
				throw new Error(
					`Unknown endpoint "${endpoint}" of app "${app}". Run "make-endpoints-cli list ${app}" to see its endpoints.`,
				);
			}
			print(_describeTool(tool, { outputSchema: options.outputSchema === true }));
		});
};
