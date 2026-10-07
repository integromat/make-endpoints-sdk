// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetChannelHistoryInput = {
	/**
	 * ID of the conversation to fetch history for.
	 */
	channel: string;
	/**
	 * Only messages after this Unix timestamp will be included in results. Defaults to the beginning of time.
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
	 * Maximum number of messages to return, up to 999.
	 */
	limit?: number;
	/**
	 * Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.
	 */
	cursor?: string;
};

export type GetChannelHistoryOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The channel's messages, most recent first.
	 *
	 * Items: A single message.
	 */
	messages?: {
		/**
		 * Object type, typically `message`.
		 */
		type?: string;
		/**
		 * Message subtype, if any.
		 */
		subtype?: string;
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
		 * ID of the bot that posted the message, if posted as a bot.
		 */
		bot_id?: string;
		/**
		 * ID of the team the message belongs to.
		 */
		team?: string;
		/**
		 * Timestamp of the parent message, if this message is part of a thread.
		 */
		thread_ts?: string;
		/**
		 * Number of replies in the thread, if this message started one.
		 */
		reply_count?: number;
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
	 * Whether more messages are available beyond this page.
	 */
	has_more?: boolean;
	/**
	 * Number of pinned messages in the channel.
	 */
	pin_count?: number;
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
 * Get channel history
 * Returns a chronological list of messages in a channel or conversation.
 */
export async function getChannelHistory(
	this: EndpointFunctionThis,
	payload: {
		input: GetChannelHistoryInput;
		connectionId: number;
	},
): Promise<GetChannelHistoryOutput> {
	const response = await this.endpointCaller<GetChannelHistoryOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'getChannelHistory',
		},
		payload,
	);
	return response.output;
}
