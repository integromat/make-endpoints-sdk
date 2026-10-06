// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUpdatesInput = {
	/**
	 * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as this endpoint is called with an offset higher than its Update ID. A negative offset can be specified to retrieve updates starting from that many updates from the end of the updates queue; all previous updates will be forgotten.
	 */
	offset?: number;
	/**
	 * Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
	 */
	limit?: number;
	/**
	 * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive; short polling should be used for testing purposes only.
	 */
	timeout?: number;
	/**
	 * The list of update types to receive. Specify an empty array to receive all update types except `chat_member`, `message_reaction`, and `message_reaction_count`. If omitted, the previous setting is used. This does not affect updates created before the call, so unwanted updates may be received for a short period of time.
	 *
	 * Items: A single update type the bot should receive. For example, `message`.
	 */
	allowed_updates?: (
		| ''
		| 'message'
		| 'edited_message'
		| 'channel_post'
		| 'edited_channel_post'
		| 'business_connection'
		| 'business_message'
		| 'edited_business_message'
		| 'deleted_business_messages'
		| 'message_reaction'
		| 'message_reaction_count'
		| 'inline_query'
		| 'chosen_inline_result'
		| 'callback_query'
		| 'shipping_query'
		| 'pre_checkout_query'
		| 'purchased_paid_media'
		| 'poll'
		| 'poll_answer'
		| 'my_chat_member'
		| 'chat_member'
		| 'chat_join_request'
		| 'chat_boost'
		| 'removed_chat_boost'
	)[];
};

export type GetUpdatesOutput = {
	/**
	 * The list of incoming updates.
	 *
	 * Items: This object represents an incoming update. At most one of the optional fields can be present in any given update.
	 */
	updates?: {
		/**
		 * The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially.
		 */
		update_id?: number;
		/**
		 * New incoming message of any kind - text, photo, sticker, etc.
		 */
		message?: {
			/**
			 * Unique identifier of the message inside this chat.
			 */
			message_id?: number;
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
			 * The user that sent the message. Empty for messages sent to channels.
			 */
			from?: {
				/**
				 * Unique identifier for this user or bot.
				 */
				id?: number;
				/**
				 * True, if this user is a bot.
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
			 * Caption for the media, if any.
			 */
			caption?: string;
			/**
			 * Special entities like usernames, URLs, or bot commands that appear in the text.
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
			}[];
			/**
			 * The message photo, available in several sizes.
			 */
			photo?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
			 * Information about the general file, if the message is a document.
			 */
			document?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
			 * Information about the video, if the message is a video.
			 */
			video?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
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
				 * Duration of the video in seconds.
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
			 * Information about the animation, if the message is an animation (GIF or H.264/MPEG-4 AVC video without sound).
			 */
			animation?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
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
				 * Duration of the video in seconds.
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
			 * Information about the audio, if the message is an audio file.
			 */
			audio?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
				 */
				file_unique_id?: string;
				/**
				 * Duration of the audio in seconds.
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
			 * Information about the voice message, if the message is a voice message.
			 */
			voice?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
				 */
				file_unique_id?: string;
				/**
				 * Duration of the audio in seconds.
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
			 * Information about the sticker, if the message is a sticker.
			 */
			sticker?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
				 * True, if the sticker is animated.
				 */
				is_animated?: boolean;
				/**
				 * True, if the sticker is a video sticker.
				 */
				is_video?: boolean;
				/**
				 * Emoji associated with the sticker.
				 */
				emoji?: string;
				/**
				 * Name of the sticker set to which the sticker belongs.
				 */
				set_name?: string;
			};
			/**
			 * Information about the location, if the message is a location.
			 */
			location?: {
				/**
				 * Longitude as defined by sender.
				 */
				longitude?: number;
				/**
				 * Latitude as defined by sender.
				 */
				latitude?: number;
			};
			/**
			 * Information about the venue, if the message is a venue.
			 */
			venue?: {
				/**
				 * Address of the venue.
				 */
				address?: string;
			};
			/**
			 * Information about the contact, if the message is a shared contact.
			 */
			contact?: {
				/**
				 * Contact's phone number.
				 */
				phone_number?: string;
				/**
				 * Contact's first name.
				 */
				first_name?: string;
				/**
				 * Contact's last name.
				 */
				last_name?: string;
				/**
				 * Contact's user identifier in Telegram, if available.
				 */
				user_id?: number;
				/**
				 * Additional data about the contact in the form of a vCard.
				 */
				vcard?: string;
			};
			/**
			 * Information about the poll, if the message contains a native poll.
			 */
			poll?: {
				/**
				 * Unique poll identifier.
				 */
				id?: string;
				/**
				 * Poll question.
				 */
				question?: string;
				/**
				 * Total number of users that voted in the poll.
				 */
				total_voter_count?: number;
				/**
				 * True, if the poll is closed.
				 */
				is_closed?: boolean;
				/**
				 * True, if the poll is anonymous.
				 */
				is_anonymous?: boolean;
				/**
				 * Poll type: `regular` or `quiz`.
				 */
				type?: string;
				/**
				 * True, if the poll allows multiple answers.
				 */
				allows_multiple_answers?: boolean;
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
				}[][];
			};
		};
		/**
		 * New version of a message that is known to the bot and was edited. Shares the same shape as Message.
		 */
		edited_message?: {
			/**
			 * Unique identifier of the message inside this chat.
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
			 * The user that sent the message. Empty for messages sent to channels.
			 */
			from?: {
				/**
				 * Unique identifier for this user or bot.
				 */
				id?: number;
				/**
				 * True, if this user is a bot.
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
			 * Caption for the media, if any.
			 */
			caption?: string;
			/**
			 * The message photo, available in several sizes.
			 */
			photo?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
			 * Information about the general file, if the message is a document.
			 */
			document?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
			 * Information about the video, if the message is a video.
			 */
			video?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
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
				 * Duration of the video in seconds.
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
			 * Information about the audio, if the message is an audio file.
			 */
			audio?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
				 */
				file_unique_id?: string;
				/**
				 * Duration of the audio in seconds.
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
			 * Information about the voice message, if the message is a voice message.
			 */
			voice?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
				 */
				file_unique_id?: string;
				/**
				 * Duration of the audio in seconds.
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
			 * Information about the sticker, if the message is a sticker.
			 */
			sticker?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
				 * True, if the sticker is animated.
				 */
				is_animated?: boolean;
				/**
				 * True, if the sticker is a video sticker.
				 */
				is_video?: boolean;
				/**
				 * Emoji associated with the sticker.
				 */
				emoji?: string;
				/**
				 * Name of the sticker set to which the sticker belongs.
				 */
				set_name?: string;
			};
			/**
			 * Information about the location, if the message is a location.
			 */
			location?: {
				/**
				 * Longitude as defined by sender.
				 */
				longitude?: number;
				/**
				 * Latitude as defined by sender.
				 */
				latitude?: number;
			};
			/**
			 * Information about the venue, if the message is a venue.
			 */
			venue?: {
				/**
				 * Address of the venue.
				 */
				address?: string;
			};
			/**
			 * Information about the contact, if the message is a shared contact.
			 */
			contact?: {
				/**
				 * Contact's phone number.
				 */
				phone_number?: string;
				/**
				 * Contact's first name.
				 */
				first_name?: string;
				/**
				 * Contact's last name.
				 */
				last_name?: string;
				/**
				 * Contact's user identifier in Telegram, if available.
				 */
				user_id?: number;
				/**
				 * Additional data about the contact in the form of a vCard.
				 */
				vcard?: string;
			};
			/**
			 * Information about the poll, if the message contains a native poll.
			 */
			poll?: {
				/**
				 * Unique poll identifier.
				 */
				id?: string;
				/**
				 * Poll question.
				 */
				question?: string;
				/**
				 * Total number of users that voted in the poll.
				 */
				total_voter_count?: number;
				/**
				 * True, if the poll is closed.
				 */
				is_closed?: boolean;
				/**
				 * True, if the poll is anonymous.
				 */
				is_anonymous?: boolean;
				/**
				 * Poll type: `regular` or `quiz`.
				 */
				type?: string;
				/**
				 * True, if the poll allows multiple answers.
				 */
				allows_multiple_answers?: boolean;
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
				}[][];
			};
		};
		/**
		 * New incoming channel post of any kind - text, photo, sticker, etc. Shares the same shape as Message.
		 */
		channel_post?: {
			/**
			 * Unique identifier of the message inside this chat.
			 */
			message_id?: number;
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
				 * Type of chat: `channel`.
				 */
				type?: string;
				/**
				 * Username of the channel, if available.
				 */
				username?: string;
			};
			/**
			 * The actual UTF-8 text of the message.
			 */
			text?: string;
			/**
			 * Caption for the media, if any.
			 */
			caption?: string;
			/**
			 * The message photo, available in several sizes.
			 */
			photo?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
			 * Information about the general file, if the message is a document.
			 */
			document?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
				 */
				file_id?: string;
				/**
				 * Unique identifier for this file.
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
			 * Information about the video, if the message is a video.
			 */
			video?: {
				/**
				 * Identifier for this file, which can be used to download or reuse the file.
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
				 * Duration of the video in seconds.
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
		};
		/**
		 * New version of a channel post that is known to the bot and was edited. Shares the same shape as Message.
		 */
		edited_channel_post?: {
			/**
			 * Unique identifier of the message inside this chat.
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
			 * The chat the message belongs to.
			 */
			chat?: {
				/**
				 * Unique identifier for this chat.
				 */
				id?: number;
				/**
				 * Type of chat: `channel`.
				 */
				type?: string;
				/**
				 * Username of the channel, if available.
				 */
				username?: string;
			};
			/**
			 * The actual UTF-8 text of the message.
			 */
			text?: string;
			/**
			 * Caption for the media, if any.
			 */
			caption?: string;
		};
		/**
		 * New incoming inline query.
		 */
		inline_query?: {
			/**
			 * Unique identifier for this query.
			 */
			id?: string;
			/**
			 * The user who sent the query.
			 */
			from?: {
				/**
				 * Unique identifier for this user or bot.
				 */
				id?: number;
				/**
				 * True, if this user is a bot.
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
			 * Text of the query, up to 256 characters.
			 */
			query?: string;
			/**
			 * Offset of the results to be returned, can be controlled by the bot.
			 */
			offset?: string;
		};
		/**
		 * New incoming callback query.
		 */
		callback_query?: {
			/**
			 * Unique identifier for this query.
			 */
			id?: string;
			/**
			 * The user who pressed the button.
			 */
			from?: {
				/**
				 * Unique identifier for this user or bot.
				 */
				id?: number;
				/**
				 * True, if this user is a bot.
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
			 * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.
			 */
			chat_instance?: string;
			/**
			 * Data associated with the callback button.
			 */
			data?: string;
			/**
			 * Identifier of the message sent via the bot in inline mode, that originated the query.
			 */
			inline_message_id?: string;
		};
	}[];
};

/**
 * Get updates
 * Receives incoming updates using long polling.
 */
export async function getUpdates(
	this: EndpointFunctionThis,
	payload: {
		input: GetUpdatesInput;
		connectionId: number;
	},
): Promise<GetUpdatesOutput> {
	const response = await this.endpointCaller<GetUpdatesOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'getUpdates',
		},
		payload,
	);
	return response.output;
}
