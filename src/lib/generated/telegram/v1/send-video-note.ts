// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendVideoNoteInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.
	 */
	chat_id: string;
	/**
	 * Unique identifier for the target message thread (topic) of the forum. For forum supergroups only.
	 */
	message_thread_id?: number;
	/**
	 * File ID of a video note that already exists on Telegram servers. Sending by HTTP URL is not supported for this method, and this endpoint does not support raw file uploads.
	 */
	video_note: string;
	/**
	 * Send the message silently. iOS users will not receive a notification; Android users will receive a notification with no sound.
	 */
	disable_notification?: boolean;
	/**
	 * Video width and height (diameter of the video message).
	 */
	length?: number;
	/**
	 * Duration of the sent video in seconds.
	 */
	duration?: number;
	/**
	 * If the message is a reply, the ID of the original message.
	 */
	reply_to_message_id?: number;
	/**
	 * A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.
	 */
	reply_markup?: string;
};

export type SendVideoNoteOutput = {
	/**
	 * Unique identifier of the sent message inside this chat.
	 */
	message_id?: number;
	/**
	 * Unique identifier of the forum topic the message belongs to, if any.
	 */
	message_thread_id?: number;
	/**
	 * True if the message was sent to a topic in a forum supergroup or a private chat with the bot.
	 */
	is_topic_message?: boolean;
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
	 * Information about the sent video note.
	 */
	video_note?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots. Cannot be used to download or reuse the file.
		 */
		file_unique_id?: string;
		/**
		 * Video width and height (diameter of the video message) as defined by the sender.
		 */
		length?: number;
		/**
		 * Duration of the video in seconds as defined by the sender.
		 */
		duration?: number;
		/**
		 * Video thumbnail.
		 */
		thumbnail?: {
			/**
			 * Identifier for this file, usable to download or reuse the file.
			 */
			file_id?: string;
			/**
			 * Unique identifier for this file, consistent over time and across bots. Cannot be used to download or reuse the file.
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
		/**
		 * File size in bytes.
		 */
		file_size?: number;
	};
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
 * Send a video note
 * Sends a rounded square video message to a Telegram chat.
 */
export async function sendVideoNote(
	this: EndpointFunctionThis,
	payload: {
		input: SendVideoNoteInput;
		connectionId: number;
	},
): Promise<SendVideoNoteOutput> {
	const response = await this.endpointCaller<SendVideoNoteOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'sendVideoNote',
		},
		payload,
	);
	return response.output;
}
