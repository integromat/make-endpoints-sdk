// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query\nstring, headers and body) to the Notion API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.notion.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1/users`). Authentication is handled automatically via the app\'s connection — do not add an\n`Authorization` header.\n\n## Request body\n\nThe body is forwarded verbatim (`"type": "text"` in the communication block), so it must be passed as\na JSON **string**, not as a structured object. Serialize the payload before calling. An object is\nrejected by Notion with `[400] Error parsing JSON body`. The default `Content-Type: application/json`\nheader applies.\n\n## API version\n\nThe `Notion-Version` header defaults to `2026-03-11`. This is deliberately newer than the\n`2021-08-16` default of the "Make an API Call" module: data sources (`/v1/data_sources/...`) were\nintroduced in `2025-09-03` and are unreachable on the older version, and the other Notion Endpoints\nare all built against `2026-03-11`.\n\nSet the Notion version input explicitly only to pin an older version. Be aware that doing so can\nchange response shapes and can make newer routes return `404`.\n\nRefer to the [Notion API reference](https://developers.notion.com/reference/intro) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
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
						'Enter a path relative to `https://api.notion.com`. For example, `/v1/users`.',
				},
				version: {
					type: 'string',
					description:
						'The API version sent in the `Notion-Version` header. Defaults to `2026-03-11`. See [Versioning](https://developers.notion.com/reference/versioning).',
					default: '2026-03-11',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"You don't have to add authorization headers; we already did that for you.",
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
						'The HTTP request body, sent to the API exactly as provided. It must be a **JSON string**, not a structured object — for example `{"parent": {"page_id": "..."}, "properties": {}}` passed as text. Passing an object fails with `[400] Error parsing JSON body`. This input is ignored when the HTTP request method is `GET`.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body returned by the Notion API.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers returned by the Notion API.',
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
		appName: 'notion',
		appVersion: 1,
		endpointName: 'createDataSourceItem',
		label: 'Create a data source item',
		description: 'Creates a new item in a data source.',
		context:
			"---\nname: createDataSourceItem\ndescription: Creates a new item in a data source\n---\n\nCreates a new page (row) under a Notion data source.\n\n## Required inputs\n\n- `dataSourceId` — parent data source ID\n- `fields` — property values using the same Generic Fields shape as the\n  Create a Data Source Item module (`key` / `type` / nested `value`).\n  Values are translated via `mapProperties` into Notion's `properties` object.\n\nA title property must be included in `fields`.\n\n## Optional\n\n- `icon` — page icon (emoji, external URL, file, etc.)\n- `cover` — page cover image\n\nThe response is the created page object after `searchResponse` normalization:\n`properties` is an array of typed entries (with `label` = property name), and\n`properties_value` is a name→value map for convenience.\n",
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				dataSourceId: {
					type: 'string',
					description: 'ID of the data source that will parent the new page (row).',
				},
				fields: {
					type: 'array',
					description:
						'Same shape as Create a Data Source Item Generic Fields. Passed through mapProperties.',
					items: {
						type: 'object',
						properties: {
							key: {
								type: 'string',
								description:
									'Property name (column name) or property ID to update.',
							},
							type: {
								type: 'string',
								description:
									'Notion property value type to write (title, rich_text, select, status, number, date, people, relation, etc.).',
								enum: [
									'title',
									'text',
									'rich_text',
									'email',
									'select',
									'status',
									'multi_select',
									'phone_number',
									'checkbox',
									'url',
									'number',
									'people',
									'relation',
									'date',
								],
							},
						},
						required: ['key', 'type'],
						allOf: [
							{
								if: { properties: { type: { const: 'title' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'text' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'rich_text' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'email' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'select' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'status' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'multi_select' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'array',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'phone_number' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'checkbox' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'boolean',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'url' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'number' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'number',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'people' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'array',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'relation' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'array',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'date' } } },
								then: {
									type: 'object',
									properties: {
										date: {
											type: 'object',
											description:
												'Date property config (empty) or date object (start, optional end, time_zone) as the page property value.',
											properties: {
												start: {
													type: 'string',
													description:
														'A date, with an optional time. If the value is a range, start is the start of the range.',
												},
												end: {
													type: 'string',
													description:
														'Optional end of a date range. Null if the date value is not a range.',
												},
												includeTime: {
													type: 'boolean',
													description:
														'If true, format start/end with time-of-day when sending to Notion.',
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
				icon: {
					type: 'object',
					description:
						'Optional page icon (emoji, external URL, native icon, custom emoji, or file_upload).',
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description: 'Optional page cover image (external URL or file_upload).',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
			},
			required: ['dataSourceId', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				id: { type: 'string', description: 'ID of the created page.' },
				created_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was created.',
				},
				last_edited_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was last edited.',
				},
				created_by: {
					type: 'object',
					description: 'Partial user object for who created this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the creator.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				last_edited_by: {
					type: 'object',
					description: 'Partial user object for who last edited this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the last editor.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				parent: {
					type: 'object',
					description:
						'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
					properties: {
						type: {
							type: 'string',
							description:
								'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
						},
						workspace: {
							type: 'boolean',
							description: 'True when the parent type is workspace.',
						},
						page_id: {
							type: 'string',
							description: 'ID of the parent page when type is page_id.',
						},
						database_id: {
							type: 'string',
							description: 'ID of the parent database when type is database_id.',
						},
						data_source_id: {
							type: 'string',
							description:
								'ID of the parent data source when type is data_source_id.',
						},
						block_id: {
							type: 'string',
							description: 'ID of the parent block when type is block_id.',
						},
					},
					required: [],
				},
				icon: {
					type: 'object',
					description:
						'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description:
						'Cover image. Discriminated union on type (external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				archived: {
					type: 'boolean',
					description: 'Set true to move the page to trash; false to restore it.',
				},
				in_trash: { type: 'boolean', description: 'Whether the object is in the trash.' },
				is_archived: {
					type: 'boolean',
					description: 'Whether the page has been archived.',
				},
				is_locked: {
					type: 'boolean',
					description: 'Whether the object is locked from editing in the Notion app UI.',
				},
				url: {
					type: 'string',
					description:
						'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
				},
				public_url: {
					type: 'string',
					description:
						'Public URL if the object has been published to the web; otherwise null.',
				},
				properties: {
					type: 'array',
					description:
						'Page property values after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→value map.',
				},
				properties_value: {
					type: 'object',
					description:
						'Map of property name to typed value, derived from properties by searchResponse.',
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'getDatabase',
		label: 'Get a database',
		description: 'Gets a specified database.',
		context:
			'---\nname: getDatabase\ndescription: Gets a specified database\n---\n\nRetrieves a Notion database by ID. A database is a container for one or more\ndata sources (the schema/table layer introduced in Notion API version\n2025-09-03).\n\nThe response includes title, description, parent, icon, cover, trash/lock\nflags, and the list of contained `data_sources` (id + name).\n\nUse `getDataSource` to fetch the full schema of a specific data source.\n',
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'ID of a Notion database (container for one or more data sources).',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				id: {
					type: 'string',
					description:
						'ID of a Notion database (container for one or more data sources).',
				},
				description: {
					type: 'array',
					description: 'Optional description text for this object or property.',
					items: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								description:
									'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
							},
							text: {
								type: 'object',
								description:
									'Text payload for a rich text item of type text (content + optional link).',
								properties: {
									content: {
										type: 'string',
										description:
											'The actual text content of the text rich text item (max 2000 characters).',
									},
									link: {
										type: 'string',
										description:
											'Inline link object with url, if this text is linked.',
									},
								},
								required: [],
							},
							annotations: {
								type: 'object',
								description:
									'Styling for a rich text object (bold, italic, strikethrough, underline, code, color).',
								properties: {
									bold: {
										type: 'boolean',
										description: 'Whether the text is bold.',
									},
									italic: {
										type: 'boolean',
										description: 'Whether the text is italic.',
									},
									strikethrough: {
										type: 'boolean',
										description: 'Whether the text is struck through.',
									},
									underline: {
										type: 'boolean',
										description: 'Whether the text is underlined.',
									},
									code: {
										type: 'boolean',
										description: 'Whether the text is styled as inline code.',
									},
									color: {
										type: 'string',
										description:
											'Rich text color, including background variants (e.g. default, blue, blue_background).',
									},
								},
								required: [],
							},
							plain_text: {
								type: 'string',
								description:
									'Plain text content of the rich text object, without styling.',
							},
							href: {
								type: 'string',
								description:
									'URL that this rich text object links to or mentions, if any.',
							},
						},
						required: [],
					},
				},
				parent: {
					type: 'object',
					description:
						'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
					properties: {
						type: {
							type: 'string',
							description:
								'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
						},
						workspace: {
							type: 'boolean',
							description: 'True when the parent type is workspace.',
						},
						page_id: {
							type: 'string',
							description: 'ID of the parent page when type is page_id.',
						},
						database_id: {
							type: 'string',
							description: 'ID of the parent database when type is database_id.',
						},
						data_source_id: {
							type: 'string',
							description:
								'ID of the parent data source when type is data_source_id.',
						},
						block_id: {
							type: 'string',
							description: 'ID of the parent block when type is block_id.',
						},
					},
					required: [],
				},
				is_inline: {
					type: 'boolean',
					description: 'Whether the database/data source is inline.',
				},
				archived: {
					type: 'boolean',
					description:
						'Whether the object is in the trash. Aliased from in_trash for BC.',
				},
				in_trash: { type: 'boolean', description: 'Whether the object is in the trash.' },
				is_locked: {
					type: 'boolean',
					description: 'Whether the object is locked from editing in the Notion app UI.',
				},
				created_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was created.',
				},
				last_edited_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was last edited.',
				},
				data_sources: {
					type: 'array',
					description: 'Data sources contained in this database.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'The ID of the data source.' },
							name: { type: 'string', description: 'The name of the data source.' },
						},
						required: [],
					},
				},
				icon: {
					type: 'object',
					description:
						'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description:
						'Cover image. Discriminated union on type (external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				url: {
					type: 'string',
					description:
						'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
				},
				public_url: {
					type: 'string',
					description:
						'Public URL if the object has been published to the web; otherwise null.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'getDataSource',
		label: 'Get a data source',
		description: 'Gets a specified data source.',
		context:
			'---\nname: getDataSource\ndescription: Gets a specified data source\n---\n\nRetrieves a Notion data source by ID, including its property schema and\nmetadata (title, description, parent, icon, cover, trash/archive flags).\n\n## Data sources vs databases\n\nAs of Notion API version 2025-09-03, databases are containers and data sources\nhold the actual property schema and rows. Prefer data source IDs for query and\ncreate-item operations.\n\nThe `properties` array describes each column after `searchResponse` normalization\n(type, options, relation targets, rollup config, etc., with `label` = property\nname). `properties_value` is a name→config map. `database_parent` is the parent\nof the containing database (API 2026-03-11).\n',
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'ID of the data source to retrieve (schema + metadata).',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				id: {
					type: 'string',
					description: 'ID of the data source to retrieve (schema + metadata).',
				},
				created_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was created.',
				},
				last_edited_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was last edited.',
				},
				created_by: {
					type: 'object',
					description: 'Partial user object for who created this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the creator.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				last_edited_by: {
					type: 'object',
					description: 'Partial user object for who last edited this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the last editor.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				icon: {
					type: 'object',
					description:
						'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description:
						'Cover image. Discriminated union on type (external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				description: {
					type: 'array',
					description: 'Optional description text for this object or property.',
					items: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								description:
									'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
							},
							text: {
								type: 'object',
								description:
									'Text payload for a rich text item of type text (content + optional link).',
								properties: {
									content: {
										type: 'string',
										description:
											'The actual text content of the text rich text item (max 2000 characters).',
									},
									link: {
										type: 'string',
										description:
											'Inline link object with url, if this text is linked.',
									},
								},
								required: [],
							},
							annotations: {
								type: 'object',
								description:
									'Styling for a rich text object (bold, italic, strikethrough, underline, code, color).',
								properties: {
									bold: {
										type: 'boolean',
										description: 'Whether the text is bold.',
									},
									italic: {
										type: 'boolean',
										description: 'Whether the text is italic.',
									},
									strikethrough: {
										type: 'boolean',
										description: 'Whether the text is struck through.',
									},
									underline: {
										type: 'boolean',
										description: 'Whether the text is underlined.',
									},
									code: {
										type: 'boolean',
										description: 'Whether the text is styled as inline code.',
									},
									color: {
										type: 'string',
										description:
											'Rich text color, including background variants (e.g. default, blue, blue_background).',
									},
								},
								required: [],
							},
							plain_text: {
								type: 'string',
								description:
									'Plain text content of the rich text object, without styling.',
							},
							href: {
								type: 'string',
								description:
									'URL that this rich text object links to or mentions, if any.',
							},
						},
						required: [],
					},
				},
				is_inline: {
					type: 'boolean',
					description: 'Whether the database/data source is inline.',
				},
				database_parent: {
					type: 'object',
					description:
						"Parent of the data source's containing database (typically a page, block, or workspace).",
					properties: {
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						workspace: {
							type: 'boolean',
							description: 'True when the parent type is workspace.',
						},
						page_id: {
							type: 'string',
							description: 'ID of the parent page when type is page_id.',
						},
						database_id: {
							type: 'string',
							description: 'ID of the parent database when type is database_id.',
						},
						block_id: {
							type: 'string',
							description: 'ID of the parent block when type is block_id.',
						},
					},
					required: [],
				},
				public_url: {
					type: 'string',
					description:
						'Public URL if the object has been published to the web; otherwise null.',
				},
				in_trash: { type: 'boolean', description: 'Whether the object is in the trash.' },
				archived: {
					type: 'boolean',
					description: 'Set true to move the page to trash; false to restore it.',
				},
				url: {
					type: 'string',
					description:
						'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
				},
				properties: {
					type: 'array',
					description:
						'Data source property schema after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→config map.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description:
									'Underlying identifier for the property. Remains constant when the property name changes; may be used in place of name.',
							},
							name: {
								type: 'string',
								description: 'Name of the property as it appears in Notion.',
							},
							description: {
								type: 'string',
								description: 'Description of the property as it appears in Notion.',
							},
							type: {
								type: 'string',
								description:
									'Property type controlling behavior (checkbox, title, rich_text, select, status, relation, etc.).',
							},
							label: {
								type: 'string',
								description:
									'Human-readable label for this property (usually the property name).',
							},
							people: {
								type: 'object',
								description:
									'People property config (empty) or array of user objects as the page property value.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							url: {
								type: 'object',
								description:
									'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							select: {
								type: 'object',
								description:
									'Select property: options config on a data source, or selected option (id/name/color) on a page.',
								properties: {
									options: {
										type: 'array',
										description:
											'Array of select/status options (id, name, color).',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description:
														'Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.',
												},
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												color: {
													type: 'string',
													description:
														"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							status: {
								type: 'object',
								description:
									'Status property: options/groups config on a data source, or selected status option on a page.',
								properties: {
									options: {
										type: 'array',
										description:
											'Array of select/status options (id, name, color).',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description:
														'Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.',
												},
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												color: {
													type: 'string',
													description:
														"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
												},
											},
											required: [],
										},
									},
									groups: {
										type: 'array',
										description: 'Status groups (id, name, color, option_ids).',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description:
														'Identifier for this status group.',
												},
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												color: {
													type: 'string',
													description:
														"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
												},
												option_ids: {
													type: 'array',
													description:
														'Sorted list of option ids that belong to this status group.',
													items: { type: 'string' },
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							email: {
								type: 'object',
								description: 'Email address.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							phone_number: {
								type: 'object',
								description:
									'Phone number property config (empty) or phone number string value. No format is enforced.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							multi_select: {
								type: 'object',
								description:
									'Multi-select property: options config on a data source, or array of selected options on a page.',
								properties: {
									options: {
										type: 'array',
										description:
											'Array of select/status options (id, name, color).',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description:
														'Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.',
												},
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												color: {
													type: 'string',
													description:
														"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							date: {
								type: 'object',
								description:
									'Date property config (empty) or date object (start, optional end, time_zone) as the page property value.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							checkbox: {
								type: 'object',
								description:
									'Checkbox property config (empty) or boolean value when used as a page property value.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							number: {
								type: 'object',
								description:
									'Number property: format config on a data source, or numeric value on a page / unique_id count.',
								properties: {
									format: {
										type: 'string',
										description:
											'How the number displays in Notion (number, percent, dollar, euro, etc.).',
									},
								},
								required: [],
							},
							files: {
								type: 'object',
								description:
									'Files property config (empty) or array of file objects as the page property value.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							rich_text: {
								type: 'object',
								description:
									'Rich text property config (empty) or array of rich text items as the page property value.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							text: {
								type: 'object',
								description:
									'Text payload for a rich text item of type text (content + optional link).',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							formula: {
								type: 'object',
								description:
									'Formula property: expression config on a data source, or computed result on a page.',
								properties: {
									expression: {
										type: 'string',
										description:
											'The formula used to compute values. Refer to the Notion help center for syntax.',
									},
								},
								required: [],
							},
							relation: {
								type: 'object',
								description:
									'Relation property config (data_source_id, optional dual_property) or array of related page references / relation value object.',
								properties: {
									data_source_id: {
										type: 'string',
										description:
											'ID of the parent data source when type is data_source_id.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the parent database when type is database_id.',
									},
									synced_property_name: {
										type: 'string',
										description:
											'Name of the corresponding property in the related data source for a dual relation.',
									},
									synced_property_id: {
										type: 'string',
										description:
											'ID of the corresponding property in the related data source for a dual relation.',
									},
									dual_property: {
										type: 'object',
										description:
											'Bidirectional relation sync metadata (synced_property_id, synced_property_name).',
										properties: {
											synced_property_id: {
												type: 'string',
												description:
													'ID of the corresponding property in the related data source for a dual relation.',
											},
											synced_property_name: {
												type: 'string',
												description:
													'Name of the corresponding property in the related data source for a dual relation.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							rollup: {
								type: 'object',
								description:
									'Rollup property config (relation/rollup property refs + function) or computed rollup value on a page.',
								properties: {
									relation_property_name: {
										type: 'string',
										description:
											'Name of the relation property used by this rollup.',
									},
									rollup_property_name: {
										type: 'string',
										description: 'Name of the property being rolled up.',
									},
									relation_property_id: {
										type: 'string',
										description:
											'ID of the relation property used by this rollup.',
									},
									rollup_property_id: {
										type: 'string',
										description: 'ID of the property being rolled up.',
									},
									function: {
										type: 'string',
										description:
											'Rollup aggregation function (e.g. sum, count, average, show_original).',
									},
								},
								required: [],
							},
							unique_id: {
								type: 'object',
								description:
									'Unique ID property: optional prefix config on a data source, or {number, prefix} value on a page (read-only).',
								properties: {
									prefix: {
										type: 'string',
										description:
											'Optional prefix applied to the unique ID (e.g. TASK).',
									},
								},
								required: [],
							},
							last_edited_time: {
								type: 'object',
								description:
									'ISO 8601 date and time when this object was last edited.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							last_edited_by: {
								type: 'object',
								description: 'Partial user object for who last edited this object.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							created_time: {
								type: 'object',
								description: 'ISO 8601 date and time when this object was created.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							created_by: {
								type: 'object',
								description: 'Partial user object for who created this object.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				properties_value: {
					type: 'object',
					description:
						'Map of property name to schema/config payload, derived from properties by searchResponse.',
					additionalProperties: true,
				},
				parent: {
					type: 'object',
					description:
						'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
					properties: {
						type: {
							type: 'string',
							description:
								'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
						},
						workspace: {
							type: 'boolean',
							description: 'True when the parent type is workspace.',
						},
						page_id: {
							type: 'string',
							description: 'ID of the parent page when type is page_id.',
						},
						database_id: {
							type: 'string',
							description: 'ID of the parent database when type is database_id.',
						},
						data_source_id: {
							type: 'string',
							description:
								'ID of the parent data source when type is data_source_id.',
						},
						block_id: {
							type: 'string',
							description: 'ID of the parent block when type is block_id.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'getPage',
		label: 'Get a page',
		description: 'Gets a specified page.',
		context:
			'---\nname: getPage\ndescription: Gets a specified page\n---\n\nRetrieves a Notion page by ID, including parent, icon, cover, archive/trash\nflags, and property values.\n\nPage properties are returned after `searchResponse` normalization: `properties`\nis an array of typed entries (with `label` = property name), and\n`properties_value` is a name→value map for convenience.\n\nThis does not return block children (page body content). Use Notion block APIs\nfor that.\n',
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: { id: { type: 'string', description: 'ID of the page to retrieve.' } },
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				id: { type: 'string', description: 'ID of the page to retrieve.' },
				created_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was created.',
				},
				last_edited_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was last edited.',
				},
				created_by: {
					type: 'object',
					description: 'Partial user object for who created this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the creator.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				last_edited_by: {
					type: 'object',
					description: 'Partial user object for who last edited this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the last editor.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				parent: {
					type: 'object',
					description:
						'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
					properties: {
						type: {
							type: 'string',
							description:
								'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
						},
						workspace: {
							type: 'boolean',
							description: 'True when the parent type is workspace.',
						},
						page_id: {
							type: 'string',
							description: 'ID of the parent page when type is page_id.',
						},
						database_id: {
							type: 'string',
							description: 'ID of the parent database when type is database_id.',
						},
						data_source_id: {
							type: 'string',
							description:
								'ID of the parent data source when type is data_source_id.',
						},
						block_id: {
							type: 'string',
							description: 'ID of the parent block when type is block_id.',
						},
					},
					required: [],
				},
				icon: {
					type: 'object',
					description:
						'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description:
						'Cover image. Discriminated union on type (external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				archived: {
					type: 'boolean',
					description: 'Set true to move the page to trash; false to restore it.',
				},
				in_trash: { type: 'boolean', description: 'Whether the object is in the trash.' },
				is_archived: {
					type: 'boolean',
					description: 'Whether the page has been archived.',
				},
				is_locked: {
					type: 'boolean',
					description: 'Whether the object is locked from editing in the Notion app UI.',
				},
				url: {
					type: 'string',
					description:
						'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
				},
				public_url: {
					type: 'string',
					description:
						'Public URL if the object has been published to the web; otherwise null.',
				},
				properties: {
					type: 'array',
					description:
						'Page property values after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→value map.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description:
									'Underlying identifier for the property. Remains constant when the property name changes; may be used in place of name.',
							},
							type: {
								type: 'string',
								description:
									'Property type controlling behavior (checkbox, title, rich_text, select, status, relation, etc.).',
							},
							label: {
								type: 'string',
								description:
									'Human-readable label for this property (usually the property name).',
							},
							name: {
								type: 'string',
								description: 'Name of the property as it appears in Notion.',
							},
							people: {
								type: 'array',
								description:
									'People property config (empty) or array of user objects as the page property value.',
								items: {
									type: 'object',
									properties: {
										object: {
											type: 'string',
											description:
												'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
										},
										id: {
											type: 'string',
											description:
												'User ID of a person mentioned in this property.',
										},
										name: {
											type: 'string',
											description: 'Display name as it appears in Notion.',
										},
										avatar_url: {
											type: 'string',
											description: 'Avatar URL of the user, if any.',
										},
										type: {
											type: 'string',
											description:
												'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
										},
										person: {
											type: 'object',
											description:
												'Details about the person when user type is person.',
											properties: {
												email: {
													type: 'string',
													description: 'Email of the person.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							url: {
								type: 'string',
								description:
									'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
							},
							rich_text: {
								type: 'array',
								description:
									'Rich text property config (empty) or array of rich text items as the page property value.',
							},
							text: {
								type: 'array',
								description:
									'Text payload for a rich text item of type text (content + optional link).',
							},
							select: {
								type: 'object',
								description:
									'Select property: options config on a data source, or selected option (id/name/color) on a page.',
								properties: {
									id: {
										type: 'string',
										description:
											'ID of the select option. You can use id or name when updating.',
									},
									name: {
										type: 'string',
										description:
											'Name of the select option as it appears in Notion. Commas are not valid.',
									},
									color: {
										type: 'string',
										description:
											'Color of the option. Cannot be updated via the API.',
									},
								},
								required: [],
							},
							status: {
								type: 'object',
								description:
									'Status property: options/groups config on a data source, or selected status option on a page.',
								properties: {
									id: { type: 'string', description: 'ID of the status option.' },
									name: {
										type: 'string',
										description:
											'Name of the status option as it appears in Notion.',
									},
									color: {
										type: 'string',
										description:
											'Color of the status option. Cannot be updated via the API.',
									},
								},
								required: [],
							},
							email: { type: 'string', description: 'Email address.' },
							phone_number: {
								type: 'string',
								description:
									'Phone number property config (empty) or phone number string value. No format is enforced.',
							},
							multi_select: {
								type: 'array',
								description:
									'Multi-select property: options config on a data source, or array of selected options on a page.',
							},
							date: {
								type: 'object',
								description:
									'Date property config (empty) or date object (start, optional end, time_zone) as the page property value.',
								properties: {
									start: {
										type: 'string',
										description:
											'A date, with an optional time. If the value is a range, start is the start of the range.',
									},
									end: {
										type: 'string',
										description:
											'Optional end of a date range. Null if the date value is not a range.',
									},
									time_zone: {
										type: 'string',
										description: 'IANA time zone of the date object, if any.',
									},
								},
								required: [],
							},
							checkbox: {
								type: 'boolean',
								description:
									'Checkbox property config (empty) or boolean value when used as a page property value.',
							},
							number: {
								type: 'number',
								description:
									'Number property: format config on a data source, or numeric value on a page / unique_id count.',
							},
							files: {
								type: 'array',
								description:
									'Files property config (empty) or array of file objects as the page property value.',
							},
							last_edited_time: {
								type: 'string',
								description:
									'ISO 8601 date and time when this object was last edited.',
							},
							created_time: {
								type: 'string',
								description: 'ISO 8601 date and time when this object was created.',
							},
							last_edited_by: {
								type: 'object',
								description: 'Partial user object for who last edited this object.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							created_by: {
								type: 'object',
								description: 'Partial user object for who created this object.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							formula: {
								type: 'object',
								description:
									'Formula property: expression config on a data source, or computed result on a page.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							relation: {
								type: 'array',
								description:
									'Relation property config (data_source_id, optional dual_property) or array of related page references / relation value object.',
							},
							rollup: {
								type: 'object',
								description:
									'Rollup property config (relation/rollup property refs + function) or computed rollup value on a page.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							unique_id: {
								type: 'object',
								description:
									'Unique ID property: optional prefix config on a data source, or {number, prefix} value on a page (read-only).',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							verification: {
								type: 'object',
								description:
									'Wiki verification status of a page (state, verified_by, date).',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				properties_value: {
					type: 'object',
					description:
						'Map of property name to typed value, derived from properties by searchResponse.',
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'getPageMarkdown',
		label: 'Get page markdown',
		description: "Returns a page's content as Markdown, with the raw blocks.",
		context:
			"---\nname: getPageMarkdown\ndescription: Returns a page's content as Markdown, with the raw blocks\n---\n\nReturns one page of child blocks for a Notion page or block, both rendered as\nMarkdown and as the raw block JSON Notion returns.\n\n> **`markdown` is experimental.** It is a derived convenience field; `results`\n> is the authoritative content. The rendering may change as block-type\n> coverage improves. For anything that must be exact, read `results`.\n\n## What to pass\n\n`blockId` takes a page ID or any block ID. Reading a page's content means\npassing the page ID; reading nested content means passing a child block's ID.\n\n## What `markdown` contains\n\nThe blocks in `results`, and only those, rendered in document order. Nothing\nis dropped from `results` to build it — the two are the same data.\n\n| Notion block | Markdown |\n| --- | --- |\n| `paragraph` | the text |\n| `heading_1` / `heading_2` / `heading_3` | `#` / `##` / `###` |\n| `bulleted_list_item` | `- item` |\n| `numbered_list_item` | `1. item` |\n| `to_do` | `- [ ]` or `- [x]` |\n| `toggle` | its summary line |\n| `quote` | `> text` |\n| `callout` | `> emoji text` |\n| `code` | fenced block tagged with the language |\n| `divider` | `---` |\n| `equation` | `$$ ... $$` |\n| `image` | `![caption](url)` |\n| `video` / `audio` / `pdf` / `file` | `[caption](url)` |\n| `bookmark` / `embed` / `link_preview` | `[caption or url](url)` |\n| `child_page` / `child_database` | `## title` |\n| `link_to_page` | `[Linked page](notion url)` |\n| `table_row` | a pipe row, with a header separator after the first |\n\nInline formatting follows the rich text: bold, italic, strikethrough, inline\ncode, links, and inline equations.\n\nAny type not listed contributes no text of its own. It stays fully present in\n`results`.\n\n## Nested content\n\nThere is no recursion. Any block with `has_children: true` holds content this\nresponse does not include. Wherever that happens, `markdown` carries a marker\nnaming the type and the ID to call next:\n\n```\n<!-- nested: toggle 9e3a10bf-6d80-48a7-8963-bab5745d7ef0 -->\n```\n\nIt is an HTML comment, so it vanishes when the Markdown is rendered. Call the\nendpoint again with that ID and splice the result in where the marker sits.\n\nBlocks that routinely nest: `toggle`, `table` (children are `table_row`),\n`column_list` (children are `column`, which in turn hold the real blocks),\n`synced_block`, toggleable headings, and any list item or callout with\nindented content beneath it.\n\nA page laid out in columns, or built around a table, therefore yields little\nbut markers on the first call. That is expected — its content is one or two\nlevels down.\n\n## Pagination\n\nOne call returns one page of blocks. To read everything:\n\n1. Call without `startCursor`.\n2. While `has_more` is true, call again with `startCursor` = `next_cursor`.\n\n`pageSize` accepts 1 to 100 and defaults to 100.\n\nJoin the `markdown` of successive pages with a blank line. Two caveats: a list\nsplit across a page boundary may render as two lists, and every numbered item\nis emitted as `1.` so the renderer does the counting — which keeps numbering\ncorrect across pages but means the literal string carries no numbers.\n\n## Reading text yourself\n\n`markdown` flattens formatting detail. When you need it exactly — colors,\nunderline, mention targets — read `results` instead. Text lives in `rich_text`\narrays on the type-specific payload; for a paragraph that is\n`paragraph.rich_text`. Concatenate `plain_text` across the array for the plain\nstring; `annotations` and `href` carry the formatting. `table_row.cells` is an\narray of these arrays, one per column.\n\n## Block types\n\n`type` names the one sibling field that is populated. Twenty-one common types\nare declared in the output schema. Rarer ones — `column_list`, `column`,\n`synced_block`, `table_of_contents`, `breadcrumb`, `template`, `video`,\n`audio`, `pdf`, `file`, `embed`, `link_preview` — are returned by the API but\nnot declared; read them from the response directly. `unsupported` means the\nAPI itself cannot read the block.\n\n## Connection scope\n\nNo scopes are declared. Notion uses capability-based OAuth — a page or block\nis reachable only if the integration has been shared on it — so there are no\ngranular API scopes to request.\n\n## Limitations\n\n- One API call per invocation: no pagination loop and no recursion.\n- `markdown` covers only the blocks in this response. Content under a block\n  with `has_children: true` is absent until you call again with that ID; a\n  `<!-- nested: ... -->` marker shows where.\n- A page built from columns or tables yields near-empty `markdown` on the\n  first call, since `column_list` and `table` hold their content in children.\n- Block types with no Markdown mapping contribute no text. They remain fully\n  present in `results`.\n- Tables assume the first row is a header, because the parent `table` block's\n  `has_column_header` flag is not visible to the conversion.\n- Numbered lists emit `1.` for every item and rely on the renderer to number\n  them.\n- Underline has no Markdown equivalent and is dropped; `results` keeps it in\n  `annotations`.\n- Only content in pages shared with the connection is readable.\n- `archived` is an alias of `in_trash` added by the app, not a Notion field.\n- File and image URLs of type `file` are temporary and expire, normally within an hour.\n",
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
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
				blockId: {
					type: 'string',
					description:
						'ID of the page or block whose children you want. Any block ID works, not just a page — this is how you descend into nested content. Accepts the hyphenated or unhyphenated UUID form.',
				},
				startCursor: {
					type: 'string',
					description:
						'Pass the `next_cursor` from the previous response to get the next page of blocks. Omit for the first page.',
				},
				pageSize: {
					type: 'number',
					description: 'Number of blocks to return, 1 to 100. Defaults to 100.',
					default: 100,
					minimum: 1,
					maximum: 100,
				},
			},
			required: ['blockId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				markdown: {
					type: 'string',
					description:
						'Experimental. The blocks in this response rendered as Markdown. This is a derived convenience field - results is the authoritative content, and the rendering may change as block-type coverage improves. It covers only the blocks in this response: content under a block with has_children is absent until you call again with that block ID, and an HTML comment of the form <!-- nested: type id --> marks every place that happens. Block types with no Markdown mapping contribute no text here but remain in results.',
				},
				object: {
					type: 'string',
					description: 'Always `list` for a paginated Notion list response.',
				},
				type: {
					type: 'string',
					description: 'Always `block` for a block children response.',
				},
				block: {
					type: 'object',
					description: 'An empty object included by Notion as the list discriminator.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				results: {
					type: 'array',
					description:
						'Child blocks of the requested block, in document order. Empty array when the block has no children.',
					items: {
						type: 'object',
						description:
							'A Notion block object. `type` names the one type-specific field that is populated.',
						properties: {
							object: { type: 'string', description: 'Always `block`.' },
							id: {
								type: 'string',
								description:
									'ID of this block. Pass it back as `blockId` to read its children.',
							},
							type: {
								type: 'string',
								description:
									'Block type. Only the sibling field with this same name is populated.',
							},
							has_children: {
								type: 'boolean',
								description:
									"Whether this block has nested content. When true, that content is NOT in this response — call the endpoint again with this block's `id`.",
							},
							parent: {
								type: 'object',
								description:
									'Parent of this block. Not always the block you queried — some blocks report a `workspace` parent.',
								properties: {
									type: {
										type: 'string',
										description:
											'One of: page_id, block_id, database_id, data_source_id, workspace.',
									},
									page_id: {
										type: 'string',
										description:
											'ID of the parent page when type is `page_id`.',
									},
									block_id: {
										type: 'string',
										description:
											'ID of the parent block when type is `block_id`. Set on blocks nested inside a toggle, column, or table.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the parent database when type is `database_id`.',
									},
									data_source_id: {
										type: 'string',
										description:
											'ID of the parent data source when type is `data_source_id`.',
									},
									workspace: {
										type: 'boolean',
										description: 'True when the parent type is `workspace`.',
									},
								},
								required: [],
							},
							created_time: {
								type: 'string',
								description: 'ISO 8601 date and time when this block was created.',
							},
							last_edited_time: {
								type: 'string',
								description:
									'ISO 8601 date and time when this block was last edited.',
							},
							created_by: {
								type: 'object',
								description:
									'Partial user object for who created this block. In practice contains only `object` and `id`.',
								properties: {
									object: { type: 'string', description: 'Always `user`.' },
									id: { type: 'string', description: 'User ID.' },
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description: 'User type, either `person` or `bot`.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is `person`.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							last_edited_by: {
								type: 'object',
								description:
									'Partial user object for who last edited this block. In practice contains only `object` and `id`.',
								properties: {
									object: { type: 'string', description: 'Always `user`.' },
									id: { type: 'string', description: 'User ID.' },
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description: 'User type, either `person` or `bot`.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is `person`.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							in_trash: {
								type: 'boolean',
								description: 'Whether this block is in the trash.',
							},
							archived: {
								type: 'boolean',
								description:
									'Alias of `in_trash` added by `aliasFields` for compatibility with the legacy Notion field name.',
							},
							paragraph: {
								type: 'object',
								description: 'Populated when `type` is `paragraph`.',
								properties: {
									rich_text: {
										type: 'array',
										description:
											'Text content. Concatenate `plain_text` across items for the plain string. Empty array for a blank line.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background, for example `default`, `red`, or `yellow_background`.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									icon: {
										type: 'object',
										description:
											'Optional icon on the paragraph. Normally null. Same union as a page or callout icon.',
										properties: {
											type: {
												type: 'string',
												description:
													'Icon type. One of: emoji, custom_emoji, icon, external, file.',
											},
											emoji: {
												type: 'string',
												description:
													'Standard emoji character used as the icon.',
											},
											external: {
												type: 'object',
												description:
													'Externally hosted image referenced by URL.',
												properties: {
													url: {
														type: 'string',
														description:
															'URL of the external file or resource.',
													},
												},
												required: [],
											},
											file: {
												type: 'object',
												description: 'Notion-hosted file object.',
												properties: {
													url: {
														type: 'string',
														description:
															'Temporary URL of the Notion-hosted file.',
													},
													expiry_time: {
														type: 'string',
														description:
															'Time when the temporary file URL will expire.',
													},
												},
												required: [],
											},
											custom_emoji: {
												type: 'object',
												description:
													'Workspace custom emoji used as the icon.',
												properties: {
													id: {
														type: 'string',
														description: 'ID of the custom emoji.',
													},
													name: {
														type: 'string',
														description: 'Name of the custom emoji.',
													},
													url: {
														type: 'string',
														description:
															'URL of the custom emoji image.',
													},
												},
												required: [],
											},
											icon: {
												type: 'object',
												description:
													'Notion native icon, specified by name and color.',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the Notion icon.',
													},
													color: {
														type: 'string',
														description:
															'Color variant of the Notion icon.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									color: {
										type: 'string',
										description:
											'Block text or background color, `default` when unstyled.',
									},
								},
								required: [],
							},
							heading_1: {
								type: 'object',
								description: 'Populated when `type` is `heading_1`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'Heading text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
									is_toggleable: {
										type: 'boolean',
										description:
											'Whether the heading collapses. When true the block also has children.',
									},
								},
								required: [],
							},
							heading_2: {
								type: 'object',
								description:
									'Populated when `type` is `heading_2`. Same shape as `heading_1`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'Heading text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
									is_toggleable: {
										type: 'boolean',
										description:
											'Whether the heading collapses. When true the block also has children.',
									},
								},
								required: [],
							},
							heading_3: {
								type: 'object',
								description:
									'Populated when `type` is `heading_3`. Same shape as `heading_1`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'Heading text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
									is_toggleable: {
										type: 'boolean',
										description:
											'Whether the heading collapses. When true the block also has children.',
									},
								},
								required: [],
							},
							bulleted_list_item: {
								type: 'object',
								description: 'Populated when `type` is `bulleted_list_item`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'Item text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
								},
								required: [],
							},
							numbered_list_item: {
								type: 'object',
								description:
									"Populated when `type` is `numbered_list_item`. Notion does not return the item's number — derive it from position.",
								properties: {
									rich_text: {
										type: 'array',
										description: 'Item text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
								},
								required: [],
							},
							to_do: {
								type: 'object',
								description: 'Populated when `type` is `to_do`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'To-do text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									checked: {
										type: 'boolean',
										description: 'Whether the checkbox is ticked.',
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
								},
								required: [],
							},
							toggle: {
								type: 'object',
								description:
									"Populated when `type` is `toggle`. Its contents are children — fetch them with this block's `id`.",
								properties: {
									rich_text: {
										type: 'array',
										description: "The toggle's summary line.",
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
								},
								required: [],
							},
							code: {
								type: 'object',
								description: 'Populated when `type` is `code`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'The code itself.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									caption: {
										type: 'array',
										description: 'Caption below the code block.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									language: {
										type: 'string',
										description:
											'Syntax highlighting language, for example `javascript` or `plain text`.',
									},
								},
								required: [],
							},
							quote: {
								type: 'object',
								description: 'Populated when `type` is `quote`.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'Quote text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									color: {
										type: 'string',
										description: 'Block text or background color.',
									},
								},
								required: [],
							},
							callout: {
								type: 'object',
								description:
									'Populated when `type` is `callout`. Often has children.',
								properties: {
									rich_text: {
										type: 'array',
										description: 'Callout text.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									icon: {
										type: 'object',
										description: 'Callout icon. Same union as a page icon.',
										properties: {
											type: {
												type: 'string',
												description:
													'Icon type. One of: emoji, custom_emoji, icon, external, file.',
											},
											emoji: {
												type: 'string',
												description:
													'Standard emoji character used as the icon.',
											},
											external: {
												type: 'object',
												description:
													'Externally hosted image referenced by URL.',
												properties: {
													url: {
														type: 'string',
														description:
															'URL of the external file or resource.',
													},
												},
												required: [],
											},
											file: {
												type: 'object',
												description: 'Notion-hosted file object.',
												properties: {
													url: {
														type: 'string',
														description:
															'Temporary URL of the Notion-hosted file.',
													},
													expiry_time: {
														type: 'string',
														description:
															'Time when the temporary file URL will expire.',
													},
												},
												required: [],
											},
											custom_emoji: {
												type: 'object',
												description:
													'Workspace custom emoji used as the icon.',
												properties: {
													id: {
														type: 'string',
														description: 'ID of the custom emoji.',
													},
													name: {
														type: 'string',
														description: 'Name of the custom emoji.',
													},
													url: {
														type: 'string',
														description:
															'URL of the custom emoji image.',
													},
												},
												required: [],
											},
											icon: {
												type: 'object',
												description:
													'Notion native icon, specified by name and color.',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the Notion icon.',
													},
													color: {
														type: 'string',
														description:
															'Color variant of the Notion icon.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									color: {
										type: 'string',
										description:
											'Block text or background color, for example `yellow_background`.',
									},
								},
								required: [],
							},
							divider: {
								type: 'object',
								description:
									'Populated when `type` is `divider`. Always an empty object.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							equation: {
								type: 'object',
								description: 'Populated when `type` is `equation`.',
								properties: {
									expression: {
										type: 'string',
										description: 'KaTeX-compatible expression.',
									},
								},
								required: [],
							},
							image: {
								type: 'object',
								description:
									'Populated when `type` is `image`. The same shape is used by `video`, `audio`, `pdf`, and `file`, which are returned but not declared here.',
								properties: {
									type: {
										type: 'string',
										description:
											'Either `file` for Notion-hosted or `external`.',
									},
									file: {
										type: 'object',
										description:
											'Populated when `type` is `file`. The URL is temporary.',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'When the temporary URL stops working, normally one hour out.',
											},
										},
										required: [],
									},
									external: {
										type: 'object',
										description: 'Populated when `type` is `external`.',
										properties: {
											url: {
												type: 'string',
												description: 'URL of the externally hosted file.',
											},
										},
										required: [],
									},
									caption: {
										type: 'array',
										description: 'Caption shown below the image.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
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
							bookmark: {
								type: 'object',
								description:
									'Populated when `type` is `bookmark`. `embed` and `link_preview` share this shape.',
								properties: {
									url: {
										type: 'string',
										description: 'The bookmarked web address.',
									},
									caption: {
										type: 'array',
										description: 'Caption shown below the bookmark.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description:
														'One of `text`, `mention`, or `equation`.',
												},
												plain_text: {
													type: 'string',
													description:
														'The text content without any annotations.',
												},
												href: {
													type: 'string',
													description:
														'URL of any link or mention in this text, if any.',
												},
												text: {
													type: 'object',
													description: 'Populated when `type` is `text`.',
													properties: {
														content: {
															type: 'string',
															description: 'The actual text content.',
														},
														link: {
															type: 'object',
															description:
																'Inline link, or null when the text is not a link.',
															properties: {
																url: {
																	type: 'string',
																	description: 'The link target.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												annotations: {
													type: 'object',
													description: 'Styling applied to this text.',
													properties: {
														bold: {
															type: 'boolean',
															description:
																'Whether the text is bolded.',
														},
														italic: {
															type: 'boolean',
															description:
																'Whether the text is italicized.',
														},
														strikethrough: {
															type: 'boolean',
															description:
																'Whether the text is struck through.',
														},
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														code: {
															type: 'boolean',
															description:
																'Whether the text is code style.',
														},
														color: {
															type: 'string',
															description:
																'Color of the text or its background.',
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
							child_page: {
								type: 'object',
								description:
									'Populated when `type` is `child_page`. The block `id` is also the page ID — pass it back to read the nested page.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							child_database: {
								type: 'object',
								description:
									'Populated when `type` is `child_database`. Use `queryDataSource` to read its rows.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							table: {
								type: 'object',
								description:
									"Populated when `type` is `table`. Rows are children — fetch them with this block's `id`.",
								properties: {
									table_width: {
										type: 'number',
										description:
											'Number of columns. Fixed once the table is created.',
									},
									has_column_header: {
										type: 'boolean',
										description: 'Whether the first row is a header row.',
									},
									has_row_header: {
										type: 'boolean',
										description: 'Whether the first column is a header column.',
									},
								},
								required: [],
							},
							table_row: {
								type: 'object',
								description:
									'Populated when `type` is `table_row`. Only returned when calling this endpoint on a table block.',
								properties: {
									cells: {
										type: 'array',
										description:
											'One entry per column, each itself an array of rich text objects.',
										items: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													type: {
														type: 'string',
														description:
															'One of `text`, `mention`, or `equation`.',
													},
													plain_text: {
														type: 'string',
														description:
															'The text content without any annotations.',
													},
													href: {
														type: 'string',
														description:
															'URL of any link or mention in this text, if any.',
													},
													text: {
														type: 'object',
														description:
															'Populated when `type` is `text`.',
														properties: {
															content: {
																type: 'string',
																description:
																	'The actual text content.',
															},
															link: {
																type: 'object',
																description:
																	'Inline link, or null when the text is not a link.',
																properties: {
																	url: {
																		type: 'string',
																		description:
																			'The link target.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													annotations: {
														type: 'object',
														description:
															'Styling applied to this text.',
														properties: {
															bold: {
																type: 'boolean',
																description:
																	'Whether the text is bolded.',
															},
															italic: {
																type: 'boolean',
																description:
																	'Whether the text is italicized.',
															},
															strikethrough: {
																type: 'boolean',
																description:
																	'Whether the text is struck through.',
															},
															underline: {
																type: 'boolean',
																description:
																	'Whether the text is underlined.',
															},
															code: {
																type: 'boolean',
																description:
																	'Whether the text is code style.',
															},
															color: {
																type: 'string',
																description:
																	'Color of the text or its background.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
									},
								},
								required: [],
							},
							link_to_page: {
								type: 'object',
								description: 'Populated when `type` is `link_to_page`.',
								properties: {
									type: {
										type: 'string',
										description:
											'One of: page_id, database_id, data_source_id, comment_id.',
									},
									page_id: {
										type: 'string',
										description:
											'ID of the linked page when type is `page_id`.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the linked database when type is `database_id`.',
									},
								},
								required: [],
							},
							unsupported: {
								type: 'object',
								description:
									'Populated when `type` is `unsupported` — a block the API cannot read. Always empty.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				next_cursor: {
					type: 'string',
					description:
						'Cursor to pass as `startCursor` to fetch the next page of blocks. Null when `has_more` is false.',
				},
				has_more: {
					type: 'boolean',
					description: 'Whether more child blocks exist beyond this page.',
				},
				request_id: {
					type: 'string',
					description: 'Unique identifier Notion assigns to this API request.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'queryDataSource',
		label: 'Query a data source',
		description:
			'Queries pages in a data source. Supports manual pagination via startCursor and next_cursor.',
		context:
			'---\nname: queryDataSource\ndescription: Queries pages in a data source\n---\n\nQueries pages (rows) in a Notion data source. Supports optional Notion filter\nobjects and sort conditions.\n\n## Filter\n\nPass a Notion filter object as JSON on `filter`. Property conditions and\n`and`/`or` compounds are supported. See:\nhttps://developers.notion.com/reference/filter-data-source-entries\n\n## Sorts\n\n`sorts` is an array of `{ property | timestamp, direction }` entries. Earlier\nsorts take precedence.\n\n## Pagination\n\nManual only — no automatic iterate loop:\n\n1. Call without `startCursor` for the first page (`pageSize` max 100).\n2. If `has_more` is true, pass `next_cursor` as `startCursor`.\n3. Repeat until `has_more` is false.\n\nEach result is a page object after `searchResponse` normalization: `properties`\nis an array of typed entries (with `label` = property name), and\n`properties_value` is a name→value map for convenience. Same shape as\n`getPage` / `createDataSourceItem` / `updatePage`.\n',
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'ID of the data source whose pages (rows) to query.',
				},
				filter: {
					type: 'object',
					description:
						'Notion filter object. See https://developers.notion.com/reference/filter-data-source-entries',
					additionalProperties: true,
				},
				sorts: {
					type: 'array',
					description:
						'Sort conditions applied in order. Each entry uses property or timestamp plus direction.',
					items: {
						type: 'object',
						properties: {
							property: {
								type: 'string',
								description: 'Name of the property to sort against.',
							},
							timestamp: {
								type: 'string',
								description:
									'Timestamp to sort against when not sorting by a property. created_time or last_edited_time.',
								default: '',
								enum: ['', 'created_time', 'last_edited_time'],
							},
							direction: {
								type: 'string',
								description: 'Sort direction: ascending or descending.',
								default: '',
								enum: ['', 'ascending', 'descending'],
							},
						},
						required: [],
					},
				},
				startCursor: {
					type: 'string',
					description:
						"Cursor from a previous response's next_cursor. Omit on the first request.",
				},
				pageSize: {
					type: 'number',
					description: 'Number of pages to return (max 100). Defaults to 100.',
					default: 100,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				results: {
					type: 'array',
					description:
						'Array of page (row) objects returned by the query for this page of results.',
					items: {
						type: 'object',
						properties: {
							object: {
								type: 'string',
								description:
									'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
							},
							id: {
								type: 'string',
								description: 'ID of a page (row) returned by the query.',
							},
							created_time: {
								type: 'string',
								description: 'ISO 8601 date and time when this object was created.',
							},
							last_edited_time: {
								type: 'string',
								description:
									'ISO 8601 date and time when this object was last edited.',
							},
							created_by: {
								type: 'object',
								description: 'Partial user object for who created this object.',
								properties: {
									object: { type: 'string', description: 'Always "user".' },
									id: { type: 'string', description: 'User ID of the creator.' },
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description:
											'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is person.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							last_edited_by: {
								type: 'object',
								description: 'Partial user object for who last edited this object.',
								properties: {
									object: { type: 'string', description: 'Always "user".' },
									id: {
										type: 'string',
										description: 'User ID of the last editor.',
									},
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description:
											'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is person.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							parent: {
								type: 'object',
								description:
									'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
								properties: {
									type: {
										type: 'string',
										description:
											'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
									},
									workspace: {
										type: 'boolean',
										description: 'True when the parent type is workspace.',
									},
									page_id: {
										type: 'string',
										description: 'ID of the parent page when type is page_id.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the parent database when type is database_id.',
									},
									data_source_id: {
										type: 'string',
										description:
											'ID of the parent data source when type is data_source_id.',
									},
									block_id: {
										type: 'string',
										description:
											'ID of the parent block when type is block_id.',
									},
								},
								required: [],
							},
							icon: {
								type: 'object',
								description:
									'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
								properties: {
									type: {
										type: 'string',
										description:
											'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
									},
									emoji: {
										type: 'string',
										description: 'Standard emoji character used as the icon.',
									},
									external: {
										type: 'object',
										description:
											'Externally hosted file or image referenced by URL.',
										properties: {
											url: {
												type: 'string',
												description:
													'URL of the external file or resource.',
											},
										},
										required: [],
									},
									file: {
										type: 'object',
										description:
											'Notion-hosted file object (includes temporary url and expiry_time).',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'Time when the temporary file URL will expire.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description:
									'Cover image. Discriminated union on type (external, file, file_upload).',
								properties: {
									type: {
										type: 'string',
										description:
											'Cover type. One of: external, file, file_upload.',
									},
									external: {
										type: 'object',
										description:
											'Externally hosted file or image referenced by URL.',
										properties: {
											url: {
												type: 'string',
												description:
													'URL of the external file or resource.',
											},
										},
										required: [],
									},
									file: {
										type: 'object',
										description:
											'Notion-hosted file object (includes temporary url and expiry_time).',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'Time when the temporary file URL will expire.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							archived: {
								type: 'boolean',
								description:
									'Set true to move the page to trash; false to restore it.',
							},
							in_trash: {
								type: 'boolean',
								description: 'Whether the object is in the trash.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the page has been archived.',
							},
							is_locked: {
								type: 'boolean',
								description:
									'Whether the object is locked from editing in the Notion app UI.',
							},
							url: {
								type: 'string',
								description:
									'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
							},
							public_url: {
								type: 'string',
								description:
									'Public URL if the object has been published to the web; otherwise null.',
							},
							properties: {
								type: 'array',
								description:
									'Page property values after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→value map.',
							},
							properties_value: {
								type: 'object',
								description:
									'Map of property name to typed value, derived from properties by searchResponse.',
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				next_cursor: {
					type: 'string',
					description:
						'Cursor to pass as start_cursor to fetch the next page of results. Null when has_more is false.',
				},
				has_more: {
					type: 'boolean',
					description: 'Whether more results are available beyond this page.',
				},
				type: {
					type: 'string',
					description: 'Always "list" for paginated Notion list responses.',
				},
				page_or_data_source: {
					type: 'string',
					description:
						'Notion list discriminator for result object kinds (API 2026-03-11).',
				},
				request_id: { type: 'string', description: 'Notion request ID for this API call.' },
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'searchDataSources',
		label: 'Search data sources',
		description: 'Searches for data sources by title.',
		context:
			"---\nname: searchDataSources\ndescription: Searches for data sources by title\n---\n\nSearches the connected Notion workspace for data sources whose titles match\nthe query text. Results are filtered to `data_source` objects only.\n\n## Pagination\n\nThis endpoint returns one page of results at a time. Use `pageSize` (max 100)\nand `startCursor` for manual pagination:\n\n1. Call without `startCursor` to get the first page.\n2. If `has_more` is true, pass `next_cursor` as `startCursor` on the next call.\n3. Repeat until `has_more` is false.\n\n## Sorting\n\nOptional `sortDirection` sorts by `last_edited_time` ascending or descending.\nOmit it to use Notion's default order.\n\nEach result is a data source object. `id` is the data source ID. Property schema\nuses the same `properties` array + `properties_value` map as `getDataSource`.\n",
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description: 'Text used to match against data source titles.',
				},
				sortDirection: {
					type: 'string',
					description:
						"Sort results by last_edited_time ascending or descending. Omit to use Notion's default order.",
					default: '',
					enum: ['', 'ascending', 'descending'],
				},
				startCursor: {
					type: 'string',
					description:
						"Cursor from a previous response's next_cursor to fetch the next page. Omit on the first request.",
				},
				pageSize: {
					type: 'number',
					description: 'Number of results to return (max 100). Defaults to 100.',
					default: 100,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				results: {
					type: 'array',
					description: 'Array of result objects for this page of the list response.',
					items: {
						type: 'object',
						properties: {
							object: {
								type: 'string',
								description:
									'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
							},
							id: { type: 'string', description: 'ID of a Notion data source.' },
							created_time: {
								type: 'string',
								description: 'ISO 8601 date and time when this object was created.',
							},
							last_edited_time: {
								type: 'string',
								description:
									'ISO 8601 date and time when this object was last edited.',
							},
							created_by: {
								type: 'object',
								description: 'Partial user object for who created this object.',
								properties: {
									object: { type: 'string', description: 'Always "user".' },
									id: { type: 'string', description: 'User ID of the creator.' },
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description:
											'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is person.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							last_edited_by: {
								type: 'object',
								description: 'Partial user object for who last edited this object.',
								properties: {
									object: { type: 'string', description: 'Always "user".' },
									id: {
										type: 'string',
										description: 'User ID of the last editor.',
									},
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description:
											'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is person.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							icon: {
								type: 'object',
								description:
									'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
								properties: {
									type: {
										type: 'string',
										description:
											'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
									},
									emoji: {
										type: 'string',
										description: 'Standard emoji character used as the icon.',
									},
									external: {
										type: 'object',
										description:
											'Externally hosted file or image referenced by URL.',
										properties: {
											url: {
												type: 'string',
												description:
													'URL of the external file or resource.',
											},
										},
										required: [],
									},
									file: {
										type: 'object',
										description:
											'Notion-hosted file object (includes temporary url and expiry_time).',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'Time when the temporary file URL will expire.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description:
									'Cover image. Discriminated union on type (external, file, file_upload).',
								properties: {
									type: {
										type: 'string',
										description:
											'Cover type. One of: external, file, file_upload.',
									},
									external: {
										type: 'object',
										description:
											'Externally hosted file or image referenced by URL.',
										properties: {
											url: {
												type: 'string',
												description:
													'URL of the external file or resource.',
											},
										},
										required: [],
									},
									file: {
										type: 'object',
										description:
											'Notion-hosted file object (includes temporary url and expiry_time).',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'Time when the temporary file URL will expire.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							description: {
								type: 'array',
								description:
									'Optional description text for this object or property.',
								items: {
									type: 'object',
									properties: {
										type: {
											type: 'string',
											description:
												'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
										},
										text: {
											type: 'object',
											description:
												'Text payload for a rich text item of type text (content + optional link).',
											properties: {
												content: {
													type: 'string',
													description:
														'The actual text content of the text rich text item (max 2000 characters).',
												},
												link: {
													type: 'string',
													description:
														'Inline link object with url, if this text is linked.',
												},
											},
											required: [],
										},
										annotations: {
											type: 'object',
											description:
												'Styling for a rich text object (bold, italic, strikethrough, underline, code, color).',
											properties: {
												bold: {
													type: 'boolean',
													description: 'Whether the text is bold.',
												},
												italic: {
													type: 'boolean',
													description: 'Whether the text is italic.',
												},
												strikethrough: {
													type: 'boolean',
													description:
														'Whether the text is struck through.',
												},
												underline: {
													type: 'boolean',
													description: 'Whether the text is underlined.',
												},
												code: {
													type: 'boolean',
													description:
														'Whether the text is styled as inline code.',
												},
												color: {
													type: 'string',
													description:
														'Rich text color, including background variants (e.g. default, blue, blue_background).',
												},
											},
											required: [],
										},
										plain_text: {
											type: 'string',
											description:
												'Plain text content of the rich text object, without styling.',
										},
										href: {
											type: 'string',
											description:
												'URL that this rich text object links to or mentions, if any.',
										},
									},
									required: [],
								},
							},
							is_inline: {
								type: 'boolean',
								description: 'Whether the database/data source is inline.',
							},
							database_parent: {
								type: 'object',
								description:
									"Parent of the data source's containing database (typically a page, block, or workspace).",
								properties: {
									type: {
										type: 'string',
										description:
											'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
									},
									workspace: {
										type: 'boolean',
										description: 'True when the parent type is workspace.',
									},
									page_id: {
										type: 'string',
										description: 'ID of the parent page when type is page_id.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the parent database when type is database_id.',
									},
									block_id: {
										type: 'string',
										description:
											'ID of the parent block when type is block_id.',
									},
								},
								required: [],
							},
							public_url: {
								type: 'string',
								description:
									'Public URL if the object has been published to the web; otherwise null.',
							},
							in_trash: {
								type: 'boolean',
								description: 'Whether the object is in the trash.',
							},
							archived: {
								type: 'boolean',
								description:
									'Set true to move the page to trash; false to restore it.',
							},
							url: {
								type: 'string',
								description:
									'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
							},
							properties: {
								type: 'array',
								description:
									'Data source property schema after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→value/config map.',
								items: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description:
												'Underlying identifier for the property. Remains constant when the property name changes; may be used in place of name.',
										},
										name: {
											type: 'string',
											description:
												'Name of the property as it appears in Notion.',
										},
										description: {
											type: 'string',
											description:
												'Description of the property as it appears in Notion.',
										},
										type: {
											type: 'string',
											description:
												'Property type controlling behavior (checkbox, title, rich_text, select, status, relation, etc.).',
										},
										label: {
											type: 'string',
											description:
												'Human-readable label for this property (usually the property name).',
										},
										people: {
											type: 'object',
											description:
												'People property config (empty) or array of user objects as the page property value.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										url: {
											type: 'object',
											description:
												'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										select: {
											type: 'object',
											description:
												'Select property: options config on a data source, or selected option (id/name/color) on a page.',
											properties: {
												options: {
													type: 'array',
													description:
														'Array of select/status options (id, name, color).',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.',
															},
															name: {
																type: 'string',
																description:
																	'Display name as it appears in Notion.',
															},
															color: {
																type: 'string',
																description:
																	"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										status: {
											type: 'object',
											description:
												'Status property: options/groups config on a data source, or selected status option on a page.',
											properties: {
												options: {
													type: 'array',
													description:
														'Array of select/status options (id, name, color).',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.',
															},
															name: {
																type: 'string',
																description:
																	'Display name as it appears in Notion.',
															},
															color: {
																type: 'string',
																description:
																	"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
															},
														},
														required: [],
													},
												},
												groups: {
													type: 'array',
													description:
														'Status groups (id, name, color, option_ids).',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'Identifier for this status group.',
															},
															name: {
																type: 'string',
																description:
																	'Display name as it appears in Notion.',
															},
															color: {
																type: 'string',
																description:
																	"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
															},
															option_ids: {
																type: 'array',
																description:
																	'Sorted list of option ids that belong to this status group.',
																items: { type: 'string' },
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										email: {
											type: 'object',
											description: 'Email address.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										phone_number: {
											type: 'object',
											description:
												'Phone number property config (empty) or phone number string value. No format is enforced.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										multi_select: {
											type: 'object',
											description:
												'Multi-select property: options config on a data source, or array of selected options on a page.',
											properties: {
												options: {
													type: 'array',
													description:
														'Array of select/status options (id, name, color).',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.',
															},
															name: {
																type: 'string',
																description:
																	'Display name as it appears in Notion.',
															},
															color: {
																type: 'string',
																description:
																	"Text or option color. One of Notion's color / *_background values, or a select/status option color.",
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										date: {
											type: 'object',
											description:
												'Date property config (empty) or date object (start, optional end, time_zone) as the page property value.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										checkbox: {
											type: 'object',
											description:
												'Checkbox property config (empty) or boolean value when used as a page property value.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										number: {
											type: 'object',
											description:
												'Number property: format config on a data source, or numeric value on a page / unique_id count.',
											properties: {
												format: {
													type: 'string',
													description:
														'How the number displays in Notion (number, percent, dollar, euro, etc.).',
												},
											},
											required: [],
										},
										files: {
											type: 'object',
											description:
												'Files property config (empty) or array of file objects as the page property value.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										rich_text: {
											type: 'object',
											description:
												'Rich text property config (empty) or array of rich text items as the page property value.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										text: {
											type: 'object',
											description:
												'Text payload for a rich text item of type text (content + optional link).',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										formula: {
											type: 'object',
											description:
												'Formula property: expression config on a data source, or computed result on a page.',
											properties: {
												expression: {
													type: 'string',
													description:
														'The formula used to compute values. Refer to the Notion help center for syntax.',
												},
											},
											required: [],
										},
										relation: {
											type: 'object',
											description:
												'Relation property config (data_source_id, optional dual_property) or array of related page references / relation value object.',
											properties: {
												data_source_id: {
													type: 'string',
													description:
														'ID of the parent data source when type is data_source_id.',
												},
												database_id: {
													type: 'string',
													description:
														'ID of the parent database when type is database_id.',
												},
												synced_property_name: {
													type: 'string',
													description:
														'Name of the corresponding property in the related data source for a dual relation.',
												},
												synced_property_id: {
													type: 'string',
													description:
														'ID of the corresponding property in the related data source for a dual relation.',
												},
												dual_property: {
													type: 'object',
													description:
														'Bidirectional relation sync metadata (synced_property_id, synced_property_name).',
													properties: {
														synced_property_id: {
															type: 'string',
															description:
																'ID of the corresponding property in the related data source for a dual relation.',
														},
														synced_property_name: {
															type: 'string',
															description:
																'Name of the corresponding property in the related data source for a dual relation.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										rollup: {
											type: 'object',
											description:
												'Rollup property config (relation/rollup property refs + function) or computed rollup value on a page.',
											properties: {
												relation_property_name: {
													type: 'string',
													description:
														'Name of the relation property used by this rollup.',
												},
												rollup_property_name: {
													type: 'string',
													description:
														'Name of the property being rolled up.',
												},
												relation_property_id: {
													type: 'string',
													description:
														'ID of the relation property used by this rollup.',
												},
												rollup_property_id: {
													type: 'string',
													description:
														'ID of the property being rolled up.',
												},
												function: {
													type: 'string',
													description:
														'Rollup aggregation function (e.g. sum, count, average, show_original).',
												},
											},
											required: [],
										},
										unique_id: {
											type: 'object',
											description:
												'Unique ID property: optional prefix config on a data source, or {number, prefix} value on a page (read-only).',
											properties: {
												prefix: {
													type: 'string',
													description:
														'Optional prefix applied to the unique ID (e.g. TASK).',
												},
											},
											required: [],
										},
										last_edited_time: {
											type: 'object',
											description:
												'ISO 8601 date and time when this object was last edited.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										last_edited_by: {
											type: 'object',
											description:
												'Partial user object for who last edited this object.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										created_time: {
											type: 'object',
											description:
												'ISO 8601 date and time when this object was created.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
										created_by: {
											type: 'object',
											description:
												'Partial user object for who created this object.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									required: [],
								},
							},
							properties_value: {
								type: 'object',
								description:
									'Map of property name to schema/value payload, derived from properties by searchResponse.',
								additionalProperties: true,
							},
							parent: {
								type: 'object',
								description:
									'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
								properties: {
									type: {
										type: 'string',
										description:
											'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
									},
									workspace: {
										type: 'boolean',
										description: 'True when the parent type is workspace.',
									},
									page_id: {
										type: 'string',
										description: 'ID of the parent page when type is page_id.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the parent database when type is database_id.',
									},
									data_source_id: {
										type: 'string',
										description:
											'ID of the parent data source when type is data_source_id.',
									},
									block_id: {
										type: 'string',
										description:
											'ID of the parent block when type is block_id.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				next_cursor: {
					type: 'string',
					description:
						'Cursor to pass as start_cursor to fetch the next page of results. Null when has_more is false.',
				},
				has_more: {
					type: 'boolean',
					description: 'Whether more results are available beyond this page.',
				},
				type: {
					type: 'string',
					description: 'Always "list" for paginated Notion list responses.',
				},
				page_or_data_source: {
					type: 'string',
					description:
						'Notion list discriminator for result object kinds (API 2026-03-11).',
				},
				request_id: { type: 'string', description: 'Notion request ID for this API call.' },
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'searchPages',
		label: 'Search pages',
		description: 'Searches for pages by title.',
		context:
			"---\nname: searchPages\ndescription: Searches for pages by title\n---\n\nSearches the connected Notion workspace for pages whose titles match the query\ntext. Results are filtered to `page` objects only.\n\n## Pagination\n\nThis endpoint returns one page of results at a time. Use `pageSize` and\n`startCursor` for manual pagination:\n\n1. Call without `startCursor` to get the first page.\n2. If `has_more` is true, pass `next_cursor` as `startCursor` on the next call.\n3. Repeat until `has_more` is false.\n\n`pageSize` accepts 1 to 100 and defaults to 100. Values outside that range are\nrejected before the request is sent.\n\n## Sorting\n\n`sortDirection` sorts results by `last_edited_time`. It defaults to\n`descending`, so the most recently edited pages come first. Pass `ascending`\nto reverse the order.\n\n## Response shape\n\nEach result is a page object normalized the same way as `getPage`,\n`queryDataSource`, and `searchDataSources`: `properties` is an array of typed\nentries (each carrying `label` = the property name) and `properties_value` is a\nname-to-value map for convenience. `archived` is present as an alias of\n`in_trash`.\n\n## Connection scope\n\nNo scopes are declared. Notion uses capability-based OAuth — a page or database\nis reachable only if the integration has been shared on it — so there are no\ngranular API scopes to request.\n\n## Limitations\n\n- Only pages shared with the connection are returned.\n- Page body content is not included. Use `getPageMarkdown` to read page content.\n- Trashed pages are not returned; Notion's `filter.in_trash` option is not exposed.\n",
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
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
				query: {
					type: 'string',
					description:
						'Text used to match against page titles. Omit to return every page shared with the connection.',
				},
				sortDirection: {
					type: 'string',
					description:
						'Sort results by `last_edited_time`. Defaults to `descending`, so the most recently edited pages come first.',
					default: '',
					enum: ['', 'ascending', 'descending'],
				},
				startCursor: {
					type: 'string',
					description:
						"Cursor taken from a previous response's `next_cursor` to fetch the next page of results. Omit on the first request.",
				},
				pageSize: {
					type: 'number',
					description: 'Number of results to return (1-100). Defaults to 100.',
					default: 100,
					minimum: 1,
					maximum: 100,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description: 'Always `list` for a paginated Notion list response.',
				},
				type: {
					type: 'string',
					description: 'Always `page_or_data_source` for a search response.',
				},
				page_or_data_source: {
					type: 'object',
					description:
						'An empty object included by Notion as the list discriminator (API 2026-03-11).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				results: {
					type: 'array',
					description:
						'The pages matching the query, after `searchResponse` normalization.',
					items: {
						type: 'object',
						description: 'A Notion page object.',
						properties: {
							object: { type: 'string', description: 'Always `page`.' },
							id: { type: 'string', description: 'ID of the Notion page.' },
							created_time: {
								type: 'string',
								description: 'ISO 8601 date and time when this page was created.',
							},
							last_edited_time: {
								type: 'string',
								description:
									'ISO 8601 date and time when this page was last edited.',
							},
							created_by: {
								type: 'object',
								description:
									'Partial user object for who created this page. May contain only `object` and `id`.',
								properties: {
									object: { type: 'string', description: 'Always `user`.' },
									id: { type: 'string', description: 'User ID of the creator.' },
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description: 'User type, either `person` or `bot`.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is `person`.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							last_edited_by: {
								type: 'object',
								description:
									'Partial user object for who last edited this page. May contain only `object` and `id`.',
								properties: {
									object: { type: 'string', description: 'Always `user`.' },
									id: {
										type: 'string',
										description: 'User ID of the last editor.',
									},
									name: {
										type: 'string',
										description: 'Display name as it appears in Notion.',
									},
									avatar_url: {
										type: 'string',
										description: 'Avatar URL of the user, if any.',
									},
									type: {
										type: 'string',
										description: 'User type, either `person` or `bot`.',
									},
									person: {
										type: 'object',
										description:
											'Details about the person when user type is `person`.',
										properties: {
											email: {
												type: 'string',
												description: 'Email of the person.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							icon: {
								type: 'object',
								description:
									'Page icon, or null when unset. Discriminated union on `type`.',
								properties: {
									type: {
										type: 'string',
										description:
											'Icon type. One of: emoji, custom_emoji, icon, external, file.',
									},
									emoji: {
										type: 'string',
										description: 'Standard emoji character used as the icon.',
									},
									external: {
										type: 'object',
										description: 'Externally hosted image referenced by URL.',
										properties: {
											url: {
												type: 'string',
												description:
													'URL of the external file or resource.',
											},
										},
										required: [],
									},
									file: {
										type: 'object',
										description: 'Notion-hosted file object.',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'Time when the temporary file URL will expire.',
											},
										},
										required: [],
									},
									custom_emoji: {
										type: 'object',
										description: 'Workspace custom emoji used as the icon.',
										properties: {
											id: {
												type: 'string',
												description: 'ID of the custom emoji.',
											},
											name: {
												type: 'string',
												description: 'Name of the custom emoji.',
											},
											url: {
												type: 'string',
												description: 'URL of the custom emoji image.',
											},
										},
										required: [],
									},
									icon: {
										type: 'object',
										description:
											'Notion native icon, specified by name and color.',
										properties: {
											name: {
												type: 'string',
												description:
													'Name of the Notion icon, for example `pizza`, `meeting`, or `home`.',
											},
											color: {
												type: 'string',
												description:
													'Color variant: gray, lightgray, brown, yellow, orange, green, blue, purple, pink, or red.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							cover: {
								type: 'object',
								description:
									'Page cover image, or null when unset. Discriminated union on `type`.',
								properties: {
									type: {
										type: 'string',
										description: 'Cover type, either `external` or `file`.',
									},
									external: {
										type: 'object',
										description: 'Externally hosted image referenced by URL.',
										properties: {
											url: {
												type: 'string',
												description:
													'URL of the external file or resource.',
											},
										},
										required: [],
									},
									file: {
										type: 'object',
										description: 'Notion-hosted file object.',
										properties: {
											url: {
												type: 'string',
												description:
													'Temporary URL of the Notion-hosted file.',
											},
											expiry_time: {
												type: 'string',
												description:
													'Time when the temporary file URL will expire.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							url: { type: 'string', description: 'URL of the Notion page.' },
							public_url: {
								type: 'string',
								description:
									'Public URL if the page has been published to the web; otherwise null.',
							},
							in_trash: {
								type: 'boolean',
								description: 'Whether the page is in the trash.',
							},
							archived: {
								type: 'boolean',
								description:
									'Alias of `in_trash` added by `aliasFields` for compatibility with the legacy Notion field name.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the page has been archived.',
							},
							is_locked: {
								type: 'boolean',
								description:
									'Whether the page is locked from editing in the Notion app UI.',
							},
							parent: {
								type: 'object',
								description:
									'Parent of this page. The field matching `type` is populated; a `data_source_id` parent also carries `database_id`.',
								properties: {
									type: {
										type: 'string',
										description:
											'Parent type. One of: database_id, data_source_id, page_id, block_id, agent_id, workspace.',
									},
									workspace: {
										type: 'boolean',
										description: 'True when the parent type is `workspace`.',
									},
									page_id: {
										type: 'string',
										description:
											'ID of the parent page when type is `page_id`.',
									},
									database_id: {
										type: 'string',
										description:
											'ID of the parent database. Also present alongside `data_source_id`.',
									},
									data_source_id: {
										type: 'string',
										description:
											'ID of the parent data source when type is `data_source_id`.',
									},
									block_id: {
										type: 'string',
										description:
											'ID of the parent block when type is `block_id`.',
									},
									agent_id: {
										type: 'string',
										description:
											'ID of the parent agent when type is `agent_id`.',
									},
								},
								required: [],
							},
							properties: {
								type: 'array',
								description:
									'Page property values after `searchResponse` normalization: an array of typed entries, each including `label` = the property name. Only the field matching `type` is populated, and it is null when the property is empty. Prefer `properties_value` for a name-to-value map.',
								items: {
									type: 'object',
									description: 'A single page property value.',
									properties: {
										id: {
											type: 'string',
											description:
												'Underlying identifier for the property. Remains constant when the property name changes.',
										},
										type: {
											type: 'string',
											description:
												'Property type controlling which sibling field is populated (title, rich_text, select, relation, etc.).',
										},
										label: {
											type: 'string',
											description:
												'The property name, added by `searchResponse`.',
										},
										rich_text: {
											type: 'array',
											description:
												'Array of rich text objects. Concatenate `plain_text` across items for the full string.',
											items: {
												type: 'object',
												properties: {
													type: {
														type: 'string',
														description:
															'One of `text`, `mention`, or `equation`.',
													},
													plain_text: {
														type: 'string',
														description:
															'The text content without any annotations.',
													},
													href: {
														type: 'string',
														description:
															'URL of any link or mention in this text, if any.',
													},
													text: {
														type: 'object',
														description:
															'Populated when `type` is `text`.',
														properties: {
															content: {
																type: 'string',
																description:
																	'The actual text content.',
															},
															link: {
																type: 'object',
																description:
																	'Inline link, or null when the text is not a link.',
																properties: {
																	url: {
																		type: 'string',
																		description:
																			'The link target.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													annotations: {
														type: 'object',
														description:
															'Styling applied to this text.',
														properties: {
															bold: {
																type: 'boolean',
																description:
																	'Whether the text is bolded.',
															},
															italic: {
																type: 'boolean',
																description:
																	'Whether the text is italicized.',
															},
															strikethrough: {
																type: 'boolean',
																description:
																	'Whether the text is struck through.',
															},
															underline: {
																type: 'boolean',
																description:
																	'Whether the text is underlined.',
															},
															code: {
																type: 'boolean',
																description:
																	'Whether the text is code style.',
															},
															color: {
																type: 'string',
																description:
																	'Color of the text or its background.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										number: {
											type: 'number',
											description:
												'Numeric value of the property, or null when empty.',
										},
										select: {
											type: 'object',
											description: 'The selected option, or null when empty.',
											properties: {
												id: {
													type: 'string',
													description: 'Identifier for this option.',
												},
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												color: {
													type: 'string',
													description: "One of Notion's option colors.",
												},
											},
											required: [],
										},
										multi_select: {
											type: 'array',
											description:
												'Array of selected options. Empty array when nothing is selected.',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description: 'Identifier for this option.',
													},
													name: {
														type: 'string',
														description:
															'Display name as it appears in Notion.',
													},
													color: {
														type: 'string',
														description:
															"One of Notion's option colors.",
													},
												},
												required: [],
											},
										},
										status: {
											type: 'object',
											description: 'The selected status option.',
											properties: {
												id: {
													type: 'string',
													description:
														'Identifier for this status option.',
												},
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												color: {
													type: 'string',
													description: "One of Notion's option colors.",
												},
											},
											required: [],
										},
										date: {
											type: 'object',
											description: 'Date value, or null when empty.',
											properties: {
												start: {
													type: 'string',
													description:
														'ISO 8601 start date or date-time.',
												},
												end: {
													type: 'string',
													description:
														'ISO 8601 end date or date-time for a range; null otherwise.',
												},
												time_zone: {
													type: 'string',
													description:
														'Time zone of the date, or null when unset.',
												},
											},
											required: [],
										},
										checkbox: {
											type: 'boolean',
											description: 'Whether the checkbox is checked.',
										},
										url: {
											type: 'string',
											description:
												'Web address value of the property, or null when empty.',
										},
										email: {
											type: 'string',
											description:
												'Email address value of the property, or null when empty.',
										},
										phone_number: {
											type: 'string',
											description:
												'Phone number value, or null when empty. No format is enforced.',
										},
										files: {
											type: 'array',
											description:
												'Array of file objects attached to the property. Empty array when none.',
											items: {
												type: 'object',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the file.',
													},
													type: {
														type: 'string',
														description:
															'Either `file` for Notion-hosted or `external` for externally hosted.',
													},
													file: {
														type: 'object',
														description:
															'Populated when `type` is `file`.',
														properties: {
															url: {
																type: 'string',
																description:
																	'Temporary URL of the Notion-hosted file.',
															},
															expiry_time: {
																type: 'string',
																description:
																	'Time when the temporary file URL will expire.',
															},
														},
														required: [],
													},
													external: {
														type: 'object',
														description:
															'Populated when `type` is `external`.',
														properties: {
															url: {
																type: 'string',
																description:
																	'URL of the externally hosted file.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										people: {
											type: 'array',
											description:
												'Array of user objects assigned to the property. Empty array when none.',
											items: {
												type: 'object',
												properties: {
													object: {
														type: 'string',
														description: 'Always `user`.',
													},
													id: { type: 'string', description: 'User ID.' },
													name: {
														type: 'string',
														description:
															'Display name as it appears in Notion.',
													},
													avatar_url: {
														type: 'string',
														description:
															'Avatar URL of the user, if any.',
													},
													type: {
														type: 'string',
														description:
															'User type, either `person` or `bot`.',
													},
													person: {
														type: 'object',
														description:
															'Details about the person when user type is `person`.',
														properties: {
															email: {
																type: 'string',
																description: 'Email of the person.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										formula: {
											type: 'object',
											description:
												'Computed formula result. `type` says which sibling field carries the value.',
											properties: {
												type: {
													type: 'string',
													description:
														'Result type: `boolean`, `date`, `number`, `string`, or `unsupported`.',
												},
												string: {
													type: 'string',
													description: 'Result when `type` is `string`.',
												},
												number: {
													type: 'number',
													description: 'Result when `type` is `number`.',
												},
												boolean: {
													type: 'boolean',
													description: 'Result when `type` is `boolean`.',
												},
												date: {
													type: 'object',
													description: 'Result when `type` is `date`.',
													properties: {
														start: {
															type: 'string',
															description:
																'ISO 8601 start date or date-time.',
														},
														end: {
															type: 'string',
															description:
																'ISO 8601 end date or date-time for a range; null otherwise.',
														},
														time_zone: {
															type: 'string',
															description:
																'Time zone of the date, or null when unset.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										relation: {
											type: 'array',
											description:
												'Array of related page references. Empty array when none.',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'ID of a page in the related data source.',
													},
												},
												required: [],
											},
										},
										has_more: {
											type: 'boolean',
											description:
												'Present on `relation` properties: whether more than 25 relations exist. Retrieve the property item to get the rest.',
										},
										rollup: {
											type: 'object',
											description:
												'Computed rollup value. `type` says which sibling field carries the value.',
											properties: {
												type: {
													type: 'string',
													description:
														'Value type: `array`, `date`, `incomplete`, `number`, or `unsupported`.',
												},
												function: {
													type: 'string',
													description:
														'The aggregation function applied, for example `sum` or `count`.',
												},
												number: {
													type: 'number',
													description: 'Result when `type` is `number`.',
												},
												date: {
													type: 'object',
													description: 'Result when `type` is `date`.',
													properties: {
														start: {
															type: 'string',
															description:
																'ISO 8601 start date or date-time.',
														},
														end: {
															type: 'string',
															description:
																'ISO 8601 end date or date-time for a range; null otherwise.',
														},
														time_zone: {
															type: 'string',
															description:
																'Time zone of the date, or null when unset.',
														},
													},
													required: [],
												},
												array: {
													type: 'array',
													description:
														'Result when `type` is `array`: a list of property values collected from the related pages.',
													items: {
														type: 'object',
														description:
															"One collected property value. Its keys follow that property's own type, so the shape varies with the rolled-up property.",
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
											},
											required: [],
										},
										unique_id: {
											type: 'object',
											description: 'Read-only unique ID value.',
											properties: {
												number: {
													type: 'number',
													description: 'The generated unique number.',
												},
												prefix: {
													type: 'string',
													description:
														'Optional prefix applied to the unique ID, for example `TASK`.',
												},
											},
											required: [],
										},
										created_time: {
											type: 'string',
											description:
												'ISO 8601 creation timestamp exposed as a page property.',
										},
										created_by: {
											type: 'object',
											description:
												'Partial user object exposed as a page property.',
											properties: {
												object: {
													type: 'string',
													description: 'Always `user`.',
												},
												id: { type: 'string', description: 'User ID.' },
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												avatar_url: {
													type: 'string',
													description: 'Avatar URL of the user, if any.',
												},
												type: {
													type: 'string',
													description:
														'User type, either `person` or `bot`.',
												},
											},
											required: [],
										},
										last_edited_time: {
											type: 'string',
											description:
												'ISO 8601 last-edited timestamp exposed as a page property.',
										},
										last_edited_by: {
											type: 'object',
											description:
												'Partial user object exposed as a page property.',
											properties: {
												object: {
													type: 'string',
													description: 'Always `user`.',
												},
												id: { type: 'string', description: 'User ID.' },
												name: {
													type: 'string',
													description:
														'Display name as it appears in Notion.',
												},
												avatar_url: {
													type: 'string',
													description: 'Avatar URL of the user, if any.',
												},
												type: {
													type: 'string',
													description:
														'User type, either `person` or `bot`.',
												},
											},
											required: [],
										},
										verification: {
											type: 'object',
											description: 'Verification state of a wiki page.',
											properties: {
												state: {
													type: 'string',
													description:
														'Either `verified` or `unverified`.',
												},
												verified_by: {
													type: 'object',
													description:
														'Partial user object for who verified the page, or null when unverified.',
													properties: {
														object: {
															type: 'string',
															description: 'Always `user`.',
														},
														id: {
															type: 'string',
															description: 'User ID of the verifier.',
														},
														name: {
															type: 'string',
															description:
																'Display name as it appears in Notion.',
														},
														avatar_url: {
															type: 'string',
															description:
																'Avatar URL of the user, if any.',
														},
														type: {
															type: 'string',
															description:
																'User type, either `person` or `bot`.',
														},
													},
													required: [],
												},
												date: {
													type: 'object',
													description:
														'When the verification was set and when it expires, or null when unverified.',
													properties: {
														start: {
															type: 'string',
															description:
																'ISO 8601 date the verification began.',
														},
														end: {
															type: 'string',
															description:
																'ISO 8601 date the verification expires; null when it does not.',
														},
														time_zone: {
															type: 'string',
															description:
																'Time zone of the date, or null when unset.',
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
							properties_value: {
								type: 'object',
								description:
									"Map of property name to its raw typed value, derived from `properties` by `searchResponse`. Keys are the page's own property names, so the shape varies per page.",
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				next_cursor: {
					type: 'string',
					description:
						'Cursor to pass as `startCursor` to fetch the next page of results. Null when `has_more` is false.',
				},
				has_more: {
					type: 'boolean',
					description: 'Whether more results are available beyond this page.',
				},
				request_id: {
					type: 'string',
					description:
						'Unique identifier Notion assigns to this API request. Useful when reporting an issue to Notion support.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'notion',
		appVersion: 1,
		endpointName: 'updatePage',
		label: 'Update a page',
		description: 'Updates an existing page.',
		context:
			'---\nname: updatePage\ndescription: Updates an existing page\n---\n\nUpdates an existing Notion page by ID. Supports partial property updates,\nicon/cover changes, and archiving.\n\n## Properties\n\nPass changed properties in `fields` using the same Generic Fields shape as\nCreate a Data Source Item (`key` / `type` / nested `value`). Values are\ntranslated via `mapProperties`. Omit properties you do not want to change.\n\n## Archive / restore\n\nSet `archived` to `true` to move the page to trash, or `false` to restore it.\n(Make param name stays `archived`; the API field sent is `in_trash`.)\n\n## Optional\n\n- `icon` — update the page icon\n- `cover` — update the page cover\n\nThe response is the updated page object after `searchResponse` normalization:\n`properties` is an array of typed entries (with `label` = property name), and\n`properties_value` is a name→value map for convenience.\n',
		accounts: { notion2: { scope: [] }, notion3: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the page to update.' },
				fields: {
					type: 'array',
					description:
						'Same shape as Create a Data Source Item Generic Fields. Passed through mapProperties.',
					items: {
						type: 'object',
						properties: {
							key: {
								type: 'string',
								description:
									'Property name (column name) or property ID to update.',
							},
							type: {
								type: 'string',
								description:
									'Notion property value type to write (title, rich_text, select, status, number, date, people, relation, etc.).',
								enum: [
									'title',
									'text',
									'rich_text',
									'email',
									'select',
									'status',
									'multi_select',
									'phone_number',
									'checkbox',
									'url',
									'number',
									'people',
									'relation',
									'date',
								],
							},
						},
						required: ['key', 'type'],
						allOf: [
							{
								if: { properties: { type: { const: 'title' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'text' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'rich_text' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'email' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'select' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'status' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'multi_select' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'array',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'phone_number' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'checkbox' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'boolean',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'url' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'string',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'number' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'number',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'people' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'array',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'relation' } } },
								then: {
									type: 'object',
									properties: {
										value: {
											type: 'array',
											description:
												'Value for this property, shaped according to Value Type.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { type: { const: 'date' } } },
								then: {
									type: 'object',
									properties: {
										date: {
											type: 'object',
											description:
												'Date property config (empty) or date object (start, optional end, time_zone) as the page property value.',
											properties: {
												start: {
													type: 'string',
													description:
														'A date, with an optional time. If the value is a range, start is the start of the range.',
												},
												end: {
													type: 'string',
													description:
														'Optional end of a date range. Null if the date value is not a range.',
												},
												includeTime: {
													type: 'boolean',
													description:
														'If true, format start/end with time-of-day when sending to Notion.',
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
				icon: {
					type: 'object',
					description:
						"Optional page icon to set. Pass null-equivalent clearing via Notion's API if supported for your case.",
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description: 'Optional page cover to set.',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				archived: {
					type: 'boolean',
					description: 'Set true to trash the page, or false to restore it from trash.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				object: {
					type: 'string',
					description:
						'Always one of the Notion object type names (e.g. page, database, data_source, list, user).',
				},
				id: { type: 'string', description: 'ID of the updated page.' },
				created_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was created.',
				},
				last_edited_time: {
					type: 'string',
					description: 'ISO 8601 date and time when this object was last edited.',
				},
				created_by: {
					type: 'object',
					description: 'Partial user object for who created this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the creator.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				last_edited_by: {
					type: 'object',
					description: 'Partial user object for who last edited this object.',
					properties: {
						object: { type: 'string', description: 'Always "user".' },
						id: { type: 'string', description: 'User ID of the last editor.' },
						name: {
							type: 'string',
							description: 'Display name as it appears in Notion.',
						},
						avatar_url: {
							type: 'string',
							description: 'Avatar URL of the user, if any.',
						},
						type: {
							type: 'string',
							description:
								'Discriminator for the object or property type. Determines which sibling type-specific fields are populated.',
						},
						person: {
							type: 'object',
							description: 'Details about the person when user type is person.',
							properties: {
								email: { type: 'string', description: 'Email of the person.' },
							},
							required: [],
						},
					},
					required: [],
				},
				parent: {
					type: 'object',
					description:
						'Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).',
					properties: {
						type: {
							type: 'string',
							description:
								'Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.',
						},
						workspace: {
							type: 'boolean',
							description: 'True when the parent type is workspace.',
						},
						page_id: {
							type: 'string',
							description: 'ID of the parent page when type is page_id.',
						},
						database_id: {
							type: 'string',
							description: 'ID of the parent database when type is database_id.',
						},
						data_source_id: {
							type: 'string',
							description:
								'ID of the parent data source when type is data_source_id.',
						},
						block_id: {
							type: 'string',
							description: 'ID of the parent block when type is block_id.',
						},
					},
					required: [],
				},
				icon: {
					type: 'object',
					description:
						'Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description:
								'Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.',
						},
						emoji: {
							type: 'string',
							description: 'Standard emoji character used as the icon.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cover: {
					type: 'object',
					description:
						'Cover image. Discriminated union on type (external, file, file_upload).',
					properties: {
						type: {
							type: 'string',
							description: 'Cover type. One of: external, file, file_upload.',
						},
						external: {
							type: 'object',
							description: 'Externally hosted file or image referenced by URL.',
							properties: {
								url: {
									type: 'string',
									description: 'URL of the external file or resource.',
								},
							},
							required: [],
						},
						file: {
							type: 'object',
							description:
								'Notion-hosted file object (includes temporary url and expiry_time).',
							properties: {
								url: {
									type: 'string',
									description: 'Temporary URL of the Notion-hosted file.',
								},
								expiry_time: {
									type: 'string',
									description: 'Time when the temporary file URL will expire.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				archived: {
					type: 'boolean',
					description: 'Set true to move the page to trash; false to restore it.',
				},
				in_trash: { type: 'boolean', description: 'Whether the object is in the trash.' },
				is_archived: {
					type: 'boolean',
					description: 'Whether the page has been archived.',
				},
				is_locked: {
					type: 'boolean',
					description: 'Whether the object is locked from editing in the Notion app UI.',
				},
				url: {
					type: 'string',
					description:
						'URL of the Notion object (or of an external file/resource when nested under icon/cover/files).',
				},
				public_url: {
					type: 'string',
					description:
						'Public URL if the object has been published to the web; otherwise null.',
				},
				properties: {
					type: 'array',
					description:
						'Page property values after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→value map.',
				},
				properties_value: {
					type: 'object',
					description:
						'Map of property name to typed value, derived from properties by searchResponse.',
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
];
