import type { Make } from '@makehq/sdk';
import { describe, expect, it, vi } from 'vitest';

import { EndpointsSdk } from '../../lib/endpoints-sdk.ts';
import { SdkTransport } from '../../lib/transport/sdk-transport.ts';

const POINTER = { appName: 'google-docs', appVersion: 1, endpointName: 'getDocument' } as const;
const INPUT = { documentId: 'doc-1', filter: 'image' };
const OUTPUT = { documentId: 'doc-1', title: 'Notes' };

const createSdk = (fetch = vi.fn().mockResolvedValue({ output: OUTPUT })) => {
	return {
		fetch,
		sdk: new EndpointsSdk({
			transport: new SdkTransport({ fetch } as unknown as Make),
			teamId: 77,
		}),
	};
};

describe('SdkTransport driving execute()', () => {
	it('posts the endpoint pointer, the team context and the input', async () => {
		const { fetch, sdk } = createSdk();

		await sdk.execute(POINTER, { input: INPUT, connectionId: 42 });

		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith('/endpoints/execute', {
			method: 'POST',
			body: {
				...POINTER,
				input: INPUT,
				connectionId: 42,
				teamId: 77,
			},
		});
	});

	it('resolves to the wrapped envelope', async () => {
		const { sdk } = createSdk();

		await expect(sdk.execute(POINTER, { input: INPUT, connectionId: 42 })).resolves.toEqual({
			output: OUTPUT,
		});
	});

	it('propagates a transport failure to the caller', async () => {
		const { sdk } = createSdk(vi.fn().mockRejectedValue(new Error('gateway exploded')));

		await expect(sdk.execute(POINTER, { input: INPUT, connectionId: 42 })).rejects.toThrow(
			'gateway exploded',
		);
	});
});
