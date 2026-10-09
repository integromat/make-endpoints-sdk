import type { Make } from '@makehq/sdk';
import type { MakeTool } from '@makehq/sdk/tools';
import { describe, expect, it, vi } from 'vitest';

import type { JSONValue } from '../lib/shared.ts';
import type { EndpointTool } from '../lib/tools.ts';
import { buildEndpointTools } from '../lib/tools.ts';

import { BETA_V1_LIST_THINGS, DEFINITIONS } from './fixtures/endpoint-definitions.ts';

const tools = buildEndpointTools(DEFINITIONS);

const getTool = (name: string): EndpointTool => {
	const tool = tools.find((candidate) => candidate.name === name);
	if (!tool) throw new Error(`No tool named ${name}`);
	return tool;
};

/** A connection row as the API returns it with `cols[]=*`. */
const connectionRow = (id: number, accountName: string, scoped: boolean) => ({
	id,
	name: `Connection ${id}`,
	accountName,
	accountLabel: `Label of ${accountName}`,
	accountType: 'oauth',
	expire: null,
	packageName: 'alpha',
	metadata: null,
	teamId: 7,
	theme: '#000000',
	upgradeable: false,
	scopesCnt: 2,
	scoped,
	editable: true,
	uid: null,
	connectedSystemId: null,
});

const CONNECTIONS = [connectionRow(1, 'alpha', true), connectionRow(2, 'alpha-oauth', false)];

const createMake = (fetch = vi.fn().mockResolvedValue({ output: { id: 'item-1' } })) => {
	const connectionsList = vi.fn().mockResolvedValue(CONNECTIONS);
	return {
		fetch,
		connectionsList,
		make: { fetch, connections: { list: connectionsList } } as unknown as Make,
	};
};

describe('buildEndpointTools', () => {
	it('builds tools that are valid MakeTool definitions', () => {
		// Compile-time check: `EndpointTool` is declared locally and must stay assignable.
		const makeTools: MakeTool[] = tools;
		expect(makeTools).toHaveLength(DEFINITIONS.length + 3);
	});

	it('names the latest version by app and older versions by app and version', () => {
		expect(tools.map(({ name, category, latest }) => ({ name, category, latest }))).toEqual([
			{ name: 'alpha-v1_get-item', category: 'alpha-v1', latest: false },
			{ name: 'alpha_get-item', category: 'alpha', latest: true },
			{ name: 'alpha_legacy-call', category: 'alpha', latest: true },
			{ name: 'beta_list-things', category: 'beta', latest: true },
			{ name: 'connections_list', category: 'connections', latest: undefined },
			{ name: 'endpoints_list-usable', category: 'endpoints', latest: undefined },
			{ name: 'endpoints_execute', category: 'endpoints', latest: undefined },
		]);
	});

	it('describes the tool from the definition', () => {
		expect(getTool('alpha_get-item')).toMatchObject({
			title: 'Get an item',
			description: 'Gets an item by its ID.',
			scope: 'endpoints:run',
			scopeId: 'teamId',
			annotations: { readOnlyHint: true },
		});
		expect(getTool('alpha-v1_get-item').description).toBe('Get an item (v1)');
		expect(getTool('alpha_legacy-call')).toMatchObject({
			title: 'LegacyCall',
			description: '[DEPRECATED] alpha_legacy-call',
		});
		expect(getTool('alpha_legacy-call')).not.toHaveProperty('annotations');
	});

	it('flattens input fields next to teamId, connectionId and the whole input', () => {
		const { inputSchema } = getTool('alpha_get-item');

		expect(Object.keys(inputSchema.properties ?? {})).toEqual([
			'teamId',
			'connectionId',
			'itemId',
			'input',
		]);
		expect(inputSchema.properties?.teamId).toEqual({
			type: 'number',
			description: 'The ID of the Team the Endpoint is executed in.',
		});
		expect(inputSchema.properties?.connectionId?.description).toBe(
			'ID of the Connection to use (alpha, alpha-oauth).',
		);
		// The clashing `teamId` input field stays reachable through `input`.
		expect(inputSchema.properties?.input).toMatchObject({
			type: 'object',
			properties: { teamId: { type: 'string' } },
			required: ['itemId', 'teamId'],
		});
		expect(inputSchema.required).toEqual(['teamId', 'connectionId']);
	});

	it('omits connectionId for endpoints without connection types', () => {
		const { inputSchema } = getTool('beta_list-things');

		expect(inputSchema.properties).not.toHaveProperty('connectionId');
		expect(inputSchema.required).toEqual(['teamId']);
	});

	it('always includes the discovery tools and ends with endpoints_execute', () => {
		expect(buildEndpointTools([]).map((tool) => tool.name)).toEqual([
			'connections_list',
			'endpoints_list-usable',
			'endpoints_execute',
		]);
	});
});

describe('endpoint tool execute', () => {
	it('posts the pointer, the merged input, the connection and the team', async () => {
		const { fetch, make } = createMake();

		const output = await getTool('alpha_get-item').execute(make, {
			teamId: 7,
			connectionId: 9,
			input: { itemId: 'from-input', teamId: 'field' },
			itemId: 'from-field',
		});

		expect(output).toEqual({ id: 'item-1' });
		expect(fetch).toHaveBeenCalledWith('/endpoints/execute', {
			method: 'POST',
			body: {
				appName: 'alpha',
				appVersion: 2,
				endpointName: 'getItem',
				input: { itemId: 'from-field', teamId: 'field' },
				connectionId: 9,
				teamId: 7,
			},
		});
	});

	it('calls the version the tool was built for', async () => {
		const { fetch, make } = createMake();

		await getTool('alpha-v1_get-item').execute(make, {
			teamId: 7,
			connectionId: 9,
			input: { teamId: 'field' },
			itemId: 'item-1',
		});

		expect(fetch.mock.calls[0]?.[1]).toMatchObject({ body: { appVersion: 1 } });
	});

	it('sends an empty input and no connection when there are none', async () => {
		const { fetch, make } = createMake();

		await buildEndpointTools([BETA_V1_LIST_THINGS])[0]?.execute(make, { teamId: 7 });

		expect(fetch.mock.calls[0]?.[1]).toEqual({
			method: 'POST',
			body: {
				appName: 'beta',
				appVersion: 1,
				endpointName: 'listThings',
				input: {},
				teamId: 7,
			},
		});
	});

	it('rejects missing required input fields before calling the endpoint', async () => {
		const { fetch, make } = createMake();

		await expect(
			getTool('alpha_get-item').execute(make, { teamId: 7, connectionId: 9 }),
		).rejects.toThrow('Missing required input fields: itemId, teamId.');
		expect(fetch).not.toHaveBeenCalled();
	});

	it('rejects a teamId that is not a number', async () => {
		const { make } = createMake();

		await expect(getTool('beta_list-things').execute(make, { teamId: '7' })).rejects.toThrow(
			'teamId must be a number.',
		);
	});
});

describe('endpoints_execute', () => {
	it('calls any endpoint by name', async () => {
		const { fetch, make } = createMake();

		const output = await getTool('endpoints_execute').execute(make, {
			appName: 'app#custom',
			appVersion: 3,
			endpointName: 'doThing',
			teamId: 7,
			connectionId: 9,
			input: { key: 'value' },
		});

		expect(output).toEqual({ id: 'item-1' });
		expect(fetch).toHaveBeenCalledWith('/endpoints/execute', {
			method: 'POST',
			body: {
				appName: 'app#custom',
				appVersion: 3,
				endpointName: 'doThing',
				input: { key: 'value' },
				connectionId: 9,
				teamId: 7,
			},
		});
	});

	it('rejects a call without the endpoint pointer', async () => {
		const { make } = createMake();

		await expect(
			getTool('endpoints_execute').execute(make, { appName: 'alpha', teamId: 7 }),
		).rejects.toThrow('appName, appVersion and endpointName are required.');
	});

	it('rejects an input that is not an object', async () => {
		const { make } = createMake();

		await expect(
			getTool('endpoints_execute').execute(make, {
				appName: 'alpha',
				appVersion: 1,
				endpointName: 'getItem',
				teamId: 7,
				input: 'nope',
			}),
		).rejects.toThrow('input must be an object.');
	});
});

describe('endpoints_list-usable', () => {
	const packages = [
		{
			name: 'alpha',
			label: 'Alpha',
			versions: [
				{
					version: 2,
					endpoints: [
						{
							name: 'getItem',
							label: 'Get an item',
							deprecated: false,
							private: false,
							credentialsRequired: true,
							credentialsAvailable: [{ id: 1, name: 'Connection 1' }],
						},
					],
				},
			],
		},
	];

	it('lists the packages of endpoints the team can use', async () => {
		const { fetch, make } = createMake(vi.fn().mockResolvedValue({ packages }));

		const output = await getTool('endpoints_list-usable').execute(make, { teamId: 7 });

		expect(output).toEqual(packages);
		expect(fetch).toHaveBeenCalledWith('/imt/endpoints-usable', {
			method: 'GET',
			query: { teamId: '7' },
		});
	});

	it('rejects a teamId that is not a number', async () => {
		const { fetch, make } = createMake();

		await expect(
			getTool('endpoints_list-usable').execute(make, { teamId: '7' }),
		).rejects.toThrow('teamId must be a number.');
		expect(fetch).not.toHaveBeenCalled();
	});
});

describe('connections_list', () => {
	const listConnections = (args: Record<string, JSONValue>) => {
		const { connectionsList, make } = createMake();
		return { connectionsList, output: getTool('connections_list').execute(make, args) };
	};

	it('trims rows to the documented columns', async () => {
		const { connectionsList, output } = listConnections({ teamId: 7 });

		expect(await output).toEqual([
			{
				id: 1,
				name: 'Connection 1',
				accountName: 'alpha',
				accountLabel: 'Label of alpha',
				accountType: 'oauth',
				expire: null,
			},
			{
				id: 2,
				name: 'Connection 2',
				accountName: 'alpha-oauth',
				accountLabel: 'Label of alpha-oauth',
				accountType: 'oauth',
				expire: null,
			},
		]);
		expect(connectionsList).toHaveBeenCalledWith(7, { cols: ['*'] });
	});

	it('passes type and scopes through and reports scoped', async () => {
		const { connectionsList, output } = listConnections({
			teamId: 7,
			type: ['alpha'],
			scopes: { alpha: ['items:read'] },
		});

		expect(await output).toMatchObject([{ id: 1, scoped: true }, { id: 2, scoped: false }]);
		expect(connectionsList).toHaveBeenCalledWith(7, {
			type: ['alpha'],
			scopes: { alpha: ['items:read'] },
			cols: ['*'],
		});
	});

	it("filters by the connection types of the app's latest version", async () => {
		const { connectionsList, output } = listConnections({ teamId: 7, app: 'alpha' });

		const rows = (await output) as Record<string, JSONValue>[];
		expect(connectionsList).toHaveBeenCalledWith(7, {
			type: ['alpha', 'alpha-oauth'],
			cols: ['*'],
		});
		expect(rows.map(({ id, usableFor }) => ({ id, usableFor }))).toEqual([
			{ id: 1, usableFor: ['getItem', 'LegacyCall'] },
			{ id: 2, usableFor: ['getItem'] },
		]);
		expect(rows[0]).not.toHaveProperty('scoped');
	});

	it('filters by the connection types of an older version', async () => {
		const { connectionsList, output } = listConnections({
			teamId: 7,
			app: 'alpha',
			appVersion: 1,
		});

		await output;
		expect(connectionsList).toHaveBeenCalledWith(7, { type: ['alpha'], cols: ['*'] });
	});

	it.each(['get-item', 'getItem'])(
		'sends the scopes endpoint %s requires and reports them per row',
		async (endpoint) => {
			const { connectionsList, output } = listConnections({
				teamId: 7,
				app: 'alpha',
				endpoint,
			});

			expect(await output).toMatchObject([
				{ id: 1, scoped: true, requiredScopes: ['items:read'], usableFor: ['getItem'] },
				{
					id: 2,
					scoped: false,
					requiredScopes: ['items:read', 'profile'],
					usableFor: ['getItem'],
				},
			]);
			expect(connectionsList).toHaveBeenCalledWith(7, {
				type: ['alpha', 'alpha-oauth'],
				scopes: { alpha: ['items:read'], 'alpha-oauth': ['items:read', 'profile'] },
				cols: ['*'],
			});
		},
	);

	it('leaves out connection types that need no scopes', async () => {
		const { connectionsList, output } = listConnections({
			teamId: 7,
			app: 'alpha',
			endpoint: 'legacy-call',
		});

		await output;
		expect(connectionsList).toHaveBeenCalledWith(7, { type: ['alpha'], cols: ['*'] });
	});

	it.each([
		[{ teamId: '7' }, 'teamId must be a number.'],
		[
			{ teamId: 7, app: 'beta', endpoint: 'list-things' },
			'Endpoint "list-things" of app "beta" takes no connection.',
		],
		[{ teamId: 7, app: 'beta' }, 'App "beta" takes no connection.'],
		[{ teamId: 7, app: 'alpha', type: ['alpha'] }, 'Use either app/endpoint or type/scopes.'],
		[{ teamId: 7, endpoint: 'get-item' }, 'appVersion and endpoint require app.'],
		[{ teamId: 7, appVersion: 1 }, 'appVersion and endpoint require app.'],
		[{ teamId: 7, type: 'alpha' }, 'type must be an array of strings.'],
		[
			{ teamId: 7, scopes: { alpha: ['items:read'] } },
			'Every connection type in scopes must also be listed in type.',
		],
		[
			{ teamId: 7, type: ['alpha-oauth'], scopes: { alpha: ['items:read'] } },
			'Every connection type in scopes must also be listed in type.',
		],
		[
			{ teamId: 7, scopes: { alpha: 'items:read' } },
			'scopes must be an object of string arrays.',
		],
		[{ teamId: 7, app: 'gamma' }, 'Unknown app "gamma".'],
		[{ teamId: 7, app: 'alpha', appVersion: 9 }, 'Unknown version 9 of app "alpha".'],
		[
			{ teamId: 7, app: 'alpha', endpoint: 'nope' },
			'Unknown endpoint "nope" of app "alpha" v2.',
		],
	])('rejects %j', async (args, message) => {
		const { connectionsList, output } = listConnections(args);

		await expect(output).rejects.toThrow(message);
		expect(connectionsList).not.toHaveBeenCalled();
	});
});
