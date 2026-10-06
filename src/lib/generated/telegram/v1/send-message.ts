// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendMessageInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Text of the message to send, 1-4096 characters after entities parsing.
	 */
	text: string;
	/**
	 * Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups only.
	 */
	message_thread_id?: number;
	/**
	 * Mode for parsing entities (bold, italic, links, etc.) in the message text. Leave empty for plain text.
	 */
	parse_mode?: '' | 'Markdown' | 'HTML';
	/**
	 * Send the message silently. iOS users will not receive a notification, Android users will receive a notification with no sound.
	 */
	disable_notification?: boolean;
	/**
	 * Disable link previews for links in this message.
	 */
	disable_web_page_preview?: boolean;
	/**
	 * If the message is a reply, the ID of the original message.
	 */
	reply_to_message_id?: number;
	/**
	 * A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.
	 */
	reply_markup?: string;
};

export type SendMessageOutput = {
	/**
	 * Unique identifier of the sent message inside this chat.
	 */
	message_id?: number;
	/**
	 * Unique identifier of the forum topic the message belongs to, if any.
	 */
	message_thread_id?: number;
	/**
	 * Date the message was sent, in Unix time.
	 */
	date?: number;
	/**
	 * The chat the message belongs to.
	 */
	chat?: {
		/**
		 * Unique identifier for this chat.
		 */
		id?: number;
		/**
		 * Type of chat: `private`, `group`, `supergroup`, or `channel`.
		 */
		type?: string;
		/**
		 * Username, for private chats, supergroups, and channels, if available.
		 */
		username?: string;
		/**
		 * First name of the other party in a private chat.
		 */
		first_name?: string;
		/**
		 * Last name of the other party in a private chat.
		 */
		last_name?: string;
		/**
		 * True if the supergroup chat is a forum (has topics enabled).
		 */
		is_forum?: boolean;
	};
	/**
	 * The bot that sent the message.
	 */
	from?: {
		/**
		 * Unique identifier for this user or bot.
		 */
		id?: number;
		/**
		 * True if this user is a bot.
		 */
		is_bot?: boolean;
		/**
		 * User's or bot's first name.
		 */
		first_name?: string;
		/**
		 * User's or bot's last name.
		 */
		last_name?: string;
		/**
		 * User's or bot's username.
		 */
		username?: string;
		/**
		 * IETF language tag of the user's language.
		 */
		language_code?: string;
	};
	/**
	 * The actual UTF-8 text of the message.
	 */
	text?: string;
	/**
	 * Special entities like usernames, URLs, or bot commands that appear in the text, automatically detected from Parse Mode.
	 *
	 * Items: A single special entity in the message text.
	 */
	entities?: {
		/**
		 * Type of the entity.
		 */
		type?: string;
		/**
		 * Offset in UTF-16 code units to the start of the entity.
		 */
		offset?: number;
		/**
		 * Length of the entity in UTF-16 code units.
		 */
		length?: number;
		/**
		 * For `text_link` entities only, the URL opened when the user taps the text.
		 */
		url?: string;
		/**
		 * For `custom_emoji` entities only, the unique identifier of the custom emoji.
		 */
		custom_emoji_id?: string;
	}[];
	/**
	 * Options used for link preview generation for the message, present if it is a text message and link preview options were set or changed. Automatically reflects the legacy Disable Link Previews flag.
	 */
	link_preview_options?: {
		/**
		 * True if the link preview is disabled.
		 */
		is_disabled?: boolean;
		/**
		 * URL used for the link preview. If empty, the first URL found in the message text was used.
		 */
		url?: string;
		/**
		 * True if the media in the link preview is shrunk.
		 */
		prefer_small_media?: boolean;
		/**
		 * True if the media in the link preview is enlarged.
		 */
		prefer_large_media?: boolean;
		/**
		 * True if the link preview is shown above the message text; otherwise it is shown below the text.
		 */
		show_above_text?: boolean;
	};
	/**
	 * Inline keyboard attached to the message, if any.
	 */
	reply_markup?: {
		/**
		 * Array of button rows, each an array of buttons.
		 */
		inline_keyboard?: {
			/**
			 * Label text on the button.
			 */
			text?: string;
			/**
			 * HTTP or `tg://` URL opened when the button is pressed.
			 */
			url?: string;
			/**
			 * Data sent in a callback query when the button is pressed.
			 */
			callback_data?: string;
			/**
			 * True if this is a Pay button.
			 */
			pay?: boolean;
		}[][];
	};
};

/**
 * Send a text message
 * Sends a text message to a Telegram chat.
 */
export async function sendMessage(
	this: EndpointFunctionThis,
	payload: {
		input: SendMessageInput;
		connectionId: number;
	},
): Promise<SendMessageOutput> {
	const response = await this.endpointCaller<SendMessageOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'sendMessage',
		},
		payload,
	);
	return response.output;
}
