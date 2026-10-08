// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Telegram Bot API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.telegram.org/bot{token}/`. Provide the remaining path in the URL parameter\n(e.g. `getMe`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Telegram Bot API reference](https://core.telegram.org/bots/api) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { telegram: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.telegram.org/bot{token}/`. For example, `getMe` or `sendMessage`.',
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
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'banChatMember',
		label: 'Ban a chat member',
		description: 'Bans a user in a group, supergroup, or channel.',
		context:
			'---\nname: banChatMember\ndescription: Bans a user in a group, supergroup, or channel.\n---\n\nCalls the Bot API [`banChatMember`](https://core.telegram.org/bots/api#banchatmember) method to ban a user in a group, a supergroup, or a channel. The bot must be an administrator in the chat with the appropriate rights. Banning immediately removes the user from the chat. When `until_date` passes, the user is only permitted to rejoin (via an invite link or by request) — they are not automatically restored as a member.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target group, or username of the target supergroup or channel in the format `@channelusername`.',
				},
				user_id: { type: 'number', description: 'Unique identifier of the target user.' },
				until_date: {
					type: 'number',
					description:
						'Date when the user will be unbanned, as a Unix timestamp. If the user is banned for more than 366 days or less than 30 seconds from the current time, they are considered banned forever. Applies to supergroups and channels only. Banning removes the user from the chat immediately. After this time, the user may rejoin with an invite; membership is not restored automatically.',
				},
			},
			required: ['chat_id', 'user_id'],
		},
		outputSchema: {
			type: 'object',
			properties: { result: { type: 'boolean', description: 'True on success.' } },
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'createChatInviteLink',
		label: 'Create a chat invite link',
		description: 'Creates an additional invite link for a chat.',
		context:
			'---\nname: createChatInviteLink\ndescription: Creates an additional invite link for a chat.\n---\n\nCalls the Bot API [`createChatInviteLink`](https://core.telegram.org/bots/api#createchatinvitelink)\nmethod to create an additional invite link for a chat. The bot must be an administrator in the chat\nwith the appropriate rights. The link can be revoked using `revokeChatInviteLink`.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.',
				},
				name: {
					type: 'string',
					description: 'Invite link name, 0-32 characters.',
					minimum: 0,
					maximum: 32,
				},
				expire_date: {
					type: 'number',
					description: 'Point in time when the link will expire, as a Unix timestamp.',
				},
				member_limit: {
					type: 'number',
					description:
						'The maximum number of users that can be members of the chat simultaneously after joining via this invite link. Between 1 and 99999.',
					minimum: 1,
					maximum: 99_999,
				},
				creates_join_request: {
					type: 'boolean',
					description:
						"True, if users joining the chat via the link need to be approved by chat administrators. If true, Member Limit can't be specified.",
				},
			},
			required: ['chat_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				invite_link: {
					type: 'string',
					description:
						'The invite link. If the link was created by another chat administrator, the second part of the link is replaced with "...".',
				},
				name: { type: 'string', description: 'Invite link name.' },
				creator: {
					type: 'object',
					description: 'Creator of the link.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True, if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
						is_premium: {
							type: 'boolean',
							description: 'True, if this user is a Telegram Premium user.',
						},
						added_to_attachment_menu: {
							type: 'boolean',
							description: 'True, if this user added the bot to the attachment menu.',
						},
					},
					required: [],
				},
				creates_join_request: {
					type: 'boolean',
					description:
						'True, if users joining the chat via the link need to be approved by chat administrators.',
				},
				is_primary: { type: 'boolean', description: 'True, if the link is primary.' },
				is_revoked: { type: 'boolean', description: 'True, if the link is revoked.' },
				expire_date: {
					type: 'number',
					description: 'Point in time when the link will expire or has been expired.',
				},
				member_limit: {
					type: 'number',
					description:
						'The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link.',
				},
				pending_join_request_count: {
					type: 'number',
					description: 'Number of pending join requests created using this link.',
				},
				subscription_period: {
					type: 'number',
					description:
						'The number of seconds the subscription will be active for before the next payment.',
				},
				subscription_price: {
					type: 'number',
					description:
						'The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'deleteMessage',
		label: 'Delete a message',
		description: 'Deletes a message.',
		context:
			"---\nname: deleteMessage\ndescription: Deletes a message.\n---\n\nDeletes a message via the Bot API [`deleteMessage`](https://core.telegram.org/bots/api#deletemessage) with the following limitations:\n\n- A message can only be deleted if it was sent less than 48 hours ago.\n- Service messages about a supergroup, channel, or forum topic creation can't be deleted.\n- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.\n- Bots can delete outgoing messages in private chats, groups, and supergroups.\n- Bots can delete incoming messages in private chats.\n- Bots granted can_post_messages permissions can delete outgoing messages in channels.\n- If the bot is an administrator of a group, it can delete any message there.\n- If the bot has can_delete_messages administrator right in a supergroup or a channel, it can delete any message there.\n- If the bot has can_manage_direct_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.\n",
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup in the format `@username`.',
				},
				message_id: { type: 'number', description: 'Identifier of the message to delete.' },
			},
			required: ['chat_id', 'message_id'],
		},
		outputSchema: {
			type: 'object',
			properties: { result: { type: 'boolean', description: 'True on success.' } },
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'editChatInviteLink',
		label: 'Edit a chat invite link',
		description: 'Edits a non-primary invite link created by the bot.',
		context:
			'---\nname: editChatInviteLink\ndescription: Edits a non-primary invite link created by the bot.\n---\n\nCalls the Bot API [`editChatInviteLink`](https://core.telegram.org/bots/api#editchatinvitelink) method\nto edit a non-primary invite link created by the bot. The bot must be an administrator in the chat\nwith the appropriate rights.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.',
				},
				invite_link: { type: 'string', description: 'The invite link to edit.' },
				name: {
					type: 'string',
					description: 'Invite link name, 0-32 characters.',
					minimum: 0,
					maximum: 32,
				},
				expire_date: {
					type: 'number',
					description: 'Point in time when the link will expire, as a Unix timestamp.',
				},
				member_limit: {
					type: 'number',
					description:
						'The maximum number of users that can be members of the chat simultaneously after joining via this invite link. Between 1 and 99999.',
					minimum: 1,
					maximum: 99_999,
				},
				creates_join_request: {
					type: 'boolean',
					description:
						"True, if users joining the chat via the link need to be approved by chat administrators. If true, Member Limit can't be specified.",
				},
			},
			required: ['chat_id', 'invite_link'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				invite_link: {
					type: 'string',
					description:
						'The invite link. If the link was created by another chat administrator, the second part of the link is replaced with "...".',
				},
				name: { type: 'string', description: 'Invite link name.' },
				creator: {
					type: 'object',
					description: 'Creator of the link.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True, if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
						is_premium: {
							type: 'boolean',
							description: 'True, if this user is a Telegram Premium user.',
						},
						added_to_attachment_menu: {
							type: 'boolean',
							description: 'True, if this user added the bot to the attachment menu.',
						},
					},
					required: [],
				},
				creates_join_request: {
					type: 'boolean',
					description:
						'True, if users joining the chat via the link need to be approved by chat administrators.',
				},
				is_primary: { type: 'boolean', description: 'True, if the link is primary.' },
				is_revoked: { type: 'boolean', description: 'True, if the link is revoked.' },
				expire_date: {
					type: 'number',
					description: 'Point in time when the link will expire or has been expired.',
				},
				member_limit: {
					type: 'number',
					description:
						'The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link.',
				},
				pending_join_request_count: {
					type: 'number',
					description: 'Number of pending join requests created using this link.',
				},
				subscription_period: {
					type: 'number',
					description:
						'The number of seconds the subscription will be active for before the next payment.',
				},
				subscription_price: {
					type: 'number',
					description:
						'The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'editMessageCaption',
		label: 'Edit message caption',
		description: 'Edits the caption of a message.',
		context:
			'---\nname: editMessageCaption\ndescription: Edits the caption of a message.\n---\n\nEdits the caption of a media message via the Bot API [`editMessageCaption`](https://core.telegram.org/bots/api#editmessagecaption) method. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@username`.',
				},
				message_id: { type: 'number', description: 'Identifier of the message to edit.' },
				caption: {
					type: 'string',
					description:
						'New caption of the message, 0-1024 characters after entities parsing.',
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the message caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'message_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the edited message inside this chat.',
				},
				date: {
					type: 'number',
					description: 'Date the message was originally sent, in Unix time.',
				},
				edit_date: {
					type: 'number',
					description: 'Date the message was last edited, in Unix time.',
				},
				chat: {
					type: 'object',
					description: 'The chat the edited message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that originally sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						username: { type: 'string', description: "User's or bot's username." },
					},
					required: [],
				},
				caption: { type: 'string', description: 'The new caption of the message.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption, automatically detected from Parse Mode.',
					items: {
						type: 'object',
						description: 'A single special entity in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				show_caption_above_media: {
					type: 'boolean',
					description:
						'True if the caption must be shown above the message media. A pre-existing property of the message, unaffected by this edit.',
				},
				animation: {
					type: 'object',
					description:
						'Present if the edited message is an animation: information about the animation.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						thumbnail: {
							type: 'object',
							description: 'Animation thumbnail as defined by the sender.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						file_name: {
							type: 'string',
							description: 'Original animation filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				audio: {
					type: 'object',
					description:
						'Present if the edited message is an audio file: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						performer: {
							type: 'string',
							description:
								'Performer of the audio as defined by the sender or by audio tags.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
						thumbnail: {
							type: 'object',
							description:
								'Thumbnail of the album cover to which the music file belongs.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
					},
					required: [],
				},
				document: {
					type: 'object',
					description:
						'Present if the edited message is a general file: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						thumbnail: {
							type: 'object',
							description: 'Document thumbnail as defined by the sender.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				photo: {
					type: 'array',
					description:
						'Present if the edited message is a photo: the available sizes of the photo.',
					items: {
						type: 'object',
						description: 'A single available size of the photo.',
						properties: {
							file_id: {
								type: 'string',
								description:
									'Identifier for this file, usable to download or reuse the file.',
							},
							file_unique_id: {
								type: 'string',
								description:
									'Unique identifier for this file, consistent over time and across bots.',
							},
							width: { type: 'number', description: 'Photo width.' },
							height: { type: 'number', description: 'Photo height.' },
							file_size: { type: 'number', description: 'File size in bytes.' },
						},
						required: [],
					},
				},
				video: {
					type: 'object',
					description:
						'Present if the edited message is a video: information about the video.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						thumbnail: {
							type: 'object',
							description: 'Video thumbnail.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						cover: {
							type: 'array',
							description:
								'Available sizes of the cover of the video in the message.',
							items: {
								type: 'object',
								description: 'A single available size of the video cover.',
								properties: {
									file_id: {
										type: 'string',
										description: 'Identifier for this file.',
									},
									file_unique_id: {
										type: 'string',
										description: 'Unique identifier for this file.',
									},
									width: { type: 'number', description: 'Cover width.' },
									height: { type: 'number', description: 'Cover height.' },
									file_size: {
										type: 'number',
										description: 'File size in bytes.',
									},
								},
								required: [],
							},
						},
						start_timestamp: {
							type: 'number',
							description:
								'Timestamp in seconds from which the video will play in the message.',
						},
						qualities: {
							type: 'array',
							description: 'List of available qualities of the video.',
							items: {
								type: 'object',
								description: 'A single available quality of the video.',
								properties: {
									file_id: {
										type: 'string',
										description: 'Identifier for this file.',
									},
									file_unique_id: {
										type: 'string',
										description: 'Unique identifier for this file.',
									},
									width: { type: 'number', description: 'Video width.' },
									height: { type: 'number', description: 'Video height.' },
									codec: {
										type: 'string',
										description:
											'Codec used to encode the video, for example `h264`, `h265`, or `av01`.',
									},
									file_size: {
										type: 'number',
										description: 'File size in bytes.',
									},
								},
								required: [],
							},
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				voice: {
					type: 'object',
					description:
						'Present if the edited message is a voice note: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description:
						"True if the message can't be forwarded (a property of the original message, unaffected by this edit).",
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'editMessageMedia',
		label: 'Edit message media',
		description: 'Edits the media content of a message.',
		context:
			'---\nname: editMessageMedia\ndescription: Edits the media content of a message.\n---\n\nReplaces the media of a message via the Bot API [`editMessageMedia`](https://core.telegram.org/bots/api#editmessagemedia) method.\n\nPass the new file as a `file_id` that already exists on Telegram servers (recommended) or as an HTTP URL, per [`InputMedia`](https://core.telegram.org/bots/api#inputmedia). `media.type` is Photo, Video, Animation, Audio, or Document.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@username`.',
				},
				message_id: { type: 'number', description: 'Identifier of the message to edit.' },
				type: {
					type: 'string',
					description: 'Type of the new media to attach to the message.',
					enum: ['photo', 'video', 'animation', 'audio', 'document'],
				},
				caption: {
					type: 'string',
					description:
						'New caption of the media, 0-1024 characters after entities parsing.',
				},
				send_type: {
					type: 'string',
					description:
						'Pass a file ID of a file that already exists on Telegram servers (recommended), or an HTTP URL for Telegram to get the file from the Internet. See [Sending files](https://core.telegram.org/bots/api#sending-files).',
					enum: ['send_byid', 'send_byurl'],
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the new caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for a new inline keyboard. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'message_id', 'type', 'send_type'],
			allOf: [
				{
					if: { properties: { send_type: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							file_id: {
								type: 'string',
								description:
									'Identifier of a file that already exists on Telegram servers.',
							},
						},
						required: ['file_id'],
					},
				},
				{
					if: { properties: { send_type: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							url: {
								type: 'string',
								description:
									'HTTP URL for Telegram to fetch the file from the Internet.',
							},
						},
						required: ['url'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the edited message inside this chat.',
				},
				date: {
					type: 'number',
					description: 'Date the message was originally sent, in Unix time.',
				},
				edit_date: {
					type: 'number',
					description: 'Date the message was last edited, in Unix time.',
				},
				chat: {
					type: 'object',
					description: 'The chat the edited message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that originally sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						username: { type: 'string', description: "User's or bot's username." },
					},
					required: [],
				},
				caption: { type: 'string', description: 'The new caption of the media.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption, automatically detected from Parse Mode.',
					items: {
						type: 'object',
						description: 'A single special entity in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
						},
						required: [],
					},
				},
				photo: {
					type: 'array',
					description:
						'Present when Media Type is `photo`: the available sizes of the new photo.',
					items: {
						type: 'object',
						description: 'A single available size of the photo.',
						properties: {
							file_id: {
								type: 'string',
								description:
									'Identifier for this file, usable to download or reuse the file.',
							},
							file_unique_id: {
								type: 'string',
								description:
									'Unique identifier for this file, consistent over time and across bots.',
							},
							width: { type: 'number', description: 'Photo width.' },
							height: { type: 'number', description: 'Photo height.' },
							file_size: { type: 'number', description: 'File size in bytes.' },
						},
						required: [],
					},
				},
				video: {
					type: 'object',
					description:
						'Present when Media Type is `video`: information about the new video.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				animation: {
					type: 'object',
					description:
						'Present when Media Type is `animation`: information about the new animation.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						file_name: {
							type: 'string',
							description: 'Original animation filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				audio: {
					type: 'object',
					description:
						'Present when Media Type is `audio`: information about the new audio file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						performer: {
							type: 'string',
							description:
								'Performer of the audio, as defined by the sender or audio tags.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				document: {
					type: 'object',
					description:
						'Present when Media Type is `document`: information about the new document.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description:
						"True if the message can't be forwarded (a property of the original message, unaffected by this edit).",
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'editMessageText',
		label: 'Edit message text',
		description: 'Edits the text of a text or game message.',
		context:
			"---\nname: editMessageText\ndescription: Edits the text of a text or game message.\n---\n\nEdits a message's text via the Bot API [`editMessageText`](https://core.telegram.org/bots/api#editmessagetext) method. Provide either Chat ID + Message ID (for a normal message) or Inline Message ID (for a message sent via an inline query). Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.\n",
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup in the format `@username`. Required if Inline Message ID is not specified.',
				},
				message_id: {
					type: 'number',
					description:
						'Identifier of the message to edit. Required if Inline Message ID is not specified.',
				},
				inline_message_id: {
					type: 'string',
					description:
						'Identifier of the inline message to edit. Required if Chat ID and Message ID are not specified.',
				},
				text: {
					type: 'string',
					description:
						'New text of the message, 1-4096 characters after entities parsing.',
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the message text. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				disable_web_page_preview: {
					type: 'boolean',
					description: 'Disable link previews for links in this message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['text'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description:
						'Unique identifier of the edited message inside this chat. Absent when the edited message was an inline message (the API then returns `true`).',
				},
				date: {
					type: 'number',
					description: 'Date the message was originally sent, in Unix time.',
				},
				edit_date: {
					type: 'number',
					description: 'Date the message was last edited, in Unix time.',
				},
				chat: {
					type: 'object',
					description: 'The chat the edited message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that originally sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						username: { type: 'string', description: "User's or bot's username." },
					},
					required: [],
				},
				text: { type: 'string', description: 'The new UTF-8 text of the message.' },
				entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the text, automatically detected from Parse Mode.',
					items: {
						type: 'object',
						description: 'A single special entity in the message text.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				link_preview_options: {
					type: 'object',
					description:
						'Options used for link preview generation for the message, present if it is a text message and link preview options were set or changed. Automatically reflects the legacy Disable Link Previews flag.',
					properties: {
						is_disabled: {
							type: 'boolean',
							description: 'True if the link preview is disabled.',
						},
						url: {
							type: 'string',
							description:
								'URL used for the link preview. If empty, the first URL found in the message text was used.',
						},
						prefer_small_media: {
							type: 'boolean',
							description: 'True if the media in the link preview is shrunk.',
						},
						prefer_large_media: {
							type: 'boolean',
							description: 'True if the media in the link preview is enlarged.',
						},
						show_above_text: {
							type: 'boolean',
							description:
								'True if the link preview is shown above the message text; otherwise it is shown below the text.',
						},
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description:
						"True if the message can't be forwarded (a property of the original message, unaffected by this edit).",
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'forwardMessage',
		label: 'Forward a message',
		description: 'Forwards a message of any kind to another chat.',
		context:
			"---\nname: forwardMessage\ndescription: Forwards a message of any kind to another chat.\n---\n\nForwards a message via the Bot API [`forwardMessage`](https://core.telegram.org/bots/api#forwardmessage) method. Service messages and messages with protected content can't be forwarded.\n",
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup in the format `@username`.',
				},
				from_chat_id: {
					type: 'string',
					description:
						'Unique identifier for the chat where the original message was sent, or username of the source channel in the format `@username`.',
				},
				message_id: {
					type: 'number',
					description: 'Message identifier in the chat specified in From Chat ID.',
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. iOS users will not receive a notification, Android users will receive a notification with no sound.',
				},
			},
			required: ['chat_id', 'from_chat_id', 'message_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description:
						'Unique identifier of the forwarded message inside the target chat.',
				},
				date: {
					type: 'number',
					description: 'Date the forwarded message was sent, in Unix time.',
				},
				chat: {
					type: 'object',
					description: 'The chat the forwarded message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that forwarded the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						username: { type: 'string', description: "User's or bot's username." },
					},
					required: [],
				},
				forward_origin: {
					type: 'object',
					description: 'Information about the original sender of the forwarded message.',
					properties: {
						type: {
							type: 'string',
							description:
								'Type of the message origin: `user`, `hidden_user`, `chat`, or `channel`.',
						},
						date: {
							type: 'number',
							description: 'Date the message was sent originally, in Unix time.',
						},
						sender_user: {
							type: 'object',
							description:
								'For origin type `user`: the user that sent the message originally.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this user.',
								},
								first_name: { type: 'string', description: "User's first name." },
								username: { type: 'string', description: "User's username." },
							},
							required: [],
						},
						sender_user_name: {
							type: 'string',
							description:
								'For origin type `hidden_user`: name of the user that sent the message originally.',
						},
						sender_chat: {
							type: 'object',
							description:
								'For origin type `chat`: the chat that sent the message originally.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this chat.',
								},
								type: { type: 'string', description: 'Type of chat.' },
							},
							required: [],
						},
						author_signature: {
							type: 'string',
							description:
								'For origin types `chat`/`channel`: signature of the original post author.',
						},
						chat: {
							type: 'object',
							description:
								'For origin type `channel`: the channel chat to which the message was originally sent.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this chat.',
								},
								type: { type: 'string', description: 'Type of chat.' },
								username: {
									type: 'string',
									description: 'Username of the channel, if available.',
								},
							},
							required: [],
						},
						message_id: {
							type: 'number',
							description:
								'For origin type `channel`: unique message identifier inside the original chat.',
						},
					},
					required: [],
				},
				text: {
					type: 'string',
					description:
						'The actual UTF-8 text of the message, if the forwarded message is a text message.',
				},
				entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the text.',
					items: {
						type: 'object',
						description: 'A single special entity in the message text.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				caption: {
					type: 'string',
					description:
						'Caption of the forwarded message, if it carries media with a caption.',
				},
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						description: 'A single special entity in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
						},
						required: [],
					},
				},
				animation: {
					type: 'object',
					description:
						'Present if the forwarded message is an animation: information about the animation.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						file_name: {
							type: 'string',
							description: 'Original animation filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				audio: {
					type: 'object',
					description:
						'Present if the forwarded message is an audio file: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						performer: {
							type: 'string',
							description:
								'Performer of the audio as defined by the sender or by audio tags.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				document: {
					type: 'object',
					description:
						'Present if the forwarded message is a general file: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				photo: {
					type: 'array',
					description:
						'Present if the forwarded message is a photo: the available sizes of the photo.',
					items: {
						type: 'object',
						description: 'A single available size of the photo.',
						properties: {
							file_id: {
								type: 'string',
								description:
									'Identifier for this file, usable to download or reuse the file.',
							},
							file_unique_id: {
								type: 'string',
								description:
									'Unique identifier for this file, consistent over time and across bots.',
							},
							width: { type: 'number', description: 'Photo width.' },
							height: { type: 'number', description: 'Photo height.' },
							file_size: { type: 'number', description: 'File size in bytes.' },
						},
						required: [],
					},
				},
				video: {
					type: 'object',
					description:
						'Present if the forwarded message is a video: information about the video.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				voice: {
					type: 'object',
					description:
						'Present if the forwarded message is a voice note: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				sticker: {
					type: 'object',
					description:
						'Present if the forwarded message is a sticker: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						type: {
							type: 'string',
							description:
								'Type of the sticker: `regular`, `mask`, or `custom_emoji`.',
						},
						width: { type: 'number', description: 'Sticker width.' },
						height: { type: 'number', description: 'Sticker height.' },
						is_animated: {
							type: 'boolean',
							description: 'True if the sticker is animated.',
						},
						is_video: {
							type: 'boolean',
							description: 'True if the sticker is a video sticker.',
						},
						emoji: {
							type: 'string',
							description: 'Emoji associated with the sticker.',
						},
						set_name: {
							type: 'string',
							description: 'Name of the sticker set the sticker belongs to.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				video_note: {
					type: 'object',
					description:
						'Present if the forwarded message is a video note: information about the file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						length: {
							type: 'number',
							description:
								'Video width and height (diameter of the video message) as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the original message can't be forwarded again or saved.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'getChatAdministrators',
		label: 'Get chat administrators',
		description: 'Gets a list of administrators in a chat.',
		context:
			'---\nname: getChatAdministrators\ndescription: Gets a list of administrators in a chat.\n---\n\nCalls the Bot API [`getChatAdministrators`](https://core.telegram.org/bots/api#getchatadministrators) method\nto get a list of administrators in a chat. Returns only members with `creator` or `administrator` status.\n\nRequires a group, supergroup, or channel — a private chat has no concept of administrators.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target supergroup or channel in the format `@channelusername`.',
				},
			},
			required: ['chat_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				administrators: {
					type: 'array',
					description: 'The list of administrators in the chat.',
					items: {
						type: 'object',
						description: 'A chat member with administrator or owner status.',
						properties: {
							status: {
								type: 'string',
								description:
									"The member's status in the chat: `creator` or `administrator`.",
							},
							user: {
								type: 'object',
								description: 'Information about the user.',
								properties: {
									id: {
										type: 'number',
										description: 'Unique identifier for this user or bot.',
									},
									is_bot: {
										type: 'boolean',
										description: 'True, if this user is a bot.',
									},
									first_name: {
										type: 'string',
										description: "User's or bot's first name.",
									},
									last_name: {
										type: 'string',
										description: "User's or bot's last name.",
									},
									username: {
										type: 'string',
										description: "User's or bot's username.",
									},
									language_code: {
										type: 'string',
										description: "IETF language tag of the user's language.",
									},
									is_premium: {
										type: 'boolean',
										description:
											'True, if this user is a Telegram Premium user.',
									},
									added_to_attachment_menu: {
										type: 'boolean',
										description:
											'True, if this user added the bot to the attachment menu.',
									},
								},
								required: [],
							},
							custom_title: {
								type: 'string',
								description: 'Custom title for this user.',
							},
							is_anonymous: {
								type: 'boolean',
								description: "True, if the user's presence in the chat is hidden.",
							},
							can_be_edited: {
								type: 'boolean',
								description:
									'True, if the bot is allowed to edit administrator privileges of that user. Only present for administrators, not the owner.',
							},
							can_manage_chat: {
								type: 'boolean',
								description:
									'True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars.',
							},
							can_delete_messages: {
								type: 'boolean',
								description:
									'True, if the administrator can delete messages of other users.',
							},
							can_manage_video_chats: {
								type: 'boolean',
								description: 'True, if the administrator can manage video chats.',
							},
							can_manage_voice_chats: {
								type: 'boolean',
								description:
									'Legacy field still returned by the Bot API for backward compatibility. Not present in the current API documentation; superseded by Can Manage Video Chats, which reflects the same permission.',
							},
							can_restrict_members: {
								type: 'boolean',
								description:
									'True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics.',
							},
							can_promote_members: {
								type: 'boolean',
								description:
									'True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted.',
							},
							can_change_info: {
								type: 'boolean',
								description:
									'True, if the user is allowed to change the chat title, photo and other settings.',
							},
							can_invite_users: {
								type: 'boolean',
								description:
									'True, if the user is allowed to invite new users to the chat.',
							},
							can_post_stories: {
								type: 'boolean',
								description:
									'True, if the administrator can post stories to the chat.',
							},
							can_edit_stories: {
								type: 'boolean',
								description:
									"True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive.",
							},
							can_delete_stories: {
								type: 'boolean',
								description:
									'True, if the administrator can delete stories posted by other users.',
							},
							can_post_messages: {
								type: 'boolean',
								description:
									'True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics. Channels only.',
							},
							can_edit_messages: {
								type: 'boolean',
								description:
									'True, if the administrator can edit messages of other users and can pin messages. Channels only.',
							},
							can_pin_messages: {
								type: 'boolean',
								description:
									'True, if the user is allowed to pin messages. Groups and supergroups only.',
							},
							can_manage_topics: {
								type: 'boolean',
								description:
									'True, if the user is allowed to create, rename, close, and reopen forum topics. Supergroups only.',
							},
							can_manage_direct_messages: {
								type: 'boolean',
								description:
									'True, if the administrator can manage direct messages of the channel and decline suggested posts. Channels only.',
							},
							can_manage_tags: {
								type: 'boolean',
								description:
									'True, if the administrator can edit the tags of regular members. Groups and supergroups only.',
							},
							can_send_welcome_messages: {
								type: 'boolean',
								description:
									'True, if the administrator can manage chat welcome messages or directly send them in the case of bots.',
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
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'getChatMemberCount',
		label: 'Get chat member count',
		description: 'Gets the number of members in a chat.',
		context:
			'---\nname: getChatMemberCount\ndescription: Gets the number of members in a chat.\n---\n\nCalls the Bot API [`getChatMemberCount`](https://core.telegram.org/bots/api#getchatmembercount) method\nto get the number of members in a chat. Works for private chats, groups, supergroups, and channels.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target supergroup or channel in the format `@channelusername`.',
				},
			},
			required: ['chat_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				result: { type: 'number', description: 'The number of members in the chat.' },
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'getFile',
		label: 'Get a file',
		description: 'Gets basic information about a file and prepares it for downloading.',
		context:
			'---\nname: getFile\ndescription: Gets basic information about a file and prepares it for downloading.\n---\n\nCalls the Bot API [`getFile`](https://core.telegram.org/bots/api#getfile) method to get basic\ninformation about a file and prepare it for downloading. Bots can download files of up to 20MB.\n\nThis endpoint only performs the metadata lookup (the atomic Bot API operation). It does not download\nthe actual file content — that requires a separate GET request to\n`https://api.telegram.org/file/bot<token>/<file_path>` using the `file_path` returned here, which is a\nfile-serving endpoint outside the documented `/bot<token>/` Bot API method surface and is therefore not\nwrapped as part of this Endpoint. The link is guaranteed to be valid for at least 1 hour; a new one can\nbe requested by calling this endpoint again.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				file_id: {
					type: 'string',
					description: 'File identifier to get information about.',
				},
			},
			required: ['file_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				file_id: {
					type: 'string',
					description:
						'Identifier for this file, which can be used to download or reuse the file.',
				},
				file_unique_id: {
					type: 'string',
					description:
						"Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.",
				},
				file_size: { type: 'number', description: 'File size in bytes, if known.' },
				file_path: {
					type: 'string',
					description:
						'File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to download the file. The link is guaranteed to be valid for at least 1 hour.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'getUpdates',
		label: 'Get updates',
		description: 'Receives incoming updates using long polling.',
		context:
			"---\nname: getUpdates\ndescription: Receives incoming updates using long polling.\n---\n\nCalls the Bot API [`getUpdates`](https://core.telegram.org/bots/api#getupdates) method to receive\nincoming updates using long polling.\n\n`allowed_updates` selects which events to receive. Pass an empty list to receive every type except `chat_member`, `message_reaction`, and `message_reaction_count`. Omit the field to keep the bot's previous filter. At most one of these fields is present on each [`Update`](https://core.telegram.org/bots/api#update).\n\n- `message` — New incoming message of any kind: text, photo, sticker, and so on.\n- `edited_message` — New version of a message that is known to the bot and was edited.\n- `channel_post` — New incoming channel post of any kind.\n- `edited_channel_post` — New version of a channel post that is known to the bot and was edited.\n- `business_connection` — The bot was connected to or disconnected from a business account, or a user edited an existing connection.\n- `business_message` — New message from a connected business account.\n- `edited_business_message` — New version of a message from a connected business account.\n- `deleted_business_messages` — Messages were deleted from a connected business account.\n- `message_reaction` — A user changed a reaction on a message. The bot must be an administrator and must list this type. Reactions set by bots are not included.\n- `message_reaction_count` — Anonymous reactions on a message changed. The bot must be an administrator and must list this type. Updates can arrive a few minutes late.\n- `inline_query` — New incoming inline query.\n- `chosen_inline_result` — A user chose an inline result and sent it to their chat partner.\n- `callback_query` — New incoming callback query from an inline keyboard button.\n- `shipping_query` — New incoming shipping query. Only for invoices with a flexible price.\n- `pre_checkout_query` — New incoming pre-checkout query. Contains the full checkout information.\n- `purchased_paid_media` — A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat.\n- `poll` — New poll state. Bots receive manually stopped polls and polls the bot sent.\n- `poll_answer` — A user changed their answer in a non-anonymous poll the bot sent.\n- `my_chat_member` — The bot's member status changed in a chat. In a private chat this arrives only when the user blocks or unblocks the bot.\n- `chat_member` — A chat member's status changed. The bot must be an administrator and must list this type.\n- `chat_join_request` — Someone requested to join the chat. The bot needs the `can_invite_users` administrator right.\n- `chat_boost` — A chat boost was added or changed. The bot must be an administrator.\n- `removed_chat_boost` — A boost was removed from a chat. The bot must be an administrator.\n",
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				offset: {
					type: 'number',
					description:
						'Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as this endpoint is called with an offset higher than its Update ID. A negative offset can be specified to retrieve updates starting from that many updates from the end of the updates queue; all previous updates will be forgotten.',
				},
				limit: {
					type: 'number',
					description:
						'Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.',
					minimum: 1,
					maximum: 100,
				},
				timeout: {
					type: 'number',
					description:
						'Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive; short polling should be used for testing purposes only.',
				},
				allowed_updates: {
					type: 'array',
					description:
						'The list of update types to receive. Specify an empty array to receive all update types except `chat_member`, `message_reaction`, and `message_reaction_count`. If omitted, the previous setting is used. This does not affect updates created before the call, so unwanted updates may be received for a short period of time.',
					items: {
						type: 'string',
						description:
							'A single update type the bot should receive. For example, `message`.',
						default: '',
						enum: [
							'',
							'message',
							'edited_message',
							'channel_post',
							'edited_channel_post',
							'business_connection',
							'business_message',
							'edited_business_message',
							'deleted_business_messages',
							'message_reaction',
							'message_reaction_count',
							'inline_query',
							'chosen_inline_result',
							'callback_query',
							'shipping_query',
							'pre_checkout_query',
							'purchased_paid_media',
							'poll',
							'poll_answer',
							'my_chat_member',
							'chat_member',
							'chat_join_request',
							'chat_boost',
							'removed_chat_boost',
						],
					},
					'x-advanced': true,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				updates: {
					type: 'array',
					description: 'The list of incoming updates.',
					items: {
						type: 'object',
						description:
							'This object represents an incoming update. At most one of the optional fields can be present in any given update.',
						properties: {
							update_id: {
								type: 'number',
								description:
									"The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially.",
							},
							message: {
								type: 'object',
								description:
									'New incoming message of any kind - text, photo, sticker, etc.',
								properties: {
									message_id: {
										type: 'number',
										description:
											'Unique identifier of the message inside this chat.',
									},
									date: {
										type: 'number',
										description: 'Date the message was sent, in Unix time.',
									},
									chat: {
										type: 'object',
										description: 'The chat the message belongs to.',
										properties: {
											id: {
												type: 'number',
												description: 'Unique identifier for this chat.',
											},
											type: {
												type: 'string',
												description:
													'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
											},
											username: {
												type: 'string',
												description:
													'Username, for private chats, supergroups, and channels, if available.',
											},
											first_name: {
												type: 'string',
												description:
													'First name of the other party in a private chat.',
											},
											last_name: {
												type: 'string',
												description:
													'Last name of the other party in a private chat.',
											},
											is_forum: {
												type: 'boolean',
												description:
													'True if the supergroup chat is a forum (has topics enabled).',
											},
										},
										required: [],
									},
									from: {
										type: 'object',
										description:
											'The user that sent the message. Empty for messages sent to channels.',
										properties: {
											id: {
												type: 'number',
												description:
													'Unique identifier for this user or bot.',
											},
											is_bot: {
												type: 'boolean',
												description: 'True, if this user is a bot.',
											},
											first_name: {
												type: 'string',
												description: "User's or bot's first name.",
											},
											last_name: {
												type: 'string',
												description: "User's or bot's last name.",
											},
											username: {
												type: 'string',
												description: "User's or bot's username.",
											},
											language_code: {
												type: 'string',
												description:
													"IETF language tag of the user's language.",
											},
										},
										required: [],
									},
									text: {
										type: 'string',
										description: 'The actual UTF-8 text of the message.',
									},
									caption: {
										type: 'string',
										description: 'Caption for the media, if any.',
									},
									entities: {
										type: 'array',
										description:
											'Special entities like usernames, URLs, or bot commands that appear in the text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description: 'Type of the entity.',
												},
												offset: {
													type: 'number',
													description:
														'Offset in UTF-16 code units to the start of the entity.',
												},
												length: {
													type: 'number',
													description:
														'Length of the entity in UTF-16 code units.',
												},
												url: {
													type: 'string',
													description:
														'For `text_link` entities only, the URL opened when the user taps the text.',
												},
											},
											required: [],
										},
									},
									photo: {
										type: 'array',
										description:
											'The message photo, available in several sizes.',
										items: {
											type: 'object',
											properties: {
												file_id: {
													type: 'string',
													description:
														'Identifier for this file, which can be used to download or reuse the file.',
												},
												file_unique_id: {
													type: 'string',
													description: 'Unique identifier for this file.',
												},
												width: {
													type: 'number',
													description: 'Photo width.',
												},
												height: {
													type: 'number',
													description: 'Photo height.',
												},
												file_size: {
													type: 'number',
													description: 'File size in bytes.',
												},
											},
											required: [],
										},
									},
									document: {
										type: 'object',
										description:
											'Information about the general file, if the message is a document.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									video: {
										type: 'object',
										description:
											'Information about the video, if the message is a video.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											width: { type: 'number', description: 'Video width.' },
											height: {
												type: 'number',
												description: 'Video height.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the video in seconds.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									animation: {
										type: 'object',
										description:
											'Information about the animation, if the message is an animation (GIF or H.264/MPEG-4 AVC video without sound).',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											width: { type: 'number', description: 'Video width.' },
											height: {
												type: 'number',
												description: 'Video height.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the video in seconds.',
											},
											file_name: {
												type: 'string',
												description:
													'Original animation filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									audio: {
										type: 'object',
										description:
											'Information about the audio, if the message is an audio file.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the audio in seconds.',
											},
											performer: {
												type: 'string',
												description:
													'Performer of the audio as defined by the sender or by audio tags.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									voice: {
										type: 'object',
										description:
											'Information about the voice message, if the message is a voice message.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the audio in seconds.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									sticker: {
										type: 'object',
										description:
											'Information about the sticker, if the message is a sticker.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											type: {
												type: 'string',
												description:
													'Type of the sticker: `regular`, `mask`, or `custom_emoji`.',
											},
											width: {
												type: 'number',
												description: 'Sticker width.',
											},
											height: {
												type: 'number',
												description: 'Sticker height.',
											},
											is_animated: {
												type: 'boolean',
												description: 'True, if the sticker is animated.',
											},
											is_video: {
												type: 'boolean',
												description:
													'True, if the sticker is a video sticker.',
											},
											emoji: {
												type: 'string',
												description: 'Emoji associated with the sticker.',
											},
											set_name: {
												type: 'string',
												description:
													'Name of the sticker set to which the sticker belongs.',
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description:
											'Information about the location, if the message is a location.',
										properties: {
											longitude: {
												type: 'number',
												description: 'Longitude as defined by sender.',
											},
											latitude: {
												type: 'number',
												description: 'Latitude as defined by sender.',
											},
										},
										required: [],
									},
									venue: {
										type: 'object',
										description:
											'Information about the venue, if the message is a venue.',
										properties: {
											address: {
												type: 'string',
												description: 'Address of the venue.',
											},
										},
										required: [],
									},
									contact: {
										type: 'object',
										description:
											'Information about the contact, if the message is a shared contact.',
										properties: {
											phone_number: {
												type: 'string',
												description: "Contact's phone number.",
											},
											first_name: {
												type: 'string',
												description: "Contact's first name.",
											},
											last_name: {
												type: 'string',
												description: "Contact's last name.",
											},
											user_id: {
												type: 'number',
												description:
													"Contact's user identifier in Telegram, if available.",
											},
											vcard: {
												type: 'string',
												description:
													'Additional data about the contact in the form of a vCard.',
											},
										},
										required: [],
									},
									poll: {
										type: 'object',
										description:
											'Information about the poll, if the message contains a native poll.',
										properties: {
											id: {
												type: 'string',
												description: 'Unique poll identifier.',
											},
											question: {
												type: 'string',
												description: 'Poll question.',
											},
											total_voter_count: {
												type: 'number',
												description:
													'Total number of users that voted in the poll.',
											},
											is_closed: {
												type: 'boolean',
												description: 'True, if the poll is closed.',
											},
											is_anonymous: {
												type: 'boolean',
												description: 'True, if the poll is anonymous.',
											},
											type: {
												type: 'string',
												description: 'Poll type: `regular` or `quiz`.',
											},
											allows_multiple_answers: {
												type: 'boolean',
												description:
													'True, if the poll allows multiple answers.',
											},
										},
										required: [],
									},
									reply_markup: {
										type: 'object',
										description:
											'Inline keyboard attached to the message, if any.',
										properties: {
											inline_keyboard: {
												type: 'array',
												description:
													'Array of button rows, each an array of buttons.',
												items: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															text: {
																type: 'string',
																description:
																	'Label text on the button.',
															},
															url: {
																type: 'string',
																description:
																	'HTTP or `tg://` URL opened when the button is pressed.',
															},
															callback_data: {
																type: 'string',
																description:
																	'Data sent in a callback query when the button is pressed.',
															},
														},
														required: [],
													},
												},
											},
										},
										required: [],
									},
								},
								required: [],
							},
							edited_message: {
								type: 'object',
								description:
									'New version of a message that is known to the bot and was edited. Shares the same shape as Message.',
								properties: {
									message_id: {
										type: 'number',
										description:
											'Unique identifier of the message inside this chat.',
									},
									date: {
										type: 'number',
										description:
											'Date the message was originally sent, in Unix time.',
									},
									edit_date: {
										type: 'number',
										description:
											'Date the message was last edited, in Unix time.',
									},
									chat: {
										type: 'object',
										description: 'The chat the message belongs to.',
										properties: {
											id: {
												type: 'number',
												description: 'Unique identifier for this chat.',
											},
											type: {
												type: 'string',
												description:
													'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
											},
											username: {
												type: 'string',
												description:
													'Username, for private chats, supergroups, and channels, if available.',
											},
											first_name: {
												type: 'string',
												description:
													'First name of the other party in a private chat.',
											},
											last_name: {
												type: 'string',
												description:
													'Last name of the other party in a private chat.',
											},
											is_forum: {
												type: 'boolean',
												description:
													'True if the supergroup chat is a forum (has topics enabled).',
											},
										},
										required: [],
									},
									from: {
										type: 'object',
										description:
											'The user that sent the message. Empty for messages sent to channels.',
										properties: {
											id: {
												type: 'number',
												description:
													'Unique identifier for this user or bot.',
											},
											is_bot: {
												type: 'boolean',
												description: 'True, if this user is a bot.',
											},
											first_name: {
												type: 'string',
												description: "User's or bot's first name.",
											},
											last_name: {
												type: 'string',
												description: "User's or bot's last name.",
											},
											username: {
												type: 'string',
												description: "User's or bot's username.",
											},
											language_code: {
												type: 'string',
												description:
													"IETF language tag of the user's language.",
											},
										},
										required: [],
									},
									text: {
										type: 'string',
										description: 'The actual UTF-8 text of the message.',
									},
									caption: {
										type: 'string',
										description: 'Caption for the media, if any.',
									},
									photo: {
										type: 'array',
										description:
											'The message photo, available in several sizes.',
										items: {
											type: 'object',
											properties: {
												file_id: {
													type: 'string',
													description:
														'Identifier for this file, which can be used to download or reuse the file.',
												},
												file_unique_id: {
													type: 'string',
													description: 'Unique identifier for this file.',
												},
												width: {
													type: 'number',
													description: 'Photo width.',
												},
												height: {
													type: 'number',
													description: 'Photo height.',
												},
												file_size: {
													type: 'number',
													description: 'File size in bytes.',
												},
											},
											required: [],
										},
									},
									document: {
										type: 'object',
										description:
											'Information about the general file, if the message is a document.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									video: {
										type: 'object',
										description:
											'Information about the video, if the message is a video.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											width: { type: 'number', description: 'Video width.' },
											height: {
												type: 'number',
												description: 'Video height.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the video in seconds.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									audio: {
										type: 'object',
										description:
											'Information about the audio, if the message is an audio file.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the audio in seconds.',
											},
											performer: {
												type: 'string',
												description:
													'Performer of the audio as defined by the sender or by audio tags.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									voice: {
										type: 'object',
										description:
											'Information about the voice message, if the message is a voice message.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the audio in seconds.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									sticker: {
										type: 'object',
										description:
											'Information about the sticker, if the message is a sticker.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											type: {
												type: 'string',
												description:
													'Type of the sticker: `regular`, `mask`, or `custom_emoji`.',
											},
											width: {
												type: 'number',
												description: 'Sticker width.',
											},
											height: {
												type: 'number',
												description: 'Sticker height.',
											},
											is_animated: {
												type: 'boolean',
												description: 'True, if the sticker is animated.',
											},
											is_video: {
												type: 'boolean',
												description:
													'True, if the sticker is a video sticker.',
											},
											emoji: {
												type: 'string',
												description: 'Emoji associated with the sticker.',
											},
											set_name: {
												type: 'string',
												description:
													'Name of the sticker set to which the sticker belongs.',
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description:
											'Information about the location, if the message is a location.',
										properties: {
											longitude: {
												type: 'number',
												description: 'Longitude as defined by sender.',
											},
											latitude: {
												type: 'number',
												description: 'Latitude as defined by sender.',
											},
										},
										required: [],
									},
									venue: {
										type: 'object',
										description:
											'Information about the venue, if the message is a venue.',
										properties: {
											address: {
												type: 'string',
												description: 'Address of the venue.',
											},
										},
										required: [],
									},
									contact: {
										type: 'object',
										description:
											'Information about the contact, if the message is a shared contact.',
										properties: {
											phone_number: {
												type: 'string',
												description: "Contact's phone number.",
											},
											first_name: {
												type: 'string',
												description: "Contact's first name.",
											},
											last_name: {
												type: 'string',
												description: "Contact's last name.",
											},
											user_id: {
												type: 'number',
												description:
													"Contact's user identifier in Telegram, if available.",
											},
											vcard: {
												type: 'string',
												description:
													'Additional data about the contact in the form of a vCard.',
											},
										},
										required: [],
									},
									poll: {
										type: 'object',
										description:
											'Information about the poll, if the message contains a native poll.',
										properties: {
											id: {
												type: 'string',
												description: 'Unique poll identifier.',
											},
											question: {
												type: 'string',
												description: 'Poll question.',
											},
											total_voter_count: {
												type: 'number',
												description:
													'Total number of users that voted in the poll.',
											},
											is_closed: {
												type: 'boolean',
												description: 'True, if the poll is closed.',
											},
											is_anonymous: {
												type: 'boolean',
												description: 'True, if the poll is anonymous.',
											},
											type: {
												type: 'string',
												description: 'Poll type: `regular` or `quiz`.',
											},
											allows_multiple_answers: {
												type: 'boolean',
												description:
													'True, if the poll allows multiple answers.',
											},
										},
										required: [],
									},
									reply_markup: {
										type: 'object',
										description:
											'Inline keyboard attached to the message, if any.',
										properties: {
											inline_keyboard: {
												type: 'array',
												description:
													'Array of button rows, each an array of buttons.',
												items: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															text: {
																type: 'string',
																description:
																	'Label text on the button.',
															},
															url: {
																type: 'string',
																description:
																	'HTTP or `tg://` URL opened when the button is pressed.',
															},
															callback_data: {
																type: 'string',
																description:
																	'Data sent in a callback query when the button is pressed.',
															},
														},
														required: [],
													},
												},
											},
										},
										required: [],
									},
								},
								required: [],
							},
							channel_post: {
								type: 'object',
								description:
									'New incoming channel post of any kind - text, photo, sticker, etc. Shares the same shape as Message.',
								properties: {
									message_id: {
										type: 'number',
										description:
											'Unique identifier of the message inside this chat.',
									},
									date: {
										type: 'number',
										description: 'Date the message was sent, in Unix time.',
									},
									chat: {
										type: 'object',
										description: 'The chat the message belongs to.',
										properties: {
											id: {
												type: 'number',
												description: 'Unique identifier for this chat.',
											},
											type: {
												type: 'string',
												description: 'Type of chat: `channel`.',
											},
											username: {
												type: 'string',
												description:
													'Username of the channel, if available.',
											},
										},
										required: [],
									},
									text: {
										type: 'string',
										description: 'The actual UTF-8 text of the message.',
									},
									caption: {
										type: 'string',
										description: 'Caption for the media, if any.',
									},
									photo: {
										type: 'array',
										description:
											'The message photo, available in several sizes.',
										items: {
											type: 'object',
											properties: {
												file_id: {
													type: 'string',
													description:
														'Identifier for this file, which can be used to download or reuse the file.',
												},
												file_unique_id: {
													type: 'string',
													description: 'Unique identifier for this file.',
												},
												width: {
													type: 'number',
													description: 'Photo width.',
												},
												height: {
													type: 'number',
													description: 'Photo height.',
												},
												file_size: {
													type: 'number',
													description: 'File size in bytes.',
												},
											},
											required: [],
										},
									},
									document: {
										type: 'object',
										description:
											'Information about the general file, if the message is a document.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
									video: {
										type: 'object',
										description:
											'Information about the video, if the message is a video.',
										properties: {
											file_id: {
												type: 'string',
												description:
													'Identifier for this file, which can be used to download or reuse the file.',
											},
											file_unique_id: {
												type: 'string',
												description: 'Unique identifier for this file.',
											},
											width: { type: 'number', description: 'Video width.' },
											height: {
												type: 'number',
												description: 'Video height.',
											},
											duration: {
												type: 'number',
												description: 'Duration of the video in seconds.',
											},
											file_name: {
												type: 'string',
												description:
													'Original filename as defined by the sender.',
											},
											mime_type: {
												type: 'string',
												description:
													'MIME type of the file as defined by the sender.',
											},
											file_size: {
												type: 'number',
												description: 'File size in bytes.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							edited_channel_post: {
								type: 'object',
								description:
									'New version of a channel post that is known to the bot and was edited. Shares the same shape as Message.',
								properties: {
									message_id: {
										type: 'number',
										description:
											'Unique identifier of the message inside this chat.',
									},
									date: {
										type: 'number',
										description:
											'Date the message was originally sent, in Unix time.',
									},
									edit_date: {
										type: 'number',
										description:
											'Date the message was last edited, in Unix time.',
									},
									chat: {
										type: 'object',
										description: 'The chat the message belongs to.',
										properties: {
											id: {
												type: 'number',
												description: 'Unique identifier for this chat.',
											},
											type: {
												type: 'string',
												description: 'Type of chat: `channel`.',
											},
											username: {
												type: 'string',
												description:
													'Username of the channel, if available.',
											},
										},
										required: [],
									},
									text: {
										type: 'string',
										description: 'The actual UTF-8 text of the message.',
									},
									caption: {
										type: 'string',
										description: 'Caption for the media, if any.',
									},
								},
								required: [],
							},
							inline_query: {
								type: 'object',
								description: 'New incoming inline query.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier for this query.',
									},
									from: {
										type: 'object',
										description: 'The user who sent the query.',
										properties: {
											id: {
												type: 'number',
												description:
													'Unique identifier for this user or bot.',
											},
											is_bot: {
												type: 'boolean',
												description: 'True, if this user is a bot.',
											},
											first_name: {
												type: 'string',
												description: "User's or bot's first name.",
											},
											last_name: {
												type: 'string',
												description: "User's or bot's last name.",
											},
											username: {
												type: 'string',
												description: "User's or bot's username.",
											},
											language_code: {
												type: 'string',
												description:
													"IETF language tag of the user's language.",
											},
										},
										required: [],
									},
									query: {
										type: 'string',
										description: 'Text of the query, up to 256 characters.',
									},
									offset: {
										type: 'string',
										description:
											'Offset of the results to be returned, can be controlled by the bot.',
									},
								},
								required: [],
							},
							callback_query: {
								type: 'object',
								description: 'New incoming callback query.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier for this query.',
									},
									from: {
										type: 'object',
										description: 'The user who pressed the button.',
										properties: {
											id: {
												type: 'number',
												description:
													'Unique identifier for this user or bot.',
											},
											is_bot: {
												type: 'boolean',
												description: 'True, if this user is a bot.',
											},
											first_name: {
												type: 'string',
												description: "User's or bot's first name.",
											},
											last_name: {
												type: 'string',
												description: "User's or bot's last name.",
											},
											username: {
												type: 'string',
												description: "User's or bot's username.",
											},
											language_code: {
												type: 'string',
												description:
													"IETF language tag of the user's language.",
											},
										},
										required: [],
									},
									chat_instance: {
										type: 'string',
										description:
											'Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.',
									},
									data: {
										type: 'string',
										description: 'Data associated with the callback button.',
									},
									inline_message_id: {
										type: 'string',
										description:
											'Identifier of the message sent via the bot in inline mode, that originated the query.',
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
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'pinChatMessage',
		label: 'Pin a chat message',
		description: 'Adds a message to the list of pinned messages in a chat.',
		context:
			'---\nname: pinChatMessage\ndescription: Adds a message to the list of pinned messages in a chat.\n---\n\nPins a message via the Bot API [`pinChatMessage`](https://core.telegram.org/bots/api#pinchatmessage) method. In private chats, all non-service messages can be pinned. In groups and channels, the bot must be an administrator with the `can_pin_messages` right (groups) or `can_edit_messages` right (channels).\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@username`.',
				},
				message_id: { type: 'number', description: 'Identifier of the message to pin.' },
				disable_notification: {
					type: 'boolean',
					description:
						'Do not send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.',
				},
			},
			required: ['chat_id', 'message_id'],
		},
		outputSchema: {
			type: 'object',
			properties: { result: { type: 'boolean', description: 'True on success.' } },
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'promoteChatMember',
		label: 'Promote a chat member',
		description: 'Promotes or demotes a user in a supergroup or channel.',
		context:
			'---\nname: promoteChatMember\ndescription: Promotes or demotes a user in a supergroup or a channel.\n---\n\nCalls the Bot API [`promoteChatMember`](https://core.telegram.org/bots/api#promotechatmember) method\nto promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat\nwith the appropriate rights. Pass `false` for all boolean parameters to demote a user.\n\nThis endpoint implements the full, current set of administrator privilege flags documented by the Bot\nAPI, including flags added after the legacy `PromoteChatMember` module was built (`is_anonymous`,\n`can_manage_chat`, `can_manage_video_chats`, `can_post_stories`, `can_edit_stories`,\n`can_delete_stories`, `can_manage_topics`, `can_manage_direct_messages`, `can_manage_tags`,\n`can_send_welcome_messages`).\n\nSome flags only apply to specific chat types: `can_post_messages`, `can_edit_messages`, and\n`can_manage_direct_messages` are channel-only; `can_pin_messages` and `can_manage_topics` are\nsupergroup-only. A bot cannot grant a right it does not itself hold — attempting to do so returns\n`RIGHT_FORBIDDEN`.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.',
				},
				user_id: { type: 'number', description: 'Unique identifier of the target user.' },
				is_anonymous: {
					type: 'boolean',
					description: "Pass true if the administrator's presence in the chat is hidden.",
				},
				can_manage_chat: {
					type: 'boolean',
					description:
						'Pass true if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.',
				},
				can_delete_messages: {
					type: 'boolean',
					description:
						'Pass true if the administrator can delete messages of other users.',
				},
				can_manage_video_chats: {
					type: 'boolean',
					description: 'Pass true if the administrator can manage video chats.',
				},
				can_restrict_members: {
					type: 'boolean',
					description:
						'Pass true if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to true for promotions of channel administrators.',
				},
				can_promote_members: {
					type: 'boolean',
					description:
						'Pass true if the administrator can add new administrators with a subset of their own privileges, or demote administrators that they have promoted, directly or indirectly.',
				},
				can_change_info: {
					type: 'boolean',
					description:
						'Pass true if the administrator can change the chat title, photo and other settings.',
				},
				can_invite_users: {
					type: 'boolean',
					description: 'Pass true if the administrator can invite new users to the chat.',
				},
				can_post_stories: {
					type: 'boolean',
					description: 'Pass true if the administrator can post stories to the chat.',
				},
				can_edit_stories: {
					type: 'boolean',
					description:
						"Pass true if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive.",
				},
				can_delete_stories: {
					type: 'boolean',
					description:
						'Pass true if the administrator can delete stories posted by other users.',
				},
				can_post_messages: {
					type: 'boolean',
					description:
						'Pass true if the administrator can post messages in the channel, approve suggested posts, or access channel statistics. Channels only.',
				},
				can_edit_messages: {
					type: 'boolean',
					description:
						'Pass true if the administrator can edit messages of other users and can pin messages. Channels only.',
				},
				can_pin_messages: {
					type: 'boolean',
					description:
						'Pass true if the administrator can pin messages. Supergroups only.',
				},
				can_manage_topics: {
					type: 'boolean',
					description:
						'Pass true if the user is allowed to create, rename, close, and reopen forum topics. Supergroups only.',
				},
				can_manage_direct_messages: {
					type: 'boolean',
					description:
						'Pass true if the administrator can manage direct messages within the channel and decline suggested posts. Channels only.',
				},
				can_manage_tags: {
					type: 'boolean',
					description:
						'Pass true if the administrator can edit the tags of regular members. Groups and supergroups only.',
				},
				can_send_welcome_messages: {
					type: 'boolean',
					description:
						'Pass true if the administrator can manage chat welcome messages or directly send them in the case of bots.',
				},
			},
			required: ['chat_id', 'user_id'],
		},
		outputSchema: {
			type: 'object',
			properties: { result: { type: 'boolean', description: 'True on success.' } },
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'restrictChatMember',
		label: 'Restrict a chat member',
		description: 'Restricts a user in a supergroup.',
		context:
			'---\nname: restrictChatMember\ndescription: Restricts a user in a supergroup.\n---\n\nCalls the Bot API [`restrictChatMember`](https://core.telegram.org/bots/api#restrictchatmember) method\nto restrict a user in a supergroup. The bot must be an administrator in the supergroup with the\nappropriate rights. Pass `true` for all permissions to lift restrictions from a user.\n\nThis endpoint implements the full, current `ChatPermissions` field set, including fields added after\nthe legacy module was built (`can_send_polls`, `can_react_to_messages`, `can_edit_tag`,\n`can_change_info`, `can_invite_users`, `can_pin_messages`, `can_manage_topics`), plus\n`use_independent_chat_permissions`.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target supergroup in the format `@supergroupusername`.',
				},
				user_id: { type: 'number', description: 'Unique identifier of the target user.' },
				permissions: {
					type: 'object',
					description: 'The new user permissions.',
					properties: {
						can_send_messages: {
							type: 'boolean',
							description:
								'True, if the user is allowed to send text messages, rich messages, contacts, giveaways, giveaway winners, invoices, locations and venues.',
						},
						can_send_audios: {
							type: 'boolean',
							description: 'True, if the user is allowed to send audios.',
						},
						can_send_documents: {
							type: 'boolean',
							description: 'True, if the user is allowed to send documents.',
						},
						can_send_photos: {
							type: 'boolean',
							description: 'True, if the user is allowed to send photos.',
						},
						can_send_videos: {
							type: 'boolean',
							description: 'True, if the user is allowed to send videos.',
						},
						can_send_video_notes: {
							type: 'boolean',
							description: 'True, if the user is allowed to send video notes.',
						},
						can_send_voice_notes: {
							type: 'boolean',
							description: 'True, if the user is allowed to send voice notes.',
						},
						can_send_polls: {
							type: 'boolean',
							description:
								'True, if the user is allowed to send polls and checklists.',
						},
						can_send_other_messages: {
							type: 'boolean',
							description:
								'True, if the user is allowed to send animations, games, stickers and use inline bots.',
						},
						can_add_web_page_previews: {
							type: 'boolean',
							description:
								'True, if the user is allowed to add web page previews to their messages.',
						},
						can_react_to_messages: {
							type: 'boolean',
							description:
								'True, if the user is allowed to react to messages. If omitted, defaults to the value of Can Send Messages.',
						},
						can_edit_tag: {
							type: 'boolean',
							description:
								'True, if the user is allowed to edit their own tag. If omitted, defaults to the value of Can Pin Messages.',
						},
						can_change_info: {
							type: 'boolean',
							description:
								'True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups.',
						},
						can_invite_users: {
							type: 'boolean',
							description:
								'True, if the user is allowed to invite new users to the chat.',
						},
						can_pin_messages: {
							type: 'boolean',
							description:
								'True, if the user is allowed to pin messages. Ignored in public supergroups.',
						},
						can_manage_topics: {
							type: 'boolean',
							description:
								'True, if the user is allowed to create forum topics. If omitted, defaults to the value of Can Pin Messages.',
						},
					},
					required: [],
				},
				use_independent_chat_permissions: {
					type: 'boolean',
					description:
						'Pass true if chat permissions are set independently. Otherwise, Can Send Other Messages and Can Add Web Page Previews imply Can Send Messages, Can Send Audios, Can Send Documents, Can Send Photos, Can Send Videos, Can Send Video Notes, and Can Send Voice Notes; Can Send Polls implies Can Send Messages.',
					'x-advanced': true,
				},
				until_date: {
					type: 'number',
					description:
						'Point in time when restrictions will be lifted for the user, as a Unix timestamp. If omitted or a date in the past, the user is restricted forever.',
				},
			},
			required: ['chat_id', 'user_id', 'permissions'],
		},
		outputSchema: {
			type: 'object',
			properties: { result: { type: 'boolean', description: 'True on success.' } },
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'revokeChatInviteLink',
		label: 'Revoke a chat invite link',
		description: 'Revokes an invite link created by the bot.',
		context:
			'---\nname: revokeChatInviteLink\ndescription: Revokes an invite link created by the bot.\n---\n\nCalls the Bot API [`revokeChatInviteLink`](https://core.telegram.org/bots/api#revokechatinvitelink)\nmethod to revoke an invite link created by the bot. If the primary link is revoked, a new link is\nautomatically generated. The bot must be an administrator in the chat with the appropriate rights.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier of the target chat, or username of the target channel in the format `@channelusername`.',
				},
				invite_link: { type: 'string', description: 'The invite link to revoke.' },
			},
			required: ['chat_id', 'invite_link'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				invite_link: {
					type: 'string',
					description:
						'The invite link. If the link was created by another chat administrator, the second part of the link is replaced with "...".',
				},
				name: { type: 'string', description: 'Invite link name.' },
				creator: {
					type: 'object',
					description: 'Creator of the link.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True, if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
						is_premium: {
							type: 'boolean',
							description: 'True, if this user is a Telegram Premium user.',
						},
						added_to_attachment_menu: {
							type: 'boolean',
							description: 'True, if this user added the bot to the attachment menu.',
						},
					},
					required: [],
				},
				creates_join_request: {
					type: 'boolean',
					description:
						'True, if users joining the chat via the link need to be approved by chat administrators.',
				},
				is_primary: { type: 'boolean', description: 'True, if the link is primary.' },
				is_revoked: { type: 'boolean', description: 'True, if the link is revoked.' },
				expire_date: {
					type: 'number',
					description: 'Point in time when the link will expire or has been expired.',
				},
				member_limit: {
					type: 'number',
					description:
						'The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link.',
				},
				pending_join_request_count: {
					type: 'number',
					description: 'Number of pending join requests created using this link.',
				},
				subscription_period: {
					type: 'number',
					description:
						'The number of seconds the subscription will be active for before the next payment.',
				},
				subscription_price: {
					type: 'number',
					description:
						'The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendAudio',
		label: 'Send an audio',
		description: 'Sends an audio file to a Telegram chat, displayed in the music player.',
		context:
			'---\nname: sendAudio\ndescription: Sends an audio file to a Telegram chat, displayed in the music player.\n---\n\nCalls the Bot API [`sendAudio`](https://core.telegram.org/bots/api#sendaudio) method to send an audio file to a Telegram chat, displayed in the music player. The file should be `.MP3` or `.M4A`. Bots can send audio files up to 50 MB. For voice messages, use `sendVoice` instead.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				caption: {
					type: 'string',
					description: 'Audio caption, 0-1024 characters after entities parsing.',
				},
				sendType: {
					type: 'string',
					description: 'Select if to send by HTTP URL or by file ID.',
					enum: ['send_byurl', 'send_byid'],
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'MarkdownV2', 'HTML'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				duration: {
					type: 'number',
					description: 'Duration of the audio in seconds.',
					'x-advanced': true,
				},
				performer: {
					type: 'string',
					description:
						"Performer of the audio, as it will appear in the Telegram client's music player.",
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'sendType'],
			allOf: [
				{
					if: { properties: { sendType: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							httpUrl: {
								type: 'string',
								description:
									'Pass a URL to get a document or an image from the Internet and send it.',
							},
						},
						required: ['httpUrl'],
					},
				},
				{
					if: { properties: { sendType: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							fileId: {
								type: 'string',
								description:
									'Pass a file ID to send a document or an image that exists on the Telegram servers.',
							},
						},
						required: ['fileId'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				audio: {
					type: 'object',
					description: 'Information about the sent audio file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						performer: {
							type: 'string',
							description:
								'Performer of the audio, as defined by the sender or audio tags.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
						thumbnail: {
							type: 'object',
							description:
								'Thumbnail of the album cover to which the music file belongs.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
					},
					required: [],
				},
				caption: { type: 'string', description: 'Caption for the audio, if any.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						description: 'A single special entity in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendDocument',
		label: 'Send a document',
		description: 'Sends a general file to a Telegram chat.',
		context:
			'---\nname: sendDocument\ndescription: Sends a general file to a Telegram chat.\n---\n\nCalls the Bot API [`sendDocument`](https://core.telegram.org/bots/api#senddocument) method to send a general file (any type) to a Telegram chat. Bots can send files up to 50 MB.\n\n\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				caption: {
					type: 'string',
					description: 'Document caption, 0-1024 characters after entities parsing.',
				},
				sendType: {
					type: 'string',
					description: 'Select if to send by HTTP URL or by file ID.',
					enum: ['send_byurl', 'send_byid'],
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'MarkdownV2', 'HTML'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				reply_to_message_id: {
					type: 'number',
					description:
						'If the message is a reply, unique identifier of the original message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'sendType'],
			allOf: [
				{
					if: { properties: { sendType: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							httpUrl: {
								type: 'string',
								description:
									'Pass a URL to get a document from the Internet and send it.',
							},
						},
						required: ['httpUrl'],
					},
				},
				{
					if: { properties: { sendType: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							fileId: {
								type: 'string',
								description:
									'Pass a file ID to send a document that exists on the Telegram servers.',
							},
						},
						required: ['fileId'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				is_topic_message: {
					type: 'boolean',
					description:
						'True if the message was sent to a topic in a forum supergroup or a private chat with the bot.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				reply_to_message: {
					type: 'object',
					description:
						'For replies in the same chat and message thread, the original message that was replied to. This nested message will not itself contain a further Reply To Message field, even if it is itself a reply.',
					properties: {
						message_id: {
							type: 'number',
							description:
								'Unique identifier of the replied-to message inside this chat.',
						},
						date: {
							type: 'number',
							description: 'Date the replied-to message was sent, in Unix time.',
						},
						chat: {
							type: 'object',
							description: 'The chat the replied-to message belongs to.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this chat.',
								},
								type: {
									type: 'string',
									description:
										'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
								},
								username: {
									type: 'string',
									description:
										'Username, for private chats, supergroups, and channels, if available.',
								},
								first_name: {
									type: 'string',
									description: 'First name of the other party in a private chat.',
								},
								last_name: {
									type: 'string',
									description: 'Last name of the other party in a private chat.',
								},
							},
							required: [],
						},
						from: {
							type: 'object',
							description: 'The sender of the replied-to message.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this user or bot.',
								},
								is_bot: {
									type: 'boolean',
									description: 'True if this user is a bot.',
								},
								first_name: {
									type: 'string',
									description: "User's or bot's first name.",
								},
								last_name: {
									type: 'string',
									description: "User's or bot's last name.",
								},
								username: {
									type: 'string',
									description: "User's or bot's username.",
								},
							},
							required: [],
						},
						document: {
							type: 'object',
							description:
								'Information about the file sent in the replied-to message, if any.',
							properties: {
								file_id: {
									type: 'string',
									description:
										'Identifier for this file, usable to download or reuse the file.',
								},
								file_unique_id: {
									type: 'string',
									description:
										'Unique identifier for this file, consistent over time and across bots.',
								},
								file_name: {
									type: 'string',
									description: 'Original filename as defined by the sender.',
								},
								mime_type: {
									type: 'string',
									description: 'MIME type of the file as defined by the sender.',
								},
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						caption: {
							type: 'string',
							description: 'Caption of the replied-to message, if any.',
						},
					},
					required: [],
				},
				document: {
					type: 'object',
					description: 'Information about the sent file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						thumbnail: {
							type: 'object',
							description: 'Document thumbnail.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				caption: { type: 'string', description: 'Caption for the document, if any.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						description: 'A single special entity that appears in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendInvoice',
		label: 'Send an invoice',
		description: 'Sends an invoice message for payment to a Telegram chat.',
		context:
			'---\nname: sendInvoice\ndescription: Sends an invoice message for payment to a Telegram chat.\n---\n\nCalls the Bot API [`sendInvoice`](https://core.telegram.org/bots/api#sendinvoice) method to send an invoice message for payment, supporting both traditional payment providers (obtained via `@BotFather`) and Telegram Stars (`currency: "XTR"`).\n\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				description: {
					type: 'string',
					description: 'Product description, 1-255 characters.',
					minimum: 1,
					maximum: 255,
				},
				payload: {
					type: 'string',
					description:
						'Bot-defined invoice payload, 1-128 bytes. Not shown to the user; use it for your own internal processes (e.g. an order ID).',
				},
				provider_token: {
					type: 'string',
					description:
						'Payment provider token obtained via @BotFather. Leave empty for payments in Telegram Stars.',
					'x-advanced': true,
				},
				currency: {
					type: 'string',
					description:
						'Three-letter ISO 4217 currency code, or `XTR` for payments in Telegram Stars.',
				},
				prices: {
					type: 'array',
					description:
						'Price breakdown: product price, tax, discount, delivery cost, delivery tax, bonus, etc. Must contain exactly one item for payments in Telegram Stars.',
					items: {
						type: 'object',
						description:
							'A single price breakdown component (e.g. product price, tax, discount, or delivery cost).',
						properties: {
							label: {
								type: 'string',
								description:
									'Name of this price component, e.g. `Product`, `Tax`, `Discount`.',
							},
							amount: {
								type: 'number',
								description:
									'Amount in the smallest units of the currency (integer, not float). For example, for US$ 1.45, pass 145.',
							},
						},
						required: ['label', 'amount'],
					},
				},
				max_tip_amount: {
					type: 'number',
					description:
						'The maximum accepted tip amount, in the smallest units of the currency. Defaults to 0. Not supported for payments in Telegram Stars.',
					'x-advanced': true,
				},
				suggested_tip_amounts: {
					type: 'array',
					description:
						'Suggested tip amounts, in the smallest units of the currency. Must be positive, strictly increasing, and not exceed Max Tip Amount. At most 4 values.',
					items: {
						type: 'number',
						description:
							'A single suggested tip amount, in the smallest units of the currency.',
					},
					maxItems: 4,
					'x-advanced': true,
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
					'x-advanced': true,
				},
				start_parameter: {
					type: 'string',
					description:
						'Unique deep-linking parameter. If empty, forwarded copies of the message show a Pay button that any user can pay from directly. If set, forwarded copies show a URL deep-link button to the bot instead.',
					'x-advanced': true,
				},
				provider_data: {
					type: 'string',
					description:
						'JSON-serialized data about the invoice, shared with the payment provider. The required fields are provider-specific.',
					'x-advanced': true,
				},
				photo_url: {
					type: 'string',
					description:
						'URL of the product photo for the invoice — a photo of the goods, or a marketing image for a service.',
					'x-advanced': true,
				},
				need_name: {
					type: 'boolean',
					description:
						"Pass true to require the user's full name to complete the order. Ignored for payments in Telegram Stars.",
					'x-advanced': true,
				},
				need_phone_number: {
					type: 'boolean',
					description:
						"Pass true to require the user's phone number to complete the order. Ignored for payments in Telegram Stars.",
					'x-advanced': true,
				},
				need_email: {
					type: 'boolean',
					description:
						"Pass true to require the user's email address to complete the order. Ignored for payments in Telegram Stars.",
					'x-advanced': true,
				},
				need_shipping_address: {
					type: 'boolean',
					description:
						"Pass true to require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.",
					'x-advanced': true,
				},
				send_phone_number_to_provider: {
					type: 'boolean',
					description:
						"Pass true if the user's phone number should be sent to the payment provider. Ignored for payments in Telegram Stars.",
					'x-advanced': true,
				},
				send_email_to_provider: {
					type: 'boolean',
					description:
						"Pass true if the user's email address should be sent to the payment provider. Ignored for payments in Telegram Stars.",
					'x-advanced': true,
				},
				is_flexible: {
					type: 'boolean',
					description:
						'Pass true if the final price depends on the shipping method. Ignored for payments in Telegram Stars.',
					'x-advanced': true,
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				reply_to_message_id: {
					type: 'number',
					description:
						'If the message is a reply, unique identifier of the original message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized `InlineKeyboardMarkup` object (this is the only reply markup type sendInvoice accepts). If empty, a single \'Pay\' button is shown automatically. If provided, its first button must be a Pay button. Example: `{"inline_keyboard":[[{"text":"Pay","pay":true}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'title', 'description', 'payload', 'currency', 'prices'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				is_topic_message: {
					type: 'boolean',
					description:
						'True if the message was sent to a topic in a forum supergroup or a private chat with the bot.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				reply_to_message: {
					type: 'object',
					description:
						'For replies in the same chat and message thread, the original message that was replied to. This nested message will not itself contain a further Reply To Message field, even if it is itself a reply.',
					properties: {
						message_id: {
							type: 'number',
							description:
								'Unique identifier of the replied-to message inside this chat.',
						},
						date: {
							type: 'number',
							description: 'Date the replied-to message was sent, in Unix time.',
						},
						chat: {
							type: 'object',
							description: 'The chat the replied-to message belongs to.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this chat.',
								},
								type: {
									type: 'string',
									description:
										'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
								},
								username: {
									type: 'string',
									description:
										'Username, for private chats, supergroups, and channels, if available.',
								},
								first_name: {
									type: 'string',
									description: 'First name of the other party in a private chat.',
								},
								last_name: {
									type: 'string',
									description: 'Last name of the other party in a private chat.',
								},
							},
							required: [],
						},
						from: {
							type: 'object',
							description: 'The sender of the replied-to message.',
							properties: {
								id: {
									type: 'number',
									description: 'Unique identifier for this user or bot.',
								},
								is_bot: {
									type: 'boolean',
									description: 'True if this user is a bot.',
								},
								first_name: {
									type: 'string',
									description: "User's or bot's first name.",
								},
								last_name: {
									type: 'string',
									description: "User's or bot's last name.",
								},
								username: {
									type: 'string',
									description: "User's or bot's username.",
								},
							},
							required: [],
						},
						text: {
							type: 'string',
							description: 'Text of the replied-to message, if any.',
						},
					},
					required: [],
				},
				invoice: {
					type: 'object',
					description: 'Basic information about the invoice carried by this message.',
					properties: {
						description: { type: 'string', description: 'Product description.' },
						start_parameter: {
							type: 'string',
							description:
								'Unique bot deep-linking parameter that can be used to generate this invoice.',
						},
						currency: {
							type: 'string',
							description:
								'Three-letter ISO 4217 currency code, or `XTR` for Telegram Stars.',
						},
						total_amount: {
							type: 'number',
							description: 'Total price in the smallest units of the currency.',
						},
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description:
						'Inline keyboard attached to the message (a Pay button is always present).',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is the Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendMediaGroup',
		label: 'Send a media group',
		description: 'Sends a group of photos or videos as an album.',
		context:
			'---\nname: sendMediaGroup\ndescription: Sends a group of photos or videos as an album.\n---\n\nCalls the Bot API [`sendMediaGroup`](https://core.telegram.org/bots/api#sendmediagroup) method to send a group of media (2-10 items) as a single album.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				media: {
					type: 'array',
					description:
						'The album to send: 2-10 items. Photos and videos can be freely mixed together in one album.',
					items: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								description: 'The media type of this item.',
								enum: ['photo', 'video'],
							},
						},
						required: ['type'],
						allOf: [
							{
								if: { properties: { type: { const: 'photo' } } },
								then: {
									type: 'object',
									properties: {
										media: {
											type: 'string',
											description:
												'Pass a `file_id` of a photo already on Telegram servers (recommended), or an HTTP URL for Telegram to fetch it from.',
										},
										caption: {
											type: 'string',
											description:
												'Caption of this item, 0-1024 characters after entities parsing. Ignored by Telegram for every item except the first one in the album.',
										},
										parse_mode: {
											type: 'string',
											description:
												'Mode for parsing entities in the caption.',
											default: '',
											enum: ['', 'Markdown', 'MarkdownV2', 'HTML'],
										},
									},
									required: ['media'],
								},
							},
							{
								if: { properties: { type: { const: 'video' } } },
								then: {
									type: 'object',
									properties: {
										media: {
											type: 'string',
											description:
												'Pass a `file_id` of a video already on Telegram servers (recommended), or an HTTP URL for Telegram to fetch it from.',
										},
										caption: {
											type: 'string',
											description:
												'Caption of this item, 0-1024 characters after entities parsing. Ignored by Telegram for every item except the first one in the album.',
										},
										parse_mode: {
											type: 'string',
											description:
												'Mode for parsing entities in the caption.',
											default: '',
											enum: ['', 'Markdown', 'MarkdownV2', 'HTML'],
										},
										duration: {
											type: 'number',
											description: 'Duration of the video in seconds.',
											'x-advanced': true,
										},
										width: {
											type: 'number',
											description: 'Video width.',
											'x-advanced': true,
										},
										height: {
											type: 'number',
											description: 'Video height.',
											'x-advanced': true,
										},
									},
									required: ['media'],
								},
							},
						],
					},
					minItems: 2,
					maxItems: 10,
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the messages silently. Users will receive a notification with no sound.',
				},
			},
			required: ['chat_id', 'media'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of this sent message inside the chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				is_topic_message: {
					type: 'boolean',
					description:
						'True if the message was sent to a topic in a forum supergroup or a private chat with the bot.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				media_group_id: {
					type: 'string',
					description:
						'The unique identifier of the media group (album) this message belongs to.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				photo: {
					type: 'array',
					description:
						'Populated when this album item was a photo. Available sizes of the sent photo.',
					items: {
						type: 'object',
						description: 'A single available resolution of the sent photo.',
						properties: {
							file_id: {
								type: 'string',
								description:
									'Identifier for this file, usable to download or reuse the file.',
							},
							file_unique_id: {
								type: 'string',
								description:
									'Unique identifier for this file, consistent over time and across bots.',
							},
							width: { type: 'number', description: 'Photo width.' },
							height: { type: 'number', description: 'Photo height.' },
							file_size: { type: 'number', description: 'File size in bytes.' },
						},
						required: [],
					},
				},
				video: {
					type: 'object',
					description:
						'Populated when this album item was a video. Information about the sent video file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						thumbnail: {
							type: 'object',
							description: 'Video thumbnail, auto-generated by Telegram server-side.',
							properties: {
								file_id: {
									type: 'string',
									description:
										'Identifier for this file, usable to download or reuse the file.',
								},
								file_unique_id: {
									type: 'string',
									description:
										'Unique identifier for this file, consistent over time and across bots.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				caption: {
					type: 'string',
					description:
						'Caption for this item, if any (only present on one item of the album).',
				},
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						description: 'A single special entity that appears in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				show_caption_above_media: {
					type: 'boolean',
					description:
						'True if the caption is shown above the media instead of below it.',
				},
				has_media_spoiler: {
					type: 'boolean',
					description: "True if this item's media is covered by a spoiler animation.",
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendMessage',
		label: 'Send a text message',
		description: 'Sends a text message to a Telegram chat.',
		context:
			'---\nname: sendMessage\ndescription: Sends a text message to a Telegram chat.\n---\n\nSends a text message via the Bot API [`sendMessage`](https://core.telegram.org/bots/api#sendmessage) method. Use Parse Mode to enable Markdown or HTML formatting in the text. To reply to another message, set Reply to Message ID.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				text: {
					type: 'string',
					description:
						'Text of the message to send, 1-4096 characters after entities parsing.',
					minimum: 1,
					maximum: 4096,
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups only.',
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the message text. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. iOS users will not receive a notification, Android users will receive a notification with no sound.',
				},
				disable_web_page_preview: {
					type: 'boolean',
					description: 'Disable link previews for links in this message.',
					'x-advanced': true,
				},
				reply_to_message_id: {
					type: 'number',
					description: 'If the message is a reply, the ID of the original message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'text'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				text: { type: 'string', description: 'The actual UTF-8 text of the message.' },
				entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the text, automatically detected from Parse Mode.',
					items: {
						type: 'object',
						description: 'A single special entity in the message text.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				link_preview_options: {
					type: 'object',
					description:
						'Options used for link preview generation for the message, present if it is a text message and link preview options were set or changed. Automatically reflects the legacy Disable Link Previews flag.',
					properties: {
						is_disabled: {
							type: 'boolean',
							description: 'True if the link preview is disabled.',
						},
						url: {
							type: 'string',
							description:
								'URL used for the link preview. If empty, the first URL found in the message text was used.',
						},
						prefer_small_media: {
							type: 'boolean',
							description: 'True if the media in the link preview is shrunk.',
						},
						prefer_large_media: {
							type: 'boolean',
							description: 'True if the media in the link preview is enlarged.',
						},
						show_above_text: {
							type: 'boolean',
							description:
								'True if the link preview is shown above the message text; otherwise it is shown below the text.',
						},
					},
					required: [],
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendPhoto',
		label: 'Send a photo',
		description: 'Sends a photo to a Telegram chat.',
		context:
			"---\nname: sendPhoto\ndescription: Sends a photo to a Telegram chat.\n---\n\nCalls the Bot API [`sendPhoto`](https://core.telegram.org/bots/api#sendphoto) method to send a photo to a Telegram chat. The photo must be at most 10 MB. The photo's width and height must not exceed 10000 in total, and the width and height ratio must be at most 20.\n",
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				caption: {
					type: 'string',
					description: 'Photo caption, 0-1024 characters after entities parsing.',
				},
				sendType: {
					type: 'string',
					description: 'Select if to send by HTTP URL or by file ID.',
					enum: ['send_byurl', 'send_byid'],
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				reply_to_message_id: {
					type: 'number',
					description:
						'If the message is a reply, unique identifier of the original message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'sendType'],
			allOf: [
				{
					if: { properties: { sendType: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							httpUrl: {
								type: 'string',
								description:
									'Pass a URL to get a photo from the Internet and send it.',
							},
						},
						required: ['httpUrl'],
					},
				},
				{
					if: { properties: { sendType: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							fileId: {
								type: 'string',
								description:
									'Pass a file ID to send a photo that exists on the Telegram servers.',
							},
						},
						required: ['fileId'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				photo: {
					type: 'array',
					description: 'Available sizes of the sent photo.',
					items: {
						type: 'object',
						properties: {
							file_id: {
								type: 'string',
								description:
									'Identifier for this file, usable to download or reuse the file.',
							},
							file_unique_id: {
								type: 'string',
								description:
									'Unique identifier for this file, consistent over time and across bots. Cannot be used to download or reuse the file.',
							},
							width: { type: 'number', description: 'Photo width.' },
							height: { type: 'number', description: 'Photo height.' },
							file_size: { type: 'number', description: 'File size in bytes.' },
						},
						required: [],
					},
				},
				caption: { type: 'string', description: 'Caption for the photo, if any.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				show_caption_above_media: {
					type: 'boolean',
					description:
						'True if the caption is shown above the photo instead of below it.',
				},
				has_media_spoiler: {
					type: 'boolean',
					description: 'True if the photo is covered by a spoiler animation.',
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendSticker',
		label: 'Send a sticker',
		description: 'Sends a static, animated, or video sticker to a Telegram chat.',
		context:
			"---\nname: sendSticker\ndescription: Sends a static, animated, or video sticker to a Telegram chat.\n---\n\nCalls the Bot API [`sendSticker`](https://core.telegram.org/bots/api#sendsticker) method to send a static `.WEBP`, animated `.TGS`, or video `.WEBM` sticker to a Telegram chat. Video and animated stickers can't be sent via an HTTP URL.\n",
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				sendType: {
					type: 'string',
					description: 'Select if to send by HTTP URL or by file ID.',
					enum: ['send_byurl', 'send_byid'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				reply_to_message_id: {
					type: 'number',
					description:
						'If the message is a reply, unique identifier of the original message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'sendType'],
			allOf: [
				{
					if: { properties: { sendType: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							httpUrl: {
								type: 'string',
								description:
									"Pass a URL for Telegram to get a `.WEBP` sticker from the Internet. Video and animated stickers can't be sent via an HTTP URL.",
							},
						},
						required: ['httpUrl'],
					},
				},
				{
					if: { properties: { sendType: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							fileId: {
								type: 'string',
								description:
									'Pass a file ID to send a sticker that exists on the Telegram servers.',
							},
						},
						required: ['fileId'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				sticker: {
					type: 'object',
					description: 'Information about the sent sticker.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						type: {
							type: 'string',
							description:
								'Type of the sticker: `regular`, `mask`, or `custom_emoji`.',
						},
						width: { type: 'number', description: 'Sticker width.' },
						height: { type: 'number', description: 'Sticker height.' },
						is_animated: {
							type: 'boolean',
							description: 'True if the sticker is animated.',
						},
						is_video: {
							type: 'boolean',
							description: 'True if the sticker is a video sticker.',
						},
						thumbnail: {
							type: 'object',
							description: 'Sticker thumbnail in `.WEBP` or `.JPG` format.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						emoji: {
							type: 'string',
							description: 'Emoji associated with the sticker.',
						},
						set_name: {
							type: 'string',
							description: 'Name of the sticker set the sticker belongs to.',
						},
						mask_position: {
							type: 'object',
							description:
								'For mask stickers, the position where the mask should be placed on faces.',
							properties: {
								point: {
									type: 'string',
									description:
										'The part of the face relative to which the mask should be placed: `forehead`, `eyes`, `mouth`, or `chin`.',
								},
								x_shift: {
									type: 'number',
									description:
										'Shift by X-axis, measured in widths of the mask scaled to the face size.',
								},
								y_shift: {
									type: 'number',
									description:
										'Shift by Y-axis, measured in heights of the mask scaled to the face size.',
								},
								scale: { type: 'number', description: 'Mask scaling coefficient.' },
							},
							required: [],
						},
						custom_emoji_id: {
							type: 'string',
							description:
								'For custom emoji stickers, the unique identifier of the custom emoji.',
						},
						needs_repainting: {
							type: 'boolean',
							description:
								'True if the sticker must be repainted to a contextual color (Premium badge color, chat photo color, etc.).',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendVideo',
		label: 'Send a video',
		description: 'Sends a video to a Telegram chat.',
		context:
			'---\nname: sendVideo\ndescription: Sends a video to a Telegram chat.\n---\n\nCalls the Bot API [`sendVideo`](https://core.telegram.org/bots/api#sendvideo) method to send a video to a Telegram chat. Telegram clients support MPEG4 videos; other formats may be sent as a document. Bots can send video files up to 50 MB.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				caption: {
					type: 'string',
					description: 'Video caption, 0-1024 characters after entities parsing.',
				},
				sendType: {
					type: 'string',
					description: 'Select if to send by HTTP URL or by file ID.',
					enum: ['send_byurl', 'send_byid'],
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				duration: {
					type: 'number',
					description: 'Duration of the video in seconds.',
					'x-advanced': true,
				},
				width: { type: 'number', description: 'Video width.', 'x-advanced': true },
				height: { type: 'number', description: 'Video height.', 'x-advanced': true },
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'sendType'],
			allOf: [
				{
					if: { properties: { sendType: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							httpUrl: {
								type: 'string',
								description:
									'Pass a URL to get a video from the Internet and send it.',
							},
						},
						required: ['httpUrl'],
					},
				},
				{
					if: { properties: { sendType: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							fileId: {
								type: 'string',
								description:
									'Pass a file ID to send a video that exists on the Telegram servers.',
							},
						},
						required: ['fileId'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				is_topic_message: {
					type: 'boolean',
					description:
						'True if the message was sent to a topic in a forum supergroup or a private chat with the bot.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				video: {
					type: 'object',
					description: 'Information about the sent video file.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						width: {
							type: 'number',
							description: 'Video width as defined by the sender.',
						},
						height: {
							type: 'number',
							description: 'Video height as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						thumbnail: {
							type: 'object',
							description: 'Video thumbnail, auto-generated by Telegram server-side.',
							properties: {
								file_id: {
									type: 'string',
									description: 'Identifier for this file.',
								},
								file_unique_id: {
									type: 'string',
									description: 'Unique identifier for this file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						cover: {
							type: 'array',
							description:
								'Available sizes of the cover of the video in the message.',
							items: {
								type: 'object',
								description: 'A single available resolution of the cover image.',
								properties: {
									file_id: {
										type: 'string',
										description: 'Identifier for this file.',
									},
									file_unique_id: {
										type: 'string',
										description: 'Unique identifier for this file.',
									},
									width: { type: 'number', description: 'Photo width.' },
									height: { type: 'number', description: 'Photo height.' },
									file_size: {
										type: 'number',
										description: 'File size in bytes.',
									},
								},
								required: [],
							},
						},
						start_timestamp: {
							type: 'number',
							description:
								'Timestamp in seconds from which the video will play in the message.',
						},
						file_name: {
							type: 'string',
							description: 'Original filename as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				caption: { type: 'string', description: 'Caption for the video, if any.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						description: 'A single special entity that appears in the caption.',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				show_caption_above_media: {
					type: 'boolean',
					description:
						'True if the caption is shown above the video instead of below it.',
				},
				has_media_spoiler: {
					type: 'boolean',
					description: 'True if the video is covered by a spoiler animation.',
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendVideoNote',
		label: 'Send a video note',
		description: 'Sends a rounded square video message to a Telegram chat.',
		context:
			'---\nname: sendVideoNote\ndescription: Sends a rounded square video message to a Telegram chat.\n---\n\nSends a rounded square video note via the Bot API [`sendVideoNote`](https://core.telegram.org/bots/api#sendvideonote) method. Fields match the `SendVideoNote` module.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@channelusername`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of the forum. For forum supergroups only.',
				},
				video_note: {
					type: 'string',
					description:
						'File ID of a video note that already exists on Telegram servers. Sending by HTTP URL is not supported for this method, and this endpoint does not support raw file uploads.',
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. iOS users will not receive a notification; Android users will receive a notification with no sound.',
				},
				length: {
					type: 'number',
					description: 'Video width and height (diameter of the video message).',
					'x-advanced': true,
				},
				duration: {
					type: 'number',
					description: 'Duration of the sent video in seconds.',
					'x-advanced': true,
				},
				reply_to_message_id: {
					type: 'number',
					description: 'If the message is a reply, the ID of the original message.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'video_note'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				is_topic_message: {
					type: 'boolean',
					description:
						'True if the message was sent to a topic in a forum supergroup or a private chat with the bot.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				video_note: {
					type: 'object',
					description: 'Information about the sent video note.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots. Cannot be used to download or reuse the file.',
						},
						length: {
							type: 'number',
							description:
								'Video width and height (diameter of the video message) as defined by the sender.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the video in seconds as defined by the sender.',
						},
						thumbnail: {
							type: 'object',
							description: 'Video thumbnail.',
							properties: {
								file_id: {
									type: 'string',
									description:
										'Identifier for this file, usable to download or reuse the file.',
								},
								file_unique_id: {
									type: 'string',
									description:
										'Unique identifier for this file, consistent over time and across bots. Cannot be used to download or reuse the file.',
								},
								width: { type: 'number', description: 'Thumbnail width.' },
								height: { type: 'number', description: 'Thumbnail height.' },
								file_size: { type: 'number', description: 'File size in bytes.' },
							},
							required: [],
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								description:
									'A single row of buttons displayed in the inline keyboard.',
								items: {
									type: 'object',
									description: 'A single inline keyboard button within the row.',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'sendVoice',
		label: 'Send a voice message',
		description: 'Sends a voice message to a Telegram chat.',
		context:
			'---\nname: sendVoice\ndescription: Sends a voice message to a Telegram chat.\n---\n\nCalls the Bot API [`sendVoice`](https://core.telegram.org/bots/api#sendvoice) method to send an audio file displayed as a playable voice message. The file should be `.OGG` encoded with OPUS, `.MP3`, or `.M4A`. Other formats may be sent as audio or a document. Bots can send voice messages up to 50 MB.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel/supergroup/bot in the format `@username`.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier for the target message thread (topic) of a forum. Applies to forum supergroups and private chats of bots with forum topic mode enabled only.',
				},
				caption: {
					type: 'string',
					description: 'Voice message caption, 0-1024 characters after entities parsing.',
				},
				sendType: {
					type: 'string',
					description: 'Select if to send by HTTP URL or by file ID.',
					enum: ['send_byurl', 'send_byid'],
				},
				parse_mode: {
					type: 'string',
					description:
						'Mode for parsing entities (bold, italic, links, etc.) in the caption. Leave empty for plain text.',
					default: '',
					enum: ['', 'Markdown', 'HTML'],
				},
				disable_notification: {
					type: 'boolean',
					description:
						'Send the message silently. Users will receive a notification with no sound.',
				},
				duration: {
					type: 'number',
					description: 'Duration of the voice message in seconds.',
					'x-advanced': true,
				},
				reply_markup: {
					type: 'string',
					description:
						'A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard, or to force a reply from the user. Example inline keyboard: `{"inline_keyboard":[[{"text":"Open","url":"https://example.com"}]]}`.',
					'x-advanced': true,
				},
			},
			required: ['chat_id', 'sendType'],
			allOf: [
				{
					if: { properties: { sendType: { const: 'send_byurl' } } },
					then: {
						type: 'object',
						properties: {
							httpUrl: {
								type: 'string',
								description:
									'Pass a URL to get a voice message from the Internet and send it.',
							},
						},
						required: ['httpUrl'],
					},
				},
				{
					if: { properties: { sendType: { const: 'send_byid' } } },
					then: {
						type: 'object',
						properties: {
							fileId: {
								type: 'string',
								description:
									'Pass a file ID to send a voice message that exists on the Telegram servers.',
							},
						},
						required: ['fileId'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				message_id: {
					type: 'number',
					description: 'Unique identifier of the sent message inside this chat.',
				},
				message_thread_id: {
					type: 'number',
					description:
						'Unique identifier of the forum topic the message belongs to, if any.',
				},
				business_connection_id: {
					type: 'string',
					description:
						'Unique identifier of the business connection the message was sent from, if any.',
				},
				date: { type: 'number', description: 'Date the message was sent, in Unix time.' },
				chat: {
					type: 'object',
					description: 'The chat the message belongs to.',
					properties: {
						id: { type: 'number', description: 'Unique identifier for this chat.' },
						type: {
							type: 'string',
							description:
								'Type of chat: `private`, `group`, `supergroup`, or `channel`.',
						},
						username: {
							type: 'string',
							description:
								'Username, for private chats, supergroups, and channels, if available.',
						},
						first_name: {
							type: 'string',
							description: 'First name of the other party in a private chat.',
						},
						last_name: {
							type: 'string',
							description: 'Last name of the other party in a private chat.',
						},
						is_forum: {
							type: 'boolean',
							description:
								'True if the supergroup chat is a forum (has topics enabled).',
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The bot that sent the message.',
					properties: {
						id: {
							type: 'number',
							description: 'Unique identifier for this user or bot.',
						},
						is_bot: { type: 'boolean', description: 'True if this user is a bot.' },
						first_name: { type: 'string', description: "User's or bot's first name." },
						last_name: { type: 'string', description: "User's or bot's last name." },
						username: { type: 'string', description: "User's or bot's username." },
						language_code: {
							type: 'string',
							description: "IETF language tag of the user's language.",
						},
					},
					required: [],
				},
				voice: {
					type: 'object',
					description: 'Information about the sent voice message.',
					properties: {
						file_id: {
							type: 'string',
							description:
								'Identifier for this file, usable to download or reuse the file.',
						},
						file_unique_id: {
							type: 'string',
							description:
								'Unique identifier for this file, consistent over time and across bots.',
						},
						duration: {
							type: 'number',
							description:
								'Duration of the audio in seconds as defined by the sender.',
						},
						mime_type: {
							type: 'string',
							description: 'MIME type of the file as defined by the sender.',
						},
						file_size: { type: 'number', description: 'File size in bytes.' },
					},
					required: [],
				},
				caption: { type: 'string', description: 'Caption for the voice message, if any.' },
				caption_entities: {
					type: 'array',
					description:
						'Special entities like usernames, URLs, or bot commands that appear in the caption.',
					items: {
						type: 'object',
						properties: {
							type: { type: 'string', description: 'Type of the entity.' },
							offset: {
								type: 'number',
								description:
									'Offset in UTF-16 code units to the start of the entity.',
							},
							length: {
								type: 'number',
								description: 'Length of the entity in UTF-16 code units.',
							},
							url: {
								type: 'string',
								description:
									'For `text_link` entities only, the URL opened when the user taps the text.',
							},
							custom_emoji_id: {
								type: 'string',
								description:
									'For `custom_emoji` entities only, the unique identifier of the custom emoji.',
							},
						},
						required: [],
					},
				},
				has_protected_content: {
					type: 'boolean',
					description: "True if the message can't be forwarded.",
				},
				effect_id: {
					type: 'string',
					description:
						'Unique identifier of the message effect added to the message, if any.',
				},
				reply_markup: {
					type: 'object',
					description: 'Inline keyboard attached to the message, if any.',
					properties: {
						inline_keyboard: {
							type: 'array',
							description: 'Array of button rows, each an array of buttons.',
							items: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description: 'Label text on the button.',
										},
										url: {
											type: 'string',
											description:
												'HTTP or `tg://` URL opened when the button is pressed.',
										},
										callback_data: {
											type: 'string',
											description:
												'Data sent in a callback query when the button is pressed.',
										},
										pay: {
											type: 'boolean',
											description: 'True if this is a Pay button.',
										},
									},
									required: [],
								},
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'telegram',
		appVersion: 1,
		endpointName: 'unpinChatMessage',
		label: 'Unpin a chat message',
		description: 'Removes a message from the list of pinned messages in a chat.',
		context:
			'---\nname: unpinChatMessage\ndescription: Removes a message from the list of pinned messages in a chat.\n---\n\nUnpins a message via the Bot API [`unpinChatMessage`](https://core.telegram.org/bots/api#unpinchatmessage) method. In private chats and channel direct messages chats, all messages can be unpinned. In groups and channels, the bot must be an administrator with the `can_pin_messages` right (groups) or the `can_edit_messages` right (channels). If Message ID is not specified, the most recent pinned message is unpinned.\n',
		accounts: { telegram: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				chat_id: {
					type: 'string',
					description:
						'Unique identifier for the target chat, or username of the target channel in the format `@username`.',
				},
				message_id: {
					type: 'number',
					description:
						'Identifier of the message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.',
				},
			},
			required: ['chat_id'],
		},
		outputSchema: {
			type: 'object',
			properties: { result: { type: 'boolean', description: 'True on success.' } },
			required: [],
		},
	},
];
