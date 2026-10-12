import { Command, Option } from 'commander';

import type { EndpointTool } from '../lib/tools.ts';

import { registerCatalogCommands } from './catalog-commands.ts';
import { buildCommands } from './commands.ts';
import { registerWhoamiCommand } from './whoami-command.ts';

export type CreateProgramParams = {
	version: string;
	tools: EndpointTool[];
};

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
		);
	// Before the tool commands, so an app can never take these names.
	registerCatalogCommands(program, tools);
	registerWhoamiCommand(program);
	buildCommands(program, tools);
	return program;
};
