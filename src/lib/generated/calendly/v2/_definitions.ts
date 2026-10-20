// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Calendly API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.calendly.com`. Provide the remaining path in the URL parameter\n(e.g. `/users/me`). Authentication is handled automatically via the app\'s connection.\n\nFor write calls (POST, PUT, PATCH), include a `Content-Type: application/json` header explicitly in the\nheaders parameter — not every caller applies the schema\'s default header, and without it Calendly returns\n`200` while silently ignoring the body.\n\nRefer to the [Calendly API reference](https://developer.calendly.com/api-docs) for available\nendpoints, required parameters, and response schemas.',
		accounts: { calendly2: { scope: [] } },
		annotations: { arbitraryCallHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter a path relative to `https://api.calendly.com`. For example, `/users/me`.',
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
						description: 'An HTTP request header.',
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
						description: 'An HTTP request query parameter.',
						properties: {
							key: {
								type: 'string',
								description: 'The HTTP request query parameter key.',
							},
							value: {
								type: 'string',
								description: 'The HTTP request query parameter value.',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'cancelEvent',
		label: 'Cancel event',
		description: 'Cancels a specified scheduled event.',
		context:
			'---\nname: cancelEvent\ndescription: Cancels a scheduled event.\n---\n\nCancels a scheduled event by its UUID. This action cannot be undone. The `uuid` parameter is the unique identifier found in the event URI (e.g. `ABCD1234`). An optional `reason` can be provided.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description:
						'The unique identifier of the scheduled event to cancel. You can find this in the event URI: `https://api.calendly.com/scheduled_events/{uuid}`.',
				},
				reason: { type: 'string', description: 'The reason for canceling the event.' },
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The cancellation resource.',
					properties: {
						canceled_by: {
							type: 'string',
							description: 'The name of the person who canceled the event.',
						},
						canceler_type: {
							type: 'string',
							description: 'The type of the canceler (e.g. `host`, `invitee`).',
						},
						reason: { type: 'string', description: 'The reason for the cancellation.' },
						created_at: {
							type: 'string',
							description: 'The moment when the cancellation was created.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'createEventInvitee',
		label: 'Create event invitee',
		description: 'Creates a new booking for an event invitee. Requires a Calendly paid plan.',
		context:
			'---\nname: createEventInvitee\ndescription: Creates a new booking (invitee) for a specific event type.\n---\n\nCreates a new booking (invitee) for a specific event type at a given start time. This is the Scheduling API endpoint - requires a Calendly paid plan (Standard or higher). The `event_type` must be a full URI. The `invitee` object requires `email`, `timezone`, and either `name` or `first_name`.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				event_type: {
					type: 'string',
					description:
						'The URI of the event type to book. For example, `https://api.calendly.com/event_types/ABCD1234`.',
				},
				start_time: {
					type: 'string',
					description:
						'The start time of the event in UTC format. For example, `2024-01-15T10:00:00Z`.',
				},
				invitee: {
					type: 'object',
					description: 'The invitee details.',
					properties: {
						name: {
							type: 'string',
							description:
								'The full name of the invitee. Required if `first_name` is not provided.',
						},
						first_name: {
							type: 'string',
							description:
								'The first name of the invitee. Required if `name` is not provided.',
						},
						last_name: { type: 'string', description: 'The last name of the invitee.' },
						email: { type: 'string', description: 'The email address of the invitee.' },
						timezone: {
							type: 'string',
							description:
								'The timezone of the invitee in IANA format. For example, `America/New_York`.',
						},
						text_reminder_number: {
							type: 'string',
							description:
								'Phone number for SMS reminders. For example, `+14155551234`.',
						},
					},
					required: ['email', 'timezone'],
				},
				location: {
					type: 'object',
					description: 'The event location.',
					properties: {
						kind: {
							type: 'string',
							description: 'The location type.',
							enum: [
								'physical',
								'outbound_call',
								'inbound_call',
								'ask_invitee',
								'custom',
								'google_conference',
								'zoom_conference',
								'gotomeeting_conference',
								'microsoft_teams_conference',
								'webex_conference',
							],
						},
						location: {
							type: 'string',
							description:
								'The location value. Required when `kind` is `physical`, `outbound_call`, `ask_invitee`, or `custom`.',
						},
						phone_number: {
							type: 'string',
							description:
								'The phone number. Required when `kind` is `inbound_call`.',
						},
					},
					required: ['kind'],
				},
				questions_and_answers: {
					type: 'array',
					description: 'Responses to custom questions on the event type.',
					items: {
						type: 'object',
						description: "A question and the invitee's answer.",
						properties: {
							question: {
								type: 'string',
								description:
									'The question text. Must exactly match the question in the event type.',
							},
							answer: {
								type: 'string',
								description: "The invitee's response to the question.",
							},
							position: {
								type: 'number',
								description: 'The position of the question in the list.',
							},
						},
						required: [],
					},
				},
				tracking: {
					type: 'object',
					description: 'UTM and Salesforce tracking parameters.',
					properties: {
						utm_campaign: {
							type: 'string',
							description: 'The UTM campaign parameter.',
						},
						utm_source: { type: 'string', description: 'The UTM source parameter.' },
						utm_medium: { type: 'string', description: 'The UTM medium parameter.' },
						utm_content: { type: 'string', description: 'The UTM content parameter.' },
						utm_term: { type: 'string', description: 'The UTM term parameter.' },
						salesforce_uuid: {
							type: 'string',
							description: 'The Salesforce record unique identifier.',
						},
					},
					required: [],
				},
				event_guests: {
					type: 'array',
					description: 'Emails of invitee guests. Maximum 10.',
					items: { type: 'string', description: "The guest's email address." },
					maxItems: 10,
				},
			},
			required: ['event_type', 'start_time', 'invitee'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The created invitee resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the invitee.',
						},
						email: { type: 'string', description: "The invitee's email address." },
						name: { type: 'string', description: "The invitee's full name." },
						first_name: { type: 'string', description: "The invitee's first name." },
						last_name: { type: 'string', description: "The invitee's last name." },
						status: { type: 'string', description: "The invitee's status." },
						timezone: { type: 'string', description: "The invitee's timezone." },
						event: { type: 'string', description: 'The URI of the scheduled event.' },
						text_reminder_number: {
							type: 'string',
							description: 'Phone number for SMS reminders.',
						},
						rescheduled: {
							type: 'boolean',
							description: 'Whether the invitee has rescheduled.',
						},
						old_invitee: {
							type: 'string',
							description: 'URI of the old invitee if rescheduled.',
						},
						new_invitee: {
							type: 'string',
							description: 'URI of the new invitee if rescheduled.',
						},
						cancel_url: { type: 'string', description: 'URL to cancel the event.' },
						reschedule_url: {
							type: 'string',
							description: 'URL to reschedule the event.',
						},
						created_at: {
							type: 'string',
							description: 'When the invitee was created.',
						},
						updated_at: {
							type: 'string',
							description: 'When the invitee was last updated.',
						},
						invitee_scheduled_by: {
							type: 'string',
							description: 'The URI of the user who scheduled this invitee.',
						},
						routing_form_submission: {
							type: 'string',
							description: 'URI of the routing form submission.',
						},
						cancellation: {
							type: 'object',
							description:
								'Cancellation details if the invitee or event was canceled.',
							properties: {
								canceled_by: {
									type: 'string',
									description: 'Name of the person who canceled.',
								},
								reason: {
									type: 'string',
									description: 'The reason for the cancellation.',
								},
								canceler_type: {
									type: 'string',
									description: 'The type of canceler (e.g. `host`, `invitee`).',
								},
								created_at: {
									type: 'string',
									description: 'The moment when the cancellation was created.',
								},
							},
							required: [],
						},
						no_show: {
							type: 'object',
							description: 'No show details if the invitee was marked as no show.',
							properties: {
								uri: { type: 'string', description: 'URI of the no show record.' },
								created_at: {
									type: 'string',
									description: 'When the no show was created.',
								},
							},
							required: [],
						},
						payment: {
							type: 'object',
							description: 'Payment details if the event is paid.',
							properties: {
								external_id: {
									type: 'string',
									description: "The payment processor's ID.",
								},
								provider: { type: 'string', description: 'The payment provider.' },
								amount: { type: 'number', description: 'The payment amount.' },
								currency: { type: 'string', description: 'The payment currency.' },
								terms: { type: 'string', description: 'The payment terms.' },
								successful: {
									type: 'boolean',
									description: 'Whether the payment was successful.',
								},
							},
							required: [],
						},
						reconfirmation: {
							type: 'object',
							description: 'Reconfirmation details.',
							properties: {
								created_at: {
									type: 'string',
									description: 'When the reconfirmation was created.',
								},
								confirmed_at: {
									type: 'string',
									description: 'When the invitee confirmed.',
								},
							},
							required: [],
						},
						scheduling_method: {
							type: 'string',
							description: 'How the event was scheduled.',
						},
						questions_and_answers: {
							type: 'array',
							description: "The invitee's responses.",
							items: {
								type: 'object',
								description: 'A question and answer.',
								properties: {
									question: { type: 'string', description: 'The question.' },
									answer: { type: 'string', description: 'The answer.' },
									position: { type: 'number', description: 'The position.' },
								},
								required: [],
							},
						},
						tracking: {
							type: 'object',
							description: 'Tracking parameters.',
							properties: {
								utm_campaign: { type: 'string', description: 'UTM campaign.' },
								utm_source: { type: 'string', description: 'UTM source.' },
								utm_medium: { type: 'string', description: 'UTM medium.' },
								utm_content: { type: 'string', description: 'UTM content.' },
								utm_term: { type: 'string', description: 'UTM term.' },
								salesforce_uuid: {
									type: 'string',
									description: 'Salesforce UUID.',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'createEventType',
		label: 'Create event type',
		description: 'Creates a new event type.',
		context:
			'---\nname: createEventType\ndescription: Creates a new event type for a specified user.\n---\n\nCreates a new event type for a specified user. The `owner` must be a full user URI. Required: `name`, `active`. Optional: `description`, `duration` (1-720 min), `duration_options` (max 4), `locations`, `color` (hex), `locale`.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The URI of the user who owns the event type. For example, `https://api.calendly.com/users/ABCD1234`.',
				},
				name: { type: 'string', description: 'The name of the event type.' },
				active: {
					type: 'boolean',
					description: 'Whether the event type should be active.',
				},
				description: { type: 'string', description: 'The description of the event type.' },
				duration: {
					type: 'number',
					description: 'The duration of the event in minutes.',
					minimum: 1,
					maximum: 720,
				},
				duration_options: {
					type: 'array',
					description: 'Available duration options in minutes. Maximum 4 options.',
					items: {
						type: 'number',
						description: 'A duration option in minutes (1–720).',
						minimum: 1,
						maximum: 720,
					},
					maxItems: 4,
				},
				locations: {
					type: 'array',
					description: 'The locations for the event type.',
					items: {
						type: 'object',
						description: 'An event location.',
						properties: {
							kind: {
								type: 'string',
								description: 'The location type.',
								enum: [
									'physical',
									'outbound_call',
									'inbound_call',
									'ask_invitee',
									'custom',
									'google_conference',
									'zoom_conference',
									'microsoft_teams_conference',
								],
							},
							location: {
								type: 'string',
								description:
									'The location value. Required when `kind` is `physical`, `outbound_call`, `ask_invitee`, or `custom`.',
							},
							phone_number: {
								type: 'string',
								description:
									'The phone number. Required when `kind` is `inbound_call`.',
							},
						},
						required: ['kind'],
					},
				},
				color: {
					type: 'string',
					description: 'The hexadecimal color value. For example, `#fff200`.',
					pattern: String.raw`^#[a-f\d]{6}$`,
				},
				locale: {
					type: 'string',
					description: "The locale for the event type's scheduling page.",
					default: '',
					enum: ['', 'en', 'de', 'es', 'fr', 'it', 'nl', 'pt', 'uk'],
				},
			},
			required: ['owner', 'name', 'active'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The created event type resource.',
					properties: {
						uri: {
							type: 'string',
							description:
								'Canonical reference (unique identifier) for the event type.',
						},
						name: { type: 'string', description: 'The name of the event type.' },
						active: {
							type: 'boolean',
							description:
								'Whether the event type is active and visible on the scheduling page.',
						},
						slug: {
							type: 'string',
							description: 'The URL slug used in the scheduling page URL.',
						},
						scheduling_url: {
							type: 'string',
							description: 'The public URL where invitees can book this event type.',
						},
						duration: {
							type: 'number',
							description: 'The duration of the event in minutes.',
						},
						duration_options: {
							type: 'array',
							description:
								'Array of duration options in minutes. Always null for adhoc event types.',
							items: { type: 'number', description: 'A duration option in minutes.' },
						},
						kind: {
							type: 'string',
							description:
								'The kind of event type (e.g. `solo` for individual, `group` for group events).',
						},
						type: {
							type: 'string',
							description:
								'The event type classification (e.g. `StandardEventType`, `AdhocEventType`).',
						},
						color: {
							type: 'string',
							description:
								'The hexadecimal color value displayed in the UI (e.g. `#fff200`).',
						},
						description_plain: {
							type: 'string',
							description:
								'The event type description in plain text, shown to invitees.',
						},
						description_html: {
							type: 'string',
							description: 'The event type description formatted with HTML.',
						},
						internal_note: {
							type: 'string',
							description: 'Internal notes for the host. Not visible to invitees.',
						},
						pooling_type: {
							type: 'string',
							description:
								'The pooling type for round-robin events (e.g. `round_robin`, `collective`).',
						},
						position: {
							type: 'number',
							description:
								'Position order of the event type, starting with 0 (for display purposes).',
						},
						secret: {
							type: 'boolean',
							description:
								'Whether the event type is secret (hidden from the public scheduling page but accessible via direct link).',
						},
						booking_method: {
							type: 'string',
							description: 'The booking method (e.g. `instant`, `poll`).',
						},
						is_paid: {
							type: 'boolean',
							description:
								'Whether the event type requires payment from the invitee.',
						},
						admin_managed: {
							type: 'boolean',
							description:
								'Whether the event type is managed by an organization admin rather than the individual user.',
						},
						locale: {
							type: 'string',
							description:
								"The locale of the event type's scheduling page (e.g. `en`, `fr`, `de`).",
						},
						profile: {
							type: 'object',
							description: 'The profile of the event type owner.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the profile.',
								},
								owner: {
									type: 'string',
									description:
										'The URI of the user or organization that owns this event type.',
								},
								type: {
									type: 'string',
									description: 'The profile type (e.g. `User`, `Team`).',
								},
							},
							required: [],
						},
						custom_questions: {
							type: 'array',
							description:
								'Custom questions configured for the event type, shown to invitees during booking.',
							items: {
								type: 'object',
								description: 'A custom question for invitees.',
								properties: {
									name: {
										type: 'string',
										description: 'The question text shown to invitees.',
									},
									type: {
										type: 'string',
										description:
											'The question type (e.g. `string`, `text`, `phone_number`, `select`, `radios`).',
									},
									position: {
										type: 'number',
										description:
											'The display position of the question in the list.',
									},
									enabled: {
										type: 'boolean',
										description: 'Whether the question is currently enabled.',
									},
									required: {
										type: 'boolean',
										description:
											'Whether the invitee must answer this question.',
									},
									include_other: {
										type: 'boolean',
										description:
											"Whether an 'Other' free-text option is included for select/radio questions.",
									},
									answer_choices: {
										type: 'array',
										description:
											'Available answer choices for select and radio question types.',
										items: { type: 'string', description: 'An answer choice.' },
									},
								},
								required: [],
							},
						},
						locations: {
							type: 'array',
							description: 'The locations configured for the event type.',
							items: {
								type: 'object',
								description: 'An event location.',
								properties: {
									kind: {
										type: 'string',
										description:
											'The location type (e.g. `physical`, `outbound_call`, `zoom_conference`).',
									},
									location: {
										type: 'string',
										description:
											'The location value (URL, address, or phone number depending on the kind).',
									},
									additional_info: {
										type: 'string',
										description: 'Additional information about the location.',
									},
									phone_number: {
										type: 'string',
										description: 'The phone number for inbound call locations.',
									},
								},
								required: [],
							},
						},
						created_at: {
							type: 'string',
							description: 'The moment when the event type was created.',
						},
						updated_at: {
							type: 'string',
							description: 'The moment when the event type was last updated.',
						},
						deleted_at: {
							type: 'string',
							description:
								'The moment when the event type was deleted. Null if not deleted.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'createInviteeNoShow',
		label: 'Create invitee no show',
		description: 'Marks an invitee as a no show.',
		context:
			'---\nname: createInviteeNoShow\ndescription: Creates a no-show record for a specified invitee.\n---\n\nCreates a no-show record for a specified invitee. The `invitee` must be the full invitee URI (e.g. `https://api.calendly.com/scheduled_events/ABCD1234/invitees/EFGH5678`).',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				invitee: {
					type: 'string',
					description:
						'The URI of the invitee to mark as no show. For example, `https://api.calendly.com/scheduled_events/ABCD1234/invitees/EFGH5678`.',
				},
			},
			required: ['invitee'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The no show resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the no show record.',
						},
						invitee: { type: 'string', description: 'The URI of the invitee.' },
						created_at: {
							type: 'string',
							description: 'When the no show was created.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'createOrganizationInvitation',
		label: 'Create organization invitation',
		description: 'Invites a user to an organization.',
		context:
			'---\nname: createOrganizationInvitation\ndescription: Sends an invitation to join an organization.\n---\n\nSends an invitation email to join the specified organization. The `org_uuid` is from the organization URI. Invited user receives an email and can accept or decline.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				org_uuid: {
					type: 'string',
					description:
						'The unique identifier of the organization. You can find this in the organization URI: `https://api.calendly.com/organizations/{uuid}`.',
				},
				email: { type: 'string', description: 'The email address of the user to invite.' },
			},
			required: ['org_uuid', 'email'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The organization invitation resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the invitation.',
						},
						email: { type: 'string', description: 'The email of the invited user.' },
						organization: {
							type: 'string',
							description: 'The URI of the organization.',
						},
						status: {
							type: 'string',
							description:
								'The status of the invitation (e.g. `pending`, `accepted`, `declined`).',
						},
						last_sent_at: {
							type: 'string',
							description: 'When the invitation was last sent.',
						},
						user: {
							type: 'string',
							description:
								'When the invitation is accepted, the URI of the user who accepted.',
						},
						created_at: {
							type: 'string',
							description: 'When the invitation was created.',
						},
						updated_at: {
							type: 'string',
							description: 'When the invitation was last updated.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'createSchedulingLink',
		label: 'Create scheduling link',
		description: 'Creates a single-use scheduling link.',
		context:
			'---\nname: createSchedulingLink\ndescription: Creates a single-use scheduling link for an event type.\n---\n\nCreates a single-use scheduling link for a given event type. The `owner` must be a full event type URI. `owner_type` is hardcoded to `EventType` and `max_event_count` is hardcoded to `1` — the only input is the event type `owner` URI. Response includes the `booking_url` that can be shared.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				owner: {
					type: 'string',
					description:
						'The URI of the event type. For example, `https://api.calendly.com/event_types/ABCD1234`.',
				},
			},
			required: ['owner'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The scheduling link resource.',
					properties: {
						booking_url: {
							type: 'string',
							description: 'The URL for the scheduling link.',
						},
						owner: {
							type: 'string',
							description: 'The URI of the owner (event type).',
						},
						owner_type: { type: 'string', description: 'The type of the owner.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'deleteInviteeNoShow',
		label: 'Delete invitee no show',
		description: 'Removes the no show status from a specified invitee.',
		context:
			'---\nname: deleteInviteeNoShow\ndescription: Deletes a no-show record.\n---\n\nDeletes a no-show record by its UUID, clearing the no-show status. Returns empty response on success (204 No Content).',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description: 'The unique identifier of the no show record to delete.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'getEvent',
		label: 'Get event',
		description: 'Returns information about a specified scheduled event.',
		context:
			'---\nname: getEvent\ndescription: Retrieves a single scheduled event by its UUID.\n---\n\nRetrieves a single scheduled event by its UUID.\n\nThe `uuid` parameter is the unique identifier found in the event URI (e.g. for `https://api.calendly.com/scheduled_events/ABCD1234`, the UUID is `ABCD1234`).\n\nThe response includes event details such as name, status, start/end times, location, invitees counter, event memberships (hosts), event guests, and cancellation details.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description:
						'The unique identifier of the scheduled event. You can find this in the event URI: `https://api.calendly.com/scheduled_events/{uuid}`.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The scheduled event resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference (unique identifier) for the event.',
						},
						name: { type: 'string', description: 'The event name.' },
						meeting_notes_plain: {
							type: 'string',
							description: 'The internal meeting notes in plain text.',
						},
						meeting_notes_html: {
							type: 'string',
							description: 'The internal meeting notes formatted with HTML.',
						},
						status: {
							type: 'string',
							description: 'Indicates if the event is `active` or `canceled`.',
						},
						start_time: {
							type: 'string',
							description:
								'The moment the event was scheduled to start in UTC time (e.g. `2020-01-02T03:04:05.678123Z`).',
						},
						end_time: {
							type: 'string',
							description:
								'The moment the event was scheduled to end in UTC time (e.g. `2020-01-02T03:04:05.678123Z`).',
						},
						event_type: {
							type: 'string',
							description: 'The URI of the event type associated with this event.',
						},
						location: {
							type: 'object',
							description: 'The event location.',
							properties: {
								type: { type: 'string', description: 'The location type.' },
								location: {
									type: 'string',
									description:
										'The location value (URL, address, or phone number depending on type).',
								},
								additional_info: {
									type: 'string',
									description: 'Additional information about the location.',
								},
								join_url: {
									type: 'string',
									description:
										'The video conference meeting URL (e.g. Zoom, WebEx).',
								},
								status: {
									type: 'string',
									description: 'The video conferencing status.',
								},
								data: {
									type: 'object',
									description: 'Additional video conferencing data.',
									properties: {
										id: { type: 'string', description: 'The conference ID.' },
										password: {
											type: 'string',
											description: 'The conference password.',
										},
										telephony: {
											type: 'object',
											description: 'Telephony dial-in information.',
											properties: {
												callInNumbers: {
													type: 'array',
													description: 'List of dial-in numbers.',
													items: {
														type: 'object',
														description: 'A dial-in number.',
														properties: {
															label: {
																type: 'string',
																description:
																	'The label for the number.',
															},
															callInNumber: {
																type: 'string',
																description: 'The phone number.',
															},
															tollType: {
																type: 'string',
																description:
																	'The toll type (e.g. `toll`, `tollFree`).',
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
						invitees_counter: {
							type: 'object',
							description: 'The number of invitees for the event.',
							properties: {
								total: {
									type: 'number',
									description: 'The total number of invitees.',
								},
								active: {
									type: 'number',
									description: 'The number of active (not canceled) invitees.',
								},
								limit: {
									type: 'number',
									description: 'The maximum number of invitees allowed.',
								},
							},
							required: [],
						},
						created_at: {
							type: 'string',
							description:
								'The moment when the event was created (e.g. `2020-01-02T03:04:05.678123Z`).',
						},
						updated_at: {
							type: 'string',
							description:
								'The moment when the event was last updated (e.g. `2020-01-02T03:04:05.678123Z`).',
						},
						event_memberships: {
							type: 'array',
							description: 'The list of event memberships (hosts).',
							items: {
								type: 'object',
								description: 'A host of the event.',
								properties: {
									user: { type: 'string', description: 'The URI of the user.' },
									user_email: {
										type: 'string',
										description: 'The email of the user.',
									},
									user_name: {
										type: 'string',
										description: 'The name of the user.',
									},
									buffered_start_time: {
										type: 'string',
										description:
											'The buffered start time of the event for this user.',
									},
									buffered_end_time: {
										type: 'string',
										description:
											'The buffered end time of the event for this user.',
									},
								},
								required: [],
							},
						},
						event_guests: {
							type: 'array',
							description: 'Additional people added to the event by an invitee.',
							items: {
								type: 'object',
								description: 'A guest added to the event.',
								properties: {
									email: {
										type: 'string',
										description: 'The email of the guest.',
									},
									created_at: {
										type: 'string',
										description: 'The moment when the guest was created.',
									},
									updated_at: {
										type: 'string',
										description: 'The moment when the guest was last updated.',
									},
								},
								required: [],
							},
						},
						cancellation: {
							type: 'object',
							description:
								'Cancellation details, populated when the event is canceled.',
							properties: {
								canceled_by: {
									type: 'string',
									description: 'The name of the person who canceled.',
								},
								canceler_type: {
									type: 'string',
									description:
										'The type of the canceler (e.g. `host`, `invitee`).',
								},
								reason: {
									type: 'string',
									description: 'The reason for the cancellation.',
								},
								created_at: {
									type: 'string',
									description: 'The moment when the cancellation was created.',
								},
							},
							required: [],
						},
						calendar_event: {
							type: 'object',
							description:
								'The calendar event associated with this scheduled event (deprecated).',
							properties: {
								kind: { type: 'string', description: 'The calendar provider.' },
								external_id: {
									type: 'string',
									description: 'The calendar event ID.',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'getEventInvitee',
		label: 'Get event invitee',
		description: 'Returns information about a specified event invitee.',
		context:
			'---\nname: getEventInvitee\ndescription: Retrieves a single invitee of a scheduled event.\n---\n\nRetrieves a single invitee of a scheduled event. Requires both `event_uuid` and `invitee_uuid`. Response includes name, email, status, timezone, questions and answers, tracking, no-show status, payment details, and more.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				event_uuid: {
					type: 'string',
					description: 'The unique identifier of the scheduled event.',
				},
				invitee_uuid: {
					type: 'string',
					description: 'The unique identifier of the invitee.',
				},
			},
			required: ['event_uuid', 'invitee_uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The invitee resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the invitee.',
						},
						email: { type: 'string', description: "The invitee's email address." },
						name: { type: 'string', description: "The invitee's full name." },
						first_name: { type: 'string', description: "The invitee's first name." },
						last_name: { type: 'string', description: "The invitee's last name." },
						status: {
							type: 'string',
							description: "The invitee's status (`active` or `canceled`).",
						},
						timezone: { type: 'string', description: "The invitee's timezone." },
						event: { type: 'string', description: 'The URI of the scheduled event.' },
						text_reminder_number: {
							type: 'string',
							description: "The invitee's phone number for SMS reminders.",
						},
						rescheduled: {
							type: 'boolean',
							description: 'Whether the invitee has rescheduled.',
						},
						old_invitee: {
							type: 'string',
							description: 'URI of the old invitee if rescheduled.',
						},
						new_invitee: {
							type: 'string',
							description: 'URI of the new invitee if rescheduled.',
						},
						cancel_url: { type: 'string', description: 'URL to cancel the event.' },
						reschedule_url: {
							type: 'string',
							description: 'URL to reschedule the event.',
						},
						created_at: {
							type: 'string',
							description: 'When the invitee was created.',
						},
						updated_at: {
							type: 'string',
							description: 'When the invitee was last updated.',
						},
						invitee_scheduled_by: {
							type: 'string',
							description: 'The URI of the user who scheduled this invitee.',
						},
						routing_form_submission: {
							type: 'string',
							description: 'URI of the routing form submission if applicable.',
						},
						cancellation: {
							type: 'object',
							description:
								'Cancellation details if the invitee or event was canceled.',
							properties: {
								canceled_by: {
									type: 'string',
									description: 'Name of the person who canceled.',
								},
								reason: {
									type: 'string',
									description: 'The reason for the cancellation.',
								},
								canceler_type: {
									type: 'string',
									description: 'The type of canceler (e.g. `host`, `invitee`).',
								},
								created_at: {
									type: 'string',
									description: 'The moment when the cancellation was created.',
								},
							},
							required: [],
						},
						no_show: {
							type: 'object',
							description: 'No show details if the invitee was marked as no show.',
							properties: {
								uri: { type: 'string', description: 'URI of the no show record.' },
								created_at: {
									type: 'string',
									description: 'When the no show was created.',
								},
							},
							required: [],
						},
						payment: {
							type: 'object',
							description: 'Payment details if the event is paid.',
							properties: {
								external_id: {
									type: 'string',
									description: "The payment processor's ID.",
								},
								provider: { type: 'string', description: 'The payment provider.' },
								amount: { type: 'number', description: 'The payment amount.' },
								currency: { type: 'string', description: 'The payment currency.' },
								terms: { type: 'string', description: 'The payment terms.' },
								successful: {
									type: 'boolean',
									description: 'Whether the payment was successful.',
								},
							},
							required: [],
						},
						reconfirmation: {
							type: 'object',
							description: 'Reconfirmation details.',
							properties: {
								created_at: {
									type: 'string',
									description: 'When the reconfirmation was created.',
								},
								confirmed_at: {
									type: 'string',
									description: 'When the invitee confirmed.',
								},
							},
							required: [],
						},
						scheduling_method: {
							type: 'string',
							description: 'How the event was scheduled.',
						},
						questions_and_answers: {
							type: 'array',
							description: "The invitee's responses to custom questions.",
							items: {
								type: 'object',
								description: "A question and the invitee's answer.",
								properties: {
									question: { type: 'string', description: 'The question text.' },
									answer: {
										type: 'string',
										description: "The invitee's response.",
									},
									position: {
										type: 'number',
										description: 'The position of the question.',
									},
								},
								required: [],
							},
						},
						tracking: {
							type: 'object',
							description: 'UTM and Salesforce tracking parameters.',
							properties: {
								utm_campaign: {
									type: 'string',
									description: 'The UTM campaign parameter.',
								},
								utm_source: {
									type: 'string',
									description: 'The UTM source parameter.',
								},
								utm_medium: {
									type: 'string',
									description: 'The UTM medium parameter.',
								},
								utm_content: {
									type: 'string',
									description: 'The UTM content parameter.',
								},
								utm_term: {
									type: 'string',
									description: 'The UTM term parameter.',
								},
								salesforce_uuid: {
									type: 'string',
									description: 'The Salesforce record unique identifier.',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'getEventType',
		label: 'Get event type',
		description: 'Returns information about a specified event type.',
		context:
			'---\nname: getEventType\ndescription: Retrieves a single event type by its UUID.\n---\n\nRetrieves a single event type by its UUID. The UUID is found in the event type URI (e.g. `https://api.calendly.com/event_types/ABCD1234` -> `ABCD1234`).',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description:
						'The unique identifier of the event type. You can find this in the event type URI: `https://api.calendly.com/event_types/{uuid}`.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The event type resource.',
					properties: {
						uri: {
							type: 'string',
							description:
								'Canonical reference (unique identifier) for the event type.',
						},
						name: { type: 'string', description: 'The name of the event type.' },
						active: {
							type: 'boolean',
							description:
								'Whether the event type is active and visible on the scheduling page.',
						},
						slug: {
							type: 'string',
							description: 'The URL slug used in the scheduling page URL.',
						},
						scheduling_url: {
							type: 'string',
							description: 'The public URL where invitees can book this event type.',
						},
						duration: {
							type: 'number',
							description: 'The duration of the event in minutes.',
						},
						duration_options: {
							type: 'array',
							description:
								'Array of duration options in minutes. Always null for adhoc event types.',
							items: { type: 'number', description: 'A duration option in minutes.' },
						},
						kind: {
							type: 'string',
							description:
								'The kind of event type (e.g. `solo` for individual, `group` for group events).',
						},
						type: {
							type: 'string',
							description:
								'The event type classification (e.g. `StandardEventType`, `AdhocEventType`).',
						},
						color: {
							type: 'string',
							description:
								'The hexadecimal color value displayed in the UI (e.g. `#fff200`).',
						},
						description_plain: {
							type: 'string',
							description:
								'The event type description in plain text, shown to invitees.',
						},
						description_html: {
							type: 'string',
							description: 'The event type description formatted with HTML.',
						},
						internal_note: {
							type: 'string',
							description: 'Internal notes for the host. Not visible to invitees.',
						},
						pooling_type: {
							type: 'string',
							description:
								'The pooling type for round-robin events (e.g. `round_robin`, `collective`).',
						},
						position: {
							type: 'number',
							description:
								'Position order of the event type, starting with 0 (for display purposes).',
						},
						secret: {
							type: 'boolean',
							description:
								'Whether the event type is secret (hidden from the public scheduling page but accessible via direct link).',
						},
						booking_method: {
							type: 'string',
							description: 'The booking method (e.g. `instant`, `poll`).',
						},
						is_paid: {
							type: 'boolean',
							description:
								'Whether the event type requires payment from the invitee.',
						},
						admin_managed: {
							type: 'boolean',
							description:
								'Whether the event type is managed by an organization admin rather than the individual user.',
						},
						locale: {
							type: 'string',
							description:
								"The locale of the event type's scheduling page (e.g. `en`, `fr`, `de`).",
						},
						profile: {
							type: 'object',
							description: 'The profile of the event type owner.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the profile.',
								},
								owner: {
									type: 'string',
									description:
										'The URI of the user or organization that owns this event type.',
								},
								type: {
									type: 'string',
									description: 'The profile type (e.g. `User`, `Team`).',
								},
							},
							required: [],
						},
						custom_questions: {
							type: 'array',
							description:
								'Custom questions configured for the event type, shown to invitees during booking.',
							items: {
								type: 'object',
								description: 'A custom question for invitees.',
								properties: {
									name: {
										type: 'string',
										description: 'The question text shown to invitees.',
									},
									type: {
										type: 'string',
										description:
											'The question type (e.g. `string`, `text`, `phone_number`, `select`, `radios`).',
									},
									position: {
										type: 'number',
										description:
											'The display position of the question in the list.',
									},
									enabled: {
										type: 'boolean',
										description: 'Whether the question is currently enabled.',
									},
									required: {
										type: 'boolean',
										description:
											'Whether the invitee must answer this question.',
									},
									include_other: {
										type: 'boolean',
										description:
											"Whether an 'Other' free-text option is included for select/radio questions.",
									},
									answer_choices: {
										type: 'array',
										description:
											'Available answer choices for select and radio question types.',
										items: { type: 'string', description: 'An answer choice.' },
									},
								},
								required: [],
							},
						},
						locations: {
							type: 'array',
							description: 'The locations configured for the event type.',
							items: {
								type: 'object',
								description: 'An event location.',
								properties: {
									kind: {
										type: 'string',
										description:
											'The location type (e.g. `physical`, `outbound_call`, `zoom_conference`).',
									},
									location: {
										type: 'string',
										description:
											'The location value (URL, address, or phone number depending on the kind).',
									},
									additional_info: {
										type: 'string',
										description: 'Additional information about the location.',
									},
									phone_number: {
										type: 'string',
										description: 'The phone number for inbound call locations.',
									},
								},
								required: [],
							},
						},
						created_at: {
							type: 'string',
							description: 'The moment when the event type was created.',
						},
						updated_at: {
							type: 'string',
							description: 'The moment when the event type was last updated.',
						},
						deleted_at: {
							type: 'string',
							description:
								'The moment when the event type was deleted. Null if not deleted.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'getInviteeNoShow',
		label: 'Get invitee no show',
		description: 'Returns information about a specified invitee no show.',
		context:
			'---\nname: getInviteeNoShow\ndescription: Retrieves a no-show record by its UUID.\n---\n\nRetrieves a no-show record by its UUID.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description: 'The unique identifier of the no show record.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The no show resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the no show record.',
						},
						invitee: { type: 'string', description: 'The URI of the invitee.' },
						created_at: {
							type: 'string',
							description: 'When the no show was created.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'getOrganizationMembership',
		label: 'Get organization membership',
		description: 'Returns information about a specified organization membership.',
		context:
			'---\nname: getOrganizationMembership\ndescription: Retrieves a single organization membership by its UUID.\n---\n\nRetrieves a single organization membership by its UUID. Includes user details (name, email, scheduling URL, timezone, avatar URL).',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description: 'The unique identifier of the organization membership.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The organization membership resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the membership.',
						},
						role: {
							type: 'string',
							description: 'The role of the member (`user`, `admin`, `owner`).',
						},
						organization: {
							type: 'string',
							description: 'The URI of the organization.',
						},
						user: {
							type: 'object',
							description: 'The user details.',
							properties: {
								uri: { type: 'string', description: 'The URI of the user.' },
								name: { type: 'string', description: "The user's name." },
								email: { type: 'string', description: "The user's email." },
								slug: { type: 'string', description: "The user's slug." },
								scheduling_url: {
									type: 'string',
									description: "The user's scheduling URL.",
								},
								timezone: { type: 'string', description: "The user's timezone." },
								avatar_url: {
									type: 'string',
									description: "The user's avatar URL.",
								},
								locale: {
									type: 'string',
									description: "The user's language preference.",
								},
								created_at: {
									type: 'string',
									description: 'When the user was created.',
								},
								updated_at: {
									type: 'string',
									description: 'When the user was last updated.',
								},
							},
							required: [],
						},
						created_at: {
							type: 'string',
							description: 'When the membership was created.',
						},
						updated_at: {
							type: 'string',
							description: 'When the membership was last updated.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'getUserAvailabilitySchedule',
		label: 'Get user availability schedule',
		description: 'Returns information about a specified user availability schedule.',
		context:
			'---\nname: getUserAvailabilitySchedule\ndescription: Retrieves a single user availability schedule by its UUID.\n---\n\nRetrieves a single user availability schedule by its UUID. Use `listUserAvailabilitySchedules` to find the UUID first.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description: 'The unique identifier of the availability schedule.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The user availability schedule resource.',
					properties: {
						uri: {
							type: 'string',
							description: 'Canonical reference for the schedule.',
						},
						default: {
							type: 'boolean',
							description: 'Whether this is the default schedule.',
						},
						name: { type: 'string', description: 'The name of the schedule.' },
						user: { type: 'string', description: 'The URI of the user.' },
						timezone: { type: 'string', description: 'The timezone in IANA format.' },
						rules: {
							type: 'array',
							description: 'The availability rules.',
							items: {
								type: 'object',
								description: 'An availability rule.',
								properties: {
									type: {
										type: 'string',
										description: 'Rule type (`wday` or `date`).',
									},
									wday: { type: 'string', description: 'The weekday name.' },
									date: { type: 'string', description: 'A specific date.' },
									intervals: {
										type: 'array',
										description: 'Time intervals.',
										items: {
											type: 'object',
											description: 'A time interval.',
											properties: {
												from: {
													type: 'string',
													description:
														'Start time in 24-hour format (e.g. `09:00`).',
												},
												to: {
													type: 'string',
													description:
														'End time in 24-hour format (e.g. `17:00`).',
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
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listEventInvitees',
		label: 'List event invitees',
		description: 'Returns a list of invitees for a specified scheduled event.',
		context:
			'---\nname: listEventInvitees\ndescription: Returns a paginated list of invitees for a scheduled event.\n---\n\nReturns a paginated list of invitees for a specific scheduled event. The `uuid` is the event UUID. Results can be filtered by `status` and `email`. Use `sort` for ordering by `created_at`. Pagination: `count` (1-100) and `page_token`.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description:
						'The unique identifier of the scheduled event. You can find this in the event URI: `https://api.calendly.com/scheduled_events/{uuid}`.',
				},
				status: {
					type: 'string',
					description: 'Filter invitees by status.',
					default: '',
					enum: ['', 'active', 'canceled'],
				},
				sort: {
					type: 'string',
					description: 'Order results by the `created_at` field and direction.',
					default: '',
					enum: ['', 'created_at:asc', 'created_at:desc'],
				},
				email: {
					type: 'string',
					description: "Filter results by the invitee's email address.",
				},
				count: {
					type: 'number',
					description: 'The number of rows to return. Minimum `1`, maximum `100`.',
					minimum: 1,
					maximum: 100,
				},
				page_token: {
					type: 'string',
					description:
						'The token to pass to get the next or previous portion of the collection.',
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of invitees.',
					items: {
						type: 'object',
						description: 'An event invitee.',
						properties: {
							uri: {
								type: 'string',
								description: 'Canonical reference for the invitee.',
							},
							email: { type: 'string', description: "The invitee's email address." },
							name: { type: 'string', description: "The invitee's full name." },
							first_name: {
								type: 'string',
								description: "The invitee's first name.",
							},
							last_name: { type: 'string', description: "The invitee's last name." },
							status: {
								type: 'string',
								description: "The invitee's status (`active` or `canceled`).",
							},
							timezone: { type: 'string', description: "The invitee's timezone." },
							event: {
								type: 'string',
								description: 'The URI of the scheduled event.',
							},
							text_reminder_number: {
								type: 'string',
								description: 'Phone number for SMS reminders.',
							},
							rescheduled: {
								type: 'boolean',
								description: 'Whether the invitee has rescheduled.',
							},
							old_invitee: {
								type: 'string',
								description: 'URI of the old invitee if rescheduled.',
							},
							new_invitee: {
								type: 'string',
								description: 'URI of the new invitee if rescheduled.',
							},
							cancel_url: { type: 'string', description: 'URL to cancel the event.' },
							reschedule_url: {
								type: 'string',
								description: 'URL to reschedule the event.',
							},
							created_at: {
								type: 'string',
								description: 'When the invitee was created.',
							},
							updated_at: {
								type: 'string',
								description: 'When the invitee was last updated.',
							},
							invitee_scheduled_by: {
								type: 'string',
								description: 'The URI of the user who scheduled this invitee.',
							},
							routing_form_submission: {
								type: 'string',
								description: 'URI of the routing form submission if applicable.',
							},
							cancellation: {
								type: 'object',
								description:
									'Cancellation details if the invitee or event was canceled.',
								properties: {
									canceled_by: {
										type: 'string',
										description: 'Name of the person who canceled.',
									},
									reason: {
										type: 'string',
										description: 'The reason for the cancellation.',
									},
									canceler_type: {
										type: 'string',
										description:
											'The type of canceler (e.g. `host`, `invitee`).',
									},
									created_at: {
										type: 'string',
										description:
											'The moment when the cancellation was created.',
									},
								},
								required: [],
							},
							no_show: {
								type: 'object',
								description:
									'No show details if the invitee was marked as no show.',
								properties: {
									uri: {
										type: 'string',
										description: 'URI of the no show record.',
									},
									created_at: {
										type: 'string',
										description: 'When the no show was created.',
									},
								},
								required: [],
							},
							payment: {
								type: 'object',
								description: 'Payment details if the event is paid.',
								properties: {
									external_id: {
										type: 'string',
										description: "The payment processor's ID.",
									},
									provider: {
										type: 'string',
										description: 'The payment provider.',
									},
									amount: { type: 'number', description: 'The payment amount.' },
									currency: {
										type: 'string',
										description: 'The payment currency.',
									},
									terms: { type: 'string', description: 'The payment terms.' },
									successful: {
										type: 'boolean',
										description: 'Whether the payment was successful.',
									},
								},
								required: [],
							},
							reconfirmation: {
								type: 'object',
								description: 'Reconfirmation details.',
								properties: {
									created_at: {
										type: 'string',
										description: 'When the reconfirmation was created.',
									},
									confirmed_at: {
										type: 'string',
										description: 'When the invitee confirmed.',
									},
								},
								required: [],
							},
							scheduling_method: {
								type: 'string',
								description: 'How the event was scheduled.',
							},
							questions_and_answers: {
								type: 'array',
								description: "The invitee's responses to custom questions.",
								items: {
									type: 'object',
									description: "A question and the invitee's answer.",
									properties: {
										question: {
											type: 'string',
											description: 'The question text.',
										},
										answer: {
											type: 'string',
											description: "The invitee's response.",
										},
										position: {
											type: 'number',
											description: 'The position of the question.',
										},
									},
									required: [],
								},
							},
							tracking: {
								type: 'object',
								description: 'UTM and Salesforce tracking parameters.',
								properties: {
									utm_campaign: {
										type: 'string',
										description: 'The UTM campaign parameter.',
									},
									utm_source: {
										type: 'string',
										description: 'The UTM source parameter.',
									},
									utm_medium: {
										type: 'string',
										description: 'The UTM medium parameter.',
									},
									utm_content: {
										type: 'string',
										description: 'The UTM content parameter.',
									},
									utm_term: {
										type: 'string',
										description: 'The UTM term parameter.',
									},
									salesforce_uuid: {
										type: 'string',
										description: 'The Salesforce record unique identifier.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information.',
					properties: {
						count: { type: 'number', description: 'The number of rows returned.' },
						next_page: { type: 'string', description: 'URI to get the next page.' },
						previous_page: {
							type: 'string',
							description: 'URI to get the previous page.',
						},
						next_page_token: {
							type: 'string',
							description: 'Token for the next page.',
						},
						previous_page_token: {
							type: 'string',
							description: 'Token for the previous page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listEvents',
		label: 'List events',
		description: 'Returns a list of scheduled events.',
		context:
			"---\nname: listEvents\ndescription: Returns a paginated list of scheduled events.\n---\n\nReturns a paginated list of scheduled events.\n\nIf neither `user` nor `organization` is provided, `user` defaults to the authenticated user. Results can be filtered by `status`, `invitee_email`, date range (`min_start_time`/`max_start_time`), and `group`. Use `sort` to order by `start_time` (e.g. `start_time:asc`). Pagination: use `count` (1-100, default 20) and `page_token` from the previous response's `pagination.next_page_token`.",
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				organization: {
					type: 'string',
					description:
						'Return events for the organization associated with this URI. For example, `https://api.calendly.com/organizations/ABCD1234`. Requires admin or owner privileges on the organization.',
				},
				user: {
					type: 'string',
					description:
						'Return events scheduled with the user associated with this URI. Defaults to the authenticated user when neither `user` nor `organization` is provided.',
				},
				invitee_email: {
					type: 'string',
					description:
						'Return events scheduled with the invitee associated with this email address.',
				},
				status: {
					type: 'string',
					description: 'Whether the scheduled event is active or canceled.',
					default: '',
					enum: ['', 'active', 'canceled'],
				},
				sort: {
					type: 'string',
					description: 'Order results by the specified field and direction.',
					default: '',
					enum: ['', 'start_time:asc', 'start_time:desc'],
				},
				min_start_time: {
					type: 'string',
					description:
						'Include events with start times after this time. Use UTC format: `2020-01-02T03:04:05.678123Z`.',
				},
				max_start_time: {
					type: 'string',
					description:
						'Include events with start times prior to this time. Use UTC format: `2020-01-02T03:04:05.678123Z`.',
				},
				group: {
					type: 'string',
					description:
						'Return events for the group associated with this URI. Requires organization admin/owner or group admin privilege.',
				},
				count: {
					type: 'number',
					description: 'The number of rows to return. Minimum `1`, maximum `100`.',
					minimum: 1,
					maximum: 100,
				},
				page_token: {
					type: 'string',
					description:
						'The token to pass to get the next or previous portion of the collection. Obtained from `pagination.next_page_token` in a previous response.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of scheduled events.',
					items: {
						type: 'object',
						description: 'A scheduled event.',
						properties: {
							uri: {
								type: 'string',
								description:
									'Canonical reference (unique identifier) for the event.',
							},
							name: { type: 'string', description: 'The event name.' },
							meeting_notes_plain: {
								type: 'string',
								description: 'The internal meeting notes in plain text.',
							},
							meeting_notes_html: {
								type: 'string',
								description: 'The internal meeting notes formatted with HTML.',
							},
							status: {
								type: 'string',
								description: 'Indicates if the event is `active` or `canceled`.',
							},
							start_time: {
								type: 'string',
								description:
									'The moment the event was scheduled to start in UTC time.',
							},
							end_time: {
								type: 'string',
								description:
									'The moment the event was scheduled to end in UTC time.',
							},
							event_type: {
								type: 'string',
								description:
									'The URI of the event type associated with this event.',
							},
							location: {
								type: 'object',
								description: 'The event location.',
								properties: {
									type: { type: 'string', description: 'The location type.' },
									location: {
										type: 'string',
										description: 'The location value.',
									},
									additional_info: {
										type: 'string',
										description: 'Additional information about the location.',
									},
									join_url: {
										type: 'string',
										description:
											'The video conference meeting URL (e.g. Zoom, WebEx).',
									},
									status: {
										type: 'string',
										description: 'The video conferencing status.',
									},
									data: {
										type: 'object',
										description: 'Additional video conferencing data.',
										properties: {
											id: {
												type: 'string',
												description: 'The conference ID.',
											},
											password: {
												type: 'string',
												description: 'The conference password.',
											},
											telephony: {
												type: 'object',
												description: 'Telephony dial-in information.',
												properties: {
													callInNumbers: {
														type: 'array',
														description: 'List of dial-in numbers.',
														items: {
															type: 'object',
															description: 'A dial-in number.',
															properties: {
																label: {
																	type: 'string',
																	description:
																		'The label for the number.',
																},
																callInNumber: {
																	type: 'string',
																	description:
																		'The phone number.',
																},
																tollType: {
																	type: 'string',
																	description:
																		'The toll type (e.g. `toll`, `tollFree`).',
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
							invitees_counter: {
								type: 'object',
								description: 'The number of invitees.',
								properties: {
									total: { type: 'number', description: 'Total invitees.' },
									active: { type: 'number', description: 'Active invitees.' },
									limit: { type: 'number', description: 'Maximum allowed.' },
								},
								required: [],
							},
							created_at: {
								type: 'string',
								description: 'When the event was created.',
							},
							updated_at: {
								type: 'string',
								description: 'When the event was last updated.',
							},
							event_memberships: {
								type: 'array',
								description: 'The list of event memberships (hosts).',
								items: {
									type: 'object',
									description: 'A host.',
									properties: {
										user: {
											type: 'string',
											description: 'The URI of the user.',
										},
										user_email: {
											type: 'string',
											description: 'The email of the user.',
										},
										user_name: {
											type: 'string',
											description: 'The name of the user.',
										},
										buffered_start_time: {
											type: 'string',
											description: 'Buffered start time for this user.',
										},
										buffered_end_time: {
											type: 'string',
											description: 'Buffered end time for this user.',
										},
									},
									required: [],
								},
							},
							event_guests: {
								type: 'array',
								description: 'Additional people added by an invitee.',
								items: {
									type: 'object',
									description: 'A guest.',
									properties: {
										email: {
											type: 'string',
											description: 'The email of the guest.',
										},
										created_at: {
											type: 'string',
											description: 'When the guest was created.',
										},
										updated_at: {
											type: 'string',
											description: 'When the guest was last updated.',
										},
									},
									required: [],
								},
							},
							cancellation: {
								type: 'object',
								description:
									'Cancellation details, populated when the event is canceled.',
								properties: {
									canceled_by: {
										type: 'string',
										description: 'The name of the person who canceled.',
									},
									canceler_type: {
										type: 'string',
										description: 'The type of canceler.',
									},
									reason: {
										type: 'string',
										description: 'The reason for cancellation.',
									},
									created_at: {
										type: 'string',
										description: 'When the cancellation was created.',
									},
								},
								required: [],
							},
							calendar_event: {
								type: 'object',
								description:
									'The calendar event associated with this scheduled event (deprecated).',
								properties: {
									kind: { type: 'string', description: 'The calendar provider.' },
									external_id: {
										type: 'string',
										description: 'The calendar event ID.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information.',
					properties: {
						count: { type: 'number', description: 'The number of rows returned.' },
						next_page: {
							type: 'string',
							description: 'URI to get the next page of results.',
						},
						previous_page: {
							type: 'string',
							description: 'URI to get the previous page of results.',
						},
						next_page_token: {
							type: 'string',
							description: 'Token to pass as `page_token` for the next page.',
						},
						previous_page_token: {
							type: 'string',
							description: 'Token to pass as `page_token` for the previous page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listEventTypeAvailabilitySchedules',
		label: 'List event type availability schedules',
		description: 'Returns a list of availability schedules for an event type.',
		context:
			'---\nname: listEventTypeAvailabilitySchedules\ndescription: Returns availability schedules for a specified event type.\n---\n\nReturns availability schedules for a specified event type. The `event_type` must be the full event type URI. Each schedule contains an `availability_rule` with timezone, weekday/date rules, and time intervals.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				event_type: {
					type: 'string',
					description:
						'The URI of the event type. For example, `https://api.calendly.com/event_types/ABCD1234`.',
				},
				count: {
					type: 'number',
					description: 'The number of rows to return.',
					minimum: 1,
					maximum: 100,
				},
				page_token: {
					type: 'string',
					description: 'The token to pass to get the next portion of the collection.',
				},
			},
			required: ['event_type'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of availability schedules.',
					items: {
						type: 'object',
						description: 'An availability schedule.',
						properties: {
							event_type: {
								type: 'string',
								description: 'The URI of the associated event type.',
							},
							availability_setting: {
								type: 'string',
								description: 'The availability setting.',
							},
							availability_rule: {
								type: 'object',
								description: 'The availability rule.',
								properties: {
									uri: {
										type: 'string',
										description: 'URI of the availability rule.',
									},
									name: { type: 'string', description: 'Name of the rule.' },
									timezone: {
										type: 'string',
										description: 'Timezone in IANA format.',
									},
									user: { type: 'string', description: 'The URI of the user.' },
									rules: {
										type: 'array',
										description: 'The individual rules.',
										items: {
											type: 'object',
											description: 'A rule entry.',
											properties: {
												type: {
													type: 'string',
													description: 'Rule type (`wday` or `date`).',
												},
												wday: {
													type: 'string',
													description:
														'The weekday name (e.g. `monday`).',
												},
												date: {
													type: 'string',
													description:
														'A specific date (e.g. `2030-12-31`).',
												},
												intervals: {
													type: 'array',
													description: 'Time intervals for this rule.',
													items: {
														type: 'object',
														description: 'A time interval.',
														properties: {
															from: {
																type: 'string',
																description:
																	'Start time in 24-hour format (e.g. `09:00`).',
															},
															to: {
																type: 'string',
																description:
																	'End time in 24-hour format (e.g. `17:00`).',
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
				pagination: {
					type: 'object',
					description: 'Pagination information.',
					properties: {
						count: { type: 'number', description: 'The number of rows returned.' },
						next_page: { type: 'string', description: 'URI to get the next page.' },
						previous_page: {
							type: 'string',
							description: 'URI to get the previous page.',
						},
						next_page_token: {
							type: 'string',
							description: 'Token for the next page.',
						},
						previous_page_token: {
							type: 'string',
							description: 'Token for the previous page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listEventTypeAvailableTimes',
		label: 'List event type available times',
		description:
			'Returns a list of available times for an event type within a specified date range.',
		context:
			'---\nname: listEventTypeAvailableTimes\ndescription: Returns available booking times for an event type within a date range.\n---\n\nReturns available booking times for an event type within a date range. All three parameters required: `event_type` (full URI), `start_time`, `end_time` (UTC). Date range max 31 days. No pagination - all results in one response.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				event_type: {
					type: 'string',
					description:
						'The URI of the event type for which to retrieve available times. For example, `https://api.calendly.com/event_types/ABCD1234`.',
				},
				start_time: {
					type: 'string',
					description:
						'Start of the time range to check for available times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`.',
				},
				end_time: {
					type: 'string',
					description:
						'End of the time range to check for available times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`. Maximum `31` days from `start_time`.',
				},
			},
			required: ['event_type', 'start_time', 'end_time'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of available time slots.',
					items: {
						type: 'object',
						description: 'An available time slot.',
						properties: {
							invitees_remaining: {
								type: 'number',
								description: 'The number of remaining invitee spots.',
							},
							scheduling_url: {
								type: 'string',
								description: 'The URL to schedule at this time.',
							},
							start_time: {
								type: 'string',
								description: 'The start time of the slot.',
							},
							status: {
								type: 'string',
								description:
									'The status of the time slot (`available` or `unavailable`).',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listEventTypes',
		label: 'List event types',
		description: 'Returns all event types associated with a specified user.',
		context:
			'---\nname: listEventTypes\ndescription: Returns a paginated list of event types.\n---\n\nReturns a paginated list of event types. If `user` is not provided, it defaults to the authenticated user. Use `organization` to list event types across the entire organization (requires admin/owner privileges). Use `active` to filter by status. Use `sort` to order by `name`. Pagination: `count` (1-100) and `page_token`.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description:
						'Return event types for the user associated with this URI. For example, `https://api.calendly.com/users/ABCD1234`.',
				},
				organization: {
					type: 'string',
					description:
						'Return event types for the organization associated with this URI. Requires admin or owner privileges.',
				},
				active: {
					type: 'boolean',
					description: 'Return only active (`true`) or inactive (`false`) event types.',
				},
				sort: {
					type: 'string',
					description: 'Order results by the specified field and direction.',
					default: '',
					enum: ['', 'name:asc', 'name:desc'],
				},
				count: {
					type: 'number',
					description: 'The number of rows to return. Minimum `1`, maximum `100`.',
					minimum: 1,
					maximum: 100,
				},
				page_token: {
					type: 'string',
					description:
						'The token to pass to get the next or previous portion of the collection.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of event types.',
					items: {
						type: 'object',
						description: 'An event type.',
						properties: {
							uri: {
								type: 'string',
								description: 'Canonical reference for the event type.',
							},
							name: { type: 'string', description: 'The name of the event type.' },
							active: {
								type: 'boolean',
								description: 'Whether the event type is active.',
							},
							slug: {
								type: 'string',
								description: 'The URL slug of the event type.',
							},
							scheduling_url: {
								type: 'string',
								description: 'The public scheduling URL for this event type.',
							},
							duration: {
								type: 'number',
								description: 'The duration of the event in minutes.',
							},
							duration_options: {
								type: 'array',
								description:
									'Array of duration options in minutes. Always null for adhoc event types.',
								items: {
									type: 'number',
									description: 'A duration option in minutes.',
								},
							},
							kind: {
								type: 'string',
								description: 'The kind of event type (e.g. `solo`, `group`).',
							},
							type: { type: 'string', description: 'The event type classification.' },
							color: { type: 'string', description: 'The hexadecimal color value.' },
							description_plain: {
								type: 'string',
								description: 'The description in plain text.',
							},
							description_html: {
								type: 'string',
								description: 'The description in HTML.',
							},
							internal_note: {
								type: 'string',
								description: 'Internal notes for the host.',
							},
							pooling_type: {
								type: 'string',
								description: 'The pooling type for round-robin events.',
							},
							position: {
								type: 'number',
								description:
									'Position order of the event type, starting with 0 (for display purposes).',
							},
							secret: {
								type: 'boolean',
								description:
									'Whether the event type is secret (hidden from the scheduling page).',
							},
							booking_method: { type: 'string', description: 'The booking method.' },
							is_paid: {
								type: 'boolean',
								description: 'Whether the event type requires payment.',
							},
							admin_managed: {
								type: 'boolean',
								description: 'Whether the event type is admin managed.',
							},
							locale: {
								type: 'string',
								description: "The locale of the event type's scheduling page.",
							},
							profile: {
								type: 'object',
								description: 'The profile of the event type owner.',
								properties: {
									name: { type: 'string', description: 'The profile name.' },
									owner: { type: 'string', description: 'The URI of the owner.' },
									type: { type: 'string', description: 'The profile type.' },
								},
								required: [],
							},
							custom_questions: {
								type: 'array',
								description: 'Custom questions for the event type.',
								items: {
									type: 'object',
									description: 'A custom question.',
									properties: {
										name: { type: 'string', description: 'The question text.' },
										type: { type: 'string', description: 'The question type.' },
										position: {
											type: 'number',
											description: 'The position of the question.',
										},
										enabled: {
											type: 'boolean',
											description: 'Whether the question is enabled.',
										},
										required: {
											type: 'boolean',
											description: 'Whether the question is required.',
										},
										include_other: {
											type: 'boolean',
											description: "Whether an 'Other' option is included.",
										},
										answer_choices: {
											type: 'array',
											description: 'Available answer choices.',
											items: {
												type: 'string',
												description: 'An answer choice.',
											},
										},
									},
									required: [],
								},
							},
							locations: {
								type: 'array',
								description: 'The locations for the event type.',
								items: {
									type: 'object',
									description: 'A location.',
									properties: {
										kind: { type: 'string', description: 'The location kind.' },
										location: {
											type: 'string',
											description: 'The location value.',
										},
										additional_info: {
											type: 'string',
											description:
												'Additional information about the location.',
										},
										phone_number: {
											type: 'string',
											description: 'The phone number.',
										},
									},
									required: [],
								},
							},
							created_at: {
								type: 'string',
								description: 'When the event type was created.',
							},
							updated_at: {
								type: 'string',
								description: 'When the event type was last updated.',
							},
							deleted_at: {
								type: 'string',
								description:
									'The moment when the event type was deleted. Null if not deleted.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information.',
					properties: {
						count: { type: 'number', description: 'The number of rows returned.' },
						next_page: { type: 'string', description: 'URI to get the next page.' },
						previous_page: {
							type: 'string',
							description: 'URI to get the previous page.',
						},
						next_page_token: {
							type: 'string',
							description: 'Token for the next page.',
						},
						previous_page_token: {
							type: 'string',
							description: 'Token for the previous page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listOrganizationMemberships',
		label: 'List organization memberships',
		description: 'Returns a list of organization memberships.',
		context:
			'---\nname: listOrganizationMemberships\ndescription: Returns a paginated list of organization memberships.\n---\n\nReturns a paginated list of organization memberships. If neither `user` nor `organization` is provided, `user` defaults to the authenticated user. Optionally filter by `email`. Pagination: `count` (1-100) and `page_token`.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				organization: {
					type: 'string',
					description:
						'Return memberships for the organization associated with this URI.',
				},
				user: {
					type: 'string',
					description:
						'Return memberships for the user associated with this URI. Defaults to the authenticated user when neither `user` nor `organization` is provided.',
				},
				email: { type: 'string', description: "Filter by the member's email address." },
				count: {
					type: 'number',
					description: 'The number of rows to return. Minimum `1`, maximum `100`.',
					minimum: 1,
					maximum: 100,
				},
				page_token: { type: 'string', description: 'The token to pass for pagination.' },
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of organization memberships.',
					items: {
						type: 'object',
						description: 'An organization membership.',
						properties: {
							uri: {
								type: 'string',
								description: 'Canonical reference for the membership.',
							},
							role: {
								type: 'string',
								description: 'The role of the member (`user`, `admin`, `owner`).',
							},
							organization: {
								type: 'string',
								description: 'The URI of the organization.',
							},
							user: {
								type: 'object',
								description: 'The user details.',
								properties: {
									uri: { type: 'string', description: 'The URI of the user.' },
									name: { type: 'string', description: "The user's name." },
									email: { type: 'string', description: "The user's email." },
									slug: { type: 'string', description: "The user's slug." },
									scheduling_url: {
										type: 'string',
										description: "The user's scheduling URL.",
									},
									timezone: {
										type: 'string',
										description: "The user's timezone.",
									},
									avatar_url: {
										type: 'string',
										description: "The user's avatar URL.",
									},
									locale: {
										type: 'string',
										description: "The user's language preference.",
									},
									created_at: {
										type: 'string',
										description: 'When the user was created.',
									},
									updated_at: {
										type: 'string',
										description: 'When the user was last updated.',
									},
								},
								required: [],
							},
							created_at: {
								type: 'string',
								description: 'When the membership was created.',
							},
							updated_at: {
								type: 'string',
								description: 'When the membership was last updated.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information.',
					properties: {
						count: { type: 'number', description: 'The number of rows returned.' },
						next_page: { type: 'string', description: 'URI to get the next page.' },
						previous_page: {
							type: 'string',
							description: 'URI to get the previous page.',
						},
						next_page_token: {
							type: 'string',
							description: 'Token for the next page.',
						},
						previous_page_token: {
							type: 'string',
							description: 'Token for the previous page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listUserAvailabilitySchedules',
		label: 'List user availability schedules',
		description: 'Returns a list of availability schedules for a specified user.',
		context:
			'---\nname: listUserAvailabilitySchedules\ndescription: Returns all availability schedules for a specific user.\n---\n\nReturns all availability schedules for a specific user. The `user` must be the full user URI. No pagination - all schedules returned in one response.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description:
						'The URI of the user. For example, `https://api.calendly.com/users/ABCD1234`.',
				},
			},
			required: ['user'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of availability schedules.',
					items: {
						type: 'object',
						description: 'A user availability schedule.',
						properties: {
							uri: {
								type: 'string',
								description: 'Canonical reference for the schedule.',
							},
							default: {
								type: 'boolean',
								description: 'Whether this is the default schedule.',
							},
							name: { type: 'string', description: 'The name of the schedule.' },
							user: { type: 'string', description: 'The URI of the user.' },
							timezone: {
								type: 'string',
								description: 'The timezone in IANA format.',
							},
							rules: {
								type: 'array',
								description: 'The availability rules.',
								items: {
									type: 'object',
									description: 'An availability rule.',
									properties: {
										type: {
											type: 'string',
											description: 'Rule type (`wday` or `date`).',
										},
										wday: { type: 'string', description: 'The weekday name.' },
										date: { type: 'string', description: 'A specific date.' },
										intervals: {
											type: 'array',
											description: 'Time intervals.',
											items: {
												type: 'object',
												description: 'A time interval.',
												properties: {
													from: {
														type: 'string',
														description:
															'Start time in 24-hour format (e.g. `09:00`).',
													},
													to: {
														type: 'string',
														description:
															'End time in 24-hour format (e.g. `17:00`).',
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
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listUserBusyTimes',
		label: 'List user busy times',
		description:
			'Returns a list of busy time periods for a specified user within a date range.',
		context:
			'---\nname: listUserBusyTimes\ndescription: Returns busy time periods for a user within a date range.\n---\n\nReturns busy time periods for a user within a date range. All three required: `user` (full URI), `start_time`, `end_time` (UTC). Max 7 days range (604800 seconds). No pagination. Each busy time includes type, start/end, buffered times, and event details.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description:
						'The URI of the user whose busy times to list. For example, `https://api.calendly.com/users/ABCD1234`.',
				},
				start_time: {
					type: 'string',
					description:
						'Start of the time range to check for busy times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`.',
				},
				end_time: {
					type: 'string',
					description:
						'End of the time range to check for busy times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`. Maximum `7` days from `start_time`.',
				},
			},
			required: ['user', 'start_time', 'end_time'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of busy time periods.',
					items: {
						type: 'object',
						description: 'A busy time period.',
						properties: {
							type: {
								type: 'string',
								description: 'The type of busy time (`calendly` or `external`).',
							},
							start_time: {
								type: 'string',
								description: 'The start of the busy time period.',
							},
							end_time: {
								type: 'string',
								description: 'The end of the busy time period.',
							},
							buffered_start_time: {
								type: 'string',
								description:
									'The buffered start time (includes buffer before event).',
							},
							buffered_end_time: {
								type: 'string',
								description: 'The buffered end time (includes buffer after event).',
							},
							event: {
								type: 'object',
								description:
									'The associated event details (only for Calendly events).',
								properties: {
									uri: {
										type: 'string',
										description: 'The URI of the scheduled event.',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'listUserMeetingLocations',
		label: 'List user meeting locations',
		description: 'Returns a list of meeting locations available to a specified user.',
		context:
			'---\nname: listUserMeetingLocations\ndescription: Returns all meeting location types available to a user.\n---\n\nReturns all meeting location types available to a user. The `user` must be the full user URI. Each location includes `kind` (e.g. `google_conference`, `zoom_conference`, `physical`) and whether it is `connected`. No pagination.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description:
						'The URI of the user. For example, `https://api.calendly.com/users/ABCD1234`.',
				},
			},
			required: ['user'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					description: 'The list of meeting locations.',
					items: {
						type: 'object',
						description: 'A meeting location.',
						properties: {
							kind: {
								type: 'string',
								description:
									'The type of meeting location (e.g. `physical`, `outbound_call`, `inbound_call`, `custom`, `google_conference`, `zoom_conference`, `microsoft_teams_conference`).',
							},
							connected: {
								type: 'boolean',
								description:
									'Whether the location is connected (for conferencing integrations).',
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
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'updateEventType',
		label: 'Update event type',
		description: 'Updates a specified event type.',
		context:
			'---\nname: updateEventType\ndescription: Updates an existing event type by its UUID.\n---\n\nUpdates an existing event type by its UUID. PATCH operation - only provided fields are updated; omitted fields are not changed. Retrieve current values with `getEventType` first.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				uuid: {
					type: 'string',
					description: 'The unique identifier of the event type to update.',
				},
				name: { type: 'string', description: 'The name of the event type.' },
				active: {
					type: 'boolean',
					description: 'Whether the event type should be active.',
				},
				description: { type: 'string', description: 'The description of the event type.' },
				duration: {
					type: 'number',
					description: 'The duration of the event in minutes.',
					minimum: 1,
					maximum: 720,
				},
				duration_options: {
					type: 'array',
					description: 'Available duration options in minutes. Maximum 4 options.',
					items: {
						type: 'number',
						description: 'A duration option in minutes (1–720).',
						minimum: 1,
						maximum: 720,
					},
					maxItems: 4,
				},
				locations: {
					type: 'array',
					description: 'The locations for the event type.',
					items: {
						type: 'object',
						description: 'An event location.',
						properties: {
							kind: {
								type: 'string',
								description: 'The location type.',
								enum: [
									'physical',
									'outbound_call',
									'inbound_call',
									'ask_invitee',
									'custom',
									'google_conference',
									'zoom_conference',
									'microsoft_teams_conference',
								],
							},
							location: {
								type: 'string',
								description:
									'The location value. Required when `kind` is `physical`, `outbound_call`, `ask_invitee`, or `custom`.',
							},
							phone_number: {
								type: 'string',
								description:
									'The phone number. Required when `kind` is `inbound_call`.',
							},
						},
						required: ['kind'],
					},
				},
				color: {
					type: 'string',
					description: 'The hexadecimal color value. For example, `#fff200`.',
					pattern: String.raw`^#[a-f\d]{6}$`,
				},
				locale: {
					type: 'string',
					description: 'The locale for the scheduling page.',
					default: '',
					enum: ['', 'en', 'de', 'es', 'fr', 'it', 'nl', 'pt', 'uk'],
				},
			},
			required: ['uuid'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The updated event type resource.',
					properties: {
						uri: {
							type: 'string',
							description:
								'Canonical reference (unique identifier) for the event type.',
						},
						name: { type: 'string', description: 'The name of the event type.' },
						active: {
							type: 'boolean',
							description:
								'Whether the event type is active and visible on the scheduling page.',
						},
						slug: {
							type: 'string',
							description: 'The URL slug used in the scheduling page URL.',
						},
						scheduling_url: {
							type: 'string',
							description: 'The public URL where invitees can book this event type.',
						},
						duration: {
							type: 'number',
							description: 'The duration of the event in minutes.',
						},
						duration_options: {
							type: 'array',
							description:
								'Array of duration options in minutes. Always null for adhoc event types.',
							items: { type: 'number', description: 'A duration option in minutes.' },
						},
						kind: {
							type: 'string',
							description:
								'The kind of event type (e.g. `solo` for individual, `group` for group events).',
						},
						type: {
							type: 'string',
							description:
								'The event type classification (e.g. `StandardEventType`, `AdhocEventType`).',
						},
						color: {
							type: 'string',
							description:
								'The hexadecimal color value displayed in the UI (e.g. `#fff200`).',
						},
						description_plain: {
							type: 'string',
							description:
								'The event type description in plain text, shown to invitees.',
						},
						description_html: {
							type: 'string',
							description: 'The event type description formatted with HTML.',
						},
						internal_note: {
							type: 'string',
							description: 'Internal notes for the host. Not visible to invitees.',
						},
						pooling_type: {
							type: 'string',
							description:
								'The pooling type for round-robin events (e.g. `round_robin`, `collective`).',
						},
						position: {
							type: 'number',
							description:
								'Position order of the event type, starting with 0 (for display purposes).',
						},
						secret: {
							type: 'boolean',
							description:
								'Whether the event type is secret (hidden from the public scheduling page but accessible via direct link).',
						},
						booking_method: {
							type: 'string',
							description: 'The booking method (e.g. `instant`, `poll`).',
						},
						is_paid: {
							type: 'boolean',
							description:
								'Whether the event type requires payment from the invitee.',
						},
						admin_managed: {
							type: 'boolean',
							description:
								'Whether the event type is managed by an organization admin rather than the individual user.',
						},
						locale: {
							type: 'string',
							description:
								"The locale of the event type's scheduling page (e.g. `en`, `fr`, `de`).",
						},
						profile: {
							type: 'object',
							description: 'The profile of the event type owner.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the profile.',
								},
								owner: {
									type: 'string',
									description:
										'The URI of the user or organization that owns this event type.',
								},
								type: {
									type: 'string',
									description: 'The profile type (e.g. `User`, `Team`).',
								},
							},
							required: [],
						},
						custom_questions: {
							type: 'array',
							description:
								'Custom questions configured for the event type, shown to invitees during booking.',
							items: {
								type: 'object',
								description: 'A custom question for invitees.',
								properties: {
									name: {
										type: 'string',
										description: 'The question text shown to invitees.',
									},
									type: {
										type: 'string',
										description:
											'The question type (e.g. `string`, `text`, `phone_number`, `select`, `radios`).',
									},
									position: {
										type: 'number',
										description:
											'The display position of the question in the list.',
									},
									enabled: {
										type: 'boolean',
										description: 'Whether the question is currently enabled.',
									},
									required: {
										type: 'boolean',
										description:
											'Whether the invitee must answer this question.',
									},
									include_other: {
										type: 'boolean',
										description:
											"Whether an 'Other' free-text option is included for select/radio questions.",
									},
									answer_choices: {
										type: 'array',
										description:
											'Available answer choices for select and radio question types.',
										items: { type: 'string', description: 'An answer choice.' },
									},
								},
								required: [],
							},
						},
						locations: {
							type: 'array',
							description: 'The locations configured for the event type.',
							items: {
								type: 'object',
								description: 'An event location.',
								properties: {
									kind: {
										type: 'string',
										description:
											'The location type (e.g. `physical`, `outbound_call`, `zoom_conference`).',
									},
									location: {
										type: 'string',
										description:
											'The location value (URL, address, or phone number depending on the kind).',
									},
									additional_info: {
										type: 'string',
										description: 'Additional information about the location.',
									},
									phone_number: {
										type: 'string',
										description: 'The phone number for inbound call locations.',
									},
								},
								required: [],
							},
						},
						created_at: {
							type: 'string',
							description: 'The moment when the event type was created.',
						},
						updated_at: {
							type: 'string',
							description: 'The moment when the event type was last updated.',
						},
						deleted_at: {
							type: 'string',
							description:
								'The moment when the event type was deleted. Null if not deleted.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'calendly',
		appVersion: 2,
		endpointName: 'updateEventTypeAvailabilitySchedule',
		label: 'Update event type availability schedule',
		description: 'Updates the availability schedule for an event type.',
		context:
			'---\nname: updateEventTypeAvailabilitySchedule\ndescription: Updates the availability rules for a specified event type.\n---\n\nUpdates the availability rules for a specified event type. WARNING: Updating rules overwrites ALL existing rules. Use `listEventTypeAvailabilitySchedules` to retrieve current rules first. The `event_type` must be the full URI.',
		accounts: { calendly2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				event_type: {
					type: 'string',
					description:
						'The URI of the event type. For example, `https://api.calendly.com/event_types/ABCD1234`.',
				},
				availability_rule: {
					type: 'object',
					description:
						'The availability rule to set. Updating rules overwrites all existing rules for the event type.',
					properties: {
						timezone: {
							type: 'string',
							description:
								'The timezone in IANA format. For example, `America/New_York`.',
						},
						rules: {
							type: 'array',
							description: 'The availability rules.',
							items: {
								type: 'object',
								description: 'An availability rule entry.',
								properties: {
									type: {
										type: 'string',
										description: 'The rule type.',
										enum: ['wday', 'date'],
									},
									wday: {
										type: 'string',
										description:
											'The day of the week. Required when type is `wday`.',
										default: '',
										enum: [
											'',
											'sunday',
											'monday',
											'tuesday',
											'wednesday',
											'thursday',
											'friday',
											'saturday',
										],
									},
									date: {
										type: 'string',
										description:
											'A specific date in `YYYY-MM-DD` format. Required when type is `date`.',
									},
									intervals: {
										type: 'array',
										description:
											'Time intervals. If empty, there is no availability for that day.',
										items: {
											type: 'object',
											description: 'A time interval.',
											properties: {
												from: {
													type: 'string',
													description:
														'Start time in 24-hour format (e.g. `09:00`).',
												},
												to: {
													type: 'string',
													description:
														'End time in 24-hour format (e.g. `17:00`).',
												},
											},
											required: ['from', 'to'],
										},
									},
								},
								required: ['type', 'intervals'],
							},
						},
					},
					required: ['timezone', 'rules'],
				},
				user: {
					type: 'string',
					description:
						"A user URI. Required when an admin or organization owner is updating a specific user's availability schedule.",
				},
			},
			required: ['event_type', 'availability_rule'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'object',
					description: 'The updated availability schedule.',
					properties: {
						event_type: {
							type: 'string',
							description: 'The URI of the associated event type.',
						},
						availability_setting: {
							type: 'string',
							description: 'The availability setting.',
						},
						availability_rule: {
							type: 'object',
							description: 'The updated availability rule.',
							properties: {
								uri: {
									type: 'string',
									description: 'URI of the availability rule.',
								},
								name: {
									type: 'string',
									description: 'Name of the availability rule.',
								},
								timezone: {
									type: 'string',
									description: 'Timezone in IANA format.',
								},
								user: { type: 'string', description: 'The URI of the user.' },
								rules: {
									type: 'array',
									description: 'The individual rules.',
									items: {
										type: 'object',
										description: 'A rule entry.',
										properties: {
											type: {
												type: 'string',
												description: 'Rule type (`wday` or `date`).',
											},
											wday: {
												type: 'string',
												description: 'The weekday name (e.g. `monday`).',
											},
											date: {
												type: 'string',
												description: 'A specific date (e.g. `2030-12-31`).',
											},
											intervals: {
												type: 'array',
												description: 'Time intervals for this rule.',
												items: {
													type: 'object',
													description: 'A time interval.',
													properties: {
														from: {
															type: 'string',
															description:
																'Start time in 24-hour format (e.g. `09:00`).',
														},
														to: {
															type: 'string',
															description:
																'End time in 24-hour format (e.g. `17:00`).',
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
];
