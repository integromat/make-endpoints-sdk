// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Canva Connect API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.canva.com/rest/`. Provide the remaining path in the URL parameter\n(e.g. `v1/users/me`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Canva Connect API reference](https://www.canva.dev/docs/connect/) for available\nendpoints, required parameters, and response schemas.',
		accounts: { canva: { scope: ['profile:read'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the part of the URL that comes after `https://api.canva.com/rest/`. For example, `v1/users/me`.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'autofillDesign',
		label: 'Create design autofill job',
		description: 'Creates an asynchronous job to autofill a design from a brand template.',
		context:
			'---\nname: autofillDesign\ndescription: Creates an asynchronous job to autofill a design from a brand template.\n---\n\n**Enterprise only.** Before calling this endpoint, call `getUserCapabilities` and verify that the\nresponse includes `"autofill"` in the `capabilities` array. Non-Enterprise users will receive a `403` error.\n\nStarts an asynchronous autofill job. The initial response returns the job ID with status `in_progress`.\nUse the `arbitraryCall` endpoint with `GET /v1/autofills/{jobId}` to poll the job status until it completes.\n\nThe `data` field is a JSON object mapping brand template field names to their values.\nUse `getBrandTemplateDataset` first to discover the available fields and their types.\n\n**Supported data field types:**\n- **Text**: `{ "type": "text", "text": "Summer Sale" }`\n- **Image**: `{ "type": "image", "asset_id": "Msd59349ff" }`\n- **Video**: `{ "type": "video", "asset_id": "VAHCkrNUANI" }`\n- **Chart**: `{ "type": "chart", "chart_data": { "column_configs": [...], "rows": [...] } }`\n- **Sheet**: `{ "type": "sheet", "sheet_data": { "column_configs": [...], "rows": [...] } }`\n\nFields that don\'t exist in the template are silently skipped.\n\nRefer to the [Create design autofill job API reference](https://www.canva.dev/docs/connect/api-reference/autofills/create-design-autofill-job/) for details.',
		accounts: { canva: { scope: ['design:content:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				brand_template_id: {
					type: 'string',
					description: 'The ID of the brand template to autofill.',
				},
				data: {
					type: 'object',
					description:
						'The data to autofill the brand template with. An object where each key is a field name from the brand template dataset and each value is a type-specific object. Use `getBrandTemplateDataset` to discover available field names. Value formats: text → {"type": "text", "text": "..."}, image → {"type": "image", "asset_id": "..."}, video → {"type": "video", "asset_id": "..."}, chart → {"type": "chart", "chart_data": {"column_configs": [...], "rows": [...]}}, sheet → {"type": "sheet", "sheet_data": {"column_configs": [...], "rows": [...]}}. Unknown field names are silently skipped.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: ['brand_template_id', 'data'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				job: {
					type: 'object',
					description: 'The autofill job status.',
					properties: {
						id: {
							type: 'string',
							description:
								'The ID of the autofill job. Use this to poll the job status.',
						},
						status: {
							type: 'string',
							description:
								'The status of the job. Values: `failed`, `in_progress`, `success`.',
						},
						result: {
							type: 'object',
							description: 'The result (available when status is `success`).',
							properties: {
								type: { type: 'string', description: 'The type of the result.' },
								design: {
									type: 'object',
									description: 'The autofilled design metadata.',
									properties: {
										id: { type: 'string', description: 'The design ID.' },
										urls: {
											type: 'object',
											description:
												'A temporary set of URLs for viewing or editing the design.',
											properties: {
												edit_url: {
													type: 'string',
													description:
														'A temporary editing URL. Valid for 30 days.',
												},
												view_url: {
													type: 'string',
													description:
														'A temporary viewing URL. Valid for 30 days.',
												},
											},
											required: [],
										},
										created_at: {
											type: 'number',
											description:
												'When the design was created, as a Unix timestamp.',
										},
										updated_at: {
											type: 'number',
											description:
												'When the design was last updated, as a Unix timestamp.',
										},
										thumbnail: {
											type: 'object',
											description: 'A thumbnail for the design.',
											properties: {
												width: {
													type: 'number',
													description: 'Width in pixels.',
												},
												height: {
													type: 'number',
													description: 'Height in pixels.',
												},
												url: {
													type: 'string',
													description:
														'Thumbnail URL. Expires after 15 minutes.',
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
						error: {
							type: 'object',
							description: 'Error details if the autofill failed.',
							properties: {
								code: { type: 'string', description: 'A short error code.' },
								message: {
									type: 'string',
									description: 'A human-readable error message.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'createComment',
		label: 'Create a comment',
		description: 'Creates a new top-level comment on a design.',
		context:
			'---\nname: createComment\ndescription: Creates a new comment thread on a design.\n---\n\nCreates a new comment thread on a design using the new `POST /designs/{designId}/comments` API.\nA design can have a maximum of 1000 comment threads.\n\nThe body field is `message_plaintext` (not `message`). Mentions use `[user_id:team_id]` format.\nIf `assignee_id` is provided, the assignee must be mentioned in the message.\n\nThe response wraps the result in a `thread` object with nested `thread_type.content` containing\nboth `plaintext` and `markdown` versions of the message. The thread `id` is used as `threadId`\nwhen creating replies via `createCommentReply`.\n\nNote: This endpoint uses the new Comments API (preview). The legacy `POST /comments` API is deprecated.\n\nRefer to the [Create thread API reference](https://www.canva.dev/docs/connect/api-reference/comments/create-thread/) for details.',
		accounts: { canva: { scope: ['comment:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				design_id: { type: 'string', description: 'The ID of the design to comment on.' },
				message_plaintext: {
					type: 'string',
					description:
						'The comment message in plaintext. Supports mentioning users with the format `[user_id:team_id]`. If `assignee_id` is set, the assignee must be mentioned.',
					minimum: 1,
					maximum: 2048,
				},
				assignee_id: {
					type: 'string',
					description:
						'The Canva user ID to assign the comment to. The assignee must be mentioned in the message using `[user_id:team_id]` format.',
				},
			},
			required: ['design_id', 'message_plaintext'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				thread: {
					type: 'object',
					description: 'The created comment thread object.',
					properties: {
						id: {
							type: 'string',
							description: 'The ID of the thread. Use this to create replies.',
						},
						design_id: {
							type: 'string',
							description: 'The ID of the design the thread is on.',
						},
						thread_type: {
							type: 'object',
							description: 'The type of thread and its content.',
							properties: {
								type: {
									type: 'string',
									description: 'The thread type. Value: `comment`.',
								},
								content: {
									type: 'object',
									description: 'The content of the comment.',
									properties: {
										plaintext: {
											type: 'string',
											description:
												'The content in plaintext. Mentions shown as `[user_id:team_id]`.',
										},
										markdown: {
											type: 'string',
											description: 'The content in markdown.',
										},
									},
									required: [],
								},
								mentions: {
									type: 'object',
									description:
										'The Canva users mentioned in the comment. Keys are `user_id:team_id` strings.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
								assignee: {
									type: 'object',
									description: 'The user the comment is assigned to.',
									properties: {
										id: { type: 'string', description: 'The user ID.' },
										display_name: {
											type: 'string',
											description: 'The display name.',
										},
									},
									required: [],
								},
								resolver: {
									type: 'object',
									description: 'The user who resolved the thread.',
									properties: {
										id: { type: 'string', description: 'The user ID.' },
										display_name: {
											type: 'string',
											description: 'The display name.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						created_at: {
							type: 'number',
							description:
								'When the thread was created, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the thread was last updated, as a Unix timestamp (in seconds).',
						},
						author: {
							type: 'object',
							description: 'The author of the comment.',
							properties: {
								id: { type: 'string', description: 'The user ID.' },
								display_name: { type: 'string', description: 'The display name.' },
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'createCommentReply',
		label: 'Create a comment reply',
		description: 'Replies to a top-level comment on a design.',
		context:
			'---\nname: createCommentReply\ndescription: Replies to a comment thread on a design.\n---\n\nCreates a reply to a comment thread using the new `POST /designs/{designId}/comments/{threadId}/replies` API.\nEach thread can have a maximum of 100 replies.\n\nRequires `designId` (the design the thread is on) and `threadId` (the thread ID returned by `createComment`).\nThe body field is `message_plaintext` (not `message`). Mentions use `[user_id:team_id]` format.\n\nThe response wraps the result in a `reply` object with `content.plaintext` and `content.markdown`.\n\nNote: This endpoint uses the new Comments API (preview). The legacy `POST /comments/{commentId}/replies` is no longer functional.\n\nRefer to the [Create reply API reference](https://www.canva.dev/docs/connect/api-reference/comments/create-reply/) for details.',
		accounts: { canva: { scope: ['comment:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				design_id: {
					type: 'string',
					description: 'The ID of the design the comment thread is on.',
				},
				thread_id: {
					type: 'string',
					description:
						'The ID of the thread to reply to (returned as `id` from createComment).',
				},
				message_plaintext: {
					type: 'string',
					description:
						'The reply message in plaintext. Supports mentioning users with the format `[user_id:team_id]`.',
					minimum: 1,
					maximum: 2048,
				},
			},
			required: ['design_id', 'thread_id', 'message_plaintext'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				reply: {
					type: 'object',
					description: 'The created reply object.',
					properties: {
						id: { type: 'string', description: 'The ID of the reply.' },
						design_id: { type: 'string', description: 'The ID of the design.' },
						thread_id: {
							type: 'string',
							description: 'The ID of the thread this reply belongs to.',
						},
						content: {
							type: 'object',
							description: 'The content of the reply.',
							properties: {
								plaintext: {
									type: 'string',
									description:
										'The content in plaintext. Mentions shown as `[user_id:team_id]`.',
								},
								markdown: {
									type: 'string',
									description: 'The content in markdown.',
								},
							},
							required: [],
						},
						mentions: {
							type: 'object',
							description:
								'The Canva users mentioned in the reply. Keys are `user_id:team_id` strings.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						created_at: {
							type: 'number',
							description:
								'When the reply was created, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the reply was last updated, as a Unix timestamp (in seconds).',
						},
						author: {
							type: 'object',
							description: 'The author of the reply.',
							properties: {
								id: { type: 'string', description: 'The user ID.' },
								display_name: { type: 'string', description: 'The display name.' },
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'createDesign',
		label: 'Create a design',
		description: 'Creates a new Canva design.',
		context:
			'---\nname: createDesign\ndescription: Creates a new Canva design.\n---\n\nCreates a new Canva design using a preset type (doc, email, presentation, whiteboard) or custom\ndimensions. Optionally inserts an image asset into the new design.\n\nAt least one of `design_type` or `asset_id` must be provided. Custom dimensions must have a total\narea under 25,000,000 pixels (e.g., 5000 × 5000). Each dimension: 40–8000 px.\n\nBlank designs are automatically deleted after 7 days if not edited.\n\nRefer to the [Create design API reference](https://www.canva.dev/docs/connect/api-reference/designs/create-design/) for details.',
		accounts: { canva: { scope: ['design:content:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				design_type: {
					type: 'object',
					description:
						'The desired design type. Provide either a preset design type or custom dimensions. At least one of design type or asset ID must be provided.',
					properties: {
						type: {
							type: 'string',
							description:
								'Use `preset` for common design types or `custom` for custom dimensions.',
							default: '',
							enum: ['', 'preset', 'custom'],
						},
					},
					required: [],
					allOf: [
						{
							if: { properties: { type: { const: 'preset' } } },
							then: {
								type: 'object',
								properties: {
									name: {
										type: 'string',
										description: 'The name of the preset design type.',
										default: '',
										enum: ['', 'doc', 'email', 'presentation', 'whiteboard'],
									},
								},
								required: [],
							},
						},
						{
							if: { properties: { type: { const: 'custom' } } },
							then: {
								type: 'object',
								properties: {
									width: {
										type: 'number',
										description:
											'The width of the design in pixels. Must be between 40 and 8000.',
										minimum: 40,
										maximum: 8000,
									},
									height: {
										type: 'number',
										description:
											'The height of the design in pixels. Must be between 40 and 8000.',
										minimum: 40,
										maximum: 8000,
									},
								},
								required: [],
							},
						},
					],
				},
				asset_id: {
					type: 'string',
					description:
						'The ID of an image asset to insert into the created design. Currently only supports image assets.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				design: {
					type: 'object',
					description: 'The design object containing metadata about the created design.',
					properties: {
						id: { type: 'string', description: 'The design ID.' },
						owner: {
							type: 'object',
							description:
								'Metadata for the user, consisting of the User ID and Team ID.',
							properties: {
								user_id: { type: 'string', description: 'The ID of the user.' },
								team_id: {
									type: 'string',
									description: "The ID of the user's Canva Team.",
								},
							},
							required: [],
						},
						thumbnail: {
							type: 'object',
							description: 'A thumbnail image representing the design.',
							properties: {
								width: {
									type: 'number',
									description: 'The width of the thumbnail image in pixels.',
								},
								height: {
									type: 'number',
									description: 'The height of the thumbnail image in pixels.',
								},
								url: {
									type: 'string',
									description:
										'A URL for retrieving the thumbnail image. Expires after 15 minutes.',
								},
							},
							required: [],
						},
						urls: {
							type: 'object',
							description:
								'A temporary set of URLs for viewing or editing the design. Valid for 30 days.',
							properties: {
								edit_url: {
									type: 'string',
									description:
										'A temporary editing URL for the design. Valid for 30 days.',
								},
								view_url: {
									type: 'string',
									description:
										'A temporary viewing URL for the design. Valid for 30 days.',
								},
							},
							required: [],
						},
						created_at: {
							type: 'number',
							description:
								'When the design was created, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the design was last updated, as a Unix timestamp (in seconds).',
						},
						page_count: {
							type: 'number',
							description: 'The total number of pages in the design.',
						},
						design_types: {
							type: 'array',
							description: 'The type of content the design contains.',
							items: { type: 'string', description: 'The design content type.' },
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'createFolder',
		label: 'Create a folder',
		description: 'Creates a new folder.',
		context:
			"---\nname: createFolder\ndescription: Creates a new folder.\n---\n\nCreates a folder in one of the following locations:\n- The top level of a user's projects (using `root` as the parent folder ID)\n- The user's Uploads folder (using `uploads`)\n- Another folder (using the parent folder's ID)\n\nRefer to the [Create folder API reference](https://www.canva.dev/docs/connect/api-reference/folders/create-folder/) for details.",
		accounts: { canva: { scope: ['folder:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: 'The name of the folder. Must be between 1 and 255 characters.',
				},
				parent_folder_id: {
					type: 'string',
					description:
						"The folder ID of the parent folder. Use `root` for the top level of a user's projects, or `uploads` for the Uploads folder.",
				},
			},
			required: ['name', 'parent_folder_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				folder: {
					type: 'object',
					description: 'The created folder object.',
					properties: {
						id: { type: 'string', description: 'The folder ID.' },
						name: { type: 'string', description: 'The folder name.' },
						created_at: {
							type: 'number',
							description:
								'When the folder was created, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the folder was last updated, as a Unix timestamp (in seconds).',
						},
						thumbnail: {
							type: 'object',
							description: 'A thumbnail image representing the folder.',
							properties: {
								width: {
									type: 'number',
									description: 'The width of the thumbnail image in pixels.',
								},
								height: {
									type: 'number',
									description: 'The height of the thumbnail image in pixels.',
								},
								url: {
									type: 'string',
									description:
										'A URL for retrieving the thumbnail image. Expires after 15 minutes.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'createUrlAssetUploadJob',
		label: 'Create asset upload job via URL',
		description: 'Creates an asynchronous job to upload an asset from a URL.',
		context:
			"---\nname: createUrlAssetUploadJob\ndescription: Creates an asynchronous job to upload an asset from a URL.\n---\n\nStarts an asynchronous job to upload an asset from a publicly accessible URL to the user's content library.\nThe initial response returns the job ID and status (`in_progress`). Use the `arbitraryCall` endpoint\nwith `GET /v1/url-asset-uploads/{jobId}` to poll the job status until it completes.\n\nVideo uploads via URL are limited to 100MB. For larger videos, binary upload is required\n(not available via endpoints).\n\nNote: This API is currently provided as a **preview**.\n\nRefer to the [Create asset upload job via URL API reference](https://www.canva.dev/docs/connect/api-reference/assets/create-url-asset-upload-job/) for details.",
		accounts: { canva: { scope: ['asset:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: 'A name for the asset. Must be between 1 and 255 characters.',
				},
				url: {
					type: 'string',
					description:
						'The URL of the file to upload. Must be publicly accessible on the internet. Maximum length: 2048 characters.',
				},
			},
			required: ['name', 'url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				job: {
					type: 'object',
					description: 'The asset upload job status.',
					properties: {
						id: {
							type: 'string',
							description:
								'The ID of the asset upload job. Use this to poll the job status.',
						},
						status: {
							type: 'string',
							description:
								'The status of the job. Values: `failed`, `in_progress`, `success`.',
						},
						asset: {
							type: 'object',
							description:
								'The uploaded asset metadata (available when status is `success`).',
							properties: {
								type: {
									type: 'string',
									description: 'The type of the asset. Values: `image`, `video`.',
								},
								id: { type: 'string', description: 'The asset ID.' },
								name: { type: 'string', description: 'The name of the asset.' },
								tags: {
									type: 'array',
									description: 'User-facing tags.',
									items: { type: 'string', description: 'A tag value.' },
								},
								created_at: {
									type: 'number',
									description: 'When the asset was created, as a Unix timestamp.',
								},
								updated_at: {
									type: 'number',
									description:
										'When the asset was last updated, as a Unix timestamp.',
								},
								owner: {
									type: 'object',
									description: 'The asset owner.',
									properties: {
										user_id: { type: 'string', description: 'The user ID.' },
										team_id: { type: 'string', description: 'The team ID.' },
									},
									required: [],
								},
								thumbnail: {
									type: 'object',
									description: 'A thumbnail for the asset.',
									properties: {
										width: { type: 'number', description: 'Width in pixels.' },
										height: {
											type: 'number',
											description: 'Height in pixels.',
										},
										url: {
											type: 'string',
											description: 'Thumbnail URL. Expires after 15 minutes.',
										},
									},
									required: [],
								},
								metadata: {
									type: 'object',
									description:
										'Type-specific metadata. For images: type, width, height, smart_tags. For videos: type, width, height, duration_ms.',
									properties: {
										type: {
											type: 'string',
											description:
												'The metadata type. Values: `image`, `video`.',
										},
										width: {
											type: 'number',
											description: 'The width in pixels.',
										},
										height: {
											type: 'number',
											description: 'The height in pixels.',
										},
										smart_tags: {
											type: 'array',
											description: 'AI-generated tags for images.',
											items: {
												type: 'string',
												description: 'A smart tag value.',
											},
										},
										duration_ms: {
											type: 'number',
											description:
												'The duration of the video in milliseconds. Only present for video assets.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						error: {
							type: 'object',
							description: 'Error details if the upload failed.',
							properties: {
								code: { type: 'string', description: 'A short error code.' },
								message: {
									type: 'string',
									description: 'A human-readable error message.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'createUrlImportJob',
		label: 'Create URL import job',
		description: 'Creates an asynchronous job to import a design from a URL.',
		context:
			'---\nname: createUrlImportJob\ndescription: Creates an asynchronous job to import a design from a URL.\n---\n\nStarts an asynchronous job to import an external file from a publicly accessible URL as a new Canva design.\nThe initial response returns the job ID with status `in_progress`. Use the `arbitraryCall` endpoint\nwith `GET /v1/url-imports/{jobId}` to poll the job status until it completes.\n\nSupported file types are listed in the [Design imports overview](https://www.canva.dev/docs/connect/api-reference/design-imports/).\n\nRefer to the [Create URL import job API reference](https://www.canva.dev/docs/connect/api-reference/design-imports/create-url-import-job/) for details.',
		accounts: { canva: { scope: ['design:content:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'The URL of the file to import. Must be publicly accessible. Maximum length: 2048 characters.',
				},
				mime_type: {
					type: 'string',
					description:
						'The MIME type of the file being imported (e.g., `application/pdf`, `application/vnd.apple.keynote`). If not provided, Canva auto-detects it.',
				},
			},
			required: ['url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				job: {
					type: 'object',
					description: 'The import job status.',
					properties: {
						id: {
							type: 'string',
							description:
								'The ID of the import job. Use this to poll the job status.',
						},
						status: {
							type: 'string',
							description:
								'The status of the job. Values: `failed`, `in_progress`, `success`.',
						},
						result: {
							type: 'object',
							description: 'The result (available when status is `success`).',
							properties: {
								designs: {
									type: 'array',
									description:
										'The list of imported designs. Usually contains one item.',
									items: {
										type: 'object',
										description: 'An imported design.',
										properties: {
											id: { type: 'string', description: 'The design ID.' },
											urls: {
												type: 'object',
												description:
													'Temporary URLs for viewing or editing the design.',
												properties: {
													edit_url: {
														type: 'string',
														description:
															'A temporary editing URL. Valid for 30 days.',
													},
													view_url: {
														type: 'string',
														description:
															'A temporary viewing URL. Valid for 30 days.',
													},
												},
												required: [],
											},
											created_at: {
												type: 'number',
												description:
													'When the design was created, as a Unix timestamp.',
											},
											updated_at: {
												type: 'number',
												description:
													'When the design was last updated, as a Unix timestamp.',
											},
											thumbnail: {
												type: 'object',
												description: 'A thumbnail for the design.',
												properties: {
													width: {
														type: 'number',
														description: 'Width in pixels.',
													},
													height: {
														type: 'number',
														description: 'Height in pixels.',
													},
													url: {
														type: 'string',
														description:
															'Thumbnail URL. Expires after 15 minutes.',
													},
												},
												required: [],
											},
											page_count: {
												type: 'number',
												description:
													'The total number of pages in the design.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						error: {
							type: 'object',
							description: 'Error details if the import failed.',
							properties: {
								code: { type: 'string', description: 'A short error code.' },
								message: {
									type: 'string',
									description: 'A human-readable error message.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'deleteAsset',
		label: 'Delete an asset',
		description: "Deletes an asset from the user's projects.",
		context:
			"---\nname: deleteAsset\ndescription: Deletes an asset from the user's projects.\n---\n\nDeletes an asset from the user's content library. Deleting an asset doesn't remove it\nfrom designs that already use it.\n\nRefer to the [Delete asset API reference](https://www.canva.dev/docs/connect/api-reference/assets/delete-asset/) for details.",
		accounts: { canva: { scope: ['asset:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				assetId: {
					type: 'string',
					description:
						"The ID of the asset to delete. Deleting an asset doesn't remove it from designs that already use it.",
				},
			},
			required: ['assetId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'deleteFolder',
		label: 'Delete a folder',
		description: 'Deletes a folder.',
		context:
			'---\nname: deleteFolder\ndescription: Deletes a folder.\n---\n\nPermanently deletes a folder. This is a destructive action that cannot be undone.\n\nRefer to the [Delete folder API reference](https://www.canva.dev/docs/connect/api-reference/folders/delete-folder/) for details.',
		accounts: { canva: { scope: ['folder:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				folderId: { type: 'string', description: 'The ID of the folder to delete.' },
			},
			required: ['folderId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'exportDesign',
		label: 'Create design export job',
		description: 'Creates an asynchronous job to export a design.',
		context:
			'---\nname: exportDesign\ndescription: Creates an asynchronous job to export a design.\n---\n\nStarts an asynchronous export job. The initial response returns the job ID with status `in_progress`.\nUse the `arbitraryCall` endpoint with `GET /v1/exports/{jobId}` to poll the job status until it completes.\n\nSupported formats via `format_type`: `pdf`, `jpg`, `png`, `gif`, `pptx`, `mp4`, `csv`, `html_bundle`, `html_standalone`.\n\nFormat-specific parameters:\n- **PDF**: `size` (paper size for Docs: a4, a3, letter, legal), `export_quality`, `pages`\n- **JPG**: `quality` (1–100 compression), `export_quality`, `height`, `width`, `pages`\n- **PNG**: `export_quality`, `height`, `width`, `lossless` (default true), `transparent_background`, `as_single_image`, `pages`\n- **GIF**: `export_quality`, `height`, `width`, `pages`\n- **MP4**: `video_quality` (e.g. `horizontal_1080p`), `export_quality`, `pages`\n- **PPTX**: `pages`\n- **CSV**: `pages`\n- **HTML bundle / HTML standalone**: `pages` (single page only)\n\nParameters not applicable to the chosen format are ignored by the API.\nLossless PNG and transparent background require a premium Canva plan.\n\nRefer to the [Create design export job API reference](https://www.canva.dev/docs/connect/api-reference/exports/create-design-export-job/) for details.',
		accounts: { canva: { scope: ['design:content:read'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				design_id: { type: 'string', description: 'The ID of the design to export.' },
				format_type: {
					type: 'string',
					description: 'The export format type.',
					enum: [
						'pdf',
						'jpg',
						'png',
						'gif',
						'pptx',
						'mp4',
						'csv',
						'html_bundle',
						'html_standalone',
					],
				},
				export_quality: {
					type: 'string',
					description: 'Export quality. Regular or pro (premium). Default: `regular`.',
					default: '',
					enum: ['', 'regular', 'pro'],
				},
				height: {
					type: 'number',
					description:
						'Export height in pixels (40–25000). For JPG, PNG, GIF formats. If only one dimension is given, aspect ratio is preserved.',
					minimum: 40,
					maximum: 25_000,
				},
				width: {
					type: 'number',
					description:
						'Export width in pixels (40–25000). For JPG, PNG, GIF formats. If only one dimension is given, aspect ratio is preserved.',
					minimum: 40,
					maximum: 25_000,
				},
				quality: {
					type: 'number',
					description:
						'JPG compression quality (1–100). Only used when format type is `jpg`.',
					minimum: 1,
					maximum: 100,
				},
				lossless: {
					type: 'boolean',
					description:
						'If true (default), PNG is exported losslessly. If false, lossy compression is used (requires premium plan).',
				},
				transparent_background: {
					type: 'boolean',
					description:
						'If true, PNG is exported with a transparent background (requires premium plan). Default: false.',
				},
				as_single_image: {
					type: 'boolean',
					description:
						'When true, multi-page designs are merged into a single PNG image. Default: false.',
				},
				size: {
					type: 'string',
					description:
						'Paper size for PDF export of Canva Docs. Default: `a4`. Values: `a4`, `a3`, `letter`, `legal`.',
					default: '',
					enum: ['', 'a4', 'a3', 'letter', 'legal'],
				},
				video_quality: {
					type: 'string',
					description:
						'Video quality for MP4 export. Values: `horizontal_480p`, `horizontal_720p`, `horizontal_1080p`, `horizontal_4k`, `vertical_480p`, `vertical_720p`, `vertical_1080p`, `vertical_4k`.',
					default: '',
					enum: [
						'',
						'horizontal_480p',
						'horizontal_720p',
						'horizontal_1080p',
						'horizontal_4k',
						'vertical_480p',
						'vertical_720p',
						'vertical_1080p',
						'vertical_4k',
					],
				},
				pages: {
					type: 'array',
					description:
						'Page numbers to export (array of integers, 1-indexed). If not specified, all pages are exported.',
					items: { type: 'number', description: 'Page number.' },
				},
			},
			required: ['design_id', 'format_type'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				job: {
					type: 'object',
					description: 'The export job status.',
					properties: {
						id: {
							type: 'string',
							description:
								'The ID of the export job. Use this to poll the job status.',
						},
						status: {
							type: 'string',
							description:
								'The status of the job. Values: `failed`, `in_progress`, `success`.',
						},
						urls: {
							type: 'array',
							description:
								'Download URLs for the exported files (available when status is `success`).',
							items: {
								type: 'string',
								description: 'A download URL for an exported file.',
							},
						},
						error: {
							type: 'object',
							description: 'Error details if the export failed.',
							properties: {
								code: { type: 'string', description: 'A short error code.' },
								message: {
									type: 'string',
									description: 'A human-readable error message.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'getAsset',
		label: 'Get an asset',
		description: 'Retrieves metadata for an asset.',
		context:
			"---\nname: getAsset\ndescription: Retrieves metadata for an asset.\n---\n\nRetrieves the metadata for an asset in the user's content library, including its type, name, tags,\nowner, thumbnail, dimensions, and import status.\n\nRefer to the [Get asset API reference](https://www.canva.dev/docs/connect/api-reference/assets/get-asset/) for details.",
		accounts: { canva: { scope: ['asset:read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				assetId: { type: 'string', description: 'The ID of the asset to retrieve.' },
			},
			required: ['assetId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				asset: {
					type: 'object',
					description: 'The asset object containing metadata about the asset.',
					properties: {
						type: {
							type: 'string',
							description: 'The type of the asset. Values: `image`, `video`.',
						},
						id: { type: 'string', description: 'The asset ID.' },
						name: { type: 'string', description: 'The name of the asset.' },
						tags: {
							type: 'array',
							description: 'User-facing tags attached to the asset.',
							items: { type: 'string', description: 'A tag value.' },
						},
						created_at: {
							type: 'number',
							description:
								'When the asset was added to Canva, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the asset was last updated, as a Unix timestamp (in seconds).',
						},
						owner: {
							type: 'object',
							description: 'Metadata for the asset owner.',
							properties: {
								user_id: {
									type: 'string',
									description: 'The user ID of the owner.',
								},
								team_id: {
									type: 'string',
									description: 'The team ID of the owner.',
								},
							},
							required: [],
						},
						thumbnail: {
							type: 'object',
							description:
								'A thumbnail image representing the asset. URL expires after 15 minutes.',
							properties: {
								width: {
									type: 'number',
									description: 'Width of the thumbnail in pixels.',
								},
								height: {
									type: 'number',
									description: 'Height of the thumbnail in pixels.',
								},
								url: {
									type: 'string',
									description:
										'URL for retrieving the thumbnail. Expires after 15 minutes.',
								},
							},
							required: [],
						},
						metadata: {
							type: 'object',
							description:
								'Type-specific metadata for the asset. For images: type, width, height, smart_tags. For videos: type, width, height, duration_ms.',
							properties: {
								type: {
									type: 'string',
									description: 'The metadata type. Values: `image`, `video`.',
								},
								width: { type: 'number', description: 'The width in pixels.' },
								height: { type: 'number', description: 'The height in pixels.' },
								smart_tags: {
									type: 'array',
									description: 'AI-generated tags for images.',
									items: { type: 'string', description: 'A smart tag value.' },
								},
								duration_ms: {
									type: 'number',
									description:
										'The duration of the video in milliseconds. Only present for video assets.',
								},
							},
							required: [],
						},
						import_status: {
							type: 'object',
							description: 'The import status of the asset.',
							properties: {
								state: {
									type: 'string',
									description:
										'State of the import job. Values: `failed`, `in_progress`, `success`.',
								},
								error: {
									type: 'object',
									description: 'Error details if the import failed.',
									properties: {
										message: {
											type: 'string',
											description: 'A human-readable error message.',
										},
										code: {
											type: 'string',
											description:
												'A short error code. Values: `file_too_big`, `import_failed`.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'getBrandTemplateDataset',
		label: 'Get brand template dataset',
		description: 'Gets the autofillable dataset for a brand template.',
		context:
			'---\nname: getBrandTemplateDataset\ndescription: Gets the autofillable dataset for a brand template.\n---\n\n**Enterprise only.** Before calling this endpoint, call `getUserCapabilities` and verify that the\nresponse includes `"brand_template"` in the `capabilities` array. Non-Enterprise users (or users\nwithout the `brand_template` capability) will receive a `403` error.\n\nReturns the autofillable dataset for a brand template, showing which fields can be\nautofilled and what type of data they accept (text, image, chart).\n\nRefer to the [Get brand template dataset API reference](https://www.canva.dev/docs/connect/api-reference/brand-templates/get-brand-template-dataset/) for details.',
		accounts: { canva: { scope: ['brandtemplate:content:read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				brandTemplateId: { type: 'string', description: 'The ID of the brand template.' },
			},
			required: ['brandTemplateId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				dataset: {
					type: 'object',
					description:
						'A collection of autofillable fields in the brand template. Keys are the field names, values describe the field type and constraints.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'getFolder',
		label: 'Get a folder',
		description: 'Retrieves metadata for an existing folder.',
		context:
			'---\nname: getFolder\ndescription: Retrieves metadata for an existing folder.\n---\n\nRetrieves the metadata for a folder, including its name, timestamps, and thumbnail.\n\nRefer to the [Get folder API reference](https://www.canva.dev/docs/connect/api-reference/folders/get-folder/) for details.',
		accounts: { canva: { scope: ['folder:read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				folderId: { type: 'string', description: 'The ID of the folder to retrieve.' },
			},
			required: ['folderId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				folder: {
					type: 'object',
					description: 'The folder object.',
					properties: {
						id: { type: 'string', description: 'The folder ID.' },
						name: { type: 'string', description: 'The folder name.' },
						created_at: {
							type: 'number',
							description:
								'When the folder was created, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the folder was last updated, as a Unix timestamp (in seconds).',
						},
						thumbnail: {
							type: 'object',
							description: 'A thumbnail image representing the folder.',
							properties: {
								width: {
									type: 'number',
									description: 'The width of the thumbnail image in pixels.',
								},
								height: {
									type: 'number',
									description: 'The height of the thumbnail image in pixels.',
								},
								url: {
									type: 'string',
									description:
										'A URL for retrieving the thumbnail image. Expires after 15 minutes.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'getUserCapabilities',
		label: 'Get user capabilities',
		description: "Returns the API capabilities for the authenticated user's account.",
		context:
			"---\nname: getUserCapabilities\ndescription: Returns the API capabilities for the authenticated user's account.\n---\n\nReturns a list of API capabilities for the current user. Some Canva APIs require specific capabilities\n(e.g., Enterprise membership) to be called successfully.\n\n**Known capabilities:**\n- `analytics` — Required for Design Analytics APIs. Enterprise users only.\n- `autofill` — Required for Autofill APIs. Enterprise users only.\n- `brand_template` — Required for Brand Template APIs. Users on Canva Pro, Teams, or Enterprise.\n- `export_png_transparency` — Required for transparent PNG export. Paid Canva plans.\n- `resize` — Required for design resize jobs. Paid Canva plans.\n- `team_restricted_app` — Required for team-restricted apps. Enterprise or Education orgs.\n\n**Usage:** Call this endpoint before calling Enterprise-gated endpoints (`autofillDesign`, `listBrandTemplates`,\n`getBrandTemplateDataset`) to verify the user has the required capability. If the required capability\nis missing, the gated endpoint will return a `403` error.\n\nRefer to the [Canva Capabilities documentation](https://www.canva.dev/docs/connect/capabilities/) for details.",
		accounts: { canva: { scope: ['profile:read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				capabilities: {
					type: 'array',
					description:
						'A list of API capabilities available to the user. Possible values include `analytics`, `autofill`, `brand_template`, `export_png_transparency`, `resize`, and `team_restricted_app`. Enterprise users typically have `autofill` and `brand_template` capabilities.',
					items: {
						type: 'string',
						description: 'The name of an API capability available to the user.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'listBrandTemplates',
		label: 'List brand templates',
		description: "Lists the user's brand templates.",
		context:
			'---\nname: listBrandTemplates\ndescription: Lists the user\'s brand templates.\n---\n\n**Enterprise only.** Before calling this endpoint, call `getUserCapabilities` and verify that the\nresponse includes `"brand_template"` in the `capabilities` array. Non-Enterprise users (or users\nwithout the `brand_template` capability) will receive a `403` error.\n\nReturns the user\'s brand templates. Results are paginated — use the `continuation` token\nfrom the response to fetch subsequent pages.\n\nRefer to the [List brand templates API reference](https://www.canva.dev/docs/connect/api-reference/brand-templates/list-brand-templates/) for details.',
		accounts: { canva: { scope: ['brandtemplate:meta:read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description: 'A search query to filter brand templates by name.',
				},
				continuation: {
					type: 'string',
					description:
						'A continuation token for paginating through results. Pass the value from the previous response to get the next page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The list of brand templates.',
					items: {
						type: 'object',
						description: 'A brand template.',
						properties: {
							id: { type: 'string', description: 'The brand template ID.' },
							created_at: {
								type: 'number',
								description:
									'When the template was created, as a Unix timestamp (in seconds).',
							},
							updated_at: {
								type: 'number',
								description:
									'When the template was last updated, as a Unix timestamp (in seconds).',
							},
							thumbnail: {
								type: 'object',
								description: 'A thumbnail image representing the template.',
								properties: {
									width: { type: 'number', description: 'Width in pixels.' },
									height: { type: 'number', description: 'Height in pixels.' },
									url: {
										type: 'string',
										description: 'Thumbnail URL. Expires after 15 minutes.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				continuation: {
					type: 'string',
					description:
						'A continuation token for the next page. Empty when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'listFolderItems',
		label: 'List folder items',
		description: 'Lists items in a folder.',
		context:
			'---\nname: listFolderItems\ndescription: Lists items in a folder.\n---\n\nReturns the items in a folder. Results are paginated — use the `continuation` token from the response\nto fetch subsequent pages.\n\nItems can be filtered by type (`design`, `folder`, `image`, `video`) and sorted by\n`created_at`, `updated_at`, or `name`.\n\nRefer to the [List folder items API reference](https://www.canva.dev/docs/connect/api-reference/folders/list-folder-items/) for details.',
		accounts: { canva: { scope: ['folder:read'] } },
		annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				folderId: {
					type: 'string',
					description: 'The ID of the folder whose items to list.',
				},
				item_types: {
					type: 'string',
					description: 'Filter the items by type.',
					default: '',
					enum: ['', 'design', 'folder', 'image', 'video'],
				},
				sort_by: {
					type: 'string',
					description: 'Sort the items by a specific field.',
					default: '',
					enum: ['', 'created_at', 'updated_at', 'name'],
				},
				sort_order: {
					type: 'string',
					description: 'The sort order for the results.',
					default: '',
					enum: ['', 'ascending', 'descending'],
				},
				continuation: {
					type: 'string',
					description:
						'A continuation token for paginating through results. Pass the value from the previous response to get the next page.',
				},
			},
			required: ['folderId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The list of items in the folder.',
					items: {
						type: 'object',
						description: 'A folder item.',
						properties: {
							type: { type: 'string', description: 'The type of the item.' },
							design: {
								type: 'object',
								description: 'The ID of the design (when type is `design`).',
								properties: {
									id: { type: 'string', description: 'The design ID.' },
									url: { type: 'string', description: 'A URL for the design.' },
									thumbnail: {
										type: 'object',
										description: 'A thumbnail for the design.',
										properties: {
											width: {
												type: 'number',
												description: 'Width in pixels.',
											},
											height: {
												type: 'number',
												description: 'Height in pixels.',
											},
											url: {
												type: 'string',
												description:
													'Thumbnail URL. Expires after 15 minutes.',
											},
										},
										required: [],
									},
									created_at: {
										type: 'number',
										description:
											'When the design was created, as a Unix timestamp (in seconds).',
									},
									updated_at: {
										type: 'number',
										description:
											'When the design was last updated, as a Unix timestamp (in seconds).',
									},
								},
								required: [],
							},
							folder: {
								type: 'object',
								description: 'The folder data (when type is `folder`).',
								properties: {
									id: { type: 'string', description: 'The folder ID.' },
									name: { type: 'string', description: 'The folder name.' },
									created_at: {
										type: 'number',
										description: 'When the folder was created.',
									},
									updated_at: {
										type: 'number',
										description: 'When the folder was last updated.',
									},
									thumbnail: {
										type: 'object',
										description: 'A thumbnail for the folder.',
										properties: {
											width: {
												type: 'number',
												description: 'Width in pixels.',
											},
											height: {
												type: 'number',
												description: 'Height in pixels.',
											},
											url: { type: 'string', description: 'Thumbnail URL.' },
										},
										required: [],
									},
								},
								required: [],
							},
							asset: {
								type: 'object',
								description: 'The image/video asset data.',
								properties: {
									id: { type: 'string', description: 'The asset ID.' },
									name: { type: 'string', description: 'The asset name.' },
									created_at: {
										type: 'number',
										description: 'When the asset was created.',
									},
									updated_at: {
										type: 'number',
										description: 'When the asset was last updated.',
									},
									thumbnail: {
										type: 'object',
										description: 'A thumbnail for the asset.',
										properties: {
											width: {
												type: 'number',
												description: 'Width in pixels.',
											},
											height: {
												type: 'number',
												description: 'Height in pixels.',
											},
											url: { type: 'string', description: 'Thumbnail URL.' },
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
				continuation: {
					type: 'string',
					description:
						'A continuation token. Pass this to the `continuation` input parameter to get the next page of results. Empty when there are no more items.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'moveFolderItem',
		label: 'Move a folder item',
		description: 'Moves an item from one folder to another.',
		context:
			'---\nname: moveFolderItem\ndescription: Moves an item from one folder to another.\n---\n\nMoves an item (design, folder, image, or video) from one folder to another.\nThe response body is empty on success (HTTP 204).\n\nRefer to the [Move folder item API reference](https://www.canva.dev/docs/connect/api-reference/folders/move-folder-item/) for details.',
		accounts: { canva: { scope: ['folder:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				to_folder_id: {
					type: 'string',
					description: 'The ID of the folder to move the item to.',
				},
				item_id: { type: 'string', description: 'The ID of the item to move.' },
			},
			required: ['to_folder_id', 'item_id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'canva',
		appVersion: 1,
		endpointName: 'updateAsset',
		label: 'Update an asset',
		description: 'Updates the metadata for an asset.',
		context:
			'---\nname: updateAsset\ndescription: Updates the metadata for an asset.\n---\n\nUpdates the name and/or tags for an asset. Perform a `getAsset` call first to retrieve\ncurrent values, since omitted fields may be cleared.\n\nRefer to the [Update asset API reference](https://www.canva.dev/docs/connect/api-reference/assets/update-asset/) for details.',
		accounts: { canva: { scope: ['asset:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				assetId: { type: 'string', description: 'The ID of the asset to update.' },
				name: { type: 'string', description: 'The new name for the asset.' },
				tags: {
					type: 'array',
					description:
						'Tags to attach to the asset. Users can search by these tags in the Canva UI.',
					items: { type: 'string', description: 'A tag value.' },
				},
			},
			required: ['assetId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				asset: {
					type: 'object',
					description: 'The updated asset object.',
					properties: {
						type: {
							type: 'string',
							description: 'The type of the asset. Values: `image`, `video`.',
						},
						id: { type: 'string', description: 'The asset ID.' },
						name: { type: 'string', description: 'The name of the asset.' },
						tags: {
							type: 'array',
							description: 'User-facing tags attached to the asset.',
							items: { type: 'string', description: 'A tag value.' },
						},
						created_at: {
							type: 'number',
							description:
								'When the asset was added to Canva, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the asset was last updated, as a Unix timestamp (in seconds).',
						},
						owner: {
							type: 'object',
							description: 'Metadata for the asset owner.',
							properties: {
								user_id: {
									type: 'string',
									description: 'The user ID of the owner.',
								},
								team_id: {
									type: 'string',
									description: 'The team ID of the owner.',
								},
							},
							required: [],
						},
						thumbnail: {
							type: 'object',
							description: 'A thumbnail image representing the asset.',
							properties: {
								width: { type: 'number', description: 'Width in pixels.' },
								height: { type: 'number', description: 'Height in pixels.' },
								url: {
									type: 'string',
									description: 'Thumbnail URL. Expires after 15 minutes.',
								},
							},
							required: [],
						},
						metadata: {
							type: 'object',
							description:
								'Type-specific metadata for the asset. For images: type, width, height, smart_tags. For videos: type, width, height, duration_ms.',
							properties: {
								type: {
									type: 'string',
									description: 'The metadata type. Values: `image`, `video`.',
								},
								width: { type: 'number', description: 'The width in pixels.' },
								height: { type: 'number', description: 'The height in pixels.' },
								smart_tags: {
									type: 'array',
									description: 'AI-generated tags for images.',
									items: { type: 'string', description: 'A smart tag value.' },
								},
								duration_ms: {
									type: 'number',
									description:
										'The duration of the video in milliseconds. Only present for video assets.',
								},
							},
							required: [],
						},
						import_status: {
							type: 'object',
							description: 'The import status of the asset.',
							properties: {
								state: { type: 'string', description: 'State of the import job.' },
								error: {
									type: 'object',
									description: 'Error details if the import failed.',
									properties: {
										message: { type: 'string', description: 'Error message.' },
										code: {
											type: 'string',
											description:
												'Error code. Values: `file_too_big`, `import_failed`.',
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
		appName: 'canva',
		appVersion: 1,
		endpointName: 'updateFolder',
		label: 'Update a folder',
		description: "Updates a folder's metadata.",
		context:
			"---\nname: updateFolder\ndescription: Updates a folder's metadata.\n---\n\nUpdates the name of an existing folder. Perform a `getFolder` call first to retrieve the current name\nbefore updating, since omitted fields may be overwritten.\n\nRefer to the [Update folder API reference](https://www.canva.dev/docs/connect/api-reference/folders/update-folder/) for details.",
		accounts: { canva: { scope: ['folder:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				folderId: { type: 'string', description: 'The ID of the folder to update.' },
				name: {
					type: 'string',
					description:
						'The new name for the folder. Must be between 1 and 255 characters.',
				},
			},
			required: ['folderId', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				folder: {
					type: 'object',
					description: 'The updated folder object.',
					properties: {
						id: { type: 'string', description: 'The folder ID.' },
						name: { type: 'string', description: 'The folder name.' },
						created_at: {
							type: 'number',
							description:
								'When the folder was created, as a Unix timestamp (in seconds).',
						},
						updated_at: {
							type: 'number',
							description:
								'When the folder was last updated, as a Unix timestamp (in seconds).',
						},
						thumbnail: {
							type: 'object',
							description: 'A thumbnail image representing the folder.',
							properties: {
								width: {
									type: 'number',
									description: 'The width of the thumbnail image in pixels.',
								},
								height: {
									type: 'number',
									description: 'The height of the thumbnail image in pixels.',
								},
								url: {
									type: 'string',
									description:
										'A URL for retrieving the thumbnail image. Expires after 15 minutes.',
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
];
