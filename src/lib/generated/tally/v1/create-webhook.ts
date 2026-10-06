// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateWebhookInput = {
	/**
	 * The ID of the form to create the webhook for. For example, `mexJoq`.
	 */
	formId: string;
	/**
	 * The URL Tally should send webhook events to.
	 */
	url: string;
	/**
	 * Types of events to receive. Currently the only value is `FORM_RESPONSE`.
	 */
	eventTypes: 'FORM_RESPONSE';
	/**
	 * Optional secret used to sign webhook payloads.
	 */
	signingSecret?: string;
	/**
	 * Optional custom HTTP headers to include in webhook requests.
	 *
	 * Items: A custom HTTP header sent with each webhook request.
	 */
	httpHeaders?: {
		/**
		 * The header name.
		 */
		name: string;
		/**
		 * The header value.
		 */
		value: string;
	}[];
	/**
	 * Optional identifier for the external subscriber.
	 */
	externalSubscriber?: string;
};

export type CreateWebhookOutput = {
	/**
	 * Unique identifier of the webhook.
	 */
	id?: string;
	/**
	 * ID of the form the webhook is attached to.
	 */
	formId?: string;
	/**
	 * The URL that receives webhook events.
	 */
	url?: string;
	/**
	 * Secret used to sign webhook payloads. May be `null`.
	 */
	signingSecret?: string;
	/**
	 * Custom HTTP headers included in webhook requests. May be `null`.
	 *
	 * Items: A custom HTTP header sent with each webhook request.
	 */
	httpHeaders?: {
		/**
		 * The header name.
		 */
		name?: string;
		/**
		 * The header value.
		 */
		value?: string;
	}[];
	/**
	 * Types of events this webhook subscribes to.
	 *
	 * Items: An event type. Currently `FORM_RESPONSE`.
	 */
	eventTypes?: string[];
	/**
	 * External subscriber identifier. May be `null`.
	 */
	externalSubscriber?: string;
	/**
	 * Whether the webhook is enabled.
	 */
	isEnabled?: boolean;
	/**
	 * Date and time when the webhook was last synced. May be `null`.
	 */
	lastSyncedAt?: string;
	/**
	 * Date and time when the webhook was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the webhook was last updated.
	 */
	updatedAt?: string;
};

/**
 * Create a webhook
 * Creates a webhook that sends form events to a URL.
 */
export async function createWebhook(
	this: EndpointFunctionThis,
	payload: {
		input: CreateWebhookInput;
		connectionId: number;
	},
): Promise<CreateWebhookOutput> {
	const response = await this.endpointCaller<CreateWebhookOutput>(
		{
			appName: 'tally',
			appVersion: 1,
			endpointName: 'createWebhook',
		},
		payload,
	);
	return response.output;
}
