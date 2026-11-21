// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateMessageInput = {
	/**
	 * The recipient's phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (for SMS/MMS) or [channel address](https://www.twilio.com/docs/messaging/channels), e.g. `whatsapp:+15552229999`.
	 */
	To: string;
	/**
	 * The URL of the endpoint to which Twilio sends [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url). URL must contain a valid hostname and underscores are not allowed. If you include this parameter with the `MessagingServiceSid`, Twilio uses this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource).
	 */
	StatusCallback?: string;
	/**
	 * The SID of the associated [TwiML Application](https://www.twilio.com/docs/usage/api/applications). [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url) are sent to the TwiML App's `message_status_callback` URL. Note that the `StatusCallback` parameter of a request takes priority over the `ApplicationSid` parameter; if both are included `ApplicationSid` is ignored.
	 */
	ApplicationSid?: string;
	/**
	 * Boolean indicating whether or not you intend to provide delivery confirmation feedback to Twilio (used in conjunction with the [Message Feedback subresource](https://www.twilio.com/docs/sms/api/message-feedback-resource)). Default value is `false`.
	 */
	ProvideFeedback?: boolean;
	/**
	 * Total number of attempts made (including this request) to send the message regardless of the provider used
	 */
	Attempt?: number;
	/**
	 * The maximum length in seconds that the Message can remain in Twilio's outgoing message queue. If a queued Message exceeds the `ValidityPeriod`, the Message is not sent. Accepted values are integers from `1` to `36000`. Default value is `36000`. A `ValidityPeriod` greater than `5` is recommended. [Learn more about the validity period](https://www.twilio.com/blog/take-more-control-of-outbound-messages-using-validity-period-html)
	 */
	ValidityPeriod?: number;
	/**
	 * Determines if the message content can be stored or redacted based on privacy settings
	 */
	ContentRetention?: '' | 'retain' | 'discard';
	/**
	 * Determines if the address can be stored or obfuscated based on privacy settings
	 */
	AddressRetention?: '' | 'retain' | 'obfuscate';
	/**
	 * Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`.
	 */
	SmartEncoded?: boolean;
	/**
	 * Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp).
	 *
	 * Items: Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp).
	 */
	PersistentAction?: string[];
	/**
	 * Traffic type. The documented value is `free`.
	 */
	TrafficType?: '' | 'free';
	/**
	 * For Messaging Services with [Link Shortening configured](https://www.twilio.com/docs/messaging/features/link-shortening) only: A Boolean indicating whether or not Twilio should shorten links in the `Body` of the Message. Default value is `false`. If `true`, the `MessagingServiceSid` parameter must also be provided.
	 */
	ShortenUrls?: boolean;
	/**
	 * For Messaging Services only: Include this parameter with a value of `fixed` in conjunction with the `SendAt` parameter in order to [schedule a Message](https://www.twilio.com/docs/messaging/features/message-scheduling).
	 */
	ScheduleType?: '' | 'fixed';
	/**
	 * The time that Twilio will send the message. Must be in ISO 8601 format.
	 */
	SendAt?: string;
	/**
	 * If set to `true`, Twilio delivers the message as a single MMS message, regardless of the presence of media.
	 */
	SendAsMms?: boolean;
	/**
	 * For [Content Editor/API](https://www.twilio.com/docs/content) only: Key-value pairs of [Template variables](https://www.twilio.com/docs/content/using-variables-with-content-api) and their substitution values as a JSON string, for example `{"1":"Tom"}`. `ContentSid` parameter must also be provided. If values are not defined in the `ContentVariables` parameter, the [Template's default placeholder values](https://www.twilio.com/docs/content/content-api-resources#create-templates) are used.
	 */
	ContentVariables?: string;
	/**
	 * Specifies the purpose or use case of the outbound communication. This parameter is used by Twilio's [Traffic Shaping](https://www.twilio.com/docs/messaging/features/traffic-shaping) and [Compliance Toolkit](https://www.twilio.com/docs/messaging/features/compliance-toolkit) products. Possible values include: `otp`, `notifications`, `marketing`, `fraud`, `security`, `customercare`, `delivery`, `education`, `polling`, `announcements`, and `events`.
	 */
	MessageIntent?:
		| ''
		| 'otp'
		| 'notifications'
		| 'marketing'
		| 'fraud'
		| 'security'
		| 'customercare'
		| 'delivery'
		| 'education'
		| 'polling'
		| 'announcements'
		| 'events';
	/**
	 * Include this parameter with a value of `disable` to skip any kind of risk check on the respective message request.
	 */
	RiskCheck?: '' | 'enable' | 'disable';
	/**
	 * The sender's Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), Wireless SIM, [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). The value of the `From` parameter must be a sender that is hosted within Twilio and belongs to the Account creating the Message. If you are using `MessagingServiceSid`, this parameter can be empty (Twilio assigns a `From` value from the Messaging Service's Sender Pool) or you can provide a specific sender from your Sender Pool.
	 */
	From?: string;
	/**
	 * A fallback SMS sender to use when the recipient cannot be reached over RCS. This parameter may only be used when also providing a [Messaging Service](https://twilio.com/docs/messaging/services) containing an RCS sender. The fallback SMS sender must be either a Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), or [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), hosted within Twilio and belong to the Account creating the Message.
	 */
	FallbackFrom?: string;
	/**
	 * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) you want to associate with the Message. When this parameter is provided and the `From` parameter is omitted, Twilio selects the optimal sender from the Messaging Service's Sender Pool. You may also provide a `From` parameter if you want to use a specific Sender from the Sender Pool.
	 */
	MessagingServiceSid?: string;
	/**
	 * The text content of the outgoing message. Can be up to 1,600 characters in length. SMS only: If the `Body` contains more than 160 [GSM-7](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) characters (or 70 [UCS-2](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding) characters), the message is segmented and charged accordingly. For long `Body` text, consider using the [`SendAsMms` parameter](https://www.twilio.com/blog/mms-for-long-text-messages).
	 */
	Body?: string;
	/**
	 * The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported by Twilio and content is formatted for delivery on destination devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`) and 500 KB for [other types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media. To send more than one image in the message, provide multiple `MediaUrl` parameters in the POST request. You can include up to ten `MediaUrl` parameters per message. [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages) and [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-) limits apply.
	 *
	 * @maxItems 10
	 *
	 * Items: The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported by Twilio and content is formatted for delivery on destination devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`) and 500 KB for [other types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media. To send more than one image in the message, provide multiple `MediaUrl` parameters in the POST request. You can include up to ten `MediaUrl` parameters per message. [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages) and [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-) limits apply.
	 */
	MediaUrl?:
		| []
		| [string]
		| [string, string]
		| [string, string, string]
		| [string, string, string, string]
		| [string, string, string, string, string]
		| [string, string, string, string, string, string]
		| [string, string, string, string, string, string, string]
		| [string, string, string, string, string, string, string, string]
		| [string, string, string, string, string, string, string, string, string]
		| [string, string, string, string, string, string, string, string, string, string];
	/**
	 * For [Content Editor/API](https://www.twilio.com/docs/content) only: The SID of the Content Template to be used with the Message, e.g., `HXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`. If this parameter is not provided, a Content Template is not used. Find the SID in the Console on the Content Editor page. For Content API users, the SID is found in Twilio's response when [creating the Template](https://www.twilio.com/docs/content/content-api-resources#create-templates) or by [fetching your Templates](https://www.twilio.com/docs/content/content-api-resources#fetch-all-content-resources).
	 */
	ContentSid?: string;
};

export type CreateMessageOutput = {
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
 * Create a message
 * Creates a message.
 */
export async function createMessage(
	this: EndpointFunctionThis,
	payload: {
		input: CreateMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateMessageOutput> {
	const response = await this.endpointCaller<CreateMessageOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'createMessage',
		},
		payload,
	);
	return response.output;
}
