// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createWebhook } from './create-webhook.ts';
import { deleteWebhook } from './delete-webhook.ts';
import { getForm } from './get-form.ts';
import { listFormQuestions } from './list-form-questions.ts';
import { listFormResponses } from './list-form-responses.ts';
import { listForms } from './list-forms.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateWebhookInput, CreateWebhookOutput } from './create-webhook.ts';
export type { DeleteWebhookInput, DeleteWebhookOutput } from './delete-webhook.ts';
export type { GetFormInput, GetFormOutput } from './get-form.ts';
export type { ListFormQuestionsInput, ListFormQuestionsOutput } from './list-form-questions.ts';
export type { ListFormResponsesInput, ListFormResponsesOutput } from './list-form-responses.ts';
export type { ListFormsInput, ListFormsOutput } from './list-forms.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createWebhook: createWebhook.bind({ endpointCaller }),
		deleteWebhook: deleteWebhook.bind({ endpointCaller }),
		getForm: getForm.bind({ endpointCaller }),
		listFormQuestions: listFormQuestions.bind({ endpointCaller }),
		listFormResponses: listFormResponses.bind({ endpointCaller }),
		listForms: listForms.bind({ endpointCaller }),
	};
};

export class TallyV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
