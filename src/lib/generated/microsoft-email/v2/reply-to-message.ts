// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ReplyToMessageInput = {
	/**
	 * The unique identifier of the message to reply to.
	 */
	id: string;
	/**
	 * A comment to include in the reply body.
	 */
	comment?: string;
	/**
	 * Override the To: recipients of the reply. If omitted, replies to the original sender.
	 *
	 * Items: A recipient.
	 */
	toRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
	/**
	 * The Cc: recipients of the reply.
	 *
	 * Items: A recipient.
	 */
	ccRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
	/**
	 * The Bcc: recipients of the reply.
	 *
	 * Items: A recipient.
	 */
	bccRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
};

export type ReplyToMessageOutput = Record<string, never>;

/**
 * Reply to a message
 * Replies to the sender of a message.
 */
export async function replyToMessage(
	this: EndpointFunctionThis,
	payload: {
		input: ReplyToMessageInput;
		connectionId: number;
	},
): Promise<ReplyToMessageOutput> {
	const response = await this.endpointCaller<ReplyToMessageOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'replyToMessage',
		},
		payload,
	);
	return response.output;
}
