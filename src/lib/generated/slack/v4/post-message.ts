// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type PostMessageInput = {
	/**
	 * ID of the channel, private group, or IM channel to send the message to.
	 */
	channel: string;
	/**
	 * Plain-text message content. Required unless `blocks` or `attachments` fully describe the message. Also used as a fallback for surfaces that can't render Block Kit.
	 */
	text?: string;
	/**
	 * Raw [Block Kit](https://api.slack.com/block-kit) blocks array, as JSON, describing the message layout.
	 */
	blocks?: Record<string, JSONValue>;
	/**
	 * Legacy structured attachments array, as JSON. Prefer `blocks` for new messages.
	 */
	attachments?: Record<string, JSONValue>;
	/**
	 * Message content formatted in Markdown. Limited to 12,000 characters. Takes precedence over `text` when both are provided.
	 */
	markdown_text?: string;
	/**
	 * The `ts` value of another message in the channel to reply to, making this message part of that thread.
	 */
	thread_ts?: string;
	/**
	 * Whether a threaded reply should also be shown in the channel, not just in the thread. Only applies when `thread_ts` is set.
	 */
	reply_broadcast?: boolean;
	/**
	 * Whether to enable unfurling of primarily text-based content.
	 */
	unfurl_links?: boolean;
	/**
	 * Whether to enable unfurling of media content.
	 */
	unfurl_media?: boolean;
	/**
	 * Whether to unfurl links to Slack apps that support link unfurling.
	 */
	unfurl_app_links?: boolean;
	/**
	 * Whether Slack markup (mrkdwn) parsing is enabled in `text`. Enabled by default.
	 */
	mrkdwn?: boolean;
	/**
	 * Changes how messages are treated for the purpose of linkifying channels, usernames, and URLs.
	 */
	parse?: '' | 'none' | 'full';
	/**
	 * Whether to find and link channel names and usernames in `text`.
	 */
	link_names?: boolean;
	/**
	 * Custom username to display for this message. Requires the `chat:write.customize` scope and the "Slack (bot)" connection — has no effect with the user connection.
	 */
	username?: string;
	/**
	 * URL of an image to use as the icon for this message. Requires the `chat:write.customize` scope and the "Slack (bot)" connection — has no effect with the user connection.
	 */
	icon_url?: string;
	/**
	 * Emoji to use as the icon for this message, for example `:chart_with_upwards_trend:`. Requires the `chat:write.customize` scope and the "Slack (bot)" connection — has no effect with the user connection.
	 */
	icon_emoji?: string;
	/**
	 * JSON object with `event_type` and `event_payload` fields, used to attach arbitrary structured data to the message.
	 */
	metadata?: Record<string, JSONValue>;
	/**
	 * Timestamp of a draft's last update at the time of this call, used to keep the draft in sync with the server. Only relevant when this call is sending a draft.
	 */
	current_draft_last_updated_ts?: string;
};

export type PostMessageOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * ID of the channel the message was posted to.
	 */
	channel?: string;
	/**
	 * Timestamp ID of the posted message.
	 */
	ts?: string;
	/**
	 * The posted message object, as returned by Slack.
	 */
	message?: {
		/**
		 * Object type, typically `message`.
		 */
		type?: string;
		/**
		 * Message subtype, if any (for example `bot_message`).
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
		 * ID of the user who authored the message, if posted as a user.
		 */
		user?: string;
		/**
		 * ID of the bot that posted the message, if posted as a bot.
		 */
		bot_id?: string;
		/**
		 * Custom display username for the message, if `username` was set on the request.
		 */
		username?: string;
		/**
		 * ID of the team the message belongs to.
		 */
		team?: string;
		/**
		 * Timestamp of the parent message, if this message is part of a thread.
		 */
		thread_ts?: string;
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
 * Post a message
 * Sends a message to a channel, private group, or direct message.
 */
export async function postMessage(
	this: EndpointFunctionThis,
	payload: {
		input: PostMessageInput;
		connectionId: number;
	},
): Promise<PostMessageOutput> {
	const response = await this.endpointCaller<PostMessageOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'postMessage',
		},
		payload,
	);
	return response.output;
}
