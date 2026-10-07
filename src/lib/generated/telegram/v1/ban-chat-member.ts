// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type BanChatMemberInput = {
	/**
	 * Unique identifier for the target group, or username of the target supergroup or channel in the format `@channelusername`.
	 */
	chat_id: string;
	/**
	 * Unique identifier of the target user.
	 */
	user_id: number;
	/**
	 * Date when the user will be unbanned, as a Unix timestamp. If the user is banned for more than 366 days or less than 30 seconds from the current time, they are considered banned forever. Applies to supergroups and channels only. Banning removes the user from the chat immediately. After this time, the user may rejoin with an invite; membership is not restored automatically.
	 */
	until_date?: number;
};

export type BanChatMemberOutput = {
	/**
	 * True on success.
	 */
	result?: boolean;
};

/**
 * Ban a chat member
 * Bans a user in a group, supergroup, or channel.
 */
export async function banChatMember(
	this: EndpointFunctionThis,
	payload: {
		input: BanChatMemberInput;
		connectionId: number;
	},
): Promise<BanChatMemberOutput> {
	const response = await this.endpointCaller<BanChatMemberOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'banChatMember',
		},
		payload,
	);
	return response.output;
}
