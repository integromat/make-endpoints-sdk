// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { annotateFiles } from './annotate-files.ts';
import { annotateImages } from './annotate-images.ts';
import { arbitraryCall } from './arbitrary-call.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AnnotateFilesInput, AnnotateFilesOutput } from './annotate-files.ts';
export type { AnnotateImagesInput, AnnotateImagesOutput } from './annotate-images.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		annotateFiles: annotateFiles.bind({ endpointCaller }),
		annotateImages: annotateImages.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
	};
};

export class GooglecloudvisionV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
