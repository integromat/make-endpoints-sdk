// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'addAssignees',
		label: 'Add assignees',
		description: 'Adds assignees to an issue or pull request.',
		context:
			'---\nname: addAssignees\ndescription: This endpoint can be used to add assignees to an issue or pull request\n---\n\nAdds one or more assignees to an assignable object (issue or pull request) and returns the resulting list of assignees; requires the assignable node ID and an array of assignee (user) node IDs',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				assignableId: {
					type: 'string',
					description:
						'The node ID of the assignable object (issue or pull request) to add assignees to.',
				},
				assigneeIds: {
					type: 'array',
					description: 'An array of node IDs of actors (users) to add as assignees.',
					items: { type: 'string' },
				},
			},
			required: ['assignableId', 'assigneeIds'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						addAssigneesToAssignable: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
								},
								assignable: {
									type: 'object',
									description: 'The item that was assigned.',
									properties: {
										assignees: {
											type: 'object',
											description: 'The assignees after the mutation.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of assignees.',
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the user object.',
															},
															login: {
																type: 'string',
																description:
																	'The username of the user.',
															},
															name: {
																type: 'string',
																description:
																	"The user's public profile name.",
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's public avatar.",
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this user.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'addLabels',
		label: 'Add labels',
		description: 'Adds labels to an issue or pull request.',
		context:
			'---\nname: addLabels\ndescription: This endpoint can be used to add labels to an issue or pull request\n---\n\nAdds one or more labels to a labelable object (issue or pull request) without replacing existing labels, and returns the resulting list of labels; requires the labelable node ID and an array of label node IDs',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				labelableId: {
					type: 'string',
					description:
						'The node ID of the labelable object (issue or pull request) to add labels to.',
				},
				labelIds: {
					type: 'array',
					description: 'An array of node IDs of the labels to add.',
					items: { type: 'string' },
				},
			},
			required: ['labelableId', 'labelIds'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						addLabelsToLabelable: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
								},
								labelable: {
									type: 'object',
									description: 'The item that was labeled.',
									properties: {
										labels: {
											type: 'object',
											description:
												'The labels on the labelable after the mutation.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of labels.',
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the label object.',
															},
															name: {
																type: 'string',
																description:
																	'Identifies the label name.',
															},
															color: {
																type: 'string',
																description:
																	'Identifies the label color as a 6 character hex code, without the leading #.',
															},
															description: {
																type: 'string',
																description:
																	'A brief description of this label.',
															},
															isDefault: {
																type: 'boolean',
																description:
																	'Indicates whether or not this is a default label.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this label.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized GraphQL query.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized GraphQL query.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, query, variables\nand operation name) to the GitHub API, mirroring the "Execute a GraphQL Query" module.\n\nThe base URL is `https://api.github.com/graphql`. Provide the query in the query parameter.\nAuthentication is handled automatically via the app\'s connection.\n\nRefer to the [GitHub API reference](https://docs.github.com/en/graphql) for available\nqueries or mutations, required parameters, and response schemas.',
		accounts: { github: { scope: [] } },
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
					description: 'The HTTP request method.',
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
								description: 'GraphQL query string for GET requests.',
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
								description: 'GraphQL query or mutation for POST requests.',
							},
							variablesDataSource: {
								type: 'string',
								description: 'Source format for variables.',
								enum: ['array', 'object'],
							},
							operationName: {
								type: 'string',
								description: 'Name of the target operation to run.',
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
											description: 'List of key-value variable pairs.',
											items: {
												type: 'object',
												description:
													'A single GraphQL variable as a key-value pair',
												properties: {
													key: {
														type: 'string',
														description: 'The key for the variable.',
													},
													type: {
														type: 'string',
														description:
															'The type of the variable value.',
														default: '',
														enum: ['', 'text', 'number', 'boolean'],
													},
												},
												required: [],
												allOf: [
													{
														if: {
															properties: { type: { const: 'text' } },
														},
														then: {
															type: 'object',
															properties: {
																value: {
																	type: 'string',
																	description:
																		'The value for the variable.',
																},
															},
															required: [],
														},
													},
													{
														if: {
															properties: {
																type: { const: 'number' },
															},
														},
														then: {
															type: 'object',
															properties: {
																value: {
																	type: 'number',
																	description:
																		'The value for the variable.',
																},
															},
															required: [],
														},
													},
													{
														if: {
															properties: {
																type: { const: 'boolean' },
															},
														},
														then: {
															type: 'object',
															properties: {
																value: {
																	type: 'boolean',
																	description:
																		'The value for the variable.',
																},
															},
															required: [],
														},
													},
												],
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
												"A single collection, e.g. `{id:123,name:'John', …}`.",
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'createComment',
		label: 'Create a comment',
		description: 'Adds a comment to an issue or pull request.',
		context:
			'---\nname: createComment\ndescription: This endpoint can be used to add a comment to an issue or pull request\n---\n\nAdds a comment to an issue or pull request; requires the subject (issue or pull request) node ID and the comment body (markdown); returns the newly created comment',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				subjectId: {
					type: 'string',
					description:
						'The node ID of the subject (issue or pull request) to add a comment to.',
				},
				body: { type: 'string', description: 'The contents of the comment (markdown).' },
			},
			required: ['subjectId', 'body'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						addComment: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
								},
								commentEdge: {
									type: 'object',
									properties: {
										node: {
											type: 'object',
											description: 'The newly created comment.',
											properties: {
												id: {
													type: 'string',
													description: 'The node ID of the comment.',
												},
												databaseId: {
													type: 'number',
													description:
														'Identifies the primary key from the database.',
												},
												body: {
													type: 'string',
													description: 'The body as Markdown.',
												},
												bodyText: {
													type: 'string',
													description: 'The body rendered to text.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this comment.',
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this comment.',
												},
												createdAt: {
													type: 'string',
													description:
														'Identifies the date and time when the comment was created.',
												},
												updatedAt: {
													type: 'string',
													description:
														'Identifies the date and time when the comment was last updated.',
												},
												publishedAt: {
													type: 'string',
													description:
														'Identifies when the comment was published at.',
												},
												lastEditedAt: {
													type: 'string',
													description:
														'The moment the editor made the last edit.',
												},
												authorAssociation: {
													type: 'string',
													description:
														"Author's association with the subject of the comment.",
												},
												createdViaEmail: {
													type: 'boolean',
													description:
														'Whether the comment was created via an email reply.',
												},
												includesCreatedEdit: {
													type: 'boolean',
													description:
														'Whether the comment was edited and includes an edit with the creation data.',
												},
												isMinimized: {
													type: 'boolean',
													description:
														'Returns whether or not a comment has been minimized.',
												},
												minimizedReason: {
													type: 'string',
													description:
														'Returns why the comment was minimized.',
												},
												viewerDidAuthor: {
													type: 'boolean',
													description:
														'Whether the current viewer authored this comment.',
												},
												author: {
													type: 'object',
													properties: {
														login: {
															type: 'string',
															description:
																'The username of the actor.',
														},
														avatarUrl: {
															type: 'string',
															description:
																"A URL pointing to the actor's public avatar.",
														},
														resourcePath: {
															type: 'string',
															description:
																'The HTTP path for this actor.',
														},
														url: {
															type: 'string',
															description:
																'The HTTP URL for this actor.',
														},
													},
													required: [],
												},
												editor: {
													type: 'object',
													properties: {
														login: {
															type: 'string',
															description:
																'The username of the actor.',
														},
														avatarUrl: {
															type: 'string',
															description:
																"A URL pointing to the actor's public avatar.",
														},
														resourcePath: {
															type: 'string',
															description:
																'The HTTP path for this actor.',
														},
														url: {
															type: 'string',
															description:
																'The HTTP URL for this actor.',
														},
													},
													required: [],
												},
												repository: {
													type: 'object',
													properties: {
														name: {
															type: 'string',
															description:
																'The name of the repository.',
														},
														url: {
															type: 'string',
															description:
																'The HTTP URL of the repository.',
														},
														description: {
															type: 'string',
															description:
																'The description of the repository.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'createIssue',
		label: 'Create an issue',
		description: 'Creates a new issue in a repository.',
		context:
			'---\nname: createIssue\ndescription: This endpoint can be used to create an issue\n---\n\nCreates a new issue in a repository and returns the created issue object; requires the repository node ID; optionally accepts a body, assignees, labels, a milestone, or an issue template\n',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				repositoryId: {
					type: 'string',
					description: 'The node ID of the repository where the issue will be created.',
				},
				body: {
					type: 'string',
					description: 'The body (description) for the issue, as markdown.',
				},
				assigneeIds: {
					type: 'array',
					description: 'An array of node IDs of actors (users) to assign to this issue.',
					items: { type: 'string' },
				},
				labelIds: {
					type: 'array',
					description: 'An array of node IDs of labels to add to this issue.',
					items: { type: 'string' },
				},
				milestoneId: {
					type: 'string',
					description: 'The node ID of the milestone to associate with this issue.',
				},
				issueTemplate: {
					type: 'string',
					description:
						'The name of an issue template in the repository; assigns labels and assignees from the template. Cannot be combined with **Label IDs** or **Assignee IDs**.',
				},
			},
			required: ['repositoryId', 'title'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						createIssue: {
							type: 'object',
							properties: {
								issue: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the issue object.',
										},
										number: {
											type: 'number',
											description: 'Identifies the issue number.',
										},
										author: {
											type: 'object',
											description: 'The actor who authored the issue.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										body: {
											type: 'string',
											description: 'The body as markdown.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this issue.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										publishedAt: {
											type: 'string',
											description:
												'Identifies when the issue was published at.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										lastEditedAt: {
											type: 'string',
											description:
												'The moment the editor made the last edit.',
										},
										closed: {
											type: 'boolean',
											description:
												'Indicates if the object is closed (definition of closed may depend on type).',
										},
										closedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was closed.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'deleteComment',
		label: 'Delete a comment',
		description: 'Deletes an issue or pull request comment.',
		context:
			'---\nname: deleteComment\ndescription: This endpoint can be used to delete an issue or pull request comment\n---\n\nPermanently deletes an issue or pull request comment by its node ID; this action is destructive and cannot be undone; returns the client mutation ID',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The node ID of the issue or pull request comment to delete.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						deleteIssueComment: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'deleteIssue',
		label: 'Delete an issue',
		description: 'Deletes an existing issue.',
		context:
			'---\nname: deleteIssue\ndescription: This endpoint can be used to delete an issue\n---\n\nPermanently deletes an existing issue; requires the issue node ID; this action is destructive and cannot be undone; returns the client mutation ID\n',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueId: {
					type: 'string',
					description:
						'The node ID of the issue to delete. This action is permanent and cannot be undone.',
				},
			},
			required: ['issueId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						deleteIssue: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getAssignee',
		label: 'Get an assignee',
		description: 'Retrieves an existing assignee (user).',
		context:
			'---\nname: getAssignee\ndescription: This endpoint can be used to fetch an assignee\n---\n\nRetrieves a single assignee (user) by its node ID; returns a basic user object',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The node ID of the assignee (user) to retrieve.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						node: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
									description: 'The node ID of the user object.',
								},
								login: { type: 'string', description: 'The username of the user.' },
								name: {
									type: 'string',
									description: "The user's public profile name.",
								},
								bio: {
									type: 'string',
									description: "The user's public profile bio.",
								},
								avatarUrl: {
									type: 'string',
									description: "A URL pointing to the user's public avatar.",
								},
								createdAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was created.',
								},
								email: {
									type: 'string',
									description: "The user's publicly visible email address.",
								},
								twitterUsername: {
									type: 'string',
									description: "The user's Twitter username.",
								},
								updatedAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was last updated.',
								},
								url: { type: 'string', description: 'The HTTP URL for this user.' },
								websiteUrl: {
									type: 'string',
									description:
										"A URL pointing to the user's public website/blog.",
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getBranch',
		label: 'Get a branch',
		description: 'Retrieves an existing branch of a repository.',
		context:
			'---\nname: getBranch\ndescription: This endpoint can be used to fetch a branch\n---\n\nRetrieves a single branch of a repository by its qualified name; returns the ref with its target commit details',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				qualifiedName: {
					type: 'string',
					description:
						'The branch name to retrieve, e.g. `master` or the fully qualified `refs/heads/master`.',
				},
			},
			required: ['owner', 'name', 'qualifiedName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								ref: {
									type: 'object',
									description:
										'The branch (Ref) identified by the qualified name.',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the ref.',
										},
										name: {
											type: 'string',
											description: 'The ref name (e.g. main).',
										},
										prefix: {
											type: 'string',
											description: 'The ref prefix (e.g. refs/heads/).',
										},
										target: {
											type: 'object',
											description: 'The commit the branch points to.',
											properties: {
												oid: {
													type: 'string',
													description: 'The Git object ID.',
												},
												abbreviatedOid: {
													type: 'string',
													description:
														'An abbreviated version of the Git object ID.',
												},
												message: {
													type: 'string',
													description: 'The Git commit message.',
												},
												messageHeadline: {
													type: 'string',
													description: 'The Git commit message headline.',
												},
												committedDate: {
													type: 'string',
													description:
														'The datetime when this commit was committed.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this commit.',
												},
												author: {
													type: 'object',
													description:
														'Authorship details of the commit.',
													properties: {
														name: {
															type: 'string',
															description:
																'The name in the Git commit.',
														},
														email: {
															type: 'string',
															description:
																'The email in the Git commit.',
														},
														date: {
															type: 'string',
															description:
																'The timestamp of the Git action (authoring or committing).',
														},
														avatarUrl: {
															type: 'string',
															description:
																"A URL pointing to the author's public avatar.",
														},
														user: {
															type: 'object',
															description:
																'The GitHub user corresponding to the email field. Null if no such user exists.',
															properties: {
																login: {
																	type: 'string',
																	description:
																		'The username used to login.',
																},
																url: {
																	type: 'string',
																	description:
																		'The HTTP URL for this user.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getComment',
		label: 'Get a comment',
		description: 'Retrieves an issue or pull request comment.',
		context:
			'---\nname: getComment\ndescription: This endpoint can be used to fetch an issue or pull request comment\n---\n\nRetrieves a single issue or pull request comment by its node ID; returns the comment object with author, editor, and repository details',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The node ID of the comment to retrieve.' },
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						node: {
							type: 'object',
							properties: {
								id: { type: 'string', description: 'The node ID of the comment.' },
								databaseId: {
									type: 'number',
									description: 'Identifies the primary key from the database.',
								},
								body: { type: 'string', description: 'The body as Markdown.' },
								bodyText: {
									type: 'string',
									description: 'The body rendered to text.',
								},
								url: {
									type: 'string',
									description: 'The HTTP URL for this comment.',
								},
								resourcePath: {
									type: 'string',
									description: 'The HTTP path for this comment.',
								},
								createdAt: {
									type: 'string',
									description:
										'Identifies the date and time when the comment was created.',
								},
								updatedAt: {
									type: 'string',
									description:
										'Identifies the date and time when the comment was last updated.',
								},
								publishedAt: {
									type: 'string',
									description: 'Identifies when the comment was published at.',
								},
								lastEditedAt: {
									type: 'string',
									description: 'The moment the editor made the last edit.',
								},
								authorAssociation: {
									type: 'string',
									description:
										"Author's association with the subject of the comment.",
								},
								createdViaEmail: {
									type: 'boolean',
									description:
										'Whether the comment was created via an email reply.',
								},
								includesCreatedEdit: {
									type: 'boolean',
									description:
										'Whether the comment was edited and includes an edit with the creation data.',
								},
								isMinimized: {
									type: 'boolean',
									description:
										'Returns whether or not a comment has been minimized.',
								},
								minimizedReason: {
									type: 'string',
									description: 'Returns why the comment was minimized.',
								},
								viewerDidAuthor: {
									type: 'boolean',
									description:
										'Whether the current viewer authored this comment.',
								},
								author: {
									type: 'object',
									properties: {
										login: {
											type: 'string',
											description: 'The username of the actor.',
										},
										avatarUrl: {
											type: 'string',
											description:
												"A URL pointing to the actor's public avatar.",
										},
										resourcePath: {
											type: 'string',
											description: 'The HTTP path for this actor.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this actor.',
										},
									},
									required: [],
								},
								editor: {
									type: 'object',
									properties: {
										login: {
											type: 'string',
											description: 'The username of the actor.',
										},
										avatarUrl: {
											type: 'string',
											description:
												"A URL pointing to the actor's public avatar.",
										},
										resourcePath: {
											type: 'string',
											description: 'The HTTP path for this actor.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this actor.',
										},
									},
									required: [],
								},
								repository: {
									type: 'object',
									properties: {
										name: {
											type: 'string',
											description: 'The name of the repository.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL of the repository.',
										},
										description: {
											type: 'string',
											description: 'The description of the repository.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getGist',
		label: 'Get a gist',
		description: 'Retrieves an existing gist by owner and gist name.',
		context:
			'---\nname: getGist\ndescription: This endpoint can be used to fetch a gist\n---\n\nRetrieves a single gist by its owner login and gist name; returns the gist with its owner, files, dates, and visibility',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				login: {
					type: 'string',
					description: 'The login field of the user that owns the gist.',
				},
				name: {
					type: 'string',
					description: 'The gist name (the identifier in the gist URL).',
				},
			},
			required: ['login', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						user: {
							type: 'object',
							properties: {
								gist: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the gist object.',
										},
										name: { type: 'string', description: 'The gist name.' },
										description: {
											type: 'string',
											description: 'The gist description.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										pushedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the gist was last pushed to.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this gist.',
										},
										resourcePath: {
											type: 'string',
											description: 'The HTML path to this resource.',
										},
										isFork: {
											type: 'boolean',
											description: 'Identifies if the gist is a fork.',
										},
										isPublic: {
											type: 'boolean',
											description: 'Whether the gist is public or not.',
										},
										stargazerCount: {
											type: 'number',
											description:
												'Returns a count of how many stargazers there are on this object.',
										},
										viewerHasStarred: {
											type: 'boolean',
											description:
												'Returns a boolean indicating whether the viewing user has starred this starrable.',
										},
										owner: {
											type: 'object',
											description: 'The gist owner.',
											properties: {
												login: {
													type: 'string',
													description: 'The username used to login.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the owner's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for the owner.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for the owner.',
												},
											},
											required: [],
										},
										files: {
											type: 'array',
											description: "A list of a gist's files.",
											items: {
												type: 'object',
												properties: {
													name: {
														type: 'string',
														description: 'The gist file name.',
													},
													extension: {
														type: 'string',
														description: 'The gist file extension.',
													},
													size: {
														type: 'number',
														description: 'The gist file size in bytes.',
													},
													isImage: {
														type: 'boolean',
														description:
															'Whether the file is an image.',
													},
													isTruncated: {
														type: 'boolean',
														description:
															"Whether the file's contents were truncated.",
													},
													encoding: {
														type: 'string',
														description:
															'The encoding used to encode the file contents.',
													},
													language: {
														type: 'object',
														description:
															'The programming language this file is written in.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The name of the current language.',
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
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'getIssue',
		label: 'Get an issue',
		description: 'Retrieves an existing issue.',
		context:
			'---\nname: getIssue\ndescription: This endpoint can be used to fetch an issue\n---\n\nRetrieves an existing issue; returns a basic issue object',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description: 'The login field of a user or organization.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				issueNumber: { type: 'string', description: 'The number of the issue.' },
			},
			required: ['owner', 'name', 'issueNumber'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								issue: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the issue object.',
										},
										author: {
											type: 'object',
											description: 'The actor who authored the comment.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										body: {
											type: 'string',
											description: 'The body as markdown.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this issue.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										publishedAt: {
											type: 'string',
											description:
												'Identifies when the issue was published at.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										lastEditedAt: {
											type: 'string',
											description:
												'The moment the editor made the last edit.',
										},
										closed: {
											type: 'boolean',
											description:
												'Indicates if the object is closed (definition of closed may depend on type).',
										},
										closedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was closed.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getMilestone',
		label: 'Get a milestone',
		description: 'Retrieves an existing milestone.',
		context:
			'---\nname: getMilestone\ndescription: This endpoint can be used to fetch a milestone\n---\n\nRetrieves a single milestone of a repository by its number; requires the repository owner, name, and milestone number; returns the milestone with its state, progress, dates, and creator',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				number: { type: 'number', description: 'The number of the milestone.' },
			},
			required: ['owner', 'name', 'number'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								milestone: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the milestone object.',
										},
										number: {
											type: 'number',
											description: 'Identifies the number of the milestone.',
										},
										description: {
											type: 'string',
											description:
												'Identifies the description of the milestone.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this milestone.',
										},
										state: {
											type: 'string',
											description:
												'Identifies the state of the milestone (OPEN or CLOSED).',
										},
										closed: {
											type: 'boolean',
											description:
												'Indicates if the object is closed (definition of closed may depend on type).',
										},
										closedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was closed.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										dueOn: {
											type: 'string',
											description:
												'Identifies the due date of the milestone.',
										},
										progressPercentage: {
											type: 'number',
											description:
												'Identifies the percentage complete for the milestone.',
										},
										creator: {
											type: 'object',
											description:
												'Identifies the actor who created the milestone.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'getOrganization',
		label: 'Get an organization',
		description: 'Retrieves an existing organization.',
		context:
			'---\nname: getOrganization\ndescription: This endpoint can be used to fetch an organization\n---\n\nRetrieves an existing organization; returns a basic organization object',
		accounts: { github: { scope: ['read:org'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: { login: { type: 'string', description: "The organization's login." } },
			required: ['login'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						organization: {
							type: 'object',
							properties: {
								avatarUrl: {
									type: 'string',
									description:
										"A URL pointing to the organization's public avatar.",
								},
								name: {
									type: 'string',
									description: "The organization's public profile name.",
								},
								login: {
									type: 'string',
									description: "The organization's login name.",
								},
								description: {
									type: 'string',
									description: "The organization's public profile description.",
								},
								email: {
									type: 'string',
									description: "The organization's public email.",
								},
								createdAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was created.',
								},
								twitterUsername: {
									type: 'string',
									description: "The organization's Twitter username.",
								},
								updatedAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was last updated.',
								},
								url: {
									type: 'string',
									description: 'The HTTP URL for this organization.',
								},
								websiteUrl: {
									type: 'string',
									description: "The organization's public profile URL.",
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getPullRequest',
		label: 'Get a pull request',
		description: 'Retrieves an existing pull request by repository and number.',
		context:
			'---\nname: getPullRequest\ndescription: This endpoint can be used to fetch a pull request\n---\n\nRetrieves a single pull request by repository owner, name, and pull request number; returns the pull request with author, merge details, ref names, and summary counts',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				number: { type: 'number', description: 'The number of the pull request.' },
			},
			required: ['owner', 'name', 'number'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								pullRequest: {
									type: 'object',
									description: 'The pull request identified by the given number.',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the pull request.',
										},
										number: {
											type: 'number',
											description: 'Identifies the pull request number.',
										},
										body: {
											type: 'string',
											description: 'The body as markdown.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this pull request.',
										},
										state: {
											type: 'string',
											description:
												'Identifies the state of the pull request.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										publishedAt: {
											type: 'string',
											description:
												'Identifies when the pull request was published at.',
										},
										lastEditedAt: {
											type: 'string',
											description:
												'The moment the editor made the last edit.',
										},
										closed: {
											type: 'boolean',
											description: 'true if the pull request is closed.',
										},
										closedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was closed.',
										},
										merged: {
											type: 'boolean',
											description:
												'Whether or not the pull request was merged.',
										},
										mergedAt: {
											type: 'string',
											description:
												'The date and time that the pull request was merged.',
										},
										isDraft: {
											type: 'boolean',
											description:
												'Identifies if the pull request is a draft.',
										},
										locked: {
											type: 'boolean',
											description: 'true if the pull request is locked.',
										},
										baseRefName: {
											type: 'string',
											description:
												'Identifies the name of the base Ref associated with the pull request.',
										},
										headRefName: {
											type: 'string',
											description:
												'Identifies the name of the head Ref associated with the pull request.',
										},
										additions: {
											type: 'number',
											description:
												'The number of additions in this pull request.',
										},
										deletions: {
											type: 'number',
											description:
												'The number of deletions in this pull request.',
										},
										changedFiles: {
											type: 'number',
											description:
												'The number of changed files in this pull request.',
										},
										author: {
											type: 'object',
											description: 'The actor who authored the comment.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										mergedBy: {
											type: 'object',
											description: 'The actor who merged the pull request.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										repository: {
											type: 'object',
											description:
												'The repository associated with this node.',
											properties: {
												name: {
													type: 'string',
													description: 'The name of the repository.',
												},
												nameWithOwner: {
													type: 'string',
													description:
														"The repository's name with owner.",
												},
												url: {
													type: 'string',
													description:
														'The HTTP URL for this repository.',
												},
											},
											required: [],
										},
										comments: {
											type: 'object',
											description:
												'A list of comments associated with the pull request.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of items in the connection.',
												},
											},
											required: [],
										},
										commits: {
											type: 'object',
											description:
												"A list of commits present in this pull request's head branch not present in the base branch.",
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of items in the connection.',
												},
											},
											required: [],
										},
										assignees: {
											type: 'object',
											description: 'A list of Users assigned to this object.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of items in the connection.',
												},
											},
											required: [],
										},
										labels: {
											type: 'object',
											description:
												'A list of labels associated with the object.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of items in the connection.',
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'getRelease',
		label: 'Get a release',
		description: 'Retrieves an existing release by repository and tag name.',
		context:
			'---\nname: getRelease\ndescription: This endpoint can be used to fetch a release\n---\n\nRetrieves a single release of a repository by its Git tag name; requires the repository owner, name, and tag name; returns the release with its author, tag, flags, and dates',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				tagName: {
					type: 'string',
					description: 'The name of the Git tag the release is associated with.',
				},
			},
			required: ['owner', 'name', 'tagName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								release: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the release object.',
										},
										name: {
											type: 'string',
											description: 'The title of the release.',
										},
										tagName: {
											type: 'string',
											description: "The name of the release's Git tag.",
										},
										description: {
											type: 'string',
											description: 'The description of the release.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this release.',
										},
										isDraft: {
											type: 'boolean',
											description: 'Whether or not the release is a draft.',
										},
										isPrerelease: {
											type: 'boolean',
											description:
												'Whether or not the release is a prerelease.',
										},
										isLatest: {
											type: 'boolean',
											description:
												'Whether or not the release is the latest release in the repository.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										publishedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the release was published.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										author: {
											type: 'object',
											description: 'The author of the release.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										tag: {
											type: 'object',
											description:
												'The Git tag associated with this release.',
											properties: {
												name: {
													type: 'string',
													description: 'The ref name of the Git tag.',
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'getRepository',
		label: 'Get a repository',
		description: 'Retrieves an existing repository by its owner and repository name.',
		context:
			'---\nname: getRepository\ndescription: This endpoint can be used to fetch a repository\n---\n\nRetrieves an existing repository by its owner and repository name; returns a basic repository object',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description: 'The login field of a user or organization.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				followRenames: {
					type: 'boolean',
					description:
						'Follow repository renames. If disabled, a repository referenced by its old name will return an error.',
					default: true,
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								id: { type: 'string', description: 'The ID of the repository.' },
								createdAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was created.',
								},
								description: {
									type: 'string',
									description: 'The description of the repository.',
								},
								homepageUrl: {
									type: 'string',
									description: "The repository's URL.",
								},
								name: {
									type: 'string',
									description: 'The name of the repository.',
								},
								nameWithOwner: {
									type: 'string',
									description: "The repository's name with owner.",
								},
								owner: {
									type: 'object',
									description: 'The user owner of the repository.',
									properties: {
										avatarUrl: {
											type: 'string',
											description:
												"A URL pointing to the owner's public avatar.",
										},
										login: {
											type: 'string',
											description: 'The username used to login.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for the owner.',
										},
									},
									required: [],
								},
								pushedAt: {
									type: 'string',
									description:
										'Identifies the date and time when the repository was last pushed to.',
								},
								updatedAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was last updated.',
								},
								url: {
									type: 'string',
									description: 'The HTTP URL for this repository.',
								},
								resourcePath: {
									type: 'string',
									description: 'The HTTP path for this repository.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'getUser',
		label: 'Get a user',
		description: 'Retrieves an existing user.',
		context:
			'---\nname: getUser\ndescription: This endpoint can be used to fetch a user\n---\n\nRetrieves an existing user; returns a basic user object',
		accounts: { github: { scope: ['user:email', 'read:user'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: { login: { type: 'string', description: "The user's login." } },
			required: ['login'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						user: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
									description: 'The Node ID of the User object.',
								},
								login: {
									type: 'string',
									description: 'The username used to login.',
								},
								name: {
									type: 'string',
									description: "The user's public profile name.",
								},
								bio: {
									type: 'string',
									description: "The user's public profile bio.",
								},
								avatarUrl: {
									type: 'string',
									description: "A URL pointing to the user's public avatar.",
								},
								createdAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was created.',
								},
								email: {
									type: 'string',
									description: "The user's publicly visible profile email.",
								},
								twitterUsername: {
									type: 'string',
									description: "The user's Twitter username.",
								},
								updatedAt: {
									type: 'string',
									description:
										'Identifies the date and time when the object was last updated.',
								},
								url: { type: 'string', description: 'The HTTP URL for this user.' },
								websiteUrl: {
									type: 'string',
									description:
										"A URL pointing to the user's public website/blog.",
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'listCommits',
		label: 'List commits',
		description: 'Lists the commits of a pull request.',
		context:
			'---\nname: listCommits\ndescription: This endpoint can be used to list the commits of a pull request\n---\n\nLists the commits of a pull request; requires the repository owner, name, and pull request number; returns the commits connection (total count, page info, and commit nodes with author, committer, and change stats)\n',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				number: {
					type: 'number',
					description: 'The number of the pull request whose commits to list.',
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name', 'number'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								pullRequest: {
									type: 'object',
									properties: {
										commits: {
											type: 'object',
											description:
												"A list of commits present in this pull request's head branch not present in the base branch.",
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of commits in the pull request.',
												},
												pageInfo: {
													type: 'object',
													properties: {
														hasNextPage: {
															type: 'boolean',
															description:
																'Whether there are more results after the current page.',
														},
														endCursor: {
															type: 'string',
															description:
																'The cursor to use in the After field to fetch the next page.',
														},
													},
													required: [],
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the pull request commit.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this pull request commit.',
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this pull request commit.',
															},
															commit: {
																type: 'object',
																description:
																	'The Git commit object.',
																properties: {
																	oid: {
																		type: 'string',
																		description:
																			'The Git object ID.',
																	},
																	abbreviatedOid: {
																		type: 'string',
																		description:
																			'An abbreviated version of the Git object ID.',
																	},
																	message: {
																		type: 'string',
																		description:
																			'The Git commit message.',
																	},
																	messageHeadline: {
																		type: 'string',
																		description:
																			'The Git commit message headline.',
																	},
																	committedDate: {
																		type: 'string',
																		description:
																			'The datetime when this commit was committed.',
																	},
																	pushedDate: {
																		type: 'string',
																		description:
																			'The datetime when this commit was pushed.',
																	},
																	url: {
																		type: 'string',
																		description:
																			'The HTTP URL for this commit.',
																	},
																	additions: {
																		type: 'number',
																		description:
																			'The number of additions in this commit.',
																	},
																	deletions: {
																		type: 'number',
																		description:
																			'The number of deletions in this commit.',
																	},
																	changedFiles: {
																		type: 'number',
																		description:
																			'The number of changed files in this commit.',
																	},
																	author: {
																		type: 'object',
																		description:
																			'Authorship details of the commit.',
																		properties: {
																			name: {
																				type: 'string',
																				description:
																					'The name in the Git commit.',
																			},
																			email: {
																				type: 'string',
																				description:
																					'The email in the Git commit.',
																			},
																			date: {
																				type: 'string',
																				description:
																					'The timestamp of the Git action (authoring or committing).',
																			},
																			avatarUrl: {
																				type: 'string',
																				description:
																					"A URL pointing to the author's public avatar.",
																			},
																			user: {
																				type: 'object',
																				description:
																					'The GitHub user corresponding to the email field. Null if no such user exists.',
																				properties: {
																					login: {
																						type: 'string',
																						description:
																							'The username used to login.',
																					},
																					url: {
																						type: 'string',
																						description:
																							'The HTTP URL for this user.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	committer: {
																		type: 'object',
																		description:
																			'Committer details of the commit.',
																		properties: {
																			name: {
																				type: 'string',
																				description:
																					'The name in the Git commit.',
																			},
																			email: {
																				type: 'string',
																				description:
																					'The email in the Git commit.',
																			},
																			date: {
																				type: 'string',
																				description:
																					'The timestamp of the Git action (authoring or committing).',
																			},
																		},
																		required: [],
																	},
																	parents: {
																		type: 'object',
																		description:
																			'The parents of a commit.',
																		properties: {
																			totalCount: {
																				type: 'number',
																				description:
																					'Identifies the total count of items in the connection.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'listForks',
		label: 'List forks',
		description: 'Lists the forks of a repository.',
		context:
			'---\nname: listForks\ndescription: This endpoint can be used to list the forks of a repository\n---\n\nLists the forks of a repository; requires the repository owner and name; returns the repository fork count and the forks connection (total count, page info, and forked repository nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: {
					type: 'string',
					description: 'The name of the repository whose forks to list.',
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								forkCount: {
									type: 'number',
									description:
										'Identifies the total count of direct forked repositories.',
								},
								forks: {
									type: 'object',
									description: 'A list of direct forked repositories.',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of items in the connection.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description: 'The ID of the repository.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													description: {
														type: 'string',
														description:
															'The description of the repository.',
													},
													homepageUrl: {
														type: 'string',
														description: "The repository's URL.",
													},
													name: {
														type: 'string',
														description: 'The name of the repository.',
													},
													nameWithOwner: {
														type: 'string',
														description:
															"The repository's name with owner.",
													},
													owner: {
														type: 'object',
														description:
															'The User owner of the repository.',
														properties: {
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the owner's public avatar.",
															},
															login: {
																type: 'string',
																description:
																	'The username used to login.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for the owner.',
															},
														},
														required: [],
													},
													pushedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the repository was last pushed to.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL for this repository.',
													},
													resourcePath: {
														type: 'string',
														description:
															'The HTTP path for this repository.',
													},
													isPrivate: {
														type: 'boolean',
														description:
															'Identifies if the repository is private or internal.',
													},
													isFork: {
														type: 'boolean',
														description:
															'Identifies if the repository is a fork.',
													},
													forkCount: {
														type: 'number',
														description:
															'Returns how many forks there are of this repository in the whole network.',
													},
													stargazerCount: {
														type: 'number',
														description:
															'Returns a count of how many stargazers there are on this object.',
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'listLabels',
		label: 'List labels',
		description: 'Lists the labels of a repository.',
		context:
			'---\nname: listLabels\ndescription: This endpoint can be used to list the labels of a repository\n---\n\nLists the labels defined in a repository; requires the repository owner and name; returns the labels connection (total count, page info, and label nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description: 'The login field of a user or organization.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								labels: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of labels in the repository.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the label object.',
													},
													name: {
														type: 'string',
														description: 'Identifies the label name.',
													},
													description: {
														type: 'string',
														description:
															'A brief description of this label.',
													},
													color: {
														type: 'string',
														description:
															'Identifies the label color as a 6 character hex code, without the leading #.',
													},
													isDefault: {
														type: 'boolean',
														description:
															'Indicates whether or not this is a default label.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the label was created.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the label was last updated.',
													},
													url: {
														type: 'string',
														description: 'The HTTP URL for this label.',
													},
													resourcePath: {
														type: 'string',
														description:
															'The HTTP path for this label.',
													},
													issues: {
														type: 'object',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of issues with this label.',
															},
														},
														required: [],
													},
													pullRequests: {
														type: 'object',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of pull requests with this label.',
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
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'listOrganizations',
		label: 'List organizations',
		description: 'Retrieves a list of organizations.',
		context:
			'---\nname: listOrganizations\ndescription: This endpoint can be used to fetch a list of organizations\n---\n\nRetrieves a list of organizations',
		accounts: { github: { scope: ['read:org', 'admin:org', 'read:project'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				login: { type: 'string', description: "The organization's login." },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['login'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						user: {
							type: 'object',
							properties: {
								organizations: {
									type: 'object',
									properties: {
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'When paginating forwards, are there more items.',
												},
												endCursor: {
													type: 'string',
													description:
														'When paginating forwards, the cursor to continue.',
												},
											},
											required: [],
										},
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of items in the connection.',
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the organization object.',
													},
													anyPinnableItems: {
														type: 'boolean',
														description:
															'Determine if this repository owner has any items that can be pinned to their profile.',
													},
													avatarUrl: {
														type: 'string',
														description:
															"A URL pointing to the organization's public avatar.",
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													databaseId: {
														type: 'number',
														description:
															'Identifies the primary key from the database.',
													},
													description: {
														type: 'string',
														description:
															"The organization's public profile description.",
													},
													email: {
														type: 'string',
														description:
															"The organization's public email.",
													},
													enterpriseOwners: {
														type: 'object',
														description:
															"A list of owners of the organization's enterprise account.",
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													estimatedNextSponsorsPayoutInCents: {
														type: 'number',
														description:
															'The estimated next GitHub Sponsors payout for this user/organization in cents (USD).',
													},
													hasSponsorsListing: {
														type: 'boolean',
														description:
															'True if this user/organization has a GitHub Sponsors listing.',
													},
													interactionAbility: {
														type: 'string',
														description:
															'The interaction ability settings for this organization.',
													},
													isSponsoringViewer: {
														type: 'boolean',
														description:
															'True if the viewer is sponsored by this user/organization.',
													},
													isVerified: {
														type: 'boolean',
														description:
															'Whether the organization has verified its profile email and website.',
													},
													itemShowcase: {
														type: 'object',
														description:
															'Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity.',
														properties: {
															hasPinnedItems: {
																type: 'boolean',
																description:
																	'Whether or not the owner has pinned any repositories or gists.',
															},
															items: {
																type: 'object',
																description:
																	'The repositories and gists in the showcase.',
																properties: {
																	totalCount: {
																		type: 'number',
																		description:
																			'Identifies the total count of items in the connection.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													location: {
														type: 'string',
														description:
															"The organization's public profile location.",
													},
													login: {
														type: 'string',
														description:
															"The organization's login name.",
													},
													monthlyEstimatedSponsorsIncomeInCents: {
														type: 'number',
														description:
															'The estimated monthly GitHub Sponsors income for this user/organization in cents (USD).',
													},
													name: {
														type: 'string',
														description:
															"The organization's public profile name.",
													},
													newTeamResourcePath: {
														type: 'string',
														description:
															'The HTTP path creating a new team.',
													},
													newTeamUrl: {
														type: 'string',
														description:
															'The HTTP URL creating a new team.',
													},
													organizationBillingEmail: {
														type: 'string',
														description:
															'The billing email for the organization.',
													},
													packages: {
														type: 'object',
														description:
															'A list of packages under the owner.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													pendingMembers: {
														type: 'object',
														description:
															'A list of users who have been invited to join this organization.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													pinnedItemsRemaining: {
														type: 'number',
														description:
															'Returns how many more items this profile owner can pin to their profile.',
													},
													projectsV2: {
														type: 'object',
														description:
															'A list of projects under the owner.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													projectsResourcePath: {
														type: 'string',
														description:
															"The HTTP path listing organization's projects.",
													},
													projectsUrl: {
														type: 'string',
														description:
															"The HTTP URL listing organization's projects.",
													},
													repositories: {
														type: 'object',
														description:
															'A list of repositories that the user owns.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													repositoryDiscussionComments: {
														type: 'object',
														description:
															'Discussion comments this user has authored.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													repositoryDiscussions: {
														type: 'object',
														description:
															'Discussions this user has started.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													resourcePath: {
														type: 'string',
														description:
															'The HTTP path for this organization.',
													},
													teams: {
														type: 'object',
														description:
															'A list of teams in this organization.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													teamsResourcePath: {
														type: 'string',
														description:
															"The HTTP path listing organization's teams.",
													},
													teamsUrl: {
														type: 'string',
														description:
															"The HTTP URL listing organization's teams.",
													},
													twitterUsername: {
														type: 'string',
														description:
															"The organization's Twitter username.",
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL for this organization.',
													},
													viewerCanAdminister: {
														type: 'boolean',
														description:
															'Organization is adminable by the viewer.',
													},
													viewerCanChangePinnedItems: {
														type: 'boolean',
														description:
															'Can the viewer pin repositories and gists to the profile.',
													},
													viewerCanCreateProjects: {
														type: 'boolean',
														description:
															'Can the current viewer create new projects on this owner.',
													},
													viewerCanCreateRepositories: {
														type: 'boolean',
														description:
															'Viewer can create repositories on this organization.',
													},
													viewerCanCreateTeams: {
														type: 'boolean',
														description:
															'Viewer can create teams on this organization.',
													},
													viewerCanSponsor: {
														type: 'boolean',
														description:
															'Whether or not the viewer is able to sponsor this user/organization.',
													},
													viewerIsAMember: {
														type: 'boolean',
														description:
															'Viewer is an active member of this organization.',
													},
													viewerIsSponsoring: {
														type: 'boolean',
														description:
															'True if the viewer is sponsoring this user/organization.',
													},
													websiteUrl: {
														type: 'string',
														description:
															"The organization's public profile URL.",
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'listRepositories',
		label: 'List repositories',
		description: 'Retrieves a list of repositories.',
		context:
			'---\nname: listRepositories\ndescription: This endpoint can be used to fetch a list of repositories\n---\n\nRetrieves a list of repositories',
		accounts: { github: { scope: ['public_repo'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				login: {
					type: 'string',
					description: 'The login field of a user or organization.',
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['login'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						user: {
							type: 'object',
							properties: {
								repositories: {
									type: 'object',
									properties: {
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'When paginating forwards, are there more items.',
												},
												endCursor: {
													type: 'string',
													description:
														'When paginating forwards, the cursor to continue.',
												},
											},
											required: [],
										},
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of items in the connection.',
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													owner: {
														type: 'object',
														description:
															'The User owner of the repository.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The login of the user.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this user.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this user.',
															},
														},
														required: [],
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the repository was created.',
													},
													id: {
														type: 'string',
														description:
															'The Node ID of the Repository object.',
													},
													name: {
														type: 'string',
														description: 'The name of the repository.',
													},
													nameWithOwner: {
														type: 'string',
														description:
															"The repository's name with owner.",
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL for this repository.',
													},
													databaseId: {
														type: 'number',
														description:
															'Identifies the primary key from the database.',
													},
													diskUsage: {
														type: 'number',
														description:
															'The number of kilobytes this repository occupies on disk.',
													},
													forkCount: {
														type: 'number',
														description:
															'Returns how many forks there are of this repository in the whole network.',
													},
													forkingAllowed: {
														type: 'boolean',
														description:
															'Whether this repository allows forks.',
													},
													hasIssuesEnabled: {
														type: 'boolean',
														description:
															'Indicates if the repository has issues feature enabled.',
													},
													hasProjectsEnabled: {
														type: 'boolean',
														description:
															'Indicates if the repository has the Projects feature enabled.',
													},
													hasWikiEnabled: {
														type: 'boolean',
														description:
															'Indicates if the repository has wiki feature enabled.',
													},
													homepageUrl: {
														type: 'string',
														description: "The repository's URL.",
													},
													interactionAbility: {
														type: 'object',
														description:
															'The interaction ability settings for this repository.',
														properties: {
															expiresAt: {
																type: 'string',
																description:
																	'The date and time when the interaction ability expires.',
															},
															limit: {
																type: 'string',
																description:
																	'The limit on interactions allowed for this repository.',
															},
															origin: {
																type: 'string',
																description:
																	'The origin of the interaction ability settings.',
															},
														},
														required: [],
													},
													isArchived: {
														type: 'boolean',
														description:
															'Indicates if the repository is unmaintained.',
													},
													isDisabled: {
														type: 'boolean',
														description:
															'Returns whether or not this repository is disabled.',
													},
													isEmpty: {
														type: 'boolean',
														description:
															'Returns whether or not this repository is empty.',
													},
													isFork: {
														type: 'boolean',
														description:
															'Identifies if the repository is a fork.',
													},
													isInOrganization: {
														type: 'boolean',
														description:
															'Indicates if a repository is either owned by an organization, or is a private fork of an organization repository.',
													},
													isLocked: {
														type: 'boolean',
														description:
															'Indicates if the repository has been locked or not.',
													},
													isSecurityPolicyEnabled: {
														type: 'boolean',
														description:
															'Returns true if this repository has a security policy.',
													},
													isTemplate: {
														type: 'boolean',
														description:
															'Identifies if the repository is a template that can be used to generate new repositories.',
													},
													isUserConfigurationRepository: {
														type: 'boolean',
														description:
															'Indicates whether this is a user configuration repository.',
													},
													latestRelease: {
														type: 'object',
														description:
															'Get the latest release for the repository if one exists.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The name of the release.',
															},
															createdAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the release was created.',
															},
															description: {
																type: 'string',
																description:
																	'The description of the release.',
															},
															publishedAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the release was published.',
															},
															updatedAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the release was last updated.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for the release.',
															},
														},
														required: [],
													},
													lockReason: {
														type: 'string',
														description:
															'The reason the repository has been locked.',
													},
													mergeCommitAllowed: {
														type: 'boolean',
														description:
															'Whether or not PRs are merged with a merge commit on this repository.',
													},
													mirrorUrl: {
														type: 'string',
														description:
															"The repository's original mirror URL.",
													},
													openGraphImageUrl: {
														type: 'string',
														description:
															'The image used to represent this repository in Open Graph data.',
													},
													parent: {
														type: 'object',
														description:
															'The repository parent, if this is a fork.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The name of the parent repository.',
															},
															description: {
																type: 'string',
																description:
																	'The description of the parent repository.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for the parent repository.',
															},
														},
														required: [],
													},
													primaryLanguage: {
														type: 'object',
														description:
															"The primary language of the repository's code.",
														properties: {
															color: {
																type: 'string',
																description:
																	'The color defined for this language.',
															},
															name: {
																type: 'string',
																description:
																	'The name of the language.',
															},
														},
														required: [],
													},
													projectsResourcePath: {
														type: 'string',
														description:
															"The HTTP path listing the repository's projects.",
													},
													projectsUrl: {
														type: 'string',
														description:
															"The HTTP URL listing the repository's projects.",
													},
													pushedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the repository was last pushed to.',
													},
													rebaseMergeAllowed: {
														type: 'boolean',
														description:
															'Whether or not rebase-merging is enabled on this repository.',
													},
													resourcePath: {
														type: 'string',
														description:
															'The HTTP path for this repository.',
													},
													securityPolicyUrl: {
														type: 'string',
														description: 'The security policy URL.',
													},
													shortDescriptionHTML: {
														type: 'string',
														description:
															'A description of the repository, rendered to HTML without any links in it.',
													},
													squashMergeAllowed: {
														type: 'boolean',
														description:
															'Whether or not squash-merging is enabled on this repository.',
													},
													sshUrl: {
														type: 'string',
														description:
															'The SSH URL to clone this repository.',
													},
													stargazerCount: {
														type: 'number',
														description:
															'Returns a count of how many stargazers there are on this object.',
													},
													tempCloneToken: {
														type: 'string',
														description:
															'Temporary authentication token for cloning this repository.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													usesCustomOpenGraphImage: {
														type: 'boolean',
														description:
															"Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar.",
													},
													viewerCanAdminister: {
														type: 'boolean',
														description:
															'Indicates whether the viewer has admin permissions on this repository.',
													},
													viewerCanCreateProjects: {
														type: 'boolean',
														description:
															'Can the current viewer create new projects on this owner.',
													},
													viewerCanSubscribe: {
														type: 'boolean',
														description:
															'Check if the viewer is able to change their subscription status for the repository.',
													},
													viewerCanUpdateTopics: {
														type: 'boolean',
														description:
															'Indicates whether the viewer can update the topics of this repository.',
													},
													viewerDefaultCommitEmail: {
														type: 'string',
														description:
															'The last commit email for the viewer.',
													},
													viewerDefaultMergeMethod: {
														type: 'string',
														description:
															'The last used merge method by the viewer or the default for the repository.',
													},
													viewerHasStarred: {
														type: 'boolean',
														description:
															'Returns a boolean indicating whether the viewing user has starred this starrable.',
													},
													viewerPermission: {
														type: 'string',
														description:
															"The user's permission level on the repository.",
													},
													viewerPossibleCommitEmails: {
														type: 'array',
														description:
															'A list of emails this viewer can commit with.',
													},
													viewerSubscription: {
														type: 'string',
														description:
															'Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.',
													},
													visibility: {
														type: 'string',
														description:
															"Indicates the repository's visibility level.",
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'removeAssignees',
		label: 'Remove assignees',
		description: 'Removes assignees from an issue or pull request.',
		context:
			'---\nname: removeAssignees\ndescription: This endpoint can be used to remove assignees from an issue or pull request\n---\n\nRemoves one or more assignees from an assignable object (issue or pull request) and returns the resulting list of assignees; requires the assignable node ID and an array of assignee (user) node IDs',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				assignableId: {
					type: 'string',
					description:
						'The node ID of the assignable object (issue or pull request) to remove assignees from.',
				},
				assigneeIds: {
					type: 'array',
					description: 'An array of node IDs of actors (users) to remove as assignees.',
					items: { type: 'string' },
				},
			},
			required: ['assignableId', 'assigneeIds'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						removeAssigneesFromAssignable: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
								},
								assignable: {
									type: 'object',
									description: 'The item that was unassigned.',
									properties: {
										assignees: {
											type: 'object',
											description:
												'The assignees remaining after the mutation.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of assignees.',
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the user object.',
															},
															login: {
																type: 'string',
																description:
																	'The username of the user.',
															},
															name: {
																type: 'string',
																description:
																	"The user's public profile name.",
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's public avatar.",
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this user.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'removeLabel',
		label: 'Remove label',
		description: 'Removes labels from an issue or pull request.',
		context:
			'---\nname: removeLabel\ndescription: This endpoint can be used to remove labels from an issue or pull request\n---\n\nRemoves one or more labels from a labelable object (issue or pull request) and returns the resulting list of labels; requires the labelable node ID and an array of label node IDs; this only unassigns the labels from the issue or pull request; it does not delete the label definitions from the repository',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				labelableId: {
					type: 'string',
					description:
						'The node ID of the labelable object (issue or pull request) to remove labels from.',
				},
				labelIds: {
					type: 'array',
					description:
						'An array of node IDs of the labels to remove from the issue or pull request.',
					items: { type: 'string' },
				},
			},
			required: ['labelableId', 'labelIds'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						removeLabelsFromLabelable: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
								},
								labelable: {
									type: 'object',
									description: 'The item that was unlabeled.',
									properties: {
										labels: {
											type: 'object',
											description:
												'The labels remaining on the labelable after the mutation.',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of labels.',
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the label object.',
															},
															name: {
																type: 'string',
																description:
																	'Identifies the label name.',
															},
															color: {
																type: 'string',
																description:
																	'Identifies the label color as a 6 character hex code, without the leading #.',
															},
															description: {
																type: 'string',
																description:
																	'A brief description of this label.',
															},
															isDefault: {
																type: 'boolean',
																description:
																	'Indicates whether or not this is a default label.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this label.',
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchAssignees',
		label: 'Search assignees',
		description: 'Lists the assignees of an issue or pull request.',
		context:
			'---\nname: searchAssignees\ndescription: This endpoint can be used to list the assignees of an issue or pull request\n---\n\nLists the assignees of a given issue or pull request in a repository; requires the repository owner and name, whether to target an issue or a pull request, and its number\n',
		accounts: { github: { scope: ['read:user'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				issueOrPullRequest: {
					type: 'string',
					description: 'Whether to list assignees of an issue or a pull request.',
					enum: ['issue', 'pullRequest'],
				},
				number: { type: 'number', description: 'The number of the issue or pull request.' },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name', 'issueOrPullRequest', 'number'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								pullRequest: {
									type: 'object',
									properties: {
										assignees: {
											type: 'object',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of assignees on the issue or pull request.',
												},
												pageInfo: {
													type: 'object',
													properties: {
														hasNextPage: {
															type: 'boolean',
															description:
																'Whether there are more results after the current page.',
														},
														endCursor: {
															type: 'string',
															description:
																'The cursor to use in the After field to fetch the next page.',
														},
													},
													required: [],
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the user object.',
															},
															login: {
																type: 'string',
																description:
																	'The username of the user.',
															},
															name: {
																type: 'string',
																description:
																	"The user's public profile name.",
															},
															bio: {
																type: 'string',
																description:
																	"The user's public profile bio.",
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's public avatar.",
															},
															createdAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the object was created.',
															},
															email: {
																type: 'string',
																description:
																	"The user's publicly visible email address.",
															},
															twitterUsername: {
																type: 'string',
																description:
																	"The user's Twitter username.",
															},
															updatedAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the object was last updated.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this user.',
															},
															websiteUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's public website/blog.",
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
								issue: {
									type: 'object',
									properties: {
										assignees: {
											type: 'object',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of assignees on the issue or pull request.',
												},
												pageInfo: {
													type: 'object',
													properties: {
														hasNextPage: {
															type: 'boolean',
															description:
																'Whether there are more results after the current page.',
														},
														endCursor: {
															type: 'string',
															description:
																'The cursor to use in the After field to fetch the next page.',
														},
													},
													required: [],
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the user object.',
															},
															login: {
																type: 'string',
																description:
																	'The username of the user.',
															},
															name: {
																type: 'string',
																description:
																	"The user's public profile name.",
															},
															bio: {
																type: 'string',
																description:
																	"The user's public profile bio.",
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's public avatar.",
															},
															createdAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the object was created.',
															},
															email: {
																type: 'string',
																description:
																	"The user's publicly visible email address.",
															},
															twitterUsername: {
																type: 'string',
																description:
																	"The user's Twitter username.",
															},
															updatedAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the object was last updated.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this user.',
															},
															websiteUrl: {
																type: 'string',
																description:
																	"A URL pointing to the user's public website/blog.",
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
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchBranches',
		label: 'Search branches',
		description: 'Lists the branches of a repository.',
		context:
			'---\nname: searchBranches\ndescription: This endpoint can be used to list the branches of a repository\n---\n\nLists the branches (refs under refs/heads/) of a repository; requires the repository owner and name; returns the refs connection (total count, page info, and branch nodes with their target commit)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								refs: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of branches in the repository.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description: 'The node ID of the ref.',
													},
													name: {
														type: 'string',
														description: 'The ref name (e.g. main).',
													},
													prefix: {
														type: 'string',
														description:
															'The ref prefix (e.g. refs/heads/).',
													},
													target: {
														type: 'object',
														description:
															'The commit the branch points to.',
														properties: {
															oid: {
																type: 'string',
																description: 'The Git object ID.',
															},
															abbreviatedOid: {
																type: 'string',
																description:
																	'An abbreviated version of the Git object ID.',
															},
															message: {
																type: 'string',
																description:
																	'The Git commit message.',
															},
															messageHeadline: {
																type: 'string',
																description:
																	'The Git commit message headline.',
															},
															committedDate: {
																type: 'string',
																description:
																	'The datetime when this commit was committed.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this commit.',
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
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchComments',
		label: 'Search comments',
		description: 'Lists the comments of an issue or pull request.',
		context:
			'---\nname: searchComments\ndescription: This endpoint can be used to list the comments of an issue or pull request\n---\n\nLists the comments of a given issue or pull request in a repository; requires the repository owner and name, whether to target an issue or a pull request, and its number; returns the comments connection (total count, page info, and comment nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description: 'The login field of a user or organization.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				issueOrPullRequest: {
					type: 'string',
					description: 'Whether to list comments of an issue or a pull request.',
					enum: ['issue', 'pullRequest'],
				},
				number: { type: 'number', description: 'The number of the issue or pull request.' },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name', 'issueOrPullRequest', 'number'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								issue: {
									type: 'object',
									properties: {
										comments: {
											type: 'object',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of comments on the issue or pull request.',
												},
												pageInfo: {
													type: 'object',
													properties: {
														hasNextPage: {
															type: 'boolean',
															description:
																'Whether there are more results after the current page.',
														},
														endCursor: {
															type: 'string',
															description:
																'The cursor to use in the After field to fetch the next page.',
														},
													},
													required: [],
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the comment.',
															},
															databaseId: {
																type: 'number',
																description:
																	'Identifies the primary key from the database.',
															},
															body: {
																type: 'string',
																description:
																	'The body as Markdown.',
															},
															bodyText: {
																type: 'string',
																description:
																	'The body rendered to text.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this comment.',
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this comment.',
															},
															createdAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the comment was created.',
															},
															updatedAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the comment was last updated.',
															},
															publishedAt: {
																type: 'string',
																description:
																	'Identifies when the comment was published at.',
															},
															lastEditedAt: {
																type: 'string',
																description:
																	'The moment the editor made the last edit.',
															},
															authorAssociation: {
																type: 'string',
																description:
																	"Author's association with the subject of the comment.",
															},
															createdViaEmail: {
																type: 'boolean',
																description:
																	'Whether the comment was created via an email reply.',
															},
															includesCreatedEdit: {
																type: 'boolean',
																description:
																	'Whether the comment was edited and includes an edit with the creation data.',
															},
															isMinimized: {
																type: 'boolean',
																description:
																	'Returns whether or not a comment has been minimized.',
															},
															minimizedReason: {
																type: 'string',
																description:
																	'Returns why the comment was minimized.',
															},
															viewerDidAuthor: {
																type: 'boolean',
																description:
																	'Whether the current viewer authored this comment.',
															},
															author: {
																type: 'object',
																properties: {
																	login: { type: 'string' },
																	avatarUrl: { type: 'string' },
																	resourcePath: {
																		type: 'string',
																	},
																	url: { type: 'string' },
																},
																required: [],
															},
															editor: {
																type: 'object',
																properties: {
																	login: { type: 'string' },
																	avatarUrl: { type: 'string' },
																	resourcePath: {
																		type: 'string',
																	},
																	url: { type: 'string' },
																},
																required: [],
															},
															repository: {
																type: 'object',
																properties: {
																	name: { type: 'string' },
																	url: { type: 'string' },
																	description: { type: 'string' },
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
								pullRequest: {
									type: 'object',
									properties: {
										comments: {
											type: 'object',
											properties: {
												totalCount: {
													type: 'number',
													description:
														'Identifies the total count of comments on the issue or pull request.',
												},
												pageInfo: {
													type: 'object',
													properties: {
														hasNextPage: {
															type: 'boolean',
															description:
																'Whether there are more results after the current page.',
														},
														endCursor: {
															type: 'string',
															description:
																'The cursor to use in the After field to fetch the next page.',
														},
													},
													required: [],
												},
												nodes: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															id: {
																type: 'string',
																description:
																	'The node ID of the comment.',
															},
															databaseId: {
																type: 'number',
																description:
																	'Identifies the primary key from the database.',
															},
															body: {
																type: 'string',
																description:
																	'The body as Markdown.',
															},
															bodyText: {
																type: 'string',
																description:
																	'The body rendered to text.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this comment.',
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this comment.',
															},
															createdAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the comment was created.',
															},
															updatedAt: {
																type: 'string',
																description:
																	'Identifies the date and time when the comment was last updated.',
															},
															publishedAt: {
																type: 'string',
																description:
																	'Identifies when the comment was published at.',
															},
															lastEditedAt: {
																type: 'string',
																description:
																	'The moment the editor made the last edit.',
															},
															authorAssociation: {
																type: 'string',
																description:
																	"Author's association with the subject of the comment.",
															},
															createdViaEmail: {
																type: 'boolean',
																description:
																	'Whether the comment was created via an email reply.',
															},
															includesCreatedEdit: {
																type: 'boolean',
																description:
																	'Whether the comment was edited and includes an edit with the creation data.',
															},
															isMinimized: {
																type: 'boolean',
																description:
																	'Returns whether or not a comment has been minimized.',
															},
															minimizedReason: {
																type: 'string',
																description:
																	'Returns why the comment was minimized.',
															},
															viewerDidAuthor: {
																type: 'boolean',
																description:
																	'Whether the current viewer authored this comment.',
															},
															author: {
																type: 'object',
																properties: {
																	login: { type: 'string' },
																	avatarUrl: { type: 'string' },
																	resourcePath: {
																		type: 'string',
																	},
																	url: { type: 'string' },
																},
																required: [],
															},
															editor: {
																type: 'object',
																properties: {
																	login: { type: 'string' },
																	avatarUrl: { type: 'string' },
																	resourcePath: {
																		type: 'string',
																	},
																	url: { type: 'string' },
																},
																required: [],
															},
															repository: {
																type: 'object',
																properties: {
																	name: { type: 'string' },
																	url: { type: 'string' },
																	description: { type: 'string' },
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
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchCommitComments',
		label: 'Search commit comments',
		description: 'Lists the commit comments of a repository.',
		context:
			'---\nname: searchCommitComments\ndescription: This endpoint can be used to list the commit comments of a repository\n---\n\nLists the commit comments of a repository; requires the repository owner and name; returns the commit comments connection (total count, page info, and comment nodes with author, editor, and the associated commit)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								commitComments: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of commit comments in the repository.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description: 'The node ID of the comment.',
													},
													body: {
														type: 'string',
														description: 'The body as markdown.',
													},
													databaseId: {
														type: 'number',
														description:
															'Identifies the primary key from the database.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the comment was created.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the comment was last updated.',
													},
													publishedAt: {
														type: 'string',
														description:
															'Identifies when the comment was published at.',
													},
													lastEditedAt: {
														type: 'string',
														description:
															'The moment the editor made the last edit.',
													},
													path: {
														type: 'string',
														description:
															'The path to which this comment applies.',
													},
													position: {
														type: 'number',
														description:
															'The line index in the diff to which the comment applies.',
													},
													authorAssociation: {
														type: 'string',
														description:
															"Author's association with the subject of the comment.",
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL permalink for this commit comment.',
													},
													resourcePath: {
														type: 'string',
														description:
															'The HTTP path permalink for this commit comment.',
													},
													author: {
														type: 'object',
														description:
															'The actor who authored the comment.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this actor.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
															},
														},
														required: [],
													},
													editor: {
														type: 'object',
														description:
															'The actor who edited the comment.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this actor.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
															},
														},
														required: [],
													},
													commit: {
														type: 'object',
														description:
															'Identifies the commit associated with the comment, if the commit exists.',
														properties: {
															id: {
																type: 'string',
																description:
																	'The Node ID of the Commit object.',
															},
															message: {
																type: 'string',
																description:
																	'The Git commit message.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this commit.',
															},
															committedDate: {
																type: 'string',
																description:
																	'The datetime when this commit was committed.',
															},
															author: {
																type: 'object',
																description:
																	'Authorship details of the commit.',
																properties: {
																	name: {
																		type: 'string',
																		description:
																			'The name in the Git commit.',
																	},
																	email: {
																		type: 'string',
																		description:
																			'The email in the Git commit.',
																	},
																	date: {
																		type: 'string',
																		description:
																			'The timestamp of the Git action (authoring or committing).',
																	},
																	avatarUrl: {
																		type: 'string',
																		description:
																			"A URL pointing to the author's public avatar.",
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchGists',
		label: 'Search gists',
		description: 'Lists the gists of a user.',
		context:
			'---\nname: searchGists\ndescription: This endpoint can be used to list the gists of a user\n---\n\nLists the gists of a user; requires the user login; supports ordering and pagination; returns the gists connection (total count, page info, and gist nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				login: {
					type: 'string',
					description: 'The login field of the user whose gists are listed.',
				},
				addDirectionAndField: {
					type: 'boolean',
					description: 'Ordering options for gists returned from the connection.',
					'x-nested': {
						type: 'object',
						properties: {
							field: {
								type: 'string',
								description: 'The field to order gists by.',
								enum: ['CREATED_AT', 'PUSHED_AT', 'UPDATED_AT'],
							},
							direction: {
								type: 'string',
								description:
									'The direction in which to order gists by the specified field.',
								enum: ['ASC', 'DESC'],
							},
						},
						required: ['field', 'direction'],
					},
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['login'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						user: {
							type: 'object',
							properties: {
								gists: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of gists of the user.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the gist object.',
													},
													name: {
														type: 'string',
														description: 'The gist name.',
													},
													description: {
														type: 'string',
														description: 'The gist description.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													pushedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the gist was last pushed to.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													url: {
														type: 'string',
														description: 'The HTTP URL for this gist.',
													},
													resourcePath: {
														type: 'string',
														description:
															'The HTML path to this resource.',
													},
													isFork: {
														type: 'boolean',
														description:
															'Identifies if the gist is a fork.',
													},
													isPublic: {
														type: 'boolean',
														description:
															'Whether the gist is public or not.',
													},
													stargazerCount: {
														type: 'number',
														description:
															'Returns a count of how many stargazers there are on this object.',
													},
													viewerHasStarred: {
														type: 'boolean',
														description:
															'Returns a boolean indicating whether the viewing user has starred this starrable.',
													},
													owner: {
														type: 'object',
														description: 'The gist owner.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username used to login.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the owner's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for the owner.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for the owner.',
															},
														},
														required: [],
													},
													files: {
														type: 'array',
														description: "A list of a gist's files.",
														items: {
															type: 'object',
															properties: {
																name: {
																	type: 'string',
																	description:
																		'The gist file name.',
																},
																extension: {
																	type: 'string',
																	description:
																		'The gist file extension.',
																},
																size: {
																	type: 'number',
																	description:
																		'The gist file size in bytes.',
																},
																isImage: {
																	type: 'boolean',
																	description:
																		'Whether the file is an image.',
																},
																isTruncated: {
																	type: 'boolean',
																	description:
																		"Whether the file's contents were truncated.",
																},
																encoding: {
																	type: 'string',
																	description:
																		'The encoding used to encode the file contents.',
																},
																language: {
																	type: 'object',
																	description:
																		'The programming language this file is written in.',
																	properties: {
																		name: {
																			type: 'string',
																			description:
																				'The name of the current language.',
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
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchIssues',
		label: 'Search issues',
		description: 'Searches for issues or lists them all.',
		context:
			'---\nname: searchIssues\ndescription: This endpoint can be used to fetch a list of issues\n---\n\nSearches for issues or lists them all',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description: 'The login field of a user or organization.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				states: {
					type: 'string',
					description: 'The state to filter the issues by.',
					default: '',
					enum: ['', 'OPEN', 'CLOSED'],
				},
				addDirectionAndField: {
					type: 'boolean',
					description: 'Ordering options for issues returned from the connection.',
					'x-nested': {
						type: 'object',
						properties: {
							field: {
								type: 'string',
								description: 'The field in which to order issues by.',
								enum: ['COMMENTS', 'CREATED_AT', 'UPDATED_AT'],
							},
							direction: {
								type: 'string',
								description:
									'The direction in which to order issues by the specified field.',
								enum: ['ASC', 'DESC'],
							},
						},
						required: ['field', 'direction'],
					},
				},
				addFilterBy: {
					type: 'boolean',
					description: 'Filtering options for issues returned from the connection.',
					'x-nested': {
						type: 'object',
						properties: {
							filter: {
								type: 'string',
								description: 'Ways in which to filter lists of issues.',
								default: '',
								enum: [
									'',
									'assignee',
									'createdBy',
									'mentioned',
									'milestoneNumber',
									'labels',
								],
							},
						},
						required: [],
						allOf: [
							{
								if: { properties: { filter: { const: 'assignee' } } },
								then: {
									type: 'object',
									properties: {
										filterValue: {
											type: 'string',
											description: 'List issues assigned to given name.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { filter: { const: 'createdBy' } } },
								then: {
									type: 'object',
									properties: {
										filterValue: {
											type: 'string',
											description: 'List issues created by given name.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { filter: { const: 'mentioned' } } },
								then: {
									type: 'object',
									properties: {
										filterValue: {
											type: 'string',
											description:
												'List issues where the given name is mentioned in the issue.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { filter: { const: 'milestoneNumber' } } },
								then: {
									type: 'object',
									properties: {
										filterValue: {
											type: 'number',
											description: 'List issues by given milestone argument.',
										},
									},
									required: [],
								},
							},
							{
								if: { properties: { filter: { const: 'labels' } } },
								then: {
									type: 'object',
									properties: {
										filterValue: {
											type: 'array',
											description:
												'List issues where the list of label names exist on the issue.',
											items: { type: 'string' },
										},
									},
									required: [],
								},
							},
						],
					},
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								issues: {
									type: 'object',
									properties: {
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'When paginating forwards, are there more items.',
												},
												endCursor: {
													type: 'string',
													description:
														'When paginating forwards, the cursor to continue.',
												},
											},
											required: [],
										},
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of items in the connection.',
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the issue object.',
													},
													number: {
														type: 'number',
														description: 'The number of the issue.',
													},
													author: {
														type: 'object',
														description:
															'The actor who authored the comment.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this actor.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
															},
														},
														required: [],
													},
													body: {
														type: 'string',
														description: 'The body as markdown.',
													},
													url: {
														type: 'string',
														description: 'The HTTP URL for this issue.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													publishedAt: {
														type: 'string',
														description:
															'Identifies when the issue was published at.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													lastEditedAt: {
														type: 'string',
														description:
															'The moment the editor made the last edit.',
													},
													closed: {
														type: 'boolean',
														description:
															'Indicates if the object is closed (definition of closed may depend on type).',
													},
													closedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was closed.',
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchMilestones',
		label: 'Search milestones',
		description: 'Lists the milestones of a repository.',
		context:
			'---\nname: searchMilestones\ndescription: This endpoint can be used to list the milestones of a repository\n---\n\nLists the milestones of a repository; requires the repository owner and name; supports filtering by state, ordering, and pagination; returns the milestones connection (total count, page info, and milestone nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				states: {
					type: 'string',
					description: 'Filter milestones by state.',
					default: '',
					enum: ['', 'OPEN', 'CLOSED'],
				},
				addDirectionAndField: {
					type: 'boolean',
					description: 'Ordering options for milestones returned from the connection.',
					'x-nested': {
						type: 'object',
						properties: {
							field: {
								type: 'string',
								description: 'The field to order milestones by.',
								enum: ['CREATED_AT', 'DUE_DATE', 'NUMBER', 'UPDATED_AT'],
							},
							direction: {
								type: 'string',
								description:
									'The direction in which to order milestones by the specified field.',
								enum: ['ASC', 'DESC'],
							},
						},
						required: ['field', 'direction'],
					},
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								milestones: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of milestones in the repository.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the milestone object.',
													},
													number: {
														type: 'number',
														description:
															'Identifies the number of the milestone.',
													},
													description: {
														type: 'string',
														description:
															'Identifies the description of the milestone.',
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL for this milestone.',
													},
													state: {
														type: 'string',
														description:
															'Identifies the state of the milestone (OPEN or CLOSED).',
													},
													closed: {
														type: 'boolean',
														description:
															'Indicates if the object is closed (definition of closed may depend on type).',
													},
													closedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was closed.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													dueOn: {
														type: 'string',
														description:
															'Identifies the due date of the milestone.',
													},
													progressPercentage: {
														type: 'number',
														description:
															'Identifies the percentage complete for the milestone.',
													},
													creator: {
														type: 'object',
														description:
															'Identifies the actor who created the milestone.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this actor.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
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
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchOrganizationMembers',
		label: 'Search organization members',
		description: 'Searches for organization members or lists them all.',
		context:
			'---\nname: searchOrganizationMembers\ndescription: This endpoint can be used to fetch a list of organization members\n---\n\nSearches for organization members or lists them all',
		accounts: { github: { scope: ['user:email', 'read:user'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				login: { type: 'string', description: "The organization's login." },
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['login'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						organization: {
							type: 'object',
							properties: {
								membersWithRole: {
									type: 'object',
									properties: {
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'When paginating forwards, are there more items.',
												},
												endCursor: {
													type: 'string',
													description:
														'When paginating forwards, the cursor to continue.',
												},
											},
											required: [],
										},
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of items in the connection.',
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The Node ID of the User object.',
													},
													login: {
														type: 'string',
														description: 'The username used to login.',
													},
													name: {
														type: 'string',
														description:
															"The user's public profile name.",
													},
													bio: {
														type: 'string',
														description:
															"The user's public profile bio.",
													},
													avatarUrl: {
														type: 'string',
														description:
															"A URL pointing to the user's public avatar.",
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													email: {
														type: 'string',
														description:
															"The user's publicly visible profile email.",
													},
													twitterUsername: {
														type: 'string',
														description: "The user's Twitter username.",
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													url: {
														type: 'string',
														description: 'The HTTP URL for this user.',
													},
													websiteUrl: {
														type: 'string',
														description:
															"A URL pointing to the user's public website/blog.",
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchPullRequests',
		label: 'Search pull requests',
		description: 'Lists the pull requests of a repository.',
		context:
			'---\nname: searchPullRequests\ndescription: This endpoint can be used to list the pull requests of a repository\n---\n\nLists the pull requests of a repository, optionally filtered by state; requires the repository owner and name; returns the pull requests connection (total count, page info, and pull request nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				states: {
					type: 'string',
					description: 'Filter pull requests by state. Leave empty to return all states.',
					default: '',
					enum: ['', 'OPEN', 'CLOSED', 'MERGED'],
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								pullRequests: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of pull requests in the connection.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the pull request.',
													},
													number: {
														type: 'number',
														description:
															'Identifies the pull request number.',
													},
													body: {
														type: 'string',
														description: 'The body as markdown.',
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL for this pull request.',
													},
													state: {
														type: 'string',
														description:
															'Identifies the state of the pull request.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													publishedAt: {
														type: 'string',
														description:
															'Identifies when the pull request was published at.',
													},
													lastEditedAt: {
														type: 'string',
														description:
															'The moment the editor made the last edit.',
													},
													closed: {
														type: 'boolean',
														description:
															'true if the pull request is closed.',
													},
													closedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was closed.',
													},
													merged: {
														type: 'boolean',
														description:
															'Whether or not the pull request was merged.',
													},
													mergedAt: {
														type: 'string',
														description:
															'The date and time that the pull request was merged.',
													},
													isDraft: {
														type: 'boolean',
														description:
															'Identifies if the pull request is a draft.',
													},
													locked: {
														type: 'boolean',
														description:
															'true if the pull request is locked.',
													},
													baseRefName: {
														type: 'string',
														description:
															'Identifies the name of the base Ref associated with the pull request.',
													},
													headRefName: {
														type: 'string',
														description:
															'Identifies the name of the head Ref associated with the pull request.',
													},
													additions: {
														type: 'number',
														description:
															'The number of additions in this pull request.',
													},
													deletions: {
														type: 'number',
														description:
															'The number of deletions in this pull request.',
													},
													changedFiles: {
														type: 'number',
														description:
															'The number of changed files in this pull request.',
													},
													author: {
														type: 'object',
														description:
															'The actor who authored the comment.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this actor.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
															},
														},
														required: [],
													},
													mergedBy: {
														type: 'object',
														description:
															'The actor who merged the pull request.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
															},
														},
														required: [],
													},
													repository: {
														type: 'object',
														description:
															'The repository associated with this node.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The name of the repository.',
															},
															nameWithOwner: {
																type: 'string',
																description:
																	"The repository's name with owner.",
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this repository.',
															},
														},
														required: [],
													},
													comments: {
														type: 'object',
														description:
															'A list of comments associated with the pull request.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													commits: {
														type: 'object',
														description:
															"A list of commits present in this pull request's head branch not present in the base branch.",
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													assignees: {
														type: 'object',
														description:
															'A list of Users assigned to this object.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
															},
														},
														required: [],
													},
													labels: {
														type: 'object',
														description:
															'A list of labels associated with the object.',
														properties: {
															totalCount: {
																type: 'number',
																description:
																	'Identifies the total count of items in the connection.',
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
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'searchReleases',
		label: 'Search releases',
		description: 'Lists the releases of a repository.',
		context:
			'---\nname: searchReleases\ndescription: This endpoint can be used to list the releases of a repository\n---\n\nLists the releases of a repository; requires the repository owner and name; returns the releases connection (total count, page info, and release nodes)',
		accounts: { github: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The login field of a user or organization that owns the repository.',
				},
				name: { type: 'string', description: 'The name of the repository.' },
				addDirectionAndField: {
					type: 'boolean',
					description: 'Ordering options for releases returned from the connection.',
					'x-nested': {
						type: 'object',
						properties: {
							field: {
								type: 'string',
								description: 'The field to order releases by.',
								enum: ['CREATED_AT', 'NAME'],
							},
							direction: {
								type: 'string',
								description:
									'The direction in which to order releases by the specified field.',
								enum: ['ASC', 'DESC'],
							},
						},
						required: ['field', 'direction'],
					},
				},
				pageLimit: {
					type: 'number',
					description: 'The number of items per page. This field is used for pagination.',
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Returns the elements in the list that come after the specified cursor.',
				},
			},
			required: ['owner', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						repository: {
							type: 'object',
							properties: {
								releases: {
									type: 'object',
									properties: {
										totalCount: {
											type: 'number',
											description:
												'Identifies the total count of releases in the repository.',
										},
										pageInfo: {
											type: 'object',
											properties: {
												hasNextPage: {
													type: 'boolean',
													description:
														'Whether there are more results after the current page.',
												},
												endCursor: {
													type: 'string',
													description:
														'The cursor to use in the After field to fetch the next page.',
												},
											},
											required: [],
										},
										nodes: {
											type: 'array',
											items: {
												type: 'object',
												properties: {
													id: {
														type: 'string',
														description:
															'The node ID of the release object.',
													},
													name: {
														type: 'string',
														description: 'The title of the release.',
													},
													tagName: {
														type: 'string',
														description:
															"The name of the release's Git tag.",
													},
													description: {
														type: 'string',
														description:
															'The description of the release.',
													},
													url: {
														type: 'string',
														description:
															'The HTTP URL for this release.',
													},
													isDraft: {
														type: 'boolean',
														description:
															'Whether or not the release is a draft.',
													},
													isPrerelease: {
														type: 'boolean',
														description:
															'Whether or not the release is a prerelease.',
													},
													isLatest: {
														type: 'boolean',
														description:
															'Whether or not the release is the latest release in the repository.',
													},
													createdAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was created.',
													},
													publishedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the release was published.',
													},
													updatedAt: {
														type: 'string',
														description:
															'Identifies the date and time when the object was last updated.',
													},
													author: {
														type: 'object',
														description: 'The author of the release.',
														properties: {
															login: {
																type: 'string',
																description:
																	'The username of the actor.',
															},
															avatarUrl: {
																type: 'string',
																description:
																	"A URL pointing to the actor's public avatar.",
															},
															resourcePath: {
																type: 'string',
																description:
																	'The HTTP path for this actor.',
															},
															url: {
																type: 'string',
																description:
																	'The HTTP URL for this actor.',
															},
														},
														required: [],
													},
													tag: {
														type: 'object',
														description:
															'The Git tag associated with this release.',
														properties: {
															name: {
																type: 'string',
																description:
																	'The ref name of the Git tag.',
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
			},
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'updateComment',
		label: 'Update a comment',
		description: 'Updates an issue or pull request comment.',
		context:
			'---\nname: updateComment\ndescription: This endpoint can be used to update an issue or pull request comment\n---\n\nUpdates the body of an existing issue or pull request comment; requires the comment node ID and the new body (markdown); returns the updated comment',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The node ID of the issue or pull request comment to update.',
				},
				body: {
					type: 'string',
					description: 'The updated contents of the comment (markdown).',
				},
			},
			required: ['id', 'body'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						updateIssueComment: {
							type: 'object',
							properties: {
								clientMutationId: {
									type: 'string',
									description:
										'A unique identifier for the client performing the mutation.',
								},
								issueComment: {
									type: 'object',
									description: 'The updated comment.',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the comment.',
										},
										databaseId: {
											type: 'number',
											description:
												'Identifies the primary key from the database.',
										},
										body: {
											type: 'string',
											description: 'The body as Markdown.',
										},
										bodyText: {
											type: 'string',
											description: 'The body rendered to text.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this comment.',
										},
										resourcePath: {
											type: 'string',
											description: 'The HTTP path for this comment.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the comment was created.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the comment was last updated.',
										},
										publishedAt: {
											type: 'string',
											description:
												'Identifies when the comment was published at.',
										},
										lastEditedAt: {
											type: 'string',
											description:
												'The moment the editor made the last edit.',
										},
										authorAssociation: {
											type: 'string',
											description:
												"Author's association with the subject of the comment.",
										},
										createdViaEmail: {
											type: 'boolean',
											description:
												'Whether the comment was created via an email reply.',
										},
										includesCreatedEdit: {
											type: 'boolean',
											description:
												'Whether the comment was edited and includes an edit with the creation data.',
										},
										isMinimized: {
											type: 'boolean',
											description:
												'Returns whether or not a comment has been minimized.',
										},
										minimizedReason: {
											type: 'string',
											description: 'Returns why the comment was minimized.',
										},
										viewerDidAuthor: {
											type: 'boolean',
											description:
												'Whether the current viewer authored this comment.',
										},
										author: {
											type: 'object',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										editor: {
											type: 'object',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										repository: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description: 'The name of the repository.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL of the repository.',
												},
												description: {
													type: 'string',
													description:
														'The description of the repository.',
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
			required: [],
		},
	},
	{
		appName: 'github',
		appVersion: 4,
		endpointName: 'updateIssue',
		label: 'Update an issue',
		description: 'Updates an existing issue.',
		context:
			'---\nname: updateIssue\ndescription: This endpoint can be used to update an issue\n---\n\nUpdates an existing issue and returns the updated issue object; requires the issue node ID; optionally updates the title, body, state, assignees, labels, or milestone; array fields (assignees, labels) replace the current values\n',
		accounts: { github: { scope: ['public_repo', 'repo'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The node ID of the issue to modify.' },
				body: {
					type: 'string',
					description: 'The new body (description) for the issue, as markdown.',
				},
				state: {
					type: 'string',
					description: 'The desired issue state.',
					default: '',
					enum: ['', 'OPEN', 'CLOSED'],
				},
				assigneeIds: {
					type: 'array',
					description:
						'An array of node IDs of actors (users) to set as assignees. Replaces the current assignees.',
					items: { type: 'string' },
				},
				labelIds: {
					type: 'array',
					description:
						'An array of node IDs of labels to set on this issue. Replaces the current labels.',
					items: { type: 'string' },
				},
				milestoneId: {
					type: 'string',
					description: 'The node ID of the milestone to associate with this issue.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'object',
					properties: {
						updateIssue: {
							type: 'object',
							properties: {
								issue: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The node ID of the issue object.',
										},
										number: {
											type: 'number',
											description: 'Identifies the issue number.',
										},
										author: {
											type: 'object',
											description: 'The actor who authored the issue.',
											properties: {
												login: {
													type: 'string',
													description: 'The username of the actor.',
												},
												avatarUrl: {
													type: 'string',
													description:
														"A URL pointing to the actor's public avatar.",
												},
												resourcePath: {
													type: 'string',
													description: 'The HTTP path for this actor.',
												},
												url: {
													type: 'string',
													description: 'The HTTP URL for this actor.',
												},
											},
											required: [],
										},
										body: {
											type: 'string',
											description: 'The body as markdown.',
										},
										url: {
											type: 'string',
											description: 'The HTTP URL for this issue.',
										},
										createdAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was created.',
										},
										publishedAt: {
											type: 'string',
											description:
												'Identifies when the issue was published at.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was last updated.',
										},
										lastEditedAt: {
											type: 'string',
											description:
												'The moment the editor made the last edit.',
										},
										closed: {
											type: 'boolean',
											description:
												'Indicates if the object is closed (definition of closed may depend on type).',
										},
										closedAt: {
											type: 'string',
											description:
												'Identifies the date and time when the object was closed.',
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
];
