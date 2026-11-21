// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRecordingsInput = {
	/**
	 * Only include resources created on this date. Specify a date as `YYYY-MM-DD` in GMT.
	 */
	DateCreated?: string;
	/**
	 * Only include resources created before this date. Specify a date as `YYYY-MM-DD` in GMT. Sent as `DateCreated<`.
	 */
	DateCreatedBefore?: string;
	/**
	 * Only include resources created after this date. Specify a date as `YYYY-MM-DD` in GMT. Sent as `DateCreated>`.
	 */
	DateCreatedAfter?: string;
	/**
	 * The SID of the Call associated with the recordings to read.
	 */
	CallSid?: string;
	/**
	 * The Conference SID that identifies the conference associated with the recording to read.
	 */
	ConferenceSid?: string;
	/**
	 * Whether to retrieve soft-deleted recordings. Recording metadata is kept for 40 days after deletion.
	 */
	IncludeSoftDeleted?: boolean;
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

export type ListRecordingsOutput = {
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
	 * The Recording resources on this page.
	 *
	 * Items: One Recording.
	 */
	recordings?: {
		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource.
		 */
		account_sid?: string;
		/**
		 * The API version used during the recording.
		 */
		api_version?: string;
		/**
		 * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording resource is associated with. This will always refer to the parent leg of a two-leg call.
		 */
		call_sid?: string;
		/**
		 * The Conference SID that identifies the conference associated with the recording, if a conference recording.
		 */
		conference_sid?: string;
		/**
		 * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
		 */
		date_created?: string;
		/**
		 * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
		 */
		date_updated?: string;
		/**
		 * The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
		 */
		start_time?: string;
		/**
		 * The length of the recording in seconds.
		 */
		duration?: string;
		/**
		 * The unique string that that we created to identify the Recording resource.
		 */
		sid?: string;
		/**
		 * The one-time cost of creating the recording in the `price_unit` currency.
		 */
		price?: string;
		/**
		 * The currency used in the `price` property. Example: `USD`.
		 */
		price_unit?: string;
		/**
		 * The status of the recording. Can be: `processing`, `completed`, `absent` or `deleted`. For information about more detailed statuses on in-progress recordings, check out how to [Update a Recording Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
		 */
		status?:
			| ''
			| 'in-progress'
			| 'paused'
			| 'stopped'
			| 'processing'
			| 'completed'
			| 'absent'
			| 'deleted';
		/**
		 * The number of channels in the recording resource. For information on specifying the number of channels in the downloaded recording file, check out [Fetch a Recording’s media file](https://www.twilio.com/docs/voice/api/recording#download-dual-channel-media-file).
		 */
		channels?: number;
		/**
		 * How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`, `RecordVerb`, `StartCallRecordingAPI`, and `StartConferenceRecordingAPI`.
		 */
		source?:
			| ''
			| 'DialVerb'
			| 'Conference'
			| 'OutboundAPI'
			| 'Trunking'
			| 'RecordVerb'
			| 'StartCallRecordingAPI'
			| 'StartConferenceRecordingAPI';
		/**
		 * The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`.
		 */
		error_code?: number;
		/**
		 * The URI of the resource, relative to `https://api.twilio.com`.
		 */
		uri?: string;
		/**
		 * How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature.
		 */
		encryption_details?: Record<string, JSONValue>;
		/**
		 * A list of related resources identified by their relative URIs.
		 */
		subresource_uris?: Record<string, JSONValue>;
		/**
		 * The URL of the media file associated with this recording resource. When stored externally, this is the full URL location of the media file.
		 */
		media_url?: string;
	}[];
};

/**
 * List recordings
 * Lists call recordings.
 */
export async function listRecordings(
	this: EndpointFunctionThis,
	payload: {
		input: ListRecordingsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListRecordingsOutput> {
	const response = await this.endpointCaller<ListRecordingsOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'listRecordings',
		},
		payload,
	);
	return response.output;
}
