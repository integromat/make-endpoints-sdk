// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRepliesInput = {
	/**
	 * ID of the conversation to fetch the thread from.
	 */
	channel: string;
	/**
	 * Timestamp of either the thread's parent message or a message in the thread.
	 */
	ts: string;
	/**
	 * Only messages after this Unix timestamp will be included in results.
	 */
	oldest?: string;
	/**
	 * Only messages before this Unix timestamp will be included in results. Defaults to the current time.
	 */
	latest?: string;
	/**
	 * Whether to include messages with the `oldest` or `latest` timestamps in results.
	 */
	inclusive?: boolean;
	/**
	 * Whether to return all metadata associated with each message.
	 */
	include_all_metadata?: boolean;
	/**
	 * Maximum number of items to return.
	 */
	limit?: number;
	/**
	 * Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.
	 */
	cursor?: string;
};

export type ListRepliesOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The thread's parent message followed by its replies.
	 *
	 * Items: A single message in the thread.
	 */
	messages?: {
		/**
		 * Object type, typically `message`.
		 */
		type?: string;
		/**
		 * Plain-text content of the message.
		 */
		text?: string;
		/**
		 * Timestamp ID of the message.
		 */
		ts?: string;
		/**
		 * ID of the user who authored the message.
		 */
		user?: string;
		/**
		 * ID of the team the message belongs to.
		 */
		team?: string;
		/**
		 * Timestamp of the thread's parent message.
		 */
		thread_ts?: string;
		/**
		 * Number of replies in the thread. Present only on the parent message.
		 */
		reply_count?: number;
		/**
		 * ID of the user who authored the thread's parent message.
		 */
		parent_user_id?: string;
		/**
		 * Raw Block Kit blocks of the message, as returned by Slack.
		 */
		blocks?: Record<string, JSONValue>;
		/**
		 * Legacy structured attachments of the message, as returned by Slack.
		 */
		attachments?: Record<string, JSONValue>;
	}[];
	/**
	 * Whether more replies are available beyond this page.
	 */
	has_more?: boolean;
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
 * List thread replies
 * Returns all replies in a message thread.
 */
export async function listReplies(
	this: EndpointFunctionThis,
	payload: {
		input: ListRepliesInput;
		connectionId: number;
	},
): Promise<ListRepliesOutput> {
	const response = await this.endpointCaller<ListRepliesOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'listReplies',
		},
		payload,
	);
	return response.output;
}
