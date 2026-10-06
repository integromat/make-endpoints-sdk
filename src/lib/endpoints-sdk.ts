import type { EndpointsSdkOptions } from './base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from './base-endpoints-sdk.ts';
import { endpoints } from './generated/catalog.ts';

export type { EndpointsSdkOptions } from './base-endpoints-sdk.ts';

export class EndpointsSdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
