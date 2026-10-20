import type { Make } from '@makehq/sdk';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { EndpointsSdk } from '../lib/endpoints-sdk.ts';
import type { EndpointDefinition } from '../lib/shared.ts';
import { resolveProjectId } from '../lib/teams-to-projects.ts';
import type { EndpointTool } from '../lib/tools.ts';
import { buildEndpointTools } from '../lib/tools.ts';
import { SdkTransport } from '../lib/transport/sdk-transport.ts';

import { DEFINITIONS } from './fixtures/endpoint-definitions.ts';

/** An app endpoint with an input field named `projectId` of its own, like Jira or Linear. */
const JIRA_GET_PROJECT: EndpointDefinition = {
	appName: 'jira',
	appVersion: 1,
	endpointName: 'getProject',
	accounts: { jira: {} },
	inputSchema: {
		type: 'object',
		properties: {
			projectId: { type: 'string', description: 'The Jira project.' },
		},
		required: ['projectId'],
	},
	outputSchema: { type: 'object', properties: {} },
};

const tools = buildEndpointTools([...DEFINITIONS, JIRA_GET_PROJECT]);

const getTool = (name: string): EndpointTool => {
	const tool = tools.find((candidate) => candidate.name === name);
	if (!tool) throw new Error(`No tool named ${name}`);
	return tool;
};

const createMake = () => {
	const fetch = vi.fn().mockResolvedValue({ output: { ok: true }, packages: [] });
	const connectionsList = vi.fn().mockResolvedValue([]);
	return {
		fetch,
		connectionsList,
		make: { fetch, connections: { list: connectionsList } } as unknown as Make,
	};
};

const sentBody = (fetch: ReturnType<typeof vi.fn>): unknown =>
	(fetch.mock.lastCall?.[1] as { body: unknown }).body;

afterEach(() => {
	vi.unstubAllEnvs();
	vi.resetModules();
});

describe('resolveProjectId', () => {
	it('takes projectId, or teamId as its alias', () => {
		expect(resolveProjectId(7, undefined)).toBe(7);
		expect(resolveProjectId(undefined, 7)).toBe(7);
		expect(resolveProjectId(7, 7)).toBe(7);
		expect(resolveProjectId(undefined, undefined)).toBeUndefined();
	});

	it('rejects different values', () => {
		expect(() => resolveProjectId(7, 8)).toThrow('projectId and teamId differ.');
	});
});

describe('EndpointsSdk options', () => {
	const POINTER = {
		appName: 'alpha',
		appVersion: 1,
		endpointName: 'getItem',
	} as const;

	// JavaScript callers can pass `projectId` alone, so cast past the type, which still asks for `teamId`.
	const sdkWith = (options: Record<string, unknown>) => {
		const { fetch, make } = createMake();
		const sdk = new EndpointsSdk({
			transport: new SdkTransport(make),
			...options,
		} as unknown as ConstructorParameters<typeof EndpointsSdk>[0]);
		return { fetch, sdk };
	};

	it.each([{ teamId: 7 }, { projectId: 7 }, { teamId: 7, projectId: 7 }])(
		'still sends teamId to the API for %j',
		async (options) => {
			const { fetch, sdk } = sdkWith(options);

			await sdk.execute(POINTER, { input: {} });

			expect(fetch).toHaveBeenCalledWith('/endpoints/execute', {
				method: 'POST',
				body: { ...POINTER, input: {}, teamId: 7 },
			});
		},
	);

	it('rejects different projectId and teamId', () => {
		expect(() => sdkWith({ teamId: 7, projectId: 8 })).toThrow('projectId and teamId differ.');
	});

	it('leaves a teamId that is not a number to the API, as before', async () => {
		const { fetch, sdk } = sdkWith({ teamId: '7' });

		await sdk.execute(POINTER, { input: {} });

		expect(sentBody(fetch)).toMatchObject({ teamId: '7' });
	});
});

describe('tool schemas', () => {
	it('keep teamId required and add projectId as an optional alias', () => {
		for (const name of [
			'alpha_get-item',
			'beta_list-things',
			'endpoints_execute',
			'endpoints_list-usable',
			'connections_list',
		]) {
			const { inputSchema } = getTool(name);
			expect(inputSchema.required).toContain('teamId');
			expect(inputSchema.required).not.toContain('projectId');
			expect(inputSchema.properties?.teamId).toMatchObject({ type: 'number' });
			expect(inputSchema.properties?.projectId).toMatchObject({
				type: 'number',
			});
		}
	});

	it('leave the app field alone when an endpoint has a projectId input of its own', () => {
		const { inputSchema } = getTool('jira_get-project');

		expect(inputSchema.properties?.projectId).toEqual({
			type: 'string',
			description: 'The Jira project.',
		});
		expect(inputSchema.required).toEqual(['teamId', 'connectionId']);
	});
});

describe('tools accept projectId as an alias of teamId', () => {
	it.each([{ teamId: 7 }, { projectId: 7 }, { teamId: 7, projectId: 7 }])(
		'run an endpoint tool with %j',
		async (scope) => {
			const { fetch, make } = createMake();

			await getTool('beta_list-things').execute(make, scope);

			expect(sentBody(fetch)).toMatchObject({ teamId: 7 });
			expect(sentBody(fetch)).not.toHaveProperty('projectId');
		},
	);

	it('does not send projectId inside the endpoint input', async () => {
		const { fetch, make } = createMake();

		await getTool('alpha_get-item').execute(make, {
			projectId: 7,
			connectionId: 9,
			itemId: 'i1',
			input: { teamId: 'user-data' },
		});

		expect(sentBody(fetch)).toMatchObject({
			teamId: 7,
			input: { itemId: 'i1', teamId: 'user-data' },
		});
	});

	it('keeps a user projectId inside `input` untouched', async () => {
		const { fetch, make } = createMake();

		await getTool('alpha_get-item').execute(make, {
			teamId: 7,
			connectionId: 9,
			itemId: 'i1',
			input: { projectId: 'user-data', teamId: 'field' },
		});

		const { input } = sentBody(fetch) as { input: Record<string, unknown> };
		expect(input.projectId).toBe('user-data');
		expect(input.itemId).toBe('i1');
	});

	it('never takes an endpoint input named projectId for the Make scope', async () => {
		const { fetch, make } = createMake();

		await getTool('jira_get-project').execute(make, {
			teamId: 7,
			connectionId: 9,
			projectId: 'JIRA-1',
		});

		expect(sentBody(fetch)).toMatchObject({
			teamId: 7,
			input: { projectId: 'JIRA-1' },
		});
		await expect(
			getTool('jira_get-project').execute(make, {
				projectId: 'JIRA-1',
				connectionId: 9,
			}),
		).rejects.toThrow(/^(team|project)Id must be a number\.$/);
	});

	it('rejects different projectId and teamId before any request', async () => {
		const { fetch, make } = createMake();

		for (const name of ['beta_list-things', 'endpoints_list-usable', 'connections_list']) {
			await expect(getTool(name).execute(make, { teamId: 7, projectId: 8 })).rejects.toThrow(
				'projectId and teamId differ.',
			);
		}
		await expect(
			getTool('endpoints_execute').execute(make, {
				appName: 'alpha',
				appVersion: 1,
				endpointName: 'getItem',
				teamId: 7,
				projectId: 8,
			}),
		).rejects.toThrow('projectId and teamId differ.');
		expect(fetch).not.toHaveBeenCalled();
	});

	it('serves endpoints_execute, endpoints_list-usable and connections_list by projectId', async () => {
		const { connectionsList, fetch, make } = createMake();

		await getTool('endpoints_execute').execute(make, {
			appName: 'alpha',
			appVersion: 1,
			endpointName: 'getItem',
			projectId: 7,
		});
		expect(sentBody(fetch)).toMatchObject({ teamId: 7 });

		await getTool('endpoints_list-usable').execute(make, { projectId: 7 });
		expect(fetch).toHaveBeenLastCalledWith('/imt/endpoints-usable', {
			method: 'GET',
			query: { teamId: '7' },
		});

		await getTool('connections_list').execute(make, { projectId: 7 });
		expect(connectionsList).toHaveBeenCalledWith(7, { cols: ['*'] });
	});
});

describe('wording with TEAMS_TO_PROJECTS', () => {
	const load = async (value?: string) => {
		vi.resetModules();
		if (value === undefined) vi.unstubAllEnvs();
		else vi.stubEnv('TEAMS_TO_PROJECTS', value);
		return import('../lib/tools.ts');
	};

	it('changes only text: schema keys and required stay the same', async () => {
		const off = (await load()).buildEndpointTools(DEFINITIONS);
		const on = (await load('1')).buildEndpointTools(DEFINITIONS);

		for (const [index, tool] of off.entries()) {
			const other = on[index];
			expect(Object.keys(other?.inputSchema.properties ?? {}).sort()).toEqual(
				Object.keys(tool.inputSchema.properties ?? {}).sort(),
			);
			expect(other?.inputSchema.required).toEqual(tool.inputSchema.required);
		}
		expect(
			on.find((tool) => tool.name === 'alpha_get-item')?.inputSchema.properties?.projectId
				?.description,
		).toBe('The ID of the Project (formerly Team) the Endpoint is executed in.');
	});

	it('says project in the not-a-number error, and still accepts both names', async () => {
		const { buildEndpointTools: build } = await load('true');
		const tool = build(DEFINITIONS).find(({ name }) => name === 'beta_list-things');
		const { make } = createMake();

		await expect(tool?.execute(make, { teamId: '7' })).rejects.toThrow(
			'projectId must be a number.',
		);
		await expect(tool?.execute(make, { projectId: 7 })).resolves.toBeDefined();
		await expect(tool?.execute(make, { teamId: 7 })).resolves.toBeDefined();
	});
});
