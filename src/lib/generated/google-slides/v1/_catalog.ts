// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { batchUpdatePresentation } from './batch-update-presentation.ts';
import { createPresentation } from './create-presentation.ts';
import { getPage } from './get-page.ts';
import { getPageThumbnail } from './get-page-thumbnail.ts';
import { getPresentation } from './get-presentation.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type {
	BatchUpdatePresentationInput,
	BatchUpdatePresentationOutput,
} from './batch-update-presentation.ts';
export type { CreatePresentationInput, CreatePresentationOutput } from './create-presentation.ts';
export type { GetPageInput, GetPageOutput } from './get-page.ts';
export type { GetPageThumbnailInput, GetPageThumbnailOutput } from './get-page-thumbnail.ts';
export type { GetPresentationInput, GetPresentationOutput } from './get-presentation.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		batchUpdatePresentation: batchUpdatePresentation.bind({ endpointCaller }),
		createPresentation: createPresentation.bind({ endpointCaller }),
		getPage: getPage.bind({ endpointCaller }),
		getPageThumbnail: getPageThumbnail.bind({ endpointCaller }),
		getPresentation: getPresentation.bind({ endpointCaller }),
	};
};

export class GoogleSlidesV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
