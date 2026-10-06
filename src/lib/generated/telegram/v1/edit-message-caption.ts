// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type EditMessageCaptionInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Identifier of the message to edit.
	 */
	message_id: number;
	/**
	 * New caption of the message, 0-1024 characters after entities parsing.
	 */
	caption?: string;
	/**
	 * Mode for parsing entities (bold, italic, links, etc.) in the message caption. Leave empty for plain text.
	 */
	parse_mode?: '' | 'Markdown' | 'HTML';
	/**
	 * A JSON-serialized object for an inline keyboard. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.
	 */
	reply_markup?: string;
};

export type EditMessageCaptionOutput = {
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
	 * The new caption of the message.
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
	 * True if the caption must be shown above the message media. A pre-existing property of the message, unaffected by this edit.
	 */
	show_caption_above_media?: boolean;
	/**
	 * Present if the edited message is an animation: information about the animation.
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
		 * Animation thumbnail as defined by the sender.
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
	 * Present if the edited message is an audio file: information about the file.
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
		 * Performer of the audio as defined by the sender or by audio tags.
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
	 * Present if the edited message is a general file: information about the file.
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
		 * Document thumbnail as defined by the sender.
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
	 * Present if the edited message is a photo: the available sizes of the photo.
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
	 * Present if the edited message is a video: information about the video.
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
		 * Video thumbnail.
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
		/**
		 * Available sizes of the cover of the video in the message.
		 *
		 * Items: A single available size of the video cover.
		 */
		cover?: {
			/**
			 * Identifier for this file.
			 */
			file_id?: string;
			/**
			 * Unique identifier for this file.
			 */
			file_unique_id?: string;
			/**
			 * Cover width.
			 */
			width?: number;
			/**
			 * Cover height.
			 */
			height?: number;
			/**
			 * File size in bytes.
			 */
			file_size?: number;
		}[];
		/**
		 * Timestamp in seconds from which the video will play in the message.
		 */
		start_timestamp?: number;
		/**
		 * List of available qualities of the video.
		 *
		 * Items: A single available quality of the video.
		 */
		qualities?: {
			/**
			 * Identifier for this file.
			 */
			file_id?: string;
			/**
			 * Unique identifier for this file.
			 */
			file_unique_id?: string;
			/**
			 * Video width.
			 */
			width?: number;
			/**
			 * Video height.
			 */
			height?: number;
			/**
			 * Codec used to encode the video, for example `h264`, `h265`, or `av01`.
			 */
			codec?: string;
			/**
			 * File size in bytes.
			 */
			file_size?: number;
		}[];
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
	 * Present if the edited message is a voice note: information about the file.
	 */
	voice?: {
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
 * Edit message caption
 * Edits the caption of a message.
 */
export async function editMessageCaption(
	this: EndpointFunctionThis,
	payload: {
		input: EditMessageCaptionInput;
		connectionId: number;
	},
): Promise<EditMessageCaptionOutput> {
	const response = await this.endpointCaller<EditMessageCaptionOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'editMessageCaption',
		},
		payload,
	);
	return response.output;
}
