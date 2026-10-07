// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../shared.ts';

import { endpoints as v4Endpoints } from './v4/_catalog.ts';

export type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		v4: v4Endpoints(endpointCaller),
	};
};

export class YoutubeSdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
