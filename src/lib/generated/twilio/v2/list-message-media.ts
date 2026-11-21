// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListMessageMediaInput = {
	/**
	 * The SID of the Message resource associated with the Media resource.
	 */
	MessageSid: string;
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

export type ListMessageMediaOutput = {
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
	 * The Media resources on this page.
	 *
	 * Items: One Media.
	 */
	media_list?: {
		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with this Media resource.
		 */
		account_sid?: string;
		/**
		 * The default [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) of the media, for example `image/jpeg`, `image/png`, or `image/gif`.
		 */
		content_type?: string;
		/**
		 * The date and time in GMT when this Media resource was created, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
		 */
		date_created?: string;
		/**
		 * The date and time in GMT when this Media resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
		 */
		date_updated?: string;
		/**
		 * The SID of the Message resource that is associated with this Media resource.
		 */
		parent_sid?: string;
		/**
		 * The unique string that identifies this Media resource.
		 */
		sid?: string;
		/**
		 * The URI of this Media resource, relative to `https://api.twilio.com`.
		 */
		uri?: string;
	}[];
};

/**
 * List message media
 * Lists media on a message.
 */
export async function listMessageMedia(
	this: EndpointFunctionThis,
	payload: {
		input: ListMessageMediaInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListMessageMediaOutput> {
	const response = await this.endpointCaller<ListMessageMediaOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'listMessageMedia',
		},
		payload,
	);
	return response.output;
}
