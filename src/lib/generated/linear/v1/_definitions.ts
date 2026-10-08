// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized GraphQL query.',
		context:
			'Forwards an arbitrary GraphQL query or mutation to `https://api.linear.app/graphql` using the Linear connection. This is the endpoint form of Execute a GraphQL Query. It is not limited to one Linear operation.\n\n## Method\n\n- `GET` — introspection. Put the GraphQL document in `queryQs`. It is sent as the `query` query-string parameter.\n- `POST` — queries and mutations. Put the document in `queryBody`. Optionally set `operationName` when the document contains more than one operation.\n\n## Variables\n\nOn POST, choose a variables data source:\n\n- Form — an array of `{ key, value }` pairs, for example `[{ "key": "id", "value": "ENG-123" }]`.\n- Collection — one object, for example `{ "id": "ENG-123" }`.\n\nAuthorization and `Content-Type: application/json` are already applied. Do not send your own access token.\n\n## Result\n\nReturns the raw HTTP `statusCode`, `headers`, and `body`. Linear often returns HTTP 200 with an `errors` array inside `body` when the document fails. Rate limits use HTTP 400 and `errors[].extensions.code` of `RATELIMITED`. This endpoint does not treat those as a transport failure, so you can read `body.errors`.\n\nSchema and examples: https://linear.app/developers/graphql',
		accounts: { linear: { scope: [] } },
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
				method: {
					type: 'string',
					description:
						'HTTP method. Use GET for an introspection query string, or POST for a query or mutation body.',
					enum: ['GET', 'POST'],
				},
			},
			required: ['method'],
			allOf: [
				{
					if: { properties: { method: { const: 'GET' } } },
					then: {
						type: 'object',
						properties: {
							queryQs: {
								type: 'string',
								description:
									'GraphQL document sent as the `query` query-string parameter. For example, `query Issues { issues(first: 50) { nodes { id title } } }`.',
							},
						},
						required: ['queryQs'],
					},
				},
				{
					if: { properties: { method: { const: 'POST' } } },
					then: {
						type: 'object',
						properties: {
							queryBody: {
								type: 'string',
								description:
									'GraphQL query or mutation document sent in the JSON body.',
							},
							operationName: {
								type: 'string',
								description:
									'Name of the operation to run when the document contains more than one operation.',
							},
							variablesDataSource: {
								type: 'string',
								description:
									'How to supply GraphQL variables. Form is a list of key-value pairs. Collection is a single object.',
								enum: ['array', 'object'],
							},
						},
						required: ['queryBody', 'variablesDataSource'],
						allOf: [
							{
								if: { properties: { variablesDataSource: { const: 'array' } } },
								then: {
									type: 'object',
									properties: {
										variables: {
											type: 'array',
											description:
												'GraphQL variables as key-value pairs. For example, `[{ key: "id", value: "ENG-123" }]`.',
											items: {
												type: 'object',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { variablesDataSource: { const: 'object' } } },
								then: {
									type: 'object',
									properties: {
										variables: {
											description:
												'GraphQL variables as one object. For example, `{ "id": "ENG-123", "title": "New title" }`.',
										},
									},
									required: [],
								},
							},
						],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'GraphQL response body, including `data` and any `errors`.' },
				headers: {
					type: 'object',
					description: 'HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: {
					type: 'number',
					description:
						'HTTP response status code. Linear often returns 200 even when `errors` is present. Rate limits use 400.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'createComment',
		label: 'Create a comment',
		description: 'Creates a new comment.',
		context:
			'Creates one Linear comment on an issue (mutation `commentCreate`).\n\n## Required inputs\n\n- `issueId` — issue UUID or key such as `ENG-123`.\n- `body` — comment content in markdown. A Linear URL in the markdown becomes a mention.\n\n## Optional inputs\n\n- `id` — UUID to assign to the new comment. Omit it and Linear generates one.\n\n## Result\n\nReturns the created comment, its author, and the issue it was added to. Linear often returns HTTP 200 with an `errors` array when the mutation fails.',
		accounts: { linear: { scope: [] } },
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
				issueId: {
					type: 'string',
					description:
						'Identifier of the issue to comment on. Accepts a UUID or an issue key such as `ENG-123`.',
				},
				body: { type: 'string', description: 'Comment content in markdown.' },
				id: {
					type: 'string',
					description:
						'UUID to assign to the new comment. Omit it and Linear generates one.',
				},
			},
			required: ['issueId', 'body'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the comment.' },
				body: { type: 'string', description: 'Comment content in markdown.' },
				createdAt: {
					type: 'string',
					description: 'Date and time the comment was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time the comment was last updated.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time the comment was archived. Empty when the comment is not archived.',
				},
				editedAt: {
					type: 'string',
					description:
						'Date and time the comment body was last edited. Empty when the comment was never edited.',
				},
				url: { type: 'string', description: 'URL of the comment in Linear.' },
				user: {
					type: 'object',
					description: 'User who wrote the comment.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the user who wrote the comment.',
						},
						name: {
							type: 'string',
							description: 'Name of the user who wrote the comment.',
						},
					},
					required: [],
				},
				issue: {
					type: 'object',
					description: 'Issue the comment belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the issue.' },
						createdAt: {
							type: 'string',
							description: 'Date and time the issue was created.',
						},
						state: {
							type: 'object',
							description: 'Workflow state of the issue.',
							properties: {
								id: {
									type: 'string',
									description: 'Unique identifier of the workflow state.',
								},
								name: {
									type: 'string',
									description: 'Name of the workflow state.',
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
		appName: 'linear',
		appVersion: 1,
		endpointName: 'createIssue',
		label: 'Create an issue',
		description: 'Creates a new issue.',
		context:
			"Creates one Linear issue (mutation `issueCreate`).\n\n## Required inputs\n\n- `teamId` — team UUID.\n- `title` — issue title.\n\n## Notable optional inputs\n\n- `description` — markdown.\n- `dueDate` — date only, `YYYY-MM-DD`. Send the string as-is. Do not include a time.\n- `priority` — `0` no priority, `1` urgent, `2` high, `3` medium, `4` low.\n- `stateId` is not an input here. If you omit a state, Linear assigns the team's first Backlog state, or Triage when that feature is on.\n- `id` — optional UUID to assign yourself. Omit it and Linear generates one.\n- `labelIds` and `subscriberIds` — arrays of UUIDs applied at creation.\n\n## Result\n\nReturns the created issue: id, title, estimate, description, parent, labels, team, and subscribers. Linear often returns HTTP 200 with an `errors` array when the mutation fails.",
		accounts: { linear: { scope: [] } },
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
				teamId: {
					type: 'string',
					description: 'Unique identifier of the team to create the issue in.',
				},
				assigneeId: {
					type: 'string',
					description: 'Unique identifier of the user to assign the issue to.',
				},
				cycleId: {
					type: 'string',
					description: 'Unique identifier of the cycle to associate with the issue.',
				},
				boardOrder: {
					type: 'number',
					description: 'Position of the issue in its column on the board.',
				},
				description: { type: 'string', description: 'Issue description in markdown.' },
				dueDate: {
					type: 'string',
					description:
						'Date the issue is due, as a date-only string in `YYYY-MM-DD` format. For example, `2026-10-21`.',
				},
				estimate: { type: 'number', description: 'Estimated complexity of the issue.' },
				id: {
					type: 'string',
					description:
						'UUID to assign to the new issue. Omit it and Linear generates one.',
				},
				labelIds: {
					type: 'array',
					description: 'Unique identifiers of the labels to attach to the new issue.',
					items: { type: 'string', description: 'Unique identifier of one label.' },
				},
				parentId: {
					type: 'string',
					description:
						'Unique identifier of the parent issue, when creating a sub-issue.',
				},
				priority: {
					type: 'string',
					description:
						'Priority of the issue. 0 is no priority, 1 is urgent, 2 is high, 3 is medium, and 4 is low.',
					default: '',
					enum: ['', 0, 1, 2, 3, 4],
				},
				projectId: {
					type: 'string',
					description: 'Unique identifier of the project to associate with the issue.',
				},
				referenceCommentId: {
					type: 'string',
					description: 'Unique identifier of the comment this issue references.',
				},
				sortOrder: {
					type: 'number',
					description: 'Position of the issue relative to other issues.',
				},
				subIssueSortOrder: {
					type: 'number',
					description: "Position of the issue in its parent's sub-issue list.",
				},
				subscriberIds: {
					type: 'array',
					description: 'Unique identifiers of the users to subscribe to the new issue.',
					items: { type: 'string', description: 'Unique identifier of one subscriber.' },
				},
			},
			required: ['teamId', 'title'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the created issue.' },
				estimate: {
					type: 'number',
					description:
						'Estimated complexity of the created issue. Empty when no estimate was set.',
				},
				description: {
					type: 'string',
					description:
						'Issue description in markdown. Empty when no description was set.',
				},
				parent: {
					type: 'object',
					description: 'Parent issue, when this issue is a sub-issue.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the parent issue.',
						},
					},
					required: [],
				},
				labels: {
					type: 'object',
					description: 'Labels attached to the created issue.',
					properties: {
						nodes: {
							type: 'array',
							description: 'Labels returned for this issue.',
							items: {
								type: 'object',
								description: 'One label attached to the issue.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the label.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				team: {
					type: 'object',
					description: 'Team the issue belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the team.' },
						name: { type: 'string', description: 'Name of the team.' },
					},
					required: [],
				},
				subscribers: {
					type: 'object',
					description: 'Users subscribed to the issue.',
					properties: {
						nodes: {
							type: 'array',
							description: 'Subscribers returned for this issue.',
							items: {
								type: 'object',
								description: 'A user subscribed to the issue.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the subscriber.',
									},
									email: {
										type: 'string',
										description: 'Email address of the subscriber.',
									},
									name: {
										type: 'string',
										description: 'Name of the subscriber.',
									},
									updatedAt: {
										type: 'string',
										description:
											'Date and time the subscriber was last updated.',
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
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'deleteComment',
		label: 'Delete a comment',
		description: 'Deletes an existing comment.',
		context:
			'Deletes one Linear comment by ID (mutation `commentDelete`).\n\n## Required inputs\n\n- `commentId` — comment UUID. Use Get a comment or List comments to find it.\n\n## Result\n\nReturns `success`. Deleting a comment that does not exist fails. Linear often returns HTTP 200 with an `errors` array when the mutation fails.',
		accounts: { linear: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				commentId: {
					type: 'string',
					description: 'Unique identifier of the comment to delete.',
				},
			},
			required: ['commentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether Linear deleted the comment.' },
			},
			required: [],
		},
	},
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'deleteIssue',
		label: 'Delete an issue',
		description: 'Deletes an existing issue.',
		context:
			'Deletes one Linear issue by ID (mutation `issueDelete`).\n\nTo restore it during this period, use Update an issue with trashed set to restore. Use trashed, not archivedAt, to determine the current trash state because archivedAt can remain populated after restoration.\n\n## Required inputs\n\n- `issueId` — issue UUID or key such as `ENG-123`.\n\n## Result\n\nReturns success. Linear moves the issue to Recently deleted (trashed: true) and sets archivedAt; it does not immediately erase the issue. The issue remains queryable and recoverable for 30 days, after which Linear permanently removes it.\n\nLinear often returns HTTP 200 with an `errors` array when the mutation fails. A missing issue or a failed delete is an error, not `success: false` hidden in a successful result.',
		accounts: { linear: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueId: {
					type: 'string',
					description:
						'Identifier of the issue to delete. Accepts a UUID or an issue key such as `ENG-123`.',
				},
			},
			required: ['issueId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether Linear deleted the issue.' },
			},
			required: [],
		},
	},
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'getComment',
		label: 'Get a comment',
		description: 'Retrieves an existing comment.',
		context:
			"Retrieves one Linear comment by ID (query `comment`).\n\n## Required inputs\n\n- `commentId` — comment UUID. Use List comments when you do not already have it.\n\n## Result\n\nReturns the comment body, timestamps, URL, author, and the issue it belongs to, including that issue's workflow state.\n\nLinear often returns HTTP 200 with an `errors` array when the query fails. A missing comment is an error.",
		accounts: { linear: { scope: [] } },
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
				commentId: {
					type: 'string',
					description: 'Unique identifier of the comment to return.',
				},
			},
			required: ['commentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the comment.' },
				body: { type: 'string', description: 'Comment content in markdown.' },
				createdAt: {
					type: 'string',
					description: 'Date and time the comment was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time the comment was last updated.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time the comment was archived. Empty when the comment is not archived.',
				},
				editedAt: {
					type: 'string',
					description:
						'Date and time the comment body was last edited. Empty when the comment was never edited.',
				},
				url: { type: 'string', description: 'URL of the comment in Linear.' },
				user: {
					type: 'object',
					description: 'User who wrote the comment.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the user who wrote the comment.',
						},
						name: {
							type: 'string',
							description: 'Name of the user who wrote the comment.',
						},
					},
					required: [],
				},
				issue: {
					type: 'object',
					description: 'Issue the comment belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the issue.' },
						createdAt: {
							type: 'string',
							description: 'Date and time the issue was created.',
						},
						state: {
							type: 'object',
							description: 'Workflow state of the issue.',
							properties: {
								id: {
									type: 'string',
									description: 'Unique identifier of the workflow state.',
								},
								name: {
									type: 'string',
									description: 'Name of the workflow state.',
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
		appName: 'linear',
		appVersion: 1,
		endpointName: 'getIssue',
		label: 'Get an issue',
		description: 'Retrieves an existing issue.',
		context:
			'Retrieves one Linear issue by ID (query `issue`).\n\n## Required inputs\n\n- `issueId` — issue UUID or key such as `ENG-123`.\n\n## Result\n\nReturns the issue title, description, estimate, due date, parent, team, and subscribers. The selection matches the Get an Issue module. Use Update an issue when you need the wider issue payload (state, assignee, project, labels, and timestamps).\n\nLinear often returns HTTP 200 with an `errors` array when the query fails. A missing issue is an error.',
		accounts: { linear: { scope: [] } },
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
				issueId: {
					type: 'string',
					description:
						'Identifier of the issue to return. Accepts a UUID or an issue key such as `ENG-123`.',
				},
			},
			required: ['issueId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the issue.' },
				dueDate: {
					type: 'string',
					description:
						'Date the issue is due, in `YYYY-MM-DD` format. Empty when no due date is set.',
				},
				estimate: {
					type: 'number',
					description:
						'Estimated complexity of the issue. Empty when no estimate is set.',
				},
				description: {
					type: 'string',
					description: 'Issue description in markdown. Empty when no description is set.',
				},
				parent: {
					type: 'object',
					description: 'Parent issue, when this issue is a sub-issue.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the parent issue.',
						},
					},
					required: [],
				},
				team: {
					type: 'object',
					description: 'Team the issue belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the team.' },
						name: { type: 'string', description: 'Name of the team.' },
					},
					required: [],
				},
				subscribers: {
					type: 'object',
					description: 'Users subscribed to the issue.',
					properties: {
						nodes: {
							type: 'array',
							description: 'Subscribers returned for this issue.',
							items: {
								type: 'object',
								description: 'A user subscribed to the issue.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the subscriber.',
									},
									email: {
										type: 'string',
										description: 'Email address of the subscriber.',
									},
									name: {
										type: 'string',
										description: 'Name of the subscriber.',
									},
									updatedAt: {
										type: 'string',
										description:
											'Date and time the subscriber was last updated.',
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
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'listComments',
		label: 'List comments',
		description: 'Retrieves one page of comments.',
		context:
			"Lists one page of Linear comments (query `comments`). This is a single GraphQL call, not an automatic walk of every page.\n\n## Inputs\n\n- `first` — page size, from 1 to 50. Defaults to 50.\n- `after` — cursor from a previous call's `endCursor`. Omit it for the first page.\n\n## Pagination\n\n1. Call without `after`.\n2. If `hasNextPage` is true, pass `endCursor` back as `after`.\n3. Repeat until `hasNextPage` is false.\n\nEach comment includes body, timestamps, URL, author, and the issue it belongs to. Archived comments are excluded unless Linear's `includeArchived` flag is set, and this endpoint does not set it.",
		accounts: { linear: { scope: [] } },
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
				first: {
					type: 'number',
					description:
						'Number of comments to return in this call. Must be from 1 to 50. Defaults to 50.',
					default: 50,
				},
				after: {
					type: 'string',
					description:
						'Pagination cursor returned as `endCursor` by a previous call to this endpoint. Omit it to fetch the first page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'Comments returned in this page.',
					items: {
						type: 'object',
						description: 'One comment.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier of the comment.',
							},
							body: { type: 'string', description: 'Comment content in markdown.' },
							createdAt: {
								type: 'string',
								description: 'Date and time the comment was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time the comment was last updated.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time the comment was archived. Empty when the comment is not archived.',
							},
							editedAt: {
								type: 'string',
								description:
									'Date and time the comment body was last edited. Empty when the comment was never edited.',
							},
							url: { type: 'string', description: 'URL of the comment in Linear.' },
							user: {
								type: 'object',
								description: 'User who wrote the comment.',
								properties: {
									id: {
										type: 'string',
										description:
											'Unique identifier of the user who wrote the comment.',
									},
									name: {
										type: 'string',
										description: 'Name of the user who wrote the comment.',
									},
								},
								required: [],
							},
							issue: {
								type: 'object',
								description: 'Issue the comment belongs to.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the issue.',
									},
									createdAt: {
										type: 'string',
										description: 'Date and time the issue was created.',
									},
									state: {
										type: 'object',
										description: 'Workflow state of the issue.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier of the workflow state.',
											},
											name: {
												type: 'string',
												description: 'Name of the workflow state.',
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
				hasNextPage: {
					type: 'boolean',
					description:
						'Whether another page of comments exists. When true, pass `endCursor` back as `after`.',
				},
				endCursor: {
					type: 'string',
					description:
						'Cursor for the next page. Pass it as `after` on the next call when `hasNextPage` is true.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'listIssues',
		label: 'List issues',
		description: 'Retrieves one page of issues.',
		context:
			"Lists one page of Linear issues (query `issues`). This is a single GraphQL call, not an automatic walk of every page.\n\n## Inputs\n\n- `first` — page size, from 1 to 50. Defaults to 50. Linear's default page size is 50, and complexity is charged per returned issue.\n- `after` — cursor from a previous call's `endCursor`. Omit it for the first page.\n\n## Pagination\n\n1. Call without `after`.\n2. If `hasNextPage` is true, pass `endCursor` back as `after`.\n3. Repeat until `hasNextPage` is false.\n\nArchived issues are excluded. Linear hides them unless `includeArchived` is set, and this endpoint does not set it.\n\nEach issue includes the same fields as Get an issue: title, description, estimate, due date, parent, team, and subscribers.",
		accounts: { linear: { scope: [] } },
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
				first: {
					type: 'number',
					description:
						'Number of issues to return in this call. Must be from 1 to 50. Defaults to 50.',
					default: 50,
				},
				after: {
					type: 'string',
					description:
						'Pagination cursor returned as `endCursor` by a previous call to this endpoint. Omit it to fetch the first page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'Issues returned in this page.',
					items: {
						type: 'object',
						description: 'One issue.',
						properties: {
							id: { type: 'string', description: 'Unique identifier of the issue.' },
							dueDate: {
								type: 'string',
								description:
									'Date the issue is due, in `YYYY-MM-DD` format. Empty when no due date is set.',
							},
							estimate: {
								type: 'number',
								description:
									'Estimated complexity of the issue. Empty when no estimate is set.',
							},
							description: {
								type: 'string',
								description:
									'Issue description in markdown. Empty when no description is set.',
							},
							parent: {
								type: 'object',
								description: 'Parent issue, when this issue is a sub-issue.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the parent issue.',
									},
								},
								required: [],
							},
							team: {
								type: 'object',
								description: 'Team the issue belongs to.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the team.',
									},
									name: { type: 'string', description: 'Name of the team.' },
								},
								required: [],
							},
							subscribers: {
								type: 'object',
								description: 'Users subscribed to the issue.',
								properties: {
									nodes: {
										type: 'array',
										description: 'Subscribers returned for this issue.',
										items: {
											type: 'object',
											description: 'A user subscribed to the issue.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique identifier of the subscriber.',
												},
												email: {
													type: 'string',
													description: 'Email address of the subscriber.',
												},
												name: {
													type: 'string',
													description: 'Name of the subscriber.',
												},
												updatedAt: {
													type: 'string',
													description:
														'Date and time the subscriber was last updated.',
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
				hasNextPage: {
					type: 'boolean',
					description:
						'Whether another page of issues exists. When true, pass `endCursor` back as `after`.',
				},
				endCursor: {
					type: 'string',
					description:
						'Cursor for the next page. Pass it as `after` on the next call when `hasNextPage` is true.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'linear',
		appVersion: 1,
		endpointName: 'updateComment',
		label: 'Update a comment',
		description: 'Updates an existing comment.',
		context:
			'Updates one Linear comment (mutation `commentUpdate`). Sending the same body again does not create a second comment.\n\n## Required inputs\n\n- `commentId` — comment UUID.\n\n## Optional inputs\n\n- `body` — replacement markdown. Omit it and the comment body is left unchanged.\n\n## Result\n\nReturns the updated comment, its author, and the issue it belongs to. Linear often returns HTTP 200 with an `errors` array when the mutation fails.',
		accounts: { linear: { scope: [] } },
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
				commentId: {
					type: 'string',
					description: 'Unique identifier of the comment to update.',
				},
				body: {
					type: 'string',
					description:
						'Replacement comment content in markdown. Omit it to leave the body unchanged.',
				},
			},
			required: ['commentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the comment.' },
				body: { type: 'string', description: 'Comment content in markdown.' },
				createdAt: {
					type: 'string',
					description: 'Date and time the comment was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time the comment was last updated.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time the comment was archived. Empty when the comment is not archived.',
				},
				editedAt: {
					type: 'string',
					description:
						'Date and time the comment body was last edited. Empty when the comment was never edited.',
				},
				url: { type: 'string', description: 'URL of the comment in Linear.' },
				user: {
					type: 'object',
					description: 'User who wrote the comment.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the user who wrote the comment.',
						},
						name: {
							type: 'string',
							description: 'Name of the user who wrote the comment.',
						},
					},
					required: [],
				},
				issue: {
					type: 'object',
					description: 'Issue the comment belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the issue.' },
						createdAt: {
							type: 'string',
							description: 'Date and time the issue was created.',
						},
						state: {
							type: 'object',
							description: 'Workflow state of the issue.',
							properties: {
								id: {
									type: 'string',
									description: 'Unique identifier of the workflow state.',
								},
								name: {
									type: 'string',
									description: 'Name of the workflow state.',
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
		appName: 'linear',
		appVersion: 1,
		endpointName: 'updateIssue',
		label: 'Update an issue',
		description: 'Updates an existing issue.',
		context:
			"Updates one Linear issue (mutation `issueUpdate`). Only fields you send are changed. Sending the same values again does not create a second issue.\n\n## Required inputs\n\n- `issueId` — issue UUID or key such as `ENG-123`. This is the mutation `id`, not a field inside `input`.\n\n## Notable optional inputs\n\n- `title`, `description` (markdown), `stateId`, `assigneeId`, `teamId`, `projectId`, `cycleId`, `parentId`.\n- `dueDate` — date only, `YYYY-MM-DD`. Send the string as-is.\n- `priority` — `0` no priority, `1` urgent, `2` high, `3` medium, `4` low.\n- `labelIds` — replaces the issue's labels. Omit it to leave labels unchanged.\n- `subscriberIds` — replaces the issue's subscribers. Omit it to leave subscribers unchanged.\n- `trashed` — `trash` moves the issue to trash (`trashed: true`). `restore` takes it out of trash (`trashed: null`). Omit it to leave trash status unchanged.\n- `snoozedUntilAt` — date-time until which the issue stays snoozed in Triage.\n\nChanges made in the first 3 minutes after creation are treated as part of creation and are not added to the activity log.\n\n## Result\n\nReturns the updated issue, including state, team, assignee, project, labels, and subscribers. Linear often returns HTTP 200 with an `errors` array when the mutation fails. To delete an issue, use Delete an issue instead.",
		accounts: { linear: { scope: [] } },
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
				issueId: {
					type: 'string',
					description:
						'Identifier of the issue to update. Accepts a UUID or an issue key such as `ENG-123`.',
				},
				assigneeId: {
					type: 'string',
					description: 'Unique identifier of the user to assign the issue to.',
				},
				cycleId: {
					type: 'string',
					description: 'Unique identifier of the cycle to associate with the issue.',
				},
				description: {
					type: 'string',
					description:
						'Issue description in markdown. Omit it to leave the description unchanged.',
				},
				dueDate: {
					type: 'string',
					description:
						'Date the issue is due, as a date-only string in `YYYY-MM-DD` format. For example, `2026-10-21`.',
				},
				estimate: { type: 'number', description: 'Estimated complexity of the issue.' },
				labelIds: {
					type: 'array',
					description:
						"Unique identifiers of the labels to set on the issue. Sending this list replaces the issue's labels. Omit it to leave labels unchanged.",
					items: { type: 'string', description: 'Unique identifier of one label.' },
				},
				parentId: { type: 'string', description: 'Unique identifier of the parent issue.' },
				priority: {
					type: 'string',
					description:
						'Priority of the issue. 0 is no priority, 1 is urgent, 2 is high, 3 is medium, and 4 is low.',
					default: '',
					enum: ['', 0, 1, 2, 3, 4],
				},
				projectId: {
					type: 'string',
					description: 'Unique identifier of the project to associate with the issue.',
				},
				snoozedById: {
					type: 'string',
					description: 'Unique identifier of the user who snoozed the issue.',
				},
				snoozedUntilAt: {
					type: 'string',
					description: 'Date and time until which the issue stays snoozed in Triage.',
				},
				sortOrder: {
					type: 'number',
					description: 'Position of the issue relative to other issues.',
				},
				subIssueSortOrder: {
					type: 'number',
					description: "Position of the issue in its parent's sub-issue list.",
				},
				stateId: {
					type: 'string',
					description: 'Unique identifier of the workflow state to move the issue to.',
				},
				subscriberIds: {
					type: 'array',
					description:
						'Unique identifiers of the users subscribed to the issue. Sending this list replaces the subscribers. Omit it to leave subscribers unchanged.',
					items: { type: 'string', description: 'Unique identifier of one subscriber.' },
				},
				teamId: {
					type: 'string',
					description: 'Unique identifier of the team to move the issue to.',
				},
				trashed: {
					type: 'string',
					description:
						'Leave empty to keep the current trash status. Move to trash sends the issue to trash. Restore from trash takes the issue out of trash.',
					default: '',
					enum: ['', 'trash', 'restore'],
				},
			},
			required: ['issueId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the issue.' },
				identifier: {
					type: 'string',
					description: 'Human-readable issue key, such as `ENG-123`.',
				},
				number: { type: 'number', description: 'Issue number within the team.' },
				description: { type: 'string', description: 'Issue description in markdown.' },
				url: { type: 'string', description: 'URL of the issue in Linear.' },
				branchName: {
					type: 'string',
					description: 'Suggested Git branch name for the issue.',
				},
				priority: {
					type: 'number',
					description:
						'Priority number. 0 is no priority, 1 is urgent, 2 is high, 3 is medium, and 4 is low.',
				},
				priorityLabel: {
					type: 'string',
					description: 'Priority as a label, such as `High`.',
				},
				prioritySortOrder: {
					type: 'number',
					description: 'Sort position of the issue among issues with the same priority.',
				},
				sortOrder: {
					type: 'number',
					description: 'Position of the issue relative to other issues.',
				},
				subIssueSortOrder: {
					type: 'number',
					description: "Position of the issue in its parent's sub-issue list.",
				},
				estimate: { type: 'number', description: 'Estimated complexity of the issue.' },
				dueDate: {
					type: 'string',
					description:
						'Date the issue is due, in `YYYY-MM-DD` format. Empty when no due date is set.',
				},
				trashed: { type: 'boolean', description: 'Whether the issue is in trash.' },
				customerTicketCount: {
					type: 'number',
					description: 'Number of customer tickets linked to the issue.',
				},
				inheritsSharedAccess: {
					type: 'boolean',
					description: 'Whether the issue inherits shared access from its parent.',
				},
				integrationSourceType: {
					type: 'string',
					description:
						'Source type of the integration that created the issue, when it was created outside Linear.',
				},
				labelIds: {
					type: 'array',
					description: 'Unique identifiers of the labels on the issue.',
					items: { type: 'string', description: 'Unique identifier of one label.' },
				},
				previousIdentifiers: {
					type: 'array',
					description: 'Previous issue keys, after the issue moved between teams.',
					items: {
						type: 'string',
						description: 'A previous issue key, such as `ENG-123`.',
					},
				},
				reactionData: {
					type: 'object',
					description: 'Raw reaction summary returned by Linear.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				createdAt: { type: 'string', description: 'Date and time the issue was created.' },
				updatedAt: {
					type: 'string',
					description: 'Date and time the issue was last updated.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time the issue was archived. Empty when the issue is not archived.',
				},
				startedAt: {
					type: 'string',
					description: 'Date and time work on the issue started.',
				},
				completedAt: {
					type: 'string',
					description: 'Date and time the issue was completed.',
				},
				canceledAt: {
					type: 'string',
					description: 'Date and time the issue was canceled.',
				},
				autoArchivedAt: {
					type: 'string',
					description: 'Date and time the issue was auto-archived.',
				},
				autoClosedAt: {
					type: 'string',
					description: 'Date and time the issue was auto-closed.',
				},
				triagedAt: { type: 'string', description: 'Date and time the issue was triaged.' },
				startedTriageAt: {
					type: 'string',
					description: 'Date and time triage of the issue started.',
				},
				snoozedUntilAt: {
					type: 'string',
					description: 'Date and time until which the issue stays snoozed.',
				},
				addedToCycleAt: {
					type: 'string',
					description: 'Date and time the issue was added to its current cycle.',
				},
				addedToProjectAt: {
					type: 'string',
					description: 'Date and time the issue was added to its current project.',
				},
				addedToTeamAt: {
					type: 'string',
					description: 'Date and time the issue was added to its current team.',
				},
				slaType: { type: 'string', description: 'SLA type applied to the issue.' },
				slaStartedAt: {
					type: 'string',
					description: 'Date and time the SLA clock started.',
				},
				slaBreachesAt: { type: 'string', description: 'Date and time the SLA breaches.' },
				slaHighRiskAt: {
					type: 'string',
					description: 'Date and time the issue enters the high SLA risk window.',
				},
				slaMediumRiskAt: {
					type: 'string',
					description: 'Date and time the issue enters the medium SLA risk window.',
				},
				state: {
					type: 'object',
					description: 'Workflow state of the issue.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the workflow state.',
						},
						name: { type: 'string', description: 'Name of the workflow state.' },
						type: {
							type: 'string',
							description:
								'Workflow category of the state, such as `started` or `completed`.',
						},
						color: { type: 'string', description: 'Color of the workflow state.' },
						position: {
							type: 'number',
							description: 'Position of the state in the workflow.',
						},
						description: {
							type: 'string',
							description: 'Description of the workflow state.',
						},
					},
					required: [],
				},
				team: {
					type: 'object',
					description: 'Team the issue belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the team.' },
						key: {
							type: 'string',
							description: 'Short key used in issue identifiers, such as `ENG`.',
						},
						name: { type: 'string', description: 'Name of the team.' },
						displayName: { type: 'string', description: 'Display name of the team.' },
						description: { type: 'string', description: 'Description of the team.' },
						icon: { type: 'string', description: 'Icon of the team.' },
						color: { type: 'string', description: 'Color of the team.' },
					},
					required: [],
				},
				assignee: {
					type: 'object',
					description: 'User assigned to the issue.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the assignee.' },
						name: { type: 'string', description: 'Name of the assignee.' },
						displayName: {
							type: 'string',
							description: 'Display name of the assignee.',
						},
						email: { type: 'string', description: 'Email address of the assignee.' },
						avatarUrl: { type: 'string', description: "URL of the assignee's avatar." },
						active: { type: 'boolean', description: 'Whether the assignee is active.' },
					},
					required: [],
				},
				creator: {
					type: 'object',
					description: 'User who created the issue.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the creator.' },
						name: { type: 'string', description: 'Name of the creator.' },
						displayName: {
							type: 'string',
							description: 'Display name of the creator.',
						},
						email: { type: 'string', description: 'Email address of the creator.' },
						avatarUrl: { type: 'string', description: "URL of the creator's avatar." },
						active: { type: 'boolean', description: 'Whether the creator is active.' },
					},
					required: [],
				},
				delegate: {
					type: 'object',
					description: 'User or agent the issue is delegated to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the delegate.' },
						name: { type: 'string', description: 'Name of the delegate.' },
						displayName: {
							type: 'string',
							description: 'Display name of the delegate.',
						},
						email: { type: 'string', description: 'Email address of the delegate.' },
						avatarUrl: { type: 'string', description: "URL of the delegate's avatar." },
						active: { type: 'boolean', description: 'Whether the delegate is active.' },
					},
					required: [],
				},
				snoozedBy: {
					type: 'object',
					description: 'User who snoozed the issue.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the user who snoozed the issue.',
						},
						name: {
							type: 'string',
							description: 'Name of the user who snoozed the issue.',
						},
						displayName: {
							type: 'string',
							description: 'Display name of the user who snoozed the issue.',
						},
						email: {
							type: 'string',
							description: 'Email address of the user who snoozed the issue.',
						},
						avatarUrl: {
							type: 'string',
							description: 'URL of the avatar of the user who snoozed the issue.',
						},
						active: {
							type: 'boolean',
							description: 'Whether the user who snoozed the issue is active.',
						},
					},
					required: [],
				},
				externalUserCreator: {
					type: 'object',
					description:
						'External user who created the issue, when it was created from outside Linear.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the external user.',
						},
						name: { type: 'string', description: 'Name of the external user.' },
						displayName: {
							type: 'string',
							description: 'Display name of the external user.',
						},
						email: {
							type: 'string',
							description: 'Email address of the external user.',
						},
						avatarUrl: {
							type: 'string',
							description: "URL of the external user's avatar.",
						},
					},
					required: [],
				},
				botActor: {
					type: 'object',
					description: 'Bot that acted on the issue.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the bot.' },
						name: { type: 'string', description: 'Name of the bot.' },
						type: { type: 'string', description: 'Type of the bot actor.' },
						subType: { type: 'string', description: 'Sub-type of the bot actor.' },
						avatarUrl: { type: 'string', description: "URL of the bot's avatar." },
						userDisplayName: {
							type: 'string',
							description: "Display name shown for the bot's user.",
						},
					},
					required: [],
				},
				parent: {
					type: 'object',
					description: 'Parent issue, when this issue is a sub-issue.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the parent issue.',
						},
						identifier: {
							type: 'string',
							description: 'Issue key of the parent, such as `ENG-123`.',
						},
						url: { type: 'string', description: 'URL of the parent issue in Linear.' },
					},
					required: [],
				},
				project: {
					type: 'object',
					description: 'Project the issue belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the project.' },
						name: { type: 'string', description: 'Name of the project.' },
						description: { type: 'string', description: 'Description of the project.' },
						slugId: { type: 'string', description: 'Slug identifier of the project.' },
						url: { type: 'string', description: 'URL of the project in Linear.' },
					},
					required: [],
				},
				projectMilestone: {
					type: 'object',
					description: 'Project milestone the issue belongs to.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the project milestone.',
						},
						name: { type: 'string', description: 'Name of the project milestone.' },
						targetDate: {
							type: 'string',
							description: 'Target date of the project milestone.',
						},
					},
					required: [],
				},
				cycle: {
					type: 'object',
					description: 'Cycle the issue belongs to.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the cycle.' },
						number: { type: 'number', description: 'Cycle number.' },
						name: { type: 'string', description: 'Name of the cycle.' },
						startsAt: {
							type: 'string',
							description: 'Date and time the cycle starts.',
						},
						endsAt: { type: 'string', description: 'Date and time the cycle ends.' },
					},
					required: [],
				},
				lastAppliedTemplate: {
					type: 'object',
					description: 'Template last applied to the issue.',
					properties: {
						id: { type: 'string', description: 'Unique identifier of the template.' },
						name: { type: 'string', description: 'Name of the template.' },
						type: { type: 'string', description: 'Type of the template.' },
					},
					required: [],
				},
				recurringIssueTemplate: {
					type: 'object',
					description:
						'Recurring template that created the issue, when the issue is recurring.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the recurring template.',
						},
						name: { type: 'string', description: 'Name of the recurring template.' },
						type: { type: 'string', description: 'Type of the recurring template.' },
					},
					required: [],
				},
				sourceComment: {
					type: 'object',
					description: 'Comment that the issue was created from.',
					properties: {
						id: {
							type: 'string',
							description: 'Unique identifier of the source comment.',
						},
						body: { type: 'string', description: 'Body of the source comment.' },
						url: {
							type: 'string',
							description: 'URL of the source comment in Linear.',
						},
					},
					required: [],
				},
				sharedAccess: {
					type: 'object',
					description: 'Shared-access settings for the issue.',
					properties: {
						isShared: {
							type: 'boolean',
							description: 'Whether the issue is shared outside the workspace.',
						},
						sharedWithCount: {
							type: 'number',
							description: 'Number of external parties the issue is shared with.',
						},
						viewerHasOnlySharedAccess: {
							type: 'boolean',
							description:
								'Whether the current viewer has only shared access to the issue.',
						},
						disallowedIssueFields: {
							type: 'array',
							description:
								'Issue fields hidden from viewers who have only shared access.',
							items: {
								type: 'string',
								description: 'Name of one field hidden from shared-access viewers.',
							},
						},
					},
					required: [],
				},
				syncedWith: {
					type: 'array',
					description: 'External entities this issue is synced with.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: 'Identifier of the external entity.',
							},
							service: {
								type: 'string',
								description: 'External service the issue is synced with.',
							},
						},
						required: [],
					},
				},
				labels: {
					type: 'object',
					description: 'Labels on the issue.',
					properties: {
						nodes: {
							type: 'array',
							description: 'Labels returned for this issue.',
							items: {
								type: 'object',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the label.',
									},
									name: { type: 'string', description: 'Name of the label.' },
									color: { type: 'string', description: 'Color of the label.' },
									description: {
										type: 'string',
										description: 'Description of the label.',
									},
									isGroup: {
										type: 'boolean',
										description:
											'Whether the label is a group that contains other labels.',
									},
									parent: {
										type: 'object',
										description:
											'Parent label group, when this label is nested.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier of the parent label.',
											},
											name: {
												type: 'string',
												description: 'Name of the parent label.',
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
				subscribers: {
					type: 'object',
					description: 'Users subscribed to the issue.',
					properties: {
						nodes: {
							type: 'array',
							description: 'Subscribers returned for this issue.',
							items: {
								type: 'object',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier of the subscriber.',
									},
									name: {
										type: 'string',
										description: 'Name of the subscriber.',
									},
									displayName: {
										type: 'string',
										description: 'Display name of the subscriber.',
									},
									email: {
										type: 'string',
										description: 'Email address of the subscriber.',
									},
									avatarUrl: {
										type: 'string',
										description: "URL of the subscriber's avatar.",
									},
									active: {
										type: 'boolean',
										description: 'Whether the subscriber is active.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				reactions: {
					type: 'array',
					description: 'Emoji reactions on the issue.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier of the reaction.',
							},
							emoji: { type: 'string', description: 'Emoji used for the reaction.' },
							createdAt: {
								type: 'string',
								description: 'Date and time the reaction was added.',
							},
							user: {
								type: 'object',
								description: 'User who added the reaction.',
								properties: {
									id: {
										type: 'string',
										description:
											'Unique identifier of the user who added the reaction.',
									},
									name: {
										type: 'string',
										description: 'Name of the user who added the reaction.',
									},
									displayName: {
										type: 'string',
										description:
											'Display name of the user who added the reaction.',
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
];
