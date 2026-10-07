// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteWebhookInput = {
	/**
	 * The ID of the webhook to delete.
	 */
	webhookId: string;
};

export type DeleteWebhookOutput = Record<string, never>;

/**
 * Delete a webhook
 * Deletes a webhook by its ID.
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
			appName: 'tally',
			appVersion: 1,
			endpointName: 'deleteWebhook',
		},
		payload,
	);
	return response.output;
}
