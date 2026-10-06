import type { Make } from '@makehq/sdk';
import { describe, expect, it, vi } from 'vitest';

import { EndpointsSdk } from '../lib/endpoints-sdk.ts';
import { SdkTransport } from '../lib/transport/sdk-transport.ts';

// These specs drive a real generated endpoint on purpose: it is the only way to prove the
// generated code is callable and that the manifest's wire values survive code generation. They are
// therefore coupled to the generated tree — `filter` below is required by `GetDocumentInput`, so
// the type checker confirms this really is the generated signature.
const INPUT = { documentId: 'doc-1', filter: 'image' } as const;
const OUTPUT = { documentId: 'doc-1', title: 'Notes' };

const createSdk = () => {
	const fetch = vi.fn().mockResolvedValue({ output: OUTPUT });
	return {
		fetch,
		sdk: new EndpointsSdk({
			transport: new SdkTransport({ fetch } as unknown as Make),
			teamId: 77,
		}),
	};
};

describe('generated endpoints', () => {
	it('posts the manifest wire values, the team context and the input', async () => {
		const { fetch, sdk } = createSdk();

		await sdk.endpoints.googleDocs.v1.getDocument({ input: INPUT, connectionId: 42 });

		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith('/endpoints/execute', {
			method: 'POST',
			body: {
				// `appName` stays kebab-case and `endpointName` stays camelCase — exactly as the
				// manifest declares them. Identifiers get re-cased, wire values never do.
				appName: 'google-docs',
				appVersion: 1,
				endpointName: 'getDocument',
				input: INPUT,
				connectionId: 42,
				teamId: 77,
			},
		});
	});

	it('resolves to the unwrapped output rather than the envelope', async () => {
		const { sdk } = createSdk();

		await expect(
			sdk.endpoints.googleDocs.v1.getDocument({ input: INPUT, connectionId: 42 }),
		).resolves.toEqual(OUTPUT);
	});
});
