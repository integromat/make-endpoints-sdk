// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendAudioInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.
	 */
	message_thread_id?: number;
	/**
	 * Audio caption, 0-1024 characters after entities parsing.
	 */
	caption?: string;
	/**
	 * Select if to send by HTTP URL or by file ID.
	 */
	sendType: 'send_byurl' | 'send_byid';
	/**
	 * Mode for parsing entities (bold, italic, links, etc.) in the caption. Leave empty for plain text.
	 */
	parse_mode?: '' | 'Markdown' | 'MarkdownV2' | 'HTML';
	/**
	 * Send the message silently. Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;
	/**
	 * Duration of the audio in seconds.
	 */
	duration?: number;
	/**
	 * Performer of the audio, as it will appear in the Telegram client's music player.
	 */
	performer?: string;
	/**
	 * A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.
	 */
	reply_markup?: string;
};

export type SendAudioOutput = {
	/**
	 * Unique identifier of the sent message inside this chat.
	 */
	message_id?: number;
	/**
	 * Unique identifier of the forum topic the message belongs to, if any.
	 */
	message_thread_id?: number;
	/**
	 * Unique identifier of the business connection the message was sent from, if any.
	 */
	business_connection_id?: string;
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
	 * Information about the sent audio file.
	 */
	audio?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
		 */
		file_unique_id?: string;
		/**
		 * Duration of the audio in seconds as defined by the sender.
		 */
		duration?: number;
		/**
		 * Performer of the audio, as defined by the sender or audio tags.
		 */
		performer?: string;
		/**
		 * Original filename as defined by the sender.
		 */
		file_name?: string;
		/**
		 * MIME type of the file as defined by the sender.
		 */
		mime_type?: string;
		/**
		 * File size in bytes.
		 */
		file_size?: number;
		/**
		 * Thumbnail of the album cover to which the music file belongs.
		 */
		thumbnail?: {
			/**
			 * Identifier for this file.
			 */
			file_id?: string;
			/**
			 * Unique identifier for this file.
			 */
			file_unique_id?: string;
			/**
			 * Thumbnail width.
			 */
			width?: number;
			/**
			 * Thumbnail height.
			 */
			height?: number;
			/**
			 * File size in bytes.
			 */
			file_size?: number;
		};
	};
	/**
	 * Caption for the audio, if any.
	 */
	caption?: string;
	/**
	 * Special entities like usernames, URLs, or bot commands that appear in the caption.
	 *
	 * Items: A single special entity in the caption.
	 */
	caption_entities?: {
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
	 * True if the message can't be forwarded.
	 */
	has_protected_content?: boolean;
	/**
	 * Unique identifier of the message effect added to the message, if any.
	 */
	effect_id?: string;
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
 * Send an audio
 * Sends an audio file to a Telegram chat, displayed in the music player.
 */
export async function sendAudio(
	this: EndpointFunctionThis,
	payload: {
		input: SendAudioInput;
		connectionId: number;
	},
): Promise<SendAudioOutput> {
	const response = await this.endpointCaller<SendAudioOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'sendAudio',
		},
		payload,
	);
	return response.output;
}
