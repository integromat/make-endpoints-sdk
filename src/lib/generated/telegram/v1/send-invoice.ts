// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendInvoiceInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Product description, 1-255 characters.
	 */
	description: string;
	/**
	 * Bot-defined invoice payload, 1-128 bytes. Not shown to the user; use it for your own internal processes (e.g. an order ID).
	 */
	payload: string;
	/**
	 * Payment provider token obtained via @BotFather. Leave empty for payments in Telegram Stars.
	 */
	provider_token?: string;
	/**
	 * Three-letter ISO 4217 currency code, or `XTR` for payments in Telegram Stars.
	 */
	currency: string;
	/**
	 * Price breakdown: product price, tax, discount, delivery cost, delivery tax, bonus, etc. Must contain exactly one item for payments in Telegram Stars.
	 *
	 * Items: A single price breakdown component (e.g. product price, tax, discount, or delivery cost).
	 */
	prices: {
		/**
		 * Name of this price component, e.g. `Product`, `Tax`, `Discount`.
		 */
		label: string;
		/**
		 * Amount in the smallest units of the currency (integer, not float). For example, for US$ 1.45, pass 145.
		 */
		amount: number;
	}[];
	/**
	 * The maximum accepted tip amount, in the smallest units of the currency. Defaults to 0. Not supported for payments in Telegram Stars.
	 */
	max_tip_amount?: number;
	/**
	 * Suggested tip amounts, in the smallest units of the currency. Must be positive, strictly increasing, and not exceed Max Tip Amount. At most 4 values.
	 *
	 * @maxItems 4
	 *
	 * Items: A single suggested tip amount, in the smallest units of the currency.
	 */
	suggested_tip_amounts?:
		| []
		| [number]
		| [number, number]
		| [number, number, number]
		| [number, number, number, number];
	/**
	 * Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.
	 */
	message_thread_id?: number;
	/**
	 * Unique deep-linking parameter. If empty, forwarded copies of the message show a Pay button that any user can pay from directly. If set, forwarded copies show a URL deep-link button to the bot instead.
	 */
	start_parameter?: string;
	/**
	 * JSON-serialized data about the invoice, shared with the payment provider. The required fields are provider-specific.
	 */
	provider_data?: string;
	/**
	 * URL of the product photo for the invoice — a photo of the goods, or a marketing image for a service.
	 */
	photo_url?: string;
	/**
	 * Pass true to require the user's full name to complete the order. Ignored for payments in Telegram Stars.
	 */
	need_name?: boolean;
	/**
	 * Pass true to require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
	 */
	need_phone_number?: boolean;
	/**
	 * Pass true to require the user's email address to complete the order. Ignored for payments in Telegram Stars.
	 */
	need_email?: boolean;
	/**
	 * Pass true to require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
	 */
	need_shipping_address?: boolean;
	/**
	 * Pass true if the user's phone number should be sent to the payment provider. Ignored for payments in Telegram Stars.
	 */
	send_phone_number_to_provider?: boolean;
	/**
	 * Pass true if the user's email address should be sent to the payment provider. Ignored for payments in Telegram Stars.
	 */
	send_email_to_provider?: boolean;
	/**
	 * Pass true if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
	 */
	is_flexible?: boolean;
	/**
	 * Send the message silently. Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;
	/**
	 * If the message is a reply, unique identifier of the original message.
	 */
	reply_to_message_id?: number;
	/**
	 * A JSON-serialized `InlineKeyboardMarkup` object (this is the only reply markup type sendInvoice accepts). If empty, a single 'Pay' button is shown automatically. If provided, its first button must be a Pay button. Example: `{"inline_keyboard":[[{"text":"Pay","pay":true}]]}`.
	 */
	reply_markup?: string;
};

export type SendInvoiceOutput = {
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
	 * For replies in the same chat and message thread, the original message that was replied to. This nested message will not itself contain a further Reply To Message field, even if it is itself a reply.
	 */
	reply_to_message?: {
		/**
		 * Unique identifier of the replied-to message inside this chat.
		 */
		message_id?: number;
		/**
		 * Date the replied-to message was sent, in Unix time.
		 */
		date?: number;
		/**
		 * The chat the replied-to message belongs to.
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
		 * The sender of the replied-to message.
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
		};
		/**
		 * Text of the replied-to message, if any.
		 */
		text?: string;
	};
	/**
	 * Basic information about the invoice carried by this message.
	 */
	invoice?: {
		/**
		 * Product description.
		 */
		description?: string;
		/**
		 * Unique bot deep-linking parameter that can be used to generate this invoice.
		 */
		start_parameter?: string;
		/**
		 * Three-letter ISO 4217 currency code, or `XTR` for Telegram Stars.
		 */
		currency?: string;
		/**
		 * Total price in the smallest units of the currency.
		 */
		total_amount?: number;
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
	 * Inline keyboard attached to the message (a Pay button is always present).
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
			 * True if this is the Pay button.
			 */
			pay?: boolean;
		}[][];
	};
};

/**
 * Send an invoice
 * Sends an invoice message for payment to a Telegram chat.
 */
export async function sendInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: SendInvoiceInput;
		connectionId: number;
	},
): Promise<SendInvoiceOutput> {
	const response = await this.endpointCaller<SendInvoiceOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'sendInvoice',
		},
		payload,
	);
	return response.output;
}
