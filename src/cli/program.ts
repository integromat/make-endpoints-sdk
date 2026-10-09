import { Command, Option } from 'commander';

import type { EndpointTool } from '../lib/tools.ts';

import { registerAgentCommand } from './agent-command.ts';
import { registerCatalogCommands } from './catalog-commands.ts';
import { buildCommands } from './commands.ts';
import { registerWhoamiCommand } from './whoami-command.ts';

export type CreateProgramParams = {
	version: string;
	tools: EndpointTool[];
};

/**
 * Printed after the root help only, for agents that learn the CLI from `--help`: the order to use
 * the commands in. Commander writes `after` text verbatim, so it isn't wrapped like descriptions.
 */
const START_HERE = `
Start here (agents):
  1. whoami --environment               your organizations and teams, private spaces included
  2. list --team-id <id>                apps and endpoints the team can use now, with its connections
  3. describe <app> <endpoint>          input fields and the connection types the endpoint accepts
  4. connections list --team-id <id> --app <app> --endpoint <endpoint>
                                        which --connection-id to pass; prefer "scoped": true, false is unconfirmed
  5. <app> <endpoint> --team-id <id> --connection-id <id> --<field> <value>
                                        call it; --input '{...}' passes the whole input as JSON instead
Output is JSON by default; --output table gives a quick look. Exit code 2 = Make API error, 1 = usage error.
Full guide: make-endpoints-cli agent`;

/** Builds the `make-endpoints-cli` command tree without parsing anything. */
export const createProgram = ({ version, tools }: CreateProgramParams): Command => {
	const program = new Command();
	program
		.name('make-endpoints-cli')
		.description('A command-line tool for calling Make Endpoints')
		.version(version)
		.option('--api-key <key>', 'Make API key (or set MAKE_API_KEY)')
		.option('--zone <zone>', 'Make zone, e.g. eu1.make.com (or set MAKE_ZONE)')
		.addOption(
			new Option('--output <format>', 'Output format')
				.choices(['json', 'compact', 'table'])
				.default('json'),
		)
		.addHelpText('after', START_HERE);
	// Before the tool commands, so an app can never take these names.
	registerCatalogCommands(program, tools);
	registerWhoamiCommand(program);
	registerAgentCommand(program);
	buildCommands(program, tools);
	return program;
};
