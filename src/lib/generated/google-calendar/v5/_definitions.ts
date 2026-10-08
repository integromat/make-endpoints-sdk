// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Calendar\'s API, mirroring the "Make an API Call" module.\n',
		accounts: { google: { scope: [] } },
		annotations: { arbitraryCallHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the part of the URL that comes after `https://www.googleapis.com/calendar`. For example, `/v3/users/me/calendarList`.',
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
						'The HTTP request query body. This input will be ignored if the HTTP request method is `GET`.',
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
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'clearCalendar',
		label: 'Clear a calendar',
		description: 'Clears all events from a primary calendar.',
		context:
			"---\nname: clearCalendar\ndescription: Clears all events from the primary calendar.\n---\n\nRemoves all events from the authenticated user's primary calendar.\nThis operation cannot be undone. Secondary calendars should be deleted instead using deleteCalendar.\n\n**Note:** This only deletes calendar events (default, focusTime, outOfOffice, workingLocation, etc.). Google Tasks that appear on the calendar are not affected — they are managed via the separate Tasks API.",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'createAclRule',
		label: 'Create an access control rule',
		description: 'Creates an access control rule for a calendar.',
		context:
			'---\nname: createAclRule\ndescription: Creates an access control rule for a calendar.\n---\n\nCreates a new access control rule on the specified calendar.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: { type: 'string', description: 'The identifier of the calendar.' },
				role: {
					type: 'string',
					description: 'The access role to assign.',
					enum: [
						'none',
						'freeBusyReader',
						'reader',
						'writerWithoutPrivateAccess',
						'writer',
						'owner',
					],
				},
				scope: {
					type: 'object',
					description: 'The extent to which calendar access is granted by this ACL rule.',
					properties: {
						type: {
							type: 'string',
							description: 'The type of the scope.',
							enum: ['default', 'user', 'group', 'domain'],
						},
						value: {
							type: 'string',
							description:
								'The email address of a user or group, or the name of a domain. Omitted for type default.',
						},
					},
					required: ['type'],
				},
				sendNotifications: {
					type: 'boolean',
					description: 'Whether to send notifications about the calendar sharing change.',
				},
			},
			required: ['calendarId', 'role', 'scope'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource. Value is always calendar#aclRule.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Identifier of the ACL rule.' },
				scope: {
					type: 'object',
					description: 'The extent to which calendar access is granted by this ACL rule.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the scope. Possible values are default, user, group, or domain.',
						},
						value: {
							type: 'string',
							description:
								'The email address of a user or group, or the name of a domain.',
						},
					},
					required: [],
				},
				role: {
					type: 'string',
					description:
						'The access role granted by this ACL rule. Possible values are none, freeBusyReader, reader, writerWithoutPrivateAccess, writer, or owner.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'createCalendar',
		label: 'Create a calendar',
		description: 'Creates a secondary calendar.',
		context:
			'---\nname: createCalendar\ndescription: Creates a secondary calendar.\n---\n\nCreates a new secondary calendar for the authenticated user.\nThe authenticated user for the request is made the data owner of the new calendar.\nThe summary field is required. \nReturns the newly created Calendar resource.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				summary: { type: 'string', description: 'Title of the calendar.' },
				description: { type: 'string', description: 'Description of the calendar.' },
				location: {
					type: 'string',
					description: 'Geographic location of the calendar as free-form text.',
				},
				timeZone: {
					type: 'string',
					description: 'The time zone of the calendar in IANA format.',
				},
				labelProperties: {
					type: 'object',
					description:
						'Label properties to set on this calendar. If specified, overwrites existing label properties.',
					properties: {
						eventLabels: {
							type: 'array',
							description:
								'Event labels for this calendar. Replaces existing labels when provided. Each calendar can have a maximum of 200 labels.',
							items: {
								type: 'object',
								properties: {
									backgroundColor: {
										type: 'string',
										description:
											'Background color in hexadecimal format, such as #039be5.',
									},
									id: {
										type: 'string',
										description:
											'The ID of the label. Optional when inserting; required when updating. Must be unique and in UUID format.',
									},
									name: {
										type: 'string',
										description: 'Name of the label, at most 50 characters.',
									},
								},
								required: ['backgroundColor'],
							},
						},
					},
					required: [],
				},
			},
			required: ['summary'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#calendar.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Identifier of the calendar.' },
				summary: { type: 'string', description: 'Title of the calendar.' },
				description: { type: 'string', description: 'Description of the calendar.' },
				location: { type: 'string', description: 'Geographic location of the calendar.' },
				timeZone: { type: 'string', description: 'The time zone of the calendar.' },
				dataOwner: { type: 'string', description: 'The data owner of the calendar.' },
				conferenceProperties: {
					type: 'object',
					description: 'Conferencing properties for this calendar.',
					properties: {
						allowedConferenceSolutionTypes: {
							type: 'array',
							description:
								'The types of conference solutions that are supported for this calendar.',
							items: {
								type: 'string',
								description:
									'A conference solution type, e.g. eventHangout, eventNamedHangout, or hangoutsMeet.',
							},
						},
					},
					required: [],
				},
				labelProperties: {
					type: 'object',
					description: 'Label properties defined on this calendar.',
					properties: {
						eventLabels: {
							type: 'array',
							description:
								'Event labels defined on this calendar. Each calendar can have a maximum of 200 labels.',
							items: {
								type: 'object',
								properties: {
									backgroundColor: {
										type: 'string',
										description:
											'Background color in hexadecimal format, such as #039be5.',
									},
									id: {
										type: 'string',
										description: 'The ID of the label in UUID format.',
									},
									name: {
										type: 'string',
										description: 'Name of the label, at most 50 characters.',
									},
								},
								required: ['backgroundColor'],
							},
						},
					},
					required: [],
				},
				autoAcceptInvitations: {
					type: 'boolean',
					description:
						'Whether invitations are automatically accepted for this calendar.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'createEvent',
		label: 'Create an event',
		description: 'Creates an event on the specified calendar.',
		context:
			'---\nname: createEvent\ndescription: Creates an event on the specified calendar.\n---\n\nCreates a new event on the specified calendar. Supports setting conference data, reminders, attendees, attachments, and all writable event properties.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar to create the event on.',
				},
				start: {
					type: 'object',
					description:
						'The start time of the event. Use date for all-day events (YYYY-MM-DD) or dateTime for timed events (RFC3339).',
					properties: {
						date: {
							type: 'string',
							description:
								'The date for all-day events, in YYYY-MM-DD format. Mutually exclusive with dateTime.',
						},
						dateTime: {
							type: 'string',
							description:
								'The date-time for timed events, in RFC3339 format, e.g. 2025-09-15T09:00:00+02:00 or 2025-09-15T07:00:00Z. Mutually exclusive with date.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description:
						'The end time of the event. Use date for all-day events (YYYY-MM-DD) or dateTime for timed events (RFC3339).',
					properties: {
						date: {
							type: 'string',
							description:
								'The date for all-day events, in YYYY-MM-DD format. Mutually exclusive with dateTime.',
						},
						dateTime: {
							type: 'string',
							description:
								'The date-time for timed events, in RFC3339 format, e.g. 2025-09-15T09:00:00+02:00 or 2025-09-15T07:00:00Z. Mutually exclusive with date.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				sendUpdates: {
					type: 'string',
					description: 'Whether to send notifications about the event.',
					default: '',
					enum: ['', 'all', 'externalOnly', 'none'],
				},
				conferenceDataVersion: {
					type: 'number',
					description:
						'Version number of the conference data API. Set to 1 to enable conference data creation.',
					minimum: 0,
					maximum: 1,
				},
				supportsAttachments: {
					type: 'boolean',
					description:
						'Whether the API client performing the operation supports event attachments.',
				},
				maxAttendees: {
					type: 'number',
					description: 'The maximum number of attendees to include in the response.',
				},
				eventLabelVersion: {
					type: 'number',
					description:
						'Version of event label feature. Set to 1 to enable event labels via eventLabelId. Default is 0.',
					minimum: 0,
					maximum: 1,
				},
				summary: { type: 'string', description: 'Title of the event.' },
				description: { type: 'string', description: 'Description of the event.' },
				location: {
					type: 'string',
					description: 'Geographic location of the event as free-form text.',
				},
				colorId: { type: 'string', description: 'The color ID for the event.' },
				eventLabelId: {
					type: 'string',
					description:
						'The ID of the event label to assign. Requires eventLabelVersion set to 1.',
				},
				recurrence: {
					type: 'array',
					description:
						'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
					items: {
						type: 'string',
						description:
							'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
					},
				},
				transparency: {
					type: 'string',
					description: 'Whether the event blocks time on the calendar.',
					default: '',
					enum: ['', 'opaque', 'transparent'],
				},
				visibility: {
					type: 'string',
					description: 'Visibility of the event.',
					default: '',
					enum: ['', 'default', 'public', 'private', 'confidential'],
				},
				attendees: {
					type: 'array',
					description: 'The attendees of the event.',
					items: {
						type: 'object',
						properties: {
							email: { type: 'string', description: "The attendee's email address." },
							displayName: { type: 'string', description: "The attendee's name." },
							optional: {
								type: 'boolean',
								description: 'Whether attendance is optional.',
							},
							resource: {
								type: 'boolean',
								description: 'Whether the attendee is a resource.',
							},
							responseStatus: {
								type: 'string',
								description: "The attendee's response status.",
								default: '',
								enum: ['', 'needsAction', 'declined', 'tentative', 'accepted'],
							},
							comment: {
								type: 'string',
								description: "The attendee's response comment.",
							},
							additionalGuests: {
								type: 'number',
								description:
									'Number of additional guests the attendee has indicated.',
							},
						},
						required: ['email'],
					},
				},
				guestsCanInviteOthers: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can invite others.',
				},
				guestsCanModify: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can modify the event.',
				},
				guestsCanSeeOtherGuests: {
					type: 'boolean',
					description:
						'Whether attendees other than the organizer can see the attendee list.',
				},
				reminders: {
					type: 'object',
					description: "Information about the event's reminders.",
					properties: {
						useDefault: {
							type: 'boolean',
							description:
								'Whether the default reminders of the calendar apply to the event.',
						},
						overrides: {
							type: 'array',
							description: 'Custom reminder overrides for the event.',
							items: {
								type: 'object',
								properties: {
									method: {
										type: 'string',
										description: 'The method of the reminder: email or popup.',
									},
									minutes: {
										type: 'number',
										description:
											'Number of minutes before the event when the reminder should trigger.',
									},
								},
								required: ['method', 'minutes'],
							},
						},
					},
					required: [],
				},
				conferenceData: {
					type: 'object',
					description:
						'Conference-related information. Set conferenceDataVersion to 1 in query params to use this.',
					properties: {
						createRequest: {
							type: 'object',
							description:
								'A request to generate a new conference. Required when creating a new conference.',
							properties: {
								requestId: {
									type: 'string',
									description:
										'A unique ID for the conference create request. Required when creating a conference.',
								},
								conferenceSolutionKey: {
									type: 'object',
									description:
										'The conference solution key. Required when creating a conference.',
									properties: {
										type: {
											type: 'string',
											description:
												'The conference solution type, e.g. hangoutsMeet.',
										},
									},
									required: [],
								},
								status: {
									type: 'object',
									description: 'The status of the conference create request.',
									properties: {
										statusCode: {
											type: 'string',
											description:
												'The current status of the conference. E.g. pending, success, failure.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						entryPoints: {
							type: 'array',
							description:
								'Conference entry points such as URLs or phone numbers. Either conferenceSolution and at least one entryPoint, or createRequest is required.',
							items: {
								type: 'object',
								properties: {
									entryPointType: {
										type: 'string',
										description: 'The type of the conference entry point.',
										default: '',
										enum: ['', 'video', 'phone', 'sip', 'more'],
									},
									uri: {
										type: 'string',
										description:
											'The URI of the entry point. Max 1300 characters. Format depends on type: video/more requires http(s), phone requires tel, sip requires sip schema.',
									},
									label: {
										type: 'string',
										description:
											'The label for the URI, visible to end users. Max 512 characters.',
									},
									pin: {
										type: 'string',
										description:
											"The PIN to access the conference. Max 128 characters. Populate only the code fields matching the conference provider's terminology.",
									},
									accessCode: {
										type: 'string',
										description:
											'The access code to access the conference. Max 128 characters.',
									},
									meetingCode: {
										type: 'string',
										description:
											'The meeting code to access the conference. Max 128 characters.',
									},
									passcode: {
										type: 'string',
										description:
											'The passcode to access the conference. Max 128 characters.',
									},
									password: {
										type: 'string',
										description:
											'The password to access the conference. Max 128 characters.',
									},
								},
								required: [],
							},
						},
						conferenceSolution: {
							type: 'object',
							description:
								'The conference solution, such as Google Meet. Either conferenceSolution and at least one entryPoint, or createRequest is required.',
							properties: {
								key: {
									type: 'object',
									description:
										'The key which uniquely identifies the conference solution.',
									properties: {
										type: {
											type: 'string',
											description: 'The conference solution type.',
											default: '',
											enum: ['', 'hangoutsMeet', 'addOn'],
										},
									},
									required: [],
								},
								name: {
									type: 'string',
									description:
										'The user-visible name of this solution. Not localized.',
								},
								iconUri: {
									type: 'string',
									description: 'The user-visible icon for this solution.',
								},
							},
							required: [],
						},
						conferenceId: {
							type: 'string',
							description:
								'The ID of the conference. Format varies by solution type: hangoutsMeet uses a 10-letter meeting code (e.g. aaa-bbbb-ccc).',
						},
						notes: {
							type: 'string',
							description:
								'Additional notes (such as instructions from the domain administrator) to display to the user. Can contain HTML. Max 2048 characters.',
						},
					},
					required: [],
				},
				attachments: {
					type: 'array',
					description:
						'File attachments for the event. Set supportsAttachments to true to use this.',
					items: {
						type: 'object',
						properties: {
							fileUrl: {
								type: 'string',
								description:
									'URL link to the attachment. Required when adding an attachment.',
							},
						},
						required: [],
					},
				},
				source: {
					type: 'object',
					description: 'Source from which the event was created.',
					properties: {
						url: {
							type: 'string',
							description:
								'URL of the source pointing to a resource. Required if source is provided.',
						},
					},
					required: [],
				},
				eventType: {
					type: 'string',
					description: 'Specific type of the event.',
					default: '',
					enum: [
						'',
						'default',
						'focusTime',
						'outOfOffice',
						'workingLocation',
						'fromGmail',
						'birthday',
					],
				},
				outOfOfficeProperties: {
					type: 'object',
					description:
						'Out of office event data. Only used when eventType is outOfOffice.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description: 'Whether to auto-decline meeting invitations.',
							default: '',
							enum: [
								'',
								'declineNone',
								'declineOnlyNewConflictingInvitations',
								'declineAllConflictingInvitations',
							],
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
					},
					required: [],
				},
				focusTimeProperties: {
					type: 'object',
					description: 'Focus time event data. Only used when eventType is focusTime.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description: 'Whether to auto-decline meeting invitations.',
							default: '',
							enum: [
								'',
								'declineNone',
								'declineOnlyNewConflictingInvitations',
								'declineAllConflictingInvitations',
							],
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
						chatStatus: {
							type: 'string',
							description: 'The chat status during focus time.',
							default: '',
							enum: ['', 'available', 'doNotDisturb'],
						},
					},
					required: [],
				},
				workingLocationProperties: {
					type: 'object',
					description:
						'Working location event data. Only used when eventType is workingLocation.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of working location. Required if workingLocationProperties is provided.',
							default: '',
							enum: ['', 'homeOffice', 'officeLocation', 'customLocation'],
						},
						homeOffice: {
							type: 'string',
							description:
								'Set to any value to indicate working from home. The value itself is ignored.',
						},
						customLocation: {
							type: 'object',
							description: 'Custom working location info.',
							properties: {
								label: {
									type: 'string',
									description:
										'An optional extra label for additional information.',
								},
							},
							required: [],
						},
						officeLocation: {
							type: 'object',
							description: 'Office location info.',
							properties: {
								buildingId: {
									type: 'string',
									description: 'The building identifier.',
								},
								floorId: { type: 'string', description: 'The floor identifier.' },
								floorSectionId: {
									type: 'string',
									description: 'The floor section identifier.',
								},
								deskId: { type: 'string', description: 'The desk identifier.' },
								label: {
									type: 'string',
									description: 'The label of the office location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				birthdayProperties: {
					type: 'object',
					description: 'Properties for birthday events.',
					properties: {
						contact: {
							type: 'string',
							description:
								'The resource name of the contact linked to this birthday event.',
						},
						type: { type: 'string', description: 'The type of birthday event.' },
						customTypeName: {
							type: 'string',
							description: 'Custom name for the birthday type if type is custom.',
						},
					},
					required: [],
				},
			},
			required: ['calendarId', 'start', 'end'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#event.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Opaque identifier of the event.' },
				status: {
					type: 'string',
					description: 'Status of the event: confirmed, tentative, or cancelled.',
				},
				htmlLink: {
					type: 'string',
					description: 'URL link to the event in Google Calendar.',
				},
				created: {
					type: 'string',
					description: 'Creation time of the event in RFC3339 format.',
				},
				updated: {
					type: 'string',
					description: 'Last modification time of the event in RFC3339 format.',
				},
				summary: { type: 'string', description: 'Title of the event.' },
				description: { type: 'string', description: 'Description of the event.' },
				location: { type: 'string', description: 'Geographic location of the event.' },
				colorId: { type: 'string', description: 'The color ID of the event.' },
				eventLabelId: {
					type: 'string',
					description: 'The event label ID associated with the event.',
				},
				creator: {
					type: 'object',
					description: 'The creator of the event.',
					properties: {
						id: { type: 'string', description: "The creator's profile ID." },
						email: { type: 'string', description: "The creator's email address." },
						displayName: { type: 'string', description: "The creator's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the creator corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						id: { type: 'string', description: "The organizer's profile ID." },
						email: { type: 'string', description: "The organizer's email address." },
						displayName: { type: 'string', description: "The organizer's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the organizer corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				start: {
					type: 'object',
					description: 'The start time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The start time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description: 'The end time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The end time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				endTimeUnspecified: {
					type: 'boolean',
					description: 'Whether the end time is unspecified.',
				},
				recurrence: {
					type: 'array',
					description:
						'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
					items: {
						type: 'string',
						description:
							'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
					},
				},
				recurringEventId: {
					type: 'string',
					description: 'The ID of the recurring event to which this instance belongs.',
				},
				originalStartTime: {
					type: 'object',
					description: 'The original start time for recurring event instances.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description: 'The date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				transparency: {
					type: 'string',
					description:
						'Whether the event blocks time on the calendar: opaque or transparent.',
				},
				visibility: {
					type: 'string',
					description:
						'Visibility of the event: default, public, private, or confidential.',
				},
				iCalUID: {
					type: 'string',
					description: 'Event unique identifier as defined in RFC5545.',
				},
				sequence: { type: 'number', description: 'Sequence number as per iCalendar.' },
				attendees: {
					type: 'array',
					description: 'The attendees of the event.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: "The attendee's profile ID." },
							email: { type: 'string', description: "The attendee's email address." },
							displayName: { type: 'string', description: "The attendee's name." },
							organizer: {
								type: 'boolean',
								description: 'Whether the attendee is the organizer.',
							},
							self: {
								type: 'boolean',
								description:
									'Whether this entry represents the calendar on which the event appears.',
							},
							resource: {
								type: 'boolean',
								description: 'Whether the attendee is a resource.',
							},
							optional: {
								type: 'boolean',
								description: 'Whether attendance is optional.',
							},
							responseStatus: {
								type: 'string',
								description:
									"The attendee's response status: needsAction, declined, tentative, or accepted.",
							},
							comment: {
								type: 'string',
								description: "The attendee's response comment.",
							},
							additionalGuests: {
								type: 'number',
								description:
									'Number of additional guests the attendee has indicated.',
							},
							asyncOperation: {
								type: 'string',
								description:
									'If set, indicates the ID of an async operation in progress for this attendee.',
							},
						},
						required: [],
					},
				},
				attendeesOmitted: {
					type: 'boolean',
					description:
						"Whether attendees may have been omitted from the event's representation.",
				},
				hangoutLink: {
					type: 'string',
					description: 'URL for the associated Google Hangout.',
				},
				conferenceData: {
					type: 'object',
					description: 'The conference-related information for the event.',
					properties: {
						createRequest: {
							type: 'object',
							description: 'A request to generate a new conference.',
							properties: {
								requestId: {
									type: 'string',
									description: 'The client-generated unique ID for this request.',
								},
								conferenceSolutionKey: {
									type: 'object',
									description: 'The conference solution type.',
									properties: {
										type: {
											type: 'string',
											description:
												'The conference solution type: eventHangout, eventNamedHangout, or hangoutsMeet.',
										},
									},
									required: [],
								},
								status: {
									type: 'object',
									description: 'The status of the conference create request.',
									properties: {
										statusCode: {
											type: 'string',
											description:
												'The current status: pending, success, or failure.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						entryPoints: {
							type: 'array',
							description: 'Information about individual conference entry points.',
							items: {
								type: 'object',
								properties: {
									entryPointType: {
										type: 'string',
										description:
											'The type of conference entry point: video, phone, sip, or more.',
									},
									uri: {
										type: 'string',
										description: 'The URI of the entry point.',
									},
									label: {
										type: 'string',
										description: 'The label for the URI.',
									},
									pin: {
										type: 'string',
										description: 'The PIN to access the conference.',
									},
									accessCode: {
										type: 'string',
										description: 'The access code to access the conference.',
									},
									meetingCode: {
										type: 'string',
										description: 'The meeting code to access the conference.',
									},
									passcode: {
										type: 'string',
										description: 'The passcode to access the conference.',
									},
									password: {
										type: 'string',
										description: 'The password to access the conference.',
									},
								},
								required: [],
							},
						},
						conferenceSolution: {
							type: 'object',
							description: 'The conference solution used.',
							properties: {
								key: {
									type: 'object',
									description:
										'The key which identifies the conference solution.',
									properties: {
										type: {
											type: 'string',
											description: 'The conference solution type.',
										},
									},
									required: [],
								},
								name: {
									type: 'string',
									description: 'The user-visible name of the solution.',
								},
								iconUri: {
									type: 'string',
									description: 'The user-visible icon for this solution.',
								},
							},
							required: [],
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						signature: {
							type: 'string',
							description: 'The signature of the conference data.',
						},
						notes: {
							type: 'string',
							description:
								'Additional notes to display to the user about the conference.',
						},
					},
					required: [],
				},
				reminders: {
					type: 'object',
					description: "Information about the event's reminders.",
					properties: {
						useDefault: {
							type: 'boolean',
							description:
								'Whether the default reminders of the calendar apply to the event.',
						},
						overrides: {
							type: 'array',
							description: 'Custom reminder overrides for the event.',
							items: {
								type: 'object',
								properties: {
									method: {
										type: 'string',
										description: 'The method of the reminder: email or popup.',
									},
									minutes: {
										type: 'number',
										description:
											'Number of minutes before the event when the reminder should trigger.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				source: {
					type: 'object',
					description: 'Source from which the event was created.',
					properties: {
						url: {
							type: 'string',
							description: 'URL of the source pointing to a resource.',
						},
					},
					required: [],
				},
				attachments: {
					type: 'array',
					description: 'File attachments for the event.',
					items: {
						type: 'object',
						properties: {
							fileUrl: { type: 'string', description: 'URL link to the attachment.' },
							mimeType: {
								type: 'string',
								description: 'Internet media type of the attachment.',
							},
							iconLink: {
								type: 'string',
								description: "URL link to the attachment's icon.",
							},
							fileId: { type: 'string', description: 'ID of the attached file.' },
						},
						required: [],
					},
				},
				eventType: {
					type: 'string',
					description:
						'Specific type of the event: default, focusTime, outOfOffice, workingLocation, fromGmail, or birthday.',
				},
				guestsCanInviteOthers: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can invite others.',
				},
				guestsCanModify: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can modify the event.',
				},
				guestsCanSeeOtherGuests: {
					type: 'boolean',
					description:
						'Whether attendees other than the organizer can see the attendee list.',
				},
				privateCopy: {
					type: 'boolean',
					description: 'Whether the event is a private copy that cannot be modified.',
				},
				locked: {
					type: 'boolean',
					description: 'Whether the event is locked and no changes can be made.',
				},
				outOfOfficeProperties: {
					type: 'object',
					description: 'Out of office event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
					},
					required: [],
				},
				focusTimeProperties: {
					type: 'object',
					description: 'Focus time event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
						chatStatus: {
							type: 'string',
							description: 'The chat status during focus time.',
						},
					},
					required: [],
				},
				workingLocationProperties: {
					type: 'object',
					description: 'Working location event data.',
					properties: {
						type: {
							type: 'string',
							description:
								'Type of the working location: homeOffice, customLocation, or officeLocation.',
						},
						homeOffice: {
							type: 'string',
							description: 'If present, indicates the user is working from home.',
						},
						customLocation: {
							type: 'object',
							description: 'Custom working location info.',
							properties: {
								label: {
									type: 'string',
									description:
										'An optional extra label for additional information.',
								},
							},
							required: [],
						},
						officeLocation: {
							type: 'object',
							description: 'Office location info.',
							properties: {
								buildingId: {
									type: 'string',
									description: 'The building identifier.',
								},
								floorId: { type: 'string', description: 'The floor identifier.' },
								floorSectionId: {
									type: 'string',
									description: 'The floor section identifier.',
								},
								deskId: { type: 'string', description: 'The desk identifier.' },
								label: {
									type: 'string',
									description: 'The label of the office location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				birthdayProperties: {
					type: 'object',
					description: 'Birthday event data.',
					properties: {
						contact: {
							type: 'string',
							description:
								'Resource name of the contact this birthday event is linked to.',
						},
						type: { type: 'string', description: 'Type of the birthday event.' },
						customTypeName: {
							type: 'string',
							description: 'The custom type name for the birthday event.',
						},
					},
					required: [],
				},
				extendedProperties: {
					type: 'object',
					description: 'Extended properties of the event.',
					properties: {
						private: {
							type: 'object',
							description: 'Properties visible only to the creator of the event.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						shared: {
							type: 'object',
							description: 'Properties visible to all attendees.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				gadget: {
					type: 'object',
					description: 'A gadget that extends this event (deprecated).',
					properties: {
						type: { type: 'string', description: "The gadget's type." },
						link: { type: 'string', description: "The gadget's URL." },
						iconLink: { type: 'string', description: "The gadget's icon URL." },
						width: { type: 'number', description: "The gadget's width in pixels." },
						height: { type: 'number', description: "The gadget's height in pixels." },
						display: { type: 'string', description: "The gadget's display mode." },
						preferences: {
							type: 'object',
							description: 'Gadget preferences as key-value pairs.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'deleteAclRule',
		label: 'Delete an access control rule',
		description: 'Deletes an access control rule from a calendar.',
		context:
			'---\nname: deleteAclRule\ndescription: Deletes an access control rule from a calendar.\n---\n\nDeletes an existing access control rule from the specified calendar. This action is irreversible.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: { type: 'string', description: 'The identifier of the calendar.' },
				ruleId: {
					type: 'string',
					description: 'The identifier of the ACL rule to delete.',
				},
			},
			required: ['calendarId', 'ruleId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'deleteCalendar',
		label: 'Delete a calendar',
		description: 'Deletes a secondary calendar.',
		context:
			'---\nname: deleteCalendar\ndescription: Deletes a secondary calendar.\n---\n\nPermanently deletes a secondary calendar. \nUse clearCalendar instead to remove all events from a primary calendar. \nThis action cannot be undone.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: {
					type: 'string',
					description: 'The identifier of the secondary calendar to delete.',
				},
			},
			required: ['calendarId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'deleteEvent',
		label: 'Delete an event',
		description: 'Deletes an event from the specified calendar.',
		context:
			'---\nname: deleteEvent\ndescription: Deletes an event from the specified calendar.\n---\n\nDeletes an event from the specified calendar. For recurring events, this deletes the entire series.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar containing the event.',
				},
				eventId: { type: 'string', description: 'The identifier of the event to delete.' },
				sendUpdates: {
					type: 'string',
					description: 'Whether to send notifications about the event.',
					default: '',
					enum: ['', 'all', 'externalOnly', 'none'],
				},
			},
			required: ['calendarId', 'eventId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'getAclRule',
		label: 'Get an access control rule',
		description: 'Returns an access control rule for a calendar.',
		context:
			'---\nname: getAclRule\ndescription: Returns an access control rule for a calendar.\n---\n\nReturns a specific access control rule for the specified calendar.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: { type: 'string', description: 'The identifier of the calendar.' },
				ruleId: { type: 'string', description: 'The identifier of the ACL rule.' },
			},
			required: ['calendarId', 'ruleId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource. Value is always calendar#aclRule.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Identifier of the ACL rule.' },
				scope: {
					type: 'object',
					description: 'The extent to which calendar access is granted by this ACL rule.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the scope. Possible values are default, user, group, or domain.',
						},
						value: {
							type: 'string',
							description:
								'The email address of a user or group, or the name of a domain.',
						},
					},
					required: [],
				},
				role: {
					type: 'string',
					description:
						'The access role granted by this ACL rule. Possible values are none, freeBusyReader, reader, writerWithoutPrivateAccess, writer, or owner.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'getCalendar',
		label: 'Get a calendar',
		description: 'Returns metadata for a calendar.',
		context:
			'---\nname: getCalendar\ndescription: Returns metadata for a calendar.\n---\n\nRetrieves metadata for a specific calendar by its ID. \nReturns the Calendar resource including summary, description, location, and time zone.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar to retrieve.',
				},
			},
			required: ['calendarId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#calendar.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Identifier of the calendar.' },
				summary: { type: 'string', description: 'Title of the calendar.' },
				description: { type: 'string', description: 'Description of the calendar.' },
				location: { type: 'string', description: 'Geographic location of the calendar.' },
				timeZone: { type: 'string', description: 'The time zone of the calendar.' },
				dataOwner: { type: 'string', description: 'The data owner of the calendar.' },
				conferenceProperties: {
					type: 'object',
					description: 'Conferencing properties for this calendar.',
					properties: {
						allowedConferenceSolutionTypes: {
							type: 'array',
							description:
								'The types of conference solutions that are supported for this calendar.',
							items: {
								type: 'string',
								description:
									'A conference solution type, e.g. eventHangout, eventNamedHangout, or hangoutsMeet.',
							},
						},
					},
					required: [],
				},
				labelProperties: {
					type: 'object',
					description: 'Label properties defined on this calendar.',
					properties: {
						eventLabels: {
							type: 'array',
							description:
								'Event labels defined on this calendar. Each calendar can have a maximum of 200 labels.',
							items: {
								type: 'object',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the label in UUID format.',
									},
									backgroundColor: {
										type: 'string',
										description:
											'Background color of the label in hexadecimal format, such as #039be5.',
									},
									name: {
										type: 'string',
										description: 'Name of the label, at most 50 characters.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				autoAcceptInvitations: {
					type: 'boolean',
					description:
						'Whether invitations are automatically accepted for this calendar.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'getEvent',
		label: 'Get an event',
		description: 'Returns a single event from the specified calendar.',
		context:
			'---\nname: getEvent\ndescription: Returns a single event from the specified calendar.\n---\n\nReturns a single event resource by its ID from the specified calendar.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar containing the event.',
				},
				eventId: {
					type: 'string',
					description: 'The identifier of the event to retrieve.',
				},
				timeZone: {
					type: 'string',
					description:
						"Time zone used in the response. Defaults to the calendar's time zone.",
				},
				maxAttendees: {
					type: 'number',
					description: 'The maximum number of attendees to include in the response.',
				},
			},
			required: ['calendarId', 'eventId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#event.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Opaque identifier of the event.' },
				status: {
					type: 'string',
					description: 'Status of the event: confirmed, tentative, or cancelled.',
				},
				htmlLink: {
					type: 'string',
					description: 'URL link to the event in Google Calendar.',
				},
				created: {
					type: 'string',
					description: 'Creation time of the event in RFC3339 format.',
				},
				updated: {
					type: 'string',
					description: 'Last modification time of the event in RFC3339 format.',
				},
				summary: { type: 'string', description: 'Title of the event.' },
				description: { type: 'string', description: 'Description of the event.' },
				location: { type: 'string', description: 'Geographic location of the event.' },
				colorId: { type: 'string', description: 'The color ID of the event.' },
				eventLabelId: {
					type: 'string',
					description: 'The event label ID associated with the event.',
				},
				creator: {
					type: 'object',
					description: 'The creator of the event.',
					properties: {
						id: { type: 'string', description: "The creator's profile ID." },
						email: { type: 'string', description: "The creator's email address." },
						displayName: { type: 'string', description: "The creator's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the creator corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						id: { type: 'string', description: "The organizer's profile ID." },
						email: { type: 'string', description: "The organizer's email address." },
						displayName: { type: 'string', description: "The organizer's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the organizer corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				start: {
					type: 'object',
					description: 'The start time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The start time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description: 'The end time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The end time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				endTimeUnspecified: {
					type: 'boolean',
					description: 'Whether the end time is unspecified.',
				},
				recurrence: {
					type: 'array',
					description:
						'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
					items: {
						type: 'string',
						description:
							'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
					},
				},
				recurringEventId: {
					type: 'string',
					description: 'The ID of the recurring event to which this instance belongs.',
				},
				originalStartTime: {
					type: 'object',
					description: 'The original start time for recurring event instances.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description: 'The date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				transparency: {
					type: 'string',
					description:
						'Whether the event blocks time on the calendar: opaque or transparent.',
				},
				visibility: {
					type: 'string',
					description:
						'Visibility of the event: default, public, private, or confidential.',
				},
				iCalUID: {
					type: 'string',
					description: 'Event unique identifier as defined in RFC5545.',
				},
				sequence: { type: 'number', description: 'Sequence number as per iCalendar.' },
				attendees: {
					type: 'array',
					description: 'The attendees of the event.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: "The attendee's profile ID." },
							email: { type: 'string', description: "The attendee's email address." },
							displayName: { type: 'string', description: "The attendee's name." },
							organizer: {
								type: 'boolean',
								description: 'Whether the attendee is the organizer.',
							},
							self: {
								type: 'boolean',
								description:
									'Whether this entry represents the calendar on which the event appears.',
							},
							resource: {
								type: 'boolean',
								description: 'Whether the attendee is a resource.',
							},
							optional: {
								type: 'boolean',
								description: 'Whether attendance is optional.',
							},
							responseStatus: {
								type: 'string',
								description:
									"The attendee's response status: needsAction, declined, tentative, or accepted.",
							},
							comment: {
								type: 'string',
								description: "The attendee's response comment.",
							},
							additionalGuests: {
								type: 'number',
								description:
									'Number of additional guests the attendee has indicated.',
							},
							asyncOperation: {
								type: 'string',
								description:
									'If set, indicates the ID of an async operation in progress for this attendee.',
							},
						},
						required: [],
					},
				},
				attendeesOmitted: {
					type: 'boolean',
					description:
						"Whether attendees may have been omitted from the event's representation.",
				},
				hangoutLink: {
					type: 'string',
					description: 'URL for the associated Google Hangout.',
				},
				conferenceData: {
					type: 'object',
					description: 'The conference-related information for the event.',
					properties: {
						createRequest: {
							type: 'object',
							description: 'A request to generate a new conference.',
							properties: {
								requestId: {
									type: 'string',
									description: 'The client-generated unique ID for this request.',
								},
								conferenceSolutionKey: {
									type: 'object',
									description: 'The conference solution type.',
									properties: {
										type: {
											type: 'string',
											description:
												'The conference solution type: eventHangout, eventNamedHangout, or hangoutsMeet.',
										},
									},
									required: [],
								},
								status: {
									type: 'object',
									description: 'The status of the conference create request.',
									properties: {
										statusCode: {
											type: 'string',
											description:
												'The current status: pending, success, or failure.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						entryPoints: {
							type: 'array',
							description: 'Information about individual conference entry points.',
							items: {
								type: 'object',
								properties: {
									entryPointType: {
										type: 'string',
										description:
											'The type of conference entry point: video, phone, sip, or more.',
									},
									uri: {
										type: 'string',
										description: 'The URI of the entry point.',
									},
									label: {
										type: 'string',
										description: 'The label for the URI.',
									},
									pin: {
										type: 'string',
										description: 'The PIN to access the conference.',
									},
									accessCode: {
										type: 'string',
										description: 'The access code to access the conference.',
									},
									meetingCode: {
										type: 'string',
										description: 'The meeting code to access the conference.',
									},
									passcode: {
										type: 'string',
										description: 'The passcode to access the conference.',
									},
									password: {
										type: 'string',
										description: 'The password to access the conference.',
									},
								},
								required: [],
							},
						},
						conferenceSolution: {
							type: 'object',
							description: 'The conference solution used.',
							properties: {
								key: {
									type: 'object',
									description:
										'The key which identifies the conference solution.',
									properties: {
										type: {
											type: 'string',
											description: 'The conference solution type.',
										},
									},
									required: [],
								},
								name: {
									type: 'string',
									description: 'The user-visible name of the solution.',
								},
								iconUri: {
									type: 'string',
									description: 'The user-visible icon for this solution.',
								},
							},
							required: [],
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						signature: {
							type: 'string',
							description: 'The signature of the conference data.',
						},
						notes: {
							type: 'string',
							description:
								'Additional notes to display to the user about the conference.',
						},
					},
					required: [],
				},
				reminders: {
					type: 'object',
					description: "Information about the event's reminders.",
					properties: {
						useDefault: {
							type: 'boolean',
							description:
								'Whether the default reminders of the calendar apply to the event.',
						},
						overrides: {
							type: 'array',
							description: 'Custom reminder overrides for the event.',
							items: {
								type: 'object',
								properties: {
									method: {
										type: 'string',
										description: 'The method of the reminder: email or popup.',
									},
									minutes: {
										type: 'number',
										description:
											'Number of minutes before the event when the reminder should trigger.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				source: {
					type: 'object',
					description: 'Source from which the event was created.',
					properties: {
						url: {
							type: 'string',
							description: 'URL of the source pointing to a resource.',
						},
					},
					required: [],
				},
				attachments: {
					type: 'array',
					description: 'File attachments for the event.',
					items: {
						type: 'object',
						properties: {
							fileUrl: { type: 'string', description: 'URL link to the attachment.' },
							mimeType: {
								type: 'string',
								description: 'Internet media type of the attachment.',
							},
							iconLink: {
								type: 'string',
								description: "URL link to the attachment's icon.",
							},
							fileId: { type: 'string', description: 'ID of the attached file.' },
						},
						required: [],
					},
				},
				eventType: {
					type: 'string',
					description:
						'Specific type of the event: default, focusTime, outOfOffice, workingLocation, fromGmail, or birthday.',
				},
				guestsCanInviteOthers: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can invite others.',
				},
				guestsCanModify: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can modify the event.',
				},
				guestsCanSeeOtherGuests: {
					type: 'boolean',
					description:
						'Whether attendees other than the organizer can see the attendee list.',
				},
				privateCopy: {
					type: 'boolean',
					description: 'Whether the event is a private copy that cannot be modified.',
				},
				locked: {
					type: 'boolean',
					description: 'Whether the event is locked and no changes can be made.',
				},
				outOfOfficeProperties: {
					type: 'object',
					description: 'Out of office event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
					},
					required: [],
				},
				focusTimeProperties: {
					type: 'object',
					description: 'Focus time event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
						chatStatus: {
							type: 'string',
							description: 'The chat status during focus time.',
						},
					},
					required: [],
				},
				workingLocationProperties: {
					type: 'object',
					description: 'Working location event data.',
					properties: {
						type: {
							type: 'string',
							description:
								'Type of the working location: homeOffice, customLocation, or officeLocation.',
						},
						homeOffice: {
							type: 'string',
							description: 'If present, indicates the user is working from home.',
						},
						customLocation: {
							type: 'object',
							description: 'Custom working location info.',
							properties: {
								label: {
									type: 'string',
									description:
										'An optional extra label for additional information.',
								},
							},
							required: [],
						},
						officeLocation: {
							type: 'object',
							description: 'Office location info.',
							properties: {
								buildingId: {
									type: 'string',
									description: 'The building identifier.',
								},
								floorId: { type: 'string', description: 'The floor identifier.' },
								floorSectionId: {
									type: 'string',
									description: 'The floor section identifier.',
								},
								deskId: { type: 'string', description: 'The desk identifier.' },
								label: {
									type: 'string',
									description: 'The label of the office location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				birthdayProperties: {
					type: 'object',
					description: 'Birthday event data.',
					properties: {
						contact: {
							type: 'string',
							description:
								'Resource name of the contact this birthday event is linked to.',
						},
						type: { type: 'string', description: 'Type of the birthday event.' },
						customTypeName: {
							type: 'string',
							description: 'The custom type name for the birthday event.',
						},
					},
					required: [],
				},
				extendedProperties: {
					type: 'object',
					description: 'Extended properties of the event.',
					properties: {
						private: {
							type: 'object',
							description: 'Properties visible only to the creator of the event.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						shared: {
							type: 'object',
							description: 'Properties visible to all attendees.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				gadget: {
					type: 'object',
					description: 'A gadget that extends this event (deprecated).',
					properties: {
						type: { type: 'string', description: "The gadget's type." },
						link: { type: 'string', description: "The gadget's URL." },
						iconLink: { type: 'string', description: "The gadget's icon URL." },
						width: { type: 'number', description: "The gadget's width in pixels." },
						height: { type: 'number', description: "The gadget's height in pixels." },
						display: { type: 'string', description: "The gadget's display mode." },
						preferences: {
							type: 'object',
							description: 'Gadget preferences as key-value pairs.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'getFreeBusy',
		label: 'Get free/busy',
		description: 'Returns free/busy information for a set of calendars and groups.',
		context:
			'---\nname: getFreeBusy\ndescription: Returns free/busy information for a set of calendars and groups.\n---\n\nQueries free/busy information for specified calendars and groups within a given time range. \nDespite using POST, this is a read-only query operation.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				timeMin: {
					type: 'string',
					description: 'The start of the time interval for the query.',
				},
				timeMax: {
					type: 'string',
					description: 'The end of the time interval for the query.',
				},
				timeZone: {
					type: 'string',
					description: 'IANA time zone identifier. Defaults to UTC.',
				},
				items: {
					type: 'array',
					description:
						'List of calendars and groups to query. Each item must contain an id field with a calendar or group identifier.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: 'The identifier of a calendar or group.',
							},
						},
						required: [],
					},
				},
				groupExpansionMax: {
					type: 'number',
					description:
						'Maximum number of calendar identifiers to expand per group. Maximum value is 100.',
					maximum: 100,
				},
				calendarExpansionMax: {
					type: 'number',
					description:
						'Maximum number of calendars for which FreeBusy information is returned. Maximum value is 50.',
					maximum: 50,
				},
			},
			required: ['timeMin', 'timeMax', 'items'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource. Value is always calendar#freeBusy.',
				},
				timeMin: {
					type: 'string',
					description: 'The start of the time interval, in RFC3339 format.',
				},
				timeMax: {
					type: 'string',
					description: 'The end of the time interval, in RFC3339 format.',
				},
				groups: {
					type: 'object',
					description:
						'Expansion of groups. Each key is a group ID mapping to an object containing: calendars[] (array of calendar identifiers, each with an id field) and errors[] (array of error objects with domain, reason, and optional arguments).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				calendars: {
					type: 'object',
					description:
						'Free/busy information for calendars. Each key is a calendar ID mapping to an object containing: busy[] (array of time ranges, each with start and end in RFC3339 format) and errors[] (array of error objects with domain, reason, and optional arguments).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'listAclRules',
		label: 'List access control rules',
		description: 'Returns the rules in the access control list for a calendar.',
		context:
			'---\nname: listAclRules\ndescription: Returns the rules in the access control list for a calendar.\n---\n\nReturns the access control list rules for the specified calendar. Supports pagination and incremental sync.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: { type: 'string', description: 'The identifier of the calendar.' },
				showDeleted: {
					type: 'boolean',
					description: 'Whether to include deleted ACL rules in the result.',
				},
				maxResults: {
					type: 'number',
					description: 'Maximum number of entries returned on one result page.',
					maximum: 250,
				},
				pageToken: {
					type: 'string',
					description: 'Token specifying which result page to return.',
				},
				syncToken: {
					type: 'string',
					description:
						'Token for retrieving only entries that have changed since the last list request.',
				},
			},
			required: ['calendarId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource. Value is always calendar#acl.',
				},
				etag: { type: 'string', description: 'ETag of the collection.' },
				nextPageToken: {
					type: 'string',
					description: 'Token used to access the next page of results.',
				},
				nextSyncToken: {
					type: 'string',
					description: 'Token used for incremental synchronization at a later point.',
				},
				items: {
					type: 'array',
					description: 'List of ACL rules.',
					items: {
						type: 'object',
						properties: {
							kind: {
								type: 'string',
								description:
									'Type of the resource. Value is always calendar#aclRule.',
							},
							etag: { type: 'string', description: 'ETag of the resource.' },
							id: { type: 'string', description: 'Identifier of the ACL rule.' },
							scope: {
								type: 'object',
								description:
									'The extent to which calendar access is granted by this ACL rule.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of the scope. Possible values are default, user, group, or domain.',
									},
									value: {
										type: 'string',
										description:
											'The email address of a user or group, or the name of a domain.',
									},
								},
								required: [],
							},
							role: {
								type: 'string',
								description:
									'The access role granted by this ACL rule. Possible values are none, freeBusyReader, reader, writerWithoutPrivateAccess, writer, or owner.',
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
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'listCalendars',
		label: 'List calendars',
		description: "Returns the calendars on the user's calendar list.",
		context:
			"---\nname: listCalendars\ndescription: Returns the calendars on the user's calendar list.\n---\n\nRetrieves all calendars from the authenticated user's calendar list. \nSupports pagination via pageToken and incremental sync via syncToken. \nUse minAccessRole to filter by the user's access level.",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
						'Maximum number of entries returned. Acceptable range is 1 to 250, default is 100.',
				},
				minAccessRole: {
					type: 'string',
					description: 'The minimum access role for the user in the returned entries.',
					default: '',
					enum: [
						'',
						'freeBusyReader',
						'reader',
						'writer',
						'writerWithoutPrivateAccess',
						'owner',
					],
				},
				showHidden: { type: 'boolean', description: 'Whether to show hidden entries.' },
				showDeleted: {
					type: 'boolean',
					description: 'Whether to include deleted calendar list entries in the result.',
				},
				showOwnOrganizationOnly: {
					type: 'boolean',
					description:
						'Whether to show only entries for calendars from the organization. Only applicable to Google Workspace users.',
				},
				pageToken: {
					type: 'string',
					description: 'Token specifying which result page to return.',
				},
				syncToken: {
					type: 'string',
					description:
						'Token for retrieving only entries that have changed since the last list request.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the collection, always calendar#calendarList.',
				},
				etag: { type: 'string', description: 'ETag of the collection.' },
				nextPageToken: {
					type: 'string',
					description: 'Token used to access the next page of results.',
				},
				nextSyncToken: {
					type: 'string',
					description: 'Token used for incremental synchronization.',
				},
				items: {
					type: 'array',
					description: "Calendars that are present on the user's calendar list.",
					items: {
						type: 'object',
						properties: {
							kind: {
								type: 'string',
								description:
									'Type of the resource, always calendar#calendarListEntry.',
							},
							etag: { type: 'string', description: 'ETag of the resource.' },
							id: { type: 'string', description: 'Identifier of the calendar.' },
							summary: { type: 'string', description: 'Title of the calendar.' },
							description: {
								type: 'string',
								description: 'Description of the calendar.',
							},
							location: {
								type: 'string',
								description: 'Geographic location of the calendar.',
							},
							timeZone: {
								type: 'string',
								description: 'The time zone of the calendar.',
							},
							dataOwner: {
								type: 'string',
								description: 'The data owner of the calendar.',
							},
							summaryOverride: {
								type: 'string',
								description:
									'The summary that the authenticated user has set for this calendar.',
							},
							colorId: {
								type: 'string',
								description: 'The color ID of the calendar.',
							},
							backgroundColor: {
								type: 'string',
								description:
									'The main color of the calendar in hexadecimal format.',
							},
							foregroundColor: {
								type: 'string',
								description:
									'The foreground color of the calendar in hexadecimal format.',
							},
							hidden: {
								type: 'boolean',
								description: 'Whether the calendar has been hidden from the list.',
							},
							selected: {
								type: 'boolean',
								description: 'Whether the calendar content shows up in the UI.',
							},
							accessRole: {
								type: 'string',
								description:
									'The effective access role that the authenticated user has on the calendar.',
							},
							defaultReminders: {
								type: 'array',
								description:
									'The default reminders that the authenticated user has for this calendar.',
								items: {
									type: 'object',
									properties: {
										method: {
											type: 'string',
											description:
												'The method used by this reminder, such as email or popup.',
										},
										minutes: {
											type: 'number',
											description:
												'Number of minutes before the event start when the reminder should trigger.',
										},
									},
									required: [],
								},
							},
							notificationSettings: {
								type: 'object',
								description:
									'The notifications that the authenticated user is receiving for this calendar.',
								properties: {
									notifications: {
										type: 'array',
										description:
											'The list of notifications set for this calendar.',
										items: {
											type: 'object',
											properties: {
												type: {
													type: 'string',
													description: 'The type of notification.',
												},
												method: {
													type: 'string',
													description:
														'The method used to deliver the notification.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							primary: {
								type: 'boolean',
								description:
									'Whether the calendar is the primary calendar of the authenticated user.',
							},
							deleted: {
								type: 'boolean',
								description:
									'Whether this calendar list entry has been deleted from the calendar list.',
							},
							conferenceProperties: {
								type: 'object',
								description: 'Conferencing properties for this calendar.',
								properties: {
									allowedConferenceSolutionTypes: {
										type: 'array',
										description:
											'The types of conference solutions that are supported for this calendar.',
										items: {
											type: 'string',
											description:
												'A conference solution type, e.g. eventHangout, eventNamedHangout, or hangoutsMeet.',
										},
									},
								},
								required: [],
							},
							autoAcceptInvitations: {
								type: 'boolean',
								description:
									'Whether invitations are automatically accepted for this calendar.',
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
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'listEvents',
		label: 'List events',
		description: 'Returns events on the specified calendar based on the specified criteria.',
		context:
			'---\nname: listEvents\ndescription: Returns events on the specified calendar based on the specified criteria.\n---\n\nReturns events on the specified calendar. \nSupports various filtering, sorting, and pagination parameters — see the input fields for all available options. \nUse pageToken for pagination and syncToken for incremental sync.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar to retrieve events from.',
				},
				q: {
					type: 'string',
					description: 'Free text search terms to find events that match.',
				},
				timeMin: {
					type: 'string',
					description:
						"Lower bound (exclusive) for an event's end time, in RFC3339 format, e.g. 2025-09-15T00:00:00Z.",
				},
				timeMax: {
					type: 'string',
					description:
						"Upper bound (exclusive) for an event's start time, in RFC3339 format, e.g. 2025-09-30T23:59:59Z.",
				},
				updatedMin: {
					type: 'string',
					description:
						"Lower bound for an event's last modification time, in RFC3339 format, e.g. 2025-09-01T00:00:00Z. Defaults to no filter.",
				},
				iCalUID: {
					type: 'string',
					description: 'Specifies an event ID in iCalendar format to filter by.',
				},
				eventTypes: {
					type: 'string',
					description:
						'Event types to filter by. Multiple values can be selected. If unset, returns all event types.',
					default: '',
					enum: [
						'',
						'default',
						'birthday',
						'focusTime',
						'fromGmail',
						'outOfOffice',
						'workingLocation',
					],
				},
				singleEvents: {
					type: 'boolean',
					description: 'Whether to expand recurring events into instances.',
				},
				showDeleted: {
					type: 'boolean',
					description: 'Whether to include deleted events in the results.',
				},
				showHiddenInvitations: {
					type: 'boolean',
					description: 'Whether to include hidden invitations in the results.',
				},
				timeZone: {
					type: 'string',
					description:
						"Time zone used in the response. Default is the calendar's time zone.",
				},
				maxAttendees: {
					type: 'number',
					description:
						'The maximum number of attendees to include in the response. If there are more than the specified number, only the participant is returned.',
				},
				privateExtendedProperty: {
					type: 'string',
					description:
						'Extended properties constraint as propertyName=value. Matches only private properties. Can be repeated to match all given constraints.',
				},
				sharedExtendedProperty: {
					type: 'string',
					description:
						'Extended properties constraint as propertyName=value. Matches only shared properties. Can be repeated to match all given constraints.',
				},
				orderBy: {
					type: 'string',
					description: 'The order of the events returned.',
					default: '',
					enum: ['', 'startTime', 'updated'],
				},
				maxResults: {
					type: 'number',
					description:
						'Maximum number of events returned per page. Default is 250, maximum is 2500.',
				},
				pageToken: {
					type: 'string',
					description: 'Token specifying which result page to return.',
				},
				syncToken: {
					type: 'string',
					description:
						'Token for retrieving only entries that have changed since the last list request.',
				},
			},
			required: ['calendarId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the collection, always calendar#events.',
				},
				etag: { type: 'string', description: 'ETag of the collection.' },
				summary: { type: 'string', description: 'Title of the calendar.' },
				description: { type: 'string', description: 'Description of the calendar.' },
				updated: {
					type: 'string',
					description: 'Last modification time of the calendar, in RFC3339 format.',
				},
				timeZone: { type: 'string', description: 'The time zone of the calendar.' },
				accessRole: {
					type: 'string',
					description: "The user's access role for this calendar.",
				},
				defaultReminders: {
					type: 'array',
					description:
						'The default reminders on the calendar for the authenticated user.',
					items: {
						type: 'object',
						properties: {
							method: {
								type: 'string',
								description: 'The method of the reminder: email or popup.',
							},
							minutes: {
								type: 'number',
								description:
									'Number of minutes before the event when the reminder should trigger.',
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description: 'Token used to access the next page of results.',
				},
				nextSyncToken: {
					type: 'string',
					description: 'Token used for incremental synchronization.',
				},
				items: {
					type: 'array',
					description: 'List of events on the calendar.',
					items: {
						type: 'object',
						properties: {
							kind: {
								type: 'string',
								description: 'Type of the resource, always calendar#event.',
							},
							etag: { type: 'string', description: 'ETag of the resource.' },
							id: { type: 'string', description: 'Opaque identifier of the event.' },
							status: {
								type: 'string',
								description:
									'Status of the event: confirmed, tentative, or cancelled.',
							},
							htmlLink: {
								type: 'string',
								description: 'URL link to the event in Google Calendar.',
							},
							created: {
								type: 'string',
								description: 'Creation time of the event in RFC3339 format.',
							},
							updated: {
								type: 'string',
								description:
									'Last modification time of the event in RFC3339 format.',
							},
							summary: { type: 'string', description: 'Title of the event.' },
							description: {
								type: 'string',
								description: 'Description of the event.',
							},
							location: {
								type: 'string',
								description: 'Geographic location of the event.',
							},
							colorId: { type: 'string', description: 'The color ID of the event.' },
							eventLabelId: {
								type: 'string',
								description: 'The event label ID associated with the event.',
							},
							creator: {
								type: 'object',
								description: 'The creator of the event.',
								properties: {
									id: {
										type: 'string',
										description: "The creator's profile ID.",
									},
									email: {
										type: 'string',
										description: "The creator's email address.",
									},
									displayName: {
										type: 'string',
										description: "The creator's name.",
									},
									self: {
										type: 'boolean',
										description:
											'Whether the creator corresponds to the calendar on which the event appears.',
									},
								},
								required: [],
							},
							organizer: {
								type: 'object',
								description: 'The organizer of the event.',
								properties: {
									id: {
										type: 'string',
										description: "The organizer's profile ID.",
									},
									email: {
										type: 'string',
										description: "The organizer's email address.",
									},
									displayName: {
										type: 'string',
										description: "The organizer's name.",
									},
									self: {
										type: 'boolean',
										description:
											'Whether the organizer corresponds to the calendar on which the event appears.',
									},
								},
								required: [],
							},
							start: {
								type: 'object',
								description: 'The start time of the event.',
								properties: {
									date: {
										type: 'string',
										description:
											'The date for all-day events in YYYY-MM-DD format.',
									},
									dateTime: {
										type: 'string',
										description:
											'The start time as a combined date-time value in RFC3339 format.',
									},
									timeZone: {
										type: 'string',
										description:
											'The time zone in which the time is specified.',
									},
								},
								required: [],
							},
							end: {
								type: 'object',
								description: 'The end time of the event.',
								properties: {
									date: {
										type: 'string',
										description:
											'The date for all-day events in YYYY-MM-DD format.',
									},
									dateTime: {
										type: 'string',
										description:
											'The end time as a combined date-time value in RFC3339 format.',
									},
									timeZone: {
										type: 'string',
										description:
											'The time zone in which the time is specified.',
									},
								},
								required: [],
							},
							endTimeUnspecified: {
								type: 'boolean',
								description: 'Whether the end time is unspecified.',
							},
							recurrence: {
								type: 'array',
								description:
									'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
								items: {
									type: 'string',
									description:
										'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
								},
							},
							recurringEventId: {
								type: 'string',
								description:
									'The ID of the recurring event to which this instance belongs.',
							},
							originalStartTime: {
								type: 'object',
								description:
									'The original start time for recurring event instances.',
								properties: {
									date: {
										type: 'string',
										description:
											'The date for all-day events in YYYY-MM-DD format.',
									},
									dateTime: {
										type: 'string',
										description: 'The date-time value in RFC3339 format.',
									},
									timeZone: {
										type: 'string',
										description:
											'The time zone in which the time is specified.',
									},
								},
								required: [],
							},
							transparency: {
								type: 'string',
								description:
									'Whether the event blocks time on the calendar: opaque or transparent.',
							},
							visibility: {
								type: 'string',
								description:
									'Visibility of the event: default, public, private, or confidential.',
							},
							iCalUID: {
								type: 'string',
								description: 'Event unique identifier as defined in RFC5545.',
							},
							sequence: {
								type: 'number',
								description: 'Sequence number as per iCalendar.',
							},
							attendees: {
								type: 'array',
								description: 'The attendees of the event.',
								items: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: "The attendee's profile ID.",
										},
										email: {
											type: 'string',
											description: "The attendee's email address.",
										},
										displayName: {
											type: 'string',
											description: "The attendee's name.",
										},
										organizer: {
											type: 'boolean',
											description: 'Whether the attendee is the organizer.',
										},
										self: {
											type: 'boolean',
											description:
												'Whether this entry represents the calendar on which the event appears.',
										},
										resource: {
											type: 'boolean',
											description: 'Whether the attendee is a resource.',
										},
										optional: {
											type: 'boolean',
											description: 'Whether attendance is optional.',
										},
										responseStatus: {
											type: 'string',
											description:
												"The attendee's response status: needsAction, declined, tentative, or accepted.",
										},
										comment: {
											type: 'string',
											description: "The attendee's response comment.",
										},
										additionalGuests: {
											type: 'number',
											description:
												'Number of additional guests the attendee has indicated.',
										},
										asyncOperation: {
											type: 'string',
											description:
												'If set, indicates the ID of an async operation in progress for this attendee.',
										},
									},
									required: [],
								},
							},
							attendeesOmitted: {
								type: 'boolean',
								description:
									"Whether attendees may have been omitted from the event's representation.",
							},
							hangoutLink: {
								type: 'string',
								description: 'URL for the associated Google Hangout.',
							},
							conferenceData: {
								type: 'object',
								description: 'The conference-related information for the event.',
								properties: {
									createRequest: {
										type: 'object',
										description: 'A request to generate a new conference.',
										properties: {
											requestId: {
												type: 'string',
												description:
													'The client-generated unique ID for this request.',
											},
											conferenceSolutionKey: {
												type: 'object',
												description: 'The conference solution type.',
												properties: {
													type: {
														type: 'string',
														description:
															'The conference solution type: eventHangout, eventNamedHangout, or hangoutsMeet.',
													},
												},
												required: [],
											},
											status: {
												type: 'object',
												description:
													'The status of the conference create request.',
												properties: {
													statusCode: {
														type: 'string',
														description:
															'The current status: pending, success, or failure.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									entryPoints: {
										type: 'array',
										description:
											'Information about individual conference entry points.',
										items: {
											type: 'object',
											properties: {
												entryPointType: {
													type: 'string',
													description:
														'The type of conference entry point: video, phone, sip, or more.',
												},
												uri: {
													type: 'string',
													description: 'The URI of the entry point.',
												},
												label: {
													type: 'string',
													description: 'The label for the URI.',
												},
												pin: {
													type: 'string',
													description:
														'The PIN to access the conference.',
												},
												accessCode: {
													type: 'string',
													description:
														'The access code to access the conference.',
												},
												meetingCode: {
													type: 'string',
													description:
														'The meeting code to access the conference.',
												},
												passcode: {
													type: 'string',
													description:
														'The passcode to access the conference.',
												},
												password: {
													type: 'string',
													description:
														'The password to access the conference.',
												},
											},
											required: [],
										},
									},
									conferenceSolution: {
										type: 'object',
										description: 'The conference solution used.',
										properties: {
											key: {
												type: 'object',
												description:
													'The key which identifies the conference solution.',
												properties: {
													type: {
														type: 'string',
														description:
															'The conference solution type.',
													},
												},
												required: [],
											},
											name: {
												type: 'string',
												description:
													'The user-visible name of the solution.',
											},
											iconUri: {
												type: 'string',
												description:
													'The user-visible icon for this solution.',
											},
										},
										required: [],
									},
									conferenceId: {
										type: 'string',
										description: 'The ID of the conference.',
									},
									signature: {
										type: 'string',
										description: 'The signature of the conference data.',
									},
									notes: {
										type: 'string',
										description:
											'Additional notes to display to the user about the conference.',
									},
								},
								required: [],
							},
							reminders: {
								type: 'object',
								description: "Information about the event's reminders.",
								properties: {
									useDefault: {
										type: 'boolean',
										description:
											'Whether the default reminders of the calendar apply to the event.',
									},
									overrides: {
										type: 'array',
										description: 'Custom reminder overrides for the event.',
										items: {
											type: 'object',
											properties: {
												method: {
													type: 'string',
													description:
														'The method of the reminder: email or popup.',
												},
												minutes: {
													type: 'number',
													description:
														'Number of minutes before the event when the reminder should trigger.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							source: {
								type: 'object',
								description: 'Source from which the event was created.',
								properties: {
									url: {
										type: 'string',
										description: 'URL of the source pointing to a resource.',
									},
								},
								required: [],
							},
							attachments: {
								type: 'array',
								description: 'File attachments for the event.',
								items: {
									type: 'object',
									properties: {
										fileUrl: {
											type: 'string',
											description: 'URL link to the attachment.',
										},
										mimeType: {
											type: 'string',
											description: 'Internet media type of the attachment.',
										},
										iconLink: {
											type: 'string',
											description: "URL link to the attachment's icon.",
										},
										fileId: {
											type: 'string',
											description: 'ID of the attached file.',
										},
									},
									required: [],
								},
							},
							eventType: {
								type: 'string',
								description:
									'Specific type of the event: default, focusTime, outOfOffice, workingLocation, fromGmail, or birthday.',
							},
							guestsCanInviteOthers: {
								type: 'boolean',
								description:
									'Whether attendees other than the organizer can invite others.',
							},
							guestsCanModify: {
								type: 'boolean',
								description:
									'Whether attendees other than the organizer can modify the event.',
							},
							guestsCanSeeOtherGuests: {
								type: 'boolean',
								description:
									'Whether attendees other than the organizer can see the attendee list.',
							},
							privateCopy: {
								type: 'boolean',
								description:
									'Whether the event is a private copy that cannot be modified.',
							},
							locked: {
								type: 'boolean',
								description:
									'Whether the event is locked and no changes can be made.',
							},
							outOfOfficeProperties: {
								type: 'object',
								description: 'Out of office event data.',
								properties: {
									autoDeclineMode: {
										type: 'string',
										description:
											'Whether to decline meeting invitations which overlap the event.',
									},
									declineMessage: {
										type: 'string',
										description:
											'Custom message to include in the declined response.',
									},
								},
								required: [],
							},
							focusTimeProperties: {
								type: 'object',
								description: 'Focus time event data.',
								properties: {
									autoDeclineMode: {
										type: 'string',
										description:
											'Whether to decline meeting invitations which overlap the event.',
									},
									declineMessage: {
										type: 'string',
										description:
											'Custom message to include in the declined response.',
									},
									chatStatus: {
										type: 'string',
										description: 'The chat status during focus time.',
									},
								},
								required: [],
							},
							workingLocationProperties: {
								type: 'object',
								description: 'Working location event data.',
								properties: {
									type: {
										type: 'string',
										description:
											'Type of the working location: homeOffice, customLocation, or officeLocation.',
									},
									homeOffice: {
										type: 'string',
										description:
											'If present, indicates the user is working from home.',
									},
									customLocation: {
										type: 'object',
										description: 'Custom working location info.',
										properties: {
											label: {
												type: 'string',
												description:
													'An optional extra label for additional information.',
											},
										},
										required: [],
									},
									officeLocation: {
										type: 'object',
										description: 'Office location info.',
										properties: {
											buildingId: {
												type: 'string',
												description: 'The building identifier.',
											},
											floorId: {
												type: 'string',
												description: 'The floor identifier.',
											},
											floorSectionId: {
												type: 'string',
												description: 'The floor section identifier.',
											},
											deskId: {
												type: 'string',
												description: 'The desk identifier.',
											},
											label: {
												type: 'string',
												description: 'The label of the office location.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							birthdayProperties: {
								type: 'object',
								description: 'Birthday event data.',
								properties: {
									contact: {
										type: 'string',
										description:
											'Resource name of the contact this birthday event is linked to.',
									},
									type: {
										type: 'string',
										description: 'Type of the birthday event.',
									},
									customTypeName: {
										type: 'string',
										description: 'The custom type name for the birthday event.',
									},
								},
								required: [],
							},
							extendedProperties: {
								type: 'object',
								description: 'Extended properties of the event.',
								properties: {
									private: {
										type: 'object',
										description:
											'Properties visible only to the creator of the event.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									shared: {
										type: 'object',
										description: 'Properties visible to all attendees.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							gadget: {
								type: 'object',
								description: 'A gadget that extends this event (deprecated).',
								properties: {
									type: { type: 'string', description: "The gadget's type." },
									link: { type: 'string', description: "The gadget's URL." },
									iconLink: {
										type: 'string',
										description: "The gadget's icon URL.",
									},
									width: {
										type: 'number',
										description: "The gadget's width in pixels.",
									},
									height: {
										type: 'number',
										description: "The gadget's height in pixels.",
									},
									display: {
										type: 'string',
										description: "The gadget's display mode.",
									},
									preferences: {
										type: 'object',
										description: 'Gadget preferences as key-value pairs.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								required: [],
							},
							anyoneCanAddSelf: {
								type: 'boolean',
								description:
									'Whether anyone can invite themselves to the event (deprecated).',
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
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'quickAddEvent',
		label: 'Quick add an event',
		description: 'Creates an event on the specified calendar based on a simple text string.',
		context:
			"---\nname: quickAddEvent\ndescription: Creates an event based on a simple text string.\n---\n\nCreates an event based on a simple text string. The text is parsed to determine the event's title, date, and time.",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
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
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar to create the event on.',
				},
				text: {
					type: 'string',
					description: 'The text describing the event to be created.',
				},
				sendUpdates: {
					type: 'string',
					description: 'Whether to send notifications about the event.',
					default: '',
					enum: ['', 'all', 'externalOnly', 'none'],
				},
			},
			required: ['calendarId', 'text'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#event.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Opaque identifier of the event.' },
				status: {
					type: 'string',
					description: 'Status of the event: confirmed, tentative, or cancelled.',
				},
				htmlLink: {
					type: 'string',
					description: 'URL link to the event in Google Calendar.',
				},
				created: {
					type: 'string',
					description: 'Creation time of the event in RFC3339 format.',
				},
				updated: {
					type: 'string',
					description: 'Last modification time of the event in RFC3339 format.',
				},
				summary: { type: 'string', description: 'Title of the event.' },
				description: { type: 'string', description: 'Description of the event.' },
				location: { type: 'string', description: 'Geographic location of the event.' },
				colorId: { type: 'string', description: 'The color ID of the event.' },
				eventLabelId: {
					type: 'string',
					description: 'The event label ID associated with the event.',
				},
				creator: {
					type: 'object',
					description: 'The creator of the event.',
					properties: {
						id: { type: 'string', description: "The creator's profile ID." },
						email: { type: 'string', description: "The creator's email address." },
						displayName: { type: 'string', description: "The creator's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the creator corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						id: { type: 'string', description: "The organizer's profile ID." },
						email: { type: 'string', description: "The organizer's email address." },
						displayName: { type: 'string', description: "The organizer's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the organizer corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				start: {
					type: 'object',
					description: 'The start time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The start time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description: 'The end time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The end time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				endTimeUnspecified: {
					type: 'boolean',
					description: 'Whether the end time is unspecified.',
				},
				recurrence: {
					type: 'array',
					description:
						'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
					items: {
						type: 'string',
						description:
							'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
					},
				},
				recurringEventId: {
					type: 'string',
					description: 'The ID of the recurring event to which this instance belongs.',
				},
				originalStartTime: {
					type: 'object',
					description: 'The original start time for recurring event instances.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description: 'The date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				transparency: {
					type: 'string',
					description:
						'Whether the event blocks time on the calendar: opaque or transparent.',
				},
				visibility: {
					type: 'string',
					description:
						'Visibility of the event: default, public, private, or confidential.',
				},
				iCalUID: {
					type: 'string',
					description: 'Event unique identifier as defined in RFC5545.',
				},
				sequence: { type: 'number', description: 'Sequence number as per iCalendar.' },
				attendees: {
					type: 'array',
					description: 'The attendees of the event.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: "The attendee's profile ID." },
							email: { type: 'string', description: "The attendee's email address." },
							displayName: { type: 'string', description: "The attendee's name." },
							organizer: {
								type: 'boolean',
								description: 'Whether the attendee is the organizer.',
							},
							self: {
								type: 'boolean',
								description:
									'Whether this entry represents the calendar on which the event appears.',
							},
							resource: {
								type: 'boolean',
								description: 'Whether the attendee is a resource.',
							},
							optional: {
								type: 'boolean',
								description: 'Whether attendance is optional.',
							},
							responseStatus: {
								type: 'string',
								description:
									"The attendee's response status: needsAction, declined, tentative, or accepted.",
							},
							comment: {
								type: 'string',
								description: "The attendee's response comment.",
							},
							additionalGuests: {
								type: 'number',
								description:
									'Number of additional guests the attendee has indicated.',
							},
							asyncOperation: {
								type: 'string',
								description:
									'If set, indicates the ID of an async operation in progress for this attendee.',
							},
						},
						required: [],
					},
				},
				attendeesOmitted: {
					type: 'boolean',
					description:
						"Whether attendees may have been omitted from the event's representation.",
				},
				hangoutLink: {
					type: 'string',
					description: 'URL for the associated Google Hangout.',
				},
				conferenceData: {
					type: 'object',
					description: 'The conference-related information for the event.',
					properties: {
						createRequest: {
							type: 'object',
							description: 'A request to generate a new conference.',
							properties: {
								requestId: {
									type: 'string',
									description: 'The client-generated unique ID for this request.',
								},
								conferenceSolutionKey: {
									type: 'object',
									description: 'The conference solution type.',
									properties: {
										type: {
											type: 'string',
											description:
												'The conference solution type: eventHangout, eventNamedHangout, or hangoutsMeet.',
										},
									},
									required: [],
								},
								status: {
									type: 'object',
									description: 'The status of the conference create request.',
									properties: {
										statusCode: {
											type: 'string',
											description:
												'The current status: pending, success, or failure.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						entryPoints: {
							type: 'array',
							description: 'Information about individual conference entry points.',
							items: {
								type: 'object',
								properties: {
									entryPointType: {
										type: 'string',
										description:
											'The type of conference entry point: video, phone, sip, or more.',
									},
									uri: {
										type: 'string',
										description: 'The URI of the entry point.',
									},
									label: {
										type: 'string',
										description: 'The label for the URI.',
									},
									pin: {
										type: 'string',
										description: 'The PIN to access the conference.',
									},
									accessCode: {
										type: 'string',
										description: 'The access code to access the conference.',
									},
									meetingCode: {
										type: 'string',
										description: 'The meeting code to access the conference.',
									},
									passcode: {
										type: 'string',
										description: 'The passcode to access the conference.',
									},
									password: {
										type: 'string',
										description: 'The password to access the conference.',
									},
								},
								required: [],
							},
						},
						conferenceSolution: {
							type: 'object',
							description: 'The conference solution used.',
							properties: {
								key: {
									type: 'object',
									description:
										'The key which identifies the conference solution.',
									properties: {
										type: {
											type: 'string',
											description: 'The conference solution type.',
										},
									},
									required: [],
								},
								name: {
									type: 'string',
									description: 'The user-visible name of the solution.',
								},
								iconUri: {
									type: 'string',
									description: 'The user-visible icon for this solution.',
								},
							},
							required: [],
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						signature: {
							type: 'string',
							description: 'The signature of the conference data.',
						},
						notes: {
							type: 'string',
							description:
								'Additional notes to display to the user about the conference.',
						},
					},
					required: [],
				},
				reminders: {
					type: 'object',
					description: "Information about the event's reminders.",
					properties: {
						useDefault: {
							type: 'boolean',
							description:
								'Whether the default reminders of the calendar apply to the event.',
						},
						overrides: {
							type: 'array',
							description: 'Custom reminder overrides for the event.',
							items: {
								type: 'object',
								properties: {
									method: {
										type: 'string',
										description: 'The method of the reminder: email or popup.',
									},
									minutes: {
										type: 'number',
										description:
											'Number of minutes before the event when the reminder should trigger.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				source: {
					type: 'object',
					description: 'Source from which the event was created.',
					properties: {
						url: {
							type: 'string',
							description: 'URL of the source pointing to a resource.',
						},
					},
					required: [],
				},
				attachments: {
					type: 'array',
					description: 'File attachments for the event.',
					items: {
						type: 'object',
						properties: {
							fileUrl: { type: 'string', description: 'URL link to the attachment.' },
							mimeType: {
								type: 'string',
								description: 'Internet media type of the attachment.',
							},
							iconLink: {
								type: 'string',
								description: "URL link to the attachment's icon.",
							},
							fileId: { type: 'string', description: 'ID of the attached file.' },
						},
						required: [],
					},
				},
				eventType: {
					type: 'string',
					description:
						'Specific type of the event: default, focusTime, outOfOffice, workingLocation, fromGmail, or birthday.',
				},
				guestsCanInviteOthers: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can invite others.',
				},
				guestsCanModify: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can modify the event.',
				},
				guestsCanSeeOtherGuests: {
					type: 'boolean',
					description:
						'Whether attendees other than the organizer can see the attendee list.',
				},
				privateCopy: {
					type: 'boolean',
					description: 'Whether the event is a private copy that cannot be modified.',
				},
				locked: {
					type: 'boolean',
					description: 'Whether the event is locked and no changes can be made.',
				},
				outOfOfficeProperties: {
					type: 'object',
					description: 'Out of office event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
					},
					required: [],
				},
				focusTimeProperties: {
					type: 'object',
					description: 'Focus time event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
						chatStatus: {
							type: 'string',
							description: 'The chat status during focus time.',
						},
					},
					required: [],
				},
				workingLocationProperties: {
					type: 'object',
					description: 'Working location event data.',
					properties: {
						type: {
							type: 'string',
							description:
								'Type of the working location: homeOffice, customLocation, or officeLocation.',
						},
						homeOffice: {
							type: 'string',
							description: 'If present, indicates the user is working from home.',
						},
						customLocation: {
							type: 'object',
							description: 'Custom working location info.',
							properties: {
								label: {
									type: 'string',
									description:
										'An optional extra label for additional information.',
								},
							},
							required: [],
						},
						officeLocation: {
							type: 'object',
							description: 'Office location info.',
							properties: {
								buildingId: {
									type: 'string',
									description: 'The building identifier.',
								},
								floorId: { type: 'string', description: 'The floor identifier.' },
								floorSectionId: {
									type: 'string',
									description: 'The floor section identifier.',
								},
								deskId: { type: 'string', description: 'The desk identifier.' },
								label: {
									type: 'string',
									description: 'The label of the office location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				birthdayProperties: {
					type: 'object',
					description: 'Birthday event data.',
					properties: {
						contact: {
							type: 'string',
							description:
								'Resource name of the contact this birthday event is linked to.',
						},
						type: { type: 'string', description: 'Type of the birthday event.' },
						customTypeName: {
							type: 'string',
							description: 'The custom type name for the birthday event.',
						},
					},
					required: [],
				},
				extendedProperties: {
					type: 'object',
					description: 'Extended properties of the event.',
					properties: {
						private: {
							type: 'object',
							description: 'Properties visible only to the creator of the event.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						shared: {
							type: 'object',
							description: 'Properties visible to all attendees.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				gadget: {
					type: 'object',
					description: 'A gadget that extends this event (deprecated).',
					properties: {
						type: { type: 'string', description: "The gadget's type." },
						link: { type: 'string', description: "The gadget's URL." },
						iconLink: { type: 'string', description: "The gadget's icon URL." },
						width: { type: 'number', description: "The gadget's width in pixels." },
						height: { type: 'number', description: "The gadget's height in pixels." },
						display: { type: 'string', description: "The gadget's display mode." },
						preferences: {
							type: 'object',
							description: 'Gadget preferences as key-value pairs.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'updateAclRule',
		label: 'Update an access control rule',
		description: 'Updates an access control rule for a calendar using patch semantics.',
		context:
			'---\nname: updateAclRule\ndescription: Updates an access control rule using PATCH semantics.\n---\n\nUpdates an access control rule on a calendar. \nUses HTTP PATCH — only the fields you provide are updated; omitted fields remain unchanged.\n\n**Important for AI agents:** To change permissions, first call getAclRule to confirm the current role, then send the updated role value.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: { type: 'string', description: 'The identifier of the calendar.' },
				ruleId: {
					type: 'string',
					description: 'The identifier of the ACL rule to update.',
				},
				role: {
					type: 'string',
					description: 'The access role to assign.',
					enum: [
						'none',
						'freeBusyReader',
						'reader',
						'writerWithoutPrivateAccess',
						'writer',
						'owner',
					],
				},
				sendNotifications: {
					type: 'boolean',
					description: 'Whether to send notifications about the calendar sharing change.',
				},
			},
			required: ['calendarId', 'ruleId', 'role'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource. Value is always calendar#aclRule.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Identifier of the ACL rule.' },
				scope: {
					type: 'object',
					description: 'The extent to which calendar access is granted by this ACL rule.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the scope. Possible values are default, user, group, or domain.',
						},
						value: {
							type: 'string',
							description:
								'The email address of a user or group, or the name of a domain.',
						},
					},
					required: [],
				},
				role: {
					type: 'string',
					description:
						'The access role granted by this ACL rule. Possible values are none, freeBusyReader, reader, writerWithoutPrivateAccess, writer, or owner.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'updateCalendar',
		label: 'Update a calendar',
		description: 'Updates metadata for a calendar using patch semantics.',
		context:
			'---\nname: updateCalendar\ndescription: Updates metadata for a calendar using patch semantics.\n---\n\nUpdates metadata for an existing calendar. \nUses HTTP PATCH — only the fields you provide are updated; omitted fields remain unchanged. \nArray fields (e.g. eventLabels), if specified, overwrite the existing array entirely. To avoid overwriting array fields, first call getCalendar to read the current state, then merge with the input, if requested so.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar to update.',
				},
				summary: { type: 'string', description: 'Title of the calendar.' },
				description: { type: 'string', description: 'Description of the calendar.' },
				location: {
					type: 'string',
					description: 'Geographic location of the calendar as free-form text.',
				},
				timeZone: {
					type: 'string',
					description: 'The time zone of the calendar in IANA format.',
				},
				labelProperties: {
					type: 'object',
					description:
						'Label properties to set on this calendar. If specified, overwrites existing label properties.',
					properties: {
						eventLabels: {
							type: 'array',
							description:
								'Event labels for this calendar. Replaces existing labels when provided. Each calendar can have a maximum of 200 labels.',
							items: {
								type: 'object',
								properties: {
									backgroundColor: {
										type: 'string',
										description:
											'Background color in hexadecimal format, such as #039be5.',
									},
									id: {
										type: 'string',
										description:
											'The ID of the label. Optional when inserting; required when updating. Must be unique and in UUID format.',
									},
									name: {
										type: 'string',
										description: 'Name of the label, at most 50 characters.',
									},
								},
								required: ['backgroundColor'],
							},
						},
					},
					required: [],
				},
			},
			required: ['calendarId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#calendar.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Identifier of the calendar.' },
				summary: { type: 'string', description: 'Title of the calendar.' },
				description: { type: 'string', description: 'Description of the calendar.' },
				location: { type: 'string', description: 'Geographic location of the calendar.' },
				timeZone: { type: 'string', description: 'The time zone of the calendar.' },
				dataOwner: { type: 'string', description: 'The data owner of the calendar.' },
				conferenceProperties: {
					type: 'object',
					description: 'Conferencing properties for this calendar.',
					properties: {
						allowedConferenceSolutionTypes: {
							type: 'array',
							description:
								'The types of conference solutions that are supported for this calendar.',
							items: {
								type: 'string',
								description:
									'A conference solution type, e.g. eventHangout, eventNamedHangout, or hangoutsMeet.',
							},
						},
					},
					required: [],
				},
				labelProperties: {
					type: 'object',
					description: 'Label properties defined on this calendar.',
					properties: {
						eventLabels: {
							type: 'array',
							description:
								'Event labels defined on this calendar. Each calendar can have a maximum of 200 labels.',
							items: {
								type: 'object',
								properties: {
									backgroundColor: {
										type: 'string',
										description:
											'Background color of the label in hexadecimal format, such as #039be5.',
									},
									id: {
										type: 'string',
										description: 'The ID of the label in UUID format.',
									},
									name: {
										type: 'string',
										description: 'Name of the label, at most 50 characters.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				autoAcceptInvitations: {
					type: 'boolean',
					description:
						'Whether invitations are automatically accepted for this calendar.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-calendar',
		appVersion: 5,
		endpointName: 'updateEvent',
		label: 'Update an event',
		description: 'Updates an event on the specified calendar using patch semantics.',
		context:
			'---\nname: updateEvent\ndescription: Updates an event on a calendar using PATCH semantics.\n---\n\nUpdates an event on a calendar. \nUses HTTP PATCH — only the fields you provide are updated; omitted fields remain unchanged. \nArray fields (e.g. attendees, recurrence, attachments), if specified, overwrite the existing array entirely.\n\n**Important for AI agents:** To avoid accidentally clearing fields or losing attendees, first call getEvent to read the current state, then merge your changes and send the updated fields.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/calendar'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				calendarId: {
					type: 'string',
					description: 'The identifier of the calendar containing the event.',
				},
				eventId: { type: 'string', description: 'The identifier of the event to update.' },
				sendUpdates: {
					type: 'string',
					description: 'Whether to send notifications about the event.',
					default: '',
					enum: ['', 'all', 'externalOnly', 'none'],
				},
				conferenceDataVersion: {
					type: 'number',
					description:
						'Version number of the conference data API. Set to 1 to enable conference data creation.',
					minimum: 0,
					maximum: 1,
				},
				supportsAttachments: {
					type: 'boolean',
					description:
						'Whether the API client performing the operation supports event attachments.',
				},
				maxAttendees: {
					type: 'number',
					description: 'The maximum number of attendees to include in the response.',
				},
				eventLabelVersion: {
					type: 'number',
					description:
						'Version of event label feature. Set to 1 to enable event labels via eventLabelId. Default is 0.',
					minimum: 0,
					maximum: 1,
				},
				summary: { type: 'string', description: 'Title of the event.' },
				description: { type: 'string', description: 'Description of the event.' },
				location: {
					type: 'string',
					description: 'Geographic location of the event as free-form text.',
				},
				colorId: { type: 'string', description: 'The color ID for the event.' },
				eventLabelId: {
					type: 'string',
					description:
						'The ID of the event label to assign. Requires eventLabelVersion set to 1.',
				},
				start: {
					type: 'object',
					description:
						'The start time of the event. Use date for all-day events (YYYY-MM-DD) or dateTime for timed events (RFC3339).',
					properties: {
						date: {
							type: 'string',
							description:
								'The date for all-day events, in YYYY-MM-DD format. Mutually exclusive with dateTime.',
						},
						dateTime: {
							type: 'string',
							description:
								'The date-time for timed events, in RFC3339 format, e.g. 2025-09-15T09:00:00+02:00 or 2025-09-15T07:00:00Z. Mutually exclusive with date.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description:
						'The end time of the event. Use date for all-day events (YYYY-MM-DD) or dateTime for timed events (RFC3339).',
					properties: {
						date: {
							type: 'string',
							description:
								'The date for all-day events, in YYYY-MM-DD format. Mutually exclusive with dateTime.',
						},
						dateTime: {
							type: 'string',
							description:
								'The date-time for timed events, in RFC3339 format, e.g. 2025-09-15T09:00:00+02:00 or 2025-09-15T07:00:00Z. Mutually exclusive with date.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				recurrence: {
					type: 'array',
					description:
						'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
					items: {
						type: 'string',
						description:
							'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
					},
				},
				transparency: {
					type: 'string',
					description: 'Whether the event blocks time on the calendar.',
					default: '',
					enum: ['', 'opaque', 'transparent'],
				},
				visibility: {
					type: 'string',
					description: 'Visibility of the event.',
					default: '',
					enum: ['', 'default', 'public', 'private', 'confidential'],
				},
				attendees: {
					type: 'array',
					description: 'The attendees of the event.',
					items: {
						type: 'object',
						properties: {
							email: { type: 'string', description: "The attendee's email address." },
							displayName: { type: 'string', description: "The attendee's name." },
							optional: {
								type: 'boolean',
								description: 'Whether attendance is optional.',
							},
							resource: {
								type: 'boolean',
								description: 'Whether the attendee is a resource.',
							},
							responseStatus: {
								type: 'string',
								description: "The attendee's response status.",
								default: '',
								enum: ['', 'needsAction', 'declined', 'tentative', 'accepted'],
							},
							comment: {
								type: 'string',
								description: "The attendee's response comment.",
							},
							additionalGuests: {
								type: 'number',
								description:
									'Number of additional guests the attendee has indicated.',
							},
						},
						required: ['email'],
					},
				},
				guestsCanInviteOthers: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can invite others.',
				},
				guestsCanModify: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can modify the event.',
				},
				guestsCanSeeOtherGuests: {
					type: 'boolean',
					description:
						'Whether attendees other than the organizer can see the attendee list.',
				},
				reminders: {
					type: 'object',
					description: "Information about the event's reminders.",
					properties: {
						useDefault: {
							type: 'boolean',
							description:
								'Whether the default reminders of the calendar apply to the event.',
						},
						overrides: {
							type: 'array',
							description: 'Custom reminder overrides for the event.',
							items: {
								type: 'object',
								properties: {
									method: {
										type: 'string',
										description: 'The method of the reminder: email or popup.',
									},
									minutes: {
										type: 'number',
										description:
											'Number of minutes before the event when the reminder should trigger.',
									},
								},
								required: ['method', 'minutes'],
							},
						},
					},
					required: [],
				},
				conferenceData: {
					type: 'object',
					description:
						'Conference-related information. Set conferenceDataVersion to 1 in query params to use this.',
					properties: {
						createRequest: {
							type: 'object',
							description:
								'A request to generate a new conference. Required when creating a new conference.',
							properties: {
								requestId: {
									type: 'string',
									description:
										'A unique ID for the conference create request. Required when creating a conference.',
								},
								conferenceSolutionKey: {
									type: 'object',
									description:
										'The conference solution key. Required when creating a conference.',
									properties: {
										type: {
											type: 'string',
											description:
												'The conference solution type, e.g. hangoutsMeet.',
										},
									},
									required: [],
								},
								status: {
									type: 'object',
									description: 'The status of the conference create request.',
									properties: {
										statusCode: {
											type: 'string',
											description:
												'The current status of the conference. E.g. pending, success, failure.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						entryPoints: {
							type: 'array',
							description:
								'Conference entry points such as URLs or phone numbers. Either conferenceSolution and at least one entryPoint, or createRequest is required.',
							items: {
								type: 'object',
								properties: {
									entryPointType: {
										type: 'string',
										description: 'The type of the conference entry point.',
										default: '',
										enum: ['', 'video', 'phone', 'sip', 'more'],
									},
									uri: {
										type: 'string',
										description:
											'The URI of the entry point. Max 1300 characters. Format depends on type: video/more requires http(s), phone requires tel, sip requires sip schema.',
									},
									label: {
										type: 'string',
										description:
											'The label for the URI, visible to end users. Max 512 characters.',
									},
									pin: {
										type: 'string',
										description:
											"The PIN to access the conference. Max 128 characters. Populate only the code fields matching the conference provider's terminology.",
									},
									accessCode: {
										type: 'string',
										description:
											'The access code to access the conference. Max 128 characters.',
									},
									meetingCode: {
										type: 'string',
										description:
											'The meeting code to access the conference. Max 128 characters.',
									},
									passcode: {
										type: 'string',
										description:
											'The passcode to access the conference. Max 128 characters.',
									},
									password: {
										type: 'string',
										description:
											'The password to access the conference. Max 128 characters.',
									},
								},
								required: [],
							},
						},
						conferenceSolution: {
							type: 'object',
							description:
								'The conference solution, such as Google Meet. Either conferenceSolution and at least one entryPoint, or createRequest is required.',
							properties: {
								key: {
									type: 'object',
									description:
										'The key which uniquely identifies the conference solution.',
									properties: {
										type: {
											type: 'string',
											description: 'The conference solution type.',
											default: '',
											enum: ['', 'hangoutsMeet', 'addOn'],
										},
									},
									required: [],
								},
								name: {
									type: 'string',
									description:
										'The user-visible name of this solution. Not localized.',
								},
								iconUri: {
									type: 'string',
									description: 'The user-visible icon for this solution.',
								},
							},
							required: [],
						},
						conferenceId: {
							type: 'string',
							description:
								'The ID of the conference. Format varies by solution type: hangoutsMeet uses a 10-letter meeting code (e.g. aaa-bbbb-ccc).',
						},
						notes: {
							type: 'string',
							description:
								'Additional notes (such as instructions from the domain administrator) to display to the user. Can contain HTML. Max 2048 characters.',
						},
					},
					required: [],
				},
				attachments: {
					type: 'array',
					description:
						'File attachments for the event. Set supportsAttachments to true to use this.',
					items: {
						type: 'object',
						properties: {
							fileUrl: {
								type: 'string',
								description:
									'URL link to the attachment. Required when adding an attachment.',
							},
						},
						required: [],
					},
				},
				source: {
					type: 'object',
					description: 'Source from which the event was created.',
					properties: {
						url: {
							type: 'string',
							description:
								'URL of the source pointing to a resource. Required if source is provided.',
						},
					},
					required: [],
				},
				eventType: {
					type: 'string',
					description: 'Specific type of the event.',
					default: '',
					enum: [
						'',
						'default',
						'focusTime',
						'outOfOffice',
						'workingLocation',
						'fromGmail',
						'birthday',
					],
				},
				outOfOfficeProperties: {
					type: 'object',
					description:
						'Out of office event data. Only used when eventType is outOfOffice.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description: 'Whether to auto-decline meeting invitations.',
							default: '',
							enum: [
								'',
								'declineNone',
								'declineOnlyNewConflictingInvitations',
								'declineAllConflictingInvitations',
							],
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
					},
					required: [],
				},
				focusTimeProperties: {
					type: 'object',
					description: 'Focus time event data. Only used when eventType is focusTime.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description: 'Whether to auto-decline meeting invitations.',
							default: '',
							enum: [
								'',
								'declineNone',
								'declineOnlyNewConflictingInvitations',
								'declineAllConflictingInvitations',
							],
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
						chatStatus: {
							type: 'string',
							description: 'The chat status during focus time.',
							default: '',
							enum: ['', 'available', 'doNotDisturb'],
						},
					},
					required: [],
				},
				workingLocationProperties: {
					type: 'object',
					description:
						'Working location event data. Only used when eventType is workingLocation.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of working location. Required if workingLocationProperties is provided.',
							default: '',
							enum: ['', 'homeOffice', 'officeLocation', 'customLocation'],
						},
						homeOffice: {
							type: 'string',
							description:
								'Set to any value to indicate working from home. The value itself is ignored.',
						},
						customLocation: {
							type: 'object',
							description: 'Custom working location info.',
							properties: {
								label: {
									type: 'string',
									description:
										'An optional extra label for additional information.',
								},
							},
							required: [],
						},
						officeLocation: {
							type: 'object',
							description: 'Office location info.',
							properties: {
								buildingId: {
									type: 'string',
									description: 'The building identifier.',
								},
								floorId: { type: 'string', description: 'The floor identifier.' },
								floorSectionId: {
									type: 'string',
									description: 'The floor section identifier.',
								},
								deskId: { type: 'string', description: 'The desk identifier.' },
								label: {
									type: 'string',
									description: 'The label of the office location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				birthdayProperties: {
					type: 'object',
					description: 'Properties for birthday events.',
					properties: {
						contact: {
							type: 'string',
							description:
								'The resource name of the contact linked to this birthday event.',
						},
						type: { type: 'string', description: 'The type of birthday event.' },
						customTypeName: {
							type: 'string',
							description: 'Custom name for the birthday type if type is custom.',
						},
					},
					required: [],
				},
			},
			required: ['calendarId', 'eventId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				kind: {
					type: 'string',
					description: 'Type of the resource, always calendar#event.',
				},
				etag: { type: 'string', description: 'ETag of the resource.' },
				id: { type: 'string', description: 'Opaque identifier of the event.' },
				status: {
					type: 'string',
					description: 'Status of the event: confirmed, tentative, or cancelled.',
				},
				htmlLink: {
					type: 'string',
					description: 'URL link to the event in Google Calendar.',
				},
				created: {
					type: 'string',
					description: 'Creation time of the event in RFC3339 format.',
				},
				updated: {
					type: 'string',
					description: 'Last modification time of the event in RFC3339 format.',
				},
				summary: { type: 'string', description: 'Title of the event.' },
				description: { type: 'string', description: 'Description of the event.' },
				location: { type: 'string', description: 'Geographic location of the event.' },
				colorId: { type: 'string', description: 'The color ID of the event.' },
				eventLabelId: {
					type: 'string',
					description: 'The event label ID associated with the event.',
				},
				creator: {
					type: 'object',
					description: 'The creator of the event.',
					properties: {
						id: { type: 'string', description: "The creator's profile ID." },
						email: { type: 'string', description: "The creator's email address." },
						displayName: { type: 'string', description: "The creator's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the creator corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						id: { type: 'string', description: "The organizer's profile ID." },
						email: { type: 'string', description: "The organizer's email address." },
						displayName: { type: 'string', description: "The organizer's name." },
						self: {
							type: 'boolean',
							description:
								'Whether the organizer corresponds to the calendar on which the event appears.',
						},
					},
					required: [],
				},
				start: {
					type: 'object',
					description: 'The start time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The start time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description: 'The end time of the event.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description:
								'The end time as a combined date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				endTimeUnspecified: {
					type: 'boolean',
					description: 'Whether the end time is unspecified.',
				},
				recurrence: {
					type: 'array',
					description:
						'List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.',
					items: {
						type: 'string',
						description:
							'An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.',
					},
				},
				recurringEventId: {
					type: 'string',
					description: 'The ID of the recurring event to which this instance belongs.',
				},
				originalStartTime: {
					type: 'object',
					description: 'The original start time for recurring event instances.',
					properties: {
						date: {
							type: 'string',
							description: 'The date for all-day events in YYYY-MM-DD format.',
						},
						dateTime: {
							type: 'string',
							description: 'The date-time value in RFC3339 format.',
						},
						timeZone: {
							type: 'string',
							description: 'The time zone in which the time is specified.',
						},
					},
					required: [],
				},
				transparency: {
					type: 'string',
					description:
						'Whether the event blocks time on the calendar: opaque or transparent.',
				},
				visibility: {
					type: 'string',
					description:
						'Visibility of the event: default, public, private, or confidential.',
				},
				iCalUID: {
					type: 'string',
					description: 'Event unique identifier as defined in RFC5545.',
				},
				sequence: { type: 'number', description: 'Sequence number as per iCalendar.' },
				attendees: {
					type: 'array',
					description: 'The attendees of the event.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: "The attendee's profile ID." },
							email: { type: 'string', description: "The attendee's email address." },
							displayName: { type: 'string', description: "The attendee's name." },
							organizer: {
								type: 'boolean',
								description: 'Whether the attendee is the organizer.',
							},
							self: {
								type: 'boolean',
								description:
									'Whether this entry represents the calendar on which the event appears.',
							},
							resource: {
								type: 'boolean',
								description: 'Whether the attendee is a resource.',
							},
							optional: {
								type: 'boolean',
								description: 'Whether attendance is optional.',
							},
							responseStatus: {
								type: 'string',
								description:
									"The attendee's response status: needsAction, declined, tentative, or accepted.",
							},
							comment: {
								type: 'string',
								description: "The attendee's response comment.",
							},
							additionalGuests: {
								type: 'number',
								description:
									'Number of additional guests the attendee has indicated.',
							},
							asyncOperation: {
								type: 'string',
								description:
									'If set, indicates the ID of an async operation in progress for this attendee.',
							},
						},
						required: [],
					},
				},
				attendeesOmitted: {
					type: 'boolean',
					description:
						"Whether attendees may have been omitted from the event's representation.",
				},
				hangoutLink: {
					type: 'string',
					description: 'URL for the associated Google Hangout.',
				},
				conferenceData: {
					type: 'object',
					description: 'The conference-related information for the event.',
					properties: {
						createRequest: {
							type: 'object',
							description: 'A request to generate a new conference.',
							properties: {
								requestId: {
									type: 'string',
									description: 'The client-generated unique ID for this request.',
								},
								conferenceSolutionKey: {
									type: 'object',
									description: 'The conference solution type.',
									properties: {
										type: {
											type: 'string',
											description:
												'The conference solution type: eventHangout, eventNamedHangout, or hangoutsMeet.',
										},
									},
									required: [],
								},
								status: {
									type: 'object',
									description: 'The status of the conference create request.',
									properties: {
										statusCode: {
											type: 'string',
											description:
												'The current status: pending, success, or failure.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						entryPoints: {
							type: 'array',
							description: 'Information about individual conference entry points.',
							items: {
								type: 'object',
								properties: {
									entryPointType: {
										type: 'string',
										description:
											'The type of conference entry point: video, phone, sip, or more.',
									},
									uri: {
										type: 'string',
										description: 'The URI of the entry point.',
									},
									label: {
										type: 'string',
										description: 'The label for the URI.',
									},
									pin: {
										type: 'string',
										description: 'The PIN to access the conference.',
									},
									accessCode: {
										type: 'string',
										description: 'The access code to access the conference.',
									},
									meetingCode: {
										type: 'string',
										description: 'The meeting code to access the conference.',
									},
									passcode: {
										type: 'string',
										description: 'The passcode to access the conference.',
									},
									password: {
										type: 'string',
										description: 'The password to access the conference.',
									},
								},
								required: [],
							},
						},
						conferenceSolution: {
							type: 'object',
							description: 'The conference solution used.',
							properties: {
								key: {
									type: 'object',
									description:
										'The key which identifies the conference solution.',
									properties: {
										type: {
											type: 'string',
											description: 'The conference solution type.',
										},
									},
									required: [],
								},
								name: {
									type: 'string',
									description: 'The user-visible name of the solution.',
								},
								iconUri: {
									type: 'string',
									description: 'The user-visible icon for this solution.',
								},
							},
							required: [],
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						signature: {
							type: 'string',
							description: 'The signature of the conference data.',
						},
						notes: {
							type: 'string',
							description:
								'Additional notes to display to the user about the conference.',
						},
					},
					required: [],
				},
				reminders: {
					type: 'object',
					description: "Information about the event's reminders.",
					properties: {
						useDefault: {
							type: 'boolean',
							description:
								'Whether the default reminders of the calendar apply to the event.',
						},
						overrides: {
							type: 'array',
							description: 'Custom reminder overrides for the event.',
							items: {
								type: 'object',
								properties: {
									method: {
										type: 'string',
										description: 'The method of the reminder: email or popup.',
									},
									minutes: {
										type: 'number',
										description:
											'Number of minutes before the event when the reminder should trigger.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				source: {
					type: 'object',
					description: 'Source from which the event was created.',
					properties: {
						url: {
							type: 'string',
							description: 'URL of the source pointing to a resource.',
						},
					},
					required: [],
				},
				attachments: {
					type: 'array',
					description: 'File attachments for the event.',
					items: {
						type: 'object',
						properties: {
							fileUrl: { type: 'string', description: 'URL link to the attachment.' },
							mimeType: {
								type: 'string',
								description: 'Internet media type of the attachment.',
							},
							iconLink: {
								type: 'string',
								description: "URL link to the attachment's icon.",
							},
							fileId: { type: 'string', description: 'ID of the attached file.' },
						},
						required: [],
					},
				},
				eventType: {
					type: 'string',
					description:
						'Specific type of the event: default, focusTime, outOfOffice, workingLocation, fromGmail, or birthday.',
				},
				guestsCanInviteOthers: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can invite others.',
				},
				guestsCanModify: {
					type: 'boolean',
					description: 'Whether attendees other than the organizer can modify the event.',
				},
				guestsCanSeeOtherGuests: {
					type: 'boolean',
					description:
						'Whether attendees other than the organizer can see the attendee list.',
				},
				privateCopy: {
					type: 'boolean',
					description: 'Whether the event is a private copy that cannot be modified.',
				},
				locked: {
					type: 'boolean',
					description: 'Whether the event is locked and no changes can be made.',
				},
				outOfOfficeProperties: {
					type: 'object',
					description: 'Out of office event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
					},
					required: [],
				},
				focusTimeProperties: {
					type: 'object',
					description: 'Focus time event data.',
					properties: {
						autoDeclineMode: {
							type: 'string',
							description:
								'Whether to decline meeting invitations which overlap the event.',
						},
						declineMessage: {
							type: 'string',
							description: 'Custom message to include in the declined response.',
						},
						chatStatus: {
							type: 'string',
							description: 'The chat status during focus time.',
						},
					},
					required: [],
				},
				workingLocationProperties: {
					type: 'object',
					description: 'Working location event data.',
					properties: {
						type: {
							type: 'string',
							description:
								'Type of the working location: homeOffice, customLocation, or officeLocation.',
						},
						homeOffice: {
							type: 'string',
							description: 'If present, indicates the user is working from home.',
						},
						customLocation: {
							type: 'object',
							description: 'Custom working location info.',
							properties: {
								label: {
									type: 'string',
									description:
										'An optional extra label for additional information.',
								},
							},
							required: [],
						},
						officeLocation: {
							type: 'object',
							description: 'Office location info.',
							properties: {
								buildingId: {
									type: 'string',
									description: 'The building identifier.',
								},
								floorId: { type: 'string', description: 'The floor identifier.' },
								floorSectionId: {
									type: 'string',
									description: 'The floor section identifier.',
								},
								deskId: { type: 'string', description: 'The desk identifier.' },
								label: {
									type: 'string',
									description: 'The label of the office location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				birthdayProperties: {
					type: 'object',
					description: 'Birthday event data.',
					properties: {
						contact: {
							type: 'string',
							description:
								'Resource name of the contact this birthday event is linked to.',
						},
						type: { type: 'string', description: 'Type of the birthday event.' },
						customTypeName: {
							type: 'string',
							description: 'The custom type name for the birthday event.',
						},
					},
					required: [],
				},
				extendedProperties: {
					type: 'object',
					description: 'Extended properties of the event.',
					properties: {
						private: {
							type: 'object',
							description: 'Properties visible only to the creator of the event.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						shared: {
							type: 'object',
							description: 'Properties visible to all attendees.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				gadget: {
					type: 'object',
					description: 'A gadget that extends this event (deprecated).',
					properties: {
						type: { type: 'string', description: "The gadget's type." },
						link: { type: 'string', description: "The gadget's URL." },
						iconLink: { type: 'string', description: "The gadget's icon URL." },
						width: { type: 'number', description: "The gadget's width in pixels." },
						height: { type: 'number', description: "The gadget's height in pixels." },
						display: { type: 'string', description: "The gadget's display mode." },
						preferences: {
							type: 'object',
							description: 'Gadget preferences as key-value pairs.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
