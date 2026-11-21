// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../shared.ts';

import { endpoints as v6Endpoints } from './v6/_catalog.ts';

export type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		v6: v6Endpoints(endpointCaller),
	};
};

export class FacebookPagesSdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
