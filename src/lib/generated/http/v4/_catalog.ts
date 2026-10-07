// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { makeRequest } from './make-request.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { MakeRequestInput, MakeRequestOutput } from './make-request.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		makeRequest: makeRequest.bind({ endpointCaller }),
	};
};

export class HttpV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
