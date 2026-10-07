// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type EditMessageTextInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel/supergroup in the format `@username`. Required if Inline Message ID is not specified.
	 */
	chat_id?: string;
	/**
	 * Identifier of the message to edit. Required if Inline Message ID is not specified.
	 */
	message_id?: number;
	/**
	 * Identifier of the inline message to edit. Required if Chat ID and Message ID are not specified.
	 */
	inline_message_id?: string;
	/**
	 * New text of the message, 1-4096 characters after entities parsing.
	 */
	text: string;
	/**
	 * Mode for parsing entities (bold, italic, links, etc.) in the message text. Leave empty for plain text.
	 */
	parse_mode?: '' | 'Markdown' | 'HTML';
	/**
	 * Disable link previews for links in this message.
	 */
	disable_web_page_preview?: boolean;
	/**
	 * A JSON-serialized object for an inline keyboard. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.
	 */
	reply_markup?: string;
};

export type EditMessageTextOutput = {
	/**
	 * Unique identifier of the edited message inside this chat. Absent when the edited message was an inline message (the API then returns `true`).
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
	 * The new UTF-8 text of the message.
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
 * Edit message text
 * Edits the text of a text or game message.
 */
export async function editMessageText(
	this: EndpointFunctionThis,
	payload: {
		input: EditMessageTextInput;
		connectionId: number;
	},
): Promise<EditMessageTextOutput> {
	const response = await this.endpointCaller<EditMessageTextOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'editMessageText',
		},
		payload,
	);
	return response.output;
}
