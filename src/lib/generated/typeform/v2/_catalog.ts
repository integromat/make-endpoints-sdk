// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createForm } from './create-form.ts';
import { createImage } from './create-image.ts';
import { createOrUpdateWebhook } from './create-or-update-webhook.ts';
import { deleteForm } from './delete-form.ts';
import { deleteImage } from './delete-image.ts';
import { deleteWebhook } from './delete-webhook.ts';
import { getForm } from './get-form.ts';
import { getWebhook } from './get-webhook.ts';
import { listForms } from './list-forms.ts';
import { listImages } from './list-images.ts';
import { listResponses } from './list-responses.ts';
import { listWebhooks } from './list-webhooks.ts';
import { updateForm } from './update-form.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateFormInput, CreateFormOutput } from './create-form.ts';
export type { CreateImageInput, CreateImageOutput } from './create-image.ts';
export type {
	CreateOrUpdateWebhookInput,
	CreateOrUpdateWebhookOutput,
} from './create-or-update-webhook.ts';
export type { DeleteFormInput, DeleteFormOutput } from './delete-form.ts';
export type { DeleteImageInput, DeleteImageOutput } from './delete-image.ts';
export type { DeleteWebhookInput, DeleteWebhookOutput } from './delete-webhook.ts';
export type { GetFormInput, GetFormOutput } from './get-form.ts';
export type { GetWebhookInput, GetWebhookOutput } from './get-webhook.ts';
export type { ListFormsInput, ListFormsOutput } from './list-forms.ts';
export type { ListImagesInput, ListImagesOutput } from './list-images.ts';
export type { ListResponsesInput, ListResponsesOutput } from './list-responses.ts';
export type { ListWebhooksInput, ListWebhooksOutput } from './list-webhooks.ts';
export type { UpdateFormInput, UpdateFormOutput } from './update-form.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createForm: createForm.bind({ endpointCaller }),
		createImage: createImage.bind({ endpointCaller }),
		createOrUpdateWebhook: createOrUpdateWebhook.bind({ endpointCaller }),
		deleteForm: deleteForm.bind({ endpointCaller }),
		deleteImage: deleteImage.bind({ endpointCaller }),
		deleteWebhook: deleteWebhook.bind({ endpointCaller }),
		getForm: getForm.bind({ endpointCaller }),
		getWebhook: getWebhook.bind({ endpointCaller }),
		listForms: listForms.bind({ endpointCaller }),
		listImages: listImages.bind({ endpointCaller }),
		listResponses: listResponses.bind({ endpointCaller }),
		listWebhooks: listWebhooks.bind({ endpointCaller }),
		updateForm: updateForm.bind({ endpointCaller }),
	};
};

export class TypeformV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
