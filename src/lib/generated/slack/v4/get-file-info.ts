// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetFileInfoInput = {
	/**
	 * ID of the file to retrieve, for example `F2147483862`.
	 */
	file: string;
	/**
	 * Number of comments to return per page.
	 */
	count?: number;
	/**
	 * Page number of comments to return.
	 */
	page?: number;
	/**
	 * Cursor-based pagination token for comments, as an alternative to `page`.
	 */
	cursor?: string;
	/**
	 * Maximum number of comment items to return when using cursor-based pagination.
	 */
	limit?: number;
};

export type GetFileInfoOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The requested file object.
	 */
	file?: {
		/**
		 * ID of the file.
		 */
		id?: string;
		/**
		 * Unix timestamp of when the file was created.
		 */
		created?: number;
		/**
		 * File name.
		 */
		name?: string;
		/**
		 * MIME type of the file.
		 */
		mimetype?: string;
		/**
		 * Slack's internal file type identifier.
		 */
		filetype?: string;
		/**
		 * Human-readable file type name.
		 */
		pretty_type?: string;
		/**
		 * ID of the user who uploaded the file.
		 */
		user?: string;
		/**
		 * Whether the file can be edited in Slack (for example, a Slack-native snippet or post).
		 */
		editable?: boolean;
		/**
		 * File size in bytes.
		 */
		size?: number;
		/**
		 * Whether the file is hosted externally rather than by Slack.
		 */
		is_external?: boolean;
		/**
		 * Type of the external file source, when `is_external` is true.
		 */
		external_type?: string;
		/**
		 * Whether the file has been made public.
		 */
		is_public?: boolean;
		/**
		 * Whether the file's public URL has been shared.
		 */
		public_url_shared?: boolean;
		/**
		 * Display username associated with the file, if posted by a bot.
		 */
		username?: string;
		/**
		 * URL to view the file, valid only with a Slack session/token.
		 */
		url_private?: string;
		/**
		 * URL to download the raw file content, valid only with a Slack session/token.
		 */
		url_private_download?: string;
		/**
		 * Permanent URL to the file in Slack.
		 */
		permalink?: string;
		/**
		 * Public permanent URL to the file, present only when the file has been made public.
		 */
		permalink_public?: string;
		/**
		 * Number of comments on the file.
		 */
		comments_count?: number;
		/**
		 * Whether the calling user has starred this file.
		 */
		is_starred?: boolean;
		/**
		 * IDs of channels the file was shared to.
		 *
		 * Items: ID of a channel the file was shared to.
		 */
		channels?: string[];
		/**
		 * IDs of private channels the file was shared to.
		 *
		 * Items: ID of a private channel the file was shared to.
		 */
		groups?: string[];
		/**
		 * IDs of direct message conversations the file was shared to.
		 *
		 * Items: ID of a direct message conversation the file was shared to.
		 */
		ims?: string[];
		/**
		 * Screen-reader description of the file, for images.
		 */
		alt_txt?: string;
	};
	/**
	 * Comments on the file, as raw JSON returned by Slack.
	 *
	 * Items: A single comment on the file.
	 */
	comments?: Record<string, JSONValue>[];
	/**
	 * Pagination metadata for the comments list.
	 */
	response_metadata?: {
		/**
		 * Cursor value to pass as `cursor` to fetch the next page of comments.
		 */
		next_cursor?: string;
	};
};

/**
 * Get a file
 * Returns information about a file, including its comments.
 */
export async function getFileInfo(
	this: EndpointFunctionThis,
	payload: {
		input: GetFileInfoInput;
		connectionId: number;
	},
): Promise<GetFileInfoOutput> {
	const response = await this.endpointCaller<GetFileInfoOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'getFileInfo',
		},
		payload,
	);
	return response.output;
}
