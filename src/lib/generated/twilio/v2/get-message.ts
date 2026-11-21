// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetMessageInput = {
	/**
	 * The SID of the Message resource to fetch. Pattern `SM` or `MM` plus 32 hex characters.
	 */
	Sid: string;
};

export type GetMessageOutput = {
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
};

/**
 * Get a message
 * Retrieves a message by SID.
 */
export async function getMessage(
	this: EndpointFunctionThis,
	payload: {
		input: GetMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetMessageOutput> {
	const response = await this.endpointCaller<GetMessageOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'getMessage',
		},
		payload,
	);
	return response.output;
}
