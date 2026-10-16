import type { Make } from '@makehq/sdk';

import type { EndpointExecution, EndpointOptions, EndpointPointer } from '../shared.ts';

import type {
	Transport,
	TransportContext,
	TransportRequest,
	TransportResponse,
} from './transport.ts';

export class SdkTransport implements Transport {
	readonly #sdk: Make;

	constructor(sdk: Make) {
		this.#sdk = sdk;
	}

	public async send<BODY>(request: TransportRequest): Promise<TransportResponse<BODY>> {
		const body = await this.#sdk.fetch<BODY>(request.path, {
			method: request.method ?? 'GET',
			...(request.headers ? { headers: request.headers } : {}),
			...(request.body ? { body: request.body } : {}),
			...(request.query ? { query: Object.fromEntries(request.query) } : {}),
		});
		return { body };
	}

	public async callEndpoint<OUTPUT>(
		context: TransportContext,
		pointer: EndpointPointer,
		options: EndpointOptions,
	): Promise<{ output: OUTPUT; execution?: EndpointExecution }> {
		// The public API takes the key as the `Idempotency-Key` header, so it stays out of the body.
		const { idempotencyKey, ...bodyOptions } = options;
		const response = await this.send<{ output: OUTPUT; execution?: EndpointExecution }>({
			method: 'POST',
			path: `/endpoints/execute`,
			...(idempotencyKey === undefined
				? {}
				: { headers: { 'Idempotency-Key': idempotencyKey } }),
			body: {
				...pointer,
				...bodyOptions,
				teamId: context.teamId,
			},
		});
		const { body } = response;
		const { output, execution } = body;
		return { output, ...(execution === undefined ? {} : { execution }) };
	}
}
