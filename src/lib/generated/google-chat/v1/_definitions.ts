// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route. It forwards an arbitrary call (method, path, query string, headers and body) to the Google Chat API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://chat.googleapis.com/`. Provide the remaining path in the URL parameter (for example, `v1/spaces`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for available endpoints, required parameters, and response schemas.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
						'Enter the part of the URL that comes after `https://chat.googleapis.com/`. For example, `v1/spaces`.',
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
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'createMessage',
		label: 'Create a message',
		description: 'Creates a message in a space.',
		context:
			'---\nname: createMessage\ndescription: Creates a message in a space.\n---\n\nCreates a message in a Google Chat space. Provide the space resource name in `parent`, in the form `spaces/{space}`; use `listSpaces` to look up space names.\n\nA message can contain plain `text`, one or more `cardsV2`, or both. By default every message starts a new thread, and `thread.threadKey` and `thread.name` are ignored. To post into an existing thread, set `messageReplyOption` to `REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD` or `REPLY_MESSAGE_OR_FAIL` and identify the thread with `thread.threadKey` (for threads created with that key) or `thread.name` (for threads created by a person or another Chat app). With `REPLY_MESSAGE_OR_FAIL`, a new `thread.threadKey` creates a new thread, and a failed request returns a `NOT_FOUND` error instead of starting a new thread. Threading is only supported in named spaces. To make the request idempotent, set `requestId` to a unique value: repeating the request with the same ID returns the original message instead of creating a duplicate. To give the message a custom ID that you can use later to get, update or delete it, set `messageId` (it must start with `client-`); it is returned in `clientAssignedMessageId`.\n\nIn `cardsV2`, the card `header` and the section settings (`header`, `collapsible` and `uncollapsibleWidgetsCount`) are typed inputs, but each item of `sections[].widgets` is a free-form JSON object with a single widget key, for example `{"textParagraph": {"text": "Hello"}}`. Any widget supported by Google Chat can be used (`textParagraph`, `image`, `decoratedText`, `buttonList`, `textInput`, `selectionInput`, `dateTimePicker`, `divider`, `grid`, `columns`, `chipList`, `carousel`). See the [Google Chat cards reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) for the structure of each widget. A widget item can also contain `horizontalAlignment`.\n\nEmpty values are removed from the request body before it is sent: empty strings, `null`, empty arrays and empty objects are dropped, both in the typed card fields and inside the widget JSON. The only empty object that is kept is `divider`, so `{"divider": {}}` works. Values such as `false` and `0` are kept.\n\nOther Google Chat message fields such as `accessoryWidgets`, `privateMessageViewer`, `markupSyntax` and attachments are not exposed by this endpoint, because the Create a message module does not support them either.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
				parent: {
					type: 'string',
					description:
						'The resource name of the space in which to create the message, in the form `spaces/{space}`. You can get the space ID from the response of the List spaces endpoint.',
				},
				text: {
					type: 'string',
					description:
						'Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/workspace/chat/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/workspace/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a message](https://developers.google.com/workspace/chat/create-messages).',
				},
				cardsV2: {
					type: 'array',
					description:
						"An array of [cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards). Chat apps can create cards with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). As part of the [Developer Preview Program](https://developers.google.com/workspace/preview), if your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication. To learn how to create a message that contains cards, see [Send a message](https://developers.google.com/workspace/chat/create-messages).",
					items: {
						type: 'object',
						description: 'A card message item, with a card ID and the card itself.',
						properties: {
							cardId: {
								type: 'string',
								description:
									'Required if the message contains multiple cards. A unique identifier for a card in a message.',
							},
							card: {
								type: 'object',
								description: 'A card. Maximum size is 32 KB.',
								properties: {
									header: {
										type: 'object',
										description:
											'The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.',
										properties: {
											subtitle: {
												type: 'string',
												description:
													'The subtitle of the card header. If specified, appears on its own line below the `title`.',
											},
											imageUrl: {
												type: 'string',
												description:
													'The HTTPS URL of the image in the card header.',
											},
											imageType: {
												type: 'string',
												description: 'The shape used to crop the image.',
												default: '',
												enum: ['', 'SQUARE', 'CIRCLE'],
											},
											imageAltText: {
												type: 'string',
												description:
													"The alternative text of this image that's used for accessibility.",
											},
										},
										required: ['title'],
									},
									sections: {
										type: 'array',
										description:
											'Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Define a section of a card](https://developers.google.com/workspace/chat/design-components-card-dialog#define_a_section_of_a_card).',
										items: {
											type: 'object',
											description:
												'A section of the card. Each section has its own optional header and a list of widgets.',
											properties: {
												header: {
													type: 'string',
													description:
														'Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).',
												},
												collapsible: {
													type: 'boolean',
													description:
														'Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.',
												},
												uncollapsibleWidgetsCount: {
													type: 'number',
													description:
														'The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.',
												},
												widgets: {
													type: 'array',
													description:
														'All the widgets in the section. Must contain at least one widget. Each item is a JSON object with exactly one widget key, for example `{"textParagraph": {"text": "Hello"}}` or `{"buttonList": {"buttons": [{"text": "Open", "onClick": {"openLink": {"url": "https://example.com"}}}]}}`. Supported widgets include `textParagraph`, `image`, `decoratedText`, `buttonList`, `textInput`, `selectionInput`, `dateTimePicker`, `divider`, `grid`, `columns`, `chipList` and `carousel`. An item can also contain `horizontalAlignment` (`START`, `CENTER` or `END`). See the [Google Chat cards reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) for the structure of each widget.',
													items: {
														description:
															'One widget of the section, as a JSON object with a single widget key. See the [Google Chat cards reference](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) for the structure of each widget.',
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
						required: [],
					},
				},
				thread: {
					type: 'object',
					description:
						'The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread).',
					properties: {
						name: {
							type: 'string',
							description:
								'Resource name of the thread. Example: `spaces/{space}/threads/{thread}`',
						},
						threadKey: {
							type: 'string',
							description:
								'Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead.',
							maximum: 4000,
						},
					},
					required: [],
				},
				messageReplyOption: {
					type: 'string',
					description:
						'Specifies whether the message starts a thread or replies to one. Only supported in named spaces. Without this option, `thread.threadKey` and `thread.name` are ignored and the message always starts a new thread. Use `REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD` to reply to the thread identified by `thread.threadKey` or `thread.name`, and start a new thread if it fails. Use `REPLY_MESSAGE_OR_FAIL` to reply to that thread, create a new thread if the `thread.threadKey` is new, and return a `NOT_FOUND` error if the message creation fails.',
					default: '',
					enum: [
						'',
						'MESSAGE_REPLY_OPTION_UNSPECIFIED',
						'REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD',
						'REPLY_MESSAGE_OR_FAIL',
					],
				},
				fallbackText: {
					type: 'string',
					description:
						"A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.",
				},
				actionResponse: {
					type: 'object',
					description:
						'Parameters that a Chat app can use to configure how its response is posted.',
					properties: {
						type: {
							type: 'string',
							description: 'The type of Chat app response.',
							default: '',
							enum: [
								'',
								'TYPE_UNSPECIFIED',
								'NEW_MESSAGE',
								'UPDATE_MESSAGE',
								'UPDATE_USER_MESSAGE_CARDS',
								'REQUEST_CONFIG',
								'DIALOG',
								'UPDATE_WIDGET',
							],
						},
						url: {
							type: 'string',
							description:
								'URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.)',
						},
					},
					required: [],
				},
				requestId: {
					type: 'string',
					description:
						'A unique ID for this request. A random UUID is recommended. Specifying a request ID makes the request idempotent, which ensures that multiple identical requests with the same request ID result in only a single message being created. Subsequent requests with the same request ID return the existing message and do not update the message, even if the requested details differ from the current state. To use this field effectively: - Ensure that subsequent requests are identical and use the same authentication credentials as the original request. - If a message was already created with the provided request ID, the request returns that message. Note that the returned message might not be fully populated; the API echoes the message in your request with the system-assigned resource names populated. To retrieve the latest metadata for the message, call `GetMessage`. - Reusing an existing request ID with a different authenticated user results in an error.',
				},
				messageId: {
					type: 'string',
					description:
						"A custom ID for the message. It lets a Chat app get, update or delete the message without storing the system-assigned ID in the message's resource name. The value must begin with `client-` (for example `client-custom-name`), contain up to 63 characters with only lowercase letters, numbers and hyphens, and be unique within the space. A Chat app can't use the same custom ID for different messages. The ID is returned in `clientAssignedMessageId` of the response. See [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).",
					pattern: '^client-[a-z0-9-]+$',
					maximum: 63,
				},
			},
			required: ['parent'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sender: {
					type: 'object',
					description: 'The user who created the message.',
					properties: {
						domainId: {
							type: 'string',
							description: "Unique identifier of the user's Google Workspace domain.",
						},
						email: { type: 'string', description: "The user's email address." },
						displayName: { type: 'string', description: "The user's display name." },
						type: {
							type: 'string',
							description: 'User type.',
							default: '',
							enum: ['', 'TYPE_UNSPECIFIED', 'HUMAN', 'BOT'],
						},
						name: {
							type: 'string',
							description: 'Resource name for a Google Chat user.',
						},
						avatarUrl: { type: 'string', description: "The user's avatar image URL." },
						isAnonymous: {
							type: 'boolean',
							description:
								'When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without…',
						},
					},
					required: [],
				},
				quotedMessageMetadata: {
					type: 'object',
					description: 'Information about a message that another message quotes.',
					properties: {
						lastUpdateTime: {
							type: 'string',
							description:
								'The timestamp when the quoted message was created or when the quoted message was last updated.',
						},
						forwardedMetadata: {
							type: 'object',
							description:
								'Metadata about the source space of the quoted message. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						quoteType: {
							type: 'string',
							description: 'Specifies the quote type.',
							default: '',
							enum: ['', 'QUOTE_TYPE_UNSPECIFIED', 'REPLY', 'FORWARD'],
						},
						quotedMessageSnapshot: {
							type: 'object',
							description:
								"A snapshot of the quoted message's content. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.",
							properties: {},
							required: [],
							additionalProperties: true,
						},
						name: {
							type: 'string',
							description: 'Resource name of the message that is quoted.',
						},
					},
					required: [],
				},
				emojiReactionSummaries: {
					type: 'array',
					description: 'The list of emoji reaction summaries on the message.',
					items: {
						type: 'object',
						description:
							'The number of people who reacted to a message with a specific emoji.',
						properties: {
							emoji: {
								type: 'object',
								description:
									'Emoji associated with the reactions. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							reactionCount: {
								type: 'number',
								description:
									'The total number of reactions using the associated emoji.',
							},
						},
						required: [],
					},
				},
				lastUpdateTime: {
					type: 'string',
					description: 'The time at which the message was last edited by a user.',
				},
				matchedUrl: {
					type: 'object',
					description:
						'A URL in the Chat message `text` field that matches a link preview pattern.',
					properties: {
						url: { type: 'string', description: 'The URL that was matched.' },
					},
					required: [],
				},
				text: { type: 'string', description: 'Plain-text body of the message.' },
				thread: {
					type: 'object',
					description: 'The thread the message belongs to.',
					properties: {
						threadKey: {
							type: 'string',
							description: 'Input for creating or updating a thread.',
						},
						name: { type: 'string', description: 'Resource name of the thread.' },
					},
					required: [],
				},
				createTime: {
					type: 'string',
					description:
						'For spaces created in Chat, the time at which the message was created.',
				},
				space: {
					type: 'object',
					description:
						'If your Chat app authenticates as a user, the output only populates the space `name`.',
					properties: {
						adminInstalled: {
							type: 'boolean',
							description:
								'For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator.',
						},
						permissionSettings: {
							type: 'object',
							description:
								'Space permission settings for existing spaces. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						createTime: {
							type: 'string',
							description:
								'For spaces created in Chat, the time the space was created.',
						},
						customer: {
							type: 'string',
							description: 'The customer id of the domain of the space.',
						},
						spaceType: {
							type: 'string',
							description: 'The type of space.',
							default: '',
							enum: [
								'',
								'SPACE_TYPE_UNSPECIFIED',
								'SPACE',
								'GROUP_CHAT',
								'DIRECT_MESSAGE',
							],
						},
						lastActiveTime: {
							type: 'string',
							description: 'Timestamp of the last message in the space.',
						},
						displayName: { type: 'string', description: "The space's display name." },
						name: { type: 'string', description: 'Resource name of the space.' },
						spaceThreadingState: {
							type: 'string',
							description: 'The threading state in the Chat space.',
							default: '',
							enum: [
								'',
								'SPACE_THREADING_STATE_UNSPECIFIED',
								'THREADED_MESSAGES',
								'GROUPED_MESSAGES',
								'UNTHREADED_MESSAGES',
							],
						},
						externalUserAllowed: {
							type: 'boolean',
							description:
								'Whether this space permits any Google Chat user as a member.',
						},
						accessSettings: {
							type: 'object',
							description:
								'Specifies the access setting of the space. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						membershipCount: {
							type: 'object',
							description:
								'The count of joined memberships grouped by member type. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						importMode: {
							type: 'boolean',
							description:
								'Whether this space is created in `Import Mode` as part of a data migration into Google Workspace.',
						},
						singleUserBotDm: {
							type: 'boolean',
							description:
								'Whether the space is a DM between a Chat app and a single human.',
						},
						importModeExpireTime: {
							type: 'string',
							description:
								'The time when the space will be automatically deleted by the system if it remains in import mode.',
						},
						spaceDetails: {
							type: 'object',
							description:
								'Details about the space including description and rules. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						spaceHistoryState: {
							type: 'string',
							description:
								'The message history state for messages and threads in this space.',
							default: '',
							enum: ['', 'HISTORY_STATE_UNSPECIFIED', 'HISTORY_OFF', 'HISTORY_ON'],
						},
						spaceUri: {
							type: 'string',
							description: 'The URI for a user to access the space.',
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'Resource name of the message.' },
				privateMessageViewer: {
					type: 'object',
					description: 'Input for creating a message, otherwise output only.',
					properties: {
						domainId: {
							type: 'string',
							description: "Unique identifier of the user's Google Workspace domain.",
						},
						email: { type: 'string', description: "The user's email address." },
						displayName: { type: 'string', description: "The user's display name." },
						type: {
							type: 'string',
							description: 'User type.',
							default: '',
							enum: ['', 'TYPE_UNSPECIFIED', 'HUMAN', 'BOT'],
						},
						name: {
							type: 'string',
							description: 'Resource name for a Google Chat user.',
						},
						avatarUrl: { type: 'string', description: "The user's avatar image URL." },
						isAnonymous: {
							type: 'boolean',
							description:
								'When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without…',
						},
					},
					required: [],
				},
				threadReply: {
					type: 'boolean',
					description: 'When `true`, the message is a response in a reply thread.',
				},
				attachedGifs: {
					type: 'array',
					description: 'GIF images that are attached to the message.',
					items: {
						type: 'object',
						description: "A GIF image that's specified by a URL.",
						properties: {
							uri: {
								type: 'string',
								description: 'The URL that hosts the GIF image.',
							},
						},
						required: [],
					},
				},
				clientAssignedMessageId: {
					type: 'string',
					description: 'A custom ID for the message.',
				},
				argumentText: {
					type: 'string',
					description:
						'Plain-text body of the message with all Chat app mentions stripped out.',
				},
				silent: { type: 'boolean', description: 'Whether this is a silent message.' },
				formattedText: {
					type: 'string',
					description:
						'Contains the message `text` with markups added to communicate formatting.',
				},
				attachment: {
					type: 'array',
					description: 'User-uploaded attachment.',
					items: {
						type: 'object',
						description: 'An attachment in Google Chat.',
						properties: {
							contentType: {
								type: 'string',
								description: 'The content type (MIME type) of the file.',
							},
							thumbnailUri: {
								type: 'string',
								description:
									'The thumbnail URL which should be used to preview the attachment to a human user.',
							},
							driveDataRef: {
								type: 'object',
								description:
									'A reference to the Google Drive attachment. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							downloadUri: {
								type: 'string',
								description:
									'The download URL which should be used to allow a human user to download the attachment.',
							},
							source: {
								type: 'string',
								description: 'The source of the attachment.',
								default: '',
								enum: ['', 'SOURCE_UNSPECIFIED', 'DRIVE_FILE', 'UPLOADED_CONTENT'],
							},
							name: {
								type: 'string',
								description: 'Resource name of the attachment.',
							},
							attachmentDataRef: {
								type: 'object',
								description:
									'A reference to the attachment data. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							contentName: {
								type: 'string',
								description:
									'The original file name for the content, not the full path.',
							},
						},
						required: [],
					},
				},
				fallbackText: {
					type: 'string',
					description:
						"A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile…",
				},
				markupSyntax: {
					type: 'string',
					description:
						'Specifies how the server interprets the message `text` field content.',
					default: '',
					enum: [
						'',
						'MARKUP_SYNTAX_UNSPECIFIED',
						'MARKUP_SYNTAX_CHAT',
						'MARKUP_SYNTAX_MARKDOWN',
					],
				},
				accessoryWidgets: {
					type: 'array',
					description:
						'One or more interactive widgets that appear at the bottom of a message.',
					items: {
						type: 'object',
						description:
							'One or more interactive widgets that appear at the bottom of a message.',
						properties: {
							buttonList: {
								type: 'object',
								description:
									'A list of buttons. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				slashCommand: {
					type: 'object',
					description: 'Slash command information, if applicable.',
					properties: {
						commandId: { type: 'string', description: 'The ID of the slash command.' },
					},
					required: [],
				},
				deleteTime: {
					type: 'string',
					description: 'The time at which the message was deleted in Google Chat.',
				},
				deletionMetadata: {
					type: 'object',
					description: 'Information about a deleted message.',
					properties: {
						deletionType: {
							type: 'string',
							description: 'Indicates who deleted the message.',
							default: '',
							enum: [
								'',
								'DELETION_TYPE_UNSPECIFIED',
								'CREATOR',
								'SPACE_OWNER',
								'ADMIN',
								'APP_MESSAGE_EXPIRY',
								'CREATOR_VIA_APP',
								'SPACE_OWNER_VIA_APP',
								'SPACE_MEMBER',
							],
						},
					},
					required: [],
				},
				cardsV2: {
					type: 'array',
					description: 'An array of cards.',
					items: {
						type: 'object',
						description: 'A card in a Google Chat message.',
						properties: {
							card: {
								type: 'object',
								description: 'A card.',
								properties: {
									peekCardHeader: {
										type: 'object',
										description:
											'When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward… The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									sections: {
										type: 'array',
										description: 'Contains a collection of widgets.',
										items: {
											type: 'object',
											description:
												"A section contains a collection of widgets that are rendered vertically in the order that they're specified.",
											properties: {
												widgets: {
													type: 'array',
													description: 'All the widgets in the section.',
													items: {
														type: 'object',
														description:
															'Each card is made up of widgets.',
														properties: {
															grid: {
																type: 'object',
																description:
																	'Displays a grid with a collection of items. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															divider: {
																type: 'object',
																description:
																	'Displays a horizontal line divider between widgets.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															buttonList: {
																type: 'object',
																description:
																	'A list of buttons. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															chipList: {
																type: 'object',
																description:
																	'A list of chips. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															eventActions: {
																type: 'array',
																description:
																	'Specifies the event actions that can be performed on the widget.',
																items: {
																	type: 'object',
																	description:
																		'Represents an actionthat can be performed on an ui element. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
															},
															textInput: {
																type: 'object',
																description:
																	'Displays a text box that users can type into. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															selectionInput: {
																type: 'object',
																description:
																	'Displays a selection control that lets users select items. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															carousel: {
																type: 'object',
																description:
																	'A carousel contains a collection of nested widgets. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															horizontalAlignment: {
																type: 'string',
																description:
																	'Specifies whether widgets align to the left, right, or center of a column.',
																default: '',
																enum: [
																	'',
																	'HORIZONTAL_ALIGNMENT_UNSPECIFIED',
																	'START',
																	'CENTER',
																	'END',
																],
															},
															image: {
																type: 'object',
																description: 'Displays an image.',
																properties: {
																	onClick: {
																		type: 'object',
																		description:
																			'When a user clicks the image, the click triggers this action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	altText: {
																		type: 'string',
																		description:
																			"The alternative text of this image that's used for accessibility.",
																	},
																	imageUrl: {
																		type: 'string',
																		description:
																			'The HTTPS URL that hosts the image.',
																	},
																},
																required: [],
															},
															columns: {
																type: 'object',
																description:
																	'Displays up to 2 columns. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															dateTimePicker: {
																type: 'object',
																description:
																	'Displays a widget that lets users input a date, time, or date and time. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															visibility: {
																type: 'string',
																description:
																	'Specifies whether the widget is visible or hidden.',
																default: '',
																enum: [
																	'',
																	'VISIBILITY_UNSPECIFIED',
																	'VISIBLE',
																	'HIDDEN',
																],
															},
															decoratedText: {
																type: 'object',
																description:
																	'Displays a decorated text item.',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'The primary text.',
																	},
																	endIcon: {
																		type: 'object',
																		description:
																			'An icon displayed after the text. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	topLabel: {
																		type: 'string',
																		description:
																			'The text that appears above `text`.',
																	},
																	button: {
																		type: 'object',
																		description:
																			'A button that a user can click to trigger an action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	startIconVerticalAlignment: {
																		type: 'string',
																		description:
																			'Vertical alignment of the start icon.',
																		default: '',
																		enum: [
																			'',
																			'VERTICAL_ALIGNMENT_UNSPECIFIED',
																			'TOP',
																			'MIDDLE',
																			'BOTTOM',
																		],
																	},
																	onClick: {
																		type: 'object',
																		description:
																			'This action is triggered when users click `topLabel` or `bottomLabel`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	bottomLabel: {
																		type: 'string',
																		description:
																			'The text that appears below `text`.',
																	},
																	contentText: {
																		type: 'object',
																		description:
																			'`TextParagraph` equivalent of `text`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	wrapText: {
																		type: 'boolean',
																		description:
																			'The wrap text setting.',
																	},
																	bottomLabelText: {
																		type: 'object',
																		description:
																			'`TextParagraph` equivalent of `bottom_label`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	topLabelText: {
																		type: 'object',
																		description:
																			'`TextParagraph` equivalent of `top_label`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	switchControl: {
																		type: 'object',
																		description:
																			'A switch widget that a user can click to change its state and trigger an action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	startIcon: {
																		type: 'object',
																		description:
																			'The icon displayed in front of the text. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																},
																required: [],
															},
															textParagraph: {
																type: 'object',
																description:
																	'Displays a text paragraph.',
																properties: {
																	textSyntax: {
																		type: 'string',
																		description:
																			'The syntax of the text.',
																		default: '',
																		enum: [
																			'',
																			'TEXT_SYNTAX_UNSPECIFIED',
																			'HTML',
																			'MARKDOWN',
																		],
																	},
																	maxLines: {
																		type: 'number',
																		description:
																			'The maximum number of lines of text that are displayed in the widget.',
																	},
																	text: {
																		type: 'string',
																		description:
																			"The text that's shown in the widget.",
																	},
																},
																required: [],
															},
															id: {
																type: 'string',
																description:
																	"A unique ID assigned to the widget that's used to identify the widget to be mutated.",
															},
														},
														required: [],
													},
												},
												collapsible: {
													type: 'boolean',
													description:
														'Indicates whether this section is collapsible.',
												},
												uncollapsibleWidgetsCount: {
													type: 'number',
													description:
														'The number of uncollapsible widgets which remain visible even when a section is collapsed.',
												},
												header: {
													type: 'string',
													description:
														'Text that appears at the top of a section.',
												},
												id: {
													type: 'string',
													description:
														"A unique ID assigned to the section that's used to identify the section to be mutated.",
												},
												collapseControl: {
													type: 'object',
													description:
														'Define the expand and collapse button of the section.',
													properties: {
														collapseButton: {
															type: 'object',
															description:
																'Define a customizable button to collapse the section.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'The type of a button.',
																	default: '',
																	enum: [
																		'',
																		'TYPE_UNSPECIFIED',
																		'OUTLINED',
																		'FILLED',
																		'FILLED_TONAL',
																		'BORDERLESS',
																	],
																},
																icon: {
																	type: 'object',
																	description:
																		'An icon displayed inside the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																onClick: {
																	type: 'object',
																	description:
																		'The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																color: {
																	type: 'object',
																	description:
																		'The color of the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																text: {
																	type: 'string',
																	description:
																		'The text displayed inside the button.',
																},
																altText: {
																	type: 'string',
																	description:
																		"The alternative text that's used for accessibility.",
																},
																disabled: {
																	type: 'boolean',
																	description:
																		"If `true`, the button is displayed in an inactive state and doesn't respond to user actions.",
																},
															},
															required: [],
														},
														expandButton: {
															type: 'object',
															description:
																'Define a customizable button to expand the section.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'The type of a button.',
																	default: '',
																	enum: [
																		'',
																		'TYPE_UNSPECIFIED',
																		'OUTLINED',
																		'FILLED',
																		'FILLED_TONAL',
																		'BORDERLESS',
																	],
																},
																icon: {
																	type: 'object',
																	description:
																		'An icon displayed inside the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																onClick: {
																	type: 'object',
																	description:
																		'The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																color: {
																	type: 'object',
																	description:
																		'The color of the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																text: {
																	type: 'string',
																	description:
																		'The text displayed inside the button.',
																},
																altText: {
																	type: 'string',
																	description:
																		"The alternative text that's used for accessibility.",
																},
																disabled: {
																	type: 'boolean',
																	description:
																		"If `true`, the button is displayed in an inactive state and doesn't respond to user actions.",
																},
															},
															required: [],
														},
														horizontalAlignment: {
															type: 'string',
															description:
																'The horizontal alignment of the expand and collapse button.',
															default: '',
															enum: [
																'',
																'HORIZONTAL_ALIGNMENT_UNSPECIFIED',
																'START',
																'CENTER',
																'END',
															],
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									cardActions: {
										type: 'array',
										description: "The card's actions.",
										items: {
											type: 'object',
											description:
												'A card action is the action associated with the card. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									expressionData: {
										type: 'array',
										description: 'The expression data for the card.',
										items: {
											type: 'object',
											description:
												'Represents the data that is used to evaluate an expression. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									header: {
										type: 'object',
										description: 'The header of the card.',
										properties: {
											subtitle: {
												type: 'string',
												description: 'The subtitle of the card header.',
											},
											imageUrl: {
												type: 'string',
												description:
													'The HTTPS URL of the image in the card header.',
											},
											imageAltText: {
												type: 'string',
												description:
													"The alternative text of this image that's used for accessibility.",
											},
											imageType: {
												type: 'string',
												description: 'The shape used to crop the image.',
												default: '',
												enum: ['', 'SQUARE', 'CIRCLE'],
											},
										},
										required: [],
									},
									displayStyle: {
										type: 'string',
										description:
											'In Google Workspace add-ons, sets the display properties of the `peekCardHeader`.',
										default: '',
										enum: ['', 'DISPLAY_STYLE_UNSPECIFIED', 'PEEK', 'REPLACE'],
									},
									sectionDividerStyle: {
										type: 'string',
										description:
											'The divider style between the header, sections and footer.',
										default: '',
										enum: [
											'',
											'DIVIDER_STYLE_UNSPECIFIED',
											'SOLID_DIVIDER',
											'NO_DIVIDER',
										],
									},
									fixedFooter: {
										type: 'object',
										description:
											'The fixed footer shown at the bottom of this card. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									name: { type: 'string', description: 'Name of the card.' },
								},
								required: [],
							},
							cardId: {
								type: 'string',
								description: 'Required if the message contains multiple cards.',
							},
						},
						required: [],
					},
				},
				annotations: {
					type: 'array',
					description:
						'Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace…',
					items: {
						type: 'object',
						description:
							'Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace…',
						properties: {
							startIndex: {
								type: 'number',
								description:
									'Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.',
							},
							customEmojiMetadata: {
								type: 'object',
								description:
									'The metadata for a custom emoji. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							length: {
								type: 'number',
								description:
									'Length of the substring in the plain-text message body this annotation corresponds to.',
							},
							richLinkMetadata: {
								type: 'object',
								description:
									'The metadata for a rich link. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							slashCommand: {
								type: 'object',
								description:
									'The metadata for a slash command. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							userMention: {
								type: 'object',
								description:
									'The metadata of user mention. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							type: {
								type: 'string',
								description: 'The type of this annotation.',
								default: '',
								enum: [
									'',
									'ANNOTATION_TYPE_UNSPECIFIED',
									'USER_MENTION',
									'SLASH_COMMAND',
									'RICH_LINK',
									'CUSTOM_EMOJI',
								],
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
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'deleteMessage',
		label: 'Delete a message',
		description: 'Deletes a message.',
		context:
			'---\nname: deleteMessage\ndescription: Deletes a message.\n---\n\nPermanently deletes a message from a space. This cannot be undone. The response body is empty on success.\n\nProvide the full message resource name in `name`, in the form `spaces/{space}/messages/{message}`. Use `getMessage` first to confirm that it is the message you want to delete.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
						'The resource name of the message, in the form `spaces/{space}/messages/{message}`.',
				},
			},
			required: ['name'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'getAttachment',
		label: 'Get an attachment',
		description: 'Returns the metadata of a message attachment.',
		context:
			'---\nname: getAttachment\ndescription: Returns the metadata of a message attachment.\n---\n\nReturns the metadata of a single message attachment, such as its file name, content type and source. It does not return the file content: to download the data, use the media API with `attachmentDataRef.resourceName` from the response.\n\nProvide the full attachment resource name in `name`, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`. You can find it in the `attachment` array of the response of `getMessage`. With app authentication the endpoint only returns attachments of messages the Chat app has access to.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
				name: {
					type: 'string',
					description:
						'The resource name of the attachment, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`. You can get it from the `attachment` array in the response of the Get a message endpoint.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description:
						'The resource name of the attachment, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`.',
				},
				contentName: {
					type: 'string',
					description: 'The original file name for the content, not the full path.',
				},
				contentType: {
					type: 'string',
					description: 'The content type (MIME type) of the file.',
				},
				attachmentDataRef: {
					type: 'object',
					description:
						'A reference to the attachment data. Used with the media API to download the attachment data.',
					properties: {
						resourceName: {
							type: 'string',
							description:
								'The resource name of the attachment data. Used with the media API to download the attachment data.',
						},
						attachmentUploadToken: {
							type: 'string',
							description:
								'An opaque token containing a reference to an uploaded attachment. Treat it as an opaque string. It is used to create or update Chat messages with attachments.',
						},
					},
					required: [],
				},
				driveDataRef: {
					type: 'object',
					description:
						'A reference to the Google Drive attachment. Used with the Google Drive API.',
					properties: {
						driveFileId: {
							type: 'string',
							description:
								'The ID of the Google Drive file. Use it with the Google Drive API.',
						},
					},
					required: [],
				},
				thumbnailUri: {
					type: 'string',
					description:
						"The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.",
				},
				downloadUri: {
					type: 'string',
					description:
						"The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.",
				},
				source: {
					type: 'string',
					description: 'The source of the attachment.',
					default: '',
					enum: ['', 'SOURCE_UNSPECIFIED', 'DRIVE_FILE', 'UPLOADED_CONTENT'],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'getMember',
		label: 'Get a member',
		description: 'Returns details about a membership in a space.',
		context:
			'---\nname: getMember\ndescription: Returns details about a membership in a space.\n---\n\nReturns details about one membership (a user, Google Group or Chat app) in a space, including its role and state.\n\nProvide the full membership resource name in `name`, in the form `spaces/{space}/members/{member}`. Use `listMembers` to look up membership names.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
				name: {
					type: 'string',
					description:
						'The resource name of the membership to retrieve, in the form `spaces/{space}/members/{member}`. You can get the membership name from the response of the List members endpoint.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				groupMember: {
					type: 'object',
					description:
						'The Google Group the membership corresponds to. Reading or mutating memberships for Google Groups requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).',
					properties: {
						name: {
							type: 'string',
							description:
								'Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group}',
						},
					},
					required: [],
				},
				deleteTime: {
					type: 'string',
					description:
						'The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.',
				},
				name: {
					type: 'string',
					description:
						'Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`',
				},
				role: {
					type: 'string',
					description:
						"User's role within a Chat space, which determines their permitted actions in the space. This field can only be used as input in `UpdateMembership`.",
					default: '',
					enum: [
						'',
						'MEMBERSHIP_ROLE_UNSPECIFIED',
						'ROLE_MEMBER',
						'ROLE_MANAGER',
						'ROLE_ASSISTANT_MANAGER',
					],
				},
				affiliation: {
					type: 'string',
					description:
						"A user's relationship to the Workspace organization that owns the space. In spaces owned by consumer accounts, the affiliation of all members is `EXTERNAL`.",
					default: '',
					enum: [
						'',
						'AFFILIATION_UNSPECIFIED',
						'INTERNAL',
						'EXTERNAL',
						'MANAGED_EXTERNAL',
					],
				},
				createTime: {
					type: 'string',
					description:
						'The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.',
				},
				member: {
					type: 'object',
					description:
						'The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output only populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type` fields for both internal and external users, unless they are members of the space or have a prior affinity, like a direct message (DM) conversation, with the calling user.',
					properties: {
						domainId: {
							type: 'string',
							description: "Unique identifier of the user's Google Workspace domain.",
						},
						email: {
							type: 'string',
							description:
								"The user's email address. When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.",
						},
						displayName: {
							type: 'string',
							description:
								"The user's display name. Populated for both app authentication and user authentication. This field is always populated for requests made with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.",
						},
						type: {
							type: 'string',
							description: 'User type.',
							default: '',
							enum: ['', 'TYPE_UNSPECIFIED', 'HUMAN', 'BOT'],
						},
						name: {
							type: 'string',
							description:
								"Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API.",
						},
						avatarUrl: {
							type: 'string',
							description:
								"The user's avatar image URL. When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.",
						},
						isAnonymous: {
							type: 'boolean',
							description:
								'When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without being a member and without prior affinity with the calling user.',
						},
					},
					required: [],
				},
				state: {
					type: 'string',
					description: 'State of the membership.',
					default: '',
					enum: ['', 'MEMBERSHIP_STATE_UNSPECIFIED', 'JOINED', 'INVITED', 'NOT_A_MEMBER'],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'getMessage',
		label: 'Get a message',
		description: 'Returns details about a message, including its attachments.',
		context:
			'---\nname: getMessage\ndescription: Returns details about a message, including its attachments.\n---\n\nReturns details about a single message in a space. The `attachment` field of the response lists the files attached to the message; to get the metadata of one attachment, use `getAttachment` with its resource name.\n\nProvide the full message resource name in `name`, in the form `spaces/{space}/messages/{message}`. With app authentication the endpoint only returns messages the Chat app has access to, such as direct messages and slash commands.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
				name: {
					type: 'string',
					description:
						'The resource name of the message, in the form `spaces/{space}/messages/{message}`.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sender: {
					type: 'object',
					description: 'The user who created the message.',
					properties: {
						domainId: {
							type: 'string',
							description: "Unique identifier of the user's Google Workspace domain.",
						},
						email: { type: 'string', description: "The user's email address." },
						displayName: { type: 'string', description: "The user's display name." },
						type: {
							type: 'string',
							description: 'User type.',
							default: '',
							enum: ['', 'TYPE_UNSPECIFIED', 'HUMAN', 'BOT'],
						},
						name: {
							type: 'string',
							description: 'Resource name for a Google Chat user.',
						},
						avatarUrl: { type: 'string', description: "The user's avatar image URL." },
						isAnonymous: {
							type: 'boolean',
							description:
								'When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without…',
						},
					},
					required: [],
				},
				quotedMessageMetadata: {
					type: 'object',
					description: 'Information about a message that another message quotes.',
					properties: {
						lastUpdateTime: {
							type: 'string',
							description:
								'The timestamp when the quoted message was created or when the quoted message was last updated.',
						},
						forwardedMetadata: {
							type: 'object',
							description:
								'Metadata about the source space of the quoted message. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						quoteType: {
							type: 'string',
							description: 'Specifies the quote type.',
							default: '',
							enum: ['', 'QUOTE_TYPE_UNSPECIFIED', 'REPLY', 'FORWARD'],
						},
						quotedMessageSnapshot: {
							type: 'object',
							description:
								"A snapshot of the quoted message's content. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.",
							properties: {},
							required: [],
							additionalProperties: true,
						},
						name: {
							type: 'string',
							description: 'Resource name of the message that is quoted.',
						},
					},
					required: [],
				},
				emojiReactionSummaries: {
					type: 'array',
					description: 'The list of emoji reaction summaries on the message.',
					items: {
						type: 'object',
						description:
							'The number of people who reacted to a message with a specific emoji.',
						properties: {
							emoji: {
								type: 'object',
								description:
									'Emoji associated with the reactions. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							reactionCount: {
								type: 'number',
								description:
									'The total number of reactions using the associated emoji.',
							},
						},
						required: [],
					},
				},
				lastUpdateTime: {
					type: 'string',
					description: 'The time at which the message was last edited by a user.',
				},
				matchedUrl: {
					type: 'object',
					description:
						'A URL in the Chat message `text` field that matches a link preview pattern.',
					properties: {
						url: { type: 'string', description: 'The URL that was matched.' },
					},
					required: [],
				},
				text: { type: 'string', description: 'Plain-text body of the message.' },
				thread: {
					type: 'object',
					description: 'The thread the message belongs to.',
					properties: {
						threadKey: {
							type: 'string',
							description: 'Input for creating or updating a thread.',
						},
						name: { type: 'string', description: 'Resource name of the thread.' },
					},
					required: [],
				},
				createTime: {
					type: 'string',
					description:
						'For spaces created in Chat, the time at which the message was created.',
				},
				space: {
					type: 'object',
					description:
						'If your Chat app authenticates as a user, the output only populates the space `name`.',
					properties: {
						adminInstalled: {
							type: 'boolean',
							description:
								'For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator.',
						},
						permissionSettings: {
							type: 'object',
							description:
								'Space permission settings for existing spaces. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						createTime: {
							type: 'string',
							description:
								'For spaces created in Chat, the time the space was created.',
						},
						customer: {
							type: 'string',
							description: 'The customer id of the domain of the space.',
						},
						spaceType: {
							type: 'string',
							description: 'The type of space.',
							default: '',
							enum: [
								'',
								'SPACE_TYPE_UNSPECIFIED',
								'SPACE',
								'GROUP_CHAT',
								'DIRECT_MESSAGE',
							],
						},
						lastActiveTime: {
							type: 'string',
							description: 'Timestamp of the last message in the space.',
						},
						displayName: { type: 'string', description: "The space's display name." },
						name: { type: 'string', description: 'Resource name of the space.' },
						spaceThreadingState: {
							type: 'string',
							description: 'The threading state in the Chat space.',
							default: '',
							enum: [
								'',
								'SPACE_THREADING_STATE_UNSPECIFIED',
								'THREADED_MESSAGES',
								'GROUPED_MESSAGES',
								'UNTHREADED_MESSAGES',
							],
						},
						externalUserAllowed: {
							type: 'boolean',
							description:
								'Whether this space permits any Google Chat user as a member.',
						},
						accessSettings: {
							type: 'object',
							description:
								'Specifies the access setting of the space. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						membershipCount: {
							type: 'object',
							description:
								'The count of joined memberships grouped by member type. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						importMode: {
							type: 'boolean',
							description:
								'Whether this space is created in `Import Mode` as part of a data migration into Google Workspace.',
						},
						singleUserBotDm: {
							type: 'boolean',
							description:
								'Whether the space is a DM between a Chat app and a single human.',
						},
						importModeExpireTime: {
							type: 'string',
							description:
								'The time when the space will be automatically deleted by the system if it remains in import mode.',
						},
						spaceDetails: {
							type: 'object',
							description:
								'Details about the space including description and rules. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						spaceHistoryState: {
							type: 'string',
							description:
								'The message history state for messages and threads in this space.',
							default: '',
							enum: ['', 'HISTORY_STATE_UNSPECIFIED', 'HISTORY_OFF', 'HISTORY_ON'],
						},
						spaceUri: {
							type: 'string',
							description: 'The URI for a user to access the space.',
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'Resource name of the message.' },
				privateMessageViewer: {
					type: 'object',
					description: 'Input for creating a message, otherwise output only.',
					properties: {
						domainId: {
							type: 'string',
							description: "Unique identifier of the user's Google Workspace domain.",
						},
						email: { type: 'string', description: "The user's email address." },
						displayName: { type: 'string', description: "The user's display name." },
						type: {
							type: 'string',
							description: 'User type.',
							default: '',
							enum: ['', 'TYPE_UNSPECIFIED', 'HUMAN', 'BOT'],
						},
						name: {
							type: 'string',
							description: 'Resource name for a Google Chat user.',
						},
						avatarUrl: { type: 'string', description: "The user's avatar image URL." },
						isAnonymous: {
							type: 'boolean',
							description:
								'When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without…',
						},
					},
					required: [],
				},
				threadReply: {
					type: 'boolean',
					description: 'When `true`, the message is a response in a reply thread.',
				},
				attachedGifs: {
					type: 'array',
					description: 'GIF images that are attached to the message.',
					items: {
						type: 'object',
						description: "A GIF image that's specified by a URL.",
						properties: {
							uri: {
								type: 'string',
								description: 'The URL that hosts the GIF image.',
							},
						},
						required: [],
					},
				},
				clientAssignedMessageId: {
					type: 'string',
					description: 'A custom ID for the message.',
				},
				argumentText: {
					type: 'string',
					description:
						'Plain-text body of the message with all Chat app mentions stripped out.',
				},
				silent: { type: 'boolean', description: 'Whether this is a silent message.' },
				formattedText: {
					type: 'string',
					description:
						'Contains the message `text` with markups added to communicate formatting.',
				},
				attachment: {
					type: 'array',
					description: 'User-uploaded attachment.',
					items: {
						type: 'object',
						description: 'An attachment in Google Chat.',
						properties: {
							contentType: {
								type: 'string',
								description: 'The content type (MIME type) of the file.',
							},
							thumbnailUri: {
								type: 'string',
								description:
									'The thumbnail URL which should be used to preview the attachment to a human user.',
							},
							driveDataRef: {
								type: 'object',
								description:
									'A reference to the Google Drive attachment. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							downloadUri: {
								type: 'string',
								description:
									'The download URL which should be used to allow a human user to download the attachment.',
							},
							source: {
								type: 'string',
								description: 'The source of the attachment.',
								default: '',
								enum: ['', 'SOURCE_UNSPECIFIED', 'DRIVE_FILE', 'UPLOADED_CONTENT'],
							},
							name: {
								type: 'string',
								description: 'Resource name of the attachment.',
							},
							attachmentDataRef: {
								type: 'object',
								description:
									'A reference to the attachment data. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							contentName: {
								type: 'string',
								description:
									'The original file name for the content, not the full path.',
							},
						},
						required: [],
					},
				},
				fallbackText: {
					type: 'string',
					description:
						"A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile…",
				},
				markupSyntax: {
					type: 'string',
					description:
						'Specifies how the server interprets the message `text` field content.',
					default: '',
					enum: [
						'',
						'MARKUP_SYNTAX_UNSPECIFIED',
						'MARKUP_SYNTAX_CHAT',
						'MARKUP_SYNTAX_MARKDOWN',
					],
				},
				accessoryWidgets: {
					type: 'array',
					description:
						'One or more interactive widgets that appear at the bottom of a message.',
					items: {
						type: 'object',
						description:
							'One or more interactive widgets that appear at the bottom of a message.',
						properties: {
							buttonList: {
								type: 'object',
								description:
									'A list of buttons. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				slashCommand: {
					type: 'object',
					description: 'Slash command information, if applicable.',
					properties: {
						commandId: { type: 'string', description: 'The ID of the slash command.' },
					},
					required: [],
				},
				deleteTime: {
					type: 'string',
					description: 'The time at which the message was deleted in Google Chat.',
				},
				deletionMetadata: {
					type: 'object',
					description: 'Information about a deleted message.',
					properties: {
						deletionType: {
							type: 'string',
							description: 'Indicates who deleted the message.',
							default: '',
							enum: [
								'',
								'DELETION_TYPE_UNSPECIFIED',
								'CREATOR',
								'SPACE_OWNER',
								'ADMIN',
								'APP_MESSAGE_EXPIRY',
								'CREATOR_VIA_APP',
								'SPACE_OWNER_VIA_APP',
								'SPACE_MEMBER',
							],
						},
					},
					required: [],
				},
				cardsV2: {
					type: 'array',
					description: 'An array of cards.',
					items: {
						type: 'object',
						description: 'A card in a Google Chat message.',
						properties: {
							card: {
								type: 'object',
								description: 'A card.',
								properties: {
									peekCardHeader: {
										type: 'object',
										description:
											'When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward… The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									sections: {
										type: 'array',
										description: 'Contains a collection of widgets.',
										items: {
											type: 'object',
											description:
												"A section contains a collection of widgets that are rendered vertically in the order that they're specified.",
											properties: {
												widgets: {
													type: 'array',
													description: 'All the widgets in the section.',
													items: {
														type: 'object',
														description:
															'Each card is made up of widgets.',
														properties: {
															grid: {
																type: 'object',
																description:
																	'Displays a grid with a collection of items. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															divider: {
																type: 'object',
																description:
																	'Displays a horizontal line divider between widgets.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															buttonList: {
																type: 'object',
																description:
																	'A list of buttons. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															chipList: {
																type: 'object',
																description:
																	'A list of chips. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															eventActions: {
																type: 'array',
																description:
																	'Specifies the event actions that can be performed on the widget.',
																items: {
																	type: 'object',
																	description:
																		'Represents an actionthat can be performed on an ui element. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
															},
															textInput: {
																type: 'object',
																description:
																	'Displays a text box that users can type into. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															selectionInput: {
																type: 'object',
																description:
																	'Displays a selection control that lets users select items. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															carousel: {
																type: 'object',
																description:
																	'A carousel contains a collection of nested widgets. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															horizontalAlignment: {
																type: 'string',
																description:
																	'Specifies whether widgets align to the left, right, or center of a column.',
																default: '',
																enum: [
																	'',
																	'HORIZONTAL_ALIGNMENT_UNSPECIFIED',
																	'START',
																	'CENTER',
																	'END',
																],
															},
															image: {
																type: 'object',
																description: 'Displays an image.',
																properties: {
																	onClick: {
																		type: 'object',
																		description:
																			'When a user clicks the image, the click triggers this action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	altText: {
																		type: 'string',
																		description:
																			"The alternative text of this image that's used for accessibility.",
																	},
																	imageUrl: {
																		type: 'string',
																		description:
																			'The HTTPS URL that hosts the image.',
																	},
																},
																required: [],
															},
															columns: {
																type: 'object',
																description:
																	'Displays up to 2 columns. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															dateTimePicker: {
																type: 'object',
																description:
																	'Displays a widget that lets users input a date, time, or date and time. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															visibility: {
																type: 'string',
																description:
																	'Specifies whether the widget is visible or hidden.',
																default: '',
																enum: [
																	'',
																	'VISIBILITY_UNSPECIFIED',
																	'VISIBLE',
																	'HIDDEN',
																],
															},
															decoratedText: {
																type: 'object',
																description:
																	'Displays a decorated text item.',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'The primary text.',
																	},
																	endIcon: {
																		type: 'object',
																		description:
																			'An icon displayed after the text. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	topLabel: {
																		type: 'string',
																		description:
																			'The text that appears above `text`.',
																	},
																	button: {
																		type: 'object',
																		description:
																			'A button that a user can click to trigger an action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	startIconVerticalAlignment: {
																		type: 'string',
																		description:
																			'Vertical alignment of the start icon.',
																		default: '',
																		enum: [
																			'',
																			'VERTICAL_ALIGNMENT_UNSPECIFIED',
																			'TOP',
																			'MIDDLE',
																			'BOTTOM',
																		],
																	},
																	onClick: {
																		type: 'object',
																		description:
																			'This action is triggered when users click `topLabel` or `bottomLabel`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	bottomLabel: {
																		type: 'string',
																		description:
																			'The text that appears below `text`.',
																	},
																	contentText: {
																		type: 'object',
																		description:
																			'`TextParagraph` equivalent of `text`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	wrapText: {
																		type: 'boolean',
																		description:
																			'The wrap text setting.',
																	},
																	bottomLabelText: {
																		type: 'object',
																		description:
																			'`TextParagraph` equivalent of `bottom_label`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	topLabelText: {
																		type: 'object',
																		description:
																			'`TextParagraph` equivalent of `top_label`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	switchControl: {
																		type: 'object',
																		description:
																			'A switch widget that a user can click to change its state and trigger an action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	startIcon: {
																		type: 'object',
																		description:
																			'The icon displayed in front of the text. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																},
																required: [],
															},
															textParagraph: {
																type: 'object',
																description:
																	'Displays a text paragraph.',
																properties: {
																	textSyntax: {
																		type: 'string',
																		description:
																			'The syntax of the text.',
																		default: '',
																		enum: [
																			'',
																			'TEXT_SYNTAX_UNSPECIFIED',
																			'HTML',
																			'MARKDOWN',
																		],
																	},
																	maxLines: {
																		type: 'number',
																		description:
																			'The maximum number of lines of text that are displayed in the widget.',
																	},
																	text: {
																		type: 'string',
																		description:
																			"The text that's shown in the widget.",
																	},
																},
																required: [],
															},
															id: {
																type: 'string',
																description:
																	"A unique ID assigned to the widget that's used to identify the widget to be mutated.",
															},
														},
														required: [],
													},
												},
												collapsible: {
													type: 'boolean',
													description:
														'Indicates whether this section is collapsible.',
												},
												uncollapsibleWidgetsCount: {
													type: 'number',
													description:
														'The number of uncollapsible widgets which remain visible even when a section is collapsed.',
												},
												header: {
													type: 'string',
													description:
														'Text that appears at the top of a section.',
												},
												id: {
													type: 'string',
													description:
														"A unique ID assigned to the section that's used to identify the section to be mutated.",
												},
												collapseControl: {
													type: 'object',
													description:
														'Define the expand and collapse button of the section.',
													properties: {
														collapseButton: {
															type: 'object',
															description:
																'Define a customizable button to collapse the section.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'The type of a button.',
																	default: '',
																	enum: [
																		'',
																		'TYPE_UNSPECIFIED',
																		'OUTLINED',
																		'FILLED',
																		'FILLED_TONAL',
																		'BORDERLESS',
																	],
																},
																icon: {
																	type: 'object',
																	description:
																		'An icon displayed inside the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																onClick: {
																	type: 'object',
																	description:
																		'The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																color: {
																	type: 'object',
																	description:
																		'The color of the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																text: {
																	type: 'string',
																	description:
																		'The text displayed inside the button.',
																},
																altText: {
																	type: 'string',
																	description:
																		"The alternative text that's used for accessibility.",
																},
																disabled: {
																	type: 'boolean',
																	description:
																		"If `true`, the button is displayed in an inactive state and doesn't respond to user actions.",
																},
															},
															required: [],
														},
														expandButton: {
															type: 'object',
															description:
																'Define a customizable button to expand the section.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'The type of a button.',
																	default: '',
																	enum: [
																		'',
																		'TYPE_UNSPECIFIED',
																		'OUTLINED',
																		'FILLED',
																		'FILLED_TONAL',
																		'BORDERLESS',
																	],
																},
																icon: {
																	type: 'object',
																	description:
																		'An icon displayed inside the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																onClick: {
																	type: 'object',
																	description:
																		'The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																color: {
																	type: 'object',
																	description:
																		'The color of the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																text: {
																	type: 'string',
																	description:
																		'The text displayed inside the button.',
																},
																altText: {
																	type: 'string',
																	description:
																		"The alternative text that's used for accessibility.",
																},
																disabled: {
																	type: 'boolean',
																	description:
																		"If `true`, the button is displayed in an inactive state and doesn't respond to user actions.",
																},
															},
															required: [],
														},
														horizontalAlignment: {
															type: 'string',
															description:
																'The horizontal alignment of the expand and collapse button.',
															default: '',
															enum: [
																'',
																'HORIZONTAL_ALIGNMENT_UNSPECIFIED',
																'START',
																'CENTER',
																'END',
															],
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									cardActions: {
										type: 'array',
										description: "The card's actions.",
										items: {
											type: 'object',
											description:
												'A card action is the action associated with the card. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									expressionData: {
										type: 'array',
										description: 'The expression data for the card.',
										items: {
											type: 'object',
											description:
												'Represents the data that is used to evaluate an expression. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									header: {
										type: 'object',
										description: 'The header of the card.',
										properties: {
											subtitle: {
												type: 'string',
												description: 'The subtitle of the card header.',
											},
											imageUrl: {
												type: 'string',
												description:
													'The HTTPS URL of the image in the card header.',
											},
											imageAltText: {
												type: 'string',
												description:
													"The alternative text of this image that's used for accessibility.",
											},
											imageType: {
												type: 'string',
												description: 'The shape used to crop the image.',
												default: '',
												enum: ['', 'SQUARE', 'CIRCLE'],
											},
										},
										required: [],
									},
									displayStyle: {
										type: 'string',
										description:
											'In Google Workspace add-ons, sets the display properties of the `peekCardHeader`.',
										default: '',
										enum: ['', 'DISPLAY_STYLE_UNSPECIFIED', 'PEEK', 'REPLACE'],
									},
									sectionDividerStyle: {
										type: 'string',
										description:
											'The divider style between the header, sections and footer.',
										default: '',
										enum: [
											'',
											'DIVIDER_STYLE_UNSPECIFIED',
											'SOLID_DIVIDER',
											'NO_DIVIDER',
										],
									},
									fixedFooter: {
										type: 'object',
										description:
											'The fixed footer shown at the bottom of this card. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									name: { type: 'string', description: 'Name of the card.' },
								},
								required: [],
							},
							cardId: {
								type: 'string',
								description: 'Required if the message contains multiple cards.',
							},
						},
						required: [],
					},
				},
				annotations: {
					type: 'array',
					description:
						'Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace…',
					items: {
						type: 'object',
						description:
							'Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace…',
						properties: {
							startIndex: {
								type: 'number',
								description:
									'Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.',
							},
							customEmojiMetadata: {
								type: 'object',
								description:
									'The metadata for a custom emoji. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							length: {
								type: 'number',
								description:
									'Length of the substring in the plain-text message body this annotation corresponds to.',
							},
							richLinkMetadata: {
								type: 'object',
								description:
									'The metadata for a rich link. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							slashCommand: {
								type: 'object',
								description:
									'The metadata for a slash command. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							userMention: {
								type: 'object',
								description:
									'The metadata of user mention. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							type: {
								type: 'string',
								description: 'The type of this annotation.',
								default: '',
								enum: [
									'',
									'ANNOTATION_TYPE_UNSPECIFIED',
									'USER_MENTION',
									'SLASH_COMMAND',
									'RICH_LINK',
									'CUSTOM_EMOJI',
								],
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
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'getSpace',
		label: 'Get a space',
		description: 'Returns details about a space.',
		context:
			'---\nname: getSpace\ndescription: Returns details about a space.\n---\n\nReturns details about a single Google Chat space, such as its display name, type, history state and access settings.\n\nProvide the full resource name of the space in `name`, in the form `spaces/{space}`. Use `listSpaces` to look up the resource names of the spaces the connection has access to.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
				name: {
					type: 'string',
					description:
						'The resource name of the space, in the form `spaces/{space}`. You can get the space ID from the response of the List spaces endpoint.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				adminInstalled: {
					type: 'boolean',
					description:
						'For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization. To support admin install, your Chat app must feature direct messaging.',
				},
				permissionSettings: {
					type: 'object',
					description:
						'Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings. Reading and updating permission settings supports: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. Only populated and settable when the Chat app created the space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)',
					properties: {
						modifySpaceDetails: {
							type: 'object',
							description:
								'Setting for updating space name, avatar, description and guidelines.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						manageWebhooks: {
							type: 'object',
							description: 'Setting for managing webhooks in a space.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						manageMembersAndGroups: {
							type: 'object',
							description: 'Setting for managing members and groups in a space.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						replyMessages: {
							type: 'object',
							description: 'Setting for replying to messages in a space.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						postMessages: {
							type: 'object',
							description: 'Setting for posting messages in a space.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						viewSpaceMembership: {
							type: 'object',
							description:
								'Setting for viewing space membership. Must be specified together with `AccessPermissionSettings.view_space_membership_setting` in the update mask and request body when updating who can view space membership. When restricting view access to specific roles (for example, space managers or assistant managers only), specify the desired role permissions here and provide an empty `AccessPermissionSettings.view_space_membership_setting` in the same request. If a target audience is configured in `AccessPermissionSettings.view_space_membership_setting`, this setting must be granted to all members.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						manageApps: {
							type: 'object',
							description: 'Setting for managing apps in a space.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						toggleHistory: {
							type: 'object',
							description: 'Setting for toggling space history on and off.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
						useAtMentionAll: {
							type: 'object',
							description: 'Setting for using @all in a space.',
							properties: {
								managersAllowed: {
									type: 'boolean',
									description:
										'Whether space owners (`ROLE_MANAGER`) have this permission.',
								},
								assistantManagersAllowed: {
									type: 'boolean',
									description:
										'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
								},
								membersAllowed: {
									type: 'boolean',
									description:
										'Whether basic space members (`ROLE_MEMBER`) have this permission.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createTime: {
					type: 'string',
					description:
						'For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.',
				},
				customer: {
					type: 'string',
					description:
						"The customer id of the domain of the space. Required only when creating a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and `SpaceType` is `SPACE`, otherwise should not be set. In the format `customers/{customer}`, where `customer` is the `id` from the [Admin SDK customer resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). Private apps can also use the `customers/my_customer` alias to create the space in the same Google Workspace organization as the app. This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.",
				},
				spaceType: {
					type: 'string',
					description:
						'The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.',
					default: '',
					enum: ['', 'SPACE_TYPE_UNSPECIFIED', 'SPACE', 'GROUP_CHAT', 'DIRECT_MESSAGE'],
				},
				lastActiveTime: {
					type: 'string',
					description: 'Timestamp of the last message in the space.',
				},
				displayName: {
					type: 'string',
					description:
						"The space's display name. Required when [creating a space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) with a `spaceType` of `SPACE`. If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.",
				},
				name: {
					type: 'string',
					description:
						'Resource name of the space. Format: `spaces/{space}` Where `{space}` represents the system-assigned ID for the space. You can obtain the space ID by calling the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method or from the space URL. For example, if the space URL is `https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA`, the space ID is `AAAAAAAAA`.',
				},
				spaceThreadingState: {
					type: 'string',
					description: 'The threading state in the Chat space.',
					default: '',
					enum: [
						'',
						'SPACE_THREADING_STATE_UNSPECIFIED',
						'THREADED_MESSAGES',
						'GROUPED_MESSAGES',
						'UNTHREADED_MESSAGES',
					],
				},
				externalUserAllowed: {
					type: 'boolean',
					description:
						'Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user. For existing spaces, this field is output only.',
				},
				accessSettings: {
					type: 'object',
					description:
						'Specifies the [access setting](https://support.google.com/chat/answer/11971020) of the space. Only populated when the `space_type` is `SPACE`.',
					properties: {
						audience: {
							type: 'string',
							description:
								'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`. Reading the target audience supports: - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. This field is not populated when using the `chat.bot` scope with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). Setting the target audience requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).',
						},
						accessState: {
							type: 'string',
							description: 'Indicates the access state of the space.',
							default: '',
							enum: ['', 'ACCESS_STATE_UNSPECIFIED', 'PRIVATE', 'DISCOVERABLE'],
						},
						accessPermissionSettings: {
							type: 'object',
							description:
								'Access permission settings for the space. To set the target audience when creating a space, specify the `accessSettings.audience` field in your request.',
							properties: {
								joinSpaceSetting: {
									type: 'object',
									description: 'Access permission setting for joining the space.',
									properties: {
										principals: {
											type: 'array',
											description:
												'Unordered list. Allowed principals for this permission.',
											items: {
												type: 'object',
												description:
													'A principal representing an entity granted access.',
												properties: {
													audience: {
														type: 'object',
														description: 'An audience.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.',
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
								discoverSpaceSetting: {
									type: 'object',
									description:
										'Access permission setting for discovering the space.',
									properties: {
										principals: {
											type: 'array',
											description:
												'Unordered list. Allowed principals for this permission.',
											items: {
												type: 'object',
												description:
													'A principal representing an entity granted access.',
												properties: {
													audience: {
														type: 'object',
														description: 'An audience.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.',
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
								viewSpaceMembershipSetting: {
									type: 'object',
									description:
										'Access permission setting for viewing space membership. Must be specified together with `PermissionSettings.view_space_membership` in the update mask and request body when updating who can view space membership. When granting view access to a target audience, you must also grant `PermissionSettings.view_space_membership` to all members in the same request. To remove an existing target audience (for example, to restrict view access to space managers or assistant managers only), specify an empty `AccessPermissionSetting` (with no `principals`).',
									properties: {
										principals: {
											type: 'array',
											description:
												'Unordered list. Allowed principals for this permission.',
											items: {
												type: 'object',
												description:
													'A principal representing an entity granted access.',
												properties: {
													audience: {
														type: 'object',
														description: 'An audience.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.',
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
							required: [],
						},
					},
					required: [],
				},
				membershipCount: {
					type: 'object',
					description:
						'The count of joined memberships grouped by member type. Populated when the `space_type` is `SPACE`, `DIRECT_MESSAGE` or `GROUP_CHAT`.',
					properties: {
						joinedGroupCount: {
							type: 'number',
							description: 'Count of all groups that have directly joined the space.',
						},
						joinedDirectHumanUserCount: {
							type: 'number',
							description:
								'Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.',
						},
					},
					required: [],
				},
				importMode: {
					type: 'boolean',
					description:
						"Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete. Creating a space in `Import Mode`requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).",
				},
				singleUserBotDm: {
					type: 'boolean',
					description: 'Whether the space is a DM between a Chat app and a single human.',
				},
				importModeExpireTime: {
					type: 'string',
					description:
						'The time when the space will be automatically deleted by the system if it remains in import mode. Each space created in import mode must exit this mode before this expire time using `spaces.completeImport`. This field is only populated for spaces that were created with import mode.',
				},
				spaceDetails: {
					type: 'object',
					description: 'Details about the space including description and rules.',
					properties: {
						guidelines: {
							type: 'string',
							description:
								"The space's rules, expectations, and etiquette. Supports up to 5,000 characters.",
						},
						description: {
							type: 'string',
							description:
								"A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 4,096 characters.",
						},
					},
					required: [],
				},
				spaceHistoryState: {
					type: 'string',
					description:
						'The message history state for messages and threads in this space.',
					default: '',
					enum: ['', 'HISTORY_STATE_UNSPECIFIED', 'HISTORY_OFF', 'HISTORY_ON'],
				},
				spaceUri: {
					type: 'string',
					description: 'The URI for a user to access the space.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'listMembers',
		label: 'List members',
		description: 'Lists the memberships in a space.',
		context:
			"---\nname: listMembers\ndescription: Lists the memberships in a space.\n---\n\nLists the memberships in a space. The response is paginated: when it contains `nextPageToken`, call this endpoint again with that value in `pageToken` to get the next page.\n\nUse `filter` to restrict the result by role or member type, and `showGroups` to include Google Group memberships.\n\nProvide the space resource name in `parent`, in the form `spaces/{space}`. Use `listSpaces` to look up space names. Listing with app authentication excludes the memberships of Chat apps, including the app's own.\n",
		accounts: { 'google-chat3': { scope: [] } },
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
				parent: {
					type: 'string',
					description:
						'The resource name of the space for which to fetch the membership list, in the form `spaces/{space}`. You can get the space ID from the response of the List spaces endpoint.',
				},
				filter: {
					type: 'string',
					description:
						'A query filter. You can filter memberships by a member\'s role (`role`) and type (`member.type`). Set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`, and `member.type` to `HUMAN` or `BOT`. You can also use the `!=` operator for `member.type`. Combine conditions with `AND` or `OR`. For example: `role = "ROLE_MANAGER" OR role = "ROLE_MEMBER"`, `member.type = "HUMAN" AND role = "ROLE_MANAGER"` or `member.type != "BOT"`. Invalid queries are rejected by Google with an `INVALID_ARGUMENT` error.',
				},
				showGroups: {
					type: 'boolean',
					description:
						"When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.",
				},
				pageSize: {
					type: 'number',
					description:
						'Maximum number of memberships to return per page. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000; values above 1000 are changed to 1000.',
					maximum: 1000,
				},
				pageToken: {
					type: 'string',
					description:
						'A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.',
				},
			},
			required: ['parent'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nextPageToken: {
					type: 'string',
					description:
						'A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.',
				},
				memberships: {
					type: 'array',
					description:
						'Unordered list. List of memberships in the requested (or first) page.',
					items: {
						type: 'object',
						description:
							'Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.',
						properties: {
							groupMember: {
								type: 'object',
								description:
									'The Google Group the membership corresponds to. Reading or mutating memberships for Google Groups requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).',
								properties: {
									name: {
										type: 'string',
										description:
											'Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group}',
									},
								},
								required: [],
							},
							deleteTime: {
								type: 'string',
								description:
									'The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.',
							},
							name: {
								type: 'string',
								description:
									'Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`',
							},
							role: {
								type: 'string',
								description:
									"User's role within a Chat space, which determines their permitted actions in the space. This field can only be used as input in `UpdateMembership`.",
								default: '',
								enum: [
									'',
									'MEMBERSHIP_ROLE_UNSPECIFIED',
									'ROLE_MEMBER',
									'ROLE_MANAGER',
									'ROLE_ASSISTANT_MANAGER',
								],
							},
							affiliation: {
								type: 'string',
								description:
									"A user's relationship to the Workspace organization that owns the space. In spaces owned by consumer accounts, the affiliation of all members is `EXTERNAL`.",
								default: '',
								enum: [
									'',
									'AFFILIATION_UNSPECIFIED',
									'INTERNAL',
									'EXTERNAL',
									'MANAGED_EXTERNAL',
								],
							},
							createTime: {
								type: 'string',
								description:
									'The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.',
							},
							member: {
								type: 'object',
								description:
									'The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output only populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type` fields for both internal and external users, unless they are members of the space or have a prior affinity, like a direct message (DM) conversation, with the calling user.',
								properties: {
									domainId: {
										type: 'string',
										description:
											"Unique identifier of the user's Google Workspace domain.",
									},
									email: {
										type: 'string',
										description:
											"The user's email address. When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.",
									},
									displayName: {
										type: 'string',
										description:
											"The user's display name. Populated for both app authentication and user authentication. This field is always populated for requests made with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.",
									},
									type: {
										type: 'string',
										description: 'User type.',
										default: '',
										enum: ['', 'TYPE_UNSPECIFIED', 'HUMAN', 'BOT'],
									},
									name: {
										type: 'string',
										description:
											"Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API.",
									},
									avatarUrl: {
										type: 'string',
										description:
											"The user's avatar image URL. When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.",
									},
									isAnonymous: {
										type: 'boolean',
										description:
											'When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without being a member and without prior affinity with the calling user.',
									},
								},
								required: [],
							},
							state: {
								type: 'string',
								description: 'State of the membership.',
								default: '',
								enum: [
									'',
									'MEMBERSHIP_STATE_UNSPECIFIED',
									'JOINED',
									'INVITED',
									'NOT_A_MEMBER',
								],
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
		appName: 'google-chat',
		appVersion: 1,
		endpointName: 'listSpaces',
		label: 'List spaces',
		description: 'Lists the spaces the caller is a member of.',
		context:
			'---\nname: listSpaces\ndescription: Lists the spaces the caller is a member of.\n---\n\nLists the spaces the caller is a member of. Group chats and direct messages are not listed until the first message is sent.\n\nUse `filter` to restrict the result by space type, for example `spaceType = "SPACE"`.\n\nThe response is paginated. When the response contains `nextPageToken`, call this endpoint again with that value in `pageToken` to get the next page.\n',
		accounts: { 'google-chat3': { scope: [] } },
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
				filter: {
					type: 'string',
					description:
						'A query filter. You can filter spaces by the space type (`spaceType`). Use a valid enum value, such as `SPACE`, `GROUP_CHAT` or `DIRECT_MESSAGE` (`SPACE_TYPE_UNSPECIFIED` isn\'t allowed). To query for multiple space types, use the `OR` operator. For example: `spaceType = "SPACE"` or `spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE"`. Invalid queries are rejected by Google with an `INVALID_ARGUMENT` error. When paginating, the filter value should match the call that provided the page token.',
				},
				pageSize: {
					type: 'number',
					description:
						'Maximum number of spaces to return per page. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000; values above 1000 are changed to 1000.',
					maximum: 1000,
				},
				pageToken: {
					type: 'string',
					description:
						'A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spaces: {
					type: 'array',
					description:
						'List of spaces in the requested (or first) page. Note: The `permissionSettings` field is not returned in the Space object for list requests.',
					items: {
						type: 'object',
						description:
							'A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.',
						properties: {
							adminInstalled: {
								type: 'boolean',
								description:
									'For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization. To support admin install, your Chat app must feature direct messaging.',
							},
							permissionSettings: {
								type: 'object',
								description:
									'Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings. Reading and updating permission settings supports: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. Only populated and settable when the Chat app created the space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)',
								properties: {
									modifySpaceDetails: {
										type: 'object',
										description:
											'Setting for updating space name, avatar, description and guidelines.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									manageWebhooks: {
										type: 'object',
										description: 'Setting for managing webhooks in a space.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									manageMembersAndGroups: {
										type: 'object',
										description:
											'Setting for managing members and groups in a space.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									replyMessages: {
										type: 'object',
										description: 'Setting for replying to messages in a space.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									postMessages: {
										type: 'object',
										description: 'Setting for posting messages in a space.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									viewSpaceMembership: {
										type: 'object',
										description:
											'Setting for viewing space membership. Must be specified together with `AccessPermissionSettings.view_space_membership_setting` in the update mask and request body when updating who can view space membership. When restricting view access to specific roles (for example, space managers or assistant managers only), specify the desired role permissions here and provide an empty `AccessPermissionSettings.view_space_membership_setting` in the same request. If a target audience is configured in `AccessPermissionSettings.view_space_membership_setting`, this setting must be granted to all members.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									manageApps: {
										type: 'object',
										description: 'Setting for managing apps in a space.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									toggleHistory: {
										type: 'object',
										description:
											'Setting for toggling space history on and off.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
									useAtMentionAll: {
										type: 'object',
										description: 'Setting for using @all in a space.',
										properties: {
											managersAllowed: {
												type: 'boolean',
												description:
													'Whether space owners (`ROLE_MANAGER`) have this permission.',
											},
											assistantManagersAllowed: {
												type: 'boolean',
												description:
													'Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission.',
											},
											membersAllowed: {
												type: 'boolean',
												description:
													'Whether basic space members (`ROLE_MEMBER`) have this permission.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							createTime: {
								type: 'string',
								description:
									'For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.',
							},
							customer: {
								type: 'string',
								description:
									"The customer id of the domain of the space. Required only when creating a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and `SpaceType` is `SPACE`, otherwise should not be set. In the format `customers/{customer}`, where `customer` is the `id` from the [Admin SDK customer resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). Private apps can also use the `customers/my_customer` alias to create the space in the same Google Workspace organization as the app. This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users.",
							},
							spaceType: {
								type: 'string',
								description:
									'The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.',
								default: '',
								enum: [
									'',
									'SPACE_TYPE_UNSPECIFIED',
									'SPACE',
									'GROUP_CHAT',
									'DIRECT_MESSAGE',
								],
							},
							lastActiveTime: {
								type: 'string',
								description: 'Timestamp of the last message in the space.',
							},
							displayName: {
								type: 'string',
								description:
									"The space's display name. Required when [creating a space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) with a `spaceType` of `SPACE`. If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.",
							},
							name: {
								type: 'string',
								description:
									'Resource name of the space. Format: `spaces/{space}` Where `{space}` represents the system-assigned ID for the space. You can obtain the space ID by calling the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method or from the space URL. For example, if the space URL is `https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA`, the space ID is `AAAAAAAAA`.',
							},
							spaceThreadingState: {
								type: 'string',
								description: 'The threading state in the Chat space.',
								default: '',
								enum: [
									'',
									'SPACE_THREADING_STATE_UNSPECIFIED',
									'THREADED_MESSAGES',
									'GROUPED_MESSAGES',
									'UNTHREADED_MESSAGES',
								],
							},
							externalUserAllowed: {
								type: 'boolean',
								description:
									'Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user. For existing spaces, this field is output only.',
							},
							accessSettings: {
								type: 'object',
								description:
									'Specifies the [access setting](https://support.google.com/chat/answer/11971020) of the space. Only populated when the `space_type` is `SPACE`.',
								properties: {
									audience: {
										type: 'string',
										description:
											'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`. Reading the target audience supports: - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. This field is not populated when using the `chat.bot` scope with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). Setting the target audience requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).',
									},
									accessState: {
										type: 'string',
										description: 'Indicates the access state of the space.',
										default: '',
										enum: [
											'',
											'ACCESS_STATE_UNSPECIFIED',
											'PRIVATE',
											'DISCOVERABLE',
										],
									},
									accessPermissionSettings: {
										type: 'object',
										description:
											'Access permission settings for the space. To set the target audience when creating a space, specify the `accessSettings.audience` field in your request.',
										properties: {
											joinSpaceSetting: {
												type: 'object',
												description:
													'Access permission setting for joining the space.',
												properties: {
													principals: {
														type: 'array',
														description:
															'Unordered list. Allowed principals for this permission.',
														items: {
															type: 'object',
															description:
																'A principal representing an entity granted access.',
															properties: {
																audience: {
																	type: 'object',
																	description: 'An audience.',
																	properties: {
																		name: {
																			type: 'string',
																			description:
																				'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.',
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
											discoverSpaceSetting: {
												type: 'object',
												description:
													'Access permission setting for discovering the space.',
												properties: {
													principals: {
														type: 'array',
														description:
															'Unordered list. Allowed principals for this permission.',
														items: {
															type: 'object',
															description:
																'A principal representing an entity granted access.',
															properties: {
																audience: {
																	type: 'object',
																	description: 'An audience.',
																	properties: {
																		name: {
																			type: 'string',
																			description:
																				'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.',
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
											viewSpaceMembershipSetting: {
												type: 'object',
												description:
													'Access permission setting for viewing space membership. Must be specified together with `PermissionSettings.view_space_membership` in the update mask and request body when updating who can view space membership. When granting view access to a target audience, you must also grant `PermissionSettings.view_space_membership` to all members in the same request. To remove an existing target audience (for example, to restrict view access to space managers or assistant managers only), specify an empty `AccessPermissionSetting` (with no `principals`).',
												properties: {
													principals: {
														type: 'array',
														description:
															'Unordered list. Allowed principals for this permission.',
														items: {
															type: 'object',
															description:
																'A principal representing an entity granted access.',
															properties: {
																audience: {
																	type: 'object',
																	description: 'An audience.',
																	properties: {
																		name: {
																			type: 'string',
																			description:
																				'The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover or join the space. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`.',
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
										required: [],
									},
								},
								required: [],
							},
							membershipCount: {
								type: 'object',
								description:
									'The count of joined memberships grouped by member type. Populated when the `space_type` is `SPACE`, `DIRECT_MESSAGE` or `GROUP_CHAT`.',
								properties: {
									joinedGroupCount: {
										type: 'number',
										description:
											'Count of all groups that have directly joined the space.',
									},
									joinedDirectHumanUserCount: {
										type: 'number',
										description:
											'Count of human users that have directly joined the space, not counting users joined by having membership in a joined group.',
									},
								},
								required: [],
							},
							importMode: {
								type: 'boolean',
								description:
									"Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete. Creating a space in `Import Mode`requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).",
							},
							singleUserBotDm: {
								type: 'boolean',
								description:
									'Whether the space is a DM between a Chat app and a single human.',
							},
							importModeExpireTime: {
								type: 'string',
								description:
									'The time when the space will be automatically deleted by the system if it remains in import mode. Each space created in import mode must exit this mode before this expire time using `spaces.completeImport`. This field is only populated for spaces that were created with import mode.',
							},
							spaceDetails: {
								type: 'object',
								description:
									'Details about the space including description and rules.',
								properties: {
									guidelines: {
										type: 'string',
										description:
											"The space's rules, expectations, and etiquette. Supports up to 5,000 characters.",
									},
									description: {
										type: 'string',
										description:
											"A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 4,096 characters.",
									},
								},
								required: [],
							},
							spaceHistoryState: {
								type: 'string',
								description:
									'The message history state for messages and threads in this space.',
								default: '',
								enum: [
									'',
									'HISTORY_STATE_UNSPECIFIED',
									'HISTORY_OFF',
									'HISTORY_ON',
								],
							},
							spaceUri: {
								type: 'string',
								description: 'The URI for a user to access the space.',
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description:
						'You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.',
				},
			},
			required: [],
		},
	},
];
