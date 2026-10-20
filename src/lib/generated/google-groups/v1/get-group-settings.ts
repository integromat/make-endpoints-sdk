// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGroupSettingsInput = {
	/**
	 * The group's email address.
	 */
	groupUniqueId: string;
};

export type GetGroupSettingsOutput = {
	/**
	 * The type of the resource. Always `groupsSettings#groups`.
	 */
	kind?: string;
	/**
	 * The group's email address.
	 */
	email?: string;
	/**
	 * Whether members external to your organization can join the group. Returned by the API as the string `true` or `false`.
	 */
	allowExternalMembers?: string;
	/**
	 * Whether members can post to the group from the web. If `false`, members can only use Gmail to communicate with the group. Returned by the API as the string `true` or `false`.
	 */
	allowWebPosting?: string;
	/**
	 * Whether the group is archived only and inactive. If `true`, new messages are rejected and `whoCanPostMessage` is set to `NONE_CAN_POST`. If reverted to `false`, `whoCanPostMessage` is set to `ALL_MANAGERS_CAN_POST`. Returned by the API as the string `true` or `false`.
	 */
	archiveOnly?: string;
	/**
	 * Whether the group has a custom role that's included in one of the settings being merged. This field is read-only. Returned by the API as the string `true` or `false`.
	 */
	customRolesEnabledForSettingsToBeMerged?: string;
	/**
	 * The description of the group. Maximum 4,096 characters.
	 */
	description?: string;
	/**
	 * Whether a collaborative inbox remains turned on for the group. Returned by the API as the string `true` or `false`.
	 */
	enableCollaborativeInbox?: string;
	/**
	 * Whether favorite replies are displayed before other replies. Returned by the API as the string `true` or `false`.
	 */
	favoriteRepliesOnTop?: string;
	/**
	 * Whether to include a custom footer in messages. Returned by the API as the string `true` or `false`.
	 */
	includeCustomFooter?: string;
	/**
	 * Whether the group is included in the Global Address List. Returned by the API as the string `true` or `false`.
	 */
	includeInGlobalAddressList?: string;
	/**
	 * Whether messages sent to the group are archived. If `false`, previously archived messages remain in the archive. Returned by the API as the string `true` or `false`.
	 */
	isArchived?: string;
	/**
	 * Whether members can post messages using the group's email address instead of their own. Returned by the API as the string `true` or `false`.
	 */
	membersCanPostAsTheGroup?: string;
	/**
	 * The default sender for members who can post messages as the group. `DEFAULT_SELF`: messages are sent from the user by default. `GROUP`: messages are sent from the group by default.
	 */
	defaultSender?: string;
	/**
	 * The moderation level of incoming messages.
	 */
	messageModerationLevel?: string;
	/**
	 * The primary language of the group, as a language tag.
	 */
	primaryLanguage?: string;
	/**
	 * The name of the group. Maximum 75 characters.
	 */
	name?: string;
	/**
	 * Who receives the default reply. If set to `REPLY_TO_CUSTOM`, also provide a custom reply-to email address.
	 */
	replyTo?: string;
	/**
	 * Whether the message author is notified when the group owner rejects the author's message. Returned by the API as the string `true` or `false`.
	 */
	sendMessageDenyNotification?: string;
	/**
	 * The moderation level of messages detected as spam.
	 */
	spamModerationLevel?: string;
	/**
	 * Who can moderate metadata.
	 */
	whoCanAssistContent?: string;
	/**
	 * Who can add members from outside the organization. Possible values are `ONLY_ADMINS_CAN_ADD_EXTERNAL_MEMBERS` and `END_USERS_CAN_ADD_EXTERNAL_MEMBERS`.
	 */
	whoCanAddExternalMembers?: string;
	/**
	 * Who can contact the group owner.
	 */
	whoCanContactOwner?: string;
	/**
	 * The set of users for whom the group is discoverable.
	 */
	whoCanDiscoverGroup?: string;
	/**
	 * Who can join the group.
	 */
	whoCanJoin?: string;
	/**
	 * Who can leave the group.
	 */
	whoCanLeaveGroup?: string;
	/**
	 * Who can moderate content.
	 */
	whoCanModerateContent?: string;
	/**
	 * Who can manage members.
	 */
	whoCanModerateMembers?: string;
	/**
	 * Who can post messages to the group. Setting `NONE_CAN_POST` while `archiveOnly` is `false` results in an error.
	 */
	whoCanPostMessage?: string;
	/**
	 * Who can view the group's messages.
	 */
	whoCanViewGroup?: string;
	/**
	 * Who can view the group's members list.
	 */
	whoCanViewMembership?: string;
	/**
	 * The content of the custom footer. Maximum 1,000 characters.
	 */
	customFooterText?: string;
	/**
	 * The email address used when replying to a message if the reply-to setting is `REPLY_TO_CUSTOM`.
	 */
	customReplyTo?: string;
	/**
	 * The text of the notification sent to the author of a rejected message. Maximum 10,000 characters. Requires `sendMessageDenyNotification` to be `true`.
	 */
	defaultMessageDenyNotificationText?: string;
};

/**
 * Get group settings
 * Retrieves the settings of a group identified by its email address.
 */
export async function getGroupSettings(
	this: EndpointFunctionThis,
	payload: {
		input: GetGroupSettingsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetGroupSettingsOutput> {
	const response = await this.endpointCaller<GetGroupSettingsOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'getGroupSettings',
		},
		payload,
	);
	return response.output;
}
