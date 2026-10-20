// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Keep API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://keep.googleapis.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1/notes`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Keep API reference](https://developers.google.com/workspace/keep/api/reference/rest) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: {
			'google-custom': {
				scope: [
					'https://www.googleapis.com/auth/keep.readonly',
					'https://www.googleapis.com/auth/keep',
				],
			},
		},
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
						'Enter the part of the URL that comes after `https://keep.googleapis.com`. For example, `/v1/notes`.',
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
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'createAPermission',
		label: 'Create permissions',
		description: 'Creates one or more permissions on a note.',
		context:
			"---\nname: createAPermission\ndescription: Creates one or more permissions on a note.\n---\n\nShares a Google Keep note by adding one or more permissions in a single batch call.\n\nEach item in `requests` creates one permission. Set `permission.email` to the member's email and `permission.role` to `WRITER`. Only the `WRITER` role may be created; the `OWNER` role cannot be added.\n\n`requests[].parent` is optional. Leave it empty or set it to the same note as the top-level `parent` (format `notes/{note}`).\n\nIf adding any permission fails, the entire request fails and no changes are made.\n\nThe response lists the created permissions. Use a permission `name` (format `notes/{note}/permissions/{permission}`) as input for **Delete permissions**.\n\nRefer to the [notes.permissions.batchCreate reference](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes.permissions/batchCreate).\n",
		accounts: { 'google-custom': { scope: ['https://www.googleapis.com/auth/keep'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				parent: {
					type: 'string',
					description:
						'The note shared by all permissions being created. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.',
				},
				requests: {
					type: 'array',
					description:
						'The permissions to create. If adding any permission fails, the entire request fails and no changes are made.',
					items: {
						type: 'object',
						description: 'The request to add a single permission on the note.',
						properties: {
							parent: {
								type: 'string',
								description:
									'The parent note where the permission is created. Format: `notes/{note}`. Leave empty or set it to the same value as the top-level parent.',
							},
							permission: {
								type: 'object',
								description: 'The permission to create.',
								properties: {
									email: {
										type: 'string',
										description: 'The email associated with the member.',
									},
									role: {
										type: 'string',
										description:
											'The role granted by this permission. Currently, only `WRITER` may be specified.',
										default: '',
										enum: ['', 'WRITER'],
									},
								},
								required: ['email'],
							},
						},
						required: ['permission'],
					},
				},
			},
			required: ['parent', 'requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				permissions: {
					type: 'array',
					description: 'The permissions created.',
					items: {
						type: 'object',
						description:
							'A single permission on the note. Associates a member with a role.',
						properties: {
							name: {
								type: 'string',
								description:
									'The resource name of the permission. Format: `notes/{note}/permissions/{permission}`.',
							},
							role: {
								type: 'string',
								description:
									"The role granted by this permission. The role determines the entity's ability to read, write, and share notes. `OWNER` has full access and cannot be added or removed; `WRITER` can contribute content and modify note permissions.",
								default: '',
								enum: ['', 'ROLE_UNSPECIFIED', 'OWNER', 'WRITER'],
							},
							email: {
								type: 'string',
								description:
									'The email associated with the member. May be unset if the member does not have an associated email.',
							},
							deleted: {
								type: 'boolean',
								description:
									'Whether this member has been deleted. If the member is recovered, this value is set to `false` and the recovered member retains the role on the note.',
							},
							user: {
								type: 'object',
								description: 'The user to whom this role applies.',
								properties: {
									email: { type: 'string', description: "The user's email." },
								},
								required: [],
							},
							group: {
								type: 'object',
								description: 'The group to which this role applies.',
								properties: {
									email: { type: 'string', description: 'The group email.' },
								},
								required: [],
							},
							family: {
								type: 'object',
								description:
									'The Google Family to which this role applies. The object has no fields; its presence indicates a family member.',
								properties: {},
								required: [],
								additionalProperties: true,
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
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'createNote',
		label: 'Create a note',
		description: 'Creates a new note.',
		context:
			'---\nname: createNote\ndescription: Creates a new note.\n---\n\nCreates a new Google Keep note and returns it.\n\nA note body is either a text note or a list note. Fill in only one of `body.text` or `body.list`:\n\n- **Text note**: set `body.text.text` (less than 20,000 characters).\n- **List note**: set `body.list.listItems`. Each item has `text.text` (less than 1,000 characters), `checked`, and optional `childListItems`. Only one level of nesting is allowed and the list must have fewer than 1,000 items.\n\nThe title must be less than 1,000 characters.\n\nThe response contains the resource name of the new note in `name` (format `notes/{note}`). Use it as input for **Get a note**, **Delete a note**, and the permission endpoints.\n\nRefer to the [notes.create reference](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/create).\n',
		accounts: { 'google-custom': { scope: ['https://www.googleapis.com/auth/keep'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				body: {
					type: 'object',
					description:
						'The body of the note. Fill in either `text` for a text note or `list` for a list note.',
					properties: {
						text: {
							type: 'object',
							description:
								'Used if the content of the note is a block of text. Fill in either this or `list`.',
							properties: {
								text: {
									type: 'string',
									description:
										'The text of the note. Length must be less than 20,000 characters.',
									maximum: 19_999,
								},
							},
							required: [],
						},
						list: {
							type: 'object',
							description:
								'Used if the content of the note is a list. Fill in either this or `text`.',
							properties: {
								listItems: {
									type: 'array',
									description:
										'The items in the list. The number of items must be less than 1,000.',
									items: {
										type: 'object',
										description: "A single list item in the note's list.",
										properties: {
											text: {
												type: 'object',
												description: 'The text of this item.',
												properties: {
													text: {
														type: 'string',
														description:
															'The text of the list item. Length must be less than 1,000 characters.',
														maximum: 999,
													},
												},
												required: [],
											},
											checked: {
												type: 'boolean',
												description:
													'Whether this item has been checked off or not.',
											},
											childListItems: {
												type: 'array',
												description:
													'List of list items nested under this list item. Only one level of nesting is allowed.',
												items: {
													type: 'object',
													description:
														'A list item nested under this list item.',
													properties: {
														text: {
															type: 'object',
															description: 'The text of this item.',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'The text of the list item. Length must be less than 1,000 characters.',
																	maximum: 999,
																},
															},
															required: [],
														},
														checked: {
															type: 'boolean',
															description:
																'Whether this item has been checked off or not.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									maxItems: 999,
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
		outputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: 'The resource name of the note. Format: `notes/{note}`.',
				},
				createTime: { type: 'string', description: 'When the note was created.' },
				updateTime: { type: 'string', description: 'When the note was last modified.' },
				trashTime: {
					type: 'string',
					description:
						'When the note was trashed. If `trashed` is `true`, the note is eventually deleted. Not set if the note is not trashed.',
				},
				trashed: {
					type: 'boolean',
					description:
						'Whether the note has been trashed. If trashed, the note is eventually deleted.',
				},
				attachments: {
					type: 'array',
					description: 'The attachments attached to the note.',
					items: {
						type: 'object',
						description: 'An attachment of the note.',
						properties: {
							name: {
								type: 'string',
								description:
									'The resource name of the attachment. Format: `notes/{note}/attachments/{attachment}`.',
							},
							mimeType: {
								type: 'array',
								description:
									'The MIME types (IANA media types) in which the attachment is available.',
								items: {
									type: 'string',
									description:
										'An IANA media type in which the attachment is available.',
								},
							},
						},
						required: [],
					},
				},
				permissions: {
					type: 'array',
					description:
						'The list of permissions set on the note. Contains at least one entry for the note owner.',
					items: {
						type: 'object',
						description:
							'A single permission on the note. Associates a member with a role.',
						properties: {
							name: {
								type: 'string',
								description:
									'The resource name of the permission. Format: `notes/{note}/permissions/{permission}`.',
							},
							role: {
								type: 'string',
								description:
									"The role granted by this permission. The role determines the entity's ability to read, write, and share notes. `OWNER` has full access and cannot be added or removed; `WRITER` can contribute content and modify note permissions.",
								default: '',
								enum: ['', 'ROLE_UNSPECIFIED', 'OWNER', 'WRITER'],
							},
							email: {
								type: 'string',
								description:
									'The email associated with the member. May be unset if the member does not have an associated email.',
							},
							deleted: {
								type: 'boolean',
								description:
									'Whether this member has been deleted. If the member is recovered, this value is set to `false` and the recovered member retains the role on the note.',
							},
							user: {
								type: 'object',
								description: 'The user to whom this role applies.',
								properties: {
									email: { type: 'string', description: "The user's email." },
								},
								required: [],
							},
							group: {
								type: 'object',
								description: 'The group to which this role applies.',
								properties: {
									email: { type: 'string', description: 'The group email.' },
								},
								required: [],
							},
							family: {
								type: 'object',
								description:
									'The Google Family to which this role applies. The object has no fields; its presence indicates a family member.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				body: {
					type: 'object',
					description:
						'The body of the note. Contains either a text section or a list section.',
					properties: {
						text: {
							type: 'object',
							description: 'Used if the content of the note is a block of text.',
							properties: {
								text: { type: 'string', description: 'The text of the note.' },
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'Used if the content of the note is a list.',
							properties: {
								listItems: {
									type: 'array',
									description: 'The items in the list.',
									items: {
										type: 'object',
										description: "A single list item in the note's list.",
										properties: {
											text: {
												type: 'object',
												description: 'The text of this item.',
												properties: {
													text: {
														type: 'string',
														description: 'The text of the list item.',
													},
												},
												required: [],
											},
											checked: {
												type: 'boolean',
												description:
													'Whether this item has been checked off or not.',
											},
											childListItems: {
												type: 'array',
												description:
													'List of list items nested under this list item. Only one level of nesting is allowed.',
												items: {
													type: 'object',
													description:
														'A list item nested under this list item.',
													properties: {
														text: {
															type: 'object',
															description: 'The text of this item.',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'The text of the list item.',
																},
															},
															required: [],
														},
														checked: {
															type: 'boolean',
															description:
																'Whether this item has been checked off or not.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'deleteANote',
		label: 'Delete a note',
		description: 'Permanently deletes a note.',
		context:
			'---\nname: deleteANote\ndescription: Permanently deletes a note.\n---\n\nPermanently deletes a Google Keep note. This cannot be undone: the note is removed immediately and any collaborators lose access to it.\n\nThe caller must have the `OWNER` role on the note. The `name` parameter is the full resource name in the format `notes/{note}`.\n\nThe endpoint returns an empty result on success.\n\nRefer to the [notes.delete reference](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/delete).\n',
		accounts: { 'google-custom': { scope: ['https://www.googleapis.com/auth/keep'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description:
						'The resource name of the note to delete. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.',
				},
			},
			required: ['name'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'deleteAPermission',
		label: 'Delete permissions',
		description: 'Deletes one or more permissions on a note.',
		context:
			"---\nname: deleteAPermission\ndescription: Deletes one or more permissions on a note.\n---\n\nRemoves one or more permissions from a Google Keep note in a single batch call. The specified members immediately lose access to the note.\n\nPass the permission names (format `notes/{note}/permissions/{permission}`) in `names`. Get them from the `permissions` field of **Get a note**, and use the note's resource name as `parent`.\n\nA permission with the `OWNER` role cannot be removed. If removing any permission fails, the entire request fails and no changes are made. The API returns a 400 error if a specified permission does not exist on the note.\n\nThe endpoint returns an empty result on success.\n\nRefer to the [notes.permissions.batchDelete reference](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes.permissions/batchDelete).\n",
		accounts: { 'google-custom': { scope: ['https://www.googleapis.com/auth/keep'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				parent: {
					type: 'string',
					description:
						'The note shared by all permissions being deleted. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.',
				},
				names: {
					type: 'array',
					description:
						'The names of the permissions to delete. Format: `notes/{note}/permissions/{permission}`. You can get them from the `permissions` field of **Get a note**.',
					items: {
						type: 'string',
						description:
							'The name of a permission to delete. Format: `notes/{note}/permissions/{permission}`.',
					},
				},
			},
			required: ['parent', 'names'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'getANote',
		label: 'Get a note',
		description: 'Gets a note.',
		context:
			'---\nname: getANote\ndescription: Gets a note.\n---\n\nReturns a single Google Keep note by its resource name, including its title, body (text or list), permissions, attachments, and trash state.\n\nThe `name` parameter is the full resource name in the format `notes/{note}`, not just the ID. Resource names are returned in the `name` field of **List notes** and **Create a note**.\n\nThe `permissions` field lists the note owner and any collaborators. Use the permission `name` values from this response as the `names` input of **Delete permissions**.\n\nAttachment media cannot be downloaded through endpoints.\n\nRefer to the [notes.get reference](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/get).\n',
		accounts: { 'google-custom': { scope: ['https://www.googleapis.com/auth/keep.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description:
						'The resource name of the note. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: 'The resource name of the note. Format: `notes/{note}`.',
				},
				createTime: { type: 'string', description: 'When the note was created.' },
				updateTime: { type: 'string', description: 'When the note was last modified.' },
				trashTime: {
					type: 'string',
					description:
						'When the note was trashed. If `trashed` is `true`, the note is eventually deleted. Not set if the note is not trashed.',
				},
				trashed: {
					type: 'boolean',
					description:
						'Whether the note has been trashed. If trashed, the note is eventually deleted.',
				},
				attachments: {
					type: 'array',
					description: 'The attachments attached to the note.',
					items: {
						type: 'object',
						description: 'An attachment of the note.',
						properties: {
							name: {
								type: 'string',
								description:
									'The resource name of the attachment. Format: `notes/{note}/attachments/{attachment}`.',
							},
							mimeType: {
								type: 'array',
								description:
									'The MIME types (IANA media types) in which the attachment is available.',
								items: {
									type: 'string',
									description:
										'An IANA media type in which the attachment is available.',
								},
							},
						},
						required: [],
					},
				},
				permissions: {
					type: 'array',
					description:
						'The list of permissions set on the note. Contains at least one entry for the note owner.',
					items: {
						type: 'object',
						description:
							'A single permission on the note. Associates a member with a role.',
						properties: {
							name: {
								type: 'string',
								description:
									'The resource name of the permission. Format: `notes/{note}/permissions/{permission}`.',
							},
							role: {
								type: 'string',
								description:
									"The role granted by this permission. The role determines the entity's ability to read, write, and share notes. `OWNER` has full access and cannot be added or removed; `WRITER` can contribute content and modify note permissions.",
								default: '',
								enum: ['', 'ROLE_UNSPECIFIED', 'OWNER', 'WRITER'],
							},
							email: {
								type: 'string',
								description:
									'The email associated with the member. May be unset if the member does not have an associated email.',
							},
							deleted: {
								type: 'boolean',
								description:
									'Whether this member has been deleted. If the member is recovered, this value is set to `false` and the recovered member retains the role on the note.',
							},
							user: {
								type: 'object',
								description: 'The user to whom this role applies.',
								properties: {
									email: { type: 'string', description: "The user's email." },
								},
								required: [],
							},
							group: {
								type: 'object',
								description: 'The group to which this role applies.',
								properties: {
									email: { type: 'string', description: 'The group email.' },
								},
								required: [],
							},
							family: {
								type: 'object',
								description:
									'The Google Family to which this role applies. The object has no fields; its presence indicates a family member.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				body: {
					type: 'object',
					description:
						'The body of the note. Contains either a text section or a list section.',
					properties: {
						text: {
							type: 'object',
							description: 'Used if the content of the note is a block of text.',
							properties: {
								text: { type: 'string', description: 'The text of the note.' },
							},
							required: [],
						},
						list: {
							type: 'object',
							description: 'Used if the content of the note is a list.',
							properties: {
								listItems: {
									type: 'array',
									description: 'The items in the list.',
									items: {
										type: 'object',
										description: "A single list item in the note's list.",
										properties: {
											text: {
												type: 'object',
												description: 'The text of this item.',
												properties: {
													text: {
														type: 'string',
														description: 'The text of the list item.',
													},
												},
												required: [],
											},
											checked: {
												type: 'boolean',
												description:
													'Whether this item has been checked off or not.',
											},
											childListItems: {
												type: 'array',
												description:
													'List of list items nested under this list item. Only one level of nesting is allowed.',
												items: {
													type: 'object',
													description:
														'A list item nested under this list item.',
													properties: {
														text: {
															type: 'object',
															description: 'The text of this item.',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'The text of the list item.',
																},
															},
															required: [],
														},
														checked: {
															type: 'boolean',
															description:
																'Whether this item has been checked off or not.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-keep',
		appVersion: 1,
		endpointName: 'listNotes',
		label: 'List notes',
		description: 'Lists notes.',
		context:
			'---\nname: listNotes\ndescription: Lists notes.\n---\n\nReturns one page of Google Keep notes. The response contains at most `pageSize` notes and a `nextPageToken` when more results are available.\n\nTo get the next page, call this endpoint again with the same `filter` and the `nextPageToken` value as `pageToken`. Repeat until `nextPageToken` is empty.\n\nIf no `filter` is supplied, the API applies the `trashed` filter by default. Valid filter fields are `create_time`, `update_time`, `trash_time`, and `trashed`, for example `trashed = true` or `create_time > "2026-01-01T00:00:00Z"`.\n\nWhen there are no notes, the response is empty and the `notes` field is missing.\n\nUse the `name` of a note (format `notes/{note}`) as the input of **Get a note**, **Delete a note**, **Create permissions**, and **Delete permissions**.\n\nRefer to the [notes.list reference](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/list).\n',
		accounts: { 'google-custom': { scope: ['https://www.googleapis.com/auth/keep.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				filter: {
					type: 'string',
					description:
						'Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160).',
				},
				pageSize: {
					type: 'number',
					description:
						'The maximum number of notes to return. A value of `0` or an empty value lets the server choose the upper bound.',
				},
				pageToken: {
					type: 'string',
					description:
						'The `nextPageToken` value from the previous response. Leave empty to get the first page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				notes: {
					type: 'array',
					description: 'A page of notes.',
					items: {
						type: 'object',
						description: 'A single note.',
						properties: {
							name: {
								type: 'string',
								description:
									'The resource name of the note. Format: `notes/{note}`.',
							},
							createTime: {
								type: 'string',
								description: 'When the note was created.',
							},
							updateTime: {
								type: 'string',
								description: 'When the note was last modified.',
							},
							trashTime: {
								type: 'string',
								description:
									'When the note was trashed. If `trashed` is `true`, the note is eventually deleted. Not set if the note is not trashed.',
							},
							trashed: {
								type: 'boolean',
								description:
									'Whether the note has been trashed. If trashed, the note is eventually deleted.',
							},
							attachments: {
								type: 'array',
								description: 'The attachments attached to the note.',
								items: {
									type: 'object',
									description: 'An attachment of the note.',
									properties: {
										name: {
											type: 'string',
											description:
												'The resource name of the attachment. Format: `notes/{note}/attachments/{attachment}`.',
										},
										mimeType: {
											type: 'array',
											description:
												'The MIME types (IANA media types) in which the attachment is available.',
											items: {
												type: 'string',
												description:
													'An IANA media type in which the attachment is available.',
											},
										},
									},
									required: [],
								},
							},
							permissions: {
								type: 'array',
								description:
									'The list of permissions set on the note. Contains at least one entry for the note owner.',
								items: {
									type: 'object',
									description:
										'A single permission on the note. Associates a member with a role.',
									properties: {
										name: {
											type: 'string',
											description:
												'The resource name of the permission. Format: `notes/{note}/permissions/{permission}`.',
										},
										role: {
											type: 'string',
											description:
												"The role granted by this permission. The role determines the entity's ability to read, write, and share notes. `OWNER` has full access and cannot be added or removed; `WRITER` can contribute content and modify note permissions.",
											default: '',
											enum: ['', 'ROLE_UNSPECIFIED', 'OWNER', 'WRITER'],
										},
										email: {
											type: 'string',
											description:
												'The email associated with the member. May be unset if the member does not have an associated email.',
										},
										deleted: {
											type: 'boolean',
											description:
												'Whether this member has been deleted. If the member is recovered, this value is set to `false` and the recovered member retains the role on the note.',
										},
										user: {
											type: 'object',
											description: 'The user to whom this role applies.',
											properties: {
												email: {
													type: 'string',
													description: "The user's email.",
												},
											},
											required: [],
										},
										group: {
											type: 'object',
											description: 'The group to which this role applies.',
											properties: {
												email: {
													type: 'string',
													description: 'The group email.',
												},
											},
											required: [],
										},
										family: {
											type: 'object',
											description:
												'The Google Family to which this role applies. The object has no fields; its presence indicates a family member.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									required: [],
								},
							},
							body: {
								type: 'object',
								description:
									'The body of the note. Contains either a text section or a list section.',
								properties: {
									text: {
										type: 'object',
										description:
											'Used if the content of the note is a block of text.',
										properties: {
											text: {
												type: 'string',
												description: 'The text of the note.',
											},
										},
										required: [],
									},
									list: {
										type: 'object',
										description: 'Used if the content of the note is a list.',
										properties: {
											listItems: {
												type: 'array',
												description: 'The items in the list.',
												items: {
													type: 'object',
													description:
														"A single list item in the note's list.",
													properties: {
														text: {
															type: 'object',
															description: 'The text of this item.',
															properties: {
																text: {
																	type: 'string',
																	description:
																		'The text of the list item.',
																},
															},
															required: [],
														},
														checked: {
															type: 'boolean',
															description:
																'Whether this item has been checked off or not.',
														},
														childListItems: {
															type: 'array',
															description:
																'List of list items nested under this list item. Only one level of nesting is allowed.',
															items: {
																type: 'object',
																description:
																	'A list item nested under this list item.',
																properties: {
																	text: {
																		type: 'object',
																		description:
																			'The text of this item.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The text of the list item.',
																			},
																		},
																		required: [],
																	},
																	checked: {
																		type: 'boolean',
																		description:
																			'Whether this item has been checked off or not.',
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
								required: [],
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description:
						'The token for the next page. Pass it as the `pageToken` input to get the next page. Empty when there are no more results.',
				},
			},
			required: [],
		},
	},
];
