// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type CreateCallInput = {
	/**
	 * The phone number, SIP address, or client identifier to call.
	 */
	To: string;
	/**
	 * The phone number or client identifier to use as the caller id. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `To` parameter is a phone number, `From` must also be a phone number.
	 */
	From: string;
	/**
	 * The HTTP method we should use when calling the `Url` parameter's value. Can be: `GET` or `POST` and the default is `POST`. If an `ApplicationSid` parameter is present, this parameter is ignored.
	 */
	Method?: '' | 'GET' | 'POST';
	/**
	 * The URL that we call using the `FallbackMethod` if an error occurs when requesting or executing the TwiML at `Url`. If an `ApplicationSid` parameter is present, this parameter is ignored.
	 */
	FallbackUrl?: string;
	/**
	 * The HTTP method that we should use to request the `FallbackUrl`. Can be: `GET` or `POST` and the default is `POST`. If an `ApplicationSid` parameter is present, this parameter is ignored.
	 */
	FallbackMethod?: '' | 'GET' | 'POST';
	/**
	 * The URL we should call using the `StatusCallbackMethod` to send status information to your application. If no `StatusCallbackEvent` is specified, we will send the `completed` status. If an `ApplicationSid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).
	 */
	StatusCallback?: string;
	/**
	 * The call progress events that we will send to the `StatusCallback` URL. Can be: `initiated`, `ringing`, `answered`, and `completed`. If no event is specified, we send the `completed` status. If you want to receive multiple events, specify each one in a separate `StatusCallbackEvent` parameter. See the code sample for [monitoring call progress](https://www.twilio.com/docs/voice/api/call-resource?code-sample=code-create-a-call-resource-and-specify-a-statuscallbackevent&code-sdk-version=json). If an `ApplicationSid` is present, this parameter is ignored.
	 */
	StatusCallbackEvent?: '' | 'initiated' | 'ringing' | 'answered' | 'completed';
	/**
	 * The HTTP method we should use when calling the `StatusCallback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `ApplicationSid` parameter is present, this parameter is ignored.
	 */
	StatusCallbackMethod?: '' | 'GET' | 'POST';
	/**
	 * The string of keys to dial after connecting to the number, with a maximum length of 32 digits. Valid digits in the string include any digit (`0`-`9`), '`A`', '`B`', '`C`', '`D`', '`#`', and '`*`'. You can also use '`w`' to insert a half-second pause and '`W`' to insert a one-second pause. For example, to pause for one second after connecting and then dial extension 1234 followed by the # key, set this parameter to `W1234#`. Send `#` as is. The call encodes the form. If both `SendDigits` and `MachineDetection` parameters are provided, then `MachineDetection` will be ignored.
	 */
	SendDigits?: string;
	/**
	 * The integer number of seconds that we should allow the phone to ring before assuming there is no answer. The default is `60` seconds and the maximum is `600` seconds. For some call flows, we will add a 5-second buffer to the timeout value you provide. For this reason, a timeout value of 10 seconds could result in an actual timeout closer to 15 seconds. You can set this to a short time, such as `15` seconds, to hang up before reaching an answering machine or voicemail.
	 */
	Timeout?: number;
	/**
	 * Whether to record the call. Can be `true` to record the phone call, or `false` to not. The default is `false`. The `RecordingUrl` is sent to the `StatusCallback` URL.
	 */
	Record?: boolean;
	/**
	 * The number of channels in the final recording. Can be: `mono` or `dual`. The default is `mono`. `mono` records both legs of the call in a single channel of the recording file. `dual` records each leg to a separate channel of the recording file. The first channel of a dual-channel recording contains the parent call and the second channel contains the child call.
	 */
	RecordingChannels?: '' | 'mono' | 'dual';
	/**
	 * The URL that we call when the recording is available to be accessed.
	 */
	RecordingStatusCallback?: string;
	/**
	 * The HTTP method we should use when calling the `RecordingStatusCallback` URL. Can be: `GET` or `POST` and the default is `POST`.
	 */
	RecordingStatusCallbackMethod?: '' | 'GET' | 'POST';
	/**
	 * The identifier of the configuration to be used when creating and processing the recording
	 */
	RecordingConfigurationId?: string;
	/**
	 * The username used to authenticate the caller making a SIP call.
	 */
	SipAuthUsername?: string;
	/**
	 * The password required to authenticate the user account specified in `SipAuthUsername`.
	 */
	SipAuthPassword?: string;
	/**
	 * Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. If `SendDigits` is provided, this parameter is ignored. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection).
	 */
	MachineDetection?: '' | 'Enable' | 'DetectMessageEnd';
	/**
	 * The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds.
	 */
	MachineDetectionTimeout?: number;
	/**
	 * The recording status events that will trigger calls to the URL specified in `RecordingStatusCallback`. Can be: `in-progress`, `completed` and `absent`. Defaults to `completed`. Separate multiple values with a space.
	 */
	RecordingStatusCallbackEvent?: '' | 'in-progress' | 'completed' | 'absent';
	/**
	 * Whether to trim any leading and trailing silence from the recording. Can be: `trim-silence` or `do-not-trim` and the default is `trim-silence`.
	 */
	Trim?: '' | 'trim-silence' | 'do-not-trim';
	/**
	 * The phone number, SIP address, or Client identifier that made this call. Phone numbers are in [E.164 format](https://www.twilio.com/docs/glossary/what-e164) (e.g., +16175551212). SIP addresses are formatted as `name@company.com`.
	 */
	CallerId?: string;
	/**
	 * The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400.
	 */
	MachineDetectionSpeechThreshold?: number;
	/**
	 * The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200.
	 */
	MachineDetectionSpeechEndThreshold?: number;
	/**
	 * The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000.
	 */
	MachineDetectionSilenceTimeout?: number;
	/**
	 * Select whether to perform answering machine detection in the background. Default, blocks the execution of the call until Answering Machine Detection is completed. Can be: `true` or `false`.
	 */
	AsyncAmd?: '' | 'true' | 'false';
	/**
	 * The URL that we should call using the `AsyncAmdStatusCallbackMethod` to notify customer application whether the call was answered by human, machine or fax.
	 */
	AsyncAmdStatusCallback?: string;
	/**
	 * The HTTP method we should use when calling the `AsyncAmdStatusCallback` URL. Can be: `GET` or `POST` and the default is `POST`.
	 */
	AsyncAmdStatusCallbackMethod?: '' | 'GET' | 'POST';
	/**
	 * The STIR/SHAKEN passport for this call, provided as a base64 encoded string. Multiple passports (at max 5) are comma separated and provided as base64 encoded string
	 */
	Passports?: string;
	/**
	 * The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `Byoc` is only meaningful when `To` is a phone number; it will otherwise be ignored. (Beta)
	 */
	Byoc?: string;
	/**
	 * The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party's phone. (Branded Calls Beta)
	 */
	CallReason?: string;
	/**
	 * A token string needed to invoke a forwarded call. A `CallToken` is generated when an incoming call is received on a Twilio number. Pass an incoming call's `CallToken` value to a forwarded call via the `CallToken` parameter when creating a new call. A forwarded call should bear the same CallerID of the original incoming call.
	 */
	CallToken?: string;
	/**
	 * The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is generated from Twilio. `both` records the audio that is received and generated by Twilio.
	 */
	RecordingTrack?: '' | 'inbound' | 'outbound' | 'both';
	/**
	 * The maximum duration of the call in seconds. Constraints depend on account and configuration.
	 */
	TimeLimit?: number;
	/**
	 * The URL that we should use to deliver `push call notification`.
	 */
	ClientNotificationUrl?: string;
	/**
	 * The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `Method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).
	 */
	Url?: string;
	/**
	 * TwiML instructions for the call Twilio will use without fetching Twiml from `Url` parameter. If both `Twiml` and `Url` are provided then `Twiml` parameter will be ignored. Max 4000 characters.
	 */
	Twiml?: string;
	/**
	 * The SID of the Application resource that will handle the call, if the call will be handled by an application.
	 */
	ApplicationSid?: string;
};

export type CreateCallOutput = {
	/**
	 * The unique string that we created to identify this Call resource.
	 */
	sid?: string;
	/**
	 * The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
	 */
	date_created?: string;
	/**
	 * The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
	 */
	date_updated?: string;
	/**
	 * The SID that identifies the call that created this leg.
	 */
	parent_call_sid?: string;
	/**
	 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call resource.
	 */
	account_sid?: string;
	/**
	 * The phone number, SIP address, Client identifier or SIM SID that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.
	 */
	to?: string;
	/**
	 * The phone number, SIP address or Client identifier that received this call. Formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).
	 */
	to_formatted?: string;
	/**
	 * The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.
	 */
	from?: string;
	/**
	 * The calling phone number, SIP address, or Client identifier formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).
	 */
	from_formatted?: string;
	/**
	 * If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed.
	 */
	phone_number_sid?: string;
	/**
	 * The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.
	 */
	status?:
		| ''
		| 'queued'
		| 'ringing'
		| 'in-progress'
		| 'completed'
		| 'busy'
		| 'failed'
		| 'no-answer'
		| 'canceled';
	/**
	 * The start time of the call, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call has not yet been dialed.
	 */
	start_time?: string;
	/**
	 * The time the call ended, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call did not complete successfully.
	 */
	end_time?: string;
	/**
	 * The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing calls.
	 */
	duration?: string;
	/**
	 * The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. The price associated with a call only reflects the charge for connectivity. Charges for other call-related features such as Answering Machine Detection, Text-To-Speech, and SIP REFER are not included in this value.
	 */
	price?: string;
	/**
	 * The currency in which `Price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`, `JPY`). Always capitalized for calls.
	 */
	price_unit?: string;
	/**
	 * A string describing the direction of the call. Can be: `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination) for outgoing calls from your communications infrastructure to the PSTN or [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming calls to your communications infrastructure from the PSTN.
	 */
	direction?: '' | 'inbound' | 'outbound-api' | 'outbound-dial';
	/**
	 * Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise.
	 */
	answered_by?: string;
	/**
	 * The API version used to create the call.
	 */
	api_version?: string;
	/**
	 * The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty.
	 */
	forwarded_from?: string;
	/**
	 * The Group SID associated with this call. If no Group is associated with the call, the field is empty.
	 */
	group_sid?: string;
	/**
	 * The caller's name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty.
	 */
	caller_name?: string;
	/**
	 * The wait time in milliseconds before the call is placed.
	 */
	queue_time?: string;
	/**
	 * The unique identifier of the trunk resource that was used for this call. The field is empty if the call was not made using a SIP trunk or if the call is not terminated.
	 */
	trunk_sid?: string;
	/**
	 * The URI of this resource, relative to `https://api.twilio.com`.
	 */
	uri?: string;
	/**
	 * A list of subresources available to this call, identified by their URIs relative to `https://api.twilio.com`.
	 */
	subresource_uris?: Record<string, JSONValue>;
};

/**
 * Create a call
 * Creates an outbound call.
 */
export async function createCall(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCallInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<CreateCallOutput>> {
	const response = await this.endpointCaller<CreateCallOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'createCall',
		},
		payload,
	);
	return response;
}
