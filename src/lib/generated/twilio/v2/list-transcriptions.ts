// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListTranscriptionsInput = {
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

export type ListTranscriptionsOutput = {
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
	 * The Transcription resources on this page.
	 *
	 * Items: One Transcription.
	 */
	transcriptions?: {
		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource.
		 */
		account_sid?: string;
		/**
		 * The API version used to create the transcription.
		 */
		api_version?: string;
		/**
		 * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
		 */
		date_created?: string;
		/**
		 * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
		 */
		date_updated?: string;
		/**
		 * The duration of the transcribed audio in seconds.
		 */
		duration?: string;
		/**
		 * The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately.
		 */
		price?: string;
		/**
		 * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
		 */
		price_unit?: string;
		/**
		 * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created.
		 */
		recording_sid?: string;
		/**
		 * The unique string that that we created to identify the Transcription resource.
		 */
		sid?: string;
		/**
		 * The status of the transcription. Can be: `in-progress`, `completed`, `failed`.
		 */
		status?: '' | 'in-progress' | 'completed' | 'failed';
		/**
		 * The text content of the transcription.
		 */
		transcription_text?: string;
		/**
		 * The transcription type. Can only be: `fast`.
		 */
		type?: string;
		/**
		 * The URI of the resource, relative to `https://api.twilio.com`.
		 */
		uri?: string;
	}[];
};

/**
 * List transcriptions
 * Lists transcriptions on the account.
 */
export async function listTranscriptions(
	this: EndpointFunctionThis,
	payload: {
		input: ListTranscriptionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListTranscriptionsOutput> {
	const response = await this.endpointCaller<ListTranscriptionsOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'listTranscriptions',
		},
		payload,
	);
	return response.output;
}
