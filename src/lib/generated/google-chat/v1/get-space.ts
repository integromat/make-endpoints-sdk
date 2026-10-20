// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetSpaceInput = {
	/**
	 * The resource name of the space, in the form `spaces/{space}`. You can get the space ID from the response of the List spaces endpoint.
	 */
	name: string;
};

export type GetSpaceOutput = {
	/**
	 * For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization. To support admin install, your Chat app must feature direct messaging.
	 */
	adminInstalled?: boolean;
	/**
	 * Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings. Reading and updating permission settings supports: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. Only populated and settable when the Chat app created the space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
	 */
	permissionSettings?: {
		/**
		 * Setting for updating space name, avatar, description and guidelines.
		 */
		modifySpaceDetails?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for managing webhooks in a space.
		 */
		manageWebhooks?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for managing members and groups in a space.
		 */
		manageMembersAndGroups?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for replying to messages in a space.
		 */
		replyMessages?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for posting messages in a space.
		 */
		postMessages?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for viewing space membership. Must be specified together with `AccessPermissionSettings.view_space_membership_setting` in the update mask and request body when updating who can view space membership. When restricting view access to specific roles (for example, space managers or assistant managers only), specify the desired role permissions here and provide an empty `AccessPermissionSettings.view_space_membership_setting` in the same request. If a target audience is configured in `AccessPermissionSettings.view_space_membership_setting`, this setting must be granted to all members.
		 */
		viewSpaceMembership?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for managing apps in a space.
		 */
		manageApps?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for toggling space history on and off.
		 */
		toggleHistory?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
		/**
		 * Setting for using @all in a space.
		 */
		useAtMentionAll?: {
			/**
			 * Whether space owners (`ROLE_MANAGER`) have this permission.
			 */
			managersAllowed?: boolean;
			/**
			 * Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.
			 */
			assistantManagersAllowed?: boolean;
			/**
			 * Whether basic space members (`ROLE_MEMBER`) have this permission.
			 */
			membersAllowed?: boolean;
		};
	};
	/**
	 * For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.
	 */
	createTime?: string;
	/**
	 * The customer id of the domain of the space. Required only when creating a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and `SpaceType` is `SPACE`, otherwise should not be set. In the format `customers/{customer}`, where `customer` is the `id` from the [Admin SDK customer resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). Private apps can also use the `customers/my_customer` alias to create the space in the same Google Workspace organization as the app. This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.
	 */
	customer?: string;
	/**
	 * The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.
	 */
	spaceType?: '' | 'SPACE_TYPE_UNSPECIFIED' | 'SPACE' | 'GROUP_CHAT' | 'DIRECT_MESSAGE';
	/**
	 * Timestamp of the last message in the space.
	 */
	lastActiveTime?: string;
	/**
	 * The space's display name. Required when [creating a space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) with a `spaceType` of `SPACE`. If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.
	 */
	displayName?: string;
	/**
	 * Resource name of the space. Format: `spaces/{space}` Where `{space}` represents the system-assigned ID for the space. You can obtain the space ID by calling the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method or from the space URL. For example, if the space URL is `https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA`, the space ID is `AAAAAAAAA`.
	 */
	name?: string;
	/**
	 * The threading state in the Chat space.
	 */
	spaceThreadingState?:
		| ''
		| 'SPACE_THREADING_STATE_UNSPECIFIED'
		| 'THREADED_MESSAGES'
		| 'GROUPED_MESSAGES'
		| 'UNTHREADED_MESSAGES';
	/**
	 * Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user. For existing spaces, this field is output only.
	 */
	externalUserAllowed?: boolean;
	/**
	 * Specifies the [access setting](https://support.google.com/chat/answer/11971020) of the space. Only populated when the `space_type` is `SPACE`.
	 */
	accessSettings?: {
		/**
		 * The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`. Reading the target audience supports: - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. This field is not populated when using the `chat.bot` scope with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). Setting the target audience requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
		 */
		audience?: string;
		/**
		 * Indicates the access state of the space.
		 */
		accessState?: '' | 'ACCESS_STATE_UNSPECIFIED' | 'PRIVATE' | 'DISCOVERABLE';
		/**
		 * Access permission settings for the space. To set the target audience when creating a space, specify the `accessSettings.audience` field in your request.
		 */
		accessPermissionSettings?: {
			/**
			 * Access permission setting for joining the space.
			 */
			joinSpaceSetting?: {
				/**
				 * Unordered list. Allowed principals for this permission.
				 *
				 * Items: A principal representing an entity granted access.
				 */
				principals?: {
					/**
					 * An audience.
					 */
					audience?: {
						/**
						 * The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.
						 */
						name?: string;
					};
				}[];
			};
			/**
			 * Access permission setting for discovering the space.
			 */
			discoverSpaceSetting?: {
				/**
				 * Unordered list. Allowed principals for this permission.
				 *
				 * Items: A principal representing an entity granted access.
				 */
				principals?: {
					/**
					 * An audience.
					 */
					audience?: {
						/**
						 * The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.
						 */
						name?: string;
					};
				}[];
			};
			/**
			 * Access permission setting for viewing space membership. Must be specified together with `PermissionSettings.view_space_membership` in the update mask and request body when updating who can view space membership. When granting view access to a target audience, you must also grant `PermissionSettings.view_space_membership` to all members in the same request. To remove an existing target audience (for example, to restrict view access to space managers or assistant managers only), specify an empty `AccessPermissionSetting` (with no `principals`).
			 */
			viewSpaceMembershipSetting?: {
				/**
				 * Unordered list. Allowed principals for this permission.
				 *
				 * Items: A principal representing an entity granted access.
				 */
				principals?: {
					/**
					 * An audience.
					 */
					audience?: {
						/**
						 * The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.
						 */
						name?: string;
					};
				}[];
			};
		};
	};
	/**
	 * The count of joined memberships grouped by member type. Populated when the `space_type` is `SPACE`, `DIRECT_MESSAGE` or `GROUP_CHAT`.
	 */
	membershipCount?: {
		/**
		 * Count of all groups that have directly joined the space.
		 */
		joinedGroupCount?: number;
		/**
		 * Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.
		 */
		joinedDirectHumanUserCount?: number;
	};
	/**
	 * Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete. Creating a space in `Import Mode`requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
	 */
	importMode?: boolean;
	/**
	 * Whether the space is a DM between a Chat app and a single human.
	 */
	singleUserBotDm?: boolean;
	/**
	 * The time when the space will be automatically deleted by the system if it remains in import mode. Each space created in import mode must exit this mode before this expire time using `spaces.completeImport`. This field is only populated for spaces that were created with import mode.
	 */
	importModeExpireTime?: string;
	/**
	 * Details about the space including description and rules.
	 */
	spaceDetails?: {
		/**
		 * The space's rules, expectations, and etiquette. Supports up to 5,000 characters.
		 */
		guidelines?: string;
		/**
		 * A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 4,096 characters.
		 */
		description?: string;
	};
	/**
	 * The message history state for messages and threads in this space.
	 */
	spaceHistoryState?: '' | 'HISTORY_STATE_UNSPECIFIED' | 'HISTORY_OFF' | 'HISTORY_ON';
	/**
	 * The URI for a user to access the space.
	 */
	spaceUri?: string;
};

/**
 * Get a space
 * Returns details about a space.
 */
export async function getSpace(
	this: EndpointFunctionThis,
	payload: {
		input: GetSpaceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetSpaceOutput> {
	const response = await this.endpointCaller<GetSpaceOutput>(
		{
			appName: 'google-chat',
			appVersion: 1,
			endpointName: 'getSpace',
		},
		payload,
	);
	return response.output;
}
