// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListWebhooksInput = {
	/**
	 * Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.
	 */
	form_id: string;
};

export type ListWebhooksOutput = {
	/**
	 * Webhooks configured for the form.
	 *
	 * Items: A webhook.
	 */
	items?: {
		/**
		 * Unique ID for the webhook.
		 */
		id?: string;
		/**
		 * Unique ID for the typeform.
		 */
		form_id?: string;
		/**
		 * Unique name of the webhook.
		 */
		tag?: string;
		/**
		 * Webhook URL.
		 */
		url?: string;
		/**
		 * True if responses are sent to the webhook immediately.
		 */
		enabled?: boolean;
		/**
		 * Event types this webhook is subscribed to. The webhook is triggered each time any of these events occurs.
		 */
		event_types?: {
			/**
			 * True if the webhook is subscribed to completed form responses.
			 */
			form_response?: boolean;
			/**
			 * True if the webhook is subscribed to partial form responses.
			 */
			form_response_partial?: boolean;
		};
		/**
		 * Read-only. Derived from the URL scheme: `true` for `https`, `false` for legacy `http`. A value sent on the request is ignored.
		 */
		verify_ssl?: boolean;
		/**
		 * Date and time when the webhook was created, in ISO 8601 UTC format.
		 */
		created_at?: string;
		/**
		 * Date of last update to the webhook, in ISO 8601 UTC format.
		 */
		updated_at?: string;
	}[];
};

/**
 * List webhooks
 * Retrieves all webhooks for a form.
 */
export async function listWebhooks(
	this: EndpointFunctionThis,
	payload: {
		input: ListWebhooksInput;
		connectionId: number;
	},
): Promise<ListWebhooksOutput> {
	const response = await this.endpointCaller<ListWebhooksOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'listWebhooks',
		},
		payload,
	);
	return response.output;
}
