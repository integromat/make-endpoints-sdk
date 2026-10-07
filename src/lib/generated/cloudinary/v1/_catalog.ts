// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { deleteResource } from './delete-resource.ts';
import { getResource } from './get-resource.ts';
import { getUsage } from './get-usage.ts';
import { listResourcesByTag } from './list-resources-by-tag.ts';
import { listResourcesByType } from './list-resources-by-type.ts';
import { searchResources } from './search-resources.ts';
import { uploadResource } from './upload-resource.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { DeleteResourceInput, DeleteResourceOutput } from './delete-resource.ts';
export type { GetResourceInput, GetResourceOutput } from './get-resource.ts';
export type { GetUsageInput, GetUsageOutput } from './get-usage.ts';
export type { ListResourcesByTagInput, ListResourcesByTagOutput } from './list-resources-by-tag.ts';
export type {
	ListResourcesByTypeInput,
	ListResourcesByTypeOutput,
} from './list-resources-by-type.ts';
export type { SearchResourcesInput, SearchResourcesOutput } from './search-resources.ts';
export type { UploadResourceInput, UploadResourceOutput } from './upload-resource.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		deleteResource: deleteResource.bind({ endpointCaller }),
		getResource: getResource.bind({ endpointCaller }),
		getUsage: getUsage.bind({ endpointCaller }),
		listResourcesByTag: listResourcesByTag.bind({ endpointCaller }),
		listResourcesByType: listResourcesByType.bind({ endpointCaller }),
		searchResources: searchResources.bind({ endpointCaller }),
		uploadResource: uploadResource.bind({ endpointCaller }),
	};
};

export class CloudinaryV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
