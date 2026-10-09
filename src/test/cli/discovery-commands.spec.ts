import { stripVTControlCharacters } from 'node:util';

import { MakeError } from '@makehq/sdk';
import type { Command } from 'commander';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createProgram } from '../../cli/program.ts';
import { sdkDiscoveryTools } from '../../cli/sdk-tools.ts';
import { buildEndpointTools } from '../../lib/tools.ts';
import { DEFINITIONS } from '../fixtures/endpoint-definitions.ts';

const { fetchMock, usersMe, organizationsList, teamsList, connectionsList } = vi.hoisted(() => ({
	fetchMock: vi.fn(),
	usersMe: vi.fn(),
	organizationsList: vi.fn(),
	teamsList: vi.fn(),
	connectionsList: vi.fn(),
}));

// `Make` binds `fetch` into its namespaces at construction, so the namespaces are mocked as well.
vi.mock('@makehq/sdk', async (importOriginal) => {
	const actual = await importOriginal<typeof import('@makehq/sdk')>();
	return {
		...actual,
		Make: class {
			fetch = fetchMock;
			users = { me: usersMe };
			organizations = { list: organizationsList };
			teams = { list: teamsList };
			connections = { list: connectionsList };
		},
	};
});

class ExitError extends Error {
	constructor(readonly code: number | string | null | undefined) {
		super(`process.exit(${code})`);
	}
}

const USER = { id: 1, name: 'Ada', email: 'ada@example.com', language: 'en' };

const PACKAGES = [
	{
		name: 'alpha',
		label: 'Alpha',
		versions: [
			{
				version: 1,
				endpoints: [
					{
						name: 'getItem',
						label: 'Get an item (v1)',
						deprecated: false,
						private: false,
						credentialsRequired: true,
						credentialsAvailable: [{ id: 1, name: 'My Alpha' }],
					},
				],
			},
			{
				version: 2,
				endpoints: [
					{
						name: 'getItem',
						label: 'Get an item',
						deprecated: false,
						private: false,
						credentialsRequired: true,
						credentialsAvailable: [{ id: 1, name: 'My Alpha' }],
					},
					{
						name: 'newThing',
						label: 'A new thing',
						deprecated: false,
						private: false,
						credentialsRequired: false,
						credentialsAvailable: [],
					},
				],
			},
		],
	},
	{ name: 'beta', label: 'Beta', versions: [] },
];

let stdout: string;
let stderr: string;

beforeEach(() => {
	stdout = '';
	stderr = '';
	for (const mock of [fetchMock, usersMe, organizationsList, teamsList, connectionsList]) {
		mock.mockReset();
	}
	fetchMock.mockResolvedValue({ packages: PACKAGES });
	usersMe.mockResolvedValue(USER);
	vi.stubEnv('MAKE_API_KEY', 'api-key');
	vi.stubEnv('MAKE_ZONE', 'eu1.make.com');
	vi.spyOn(process.stdout, 'write').mockImplementation((chunk) => {
		stdout += String(chunk);
		return true;
	});
	vi.spyOn(process.stderr, 'write').mockImplementation((chunk) => {
		stderr += String(chunk);
		return true;
	});
	vi.spyOn(process, 'exit').mockImplementation((code) => {
		throw new ExitError(code);
	});
});

afterEach(() => {
	vi.restoreAllMocks();
	vi.unstubAllEnvs();
});

const createDiscoveryProgram = (): Command => {
	return createProgram({
		version: '0.0.0',
		tools: [...buildEndpointTools(DEFINITIONS), ...sdkDiscoveryTools()],
	});
};

const run = (args: string[]): Promise<Command> => {
	return createDiscoveryProgram().parseAsync(args, { from: 'user' });
};

const findCommand = (parent: Command, ...path: string[]): Command | undefined => {
	return path.reduce<Command | undefined>(
		(command, name) => command?.commands.find((child) => child.name() === name),
		parent,
	);
};

describe('command tree', () => {
	it('resolves every SDK discovery tool', () => {
		expect(sdkDiscoveryTools().map((tool) => tool.name)).toEqual([
			'users_me',
			'organizations_list',
			'teams_list',
		]);
	});

	it('adds whoami and the SDK discovery commands', () => {
		const program = createDiscoveryProgram();

		expect(findCommand(program, 'whoami')).toBeDefined();
		expect(findCommand(program, 'users', 'me')).toBeDefined();
		expect(findCommand(program, 'organizations', 'list')).toBeDefined();
		expect(findCommand(program, 'teams', 'list')).toBeDefined();
	});
});

describe('SDK discovery commands', () => {
	it('prints the current user', async () => {
		await run(['users', 'me']);

		expect(usersMe).toHaveBeenCalled();
		expect(JSON.parse(stdout)).toEqual(USER);
	});

	it('lists organizations', async () => {
		organizationsList.mockResolvedValue([{ id: 1, name: 'Org' }]);

		await run(['organizations', 'list']);

		expect(organizationsList).toHaveBeenCalled();
		expect(JSON.parse(stdout)).toEqual([{ id: 1, name: 'Org' }]);
	});

	it('lists the teams of an organization, including private spaces', async () => {
		teamsList.mockResolvedValue([]);

		await run(['teams', 'list', '--organization-id', '5', '--include-private-spaces']);

		expect(teamsList.mock.lastCall?.[0]).toBe(5);
		expect(teamsList.mock.lastCall?.[1]).toMatchObject({ includePrivateSpaces: true });
	});
});

describe('connections list', () => {
	it('prints the trimmed columns', async () => {
		connectionsList.mockResolvedValue([
			{
				id: 1,
				name: 'My Alpha',
				accountName: 'alpha-oauth',
				accountLabel: 'Alpha (OAuth)',
				accountType: 'oauth',
				expire: null,
				packageName: 'alpha',
				scoped: false,
				teamId: 7,
			},
		]);

		await run([
			'connections',
			'list',
			'--team-id',
			'7',
			'--app',
			'alpha',
			'--endpoint',
			'get-item',
			'--output',
			'table',
		]);

		const [header] = stripVTControlCharacters(stdout).split('\n');
		expect(header?.split('|').map((column) => column.trim())).toEqual([
			'id',
			'name',
			'accountName',
			'accountLabel',
			'accountType',
			'expire',
			'scoped',
			'requiredScopes',
			'usableFor',
		]);
		expect(connectionsList).toHaveBeenCalledWith(7, {
			type: ['alpha', 'alpha-oauth'],
			scopes: { alpha: ['items:read'], 'alpha-oauth': ['items:read', 'profile'] },
			cols: ['*'],
		});
	});

	it('exits with 1 when app and type are combined', async () => {
		await expect(
			run(['connections', 'list', '--team-id', '7', '--app', 'alpha', '--type', '["x"]']),
		).rejects.toThrow(new ExitError(1));

		expect(stderr).toBe('Error: Use either app/endpoint or type/scopes.\n');
		expect(connectionsList).not.toHaveBeenCalled();
	});
});

describe('list --team-id', () => {
	it('lists the apps the team can use', async () => {
		await run(['list', '--team-id', '7']);

		expect(fetchMock).toHaveBeenCalledWith('/imt/endpoints-usable', {
			method: 'GET',
			query: { teamId: '7' },
		});
		expect(JSON.parse(stdout)).toEqual([
			{ name: 'alpha', label: 'Alpha', versions: ['v1', 'v2'], endpointCount: 3 },
			{ name: 'beta', label: 'Beta', versions: [], endpointCount: 0 },
		]);
	});

	it('lists the usable endpoints of an app, naming only bundled ones', async () => {
		await run(['list', 'alpha', '--team-id', '7']);

		expect(JSON.parse(stdout)).toEqual([
			{
				name: 'get-item',
				version: 'v1',
				endpointName: 'getItem',
				title: 'Get an item (v1)',
				deprecated: false,
				credentialsRequired: true,
				connections: [{ id: 1, name: 'My Alpha' }],
			},
			{
				name: 'get-item',
				version: 'v2',
				endpointName: 'getItem',
				title: 'Get an item',
				deprecated: false,
				credentialsRequired: true,
				connections: [{ id: 1, name: 'My Alpha' }],
			},
			{
				version: 'v2',
				endpointName: 'newThing',
				title: 'A new thing',
				deprecated: false,
				credentialsRequired: false,
				connections: [],
			},
		]);
	});

	it('lists the usable endpoints of one version', async () => {
		await run(['list', 'alpha', 'v1', '--team-id', '7']);

		expect(JSON.parse(stdout)).toMatchObject([{ version: 'v1', endpointName: 'getItem' }]);
	});

	it.each([
		[['list', 'gamma', '--team-id', '7'], 'App "gamma" has no usable endpoints in team 7.'],
		[['list', 'beta', '--team-id', '7'], 'App "beta" has no usable endpoints in team 7.'],
		[
			['list', 'alpha', 'v9', '--team-id', '7'],
			'Version "v9" of app "alpha" has no usable endpoints in team 7.',
		],
	])('exits with 1 for what the team cannot use: %j', async (args, message) => {
		await expect(run(args)).rejects.toThrow(new ExitError(1));

		expect(stderr).toBe(`Error: ${message}\n`);
	});

	it('exits with 2 when Endpoints are not enabled', async () => {
		fetchMock.mockRejectedValue(
			new MakeError('Endpoints execution is not enabled on this environment.', 400),
		);

		await expect(run(['list', '--team-id', '7'])).rejects.toThrow(new ExitError(2));

		expect(stderr).toBe(
			'Error [400]: Endpoints execution is not enabled on this environment.\n',
		);
	});

	it.each([
		[['list', '--team-id', 'x'], 'Invalid team ID "x", expected an integer.'],
		[['list', '--team-id', ''], 'Invalid team ID "", expected an integer.'],
		[['list', 'alpha', '2', '--team-id', '7'], 'Invalid version "2", expected v<N> (e.g. v2).'],
	])('exits with 1 before calling the API for %j', async (args, message) => {
		await expect(run(args)).rejects.toThrow(new ExitError(1));

		expect(stderr).toBe(`Error: ${message}\n`);
		expect(fetchMock).not.toHaveBeenCalled();
	});
});

describe('whoami', () => {
	it('prints the user and the zone', async () => {
		await run(['whoami']);

		expect(JSON.parse(stdout)).toEqual({
			name: 'Ada',
			email: 'ada@example.com',
			zone: 'eu1.make.com',
		});
		expect(organizationsList).not.toHaveBeenCalled();
	});

	it('includes organizations and their teams with --environment', async () => {
		organizationsList.mockResolvedValue([{ id: 1, name: 'Org' }]);
		teamsList.mockResolvedValue([
			{ id: 7, name: 'Team', type: 'standard' },
			{ id: 8, name: 'Ada', type: 'personal' },
		]);

		await run(['whoami', '--environment']);

		expect(JSON.parse(stdout)).toEqual({
			name: 'Ada',
			email: 'ada@example.com',
			zone: 'eu1.make.com',
			organizations: [
				{
					id: 1,
					name: 'Org',
					teams: [
						{ id: 7, name: 'Team', type: 'standard' },
						{ id: 8, name: 'Ada', type: 'personal' },
					],
				},
			],
		});
		expect(organizationsList).toHaveBeenCalledWith({ cols: ['id', 'name'] });
		expect(teamsList).toHaveBeenCalledWith(1, {
			includePrivateSpaces: true,
			cols: ['id', 'name', 'type'],
		});
	});

	it('exits with 2 and prints nothing on an API error', async () => {
		usersMe.mockRejectedValue(new MakeError('Access denied', 403));
		organizationsList.mockResolvedValue([]);

		await expect(run(['whoami', '--environment'])).rejects.toThrow(new ExitError(2));

		expect(stderr).toBe('Error [403]: Access denied\n');
		expect(stdout).toBe('');
	});
});
