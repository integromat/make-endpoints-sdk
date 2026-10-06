// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { batchUpdateForm } from './batch-update-form.ts';
import { createForm } from './create-form.ts';
import { getForm } from './get-form.ts';
import { getResponse } from './get-response.ts';
import { listResponses } from './list-responses.ts';
import { setFormPublishSettings } from './set-form-publish-settings.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { BatchUpdateFormInput, BatchUpdateFormOutput } from './batch-update-form.ts';
export type { CreateFormInput, CreateFormOutput } from './create-form.ts';
export type { GetFormInput, GetFormOutput } from './get-form.ts';
export type { GetResponseInput, GetResponseOutput } from './get-response.ts';
export type { ListResponsesInput, ListResponsesOutput } from './list-responses.ts';
export type {
	SetFormPublishSettingsInput,
	SetFormPublishSettingsOutput,
} from './set-form-publish-settings.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		batchUpdateForm: batchUpdateForm.bind({ endpointCaller }),
		createForm: createForm.bind({ endpointCaller }),
		getForm: getForm.bind({ endpointCaller }),
		getResponse: getResponse.bind({ endpointCaller }),
		listResponses: listResponses.bind({ endpointCaller }),
		setFormPublishSettings: setFormPublishSettings.bind({ endpointCaller }),
	};
};

export class GoogleFormsV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
