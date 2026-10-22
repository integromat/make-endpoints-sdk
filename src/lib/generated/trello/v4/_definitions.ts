// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'addALabelToACard',
		label: 'Add a label to a card',
		description: 'Adds a label to a card.',
		context:
			'---\nname: addALabelToACard\ndescription: Adds a label to a card.\n---\n\nAdds a label to a Trello card via `POST /cards/{id}/idLabels`.\n\n- Find label IDs with `retrieveLabels` for the board the card is on. A label can only be added to cards on the board it belongs to.\n- The endpoint returns all labels on the card, including the one that was just added.\n\nAPI reference: [Add a Label to a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-idlabels-post).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID or short link of the card to add the label to.',
				},
				value: {
					type: 'string',
					description:
						'The ID of the label to add to the card. Find it with `retrieveLabels`.',
				},
			},
			required: ['id', 'value'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'addAMemberToACard',
		label: 'Add a member to a card',
		description: 'Assigns a member to a card.',
		context:
			'---\nname: addAMemberToACard\ndescription: Assigns a member to a card.\n---\n\nAssigns a member to a Trello card via `POST /cards/{id}/idMembers` and returns all members assigned to the card afterwards, as an array.\n\n- The member must already be a member of the board the card is on. Find board member IDs with `getBoard` (`members` = `all`).\n- Assigning a member who is already on the card returns the member list unchanged.\n\nAPI reference: [Add a Member to a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-idmembers-post).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID or short link of the card to assign the member to.',
				},
				value: {
					type: 'string',
					description:
						'The ID of the member to assign to the card. Find it with `getBoard` (`members` = `all`).',
				},
			},
			required: ['id', 'value'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the member.' },
				activityBlocked: {
					type: 'boolean',
					description: 'Whether the activity of the member is blocked.',
				},
				avatarHash: {
					type: 'string',
					description: 'The hash of the avatar of the member.',
				},
				avatarUrl: { type: 'string', description: 'The URL of the avatar of the member.' },
				fullName: { type: 'string', description: 'The full name of the member.' },
				idMemberReferrer: {
					type: 'string',
					description: 'The ID of the member who referred the member to Trello.',
				},
				initials: { type: 'string', description: 'The initials of the member.' },
				nonPublic: {
					type: 'object',
					description:
						'Profile data with restricted visibility, visible only to members of the same Workspace.',
					properties: {
						fullName: {
							type: 'string',
							description: 'The non-public full name of the member.',
						},
						initials: {
							type: 'string',
							description: 'The non-public initials of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the non-public avatar of the member.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the non-public avatar of the member.',
						},
					},
					required: [],
				},
				nonPublicAvailable: {
					type: 'boolean',
					description:
						'Whether the response contains non-public profile data for the member.',
				},
				username: { type: 'string', description: 'The username of the member.' },
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'addAnAttachment',
		label: 'Add an attachment',
		description: 'Attaches a URL to a card.',
		context:
			'---\nname: addAnAttachment\ndescription: Attaches a URL to a card.\n---\n\nAttaches a URL to a Trello card via `POST /cards/{id}/attachments` and returns the new attachment.\n\n- Only URL attachments are supported. Uploading a file (`file`, multipart/form-data) is not supported by endpoints.\n- `name` defaults to the URL when omitted.\n- `setCover` uses the attachment as the card cover. It works only for image URLs.\n\nAPI reference: [Create Attachment On Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-attachments-post).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID or short link of the card to add the attachment to.',
				},
				url: {
					type: 'string',
					description: 'The URL to attach. Must start with `http://` or `https://`.',
				},
				name: {
					type: 'string',
					description: 'The name of the attachment, up to 256 characters long.',
					maximum: 256,
				},
				mimeType: {
					type: 'string',
					description: 'The MIME type of the attachment, up to 256 characters long.',
					maximum: 256,
				},
				setCover: {
					type: 'boolean',
					description:
						'Whether to use the new attachment as the card cover. Default: `false`.',
					default: false,
				},
			},
			required: ['id', 'url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the attachment.' },
				bytes: { type: 'number', description: 'The size of the attachment in bytes.' },
				date: { type: 'string', description: 'When the attachment was added.' },
				edgeColor: {
					type: 'string',
					description: 'The extracted edge color, for image attachments.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member who added the attachment.',
				},
				isUpload: { type: 'boolean', description: 'Whether the attachment was uploaded.' },
				mimeType: { type: 'string', description: 'The MIME type of the attachment.' },
				name: { type: 'string', description: 'The name of the attachment.' },
				pos: {
					type: 'number',
					description: 'The position of the attachment in the attachments list.',
				},
				previews: {
					type: 'array',
					description: 'Generated previews of an image attachment in various sizes.',
					items: {
						type: 'object',
						description: 'A generated preview of the image.',
						properties: {
							id: { type: 'string', description: 'The ID of the preview.' },
							scaled: {
								type: 'boolean',
								description: 'Whether the preview is scaled.',
							},
							url: { type: 'string', description: 'The URL of the preview.' },
							bytes: {
								type: 'number',
								description: 'The size of the preview in bytes.',
							},
							height: {
								type: 'number',
								description: 'The height of the preview in pixels.',
							},
							width: {
								type: 'number',
								description: 'The width of the preview in pixels.',
							},
						},
						required: [],
					},
				},
				url: { type: 'string', description: 'The URL of the attachment.' },
				fileName: { type: 'string', description: 'The file name of the attachment.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the attachment.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			"---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string, headers, and body) to the Trello API.\n\nThe base URL is `https://api.trello.com/1/`. Provide the remaining path in the URL parameter (for example, `members/me`). A leading slash is stripped automatically. Authentication is handled by the app's connection, so do not add authorization headers yourself.\n\nPrefer a dedicated endpoint when one exists for the operation you need. Use this endpoint for Trello routes that no other endpoint covers, such as Power-Up management, stickers, or enterprise administration.\n\nRefer to the [Trello API reference](https://developer.atlassian.com/cloud/trello/rest/) for available routes, required parameters, and response schemas.\n",
		accounts: { trello: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.trello.com/1/`. For example, `members/me`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method. Default: `GET`.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you. `Content-Type: application/json` is sent unless you pass your own `Content-Type` header.",
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
				body: { description: 'The HTTP request body.' },
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'archiveOrUnarchiveABoard',
		label: 'Update a board',
		description: 'Archives, unarchives, or otherwise updates a board.',
		context:
			'---\nname: archiveOrUnarchiveABoard\ndescription: Archives, unarchives, or otherwise updates a board.\n---\n\nUpdates a Trello board via `PUT /boards/{id}` and returns the updated board. The main use is to archive (`closed` = `true`) or unarchive (`closed` = `false`) a board. The same call also updates the name, description, Workspace, subscription, and board preferences.\n\n- Only the fields you provide are changed. Omitted fields keep their current values. Use `getBoard` first if you need the current values.\n- Board preferences go in the `prefs` collection. They are sent to Trello as `prefs/<name>` query parameters.\n- Archiving a board does not archive its lists or cards.\n\nAPI reference: [Update a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the board.' },
				closed: {
					type: 'boolean',
					description:
						'Whether the board is closed (archived). Set to `true` to archive the board or `false` to unarchive it.',
				},
				name: {
					type: 'string',
					description: 'The new name of the board, 1 to 16384 characters long.',
					minimum: 1,
					maximum: 16_384,
				},
				desc: {
					type: 'string',
					description: 'The new description of the board, up to 16384 characters long.',
					maximum: 16_384,
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the authenticated member is subscribed to the board.',
				},
				idOrganization: {
					type: 'string',
					description: 'The ID of the workspace to move the board to.',
				},
				prefs: {
					type: 'object',
					description: 'The board settings to update.',
					properties: {
						permissionLevel: {
							type: 'string',
							description: 'The visibility of the board.',
							default: '',
							enum: ['', 'org', 'private', 'public'],
						},
						selfJoin: {
							type: 'boolean',
							description: 'Whether workspace members can join the board themselves.',
						},
						cardCovers: {
							type: 'boolean',
							description: 'Whether card covers are displayed on the board.',
						},
						hideVotes: {
							type: 'boolean',
							description: 'Whether the voting power-up hides who voted on cards.',
						},
						invitations: {
							type: 'string',
							description: 'Who can invite people to the board.',
							default: '',
							enum: ['', 'admins', 'members'],
						},
						voting: {
							type: 'string',
							description: 'Who can vote on cards on the board.',
							default: '',
							enum: ['', 'disabled', 'members', 'observers', 'org', 'public'],
						},
						comments: {
							type: 'string',
							description: 'Who can comment on cards on the board.',
							default: '',
							enum: ['', 'disabled', 'members', 'observers', 'org', 'public'],
						},
						background: {
							type: 'string',
							description:
								'The ID of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.',
						},
						cardAging: {
							type: 'string',
							description:
								'The type of card aging when the card aging power-up is enabled.',
							default: '',
							enum: ['', 'pirate', 'regular'],
						},
						calendarFeedEnabled: {
							type: 'boolean',
							description: 'Whether the calendar feed is enabled.',
						},
					},
					required: [],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the board.' },
				name: { type: 'string', description: 'The name of the board.' },
				desc: { type: 'string', description: 'The description of the board.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				closed: { type: 'boolean', description: 'Whether the board is closed (archived).' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who created the board.',
				},
				idOrganization: {
					type: 'string',
					description: 'The ID of the Workspace the board belongs to.',
				},
				pinned: { type: 'boolean', description: 'Whether the board is pinned.' },
				url: { type: 'string', description: 'The persistent URL of the board.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the board using only its short ID.',
				},
				shortLink: {
					type: 'string',
					description: 'The 8-character short ID of the board.',
				},
				prefs: {
					type: 'object',
					description: 'The settings of the board.',
					properties: {
						permissionLevel: {
							type: 'string',
							description:
								'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
						},
						hideVotes: {
							type: 'boolean',
							description: 'Whether the Voting Power-Up hides who voted on cards.',
						},
						voting: {
							type: 'string',
							description:
								'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						comments: {
							type: 'string',
							description:
								'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						invitations: {
							type: 'string',
							description:
								'Who can invite people to the board: `admins` or `members`.',
						},
						selfJoin: {
							type: 'boolean',
							description: 'Whether Workspace members can join the board themselves.',
						},
						cardCovers: {
							type: 'boolean',
							description: 'Whether card covers are displayed.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the board is a template.',
						},
						cardAging: {
							type: 'string',
							description: 'The card aging mode: `pirate` or `regular`.',
						},
						calendarFeedEnabled: {
							type: 'boolean',
							description: 'Whether the calendar feed is enabled.',
						},
						background: {
							type: 'string',
							description:
								'The ID of a custom background or the name of a background color.',
						},
						backgroundColor: {
							type: 'string',
							description: 'The hex color of the background, if a color is used.',
						},
						backgroundImage: {
							type: 'string',
							description: 'The URL of the background image, if an image is used.',
						},
						backgroundImageScaled: {
							type: 'array',
							description: 'Scaled versions of the background image.',
							items: {
								type: 'object',
								description: 'A scaled version of the background image.',
								properties: {
									width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									url: {
										type: 'string',
										description: 'The URL of the scaled image.',
									},
								},
								required: [],
							},
						},
						backgroundTile: {
							type: 'boolean',
							description: 'Whether the background image is tiled.',
						},
						backgroundBrightness: {
							type: 'string',
							description: 'The brightness of the background: `dark` or `light`.',
						},
						backgroundBottomColor: {
							type: 'string',
							description: 'The hex color at the bottom of the background.',
						},
						backgroundTopColor: {
							type: 'string',
							description: 'The hex color at the top of the background.',
						},
						canBePublic: {
							type: 'boolean',
							description: 'Whether the board can be made public.',
						},
						canBeEnterprise: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Enterprise.',
						},
						canBeOrg: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Workspace.',
						},
						canBePrivate: {
							type: 'boolean',
							description: 'Whether the board can be made private.',
						},
						canInvite: {
							type: 'boolean',
							description:
								'Whether the current member can invite people to the board.',
						},
					},
					required: [],
				},
				labelNames: {
					type: 'object',
					description: 'The label names of the board, keyed by label color.',
					properties: {
						green: { type: 'string', description: 'The name of the green label.' },
						yellow: { type: 'string', description: 'The name of the yellow label.' },
						orange: { type: 'string', description: 'The name of the orange label.' },
						red: { type: 'string', description: 'The name of the red label.' },
						purple: { type: 'string', description: 'The name of the purple label.' },
						blue: { type: 'string', description: 'The name of the blue label.' },
						sky: { type: 'string', description: 'The name of the sky label.' },
						lime: { type: 'string', description: 'The name of the lime label.' },
						pink: { type: 'string', description: 'The name of the pink label.' },
						black: { type: 'string', description: 'The name of the black label.' },
					},
					required: [],
				},
				limits: {
					type: 'object',
					description: 'The limits that apply to the board.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of attachments per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						boards: {
							type: 'object',
							description: 'Board limits.',
							properties: {
								totalMembersPerBoard: {
									type: 'object',
									description: 'The limit of members per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						cards: {
							type: 'object',
							description: 'Card limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						checklists: {
							type: 'object',
							description: 'Checklist limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of checklists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						customFields: {
							type: 'object',
							description: 'Custom field limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of custom fields per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						labels: {
							type: 'object',
							description: 'Label limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of labels per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						lists: {
							type: 'object',
							description: 'List limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				starred: {
					type: 'boolean',
					description: 'Whether the board is starred by the current member.',
				},
				memberships: {
					type: 'array',
					description: 'The relationships of members to the board.',
					items: {
						type: 'object',
						description: 'The relationship of a member to the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the membership.' },
							idMember: { type: 'string', description: 'The ID of the member.' },
							memberType: {
								type: 'string',
								description:
									'The role of the member on the board: `admin`, `normal`, or `observer`.',
							},
							unconfirmed: {
								type: 'boolean',
								description:
									'Whether the member has not yet confirmed their account.',
							},
							deactivated: {
								type: 'boolean',
								description: 'Whether the member is deactivated.',
							},
						},
						required: [],
					},
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the board.',
				},
				invited: {
					type: 'boolean',
					description: 'Whether the current member is invited to the board.',
				},
				invitations: {
					type: 'array',
					description: 'Pending invitations to the board.',
					items: {
						type: 'object',
						description: 'A pending invitation to the board.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				powerUps: {
					type: 'array',
					description: 'The Power-Ups enabled on the board.',
					items: {
						type: 'string',
						description: 'The name of a Power-Up enabled on the board.',
					},
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the board occurred.',
				},
				dateLastView: {
					type: 'string',
					description: 'When the current member last viewed the board.',
				},
				idTags: {
					type: 'array',
					description: 'The IDs of the collections (tags) the board belongs to.',
					items: {
						type: 'string',
						description: 'The ID of a collection the board belongs to.',
					},
				},
				datePluginDisable: {
					type: 'string',
					description: 'When Power-Ups were disabled on the board, if ever.',
				},
				creationMethod: { type: 'string', description: 'How the board was created.' },
				ixUpdate: {
					type: 'string',
					description: 'An internal update counter of the board.',
				},
				templateGallery: {
					type: 'string',
					description: 'The template gallery the board is published in, if any.',
				},
				enterpriseOwned: {
					type: 'boolean',
					description: 'Whether the board is owned by an Enterprise.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'archiveOrUnarchiveACard',
		label: 'Update a card',
		description: 'Archives, unarchives, or otherwise updates a card.',
		context:
			'---\nname: archiveOrUnarchiveACard\ndescription: Archives, unarchives, or otherwise updates a card.\n---\n\nUpdates a Trello card via `PUT /cards/{id}` and returns the updated card. The main use is to archive (`closed` = `true`) or unarchive (`closed` = `false`) a card. The same call also renames, moves, reschedules, and restyles the card.\n\n- Only the fields you provide are changed. Omitted fields keep their current values. Use `getACard` first if you need the current values.\n- `idMembers` and `idLabels` replace the current members and labels. Include the existing IDs to keep them.\n- To move a card to another board, set both `idBoard` and `idList`.\n- Clearing `due` or `start` (setting them to `null`) is not supported by this endpoint.\n- `desc` and `cover` are sent in the JSON request body. All other fields are sent as query parameters.\n\nAPI reference: [Update a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the card.' },
				closed: {
					type: 'boolean',
					description:
						'Whether the card is closed (archived). Set to `true` to archive the card or `false` to unarchive it.',
				},
				name: { type: 'string', description: 'The new name of the card.' },
				desc: { type: 'string', description: 'The new description of the card.' },
				idList: { type: 'string', description: 'The ID of the list to move the card to.' },
				idBoard: {
					type: 'string',
					description:
						'The ID of the board to move the card to. Set `idList` as well to choose the list on the new board.',
				},
				pos: {
					type: 'string',
					description:
						'The position of the card in its list: `top`, `bottom`, or a positive number.',
				},
				due: { type: 'string', description: 'The new due date of the card.' },
				start: { type: 'string', description: 'The new start date of the card.' },
				dueComplete: {
					type: 'boolean',
					description: 'Whether the due date of the card is marked complete.',
				},
				idMembers: {
					type: 'array',
					description:
						'The IDs of the members assigned to the card. Replaces the current members.',
					items: {
						type: 'string',
						description: 'The ID of a member to assign to the card.',
					},
				},
				idLabels: {
					type: 'array',
					description: 'The IDs of the labels on the card. Replaces the current labels.',
					items: { type: 'string', description: 'The ID of a label to add to the card.' },
				},
				idAttachmentCover: {
					type: 'string',
					description:
						'The ID of an image attachment on the card to use as the card cover.',
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the authenticated member is subscribed to the card.',
				},
				address: {
					type: 'string',
					description: 'The address of the card location, for the map view.',
				},
				locationName: {
					type: 'string',
					description: 'The name of the card location, for the map view.',
				},
				coordinates: {
					type: 'string',
					description:
						'The coordinates of the card location, for the map view, in the `latitude,longitude` format.',
				},
				cover: {
					type: 'object',
					description:
						'The cover of the card. `brightness` can be combined with any other key, but `color`, `url`, and `idAttachment` are mutually exclusive.',
					properties: {
						color: {
							type: 'string',
							description: 'Makes the cover a solid color.',
							default: '',
							enum: [
								'',
								'pink',
								'yellow',
								'lime',
								'blue',
								'black',
								'orange',
								'red',
								'purple',
								'sky',
								'green',
							],
						},
						brightness: {
							type: 'string',
							description:
								'Whether the text on the cover is dark or light. `light` makes the text dark, and `dark` makes the text light.',
							default: '',
							enum: ['', 'dark', 'light'],
						},
						url: {
							type: 'string',
							description:
								'An unsplash image URL (`https://images.unsplash.com/...`) to use as the cover. Only unsplash URLs work.',
						},
						idAttachment: {
							type: 'string',
							description:
								'The ID of an image attachment on the card to use as the cover.',
						},
						size: {
							type: 'string',
							description:
								'Whether the card name is shown on the cover (`full`) or below it (`normal`).',
							default: '',
							enum: ['', 'normal', 'full'],
						},
					},
					required: [],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the card.' },
				badges: {
					type: 'object',
					description: 'Information displayed on the front of the card.',
					properties: {
						votes: { type: 'number', description: 'The number of votes on the card.' },
						viewingMemberVoted: {
							type: 'boolean',
							description: 'Whether the current member voted on the card.',
						},
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the card.',
						},
						fogbugz: {
							type: 'string',
							description: 'The FogBugz case linked to the card, if any.',
						},
						checkItems: {
							type: 'number',
							description: 'The number of checklist items on the card.',
						},
						checkItemsChecked: {
							type: 'number',
							description: 'The number of completed checklist items on the card.',
						},
						comments: {
							type: 'number',
							description: 'The number of comments on the card.',
						},
						attachments: {
							type: 'number',
							description: 'The number of attachments on the card.',
						},
						description: {
							type: 'boolean',
							description: 'Whether the card has a description.',
						},
						due: { type: 'string', description: 'The due date of the card.' },
						dueComplete: {
							type: 'boolean',
							description: 'Whether the due date of the card is marked complete.',
						},
						start: { type: 'string', description: 'The start date of the card.' },
						location: {
							type: 'boolean',
							description: 'Whether the card has a location.',
						},
						attachmentsByType: {
							type: 'object',
							description: 'The number of attachments on the card by type.',
							properties: {
								trello: {
									type: 'object',
									description:
										'The number of attachments linking to Trello objects.',
									properties: {
										board: {
											type: 'number',
											description:
												'The number of attachments linking to Trello boards.',
										},
										card: {
											type: 'number',
											description:
												'The number of attachments linking to Trello cards.',
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
				checkItemStates: {
					type: 'array',
					description: 'The states of the checklist items on the card.',
					items: {
						type: 'object',
						description: 'The state of a checklist item.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				closed: { type: 'boolean', description: 'Whether the card is closed (archived).' },
				dueComplete: {
					type: 'boolean',
					description: 'Whether the due date of the card is marked complete.',
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the card occurred.',
				},
				desc: { type: 'string', description: 'The description of the card.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				due: { type: 'string', description: 'The due date of the card.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				email: { type: 'string', description: 'The email address of the card, if any.' },
				idBoard: { type: 'string', description: 'The ID of the board the card is on.' },
				idChecklists: {
					type: 'array',
					description: 'The IDs of the checklists on the card.',
					items: { type: 'string', description: 'The ID of a checklist on the card.' },
				},
				idList: { type: 'string', description: 'The ID of the list the card is in.' },
				idMembers: {
					type: 'array',
					description: 'The IDs of the members assigned to the card.',
					items: {
						type: 'string',
						description: 'The ID of a member assigned to the card.',
					},
				},
				idMembersVoted: {
					type: 'array',
					description: 'The IDs of the members who voted on the card.',
					items: {
						type: 'string',
						description: 'The ID of a member who voted on the card.',
					},
				},
				idShort: {
					type: 'number',
					description: 'The numeric ID of the card, unique within the board.',
				},
				idAttachmentCover: {
					type: 'string',
					description: 'The ID of the attachment used as the card cover, if any.',
				},
				manualCoverAttachment: {
					type: 'boolean',
					description: 'Whether the card cover was selected manually by the user.',
				},
				labels: {
					type: 'array',
					description: 'The labels on the card.',
					items: {
						type: 'object',
						description: 'A label on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the label.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the board the label is on.',
							},
							name: {
								type: 'string',
								description: 'The name displayed for the label.',
							},
							color: {
								type: 'string',
								description:
									'The color of the label. Empty means no color and the label is not shown on the front of cards.',
							},
							uses: {
								type: 'number',
								description: 'The number of cards the label is used on.',
							},
						},
						required: [],
					},
				},
				idLabels: {
					type: 'array',
					description: 'The IDs of the labels on the card.',
					items: { type: 'string', description: 'The ID of a label on the card.' },
				},
				name: { type: 'string', description: 'The name of the card.' },
				pos: { type: 'number', description: 'The position of the card in the list.' },
				shortLink: { type: 'string', description: 'The 8-character short ID of the card.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the card without the name slug.',
				},
				start: { type: 'string', description: 'The start date of the card.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the card.',
				},
				url: { type: 'string', description: 'The full URL of the card.' },
				address: { type: 'string', description: 'The address of the card location.' },
				locationName: { type: 'string', description: 'The name of the card location.' },
				coordinates: {
					type: 'object',
					description: 'The coordinates of the card location.',
					properties: {
						latitude: {
							type: 'number',
							description: 'The latitude of the card location.',
						},
						longitude: {
							type: 'number',
							description: 'The longitude of the card location.',
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description: 'The cover settings of the card.',
					properties: {
						idAttachment: {
							type: 'string',
							description: 'The ID of the attachment used as the cover.',
						},
						color: { type: 'string', description: 'The color of the cover.' },
						idUploadedBackground: {
							type: 'string',
							description: 'The ID of the uploaded background used as the cover.',
						},
						size: {
							type: 'string',
							description: 'The size of the cover: `normal` or `full`.',
						},
						brightness: {
							type: 'string',
							description: 'The brightness of the cover: `dark` or `light`.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the cover is from a template.',
						},
					},
					required: [],
				},
				cardRole: {
					type: 'string',
					description:
						'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
				},
				creationMethod: { type: 'string', description: 'How the card was created.' },
				mirrorSourceId: {
					type: 'string',
					description: 'The ID of the source card, for mirror cards.',
				},
				isTemplate: { type: 'boolean', description: 'Whether the card is a template.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the card.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perCard: {
									type: 'object',
									description: 'The limit of attachments per card.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				members: {
					type: 'array',
					description:
						'The members assigned to the card. Returned when card members are requested.',
					items: {
						type: 'object',
						description: 'A member assigned to the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				attachments: {
					type: 'array',
					description:
						'The attachments on the card. Returned when card attachments are requested.',
					items: {
						type: 'object',
						description: 'An attachment on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the attachment.' },
							bytes: {
								type: 'number',
								description: 'The size of the attachment in bytes.',
							},
							date: { type: 'string', description: 'When the attachment was added.' },
							edgeColor: {
								type: 'string',
								description: 'The extracted edge color, for image attachments.',
							},
							idMember: {
								type: 'string',
								description: 'The ID of the member who added the attachment.',
							},
							isUpload: {
								type: 'boolean',
								description: 'Whether the attachment was uploaded.',
							},
							mimeType: {
								type: 'string',
								description: 'The MIME type of the attachment.',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							pos: {
								type: 'number',
								description:
									'The position of the attachment in the attachments list.',
							},
							previews: {
								type: 'array',
								description:
									'Generated previews of an image attachment in various sizes.',
								items: {
									type: 'object',
									description: 'A generated preview of the image.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the preview.',
										},
										scaled: {
											type: 'boolean',
											description: 'Whether the preview is scaled.',
										},
										url: {
											type: 'string',
											description: 'The URL of the preview.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the preview in bytes.',
										},
										height: {
											type: 'number',
											description: 'The height of the preview in pixels.',
										},
										width: {
											type: 'number',
											description: 'The width of the preview in pixels.',
										},
									},
									required: [],
								},
							},
							url: { type: 'string', description: 'The URL of the attachment.' },
							fileName: {
								type: 'string',
								description: 'The file name of the attachment.',
							},
						},
						required: [],
					},
				},
				stickers: {
					type: 'array',
					description:
						'The stickers on the card. Returned when card stickers are requested.',
					items: {
						type: 'object',
						description: 'A sticker on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the sticker.' },
							top: {
								type: 'number',
								description: 'The top position of the sticker on the card.',
							},
							left: {
								type: 'number',
								description: 'The left position of the sticker on the card.',
							},
							zIndex: {
								type: 'number',
								description: 'The z-index of the sticker on the card.',
							},
							rotate: {
								type: 'number',
								description: 'The rotation of the sticker in degrees.',
							},
							image: { type: 'string', description: 'The ID of the sticker image.' },
							imageUrl: {
								type: 'string',
								description: 'The URL of the sticker image.',
							},
							imageScaled: {
								type: 'array',
								description: 'Scaled versions of the sticker image.',
								items: {
									type: 'object',
									description: 'A scaled version of the sticker image.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
						},
						required: [],
					},
				},
				customFieldItems: {
					type: 'array',
					description:
						'The custom field values on the card. Returned when card custom field items are requested.',
					items: {
						type: 'object',
						description: 'A custom field value set on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the custom field item.' },
							idCustomField: {
								type: 'string',
								description: 'The ID of the custom field definition.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the card the value is set on.',
							},
							modelType: {
								type: 'string',
								description: 'The type of the model the value is set on: `card`.',
							},
							idValue: {
								type: 'string',
								description:
									'The ID of the selected option, for dropdown custom fields.',
							},
							value: {
								type: 'object',
								description: 'The value of the custom field, keyed by type.',
								properties: {
									text: {
										type: 'string',
										description: 'The value of a text custom field.',
									},
									number: {
										type: 'string',
										description:
											'The value of a number custom field, as a string.',
									},
									date: {
										type: 'string',
										description: 'The value of a date custom field.',
									},
									checked: {
										type: 'string',
										description:
											'The value of a checkbox custom field: `true` or `false`, as a string.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pluginData: {
					type: 'array',
					description:
						'The Power-Up data on the card. Returned when card plugin data is requested.',
					items: {
						type: 'object',
						description: 'Data stored by a Power-Up.',
						properties: {
							id: { type: 'string', description: 'The ID of the plugin data.' },
							idPlugin: { type: 'string', description: 'The ID of the Power-Up.' },
							scope: {
								type: 'string',
								description:
									'The scope of the data: `board`, `card`, `member`, or `organization`.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the model the data is stored on.',
							},
							value: {
								type: 'string',
								description: 'The stored data, as a JSON string.',
							},
							access: {
								type: 'string',
								description: 'The access level of the data: `private` or `shared`.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'archiveOrUnarchiveAList',
		label: 'Archive or unarchive a list',
		description: 'Archives or restores a list.',
		context:
			'---\nname: archiveOrUnarchiveAList\ndescription: Archives or restores a list.\n---\n\nArchives or restores a Trello list via `PUT /lists/{id}/closed` and returns the updated list.\n\n- Archiving a list hides it from the board but keeps its cards. Nothing is deleted.\n- The same change can be made with `editAList` through the `closed` parameter.\n\nAPI reference: [Archive or unarchive a list](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-id-closed-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the list to archive or restore.' },
				value: {
					type: 'boolean',
					description:
						'Whether to archive the list. Set to `true` to archive it, `false` to restore it.',
				},
			},
			required: ['id', 'value'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the list.' },
				name: { type: 'string', description: 'The name of the list.' },
				closed: { type: 'boolean', description: 'Whether the list is closed (archived).' },
				idBoard: { type: 'string', description: 'The ID of the board the list is on.' },
				pos: { type: 'number', description: 'The position of the list on the board.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the list.',
				},
				softLimit: {
					type: 'number',
					description: 'The soft limit of cards in the list, if set.',
				},
				creationMethod: { type: 'string', description: 'How the list was created.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the list.',
					properties: {
						cards: {
							type: 'object',
							description: 'Card limits of the list.',
							properties: {
								openPerList: {
									type: 'object',
									description: 'The limit of open cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerList: {
									type: 'object',
									description: 'The limit of all cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'assignMemberToABoard',
		label: 'Assign a member to a board',
		description: 'Invites a user to a board by email address.',
		context:
			'---\nname: assignMemberToABoard\ndescription: Invites a user to a board by email address.\n---\n\nInvites a user to a Trello board by email via `PUT /boards/{id}/members`. Returns the board ID with its updated `members` and `memberships`.\n\n- If the email does not belong to a Trello account, Trello invites the user, and the membership appears as `unconfirmed` until they sign up. `fullName` is used for that invitation.\n- `type` sets the board role: `admin`, `normal` (default), or `observer`.\n- Calling it again for an existing member does not create a duplicate.\n\nAPI reference: [Invite Member to Board via email](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-members-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the board.' },
				email: {
					type: 'string',
					description: 'The email address of the user to add as a member of the board.',
				},
				type: {
					type: 'string',
					description: 'The role of the new member on the board. Default: `normal`.',
					default: '',
					enum: ['', 'admin', 'normal', 'observer'],
				},
				fullName: {
					type: 'string',
					description:
						'The full name of the user. Must be at least 1 character long and cannot begin or end with a space.',
				},
			},
			required: ['id', 'email'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the board.' },
				members: {
					type: 'array',
					description: 'The members of the board.',
					items: {
						type: 'object',
						description: 'A member of the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				memberships: {
					type: 'array',
					description: 'The relationships of members to the board.',
					items: {
						type: 'object',
						description: 'The relationship of a member to the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the membership.' },
							idMember: { type: 'string', description: 'The ID of the member.' },
							memberType: {
								type: 'string',
								description:
									'The role of the member on the board: `admin`, `normal`, or `observer`.',
							},
							unconfirmed: {
								type: 'boolean',
								description:
									'Whether the member has not yet confirmed their account.',
							},
							deactivated: {
								type: 'boolean',
								description: 'Whether the member is deactivated.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createABoard',
		label: 'Create a board',
		description: 'Creates a new board.',
		context:
			'---\nname: createABoard\ndescription: Creates a new board.\n---\n\nCreates a Trello board via `POST /boards` and returns the new board.\n\n- `name` is the only required field.\n- `idOrganization` is optional but strongly recommended when creating a board to specify the workspace where the board should be created. Without it, Trello attempts to automatically create an organization for the board, which may fail with 500 FORBIDDEN_ERROR: Unable to auto-create an organization.\n- To copy an existing board, set `idBoardSource`. Set `keepFromSource` to `cards` to copy its cards too. `defaultLists` is ignored when copying.\n- `prefs_background` accepts a color name or the ID of a custom background.\n\nAPI reference: [Create a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-post).\n',
		accounts: { trello: { scope: [] } },
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
				name: {
					type: 'string',
					description: 'The name of the board, 1 to 16384 characters long.',
					minimum: 1,
					maximum: 16_384,
				},
				idOrganization: {
					type: 'string',
					description: 'The ID or name of the workspace the board should belong to.',
				},
				desc: {
					type: 'string',
					description: 'The description of the board, up to 16384 characters long.',
					maximum: 16_384,
				},
				idBoardSource: {
					type: 'string',
					description: 'The ID of a board to copy into the new board.',
				},
				keepFromSource: {
					type: 'string',
					description:
						'What to keep from the source board when `idBoardSource` is set. Use `cards` to keep the cards. Default: `none`.',
					default: '',
					enum: ['', 'cards', 'none'],
				},
				powerUps: {
					type: 'string',
					description: 'The power-ups to enable on the new board.',
					default: '',
					enum: ['', 'all', 'calendar', 'cardAging', 'recap', 'voting'],
				},
				defaultLabels: {
					type: 'boolean',
					description: 'Whether to use the default set of labels. Default: `true`.',
					default: true,
				},
				defaultLists: {
					type: 'boolean',
					description:
						'Whether to add the default set of lists (To Do, Doing, Done). Ignored if `idBoardSource` is set. Default: `true`.',
					default: true,
				},
				prefs_permissionLevel: {
					type: 'string',
					description: 'The visibility of the board. Default: `private`.',
					default: '',
					enum: ['', 'org', 'private', 'public'],
				},
				prefs_voting: {
					type: 'string',
					description: 'Who can vote on cards on the board. Default: `disabled`.',
					default: '',
					enum: ['', 'disabled', 'members', 'observers', 'org', 'public'],
				},
				prefs_comments: {
					type: 'string',
					description: 'Who can comment on cards on the board. Default: `members`.',
					default: '',
					enum: ['', 'disabled', 'members', 'observers', 'org', 'public'],
				},
				prefs_invitations: {
					type: 'string',
					description: 'Who can invite people to the board. Default: `members`.',
					default: '',
					enum: ['', 'admins', 'members'],
				},
				prefs_selfJoin: {
					type: 'boolean',
					description:
						'Whether users can join the board themselves instead of being invited. Default: `true`.',
					default: true,
				},
				prefs_cardCovers: {
					type: 'boolean',
					description: 'Whether card covers are enabled. Default: `true`.',
					default: true,
				},
				prefs_background: {
					type: 'string',
					description:
						'The ID of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`. Default: `blue`.',
					default: 'blue',
				},
				prefs_cardAging: {
					type: 'string',
					description:
						'The type of card aging when the Card Aging Power-Up is enabled. Default: `regular`.',
					default: '',
					enum: ['', 'pirate', 'regular'],
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the board.' },
				name: { type: 'string', description: 'The name of the board.' },
				desc: { type: 'string', description: 'The description of the board.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				closed: { type: 'boolean', description: 'Whether the board is closed (archived).' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who created the board.',
				},
				idOrganization: {
					type: 'string',
					description: 'The ID of the Workspace the board belongs to.',
				},
				pinned: { type: 'boolean', description: 'Whether the board is pinned.' },
				url: { type: 'string', description: 'The persistent URL of the board.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the board using only its short ID.',
				},
				shortLink: {
					type: 'string',
					description: 'The 8-character short ID of the board.',
				},
				prefs: {
					type: 'object',
					description: 'The settings of the board.',
					properties: {
						permissionLevel: {
							type: 'string',
							description:
								'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
						},
						hideVotes: {
							type: 'boolean',
							description: 'Whether the Voting Power-Up hides who voted on cards.',
						},
						voting: {
							type: 'string',
							description:
								'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						comments: {
							type: 'string',
							description:
								'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						invitations: {
							type: 'string',
							description:
								'Who can invite people to the board: `admins` or `members`.',
						},
						selfJoin: {
							type: 'boolean',
							description: 'Whether Workspace members can join the board themselves.',
						},
						cardCovers: {
							type: 'boolean',
							description: 'Whether card covers are displayed.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the board is a template.',
						},
						cardAging: {
							type: 'string',
							description: 'The card aging mode: `pirate` or `regular`.',
						},
						calendarFeedEnabled: {
							type: 'boolean',
							description: 'Whether the calendar feed is enabled.',
						},
						background: {
							type: 'string',
							description:
								'The ID of a custom background or the name of a background color.',
						},
						backgroundColor: {
							type: 'string',
							description: 'The hex color of the background, if a color is used.',
						},
						backgroundImage: {
							type: 'string',
							description: 'The URL of the background image, if an image is used.',
						},
						backgroundImageScaled: {
							type: 'array',
							description: 'Scaled versions of the background image.',
							items: {
								type: 'object',
								description: 'A scaled version of the background image.',
								properties: {
									width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									url: {
										type: 'string',
										description: 'The URL of the scaled image.',
									},
								},
								required: [],
							},
						},
						backgroundTile: {
							type: 'boolean',
							description: 'Whether the background image is tiled.',
						},
						backgroundBrightness: {
							type: 'string',
							description: 'The brightness of the background: `dark` or `light`.',
						},
						backgroundBottomColor: {
							type: 'string',
							description: 'The hex color at the bottom of the background.',
						},
						backgroundTopColor: {
							type: 'string',
							description: 'The hex color at the top of the background.',
						},
						canBePublic: {
							type: 'boolean',
							description: 'Whether the board can be made public.',
						},
						canBeEnterprise: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Enterprise.',
						},
						canBeOrg: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Workspace.',
						},
						canBePrivate: {
							type: 'boolean',
							description: 'Whether the board can be made private.',
						},
						canInvite: {
							type: 'boolean',
							description:
								'Whether the current member can invite people to the board.',
						},
					},
					required: [],
				},
				labelNames: {
					type: 'object',
					description: 'The label names of the board, keyed by label color.',
					properties: {
						green: { type: 'string', description: 'The name of the green label.' },
						yellow: { type: 'string', description: 'The name of the yellow label.' },
						orange: { type: 'string', description: 'The name of the orange label.' },
						red: { type: 'string', description: 'The name of the red label.' },
						purple: { type: 'string', description: 'The name of the purple label.' },
						blue: { type: 'string', description: 'The name of the blue label.' },
						sky: { type: 'string', description: 'The name of the sky label.' },
						lime: { type: 'string', description: 'The name of the lime label.' },
						pink: { type: 'string', description: 'The name of the pink label.' },
						black: { type: 'string', description: 'The name of the black label.' },
					},
					required: [],
				},
				limits: {
					type: 'object',
					description: 'The limits that apply to the board.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of attachments per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						boards: {
							type: 'object',
							description: 'Board limits.',
							properties: {
								totalMembersPerBoard: {
									type: 'object',
									description: 'The limit of members per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						cards: {
							type: 'object',
							description: 'Card limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						checklists: {
							type: 'object',
							description: 'Checklist limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of checklists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						customFields: {
							type: 'object',
							description: 'Custom field limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of custom fields per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						labels: {
							type: 'object',
							description: 'Label limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of labels per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						lists: {
							type: 'object',
							description: 'List limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				starred: {
					type: 'boolean',
					description: 'Whether the board is starred by the current member.',
				},
				memberships: {
					type: 'array',
					description: 'The relationships of members to the board.',
					items: {
						type: 'object',
						description: 'The relationship of a member to the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the membership.' },
							idMember: { type: 'string', description: 'The ID of the member.' },
							memberType: {
								type: 'string',
								description:
									'The role of the member on the board: `admin`, `normal`, or `observer`.',
							},
							unconfirmed: {
								type: 'boolean',
								description:
									'Whether the member has not yet confirmed their account.',
							},
							deactivated: {
								type: 'boolean',
								description: 'Whether the member is deactivated.',
							},
						},
						required: [],
					},
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the board.',
				},
				invited: {
					type: 'boolean',
					description: 'Whether the current member is invited to the board.',
				},
				invitations: {
					type: 'array',
					description: 'Pending invitations to the board.',
					items: {
						type: 'object',
						description: 'A pending invitation to the board.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				powerUps: {
					type: 'array',
					description: 'The Power-Ups enabled on the board.',
					items: {
						type: 'string',
						description: 'The name of a Power-Up enabled on the board.',
					},
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the board occurred.',
				},
				dateLastView: {
					type: 'string',
					description: 'When the current member last viewed the board.',
				},
				idTags: {
					type: 'array',
					description: 'The IDs of the collections (tags) the board belongs to.',
					items: {
						type: 'string',
						description: 'The ID of a collection the board belongs to.',
					},
				},
				datePluginDisable: {
					type: 'string',
					description: 'When Power-Ups were disabled on the board, if ever.',
				},
				creationMethod: { type: 'string', description: 'How the board was created.' },
				ixUpdate: {
					type: 'string',
					description: 'An internal update counter of the board.',
				},
				templateGallery: {
					type: 'string',
					description: 'The template gallery the board is published in, if any.',
				},
				enterpriseOwned: {
					type: 'boolean',
					description: 'Whether the board is owned by an Enterprise.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createAChecklist',
		label: 'Create a checklist',
		description: 'Creates a new checklist on a card.',
		context:
			'---\nname: createAChecklist\ndescription: Creates a new checklist on a card.\n---\n\nCreates a checklist on a Trello card via `POST /checklists` and returns the new checklist.\n\n- `idCard` is the only required field. The checklist is created empty unless `idChecklistSource` is set.\n- Set `idChecklistSource` to copy an existing checklist with all of its items.\n- Add items to the checklist with `createChecklistItem`, and update them with `editAChecklistItem`.\n\nAPI reference: [Create a Checklist](https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/#api-checklists-post).\n',
		accounts: { trello: { scope: [] } },
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
				idCard: {
					type: 'string',
					description: 'The ID of the card to add the checklist to.',
				},
				name: {
					type: 'string',
					description: 'The name of the checklist, 1 to 16384 characters long.',
					minimum: 1,
					maximum: 16_384,
				},
				pos: {
					type: 'string',
					description:
						'The position of the checklist on the card: `top`, `bottom`, or a positive number.',
				},
				idChecklistSource: {
					type: 'string',
					description:
						'The ID of a checklist to copy into the new checklist, including its items.',
				},
			},
			required: ['idCard'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist.' },
				name: { type: 'string', description: 'The name of the checklist.' },
				idBoard: {
					type: 'string',
					description: 'The ID of the board the checklist is on.',
				},
				idCard: { type: 'string', description: 'The ID of the card the checklist is on.' },
				pos: { type: 'number', description: 'The position of the checklist on the card.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the checklist.',
					properties: {
						checkItems: {
							type: 'object',
							description: 'Checklist item limits.',
							properties: {
								perChecklist: {
									type: 'object',
									description: 'The limit of items per checklist.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				creationMethod: { type: 'string', description: 'How the checklist was created.' },
				checkItems: {
					type: 'array',
					description: 'The items of the checklist.',
					items: {
						type: 'object',
						description: 'An item of the checklist.',
						properties: {
							id: { type: 'string', description: 'The ID of the checklist item.' },
							idChecklist: {
								type: 'string',
								description: 'The ID of the checklist the item belongs to.',
							},
							name: {
								type: 'string',
								description: 'The name of the checklist item.',
							},
							nameData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the name, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							state: {
								type: 'string',
								description: 'The state of the item: `complete` or `incomplete`.',
							},
							pos: {
								type: 'number',
								description: 'The position of the item in the checklist.',
							},
							due: { type: 'string', description: 'The due date of the item.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							idMember: {
								type: 'string',
								description: 'The ID of the member assigned to the item.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createACommentInACard',
		label: 'Create a comment in a card',
		description: 'Adds a comment to a card.',
		context:
			'---\nname: createACommentInACard\ndescription: Adds a comment to a card.\n---\n\nAdds a comment to a Trello card via `POST /cards/{id}/actions/comments` and returns the new `commentCard` action.\n\n- The comment ID is the `id` of the returned action. Use it with `editACommentInACard` and `deleteACommentInACard`.\n- Trello supports Markdown in comments. To mention a member, include `@username` in the text.\n\nAPI reference: [Add a new comment to a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-actions-comments-post).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID or short link of the card to comment on.',
				},
				text: {
					type: 'string',
					description: 'The text of the comment. Trello supports markdown in comments.',
				},
			},
			required: ['id', 'text'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createACustomField',
		label: 'Create a custom field',
		description: 'Creates a new custom field on a board.',
		context:
			'---\nname: createACustomField\ndescription: Creates a new custom field on a board.\n---\n\nCreates a custom field on a Trello board via `POST /customFields` and returns the new custom field.\n\n- The Custom Fields Power-Up must be enabled on the board, otherwise Trello returns `403 Custom Fields Power-Up disabled for board`.\n- `modelType` is always `board` and is set automatically.\n- `options` only applies to the `list` (dropdown) type and is ignored for the other types. Each option carries its text in `value.text`.\n- The API reference lists `pos` as required, while the Custom Fields guide lists it as optional. Send it when the placement of the field matters.\n- Set values on cards with `setACustomFieldOnACard`.\n\nAPI reference: [Create a new Custom Field on a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/#api-customfields-post). See also [Getting Started With Custom Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/).\n',
		accounts: { trello: { scope: [] } },
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
				idModel: {
					type: 'string',
					description: 'The ID of the board to create the custom field on.',
				},
				name: {
					type: 'string',
					description: 'The name of the custom field, as shown to the user.',
				},
				type: {
					type: 'string',
					description: 'The type of the custom field. Only `list` fields use options.',
					enum: ['checkbox', 'date', 'list', 'number', 'text'],
				},
				pos: {
					type: 'string',
					description:
						'The position of the custom field among the custom fields of the board: `top`, `bottom`, or a positive number.',
				},
				options: {
					type: 'array',
					description: 'The options of the dropdown. Only used when the type is `list`.',
					items: {
						type: 'object',
						description: 'An option of the dropdown.',
						properties: {
							value: {
								type: 'object',
								description: 'The value of the option.',
								properties: {
									text: {
										type: 'string',
										description:
											'The text of the option, as shown to the user.',
									},
								},
								required: [],
							},
							color: {
								type: 'string',
								description: 'The color of the option.',
								default: '',
								enum: [
									'',
									'none',
									'green',
									'yellow',
									'orange',
									'red',
									'purple',
									'blue',
									'sky',
									'lime',
									'pink',
									'black',
								],
							},
							pos: {
								type: 'number',
								description: 'The position of the option in the dropdown.',
							},
						},
						required: [],
					},
				},
				display_cardFront: {
					type: 'boolean',
					description:
						'Whether the custom field is shown on the front of cards. Default: `true`.',
					default: true,
				},
			},
			required: ['idModel', 'name', 'type'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the custom field.' },
				idModel: {
					type: 'string',
					description: 'The ID of the board the custom field belongs to.',
				},
				modelType: {
					type: 'string',
					description: 'The type of the model the custom field belongs to: `board`.',
				},
				fieldGroup: {
					type: 'string',
					description:
						'A hash identifying custom fields with the same definition across boards.',
				},
				display: {
					type: 'object',
					description: 'The display settings of the custom field.',
					properties: {
						cardFront: {
							type: 'boolean',
							description: 'Whether the custom field is shown on the front of cards.',
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'The name of the custom field.' },
				pos: { type: 'number', description: 'The position of the custom field.' },
				type: {
					type: 'string',
					description:
						'The type of the custom field: `checkbox`, `date`, `list`, `number`, or `text`.',
				},
				isSuggestedField: {
					type: 'boolean',
					description: 'Whether the custom field is a suggested field.',
				},
				options: {
					type: 'array',
					description: 'The options of a dropdown (`list`) custom field.',
					items: {
						type: 'object',
						description: 'An option of the dropdown custom field.',
						properties: {
							id: { type: 'string', description: 'The ID of the option.' },
							idCustomField: {
								type: 'string',
								description: 'The ID of the custom field the option belongs to.',
							},
							value: {
								type: 'object',
								description: 'The value of the option.',
								properties: {
									text: {
										type: 'string',
										description: 'The text of the option.',
									},
								},
								required: [],
							},
							color: { type: 'string', description: 'The color of the option.' },
							pos: { type: 'number', description: 'The position of the option.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createALabel',
		label: 'Create a label',
		description: 'Creates a new label on a board.',
		context:
			'---\nname: createALabel\ndescription: Creates a new label on a board.\n---\n\nCreates a label on a Trello board via `POST /labels` and returns the new label.\n\n- A label belongs to one board and can only be added to cards on that board.\n- Add it to a card with `addALabelToACard`, and list the labels of a board with `retrieveLabels`.\n\nAPI reference: [Create a Label](https://developer.atlassian.com/cloud/trello/rest/api-group-labels/#api-labels-post).\n',
		accounts: { trello: { scope: [] } },
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
				idBoard: {
					type: 'string',
					description: 'The ID of the board to create the label on.',
				},
				name: {
					type: 'string',
					description: 'The name displayed for the label, up to 16384 characters long.',
					maximum: 16_384,
				},
				color: {
					type: 'string',
					description: 'The color of the label.',
					default: '',
					enum: [
						'',
						'green',
						'yellow',
						'orange',
						'red',
						'purple',
						'blue',
						'sky',
						'lime',
						'pink',
						'black',
					],
				},
			},
			required: ['idBoard', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the label.' },
				idBoard: { type: 'string', description: 'The ID of the board the label is on.' },
				name: { type: 'string', description: 'The name displayed for the label.' },
				color: {
					type: 'string',
					description:
						'The color of the label. Empty means no color and the label is not shown on the front of cards.',
				},
				uses: { type: 'number', description: 'The number of cards the label is used on.' },
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createAList',
		label: 'Create a list',
		description: 'Creates a new list on a board.',
		context:
			'---\nname: createAList\ndescription: Creates a new list on a board.\n---\n\nCreates a list on a Trello board via `POST /lists` and returns the new list.\n\n- `idBoard` must be the long board ID, not the short link.\n- Set `idListSource` to copy an existing list together with its cards.\n- Archive or rename the list later with `archiveOrUnarchiveAList` and `editAList`.\n\nAPI reference: [Create a new List](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-post).\n',
		accounts: { trello: { scope: [] } },
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
				idBoard: {
					type: 'string',
					description: 'The long ID of the board to create the list on.',
				},
				name: { type: 'string', description: 'The name of the list.' },
				idListSource: {
					type: 'string',
					description: 'The ID of a list to copy into the new list, including its cards.',
				},
				pos: {
					type: 'string',
					description:
						'The position of the list on the board: `top`, `bottom`, or a positive number.',
				},
			},
			required: ['idBoard', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the list.' },
				name: { type: 'string', description: 'The name of the list.' },
				closed: { type: 'boolean', description: 'Whether the list is closed (archived).' },
				idBoard: { type: 'string', description: 'The ID of the board the list is on.' },
				pos: { type: 'number', description: 'The position of the list on the board.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the list.',
				},
				softLimit: {
					type: 'number',
					description: 'The soft limit of cards in the list, if set.',
				},
				creationMethod: { type: 'string', description: 'How the list was created.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the list.',
					properties: {
						cards: {
							type: 'object',
							description: 'Card limits of the list.',
							properties: {
								openPerList: {
									type: 'object',
									description: 'The limit of open cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerList: {
									type: 'object',
									description: 'The limit of all cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createCard',
		label: 'Create a card',
		description: 'Creates a new card in a list.',
		context:
			'---\nname: createCard\ndescription: Creates a new card in a list.\n---\n\nCreates a Trello card via `POST /cards` and returns the new card.\n\n- `idList` is the only required field. Find list IDs with `getBoardLists`.\n- `idMembers` and `idLabels` take member and label IDs. They are sent to Trello as comma-separated lists. Find label IDs with `retrieveLabels`.\n- To copy an existing card, set `idCardSource` and choose what to copy in `keepFromSource` (Trello copies `all` by default). `keepFromSource` is ignored without `idCardSource`.\n- `urlSource` attaches a link to the new card. Uploading a file (`fileSource`) is not supported by endpoints.\n\nAPI reference: [Create a new Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-post).\n',
		accounts: { trello: { scope: [] } },
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
				idList: {
					type: 'string',
					description: 'The ID of the list to create the card in.',
				},
				name: { type: 'string', description: 'The name of the card.' },
				desc: { type: 'string', description: 'The description of the card.' },
				pos: {
					type: 'string',
					description:
						'The position of the card in the list: `top`, `bottom`, or a positive number.',
				},
				due: { type: 'string', description: 'The due date of the card.' },
				start: { type: 'string', description: 'The start date of the card.' },
				dueComplete: {
					type: 'boolean',
					description: 'Whether the due date of the card is marked complete.',
				},
				idMembers: {
					type: 'array',
					description: 'The IDs of the members to assign to the card.',
					items: {
						type: 'string',
						description: 'The ID of a member to assign to the card.',
					},
				},
				idLabels: {
					type: 'array',
					description: 'The IDs of the labels to add to the card.',
					items: { type: 'string', description: 'The ID of a label to add to the card.' },
				},
				urlSource: {
					type: 'string',
					description:
						'A URL starting with `http://` or `https://` to attach to the card when it is created.',
				},
				mimeType: {
					type: 'string',
					description:
						'The MIME type of the attachment created from `urlSource`, up to 256 characters long.',
					maximum: 256,
				},
				idCardSource: {
					type: 'string',
					description: 'The ID of a card to copy into the new card.',
				},
				keepFromSource: {
					type: 'string',
					description:
						'The properties to copy from the source card when `idCardSource` is set. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'attachments',
						'checklists',
						'comments',
						'customFields',
						'due',
						'start',
						'labels',
						'members',
						'stickers',
					],
				},
				address: {
					type: 'string',
					description: 'The address of the card location, for the map view.',
				},
				locationName: {
					type: 'string',
					description: 'The name of the card location, for the map view.',
				},
				coordinates: {
					type: 'string',
					description:
						'The coordinates of the card location, for the map view, in the `latitude,longitude` format.',
				},
				cardRole: {
					type: 'string',
					description:
						'Displays the card in a special way based on its name. Board cards need a name that is a link to a Trello board, and mirror cards need a name that is a link to a Trello card.',
					default: '',
					enum: ['', 'separator', 'board', 'mirror', 'link'],
				},
			},
			required: ['idList'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the card.' },
				badges: {
					type: 'object',
					description: 'Information displayed on the front of the card.',
					properties: {
						votes: { type: 'number', description: 'The number of votes on the card.' },
						viewingMemberVoted: {
							type: 'boolean',
							description: 'Whether the current member voted on the card.',
						},
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the card.',
						},
						fogbugz: {
							type: 'string',
							description: 'The FogBugz case linked to the card, if any.',
						},
						checkItems: {
							type: 'number',
							description: 'The number of checklist items on the card.',
						},
						checkItemsChecked: {
							type: 'number',
							description: 'The number of completed checklist items on the card.',
						},
						comments: {
							type: 'number',
							description: 'The number of comments on the card.',
						},
						attachments: {
							type: 'number',
							description: 'The number of attachments on the card.',
						},
						description: {
							type: 'boolean',
							description: 'Whether the card has a description.',
						},
						due: { type: 'string', description: 'The due date of the card.' },
						dueComplete: {
							type: 'boolean',
							description: 'Whether the due date of the card is marked complete.',
						},
						start: { type: 'string', description: 'The start date of the card.' },
						location: {
							type: 'boolean',
							description: 'Whether the card has a location.',
						},
						attachmentsByType: {
							type: 'object',
							description: 'The number of attachments on the card by type.',
							properties: {
								trello: {
									type: 'object',
									description:
										'The number of attachments linking to Trello objects.',
									properties: {
										board: {
											type: 'number',
											description:
												'The number of attachments linking to Trello boards.',
										},
										card: {
											type: 'number',
											description:
												'The number of attachments linking to Trello cards.',
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
				checkItemStates: {
					type: 'array',
					description: 'The states of the checklist items on the card.',
					items: {
						type: 'object',
						description: 'The state of a checklist item.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				closed: { type: 'boolean', description: 'Whether the card is closed (archived).' },
				dueComplete: {
					type: 'boolean',
					description: 'Whether the due date of the card is marked complete.',
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the card occurred.',
				},
				desc: { type: 'string', description: 'The description of the card.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				due: { type: 'string', description: 'The due date of the card.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				email: { type: 'string', description: 'The email address of the card, if any.' },
				idBoard: { type: 'string', description: 'The ID of the board the card is on.' },
				idChecklists: {
					type: 'array',
					description: 'The IDs of the checklists on the card.',
					items: { type: 'string', description: 'The ID of a checklist on the card.' },
				},
				idList: { type: 'string', description: 'The ID of the list the card is in.' },
				idMembers: {
					type: 'array',
					description: 'The IDs of the members assigned to the card.',
					items: {
						type: 'string',
						description: 'The ID of a member assigned to the card.',
					},
				},
				idMembersVoted: {
					type: 'array',
					description: 'The IDs of the members who voted on the card.',
					items: {
						type: 'string',
						description: 'The ID of a member who voted on the card.',
					},
				},
				idShort: {
					type: 'number',
					description: 'The numeric ID of the card, unique within the board.',
				},
				idAttachmentCover: {
					type: 'string',
					description: 'The ID of the attachment used as the card cover, if any.',
				},
				manualCoverAttachment: {
					type: 'boolean',
					description: 'Whether the card cover was selected manually by the user.',
				},
				labels: {
					type: 'array',
					description: 'The labels on the card.',
					items: {
						type: 'object',
						description: 'A label on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the label.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the board the label is on.',
							},
							name: {
								type: 'string',
								description: 'The name displayed for the label.',
							},
							color: {
								type: 'string',
								description:
									'The color of the label. Empty means no color and the label is not shown on the front of cards.',
							},
							uses: {
								type: 'number',
								description: 'The number of cards the label is used on.',
							},
						},
						required: [],
					},
				},
				idLabels: {
					type: 'array',
					description: 'The IDs of the labels on the card.',
					items: { type: 'string', description: 'The ID of a label on the card.' },
				},
				name: { type: 'string', description: 'The name of the card.' },
				pos: { type: 'number', description: 'The position of the card in the list.' },
				shortLink: { type: 'string', description: 'The 8-character short ID of the card.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the card without the name slug.',
				},
				start: { type: 'string', description: 'The start date of the card.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the card.',
				},
				url: { type: 'string', description: 'The full URL of the card.' },
				address: { type: 'string', description: 'The address of the card location.' },
				locationName: { type: 'string', description: 'The name of the card location.' },
				coordinates: {
					type: 'object',
					description: 'The coordinates of the card location.',
					properties: {
						latitude: {
							type: 'number',
							description: 'The latitude of the card location.',
						},
						longitude: {
							type: 'number',
							description: 'The longitude of the card location.',
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description: 'The cover settings of the card.',
					properties: {
						idAttachment: {
							type: 'string',
							description: 'The ID of the attachment used as the cover.',
						},
						color: { type: 'string', description: 'The color of the cover.' },
						idUploadedBackground: {
							type: 'string',
							description: 'The ID of the uploaded background used as the cover.',
						},
						size: {
							type: 'string',
							description: 'The size of the cover: `normal` or `full`.',
						},
						brightness: {
							type: 'string',
							description: 'The brightness of the cover: `dark` or `light`.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the cover is from a template.',
						},
					},
					required: [],
				},
				cardRole: {
					type: 'string',
					description:
						'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
				},
				creationMethod: { type: 'string', description: 'How the card was created.' },
				mirrorSourceId: {
					type: 'string',
					description: 'The ID of the source card, for mirror cards.',
				},
				isTemplate: { type: 'boolean', description: 'Whether the card is a template.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the card.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perCard: {
									type: 'object',
									description: 'The limit of attachments per card.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				members: {
					type: 'array',
					description:
						'The members assigned to the card. Returned when card members are requested.',
					items: {
						type: 'object',
						description: 'A member assigned to the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				attachments: {
					type: 'array',
					description:
						'The attachments on the card. Returned when card attachments are requested.',
					items: {
						type: 'object',
						description: 'An attachment on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the attachment.' },
							bytes: {
								type: 'number',
								description: 'The size of the attachment in bytes.',
							},
							date: { type: 'string', description: 'When the attachment was added.' },
							edgeColor: {
								type: 'string',
								description: 'The extracted edge color, for image attachments.',
							},
							idMember: {
								type: 'string',
								description: 'The ID of the member who added the attachment.',
							},
							isUpload: {
								type: 'boolean',
								description: 'Whether the attachment was uploaded.',
							},
							mimeType: {
								type: 'string',
								description: 'The MIME type of the attachment.',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							pos: {
								type: 'number',
								description:
									'The position of the attachment in the attachments list.',
							},
							previews: {
								type: 'array',
								description:
									'Generated previews of an image attachment in various sizes.',
								items: {
									type: 'object',
									description: 'A generated preview of the image.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the preview.',
										},
										scaled: {
											type: 'boolean',
											description: 'Whether the preview is scaled.',
										},
										url: {
											type: 'string',
											description: 'The URL of the preview.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the preview in bytes.',
										},
										height: {
											type: 'number',
											description: 'The height of the preview in pixels.',
										},
										width: {
											type: 'number',
											description: 'The width of the preview in pixels.',
										},
									},
									required: [],
								},
							},
							url: { type: 'string', description: 'The URL of the attachment.' },
							fileName: {
								type: 'string',
								description: 'The file name of the attachment.',
							},
						},
						required: [],
					},
				},
				stickers: {
					type: 'array',
					description:
						'The stickers on the card. Returned when card stickers are requested.',
					items: {
						type: 'object',
						description: 'A sticker on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the sticker.' },
							top: {
								type: 'number',
								description: 'The top position of the sticker on the card.',
							},
							left: {
								type: 'number',
								description: 'The left position of the sticker on the card.',
							},
							zIndex: {
								type: 'number',
								description: 'The z-index of the sticker on the card.',
							},
							rotate: {
								type: 'number',
								description: 'The rotation of the sticker in degrees.',
							},
							image: { type: 'string', description: 'The ID of the sticker image.' },
							imageUrl: {
								type: 'string',
								description: 'The URL of the sticker image.',
							},
							imageScaled: {
								type: 'array',
								description: 'Scaled versions of the sticker image.',
								items: {
									type: 'object',
									description: 'A scaled version of the sticker image.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
						},
						required: [],
					},
				},
				customFieldItems: {
					type: 'array',
					description:
						'The custom field values on the card. Returned when card custom field items are requested.',
					items: {
						type: 'object',
						description: 'A custom field value set on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the custom field item.' },
							idCustomField: {
								type: 'string',
								description: 'The ID of the custom field definition.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the card the value is set on.',
							},
							modelType: {
								type: 'string',
								description: 'The type of the model the value is set on: `card`.',
							},
							idValue: {
								type: 'string',
								description:
									'The ID of the selected option, for dropdown custom fields.',
							},
							value: {
								type: 'object',
								description: 'The value of the custom field, keyed by type.',
								properties: {
									text: {
										type: 'string',
										description: 'The value of a text custom field.',
									},
									number: {
										type: 'string',
										description:
											'The value of a number custom field, as a string.',
									},
									date: {
										type: 'string',
										description: 'The value of a date custom field.',
									},
									checked: {
										type: 'string',
										description:
											'The value of a checkbox custom field: `true` or `false`, as a string.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pluginData: {
					type: 'array',
					description:
						'The Power-Up data on the card. Returned when card plugin data is requested.',
					items: {
						type: 'object',
						description: 'Data stored by a Power-Up.',
						properties: {
							id: { type: 'string', description: 'The ID of the plugin data.' },
							idPlugin: { type: 'string', description: 'The ID of the Power-Up.' },
							scope: {
								type: 'string',
								description:
									'The scope of the data: `board`, `card`, `member`, or `organization`.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the model the data is stored on.',
							},
							value: {
								type: 'string',
								description: 'The stored data, as a JSON string.',
							},
							access: {
								type: 'string',
								description: 'The access level of the data: `private` or `shared`.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createChecklistItem',
		label: 'Create a checklist item',
		description: 'Adds an item to a checklist.',
		context:
			'---\nname: createChecklistItem\ndescription: Adds an item to a checklist.\n---\n\nAdds an item to a Trello checklist via `POST /checklists/{id}/checkItems` and returns the new item.\n\n- Find the checklist ID with `getACardChecklists` or create one with `createAChecklist`.\n- Update the item later with `editAChecklistItem`, which is addressed through the card, not the checklist.\n\nAPI reference: [Create Checkitem on Checklist](https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/#api-checklists-id-checkitems-post).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the checklist to add the item to.' },
				name: {
					type: 'string',
					description: 'The name of the checklist item, 1 to 16384 characters long.',
					minimum: 1,
					maximum: 16_384,
				},
				pos: {
					type: 'string',
					description:
						'The position of the item in the checklist: `top`, `bottom`, or a positive number. Default: `bottom`.',
					default: 'bottom',
				},
				checked: {
					type: 'boolean',
					description:
						'Whether the item is already checked when it is created. Default: `false`.',
					default: false,
				},
				due: { type: 'string', description: 'The due date of the checklist item.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member to assign to the checklist item.',
				},
			},
			required: ['id', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist item.' },
				idChecklist: {
					type: 'string',
					description: 'The ID of the checklist the item belongs to.',
				},
				name: { type: 'string', description: 'The name of the checklist item.' },
				nameData: {
					type: 'object',
					description: 'Data needed to display custom emoji used in the name, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				state: {
					type: 'string',
					description: 'The state of the item: `complete` or `incomplete`.',
				},
				pos: { type: 'number', description: 'The position of the item in the checklist.' },
				due: { type: 'string', description: 'The due date of the item.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member assigned to the item.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'createExportForOrganizations',
		label: 'Create an export for a workspace',
		description: 'Starts an export job for a workspace.',
		context:
			'---\nname: createExportForOrganizations\ndescription: Starts an export job for a Workspace.\n---\n\nStarts an export job for a Trello Workspace via `POST /organizations/{id}/exports` and returns the export job.\n\n- The export runs asynchronously. The response carries the export `id` and a `status.stage` of `Export_queued`; `exportUrl` stays empty until the job finishes.\n- Poll `getOrganizationExports` until `status.stage` becomes `Export_completed` and `exportUrl` is filled in. `exportUrl` is an API path relative to `https://api.trello.com` that requires authentication; endpoints cannot download the ZIP itself.\n- Exports are a paid Workspace feature. Trello rejects the call on Workspaces without the required plan.\n\nAPI reference: [Create Export for Organizations](https://developer.atlassian.com/cloud/trello/rest/api-group-organizations/#api-organizations-id-exports-post).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID or short name of the workspace to export.',
				},
				attachments: {
					type: 'boolean',
					description:
						'Whether the export includes the attachments of the workspace. Default: `true`.',
					default: true,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the export job.' },
				status: {
					type: 'object',
					description: 'The status of the export job.',
					properties: {
						stage: {
							type: 'string',
							description:
								'The stage of the export, for example `Export_queued` or `Export_completed`.',
						},
						finished: {
							type: 'boolean',
							description: 'Whether the export has finished.',
						},
						attempts: {
							type: 'number',
							description: 'The number of attempts made to produce the export.',
						},
						progress: {
							type: 'number',
							description:
								'The progress counter of the export job, as reported by Trello.',
						},
						total: {
							type: 'number',
							description:
								'The total counter of the export job, as reported by Trello.',
						},
					},
					required: [],
				},
				startedAt: { type: 'string', description: 'When the export job started.' },
				size: {
					type: 'number',
					description: 'The size (bytes) of the exported file, once it is available.',
				},
				exportUrl: {
					type: 'string',
					description:
						'The API path of the exported ZIP file, relative to `https://api.trello.com`. Requires authentication. Empty until the export is completed.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'deleteACard',
		label: 'Delete a card',
		description: 'Deletes a card permanently.',
		context:
			'---\nname: deleteACard\ndescription: Permanently deletes a card.\n---\n\nPermanently deletes a Trello card via `DELETE /cards/{id}`. This cannot be undone.\n\n- To hide a card but keep it recoverable, archive it with `archiveOrUnarchiveACard` (`closed` = `true`) instead.\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Delete a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID or short link of the card to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'deleteAChecklist',
		label: 'Delete a checklist',
		description: 'Deletes a checklist permanently.',
		context:
			'---\nname: deleteAChecklist\ndescription: Permanently deletes a checklist.\n---\n\nPermanently deletes a Trello checklist via `DELETE /checklists/{id}`. This cannot be undone.\n\n- Deleting a checklist also deletes all of its items. The card itself is not affected.\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Delete a Checklist](https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/#api-checklists-id-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'deleteACommentInACard',
		label: 'Delete a comment in a card',
		description: 'Deletes a comment from a card.',
		context:
			'---\nname: deleteACommentInACard\ndescription: Deletes a comment from a card.\n---\n\nDeletes a comment on a Trello card via `DELETE /actions/{id}`. This cannot be undone.\n\n- `id` is the ID of the `commentCard` action. Find it with `listCommentsInACard` (the comment ID is the action `id`).\n- Only comment actions can be deleted. Other action types return an error.\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Delete an Action](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/#api-actions-id-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The ID of the comment action to delete. Only comment actions (`commentCard`) can be deleted.',
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'deleteALabel',
		label: 'Delete a label',
		description: 'Deletes a label permanently.',
		context:
			'---\nname: deleteALabel\ndescription: Permanently deletes a label.\n---\n\nPermanently deletes a Trello label via `DELETE /labels/{id}`. This cannot be undone.\n\n- The label is removed from the board and from every card that uses it. To detach it from one card only, use `removeALabelFromACard`.\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Delete a Label](https://developer.atlassian.com/cloud/trello/rest/api-group-labels/#api-labels-id-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: { id: { type: 'string', description: 'The ID of the label to delete.' } },
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'deleteAnAttachment',
		label: 'Delete an attachment',
		description: 'Deletes an attachment from a card.',
		context:
			'---\nname: deleteAnAttachment\ndescription: Deletes an attachment from a card.\n---\n\nDeletes an attachment from a Trello card via `DELETE /cards/{id}/attachments/{idAttachment}`. This cannot be undone.\n\n- Find the attachment ID with `listAttachments`.\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Delete an Attachment on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-attachments-idattachment-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID or short link of the card.' },
				idAttachment: {
					type: 'string',
					description:
						'The ID of the attachment to delete. Find it with `listAttachments`.',
				},
			},
			required: ['id', 'idAttachment'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'editAChecklistItem',
		label: 'Edit a checklist item',
		description: 'Updates a checklist item on a card.',
		context:
			'---\nname: editAChecklistItem\ndescription: Updates a checklist item on a card.\n---\n\nUpdates a checklist item on a Trello card via `PUT /cards/{id}/checkItem/{idCheckItem}` and returns the updated item.\n\n- Only the fields you provide are changed. Omitted fields keep their current values. Use `getACardChecklists` first if you need the current values.\n- The call goes through the card, not the checklist, so both the card ID and the checklist item ID are required.\n- Set `idChecklist` to move the item to another checklist on the same card.\n- Check an item off with `state` = `complete`.\n\nAPI reference: [Update a checkItem on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-checkitem-idcheckitem-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID or short link of the card the checklist item is on.',
				},
				idCheckItem: {
					type: 'string',
					description:
						'The ID of the checklist item to update. Find it with `getACardChecklists`.',
				},
				name: { type: 'string', description: 'The new name of the checklist item.' },
				state: {
					type: 'string',
					description: 'Whether the checklist item is completed.',
					default: '',
					enum: ['', 'complete', 'incomplete'],
				},
				idChecklist: {
					type: 'string',
					description: 'The ID of the checklist to move the item to.',
				},
				pos: {
					type: 'string',
					description:
						'The position of the item in the checklist: `top`, `bottom`, or a positive number.',
				},
				due: { type: 'string', description: 'The due date of the checklist item.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member to assign to the checklist item.',
				},
			},
			required: ['id', 'idCheckItem'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist item.' },
				idChecklist: {
					type: 'string',
					description: 'The ID of the checklist the item belongs to.',
				},
				name: { type: 'string', description: 'The name of the checklist item.' },
				nameData: {
					type: 'object',
					description: 'Data needed to display custom emoji used in the name, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				state: {
					type: 'string',
					description: 'The state of the item: `complete` or `incomplete`.',
				},
				pos: { type: 'number', description: 'The position of the item in the checklist.' },
				due: { type: 'string', description: 'The due date of the item.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member assigned to the item.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'editACommentInACard',
		label: 'Edit a comment in a card',
		description: 'Updates the text of a comment on a card.',
		context:
			'---\nname: editACommentInACard\ndescription: Updates the text of a comment on a card.\n---\n\nReplaces the text of an existing comment on a Trello card via `PUT /actions/{id}/text` and returns the updated comment action.\n\n- `id` is the ID of the `commentCard` action. Find it with `listCommentsInACard` (the comment ID is the action `id`).\n- `value` replaces the whole comment text. Trello supports Markdown in comments.\n- Only the author of a comment can edit it.\n\nAPI reference: [Update a Comment Action](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/#api-actions-id-text-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the comment action to update.' },
				value: { type: 'string', description: 'The new text of the comment.' },
			},
			required: ['id', 'value'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'editALabel',
		label: 'Edit a label',
		description: 'Updates the name or color of a label.',
		context:
			'---\nname: editALabel\ndescription: Updates the name or color of a label.\n---\n\nUpdates a Trello label via `PUT /labels/{id}` and returns the updated label.\n\n- Only the fields you provide are changed. Omitted fields keep their current values.\n- The change applies everywhere the label is used, on every card on the board.\n\nAPI reference: [Update a Label](https://developer.atlassian.com/cloud/trello/rest/api-group-labels/#api-labels-id-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the label.' },
				name: {
					type: 'string',
					description: 'The new name of the label, up to 16384 characters long.',
					maximum: 16_384,
				},
				color: {
					type: 'string',
					description: 'The new color of the label.',
					default: '',
					enum: [
						'',
						'green',
						'yellow',
						'orange',
						'red',
						'purple',
						'blue',
						'sky',
						'lime',
						'pink',
						'black',
					],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the label.' },
				idBoard: { type: 'string', description: 'The ID of the board the label is on.' },
				name: { type: 'string', description: 'The name displayed for the label.' },
				color: {
					type: 'string',
					description:
						'The color of the label. Empty means no color and the label is not shown on the front of cards.',
				},
				uses: { type: 'number', description: 'The number of cards the label is used on.' },
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'editAList',
		label: 'Edit a list',
		description: 'Updates the name, position, board, or state of a list.',
		context:
			'---\nname: editAList\ndescription: Updates the name, position, board, or state of a list.\n---\n\nUpdates a Trello list via `PUT /lists/{id}` and returns the updated list.\n\n- Only the fields you provide are changed. Omitted fields keep their current values.\n- `closed` archives or restores the list. `archiveOrUnarchiveAList` does the same through the dedicated `/closed` route.\n- Moving a list to another board with `idBoard` moves its cards along with it.\n\nAPI reference: [Update a List](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-id-put).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the list to update.' },
				name: { type: 'string', description: 'The new name of the list.' },
				closed: { type: 'boolean', description: 'Whether the list is closed (archived).' },
				idBoard: {
					type: 'string',
					description: 'The ID of the board to move the list to.',
				},
				pos: {
					type: 'string',
					description:
						'The new position of the list on the board: `top`, `bottom`, or a positive number.',
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the authenticated member is subscribed to the list.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the list.' },
				name: { type: 'string', description: 'The name of the list.' },
				closed: { type: 'boolean', description: 'Whether the list is closed (archived).' },
				idBoard: { type: 'string', description: 'The ID of the board the list is on.' },
				pos: { type: 'number', description: 'The position of the list on the board.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the list.',
				},
				softLimit: {
					type: 'number',
					description: 'The soft limit of cards in the list, if set.',
				},
				creationMethod: { type: 'string', description: 'How the list was created.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the list.',
					properties: {
						cards: {
							type: 'object',
							description: 'Card limits of the list.',
							properties: {
								openPerList: {
									type: 'object',
									description: 'The limit of open cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerList: {
									type: 'object',
									description: 'The limit of all cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getACard',
		label: 'Get a card',
		description: 'Returns a card, optionally with its nested resources.',
		context:
			'---\nname: getACard\ndescription: Returns a card, optionally with its nested resources.\n---\n\nReturns a Trello card via `GET /cards/{id}`. Nested resources can be included in the same call.\n\n- `id` accepts the card ID or its short link (for example, `AbCd1234` from `https://trello.com/c/AbCd1234/...`).\n- Without extra parameters, Trello returns the default card fields only. Nested resources (`attachments`, `members`, `membersVoted`, `checklists`, `board`, `list`, `stickers`, `customFieldItems`, `pluginData`, `actions`) are included only when requested. Each has its own `*_fields` option. See [Nested Resources](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).\n- Set `customFieldItems` to `true` to read custom field values. Use `getBoard` (`customFields` = `true`) to map `idCustomField` to field names.\n\nAPI reference: [Get a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the card.' },
				fields: {
					type: 'string',
					description:
						'The card fields to return. Default: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `start`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idShort`, `idAttachmentCover`, `manualCoverAttachment`, `labels`, `name`, `pos`, `shortUrl`, `url`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'address',
						'badges',
						'checkItemStates',
						'closed',
						'coordinates',
						'creationMethod',
						'dueComplete',
						'dateLastActivity',
						'desc',
						'descData',
						'due',
						'dueReminder',
						'idBoard',
						'idChecklists',
						'idLabels',
						'idList',
						'idMembers',
						'idMembersVoted',
						'idShort',
						'idAttachmentCover',
						'labels',
						'limits',
						'locationName',
						'manualCoverAttachment',
						'name',
						'pos',
						'shortLink',
						'shortUrl',
						'start',
						'subscribed',
						'url',
						'cover',
						'isTemplate',
					],
				},
				actions: {
					type: 'string',
					description:
						'The nested actions to return. Select `all` to return actions of every type, or select one or more [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
					default: '',
					enum: [
						'',
						'all',
						'addAttachmentToCard',
						'addChecklistToCard',
						'addMemberToBoard',
						'addMemberToCard',
						'addMemberToOrganization',
						'addToOrganizationBoard',
						'commentCard',
						'convertToCardFromCheckItem',
						'copyBoard',
						'copyCard',
						'copyCommentCard',
						'createBoard',
						'createCard',
						'createList',
						'createOrganization',
						'deleteAttachmentFromCard',
						'deleteBoardInvitation',
						'deleteCard',
						'deleteOrganizationInvitation',
						'disablePowerUp',
						'emailCard',
						'enablePowerUp',
						'makeAdminOfBoard',
						'makeNormalMemberOfBoard',
						'makeNormalMemberOfOrganization',
						'makeObserverOfBoard',
						'memberJoinedTrello',
						'moveCardFromBoard',
						'moveCardToBoard',
						'moveListFromBoard',
						'moveListToBoard',
						'removeChecklistFromCard',
						'removeFromOrganizationBoard',
						'removeMemberFromCard',
						'sortList',
						'unconfirmedBoardInvitation',
						'unconfirmedOrganizationInvitation',
						'updateBoard',
						'updateCard',
						'updateCard:closed',
						'updateCard:desc',
						'updateCard:idList',
						'updateCard:name',
						'updateCheckItemStateOnCard',
						'updateChecklist',
						'updateList',
						'updateList:closed',
						'updateList:name',
						'updateMember',
						'updateOrganization',
					],
				},
				attachments: {
					type: 'string',
					description:
						'Whether to return the attachments of the card. Use `cover` to return only the cover attachment. Default: `false`.',
					default: '',
					enum: ['', 'true', 'false', 'cover'],
				},
				attachment_fields: {
					type: 'string',
					description: 'The attachment fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'bytes',
						'date',
						'edgeColor',
						'idMember',
						'isUpload',
						'mimeType',
						'name',
						'previews',
						'url',
					],
				},
				members: {
					type: 'boolean',
					description:
						'Whether to return the members assigned to the card. Default: `false`.',
					default: false,
				},
				member_fields: {
					type: 'string',
					description:
						'The member fields to return. Default: `avatarHash`, `fullName`, `initials`, `username`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				membersVoted: {
					type: 'boolean',
					description:
						'Whether to return the members who voted on the card. Default: `false`.',
					default: false,
				},
				memberVoted_fields: {
					type: 'string',
					description:
						'The fields of members who voted to return. Default: `avatarHash`, `fullName`, `initials`, `username`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				checkItemStates: {
					type: 'boolean',
					description:
						'Whether to return the states of the checklist items on the card. Default: `false`.',
					default: false,
				},
				checklists: {
					type: 'string',
					description: 'Whether to return the checklists on the card. Default: `none`.',
					default: '',
					enum: ['', 'all', 'none'],
				},
				checklist_fields: {
					type: 'string',
					description: 'The checklist fields to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'idBoard', 'idCard', 'name', 'pos'],
				},
				board: {
					type: 'boolean',
					description: 'Whether to return the board the card is on. Default: `false`.',
					default: false,
				},
				board_fields: {
					type: 'string',
					description:
						'The board fields to return. Default: `name`, `desc`, `descData`, `closed`, `idOrganization`, `pinned`, `url`, `prefs`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'closed',
						'dateLastActivity',
						'dateLastView',
						'desc',
						'descData',
						'enterpriseOwned',
						'idMemberCreator',
						'idOrganization',
						'invitations',
						'invited',
						'labelNames',
						'limits',
						'memberships',
						'name',
						'pinned',
						'powerUps',
						'prefs',
						'shortLink',
						'shortUrl',
						'starred',
						'subscribed',
						'url',
					],
				},
				list: {
					type: 'boolean',
					description: 'Whether to return the list the card is in. Default: `false`.',
					default: false,
				},
				pluginData: {
					type: 'boolean',
					description:
						'Whether to return the power-up data of the card. Default: `false`.',
					default: false,
				},
				stickers: {
					type: 'boolean',
					description: 'Whether to return the stickers on the card. Default: `false`.',
					default: false,
				},
				sticker_fields: {
					type: 'string',
					description: 'The sticker fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'top',
						'left',
						'zIndex',
						'rotate',
						'image',
						'imageUrl',
						'imageScaled',
					],
				},
				customFieldItems: {
					type: 'boolean',
					description:
						'Whether to return the custom field values set on the card. Default: `false`.',
					default: false,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the card.' },
				badges: {
					type: 'object',
					description: 'Information displayed on the front of the card.',
					properties: {
						votes: { type: 'number', description: 'The number of votes on the card.' },
						viewingMemberVoted: {
							type: 'boolean',
							description: 'Whether the current member voted on the card.',
						},
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the card.',
						},
						fogbugz: {
							type: 'string',
							description: 'The FogBugz case linked to the card, if any.',
						},
						checkItems: {
							type: 'number',
							description: 'The number of checklist items on the card.',
						},
						checkItemsChecked: {
							type: 'number',
							description: 'The number of completed checklist items on the card.',
						},
						comments: {
							type: 'number',
							description: 'The number of comments on the card.',
						},
						attachments: {
							type: 'number',
							description: 'The number of attachments on the card.',
						},
						description: {
							type: 'boolean',
							description: 'Whether the card has a description.',
						},
						due: { type: 'string', description: 'The due date of the card.' },
						dueComplete: {
							type: 'boolean',
							description: 'Whether the due date of the card is marked complete.',
						},
						start: { type: 'string', description: 'The start date of the card.' },
						location: {
							type: 'boolean',
							description: 'Whether the card has a location.',
						},
						attachmentsByType: {
							type: 'object',
							description: 'The number of attachments on the card by type.',
							properties: {
								trello: {
									type: 'object',
									description:
										'The number of attachments linking to Trello objects.',
									properties: {
										board: {
											type: 'number',
											description:
												'The number of attachments linking to Trello boards.',
										},
										card: {
											type: 'number',
											description:
												'The number of attachments linking to Trello cards.',
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
				checkItemStates: {
					type: 'array',
					description: 'The states of the checklist items on the card.',
					items: {
						type: 'object',
						description: 'The state of a checklist item.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				closed: { type: 'boolean', description: 'Whether the card is closed (archived).' },
				dueComplete: {
					type: 'boolean',
					description: 'Whether the due date of the card is marked complete.',
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the card occurred.',
				},
				desc: { type: 'string', description: 'The description of the card.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				due: { type: 'string', description: 'The due date of the card.' },
				dueReminder: {
					type: 'number',
					description:
						'The number of minutes before the due date when a reminder is sent.',
				},
				email: { type: 'string', description: 'The email address of the card, if any.' },
				idBoard: { type: 'string', description: 'The ID of the board the card is on.' },
				idChecklists: {
					type: 'array',
					description: 'The IDs of the checklists on the card.',
					items: { type: 'string', description: 'The ID of a checklist on the card.' },
				},
				idList: { type: 'string', description: 'The ID of the list the card is in.' },
				idMembers: {
					type: 'array',
					description: 'The IDs of the members assigned to the card.',
					items: {
						type: 'string',
						description: 'The ID of a member assigned to the card.',
					},
				},
				idMembersVoted: {
					type: 'array',
					description: 'The IDs of the members who voted on the card.',
					items: {
						type: 'string',
						description: 'The ID of a member who voted on the card.',
					},
				},
				idShort: {
					type: 'number',
					description: 'The numeric ID of the card, unique within the board.',
				},
				idAttachmentCover: {
					type: 'string',
					description: 'The ID of the attachment used as the card cover, if any.',
				},
				manualCoverAttachment: {
					type: 'boolean',
					description: 'Whether the card cover was selected manually by the user.',
				},
				labels: {
					type: 'array',
					description: 'The labels on the card.',
					items: {
						type: 'object',
						description: 'A label on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the label.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the board the label is on.',
							},
							name: {
								type: 'string',
								description: 'The name displayed for the label.',
							},
							color: {
								type: 'string',
								description:
									'The color of the label. Empty means no color and the label is not shown on the front of cards.',
							},
							uses: {
								type: 'number',
								description: 'The number of cards the label is used on.',
							},
						},
						required: [],
					},
				},
				idLabels: {
					type: 'array',
					description: 'The IDs of the labels on the card.',
					items: { type: 'string', description: 'The ID of a label on the card.' },
				},
				name: { type: 'string', description: 'The name of the card.' },
				pos: { type: 'number', description: 'The position of the card in the list.' },
				shortLink: { type: 'string', description: 'The 8-character short ID of the card.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the card without the name slug.',
				},
				start: { type: 'string', description: 'The start date of the card.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the card.',
				},
				url: { type: 'string', description: 'The full URL of the card.' },
				address: { type: 'string', description: 'The address of the card location.' },
				locationName: { type: 'string', description: 'The name of the card location.' },
				coordinates: {
					type: 'object',
					description: 'The coordinates of the card location.',
					properties: {
						latitude: {
							type: 'number',
							description: 'The latitude of the card location.',
						},
						longitude: {
							type: 'number',
							description: 'The longitude of the card location.',
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description: 'The cover settings of the card.',
					properties: {
						idAttachment: {
							type: 'string',
							description: 'The ID of the attachment used as the cover.',
						},
						color: { type: 'string', description: 'The color of the cover.' },
						idUploadedBackground: {
							type: 'string',
							description: 'The ID of the uploaded background used as the cover.',
						},
						size: {
							type: 'string',
							description: 'The size of the cover: `normal` or `full`.',
						},
						brightness: {
							type: 'string',
							description: 'The brightness of the cover: `dark` or `light`.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the cover is from a template.',
						},
					},
					required: [],
				},
				cardRole: {
					type: 'string',
					description:
						'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
				},
				creationMethod: { type: 'string', description: 'How the card was created.' },
				mirrorSourceId: {
					type: 'string',
					description: 'The ID of the source card, for mirror cards.',
				},
				isTemplate: { type: 'boolean', description: 'Whether the card is a template.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the card.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perCard: {
									type: 'object',
									description: 'The limit of attachments per card.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				members: {
					type: 'array',
					description:
						'The members assigned to the card. Returned when card members are requested.',
					items: {
						type: 'object',
						description: 'A member assigned to the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				attachments: {
					type: 'array',
					description:
						'The attachments on the card. Returned when card attachments are requested.',
					items: {
						type: 'object',
						description: 'An attachment on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the attachment.' },
							bytes: {
								type: 'number',
								description: 'The size of the attachment in bytes.',
							},
							date: { type: 'string', description: 'When the attachment was added.' },
							edgeColor: {
								type: 'string',
								description: 'The extracted edge color, for image attachments.',
							},
							idMember: {
								type: 'string',
								description: 'The ID of the member who added the attachment.',
							},
							isUpload: {
								type: 'boolean',
								description: 'Whether the attachment was uploaded.',
							},
							mimeType: {
								type: 'string',
								description: 'The MIME type of the attachment.',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							pos: {
								type: 'number',
								description:
									'The position of the attachment in the attachments list.',
							},
							previews: {
								type: 'array',
								description:
									'Generated previews of an image attachment in various sizes.',
								items: {
									type: 'object',
									description: 'A generated preview of the image.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the preview.',
										},
										scaled: {
											type: 'boolean',
											description: 'Whether the preview is scaled.',
										},
										url: {
											type: 'string',
											description: 'The URL of the preview.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the preview in bytes.',
										},
										height: {
											type: 'number',
											description: 'The height of the preview in pixels.',
										},
										width: {
											type: 'number',
											description: 'The width of the preview in pixels.',
										},
									},
									required: [],
								},
							},
							url: { type: 'string', description: 'The URL of the attachment.' },
							fileName: {
								type: 'string',
								description: 'The file name of the attachment.',
							},
						},
						required: [],
					},
				},
				stickers: {
					type: 'array',
					description:
						'The stickers on the card. Returned when card stickers are requested.',
					items: {
						type: 'object',
						description: 'A sticker on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the sticker.' },
							top: {
								type: 'number',
								description: 'The top position of the sticker on the card.',
							},
							left: {
								type: 'number',
								description: 'The left position of the sticker on the card.',
							},
							zIndex: {
								type: 'number',
								description: 'The z-index of the sticker on the card.',
							},
							rotate: {
								type: 'number',
								description: 'The rotation of the sticker in degrees.',
							},
							image: { type: 'string', description: 'The ID of the sticker image.' },
							imageUrl: {
								type: 'string',
								description: 'The URL of the sticker image.',
							},
							imageScaled: {
								type: 'array',
								description: 'Scaled versions of the sticker image.',
								items: {
									type: 'object',
									description: 'A scaled version of the sticker image.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
						},
						required: [],
					},
				},
				customFieldItems: {
					type: 'array',
					description:
						'The custom field values on the card. Returned when card custom field items are requested.',
					items: {
						type: 'object',
						description: 'A custom field value set on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the custom field item.' },
							idCustomField: {
								type: 'string',
								description: 'The ID of the custom field definition.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the card the value is set on.',
							},
							modelType: {
								type: 'string',
								description: 'The type of the model the value is set on: `card`.',
							},
							idValue: {
								type: 'string',
								description:
									'The ID of the selected option, for dropdown custom fields.',
							},
							value: {
								type: 'object',
								description: 'The value of the custom field, keyed by type.',
								properties: {
									text: {
										type: 'string',
										description: 'The value of a text custom field.',
									},
									number: {
										type: 'string',
										description:
											'The value of a number custom field, as a string.',
									},
									date: {
										type: 'string',
										description: 'The value of a date custom field.',
									},
									checked: {
										type: 'string',
										description:
											'The value of a checkbox custom field: `true` or `false`, as a string.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pluginData: {
					type: 'array',
					description:
						'The Power-Up data on the card. Returned when card plugin data is requested.',
					items: {
						type: 'object',
						description: 'Data stored by a Power-Up.',
						properties: {
							id: { type: 'string', description: 'The ID of the plugin data.' },
							idPlugin: { type: 'string', description: 'The ID of the Power-Up.' },
							scope: {
								type: 'string',
								description:
									'The scope of the data: `board`, `card`, `member`, or `organization`.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the model the data is stored on.',
							},
							value: {
								type: 'string',
								description: 'The stored data, as a JSON string.',
							},
							access: {
								type: 'string',
								description: 'The access level of the data: `private` or `shared`.',
							},
						},
						required: [],
					},
				},
				membersVoted: {
					type: 'array',
					description:
						'The members who voted on the card. Returned when members voted are requested.',
					items: {
						type: 'object',
						description: 'A member who voted on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				checklists: {
					type: 'array',
					description:
						'The checklists on the card. Returned when checklists are requested.',
					items: {
						type: 'object',
						description: 'A checklist on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the checklist.' },
							name: { type: 'string', description: 'The name of the checklist.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the board the checklist is on.',
							},
							idCard: {
								type: 'string',
								description: 'The ID of the card the checklist is on.',
							},
							pos: {
								type: 'number',
								description: 'The position of the checklist on the card.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the checklist.',
								properties: {
									checkItems: {
										type: 'object',
										description: 'Checklist item limits.',
										properties: {
											perChecklist: {
												type: 'object',
												description: 'The limit of items per checklist.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							creationMethod: {
								type: 'string',
								description: 'How the checklist was created.',
							},
							checkItems: {
								type: 'array',
								description: 'The items of the checklist.',
								items: {
									type: 'object',
									description: 'An item of the checklist.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the checklist item.',
										},
										idChecklist: {
											type: 'string',
											description:
												'The ID of the checklist the item belongs to.',
										},
										name: {
											type: 'string',
											description: 'The name of the checklist item.',
										},
										nameData: {
											type: 'object',
											description:
												'Data needed to display custom emoji used in the name, if any.',
											properties: {
												emoji: {
													type: 'object',
													description:
														'Custom emoji used in the text, keyed by emoji name.',
													properties: {},
													required: [],
													additionalProperties: true,
												},
											},
											required: [],
										},
										state: {
											type: 'string',
											description:
												'The state of the item: `complete` or `incomplete`.',
										},
										pos: {
											type: 'number',
											description:
												'The position of the item in the checklist.',
										},
										due: {
											type: 'string',
											description: 'The due date of the item.',
										},
										dueReminder: {
											type: 'number',
											description:
												'The number of minutes before the due date when a reminder is sent.',
										},
										idMember: {
											type: 'string',
											description:
												'The ID of the member assigned to the item.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				board: {
					type: 'object',
					description: 'The board the card is on. Returned when the board is requested.',
					properties: {
						id: { type: 'string', description: 'The ID of the board.' },
						name: { type: 'string', description: 'The name of the board.' },
						desc: { type: 'string', description: 'The description of the board.' },
						descData: {
							type: 'object',
							description:
								'Data needed to display custom emoji used in the description, if any.',
							properties: {
								emoji: {
									type: 'object',
									description:
										'Custom emoji used in the text, keyed by emoji name.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							required: [],
						},
						closed: {
							type: 'boolean',
							description: 'Whether the board is closed (archived).',
						},
						idMemberCreator: {
							type: 'string',
							description: 'The ID of the member who created the board.',
						},
						idOrganization: {
							type: 'string',
							description: 'The ID of the Workspace the board belongs to.',
						},
						pinned: { type: 'boolean', description: 'Whether the board is pinned.' },
						url: { type: 'string', description: 'The persistent URL of the board.' },
						shortUrl: {
							type: 'string',
							description: 'The URL of the board using only its short ID.',
						},
						shortLink: {
							type: 'string',
							description: 'The 8-character short ID of the board.',
						},
						prefs: {
							type: 'object',
							description: 'The settings of the board.',
							properties: {
								permissionLevel: {
									type: 'string',
									description:
										'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
								},
								hideVotes: {
									type: 'boolean',
									description:
										'Whether the Voting Power-Up hides who voted on cards.',
								},
								voting: {
									type: 'string',
									description:
										'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
								},
								comments: {
									type: 'string',
									description:
										'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
								},
								invitations: {
									type: 'string',
									description:
										'Who can invite people to the board: `admins` or `members`.',
								},
								selfJoin: {
									type: 'boolean',
									description:
										'Whether Workspace members can join the board themselves.',
								},
								cardCovers: {
									type: 'boolean',
									description: 'Whether card covers are displayed.',
								},
								isTemplate: {
									type: 'boolean',
									description: 'Whether the board is a template.',
								},
								cardAging: {
									type: 'string',
									description: 'The card aging mode: `pirate` or `regular`.',
								},
								calendarFeedEnabled: {
									type: 'boolean',
									description: 'Whether the calendar feed is enabled.',
								},
								background: {
									type: 'string',
									description:
										'The ID of a custom background or the name of a background color.',
								},
								backgroundColor: {
									type: 'string',
									description:
										'The hex color of the background, if a color is used.',
								},
								backgroundImage: {
									type: 'string',
									description:
										'The URL of the background image, if an image is used.',
								},
								backgroundImageScaled: {
									type: 'array',
									description: 'Scaled versions of the background image.',
									items: {
										type: 'object',
										description: 'A scaled version of the background image.',
										properties: {
											width: {
												type: 'number',
												description: 'The width of the image in pixels.',
											},
											height: {
												type: 'number',
												description: 'The height of the image in pixels.',
											},
											url: {
												type: 'string',
												description: 'The URL of the scaled image.',
											},
										},
										required: [],
									},
								},
								backgroundTile: {
									type: 'boolean',
									description: 'Whether the background image is tiled.',
								},
								backgroundBrightness: {
									type: 'string',
									description:
										'The brightness of the background: `dark` or `light`.',
								},
								backgroundBottomColor: {
									type: 'string',
									description: 'The hex color at the bottom of the background.',
								},
								backgroundTopColor: {
									type: 'string',
									description: 'The hex color at the top of the background.',
								},
								canBePublic: {
									type: 'boolean',
									description: 'Whether the board can be made public.',
								},
								canBeEnterprise: {
									type: 'boolean',
									description:
										'Whether the board can be made visible to the Enterprise.',
								},
								canBeOrg: {
									type: 'boolean',
									description:
										'Whether the board can be made visible to the Workspace.',
								},
								canBePrivate: {
									type: 'boolean',
									description: 'Whether the board can be made private.',
								},
								canInvite: {
									type: 'boolean',
									description:
										'Whether the current member can invite people to the board.',
								},
							},
							required: [],
						},
						labelNames: {
							type: 'object',
							description: 'The label names of the board, keyed by label color.',
							properties: {
								green: {
									type: 'string',
									description: 'The name of the green label.',
								},
								yellow: {
									type: 'string',
									description: 'The name of the yellow label.',
								},
								orange: {
									type: 'string',
									description: 'The name of the orange label.',
								},
								red: { type: 'string', description: 'The name of the red label.' },
								purple: {
									type: 'string',
									description: 'The name of the purple label.',
								},
								blue: {
									type: 'string',
									description: 'The name of the blue label.',
								},
								sky: { type: 'string', description: 'The name of the sky label.' },
								lime: {
									type: 'string',
									description: 'The name of the lime label.',
								},
								pink: {
									type: 'string',
									description: 'The name of the pink label.',
								},
								black: {
									type: 'string',
									description: 'The name of the black label.',
								},
							},
							required: [],
						},
						limits: {
							type: 'object',
							description: 'The limits that apply to the board.',
							properties: {
								attachments: {
									type: 'object',
									description: 'Attachment limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of attachments per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								boards: {
									type: 'object',
									description: 'Board limits.',
									properties: {
										totalMembersPerBoard: {
											type: 'object',
											description: 'The limit of members per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								cards: {
									type: 'object',
									description: 'Card limits.',
									properties: {
										openPerBoard: {
											type: 'object',
											description: 'The limit of open cards per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
										totalPerBoard: {
											type: 'object',
											description: 'The limit of all cards per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								checklists: {
									type: 'object',
									description: 'Checklist limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of checklists per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								customFields: {
									type: 'object',
									description: 'Custom field limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of custom fields per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								labels: {
									type: 'object',
									description: 'Label limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of labels per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								lists: {
									type: 'object',
									description: 'List limits.',
									properties: {
										openPerBoard: {
											type: 'object',
											description: 'The limit of open lists per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
										totalPerBoard: {
											type: 'object',
											description: 'The limit of all lists per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
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
						starred: {
							type: 'boolean',
							description: 'Whether the board is starred by the current member.',
						},
						memberships: {
							type: 'array',
							description: 'The relationships of members to the board.',
							items: {
								type: 'object',
								description: 'The relationship of a member to the board.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the membership.',
									},
									idMember: {
										type: 'string',
										description: 'The ID of the member.',
									},
									memberType: {
										type: 'string',
										description:
											'The role of the member on the board: `admin`, `normal`, or `observer`.',
									},
									unconfirmed: {
										type: 'boolean',
										description:
											'Whether the member has not yet confirmed their account.',
									},
									deactivated: {
										type: 'boolean',
										description: 'Whether the member is deactivated.',
									},
								},
								required: [],
							},
						},
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the board.',
						},
						invited: {
							type: 'boolean',
							description: 'Whether the current member is invited to the board.',
						},
						invitations: {
							type: 'array',
							description: 'Pending invitations to the board.',
							items: {
								type: 'object',
								description: 'A pending invitation to the board.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						powerUps: {
							type: 'array',
							description: 'The Power-Ups enabled on the board.',
							items: {
								type: 'string',
								description: 'The name of a Power-Up enabled on the board.',
							},
						},
						dateLastActivity: {
							type: 'string',
							description: 'When the last activity on the board occurred.',
						},
						dateLastView: {
							type: 'string',
							description: 'When the current member last viewed the board.',
						},
						idTags: {
							type: 'array',
							description: 'The IDs of the collections (tags) the board belongs to.',
							items: {
								type: 'string',
								description: 'The ID of a collection the board belongs to.',
							},
						},
						datePluginDisable: {
							type: 'string',
							description: 'When Power-Ups were disabled on the board, if ever.',
						},
						creationMethod: {
							type: 'string',
							description: 'How the board was created.',
						},
						ixUpdate: {
							type: 'string',
							description: 'An internal update counter of the board.',
						},
						templateGallery: {
							type: 'string',
							description: 'The template gallery the board is published in, if any.',
						},
						enterpriseOwned: {
							type: 'boolean',
							description: 'Whether the board is owned by an Enterprise.',
						},
					},
					required: [],
				},
				list: {
					type: 'object',
					description: 'The list the card is in. Returned when the list is requested.',
					properties: {
						id: { type: 'string', description: 'The ID of the list.' },
						name: { type: 'string', description: 'The name of the list.' },
						closed: {
							type: 'boolean',
							description: 'Whether the list is closed (archived).',
						},
						idBoard: {
							type: 'string',
							description: 'The ID of the board the list is on.',
						},
						pos: {
							type: 'number',
							description: 'The position of the list on the board.',
						},
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the list.',
						},
						softLimit: {
							type: 'number',
							description: 'The soft limit of cards in the list, if set.',
						},
						creationMethod: {
							type: 'string',
							description: 'How the list was created.',
						},
						limits: {
							type: 'object',
							description: 'The limits that apply to the list.',
							properties: {
								cards: {
									type: 'object',
									description: 'Card limits of the list.',
									properties: {
										openPerList: {
											type: 'object',
											description: 'The limit of open cards per list.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
										totalPerList: {
											type: 'object',
											description: 'The limit of all cards per list.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
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
					required: [],
				},
				actions: {
					type: 'array',
					description: 'The actions on the card. Returned when actions are requested.',
					items: {
						type: 'object',
						description: 'An action on the card.',
						properties: {
							id: { type: 'string', description: 'The ID of the action.' },
							idMemberCreator: {
								type: 'string',
								description: 'The ID of the member who caused the action.',
							},
							data: {
								type: 'object',
								description:
									'Relevant information about the action. The available keys depend on the action type.',
								properties: {
									text: {
										type: 'string',
										description:
											'The text of the comment, for comment actions.',
									},
									card: {
										type: 'object',
										description: 'The card the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the card.',
											},
											name: {
												type: 'string',
												description: 'The name of the card.',
											},
											idShort: {
												type: 'number',
												description:
													'The numeric ID of the card, unique within the board.',
											},
											shortLink: {
												type: 'string',
												description:
													'The 8-character short ID of the card.',
											},
											idList: {
												type: 'string',
												description: 'The ID of the list the card is in.',
											},
											closed: {
												type: 'boolean',
												description: 'Whether the card is archived.',
											},
											desc: {
												type: 'string',
												description: 'The description of the card.',
											},
											due: {
												type: 'string',
												description: 'The due date of the card.',
											},
											pos: {
												type: 'number',
												description:
													'The position of the card in the list.',
											},
										},
										required: [],
									},
									board: {
										type: 'object',
										description: 'The board the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the board.',
											},
											name: {
												type: 'string',
												description: 'The name of the board.',
											},
											shortLink: {
												type: 'string',
												description:
													'The 8-character short ID of the board.',
											},
										},
										required: [],
									},
									list: {
										type: 'object',
										description: 'The list the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									listBefore: {
										type: 'object',
										description:
											'The list the card was in before it was moved, for `updateCard:idList` actions.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									listAfter: {
										type: 'object',
										description:
											'The list the card was moved to, for `updateCard:idList` actions.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									old: {
										type: 'object',
										description:
											'The previous values of the fields changed by an update action.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							type: {
								type: 'string',
								description:
									'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
							},
							date: { type: 'string', description: 'When the action occurred.' },
							limits: {
								type: 'object',
								description: 'The limits that apply to the action.',
								properties: {
									reactions: {
										type: 'object',
										description: 'The reaction limits of the action.',
										properties: {
											perAction: {
												type: 'object',
												description: 'The limit of reactions per action.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
											uniquePerAction: {
												type: 'object',
												description:
													'The limit of unique reactions per action.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							display: {
								type: 'object',
								description:
									'Information to render the action in a UI. Returned when display is requested.',
								properties: {
									translationKey: {
										type: 'string',
										description:
											'The translation key of the action description.',
									},
									entities: {
										type: 'object',
										description:
											'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							memberCreator: {
								type: 'object',
								description: 'The member who caused the action.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the member who caused the action.',
									},
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member who caused the action is blocked.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the avatar of the member who caused the action.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the avatar of the member who caused the action.',
									},
									fullName: {
										type: 'string',
										description:
											'The full name of the member who caused the action.',
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member who caused the action to Trello.',
									},
									initials: {
										type: 'string',
										description:
											'The initials of the member who caused the action.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									username: {
										type: 'string',
										description:
											'The username of the member who caused the action.',
									},
								},
								required: [],
							},
							member: {
								type: 'object',
								description:
									'The member the action relates to, for member-related actions.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member is blocked.',
									},
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member to Trello.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getACardChecklists',
		label: 'Get card checklists',
		description: 'Lists the checklists on a card.',
		context:
			'---\nname: getACardChecklists\ndescription: Lists the checklists on a card.\n---\n\nLists the checklists on a Trello card via `GET /cards/{id}/checklists` and returns them as an array of checklist objects.\n\n- Each checklist contains its items in `checkItems` unless `checkItems` is set to `none`.\n- Use the item IDs from `checkItems` with `editAChecklistItem`.\n\nAPI reference: [Get Checklists on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-checklists-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the card.' },
				filter: {
					type: 'string',
					description: 'Which checklists to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'none'],
				},
				fields: {
					type: 'string',
					description: 'The checklist fields to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'idBoard', 'idCard', 'name', 'pos'],
				},
				checkItems: {
					type: 'string',
					description: 'Whether to return the items of each checklist. Default: `all`.',
					default: '',
					enum: ['', 'all', 'none'],
				},
				checkItem_fields: {
					type: 'string',
					description:
						'The fields of the checklist items to return when checklist items are requested. Default: `name`, `nameData`, `pos`, `state`, `due`, `dueReminder`, `idMember`.',
					default: '',
					enum: [
						'',
						'all',
						'name',
						'nameData',
						'pos',
						'state',
						'type',
						'due',
						'dueReminder',
						'idMember',
					],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist.' },
				name: { type: 'string', description: 'The name of the checklist.' },
				idBoard: {
					type: 'string',
					description: 'The ID of the board the checklist is on.',
				},
				idCard: { type: 'string', description: 'The ID of the card the checklist is on.' },
				pos: { type: 'number', description: 'The position of the checklist on the card.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the checklist.',
					properties: {
						checkItems: {
							type: 'object',
							description: 'Checklist item limits.',
							properties: {
								perChecklist: {
									type: 'object',
									description: 'The limit of items per checklist.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				creationMethod: { type: 'string', description: 'How the checklist was created.' },
				checkItems: {
					type: 'array',
					description: 'The items of the checklist.',
					items: {
						type: 'object',
						description: 'An item of the checklist.',
						properties: {
							id: { type: 'string', description: 'The ID of the checklist item.' },
							idChecklist: {
								type: 'string',
								description: 'The ID of the checklist the item belongs to.',
							},
							name: {
								type: 'string',
								description: 'The name of the checklist item.',
							},
							nameData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the name, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							state: {
								type: 'string',
								description: 'The state of the item: `complete` or `incomplete`.',
							},
							pos: {
								type: 'number',
								description: 'The position of the item in the checklist.',
							},
							due: { type: 'string', description: 'The due date of the item.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							idMember: {
								type: 'string',
								description: 'The ID of the member assigned to the item.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getAChecklist',
		label: 'Get a checklist',
		description: 'Returns a checklist, optionally with its items and card.',
		context:
			'---\nname: getAChecklist\ndescription: Returns a checklist, optionally with its items and card.\n---\n\nReturns a Trello checklist via `GET /checklists/{id}`.\n\n- The checklist items are in `checkItems` unless `checkItems` is set to `none`. Use `checkItem_fields` to limit their fields.\n- Set `cards` to include the card the checklist is on in a `cards` array.\n- To list every checklist on a card instead, use `getACardChecklists`.\n\nAPI reference: [Get a Checklist](https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/#api-checklists-id-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the checklist.' },
				fields: {
					type: 'string',
					description: 'The checklist fields to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'idBoard', 'idCard', 'name', 'pos'],
				},
				cards: {
					type: 'string',
					description: 'Which cards of the checklist to return. Default: `none`.',
					default: '',
					enum: ['', 'all', 'closed', 'none', 'open', 'visible'],
				},
				checkItems: {
					type: 'string',
					description: 'Whether to return the items of the checklist. Default: `all`.',
					default: '',
					enum: ['', 'all', 'none'],
				},
				checkItem_fields: {
					type: 'string',
					description:
						'The fields of the checklist items to return when checklist items are requested. Default: `name`, `nameData`, `pos`, `state`, `due`, `dueReminder`, `idMember`.',
					default: '',
					enum: [
						'',
						'all',
						'name',
						'nameData',
						'pos',
						'state',
						'type',
						'due',
						'dueReminder',
						'idMember',
					],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist.' },
				name: { type: 'string', description: 'The name of the checklist.' },
				idBoard: {
					type: 'string',
					description: 'The ID of the board the checklist is on.',
				},
				idCard: { type: 'string', description: 'The ID of the card the checklist is on.' },
				pos: { type: 'number', description: 'The position of the checklist on the card.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the checklist.',
					properties: {
						checkItems: {
							type: 'object',
							description: 'Checklist item limits.',
							properties: {
								perChecklist: {
									type: 'object',
									description: 'The limit of items per checklist.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				creationMethod: { type: 'string', description: 'How the checklist was created.' },
				checkItems: {
					type: 'array',
					description: 'The items of the checklist.',
					items: {
						type: 'object',
						description: 'An item of the checklist.',
						properties: {
							id: { type: 'string', description: 'The ID of the checklist item.' },
							idChecklist: {
								type: 'string',
								description: 'The ID of the checklist the item belongs to.',
							},
							name: {
								type: 'string',
								description: 'The name of the checklist item.',
							},
							nameData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the name, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							state: {
								type: 'string',
								description: 'The state of the item: `complete` or `incomplete`.',
							},
							pos: {
								type: 'number',
								description: 'The position of the item in the checklist.',
							},
							due: { type: 'string', description: 'The due date of the item.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							idMember: {
								type: 'string',
								description: 'The ID of the member assigned to the item.',
							},
						},
						required: [],
					},
				},
				cards: {
					type: 'array',
					description: 'The card the checklist is on. Returned when cards are requested.',
					items: {
						type: 'object',
						description: 'A card the checklist is on.',
						properties: {
							id: { type: 'string', description: 'The ID of the card.' },
							badges: {
								type: 'object',
								description: 'Information displayed on the front of the card.',
								properties: {
									votes: {
										type: 'number',
										description: 'The number of votes on the card.',
									},
									viewingMemberVoted: {
										type: 'boolean',
										description:
											'Whether the current member voted on the card.',
									},
									subscribed: {
										type: 'boolean',
										description:
											'Whether the current member is subscribed to the card.',
									},
									fogbugz: {
										type: 'string',
										description: 'The FogBugz case linked to the card, if any.',
									},
									checkItems: {
										type: 'number',
										description: 'The number of checklist items on the card.',
									},
									checkItemsChecked: {
										type: 'number',
										description:
											'The number of completed checklist items on the card.',
									},
									comments: {
										type: 'number',
										description: 'The number of comments on the card.',
									},
									attachments: {
										type: 'number',
										description: 'The number of attachments on the card.',
									},
									description: {
										type: 'boolean',
										description: 'Whether the card has a description.',
									},
									due: {
										type: 'string',
										description: 'The due date of the card.',
									},
									dueComplete: {
										type: 'boolean',
										description:
											'Whether the due date of the card is marked complete.',
									},
									start: {
										type: 'string',
										description: 'The start date of the card.',
									},
									location: {
										type: 'boolean',
										description: 'Whether the card has a location.',
									},
									attachmentsByType: {
										type: 'object',
										description:
											'The number of attachments on the card by type.',
										properties: {
											trello: {
												type: 'object',
												description:
													'The number of attachments linking to Trello objects.',
												properties: {
													board: {
														type: 'number',
														description:
															'The number of attachments linking to Trello boards.',
													},
													card: {
														type: 'number',
														description:
															'The number of attachments linking to Trello cards.',
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
							checkItemStates: {
								type: 'array',
								description: 'The states of the checklist items on the card.',
								items: {
									type: 'object',
									description: 'The state of a checklist item.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							closed: {
								type: 'boolean',
								description: 'Whether the card is closed (archived).',
							},
							dueComplete: {
								type: 'boolean',
								description: 'Whether the due date of the card is marked complete.',
							},
							dateLastActivity: {
								type: 'string',
								description: 'When the last activity on the card occurred.',
							},
							desc: { type: 'string', description: 'The description of the card.' },
							descData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the description, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							due: { type: 'string', description: 'The due date of the card.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							email: {
								type: 'string',
								description: 'The email address of the card, if any.',
							},
							idBoard: {
								type: 'string',
								description: 'The ID of the board the card is on.',
							},
							idChecklists: {
								type: 'array',
								description: 'The IDs of the checklists on the card.',
								items: {
									type: 'string',
									description: 'The ID of a checklist on the card.',
								},
							},
							idList: {
								type: 'string',
								description: 'The ID of the list the card is in.',
							},
							idMembers: {
								type: 'array',
								description: 'The IDs of the members assigned to the card.',
								items: {
									type: 'string',
									description: 'The ID of a member assigned to the card.',
								},
							},
							idMembersVoted: {
								type: 'array',
								description: 'The IDs of the members who voted on the card.',
								items: {
									type: 'string',
									description: 'The ID of a member who voted on the card.',
								},
							},
							idShort: {
								type: 'number',
								description: 'The numeric ID of the card, unique within the board.',
							},
							idAttachmentCover: {
								type: 'string',
								description:
									'The ID of the attachment used as the card cover, if any.',
							},
							manualCoverAttachment: {
								type: 'boolean',
								description:
									'Whether the card cover was selected manually by the user.',
							},
							labels: {
								type: 'array',
								description: 'The labels on the card.',
								items: {
									type: 'object',
									description: 'A label on the card.',
									properties: {
										id: { type: 'string', description: 'The ID of the label.' },
										idBoard: {
											type: 'string',
											description: 'The ID of the board the label is on.',
										},
										name: {
											type: 'string',
											description: 'The name displayed for the label.',
										},
										color: {
											type: 'string',
											description:
												'The color of the label. Empty means no color and the label is not shown on the front of cards.',
										},
										uses: {
											type: 'number',
											description:
												'The number of cards the label is used on.',
										},
									},
									required: [],
								},
							},
							idLabels: {
								type: 'array',
								description: 'The IDs of the labels on the card.',
								items: {
									type: 'string',
									description: 'The ID of a label on the card.',
								},
							},
							name: { type: 'string', description: 'The name of the card.' },
							pos: {
								type: 'number',
								description: 'The position of the card in the list.',
							},
							shortLink: {
								type: 'string',
								description: 'The 8-character short ID of the card.',
							},
							shortUrl: {
								type: 'string',
								description: 'The URL of the card without the name slug.',
							},
							start: { type: 'string', description: 'The start date of the card.' },
							subscribed: {
								type: 'boolean',
								description:
									'Whether the current member is subscribed to the card.',
							},
							url: { type: 'string', description: 'The full URL of the card.' },
							address: {
								type: 'string',
								description: 'The address of the card location.',
							},
							locationName: {
								type: 'string',
								description: 'The name of the card location.',
							},
							coordinates: {
								type: 'object',
								description: 'The coordinates of the card location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the card location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the card location.',
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description: 'The cover settings of the card.',
								properties: {
									idAttachment: {
										type: 'string',
										description: 'The ID of the attachment used as the cover.',
									},
									color: {
										type: 'string',
										description: 'The color of the cover.',
									},
									idUploadedBackground: {
										type: 'string',
										description:
											'The ID of the uploaded background used as the cover.',
									},
									size: {
										type: 'string',
										description: 'The size of the cover: `normal` or `full`.',
									},
									brightness: {
										type: 'string',
										description:
											'The brightness of the cover: `dark` or `light`.',
									},
									isTemplate: {
										type: 'boolean',
										description: 'Whether the cover is from a template.',
									},
								},
								required: [],
							},
							cardRole: {
								type: 'string',
								description:
									'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
							},
							creationMethod: {
								type: 'string',
								description: 'How the card was created.',
							},
							mirrorSourceId: {
								type: 'string',
								description: 'The ID of the source card, for mirror cards.',
							},
							isTemplate: {
								type: 'boolean',
								description: 'Whether the card is a template.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the card.',
								properties: {
									attachments: {
										type: 'object',
										description: 'Attachment limits.',
										properties: {
											perCard: {
												type: 'object',
												description: 'The limit of attachments per card.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							members: {
								type: 'array',
								description:
									'The members assigned to the card. Returned when card members are requested.',
								items: {
									type: 'object',
									description: 'A member assigned to the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the member.',
										},
										activityBlocked: {
											type: 'boolean',
											description:
												'Whether the activity of the member is blocked.',
										},
										avatarHash: {
											type: 'string',
											description: 'The hash of the avatar of the member.',
										},
										avatarUrl: {
											type: 'string',
											description: 'The URL of the avatar of the member.',
										},
										bio: {
											type: 'string',
											description: 'The bio of the member.',
										},
										confirmed: {
											type: 'boolean',
											description:
												'Whether the member has confirmed their email address.',
										},
										fullName: {
											type: 'string',
											description: 'The full name of the member.',
										},
										idEnterprisesDeactivated: {
											type: 'array',
											description:
												'The IDs of Enterprises the member is deactivated in.',
											items: {
												type: 'string',
												description:
													'The ID of an Enterprise the member is deactivated in.',
											},
										},
										idMemberReferrer: {
											type: 'string',
											description:
												'The ID of the member who referred the member to Trello.',
										},
										idPremOrgsAdmin: {
											type: 'array',
											description:
												'The IDs of premium Workspaces the member administers.',
											items: {
												type: 'string',
												description:
													'The ID of a premium Workspace the member administers.',
											},
										},
										initials: {
											type: 'string',
											description: 'The initials of the member.',
										},
										memberType: {
											type: 'string',
											description:
												'The type of the member account: `normal` or `ghost`.',
										},
										nonPublic: {
											type: 'object',
											description:
												'Profile data with restricted visibility, visible only to members of the same Workspace.',
											properties: {
												fullName: {
													type: 'string',
													description:
														'The non-public full name of the member.',
												},
												initials: {
													type: 'string',
													description:
														'The non-public initials of the member.',
												},
												avatarUrl: {
													type: 'string',
													description:
														'The URL of the non-public avatar of the member.',
												},
												avatarHash: {
													type: 'string',
													description:
														'The hash of the non-public avatar of the member.',
												},
											},
											required: [],
										},
										nonPublicAvailable: {
											type: 'boolean',
											description:
												'Whether the response contains non-public profile data for the member.',
										},
										products: {
											type: 'array',
											description: 'The Trello products of the member.',
											items: {
												type: 'number',
												description:
													'The code of a Trello product of the member.',
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the member profile.',
										},
										username: {
											type: 'string',
											description: 'The username of the member.',
										},
										status: {
											type: 'string',
											description: 'The online status of the member.',
										},
									},
									required: [],
								},
							},
							attachments: {
								type: 'array',
								description:
									'The attachments on the card. Returned when card attachments are requested.',
								items: {
									type: 'object',
									description: 'An attachment on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the attachment.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the attachment in bytes.',
										},
										date: {
											type: 'string',
											description: 'When the attachment was added.',
										},
										edgeColor: {
											type: 'string',
											description:
												'The extracted edge color, for image attachments.',
										},
										idMember: {
											type: 'string',
											description:
												'The ID of the member who added the attachment.',
										},
										isUpload: {
											type: 'boolean',
											description: 'Whether the attachment was uploaded.',
										},
										mimeType: {
											type: 'string',
											description: 'The MIME type of the attachment.',
										},
										name: {
											type: 'string',
											description: 'The name of the attachment.',
										},
										pos: {
											type: 'number',
											description:
												'The position of the attachment in the attachments list.',
										},
										previews: {
											type: 'array',
											description:
												'Generated previews of an image attachment in various sizes.',
											items: {
												type: 'object',
												description: 'A generated preview of the image.',
												properties: {
													id: {
														type: 'string',
														description: 'The ID of the preview.',
													},
													scaled: {
														type: 'boolean',
														description:
															'Whether the preview is scaled.',
													},
													url: {
														type: 'string',
														description: 'The URL of the preview.',
													},
													bytes: {
														type: 'number',
														description:
															'The size of the preview in bytes.',
													},
													height: {
														type: 'number',
														description:
															'The height of the preview in pixels.',
													},
													width: {
														type: 'number',
														description:
															'The width of the preview in pixels.',
													},
												},
												required: [],
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the attachment.',
										},
										fileName: {
											type: 'string',
											description: 'The file name of the attachment.',
										},
									},
									required: [],
								},
							},
							stickers: {
								type: 'array',
								description:
									'The stickers on the card. Returned when card stickers are requested.',
								items: {
									type: 'object',
									description: 'A sticker on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the sticker.',
										},
										top: {
											type: 'number',
											description:
												'The top position of the sticker on the card.',
										},
										left: {
											type: 'number',
											description:
												'The left position of the sticker on the card.',
										},
										zIndex: {
											type: 'number',
											description: 'The z-index of the sticker on the card.',
										},
										rotate: {
											type: 'number',
											description: 'The rotation of the sticker in degrees.',
										},
										image: {
											type: 'string',
											description: 'The ID of the sticker image.',
										},
										imageUrl: {
											type: 'string',
											description: 'The URL of the sticker image.',
										},
										imageScaled: {
											type: 'array',
											description: 'Scaled versions of the sticker image.',
											items: {
												type: 'object',
												description:
													'A scaled version of the sticker image.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
									},
									required: [],
								},
							},
							customFieldItems: {
								type: 'array',
								description:
									'The custom field values on the card. Returned when card custom field items are requested.',
								items: {
									type: 'object',
									description: 'A custom field value set on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the custom field item.',
										},
										idCustomField: {
											type: 'string',
											description: 'The ID of the custom field definition.',
										},
										idModel: {
											type: 'string',
											description: 'The ID of the card the value is set on.',
										},
										modelType: {
											type: 'string',
											description:
												'The type of the model the value is set on: `card`.',
										},
										idValue: {
											type: 'string',
											description:
												'The ID of the selected option, for dropdown custom fields.',
										},
										value: {
											type: 'object',
											description:
												'The value of the custom field, keyed by type.',
											properties: {
												text: {
													type: 'string',
													description:
														'The value of a text custom field.',
												},
												number: {
													type: 'string',
													description:
														'The value of a number custom field, as a string.',
												},
												date: {
													type: 'string',
													description:
														'The value of a date custom field.',
												},
												checked: {
													type: 'string',
													description:
														'The value of a checkbox custom field: `true` or `false`, as a string.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							pluginData: {
								type: 'array',
								description:
									'The Power-Up data on the card. Returned when card plugin data is requested.',
								items: {
									type: 'object',
									description: 'Data stored by a Power-Up.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the plugin data.',
										},
										idPlugin: {
											type: 'string',
											description: 'The ID of the Power-Up.',
										},
										scope: {
											type: 'string',
											description:
												'The scope of the data: `board`, `card`, `member`, or `organization`.',
										},
										idModel: {
											type: 'string',
											description:
												'The ID of the model the data is stored on.',
										},
										value: {
											type: 'string',
											description: 'The stored data, as a JSON string.',
										},
										access: {
											type: 'string',
											description:
												'The access level of the data: `private` or `shared`.',
										},
									},
									required: [],
								},
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getACustomField',
		label: 'Get a custom field',
		description: 'Returns a custom field definition.',
		context:
			'---\nname: getACustomField\ndescription: Returns a custom field definition.\n---\n\nReturns one Trello custom field definition via `GET /customFields/{id}`.\n\n- This returns the definition of the field (name, type, options), not the values set on cards. Read card values with `getACard` (`customFieldItems` = `true`).\n- Find custom field IDs with `getBoard` (`customFields` = `true`).\n- For a `list` (dropdown) field, the options are in `options`. `getCustomFieldOptions` returns the same options on their own.\n\nAPI reference: [Get a Custom Field](https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/#api-customfields-id-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description:
						'The ID of the custom field. Find it with `getBoard` (`customFields` = `true`).',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the custom field.' },
				idModel: {
					type: 'string',
					description: 'The ID of the board the custom field belongs to.',
				},
				modelType: {
					type: 'string',
					description: 'The type of the model the custom field belongs to: `board`.',
				},
				fieldGroup: {
					type: 'string',
					description:
						'A hash identifying custom fields with the same definition across boards.',
				},
				display: {
					type: 'object',
					description: 'The display settings of the custom field.',
					properties: {
						cardFront: {
							type: 'boolean',
							description: 'Whether the custom field is shown on the front of cards.',
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'The name of the custom field.' },
				pos: { type: 'number', description: 'The position of the custom field.' },
				type: {
					type: 'string',
					description:
						'The type of the custom field: `checkbox`, `date`, `list`, `number`, or `text`.',
				},
				isSuggestedField: {
					type: 'boolean',
					description: 'Whether the custom field is a suggested field.',
				},
				options: {
					type: 'array',
					description: 'The options of a dropdown (`list`) custom field.',
					items: {
						type: 'object',
						description: 'An option of the dropdown custom field.',
						properties: {
							id: { type: 'string', description: 'The ID of the option.' },
							idCustomField: {
								type: 'string',
								description: 'The ID of the custom field the option belongs to.',
							},
							value: {
								type: 'object',
								description: 'The value of the option.',
								properties: {
									text: {
										type: 'string',
										description: 'The text of the option.',
									},
								},
								required: [],
							},
							color: { type: 'string', description: 'The color of the option.' },
							pos: { type: 'number', description: 'The position of the option.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getALabel',
		label: 'Get a label',
		description: 'Returns a label.',
		context:
			'---\nname: getALabel\ndescription: Returns a label.\n---\n\nReturns one Trello label via `GET /labels/{id}`.\n\n- Find label IDs with `retrieveLabels` for the board, or in `idLabels` on a card.\n- `uses` is the number of cards the label is currently on.\n\nAPI reference: [Get a Label](https://developer.atlassian.com/cloud/trello/rest/api-group-labels/#api-labels-id-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the label.' },
				fields: {
					type: 'string',
					description: 'The label fields to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'color', 'idBoard', 'name', 'uses'],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the label.' },
				idBoard: { type: 'string', description: 'The ID of the board the label is on.' },
				name: { type: 'string', description: 'The name displayed for the label.' },
				color: {
					type: 'string',
					description:
						'The color of the label. Empty means no color and the label is not shown on the front of cards.',
				},
				uses: { type: 'number', description: 'The number of cards the label is used on.' },
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getAList',
		label: 'Get a list',
		description: 'Returns a list.',
		context:
			"---\nname: getAList\ndescription: Returns a list.\n---\n\nReturns one Trello list via `GET /lists/{id}`.\n\n- Find list IDs with `getBoardLists` for the board, or in `idList` on a card.\n- Trello's own default is `name`, `closed`, `idBoard`, `pos`; this endpoint requests `all` instead so the full list object is returned.\n\nAPI reference: [Get a List](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-id-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the list.' },
				fields: {
					type: 'string',
					description: 'The list fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'name',
						'closed',
						'idBoard',
						'pos',
						'subscribed',
						'softLimit',
						'limits',
					],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the list.' },
				name: { type: 'string', description: 'The name of the list.' },
				closed: { type: 'boolean', description: 'Whether the list is closed (archived).' },
				idBoard: { type: 'string', description: 'The ID of the board the list is on.' },
				pos: { type: 'number', description: 'The position of the list on the board.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the list.',
				},
				softLimit: {
					type: 'number',
					description: 'The soft limit of cards in the list, if set.',
				},
				creationMethod: { type: 'string', description: 'How the list was created.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the list.',
					properties: {
						cards: {
							type: 'object',
							description: 'Card limits of the list.',
							properties: {
								openPerList: {
									type: 'object',
									description: 'The limit of open cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerList: {
									type: 'object',
									description: 'The limit of all cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getAnAttachment',
		label: 'Get an attachment',
		description: 'Returns an attachment on a card.',
		context:
			"---\nname: getAnAttachment\ndescription: Returns an attachment on a card.\n---\n\nReturns the metadata of one attachment on a Trello card via `GET /cards/{id}/attachments/{idAttachment}`.\n\n- Find the attachment ID with `listAttachments`.\n- `url` is the location of the attachment. For uploaded files (`isUpload` = `true`), downloading it needs the connection's authorization.\n- Downloading the attachment content is not supported by endpoints, which cannot return binary data.\n\nAPI reference: [Get an Attachment on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-attachments-idattachment-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the card.' },
				idAttachment: {
					type: 'string',
					description: 'The ID of the attachment. Find it with `listAttachments`.',
				},
				fields: {
					type: 'string',
					description: 'The attachment fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'bytes',
						'date',
						'edgeColor',
						'idMember',
						'isUpload',
						'mimeType',
						'name',
						'previews',
						'url',
					],
				},
			},
			required: ['id', 'idAttachment'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the attachment.' },
				bytes: { type: 'number', description: 'The size of the attachment in bytes.' },
				date: { type: 'string', description: 'When the attachment was added.' },
				edgeColor: {
					type: 'string',
					description: 'The extracted edge color, for image attachments.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member who added the attachment.',
				},
				isUpload: { type: 'boolean', description: 'Whether the attachment was uploaded.' },
				mimeType: { type: 'string', description: 'The MIME type of the attachment.' },
				name: { type: 'string', description: 'The name of the attachment.' },
				pos: {
					type: 'number',
					description: 'The position of the attachment in the attachments list.',
				},
				previews: {
					type: 'array',
					description: 'Generated previews of an image attachment in various sizes.',
					items: {
						type: 'object',
						description: 'A generated preview of the image.',
						properties: {
							id: { type: 'string', description: 'The ID of the preview.' },
							scaled: {
								type: 'boolean',
								description: 'Whether the preview is scaled.',
							},
							url: { type: 'string', description: 'The URL of the preview.' },
							bytes: {
								type: 'number',
								description: 'The size of the preview in bytes.',
							},
							height: {
								type: 'number',
								description: 'The height of the preview in pixels.',
							},
							width: {
								type: 'number',
								description: 'The width of the preview in pixels.',
							},
						},
						required: [],
					},
				},
				url: { type: 'string', description: 'The URL of the attachment.' },
				fileName: { type: 'string', description: 'The file name of the attachment.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the attachment.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getBoard',
		label: 'Get a board',
		description: 'Returns a board, optionally with its nested resources.',
		context:
			'---\nname: getBoard\ndescription: Returns a board, optionally with its nested resources.\n---\n\nReturns a Trello board via `GET /boards/{id}`. Nested resources can be included in the same call.\n\n- `id` accepts the board ID or its short link (for example, `HbTEX5hb` from `https://trello.com/b/HbTEX5hb/...`).\n- Without extra parameters, Trello returns the default board fields plus all actions (`actions` defaults to `all`, limited by `actions_limit`) and open lists. Set `actions_limit` to `0` to skip actions.\n- `actions` and `memberships` are multi-selects. Select `all` for every action type or every membership, or select specific action types and membership filters (`active`, `admin`, `deactivated`, `me`, `normal`). For `memberships`, `none` (the default) skips them; do not combine `all` or `none` with other values.\n- Nested resources (`cards`, `checklists`, `labels`, `members`, `customFields`, `organization`, …) are included only when requested. Each has its own `*_fields` / `*_limit` options. See [Nested Resources](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).\n- For large boards, request only the nested resources you need.\n\nAPI reference: [Get a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the board.' },
				fields: {
					type: 'string',
					description:
						'The board fields to return. Default: `name`, `desc`, `descData`, `closed`, `idOrganization`, `pinned`, `url`, `shortUrl`, `prefs`, `labelNames`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'closed',
						'dateLastActivity',
						'dateLastView',
						'desc',
						'descData',
						'enterpriseOwned',
						'idMemberCreator',
						'idOrganization',
						'invitations',
						'invited',
						'labelNames',
						'limits',
						'memberships',
						'name',
						'pinned',
						'powerUps',
						'prefs',
						'shortLink',
						'shortUrl',
						'starred',
						'subscribed',
						'url',
					],
				},
				actions: {
					type: 'string',
					description:
						'The nested actions to return. Select `all` to return actions of every type, or select one or more [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'addAttachmentToCard',
						'addChecklistToCard',
						'addMemberToBoard',
						'addMemberToCard',
						'addMemberToOrganization',
						'addToOrganizationBoard',
						'commentCard',
						'convertToCardFromCheckItem',
						'copyBoard',
						'copyCard',
						'copyCommentCard',
						'createBoard',
						'createCard',
						'createList',
						'createOrganization',
						'deleteAttachmentFromCard',
						'deleteBoardInvitation',
						'deleteCard',
						'deleteOrganizationInvitation',
						'disablePowerUp',
						'emailCard',
						'enablePowerUp',
						'makeAdminOfBoard',
						'makeNormalMemberOfBoard',
						'makeNormalMemberOfOrganization',
						'makeObserverOfBoard',
						'memberJoinedTrello',
						'moveCardFromBoard',
						'moveCardToBoard',
						'moveListFromBoard',
						'moveListToBoard',
						'removeChecklistFromCard',
						'removeFromOrganizationBoard',
						'removeMemberFromCard',
						'sortList',
						'unconfirmedBoardInvitation',
						'unconfirmedOrganizationInvitation',
						'updateBoard',
						'updateCard',
						'updateCard:closed',
						'updateCard:desc',
						'updateCard:idList',
						'updateCard:name',
						'updateCheckItemStateOnCard',
						'updateChecklist',
						'updateList',
						'updateList:closed',
						'updateList:name',
						'updateMember',
						'updateOrganization',
					],
				},
				actions_limit: {
					type: 'number',
					description:
						'The number of nested actions to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				actions_since: {
					type: 'string',
					description:
						'Only nested actions created since this date or action ID are returned.',
				},
				actions_before: {
					type: 'string',
					description:
						'Only nested actions created before this date or action ID are returned.',
				},
				actions_entities: {
					type: 'boolean',
					description:
						'Whether to return the entities of nested actions. Default: `false`.',
					default: false,
				},
				actions_display: {
					type: 'boolean',
					description:
						'Whether to return the display information of nested actions. Default: `false`.',
					default: false,
				},
				action_fields: {
					type: 'string',
					description: 'The fields of nested actions to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'idMemberCreator',
						'data',
						'type',
						'date',
						'limits',
						'display',
						'memberCreator',
					],
				},
				action_member: {
					type: 'boolean',
					description:
						'Whether to return the member object of nested actions. Default: `true`.',
					default: true,
				},
				action_memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object of nested actions. Default: `true`.',
					default: true,
				},
				boardStars: {
					type: 'string',
					description:
						'Whether to return the board stars of the current member. Default: `none`.',
					default: '',
					enum: ['', 'mine', 'none'],
				},
				cards: {
					type: 'string',
					description: 'The nested cards to return. Default: `none`.',
					default: '',
					enum: [
						'',
						'all',
						'closed',
						'complete',
						'incomplete',
						'none',
						'open',
						'visible',
					],
				},
				card_fields: {
					type: 'string',
					description: 'The fields of nested cards to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'address',
						'badges',
						'checkItemStates',
						'closed',
						'coordinates',
						'creationMethod',
						'dueComplete',
						'dateLastActivity',
						'desc',
						'descData',
						'due',
						'dueReminder',
						'idBoard',
						'idChecklists',
						'idLabels',
						'idList',
						'idMembers',
						'idMembersVoted',
						'idShort',
						'idAttachmentCover',
						'labels',
						'limits',
						'locationName',
						'manualCoverAttachment',
						'name',
						'pos',
						'shortLink',
						'shortUrl',
						'subscribed',
						'url',
						'cover',
						'isTemplate',
					],
				},
				card_members: {
					type: 'boolean',
					description: 'Whether to return the members of nested cards. Default: `false`.',
					default: false,
				},
				card_member_fields: {
					type: 'string',
					description:
						'The member fields of nested cards to return. Default: `id`, `avatarHash`, `avatarUrl`, `initials`, `fullName`, `username`, `confirmed`, `memberType`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				card_attachments: {
					type: 'string',
					description:
						'Whether to return the attachments of nested cards. Use `cover` to return only cover attachments.',
					default: '',
					enum: ['', 'true', 'false', 'cover'],
				},
				card_attachment_fields: {
					type: 'string',
					description:
						'The attachment fields of nested cards to return. Default: `url`, `previews`.',
					default: '',
					enum: [
						'',
						'all',
						'bytes',
						'date',
						'edgeColor',
						'idMember',
						'isUpload',
						'mimeType',
						'name',
						'previews',
						'url',
					],
				},
				card_stickers: {
					type: 'boolean',
					description:
						'Whether to return the stickers of nested cards. Default: `false`.',
					default: false,
				},
				card_customFieldItems: {
					type: 'boolean',
					description:
						'Whether to return the custom field items of nested cards. Default: `false`.',
					default: false,
				},
				card_pluginData: {
					type: 'boolean',
					description:
						'Whether to return the Power-Up data of nested cards. Default: `false`.',
					default: false,
				},
				card_modifiedSince: {
					type: 'string',
					description:
						'Only nested cards modified since this ISO timestamp or ID are returned.',
				},
				checklists: {
					type: 'string',
					description: 'The nested checklists to return. Default: `none`.',
					default: '',
					enum: ['', 'all', 'none'],
				},
				checklist_fields: {
					type: 'string',
					description: 'The fields of nested checklists to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'idBoard', 'idCard', 'name', 'pos'],
				},
				customFields: {
					type: 'boolean',
					description:
						'Whether to return the custom field definitions of the board. Default: `false`.',
					default: false,
				},
				labels: {
					type: 'string',
					description: 'The nested labels to return. Default: `none`.',
					default: '',
					enum: ['', 'all', 'none'],
				},
				label_fields: {
					type: 'string',
					description: 'The fields of nested labels to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'color', 'idBoard', 'name', 'uses'],
				},
				labels_limit: {
					type: 'number',
					description:
						'The number of nested labels to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				lists: {
					type: 'string',
					description: 'The nested lists to return. Default: `open`.',
					default: '',
					enum: ['', 'all', 'closed', 'none', 'open'],
				},
				list_fields: {
					type: 'string',
					description: 'The fields of nested lists to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'name',
						'closed',
						'idBoard',
						'pos',
						'softLimit',
						'subscribed',
						'limits',
					],
				},
				members: {
					type: 'string',
					description: 'The nested members to return. Default: `none`.',
					default: '',
					enum: ['', 'all', 'admins', 'none', 'normal', 'owners'],
				},
				member_fields: {
					type: 'string',
					description:
						'The fields of nested members to return. Default: `id`, `avatarHash`, `avatarUrl`, `initials`, `fullName`, `username`, `confirmed`, `memberType`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				memberships: {
					type: 'string',
					description:
						'The nested memberships to return. Select `none` to skip them, `all` to return all of them, or one or more of `active`, `admin`, `deactivated`, `me`, `normal` to filter them. Do not combine `all` or `none` with other values. Default: `none`.',
					default: '',
					enum: ['', 'all', 'none', 'active', 'admin', 'deactivated', 'me', 'normal'],
				},
				pluginData: {
					type: 'boolean',
					description:
						'Whether to return the Power-Up data of the board. Default: `false`.',
					default: false,
				},
				organization: {
					type: 'boolean',
					description:
						'Whether to return the Workspace the board belongs to. Default: `false`.',
					default: false,
				},
				organization_pluginData: {
					type: 'boolean',
					description:
						'Whether to return the Power-Up data of the Workspace. Requires `organization` to be `true`. Default: `false`.',
					default: false,
				},
				myPrefs: {
					type: 'boolean',
					description:
						'Whether to return the board preferences of the current member. Default: `false`.',
					default: false,
				},
				tags: {
					type: 'boolean',
					description:
						'Whether to return the collections (tags) the board belongs to. Default: `false`.',
					default: false,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the board.' },
				name: { type: 'string', description: 'The name of the board.' },
				desc: { type: 'string', description: 'The description of the board.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				closed: { type: 'boolean', description: 'Whether the board is closed (archived).' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who created the board.',
				},
				idOrganization: {
					type: 'string',
					description: 'The ID of the Workspace the board belongs to.',
				},
				pinned: { type: 'boolean', description: 'Whether the board is pinned.' },
				url: { type: 'string', description: 'The persistent URL of the board.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the board using only its short ID.',
				},
				shortLink: {
					type: 'string',
					description: 'The 8-character short ID of the board.',
				},
				prefs: {
					type: 'object',
					description: 'The settings of the board.',
					properties: {
						permissionLevel: {
							type: 'string',
							description:
								'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
						},
						hideVotes: {
							type: 'boolean',
							description: 'Whether the Voting Power-Up hides who voted on cards.',
						},
						voting: {
							type: 'string',
							description:
								'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						comments: {
							type: 'string',
							description:
								'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						invitations: {
							type: 'string',
							description:
								'Who can invite people to the board: `admins` or `members`.',
						},
						selfJoin: {
							type: 'boolean',
							description: 'Whether Workspace members can join the board themselves.',
						},
						cardCovers: {
							type: 'boolean',
							description: 'Whether card covers are displayed.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the board is a template.',
						},
						cardAging: {
							type: 'string',
							description: 'The card aging mode: `pirate` or `regular`.',
						},
						calendarFeedEnabled: {
							type: 'boolean',
							description: 'Whether the calendar feed is enabled.',
						},
						background: {
							type: 'string',
							description:
								'The ID of a custom background or the name of a background color.',
						},
						backgroundColor: {
							type: 'string',
							description: 'The hex color of the background, if a color is used.',
						},
						backgroundImage: {
							type: 'string',
							description: 'The URL of the background image, if an image is used.',
						},
						backgroundImageScaled: {
							type: 'array',
							description: 'Scaled versions of the background image.',
							items: {
								type: 'object',
								description: 'A scaled version of the background image.',
								properties: {
									width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									url: {
										type: 'string',
										description: 'The URL of the scaled image.',
									},
								},
								required: [],
							},
						},
						backgroundTile: {
							type: 'boolean',
							description: 'Whether the background image is tiled.',
						},
						backgroundBrightness: {
							type: 'string',
							description: 'The brightness of the background: `dark` or `light`.',
						},
						backgroundBottomColor: {
							type: 'string',
							description: 'The hex color at the bottom of the background.',
						},
						backgroundTopColor: {
							type: 'string',
							description: 'The hex color at the top of the background.',
						},
						canBePublic: {
							type: 'boolean',
							description: 'Whether the board can be made public.',
						},
						canBeEnterprise: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Enterprise.',
						},
						canBeOrg: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Workspace.',
						},
						canBePrivate: {
							type: 'boolean',
							description: 'Whether the board can be made private.',
						},
						canInvite: {
							type: 'boolean',
							description:
								'Whether the current member can invite people to the board.',
						},
					},
					required: [],
				},
				labelNames: {
					type: 'object',
					description: 'The label names of the board, keyed by label color.',
					properties: {
						green: { type: 'string', description: 'The name of the green label.' },
						yellow: { type: 'string', description: 'The name of the yellow label.' },
						orange: { type: 'string', description: 'The name of the orange label.' },
						red: { type: 'string', description: 'The name of the red label.' },
						purple: { type: 'string', description: 'The name of the purple label.' },
						blue: { type: 'string', description: 'The name of the blue label.' },
						sky: { type: 'string', description: 'The name of the sky label.' },
						lime: { type: 'string', description: 'The name of the lime label.' },
						pink: { type: 'string', description: 'The name of the pink label.' },
						black: { type: 'string', description: 'The name of the black label.' },
					},
					required: [],
				},
				limits: {
					type: 'object',
					description: 'The limits that apply to the board.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of attachments per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						boards: {
							type: 'object',
							description: 'Board limits.',
							properties: {
								totalMembersPerBoard: {
									type: 'object',
									description: 'The limit of members per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						cards: {
							type: 'object',
							description: 'Card limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						checklists: {
							type: 'object',
							description: 'Checklist limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of checklists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						customFields: {
							type: 'object',
							description: 'Custom field limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of custom fields per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						labels: {
							type: 'object',
							description: 'Label limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of labels per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						lists: {
							type: 'object',
							description: 'List limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				starred: {
					type: 'boolean',
					description: 'Whether the board is starred by the current member.',
				},
				memberships: {
					type: 'array',
					description: 'The relationships of members to the board.',
					items: {
						type: 'object',
						description: 'The relationship of a member to the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the membership.' },
							idMember: { type: 'string', description: 'The ID of the member.' },
							memberType: {
								type: 'string',
								description:
									'The role of the member on the board: `admin`, `normal`, or `observer`.',
							},
							unconfirmed: {
								type: 'boolean',
								description:
									'Whether the member has not yet confirmed their account.',
							},
							deactivated: {
								type: 'boolean',
								description: 'Whether the member is deactivated.',
							},
						},
						required: [],
					},
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the board.',
				},
				invited: {
					type: 'boolean',
					description: 'Whether the current member is invited to the board.',
				},
				invitations: {
					type: 'array',
					description: 'Pending invitations to the board.',
					items: {
						type: 'object',
						description: 'A pending invitation to the board.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				powerUps: {
					type: 'array',
					description: 'The Power-Ups enabled on the board.',
					items: {
						type: 'string',
						description: 'The name of a Power-Up enabled on the board.',
					},
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the board occurred.',
				},
				dateLastView: {
					type: 'string',
					description: 'When the current member last viewed the board.',
				},
				idTags: {
					type: 'array',
					description: 'The IDs of the collections (tags) the board belongs to.',
					items: {
						type: 'string',
						description: 'The ID of a collection the board belongs to.',
					},
				},
				datePluginDisable: {
					type: 'string',
					description: 'When Power-Ups were disabled on the board, if ever.',
				},
				creationMethod: { type: 'string', description: 'How the board was created.' },
				ixUpdate: {
					type: 'string',
					description: 'An internal update counter of the board.',
				},
				templateGallery: {
					type: 'string',
					description: 'The template gallery the board is published in, if any.',
				},
				enterpriseOwned: {
					type: 'boolean',
					description: 'Whether the board is owned by an Enterprise.',
				},
				actions: {
					type: 'array',
					description:
						'The actions on the board. Returned unless actions are set to `none`.',
					items: {
						type: 'object',
						description: 'An action on the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the action.' },
							idMemberCreator: {
								type: 'string',
								description: 'The ID of the member who caused the action.',
							},
							data: {
								type: 'object',
								description:
									'Relevant information about the action. The available keys depend on the action type.',
								properties: {
									text: {
										type: 'string',
										description:
											'The text of the comment, for comment actions.',
									},
									card: {
										type: 'object',
										description: 'The card the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the card.',
											},
											name: {
												type: 'string',
												description: 'The name of the card.',
											},
											idShort: {
												type: 'number',
												description:
													'The numeric ID of the card, unique within the board.',
											},
											shortLink: {
												type: 'string',
												description:
													'The 8-character short ID of the card.',
											},
											idList: {
												type: 'string',
												description: 'The ID of the list the card is in.',
											},
											closed: {
												type: 'boolean',
												description: 'Whether the card is archived.',
											},
											desc: {
												type: 'string',
												description: 'The description of the card.',
											},
											due: {
												type: 'string',
												description: 'The due date of the card.',
											},
											pos: {
												type: 'number',
												description:
													'The position of the card in the list.',
											},
										},
										required: [],
									},
									board: {
										type: 'object',
										description: 'The board the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the board.',
											},
											name: {
												type: 'string',
												description: 'The name of the board.',
											},
											shortLink: {
												type: 'string',
												description:
													'The 8-character short ID of the board.',
											},
										},
										required: [],
									},
									list: {
										type: 'object',
										description: 'The list the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									listBefore: {
										type: 'object',
										description:
											'The list the card was in before it was moved, for `updateCard:idList` actions.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									listAfter: {
										type: 'object',
										description:
											'The list the card was moved to, for `updateCard:idList` actions.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									old: {
										type: 'object',
										description:
											'The previous values of the fields changed by an update action.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							type: {
								type: 'string',
								description:
									'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
							},
							date: { type: 'string', description: 'When the action occurred.' },
							limits: {
								type: 'object',
								description: 'The limits that apply to the action.',
								properties: {
									reactions: {
										type: 'object',
										description: 'The reaction limits of the action.',
										properties: {
											perAction: {
												type: 'object',
												description: 'The limit of reactions per action.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
											uniquePerAction: {
												type: 'object',
												description:
													'The limit of unique reactions per action.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							display: {
								type: 'object',
								description:
									'Information to render the action in a UI. Returned when display is requested.',
								properties: {
									translationKey: {
										type: 'string',
										description:
											'The translation key of the action description.',
									},
									entities: {
										type: 'object',
										description:
											'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							memberCreator: {
								type: 'object',
								description: 'The member who caused the action.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the member who caused the action.',
									},
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member who caused the action is blocked.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the avatar of the member who caused the action.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the avatar of the member who caused the action.',
									},
									fullName: {
										type: 'string',
										description:
											'The full name of the member who caused the action.',
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member who caused the action to Trello.',
									},
									initials: {
										type: 'string',
										description:
											'The initials of the member who caused the action.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									username: {
										type: 'string',
										description:
											'The username of the member who caused the action.',
									},
								},
								required: [],
							},
							member: {
								type: 'object',
								description:
									'The member the action relates to, for member-related actions.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member is blocked.',
									},
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member to Trello.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				cards: {
					type: 'array',
					description: 'The cards on the board. Returned when cards are requested.',
					items: {
						type: 'object',
						description: 'A card on the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the card.' },
							badges: {
								type: 'object',
								description: 'Information displayed on the front of the card.',
								properties: {
									votes: {
										type: 'number',
										description: 'The number of votes on the card.',
									},
									viewingMemberVoted: {
										type: 'boolean',
										description:
											'Whether the current member voted on the card.',
									},
									subscribed: {
										type: 'boolean',
										description:
											'Whether the current member is subscribed to the card.',
									},
									fogbugz: {
										type: 'string',
										description: 'The FogBugz case linked to the card, if any.',
									},
									checkItems: {
										type: 'number',
										description: 'The number of checklist items on the card.',
									},
									checkItemsChecked: {
										type: 'number',
										description:
											'The number of completed checklist items on the card.',
									},
									comments: {
										type: 'number',
										description: 'The number of comments on the card.',
									},
									attachments: {
										type: 'number',
										description: 'The number of attachments on the card.',
									},
									description: {
										type: 'boolean',
										description: 'Whether the card has a description.',
									},
									due: {
										type: 'string',
										description: 'The due date of the card.',
									},
									dueComplete: {
										type: 'boolean',
										description:
											'Whether the due date of the card is marked complete.',
									},
									start: {
										type: 'string',
										description: 'The start date of the card.',
									},
									location: {
										type: 'boolean',
										description: 'Whether the card has a location.',
									},
									attachmentsByType: {
										type: 'object',
										description:
											'The number of attachments on the card by type.',
										properties: {
											trello: {
												type: 'object',
												description:
													'The number of attachments linking to Trello objects.',
												properties: {
													board: {
														type: 'number',
														description:
															'The number of attachments linking to Trello boards.',
													},
													card: {
														type: 'number',
														description:
															'The number of attachments linking to Trello cards.',
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
							checkItemStates: {
								type: 'array',
								description: 'The states of the checklist items on the card.',
								items: {
									type: 'object',
									description: 'The state of a checklist item.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							closed: {
								type: 'boolean',
								description: 'Whether the card is closed (archived).',
							},
							dueComplete: {
								type: 'boolean',
								description: 'Whether the due date of the card is marked complete.',
							},
							dateLastActivity: {
								type: 'string',
								description: 'When the last activity on the card occurred.',
							},
							desc: { type: 'string', description: 'The description of the card.' },
							descData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the description, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							due: { type: 'string', description: 'The due date of the card.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							email: {
								type: 'string',
								description: 'The email address of the card, if any.',
							},
							idBoard: {
								type: 'string',
								description: 'The ID of the board the card is on.',
							},
							idChecklists: {
								type: 'array',
								description: 'The IDs of the checklists on the card.',
								items: {
									type: 'string',
									description: 'The ID of a checklist on the card.',
								},
							},
							idList: {
								type: 'string',
								description: 'The ID of the list the card is in.',
							},
							idMembers: {
								type: 'array',
								description: 'The IDs of the members assigned to the card.',
								items: {
									type: 'string',
									description: 'The ID of a member assigned to the card.',
								},
							},
							idMembersVoted: {
								type: 'array',
								description: 'The IDs of the members who voted on the card.',
								items: {
									type: 'string',
									description: 'The ID of a member who voted on the card.',
								},
							},
							idShort: {
								type: 'number',
								description: 'The numeric ID of the card, unique within the board.',
							},
							idAttachmentCover: {
								type: 'string',
								description:
									'The ID of the attachment used as the card cover, if any.',
							},
							manualCoverAttachment: {
								type: 'boolean',
								description:
									'Whether the card cover was selected manually by the user.',
							},
							labels: {
								type: 'array',
								description: 'The labels on the card.',
								items: {
									type: 'object',
									description: 'A label on the card.',
									properties: {
										id: { type: 'string', description: 'The ID of the label.' },
										idBoard: {
											type: 'string',
											description: 'The ID of the board the label is on.',
										},
										name: {
											type: 'string',
											description: 'The name displayed for the label.',
										},
										color: {
											type: 'string',
											description:
												'The color of the label. Empty means no color and the label is not shown on the front of cards.',
										},
										uses: {
											type: 'number',
											description:
												'The number of cards the label is used on.',
										},
									},
									required: [],
								},
							},
							idLabels: {
								type: 'array',
								description: 'The IDs of the labels on the card.',
								items: {
									type: 'string',
									description: 'The ID of a label on the card.',
								},
							},
							name: { type: 'string', description: 'The name of the card.' },
							pos: {
								type: 'number',
								description: 'The position of the card in the list.',
							},
							shortLink: {
								type: 'string',
								description: 'The 8-character short ID of the card.',
							},
							shortUrl: {
								type: 'string',
								description: 'The URL of the card without the name slug.',
							},
							start: { type: 'string', description: 'The start date of the card.' },
							subscribed: {
								type: 'boolean',
								description:
									'Whether the current member is subscribed to the card.',
							},
							url: { type: 'string', description: 'The full URL of the card.' },
							address: {
								type: 'string',
								description: 'The address of the card location.',
							},
							locationName: {
								type: 'string',
								description: 'The name of the card location.',
							},
							coordinates: {
								type: 'object',
								description: 'The coordinates of the card location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the card location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the card location.',
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description: 'The cover settings of the card.',
								properties: {
									idAttachment: {
										type: 'string',
										description: 'The ID of the attachment used as the cover.',
									},
									color: {
										type: 'string',
										description: 'The color of the cover.',
									},
									idUploadedBackground: {
										type: 'string',
										description:
											'The ID of the uploaded background used as the cover.',
									},
									size: {
										type: 'string',
										description: 'The size of the cover: `normal` or `full`.',
									},
									brightness: {
										type: 'string',
										description:
											'The brightness of the cover: `dark` or `light`.',
									},
									isTemplate: {
										type: 'boolean',
										description: 'Whether the cover is from a template.',
									},
								},
								required: [],
							},
							cardRole: {
								type: 'string',
								description:
									'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
							},
							creationMethod: {
								type: 'string',
								description: 'How the card was created.',
							},
							mirrorSourceId: {
								type: 'string',
								description: 'The ID of the source card, for mirror cards.',
							},
							isTemplate: {
								type: 'boolean',
								description: 'Whether the card is a template.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the card.',
								properties: {
									attachments: {
										type: 'object',
										description: 'Attachment limits.',
										properties: {
											perCard: {
												type: 'object',
												description: 'The limit of attachments per card.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							members: {
								type: 'array',
								description:
									'The members assigned to the card. Returned when card members are requested.',
								items: {
									type: 'object',
									description: 'A member assigned to the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the member.',
										},
										activityBlocked: {
											type: 'boolean',
											description:
												'Whether the activity of the member is blocked.',
										},
										avatarHash: {
											type: 'string',
											description: 'The hash of the avatar of the member.',
										},
										avatarUrl: {
											type: 'string',
											description: 'The URL of the avatar of the member.',
										},
										bio: {
											type: 'string',
											description: 'The bio of the member.',
										},
										confirmed: {
											type: 'boolean',
											description:
												'Whether the member has confirmed their email address.',
										},
										fullName: {
											type: 'string',
											description: 'The full name of the member.',
										},
										idEnterprisesDeactivated: {
											type: 'array',
											description:
												'The IDs of Enterprises the member is deactivated in.',
											items: {
												type: 'string',
												description:
													'The ID of an Enterprise the member is deactivated in.',
											},
										},
										idMemberReferrer: {
											type: 'string',
											description:
												'The ID of the member who referred the member to Trello.',
										},
										idPremOrgsAdmin: {
											type: 'array',
											description:
												'The IDs of premium Workspaces the member administers.',
											items: {
												type: 'string',
												description:
													'The ID of a premium Workspace the member administers.',
											},
										},
										initials: {
											type: 'string',
											description: 'The initials of the member.',
										},
										memberType: {
											type: 'string',
											description:
												'The type of the member account: `normal` or `ghost`.',
										},
										nonPublic: {
											type: 'object',
											description:
												'Profile data with restricted visibility, visible only to members of the same Workspace.',
											properties: {
												fullName: {
													type: 'string',
													description:
														'The non-public full name of the member.',
												},
												initials: {
													type: 'string',
													description:
														'The non-public initials of the member.',
												},
												avatarUrl: {
													type: 'string',
													description:
														'The URL of the non-public avatar of the member.',
												},
												avatarHash: {
													type: 'string',
													description:
														'The hash of the non-public avatar of the member.',
												},
											},
											required: [],
										},
										nonPublicAvailable: {
											type: 'boolean',
											description:
												'Whether the response contains non-public profile data for the member.',
										},
										products: {
											type: 'array',
											description: 'The Trello products of the member.',
											items: {
												type: 'number',
												description:
													'The code of a Trello product of the member.',
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the member profile.',
										},
										username: {
											type: 'string',
											description: 'The username of the member.',
										},
										status: {
											type: 'string',
											description: 'The online status of the member.',
										},
									},
									required: [],
								},
							},
							attachments: {
								type: 'array',
								description:
									'The attachments on the card. Returned when card attachments are requested.',
								items: {
									type: 'object',
									description: 'An attachment on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the attachment.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the attachment in bytes.',
										},
										date: {
											type: 'string',
											description: 'When the attachment was added.',
										},
										edgeColor: {
											type: 'string',
											description:
												'The extracted edge color, for image attachments.',
										},
										idMember: {
											type: 'string',
											description:
												'The ID of the member who added the attachment.',
										},
										isUpload: {
											type: 'boolean',
											description: 'Whether the attachment was uploaded.',
										},
										mimeType: {
											type: 'string',
											description: 'The MIME type of the attachment.',
										},
										name: {
											type: 'string',
											description: 'The name of the attachment.',
										},
										pos: {
											type: 'number',
											description:
												'The position of the attachment in the attachments list.',
										},
										previews: {
											type: 'array',
											description:
												'Generated previews of an image attachment in various sizes.',
											items: {
												type: 'object',
												description: 'A generated preview of the image.',
												properties: {
													id: {
														type: 'string',
														description: 'The ID of the preview.',
													},
													scaled: {
														type: 'boolean',
														description:
															'Whether the preview is scaled.',
													},
													url: {
														type: 'string',
														description: 'The URL of the preview.',
													},
													bytes: {
														type: 'number',
														description:
															'The size of the preview in bytes.',
													},
													height: {
														type: 'number',
														description:
															'The height of the preview in pixels.',
													},
													width: {
														type: 'number',
														description:
															'The width of the preview in pixels.',
													},
												},
												required: [],
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the attachment.',
										},
										fileName: {
											type: 'string',
											description: 'The file name of the attachment.',
										},
									},
									required: [],
								},
							},
							stickers: {
								type: 'array',
								description:
									'The stickers on the card. Returned when card stickers are requested.',
								items: {
									type: 'object',
									description: 'A sticker on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the sticker.',
										},
										top: {
											type: 'number',
											description:
												'The top position of the sticker on the card.',
										},
										left: {
											type: 'number',
											description:
												'The left position of the sticker on the card.',
										},
										zIndex: {
											type: 'number',
											description: 'The z-index of the sticker on the card.',
										},
										rotate: {
											type: 'number',
											description: 'The rotation of the sticker in degrees.',
										},
										image: {
											type: 'string',
											description: 'The ID of the sticker image.',
										},
										imageUrl: {
											type: 'string',
											description: 'The URL of the sticker image.',
										},
										imageScaled: {
											type: 'array',
											description: 'Scaled versions of the sticker image.',
											items: {
												type: 'object',
												description:
													'A scaled version of the sticker image.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
									},
									required: [],
								},
							},
							customFieldItems: {
								type: 'array',
								description:
									'The custom field values on the card. Returned when card custom field items are requested.',
								items: {
									type: 'object',
									description: 'A custom field value set on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the custom field item.',
										},
										idCustomField: {
											type: 'string',
											description: 'The ID of the custom field definition.',
										},
										idModel: {
											type: 'string',
											description: 'The ID of the card the value is set on.',
										},
										modelType: {
											type: 'string',
											description:
												'The type of the model the value is set on: `card`.',
										},
										idValue: {
											type: 'string',
											description:
												'The ID of the selected option, for dropdown custom fields.',
										},
										value: {
											type: 'object',
											description:
												'The value of the custom field, keyed by type.',
											properties: {
												text: {
													type: 'string',
													description:
														'The value of a text custom field.',
												},
												number: {
													type: 'string',
													description:
														'The value of a number custom field, as a string.',
												},
												date: {
													type: 'string',
													description:
														'The value of a date custom field.',
												},
												checked: {
													type: 'string',
													description:
														'The value of a checkbox custom field: `true` or `false`, as a string.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							pluginData: {
								type: 'array',
								description:
									'The Power-Up data on the card. Returned when card plugin data is requested.',
								items: {
									type: 'object',
									description: 'Data stored by a Power-Up.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the plugin data.',
										},
										idPlugin: {
											type: 'string',
											description: 'The ID of the Power-Up.',
										},
										scope: {
											type: 'string',
											description:
												'The scope of the data: `board`, `card`, `member`, or `organization`.',
										},
										idModel: {
											type: 'string',
											description:
												'The ID of the model the data is stored on.',
										},
										value: {
											type: 'string',
											description: 'The stored data, as a JSON string.',
										},
										access: {
											type: 'string',
											description:
												'The access level of the data: `private` or `shared`.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				checklists: {
					type: 'array',
					description:
						'The checklists on the board. Returned when checklists are requested.',
					items: {
						type: 'object',
						description: 'A checklist on the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the checklist.' },
							name: { type: 'string', description: 'The name of the checklist.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the board the checklist is on.',
							},
							idCard: {
								type: 'string',
								description: 'The ID of the card the checklist is on.',
							},
							pos: {
								type: 'number',
								description: 'The position of the checklist on the card.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the checklist.',
								properties: {
									checkItems: {
										type: 'object',
										description: 'Checklist item limits.',
										properties: {
											perChecklist: {
												type: 'object',
												description: 'The limit of items per checklist.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							creationMethod: {
								type: 'string',
								description: 'How the checklist was created.',
							},
							checkItems: {
								type: 'array',
								description: 'The items of the checklist.',
								items: {
									type: 'object',
									description: 'An item of the checklist.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the checklist item.',
										},
										idChecklist: {
											type: 'string',
											description:
												'The ID of the checklist the item belongs to.',
										},
										name: {
											type: 'string',
											description: 'The name of the checklist item.',
										},
										nameData: {
											type: 'object',
											description:
												'Data needed to display custom emoji used in the name, if any.',
											properties: {
												emoji: {
													type: 'object',
													description:
														'Custom emoji used in the text, keyed by emoji name.',
													properties: {},
													required: [],
													additionalProperties: true,
												},
											},
											required: [],
										},
										state: {
											type: 'string',
											description:
												'The state of the item: `complete` or `incomplete`.',
										},
										pos: {
											type: 'number',
											description:
												'The position of the item in the checklist.',
										},
										due: {
											type: 'string',
											description: 'The due date of the item.',
										},
										dueReminder: {
											type: 'number',
											description:
												'The number of minutes before the due date when a reminder is sent.',
										},
										idMember: {
											type: 'string',
											description:
												'The ID of the member assigned to the item.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				customFields: {
					type: 'array',
					description:
						'The custom field definitions of the board. Returned when custom fields are requested.',
					items: {
						type: 'object',
						description: 'A custom field definition.',
						properties: {
							id: { type: 'string', description: 'The ID of the custom field.' },
							idModel: {
								type: 'string',
								description: 'The ID of the board the custom field belongs to.',
							},
							modelType: {
								type: 'string',
								description:
									'The type of the model the custom field belongs to: `board`.',
							},
							fieldGroup: {
								type: 'string',
								description:
									'A hash identifying custom fields with the same definition across boards.',
							},
							display: {
								type: 'object',
								description: 'The display settings of the custom field.',
								properties: {
									cardFront: {
										type: 'boolean',
										description:
											'Whether the custom field is shown on the front of cards.',
									},
								},
								required: [],
							},
							name: { type: 'string', description: 'The name of the custom field.' },
							pos: {
								type: 'number',
								description: 'The position of the custom field.',
							},
							type: {
								type: 'string',
								description:
									'The type of the custom field: `checkbox`, `date`, `list`, `number`, or `text`.',
							},
							isSuggestedField: {
								type: 'boolean',
								description: 'Whether the custom field is a suggested field.',
							},
							options: {
								type: 'array',
								description: 'The options of a dropdown (`list`) custom field.',
								items: {
									type: 'object',
									description: 'An option of the dropdown custom field.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the option.',
										},
										idCustomField: {
											type: 'string',
											description:
												'The ID of the custom field the option belongs to.',
										},
										value: {
											type: 'object',
											description: 'The value of the option.',
											properties: {
												text: {
													type: 'string',
													description: 'The text of the option.',
												},
											},
											required: [],
										},
										color: {
											type: 'string',
											description: 'The color of the option.',
										},
										pos: {
											type: 'number',
											description: 'The position of the option.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				labels: {
					type: 'array',
					description: 'The labels on the board. Returned when labels are requested.',
					items: {
						type: 'object',
						description: 'A label on the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the label.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the board the label is on.',
							},
							name: {
								type: 'string',
								description: 'The name displayed for the label.',
							},
							color: {
								type: 'string',
								description:
									'The color of the label. Empty means no color and the label is not shown on the front of cards.',
							},
							uses: {
								type: 'number',
								description: 'The number of cards the label is used on.',
							},
						},
						required: [],
					},
				},
				lists: {
					type: 'array',
					description: 'The lists on the board. Returned unless lists are set to `none`.',
					items: {
						type: 'object',
						description: 'A list on the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the list.' },
							name: { type: 'string', description: 'The name of the list.' },
							closed: {
								type: 'boolean',
								description: 'Whether the list is closed (archived).',
							},
							idBoard: {
								type: 'string',
								description: 'The ID of the board the list is on.',
							},
							pos: {
								type: 'number',
								description: 'The position of the list on the board.',
							},
							subscribed: {
								type: 'boolean',
								description:
									'Whether the current member is subscribed to the list.',
							},
							softLimit: {
								type: 'number',
								description: 'The soft limit of cards in the list, if set.',
							},
							creationMethod: {
								type: 'string',
								description: 'How the list was created.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the list.',
								properties: {
									cards: {
										type: 'object',
										description: 'Card limits of the list.',
										properties: {
											openPerList: {
												type: 'object',
												description: 'The limit of open cards per list.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
											totalPerList: {
												type: 'object',
												description: 'The limit of all cards per list.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
						required: [],
					},
				},
				members: {
					type: 'array',
					description: 'The members of the board. Returned when members are requested.',
					items: {
						type: 'object',
						description: 'A member of the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				pluginData: {
					type: 'array',
					description:
						'The Power-Up data of the board. Returned when plugin data is requested.',
					items: {
						type: 'object',
						description: 'Data stored by a Power-Up.',
						properties: {
							id: { type: 'string', description: 'The ID of the plugin data.' },
							idPlugin: { type: 'string', description: 'The ID of the Power-Up.' },
							scope: {
								type: 'string',
								description:
									'The scope of the data: `board`, `card`, `member`, or `organization`.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the model the data is stored on.',
							},
							value: {
								type: 'string',
								description: 'The stored data, as a JSON string.',
							},
							access: {
								type: 'string',
								description: 'The access level of the data: `private` or `shared`.',
							},
						},
						required: [],
					},
				},
				organization: {
					type: 'object',
					description:
						'The Workspace the board belongs to. Returned when the Workspace is requested.',
					properties: {
						id: { type: 'string', description: 'The ID of the Workspace.' },
						name: { type: 'string', description: 'The short name of the Workspace.' },
						displayName: {
							type: 'string',
							description: 'The display name of the Workspace.',
						},
						desc: { type: 'string', description: 'The description of the Workspace.' },
						url: { type: 'string', description: 'The URL of the Workspace.' },
						website: { type: 'string', description: 'The website of the Workspace.' },
						logoHash: {
							type: 'string',
							description: 'The hash of the Workspace logo.',
						},
						logoUrl: { type: 'string', description: 'The URL of the Workspace logo.' },
						idEnterprise: {
							type: 'string',
							description:
								'The ID of the Enterprise the Workspace belongs to, if any.',
						},
						offering: {
							type: 'string',
							description: 'The Trello offering of the Workspace.',
						},
						premiumFeatures: {
							type: 'array',
							description: 'The premium features available to the Workspace.',
							items: {
								type: 'string',
								description: 'The name of a premium feature.',
							},
						},
						dateLastActivity: {
							type: 'string',
							description: 'When the last activity in the Workspace occurred.',
						},
						prefs: {
							type: 'object',
							description: 'The settings of the Workspace.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						pluginData: {
							type: 'array',
							description:
								'The Power-Up data of the Workspace. Returned when Workspace plugin data is requested.',
							items: {
								type: 'object',
								description: 'Data stored by a Power-Up.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the plugin data.',
									},
									idPlugin: {
										type: 'string',
										description: 'The ID of the Power-Up.',
									},
									scope: {
										type: 'string',
										description:
											'The scope of the data: `board`, `card`, `member`, or `organization`.',
									},
									idModel: {
										type: 'string',
										description: 'The ID of the model the data is stored on.',
									},
									value: {
										type: 'string',
										description: 'The stored data, as a JSON string.',
									},
									access: {
										type: 'string',
										description:
											'The access level of the data: `private` or `shared`.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				myPrefs: {
					type: 'object',
					description:
						'The board preferences of the current member. Returned when my preferences are requested.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				boardStars: {
					type: 'array',
					description:
						'The board stars of the current member. Returned when board stars are set to `mine`.',
					items: {
						type: 'object',
						description: 'A board star.',
						properties: {
							id: { type: 'string', description: 'The ID of the board star.' },
							idBoard: {
								type: 'string',
								description: 'The ID of the starred board.',
							},
							pos: { type: 'number', description: 'The position of the board star.' },
						},
						required: [],
					},
				},
				tags: {
					type: 'array',
					description:
						'The collections (tags) the board belongs to. Returned when tags are requested.',
					items: {
						type: 'object',
						description: 'A collection the board belongs to.',
						properties: {
							id: { type: 'string', description: 'The ID of the collection.' },
							name: { type: 'string', description: 'The name of the collection.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getBoardActions',
		label: 'Get board actions',
		description: 'Lists the actions (activities) of a board.',
		context:
			"---\nname: getBoardActions\ndescription: Lists the actions (activities) of a board.\n---\n\nLists the actions (activities) of a board. Calls `GET /boards/{id}/actions` and returns the actions as an array of action objects, newest first.\n\n- `filter` takes [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/); `all` returns every type. If it is empty, Trello applies its default filter for boards.\n- Paginate with `limit` (0–1000, default 50) and `page`, or use `since` / `before` with a date or an action ID for incremental reads.\n- Use `fields`, `member`, and `memberCreator` to limit what each action contains.\n- The shape of `data` depends on the action type (for example, `text` for `commentCard` or `listBefore` / `listAfter` for `updateCard:idList`).\n- Trello's `format` query parameter is intentionally not exposed. The response is always an array of action objects, while `count` would return a single count object and break the declared output schema.\n\nAPI reference: [Get Actions of a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-boardid-actions-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the board to list the actions of.' },
				filter: {
					type: 'string',
					description:
						'The [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/) to return. Use `all` to return all types. If empty, Trello uses its default filter for boards.',
					default: '',
					enum: [
						'',
						'all',
						'addAttachmentToCard',
						'addChecklistToCard',
						'addMemberToBoard',
						'addMemberToCard',
						'addMemberToOrganization',
						'addToOrganizationBoard',
						'commentCard',
						'convertToCardFromCheckItem',
						'copyBoard',
						'copyCard',
						'copyCommentCard',
						'createBoard',
						'createCard',
						'createList',
						'createOrganization',
						'deleteAttachmentFromCard',
						'deleteBoardInvitation',
						'deleteCard',
						'deleteOrganizationInvitation',
						'disablePowerUp',
						'emailCard',
						'enablePowerUp',
						'makeAdminOfBoard',
						'makeNormalMemberOfBoard',
						'makeNormalMemberOfOrganization',
						'makeObserverOfBoard',
						'memberJoinedTrello',
						'moveCardFromBoard',
						'moveCardToBoard',
						'moveListFromBoard',
						'moveListToBoard',
						'removeChecklistFromCard',
						'removeFromOrganizationBoard',
						'removeMemberFromCard',
						'sortList',
						'unconfirmedBoardInvitation',
						'unconfirmedOrganizationInvitation',
						'updateBoard',
						'updateCard',
						'updateCard:closed',
						'updateCard:desc',
						'updateCard:idList',
						'updateCard:name',
						'updateCheckItemStateOnCard',
						'updateChecklist',
						'updateList',
						'updateList:closed',
						'updateList:name',
						'updateMember',
						'updateOrganization',
					],
				},
				fields: {
					type: 'string',
					description:
						'The [action fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#action-object) to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'idMemberCreator',
						'data',
						'type',
						'date',
						'limits',
						'display',
						'memberCreator',
					],
				},
				idModels: {
					type: 'string',
					description:
						'A comma-separated list of model IDs. Only actions related to these models are returned.',
				},
				member: {
					type: 'boolean',
					description:
						'Whether to return the member object for each action. Default: `true`.',
					default: true,
				},
				member_fields: {
					type: 'string',
					description: 'The member fields to return when the member object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object for each action. Default: `true`.',
					default: true,
				},
				memberCreator_fields: {
					type: 'string',
					description:
						'The member fields to return when the member creator object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				reactions: {
					type: 'boolean',
					description: 'Whether to return the reactions on comment actions.',
				},
				since: {
					type: 'string',
					description:
						'Only actions created since this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				before: {
					type: 'string',
					description:
						'Only actions created before this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				limit: {
					type: 'number',
					description: 'The number of actions to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				page: {
					type: 'number',
					description: 'The page of results to return, starting from `0`. Default: `0`.',
					default: 0,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
				reactions: {
					type: 'array',
					description:
						'The reactions on the action. Returned when reactions are requested.',
					items: {
						type: 'object',
						description: 'A reaction on the action.',
						properties: {
							id: { type: 'string', description: 'The ID of the reaction.' },
							idMember: {
								type: 'string',
								description: 'The ID of the member who reacted.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the action the reaction belongs to.',
							},
							idEmoji: {
								type: 'string',
								description: 'The unified code of the emoji.',
							},
							member: {
								type: 'object',
								description: 'The member who reacted.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
									},
								},
								required: [],
							},
							emoji: {
								type: 'object',
								description: 'The emoji used for the reaction.',
								properties: {
									unified: {
										type: 'string',
										description: 'The unified code of the emoji.',
									},
									native: {
										type: 'string',
										description: 'The native emoji character.',
									},
									name: { type: 'string', description: 'The name of the emoji.' },
									skinVariation: {
										type: 'string',
										description:
											'The skin tone variation of the emoji, if any.',
									},
									shortName: {
										type: 'string',
										description: 'The short name of the emoji.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getBoardLists',
		label: 'Get board lists',
		description: 'Lists the lists on a board, optionally with their cards.',
		context:
			"---\nname: getBoardLists\ndescription: Lists the lists on a board, optionally with their cards.\n---\n\nLists the lists on a Trello board via `GET /boards/{id}/lists` and returns them as an array of list objects.\n\n- `filter` selects open (default), closed, or all lists.\n- Set `cards` to include each list's cards in a `cards` array. Use `card_fields` to limit the card fields.\n\nAPI reference: [Get Lists on a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-lists-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the board.' },
				filter: {
					type: 'string',
					description: 'Which lists to return. Default: `open`.',
					default: '',
					enum: ['', 'all', 'closed', 'none', 'open'],
				},
				fields: {
					type: 'string',
					description: 'The list fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'name',
						'closed',
						'idBoard',
						'pos',
						'softLimit',
						'subscribed',
						'limits',
					],
				},
				cards: {
					type: 'string',
					description:
						'Which cards to return in each list. If empty, cards are not returned.',
					default: '',
					enum: ['', 'all', 'closed', 'none', 'open'],
				},
				card_fields: {
					type: 'string',
					description:
						'The card fields to return when cards are requested. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'address',
						'badges',
						'checkItemStates',
						'closed',
						'coordinates',
						'creationMethod',
						'dueComplete',
						'dateLastActivity',
						'desc',
						'descData',
						'due',
						'dueReminder',
						'idBoard',
						'idChecklists',
						'idLabels',
						'idList',
						'idMembers',
						'idMembersVoted',
						'idShort',
						'idAttachmentCover',
						'labels',
						'limits',
						'locationName',
						'manualCoverAttachment',
						'name',
						'pos',
						'shortLink',
						'shortUrl',
						'subscribed',
						'url',
						'cover',
						'isTemplate',
					],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the list.' },
				name: { type: 'string', description: 'The name of the list.' },
				closed: { type: 'boolean', description: 'Whether the list is closed (archived).' },
				idBoard: { type: 'string', description: 'The ID of the board the list is on.' },
				pos: { type: 'number', description: 'The position of the list on the board.' },
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the list.',
				},
				softLimit: {
					type: 'number',
					description: 'The soft limit of cards in the list, if set.',
				},
				creationMethod: { type: 'string', description: 'How the list was created.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the list.',
					properties: {
						cards: {
							type: 'object',
							description: 'Card limits of the list.',
							properties: {
								openPerList: {
									type: 'object',
									description: 'The limit of open cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerList: {
									type: 'object',
									description: 'The limit of all cards per list.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				cards: {
					type: 'array',
					description: 'The cards in the list. Returned when cards are requested.',
					items: {
						type: 'object',
						description: 'A card in the list.',
						properties: {
							id: { type: 'string', description: 'The ID of the card.' },
							badges: {
								type: 'object',
								description: 'Information displayed on the front of the card.',
								properties: {
									votes: {
										type: 'number',
										description: 'The number of votes on the card.',
									},
									viewingMemberVoted: {
										type: 'boolean',
										description:
											'Whether the current member voted on the card.',
									},
									subscribed: {
										type: 'boolean',
										description:
											'Whether the current member is subscribed to the card.',
									},
									fogbugz: {
										type: 'string',
										description: 'The FogBugz case linked to the card, if any.',
									},
									checkItems: {
										type: 'number',
										description: 'The number of checklist items on the card.',
									},
									checkItemsChecked: {
										type: 'number',
										description:
											'The number of completed checklist items on the card.',
									},
									comments: {
										type: 'number',
										description: 'The number of comments on the card.',
									},
									attachments: {
										type: 'number',
										description: 'The number of attachments on the card.',
									},
									description: {
										type: 'boolean',
										description: 'Whether the card has a description.',
									},
									due: {
										type: 'string',
										description: 'The due date of the card.',
									},
									dueComplete: {
										type: 'boolean',
										description:
											'Whether the due date of the card is marked complete.',
									},
									start: {
										type: 'string',
										description: 'The start date of the card.',
									},
									location: {
										type: 'boolean',
										description: 'Whether the card has a location.',
									},
									attachmentsByType: {
										type: 'object',
										description:
											'The number of attachments on the card by type.',
										properties: {
											trello: {
												type: 'object',
												description:
													'The number of attachments linking to Trello objects.',
												properties: {
													board: {
														type: 'number',
														description:
															'The number of attachments linking to Trello boards.',
													},
													card: {
														type: 'number',
														description:
															'The number of attachments linking to Trello cards.',
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
							checkItemStates: {
								type: 'array',
								description: 'The states of the checklist items on the card.',
								items: {
									type: 'object',
									description: 'The state of a checklist item.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							closed: {
								type: 'boolean',
								description: 'Whether the card is closed (archived).',
							},
							dueComplete: {
								type: 'boolean',
								description: 'Whether the due date of the card is marked complete.',
							},
							dateLastActivity: {
								type: 'string',
								description: 'When the last activity on the card occurred.',
							},
							desc: { type: 'string', description: 'The description of the card.' },
							descData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the description, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							due: { type: 'string', description: 'The due date of the card.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							email: {
								type: 'string',
								description: 'The email address of the card, if any.',
							},
							idBoard: {
								type: 'string',
								description: 'The ID of the board the card is on.',
							},
							idChecklists: {
								type: 'array',
								description: 'The IDs of the checklists on the card.',
								items: {
									type: 'string',
									description: 'The ID of a checklist on the card.',
								},
							},
							idList: {
								type: 'string',
								description: 'The ID of the list the card is in.',
							},
							idMembers: {
								type: 'array',
								description: 'The IDs of the members assigned to the card.',
								items: {
									type: 'string',
									description: 'The ID of a member assigned to the card.',
								},
							},
							idMembersVoted: {
								type: 'array',
								description: 'The IDs of the members who voted on the card.',
								items: {
									type: 'string',
									description: 'The ID of a member who voted on the card.',
								},
							},
							idShort: {
								type: 'number',
								description: 'The numeric ID of the card, unique within the board.',
							},
							idAttachmentCover: {
								type: 'string',
								description:
									'The ID of the attachment used as the card cover, if any.',
							},
							manualCoverAttachment: {
								type: 'boolean',
								description:
									'Whether the card cover was selected manually by the user.',
							},
							labels: {
								type: 'array',
								description: 'The labels on the card.',
								items: {
									type: 'object',
									description: 'A label on the card.',
									properties: {
										id: { type: 'string', description: 'The ID of the label.' },
										idBoard: {
											type: 'string',
											description: 'The ID of the board the label is on.',
										},
										name: {
											type: 'string',
											description: 'The name displayed for the label.',
										},
										color: {
											type: 'string',
											description:
												'The color of the label. Empty means no color and the label is not shown on the front of cards.',
										},
										uses: {
											type: 'number',
											description:
												'The number of cards the label is used on.',
										},
									},
									required: [],
								},
							},
							idLabels: {
								type: 'array',
								description: 'The IDs of the labels on the card.',
								items: {
									type: 'string',
									description: 'The ID of a label on the card.',
								},
							},
							name: { type: 'string', description: 'The name of the card.' },
							pos: {
								type: 'number',
								description: 'The position of the card in the list.',
							},
							shortLink: {
								type: 'string',
								description: 'The 8-character short ID of the card.',
							},
							shortUrl: {
								type: 'string',
								description: 'The URL of the card without the name slug.',
							},
							start: { type: 'string', description: 'The start date of the card.' },
							subscribed: {
								type: 'boolean',
								description:
									'Whether the current member is subscribed to the card.',
							},
							url: { type: 'string', description: 'The full URL of the card.' },
							address: {
								type: 'string',
								description: 'The address of the card location.',
							},
							locationName: {
								type: 'string',
								description: 'The name of the card location.',
							},
							coordinates: {
								type: 'object',
								description: 'The coordinates of the card location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the card location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the card location.',
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description: 'The cover settings of the card.',
								properties: {
									idAttachment: {
										type: 'string',
										description: 'The ID of the attachment used as the cover.',
									},
									color: {
										type: 'string',
										description: 'The color of the cover.',
									},
									idUploadedBackground: {
										type: 'string',
										description:
											'The ID of the uploaded background used as the cover.',
									},
									size: {
										type: 'string',
										description: 'The size of the cover: `normal` or `full`.',
									},
									brightness: {
										type: 'string',
										description:
											'The brightness of the cover: `dark` or `light`.',
									},
									isTemplate: {
										type: 'boolean',
										description: 'Whether the cover is from a template.',
									},
								},
								required: [],
							},
							cardRole: {
								type: 'string',
								description:
									'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
							},
							creationMethod: {
								type: 'string',
								description: 'How the card was created.',
							},
							mirrorSourceId: {
								type: 'string',
								description: 'The ID of the source card, for mirror cards.',
							},
							isTemplate: {
								type: 'boolean',
								description: 'Whether the card is a template.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the card.',
								properties: {
									attachments: {
										type: 'object',
										description: 'Attachment limits.',
										properties: {
											perCard: {
												type: 'object',
												description: 'The limit of attachments per card.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							members: {
								type: 'array',
								description:
									'The members assigned to the card. Returned when card members are requested.',
								items: {
									type: 'object',
									description: 'A member assigned to the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the member.',
										},
										activityBlocked: {
											type: 'boolean',
											description:
												'Whether the activity of the member is blocked.',
										},
										avatarHash: {
											type: 'string',
											description: 'The hash of the avatar of the member.',
										},
										avatarUrl: {
											type: 'string',
											description: 'The URL of the avatar of the member.',
										},
										bio: {
											type: 'string',
											description: 'The bio of the member.',
										},
										confirmed: {
											type: 'boolean',
											description:
												'Whether the member has confirmed their email address.',
										},
										fullName: {
											type: 'string',
											description: 'The full name of the member.',
										},
										idEnterprisesDeactivated: {
											type: 'array',
											description:
												'The IDs of Enterprises the member is deactivated in.',
											items: {
												type: 'string',
												description:
													'The ID of an Enterprise the member is deactivated in.',
											},
										},
										idMemberReferrer: {
											type: 'string',
											description:
												'The ID of the member who referred the member to Trello.',
										},
										idPremOrgsAdmin: {
											type: 'array',
											description:
												'The IDs of premium Workspaces the member administers.',
											items: {
												type: 'string',
												description:
													'The ID of a premium Workspace the member administers.',
											},
										},
										initials: {
											type: 'string',
											description: 'The initials of the member.',
										},
										memberType: {
											type: 'string',
											description:
												'The type of the member account: `normal` or `ghost`.',
										},
										nonPublic: {
											type: 'object',
											description:
												'Profile data with restricted visibility, visible only to members of the same Workspace.',
											properties: {
												fullName: {
													type: 'string',
													description:
														'The non-public full name of the member.',
												},
												initials: {
													type: 'string',
													description:
														'The non-public initials of the member.',
												},
												avatarUrl: {
													type: 'string',
													description:
														'The URL of the non-public avatar of the member.',
												},
												avatarHash: {
													type: 'string',
													description:
														'The hash of the non-public avatar of the member.',
												},
											},
											required: [],
										},
										nonPublicAvailable: {
											type: 'boolean',
											description:
												'Whether the response contains non-public profile data for the member.',
										},
										products: {
											type: 'array',
											description: 'The Trello products of the member.',
											items: {
												type: 'number',
												description:
													'The code of a Trello product of the member.',
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the member profile.',
										},
										username: {
											type: 'string',
											description: 'The username of the member.',
										},
										status: {
											type: 'string',
											description: 'The online status of the member.',
										},
									},
									required: [],
								},
							},
							attachments: {
								type: 'array',
								description:
									'The attachments on the card. Returned when card attachments are requested.',
								items: {
									type: 'object',
									description: 'An attachment on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the attachment.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the attachment in bytes.',
										},
										date: {
											type: 'string',
											description: 'When the attachment was added.',
										},
										edgeColor: {
											type: 'string',
											description:
												'The extracted edge color, for image attachments.',
										},
										idMember: {
											type: 'string',
											description:
												'The ID of the member who added the attachment.',
										},
										isUpload: {
											type: 'boolean',
											description: 'Whether the attachment was uploaded.',
										},
										mimeType: {
											type: 'string',
											description: 'The MIME type of the attachment.',
										},
										name: {
											type: 'string',
											description: 'The name of the attachment.',
										},
										pos: {
											type: 'number',
											description:
												'The position of the attachment in the attachments list.',
										},
										previews: {
											type: 'array',
											description:
												'Generated previews of an image attachment in various sizes.',
											items: {
												type: 'object',
												description: 'A generated preview of the image.',
												properties: {
													id: {
														type: 'string',
														description: 'The ID of the preview.',
													},
													scaled: {
														type: 'boolean',
														description:
															'Whether the preview is scaled.',
													},
													url: {
														type: 'string',
														description: 'The URL of the preview.',
													},
													bytes: {
														type: 'number',
														description:
															'The size of the preview in bytes.',
													},
													height: {
														type: 'number',
														description:
															'The height of the preview in pixels.',
													},
													width: {
														type: 'number',
														description:
															'The width of the preview in pixels.',
													},
												},
												required: [],
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the attachment.',
										},
										fileName: {
											type: 'string',
											description: 'The file name of the attachment.',
										},
									},
									required: [],
								},
							},
							stickers: {
								type: 'array',
								description:
									'The stickers on the card. Returned when card stickers are requested.',
								items: {
									type: 'object',
									description: 'A sticker on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the sticker.',
										},
										top: {
											type: 'number',
											description:
												'The top position of the sticker on the card.',
										},
										left: {
											type: 'number',
											description:
												'The left position of the sticker on the card.',
										},
										zIndex: {
											type: 'number',
											description: 'The z-index of the sticker on the card.',
										},
										rotate: {
											type: 'number',
											description: 'The rotation of the sticker in degrees.',
										},
										image: {
											type: 'string',
											description: 'The ID of the sticker image.',
										},
										imageUrl: {
											type: 'string',
											description: 'The URL of the sticker image.',
										},
										imageScaled: {
											type: 'array',
											description: 'Scaled versions of the sticker image.',
											items: {
												type: 'object',
												description:
													'A scaled version of the sticker image.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
									},
									required: [],
								},
							},
							customFieldItems: {
								type: 'array',
								description:
									'The custom field values on the card. Returned when card custom field items are requested.',
								items: {
									type: 'object',
									description: 'A custom field value set on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the custom field item.',
										},
										idCustomField: {
											type: 'string',
											description: 'The ID of the custom field definition.',
										},
										idModel: {
											type: 'string',
											description: 'The ID of the card the value is set on.',
										},
										modelType: {
											type: 'string',
											description:
												'The type of the model the value is set on: `card`.',
										},
										idValue: {
											type: 'string',
											description:
												'The ID of the selected option, for dropdown custom fields.',
										},
										value: {
											type: 'object',
											description:
												'The value of the custom field, keyed by type.',
											properties: {
												text: {
													type: 'string',
													description:
														'The value of a text custom field.',
												},
												number: {
													type: 'string',
													description:
														'The value of a number custom field, as a string.',
												},
												date: {
													type: 'string',
													description:
														'The value of a date custom field.',
												},
												checked: {
													type: 'string',
													description:
														'The value of a checkbox custom field: `true` or `false`, as a string.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							pluginData: {
								type: 'array',
								description:
									'The Power-Up data on the card. Returned when card plugin data is requested.',
								items: {
									type: 'object',
									description: 'Data stored by a Power-Up.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the plugin data.',
										},
										idPlugin: {
											type: 'string',
											description: 'The ID of the Power-Up.',
										},
										scope: {
											type: 'string',
											description:
												'The scope of the data: `board`, `card`, `member`, or `organization`.',
										},
										idModel: {
											type: 'string',
											description:
												'The ID of the model the data is stored on.',
										},
										value: {
											type: 'string',
											description: 'The stored data, as a JSON string.',
										},
										access: {
											type: 'string',
											description:
												'The access level of the data: `private` or `shared`.',
										},
									},
									required: [],
								},
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getCardActions',
		label: 'Get card actions',
		description: 'Lists the actions (activities) of a card.',
		context:
			"---\nname: getCardActions\ndescription: Lists the actions (activities) of a card.\n---\n\nLists the actions (activities) of a card. Calls `GET /cards/{id}/actions` and returns the actions as an array of action objects, newest first.\n\n- `filter` takes [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/); `all` returns every type. If it is empty, Trello applies its default filter for cards (`commentCard`, `updateCard:idList`).\n- Paginate with `limit` (0–1000, default 50) and `page`, or use `since` / `before` with a date or an action ID for incremental reads.\n- Use `member` and `memberCreator` to limit what each action contains.\n- To list only the comments on a card, use `listCommentsInACard`.\n- The shape of `data` depends on the action type (for example, `text` for `commentCard` or `listBefore` / `listAfter` for `updateCard:idList`).\n- Trello's `format` query parameter is intentionally not exposed. The response is always an array of action objects, while `count` would return a single count object and break the declared output schema.\n\nAPI reference: [Get Actions on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-actions-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the card to list the actions of.' },
				filter: {
					type: 'string',
					description:
						'The [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/) to return. Use `all` to return all types. If empty, Trello uses its default filter for cards: `commentCard` and `updateCard:idList`.',
					default: '',
					enum: [
						'',
						'all',
						'addAttachmentToCard',
						'addChecklistToCard',
						'addMemberToBoard',
						'addMemberToCard',
						'addMemberToOrganization',
						'addToOrganizationBoard',
						'commentCard',
						'convertToCardFromCheckItem',
						'copyBoard',
						'copyCard',
						'copyCommentCard',
						'createBoard',
						'createCard',
						'createList',
						'createOrganization',
						'deleteAttachmentFromCard',
						'deleteBoardInvitation',
						'deleteCard',
						'deleteOrganizationInvitation',
						'disablePowerUp',
						'emailCard',
						'enablePowerUp',
						'makeAdminOfBoard',
						'makeNormalMemberOfBoard',
						'makeNormalMemberOfOrganization',
						'makeObserverOfBoard',
						'memberJoinedTrello',
						'moveCardFromBoard',
						'moveCardToBoard',
						'moveListFromBoard',
						'moveListToBoard',
						'removeChecklistFromCard',
						'removeFromOrganizationBoard',
						'removeMemberFromCard',
						'sortList',
						'unconfirmedBoardInvitation',
						'unconfirmedOrganizationInvitation',
						'updateBoard',
						'updateCard',
						'updateCard:closed',
						'updateCard:desc',
						'updateCard:idList',
						'updateCard:name',
						'updateCheckItemStateOnCard',
						'updateChecklist',
						'updateList',
						'updateList:closed',
						'updateList:name',
						'updateMember',
						'updateOrganization',
					],
				},
				member: {
					type: 'boolean',
					description:
						'Whether to return the member object for each action. Default: `true`.',
					default: true,
				},
				member_fields: {
					type: 'string',
					description: 'The member fields to return when the member object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object for each action. Default: `true`.',
					default: true,
				},
				memberCreator_fields: {
					type: 'string',
					description:
						'The member fields to return when the member creator object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				since: {
					type: 'string',
					description:
						'Only actions created since this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				before: {
					type: 'string',
					description:
						'Only actions created before this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				limit: {
					type: 'number',
					description: 'The number of actions to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				page: {
					type: 'number',
					description: 'The page of results to return, starting from `0`. Default: `0`.',
					default: 0,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
				reactions: {
					type: 'array',
					description:
						'The reactions on the action. Returned when reactions are requested.',
					items: {
						type: 'object',
						description: 'A reaction on the action.',
						properties: {
							id: { type: 'string', description: 'The ID of the reaction.' },
							idMember: {
								type: 'string',
								description: 'The ID of the member who reacted.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the action the reaction belongs to.',
							},
							idEmoji: {
								type: 'string',
								description: 'The unified code of the emoji.',
							},
							member: {
								type: 'object',
								description: 'The member who reacted.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
									},
								},
								required: [],
							},
							emoji: {
								type: 'object',
								description: 'The emoji used for the reaction.',
								properties: {
									unified: {
										type: 'string',
										description: 'The unified code of the emoji.',
									},
									native: {
										type: 'string',
										description: 'The native emoji character.',
									},
									name: { type: 'string', description: 'The name of the emoji.' },
									skinVariation: {
										type: 'string',
										description:
											'The skin tone variation of the emoji, if any.',
									},
									shortName: {
										type: 'string',
										description: 'The short name of the emoji.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getCustomFieldOptions',
		label: 'Get custom field options',
		description: 'Lists the options of a dropdown custom field.',
		context:
			'---\nname: getCustomFieldOptions\ndescription: Lists the options of a dropdown custom field.\n---\n\nLists the options of a dropdown (`list`) Trello custom field via `GET /customFields/{id}/options` and returns them as an array.\n\n- Only `list` custom fields have options. For other custom field types the call fails with `404 CUSTOM_FIELD_NOT_LIST_TYPE`.\n- The option text is in `value.text`. Use the option `_id` as `idValue` in `setACustomFieldOnACard`.\n\nAPI reference: [Get Options of Custom Field drop down](https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/#api-customfields-id-options-get). See also [Getting Started With Custom Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/).\n',
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description: 'The ID of the dropdown (`list`) custom field.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				_id: { type: 'string', description: 'The ID of the option.' },
				value: {
					type: 'object',
					description: 'The value of the option.',
					properties: {
						text: { type: 'string', description: 'The text of the option.' },
					},
					required: [],
				},
				color: { type: 'string', description: 'The color of the option.' },
				pos: { type: 'number', description: 'The position of the option.' },
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getListActions',
		label: 'Get list actions',
		description: 'Lists the actions (activities) of a list.',
		context:
			"---\nname: getListActions\ndescription: Lists the actions (activities) of a list.\n---\n\nLists the actions (activities) of a list. Calls `GET /lists/{id}/actions` and returns the actions as an array of action objects, newest first.\n\n- `filter` takes [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/); `all` returns every type. If it is empty, Trello applies its default filter for lists.\n- To see cards moved into or out of the list, set `filter` to `updateCard:idList`.\n- Use `member` and `memberCreator` to limit what each action contains.\n- Paginate with `limit` (0–1000, default 50) and `page`, or use `since` / `before` with a date or an action ID for incremental reads.\n- The shape of `data` depends on the action type (for example, `text` for `commentCard` or `listBefore` / `listAfter` for `updateCard:idList`).\n- Trello's `format` query parameter is intentionally not exposed. The response is always an array of action objects, while `count` would return a single count object and break the declared output schema.\n\nAPI reference: [Get Actions for a List](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-id-actions-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID of the list to list the actions of.' },
				filter: {
					type: 'string',
					description:
						'The [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/) to return. Use `all` to return all types. If empty, Trello uses its default filter for lists.',
					default: '',
					enum: [
						'',
						'all',
						'addAttachmentToCard',
						'addChecklistToCard',
						'addMemberToBoard',
						'addMemberToCard',
						'addMemberToOrganization',
						'addToOrganizationBoard',
						'commentCard',
						'convertToCardFromCheckItem',
						'copyBoard',
						'copyCard',
						'copyCommentCard',
						'createBoard',
						'createCard',
						'createList',
						'createOrganization',
						'deleteAttachmentFromCard',
						'deleteBoardInvitation',
						'deleteCard',
						'deleteOrganizationInvitation',
						'disablePowerUp',
						'emailCard',
						'enablePowerUp',
						'makeAdminOfBoard',
						'makeNormalMemberOfBoard',
						'makeNormalMemberOfOrganization',
						'makeObserverOfBoard',
						'memberJoinedTrello',
						'moveCardFromBoard',
						'moveCardToBoard',
						'moveListFromBoard',
						'moveListToBoard',
						'removeChecklistFromCard',
						'removeFromOrganizationBoard',
						'removeMemberFromCard',
						'sortList',
						'unconfirmedBoardInvitation',
						'unconfirmedOrganizationInvitation',
						'updateBoard',
						'updateCard',
						'updateCard:closed',
						'updateCard:desc',
						'updateCard:idList',
						'updateCard:name',
						'updateCheckItemStateOnCard',
						'updateChecklist',
						'updateList',
						'updateList:closed',
						'updateList:name',
						'updateMember',
						'updateOrganization',
					],
				},
				member: {
					type: 'boolean',
					description:
						'Whether to return the member object for each action. Default: `true`.',
					default: true,
				},
				member_fields: {
					type: 'string',
					description: 'The member fields to return when the member object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object for each action. Default: `true`.',
					default: true,
				},
				memberCreator_fields: {
					type: 'string',
					description:
						'The member fields to return when the member creator object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				since: {
					type: 'string',
					description:
						'Only actions created since this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				before: {
					type: 'string',
					description:
						'Only actions created before this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				limit: {
					type: 'number',
					description: 'The number of actions to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				page: {
					type: 'number',
					description: 'The page of results to return, starting from `0`. Default: `0`.',
					default: 0,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
				reactions: {
					type: 'array',
					description:
						'The reactions on the action. Returned when reactions are requested.',
					items: {
						type: 'object',
						description: 'A reaction on the action.',
						properties: {
							id: { type: 'string', description: 'The ID of the reaction.' },
							idMember: {
								type: 'string',
								description: 'The ID of the member who reacted.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the action the reaction belongs to.',
							},
							idEmoji: {
								type: 'string',
								description: 'The unified code of the emoji.',
							},
							member: {
								type: 'object',
								description: 'The member who reacted.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
									},
								},
								required: [],
							},
							emoji: {
								type: 'object',
								description: 'The emoji used for the reaction.',
								properties: {
									unified: {
										type: 'string',
										description: 'The unified code of the emoji.',
									},
									native: {
										type: 'string',
										description: 'The native emoji character.',
									},
									name: { type: 'string', description: 'The name of the emoji.' },
									skinVariation: {
										type: 'string',
										description:
											'The skin tone variation of the emoji, if any.',
									},
									shortName: {
										type: 'string',
										description: 'The short name of the emoji.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getMemberActions',
		label: 'Get member actions',
		description: 'Lists the actions (activities) of a member.',
		context:
			"---\nname: getMemberActions\ndescription: Lists the actions (activities) of a member.\n---\n\nLists the actions (activities) of a member. Calls `GET /members/{id}/actions` and returns the actions as an array of action objects, newest first.\n\n- Set `id` to `me` for the actions of the authenticated member, or use a member ID or username.\n- `filter` takes [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/); `all` returns every type. If it is empty, Trello applies its default filter for members. For example, `createBoard,copyBoard` lists the boards the member created or copied.\n- Use `member` and `memberCreator` to limit what each action contains.\n- Paginate with `limit` (0–1000, default 50) and `page`, or use `since` / `before` with a date or an action ID for incremental reads.\n- The shape of `data` depends on the action type (for example, `text` for `commentCard` or `listBefore` / `listAfter` for `updateCard:idList`).\n- Trello's `format` query parameter is intentionally not exposed. The response is always an array of action objects, while `count` would return a single count object and break the declared output schema.\n\nAPI reference: [Get a Member's Actions](https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-members-id-actions-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description:
						'The ID or username of the member to list the actions of. Use `me` for the authenticated member.',
				},
				filter: {
					type: 'string',
					description:
						'The [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/) to return. Use `all` to return all types. If empty, Trello uses its default filter for members.',
					default: '',
					enum: [
						'',
						'all',
						'addAttachmentToCard',
						'addChecklistToCard',
						'addMemberToBoard',
						'addMemberToCard',
						'addMemberToOrganization',
						'addToOrganizationBoard',
						'commentCard',
						'convertToCardFromCheckItem',
						'copyBoard',
						'copyCard',
						'copyCommentCard',
						'createBoard',
						'createCard',
						'createList',
						'createOrganization',
						'deleteAttachmentFromCard',
						'deleteBoardInvitation',
						'deleteCard',
						'deleteOrganizationInvitation',
						'disablePowerUp',
						'emailCard',
						'enablePowerUp',
						'makeAdminOfBoard',
						'makeNormalMemberOfBoard',
						'makeNormalMemberOfOrganization',
						'makeObserverOfBoard',
						'memberJoinedTrello',
						'moveCardFromBoard',
						'moveCardToBoard',
						'moveListFromBoard',
						'moveListToBoard',
						'removeChecklistFromCard',
						'removeFromOrganizationBoard',
						'removeMemberFromCard',
						'sortList',
						'unconfirmedBoardInvitation',
						'unconfirmedOrganizationInvitation',
						'updateBoard',
						'updateCard',
						'updateCard:closed',
						'updateCard:desc',
						'updateCard:idList',
						'updateCard:name',
						'updateCheckItemStateOnCard',
						'updateChecklist',
						'updateList',
						'updateList:closed',
						'updateList:name',
						'updateMember',
						'updateOrganization',
					],
				},
				member: {
					type: 'boolean',
					description:
						'Whether to return the member object for each action. Default: `true`.',
					default: true,
				},
				member_fields: {
					type: 'string',
					description: 'The member fields to return when the member object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object for each action. Default: `true`.',
					default: true,
				},
				memberCreator_fields: {
					type: 'string',
					description:
						'The member fields to return when the member creator object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				since: {
					type: 'string',
					description:
						'Only actions created since this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				before: {
					type: 'string',
					description:
						'Only actions created before this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				limit: {
					type: 'number',
					description: 'The number of actions to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				page: {
					type: 'number',
					description: 'The page of results to return, starting from `0`. Default: `0`.',
					default: 0,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
				reactions: {
					type: 'array',
					description:
						'The reactions on the action. Returned when reactions are requested.',
					items: {
						type: 'object',
						description: 'A reaction on the action.',
						properties: {
							id: { type: 'string', description: 'The ID of the reaction.' },
							idMember: {
								type: 'string',
								description: 'The ID of the member who reacted.',
							},
							idModel: {
								type: 'string',
								description: 'The ID of the action the reaction belongs to.',
							},
							idEmoji: {
								type: 'string',
								description: 'The unified code of the emoji.',
							},
							member: {
								type: 'object',
								description: 'The member who reacted.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
									},
								},
								required: [],
							},
							emoji: {
								type: 'object',
								description: 'The emoji used for the reaction.',
								properties: {
									unified: {
										type: 'string',
										description: 'The unified code of the emoji.',
									},
									native: {
										type: 'string',
										description: 'The native emoji character.',
									},
									name: { type: 'string', description: 'The name of the emoji.' },
									skinVariation: {
										type: 'string',
										description:
											'The skin tone variation of the emoji, if any.',
									},
									shortName: {
										type: 'string',
										description: 'The short name of the emoji.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'getOrganizationExports',
		label: 'Get workspace exports',
		description: 'Lists the export jobs of a workspace.',
		context:
			"---\nname: getOrganizationExports\ndescription: Lists the export jobs of a Workspace.\n---\n\nLists the export jobs of a Trello Workspace via `GET /organizations/{id}/exports` and returns them as an array.\n\n- Use this to follow an export started with `createExportForOrganizations`: the job is finished once `status.stage` is `Export_completed` and `exportUrl` is filled in.\n- The exported file itself is a ZIP archive served from `exportUrl`. Downloading binary content is not supported by endpoints.\n- The `exportUrl` is a relative path on `https://api.trello.com` that requires authentication.\n- Exports are a paid Workspace feature. Trello rejects the call on Workspaces without the required plan.\n\nAPI reference: [Retrieve Organization's Exports](https://developer.atlassian.com/cloud/trello/rest/api-group-organizations/#api-organizations-id-exports-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short name of the workspace.' },
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the export job.' },
				status: {
					type: 'object',
					description: 'The status of the export job.',
					properties: {
						stage: {
							type: 'string',
							description:
								'The stage of the export, for example `Export_queued` or `Export_completed`.',
						},
						finished: {
							type: 'boolean',
							description: 'Whether the export has finished.',
						},
						attempts: {
							type: 'number',
							description: 'The number of attempts made to produce the export.',
						},
						progress: {
							type: 'number',
							description:
								'The progress counter of the export job, as reported by Trello.',
						},
						total: {
							type: 'number',
							description:
								'The total counter of the export job, as reported by Trello.',
						},
					},
					required: [],
				},
				startedAt: { type: 'string', description: 'When the export job started.' },
				size: {
					type: 'number',
					description: 'The size (bytes) of the exported file, once it is available.',
				},
				exportUrl: {
					type: 'string',
					description:
						'The API path of the exported ZIP file, relative to `https://api.trello.com`. Requires authentication. Empty until the export is completed.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'listAttachments',
		label: 'List attachments',
		description: 'Lists the attachments on a card.',
		context:
			"---\nname: listAttachments\ndescription: Lists the attachments on a card.\n---\n\nLists the attachments on a Trello card via `GET /cards/{id}/attachments` and returns them as an array of attachment objects.\n\n- Set `filter` to `cover` to return only the attachment used as the card cover.\n- `isUpload` tells uploaded files apart from links. For uploaded files, `url` needs the connection's authorization to download, which endpoints do not support.\n\nAPI reference: [Get Attachments on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-attachments-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the card.' },
				fields: {
					type: 'string',
					description: 'The attachment fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'bytes',
						'date',
						'edgeColor',
						'idMember',
						'isUpload',
						'mimeType',
						'name',
						'previews',
						'url',
					],
				},
				filter: {
					type: 'string',
					description:
						'Which attachments to return. Use `cover` to return only the cover attachment. Default: `false`.',
					default: '',
					enum: ['', 'false', 'cover'],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the attachment.' },
				bytes: { type: 'number', description: 'The size of the attachment in bytes.' },
				date: { type: 'string', description: 'When the attachment was added.' },
				edgeColor: {
					type: 'string',
					description: 'The extracted edge color, for image attachments.',
				},
				idMember: {
					type: 'string',
					description: 'The ID of the member who added the attachment.',
				},
				isUpload: { type: 'boolean', description: 'Whether the attachment was uploaded.' },
				mimeType: { type: 'string', description: 'The MIME type of the attachment.' },
				name: { type: 'string', description: 'The name of the attachment.' },
				pos: {
					type: 'number',
					description: 'The position of the attachment in the attachments list.',
				},
				previews: {
					type: 'array',
					description: 'Generated previews of an image attachment in various sizes.',
					items: {
						type: 'object',
						description: 'A generated preview of the image.',
						properties: {
							id: { type: 'string', description: 'The ID of the preview.' },
							scaled: {
								type: 'boolean',
								description: 'Whether the preview is scaled.',
							},
							url: { type: 'string', description: 'The URL of the preview.' },
							bytes: {
								type: 'number',
								description: 'The size of the preview in bytes.',
							},
							height: {
								type: 'number',
								description: 'The height of the preview in pixels.',
							},
							width: {
								type: 'number',
								description: 'The width of the preview in pixels.',
							},
						},
						required: [],
					},
				},
				url: { type: 'string', description: 'The URL of the attachment.' },
				fileName: { type: 'string', description: 'The file name of the attachment.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the attachment.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'listCommentsInACard',
		label: 'List comments in a card',
		description: 'Lists the comments on a card.',
		context:
			'---\nname: listCommentsInACard\ndescription: Lists the comments on a card.\n---\n\nLists the comments on a Trello card via `GET /cards/{id}/actions` with `filter` = `commentCard`, and returns them as an array of comment actions, newest first.\n\n- The comment text is in `data.text`. The comment ID is the action `id`. Use it with `editACommentInACard` and `deleteACommentInACard`.\n- To list other action types on a card, use `getCardActions`.\n- Use `member` and `memberCreator` to limit what each action contains.\n- Paginate with `limit` (0–1000, default 50) and `page`, or use `since` / `before` with a date or an action ID for incremental reads.\n\nAPI reference: [Get Actions on a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-actions-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the card.' },
				member: {
					type: 'boolean',
					description:
						'Whether to return the member object for each action. Default: `true`.',
					default: true,
				},
				member_fields: {
					type: 'string',
					description: 'The member fields to return when the member object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object for each action. Default: `true`.',
					default: true,
				},
				memberCreator_fields: {
					type: 'string',
					description:
						'The member fields to return when the member creator object is returned.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				since: {
					type: 'string',
					description:
						'Only actions created since this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				before: {
					type: 'string',
					description:
						'Only actions created before this date are returned. A date in the `YYYY-MM-DDThh:mm:ssZ` format or an action ID.',
				},
				limit: {
					type: 'number',
					description: 'The number of actions to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				page: {
					type: 'number',
					description: 'The page of results to return, starting from `0`. Default: `0`.',
					default: 0,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the action.' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the action.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the action. The available keys depend on the action type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment actions.',
						},
						card: {
							type: 'object',
							description: 'The card the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								idList: {
									type: 'string',
									description: 'The ID of the list the card is in.',
								},
								closed: {
									type: 'boolean',
									description: 'Whether the card is archived.',
								},
								desc: {
									type: 'string',
									description: 'The description of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								pos: {
									type: 'number',
									description: 'The position of the card in the list.',
								},
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the action relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listBefore: {
							type: 'object',
							description:
								'The list the card was in before it was moved, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						listAfter: {
							type: 'object',
							description:
								'The list the card was moved to, for `updateCard:idList` actions.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by an update action.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				type: {
					type: 'string',
					description:
						'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
				},
				date: { type: 'string', description: 'When the action occurred.' },
				limits: {
					type: 'object',
					description: 'The limits that apply to the action.',
					properties: {
						reactions: {
							type: 'object',
							description: 'The reaction limits of the action.',
							properties: {
								perAction: {
									type: 'object',
									description: 'The limit of reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								uniquePerAction: {
									type: 'object',
									description: 'The limit of unique reactions per action.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				display: {
					type: 'object',
					description:
						'Information to render the action in a UI. Returned when display is requested.',
					properties: {
						translationKey: {
							type: 'string',
							description: 'The translation key of the action description.',
						},
						entities: {
							type: 'object',
							description:
								'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the action.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the action.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the action is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the action.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the action.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the action.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the action to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the action.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the action.',
						},
					},
					required: [],
				},
				member: {
					type: 'object',
					description: 'The member the action relates to, for member-related actions.',
					properties: {
						id: { type: 'string', description: 'The ID of the member.' },
						activityBlocked: {
							type: 'boolean',
							description: 'Whether the activity of the member is blocked.',
						},
						avatarHash: {
							type: 'string',
							description: 'The hash of the avatar of the member.',
						},
						avatarUrl: {
							type: 'string',
							description: 'The URL of the avatar of the member.',
						},
						fullName: { type: 'string', description: 'The full name of the member.' },
						idMemberReferrer: {
							type: 'string',
							description: 'The ID of the member who referred the member to Trello.',
						},
						initials: { type: 'string', description: 'The initials of the member.' },
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: { type: 'string', description: 'The username of the member.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'removeALabelFromACard',
		label: 'Remove a label from a card',
		description: 'Removes a label from a card.',
		context:
			'---\nname: removeALabelFromACard\ndescription: Removes a label from a card.\n---\n\nRemoves a label from a Trello card via `DELETE /cards/{id}/idLabels/{idLabel}`.\n\n- This only detaches the label from the card. The label itself stays on the board.\n- Find the labels on a card with `getACard` (`fields` includes `idLabels`).\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Remove a Label from a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-idlabels-idlabel-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID or short link of the card.' },
				idLabel: {
					type: 'string',
					description: 'The ID of the label to remove from the card.',
				},
			},
			required: ['id', 'idLabel'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'removeAMemberFromACard',
		label: 'Remove a member from a card',
		description: 'Removes a member from a card.',
		context:
			'---\nname: removeAMemberFromACard\ndescription: Removes a member from a card.\n---\n\nRemoves an assigned member from a Trello card via `DELETE /cards/{id}/idMembers/{idMember}`.\n\n- This only unassigns the member from the card. Their board membership is not affected.\n- Find the members assigned to a card with `getACard` (`members` = `true`).\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Remove a Member from a Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-idmembers-idmember-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID or short link of the card.' },
				idMember: {
					type: 'string',
					description: 'The ID of the member to remove from the card.',
				},
			},
			required: ['id', 'idMember'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'removeAnItemFromChecklist',
		label: 'Remove an item from a checklist',
		description: 'Deletes an item from a checklist permanently.',
		context:
			'---\nname: removeAnItemFromChecklist\ndescription: Permanently deletes an item from a checklist.\n---\n\nPermanently deletes an item from a Trello checklist via `DELETE /checklists/{id}/checkItems/{idCheckItem}`. This cannot be undone.\n\n- To mark an item as done instead of deleting it, use `editAChecklistItem` with `state` = `complete`.\n- Trello returns no meaningful payload on success.\n\nAPI reference: [Delete Checkitem from Checklist](https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/#api-checklists-id-checkitems-idcheckitem-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the checklist the item belongs to.' },
				idCheckItem: {
					type: 'string',
					description:
						'The ID of the checklist item to delete. Find it with `getACardChecklists`.',
				},
			},
			required: ['id', 'idCheckItem'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'retrieveLabels',
		label: 'List labels',
		description: 'Lists the labels on a board.',
		context:
			'---\nname: retrieveLabels\ndescription: Lists the labels on a board.\n---\n\nLists the labels defined on a Trello board via `GET /boards/{id}/labels` and returns them as an array of label objects.\n\n- Trello returns up to 50 labels by default. Set `limit` (max 1000) to get more.\n- A label with an empty `color` is not shown on the front of cards.\n\nAPI reference: [Get Labels on a Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-labels-get).\n',
		accounts: { trello: { scope: [] } },
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
				id: { type: 'string', description: 'The ID or short link of the board.' },
				fields: {
					type: 'string',
					description: 'The label fields to return. Default: `all`.',
					default: '',
					enum: ['', 'all', 'color', 'idBoard', 'name', 'uses'],
				},
				limit: {
					type: 'number',
					description: 'The number of labels to return, from 0 to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the label.' },
				idBoard: { type: 'string', description: 'The ID of the board the label is on.' },
				name: { type: 'string', description: 'The name displayed for the label.' },
				color: {
					type: 'string',
					description:
						'The color of the label. Empty means no color and the label is not shown on the front of cards.',
				},
				uses: { type: 'number', description: 'The number of cards the label is used on.' },
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'searchBoards',
		label: 'Search items',
		description: 'Searches for boards, cards, members, workspaces, and actions.',
		context:
			'---\nname: searchBoards\ndescription: Searches Trello for boards, cards, members, Workspaces, and actions.\n---\n\nSearches Trello via `GET /search` and returns one result array per object type in a single object.\n\n- Despite the name, this endpoint is not limited to boards. `modelTypes` selects what is searched: `boards`, `cards`, `members`, `organizations` (Workspaces), `actions`, or `all`. The response always carries one key per searched type.\n- `query` accepts Trello [search operators](https://support.atlassian.com/trello/docs/searching-for-cards-all-boards/), for example `board:"Roadmap" due:week`.\n- Nested objects are returned only when requested: `card_board` and `card_list` add `board` and `list` to each card, and `board_organization` adds `organization` to each board.\n- Narrow the scope with `idBoards` (also accepts `mine`), `idOrganizations`, or `idCards`.\n- Each type has its own `*_limit` and `*_fields` parameters. Only card results can be paged, through `cards_page`.\n- `partial` matches words that start with the query terms, which is what you want for type-ahead style lookups.\n- To search only for members with a dedicated ranking, Trello also offers `GET /search/members`, which is not covered by this endpoint.\n\nAPI reference: [Search Trello](https://developer.atlassian.com/cloud/trello/rest/api-group-search/#api-search-get).\n',
		accounts: { trello: { scope: [] } },
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
				query: {
					type: 'string',
					description:
						'The search query, 1 to 16384 characters long. It supports Trello [search operators](https://support.atlassian.com/trello/docs/searching-for-cards-all-boards/) such as `board:`, `list:`, or `due:`.',
					minimum: 1,
					maximum: 16_384,
				},
				modelTypes: {
					type: 'string',
					description: 'The types of Trello objects to search. Default: `all`.',
					default: '',
					enum: ['', 'all', 'actions', 'boards', 'cards', 'members', 'organizations'],
				},
				partial: {
					type: 'boolean',
					description:
						'Whether to match objects whose content starts with any word of the query. By default Trello matches whole words only. Default: `false`.',
					default: false,
				},
				idBoards: {
					type: 'array',
					description:
						'The boards to search in. Use `mine` to search the boards of the authenticated member.',
					items: {
						type: 'string',
						description: 'The ID of a board to search in, or `mine`.',
					},
				},
				idOrganizations: {
					type: 'array',
					description: 'The workspaces to search in.',
					items: { type: 'string', description: 'The ID of a workspaces to search in.' },
				},
				idCards: {
					type: 'array',
					description: 'The cards to search in.',
					items: { type: 'string', description: 'The ID of a card to search in.' },
				},
				board_fields: {
					type: 'string',
					description:
						'The board fields to return for board results. Default: `name`, `idOrganization`.',
					default: '',
					enum: [
						'',
						'all',
						'closed',
						'dateLastActivity',
						'dateLastView',
						'desc',
						'descData',
						'idOrganization',
						'invitations',
						'invited',
						'labelNames',
						'memberships',
						'name',
						'pinned',
						'powerUps',
						'prefs',
						'shortLink',
						'shortUrl',
						'starred',
						'subscribed',
						'url',
					],
				},
				boards_limit: {
					type: 'number',
					description: 'The number of boards to return, up to 1000. Default: `10`.',
					default: 10,
					maximum: 1000,
				},
				board_organization: {
					type: 'boolean',
					description:
						'Whether to include the parent workspaces with board results. Default: `false`.',
					default: false,
				},
				card_fields: {
					type: 'string',
					description: 'The card fields to return for card results. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'badges',
						'checkItemStates',
						'closed',
						'dateLastActivity',
						'desc',
						'descData',
						'due',
						'idAttachmentCover',
						'idBoard',
						'idChecklists',
						'idLabels',
						'idList',
						'idMembers',
						'idMembersVoted',
						'idShort',
						'labels',
						'manualCoverAttachment',
						'name',
						'pos',
						'shortLink',
						'shortUrl',
						'subscribed',
						'url',
					],
				},
				cards_limit: {
					type: 'number',
					description: 'The number of cards to return, up to 1000. Default: `10`.',
					default: 10,
					maximum: 1000,
				},
				cards_page: {
					type: 'number',
					description:
						'The page of card results to return, starting from `0`, up to 100. Default: `0`.',
					default: 0,
					maximum: 100,
				},
				card_board: {
					type: 'boolean',
					description:
						'Whether to include the parent board with card results. Default: `false`.',
					default: false,
				},
				card_list: {
					type: 'boolean',
					description:
						'Whether to include the parent list with card results. Default: `false`.',
					default: false,
				},
				card_members: {
					type: 'boolean',
					description:
						'Whether to include the member objects with card results. Default: `false`.',
					default: false,
				},
				card_stickers: {
					type: 'boolean',
					description:
						'Whether to include the sticker objects with card results. Default: `false`.',
					default: false,
				},
				card_attachments: {
					type: 'string',
					description:
						'Whether to include the attachment objects with card results. Default: `false`.',
					default: '',
					enum: ['', 'false', 'true', 'cover'],
				},
				organization_fields: {
					type: 'string',
					description:
						'The workspaces fields to return for workspaces results. Default: `name`, `displayName`.',
					default: '',
					enum: [
						'',
						'all',
						'billableMemberCount',
						'desc',
						'descData',
						'displayName',
						'idBoards',
						'invitations',
						'invited',
						'logoHash',
						'memberships',
						'name',
						'powerUps',
						'prefs',
						'premiumFeatures',
						'products',
						'url',
						'website',
					],
				},
				organizations_limit: {
					type: 'number',
					description: 'The number of workspaces to return, up to 1000. Default: `10`.',
					default: 10,
					maximum: 1000,
				},
				member_fields: {
					type: 'string',
					description:
						'The member fields to return for member results. Default: `avatarHash`, `fullName`, `initials`, `username`, `confirmed`.',
					default: '',
					enum: [
						'',
						'all',
						'avatarHash',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				members_limit: {
					type: 'number',
					description: 'The number of members to return, up to 1000. Default: `10`.',
					default: 10,
					maximum: 1000,
				},
			},
			required: ['query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				options: {
					type: 'object',
					description: 'The options Trello applied to the search.',
					properties: {
						terms: {
							type: 'array',
							description: 'The terms parsed from the query.',
							items: {
								type: 'object',
								description: 'A term parsed from the query.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						modifiers: {
							type: 'array',
							description: 'The modifiers parsed from the query.',
							items: {
								type: 'object',
								description: 'A modifier parsed from the query.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						modelTypes: {
							type: 'array',
							description: 'The object types that were searched.',
							items: {
								type: 'string',
								description: 'An object type that was searched.',
							},
						},
						partial: {
							type: 'boolean',
							description: 'Whether partial matching was applied.',
						},
					},
					required: [],
				},
				boards: {
					type: 'array',
					description:
						'The boards that matched the query. Returned when boards are searched.',
					items: {
						type: 'object',
						description: 'A board that matched the query.',
						properties: {
							id: { type: 'string', description: 'The ID of the board.' },
							name: { type: 'string', description: 'The name of the board.' },
							desc: { type: 'string', description: 'The description of the board.' },
							descData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the description, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							closed: {
								type: 'boolean',
								description: 'Whether the board is closed (archived).',
							},
							idMemberCreator: {
								type: 'string',
								description: 'The ID of the member who created the board.',
							},
							idOrganization: {
								type: 'string',
								description: 'The ID of the Workspace the board belongs to.',
							},
							pinned: {
								type: 'boolean',
								description: 'Whether the board is pinned.',
							},
							url: {
								type: 'string',
								description: 'The persistent URL of the board.',
							},
							shortUrl: {
								type: 'string',
								description: 'The URL of the board using only its short ID.',
							},
							shortLink: {
								type: 'string',
								description: 'The 8-character short ID of the board.',
							},
							prefs: {
								type: 'object',
								description: 'The settings of the board.',
								properties: {
									permissionLevel: {
										type: 'string',
										description:
											'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
									},
									hideVotes: {
										type: 'boolean',
										description:
											'Whether the Voting Power-Up hides who voted on cards.',
									},
									voting: {
										type: 'string',
										description:
											'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
									},
									comments: {
										type: 'string',
										description:
											'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
									},
									invitations: {
										type: 'string',
										description:
											'Who can invite people to the board: `admins` or `members`.',
									},
									selfJoin: {
										type: 'boolean',
										description:
											'Whether Workspace members can join the board themselves.',
									},
									cardCovers: {
										type: 'boolean',
										description: 'Whether card covers are displayed.',
									},
									isTemplate: {
										type: 'boolean',
										description: 'Whether the board is a template.',
									},
									cardAging: {
										type: 'string',
										description: 'The card aging mode: `pirate` or `regular`.',
									},
									calendarFeedEnabled: {
										type: 'boolean',
										description: 'Whether the calendar feed is enabled.',
									},
									background: {
										type: 'string',
										description:
											'The ID of a custom background or the name of a background color.',
									},
									backgroundColor: {
										type: 'string',
										description:
											'The hex color of the background, if a color is used.',
									},
									backgroundImage: {
										type: 'string',
										description:
											'The URL of the background image, if an image is used.',
									},
									backgroundImageScaled: {
										type: 'array',
										description: 'Scaled versions of the background image.',
										items: {
											type: 'object',
											description:
												'A scaled version of the background image.',
											properties: {
												width: {
													type: 'number',
													description:
														'The width of the image in pixels.',
												},
												height: {
													type: 'number',
													description:
														'The height of the image in pixels.',
												},
												url: {
													type: 'string',
													description: 'The URL of the scaled image.',
												},
											},
											required: [],
										},
									},
									backgroundTile: {
										type: 'boolean',
										description: 'Whether the background image is tiled.',
									},
									backgroundBrightness: {
										type: 'string',
										description:
											'The brightness of the background: `dark` or `light`.',
									},
									backgroundBottomColor: {
										type: 'string',
										description:
											'The hex color at the bottom of the background.',
									},
									backgroundTopColor: {
										type: 'string',
										description: 'The hex color at the top of the background.',
									},
									canBePublic: {
										type: 'boolean',
										description: 'Whether the board can be made public.',
									},
									canBeEnterprise: {
										type: 'boolean',
										description:
											'Whether the board can be made visible to the Enterprise.',
									},
									canBeOrg: {
										type: 'boolean',
										description:
											'Whether the board can be made visible to the Workspace.',
									},
									canBePrivate: {
										type: 'boolean',
										description: 'Whether the board can be made private.',
									},
									canInvite: {
										type: 'boolean',
										description:
											'Whether the current member can invite people to the board.',
									},
								},
								required: [],
							},
							labelNames: {
								type: 'object',
								description: 'The label names of the board, keyed by label color.',
								properties: {
									green: {
										type: 'string',
										description: 'The name of the green label.',
									},
									yellow: {
										type: 'string',
										description: 'The name of the yellow label.',
									},
									orange: {
										type: 'string',
										description: 'The name of the orange label.',
									},
									red: {
										type: 'string',
										description: 'The name of the red label.',
									},
									purple: {
										type: 'string',
										description: 'The name of the purple label.',
									},
									blue: {
										type: 'string',
										description: 'The name of the blue label.',
									},
									sky: {
										type: 'string',
										description: 'The name of the sky label.',
									},
									lime: {
										type: 'string',
										description: 'The name of the lime label.',
									},
									pink: {
										type: 'string',
										description: 'The name of the pink label.',
									},
									black: {
										type: 'string',
										description: 'The name of the black label.',
									},
								},
								required: [],
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the board.',
								properties: {
									attachments: {
										type: 'object',
										description: 'Attachment limits.',
										properties: {
											perBoard: {
												type: 'object',
												description: 'The limit of attachments per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									boards: {
										type: 'object',
										description: 'Board limits.',
										properties: {
											totalMembersPerBoard: {
												type: 'object',
												description: 'The limit of members per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									cards: {
										type: 'object',
										description: 'Card limits.',
										properties: {
											openPerBoard: {
												type: 'object',
												description: 'The limit of open cards per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
											totalPerBoard: {
												type: 'object',
												description: 'The limit of all cards per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									checklists: {
										type: 'object',
										description: 'Checklist limits.',
										properties: {
											perBoard: {
												type: 'object',
												description: 'The limit of checklists per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									customFields: {
										type: 'object',
										description: 'Custom field limits.',
										properties: {
											perBoard: {
												type: 'object',
												description:
													'The limit of custom fields per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									labels: {
										type: 'object',
										description: 'Label limits.',
										properties: {
											perBoard: {
												type: 'object',
												description: 'The limit of labels per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									lists: {
										type: 'object',
										description: 'List limits.',
										properties: {
											openPerBoard: {
												type: 'object',
												description: 'The limit of open lists per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
											totalPerBoard: {
												type: 'object',
												description: 'The limit of all lists per board.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							starred: {
								type: 'boolean',
								description: 'Whether the board is starred by the current member.',
							},
							memberships: {
								type: 'array',
								description: 'The relationships of members to the board.',
								items: {
									type: 'object',
									description: 'The relationship of a member to the board.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the membership.',
										},
										idMember: {
											type: 'string',
											description: 'The ID of the member.',
										},
										memberType: {
											type: 'string',
											description:
												'The role of the member on the board: `admin`, `normal`, or `observer`.',
										},
										unconfirmed: {
											type: 'boolean',
											description:
												'Whether the member has not yet confirmed their account.',
										},
										deactivated: {
											type: 'boolean',
											description: 'Whether the member is deactivated.',
										},
									},
									required: [],
								},
							},
							subscribed: {
								type: 'boolean',
								description:
									'Whether the current member is subscribed to the board.',
							},
							invited: {
								type: 'boolean',
								description: 'Whether the current member is invited to the board.',
							},
							invitations: {
								type: 'array',
								description: 'Pending invitations to the board.',
								items: {
									type: 'object',
									description: 'A pending invitation to the board.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							powerUps: {
								type: 'array',
								description: 'The Power-Ups enabled on the board.',
								items: {
									type: 'string',
									description: 'The name of a Power-Up enabled on the board.',
								},
							},
							dateLastActivity: {
								type: 'string',
								description: 'When the last activity on the board occurred.',
							},
							dateLastView: {
								type: 'string',
								description: 'When the current member last viewed the board.',
							},
							idTags: {
								type: 'array',
								description:
									'The IDs of the collections (tags) the board belongs to.',
								items: {
									type: 'string',
									description: 'The ID of a collection the board belongs to.',
								},
							},
							datePluginDisable: {
								type: 'string',
								description: 'When Power-Ups were disabled on the board, if ever.',
							},
							creationMethod: {
								type: 'string',
								description: 'How the board was created.',
							},
							ixUpdate: {
								type: 'string',
								description: 'An internal update counter of the board.',
							},
							templateGallery: {
								type: 'string',
								description:
									'The template gallery the board is published in, if any.',
							},
							enterpriseOwned: {
								type: 'boolean',
								description: 'Whether the board is owned by an Enterprise.',
							},
							organization: {
								type: 'object',
								description:
									'The Workspace the board belongs to. Returned when the board Workspace is requested.',
								properties: {
									id: { type: 'string', description: 'The ID of the Workspace.' },
									name: {
										type: 'string',
										description: 'The short name of the Workspace.',
									},
									displayName: {
										type: 'string',
										description: 'The display name of the Workspace.',
									},
									desc: {
										type: 'string',
										description: 'The description of the Workspace.',
									},
									url: {
										type: 'string',
										description: 'The URL of the Workspace.',
									},
									website: {
										type: 'string',
										description: 'The website of the Workspace.',
									},
									logoHash: {
										type: 'string',
										description: 'The hash of the Workspace logo.',
									},
									logoUrl: {
										type: 'string',
										description: 'The URL of the Workspace logo.',
									},
									idEnterprise: {
										type: 'string',
										description:
											'The ID of the Enterprise the Workspace belongs to, if any.',
									},
									offering: {
										type: 'string',
										description: 'The Trello offering of the Workspace.',
									},
									premiumFeatures: {
										type: 'array',
										description:
											'The premium features available to the Workspace.',
										items: {
											type: 'string',
											description: 'The name of a premium feature.',
										},
									},
									dateLastActivity: {
										type: 'string',
										description:
											'When the last activity in the Workspace occurred.',
									},
									prefs: {
										type: 'object',
										description: 'The settings of the Workspace.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									pluginData: {
										type: 'array',
										description: 'The Power-Up data of the Workspace.',
										items: {
											type: 'object',
											description: 'Data stored by a Power-Up.',
											properties: {
												id: {
													type: 'string',
													description: 'The ID of the plugin data.',
												},
												idPlugin: {
													type: 'string',
													description: 'The ID of the Power-Up.',
												},
												scope: {
													type: 'string',
													description:
														'The scope of the data: `board`, `card`, `member`, or `organization`.',
												},
												idModel: {
													type: 'string',
													description:
														'The ID of the model the data is stored on.',
												},
												value: {
													type: 'string',
													description:
														'The stored data, as a JSON string.',
												},
												access: {
													type: 'string',
													description:
														'The access level of the data: `private` or `shared`.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				cards: {
					type: 'array',
					description:
						'The cards that matched the query. Returned when cards are searched.',
					items: {
						type: 'object',
						description: 'A card that matched the query.',
						properties: {
							id: { type: 'string', description: 'The ID of the card.' },
							badges: {
								type: 'object',
								description: 'Information displayed on the front of the card.',
								properties: {
									votes: {
										type: 'number',
										description: 'The number of votes on the card.',
									},
									viewingMemberVoted: {
										type: 'boolean',
										description:
											'Whether the current member voted on the card.',
									},
									subscribed: {
										type: 'boolean',
										description:
											'Whether the current member is subscribed to the card.',
									},
									fogbugz: {
										type: 'string',
										description: 'The FogBugz case linked to the card, if any.',
									},
									checkItems: {
										type: 'number',
										description: 'The number of checklist items on the card.',
									},
									checkItemsChecked: {
										type: 'number',
										description:
											'The number of completed checklist items on the card.',
									},
									comments: {
										type: 'number',
										description: 'The number of comments on the card.',
									},
									attachments: {
										type: 'number',
										description: 'The number of attachments on the card.',
									},
									description: {
										type: 'boolean',
										description: 'Whether the card has a description.',
									},
									due: {
										type: 'string',
										description: 'The due date of the card.',
									},
									dueComplete: {
										type: 'boolean',
										description:
											'Whether the due date of the card is marked complete.',
									},
									start: {
										type: 'string',
										description: 'The start date of the card.',
									},
									location: {
										type: 'boolean',
										description: 'Whether the card has a location.',
									},
									attachmentsByType: {
										type: 'object',
										description:
											'The number of attachments on the card by type.',
										properties: {
											trello: {
												type: 'object',
												description:
													'The number of attachments linking to Trello objects.',
												properties: {
													board: {
														type: 'number',
														description:
															'The number of attachments linking to Trello boards.',
													},
													card: {
														type: 'number',
														description:
															'The number of attachments linking to Trello cards.',
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
							checkItemStates: {
								type: 'array',
								description: 'The states of the checklist items on the card.',
								items: {
									type: 'object',
									description: 'The state of a checklist item.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							closed: {
								type: 'boolean',
								description: 'Whether the card is closed (archived).',
							},
							dueComplete: {
								type: 'boolean',
								description: 'Whether the due date of the card is marked complete.',
							},
							dateLastActivity: {
								type: 'string',
								description: 'When the last activity on the card occurred.',
							},
							desc: { type: 'string', description: 'The description of the card.' },
							descData: {
								type: 'object',
								description:
									'Data needed to display custom emoji used in the description, if any.',
								properties: {
									emoji: {
										type: 'object',
										description:
											'Custom emoji used in the text, keyed by emoji name.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							due: { type: 'string', description: 'The due date of the card.' },
							dueReminder: {
								type: 'number',
								description:
									'The number of minutes before the due date when a reminder is sent.',
							},
							email: {
								type: 'string',
								description: 'The email address of the card, if any.',
							},
							idBoard: {
								type: 'string',
								description: 'The ID of the board the card is on.',
							},
							idChecklists: {
								type: 'array',
								description: 'The IDs of the checklists on the card.',
								items: {
									type: 'string',
									description: 'The ID of a checklist on the card.',
								},
							},
							idList: {
								type: 'string',
								description: 'The ID of the list the card is in.',
							},
							idMembers: {
								type: 'array',
								description: 'The IDs of the members assigned to the card.',
								items: {
									type: 'string',
									description: 'The ID of a member assigned to the card.',
								},
							},
							idMembersVoted: {
								type: 'array',
								description: 'The IDs of the members who voted on the card.',
								items: {
									type: 'string',
									description: 'The ID of a member who voted on the card.',
								},
							},
							idShort: {
								type: 'number',
								description: 'The numeric ID of the card, unique within the board.',
							},
							idAttachmentCover: {
								type: 'string',
								description:
									'The ID of the attachment used as the card cover, if any.',
							},
							manualCoverAttachment: {
								type: 'boolean',
								description:
									'Whether the card cover was selected manually by the user.',
							},
							labels: {
								type: 'array',
								description: 'The labels on the card.',
								items: {
									type: 'object',
									description: 'A label on the card.',
									properties: {
										id: { type: 'string', description: 'The ID of the label.' },
										idBoard: {
											type: 'string',
											description: 'The ID of the board the label is on.',
										},
										name: {
											type: 'string',
											description: 'The name displayed for the label.',
										},
										color: {
											type: 'string',
											description:
												'The color of the label. Empty means no color and the label is not shown on the front of cards.',
										},
										uses: {
											type: 'number',
											description:
												'The number of cards the label is used on.',
										},
									},
									required: [],
								},
							},
							idLabels: {
								type: 'array',
								description: 'The IDs of the labels on the card.',
								items: {
									type: 'string',
									description: 'The ID of a label on the card.',
								},
							},
							name: { type: 'string', description: 'The name of the card.' },
							pos: {
								type: 'number',
								description: 'The position of the card in the list.',
							},
							shortLink: {
								type: 'string',
								description: 'The 8-character short ID of the card.',
							},
							shortUrl: {
								type: 'string',
								description: 'The URL of the card without the name slug.',
							},
							start: { type: 'string', description: 'The start date of the card.' },
							subscribed: {
								type: 'boolean',
								description:
									'Whether the current member is subscribed to the card.',
							},
							url: { type: 'string', description: 'The full URL of the card.' },
							address: {
								type: 'string',
								description: 'The address of the card location.',
							},
							locationName: {
								type: 'string',
								description: 'The name of the card location.',
							},
							coordinates: {
								type: 'object',
								description: 'The coordinates of the card location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the card location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the card location.',
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description: 'The cover settings of the card.',
								properties: {
									idAttachment: {
										type: 'string',
										description: 'The ID of the attachment used as the cover.',
									},
									color: {
										type: 'string',
										description: 'The color of the cover.',
									},
									idUploadedBackground: {
										type: 'string',
										description:
											'The ID of the uploaded background used as the cover.',
									},
									size: {
										type: 'string',
										description: 'The size of the cover: `normal` or `full`.',
									},
									brightness: {
										type: 'string',
										description:
											'The brightness of the cover: `dark` or `light`.',
									},
									isTemplate: {
										type: 'boolean',
										description: 'Whether the cover is from a template.',
									},
								},
								required: [],
							},
							cardRole: {
								type: 'string',
								description:
									'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
							},
							creationMethod: {
								type: 'string',
								description: 'How the card was created.',
							},
							mirrorSourceId: {
								type: 'string',
								description: 'The ID of the source card, for mirror cards.',
							},
							isTemplate: {
								type: 'boolean',
								description: 'Whether the card is a template.',
							},
							limits: {
								type: 'object',
								description: 'The limits that apply to the card.',
								properties: {
									attachments: {
										type: 'object',
										description: 'Attachment limits.',
										properties: {
											perCard: {
												type: 'object',
												description: 'The limit of attachments per card.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							members: {
								type: 'array',
								description:
									'The members assigned to the card. Returned when card members are requested.',
								items: {
									type: 'object',
									description: 'A member assigned to the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the member.',
										},
										activityBlocked: {
											type: 'boolean',
											description:
												'Whether the activity of the member is blocked.',
										},
										avatarHash: {
											type: 'string',
											description: 'The hash of the avatar of the member.',
										},
										avatarUrl: {
											type: 'string',
											description: 'The URL of the avatar of the member.',
										},
										bio: {
											type: 'string',
											description: 'The bio of the member.',
										},
										confirmed: {
											type: 'boolean',
											description:
												'Whether the member has confirmed their email address.',
										},
										fullName: {
											type: 'string',
											description: 'The full name of the member.',
										},
										idEnterprisesDeactivated: {
											type: 'array',
											description:
												'The IDs of Enterprises the member is deactivated in.',
											items: {
												type: 'string',
												description:
													'The ID of an Enterprise the member is deactivated in.',
											},
										},
										idMemberReferrer: {
											type: 'string',
											description:
												'The ID of the member who referred the member to Trello.',
										},
										idPremOrgsAdmin: {
											type: 'array',
											description:
												'The IDs of premium Workspaces the member administers.',
											items: {
												type: 'string',
												description:
													'The ID of a premium Workspace the member administers.',
											},
										},
										initials: {
											type: 'string',
											description: 'The initials of the member.',
										},
										memberType: {
											type: 'string',
											description:
												'The type of the member account: `normal` or `ghost`.',
										},
										nonPublic: {
											type: 'object',
											description:
												'Profile data with restricted visibility, visible only to members of the same Workspace.',
											properties: {
												fullName: {
													type: 'string',
													description:
														'The non-public full name of the member.',
												},
												initials: {
													type: 'string',
													description:
														'The non-public initials of the member.',
												},
												avatarUrl: {
													type: 'string',
													description:
														'The URL of the non-public avatar of the member.',
												},
												avatarHash: {
													type: 'string',
													description:
														'The hash of the non-public avatar of the member.',
												},
											},
											required: [],
										},
										nonPublicAvailable: {
											type: 'boolean',
											description:
												'Whether the response contains non-public profile data for the member.',
										},
										products: {
											type: 'array',
											description: 'The Trello products of the member.',
											items: {
												type: 'number',
												description:
													'The code of a Trello product of the member.',
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the member profile.',
										},
										username: {
											type: 'string',
											description: 'The username of the member.',
										},
										status: {
											type: 'string',
											description: 'The online status of the member.',
										},
									},
									required: [],
								},
							},
							attachments: {
								type: 'array',
								description:
									'The attachments on the card. Returned when card attachments are requested.',
								items: {
									type: 'object',
									description: 'An attachment on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the attachment.',
										},
										bytes: {
											type: 'number',
											description: 'The size of the attachment in bytes.',
										},
										date: {
											type: 'string',
											description: 'When the attachment was added.',
										},
										edgeColor: {
											type: 'string',
											description:
												'The extracted edge color, for image attachments.',
										},
										idMember: {
											type: 'string',
											description:
												'The ID of the member who added the attachment.',
										},
										isUpload: {
											type: 'boolean',
											description: 'Whether the attachment was uploaded.',
										},
										mimeType: {
											type: 'string',
											description: 'The MIME type of the attachment.',
										},
										name: {
											type: 'string',
											description: 'The name of the attachment.',
										},
										pos: {
											type: 'number',
											description:
												'The position of the attachment in the attachments list.',
										},
										previews: {
											type: 'array',
											description:
												'Generated previews of an image attachment in various sizes.',
											items: {
												type: 'object',
												description: 'A generated preview of the image.',
												properties: {
													id: {
														type: 'string',
														description: 'The ID of the preview.',
													},
													scaled: {
														type: 'boolean',
														description:
															'Whether the preview is scaled.',
													},
													url: {
														type: 'string',
														description: 'The URL of the preview.',
													},
													bytes: {
														type: 'number',
														description:
															'The size of the preview in bytes.',
													},
													height: {
														type: 'number',
														description:
															'The height of the preview in pixels.',
													},
													width: {
														type: 'number',
														description:
															'The width of the preview in pixels.',
													},
												},
												required: [],
											},
										},
										url: {
											type: 'string',
											description: 'The URL of the attachment.',
										},
										fileName: {
											type: 'string',
											description: 'The file name of the attachment.',
										},
									},
									required: [],
								},
							},
							stickers: {
								type: 'array',
								description:
									'The stickers on the card. Returned when card stickers are requested.',
								items: {
									type: 'object',
									description: 'A sticker on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the sticker.',
										},
										top: {
											type: 'number',
											description:
												'The top position of the sticker on the card.',
										},
										left: {
											type: 'number',
											description:
												'The left position of the sticker on the card.',
										},
										zIndex: {
											type: 'number',
											description: 'The z-index of the sticker on the card.',
										},
										rotate: {
											type: 'number',
											description: 'The rotation of the sticker in degrees.',
										},
										image: {
											type: 'string',
											description: 'The ID of the sticker image.',
										},
										imageUrl: {
											type: 'string',
											description: 'The URL of the sticker image.',
										},
										imageScaled: {
											type: 'array',
											description: 'Scaled versions of the sticker image.',
											items: {
												type: 'object',
												description:
													'A scaled version of the sticker image.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
									},
									required: [],
								},
							},
							customFieldItems: {
								type: 'array',
								description: 'The custom field values on the card.',
								items: {
									type: 'object',
									description: 'A custom field value set on the card.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the custom field item.',
										},
										idCustomField: {
											type: 'string',
											description: 'The ID of the custom field definition.',
										},
										idModel: {
											type: 'string',
											description: 'The ID of the card the value is set on.',
										},
										modelType: {
											type: 'string',
											description:
												'The type of the model the value is set on: `card`.',
										},
										idValue: {
											type: 'string',
											description:
												'The ID of the selected option, for dropdown custom fields.',
										},
										value: {
											type: 'object',
											description:
												'The value of the custom field, keyed by type.',
											properties: {
												text: {
													type: 'string',
													description:
														'The value of a text custom field.',
												},
												number: {
													type: 'string',
													description:
														'The value of a number custom field, as a string.',
												},
												date: {
													type: 'string',
													description:
														'The value of a date custom field.',
												},
												checked: {
													type: 'string',
													description:
														'The value of a checkbox custom field: `true` or `false`, as a string.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							pluginData: {
								type: 'array',
								description: 'The Power-Up data on the card.',
								items: {
									type: 'object',
									description: 'Data stored by a Power-Up.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the plugin data.',
										},
										idPlugin: {
											type: 'string',
											description: 'The ID of the Power-Up.',
										},
										scope: {
											type: 'string',
											description:
												'The scope of the data: `board`, `card`, `member`, or `organization`.',
										},
										idModel: {
											type: 'string',
											description:
												'The ID of the model the data is stored on.',
										},
										value: {
											type: 'string',
											description: 'The stored data, as a JSON string.',
										},
										access: {
											type: 'string',
											description:
												'The access level of the data: `private` or `shared`.',
										},
									},
									required: [],
								},
							},
							board: {
								type: 'object',
								description:
									'The board the card is on. Returned when the card board is requested.',
								properties: {
									id: { type: 'string', description: 'The ID of the board.' },
									name: { type: 'string', description: 'The name of the board.' },
									desc: {
										type: 'string',
										description: 'The description of the board.',
									},
									descData: {
										type: 'object',
										description:
											'Data needed to display custom emoji used in the description, if any.',
										properties: {
											emoji: {
												type: 'object',
												description:
													'Custom emoji used in the text, keyed by emoji name.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
										required: [],
									},
									closed: {
										type: 'boolean',
										description: 'Whether the board is closed (archived).',
									},
									idMemberCreator: {
										type: 'string',
										description: 'The ID of the member who created the board.',
									},
									idOrganization: {
										type: 'string',
										description:
											'The ID of the Workspace the board belongs to.',
									},
									pinned: {
										type: 'boolean',
										description: 'Whether the board is pinned.',
									},
									url: {
										type: 'string',
										description: 'The persistent URL of the board.',
									},
									shortUrl: {
										type: 'string',
										description:
											'The URL of the board using only its short ID.',
									},
									shortLink: {
										type: 'string',
										description: 'The 8-character short ID of the board.',
									},
									prefs: {
										type: 'object',
										description: 'The settings of the board.',
										properties: {
											permissionLevel: {
												type: 'string',
												description:
													'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
											},
											hideVotes: {
												type: 'boolean',
												description:
													'Whether the Voting Power-Up hides who voted on cards.',
											},
											voting: {
												type: 'string',
												description:
													'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
											},
											comments: {
												type: 'string',
												description:
													'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
											},
											invitations: {
												type: 'string',
												description:
													'Who can invite people to the board: `admins` or `members`.',
											},
											selfJoin: {
												type: 'boolean',
												description:
													'Whether Workspace members can join the board themselves.',
											},
											cardCovers: {
												type: 'boolean',
												description: 'Whether card covers are displayed.',
											},
											isTemplate: {
												type: 'boolean',
												description: 'Whether the board is a template.',
											},
											cardAging: {
												type: 'string',
												description:
													'The card aging mode: `pirate` or `regular`.',
											},
											calendarFeedEnabled: {
												type: 'boolean',
												description:
													'Whether the calendar feed is enabled.',
											},
											background: {
												type: 'string',
												description:
													'The ID of a custom background or the name of a background color.',
											},
											backgroundColor: {
												type: 'string',
												description:
													'The hex color of the background, if a color is used.',
											},
											backgroundImage: {
												type: 'string',
												description:
													'The URL of the background image, if an image is used.',
											},
											backgroundImageScaled: {
												type: 'array',
												description:
													'Scaled versions of the background image.',
												items: {
													type: 'object',
													description:
														'A scaled version of the background image.',
													properties: {
														width: {
															type: 'number',
															description:
																'The width of the image in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The height of the image in pixels.',
														},
														url: {
															type: 'string',
															description:
																'The URL of the scaled image.',
														},
													},
													required: [],
												},
											},
											backgroundTile: {
												type: 'boolean',
												description:
													'Whether the background image is tiled.',
											},
											backgroundBrightness: {
												type: 'string',
												description:
													'The brightness of the background: `dark` or `light`.',
											},
											backgroundBottomColor: {
												type: 'string',
												description:
													'The hex color at the bottom of the background.',
											},
											backgroundTopColor: {
												type: 'string',
												description:
													'The hex color at the top of the background.',
											},
											canBePublic: {
												type: 'boolean',
												description:
													'Whether the board can be made public.',
											},
											canBeEnterprise: {
												type: 'boolean',
												description:
													'Whether the board can be made visible to the Enterprise.',
											},
											canBeOrg: {
												type: 'boolean',
												description:
													'Whether the board can be made visible to the Workspace.',
											},
											canBePrivate: {
												type: 'boolean',
												description:
													'Whether the board can be made private.',
											},
											canInvite: {
												type: 'boolean',
												description:
													'Whether the current member can invite people to the board.',
											},
										},
										required: [],
									},
									labelNames: {
										type: 'object',
										description:
											'The label names of the board, keyed by label color.',
										properties: {
											green: {
												type: 'string',
												description: 'The name of the green label.',
											},
											yellow: {
												type: 'string',
												description: 'The name of the yellow label.',
											},
											orange: {
												type: 'string',
												description: 'The name of the orange label.',
											},
											red: {
												type: 'string',
												description: 'The name of the red label.',
											},
											purple: {
												type: 'string',
												description: 'The name of the purple label.',
											},
											blue: {
												type: 'string',
												description: 'The name of the blue label.',
											},
											sky: {
												type: 'string',
												description: 'The name of the sky label.',
											},
											lime: {
												type: 'string',
												description: 'The name of the lime label.',
											},
											pink: {
												type: 'string',
												description: 'The name of the pink label.',
											},
											black: {
												type: 'string',
												description: 'The name of the black label.',
											},
										},
										required: [],
									},
									limits: {
										type: 'object',
										description: 'The limits that apply to the board.',
										properties: {
											attachments: {
												type: 'object',
												description: 'Attachment limits.',
												properties: {
													perBoard: {
														type: 'object',
														description:
															'The limit of attachments per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											boards: {
												type: 'object',
												description: 'Board limits.',
												properties: {
													totalMembersPerBoard: {
														type: 'object',
														description:
															'The limit of members per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											cards: {
												type: 'object',
												description: 'Card limits.',
												properties: {
													openPerBoard: {
														type: 'object',
														description:
															'The limit of open cards per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
													totalPerBoard: {
														type: 'object',
														description:
															'The limit of all cards per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											checklists: {
												type: 'object',
												description: 'Checklist limits.',
												properties: {
													perBoard: {
														type: 'object',
														description:
															'The limit of checklists per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											customFields: {
												type: 'object',
												description: 'Custom field limits.',
												properties: {
													perBoard: {
														type: 'object',
														description:
															'The limit of custom fields per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											labels: {
												type: 'object',
												description: 'Label limits.',
												properties: {
													perBoard: {
														type: 'object',
														description:
															'The limit of labels per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											lists: {
												type: 'object',
												description: 'List limits.',
												properties: {
													openPerBoard: {
														type: 'object',
														description:
															'The limit of open lists per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
													totalPerBoard: {
														type: 'object',
														description:
															'The limit of all lists per board.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
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
									starred: {
										type: 'boolean',
										description:
											'Whether the board is starred by the current member.',
									},
									memberships: {
										type: 'array',
										description: 'The relationships of members to the board.',
										items: {
											type: 'object',
											description:
												'The relationship of a member to the board.',
											properties: {
												id: {
													type: 'string',
													description: 'The ID of the membership.',
												},
												idMember: {
													type: 'string',
													description: 'The ID of the member.',
												},
												memberType: {
													type: 'string',
													description:
														'The role of the member on the board: `admin`, `normal`, or `observer`.',
												},
												unconfirmed: {
													type: 'boolean',
													description:
														'Whether the member has not yet confirmed their account.',
												},
												deactivated: {
													type: 'boolean',
													description:
														'Whether the member is deactivated.',
												},
											},
											required: [],
										},
									},
									subscribed: {
										type: 'boolean',
										description:
											'Whether the current member is subscribed to the board.',
									},
									invited: {
										type: 'boolean',
										description:
											'Whether the current member is invited to the board.',
									},
									invitations: {
										type: 'array',
										description: 'Pending invitations to the board.',
										items: {
											type: 'object',
											description: 'A pending invitation to the board.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									powerUps: {
										type: 'array',
										description: 'The Power-Ups enabled on the board.',
										items: {
											type: 'string',
											description:
												'The name of a Power-Up enabled on the board.',
										},
									},
									dateLastActivity: {
										type: 'string',
										description:
											'When the last activity on the board occurred.',
									},
									dateLastView: {
										type: 'string',
										description:
											'When the current member last viewed the board.',
									},
									idTags: {
										type: 'array',
										description:
											'The IDs of the collections (tags) the board belongs to.',
										items: {
											type: 'string',
											description:
												'The ID of a collection the board belongs to.',
										},
									},
									datePluginDisable: {
										type: 'string',
										description:
											'When Power-Ups were disabled on the board, if ever.',
									},
									creationMethod: {
										type: 'string',
										description: 'How the board was created.',
									},
									ixUpdate: {
										type: 'string',
										description: 'An internal update counter of the board.',
									},
									templateGallery: {
										type: 'string',
										description:
											'The template gallery the board is published in, if any.',
									},
									enterpriseOwned: {
										type: 'boolean',
										description: 'Whether the board is owned by an Enterprise.',
									},
								},
								required: [],
							},
							list: {
								type: 'object',
								description:
									'The list the card is in. Returned when the card list is requested.',
								properties: {
									id: { type: 'string', description: 'The ID of the list.' },
									name: { type: 'string', description: 'The name of the list.' },
									closed: {
										type: 'boolean',
										description: 'Whether the list is closed (archived).',
									},
									idBoard: {
										type: 'string',
										description: 'The ID of the board the list is on.',
									},
									pos: {
										type: 'number',
										description: 'The position of the list on the board.',
									},
									subscribed: {
										type: 'boolean',
										description:
											'Whether the current member is subscribed to the list.',
									},
									softLimit: {
										type: 'number',
										description: 'The soft limit of cards in the list, if set.',
									},
									creationMethod: {
										type: 'string',
										description: 'How the list was created.',
									},
									limits: {
										type: 'object',
										description: 'The limits that apply to the list.',
										properties: {
											cards: {
												type: 'object',
												description: 'Card limits of the list.',
												properties: {
													openPerList: {
														type: 'object',
														description:
															'The limit of open cards per list.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
															},
														},
														required: [],
													},
													totalPerList: {
														type: 'object',
														description:
															'The limit of all cards per list.',
														properties: {
															status: {
																type: 'string',
																description:
																	'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
															},
															disableAt: {
																type: 'number',
																description:
																	'The count at which the limit is reached and the action is disabled.',
															},
															warnAt: {
																type: 'number',
																description:
																	'The count at which a warning is shown.',
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
								required: [],
							},
						},
						required: [],
					},
				},
				members: {
					type: 'array',
					description:
						'The members that matched the query. Returned when members are searched.',
					items: {
						type: 'object',
						description: 'A member that matched the query.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
							},
						},
						required: [],
					},
				},
				organizations: {
					type: 'array',
					description:
						'The Workspaces that matched the query. Returned when Workspaces are searched.',
					items: {
						type: 'object',
						description: 'A Workspace that matched the query.',
						properties: {
							id: { type: 'string', description: 'The ID of the Workspace.' },
							name: {
								type: 'string',
								description: 'The short name of the Workspace.',
							},
							displayName: {
								type: 'string',
								description: 'The display name of the Workspace.',
							},
							desc: {
								type: 'string',
								description: 'The description of the Workspace.',
							},
							url: { type: 'string', description: 'The URL of the Workspace.' },
							website: {
								type: 'string',
								description: 'The website of the Workspace.',
							},
							logoHash: {
								type: 'string',
								description: 'The hash of the Workspace logo.',
							},
							logoUrl: {
								type: 'string',
								description: 'The URL of the Workspace logo.',
							},
							idEnterprise: {
								type: 'string',
								description:
									'The ID of the Enterprise the Workspace belongs to, if any.',
							},
							offering: {
								type: 'string',
								description: 'The Trello offering of the Workspace.',
							},
							premiumFeatures: {
								type: 'array',
								description: 'The premium features available to the Workspace.',
								items: {
									type: 'string',
									description: 'The name of a premium feature.',
								},
							},
							dateLastActivity: {
								type: 'string',
								description: 'When the last activity in the Workspace occurred.',
							},
							prefs: {
								type: 'object',
								description: 'The settings of the Workspace.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							pluginData: {
								type: 'array',
								description: 'The Power-Up data of the Workspace.',
								items: {
									type: 'object',
									description: 'Data stored by a Power-Up.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the plugin data.',
										},
										idPlugin: {
											type: 'string',
											description: 'The ID of the Power-Up.',
										},
										scope: {
											type: 'string',
											description:
												'The scope of the data: `board`, `card`, `member`, or `organization`.',
										},
										idModel: {
											type: 'string',
											description:
												'The ID of the model the data is stored on.',
										},
										value: {
											type: 'string',
											description: 'The stored data, as a JSON string.',
										},
										access: {
											type: 'string',
											description:
												'The access level of the data: `private` or `shared`.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				actions: {
					type: 'array',
					description:
						'The actions that matched the query. Returned when actions are searched.',
					items: {
						type: 'object',
						description: 'An action that matched the query.',
						properties: {
							id: { type: 'string', description: 'The ID of the action.' },
							idMemberCreator: {
								type: 'string',
								description: 'The ID of the member who caused the action.',
							},
							data: {
								type: 'object',
								description:
									'Relevant information about the action. The available keys depend on the action type.',
								properties: {
									text: {
										type: 'string',
										description:
											'The text of the comment, for comment actions.',
									},
									card: {
										type: 'object',
										description: 'The card the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the card.',
											},
											name: {
												type: 'string',
												description: 'The name of the card.',
											},
											idShort: {
												type: 'number',
												description:
													'The numeric ID of the card, unique within the board.',
											},
											shortLink: {
												type: 'string',
												description:
													'The 8-character short ID of the card.',
											},
											idList: {
												type: 'string',
												description: 'The ID of the list the card is in.',
											},
											closed: {
												type: 'boolean',
												description: 'Whether the card is archived.',
											},
											desc: {
												type: 'string',
												description: 'The description of the card.',
											},
											due: {
												type: 'string',
												description: 'The due date of the card.',
											},
											pos: {
												type: 'number',
												description:
													'The position of the card in the list.',
											},
										},
										required: [],
									},
									board: {
										type: 'object',
										description: 'The board the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the board.',
											},
											name: {
												type: 'string',
												description: 'The name of the board.',
											},
											shortLink: {
												type: 'string',
												description:
													'The 8-character short ID of the board.',
											},
										},
										required: [],
									},
									list: {
										type: 'object',
										description: 'The list the action relates to.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									listBefore: {
										type: 'object',
										description:
											'The list the card was in before it was moved, for `updateCard:idList` actions.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									listAfter: {
										type: 'object',
										description:
											'The list the card was moved to, for `updateCard:idList` actions.',
										properties: {
											id: {
												type: 'string',
												description: 'The ID of the list.',
											},
											name: {
												type: 'string',
												description: 'The name of the list.',
											},
										},
										required: [],
									},
									old: {
										type: 'object',
										description:
											'The previous values of the fields changed by an update action.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							type: {
								type: 'string',
								description:
									'The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).',
							},
							date: { type: 'string', description: 'When the action occurred.' },
							limits: {
								type: 'object',
								description: 'The limits that apply to the action.',
								properties: {
									reactions: {
										type: 'object',
										description: 'The reaction limits of the action.',
										properties: {
											perAction: {
												type: 'object',
												description: 'The limit of reactions per action.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
													},
												},
												required: [],
											},
											uniquePerAction: {
												type: 'object',
												description:
													'The limit of unique reactions per action.',
												properties: {
													status: {
														type: 'string',
														description:
															'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
													},
													disableAt: {
														type: 'number',
														description:
															'The count at which the limit is reached and the action is disabled.',
													},
													warnAt: {
														type: 'number',
														description:
															'The count at which a warning is shown.',
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
							display: {
								type: 'object',
								description: 'Information to render the action in a UI.',
								properties: {
									translationKey: {
										type: 'string',
										description:
											'The translation key of the action description.',
									},
									entities: {
										type: 'object',
										description:
											'The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							memberCreator: {
								type: 'object',
								description: 'The member who caused the action.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the member who caused the action.',
									},
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member who caused the action is blocked.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the avatar of the member who caused the action.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the avatar of the member who caused the action.',
									},
									fullName: {
										type: 'string',
										description:
											'The full name of the member who caused the action.',
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member who caused the action to Trello.',
									},
									initials: {
										type: 'string',
										description:
											'The initials of the member who caused the action.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									username: {
										type: 'string',
										description:
											'The username of the member who caused the action.',
									},
								},
								required: [],
							},
							member: {
								type: 'object',
								description:
									'The member the action relates to, for member-related actions.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member is blocked.',
									},
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member to Trello.',
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'setACustomFieldOnACard',
		label: 'Set a custom field on a card',
		description: 'Sets or updates the value of a custom field on a card.',
		context:
			'---\nname: setACustomFieldOnACard\ndescription: Sets or updates the value of a custom field on a card.\n---\n\nSets or updates the value of a custom field on a Trello card via `PUT /cards/{idCard}/customField/{idCustomField}/item` and returns the custom field item.\n\n- For text, number, date, and checkbox custom fields, fill in `value` with the one key that matches the custom field `type`. Trello expects `number` and `checked` as strings (`"42"`, `"true"`).\n- For dropdown (`list`) custom fields, leave `value` empty and set `idValue` to the option ID.\n- Use `getBoard` with `customFields` = `true` to get the custom field IDs, types, and dropdown options of the board.\n- The Custom Fields Power-Up must be enabled on the board.\n- Clearing a value (an empty PUT) is not supported by this endpoint.\n\nAPI reference: [Update Custom Field item on Card](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-idcard-customfield-idcustomfield-item-put). See also [Getting Started With Custom Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/).\n',
		accounts: { trello: { scope: [] } },
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
				idCard: {
					type: 'string',
					description: 'The ID of the card to set the custom field value on.',
				},
				idCustomField: {
					type: 'string',
					description:
						'The ID of the custom field. Find it with `getBoard` (`customFields` = `true`).',
				},
				value: {
					type: 'object',
					description:
						'The value for a text, number, date, or checkbox custom field. Fill in only the key that matches the custom field type. Leave empty for dropdown (`list`) custom fields and use `idValue` instead.',
					properties: {
						text: { type: 'string', description: 'The value of a text custom field.' },
						number: {
							type: 'string',
							description:
								'The value of a number custom field, as a string. For example, `42`.',
						},
						date: { type: 'string', description: 'The value of a date custom field.' },
						checked: {
							type: 'string',
							description: 'The value of a checkbox custom field, as a string.',
							default: '',
							enum: ['', 'true', 'false'],
						},
					},
					required: [],
				},
				idValue: {
					type: 'string',
					description:
						'The ID of the selected option, for dropdown (`list`) custom fields. Find option IDs with `getBoard` (`customFields` = `true`).',
				},
			},
			required: ['idCard', 'idCustomField'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the custom field item.' },
				idCustomField: {
					type: 'string',
					description: 'The ID of the custom field definition.',
				},
				idModel: { type: 'string', description: 'The ID of the card the value is set on.' },
				modelType: {
					type: 'string',
					description: 'The type of the model the value is set on: `card`.',
				},
				idValue: {
					type: 'string',
					description: 'The ID of the selected option, for dropdown custom fields.',
				},
				value: {
					type: 'object',
					description: 'The value of the custom field, keyed by type.',
					properties: {
						text: { type: 'string', description: 'The value of a text custom field.' },
						number: {
							type: 'string',
							description: 'The value of a number custom field, as a string.',
						},
						date: { type: 'string', description: 'The value of a date custom field.' },
						checked: {
							type: 'string',
							description:
								'The value of a checkbox custom field: `true` or `false`, as a string.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'trello',
		appVersion: 4,
		endpointName: 'unassignAMemberFromABoard',
		label: 'Unassign a member from a board',
		description: 'Removes a member from a board.',
		context:
			'---\nname: unassignAMemberFromABoard\ndescription: Removes a member from a board.\n---\n\nRemoves a member from a Trello board via `DELETE /boards/{id}/members/{idMember}` and returns the board with its remaining `members`.\n\n- `idMember` is the member ID. Find it with `getBoard` (`members` = `all`).\n- A board must keep at least one admin, so Trello rejects removing its last admin.\n- The removed member loses access to the board, but their cards and comments stay.\n\nAPI reference: [Remove Member from Board](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-members-idmember-delete).\n',
		accounts: { trello: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID or short link of the board.' },
				idMember: {
					type: 'string',
					description: 'The ID of the member to remove from the board.',
				},
			},
			required: ['id', 'idMember'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the board.' },
				name: { type: 'string', description: 'The name of the board.' },
				desc: { type: 'string', description: 'The description of the board.' },
				descData: {
					type: 'object',
					description:
						'Data needed to display custom emoji used in the description, if any.',
					properties: {
						emoji: {
							type: 'object',
							description: 'Custom emoji used in the text, keyed by emoji name.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				closed: { type: 'boolean', description: 'Whether the board is closed (archived).' },
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who created the board.',
				},
				idOrganization: {
					type: 'string',
					description: 'The ID of the Workspace the board belongs to.',
				},
				pinned: { type: 'boolean', description: 'Whether the board is pinned.' },
				url: { type: 'string', description: 'The persistent URL of the board.' },
				shortUrl: {
					type: 'string',
					description: 'The URL of the board using only its short ID.',
				},
				shortLink: {
					type: 'string',
					description: 'The 8-character short ID of the board.',
				},
				prefs: {
					type: 'object',
					description: 'The settings of the board.',
					properties: {
						permissionLevel: {
							type: 'string',
							description:
								'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
						},
						hideVotes: {
							type: 'boolean',
							description: 'Whether the Voting Power-Up hides who voted on cards.',
						},
						voting: {
							type: 'string',
							description:
								'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						comments: {
							type: 'string',
							description:
								'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
						},
						invitations: {
							type: 'string',
							description:
								'Who can invite people to the board: `admins` or `members`.',
						},
						selfJoin: {
							type: 'boolean',
							description: 'Whether Workspace members can join the board themselves.',
						},
						cardCovers: {
							type: 'boolean',
							description: 'Whether card covers are displayed.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the board is a template.',
						},
						cardAging: {
							type: 'string',
							description: 'The card aging mode: `pirate` or `regular`.',
						},
						calendarFeedEnabled: {
							type: 'boolean',
							description: 'Whether the calendar feed is enabled.',
						},
						background: {
							type: 'string',
							description:
								'The ID of a custom background or the name of a background color.',
						},
						backgroundColor: {
							type: 'string',
							description: 'The hex color of the background, if a color is used.',
						},
						backgroundImage: {
							type: 'string',
							description: 'The URL of the background image, if an image is used.',
						},
						backgroundImageScaled: {
							type: 'array',
							description: 'Scaled versions of the background image.',
							items: {
								type: 'object',
								description: 'A scaled version of the background image.',
								properties: {
									width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									url: {
										type: 'string',
										description: 'The URL of the scaled image.',
									},
								},
								required: [],
							},
						},
						backgroundTile: {
							type: 'boolean',
							description: 'Whether the background image is tiled.',
						},
						backgroundBrightness: {
							type: 'string',
							description: 'The brightness of the background: `dark` or `light`.',
						},
						backgroundBottomColor: {
							type: 'string',
							description: 'The hex color at the bottom of the background.',
						},
						backgroundTopColor: {
							type: 'string',
							description: 'The hex color at the top of the background.',
						},
						canBePublic: {
							type: 'boolean',
							description: 'Whether the board can be made public.',
						},
						canBeEnterprise: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Enterprise.',
						},
						canBeOrg: {
							type: 'boolean',
							description: 'Whether the board can be made visible to the Workspace.',
						},
						canBePrivate: {
							type: 'boolean',
							description: 'Whether the board can be made private.',
						},
						canInvite: {
							type: 'boolean',
							description:
								'Whether the current member can invite people to the board.',
						},
					},
					required: [],
				},
				labelNames: {
					type: 'object',
					description: 'The label names of the board, keyed by label color.',
					properties: {
						green: { type: 'string', description: 'The name of the green label.' },
						yellow: { type: 'string', description: 'The name of the yellow label.' },
						orange: { type: 'string', description: 'The name of the orange label.' },
						red: { type: 'string', description: 'The name of the red label.' },
						purple: { type: 'string', description: 'The name of the purple label.' },
						blue: { type: 'string', description: 'The name of the blue label.' },
						sky: { type: 'string', description: 'The name of the sky label.' },
						lime: { type: 'string', description: 'The name of the lime label.' },
						pink: { type: 'string', description: 'The name of the pink label.' },
						black: { type: 'string', description: 'The name of the black label.' },
					},
					required: [],
				},
				limits: {
					type: 'object',
					description: 'The limits that apply to the board.',
					properties: {
						attachments: {
							type: 'object',
							description: 'Attachment limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of attachments per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						boards: {
							type: 'object',
							description: 'Board limits.',
							properties: {
								totalMembersPerBoard: {
									type: 'object',
									description: 'The limit of members per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						cards: {
							type: 'object',
							description: 'Card limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all cards per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						checklists: {
							type: 'object',
							description: 'Checklist limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of checklists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						customFields: {
							type: 'object',
							description: 'Custom field limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of custom fields per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						labels: {
							type: 'object',
							description: 'Label limits.',
							properties: {
								perBoard: {
									type: 'object',
									description: 'The limit of labels per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						lists: {
							type: 'object',
							description: 'List limits.',
							properties: {
								openPerBoard: {
									type: 'object',
									description: 'The limit of open lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
										},
									},
									required: [],
								},
								totalPerBoard: {
									type: 'object',
									description: 'The limit of all lists per board.',
									properties: {
										status: {
											type: 'string',
											description:
												'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
										},
										disableAt: {
											type: 'number',
											description:
												'The count at which the limit is reached and the action is disabled.',
										},
										warnAt: {
											type: 'number',
											description: 'The count at which a warning is shown.',
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
				starred: {
					type: 'boolean',
					description: 'Whether the board is starred by the current member.',
				},
				memberships: {
					type: 'array',
					description: 'The relationships of members to the board.',
					items: {
						type: 'object',
						description: 'The relationship of a member to the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the membership.' },
							idMember: { type: 'string', description: 'The ID of the member.' },
							memberType: {
								type: 'string',
								description:
									'The role of the member on the board: `admin`, `normal`, or `observer`.',
							},
							unconfirmed: {
								type: 'boolean',
								description:
									'Whether the member has not yet confirmed their account.',
							},
							deactivated: {
								type: 'boolean',
								description: 'Whether the member is deactivated.',
							},
						},
						required: [],
					},
				},
				subscribed: {
					type: 'boolean',
					description: 'Whether the current member is subscribed to the board.',
				},
				invited: {
					type: 'boolean',
					description: 'Whether the current member is invited to the board.',
				},
				invitations: {
					type: 'array',
					description: 'Pending invitations to the board.',
					items: {
						type: 'object',
						description: 'A pending invitation to the board.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				powerUps: {
					type: 'array',
					description: 'The Power-Ups enabled on the board.',
					items: {
						type: 'string',
						description: 'The name of a Power-Up enabled on the board.',
					},
				},
				dateLastActivity: {
					type: 'string',
					description: 'When the last activity on the board occurred.',
				},
				dateLastView: {
					type: 'string',
					description: 'When the current member last viewed the board.',
				},
				idTags: {
					type: 'array',
					description: 'The IDs of the collections (tags) the board belongs to.',
					items: {
						type: 'string',
						description: 'The ID of a collection the board belongs to.',
					},
				},
				datePluginDisable: {
					type: 'string',
					description: 'When Power-Ups were disabled on the board, if ever.',
				},
				creationMethod: { type: 'string', description: 'How the board was created.' },
				ixUpdate: {
					type: 'string',
					description: 'An internal update counter of the board.',
				},
				templateGallery: {
					type: 'string',
					description: 'The template gallery the board is published in, if any.',
				},
				enterpriseOwned: {
					type: 'boolean',
					description: 'Whether the board is owned by an Enterprise.',
				},
				members: {
					type: 'array',
					description: 'The remaining members of the board.',
					items: {
						type: 'object',
						description: 'A member of the board.',
						properties: {
							id: { type: 'string', description: 'The ID of the member.' },
							activityBlocked: {
								type: 'boolean',
								description: 'Whether the activity of the member is blocked.',
							},
							avatarHash: {
								type: 'string',
								description: 'The hash of the avatar of the member.',
							},
							avatarUrl: {
								type: 'string',
								description: 'The URL of the avatar of the member.',
							},
							bio: { type: 'string', description: 'The bio of the member.' },
							confirmed: {
								type: 'boolean',
								description:
									'Whether the member has confirmed their email address.',
							},
							fullName: {
								type: 'string',
								description: 'The full name of the member.',
							},
							idEnterprisesDeactivated: {
								type: 'array',
								description: 'The IDs of Enterprises the member is deactivated in.',
								items: {
									type: 'string',
									description:
										'The ID of an Enterprise the member is deactivated in.',
								},
							},
							idMemberReferrer: {
								type: 'string',
								description:
									'The ID of the member who referred the member to Trello.',
							},
							idPremOrgsAdmin: {
								type: 'array',
								description:
									'The IDs of premium Workspaces the member administers.',
								items: {
									type: 'string',
									description:
										'The ID of a premium Workspace the member administers.',
								},
							},
							initials: {
								type: 'string',
								description: 'The initials of the member.',
							},
							memberType: {
								type: 'string',
								description: 'The type of the member account: `normal` or `ghost`.',
							},
							nonPublic: {
								type: 'object',
								description:
									'Profile data with restricted visibility, visible only to members of the same Workspace.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The non-public full name of the member.',
									},
									initials: {
										type: 'string',
										description: 'The non-public initials of the member.',
									},
									avatarUrl: {
										type: 'string',
										description:
											'The URL of the non-public avatar of the member.',
									},
									avatarHash: {
										type: 'string',
										description:
											'The hash of the non-public avatar of the member.',
									},
								},
								required: [],
							},
							nonPublicAvailable: {
								type: 'boolean',
								description:
									'Whether the response contains non-public profile data for the member.',
							},
							products: {
								type: 'array',
								description: 'The Trello products of the member.',
								items: {
									type: 'number',
									description: 'The code of a Trello product of the member.',
								},
							},
							url: { type: 'string', description: 'The URL of the member profile.' },
							username: {
								type: 'string',
								description: 'The username of the member.',
							},
							status: {
								type: 'string',
								description: 'The online status of the member.',
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
		appName: 'trello',
		appVersion: 4,
		endpointName: 'watchNotifications',
		label: 'List notifications',
		description: "Lists a member's notifications.",
		context:
			"---\nname: watchNotifications\ndescription: Lists a member's notifications.\n---\n\nLists the notifications of a Trello member via `GET /members/{id}/notifications` and returns them as an array, newest first.\n\n- Set `id` to `me` to read the notifications of the authenticated member.\n- The shape of `data` depends on the notification type, in the same way as the `data` of an action.\n- `card` and `board` are only returned when you request them through `fields`. The short card and board summaries are always available inside `data`.\n- Paginate with `limit` and `page`, or read incrementally with `since` / `before`, which take a notification ID rather than a date.\n- Trello does not publish a complete list of notification types; `filter` accepts `all` or a comma-separated list of type names.\n\nAPI reference: [Get Member's Notifications](https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-members-id-notifications-get).\n",
		accounts: { trello: { scope: [] } },
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
				id: {
					type: 'string',
					description:
						'The ID or username of the member. Use `me` for the authenticated member.',
				},
				filter: {
					type: 'string',
					description:
						'The notification types to return. Use `all` or a comma-separated list of types, for example `mentionedOnCard,cardDueSoon`. Default: `all`.',
					default: 'all',
				},
				read_filter: {
					type: 'string',
					description:
						'Whether to return read notifications, unread notifications, or both. Default: `all`.',
					default: '',
					enum: ['', 'all', 'read', 'unread'],
				},
				fields: {
					type: 'string',
					description: 'The notification fields to return. Default: `all`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'unread',
						'type',
						'date',
						'dateRead',
						'data',
						'card',
						'board',
						'idMemberCreator',
						'idAction',
						'reactions',
					],
				},
				entities: {
					type: 'boolean',
					description:
						'Whether to return the entities referenced by each notification. Default: `false`.',
					default: false,
				},
				display: {
					type: 'boolean',
					description:
						'Whether to return the display information of each notification. Default: `false`.',
					default: false,
				},
				memberCreator: {
					type: 'boolean',
					description:
						'Whether to return the member creator object for each notification. Default: `true`.',
					default: true,
				},
				memberCreator_fields: {
					type: 'string',
					description:
						'The member fields to return when the member creator object is returned. Default: `avatarHash`, `fullName`, `initials`, `username`.',
					default: '',
					enum: [
						'',
						'all',
						'id',
						'avatarHash',
						'avatarUrl',
						'bio',
						'bioData',
						'confirmed',
						'fullName',
						'idEnterprisesDeactivated',
						'idPremOrgsAdmin',
						'initials',
						'memberType',
						'products',
						'status',
						'url',
						'username',
					],
				},
				limit: {
					type: 'number',
					description:
						'The number of notifications to return, up to 1000. Default: `50`.',
					default: 50,
					maximum: 1000,
				},
				page: {
					type: 'number',
					description:
						'The page of results to return, starting from `0`, up to 100. Default: `0`.',
					default: 0,
					maximum: 100,
				},
				since: {
					type: 'string',
					description: 'Only notifications newer than this notification ID are returned.',
				},
				before: {
					type: 'string',
					description: 'Only notifications older than this notification ID are returned.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the notification.' },
				unread: {
					type: 'boolean',
					description: 'Whether the notification has not been read yet.',
				},
				type: {
					type: 'string',
					description:
						'The type of the notification, for example `cardDueSoon` or `mentionedOnCard`.',
				},
				date: { type: 'string', description: 'When the notification was created.' },
				dateRead: {
					type: 'string',
					description: 'When the notification was read, if it was.',
				},
				data: {
					type: 'object',
					description:
						'Relevant information about the notification. The available keys depend on the notification type.',
					properties: {
						text: {
							type: 'string',
							description: 'The text of the comment, for comment notifications.',
						},
						card: {
							type: 'object',
							description: 'The card the notification relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the card.' },
								name: { type: 'string', description: 'The name of the card.' },
								idShort: {
									type: 'number',
									description:
										'The numeric ID of the card, unique within the board.',
								},
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the card.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
							},
							required: [],
						},
						board: {
							type: 'object',
							description: 'The board the notification relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the board.' },
								name: { type: 'string', description: 'The name of the board.' },
								shortLink: {
									type: 'string',
									description: 'The 8-character short ID of the board.',
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'The list the notification relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the list.' },
								name: { type: 'string', description: 'The name of the list.' },
							},
							required: [],
						},
						organization: {
							type: 'object',
							description: 'The Workspace the notification relates to.',
							properties: {
								id: { type: 'string', description: 'The ID of the Workspace.' },
								name: {
									type: 'string',
									description: 'The short name of the Workspace.',
								},
							},
							required: [],
						},
						old: {
							type: 'object',
							description:
								'The previous values of the fields changed by the notified update.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				idMemberCreator: {
					type: 'string',
					description: 'The ID of the member who caused the notification.',
				},
				idAction: {
					type: 'string',
					description: 'The ID of the action that caused the notification.',
				},
				reactions: {
					type: 'array',
					description: 'The reactions related to the notification.',
					items: {
						type: 'object',
						description: 'A reaction related to the notification.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				entities: {
					type: 'array',
					description:
						'The entities referenced by the notification. Returned when entities are requested.',
					items: {
						type: 'object',
						description: 'An entity referenced by the notification.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the entity, for example `card`, `member`, or `text`.',
							},
							id: { type: 'string', description: 'The ID of the entity.' },
							shortLink: {
								type: 'string',
								description: 'The 8-character short ID of the entity.',
							},
							text: { type: 'string', description: 'The text of the entity.' },
							username: {
								type: 'string',
								description: 'The username of the entity, for member entities.',
							},
							due: {
								type: 'string',
								description: 'The due date of the entity, for card entities.',
							},
						},
						required: [],
					},
				},
				memberCreator: {
					type: 'object',
					description: 'The member who caused the notification.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the member who caused the notification.',
						},
						activityBlocked: {
							type: 'boolean',
							description:
								'Whether the activity of the member who caused the notification is blocked.',
						},
						avatarHash: {
							type: 'string',
							description:
								'The hash of the avatar of the member who caused the notification.',
						},
						avatarUrl: {
							type: 'string',
							description:
								'The URL of the avatar of the member who caused the notification.',
						},
						fullName: {
							type: 'string',
							description: 'The full name of the member who caused the notification.',
						},
						idMemberReferrer: {
							type: 'string',
							description:
								'The ID of the member who referred the member who caused the notification to Trello.',
						},
						initials: {
							type: 'string',
							description: 'The initials of the member who caused the notification.',
						},
						nonPublic: {
							type: 'object',
							description:
								'Profile data with restricted visibility, visible only to members of the same Workspace.',
							properties: {
								fullName: {
									type: 'string',
									description: 'The non-public full name of the member.',
								},
								initials: {
									type: 'string',
									description: 'The non-public initials of the member.',
								},
								avatarUrl: {
									type: 'string',
									description: 'The URL of the non-public avatar of the member.',
								},
								avatarHash: {
									type: 'string',
									description: 'The hash of the non-public avatar of the member.',
								},
							},
							required: [],
						},
						nonPublicAvailable: {
							type: 'boolean',
							description:
								'Whether the response contains non-public profile data for the member.',
						},
						username: {
							type: 'string',
							description: 'The username of the member who caused the notification.',
						},
					},
					required: [],
				},
				card: {
					type: 'object',
					description:
						'The card the notification relates to. Returned when the `card` field is requested.',
					properties: {
						id: { type: 'string', description: 'The ID of the card.' },
						badges: {
							type: 'object',
							description: 'Information displayed on the front of the card.',
							properties: {
								votes: {
									type: 'number',
									description: 'The number of votes on the card.',
								},
								viewingMemberVoted: {
									type: 'boolean',
									description: 'Whether the current member voted on the card.',
								},
								subscribed: {
									type: 'boolean',
									description:
										'Whether the current member is subscribed to the card.',
								},
								fogbugz: {
									type: 'string',
									description: 'The FogBugz case linked to the card, if any.',
								},
								checkItems: {
									type: 'number',
									description: 'The number of checklist items on the card.',
								},
								checkItemsChecked: {
									type: 'number',
									description:
										'The number of completed checklist items on the card.',
								},
								comments: {
									type: 'number',
									description: 'The number of comments on the card.',
								},
								attachments: {
									type: 'number',
									description: 'The number of attachments on the card.',
								},
								description: {
									type: 'boolean',
									description: 'Whether the card has a description.',
								},
								due: { type: 'string', description: 'The due date of the card.' },
								dueComplete: {
									type: 'boolean',
									description:
										'Whether the due date of the card is marked complete.',
								},
								start: {
									type: 'string',
									description: 'The start date of the card.',
								},
								location: {
									type: 'boolean',
									description: 'Whether the card has a location.',
								},
								attachmentsByType: {
									type: 'object',
									description: 'The number of attachments on the card by type.',
									properties: {
										trello: {
											type: 'object',
											description:
												'The number of attachments linking to Trello objects.',
											properties: {
												board: {
													type: 'number',
													description:
														'The number of attachments linking to Trello boards.',
												},
												card: {
													type: 'number',
													description:
														'The number of attachments linking to Trello cards.',
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
						checkItemStates: {
							type: 'array',
							description: 'The states of the checklist items on the card.',
							items: {
								type: 'object',
								description: 'The state of a checklist item.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						closed: {
							type: 'boolean',
							description: 'Whether the card is closed (archived).',
						},
						dueComplete: {
							type: 'boolean',
							description: 'Whether the due date of the card is marked complete.',
						},
						dateLastActivity: {
							type: 'string',
							description: 'When the last activity on the card occurred.',
						},
						desc: { type: 'string', description: 'The description of the card.' },
						descData: {
							type: 'object',
							description:
								'Data needed to display custom emoji used in the description, if any.',
							properties: {
								emoji: {
									type: 'object',
									description:
										'Custom emoji used in the text, keyed by emoji name.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							required: [],
						},
						due: { type: 'string', description: 'The due date of the card.' },
						dueReminder: {
							type: 'number',
							description:
								'The number of minutes before the due date when a reminder is sent.',
						},
						email: {
							type: 'string',
							description: 'The email address of the card, if any.',
						},
						idBoard: {
							type: 'string',
							description: 'The ID of the board the card is on.',
						},
						idChecklists: {
							type: 'array',
							description: 'The IDs of the checklists on the card.',
							items: {
								type: 'string',
								description: 'The ID of a checklist on the card.',
							},
						},
						idList: {
							type: 'string',
							description: 'The ID of the list the card is in.',
						},
						idMembers: {
							type: 'array',
							description: 'The IDs of the members assigned to the card.',
							items: {
								type: 'string',
								description: 'The ID of a member assigned to the card.',
							},
						},
						idMembersVoted: {
							type: 'array',
							description: 'The IDs of the members who voted on the card.',
							items: {
								type: 'string',
								description: 'The ID of a member who voted on the card.',
							},
						},
						idShort: {
							type: 'number',
							description: 'The numeric ID of the card, unique within the board.',
						},
						idAttachmentCover: {
							type: 'string',
							description: 'The ID of the attachment used as the card cover, if any.',
						},
						manualCoverAttachment: {
							type: 'boolean',
							description:
								'Whether the card cover was selected manually by the user.',
						},
						labels: {
							type: 'array',
							description: 'The labels on the card.',
							items: {
								type: 'object',
								description: 'A label on the card.',
								properties: {
									id: { type: 'string', description: 'The ID of the label.' },
									idBoard: {
										type: 'string',
										description: 'The ID of the board the label is on.',
									},
									name: {
										type: 'string',
										description: 'The name displayed for the label.',
									},
									color: {
										type: 'string',
										description:
											'The color of the label. Empty means no color and the label is not shown on the front of cards.',
									},
									uses: {
										type: 'number',
										description: 'The number of cards the label is used on.',
									},
								},
								required: [],
							},
						},
						idLabels: {
							type: 'array',
							description: 'The IDs of the labels on the card.',
							items: {
								type: 'string',
								description: 'The ID of a label on the card.',
							},
						},
						name: { type: 'string', description: 'The name of the card.' },
						pos: {
							type: 'number',
							description: 'The position of the card in the list.',
						},
						shortLink: {
							type: 'string',
							description: 'The 8-character short ID of the card.',
						},
						shortUrl: {
							type: 'string',
							description: 'The URL of the card without the name slug.',
						},
						start: { type: 'string', description: 'The start date of the card.' },
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the card.',
						},
						url: { type: 'string', description: 'The full URL of the card.' },
						address: {
							type: 'string',
							description: 'The address of the card location.',
						},
						locationName: {
							type: 'string',
							description: 'The name of the card location.',
						},
						coordinates: {
							type: 'object',
							description: 'The coordinates of the card location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the card location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the card location.',
								},
							},
							required: [],
						},
						cover: {
							type: 'object',
							description: 'The cover settings of the card.',
							properties: {
								idAttachment: {
									type: 'string',
									description: 'The ID of the attachment used as the cover.',
								},
								color: { type: 'string', description: 'The color of the cover.' },
								idUploadedBackground: {
									type: 'string',
									description:
										'The ID of the uploaded background used as the cover.',
								},
								size: {
									type: 'string',
									description: 'The size of the cover: `normal` or `full`.',
								},
								brightness: {
									type: 'string',
									description: 'The brightness of the cover: `dark` or `light`.',
								},
								isTemplate: {
									type: 'boolean',
									description: 'Whether the cover is from a template.',
								},
							},
							required: [],
						},
						cardRole: {
							type: 'string',
							description:
								'The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.',
						},
						creationMethod: {
							type: 'string',
							description: 'How the card was created.',
						},
						mirrorSourceId: {
							type: 'string',
							description: 'The ID of the source card, for mirror cards.',
						},
						isTemplate: {
							type: 'boolean',
							description: 'Whether the card is a template.',
						},
						limits: {
							type: 'object',
							description: 'The limits that apply to the card.',
							properties: {
								attachments: {
									type: 'object',
									description: 'Attachment limits.',
									properties: {
										perCard: {
											type: 'object',
											description: 'The limit of attachments per card.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
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
						members: {
							type: 'array',
							description:
								'The members assigned to the card. Returned when card members are requested.',
							items: {
								type: 'object',
								description: 'A member assigned to the card.',
								properties: {
									id: { type: 'string', description: 'The ID of the member.' },
									activityBlocked: {
										type: 'boolean',
										description:
											'Whether the activity of the member is blocked.',
									},
									avatarHash: {
										type: 'string',
										description: 'The hash of the avatar of the member.',
									},
									avatarUrl: {
										type: 'string',
										description: 'The URL of the avatar of the member.',
									},
									bio: { type: 'string', description: 'The bio of the member.' },
									confirmed: {
										type: 'boolean',
										description:
											'Whether the member has confirmed their email address.',
									},
									fullName: {
										type: 'string',
										description: 'The full name of the member.',
									},
									idEnterprisesDeactivated: {
										type: 'array',
										description:
											'The IDs of Enterprises the member is deactivated in.',
										items: {
											type: 'string',
											description:
												'The ID of an Enterprise the member is deactivated in.',
										},
									},
									idMemberReferrer: {
										type: 'string',
										description:
											'The ID of the member who referred the member to Trello.',
									},
									idPremOrgsAdmin: {
										type: 'array',
										description:
											'The IDs of premium Workspaces the member administers.',
										items: {
											type: 'string',
											description:
												'The ID of a premium Workspace the member administers.',
										},
									},
									initials: {
										type: 'string',
										description: 'The initials of the member.',
									},
									memberType: {
										type: 'string',
										description:
											'The type of the member account: `normal` or `ghost`.',
									},
									nonPublic: {
										type: 'object',
										description:
											'Profile data with restricted visibility, visible only to members of the same Workspace.',
										properties: {
											fullName: {
												type: 'string',
												description:
													'The non-public full name of the member.',
											},
											initials: {
												type: 'string',
												description:
													'The non-public initials of the member.',
											},
											avatarUrl: {
												type: 'string',
												description:
													'The URL of the non-public avatar of the member.',
											},
											avatarHash: {
												type: 'string',
												description:
													'The hash of the non-public avatar of the member.',
											},
										},
										required: [],
									},
									nonPublicAvailable: {
										type: 'boolean',
										description:
											'Whether the response contains non-public profile data for the member.',
									},
									products: {
										type: 'array',
										description: 'The Trello products of the member.',
										items: {
											type: 'number',
											description:
												'The code of a Trello product of the member.',
										},
									},
									url: {
										type: 'string',
										description: 'The URL of the member profile.',
									},
									username: {
										type: 'string',
										description: 'The username of the member.',
									},
									status: {
										type: 'string',
										description: 'The online status of the member.',
									},
								},
								required: [],
							},
						},
						attachments: {
							type: 'array',
							description:
								'The attachments on the card. Returned when card attachments are requested.',
							items: {
								type: 'object',
								description: 'An attachment on the card.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the attachment.',
									},
									bytes: {
										type: 'number',
										description: 'The size of the attachment in bytes.',
									},
									date: {
										type: 'string',
										description: 'When the attachment was added.',
									},
									edgeColor: {
										type: 'string',
										description:
											'The extracted edge color, for image attachments.',
									},
									idMember: {
										type: 'string',
										description:
											'The ID of the member who added the attachment.',
									},
									isUpload: {
										type: 'boolean',
										description: 'Whether the attachment was uploaded.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the attachment.',
									},
									name: {
										type: 'string',
										description: 'The name of the attachment.',
									},
									pos: {
										type: 'number',
										description:
											'The position of the attachment in the attachments list.',
									},
									previews: {
										type: 'array',
										description:
											'Generated previews of an image attachment in various sizes.',
										items: {
											type: 'object',
											description: 'A generated preview of the image.',
											properties: {
												id: {
													type: 'string',
													description: 'The ID of the preview.',
												},
												scaled: {
													type: 'boolean',
													description: 'Whether the preview is scaled.',
												},
												url: {
													type: 'string',
													description: 'The URL of the preview.',
												},
												bytes: {
													type: 'number',
													description:
														'The size of the preview in bytes.',
												},
												height: {
													type: 'number',
													description:
														'The height of the preview in pixels.',
												},
												width: {
													type: 'number',
													description:
														'The width of the preview in pixels.',
												},
											},
											required: [],
										},
									},
									url: {
										type: 'string',
										description: 'The URL of the attachment.',
									},
									fileName: {
										type: 'string',
										description: 'The file name of the attachment.',
									},
								},
								required: [],
							},
						},
						stickers: {
							type: 'array',
							description:
								'The stickers on the card. Returned when card stickers are requested.',
							items: {
								type: 'object',
								description: 'A sticker on the card.',
								properties: {
									id: { type: 'string', description: 'The ID of the sticker.' },
									top: {
										type: 'number',
										description: 'The top position of the sticker on the card.',
									},
									left: {
										type: 'number',
										description:
											'The left position of the sticker on the card.',
									},
									zIndex: {
										type: 'number',
										description: 'The z-index of the sticker on the card.',
									},
									rotate: {
										type: 'number',
										description: 'The rotation of the sticker in degrees.',
									},
									image: {
										type: 'string',
										description: 'The ID of the sticker image.',
									},
									imageUrl: {
										type: 'string',
										description: 'The URL of the sticker image.',
									},
									imageScaled: {
										type: 'array',
										description: 'Scaled versions of the sticker image.',
										items: {
											type: 'object',
											description: 'A scaled version of the sticker image.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
								},
								required: [],
							},
						},
						customFieldItems: {
							type: 'array',
							description:
								'The custom field values on the card. Returned when card custom field items are requested.',
							items: {
								type: 'object',
								description: 'A custom field value set on the card.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the custom field item.',
									},
									idCustomField: {
										type: 'string',
										description: 'The ID of the custom field definition.',
									},
									idModel: {
										type: 'string',
										description: 'The ID of the card the value is set on.',
									},
									modelType: {
										type: 'string',
										description:
											'The type of the model the value is set on: `card`.',
									},
									idValue: {
										type: 'string',
										description:
											'The ID of the selected option, for dropdown custom fields.',
									},
									value: {
										type: 'object',
										description:
											'The value of the custom field, keyed by type.',
										properties: {
											text: {
												type: 'string',
												description: 'The value of a text custom field.',
											},
											number: {
												type: 'string',
												description:
													'The value of a number custom field, as a string.',
											},
											date: {
												type: 'string',
												description: 'The value of a date custom field.',
											},
											checked: {
												type: 'string',
												description:
													'The value of a checkbox custom field: `true` or `false`, as a string.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						pluginData: {
							type: 'array',
							description:
								'The Power-Up data on the card. Returned when card plugin data is requested.',
							items: {
								type: 'object',
								description: 'Data stored by a Power-Up.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the plugin data.',
									},
									idPlugin: {
										type: 'string',
										description: 'The ID of the Power-Up.',
									},
									scope: {
										type: 'string',
										description:
											'The scope of the data: `board`, `card`, `member`, or `organization`.',
									},
									idModel: {
										type: 'string',
										description: 'The ID of the model the data is stored on.',
									},
									value: {
										type: 'string',
										description: 'The stored data, as a JSON string.',
									},
									access: {
										type: 'string',
										description:
											'The access level of the data: `private` or `shared`.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				board: {
					type: 'object',
					description:
						'The board the notification relates to. Returned when the `board` field is requested.',
					properties: {
						id: { type: 'string', description: 'The ID of the board.' },
						name: { type: 'string', description: 'The name of the board.' },
						desc: { type: 'string', description: 'The description of the board.' },
						descData: {
							type: 'object',
							description:
								'Data needed to display custom emoji used in the description, if any.',
							properties: {
								emoji: {
									type: 'object',
									description:
										'Custom emoji used in the text, keyed by emoji name.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							required: [],
						},
						closed: {
							type: 'boolean',
							description: 'Whether the board is closed (archived).',
						},
						idMemberCreator: {
							type: 'string',
							description: 'The ID of the member who created the board.',
						},
						idOrganization: {
							type: 'string',
							description: 'The ID of the Workspace the board belongs to.',
						},
						pinned: { type: 'boolean', description: 'Whether the board is pinned.' },
						url: { type: 'string', description: 'The persistent URL of the board.' },
						shortUrl: {
							type: 'string',
							description: 'The URL of the board using only its short ID.',
						},
						shortLink: {
							type: 'string',
							description: 'The 8-character short ID of the board.',
						},
						prefs: {
							type: 'object',
							description: 'The settings of the board.',
							properties: {
								permissionLevel: {
									type: 'string',
									description:
										'The visibility of the board: `org`, `private`, `public`, or `enterprise`.',
								},
								hideVotes: {
									type: 'boolean',
									description:
										'Whether the Voting Power-Up hides who voted on cards.',
								},
								voting: {
									type: 'string',
									description:
										'Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
								},
								comments: {
									type: 'string',
									description:
										'Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.',
								},
								invitations: {
									type: 'string',
									description:
										'Who can invite people to the board: `admins` or `members`.',
								},
								selfJoin: {
									type: 'boolean',
									description:
										'Whether Workspace members can join the board themselves.',
								},
								cardCovers: {
									type: 'boolean',
									description: 'Whether card covers are displayed.',
								},
								isTemplate: {
									type: 'boolean',
									description: 'Whether the board is a template.',
								},
								cardAging: {
									type: 'string',
									description: 'The card aging mode: `pirate` or `regular`.',
								},
								calendarFeedEnabled: {
									type: 'boolean',
									description: 'Whether the calendar feed is enabled.',
								},
								background: {
									type: 'string',
									description:
										'The ID of a custom background or the name of a background color.',
								},
								backgroundColor: {
									type: 'string',
									description:
										'The hex color of the background, if a color is used.',
								},
								backgroundImage: {
									type: 'string',
									description:
										'The URL of the background image, if an image is used.',
								},
								backgroundImageScaled: {
									type: 'array',
									description: 'Scaled versions of the background image.',
									items: {
										type: 'object',
										description: 'A scaled version of the background image.',
										properties: {
											width: {
												type: 'number',
												description: 'The width of the image in pixels.',
											},
											height: {
												type: 'number',
												description: 'The height of the image in pixels.',
											},
											url: {
												type: 'string',
												description: 'The URL of the scaled image.',
											},
										},
										required: [],
									},
								},
								backgroundTile: {
									type: 'boolean',
									description: 'Whether the background image is tiled.',
								},
								backgroundBrightness: {
									type: 'string',
									description:
										'The brightness of the background: `dark` or `light`.',
								},
								backgroundBottomColor: {
									type: 'string',
									description: 'The hex color at the bottom of the background.',
								},
								backgroundTopColor: {
									type: 'string',
									description: 'The hex color at the top of the background.',
								},
								canBePublic: {
									type: 'boolean',
									description: 'Whether the board can be made public.',
								},
								canBeEnterprise: {
									type: 'boolean',
									description:
										'Whether the board can be made visible to the Enterprise.',
								},
								canBeOrg: {
									type: 'boolean',
									description:
										'Whether the board can be made visible to the Workspace.',
								},
								canBePrivate: {
									type: 'boolean',
									description: 'Whether the board can be made private.',
								},
								canInvite: {
									type: 'boolean',
									description:
										'Whether the current member can invite people to the board.',
								},
							},
							required: [],
						},
						labelNames: {
							type: 'object',
							description: 'The label names of the board, keyed by label color.',
							properties: {
								green: {
									type: 'string',
									description: 'The name of the green label.',
								},
								yellow: {
									type: 'string',
									description: 'The name of the yellow label.',
								},
								orange: {
									type: 'string',
									description: 'The name of the orange label.',
								},
								red: { type: 'string', description: 'The name of the red label.' },
								purple: {
									type: 'string',
									description: 'The name of the purple label.',
								},
								blue: {
									type: 'string',
									description: 'The name of the blue label.',
								},
								sky: { type: 'string', description: 'The name of the sky label.' },
								lime: {
									type: 'string',
									description: 'The name of the lime label.',
								},
								pink: {
									type: 'string',
									description: 'The name of the pink label.',
								},
								black: {
									type: 'string',
									description: 'The name of the black label.',
								},
							},
							required: [],
						},
						limits: {
							type: 'object',
							description: 'The limits that apply to the board.',
							properties: {
								attachments: {
									type: 'object',
									description: 'Attachment limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of attachments per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								boards: {
									type: 'object',
									description: 'Board limits.',
									properties: {
										totalMembersPerBoard: {
											type: 'object',
											description: 'The limit of members per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								cards: {
									type: 'object',
									description: 'Card limits.',
									properties: {
										openPerBoard: {
											type: 'object',
											description: 'The limit of open cards per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
										totalPerBoard: {
											type: 'object',
											description: 'The limit of all cards per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								checklists: {
									type: 'object',
									description: 'Checklist limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of checklists per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								customFields: {
									type: 'object',
									description: 'Custom field limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of custom fields per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								labels: {
									type: 'object',
									description: 'Label limits.',
									properties: {
										perBoard: {
											type: 'object',
											description: 'The limit of labels per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
								lists: {
									type: 'object',
									description: 'List limits.',
									properties: {
										openPerBoard: {
											type: 'object',
											description: 'The limit of open lists per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
												},
											},
											required: [],
										},
										totalPerBoard: {
											type: 'object',
											description: 'The limit of all lists per board.',
											properties: {
												status: {
													type: 'string',
													description:
														'The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.',
												},
												disableAt: {
													type: 'number',
													description:
														'The count at which the limit is reached and the action is disabled.',
												},
												warnAt: {
													type: 'number',
													description:
														'The count at which a warning is shown.',
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
						starred: {
							type: 'boolean',
							description: 'Whether the board is starred by the current member.',
						},
						memberships: {
							type: 'array',
							description: 'The relationships of members to the board.',
							items: {
								type: 'object',
								description: 'The relationship of a member to the board.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the membership.',
									},
									idMember: {
										type: 'string',
										description: 'The ID of the member.',
									},
									memberType: {
										type: 'string',
										description:
											'The role of the member on the board: `admin`, `normal`, or `observer`.',
									},
									unconfirmed: {
										type: 'boolean',
										description:
											'Whether the member has not yet confirmed their account.',
									},
									deactivated: {
										type: 'boolean',
										description: 'Whether the member is deactivated.',
									},
								},
								required: [],
							},
						},
						subscribed: {
							type: 'boolean',
							description: 'Whether the current member is subscribed to the board.',
						},
						invited: {
							type: 'boolean',
							description: 'Whether the current member is invited to the board.',
						},
						invitations: {
							type: 'array',
							description: 'Pending invitations to the board.',
							items: {
								type: 'object',
								description: 'A pending invitation to the board.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						powerUps: {
							type: 'array',
							description: 'The Power-Ups enabled on the board.',
							items: {
								type: 'string',
								description: 'The name of a Power-Up enabled on the board.',
							},
						},
						dateLastActivity: {
							type: 'string',
							description: 'When the last activity on the board occurred.',
						},
						dateLastView: {
							type: 'string',
							description: 'When the current member last viewed the board.',
						},
						idTags: {
							type: 'array',
							description: 'The IDs of the collections (tags) the board belongs to.',
							items: {
								type: 'string',
								description: 'The ID of a collection the board belongs to.',
							},
						},
						datePluginDisable: {
							type: 'string',
							description: 'When Power-Ups were disabled on the board, if ever.',
						},
						creationMethod: {
							type: 'string',
							description: 'How the board was created.',
						},
						ixUpdate: {
							type: 'string',
							description: 'An internal update counter of the board.',
						},
						templateGallery: {
							type: 'string',
							description: 'The template gallery the board is published in, if any.',
						},
						enterpriseOwned: {
							type: 'boolean',
							description: 'Whether the board is owned by an Enterprise.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
