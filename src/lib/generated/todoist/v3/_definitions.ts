// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Todoist API, mirroring the "Make an API call" module.\n\nThe base URL is `https://api.todoist.com`. Provide the remaining path, including the API version, in the URL parameter\n(e.g. `/api/v1/projects`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Todoist API reference](https://developer.todoist.com/api/v1/) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { todoist3: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.todoist.com`, including the API version. For example, `/api/v1/projects`.',
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
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'deleteProject',
		label: 'Delete a project',
		description: 'Deletes a project together with all of its sections and tasks.',
		context:
			'---\nname: deleteProject\ndescription: Deletes a project together with all of its sections and tasks.\n---\n\nDeletes the project and all of its sections and tasks. This cannot be undone. The endpoint returns an empty object on success.\n\nThe endpoint uses the REST route because the Sync `project_delete` command requires the project to be archived first.\n',
		accounts: { todoist3: { scope: ['data:read_write'] } },
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
				project_id: { type: 'string', description: 'The ID of the project to delete.' },
			},
			required: ['project_id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'exportTasksAsShareableUrl',
		label: 'Export tasks as shareable URL',
		description: 'Exports a project as a template and returns a shareable URL.',
		context:
			'---\nname: exportTasksAsShareableUrl\ndescription: Exports a project as a template and returns a shareable URL.\n---\n\nExports the tasks of a project as a template and returns the template file name and URL. The URL can be passed to `https://todoist.com/api/v1/import/project_from_url?t_url=` to import the template. Availability depends on the plan of the user.\n',
		accounts: { todoist3: { scope: ['data:read_write'] } },
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
				project_id: {
					type: 'string',
					description: 'The ID of the project to export as a template.',
				},
				use_relative_dates: {
					type: 'boolean',
					description:
						'Whether to export due dates as relative dates. The default is `true`.',
				},
			},
			required: ['project_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				file_name: {
					type: 'string',
					description: 'The name of the exported template file.',
				},
				file_url: { type: 'string', description: 'The URL of the exported template file.' },
			},
			required: [],
		},
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'getComment',
		label: 'Get a comment',
		description: 'Returns a single comment by its ID.',
		context:
			'---\nname: getComment\ndescription: Returns a single comment by its ID.\n---\n\nReturns a single task or project comment. Use `listComments` to find comment IDs.\n',
		accounts: { todoist3: { scope: ['data:read'] } },
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
				comment_id: { type: 'string', description: 'The ID of the comment to return.' },
			},
			required: ['comment_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the comment.' },
				posted_uid: {
					type: 'string',
					description: 'The ID of the user who posted the comment.',
				},
				item_id: {
					type: 'string',
					description:
						'The ID of the task the comment belongs to. Only returned for task comments.',
				},
				project_id: {
					type: 'string',
					description:
						'The ID of the project the comment belongs to. Only returned for project comments.',
				},
				content: {
					type: 'string',
					description:
						'The content of the comment. May contain markdown-formatted text and hyperlinks.',
				},
				file_attachment: {
					type: 'object',
					description: 'The file attached to the comment. `null` if there is none.',
					properties: {
						file_name: { type: 'string', description: 'The name of the file.' },
						file_size: {
							type: 'number',
							description: 'The size of the file in bytes.',
						},
						file_type: {
							type: 'string',
							description: 'The MIME type of the file, for example `image/png`.',
						},
						file_url: {
							type: 'string',
							description: 'The URL where the file is located.',
						},
						upload_state: {
							type: 'string',
							description:
								'The upload state of the file, for example `pending` or `completed`.',
						},
						resource_type: {
							type: 'string',
							description: 'The type of the attached resource, for example `file`.',
						},
						image: {
							type: 'string',
							description: 'The URL of the image preview, if the file is an image.',
						},
						image_width: {
							type: 'number',
							description: 'The width of the image in pixels.',
						},
						image_height: {
							type: 'number',
							description: 'The height of the image in pixels.',
						},
						tn_l: {
							description:
								'The large thumbnail as a list of the URL, width and height.',
						},
						tn_m: {
							description:
								'The medium thumbnail as a list of the URL, width and height.',
						},
						tn_s: {
							description:
								'The small thumbnail as a list of the URL, width and height.',
						},
						file_duration: {
							type: 'number',
							description: 'The duration of the audio file in seconds.',
						},
					},
					required: [],
				},
				uids_to_notify: {
					type: 'array',
					description: 'The IDs of the users to notify about the comment.',
					items: { type: 'string', description: 'The ID of a user to notify.' },
				},
				is_deleted: { type: 'boolean', description: 'Whether the comment is deleted.' },
				posted_at: {
					type: 'string',
					description: 'The date and time when the comment was posted.',
				},
				reactions: {
					type: 'object',
					description:
						'The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'getLabel',
		label: 'Get a label',
		description: 'Returns a personal label by its ID.',
		context:
			'---\nname: getLabel\ndescription: Returns a personal label by its ID.\n---\n\nReturns a personal label. Returns a `NOT_FOUND` error if the label does not exist or the ID is invalid. To list all labels, use `sync` with the `labels` resource type.\n',
		accounts: { todoist3: { scope: ['data:read'] } },
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
				label_id: {
					type: 'string',
					description: 'The ID of the personal label to return.',
				},
			},
			required: ['label_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the label.' },
				name: { type: 'string', description: 'The name of the label.' },
				color: {
					type: 'string',
					description: 'The color of the label icon, for example `berry_red`.',
				},
				order: {
					type: 'number',
					description: 'The position of the label in the label list.',
				},
				is_favorite: { type: 'boolean', description: 'Whether the label is a favorite.' },
			},
			required: [],
		},
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'getProject',
		label: 'Get a project',
		description: 'Returns a project by its ID.',
		context:
			'---\nname: getProject\ndescription: Returns a project by its ID.\n---\n\nReturns a single project. To list all projects, use `sync` with the `projects` resource type.\n',
		accounts: { todoist3: { scope: ['data:read'] } },
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
				project_id: { type: 'string', description: 'The ID of the project to return.' },
			},
			required: ['project_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the project.' },
				name: { type: 'string', description: 'The name of the project.' },
				description: {
					type: 'string',
					description:
						'The description of the project. Only used for workspace projects.',
				},
				workspace_id: {
					type: 'string',
					description:
						'The ID of the workspace the project belongs to. Only used for workspace projects.',
				},
				folder_id: {
					type: 'string',
					description: 'The ID of the folder the project is in.',
				},
				parent_id: {
					type: 'string',
					description: 'The ID of the parent project. `null` for root projects.',
				},
				color: {
					type: 'string',
					description: 'The color of the project icon, for example `berry_red`.',
				},
				child_order: {
					type: 'number',
					description:
						'The position of the project among the projects with the same parent.',
				},
				order_key: {
					type: 'string',
					description:
						'The fractional-indexing order key of the project. Always `null` for workspace projects.',
				},
				default_order: {
					type: 'number',
					description:
						'The position of the project in the default ordering of its workspace.',
				},
				default_order_key: {
					type: 'string',
					description:
						'The fractional-indexing key of the project in the default ordering of its workspace. Only used for workspace projects.',
				},
				view_style: {
					type: 'string',
					description:
						'The way tasks are rendered in the project: `list`, `board` or `calendar`.',
				},
				is_collapsed: {
					type: 'boolean',
					description: 'Whether the sub-projects of the project are collapsed.',
				},
				is_shared: { type: 'boolean', description: 'Whether the project is shared.' },
				is_archived: { type: 'boolean', description: 'Whether the project is archived.' },
				is_deleted: { type: 'boolean', description: 'Whether the project is deleted.' },
				is_favorite: { type: 'boolean', description: 'Whether the project is a favorite.' },
				is_frozen: {
					type: 'boolean',
					description:
						'Whether the project belongs to a canceled subscription and is frozen.',
				},
				can_assign_tasks: {
					type: 'boolean',
					description: 'Whether tasks in the project can be assigned to users.',
				},
				can_comment: {
					type: 'boolean',
					description: 'Whether the current user can comment in the project.',
				},
				inbox_project: {
					type: 'boolean',
					description:
						'Whether the project is the Inbox. Only sent for the Inbox project.',
				},
				creator_uid: {
					type: 'string',
					description: 'The ID of the user who created the project.',
				},
				role: {
					type: 'string',
					description:
						'The role of the current user in the project: `CREATOR`, `ADMIN`, `READ_WRITE`, `EDIT_ONLY` or `COMPLETE_ONLY`.',
				},
				public_access: {
					type: 'boolean',
					description: 'Whether the project is accessible publicly.',
				},
				public_key: {
					type: 'string',
					description: 'The public key of the project, used to access public projects.',
				},
				status: {
					type: 'string',
					description:
						'The status of the project: `PLANNED`, `IN_PROGRESS`, `PAUSED`, `COMPLETED` or `CANCELED`. Only used for workspace projects.',
				},
				is_invite_only: {
					type: 'boolean',
					description:
						'Whether the project is invite-only. Only used for workspace projects.',
				},
				is_link_sharing_enabled: {
					type: 'boolean',
					description:
						'Whether anyone with the link can join the project. Only used for workspace projects.',
				},
				collaborator_role_default: {
					type: 'string',
					description:
						'The default role of new collaborators. Only used for workspace projects.',
				},
				is_pending_default_collaborator_invites: {
					type: 'boolean',
					description:
						'Whether default collaborators are still being added to the project in the background. Only used for workspace projects.',
				},
				is_project_insights_enabled: {
					type: 'boolean',
					description:
						'Whether Project Insights is enabled for the project. Only used for workspace projects.',
				},
				access: {
					type: 'object',
					description:
						'The access configuration of the project. Only used for workspace projects.',
					properties: {
						visibility: {
							type: 'string',
							description:
								'The visibility of the project: `restricted`, `team` or `public`.',
						},
						configuration: {
							type: 'object',
							description: 'The configuration of the project access.',
							properties: {
								hide_collaborator_details: {
									type: 'boolean',
									description:
										'Whether collaborator details are hidden. Only for public projects.',
								},
								disable_duplication: {
									type: 'boolean',
									description:
										'Whether duplicating the project is disabled. Only for public projects.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				created_at: {
					type: 'string',
					description: 'The date and time when the project was created.',
				},
				updated_at: {
					type: 'string',
					description: 'The date and time when the project was last updated.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'getStats',
		label: 'Get stats',
		description: 'Returns the productivity statistics and Karma of the authenticated user.',
		context:
			'---\nname: getStats\ndescription: Returns the productivity statistics and Karma of the authenticated user.\n---\n\nReturns the productivity statistics shown in the Todoist Karma view: completion counts per day and per week with per-project breakdowns, the Karma score and history, goals and streaks.\n',
		accounts: { todoist3: { scope: ['data:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				days_items: {
					type: 'array',
					description: 'The completed tasks for each of the last 7 days.',
					items: {
						type: 'object',
						description: 'The completed tasks of one day.',
						properties: {
							date: { type: 'string', description: 'The date of the day.' },
							items: {
								type: 'array',
								description:
									'The number of tasks completed in each project on that day.',
								items: {
									type: 'object',
									description: 'The completed tasks of one project.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the project.',
										},
										completed: {
											type: 'number',
											description:
												'The number of tasks completed in the project.',
										},
									},
									required: [],
								},
							},
							total_completed: {
								type: 'number',
								description: 'The number of tasks completed on that day.',
							},
						},
						required: [],
					},
				},
				week_items: {
					type: 'array',
					description: 'The completed tasks for each of the last 4 weeks.',
					items: {
						type: 'object',
						description: 'The completed tasks of one week.',
						properties: {
							from: { type: 'string', description: 'The first day of the week.' },
							to: { type: 'string', description: 'The last day of the week.' },
							items: {
								type: 'array',
								description:
									'The number of tasks completed in each project in that week.',
								items: {
									type: 'object',
									description: 'The completed tasks of one project.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the project.',
										},
										completed: {
											type: 'number',
											description:
												'The number of tasks completed in the project.',
										},
									},
									required: [],
								},
							},
							total_completed: {
								type: 'number',
								description: 'The number of tasks completed in that week.',
							},
						},
						required: [],
					},
				},
				project_colors: {
					type: 'object',
					description:
						'The colors of the projects, used for visualization. Each key is a project ID and its value is the color name.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				completed_count: {
					type: 'number',
					description: 'The total number of tasks the user has completed.',
				},
				karma: { type: 'number', description: 'The Karma score of the user.' },
				karma_trend: {
					type: 'string',
					description: 'The trend of the Karma score, for example `up`.',
				},
				karma_graph_data: {
					type: 'array',
					description: 'The data points of the Karma graph.',
					items: {
						type: 'object',
						description: 'A data point of the Karma graph.',
						properties: {
							date: { type: 'string', description: 'The date of the data point.' },
							karma_avg: {
								type: 'number',
								description: 'The average Karma score on that date.',
							},
						},
						required: [],
					},
				},
				karma_last_update: {
					type: 'number',
					description: 'The change of the Karma score in the last update.',
				},
				karma_update_reasons: {
					type: 'array',
					description: 'The reasons for the latest Karma updates.',
					items: {
						type: 'object',
						description: 'A Karma update.',
						properties: {
							time: {
								type: 'string',
								description: 'The date and time of the update.',
							},
							new_karma: {
								type: 'number',
								description: 'The Karma score after the update.',
							},
							positive_karma: {
								type: 'number',
								description: 'The Karma points gained.',
							},
							positive_karma_reasons: {
								type: 'array',
								description: 'The codes of the reasons for gaining Karma.',
								items: {
									type: 'number',
									description: 'The code of a reason for gaining Karma.',
								},
							},
							negative_karma: {
								type: 'number',
								description: 'The Karma points lost.',
							},
							negative_karma_reasons: {
								type: 'array',
								description: 'The codes of the reasons for losing Karma.',
								items: {
									type: 'number',
									description: 'The code of a reason for losing Karma.',
								},
							},
						},
						required: [],
					},
				},
				goals: {
					type: 'object',
					description: 'The goal settings and streaks of the user.',
					properties: {
						user: { type: 'string', description: 'The ID of the user.' },
						user_id: { type: 'string', description: 'The ID of the user.' },
						daily_goal: {
							type: 'number',
							description: 'The number of tasks to complete each day.',
						},
						weekly_goal: {
							type: 'number',
							description: 'The number of tasks to complete each week.',
						},
						ignore_days: {
							type: 'array',
							description:
								'The days of the week excluded from the goals. 0 is Sunday and 6 is Saturday.',
							items: {
								type: 'number',
								description: 'A day of the week excluded from the goals.',
							},
						},
						vacation_mode: {
							type: 'number',
							description: 'Whether vacation mode is on: `1` if on, `0` if off.',
						},
						karma_disabled: {
							type: 'number',
							description:
								'Whether Karma is disabled: `1` if disabled, `0` if enabled.',
						},
						current_daily_streak: {
							type: 'object',
							description: 'The current daily streak of the user.',
							properties: {
								count: { type: 'number', description: 'The length of the streak.' },
								start: {
									type: 'string',
									description: 'The date when the streak started.',
								},
								end: {
									type: 'string',
									description: 'The date when the streak ended.',
								},
							},
							required: [],
						},
						current_weekly_streak: {
							type: 'object',
							description: 'The current weekly streak of the user.',
							properties: {
								count: { type: 'number', description: 'The length of the streak.' },
								start: {
									type: 'string',
									description: 'The date when the streak started.',
								},
								end: {
									type: 'string',
									description: 'The date when the streak ended.',
								},
							},
							required: [],
						},
						last_daily_streak: {
							type: 'object',
							description: 'The last daily streak of the user.',
							properties: {
								count: { type: 'number', description: 'The length of the streak.' },
								start: {
									type: 'string',
									description: 'The date when the streak started.',
								},
								end: {
									type: 'string',
									description: 'The date when the streak ended.',
								},
							},
							required: [],
						},
						last_weekly_streak: {
							type: 'object',
							description: 'The last weekly streak of the user.',
							properties: {
								count: { type: 'number', description: 'The length of the streak.' },
								start: {
									type: 'string',
									description: 'The date when the streak started.',
								},
								end: {
									type: 'string',
									description: 'The date when the streak ended.',
								},
							},
							required: [],
						},
						max_daily_streak: {
							type: 'object',
							description: 'The max daily streak of the user.',
							properties: {
								count: { type: 'number', description: 'The length of the streak.' },
								start: {
									type: 'string',
									description: 'The date when the streak started.',
								},
								end: {
									type: 'string',
									description: 'The date when the streak ended.',
								},
							},
							required: [],
						},
						max_weekly_streak: {
							type: 'object',
							description: 'The max weekly streak of the user.',
							properties: {
								count: { type: 'number', description: 'The length of the streak.' },
								start: {
									type: 'string',
									description: 'The date when the streak started.',
								},
								end: {
									type: 'string',
									description: 'The date when the streak ended.',
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
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'getTask',
		label: 'Get a task',
		description: 'Returns an active (not completed) task by its ID.',
		context:
			'---\nname: getTask\ndescription: Returns an active (not completed) task by its ID.\n---\n\nReturns a single active task. Completed tasks are not returned. To list tasks, use `sync` with the `items` resource type.\n',
		accounts: { todoist3: { scope: ['data:read'] } },
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
				task_id: { type: 'string', description: 'The ID of the task to return.' },
				public_key: {
					type: 'string',
					description:
						'The public key of a public project. Needed only to access a public project you are not a collaborator of.',
				},
			},
			required: ['task_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the task.' },
				user_id: { type: 'string', description: 'The ID of the owner of the task.' },
				project_id: { type: 'string', description: 'The ID of the parent project.' },
				section_id: {
					type: 'string',
					description:
						'The ID of the parent section. `null` for tasks that do not belong to a section.',
				},
				parent_id: {
					type: 'string',
					description: 'The ID of the parent task. `null` for root tasks.',
				},
				content: {
					type: 'string',
					description:
						'The text of the task. May contain markdown-formatted text and hyperlinks.',
				},
				description: {
					type: 'string',
					description:
						'The description of the task. May contain markdown-formatted text and hyperlinks.',
				},
				due: {
					type: 'object',
					description: 'The due date of the task. `null` if the task has no due date.',
					properties: {
						date: {
							type: 'string',
							description:
								'The due date, either a full-day date (`YYYY-MM-DD`), a floating date with time (`YYYY-MM-DDTHH:MM:SS`) or a date with time in UTC (`YYYY-MM-DDTHH:MM:SSZ`).',
						},
						timezone: {
							type: 'string',
							description:
								'The timezone name for due dates with a fixed timezone, for example `Asia/Jakarta`. `null` for full-day and floating due dates.',
						},
						is_recurring: {
							type: 'boolean',
							description: 'Whether the due date is recurring.',
						},
						string: {
							type: 'string',
							description:
								'The human-readable due date string, for example `tomorrow at 12`.',
						},
						lang: {
							type: 'string',
							description:
								'The language code of the due date string, for example `en`.',
						},
					},
					required: [],
				},
				deadline: {
					type: 'object',
					description: 'The deadline of the task. `null` if the task has no deadline.',
					properties: {
						date: {
							type: 'string',
							description: 'The deadline in the `YYYY-MM-DD` format.',
						},
						lang: {
							type: 'string',
							description:
								'The language code of the deadline. Only returned in the output.',
						},
					},
					required: [],
				},
				duration: {
					type: 'object',
					description: 'The duration of the task. `null` if the task has no duration.',
					properties: {
						amount: {
							type: 'number',
							description: 'The amount of time the task takes, a positive integer.',
						},
						unit: {
							type: 'string',
							description: 'The unit of the duration, `minute` or `day`.',
						},
					},
					required: [],
				},
				priority: {
					type: 'number',
					description:
						'The priority of the task, from `1` (normal) to `4` (very urgent). Todoist clients show `4` as p1.',
				},
				labels: {
					type: 'array',
					description:
						'The names of the labels of the task. They can be personal or shared labels.',
					items: { type: 'string', description: 'The name of a label.' },
				},
				child_order: {
					type: 'number',
					description: 'The position of the task among the tasks with the same parent.',
				},
				order_key: {
					type: 'string',
					description:
						'The fractional-indexing order key of the task. Tasks sort by comparing keys lexicographically among siblings.',
				},
				day_order: {
					type: 'number',
					description: 'The position of the task in the Today or Next 7 days view.',
				},
				is_collapsed: {
					type: 'boolean',
					description: 'Whether the sub-tasks of the task are collapsed.',
				},
				added_by_uid: {
					type: 'string',
					description:
						'The ID of the user who created the task. Relevant for shared projects only.',
				},
				assigned_by_uid: {
					type: 'string',
					description:
						'The ID of the user who assigned the task. Relevant for shared projects only.',
				},
				responsible_uid: {
					type: 'string',
					description:
						'The ID of the user responsible for the task. Relevant for shared projects only.',
				},
				checked: { type: 'boolean', description: 'Whether the task is completed.' },
				is_deleted: { type: 'boolean', description: 'Whether the task is deleted.' },
				added_at: {
					type: 'string',
					description: 'The date and time when the task was created.',
				},
				updated_at: {
					type: 'string',
					description: 'The date and time when the task was last updated.',
				},
				completed_at: {
					type: 'string',
					description:
						'The date and time when the task was completed. `null` if the task is not completed.',
				},
				completed_by_uid: {
					type: 'string',
					description: 'The ID of the user who completed the task.',
				},
				note_count: { type: 'number', description: 'The number of comments on the task.' },
				completed_count: {
					type: 'number',
					description:
						'How many times the task has been completed. Relevant for recurring tasks.',
				},
				postponed_count: {
					type: 'number',
					description: 'How many times the task has been postponed.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'importTasksFromTemplate',
		label: 'Import tasks from template',
		description: 'Imports a saved template into an existing project.',
		context:
			'---\nname: importTasksFromTemplate\ndescription: Imports a saved template into an existing project.\n---\n\nImports a saved Todoist template into an existing project and returns the created projects, sections, tasks, comments and reminders. The target project must exist and must not be frozen. Availability of templates depends on the plan of the user.\n\nThis replaces importing from a CSV file, which is not available in endpoints because it requires a binary upload. `template_id` is the ID of a saved template.\n',
		accounts: { todoist3: { scope: ['data:read_write'] } },
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
				project_id: {
					type: 'string',
					description:
						'The ID of the existing project to import the template into. The project must not be frozen.',
				},
				template_id: {
					type: 'string',
					description: 'The ID of the saved template to import.',
				},
				locale: {
					type: 'string',
					description:
						'The locale used for localized template content, for example `en`. Defaults to `en`.',
				},
			},
			required: ['project_id', 'template_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				status: {
					type: 'string',
					description: 'The status of the import, `ok` on success.',
				},
				template_type: {
					type: 'string',
					description: 'The type of the imported template, for example `project`.',
				},
				projects: {
					type: 'array',
					description: 'The projects affected by the import.',
					items: {
						type: 'object',
						description: 'A project.',
						properties: {
							id: { type: 'string', description: 'The ID of the project.' },
							name: { type: 'string', description: 'The name of the project.' },
							description: {
								type: 'string',
								description:
									'The description of the project. Only used for workspace projects.',
							},
							workspace_id: {
								type: 'string',
								description:
									'The ID of the workspace the project belongs to. Only used for workspace projects.',
							},
							folder_id: {
								type: 'string',
								description: 'The ID of the folder the project is in.',
							},
							parent_id: {
								type: 'string',
								description:
									'The ID of the parent project. `null` for root projects.',
							},
							color: {
								type: 'string',
								description:
									'The color of the project icon, for example `berry_red`.',
							},
							child_order: {
								type: 'number',
								description:
									'The position of the project among the projects with the same parent.',
							},
							order_key: {
								type: 'string',
								description:
									'The fractional-indexing order key of the project. Always `null` for workspace projects.',
							},
							default_order: {
								type: 'number',
								description:
									'The position of the project in the default ordering of its workspace.',
							},
							default_order_key: {
								type: 'string',
								description:
									'The fractional-indexing key of the project in the default ordering of its workspace. Only used for workspace projects.',
							},
							view_style: {
								type: 'string',
								description:
									'The way tasks are rendered in the project: `list`, `board` or `calendar`.',
							},
							is_collapsed: {
								type: 'boolean',
								description:
									'Whether the sub-projects of the project are collapsed.',
							},
							is_shared: {
								type: 'boolean',
								description: 'Whether the project is shared.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the project is archived.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the project is deleted.',
							},
							is_favorite: {
								type: 'boolean',
								description: 'Whether the project is a favorite.',
							},
							is_frozen: {
								type: 'boolean',
								description:
									'Whether the project belongs to a canceled subscription and is frozen.',
							},
							can_assign_tasks: {
								type: 'boolean',
								description:
									'Whether tasks in the project can be assigned to users.',
							},
							can_comment: {
								type: 'boolean',
								description: 'Whether the current user can comment in the project.',
							},
							inbox_project: {
								type: 'boolean',
								description:
									'Whether the project is the Inbox. Only sent for the Inbox project.',
							},
							creator_uid: {
								type: 'string',
								description: 'The ID of the user who created the project.',
							},
							role: {
								type: 'string',
								description:
									'The role of the current user in the project: `CREATOR`, `ADMIN`, `READ_WRITE`, `EDIT_ONLY` or `COMPLETE_ONLY`.',
							},
							public_access: {
								type: 'boolean',
								description: 'Whether the project is accessible publicly.',
							},
							public_key: {
								type: 'string',
								description:
									'The public key of the project, used to access public projects.',
							},
							status: {
								type: 'string',
								description:
									'The status of the project: `PLANNED`, `IN_PROGRESS`, `PAUSED`, `COMPLETED` or `CANCELED`. Only used for workspace projects.',
							},
							is_invite_only: {
								type: 'boolean',
								description:
									'Whether the project is invite-only. Only used for workspace projects.',
							},
							is_link_sharing_enabled: {
								type: 'boolean',
								description:
									'Whether anyone with the link can join the project. Only used for workspace projects.',
							},
							collaborator_role_default: {
								type: 'string',
								description:
									'The default role of new collaborators. Only used for workspace projects.',
							},
							is_pending_default_collaborator_invites: {
								type: 'boolean',
								description:
									'Whether default collaborators are still being added to the project in the background. Only used for workspace projects.',
							},
							is_project_insights_enabled: {
								type: 'boolean',
								description:
									'Whether Project Insights is enabled for the project. Only used for workspace projects.',
							},
							access: {
								type: 'object',
								description:
									'The access configuration of the project. Only used for workspace projects.',
								properties: {
									visibility: {
										type: 'string',
										description:
											'The visibility of the project: `restricted`, `team` or `public`.',
									},
									configuration: {
										type: 'object',
										description: 'The configuration of the project access.',
										properties: {
											hide_collaborator_details: {
												type: 'boolean',
												description:
													'Whether collaborator details are hidden. Only for public projects.',
											},
											disable_duplication: {
												type: 'boolean',
												description:
													'Whether duplicating the project is disabled. Only for public projects.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							created_at: {
								type: 'string',
								description: 'The date and time when the project was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the project was last updated.',
							},
						},
						required: [],
					},
				},
				sections: {
					type: 'array',
					description: 'The sections created by the import.',
					items: {
						type: 'object',
						description: 'A section.',
						properties: {
							id: { type: 'string', description: 'The ID of the section.' },
							user_id: {
								type: 'string',
								description: 'The ID of the owner of the section.',
							},
							project_id: {
								type: 'string',
								description: 'The ID of the project the section belongs to.',
							},
							name: { type: 'string', description: 'The name of the section.' },
							description: {
								type: 'string',
								description: 'The description of the section.',
							},
							section_order: {
								type: 'number',
								description:
									'The position of the section among the sections of the project.',
							},
							order_key: {
								type: 'string',
								description: 'The fractional-indexing order key of the section.',
							},
							is_collapsed: {
								type: 'boolean',
								description: 'Whether the section is collapsed.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the section is archived.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the section is deleted.',
							},
							added_at: {
								type: 'string',
								description: 'The date and time when the section was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the section was last updated.',
							},
							archived_at: {
								type: 'string',
								description: 'The date and time when the section was archived.',
							},
						},
						required: [],
					},
				},
				tasks: {
					type: 'array',
					description: 'The tasks created by the import.',
					items: {
						type: 'object',
						description: 'A task.',
						properties: {
							id: { type: 'string', description: 'The ID of the task.' },
							user_id: {
								type: 'string',
								description: 'The ID of the owner of the task.',
							},
							project_id: {
								type: 'string',
								description: 'The ID of the parent project.',
							},
							section_id: {
								type: 'string',
								description:
									'The ID of the parent section. `null` for tasks that do not belong to a section.',
							},
							parent_id: {
								type: 'string',
								description: 'The ID of the parent task. `null` for root tasks.',
							},
							content: {
								type: 'string',
								description:
									'The text of the task. May contain markdown-formatted text and hyperlinks.',
							},
							description: {
								type: 'string',
								description:
									'The description of the task. May contain markdown-formatted text and hyperlinks.',
							},
							due: {
								type: 'object',
								description:
									'The due date of the task. `null` if the task has no due date.',
								properties: {
									date: {
										type: 'string',
										description:
											'The due date, either a full-day date (`YYYY-MM-DD`), a floating date with time (`YYYY-MM-DDTHH:MM:SS`) or a date with time in UTC (`YYYY-MM-DDTHH:MM:SSZ`).',
									},
									timezone: {
										type: 'string',
										description:
											'The timezone name for due dates with a fixed timezone, for example `Asia/Jakarta`. `null` for full-day and floating due dates.',
									},
									is_recurring: {
										type: 'boolean',
										description: 'Whether the due date is recurring.',
									},
									string: {
										type: 'string',
										description:
											'The human-readable due date string, for example `tomorrow at 12`.',
									},
									lang: {
										type: 'string',
										description:
											'The language code of the due date string, for example `en`.',
									},
								},
								required: [],
							},
							deadline: {
								type: 'object',
								description:
									'The deadline of the task. `null` if the task has no deadline.',
								properties: {
									date: {
										type: 'string',
										description: 'The deadline in the `YYYY-MM-DD` format.',
									},
									lang: {
										type: 'string',
										description:
											'The language code of the deadline. Only returned in the output.',
									},
								},
								required: [],
							},
							duration: {
								type: 'object',
								description:
									'The duration of the task. `null` if the task has no duration.',
								properties: {
									amount: {
										type: 'number',
										description:
											'The amount of time the task takes, a positive integer.',
									},
									unit: {
										type: 'string',
										description: 'The unit of the duration, `minute` or `day`.',
									},
								},
								required: [],
							},
							priority: {
								type: 'number',
								description:
									'The priority of the task, from `1` (normal) to `4` (very urgent). Todoist clients show `4` as p1.',
							},
							labels: {
								type: 'array',
								description:
									'The names of the labels of the task. They can be personal or shared labels.',
								items: { type: 'string', description: 'The name of a label.' },
							},
							child_order: {
								type: 'number',
								description:
									'The position of the task among the tasks with the same parent.',
							},
							order_key: {
								type: 'string',
								description:
									'The fractional-indexing order key of the task. Tasks sort by comparing keys lexicographically among siblings.',
							},
							day_order: {
								type: 'number',
								description:
									'The position of the task in the Today or Next 7 days view.',
							},
							is_collapsed: {
								type: 'boolean',
								description: 'Whether the sub-tasks of the task are collapsed.',
							},
							added_by_uid: {
								type: 'string',
								description:
									'The ID of the user who created the task. Relevant for shared projects only.',
							},
							assigned_by_uid: {
								type: 'string',
								description:
									'The ID of the user who assigned the task. Relevant for shared projects only.',
							},
							responsible_uid: {
								type: 'string',
								description:
									'The ID of the user responsible for the task. Relevant for shared projects only.',
							},
							checked: {
								type: 'boolean',
								description: 'Whether the task is completed.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the task is deleted.',
							},
							added_at: {
								type: 'string',
								description: 'The date and time when the task was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the task was last updated.',
							},
							completed_at: {
								type: 'string',
								description:
									'The date and time when the task was completed. `null` if the task is not completed.',
							},
							completed_by_uid: {
								type: 'string',
								description: 'The ID of the user who completed the task.',
							},
							note_count: {
								type: 'number',
								description: 'The number of comments on the task.',
							},
							completed_count: {
								type: 'number',
								description:
									'How many times the task has been completed. Relevant for recurring tasks.',
							},
							postponed_count: {
								type: 'number',
								description: 'How many times the task has been postponed.',
							},
						},
						required: [],
					},
				},
				comments: {
					type: 'array',
					description: 'The task comments created by the import.',
					items: {
						type: 'object',
						description: 'A task comment.',
						properties: {
							id: { type: 'string', description: 'The ID of the comment.' },
							posted_uid: {
								type: 'string',
								description: 'The ID of the user who posted the comment.',
							},
							item_id: {
								type: 'string',
								description: 'The ID of the task the comment belongs to.',
							},
							content: {
								type: 'string',
								description:
									'The content of the comment. May contain markdown-formatted text and hyperlinks.',
							},
							file_attachment: {
								type: 'object',
								description:
									'The file attached to the comment. `null` if there is none.',
								properties: {
									file_name: {
										type: 'string',
										description: 'The name of the file.',
									},
									file_size: {
										type: 'number',
										description: 'The size of the file in bytes.',
									},
									file_type: {
										type: 'string',
										description:
											'The MIME type of the file, for example `image/png`.',
									},
									file_url: {
										type: 'string',
										description: 'The URL where the file is located.',
									},
									upload_state: {
										type: 'string',
										description:
											'The upload state of the file, for example `pending` or `completed`.',
									},
									resource_type: {
										type: 'string',
										description:
											'The type of the attached resource, for example `file`.',
									},
									image: {
										type: 'string',
										description:
											'The URL of the image preview, if the file is an image.',
									},
									image_width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									image_height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									tn_l: {
										description:
											'The large thumbnail as a list of the URL, width and height.',
									},
									tn_m: {
										description:
											'The medium thumbnail as a list of the URL, width and height.',
									},
									tn_s: {
										description:
											'The small thumbnail as a list of the URL, width and height.',
									},
									file_duration: {
										type: 'number',
										description: 'The duration of the audio file in seconds.',
									},
								},
								required: [],
							},
							uids_to_notify: {
								type: 'array',
								description: 'The IDs of the users to notify about the comment.',
								items: {
									type: 'string',
									description: 'The ID of a user to notify.',
								},
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the comment is deleted.',
							},
							posted_at: {
								type: 'string',
								description: 'The date and time when the comment was posted.',
							},
							reactions: {
								type: 'object',
								description:
									'The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				project_notes: {
					type: 'array',
					description: 'The project comments created by the import.',
					items: {
						type: 'object',
						description: 'A project comment.',
						properties: {
							id: { type: 'string', description: 'The ID of the comment.' },
							posted_uid: {
								type: 'string',
								description: 'The ID of the user who posted the comment.',
							},
							project_id: {
								type: 'string',
								description: 'The ID of the project the comment belongs to.',
							},
							content: {
								type: 'string',
								description:
									'The content of the comment. May contain markdown-formatted text and hyperlinks.',
							},
							file_attachment: {
								type: 'object',
								description:
									'The file attached to the comment. `null` if there is none.',
								properties: {
									file_name: {
										type: 'string',
										description: 'The name of the file.',
									},
									file_size: {
										type: 'number',
										description: 'The size of the file in bytes.',
									},
									file_type: {
										type: 'string',
										description:
											'The MIME type of the file, for example `image/png`.',
									},
									file_url: {
										type: 'string',
										description: 'The URL where the file is located.',
									},
									upload_state: {
										type: 'string',
										description:
											'The upload state of the file, for example `pending` or `completed`.',
									},
									resource_type: {
										type: 'string',
										description:
											'The type of the attached resource, for example `file`.',
									},
									image: {
										type: 'string',
										description:
											'The URL of the image preview, if the file is an image.',
									},
									image_width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									image_height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									tn_l: {
										description:
											'The large thumbnail as a list of the URL, width and height.',
									},
									tn_m: {
										description:
											'The medium thumbnail as a list of the URL, width and height.',
									},
									tn_s: {
										description:
											'The small thumbnail as a list of the URL, width and height.',
									},
									file_duration: {
										type: 'number',
										description: 'The duration of the audio file in seconds.',
									},
								},
								required: [],
							},
							uids_to_notify: {
								type: 'array',
								description: 'The IDs of the users to notify about the comment.',
								items: {
									type: 'string',
									description: 'The ID of a user to notify.',
								},
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the comment is deleted.',
							},
							posted_at: {
								type: 'string',
								description: 'The date and time when the comment was posted.',
							},
							reactions: {
								type: 'object',
								description:
									'The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				reminders: {
					type: 'array',
					description: 'The reminders created by the import.',
					items: {
						type: 'object',
						description: 'A reminder.',
						properties: {
							id: { type: 'string', description: 'The ID of the reminder.' },
							item_id: {
								type: 'string',
								description: 'The ID of the task the reminder belongs to.',
							},
							notify_uid: {
								type: 'string',
								description: 'The ID of the user to notify.',
							},
							type: {
								type: 'string',
								description: 'The type of the reminder, for example `relative`.',
							},
							minute_offset: {
								type: 'number',
								description:
									'The number of minutes before the due date when the reminder fires. Used by relative reminders.',
							},
							is_urgent: {
								type: 'boolean',
								description: 'Whether the reminder is urgent.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the reminder is deleted.',
							},
							due: {
								type: 'object',
								description: 'The due date of the reminder.',
								properties: {
									date: {
										type: 'string',
										description:
											'The due date, either a full-day date (`YYYY-MM-DD`), a floating date with time (`YYYY-MM-DDTHH:MM:SS`) or a date with time in UTC (`YYYY-MM-DDTHH:MM:SSZ`).',
									},
									timezone: {
										type: 'string',
										description:
											'The timezone name for due dates with a fixed timezone, for example `Asia/Jakarta`. `null` for full-day and floating due dates.',
									},
									is_recurring: {
										type: 'boolean',
										description: 'Whether the due date is recurring.',
									},
									string: {
										type: 'string',
										description:
											'The human-readable due date string, for example `tomorrow at 12`.',
									},
									lang: {
										type: 'string',
										description:
											'The language code of the due date string, for example `en`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				project_view_options_defaults: {
					type: 'array',
					description: 'The default view options of the imported projects.',
					items: {
						type: 'object',
						description: 'The default view options of one project.',
						properties: {
							project_id: { type: 'string', description: 'The ID of the project.' },
							view_mode: {
								type: 'string',
								description: 'The view mode of the project, for example `LIST`.',
							},
							calendar_settings: {
								type: 'object',
								description: 'The calendar view settings of the project.',
								properties: {
									layout: {
										type: 'string',
										description: 'The calendar layout, for example `WEEK`.',
									},
									visible_day_count: {
										type: 'number',
										description: 'The number of days shown in the calendar.',
									},
									color: {
										type: 'string',
										description:
											'What the calendar colors are based on, for example `PRIORITY`.',
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
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'listComments',
		label: 'List comments',
		description: 'Returns the comments of a task or a project.',
		context:
			'---\nname: listComments\ndescription: Returns the comments of a task or a project.\n---\n\nReturns one page of comments for either a task (`task_id`) or a project (`project_id`). Exactly one of the two must be provided; providing neither or both returns an error.\n\nThe endpoint is paginated. To get the next page, pass the returned `next_cursor` as `cursor`. When `next_cursor` is `null`, there are no more results.\n',
		accounts: { todoist3: { scope: ['data:read'] } },
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
				project_id: {
					type: 'string',
					description:
						'The ID of the project to get comments for. Provide exactly one of project ID or task ID.',
				},
				task_id: {
					type: 'string',
					description:
						'The ID of the task to get comments for. Provide exactly one of project ID or task ID.',
				},
				public_key: {
					type: 'string',
					description:
						'The public key of a public project. Needed only to access a public project you are not a collaborator of.',
				},
				cursor: {
					type: 'string',
					description:
						'The cursor returned as `next_cursor` by the previous request. Use it to get the next page of results.',
				},
				limit: {
					type: 'number',
					description: 'The number of results to return in a page. The maximum is 200.',
					minimum: 1,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The returned comments.',
					items: {
						type: 'object',
						description: 'A comment.',
						properties: {
							id: { type: 'string', description: 'The ID of the comment.' },
							posted_uid: {
								type: 'string',
								description: 'The ID of the user who posted the comment.',
							},
							item_id: {
								type: 'string',
								description:
									'The ID of the task the comment belongs to. Only returned for task comments.',
							},
							project_id: {
								type: 'string',
								description:
									'The ID of the project the comment belongs to. Only returned for project comments.',
							},
							content: {
								type: 'string',
								description:
									'The content of the comment. May contain markdown-formatted text and hyperlinks.',
							},
							file_attachment: {
								type: 'object',
								description:
									'The file attached to the comment. `null` if there is none.',
								properties: {
									file_name: {
										type: 'string',
										description: 'The name of the file.',
									},
									file_size: {
										type: 'number',
										description: 'The size of the file in bytes.',
									},
									file_type: {
										type: 'string',
										description:
											'The MIME type of the file, for example `image/png`.',
									},
									file_url: {
										type: 'string',
										description: 'The URL where the file is located.',
									},
									upload_state: {
										type: 'string',
										description:
											'The upload state of the file, for example `pending` or `completed`.',
									},
									resource_type: {
										type: 'string',
										description:
											'The type of the attached resource, for example `file`.',
									},
									image: {
										type: 'string',
										description:
											'The URL of the image preview, if the file is an image.',
									},
									image_width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									image_height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									tn_l: {
										description:
											'The large thumbnail as a list of the URL, width and height.',
									},
									tn_m: {
										description:
											'The medium thumbnail as a list of the URL, width and height.',
									},
									tn_s: {
										description:
											'The small thumbnail as a list of the URL, width and height.',
									},
									file_duration: {
										type: 'number',
										description: 'The duration of the audio file in seconds.',
									},
								},
								required: [],
							},
							uids_to_notify: {
								type: 'array',
								description: 'The IDs of the users to notify about the comment.',
								items: {
									type: 'string',
									description: 'The ID of a user to notify.',
								},
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the comment is deleted.',
							},
							posted_at: {
								type: 'string',
								description: 'The date and time when the comment was posted.',
							},
							reactions: {
								type: 'object',
								description:
									'The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.',
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
						'The cursor to pass in the next request to get the next page of results. `null` if there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'todoist',
		appVersion: 3,
		endpointName: 'sync',
		label: 'Sync',
		description:
			'Reads resources, writes changes with commands, or does both in a single request.',
		context:
			'---\nname: sync\ndescription: Reads resources, writes changes with commands, or does both in a single request.\n---\n\nWraps the Todoist Sync API (`POST /sync`). It is the only way to work with filters and the way to write most resources in a single batched request. One call can read resources, run commands, or both.\n\n**Reading.** Set `sync_token` to `*` and `resource_types` to the resources you need (for example `projects`, `items`, `labels`, `filters`). Pass the returned `sync_token` in the next request to get only the changes since then. Excluding types with a `-` prefix, as in `-projects`, is not available here.\n\n**Writing.** Provide `commands`. Each command needs a `type`, a unique `uuid` and `args` for that type, and creating commands can set a `temp_id`. If any command fails, the endpoint returns an error instead of a response: the message contains the HTTP code of the command, the error and any extra explanation, for example `[403] Insufficient Token scope`. In a successful response, `sync_status` maps each command `uuid` to `ok`. When several commands run in one request, the others may already have been applied, so inspect the data before retrying. Common commands: `item_add`, `item_update`, `item_move`, `item_complete`, `item_close`, `item_uncomplete`, `item_update_date_complete`, `item_delete`, `project_add`, `project_update`, `project_archive`, `section_add`, `section_update`, `label_add`, `label_update`, `label_delete`, `filter_add`, `filter_update`, `filter_delete`, `note_add`, `note_update`, `note_delete`.\n\nDeleting commands (`*_delete`) cannot be undone and need a connection with the `data:delete` scope; without it the command fails with `[403] Insufficient Token scope`. The extra fields of `live_notifications` depend on the `notification_type`. The keys of `sync_status`, `temp_id_mapping` and `day_orders` are dynamic, so they are not described. See the [Todoist API reference](https://developer.todoist.com/api/v1/).\n',
		accounts: { todoist3: { scope: ['data:read_write', 'data:delete'] } },
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
				sync_token: {
					type: 'string',
					description:
						'Required to read resources. Use `*` to get all active resource data, or the `sync_token` returned by a previous request to get only the changes since then.',
				},
				resource_types: {
					type: 'string',
					description:
						'Required to read resources. The types of resources to return. Use `all` to return every type.',
					default: '',
					enum: [
						'',
						'all',
						'labels',
						'projects',
						'items',
						'notes',
						'sections',
						'filters',
						'reminders',
						'reminders_location',
						'locations',
						'user',
						'live_notifications',
						'collaborators',
						'user_settings',
						'notification_settings',
						'user_plan_limits',
						'completed_info',
						'stats',
						'workspaces',
						'workspace_users',
						'workspace_filters',
						'view_options',
						'project_view_options_defaults',
						'role_actions',
						'user_item_orders',
					],
				},
				commands: {
					type: 'array',
					description:
						'Required to write changes. The commands to run, processed in the given order. Each command creates, changes or deletes one resource.',
					items: {
						type: 'object',
						description: 'A command to run.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the command, for example `item_add` creates a task and `project_update` updates a project.',
								enum: [
									'filter_add',
									'filter_delete',
									'filter_update',
									'filter_update_orders',
									'folder_add',
									'folder_update',
									'item_add',
									'item_close',
									'item_complete',
									'item_delete',
									'item_move',
									'item_reorder',
									'item_uncomplete',
									'item_update',
									'item_update_date_complete',
									'item_update_day_orders',
									'label_add',
									'label_delete',
									'label_delete_occurrences',
									'label_rename',
									'label_update',
									'label_update_orders',
									'live_notifications_mark_read',
									'live_notifications_mark_read_all',
									'live_notifications_mark_unread',
									'live_notifications_set_last_read',
									'note_add',
									'note_delete',
									'note_update',
									'project_add',
									'project_archive',
									'project_change_role',
									'project_delete',
									'project_leave',
									'project_move',
									'project_move_to_personal',
									'project_move_to_workspace',
									'project_reorder',
									'project_unarchive',
									'project_update',
									'project_view_options_defaults_set',
									'reminder_add',
									'reminder_delete',
									'reminder_update',
									'section_add',
									'section_archive',
									'section_delete',
									'section_move',
									'section_reorder',
									'section_unarchive',
									'section_update',
									'share_project',
									'accept_invitation',
									'reject_invitation',
									'delete_invitation',
									'delete_collaborator',
									'clear_locations',
									'update_goals',
									'user_item_order_update',
									'user_settings_update',
									'user_update',
									'view_options_delete',
									'view_options_set',
									'workspace_add',
									'workspace_delete',
									'workspace_delete_user',
									'workspace_filter_add',
									'workspace_filter_delete',
									'workspace_filter_update',
									'workspace_filter_update_orders',
									'workspace_invite',
									'workspace_leave',
									'workspace_resend_invite',
									'workspace_set_default_project_ordering',
									'workspace_update',
									'workspace_update_user',
									'workspace_update_user_sidebar_preference',
								],
							},
							uuid: {
								type: 'string',
								description:
									'A unique ID of the command, for example a UUID v4. The result of the command is returned under this ID in `sync_status`. A command with the same UUID as an already executed command is not executed again.',
							},
							temp_id: {
								type: 'string',
								description:
									'A temporary ID for the resource created by the command, used only for commands that create resources such as `item_add`. Later commands in the same request can use it instead of the real ID, and `temp_id_mapping` maps it to the real ID.',
							},
							args: {
								description:
									'The arguments of the command as a JSON object. They depend on the command type, see the [Todoist Sync API reference](https://developer.todoist.com/api/v1/).',
							},
						},
						required: ['type', 'uuid'],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sync_token: {
					type: 'string',
					description:
						'The token to pass in the next request to get only the changes since this request.',
				},
				full_sync: {
					type: 'boolean',
					description:
						'Whether the response contains all data (full sync) or only the changes since the previous sync.',
				},
				full_sync_date_utc: {
					type: 'string',
					description:
						'For full syncs, the time when the data was generated. For big accounts, the data may be returned with a delay.',
				},
				sync_status: {
					type: 'object',
					description:
						'The result of each command. Each key is the UUID of a command and its value is `ok`. If a command fails, the endpoint returns an error instead of a response.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				temp_id_mapping: {
					type: 'object',
					description: 'Maps the temporary IDs of created resources to their real IDs.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				user: {
					type: 'object',
					description: 'The current user.',
					properties: {
						id: { type: 'string', description: 'The ID of the user.' },
						email: { type: 'string', description: 'The email of the user.' },
						full_name: { type: 'string', description: 'The full name of the user.' },
						token: { type: 'string', description: 'The API token of the user.' },
						lang: {
							type: 'string',
							description: 'The language of the user, for example `en`.',
						},
						dateist_lang: {
							type: 'string',
							description:
								'The language used for date recognition instead of the user language. `null` if the user language is used.',
						},
						joined_at: {
							type: 'string',
							description: 'The date when the user joined Todoist.',
						},
						inbox_project_id: {
							type: 'string',
							description: 'The ID of the Inbox project.',
						},
						business_account_id: {
							type: 'string',
							description: 'The ID of the business account of the user.',
						},
						image_id: {
							type: 'string',
							description: 'The ID of the avatar of the user.',
						},
						avatar_big: {
							type: 'string',
							description: 'The URL of the 195x195 avatar.',
						},
						avatar_medium: {
							type: 'string',
							description: 'The URL of the 60x60 avatar.',
						},
						avatar_s640: {
							type: 'string',
							description: 'The URL of the 640x640 avatar.',
						},
						avatar_small: {
							type: 'string',
							description: 'The URL of the 35x35 avatar.',
						},
						is_premium: {
							type: 'boolean',
							description: 'Whether the user has a Todoist Pro subscription.',
						},
						premium_status: {
							type: 'string',
							description:
								'Why the user is premium: `not_premium`, `current_personal_plan`, `legacy_personal_plan` or `teams_business_member`.',
						},
						premium_until: {
							type: 'string',
							description:
								'The date when the Todoist Pro subscription ends. `null` if the user is not a Pro user.',
						},
						has_password: {
							type: 'boolean',
							description: 'Whether the user has a password set.',
						},
						mfa_enabled: {
							type: 'boolean',
							description: 'Whether multi-factor authentication is enabled.',
						},
						verification_status: {
							type: 'string',
							description:
								'Whether the email of the user is verified: `unverified`, `verified`, `blocked` or `legacy`.',
						},
						activated_user: {
							type: 'boolean',
							description: 'Whether the user is activated.',
						},
						is_celebrations_enabled: {
							type: 'boolean',
							description: 'Whether celebrations are enabled.',
						},
						karma: { type: 'number', description: 'The Karma score of the user.' },
						karma_trend: {
							type: 'string',
							description: 'The trend of the Karma score, for example `up`.',
						},
						daily_goal: {
							type: 'number',
							description: 'The daily goal of completed tasks for Karma.',
						},
						weekly_goal: {
							type: 'number',
							description: 'The weekly goal of completed tasks for Karma.',
						},
						days_off: {
							type: 'array',
							description:
								'The days off of the user, from `1` (Monday) to `7` (Sunday).',
							items: { type: 'number', description: 'A day off.' },
						},
						auto_reminder: {
							type: 'number',
							description:
								'The default time in minutes of the automatic reminders set when a due date is specified.',
						},
						date_format: {
							type: 'number',
							description: 'The date format: `0` for DD-MM-YYYY, `1` for MM-DD-YYYY.',
						},
						time_format: {
							type: 'number',
							description: 'The time format: `0` for 24 hours, `1` for 12 hours.',
						},
						start_day: {
							type: 'number',
							description:
								'The first day of the week, from `1` (Monday) to `7` (Sunday).',
						},
						next_week: {
							type: 'number',
							description:
								'The day tasks are postponed to when scheduled for next week, from `1` (Monday) to `7` (Sunday).',
						},
						weekend_start_day: {
							type: 'number',
							description:
								'The day tasks are scheduled for when scheduled for the weekend, from `1` (Monday) to `7` (Sunday).',
						},
						sort_order: {
							type: 'number',
							description:
								'How projects are sorted: `0` for oldest dates first, `1` for oldest dates last.',
						},
						start_page: {
							type: 'string',
							description:
								'The default view of the user, for example `inbox`, `today` or `project?id=1234`.',
						},
						theme_id: {
							type: 'string',
							description: 'The selected theme, a number from `0` to `10`.',
						},
						share_limit: {
							type: 'number',
							description:
								'The maximum number of collaborators the user can share projects with.',
						},
						feature_identifier: {
							type: 'string',
							description:
								'An opaque ID used internally to handle features of the user.',
						},
						features: {
							type: 'object',
							description: 'The special features of the user, used internally.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						joinable_workspace: {
							type: 'object',
							description:
								'The workspace the user can join by domain. `null` if there is none.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						urgent_reminder_device: {
							type: 'object',
							description:
								'The device that receives urgent reminder alarms. `null` if none is configured.',
							properties: {
								device_platform: {
									type: 'string',
									description: 'The platform of the device: `ios` or `android`.',
								},
								device_id: { type: 'string', description: 'The ID of the device.' },
								device_token: {
									type: 'string',
									description: 'The push notification token of the device.',
								},
								device_name: {
									type: 'string',
									description: 'The name of the device.',
								},
							},
							required: [],
						},
						tz_info: {
							type: 'object',
							description: 'The timezone of the user.',
							properties: {
								timezone: {
									type: 'string',
									description:
										'The name of the timezone, for example `Europe/Prague`.',
								},
								gmt_string: {
									type: 'string',
									description:
										'The difference from GMT as text, for example `+02:00`.',
								},
								hours: {
									type: 'number',
									description: 'The hours of the difference from GMT.',
								},
								minutes: {
									type: 'number',
									description: 'The minutes of the difference from GMT.',
								},
								is_dst: {
									type: 'number',
									description:
										'Whether daylight saving time applies: `1` if yes, `0` if no.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				projects: {
					type: 'array',
					description: 'The projects.',
					items: {
						type: 'object',
						description: 'A project.',
						properties: {
							id: { type: 'string', description: 'The ID of the project.' },
							name: { type: 'string', description: 'The name of the project.' },
							description: {
								type: 'string',
								description:
									'The description of the project. Only used for workspace projects.',
							},
							workspace_id: {
								type: 'string',
								description:
									'The ID of the workspace the project belongs to. Only used for workspace projects.',
							},
							folder_id: {
								type: 'string',
								description: 'The ID of the folder the project is in.',
							},
							parent_id: {
								type: 'string',
								description:
									'The ID of the parent project. `null` for root projects.',
							},
							color: {
								type: 'string',
								description:
									'The color of the project icon, for example `berry_red`.',
							},
							child_order: {
								type: 'number',
								description:
									'The position of the project among the projects with the same parent.',
							},
							order_key: {
								type: 'string',
								description:
									'The fractional-indexing order key of the project. Always `null` for workspace projects.',
							},
							default_order: {
								type: 'number',
								description:
									'The position of the project in the default ordering of its workspace.',
							},
							default_order_key: {
								type: 'string',
								description:
									'The fractional-indexing key of the project in the default ordering of its workspace. Only used for workspace projects.',
							},
							view_style: {
								type: 'string',
								description:
									'The way tasks are rendered in the project: `list`, `board` or `calendar`.',
							},
							is_collapsed: {
								type: 'boolean',
								description:
									'Whether the sub-projects of the project are collapsed.',
							},
							is_shared: {
								type: 'boolean',
								description: 'Whether the project is shared.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the project is archived.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the project is deleted.',
							},
							is_favorite: {
								type: 'boolean',
								description: 'Whether the project is a favorite.',
							},
							is_frozen: {
								type: 'boolean',
								description:
									'Whether the project belongs to a canceled subscription and is frozen.',
							},
							can_assign_tasks: {
								type: 'boolean',
								description:
									'Whether tasks in the project can be assigned to users.',
							},
							can_comment: {
								type: 'boolean',
								description: 'Whether the current user can comment in the project.',
							},
							inbox_project: {
								type: 'boolean',
								description:
									'Whether the project is the Inbox. Only sent for the Inbox project.',
							},
							creator_uid: {
								type: 'string',
								description: 'The ID of the user who created the project.',
							},
							role: {
								type: 'string',
								description:
									'The role of the current user in the project: `CREATOR`, `ADMIN`, `READ_WRITE`, `EDIT_ONLY` or `COMPLETE_ONLY`.',
							},
							public_access: {
								type: 'boolean',
								description: 'Whether the project is accessible publicly.',
							},
							public_key: {
								type: 'string',
								description:
									'The public key of the project, used to access public projects.',
							},
							status: {
								type: 'string',
								description:
									'The status of the project: `PLANNED`, `IN_PROGRESS`, `PAUSED`, `COMPLETED` or `CANCELED`. Only used for workspace projects.',
							},
							is_invite_only: {
								type: 'boolean',
								description:
									'Whether the project is invite-only. Only used for workspace projects.',
							},
							is_link_sharing_enabled: {
								type: 'boolean',
								description:
									'Whether anyone with the link can join the project. Only used for workspace projects.',
							},
							collaborator_role_default: {
								type: 'string',
								description:
									'The default role of new collaborators. Only used for workspace projects.',
							},
							is_pending_default_collaborator_invites: {
								type: 'boolean',
								description:
									'Whether default collaborators are still being added to the project in the background. Only used for workspace projects.',
							},
							is_project_insights_enabled: {
								type: 'boolean',
								description:
									'Whether Project Insights is enabled for the project. Only used for workspace projects.',
							},
							access: {
								type: 'object',
								description:
									'The access configuration of the project. Only used for workspace projects.',
								properties: {
									visibility: {
										type: 'string',
										description:
											'The visibility of the project: `restricted`, `team` or `public`.',
									},
									configuration: {
										type: 'object',
										description: 'The configuration of the project access.',
										properties: {
											hide_collaborator_details: {
												type: 'boolean',
												description:
													'Whether collaborator details are hidden. Only for public projects.',
											},
											disable_duplication: {
												type: 'boolean',
												description:
													'Whether duplicating the project is disabled. Only for public projects.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							created_at: {
								type: 'string',
								description: 'The date and time when the project was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the project was last updated.',
							},
						},
						required: [],
					},
				},
				items: {
					type: 'array',
					description: 'The tasks.',
					items: {
						type: 'object',
						description: 'A task.',
						properties: {
							id: { type: 'string', description: 'The ID of the task.' },
							user_id: {
								type: 'string',
								description: 'The ID of the owner of the task.',
							},
							project_id: {
								type: 'string',
								description: 'The ID of the parent project.',
							},
							section_id: {
								type: 'string',
								description:
									'The ID of the parent section. `null` for tasks that do not belong to a section.',
							},
							parent_id: {
								type: 'string',
								description: 'The ID of the parent task. `null` for root tasks.',
							},
							content: {
								type: 'string',
								description:
									'The text of the task. May contain markdown-formatted text and hyperlinks.',
							},
							description: {
								type: 'string',
								description:
									'The description of the task. May contain markdown-formatted text and hyperlinks.',
							},
							due: {
								type: 'object',
								description:
									'The due date of the task. `null` if the task has no due date.',
								properties: {
									date: {
										type: 'string',
										description:
											'The due date, either a full-day date (`YYYY-MM-DD`), a floating date with time (`YYYY-MM-DDTHH:MM:SS`) or a date with time in UTC (`YYYY-MM-DDTHH:MM:SSZ`).',
									},
									timezone: {
										type: 'string',
										description:
											'The timezone name for due dates with a fixed timezone, for example `Asia/Jakarta`. `null` for full-day and floating due dates.',
									},
									is_recurring: {
										type: 'boolean',
										description: 'Whether the due date is recurring.',
									},
									string: {
										type: 'string',
										description:
											'The human-readable due date string, for example `tomorrow at 12`.',
									},
									lang: {
										type: 'string',
										description:
											'The language code of the due date string, for example `en`.',
									},
								},
								required: [],
							},
							deadline: {
								type: 'object',
								description:
									'The deadline of the task. `null` if the task has no deadline.',
								properties: {
									date: {
										type: 'string',
										description: 'The deadline in the `YYYY-MM-DD` format.',
									},
									lang: {
										type: 'string',
										description:
											'The language code of the deadline. Only returned in the output.',
									},
								},
								required: [],
							},
							duration: {
								type: 'object',
								description:
									'The duration of the task. `null` if the task has no duration.',
								properties: {
									amount: {
										type: 'number',
										description:
											'The amount of time the task takes, a positive integer.',
									},
									unit: {
										type: 'string',
										description: 'The unit of the duration, `minute` or `day`.',
									},
								},
								required: [],
							},
							priority: {
								type: 'number',
								description:
									'The priority of the task, from `1` (normal) to `4` (very urgent). Todoist clients show `4` as p1.',
							},
							labels: {
								type: 'array',
								description:
									'The names of the labels of the task. They can be personal or shared labels.',
								items: { type: 'string', description: 'The name of a label.' },
							},
							child_order: {
								type: 'number',
								description:
									'The position of the task among the tasks with the same parent.',
							},
							order_key: {
								type: 'string',
								description:
									'The fractional-indexing order key of the task. Tasks sort by comparing keys lexicographically among siblings.',
							},
							day_order: {
								type: 'number',
								description:
									'The position of the task in the Today or Next 7 days view.',
							},
							is_collapsed: {
								type: 'boolean',
								description: 'Whether the sub-tasks of the task are collapsed.',
							},
							added_by_uid: {
								type: 'string',
								description:
									'The ID of the user who created the task. Relevant for shared projects only.',
							},
							assigned_by_uid: {
								type: 'string',
								description:
									'The ID of the user who assigned the task. Relevant for shared projects only.',
							},
							responsible_uid: {
								type: 'string',
								description:
									'The ID of the user responsible for the task. Relevant for shared projects only.',
							},
							checked: {
								type: 'boolean',
								description: 'Whether the task is completed.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the task is deleted.',
							},
							added_at: {
								type: 'string',
								description: 'The date and time when the task was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the task was last updated.',
							},
							completed_at: {
								type: 'string',
								description:
									'The date and time when the task was completed. `null` if the task is not completed.',
							},
							completed_by_uid: {
								type: 'string',
								description: 'The ID of the user who completed the task.',
							},
							note_count: {
								type: 'number',
								description: 'The number of comments on the task.',
							},
							completed_count: {
								type: 'number',
								description:
									'How many times the task has been completed. Relevant for recurring tasks.',
							},
							postponed_count: {
								type: 'number',
								description: 'How many times the task has been postponed.',
							},
						},
						required: [],
					},
				},
				notes: {
					type: 'array',
					description: 'The task comments.',
					items: {
						type: 'object',
						description: 'A task comment.',
						properties: {
							id: { type: 'string', description: 'The ID of the comment.' },
							posted_uid: {
								type: 'string',
								description: 'The ID of the user who posted the comment.',
							},
							item_id: {
								type: 'string',
								description: 'The ID of the task the comment belongs to.',
							},
							content: {
								type: 'string',
								description:
									'The content of the comment. May contain markdown-formatted text and hyperlinks.',
							},
							file_attachment: {
								type: 'object',
								description:
									'The file attached to the comment. `null` if there is none.',
								properties: {
									file_name: {
										type: 'string',
										description: 'The name of the file.',
									},
									file_size: {
										type: 'number',
										description: 'The size of the file in bytes.',
									},
									file_type: {
										type: 'string',
										description:
											'The MIME type of the file, for example `image/png`.',
									},
									file_url: {
										type: 'string',
										description: 'The URL where the file is located.',
									},
									upload_state: {
										type: 'string',
										description:
											'The upload state of the file, for example `pending` or `completed`.',
									},
									resource_type: {
										type: 'string',
										description:
											'The type of the attached resource, for example `file`.',
									},
									image: {
										type: 'string',
										description:
											'The URL of the image preview, if the file is an image.',
									},
									image_width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									image_height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									tn_l: {
										description:
											'The large thumbnail as a list of the URL, width and height.',
									},
									tn_m: {
										description:
											'The medium thumbnail as a list of the URL, width and height.',
									},
									tn_s: {
										description:
											'The small thumbnail as a list of the URL, width and height.',
									},
									file_duration: {
										type: 'number',
										description: 'The duration of the audio file in seconds.',
									},
								},
								required: [],
							},
							uids_to_notify: {
								type: 'array',
								description: 'The IDs of the users to notify about the comment.',
								items: {
									type: 'string',
									description: 'The ID of a user to notify.',
								},
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the comment is deleted.',
							},
							posted_at: {
								type: 'string',
								description: 'The date and time when the comment was posted.',
							},
							reactions: {
								type: 'object',
								description:
									'The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				project_notes: {
					type: 'array',
					description: 'The project comments.',
					items: {
						type: 'object',
						description: 'A project comment.',
						properties: {
							id: { type: 'string', description: 'The ID of the comment.' },
							posted_uid: {
								type: 'string',
								description: 'The ID of the user who posted the comment.',
							},
							project_id: {
								type: 'string',
								description: 'The ID of the project the comment belongs to.',
							},
							content: {
								type: 'string',
								description:
									'The content of the comment. May contain markdown-formatted text and hyperlinks.',
							},
							file_attachment: {
								type: 'object',
								description:
									'The file attached to the comment. `null` if there is none.',
								properties: {
									file_name: {
										type: 'string',
										description: 'The name of the file.',
									},
									file_size: {
										type: 'number',
										description: 'The size of the file in bytes.',
									},
									file_type: {
										type: 'string',
										description:
											'The MIME type of the file, for example `image/png`.',
									},
									file_url: {
										type: 'string',
										description: 'The URL where the file is located.',
									},
									upload_state: {
										type: 'string',
										description:
											'The upload state of the file, for example `pending` or `completed`.',
									},
									resource_type: {
										type: 'string',
										description:
											'The type of the attached resource, for example `file`.',
									},
									image: {
										type: 'string',
										description:
											'The URL of the image preview, if the file is an image.',
									},
									image_width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									image_height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
									tn_l: {
										description:
											'The large thumbnail as a list of the URL, width and height.',
									},
									tn_m: {
										description:
											'The medium thumbnail as a list of the URL, width and height.',
									},
									tn_s: {
										description:
											'The small thumbnail as a list of the URL, width and height.',
									},
									file_duration: {
										type: 'number',
										description: 'The duration of the audio file in seconds.',
									},
								},
								required: [],
							},
							uids_to_notify: {
								type: 'array',
								description: 'The IDs of the users to notify about the comment.',
								items: {
									type: 'string',
									description: 'The ID of a user to notify.',
								},
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the comment is deleted.',
							},
							posted_at: {
								type: 'string',
								description: 'The date and time when the comment was posted.',
							},
							reactions: {
								type: 'object',
								description:
									'The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				sections: {
					type: 'array',
					description: 'The sections.',
					items: {
						type: 'object',
						description: 'A section.',
						properties: {
							id: { type: 'string', description: 'The ID of the section.' },
							user_id: {
								type: 'string',
								description: 'The ID of the owner of the section.',
							},
							project_id: {
								type: 'string',
								description: 'The ID of the project the section belongs to.',
							},
							name: { type: 'string', description: 'The name of the section.' },
							description: {
								type: 'string',
								description: 'The description of the section.',
							},
							section_order: {
								type: 'number',
								description:
									'The position of the section among the sections of the project.',
							},
							order_key: {
								type: 'string',
								description: 'The fractional-indexing order key of the section.',
							},
							is_collapsed: {
								type: 'boolean',
								description: 'Whether the section is collapsed.',
							},
							is_archived: {
								type: 'boolean',
								description: 'Whether the section is archived.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the section is deleted.',
							},
							added_at: {
								type: 'string',
								description: 'The date and time when the section was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the section was last updated.',
							},
							archived_at: {
								type: 'string',
								description: 'The date and time when the section was archived.',
							},
						},
						required: [],
					},
				},
				labels: {
					type: 'array',
					description: 'The personal labels.',
					items: {
						type: 'object',
						description: 'A personal label.',
						properties: {
							id: { type: 'string', description: 'The ID of the label.' },
							name: { type: 'string', description: 'The name of the label.' },
							color: {
								type: 'string',
								description:
									'The color of the label icon, for example `berry_red`.',
							},
							item_order: {
								type: 'number',
								description: 'The position of the label in the label list.',
							},
							order_key: {
								type: 'string',
								description: 'The fractional-indexing order key of the label.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the label is deleted.',
							},
							is_favorite: {
								type: 'boolean',
								description: 'Whether the label is a favorite.',
							},
						},
						required: [],
					},
				},
				filters: {
					type: 'array',
					description: 'The filters.',
					items: {
						type: 'object',
						description: 'A filter.',
						properties: {
							id: { type: 'string', description: 'The ID of the filter.' },
							name: { type: 'string', description: 'The name of the filter.' },
							query: { type: 'string', description: 'The query of the filter.' },
							description: {
								type: 'string',
								description:
									'The description of the filter as markdown. Empty if the filter has none.',
							},
							color: {
								type: 'string',
								description:
									'The color of the filter icon, for example `berry_red`.',
							},
							item_order: {
								type: 'number',
								description: 'The position of the filter in the filter list.',
							},
							order_key: {
								type: 'string',
								description: 'The fractional-indexing order key of the filter.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the filter is deleted.',
							},
							is_favorite: {
								type: 'boolean',
								description: 'Whether the filter is a favorite.',
							},
							is_frozen: {
								type: 'boolean',
								description:
									'Whether the filter belongs to a canceled subscription and cannot be changed.',
							},
						},
						required: [],
					},
				},
				workspace_filters: {
					type: 'array',
					description: 'The filters of the workspaces of the user.',
					items: {
						type: 'object',
						description: 'A workspace filter.',
						properties: {
							id: { type: 'string', description: 'The ID of the workspace filter.' },
							workspace_id: {
								type: 'string',
								description: 'The ID of the workspace the filter belongs to.',
							},
							name: {
								type: 'string',
								description: 'The name of the workspace filter.',
							},
							query: {
								type: 'string',
								description: 'The query of the workspace filter.',
							},
							description: {
								type: 'string',
								description:
									'The description of the filter as markdown. Empty if the filter has none.',
							},
							color: {
								type: 'string',
								description:
									'The color of the filter icon, for example `berry_red`.',
							},
							item_order: {
								type: 'number',
								description: 'The position of the filter in the filter list.',
							},
							order_key: {
								type: 'string',
								description:
									'The fractional-indexing order key of the filter. May be `null` for workspaces that are not migrated yet.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the filter is deleted.',
							},
							is_favorite: {
								type: 'boolean',
								description: 'Whether the filter is a favorite of the user.',
							},
							is_frozen: {
								type: 'boolean',
								description:
									'Whether the filter was created outside the plan limits and cannot be changed.',
							},
							creator_uid: {
								type: 'string',
								description: 'The ID of the user who created the filter.',
							},
							updater_uid: {
								type: 'string',
								description: 'The ID of the user who last updated the filter.',
							},
							created_at: {
								type: 'string',
								description: 'The date and time when the filter was created.',
							},
							updated_at: {
								type: 'string',
								description: 'The date and time when the filter was last updated.',
							},
						},
						required: [],
					},
				},
				reminders: {
					type: 'array',
					description: 'The reminders.',
					items: {
						type: 'object',
						description: 'A reminder.',
						properties: {
							id: { type: 'string', description: 'The ID of the reminder.' },
							notify_uid: {
								type: 'string',
								description:
									'The ID of the user who is notified about the reminder.',
							},
							item_id: {
								type: 'string',
								description: 'The ID of the task the reminder is for.',
							},
							type: {
								type: 'string',
								description:
									'The type of the reminder: `relative` (minutes before the due date of the task), `absolute` (a specific date and time) or `location`.',
							},
							due: {
								type: 'object',
								description:
									'The due date of the reminder. Only dates with time are supported. Not returned for location reminders.',
								properties: {
									date: {
										type: 'string',
										description:
											'The due date, either a full-day date (`YYYY-MM-DD`), a floating date with time (`YYYY-MM-DDTHH:MM:SS`) or a date with time in UTC (`YYYY-MM-DDTHH:MM:SSZ`).',
									},
									timezone: {
										type: 'string',
										description:
											'The timezone name for due dates with a fixed timezone, for example `Asia/Jakarta`. `null` for full-day and floating due dates.',
									},
									is_recurring: {
										type: 'boolean',
										description: 'Whether the due date is recurring.',
									},
									string: {
										type: 'string',
										description:
											'The human-readable due date string, for example `tomorrow at 12`.',
									},
									lang: {
										type: 'string',
										description:
											'The language code of the due date string, for example `en`.',
									},
								},
								required: [],
							},
							minute_offset: {
								type: 'number',
								description:
									'The number of minutes before the due date of the task when the reminder is triggered.',
							},
							name: {
								type: 'string',
								description:
									'The name of the location. Only for location reminders.',
							},
							loc_lat: {
								type: 'string',
								description:
									'The latitude of the location. Only for location reminders.',
							},
							loc_long: {
								type: 'string',
								description:
									'The longitude of the location. Only for location reminders.',
							},
							loc_trigger: {
								type: 'string',
								description:
									'What triggers the reminder: `on_enter` or `on_leave`. Only for location reminders.',
							},
							radius: {
								type: 'number',
								description:
									'The radius around the location in meters. Only for location reminders.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the reminder is deleted.',
							},
							is_urgent: {
								type: 'boolean',
								description:
									'Whether the reminder is urgent and triggers an alarm on the urgent reminder device of the user. Only for time-based reminders.',
							},
						},
						required: [],
					},
				},
				locations: {
					type: 'array',
					description:
						'The locations used by location reminders. Each location is a list of the name, latitude and longitude.',
					items: {
						type: 'array',
						description:
							'A location as a list of three texts: the name, the latitude and the longitude.',
						items: {
							type: 'string',
							description: 'The name, the latitude or the longitude of the location.',
						},
					},
				},
				collaborators: {
					type: 'array',
					description: 'The users who share at least one project with the current user.',
					items: {
						type: 'object',
						description: 'A collaborator.',
						properties: {
							id: { type: 'string', description: 'The ID of the collaborator.' },
							email: {
								type: 'string',
								description: 'The email of the collaborator.',
							},
							full_name: {
								type: 'string',
								description: 'The full name of the collaborator.',
							},
							timezone: {
								type: 'string',
								description: 'The timezone of the collaborator.',
							},
							image_id: {
								type: 'string',
								description:
									'The ID of the avatar of the collaborator. `null` if the collaborator has no avatar.',
							},
						},
						required: [],
					},
				},
				collaborator_states: {
					type: 'array',
					description: 'The state of each collaborator in each shared project.',
					items: {
						type: 'object',
						description: 'The state of a collaborator in a project.',
						properties: {
							project_id: {
								type: 'string',
								description: 'The ID of the shared project.',
							},
							user_id: { type: 'string', description: 'The ID of the collaborator.' },
							state: {
								type: 'string',
								description:
									'The state of the collaborator in the project: `active` or `invited`.',
							},
							is_deleted: {
								type: 'boolean',
								description:
									'Whether the collaborator has left the shared project.',
							},
							role: {
								type: 'string',
								description:
									'The role of the collaborator in the project, for example `CREATOR`, `ADMIN` or `READ_WRITE`. Only available for teams.',
							},
							workspace_role: {
								type: 'string',
								description:
									'The role of the collaborator in the workspace of the project, for example `ADMIN` or `MEMBER`. Only returned for workspace projects.',
							},
						},
						required: [],
					},
				},
				completed_info: {
					type: 'array',
					description:
						'The number of completed tasks within active projects, sections and parent tasks.',
					items: {
						type: 'object',
						description:
							'The number of completed tasks for one project, section or parent task.',
						properties: {
							project_id: {
								type: 'string',
								description: 'The ID of the project. Returned for projects.',
							},
							section_id: {
								type: 'string',
								description: 'The ID of the section. Returned for sections.',
							},
							item_id: {
								type: 'string',
								description:
									'The ID of the parent task. Returned for parent tasks.',
							},
							completed_items: {
								type: 'number',
								description: 'The number of completed tasks.',
							},
							archived_sections: {
								type: 'number',
								description:
									'The number of archived sections. Returned for projects.',
							},
						},
						required: [],
					},
				},
				live_notifications: {
					type: 'array',
					description:
						'The live notifications. Besides the common fields, each notification has extra fields that depend on its `notification_type`.',
					items: {
						type: 'object',
						description: 'A live notification.',
						properties: {
							id: { type: 'string', description: 'The ID of the live notification.' },
							created_at: {
								type: 'string',
								description:
									'The date and time when the live notification was created.',
							},
							notification_key: {
								type: 'string',
								description: 'The unique key of the notification.',
							},
							notification_type: {
								type: 'string',
								description:
									'The type of the notification, for example `karma_level`, `item_assigned` or `share_invitation_sent`. It defines which of the other fields are returned.',
							},
							is_unread: {
								type: 'boolean',
								description: 'Whether the notification is marked as unread.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the notification is deleted.',
							},
							seq_no: {
								type: 'number',
								description: 'The sequence number of the notification.',
							},
							from_uid: {
								type: 'string',
								description: 'The ID of the user who initiated the notification.',
							},
							from_user: {
								type: 'object',
								description:
									'The user who initiated the notification. Returned for some invitation notifications.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							state: {
								type: 'string',
								description:
									'The state of the invitation: `invited`, `accepted` or `rejected`. Returned for invitation notifications.',
							},
							invitation_id: {
								type: 'string',
								description:
									'The ID of the invitation. Returned for invitation notifications.',
							},
							invitation_secret: {
								type: 'string',
								description:
									'The secret key of the invitation, used to accept or reject it. Returned for invitation notifications.',
							},
							reject_email: {
								type: 'string',
								description:
									'The email of the user who rejected the invitation. Returned for `share_invitation_rejected`.',
							},
							project_id: {
								type: 'string',
								description:
									'The ID of the project. Returned for project notifications.',
							},
							project_name: {
								type: 'string',
								description:
									'The name of the project. Returned for some project notifications.',
							},
							removed_name: {
								type: 'string',
								description:
									'The name of the removed user. Returned for `user_removed_from_project`.',
							},
							removed_uid: {
								type: 'string',
								description:
									'The ID of the removed user. Returned for `user_removed_from_project`.',
							},
							item_id: {
								type: 'string',
								description: 'The ID of the task. Returned for task notifications.',
							},
							item_content: {
								type: 'string',
								description:
									'The content of the task. Returned for task notifications.',
							},
							assigned_by_uid: {
								type: 'string',
								description:
									'The ID of the user who assigned the task. Returned for task notifications.',
							},
							responsible_uid: {
								type: 'string',
								description:
									'The ID of the user responsible for the task. Returned for task notifications.',
							},
							workspace_id: {
								type: 'string',
								description:
									'The ID of the workspace. Returned for workspace notifications.',
							},
							workspace_name: {
								type: 'string',
								description:
									'The name of the workspace. Returned for workspace notifications.',
							},
							plan_type: {
								type: 'string',
								description:
									'The plan of the workspace: `STARTER` or `BUSINESS`. Returned for workspace plan notifications.',
							},
							team_acquisition_cohort: {
								type: 'string',
								description:
									'The acquisition cohort of the workspace team. Returned for `workspace_team_cohort_tagged`.',
							},
							karma_level: {
								type: 'number',
								description:
									'The Karma level that was reached. Returned for `karma_level`.',
							},
							completed_tasks: {
								type: 'number',
								description:
									'The number of tasks the user has completed. Returned for `karma_level`.',
							},
							reached_at: {
								type: 'string',
								description:
									'The date and time when the Karma level was reached. Returned for `karma_level`.',
							},
							top_procent: {
								type: 'number',
								description:
									'The percentage of users the user is ahead of. Returned for `karma_level`.',
							},
							promo_img: {
								type: 'string',
								description:
									'The URL of the image of the Karma level. Returned for `karma_level`.',
							},
						},
						required: [],
					},
				},
				live_notifications_last_read_id: {
					type: 'string',
					description: 'The ID of the last live notification the user has seen.',
				},
				user_settings: {
					type: 'object',
					description: 'The settings of the user.',
					properties: {
						reminder_push: {
							type: 'boolean',
							description: 'Whether reminders are sent as push notifications.',
						},
						reminder_desktop: {
							type: 'boolean',
							description: 'Whether reminders are shown in desktop applications.',
						},
						reminder_email: {
							type: 'boolean',
							description: 'Whether reminders are sent by email.',
						},
						completed_sound_desktop: {
							type: 'boolean',
							description:
								'Whether a sound is played when a task is completed in desktop clients.',
						},
						completed_sound_mobile: {
							type: 'boolean',
							description:
								'Whether a sound is played when a task is completed in mobile clients.',
						},
						ai_email_assist: {
							type: 'boolean',
							description: 'Whether the AI assistant for emails is enabled.',
						},
						debug_logging_enabled_until: {
							type: 'string',
							description:
								'The date and time until debug logging is enabled. `null` if it is disabled.',
						},
						legacy_pricing: {
							type: 'number',
							description:
								'Whether the user is on legacy pricing: `1` if yes, `0` if no.',
						},
						reset_recurring_subtasks: {
							type: 'boolean',
							description:
								'Whether the sub-tasks of a recurring task are reset when the task is completed.',
						},
						habit_push_notifications: {
							type: 'object',
							description: 'The settings of the habit push notifications.',
							properties: {
								features: {
									type: 'array',
									description: 'The habit push notifications.',
									items: {
										type: 'object',
										description: 'A habit push notification.',
										properties: {
											name: {
												type: 'string',
												description:
													'The name of the notification, for example `plan_your_day`.',
											},
											enabled: {
												type: 'boolean',
												description: 'Whether the notification is enabled.',
											},
											send_at: {
												type: 'string',
												description:
													'The time of the day when the notification is sent, for example `08:00`. `null` if it has no fixed time.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						navigation: {
							type: 'object',
							description: 'The settings of the navigation sidebar.',
							properties: {
								counts_shown: {
									type: 'boolean',
									description: 'Whether the task counts are shown.',
								},
								features: {
									type: 'array',
									description: 'The sidebar items.',
									items: {
										type: 'object',
										description: 'A feature.',
										properties: {
											name: {
												type: 'string',
												description: 'The name of the feature.',
											},
											shown: {
												type: 'boolean',
												description:
													'Whether the item is shown in the sidebar.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						quick_add: {
							type: 'object',
							description: 'The settings of the quick add dialog.',
							properties: {
								description_shown: {
									type: 'boolean',
									description: 'Whether the description field is shown.',
								},
								labels_shown: {
									type: 'boolean',
									description: 'Whether the labels are shown.',
								},
								features: {
									type: 'array',
									description: 'The items of the dialog.',
									items: {
										type: 'object',
										description: 'A feature.',
										properties: {
											name: {
												type: 'string',
												description: 'The name of the feature.',
											},
											shown: {
												type: 'boolean',
												description:
													'Whether the item is shown in the dialog.',
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
				settings_notifications: {
					type: 'object',
					description:
						'The notification settings of the user. Each key is a notification type and tells whether notifications of that type are sent by email and as push notifications. Returned for the `notification_settings` resource type.',
					properties: {
						biz_account_disabled: {
							type: 'object',
							description:
								'The settings of the `biz_account_disabled` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_invitation_accepted: {
							type: 'object',
							description:
								'The settings of the `biz_invitation_accepted` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_invitation_created: {
							type: 'object',
							description:
								'The settings of the `biz_invitation_created` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_invitation_rejected: {
							type: 'object',
							description:
								'The settings of the `biz_invitation_rejected` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_payment_failed: {
							type: 'object',
							description: 'The settings of the `biz_payment_failed` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_policy_disallowed_invitation: {
							type: 'object',
							description:
								'The settings of the `biz_policy_disallowed_invitation` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_policy_rejected_invitation: {
							type: 'object',
							description:
								'The settings of the `biz_policy_rejected_invitation` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_trial_enter_cc: {
							type: 'object',
							description: 'The settings of the `biz_trial_enter_cc` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						biz_trial_will_end: {
							type: 'object',
							description: 'The settings of the `biz_trial_will_end` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						item_assigned: {
							type: 'object',
							description: 'The settings of the `item_assigned` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						item_completed: {
							type: 'object',
							description: 'The settings of the `item_completed` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						item_uncompleted: {
							type: 'object',
							description: 'The settings of the `item_uncompleted` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						note_added: {
							type: 'object',
							description: 'The settings of the `note_added` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						project_archived: {
							type: 'object',
							description: 'The settings of the `project_archived` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						removed_from_workspace: {
							type: 'object',
							description:
								'The settings of the `removed_from_workspace` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						share_invitation_accepted: {
							type: 'object',
							description:
								'The settings of the `share_invitation_accepted` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						share_invitation_rejected: {
							type: 'object',
							description:
								'The settings of the `share_invitation_rejected` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						teams_workspace_canceled: {
							type: 'object',
							description:
								'The settings of the `teams_workspace_canceled` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						teams_workspace_payment_failed: {
							type: 'object',
							description:
								'The settings of the `teams_workspace_payment_failed` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						teams_workspace_upgraded: {
							type: 'object',
							description:
								'The settings of the `teams_workspace_upgraded` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						user_left_project: {
							type: 'object',
							description: 'The settings of the `user_left_project` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						user_removed_from_project: {
							type: 'object',
							description:
								'The settings of the `user_removed_from_project` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						workspace_deleted: {
							type: 'object',
							description: 'The settings of the `workspace_deleted` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						workspace_invitation_accepted: {
							type: 'object',
							description:
								'The settings of the `workspace_invitation_accepted` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						workspace_invitation_created: {
							type: 'object',
							description:
								'The settings of the `workspace_invitation_created` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						workspace_invitation_rejected: {
							type: 'object',
							description:
								'The settings of the `workspace_invitation_rejected` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
						workspace_user_joined_by_domain: {
							type: 'object',
							description:
								'The settings of the `workspace_user_joined_by_domain` notifications.',
							properties: {
								notify_email: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent by email.',
								},
								notify_push: {
									type: 'boolean',
									description:
										'Whether notifications of this type are sent as push notifications.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				user_plan_limits: {
					type: 'object',
					description: 'The features and limits of the plan of the user.',
					properties: {
						current: {
							type: 'object',
							description: 'The features and limits of the current plan.',
							properties: {
								plan_name: { type: 'string', description: 'The name of the plan.' },
								activity_log: {
									type: 'boolean',
									description: 'Whether the user can view the activity log.',
								},
								activity_log_limit: {
									type: 'number',
									description:
										'The number of days of the activity log history that are displayed. `-1` if there is no limit.',
								},
								advanced_permissions: {
									type: 'boolean',
									description: 'Whether advanced permissions are available.',
								},
								automatic_backups: {
									type: 'boolean',
									description: 'Whether backups are created automatically.',
								},
								calendar_feeds: {
									type: 'boolean',
									description:
										'Whether calendar feeds can be enabled for projects.',
								},
								calendar_layout: {
									type: 'boolean',
									description: 'Whether the calendar layout is available.',
								},
								comments: {
									type: 'boolean',
									description: 'Whether the user can add comments.',
								},
								completed_tasks: {
									type: 'boolean',
									description:
										'Whether the user can search the completed tasks archive.',
								},
								custom_app_icon: {
									type: 'boolean',
									description:
										'Whether the user can set a custom app icon on iOS.',
								},
								customization_color: {
									type: 'boolean',
									description:
										'Whether the user can use special themes or other visual customization.',
								},
								deadlines: {
									type: 'boolean',
									description: 'Whether deadlines are available.',
								},
								durations: {
									type: 'boolean',
									description: 'Whether task durations are available.',
								},
								email_ai_forwarding: {
									type: 'boolean',
									description: 'Whether AI email forwarding is available.',
								},
								email_forwarding: {
									type: 'boolean',
									description:
										'Whether the user can add tasks or comments by email.',
								},
								filters: {
									type: 'boolean',
									description: 'Whether the user can add and update filters.',
								},
								labels: {
									type: 'boolean',
									description: 'Whether the user can add labels.',
								},
								max_calendar_accounts: {
									type: 'number',
									description: 'The maximum number of calendar accounts.',
								},
								max_collaborators: {
									type: 'number',
									description:
										'The maximum number of collaborators in a project.',
								},
								max_filters: {
									type: 'number',
									description: 'The maximum number of filters.',
								},
								max_folders_per_workspace: {
									type: 'number',
									description: 'The maximum number of folders in a workspace.',
								},
								max_free_workspaces_created: {
									type: 'number',
									description:
										'The maximum number of free workspaces the user can create.',
								},
								max_guests_per_workspace: {
									type: 'number',
									description: 'The maximum number of guests in a workspace.',
								},
								max_labels: {
									type: 'number',
									description: 'The maximum number of labels.',
								},
								max_live_notifications: {
									type: 'number',
									description: 'The maximum number of live notifications.',
								},
								max_monthly_capture: {
									type: 'number',
									description: 'The maximum number of captures per month.',
								},
								max_monthly_ramble: {
									type: 'number',
									description: 'The maximum number of rambles per month.',
								},
								max_projects: {
									type: 'number',
									description: 'The maximum number of active projects.',
								},
								max_projects_joined: {
									type: 'number',
									description:
										'The maximum number of projects the user can join.',
								},
								max_reminders_location: {
									type: 'number',
									description: 'The maximum number of location reminders.',
								},
								max_reminders_time: {
									type: 'number',
									description: 'The maximum number of time-based reminders.',
								},
								max_sections: {
									type: 'number',
									description: 'The maximum number of active sections.',
								},
								max_tasks: {
									type: 'number',
									description: 'The maximum number of active tasks.',
								},
								max_user_templates: {
									type: 'number',
									description: 'The maximum number of templates of the user.',
								},
								max_workspace_filters: {
									type: 'number',
									description: 'The maximum number of filters per workspace.',
								},
								project_insights_light: {
									type: 'boolean',
									description:
										'Whether the light version of project insights is available.',
								},
								reminders: {
									type: 'boolean',
									description: 'Whether the user can add reminders.',
								},
								reminders_at_due: {
									type: 'boolean',
									description: 'Whether reminders at the due time are available.',
								},
								templates: {
									type: 'boolean',
									description:
										'Whether the user can import and export project templates.',
								},
								upload_limit_mb: {
									type: 'number',
									description: 'The maximum size of an uploaded file in MB.',
								},
								uploads: {
									type: 'boolean',
									description: 'Whether the user can upload attachments.',
								},
								weekly_trends: {
									type: 'boolean',
									description: 'Whether the user can view productivity stats.',
								},
								workspace_filters: {
									type: 'boolean',
									description:
										'Whether the user can add and update workspace filters.',
								},
							},
							required: [],
						},
						next: {
							type: 'object',
							description:
								'The features and limits of the plan available for an upgrade. `null` if there is no upgrade.',
							properties: {
								plan_name: { type: 'string', description: 'The name of the plan.' },
								activity_log: {
									type: 'boolean',
									description: 'Whether the user can view the activity log.',
								},
								activity_log_limit: {
									type: 'number',
									description:
										'The number of days of the activity log history that are displayed. `-1` if there is no limit.',
								},
								advanced_permissions: {
									type: 'boolean',
									description: 'Whether advanced permissions are available.',
								},
								automatic_backups: {
									type: 'boolean',
									description: 'Whether backups are created automatically.',
								},
								calendar_feeds: {
									type: 'boolean',
									description:
										'Whether calendar feeds can be enabled for projects.',
								},
								calendar_layout: {
									type: 'boolean',
									description: 'Whether the calendar layout is available.',
								},
								comments: {
									type: 'boolean',
									description: 'Whether the user can add comments.',
								},
								completed_tasks: {
									type: 'boolean',
									description:
										'Whether the user can search the completed tasks archive.',
								},
								custom_app_icon: {
									type: 'boolean',
									description:
										'Whether the user can set a custom app icon on iOS.',
								},
								customization_color: {
									type: 'boolean',
									description:
										'Whether the user can use special themes or other visual customization.',
								},
								deadlines: {
									type: 'boolean',
									description: 'Whether deadlines are available.',
								},
								durations: {
									type: 'boolean',
									description: 'Whether task durations are available.',
								},
								email_ai_forwarding: {
									type: 'boolean',
									description: 'Whether AI email forwarding is available.',
								},
								email_forwarding: {
									type: 'boolean',
									description:
										'Whether the user can add tasks or comments by email.',
								},
								filters: {
									type: 'boolean',
									description: 'Whether the user can add and update filters.',
								},
								labels: {
									type: 'boolean',
									description: 'Whether the user can add labels.',
								},
								max_calendar_accounts: {
									type: 'number',
									description: 'The maximum number of calendar accounts.',
								},
								max_collaborators: {
									type: 'number',
									description:
										'The maximum number of collaborators in a project.',
								},
								max_filters: {
									type: 'number',
									description: 'The maximum number of filters.',
								},
								max_folders_per_workspace: {
									type: 'number',
									description: 'The maximum number of folders in a workspace.',
								},
								max_free_workspaces_created: {
									type: 'number',
									description:
										'The maximum number of free workspaces the user can create.',
								},
								max_guests_per_workspace: {
									type: 'number',
									description: 'The maximum number of guests in a workspace.',
								},
								max_labels: {
									type: 'number',
									description: 'The maximum number of labels.',
								},
								max_live_notifications: {
									type: 'number',
									description: 'The maximum number of live notifications.',
								},
								max_monthly_capture: {
									type: 'number',
									description: 'The maximum number of captures per month.',
								},
								max_monthly_ramble: {
									type: 'number',
									description: 'The maximum number of rambles per month.',
								},
								max_projects: {
									type: 'number',
									description: 'The maximum number of active projects.',
								},
								max_projects_joined: {
									type: 'number',
									description:
										'The maximum number of projects the user can join.',
								},
								max_reminders_location: {
									type: 'number',
									description: 'The maximum number of location reminders.',
								},
								max_reminders_time: {
									type: 'number',
									description: 'The maximum number of time-based reminders.',
								},
								max_sections: {
									type: 'number',
									description: 'The maximum number of active sections.',
								},
								max_tasks: {
									type: 'number',
									description: 'The maximum number of active tasks.',
								},
								max_user_templates: {
									type: 'number',
									description: 'The maximum number of templates of the user.',
								},
								max_workspace_filters: {
									type: 'number',
									description: 'The maximum number of filters per workspace.',
								},
								project_insights_light: {
									type: 'boolean',
									description:
										'Whether the light version of project insights is available.',
								},
								reminders: {
									type: 'boolean',
									description: 'Whether the user can add reminders.',
								},
								reminders_at_due: {
									type: 'boolean',
									description: 'Whether reminders at the due time are available.',
								},
								templates: {
									type: 'boolean',
									description:
										'Whether the user can import and export project templates.',
								},
								upload_limit_mb: {
									type: 'number',
									description: 'The maximum size of an uploaded file in MB.',
								},
								uploads: {
									type: 'boolean',
									description: 'Whether the user can upload attachments.',
								},
								weekly_trends: {
									type: 'boolean',
									description: 'Whether the user can view productivity stats.',
								},
								workspace_filters: {
									type: 'boolean',
									description:
										'Whether the user can add and update workspace filters.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				stats: {
					type: 'object',
					description:
						'The productivity stats of the user with completion counts for today and this week.',
					properties: {
						completed_count: {
							type: 'number',
							description: 'The total number of tasks the user has completed.',
						},
						days_items: {
							type: 'array',
							description: 'The completion statistics for today.',
							items: {
								type: 'object',
								description: 'The completion statistics of one day.',
								properties: {
									date: { type: 'string', description: 'The date.' },
									total_completed: {
										type: 'number',
										description: 'The number of tasks completed on that date.',
									},
								},
								required: [],
							},
						},
						week_items: {
							type: 'array',
							description: 'The completion statistics for the current week.',
							items: {
								type: 'object',
								description: 'The completion statistics of one week.',
								properties: {
									from: {
										type: 'string',
										description: 'The first day of the week.',
									},
									to: {
										type: 'string',
										description: 'The last day of the week.',
									},
									total_completed: {
										type: 'number',
										description: 'The number of tasks completed in that week.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				view_options: {
					type: 'array',
					description: 'The view options of the user.',
					items: {
						type: 'object',
						description: 'The view options of one view.',
						properties: {
							id: { type: 'string', description: 'The ID of the view options.' },
							view_type: {
								type: 'string',
								description:
									'The type of the view: `TODAY`, `UPCOMING`, `ASSIGNED_TO_ME`, `PROJECT`, `LABEL`, `FILTER` or `WORKSPACE_FILTER`.',
							},
							object_id: {
								type: 'string',
								description:
									'The ID of the project, label, filter or workspace filter the view is for. `null` for the other views.',
							},
							filtered_by: {
								type: 'string',
								description: 'The search query of the view.',
							},
							grouped_by: {
								type: 'string',
								description:
									'How the tasks are grouped, for example `PRIORITY` or `ASSIGNEE`. `null` if they are not grouped.',
							},
							sorted_by: {
								type: 'string',
								description:
									'How the tasks are sorted, for example `DUE_DATE` or `ADDED_DATE`. `null` for the default order.',
							},
							sort_order: {
								type: 'string',
								description: 'The sort order: `ASC` or `DESC`.',
							},
							show_completed_tasks: {
								type: 'boolean',
								description: 'Whether completed tasks are shown in the view.',
							},
							view_mode: {
								type: 'string',
								description:
									'The way tasks are rendered: `LIST`, `BOARD` or `CALENDAR`.',
							},
							calendar_settings: {
								type: 'object',
								description:
									'The settings of the calendar when the view mode is `CALENDAR`. `null` otherwise.',
								properties: {
									layout: {
										type: 'string',
										description:
											'The layout of the calendar: `WEEK` or `MONTH`.',
									},
									visible_day_count: {
										type: 'number',
										description:
											'The number of visible days of the week layout: `1`, `3` or `7`.',
									},
									color: {
										type: 'string',
										description:
											'What the colors of the tasks show: `PRIORITY`, `LABEL` or `PROJECT`.',
									},
								},
								required: [],
							},
							deadline: {
								type: 'string',
								description: 'The deadline search query of the view.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the view options are deleted.',
							},
						},
						required: [],
					},
				},
				project_view_options_defaults: {
					type: 'array',
					description: 'The default view options of the projects of the user.',
					items: {
						type: 'object',
						description: 'The default view options of one project.',
						properties: {
							project_id: { type: 'string', description: 'The ID of the project.' },
							filtered_by: {
								type: 'string',
								description: 'The search query of the view.',
							},
							grouped_by: {
								type: 'string',
								description:
									'How the tasks are grouped, for example `PRIORITY` or `ASSIGNEE`. `null` if they are not grouped.',
							},
							sorted_by: {
								type: 'string',
								description:
									'How the tasks are sorted, for example `DUE_DATE` or `ADDED_DATE`. `null` for the default order.',
							},
							sort_order: {
								type: 'string',
								description: 'The sort order: `ASC` or `DESC`.',
							},
							show_completed_tasks: {
								type: 'boolean',
								description: 'Whether completed tasks are shown in the view.',
							},
							view_mode: {
								type: 'string',
								description:
									'The way tasks are rendered: `LIST`, `BOARD` or `CALENDAR`.',
							},
							calendar_settings: {
								type: 'object',
								description:
									'The settings of the calendar when the view mode is `CALENDAR`. `null` otherwise.',
								properties: {
									layout: {
										type: 'string',
										description:
											'The layout of the calendar: `WEEK` or `MONTH`.',
									},
									visible_day_count: {
										type: 'number',
										description:
											'The number of visible days of the week layout: `1`, `3` or `7`.',
									},
									color: {
										type: 'string',
										description:
											'What the colors of the tasks show: `PRIORITY`, `LABEL` or `PROJECT`.',
									},
								},
								required: [],
							},
							creator_uid: {
								type: 'number',
								description: 'The ID of the user who created the defaults.',
							},
							updater_uid: {
								type: 'number',
								description: 'The ID of the user who last updated the defaults.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the defaults are deleted.',
							},
						},
						required: [],
					},
				},
				role_actions: {
					type: 'object',
					description: 'The actions each role is allowed to perform.',
					properties: {
						project_collaborator_actions: {
							type: 'array',
							description: 'The actions of the roles of project collaborators.',
							items: {
								type: 'object',
								description: 'A role and its actions.',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the role, for example `ADMIN` or `READ_WRITE`.',
									},
									actions: {
										type: 'array',
										description: 'The actions the role is allowed to perform.',
										items: {
											type: 'object',
											description: 'An action.',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the action, for example `CREATE_ITEM`.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						workspace_collaborator_actions: {
							type: 'array',
							description: 'The actions of the roles of workspace members.',
							items: {
								type: 'object',
								description: 'A role and its actions.',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the role, for example `ADMIN` or `READ_WRITE`.',
									},
									actions: {
										type: 'array',
										description: 'The actions the role is allowed to perform.',
										items: {
											type: 'object',
											description: 'An action.',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the action, for example `CREATE_ITEM`.',
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
				workspaces: {
					type: 'array',
					description: 'The workspaces of the user.',
					items: {
						type: 'object',
						description: 'A workspace.',
						properties: {
							id: { type: 'string', description: 'The ID of the workspace.' },
							name: { type: 'string', description: 'The name of the workspace.' },
							description: {
								type: 'string',
								description: 'The description of the workspace.',
							},
							plan: {
								type: 'string',
								description:
									'The subscription plan of the workspace: `STARTER` or `BUSINESS`.',
							},
							role: {
								type: 'string',
								description:
									'The role of the current user in the workspace: `ADMIN`, `MEMBER` or `GUEST`.',
							},
							creator_id: {
								type: 'string',
								description: 'The ID of the user who created the workspace.',
							},
							created_at: {
								type: 'string',
								description: 'The date and time when the workspace was created.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the workspace is deleted.',
							},
							is_collapsed: {
								type: 'boolean',
								description:
									'Whether the workspace is collapsed for the current user.',
							},
							is_guest_allowed: {
								type: 'boolean',
								description:
									'Whether users from outside the workspace can join or be invited to workspace projects.',
							},
							is_link_sharing_enabled: {
								type: 'boolean',
								description:
									'Whether users can join the workspace with an invitation link. `null` for guests.',
							},
							is_trial_pending: {
								type: 'boolean',
								description: 'Whether a trial of the workspace is pending.',
							},
							invite_code: {
								type: 'string',
								description: 'The code of the invitation link. `null` for guests.',
							},
							domain_name: {
								type: 'string',
								description: 'The domain name of the workspace.',
							},
							domain_discovery: {
								type: 'boolean',
								description:
									'Whether users with an email in the workspace domain can join without an invitation.',
							},
							restrict_email_domains: {
								type: 'boolean',
								description:
									'Whether only users with an email in the workspace domain can join.',
							},
							project_sort_preference: {
								type: 'string',
								description:
									'How the projects of the workspace are sorted, for example `MANUAL`.',
							},
							admin_sorting_applied: {
								type: 'boolean',
								description:
									'Whether the default project ordering set by admins is applied.',
							},
							user_sorting_applied: {
								type: 'boolean',
								description: 'Whether the project ordering of the user is applied.',
							},
							current_active_projects: {
								type: 'number',
								description: 'The number of active projects in the workspace.',
							},
							current_member_count: {
								type: 'number',
								description: 'The number of members of the workspace.',
							},
							current_template_count: {
								type: 'number',
								description: 'The number of templates in the workspace.',
							},
							logo_big: { type: 'string', description: 'The URL of the big logo.' },
							logo_medium: {
								type: 'string',
								description: 'The URL of the medium logo.',
							},
							logo_small: {
								type: 'string',
								description: 'The URL of the small logo.',
							},
							logo_s640: {
								type: 'string',
								description: 'The URL of the square 640px logo.',
							},
							limits: {
								type: 'object',
								description:
									'The features and limits of the plan of the workspace.',
								properties: {
									current: {
										type: 'object',
										description: 'The features and limits of the current plan.',
										properties: {
											plan_name: {
												type: 'string',
												description: 'The name of the plan.',
											},
											admin_tools: {
												type: 'boolean',
												description: 'Whether admin tools are available.',
											},
											advanced_permissions: {
												type: 'boolean',
												description:
													'Whether advanced permissions are available.',
											},
											automatic_backups: {
												type: 'boolean',
												description:
													'Whether backups are created automatically.',
											},
											calendar_layout: {
												type: 'boolean',
												description:
													'Whether the calendar layout is available.',
											},
											durations: {
												type: 'boolean',
												description:
													'Whether task durations are available.',
											},
											email_ai_forwarding: {
												type: 'boolean',
												description:
													'Whether AI email forwarding is available.',
											},
											email_forwarding: {
												type: 'boolean',
												description:
													'Whether the users can add tasks or comments by email.',
											},
											max_collaborators: {
												type: 'number',
												description:
													'The maximum number of collaborators in a project.',
											},
											max_filters: {
												type: 'number',
												description: 'The maximum number of filters.',
											},
											max_folders_per_workspace: {
												type: 'number',
												description:
													'The maximum number of folders in the workspace.',
											},
											max_guests_per_workspace: {
												type: 'number',
												description:
													'The maximum number of guests in the workspace.',
											},
											max_live_notifications: {
												type: 'number',
												description:
													'The maximum number of live notifications.',
											},
											max_monthly_capture: {
												type: 'number',
												description:
													'The maximum number of captures per month.',
											},
											max_monthly_ramble: {
												type: 'number',
												description:
													'The maximum number of rambles per month.',
											},
											max_projects: {
												type: 'number',
												description:
													'The maximum number of projects in the workspace.',
											},
											max_workspace_templates: {
												type: 'number',
												description:
													'The maximum number of templates in the workspace.',
											},
											max_workspace_users: {
												type: 'number',
												description:
													'The maximum number of users in the workspace.',
											},
											max_workspaces: {
												type: 'number',
												description: 'The maximum number of workspaces.',
											},
											project_insights: {
												type: 'boolean',
												description:
													'Whether project insights are available.',
											},
											reminders: {
												type: 'boolean',
												description: 'Whether reminders are available.',
											},
											reminders_at_due: {
												type: 'boolean',
												description:
													'Whether reminders at the due time are available.',
											},
											security_controls: {
												type: 'boolean',
												description:
													'Whether security controls are available.',
											},
											upload_limit_mb: {
												type: 'number',
												description:
													'The maximum size of an uploaded file in MB.',
											},
										},
										required: [],
									},
									next: {
										type: 'object',
										description:
											'The features and limits of the plan available for an upgrade. `null` if there is no upgrade.',
										properties: {
											plan_name: {
												type: 'string',
												description: 'The name of the plan.',
											},
											admin_tools: {
												type: 'boolean',
												description: 'Whether admin tools are available.',
											},
											advanced_permissions: {
												type: 'boolean',
												description:
													'Whether advanced permissions are available.',
											},
											automatic_backups: {
												type: 'boolean',
												description:
													'Whether backups are created automatically.',
											},
											calendar_layout: {
												type: 'boolean',
												description:
													'Whether the calendar layout is available.',
											},
											durations: {
												type: 'boolean',
												description:
													'Whether task durations are available.',
											},
											email_ai_forwarding: {
												type: 'boolean',
												description:
													'Whether AI email forwarding is available.',
											},
											email_forwarding: {
												type: 'boolean',
												description:
													'Whether the users can add tasks or comments by email.',
											},
											max_collaborators: {
												type: 'number',
												description:
													'The maximum number of collaborators in a project.',
											},
											max_filters: {
												type: 'number',
												description: 'The maximum number of filters.',
											},
											max_folders_per_workspace: {
												type: 'number',
												description:
													'The maximum number of folders in the workspace.',
											},
											max_guests_per_workspace: {
												type: 'number',
												description:
													'The maximum number of guests in the workspace.',
											},
											max_live_notifications: {
												type: 'number',
												description:
													'The maximum number of live notifications.',
											},
											max_monthly_capture: {
												type: 'number',
												description:
													'The maximum number of captures per month.',
											},
											max_monthly_ramble: {
												type: 'number',
												description:
													'The maximum number of rambles per month.',
											},
											max_projects: {
												type: 'number',
												description:
													'The maximum number of projects in the workspace.',
											},
											max_workspace_templates: {
												type: 'number',
												description:
													'The maximum number of templates in the workspace.',
											},
											max_workspace_users: {
												type: 'number',
												description:
													'The maximum number of users in the workspace.',
											},
											max_workspaces: {
												type: 'number',
												description: 'The maximum number of workspaces.',
											},
											project_insights: {
												type: 'boolean',
												description:
													'Whether project insights are available.',
											},
											reminders: {
												type: 'boolean',
												description: 'Whether reminders are available.',
											},
											reminders_at_due: {
												type: 'boolean',
												description:
													'Whether reminders at the due time are available.',
											},
											security_controls: {
												type: 'boolean',
												description:
													'Whether security controls are available.',
											},
											upload_limit_mb: {
												type: 'number',
												description:
													'The maximum size of an uploaded file in MB.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							member_count_by_type: {
								type: 'object',
								description: 'The number of users in the workspace by type.',
								properties: {
									admin_count: {
										type: 'number',
										description: 'The number of admins.',
									},
									guest_count: {
										type: 'number',
										description: 'The number of guests.',
									},
									member_count: {
										type: 'number',
										description: 'The number of members.',
									},
								},
								required: [],
							},
							pending_invites_by_type: {
								type: 'object',
								description: 'The number of pending invitations by type.',
								properties: {
									admin_count: {
										type: 'number',
										description: 'The number of admins.',
									},
									guest_count: {
										type: 'number',
										description: 'The number of guests.',
									},
									member_count: {
										type: 'number',
										description: 'The number of members.',
									},
								},
								required: [],
							},
							pending_invitations: {
								type: 'array',
								description: 'The emails of the pending invitations.',
								items: {
									type: 'string',
									description: 'The email of a pending invitation.',
								},
							},
							default_collaborators: {
								type: 'object',
								description:
									'The users and groups added to new workspace projects by default.',
								properties: {
									predefined_group_ids: {
										type: 'array',
										description:
											'The IDs of the predefined groups, for example `MEMBERS_IN_WORKSPACE`.',
										items: {
											type: 'string',
											description: 'The ID of a predefined group.',
										},
									},
									user_ids: {
										type: 'array',
										description: 'The IDs of the users.',
										items: { type: 'string', description: 'The ID of a user.' },
									},
								},
								required: [],
							},
							properties: {
								type: 'object',
								description: 'The configuration properties of the workspace.',
								properties: {
									industry: {
										type: 'string',
										description: 'The industry of the workspace.',
									},
									department: {
										type: 'string',
										description: 'The department of the workspace.',
									},
									organization_size: {
										type: 'string',
										description:
											'The size of the organization, for example `size_1`.',
									},
									intended_team_size: {
										type: 'string',
										description:
											'The number of collaborators the creator intends to work with.',
									},
									type_of_work: {
										type: 'string',
										description:
											'The type of work of the team: `projects`, `processes` or `both`.',
									},
									creator_role: {
										type: 'string',
										description: 'The role of the creator of the workspace.',
									},
									region: {
										type: 'string',
										description: 'The 2-letter continent code.',
									},
									country: {
										type: 'string',
										description: 'The 2-letter ISO 3166-1 country code.',
									},
									default_access_level: {
										type: 'string',
										description:
											'The default access level of new projects: `restricted` or `team`.',
									},
									beta_enabled: {
										type: 'boolean',
										description: 'Whether beta features are enabled.',
									},
									acquisition_source: {
										type: 'string',
										description:
											'The marketing channel that led to the creation of the workspace.',
									},
									hdyhau: {
										type: 'string',
										description:
											'The marketing attribution answer of the creator.',
									},
									acquisition_loop_last_show: {
										type: 'string',
										description:
											'The date when the acquisition loop was last shown.',
									},
									onboarding_filter_id: {
										type: 'number',
										description:
											'The ID of the filter created during onboarding.',
									},
									team_acquisition_cohort: {
										type: 'string',
										description:
											'The acquisition cohort of the workspace team.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				workspace_users: {
					type: 'array',
					description: 'The users of the workspaces. Returned only in incremental sync.',
					items: {
						type: 'object',
						description: 'A workspace user.',
						properties: {
							user_id: { type: 'string', description: 'The ID of the user.' },
							workspace_id: {
								type: 'string',
								description: 'The ID of the workspace.',
							},
							user_email: { type: 'string', description: 'The email of the user.' },
							full_name: {
								type: 'string',
								description: 'The full name of the user.',
							},
							timezone: { type: 'string', description: 'The timezone of the user.' },
							role: {
								type: 'string',
								description:
									'The role of the user in the workspace: `ADMIN`, `MEMBER` or `GUEST`.',
							},
							image_id: {
								type: 'string',
								description:
									'The ID of the avatar of the user. `null` if the user has no avatar.',
							},
							avatar_big: {
								type: 'string',
								description:
									'The URL of the 195x195 avatar. Only if the user has an avatar.',
							},
							avatar_medium: {
								type: 'string',
								description:
									'The URL of the 60x60 avatar. Only if the user has an avatar.',
							},
							avatar_s640: {
								type: 'string',
								description:
									'The URL of the 640x640 avatar. Only if the user has an avatar.',
							},
							avatar_small: {
								type: 'string',
								description:
									'The URL of the 35x35 avatar. Only if the user has an avatar.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the workspace user is deleted.',
							},
						},
						required: [],
					},
				},
				user_item_orders: {
					type: 'array',
					description: 'The places of tasks in the orderings of the user.',
					items: {
						type: 'object',
						description: 'The place of one task in an ordering of the user.',
						properties: {
							item_id: { type: 'string', description: 'The ID of the task.' },
							scope: {
								type: 'string',
								description:
									'The ordering the entry belongs to. Only `day` is currently served.',
							},
							scope_id: {
								type: 'number',
								description: 'The instance of the scope. Always `0` for `day`.',
							},
							order_key: {
								type: 'string',
								description:
									'The fractional-indexing order key. Entries sort by comparing keys lexicographically. `null` for cleared entries.',
							},
							is_deleted: {
								type: 'boolean',
								description: 'Whether the entry is cleared.',
							},
						},
						required: [],
					},
				},
				day_orders: {
					type: 'object',
					description:
						'The order of tasks in the daily agenda. Deprecated, use `user_item_orders` instead.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
];
