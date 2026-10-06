// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetChatMemberCountInput = {
	/**
	 * Unique identifier for the target chat, or username of the target supergroup or channel in the format `@channelusername`.
	 */
	chat_id: string;
};

export type GetChatMemberCountOutput = {
	/**
	 * The number of members in the chat.
	 */
	result?: number;
};

/**
 * Get chat member count
 * Gets the number of members in a chat.
 */
export async function getChatMemberCount(
	this: EndpointFunctionThis,
	payload: {
		input: GetChatMemberCountInput;
		connectionId: number;
	},
): Promise<GetChatMemberCountOutput> {
	const response = await this.endpointCaller<GetChatMemberCountOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'getChatMemberCount',
		},
		payload,
	);
	return response.output;
}
