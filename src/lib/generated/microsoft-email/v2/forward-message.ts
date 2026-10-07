// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ForwardMessageInput = {
	/**
	 * The unique identifier of the message to forward.
	 */
	id: string;
	/**
	 * The recipients to forward the message to.
	 *
	 * Items: A recipient.
	 */
	toRecipients: {
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
	 * An optional comment to include in the forwarded message body.
	 */
	comment?: string;
};

export type ForwardMessageOutput = Record<string, never>;

/**
 * Forward a message
 * Forwards a message to specified recipients.
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
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'forwardMessage',
		},
		payload,
	);
	return response.output;
}
