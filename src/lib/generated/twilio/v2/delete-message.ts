// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMessageInput = {
	/**
	 * The SID of the Message resource to delete. Pattern `SM` or `MM` plus 32 hex characters.
	 */
	Sid: string;
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
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'deleteMessage',
		},
		payload,
	);
	return response.output;
}
