// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetChatAdministratorsInput = {
	/**
	 * Unique identifier for the target chat, or username of the target supergroup or channel in the format `@channelusername`.
	 */
	chat_id: string;
};

export type GetChatAdministratorsOutput = {
	/**
	 * The list of administrators in the chat.
	 *
	 * Items: A chat member with administrator or owner status.
	 */
	administrators?: {
		/**
		 * The member's status in the chat: `creator` or `administrator`.
		 */
		status?: string;
		/**
		 * Information about the user.
		 */
		user?: {
			/**
			 * Unique identifier for this user or bot.
			 */
			id?: number;
			/**
			 * True, if this user is a bot.
			 */
			is_bot?: boolean;
			/**
			 * User's or bot's first name.
			 */
			first_name?: string;
			/**
			 * User's or bot's last name.
			 */
			last_name?: string;
			/**
			 * User's or bot's username.
			 */
			username?: string;
			/**
			 * IETF language tag of the user's language.
			 */
			language_code?: string;
			/**
			 * True, if this user is a Telegram Premium user.
			 */
			is_premium?: boolean;
			/**
			 * True, if this user added the bot to the attachment menu.
			 */
			added_to_attachment_menu?: boolean;
		};
		/**
		 * Custom title for this user.
		 */
		custom_title?: string;
		/**
		 * True, if the user's presence in the chat is hidden.
		 */
		is_anonymous?: boolean;
		/**
		 * True, if the bot is allowed to edit administrator privileges of that user. Only present for administrators, not the owner.
		 */
		can_be_edited?: boolean;
		/**
		 * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars.
		 */
		can_manage_chat?: boolean;
		/**
		 * True, if the administrator can delete messages of other users.
		 */
		can_delete_messages?: boolean;
		/**
		 * True, if the administrator can manage video chats.
		 */
		can_manage_video_chats?: boolean;
		/**
		 * Legacy field still returned by the Bot API for backward compatibility. Not present in the current API documentation; superseded by Can Manage Video Chats, which reflects the same permission.
		 */
		can_manage_voice_chats?: boolean;
		/**
		 * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics.
		 */
		can_restrict_members?: boolean;
		/**
		 * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted.
		 */
		can_promote_members?: boolean;
		/**
		 * True, if the user is allowed to change the chat title, photo and other settings.
		 */
		can_change_info?: boolean;
		/**
		 * True, if the user is allowed to invite new users to the chat.
		 */
		can_invite_users?: boolean;
		/**
		 * True, if the administrator can post stories to the chat.
		 */
		can_post_stories?: boolean;
		/**
		 * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive.
		 */
		can_edit_stories?: boolean;
		/**
		 * True, if the administrator can delete stories posted by other users.
		 */
		can_delete_stories?: boolean;
		/**
		 * True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics. Channels only.
		 */
		can_post_messages?: boolean;
		/**
		 * True, if the administrator can edit messages of other users and can pin messages. Channels only.
		 */
		can_edit_messages?: boolean;
		/**
		 * True, if the user is allowed to pin messages. Groups and supergroups only.
		 */
		can_pin_messages?: boolean;
		/**
		 * True, if the user is allowed to create, rename, close, and reopen forum topics. Supergroups only.
		 */
		can_manage_topics?: boolean;
		/**
		 * True, if the administrator can manage direct messages of the channel and decline suggested posts. Channels only.
		 */
		can_manage_direct_messages?: boolean;
		/**
		 * True, if the administrator can edit the tags of regular members. Groups and supergroups only.
		 */
		can_manage_tags?: boolean;
		/**
		 * True, if the administrator can manage chat welcome messages or directly send them in the case of bots.
		 */
		can_send_welcome_messages?: boolean;
	}[];
};

/**
 * Get chat administrators
 * Gets a list of administrators in a chat.
 */
export async function getChatAdministrators(
	this: EndpointFunctionThis,
	payload: {
		input: GetChatAdministratorsInput;
		connectionId: number;
	},
): Promise<GetChatAdministratorsOutput> {
	const response = await this.endpointCaller<GetChatAdministratorsOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'getChatAdministrators',
		},
		payload,
	);
	return response.output;
}
