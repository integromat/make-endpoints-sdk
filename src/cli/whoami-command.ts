import type { Make } from '@makehq/sdk';
import type { Command } from 'commander';

import type { GlobalOptions } from './commands.ts';
import { createMakeClient, exitWithError } from './commands.ts';
import { formatOutput } from './output.ts';

type Environment = {
	id: number;
	name: string;
	teams: { id: number; name: string; type: 'personal' | 'standard' }[];
}[];

/** Organizations of the user with their teams, like the Make MCP Server's `environment_get`. */
const _getEnvironment = async (make: Make): Promise<Environment> => {
	const organizations = await make.organizations.list({ cols: ['id', 'name'] });
	return Promise.all(
		organizations.map(async ({ id, name }) => ({
			id,
			name,
			teams: await make.teams.list(id, {
				includePrivateSpaces: true,
				cols: ['id', 'name', 'type'],
			}),
		})),
	);
};

/** Registers `whoami`: the current user and zone, plus the teams they can reach on request. */
export const registerWhoamiCommand = (program: Command): void => {
	program
		.command('whoami')
		.description('Show the current user and zone')
		.option(
			'--environment',
			'Include the organizations and teams this token can reach, including private spaces (needs organizations:read and teams:read)',
		)
		.helpGroup('Others:')
		.action(async (options: { environment?: boolean }, cmd: Command) => {
			try {
				const { make, zone } = await createMakeClient(cmd);
				const [{ name, email }, organizations] = await Promise.all([
					make.users.me(),
					options.environment ? _getEnvironment(make) : undefined,
				]);
				const { output } = cmd.optsWithGlobals<GlobalOptions>();
				const result = { name, email, zone, ...(organizations ? { organizations } : {}) };
				process.stdout.write(`${formatOutput(result, output ?? 'json')}\n`);
			} catch (error) {
				exitWithError(error);
			}
		});
};
