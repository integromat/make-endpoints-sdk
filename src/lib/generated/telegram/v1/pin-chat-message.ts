// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type PinChatMessageInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@username`.
	 */
	chat_id: string;
	/**
	 * Identifier of the message to pin.
	 */
	message_id: number;
	/**
	 * Do not send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
	 */
	disable_notification?: boolean;
};

export type PinChatMessageOutput = {
	/**
	 * True on success.
	 */
	result?: boolean;
};

/**
 * Pin a chat message
 * Adds a message to the list of pinned messages in a chat.
 */
export async function pinChatMessage(
	this: EndpointFunctionThis,
	payload: {
		input: PinChatMessageInput;
		connectionId: number;
	},
): Promise<PinChatMessageOutput> {
	const response = await this.endpointCaller<PinChatMessageOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'pinChatMessage',
		},
		payload,
	);
	return response.output;
}
