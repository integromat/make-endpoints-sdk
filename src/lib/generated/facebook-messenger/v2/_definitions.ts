// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'facebook-messenger',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call to the Facebook Graph API.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Facebook Graph API used by the Messenger Platform, mirroring the "Make an API Call" module.\n\nThe base URL is `https://graph.facebook.com`. Provide the remaining path, including the Graph API version,\nin the URL parameter (e.g. `/v25.0/me`). Authentication is handled automatically via the app\'s connection:\nthe Page access token is appended as the `access_token` query parameter.\n\nRefer to the [Messenger Platform documentation](https://developers.facebook.com/documentation/business-messaging/messenger-platform) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { 'facebook-messenger2': { scope: [] } },
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
						'Enter the part of the URL that comes after `https://graph.facebook.com`, including the Graph API version. For example, `/v25.0/me`.',
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
					description:
						'The HTTP request query parameters. The `access_token` parameter is added automatically from the connection.',
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
		appName: 'facebook-messenger',
		appVersion: 2,
		endpointName: 'getSender',
		label: 'Get a sender',
		description: 'Retrieves the profile of a Messenger user by their page-scoped ID (PSID).',
		context:
			"---\nname: getSender\ndescription: Retrieves the profile of a Messenger user by their Page-scoped user ID (PSID).\n---\n\nRetrieves the public profile of a user who has messaged the Page.\n\nThis Endpoint wraps `GET /{PSID}` of the Facebook Graph API (base URL `https://graph.facebook.com/v25.0`, the Messenger Platform **User Profile API**). Authentication is handled automatically via the app's connection; the Page access token is sent as the `access_token` query parameter.\n\n- The PSID is a Page-scoped user ID obtained from a Messenger webhook event (`sender.id`). App-scoped IDs from Facebook Login do not work here.\n- `id` is always returned. `name`, `first_name`, `last_name` and `profile_pic` are available to every Page; `gender`, `locale` and `timezone` require the Page to be approved for the corresponding user-profile feature, otherwise the call fails with a permission error.\n- Only the fields listed in `fields` are returned, so the output contains a subset of the declared output parameters.\n\nReference: [User Profile API](https://developers.facebook.com/docs/messenger-platform/identity/user-profile/)\n",
		accounts: { 'facebook-messenger2': { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				psid: {
					type: 'string',
					description:
						'The Page-scoped ID of the user whose profile to retrieve. The user must have interacted with the Page through one of the [Messenger entry points](https://developers.facebook.com/docs/messenger-platform/discovery). IDs returned by [Facebook Login](https://developers.facebook.com/docs/facebook-login) are app-scoped and do not work with the Messenger Platform.',
				},
				fields: {
					type: 'string',
					description:
						'The profile fields to return. `id` is always returned. Fields other than `name`, `first_name`, `last_name` and `profile_pic` require the Page to be approved for additional [user profile permissions](https://developers.facebook.com/docs/messenger-platform/identity/user-profile/#requesting-feature-access-to-user-fields-for-the-page).',
					enum: [
						'name',
						'first_name',
						'last_name',
						'profile_pic',
						'gender',
						'locale',
						'timezone',
					],
				},
			},
			required: ['psid', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The Page-scoped ID of the user. Always returned.',
				},
				name: {
					type: 'string',
					description:
						"The user's full name. Returned when `name` is requested in `fields`.",
				},
				first_name: {
					type: 'string',
					description:
						"The user's first name. Returned when `first_name` is requested in `fields`.",
				},
				last_name: {
					type: 'string',
					description:
						"The user's last name. Returned when `last_name` is requested in `fields`.",
				},
				profile_pic: {
					type: 'string',
					description:
						"URL of the user's profile picture. The URL expires after a limited time. Returned when `profile_pic` is requested in `fields`.",
				},
				gender: {
					type: 'string',
					description:
						"The user's gender, e.g. `male` or `female`. Requires additional permission; returned when `gender` is requested in `fields`.",
				},
				locale: {
					type: 'string',
					description:
						"The user's locale as a language and region code, e.g. `en_US`. Requires additional permission; returned when `locale` is requested in `fields`.",
				},
				timezone: {
					type: 'number',
					description:
						"The user's timezone as an offset from UTC in hours, e.g. `-7`. Requires additional permission; returned when `timezone` is requested in `fields`.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-messenger',
		appVersion: 2,
		endpointName: 'sendMessage',
		label: 'Send a message',
		description:
			'Sends a text, attachment, or template message to a Messenger user via the Send API.',
		context:
			"---\nname: sendMessage\ndescription: Sends a text, media or template message to a Messenger user.\n---\n\nSends a message to a user who has messaged the Page.\n\nThis Endpoint wraps `POST /me/messages` of the Facebook Graph API (base URL `https://graph.facebook.com/v25.0`, the Messenger Platform **Send API**). Authentication is handled automatically via the app's connection; the Page access token is sent as the `access_token` query parameter.\n\n- `recipient` needs exactly one identifier — `id` (PSID) in most cases; `user_ref`, `post_id` or `comment_id` for plugin and Private Reply conversations.\n- `message` must contain exactly one of `text` (max 2000 characters), `attachment` (one media item or template) or `attachments` (up to 30 images). `quick_replies` and `metadata` may accompany any of them.\n- `reply_to.mid` turns the message into a reply to a specific earlier message (sent by the Page or by the user).\n- `messaging_type`: `RESPONSE` and `UPDATE` are allowed within 24 hours of the user's last message; `MESSAGE_TAG` is for non-promotional messages outside that window and requires `tag` (`HUMAN_AGENT`, which needs the Human Agent permission).\n- Media attachments (`image`, `audio`, `video`, `file`) take either a public `url` or an `attachment_id` from a previous upload (`uploadAttachment` or a message sent with `is_reusable: true`). Setting `is_reusable` returns `attachment_id` in the response.\n- `template` attachments: `generic` (up to 10 cards), `button` (text + 1–3 buttons), `media` (one image/video with at most one button), `product` (catalog products of the same Page) and `receipt`. The fields available under `payload` depend on `template_type`. Airline templates are not exposed.\n- Empty optional fields are removed from the request before it is sent, so omitted inputs do not reach the API as `null`.\n- To show a typing indicator or a read receipt instead of sending a message, use `sendSenderAction`.\n\nCommon error codes: `10` permissions (missing `pages_messaging` or invalid Page token, also returned outside the messaging window), `100` invalid parameter, `190` expired access token, `551` / `1545041` person not available, `613` rate limit exceeded.\n\nReference: [Send messages](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages)\n",
		accounts: { 'facebook-messenger2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				messaging_type: {
					type: 'string',
					description:
						'The messaging type of the message being sent. `RESPONSE` replies to a user message received within 24 hours, `UPDATE` is a proactive message sent within the 24-hour window, `MESSAGE_TAG` is a non-promotional message sent outside the window and requires `tag`.',
					enum: ['RESPONSE', 'UPDATE', 'MESSAGE_TAG'],
				},
				recipient: {
					type: 'object',
					description:
						'Identifies the conversation the message is sent to. Provide exactly one of the fields.',
					properties: {
						id: {
							type: 'string',
							description:
								'The Page-scoped ID of the user. The user must have interacted with the Page through one of the [Messenger entry points](https://developers.facebook.com/docs/messenger-platform/discovery). IDs returned by [Facebook Login](https://developers.facebook.com/docs/facebook-login) are app-scoped and do not work here.',
						},
						user_ref: {
							type: 'string',
							description:
								'A user reference obtained from the [checkbox plugin](https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin) or the [customer chat plugin](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin). Use instead of `id` when the PSID is not known yet.',
						},
						post_id: {
							type: 'string',
							description:
								'The ID of a visitor post to reply to privately. Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies).',
						},
						comment_id: {
							type: 'string',
							description:
								'The ID of a post comment to reply to privately. Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies).',
						},
					},
					required: [],
				},
				message: {
					type: 'object',
					description:
						'The message to send. Set exactly one of `text`, `attachment` or `attachments`.',
					properties: {
						text: {
							type: 'string',
							description:
								'The text of the message. Must be UTF-8 and at most 2000 characters. Previews are not shown for URLs in this field; use an attachment instead. Either `text` or `attachment` must be set.',
							maximum: 2000,
						},
						attachment: {
							type: 'object',
							description:
								'A media or template attachment. Either `text` or `attachment` must be set, but not both.',
							properties: {
								type: {
									type: 'string',
									description:
										'The type of the attachment: a media asset (`image`, `audio`, `video`, `file`) or a structured `template`.',
									default: '',
									enum: ['', 'image', 'audio', 'video', 'file', 'template'],
								},
							},
							required: [],
							allOf: [
								{
									if: { properties: { type: { const: 'image' } } },
									then: {
										type: 'object',
										properties: {
											payload: {
												type: 'object',
												description:
													'The media asset to send. Provide either `attachment_id` or `url`. Maximum asset size is 25 MB.',
												properties: {
													attachment_id: {
														type: 'string',
														description:
															'The ID of a previously uploaded asset (see `uploadAttachment`). Mutually exclusive with `url` and `is_reusable`. Allows reusing assets instead of uploading them with every message.',
													},
													url: {
														type: 'string',
														description:
															'URL of the file to send. Mutually exclusive with `attachment_id`. Maximum file size is 25 MB (after encoding); Meta downloads it with a timeout of 75 seconds for videos and 10 seconds for other types.',
													},
													is_reusable: {
														type: 'boolean',
														description:
															'Set to `true` to save the asset and make it sendable to other recipients; the response then contains `attachment_id`. Mutually exclusive with `attachment_id`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								{
									if: { properties: { type: { const: 'audio' } } },
									then: {
										type: 'object',
										properties: {
											payload: {
												type: 'object',
												description:
													'The media asset to send. Provide either `attachment_id` or `url`. Maximum asset size is 25 MB.',
												properties: {
													attachment_id: {
														type: 'string',
														description:
															'The ID of a previously uploaded asset (see `uploadAttachment`). Mutually exclusive with `url` and `is_reusable`. Allows reusing assets instead of uploading them with every message.',
													},
													url: {
														type: 'string',
														description:
															'URL of the file to send. Mutually exclusive with `attachment_id`. Maximum file size is 25 MB (after encoding); Meta downloads it with a timeout of 75 seconds for videos and 10 seconds for other types.',
													},
													is_reusable: {
														type: 'boolean',
														description:
															'Set to `true` to save the asset and make it sendable to other recipients; the response then contains `attachment_id`. Mutually exclusive with `attachment_id`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								{
									if: { properties: { type: { const: 'video' } } },
									then: {
										type: 'object',
										properties: {
											payload: {
												type: 'object',
												description:
													'The media asset to send. Provide either `attachment_id` or `url`. Maximum asset size is 25 MB.',
												properties: {
													attachment_id: {
														type: 'string',
														description:
															'The ID of a previously uploaded asset (see `uploadAttachment`). Mutually exclusive with `url` and `is_reusable`. Allows reusing assets instead of uploading them with every message.',
													},
													url: {
														type: 'string',
														description:
															'URL of the file to send. Mutually exclusive with `attachment_id`. Maximum file size is 25 MB (after encoding); Meta downloads it with a timeout of 75 seconds for videos and 10 seconds for other types.',
													},
													is_reusable: {
														type: 'boolean',
														description:
															'Set to `true` to save the asset and make it sendable to other recipients; the response then contains `attachment_id`. Mutually exclusive with `attachment_id`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								{
									if: { properties: { type: { const: 'file' } } },
									then: {
										type: 'object',
										properties: {
											payload: {
												type: 'object',
												description:
													'The media asset to send. Provide either `attachment_id` or `url`. Maximum asset size is 25 MB.',
												properties: {
													attachment_id: {
														type: 'string',
														description:
															'The ID of a previously uploaded asset (see `uploadAttachment`). Mutually exclusive with `url` and `is_reusable`. Allows reusing assets instead of uploading them with every message.',
													},
													url: {
														type: 'string',
														description:
															'URL of the file to send. Mutually exclusive with `attachment_id`. Maximum file size is 25 MB (after encoding); Meta downloads it with a timeout of 75 seconds for videos and 10 seconds for other types.',
													},
													is_reusable: {
														type: 'boolean',
														description:
															'Set to `true` to save the asset and make it sendable to other recipients; the response then contains `attachment_id`. Mutually exclusive with `attachment_id`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								{
									if: { properties: { type: { const: 'template' } } },
									then: {
										type: 'object',
										properties: {
											payload: {
												type: 'object',
												description:
													'The template payload. The fields available depend on `template_type`.',
												properties: {
													template_type: {
														type: 'string',
														description:
															'The type of the structured template to send.',
														enum: [
															'generic',
															'button',
															'product',
															'media',
															'receipt',
														],
													},
												},
												required: ['template_type'],
												allOf: [
													{
														if: {
															properties: {
																template_type: { const: 'generic' },
															},
														},
														then: {
															type: 'object',
															properties: {
																elements: {
																	type: 'array',
																	description:
																		'An array of up to 10 element objects, each rendered as a horizontally scrollable card. If more than one element is provided, the cards are shown as a carousel.',
																	items: {
																		type: 'object',
																		description:
																			'A card of the generic template.',
																		properties: {
																			subtitle: {
																				type: 'string',
																				description:
																					'The subtitle to display in the card. Maximum 80 characters.',
																				maximum: 80,
																			},
																			image_url: {
																				type: 'string',
																				description:
																					'The URL of the image to display in the card.',
																			},
																			default_action: {
																				type: 'object',
																				description:
																					'The default action executed when the card is tapped. Accepts the same fields as a URL button, except `title`.',
																				properties: {
																					type: {
																						type: 'string',
																						description:
																							'The type of the default action. Only `web_url` is supported.',
																						enum: [
																							'web_url',
																						],
																					},
																					url: {
																						type: 'string',
																						description:
																							'The URL opened when the card is tapped.',
																					},
																					webview_height_ratio:
																						{
																							type: 'string',
																							description:
																								'The height of the webview in which the URL is opened: `compact`, `tall` or `full`.',
																							default:
																								'',
																							enum: [
																								'',
																								'full',
																								'tall',
																								'compact',
																							],
																						},
																					messenger_extensions:
																						{
																							type: 'boolean',
																							description:
																								'Must be `true` if the URL uses Messenger Extensions.',
																							'x-nested':
																								{
																									type: 'object',
																									properties:
																										{
																											fallback_url:
																												{
																													type: 'string',
																													description:
																														'The URL to use on clients that do not support Messenger Extensions. If not defined, `url` is used as the fallback.',
																												},
																										},
																									required:
																										[],
																								},
																						},
																					webview_share_button:
																						{
																							type: 'string',
																							description:
																								'Set to `hide` to disable the share button in the webview (for sensitive information).',
																							default:
																								'',
																							enum: [
																								'',
																								'hide',
																							],
																						},
																				},
																				required: [
																					'type',
																					'url',
																				],
																			},
																			buttons: {
																				type: 'array',
																				description:
																					'An array of up to 3 buttons to append to the card.',
																				items: {
																					type: 'object',
																					description:
																						'A button. The fields available depend on `type`.',
																					properties: {
																						type: {
																							type: 'string',
																							description:
																								'The type of the button. See [Buttons](https://developers.facebook.com/docs/messenger-platform/send-messages/buttons).',
																							enum: [
																								'web_url',
																								'postback',
																								'phone_number',
																								'account_link',
																								'account_unlink',
																								'game_play',
																							],
																						},
																					},
																					required: [
																						'type',
																					],
																					allOf: [
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'web_url',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										url: {
																											type: 'string',
																											description:
																												'The URL opened in a mobile browser or webview when the button is tapped. Must use HTTPS when `messenger_extensions` is `true`.',
																										},
																										webview_height_ratio:
																											{
																												type: 'string',
																												description:
																													'The height of the webview in which the URL is opened: `compact`, `tall` or `full`.',
																												default:
																													'',
																												enum: [
																													'',
																													'full',
																													'tall',
																													'compact',
																												],
																											},
																										messenger_extensions:
																											{
																												type: 'boolean',
																												description:
																													'Must be `true` if the URL uses Messenger Extensions.',
																												'x-nested':
																													{
																														type: 'object',
																														properties:
																															{
																																fallback_url:
																																	{
																																		type: 'string',
																																		description:
																																			'The URL to use on clients that do not support Messenger Extensions. If not defined, `url` is used as the fallback.',
																																	},
																															},
																														required:
																															[],
																													},
																											},
																										webview_share_button:
																											{
																												type: 'string',
																												description:
																													'Set to `hide` to disable the share button in the webview (for sensitive information).',
																												default:
																													'',
																												enum: [
																													'',
																													'hide',
																												],
																											},
																									},
																								required:
																									[
																										'title',
																										'url',
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
																										payload:
																											{
																												type: 'string',
																												description:
																													'Custom data sent back to the webhook via a `messaging_postbacks` event when the button is tapped. Maximum 1000 characters.',
																												maximum: 1000,
																											},
																									},
																								required:
																									[
																										'title',
																										'payload',
																									],
																							},
																						},
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'phone_number',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										payload:
																											{
																												type: 'string',
																												description:
																													'The phone number to call. Format must be `+` followed by the country code, area code and local number, for example `+16505551234`.',
																												pattern: String.raw`^\+\d+$`,
																											},
																									},
																								required:
																									[
																										'title',
																										'payload',
																									],
																							},
																						},
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'account_link',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										url: {
																											type: 'string',
																											description:
																												'The Authentication Callback URL for [Account Linking](https://developers.facebook.com/docs/messenger-platform/identity/account-linking). Must use the HTTPS protocol.',
																										},
																									},
																								required:
																									[
																										'url',
																									],
																							},
																						},
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'game_play',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										payload:
																											{
																												type: 'string',
																												description:
																													'Custom data passed to the Instant Game when it is launched.',
																											},
																										game_metadata:
																											{
																												type: 'object',
																												description:
																													'Metadata for the Instant Game to launch.',
																												properties:
																													{
																														player_id:
																															{
																																type: 'string',
																																description:
																																	'The Instant Game player ID to play against.',
																															},
																														context_id:
																															{
																																type: 'string',
																																description:
																																	'The Instant Game context ID of the thread to play in.',
																															},
																													},
																												required:
																													[],
																											},
																									},
																								required:
																									[
																										'title',
																									],
																							},
																						},
																					],
																				},
																				maxItems: 3,
																			},
																		},
																		required: ['title'],
																	},
																	maxItems: 10,
																},
																image_aspect_ratio: {
																	type: 'string',
																	description:
																		'The aspect ratio used to render images specified by `image_url`: `horizontal` (1.91:1) or `square` (1:1).',
																	default: '',
																	enum: [
																		'',
																		'horizontal',
																		'square',
																	],
																},
															},
															required: ['elements'],
														},
													},
													{
														if: {
															properties: {
																template_type: { const: 'button' },
															},
														},
														then: {
															type: 'object',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'The UTF-8 text to display above the buttons. Maximum 640 characters.',
																	maximum: 640,
																},
																buttons: {
																	type: 'array',
																	description:
																		'An array of 1 to 3 buttons to display below the text.',
																	items: {
																		type: 'object',
																		description:
																			'A button. The fields available depend on `type`.',
																		properties: {
																			type: {
																				type: 'string',
																				description:
																					'The type of the button. See [Buttons](https://developers.facebook.com/docs/messenger-platform/send-messages/buttons).',
																				enum: [
																					'web_url',
																					'postback',
																					'phone_number',
																					'account_link',
																					'account_unlink',
																					'game_play',
																				],
																			},
																		},
																		required: ['type'],
																		allOf: [
																			{
																				if: {
																					properties: {
																						type: {
																							const: 'web_url',
																						},
																					},
																				},
																				then: {
																					type: 'object',
																					properties: {
																						url: {
																							type: 'string',
																							description:
																								'The URL opened in a mobile browser or webview when the button is tapped. Must use HTTPS when `messenger_extensions` is `true`.',
																						},
																						webview_height_ratio:
																							{
																								type: 'string',
																								description:
																									'The height of the webview in which the URL is opened: `compact`, `tall` or `full`.',
																								default:
																									'',
																								enum: [
																									'',
																									'full',
																									'tall',
																									'compact',
																								],
																							},
																						messenger_extensions:
																							{
																								type: 'boolean',
																								description:
																									'Must be `true` if the URL uses Messenger Extensions.',
																								'x-nested':
																									{
																										type: 'object',
																										properties:
																											{
																												fallback_url:
																													{
																														type: 'string',
																														description:
																															'The URL to use on clients that do not support Messenger Extensions. If not defined, `url` is used as the fallback.',
																													},
																											},
																										required:
																											[],
																									},
																							},
																						webview_share_button:
																							{
																								type: 'string',
																								description:
																									'Set to `hide` to disable the share button in the webview (for sensitive information).',
																								default:
																									'',
																								enum: [
																									'',
																									'hide',
																								],
																							},
																					},
																					required: [
																						'title',
																						'url',
																					],
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
																						payload: {
																							type: 'string',
																							description:
																								'Custom data sent back to the webhook via a `messaging_postbacks` event when the button is tapped. Maximum 1000 characters.',
																							maximum: 1000,
																						},
																					},
																					required: [
																						'title',
																						'payload',
																					],
																				},
																			},
																			{
																				if: {
																					properties: {
																						type: {
																							const: 'phone_number',
																						},
																					},
																				},
																				then: {
																					type: 'object',
																					properties: {
																						payload: {
																							type: 'string',
																							description:
																								'The phone number to call. Format must be `+` followed by the country code, area code and local number, for example `+16505551234`.',
																							pattern: String.raw`^\+\d+$`,
																						},
																					},
																					required: [
																						'title',
																						'payload',
																					],
																				},
																			},
																			{
																				if: {
																					properties: {
																						type: {
																							const: 'account_link',
																						},
																					},
																				},
																				then: {
																					type: 'object',
																					properties: {
																						url: {
																							type: 'string',
																							description:
																								'The Authentication Callback URL for [Account Linking](https://developers.facebook.com/docs/messenger-platform/identity/account-linking). Must use the HTTPS protocol.',
																						},
																					},
																					required: [
																						'url',
																					],
																				},
																			},
																			{
																				if: {
																					properties: {
																						type: {
																							const: 'game_play',
																						},
																					},
																				},
																				then: {
																					type: 'object',
																					properties: {
																						payload: {
																							type: 'string',
																							description:
																								'Custom data passed to the Instant Game when it is launched.',
																						},
																						game_metadata:
																							{
																								type: 'object',
																								description:
																									'Metadata for the Instant Game to launch.',
																								properties:
																									{
																										player_id:
																											{
																												type: 'string',
																												description:
																													'The Instant Game player ID to play against.',
																											},
																										context_id:
																											{
																												type: 'string',
																												description:
																													'The Instant Game context ID of the thread to play in.',
																											},
																									},
																								required:
																									[],
																							},
																					},
																					required: [
																						'title',
																					],
																				},
																			},
																		],
																	},
																	maxItems: 3,
																},
															},
															required: ['text'],
														},
													},
													{
														if: {
															properties: {
																template_type: { const: 'product' },
															},
														},
														then: {
															type: 'object',
															properties: {
																elements: {
																	type: 'array',
																	description:
																		'An array of product elements. All products must belong to the same Page.',
																	items: {
																		type: 'object',
																		description:
																			'A product element.',
																		properties: {
																			id: {
																				type: 'string',
																				description:
																					'The ID of the product. Product IDs can be obtained via the [Catalog API](https://developers.facebook.com/docs/marketing-api/catalog/) or [Commerce Manager](https://www.facebook.com/business/help/2371372636254534?id=533228987210412). Only products owned by the same Page are supported.',
																			},
																		},
																		required: ['id'],
																	},
																},
															},
															required: ['elements'],
														},
													},
													{
														if: {
															properties: {
																template_type: { const: 'media' },
															},
														},
														then: {
															type: 'object',
															properties: {
																elements: {
																	type: 'array',
																	description:
																		'An array containing exactly one media element.',
																	items: {
																		type: 'object',
																		description:
																			'The media element.',
																		properties: {
																			media_type: {
																				type: 'string',
																				description:
																					'The type of the media: `image` or `video`.',
																				enum: [
																					'image',
																					'video',
																				],
																			},
																			attachment_id: {
																				type: 'string',
																				description:
																					'The attachment ID of the image or video. Cannot be used together with `url`.',
																			},
																			url: {
																				type: 'string',
																				description:
																					'The Facebook URL of the image or video. Cannot be used together with `attachment_id`.',
																			},
																			buttons: {
																				type: 'array',
																				description:
																					'An array containing at most one button to append to the media element.',
																				items: {
																					type: 'object',
																					description:
																						'A button. The fields available depend on `type`.',
																					properties: {
																						type: {
																							type: 'string',
																							description:
																								'The type of the button. See [Buttons](https://developers.facebook.com/docs/messenger-platform/send-messages/buttons).',
																							enum: [
																								'web_url',
																								'postback',
																								'phone_number',
																								'account_link',
																								'account_unlink',
																								'game_play',
																							],
																						},
																					},
																					required: [
																						'type',
																					],
																					allOf: [
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'web_url',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										url: {
																											type: 'string',
																											description:
																												'The URL opened in a mobile browser or webview when the button is tapped. Must use HTTPS when `messenger_extensions` is `true`.',
																										},
																										webview_height_ratio:
																											{
																												type: 'string',
																												description:
																													'The height of the webview in which the URL is opened: `compact`, `tall` or `full`.',
																												enum: [
																													'full',
																													'tall',
																													'compact',
																												],
																											},
																										messenger_extensions:
																											{
																												type: 'boolean',
																												description:
																													'Must be `true` if the URL uses Messenger Extensions.',
																												'x-nested':
																													{
																														type: 'object',
																														properties:
																															{
																																fallback_url:
																																	{
																																		type: 'string',
																																		description:
																																			'The URL to use on clients that do not support Messenger Extensions. If not defined, `url` is used as the fallback.',
																																	},
																															},
																														required:
																															[],
																													},
																											},
																										webview_share_button:
																											{
																												type: 'string',
																												description:
																													'Set to `hide` to disable the share button in the webview (for sensitive information).',
																												default:
																													'',
																												enum: [
																													'',
																													'hide',
																												],
																											},
																									},
																								required:
																									[
																										'title',
																										'url',
																										'webview_height_ratio',
																										'messenger_extensions',
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
																										payload:
																											{
																												type: 'string',
																												description:
																													'Custom data sent back to the webhook via a `messaging_postbacks` event when the button is tapped. Maximum 1000 characters.',
																												maximum: 1000,
																											},
																									},
																								required:
																									[
																										'title',
																										'payload',
																									],
																							},
																						},
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'phone_number',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										payload:
																											{
																												type: 'string',
																												description:
																													'The phone number to call. Format must be `+` followed by the country code, area code and local number, for example `+16505551234`.',
																												pattern: String.raw`^\+\d+$`,
																											},
																									},
																								required:
																									[
																										'title',
																										'payload',
																									],
																							},
																						},
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'account_link',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										url: {
																											type: 'string',
																											description:
																												'The Authentication Callback URL for [Account Linking](https://developers.facebook.com/docs/messenger-platform/identity/account-linking). Must use the HTTPS protocol.',
																										},
																									},
																								required:
																									[
																										'url',
																									],
																							},
																						},
																						{
																							if: {
																								properties:
																									{
																										type: {
																											const: 'game_play',
																										},
																									},
																							},
																							then: {
																								type: 'object',
																								properties:
																									{
																										payload:
																											{
																												type: 'string',
																												description:
																													'Custom data passed to the Instant Game when it is launched.',
																											},
																										game_metadata:
																											{
																												type: 'object',
																												description:
																													'Metadata for the Instant Game to launch.',
																												properties:
																													{
																														player_id:
																															{
																																type: 'string',
																																description:
																																	'The Instant Game player ID to play against.',
																															},
																														context_id:
																															{
																																type: 'string',
																																description:
																																	'The Instant Game context ID of the thread to play in.',
																															},
																													},
																												required:
																													[],
																											},
																									},
																								required:
																									[
																										'title',
																									],
																							},
																						},
																					],
																				},
																				maxItems: 1,
																			},
																		},
																		required: ['media_type'],
																	},
																	maxItems: 1,
																},
															},
															required: ['elements'],
														},
													},
													{
														if: {
															properties: {
																template_type: { const: 'receipt' },
															},
														},
														then: {
															type: 'object',
															properties: {
																sharable: {
																	type: 'boolean',
																	description:
																		'Whether the receipt can be shared by the recipient.',
																},
																recipient_name: {
																	type: 'string',
																	description:
																		'The name of the recipient of the order.',
																},
																order_number: {
																	type: 'string',
																	description:
																		'The order number. Must be unique.',
																},
																currency: {
																	type: 'string',
																	description:
																		'The currency of the item price as a three-letter ISO 4217 code.',
																},
																payment_method: {
																	type: 'string',
																	description:
																		'The payment method used. Provide enough information for the customer to recognise which payment method and account was used, for example `Visa 1234`.',
																},
																summary: {
																	type: 'object',
																	description:
																		'The payment summary of the order.',
																	properties: {
																		total_cost: {
																			type: 'number',
																			description:
																				'The total cost of the order, including sub-total, shipping and tax.',
																		},
																		subtotal: {
																			type: 'number',
																			description:
																				'The sub-total of the order.',
																		},
																		shipping_cost: {
																			type: 'number',
																			description:
																				'The shipping cost of the order.',
																		},
																		total_tax: {
																			type: 'number',
																			description:
																				'The tax of the order.',
																		},
																	},
																	required: ['total_cost'],
																},
																merchant_name: {
																	type: 'string',
																	description:
																		"The merchant's name. If present, it is shown in the receipt header instead of the Page name.",
																},
																timestamp: {
																	type: 'number',
																	description:
																		'The timestamp of the order in seconds since the Unix epoch.',
																},
																order_url: {
																	type: 'string',
																	description:
																		'The URL of the order.',
																},
																address: {
																	type: 'object',
																	description:
																		'The shipping address of the order.',
																	properties: {
																		street_1: {
																			type: 'string',
																			description:
																				'The street address, line 1.',
																		},
																		street_2: {
																			type: 'string',
																			description:
																				'The street address, line 2.',
																		},
																		city: {
																			type: 'string',
																			description:
																				'The city name of the address.',
																		},
																		postal_code: {
																			type: 'string',
																			description:
																				'The postal code of the address.',
																		},
																		state: {
																			type: 'string',
																			description:
																				'The state abbreviation for U.S. addresses, or the region or province for non-U.S. addresses.',
																		},
																		country: {
																			type: 'string',
																			description:
																				'The two-letter country abbreviation of the address.',
																		},
																	},
																	required: [],
																},
																adjustments: {
																	type: 'array',
																	description:
																		'An array of payment adjustments, such as discounts.',
																	items: {
																		type: 'object',
																		description:
																			'A payment adjustment.',
																		properties: {
																			name: {
																				type: 'string',
																				description:
																					'The name of the adjustment.',
																			},
																			amount: {
																				type: 'number',
																				description:
																					'The amount of the adjustment.',
																			},
																		},
																		required: [
																			'name',
																			'amount',
																		],
																	},
																},
																elements: {
																	type: 'array',
																	description:
																		'An array of up to 100 items purchased in the order.',
																	items: {
																		type: 'object',
																		description:
																			'An item purchased in the order.',
																		properties: {
																			price: {
																				type: 'number',
																				description:
																					'The price of the item. `0` is allowed for free items.',
																			},
																			subtitle: {
																				type: 'string',
																				description:
																					'The subtitle of the item, usually a brief description.',
																			},
																			quantity: {
																				type: 'number',
																				description:
																					'The quantity of the item purchased.',
																			},
																			currency: {
																				type: 'string',
																				description:
																					'The currency of the item price as a three-letter ISO 4217 code.',
																			},
																			image_url: {
																				type: 'string',
																				description:
																					'The URL of an image to render next to the item.',
																			},
																		},
																		required: [
																			'title',
																			'price',
																		],
																	},
																	maxItems: 100,
																},
															},
															required: [
																'sharable',
																'recipient_name',
																'order_number',
																'currency',
																'payment_method',
															],
														},
													},
												],
											},
										},
										required: [],
									},
								},
							],
						},
						attachments: {
							type: 'array',
							description:
								'Multiple media attachments sent in one message. Only images are allowed, up to 30 per message. Use `attachment` instead for a single media item or a template.',
							items: {
								type: 'object',
								description: 'An image attachment.',
								properties: {
									type: {
										type: 'string',
										description:
											'The attachment type. Only `image` is supported for multiple attachments.',
										enum: ['image'],
									},
									payload: {
										type: 'object',
										description: 'The image source.',
										properties: {
											url: {
												type: 'string',
												description: 'The public URL of the image.',
											},
										},
										required: ['url'],
									},
								},
								required: ['type', 'payload'],
							},
							maxItems: 30,
						},
						quick_replies: {
							type: 'array',
							description:
								'An array of up to 13 quick replies presented to the user as buttons below the message.',
							items: {
								type: 'object',
								description: 'A quick reply.',
								properties: {
									content_type: {
										type: 'string',
										description:
											'The type of the quick reply: `text` for a custom button, `user_phone_number` or `user_email` to let the user share the phone number or email address from their profile.',
										enum: ['text', 'user_phone_number', 'user_email'],
									},
								},
								required: ['content_type'],
								allOf: [
									{
										if: { properties: { content_type: { const: 'text' } } },
										then: {
											type: 'object',
											properties: {
												payload: {
													type: 'string',
													description:
														'Custom data sent back to the webhook via a `messaging_postbacks` event when the quick reply is tapped. Maximum 1000 characters.',
													maximum: 1000,
												},
												image_url: {
													type: 'string',
													description:
														'URL of an image to display on the quick reply button. Required if `title` is an empty string. The image should be at least 24 x 24 px; larger images are cropped and resized.',
												},
											},
											required: ['title'],
										},
									},
								],
							},
						},
						metadata: {
							type: 'string',
							description:
								'A custom string of up to 1000 characters delivered in the `message_echoes` [webhook event](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks). May be used to identify messages sent from this source.',
							maximum: 1000,
						},
					},
					required: [],
				},
				reply_to: {
					type: 'object',
					description:
						'Sends the message as a reply to a specific earlier message in the conversation. The referenced message may have been sent by the Page or by the user.',
					properties: {
						mid: {
							type: 'string',
							description:
								'The ID of the message to reply to (`mid`), for example from a received message webhook event or the `message_id` returned by a previous send.',
						},
					},
					required: ['mid'],
				},
				notification_type: {
					type: 'string',
					description: 'The push notification type. When omitted, Meta uses `REGULAR`.',
					default: '',
					enum: ['', 'REGULAR', 'SILENT_PUSH', 'NO_PUSH'],
				},
			},
			required: ['messaging_type', 'recipient', 'message'],
			allOf: [
				{
					if: { properties: { messaging_type: { const: 'MESSAGE_TAG' } } },
					then: {
						type: 'object',
						properties: {
							tag: {
								type: 'string',
								description:
									'The message tag that allows sending outside the standard 24-hour messaging window. Only `HUMAN_AGENT` is supported; it requires the Human Agent permission. See [Message tags](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages#message-tags).',
								enum: ['HUMAN_AGENT'],
							},
						},
						required: ['tag'],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				recipient_id: {
					type: 'string',
					description: 'The Page-scoped ID of the user the message was sent to.',
				},
				message_id: {
					type: 'string',
					description: 'The ID of the sent message, in the form `m_...`.',
				},
				attachment_id: {
					type: 'string',
					description:
						'The ID of the saved attachment. Returned only when a media attachment was sent with `is_reusable` set to `true`; reuse it as `message.attachment.payload.attachment_id`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-messenger',
		appVersion: 2,
		endpointName: 'sendSenderAction',
		label: 'Send a sender action',
		description:
			'Sends a sender action (mark seen, typing on/off, react, unreact) to a Messenger user.',
		context:
			"---\nname: sendSenderAction\ndescription: Sends a sender action (mark seen, typing on/off, react, unreact) to a Messenger conversation.\n---\n\nShows a read receipt or a typing indicator in a conversation, or adds / removes an emoji reaction on a message.\n\nThis Endpoint wraps `POST /me/messages` of the Facebook Graph API (base URL `https://graph.facebook.com/v25.0`, the Messenger Platform **Send API** with a `sender_action` payload). Authentication is handled automatically via the app's connection; the Page access token is sent as the `access_token` query parameter.\n\n- A sender action is not a message: the body carries `recipient`, `sender_action` and, for reactions, `payload`. To send text or an attachment use `sendMessage` in a separate request.\n- `recipient` needs exactly one identifier — `id` (PSID) in most cases; `user_ref`, `post_id` or `comment_id` for plugin and Private Reply conversations.\n- `mark_seen`, `typing_on`, `typing_off`: no `payload`. `typing_on` is cleared automatically after 20 seconds or when the Page sends a message. Repeating the same action has no additional effect.\n- `react`: `payload.message_id` + `payload.reaction` (any emoji or its UTF-8 representation). Sending `react` again with a different emoji edits the reaction.\n- `unreact`: `payload.message_id` only — removes the reaction.\n- Empty `payload` fields are removed from the request before it is sent.\n- The response contains only `recipient_id`.\n\nReference: [Sender actions](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/sender-actions)\n",
		accounts: { 'facebook-messenger2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				recipient: {
					type: 'object',
					description:
						'Identifies the conversation the sender action is sent to. Provide exactly one of the fields.',
					properties: {
						id: {
							type: 'string',
							description:
								'The Page-scoped ID of the user. The user must have interacted with the Page through one of the [Messenger entry points](https://developers.facebook.com/docs/messenger-platform/discovery). IDs returned by [Facebook Login](https://developers.facebook.com/docs/facebook-login) are app-scoped and do not work here.',
						},
						user_ref: {
							type: 'string',
							description:
								'A user reference obtained from the [checkbox plugin](https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin) or the [customer chat plugin](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin). Use instead of `id` when the PSID is not known yet.',
						},
						post_id: {
							type: 'string',
							description:
								'The ID of a visitor post to reply to privately. Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies).',
						},
						comment_id: {
							type: 'string',
							description:
								'The ID of a post comment to reply to privately. Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies).',
						},
					},
					required: [],
				},
				sender_action: {
					type: 'string',
					description:
						'The action to perform in the conversation. `typing_on` is turned off automatically after 20 seconds or when a message is sent. `react` and `unreact` require `payload`.',
					enum: ['mark_seen', 'typing_on', 'typing_off', 'react', 'unreact'],
				},
				payload: {
					type: 'object',
					description:
						'Required for `react` and `unreact`; not used by the other actions.',
					properties: {
						message_id: {
							type: 'string',
							description:
								'The ID of the message to react to or remove the reaction from.',
						},
						reaction: {
							type: 'string',
							description:
								'The emoji to react with (for example 😊 or 🎉), or its UTF-8 representation. Required for `react`; sending `react` again with a different emoji replaces the reaction. Omit for `unreact`.',
						},
					},
					required: [],
				},
			},
			required: ['recipient', 'sender_action'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				recipient_id: {
					type: 'string',
					description: 'The Page-scoped ID of the user the sender action was sent to.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-messenger',
		appVersion: 2,
		endpointName: 'uploadAttachment',
		label: 'Upload an attachment',
		description:
			'Uploads an attachment from a URL to the Attachment Upload API and returns a reusable attachment ID.',
		context:
			"---\nname: uploadAttachment\ndescription: Uploads an asset from a URL and returns a reusable attachment ID.\n---\n\nSaves an image, audio, video or file asset for reuse in later messages.\n\nThis Endpoint wraps `POST /me/message_attachments` of the Facebook Graph API (base URL `https://graph.facebook.com/v25.0`, the Messenger Platform **Attachment Upload API**). Authentication is handled automatically via the app's connection; the Page access token is sent as the `access_token` query parameter.\n\n- Only the URL-based upload is supported: Meta fetches the file from `url`. Uploading binary file content (multipart/form-data) is not available through Endpoints.\n- `is_reusable` is always sent as `true`, which is the purpose of this call — the returned `attachment_id` can be sent to any recipient via `sendMessage` (`message.attachment.payload.attachment_id`).\n- Maximum file size is 25 MB; the download times out after 75 seconds for videos and 10 seconds for other types.\n\nReference: [Send a media attachment](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages#sending_attachments)\n",
		accounts: { 'facebook-messenger2': { scope: [] } },
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
				type: {
					type: 'string',
					description: 'The type of the asset to upload. Maximum file size is 25 MB.',
					enum: ['image', 'audio', 'video', 'file'],
				},
				url: {
					type: 'string',
					description:
						'Publicly reachable URL of the file to upload. Maximum file size is 25 MB. Meta downloads the file with a timeout of 75 seconds for videos and 10 seconds for every other file type.',
				},
			},
			required: ['type', 'url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				attachment_id: {
					type: 'string',
					description:
						'The ID of the saved, reusable attachment. Pass it as `message.attachment.payload.attachment_id` in `sendMessage` to send the asset without uploading it again.',
				},
			},
			required: [],
		},
	},
];
