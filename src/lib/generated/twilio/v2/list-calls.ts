// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListCallsInput = {
	/**
	 * Only show calls made to this phone number, SIP address, Client identifier or SIM SID.
	 */
	To?: string;
	/**
	 * Only include calls from this phone number, SIP address, Client identifier or SIM SID.
	 */
	From?: string;
	/**
	 * Only include calls spawned by calls with this SID.
	 */
	ParentCallSid?: string;
	/**
	 * The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.
	 */
	Status?:
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
	 * Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started on this date.
	 */
	StartTime?: string;
	/**
	 * Only include calls that started before this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started before this date. Sent as `StartTime<`.
	 */
	StartTimeBefore?: string;
	/**
	 * Only include calls that started on or after this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started on or after this date. Sent as `StartTime>`.
	 */
	StartTimeAfter?: string;
	/**
	 * Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended on this date.
	 */
	EndTime?: string;
	/**
	 * Only include calls that ended before this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended before this date. Sent as `EndTime<`.
	 */
	EndTimeBefore?: string;
	/**
	 * Only include calls that ended on or after this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended on or after this date. Sent as `EndTime>`.
	 */
	EndTimeAfter?: string;
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

export type ListCallsOutput = {
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
	 * The Call resources on this page.
	 *
	 * Items: One Call resource on this page.
	 */
	calls?: {
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
	}[];
};

/**
 * List calls
 * Lists calls on the Twilio account.
 */
export async function listCalls(
	this: EndpointFunctionThis,
	payload: {
		input: ListCallsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListCallsOutput> {
	const response = await this.endpointCaller<ListCallsOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'listCalls',
		},
		payload,
	);
	return response.output;
}
