// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendMessageInput = {
	/**
	 * The messaging type of the message being sent. `RESPONSE` replies to a user message received within 24 hours, `UPDATE` is a proactive message sent within the 24-hour window, `MESSAGE_TAG` is a non-promotional message sent outside the window and requires `tag`.
	 */
	messaging_type: 'RESPONSE' | 'UPDATE' | 'MESSAGE_TAG';
	/**
	 * Identifies the conversation the message is sent to. Provide exactly one of the fields.
	 */
	recipient: {
		/**
		 * The Page-scoped ID of the user. The user must have interacted with the Page through one of the [Messenger entry points](https://developers.facebook.com/docs/messenger-platform/discovery). IDs returned by [Facebook Login](https://developers.facebook.com/docs/facebook-login) are app-scoped and do not work here.
		 */
		id?: string;
		/**
		 * A user reference obtained from the [checkbox plugin](https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin) or the [customer chat plugin](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin). Use instead of `id` when the PSID is not known yet.
		 */
		user_ref?: string;
		/**
		 * The ID of a visitor post to reply to privately. Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies).
		 */
		post_id?: string;
		/**
		 * The ID of a post comment to reply to privately. Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies).
		 */
		comment_id?: string;
	};
	/**
	 * The message to send. Set exactly one of `text`, `attachment` or `attachments`.
	 */
	message: {
		/**
		 * The text of the message. Must be UTF-8 and at most 2000 characters. Previews are not shown for URLs in this field; use an attachment instead. Either `text` or `attachment` must be set.
		 */
		text?: string;
		/**
		 * A media or template attachment. Either `text` or `attachment` must be set, but not both.
		 */
		attachment?: {
			/**
			 * The type of the attachment: a media asset (`image`, `audio`, `video`, `file`) or a structured `template`.
			 */
			type?: '' | 'image' | 'audio' | 'video' | 'file' | 'template';
		};
		/**
		 * Multiple media attachments sent in one message. Only images are allowed, up to 30 per message. Use `attachment` instead for a single media item or a template.
		 *
		 * @maxItems 30
		 *
		 * Items: An image attachment.
		 */
		attachments?: {
			/**
			 * The attachment type. Only `image` is supported for multiple attachments.
			 */
			type: 'image';
			/**
			 * The image source.
			 */
			payload: {
				/**
				 * The public URL of the image.
				 */
				url: string;
			};
		}[];
		/**
		 * An array of up to 13 quick replies presented to the user as buttons below the message.
		 *
		 * Items: A quick reply.
		 */
		quick_replies?: {
			/**
			 * The type of the quick reply: `text` for a custom button, `user_phone_number` or `user_email` to let the user share the phone number or email address from their profile.
			 */
			content_type: 'text' | 'user_phone_number' | 'user_email';
		}[];
		/**
		 * A custom string of up to 1000 characters delivered in the `message_echoes` [webhook event](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks). May be used to identify messages sent from this source.
		 */
		metadata?: string;
	};
	/**
	 * Sends the message as a reply to a specific earlier message in the conversation. The referenced message may have been sent by the Page or by the user.
	 */
	reply_to?: {
		/**
		 * The ID of the message to reply to (`mid`), for example from a received message webhook event or the `message_id` returned by a previous send.
		 */
		mid: string;
	};
	/**
	 * The push notification type. When omitted, Meta uses `REGULAR`.
	 */
	notification_type?: '' | 'REGULAR' | 'SILENT_PUSH' | 'NO_PUSH';
};

export type SendMessageOutput = {
	/**
	 * The Page-scoped ID of the user the message was sent to.
	 */
	recipient_id?: string;
	/**
	 * The ID of the sent message, in the form `m_...`.
	 */
	message_id?: string;
	/**
	 * The ID of the saved attachment. Returned only when a media attachment was sent with `is_reusable` set to `true`; reuse it as `message.attachment.payload.attachment_id`.
	 */
	attachment_id?: string;
};

/**
 * Send a message
 * Sends a text, attachment, or template message to a Messenger user via the Send API.
 */
export async function sendMessage(
	this: EndpointFunctionThis,
	payload: {
		input: SendMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SendMessageOutput> {
	const response = await this.endpointCaller<SendMessageOutput>(
		{
			appName: 'facebook-messenger',
			appVersion: 2,
			endpointName: 'sendMessage',
		},
		payload,
	);
	return response.output;
}
