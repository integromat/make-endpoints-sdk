// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateGroupSettingsInput = {
	/**
	 * The group's email address.
	 */
	groupUniqueId: string;
	/**
	 * The name of the group. Maximum 75 characters.
	 */
	name?: string;
	/**
	 * The description of the group. Maximum 4,096 characters.
	 */
	description?: string;
	/**
	 * Whether members external to your organization can join the group.
	 */
	allowExternalMembers?: boolean;
	/**
	 * Whether members can post to the group from the web. If `false`, members can only use Gmail to communicate with the group.
	 */
	allowWebPosting?: boolean;
	/**
	 * Whether the group is archived only and inactive. If `true`, new messages are rejected and `whoCanPostMessage` is set to `NONE_CAN_POST`. If reverted to `false`, `whoCanPostMessage` is set to `ALL_MANAGERS_CAN_POST`.
	 */
	archiveOnly?: boolean;
	/**
	 * Whether a collaborative inbox remains turned on for the group.
	 */
	enableCollaborativeInbox?: boolean;
	/**
	 * Whether favorite replies are displayed before other replies.
	 */
	favoriteRepliesOnTop?: boolean;
	/**
	 * Whether to include a custom footer in messages.
	 */
	includeCustomFooter?: boolean;
	/**
	 * The footer text added to messages sent to the group. Maximum 1,000 characters. Used when `includeCustomFooter` is `true`.
	 */
	customFooterText?: string;
	/**
	 * Whether the group is included in the Global Address List.
	 */
	includeInGlobalAddressList?: boolean;
	/**
	 * Whether messages sent to the group are archived. If `false`, previously archived messages remain in the archive.
	 */
	isArchived?: boolean;
	/**
	 * Whether members can post messages using the group's email address instead of their own.
	 */
	membersCanPostAsTheGroup?: boolean;
	/**
	 * The default sender for members who can post messages as the group. `DEFAULT_SELF`: messages are sent from the user by default. `GROUP`: messages are sent from the group by default.
	 */
	defaultSender?: '' | 'DEFAULT_SELF' | 'GROUP';
	/**
	 * The primary language of the group. The value is case-sensitive.
	 */
	primaryLanguage?:
		| ''
		| 'aa'
		| 'ab'
		| 'af'
		| 'am'
		| 'ar'
		| 'as'
		| 'ay'
		| 'az'
		| 'ba'
		| 'be'
		| 'bg'
		| 'bh'
		| 'bi'
		| 'bn'
		| 'bo'
		| 'br'
		| 'bs'
		| 'ca'
		| 'co'
		| 'cs'
		| 'cy'
		| 'da'
		| 'de'
		| 'dz'
		| 'el'
		| 'en'
		| 'en-GB'
		| 'en-US-pseudo'
		| 'en_US'
		| 'eo'
		| 'es'
		| 'et'
		| 'eu'
		| 'fa'
		| 'fi'
		| 'fj'
		| 'fo'
		| 'fr'
		| 'fr-CA'
		| 'fy'
		| 'ga'
		| 'gd'
		| 'gl'
		| 'gn'
		| 'gu'
		| 'ha'
		| 'hi'
		| 'hr'
		| 'hu'
		| 'hy'
		| 'ia'
		| 'id'
		| 'ie'
		| 'ik'
		| 'is'
		| 'it'
		| 'iu'
		| 'iw'
		| 'ja'
		| 'jw'
		| 'ka'
		| 'kk'
		| 'kl'
		| 'km'
		| 'kn'
		| 'ko'
		| 'ks'
		| 'ku'
		| 'ky'
		| 'la'
		| 'ln'
		| 'lo'
		| 'lt'
		| 'lv'
		| 'mg'
		| 'mi'
		| 'mk'
		| 'ml'
		| 'mn'
		| 'mo'
		| 'mr'
		| 'ms'
		| 'mt'
		| 'my'
		| 'na'
		| 'ne'
		| 'nl'
		| 'nn'
		| 'no'
		| 'oc'
		| 'om'
		| 'or'
		| 'pa'
		| 'pl'
		| 'ps'
		| 'pt-BR'
		| 'pt-PT'
		| 'qu'
		| 'rm'
		| 'rn'
		| 'ro'
		| 'ru'
		| 'rw'
		| 'sa'
		| 'sd'
		| 'sg'
		| 'sh'
		| 'si'
		| 'sk'
		| 'sl'
		| 'sm'
		| 'sn'
		| 'so'
		| 'sq'
		| 'sr'
		| 'ss'
		| 'st'
		| 'su'
		| 'sv'
		| 'sw'
		| 'ta'
		| 'te'
		| 'tg'
		| 'th'
		| 'ti'
		| 'tk'
		| 'tl'
		| 'tn'
		| 'to'
		| 'tr'
		| 'ts'
		| 'tt'
		| 'tw'
		| 'ug'
		| 'uk'
		| 'ur'
		| 'uz'
		| 'vi'
		| 'vo'
		| 'wo'
		| 'xh'
		| 'xx-bork'
		| 'xx-elmer'
		| 'xx-hacker'
		| 'xx-klingon'
		| 'xx-piglatin'
		| 'yi'
		| 'yo'
		| 'za'
		| 'zh-CN'
		| 'zh-TW'
		| 'zu';
	/**
	 * The moderation level of incoming messages.
	 */
	messageModerationLevel?:
		| ''
		| 'MODERATE_ALL_MESSAGES'
		| 'MODERATE_NON_MEMBERS'
		| 'MODERATE_NEW_MEMBERS'
		| 'MODERATE_NONE';
	/**
	 * Who receives the default reply. If set to `REPLY_TO_CUSTOM`, also provide a custom reply-to email address.
	 */
	replyTo?:
		| ''
		| 'REPLY_TO_CUSTOM'
		| 'REPLY_TO_SENDER'
		| 'REPLY_TO_LIST'
		| 'REPLY_TO_OWNER'
		| 'REPLY_TO_IGNORE'
		| 'REPLY_TO_MANAGERS';
	/**
	 * The email address used when replying to a message. Required when `replyTo` is `REPLY_TO_CUSTOM`.
	 */
	customReplyTo?: string;
	/**
	 * Whether the message author is notified when the group owner rejects the author's message. If `true`, you can set `defaultMessageDenyNotificationText`.
	 */
	sendMessageDenyNotification?: boolean;
	/**
	 * The text of the notification sent to the author of a rejected message. Requires `sendMessageDenyNotification` to be `true`. Maximum 10,000 characters.
	 */
	defaultMessageDenyNotificationText?: string;
	/**
	 * The moderation level of messages detected as spam.
	 */
	spamModerationLevel?: '' | 'ALLOW' | 'MODERATE' | 'SILENTLY_MODERATE' | 'REJECT';
	/**
	 * Who can moderate metadata.
	 */
	whoCanAssistContent?:
		| ''
		| 'ALL_MEMBERS'
		| 'OWNERS_AND_MANAGERS'
		| 'MANAGERS_ONLY'
		| 'OWNERS_ONLY'
		| 'NONE';
	/**
	 * Who can add members from outside the organization. The API ignores this field if `allowExternalMembers` is `false`.
	 */
	whoCanAddExternalMembers?:
		| ''
		| 'ONLY_ADMINS_CAN_ADD_EXTERNAL_MEMBERS'
		| 'END_USERS_CAN_ADD_EXTERNAL_MEMBERS';
	/**
	 * Who can contact the group owner.
	 */
	whoCanContactOwner?:
		| ''
		| 'ALL_IN_DOMAIN_CAN_CONTACT'
		| 'ALL_MANAGERS_CAN_CONTACT'
		| 'ALL_MEMBERS_CAN_CONTACT'
		| 'ANYONE_CAN_CONTACT';
	/**
	 * The set of users for whom the group is discoverable.
	 */
	whoCanDiscoverGroup?:
		| ''
		| 'ANYONE_CAN_DISCOVER'
		| 'ALL_IN_DOMAIN_CAN_DISCOVER'
		| 'ALL_MEMBERS_CAN_DISCOVER';
	/**
	 * Who can join the group.
	 */
	whoCanJoin?:
		| ''
		| 'ANYONE_CAN_JOIN'
		| 'ALL_IN_DOMAIN_CAN_JOIN'
		| 'INVITED_CAN_JOIN'
		| 'CAN_REQUEST_TO_JOIN';
	/**
	 * Who can leave the group.
	 */
	whoCanLeaveGroup?: '' | 'ALL_MANAGERS_CAN_LEAVE' | 'ALL_MEMBERS_CAN_LEAVE' | 'NONE_CAN_LEAVE';
	/**
	 * Who can moderate content.
	 */
	whoCanModerateContent?: '' | 'ALL_MEMBERS' | 'OWNERS_AND_MANAGERS' | 'OWNERS_ONLY' | 'NONE';
	/**
	 * Who can manage members.
	 */
	whoCanModerateMembers?: '' | 'ALL_MEMBERS' | 'OWNERS_AND_MANAGERS' | 'OWNERS_ONLY' | 'NONE';
	/**
	 * Who can post messages to the group. Setting `NONE_CAN_POST` while `archiveOnly` is `false` results in an error.
	 */
	whoCanPostMessage?:
		| ''
		| 'NONE_CAN_POST'
		| 'ALL_MANAGERS_CAN_POST'
		| 'ALL_MEMBERS_CAN_POST'
		| 'ALL_OWNERS_CAN_POST'
		| 'ALL_IN_DOMAIN_CAN_POST'
		| 'ANYONE_CAN_POST';
	/**
	 * Who can view the group's messages.
	 */
	whoCanViewGroup?:
		| ''
		| 'ANYONE_CAN_VIEW'
		| 'ALL_IN_DOMAIN_CAN_VIEW'
		| 'ALL_MEMBERS_CAN_VIEW'
		| 'ALL_MANAGERS_CAN_VIEW';
	/**
	 * Who can view the group's members list.
	 */
	whoCanViewMembership?:
		| ''
		| 'ALL_IN_DOMAIN_CAN_VIEW'
		| 'ALL_MEMBERS_CAN_VIEW'
		| 'ALL_MANAGERS_CAN_VIEW';
};

export type UpdateGroupSettingsOutput = {
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
 * Update group settings
 * Updates the settings of a group identified by its email address.
 */
export async function updateGroupSettings(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateGroupSettingsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateGroupSettingsOutput> {
	const response = await this.endpointCaller<UpdateGroupSettingsOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'updateGroupSettings',
		},
		payload,
	);
	return response.output;
}
