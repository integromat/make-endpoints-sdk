// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Tasks API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://www.googleapis.com/tasks`. Provide the remaining path in the URL parameter\n(e.g. `/v1/users/@me/lists`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { google: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://www.googleapis.com/tasks`. For example, `/v1/users/@me/lists`.',
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
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'createATask',
		label: 'Create a task',
		description: 'Creates a new task or subtask in the specified task list.',
		context:
			'---\nname: createATask\ndescription: Creates a new task or subtask in the specified task list.\n---\n\nCreates a task in the given task list. Provide "Parent task ID" to create a subtask under an existing task; leave it empty for a top-level task. Use "Previous task ID" to place the task right after a given sibling (under the same parent); leave it empty to place it first. "Title" is optional; without it Google creates a task with an empty title.\n\nFind the task list ID with the "List task lists" endpoint and the parent task ID with the "List tasks" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
				parent: {
					type: 'string',
					description:
						'The ID of the parent task. Provide it to create a subtask; leave it empty to create a top-level task. An assigned task cannot be a parent task.',
				},
				previous: {
					type: 'string',
					description:
						'The ID of the sibling task the new task is placed after. Leave it empty to place the new task first among its siblings.',
				},
				notes: {
					type: 'string',
					description: 'Notes describing the task. Maximum length is 8192 characters.',
					maximum: 8192,
				},
				due: {
					type: 'string',
					description:
						'The scheduled date of the task. Only the date part is used; Google Tasks discards the time portion.',
				},
				status: {
					type: 'string',
					description:
						'The status of the new task. Leave it empty to create the task as `needsAction`.',
					default: '',
					enum: ['', 'needsAction', 'completed'],
				},
				completed: {
					type: 'string',
					description:
						'The completion date of the task. It is normally set by Google when the status becomes `completed`.',
				},
				deleted: {
					type: 'boolean',
					description:
						'Whether the task is deleted. Set to `true` to delete the task, or `false` to restore a deleted task. Read-only for tasks assigned from Google Docs or Google Chat spaces.',
				},
			},
			required: ['tasklist'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#task`.',
				},
				id: { type: 'string', description: 'The task identifier.' },
				etag: { type: 'string', description: 'The ETag of the resource.' },
				updated: { type: 'string', description: 'The last modification time of the task.' },
				selfLink: { type: 'string', description: 'The URL pointing to this task.' },
				parent: {
					type: 'string',
					description: 'The parent task identifier. Omitted for top-level tasks.',
				},
				position: {
					type: 'string',
					description:
						'A string indicating the position of the task among its sibling tasks. Tasks are ordered lexicographically by this value.',
				},
				notes: { type: 'string', description: 'The notes describing the task.' },
				status: {
					type: 'string',
					description: 'The status of the task. Either `needsAction` or `completed`.',
				},
				due: {
					type: 'string',
					description: 'The scheduled date of the task. Only the date part is recorded.',
				},
				completed: {
					type: 'string',
					description:
						'The completion date of the task. Omitted if the task has not been completed.',
				},
				deleted: { type: 'boolean', description: 'Whether the task has been deleted.' },
				hidden: {
					type: 'boolean',
					description:
						'Whether the task is hidden. This is the case if the task was marked completed when the task list was last cleared.',
				},
				links: {
					type: 'array',
					description: 'The collection of links attached to the task.',
					items: {
						type: 'object',
						description: 'A link attached to the task.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the link, for example `email`, `generic`, `chat_message` or `keep_note`.',
							},
							description: {
								type: 'string',
								description: 'The description of the link. May be empty.',
							},
							link: { type: 'string', description: 'The URL of the link.' },
						},
						required: [],
					},
				},
				webViewLink: {
					type: 'string',
					description: 'An absolute link to the task in the Google Tasks web UI.',
				},
				assignmentInfo: {
					type: 'object',
					description:
						'Context information for tasks assigned to the current user from Google Docs or Google Chat spaces.',
					properties: {
						linkToTask: {
							type: 'string',
							description:
								'An absolute link to the original task in the surface of assignment.',
						},
						surfaceType: {
							type: 'string',
							description:
								'The type of surface the assigned task originates from: `DOCUMENT` or `SPACE`.',
						},
						driveResourceInfo: {
							type: 'object',
							description:
								'Information about the Drive file the task originates from.',
							properties: {
								driveFileId: {
									type: 'string',
									description: 'The identifier of the file in the Drive API.',
								},
								resourceKey: {
									type: 'string',
									description:
										'The resource key required to access files shared via a shared link. Not required for all files.',
								},
							},
							required: [],
						},
						spaceInfo: {
							type: 'object',
							description:
								'Information about the Chat space the task originates from.',
							properties: {
								space: {
									type: 'string',
									description:
										'The Chat space the task originates from, in the format `spaces/{space}`.',
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
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'createATaskList',
		label: 'Create a task list',
		description: 'Creates a new task list.',
		context:
			'---\nname: createATaskList\ndescription: Creates a new task list.\n---\n\nCreates a new task list for the authenticated user. "Title" is optional; without it Google creates a list with an empty title. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/insert).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#taskList`.',
				},
				id: { type: 'string', description: 'The task list identifier.' },
				etag: { type: 'string', description: 'The ETag of the resource.' },
				updated: {
					type: 'string',
					description: 'The last modification time of the task list.',
				},
				selfLink: { type: 'string', description: 'The URL pointing to this task list.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'deleteATask',
		label: 'Delete a task',
		description: 'Deletes the specified task from the task list.',
		context:
			'---\nname: deleteATask\ndescription: Deletes the specified task from the task list.\n---\n\nDeletes a task from the task list. The API returns an empty response on success.\n\nDeleting a task that was assigned to the user from Google Docs or a Google Chat space also deletes the original task in that Doc or space.\n\nFind the task list ID with the "List task lists" endpoint and the task ID with the "List tasks" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/delete).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
				task: {
					type: 'string',
					description: 'The ID of the task. Use the "List tasks" endpoint to find it.',
				},
			},
			required: ['tasklist', 'task'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'deleteATaskList',
		label: 'Delete a task list',
		description: 'Deletes the specified task list.',
		context:
			'---\nname: deleteATaskList\ndescription: Deletes the specified task list.\n---\n\nDeletes a task list together with all of its tasks. The API returns an empty response on success.\n\nIf the list contains tasks assigned to the user from Google Docs or Google Chat spaces, the original tasks in that Doc or space are deleted too.\n\nFind the task list ID with the "List task lists" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/delete).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
			},
			required: ['tasklist'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'getATask',
		label: 'Get a task',
		description: 'Returns the specified task.',
		context:
			'---\nname: getATask\ndescription: Returns the specified task.\n---\n\nReturns a single task by its ID.\n\nFind the task list ID with the "List task lists" endpoint and the task ID with the "List tasks" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/get).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
				task: {
					type: 'string',
					description: 'The ID of the task. Use the "List tasks" endpoint to find it.',
				},
			},
			required: ['tasklist', 'task'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#task`.',
				},
				id: { type: 'string', description: 'The task identifier.' },
				etag: { type: 'string', description: 'The ETag of the resource.' },
				updated: { type: 'string', description: 'The last modification time of the task.' },
				selfLink: { type: 'string', description: 'The URL pointing to this task.' },
				parent: {
					type: 'string',
					description: 'The parent task identifier. Omitted for top-level tasks.',
				},
				position: {
					type: 'string',
					description:
						'A string indicating the position of the task among its sibling tasks. Tasks are ordered lexicographically by this value.',
				},
				notes: { type: 'string', description: 'The notes describing the task.' },
				status: {
					type: 'string',
					description: 'The status of the task. Either `needsAction` or `completed`.',
				},
				due: {
					type: 'string',
					description: 'The scheduled date of the task. Only the date part is recorded.',
				},
				completed: {
					type: 'string',
					description:
						'The completion date of the task. Omitted if the task has not been completed.',
				},
				deleted: { type: 'boolean', description: 'Whether the task has been deleted.' },
				hidden: {
					type: 'boolean',
					description:
						'Whether the task is hidden. This is the case if the task was marked completed when the task list was last cleared.',
				},
				links: {
					type: 'array',
					description: 'The collection of links attached to the task.',
					items: {
						type: 'object',
						description: 'A link attached to the task.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the link, for example `email`, `generic`, `chat_message` or `keep_note`.',
							},
							description: {
								type: 'string',
								description: 'The description of the link. May be empty.',
							},
							link: { type: 'string', description: 'The URL of the link.' },
						},
						required: [],
					},
				},
				webViewLink: {
					type: 'string',
					description: 'An absolute link to the task in the Google Tasks web UI.',
				},
				assignmentInfo: {
					type: 'object',
					description:
						'Context information for tasks assigned to the current user from Google Docs or Google Chat spaces.',
					properties: {
						linkToTask: {
							type: 'string',
							description:
								'An absolute link to the original task in the surface of assignment.',
						},
						surfaceType: {
							type: 'string',
							description:
								'The type of surface the assigned task originates from: `DOCUMENT` or `SPACE`.',
						},
						driveResourceInfo: {
							type: 'object',
							description:
								'Information about the Drive file the task originates from.',
							properties: {
								driveFileId: {
									type: 'string',
									description: 'The identifier of the file in the Drive API.',
								},
								resourceKey: {
									type: 'string',
									description:
										'The resource key required to access files shared via a shared link. Not required for all files.',
								},
							},
							required: [],
						},
						spaceInfo: {
							type: 'object',
							description:
								'Information about the Chat space the task originates from.',
							properties: {
								space: {
									type: 'string',
									description:
										'The Chat space the task originates from, in the format `spaces/{space}`.',
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
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'getATaskList',
		label: 'Get a task list',
		description: 'Returns the specified task list.',
		context:
			'---\nname: getATaskList\ndescription: Returns the specified task list.\n---\n\nReturns a single task list by its ID. Find the task list ID with the "List task lists" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/get).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
			},
			required: ['tasklist'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#taskList`.',
				},
				id: { type: 'string', description: 'The task list identifier.' },
				etag: { type: 'string', description: 'The ETag of the resource.' },
				updated: {
					type: 'string',
					description: 'The last modification time of the task list.',
				},
				selfLink: { type: 'string', description: 'The URL pointing to this task list.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'listTaskLists',
		label: 'List task lists',
		description: "Returns all of the authenticated user's task lists.",
		context:
			'---\nname: listTaskLists\ndescription: Returns all of the authenticated user\'s task lists.\n---\n\nReturns the authenticated user\'s task lists. Use the `id` of a task list as "Task list ID" in the other endpoints.\n\nResults are paginated. When the response contains `nextPageToken`, call this endpoint again with it as "Page token" to get the next page. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/list).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				maxResults: {
					type: 'number',
					description:
						'The maximum number of task lists returned on one page. The default and the maximum are both 1000.',
					minimum: 1,
					maximum: 1000,
				},
				pageToken: {
					type: 'string',
					description:
						'The token specifying which result page to return. Use `nextPageToken` from the previous response.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#taskLists`.',
				},
				etag: { type: 'string', description: 'The ETag of the resource.' },
				nextPageToken: {
					type: 'string',
					description:
						'The token used to access the next page of results. Omitted on the last page.',
				},
				items: {
					type: 'array',
					description: 'The task lists of the authenticated user.',
					items: {
						type: 'object',
						description: 'A task list.',
						properties: {
							kind: {
								type: 'string',
								description:
									'The type of the resource. This is always `tasks#taskList`.',
							},
							id: { type: 'string', description: 'The task list identifier.' },
							etag: { type: 'string', description: 'The ETag of the resource.' },
							updated: {
								type: 'string',
								description: 'The last modification time of the task list.',
							},
							selfLink: {
								type: 'string',
								description: 'The URL pointing to this task list.',
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
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'listTasks',
		label: 'List tasks',
		description: 'Returns all tasks in the specified task list.',
		context:
			'---\nname: listTasks\ndescription: Returns all tasks in the specified task list.\n---\n\nThe "From/To completed date", "From/To due date" and "From updated time" inputs are filters; leave them empty to skip filtering.\n\nTasks completed in Google\'s own apps (the web UI and mobile apps) are hidden tasks. To return them, set "Show hidden tasks" to `true`; "Show completed tasks" alone is not enough. Deleted tasks are returned only when "Show deleted tasks" is `true`.\n\nTasks assigned to the current user from Google Docs or Google Chat spaces are not returned by default. Set "Show assigned tasks" to `true` to include them.\n\nResults are paginated. When the response contains `nextPageToken`, call this endpoint again with it as "Page token" to get the next page. Use "Max results" to control the page size.\n\nFind the task list ID with the "List task lists" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/list).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
				completedMin: {
					type: 'string',
					description:
						'The lower bound for the task completion date to filter by. By default, tasks are not filtered by completion date.',
				},
				completedMax: {
					type: 'string',
					description:
						'The upper bound for the task completion date to filter by. By default, tasks are not filtered by completion date.',
				},
				dueMin: {
					type: 'string',
					description:
						'The lower bound for the task due date to filter by. By default, tasks are not filtered by due date.',
				},
				dueMax: {
					type: 'string',
					description:
						'The upper bound for the task due date to filter by. By default, tasks are not filtered by due date.',
				},
				showCompleted: {
					type: 'boolean',
					description:
						'Whether completed tasks are returned. The default is `true`. Tasks completed in Google\'s own apps (such as the web UI or mobile apps) are returned only when "Show hidden tasks" is also `true`.',
				},
				showDeleted: {
					type: 'boolean',
					description: 'Whether deleted tasks are returned. The default is `false`.',
				},
				showHidden: {
					type: 'boolean',
					description:
						"Whether hidden tasks are returned. The default is `false`. Tasks completed in Google's own apps (such as the web UI or mobile apps) are hidden, so set this to `true` to return them.",
				},
				showAssigned: {
					type: 'boolean',
					description:
						'Whether tasks assigned to the current user from Google Docs or Google Chat spaces are returned. The default is `false`.',
				},
				updatedMin: {
					type: 'string',
					description:
						'The lower bound for the last modification time of a task to filter by. By default, tasks are not filtered by modification time.',
				},
				maxResults: {
					type: 'number',
					description:
						'The maximum number of tasks returned on one page. The default is 20 and the maximum is 100.',
					minimum: 1,
					maximum: 100,
				},
				pageToken: {
					type: 'string',
					description:
						'The token specifying which result page to return. Use `nextPageToken` from the previous response.',
				},
			},
			required: ['tasklist'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#tasks`.',
				},
				etag: { type: 'string', description: 'The ETag of the resource.' },
				nextPageToken: {
					type: 'string',
					description:
						'The token used to access the next page of results. Omitted on the last page.',
				},
				items: {
					type: 'array',
					description: 'The tasks in the task list.',
					items: {
						type: 'object',
						description: 'A task.',
						properties: {
							kind: {
								type: 'string',
								description:
									'The type of the resource. This is always `tasks#task`.',
							},
							id: { type: 'string', description: 'The task identifier.' },
							etag: { type: 'string', description: 'The ETag of the resource.' },
							updated: {
								type: 'string',
								description: 'The last modification time of the task.',
							},
							selfLink: {
								type: 'string',
								description: 'The URL pointing to this task.',
							},
							parent: {
								type: 'string',
								description:
									'The parent task identifier. Omitted for top-level tasks.',
							},
							position: {
								type: 'string',
								description:
									'A string indicating the position of the task among its sibling tasks. Tasks are ordered lexicographically by this value.',
							},
							notes: {
								type: 'string',
								description: 'The notes describing the task.',
							},
							status: {
								type: 'string',
								description:
									'The status of the task. Either `needsAction` or `completed`.',
							},
							due: {
								type: 'string',
								description:
									'The scheduled date of the task. Only the date part is recorded.',
							},
							completed: {
								type: 'string',
								description:
									'The completion date of the task. Omitted if the task has not been completed.',
							},
							deleted: {
								type: 'boolean',
								description: 'Whether the task has been deleted.',
							},
							hidden: {
								type: 'boolean',
								description:
									'Whether the task is hidden. This is the case if the task was marked completed when the task list was last cleared.',
							},
							links: {
								type: 'array',
								description: 'The collection of links attached to the task.',
								items: {
									type: 'object',
									description: 'A link attached to the task.',
									properties: {
										type: {
											type: 'string',
											description:
												'The type of the link, for example `email`, `generic`, `chat_message` or `keep_note`.',
										},
										description: {
											type: 'string',
											description:
												'The description of the link. May be empty.',
										},
										link: {
											type: 'string',
											description: 'The URL of the link.',
										},
									},
									required: [],
								},
							},
							webViewLink: {
								type: 'string',
								description:
									'An absolute link to the task in the Google Tasks web UI.',
							},
							assignmentInfo: {
								type: 'object',
								description:
									'Context information for tasks assigned to the current user from Google Docs or Google Chat spaces.',
								properties: {
									linkToTask: {
										type: 'string',
										description:
											'An absolute link to the original task in the surface of assignment.',
									},
									surfaceType: {
										type: 'string',
										description:
											'The type of surface the assigned task originates from: `DOCUMENT` or `SPACE`.',
									},
									driveResourceInfo: {
										type: 'object',
										description:
											'Information about the Drive file the task originates from.',
										properties: {
											driveFileId: {
												type: 'string',
												description:
													'The identifier of the file in the Drive API.',
											},
											resourceKey: {
												type: 'string',
												description:
													'The resource key required to access files shared via a shared link. Not required for all files.',
											},
										},
										required: [],
									},
									spaceInfo: {
										type: 'object',
										description:
											'Information about the Chat space the task originates from.',
										properties: {
											space: {
												type: 'string',
												description:
													'The Chat space the task originates from, in the format `spaces/{space}`.',
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
			},
			required: [],
		},
	},
	{
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'updateATask',
		label: 'Update a task',
		description: 'Updates the specified task using patch semantics.',
		context:
			'---\nname: updateATask\ndescription: Updates the specified task using patch semantics.\n---\n\nUpdates a task using HTTP PATCH: only the fields you provide are changed; omitted fields keep their current values. Empty values are ignored, so this endpoint cannot be used to clear a field. Call "Get a task" first to read the current values if you need them.\n\n"Status" is `needsAction` or `completed`. When it is omitted, the status is left unchanged.\n\nSetting "Deleted" to `true` soft-deletes the task: it is then returned by "List tasks" only when "Show deleted tasks" is enabled. Setting it to `false` restores a deleted task. "Deleted" is read-only for tasks assigned from Google Docs or Google Chat spaces; delete those with "Delete a task".\n\nFind the task list ID with the "List task lists" endpoint and the task ID with the "List tasks" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/patch).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
				task: {
					type: 'string',
					description: 'The ID of the task. Use the "List tasks" endpoint to find it.',
				},
				notes: {
					type: 'string',
					description: 'Notes describing the task. Maximum length is 8192 characters.',
					maximum: 8192,
				},
				due: {
					type: 'string',
					description:
						'The scheduled date of the task. Only the date part is used; Google Tasks discards the time portion.',
				},
				status: {
					type: 'string',
					description:
						'The status of the task. Set `completed` to mark the task as completed, or `needsAction` to reopen it. If you leave it empty, the status of the task is not changed.',
					default: '',
					enum: ['', 'needsAction', 'completed'],
				},
				completed: {
					type: 'string',
					description:
						'The completion date of the task. It is normally set by Google when the status becomes `completed`.',
				},
				deleted: {
					type: 'boolean',
					description:
						'Whether the task is deleted. Set to `true` to delete the task, or `false` to restore a deleted task. Read-only for tasks assigned from Google Docs or Google Chat spaces.',
				},
			},
			required: ['tasklist', 'task'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#task`.',
				},
				id: { type: 'string', description: 'The task identifier.' },
				etag: { type: 'string', description: 'The ETag of the resource.' },
				updated: { type: 'string', description: 'The last modification time of the task.' },
				selfLink: { type: 'string', description: 'The URL pointing to this task.' },
				parent: {
					type: 'string',
					description: 'The parent task identifier. Omitted for top-level tasks.',
				},
				position: {
					type: 'string',
					description:
						'A string indicating the position of the task among its sibling tasks. Tasks are ordered lexicographically by this value.',
				},
				notes: { type: 'string', description: 'The notes describing the task.' },
				status: {
					type: 'string',
					description: 'The status of the task. Either `needsAction` or `completed`.',
				},
				due: {
					type: 'string',
					description: 'The scheduled date of the task. Only the date part is recorded.',
				},
				completed: {
					type: 'string',
					description:
						'The completion date of the task. Omitted if the task has not been completed.',
				},
				deleted: { type: 'boolean', description: 'Whether the task has been deleted.' },
				hidden: {
					type: 'boolean',
					description:
						'Whether the task is hidden. This is the case if the task was marked completed when the task list was last cleared.',
				},
				links: {
					type: 'array',
					description: 'The collection of links attached to the task.',
					items: {
						type: 'object',
						description: 'A link attached to the task.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the link, for example `email`, `generic`, `chat_message` or `keep_note`.',
							},
							description: {
								type: 'string',
								description: 'The description of the link. May be empty.',
							},
							link: { type: 'string', description: 'The URL of the link.' },
						},
						required: [],
					},
				},
				webViewLink: {
					type: 'string',
					description: 'An absolute link to the task in the Google Tasks web UI.',
				},
				assignmentInfo: {
					type: 'object',
					description:
						'Context information for tasks assigned to the current user from Google Docs or Google Chat spaces.',
					properties: {
						linkToTask: {
							type: 'string',
							description:
								'An absolute link to the original task in the surface of assignment.',
						},
						surfaceType: {
							type: 'string',
							description:
								'The type of surface the assigned task originates from: `DOCUMENT` or `SPACE`.',
						},
						driveResourceInfo: {
							type: 'object',
							description:
								'Information about the Drive file the task originates from.',
							properties: {
								driveFileId: {
									type: 'string',
									description: 'The identifier of the file in the Drive API.',
								},
								resourceKey: {
									type: 'string',
									description:
										'The resource key required to access files shared via a shared link. Not required for all files.',
								},
							},
							required: [],
						},
						spaceInfo: {
							type: 'object',
							description:
								'Information about the Chat space the task originates from.',
							properties: {
								space: {
									type: 'string',
									description:
										'The Chat space the task originates from, in the format `spaces/{space}`.',
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
		appName: 'google-tasks',
		appVersion: 5,
		endpointName: 'updateATaskList',
		label: 'Update a task list',
		description: 'Updates the specified task list using patch semantics.',
		context:
			'---\nname: updateATaskList\ndescription: Updates the specified task list using patch semantics.\n---\n\nRenames a task list using HTTP PATCH. Find the task list ID with the "List task lists" endpoint. See the [Google Tasks API reference](https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/patch).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/tasks'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				tasklist: {
					type: 'string',
					description:
						'The ID of the task list. Use the "List task lists" endpoint to find it.',
				},
			},
			required: ['tasklist', 'title'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'The type of the resource. This is always `tasks#taskList`.',
				},
				id: { type: 'string', description: 'The task list identifier.' },
				etag: { type: 'string', description: 'The ETag of the resource.' },
				updated: {
					type: 'string',
					description: 'The last modification time of the task list.',
				},
				selfLink: { type: 'string', description: 'The URL pointing to this task list.' },
			},
			required: [],
		},
	},
];
