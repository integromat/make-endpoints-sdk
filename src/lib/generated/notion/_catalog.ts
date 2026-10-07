// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../shared.ts';

import { endpoints as v1Endpoints } from './v1/_catalog.ts';

export type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		v1: v1Endpoints(endpointCaller),
	};
};

export class NotionSdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
