// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendSenderActionInput = {
	/**
	 * Identifies the conversation the sender action is sent to. Provide exactly one of the fields.
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
	 * The action to perform in the conversation. `typing_on` is turned off automatically after 20 seconds or when a message is sent. `react` and `unreact` require `payload`.
	 */
	sender_action: 'mark_seen' | 'typing_on' | 'typing_off' | 'react' | 'unreact';
	/**
	 * Required for `react` and `unreact`; not used by the other actions.
	 */
	payload?: {
		/**
		 * The ID of the message to react to or remove the reaction from.
		 */
		message_id?: string;
		/**
		 * The emoji to react with (for example 😊 or 🎉), or its UTF-8 representation. Required for `react`; sending `react` again with a different emoji replaces the reaction. Omit for `unreact`.
		 */
		reaction?: string;
	};
};

export type SendSenderActionOutput = {
	/**
	 * The Page-scoped ID of the user the sender action was sent to.
	 */
	recipient_id?: string;
};

/**
 * Send a sender action
 * Sends a sender action (mark seen, typing on/off, react, unreact) to a Messenger user.
 */
export async function sendSenderAction(
	this: EndpointFunctionThis,
	payload: {
		input: SendSenderActionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SendSenderActionOutput> {
	const response = await this.endpointCaller<SendSenderActionOutput>(
		{
			appName: 'facebook-messenger',
			appVersion: 2,
			endpointName: 'sendSenderAction',
		},
		payload,
	);
	return response.output;
}
