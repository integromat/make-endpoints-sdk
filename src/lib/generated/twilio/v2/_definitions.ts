// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis endpoint is not scoped to a single route. It forwards a method, path, query string, headers, and body to the Twilio account API.\n\nThe base URL is `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/`, where the host follows the connection region (`api.twilio.com`, `api.dublin.ie1.twilio.com`, or `api.sydney.au1.twilio.com`) and `{AccountSid}` comes from the connection. Provide the remaining path in `url`, for example `Calls.json`. Authentication is added from the connection.\n\nTwilio expects `application/x-www-form-urlencoded` for POST and PUT bodies on this API. Pass a POST or PUT body as a form-encoded string, for example `To=%2B15558675310&From=%2B15017122661&Body=Hi`, with the `Content-Type: application/x-www-form-urlencoded` header. Paths on `lookups.twilio.com` and `studio.twilio.com` are different hosts and are not reachable from this base.\n\nReference: [Requests to Twilio](https://www.twilio.com/docs/usage/requests-to-twilio) and [Twilio API overview](https://www.twilio.com/docs/usage/api).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the part of the URL that comes after `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/`. The host follows the connection region (`api.twilio.com`, `api.dublin.ie1.twilio.com`, or `api.sydney.au1.twilio.com`). For example, `Calls.json`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you.",
					items: {
						type: 'object',
						description: 'The HTTP request header.',
						properties: {
							key: { type: 'string', description: 'The HTTP request header key.' },
							value: {
								type: 'string',
								description: 'The HTTP request header value.',
							},
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description: 'The HTTP request query parameters.',
					items: {
						type: 'object',
						description: 'The HTTP request query parameter.',
						properties: {
							key: {
								type: 'string',
								description: "The HTTP request query parameter's key.",
							},
							value: {
								type: 'string',
								description: "The HTTP request query parameter's value.",
							},
						},
						required: [],
					},
				},
				body: {
					description:
						'The HTTP request body. For POST and PUT requests, pass a form-encoded string, for example `To=%2B15558675310&From=%2B15017122661&Body=Hi`. This input will be ignored if the HTTP request method is `GET`.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: { type: 'number', description: 'The HTTP response status code.' },
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'createCall',
		label: 'Create a call',
		description: 'Creates an outbound call.',
		context:
			'---\nname: createCall\ndescription: Creates an outbound call.\n---\n\nCreates an outbound call.\n\nProvide exactly one of `Url`, `Twiml`, or `ApplicationSid` to specify how the call is handled.\n\nThe request body is `application/x-www-form-urlencoded`. Omitted fields are left out of the form.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Call resource](https://www.twilio.com/docs/voice/api/call-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				To: {
					type: 'string',
					description: 'The phone number, SIP address, or client identifier to call.',
				},
				From: {
					type: 'string',
					description:
						'The phone number or client identifier to use as the caller id. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `To` parameter is a phone number, `From` must also be a phone number.',
				},
				Method: {
					type: 'string',
					description:
						"The HTTP method we should use when calling the `Url` parameter's value. Can be: `GET` or `POST` and the default is `POST`. If an `ApplicationSid` parameter is present, this parameter is ignored.",
					default: '',
					enum: ['', 'GET', 'POST'],
				},
				FallbackUrl: {
					type: 'string',
					description:
						'The URL that we call using the `FallbackMethod` if an error occurs when requesting or executing the TwiML at `Url`. If an `ApplicationSid` parameter is present, this parameter is ignored.',
				},
				FallbackMethod: {
					type: 'string',
					description:
						'The HTTP method that we should use to request the `FallbackUrl`. Can be: `GET` or `POST` and the default is `POST`. If an `ApplicationSid` parameter is present, this parameter is ignored.',
					default: '',
					enum: ['', 'GET', 'POST'],
				},
				StatusCallback: {
					type: 'string',
					description:
						'The URL we should call using the `StatusCallbackMethod` to send status information to your application. If no `StatusCallbackEvent` is specified, we will send the `completed` status. If an `ApplicationSid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).',
				},
				StatusCallbackEvent: {
					type: 'string',
					description:
						'The call progress events that we will send to the `StatusCallback` URL. Can be: `initiated`, `ringing`, `answered`, and `completed`. If no event is specified, we send the `completed` status. If you want to receive multiple events, specify each one in a separate `StatusCallbackEvent` parameter. See the code sample for [monitoring call progress](https://www.twilio.com/docs/voice/api/call-resource?code-sample=code-create-a-call-resource-and-specify-a-statuscallbackevent&code-sdk-version=json). If an `ApplicationSid` is present, this parameter is ignored.',
					default: '',
					enum: ['', 'initiated', 'ringing', 'answered', 'completed'],
				},
				StatusCallbackMethod: {
					type: 'string',
					description:
						'The HTTP method we should use when calling the `StatusCallback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `ApplicationSid` parameter is present, this parameter is ignored.',
					default: '',
					enum: ['', 'GET', 'POST'],
				},
				SendDigits: {
					type: 'string',
					description:
						"The string of keys to dial after connecting to the number, with a maximum length of 32 digits. Valid digits in the string include any digit (`0`-`9`), '`A`', '`B`', '`C`', '`D`', '`#`', and '`*`'. You can also use '`w`' to insert a half-second pause and '`W`' to insert a one-second pause. For example, to pause for one second after connecting and then dial extension 1234 followed by the # key, set this parameter to `W1234#`. Send `#` as is. The call encodes the form. If both `SendDigits` and `MachineDetection` parameters are provided, then `MachineDetection` will be ignored.",
					maximum: 32,
				},
				Timeout: {
					type: 'number',
					description:
						'The integer number of seconds that we should allow the phone to ring before assuming there is no answer. The default is `60` seconds and the maximum is `600` seconds. For some call flows, we will add a 5-second buffer to the timeout value you provide. For this reason, a timeout value of 10 seconds could result in an actual timeout closer to 15 seconds. You can set this to a short time, such as `15` seconds, to hang up before reaching an answering machine or voicemail.',
					maximum: 600,
				},
				Record: {
					type: 'boolean',
					description:
						'Whether to record the call. Can be `true` to record the phone call, or `false` to not. The default is `false`. The `RecordingUrl` is sent to the `StatusCallback` URL.',
				},
				RecordingChannels: {
					type: 'string',
					description:
						'The number of channels in the final recording. Can be: `mono` or `dual`. The default is `mono`. `mono` records both legs of the call in a single channel of the recording file. `dual` records each leg to a separate channel of the recording file. The first channel of a dual-channel recording contains the parent call and the second channel contains the child call.',
					default: '',
					enum: ['', 'mono', 'dual'],
				},
				RecordingStatusCallback: {
					type: 'string',
					description:
						'The URL that we call when the recording is available to be accessed.',
				},
				RecordingStatusCallbackMethod: {
					type: 'string',
					description:
						'The HTTP method we should use when calling the `RecordingStatusCallback` URL. Can be: `GET` or `POST` and the default is `POST`.',
					default: '',
					enum: ['', 'GET', 'POST'],
				},
				RecordingConfigurationId: {
					type: 'string',
					description:
						'The identifier of the configuration to be used when creating and processing the recording',
				},
				SipAuthUsername: {
					type: 'string',
					description: 'The username used to authenticate the caller making a SIP call.',
				},
				SipAuthPassword: {
					type: 'string',
					description:
						'The password required to authenticate the user account specified in `SipAuthUsername`.',
				},
				MachineDetection: {
					type: 'string',
					description:
						'Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. If `SendDigits` is provided, this parameter is ignored. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection).',
					default: '',
					enum: ['', 'Enable', 'DetectMessageEnd'],
				},
				MachineDetectionTimeout: {
					type: 'number',
					description:
						'The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds.',
				},
				RecordingStatusCallbackEvent: {
					type: 'string',
					description:
						'The recording status events that will trigger calls to the URL specified in `RecordingStatusCallback`. Can be: `in-progress`, `completed` and `absent`. Defaults to `completed`. Separate multiple values with a space.',
					default: '',
					enum: ['', 'in-progress', 'completed', 'absent'],
				},
				Trim: {
					type: 'string',
					description:
						'Whether to trim any leading and trailing silence from the recording. Can be: `trim-silence` or `do-not-trim` and the default is `trim-silence`.',
					default: '',
					enum: ['', 'trim-silence', 'do-not-trim'],
				},
				CallerId: {
					type: 'string',
					description:
						'The phone number, SIP address, or Client identifier that made this call. Phone numbers are in [E.164 format](https://www.twilio.com/docs/glossary/what-e164) (e.g., +16175551212). SIP addresses are formatted as `name@company.com`.',
				},
				MachineDetectionSpeechThreshold: {
					type: 'number',
					description:
						'The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400.',
					minimum: 1000,
					maximum: 6000,
				},
				MachineDetectionSpeechEndThreshold: {
					type: 'number',
					description:
						'The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200.',
					minimum: 500,
					maximum: 5000,
				},
				MachineDetectionSilenceTimeout: {
					type: 'number',
					description:
						'The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000.',
					minimum: 2000,
					maximum: 10_000,
				},
				AsyncAmd: {
					type: 'string',
					description:
						'Select whether to perform answering machine detection in the background. Default, blocks the execution of the call until Answering Machine Detection is completed. Can be: `true` or `false`.',
					default: '',
					enum: ['', 'true', 'false'],
				},
				AsyncAmdStatusCallback: {
					type: 'string',
					description:
						'The URL that we should call using the `AsyncAmdStatusCallbackMethod` to notify customer application whether the call was answered by human, machine or fax.',
				},
				AsyncAmdStatusCallbackMethod: {
					type: 'string',
					description:
						'The HTTP method we should use when calling the `AsyncAmdStatusCallback` URL. Can be: `GET` or `POST` and the default is `POST`.',
					default: '',
					enum: ['', 'GET', 'POST'],
				},
				Passports: {
					type: 'string',
					description:
						'The STIR/SHAKEN passport for this call, provided as a base64 encoded string. Multiple passports (at max 5) are comma separated and provided as base64 encoded string',
				},
				Byoc: {
					type: 'string',
					description:
						'The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `Byoc` is only meaningful when `To` is a phone number; it will otherwise be ignored. (Beta)',
					pattern: '^BY[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				CallReason: {
					type: 'string',
					description:
						"The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party's phone. (Branded Calls Beta)",
				},
				CallToken: {
					type: 'string',
					description:
						"A token string needed to invoke a forwarded call. A `CallToken` is generated when an incoming call is received on a Twilio number. Pass an incoming call's `CallToken` value to a forwarded call via the `CallToken` parameter when creating a new call. A forwarded call should bear the same CallerID of the original incoming call.",
				},
				RecordingTrack: {
					type: 'string',
					description:
						'The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is generated from Twilio. `both` records the audio that is received and generated by Twilio.',
					default: '',
					enum: ['', 'inbound', 'outbound', 'both'],
				},
				TimeLimit: {
					type: 'number',
					description:
						'The maximum duration of the call in seconds. Constraints depend on account and configuration.',
				},
				ClientNotificationUrl: {
					type: 'string',
					description: 'The URL that we should use to deliver `push call notification`.',
				},
				Url: {
					type: 'string',
					description:
						'The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `Method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).',
				},
				Twiml: {
					type: 'string',
					description:
						'TwiML instructions for the call Twilio will use without fetching Twiml from `Url` parameter. If both `Twiml` and `Url` are provided then `Twiml` parameter will be ignored. Max 4000 characters.',
				},
				ApplicationSid: {
					type: 'string',
					description:
						'The SID of the Application resource that will handle the call, if the call will be handled by an application.',
					pattern: '^AP[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['To', 'From'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sid: {
					type: 'string',
					description:
						'The unique string that we created to identify this Call resource.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				date_created: {
					type: 'string',
					description:
						'The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
				},
				date_updated: {
					type: 'string',
					description:
						'The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
				},
				parent_call_sid: {
					type: 'string',
					description: 'The SID that identifies the call that created this leg.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call resource.',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				to: {
					type: 'string',
					description:
						'The phone number, SIP address, Client identifier or SIM SID that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.',
				},
				to_formatted: {
					type: 'string',
					description:
						'The phone number, SIP address or Client identifier that received this call. Formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).',
				},
				from: {
					type: 'string',
					description:
						'The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.',
				},
				from_formatted: {
					type: 'string',
					description:
						'The calling phone number, SIP address, or Client identifier formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).',
				},
				phone_number_sid: {
					type: 'string',
					description:
						'If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed.',
					pattern: '^PN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				status: {
					type: 'string',
					description:
						'The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.',
					default: '',
					enum: [
						'',
						'queued',
						'ringing',
						'in-progress',
						'completed',
						'busy',
						'failed',
						'no-answer',
						'canceled',
					],
				},
				start_time: {
					type: 'string',
					description:
						'The start time of the call, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call has not yet been dialed.',
				},
				end_time: {
					type: 'string',
					description:
						'The time the call ended, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call did not complete successfully.',
				},
				duration: {
					type: 'string',
					description:
						'The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing calls.',
				},
				price: {
					type: 'string',
					description:
						'The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. The price associated with a call only reflects the charge for connectivity. Charges for other call-related features such as Answering Machine Detection, Text-To-Speech, and SIP REFER are not included in this value.',
				},
				price_unit: {
					type: 'string',
					description:
						'The currency in which `Price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`, `JPY`). Always capitalized for calls.',
				},
				direction: {
					type: 'string',
					description:
						'A string describing the direction of the call. Can be: `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination) for outgoing calls from your communications infrastructure to the PSTN or [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming calls to your communications infrastructure from the PSTN.',
					default: '',
					enum: ['', 'inbound', 'outbound-api', 'outbound-dial'],
				},
				answered_by: {
					type: 'string',
					description:
						'Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise.',
				},
				api_version: {
					type: 'string',
					description: 'The API version used to create the call.',
				},
				forwarded_from: {
					type: 'string',
					description:
						'The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty.',
				},
				group_sid: {
					type: 'string',
					description:
						'The Group SID associated with this call. If no Group is associated with the call, the field is empty.',
					pattern: '^GP[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				caller_name: {
					type: 'string',
					description:
						"The caller's name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty.",
				},
				queue_time: {
					type: 'string',
					description: 'The wait time in milliseconds before the call is placed.',
				},
				trunk_sid: {
					type: 'string',
					description:
						'The unique identifier of the trunk resource that was used for this call. The field is empty if the call was not made using a SIP trunk or if the call is not terminated.',
					pattern: '^TK[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				uri: {
					type: 'string',
					description: 'The URI of this resource, relative to `https://api.twilio.com`.',
				},
				subresource_uris: {
					type: 'object',
					description:
						'A list of subresources available to this call, identified by their URIs relative to `https://api.twilio.com`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'createExecution',
		label: 'Create an execution',
		description: 'Starts a Studio Flow execution.',
		context:
			'---\nname: createExecution\ndescription: Starts a Studio Flow execution.\n---\n\nStarts a Studio Flow execution.\n\nThe request body is `application/x-www-form-urlencoded`. Omitted fields are left out of the form.\n\nStudio is listed for US1. IE1 lists Studio as Public Beta. Studio is absent from the AU1 product list. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Execution resource](https://www.twilio.com/docs/studio/rest-api/v2/execution).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				FlowSid: {
					type: 'string',
					description:
						'The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				To: {
					type: 'string',
					description:
						'The Contact phone number to start a Studio Flow Execution, available as variable `{{contact.channel.address}}`.',
				},
				From: {
					type: 'string',
					description:
						"The Twilio phone number to send messages or initiate calls from during the Flow's Execution. Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging Service SID.",
				},
				Parameters: {
					description:
						'JSON data that will be added to the Flow\'s context and that can be accessed as variables inside your Flow. For example, if you pass in `Parameters={"name":"Zeke"}`, a widget in your Flow can reference the variable `{{flow.data.name}}`, which returns "Zeke". Send a JSON object. The call forwards it as a JSON string.',
				},
			},
			required: ['FlowSid', 'To', 'From'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sid: {
					type: 'string',
					description:
						'The unique string that we created to identify the Execution resource.',
					pattern: '^FN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				flow_sid: {
					type: 'string',
					description: 'The SID of the Flow.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				contact_channel_address: {
					type: 'string',
					description:
						'The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.',
				},
				contact_sid: {
					type: 'string',
					description: 'The SID of the Contact.',
					pattern: '^FC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				flow_version: {
					type: 'number',
					description: 'The Flow version number at the time of Execution creation.',
				},
				context: {
					description:
						"The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.",
				},
				status: {
					type: 'string',
					description: 'The status of the Execution. Can be: `active` or `ended`.',
					default: '',
					enum: ['', 'active', 'ended'],
				},
				date_created: {
					type: 'string',
					description:
						'The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
				},
				date_updated: {
					type: 'string',
					description:
						'The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
				},
				initiated_by: {
					type: 'string',
					description:
						'The SID or identifier that triggered this Execution. For example, a Call SID if triggered by an incoming call, a Message SID if triggered by an incoming message, a Request SID if triggered by a REST API request, and so on.',
				},
				url: { type: 'string', description: 'The absolute URL of the resource.' },
				links: {
					type: 'object',
					description: 'The URLs of nested resources.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'createMessage',
		label: 'Create a message',
		description: 'Creates a message.',
		context:
			'---\nname: createMessage\ndescription: Creates a message.\n---\n\nCreates a message.\n\nThe request body is `application/x-www-form-urlencoded`. Omitted fields are left out of the form.\n\nThe account SID comes from the connection. Programmable Messaging is listed for US1 and IE1, and it is absent from the AU1 product list, so an Australia region connection cannot serve this call. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Message resource](https://www.twilio.com/docs/messaging/api/message-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				To: {
					type: 'string',
					description:
						"The recipient's phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (for SMS/MMS) or [channel address](https://www.twilio.com/docs/messaging/channels), e.g. `whatsapp:+15552229999`.",
				},
				StatusCallback: {
					type: 'string',
					description:
						'The URL of the endpoint to which Twilio sends [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url). URL must contain a valid hostname and underscores are not allowed. If you include this parameter with the `MessagingServiceSid`, Twilio uses this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource).',
				},
				ApplicationSid: {
					type: 'string',
					description:
						"The SID of the associated [TwiML Application](https://www.twilio.com/docs/usage/api/applications). [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url) are sent to the TwiML App's `message_status_callback` URL. Note that the `StatusCallback` parameter of a request takes priority over the `ApplicationSid` parameter; if both are included `ApplicationSid` is ignored.",
					pattern: '^AP[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				ProvideFeedback: {
					type: 'boolean',
					description:
						'Boolean indicating whether or not you intend to provide delivery confirmation feedback to Twilio (used in conjunction with the [Message Feedback subresource](https://www.twilio.com/docs/sms/api/message-feedback-resource)). Default value is `false`.',
				},
				Attempt: {
					type: 'number',
					description:
						'Total number of attempts made (including this request) to send the message regardless of the provider used',
				},
				ValidityPeriod: {
					type: 'number',
					description:
						"The maximum length in seconds that the Message can remain in Twilio's outgoing message queue. If a queued Message exceeds the `ValidityPeriod`, the Message is not sent. Accepted values are integers from `1` to `36000`. Default value is `36000`. A `ValidityPeriod` greater than `5` is recommended. [Learn more about the validity period](https://www.twilio.com/blog/take-more-control-of-outbound-messages-using-validity-period-html)",
				},
				ContentRetention: {
					type: 'string',
					description:
						'Determines if the message content can be stored or redacted based on privacy settings',
					default: '',
					enum: ['', 'retain', 'discard'],
				},
				AddressRetention: {
					type: 'string',
					description:
						'Determines if the address can be stored or obfuscated based on privacy settings',
					default: '',
					enum: ['', 'retain', 'obfuscate'],
				},
				SmartEncoded: {
					type: 'boolean',
					description:
						'Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`.',
				},
				PersistentAction: {
					type: 'array',
					description:
						'Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp).',
					items: {
						type: 'string',
						description:
							'Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp).',
					},
				},
				TrafficType: {
					type: 'string',
					description: 'Traffic type. The documented value is `free`.',
					default: '',
					enum: ['', 'free'],
				},
				ShortenUrls: {
					type: 'boolean',
					description:
						'For Messaging Services with [Link Shortening configured](https://www.twilio.com/docs/messaging/features/link-shortening) only: A Boolean indicating whether or not Twilio should shorten links in the `Body` of the Message. Default value is `false`. If `true`, the `MessagingServiceSid` parameter must also be provided.',
				},
				ScheduleType: {
					type: 'string',
					description:
						'For Messaging Services only: Include this parameter with a value of `fixed` in conjunction with the `SendAt` parameter in order to [schedule a Message](https://www.twilio.com/docs/messaging/features/message-scheduling).',
					default: '',
					enum: ['', 'fixed'],
				},
				SendAt: {
					type: 'string',
					description:
						'The time that Twilio will send the message. Must be in ISO 8601 format.',
				},
				SendAsMms: {
					type: 'boolean',
					description:
						'If set to `true`, Twilio delivers the message as a single MMS message, regardless of the presence of media.',
				},
				ContentVariables: {
					type: 'string',
					description:
						'For [Content Editor/API](https://www.twilio.com/docs/content) only: Key-value pairs of [Template variables](https://www.twilio.com/docs/content/using-variables-with-content-api) and their substitution values as a JSON string, for example `{"1":"Tom"}`. `ContentSid` parameter must also be provided. If values are not defined in the `ContentVariables` parameter, the [Template\'s default placeholder values](https://www.twilio.com/docs/content/content-api-resources#create-templates) are used.',
				},
				MessageIntent: {
					type: 'string',
					description:
						"Specifies the purpose or use case of the outbound communication. This parameter is used by Twilio's [Traffic Shaping](https://www.twilio.com/docs/messaging/features/traffic-shaping) and [Compliance Toolkit](https://www.twilio.com/docs/messaging/features/compliance-toolkit) products. Possible values include: `otp`, `notifications`, `marketing`, `fraud`, `security`, `customercare`, `delivery`, `education`, `polling`, `announcements`, and `events`.",
					default: '',
					enum: [
						'',
						'otp',
						'notifications',
						'marketing',
						'fraud',
						'security',
						'customercare',
						'delivery',
						'education',
						'polling',
						'announcements',
						'events',
					],
				},
				RiskCheck: {
					type: 'string',
					description:
						'Include this parameter with a value of `disable` to skip any kind of risk check on the respective message request.',
					default: '',
					enum: ['', 'enable', 'disable'],
				},
				From: {
					type: 'string',
					description:
						"The sender's Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), Wireless SIM, [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). The value of the `From` parameter must be a sender that is hosted within Twilio and belongs to the Account creating the Message. If you are using `MessagingServiceSid`, this parameter can be empty (Twilio assigns a `From` value from the Messaging Service's Sender Pool) or you can provide a specific sender from your Sender Pool.",
				},
				FallbackFrom: {
					type: 'string',
					description:
						'A fallback SMS sender to use when the recipient cannot be reached over RCS. This parameter may only be used when also providing a [Messaging Service](https://twilio.com/docs/messaging/services) containing an RCS sender. The fallback SMS sender must be either a Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), or [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), hosted within Twilio and belong to the Account creating the Message.',
				},
				MessagingServiceSid: {
					type: 'string',
					description:
						"The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) you want to associate with the Message. When this parameter is provided and the `From` parameter is omitted, Twilio selects the optimal sender from the Messaging Service's Sender Pool. You may also provide a `From` parameter if you want to use a specific Sender from the Sender Pool.",
					pattern: '^MG[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				Body: {
					type: 'string',
					description:
						'The text content of the outgoing message. Can be up to 1,600 characters in length. SMS only: If the `Body` contains more than 160 [GSM-7](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) characters (or 70 [UCS-2](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding) characters), the message is segmented and charged accordingly. For long `Body` text, consider using the [`SendAsMms` parameter](https://www.twilio.com/blog/mms-for-long-text-messages).',
				},
				MediaUrl: {
					type: 'array',
					description:
						'The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported by Twilio and content is formatted for delivery on destination devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`) and 500 KB for [other types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media. To send more than one image in the message, provide multiple `MediaUrl` parameters in the POST request. You can include up to ten `MediaUrl` parameters per message. [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages) and [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-) limits apply.',
					items: {
						type: 'string',
						description:
							'The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported by Twilio and content is formatted for delivery on destination devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`) and 500 KB for [other types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media. To send more than one image in the message, provide multiple `MediaUrl` parameters in the POST request. You can include up to ten `MediaUrl` parameters per message. [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages) and [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-) limits apply.',
					},
					maxItems: 10,
				},
				ContentSid: {
					type: 'string',
					description:
						"For [Content Editor/API](https://www.twilio.com/docs/content) only: The SID of the Content Template to be used with the Message, e.g., `HXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`. If this parameter is not provided, a Content Template is not used. Find the SID in the Console on the Content Editor page. For Content API users, the SID is found in Twilio's response when [creating the Template](https://www.twilio.com/docs/content/content-api-resources#create-templates) or by [fetching your Templates](https://www.twilio.com/docs/content/content-api-resources#fetch-all-content-resources).",
					pattern: '^HX[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['To'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { type: 'string', description: 'The text content of the message' },
				num_segments: {
					type: 'string',
					description:
						"The number of segments that make up the complete message. SMS message bodies that exceed the [character limit](https://www.twilio.com/docs/glossary/what-sms-character-limit) are segmented and charged as multiple messages. Note: For messages sent via a Messaging Service, `num_segments` is initially `0`, since a sender hasn't yet been assigned.",
				},
				direction: {
					type: 'string',
					description:
						'The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for messages created by the REST API, `outbound-call` for messages created during a call, or `outbound-reply` for messages created in response to an incoming message.',
					default: '',
					enum: ['', 'inbound', 'outbound-api', 'outbound-call', 'outbound-reply'],
				},
				from: {
					type: 'string',
					description:
						"The sender's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), Wireless SIM, [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). For incoming messages, this is the number or channel address of the sender. For outgoing messages, this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address from which the message is sent.",
				},
				to: {
					type: 'string',
					description:
						"The recipient's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format) or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g. `whatsapp:+15552229999`)",
				},
				date_updated: {
					type: 'string',
					description:
						'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was last updated',
				},
				price: {
					type: 'string',
					description:
						'The amount billed for the message in the currency specified by `price_unit`. The `price` is populated after the message has been sent/received, and may not be immediately availalble. View the [Pricing page](https://www.twilio.com/en-us/pricing) for more details.',
				},
				error_message: {
					type: 'string',
					description:
						'The description of the `error_code` if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.',
				},
				uri: {
					type: 'string',
					description:
						'The URI of the Message resource, relative to `https://api.twilio.com`.',
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				num_media: {
					type: 'string',
					description: 'The number of media files associated with the Message resource.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`, `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read` (WhatsApp only). For more information, See [detailed descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).',
					default: '',
					enum: [
						'',
						'queued',
						'sending',
						'sent',
						'failed',
						'delivered',
						'undelivered',
						'receiving',
						'received',
						'accepted',
						'scheduled',
						'read',
						'partially_delivered',
						'canceled',
					],
				},
				messaging_service_sid: {
					type: 'string',
					description:
						'The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) associated with the Message resource. A unique default value is assigned if a Messaging Service is not used.',
					pattern: '^MG[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				sid: {
					type: 'string',
					description:
						'The unique, Twilio-provided string that identifies the Message resource.',
					pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				date_sent: {
					type: 'string',
					description:
						'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message was sent. For an outgoing message, this is when Twilio sent the message. For an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook URL.',
				},
				date_created: {
					type: 'string',
					description:
						'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was created',
				},
				error_code: {
					type: 'number',
					description:
						'The [error code](https://www.twilio.com/docs/api/errors) returned if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.',
				},
				price_unit: {
					type: 'string',
					description:
						'The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).',
				},
				api_version: {
					type: 'string',
					description: 'The API version used to process the Message',
				},
				subresource_uris: {
					type: 'object',
					description:
						'A list of related resources identified by their URIs relative to `https://api.twilio.com`',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'deleteCall',
		label: 'Delete a call',
		description: 'Deletes a call record.',
		context:
			'---\nname: deleteCall\ndescription: Deletes a call record.\n---\n\nDeletes a call record.\n\nA successful delete returns an empty body.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Call resource](https://www.twilio.com/docs/voice/api/call-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				Sid: {
					type: 'string',
					description:
						'The Twilio-provided Call SID that uniquely identifies the Call resource to delete',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['Sid'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'deleteExecution',
		label: 'Delete an execution',
		description: 'Deletes a Studio Flow execution.',
		context:
			'---\nname: deleteExecution\ndescription: Deletes a Studio Flow execution.\n---\n\nDeletes a Studio Flow execution.\n\nA successful delete returns an empty body.\n\nStudio is listed for US1. IE1 lists Studio as Public Beta. Studio is absent from the AU1 product list. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Execution resource](https://www.twilio.com/docs/studio/rest-api/v2/execution).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				FlowSid: {
					type: 'string',
					description:
						'The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				Sid: {
					type: 'string',
					description:
						'The SID of the Execution resource to delete. Pattern `FN` plus 32 hex characters.',
					pattern: '^FN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['FlowSid', 'Sid'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'deleteMessage',
		label: 'Delete a message',
		description: 'Deletes a message.',
		context:
			'---\nname: deleteMessage\ndescription: Deletes a message.\n---\n\nDeletes a message.\n\nA successful delete returns an empty body.\n\nThe account SID comes from the connection. Programmable Messaging is listed for US1 and IE1, and it is absent from the AU1 product list, so an Australia region connection cannot serve this call. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Message resource](https://www.twilio.com/docs/messaging/api/message-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				Sid: {
					type: 'string',
					description:
						'The SID of the Message resource to delete. Pattern `SM` or `MM` plus 32 hex characters.',
					pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['Sid'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'getCall',
		label: 'Get a call',
		description: 'Retrieves a call by SID.',
		context:
			'---\nname: getCall\ndescription: Retrieves a call by SID.\n---\n\nRetrieves a call by SID.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Call resource](https://www.twilio.com/docs/voice/api/call-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				Sid: {
					type: 'string',
					description: 'The SID of the Call resource to fetch.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['Sid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sid: {
					type: 'string',
					description:
						'The unique string that we created to identify this Call resource.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				date_created: {
					type: 'string',
					description:
						'The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
				},
				date_updated: {
					type: 'string',
					description:
						'The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
				},
				parent_call_sid: {
					type: 'string',
					description: 'The SID that identifies the call that created this leg.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call resource.',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				to: {
					type: 'string',
					description:
						'The phone number, SIP address, Client identifier or SIM SID that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.',
				},
				to_formatted: {
					type: 'string',
					description:
						'The phone number, SIP address or Client identifier that received this call. Formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).',
				},
				from: {
					type: 'string',
					description:
						'The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.',
				},
				from_formatted: {
					type: 'string',
					description:
						'The calling phone number, SIP address, or Client identifier formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).',
				},
				phone_number_sid: {
					type: 'string',
					description:
						'If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed.',
					pattern: '^PN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				status: {
					type: 'string',
					description:
						'The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.',
					default: '',
					enum: [
						'',
						'queued',
						'ringing',
						'in-progress',
						'completed',
						'busy',
						'failed',
						'no-answer',
						'canceled',
					],
				},
				start_time: {
					type: 'string',
					description:
						'The start time of the call, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call has not yet been dialed.',
				},
				end_time: {
					type: 'string',
					description:
						'The time the call ended, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call did not complete successfully.',
				},
				duration: {
					type: 'string',
					description:
						'The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing calls.',
				},
				price: {
					type: 'string',
					description:
						'The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. The price associated with a call only reflects the charge for connectivity. Charges for other call-related features such as Answering Machine Detection, Text-To-Speech, and SIP REFER are not included in this value.',
				},
				price_unit: {
					type: 'string',
					description:
						'The currency in which `Price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`, `JPY`). Always capitalized for calls.',
				},
				direction: {
					type: 'string',
					description:
						'A string describing the direction of the call. Can be: `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination) for outgoing calls from your communications infrastructure to the PSTN or [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming calls to your communications infrastructure from the PSTN.',
					default: '',
					enum: ['', 'inbound', 'outbound-api', 'outbound-dial'],
				},
				answered_by: {
					type: 'string',
					description:
						'Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise.',
				},
				api_version: {
					type: 'string',
					description: 'The API version used to create the call.',
				},
				forwarded_from: {
					type: 'string',
					description:
						'The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty.',
				},
				group_sid: {
					type: 'string',
					description:
						'The Group SID associated with this call. If no Group is associated with the call, the field is empty.',
					pattern: '^GP[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				caller_name: {
					type: 'string',
					description:
						"The caller's name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty.",
				},
				queue_time: {
					type: 'string',
					description: 'The wait time in milliseconds before the call is placed.',
				},
				trunk_sid: {
					type: 'string',
					description:
						'The unique identifier of the trunk resource that was used for this call. The field is empty if the call was not made using a SIP trunk or if the call is not terminated.',
					pattern: '^TK[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				uri: {
					type: 'string',
					description: 'The URI of this resource, relative to `https://api.twilio.com`.',
				},
				subresource_uris: {
					type: 'object',
					description:
						'A list of subresources available to this call, identified by their URIs relative to `https://api.twilio.com`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'getExecution',
		label: 'Get an execution',
		description: 'Retrieves a Studio Flow execution.',
		context:
			'---\nname: getExecution\ndescription: Retrieves a Studio Flow execution.\n---\n\nRetrieves a Studio Flow execution.\n\nStudio is listed for US1. IE1 lists Studio as Public Beta. Studio is absent from the AU1 product list. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Execution resource](https://www.twilio.com/docs/studio/rest-api/v2/execution).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				FlowSid: {
					type: 'string',
					description:
						'The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				Sid: {
					type: 'string',
					description:
						'The SID of the Execution resource to fetch. Pattern `FN` plus 32 hex characters.',
					pattern: '^FN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['FlowSid', 'Sid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sid: {
					type: 'string',
					description:
						'The unique string that we created to identify the Execution resource.',
					pattern: '^FN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				flow_sid: {
					type: 'string',
					description: 'The SID of the Flow.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				contact_channel_address: {
					type: 'string',
					description:
						'The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.',
				},
				contact_sid: {
					type: 'string',
					description: 'The SID of the Contact.',
					pattern: '^FC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				flow_version: {
					type: 'number',
					description: 'The Flow version number at the time of Execution creation.',
				},
				context: {
					description:
						"The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.",
				},
				status: {
					type: 'string',
					description: 'The status of the Execution. Can be: `active` or `ended`.',
					default: '',
					enum: ['', 'active', 'ended'],
				},
				date_created: {
					type: 'string',
					description:
						'The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
				},
				date_updated: {
					type: 'string',
					description:
						'The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
				},
				initiated_by: {
					type: 'string',
					description:
						'The SID or identifier that triggered this Execution. For example, a Call SID if triggered by an incoming call, a Message SID if triggered by an incoming message, a Request SID if triggered by a REST API request, and so on.',
				},
				url: { type: 'string', description: 'The absolute URL of the resource.' },
				links: {
					type: 'object',
					description: 'The URLs of nested resources.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'getLineType',
		label: 'Get line type',
		description: 'Looks up a phone number with Lookup v2.',
		context:
			'---\nname: getLineType\ndescription: Looks up a phone number with Lookup v2.\n---\n\nLooks up a phone number with Lookup v2.\n\nBasic phone number formatting and validation are returned on every request. Data packages return `null` unless requested in `Fields` (for example, include `line_type_intelligence` in `Fields` to return the line type). When using `reassigned_number` or `identity_match`, pass `LastVerifiedDate` and `DateOfBirth` in `YYYYMMDD` format.\n\nLookup v2 is listed for US1 and IE1. It is absent from the AU1 product list. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Lookup v2](https://www.twilio.com/docs/lookup/v2-api).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				PhoneNumber: {
					type: 'string',
					description:
						'The phone number to look up, in E.164 or national format. The default country code is +1 when this is a national number and `CountryCode` is omitted.',
				},
				Fields: {
					type: 'string',
					description:
						'Packages to return. Selected values are sent as a comma-separated `Fields` query parameter. Basic formatting is returned on every request. Null packages stay null unless their name is selected.',
					default: '',
					enum: [
						'',
						'validation',
						'caller_name',
						'sim_swap',
						'call_forwarding',
						'line_status',
						'line_type_intelligence',
						'identity_match',
						'reassigned_number',
						'sms_pumping_risk',
						'phone_number_quality_score',
						'pre_fill',
					],
				},
				CountryCode: {
					type: 'string',
					description:
						'The ISO 3166-1 alpha-2 country code used when `PhoneNumber` is in national format.',
				},
				FirstName: {
					type: 'string',
					description:
						"The user's given name. Used only when `Fields` includes `identity_match`.",
				},
				LastName: {
					type: 'string',
					description:
						"The user's surname. Used only when `Fields` includes `identity_match`.",
				},
				AddressLine1: {
					type: 'string',
					description:
						"The first line of the user's address. Used only when `Fields` includes `identity_match`.",
				},
				AddressLine2: {
					type: 'string',
					description:
						"The second line of the user's address. Used only when `Fields` includes `identity_match`.",
				},
				City: {
					type: 'string',
					description:
						"The user's city. Used only when `Fields` includes `identity_match`.",
				},
				State: {
					type: 'string',
					description:
						"The user's state or region. Used only when `Fields` includes `identity_match`.",
				},
				PostalCode: {
					type: 'string',
					description:
						"The user's postal or ZIP code. Used only when `Fields` includes `identity_match`.",
				},
				AddressCountryCode: {
					type: 'string',
					description:
						"The ISO country code of the user's address. Used only when `Fields` includes `identity_match`.",
				},
				NationalId: {
					type: 'string',
					description:
						"The user's national ID. Used only when `Fields` includes `identity_match`. Non-KYC accounts receive null for this value in the response.",
				},
				DateOfBirth: {
					type: 'string',
					description:
						"The user's date of birth in `YYYYMMDD` format. Used only when `Fields` includes `identity_match`.",
				},
				LastVerifiedDate: {
					type: 'string',
					description:
						'The date consent was obtained to reach the end user at this number, or a date they could still be reached there, in `YYYYMMDD` format. Used only when `Fields` includes `reassigned_number`.',
				},
				VerificationSid: {
					type: 'string',
					description:
						'The identifier of a Verify API verification. Used only when `Fields` includes `pre_fill`.',
				},
				PartnerSubId: {
					type: 'string',
					description:
						'Optional context for sub-accounts, tenant IDs, or sender IDs. It improves SMS pumping risk analysis.',
				},
			},
			required: ['PhoneNumber'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				calling_country_code: {
					type: 'string',
					description:
						'International dialing prefix of the phone number defined in the E.164 standard.',
				},
				country_code: {
					type: 'string',
					description:
						"The phone number's [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).",
				},
				phone_number: {
					type: 'string',
					description:
						'The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.',
				},
				national_format: {
					type: 'string',
					description:
						'The phone number in [national format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).',
				},
				valid: {
					type: 'boolean',
					description:
						'Boolean which indicates if the phone number is in a valid range that can be freely assigned by a carrier to a user.',
				},
				validation_errors: {
					type: 'string',
					description:
						'Contains reasons why a phone number is invalid. Possible values: TOO_SHORT, TOO_LONG, INVALID_BUT_POSSIBLE, INVALID_COUNTRY_CODE, INVALID_LENGTH, NOT_A_NUMBER.',
					default: '',
					enum: [
						'',
						'TOO_SHORT',
						'TOO_LONG',
						'INVALID_BUT_POSSIBLE',
						'INVALID_COUNTRY_CODE',
						'INVALID_LENGTH',
						'NOT_A_NUMBER',
					],
				},
				caller_name: {
					type: 'object',
					description:
						'An object that contains caller name information based on [CNAM](https://support.twilio.com/hc/en-us/articles/360051670533-Getting-Started-with-CNAM-Caller-ID).',
					properties: {
						caller_name: {
							type: 'string',
							description:
								'The caller name from the CNAM package. Null unless `Fields` includes `caller_name`.',
						},
						caller_type: {
							type: 'string',
							description:
								'The caller type from the CNAM package. Null unless `Fields` includes `caller_name`.',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the caller name package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				sim_swap: {
					type: 'object',
					description:
						'An object that contains information on the last date the subscriber identity module (SIM) was changed for a mobile phone number.',
					properties: {
						last_sim_swap: {
							type: 'object',
							description: 'When the SIM was last changed for this mobile number.',
							properties: {
								last_sim_swap_date: {
									type: 'string',
									description: 'The date of the last SIM swap.',
								},
								swapped_period: {
									type: 'string',
									description:
										'The period Twilio checked for a SIM swap. The documented sample is an ISO 8601 duration such as `PT24H`.',
								},
								swapped_in_period: {
									type: 'boolean',
									description: 'Whether the SIM was swapped during that period.',
								},
							},
							required: [],
						},
						carrier_name: {
							type: 'string',
							description: 'The carrier name reported with the SIM swap package.',
						},
						mobile_country_code: {
							type: 'string',
							description:
								'The mobile country code reported with the SIM swap package.',
						},
						mobile_network_code: {
							type: 'string',
							description:
								'The mobile network code reported with the SIM swap package.',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the SIM swap package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				call_forwarding: {
					type: 'object',
					description:
						'An object that contains information on the unconditional call forwarding status of mobile phone number.',
					properties: {
						call_forwarding_enabled: {
							type: 'boolean',
							description:
								'Whether unconditional call forwarding is enabled for this mobile number.',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the call forwarding package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				line_type_intelligence: {
					type: 'object',
					description:
						'An object that contains line type information including the carrier name, mobile country code, and mobile network code.',
					properties: {
						mobile_country_code: {
							type: 'string',
							description: 'The mobile country code from the line type package.',
						},
						mobile_network_code: {
							type: 'string',
							description: 'The mobile network code from the line type package.',
						},
						carrier_name: {
							type: 'string',
							description: 'The carrier name from the line type package.',
						},
						type: {
							type: 'string',
							description: 'The line type from the line type package.',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the line type package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				line_status: {
					type: 'object',
					description:
						'An object that contains line status information for a mobile phone number.',
					properties: {
						status: {
							type: 'string',
							description: 'The line status for this mobile number.',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the line status package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				identity_match: {
					type: 'object',
					description:
						'An object that contains identity match information. The result of comparing user-provided information including name, address, date of birth, national ID, against authoritative phone-based data sources',
					properties: {
						first_name_match: {
							type: 'string',
							description: 'The match level for the submitted first name.',
						},
						last_name_match: {
							type: 'string',
							description: 'The match level for the submitted last name.',
						},
						address_lines_match: {
							type: 'string',
							description: 'The match level for the submitted address lines.',
						},
						city_match: {
							type: 'string',
							description: 'The match level for the submitted city.',
						},
						state_match: {
							type: 'string',
							description: 'The match level for the submitted state.',
						},
						postal_code_match: {
							type: 'string',
							description: 'The match level for the submitted postal code.',
						},
						address_country_match: {
							type: 'string',
							description: 'The match level for the submitted address country.',
						},
						national_id_match: {
							type: 'string',
							description: 'The match level for the submitted national ID.',
						},
						date_of_birth_match: {
							type: 'string',
							description: 'The match level for the submitted date of birth.',
						},
						summary_score: {
							type: 'number',
							description: 'A summary score from 0 (no match) to 100 (exact match).',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the identity match package. Null when that package succeeds.',
						},
						error_message: {
							type: 'string',
							description:
								'Error message for the identity match package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				reassigned_number: {
					type: 'object',
					description:
						"An object that contains reassigned number information. Reassigned Numbers will return a phone number's reassignment status given a phone number and date",
					properties: {
						last_verified_date: {
							type: 'string',
							description:
								'The last verified date used for the reassigned number check.',
						},
						is_number_reassigned: {
							type: 'string',
							description: 'The reassignment status of the phone number.',
						},
						error_code: {
							type: 'string',
							description:
								'Error code for the reassigned number package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				sms_pumping_risk: {
					type: 'object',
					description:
						'An object that contains information on if a phone number has been currently or previously blocked by Verify Fraud Guard for receiving malicious SMS pumping traffic as well as other signals associated with risky carriers and low conversion rates.',
					properties: {
						carrier_risk_category: {
							type: 'string',
							description:
								'The carrier risk category from the SMS pumping risk package.',
						},
						number_blocked: {
							type: 'boolean',
							description:
								'Whether Verify Fraud Guard has blocked this number for SMS pumping.',
						},
						number_blocked_date: {
							type: 'string',
							description: 'The date Verify Fraud Guard blocked this number.',
						},
						number_blocked_last_3_months: {
							type: 'boolean',
							description:
								'Whether this number was blocked for SMS pumping in the last 3 months.',
						},
						sms_pumping_risk_score: {
							type: 'number',
							description: 'The SMS pumping risk score.',
						},
						error_code: {
							type: 'number',
							description:
								'Error code for the SMS pumping risk package. Null when that package succeeds.',
						},
					},
					required: [],
				},
				phone_number_quality_score: {
					description:
						'An object that contains information of a mobile phone number quality score. Quality score will return a risk score about the phone number.',
				},
				pre_fill: {
					description:
						'An object that contains pre fill information. pre_fill will return PII information associated with the phone number like first name, last name, address line, country code, state and postal code.',
				},
				url: { type: 'string', description: 'The absolute URL of the resource.' },
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'getMessage',
		label: 'Get a message',
		description: 'Retrieves a message by SID.',
		context:
			'---\nname: getMessage\ndescription: Retrieves a message by SID.\n---\n\nRetrieves a message by SID.\n\nThe account SID comes from the connection. Programmable Messaging is listed for US1 and IE1, and it is absent from the AU1 product list, so an Australia region connection cannot serve this call. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Message resource](https://www.twilio.com/docs/messaging/api/message-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				Sid: {
					type: 'string',
					description:
						'The SID of the Message resource to fetch. Pattern `SM` or `MM` plus 32 hex characters.',
					pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
			},
			required: ['Sid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { type: 'string', description: 'The text content of the message' },
				num_segments: {
					type: 'string',
					description:
						"The number of segments that make up the complete message. SMS message bodies that exceed the [character limit](https://www.twilio.com/docs/glossary/what-sms-character-limit) are segmented and charged as multiple messages. Note: For messages sent via a Messaging Service, `num_segments` is initially `0`, since a sender hasn't yet been assigned.",
				},
				direction: {
					type: 'string',
					description:
						'The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for messages created by the REST API, `outbound-call` for messages created during a call, or `outbound-reply` for messages created in response to an incoming message.',
					default: '',
					enum: ['', 'inbound', 'outbound-api', 'outbound-call', 'outbound-reply'],
				},
				from: {
					type: 'string',
					description:
						"The sender's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), Wireless SIM, [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). For incoming messages, this is the number or channel address of the sender. For outgoing messages, this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address from which the message is sent.",
				},
				to: {
					type: 'string',
					description:
						"The recipient's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format) or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g. `whatsapp:+15552229999`)",
				},
				date_updated: {
					type: 'string',
					description:
						'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was last updated',
				},
				price: {
					type: 'string',
					description:
						'The amount billed for the message in the currency specified by `price_unit`. The `price` is populated after the message has been sent/received, and may not be immediately availalble. View the [Pricing page](https://www.twilio.com/en-us/pricing) for more details.',
				},
				error_message: {
					type: 'string',
					description:
						'The description of the `error_code` if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.',
				},
				uri: {
					type: 'string',
					description:
						'The URI of the Message resource, relative to `https://api.twilio.com`.',
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				num_media: {
					type: 'string',
					description: 'The number of media files associated with the Message resource.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`, `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read` (WhatsApp only). For more information, See [detailed descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).',
					default: '',
					enum: [
						'',
						'queued',
						'sending',
						'sent',
						'failed',
						'delivered',
						'undelivered',
						'receiving',
						'received',
						'accepted',
						'scheduled',
						'read',
						'partially_delivered',
						'canceled',
					],
				},
				messaging_service_sid: {
					type: 'string',
					description:
						'The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) associated with the Message resource. A unique default value is assigned if a Messaging Service is not used.',
					pattern: '^MG[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				sid: {
					type: 'string',
					description:
						'The unique, Twilio-provided string that identifies the Message resource.',
					pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				date_sent: {
					type: 'string',
					description:
						'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message was sent. For an outgoing message, this is when Twilio sent the message. For an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook URL.',
				},
				date_created: {
					type: 'string',
					description:
						'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was created',
				},
				error_code: {
					type: 'number',
					description:
						'The [error code](https://www.twilio.com/docs/api/errors) returned if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.',
				},
				price_unit: {
					type: 'string',
					description:
						'The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).',
				},
				api_version: {
					type: 'string',
					description: 'The API version used to process the Message',
				},
				subresource_uris: {
					type: 'object',
					description:
						'A list of related resources identified by their URIs relative to `https://api.twilio.com`',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listAlerts',
		label: 'List alerts',
		description: 'Lists Monitor alerts.',
		context:
			'---\nname: listAlerts\ndescription: Lists Monitor alerts.\n---\n\nLists Monitor alerts.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nRead the next `PageToken` from `meta.next_page_url`. Pass that token, not the whole URI.\n\nThe request uses the Monitor host for the connection region (`monitor.twilio.com`, `monitor.sydney.au1.twilio.com`, or `monitor.dublin.ie1.twilio.com`). [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Monitor alerts](https://www.twilio.com/docs/usage/monitor-alert).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				LogLevel: {
					type: 'string',
					description:
						'Only show alerts for this log level. Can be `error`, `warning`, `notice`, or `debug`.',
					default: '',
					enum: ['', 'error', 'warning', 'notice', 'debug'],
				},
				StartDate: {
					type: 'string',
					description:
						'Only include alerts that occurred on or after this date and time. Specify GMT as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`.',
				},
				EndDate: {
					type: 'string',
					description:
						'Only include alerts that occurred on or before this date and time. Specify GMT as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`.',
				},
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				alerts: {
					type: 'array',
					description: 'The Alert resources on this page.',
					items: {
						type: 'object',
						description: 'One Alert resource.',
						properties: {
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Alert resource.',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							alert_text: { type: 'string', description: 'The text of the alert.' },
							api_version: {
								type: 'string',
								description:
									"The API version used when the alert was generated. Can be empty for events that don't have a specific API version.",
							},
							date_created: {
								type: 'string',
								description:
									'The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
							},
							date_generated: {
								type: 'string',
								description:
									'The date and time in GMT when the alert was generated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. Due to buffering, this can be different than `date_created`.',
							},
							date_updated: {
								type: 'string',
								description:
									'The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
							},
							error_code: {
								type: 'string',
								description:
									'The error code for the condition that generated the alert. See the [Error Dictionary](https://www.twilio.com/docs/api/errors) for possible causes and solutions to the error.',
							},
							log_level: {
								type: 'string',
								description:
									'The log level. Can be: `error`, `warning`, `notice`, or `debug`.',
								default: '',
								enum: ['', 'error', 'warning', 'notice', 'debug'],
							},
							more_info: {
								type: 'string',
								description:
									'The URL of the page in our [Error Dictionary](https://www.twilio.com/docs/api/errors) with more information about the error condition.',
							},
							request_method: {
								type: 'string',
								description:
									'The method used by the request that generated the alert. If the alert was generated by a request we made to your server, this is the method we used. If the alert was generated by a request from your application to our API, this is the method your application used.',
								default: '',
								enum: ['', 'GET', 'POST'],
							},
							request_url: {
								type: 'string',
								description:
									'The URL of the request that generated the alert. If the alert was generated by a request we made to your server, this is the URL on your server that generated the alert. If the alert was generated by a request from your application to our API, this is the URL of the resource requested.',
							},
							resource_sid: {
								type: 'string',
								description:
									'The SID of the resource for which the alert was generated. For instance, if your server failed to respond to an HTTP request during the flow of a particular call, this value would be the SID of the server. This value is empty if the alert was not generated for a particular resource.',
								pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							sid: {
								type: 'string',
								description:
									'The unique string that we created to identify the Alert resource.',
								pattern: '^NO[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							url: {
								type: 'string',
								description: 'The absolute URL of the Alert resource.',
							},
							service_sid: {
								type: 'string',
								description:
									'The SID of the service or resource that generated the alert. Can be `null`.',
								pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
						},
						required: [],
					},
				},
				meta: {
					type: 'object',
					description: 'Paging information for this list.',
					properties: {
						first_page_url: {
							type: 'string',
							description: 'Absolute URL of the first page.',
						},
						key: {
							type: 'string',
							description:
								'The response key that holds the list. For this call it is `alerts`.',
						},
						next_page_url: {
							type: 'string',
							description:
								'Absolute URL of the next page. Null on the last page. The query contains the next PageToken.',
						},
						page: {
							type: 'number',
							description:
								'The page index. Twilio documents this value as client state.',
						},
						page_size: {
							type: 'number',
							description: 'How many resources this page contains.',
						},
						previous_page_url: {
							type: 'string',
							description:
								'Absolute URL of the previous page. Null on the first page.',
						},
						url: { type: 'string', description: 'Absolute URL of this page.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listCalls',
		label: 'List calls',
		description: 'Lists calls on the Twilio account.',
		context:
			'---\nname: listCalls\ndescription: Lists calls on the Twilio account.\n---\n\nLists calls on the Twilio account.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nRead the next `PageToken` from `next_page_uri`. Pass that token, not the whole URI.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Call resource](https://www.twilio.com/docs/voice/api/call-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				To: {
					type: 'string',
					description:
						'Only show calls made to this phone number, SIP address, Client identifier or SIM SID.',
				},
				From: {
					type: 'string',
					description:
						'Only include calls from this phone number, SIP address, Client identifier or SIM SID.',
				},
				ParentCallSid: {
					type: 'string',
					description: 'Only include calls spawned by calls with this SID.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				Status: {
					type: 'string',
					description:
						'The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.',
					default: '',
					enum: [
						'',
						'queued',
						'ringing',
						'in-progress',
						'completed',
						'busy',
						'failed',
						'no-answer',
						'canceled',
					],
				},
				StartTime: {
					type: 'string',
					description:
						'Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started on this date.',
				},
				StartTimeBefore: {
					type: 'string',
					description:
						'Only include calls that started before this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started before this date. Sent as `StartTime<`.',
				},
				StartTimeAfter: {
					type: 'string',
					description:
						'Only include calls that started on or after this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started on or after this date. Sent as `StartTime>`.',
				},
				EndTime: {
					type: 'string',
					description:
						'Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended on this date.',
				},
				EndTimeBefore: {
					type: 'string',
					description:
						'Only include calls that ended before this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended before this date. Sent as `EndTime<`.',
				},
				EndTimeAfter: {
					type: 'string',
					description:
						'Only include calls that ended on or after this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended on or after this date. Sent as `EndTime>`.',
				},
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				end: {
					type: 'number',
					description: 'The zero-based index of the last resource on this page.',
				},
				first_page_uri: {
					type: 'string',
					description: 'URI of the first page, relative to `https://api.twilio.com`.',
				},
				next_page_uri: {
					type: 'string',
					description:
						'URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.',
				},
				page: {
					type: 'number',
					description: 'The page index. Twilio documents this value as client state.',
				},
				page_size: {
					type: 'number',
					description: 'How many resources this page contains.',
				},
				previous_page_uri: {
					type: 'string',
					description:
						'URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.',
				},
				start: {
					type: 'number',
					description: 'The zero-based index of the first resource on this page.',
				},
				uri: {
					type: 'string',
					description: 'URI of this page, relative to `https://api.twilio.com`.',
				},
				calls: {
					type: 'array',
					description: 'The Call resources on this page.',
					items: {
						type: 'object',
						description: 'One Call resource on this page.',
						properties: {
							sid: {
								type: 'string',
								description:
									'The unique string that we created to identify this Call resource.',
								pattern: '^CA[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							date_created: {
								type: 'string',
								description:
									'The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							date_updated: {
								type: 'string',
								description:
									'The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							parent_call_sid: {
								type: 'string',
								description:
									'The SID that identifies the call that created this leg.',
								pattern: '^CA[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call resource.',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							to: {
								type: 'string',
								description:
									'The phone number, SIP address, Client identifier or SIM SID that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.',
							},
							to_formatted: {
								type: 'string',
								description:
									'The phone number, SIP address or Client identifier that received this call. Formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).',
							},
							from: {
								type: 'string',
								description:
									'The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`.',
							},
							from_formatted: {
								type: 'string',
								description:
									'The calling phone number, SIP address, or Client identifier formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).',
							},
							phone_number_sid: {
								type: 'string',
								description:
									'If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed.',
								pattern: '^PN[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							status: {
								type: 'string',
								description:
									'The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.',
								default: '',
								enum: [
									'',
									'queued',
									'ringing',
									'in-progress',
									'completed',
									'busy',
									'failed',
									'no-answer',
									'canceled',
								],
							},
							start_time: {
								type: 'string',
								description:
									'The start time of the call, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call has not yet been dialed.',
							},
							end_time: {
								type: 'string',
								description:
									'The time the call ended, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call did not complete successfully.',
							},
							duration: {
								type: 'string',
								description:
									'The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing calls.',
							},
							price: {
								type: 'string',
								description:
									'The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. The price associated with a call only reflects the charge for connectivity. Charges for other call-related features such as Answering Machine Detection, Text-To-Speech, and SIP REFER are not included in this value.',
							},
							price_unit: {
								type: 'string',
								description:
									'The currency in which `Price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`, `JPY`). Always capitalized for calls.',
							},
							direction: {
								type: 'string',
								description:
									'A string describing the direction of the call. Can be: `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination) for outgoing calls from your communications infrastructure to the PSTN or [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming calls to your communications infrastructure from the PSTN.',
								default: '',
								enum: ['', 'inbound', 'outbound-api', 'outbound-dial'],
							},
							answered_by: {
								type: 'string',
								description:
									'Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise.',
							},
							api_version: {
								type: 'string',
								description: 'The API version used to create the call.',
							},
							forwarded_from: {
								type: 'string',
								description:
									'The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty.',
							},
							group_sid: {
								type: 'string',
								description:
									'The Group SID associated with this call. If no Group is associated with the call, the field is empty.',
								pattern: '^GP[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							caller_name: {
								type: 'string',
								description:
									"The caller's name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty.",
							},
							queue_time: {
								type: 'string',
								description:
									'The wait time in milliseconds before the call is placed.',
							},
							trunk_sid: {
								type: 'string',
								description:
									'The unique identifier of the trunk resource that was used for this call. The field is empty if the call was not made using a SIP trunk or if the call is not terminated.',
								pattern: '^TK[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							uri: {
								type: 'string',
								description:
									'The URI of this resource, relative to `https://api.twilio.com`.',
							},
							subresource_uris: {
								type: 'object',
								description:
									'A list of subresources available to this call, identified by their URIs relative to `https://api.twilio.com`.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listMessageMedia',
		label: 'List message media',
		description: 'Lists media on a message.',
		context:
			'---\nname: listMessageMedia\ndescription: Lists media on a message.\n---\n\nLists media on a message.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nRead the next `PageToken` from `next_page_uri`. Pass that token, not the whole URI.\n\nThe account SID comes from the connection. Programmable Messaging is listed for US1 and IE1, and it is absent from the AU1 product list, so an Australia region connection cannot serve this call. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Media resource](https://www.twilio.com/docs/messaging/api/media-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				MessageSid: {
					type: 'string',
					description:
						'The SID of the Message resource associated with the Media resource.',
					pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				DateCreated: {
					type: 'string',
					description:
						'Only include resources created on this date. Specify a date as `YYYY-MM-DD` in GMT.',
				},
				DateCreatedBefore: {
					type: 'string',
					description:
						'Only include resources created before this date. Specify a date as `YYYY-MM-DD` in GMT. Sent as `DateCreated<`.',
				},
				DateCreatedAfter: {
					type: 'string',
					description:
						'Only include resources created after this date. Specify a date as `YYYY-MM-DD` in GMT. Sent as `DateCreated>`.',
				},
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: ['MessageSid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				end: {
					type: 'number',
					description: 'The zero-based index of the last resource on this page.',
				},
				first_page_uri: {
					type: 'string',
					description: 'URI of the first page, relative to `https://api.twilio.com`.',
				},
				next_page_uri: {
					type: 'string',
					description:
						'URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.',
				},
				page: {
					type: 'number',
					description: 'The page index. Twilio documents this value as client state.',
				},
				page_size: {
					type: 'number',
					description: 'How many resources this page contains.',
				},
				previous_page_uri: {
					type: 'string',
					description:
						'URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.',
				},
				start: {
					type: 'number',
					description: 'The zero-based index of the first resource on this page.',
				},
				uri: {
					type: 'string',
					description: 'URI of this page, relative to `https://api.twilio.com`.',
				},
				media_list: {
					type: 'array',
					description: 'The Media resources on this page.',
					items: {
						type: 'object',
						description: 'One Media.',
						properties: {
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with this Media resource.',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							content_type: {
								type: 'string',
								description:
									'The default [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) of the media, for example `image/jpeg`, `image/png`, or `image/gif`.',
							},
							date_created: {
								type: 'string',
								description:
									'The date and time in GMT when this Media resource was created, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							date_updated: {
								type: 'string',
								description:
									'The date and time in GMT when this Media resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							parent_sid: {
								type: 'string',
								description:
									'The SID of the Message resource that is associated with this Media resource.',
								pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							sid: {
								type: 'string',
								description:
									'The unique string that identifies this Media resource.',
								pattern: '^ME[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							uri: {
								type: 'string',
								description:
									'The URI of this Media resource, relative to `https://api.twilio.com`.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listMessages',
		label: 'List messages',
		description: 'Lists messages on the Twilio account.',
		context:
			'---\nname: listMessages\ndescription: Lists messages on the Twilio account.\n---\n\nLists messages on the Twilio account.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nSending `Page` without a token was rejected with Twilio error 20001, which asks for `AfterSid` or `BeforeSid`. Those parameters are not on this endpoint. Omit `Page` for the first page.\n\nRead the next `PageToken` from `next_page_uri`. Pass that token, not the whole URI.\n\nThe account SID comes from the connection. Programmable Messaging is listed for US1 and IE1, and it is absent from the AU1 product list, so an Australia region connection cannot serve this call. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Message resource](https://www.twilio.com/docs/messaging/api/message-resource).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				To: {
					type: 'string',
					description:
						'Filter by recipient. For example: Set this parameter to `+15558881111` to retrieve a list of Message resources sent to `+15558881111`.',
				},
				From: {
					type: 'string',
					description:
						'Filter by sender. For example: Set this parameter to `+15552229999` to retrieve a list of Message resources sent by `+15552229999`.',
				},
				DateSent: {
					type: 'string',
					description: 'Only include messages sent on this date (`YYYY-MM-DD`, GMT).',
				},
				DateSentBefore: {
					type: 'string',
					description:
						'Only include messages sent on or before this date (`YYYY-MM-DD`, GMT). Sent as `DateSent<`.',
				},
				DateSentAfter: {
					type: 'string',
					description:
						'Only include messages sent on or after this date (`YYYY-MM-DD`, GMT). Sent as `DateSent>`.',
				},
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				end: {
					type: 'number',
					description: 'The zero-based index of the last resource on this page.',
				},
				first_page_uri: {
					type: 'string',
					description: 'URI of the first page, relative to `https://api.twilio.com`.',
				},
				next_page_uri: {
					type: 'string',
					description:
						'URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.',
				},
				page: {
					type: 'number',
					description: 'The page index. Twilio documents this value as client state.',
				},
				page_size: {
					type: 'number',
					description: 'How many resources this page contains.',
				},
				previous_page_uri: {
					type: 'string',
					description:
						'URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.',
				},
				start: {
					type: 'number',
					description: 'The zero-based index of the first resource on this page.',
				},
				uri: {
					type: 'string',
					description: 'URI of this page, relative to `https://api.twilio.com`.',
				},
				messages: {
					type: 'array',
					description: 'The Message resources on this page.',
					items: {
						type: 'object',
						description: 'One Message resource on this page.',
						properties: {
							body: {
								type: 'string',
								description: 'The text content of the message',
							},
							num_segments: {
								type: 'string',
								description:
									"The number of segments that make up the complete message. SMS message bodies that exceed the [character limit](https://www.twilio.com/docs/glossary/what-sms-character-limit) are segmented and charged as multiple messages. Note: For messages sent via a Messaging Service, `num_segments` is initially `0`, since a sender hasn't yet been assigned.",
							},
							direction: {
								type: 'string',
								description:
									'The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for messages created by the REST API, `outbound-call` for messages created during a call, or `outbound-reply` for messages created in response to an incoming message.',
								default: '',
								enum: [
									'',
									'inbound',
									'outbound-api',
									'outbound-call',
									'outbound-reply',
								],
							},
							from: {
								type: 'string',
								description:
									"The sender's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), Wireless SIM, [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). For incoming messages, this is the number or channel address of the sender. For outgoing messages, this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address from which the message is sent.",
							},
							to: {
								type: 'string',
								description:
									"The recipient's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format) or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g. `whatsapp:+15552229999`)",
							},
							date_updated: {
								type: 'string',
								description:
									'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was last updated',
							},
							price: {
								type: 'string',
								description:
									'The amount billed for the message in the currency specified by `price_unit`. The `price` is populated after the message has been sent/received, and may not be immediately availalble. View the [Pricing page](https://www.twilio.com/en-us/pricing) for more details.',
							},
							error_message: {
								type: 'string',
								description:
									'The description of the `error_code` if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.',
							},
							uri: {
								type: 'string',
								description:
									'The URI of the Message resource, relative to `https://api.twilio.com`.',
							},
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							num_media: {
								type: 'string',
								description:
									'The number of media files associated with the Message resource.',
							},
							status: {
								type: 'string',
								description:
									'The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`, `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read` (WhatsApp only). For more information, See [detailed descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).',
								default: '',
								enum: [
									'',
									'queued',
									'sending',
									'sent',
									'failed',
									'delivered',
									'undelivered',
									'receiving',
									'received',
									'accepted',
									'scheduled',
									'read',
									'partially_delivered',
									'canceled',
								],
							},
							messaging_service_sid: {
								type: 'string',
								description:
									'The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) associated with the Message resource. A unique default value is assigned if a Messaging Service is not used.',
								pattern: '^MG[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							sid: {
								type: 'string',
								description:
									'The unique, Twilio-provided string that identifies the Message resource.',
								pattern: '^(SM|MM)[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							date_sent: {
								type: 'string',
								description:
									'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message was sent. For an outgoing message, this is when Twilio sent the message. For an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook URL.',
							},
							date_created: {
								type: 'string',
								description:
									'The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was created',
							},
							error_code: {
								type: 'number',
								description:
									'The [error code](https://www.twilio.com/docs/api/errors) returned if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically.',
							},
							price_unit: {
								type: 'string',
								description:
									'The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).',
							},
							api_version: {
								type: 'string',
								description: 'The API version used to process the Message',
							},
							subresource_uris: {
								type: 'object',
								description:
									'A list of related resources identified by their URIs relative to `https://api.twilio.com`',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listRecordings',
		label: 'List recordings',
		description: 'Lists call recordings.',
		context:
			'---\nname: listRecordings\ndescription: Lists call recordings.\n---\n\nLists call recordings.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nSending `Page` without `PageToken` was rejected with Twilio error 20001 (`PageToken` is required for paging).\n\nRead the next `PageToken` from `next_page_uri`. Pass that token, not the whole URI.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Recording resource](https://www.twilio.com/docs/voice/api/recording).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				DateCreated: {
					type: 'string',
					description:
						'Only include resources created on this date. Specify a date as `YYYY-MM-DD` in GMT.',
				},
				DateCreatedBefore: {
					type: 'string',
					description:
						'Only include resources created before this date. Specify a date as `YYYY-MM-DD` in GMT. Sent as `DateCreated<`.',
				},
				DateCreatedAfter: {
					type: 'string',
					description:
						'Only include resources created after this date. Specify a date as `YYYY-MM-DD` in GMT. Sent as `DateCreated>`.',
				},
				CallSid: {
					type: 'string',
					description: 'The SID of the Call associated with the recordings to read.',
					pattern: '^CA[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				ConferenceSid: {
					type: 'string',
					description:
						'The Conference SID that identifies the conference associated with the recording to read.',
					pattern: '^CF[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				IncludeSoftDeleted: {
					type: 'boolean',
					description:
						'Whether to retrieve soft-deleted recordings. Recording metadata is kept for 40 days after deletion.',
				},
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				end: {
					type: 'number',
					description: 'The zero-based index of the last resource on this page.',
				},
				first_page_uri: {
					type: 'string',
					description: 'URI of the first page, relative to `https://api.twilio.com`.',
				},
				next_page_uri: {
					type: 'string',
					description:
						'URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.',
				},
				page: {
					type: 'number',
					description: 'The page index. Twilio documents this value as client state.',
				},
				page_size: {
					type: 'number',
					description: 'How many resources this page contains.',
				},
				previous_page_uri: {
					type: 'string',
					description:
						'URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.',
				},
				start: {
					type: 'number',
					description: 'The zero-based index of the first resource on this page.',
				},
				uri: {
					type: 'string',
					description: 'URI of this page, relative to `https://api.twilio.com`.',
				},
				recordings: {
					type: 'array',
					description: 'The Recording resources on this page.',
					items: {
						type: 'object',
						description: 'One Recording.',
						properties: {
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource.',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							api_version: {
								type: 'string',
								description: 'The API version used during the recording.',
							},
							call_sid: {
								type: 'string',
								description:
									'The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording resource is associated with. This will always refer to the parent leg of a two-leg call.',
								pattern: '^CA[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							conference_sid: {
								type: 'string',
								description:
									'The Conference SID that identifies the conference associated with the recording, if a conference recording.',
								pattern: '^CF[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							date_created: {
								type: 'string',
								description:
									'The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							date_updated: {
								type: 'string',
								description:
									'The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							start_time: {
								type: 'string',
								description:
									'The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.',
							},
							duration: {
								type: 'string',
								description: 'The length of the recording in seconds.',
							},
							sid: {
								type: 'string',
								description:
									'The unique string that that we created to identify the Recording resource.',
								pattern: '^RE[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							price: {
								type: 'string',
								description:
									'The one-time cost of creating the recording in the `price_unit` currency.',
							},
							price_unit: {
								type: 'string',
								description:
									'The currency used in the `price` property. Example: `USD`.',
							},
							status: {
								type: 'string',
								description:
									'The status of the recording. Can be: `processing`, `completed`, `absent` or `deleted`. For information about more detailed statuses on in-progress recordings, check out how to [Update a Recording Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).',
								default: '',
								enum: [
									'',
									'in-progress',
									'paused',
									'stopped',
									'processing',
									'completed',
									'absent',
									'deleted',
								],
							},
							channels: {
								type: 'number',
								description:
									'The number of channels in the recording resource. For information on specifying the number of channels in the downloaded recording file, check out [Fetch a Recording’s media file](https://www.twilio.com/docs/voice/api/recording#download-dual-channel-media-file).',
							},
							source: {
								type: 'string',
								description:
									'How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`, `RecordVerb`, `StartCallRecordingAPI`, and `StartConferenceRecordingAPI`.',
								default: '',
								enum: [
									'',
									'DialVerb',
									'Conference',
									'OutboundAPI',
									'Trunking',
									'RecordVerb',
									'StartCallRecordingAPI',
									'StartConferenceRecordingAPI',
								],
							},
							error_code: {
								type: 'number',
								description:
									'The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`.',
							},
							uri: {
								type: 'string',
								description:
									'The URI of the resource, relative to `https://api.twilio.com`.',
							},
							encryption_details: {
								description:
									'How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature.',
							},
							subresource_uris: {
								type: 'object',
								description:
									'A list of related resources identified by their relative URIs.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							media_url: {
								type: 'string',
								description:
									'The URL of the media file associated with this recording resource. When stored externally, this is the full URL location of the media file.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listRecordingTranscriptions',
		label: 'List recording transcriptions',
		description: 'Lists transcriptions of a recording.',
		context:
			'---\nname: listRecordingTranscriptions\ndescription: Lists transcriptions of a recording.\n---\n\nLists transcriptions of a recording.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nRead the next `PageToken` from `next_page_uri`. Pass that token, not the whole URI.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Recording transcription resource](https://www.twilio.com/docs/voice/api/recording-transcription).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				RecordingSid: {
					type: 'string',
					description: 'The SID of the Recording whose transcriptions to list.',
					pattern: '^RE[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: ['RecordingSid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				end: {
					type: 'number',
					description: 'The zero-based index of the last resource on this page.',
				},
				first_page_uri: {
					type: 'string',
					description: 'URI of the first page, relative to `https://api.twilio.com`.',
				},
				next_page_uri: {
					type: 'string',
					description:
						'URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.',
				},
				page: {
					type: 'number',
					description: 'The page index. Twilio documents this value as client state.',
				},
				page_size: {
					type: 'number',
					description: 'How many resources this page contains.',
				},
				previous_page_uri: {
					type: 'string',
					description:
						'URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.',
				},
				start: {
					type: 'number',
					description: 'The zero-based index of the first resource on this page.',
				},
				uri: {
					type: 'string',
					description: 'URI of this page, relative to `https://api.twilio.com`.',
				},
				transcriptions: {
					type: 'array',
					description: 'The Transcription resources on this page.',
					items: {
						type: 'object',
						description: 'One Transcription.',
						properties: {
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource.',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							api_version: {
								type: 'string',
								description: 'The API version used to create the transcription.',
							},
							date_created: {
								type: 'string',
								description:
									'The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							date_updated: {
								type: 'string',
								description:
									'The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							duration: {
								type: 'string',
								description: 'The duration of the transcribed audio in seconds.',
							},
							price: {
								type: 'string',
								description:
									'The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately.',
							},
							price_unit: {
								type: 'string',
								description:
									'The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).',
							},
							recording_sid: {
								type: 'string',
								description:
									'The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created.',
								pattern: '^RE[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							sid: {
								type: 'string',
								description:
									'The unique string that that we created to identify the Transcription resource.',
								pattern: '^TR[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							status: {
								type: 'string',
								description:
									'The status of the transcription. Can be: `in-progress`, `completed`, `failed`.',
								default: '',
								enum: ['', 'in-progress', 'completed', 'failed'],
							},
							transcription_text: {
								type: 'string',
								description: 'The text content of the transcription.',
							},
							type: { type: 'string', description: 'The transcription type.' },
							uri: {
								type: 'string',
								description:
									'The URI of the resource, relative to `https://api.twilio.com`.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'listTranscriptions',
		label: 'List transcriptions',
		description: 'Lists transcriptions on the account.',
		context:
			'---\nname: listTranscriptions\ndescription: Lists transcriptions on the account.\n---\n\nLists transcriptions on the account.\n\n`PageSize` maximum is 1000. Leave `Page` empty on the first request. Set `Page` only together with `PageToken`.\n\nRead the next `PageToken` from `next_page_uri`. Pass that token, not the whole URI.\n\nThe account SID comes from the connection, and the host follows the connection region. Programmable Voice is listed for US1, IE1, and AU1. Some Voice features are absent outside US1. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Transcription resource](https://www.twilio.com/docs/voice/api/recording-transcription).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				PageSize: {
					type: 'number',
					description:
						'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
					minimum: 1,
					maximum: 1000,
				},
				Page: {
					type: 'number',
					description:
						'The page index. Leave this empty on the first request. When you set it, also set Page token. Twilio documents this value as client state.',
					minimum: 0,
				},
				PageToken: {
					type: 'string',
					description:
						'The page token from the previous response. Set this when Page is set. Copy the token, not the whole next-page URI.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				end: {
					type: 'number',
					description: 'The zero-based index of the last resource on this page.',
				},
				first_page_uri: {
					type: 'string',
					description: 'URI of the first page, relative to `https://api.twilio.com`.',
				},
				next_page_uri: {
					type: 'string',
					description:
						'URI of the next page, relative to `https://api.twilio.com`. Null on the last page. The query contains the next PageToken.',
				},
				page: {
					type: 'number',
					description: 'The page index. Twilio documents this value as client state.',
				},
				page_size: {
					type: 'number',
					description: 'How many resources this page contains.',
				},
				previous_page_uri: {
					type: 'string',
					description:
						'URI of the previous page, relative to `https://api.twilio.com`. Null on the first page.',
				},
				start: {
					type: 'number',
					description: 'The zero-based index of the first resource on this page.',
				},
				uri: {
					type: 'string',
					description: 'URI of this page, relative to `https://api.twilio.com`.',
				},
				transcriptions: {
					type: 'array',
					description: 'The Transcription resources on this page.',
					items: {
						type: 'object',
						description: 'One Transcription.',
						properties: {
							account_sid: {
								type: 'string',
								description:
									'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource.',
								pattern: '^AC[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							api_version: {
								type: 'string',
								description: 'The API version used to create the transcription.',
							},
							date_created: {
								type: 'string',
								description:
									'The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							date_updated: {
								type: 'string',
								description:
									'The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.',
							},
							duration: {
								type: 'string',
								description: 'The duration of the transcribed audio in seconds.',
							},
							price: {
								type: 'string',
								description:
									'The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately.',
							},
							price_unit: {
								type: 'string',
								description:
									'The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).',
							},
							recording_sid: {
								type: 'string',
								description:
									'The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created.',
								pattern: '^RE[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							sid: {
								type: 'string',
								description:
									'The unique string that that we created to identify the Transcription resource.',
								pattern: '^TR[0-9a-fA-F]{32}$',
								minimum: 34,
								maximum: 34,
							},
							status: {
								type: 'string',
								description:
									'The status of the transcription. Can be: `in-progress`, `completed`, `failed`.',
								default: '',
								enum: ['', 'in-progress', 'completed', 'failed'],
							},
							transcription_text: {
								type: 'string',
								description: 'The text content of the transcription.',
							},
							type: {
								type: 'string',
								description: 'The transcription type. Can only be: `fast`.',
							},
							uri: {
								type: 'string',
								description:
									'The URI of the resource, relative to `https://api.twilio.com`.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'twilio',
		appVersion: 2,
		endpointName: 'updateExecution',
		label: 'Update an execution',
		description: 'Updates a Studio Flow execution status.',
		context:
			'---\nname: updateExecution\ndescription: Updates a Studio Flow execution status.\n---\n\nUpdates a Studio Flow execution status.\n\nThe request body is `application/x-www-form-urlencoded`. Omitted fields are left out of the form.\n\nStudio is listed for US1. IE1 lists Studio as Public Beta. Studio is absent from the AU1 product list. [Regional product and feature availability](https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability).\n\nReference: [Execution resource](https://www.twilio.com/docs/studio/rest-api/v2/execution).\n',
		accounts: { twilio: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				FlowSid: {
					type: 'string',
					description:
						'The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				Sid: {
					type: 'string',
					description:
						'The SID of the Execution resource to update. Pattern `FN` plus 32 hex characters.',
					pattern: '^FN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				Status: {
					type: 'string',
					description: 'The status of the Execution. Can be: `active` or `ended`.',
					enum: ['active', 'ended'],
				},
			},
			required: ['FlowSid', 'Sid', 'Status'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sid: {
					type: 'string',
					description:
						'The unique string that we created to identify the Execution resource.',
					pattern: '^FN[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				account_sid: {
					type: 'string',
					description:
						'The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.',
					pattern: '^AC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				flow_sid: {
					type: 'string',
					description: 'The SID of the Flow.',
					pattern: '^FW[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				contact_channel_address: {
					type: 'string',
					description:
						'The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.',
				},
				contact_sid: {
					type: 'string',
					description: 'The SID of the Contact.',
					pattern: '^FC[0-9a-fA-F]{32}$',
					minimum: 34,
					maximum: 34,
				},
				flow_version: {
					type: 'number',
					description: 'The Flow version number at the time of Execution creation.',
				},
				context: {
					description:
						"The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.",
				},
				status: {
					type: 'string',
					description: 'The status of the Execution. Can be: `active` or `ended`.',
					default: '',
					enum: ['', 'active', 'ended'],
				},
				date_created: {
					type: 'string',
					description:
						'The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
				},
				date_updated: {
					type: 'string',
					description:
						'The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
				},
				initiated_by: {
					type: 'string',
					description:
						'The SID or identifier that triggered this Execution. For example, a Call SID if triggered by an incoming call, a Message SID if triggered by an incoming message, a Request SID if triggered by a REST API request, and so on.',
				},
				url: { type: 'string', description: 'The absolute URL of the resource.' },
				links: {
					type: 'object',
					description: 'The URLs of nested resources.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
];
