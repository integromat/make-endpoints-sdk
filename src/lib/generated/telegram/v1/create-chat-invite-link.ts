// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateChatInviteLinkInput = {
	/**
	 * Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.
	 */
	chat_id: string;
	/**
	 * Invite link name, 0-32 characters.
	 */
	name?: string;
	/**
	 * Point in time when the link will expire, as a Unix timestamp.
	 */
	expire_date?: number;
	/**
	 * The maximum number of users that can be members of the chat simultaneously after joining via this invite link. Between 1 and 99999.
	 */
	member_limit?: number;
	/**
	 * True, if users joining the chat via the link need to be approved by chat administrators. If true, Member Limit can't be specified.
	 */
	creates_join_request?: boolean;
};

export type CreateChatInviteLinkOutput = {
	/**
	 * The invite link. If the link was created by another chat administrator, the second part of the link is replaced with "...".
	 */
	invite_link?: string;
	/**
	 * Invite link name.
	 */
	name?: string;
	/**
	 * Creator of the link.
	 */
	creator?: {
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
	 * True, if users joining the chat via the link need to be approved by chat administrators.
	 */
	creates_join_request?: boolean;
	/**
	 * True, if the link is primary.
	 */
	is_primary?: boolean;
	/**
	 * True, if the link is revoked.
	 */
	is_revoked?: boolean;
	/**
	 * Point in time when the link will expire or has been expired.
	 */
	expire_date?: number;
	/**
	 * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link.
	 */
	member_limit?: number;
	/**
	 * Number of pending join requests created using this link.
	 */
	pending_join_request_count?: number;
	/**
	 * The number of seconds the subscription will be active for before the next payment.
	 */
	subscription_period?: number;
	/**
	 * The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link.
	 */
	subscription_price?: number;
};

/**
 * Create a chat invite link
 * Creates an additional invite link for a chat.
 */
export async function createChatInviteLink(
	this: EndpointFunctionThis,
	payload: {
		input: CreateChatInviteLinkInput;
		connectionId: number;
	},
): Promise<CreateChatInviteLinkOutput> {
	const response = await this.endpointCaller<CreateChatInviteLinkOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'createChatInviteLink',
		},
		payload,
	);
	return response.output;
}
