// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'addComment',
		label: 'Add comment',
		description: 'Adds a comment to an issue.',
		context:
			'---\nname: addComment\ndescription: Adds a comment to an issue.\n---\n\n`Body` must be a valid [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/)\nJSON object — plain text strings are not accepted by the v3 API. Use `Visibility` to restrict the comment\nto a group or project role; omit it for a public comment.\n\nRefer to the [Add comment API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-post)\nfor the full field and response schema.',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				body: {
					description:
						'The comment text, as an [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/) JSON object, e.g. `{"type": "doc", "version": 1, "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Comment text"}]}]}`.',
				},
				visibility: {
					type: 'object',
					description:
						'Restricts who can see the comment, to a group or a project role. Leave empty for a public comment.',
					properties: {
						type: {
							type: 'string',
							description: 'Whether visibility is restricted to a group or a role.',
							default: '',
							enum: ['', 'group', 'role'],
						},
						value: {
							type: 'string',
							description:
								'The name of the group or role that visibility is restricted to.',
						},
						identifier: {
							type: 'string',
							description:
								'The ID of the group or the name of the role that visibility is restricted to. Preferred over `Value` since group names are mutable.',
						},
					},
					required: [],
				},
				properties: {
					type: 'array',
					description: 'Comment properties to set.',
					items: {
						type: 'object',
						description: 'A comment property.',
						properties: {
							key: {
								type: 'string',
								description: 'The key of the comment property.',
							},
							value: { description: 'The value of the comment property.' },
						},
						required: ['key', 'value'],
					},
				},
				jsdPublic: {
					type: 'boolean',
					description:
						'Whether the comment is visible in Jira Service Desk. Defaults to `true` on sites using Jira Service Desk.',
				},
				jsdAuthorCanSeeRequest: {
					type: 'boolean',
					description:
						'Whether the comment was added from an email sent by a person who is not part of the issue, and that person should be able to see the request.',
				},
				expand: {
					type: 'string',
					description:
						'Use `renderedBody` to also return the comment body rendered as HTML in the response.',
				},
			},
			required: ['issueIdOrKey', 'body'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the comment.' },
				self: { type: 'string', description: 'The URL of the comment.' },
				body: { description: 'The comment text, in Atlassian Document Format.' },
				renderedBody: {
					type: 'string',
					description:
						'The rendered (HTML) version of the comment, when `renderedBody` was requested via `Expand`.',
				},
				author: {
					type: 'object',
					description: 'The user who created the comment.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						accountType: {
							type: 'string',
							description: 'The type of account: `atlassian`, `app`, or `customer`.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						self: { type: 'string', description: 'The URL of the user.' },
						timeZone: { type: 'string', description: 'The time zone of the user.' },
					},
					required: [],
				},
				updateAuthor: {
					type: 'object',
					description: 'The user who last updated the comment.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						accountType: {
							type: 'string',
							description: 'The type of account: `atlassian`, `app`, or `customer`.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						self: { type: 'string', description: 'The URL of the user.' },
						timeZone: { type: 'string', description: 'The time zone of the user.' },
					},
					required: [],
				},
				created: {
					type: 'string',
					description: 'The date and time the comment was created.',
				},
				updated: {
					type: 'string',
					description: 'The date and time the comment was last updated.',
				},
				visibility: {
					type: 'object',
					description: 'The group or role the comment is restricted to, if any.',
					properties: {
						type: {
							type: 'string',
							description: 'Whether visibility is restricted to a group or a role.',
						},
						value: { type: 'string', description: 'The name of the group or role.' },
						identifier: {
							type: 'string',
							description: 'The ID of the group or the name of the role.',
						},
					},
					required: [],
				},
				jsdPublic: {
					type: 'boolean',
					description: 'Whether the comment is visible in Jira Service Desk.',
				},
				jsdAuthorCanSeeRequest: {
					type: 'boolean',
					description:
						'Whether the comment was added from an email sent by a person not part of the issue.',
				},
				properties: {
					type: 'array',
					description: 'The comment properties identified in the request.',
					items: {
						type: 'object',
						description: 'A comment property.',
						properties: {
							key: {
								type: 'string',
								description: 'The key of the comment property.',
							},
							value: { description: 'The value of the comment property.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'addWatcher',
		label: 'Add watcher',
		description: 'Adds a watcher to an issue.',
		context:
			'---\nname: addWatcher\ndescription: Adds a watcher to an issue.\n---\n\nAdds the given user as a watcher on the issue. Returns no content on success.\n\nRefer to the [Add watcher API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-watchers/#api-rest-api-3-issue-issueidorkey-watchers-post).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				accountId: {
					type: 'string',
					description: 'The account ID of the user to add as a watcher.',
				},
			},
			required: ['issueIdOrKey', 'accountId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Jira Cloud Platform API, mirroring the "Make an API Call" module.\n\nBase URL depends on the connection\'s auth mode: `https://api.atlassian.com/ex/jira/{cloudId}/rest/api/` for\nOAuth2 connections, or `{serviceUrl}/rest/api/` for Basic connections, where `{serviceUrl}` is the Atlassian\nCloud instance URL configured on the connection (e.g. `https://yoursubdomain.atlassian.net`).\n\nProvide the remaining path — including the API version — in the URL parameter (e.g. `3/myself`).\nAuthentication is handled automatically via the app\'s connection.\n\nRefer to the [Jira Cloud Platform REST API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)\nfor available endpoints, required parameters, and response schemas.',
		accounts: { jira: { scope: [] } },
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
						'Enter the part of the URL that comes after `{serviceUrl}/rest/api/`. Include the API version, e.g. `3/myself`.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'assignIssue',
		label: 'Assign issue',
		description: 'Assigns or unassigns an issue.',
		context:
			"---\nname: assignIssue\ndescription: Assigns or unassigns an issue.\n---\n\nSets the assignee of an issue. Pass a real account ID to assign to a specific user, `-1` to set the\nproject's default (automatic) assignee, or leave `Account ID` empty to unassign the issue entirely.\nReturns no content on success.\n\nRefer to the [Assign issue API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-assignee-put).",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue to assign, e.g. `10000` or `PROJ-1`.',
				},
				accountId: {
					type: 'string',
					description:
						'The account ID of the user to assign the issue to. Use `-1` to set the default (automatic) assignee for the project. Leave empty to unassign the issue.',
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'createComponent',
		label: 'Create component',
		description: 'Creates a component in a project.',
		context:
			'---\nname: createComponent\ndescription: Creates a component in a project.\n---\n\n`Project` and `Name` are required; all other fields are optional. `Project` cannot be changed after\ncreation.\n\nRefer to the [Create component API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-component-post)\nfor the full field and response schema.',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				project: {
					type: 'string',
					description:
						'The key of the project the component is assigned to. Cannot be changed after creation.',
				},
				name: {
					type: 'string',
					description:
						'The unique name for the component in the project. Maximum length 255 characters.',
				},
				description: { type: 'string', description: 'The description for the component.' },
				leadAccountId: {
					type: 'string',
					description: "The account ID of the component's lead user.",
				},
				assigneeType: {
					type: 'string',
					description:
						'The nominal user type used to determine the assignee for issues created with this component.',
					default: '',
					enum: ['', 'PROJECT_DEFAULT', 'COMPONENT_LEAD', 'PROJECT_LEAD', 'UNASSIGNED'],
				},
			},
			required: ['project', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier for the component.' },
				self: { type: 'string', description: 'The URL of the component.' },
				name: {
					type: 'string',
					description: 'The unique name for the component in the project.',
				},
				description: { type: 'string', description: 'The description for the component.' },
				project: {
					type: 'string',
					description: 'The key of the project the component is assigned to.',
				},
				projectId: {
					type: 'number',
					description: 'The ID of the project the component is assigned to.',
				},
				assigneeType: {
					type: 'string',
					description:
						'The nominal user type used to determine the assignee for issues created with this component.',
				},
				realAssigneeType: {
					type: 'string',
					description:
						'The type of the assignee actually assigned, when `Assignee type` cannot identify a valid assignee.',
				},
				isAssigneeTypeValid: {
					type: 'boolean',
					description: 'Whether a user is associated with `Assignee type`.',
				},
				ari: {
					type: 'string',
					description: "The Compass component's ID, if linked to one.",
				},
				metadata: {
					type: 'object',
					description: "The Compass component's metadata, if linked to one.",
					properties: {},
					required: [],
					additionalProperties: true,
				},
				lead: {
					type: 'object',
					description: "The user details for the component's lead user.",
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
				assignee: {
					type: 'object',
					description: 'The details of the user associated with `Assignee type`, if any.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
				realAssignee: {
					type: 'object',
					description:
						'The user actually assigned to issues created with this component, when `Assignee type` cannot identify a valid assignee.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'createFieldOptions',
		label: 'Create field options',
		description: 'Creates options for a custom field context.',
		context:
			'---\nname: createFieldOptions\ndescription: Creates options for a custom field context.\n---\n\nCreates one or more options in a single call. For cascading select fields, set `Parent option ID` on\neach cascading child option.\n\nRefer to the [Create custom field options (context) API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-options--apps-/#api-rest-api-3-field-fieldid-context-contextid-option-post).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fieldId: {
					type: 'string',
					description: 'The ID of the custom field, e.g. `customfield_10001`.',
				},
				contextId: { type: 'number', description: 'The ID of the custom field context.' },
				options: {
					type: 'array',
					description: 'The options to create.',
					items: {
						type: 'object',
						description: 'A custom field option to create.',
						properties: {
							value: {
								type: 'string',
								description: 'The value of the custom field option.',
							},
							disabled: {
								type: 'boolean',
								description: 'Whether the option is disabled.',
							},
							optionId: {
								type: 'string',
								description: 'For cascading options, the ID of the parent option.',
							},
						},
						required: ['value'],
					},
				},
			},
			required: ['fieldId', 'contextId', 'options'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				options: {
					type: 'array',
					description: 'The created custom field options.',
					items: {
						type: 'object',
						description: 'A created custom field option.',
						properties: {
							id: {
								type: 'string',
								description: 'The ID of the custom field option.',
							},
							value: {
								type: 'string',
								description: 'The value of the custom field option.',
							},
							disabled: {
								type: 'boolean',
								description: 'Whether the option is disabled.',
							},
							optionId: {
								type: 'string',
								description: 'For cascading options, the ID of the parent option.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'createIssue',
		label: 'Create issue',
		description: 'Creates a new issue or subtask.',
		context:
			"---\nname: createIssue\ndescription: Creates a new issue.\n---\n\nCreates a new issue or subtask. `Fields` must include at minimum `project` and `issuetype`; which other\nfields are required depends on the project's issue type scheme. Use the vendor's\n[Get create issue metadata](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get)\nAPI to discover the field set for a given project/issue type before calling this Endpoint.\n\nRefer to the [Create issue API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post)\nfor the full field and response schema.",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fields: {
					description:
						'List of issue screen fields to set, as a JSON object mapping field ID (or key) to its value, e.g. `{"project": {"id": "10000"}, "issuetype": {"id": "10001"}, "summary": "New issue"}`. Field IDs vary per project and issue type — use the [Get create issue metadata](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get) API to discover which fields are required and their format.',
				},
				update: {
					description:
						'A JSON object mapping field name to a list of field modification operations (`add`, `set`, `remove`), e.g. `{"labels": [{"add": "triaged"}]}`. Fields present in both `Fields` and `Update` are rejected by the API — use one or the other for a given field. See the [Edit issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-put) documentation for the operation format.',
				},
				historyMetadata: {
					description:
						'Additional issue history details to record with this change, as a JSON object (`type`, `description`, `activityDescription`, `actor`, `generator`, `cause`, `extraData`, etc.).',
				},
				properties: {
					type: 'array',
					description: 'Issue properties to set on the created issue.',
					items: {
						type: 'object',
						description: 'An issue property.',
						properties: {
							key: { type: 'string', description: 'The key of the issue property.' },
							value: { description: 'The value of the issue property.' },
						},
						required: ['key', 'value'],
					},
				},
				transition: {
					type: 'object',
					description:
						'Details of a transition to apply while creating the issue. Optional — only needed to create the issue directly in a non-default status.',
					properties: {
						id: {
							type: 'string',
							description:
								'The ID of the transition. Get available transition IDs from the [Get transitions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-get) endpoint.',
						},
					},
					required: ['id'],
				},
				updateHistory: {
					type: 'boolean',
					description:
						"Whether the project of the created issue is added to the user's **Recently viewed** project list.",
					default: false,
				},
			},
			required: ['fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the created issue.' },
				key: { type: 'string', description: 'The key of the created issue.' },
				self: { type: 'string', description: 'The URL of the created issue.' },
				transition: {
					description:
						'The response code and messages related to any requested transition.',
				},
				watchers: {
					description:
						'The response code and messages related to any requested watchers.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'createIssueLink',
		label: 'Create issue link',
		description: 'Creates a link between two issues.',
		context:
			'---\nname: createIssueLink\ndescription: Creates a link between two issues.\n---\n\nLinks `Inward issue` and `Outward issue` using the given `Link type`. Each issue reference needs only\n`ID` or `Key`, not both. `Link type` needs only `ID` or `Name`. Returns no content on success.\n\nRefer to the [Create issue link API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-post).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				type: {
					type: 'object',
					description: 'The type of issue link to create.',
					properties: {
						id: {
							type: 'string',
							description:
								"The ID of the issue link type. Required when `Name` isn't provided.",
						},
						name: {
							type: 'string',
							description:
								"The name of the issue link type, e.g. `Blocks`. Required when `ID` isn't provided.",
						},
					},
					required: [],
				},
				inwardIssue: {
					type: 'object',
					description:
						'The issue that the link points from (the inward side of the relationship, e.g. the issue that "is blocked by").',
					properties: {
						id: {
							type: 'string',
							description: "The ID of the issue. Required when `Key` isn't provided.",
						},
						key: {
							type: 'string',
							description:
								"The key of the issue, e.g. `PROJ-1`. Required when `ID` isn't provided.",
						},
					},
					required: [],
				},
				outwardIssue: {
					type: 'object',
					description:
						'The issue that the link points to (the outward side of the relationship, e.g. the issue that "blocks").',
					properties: {
						id: {
							type: 'string',
							description: "The ID of the issue. Required when `Key` isn't provided.",
						},
						key: {
							type: 'string',
							description:
								"The key of the issue, e.g. `PROJ-1`. Required when `ID` isn't provided.",
						},
					},
					required: [],
				},
				comment: {
					type: 'object',
					description:
						'An optional comment to add to the issue when the link is created.',
					properties: {
						body: {
							description:
								'The comment text, as an [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/) JSON object.',
						},
						visibility: {
							type: 'object',
							description:
								'Restricts who can see the comment, to a group or a project role.',
							properties: {
								type: {
									type: 'string',
									description:
										'Whether visibility is restricted to a group or a role.',
									default: '',
									enum: ['', 'group', 'role'],
								},
								value: {
									type: 'string',
									description:
										'The name of the group or role that visibility is restricted to.',
								},
								identifier: {
									type: 'string',
									description:
										'The ID of the group or the name of the role that visibility is restricted to.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
			},
			required: ['type', 'inwardIssue', 'outwardIssue'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'createProjectVersion',
		label: 'Create project version',
		description: 'Creates a project version.',
		context:
			"---\nname: createProjectVersion\ndescription: Creates a project version.\n---\n\n`Project ID` and `Name` are required. `Released` and `Move unfixed issues to` are not applicable when\ncreating a version — set them via Update project version once the version exists.\n\nRefer to the [Create version API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-version-post)\nfor the full field and response schema.\n\nIf you get `Project with key 'null' either does not exist or you do not have permission to create versions in it`,\nthe connected account likely lacks the Jira permission to create versions in that project — this message does not mean `Project ID` failed to send.",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				projectId: {
					type: 'number',
					description: 'The ID of the project to attach this version to.',
				},
				name: {
					type: 'string',
					description: 'The unique name of the version. Maximum length 255 characters.',
				},
				description: {
					type: 'string',
					description: 'The description of the version. Maximum size 16,384 bytes.',
				},
				startDate: { type: 'string', description: 'The start date of the version.' },
				releaseDate: { type: 'string', description: 'The release date of the version.' },
				archived: { type: 'boolean', description: 'Whether the version is archived.' },
				driver: {
					type: 'string',
					description: 'The Atlassian account ID of the version driver.',
				},
				expand: {
					type: 'string',
					description:
						'Comma-separated list of extra details to include in the response, e.g. `operations,issuesstatus,driver`.',
				},
			},
			required: ['projectId', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the version.' },
				self: { type: 'string', description: 'The URL of the version.' },
				name: { type: 'string', description: 'The unique name of the version.' },
				description: { type: 'string', description: 'The description of the version.' },
				projectId: {
					type: 'number',
					description: 'The ID of the project this version belongs to.',
				},
				archived: { type: 'boolean', description: 'Whether the version is archived.' },
				released: { type: 'boolean', description: 'Whether the version is released.' },
				overdue: { type: 'boolean', description: 'Whether the version is overdue.' },
				startDate: { type: 'string', description: 'The start date of the version.' },
				releaseDate: { type: 'string', description: 'The release date of the version.' },
				userStartDate: {
					type: 'string',
					description:
						"The start date of the version, formatted per the instance's date format.",
				},
				userReleaseDate: {
					type: 'string',
					description:
						"The release date of the version, formatted per the instance's date format.",
				},
				driver: {
					type: 'string',
					description: 'The Atlassian account ID of the version driver.',
				},
				moveUnfixedIssuesTo: {
					type: 'string',
					description:
						'The URL of the version that unfixed issues are moved to when this version is released.',
				},
				approvers: {
					type: 'array',
					description:
						'The approvers for this version, when `approvers` was requested via `Expand`.',
					items: { description: 'An approver of this version.' },
				},
				operations: {
					type: 'array',
					description:
						'The operations available for this version, when `operations` was requested via `Expand`.',
					items: { description: 'An operation available for this version.' },
				},
				issuesStatusForFixVersion: {
					description:
						'Counts of issues in this version per status category, when `issuesstatus` was requested via `Expand`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteAttachment',
		label: 'Delete attachment',
		description: 'Deletes an attachment.',
		context:
			'---\nname: deleteAttachment\ndescription: Deletes an attachment.\n---\n\nDestructive and irreversible. Deletes the specified attachment. Returns no content on success.\n\nRefer to the [Delete attachment API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-attachments/#api-rest-api-3-attachment-id-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				attachmentId: {
					type: 'string',
					description: 'The ID of the attachment to delete.',
				},
			},
			required: ['attachmentId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteComment',
		label: 'Delete comment',
		description: 'Deletes a comment.',
		context:
			'---\nname: deleteComment\ndescription: Deletes a comment.\n---\n\nDestructive and irreversible. Deletes the specified comment. Returns no content on success.\n\nRefer to the [Delete comment API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-id-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				commentId: { type: 'string', description: 'The ID of the comment to delete.' },
			},
			required: ['issueIdOrKey', 'commentId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteComponent',
		label: 'Delete component',
		description: 'Deletes a component.',
		context:
			'---\nname: deleteComponent\ndescription: Deletes a component.\n---\n\nDestructive and irreversible. Deletes the component. Optionally reassigns its issues to another\ncomponent via `Move issues to component ID`. Returns no content on success.\n\nRefer to the [Delete component API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-component-id-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				componentId: { type: 'string', description: 'The ID of the component to delete.' },
				moveIssuesTo: {
					type: 'string',
					description:
						"The ID of a component to reassign the deleted component's issues to. Leave empty to leave those issues without a component.",
				},
			},
			required: ['componentId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteFieldOption',
		label: 'Delete field option',
		description: 'Deletes a custom field option.',
		context:
			'---\nname: deleteFieldOption\ndescription: Deletes a custom field option.\n---\n\nDestructive and irreversible. Deletes the specified option from the custom field context. Returns no\ncontent on success.\n\nRefer to the [Delete custom field options (context) API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-options--apps-/#api-rest-api-3-field-fieldid-context-contextid-option-optionid-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fieldId: {
					type: 'string',
					description: 'The ID of the custom field, e.g. `customfield_10001`.',
				},
				contextId: {
					type: 'number',
					description: 'The ID of the custom field context to delete the option from.',
				},
				optionId: { type: 'number', description: 'The ID of the option to delete.' },
			},
			required: ['fieldId', 'contextId', 'optionId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteIssue',
		label: 'Delete issue',
		description: 'Deletes an issue.',
		context:
			'---\nname: deleteIssue\ndescription: Deletes an issue.\n---\n\nDestructive and irreversible. Deletes the specified issue. If the issue has subtasks, `Delete subtasks`\nmust be set to `true`, or the request fails. Returns no content on success.\n\nRefer to the [Delete issue API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				deleteSubtasks: {
					type: 'boolean',
					description:
						"Whether the issue's subtasks are deleted when the issue is deleted. If the issue has subtasks and this is `false`, the request fails.",
					default: false,
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteIssueLink',
		label: 'Delete issue link',
		description: 'Deletes an issue link.',
		context:
			'---\nname: deleteIssueLink\ndescription: Deletes an issue link.\n---\n\nDestructive and irreversible. Deletes the specified link between two issues. Returns no content on success.\n\nRefer to the [Delete issue link API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-linkid-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				linkId: { type: 'string', description: 'The ID of the issue link to delete.' },
			},
			required: ['linkId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteProjectVersion',
		label: 'Delete project version',
		description: 'Deletes a project version.',
		context:
			'---\nname: deleteProjectVersion\ndescription: Deletes a project version.\n---\n\nDestructive and irreversible. Deletes the version. Optionally reassigns issues that reference it via\n`Move fix version issues to`/`Move affected version issues to`. Returns no content on success.\n\nRefer to the [Delete version API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-version-id-delete).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				versionId: { type: 'string', description: 'The ID of the version to delete.' },
				moveFixIssuesTo: {
					type: 'string',
					description:
						'The ID of the version to set as `fixVersion` on issues that had the deleted version set. Must be in the same project.',
				},
				moveAffectedIssuesTo: {
					type: 'string',
					description:
						'The ID of the version to set as `affectedVersion` on issues that had the deleted version set. Must be in the same project.',
				},
			},
			required: ['versionId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'deleteWatcher',
		label: 'Delete watcher',
		description: 'Removes a watcher from an issue.',
		context:
			"---\nname: deleteWatcher\ndescription: Removes a watcher from an issue.\n---\n\nRemoves the given user from the issue's watchers. Returns no content on success.\n\nRefer to the [Delete watcher API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-watchers/#api-rest-api-3-issue-issueidorkey-watchers-delete).",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				accountId: {
					type: 'string',
					description: 'The account ID of the user to remove as a watcher.',
				},
			},
			required: ['issueIdOrKey', 'accountId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getComment',
		label: 'Get comment',
		description: 'Returns a comment.',
		context:
			'---\nname: getComment\ndescription: Returns a comment.\n---\n\nRead-only. Returns the specified comment on the issue.\n\nRefer to the [Get comment API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-id-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				commentId: { type: 'string', description: 'The ID of the comment.' },
				expand: {
					type: 'string',
					description:
						'Use `renderedBody` to also return the comment body rendered as HTML in the response.',
				},
			},
			required: ['issueIdOrKey', 'commentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the comment.' },
				self: { type: 'string', description: 'The URL of the comment.' },
				body: { description: 'The comment text, in Atlassian Document Format.' },
				renderedBody: {
					type: 'string',
					description:
						'The rendered (HTML) version of the comment, when `renderedBody` was requested via `Expand`.',
				},
				author: {
					type: 'object',
					description: 'The user who created the comment.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						accountType: {
							type: 'string',
							description: 'The type of account: `atlassian`, `app`, or `customer`.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						self: { type: 'string', description: 'The URL of the user.' },
						timeZone: { type: 'string', description: 'The time zone of the user.' },
					},
					required: [],
				},
				updateAuthor: {
					type: 'object',
					description: 'The user who last updated the comment.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						accountType: {
							type: 'string',
							description: 'The type of account: `atlassian`, `app`, or `customer`.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						self: { type: 'string', description: 'The URL of the user.' },
						timeZone: { type: 'string', description: 'The time zone of the user.' },
					},
					required: [],
				},
				created: {
					type: 'string',
					description: 'The date and time the comment was created.',
				},
				updated: {
					type: 'string',
					description: 'The date and time the comment was last updated.',
				},
				visibility: {
					type: 'object',
					description: 'The group or role the comment is restricted to, if any.',
					properties: {
						type: {
							type: 'string',
							description: 'Whether visibility is restricted to a group or a role.',
						},
						value: { type: 'string', description: 'The name of the group or role.' },
						identifier: {
							type: 'string',
							description: 'The ID of the group or the name of the role.',
						},
					},
					required: [],
				},
				jsdPublic: {
					type: 'boolean',
					description: 'Whether the comment is visible in Jira Service Desk.',
				},
				jsdAuthorCanSeeRequest: {
					type: 'boolean',
					description:
						'Whether the comment was added from an email sent by a person not part of the issue.',
				},
				properties: {
					type: 'array',
					description: 'The comment properties identified in the request.',
					items: {
						type: 'object',
						description: 'A comment property.',
						properties: {
							key: {
								type: 'string',
								description: 'The key of the comment property.',
							},
							value: { description: 'The value of the comment property.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getFieldOptions',
		label: 'Get field options',
		description: 'Returns options for a custom field context.',
		context:
			'---\nname: getFieldOptions\ndescription: Returns options for a custom field context.\n---\n\nRead-only. Offset-based pagination via `Start at`/`Max results`; use `Is last page` to know when to stop.\n\nRefer to the [Get custom field options (context) API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-options--apps-/#api-rest-api-3-field-fieldid-context-contextid-option-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fieldId: {
					type: 'string',
					description: 'The ID of the custom field, e.g. `customfield_10001`.',
				},
				contextId: { type: 'number', description: 'The ID of the custom field context.' },
				optionId: { type: 'number', description: 'Filter results to only this option ID.' },
				onlyOptions: {
					type: 'boolean',
					description:
						'Whether only options (excluding cascading option details) are returned.',
					default: false,
				},
				startAt: {
					type: 'number',
					description: 'The index of the first item to return (page offset).',
					default: 0,
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of options to return per page.',
					default: 100,
				},
			},
			required: ['fieldId', 'contextId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				self: { type: 'string', description: 'The URL of the page.' },
				nextPage: {
					type: 'string',
					description: 'The URL of the next page, if there is one.',
				},
				startAt: { type: 'number', description: 'The index of the first item returned.' },
				maxResults: {
					type: 'number',
					description: 'The maximum number of items that could be returned.',
				},
				total: { type: 'number', description: 'The number of items returned.' },
				isLast: {
					type: 'boolean',
					description: 'Whether this is the last page of results.',
				},
				values: {
					type: 'array',
					description: 'The list of custom field options.',
					items: {
						type: 'object',
						description: 'A custom field option.',
						properties: {
							id: {
								type: 'string',
								description: 'The ID of the custom field option.',
							},
							value: {
								type: 'string',
								description: 'The value of the custom field option.',
							},
							disabled: {
								type: 'boolean',
								description: 'Whether the option is disabled.',
							},
							optionId: {
								type: 'string',
								description:
									'For cascading options, the ID of the custom field option containing this cascading option.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getIssue',
		label: 'Get issue',
		description: 'Returns metadata for an issue.',
		context:
			'---\nname: getIssue\ndescription: Returns metadata for an issue.\n---\n\nRead-only. Returns the requested issue by ID or key. By default only navigable fields are returned —\nuse `Fields` to request specific fields (or `*all`), and `Expand` to include changelog, rendered fields,\nedit metadata, and other extras.\n\nRefer to the [Get issue API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get)\nfor the full parameter and response schema.',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				fields: {
					type: 'array',
					description:
						'A list of fields to return for the issue. Use `*all` to return all fields, `*navigable` for navigable fields only, a field name to include it, or `-fieldname` to exclude it. Leave empty to use the default (`*navigable`).',
					items: {
						type: 'string',
						description:
							'A field name, `*all`, `*navigable`, or `-fieldname` to exclude a field.',
					},
				},
				fieldsByKeys: {
					type: 'boolean',
					description:
						'Whether fields in `Fields` are referenced by their key rather than their ID.',
					default: false,
				},
				expand: {
					type: 'string',
					description:
						'Comma-separated list of extra details to include in the response, e.g. `renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations`.',
				},
				properties: {
					type: 'array',
					description:
						'A list of issue properties to return. Use `*all` to return all issue properties, or a specific property key.',
					items: { type: 'string', description: 'An issue property key, or `*all`.' },
				},
				updateHistory: {
					type: 'boolean',
					description:
						"Whether the project of the viewed issue is added to the user's **Recently viewed** project list.",
					default: false,
				},
				failFast: {
					type: 'boolean',
					description:
						'Whether to fail the whole request if a single field fails to load.',
					default: false,
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the issue.' },
				key: { type: 'string', description: 'The key of the issue.' },
				self: { type: 'string', description: 'The URL of the issue.' },
				expand: {
					type: 'string',
					description: 'Expand options that were included in the response.',
				},
				fields: {
					type: 'object',
					description:
						'The values of the fields requested for the issue. Keys are field IDs (or keys, when `fieldsByKeys` is used); values vary by field type.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				renderedFields: {
					type: 'object',
					description:
						'The rendered (HTML) value of each field present on the issue, when `renderedFields` is requested via `expand`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				properties: {
					type: 'object',
					description: 'The issue properties requested via the `properties` parameter.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				names: {
					type: 'object',
					description:
						'The ID and name of each field present on the issue, when `names` is requested via `expand`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				schema: {
					type: 'object',
					description:
						'The schema describing each field present on the issue, when `schema` is requested via `expand`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				operations: {
					description:
						'The operations that can be performed on the issue, when `operations` is requested via `expand`.',
				},
				editmeta: {
					description:
						'The metadata for the fields on the issue that can be amended, when `editmeta` is requested via `expand`.',
				},
				changelog: {
					description:
						'The changelog of the issue, when `changelog` is requested via `expand`.',
				},
				versionedRepresentations: {
					type: 'object',
					description:
						'The versions of each field on the issue, when `versionedRepresentations` is requested via `expand`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				fieldsToInclude: {
					description:
						'Internal detail of which fields were included, excluded, or requested by keys.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getIssueTransitions',
		label: 'Get issue transitions',
		description: 'Returns the transitions an issue can currently make.',
		context:
			'---\nname: getIssueTransitions\ndescription: Returns the transitions an issue can currently make.\n---\n\nRead-only. Lists the workflow transitions currently available on the issue. Use the returned transition\n`ID` as input to Transition issue.\n\nRefer to the [Get transitions API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				expand: {
					type: 'string',
					description:
						"Use `transitions.fields` to include information about the fields available on each transition's screen.",
				},
				transitionId: {
					type: 'string',
					description: 'Filter the results to only this transition ID.',
				},
				skipRemoteOnlyCondition: {
					type: 'boolean',
					description:
						'Whether transitions with the *Hide From User Condition* are included in the response. Available only to Connect/Forge apps with the *Administer Jira* global permission.',
					default: false,
				},
				includeUnavailableTransitions: {
					type: 'boolean',
					description:
						'Whether details of transitions that fail a condition are included in the response.',
					default: false,
				},
				sortByOpsBarAndStatus: {
					type: 'boolean',
					description:
						'Whether transitions are sorted by ops-bar sequence value first, then category order (To Do, In Progress, Done), rather than only by ops-bar sequence.',
					default: false,
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				expand: {
					type: 'string',
					description: 'Expand options that were included in the response.',
				},
				transitions: {
					type: 'array',
					description: 'The list of transitions available for the issue.',
					items: {
						type: 'object',
						description: 'A transition available for the issue.',
						properties: {
							id: { type: 'string', description: 'The ID of the transition.' },
							name: { type: 'string', description: 'The name of the transition.' },
							to: {
								type: 'object',
								description: 'The status the transition goes to.',
								properties: {
									id: { type: 'string', description: 'The ID of the status.' },
									name: {
										type: 'string',
										description: 'The name of the status.',
									},
									description: {
										type: 'string',
										description: 'The description of the status.',
									},
									iconUrl: {
										type: 'string',
										description: 'The URL of the icon representing the status.',
									},
									self: { type: 'string', description: 'The URL of the status.' },
									statusCategory: {
										description: 'The category assigned to the status.',
									},
								},
								required: [],
							},
							hasScreen: {
								type: 'boolean',
								description:
									'Whether there is a screen associated with the transition.',
							},
							isGlobal: {
								type: 'boolean',
								description:
									'Whether the transition applies to issues regardless of their current status.',
							},
							isInitial: {
								type: 'boolean',
								description:
									'Whether this is the initial transition for the workflow.',
							},
							isAvailable: {
								type: 'boolean',
								description: 'Whether the transition is available to be performed.',
							},
							isConditional: {
								type: 'boolean',
								description:
									'Whether the issue must meet criteria before the transition can be applied.',
							},
							looped: {
								type: 'boolean',
								description:
									'Whether the transition loops back to the same status.',
							},
							fields: {
								type: 'object',
								description:
									'Details of the fields on the transition screen, when `transitions.fields` is requested via `Expand`. Use this to populate `Fields` on Transition issue.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getIssueWatchers',
		label: 'Get issue watchers',
		description: 'Returns the watchers of an issue.',
		context:
			'---\nname: getIssueWatchers\ndescription: Returns the watchers of an issue.\n---\n\nRead-only. Returns the list of users watching the issue, plus the total watch count.\n\nRefer to the [Get issue watchers API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-watchers/#api-rest-api-3-issue-issueidorkey-watchers-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				isWatching: {
					type: 'boolean',
					description: 'Whether the calling user is watching this issue.',
				},
				self: { type: 'string', description: 'The URL of these issue watcher details.' },
				watchCount: {
					type: 'number',
					description: 'The number of users watching this issue.',
				},
				watchers: {
					type: 'array',
					description: 'Details of the users watching this issue.',
					items: {
						type: 'object',
						description: 'A user watching this issue.',
						properties: {
							accountId: {
								type: 'string',
								description: 'The account ID of the user.',
							},
							accountType: {
								type: 'string',
								description:
									'The type of account: `atlassian`, `app`, or `customer`.',
							},
							active: { type: 'boolean', description: 'Whether the user is active.' },
							displayName: {
								type: 'string',
								description: 'The display name of the user.',
							},
							emailAddress: {
								type: 'string',
								description: 'The email address of the user.',
							},
							self: { type: 'string', description: 'The URL of the user.' },
							timeZone: { type: 'string', description: 'The time zone of the user.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getProjectComponents',
		label: 'Get project components',
		description: 'Returns a paginated list of components in a project.',
		context:
			'---\nname: getProjectComponents\ndescription: Returns a paginated list of components in a project.\n---\n\nRead-only. Offset-based pagination via `Start at`/`Max results`; use `Is last page` to know when to stop.\n\nRefer to the [Get project components paginated API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-component-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				projectIdOrKey: {
					type: 'string',
					description: 'The project ID or project key (case sensitive).',
				},
				query: {
					type: 'string',
					description:
						'Filter results by a literal string matched against component `name` or `description` (case insensitive).',
				},
				componentSource: {
					type: 'string',
					description: 'The source of the components to return.',
					default: '',
					enum: ['', 'jira', 'compass', 'auto'],
				},
				orderBy: {
					type: 'string',
					description: 'Order the results by a field.',
					default: '',
					enum: ['', 'description', 'issueCount', 'lead', 'name'],
				},
				startAt: {
					type: 'number',
					description: 'The index of the first item to return (page offset).',
					default: 0,
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of components to return per page.',
					default: 50,
				},
			},
			required: ['projectIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				self: { type: 'string', description: 'The URL of the page.' },
				nextPage: {
					type: 'string',
					description: 'The URL of the next page, if there is one.',
				},
				startAt: { type: 'number', description: 'The index of the first item returned.' },
				maxResults: {
					type: 'number',
					description: 'The maximum number of items that could be returned.',
				},
				total: { type: 'number', description: 'The number of items returned.' },
				isLast: {
					type: 'boolean',
					description: 'Whether this is the last page of results.',
				},
				values: {
					type: 'array',
					description: 'The list of components.',
					items: {
						type: 'object',
						description: 'A project component.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the component.',
							},
							self: { type: 'string', description: 'The URL of the component.' },
							name: { type: 'string', description: 'The name of the component.' },
							description: {
								type: 'string',
								description: 'The description of the component.',
							},
							project: {
								type: 'string',
								description: 'The key of the project the component is assigned to.',
							},
							projectId: {
								type: 'number',
								description: 'The ID of the project the component is assigned to.',
							},
							assigneeType: {
								type: 'string',
								description:
									'The nominal user type used to determine the assignee for issues created with this component.',
							},
							isAssigneeTypeValid: {
								type: 'boolean',
								description: 'Whether a user is associated with `Assignee type`.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getProjectVersions',
		label: 'Get project versions',
		description: 'Returns a paginated list of versions in a project.',
		context:
			'---\nname: getProjectVersions\ndescription: Returns a paginated list of versions in a project.\n---\n\nRead-only. Offset-based pagination via `Start at`/`Max results`; use `Is last page` to know when to stop.\n\nRefer to the [Get project versions paginated API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-project-projectidorkey-version-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				projectIdOrKey: {
					type: 'string',
					description: 'The project ID or project key (case sensitive).',
				},
				query: {
					type: 'string',
					description:
						'Filter results by a literal string matched against version `name` or `description` (case insensitive).',
				},
				status: {
					type: 'array',
					description: 'Filter results by version status.',
					items: {
						type: 'string',
						description: 'A version status.',
						default: '',
						enum: ['', 'released', 'unreleased', 'archived'],
					},
				},
				orderBy: {
					type: 'string',
					description: 'Order the results by a field.',
					default: '',
					enum: [
						'',
						'description',
						'-description',
						'name',
						'-name',
						'releaseDate',
						'-releaseDate',
						'sequence',
						'-sequence',
						'startDate',
						'-startDate',
					],
				},
				expand: {
					type: 'string',
					description:
						'Comma-separated list of extra details to include in the response, e.g. `operations,issuesstatus,driver`.',
				},
				startAt: {
					type: 'number',
					description: 'The index of the first item to return (page offset).',
					default: 0,
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of versions to return per page.',
					default: 50,
				},
			},
			required: ['projectIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				self: { type: 'string', description: 'The URL of the page.' },
				nextPage: {
					type: 'string',
					description: 'The URL of the next page, if there is one.',
				},
				startAt: { type: 'number', description: 'The index of the first item returned.' },
				maxResults: {
					type: 'number',
					description: 'The maximum number of items that could be returned.',
				},
				total: { type: 'number', description: 'The number of items returned.' },
				isLast: {
					type: 'boolean',
					description: 'Whether this is the last page of results.',
				},
				values: {
					type: 'array',
					description: 'The list of versions.',
					items: {
						type: 'object',
						description: 'A project version.',
						properties: {
							id: { type: 'string', description: 'The ID of the version.' },
							self: { type: 'string', description: 'The URL of the version.' },
							name: { type: 'string', description: 'The name of the version.' },
							description: {
								type: 'string',
								description: 'The description of the version.',
							},
							projectId: {
								type: 'number',
								description: 'The ID of the project this version belongs to.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the version is archived.',
							},
							released: {
								type: 'boolean',
								description: 'Whether the version is released.',
							},
							overdue: {
								type: 'boolean',
								description: 'Whether the version is overdue.',
							},
							startDate: {
								type: 'string',
								description: 'The start date of the version.',
							},
							releaseDate: {
								type: 'string',
								description: 'The release date of the version.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'getUser',
		label: 'Get user',
		description: 'Returns a user.',
		context:
			'---\nname: getUser\ndescription: Returns a user.\n---\n\nRead-only. Returns the user matching the given `Account ID`.\n\nRefer to the [Get user API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				accountId: {
					type: 'string',
					description:
						'The account ID of the user, which uniquely identifies the user across all Atlassian products, e.g. `5b10ac8d82e05b22cc7d4ef5`.',
				},
				expand: {
					type: 'string',
					description:
						'Use `groups` and/or `applicationRoles` to include those details in the response.',
				},
			},
			required: ['accountId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				accountId: { type: 'string', description: 'The account ID of the user.' },
				accountType: {
					type: 'string',
					description: 'The type of account: `atlassian`, `app`, or `customer`.',
				},
				active: { type: 'boolean', description: 'Whether the user is active.' },
				appType: {
					type: 'string',
					description:
						'The app type of the account, when `accountType` is `app`: `service` or `agent`.',
				},
				displayName: { type: 'string', description: 'The display name of the user.' },
				emailAddress: {
					type: 'string',
					description:
						"The email address of the user. May be null depending on the user's privacy settings.",
				},
				self: { type: 'string', description: 'The URL of the user.' },
				locale: {
					type: 'string',
					description:
						"The locale of the user. May be null depending on the user's privacy settings.",
				},
				timeZone: {
					type: 'string',
					description: "The time zone specified in the user's profile.",
				},
				guest: { type: 'boolean', description: 'Whether the user is a guest.' },
				expand: {
					type: 'string',
					description: 'Expand options that were included in the response.',
				},
				avatarUrls: {
					type: 'object',
					description: "The user's avatar in various sizes.",
					properties: {
						'16x16': {
							type: 'string',
							description: 'The URL of the 16x16 pixel avatar.',
						},
						'24x24': {
							type: 'string',
							description: 'The URL of the 24x24 pixel avatar.',
						},
						'32x32': {
							type: 'string',
							description: 'The URL of the 32x32 pixel avatar.',
						},
						'48x48': {
							type: 'string',
							description: 'The URL of the 48x48 pixel avatar.',
						},
					},
					required: [],
				},
				groups: {
					description:
						'The groups the user belongs to, when `groups` was requested via `Expand`.',
				},
				applicationRoles: {
					description:
						'The application roles the user is assigned to, when `applicationRoles` was requested via `Expand`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'listComments',
		label: 'List comments',
		description: 'Returns comments on an issue.',
		context:
			'---\nname: listComments\ndescription: Returns comments on an issue.\n---\n\nRead-only. Offset-based pagination via `Start at`/`Max results`; use `Total` to know when to stop paging.\n\nRefer to the [Get comments API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-get).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				expand: {
					type: 'string',
					description:
						'Use `renderedBody` to also return each comment body rendered as HTML in the response.',
				},
				orderBy: {
					type: 'string',
					description: 'Order comments by their created date.',
					default: '',
					enum: ['', 'created', '-created'],
				},
				startAt: {
					type: 'number',
					description: 'The index of the first item to return (page offset).',
					default: 0,
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of comments to return per page.',
					default: 100,
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				comments: {
					type: 'array',
					description: 'The list of comments.',
					items: {
						type: 'object',
						description: 'A comment on the issue.',
						properties: {
							id: { type: 'string', description: 'The ID of the comment.' },
							self: { type: 'string', description: 'The URL of the comment.' },
							body: {
								description: 'The comment text, in Atlassian Document Format.',
							},
							renderedBody: {
								type: 'string',
								description:
									'The rendered (HTML) version of the comment, when `renderedBody` was requested via `Expand`.',
							},
							author: {
								type: 'object',
								description: 'The user who created the comment.',
								properties: {
									accountId: {
										type: 'string',
										description: 'The account ID of the user.',
									},
									displayName: {
										type: 'string',
										description: 'The display name of the user.',
									},
									emailAddress: {
										type: 'string',
										description: 'The email address of the user.',
									},
									active: {
										type: 'boolean',
										description: 'Whether the user is active.',
									},
								},
								required: [],
							},
							created: {
								type: 'string',
								description: 'The date and time the comment was created.',
							},
							updated: {
								type: 'string',
								description: 'The date and time the comment was last updated.',
							},
							visibility: {
								type: 'object',
								description:
									'The group or role the comment is restricted to, if any.',
								properties: {
									type: {
										type: 'string',
										description:
											'Whether visibility is restricted to a group or a role.',
									},
									value: {
										type: 'string',
										description: 'The name of the group or role.',
									},
									identifier: {
										type: 'string',
										description: 'The ID of the group or the name of the role.',
									},
								},
								required: [],
							},
							jsdPublic: {
								type: 'boolean',
								description: 'Whether the comment is visible in Jira Service Desk.',
							},
						},
						required: [],
					},
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of items that could be returned.',
				},
				startAt: { type: 'number', description: 'The index of the first item returned.' },
				total: { type: 'number', description: 'The number of items returned.' },
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'listUsers',
		label: 'List users',
		description: 'Returns a paginated list of all users, in the order they were created.',
		context:
			"---\nname: listUsers\ndescription: Returns a paginated list of all users, in the order they were created.\n---\n\nRead-only. The output is a bare JSON array of users, matching the vendor API's response shape.\nOffset-based pagination via `Start at`/`Max results`.\n\nRefer to the [Get all users API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-users-get).",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				startAt: {
					type: 'number',
					description: 'The index of the first item to return (page offset).',
					default: 0,
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of users to return per page. Limited to 1000.',
					default: 50,
				},
			},
			required: [],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'reorderFieldOptions',
		label: 'Reorder field options',
		description: 'Reorders custom field options.',
		context:
			'---\nname: reorderFieldOptions\ndescription: Reorders custom field options.\n---\n\nEither `Position` or `After option ID` is required (not both). Returns no content on success.\n\nRefer to the [Reorder custom field options (context) API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-options--apps-/#api-rest-api-3-field-fieldid-context-contextid-option-move-put).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fieldId: {
					type: 'string',
					description: 'The ID of the custom field, e.g. `customfield_10001`.',
				},
				contextId: { type: 'number', description: 'The ID of the custom field context.' },
				customFieldOptionIds: {
					type: 'array',
					description:
						'The IDs of the custom field options to move, in the order they should end up in after the move. Must contain either custom field options or cascading options, not both.',
					items: { type: 'string', description: 'The ID of a custom field option.' },
				},
				position: {
					type: 'string',
					description:
						"The position to move the options to. Required when `After option ID` isn't provided.",
					default: '',
					enum: ['', 'First', 'Last'],
				},
				after: {
					type: 'string',
					description:
						"The ID of the custom field option (or cascading option) to place the moved options after. Required when `Position` isn't provided.",
				},
			},
			required: ['fieldId', 'contextId', 'customFieldOptionIds'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'searchIssues',
		label: 'Search issues',
		description: 'Searches for issues using JQL.',
		context:
			"---\nname: searchIssues\ndescription: Searches for issues using JQL.\n---\n\nRead-only. Uses Jira's enhanced (token-based) search — `JQL` must include a bounded restriction (e.g. a\nproject or date clause); unbounded queries are rejected. Pagination is token-based: pass the previous\nresponse's `Next page token` back in as `Next page token` to fetch subsequent pages; `Is last page`\nindicates when to stop.\n\nRefer to the [Enhanced search API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-jql-get)\nfor JQL syntax and the full response schema.",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				jql: {
					type: 'string',
					description:
						'A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. Must include a bounded search restriction (e.g. a `project`, `assignee`, or date clause) — unbounded queries are rejected for performance reasons.',
				},
				nextPageToken: {
					type: 'string',
					description:
						"Token for the page to fetch, taken from a previous response's `Next page token` output. Omit to fetch the first page.",
				},
				maxResults: {
					type: 'number',
					description:
						'The maximum number of issues to return per page. The API may return fewer than requested when many fields or properties are requested.',
					default: 50,
				},
				fields: {
					type: 'array',
					description:
						'A list of fields to return for each issue. Use `*all` to return all fields, `*navigable` for navigable fields only, a field name to include it, or `-fieldname` to exclude it.',
					items: {
						type: 'string',
						description:
							'A field name, `*all`, `*navigable`, or `-fieldname` to exclude a field.',
					},
				},
				expand: {
					type: 'string',
					description:
						'Comma-delimited list of extra details to include in the response, e.g. `names,schema,transitions,renderedFields`.',
				},
				properties: {
					type: 'array',
					description: 'Up to 5 issue properties to include in the results.',
					items: { type: 'string', description: 'An issue property key.' },
				},
				fieldsByKeys: {
					type: 'boolean',
					description:
						'Whether fields in `Fields` are referenced by their key rather than their ID.',
					default: false,
				},
				failFast: {
					type: 'boolean',
					description:
						'Whether to fail the whole request early if not all field data can be retrieved.',
					default: false,
				},
				reconcileIssues: {
					type: 'array',
					description:
						'Up to 50 issue IDs requiring strong consistency, to be reconciled with the search results. Must be consistent across paginated requests.',
					items: { type: 'string', description: 'An issue ID to reconcile.' },
				},
				includeArchivedProjects: {
					type: 'boolean',
					description:
						'Whether to also return issues that belong to archived projects. Excluded by default.',
					default: false,
				},
			},
			required: ['jql'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				isLast: {
					type: 'boolean',
					description: 'Whether this is the last page of the paginated response.',
				},
				issues: {
					type: 'array',
					description: 'The list of issues found by the search.',
					items: {
						type: 'object',
						description: 'An issue matching the search.',
						properties: {
							id: { type: 'string', description: 'The ID of the issue.' },
							key: { type: 'string', description: 'The key of the issue.' },
							self: { type: 'string', description: 'The URL of the issue.' },
							expand: {
								type: 'string',
								description: 'Expand options that were included in the response.',
							},
							fields: {
								type: 'object',
								description:
									'The values of the fields requested for the issue. Keys are field IDs (or keys); values vary by field type.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				names: {
					type: 'object',
					description:
						'The ID and name of each field in the search results, when `names` is requested via `expand`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				nextPageToken: {
					type: 'string',
					description:
						'Token to fetch the next page. Absent or null when this is the last page.',
				},
				schema: {
					type: 'object',
					description:
						'The schema describing the field types in the search results, when `schema` is requested via `expand`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				warnings: {
					type: 'array',
					description:
						'Warnings generated during the search, e.g. when a JQL clause exceeded its argument limit.',
					items: { type: 'string', description: 'A warning message.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'searchUsers',
		label: 'Search users',
		description: 'Finds users matching a query, account ID, or property.',
		context:
			"---\nname: searchUsers\ndescription: Finds users matching a query, account ID, or property.\n---\n\nRead-only. Exactly one of `Query`, `Account ID`, or `Property` must be provided. The output is a bare\nJSON array of users, matching the vendor API's response shape.\n\nRefer to the [Find users API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-search-get).",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'A query string matched against `displayName` and `emailAddress` (prefix match) to find relevant users. Required unless `Account ID` or `Property` is provided.',
				},
				accountId: {
					type: 'string',
					description:
						"A query string matched exactly against a user's account ID. Required unless `Query` or `Property` is provided.",
				},
				property: {
					type: 'string',
					description:
						'A query string used to search user properties, specified by property key path. Required unless `Query` or `Account ID` is provided.',
				},
				startAt: {
					type: 'number',
					description: 'The index of the first item to return (page offset).',
					default: 0,
				},
				maxResults: {
					type: 'number',
					description: 'The maximum number of users to return per page.',
					default: 50,
				},
			},
			required: [],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'transitionIssue',
		label: 'Transition issue',
		description: 'Performs a workflow transition on an issue.',
		context:
			"---\nname: transitionIssue\ndescription: Performs a workflow transition on an issue.\n---\n\nMoves the issue to a new status by performing the given workflow transition. Get available transition\nIDs from Get issue transitions first. `Fields`/`Update` may only set fields present on the transition's\nscreen. Returns no content on success.\n\nRefer to the [Transition issue API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-post).",
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				transition: {
					type: 'object',
					description: 'The transition to perform.',
					properties: {
						id: {
							type: 'string',
							description:
								'The ID of the transition. Get available transition IDs from Get issue transitions.',
						},
					},
					required: ['id'],
				},
				fields: {
					description:
						'Fields to set on the transition screen, as a JSON object mapping field ID (or key) to its value, e.g. `{"resolution": {"id": "10000"}}`. A field that isn\'t on the transition screen cannot be set here.',
				},
				update: {
					description:
						'A JSON object mapping field name to a list of field modification operations (`add`, `set`, `remove`). A field cannot be present in both `Fields` and `Update`.',
				},
				historyMetadata: {
					description:
						'Additional issue history details to record with this transition, as a JSON object (`type`, `description`, `activityDescription`, `actor`, `generator`, `cause`, `extraData`, etc.).',
				},
			},
			required: ['issueIdOrKey', 'transition'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'updateComment',
		label: 'Update comment',
		description: 'Updates a comment.',
		context:
			'---\nname: updateComment\ndescription: Updates a comment.\n---\n\nPartial update — only the fields provided are changed. Perform a Get comment call first to see current\nvalues. `Body` must be a valid [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/)\nJSON object.\n\nRefer to the [Update comment API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-id-put).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				commentId: { type: 'string', description: 'The ID of the comment to update.' },
				body: {
					description:
						'The comment text, as an [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/) JSON object. Perform a Get comment call first to see the current value.',
				},
				visibility: {
					type: 'object',
					description: 'Restricts who can see the comment, to a group or a project role.',
					properties: {
						type: {
							type: 'string',
							description: 'Whether visibility is restricted to a group or a role.',
							default: '',
							enum: ['', 'group', 'role'],
						},
						value: {
							type: 'string',
							description:
								'The name of the group or role that visibility is restricted to.',
						},
						identifier: {
							type: 'string',
							description:
								'The ID of the group or the name of the role that visibility is restricted to. Preferred over `Value` since group names are mutable.',
						},
					},
					required: [],
				},
				properties: {
					type: 'array',
					description: 'Comment properties to add or update.',
					items: {
						type: 'object',
						description: 'A comment property.',
						properties: {
							key: {
								type: 'string',
								description: 'The key of the comment property.',
							},
							value: { description: 'The value of the comment property.' },
						},
						required: ['key', 'value'],
					},
				},
				jsdPublic: {
					type: 'boolean',
					description: 'Whether the comment is visible in Jira Service Desk.',
				},
				jsdAuthorCanSeeRequest: {
					type: 'boolean',
					description:
						'Whether the comment was added from an email sent by a person who is not part of the issue, and that person should be able to see the request.',
				},
				notifyUsers: {
					type: 'boolean',
					description: 'Whether users are notified when the comment is updated.',
					default: true,
				},
				overrideEditableFlag: {
					type: 'boolean',
					description:
						'Whether screen security is overridden to enable uneditable fields to be edited. Available only to Connect/Forge apps with the *Administer Jira* global permission.',
					default: false,
				},
				expand: {
					type: 'string',
					description:
						'Use `renderedBody` to also return the comment body rendered as HTML in the response.',
				},
			},
			required: ['issueIdOrKey', 'commentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the comment.' },
				self: { type: 'string', description: 'The URL of the comment.' },
				body: { description: 'The comment text, in Atlassian Document Format.' },
				renderedBody: {
					type: 'string',
					description:
						'The rendered (HTML) version of the comment, when `renderedBody` was requested via `Expand`.',
				},
				author: {
					type: 'object',
					description: 'The user who created the comment.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
				updateAuthor: {
					type: 'object',
					description: 'The user who last updated the comment.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
				created: {
					type: 'string',
					description: 'The date and time the comment was created.',
				},
				updated: {
					type: 'string',
					description: 'The date and time the comment was last updated.',
				},
				visibility: {
					type: 'object',
					description: 'The group or role the comment is restricted to, if any.',
					properties: {
						type: {
							type: 'string',
							description: 'Whether visibility is restricted to a group or a role.',
						},
						value: { type: 'string', description: 'The name of the group or role.' },
						identifier: {
							type: 'string',
							description: 'The ID of the group or the name of the role.',
						},
					},
					required: [],
				},
				jsdPublic: {
					type: 'boolean',
					description: 'Whether the comment is visible in Jira Service Desk.',
				},
				jsdAuthorCanSeeRequest: {
					type: 'boolean',
					description:
						'Whether the comment was added from an email sent by a person not part of the issue.',
				},
				properties: {
					type: 'array',
					description: 'The comment properties identified in the request.',
					items: {
						type: 'object',
						description: 'A comment property.',
						properties: {
							key: {
								type: 'string',
								description: 'The key of the comment property.',
							},
							value: { description: 'The value of the comment property.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'updateComponent',
		label: 'Update component',
		description: 'Updates a component.',
		context:
			'---\nname: updateComponent\ndescription: Updates a component.\n---\n\nPartial update — only the fields provided are changed. `Project` cannot be changed via this endpoint.\nPerform a Get project components call first to see current values.\n\nRefer to the [Update component API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-component-id-put)\nfor the full field and response schema.',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				componentId: { type: 'string', description: 'The ID of the component to update.' },
				name: {
					type: 'string',
					description:
						'The unique name for the component in the project. Maximum length 255 characters.',
				},
				description: { type: 'string', description: 'The description for the component.' },
				leadAccountId: {
					type: 'string',
					description: "The account ID of the component's lead user.",
				},
				assigneeType: {
					type: 'string',
					description:
						'The nominal user type used to determine the assignee for issues created with this component.',
					default: '',
					enum: ['', 'PROJECT_DEFAULT', 'COMPONENT_LEAD', 'PROJECT_LEAD', 'UNASSIGNED'],
				},
			},
			required: ['componentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier for the component.' },
				self: { type: 'string', description: 'The URL of the component.' },
				name: {
					type: 'string',
					description: 'The unique name for the component in the project.',
				},
				description: { type: 'string', description: 'The description for the component.' },
				project: {
					type: 'string',
					description: 'The key of the project the component is assigned to.',
				},
				projectId: {
					type: 'number',
					description: 'The ID of the project the component is assigned to.',
				},
				assigneeType: {
					type: 'string',
					description:
						'The nominal user type used to determine the assignee for issues created with this component.',
				},
				realAssigneeType: {
					type: 'string',
					description:
						'The type of the assignee actually assigned, when `Assignee type` cannot identify a valid assignee.',
				},
				isAssigneeTypeValid: {
					type: 'boolean',
					description: 'Whether a user is associated with `Assignee type`.',
				},
				ari: {
					type: 'string',
					description: "The Compass component's ID, if linked to one.",
				},
				metadata: {
					type: 'object',
					description: "The Compass component's metadata, if linked to one.",
					properties: {},
					required: [],
					additionalProperties: true,
				},
				lead: {
					type: 'object',
					description: "The user details for the component's lead user.",
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
				assignee: {
					type: 'object',
					description: 'The details of the user associated with `Assignee type`, if any.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
				realAssignee: {
					type: 'object',
					description:
						'The user actually assigned to issues created with this component, when `Assignee type` cannot identify a valid assignee.',
					properties: {
						accountId: { type: 'string', description: 'The account ID of the user.' },
						displayName: {
							type: 'string',
							description: 'The display name of the user.',
						},
						emailAddress: {
							type: 'string',
							description: 'The email address of the user.',
						},
						active: { type: 'boolean', description: 'Whether the user is active.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'updateFieldOptions',
		label: 'Update field options',
		description: 'Updates options for a custom field context.',
		context:
			'---\nname: updateFieldOptions\ndescription: Updates options for a custom field context.\n---\n\nUpdates one or more existing options in a single call, matched by `ID`. Perform a Get field options\ncall first to find the option IDs and current values.\n\nRefer to the [Update custom field options (context) API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-options--apps-/#api-rest-api-3-field-fieldid-context-contextid-option-put).',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fieldId: {
					type: 'string',
					description: 'The ID of the custom field, e.g. `customfield_10001`.',
				},
				contextId: { type: 'number', description: 'The ID of the custom field context.' },
				options: {
					type: 'array',
					description:
						'The options to update. Perform a Get field options call first to see current values.',
					items: {
						type: 'object',
						description: 'A custom field option to update.',
						properties: {
							id: {
								type: 'string',
								description: 'The ID of the custom field option to update.',
							},
							value: {
								type: 'string',
								description: 'The value of the custom field option.',
							},
							disabled: {
								type: 'boolean',
								description: 'Whether the option is disabled.',
							},
						},
						required: ['id'],
					},
				},
			},
			required: ['fieldId', 'contextId', 'options'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				options: {
					type: 'array',
					description: 'The updated custom field options.',
					items: {
						type: 'object',
						description: 'An updated custom field option.',
						properties: {
							id: {
								type: 'string',
								description: 'The ID of the custom field option.',
							},
							value: {
								type: 'string',
								description: 'The value of the custom field option.',
							},
							disabled: {
								type: 'boolean',
								description: 'Whether the option is disabled.',
							},
							optionId: {
								type: 'string',
								description: 'For cascading options, the ID of the parent option.',
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
		appName: 'jira',
		appVersion: 2,
		endpointName: 'updateIssue',
		label: 'Update issue',
		description: 'Updates fields of an issue.',
		context:
			'---\nname: updateIssue\ndescription: Updates fields of an issue.\n---\n\nPartial update — only the fields provided in `Fields`/`Update` are changed; omitted fields are left as-is.\nPerform a [Get issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get)\ncall first to see current values before updating.\n\nReturns no content (204) unless `Return issue` is set to `true`, in which case the updated issue is\nreturned in the same shape as the Get issue API.\n\nRefer to the [Edit issue API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-put)\nfor the full field and response schema.',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				issueIdOrKey: {
					type: 'string',
					description: 'The ID or key of the issue, e.g. `10000` or `PROJ-1`.',
				},
				fields: {
					description:
						'List of issue screen fields to update, as a JSON object mapping field ID (or key) to its new value, e.g. `{"summary": "Updated summary"}`. Perform a GET first to see current values, since omitted fields are left unchanged (this is a partial update, not a replace).',
				},
				update: {
					description:
						'A JSON object mapping field name to a list of field modification operations (`add`, `set`, `remove`), e.g. `{"labels": [{"add": "triaged"}]}`. Fields present in both `Fields` and `Update` are rejected by the API.',
				},
				historyMetadata: {
					description:
						'Additional issue history details to record with this change, as a JSON object (`type`, `description`, `activityDescription`, `actor`, `generator`, `cause`, `extraData`, etc.).',
				},
				properties: {
					type: 'array',
					description: 'Issue properties to add or update on the issue.',
					items: {
						type: 'object',
						description: 'An issue property.',
						properties: {
							key: { type: 'string', description: 'The key of the issue property.' },
							value: { description: 'The value of the issue property.' },
						},
						required: ['key', 'value'],
					},
				},
				notifyUsers: {
					type: 'boolean',
					description:
						'Whether a notification email about the update is sent to all watchers. Requires *Administer Jira* or *Administer projects* permission to disable.',
					default: true,
				},
				overrideScreenSecurity: {
					type: 'boolean',
					description:
						'Whether screen security is overridden to enable hidden fields to be edited. Available only to Connect/Forge apps with the *Administer Jira* global permission.',
					default: false,
				},
				overrideEditableFlag: {
					type: 'boolean',
					description:
						'Whether screen security is overridden to enable uneditable fields to be edited. Available only to Connect/Forge apps with the *Administer Jira* global permission.',
					default: false,
				},
				returnIssue: {
					type: 'boolean',
					description:
						'Whether the response should contain the updated issue, in the same format as the [Get issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get) API.',
					default: false,
				},
				expand: {
					type: 'string',
					description:
						'The Get issue API `expand` parameter to use in the response, when `Return issue` is enabled.',
				},
			},
			required: ['issueIdOrKey'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The ID of the issue. Only present when `Return issue` is enabled.',
				},
				key: {
					type: 'string',
					description:
						'The key of the issue. Only present when `Return issue` is enabled.',
				},
				self: {
					type: 'string',
					description:
						'The URL of the issue. Only present when `Return issue` is enabled.',
				},
				fields: {
					type: 'object',
					description:
						"The values of the issue's fields. Only present when `Return issue` is enabled.",
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'jira',
		appVersion: 2,
		endpointName: 'updateProjectVersion',
		label: 'Update project version',
		description: 'Updates a project version.',
		context:
			'---\nname: updateProjectVersion\ndescription: Updates a project version.\n---\n\nPartial update — only the fields provided are changed. `Project ID` cannot be changed via this endpoint.\nSetting `Released` to `true` on an already-released version is ignored by the API.\nPerform a Get project versions call first to see current values.\n\nRefer to the [Update version API reference](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-version-id-put)\nfor the full field and response schema.',
		accounts: { jira: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				versionId: { type: 'string', description: 'The ID of the version to update.' },
				name: {
					type: 'string',
					description: 'The unique name of the version. Maximum length 255 characters.',
				},
				description: {
					type: 'string',
					description: 'The description of the version. Maximum size 16,384 bytes.',
				},
				startDate: { type: 'string', description: 'The start date of the version.' },
				releaseDate: { type: 'string', description: 'The release date of the version.' },
				archived: { type: 'boolean', description: 'Whether the version is archived.' },
				released: {
					type: 'boolean',
					description:
						'Whether the version is released. If already released, a repeat request to release is ignored.',
				},
				driver: {
					type: 'string',
					description: 'The Atlassian account ID of the version driver.',
				},
				moveUnfixedIssuesTo: {
					type: 'string',
					description:
						'The URL of the version (self link) that unfixed issues are moved to when this version is released.',
				},
				expand: {
					type: 'string',
					description:
						'Comma-separated list of extra details to include in the response, e.g. `operations,issuesstatus,driver`.',
				},
			},
			required: ['versionId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the version.' },
				self: { type: 'string', description: 'The URL of the version.' },
				name: { type: 'string', description: 'The unique name of the version.' },
				description: { type: 'string', description: 'The description of the version.' },
				projectId: {
					type: 'number',
					description: 'The ID of the project this version belongs to.',
				},
				archived: { type: 'boolean', description: 'Whether the version is archived.' },
				released: { type: 'boolean', description: 'Whether the version is released.' },
				overdue: { type: 'boolean', description: 'Whether the version is overdue.' },
				startDate: { type: 'string', description: 'The start date of the version.' },
				releaseDate: { type: 'string', description: 'The release date of the version.' },
				userStartDate: {
					type: 'string',
					description:
						"The start date of the version, formatted per the instance's date format.",
				},
				userReleaseDate: {
					type: 'string',
					description:
						"The release date of the version, formatted per the instance's date format.",
				},
				driver: {
					type: 'string',
					description: 'The Atlassian account ID of the version driver.',
				},
				moveUnfixedIssuesTo: {
					type: 'string',
					description:
						'The URL of the version that unfixed issues are moved to when this version is released.',
				},
				approvers: {
					type: 'array',
					description:
						'The approvers for this version, when `approvers` was requested via `Expand`.',
					items: { description: 'An approver of this version.' },
				},
				operations: {
					type: 'array',
					description:
						'The operations available for this version, when `operations` was requested via `Expand`.',
					items: { description: 'An operation available for this version.' },
				},
				issuesStatusForFixVersion: {
					description:
						'Counts of issues in this version per status category, when `issuesstatus` was requested via `Expand`.',
				},
			},
			required: [],
		},
	},
];
