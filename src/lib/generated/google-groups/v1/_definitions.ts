// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'addAliasForGroup',
		label: 'Add an alias to a group',
		description: 'Adds an alias for the group.',
		context:
			'---\nname: addAliasForGroup\ndescription: Adds an alias for the group.\n---\n\nAdds an alias to a group using the Directory API [groups.aliases.insert](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups.aliases/insert) method.\n\n`alias` is the full alias email address, including the domain.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				alias: {
					type: 'string',
					description:
						'The alias email address to add, including the domain, for example `alias@example.com`.',
				},
			},
			required: ['groupKey', 'alias'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the group.' },
				primaryEmail: {
					type: 'string',
					description: 'The primary email address of the group.',
				},
				alias: { type: 'string', description: 'The alias email address.' },
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For aliases, the value is `admin#directory#alias`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'addMemberToGroup',
		label: 'Add a member to a group',
		description: 'Adds a user to the specified group.',
		context:
			'---\nname: addMemberToGroup\ndescription: Adds a user to the specified group.\n---\n\nAdds a member to a group using the Directory API [members.insert](https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/insert) method. A member can be a user or another group.\n\nThe API returns an error for cycles in group memberships. For example, if group1 is a member of group2, group2 cannot be a member of group1.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				email: {
					type: 'string',
					description:
						"The member's email address. A member can be a user or another group. The email must be unique and cannot be an alias of another group.",
				},
				role: {
					type: 'string',
					description:
						"The member's role in the group.\n`OWNER`: This role can send messages to the group, add or remove members, change member roles, change the group's settings, and delete the group. An owner must be a member of the group.\n`MANAGER`: This role is only available if Google Groups for Business is enabled in the Admin console. A manager can do everything an owner can, except make a member an owner or delete the group.\n`MEMBER`: This role can subscribe to a group, view discussion archives, and view the group's membership list.",
					default: '',
					enum: ['', 'OWNER', 'MANAGER', 'MEMBER'],
				},
				delivery_settings: {
					type: 'string',
					description:
						"The member's mail delivery preferences.\n`ALL_MAIL`: All messages, delivered as soon as they arrive.\n`DAILY`: No more than one message a day.\n`DIGEST`: Up to 25 messages bundled into a single message.\n`DISABLED`: Remove subscription.\n`NONE`: No messages.",
					default: '',
					enum: ['', 'ALL_MAIL', 'DAILY', 'DIGEST', 'DISABLED', 'NONE'],
				},
			},
			required: ['groupKey', 'email'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The unique ID of the group member. A member ID can be used as a member key in request URIs.',
				},
				email: { type: 'string', description: "The member's email address." },
				role: {
					type: 'string',
					description: "The member's role in the group: `OWNER`, `MANAGER`, or `MEMBER`.",
				},
				type: {
					type: 'string',
					description:
						'The type of group member: `CUSTOMER`, `EXTERNAL`, `GROUP`, or `USER`.',
				},
				status: { type: 'string', description: 'Status of the member (immutable).' },
				delivery_settings: {
					type: 'string',
					description:
						"The member's mail delivery preferences: `ALL_MAIL`, `DAILY`, `DIGEST`, `DISABLED`, or `NONE`.",
				},
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For members, the value is `admin#directory#member`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google APIs used by Google Groups, mirroring the "Make an API Call" module.\n\nThe base URL is `https://www.googleapis.com/`. Provide the remaining path in the URL parameter (e.g. `admin/directory/v1/groups` with the query string key `customer` set to `my_customer`). Authentication is handled automatically via the app\'s connection.\n\n- Directory API (groups, members, aliases): `admin/directory/v1/...`\n- Groups Settings API: `groups/v1/groups/{groupEmail}`\n\nRefer to the [Directory API reference](https://developers.google.com/workspace/admin/directory/reference/rest) and the [Groups Settings API reference](https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups) for available endpoints, required parameters, and response schemas.\n',
		accounts: { google: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the part of the URL that comes after `https://www.googleapis.com/`. For example, `admin/directory/v1/groups` with the query string key `customer` set to `my_customer`. Use `admin/directory/v1/...` for the Directory API and `groups/v1/groups/{groupEmail}` for the Groups Settings API.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you.",
					items: {
						type: 'object',
						description: 'The HTTP request header.',
						properties: {
							key: { type: 'string', description: 'The HTTP request header key.' },
							value: {
								type: 'string',
								description: 'The HTTP request header value.',
							},
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description: 'The HTTP request query parameters.',
					items: {
						type: 'object',
						description: 'The HTTP request query parameter.',
						properties: {
							key: {
								type: 'string',
								description: "The HTTP request query parameter's key.",
							},
							value: {
								type: 'string',
								description: "The HTTP request query parameter's value.",
							},
						},
						required: [],
					},
				},
				body: {
					description:
						'The HTTP request body. This input will be ignored if the HTTP request method is `GET`.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: { type: 'number', description: 'The HTTP response status code.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'createGroup',
		label: 'Create a group',
		description: 'Creates a group.',
		context:
			"---\nname: createGroup\ndescription: Creates a group.\n---\n\nCreates a group using the Directory API [groups.insert](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/insert) method.\n\n- `email` is the full group email address (for example `team@example.com`), including the domain.\n- After creation, use `updateGroupSettings` to configure the group's settings and `addMemberToGroup` to add members.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				email: {
					type: 'string',
					description:
						"The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The email must be unique.",
				},
				name: { type: 'string', description: "The group's display name." },
				description: {
					type: 'string',
					description:
						'An extended description to help users determine the purpose of a group. Maximum length is 4,096 characters.',
					maximum: 4096,
				},
			},
			required: ['email'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The unique ID of the group. A group ID can be used as a group key in request URIs.',
				},
				email: { type: 'string', description: "The group's email address." },
				name: { type: 'string', description: "The group's display name." },
				description: {
					type: 'string',
					description:
						'An extended description to help users determine the purpose of the group.',
				},
				adminCreated: {
					type: 'boolean',
					description:
						'Whether the group was created by an administrator rather than a user.',
				},
				directMembersCount: {
					type: 'string',
					description:
						'The number of users that are direct members of the group, as an integer string. Members of child groups are not counted.',
				},
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For groups, the value is `admin#directory#group`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				aliases: {
					type: 'array',
					description: "The list of the group's alias email addresses.",
					items: { type: 'string', description: 'An alias email address of the group.' },
				},
				nonEditableAliases: {
					type: 'array',
					description:
						"The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains.",
					items: {
						type: 'string',
						description: 'A non-editable alias email address of the group.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'deleteAlias',
		label: 'Delete an alias',
		description: 'Removes an alias from a group.',
		context:
			'---\nname: deleteAlias\ndescription: Removes an alias from a group.\n---\n\nRemoves an alias from a group using the Directory API [groups.aliases.delete](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups.aliases/delete) method.\n\nUse `listAliases` to find the aliases of a group. The response body is empty on success.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				alias: { type: 'string', description: 'The alias email address to remove.' },
			},
			required: ['groupKey', 'alias'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'deleteGroup',
		label: 'Delete a group',
		description: 'Deletes a group.',
		context:
			'---\nname: deleteGroup\ndescription: Deletes a group.\n---\n\nPermanently deletes a group using the Directory API [groups.delete](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/delete) method. This action cannot be undone.\n\nThe response body is empty on success.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
			},
			required: ['groupKey'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'deleteMember',
		label: 'Remove a member from a group',
		description: 'Removes a member from a group.',
		context:
			"---\nname: deleteMember\ndescription: Removes a member from a group.\n---\n\nRemoves a member from a group using the Directory API [members.delete](https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/delete) method.\n\nUse `listMembers` to find a member's ID. The response body is empty on success.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				memberKey: {
					type: 'string',
					description:
						"The member's (group or user) primary email address, alias, or unique ID.",
				},
			},
			required: ['groupKey', 'memberKey'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'getGroup',
		label: 'Get a group',
		description: "Retrieves a group's properties.",
		context:
			"---\nname: getGroup\ndescription: Retrieves a group's properties.\n---\n\nRetrieves a group's properties using the Directory API [groups.get](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/get) method.\n\nThis Endpoint returns the group's own data (name, description, aliases, member count). To read the group's settings, use `getGroupSettings`.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
			},
			required: ['groupKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The unique ID of the group. A group ID can be used as a group key in request URIs.',
				},
				email: { type: 'string', description: "The group's email address." },
				name: { type: 'string', description: "The group's display name." },
				description: {
					type: 'string',
					description:
						'An extended description to help users determine the purpose of the group.',
				},
				adminCreated: {
					type: 'boolean',
					description:
						'Whether the group was created by an administrator rather than a user.',
				},
				directMembersCount: {
					type: 'string',
					description:
						'The number of users that are direct members of the group, as an integer string. Members of child groups are not counted.',
				},
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For groups, the value is `admin#directory#group`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				aliases: {
					type: 'array',
					description: "The list of the group's alias email addresses.",
					items: { type: 'string', description: 'An alias email address of the group.' },
				},
				nonEditableAliases: {
					type: 'array',
					description:
						"The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains.",
					items: {
						type: 'string',
						description: 'A non-editable alias email address of the group.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'getGroupSettings',
		label: 'Get group settings',
		description: 'Retrieves the settings of a group identified by its email address.',
		context:
			"---\nname: getGroupSettings\ndescription: Retrieves the settings of a Google Group identified by its email address.\n---\n\nRetrieves the settings of a group (access, posting, moderation, notifications, archiving) using the [Groups Settings API](https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups/get).\n\n- Provide the group's email address in `groupUniqueId`. The group must already exist; get its email from `listGroups` or `getGroup`.\n- This Endpoint returns group *settings* only. To read the group's own data (name, aliases, member count), use the Directory API group endpoints.\n- Boolean settings can be returned as the strings `true` / `false`.\n- Deprecated settings that Google has merged into other settings (for example `whoCanInvite` and `whoCanAdd` into `whoCanModerateMembers`, the `whoCan…Topics` family into `whoCanAssistContent`) are not documented in the output schema. If the API still returns them, ignore them and use the merged setting instead.\n- Use this Endpoint before `updateGroupSettings` to read the current values.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/apps.groups.settings'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupUniqueId: { type: 'string', description: "The group's email address." },
			},
			required: ['groupUniqueId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. Always `groupsSettings#groups`.',
				},
				email: { type: 'string', description: "The group's email address." },
				allowExternalMembers: {
					type: 'string',
					description:
						'Whether members external to your organization can join the group. Returned by the API as the string `true` or `false`.',
				},
				allowWebPosting: {
					type: 'string',
					description:
						'Whether members can post to the group from the web. If `false`, members can only use Gmail to communicate with the group. Returned by the API as the string `true` or `false`.',
				},
				archiveOnly: {
					type: 'string',
					description:
						'Whether the group is archived only and inactive. If `true`, new messages are rejected and `whoCanPostMessage` is set to `NONE_CAN_POST`. If reverted to `false`, `whoCanPostMessage` is set to `ALL_MANAGERS_CAN_POST`. Returned by the API as the string `true` or `false`.',
				},
				customRolesEnabledForSettingsToBeMerged: {
					type: 'string',
					description:
						"Whether the group has a custom role that's included in one of the settings being merged. This field is read-only. Returned by the API as the string `true` or `false`.",
				},
				description: {
					type: 'string',
					description: 'The description of the group. Maximum 4,096 characters.',
				},
				enableCollaborativeInbox: {
					type: 'string',
					description:
						'Whether a collaborative inbox remains turned on for the group. Returned by the API as the string `true` or `false`.',
				},
				favoriteRepliesOnTop: {
					type: 'string',
					description:
						'Whether favorite replies are displayed before other replies. Returned by the API as the string `true` or `false`.',
				},
				includeCustomFooter: {
					type: 'string',
					description:
						'Whether to include a custom footer in messages. Returned by the API as the string `true` or `false`.',
				},
				includeInGlobalAddressList: {
					type: 'string',
					description:
						'Whether the group is included in the Global Address List. Returned by the API as the string `true` or `false`.',
				},
				isArchived: {
					type: 'string',
					description:
						'Whether messages sent to the group are archived. If `false`, previously archived messages remain in the archive. Returned by the API as the string `true` or `false`.',
				},
				membersCanPostAsTheGroup: {
					type: 'string',
					description:
						"Whether members can post messages using the group's email address instead of their own. Returned by the API as the string `true` or `false`.",
				},
				defaultSender: {
					type: 'string',
					description:
						'The default sender for members who can post messages as the group. `DEFAULT_SELF`: messages are sent from the user by default. `GROUP`: messages are sent from the group by default.',
				},
				messageModerationLevel: {
					type: 'string',
					description: 'The moderation level of incoming messages.',
				},
				primaryLanguage: {
					type: 'string',
					description: 'The primary language of the group, as a language tag.',
				},
				name: {
					type: 'string',
					description: 'The name of the group. Maximum 75 characters.',
				},
				replyTo: {
					type: 'string',
					description:
						'Who receives the default reply. If set to `REPLY_TO_CUSTOM`, also provide a custom reply-to email address.',
				},
				sendMessageDenyNotification: {
					type: 'string',
					description:
						"Whether the message author is notified when the group owner rejects the author's message. Returned by the API as the string `true` or `false`.",
				},
				spamModerationLevel: {
					type: 'string',
					description: 'The moderation level of messages detected as spam.',
				},
				whoCanAssistContent: { type: 'string', description: 'Who can moderate metadata.' },
				whoCanAddExternalMembers: {
					type: 'string',
					description:
						'Who can add members from outside the organization. Possible values are `ONLY_ADMINS_CAN_ADD_EXTERNAL_MEMBERS` and `END_USERS_CAN_ADD_EXTERNAL_MEMBERS`.',
				},
				whoCanContactOwner: {
					type: 'string',
					description: 'Who can contact the group owner.',
				},
				whoCanDiscoverGroup: {
					type: 'string',
					description: 'The set of users for whom the group is discoverable.',
				},
				whoCanJoin: { type: 'string', description: 'Who can join the group.' },
				whoCanLeaveGroup: { type: 'string', description: 'Who can leave the group.' },
				whoCanModerateContent: { type: 'string', description: 'Who can moderate content.' },
				whoCanModerateMembers: { type: 'string', description: 'Who can manage members.' },
				whoCanPostMessage: {
					type: 'string',
					description:
						'Who can post messages to the group. Setting `NONE_CAN_POST` while `archiveOnly` is `false` results in an error.',
				},
				whoCanViewGroup: {
					type: 'string',
					description: "Who can view the group's messages.",
				},
				whoCanViewMembership: {
					type: 'string',
					description: "Who can view the group's members list.",
				},
				customFooterText: {
					type: 'string',
					description: 'The content of the custom footer. Maximum 1,000 characters.',
				},
				customReplyTo: {
					type: 'string',
					description:
						'The email address used when replying to a message if the reply-to setting is `REPLY_TO_CUSTOM`.',
				},
				defaultMessageDenyNotificationText: {
					type: 'string',
					description:
						'The text of the notification sent to the author of a rejected message. Maximum 10,000 characters. Requires `sendMessageDenyNotification` to be `true`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'getMember',
		label: 'Get a member',
		description: "Retrieves a group member's properties.",
		context:
			"---\nname: getMember\ndescription: Retrieves a group member's properties.\n---\n\nRetrieves a group member using the Directory API [members.get](https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/get) method.\n\nUse `listMembers` to find a member's ID.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				memberKey: {
					type: 'string',
					description:
						"The member's (group or user) primary email address, alias, or unique ID.",
				},
			},
			required: ['groupKey', 'memberKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The unique ID of the group member. A member ID can be used as a member key in request URIs.',
				},
				email: { type: 'string', description: "The member's email address." },
				role: {
					type: 'string',
					description: "The member's role in the group: `OWNER`, `MANAGER`, or `MEMBER`.",
				},
				type: {
					type: 'string',
					description:
						'The type of group member: `CUSTOMER`, `EXTERNAL`, `GROUP`, or `USER`.',
				},
				status: { type: 'string', description: 'Status of the member (immutable).' },
				delivery_settings: {
					type: 'string',
					description:
						"The member's mail delivery preferences: `ALL_MAIL`, `DAILY`, `DIGEST`, `DISABLED`, or `NONE`.",
				},
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For members, the value is `admin#directory#member`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'listAliases',
		label: 'List aliases',
		description: 'Lists all aliases for a group.',
		context:
			'---\nname: listAliases\ndescription: Lists all aliases for a group.\n---\n\nLists the aliases of a group using the Directory API [groups.aliases.list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups.aliases/list) method. This list is not paginated.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
			},
			required: ['groupKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: { type: 'string', description: 'The kind of the resource.' },
				etag: { type: 'string', description: 'ETag of the resource.' },
				aliases: {
					type: 'array',
					description: 'A list of alias objects.',
					items: {
						type: 'object',
						description: 'A group alias.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the group.' },
							primaryEmail: {
								type: 'string',
								description: 'The primary email address of the group.',
							},
							alias: { type: 'string', description: 'The alias email address.' },
							kind: {
								type: 'string',
								description:
									'The type of the API resource. For aliases, the value is `admin#directory#alias`.',
							},
							etag: { type: 'string', description: 'ETag of the resource.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'listGroups',
		label: 'List groups',
		description: 'Retrieves all groups of a domain or of a user given a user key (paginated).',
		context:
			'---\nname: listGroups\ndescription: Retrieves all groups of a domain or of a user given a user key (paginated).\n---\n\nRetrieves groups using the Directory API [groups.list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/list) method.\n\n- Provide either `customer` or `domain`; the API requires one of them. Use `customer` (a customer ID, or `my_customer` for your own account) to list the groups of all domains of the account, or `domain` to list the groups of one domain.\n- Use `userKey` to list only the groups that a user is a member of. `userKey` cannot be combined with `customer`.\n- Results are sorted by group email.\n- This Endpoint returns one page. If the response contains `nextPageToken`, call the Endpoint again with it as `pageToken` to get the next page.\n- Use `getGroup` to get a single group.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				customer: {
					type: 'string',
					description:
						"The unique ID of the customer's Google Workspace account, or the `my_customer` alias for your own account. Use this field instead of `domain` to list the groups of all domains of a multi-domain account. Either `customer` or `domain` is required. Cannot be combined with `userKey`.",
				},
				domain: {
					type: 'string',
					description:
						'The domain name. Use this field to get groups from only one domain. To return the groups of all domains of an account, use `customer` instead. Either `customer` or `domain` is required.',
				},
				query: {
					type: 'string',
					description:
						'Query string search. Contains one or more search clauses, each with a field, operator, and value, for example `memberKey=address@email.com`. See [Search for groups](https://developers.google.com/workspace/admin/directory/v1/guides/search-groups) for the available options.',
				},
				userKey: {
					type: 'string',
					description:
						'Email or immutable ID of a user. If set, only the groups that this user is a member of are listed. Cannot be used together with `customer`.',
				},
				sortOrder: {
					type: 'string',
					description:
						'Whether to return results in ascending or descending order. Results are sorted by email.',
					default: '',
					enum: ['', 'ASCENDING', 'DESCENDING'],
				},
				maxResults: {
					type: 'number',
					description:
						'Maximum number of results to return. The maximum allowed value is 200.',
					maximum: 200,
				},
				pageToken: {
					type: 'string',
					description:
						'Token to specify the next page in the list. Use the `nextPageToken` value from the previous response.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: { type: 'string', description: 'The kind of the resource.' },
				etag: { type: 'string', description: 'ETag of the resource.' },
				groups: {
					type: 'array',
					description: 'A list of group objects.',
					items: {
						type: 'object',
						description: 'A group.',
						properties: {
							id: {
								type: 'string',
								description:
									'The unique ID of the group. A group ID can be used as a group key in request URIs.',
							},
							email: { type: 'string', description: "The group's email address." },
							name: { type: 'string', description: "The group's display name." },
							description: {
								type: 'string',
								description:
									'An extended description to help users determine the purpose of the group.',
							},
							adminCreated: {
								type: 'boolean',
								description:
									'Whether the group was created by an administrator rather than a user.',
							},
							directMembersCount: {
								type: 'string',
								description:
									'The number of users that are direct members of the group, as an integer string. Members of child groups are not counted.',
							},
							kind: {
								type: 'string',
								description:
									'The type of the API resource. For groups, the value is `admin#directory#group`.',
							},
							etag: { type: 'string', description: 'ETag of the resource.' },
							aliases: {
								type: 'array',
								description: "The list of the group's alias email addresses.",
								items: {
									type: 'string',
									description: 'An alias email address of the group.',
								},
							},
							nonEditableAliases: {
								type: 'array',
								description:
									"The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains.",
								items: {
									type: 'string',
									description: 'A non-editable alias email address of the group.',
								},
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description:
						'Token used to access the next page of the result. Pass it as `pageToken` to get the next page.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'listMembers',
		label: 'List members',
		description: 'Retrieves a paginated list of all members in a group.',
		context:
			'---\nname: listMembers\ndescription: Retrieves a paginated list of all members in a group.\n---\n\nLists the members of a group using the Directory API [members.list](https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/list) method.\n\n- If `roles` is empty, members of all roles are returned.\n- This Endpoint returns one page. If the response contains `nextPageToken`, call the Endpoint again with it as `pageToken` to get the next page.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				roles: {
					type: 'string',
					description:
						'Return only members with these roles. If empty, members of all roles are returned.',
					default: '',
					enum: ['', 'OWNER', 'MANAGER', 'MEMBER'],
				},
				includeDerivedMembership: {
					type: 'boolean',
					description: 'Whether to list indirect memberships. The default is `false`.',
				},
				maxResults: {
					type: 'number',
					description:
						'Maximum number of results to return. The maximum allowed value is 200.',
					maximum: 200,
				},
				pageToken: {
					type: 'string',
					description:
						'Token to specify the next page in the list. Use the `nextPageToken` value from the previous response.',
				},
			},
			required: ['groupKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: { type: 'string', description: 'The kind of the resource.' },
				etag: { type: 'string', description: 'ETag of the resource.' },
				members: {
					type: 'array',
					description: 'A list of member objects.',
					items: {
						type: 'object',
						description: 'A group member.',
						properties: {
							id: {
								type: 'string',
								description:
									'The unique ID of the group member. A member ID can be used as a member key in request URIs.',
							},
							email: { type: 'string', description: "The member's email address." },
							role: {
								type: 'string',
								description:
									"The member's role in the group: `OWNER`, `MANAGER`, or `MEMBER`.",
							},
							type: {
								type: 'string',
								description:
									'The type of group member: `CUSTOMER`, `EXTERNAL`, `GROUP`, or `USER`.',
							},
							status: {
								type: 'string',
								description: 'Status of the member (immutable).',
							},
							delivery_settings: {
								type: 'string',
								description:
									"The member's mail delivery preferences: `ALL_MAIL`, `DAILY`, `DIGEST`, `DISABLED`, or `NONE`.",
							},
							kind: {
								type: 'string',
								description:
									'The type of the API resource. For members, the value is `admin#directory#member`.',
							},
							etag: { type: 'string', description: 'ETag of the resource.' },
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description:
						'Token used to access the next page of the result. Pass it as `pageToken` to get the next page.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'updateGroupSettings',
		label: 'Update group settings',
		description: 'Updates the settings of a group identified by its email address.',
		context:
			"---\nname: updateGroupSettings\ndescription: Updates the settings of a Google Group identified by its email address.\n---\n\nUpdates the settings of a group using the [Groups Settings API](https://developers.google.com/workspace/admin/groups-settings/v1/reference/groups/patch) with patch semantics: only the settings you provide are changed, omitted settings keep their current values.\n\n- Provide the group's email address in `groupUniqueId`. The group must already exist; create it with `createGroup` first.\n- Call `getGroupSettings` first to read the current values before changing them.\n- Empty values are not sent, so a text setting cannot be cleared with an empty string.\n- `archiveOnly` set to `true` also sets `whoCanPostMessage` to `NONE_CAN_POST`. Reverting it to `false` sets `whoCanPostMessage` to `ALL_MANAGERS_CAN_POST`.\n- Setting `whoCanPostMessage` to `NONE_CAN_POST` while `archiveOnly` is `false` results in an error.\n- `replyTo` set to `REPLY_TO_CUSTOM` requires `customReplyTo`.\n- `defaultMessageDenyNotificationText` requires `sendMessageDenyNotification` to be `true`.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/apps.groups.settings'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupUniqueId: { type: 'string', description: "The group's email address." },
				name: {
					type: 'string',
					description: 'The name of the group. Maximum 75 characters.',
					maximum: 75,
				},
				description: {
					type: 'string',
					description: 'The description of the group. Maximum 4,096 characters.',
					maximum: 4096,
				},
				allowExternalMembers: {
					type: 'boolean',
					description:
						'Whether members external to your organization can join the group.',
				},
				allowWebPosting: {
					type: 'boolean',
					description:
						'Whether members can post to the group from the web. If `false`, members can only use Gmail to communicate with the group.',
				},
				archiveOnly: {
					type: 'boolean',
					description:
						'Whether the group is archived only and inactive. If `true`, new messages are rejected and `whoCanPostMessage` is set to `NONE_CAN_POST`. If reverted to `false`, `whoCanPostMessage` is set to `ALL_MANAGERS_CAN_POST`.',
				},
				enableCollaborativeInbox: {
					type: 'boolean',
					description: 'Whether a collaborative inbox remains turned on for the group.',
				},
				favoriteRepliesOnTop: {
					type: 'boolean',
					description: 'Whether favorite replies are displayed before other replies.',
				},
				includeCustomFooter: {
					type: 'boolean',
					description: 'Whether to include a custom footer in messages.',
				},
				customFooterText: {
					type: 'string',
					description:
						'The footer text added to messages sent to the group. Maximum 1,000 characters. Used when `includeCustomFooter` is `true`.',
					maximum: 1000,
				},
				includeInGlobalAddressList: {
					type: 'boolean',
					description: 'Whether the group is included in the Global Address List.',
				},
				isArchived: {
					type: 'boolean',
					description:
						'Whether messages sent to the group are archived. If `false`, previously archived messages remain in the archive.',
				},
				membersCanPostAsTheGroup: {
					type: 'boolean',
					description:
						"Whether members can post messages using the group's email address instead of their own.",
				},
				defaultSender: {
					type: 'string',
					description:
						'The default sender for members who can post messages as the group. `DEFAULT_SELF`: messages are sent from the user by default. `GROUP`: messages are sent from the group by default.',
					default: '',
					enum: ['', 'DEFAULT_SELF', 'GROUP'],
				},
				primaryLanguage: {
					type: 'string',
					description: 'The primary language of the group. The value is case-sensitive.',
					default: '',
					enum: [
						'',
						'aa',
						'ab',
						'af',
						'am',
						'ar',
						'as',
						'ay',
						'az',
						'ba',
						'be',
						'bg',
						'bh',
						'bi',
						'bn',
						'bo',
						'br',
						'bs',
						'ca',
						'co',
						'cs',
						'cy',
						'da',
						'de',
						'dz',
						'el',
						'en',
						'en-GB',
						'en-US-pseudo',
						'en_US',
						'eo',
						'es',
						'et',
						'eu',
						'fa',
						'fi',
						'fj',
						'fo',
						'fr',
						'fr-CA',
						'fy',
						'ga',
						'gd',
						'gl',
						'gn',
						'gu',
						'ha',
						'hi',
						'hr',
						'hu',
						'hy',
						'ia',
						'id',
						'ie',
						'ik',
						'is',
						'it',
						'iu',
						'iw',
						'ja',
						'jw',
						'ka',
						'kk',
						'kl',
						'km',
						'kn',
						'ko',
						'ks',
						'ku',
						'ky',
						'la',
						'ln',
						'lo',
						'lt',
						'lv',
						'mg',
						'mi',
						'mk',
						'ml',
						'mn',
						'mo',
						'mr',
						'ms',
						'mt',
						'my',
						'na',
						'ne',
						'nl',
						'nn',
						'no',
						'oc',
						'om',
						'or',
						'pa',
						'pl',
						'ps',
						'pt-BR',
						'pt-PT',
						'qu',
						'rm',
						'rn',
						'ro',
						'ru',
						'rw',
						'sa',
						'sd',
						'sg',
						'sh',
						'si',
						'sk',
						'sl',
						'sm',
						'sn',
						'so',
						'sq',
						'sr',
						'ss',
						'st',
						'su',
						'sv',
						'sw',
						'ta',
						'te',
						'tg',
						'th',
						'ti',
						'tk',
						'tl',
						'tn',
						'to',
						'tr',
						'ts',
						'tt',
						'tw',
						'ug',
						'uk',
						'ur',
						'uz',
						'vi',
						'vo',
						'wo',
						'xh',
						'xx-bork',
						'xx-elmer',
						'xx-hacker',
						'xx-klingon',
						'xx-piglatin',
						'yi',
						'yo',
						'za',
						'zh-CN',
						'zh-TW',
						'zu',
					],
				},
				messageModerationLevel: {
					type: 'string',
					description: 'The moderation level of incoming messages.',
					default: '',
					enum: [
						'',
						'MODERATE_ALL_MESSAGES',
						'MODERATE_NON_MEMBERS',
						'MODERATE_NEW_MEMBERS',
						'MODERATE_NONE',
					],
				},
				replyTo: {
					type: 'string',
					description:
						'Who receives the default reply. If set to `REPLY_TO_CUSTOM`, also provide a custom reply-to email address.',
					default: '',
					enum: [
						'',
						'REPLY_TO_CUSTOM',
						'REPLY_TO_SENDER',
						'REPLY_TO_LIST',
						'REPLY_TO_OWNER',
						'REPLY_TO_IGNORE',
						'REPLY_TO_MANAGERS',
					],
				},
				customReplyTo: {
					type: 'string',
					description:
						'The email address used when replying to a message. Required when `replyTo` is `REPLY_TO_CUSTOM`.',
				},
				sendMessageDenyNotification: {
					type: 'boolean',
					description:
						"Whether the message author is notified when the group owner rejects the author's message. If `true`, you can set `defaultMessageDenyNotificationText`.",
				},
				defaultMessageDenyNotificationText: {
					type: 'string',
					description:
						'The text of the notification sent to the author of a rejected message. Requires `sendMessageDenyNotification` to be `true`. Maximum 10,000 characters.',
					maximum: 10_000,
				},
				spamModerationLevel: {
					type: 'string',
					description: 'The moderation level of messages detected as spam.',
					default: '',
					enum: ['', 'ALLOW', 'MODERATE', 'SILENTLY_MODERATE', 'REJECT'],
				},
				whoCanAssistContent: {
					type: 'string',
					description: 'Who can moderate metadata.',
					default: '',
					enum: [
						'',
						'ALL_MEMBERS',
						'OWNERS_AND_MANAGERS',
						'MANAGERS_ONLY',
						'OWNERS_ONLY',
						'NONE',
					],
				},
				whoCanAddExternalMembers: {
					type: 'string',
					description:
						'Who can add members from outside the organization. The API ignores this field if `allowExternalMembers` is `false`.',
					default: '',
					enum: [
						'',
						'ONLY_ADMINS_CAN_ADD_EXTERNAL_MEMBERS',
						'END_USERS_CAN_ADD_EXTERNAL_MEMBERS',
					],
				},
				whoCanContactOwner: {
					type: 'string',
					description: 'Who can contact the group owner.',
					default: '',
					enum: [
						'',
						'ALL_IN_DOMAIN_CAN_CONTACT',
						'ALL_MANAGERS_CAN_CONTACT',
						'ALL_MEMBERS_CAN_CONTACT',
						'ANYONE_CAN_CONTACT',
					],
				},
				whoCanDiscoverGroup: {
					type: 'string',
					description: 'The set of users for whom the group is discoverable.',
					default: '',
					enum: [
						'',
						'ANYONE_CAN_DISCOVER',
						'ALL_IN_DOMAIN_CAN_DISCOVER',
						'ALL_MEMBERS_CAN_DISCOVER',
					],
				},
				whoCanJoin: {
					type: 'string',
					description: 'Who can join the group.',
					default: '',
					enum: [
						'',
						'ANYONE_CAN_JOIN',
						'ALL_IN_DOMAIN_CAN_JOIN',
						'INVITED_CAN_JOIN',
						'CAN_REQUEST_TO_JOIN',
					],
				},
				whoCanLeaveGroup: {
					type: 'string',
					description: 'Who can leave the group.',
					default: '',
					enum: ['', 'ALL_MANAGERS_CAN_LEAVE', 'ALL_MEMBERS_CAN_LEAVE', 'NONE_CAN_LEAVE'],
				},
				whoCanModerateContent: {
					type: 'string',
					description: 'Who can moderate content.',
					default: '',
					enum: ['', 'ALL_MEMBERS', 'OWNERS_AND_MANAGERS', 'OWNERS_ONLY', 'NONE'],
				},
				whoCanModerateMembers: {
					type: 'string',
					description: 'Who can manage members.',
					default: '',
					enum: ['', 'ALL_MEMBERS', 'OWNERS_AND_MANAGERS', 'OWNERS_ONLY', 'NONE'],
				},
				whoCanPostMessage: {
					type: 'string',
					description:
						'Who can post messages to the group. Setting `NONE_CAN_POST` while `archiveOnly` is `false` results in an error.',
					default: '',
					enum: [
						'',
						'NONE_CAN_POST',
						'ALL_MANAGERS_CAN_POST',
						'ALL_MEMBERS_CAN_POST',
						'ALL_OWNERS_CAN_POST',
						'ALL_IN_DOMAIN_CAN_POST',
						'ANYONE_CAN_POST',
					],
				},
				whoCanViewGroup: {
					type: 'string',
					description: "Who can view the group's messages.",
					default: '',
					enum: [
						'',
						'ANYONE_CAN_VIEW',
						'ALL_IN_DOMAIN_CAN_VIEW',
						'ALL_MEMBERS_CAN_VIEW',
						'ALL_MANAGERS_CAN_VIEW',
					],
				},
				whoCanViewMembership: {
					type: 'string',
					description: "Who can view the group's members list.",
					default: '',
					enum: [
						'',
						'ALL_IN_DOMAIN_CAN_VIEW',
						'ALL_MEMBERS_CAN_VIEW',
						'ALL_MANAGERS_CAN_VIEW',
					],
				},
			},
			required: ['groupUniqueId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. Always `groupsSettings#groups`.',
				},
				email: { type: 'string', description: "The group's email address." },
				allowExternalMembers: {
					type: 'string',
					description:
						'Whether members external to your organization can join the group. Returned by the API as the string `true` or `false`.',
				},
				allowWebPosting: {
					type: 'string',
					description:
						'Whether members can post to the group from the web. If `false`, members can only use Gmail to communicate with the group. Returned by the API as the string `true` or `false`.',
				},
				archiveOnly: {
					type: 'string',
					description:
						'Whether the group is archived only and inactive. If `true`, new messages are rejected and `whoCanPostMessage` is set to `NONE_CAN_POST`. If reverted to `false`, `whoCanPostMessage` is set to `ALL_MANAGERS_CAN_POST`. Returned by the API as the string `true` or `false`.',
				},
				customRolesEnabledForSettingsToBeMerged: {
					type: 'string',
					description:
						"Whether the group has a custom role that's included in one of the settings being merged. This field is read-only. Returned by the API as the string `true` or `false`.",
				},
				description: {
					type: 'string',
					description: 'The description of the group. Maximum 4,096 characters.',
				},
				enableCollaborativeInbox: {
					type: 'string',
					description:
						'Whether a collaborative inbox remains turned on for the group. Returned by the API as the string `true` or `false`.',
				},
				favoriteRepliesOnTop: {
					type: 'string',
					description:
						'Whether favorite replies are displayed before other replies. Returned by the API as the string `true` or `false`.',
				},
				includeCustomFooter: {
					type: 'string',
					description:
						'Whether to include a custom footer in messages. Returned by the API as the string `true` or `false`.',
				},
				includeInGlobalAddressList: {
					type: 'string',
					description:
						'Whether the group is included in the Global Address List. Returned by the API as the string `true` or `false`.',
				},
				isArchived: {
					type: 'string',
					description:
						'Whether messages sent to the group are archived. If `false`, previously archived messages remain in the archive. Returned by the API as the string `true` or `false`.',
				},
				membersCanPostAsTheGroup: {
					type: 'string',
					description:
						"Whether members can post messages using the group's email address instead of their own. Returned by the API as the string `true` or `false`.",
				},
				defaultSender: {
					type: 'string',
					description:
						'The default sender for members who can post messages as the group. `DEFAULT_SELF`: messages are sent from the user by default. `GROUP`: messages are sent from the group by default.',
				},
				messageModerationLevel: {
					type: 'string',
					description: 'The moderation level of incoming messages.',
				},
				primaryLanguage: {
					type: 'string',
					description: 'The primary language of the group, as a language tag.',
				},
				name: {
					type: 'string',
					description: 'The name of the group. Maximum 75 characters.',
				},
				replyTo: {
					type: 'string',
					description:
						'Who receives the default reply. If set to `REPLY_TO_CUSTOM`, also provide a custom reply-to email address.',
				},
				sendMessageDenyNotification: {
					type: 'string',
					description:
						"Whether the message author is notified when the group owner rejects the author's message. Returned by the API as the string `true` or `false`.",
				},
				spamModerationLevel: {
					type: 'string',
					description: 'The moderation level of messages detected as spam.',
				},
				whoCanAssistContent: { type: 'string', description: 'Who can moderate metadata.' },
				whoCanAddExternalMembers: {
					type: 'string',
					description:
						'Who can add members from outside the organization. Possible values are `ONLY_ADMINS_CAN_ADD_EXTERNAL_MEMBERS` and `END_USERS_CAN_ADD_EXTERNAL_MEMBERS`.',
				},
				whoCanContactOwner: {
					type: 'string',
					description: 'Who can contact the group owner.',
				},
				whoCanDiscoverGroup: {
					type: 'string',
					description: 'The set of users for whom the group is discoverable.',
				},
				whoCanJoin: { type: 'string', description: 'Who can join the group.' },
				whoCanLeaveGroup: { type: 'string', description: 'Who can leave the group.' },
				whoCanModerateContent: { type: 'string', description: 'Who can moderate content.' },
				whoCanModerateMembers: { type: 'string', description: 'Who can manage members.' },
				whoCanPostMessage: {
					type: 'string',
					description:
						'Who can post messages to the group. Setting `NONE_CAN_POST` while `archiveOnly` is `false` results in an error.',
				},
				whoCanViewGroup: {
					type: 'string',
					description: "Who can view the group's messages.",
				},
				whoCanViewMembership: {
					type: 'string',
					description: "Who can view the group's members list.",
				},
				customFooterText: {
					type: 'string',
					description: 'The content of the custom footer. Maximum 1,000 characters.',
				},
				customReplyTo: {
					type: 'string',
					description:
						'The email address used when replying to a message if the reply-to setting is `REPLY_TO_CUSTOM`.',
				},
				defaultMessageDenyNotificationText: {
					type: 'string',
					description:
						'The text of the notification sent to the author of a rejected message. Maximum 10,000 characters. Requires `sendMessageDenyNotification` to be `true`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'updateMember',
		label: 'Update a member',
		description: 'Updates the membership of a user in the specified group.',
		context:
			'---\nname: updateMember\ndescription: Updates the membership of a user in the specified group.\n---\n\nUpdates a member of a group using the Directory API [members.update](https://developers.google.com/workspace/admin/directory/reference/rest/v1/members/update) method.\n\n- Call `getMember` first to read the current values before changing them.\n- Empty values are not sent.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				memberKey: {
					type: 'string',
					description:
						"The member's (group or user) primary email address, alias, or unique ID.",
				},
				email: {
					type: 'string',
					description:
						"The member's email address. A member can be a user or another group. The email must be unique and cannot be an alias of another group.",
				},
				role: {
					type: 'string',
					description:
						"The member's role in the group.\n`OWNER`: This role can send messages to the group, add or remove members, change member roles, change the group's settings, and delete the group. An owner must be a member of the group.\n`MANAGER`: This role is only available if Google Groups for Business is enabled in the Admin console. A manager can do everything an owner can, except make a member an owner or delete the group.\n`MEMBER`: This role can subscribe to a group, view discussion archives, and view the group's membership list.",
					default: '',
					enum: ['', 'OWNER', 'MANAGER', 'MEMBER'],
				},
				delivery_settings: {
					type: 'string',
					description:
						"The member's mail delivery preferences.\n`ALL_MAIL`: All messages, delivered as soon as they arrive.\n`DAILY`: No more than one message a day.\n`DIGEST`: Up to 25 messages bundled into a single message.\n`DISABLED`: Remove subscription.\n`NONE`: No messages.",
					default: '',
					enum: ['', 'ALL_MAIL', 'DAILY', 'DIGEST', 'DISABLED', 'NONE'],
				},
			},
			required: ['groupKey', 'memberKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The unique ID of the group member. A member ID can be used as a member key in request URIs.',
				},
				email: { type: 'string', description: "The member's email address." },
				role: {
					type: 'string',
					description: "The member's role in the group: `OWNER`, `MANAGER`, or `MEMBER`.",
				},
				type: {
					type: 'string',
					description:
						'The type of group member: `CUSTOMER`, `EXTERNAL`, `GROUP`, or `USER`.',
				},
				status: { type: 'string', description: 'Status of the member (immutable).' },
				delivery_settings: {
					type: 'string',
					description:
						"The member's mail delivery preferences: `ALL_MAIL`, `DAILY`, `DIGEST`, `DISABLED`, or `NONE`.",
				},
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For members, the value is `admin#directory#member`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-groups',
		appVersion: 1,
		endpointName: 'updatesGroup',
		label: 'Update a group',
		description: "Updates a group's properties.",
		context:
			"---\nname: updatesGroup\ndescription: Updates a group's properties.\n---\n\nUpdates a group using the Directory API [groups.update](https://developers.google.com/workspace/admin/directory/reference/rest/v1/groups/update) method.\n\n- Call `getGroup` first to read the current values before changing them.\n- Empty values are not sent, so a text property cannot be cleared with an empty string.\n- To change the group's settings, use `updateGroupSettings`.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/admin.directory.group'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupKey: {
					type: 'string',
					description: "The group's email address, group alias, or unique group ID.",
				},
				email: {
					type: 'string',
					description:
						"The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The email must be unique.",
				},
				name: { type: 'string', description: "The group's display name." },
				description: {
					type: 'string',
					description:
						'An extended description to help users determine the purpose of a group. Maximum length is 4,096 characters.',
					maximum: 4096,
				},
			},
			required: ['groupKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The unique ID of the group. A group ID can be used as a group key in request URIs.',
				},
				email: { type: 'string', description: "The group's email address." },
				name: { type: 'string', description: "The group's display name." },
				description: {
					type: 'string',
					description:
						'An extended description to help users determine the purpose of the group.',
				},
				adminCreated: {
					type: 'boolean',
					description:
						'Whether the group was created by an administrator rather than a user.',
				},
				directMembersCount: {
					type: 'string',
					description:
						'The number of users that are direct members of the group, as an integer string. Members of child groups are not counted.',
				},
				kind: {
					type: 'string',
					description:
						'The type of the API resource. For groups, the value is `admin#directory#group`.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				aliases: {
					type: 'array',
					description: "The list of the group's alias email addresses.",
					items: { type: 'string', description: 'An alias email address of the group.' },
				},
				nonEditableAliases: {
					type: 'array',
					description:
						"The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains.",
					items: {
						type: 'string',
						description: 'A non-editable alias email address of the group.',
					},
				},
			},
			required: [],
		},
	},
];
