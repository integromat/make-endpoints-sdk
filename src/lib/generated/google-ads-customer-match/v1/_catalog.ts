// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { mutateUserLists } from './mutate-user-lists.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { MutateUserListsInput, MutateUserListsOutput } from './mutate-user-lists.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		mutateUserLists: mutateUserLists.bind({ endpointCaller }),
	};
};

export class GoogleAdsCustomerMatchV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
