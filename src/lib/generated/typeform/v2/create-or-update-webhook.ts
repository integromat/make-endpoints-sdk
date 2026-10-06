// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateOrUpdateWebhookInput = {
	/**
	 * Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.
	 */
	form_id: string;
	/**
	 * Unique name you want to use for the webhook.
	 */
	tag: string;
	/**
	 * Webhook URL. It must use `https://`.
	 */
	url: string;
	/**
	 * True if you want to send responses to the webhook immediately. Otherwise false.
	 */
	enabled?: boolean;
	/**
	 * Event types this webhook is subscribed to. The webhook is triggered each time any of these events occurs.
	 */
	event_types?: {
		/**
		 * True to subscribe to completed form responses.
		 */
		form_response?: boolean;
		/**
		 * True to subscribe to partial form responses.
		 */
		form_response_partial?: boolean;
	};
	/**
	 * If specified, used to sign the webhook payload with HMAC SHA256 so you can verify that it came from Typeform. Write-only; not returned on GET.
	 */
	secret?: string;
};

export type CreateOrUpdateWebhookOutput = {
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
	 * Derived from the URL scheme: `true` for `https`, `false` for legacy `http`. A value sent on the request is ignored.
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
};

/**
 * Create or update a webhook
 * Creates or overwrites a webhook for a form.
 */
export async function createOrUpdateWebhook(
	this: EndpointFunctionThis,
	payload: {
		input: CreateOrUpdateWebhookInput;
		connectionId: number;
	},
): Promise<CreateOrUpdateWebhookOutput> {
	const response = await this.endpointCaller<CreateOrUpdateWebhookOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'createOrUpdateWebhook',
		},
		payload,
	);
	return response.output;
}
