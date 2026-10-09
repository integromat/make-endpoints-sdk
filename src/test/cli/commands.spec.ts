import { MakeError } from '@makehq/sdk';
import type { Command } from 'commander';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { coerceValue } from '../../cli/commands.ts';
import { createProgram } from '../../cli/program.ts';
import type { EndpointDefinition } from '../../lib/shared.ts';
import { buildEndpointTools } from '../../lib/tools.ts';
import { DEFINITIONS } from '../fixtures/endpoint-definitions.ts';

const { fetchMock, makeConstructed } = vi.hoisted(() => ({
	fetchMock: vi.fn(),
	makeConstructed: vi.fn(),
}));

vi.mock('@makehq/sdk', async (importOriginal) => {
	const actual = await importOriginal<typeof import('@makehq/sdk')>();
	return {
		...actual,
		Make: class {
			fetch = fetchMock;
			constructor(token: string, zone: string) {
				makeConstructed(token, zone);
			}
		},
	};
});

class ExitError extends Error {
	constructor(readonly code: number | string | null | undefined) {
		super(`process.exit(${code})`);
	}
}

let stdout: string;
let stderr: string;

beforeEach(() => {
	stdout = '';
	stderr = '';
	fetchMock.mockReset().mockResolvedValue({ output: { id: 'item-1' } });
	makeConstructed.mockReset();
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

const run = (args: string[], definitions: EndpointDefinition[] = DEFINITIONS): Promise<Command> => {
	const program = createProgram({ version: '0.0.0', tools: buildEndpointTools(definitions) });
	return program.parseAsync(args, { from: 'user' });
};

const findCommand = (parent: Command, ...path: string[]): Command | undefined => {
	return path.reduce<Command | undefined>(
		(command, name) => command?.commands.find((child) => child.name() === name),
		parent,
	);
};

const lastBody = (): unknown => (fetchMock.mock.lastCall?.[1] as { body: unknown }).body;

describe('command tree', () => {
	const program = createProgram({ version: '0.0.0', tools: buildEndpointTools(DEFINITIONS) });

	it('puts every version of an app under v<N>', () => {
		expect(findCommand(program, 'alpha', 'v1', 'get-item')).toBeDefined();
		expect(findCommand(program, 'alpha', 'v2', 'get-item')).toBeDefined();
		expect(findCommand(program, 'alpha', 'v2', 'legacy-call')).toBeDefined();
	});

	it('also puts the latest version directly under the app', () => {
		expect(findCommand(program, 'alpha')?.commands.map((command) => command.name())).toEqual([
			'v1',
			'v2',
			'get-item',
			'legacy-call',
		]);
		expect(findCommand(program, 'beta', 'list-things')).toBeDefined();
	});

	it('keeps the generic and catalog commands next to the apps', () => {
		expect(program.commands.map((command) => command.name())).toEqual([
			'list',
			'describe',
			'alpha',
			'beta',
			'endpoints',
		]);
		expect(findCommand(program, 'endpoints', 'execute')).toBeDefined();
	});

	it('skips input fields whose flag would shadow a global option', () => {
		const flags = findCommand(program, 'beta', 'list-things')?.options.map(
			(option) => option.long,
		);

		expect(flags).toEqual(['--team-id', '--include-archived', '--limit', '--tags', '--input']);
	});
});

describe('endpoint commands', () => {
	it('calls the latest version and prints the output as JSON', async () => {
		await run([
			'alpha',
			'get-item',
			'--item-id',
			'i1',
			'--team-id',
			'7',
			'--connection-id',
			'9',
			'--input',
			'{"teamId":"t"}',
		]);

		expect(makeConstructed).toHaveBeenCalledWith('api-key', 'eu1.make.com');
		expect(fetchMock).toHaveBeenCalledWith('/endpoints/execute', {
			method: 'POST',
			body: {
				appName: 'alpha',
				appVersion: 2,
				endpointName: 'getItem',
				input: { teamId: 't', itemId: 'i1' },
				connectionId: 9,
				teamId: 7,
			},
		});
		expect(JSON.parse(stdout)).toEqual({ id: 'item-1' });
	});

	it('calls an older version through v<N>', async () => {
		await run([
			'alpha',
			'v1',
			'get-item',
			'--item-id',
			'i1',
			'--team-id',
			'7',
			'--connection-id',
			'9',
			'--input',
			'{"teamId":"t"}',
		]);

		expect(lastBody()).toMatchObject({
			appName: 'alpha',
			appVersion: 1,
			endpointName: 'getItem',
		});
	});

	it('lets separate flags override keys of --input', async () => {
		await run([
			'alpha',
			'get-item',
			'--input',
			'{"itemId":"a","teamId":"t"}',
			'--item-id',
			'b',
			'--team-id',
			'7',
			'--connection-id',
			'9',
		]);

		expect(lastBody()).toMatchObject({ input: { itemId: 'b', teamId: 't' } });
	});

	it('coerces flags to their schema types', async () => {
		await run([
			'beta',
			'list-things',
			'--team-id',
			'7',
			'--include-archived',
			'--limit',
			'5',
			'--tags',
			'["a"]',
			'--input',
			'{"output":"x"}',
		]);

		expect(lastBody()).toMatchObject({
			input: { includeArchived: true, limit: 5, tags: ['a'], output: 'x' },
		});
	});

	it('accepts an explicit false for boolean flags', async () => {
		await run(['beta', 'list-things', '--team-id', '7', '--include-archived', 'false']);

		expect(lastBody()).toMatchObject({ input: { includeArchived: false } });
	});

	it('honours the global --output option', async () => {
		await run(['--output', 'compact', 'beta', 'list-things', '--team-id', '7']);

		expect(stdout).toBe('{"id":"item-1"}\n');
	});

	it('honours global options after the endpoint command too', async () => {
		await run(['beta', 'list-things', '--team-id', '7', '--output', 'compact']);

		expect(stdout).toBe('{"id":"item-1"}\n');
		expect(lastBody()).toMatchObject({ input: {} });
	});

	it('exits with 1 when a required input field is missing', async () => {
		await expect(
			run(['alpha', 'get-item', '--team-id', '7', '--connection-id', '9']),
		).rejects.toThrow(new ExitError(1));

		expect(stderr).toBe('Error: Missing required input fields: itemId, teamId.\n');
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('exits with 1 when a required tool argument is missing', async () => {
		await expect(run(['alpha', 'get-item', '--item-id', 'i1'])).rejects.toThrow(ExitError);

		expect(stderr).toContain("required option '--team-id <value>' not specified");
	});

	it('exits with 2 on an API error', async () => {
		fetchMock.mockRejectedValue(new MakeError('Endpoint not found', 404));

		await expect(run(['beta', 'list-things', '--team-id', '7'])).rejects.toThrow(
			new ExitError(2),
		);

		expect(stderr).toBe('Error [404]: Endpoint not found\n');
	});

	it('rejects when there are no credentials', async () => {
		vi.stubEnv('MAKE_ZONE', '');

		await expect(
			run(['--api-key', 'flag-key', 'beta', 'list-things', '--team-id', '7']),
		).rejects.toThrow('Zone is required.');
	});
});

describe('endpoints execute', () => {
	it('works without any endpoint definitions', async () => {
		await run(
			[
				'endpoints',
				'execute',
				'--app-name',
				'app#custom',
				'--app-version',
				'3',
				'--endpoint-name',
				'doThing',
				'--team-id',
				'7',
				'--input',
				'{"key":"value"}',
			],
			[],
		);

		expect(lastBody()).toEqual({
			appName: 'app#custom',
			appVersion: 3,
			endpointName: 'doThing',
			input: { key: 'value' },
			teamId: 7,
		});
	});
});

describe('list', () => {
	it('lists apps with their versions', async () => {
		await run(['list']);

		expect(JSON.parse(stdout)).toEqual([
			{ name: 'alpha', versions: ['v1', 'v2'], endpointCount: 3 },
			{ name: 'beta', versions: ['v1'], endpointCount: 1 },
		]);
	});

	it('lists the endpoints of an app version', async () => {
		await run(['list', 'alpha', 'v2']);

		expect(JSON.parse(stdout)).toEqual([
			{
				name: 'get-item',
				version: 'v2',
				endpointName: 'getItem',
				title: 'Get an item',
				deprecated: false,
				connectionTypes: ['alpha', 'alpha-oauth'],
				scopes: ['items:read', 'profile'],
			},
			{
				name: 'legacy-call',
				version: 'v2',
				endpointName: 'LegacyCall',
				title: 'LegacyCall',
				deprecated: true,
				connectionTypes: ['alpha'],
				scopes: [],
			},
		]);
	});

	it('lists the endpoints of every version of an app', async () => {
		await run(['list', 'alpha']);

		expect(JSON.parse(stdout)).toHaveLength(3);
	});

	it('rejects an unknown app or version', async () => {
		await expect(run(['list', 'gamma'])).rejects.toThrow('Unknown app "gamma"');
		await expect(run(['list', 'alpha', 'v9'])).rejects.toThrow('Unknown version "v9"');
		await expect(run(['list', 'alpha', '2'])).rejects.toThrow('Invalid version "2"');
	});

	it('explains that a build without definitions only has endpoints execute', async () => {
		await expect(run(['list'], [])).rejects.toThrow(
			'This build has no endpoint metadata. Use "make-endpoints-cli endpoints execute" instead.',
		);
	});
});

describe('describe', () => {
	it('prints the tool definition of the latest version', async () => {
		await run(['describe', 'alpha', 'get-item']);

		const described = JSON.parse(stdout) as Record<string, unknown>;
		expect(described).toMatchObject({
			name: 'alpha_get-item',
			appName: 'alpha',
			appVersion: 2,
			endpointName: 'getItem',
			context: 'Prefer this over LegacyCall.',
			accounts: { alpha: { scope: ['items:read'] }, 'alpha-oauth': { scope: ['items:read', 'profile'] } },
			annotations: { readOnlyHint: true },
			inputSchema: { required: ['teamId', 'connectionId'] },
		});
		expect(described).not.toHaveProperty('outputSchema');
		expect(described).not.toHaveProperty('definition');
		expect(described).not.toHaveProperty('latest');
	});

	it('includes the output schema only with --output-schema', async () => {
		await run(['describe', 'alpha', 'get-item', '--output-schema']);

		expect(JSON.parse(stdout)).toMatchObject({
			name: 'alpha_get-item',
			outputSchema: { properties: { id: { type: 'string' } } },
		});
	});

	it('accepts the wire endpoint name and an explicit version', async () => {
		await run(['describe', 'alpha', 'v1', 'getItem']);

		expect(JSON.parse(stdout)).toMatchObject({ name: 'alpha-v1_get-item', appVersion: 1 });
	});

	it('marks deprecated endpoints', async () => {
		await run(['describe', 'alpha', 'LegacyCall']);

		expect(JSON.parse(stdout)).toMatchObject({ deprecated: true });
	});

	it('rejects an unknown endpoint or a malformed call', async () => {
		await expect(run(['describe', 'alpha', 'nope'])).rejects.toThrow('Unknown endpoint "nope"');
		await expect(run(['describe', 'alpha'])).rejects.toThrow('Usage:');
	});
});

describe('coerceValue', () => {
	it('parses numbers and integers', () => {
		expect(coerceValue('1.5', { type: 'number' })).toBe(1.5);
		expect(coerceValue('3', { type: 'integer' })).toBe(3);
		expect(() => coerceValue('abc', { type: 'number' })).toThrow('Expected a number, got: abc');
		expect(() => coerceValue('1.5', { type: 'integer' })).toThrow(
			'Expected an integer, got: 1.5',
		);
	});

	it('parses booleans', () => {
		expect(coerceValue('true', { type: 'boolean' })).toBe(true);
		expect(coerceValue('1', { type: 'boolean' })).toBe(true);
		expect(coerceValue('false', { type: 'boolean' })).toBe(false);
	});

	it('parses JSON objects and arrays', () => {
		expect(coerceValue('{"a":1}', { type: 'object' })).toEqual({ a: 1 });
		expect(coerceValue('[1]', { type: 'array' })).toEqual([1]);
		expect(() => coerceValue('{', { type: 'object' })).toThrow('Expected valid JSON, got: {');
		expect(() => coerceValue('[1]', { type: 'object' })).toThrow('Expected JSON object');
		expect(() => coerceValue('{}', { type: 'array' })).toThrow('Expected JSON array');
	});

	it('uses the first type of a type array and keeps untyped values as strings', () => {
		expect(coerceValue('2', { type: ['number', 'null'] } as never)).toBe(2);
		expect(coerceValue('2', {})).toBe('2');
	});
});
