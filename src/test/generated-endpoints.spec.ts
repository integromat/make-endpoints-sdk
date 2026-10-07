import type { Make } from '@makehq/sdk';
import { describe, expect, it, vi } from 'vitest';

import { EndpointsSdk } from '../lib/endpoints-sdk.ts';
import { SdkTransport } from '../lib/transport/sdk-transport.ts';

// Drives every generated endpoint (`sdk.endpoints.<app>.v<N>.<endpoint>`) through this repository's
// runtime instead of naming specific ones, so catalog changes from the automated sync cannot break
// it. It fails on an empty catalog, which keeps a sync that removed every endpoint from publishing.

type GeneratedEndpoint = (payload: { input: unknown; connectionId: number }) => Promise<unknown>;

const listEndpoints = (catalog: object) => {
	return Object.entries(catalog).flatMap(([appKey, versions]) =>
		Object.entries(versions as object).flatMap(([versionKey, endpoints]) =>
			Object.entries(endpoints as object).map(([endpointKey, endpoint]) => ({
				path: `${appKey}.${versionKey}.${endpointKey}`,
				appVersion: Number(versionKey.replace(/^v/, '')),
				endpoint: endpoint as GeneratedEndpoint,
			})),
		),
	);
};

const fetch = vi.fn();
const sdk = new EndpointsSdk({
	transport: new SdkTransport({ fetch } as unknown as Make),
	teamId: 77,
});
const endpoints = listEndpoints(sdk.endpoints);

describe('generated endpoints', () => {
	it('contains at least one endpoint', () => {
		expect(endpoints.length).toBeGreaterThan(0);
	});

	it.each(endpoints)(
		'$path posts to /endpoints/execute and resolves to the output',
		async ({ appVersion, endpoint }) => {
			fetch.mockReset().mockResolvedValue({ output: 'output' });

			// Generated methods are pre-bound, so calling them detached must work.
			await expect(endpoint({ input: { key: 'value' }, connectionId: 42 })).resolves.toBe(
				'output',
			);

			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith('/endpoints/execute', {
				method: 'POST',
				body: {
					appName: expect.any(String),
					appVersion,
					endpointName: expect.any(String),
					input: { key: 'value' },
					connectionId: 42,
					teamId: 77,
				},
			});
		},
	);
});
