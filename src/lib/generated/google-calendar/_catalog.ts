// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../shared.ts';

import { endpoints as v5Endpoints } from './v5/_catalog.ts';

export type { EndpointsSdkOptions } from '../../base-endpoints-sdk.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		v5: v5Endpoints(endpointCaller),
	};
};

export class GoogleCalendarSdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
