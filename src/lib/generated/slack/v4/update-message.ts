// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateMessageInput = {
	/**
	 * Channel containing the message to update. For direct messages use the DM's channel ID (starts with `D`).
	 */
	channel: string;
	/**
	 * Timestamp of the message to update.
	 */
	ts: string;
	/**
	 * New plain-text message content.
	 */
	text?: string;
	/**
	 * Raw [Block Kit](https://api.slack.com/block-kit) blocks array, as JSON, replacing the message layout.
	 */
	blocks?: Record<string, JSONValue>;
	/**
	 * Legacy structured attachments array, as JSON, replacing the message's attachments.
	 */
	attachments?: Record<string, JSONValue>;
	/**
	 * Pre-unfurled structured attachments array, as JSON, to attach to the message.
	 */
	unfurled_attachments?: Record<string, JSONValue>;
	/**
	 * New message content formatted in Markdown. Limited to 12,000 characters.
	 */
	markdown_text?: string;
	/**
	 * JSON object with `event_type` and `event_payload` fields, used to attach arbitrary structured data to the message.
	 */
	metadata?: Record<string, JSONValue>;
	/**
	 * Whether to find and link channel names and usernames in `text`.
	 */
	link_names?: boolean;
	/**
	 * Changes how the updated message is treated for the purpose of linkifying channels, usernames, and URLs.
	 */
	parse?: '' | 'none' | 'full';
	/**
	 * Whether the update to a threaded reply should also be broadcast to the channel.
	 */
	reply_broadcast?: boolean;
	/**
	 * IDs of files to attach to the updated message.
	 *
	 * Items: ID of a file to attach.
	 */
	file_ids?: string[];
};

export type UpdateMessageOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * Channel containing the updated message.
	 */
	channel?: string;
	/**
	 * Timestamp of the updated message.
	 */
	ts?: string;
	/**
	 * Updated plain-text message content.
	 */
	text?: string;
	/**
	 * The updated message object, as returned by Slack.
	 */
	message?: {
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
		 * Raw Block Kit blocks of the message, as returned by Slack.
		 */
		blocks?: Record<string, JSONValue>;
		/**
		 * Legacy structured attachments of the message, as returned by Slack.
		 */
		attachments?: Record<string, JSONValue>;
	};
};

/**
 * Update a message
 * Updates the content of an existing message.
 */
export async function updateMessage(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateMessageInput;
		connectionId: number;
	},
): Promise<UpdateMessageOutput> {
	const response = await this.endpointCaller<UpdateMessageOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'updateMessage',
		},
		payload,
	);
	return response.output;
}
