// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			"---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the LINE API.\n\nThe base URL is `https://api.line.me/`. Provide the remaining path in the URL\nparameter (for example `/v2/bot/richmenu/list`). Note that this base differs from the app's `baseUrl`\n(`https://api.line.me/v2/bot`), so the path must include the `/v2/bot` prefix. Authentication is handled automatically via the app's connection.\n\nRefer to the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/) for available endpoints, required parameters, and response schemas.\n",
		accounts: { line2: { scope: [] } },
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
						'Enter a path relative to `https://api.line.me`. For example, `/v2/bot/richmenu/list`.',
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
		appName: 'line',
		appVersion: 1,
		endpointName: 'createARichMenu',
		label: 'Create a rich menu',
		description: 'Creates a rich menu.',
		context:
			'---\nname: createARichMenu\ndescription: Creates a rich menu.\n---\n\nCreates a rich menu object and returns its ID. This only creates the menu definition. Uploading the menu image and setting the menu as the default menu or linking it to users are separate LINE API operations that this Endpoint does not cover.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description:
						'Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.',
					maximum: 300,
				},
				chatBarText: {
					type: 'string',
					description: 'Text displayed in the chat bar.',
					maximum: 14,
				},
				size: {
					type: 'object',
					description: 'Size of the rich menu in pixels.',
					properties: {
						width: {
							type: 'number',
							description:
								'Width of the rich menu in pixels. The rich menu image width must be between 800 and 2500.',
							minimum: 800,
							maximum: 2500,
						},
						height: {
							type: 'number',
							description:
								'Height of the rich menu in pixels. The rich menu image height must be at least 250.',
							minimum: 250,
						},
					},
					required: ['width', 'height'],
				},
				areas: {
					type: 'array',
					description:
						'Array of area objects which define the coordinates and size of tappable areas.',
					items: {
						type: 'object',
						description: 'Rich menu area.',
						properties: {
							bounds: {
								type: 'object',
								description: 'Position and size of the tappable area.',
								properties: {
									x: {
										type: 'number',
										description:
											'Horizontal position of the top-left corner of the tappable area, relative to the top-left corner of the image.',
										minimum: 0,
									},
									y: {
										type: 'number',
										description:
											'Vertical position of the top-left corner of the tappable area, relative to the top-left corner of the image.',
										minimum: 0,
									},
									width: {
										type: 'number',
										description: 'Width of the tappable area in pixels.',
										minimum: 1,
									},
									height: {
										type: 'number',
										description: 'Height of the tappable area in pixels.',
										minimum: 1,
									},
								},
								required: ['x', 'y', 'width', 'height'],
							},
							action: {
								type: 'object',
								description: 'Action performed when the user taps the area.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of the action.',
										enum: [
											'clipboard',
											'datetimepicker',
											'message',
											'postback',
											'richmenuswitch',
											'uri',
										],
									},
									label: { type: 'string', description: 'Label of the action.' },
								},
								required: ['type'],
								allOf: [
									{
										if: { properties: { type: { const: 'clipboard' } } },
										then: {
											type: 'object',
											properties: {
												clipboardText: {
													type: 'string',
													description:
														'Text that is copied to the clipboard. Maximum length is 1000 characters.',
													minimum: 1,
													maximum: 1000,
												},
											},
											required: ['clipboardText'],
										},
									},
									{
										if: { properties: { type: { const: 'datetimepicker' } } },
										then: {
											type: 'object',
											properties: {
												data: {
													type: 'string',
													description:
														'String sent back to your webhook in a postback event when a date or time is selected.',
													maximum: 300,
												},
												mode: {
													type: 'string',
													description: 'Type of picker to display.',
													enum: ['date', 'time', 'datetime'],
												},
												initial: {
													type: 'string',
													description:
														'Initially selected date or time, in the format that matches `mode`.',
												},
												max: {
													type: 'string',
													description:
														'Latest selectable date or time, in the format that matches `mode`.',
												},
												min: {
													type: 'string',
													description:
														'Earliest selectable date or time, in the format that matches `mode`.',
												},
											},
											required: ['data', 'mode'],
										},
									},
									{
										if: { properties: { type: { const: 'message' } } },
										then: {
											type: 'object',
											properties: {
												text: {
													type: 'string',
													description:
														'Text sent as a message by the user when the action is performed.',
													maximum: 300,
												},
											},
											required: ['text'],
										},
									},
									{
										if: { properties: { type: { const: 'postback' } } },
										then: {
											type: 'object',
											properties: {
												data: {
													type: 'string',
													description:
														'String sent back to your webhook in a postback event when the action is performed.',
													maximum: 300,
												},
												displayText: {
													type: 'string',
													description:
														'Text displayed in the chat as a message sent by the user when the action is performed.',
													maximum: 300,
												},
												inputOption: {
													type: 'string',
													description:
														'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
													default: '',
													enum: [
														'',
														'closeRichMenu',
														'openRichMenu',
														'openKeyboard',
														'openVoice',
													],
												},
												fillInText: {
													type: 'string',
													description:
														'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
												},
											},
											required: ['data'],
										},
									},
									{
										if: { properties: { type: { const: 'richmenuswitch' } } },
										then: {
											type: 'object',
											properties: {
												data: {
													type: 'string',
													description:
														'String sent back to your webhook in a postback event when the tab is switched.',
													maximum: 300,
												},
												richMenuAliasId: {
													type: 'string',
													description:
														'Alias ID of the rich menu to switch to.',
													maximum: 32,
												},
											},
											required: ['data', 'richMenuAliasId'],
										},
									},
									{
										if: { properties: { type: { const: 'uri' } } },
										then: {
											type: 'object',
											properties: {
												uri: {
													type: 'string',
													description:
														'URI opened when the action is performed.',
												},
												altUri: {
													type: 'object',
													description:
														'URI opened on LINE for macOS and Windows when the action is performed.',
													properties: {
														desktop: {
															type: 'string',
															description:
																'URI opened on LINE for macOS and Windows.',
															maximum: 1000,
														},
													},
													required: [],
												},
											},
											required: ['uri'],
										},
									},
								],
							},
						},
						required: ['bounds', 'action'],
					},
					maxItems: 20,
				},
				selected: {
					type: 'boolean',
					description:
						"If `true`, the rich menu is displayed by default. If `false`, it isn't.",
				},
			},
			required: ['name', 'chatBarText', 'size', 'areas', 'selected'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				richMenuId: { type: 'string', description: 'ID of the created rich menu.' },
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'deleteARichMenu',
		label: 'Delete a rich menu',
		description: 'Deletes a rich menu by its ID.',
		context:
			'---\nname: deleteARichMenu\ndescription: Deletes a rich menu by its ID.\n---\n\nPermanently deletes the rich menu with the given ID. This cannot be undone. Use `getARichMenu` or `listRichMenus` first to confirm the ID.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: { richMenuId: { type: 'string', description: 'ID of the rich menu.' } },
			required: ['richMenuId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'getAGroupMemberProfile',
		label: 'Get a group member profile',
		description:
			'Returns the profile of a member of a group chat that the LINE Official Account is in.',
		context:
			'---\nname: getAGroupMemberProfile\ndescription: Returns the profile of a member of a group chat that the LINE Official Account is in.\n---\n\nReturns the display name, user ID and profile image URL of one member of the group chat. Use `getGroupMemberUserIds` to find user IDs.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: { type: 'string', description: 'ID of the group chat.' },
				userId: { type: 'string', description: 'ID of the user.' },
			},
			required: ['groupId', 'userId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				displayName: { type: 'string', description: "User's display name." },
				userId: { type: 'string', description: 'User ID.' },
				pictureUrl: {
					type: 'string',
					description:
						"URL of the user's profile image. Not included in the response if the user doesn't have a profile image.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'getANumberOfFollowers',
		label: 'Get the number of followers',
		description:
			'Returns the number of users who have added the LINE Official Account on or before a specified date.',
		context:
			'---\nname: getANumberOfFollowers\ndescription: Returns the number of users who have added the LINE Official Account on or before a specified date.\n---\n\nReturns follower statistics for one day. The date must be formatted as `yyyyMMdd` in the UTC+9 timezone (for example `20191231`).\nThe response `status` shows the calculation status: `ready`, `unready` or `out_of_service`.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				date: {
					type: 'string',
					description:
						'Date for which to retrieve the number of followers. Format: `yyyyMMdd` (for example `20191231`). Timezone: UTC+9.',
					pattern: '^[0-9]{8}$',
				},
			},
			required: ['date'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				status: {
					type: 'string',
					description: 'Calculation status.',
					default: '',
					enum: ['', 'ready', 'unready', 'out_of_service'],
				},
				followers: {
					type: 'number',
					description:
						"The number of times, as of the specified date, that a user added this LINE Official Account as a friend for the first time. The number doesn't decrease even if a user later blocks the account or when they delete their LINE account. `null` until `status` is `ready`.",
				},
				targetedReaches: {
					type: 'number',
					description:
						'The number of users, as of the specified date, that the LINE Official Account can reach through targeted messages based on gender, age, and/or region. This number only includes users who are active on LINE or LINE services and whose demographics have a high level of certainty. `null` until `status` is `ready`.',
				},
				blocks: {
					type: 'number',
					description:
						'The number of users blocking the account as of the specified date. The number decreases when a user unblocks the account. `null` until `status` is `ready`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'getANumberOfMessageDeliveries',
		label: 'Get the number of message deliveries',
		description:
			'Returns the number of messages sent from the LINE Official Account on a specified day.',
		context:
			'---\nname: getANumberOfMessageDeliveries\ndescription: Returns the number of messages sent from the LINE Official Account on a specified day.\n---\n\nReturns the number of messages sent on one day, broken down by message type. The date must be formatted as `yyyyMMdd` in the UTC+9 timezone (for example `20191231`).\nThe response `status` shows the status of the counting process: `ready`, `unready` or `out_of_service`. The counts are returned only when `status` is `ready`; otherwise only `status` is returned.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				date: {
					type: 'string',
					description:
						'Date for which to retrieve the number of sent messages. Format: `yyyyMMdd` (for example `20191231`). Timezone: UTC+9.',
					pattern: '^[0-9]{8}$',
				},
			},
			required: ['date'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				status: {
					type: 'string',
					description:
						'Status of the counting process. The properties after `broadcast` are returned only when `status` is `ready`.',
					default: '',
					enum: ['', 'ready', 'unready', 'out_of_service'],
				},
				broadcast: {
					type: 'number',
					description:
						"Number of messages sent to all of this LINE Official Account's friends (broadcast messages).",
				},
				targeting: {
					type: 'number',
					description:
						"Number of messages sent to some of this LINE Official Account's friends, based on specific attributes (targeted messages).",
				},
				stepMessage: {
					type: 'number',
					description:
						'Number of messages sent with step messages in the LINE Official Account Manager. For more information, see [Step messages](https://www.linebiz.com/jp/manual/OfficialAccountManager/step-message/) (only available in Japanese) in LINE for Business.',
				},
				autoResponse: {
					type: 'number',
					description: 'Number of auto-response messages sent.',
				},
				welcomeResponse: {
					type: 'number',
					description: 'Number of greeting messages sent.',
				},
				chat: {
					type: 'number',
					description:
						'Number of messages sent from LINE Official Account Manager [Chat screen](https://www.linebiz.com/jp/manual/OfficialAccountManager/chats/) (only available in Japanese).',
				},
				apiBroadcast: {
					type: 'number',
					description:
						'Number of broadcast messages sent with the `Send broadcast message` Messaging API operation.',
				},
				apiPush: {
					type: 'number',
					description:
						'Number of push messages sent with the `Send push message` Messaging API operation.',
				},
				apiMulticast: {
					type: 'number',
					description:
						'Number of multicast messages sent with the `Send multicast message` Messaging API operation.',
				},
				apiNarrowcast: {
					type: 'number',
					description:
						'Number of narrowcast messages sent with the `Send narrowcast message` Messaging API operation.',
				},
				apiReply: {
					type: 'number',
					description:
						'Number of replies sent with the `Send reply message` Messaging API operation.',
				},
				ccAutoReply: {
					type: 'number',
					description: 'Number of messages sent by auto reply with LINE Chat Plus.',
				},
				ccManualReply: {
					type: 'number',
					description:
						'Number of messages sent by manual chat support with LINE Chat Plus.',
				},
				pnpNoticeMessage: {
					type: 'number',
					description:
						'Number of messages sent with [LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/) on the options for corporate customers.',
				},
				pnpCallToLine: {
					type: 'number',
					description:
						'Number of messages sent with Call to LINE. New registration for Call to LINE has been discontinued.',
				},
				thirdPartyChatTool: {
					type: 'number',
					description: 'Number of messages sent from third party chat tools.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'getARichMenu',
		label: 'Get a rich menu',
		description: 'Returns a rich menu by its ID.',
		context:
			'---\nname: getARichMenu\ndescription: Returns a rich menu by its ID.\n---\n\nReturns the rich menu with the given ID. Only rich menus created through the messaging API can be retrieved. Use `listRichMenus` to find IDs.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: { richMenuId: { type: 'string', description: 'ID of the rich menu.' } },
			required: ['richMenuId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				richMenuId: { type: 'string', description: 'ID of a rich menu.' },
				size: {
					type: 'object',
					description: 'Size of the rich menu in pixels.',
					properties: {
						width: {
							type: 'number',
							description:
								'Width of the rich menu in pixels. The rich menu image width must be between 800 and 2500.',
						},
						height: {
							type: 'number',
							description:
								'Height of the rich menu in pixels. The rich menu image height must be at least 250.',
						},
					},
					required: [],
				},
				selected: {
					type: 'boolean',
					description: '`true` to display the rich menu by default. Otherwise, `false`.',
				},
				name: {
					type: 'string',
					description:
						'Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.',
				},
				chatBarText: { type: 'string', description: 'Text displayed in the chat bar.' },
				areas: {
					type: 'array',
					description:
						'Array of area objects which define the coordinates and size of tappable areas.',
					items: {
						type: 'object',
						description: 'Rich menu area.',
						properties: {
							bounds: {
								type: 'object',
								description: 'Position and size of the tappable area.',
								properties: {
									x: {
										type: 'number',
										description:
											'Horizontal position of the top-left corner of the tappable area, relative to the top-left corner of the image.',
									},
									y: {
										type: 'number',
										description:
											'Vertical position of the top-left corner of the tappable area, relative to the top-left corner of the image.',
									},
									width: {
										type: 'number',
										description: 'Width of the tappable area in pixels.',
									},
									height: {
										type: 'number',
										description: 'Height of the tappable area in pixels.',
									},
								},
								required: [],
							},
							action: {
								type: 'object',
								description: 'Action performed when the user taps the area.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of the action.',
										default: '',
										enum: [
											'',
											'clipboard',
											'datetimepicker',
											'message',
											'postback',
											'richmenuswitch',
											'uri',
										],
									},
									label: { type: 'string', description: 'Label of the action.' },
								},
								required: [],
								allOf: [
									{
										if: { properties: { type: { const: 'clipboard' } } },
										then: {
											type: 'object',
											properties: {
												clipboardText: {
													type: 'string',
													description:
														'Text that is copied to the clipboard. Maximum length is 1000 characters.',
												},
											},
											required: [],
										},
									},
									{
										if: { properties: { type: { const: 'datetimepicker' } } },
										then: {
											type: 'object',
											properties: {
												data: {
													type: 'string',
													description:
														'String sent back to your webhook in a postback event when a date or time is selected.',
												},
												mode: {
													type: 'string',
													description: 'Type of picker to display.',
													default: '',
													enum: ['', 'date', 'time', 'datetime'],
												},
												initial: {
													type: 'string',
													description:
														'Initially selected date or time, in the format that matches `mode`.',
												},
												max: {
													type: 'string',
													description:
														'Latest selectable date or time, in the format that matches `mode`.',
												},
												min: {
													type: 'string',
													description:
														'Earliest selectable date or time, in the format that matches `mode`.',
												},
											},
											required: [],
										},
									},
									{
										if: { properties: { type: { const: 'message' } } },
										then: {
											type: 'object',
											properties: {
												text: {
													type: 'string',
													description:
														'Text sent as a message by the user when the action is performed.',
												},
											},
											required: [],
										},
									},
									{
										if: { properties: { type: { const: 'postback' } } },
										then: {
											type: 'object',
											properties: {
												data: {
													type: 'string',
													description:
														'String sent back to your webhook in a postback event when the action is performed.',
												},
												displayText: {
													type: 'string',
													description:
														'Text displayed in the chat as a message sent by the user when the action is performed.',
												},
												inputOption: {
													type: 'string',
													description:
														'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
													default: '',
													enum: [
														'',
														'closeRichMenu',
														'openRichMenu',
														'openKeyboard',
														'openVoice',
													],
												},
												fillInText: {
													type: 'string',
													description:
														'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
												},
											},
											required: [],
										},
									},
									{
										if: { properties: { type: { const: 'richmenuswitch' } } },
										then: {
											type: 'object',
											properties: {
												data: {
													type: 'string',
													description:
														'String sent back to your webhook in a postback event when the tab is switched.',
												},
												richMenuAliasId: {
													type: 'string',
													description:
														'Alias ID of the rich menu to switch to.',
												},
											},
											required: [],
										},
									},
									{
										if: { properties: { type: { const: 'uri' } } },
										then: {
											type: 'object',
											properties: {
												uri: {
													type: 'string',
													description:
														'URI opened when the action is performed.',
												},
												altUri: {
													type: 'object',
													description:
														'URI opened on LINE for macOS and Windows when the action is performed.',
													properties: {
														desktop: {
															type: 'string',
															description:
																'URI opened on LINE for macOS and Windows.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
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
		appName: 'line',
		appVersion: 1,
		endpointName: 'getARoomMemberProfile',
		label: 'Get a room member profile',
		description:
			'Returns the profile of a member of a multi-person chat that the LINE Official Account is in.',
		context:
			'---\nname: getARoomMemberProfile\ndescription: Returns the profile of a member of a multi-person chat that the LINE Official Account is in.\n---\n\nReturns the display name, user ID and profile image URL of one member of the multi-person chat. Use `getRoomMemberUserIds` to find user IDs.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				roomId: { type: 'string', description: 'ID of the multi-person chat.' },
				userId: { type: 'string', description: 'ID of the user.' },
			},
			required: ['roomId', 'userId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				displayName: { type: 'string', description: "User's display name." },
				userId: { type: 'string', description: 'User ID.' },
				pictureUrl: {
					type: 'string',
					description:
						"URL of the user's profile image. Not included in the response if the user doesn't have a profile image.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'getGroupMemberUserIds',
		label: 'List group member user IDs',
		description:
			'Returns the user IDs of the members of a group chat that the LINE Official Account is in.',
		context:
			'---\nname: getGroupMemberUserIds\ndescription: Returns the user IDs of the members of a group chat that the LINE Official Account is in.\n---\n\nReturns one page of member user IDs for the group chat. When the response contains `next`, call the Endpoint again with `start` set to that value to get the next page. Only users of LINE for iOS and LINE for Android are included. This feature is available only to verified or premium LINE Official Accounts.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: { type: 'string', description: 'ID of the group chat.' },
				start: {
					type: 'string',
					description:
						'Continuation token. Set it to the value of `next` from the previous response to get the next page of user IDs.',
				},
			},
			required: ['groupId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				memberIds: {
					type: 'array',
					description:
						'List of user IDs of the members in the group chat. Only users of LINE for iOS and LINE for Android are included.',
					items: { type: 'string', description: 'User ID of a member.' },
				},
				next: {
					type: 'string',
					description:
						'A continuation token to get the next array of user IDs of the members in the group chat. Returned only when there are remaining user IDs that were not returned in `memberIds` in the original request.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'getRoomMemberUserIds',
		label: 'List room member user IDs',
		description:
			'Returns the user IDs of the members of a multi-person chat that the LINE Official Account is in.',
		context:
			'---\nname: getRoomMemberUserIds\ndescription: Returns the user IDs of the members of a multi-person chat that the LINE Official Account is in.\n---\n\nReturns one page of member user IDs for the multi-person chat. When the response contains `next`, call the Endpoint again with `start` set to that value to get the next page. Only users of LINE for iOS and LINE for Android are included. This feature is available only to verified or premium LINE Official Accounts.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				roomId: { type: 'string', description: 'ID of the multi-person chat.' },
				start: {
					type: 'string',
					description:
						'Continuation token. Set it to the value of `next` from the previous response to get the next page of user IDs.',
				},
			},
			required: ['roomId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				memberIds: {
					type: 'array',
					description:
						'List of user IDs of the members in the multi-person chat. Only users of LINE for iOS and LINE for Android are included.',
					items: { type: 'string', description: 'User ID of a member.' },
				},
				next: {
					type: 'string',
					description:
						'A continuation token to get the next array of user IDs of the members in the multi-person chat. Returned only when there are remaining user IDs that were not returned in `memberIds` in the original request.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'leaveAGroup',
		label: 'Leave a group',
		description: 'Makes the LINE Official Account leave a group chat.',
		context:
			'---\nname: leaveAGroup\ndescription: Makes the LINE Official Account leave a group chat.\n---\n\nMakes the LINE Official Account leave the group chat. This cannot be undone through the API.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#leave-group).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: { groupId: { type: 'string', description: 'ID of the group chat.' } },
			required: ['groupId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'leaveARoom',
		label: 'Leave a room',
		description: 'Makes the LINE Official Account leave a multi-person chat.',
		context:
			'---\nname: leaveARoom\ndescription: Makes the LINE Official Account leave a multi-person chat.\n---\n\nMakes the LINE Official Account leave the multi-person chat. This cannot be undone through the API.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#leave-room).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: { roomId: { type: 'string', description: 'ID of the multi-person chat.' } },
			required: ['roomId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'listRichMenus',
		label: 'List rich menus',
		description: 'Returns the list of rich menus created through the messaging API.',
		context:
			'---\nname: listRichMenus\ndescription: Returns the list of rich menus created through the messaging API.\n---\n\nReturns all rich menus created through the messaging API. The request takes no parameters and returns every rich menu in a single response.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list).\n',
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				richmenus: {
					type: 'array',
					description: 'The list of rich menus.',
					items: {
						type: 'object',
						description: 'A rich menu.',
						properties: {
							richMenuId: { type: 'string', description: 'ID of a rich menu.' },
							size: {
								type: 'object',
								description: 'Size of the rich menu in pixels.',
								properties: {
									width: {
										type: 'number',
										description:
											'Width of the rich menu in pixels. The rich menu image width must be between 800 and 2500.',
									},
									height: {
										type: 'number',
										description:
											'Height of the rich menu in pixels. The rich menu image height must be at least 250.',
									},
								},
								required: [],
							},
							selected: {
								type: 'boolean',
								description:
									'`true` to display the rich menu by default. Otherwise, `false`.',
							},
							name: {
								type: 'string',
								description:
									'Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.',
							},
							chatBarText: {
								type: 'string',
								description: 'Text displayed in the chat bar.',
							},
							areas: {
								type: 'array',
								description:
									'Array of area objects which define the coordinates and size of tappable areas.',
								items: {
									type: 'object',
									description: 'Rich menu area.',
									properties: {
										bounds: {
											type: 'object',
											description: 'Position and size of the tappable area.',
											properties: {
												x: {
													type: 'number',
													description:
														'Horizontal position of the top-left corner of the tappable area, relative to the top-left corner of the image.',
												},
												y: {
													type: 'number',
													description:
														'Vertical position of the top-left corner of the tappable area, relative to the top-left corner of the image.',
												},
												width: {
													type: 'number',
													description:
														'Width of the tappable area in pixels.',
												},
												height: {
													type: 'number',
													description:
														'Height of the tappable area in pixels.',
												},
											},
											required: [],
										},
										action: {
											type: 'object',
											description:
												'Action performed when the user taps the area.',
											properties: {
												type: {
													type: 'string',
													description: 'Type of the action.',
													default: '',
													enum: [
														'',
														'clipboard',
														'datetimepicker',
														'message',
														'postback',
														'richmenuswitch',
														'uri',
													],
												},
												label: {
													type: 'string',
													description: 'Label of the action.',
												},
											},
											required: [],
											allOf: [
												{
													if: {
														properties: {
															type: { const: 'clipboard' },
														},
													},
													then: {
														type: 'object',
														properties: {
															clipboardText: {
																type: 'string',
																description:
																	'Text that is copied to the clipboard. Maximum length is 1000 characters.',
															},
														},
														required: [],
													},
												},
												{
													if: {
														properties: {
															type: { const: 'datetimepicker' },
														},
													},
													then: {
														type: 'object',
														properties: {
															data: {
																type: 'string',
																description:
																	'String sent back to your webhook in a postback event when a date or time is selected.',
															},
															mode: {
																type: 'string',
																description:
																	'Type of picker to display.',
																default: '',
																enum: [
																	'',
																	'date',
																	'time',
																	'datetime',
																],
															},
															initial: {
																type: 'string',
																description:
																	'Initially selected date or time, in the format that matches `mode`.',
															},
															max: {
																type: 'string',
																description:
																	'Latest selectable date or time, in the format that matches `mode`.',
															},
															min: {
																type: 'string',
																description:
																	'Earliest selectable date or time, in the format that matches `mode`.',
															},
														},
														required: [],
													},
												},
												{
													if: {
														properties: { type: { const: 'message' } },
													},
													then: {
														type: 'object',
														properties: {
															text: {
																type: 'string',
																description:
																	'Text sent as a message by the user when the action is performed.',
															},
														},
														required: [],
													},
												},
												{
													if: {
														properties: { type: { const: 'postback' } },
													},
													then: {
														type: 'object',
														properties: {
															data: {
																type: 'string',
																description:
																	'String sent back to your webhook in a postback event when the action is performed.',
															},
															displayText: {
																type: 'string',
																description:
																	'Text displayed in the chat as a message sent by the user when the action is performed.',
															},
															inputOption: {
																type: 'string',
																description:
																	'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																default: '',
																enum: [
																	'',
																	'closeRichMenu',
																	'openRichMenu',
																	'openKeyboard',
																	'openVoice',
																],
															},
															fillInText: {
																type: 'string',
																description:
																	'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
															},
														},
														required: [],
													},
												},
												{
													if: {
														properties: {
															type: { const: 'richmenuswitch' },
														},
													},
													then: {
														type: 'object',
														properties: {
															data: {
																type: 'string',
																description:
																	'String sent back to your webhook in a postback event when the tab is switched.',
															},
															richMenuAliasId: {
																type: 'string',
																description:
																	'Alias ID of the rich menu to switch to.',
															},
														},
														required: [],
													},
												},
												{
													if: { properties: { type: { const: 'uri' } } },
													then: {
														type: 'object',
														properties: {
															uri: {
																type: 'string',
																description:
																	'URI opened when the action is performed.',
															},
															altUri: {
																type: 'object',
																description:
																	'URI opened on LINE for macOS and Windows when the action is performed.',
																properties: {
																	desktop: {
																		type: 'string',
																		description:
																			'URI opened on LINE for macOS and Windows.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
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
			},
			required: [],
		},
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'sendABroadcastMessage',
		label: 'Send a broadcast message',
		description:
			'Sends a message to all users who have added the LINE Official Account as a friend.',
		context:
			"---\nname: sendABroadcastMessage\ndescription: Sends a message to all users who have added the LINE Official Account as a friend.\n---\n\nSends a broadcast message to all friends of the LINE Official Account through the LINE Messaging API. The message is delivered to LINE users outside the connected account, so it cannot be undone.\nUp to 5 message objects can be sent in one request. Broadcasting reaches every friend, so the cost against the monthly message quota can be high.\nUse `retryKey` when you retry a failed request so the message is not delivered twice.\nThe LINE Official Account must be allowed to message the recipients, and the account's monthly message quota applies.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message).\n",
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				messages: {
					type: 'array',
					description: 'List of message objects.',
					items: {
						type: 'object',
						description: 'A message object to send.',
						properties: {
							type: {
								type: 'string',
								description: 'Type of the message.',
								enum: [
									'text',
									'textV2',
									'sticker',
									'image',
									'video',
									'audio',
									'location',
									'imagemap',
									'template',
									'flex',
									'coupon',
								],
							},
							quickReply: {
								type: 'object',
								description: 'Quick reply buttons displayed with the message.',
								properties: {
									items: {
										type: 'array',
										description: 'Quick reply button objects.',
										items: {
											type: 'object',
											description: 'A quick reply button.',
											properties: {
												imageUrl: {
													type: 'string',
													description:
														'URL of the icon that is displayed at the beginning of the button.',
													maximum: 2000,
												},
												action: {
													type: 'object',
													description:
														'Action performed when the user taps the quick reply button.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of the action.',
															enum: [
																'camera',
																'cameraRoll',
																'clipboard',
																'datetimepicker',
																'location',
																'message',
																'postback',
																'uri',
															],
														},
														label: {
															type: 'string',
															description:
																'Label of the action. Required for quick reply buttons. Maximum length is 20 characters.',
														},
													},
													required: ['type'],
													allOf: [
														{
															if: {
																properties: {
																	type: { const: 'clipboard' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	clipboardText: {
																		type: 'string',
																		description:
																			'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																		minimum: 1,
																		maximum: 1000,
																	},
																},
																required: ['clipboardText'],
															},
														},
														{
															if: {
																properties: {
																	type: {
																		const: 'datetimepicker',
																	},
																},
															},
															then: {
																type: 'object',
																properties: {
																	data: {
																		type: 'string',
																		description:
																			'String sent back to your webhook in a postback event when a date or time is selected.',
																		maximum: 300,
																	},
																	mode: {
																		type: 'string',
																		description:
																			'Type of picker to display.',
																		enum: [
																			'date',
																			'time',
																			'datetime',
																		],
																	},
																	initial: {
																		type: 'string',
																		description:
																			'Initially selected date or time, in the format that matches `mode`.',
																	},
																	max: {
																		type: 'string',
																		description:
																			'Latest selectable date or time, in the format that matches `mode`.',
																	},
																	min: {
																		type: 'string',
																		description:
																			'Earliest selectable date or time, in the format that matches `mode`.',
																	},
																},
																required: ['data', 'mode'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'message' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'Text sent as a message by the user when the action is performed.',
																		maximum: 300,
																	},
																},
																required: ['text'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'postback' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	data: {
																		type: 'string',
																		description:
																			'String sent back to your webhook in a postback event when the action is performed.',
																		maximum: 300,
																	},
																	displayText: {
																		type: 'string',
																		description:
																			'Text displayed in the chat as a message sent by the user when the action is performed.',
																		maximum: 300,
																	},
																	inputOption: {
																		type: 'string',
																		description:
																			'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																		default: '',
																		enum: [
																			'',
																			'closeRichMenu',
																			'openRichMenu',
																			'openKeyboard',
																			'openVoice',
																		],
																	},
																	fillInText: {
																		type: 'string',
																		description:
																			'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																	},
																},
																required: ['data'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'uri' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	uri: {
																		type: 'string',
																		description:
																			'URI opened when the action is performed.',
																	},
																	altUri: {
																		type: 'object',
																		description:
																			'URI opened on LINE for macOS and Windows when the action is performed.',
																		properties: {
																			desktop: {
																				type: 'string',
																				description:
																					'URI opened on LINE for macOS and Windows.',
																				maximum: 1000,
																			},
																		},
																		required: [],
																	},
																},
																required: ['uri'],
															},
														},
													],
												},
												type: {
													type: 'string',
													description:
														'Type of the quick reply item. Always `action`.',
													default: '',
													enum: ['', 'action'],
												},
											},
											required: ['action'],
										},
										maxItems: 13,
									},
								},
								required: [],
							},
							sender: {
								type: 'object',
								description:
									'Overrides the display name and icon of the sender for this message.',
								properties: {
									name: {
										type: 'string',
										description:
											'Display name. Certain words such as `LINE` may not be used.',
										maximum: 20,
									},
									iconUrl: {
										type: 'string',
										description:
											'URL of the image to display as an icon when sending a message.',
										maximum: 2000,
									},
								},
								required: [],
							},
						},
						required: ['type'],
						allOf: [
							{
								if: { properties: { type: { const: 'text' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'Message text. Use `$` as a placeholder for each LINE emoji listed in `emojis`.',
											maximum: 5000,
										},
										emojis: {
											type: 'array',
											description:
												'LINE emoji to display in the message. The number of emojis must match the number of `$` placeholders in `text`.',
											items: {
												type: 'object',
												description:
													'A LINE emoji to display in the message.',
												properties: {
													index: {
														type: 'number',
														description:
															'Index position of the `$` placeholder in `text` that this emoji replaces. The first character is at position 0.',
													},
													productId: {
														type: 'string',
														description: 'Product ID of the emoji set.',
													},
													emojiId: {
														type: 'string',
														description:
															'ID of the emoji within the emoji set.',
													},
												},
												required: ['index', 'productId', 'emojiId'],
											},
											maxItems: 20,
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { type: { const: 'textV2' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'Message text. Parts enclosed in `{}` are replaced with the objects defined in `substitution`.',
										},
										substitution: {
											description:
												'A mapping that specifies substitutions for parts enclosed in `{}` within the `text` field.',
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { type: { const: 'sticker' } } },
								then: {
									type: 'object',
									properties: {
										packageId: {
											type: 'string',
											description: 'Package ID of the sticker.',
										},
										stickerId: {
											type: 'string',
											description: 'ID of the sticker.',
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['packageId', 'stickerId'],
								},
							},
							{
								if: { properties: { type: { const: 'image' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the original image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										previewImageUrl: {
											type: 'string',
											description:
												'URL of the preview image. Must be an HTTPS URL.',
											maximum: 2000,
										},
									},
									required: ['originalContentUrl', 'previewImageUrl'],
								},
							},
							{
								if: { properties: { type: { const: 'video' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the video file. Must be an HTTPS URL.',
											maximum: 2000,
										},
										previewImageUrl: {
											type: 'string',
											description:
												'URL of the video preview image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										trackingId: {
											type: 'string',
											description:
												'ID used to identify the video when tracking its view events.',
											maximum: 100,
										},
									},
									required: ['originalContentUrl', 'previewImageUrl'],
								},
							},
							{
								if: { properties: { type: { const: 'audio' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the audio file. Must be an HTTPS URL.',
											maximum: 2000,
										},
										duration: {
											type: 'number',
											description:
												'Length of the audio file in milliseconds.',
										},
									},
									required: ['originalContentUrl', 'duration'],
								},
							},
							{
								if: { properties: { type: { const: 'location' } } },
								then: {
									type: 'object',
									properties: {
										address: {
											type: 'string',
											description: 'Address of the location.',
											maximum: 100,
										},
										latitude: {
											type: 'number',
											description: 'Latitude of the location.',
										},
										longitude: {
											type: 'number',
											description: 'Longitude of the location.',
										},
									},
									required: ['title', 'address', 'latitude', 'longitude'],
								},
							},
							{
								if: { properties: { type: { const: 'imagemap' } } },
								then: {
									type: 'object',
									properties: {
										baseUrl: {
											type: 'string',
											description:
												'Base URL of the image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
											maximum: 1500,
										},
										baseSize: {
											type: 'object',
											description: 'Base size of the image map.',
											properties: {
												height: {
													type: 'number',
													description:
														'Height of the base image, in pixels.',
													maximum: 1040,
												},
												width: {
													type: 'number',
													description:
														'Width of the base image, in pixels.',
													maximum: 1040,
												},
											},
											required: ['height', 'width'],
										},
										actions: {
											type: 'array',
											description:
												'Actions performed when the user taps an area of the image map.',
											items: {
												type: 'object',
												description:
													'An action performed when the user taps an area of the image map.',
												properties: {
													type: {
														type: 'string',
														description: 'Type of the action.',
														enum: ['message', 'uri', 'clipboard'],
													},
													area: {
														type: 'object',
														description:
															'Tappable area of the image map.',
														properties: {
															x: {
																type: 'number',
																description:
																	'Horizontal position of the top-left corner of the area, relative to the left edge of the image.',
															},
															y: {
																type: 'number',
																description:
																	'Vertical position of the top-left corner of the area, relative to the top edge of the image.',
															},
															width: {
																type: 'number',
																description: 'Width of the area.',
															},
															height: {
																type: 'number',
																description: 'Height of the area.',
															},
														},
														required: ['x', 'y', 'width', 'height'],
													},
												},
												required: ['type', 'area'],
												allOf: [
													{
														if: {
															properties: {
																type: { const: 'message' },
															},
														},
														then: {
															type: 'object',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'Text sent as a message by the user when the action is performed.',
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['text'],
														},
													},
													{
														if: {
															properties: { type: { const: 'uri' } },
														},
														then: {
															type: 'object',
															properties: {
																linkUri: {
																	type: 'string',
																	description:
																		'URL opened when the user taps the area.',
																	maximum: 1000,
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['linkUri'],
														},
													},
													{
														if: {
															properties: {
																type: { const: 'clipboard' },
															},
														},
														then: {
															type: 'object',
															properties: {
																clipboardText: {
																	type: 'string',
																	description:
																		'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																	minimum: 1,
																	maximum: 1000,
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['clipboardText'],
														},
													},
												],
											},
											maxItems: 50,
										},
										video: {
											type: 'object',
											description: 'Video to play inside the image map.',
											properties: {
												originalContentUrl: {
													type: 'string',
													description:
														'URL of the video file. Must be an HTTPS URL.',
													maximum: 2000,
												},
												previewImageUrl: {
													type: 'string',
													description:
														'URL of the video preview image. Must be an HTTPS URL.',
													maximum: 2000,
												},
												area: {
													type: 'object',
													description:
														'Area of the image map in which the video is played.',
													properties: {
														x: {
															type: 'number',
															description:
																'Horizontal position of the top-left corner of the area, relative to the left edge of the image. Required when the parent object is provided.',
														},
														y: {
															type: 'number',
															description:
																'Vertical position of the top-left corner of the area, relative to the top edge of the image. Required when the parent object is provided.',
														},
														width: {
															type: 'number',
															description:
																'Width of the area. Required when the parent object is provided.',
														},
														height: {
															type: 'number',
															description:
																'Height of the area. Required when the parent object is provided.',
														},
													},
													required: [],
												},
												externalLink: {
													type: 'object',
													description:
														'Link displayed after the video finishes playing.',
													properties: {
														linkUri: {
															type: 'string',
															description:
																'URL opened when the user taps the link.',
															maximum: 1000,
														},
														label: {
															type: 'string',
															description: 'Text of the link.',
															maximum: 30,
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									required: ['baseUrl', 'altText', 'baseSize', 'actions'],
								},
							},
							{
								if: { properties: { type: { const: 'template' } } },
								then: {
									type: 'object',
									properties: {
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
											maximum: 1500,
										},
										template: {
											type: 'object',
											description: 'Template content.',
											properties: {
												type: {
													type: 'string',
													description: 'Type of the template.',
													enum: [
														'buttons',
														'confirm',
														'carousel',
														'image_carousel',
													],
												},
											},
											required: ['type'],
											allOf: [
												{
													if: {
														properties: { type: { const: 'buttons' } },
													},
													then: {
														type: 'object',
														properties: {
															thumbnailImageUrl: {
																type: 'string',
																description:
																	'URL of the image shown at the top of the template. Must be an HTTPS URL.',
																maximum: 2000,
															},
															imageAspectRatio: {
																type: 'string',
																description:
																	'Aspect ratio of the image.',
																default: '',
																enum: ['', 'rectangle', 'square'],
															},
															imageSize: {
																type: 'string',
																description:
																	'How the image is fitted in its area.',
																default: '',
																enum: ['', 'cover', 'contain'],
															},
															imageBackgroundColor: {
																type: 'string',
																description:
																	'Background color of the image area.',
															},
															text: {
																type: 'string',
																description:
																	'Message text of the template.',
																maximum: 160,
															},
															defaultAction: {
																type: 'object',
																description:
																	'Action performed when the user taps the image, title or text.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'Type of the action.',
																		enum: [
																			'clipboard',
																			'datetimepicker',
																			'message',
																			'postback',
																			'uri',
																		],
																	},
																	label: {
																		type: 'string',
																		description:
																			'Label of the action.',
																	},
																},
																required: ['type'],
																allOf: [
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'clipboard',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				clipboardText: {
																					type: 'string',
																					description:
																						'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																					minimum: 1,
																					maximum: 1000,
																				},
																			},
																			required: [
																				'clipboardText',
																			],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'datetimepicker',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				data: {
																					type: 'string',
																					description:
																						'String sent back to your webhook in a postback event when a date or time is selected.',
																					maximum: 300,
																				},
																				mode: {
																					type: 'string',
																					description:
																						'Type of picker to display.',
																					enum: [
																						'date',
																						'time',
																						'datetime',
																					],
																				},
																				initial: {
																					type: 'string',
																					description:
																						'Initially selected date or time, in the format that matches `mode`.',
																				},
																				max: {
																					type: 'string',
																					description:
																						'Latest selectable date or time, in the format that matches `mode`.',
																				},
																				min: {
																					type: 'string',
																					description:
																						'Earliest selectable date or time, in the format that matches `mode`.',
																				},
																			},
																			required: [
																				'data',
																				'mode',
																			],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'message',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				text: {
																					type: 'string',
																					description:
																						'Text sent as a message by the user when the action is performed.',
																					maximum: 300,
																				},
																			},
																			required: ['text'],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'postback',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				data: {
																					type: 'string',
																					description:
																						'String sent back to your webhook in a postback event when the action is performed.',
																					maximum: 300,
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'Text displayed in the chat as a message sent by the user when the action is performed.',
																					maximum: 300,
																				},
																				inputOption: {
																					type: 'string',
																					description:
																						'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																					default: '',
																					enum: [
																						'',
																						'closeRichMenu',
																						'openRichMenu',
																						'openKeyboard',
																						'openVoice',
																					],
																				},
																				fillInText: {
																					type: 'string',
																					description:
																						'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																				},
																			},
																			required: ['data'],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'uri',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'URI opened when the action is performed.',
																				},
																				altUri: {
																					type: 'object',
																					description:
																						'URI opened on LINE for macOS and Windows when the action is performed.',
																					properties: {
																						desktop: {
																							type: 'string',
																							description:
																								'URI opened on LINE for macOS and Windows.',
																							maximum: 1000,
																						},
																					},
																					required: [],
																				},
																			},
																			required: ['uri'],
																		},
																	},
																],
															},
															actions: {
																type: 'array',
																description:
																	'Actions performed when the user taps a button.',
																items: {
																	type: 'object',
																	description:
																		'An action (button) of the template.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Type of the action.',
																			enum: [
																				'clipboard',
																				'datetimepicker',
																				'message',
																				'postback',
																				'uri',
																			],
																		},
																		label: {
																			type: 'string',
																			description:
																				'Label of the action.',
																		},
																	},
																	required: ['type'],
																	allOf: [
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'clipboard',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					clipboardText: {
																						type: 'string',
																						description:
																							'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																						minimum: 1,
																						maximum: 1000,
																					},
																				},
																				required: [
																					'clipboardText',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'datetimepicker',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when a date or time is selected.',
																						maximum: 300,
																					},
																					mode: {
																						type: 'string',
																						description:
																							'Type of picker to display.',
																						enum: [
																							'date',
																							'time',
																							'datetime',
																						],
																					},
																					initial: {
																						type: 'string',
																						description:
																							'Initially selected date or time, in the format that matches `mode`.',
																					},
																					max: {
																						type: 'string',
																						description:
																							'Latest selectable date or time, in the format that matches `mode`.',
																					},
																					min: {
																						type: 'string',
																						description:
																							'Earliest selectable date or time, in the format that matches `mode`.',
																					},
																				},
																				required: [
																					'data',
																					'mode',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'message',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					text: {
																						type: 'string',
																						description:
																							'Text sent as a message by the user when the action is performed.',
																						maximum: 300,
																					},
																				},
																				required: ['text'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'postback',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when the action is performed.',
																						maximum: 300,
																					},
																					displayText: {
																						type: 'string',
																						description:
																							'Text displayed in the chat as a message sent by the user when the action is performed.',
																						maximum: 300,
																					},
																					inputOption: {
																						type: 'string',
																						description:
																							'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																						default: '',
																						enum: [
																							'',
																							'closeRichMenu',
																							'openRichMenu',
																							'openKeyboard',
																							'openVoice',
																						],
																					},
																					fillInText: {
																						type: 'string',
																						description:
																							'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																					},
																				},
																				required: ['data'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'uri',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					uri: {
																						type: 'string',
																						description:
																							'URI opened when the action is performed.',
																					},
																					altUri: {
																						type: 'object',
																						description:
																							'URI opened on LINE for macOS and Windows when the action is performed.',
																						properties:
																							{
																								desktop:
																									{
																										type: 'string',
																										description:
																											'URI opened on LINE for macOS and Windows.',
																										maximum: 1000,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: ['uri'],
																			},
																		},
																	],
																},
																maxItems: 4,
															},
														},
														required: ['text', 'actions'],
													},
												},
												{
													if: {
														properties: { type: { const: 'confirm' } },
													},
													then: {
														type: 'object',
														properties: {
															text: {
																type: 'string',
																description:
																	'Message text of the template.',
																maximum: 240,
															},
															actions: {
																type: 'array',
																description:
																	'The two actions (buttons) of the template.',
																items: {
																	type: 'object',
																	description:
																		'An action (button) of the template.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Type of the action.',
																			enum: [
																				'clipboard',
																				'datetimepicker',
																				'message',
																				'postback',
																				'uri',
																			],
																		},
																		label: {
																			type: 'string',
																			description:
																				'Label of the action.',
																		},
																	},
																	required: ['type'],
																	allOf: [
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'clipboard',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					clipboardText: {
																						type: 'string',
																						description:
																							'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																						minimum: 1,
																						maximum: 1000,
																					},
																				},
																				required: [
																					'clipboardText',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'datetimepicker',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when a date or time is selected.',
																						maximum: 300,
																					},
																					mode: {
																						type: 'string',
																						description:
																							'Type of picker to display.',
																						enum: [
																							'date',
																							'time',
																							'datetime',
																						],
																					},
																					initial: {
																						type: 'string',
																						description:
																							'Initially selected date or time, in the format that matches `mode`.',
																					},
																					max: {
																						type: 'string',
																						description:
																							'Latest selectable date or time, in the format that matches `mode`.',
																					},
																					min: {
																						type: 'string',
																						description:
																							'Earliest selectable date or time, in the format that matches `mode`.',
																					},
																				},
																				required: [
																					'data',
																					'mode',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'message',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					text: {
																						type: 'string',
																						description:
																							'Text sent as a message by the user when the action is performed.',
																						maximum: 300,
																					},
																				},
																				required: ['text'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'postback',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when the action is performed.',
																						maximum: 300,
																					},
																					displayText: {
																						type: 'string',
																						description:
																							'Text displayed in the chat as a message sent by the user when the action is performed.',
																						maximum: 300,
																					},
																					inputOption: {
																						type: 'string',
																						description:
																							'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																						default: '',
																						enum: [
																							'',
																							'closeRichMenu',
																							'openRichMenu',
																							'openKeyboard',
																							'openVoice',
																						],
																					},
																					fillInText: {
																						type: 'string',
																						description:
																							'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																					},
																				},
																				required: ['data'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'uri',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					uri: {
																						type: 'string',
																						description:
																							'URI opened when the action is performed.',
																					},
																					altUri: {
																						type: 'object',
																						description:
																							'URI opened on LINE for macOS and Windows when the action is performed.',
																						properties:
																							{
																								desktop:
																									{
																										type: 'string',
																										description:
																											'URI opened on LINE for macOS and Windows.',
																										maximum: 1000,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: ['uri'],
																			},
																		},
																	],
																},
																maxItems: 2,
															},
														},
														required: ['text', 'actions'],
													},
												},
												{
													if: {
														properties: { type: { const: 'carousel' } },
													},
													then: {
														type: 'object',
														properties: {
															columns: {
																type: 'array',
																description:
																	'Columns of the carousel.',
																items: {
																	type: 'object',
																	description:
																		'A column of the carousel template.',
																	properties: {
																		thumbnailImageUrl: {
																			type: 'string',
																			description:
																				'URL of the image shown at the top of the column. Must be an HTTPS URL.',
																			maximum: 2000,
																		},
																		imageBackgroundColor: {
																			type: 'string',
																			description:
																				'Background color of the image area.',
																		},
																		text: {
																			type: 'string',
																			description:
																				'Message text of the column.',
																			maximum: 120,
																		},
																		defaultAction: {
																			type: 'object',
																			description:
																				'Action performed when the user taps the image, title or text.',
																			properties: {
																				type: {
																					type: 'string',
																					description:
																						'Type of the action.',
																					enum: [
																						'clipboard',
																						'datetimepicker',
																						'message',
																						'postback',
																						'uri',
																					],
																				},
																				label: {
																					type: 'string',
																					description:
																						'Label of the action.',
																				},
																			},
																			required: ['type'],
																			allOf: [
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'clipboard',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								clipboardText:
																									{
																										type: 'string',
																										description:
																											'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																										minimum: 1,
																										maximum: 1000,
																									},
																							},
																						required: [
																							'clipboardText',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'datetimepicker',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when a date or time is selected.',
																									maximum: 300,
																								},
																								mode: {
																									type: 'string',
																									description:
																										'Type of picker to display.',
																									enum: [
																										'date',
																										'time',
																										'datetime',
																									],
																								},
																								initial:
																									{
																										type: 'string',
																										description:
																											'Initially selected date or time, in the format that matches `mode`.',
																									},
																								max: {
																									type: 'string',
																									description:
																										'Latest selectable date or time, in the format that matches `mode`.',
																								},
																								min: {
																									type: 'string',
																									description:
																										'Earliest selectable date or time, in the format that matches `mode`.',
																								},
																							},
																						required: [
																							'data',
																							'mode',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'message',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								text: {
																									type: 'string',
																									description:
																										'Text sent as a message by the user when the action is performed.',
																									maximum: 300,
																								},
																							},
																						required: [
																							'text',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'postback',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when the action is performed.',
																									maximum: 300,
																								},
																								displayText:
																									{
																										type: 'string',
																										description:
																											'Text displayed in the chat as a message sent by the user when the action is performed.',
																										maximum: 300,
																									},
																								inputOption:
																									{
																										type: 'string',
																										description:
																											'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																										default:
																											'',
																										enum: [
																											'',
																											'closeRichMenu',
																											'openRichMenu',
																											'openKeyboard',
																											'openVoice',
																										],
																									},
																								fillInText:
																									{
																										type: 'string',
																										description:
																											'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																									},
																							},
																						required: [
																							'data',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'uri',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								uri: {
																									type: 'string',
																									description:
																										'URI opened when the action is performed.',
																								},
																								altUri: {
																									type: 'object',
																									description:
																										'URI opened on LINE for macOS and Windows when the action is performed.',
																									properties:
																										{
																											desktop:
																												{
																													type: 'string',
																													description:
																														'URI opened on LINE for macOS and Windows.',
																													maximum: 1000,
																												},
																										},
																									required:
																										[],
																								},
																							},
																						required: [
																							'uri',
																						],
																					},
																				},
																			],
																		},
																		actions: {
																			type: 'array',
																			description:
																				'Actions performed when the user taps a button in the column.',
																			items: {
																				type: 'object',
																				description:
																					'An action (button) of the column.',
																				properties: {
																					type: {
																						type: 'string',
																						description:
																							'Type of the action.',
																						enum: [
																							'clipboard',
																							'datetimepicker',
																							'message',
																							'postback',
																							'uri',
																						],
																					},
																					label: {
																						type: 'string',
																						description:
																							'Label of the action.',
																					},
																				},
																				required: ['type'],
																				allOf: [
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'clipboard',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									clipboardText:
																										{
																											type: 'string',
																											description:
																												'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																											minimum: 1,
																											maximum: 1000,
																										},
																								},
																							required:
																								[
																									'clipboardText',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'datetimepicker',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									data: {
																										type: 'string',
																										description:
																											'String sent back to your webhook in a postback event when a date or time is selected.',
																										maximum: 300,
																									},
																									mode: {
																										type: 'string',
																										description:
																											'Type of picker to display.',
																										enum: [
																											'date',
																											'time',
																											'datetime',
																										],
																									},
																									initial:
																										{
																											type: 'string',
																											description:
																												'Initially selected date or time, in the format that matches `mode`.',
																										},
																									max: {
																										type: 'string',
																										description:
																											'Latest selectable date or time, in the format that matches `mode`.',
																									},
																									min: {
																										type: 'string',
																										description:
																											'Earliest selectable date or time, in the format that matches `mode`.',
																									},
																								},
																							required:
																								[
																									'data',
																									'mode',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'message',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									text: {
																										type: 'string',
																										description:
																											'Text sent as a message by the user when the action is performed.',
																										maximum: 300,
																									},
																								},
																							required:
																								[
																									'text',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'postback',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									data: {
																										type: 'string',
																										description:
																											'String sent back to your webhook in a postback event when the action is performed.',
																										maximum: 300,
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'Text displayed in the chat as a message sent by the user when the action is performed.',
																											maximum: 300,
																										},
																									inputOption:
																										{
																											type: 'string',
																											description:
																												'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																											default:
																												'',
																											enum: [
																												'',
																												'closeRichMenu',
																												'openRichMenu',
																												'openKeyboard',
																												'openVoice',
																											],
																										},
																									fillInText:
																										{
																											type: 'string',
																											description:
																												'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																										},
																								},
																							required:
																								[
																									'data',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'uri',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'URI opened when the action is performed.',
																									},
																									altUri: {
																										type: 'object',
																										description:
																											'URI opened on LINE for macOS and Windows when the action is performed.',
																										properties:
																											{
																												desktop:
																													{
																														type: 'string',
																														description:
																															'URI opened on LINE for macOS and Windows.',
																														maximum: 1000,
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[
																									'uri',
																								],
																						},
																					},
																				],
																			},
																			maxItems: 3,
																		},
																	},
																	required: ['text', 'actions'],
																},
																maxItems: 10,
															},
															imageAspectRatio: {
																type: 'string',
																description:
																	'Aspect ratio of the images in all columns.',
																default: '',
																enum: ['', 'rectangle', 'square'],
															},
															imageSize: {
																type: 'string',
																description:
																	'How the images are fitted in their area, for all columns.',
																default: '',
																enum: ['', 'cover', 'contain'],
															},
														},
														required: ['columns'],
													},
												},
												{
													if: {
														properties: {
															type: { const: 'image_carousel' },
														},
													},
													then: {
														type: 'object',
														properties: {
															columns: {
																type: 'array',
																description:
																	'Columns of the image carousel.',
																items: {
																	type: 'object',
																	description:
																		'A column of the image carousel.',
																	properties: {
																		imageUrl: {
																			type: 'string',
																			description:
																				'URL of the image. Must be an HTTPS URL.',
																			maximum: 2000,
																		},
																		action: {
																			type: 'object',
																			description:
																				'Action performed when the user taps the image.',
																			properties: {
																				type: {
																					type: 'string',
																					description:
																						'Type of the action.',
																					enum: [
																						'clipboard',
																						'datetimepicker',
																						'message',
																						'postback',
																						'uri',
																					],
																				},
																				label: {
																					type: 'string',
																					description:
																						'Label of the action.',
																				},
																			},
																			required: ['type'],
																			allOf: [
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'clipboard',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								clipboardText:
																									{
																										type: 'string',
																										description:
																											'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																										minimum: 1,
																										maximum: 1000,
																									},
																							},
																						required: [
																							'clipboardText',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'datetimepicker',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when a date or time is selected.',
																									maximum: 300,
																								},
																								mode: {
																									type: 'string',
																									description:
																										'Type of picker to display.',
																									enum: [
																										'date',
																										'time',
																										'datetime',
																									],
																								},
																								initial:
																									{
																										type: 'string',
																										description:
																											'Initially selected date or time, in the format that matches `mode`.',
																									},
																								max: {
																									type: 'string',
																									description:
																										'Latest selectable date or time, in the format that matches `mode`.',
																								},
																								min: {
																									type: 'string',
																									description:
																										'Earliest selectable date or time, in the format that matches `mode`.',
																								},
																							},
																						required: [
																							'data',
																							'mode',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'message',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								text: {
																									type: 'string',
																									description:
																										'Text sent as a message by the user when the action is performed.',
																									maximum: 300,
																								},
																							},
																						required: [
																							'text',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'postback',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when the action is performed.',
																									maximum: 300,
																								},
																								displayText:
																									{
																										type: 'string',
																										description:
																											'Text displayed in the chat as a message sent by the user when the action is performed.',
																										maximum: 300,
																									},
																								inputOption:
																									{
																										type: 'string',
																										description:
																											'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																										default:
																											'',
																										enum: [
																											'',
																											'closeRichMenu',
																											'openRichMenu',
																											'openKeyboard',
																											'openVoice',
																										],
																									},
																								fillInText:
																									{
																										type: 'string',
																										description:
																											'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																									},
																							},
																						required: [
																							'data',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'uri',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								uri: {
																									type: 'string',
																									description:
																										'URI opened when the action is performed.',
																								},
																								altUri: {
																									type: 'object',
																									description:
																										'URI opened on LINE for macOS and Windows when the action is performed.',
																									properties:
																										{
																											desktop:
																												{
																													type: 'string',
																													description:
																														'URI opened on LINE for macOS and Windows.',
																													maximum: 1000,
																												},
																										},
																									required:
																										[],
																								},
																							},
																						required: [
																							'uri',
																						],
																					},
																				},
																			],
																		},
																	},
																	required: [
																		'imageUrl',
																		'action',
																	],
																},
																maxItems: 10,
															},
														},
														required: ['columns'],
													},
												},
											],
										},
									},
									required: ['altText', 'template'],
								},
							},
							{
								if: { properties: { type: { const: 'flex' } } },
								then: {
									type: 'object',
									properties: {
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
										},
										contents: {
											description:
												'Flex Message container (a `bubble` or `carousel` object) as JSON. See the [Flex Message reference](https://developers.line.biz/en/reference/messaging-api/#flex-message).',
										},
									},
									required: ['altText', 'contents'],
								},
							},
							{
								if: { properties: { type: { const: 'coupon' } } },
								then: {
									type: 'object',
									properties: {
										couponId: {
											type: 'string',
											description: 'Unique identifier of the coupon.',
										},
										deliveryTag: {
											type: 'string',
											description:
												'Delivery route tag information. It can be used for analysis in LINE OA Manager.',
											maximum: 30,
										},
									},
									required: ['couponId'],
								},
							},
						],
					},
					minItems: 1,
					maxItems: 5,
				},
				notificationDisabled: {
					type: 'boolean',
					description:
						"If `true`, the user doesn't receive a push notification when the message is sent. If `false` (default), the user receives a push notification unless they have disabled push notifications in LINE or on their device.",
					default: false,
				},
				retryKey: {
					type: 'string',
					description:
						'A UUID in hexadecimal format (for example `123e4567-e89b-12d3-a456-426614174000`) that you generate yourself. It lets you safely retry a request without sending the message twice. Sent as the `X-Line-Retry-Key` header.',
				},
			},
			required: ['messages'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'line',
		appVersion: 1,
		endpointName: 'sendAReplyMessage',
		label: 'Send a reply message',
		description:
			'Sends a reply message in response to an event from a user, group chat or multi-person chat.',
		context:
			"---\nname: sendAReplyMessage\ndescription: Sends a reply message in response to an event from a user, group chat or multi-person chat.\n---\n\nSends a reply message in response to a webhook event through the LINE Messaging API. The message is delivered to LINE users outside the connected account, so it cannot be undone.\nSet `replyToken` to the reply token received in the webhook event. A reply token can be used only once and expires shortly after the event, so reply promptly.\nThe LINE Official Account must be allowed to message the recipients, and the account's monthly message quota applies.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#send-reply-message).\n",
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				replyToken: {
					type: 'string',
					description: 'Reply token received in a webhook event.',
				},
				messages: {
					type: 'array',
					description: 'List of message objects.',
					items: {
						type: 'object',
						description: 'A message object to send.',
						properties: {
							type: {
								type: 'string',
								description: 'Type of the message.',
								enum: [
									'text',
									'textV2',
									'sticker',
									'image',
									'video',
									'audio',
									'location',
									'imagemap',
									'template',
									'flex',
									'coupon',
								],
							},
							quickReply: {
								type: 'object',
								description: 'Quick reply buttons displayed with the message.',
								properties: {
									items: {
										type: 'array',
										description: 'Quick reply button objects.',
										items: {
											type: 'object',
											description: 'A quick reply button.',
											properties: {
												imageUrl: {
													type: 'string',
													description:
														'URL of the icon that is displayed at the beginning of the button.',
													maximum: 2000,
												},
												action: {
													type: 'object',
													description:
														'Action performed when the user taps the quick reply button.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of the action.',
															enum: [
																'camera',
																'cameraRoll',
																'clipboard',
																'datetimepicker',
																'location',
																'message',
																'postback',
																'uri',
															],
														},
														label: {
															type: 'string',
															description:
																'Label of the action. Required for quick reply buttons. Maximum length is 20 characters.',
														},
													},
													required: ['type'],
													allOf: [
														{
															if: {
																properties: {
																	type: { const: 'clipboard' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	clipboardText: {
																		type: 'string',
																		description:
																			'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																		minimum: 1,
																		maximum: 1000,
																	},
																},
																required: ['clipboardText'],
															},
														},
														{
															if: {
																properties: {
																	type: {
																		const: 'datetimepicker',
																	},
																},
															},
															then: {
																type: 'object',
																properties: {
																	data: {
																		type: 'string',
																		description:
																			'String sent back to your webhook in a postback event when a date or time is selected.',
																		maximum: 300,
																	},
																	mode: {
																		type: 'string',
																		description:
																			'Type of picker to display.',
																		enum: [
																			'date',
																			'time',
																			'datetime',
																		],
																	},
																	initial: {
																		type: 'string',
																		description:
																			'Initially selected date or time, in the format that matches `mode`.',
																	},
																	max: {
																		type: 'string',
																		description:
																			'Latest selectable date or time, in the format that matches `mode`.',
																	},
																	min: {
																		type: 'string',
																		description:
																			'Earliest selectable date or time, in the format that matches `mode`.',
																	},
																},
																required: ['data', 'mode'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'message' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'Text sent as a message by the user when the action is performed.',
																		maximum: 300,
																	},
																},
																required: ['text'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'postback' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	data: {
																		type: 'string',
																		description:
																			'String sent back to your webhook in a postback event when the action is performed.',
																		maximum: 300,
																	},
																	displayText: {
																		type: 'string',
																		description:
																			'Text displayed in the chat as a message sent by the user when the action is performed.',
																		maximum: 300,
																	},
																	inputOption: {
																		type: 'string',
																		description:
																			'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																		default: '',
																		enum: [
																			'',
																			'closeRichMenu',
																			'openRichMenu',
																			'openKeyboard',
																			'openVoice',
																		],
																	},
																	fillInText: {
																		type: 'string',
																		description:
																			'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																	},
																},
																required: ['data'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'uri' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	uri: {
																		type: 'string',
																		description:
																			'URI opened when the action is performed.',
																	},
																	altUri: {
																		type: 'object',
																		description:
																			'URI opened on LINE for macOS and Windows when the action is performed.',
																		properties: {
																			desktop: {
																				type: 'string',
																				description:
																					'URI opened on LINE for macOS and Windows.',
																				maximum: 1000,
																			},
																		},
																		required: [],
																	},
																},
																required: ['uri'],
															},
														},
													],
												},
												type: {
													type: 'string',
													description:
														'Type of the quick reply item. Always `action`.',
													default: '',
													enum: ['', 'action'],
												},
											},
											required: ['action'],
										},
										maxItems: 13,
									},
								},
								required: [],
							},
							sender: {
								type: 'object',
								description:
									'Overrides the display name and icon of the sender for this message.',
								properties: {
									name: {
										type: 'string',
										description:
											'Display name. Certain words such as `LINE` may not be used.',
										maximum: 20,
									},
									iconUrl: {
										type: 'string',
										description:
											'URL of the image to display as an icon when sending a message.',
										maximum: 2000,
									},
								},
								required: [],
							},
						},
						required: ['type'],
						allOf: [
							{
								if: { properties: { type: { const: 'text' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'Message text. Use `$` as a placeholder for each LINE emoji listed in `emojis`.',
											maximum: 5000,
										},
										emojis: {
											type: 'array',
											description:
												'LINE emoji to display in the message. The number of emojis must match the number of `$` placeholders in `text`.',
											items: {
												type: 'object',
												description:
													'A LINE emoji to display in the message.',
												properties: {
													index: {
														type: 'number',
														description:
															'Index position of the `$` placeholder in `text` that this emoji replaces. The first character is at position 0.',
													},
													productId: {
														type: 'string',
														description: 'Product ID of the emoji set.',
													},
													emojiId: {
														type: 'string',
														description:
															'ID of the emoji within the emoji set.',
													},
												},
												required: ['index', 'productId', 'emojiId'],
											},
											maxItems: 20,
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { type: { const: 'textV2' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'Message text. Parts enclosed in `{}` are replaced with the objects defined in `substitution`.',
										},
										substitution: {
											description:
												'A mapping that specifies substitutions for parts enclosed in `{}` within the `text` field.',
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { type: { const: 'sticker' } } },
								then: {
									type: 'object',
									properties: {
										packageId: {
											type: 'string',
											description: 'Package ID of the sticker.',
										},
										stickerId: {
											type: 'string',
											description: 'ID of the sticker.',
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['packageId', 'stickerId'],
								},
							},
							{
								if: { properties: { type: { const: 'image' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the original image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										previewImageUrl: {
											type: 'string',
											description:
												'URL of the preview image. Must be an HTTPS URL.',
											maximum: 2000,
										},
									},
									required: ['originalContentUrl', 'previewImageUrl'],
								},
							},
							{
								if: { properties: { type: { const: 'video' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the video file. Must be an HTTPS URL.',
											maximum: 2000,
										},
										previewImageUrl: {
											type: 'string',
											description:
												'URL of the video preview image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										trackingId: {
											type: 'string',
											description:
												'ID used to identify the video when tracking its view events.',
											maximum: 100,
										},
									},
									required: ['originalContentUrl', 'previewImageUrl'],
								},
							},
							{
								if: { properties: { type: { const: 'audio' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the audio file. Must be an HTTPS URL.',
											maximum: 2000,
										},
										duration: {
											type: 'number',
											description:
												'Length of the audio file in milliseconds.',
										},
									},
									required: ['originalContentUrl', 'duration'],
								},
							},
							{
								if: { properties: { type: { const: 'location' } } },
								then: {
									type: 'object',
									properties: {
										address: {
											type: 'string',
											description: 'Address of the location.',
											maximum: 100,
										},
										latitude: {
											type: 'number',
											description: 'Latitude of the location.',
										},
										longitude: {
											type: 'number',
											description: 'Longitude of the location.',
										},
									},
									required: ['title', 'address', 'latitude', 'longitude'],
								},
							},
							{
								if: { properties: { type: { const: 'imagemap' } } },
								then: {
									type: 'object',
									properties: {
										baseUrl: {
											type: 'string',
											description:
												'Base URL of the image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
											maximum: 1500,
										},
										baseSize: {
											type: 'object',
											description: 'Base size of the image map.',
											properties: {
												height: {
													type: 'number',
													description:
														'Height of the base image, in pixels.',
													maximum: 1040,
												},
												width: {
													type: 'number',
													description:
														'Width of the base image, in pixels.',
													maximum: 1040,
												},
											},
											required: ['height', 'width'],
										},
										actions: {
											type: 'array',
											description:
												'Actions performed when the user taps an area of the image map.',
											items: {
												type: 'object',
												description:
													'An action performed when the user taps an area of the image map.',
												properties: {
													type: {
														type: 'string',
														description: 'Type of the action.',
														enum: ['message', 'uri', 'clipboard'],
													},
													area: {
														type: 'object',
														description:
															'Tappable area of the image map.',
														properties: {
															x: {
																type: 'number',
																description:
																	'Horizontal position of the top-left corner of the area, relative to the left edge of the image.',
															},
															y: {
																type: 'number',
																description:
																	'Vertical position of the top-left corner of the area, relative to the top edge of the image.',
															},
															width: {
																type: 'number',
																description: 'Width of the area.',
															},
															height: {
																type: 'number',
																description: 'Height of the area.',
															},
														},
														required: ['x', 'y', 'width', 'height'],
													},
												},
												required: ['type', 'area'],
												allOf: [
													{
														if: {
															properties: {
																type: { const: 'message' },
															},
														},
														then: {
															type: 'object',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'Text sent as a message by the user when the action is performed.',
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['text'],
														},
													},
													{
														if: {
															properties: { type: { const: 'uri' } },
														},
														then: {
															type: 'object',
															properties: {
																linkUri: {
																	type: 'string',
																	description:
																		'URL opened when the user taps the area.',
																	maximum: 1000,
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['linkUri'],
														},
													},
													{
														if: {
															properties: {
																type: { const: 'clipboard' },
															},
														},
														then: {
															type: 'object',
															properties: {
																clipboardText: {
																	type: 'string',
																	description:
																		'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																	minimum: 1,
																	maximum: 1000,
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['clipboardText'],
														},
													},
												],
											},
											maxItems: 50,
										},
										video: {
											type: 'object',
											description: 'Video to play inside the image map.',
											properties: {
												originalContentUrl: {
													type: 'string',
													description:
														'URL of the video file. Must be an HTTPS URL.',
													maximum: 2000,
												},
												previewImageUrl: {
													type: 'string',
													description:
														'URL of the video preview image. Must be an HTTPS URL.',
													maximum: 2000,
												},
												area: {
													type: 'object',
													description:
														'Area of the image map in which the video is played.',
													properties: {
														x: {
															type: 'number',
															description:
																'Horizontal position of the top-left corner of the area, relative to the left edge of the image. Required when the parent object is provided.',
														},
														y: {
															type: 'number',
															description:
																'Vertical position of the top-left corner of the area, relative to the top edge of the image. Required when the parent object is provided.',
														},
														width: {
															type: 'number',
															description:
																'Width of the area. Required when the parent object is provided.',
														},
														height: {
															type: 'number',
															description:
																'Height of the area. Required when the parent object is provided.',
														},
													},
													required: [],
												},
												externalLink: {
													type: 'object',
													description:
														'Link displayed after the video finishes playing.',
													properties: {
														linkUri: {
															type: 'string',
															description:
																'URL opened when the user taps the link.',
															maximum: 1000,
														},
														label: {
															type: 'string',
															description: 'Text of the link.',
															maximum: 30,
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									required: ['baseUrl', 'altText', 'baseSize', 'actions'],
								},
							},
							{
								if: { properties: { type: { const: 'template' } } },
								then: {
									type: 'object',
									properties: {
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
											maximum: 1500,
										},
										template: {
											type: 'object',
											description: 'Template content.',
											properties: {
												type: {
													type: 'string',
													description: 'Type of the template.',
													enum: [
														'buttons',
														'confirm',
														'carousel',
														'image_carousel',
													],
												},
											},
											required: ['type'],
											allOf: [
												{
													if: {
														properties: { type: { const: 'buttons' } },
													},
													then: {
														type: 'object',
														properties: {
															thumbnailImageUrl: {
																type: 'string',
																description:
																	'URL of the image shown at the top of the template. Must be an HTTPS URL.',
																maximum: 2000,
															},
															imageAspectRatio: {
																type: 'string',
																description:
																	'Aspect ratio of the image.',
																default: '',
																enum: ['', 'rectangle', 'square'],
															},
															imageSize: {
																type: 'string',
																description:
																	'How the image is fitted in its area.',
																default: '',
																enum: ['', 'cover', 'contain'],
															},
															imageBackgroundColor: {
																type: 'string',
																description:
																	'Background color of the image area.',
															},
															text: {
																type: 'string',
																description:
																	'Message text of the template.',
																maximum: 160,
															},
															defaultAction: {
																type: 'object',
																description:
																	'Action performed when the user taps the image, title or text.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'Type of the action.',
																		enum: [
																			'clipboard',
																			'datetimepicker',
																			'message',
																			'postback',
																			'uri',
																		],
																	},
																	label: {
																		type: 'string',
																		description:
																			'Label of the action.',
																	},
																},
																required: ['type'],
																allOf: [
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'clipboard',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				clipboardText: {
																					type: 'string',
																					description:
																						'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																					minimum: 1,
																					maximum: 1000,
																				},
																			},
																			required: [
																				'clipboardText',
																			],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'datetimepicker',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				data: {
																					type: 'string',
																					description:
																						'String sent back to your webhook in a postback event when a date or time is selected.',
																					maximum: 300,
																				},
																				mode: {
																					type: 'string',
																					description:
																						'Type of picker to display.',
																					enum: [
																						'date',
																						'time',
																						'datetime',
																					],
																				},
																				initial: {
																					type: 'string',
																					description:
																						'Initially selected date or time, in the format that matches `mode`.',
																				},
																				max: {
																					type: 'string',
																					description:
																						'Latest selectable date or time, in the format that matches `mode`.',
																				},
																				min: {
																					type: 'string',
																					description:
																						'Earliest selectable date or time, in the format that matches `mode`.',
																				},
																			},
																			required: [
																				'data',
																				'mode',
																			],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'message',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				text: {
																					type: 'string',
																					description:
																						'Text sent as a message by the user when the action is performed.',
																					maximum: 300,
																				},
																			},
																			required: ['text'],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'postback',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				data: {
																					type: 'string',
																					description:
																						'String sent back to your webhook in a postback event when the action is performed.',
																					maximum: 300,
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'Text displayed in the chat as a message sent by the user when the action is performed.',
																					maximum: 300,
																				},
																				inputOption: {
																					type: 'string',
																					description:
																						'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																					default: '',
																					enum: [
																						'',
																						'closeRichMenu',
																						'openRichMenu',
																						'openKeyboard',
																						'openVoice',
																					],
																				},
																				fillInText: {
																					type: 'string',
																					description:
																						'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																				},
																			},
																			required: ['data'],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'uri',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'URI opened when the action is performed.',
																				},
																				altUri: {
																					type: 'object',
																					description:
																						'URI opened on LINE for macOS and Windows when the action is performed.',
																					properties: {
																						desktop: {
																							type: 'string',
																							description:
																								'URI opened on LINE for macOS and Windows.',
																							maximum: 1000,
																						},
																					},
																					required: [],
																				},
																			},
																			required: ['uri'],
																		},
																	},
																],
															},
															actions: {
																type: 'array',
																description:
																	'Actions performed when the user taps a button.',
																items: {
																	type: 'object',
																	description:
																		'An action (button) of the template.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Type of the action.',
																			enum: [
																				'clipboard',
																				'datetimepicker',
																				'message',
																				'postback',
																				'uri',
																			],
																		},
																		label: {
																			type: 'string',
																			description:
																				'Label of the action.',
																		},
																	},
																	required: ['type'],
																	allOf: [
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'clipboard',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					clipboardText: {
																						type: 'string',
																						description:
																							'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																						minimum: 1,
																						maximum: 1000,
																					},
																				},
																				required: [
																					'clipboardText',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'datetimepicker',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when a date or time is selected.',
																						maximum: 300,
																					},
																					mode: {
																						type: 'string',
																						description:
																							'Type of picker to display.',
																						enum: [
																							'date',
																							'time',
																							'datetime',
																						],
																					},
																					initial: {
																						type: 'string',
																						description:
																							'Initially selected date or time, in the format that matches `mode`.',
																					},
																					max: {
																						type: 'string',
																						description:
																							'Latest selectable date or time, in the format that matches `mode`.',
																					},
																					min: {
																						type: 'string',
																						description:
																							'Earliest selectable date or time, in the format that matches `mode`.',
																					},
																				},
																				required: [
																					'data',
																					'mode',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'message',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					text: {
																						type: 'string',
																						description:
																							'Text sent as a message by the user when the action is performed.',
																						maximum: 300,
																					},
																				},
																				required: ['text'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'postback',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when the action is performed.',
																						maximum: 300,
																					},
																					displayText: {
																						type: 'string',
																						description:
																							'Text displayed in the chat as a message sent by the user when the action is performed.',
																						maximum: 300,
																					},
																					inputOption: {
																						type: 'string',
																						description:
																							'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																						default: '',
																						enum: [
																							'',
																							'closeRichMenu',
																							'openRichMenu',
																							'openKeyboard',
																							'openVoice',
																						],
																					},
																					fillInText: {
																						type: 'string',
																						description:
																							'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																					},
																				},
																				required: ['data'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'uri',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					uri: {
																						type: 'string',
																						description:
																							'URI opened when the action is performed.',
																					},
																					altUri: {
																						type: 'object',
																						description:
																							'URI opened on LINE for macOS and Windows when the action is performed.',
																						properties:
																							{
																								desktop:
																									{
																										type: 'string',
																										description:
																											'URI opened on LINE for macOS and Windows.',
																										maximum: 1000,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: ['uri'],
																			},
																		},
																	],
																},
																maxItems: 4,
															},
														},
														required: ['text', 'actions'],
													},
												},
												{
													if: {
														properties: { type: { const: 'confirm' } },
													},
													then: {
														type: 'object',
														properties: {
															text: {
																type: 'string',
																description:
																	'Message text of the template.',
																maximum: 240,
															},
															actions: {
																type: 'array',
																description:
																	'The two actions (buttons) of the template.',
																items: {
																	type: 'object',
																	description:
																		'An action (button) of the template.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Type of the action.',
																			enum: [
																				'clipboard',
																				'datetimepicker',
																				'message',
																				'postback',
																				'uri',
																			],
																		},
																		label: {
																			type: 'string',
																			description:
																				'Label of the action.',
																		},
																	},
																	required: ['type'],
																	allOf: [
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'clipboard',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					clipboardText: {
																						type: 'string',
																						description:
																							'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																						minimum: 1,
																						maximum: 1000,
																					},
																				},
																				required: [
																					'clipboardText',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'datetimepicker',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when a date or time is selected.',
																						maximum: 300,
																					},
																					mode: {
																						type: 'string',
																						description:
																							'Type of picker to display.',
																						enum: [
																							'date',
																							'time',
																							'datetime',
																						],
																					},
																					initial: {
																						type: 'string',
																						description:
																							'Initially selected date or time, in the format that matches `mode`.',
																					},
																					max: {
																						type: 'string',
																						description:
																							'Latest selectable date or time, in the format that matches `mode`.',
																					},
																					min: {
																						type: 'string',
																						description:
																							'Earliest selectable date or time, in the format that matches `mode`.',
																					},
																				},
																				required: [
																					'data',
																					'mode',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'message',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					text: {
																						type: 'string',
																						description:
																							'Text sent as a message by the user when the action is performed.',
																						maximum: 300,
																					},
																				},
																				required: ['text'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'postback',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when the action is performed.',
																						maximum: 300,
																					},
																					displayText: {
																						type: 'string',
																						description:
																							'Text displayed in the chat as a message sent by the user when the action is performed.',
																						maximum: 300,
																					},
																					inputOption: {
																						type: 'string',
																						description:
																							'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																						default: '',
																						enum: [
																							'',
																							'closeRichMenu',
																							'openRichMenu',
																							'openKeyboard',
																							'openVoice',
																						],
																					},
																					fillInText: {
																						type: 'string',
																						description:
																							'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																					},
																				},
																				required: ['data'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'uri',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					uri: {
																						type: 'string',
																						description:
																							'URI opened when the action is performed.',
																					},
																					altUri: {
																						type: 'object',
																						description:
																							'URI opened on LINE for macOS and Windows when the action is performed.',
																						properties:
																							{
																								desktop:
																									{
																										type: 'string',
																										description:
																											'URI opened on LINE for macOS and Windows.',
																										maximum: 1000,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: ['uri'],
																			},
																		},
																	],
																},
																maxItems: 2,
															},
														},
														required: ['text', 'actions'],
													},
												},
												{
													if: {
														properties: { type: { const: 'carousel' } },
													},
													then: {
														type: 'object',
														properties: {
															columns: {
																type: 'array',
																description:
																	'Columns of the carousel.',
																items: {
																	type: 'object',
																	description:
																		'A column of the carousel template.',
																	properties: {
																		thumbnailImageUrl: {
																			type: 'string',
																			description:
																				'URL of the image shown at the top of the column. Must be an HTTPS URL.',
																			maximum: 2000,
																		},
																		imageBackgroundColor: {
																			type: 'string',
																			description:
																				'Background color of the image area.',
																		},
																		text: {
																			type: 'string',
																			description:
																				'Message text of the column.',
																			maximum: 120,
																		},
																		defaultAction: {
																			type: 'object',
																			description:
																				'Action performed when the user taps the image, title or text.',
																			properties: {
																				type: {
																					type: 'string',
																					description:
																						'Type of the action.',
																					enum: [
																						'clipboard',
																						'datetimepicker',
																						'message',
																						'postback',
																						'uri',
																					],
																				},
																				label: {
																					type: 'string',
																					description:
																						'Label of the action.',
																				},
																			},
																			required: ['type'],
																			allOf: [
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'clipboard',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								clipboardText:
																									{
																										type: 'string',
																										description:
																											'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																										minimum: 1,
																										maximum: 1000,
																									},
																							},
																						required: [
																							'clipboardText',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'datetimepicker',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when a date or time is selected.',
																									maximum: 300,
																								},
																								mode: {
																									type: 'string',
																									description:
																										'Type of picker to display.',
																									enum: [
																										'date',
																										'time',
																										'datetime',
																									],
																								},
																								initial:
																									{
																										type: 'string',
																										description:
																											'Initially selected date or time, in the format that matches `mode`.',
																									},
																								max: {
																									type: 'string',
																									description:
																										'Latest selectable date or time, in the format that matches `mode`.',
																								},
																								min: {
																									type: 'string',
																									description:
																										'Earliest selectable date or time, in the format that matches `mode`.',
																								},
																							},
																						required: [
																							'data',
																							'mode',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'message',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								text: {
																									type: 'string',
																									description:
																										'Text sent as a message by the user when the action is performed.',
																									maximum: 300,
																								},
																							},
																						required: [
																							'text',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'postback',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when the action is performed.',
																									maximum: 300,
																								},
																								displayText:
																									{
																										type: 'string',
																										description:
																											'Text displayed in the chat as a message sent by the user when the action is performed.',
																										maximum: 300,
																									},
																								inputOption:
																									{
																										type: 'string',
																										description:
																											'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																										default:
																											'',
																										enum: [
																											'',
																											'closeRichMenu',
																											'openRichMenu',
																											'openKeyboard',
																											'openVoice',
																										],
																									},
																								fillInText:
																									{
																										type: 'string',
																										description:
																											'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																									},
																							},
																						required: [
																							'data',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'uri',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								uri: {
																									type: 'string',
																									description:
																										'URI opened when the action is performed.',
																								},
																								altUri: {
																									type: 'object',
																									description:
																										'URI opened on LINE for macOS and Windows when the action is performed.',
																									properties:
																										{
																											desktop:
																												{
																													type: 'string',
																													description:
																														'URI opened on LINE for macOS and Windows.',
																													maximum: 1000,
																												},
																										},
																									required:
																										[],
																								},
																							},
																						required: [
																							'uri',
																						],
																					},
																				},
																			],
																		},
																		actions: {
																			type: 'array',
																			description:
																				'Actions performed when the user taps a button in the column.',
																			items: {
																				type: 'object',
																				description:
																					'An action (button) of the column.',
																				properties: {
																					type: {
																						type: 'string',
																						description:
																							'Type of the action.',
																						enum: [
																							'clipboard',
																							'datetimepicker',
																							'message',
																							'postback',
																							'uri',
																						],
																					},
																					label: {
																						type: 'string',
																						description:
																							'Label of the action.',
																					},
																				},
																				required: ['type'],
																				allOf: [
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'clipboard',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									clipboardText:
																										{
																											type: 'string',
																											description:
																												'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																											minimum: 1,
																											maximum: 1000,
																										},
																								},
																							required:
																								[
																									'clipboardText',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'datetimepicker',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									data: {
																										type: 'string',
																										description:
																											'String sent back to your webhook in a postback event when a date or time is selected.',
																										maximum: 300,
																									},
																									mode: {
																										type: 'string',
																										description:
																											'Type of picker to display.',
																										enum: [
																											'date',
																											'time',
																											'datetime',
																										],
																									},
																									initial:
																										{
																											type: 'string',
																											description:
																												'Initially selected date or time, in the format that matches `mode`.',
																										},
																									max: {
																										type: 'string',
																										description:
																											'Latest selectable date or time, in the format that matches `mode`.',
																									},
																									min: {
																										type: 'string',
																										description:
																											'Earliest selectable date or time, in the format that matches `mode`.',
																									},
																								},
																							required:
																								[
																									'data',
																									'mode',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'message',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									text: {
																										type: 'string',
																										description:
																											'Text sent as a message by the user when the action is performed.',
																										maximum: 300,
																									},
																								},
																							required:
																								[
																									'text',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'postback',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									data: {
																										type: 'string',
																										description:
																											'String sent back to your webhook in a postback event when the action is performed.',
																										maximum: 300,
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'Text displayed in the chat as a message sent by the user when the action is performed.',
																											maximum: 300,
																										},
																									inputOption:
																										{
																											type: 'string',
																											description:
																												'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																											default:
																												'',
																											enum: [
																												'',
																												'closeRichMenu',
																												'openRichMenu',
																												'openKeyboard',
																												'openVoice',
																											],
																										},
																									fillInText:
																										{
																											type: 'string',
																											description:
																												'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																										},
																								},
																							required:
																								[
																									'data',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'uri',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'URI opened when the action is performed.',
																									},
																									altUri: {
																										type: 'object',
																										description:
																											'URI opened on LINE for macOS and Windows when the action is performed.',
																										properties:
																											{
																												desktop:
																													{
																														type: 'string',
																														description:
																															'URI opened on LINE for macOS and Windows.',
																														maximum: 1000,
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[
																									'uri',
																								],
																						},
																					},
																				],
																			},
																			maxItems: 3,
																		},
																	},
																	required: ['text', 'actions'],
																},
																maxItems: 10,
															},
															imageAspectRatio: {
																type: 'string',
																description:
																	'Aspect ratio of the images in all columns.',
																default: '',
																enum: ['', 'rectangle', 'square'],
															},
															imageSize: {
																type: 'string',
																description:
																	'How the images are fitted in their area, for all columns.',
																default: '',
																enum: ['', 'cover', 'contain'],
															},
														},
														required: ['columns'],
													},
												},
												{
													if: {
														properties: {
															type: { const: 'image_carousel' },
														},
													},
													then: {
														type: 'object',
														properties: {
															columns: {
																type: 'array',
																description:
																	'Columns of the image carousel.',
																items: {
																	type: 'object',
																	description:
																		'A column of the image carousel.',
																	properties: {
																		imageUrl: {
																			type: 'string',
																			description:
																				'URL of the image. Must be an HTTPS URL.',
																			maximum: 2000,
																		},
																		action: {
																			type: 'object',
																			description:
																				'Action performed when the user taps the image.',
																			properties: {
																				type: {
																					type: 'string',
																					description:
																						'Type of the action.',
																					enum: [
																						'clipboard',
																						'datetimepicker',
																						'message',
																						'postback',
																						'uri',
																					],
																				},
																				label: {
																					type: 'string',
																					description:
																						'Label of the action.',
																				},
																			},
																			required: ['type'],
																			allOf: [
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'clipboard',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								clipboardText:
																									{
																										type: 'string',
																										description:
																											'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																										minimum: 1,
																										maximum: 1000,
																									},
																							},
																						required: [
																							'clipboardText',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'datetimepicker',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when a date or time is selected.',
																									maximum: 300,
																								},
																								mode: {
																									type: 'string',
																									description:
																										'Type of picker to display.',
																									enum: [
																										'date',
																										'time',
																										'datetime',
																									],
																								},
																								initial:
																									{
																										type: 'string',
																										description:
																											'Initially selected date or time, in the format that matches `mode`.',
																									},
																								max: {
																									type: 'string',
																									description:
																										'Latest selectable date or time, in the format that matches `mode`.',
																								},
																								min: {
																									type: 'string',
																									description:
																										'Earliest selectable date or time, in the format that matches `mode`.',
																								},
																							},
																						required: [
																							'data',
																							'mode',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'message',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								text: {
																									type: 'string',
																									description:
																										'Text sent as a message by the user when the action is performed.',
																									maximum: 300,
																								},
																							},
																						required: [
																							'text',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'postback',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when the action is performed.',
																									maximum: 300,
																								},
																								displayText:
																									{
																										type: 'string',
																										description:
																											'Text displayed in the chat as a message sent by the user when the action is performed.',
																										maximum: 300,
																									},
																								inputOption:
																									{
																										type: 'string',
																										description:
																											'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																										default:
																											'',
																										enum: [
																											'',
																											'closeRichMenu',
																											'openRichMenu',
																											'openKeyboard',
																											'openVoice',
																										],
																									},
																								fillInText:
																									{
																										type: 'string',
																										description:
																											'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																									},
																							},
																						required: [
																							'data',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'uri',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								uri: {
																									type: 'string',
																									description:
																										'URI opened when the action is performed.',
																								},
																								altUri: {
																									type: 'object',
																									description:
																										'URI opened on LINE for macOS and Windows when the action is performed.',
																									properties:
																										{
																											desktop:
																												{
																													type: 'string',
																													description:
																														'URI opened on LINE for macOS and Windows.',
																													maximum: 1000,
																												},
																										},
																									required:
																										[],
																								},
																							},
																						required: [
																							'uri',
																						],
																					},
																				},
																			],
																		},
																	},
																	required: [
																		'imageUrl',
																		'action',
																	],
																},
																maxItems: 10,
															},
														},
														required: ['columns'],
													},
												},
											],
										},
									},
									required: ['altText', 'template'],
								},
							},
							{
								if: { properties: { type: { const: 'flex' } } },
								then: {
									type: 'object',
									properties: {
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
										},
										contents: {
											description:
												'Flex Message container (a `bubble` or `carousel` object) as JSON. See the [Flex Message reference](https://developers.line.biz/en/reference/messaging-api/#flex-message).',
										},
									},
									required: ['altText', 'contents'],
								},
							},
							{
								if: { properties: { type: { const: 'coupon' } } },
								then: {
									type: 'object',
									properties: {
										couponId: {
											type: 'string',
											description: 'Unique identifier of the coupon.',
										},
										deliveryTag: {
											type: 'string',
											description:
												'Delivery route tag information. It can be used for analysis in LINE OA Manager.',
											maximum: 30,
										},
									},
									required: ['couponId'],
								},
							},
						],
					},
					minItems: 1,
					maxItems: 5,
				},
				notificationDisabled: {
					type: 'boolean',
					description:
						"If `true`, the user doesn't receive a push notification when the message is sent. If `false` (default), the user receives a push notification unless they have disabled push notifications in LINE or on their device.",
					default: false,
				},
			},
			required: ['replyToken', 'messages'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sentMessages: {
					type: 'array',
					description: 'Array of sent messages.',
					items: {
						type: 'object',
						description: 'A sent message.',
						properties: {
							id: { type: 'string', description: 'ID of the sent message.' },
							quoteToken: {
								type: 'string',
								description:
									'Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a push or reply message.',
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
		appName: 'line',
		appVersion: 1,
		endpointName: 'sendPushMessages',
		label: 'Send push messages',
		description: 'Sends a push message to a user, group chat or multi-person chat at any time.',
		context:
			"---\nname: sendPushMessages\ndescription: Sends a push message to a user, group chat or multi-person chat at any time.\n---\n\nSends a push message to a user, group chat or multi-person chat through the LINE Messaging API. The message is delivered to LINE users outside the connected account, so it cannot be undone.\nSet `to` to the user ID, group ID or room ID of the recipient. Up to 5 message objects can be sent in one request.\nUse `retryKey` when you retry a failed request so the message is not delivered twice.\nThe LINE Official Account must be allowed to message the recipients, and the account's monthly message quota applies.\n\nSee the [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/#send-push-message).\n",
		accounts: { line2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				to: { type: 'string', description: 'ID of the receiver.' },
				messages: {
					type: 'array',
					description: 'List of message objects.',
					items: {
						type: 'object',
						description: 'A message object to send.',
						properties: {
							type: {
								type: 'string',
								description: 'Type of the message.',
								enum: [
									'text',
									'textV2',
									'sticker',
									'image',
									'video',
									'audio',
									'location',
									'imagemap',
									'template',
									'flex',
									'coupon',
								],
							},
							quickReply: {
								type: 'object',
								description: 'Quick reply buttons displayed with the message.',
								properties: {
									items: {
										type: 'array',
										description: 'Quick reply button objects.',
										items: {
											type: 'object',
											description: 'A quick reply button.',
											properties: {
												imageUrl: {
													type: 'string',
													description:
														'URL of the icon that is displayed at the beginning of the button.',
													maximum: 2000,
												},
												action: {
													type: 'object',
													description:
														'Action performed when the user taps the quick reply button.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of the action.',
															enum: [
																'camera',
																'cameraRoll',
																'clipboard',
																'datetimepicker',
																'location',
																'message',
																'postback',
																'uri',
															],
														},
														label: {
															type: 'string',
															description:
																'Label of the action. Required for quick reply buttons. Maximum length is 20 characters.',
														},
													},
													required: ['type'],
													allOf: [
														{
															if: {
																properties: {
																	type: { const: 'clipboard' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	clipboardText: {
																		type: 'string',
																		description:
																			'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																		minimum: 1,
																		maximum: 1000,
																	},
																},
																required: ['clipboardText'],
															},
														},
														{
															if: {
																properties: {
																	type: {
																		const: 'datetimepicker',
																	},
																},
															},
															then: {
																type: 'object',
																properties: {
																	data: {
																		type: 'string',
																		description:
																			'String sent back to your webhook in a postback event when a date or time is selected.',
																		maximum: 300,
																	},
																	mode: {
																		type: 'string',
																		description:
																			'Type of picker to display.',
																		enum: [
																			'date',
																			'time',
																			'datetime',
																		],
																	},
																	initial: {
																		type: 'string',
																		description:
																			'Initially selected date or time, in the format that matches `mode`.',
																	},
																	max: {
																		type: 'string',
																		description:
																			'Latest selectable date or time, in the format that matches `mode`.',
																	},
																	min: {
																		type: 'string',
																		description:
																			'Earliest selectable date or time, in the format that matches `mode`.',
																	},
																},
																required: ['data', 'mode'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'message' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'Text sent as a message by the user when the action is performed.',
																		maximum: 300,
																	},
																},
																required: ['text'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'postback' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	data: {
																		type: 'string',
																		description:
																			'String sent back to your webhook in a postback event when the action is performed.',
																		maximum: 300,
																	},
																	displayText: {
																		type: 'string',
																		description:
																			'Text displayed in the chat as a message sent by the user when the action is performed.',
																		maximum: 300,
																	},
																	inputOption: {
																		type: 'string',
																		description:
																			'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																		default: '',
																		enum: [
																			'',
																			'closeRichMenu',
																			'openRichMenu',
																			'openKeyboard',
																			'openVoice',
																		],
																	},
																	fillInText: {
																		type: 'string',
																		description:
																			'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																	},
																},
																required: ['data'],
															},
														},
														{
															if: {
																properties: {
																	type: { const: 'uri' },
																},
															},
															then: {
																type: 'object',
																properties: {
																	uri: {
																		type: 'string',
																		description:
																			'URI opened when the action is performed.',
																	},
																	altUri: {
																		type: 'object',
																		description:
																			'URI opened on LINE for macOS and Windows when the action is performed.',
																		properties: {
																			desktop: {
																				type: 'string',
																				description:
																					'URI opened on LINE for macOS and Windows.',
																				maximum: 1000,
																			},
																		},
																		required: [],
																	},
																},
																required: ['uri'],
															},
														},
													],
												},
												type: {
													type: 'string',
													description:
														'Type of the quick reply item. Always `action`.',
													default: '',
													enum: ['', 'action'],
												},
											},
											required: ['action'],
										},
										maxItems: 13,
									},
								},
								required: [],
							},
							sender: {
								type: 'object',
								description:
									'Overrides the display name and icon of the sender for this message.',
								properties: {
									name: {
										type: 'string',
										description:
											'Display name. Certain words such as `LINE` may not be used.',
										maximum: 20,
									},
									iconUrl: {
										type: 'string',
										description:
											'URL of the image to display as an icon when sending a message.',
										maximum: 2000,
									},
								},
								required: [],
							},
						},
						required: ['type'],
						allOf: [
							{
								if: { properties: { type: { const: 'text' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'Message text. Use `$` as a placeholder for each LINE emoji listed in `emojis`.',
											maximum: 5000,
										},
										emojis: {
											type: 'array',
											description:
												'LINE emoji to display in the message. The number of emojis must match the number of `$` placeholders in `text`.',
											items: {
												type: 'object',
												description:
													'A LINE emoji to display in the message.',
												properties: {
													index: {
														type: 'number',
														description:
															'Index position of the `$` placeholder in `text` that this emoji replaces. The first character is at position 0.',
													},
													productId: {
														type: 'string',
														description: 'Product ID of the emoji set.',
													},
													emojiId: {
														type: 'string',
														description:
															'ID of the emoji within the emoji set.',
													},
												},
												required: ['index', 'productId', 'emojiId'],
											},
											maxItems: 20,
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { type: { const: 'textV2' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'Message text. Parts enclosed in `{}` are replaced with the objects defined in `substitution`.',
										},
										substitution: {
											description:
												'A mapping that specifies substitutions for parts enclosed in `{}` within the `text` field.',
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { type: { const: 'sticker' } } },
								then: {
									type: 'object',
									properties: {
										packageId: {
											type: 'string',
											description: 'Package ID of the sticker.',
										},
										stickerId: {
											type: 'string',
											description: 'ID of the sticker.',
										},
										quoteToken: {
											type: 'string',
											description:
												'Quote token of the message you want to quote.',
										},
									},
									required: ['packageId', 'stickerId'],
								},
							},
							{
								if: { properties: { type: { const: 'image' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the original image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										previewImageUrl: {
											type: 'string',
											description:
												'URL of the preview image. Must be an HTTPS URL.',
											maximum: 2000,
										},
									},
									required: ['originalContentUrl', 'previewImageUrl'],
								},
							},
							{
								if: { properties: { type: { const: 'video' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the video file. Must be an HTTPS URL.',
											maximum: 2000,
										},
										previewImageUrl: {
											type: 'string',
											description:
												'URL of the video preview image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										trackingId: {
											type: 'string',
											description:
												'ID used to identify the video when tracking its view events.',
											maximum: 100,
										},
									},
									required: ['originalContentUrl', 'previewImageUrl'],
								},
							},
							{
								if: { properties: { type: { const: 'audio' } } },
								then: {
									type: 'object',
									properties: {
										originalContentUrl: {
											type: 'string',
											description:
												'URL of the audio file. Must be an HTTPS URL.',
											maximum: 2000,
										},
										duration: {
											type: 'number',
											description:
												'Length of the audio file in milliseconds.',
										},
									},
									required: ['originalContentUrl', 'duration'],
								},
							},
							{
								if: { properties: { type: { const: 'location' } } },
								then: {
									type: 'object',
									properties: {
										address: {
											type: 'string',
											description: 'Address of the location.',
											maximum: 100,
										},
										latitude: {
											type: 'number',
											description: 'Latitude of the location.',
										},
										longitude: {
											type: 'number',
											description: 'Longitude of the location.',
										},
									},
									required: ['title', 'address', 'latitude', 'longitude'],
								},
							},
							{
								if: { properties: { type: { const: 'imagemap' } } },
								then: {
									type: 'object',
									properties: {
										baseUrl: {
											type: 'string',
											description:
												'Base URL of the image. Must be an HTTPS URL.',
											maximum: 2000,
										},
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
											maximum: 1500,
										},
										baseSize: {
											type: 'object',
											description: 'Base size of the image map.',
											properties: {
												height: {
													type: 'number',
													description:
														'Height of the base image, in pixels.',
													maximum: 1040,
												},
												width: {
													type: 'number',
													description:
														'Width of the base image, in pixels.',
													maximum: 1040,
												},
											},
											required: ['height', 'width'],
										},
										actions: {
											type: 'array',
											description:
												'Actions performed when the user taps an area of the image map.',
											items: {
												type: 'object',
												description:
													'An action performed when the user taps an area of the image map.',
												properties: {
													type: {
														type: 'string',
														description: 'Type of the action.',
														enum: ['message', 'uri', 'clipboard'],
													},
													area: {
														type: 'object',
														description:
															'Tappable area of the image map.',
														properties: {
															x: {
																type: 'number',
																description:
																	'Horizontal position of the top-left corner of the area, relative to the left edge of the image.',
															},
															y: {
																type: 'number',
																description:
																	'Vertical position of the top-left corner of the area, relative to the top edge of the image.',
															},
															width: {
																type: 'number',
																description: 'Width of the area.',
															},
															height: {
																type: 'number',
																description: 'Height of the area.',
															},
														},
														required: ['x', 'y', 'width', 'height'],
													},
												},
												required: ['type', 'area'],
												allOf: [
													{
														if: {
															properties: {
																type: { const: 'message' },
															},
														},
														then: {
															type: 'object',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'Text sent as a message by the user when the action is performed.',
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['text'],
														},
													},
													{
														if: {
															properties: { type: { const: 'uri' } },
														},
														then: {
															type: 'object',
															properties: {
																linkUri: {
																	type: 'string',
																	description:
																		'URL opened when the user taps the area.',
																	maximum: 1000,
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['linkUri'],
														},
													},
													{
														if: {
															properties: {
																type: { const: 'clipboard' },
															},
														},
														then: {
															type: 'object',
															properties: {
																clipboardText: {
																	type: 'string',
																	description:
																		'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																	minimum: 1,
																	maximum: 1000,
																},
																label: {
																	type: 'string',
																	description:
																		'Label of the action.',
																},
															},
															required: ['clipboardText'],
														},
													},
												],
											},
											maxItems: 50,
										},
										video: {
											type: 'object',
											description: 'Video to play inside the image map.',
											properties: {
												originalContentUrl: {
													type: 'string',
													description:
														'URL of the video file. Must be an HTTPS URL.',
													maximum: 2000,
												},
												previewImageUrl: {
													type: 'string',
													description:
														'URL of the video preview image. Must be an HTTPS URL.',
													maximum: 2000,
												},
												area: {
													type: 'object',
													description:
														'Area of the image map in which the video is played.',
													properties: {
														x: {
															type: 'number',
															description:
																'Horizontal position of the top-left corner of the area, relative to the left edge of the image. Required when the parent object is provided.',
														},
														y: {
															type: 'number',
															description:
																'Vertical position of the top-left corner of the area, relative to the top edge of the image. Required when the parent object is provided.',
														},
														width: {
															type: 'number',
															description:
																'Width of the area. Required when the parent object is provided.',
														},
														height: {
															type: 'number',
															description:
																'Height of the area. Required when the parent object is provided.',
														},
													},
													required: [],
												},
												externalLink: {
													type: 'object',
													description:
														'Link displayed after the video finishes playing.',
													properties: {
														linkUri: {
															type: 'string',
															description:
																'URL opened when the user taps the link.',
															maximum: 1000,
														},
														label: {
															type: 'string',
															description: 'Text of the link.',
															maximum: 30,
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									required: ['baseUrl', 'altText', 'baseSize', 'actions'],
								},
							},
							{
								if: { properties: { type: { const: 'template' } } },
								then: {
									type: 'object',
									properties: {
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
											maximum: 1500,
										},
										template: {
											type: 'object',
											description: 'Template content.',
											properties: {
												type: {
													type: 'string',
													description: 'Type of the template.',
													enum: [
														'buttons',
														'confirm',
														'carousel',
														'image_carousel',
													],
												},
											},
											required: ['type'],
											allOf: [
												{
													if: {
														properties: { type: { const: 'buttons' } },
													},
													then: {
														type: 'object',
														properties: {
															thumbnailImageUrl: {
																type: 'string',
																description:
																	'URL of the image shown at the top of the template. Must be an HTTPS URL.',
																maximum: 2000,
															},
															imageAspectRatio: {
																type: 'string',
																description:
																	'Aspect ratio of the image.',
																default: '',
																enum: ['', 'rectangle', 'square'],
															},
															imageSize: {
																type: 'string',
																description:
																	'How the image is fitted in its area.',
																default: '',
																enum: ['', 'cover', 'contain'],
															},
															imageBackgroundColor: {
																type: 'string',
																description:
																	'Background color of the image area.',
															},
															text: {
																type: 'string',
																description:
																	'Message text of the template.',
																maximum: 160,
															},
															defaultAction: {
																type: 'object',
																description:
																	'Action performed when the user taps the image, title or text.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'Type of the action.',
																		enum: [
																			'clipboard',
																			'datetimepicker',
																			'message',
																			'postback',
																			'uri',
																		],
																	},
																	label: {
																		type: 'string',
																		description:
																			'Label of the action.',
																	},
																},
																required: ['type'],
																allOf: [
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'clipboard',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				clipboardText: {
																					type: 'string',
																					description:
																						'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																					minimum: 1,
																					maximum: 1000,
																				},
																			},
																			required: [
																				'clipboardText',
																			],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'datetimepicker',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				data: {
																					type: 'string',
																					description:
																						'String sent back to your webhook in a postback event when a date or time is selected.',
																					maximum: 300,
																				},
																				mode: {
																					type: 'string',
																					description:
																						'Type of picker to display.',
																					enum: [
																						'date',
																						'time',
																						'datetime',
																					],
																				},
																				initial: {
																					type: 'string',
																					description:
																						'Initially selected date or time, in the format that matches `mode`.',
																				},
																				max: {
																					type: 'string',
																					description:
																						'Latest selectable date or time, in the format that matches `mode`.',
																				},
																				min: {
																					type: 'string',
																					description:
																						'Earliest selectable date or time, in the format that matches `mode`.',
																				},
																			},
																			required: [
																				'data',
																				'mode',
																			],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'message',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				text: {
																					type: 'string',
																					description:
																						'Text sent as a message by the user when the action is performed.',
																					maximum: 300,
																				},
																			},
																			required: ['text'],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'postback',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				data: {
																					type: 'string',
																					description:
																						'String sent back to your webhook in a postback event when the action is performed.',
																					maximum: 300,
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'Text displayed in the chat as a message sent by the user when the action is performed.',
																					maximum: 300,
																				},
																				inputOption: {
																					type: 'string',
																					description:
																						'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																					default: '',
																					enum: [
																						'',
																						'closeRichMenu',
																						'openRichMenu',
																						'openKeyboard',
																						'openVoice',
																					],
																				},
																				fillInText: {
																					type: 'string',
																					description:
																						'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																				},
																			},
																			required: ['data'],
																		},
																	},
																	{
																		if: {
																			properties: {
																				type: {
																					const: 'uri',
																				},
																			},
																		},
																		then: {
																			type: 'object',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'URI opened when the action is performed.',
																				},
																				altUri: {
																					type: 'object',
																					description:
																						'URI opened on LINE for macOS and Windows when the action is performed.',
																					properties: {
																						desktop: {
																							type: 'string',
																							description:
																								'URI opened on LINE for macOS and Windows.',
																							maximum: 1000,
																						},
																					},
																					required: [],
																				},
																			},
																			required: ['uri'],
																		},
																	},
																],
															},
															actions: {
																type: 'array',
																description:
																	'Actions performed when the user taps a button.',
																items: {
																	type: 'object',
																	description:
																		'An action (button) of the template.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Type of the action.',
																			enum: [
																				'clipboard',
																				'datetimepicker',
																				'message',
																				'postback',
																				'uri',
																			],
																		},
																		label: {
																			type: 'string',
																			description:
																				'Label of the action.',
																		},
																	},
																	required: ['type'],
																	allOf: [
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'clipboard',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					clipboardText: {
																						type: 'string',
																						description:
																							'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																						minimum: 1,
																						maximum: 1000,
																					},
																				},
																				required: [
																					'clipboardText',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'datetimepicker',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when a date or time is selected.',
																						maximum: 300,
																					},
																					mode: {
																						type: 'string',
																						description:
																							'Type of picker to display.',
																						enum: [
																							'date',
																							'time',
																							'datetime',
																						],
																					},
																					initial: {
																						type: 'string',
																						description:
																							'Initially selected date or time, in the format that matches `mode`.',
																					},
																					max: {
																						type: 'string',
																						description:
																							'Latest selectable date or time, in the format that matches `mode`.',
																					},
																					min: {
																						type: 'string',
																						description:
																							'Earliest selectable date or time, in the format that matches `mode`.',
																					},
																				},
																				required: [
																					'data',
																					'mode',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'message',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					text: {
																						type: 'string',
																						description:
																							'Text sent as a message by the user when the action is performed.',
																						maximum: 300,
																					},
																				},
																				required: ['text'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'postback',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when the action is performed.',
																						maximum: 300,
																					},
																					displayText: {
																						type: 'string',
																						description:
																							'Text displayed in the chat as a message sent by the user when the action is performed.',
																						maximum: 300,
																					},
																					inputOption: {
																						type: 'string',
																						description:
																							'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																						default: '',
																						enum: [
																							'',
																							'closeRichMenu',
																							'openRichMenu',
																							'openKeyboard',
																							'openVoice',
																						],
																					},
																					fillInText: {
																						type: 'string',
																						description:
																							'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																					},
																				},
																				required: ['data'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'uri',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					uri: {
																						type: 'string',
																						description:
																							'URI opened when the action is performed.',
																					},
																					altUri: {
																						type: 'object',
																						description:
																							'URI opened on LINE for macOS and Windows when the action is performed.',
																						properties:
																							{
																								desktop:
																									{
																										type: 'string',
																										description:
																											'URI opened on LINE for macOS and Windows.',
																										maximum: 1000,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: ['uri'],
																			},
																		},
																	],
																},
																maxItems: 4,
															},
														},
														required: ['text', 'actions'],
													},
												},
												{
													if: {
														properties: { type: { const: 'confirm' } },
													},
													then: {
														type: 'object',
														properties: {
															text: {
																type: 'string',
																description:
																	'Message text of the template.',
																maximum: 240,
															},
															actions: {
																type: 'array',
																description:
																	'The two actions (buttons) of the template.',
																items: {
																	type: 'object',
																	description:
																		'An action (button) of the template.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Type of the action.',
																			enum: [
																				'clipboard',
																				'datetimepicker',
																				'message',
																				'postback',
																				'uri',
																			],
																		},
																		label: {
																			type: 'string',
																			description:
																				'Label of the action.',
																		},
																	},
																	required: ['type'],
																	allOf: [
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'clipboard',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					clipboardText: {
																						type: 'string',
																						description:
																							'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																						minimum: 1,
																						maximum: 1000,
																					},
																				},
																				required: [
																					'clipboardText',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'datetimepicker',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when a date or time is selected.',
																						maximum: 300,
																					},
																					mode: {
																						type: 'string',
																						description:
																							'Type of picker to display.',
																						enum: [
																							'date',
																							'time',
																							'datetime',
																						],
																					},
																					initial: {
																						type: 'string',
																						description:
																							'Initially selected date or time, in the format that matches `mode`.',
																					},
																					max: {
																						type: 'string',
																						description:
																							'Latest selectable date or time, in the format that matches `mode`.',
																					},
																					min: {
																						type: 'string',
																						description:
																							'Earliest selectable date or time, in the format that matches `mode`.',
																					},
																				},
																				required: [
																					'data',
																					'mode',
																				],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'message',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					text: {
																						type: 'string',
																						description:
																							'Text sent as a message by the user when the action is performed.',
																						maximum: 300,
																					},
																				},
																				required: ['text'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'postback',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					data: {
																						type: 'string',
																						description:
																							'String sent back to your webhook in a postback event when the action is performed.',
																						maximum: 300,
																					},
																					displayText: {
																						type: 'string',
																						description:
																							'Text displayed in the chat as a message sent by the user when the action is performed.',
																						maximum: 300,
																					},
																					inputOption: {
																						type: 'string',
																						description:
																							'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																						default: '',
																						enum: [
																							'',
																							'closeRichMenu',
																							'openRichMenu',
																							'openKeyboard',
																							'openVoice',
																						],
																					},
																					fillInText: {
																						type: 'string',
																						description:
																							'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																					},
																				},
																				required: ['data'],
																			},
																		},
																		{
																			if: {
																				properties: {
																					type: {
																						const: 'uri',
																					},
																				},
																			},
																			then: {
																				type: 'object',
																				properties: {
																					uri: {
																						type: 'string',
																						description:
																							'URI opened when the action is performed.',
																					},
																					altUri: {
																						type: 'object',
																						description:
																							'URI opened on LINE for macOS and Windows when the action is performed.',
																						properties:
																							{
																								desktop:
																									{
																										type: 'string',
																										description:
																											'URI opened on LINE for macOS and Windows.',
																										maximum: 1000,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: ['uri'],
																			},
																		},
																	],
																},
																maxItems: 2,
															},
														},
														required: ['text', 'actions'],
													},
												},
												{
													if: {
														properties: { type: { const: 'carousel' } },
													},
													then: {
														type: 'object',
														properties: {
															columns: {
																type: 'array',
																description:
																	'Columns of the carousel.',
																items: {
																	type: 'object',
																	description:
																		'A column of the carousel template.',
																	properties: {
																		thumbnailImageUrl: {
																			type: 'string',
																			description:
																				'URL of the image shown at the top of the column. Must be an HTTPS URL.',
																			maximum: 2000,
																		},
																		imageBackgroundColor: {
																			type: 'string',
																			description:
																				'Background color of the image area.',
																		},
																		text: {
																			type: 'string',
																			description:
																				'Message text of the column.',
																			maximum: 120,
																		},
																		defaultAction: {
																			type: 'object',
																			description:
																				'Action performed when the user taps the image, title or text.',
																			properties: {
																				type: {
																					type: 'string',
																					description:
																						'Type of the action.',
																					enum: [
																						'clipboard',
																						'datetimepicker',
																						'message',
																						'postback',
																						'uri',
																					],
																				},
																				label: {
																					type: 'string',
																					description:
																						'Label of the action.',
																				},
																			},
																			required: ['type'],
																			allOf: [
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'clipboard',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								clipboardText:
																									{
																										type: 'string',
																										description:
																											'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																										minimum: 1,
																										maximum: 1000,
																									},
																							},
																						required: [
																							'clipboardText',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'datetimepicker',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when a date or time is selected.',
																									maximum: 300,
																								},
																								mode: {
																									type: 'string',
																									description:
																										'Type of picker to display.',
																									enum: [
																										'date',
																										'time',
																										'datetime',
																									],
																								},
																								initial:
																									{
																										type: 'string',
																										description:
																											'Initially selected date or time, in the format that matches `mode`.',
																									},
																								max: {
																									type: 'string',
																									description:
																										'Latest selectable date or time, in the format that matches `mode`.',
																								},
																								min: {
																									type: 'string',
																									description:
																										'Earliest selectable date or time, in the format that matches `mode`.',
																								},
																							},
																						required: [
																							'data',
																							'mode',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'message',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								text: {
																									type: 'string',
																									description:
																										'Text sent as a message by the user when the action is performed.',
																									maximum: 300,
																								},
																							},
																						required: [
																							'text',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'postback',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when the action is performed.',
																									maximum: 300,
																								},
																								displayText:
																									{
																										type: 'string',
																										description:
																											'Text displayed in the chat as a message sent by the user when the action is performed.',
																										maximum: 300,
																									},
																								inputOption:
																									{
																										type: 'string',
																										description:
																											'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																										default:
																											'',
																										enum: [
																											'',
																											'closeRichMenu',
																											'openRichMenu',
																											'openKeyboard',
																											'openVoice',
																										],
																									},
																								fillInText:
																									{
																										type: 'string',
																										description:
																											'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																									},
																							},
																						required: [
																							'data',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'uri',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								uri: {
																									type: 'string',
																									description:
																										'URI opened when the action is performed.',
																								},
																								altUri: {
																									type: 'object',
																									description:
																										'URI opened on LINE for macOS and Windows when the action is performed.',
																									properties:
																										{
																											desktop:
																												{
																													type: 'string',
																													description:
																														'URI opened on LINE for macOS and Windows.',
																													maximum: 1000,
																												},
																										},
																									required:
																										[],
																								},
																							},
																						required: [
																							'uri',
																						],
																					},
																				},
																			],
																		},
																		actions: {
																			type: 'array',
																			description:
																				'Actions performed when the user taps a button in the column.',
																			items: {
																				type: 'object',
																				description:
																					'An action (button) of the column.',
																				properties: {
																					type: {
																						type: 'string',
																						description:
																							'Type of the action.',
																						enum: [
																							'clipboard',
																							'datetimepicker',
																							'message',
																							'postback',
																							'uri',
																						],
																					},
																					label: {
																						type: 'string',
																						description:
																							'Label of the action.',
																					},
																				},
																				required: ['type'],
																				allOf: [
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'clipboard',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									clipboardText:
																										{
																											type: 'string',
																											description:
																												'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																											minimum: 1,
																											maximum: 1000,
																										},
																								},
																							required:
																								[
																									'clipboardText',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'datetimepicker',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									data: {
																										type: 'string',
																										description:
																											'String sent back to your webhook in a postback event when a date or time is selected.',
																										maximum: 300,
																									},
																									mode: {
																										type: 'string',
																										description:
																											'Type of picker to display.',
																										enum: [
																											'date',
																											'time',
																											'datetime',
																										],
																									},
																									initial:
																										{
																											type: 'string',
																											description:
																												'Initially selected date or time, in the format that matches `mode`.',
																										},
																									max: {
																										type: 'string',
																										description:
																											'Latest selectable date or time, in the format that matches `mode`.',
																									},
																									min: {
																										type: 'string',
																										description:
																											'Earliest selectable date or time, in the format that matches `mode`.',
																									},
																								},
																							required:
																								[
																									'data',
																									'mode',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'message',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									text: {
																										type: 'string',
																										description:
																											'Text sent as a message by the user when the action is performed.',
																										maximum: 300,
																									},
																								},
																							required:
																								[
																									'text',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'postback',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									data: {
																										type: 'string',
																										description:
																											'String sent back to your webhook in a postback event when the action is performed.',
																										maximum: 300,
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'Text displayed in the chat as a message sent by the user when the action is performed.',
																											maximum: 300,
																										},
																									inputOption:
																										{
																											type: 'string',
																											description:
																												'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																											default:
																												'',
																											enum: [
																												'',
																												'closeRichMenu',
																												'openRichMenu',
																												'openKeyboard',
																												'openVoice',
																											],
																										},
																									fillInText:
																										{
																											type: 'string',
																											description:
																												'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																										},
																								},
																							required:
																								[
																									'data',
																								],
																						},
																					},
																					{
																						if: {
																							properties:
																								{
																									type: {
																										const: 'uri',
																									},
																								},
																						},
																						then: {
																							type: 'object',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'URI opened when the action is performed.',
																									},
																									altUri: {
																										type: 'object',
																										description:
																											'URI opened on LINE for macOS and Windows when the action is performed.',
																										properties:
																											{
																												desktop:
																													{
																														type: 'string',
																														description:
																															'URI opened on LINE for macOS and Windows.',
																														maximum: 1000,
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[
																									'uri',
																								],
																						},
																					},
																				],
																			},
																			maxItems: 3,
																		},
																	},
																	required: ['text', 'actions'],
																},
																maxItems: 10,
															},
															imageAspectRatio: {
																type: 'string',
																description:
																	'Aspect ratio of the images in all columns.',
																default: '',
																enum: ['', 'rectangle', 'square'],
															},
															imageSize: {
																type: 'string',
																description:
																	'How the images are fitted in their area, for all columns.',
																default: '',
																enum: ['', 'cover', 'contain'],
															},
														},
														required: ['columns'],
													},
												},
												{
													if: {
														properties: {
															type: { const: 'image_carousel' },
														},
													},
													then: {
														type: 'object',
														properties: {
															columns: {
																type: 'array',
																description:
																	'Columns of the image carousel.',
																items: {
																	type: 'object',
																	description:
																		'A column of the image carousel.',
																	properties: {
																		imageUrl: {
																			type: 'string',
																			description:
																				'URL of the image. Must be an HTTPS URL.',
																			maximum: 2000,
																		},
																		action: {
																			type: 'object',
																			description:
																				'Action performed when the user taps the image.',
																			properties: {
																				type: {
																					type: 'string',
																					description:
																						'Type of the action.',
																					enum: [
																						'clipboard',
																						'datetimepicker',
																						'message',
																						'postback',
																						'uri',
																					],
																				},
																				label: {
																					type: 'string',
																					description:
																						'Label of the action.',
																				},
																			},
																			required: ['type'],
																			allOf: [
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'clipboard',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								clipboardText:
																									{
																										type: 'string',
																										description:
																											'Text that is copied to the clipboard. Maximum length is 1000 characters.',
																										minimum: 1,
																										maximum: 1000,
																									},
																							},
																						required: [
																							'clipboardText',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'datetimepicker',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when a date or time is selected.',
																									maximum: 300,
																								},
																								mode: {
																									type: 'string',
																									description:
																										'Type of picker to display.',
																									enum: [
																										'date',
																										'time',
																										'datetime',
																									],
																								},
																								initial:
																									{
																										type: 'string',
																										description:
																											'Initially selected date or time, in the format that matches `mode`.',
																									},
																								max: {
																									type: 'string',
																									description:
																										'Latest selectable date or time, in the format that matches `mode`.',
																								},
																								min: {
																									type: 'string',
																									description:
																										'Earliest selectable date or time, in the format that matches `mode`.',
																								},
																							},
																						required: [
																							'data',
																							'mode',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'message',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								text: {
																									type: 'string',
																									description:
																										'Text sent as a message by the user when the action is performed.',
																									maximum: 300,
																								},
																							},
																						required: [
																							'text',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'postback',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								data: {
																									type: 'string',
																									description:
																										'String sent back to your webhook in a postback event when the action is performed.',
																									maximum: 300,
																								},
																								displayText:
																									{
																										type: 'string',
																										description:
																											'Text displayed in the chat as a message sent by the user when the action is performed.',
																										maximum: 300,
																									},
																								inputOption:
																									{
																										type: 'string',
																										description:
																											'Opens a keyboard or a rich menu, or closes the rich menu, when the action is performed.',
																										default:
																											'',
																										enum: [
																											'',
																											'closeRichMenu',
																											'openRichMenu',
																											'openKeyboard',
																											'openVoice',
																										],
																									},
																								fillInText:
																									{
																										type: 'string',
																										description:
																											'Text pre-filled in the input field when `inputOption` is `openKeyboard`.',
																									},
																							},
																						required: [
																							'data',
																						],
																					},
																				},
																				{
																					if: {
																						properties:
																							{
																								type: {
																									const: 'uri',
																								},
																							},
																					},
																					then: {
																						type: 'object',
																						properties:
																							{
																								uri: {
																									type: 'string',
																									description:
																										'URI opened when the action is performed.',
																								},
																								altUri: {
																									type: 'object',
																									description:
																										'URI opened on LINE for macOS and Windows when the action is performed.',
																									properties:
																										{
																											desktop:
																												{
																													type: 'string',
																													description:
																														'URI opened on LINE for macOS and Windows.',
																													maximum: 1000,
																												},
																										},
																									required:
																										[],
																								},
																							},
																						required: [
																							'uri',
																						],
																					},
																				},
																			],
																		},
																	},
																	required: [
																		'imageUrl',
																		'action',
																	],
																},
																maxItems: 10,
															},
														},
														required: ['columns'],
													},
												},
											],
										},
									},
									required: ['altText', 'template'],
								},
							},
							{
								if: { properties: { type: { const: 'flex' } } },
								then: {
									type: 'object',
									properties: {
										altText: {
											type: 'string',
											description:
												'Alternative text shown in notifications and chat lists.',
										},
										contents: {
											description:
												'Flex Message container (a `bubble` or `carousel` object) as JSON. See the [Flex Message reference](https://developers.line.biz/en/reference/messaging-api/#flex-message).',
										},
									},
									required: ['altText', 'contents'],
								},
							},
							{
								if: { properties: { type: { const: 'coupon' } } },
								then: {
									type: 'object',
									properties: {
										couponId: {
											type: 'string',
											description: 'Unique identifier of the coupon.',
										},
										deliveryTag: {
											type: 'string',
											description:
												'Delivery route tag information. It can be used for analysis in LINE OA Manager.',
											maximum: 30,
										},
									},
									required: ['couponId'],
								},
							},
						],
					},
					minItems: 1,
					maxItems: 5,
				},
				notificationDisabled: {
					type: 'boolean',
					description:
						"If `true`, the user doesn't receive a push notification when the message is sent. If `false` (default), the user receives a push notification unless they have disabled push notifications in LINE or on their device.",
					default: false,
				},
				customAggregationUnits: {
					type: 'array',
					description:
						'List of aggregation unit names. Case-sensitive. This function can only be used by corporate users who have submitted the required applications.',
					items: {
						type: 'string',
						description: 'The name of an aggregation unit. Case-sensitive.',
						maximum: 30,
					},
					maxItems: 1,
				},
				retryKey: {
					type: 'string',
					description:
						'A UUID in hexadecimal format (for example `123e4567-e89b-12d3-a456-426614174000`) that you generate yourself. It lets you safely retry a request without sending the message twice. Sent as the `X-Line-Retry-Key` header.',
				},
			},
			required: ['to', 'messages'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sentMessages: {
					type: 'array',
					description: 'Array of sent messages.',
					items: {
						type: 'object',
						description: 'A sent message.',
						properties: {
							id: { type: 'string', description: 'ID of the sent message.' },
							quoteToken: {
								type: 'string',
								description:
									'Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a push or reply message.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
];
