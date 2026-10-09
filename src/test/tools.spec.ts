import type { Make } from '@makehq/sdk';
import type { MakeTool } from '@makehq/sdk/tools';
import { describe, expect, it, vi } from 'vitest';

import type { EndpointTool } from '../lib/tools.ts';
import { buildEndpointTools } from '../lib/tools.ts';

import { BETA_V1_LIST_THINGS, DEFINITIONS } from './fixtures/endpoint-definitions.ts';

const tools = buildEndpointTools(DEFINITIONS);

const getTool = (name: string): EndpointTool => {
	const tool = tools.find((candidate) => candidate.name === name);
	if (!tool) throw new Error(`No tool named ${name}`);
	return tool;
};

const createMake = (fetch = vi.fn().mockResolvedValue({ output: { id: 'item-1' } })) => {
	return { fetch, make: { fetch } as unknown as Make };
};

describe('buildEndpointTools', () => {
	it('builds tools that are valid MakeTool definitions', () => {
		// Compile-time check: `EndpointTool` is declared locally and must stay assignable.
		const makeTools: MakeTool[] = tools;
		expect(makeTools).toHaveLength(DEFINITIONS.length + 1);
	});

	it('names the latest version by app and older versions by app and version', () => {
		expect(tools.map(({ name, category, latest }) => ({ name, category, latest }))).toEqual([
			{ name: 'alpha-v1_get-item', category: 'alpha-v1', latest: false },
			{ name: 'alpha_get-item', category: 'alpha', latest: true },
			{ name: 'alpha_legacy-call', category: 'alpha', latest: true },
			{ name: 'beta_list-things', category: 'beta', latest: true },
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

	it('always includes the generic endpoints_execute tool', () => {
		expect(buildEndpointTools([]).map((tool) => tool.name)).toEqual(['endpoints_execute']);
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
