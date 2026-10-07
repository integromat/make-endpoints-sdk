// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RestrictChatMemberInput = {
	/**
	 * Unique identifier for the target chat, or username of the target supergroup in the format `@supergroupusername`.
	 */
	chat_id: string;
	/**
	 * Unique identifier of the target user.
	 */
	user_id: number;
	/**
	 * The new user permissions.
	 */
	permissions: {
		/**
		 * True, if the user is allowed to send text messages, rich messages, contacts, giveaways, giveaway winners, invoices, locations and venues.
		 */
		can_send_messages?: boolean;
		/**
		 * True, if the user is allowed to send audios.
		 */
		can_send_audios?: boolean;
		/**
		 * True, if the user is allowed to send documents.
		 */
		can_send_documents?: boolean;
		/**
		 * True, if the user is allowed to send photos.
		 */
		can_send_photos?: boolean;
		/**
		 * True, if the user is allowed to send videos.
		 */
		can_send_videos?: boolean;
		/**
		 * True, if the user is allowed to send video notes.
		 */
		can_send_video_notes?: boolean;
		/**
		 * True, if the user is allowed to send voice notes.
		 */
		can_send_voice_notes?: boolean;
		/**
		 * True, if the user is allowed to send polls and checklists.
		 */
		can_send_polls?: boolean;
		/**
		 * True, if the user is allowed to send animations, games, stickers and use inline bots.
		 */
		can_send_other_messages?: boolean;
		/**
		 * True, if the user is allowed to add web page previews to their messages.
		 */
		can_add_web_page_previews?: boolean;
		/**
		 * True, if the user is allowed to react to messages. If omitted, defaults to the value of Can Send Messages.
		 */
		can_react_to_messages?: boolean;
		/**
		 * True, if the user is allowed to edit their own tag. If omitted, defaults to the value of Can Pin Messages.
		 */
		can_edit_tag?: boolean;
		/**
		 * True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups.
		 */
		can_change_info?: boolean;
		/**
		 * True, if the user is allowed to invite new users to the chat.
		 */
		can_invite_users?: boolean;
		/**
		 * True, if the user is allowed to pin messages. Ignored in public supergroups.
		 */
		can_pin_messages?: boolean;
		/**
		 * True, if the user is allowed to create forum topics. If omitted, defaults to the value of Can Pin Messages.
		 */
		can_manage_topics?: boolean;
	};
	/**
	 * Pass true if chat permissions are set independently. Otherwise, Can Send Other Messages and Can Add Web Page Previews imply Can Send Messages, Can Send Audios, Can Send Documents, Can Send Photos, Can Send Videos, Can Send Video Notes, and Can Send Voice Notes; Can Send Polls implies Can Send Messages.
	 */
	use_independent_chat_permissions?: boolean;
	/**
	 * Point in time when restrictions will be lifted for the user, as a Unix timestamp. If omitted or a date in the past, the user is restricted forever.
	 */
	until_date?: number;
};

export type RestrictChatMemberOutput = {
	/**
	 * True on success.
	 */
	result?: boolean;
};

/**
 * Restrict a chat member
 * Restricts a user in a supergroup.
 */
export async function restrictChatMember(
	this: EndpointFunctionThis,
	payload: {
		input: RestrictChatMemberInput;
		connectionId: number;
	},
): Promise<RestrictChatMemberOutput> {
	const response = await this.endpointCaller<RestrictChatMemberOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'restrictChatMember',
		},
		payload,
	);
	return response.output;
}
