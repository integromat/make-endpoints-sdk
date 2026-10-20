// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMessageInput = {
	/**
	 * The resource name of the message, in the form `spaces/{space}/messages/{message}`.
	 */
	name: string;
};

export type DeleteMessageOutput = Record<string, never>;

/**
 * Delete a message
 * Deletes a message.
 */
export async function deleteMessage(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteMessageOutput> {
	const response = await this.endpointCaller<DeleteMessageOutput>(
		{
			appName: 'google-chat',
			appVersion: 1,
			endpointName: 'deleteMessage',
		},
		payload,
	);
	return response.output;
}
