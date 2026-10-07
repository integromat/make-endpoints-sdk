// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type PromoteChatMemberInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.
	 */
	chat_id: string;
	/**
	 * Unique identifier of the target user.
	 */
	user_id: number;
	/**
	 * Pass true if the administrator's presence in the chat is hidden.
	 */
	is_anonymous?: boolean;
	/**
	 * Pass true if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
	 */
	can_manage_chat?: boolean;
	/**
	 * Pass true if the administrator can delete messages of other users.
	 */
	can_delete_messages?: boolean;
	/**
	 * Pass true if the administrator can manage video chats.
	 */
	can_manage_video_chats?: boolean;
	/**
	 * Pass true if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to true for promotions of channel administrators.
	 */
	can_restrict_members?: boolean;
	/**
	 * Pass true if the administrator can add new administrators with a subset of their own privileges, or demote administrators that they have promoted, directly or indirectly.
	 */
	can_promote_members?: boolean;
	/**
	 * Pass true if the administrator can change the chat title, photo and other settings.
	 */
	can_change_info?: boolean;
	/**
	 * Pass true if the administrator can invite new users to the chat.
	 */
	can_invite_users?: boolean;
	/**
	 * Pass true if the administrator can post stories to the chat.
	 */
	can_post_stories?: boolean;
	/**
	 * Pass true if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive.
	 */
	can_edit_stories?: boolean;
	/**
	 * Pass true if the administrator can delete stories posted by other users.
	 */
	can_delete_stories?: boolean;
	/**
	 * Pass true if the administrator can post messages in the channel, approve suggested posts, or access channel statistics. Channels only.
	 */
	can_post_messages?: boolean;
	/**
	 * Pass true if the administrator can edit messages of other users and can pin messages. Channels only.
	 */
	can_edit_messages?: boolean;
	/**
	 * Pass true if the administrator can pin messages. Supergroups only.
	 */
	can_pin_messages?: boolean;
	/**
	 * Pass true if the user is allowed to create, rename, close, and reopen forum topics. Supergroups only.
	 */
	can_manage_topics?: boolean;
	/**
	 * Pass true if the administrator can manage direct messages within the channel and decline suggested posts. Channels only.
	 */
	can_manage_direct_messages?: boolean;
	/**
	 * Pass true if the administrator can edit the tags of regular members. Groups and supergroups only.
	 */
	can_manage_tags?: boolean;
	/**
	 * Pass true if the administrator can manage chat welcome messages or directly send them in the case of bots.
	 */
	can_send_welcome_messages?: boolean;
};

export type PromoteChatMemberOutput = {
	/**
	 * True on success.
	 */
	result?: boolean;
};

/**
 * Promote a chat member
 * Promotes or demotes a user in a supergroup or channel.
 */
export async function promoteChatMember(
	this: EndpointFunctionThis,
	payload: {
		input: PromoteChatMemberInput;
		connectionId: number;
	},
): Promise<PromoteChatMemberOutput> {
	const response = await this.endpointCaller<PromoteChatMemberOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'promoteChatMember',
		},
		payload,
	);
	return response.output;
}
