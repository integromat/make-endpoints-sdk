// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ForwardMessageInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel/supergroup in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Unique identifier for the chat where the original message was sent, or username of the source channel in the format `@username`.
	 */
	from_chat_id: string;
	/**
	 * Message identifier in the chat specified in From Chat ID.
	 */
	message_id: number;
	/**
	 * Send the message silently. iOS users will not receive a notification, Android users will receive a notification with no sound.
	 */
	disable_notification?: boolean;
};

export type ForwardMessageOutput = {
	/**
	 * Unique identifier of the forwarded message inside the target chat.
	 */
	message_id?: number;
	/**
	 * Date the forwarded message was sent, in Unix time.
	 */
	date?: number;
	/**
	 * The chat the forwarded message belongs to.
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
	};
	/**
	 * The bot that forwarded the message.
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
	 * Information about the original sender of the forwarded message.
	 */
	forward_origin?: {
		/**
		 * Type of the message origin: `user`, `hidden_user`, `chat`, or `channel`.
		 */
		type?: string;
		/**
		 * Date the message was sent originally, in Unix time.
		 */
		date?: number;
		/**
		 * For origin type `user`: the user that sent the message originally.
		 */
		sender_user?: {
			/**
			 * Unique identifier for this user.
			 */
			id?: number;
			/**
			 * User's first name.
			 */
			first_name?: string;
			/**
			 * User's username.
			 */
			username?: string;
		};
		/**
		 * For origin type `hidden_user`: name of the user that sent the message originally.
		 */
		sender_user_name?: string;
		/**
		 * For origin type `chat`: the chat that sent the message originally.
		 */
		sender_chat?: {
			/**
			 * Unique identifier for this chat.
			 */
			id?: number;
			/**
			 * Type of chat.
			 */
			type?: string;
		};
		/**
		 * For origin types `chat`/`channel`: signature of the original post author.
		 */
		author_signature?: string;
		/**
		 * For origin type `channel`: the channel chat to which the message was originally sent.
		 */
		chat?: {
			/**
			 * Unique identifier for this chat.
			 */
			id?: number;
			/**
			 * Type of chat.
			 */
			type?: string;
			/**
			 * Username of the channel, if available.
			 */
			username?: string;
		};
		/**
		 * For origin type `channel`: unique message identifier inside the original chat.
		 */
		message_id?: number;
	};
	/**
	 * The actual UTF-8 text of the message, if the forwarded message is a text message.
	 */
	text?: string;
	/**
	 * Special entities like usernames, URLs, or bot commands that appear in the text.
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
	 * Caption of the forwarded message, if it carries media with a caption.
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
	}[];
	/**
	 * Present if the forwarded message is an animation: information about the animation.
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
	 * Present if the forwarded message is an audio file: information about the file.
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
	};
	/**
	 * Present if the forwarded message is a general file: information about the file.
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
	 * Present if the forwarded message is a photo: the available sizes of the photo.
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
	 * Present if the forwarded message is a video: information about the video.
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
	 * Present if the forwarded message is a voice note: information about the file.
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
	 * Present if the forwarded message is a sticker: information about the file.
	 */
	sticker?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
		 */
		file_unique_id?: string;
		/**
		 * Type of the sticker: `regular`, `mask`, or `custom_emoji`.
		 */
		type?: string;
		/**
		 * Sticker width.
		 */
		width?: number;
		/**
		 * Sticker height.
		 */
		height?: number;
		/**
		 * True if the sticker is animated.
		 */
		is_animated?: boolean;
		/**
		 * True if the sticker is a video sticker.
		 */
		is_video?: boolean;
		/**
		 * Emoji associated with the sticker.
		 */
		emoji?: string;
		/**
		 * Name of the sticker set the sticker belongs to.
		 */
		set_name?: string;
		/**
		 * File size in bytes.
		 */
		file_size?: number;
	};
	/**
	 * Present if the forwarded message is a video note: information about the file.
	 */
	video_note?: {
		/**
		 * Identifier for this file, usable to download or reuse the file.
		 */
		file_id?: string;
		/**
		 * Unique identifier for this file, consistent over time and across bots.
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
		 * File size in bytes.
		 */
		file_size?: number;
	};
	/**
	 * True if the original message can't be forwarded again or saved.
	 */
	has_protected_content?: boolean;
};

/**
 * Forward a message
 * Forwards a message of any kind to another chat.
 */
export async function forwardMessage(
	this: EndpointFunctionThis,
	payload: {
		input: ForwardMessageInput;
		connectionId: number;
	},
): Promise<ForwardMessageOutput> {
	const response = await this.endpointCaller<ForwardMessageOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'forwardMessage',
		},
		payload,
	);
	return response.output;
}
