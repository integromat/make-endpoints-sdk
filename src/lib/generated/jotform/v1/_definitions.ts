// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'# Context for the Universal Endpoint\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Jotform API, mirroring the "Make an API Call" module.\n\nThe base URL is resolved from the connection: standard (`https://eu-api.jotform.com`), HIPAA Safe Mode\n(`https://hipaa-api.jotform.com`), or an Enterprise domain (`https://{domain}/API`) when one is set on the\nconnection. Provide the remaining path in the `url` parameter (e.g. `/user` — a cheap GET that returns the\nconnected account\'s user details).\n\nThe API key is added automatically; do not add it yourself as a header or query parameter.\n\nMost Jotform write routes (`POST`/`PUT`) expect form-encoded or query-string style parameters (for example\n`questions[1][text]=...`) rather than a raw JSON body — check the [Jotform API docs](https://api.jotform.com/docs/)\nfor the specific route before sending `body`.\n\nPrefer the dedicated endpoints (Create a form, List form questions, Add form questions, List form submissions,\nSubmit a form, List user submissions, Get user usage, List sub-users) when they cover what you need — use this\nendpoint only for routes not yet covered by a dedicated endpoint.\n',
		accounts: { jotform: { scope: [] } },
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
						'Path (and query string, if any) to call, relative to the resolved Jotform API base URL — for example `/form` or `/user/usage`. The base URL depends on the connection (standard, EU, HIPAA, or Enterprise domain).',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add the API key; that is already done for you.",
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
						"The HTTP request body. This input is ignored if the HTTP request method is `GET`. Jotform's write endpoints mostly expect form-encoded or query-string style parameters rather than a raw JSON body — check the API docs for the specific route.",
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
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'createForm',
		label: 'Create a form',
		description: 'Creates a new form with the given title, questions, and email settings.',
		context:
			"---\nname: createForm\ndescription: This endpoint can be used to create a new Jotform form with questions, properties, and email settings\n---\n\nCreates a new form (POST `/form`). Returns the created form's `id`, `title`, `status`, and `url` under `content`.\n\n## Questions\n\nEach item in `questions` becomes one form field. `type` controls the Jotform question control (for example `control_textbox`, `control_dropdown`). `options` and `required` only apply to Dropdown, Radio, and Checkbox questions.\n\n## Emails\n\nEach item in `emails` configures one notification/autoresponder email. `html` selects whether `body` is treated as HTML.\n\n## Related endpoints\n\n- Use List form questions afterward to confirm the created questions and their `qid`s.\n- Use Add form questions to append more questions to this form later.\n",
		accounts: { jotform: { scope: [] } },
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
				questions: {
					type: 'array',
					description: 'Questions to add to the form.',
					items: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								description: 'The question control type.',
								enum: [
									'control_head',
									'control_text',
									'control_textbox',
									'control_textarea',
									'control_dropdown',
									'control_radio',
									'control_checkbox',
									'control_image',
									'control_fileupload',
									'control_button',
									'control_fullname',
									'control_email',
									'control_address',
									'control_phone',
									'control_datetime',
									'control_time',
									'control_birthdate',
									'control_number',
									'control_captcha',
									'control_rating',
									'control_scale',
									'control_spinner',
									'control_matrix',
									'control_collapse',
									'control_pagebreak',
									'control_hidden',
									'control_slider',
									'control_signature',
									'control_widget',
								],
							},
							text: {
								type: 'string',
								description: 'Question label text shown on the form.',
							},
							name: {
								type: 'string',
								description: 'Machine-readable field name (slug) for the question.',
							},
							order: {
								type: 'number',
								description: 'Position of the question on the form.',
							},
							options: {
								type: 'array',
								description: 'Choices for Dropdown, Radio, or Checkbox questions.',
								items: {
									type: 'string',
									description:
										'One choice for a Dropdown, Radio, or Checkbox question.',
								},
							},
							required: {
								type: 'boolean',
								description:
									'Whether an answer is mandatory. Applies to Dropdown, Radio, and Checkbox questions only.',
							},
						},
						required: ['type'],
					},
				},
				height: { type: 'number', description: "Height of the form's iframe, in pixels." },
				emails: {
					type: 'array',
					description: 'Email notifications to configure for the form.',
					items: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								description: 'Kind of email notification.',
								enum: ['email', 'notification', 'autoresponder'],
							},
							from: { type: 'string', description: 'Sender address or name.' },
							to: { type: 'string', description: 'Recipient address.' },
							subject: { type: 'string', description: 'Email subject line.' },
							html: {
								type: 'string',
								description: 'Whether the email body is HTML.',
								enum: [0, 1],
							},
							body: { type: 'string', description: 'Email body content.' },
						},
						required: ['type', 'html'],
					},
				},
			},
			required: ['title'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'object',
					description: 'The newly created form.',
					properties: {
						id: { type: 'string', description: 'ID of the created form.' },
						username: {
							type: 'string',
							description: 'Jotform username that owns the form.',
						},
						height: { type: 'string', description: 'Height of the form, in pixels.' },
						status: { type: 'string', description: 'Status of the form.' },
						created_at: { type: 'string', description: 'When the form was created.' },
						updated_at: {
							type: 'string',
							description: 'When the form was last updated.',
						},
						last_submission: {
							type: 'string',
							description: 'When the form last received a submission.',
						},
						new: { type: 'string', description: 'Number of unread submissions.' },
						count: { type: 'string', description: 'Total number of submissions.' },
						type: { type: 'string', description: 'Type of the form.' },
						favorite: {
							type: 'number',
							description: 'Whether the form is marked as a favorite.',
						},
						archived: { type: 'number', description: 'Whether the form is archived.' },
						url: { type: 'string', description: 'Public URL of the form.' },
					},
					required: [],
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'createFormSubmission',
		label: 'Submit a form',
		description: 'Submits answers to the specified form.',
		context:
			'---\nname: createFormSubmission\ndescription: This endpoint can be used to submit answers to a Jotform form\n---\n\nSubmits answers to a form (POST `/form/{formId}/submissions`).\n\n## Required inputs\n\n- `formId` — the form\'s ID.\n- `answers` — one entry per answered question, `{ qid, value }`. Call List form questions first to find valid `qid`s.\n\n## Compound fields\n\nFor compound Jotform fields (Full name, Address, Datetime, and similar), set `value` to an object of sub-field values rather than a plain string, for example `{"first":"John","last":"Doe"}`.\n\n## Notes\n\n- Not marked read-only, destructive, or idempotent: it is a plain additive write that creates a new submission record each call.\n',
		accounts: { jotform: { scope: [] } },
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
				formId: { type: 'string', description: 'ID of the form to submit to.' },
				answers: {
					type: 'array',
					description: 'Answers to submit, one entry per question.',
					items: {
						type: 'object',
						properties: {
							qid: {
								type: 'string',
								description:
									'ID (qid) of the question being answered. Use List form questions to find qids.',
							},
							value: {
								description:
									'Answer value. Use a plain string or number for simple fields, or an object of sub-field values (for example `{"first":"John","last":"Doe"}`) for compound fields such as Full name or Address.',
							},
						},
						required: ['qid', 'value'],
					},
				},
			},
			required: ['formId', 'answers'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'object',
					description: 'The created submission.',
					properties: {
						submissionID: { type: 'string', description: 'ID of the new submission.' },
						URL: { type: 'string', description: 'API URL of the new submission.' },
					},
					required: [],
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'getUserUsage',
		label: 'Get user usage',
		description: "Returns the connected account's monthly submission, upload, and API usage.",
		context:
			"---\nname: getUserUsage\ndescription: This endpoint can be used to check the connected Jotform account's current monthly usage and plan limits\n---\n\nReturns the connected account's usage for the current month (GET `/user/usage`): submissions, SSL submissions, payment form submissions, upload space used, form views, and API calls.\n\n## Notes\n\n- No input parameters — always reports the currently connected account.\n- `limit-left` (top-level, alongside `content`) reports remaining API calls for the current period, separate from the monthly usage figures inside `content`.\n",
		accounts: { jotform: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'object',
					description: "The account's usage figures for the current month.",
					properties: {
						submissions: {
							type: 'string',
							description: 'Number of form submissions received this month.',
						},
						ssl_submissions: {
							type: 'string',
							description: 'Number of SSL form submissions received this month.',
						},
						payments: {
							type: 'string',
							description: 'Number of payment form submissions received this month.',
						},
						uploads: { type: 'string', description: 'Upload space used this month.' },
						views: { type: 'string', description: 'Number of form views this month.' },
						api: {
							type: 'number',
							description: 'Number of API calls used this month.',
						},
						form_count: {
							type: 'number',
							description: 'Number of forms on the account.',
						},
						username: {
							type: 'string',
							description: 'Jotform username of the connected account.',
						},
						overSubmissions: {
							type: 'string',
							description: 'Submissions over the plan limit.',
						},
						total_submissions: {
							type: 'string',
							description: 'Total submissions on the account.',
						},
						tickets: { type: 'string', description: 'Number of support tickets.' },
						signed_documents: {
							type: 'string',
							description: 'Number of signed documents.',
						},
						workflow_runs: { type: 'string', description: 'Number of workflow runs.' },
						ai_conversations: {
							type: 'string',
							description: 'Number of AI conversations.',
						},
						ai_messages: { type: 'string', description: 'Number of AI messages.' },
						ai_sessions: { type: 'string', description: 'Number of AI sessions.' },
						ai_phone_call: { type: 'string', description: 'Number of AI phone calls.' },
						ai_agent_sms: {
							type: 'string',
							description: 'Number of AI agent SMS messages.',
						},
						ai_chatbot_conversations: {
							type: 'string',
							description: 'Number of AI chatbot conversations.',
						},
						pdf_attachment_submissions: {
							type: 'string',
							description: 'Number of submissions with a PDF attachment.',
						},
						monthly_usage_reset_date: {
							type: 'string',
							description: 'When the monthly usage counters reset.',
						},
						mobile_submissions: {
							type: 'string',
							description: 'Number of mobile submissions.',
						},
						noupe_ai_conversations: {
							type: 'string',
							description: 'Number of Noupe AI conversations.',
						},
						sms_notifications: {
							type: 'string',
							description: 'Number of SMS notifications.',
						},
						whatsapp_notifications: {
							type: 'string',
							description: 'Number of WhatsApp notifications.',
						},
						pdf_generations: {
							type: 'string',
							description: 'Number of PDF generations.',
						},
						website_widget_views: {
							type: 'string',
							description: 'Number of website widget views.',
						},
						ai_agents: { type: 'string', description: 'Number of AI agents.' },
						ai_chatbot_agents: {
							type: 'string',
							description: 'Number of AI chatbot agents.',
						},
						ai_knowledge_base: {
							type: 'string',
							description: 'Number of AI knowledge bases.',
						},
						created_at: {
							type: 'string',
							description: 'When the account was created.',
						},
					},
					required: [],
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'listFormQuestions',
		label: 'List form questions',
		description: 'Lists all questions of the specified form.',
		context:
			"---\nname: listFormQuestions\ndescription: This endpoint can be used to list all questions of a Jotform form\n---\n\nRetrieves all questions of a form (GET `/form/{formId}/questions`). `content` is an object keyed by question ID (`qid`), not an array.\n\n## Required inputs\n\n- `formId` — the form's ID.\n\n## Notes\n\n- Use a returned `qid` as the answer key when calling Submit a form.\n- Use Add form questions to append new questions to this form.\n",
		accounts: { jotform: { scope: [] } },
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
				formId: { type: 'string', description: 'ID of the form to list questions for.' },
			},
			required: ['formId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					description:
						'Object keyed by question ID (qid). Each value is a question definition object whose keys (for example `type`, `text`, `name`, `order`, `required`, `options`) vary depending on the question type.',
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'listFormSubmissions',
		label: 'List form submissions',
		description: 'Lists submissions for the specified form.',
		context:
			'---\nname: listFormSubmissions\ndescription: This endpoint can be used to list submissions of a single Jotform form\n---\n\nLists submissions for one form (GET /form/{formId}/submissions). Get Form Submissions calls this same route.\n\n## Required inputs\n\n- `formId` — the form\'s ID.\n\n## Pagination\n\n`resultSet.count` versus `limit` tells you whether more submissions remain; pass a growing `offset` (in increments of `limit`) to fetch further pages.\n\n## Notes\n\n- `answers` inside each submission is keyed by question `qid` and its shape varies per question type; call List form questions first to interpret it.\n- `filter` accepts a JSON object, for example `{"status":"ACTIVE"}` — see the [Jotform API docs](https://api.jotform.com/docs/#form-id-submissions).\n',
		accounts: { jotform: { scope: [] } },
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
				formId: { type: 'string', description: 'ID of the form to list submissions for.' },
				limit: {
					type: 'number',
					description:
						'Maximum number of submissions to return (API page size, max 100).',
					default: 20,
				},
				offset: {
					type: 'number',
					description: 'Number of submissions to skip, for pagination.',
					default: 0,
				},
				filter: {
					type: 'string',
					description:
						'JSON filter object, for example `{"status":"ACTIVE"}`. See the [Jotform API docs](https://api.jotform.com/docs/#form-id-submissions).',
				},
				orderby: {
					type: 'string',
					description: 'Field to order the results by.',
					default: '',
					enum: [
						'',
						'id',
						'form_id',
						'IP',
						'created_at',
						'status',
						'new',
						'flag',
						'updated_at',
					],
				},
			},
			required: ['formId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'array',
					description: 'The page of submissions.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'ID of the submission.' },
							form_id: {
								type: 'string',
								description: 'ID of the form this submission belongs to.',
							},
							ip: { type: 'string', description: 'IP address of the submitter.' },
							created_at: {
								type: 'string',
								description: 'When the submission was created.',
							},
							updated_at: {
								type: 'string',
								description: 'When the submission was last updated.',
							},
							status: { type: 'string', description: 'Status of the submission.' },
							new: {
								type: 'string',
								description: 'Whether the submission is unread.',
							},
							flag: { type: 'string', description: 'Flag stored on the submission.' },
							notes: {
								type: 'string',
								description: 'Notes stored on the submission.',
							},
							answers: {
								description:
									'Submitted answers keyed by question ID (qid). Shape varies per question type.',
							},
						},
						required: [],
					},
				},
				resultSet: {
					type: 'object',
					description: 'Pagination summary for this page.',
					properties: {
						offset: {
							type: 'number',
							description: 'Number of submissions skipped before this page.',
						},
						limit: {
							type: 'number',
							description: 'Maximum number of submissions requested for this page.',
						},
						count: {
							type: 'number',
							description: 'Number of submissions in this page.',
						},
					},
					required: [],
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'listSubUsers',
		label: 'List sub-users',
		description: 'Lists the sub-users of the connected account and their form access.',
		context:
			"---\nname: listSubUsers\ndescription: This endpoint can be used to list the sub-users of the connected Jotform account\n---\n\nLists the sub-users of the connected account, including which forms and folders each sub-user can access (GET `/user/subusers`).\n\n## Notes\n\n- No input parameters — always reports the currently connected account's sub-users.\n- `permissions[].resource_id` is the ID of the form or folder the permission applies to; `permissions[].type` distinguishes forms from folders.\n- Requires a Jotform plan that supports sub-users; otherwise `content` is empty.\n",
		accounts: { jotform: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'array',
					description: "The account's sub-users.",
					items: {
						type: 'object',
						properties: {
							owner: {
								type: 'string',
								description: 'Username of the account that owns this sub-user.',
							},
							status: { type: 'string', description: 'Status of the sub-user.' },
							email: {
								type: 'string',
								description: 'Email address of the sub-user.',
							},
							username: { type: 'string', description: 'Username of the sub-user.' },
							created_at: {
								type: 'string',
								description: 'When the sub-user was created.',
							},
							permissions: {
								type: 'array',
								description: 'Forms and folders this sub-user can access.',
								items: {
									type: 'object',
									properties: {
										type: {
											type: 'string',
											description:
												'Whether the permission applies to a form or a folder.',
										},
										resource_id: {
											type: 'number',
											description: 'ID of the form or folder.',
										},
										access_type: {
											type: 'string',
											description:
												'Access level granted on the form or folder.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'listUserSubmissions',
		label: 'List user submissions',
		description: 'Lists submissions across all forms in the connected account.',
		context:
			'---\nname: listUserSubmissions\ndescription: This endpoint can be used to list submissions across every Jotform form on the connected account\n---\n\nLists submissions across all forms owned by the connected account (GET `/user/submissions`).\n\n## Pagination\n\n`resultSet.count` versus `limit` tells you whether more submissions remain; pass a growing `offset` (in increments of `limit`) to fetch further pages.\n\n## Notes\n\n- Use List form submissions instead when you only need submissions for one known form.\n- `answers` inside each submission is keyed by question `qid` and its shape varies per question type.\n- `filter` accepts a JSON object, for example `{"status":"ACTIVE"}`.\n',
		accounts: { jotform: { scope: [] } },
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
				limit: {
					type: 'number',
					description: 'Maximum number of submissions to return (API max 1000).',
					default: 20,
				},
				offset: {
					type: 'number',
					description: 'Number of submissions to skip, for pagination.',
					default: 0,
				},
				filter: {
					type: 'string',
					description:
						'JSON filter object, for example `{"status":"ACTIVE"}`. See the [Jotform API docs](https://api.jotform.com/docs/#submissions).',
				},
				orderby: {
					type: 'string',
					description: 'Field to order the results by.',
					default: '',
					enum: [
						'',
						'id',
						'form_id',
						'IP',
						'created_at',
						'status',
						'new',
						'flag',
						'updated_at',
					],
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'array',
					description: 'The page of submissions.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'ID of the submission.' },
							form_id: {
								type: 'string',
								description: 'ID of the form this submission belongs to.',
							},
							ip: { type: 'string', description: 'IP address of the submitter.' },
							created_at: {
								type: 'string',
								description: 'When the submission was created.',
							},
							status: { type: 'string', description: 'Status of the submission.' },
							new: {
								type: 'string',
								description: 'Whether the submission is unread.',
							},
							flag: { type: 'string', description: 'Flag stored on the submission.' },
							notes: {
								type: 'string',
								description: 'Notes stored on the submission.',
							},
							updated_at: {
								type: 'string',
								description: 'When the submission was last updated.',
							},
							answers: {
								description:
									'Submitted answers keyed by question ID (qid). Shape varies per question type.',
							},
						},
						required: [],
					},
				},
				resultSet: {
					type: 'object',
					description: 'Pagination summary for this page.',
					properties: {
						offset: {
							type: 'number',
							description: 'Number of submissions skipped before this page.',
						},
						limit: {
							type: 'number',
							description: 'Maximum number of submissions requested for this page.',
						},
						count: {
							type: 'number',
							description: 'Number of submissions in this page.',
						},
					},
					required: [],
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'jotform',
		appVersion: 1,
		endpointName: 'updateFormQuestions',
		label: 'Add form questions',
		description: 'Adds new questions to an existing form.',
		context:
			"---\nname: updateFormQuestions\ndescription: This endpoint can be used to add new questions to an existing Jotform form\n---\n\nAdds new questions to an existing form (PUT `/form/{formId}/questions`). This call **appends** questions; it does not edit or remove existing questions by ID.\n\n## Required inputs\n\n- `formId` — the form's ID.\n- `questions` — at least one question definition. `options` is a pipe-separated string (Option 1|Option 2). `required` is Yes or No string.\n\n## Notes\n\n- Marked destructive because it mutates the structure of a live form, which can affect existing submissions data mapping.\n- Use List form questions afterward to confirm the new questions and their assigned `qid`s.\n",
		accounts: { jotform: { scope: [] } },
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
				formId: { type: 'string', description: 'ID of the form to add questions to.' },
				questions: {
					type: 'array',
					description: 'Questions to add to the form.',
					items: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
								description: 'The question control type.',
								enum: [
									'control_head',
									'control_text',
									'control_textbox',
									'control_textarea',
									'control_dropdown',
									'control_radio',
									'control_checkbox',
									'control_image',
									'control_fileupload',
									'control_button',
									'control_fullname',
									'control_email',
									'control_address',
									'control_phone',
									'control_datetime',
									'control_time',
									'control_birthdate',
									'control_number',
									'control_captcha',
									'control_rating',
									'control_scale',
									'control_spinner',
									'control_matrix',
									'control_collapse',
									'control_pagebreak',
									'control_hidden',
									'control_slider',
									'control_signature',
									'control_widget',
								],
							},
							text: {
								type: 'string',
								description: 'Question label text shown on the form.',
							},
							name: {
								type: 'string',
								description: 'Machine-readable field name (slug) for the question.',
							},
							order: {
								type: 'number',
								description: 'Position of the question on the form.',
							},
							options: {
								type: 'string',
								description:
									'Users can choose from these options. Separated with pipe character. Example: Option 1|Option 2|Option 3. Applies to Dropdown, Radio, and Checkbox questions only.',
							},
							required: {
								type: 'string',
								description:
									'Whether an answer is mandatory. Applies to Dropdown, Radio, and Checkbox questions only.',
								default: '',
								enum: ['', 'Yes', 'No'],
							},
						},
						required: ['type'],
					},
				},
			},
			required: ['formId', 'questions'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responseCode: {
					type: 'number',
					description: 'Jotform API response code (200 on success).',
				},
				message: {
					type: 'string',
					description: 'Response status message (for example `success`).',
				},
				content: {
					type: 'array',
					description: 'Questions added by this call.',
					items: {
						type: 'object',
						properties: {
							qid: {
								type: 'number',
								description: 'ID Jotform assigned to the added question.',
							},
							type: { type: 'string', description: 'Question control type.' },
							text: { type: 'string', description: 'Question label text.' },
							name: {
								type: 'string',
								description: 'Machine-readable field name (slug).',
							},
							order: {
								type: 'string',
								description: 'Position of the question on the form.',
							},
						},
						required: [],
					},
				},
				'limit-left': {
					type: 'string',
					description: 'Number of API calls left in the current period for this API key.',
				},
			},
			required: [],
		},
	},
];
