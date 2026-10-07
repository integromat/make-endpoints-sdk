// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type EditMessageMediaInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Identifier of the message to edit.
	 */
	message_id: number;
	/**
	 * Type of the new media to attach to the message.
	 */
	type: 'photo' | 'video' | 'animation' | 'audio' | 'document';
	/**
	 * New caption of the media, 0-1024 characters after entities parsing.
	 */
	caption?: string;
	/**
	 * Pass a file ID of a file that already exists on Telegram servers (recommended), or an HTTP URL for Telegram to get the file from the Internet. See [Sending files](https://core.telegram.org/bots/api#sending-files).
	 */
	send_type: 'send_byid' | 'send_byurl';
	/**
	 * Mode for parsing entities (bold, italic, links, etc.) in the new caption. Leave empty for plain text.
	 */
	parse_mode?: '' | 'Markdown' | 'HTML';
	/**
	 * A JSON-serialized object for a new inline keyboard. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.
	 */
	reply_markup?: string;
};

export type EditMessageMediaOutput = {
	/**
	 * Unique identifier of the edited message inside this chat.
	 */
	message_id?: number;
	/**
	 * Date the message was originally sent, in Unix time.
	 */
	date?: number;
	/**
	 * Date the message was last edited, in Unix time.
	 */
	edit_date?: number;
	/**
	 * The chat the edited message belongs to.
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
	};
	/**
	 * The bot that originally sent the message.
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
		 * User's or bot's username.
		 */
		username?: string;
	};
	/**
	 * The new caption of the media.
	 */
	caption?: string;
	/**
	 * Special entities like usernames, URLs, or bot commands that appear in the caption, automatically detected from Parse Mode.
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
	}[];
	/**
	 * Present when Media Type is `photo`: the available sizes of the new photo.
	 *
	 * Items: A single available size of the photo.
	 */
	photo?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
		 */
		file_unique_id?: string;
		/**
		 * Photo width.
		 */
		width?: number;
		/**
		 * Photo height.
		 */
		height?: number;
		/**
		 * File size in bytes.
		 */
		file_size?: number;
	}[];
	/**
	 * Present when Media Type is `video`: information about the new video.
	 */
	video?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
		 */
		file_unique_id?: string;
		/**
		 * Video width as defined by the sender.
		 */
		width?: number;
		/**
		 * Video height as defined by the sender.
		 */
		height?: number;
		/**
		 * Duration of the video in seconds as defined by the sender.
		 */
		duration?: number;
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
	};
	/**
	 * Present when Media Type is `animation`: information about the new animation.
	 */
	animation?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
		 */
		file_unique_id?: string;
		/**
		 * Video width as defined by the sender.
		 */
		width?: number;
		/**
		 * Video height as defined by the sender.
		 */
		height?: number;
		/**
		 * Duration of the video in seconds as defined by the sender.
		 */
		duration?: number;
		/**
		 * Original animation filename as defined by the sender.
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
	};
	/**
	 * Present when Media Type is `audio`: information about the new audio file.
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
	};
	/**
	 * Present when Media Type is `document`: information about the new document.
	 */
	document?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
		 */
		file_unique_id?: string;
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
	};
	/**
	 * True if the message can't be forwarded (a property of the original message, unaffected by this edit).
	 */
	has_protected_content?: boolean;
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
 * Edit message media
 * Edits the media content of a message.
 */
export async function editMessageMedia(
	this: EndpointFunctionThis,
	payload: {
		input: EditMessageMediaInput;
		connectionId: number;
	},
): Promise<EditMessageMediaOutput> {
	const response = await this.endpointCaller<EditMessageMediaOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'editMessageMedia',
		},
		payload,
	);
	return response.output;
}
