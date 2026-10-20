// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'addMemberToGroup',
		label: 'Add a member to a group',
		description: 'Adds a member to a Microsoft 365 group.',
		context:
			'---\nname: addMemberToGroup\ndescription: Adds a member to a Microsoft 365 group.\n---\n\nAdds a member to a Microsoft 365 group or security group via a directory object reference. The `directoryObjectUri` must be the full resource URI of the user or service principal to add, e.g. `https://graph.microsoft.com/v1.0/users/{userId}`.\n\nReturns HTTP 204 No Content on success (empty output).\n\nRefer to the [Microsoft Graph API reference — Add member](https://learn.microsoft.com/en-us/graph/api/group-post-members) for full details.',
		accounts: { azure: { scope: ['GroupMember.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: {
					type: 'string',
					description: 'The unique identifier of the group to add the member to.',
				},
				directoryObjectUri: {
					type: 'string',
					description:
						'The full URI of the directory object to add as a member. Must be in the format `https://graph.microsoft.com/v1.0/directoryObjects/{id}` or `https://graph.microsoft.com/v1.0/users/{id}`.',
				},
			},
			required: ['groupId', 'directoryObjectUri'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Microsoft Graph API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://graph.microsoft.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1.0/me/joinedTeams`). Authentication is handled automatically via the app\'s connection.\n\nNote: The URL does not include a version prefix — you must include the API version in the path\n(e.g. `/v1.0/...` or `beta/...`). This allows access to both stable and beta Graph API endpoints.\n\nRefer to the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/overview) for available\nendpoints, required parameters, and response schemas.',
		accounts: { azure: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://graph.microsoft.com`. For example, `/v1.0/me/joinedTeams`.',
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
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'createChannel',
		label: 'Create a channel',
		description: 'Creates a new channel in a team.',
		context:
			'---\nname: createChannel\ndescription: Creates a new channel in a team.\n---\n\nCreates a new channel within a Microsoft Teams team. By default, the channel is of `standard` membership type. Use the `membershipType` parameter to create `private` or `shared` channels.\n\nRefer to the [Microsoft Graph API reference — Create channel](https://learn.microsoft.com/en-us/graph/api/channel-post) for full details.',
		accounts: { azure: { scope: ['Group.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				displayName: { type: 'string', description: 'The display name of the channel.' },
				description: {
					type: 'string',
					description: 'Optional textual description for the channel.',
				},
				membershipType: {
					type: 'string',
					description: 'The type of the channel. Cannot be changed after creation.',
					default: '',
					enum: ['', 'standard', 'private', 'shared'],
				},
				isFavoriteByDefault: {
					type: 'boolean',
					description:
						'Whether the channel should automatically be marked as a favorite for every team member. Only supported for standard channels.',
				},
			},
			required: ['teamId', 'displayName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: "The channel's unique identifier." },
				displayName: {
					type: 'string',
					description: 'Channel name as it appears in Microsoft Teams.',
				},
				description: {
					type: 'string',
					description: 'Optional textual description for the channel.',
				},
				membershipType: {
					type: 'string',
					description:
						'The type of the channel. Possible values: `standard`, `private`, `shared`.',
				},
				webUrl: {
					type: 'string',
					description: 'A hyperlink to the channel in Microsoft Teams.',
				},
				email: {
					type: 'string',
					description: 'The email address for sending messages to the channel.',
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp at which the channel was created.',
				},
				tenantId: { type: 'string', description: 'The ID of the Microsoft Entra tenant.' },
				isArchived: { type: 'boolean', description: 'Whether the channel is archived.' },
				isFavoriteByDefault: {
					type: 'boolean',
					description:
						'Whether the channel should be marked as recommended for all members.',
				},
				layoutType: {
					type: 'string',
					description: 'The layout type of the channel. Possible values: `post`, `chat`.',
				},
				summary: {
					type: 'object',
					description: 'Summary information about the channel.',
					properties: {
						ownersCount: {
							type: 'number',
							description: 'Count of owners in the channel.',
						},
						membersCount: {
							type: 'number',
							description: 'Count of members in the channel.',
						},
						guestsCount: {
							type: 'number',
							description: 'Count of guests in the channel.',
						},
						hasMembersFromOtherTenants: {
							type: 'boolean',
							description:
								'Indicates whether external members are included on the channel.',
						},
					},
					required: [],
				},
				migrationMode: {
					type: 'string',
					description:
						'Whether the channel is in migration mode. Null if never migrated.',
				},
				originalCreatedDateTime: {
					type: 'string',
					description: 'Timestamp of the original creation time. Null if never migrated.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'createChat',
		label: 'Create a chat',
		description: 'Creates a new chat.',
		context:
			'---\nname: createChat\ndescription: Creates a new chat.\n---\n\nCreates a new one-on-one or group chat. You must specify the `chatType` and provide at least two `members` (including the signed-in user for `oneOnOne` chats).\n\nEach member in the `members` array must include `@odata.type` (set to `#microsoft.graph.aadUserConversationMember`), `roles`, and `user@odata.bind` (the user URI).\n\nTo send a message after creating the chat, use the `sendChatMessage` endpoint with the returned chat ID.\n\nRefer to the [Microsoft Graph API reference — Create chat](https://learn.microsoft.com/en-us/graph/api/chat-post) for full details.',
		accounts: { azure: { scope: ['Chat.ReadWrite', 'User.Read.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chatType: {
					type: 'string',
					description: 'Specifies the type of chat.',
					enum: ['oneOnOne', 'group'],
				},
				members: {
					type: 'array',
					description:
						'The list of conversation members that should be added. Every member must provide the `@odata.type`, `roles`, and `user@odata.bind` properties.',
					items: {
						type: 'object',
						description: 'A conversation member to add to the chat.',
						properties: {
							'@odata.type': {
								type: 'string',
								description:
									'The OData type of the member. Use `#microsoft.graph.aadUserConversationMember`.',
								default: '#microsoft.graph.aadUserConversationMember',
							},
							roles: {
								type: 'array',
								description: 'The roles of the user in the chat.',
								items: {
									type: 'string',
									description: 'A role value.',
									default: '',
									enum: ['', 'owner', 'guest'],
								},
							},
							'user@odata.bind': {
								type: 'string',
								description:
									'The URI of the user to add, e.g. `https://graph.microsoft.com/v1.0/users/{userId}`.',
							},
						},
						required: ['@odata.type', 'user@odata.bind'],
					},
				},
				topic: {
					type: 'string',
					description: 'The title of the chat. This is only available for group chats.',
				},
			},
			required: ['chatType', 'members'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the chat.' },
				chatType: {
					type: 'string',
					description: 'The type of the chat (oneOnOne, group, meeting).',
				},
				topic: {
					type: 'string',
					description: 'Subject or topic for the chat (only for group chats).',
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp when the chat was created.',
				},
				lastUpdatedDateTime: {
					type: 'string',
					description: 'Timestamp when the chat or a message in it was last updated.',
				},
				webUrl: { type: 'string', description: 'A link to the chat in Microsoft Teams.' },
				tenantId: { type: 'string', description: 'The ID of the Microsoft Entra tenant.' },
				isHiddenForAllMembers: {
					type: 'boolean',
					description: 'Whether the chat is hidden for all its members.',
				},
				onlineMeetingInfo: {
					type: 'object',
					description:
						'Represents details about an online meeting associated with the chat.',
					properties: {
						calendarEventId: {
							type: 'string',
							description:
								'The identifier of the calendar event associated with the meeting.',
						},
						joinWebUrl: {
							type: 'string',
							description: 'The URL that users click to join the meeting.',
						},
						organizer: {
							type: 'object',
							description: 'The organizer of the meeting.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the organizer.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the organizer.',
								},
								userIdentityType: {
									type: 'string',
									description: 'The type of user identity.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				viewpoint: {
					type: 'object',
					description: 'Caller-specific information about the chat.',
					properties: {
						isHidden: {
							type: 'boolean',
							description: 'Whether the chat is hidden for the current user.',
						},
						lastMessageReadDateTime: {
							type: 'string',
							description:
								'The date and time up to which the user has read messages.',
						},
					},
					required: [],
				},
				migrationMode: {
					type: 'string',
					description:
						'Indicates whether a chat is in migration mode. Null if never migrated.',
				},
				originalCreatedDateTime: {
					type: 'string',
					description: 'Timestamp of the original creation time. Null if never migrated.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'createGroup',
		label: 'Create a group',
		description: 'Creates a new Microsoft 365 group or security group.',
		context:
			'---\nname: createGroup\ndescription: Creates a new Microsoft 365 group or security group.\n---\n\nCreates a new group in the organization. The group can be a Microsoft 365 group (set `groupTypes` to `["Unified"]` and `mailEnabled` to `true`) or a security group (set `securityEnabled` to `true` and `mailEnabled` to `false`).\n\nFor Microsoft 365 groups, you can optionally specify initial `owners` and `members` by providing arrays of directory object URIs.\n\nRefer to the [Microsoft Graph API reference — Create group](https://learn.microsoft.com/en-us/graph/api/group-post-groups) for full details on available properties and behavior.',
		accounts: { azure: { scope: ['Group.ReadWrite.All', 'User.Read.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				displayName: {
					type: 'string',
					description:
						'The display name for the group. Maximum length: 256 characters. Required.',
				},
				mailNickname: {
					type: 'string',
					description:
						'The mail alias for the group. Maximum length is 64 characters. Required.',
				},
				mailEnabled: {
					type: 'boolean',
					description:
						'Set to `true` for mail-enabled groups (Microsoft 365 groups). Required.',
				},
				securityEnabled: {
					type: 'boolean',
					description: 'Set to `true` for security-enabled groups. Required.',
				},
				groupTypes: {
					type: 'array',
					description:
						'Specifies the group type. Use `Unified` for Microsoft 365 groups, `DynamicMembership` for dynamic groups, or both.',
					items: {
						type: 'string',
						description: 'A group type value (e.g. `Unified`, `DynamicMembership`).',
					},
				},
				description: {
					type: 'string',
					description: 'An optional description for the group.',
				},
				visibility: {
					type: 'string',
					description: 'Specifies the group join policy and content visibility.',
					default: '',
					enum: ['', 'Private', 'Public'],
				},
				owners: {
					type: 'array',
					description:
						'A list of directory object URIs for the group owners (e.g. `https://graph.microsoft.com/v1.0/users/{id}`).',
					items: { type: 'string', description: 'A directory object URI for an owner.' },
				},
				members: {
					type: 'array',
					description:
						'A list of directory object URIs for the group members (e.g. `https://graph.microsoft.com/v1.0/users/{id}`).',
					items: { type: 'string', description: 'A directory object URI for a member.' },
				},
				classification: {
					type: 'string',
					description:
						'Describes a classification for the group (e.g. `low`, `medium`, `high`). Defined by creating a ClassificationList setting value.',
				},
				preferredDataLocation: {
					type: 'string',
					description: 'The preferred data location for the Microsoft 365 group.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language for a Microsoft 365 group (e.g. `en-US`).',
				},
				theme: {
					type: 'string',
					description: "Specifies a Microsoft 365 group's color theme.",
					default: '',
					enum: ['', 'Teal', 'Purple', 'Green', 'Blue', 'Pink', 'Orange', 'Red'],
				},
				uniqueName: {
					type: 'string',
					description:
						'A unique identifier that can be assigned to a group and used as an alternate key. Immutable once set.',
				},
				isAssignableToRole: {
					type: 'boolean',
					description:
						'Whether the group can be assigned to a Microsoft Entra role. Only set at creation time.',
				},
				membershipRule: {
					type: 'string',
					description:
						'The rule that determines members for this group if it is a dynamic group (requires `DynamicMembership` in groupTypes).',
				},
				membershipRuleProcessingState: {
					type: 'string',
					description:
						'Indicates whether the dynamic membership processing is on or paused.',
					default: '',
					enum: ['', 'On', 'Paused'],
				},
				resourceBehaviorOptions: {
					type: 'array',
					description:
						'Specifies the group behaviors during creation (e.g. `AllowOnlyMembersToPost`, `HideGroupInOutlook`, `SubscribeNewGroupMembers`, `WelcomeEmailDisabled`).',
					items: { type: 'string', description: 'A resource behavior option.' },
				},
				resourceProvisioningOptions: {
					type: 'array',
					description:
						'Specifies the group resources to provision (e.g. `Team` to auto-provision a Teams team).',
					items: { type: 'string', description: 'A resource provisioning option.' },
				},
			},
			required: [
				'displayName',
				'mailNickname',
				'mailEnabled',
				'securityEnabled',
				'groupTypes',
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier for the group.' },
				displayName: { type: 'string', description: 'The display name for the group.' },
				description: {
					type: 'string',
					description: 'An optional description for the group.',
				},
				groupTypes: {
					type: 'array',
					description: 'Specifies the group type and its membership.',
					items: { type: 'string', description: 'A group type value.' },
				},
				mail: { type: 'string', description: 'The SMTP address for the group.' },
				mailEnabled: {
					type: 'boolean',
					description: 'Specifies whether the group is mail-enabled.',
				},
				mailNickname: { type: 'string', description: 'The mail alias for the group.' },
				securityEnabled: {
					type: 'boolean',
					description: 'Specifies whether the group is a security group.',
				},
				visibility: {
					type: 'string',
					description: 'Specifies the group join policy and content visibility.',
				},
				classification: {
					type: 'string',
					description: 'Describes a classification for the group.',
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp of when the group was created.',
				},
				renewedDateTime: {
					type: 'string',
					description: 'Timestamp of when the group was last renewed.',
				},
				expirationDateTime: {
					type: 'string',
					description: 'Timestamp of when the group is set to expire.',
				},
				deletedDateTime: {
					type: 'string',
					description: 'Timestamp when the group was deleted.',
				},
				isArchived: { type: 'boolean', description: 'Whether the group is archived.' },
				isAssignableToRole: {
					type: 'boolean',
					description:
						'Indicates whether this group can be assigned to a Microsoft Entra role.',
				},
				isManagementRestricted: {
					type: 'boolean',
					description: 'Whether the group is restricted from management operations.',
				},
				membershipRule: {
					type: 'string',
					description: 'The rule that determines members for a dynamic group.',
				},
				membershipRuleProcessingState: {
					type: 'string',
					description: 'Whether dynamic membership processing is on or paused.',
				},
				preferredDataLocation: {
					type: 'string',
					description: 'The preferred data location for the Microsoft 365 group.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language for a Microsoft 365 group.',
				},
				proxyAddresses: {
					type: 'array',
					description: 'Email addresses for the group.',
					items: { type: 'string', description: 'A proxy address.' },
				},
				resourceBehaviorOptions: {
					type: 'array',
					description: 'Specifies the group behaviors set during creation.',
					items: { type: 'string', description: 'A resource behavior option.' },
				},
				resourceProvisioningOptions: {
					type: 'array',
					description: 'Specifies group resources associated with the group.',
					items: { type: 'string', description: 'A resource provisioning option.' },
				},
				securityIdentifier: {
					type: 'string',
					description: 'Security identifier of the group.',
				},
				theme: {
					type: 'string',
					description: "Specifies a Microsoft 365 group's color theme.",
				},
				uniqueName: {
					type: 'string',
					description: 'A unique identifier for the group used as an alternate key.',
				},
				onPremisesDomainName: {
					type: 'string',
					description: 'Contains the on-premises domain FQDN.',
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'Extension attributes 1-15 synced from on-premises Active Directory.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'First extension attribute.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Second extension attribute.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Third extension attribute.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Fourth extension attribute.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Fifth extension attribute.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Sixth extension attribute.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Seventh extension attribute.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Eighth extension attribute.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Ninth extension attribute.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Tenth extension attribute.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Eleventh extension attribute.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Twelfth extension attribute.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Thirteenth extension attribute.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Fourteenth extension attribute.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Fifteenth extension attribute.',
						},
					},
					required: [],
				},
				onPremisesLastSyncDateTime: {
					type: 'string',
					description: 'Last time the group was synced with on-premises directory.',
				},
				onPremisesNetBiosName: {
					type: 'string',
					description: 'Contains the on-premises NetBIOS name.',
				},
				onPremisesProvisioningErrors: {
					type: 'array',
					description: 'Errors during on-premises provisioning.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							category: {
								type: 'string',
								description:
									'Category of the error. Possible value: `PropertyConflict`.',
							},
							occurredDateTime: {
								type: 'string',
								description: 'The date and time at which the error occurred.',
							},
							propertyCausingError: {
								type: 'string',
								description: 'Name of the directory property causing the error.',
							},
							value: {
								type: 'string',
								description: 'Value of the property causing the error.',
							},
						},
						required: [],
					},
				},
				onPremisesSamAccountName: {
					type: 'string',
					description: 'Contains the on-premises SAM account name.',
				},
				onPremisesSecurityIdentifier: {
					type: 'string',
					description: 'Contains the on-premises security identifier (SID).',
				},
				onPremisesSyncEnabled: {
					type: 'boolean',
					description: '`true` if synced from an on-premises directory.',
				},
				assignedLabels: {
					type: 'array',
					description: 'Sensitivity label pairs associated with the group.',
					items: {
						type: 'object',
						description: 'An assigned label.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The display name of the label.',
							},
							labelId: {
								type: 'string',
								description: 'The unique identifier of the label.',
							},
						},
						required: [],
					},
				},
				assignedLicenses: {
					type: 'array',
					description: 'The licenses assigned to the group.',
					items: {
						type: 'object',
						description: 'An assigned license.',
						properties: {
							disabledPlans: {
								type: 'array',
								description: 'Collection of IDs for plans that have been disabled.',
								items: { type: 'string', description: 'A disabled plan ID.' },
							},
							skuId: {
								type: 'string',
								description: 'The unique identifier for the SKU.',
							},
						},
						required: [],
					},
				},
				hasMembersWithLicenseErrors: {
					type: 'boolean',
					description: 'Whether there are members with license errors.',
				},
				licenseProcessingState: {
					type: 'string',
					description:
						'The status of the group license assignment. Possible values: `QueuedForProcessing`, `ProcessingInProgress`, `ProcessingComplete`.',
				},
				serviceProvisioningErrors: {
					type: 'array',
					description: 'Errors published by a federated service.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							createdDateTime: {
								type: 'string',
								description: 'The date and time at which the error occurred.',
							},
							isResolved: {
								type: 'boolean',
								description: 'Whether the error has been resolved.',
							},
							serviceInstance: {
								type: 'string',
								description: 'Qualified service instance that published the error.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'createOnlineMeeting',
		label: 'Create an online meeting',
		description: 'Creates a new online meeting.',
		context:
			"---\nname: createOnlineMeeting\ndescription: Creates a new online meeting.\n---\n\nCreates an online meeting on behalf of the signed-in user. This is a standalone meeting that is not associated with any event on the user's calendar.\n\nYou can optionally specify a subject, start/end times, attendees, presenter settings, and lobby bypass configuration.\n\nRefer to the [Microsoft Graph API reference — Create onlineMeeting](https://learn.microsoft.com/en-us/graph/api/application-post-onlinemeetings) for full details.",
		accounts: { azure: { scope: ['OnlineMeetings.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				subject: { type: 'string', description: 'The subject of the online meeting.' },
				startDateTime: { type: 'string', description: 'The meeting start time in UTC.' },
				endDateTime: { type: 'string', description: 'The meeting end time in UTC.' },
				attendees: {
					type: 'array',
					description: 'The list of meeting attendees.',
					items: {
						type: 'object',
						description: 'A meeting participant.',
						properties: {
							upn: {
								type: 'string',
								description: 'The user principal name (email) of the attendee.',
							},
							role: {
								type: 'string',
								description: 'The role of the attendee.',
								default: '',
								enum: ['', 'attendee', 'presenter', 'producer'],
							},
						},
						required: [],
					},
				},
				allowedPresenters: {
					type: 'string',
					description: 'Specifies who can be a presenter.',
					default: '',
					enum: ['', 'everyone', 'organization', 'roleIsPresenter', 'organizer'],
				},
				isEntryExitAnnounced: {
					type: 'boolean',
					description: 'Whether to announce when callers join or leave.',
				},
				lobbyBypassSettings: {
					type: 'object',
					description: 'Settings for which participants can bypass the lobby.',
					properties: {
						scope: {
							type: 'string',
							description:
								'Specifies the type of participants that are automatically admitted.',
							default: '',
							enum: [
								'',
								'organizer',
								'organization',
								'organizationAndFederated',
								'everyone',
								'invited',
								'organizationExcludingGuests',
							],
						},
						isDialInBypassEnabled: {
							type: 'boolean',
							description:
								'Whether or not to allow dial-in users to bypass the lobby.',
						},
					},
					required: [],
				},
				allowAttendeeToEnableCamera: {
					type: 'boolean',
					description: 'Whether attendees can turn on their cameras.',
				},
				allowAttendeeToEnableMic: {
					type: 'boolean',
					description: 'Whether attendees can turn on their microphones.',
				},
				allowMeetingChat: {
					type: 'string',
					description: 'Specifies the mode of meeting chat.',
					default: '',
					enum: ['', 'enabled', 'disabled', 'limited'],
				},
				allowTeamworkReactions: {
					type: 'boolean',
					description: 'Whether Teams reactions are enabled.',
				},
				recordAutomatically: {
					type: 'boolean',
					description: 'Whether to record the meeting automatically.',
				},
				allowRecording: { type: 'boolean', description: 'Whether recording is enabled.' },
				allowTranscription: {
					type: 'boolean',
					description: 'Whether transcription is enabled.',
				},
				allowWhiteboard: { type: 'boolean', description: 'Whether whiteboard is enabled.' },
				allowBreakoutRooms: {
					type: 'boolean',
					description: 'Whether breakout rooms are enabled.',
				},
				allowPowerPointSharing: {
					type: 'boolean',
					description: 'Whether PowerPoint live is enabled.',
				},
				allowLiveShare: {
					type: 'string',
					description: 'Whether live share is enabled.',
					default: '',
					enum: ['', 'enabled', 'disabled'],
				},
				allowCopyingAndSharingMeetingContent: {
					type: 'boolean',
					description:
						'Whether the ability to copy and share meeting content is enabled.',
				},
				allowParticipantsToChangeName: {
					type: 'boolean',
					description: 'Whether participants are allowed to rename themselves.',
				},
				allowedLobbyAdmitters: {
					type: 'string',
					description: 'Specifies the users who can admit from the lobby.',
					default: '',
					enum: ['', 'organizerAndCoOrganizersAndPresenters', 'organizerAndCoOrganizers'],
				},
				isEndToEndEncryptionEnabled: {
					type: 'boolean',
					description: 'Whether end-to-end encryption is enabled.',
				},
				watermarkProtection: {
					type: 'object',
					description:
						'Specifies whether the client application should apply a watermark to content or video.',
					properties: {
						isEnabledForContentSharing: {
							type: 'boolean',
							description: 'Whether watermark is applied to any shared content.',
						},
						isEnabledForVideo: {
							type: 'boolean',
							description:
								"Whether watermark is applied to the attendee's video feed.",
						},
					},
					required: [],
				},
				externalId: {
					type: 'string',
					description:
						'An external ID for the meeting. Use for associating the meeting with an external system.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the online meeting.' },
				subject: { type: 'string', description: 'The subject of the online meeting.' },
				joinWebUrl: { type: 'string', description: 'The join URL of the online meeting.' },
				joinInformation: {
					type: 'object',
					description: 'The join information in the language and locale variant.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The content type of the join information.',
						},
						content: {
							type: 'string',
							description: 'The HTML content with join meeting information.',
						},
					},
					required: [],
				},
				startDateTime: { type: 'string', description: 'The meeting start time in UTC.' },
				endDateTime: { type: 'string', description: 'The meeting end time in UTC.' },
				creationDateTime: {
					type: 'string',
					description: 'The meeting creation time in UTC.',
				},
				expiryDateTime: {
					type: 'string',
					description: 'The date and time when the meeting resource expires.',
				},
				audioConferencing: {
					type: 'object',
					description: 'The phone access (dial-in) information for the meeting.',
					properties: {
						conferenceId: {
							type: 'string',
							description: 'The conference ID of the online meeting.',
						},
						dialinUrl: {
							type: 'string',
							description:
								'A URL to the externally-accessible web page with dial-in info.',
						},
						tollFreeNumbers: {
							type: 'array',
							description:
								'The toll-free numbers that can be used to join the meeting.',
							items: { type: 'string', description: 'A toll-free phone number.' },
						},
						tollNumbers: {
							type: 'array',
							description: 'The toll numbers that can be used to join the meeting.',
							items: { type: 'string', description: 'A toll phone number.' },
						},
					},
					required: [],
				},
				allowedPresenters: {
					type: 'string',
					description: 'Specifies who can be a presenter.',
				},
				isEntryExitAnnounced: {
					type: 'boolean',
					description: 'Whether to announce when callers join or leave.',
				},
				lobbyBypassSettings: {
					type: 'object',
					description: 'Settings for which participants can bypass the lobby.',
					properties: {
						scope: {
							type: 'string',
							description: 'The type of participants automatically admitted.',
						},
						isDialInBypassEnabled: {
							type: 'boolean',
							description: 'Whether dial-in users bypass the lobby.',
						},
					},
					required: [],
				},
				participants: {
					type: 'object',
					description: 'The participants associated with the meeting.',
					properties: {
						organizer: {
							type: 'object',
							description: 'The meeting organizer.',
							properties: {
								upn: {
									type: 'string',
									description: 'The user principal name of the organizer.',
								},
								role: { type: 'string', description: 'The role of the organizer.' },
								identity: {
									type: 'object',
									description: 'The identity set of the organizer.',
									properties: {
										user: {
											type: 'object',
											description: 'The user identity.',
											properties: {
												id: {
													type: 'string',
													description:
														'The unique identifier of the user.',
												},
												displayName: {
													type: 'string',
													description: 'The display name of the user.',
												},
												userIdentityType: {
													type: 'string',
													description: 'The type of user identity.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							required: [],
						},
						attendees: {
							type: 'array',
							description: 'The attendees of the meeting.',
							items: {
								type: 'object',
								description: 'A meeting attendee.',
								properties: {
									upn: {
										type: 'string',
										description: 'The user principal name of the attendee.',
									},
									role: {
										type: 'string',
										description: 'The role of the attendee.',
									},
									identity: {
										type: 'object',
										description: 'The identity set of the attendee.',
										properties: {
											user: {
												type: 'object',
												description: 'The user identity.',
												properties: {
													id: {
														type: 'string',
														description:
															'The unique identifier of the user.',
													},
													displayName: {
														type: 'string',
														description:
															'The display name of the user.',
													},
													userIdentityType: {
														type: 'string',
														description: 'The type of user identity.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				chatInfo: {
					type: 'object',
					description: 'The chat information associated with this meeting.',
					properties: {
						threadId: {
							type: 'string',
							description: 'The unique identifier of the chat thread.',
						},
						messageId: {
							type: 'string',
							description: 'The unique identifier of the message.',
						},
						replyChainMessageId: {
							type: 'string',
							description: 'The ID of the reply chain message.',
						},
					},
					required: [],
				},
				videoTeleconferenceId: {
					type: 'string',
					description: 'The video teleconferencing ID.',
				},
				externalId: { type: 'string', description: 'The external ID (custom identifier).' },
				recordAutomatically: {
					type: 'boolean',
					description: 'Whether to record the meeting automatically.',
				},
				allowAttendeeToEnableCamera: {
					type: 'boolean',
					description: 'Whether attendees can turn on their cameras.',
				},
				allowAttendeeToEnableMic: {
					type: 'boolean',
					description: 'Whether attendees can turn on their microphones.',
				},
				allowMeetingChat: {
					type: 'string',
					description: 'Specifies the mode of meeting chat.',
				},
				allowTeamworkReactions: {
					type: 'boolean',
					description: 'Whether Teams reactions are enabled.',
				},
				allowRecording: { type: 'boolean', description: 'Whether recording is enabled.' },
				allowTranscription: {
					type: 'boolean',
					description: 'Whether transcription is enabled.',
				},
				allowWhiteboard: { type: 'boolean', description: 'Whether whiteboard is enabled.' },
				allowBreakoutRooms: {
					type: 'boolean',
					description: 'Whether breakout rooms are enabled.',
				},
				allowPowerPointSharing: {
					type: 'boolean',
					description: 'Whether PowerPoint live is enabled.',
				},
				allowLiveShare: { type: 'string', description: 'Whether live share is enabled.' },
				allowCopyingAndSharingMeetingContent: {
					type: 'boolean',
					description:
						'Whether the ability to copy and share meeting content is enabled.',
				},
				allowParticipantsToChangeName: {
					type: 'boolean',
					description: 'Whether participants are allowed to rename themselves.',
				},
				allowedLobbyAdmitters: {
					type: 'string',
					description: 'Specifies the users who can admit from the lobby.',
				},
				isEndToEndEncryptionEnabled: {
					type: 'boolean',
					description: 'Whether end-to-end encryption is enabled.',
				},
				joinMeetingIdSettings: {
					type: 'object',
					description: 'The meeting ID and passcode settings.',
					properties: {
						joinMeetingId: {
							type: 'string',
							description: 'The meeting ID used to join the meeting.',
						},
						isPasscodeRequired: {
							type: 'boolean',
							description: 'Whether a passcode is required to join.',
						},
						passcode: {
							type: 'string',
							description: 'The passcode to join the meeting.',
						},
					},
					required: [],
				},
				meetingOptionsWebUrl: {
					type: 'string',
					description: 'The URL to the Teams meeting options page.',
				},
				meetingType: { type: 'string', description: 'The type of the online meeting.' },
				shareMeetingChatHistoryDefault: {
					type: 'string',
					description: 'Whether meeting chat history is shared with participants.',
				},
				isBroadcast: {
					type: 'boolean',
					description: 'Whether this meeting is a Teams live event (deprecated).',
				},
				watermarkProtection: {
					type: 'object',
					description:
						'Specifies whether the client application should apply a watermark.',
					properties: {
						isEnabledForContentSharing: {
							type: 'boolean',
							description: 'Whether watermark is applied to any shared content.',
						},
						isEnabledForVideo: {
							type: 'boolean',
							description:
								"Whether watermark is applied to the attendee's video feed.",
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'createTeamFromGroup',
		label: 'Create a team from a group',
		description: 'Creates a new team from an existing group.',
		context:
			'---\nname: createTeamFromGroup\ndescription: Creates a new team from an existing group.\n---\n\nCreates a new Microsoft Teams team under an existing Microsoft 365 group. The group must already exist and have at least one owner. You can optionally configure team settings (member, messaging, fun, guest) during creation.\n\nIf the team has already been created for the group, this call returns the existing team (PUT is idempotent).\n\nRefer to the [Microsoft Graph API reference — Create team from group](https://learn.microsoft.com/en-us/graph/api/team-put-teams) for full details.',
		accounts: { azure: { scope: ['Group.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: {
					type: 'string',
					description:
						'The unique identifier of the Microsoft 365 group to create a team from. The group must already exist and have at least one owner.',
				},
				memberSettings: {
					type: 'object',
					description:
						'Settings to configure whether members can perform certain actions in the team.',
					properties: {
						allowCreateUpdateChannels: {
							type: 'boolean',
							description: 'Whether members can create, update, and delete channels.',
						},
						allowDeleteChannels: {
							type: 'boolean',
							description: 'Whether members can delete channels.',
						},
						allowAddRemoveApps: {
							type: 'boolean',
							description: 'Whether members can add and remove apps.',
						},
						allowCreateUpdateRemoveTabs: {
							type: 'boolean',
							description: 'Whether members can create, update, and remove tabs.',
						},
						allowCreateUpdateRemoveConnectors: {
							type: 'boolean',
							description:
								'Whether members can create, update, and remove connectors.',
						},
					},
					required: [],
				},
				messagingSettings: {
					type: 'object',
					description: 'Settings to configure messaging and mentions in the team.',
					properties: {
						allowUserEditMessages: {
							type: 'boolean',
							description: 'Whether users can edit their sent messages.',
						},
						allowUserDeleteMessages: {
							type: 'boolean',
							description: 'Whether users can delete their sent messages.',
						},
						allowOwnerDeleteMessages: {
							type: 'boolean',
							description: 'Whether owners can delete any message.',
						},
						allowTeamMentions: {
							type: 'boolean',
							description: 'Whether @team mentions are allowed.',
						},
						allowChannelMentions: {
							type: 'boolean',
							description: 'Whether @channel mentions are allowed.',
						},
					},
					required: [],
				},
				funSettings: {
					type: 'object',
					description:
						'Settings to configure fun content like Giphy, stickers, and memes.',
					properties: {
						allowGiphy: { type: 'boolean', description: 'Whether Giphy is enabled.' },
						giphyContentRating: {
							type: 'string',
							description: 'The content rating for Giphy.',
							default: '',
							enum: ['', 'strict', 'moderate'],
						},
						allowStickersAndMemes: {
							type: 'boolean',
							description: 'Whether stickers and memes are enabled.',
						},
						allowCustomMemes: {
							type: 'boolean',
							description: 'Whether custom memes are enabled.',
						},
					},
					required: [],
				},
				guestSettings: {
					type: 'object',
					description:
						'Settings to configure whether guests can create, update, or delete channels.',
					properties: {
						allowCreateUpdateChannels: {
							type: 'boolean',
							description: 'Whether guests can create channels.',
						},
						allowDeleteChannels: {
							type: 'boolean',
							description: 'Whether guests can delete channels.',
						},
					},
					required: [],
				},
				discoverySettings: {
					type: 'object',
					description: 'Settings to configure team discoverability by others.',
					properties: {
						showInTeamsSearchAndSuggestions: {
							type: 'boolean',
							description:
								'Whether this team shows up in search and suggestions within Teams.',
						},
					},
					required: [],
				},
			},
			required: ['groupId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the team.' },
				displayName: { type: 'string', description: 'The display name of the team.' },
				description: { type: 'string', description: 'The description of the team.' },
				webUrl: {
					type: 'string',
					description: 'The URL to the team in Microsoft Teams client.',
				},
				isArchived: { type: 'boolean', description: 'Whether the team is archived.' },
				createdDateTime: {
					type: 'string',
					description: 'Timestamp at which the team was created.',
				},
				memberSettings: {
					type: 'object',
					description:
						'Settings to configure whether members can perform certain actions.',
					properties: {
						allowCreateUpdateChannels: {
							type: 'boolean',
							description: 'Whether members can create and update channels.',
						},
						allowDeleteChannels: {
							type: 'boolean',
							description: 'Whether members can delete channels.',
						},
						allowAddRemoveApps: {
							type: 'boolean',
							description: 'Whether members can add and remove apps.',
						},
						allowCreateUpdateRemoveTabs: {
							type: 'boolean',
							description: 'Whether members can create, update, and remove tabs.',
						},
						allowCreateUpdateRemoveConnectors: {
							type: 'boolean',
							description:
								'Whether members can create, update, and remove connectors.',
						},
					},
					required: [],
				},
				messagingSettings: {
					type: 'object',
					description: 'Settings to configure messaging and mentions.',
					properties: {
						allowUserEditMessages: {
							type: 'boolean',
							description: 'Whether users can edit their sent messages.',
						},
						allowUserDeleteMessages: {
							type: 'boolean',
							description: 'Whether users can delete their sent messages.',
						},
						allowOwnerDeleteMessages: {
							type: 'boolean',
							description: 'Whether owners can delete any message.',
						},
						allowTeamMentions: {
							type: 'boolean',
							description: 'Whether @team mentions are allowed.',
						},
						allowChannelMentions: {
							type: 'boolean',
							description: 'Whether @channel mentions are allowed.',
						},
					},
					required: [],
				},
				funSettings: {
					type: 'object',
					description: 'Settings to configure fun content.',
					properties: {
						allowGiphy: { type: 'boolean', description: 'Whether Giphy is enabled.' },
						giphyContentRating: {
							type: 'string',
							description: 'The content rating for Giphy.',
						},
						allowStickersAndMemes: {
							type: 'boolean',
							description: 'Whether stickers and memes are enabled.',
						},
						allowCustomMemes: {
							type: 'boolean',
							description: 'Whether custom memes are enabled.',
						},
					},
					required: [],
				},
				guestSettings: {
					type: 'object',
					description:
						'Settings to configure whether guests can create, update, or delete channels.',
					properties: {
						allowCreateUpdateChannels: {
							type: 'boolean',
							description: 'Whether guests can create channels.',
						},
						allowDeleteChannels: {
							type: 'boolean',
							description: 'Whether guests can delete channels.',
						},
					},
					required: [],
				},
				classSettings: {
					type: 'object',
					description: 'Settings for a class-type team.',
					properties: {
						notifyGuardiansAboutAssignments: {
							type: 'boolean',
							description:
								'Whether to send weekly assignments digest emails to parents/guardians.',
						},
					},
					required: [],
				},
				classification: {
					type: 'string',
					description: 'An optional label describing the sensitivity of the team.',
				},
				internalId: {
					type: 'string',
					description: "The unique identifier for the team's internal use.",
				},
				specialization: { type: 'string', description: 'The type of the team.' },
				visibility: {
					type: 'string',
					description: 'The visibility of the group and team.',
				},
				tenantId: { type: 'string', description: 'The ID of the Microsoft Entra tenant.' },
				summary: {
					type: 'object',
					description: 'Summary information about the team.',
					properties: {
						ownersCount: {
							type: 'number',
							description: 'Count of owners in the team.',
						},
						membersCount: {
							type: 'number',
							description: 'Count of members in the team.',
						},
						guestsCount: {
							type: 'number',
							description: 'Count of guests in the team.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'createUser',
		label: 'Create a user',
		description: 'Creates a new user.',
		context:
			'---\nname: createUser\ndescription: Creates a new user.\n---\n\nCreates a new user in the organization. The `userPrincipalName` must use a verified domain for the tenant (e.g. `user@contoso.com`).\n\nNote: The original module "Add a Member" actually creates a user via POST /users (the naming is misleading). This endpoint wraps that same API call directly.\n\nRefer to the [Microsoft Graph API reference — Create user](https://learn.microsoft.com/en-us/graph/api/user-post-users) for full details.',
		accounts: { azure: { scope: ['User.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				displayName: {
					type: 'string',
					description: 'The name displayed in the address book for the user. Required.',
				},
				userPrincipalName: {
					type: 'string',
					description:
						'The user principal name (e.g. `user@contoso.com`). Must use a verified domain. Required.',
				},
				password: { type: 'string', description: 'The password for the user. Required.' },
				accountEnabled: {
					type: 'boolean',
					description: 'Whether the account is enabled. Required.',
				},
				forceChangePasswordNextSignIn: {
					type: 'boolean',
					description: 'Whether the user must change their password on the next sign in.',
				},
				mailNickname: {
					type: 'string',
					description: 'The mail alias for the user. Required by the Graph API.',
				},
				givenName: {
					type: 'string',
					description: 'The given name (first name) of the user.',
				},
				surname: {
					type: 'string',
					description: "The user's surname (family name or last name).",
				},
				jobTitle: { type: 'string', description: "The user's job title." },
				mobilePhone: { type: 'string', description: "The user's mobile phone number." },
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language for the user (e.g. `en-US`).',
				},
				businessPhones: {
					type: 'array',
					description: 'A list of business phone numbers.',
					items: { type: 'string', description: 'A business phone number.' },
				},
				city: { type: 'string', description: 'The city in which the user is located.' },
				companyName: {
					type: 'string',
					description: 'The company name associated with the user.',
				},
				country: {
					type: 'string',
					description:
						'The country/region in which the user is located (e.g. `US`, `JP`, `GB`).',
				},
				department: {
					type: 'string',
					description: 'The name of the department in which the user works.',
				},
				employeeId: {
					type: 'string',
					description: 'The employee identifier assigned by the organization.',
				},
				postalCode: { type: 'string', description: "The user's postal code." },
				state: {
					type: 'string',
					description: "The state or province in the user's address.",
				},
				streetAddress: {
					type: 'string',
					description: "The street address of the user's place of business.",
				},
				usageLocation: {
					type: 'string',
					description:
						'A two-letter country code (ISO 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples: `US`, `JP`, `GB`.',
				},
				userType: {
					type: 'string',
					description: 'Specifies the user type.',
					default: '',
					enum: ['', 'Member', 'Guest'],
				},
				onPremisesImmutableId: {
					type: 'string',
					description:
						"Required only when creating a user account if you are using a federated domain for the user's UPN property.",
				},
			},
			required: [
				'displayName',
				'userPrincipalName',
				'password',
				'accountEnabled',
				'forceChangePasswordNextSignIn',
				'mailNickname',
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier for the user.' },
				displayName: {
					type: 'string',
					description: 'The name displayed in the address book for the user.',
				},
				userPrincipalName: {
					type: 'string',
					description: 'The user principal name (UPN) of the user.',
				},
				givenName: {
					type: 'string',
					description: 'The given name (first name) of the user.',
				},
				surname: {
					type: 'string',
					description: "The user's surname (family name or last name).",
				},
				mail: { type: 'string', description: 'The SMTP address for the user.' },
				mailNickname: { type: 'string', description: 'The mail alias of the user.' },
				jobTitle: { type: 'string', description: "The user's job title." },
				mobilePhone: { type: 'string', description: "The user's mobile phone number." },
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language for the user.',
				},
				accountEnabled: { type: 'boolean', description: 'Whether the account is enabled.' },
				businessPhones: {
					type: 'array',
					description: 'A list of business phone numbers.',
					items: { type: 'string', description: 'A business phone number.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'deleteChannel',
		label: 'Delete a channel',
		description: 'Deletes a channel from a team.',
		context:
			'---\nname: deleteChannel\ndescription: Deletes a channel from a team.\n---\n\nDeletes a channel from a team. Deleted channels are moved to a recoverable state and can be restored within 30 days.\n\nReturns HTTP 204 No Content on success (empty output).\n\nRefer to the [Microsoft Graph API reference — Delete channel](https://learn.microsoft.com/en-us/graph/api/channel-delete) for full details.',
		accounts: { azure: { scope: ['Group.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				channelId: {
					type: 'string',
					description: 'The unique identifier of the channel to delete.',
				},
			},
			required: ['teamId', 'channelId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'deleteGroup',
		label: 'Delete a group',
		description: 'Deletes a group.',
		context:
			'---\nname: deleteGroup\ndescription: Deletes a group.\n---\n\nDeletes a group (team) by its ID. When a Microsoft 365 group is deleted, it is moved to a temporary container and can be restored within 30 days. After that, it is permanently deleted.\n\nReturns HTTP 204 No Content on success (empty output).\n\nRefer to the [Microsoft Graph API reference — Delete group](https://learn.microsoft.com/en-us/graph/api/group-delete) for full details.',
		accounts: { azure: { scope: ['Group.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: {
					type: 'string',
					description: 'The unique identifier of the group to delete.',
				},
			},
			required: ['groupId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'deleteOnlineMeeting',
		label: 'Delete an online meeting',
		description: 'Deletes an online meeting.',
		context:
			'---\nname: deleteOnlineMeeting\ndescription: Deletes an online meeting.\n---\n\nDeletes an online meeting by its ID. Returns HTTP 204 No Content on success (empty output).\n\nRefer to the [Microsoft Graph API reference — Delete onlineMeeting](https://learn.microsoft.com/en-us/graph/api/onlinemeeting-delete) for full details.',
		accounts: { azure: { scope: ['OnlineMeetings.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				meetingId: {
					type: 'string',
					description: 'The unique identifier of the online meeting to delete.',
				},
			},
			required: ['meetingId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'getChannel',
		label: 'Get a channel',
		description: 'Retrieves the properties of a channel.',
		context:
			'---\nname: getChannel\ndescription: Retrieves the properties of a channel.\n---\n\nRetrieves the properties and relationships of a channel within a team.\n\nRefer to the [Microsoft Graph API reference — Get channel](https://learn.microsoft.com/en-us/graph/api/channel-get) for full details.',
		accounts: { azure: { scope: ['Group.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				channelId: { type: 'string', description: 'The unique identifier of the channel.' },
			},
			required: ['teamId', 'channelId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: "The channel's unique identifier." },
				displayName: {
					type: 'string',
					description: 'Channel name as it appears in Microsoft Teams.',
				},
				description: {
					type: 'string',
					description: 'Optional textual description for the channel.',
				},
				membershipType: {
					type: 'string',
					description:
						'The type of the channel. Possible values: `standard`, `private`, `shared`.',
				},
				webUrl: {
					type: 'string',
					description: 'A hyperlink to the channel in Microsoft Teams.',
				},
				email: {
					type: 'string',
					description: 'The email address for sending messages to the channel.',
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp at which the channel was created.',
				},
				tenantId: { type: 'string', description: 'The ID of the Microsoft Entra tenant.' },
				isArchived: { type: 'boolean', description: 'Whether the channel is archived.' },
				isFavoriteByDefault: {
					type: 'boolean',
					description:
						'Whether the channel should be marked as recommended for all members.',
				},
				layoutType: {
					type: 'string',
					description: 'The layout type of the channel. Possible values: `post`, `chat`.',
				},
				summary: {
					type: 'object',
					description: 'Summary information about the channel.',
					properties: {
						ownersCount: {
							type: 'number',
							description: 'Count of owners in the channel.',
						},
						membersCount: {
							type: 'number',
							description: 'Count of members in the channel.',
						},
						guestsCount: {
							type: 'number',
							description: 'Count of guests in the channel.',
						},
						hasMembersFromOtherTenants: {
							type: 'boolean',
							description:
								'Indicates whether external members are included on the channel.',
						},
					},
					required: [],
				},
				migrationMode: {
					type: 'string',
					description:
						'Whether the channel is in migration mode. Null if never migrated.',
				},
				originalCreatedDateTime: {
					type: 'string',
					description: 'Timestamp of the original creation time. Null if never migrated.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'getOnlineMeeting',
		label: 'Get an online meeting',
		description: 'Retrieves the properties of an online meeting.',
		context:
			'---\nname: getOnlineMeeting\ndescription: Retrieves the properties of an online meeting.\n---\n\nRetrieves the properties and relationships of an onlineMeeting object by its ID.\n\nRefer to the [Microsoft Graph API reference — Get onlineMeeting](https://learn.microsoft.com/en-us/graph/api/onlinemeeting-get) for full details.',
		accounts: { azure: { scope: ['OnlineMeetingArtifact.Read.All', 'OnlineMeetings.Read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				meetingId: {
					type: 'string',
					description: 'The unique identifier of the online meeting.',
				},
			},
			required: ['meetingId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the online meeting.' },
				subject: { type: 'string', description: 'The subject of the online meeting.' },
				joinWebUrl: { type: 'string', description: 'The join URL of the online meeting.' },
				joinInformation: {
					type: 'object',
					description: 'The join information in the language and locale variant.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The content type of the join information.',
						},
						content: {
							type: 'string',
							description: 'The HTML content with join meeting information.',
						},
					},
					required: [],
				},
				startDateTime: { type: 'string', description: 'The meeting start time in UTC.' },
				endDateTime: { type: 'string', description: 'The meeting end time in UTC.' },
				creationDateTime: {
					type: 'string',
					description: 'The meeting creation time in UTC.',
				},
				expiryDateTime: {
					type: 'string',
					description: 'The date and time when the meeting resource expires.',
				},
				audioConferencing: {
					type: 'object',
					description: 'The phone access (dial-in) information for the meeting.',
					properties: {
						conferenceId: {
							type: 'string',
							description: 'The conference ID of the online meeting.',
						},
						dialinUrl: {
							type: 'string',
							description:
								'A URL to the externally-accessible web page with dial-in info.',
						},
						tollFreeNumbers: {
							type: 'array',
							description:
								'The toll-free numbers that can be used to join the meeting.',
							items: { type: 'string', description: 'A toll-free phone number.' },
						},
						tollNumbers: {
							type: 'array',
							description: 'The toll numbers that can be used to join the meeting.',
							items: { type: 'string', description: 'A toll phone number.' },
						},
					},
					required: [],
				},
				allowedPresenters: {
					type: 'string',
					description: 'Specifies who can be a presenter.',
				},
				isEntryExitAnnounced: {
					type: 'boolean',
					description: 'Whether to announce when callers join or leave.',
				},
				lobbyBypassSettings: {
					type: 'object',
					description: 'Settings for which participants can bypass the lobby.',
					properties: {
						scope: {
							type: 'string',
							description: 'The type of participants automatically admitted.',
						},
						isDialInBypassEnabled: {
							type: 'boolean',
							description: 'Whether dial-in users bypass the lobby.',
						},
					},
					required: [],
				},
				participants: {
					type: 'object',
					description: 'The participants associated with the meeting.',
					properties: {
						organizer: {
							type: 'object',
							description: 'The meeting organizer.',
							properties: {
								upn: {
									type: 'string',
									description: 'The user principal name of the organizer.',
								},
								role: { type: 'string', description: 'The role of the organizer.' },
								identity: {
									type: 'object',
									description: 'The identity set of the organizer.',
									properties: {
										user: {
											type: 'object',
											description: 'The user identity.',
											properties: {
												id: {
													type: 'string',
													description:
														'The unique identifier of the user.',
												},
												displayName: {
													type: 'string',
													description: 'The display name of the user.',
												},
												userIdentityType: {
													type: 'string',
													description: 'The type of user identity.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							required: [],
						},
						attendees: {
							type: 'array',
							description: 'The attendees of the meeting.',
							items: {
								type: 'object',
								description: 'A meeting attendee.',
								properties: {
									upn: {
										type: 'string',
										description: 'The user principal name of the attendee.',
									},
									role: {
										type: 'string',
										description: 'The role of the attendee.',
									},
									identity: {
										type: 'object',
										description: 'The identity set of the attendee.',
										properties: {
											user: {
												type: 'object',
												description: 'The user identity.',
												properties: {
													id: {
														type: 'string',
														description:
															'The unique identifier of the user.',
													},
													displayName: {
														type: 'string',
														description:
															'The display name of the user.',
													},
													userIdentityType: {
														type: 'string',
														description: 'The type of user identity.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				chatInfo: {
					type: 'object',
					description: 'The chat information associated with this meeting.',
					properties: {
						threadId: {
							type: 'string',
							description: 'The unique identifier of the chat thread.',
						},
						messageId: {
							type: 'string',
							description: 'The unique identifier of the message.',
						},
						replyChainMessageId: {
							type: 'string',
							description: 'The ID of the reply chain message.',
						},
					},
					required: [],
				},
				videoTeleconferenceId: {
					type: 'string',
					description: 'The video teleconferencing ID.',
				},
				externalId: { type: 'string', description: 'The external ID (custom identifier).' },
				recordAutomatically: {
					type: 'boolean',
					description: 'Whether to record the meeting automatically.',
				},
				allowAttendeeToEnableCamera: {
					type: 'boolean',
					description: 'Whether attendees can turn on their cameras.',
				},
				allowAttendeeToEnableMic: {
					type: 'boolean',
					description: 'Whether attendees can turn on their microphones.',
				},
				allowMeetingChat: {
					type: 'string',
					description: 'Specifies the mode of meeting chat.',
				},
				allowTeamworkReactions: {
					type: 'boolean',
					description: 'Whether Teams reactions are enabled.',
				},
				allowRecording: { type: 'boolean', description: 'Whether recording is enabled.' },
				allowTranscription: {
					type: 'boolean',
					description: 'Whether transcription is enabled.',
				},
				allowWhiteboard: { type: 'boolean', description: 'Whether whiteboard is enabled.' },
				allowBreakoutRooms: {
					type: 'boolean',
					description: 'Whether breakout rooms are enabled.',
				},
				allowPowerPointSharing: {
					type: 'boolean',
					description: 'Whether PowerPoint live is enabled.',
				},
				allowLiveShare: { type: 'string', description: 'Whether live share is enabled.' },
				allowCopyingAndSharingMeetingContent: {
					type: 'boolean',
					description:
						'Whether the ability to copy and share meeting content is enabled.',
				},
				allowParticipantsToChangeName: {
					type: 'boolean',
					description: 'Whether participants are allowed to rename themselves.',
				},
				allowedLobbyAdmitters: {
					type: 'string',
					description: 'Specifies the users who can admit from the lobby.',
				},
				isEndToEndEncryptionEnabled: {
					type: 'boolean',
					description: 'Whether end-to-end encryption is enabled.',
				},
				joinMeetingIdSettings: {
					type: 'object',
					description: 'The meeting ID and passcode settings.',
					properties: {
						joinMeetingId: {
							type: 'string',
							description: 'The meeting ID used to join the meeting.',
						},
						isPasscodeRequired: {
							type: 'boolean',
							description: 'Whether a passcode is required to join.',
						},
						passcode: {
							type: 'string',
							description: 'The passcode to join the meeting.',
						},
					},
					required: [],
				},
				meetingOptionsWebUrl: {
					type: 'string',
					description: 'The URL to the Teams meeting options page.',
				},
				meetingType: { type: 'string', description: 'The type of the online meeting.' },
				shareMeetingChatHistoryDefault: {
					type: 'string',
					description: 'Whether meeting chat history is shared with participants.',
				},
				isBroadcast: {
					type: 'boolean',
					description: 'Whether this meeting is a Teams live event (deprecated).',
				},
				watermarkProtection: {
					type: 'object',
					description:
						'Specifies whether the client application should apply a watermark.',
					properties: {
						isEnabledForContentSharing: {
							type: 'boolean',
							description: 'Whether watermark is applied to any shared content.',
						},
						isEnabledForVideo: {
							type: 'boolean',
							description:
								"Whether watermark is applied to the attendee's video feed.",
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'getPresenceByUserIds',
		label: 'Get presence by user IDs',
		description: 'Retrieves the presence information for multiple users.',
		context:
			'---\nname: getPresenceByUserIds\ndescription: Retrieves the presence information for multiple users.\n---\n\nRetrieves the presence information for multiple users at once (batch). Despite using POST, this is a read-only operation that does not modify any state. Maximum 650 user IDs per request.\n\nNote: This endpoint is not available for personal Microsoft accounts.\n\nRefer to the [Microsoft Graph API reference — Get presences](https://learn.microsoft.com/en-us/graph/api/cloudcommunications-getpresencesbyuserid) for full details.',
		accounts: { azure: { scope: ['Presence.Read.All', 'User.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				ids: {
					type: 'array',
					description:
						'The list of user IDs to get presence for. Maximum 650 IDs per request.',
					items: { type: 'string', description: 'The unique identifier of a user.' },
					maxItems: 650,
				},
			},
			required: ['ids'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				value: {
					type: 'array',
					description: 'The list of presence information for the requested users.',
					items: {
						type: 'object',
						description: 'A presence resource.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the user.',
							},
							availability: {
								type: 'string',
								description:
									'The base presence information. Possible values: `Available`, `Away`, `BeRightBack`, `Busy`, `DoNotDisturb`, `Focusing`, `InACall`, `InAMeeting`, `Offline`, `Presenting`, `PresenceUnknown`.',
							},
							activity: {
								type: 'string',
								description:
									"The supplemental information to a user's availability. Possible values: `Available`, `Away`, `BeRightBack`, `Busy`, `DoNotDisturb`, `Offline`, `OutOfOffice`, `PresenceUnknown`.",
							},
							outOfOfficeSettings: {
								type: 'object',
								description: 'The out of office settings for the user.',
								properties: {
									isOutOfOffice: {
										type: 'boolean',
										description: 'Whether the user is currently out of office.',
									},
									message: {
										type: 'string',
										description:
											'The out-of-office message configured by the user.',
									},
								},
								required: [],
							},
							statusMessage: {
								type: 'object',
								description: 'The presence status message of the user.',
								properties: {
									expiryDateTime: {
										type: 'object',
										description: 'Time in which the status message expires.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The date and time value.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
									message: {
										type: 'object',
										description: 'The status message item.',
										properties: {
											content: {
												type: 'string',
												description: 'The content of the item body.',
											},
											contentType: {
												type: 'string',
												description: 'The type of the content.',
											},
										},
										required: [],
									},
									publishedDateTime: {
										type: 'string',
										description:
											'Time in which the status message was published.',
									},
								},
								required: [],
							},
							sequenceNumber: {
								type: 'string',
								description:
									'A lexicographically sortable string representing the version of the presence.',
							},
							workLocation: {
								type: 'object',
								description: "The user's aggregated work location state.",
								properties: {
									placeId: {
										type: 'string',
										description: 'Identifier of the place, if applicable.',
									},
									source: {
										type: 'string',
										description:
											'Which layer wins the aggregation. Possible values: `none`, `manual`, `scheduled`, `automatic`.',
									},
									workLocationType: {
										type: 'string',
										description:
											'Semantic type of the location. Possible values: `unspecified`, `office`, `remote`, `timeOff`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'getTeam',
		label: 'Get a team',
		description: 'Retrieves the properties of a group.',
		context:
			'---\nname: getTeam\ndescription: Retrieves the properties of a group.\n---\n\nRetrieves the properties of a group (team) by its ID. By default, only a subset of properties is returned. Use the `select` parameter (comma-separated property names) to request additional properties.\n\nRefer to the [Microsoft Graph API reference — Get group](https://learn.microsoft.com/en-us/graph/api/group-get) for the full list of available properties.',
		accounts: { azure: { scope: ['Group.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				groupId: { type: 'string', description: 'The unique identifier of the group.' },
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to include in the response. By default, only a subset of properties is returned. Use this to request additional properties. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).',
				},
			},
			required: ['groupId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier for the group.' },
				displayName: { type: 'string', description: 'The display name for the group.' },
				description: {
					type: 'string',
					description: 'An optional description for the group.',
				},
				groupTypes: {
					type: 'array',
					description: 'Specifies the group type and its membership.',
					items: { type: 'string', description: 'A group type value.' },
				},
				mail: { type: 'string', description: 'The SMTP address for the group.' },
				mailEnabled: {
					type: 'boolean',
					description: 'Specifies whether the group is mail-enabled.',
				},
				mailNickname: { type: 'string', description: 'The mail alias for the group.' },
				securityEnabled: {
					type: 'boolean',
					description: 'Specifies whether the group is a security group.',
				},
				visibility: {
					type: 'string',
					description: 'Specifies the group join policy and content visibility.',
				},
				classification: {
					type: 'string',
					description: 'Describes a classification for the group.',
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp of when the group was created.',
				},
				renewedDateTime: {
					type: 'string',
					description: 'Timestamp of when the group was last renewed.',
				},
				expirationDateTime: {
					type: 'string',
					description: 'Timestamp of when the group is set to expire.',
				},
				deletedDateTime: {
					type: 'string',
					description: 'Timestamp when the group was deleted.',
				},
				isArchived: { type: 'boolean', description: 'Whether the group is archived.' },
				isAssignableToRole: {
					type: 'boolean',
					description:
						'Indicates whether this group can be assigned to a Microsoft Entra role.',
				},
				isManagementRestricted: {
					type: 'boolean',
					description: 'Whether the group is restricted from management operations.',
				},
				membershipRule: {
					type: 'string',
					description: 'The rule that determines members for a dynamic group.',
				},
				membershipRuleProcessingState: {
					type: 'string',
					description: 'Whether dynamic membership processing is on or paused.',
				},
				preferredDataLocation: {
					type: 'string',
					description: 'The preferred data location for the Microsoft 365 group.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language for a Microsoft 365 group.',
				},
				proxyAddresses: {
					type: 'array',
					description: 'Email addresses for the group.',
					items: { type: 'string', description: 'A proxy address.' },
				},
				resourceBehaviorOptions: {
					type: 'array',
					description: 'Specifies the group behaviors set during creation.',
					items: { type: 'string', description: 'A resource behavior option.' },
				},
				resourceProvisioningOptions: {
					type: 'array',
					description: 'Specifies group resources associated with the group.',
					items: { type: 'string', description: 'A resource provisioning option.' },
				},
				securityIdentifier: {
					type: 'string',
					description: 'Security identifier of the group.',
				},
				theme: {
					type: 'string',
					description: "Specifies a Microsoft 365 group's color theme.",
				},
				uniqueName: {
					type: 'string',
					description: 'A unique identifier for the group used as an alternate key.',
				},
				onPremisesDomainName: {
					type: 'string',
					description: 'Contains the on-premises domain FQDN.',
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'Extension attributes 1-15 synced from on-premises Active Directory.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'First extension attribute.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Second extension attribute.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Third extension attribute.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Fourth extension attribute.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Fifth extension attribute.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Sixth extension attribute.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Seventh extension attribute.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Eighth extension attribute.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Ninth extension attribute.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Tenth extension attribute.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Eleventh extension attribute.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Twelfth extension attribute.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Thirteenth extension attribute.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Fourteenth extension attribute.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Fifteenth extension attribute.',
						},
					},
					required: [],
				},
				onPremisesLastSyncDateTime: {
					type: 'string',
					description: 'Last time the group was synced with on-premises directory.',
				},
				onPremisesNetBiosName: {
					type: 'string',
					description: 'Contains the on-premises NetBIOS name.',
				},
				onPremisesProvisioningErrors: {
					type: 'array',
					description: 'Errors during on-premises provisioning.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							category: {
								type: 'string',
								description:
									'Category of the error. Possible value: `PropertyConflict`.',
							},
							occurredDateTime: {
								type: 'string',
								description: 'The date and time at which the error occurred.',
							},
							propertyCausingError: {
								type: 'string',
								description: 'Name of the directory property causing the error.',
							},
							value: {
								type: 'string',
								description: 'Value of the property causing the error.',
							},
						},
						required: [],
					},
				},
				onPremisesSamAccountName: {
					type: 'string',
					description: 'Contains the on-premises SAM account name.',
				},
				onPremisesSecurityIdentifier: {
					type: 'string',
					description: 'Contains the on-premises security identifier (SID).',
				},
				onPremisesSyncEnabled: {
					type: 'boolean',
					description: '`true` if synced from an on-premises directory.',
				},
				assignedLabels: {
					type: 'array',
					description: 'Sensitivity label pairs associated with the group.',
					items: {
						type: 'object',
						description: 'An assigned label.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The display name of the label.',
							},
							labelId: {
								type: 'string',
								description: 'The unique identifier of the label.',
							},
						},
						required: [],
					},
				},
				assignedLicenses: {
					type: 'array',
					description: 'The licenses assigned to the group.',
					items: {
						type: 'object',
						description: 'An assigned license.',
						properties: {
							disabledPlans: {
								type: 'array',
								description: 'Collection of IDs for plans that have been disabled.',
								items: { type: 'string', description: 'A disabled plan ID.' },
							},
							skuId: {
								type: 'string',
								description: 'The unique identifier for the SKU.',
							},
						},
						required: [],
					},
				},
				hasMembersWithLicenseErrors: {
					type: 'boolean',
					description: 'Whether there are members with license errors.',
				},
				licenseProcessingState: {
					type: 'string',
					description:
						'The status of the group license assignment. Possible values: `QueuedForProcessing`, `ProcessingInProgress`, `ProcessingComplete`.',
				},
				serviceProvisioningErrors: {
					type: 'array',
					description: 'Errors published by a federated service.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							createdDateTime: {
								type: 'string',
								description: 'The date and time at which the error occurred.',
							},
							isResolved: {
								type: 'boolean',
								description: 'Whether the error has been resolved.',
							},
							serviceInstance: {
								type: 'string',
								description: 'Qualified service instance that published the error.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'listChannels',
		label: 'List channels',
		description: 'Lists all channels in a team.',
		context:
			'---\nname: listChannels\ndescription: Lists all channels in a team.\n---\n\nRetrieves the list of channels in a team. This includes standard, private, and shared channels.\n\n**Pagination:** if the response includes `@odata.nextLink`, pass its value into the `@odata.nextLink` input parameter to retrieve the next page. Repeat until `@odata.nextLink` is absent from the response.\n\nRefer to the [Microsoft Graph API reference — List channels](https://learn.microsoft.com/en-us/graph/api/channel-list) for full details.',
		accounts: { azure: { scope: ['Group.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				filter: {
					type: 'string',
					description:
						"An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression to filter results. Example: `membershipType eq 'standard'`.",
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to include in the response. Excluding the `email` property improves performance. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).',
				},
				nextLink: {
					type: 'string',
					description:
						'The `@odata.nextLink` URL from a previous response. When provided, all other parameters are ignored — the URL already contains them.',
				},
			},
			required: ['teamId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				value: {
					type: 'array',
					description: 'The list of channels.',
					items: {
						type: 'object',
						description: 'A channel resource.',
						properties: {
							id: { type: 'string', description: "The channel's unique identifier." },
							displayName: {
								type: 'string',
								description: 'Channel name as it appears in Microsoft Teams.',
							},
							description: {
								type: 'string',
								description: 'Optional textual description for the channel.',
							},
							membershipType: {
								type: 'string',
								description: 'The type of the channel.',
							},
							webUrl: {
								type: 'string',
								description: 'A hyperlink to the channel in Microsoft Teams.',
							},
							email: {
								type: 'string',
								description:
									'The email address for sending messages to the channel.',
							},
							createdDateTime: {
								type: 'string',
								description: 'Timestamp at which the channel was created.',
							},
							tenantId: {
								type: 'string',
								description: 'The ID of the Microsoft Entra tenant.',
							},
							isArchived: {
								type: 'boolean',
								description: 'Whether the channel is archived.',
							},
							isFavoriteByDefault: {
								type: 'boolean',
								description: 'Whether the channel is marked as recommended.',
							},
							layoutType: {
								type: 'string',
								description: 'The layout type of the channel.',
							},
							summary: {
								type: 'object',
								description: 'Summary information about the channel.',
								properties: {
									ownersCount: {
										type: 'number',
										description: 'Count of owners in the channel.',
									},
									membersCount: {
										type: 'number',
										description: 'Count of members in the channel.',
									},
									guestsCount: {
										type: 'number',
										description: 'Count of guests in the channel.',
									},
									hasMembersFromOtherTenants: {
										type: 'boolean',
										description:
											'Indicates whether external members are included.',
									},
								},
								required: [],
							},
							migrationMode: {
								type: 'string',
								description: 'Whether the channel is in migration mode.',
							},
							originalCreatedDateTime: {
								type: 'string',
								description: 'Timestamp of the original creation time.',
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL for the next page of results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'listGroups',
		label: 'List groups',
		description: 'Lists all groups in the organization.',
		context:
			"---\nname: listGroups\ndescription: Lists all groups in the organization.\n---\n\nRetrieves a list of all groups in the organization, including Microsoft 365 groups, security groups, and distribution groups. Use the `filter` parameter with OData expressions to narrow results (e.g. `startsWith(displayName, 'HR')`).\n\n**Pagination:** results may span multiple pages. Use `top` to control page size. If the response includes `@odata.nextLink`, pass its value into the `@odata.nextLink` input parameter to retrieve the next page. Repeat until `@odata.nextLink` is absent from the response.\n\nRefer to the [Microsoft Graph API reference — List groups](https://learn.microsoft.com/en-us/graph/api/group-list) for full details.",
		accounts: { azure: { scope: ['Group.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				filter: {
					type: 'string',
					description:
						"An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression to filter results. Example: `displayName eq 'HR Team'` or `startsWith(displayName, 'HR')`.",
				},
				orderby: {
					type: 'string',
					description:
						'An [OData `$orderby`](https://learn.microsoft.com/en-us/graph/query-parameters#orderby-parameter) expression to sort results. Example: `displayName asc` or `displayName desc`.',
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to include in the response. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).',
				},
				top: {
					type: 'number',
					description: 'The maximum number of results per page. Maximum value is `999`.',
					minimum: 1,
					maximum: 999,
				},
				search: {
					type: 'string',
					description:
						'An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Supports tokenization on `displayName` and `description` fields. Requires the `ConsistencyLevel: eventual` header (set via `arbitraryCall` if needed). Example: `"displayName:Video"`.',
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include a count of the total number of matching items. Requires the `ConsistencyLevel: eventual` header.',
				},
				nextLink: {
					type: 'string',
					description:
						'The `@odata.nextLink` URL from a previous response. When provided, all other parameters are ignored — the URL already contains them.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				'@odata.count': {
					type: 'number',
					description:
						'The total count of matching items. Only present when `$count=true`.',
				},
				value: {
					type: 'array',
					description: 'The list of groups.',
					items: {
						type: 'object',
						description: 'A group resource.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the group.',
							},
							displayName: {
								type: 'string',
								description: 'The display name for the group.',
							},
							description: {
								type: 'string',
								description: 'An optional description for the group.',
							},
							groupTypes: {
								type: 'array',
								description: 'Specifies the group type and its membership.',
								items: { type: 'string', description: 'A group type value.' },
							},
							mail: {
								type: 'string',
								description: 'The SMTP address for the group.',
							},
							mailEnabled: {
								type: 'boolean',
								description: 'Specifies whether the group is mail-enabled.',
							},
							mailNickname: {
								type: 'string',
								description: 'The mail alias for the group.',
							},
							securityEnabled: {
								type: 'boolean',
								description: 'Specifies whether the group is a security group.',
							},
							visibility: {
								type: 'string',
								description:
									'Specifies the group join policy and content visibility.',
							},
							classification: {
								type: 'string',
								description: 'Describes a classification for the group.',
							},
							createdDateTime: {
								type: 'string',
								description: 'Timestamp of when the group was created.',
							},
							renewedDateTime: {
								type: 'string',
								description: 'Timestamp of when the group was last renewed.',
							},
							expirationDateTime: {
								type: 'string',
								description: 'Timestamp of when the group is set to expire.',
							},
							deletedDateTime: {
								type: 'string',
								description: 'Timestamp when the group was deleted.',
							},
							isAssignableToRole: {
								type: 'boolean',
								description:
									'Indicates whether this group can be assigned to a Microsoft Entra role.',
							},
							membershipRule: {
								type: 'string',
								description: 'The rule that determines members for this group.',
							},
							membershipRuleProcessingState: {
								type: 'string',
								description:
									'Whether the dynamic membership processing is on or paused.',
							},
							preferredDataLocation: {
								type: 'string',
								description:
									'The preferred data location for the Microsoft 365 group.',
							},
							preferredLanguage: {
								type: 'string',
								description: 'The preferred language for a Microsoft 365 group.',
							},
							proxyAddresses: {
								type: 'array',
								description: 'Email addresses for the group.',
								items: { type: 'string', description: 'A proxy address.' },
							},
							resourceProvisioningOptions: {
								type: 'array',
								description:
									'Specifies the group resources associated with the group.',
								items: {
									type: 'string',
									description: 'A resource provisioning option.',
								},
							},
							securityIdentifier: {
								type: 'string',
								description: 'Security identifier of the group.',
							},
							theme: {
								type: 'string',
								description: "Specifies a Microsoft 365 group's color theme.",
							},
							onPremisesSyncEnabled: {
								type: 'boolean',
								description:
									'`true` if this group is synced from an on-premises directory.',
							},
							serviceProvisioningErrors: {
								type: 'array',
								description: 'Errors published by a federated service.',
								items: {
									type: 'object',
									description: 'A provisioning error.',
									properties: {
										createdDateTime: {
											type: 'string',
											description:
												'The date and time at which the error occurred.',
										},
										isResolved: {
											type: 'boolean',
											description: 'Whether the error has been resolved.',
										},
										serviceInstance: {
											type: 'string',
											description:
												'Qualified service instance that published the error.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL for the next page of results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'listJoinedTeams',
		label: 'List joined teams',
		description: 'Lists the teams the authenticated user has joined.',
		context:
			'---\nname: listJoinedTeams\ndescription: Lists the teams the authenticated user has joined.\n---\n\nRetrieves the list of teams the signed-in user is a member of. This API does not currently support OData query parameters for filtering or sorting.\n\nNote: only `id`, `displayName`, `description`, `isArchived`, and `tenantId` are populated in the response. All other team properties are returned as `null`. Use `getTeam` to retrieve full details for a specific team.\n\n**Pagination:** if the response includes `@odata.nextLink`, pass its value into the `@odata.nextLink` input parameter to retrieve the next page. Repeat until `@odata.nextLink` is absent from the response.\n\nRefer to the [Microsoft Graph API reference — List joinedTeams](https://learn.microsoft.com/en-us/graph/api/user-list-joinedteams) for full details.',
		accounts: { azure: { scope: ['Group.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				nextLink: {
					type: 'string',
					description:
						'The `@odata.nextLink` URL from a previous response. When provided, retrieves the next page of results.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				value: {
					type: 'array',
					description: 'The list of teams the user has joined.',
					items: {
						type: 'object',
						description: 'A team resource.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the team.',
							},
							displayName: {
								type: 'string',
								description: 'The display name of the team.',
							},
							description: {
								type: 'string',
								description: 'The description of the team.',
							},
							isArchived: {
								type: 'boolean',
								description: 'Whether the team is archived.',
							},
							createdDateTime: {
								type: 'string',
								description: 'Timestamp at which the team was created.',
							},
							tenantId: {
								type: 'string',
								description: 'The ID of the Microsoft Entra tenant.',
							},
							classification: {
								type: 'string',
								description:
									'An optional label describing the sensitivity of the team.',
							},
							internalId: {
								type: 'string',
								description: "The unique identifier for the team's internal use.",
							},
							specialization: {
								type: 'string',
								description: 'The type of the team.',
							},
							visibility: {
								type: 'string',
								description: 'The visibility of the group and team.',
							},
							webUrl: {
								type: 'string',
								description: 'The URL to the team in Microsoft Teams client.',
							},
							memberSettings: {
								type: 'object',
								description:
									'Settings to configure whether members can perform certain actions.',
								properties: {
									allowCreateUpdateChannels: {
										type: 'boolean',
										description:
											'Whether members can create and update channels.',
									},
									allowDeleteChannels: {
										type: 'boolean',
										description: 'Whether members can delete channels.',
									},
									allowAddRemoveApps: {
										type: 'boolean',
										description: 'Whether members can add and remove apps.',
									},
									allowCreateUpdateRemoveTabs: {
										type: 'boolean',
										description:
											'Whether members can create, update, and remove tabs.',
									},
									allowCreateUpdateRemoveConnectors: {
										type: 'boolean',
										description:
											'Whether members can create, update, and remove connectors.',
									},
								},
								required: [],
							},
							messagingSettings: {
								type: 'object',
								description: 'Settings to configure messaging and mentions.',
								properties: {
									allowUserEditMessages: {
										type: 'boolean',
										description: 'Whether users can edit their sent messages.',
									},
									allowUserDeleteMessages: {
										type: 'boolean',
										description:
											'Whether users can delete their sent messages.',
									},
									allowOwnerDeleteMessages: {
										type: 'boolean',
										description: 'Whether owners can delete any message.',
									},
									allowTeamMentions: {
										type: 'boolean',
										description: 'Whether @team mentions are allowed.',
									},
									allowChannelMentions: {
										type: 'boolean',
										description: 'Whether @channel mentions are allowed.',
									},
								},
								required: [],
							},
							funSettings: {
								type: 'object',
								description: 'Settings to configure fun content.',
								properties: {
									allowGiphy: {
										type: 'boolean',
										description: 'Whether Giphy is enabled.',
									},
									giphyContentRating: {
										type: 'string',
										description: 'The content rating for Giphy.',
									},
									allowStickersAndMemes: {
										type: 'boolean',
										description: 'Whether stickers and memes are enabled.',
									},
									allowCustomMemes: {
										type: 'boolean',
										description: 'Whether custom memes are enabled.',
									},
								},
								required: [],
							},
							guestSettings: {
								type: 'object',
								description:
									'Settings to configure whether guests can create, update, or delete channels.',
								properties: {
									allowCreateUpdateChannels: {
										type: 'boolean',
										description: 'Whether guests can create channels.',
									},
									allowDeleteChannels: {
										type: 'boolean',
										description: 'Whether guests can delete channels.',
									},
								},
								required: [],
							},
							classSettings: {
								type: 'object',
								description: 'Settings for a class-type team.',
								properties: {
									notifyGuardiansAboutAssignments: {
										type: 'boolean',
										description:
											'Whether to send weekly assignments digest emails to parents/guardians.',
									},
								},
								required: [],
							},
							summary: {
								type: 'object',
								description: 'Summary information about the team.',
								properties: {
									ownersCount: {
										type: 'number',
										description: 'Count of owners in the team.',
									},
									membersCount: {
										type: 'number',
										description: 'Count of members in the team.',
									},
									guestsCount: {
										type: 'number',
										description: 'Count of guests in the team.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL for the next page of results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'listUsers',
		label: 'List users',
		description: 'Lists users in the organization.',
		context:
			'---\nname: listUsers\ndescription: Lists users in the organization.\n---\n\nRetrieves a list of user objects. By default, only a limited set of properties is returned for each user. Use the `select` parameter to request specific properties.\n\nSupports OData query parameters `$filter`, `$orderby`, and `$select` for filtering and sorting.\n\n**Pagination:** results may span multiple pages. Use `top` to control page size. If the response includes `@odata.nextLink`, pass its value into the `@odata.nextLink` input parameter to retrieve the next page. Repeat until `@odata.nextLink` is absent from the response.\n\nRefer to the [Microsoft Graph API reference — List users](https://learn.microsoft.com/en-us/graph/api/user-list) for full details.',
		accounts: { azure: { scope: ['User.Read.All'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
		inputSchema: {
			type: 'object',
			properties: {
				filter: {
					type: 'string',
					description:
						"An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression to filter results. Example: `startsWith(displayName, 'John')` or `mail eq 'user@contoso.com'`.",
				},
				orderby: {
					type: 'string',
					description:
						'An [OData `$orderby`](https://learn.microsoft.com/en-us/graph/query-parameters#orderby-parameter) expression to sort results. Example: `displayName asc`.',
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to include in the response. By default only a limited set is returned. Example: `displayName,givenName,postalCode`. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).',
				},
				top: {
					type: 'number',
					description: 'The maximum number of results per page. Maximum value is `999`.',
					minimum: 1,
					maximum: 999,
				},
				search: {
					type: 'string',
					description:
						'An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Requires the `ConsistencyLevel: eventual` header (set via `arbitraryCall` if needed). Example: `"displayName:wa"`.',
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include a count of the total number of matching items. Requires the `ConsistencyLevel: eventual` header.',
				},
				nextLink: {
					type: 'string',
					description:
						'The `@odata.nextLink` URL from a previous response. When provided, all other parameters are ignored — the URL already contains them.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				'@odata.count': {
					type: 'number',
					description:
						'The total count of matching items. Only present when `$count=true`.',
				},
				value: {
					type: 'array',
					description: 'The list of users.',
					items: {
						type: 'object',
						description: 'A user resource.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the user.',
							},
							displayName: {
								type: 'string',
								description: 'The name displayed in the address book for the user.',
							},
							userPrincipalName: {
								type: 'string',
								description: 'The user principal name (UPN) of the user.',
							},
							givenName: {
								type: 'string',
								description: 'The given name (first name) of the user.',
							},
							surname: {
								type: 'string',
								description: "The user's surname (family name).",
							},
							mail: { type: 'string', description: 'The SMTP address for the user.' },
							mailNickname: {
								type: 'string',
								description: 'The mail alias of the user.',
							},
							jobTitle: { type: 'string', description: "The user's job title." },
							mobilePhone: {
								type: 'string',
								description: "The user's mobile phone number.",
							},
							officeLocation: {
								type: 'string',
								description: "The office location in the user's place of business.",
							},
							preferredLanguage: {
								type: 'string',
								description: 'The preferred language for the user.',
							},
							businessPhones: {
								type: 'array',
								description: 'A list of business phone numbers.',
								items: { type: 'string', description: 'A business phone number.' },
							},
							accountEnabled: {
								type: 'boolean',
								description: 'Whether the account is enabled.',
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL for the next page of results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'replyToChannelMessage',
		label: 'Reply to a channel message',
		description: 'Replies to a message in a channel.',
		context:
			'---\nname: replyToChannelMessage\ndescription: Replies to a message in a channel.\n---\n\nCreates a new reply to an existing chatMessage in a specified channel. The reply is posted as a threaded response to the parent message.\n\nRefer to the [Microsoft Graph API reference — Reply to a message in a channel](https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies) for full details.',
		accounts: {
			azure: { scope: ['ChannelMessage.Send', 'Group.Read.All', 'ChannelMessage.Read.All'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				channelId: { type: 'string', description: 'The unique identifier of the channel.' },
				messageId: {
					type: 'string',
					description: 'The unique identifier of the message to reply to.',
				},
				content: {
					type: 'string',
					description:
						'The content of the reply. Can be plain text or HTML depending on the content type.',
				},
				contentType: {
					type: 'string',
					description: 'The type of the reply content.',
					enum: ['text', 'html'],
				},
				subject: { type: 'string', description: 'The subject of the reply (optional).' },
				importance: {
					type: 'string',
					description: 'The importance of the reply.',
					default: '',
					enum: ['', 'normal', 'high', 'urgent'],
				},
				mentions: {
					type: 'array',
					description:
						'A list of entities mentioned in the reply. Each mention must include the `id` (index), `mentionText`, and `mentioned` (identity object).',
					items: {
						type: 'object',
						description: 'A mention in the message.',
						properties: {
							id: {
								type: 'number',
								description:
									'The index (0-based) of the mention in the message body.',
							},
							mentionText: {
								type: 'string',
								description: 'The text to display for the mention.',
							},
							mentioned: {
								type: 'object',
								description:
									'The identity of the mentioned entity (user, team, or channel).',
								properties: {
									user: {
										type: 'object',
										description: 'The mentioned user identity.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier (Azure AD object ID) of the mentioned user.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the mentioned user.',
											},
											userIdentityType: {
												type: 'string',
												description: 'The type of user identity.',
												default: '',
												enum: [
													'',
													'aadUser',
													'onPremiseAadUser',
													'anonymousGuest',
													'federatedUser',
													'personalMicrosoftAccountUser',
													'skypeUser',
													'phoneUser',
													'emailUser',
												],
											},
										},
										required: ['id', 'displayName'],
									},
									conversation: {
										type: 'object',
										description:
											'The mentioned conversation identity (for channel/team mentions).',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier of the conversation.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the conversation.',
											},
											conversationIdentityType: {
												type: 'string',
												description:
													'The type of the conversation identity.',
												default: '',
												enum: ['', 'team', 'channel', 'chat'],
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: ['id', 'mentionText', 'mentioned'],
					},
				},
				attachments: {
					type: 'array',
					description: 'A list of attachments to include with the reply.',
					items: {
						type: 'object',
						description: 'A message attachment.',
						properties: {
							contentType: {
								type: 'string',
								description:
									'The media type of the content attachment. Must be `reference` for file attachments.',
								default: 'reference',
							},
							contentUrl: {
								type: 'string',
								description: 'The URL to the attachment content.',
							},
							name: {
								type: 'string',
								description: 'The display name of the attachment.',
							},
							id: { type: 'string', description: 'The ID of the attachment.' },
							teamsAppId: {
								type: 'string',
								description:
									'The ID of the Teams app associated with the attachment.',
							},
							thumbnailUrl: {
								type: 'string',
								description: 'The URL to a thumbnail image for the attachment.',
							},
						},
						required: ['contentUrl'],
					},
				},
			},
			required: ['teamId', 'channelId', 'messageId', 'content', 'contentType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the message.' },
				subject: {
					type: 'string',
					description: 'The subject of the chat message, in plaintext.',
				},
				body: {
					type: 'object',
					description: 'The body of the message.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values: `text`, `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The sender of the message.',
					properties: {
						user: {
							type: 'object',
							description: 'The user identity of the sender.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the user.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the user.',
								},
								userIdentityType: {
									type: 'string',
									description: 'The type of user identity.',
								},
							},
							required: [],
						},
						application: {
							type: 'object',
							description: 'The application identity of the sender.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the application.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the application.',
								},
								applicationIdentityType: {
									type: 'string',
									description: 'The type of application identity.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp when the message was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'Timestamp when the message was last modified.',
				},
				lastEditedDateTime: {
					type: 'string',
					description: 'Timestamp when edits to the chat message were made.',
				},
				deletedDateTime: {
					type: 'string',
					description:
						'Timestamp at which the chat message was deleted, or null if not deleted.',
				},
				importance: { type: 'string', description: 'The importance of the message.' },
				messageType: { type: 'string', description: 'The type of chat message.' },
				webUrl: { type: 'string', description: 'Link to the message in Microsoft Teams.' },
				locale: {
					type: 'string',
					description: 'Locale of the chat message set by the client.',
				},
				etag: { type: 'string', description: 'Version number of the chat message.' },
				attachments: {
					type: 'array',
					description: 'References to attached objects like files, tabs, meetings.',
					items: {
						type: 'object',
						description: 'A message attachment.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the attachment.' },
							contentType: {
								type: 'string',
								description: 'The media type of the content attachment.',
							},
							contentUrl: {
								type: 'string',
								description: 'The URL for the content of the attachment.',
							},
							content: {
								type: 'string',
								description: 'The content of the attachment (for rich cards).',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							teamsAppId: {
								type: 'string',
								description:
									'The ID of the Teams app associated with the attachment.',
							},
							thumbnailUrl: {
								type: 'string',
								description: 'The URL to a thumbnail image for the attachment.',
							},
						},
						required: [],
					},
				},
				mentions: {
					type: 'array',
					description: 'List of entities mentioned in the chat message.',
					items: {
						type: 'object',
						description: 'A mention in the message.',
						properties: {
							id: { type: 'number', description: 'The index of the mention.' },
							mentionText: {
								type: 'string',
								description: 'The string used to represent the mention.',
							},
							mentioned: {
								type: 'object',
								description: 'The entity mentioned.',
								properties: {
									user: {
										type: 'object',
										description: 'The mentioned user identity.',
										properties: {
											id: {
												type: 'string',
												description: 'The unique identifier of the user.',
											},
											displayName: {
												type: 'string',
												description: 'The display name of the user.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description: 'The mentioned conversation identity.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier of the conversation.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the conversation.',
											},
											conversationIdentityType: {
												type: 'string',
												description: 'The type of conversation identity.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				reactions: {
					type: 'array',
					description: 'Reactions for this chat message.',
					items: {
						type: 'object',
						description: 'A reaction to the message.',
						properties: {
							reactionType: {
								type: 'string',
								description:
									'The reaction type. Possible values: `like`, `angry`, `sad`, `laugh`, `heart`, `surprised`.',
							},
							createdDateTime: {
								type: 'string',
								description: 'Timestamp of when the reaction was created.',
							},
							user: {
								type: 'object',
								description: 'The user who reacted.',
								properties: {
									id: {
										type: 'string',
										description: 'The unique identifier of the user.',
									},
									displayName: {
										type: 'string',
										description: 'The display name of the user.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				summary: { type: 'string', description: 'Summary text of the chat message.' },
				chatId: { type: 'string', description: 'The ID of the chat.' },
				channelIdentity: {
					type: 'object',
					description: 'The identity of the channel.',
					properties: {
						teamId: {
							type: 'string',
							description: 'The unique identifier of the team.',
						},
						channelId: {
							type: 'string',
							description: 'The unique identifier of the channel.',
						},
					},
					required: [],
				},
				replyToId: {
					type: 'string',
					description:
						'ID of the parent chat message or root chat message of the thread.',
				},
				policyViolation: {
					type: 'object',
					description:
						'Defines the properties of a policy violation set by a DLP application.',
					properties: {
						dlpAction: {
							type: 'string',
							description:
								'The action taken by the DLP provider. Possible values: `none`, `notifySender`, `blockAccess`, `blockAccessExternal`.',
						},
						justificationText: {
							type: 'string',
							description:
								'The justification text provided by the sender for an override.',
						},
						policyTip: {
							type: 'object',
							description:
								'Information to display to the message sender about why the message was flagged.',
							properties: {
								generalText: {
									type: 'string',
									description: 'General explanatory text for the policy tip.',
								},
								complianceUrl: {
									type: 'string',
									description:
										'The URL for more information on the compliance policy.',
								},
								matchedConditionDescriptions: {
									type: 'array',
									description: 'The list of matched condition descriptions.',
									items: {
										type: 'string',
										description: 'A matched condition description.',
									},
								},
							},
							required: [],
						},
						userAction: {
							type: 'string',
							description:
								'The action taken by the user. Possible values: `none`, `override`, `reportFalsePositive`.',
						},
						verdictDetails: {
							type: 'string',
							description:
								'What the sender may do to overcome the violation. Possible values: `none`, `allowFalsePositiveOverride`, `allowOverrideWithoutJustification`, `allowOverrideWithJustification`.',
						},
					},
					required: [],
				},
				eventDetail: {
					type: 'object',
					description:
						'Details of an event that happened in a chat, channel, or team. The shape varies by event type — use the `@odata.type` discriminator to determine the specific event.',
					properties: {
						'@odata.type': {
							type: 'string',
							description:
								'The OData type discriminator indicating the specific event type (e.g. `#microsoft.graph.channelAddedEventMessageDetail`).',
						},
					},
					required: [],
				},
				messageHistory: {
					type: 'array',
					description: 'Activity history of the message.',
					items: {
						type: 'object',
						description: 'A history item.',
						properties: {
							modifiedDateTime: {
								type: 'string',
								description: 'The date and time when the message was modified.',
							},
							actions: {
								type: 'string',
								description:
									'The action that occurred on the message. Possible values: `reactionAdded`, `reactionRemoved`, `actionUndefined`.',
							},
							reaction: {
								type: 'object',
								description: 'The reaction in the modified message.',
								properties: {
									reactionType: {
										type: 'string',
										description: 'The reaction type.',
									},
									createdDateTime: {
										type: 'string',
										description: 'Timestamp of when the reaction was created.',
									},
									user: {
										type: 'object',
										description: 'The user who reacted.',
										properties: {
											id: {
												type: 'string',
												description: 'The unique identifier of the user.',
											},
											displayName: {
												type: 'string',
												description: 'The display name of the user.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'sendChannelMessage',
		label: 'Send a channel message',
		description: 'Sends a message to a channel.',
		context:
			'---\nname: sendChannelMessage\ndescription: Sends a message to a channel.\n---\n\nSends a new chatMessage in the specified channel of a team. The content can be plain text or HTML (set `contentType` accordingly).\n\nNote: This endpoint sends messages to channels only. To send messages to a chat, use `sendChatMessage` instead.\n\nRefer to the [Microsoft Graph API reference — Send chatMessage in channel](https://learn.microsoft.com/en-us/graph/api/channel-post-messages) for full details.',
		accounts: { azure: { scope: ['ChannelMessage.Send', 'Group.Read.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				channelId: { type: 'string', description: 'The unique identifier of the channel.' },
				content: {
					type: 'string',
					description:
						'The content of the message. Can be plain text or HTML depending on the content type.',
				},
				contentType: {
					type: 'string',
					description: 'The type of the message content.',
					enum: ['text', 'html'],
				},
				subject: {
					type: 'string',
					description: 'The subject of the message (optional, displayed as a heading).',
				},
				importance: {
					type: 'string',
					description: 'The importance of the message.',
					default: '',
					enum: ['', 'normal', 'high', 'urgent'],
				},
				mentions: {
					type: 'array',
					description:
						'A list of entities mentioned in the message. Each mention must include the `id` (index), `mentionText`, and `mentioned` (identity object with `user.id` and `user.displayName`).',
					items: {
						type: 'object',
						description: 'A mention in the message.',
						properties: {
							id: {
								type: 'number',
								description:
									'The index (0-based) of the mention in the message body. Must match the `<at id="X">` tag in the HTML content.',
							},
							mentionText: {
								type: 'string',
								description: 'The text to display for the mention.',
							},
							mentioned: {
								type: 'object',
								description:
									'The identity of the mentioned entity (user, team, or channel).',
								properties: {
									user: {
										type: 'object',
										description: 'The mentioned user identity.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier (Azure AD object ID) of the mentioned user.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the mentioned user.',
											},
											userIdentityType: {
												type: 'string',
												description: 'The type of user identity.',
												default: '',
												enum: [
													'',
													'aadUser',
													'onPremiseAadUser',
													'anonymousGuest',
													'federatedUser',
													'personalMicrosoftAccountUser',
													'skypeUser',
													'phoneUser',
													'emailUser',
												],
											},
										},
										required: ['id', 'displayName'],
									},
									conversation: {
										type: 'object',
										description:
											'The mentioned conversation identity (for channel/team mentions).',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier of the conversation.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the conversation.',
											},
											conversationIdentityType: {
												type: 'string',
												description:
													'The type of the conversation identity.',
												default: '',
												enum: ['', 'team', 'channel', 'chat'],
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: ['id', 'mentionText', 'mentioned'],
					},
				},
				attachments: {
					type: 'array',
					description: 'A list of attachments to include with the message.',
					items: {
						type: 'object',
						description: 'A message attachment.',
						properties: {
							contentType: {
								type: 'string',
								description:
									'The media type of the content attachment. Must be `reference` for file attachments.',
								default: 'reference',
							},
							contentUrl: {
								type: 'string',
								description:
									'The URL to the attachment content. Must be a OneDrive link.',
							},
							name: {
								type: 'string',
								description: 'The display name of the attachment.',
							},
							id: { type: 'string', description: 'The ID of the attachment.' },
							teamsAppId: {
								type: 'string',
								description:
									'The ID of the Teams app associated with the attachment.',
							},
							thumbnailUrl: {
								type: 'string',
								description: 'The URL to a thumbnail image for the attachment.',
							},
						},
						required: ['contentUrl'],
					},
				},
			},
			required: ['teamId', 'channelId', 'content', 'contentType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the message.' },
				subject: {
					type: 'string',
					description: 'The subject of the chat message, in plaintext.',
				},
				body: {
					type: 'object',
					description: 'The body of the message.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values: `text`, `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The sender of the message.',
					properties: {
						user: {
							type: 'object',
							description: 'The user identity of the sender.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the user.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the user.',
								},
								userIdentityType: {
									type: 'string',
									description: 'The type of user identity.',
								},
							},
							required: [],
						},
						application: {
							type: 'object',
							description: 'The application identity of the sender.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the application.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the application.',
								},
								applicationIdentityType: {
									type: 'string',
									description: 'The type of application identity.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp when the message was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'Timestamp when the message was last modified.',
				},
				lastEditedDateTime: {
					type: 'string',
					description: 'Timestamp when edits to the chat message were made.',
				},
				deletedDateTime: {
					type: 'string',
					description:
						'Timestamp at which the chat message was deleted, or null if not deleted.',
				},
				importance: { type: 'string', description: 'The importance of the message.' },
				messageType: { type: 'string', description: 'The type of chat message.' },
				webUrl: { type: 'string', description: 'Link to the message in Microsoft Teams.' },
				locale: {
					type: 'string',
					description: 'Locale of the chat message set by the client.',
				},
				etag: { type: 'string', description: 'Version number of the chat message.' },
				attachments: {
					type: 'array',
					description: 'References to attached objects like files, tabs, meetings.',
					items: {
						type: 'object',
						description: 'A message attachment.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the attachment.' },
							contentType: {
								type: 'string',
								description: 'The media type of the content attachment.',
							},
							contentUrl: {
								type: 'string',
								description: 'The URL for the content of the attachment.',
							},
							content: {
								type: 'string',
								description: 'The content of the attachment (for rich cards).',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							teamsAppId: {
								type: 'string',
								description:
									'The ID of the Teams app associated with the attachment.',
							},
							thumbnailUrl: {
								type: 'string',
								description: 'The URL to a thumbnail image for the attachment.',
							},
						},
						required: [],
					},
				},
				mentions: {
					type: 'array',
					description: 'List of entities mentioned in the chat message.',
					items: {
						type: 'object',
						description: 'A mention in the message.',
						properties: {
							id: { type: 'number', description: 'The index of the mention.' },
							mentionText: {
								type: 'string',
								description: 'The string used to represent the mention.',
							},
							mentioned: {
								type: 'object',
								description: 'The entity mentioned.',
								properties: {
									user: {
										type: 'object',
										description: 'The mentioned user identity.',
										properties: {
											id: {
												type: 'string',
												description: 'The unique identifier of the user.',
											},
											displayName: {
												type: 'string',
												description: 'The display name of the user.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description: 'The mentioned conversation identity.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier of the conversation.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the conversation.',
											},
											conversationIdentityType: {
												type: 'string',
												description: 'The type of conversation identity.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				reactions: {
					type: 'array',
					description: 'Reactions for this chat message.',
					items: {
						type: 'object',
						description: 'A reaction to the message.',
						properties: {
							reactionType: {
								type: 'string',
								description:
									'The reaction type. Possible values: `like`, `angry`, `sad`, `laugh`, `heart`, `surprised`.',
							},
							createdDateTime: {
								type: 'string',
								description: 'Timestamp of when the reaction was created.',
							},
							user: {
								type: 'object',
								description: 'The user who reacted.',
								properties: {
									id: {
										type: 'string',
										description: 'The unique identifier of the user.',
									},
									displayName: {
										type: 'string',
										description: 'The display name of the user.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				summary: { type: 'string', description: 'Summary text of the chat message.' },
				chatId: { type: 'string', description: 'The ID of the chat.' },
				channelIdentity: {
					type: 'object',
					description: 'The identity of the channel.',
					properties: {
						teamId: {
							type: 'string',
							description: 'The unique identifier of the team.',
						},
						channelId: {
							type: 'string',
							description: 'The unique identifier of the channel.',
						},
					},
					required: [],
				},
				replyToId: {
					type: 'string',
					description:
						'ID of the parent chat message or root chat message of the thread.',
				},
				policyViolation: {
					type: 'object',
					description:
						'Defines the properties of a policy violation set by a DLP application.',
					properties: {
						dlpAction: {
							type: 'string',
							description:
								'The action taken by the DLP provider. Possible values: `none`, `notifySender`, `blockAccess`, `blockAccessExternal`.',
						},
						justificationText: {
							type: 'string',
							description:
								'The justification text provided by the sender for an override.',
						},
						policyTip: {
							type: 'object',
							description:
								'Information to display to the message sender about why the message was flagged.',
							properties: {
								generalText: {
									type: 'string',
									description: 'General explanatory text for the policy tip.',
								},
								complianceUrl: {
									type: 'string',
									description:
										'The URL for more information on the compliance policy.',
								},
								matchedConditionDescriptions: {
									type: 'array',
									description: 'The list of matched condition descriptions.',
									items: {
										type: 'string',
										description: 'A matched condition description.',
									},
								},
							},
							required: [],
						},
						userAction: {
							type: 'string',
							description:
								'The action taken by the user. Possible values: `none`, `override`, `reportFalsePositive`.',
						},
						verdictDetails: {
							type: 'string',
							description:
								'What the sender may do to overcome the violation. Possible values: `none`, `allowFalsePositiveOverride`, `allowOverrideWithoutJustification`, `allowOverrideWithJustification`.',
						},
					},
					required: [],
				},
				eventDetail: {
					type: 'object',
					description:
						'Details of an event that happened in a chat, channel, or team. The shape varies by event type — use the `@odata.type` discriminator to determine the specific event.',
					properties: {
						'@odata.type': {
							type: 'string',
							description:
								'The OData type discriminator indicating the specific event type (e.g. `#microsoft.graph.channelAddedEventMessageDetail`).',
						},
					},
					required: [],
				},
				messageHistory: {
					type: 'array',
					description: 'Activity history of the message.',
					items: {
						type: 'object',
						description: 'A history item.',
						properties: {
							modifiedDateTime: {
								type: 'string',
								description: 'The date and time when the message was modified.',
							},
							actions: {
								type: 'string',
								description:
									'The action that occurred on the message. Possible values: `reactionAdded`, `reactionRemoved`, `actionUndefined`.',
							},
							reaction: {
								type: 'object',
								description: 'The reaction in the modified message.',
								properties: {
									reactionType: {
										type: 'string',
										description: 'The reaction type.',
									},
									createdDateTime: {
										type: 'string',
										description: 'Timestamp of when the reaction was created.',
									},
									user: {
										type: 'object',
										description: 'The user who reacted.',
										properties: {
											id: {
												type: 'string',
												description: 'The unique identifier of the user.',
											},
											displayName: {
												type: 'string',
												description: 'The display name of the user.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'sendChatMessage',
		label: 'Send a chat message',
		description: 'Sends a message in a chat.',
		context:
			"---\nname: sendChatMessage\ndescription: Sends a message in a chat.\n---\n\nSends a new chatMessage in an existing chat. Use `createChat` first to create a one-on-one or group chat if one doesn't already exist, then use this endpoint with the returned chat ID.\n\nNote: This endpoint sends messages to chats (one-on-one or group). To send messages to a channel, use `sendChannelMessage` instead.\n\nRefer to the [Microsoft Graph API reference — Send chatMessage in chat](https://learn.microsoft.com/en-us/graph/api/chat-post-messages) for full details.",
		accounts: { azure: { scope: ['Chat.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chatId: { type: 'string', description: 'The unique identifier of the chat.' },
				content: {
					type: 'string',
					description:
						'The content of the message. Can be plain text or HTML depending on the content type.',
				},
				contentType: {
					type: 'string',
					description: 'The type of the message content.',
					enum: ['text', 'html'],
				},
				subject: { type: 'string', description: 'The subject of the message (optional).' },
				importance: {
					type: 'string',
					description: 'The importance of the message.',
					default: '',
					enum: ['', 'normal', 'high', 'urgent'],
				},
				mentions: {
					type: 'array',
					description:
						'A list of entities mentioned in the message. Each mention must include the `id` (index), `mentionText`, and `mentioned` (identity object).',
					items: {
						type: 'object',
						description: 'A mention in the message.',
						properties: {
							id: {
								type: 'number',
								description:
									'The index (0-based) of the mention in the message body.',
							},
							mentionText: {
								type: 'string',
								description: 'The text to display for the mention.',
							},
							mentioned: {
								type: 'object',
								description:
									'The identity of the mentioned entity (user, team, or channel).',
								properties: {
									user: {
										type: 'object',
										description: 'The mentioned user identity.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier (Azure AD object ID) of the mentioned user.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the mentioned user.',
											},
											userIdentityType: {
												type: 'string',
												description: 'The type of user identity.',
												default: '',
												enum: [
													'',
													'aadUser',
													'onPremiseAadUser',
													'anonymousGuest',
													'federatedUser',
													'personalMicrosoftAccountUser',
													'skypeUser',
													'phoneUser',
													'emailUser',
												],
											},
										},
										required: ['id', 'displayName'],
									},
									conversation: {
										type: 'object',
										description:
											'The mentioned conversation identity (for channel/team mentions).',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier of the conversation.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the conversation.',
											},
											conversationIdentityType: {
												type: 'string',
												description:
													'The type of the conversation identity.',
												default: '',
												enum: ['', 'team', 'channel', 'chat'],
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: ['id', 'mentionText', 'mentioned'],
					},
				},
				attachments: {
					type: 'array',
					description: 'A list of attachments to include with the message.',
					items: {
						type: 'object',
						description: 'A message attachment.',
						properties: {
							contentType: {
								type: 'string',
								description:
									'The media type of the content attachment. Must be `reference` for file attachments.',
								default: 'reference',
							},
							contentUrl: {
								type: 'string',
								description: 'The URL to the attachment content.',
							},
							name: {
								type: 'string',
								description: 'The display name of the attachment.',
							},
							id: { type: 'string', description: 'The ID of the attachment.' },
							teamsAppId: {
								type: 'string',
								description:
									'The ID of the Teams app associated with the attachment.',
							},
							thumbnailUrl: {
								type: 'string',
								description: 'The URL to a thumbnail image for the attachment.',
							},
						},
						required: ['contentUrl'],
					},
				},
			},
			required: ['chatId', 'content', 'contentType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the message.' },
				subject: {
					type: 'string',
					description: 'The subject of the chat message, in plaintext.',
				},
				body: {
					type: 'object',
					description: 'The body of the message.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values: `text`, `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The sender of the message.',
					properties: {
						user: {
							type: 'object',
							description: 'The user identity of the sender.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the user.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the user.',
								},
								userIdentityType: {
									type: 'string',
									description: 'The type of user identity.',
								},
							},
							required: [],
						},
						application: {
							type: 'object',
							description: 'The application identity of the sender.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier of the application.',
								},
								displayName: {
									type: 'string',
									description: 'The display name of the application.',
								},
								applicationIdentityType: {
									type: 'string',
									description: 'The type of application identity.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'Timestamp when the message was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'Timestamp when the message was last modified.',
				},
				lastEditedDateTime: {
					type: 'string',
					description: 'Timestamp when edits to the chat message were made.',
				},
				deletedDateTime: {
					type: 'string',
					description:
						'Timestamp at which the chat message was deleted, or null if not deleted.',
				},
				importance: { type: 'string', description: 'The importance of the message.' },
				messageType: { type: 'string', description: 'The type of chat message.' },
				webUrl: { type: 'string', description: 'Link to the message in Microsoft Teams.' },
				locale: {
					type: 'string',
					description: 'Locale of the chat message set by the client.',
				},
				etag: { type: 'string', description: 'Version number of the chat message.' },
				attachments: {
					type: 'array',
					description: 'References to attached objects like files, tabs, meetings.',
					items: {
						type: 'object',
						description: 'A message attachment.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the attachment.' },
							contentType: {
								type: 'string',
								description: 'The media type of the content attachment.',
							},
							contentUrl: {
								type: 'string',
								description: 'The URL for the content of the attachment.',
							},
							content: {
								type: 'string',
								description: 'The content of the attachment (for rich cards).',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							teamsAppId: {
								type: 'string',
								description:
									'The ID of the Teams app associated with the attachment.',
							},
							thumbnailUrl: {
								type: 'string',
								description: 'The URL to a thumbnail image for the attachment.',
							},
						},
						required: [],
					},
				},
				mentions: {
					type: 'array',
					description: 'List of entities mentioned in the chat message.',
					items: {
						type: 'object',
						description: 'A mention in the message.',
						properties: {
							id: { type: 'number', description: 'The index of the mention.' },
							mentionText: {
								type: 'string',
								description: 'The string used to represent the mention.',
							},
							mentioned: {
								type: 'object',
								description: 'The entity mentioned.',
								properties: {
									user: {
										type: 'object',
										description: 'The mentioned user identity.',
										properties: {
											id: {
												type: 'string',
												description: 'The unique identifier of the user.',
											},
											displayName: {
												type: 'string',
												description: 'The display name of the user.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description: 'The mentioned conversation identity.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier of the conversation.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the conversation.',
											},
											conversationIdentityType: {
												type: 'string',
												description: 'The type of conversation identity.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				reactions: {
					type: 'array',
					description: 'Reactions for this chat message.',
					items: {
						type: 'object',
						description: 'A reaction to the message.',
						properties: {
							reactionType: {
								type: 'string',
								description:
									'The reaction type. Possible values: `like`, `angry`, `sad`, `laugh`, `heart`, `surprised`.',
							},
							createdDateTime: {
								type: 'string',
								description: 'Timestamp of when the reaction was created.',
							},
							user: {
								type: 'object',
								description: 'The user who reacted.',
								properties: {
									id: {
										type: 'string',
										description: 'The unique identifier of the user.',
									},
									displayName: {
										type: 'string',
										description: 'The display name of the user.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				summary: { type: 'string', description: 'Summary text of the chat message.' },
				chatId: { type: 'string', description: 'The ID of the chat.' },
				channelIdentity: {
					type: 'object',
					description: 'The identity of the channel.',
					properties: {
						teamId: {
							type: 'string',
							description: 'The unique identifier of the team.',
						},
						channelId: {
							type: 'string',
							description: 'The unique identifier of the channel.',
						},
					},
					required: [],
				},
				replyToId: {
					type: 'string',
					description:
						'ID of the parent chat message or root chat message of the thread.',
				},
				policyViolation: {
					type: 'object',
					description:
						'Defines the properties of a policy violation set by a DLP application.',
					properties: {
						dlpAction: {
							type: 'string',
							description:
								'The action taken by the DLP provider. Possible values: `none`, `notifySender`, `blockAccess`, `blockAccessExternal`.',
						},
						justificationText: {
							type: 'string',
							description:
								'The justification text provided by the sender for an override.',
						},
						policyTip: {
							type: 'object',
							description:
								'Information to display to the message sender about why the message was flagged.',
							properties: {
								generalText: {
									type: 'string',
									description: 'General explanatory text for the policy tip.',
								},
								complianceUrl: {
									type: 'string',
									description:
										'The URL for more information on the compliance policy.',
								},
								matchedConditionDescriptions: {
									type: 'array',
									description: 'The list of matched condition descriptions.',
									items: {
										type: 'string',
										description: 'A matched condition description.',
									},
								},
							},
							required: [],
						},
						userAction: {
							type: 'string',
							description:
								'The action taken by the user. Possible values: `none`, `override`, `reportFalsePositive`.',
						},
						verdictDetails: {
							type: 'string',
							description:
								'What the sender may do to overcome the violation. Possible values: `none`, `allowFalsePositiveOverride`, `allowOverrideWithoutJustification`, `allowOverrideWithJustification`.',
						},
					},
					required: [],
				},
				eventDetail: {
					type: 'object',
					description:
						'Details of an event that happened in a chat, channel, or team. The shape varies by event type — use the `@odata.type` discriminator to determine the specific event.',
					properties: {
						'@odata.type': {
							type: 'string',
							description:
								'The OData type discriminator indicating the specific event type (e.g. `#microsoft.graph.channelAddedEventMessageDetail`).',
						},
					},
					required: [],
				},
				messageHistory: {
					type: 'array',
					description: 'Activity history of the message.',
					items: {
						type: 'object',
						description: 'A history item.',
						properties: {
							modifiedDateTime: {
								type: 'string',
								description: 'The date and time when the message was modified.',
							},
							actions: {
								type: 'string',
								description:
									'The action that occurred on the message. Possible values: `reactionAdded`, `reactionRemoved`, `actionUndefined`.',
							},
							reaction: {
								type: 'object',
								description: 'The reaction in the modified message.',
								properties: {
									reactionType: {
										type: 'string',
										description: 'The reaction type.',
									},
									createdDateTime: {
										type: 'string',
										description: 'Timestamp of when the reaction was created.',
									},
									user: {
										type: 'object',
										description: 'The user who reacted.',
										properties: {
											id: {
												type: 'string',
												description: 'The unique identifier of the user.',
											},
											displayName: {
												type: 'string',
												description: 'The display name of the user.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'updateChannel',
		label: 'Update a channel',
		description: 'Updates the properties of a channel.',
		context:
			'---\nname: updateChannel\ndescription: Updates the properties of a channel.\n---\n\nUpdates the properties of a channel within a team. Only provided properties are updated; omitted properties retain their current values.\n\nReturns HTTP 204 No Content on success (empty output). Use `getChannel` to retrieve current values before updating.\n\nRefer to the [Microsoft Graph API reference — Update channel](https://learn.microsoft.com/en-us/graph/api/channel-patch) for full details.',
		accounts: { azure: { scope: ['Group.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				teamId: { type: 'string', description: 'The unique identifier of the team.' },
				channelId: {
					type: 'string',
					description: 'The unique identifier of the channel to update.',
				},
				displayName: {
					type: 'string',
					description: 'Channel name as it appears in Microsoft Teams.',
				},
				description: {
					type: 'string',
					description: 'Optional textual description for the channel.',
				},
				isFavoriteByDefault: {
					type: 'boolean',
					description:
						"Whether the channel should automatically show in every team member's favorite list. Only works for standard channels.",
				},
				layoutType: {
					type: 'string',
					description:
						'The layout type of the channel: traditional post-and-reply, or chat-like threading.',
					default: '',
					enum: ['', 'post', 'chat'],
				},
			},
			required: ['teamId', 'channelId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'updateOnlineMeeting',
		label: 'Update an online meeting',
		description: 'Updates the properties of an online meeting.',
		context:
			'---\nname: updateOnlineMeeting\ndescription: Updates the properties of an online meeting.\n---\n\nUpdates the properties of an online meeting. Only the properties provided in the request body are updated; omitted properties retain their current values.\n\nIt is recommended to call `getOnlineMeeting` first to retrieve current values before calling this endpoint.\n\nRefer to the [Microsoft Graph API reference — Update onlineMeeting](https://learn.microsoft.com/en-us/graph/api/onlinemeeting-update) for full details.',
		accounts: { azure: { scope: ['OnlineMeetings.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				meetingId: {
					type: 'string',
					description: 'The unique identifier of the online meeting to update.',
				},
				subject: { type: 'string', description: 'The subject of the online meeting.' },
				startDateTime: {
					type: 'string',
					description:
						'The meeting start time in UTC. When adjusting start or end time, both must be provided.',
				},
				endDateTime: {
					type: 'string',
					description:
						'The meeting end time in UTC. When adjusting start or end time, both must be provided.',
				},
				attendees: {
					type: 'array',
					description:
						'The list of meeting attendees. The organizer cannot be updated. When updating attendees, provide the full list.',
					items: {
						type: 'object',
						description: 'A meeting participant.',
						properties: {
							upn: {
								type: 'string',
								description: 'The user principal name (email) of the attendee.',
							},
							role: {
								type: 'string',
								description: 'The role of the attendee.',
								default: '',
								enum: ['', 'attendee', 'presenter', 'producer'],
							},
						},
						required: [],
					},
				},
				allowedPresenters: {
					type: 'string',
					description: 'Specifies who can be a presenter.',
					default: '',
					enum: ['', 'everyone', 'organization', 'roleIsPresenter', 'organizer'],
				},
				isEntryExitAnnounced: {
					type: 'boolean',
					description: 'Whether to announce when callers join or leave.',
				},
				recordAutomatically: {
					type: 'boolean',
					description: 'Whether to record the meeting automatically.',
				},
				lobbyBypassSettings: {
					type: 'object',
					description: 'Settings for which participants can bypass the lobby.',
					properties: {
						scope: {
							type: 'string',
							description:
								'Specifies the type of participants that are automatically admitted.',
							default: '',
							enum: [
								'',
								'organizer',
								'organization',
								'organizationAndFederated',
								'everyone',
								'invited',
								'organizationExcludingGuests',
							],
						},
						isDialInBypassEnabled: {
							type: 'boolean',
							description:
								'Whether or not to allow dial-in users to bypass the lobby.',
						},
					},
					required: [],
				},
				allowAttendeeToEnableCamera: {
					type: 'boolean',
					description: 'Whether attendees can turn on their cameras.',
				},
				allowAttendeeToEnableMic: {
					type: 'boolean',
					description: 'Whether attendees can turn on their microphones.',
				},
				allowMeetingChat: {
					type: 'string',
					description: 'Specifies the mode of meeting chat.',
					default: '',
					enum: ['', 'enabled', 'disabled', 'limited'],
				},
				allowTeamworkReactions: {
					type: 'boolean',
					description: 'Whether Teams reactions are enabled.',
				},
				allowRecording: { type: 'boolean', description: 'Whether recording is enabled.' },
				allowTranscription: {
					type: 'boolean',
					description: 'Whether transcription is enabled.',
				},
				allowWhiteboard: { type: 'boolean', description: 'Whether whiteboard is enabled.' },
				allowBreakoutRooms: {
					type: 'boolean',
					description: 'Whether breakout rooms are enabled.',
				},
				allowPowerPointSharing: {
					type: 'boolean',
					description: 'Whether PowerPoint live is enabled.',
				},
				allowLiveShare: {
					type: 'string',
					description: 'Whether live share is enabled.',
					default: '',
					enum: ['', 'enabled', 'disabled'],
				},
				allowCopyingAndSharingMeetingContent: {
					type: 'boolean',
					description:
						'Whether the ability to copy and share meeting content is enabled.',
				},
				allowedLobbyAdmitters: {
					type: 'string',
					description: 'Specifies the users who can admit from the lobby.',
					default: '',
					enum: ['', 'organizerAndCoOrganizersAndPresenters', 'organizerAndCoOrganizers'],
				},
				isEndToEndEncryptionEnabled: {
					type: 'boolean',
					description: 'Whether end-to-end encryption is enabled.',
				},
				watermarkProtection: {
					type: 'object',
					description:
						'Specifies whether the client application should apply a watermark to content or video.',
					properties: {
						isEnabledForContentSharing: {
							type: 'boolean',
							description: 'Whether watermark is applied to any shared content.',
						},
						isEnabledForVideo: {
							type: 'boolean',
							description:
								"Whether watermark is applied to the attendee's video feed.",
						},
					},
					required: [],
				},
				meetingSpokenLanguageTag: {
					type: 'string',
					description:
						'The spoken language tag for meeting recording and transcription (e.g. `en-US`).',
				},
			},
			required: ['meetingId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the online meeting.' },
				subject: { type: 'string', description: 'The subject of the online meeting.' },
				joinWebUrl: { type: 'string', description: 'The join URL of the online meeting.' },
				joinInformation: {
					type: 'object',
					description: 'The join information in the language and locale variant.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The content type of the join information.',
						},
						content: {
							type: 'string',
							description: 'The HTML content with join meeting information.',
						},
					},
					required: [],
				},
				startDateTime: { type: 'string', description: 'The meeting start time in UTC.' },
				endDateTime: { type: 'string', description: 'The meeting end time in UTC.' },
				creationDateTime: {
					type: 'string',
					description: 'The meeting creation time in UTC.',
				},
				expiryDateTime: {
					type: 'string',
					description: 'The date and time when the meeting resource expires.',
				},
				audioConferencing: {
					type: 'object',
					description: 'The phone access (dial-in) information for the meeting.',
					properties: {
						conferenceId: {
							type: 'string',
							description: 'The conference ID of the online meeting.',
						},
						dialinUrl: {
							type: 'string',
							description:
								'A URL to the externally-accessible web page with dial-in info.',
						},
						tollFreeNumbers: {
							type: 'array',
							description:
								'The toll-free numbers that can be used to join the meeting.',
							items: { type: 'string', description: 'A toll-free phone number.' },
						},
						tollNumbers: {
							type: 'array',
							description: 'The toll numbers that can be used to join the meeting.',
							items: { type: 'string', description: 'A toll phone number.' },
						},
					},
					required: [],
				},
				allowedPresenters: {
					type: 'string',
					description: 'Specifies who can be a presenter.',
				},
				isEntryExitAnnounced: {
					type: 'boolean',
					description: 'Whether to announce when callers join or leave.',
				},
				lobbyBypassSettings: {
					type: 'object',
					description: 'Settings for which participants can bypass the lobby.',
					properties: {
						scope: {
							type: 'string',
							description: 'The type of participants automatically admitted.',
						},
						isDialInBypassEnabled: {
							type: 'boolean',
							description: 'Whether dial-in users bypass the lobby.',
						},
					},
					required: [],
				},
				participants: {
					type: 'object',
					description: 'The participants associated with the meeting.',
					properties: {
						organizer: {
							type: 'object',
							description: 'The meeting organizer.',
							properties: {
								upn: {
									type: 'string',
									description: 'The user principal name of the organizer.',
								},
								role: { type: 'string', description: 'The role of the organizer.' },
								identity: {
									type: 'object',
									description: 'The identity set of the organizer.',
									properties: {
										user: {
											type: 'object',
											description: 'The user identity.',
											properties: {
												id: {
													type: 'string',
													description:
														'The unique identifier of the user.',
												},
												displayName: {
													type: 'string',
													description: 'The display name of the user.',
												},
												userIdentityType: {
													type: 'string',
													description: 'The type of user identity.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							required: [],
						},
						attendees: {
							type: 'array',
							description: 'The attendees of the meeting.',
							items: {
								type: 'object',
								description: 'A meeting attendee.',
								properties: {
									upn: {
										type: 'string',
										description: 'The user principal name of the attendee.',
									},
									role: {
										type: 'string',
										description: 'The role of the attendee.',
									},
									identity: {
										type: 'object',
										description: 'The identity set of the attendee.',
										properties: {
											user: {
												type: 'object',
												description: 'The user identity.',
												properties: {
													id: {
														type: 'string',
														description:
															'The unique identifier of the user.',
													},
													displayName: {
														type: 'string',
														description:
															'The display name of the user.',
													},
													userIdentityType: {
														type: 'string',
														description: 'The type of user identity.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				chatInfo: {
					type: 'object',
					description: 'The chat information associated with this meeting.',
					properties: {
						threadId: {
							type: 'string',
							description: 'The unique identifier of the chat thread.',
						},
						messageId: {
							type: 'string',
							description: 'The unique identifier of the message.',
						},
						replyChainMessageId: {
							type: 'string',
							description: 'The ID of the reply chain message.',
						},
					},
					required: [],
				},
				videoTeleconferenceId: {
					type: 'string',
					description: 'The video teleconferencing ID.',
				},
				externalId: { type: 'string', description: 'The external ID (custom identifier).' },
				recordAutomatically: {
					type: 'boolean',
					description: 'Whether to record the meeting automatically.',
				},
				allowAttendeeToEnableCamera: {
					type: 'boolean',
					description: 'Whether attendees can turn on their cameras.',
				},
				allowAttendeeToEnableMic: {
					type: 'boolean',
					description: 'Whether attendees can turn on their microphones.',
				},
				allowMeetingChat: {
					type: 'string',
					description: 'Specifies the mode of meeting chat.',
				},
				allowTeamworkReactions: {
					type: 'boolean',
					description: 'Whether Teams reactions are enabled.',
				},
				allowRecording: { type: 'boolean', description: 'Whether recording is enabled.' },
				allowTranscription: {
					type: 'boolean',
					description: 'Whether transcription is enabled.',
				},
				allowWhiteboard: { type: 'boolean', description: 'Whether whiteboard is enabled.' },
				allowBreakoutRooms: {
					type: 'boolean',
					description: 'Whether breakout rooms are enabled.',
				},
				allowPowerPointSharing: {
					type: 'boolean',
					description: 'Whether PowerPoint live is enabled.',
				},
				allowLiveShare: { type: 'string', description: 'Whether live share is enabled.' },
				allowCopyingAndSharingMeetingContent: {
					type: 'boolean',
					description:
						'Whether the ability to copy and share meeting content is enabled.',
				},
				allowParticipantsToChangeName: {
					type: 'boolean',
					description: 'Whether participants are allowed to rename themselves.',
				},
				allowedLobbyAdmitters: {
					type: 'string',
					description: 'Specifies the users who can admit from the lobby.',
				},
				isEndToEndEncryptionEnabled: {
					type: 'boolean',
					description: 'Whether end-to-end encryption is enabled.',
				},
				joinMeetingIdSettings: {
					type: 'object',
					description: 'The meeting ID and passcode settings.',
					properties: {
						joinMeetingId: {
							type: 'string',
							description: 'The meeting ID used to join the meeting.',
						},
						isPasscodeRequired: {
							type: 'boolean',
							description: 'Whether a passcode is required to join.',
						},
						passcode: {
							type: 'string',
							description: 'The passcode to join the meeting.',
						},
					},
					required: [],
				},
				meetingOptionsWebUrl: {
					type: 'string',
					description: 'The URL to the Teams meeting options page.',
				},
				meetingType: { type: 'string', description: 'The type of the online meeting.' },
				shareMeetingChatHistoryDefault: {
					type: 'string',
					description: 'Whether meeting chat history is shared with participants.',
				},
				isBroadcast: {
					type: 'boolean',
					description: 'Whether this meeting is a Teams live event (deprecated).',
				},
				watermarkProtection: {
					type: 'object',
					description:
						'Specifies whether the client application should apply a watermark.',
					properties: {
						isEnabledForContentSharing: {
							type: 'boolean',
							description: 'Whether watermark is applied to any shared content.',
						},
						isEnabledForVideo: {
							type: 'boolean',
							description:
								"Whether watermark is applied to the attendee's video feed.",
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-teams',
		appVersion: 1,
		endpointName: 'updateTeam',
		label: 'Update a team',
		description: 'Updates the properties of a group.',
		context:
			'---\nname: updateTeam\ndescription: Updates the properties of a group.\n---\n\nUpdates the properties of a group (team). Only the properties that are provided will be updated; omitted properties retain their current values.\n\nNote: PATCH /groups/{id} returns HTTP 204 No Content on success, so the output will be an empty object.\n\nIt is recommended to call `getTeam` first to retrieve current values before calling this endpoint, since omitted fields are not cleared but also not returned.\n\nRefer to the [Microsoft Graph API reference — Update group](https://learn.microsoft.com/en-us/graph/api/group-update) for full details.',
		accounts: { azure: { scope: ['Group.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: {
					type: 'string',
					description: 'The unique identifier of the group to update.',
				},
				displayName: { type: 'string', description: 'The display name for the group.' },
				description: {
					type: 'string',
					description: 'An optional description for the group.',
				},
				mailNickname: {
					type: 'string',
					description:
						'The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters.',
				},
				securityEnabled: {
					type: 'boolean',
					description: 'Specifies whether the group is a security group.',
				},
				visibility: {
					type: 'string',
					description: 'Specifies the visibility of a Microsoft 365 group.',
					default: '',
					enum: ['', 'Private', 'Public'],
				},
				allowExternalSenders: {
					type: 'boolean',
					description:
						'Whether people external to the organization can send messages to the group. Default is `false`.',
				},
				autoSubscribeNewMembers: {
					type: 'boolean',
					description:
						'Whether new members added to the group are auto-subscribed to receive email notifications. Default is `false`.',
				},
				preferredDataLocation: {
					type: 'string',
					description:
						'The preferred data location for the Microsoft 365 group. Requires Exchange or SharePoint admin role.',
				},
				uniqueName: {
					type: 'string',
					description:
						'A unique identifier that can be assigned to a group and used as an alternate key. Can only be set if currently `null` and is immutable once set.',
				},
			},
			required: ['groupId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
];
