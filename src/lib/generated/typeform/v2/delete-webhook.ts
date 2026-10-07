// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteWebhookInput = {
	/**
	 * Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.
	 */
	form_id: string;
	/**
	 * Unique name of the webhook to delete.
	 */
	tag: string;
};

export type DeleteWebhookOutput = Record<string, never>;

/**
 * Delete a webhook
 * Deletes a webhook.
 */
export async function deleteWebhook(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteWebhookInput;
		connectionId: number;
	},
): Promise<DeleteWebhookOutput> {
	const response = await this.endpointCaller<DeleteWebhookOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'deleteWebhook',
		},
		payload,
	);
	return response.output;
}
