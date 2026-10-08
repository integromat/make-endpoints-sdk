// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'addPin',
		label: 'Pin a message',
		description: 'Pins a message to a channel.',
		context:
			"---\nname: addPin\ndescription: Pins a message to a channel.\n---\n\nWraps Slack's `pins.add`. Requires the `pins:write` scope.\n\nReference: [pins.add](https://api.slack.com/methods/pins.add)",
		accounts: { slack2: { scope: ['pins:write'] } },
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
				channel: { type: 'string', description: 'Channel to pin the message to.' },
				timestamp: {
					type: 'string',
					description:
						"Timestamp of the message to pin. Slack's docs list this as optional, but it is functionally required when pinning a message.",
				},
			},
			required: ['channel', 'timestamp'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'addReaction',
		label: 'Add a reaction',
		description: 'Adds an emoji reaction to a message.',
		context:
			"---\nname: addReaction\ndescription: Adds an emoji reaction to a message.\n---\n\nWraps Slack's `reactions.add`. Requires the `reactions:write` scope.\n\n`name` is the emoji's short name without colons, as shown in Slack's emoji picker (for example `thumbsup`,\nor `thumbsup::skin-tone-6` for a skin-tone variant).\n\nReference: [reactions.add](https://api.slack.com/methods/reactions.add)",
		accounts: { slack2: { scope: ['reactions:write'] } },
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
				channel: {
					type: 'string',
					description: 'Channel where the message to react to was posted.',
				},
				timestamp: {
					type: 'string',
					description: 'Timestamp of the message to add the reaction to.',
				},
				name: {
					type: 'string',
					description:
						'Name of the emoji reaction to add, without colons, for example `thumbsup` or `thumbsup::skin-tone-6`.',
				},
			},
			required: ['channel', 'timestamp', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Slack Web API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://slack.com/api/`. Provide the remaining path in the `url` parameter (e.g.\n`conversations.list`). This endpoint is attached to both the "Slack (user)" and "Slack (bot)" connections —\npick whichever the target method requires when running the call. Methods like `search.messages`,\n`conversations.unarchive`, and `users.profile.set` only work with a user token, so select the "Slack (user)"\nconnection for those; most other methods work with either.\n\nSet `domain` to `https://hooks.slack.com/` to call an incoming webhook URL instead of the Web API.\n\nRefer to the [Slack API method reference](https://api.slack.com/methods) for available methods, required\nparameters, and response schemas.',
		accounts: { slack2: { scope: [] }, slack3: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://slack.com/api/`. For example, `conversations.list`.',
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
						'The HTTP request body. This input is ignored if the HTTP request method is `GET`.',
				},
				domain: {
					type: 'string',
					description:
						'The base URL to send the request against. Most Slack Web API methods use the default; incoming webhook calls use `https://hooks.slack.com/`.',
					default: '',
					'x-advanced': true,
					enum: ['', 'https://slack.com/api/', 'https://hooks.slack.com/'],
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
		appName: 'slack',
		appVersion: 4,
		endpointName: 'archiveChannel',
		label: 'Archive a channel',
		description: 'Archives a channel.',
		context:
			"---\nname: archiveChannel\ndescription: Archives a channel.\n---\n\nWraps Slack's `conversations.archive`. Requires one of `channels:manage`, `groups:write`, `im:write`,\n`mpim:write` depending on the channel type.\n\nArchiving is reversible via `unarchiveChannel`, but note that endpoint requires a user token.\n\nReference: [conversations.archive](https://api.slack.com/methods/conversations.archive)",
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
				channel: { type: 'string', description: 'ID of the conversation to archive.' },
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'completeUploadExternal',
		label: 'Complete a file upload',
		description: 'Finalizes an external file upload and optionally shares it to a channel.',
		context:
			"---\nname: completeUploadExternal\ndescription: Finalizes an external file upload and optionally shares it to a channel.\n---\n\nWraps Slack's `files.completeUploadExternal`. Requires the `files:write` scope; `username`/`icon_url`/\n`icon_emoji` additionally require `chat:write.customize`.\n\nThis is step 3 of the modern upload flow — call `getUploadURLExternal` first to get an `upload_url` and\n`file_id`, upload the raw bytes to that URL directly (outside this endpoint), then pass the `file_id`\nhere in `files` to finalize. Omit `channel_id`/`channels` to keep the file private.\n\nReference: [files.completeUploadExternal](https://api.slack.com/methods/files.completeUploadExternal)",
		accounts: { slack2: { scope: ['files:write'] } },
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
				files: {
					type: 'array',
					description:
						'Files to complete the upload for, as returned by `getUploadURLExternal`.',
					items: {
						type: 'object',
						description: 'A single uploaded file to finalize.',
						properties: {
							id: {
								type: 'string',
								description: 'File ID returned by `getUploadURLExternal`.',
							},
						},
						required: [],
					},
				},
				channel_id: {
					type: 'string',
					description: 'Channel to share the file to. The file stays private if omitted.',
				},
				thread_ts: {
					type: 'string',
					description:
						'Timestamp of the parent message to share the file into as a thread reply.',
				},
				channels: {
					type: 'array',
					description: 'Up to 100 additional channel or user IDs to share the file to.',
					items: {
						type: 'string',
						description: 'ID of a channel or user to share the file to.',
					},
				},
				initial_comment: {
					type: 'string',
					description: 'Message text to introduce the file with.',
				},
				blocks: {
					description:
						'Raw [Block Kit](https://api.slack.com/block-kit) blocks array for the share message. Ignored if `initial_comment` is set.',
				},
				username: {
					type: 'string',
					description:
						'Custom username for the share message. Requires the `chat:write.customize` scope.',
				},
				icon_url: {
					type: 'string',
					description:
						'Custom icon image URL for the share message. Requires the `chat:write.customize` scope.',
				},
				icon_emoji: {
					type: 'string',
					description:
						'Custom icon emoji for the share message, overrides `icon_url`. Requires the `chat:write.customize` scope.',
				},
			},
			required: ['files'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				files: {
					type: 'array',
					description: 'The finalized files.',
					items: {
						type: 'object',
						description: 'A single finalized file.',
						properties: { id: { type: 'string', description: 'ID of the file.' } },
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'createChannel',
		label: 'Create a channel',
		description: 'Creates a new public or private channel.',
		context:
			"---\nname: createChannel\ndescription: Creates a new public or private channel.\n---\n\nWraps Slack's `conversations.create`. Requires one of `channels:manage`, `groups:write`, `im:write`,\n`mpim:write` depending on the resulting channel type — `channels:manage` covers the common case of\ncreating a public or private channel.\n\n`name` must be lowercase, without spaces or periods, and shorter than 80 characters; Slack will error on\ninvalid names or duplicates rather than silently renaming.\n\nReference: [conversations.create](https://api.slack.com/methods/conversations.create)",
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
					description:
						'Name of the channel to create. Must be lowercase, without spaces or periods, and shorter than 80 characters.',
				},
				is_private: {
					type: 'boolean',
					description: 'Whether to create a private channel instead of a public one.',
				},
				team_id: {
					type: 'string',
					description:
						'Encoded team ID to create the channel in. Required when using an org-wide token.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'object',
					description: 'The newly created channel object.',
					properties: {
						id: { type: 'string', description: 'ID of the channel.' },
						name: { type: 'string', description: 'Name of the channel.' },
						is_channel: { type: 'boolean', description: 'Whether this is a channel.' },
						is_group: {
							type: 'boolean',
							description: 'Whether this is a private channel (group).',
						},
						is_private: {
							type: 'boolean',
							description: 'Whether the channel is private.',
						},
						is_archived: {
							type: 'boolean',
							description: 'Whether the channel is archived.',
						},
						is_general: {
							type: 'boolean',
							description:
								'Whether this is the workspace\'s default "general" channel.',
						},
						created: {
							type: 'number',
							description: 'Unix timestamp of when the channel was created.',
						},
						creator: {
							type: 'string',
							description: 'ID of the user who created the channel.',
						},
						name_normalized: {
							type: 'string',
							description:
								'Name of the channel, normalized to remove characters not allowed in channel names.',
						},
						is_member: {
							type: 'boolean',
							description:
								'Whether the calling user or bot is a member of the channel.',
						},
						is_shared: {
							type: 'boolean',
							description: 'Whether the channel is shared between workspaces.',
						},
						topic: {
							type: 'object',
							description: "The channel's current topic.",
							properties: {
								value: { type: 'string', description: 'Topic text.' },
								creator: {
									type: 'string',
									description: 'ID of the user who set the topic.',
								},
								last_set: {
									type: 'number',
									description: 'Unix timestamp of when the topic was last set.',
								},
							},
							required: [],
						},
						purpose: {
							type: 'object',
							description: "The channel's current purpose.",
							properties: {
								value: { type: 'string', description: 'Purpose text.' },
								creator: {
									type: 'string',
									description: 'ID of the user who set the purpose.',
								},
								last_set: {
									type: 'number',
									description: 'Unix timestamp of when the purpose was last set.',
								},
							},
							required: [],
						},
						previous_names: {
							type: 'array',
							description: 'Former names of the channel.',
							items: { type: 'string', description: 'A former name of the channel.' },
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'deleteFile',
		label: 'Delete a file',
		description: 'Deletes a file.',
		context:
			"---\nname: deleteFile\ndescription: Deletes a file.\n---\n\nWraps Slack's `files.delete`. Requires the `files:write` scope. This is irreversible.\n\nReference: [files.delete](https://api.slack.com/methods/files.delete)",
		accounts: { slack2: { scope: ['files:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: { file: { type: 'string', description: 'ID of the file to delete.' } },
			required: ['file'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'deleteMessage',
		label: 'Delete a message',
		description: 'Deletes a message.',
		context:
			"---\nname: deleteMessage\ndescription: Deletes a message.\n---\n\nWraps Slack's `chat.delete`. Requires the `chat:write` scope. With a bot token, only messages posted by\nthat same bot can be deleted; with a user token, only messages that user could delete in the Slack client.\n\nThis is irreversible — there is no undo.\n\nReference: [chat.delete](https://api.slack.com/methods/chat.delete)",
		accounts: { slack2: { scope: ['chat:write'] }, slack3: { scope: ['chat:write'] } },
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
				channel: {
					type: 'string',
					description: 'Channel containing the message to delete.',
				},
				ts: {
					type: 'string',
					description:
						'Timestamp of the message to delete, for example `1405894322.002768`.',
				},
			},
			required: ['channel', 'ts'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'string',
					description: 'ID of the channel the deleted message was in.',
				},
				ts: { type: 'string', description: 'Timestamp of the deleted message.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'getChannel',
		label: 'Get a channel',
		description: 'Returns information about a channel or conversation.',
		context:
			"---\nname: getChannel\ndescription: Returns information about a channel or conversation.\n---\n\nWraps Slack's `conversations.info`. Requires the OAuth scope matching the conversation type:\n`channels:read`, `groups:read`, `im:read`, or `mpim:read`.\n\nSet `include_num_members: true` to get a member count, or `include_locale: true` to get the conversation's\nlocale — both are omitted from the response by default.\n\nReference: [conversations.info](https://api.slack.com/methods/conversations.info)",
		accounts: { slack2: { scope: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] } },
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
				channel: {
					type: 'string',
					description: 'ID of the conversation to retrieve information about.',
				},
				include_locale: {
					type: 'boolean',
					description: 'Whether to include the locale for this conversation.',
				},
				include_num_members: {
					type: 'boolean',
					description: 'Whether to include the member count for this conversation.',
				},
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'object',
					description: 'The requested channel object.',
					properties: {
						id: { type: 'string', description: 'ID of the channel.' },
						name: { type: 'string', description: 'Name of the channel.' },
						name_normalized: {
							type: 'string',
							description:
								'Name of the channel, normalized to remove characters not allowed in channel names.',
						},
						is_channel: {
							type: 'boolean',
							description: 'Whether this is a public channel.',
						},
						is_group: {
							type: 'boolean',
							description: 'Whether this is a private channel (group).',
						},
						is_im: {
							type: 'boolean',
							description: 'Whether this is a direct message conversation.',
						},
						is_mpim: {
							type: 'boolean',
							description: 'Whether this is a multi-person direct message.',
						},
						is_private: {
							type: 'boolean',
							description: 'Whether the conversation is private.',
						},
						is_archived: {
							type: 'boolean',
							description: 'Whether the conversation is archived.',
						},
						is_general: {
							type: 'boolean',
							description:
								'Whether this is the workspace\'s default "general" channel.',
						},
						is_shared: {
							type: 'boolean',
							description: 'Whether the conversation is shared between workspaces.',
						},
						is_org_shared: {
							type: 'boolean',
							description:
								'Whether the conversation is shared across an Enterprise Grid organization.',
						},
						is_member: {
							type: 'boolean',
							description: 'Whether the calling user or bot is a member.',
						},
						created: {
							type: 'number',
							description: 'Unix timestamp of when the conversation was created.',
						},
						updated: {
							type: 'number',
							description:
								'Unix timestamp of when the conversation was last updated.',
						},
						creator: {
							type: 'string',
							description: 'ID of the user who created the conversation.',
						},
						user: {
							type: 'string',
							description:
								"The other member's user ID, present only for direct message conversations.",
						},
						topic: {
							type: 'object',
							description: "The conversation's current topic.",
							properties: {
								value: { type: 'string', description: 'Topic text.' },
								creator: {
									type: 'string',
									description: 'ID of the user who set the topic.',
								},
								last_set: {
									type: 'number',
									description: 'Unix timestamp of when the topic was last set.',
								},
							},
							required: [],
						},
						purpose: {
							type: 'object',
							description: "The conversation's current purpose.",
							properties: {
								value: { type: 'string', description: 'Purpose text.' },
								creator: {
									type: 'string',
									description: 'ID of the user who set the purpose.',
								},
								last_set: {
									type: 'number',
									description: 'Unix timestamp of when the purpose was last set.',
								},
							},
							required: [],
						},
						previous_names: {
							type: 'array',
							description: 'Former names of the channel.',
							items: { type: 'string', description: 'A former name of the channel.' },
						},
						num_members: {
							type: 'number',
							description:
								'Number of members in the conversation. Present only when `include_num_members` was set.',
						},
						locale: {
							type: 'string',
							description:
								'Locale of the conversation. Present only when `include_locale` was set.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'getChannelHistory',
		label: 'Get channel history',
		description: 'Returns a chronological list of messages in a channel or conversation.',
		context:
			"---\nname: getChannelHistory\ndescription: Returns a chronological list of messages in a channel or conversation.\n---\n\nWraps Slack's `conversations.history`. Requires the OAuth scope matching the conversation type:\n`channels:history` (public channel), `groups:history` (private channel), `im:history` (direct message),\nor `mpim:history` (multi-person direct message).\n\nResults are paginated: pass the `next_cursor` from `response_metadata` in a previous response as `cursor`\nto fetch the next page. `has_more` indicates whether additional pages exist.\n\nThe `messages` output field documents commonly used message fields only. `blocks` and `attachments` are\npassed through as raw JSON exactly as Slack returns them.\n\nReference: [conversations.history](https://api.slack.com/methods/conversations.history)",
		accounts: {
			slack2: { scope: ['channels:history', 'groups:history', 'im:history', 'mpim:history'] },
		},
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
				channel: {
					type: 'string',
					description: 'ID of the conversation to fetch history for.',
				},
				oldest: {
					type: 'string',
					description:
						'Only messages after this Unix timestamp will be included in results. Defaults to the beginning of time.',
				},
				latest: {
					type: 'string',
					description:
						'Only messages before this Unix timestamp will be included in results. Defaults to the current time.',
				},
				inclusive: {
					type: 'boolean',
					description:
						'Whether to include messages with the `oldest` or `latest` timestamps in results.',
				},
				include_all_metadata: {
					type: 'boolean',
					description: 'Whether to return all metadata associated with each message.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of messages to return, up to 999.',
					default: 100,
					maximum: 999,
				},
				cursor: {
					type: 'string',
					description:
						'Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.',
				},
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				messages: {
					type: 'array',
					description: "The channel's messages, most recent first.",
					items: {
						type: 'object',
						description: 'A single message.',
						properties: {
							type: {
								type: 'string',
								description: 'Object type, typically `message`.',
							},
							subtype: { type: 'string', description: 'Message subtype, if any.' },
							text: {
								type: 'string',
								description: 'Plain-text content of the message.',
							},
							ts: { type: 'string', description: 'Timestamp ID of the message.' },
							user: {
								type: 'string',
								description: 'ID of the user who authored the message.',
							},
							bot_id: {
								type: 'string',
								description:
									'ID of the bot that posted the message, if posted as a bot.',
							},
							team: {
								type: 'string',
								description: 'ID of the team the message belongs to.',
							},
							thread_ts: {
								type: 'string',
								description:
									'Timestamp of the parent message, if this message is part of a thread.',
							},
							reply_count: {
								type: 'number',
								description:
									'Number of replies in the thread, if this message started one.',
							},
							blocks: {
								description:
									'Raw Block Kit blocks of the message, as returned by Slack.',
							},
							attachments: {
								description:
									'Legacy structured attachments of the message, as returned by Slack.',
							},
						},
						required: [],
					},
				},
				has_more: {
					type: 'boolean',
					description: 'Whether more messages are available beyond this page.',
				},
				pin_count: {
					type: 'number',
					description: 'Number of pinned messages in the channel.',
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'getFileInfo',
		label: 'Get a file',
		description: 'Returns information about a file, including its comments.',
		context:
			"---\nname: getFileInfo\ndescription: Returns information about a file, including its comments.\n---\n\nWraps Slack's `files.info`. Requires the `files:read` scope.\n\n`file.url_private_download` is the direct download link for the file's raw content — fetch that URL\n(with the same Slack auth) to download the file itself; there is no separate Slack API method for that.\n\n`count`/`page` and `cursor`/`limit` are two alternative pagination styles for the `comments` list —\nuse one or the other, not both.\n\nReference: [files.info](https://api.slack.com/methods/files.info)",
		accounts: { slack2: { scope: ['files:read'] } },
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
				file: {
					type: 'string',
					description: 'ID of the file to retrieve, for example `F2147483862`.',
				},
				count: {
					type: 'number',
					description: 'Number of comments to return per page.',
					default: 100,
				},
				page: {
					type: 'number',
					description: 'Page number of comments to return.',
					default: 1,
				},
				cursor: {
					type: 'string',
					description:
						'Cursor-based pagination token for comments, as an alternative to `page`.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of comment items to return when using cursor-based pagination.',
				},
			},
			required: ['file'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				file: {
					type: 'object',
					description: 'The requested file object.',
					properties: {
						id: { type: 'string', description: 'ID of the file.' },
						created: {
							type: 'number',
							description: 'Unix timestamp of when the file was created.',
						},
						name: { type: 'string', description: 'File name.' },
						mimetype: { type: 'string', description: 'MIME type of the file.' },
						filetype: {
							type: 'string',
							description: "Slack's internal file type identifier.",
						},
						pretty_type: {
							type: 'string',
							description: 'Human-readable file type name.',
						},
						user: {
							type: 'string',
							description: 'ID of the user who uploaded the file.',
						},
						editable: {
							type: 'boolean',
							description:
								'Whether the file can be edited in Slack (for example, a Slack-native snippet or post).',
						},
						size: { type: 'number', description: 'File size in bytes.' },
						is_external: {
							type: 'boolean',
							description:
								'Whether the file is hosted externally rather than by Slack.',
						},
						external_type: {
							type: 'string',
							description:
								'Type of the external file source, when `is_external` is true.',
						},
						is_public: {
							type: 'boolean',
							description: 'Whether the file has been made public.',
						},
						public_url_shared: {
							type: 'boolean',
							description: "Whether the file's public URL has been shared.",
						},
						username: {
							type: 'string',
							description:
								'Display username associated with the file, if posted by a bot.',
						},
						url_private: {
							type: 'string',
							description:
								'URL to view the file, valid only with a Slack session/token.',
						},
						url_private_download: {
							type: 'string',
							description:
								'URL to download the raw file content, valid only with a Slack session/token.',
						},
						permalink: {
							type: 'string',
							description: 'Permanent URL to the file in Slack.',
						},
						permalink_public: {
							type: 'string',
							description:
								'Public permanent URL to the file, present only when the file has been made public.',
						},
						comments_count: {
							type: 'number',
							description: 'Number of comments on the file.',
						},
						is_starred: {
							type: 'boolean',
							description: 'Whether the calling user has starred this file.',
						},
						channels: {
							type: 'array',
							description: 'IDs of channels the file was shared to.',
							items: {
								type: 'string',
								description: 'ID of a channel the file was shared to.',
							},
						},
						groups: {
							type: 'array',
							description: 'IDs of private channels the file was shared to.',
							items: {
								type: 'string',
								description: 'ID of a private channel the file was shared to.',
							},
						},
						ims: {
							type: 'array',
							description:
								'IDs of direct message conversations the file was shared to.',
							items: {
								type: 'string',
								description:
									'ID of a direct message conversation the file was shared to.',
							},
						},
						alt_txt: {
							type: 'string',
							description: 'Screen-reader description of the file, for images.',
						},
					},
					required: [],
				},
				comments: {
					type: 'array',
					description: 'Comments on the file, as raw JSON returned by Slack.',
					items: { description: 'A single comment on the file.' },
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for the comments list.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page of comments.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'getUploadURLExternal',
		label: 'Get a file upload URL',
		description:
			'Requests a URL for uploading file data, the first step of the modern file upload flow.',
		context:
			"---\nname: getUploadURLExternal\ndescription: Requests a URL for uploading file data, the first step of the modern file upload flow.\n---\n\nWraps Slack's `files.getUploadURLExternal`. Requires the `files:write` scope.\n\nThis is step 1 of Slack's 3-step upload flow, which replaces the now fully sunset `files.upload` method:\n\n1. **This endpoint** — get an `upload_url` and `file_id`.\n2. **Outside of Slack/Make entirely** — the caller sends the raw file bytes as an HTTP POST body directly\n   to `upload_url`. This is not a Slack API call and not itself wrapped as an endpoint, since SDK\n   Endpoints don't support binary input.\n3. **`completeUploadExternal`** — pass the `file_id` back in to finalize the upload and optionally share\n   it to a channel.\n\nReference: [files.getUploadURLExternal](https://api.slack.com/methods/files.getUploadURLExternal)",
		accounts: { slack2: { scope: ['files:write'] } },
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
				filename: { type: 'string', description: 'Name of the file being uploaded.' },
				length: {
					type: 'number',
					description: 'Size in bytes of the file being uploaded.',
				},
				snippet_type: {
					type: 'string',
					description:
						'Syntax type of the snippet being uploaded, for example `python` or `json`, when uploading a code snippet.',
				},
				alt_txt: {
					type: 'string',
					description:
						'Description of the image for screen readers, when uploading an image.',
				},
			},
			required: ['filename', 'length'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				upload_url: {
					type: 'string',
					description:
						'URL to upload the raw file bytes to via an HTTP POST, outside of this endpoint.',
				},
				file_id: {
					type: 'string',
					description:
						'ID assigned to the file. Pass this to `completeUploadExternal` after uploading the file content.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'getUser',
		label: 'Get a user',
		description: 'Returns information about a user.',
		context:
			"---\nname: getUser\ndescription: Returns information about a user.\n---\n\nWraps Slack's `users.info`. Requires the `users:read` scope; add `users:read.email` to receive\n`profile.email` in the response (omitted otherwise).\n\nReference: [users.info](https://api.slack.com/methods/users.info)",
		accounts: { slack2: { scope: ['users:read', 'users:read.email'] } },
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
				user: { type: 'string', description: 'ID of the user to retrieve.' },
				include_locale: {
					type: 'boolean',
					description: "Whether to include the user's locale in the response.",
				},
			},
			required: ['user'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				user: {
					type: 'object',
					description: 'The requested user object.',
					properties: {
						id: { type: 'string', description: 'ID of the user.' },
						team_id: { type: 'string', description: "ID of the user's workspace." },
						name: { type: 'string', description: "The user's Slack username." },
						deleted: {
							type: 'boolean',
							description: "Whether the user's account has been deactivated.",
						},
						real_name: { type: 'string', description: "The user's full name." },
						tz: { type: 'string', description: "The user's IANA timezone identifier." },
						tz_label: {
							type: 'string',
							description: "Human-readable name of the user's timezone.",
						},
						tz_offset: {
							type: 'number',
							description: "Offset of the user's timezone from UTC, in seconds.",
						},
						is_admin: {
							type: 'boolean',
							description: 'Whether the user is a workspace admin.',
						},
						is_owner: {
							type: 'boolean',
							description: 'Whether the user is a workspace owner.',
						},
						is_primary_owner: {
							type: 'boolean',
							description: "Whether the user is the workspace's primary owner.",
						},
						is_restricted: {
							type: 'boolean',
							description: 'Whether the user is a multi-channel guest.',
						},
						is_ultra_restricted: {
							type: 'boolean',
							description: 'Whether the user is a single-channel guest.',
						},
						is_bot: { type: 'boolean', description: 'Whether the user is a bot user.' },
						is_app_user: {
							type: 'boolean',
							description: "Whether the user is an app's user identity.",
						},
						updated: {
							type: 'number',
							description:
								"Unix timestamp of when the user's profile was last updated.",
						},
						has_2fa: {
							type: 'boolean',
							description: 'Whether the user has two-factor authentication enabled.',
						},
						locale: {
							type: 'string',
							description:
								"The user's locale. Present only when `include_locale` was set.",
						},
						profile: {
							type: 'object',
							description: "The user's profile details.",
							properties: {
								avatar_hash: {
									type: 'string',
									description: "Hash used to build the user's avatar image URLs.",
								},
								status_text: {
									type: 'string',
									description: "The user's custom status text.",
								},
								status_emoji: {
									type: 'string',
									description: "The user's custom status emoji.",
								},
								real_name: { type: 'string', description: "The user's full name." },
								display_name: {
									type: 'string',
									description: "The user's display name.",
								},
								real_name_normalized: {
									type: 'string',
									description: "The user's full name, normalized.",
								},
								display_name_normalized: {
									type: 'string',
									description: "The user's display name, normalized.",
								},
								email: {
									type: 'string',
									description:
										"The user's email address. Requires the `users:read.email` scope.",
								},
								image_24: {
									type: 'string',
									description: "URL of the user's 24px avatar image.",
								},
								image_32: {
									type: 'string',
									description: "URL of the user's 32px avatar image.",
								},
								image_48: {
									type: 'string',
									description: "URL of the user's 48px avatar image.",
								},
								image_72: {
									type: 'string',
									description: "URL of the user's 72px avatar image.",
								},
								image_192: {
									type: 'string',
									description: "URL of the user's 192px avatar image.",
								},
								image_512: {
									type: 'string',
									description: "URL of the user's 512px avatar image.",
								},
								team: {
									type: 'string',
									description: "ID of the user's workspace.",
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
		appName: 'slack',
		appVersion: 4,
		endpointName: 'inviteToChannel',
		label: 'Invite users to a channel',
		description: 'Invites one or more users to a channel.',
		context:
			"---\nname: inviteToChannel\ndescription: Invites one or more users to a channel.\n---\n\nWraps Slack's `conversations.invite`. Requires one of `channels:manage`, `channels:write.invites`,\n`groups:write`, `groups:write.invites`, `im:write`, `mpim:write` depending on the channel type.\n\nSet `force: true` to invite the valid users in `users` even if some IDs in the list are invalid, instead\nof failing the entire call.\n\nReference: [conversations.invite](https://api.slack.com/methods/conversations.invite)",
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
				channel: {
					type: 'string',
					description: 'ID of the public or private channel to invite users to.',
				},
				users: {
					type: 'array',
					description: 'IDs of the users to invite, up to 1000 per call.',
					items: { type: 'string', description: 'ID of a user to invite.' },
				},
				force: {
					type: 'boolean',
					description:
						'When true, continues inviting valid users even if some of the given user IDs are invalid, instead of failing the whole call.',
				},
			},
			required: ['channel', 'users'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'object',
					description: 'The channel object, reflecting the updated membership.',
					properties: {
						id: { type: 'string', description: 'ID of the channel.' },
						name: { type: 'string', description: 'Name of the channel.' },
						is_channel: {
							type: 'boolean',
							description: 'Whether this is a public channel.',
						},
						is_group: {
							type: 'boolean',
							description: 'Whether this is a private channel (group).',
						},
						is_private: {
							type: 'boolean',
							description: 'Whether the channel is private.',
						},
						is_archived: {
							type: 'boolean',
							description: 'Whether the channel is archived.',
						},
						is_general: {
							type: 'boolean',
							description:
								'Whether this is the workspace\'s default "general" channel.',
						},
						is_member: {
							type: 'boolean',
							description: 'Whether the calling user or bot is a member.',
						},
						is_read_only: {
							type: 'boolean',
							description: 'Whether the channel is read-only.',
						},
						created: {
							type: 'number',
							description: 'Unix timestamp of when the channel was created.',
						},
						creator: {
							type: 'string',
							description: 'ID of the user who created the channel.',
						},
						name_normalized: {
							type: 'string',
							description:
								'Name of the channel, normalized to remove characters not allowed in channel names.',
						},
						topic: {
							type: 'object',
							description: "The channel's current topic.",
							properties: { value: { type: 'string', description: 'Topic text.' } },
							required: [],
						},
						purpose: {
							type: 'object',
							description: "The channel's current purpose.",
							properties: { value: { type: 'string', description: 'Purpose text.' } },
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
		appName: 'slack',
		appVersion: 4,
		endpointName: 'joinChannel',
		label: 'Join a channel',
		description: 'Joins an existing conversation.',
		context:
			'---\nname: joinChannel\ndescription: Joins an existing conversation.\n---\n\nWraps Slack\'s `conversations.join`. Requires the `channels:join` scope. Only works for public channels —\nprivate channels and DMs must be joined via an explicit invite (`inviteToChannel`).\n\nCalling this on a channel the caller already belongs to succeeds and returns\n`warning: "already_in_channel"` rather than an error.\n\nReference: [conversations.join](https://api.slack.com/methods/conversations.join)',
		accounts: { slack2: { scope: ['channels:write'] } },
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
				channel: { type: 'string', description: 'ID of the conversation to join.' },
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'object',
					description: 'The joined channel object.',
					properties: {
						id: { type: 'string', description: 'ID of the channel.' },
						name: { type: 'string', description: 'Name of the channel.' },
						is_channel: {
							type: 'boolean',
							description: 'Whether this is a public channel.',
						},
						is_private: {
							type: 'boolean',
							description: 'Whether the channel is private.',
						},
						is_archived: {
							type: 'boolean',
							description: 'Whether the channel is archived.',
						},
						is_member: {
							type: 'boolean',
							description:
								'Whether the calling user or bot is a member (should be `true` after joining).',
						},
						created: {
							type: 'number',
							description: 'Unix timestamp of when the channel was created.',
						},
						creator: {
							type: 'string',
							description: 'ID of the user who created the channel.',
						},
						topic: {
							type: 'object',
							description: "The channel's current topic.",
							properties: { value: { type: 'string', description: 'Topic text.' } },
							required: [],
						},
						purpose: {
							type: 'object',
							description: "The channel's current purpose.",
							properties: { value: { type: 'string', description: 'Purpose text.' } },
							required: [],
						},
					},
					required: [],
				},
				warning: {
					type: 'string',
					description:
						'Set to `already_in_channel` when the caller was already a member; the call still succeeds.',
				},
				response_metadata: {
					type: 'object',
					description: 'Non-fatal warnings for this call.',
					properties: {
						warnings: {
							type: 'array',
							description: 'Warning codes returned alongside a successful response.',
							items: { type: 'string', description: 'A single warning code.' },
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'kickFromChannel',
		label: 'Remove a user from a channel',
		description: 'Removes a user from a channel.',
		context:
			'---\nname: kickFromChannel\ndescription: Removes a user from a channel.\n---\n\nWraps Slack\'s `conversations.kick`. Requires `channels:manage` for public channels, `groups:write` for\nprivate channels (Slack treats private channels as "groups" internally).\n\nReference: [conversations.kick](https://api.slack.com/methods/conversations.kick)',
		accounts: { slack2: { scope: ['channels:write', 'groups:write'] } },
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
				channel: {
					type: 'string',
					description: 'ID of the conversation to remove the user from.',
				},
				user: { type: 'string', description: 'ID of the user to remove from the channel.' },
			},
			required: ['channel', 'user'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				errors: {
					type: 'object',
					description: 'Per-item error details, if any occurred.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'leaveChannel',
		label: 'Leave a channel',
		description: 'Leaves a conversation.',
		context:
			'---\nname: leaveChannel\ndescription: Leaves a conversation.\n---\n\nWraps Slack\'s `conversations.leave`. Requires one of `channels:manage`, `groups:write`, `im:write`,\n`mpim:write` depending on the channel type.\n\nCannot be used to leave the workspace\'s default "general" channel (Slack returns `cant_leave_general`).\nIf the caller was already not a member, the response still has `ok: true` with `not_in_channel: true`.\n\nReference: [conversations.leave](https://api.slack.com/methods/conversations.leave)',
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
				channel: { type: 'string', description: 'ID of the conversation to leave.' },
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				not_in_channel: {
					type: 'boolean',
					description:
						'Present and `true` when the caller was not a member of the channel to begin with.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'listChannelMembers',
		label: 'List members in a channel',
		description: 'Returns the IDs of members in a channel or conversation.',
		context:
			"---\nname: listChannelMembers\ndescription: Returns the IDs of members in a channel or conversation.\n---\n\nWraps Slack's `conversations.members`. Requires the OAuth scope matching the conversation type:\n`channels:read`, `groups:read`, `im:read`, or `mpim:read`.\n\nReturns only user IDs, not full user objects — use `getUser` to resolve a specific ID to profile details.\n\nResults are paginated: pass the `next_cursor` from `response_metadata` in a previous response as `cursor`\nto fetch the next page. Slack recommends a `limit` of 200 or less per request.\n\nReference: [conversations.members](https://api.slack.com/methods/conversations.members)",
		accounts: { slack2: { scope: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] } },
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
				channel: {
					type: 'string',
					description: 'ID of the conversation to retrieve members for.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of items to return. Recommended maximum of 200 per request.',
					default: 100,
				},
				cursor: {
					type: 'string',
					description:
						'Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.',
				},
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				members: {
					type: 'array',
					description: 'IDs of the users in the conversation.',
					items: { type: 'string', description: 'ID of a member of the conversation.' },
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'listChannels',
		label: 'List channels',
		description: 'Returns a list of conversations in the workspace.',
		context:
			"---\nname: listChannels\ndescription: Returns a list of conversations in the workspace.\n---\n\nWraps Slack's `conversations.list`. Requires at least one of `channels:read`, `groups:read`, `im:read`,\n`mpim:read` — which conversation types are returned depends on both `types` and which of those scopes are\ngranted.\n\n`types` is a comma-separated list, for example `public_channel,private_channel,mpim,im`. Defaults to\n`public_channel` only.\n\nResults are paginated: pass the `next_cursor` from `response_metadata` in a previous response as `cursor`\nto fetch the next page.\n\nReference: [conversations.list](https://api.slack.com/methods/conversations.list)",
		accounts: { slack2: { scope: ['channels:read', 'groups:read', 'im:read', 'mpim:read'] } },
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
				types: {
					type: 'string',
					description: 'Conversation types to include.',
					default: '',
					enum: ['', 'public_channel', 'private_channel', 'mpim', 'im'],
				},
				exclude_archived: {
					type: 'boolean',
					description: 'Whether to omit archived channels from the results.',
				},
				team_id: {
					type: 'string',
					description:
						'Encoded team ID to list channels for. Required when using an org-wide token.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of items to return, under 1000.',
					default: 100,
					maximum: 999,
				},
				cursor: {
					type: 'string',
					description:
						'Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channels: {
					type: 'array',
					description: "The workspace's conversations matching the requested types.",
					items: {
						type: 'object',
						description: 'A single conversation.',
						properties: {
							id: { type: 'string', description: 'ID of the channel.' },
							name: { type: 'string', description: 'Name of the channel.' },
							is_channel: {
								type: 'boolean',
								description: 'Whether this is a public channel.',
							},
							is_private: {
								type: 'boolean',
								description: 'Whether the channel is private.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the channel is archived.',
							},
							is_general: {
								type: 'boolean',
								description:
									'Whether this is the workspace\'s default "general" channel.',
							},
							created: {
								type: 'number',
								description: 'Unix timestamp of when the channel was created.',
							},
							creator: {
								type: 'string',
								description: 'ID of the user who created the channel.',
							},
							num_members: {
								type: 'number',
								description: 'Number of members in the channel.',
							},
							topic: {
								type: 'object',
								description: "The channel's current topic.",
								properties: {
									value: { type: 'string', description: 'Topic text.' },
								},
								required: [],
							},
							purpose: {
								type: 'object',
								description: "The channel's current purpose.",
								properties: {
									value: { type: 'string', description: 'Purpose text.' },
								},
								required: [],
							},
						},
						required: [],
					},
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'listFiles',
		label: 'List files',
		description: 'Returns a list of files shared in the workspace.',
		context:
			"---\nname: listFiles\ndescription: Returns a list of files shared in the workspace.\n---\n\nWraps Slack's `files.list`. Requires the `files:read` scope.\n\nUses classic `page`/`count` pagination (see `paging` in the response), not cursor-based pagination.\n\nReference: [files.list](https://api.slack.com/methods/files.list)",
		accounts: { slack2: { scope: ['files:read'] } },
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
				channel: { type: 'string', description: 'Filter to files shared in this channel.' },
				user: { type: 'string', description: 'Filter to files uploaded by this user.' },
				ts_from: {
					type: 'string',
					description: 'Only files created after this Unix timestamp (inclusive).',
				},
				ts_to: {
					type: 'string',
					description: 'Only files created before this Unix timestamp (inclusive).',
				},
				types: {
					type: 'string',
					description:
						'Comma-separated list of file types to filter by, for example `images,pdfs`. Defaults to all types.',
				},
				show_files_hidden_by_limit: {
					type: 'boolean',
					description:
						'Whether to show truncated info for files hidden due to workspace file limits.',
				},
				team_id: {
					type: 'string',
					description:
						'Encoded team ID to list files in. Required when using an org-wide token.',
				},
				count: {
					type: 'number',
					description: 'Number of files to return per page.',
					default: 100,
				},
				page: {
					type: 'number',
					description: 'Page number of results to return.',
					default: 1,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				files: {
					type: 'array',
					description: 'Files matching the given filters.',
					items: {
						type: 'object',
						description: 'A single file.',
						properties: {
							id: { type: 'string', description: 'ID of the file.' },
							created: {
								type: 'number',
								description: 'Unix timestamp of when the file was created.',
							},
							name: { type: 'string', description: 'File name.' },
							mimetype: { type: 'string', description: 'MIME type of the file.' },
							filetype: {
								type: 'string',
								description:
									"Slack's internal file type identifier, for example `pdf` or `png`.",
							},
							user: {
								type: 'string',
								description: 'ID of the user who uploaded the file.',
							},
							size: { type: 'number', description: 'File size in bytes.' },
							is_public: {
								type: 'boolean',
								description: 'Whether the file has been made public.',
							},
							url_private: {
								type: 'string',
								description:
									'URL to view the file, valid only with a Slack session/token.',
							},
							permalink: {
								type: 'string',
								description: 'Permanent URL to the file in Slack.',
							},
							comments_count: {
								type: 'number',
								description: 'Number of comments on the file.',
							},
							channels: {
								type: 'array',
								description: 'IDs of channels the file was shared to.',
								items: {
									type: 'string',
									description: 'ID of a channel the file was shared to.',
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						count: {
							type: 'number',
							description: 'Number of items returned per page.',
						},
						total: {
							type: 'number',
							description: 'Total number of files matching the filters.',
						},
						page: { type: 'number', description: 'Current page number.' },
						pages: { type: 'number', description: 'Total number of pages available.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'listReactions',
		label: 'List reactions',
		description: 'Returns items a user has reacted to, along with the reactions on them.',
		context:
			"---\nname: listReactions\ndescription: Returns items a user has reacted to, along with the reactions on them.\n---\n\nWraps Slack's `reactions.list`. Requires the `reactions:read` scope.\n\nDefaults to the authenticated user's reactions; pass `user` to look up another user's reactions instead.\nEach returned item is one of `message`, `file`, or `file_comment` — check `type` before reading the\ncorresponding `message`/`file`/`comment` field, which is passed through as raw JSON.\n\nResults are paginated: pass the `next_cursor` from `response_metadata` in a previous response as `cursor`\nto fetch the next page.\n\nReference: [reactions.list](https://api.slack.com/methods/reactions.list)",
		accounts: { slack2: { scope: ['reactions:read'] } },
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
				user: {
					type: 'string',
					description:
						'Show reactions made by this user. Defaults to the authenticated user.',
				},
				full: {
					type: 'boolean',
					description:
						'Whether to return the complete reaction list for each item, rather than a truncated preview.',
				},
				team_id: {
					type: 'string',
					description: 'Encoded team ID. Required when using an org-wide token.',
				},
				count: {
					type: 'number',
					description: 'Number of items to return per page.',
					default: 100,
				},
				page: {
					type: 'number',
					description: 'Page number of results to return.',
					default: 1,
				},
				cursor: {
					type: 'string',
					description:
						'Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				items: {
					type: 'array',
					description: 'Items the user has reacted to.',
					items: {
						type: 'object',
						description: 'A single reacted-to item.',
						properties: {
							type: {
								type: 'string',
								description: 'Kind of item this reaction is on.',
								default: '',
								enum: ['', 'message', 'file', 'file_comment'],
							},
							channel: {
								type: 'string',
								description:
									'ID of the channel the item belongs to, present for message items.',
							},
							message: {
								description:
									'The message object, present for message items, as raw JSON returned by Slack.',
							},
							file: {
								description:
									'The file object, present for file and file-comment items, as raw JSON returned by Slack.',
							},
							comment: {
								description:
									'The file comment object, present for file-comment items, as raw JSON returned by Slack.',
							},
						},
						required: [],
					},
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'listReplies',
		label: 'List thread replies',
		description: 'Returns all replies in a message thread.',
		context:
			"---\nname: listReplies\ndescription: Returns all replies in a message thread.\n---\n\nWraps Slack's `conversations.replies`. Requires the OAuth scope matching the conversation type:\n`channels:history`, `groups:history`, `im:history`, or `mpim:history`.\n\n`ts` may be the thread's parent message timestamp or any reply's timestamp — Slack returns the whole\nthread either way, with the parent message first.\n\nResults are paginated: pass the `next_cursor` from `response_metadata` in a previous response as `cursor`\nto fetch the next page. `has_more` indicates whether additional pages exist.\n\nThe `messages` output field documents commonly used message fields only. `blocks` and `attachments` are\npassed through as raw JSON exactly as Slack returns them.\n\nReference: [conversations.replies](https://api.slack.com/methods/conversations.replies)",
		accounts: {
			slack2: { scope: ['channels:history', 'groups:history', 'im:history', 'mpim:history'] },
		},
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
				channel: {
					type: 'string',
					description: 'ID of the conversation to fetch the thread from.',
				},
				ts: {
					type: 'string',
					description:
						"Timestamp of either the thread's parent message or a message in the thread.",
				},
				oldest: {
					type: 'string',
					description:
						'Only messages after this Unix timestamp will be included in results.',
				},
				latest: {
					type: 'string',
					description:
						'Only messages before this Unix timestamp will be included in results. Defaults to the current time.',
				},
				inclusive: {
					type: 'boolean',
					description:
						'Whether to include messages with the `oldest` or `latest` timestamps in results.',
				},
				include_all_metadata: {
					type: 'boolean',
					description: 'Whether to return all metadata associated with each message.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of items to return.',
					default: 1000,
				},
				cursor: {
					type: 'string',
					description:
						'Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.',
				},
			},
			required: ['channel', 'ts'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				messages: {
					type: 'array',
					description: "The thread's parent message followed by its replies.",
					items: {
						type: 'object',
						description: 'A single message in the thread.',
						properties: {
							type: {
								type: 'string',
								description: 'Object type, typically `message`.',
							},
							text: {
								type: 'string',
								description: 'Plain-text content of the message.',
							},
							ts: { type: 'string', description: 'Timestamp ID of the message.' },
							user: {
								type: 'string',
								description: 'ID of the user who authored the message.',
							},
							team: {
								type: 'string',
								description: 'ID of the team the message belongs to.',
							},
							thread_ts: {
								type: 'string',
								description: "Timestamp of the thread's parent message.",
							},
							reply_count: {
								type: 'number',
								description:
									'Number of replies in the thread. Present only on the parent message.',
							},
							parent_user_id: {
								type: 'string',
								description:
									"ID of the user who authored the thread's parent message.",
							},
							blocks: {
								description:
									'Raw Block Kit blocks of the message, as returned by Slack.',
							},
							attachments: {
								description:
									'Legacy structured attachments of the message, as returned by Slack.',
							},
						},
						required: [],
					},
				},
				has_more: {
					type: 'boolean',
					description: 'Whether more replies are available beyond this page.',
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'listUsers',
		label: 'List users',
		description: 'Returns a list of users in the workspace.',
		context:
			"---\nname: listUsers\ndescription: Returns a list of users in the workspace.\n---\n\nWraps Slack's `users.list`. Requires the `users:read` scope; add `users:read.email` to receive\n`profile.email` for each user (omitted otherwise).\n\nResults are paginated: pass the `next_cursor` from `response_metadata` in a previous response as `cursor`\nto fetch the next page. Slack recommends a `limit` of 200 or fewer per request; omitting `limit` returns\nthe entire workspace member list in one call, which can be large.\n\nReference: [users.list](https://api.slack.com/methods/users.list)",
		accounts: { slack2: { scope: ['users:read', 'users:read.email'] } },
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
				include_locale: {
					type: 'boolean',
					description: "Whether to include each user's locale in the response.",
				},
				team_id: {
					type: 'string',
					description:
						'Encoded team ID to list users in. Required when using an org-wide token.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of items to return. Slack recommends 200 or fewer per request. Defaults to returning the entire list.',
				},
				cursor: {
					type: 'string',
					description:
						'Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				members: {
					type: 'array',
					description: "The workspace's users.",
					items: {
						type: 'object',
						description: 'A single user.',
						properties: {
							id: { type: 'string', description: 'ID of the user.' },
							team_id: { type: 'string', description: "ID of the user's workspace." },
							name: { type: 'string', description: "The user's Slack username." },
							deleted: {
								type: 'boolean',
								description: "Whether the user's account has been deactivated.",
							},
							real_name: { type: 'string', description: "The user's full name." },
							tz: {
								type: 'string',
								description: "The user's IANA timezone identifier.",
							},
							is_admin: {
								type: 'boolean',
								description: 'Whether the user is a workspace admin.',
							},
							is_owner: {
								type: 'boolean',
								description: 'Whether the user is a workspace owner.',
							},
							is_bot: {
								type: 'boolean',
								description: 'Whether the user is a bot user.',
							},
							updated: {
								type: 'number',
								description:
									"Unix timestamp of when the user's profile was last updated.",
							},
							has_2fa: {
								type: 'boolean',
								description:
									'Whether the user has two-factor authentication enabled.',
							},
							profile: {
								type: 'object',
								description: "The user's profile details.",
								properties: {
									real_name: {
										type: 'string',
										description: "The user's full name.",
									},
									display_name: {
										type: 'string',
										description: "The user's display name.",
									},
									email: {
										type: 'string',
										description:
											"The user's email address. Requires the `users:read.email` scope.",
									},
									image_192: {
										type: 'string',
										description: "URL of the user's 192px avatar image.",
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				cache_ts: {
					type: 'string',
					description: 'Timestamp indicating when this data was cached by Slack.',
				},
				response_metadata: {
					type: 'object',
					description: 'Pagination metadata for this response.',
					properties: {
						next_cursor: {
							type: 'string',
							description:
								'Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'lookupUserByEmail',
		label: 'Find a user by email',
		description: 'Finds a user in the workspace by their email address.',
		context:
			"---\nname: lookupUserByEmail\ndescription: Finds a user in the workspace by their email address.\n---\n\nWraps Slack's `users.lookupByEmail`. Requires the `users:read.email` scope.\n\nReference: [users.lookupByEmail](https://api.slack.com/methods/users.lookupByEmail)",
		accounts: { slack2: { scope: ['users:read.email'] } },
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
				email: { type: 'string', description: 'Email address of a user in the workspace.' },
			},
			required: ['email'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				user: {
					type: 'object',
					description: 'The matching user object.',
					properties: {
						id: { type: 'string', description: 'ID of the user.' },
						team_id: { type: 'string', description: "ID of the user's workspace." },
						name: { type: 'string', description: "The user's Slack username." },
						deleted: {
							type: 'boolean',
							description: "Whether the user's account has been deactivated.",
						},
						real_name: { type: 'string', description: "The user's full name." },
						tz: { type: 'string', description: "The user's IANA timezone identifier." },
						is_admin: {
							type: 'boolean',
							description: 'Whether the user is a workspace admin.',
						},
						is_owner: {
							type: 'boolean',
							description: 'Whether the user is a workspace owner.',
						},
						is_bot: { type: 'boolean', description: 'Whether the user is a bot user.' },
						profile: {
							type: 'object',
							description: "The user's profile details.",
							properties: {
								real_name: { type: 'string', description: "The user's full name." },
								display_name: {
									type: 'string',
									description: "The user's display name.",
								},
								email: { type: 'string', description: "The user's email address." },
								image_192: {
									type: 'string',
									description: "URL of the user's 192px avatar image.",
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
		appName: 'slack',
		appVersion: 4,
		endpointName: 'postMessage',
		label: 'Post a message',
		description: 'Sends a message to a channel, private group, or direct message.',
		context:
			'---\nname: postMessage\ndescription: Sends a message to a channel, private group, or direct message.\n---\n\nWraps Slack\'s `chat.postMessage`. Requires the `chat:write` scope. This endpoint is attached to both the\n"Slack (user)" and "Slack (bot)" connections — `username`/`icon_url`/`icon_emoji` overrides only work\nwhen running the call with the "Slack (bot)" connection (`chat:write.customize` scope); they have no\neffect with the user connection.\n\nProvide either `text`, `markdown_text`, or a `blocks` array — at least one must produce visible content.\n`blocks` accepts raw [Block Kit](https://api.slack.com/block-kit) JSON; `attachments` is Slack\'s legacy\nformat and should only be used for existing integrations that already rely on it.\n\nTo reply in a thread, set `thread_ts` to the parent message\'s `ts`. Set `reply_broadcast: true` to also\nsurface that reply in the channel.\n\nThe `message` output field documents commonly used fields only. `blocks` and `attachments` inside it are\npassed through as raw JSON exactly as Slack returns them, since Block Kit has many block types with\ndifferent shapes.\n\nReference: [chat.postMessage](https://api.slack.com/methods/chat.postMessage)',
		accounts: {
			slack2: { scope: ['chat:write', 'chat:write.customize'] },
			slack3: { scope: ['chat:write', 'chat:write.customize'] },
		},
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
				channel: {
					type: 'string',
					description:
						'ID of the channel, private group, or IM channel to send the message to.',
				},
				text: {
					type: 'string',
					description:
						"Plain-text message content. Required unless `blocks` or `attachments` fully describe the message. Also used as a fallback for surfaces that can't render Block Kit.",
				},
				blocks: {
					description:
						'Raw [Block Kit](https://api.slack.com/block-kit) blocks array, as JSON, describing the message layout.',
				},
				attachments: {
					description:
						'Legacy structured attachments array, as JSON. Prefer `blocks` for new messages.',
				},
				markdown_text: {
					type: 'string',
					description:
						'Message content formatted in Markdown. Limited to 12,000 characters. Takes precedence over `text` when both are provided.',
				},
				thread_ts: {
					type: 'string',
					description:
						'The `ts` value of another message in the channel to reply to, making this message part of that thread.',
				},
				reply_broadcast: {
					type: 'boolean',
					description:
						'Whether a threaded reply should also be shown in the channel, not just in the thread. Only applies when `thread_ts` is set.',
				},
				unfurl_links: {
					type: 'boolean',
					description: 'Whether to enable unfurling of primarily text-based content.',
				},
				unfurl_media: {
					type: 'boolean',
					description: 'Whether to enable unfurling of media content.',
				},
				unfurl_app_links: {
					type: 'boolean',
					description:
						'Whether to unfurl links to Slack apps that support link unfurling.',
				},
				mrkdwn: {
					type: 'boolean',
					description:
						'Whether Slack markup (mrkdwn) parsing is enabled in `text`. Enabled by default.',
				},
				parse: {
					type: 'string',
					description:
						'Changes how messages are treated for the purpose of linkifying channels, usernames, and URLs.',
					default: '',
					enum: ['', 'none', 'full'],
				},
				link_names: {
					type: 'boolean',
					description: 'Whether to find and link channel names and usernames in `text`.',
				},
				username: {
					type: 'string',
					description:
						'Custom username to display for this message. Requires the `chat:write.customize` scope and the "Slack (bot)" connection — has no effect with the user connection.',
				},
				icon_url: {
					type: 'string',
					description:
						'URL of an image to use as the icon for this message. Requires the `chat:write.customize` scope and the "Slack (bot)" connection — has no effect with the user connection.',
				},
				icon_emoji: {
					type: 'string',
					description:
						'Emoji to use as the icon for this message, for example `:chart_with_upwards_trend:`. Requires the `chat:write.customize` scope and the "Slack (bot)" connection — has no effect with the user connection.',
				},
				metadata: {
					description:
						'JSON object with `event_type` and `event_payload` fields, used to attach arbitrary structured data to the message.',
				},
				current_draft_last_updated_ts: {
					type: 'string',
					description:
						"Timestamp of a draft's last update at the time of this call, used to keep the draft in sync with the server. Only relevant when this call is sending a draft.",
				},
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'string',
					description: 'ID of the channel the message was posted to.',
				},
				ts: { type: 'string', description: 'Timestamp ID of the posted message.' },
				message: {
					type: 'object',
					description: 'The posted message object, as returned by Slack.',
					properties: {
						type: { type: 'string', description: 'Object type, typically `message`.' },
						subtype: {
							type: 'string',
							description: 'Message subtype, if any (for example `bot_message`).',
						},
						text: { type: 'string', description: 'Plain-text content of the message.' },
						ts: { type: 'string', description: 'Timestamp ID of the message.' },
						user: {
							type: 'string',
							description:
								'ID of the user who authored the message, if posted as a user.',
						},
						bot_id: {
							type: 'string',
							description:
								'ID of the bot that posted the message, if posted as a bot.',
						},
						username: {
							type: 'string',
							description:
								'Custom display username for the message, if `username` was set on the request.',
						},
						team: {
							type: 'string',
							description: 'ID of the team the message belongs to.',
						},
						thread_ts: {
							type: 'string',
							description:
								'Timestamp of the parent message, if this message is part of a thread.',
						},
						blocks: {
							description:
								'Raw Block Kit blocks of the message, as returned by Slack.',
						},
						attachments: {
							description:
								'Legacy structured attachments of the message, as returned by Slack.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'removePin',
		label: 'Unpin a message',
		description: 'Removes a pinned message from a channel.',
		context:
			"---\nname: removePin\ndescription: Removes a pinned message from a channel.\n---\n\nWraps Slack's `pins.remove`. Requires the `pins:write` scope.\n\nReference: [pins.remove](https://api.slack.com/methods/pins.remove)",
		accounts: { slack2: { scope: ['pins:write'] } },
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
				channel: { type: 'string', description: 'Channel where the message is pinned.' },
				timestamp: {
					type: 'string',
					description:
						'Timestamp of the pinned message to remove. Identifies which pinned item to unpin when a channel has more than one.',
				},
			},
			required: ['channel', 'timestamp'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'removeReaction',
		label: 'Remove a reaction',
		description: 'Removes an emoji reaction from a message, file, or file comment.',
		context:
			"---\nname: removeReaction\ndescription: Removes an emoji reaction from a message, file, or file comment.\n---\n\nWraps Slack's `reactions.remove`. Requires the `reactions:write` scope.\n\nSpecify exactly one target: either `file`, `file_comment`, or the pair `channel` + `timestamp` for a\nmessage. `name` is required in every case.\n\nReference: [reactions.remove](https://api.slack.com/methods/reactions.remove)",
		accounts: { slack2: { scope: ['reactions:write'] } },
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
				name: {
					type: 'string',
					description:
						'Name of the emoji reaction to remove, without colons, for example `thumbsup`.',
				},
				channel: {
					type: 'string',
					description:
						'Channel where the message with the reaction was posted. Required together with `timestamp` when removing a reaction from a message.',
				},
				timestamp: {
					type: 'string',
					description:
						'Timestamp of the message to remove the reaction from. Required together with `channel`.',
				},
				file: {
					type: 'string',
					description:
						'ID of the file to remove the reaction from, instead of a message.',
				},
				file_comment: {
					type: 'string',
					description:
						'ID of the file comment to remove the reaction from, instead of a message.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'searchMessages',
		label: 'Search messages',
		description: 'Searches for messages matching a query.',
		context:
			"---\nname: searchMessages\ndescription: Searches for messages matching a query.\n---\n\nWraps Slack's `search.messages`. Requires the `search:read` scope — Slack only supports this method with a\n**user token**, not a bot token (this endpoint is attached to the \"Slack (user)\" connection accordingly).\n\nSupports Slack's search modifiers in `query` (e.g. `from:@user`, `in:#channel`, `before:2026-01-01`).\nUse `cursor`-based pagination (pass `*` to start) or classic `page`/`count` pagination — Slack accepts\neither; `cursor` is preferred for large result sets. When using a user token, results are also affected\nby that user's own search filters set in the Slack UI.\n\nReference: [search.messages](https://api.slack.com/methods/search.messages)",
		accounts: { slack2: { scope: ['search:read'] } },
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
						"Search query. Supports Slack's search modifiers, for example `from:@bot in:#general`.",
				},
				sort: {
					type: 'string',
					description: 'How to sort the results.',
					default: '',
					enum: ['', 'score', 'timestamp'],
				},
				sort_dir: {
					type: 'string',
					description: 'Direction to sort the results in.',
					default: '',
					enum: ['', 'asc', 'desc'],
				},
				highlight: {
					type: 'boolean',
					description:
						'Whether to enable query highlight markers in the returned results.',
				},
				team_id: {
					type: 'string',
					description:
						'Encoded team ID to search within. Required when using an org-wide token.',
				},
				count: {
					type: 'number',
					description: 'Number of results to return per page, up to 100.',
					default: 20,
					maximum: 100,
				},
				page: {
					type: 'number',
					description: 'Page number of results to return.',
					default: 1,
				},
				cursor: {
					type: 'string',
					description:
						'Cursor-based pagination token. Use `*` to start from the first page.',
				},
			},
			required: ['query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				query: { type: 'string', description: 'The search query that was submitted.' },
				messages: {
					type: 'object',
					description: 'Container for the search results.',
					properties: {
						total: { type: 'number', description: 'Total number of matches found.' },
						matches: {
							type: 'array',
							description: 'Messages matching the search query.',
							items: {
								type: 'object',
								description: 'A single matching message.',
								properties: {
									type: {
										type: 'string',
										description:
											'Result type, for example `message`, `im`, or `group`.',
									},
									text: {
										type: 'string',
										description: 'Plain-text content of the message.',
									},
									ts: {
										type: 'string',
										description: 'Timestamp ID of the message.',
									},
									user: {
										type: 'string',
										description: 'ID of the user who sent the message.',
									},
									username: {
										type: 'string',
										description: 'Display name of the sender.',
									},
									team: {
										type: 'string',
										description: 'ID of the team the message belongs to.',
									},
									permalink: {
										type: 'string',
										description: 'URL linking directly to the message.',
									},
									channel: {
										type: 'object',
										description: 'Channel the message was posted in.',
										properties: {
											id: {
												type: 'string',
												description: 'ID of the channel.',
											},
											name: {
												type: 'string',
												description: 'Name of the channel.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						pagination: {
							type: 'object',
							description: 'Pagination metadata for the current result set.',
							properties: {
								total_count: {
									type: 'number',
									description: 'Total number of matches across all pages.',
								},
								page: { type: 'number', description: 'Current page number.' },
								per_page: {
									type: 'number',
									description: 'Number of results per page.',
								},
								page_count: {
									type: 'number',
									description: 'Total number of pages.',
								},
								first: {
									type: 'number',
									description: 'Index of the first result on this page.',
								},
								last: {
									type: 'number',
									description: 'Index of the last result on this page.',
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
		appName: 'slack',
		appVersion: 4,
		endpointName: 'setChannelPurpose',
		label: "Set a channel's purpose",
		description: 'Sets the purpose (description) of a channel.',
		context:
			"---\nname: setChannelPurpose\ndescription: Sets the purpose (description) of a channel.\n---\n\nWraps Slack's `conversations.setPurpose`. Requires one of `channels:manage`, `channels:write.topic`,\n`groups:write.topic`, `im:write.topic`, `mpim:write.topic` depending on the channel type. The calling\nuser/bot must be a member of the channel.\n\nReplaces the entire purpose text — there is no way to append. Not all conversation types support a\npurpose.\n\nReference: [conversations.setPurpose](https://api.slack.com/methods/conversations.setPurpose)",
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
				channel: {
					type: 'string',
					description: 'ID of the channel to set the purpose of.',
				},
				purpose: {
					type: 'string',
					description: 'The new purpose text, up to 250 characters.',
				},
			},
			required: ['channel', 'purpose'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				purpose: { type: 'string', description: 'The newly set purpose text.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'setChannelTopic',
		label: "Set a channel's topic",
		description: 'Sets the topic of a channel.',
		context:
			"---\nname: setChannelTopic\ndescription: Sets the topic of a channel.\n---\n\nWraps Slack's `conversations.setTopic`. Requires one of `channels:manage`, `channels:write.topic`,\n`groups:write.topic`, `im:write.topic`, `mpim:write.topic` depending on the channel type. The calling\nuser/bot must be a member of the channel.\n\n`topic` does not support Slack formatting or link previews — plain text only. Not all conversation types\nsupport a topic.\n\nReference: [conversations.setTopic](https://api.slack.com/methods/conversations.setTopic)",
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
				channel: {
					type: 'string',
					description: 'ID of the conversation to set the topic of.',
				},
				topic: {
					type: 'string',
					description:
						'The new topic string. Does not support formatting or linkification.',
				},
			},
			required: ['channel', 'topic'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: {
					type: 'object',
					description: 'The channel object, reflecting the updated topic.',
					properties: {
						id: { type: 'string', description: 'ID of the channel.' },
						name: { type: 'string', description: 'Name of the channel.' },
						topic: {
							type: 'object',
							description: "The channel's current topic.",
							properties: {
								value: { type: 'string', description: 'Topic text.' },
								creator: {
									type: 'string',
									description: 'ID of the user who set the topic.',
								},
								last_set: {
									type: 'number',
									description: 'Unix timestamp of when the topic was last set.',
								},
							},
							required: [],
						},
						purpose: {
							type: 'object',
							description: "The channel's current purpose.",
							properties: { value: { type: 'string', description: 'Purpose text.' } },
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
		appName: 'slack',
		appVersion: 4,
		endpointName: 'setUserProfile',
		label: "Set a user's profile",
		description: "Updates the authenticated user's profile fields, including their status.",
		context:
			"---\nname: setUserProfile\ndescription: Updates the authenticated user's profile fields, including their status.\n---\n\nWraps Slack's `users.profile.set`. **Requires a user token** (`users.profile:write`) — Slack does not\nsupport this method with a bot token, so this endpoint is attached to the \"Slack (user)\" connection.\n\nProvide either `profile` (a JSON object of multiple fields to set at once) or the `name`/`value` pair for\na single field — not both. `user` lets an admin update someone else's profile, but only on paid plans.\n\nReference: [users.profile.set](https://api.slack.com/methods/users.profile.set)",
		accounts: { slack2: { scope: ['users.profile:write'] } },
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
				profile: {
					description:
						'JSON object of profile fields to set, for example `{ "status_text": "On vacation", "status_emoji": ":palm_tree:" }`. Use this for setting multiple fields at once; use `name`/`value` instead for a single field.',
				},
				name: {
					type: 'string',
					description:
						'Name of a single profile field to update, as an alternative to `profile`. Must be used together with `value`.',
				},
				value: {
					type: 'string',
					description: 'Value to set for the field named in `name`.',
				},
				user: {
					type: 'string',
					description:
						'ID of the user to update, instead of the authenticated user. Admin-only, and only on paid plans.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				profile: {
					type: 'object',
					description: "The user's updated profile.",
					properties: {
						first_name: { type: 'string', description: "The user's first name." },
						last_name: { type: 'string', description: "The user's last name." },
						real_name: { type: 'string', description: "The user's full name." },
						display_name: { type: 'string', description: "The user's display name." },
						email: { type: 'string', description: "The user's email address." },
						phone: { type: 'string', description: "The user's phone number." },
						pronouns: { type: 'string', description: "The user's stated pronouns." },
						status_text: {
							type: 'string',
							description: "The user's custom status text.",
						},
						status_emoji: {
							type: 'string',
							description: "The user's custom status emoji.",
						},
						status_expiration: {
							type: 'number',
							description:
								'Unix timestamp of when the custom status expires. `0` means it does not expire.',
						},
						start_date: {
							type: 'string',
							description: "The user's start date at the company.",
						},
						avatar_hash: {
							type: 'string',
							description: "Hash used to build the user's avatar image URLs.",
						},
						fields: {
							description:
								'Custom profile field values, keyed by field ID, as raw JSON returned by Slack.',
						},
						image_192: {
							type: 'string',
							description: "URL of the user's 192px avatar image.",
						},
						image_512: {
							type: 'string',
							description: "URL of the user's 512px avatar image.",
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'unarchiveChannel',
		label: 'Unarchive a channel',
		description: 'Reverses channel archival.',
		context:
			'---\nname: unarchiveChannel\ndescription: Reverses channel archival.\n---\n\nWraps Slack\'s `conversations.unarchive`. **Bot tokens cannot call this method** — Slack requires a user\ntoken, so this endpoint is attached to the "Slack (user)" connection. Requires one of `channels:write`,\n`groups:write`, `im:write`, `mpim:write` on that user token.\n\nReference: [conversations.unarchive](https://api.slack.com/methods/conversations.unarchive)',
		accounts: {
			slack2: { scope: ['channels:write', 'groups:write', 'im:write', 'mpim:write'] },
		},
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
				channel: { type: 'string', description: 'ID of the conversation to unarchive.' },
			},
			required: ['channel'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
			},
			required: [],
		},
	},
	{
		appName: 'slack',
		appVersion: 4,
		endpointName: 'updateMessage',
		label: 'Update a message',
		description: 'Updates the content of an existing message.',
		context:
			'---\nname: updateMessage\ndescription: Updates the content of an existing message.\n---\n\nWraps Slack\'s `chat.update`. Requires the `chat:write` scope. With a bot token, only messages posted by\nthat same bot can be updated.\n\n**Omitted `blocks`, `attachments`, and `metadata` keep their previous value** — they are not cleared just\nby leaving them blank. `blocks` is the one exception: if `text` is sent and `blocks` is not, the previous\n`blocks` are removed. To explicitly clear one of these three fields, send an empty array (`blocks: []`,\n`attachments: []`) or empty object (`metadata: {}`) — Make sends these through as-is instead of treating\nthem as "not provided". Fetch the current message first (e.g. via `getChannelHistory` or `listReplies`)\nif you need to see what would be retained or replaced.\n\n`blocks` and `attachments` accept raw JSON in Slack\'s own format; the `message` output field documents\ncommonly used fields only, passing `blocks`/`attachments` through as-is.\n\nReference: [chat.update](https://api.slack.com/methods/chat.update)',
		accounts: { slack2: { scope: ['chat:write'] }, slack3: { scope: ['chat:write'] } },
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
				channel: {
					type: 'string',
					description:
						"Channel containing the message to update. For direct messages use the DM's channel ID (starts with `D`).",
				},
				ts: { type: 'string', description: 'Timestamp of the message to update.' },
				text: { type: 'string', description: 'New plain-text message content.' },
				blocks: {
					description:
						'Raw [Block Kit](https://api.slack.com/block-kit) blocks array, as JSON, replacing the message layout.',
				},
				attachments: {
					description:
						"Legacy structured attachments array, as JSON, replacing the message's attachments.",
				},
				unfurled_attachments: {
					description:
						'Pre-unfurled structured attachments array, as JSON, to attach to the message.',
				},
				markdown_text: {
					type: 'string',
					description:
						'New message content formatted in Markdown. Limited to 12,000 characters.',
				},
				metadata: {
					description:
						'JSON object with `event_type` and `event_payload` fields, used to attach arbitrary structured data to the message.',
				},
				link_names: {
					type: 'boolean',
					description: 'Whether to find and link channel names and usernames in `text`.',
				},
				parse: {
					type: 'string',
					description:
						'Changes how the updated message is treated for the purpose of linkifying channels, usernames, and URLs.',
					default: '',
					enum: ['', 'none', 'full'],
				},
				reply_broadcast: {
					type: 'boolean',
					description:
						'Whether the update to a threaded reply should also be broadcast to the channel.',
				},
				file_ids: {
					type: 'array',
					description: 'IDs of files to attach to the updated message.',
					items: { type: 'string', description: 'ID of a file to attach.' },
				},
			},
			required: ['channel', 'ts'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				ok: { type: 'boolean', description: 'Whether the request was successful.' },
				channel: { type: 'string', description: 'Channel containing the updated message.' },
				ts: { type: 'string', description: 'Timestamp of the updated message.' },
				text: { type: 'string', description: 'Updated plain-text message content.' },
				message: {
					type: 'object',
					description: 'The updated message object, as returned by Slack.',
					properties: {
						type: { type: 'string', description: 'Object type, typically `message`.' },
						text: { type: 'string', description: 'Plain-text content of the message.' },
						ts: { type: 'string', description: 'Timestamp ID of the message.' },
						user: {
							type: 'string',
							description: 'ID of the user who authored the message.',
						},
						team: {
							type: 'string',
							description: 'ID of the team the message belongs to.',
						},
						blocks: {
							description:
								'Raw Block Kit blocks of the message, as returned by Slack.',
						},
						attachments: {
							description:
								'Legacy structured attachments of the message, as returned by Slack.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
