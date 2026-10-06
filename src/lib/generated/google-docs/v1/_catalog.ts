// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { batchUpdateDocument } from './batch-update-document.ts';
import { createDocument } from './create-document.ts';
import { getDocument } from './get-document.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type {
	BatchUpdateDocumentInput,
	BatchUpdateDocumentOutput,
} from './batch-update-document.ts';
export type { CreateDocumentInput, CreateDocumentOutput } from './create-document.ts';
export type { GetDocumentInput, GetDocumentOutput } from './get-document.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		batchUpdateDocument: batchUpdateDocument.bind({ endpointCaller }),
		createDocument: createDocument.bind({ endpointCaller }),
		getDocument: getDocument.bind({ endpointCaller }),
	};
};

export class GoogleDocsV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
