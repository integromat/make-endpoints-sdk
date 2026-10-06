// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFilesInput = {
	/**
	 * Filter to files shared in this channel.
	 */
	channel?: string;
	/**
	 * Filter to files uploaded by this user.
	 */
	user?: string;
	/**
	 * Only files created after this Unix timestamp (inclusive).
	 */
	ts_from?: string;
	/**
	 * Only files created before this Unix timestamp (inclusive).
	 */
	ts_to?: string;
	/**
	 * Comma-separated list of file types to filter by, for example `images,pdfs`. Defaults to all types.
	 */
	types?: string;
	/**
	 * Whether to show truncated info for files hidden due to workspace file limits.
	 */
	show_files_hidden_by_limit?: boolean;
	/**
	 * Encoded team ID to list files in. Required when using an org-wide token.
	 */
	team_id?: string;
	/**
	 * Number of files to return per page.
	 */
	count?: number;
	/**
	 * Page number of results to return.
	 */
	page?: number;
};

export type ListFilesOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * Files matching the given filters.
	 *
	 * Items: A single file.
	 */
	files?: {
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
		 * Slack's internal file type identifier, for example `pdf` or `png`.
		 */
		filetype?: string;
		/**
		 * ID of the user who uploaded the file.
		 */
		user?: string;
		/**
		 * File size in bytes.
		 */
		size?: number;
		/**
		 * Whether the file has been made public.
		 */
		is_public?: boolean;
		/**
		 * URL to view the file, valid only with a Slack session/token.
		 */
		url_private?: string;
		/**
		 * Permanent URL to the file in Slack.
		 */
		permalink?: string;
		/**
		 * Number of comments on the file.
		 */
		comments_count?: number;
		/**
		 * IDs of channels the file was shared to.
		 *
		 * Items: ID of a channel the file was shared to.
		 */
		channels?: string[];
	}[];
	/**
	 * Pagination metadata for this response.
	 */
	paging?: {
		/**
		 * Number of items returned per page.
		 */
		count?: number;
		/**
		 * Total number of files matching the filters.
		 */
		total?: number;
		/**
		 * Current page number.
		 */
		page?: number;
		/**
		 * Total number of pages available.
		 */
		pages?: number;
	};
};

/**
 * List files
 * Returns a list of files shared in the workspace.
 */
export async function listFiles(
	this: EndpointFunctionThis,
	payload: {
		input: ListFilesInput;
		connectionId: number;
	},
): Promise<ListFilesOutput> {
	const response = await this.endpointCaller<ListFilesOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'listFiles',
		},
		payload,
	);
	return response.output;
}
