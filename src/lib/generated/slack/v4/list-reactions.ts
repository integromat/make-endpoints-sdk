// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListReactionsInput = {
	/**
	 * Show reactions made by this user. Defaults to the authenticated user.
	 */
	user?: string;
	/**
	 * Whether to return the complete reaction list for each item, rather than a truncated preview.
	 */
	full?: boolean;
	/**
	 * Encoded team ID. Required when using an org-wide token.
	 */
	team_id?: string;
	/**
	 * Number of items to return per page.
	 */
	count?: number;
	/**
	 * Page number of results to return.
	 */
	page?: number;
	/**
	 * Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.
	 */
	cursor?: string;
};

export type ListReactionsOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * Items the user has reacted to.
	 *
	 * Items: A single reacted-to item.
	 */
	items?: {
		/**
		 * Kind of item this reaction is on.
		 */
		type?: '' | 'message' | 'file' | 'file_comment';
		/**
		 * ID of the channel the item belongs to, present for message items.
		 */
		channel?: string;
		/**
		 * The message object, present for message items, as raw JSON returned by Slack.
		 */
		message?: Record<string, JSONValue>;
		/**
		 * The file object, present for file and file-comment items, as raw JSON returned by Slack.
		 */
		file?: Record<string, JSONValue>;
		/**
		 * The file comment object, present for file-comment items, as raw JSON returned by Slack.
		 */
		comment?: Record<string, JSONValue>;
	}[];
	/**
	 * Pagination metadata for this response.
	 */
	response_metadata?: {
		/**
		 * Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.
		 */
		next_cursor?: string;
	};
};

/**
 * List reactions
 * Returns items a user has reacted to, along with the reactions on them.
 */
export async function listReactions(
	this: EndpointFunctionThis,
	payload: {
		input: ListReactionsInput;
		connectionId: number;
	},
): Promise<ListReactionsOutput> {
	const response = await this.endpointCaller<ListReactionsOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'listReactions',
		},
		payload,
	);
	return response.output;
}
