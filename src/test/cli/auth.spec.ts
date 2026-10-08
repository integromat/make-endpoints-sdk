import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import * as path from 'node:path';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { resolveAuth } from '../../cli/auth.ts';
import { getConfigPath } from '../../cli/config.ts';

let configHome: string;

const writeConfig = async (contents: string): Promise<void> => {
	await mkdir(path.join(configHome, 'make-cli'), { recursive: true });
	await writeFile(path.join(configHome, 'make-cli', 'config.json'), contents);
};

beforeEach(async () => {
	configHome = await mkdtemp(path.join(tmpdir(), 'make-endpoints-cli-'));
	vi.stubEnv('XDG_CONFIG_HOME', configHome);
	vi.stubEnv('MAKE_API_KEY', '');
	vi.stubEnv('MAKE_ZONE', '');
});

afterEach(async () => {
	vi.unstubAllEnvs();
	await rm(configHome, { recursive: true, force: true });
});

describe('resolveAuth', () => {
	it('reads the config file of make-cli', () => {
		expect(getConfigPath()).toBe(path.join(configHome, 'make-cli', 'config.json'));
	});

	it('prefers flags over the environment', async () => {
		vi.stubEnv('MAKE_API_KEY', 'env-key');
		vi.stubEnv('MAKE_ZONE', 'env.make.com');

		await expect(resolveAuth({ apiKey: 'flag-key', zone: 'flag.make.com' })).resolves.toEqual({
			token: 'flag-key',
			zone: 'flag.make.com',
		});
	});

	it('prefers the environment over the config file', async () => {
		vi.stubEnv('MAKE_API_KEY', 'env-key');
		vi.stubEnv('MAKE_ZONE', 'env.make.com');
		await writeConfig(JSON.stringify({ apiKey: 'config-key', zone: 'config.make.com' }));

		await expect(resolveAuth({})).resolves.toEqual({ token: 'env-key', zone: 'env.make.com' });
	});

	it('falls back to the config file', async () => {
		await writeConfig(JSON.stringify({ apiKey: 'config-key', zone: 'config.make.com' }));

		await expect(resolveAuth({})).resolves.toEqual({
			token: 'config-key',
			zone: 'config.make.com',
		});
	});

	it('ignores the config file once a flag or variable is set', async () => {
		await writeConfig(JSON.stringify({ apiKey: 'config-key', zone: 'config.make.com' }));

		await expect(resolveAuth({ apiKey: 'flag-key' })).rejects.toThrow(
			'Zone is required. Use --zone, set MAKE_ZONE, or run "make-cli login".',
		);
	});

	it('ignores an invalid config file', async () => {
		await writeConfig('{"apiKey": 1}');

		await expect(resolveAuth({})).rejects.toThrow(
			'API key is required. Use --api-key, set MAKE_API_KEY, or run "make-cli login".',
		);
	});
});
