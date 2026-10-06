// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMessageInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel/supergroup in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Identifier of the message to delete.
	 */
	message_id: number;
};

export type DeleteMessageOutput = {
	/**
	 * True on success.
	 */
	result?: boolean;
};

/**
 * Delete a message
 * Deletes a message.
 */
export async function deleteMessage(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteMessageInput;
		connectionId: number;
	},
): Promise<DeleteMessageOutput> {
	const response = await this.endpointCaller<DeleteMessageOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'deleteMessage',
		},
		payload,
	);
	return response.output;
}
