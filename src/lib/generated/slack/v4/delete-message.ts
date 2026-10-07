// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMessageInput = {
	/**
	 * Channel containing the message to delete.
	 */
	channel: string;
	/**
	 * Timestamp of the message to delete, for example `1405894322.002768`.
	 */
	ts: string;
};

export type DeleteMessageOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * ID of the channel the deleted message was in.
	 */
	channel?: string;
	/**
	 * Timestamp of the deleted message.
	 */
	ts?: string;
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
			appName: 'slack',
			appVersion: 4,
			endpointName: 'deleteMessage',
		},
		payload,
	);
	return response.output;
}
