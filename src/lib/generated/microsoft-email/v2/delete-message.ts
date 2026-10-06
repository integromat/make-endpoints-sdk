// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMessageInput = {
	/**
	 * The unique identifier of the message to delete.
	 */
	id: string;
};

export type DeleteMessageOutput = Record<string, never>;

/**
 * Delete a message
 * Deletes a message from the signed-in user's mailbox.
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
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'deleteMessage',
		},
		payload,
	);
	return response.output;
}
