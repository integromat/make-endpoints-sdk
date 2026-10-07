// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UnpinChatMessageInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Identifier of the message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
	 */
	message_id?: number;
};

export type UnpinChatMessageOutput = {
	/**
	 * True on success.
	 */
	result?: boolean;
};

/**
 * Unpin a chat message
 * Removes a message from the list of pinned messages in a chat.
 */
export async function unpinChatMessage(
	this: EndpointFunctionThis,
	payload: {
		input: UnpinChatMessageInput;
		connectionId: number;
	},
): Promise<UnpinChatMessageOutput> {
	const response = await this.endpointCaller<UnpinChatMessageOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'unpinChatMessage',
		},
		payload,
	);
	return response.output;
}
