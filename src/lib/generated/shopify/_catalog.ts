// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../shared.ts';

import { endpoints as v3Endpoints } from './v3/_catalog.ts';

export type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		v3: v3Endpoints(endpointCaller),
	};
};

export class ShopifySdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
