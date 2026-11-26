// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type ListMessagesInput = {
	/**
	 * Filter by recipient. For example: Set this parameter to `+15558881111` to retrieve a list of Message resources sent to `+15558881111`.
	 */
	To?: string;
	/**
	 * Filter by sender. For example: Set this parameter to `+15552229999` to retrieve a list of Message resources sent by `+15552229999`.
	 */
	From?: string;
	/**
	 * Only include messages sent on this date (`YYYY-MM-DD`, GMT).
	 */
	DateSent?: string;
	/**
	 * Only include messages sent on or before this date (`YYYY-MM-DD`, GMT). Sent as `DateSent<`.
	 */
	DateSentBefore?: string;
	/**
	 * Only include messages sent on or after this date (`YYYY-MM-DD`, GMT). Sent as `DateSent>`.
	 */
	DateSentAfter?: string;
	/**
	 * How many resources to return in each list page. The default is 50, and the maximum is 1000.
	 */
	PageSize?: number;
	/**
	 * The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.
	 */
	Page?: number;
	/**
	 * The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.
	 */
	PageToken?: string;
};

export type ListMessagesOutput = {
	/**
	 * The zero-based index of the last resource on this page.
	 */
	end?: number;
	/**
	 * URI of the first page, relative to `https://api.twilio.com`.
	 */
	first_page_uri?: string;
	/**
	 * URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.
	 */
	next_page_uri?: string;
	/**
	 * The page index. Twilio documents this value as client state.
	 */
	page?: number;
	/**
	 * How many resources this page contains.
	 */
	page_size?: number;
	/**
	 * URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.
	 */
	previous_page_uri?: string;
	/**
	 * The zero-based index of the first resource on this page.
	 */
	start?: number;
	/**
	 * URI of this page, relative to `https://api.twilio.com`.
	 */
	uri?: string;
	/**
	 * The Message resources on this page.
	 *
	 * Items: One Message resource on this page.
	 */
	messages?: {
		/**
		 * The text content of the message
		 */
		body?: string;
		/**
		 * The number of segments that make up the complete message. SMS message bodies that exceed the [character limit](https://www.twilio.com/docs/glossary/what-sms-character-limit) are segmented and charged as multiple messages. Note: For messages sent via a Messaging Service, `num_segments` is initially `0`, since a sender hasn't yet been assigned.
		 */
		num_segments?: string;
		/**
		 * The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for messages created by the REST API, `outbound-call` for messages created during a call, or `outbound-reply` for messages created in response to an incoming message.
		 */
		direction?: '' | 'inbound' | 'outbound-api' | 'outbound-call' | 'outbound-reply';
		/**
		 * The sender's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), Wireless SIM, [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). For incoming messages, this is the number or channel address of the sender. For outgoing messages, this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address from which the message is sent.
		 */
		from?: string;
		/**
		 * The recipient's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format) or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g. `whatsapp:+15552229999`)
		 */
		to?: string;
		/**
		 * The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was last updated
		 */
		date_updated?: string;
		/**
		 * The amount billed for the message in the currency specified by `price_unit`. The `price` is populated after the message has been sent/received, and may not be immediately availalble. View the [Pricing page](https://www.twilio.com/en-us/pricing) for more details.
		 */
		price?: string;
		/**
		 * The description of the `error_code` if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.
		 */
		error_message?: string;
		/**
		 * The URI of the Message resource, relative to `https://api.twilio.com`.
		 */
		uri?: string;
		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource
		 */
		account_sid?: string;
		/**
		 * The number of media files associated with the Message resource.
		 */
		num_media?: string;
		/**
		 * The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`, `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read` (WhatsApp only). For more information, See [detailed descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).
		 */
		status?:
			| ''
			| 'queued'
			| 'sending'
			| 'sent'
			| 'failed'
			| 'delivered'
			| 'undelivered'
			| 'receiving'
			| 'received'
			| 'accepted'
			| 'scheduled'
			| 'read'
			| 'partially_delivered'
			| 'canceled';
		/**
		 * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) associated with the Message resource. A unique default value is assigned if a Messaging Service is not used.
		 */
		messaging_service_sid?: string;
		/**
		 * The unique, Twilio-provided string that identifies the Message resource.
		 */
		sid?: string;
		/**
		 * The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message was sent. For an outgoing message, this is when Twilio sent the message. For an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook URL.
		 */
		date_sent?: string;
		/**
		 * The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was created
		 */
		date_created?: string;
		/**
		 * The [error code](https://www.twilio.com/docs/api/errors) returned if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.
		 */
		error_code?: number;
		/**
		 * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
		 */
		price_unit?: string;
		/**
		 * The API version used to process the Message
		 */
		api_version?: string;
		/**
		 * A list of related resources identified by their URIs relative to `https://api.twilio.com`
		 */
		subresource_uris?: Record<string, JSONValue>;
	}[];
};

/**
 * List messages
 * Lists messages on the Twilio account.
 */
export async function listMessages(
	this: EndpointFunctionThis,
	payload: {
		input: ListMessagesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListMessagesOutput>> {
	const response = await this.endpointCaller<ListMessagesOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'listMessages',
		},
		payload,
	);
	return response;
}
