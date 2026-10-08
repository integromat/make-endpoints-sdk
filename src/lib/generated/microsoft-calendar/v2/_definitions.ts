// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Microsoft Graph API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://graph.microsoft.com/`. Provide the remaining path in the URL parameter\n(e.g. `v1.0/me/calendars`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Microsoft Graph API reference](https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) for available\nendpoints, required parameters, and response schemas.',
		accounts: { azure: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://graph.microsoft.com/`. For example, `v1.0/me/calendars`.',
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
						'The HTTP request body. This input is ignored if the HTTP request method is `GET`.',
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
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'createCalendar',
		label: 'Create a calendar',
		description: 'Creates a new calendar for the signed-in user.',
		context:
			"---\nname: createCalendar\ndescription: Creates a new calendar for the signed-in user.\n---\n\nCreates a new [calendar](https://learn.microsoft.com/en-us/graph/api/resources/calendar)\nin the signed-in user's default calendar group.\n\nAPI reference: [Create calendar](https://learn.microsoft.com/en-us/graph/api/user-post-calendars).",
		accounts: { azure: { scope: ['Calendars.ReadWrite'] } },
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
				name: { type: 'string', description: 'The name of the new calendar.' },
				color: {
					type: 'string',
					description:
						'Specifies the color theme used to distinguish the calendar from other calendars in a UI.',
					default: '',
					enum: [
						'',
						'auto',
						'lightBlue',
						'lightGreen',
						'lightOrange',
						'lightGray',
						'lightYellow',
						'lightTeal',
						'lightPink',
						'lightBrown',
						'lightRed',
						'maxColor',
					],
				},
				isDefaultCalendar: {
					type: 'boolean',
					description:
						"True if this calendar should be the user's default calendar, false otherwise.",
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: "The calendar's unique identifier. Read-only." },
				name: { type: 'string', description: 'The calendar name.' },
				color: {
					type: 'string',
					description:
						'Specifies the color theme used to distinguish the calendar from other calendars in a UI.',
					default: '',
					enum: [
						'',
						'auto',
						'lightBlue',
						'lightGreen',
						'lightOrange',
						'lightGray',
						'lightYellow',
						'lightTeal',
						'lightPink',
						'lightBrown',
						'lightRed',
						'maxColor',
					],
				},
				hexColor: {
					type: 'string',
					description:
						'The calendar color expressed as a hex color code. Empty if the user has never explicitly set a color. Read-only.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the calendar object. Changes every time the calendar is changed. Read-only.',
				},
				isDefaultCalendar: {
					type: 'boolean',
					description:
						'True if this is the default calendar where new events are created by default, false otherwise.',
				},
				isRemovable: {
					type: 'boolean',
					description:
						'Indicates whether this user calendar can be deleted from the user mailbox.',
				},
				isTallyingResponses: {
					type: 'boolean',
					description:
						"Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from a user's primary calendar support tracking.",
				},
				canShare: {
					type: 'boolean',
					description:
						'True if the user has permission to share the calendar, false otherwise. Only the creator of the calendar can share it.',
				},
				canViewPrivateItems: {
					type: 'boolean',
					description:
						'True if the user can read calendar items marked private, false otherwise.',
				},
				canEdit: {
					type: 'boolean',
					description: 'True if the user can write to the calendar, false otherwise.',
				},
				allowedOnlineMeetingProviders: {
					type: 'string',
					description:
						'The online meeting service providers that can be used to create online meetings in this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				defaultOnlineMeetingProvider: {
					type: 'string',
					description:
						'The default online meeting provider for meetings sent from this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				owner: {
					type: 'object',
					description:
						'The user who created or added the calendar, or the person who shared the calendar with the current user.',
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the calendar owner.',
						},
						address: {
							type: 'string',
							description: 'The email address of the calendar owner.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'createEvent',
		label: 'Create an event',
		description: "Creates a new event in the signed-in user's default or specified calendar.",
		context:
			"---\nname: createEvent\ndescription: Creates a new event in the signed-in user's default or specified calendar.\n---\n\nCreates a new [event](https://learn.microsoft.com/en-us/graph/api/resources/event)\nin the user's default calendar, or a specific calendar (optionally within a calendar\ngroup) via `calendar`/`calendarGroup`.\n\n`start`/`end` date/time values are interpreted in the time zone given alongside them —\nset both `dateTime` and `timeZone` together. To enable an online meeting, set\n`isOnlineMeeting: true` together with `onlineMeetingProvider`.\n\nAPI reference: [Create event](https://learn.microsoft.com/en-us/graph/api/user-post-events).",
		accounts: { azure: { scope: ['Calendars.ReadWrite'] } },
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
				calendarGroup: {
					type: 'string',
					description:
						"The unique identifier of a calendar group. **Ignored unless `calendar` is also provided** — Microsoft Graph has no events collection scoped to a calendar group alone; supplying only this field silently falls back to creating the event in the user's default calendar.",
				},
				calendar: {
					type: 'string',
					description:
						"The unique identifier of the calendar to create the event in. If left empty, the event is created in the user's default calendar.",
				},
				subject: { type: 'string', description: "The text of the event's subject line." },
				start: {
					type: 'object',
					description: 'The start date, time, and time zone of the event.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'The local start date and time **without** a time zone offset, for example `2017-08-29T04:00:00`. Interpreted in the time zone given below.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone the date/time above is expressed in, for example `Pacific Standard Time`. See [supported time zones](https://learn.microsoft.com/en-us/graph/api/resources/datetimetimezone).',
						},
					},
					required: ['dateTime', 'timeZone'],
				},
				end: {
					type: 'object',
					description: 'The date, time, and time zone that the event ends.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'The local end date and time **without** a time zone offset, for example `2017-08-29T05:00:00`. Interpreted in the time zone given below.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone the date/time above is expressed in, for example `Pacific Standard Time`. See [supported time zones](https://learn.microsoft.com/en-us/graph/api/resources/datetimetimezone).',
						},
					},
					required: ['dateTime', 'timeZone'],
				},
				body: {
					type: 'object',
					description: 'The body of the event, in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The format of the body content.',
							default: '',
							enum: ['', 'text', 'html'],
						},
						content: {
							type: 'string',
							description:
								'The content of the event body, in the format specified by content type.',
						},
					},
					required: [],
				},
				location: {
					type: 'object',
					description: 'The location of the event.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The name associated with the location.',
						},
						locationEmailAddress: {
							type: 'string',
							description: 'The optional email address of the location.',
						},
						locationUri: {
							type: 'string',
							description: 'An optional URI representing the location.',
						},
						address: {
							type: 'object',
							description: 'The street address of the location.',
							properties: {
								street: {
									type: 'string',
									description: 'The street name portion of the address.',
								},
								city: {
									type: 'string',
									description: 'The city name portion of the address.',
								},
								state: {
									type: 'string',
									description:
										'The state, province, or region name portion of the address.',
								},
								countryOrRegion: {
									type: 'string',
									description:
										'The country or region name portion of the address.',
								},
								postalCode: {
									type: 'string',
									description: 'The postal code portion of the address.',
								},
							},
							required: [],
						},
						coordinates: {
							type: 'object',
							description:
								'The geographic coordinates and elevation of the location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the location.',
								},
								accuracy: {
									type: 'number',
									description:
										'The accuracy, in meters, of the latitude and longitude.',
								},
								altitude: {
									type: 'number',
									description: 'The altitude of the location.',
								},
								altitudeAccuracy: {
									type: 'number',
									description: 'The accuracy, in meters, of the altitude.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				attendees: {
					type: 'array',
					description: 'The collection of attendees for the event.',
					items: {
						type: 'object',
						description: 'An attendee to invite to the event.',
						properties: {
							emailAddress: {
								type: 'object',
								description: 'The name and SMTP address of the attendee.',
								properties: {
									address: {
										type: 'string',
										description: 'The email address of the attendee.',
									},
									name: {
										type: 'string',
										description: 'The display name of the attendee.',
									},
								},
								required: ['address'],
							},
							type: {
								type: 'string',
								description: 'The attendee type.',
								default: '',
								enum: ['', 'required', 'optional', 'resource'],
							},
						},
						required: [],
					},
				},
				recurrence: {
					type: 'object',
					description:
						'The recurrence pattern for the event, to create it as part of a recurring series. Omit for a single, non-recurring event.',
					properties: {
						pattern: {
							type: 'object',
							description: 'Describes the frequency of the recurring event.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence pattern type.',
									default: '',
									enum: [
										'',
										'daily',
										'weekly',
										'absoluteMonthly',
										'relativeMonthly',
										'absoluteYearly',
										'relativeYearly',
									],
								},
								interval: {
									type: 'number',
									description:
										'The number of units between occurrences, where units are determined by the recurrence type.',
								},
								month: {
									type: 'number',
									description:
										'The month in which the event occurs, for yearly patterns.',
								},
								dayOfMonth: {
									type: 'number',
									description:
										'The day of the month on which the event occurs, for monthly and yearly patterns.',
								},
								daysOfWeek: {
									type: 'string',
									description:
										'The days of the week on which the event occurs, for weekly and monthly patterns.',
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
								firstDayOfWeek: {
									type: 'string',
									description:
										'The first day of the week, for weekly and monthly patterns.',
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
								index: {
									type: 'string',
									description:
										'Specifies which instance of the days of week, for relative monthly/yearly patterns.',
									default: '',
									enum: ['', 'first', 'second', 'third', 'fourth', 'last'],
								},
							},
							required: [],
						},
						range: {
							type: 'object',
							description:
								'Describes the range of dates over which the recurrence pattern repeats.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence range type.',
									default: '',
									enum: ['', 'endDate', 'noEnd', 'numbered'],
								},
								startDate: {
									type: 'string',
									description:
										'The date to start applying the recurrence pattern.',
								},
								endDate: {
									type: 'string',
									description:
										'The date to stop applying the recurrence pattern, for an end-date range.',
								},
								recurrenceTimeZone: {
									type: 'string',
									description:
										'Time zone used for the start/end dates of the recurrence range.',
								},
								numberOfOccurrences: {
									type: 'number',
									description: 'The number of occurrences, for a numbered range.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				categories: {
					type: 'array',
					description:
						'The categories to associate with the event. Each category must correspond to the display name of an Outlook category defined for the user.',
					items: {
						type: 'string',
						description: 'The display name of an Outlook category.',
					},
				},
				importance: {
					type: 'string',
					description: 'The importance of the event.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				sensitivity: {
					type: 'string',
					description: 'The sensitivity of the event.',
					default: '',
					enum: ['', 'normal', 'personal', 'private', 'confidential'],
				},
				showAs: {
					type: 'string',
					description: 'The status to show for the event.',
					default: '',
					enum: ['', 'free', 'tentative', 'busy', 'oof', 'workingElsewhere', 'unknown'],
				},
				isAllDay: {
					type: 'boolean',
					description:
						'Set to true if the event lasts all day. Start and end times must then be midnight and in the same time zone.',
				},
				isReminderOn: {
					type: 'boolean',
					description: 'Set to true to alert the user before the event starts.',
				},
				reminderMinutesBeforeStart: {
					type: 'number',
					description:
						'The number of minutes before the event start time that the reminder alert occurs. Used when reminder is on.',
				},
				responseRequested: {
					type: 'boolean',
					description:
						'Whether the organizer would like an invitee to send a response to the event. Default is true.',
				},
				allowNewTimeProposals: {
					type: 'boolean',
					description:
						'Whether the meeting organizer allows invitees to propose a new time when responding. Default is true.',
				},
				hideAttendees: {
					type: 'boolean',
					description:
						'When set to true, each attendee only sees themselves in the meeting request and meeting tracking list. Default is false.',
				},
				isOnlineMeeting: {
					type: 'boolean',
					description:
						'Set to true to have Microsoft Graph create online meeting details for this event.',
				},
				onlineMeetingProvider: {
					type: 'string',
					description:
						'The online meeting service provider to use, required when is online meeting is true.',
					default: '',
					enum: ['', 'teamsForBusiness', 'skypeForBusiness', 'skypeForConsumer'],
				},
				transactionId: {
					type: 'string',
					description:
						"A custom identifier used by the client to avoid creating duplicate events on retries. Can't be changed after the event is created.",
				},
			},
			required: ['subject', 'start', 'end'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Unique identifier for the event. Case-sensitive. Read-only.',
				},
				iCalUId: {
					type: 'string',
					description: 'A unique identifier for an event across calendars. Read-only.',
				},
				subject: { type: 'string', description: "The text of the event's subject line." },
				bodyPreview: {
					type: 'string',
					description:
						'The preview of the message associated with the event, in text format.',
				},
				body: {
					type: 'object',
					description: 'The body of the message associated with the event.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The format of the body content.',
							default: '',
							enum: ['', 'text', 'html'],
						},
						content: { type: 'string', description: 'The content of the event body.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the event.',
					items: {
						type: 'string',
						description: 'The display name of an Outlook category.',
					},
				},
				changeKey: {
					type: 'string',
					description: 'Identifies the version of the event object.',
				},
				createdDateTime: {
					type: 'string',
					description: 'The date and time the event was created, in UTC.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the event was last modified, in UTC.',
				},
				start: {
					type: 'object',
					description: 'The start date, time, and time zone of the event.',
					properties: {
						dateTime: { type: 'string', description: 'A date and time value.' },
						timeZone: {
							type: 'string',
							description: 'The time zone of the date/time value.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description: 'The date, time, and time zone that the event ends.',
					properties: {
						dateTime: { type: 'string', description: 'A date and time value.' },
						timeZone: {
							type: 'string',
							description: 'The time zone of the date/time value.',
						},
					},
					required: [],
				},
				originalStartTimeZone: {
					type: 'string',
					description: 'The start time zone that was set when the event was created.',
				},
				originalEndTimeZone: {
					type: 'string',
					description: 'The end time zone that was set when the event was created.',
				},
				isAllDay: { type: 'boolean', description: 'True if the event lasts all day.' },
				isCancelled: {
					type: 'boolean',
					description: 'True if the event has been canceled.',
				},
				isDraft: {
					type: 'boolean',
					description:
						"True if the user has updated the meeting in Outlook but hasn't sent the updates to attendees.",
				},
				isOrganizer: {
					type: 'boolean',
					description: 'True if the calendar owner is the organizer of the event.',
				},
				isReminderOn: {
					type: 'boolean',
					description: 'True if an alert is set to remind the user of the event.',
				},
				reminderMinutesBeforeStart: {
					type: 'number',
					description:
						'The number of minutes before the event start time that the reminder alert occurs.',
				},
				hasAttachments: {
					type: 'boolean',
					description: 'True if the event has attachments.',
				},
				hideAttendees: {
					type: 'boolean',
					description:
						'When true, each attendee only sees themselves in the meeting request and meeting tracking list.',
				},
				importance: {
					type: 'string',
					description: 'The importance of the event.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				sensitivity: {
					type: 'string',
					description: 'The sensitivity of the event.',
					default: '',
					enum: ['', 'normal', 'personal', 'private', 'confidential'],
				},
				showAs: {
					type: 'string',
					description: 'The status to show for the event.',
					default: '',
					enum: ['', 'free', 'tentative', 'busy', 'oof', 'workingElsewhere', 'unknown'],
				},
				type: {
					type: 'string',
					description: 'The event type. Read-only.',
					default: '',
					enum: ['', 'singleInstance', 'occurrence', 'exception', 'seriesMaster'],
				},
				seriesMasterId: {
					type: 'string',
					description:
						'The ID for the recurring series master item, if this event is part of a recurring series.',
				},
				recurrence: {
					type: 'object',
					description:
						"The recurrence pattern for the event, if it's part of a recurring series.",
					properties: {
						pattern: {
							type: 'object',
							description: 'Describes the frequency of the recurring event.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence pattern type.',
									default: '',
									enum: [
										'',
										'daily',
										'weekly',
										'absoluteMonthly',
										'relativeMonthly',
										'absoluteYearly',
										'relativeYearly',
									],
								},
								interval: {
									type: 'number',
									description: 'The number of units between occurrences.',
								},
								month: {
									type: 'number',
									description:
										'The month in which the event occurs, for yearly patterns.',
								},
								dayOfMonth: {
									type: 'number',
									description: 'The day of the month on which the event occurs.',
								},
								daysOfWeek: {
									type: 'string',
									description: 'The days of the week on which the event occurs.',
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
								firstDayOfWeek: {
									type: 'string',
									description: 'The first day of the week.',
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
								index: {
									type: 'string',
									description: 'Specifies which instance of the days of week.',
									default: '',
									enum: ['', 'first', 'second', 'third', 'fourth', 'last'],
								},
							},
							required: [],
						},
						range: {
							type: 'object',
							description:
								'Describes the range of dates over which the recurrence pattern repeats.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence range type.',
									default: '',
									enum: ['', 'endDate', 'noEnd', 'numbered'],
								},
								startDate: {
									type: 'string',
									description:
										'The date to start applying the recurrence pattern.',
								},
								endDate: {
									type: 'string',
									description:
										'The date to stop applying the recurrence pattern.',
								},
								recurrenceTimeZone: {
									type: 'string',
									description:
										'Time zone used for the start/end dates of the recurrence range.',
								},
								numberOfOccurrences: {
									type: 'number',
									description: 'The number of occurrences, for a numbered range.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				location: {
					type: 'object',
					description: 'The location of the event.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The name associated with the location.',
						},
						locationEmailAddress: {
							type: 'string',
							description: 'The optional email address of the location.',
						},
						locationUri: {
							type: 'string',
							description: 'An optional URI representing the location.',
						},
						locationType: {
							type: 'string',
							description: 'The type of location. Read-only.',
							default: '',
							enum: [
								'',
								'default',
								'conferenceRoom',
								'homeAddress',
								'businessAddress',
								'geoCoordinates',
								'streetAddress',
								'hotel',
								'restaurant',
								'localBusiness',
								'postalAddress',
							],
						},
						uniqueId: { type: 'string', description: 'For internal use only.' },
						uniqueIdType: { type: 'string', description: 'For internal use only.' },
						address: {
							type: 'object',
							description: 'The street address of the location.',
							properties: {
								street: {
									type: 'string',
									description: 'The street name portion of the address.',
								},
								city: {
									type: 'string',
									description: 'The city name portion of the address.',
								},
								state: {
									type: 'string',
									description:
										'The state, province, or region name portion of the address.',
								},
								countryOrRegion: {
									type: 'string',
									description:
										'The country or region name portion of the address.',
								},
								postalCode: {
									type: 'string',
									description: 'The postal code portion of the address.',
								},
							},
							required: [],
						},
						coordinates: {
							type: 'object',
							description:
								'The geographic coordinates and elevation of the location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the location.',
								},
								accuracy: {
									type: 'number',
									description:
										'The accuracy, in meters, of the latitude and longitude.',
								},
								altitude: {
									type: 'number',
									description: 'The altitude of the location.',
								},
								altitudeAccuracy: {
									type: 'number',
									description: 'The accuracy, in meters, of the altitude.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				locations: {
					type: 'array',
					description: 'The locations where the event is held or attended from.',
					items: {
						type: 'object',
						description: 'A location where the event is held or attended from.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The name associated with the location.',
							},
							locationEmailAddress: {
								type: 'string',
								description: 'The optional email address of the location.',
							},
							locationUri: {
								type: 'string',
								description: 'An optional URI representing the location.',
							},
							locationType: {
								type: 'string',
								description: 'The type of location. Read-only.',
								default: '',
								enum: [
									'',
									'default',
									'conferenceRoom',
									'homeAddress',
									'businessAddress',
									'geoCoordinates',
									'streetAddress',
									'hotel',
									'restaurant',
									'localBusiness',
									'postalAddress',
								],
							},
							uniqueId: { type: 'string', description: 'For internal use only.' },
							uniqueIdType: { type: 'string', description: 'For internal use only.' },
							address: {
								type: 'object',
								description: 'The street address of the location.',
								properties: {
									street: {
										type: 'string',
										description: 'The street name portion of the address.',
									},
									city: {
										type: 'string',
										description: 'The city name portion of the address.',
									},
									state: {
										type: 'string',
										description:
											'The state, province, or region name portion of the address.',
									},
									countryOrRegion: {
										type: 'string',
										description:
											'The country or region name portion of the address.',
									},
									postalCode: {
										type: 'string',
										description: 'The postal code portion of the address.',
									},
								},
								required: [],
							},
							coordinates: {
								type: 'object',
								description:
									'The geographic coordinates and elevation of the location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the location.',
									},
									accuracy: {
										type: 'number',
										description:
											'The accuracy, in meters, of the latitude and longitude.',
									},
									altitude: {
										type: 'number',
										description: 'The altitude of the location.',
									},
									altitudeAccuracy: {
										type: 'number',
										description: 'The accuracy, in meters, of the altitude.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				attendees: {
					type: 'array',
					description: 'The collection of attendees for the event.',
					items: {
						type: 'object',
						description: 'An attendee of the event.',
						properties: {
							type: {
								type: 'string',
								description: 'The attendee type.',
								default: '',
								enum: ['', 'required', 'optional', 'resource'],
							},
							emailAddress: {
								type: 'object',
								description: 'The name and SMTP address of the attendee.',
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the attendee.',
									},
									address: {
										type: 'string',
										description: 'The email address of the attendee.',
									},
								},
								required: [],
							},
							status: {
								type: 'object',
								description: "The attendee's response for the event.",
								properties: {
									response: {
										type: 'string',
										description: 'The response type.',
										default: '',
										enum: [
											'',
											'none',
											'organizer',
											'tentativelyAccepted',
											'accepted',
											'declined',
											'notResponded',
										],
									},
									time: {
										type: 'string',
										description: 'The date and time the response was returned.',
									},
								},
								required: [],
							},
							proposedNewTime: {
								type: 'object',
								description: 'An alternate date/time proposed by the attendee.',
								properties: {
									start: {
										type: 'object',
										description:
											'The proposed start date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed start date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed start.',
											},
										},
										required: [],
									},
									end: {
										type: 'object',
										description: 'The proposed end date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed end date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed end.',
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
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The name and SMTP address of the organizer.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the organizer.',
								},
								address: {
									type: 'string',
									description: 'The email address of the organizer.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				responseStatus: {
					type: 'object',
					description:
						'The type of response the calendar owner sent in response to the event.',
					properties: {
						response: {
							type: 'string',
							description: 'The response type.',
							default: '',
							enum: [
								'',
								'none',
								'organizer',
								'tentativelyAccepted',
								'accepted',
								'declined',
								'notResponded',
							],
						},
						time: {
							type: 'string',
							description: 'The date and time the response was returned.',
						},
					},
					required: [],
				},
				responseRequested: {
					type: 'boolean',
					description:
						'Whether the organizer would like an invitee to send a response to the event.',
				},
				allowNewTimeProposals: {
					type: 'boolean',
					description:
						'Whether the meeting organizer allows invitees to propose a new time when responding.',
				},
				isOnlineMeeting: {
					type: 'boolean',
					description: 'True if this event has online meeting information.',
				},
				onlineMeetingProvider: {
					type: 'string',
					description: 'The online meeting service provider.',
					default: '',
					enum: [
						'',
						'unknown',
						'teamsForBusiness',
						'skypeForBusiness',
						'skypeForConsumer',
					],
				},
				onlineMeeting: {
					type: 'object',
					description: 'Details for an attendee to join the meeting online. Read-only.',
					properties: {
						joinUrl: {
							type: 'string',
							description: 'The URL used to join the online meeting.',
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						tollNumber: {
							type: 'string',
							description: 'The toll number used to dial in to the meeting.',
						},
						tollFreeNumbers: {
							type: 'array',
							description: 'The toll-free numbers used to dial in to the meeting.',
							items: { type: 'string', description: 'A toll-free dial-in number.' },
						},
						quickDial: {
							type: 'string',
							description:
								'The pre-formatted quick-dial number for dialing in to the meeting.',
						},
						joinLanguage: {
							type: 'string',
							description:
								'The language in which the join instructions are presented.',
						},
					},
					required: [],
				},
				onlineMeetingUrl: {
					type: 'string',
					description:
						'A URL for an online meeting. Read-only. Deprecated by Microsoft in favor of `onlineMeeting.joinUrl`.',
				},
				webLink: {
					type: 'string',
					description: 'The URL to open the event in Outlook on the web.',
				},
				transactionId: {
					type: 'string',
					description:
						'A custom identifier specified by the client that created the event.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'deleteCalendar',
		label: 'Delete a calendar',
		description: 'Deletes a calendar other than the default calendar.',
		context:
			"---\nname: deleteCalendar\ndescription: Deletes a calendar other than the default calendar.\n---\n\nDeletes a [calendar](https://learn.microsoft.com/en-us/graph/api/resources/calendar)\nother than the user's default calendar. This is irreversible — all events in the\ncalendar are deleted along with it. Returns no content on success (`204`).\n\nAPI reference: [Delete calendar](https://learn.microsoft.com/en-us/graph/api/calendar-delete).",
		accounts: { azure: { scope: ['Calendars.ReadWrite'] } },
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
				calendar: {
					type: 'string',
					description:
						'The unique identifier of the calendar to delete. The default calendar cannot be deleted.',
				},
			},
			required: ['calendar'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'deleteEvent',
		label: 'Delete an event',
		description: 'Deletes an event from its calendar.',
		context:
			'---\nname: deleteEvent\ndescription: Deletes an event from its calendar.\n---\n\nRemoves the specified [event](https://learn.microsoft.com/en-us/graph/api/resources/event)\nfrom its calendar. This is irreversible. If the event is a meeting the signed-in user\norganizes, deleting it sends a cancellation message to the attendees. Returns no\ncontent on success (`204`).\n\nAPI reference: [Delete event](https://learn.microsoft.com/en-us/graph/api/event-delete).',
		accounts: { azure: { scope: ['Calendars.ReadWrite'] } },
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
				event: {
					type: 'string',
					description: 'The unique identifier of the event to delete.',
				},
			},
			required: ['event'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'getCalendar',
		label: 'Get a calendar',
		description: 'Returns the properties of a calendar.',
		context:
			'---\nname: getCalendar\ndescription: Returns the properties of a calendar.\n---\n\nRetrieves a single [calendar](https://learn.microsoft.com/en-us/graph/api/resources/calendar)\nbelonging to the signed-in user, identified by its `calendar` ID.\n\nUse `listCalendars` to find the ID of a calendar before calling this endpoint.\n\nAPI reference: [Get calendar](https://learn.microsoft.com/en-us/graph/api/calendar-get).',
		accounts: { azure: { scope: ['Calendars.Read'] } },
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
				calendar: {
					type: 'string',
					description: 'The unique identifier of the calendar to retrieve.',
				},
			},
			required: ['calendar'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: "The calendar's unique identifier. Read-only." },
				name: { type: 'string', description: 'The calendar name.' },
				color: {
					type: 'string',
					description:
						'Specifies the color theme used to distinguish the calendar from other calendars in a UI.',
					default: '',
					enum: [
						'',
						'auto',
						'lightBlue',
						'lightGreen',
						'lightOrange',
						'lightGray',
						'lightYellow',
						'lightTeal',
						'lightPink',
						'lightBrown',
						'lightRed',
						'maxColor',
					],
				},
				hexColor: {
					type: 'string',
					description:
						'The calendar color expressed as a hex color code. Empty if the user has never explicitly set a color. Read-only.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the calendar object. Changes every time the calendar is changed. Read-only.',
				},
				isDefaultCalendar: {
					type: 'boolean',
					description:
						'True if this is the default calendar where new events are created by default, false otherwise.',
				},
				isRemovable: {
					type: 'boolean',
					description:
						'Indicates whether this user calendar can be deleted from the user mailbox.',
				},
				isTallyingResponses: {
					type: 'boolean',
					description:
						"Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from a user's primary calendar support tracking.",
				},
				canShare: {
					type: 'boolean',
					description:
						'True if the user has permission to share the calendar, false otherwise. Only the creator of the calendar can share it.',
				},
				canViewPrivateItems: {
					type: 'boolean',
					description:
						'True if the user can read calendar items marked private, false otherwise.',
				},
				canEdit: {
					type: 'boolean',
					description: 'True if the user can write to the calendar, false otherwise.',
				},
				allowedOnlineMeetingProviders: {
					type: 'string',
					description:
						'The online meeting service providers that can be used to create online meetings in this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				defaultOnlineMeetingProvider: {
					type: 'string',
					description:
						'The default online meeting provider for meetings sent from this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				owner: {
					type: 'object',
					description:
						'The user who created or added the calendar, or the person who shared the calendar with the current user.',
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the calendar owner.',
						},
						address: {
							type: 'string',
							description: 'The email address of the calendar owner.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'getEvent',
		label: 'Get an event',
		description: 'Returns the properties of an event.',
		context:
			"---\nname: getEvent\ndescription: Returns the properties of an event.\n---\n\nRetrieves a single [event](https://learn.microsoft.com/en-us/graph/api/resources/event)\nin the signed-in user's mailbox, identified by its `event` ID.\n\nUse `listEvents` to find the ID of an event before calling this endpoint. To retrieve\nproperties that require an explicit `$select` (such as `cancelledOccurrences`), pass\nthem in `select`.\n\nAPI reference: [Get event](https://learn.microsoft.com/en-us/graph/api/event-get).",
		accounts: { azure: { scope: ['Calendars.Read'] } },
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
				event: {
					type: 'string',
					description: 'The unique identifier of the event to retrieve.',
				},
				select: {
					type: 'array',
					description:
						'The event properties to include in the response. If left empty, the default set of properties is returned.',
					items: {
						type: 'string',
						description:
							'The name of an event property, for example `subject` or `attendees`.',
					},
				},
			},
			required: ['event'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Unique identifier for the event. Case-sensitive. Read-only.',
				},
				iCalUId: {
					type: 'string',
					description:
						'A unique identifier for an event across calendars. Different for each occurrence in a recurring series. Read-only.',
				},
				subject: { type: 'string', description: "The text of the event's subject line." },
				bodyPreview: {
					type: 'string',
					description:
						'The preview of the message associated with the event, in text format.',
				},
				body: {
					type: 'object',
					description:
						'The body of the message associated with the event. Can be in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The format of the body content.',
							default: '',
							enum: ['', 'text', 'html'],
						},
						content: {
							type: 'string',
							description:
								'The content of the event body, in the format specified by content type.',
						},
					},
					required: [],
				},
				categories: {
					type: 'array',
					description:
						'The categories associated with the event. Each category corresponds to the display name of an Outlook category defined for the user.',
					items: {
						type: 'string',
						description: 'The display name of an Outlook category.',
					},
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the event object. Changes every time the event is changed.',
				},
				createdDateTime: {
					type: 'string',
					description: 'The date and time the event was created, in UTC.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the event was last modified, in UTC.',
				},
				start: {
					type: 'object',
					description:
						'The start date, time, and time zone of the event. By default, the start time is in UTC.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'A date and time value, for example `2017-08-29T04:00:00.0000000`.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the date/time value, for example `Pacific Standard Time`.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description:
						'The date, time, and time zone that the event ends. By default, the end time is in UTC.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'A date and time value, for example `2017-08-29T05:00:00.0000000`.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the date/time value, for example `Pacific Standard Time`.',
						},
					},
					required: [],
				},
				originalStartTimeZone: {
					type: 'string',
					description:
						'The start time zone that was set when the event was created. `tzone://Microsoft/Custom` indicates a legacy custom time zone set in desktop Outlook.',
				},
				originalEndTimeZone: {
					type: 'string',
					description:
						'The end time zone that was set when the event was created. `tzone://Microsoft/Custom` indicates a legacy custom time zone set in desktop Outlook.',
				},
				originalStart: {
					type: 'string',
					description:
						"The start time of an event when it's initially created as an occurrence or exception in a recurring series. Not returned for single-instance events.",
				},
				isAllDay: {
					type: 'boolean',
					description:
						'True if the event lasts all day. If true, start and end times must be midnight and in the same time zone.',
				},
				isCancelled: {
					type: 'boolean',
					description: 'True if the event has been canceled.',
				},
				isDraft: {
					type: 'boolean',
					description:
						"True if the user has updated the meeting in Outlook but hasn't sent the updates to attendees. False if all changes are sent, or if the event has no attendees.",
				},
				isOrganizer: {
					type: 'boolean',
					description:
						"True if the calendar owner is the organizer of the event, including when a delegate organized it on the owner's behalf.",
				},
				isReminderOn: {
					type: 'boolean',
					description: 'True if an alert is set to remind the user of the event.',
				},
				reminderMinutesBeforeStart: {
					type: 'number',
					description:
						'The number of minutes before the event start time that the reminder alert occurs.',
				},
				hasAttachments: {
					type: 'boolean',
					description: 'True if the event has attachments.',
				},
				hideAttendees: {
					type: 'boolean',
					description:
						'When true, each attendee only sees themselves in the meeting request and meeting tracking list.',
				},
				importance: {
					type: 'string',
					description: 'The importance of the event.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				sensitivity: {
					type: 'string',
					description: 'The sensitivity of the event.',
					default: '',
					enum: ['', 'normal', 'personal', 'private', 'confidential'],
				},
				showAs: {
					type: 'string',
					description: 'The status to show for the event.',
					default: '',
					enum: ['', 'free', 'tentative', 'busy', 'oof', 'workingElsewhere', 'unknown'],
				},
				type: {
					type: 'string',
					description: 'The event type. Read-only.',
					default: '',
					enum: ['', 'singleInstance', 'occurrence', 'exception', 'seriesMaster'],
				},
				seriesMasterId: {
					type: 'string',
					description:
						'The ID for the recurring series master item, if this event is part of a recurring series.',
				},
				recurrence: {
					type: 'object',
					description:
						"The recurrence pattern for the event, if it's part of a recurring series.",
					properties: {
						pattern: {
							type: 'object',
							description: 'Describes the frequency of the recurring event.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence pattern type.',
									default: '',
									enum: [
										'',
										'daily',
										'weekly',
										'absoluteMonthly',
										'relativeMonthly',
										'absoluteYearly',
										'relativeYearly',
									],
								},
								interval: {
									type: 'number',
									description:
										'The number of units between occurrences, where units are determined by the recurrence type.',
								},
								month: {
									type: 'number',
									description:
										'The month in which the event occurs, for yearly patterns. Zero for other patterns.',
								},
								dayOfMonth: {
									type: 'number',
									description:
										'The day of the month on which the event occurs, for monthly and yearly patterns.',
								},
								daysOfWeek: {
									type: 'string',
									description:
										'The days of the week on which the event occurs, for weekly and monthly patterns.',
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
								firstDayOfWeek: {
									type: 'string',
									description:
										'The first day of the week, for weekly and monthly patterns.',
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
								index: {
									type: 'string',
									description:
										'Specifies which instance of the days of week, for relative monthly/yearly patterns.',
									default: '',
									enum: ['', 'first', 'second', 'third', 'fourth', 'last'],
								},
							},
							required: [],
						},
						range: {
							type: 'object',
							description:
								'Describes the range of dates over which the recurrence pattern repeats.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence range type.',
									default: '',
									enum: ['', 'endDate', 'noEnd', 'numbered'],
								},
								startDate: {
									type: 'string',
									description:
										'The date to start applying the recurrence pattern.',
								},
								endDate: {
									type: 'string',
									description:
										'The date to stop applying the recurrence pattern, for an end-date range.',
								},
								recurrenceTimeZone: {
									type: 'string',
									description:
										'Time zone used for the start/end dates of the recurrence range.',
								},
								numberOfOccurrences: {
									type: 'number',
									description: 'The number of occurrences, for a numbered range.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cancelledOccurrences: {
					type: 'array',
					description:
						'The occurrence IDs of canceled instances in a recurring series, if this event is the series master. Requires `select` to retrieve; only returned when getting a series master event by ID.',
					items: {
						type: 'string',
						description: 'The occurrence ID of a canceled instance.',
					},
				},
				location: {
					type: 'object',
					description: 'The location of the event.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The name associated with the location.',
						},
						locationEmailAddress: {
							type: 'string',
							description: 'The optional email address of the location.',
						},
						locationUri: {
							type: 'string',
							description: 'An optional URI representing the location.',
						},
						locationType: {
							type: 'string',
							description: 'The type of location. Read-only.',
							default: '',
							enum: [
								'',
								'default',
								'conferenceRoom',
								'homeAddress',
								'businessAddress',
								'geoCoordinates',
								'streetAddress',
								'hotel',
								'restaurant',
								'localBusiness',
								'postalAddress',
							],
						},
						uniqueId: { type: 'string', description: 'For internal use only.' },
						uniqueIdType: { type: 'string', description: 'For internal use only.' },
						address: {
							type: 'object',
							description: 'The street address of the location.',
							properties: {
								street: {
									type: 'string',
									description: 'The street name portion of the address.',
								},
								city: {
									type: 'string',
									description: 'The city name portion of the address.',
								},
								state: {
									type: 'string',
									description:
										'The state, province, or region name portion of the address.',
								},
								countryOrRegion: {
									type: 'string',
									description:
										'The country or region name portion of the address.',
								},
								postalCode: {
									type: 'string',
									description: 'The postal code portion of the address.',
								},
							},
							required: [],
						},
						coordinates: {
							type: 'object',
							description:
								'The geographic coordinates and elevation of the location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the location.',
								},
								accuracy: {
									type: 'number',
									description:
										'The accuracy, in meters, of the latitude and longitude.',
								},
								altitude: {
									type: 'number',
									description: 'The altitude of the location.',
								},
								altitudeAccuracy: {
									type: 'number',
									description: 'The accuracy, in meters, of the altitude.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				locations: {
					type: 'array',
					description:
						'The locations where the event is held or attended from. Always corresponds with the location field.',
					items: {
						type: 'object',
						description: 'A location where the event is held or attended from.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The name associated with the location.',
							},
							locationEmailAddress: {
								type: 'string',
								description: 'The optional email address of the location.',
							},
							locationUri: {
								type: 'string',
								description: 'An optional URI representing the location.',
							},
							locationType: {
								type: 'string',
								description: 'The type of location. Read-only.',
								default: '',
								enum: [
									'',
									'default',
									'conferenceRoom',
									'homeAddress',
									'businessAddress',
									'geoCoordinates',
									'streetAddress',
									'hotel',
									'restaurant',
									'localBusiness',
									'postalAddress',
								],
							},
							uniqueId: { type: 'string', description: 'For internal use only.' },
							uniqueIdType: { type: 'string', description: 'For internal use only.' },
							address: {
								type: 'object',
								description: 'The street address of the location.',
								properties: {
									street: {
										type: 'string',
										description: 'The street name portion of the address.',
									},
									city: {
										type: 'string',
										description: 'The city name portion of the address.',
									},
									state: {
										type: 'string',
										description:
											'The state, province, or region name portion of the address.',
									},
									countryOrRegion: {
										type: 'string',
										description:
											'The country or region name portion of the address.',
									},
									postalCode: {
										type: 'string',
										description: 'The postal code portion of the address.',
									},
								},
								required: [],
							},
							coordinates: {
								type: 'object',
								description:
									'The geographic coordinates and elevation of the location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the location.',
									},
									accuracy: {
										type: 'number',
										description:
											'The accuracy, in meters, of the latitude and longitude.',
									},
									altitude: {
										type: 'number',
										description: 'The altitude of the location.',
									},
									altitudeAccuracy: {
										type: 'number',
										description: 'The accuracy, in meters, of the altitude.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				attendees: {
					type: 'array',
					description: 'The collection of attendees for the event.',
					items: {
						type: 'object',
						description: 'An attendee of the event.',
						properties: {
							type: {
								type: 'string',
								description: 'The attendee type.',
								default: '',
								enum: ['', 'required', 'optional', 'resource'],
							},
							emailAddress: {
								type: 'object',
								description: 'The name and SMTP address of the attendee.',
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the attendee.',
									},
									address: {
										type: 'string',
										description: 'The email address of the attendee.',
									},
								},
								required: [],
							},
							status: {
								type: 'object',
								description:
									"The attendee's response for the event and the date/time the response was sent.",
								properties: {
									response: {
										type: 'string',
										description: 'The response type.',
										default: '',
										enum: [
											'',
											'none',
											'organizer',
											'tentativelyAccepted',
											'accepted',
											'declined',
											'notResponded',
										],
									},
									time: {
										type: 'string',
										description: 'The date and time the response was returned.',
									},
								},
								required: [],
							},
							proposedNewTime: {
								type: 'object',
								description:
									'An alternate date/time proposed by the attendee for the meeting to start and end, if one was proposed.',
								properties: {
									start: {
										type: 'object',
										description:
											'The proposed start date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed start date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed start.',
											},
										},
										required: [],
									},
									end: {
										type: 'object',
										description: 'The proposed end date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed end date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed end.',
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
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The name and SMTP address of the organizer.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the organizer.',
								},
								address: {
									type: 'string',
									description: 'The email address of the organizer.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				responseStatus: {
					type: 'object',
					description:
						'The type of response the calendar owner sent in response to the event, and when.',
					properties: {
						response: {
							type: 'string',
							description: 'The response type.',
							default: '',
							enum: [
								'',
								'none',
								'organizer',
								'tentativelyAccepted',
								'accepted',
								'declined',
								'notResponded',
							],
						},
						time: {
							type: 'string',
							description: 'The date and time the response was returned.',
						},
					},
					required: [],
				},
				responseRequested: {
					type: 'boolean',
					description:
						'Default is true, meaning the organizer would like an invitee to send a response to the event.',
				},
				allowNewTimeProposals: {
					type: 'boolean',
					description:
						'True if the meeting organizer allows invitees to propose a new time when responding. Default is true.',
				},
				isOnlineMeeting: {
					type: 'boolean',
					description:
						'True if this event has online meeting information. Default is false.',
				},
				onlineMeetingProvider: {
					type: 'string',
					description: 'The online meeting service provider. Default is unknown.',
					default: '',
					enum: [
						'',
						'unknown',
						'teamsForBusiness',
						'skypeForBusiness',
						'skypeForConsumer',
					],
				},
				onlineMeeting: {
					type: 'object',
					description:
						'Details for an attendee to join the meeting online. Read-only; set by the server once online-meeting properties are configured.',
					properties: {
						joinUrl: {
							type: 'string',
							description: 'The URL used to join the online meeting.',
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						tollNumber: {
							type: 'string',
							description: 'The toll number used to dial in to the meeting.',
						},
						tollFreeNumbers: {
							type: 'array',
							description: 'The toll-free numbers used to dial in to the meeting.',
							items: { type: 'string', description: 'A toll-free dial-in number.' },
						},
						quickDial: {
							type: 'string',
							description:
								'The pre-formatted quick-dial number for dialing in to the meeting.',
						},
						joinLanguage: {
							type: 'string',
							description:
								'The language in which the join instructions are presented.',
						},
					},
					required: [],
				},
				onlineMeetingUrl: {
					type: 'string',
					description:
						'A URL for an online meeting, set only when the organizer specified in Outlook that the event is an online meeting. Read-only. Deprecated by Microsoft in favor of `onlineMeeting.joinUrl`.',
				},
				webLink: {
					type: 'string',
					description: 'The URL to open the event in Outlook on the web.',
				},
				transactionId: {
					type: 'string',
					description:
						'A custom identifier specified by a client app to avoid redundant event creation on retries. Only returned if the app set it when creating the event.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'listCalendars',
		label: 'List calendars',
		description: "Returns the signed-in user's calendars.",
		context:
			"---\nname: listCalendars\ndescription: Returns the signed-in user's calendars.\n---\n\nReturns all of the signed-in user's [calendars](https://learn.microsoft.com/en-us/graph/api/resources/calendar),\nor the calendars in a specific calendar group when `calendarGroup` is provided.\n\nResults are paginated automatically by following the Graph `@odata.nextLink`. Use\n`top` to control the page size and `filter`/`orderby`/`select` to narrow the response.\n\nAPI reference: [List calendars](https://learn.microsoft.com/en-us/graph/api/user-list-calendars).",
		accounts: { azure: { scope: ['Calendars.Read'] } },
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
				calendarGroup: {
					type: 'string',
					description:
						"The unique identifier of a calendar group to list calendars from. If left empty, all of the user's calendars are returned.",
				},
				select: {
					type: 'array',
					description:
						'The calendar properties to include in the response. If left empty, all properties are returned.',
					items: {
						type: 'string',
						description:
							'The name of a calendar property, for example `name` or `color`.',
					},
				},
				filter: {
					type: 'string',
					description:
						'An [OData `$filter` expression](https://learn.microsoft.com/en-us/graph/filter-query-parameter) to restrict the calendars returned, for example `isDefaultCalendar eq true`.',
				},
				orderby: {
					type: 'string',
					description:
						'An [OData `$orderby` expression](https://learn.microsoft.com/en-us/graph/query-parameters) used to sort the returned calendars, for example `name asc`.',
				},
				top: {
					type: 'number',
					description:
						'The maximum number of calendars to return per page (OData `$top`). Additional pages are followed automatically.',
				},
				skip: {
					type: 'number',
					description:
						'The number of calendars to skip before returning results (OData `$skip`).',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: "The calendar's unique identifier. Read-only." },
				name: { type: 'string', description: 'The calendar name.' },
				color: {
					type: 'string',
					description:
						'Specifies the color theme used to distinguish the calendar from other calendars in a UI.',
					default: '',
					enum: [
						'',
						'auto',
						'lightBlue',
						'lightGreen',
						'lightOrange',
						'lightGray',
						'lightYellow',
						'lightTeal',
						'lightPink',
						'lightBrown',
						'lightRed',
						'maxColor',
					],
				},
				hexColor: {
					type: 'string',
					description:
						'The calendar color expressed as a hex color code. Empty if the user has never explicitly set a color. Read-only.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the calendar object. Changes every time the calendar is changed. Read-only.',
				},
				isDefaultCalendar: {
					type: 'boolean',
					description:
						'True if this is the default calendar where new events are created by default, false otherwise.',
				},
				isRemovable: {
					type: 'boolean',
					description:
						'Indicates whether this user calendar can be deleted from the user mailbox.',
				},
				isTallyingResponses: {
					type: 'boolean',
					description:
						"Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from a user's primary calendar support tracking.",
				},
				canShare: {
					type: 'boolean',
					description:
						'True if the user has permission to share the calendar, false otherwise. Only the creator of the calendar can share it.',
				},
				canViewPrivateItems: {
					type: 'boolean',
					description:
						'True if the user can read calendar items marked private, false otherwise.',
				},
				canEdit: {
					type: 'boolean',
					description: 'True if the user can write to the calendar, false otherwise.',
				},
				allowedOnlineMeetingProviders: {
					type: 'string',
					description:
						'The online meeting service providers that can be used to create online meetings in this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				defaultOnlineMeetingProvider: {
					type: 'string',
					description:
						'The default online meeting provider for meetings sent from this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				owner: {
					type: 'object',
					description:
						'The user who created or added the calendar, or the person who shared the calendar with the current user.',
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the calendar owner.',
						},
						address: {
							type: 'string',
							description: 'The email address of the calendar owner.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'listEvents',
		label: 'List events',
		description:
			"Returns a list of events in the signed-in user's mailbox or a specific calendar.",
		context:
			"---\nname: listEvents\ndescription: Returns a list of events in the signed-in user's mailbox or a specific calendar.\n---\n\nReturns [event](https://learn.microsoft.com/en-us/graph/api/resources/event) objects\nfrom the signed-in user's default calendar, or a specific calendar (optionally within\na calendar group) via `calendar`/`calendarGroup`.\n\nUse `filter` and `orderby` to search or sort (for example, to find events created or\nmodified after a given time), and `select` to control which properties are returned.\nThe `recurrence` property can't be used in `filter`. Results are paginated automatically\nby following the Graph `@odata.nextLink`; use `top` to control page size.\n\nAPI reference: [List events](https://learn.microsoft.com/en-us/graph/api/user-list-events).",
		accounts: { azure: { scope: ['Calendars.Read'] } },
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
				calendarGroup: {
					type: 'string',
					description:
						"The unique identifier of a calendar group. **Ignored unless `calendar` is also provided** — Microsoft Graph has no events collection scoped to a calendar group alone; supplying only this field silently falls back to the user's default calendar.",
				},
				calendar: {
					type: 'string',
					description:
						"The unique identifier of the calendar to list events from. If left empty, events from the user's default calendar are returned.",
				},
				select: {
					type: 'array',
					description:
						'The event properties to include in the response. If left empty, the default set of properties is returned.',
					items: {
						type: 'string',
						description:
							'The name of an event property, for example `subject` or `start`.',
					},
				},
				filter: {
					type: 'string',
					description:
						"An [OData `$filter` expression](https://learn.microsoft.com/en-us/graph/filter-query-parameter) to restrict the events returned, for example `importance eq 'high'`. The `recurrence` property can't be filtered on.",
				},
				orderby: {
					type: 'string',
					description:
						'An [OData `$orderby` expression](https://learn.microsoft.com/en-us/graph/query-parameters) used to sort the returned events, for example `createdDateTime desc`.',
				},
				top: {
					type: 'number',
					description:
						'The maximum number of events to return per page (OData `$top`). Additional pages are followed automatically.',
				},
				skip: {
					type: 'number',
					description:
						'The number of events to skip before returning results (OData `$skip`).',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Unique identifier for the event. Case-sensitive. Read-only.',
				},
				iCalUId: {
					type: 'string',
					description:
						'A unique identifier for an event across calendars. Different for each occurrence in a recurring series. Read-only.',
				},
				subject: { type: 'string', description: "The text of the event's subject line." },
				bodyPreview: {
					type: 'string',
					description:
						'The preview of the message associated with the event, in text format.',
				},
				body: {
					type: 'object',
					description:
						'The body of the message associated with the event. Can be in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The format of the body content.',
							default: '',
							enum: ['', 'text', 'html'],
						},
						content: {
							type: 'string',
							description:
								'The content of the event body, in the format specified by content type.',
						},
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the event.',
					items: {
						type: 'string',
						description: 'The display name of an Outlook category.',
					},
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the event object. Changes every time the event is changed.',
				},
				createdDateTime: {
					type: 'string',
					description: 'The date and time the event was created, in UTC.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the event was last modified, in UTC.',
				},
				start: {
					type: 'object',
					description:
						'The start date, time, and time zone of the event. By default, the start time is in UTC.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'A date and time value, for example `2017-08-29T04:00:00.0000000`.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the date/time value, for example `Pacific Standard Time`.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description:
						'The date, time, and time zone that the event ends. By default, the end time is in UTC.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'A date and time value, for example `2017-08-29T05:00:00.0000000`.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the date/time value, for example `Pacific Standard Time`.',
						},
					},
					required: [],
				},
				originalStartTimeZone: {
					type: 'string',
					description: 'The start time zone that was set when the event was created.',
				},
				originalEndTimeZone: {
					type: 'string',
					description: 'The end time zone that was set when the event was created.',
				},
				originalStart: {
					type: 'string',
					description:
						"The start time of an event when it's initially created as an occurrence or exception in a recurring series.",
				},
				isAllDay: { type: 'boolean', description: 'True if the event lasts all day.' },
				isCancelled: {
					type: 'boolean',
					description: 'True if the event has been canceled.',
				},
				isDraft: {
					type: 'boolean',
					description:
						"True if the user has updated the meeting in Outlook but hasn't sent the updates to attendees.",
				},
				isOrganizer: {
					type: 'boolean',
					description: 'True if the calendar owner is the organizer of the event.',
				},
				isReminderOn: {
					type: 'boolean',
					description: 'True if an alert is set to remind the user of the event.',
				},
				reminderMinutesBeforeStart: {
					type: 'number',
					description:
						'The number of minutes before the event start time that the reminder alert occurs.',
				},
				hasAttachments: {
					type: 'boolean',
					description: 'True if the event has attachments.',
				},
				hideAttendees: {
					type: 'boolean',
					description:
						'When true, each attendee only sees themselves in the meeting request and meeting tracking list.',
				},
				importance: {
					type: 'string',
					description: 'The importance of the event.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				sensitivity: {
					type: 'string',
					description: 'The sensitivity of the event.',
					default: '',
					enum: ['', 'normal', 'personal', 'private', 'confidential'],
				},
				showAs: {
					type: 'string',
					description: 'The status to show for the event.',
					default: '',
					enum: ['', 'free', 'tentative', 'busy', 'oof', 'workingElsewhere', 'unknown'],
				},
				type: {
					type: 'string',
					description: 'The event type. Read-only.',
					default: '',
					enum: ['', 'singleInstance', 'occurrence', 'exception', 'seriesMaster'],
				},
				seriesMasterId: {
					type: 'string',
					description:
						'The ID for the recurring series master item, if this event is part of a recurring series.',
				},
				recurrence: {
					type: 'object',
					description:
						"The recurrence pattern for the event, if it's part of a recurring series.",
					properties: {
						pattern: {
							type: 'object',
							description: 'Describes the frequency of the recurring event.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence pattern type.',
									default: '',
									enum: [
										'',
										'daily',
										'weekly',
										'absoluteMonthly',
										'relativeMonthly',
										'absoluteYearly',
										'relativeYearly',
									],
								},
								interval: {
									type: 'number',
									description: 'The number of units between occurrences.',
								},
								month: {
									type: 'number',
									description:
										'The month in which the event occurs, for yearly patterns.',
								},
								dayOfMonth: {
									type: 'number',
									description: 'The day of the month on which the event occurs.',
								},
								daysOfWeek: {
									type: 'string',
									description: 'The days of the week on which the event occurs.',
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
								firstDayOfWeek: {
									type: 'string',
									description: 'The first day of the week.',
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
								index: {
									type: 'string',
									description: 'Specifies which instance of the days of week.',
									default: '',
									enum: ['', 'first', 'second', 'third', 'fourth', 'last'],
								},
							},
							required: [],
						},
						range: {
							type: 'object',
							description:
								'Describes the range of dates over which the recurrence pattern repeats.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence range type.',
									default: '',
									enum: ['', 'endDate', 'noEnd', 'numbered'],
								},
								startDate: {
									type: 'string',
									description:
										'The date to start applying the recurrence pattern.',
								},
								endDate: {
									type: 'string',
									description:
										'The date to stop applying the recurrence pattern.',
								},
								recurrenceTimeZone: {
									type: 'string',
									description:
										'Time zone used for the start/end dates of the recurrence range.',
								},
								numberOfOccurrences: {
									type: 'number',
									description: 'The number of occurrences, for a numbered range.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cancelledOccurrences: {
					type: 'array',
					description:
						'The occurrence IDs of canceled instances in a recurring series. Requires `select` to retrieve.',
					items: {
						type: 'string',
						description: 'The occurrence ID of a canceled instance.',
					},
				},
				location: {
					type: 'object',
					description: 'The location of the event.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The name associated with the location.',
						},
						locationEmailAddress: {
							type: 'string',
							description: 'The optional email address of the location.',
						},
						locationUri: {
							type: 'string',
							description: 'An optional URI representing the location.',
						},
						locationType: {
							type: 'string',
							description: 'The type of location. Read-only.',
							default: '',
							enum: [
								'',
								'default',
								'conferenceRoom',
								'homeAddress',
								'businessAddress',
								'geoCoordinates',
								'streetAddress',
								'hotel',
								'restaurant',
								'localBusiness',
								'postalAddress',
							],
						},
						uniqueId: { type: 'string', description: 'For internal use only.' },
						uniqueIdType: { type: 'string', description: 'For internal use only.' },
						address: {
							type: 'object',
							description: 'The street address of the location.',
							properties: {
								street: {
									type: 'string',
									description: 'The street name portion of the address.',
								},
								city: {
									type: 'string',
									description: 'The city name portion of the address.',
								},
								state: {
									type: 'string',
									description:
										'The state, province, or region name portion of the address.',
								},
								countryOrRegion: {
									type: 'string',
									description:
										'The country or region name portion of the address.',
								},
								postalCode: {
									type: 'string',
									description: 'The postal code portion of the address.',
								},
							},
							required: [],
						},
						coordinates: {
							type: 'object',
							description:
								'The geographic coordinates and elevation of the location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the location.',
								},
								accuracy: {
									type: 'number',
									description:
										'The accuracy, in meters, of the latitude and longitude.',
								},
								altitude: {
									type: 'number',
									description: 'The altitude of the location.',
								},
								altitudeAccuracy: {
									type: 'number',
									description: 'The accuracy, in meters, of the altitude.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				locations: {
					type: 'array',
					description: 'The locations where the event is held or attended from.',
					items: {
						type: 'object',
						description: 'A location where the event is held or attended from.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The name associated with the location.',
							},
							locationEmailAddress: {
								type: 'string',
								description: 'The optional email address of the location.',
							},
							locationUri: {
								type: 'string',
								description: 'An optional URI representing the location.',
							},
							locationType: {
								type: 'string',
								description: 'The type of location. Read-only.',
								default: '',
								enum: [
									'',
									'default',
									'conferenceRoom',
									'homeAddress',
									'businessAddress',
									'geoCoordinates',
									'streetAddress',
									'hotel',
									'restaurant',
									'localBusiness',
									'postalAddress',
								],
							},
							uniqueId: { type: 'string', description: 'For internal use only.' },
							uniqueIdType: { type: 'string', description: 'For internal use only.' },
							address: {
								type: 'object',
								description: 'The street address of the location.',
								properties: {
									street: {
										type: 'string',
										description: 'The street name portion of the address.',
									},
									city: {
										type: 'string',
										description: 'The city name portion of the address.',
									},
									state: {
										type: 'string',
										description:
											'The state, province, or region name portion of the address.',
									},
									countryOrRegion: {
										type: 'string',
										description:
											'The country or region name portion of the address.',
									},
									postalCode: {
										type: 'string',
										description: 'The postal code portion of the address.',
									},
								},
								required: [],
							},
							coordinates: {
								type: 'object',
								description:
									'The geographic coordinates and elevation of the location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the location.',
									},
									accuracy: {
										type: 'number',
										description:
											'The accuracy, in meters, of the latitude and longitude.',
									},
									altitude: {
										type: 'number',
										description: 'The altitude of the location.',
									},
									altitudeAccuracy: {
										type: 'number',
										description: 'The accuracy, in meters, of the altitude.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				attendees: {
					type: 'array',
					description: 'The collection of attendees for the event.',
					items: {
						type: 'object',
						description: 'An attendee of the event.',
						properties: {
							type: {
								type: 'string',
								description: 'The attendee type.',
								default: '',
								enum: ['', 'required', 'optional', 'resource'],
							},
							emailAddress: {
								type: 'object',
								description: 'The name and SMTP address of the attendee.',
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the attendee.',
									},
									address: {
										type: 'string',
										description: 'The email address of the attendee.',
									},
								},
								required: [],
							},
							status: {
								type: 'object',
								description:
									"The attendee's response for the event and the date/time the response was sent.",
								properties: {
									response: {
										type: 'string',
										description: 'The response type.',
										default: '',
										enum: [
											'',
											'none',
											'organizer',
											'tentativelyAccepted',
											'accepted',
											'declined',
											'notResponded',
										],
									},
									time: {
										type: 'string',
										description: 'The date and time the response was returned.',
									},
								},
								required: [],
							},
							proposedNewTime: {
								type: 'object',
								description:
									'An alternate date/time proposed by the attendee for the meeting.',
								properties: {
									start: {
										type: 'object',
										description:
											'The proposed start date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed start date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed start.',
											},
										},
										required: [],
									},
									end: {
										type: 'object',
										description: 'The proposed end date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed end date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed end.',
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
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The name and SMTP address of the organizer.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the organizer.',
								},
								address: {
									type: 'string',
									description: 'The email address of the organizer.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				responseStatus: {
					type: 'object',
					description:
						'The type of response the calendar owner sent in response to the event, and when.',
					properties: {
						response: {
							type: 'string',
							description: 'The response type.',
							default: '',
							enum: [
								'',
								'none',
								'organizer',
								'tentativelyAccepted',
								'accepted',
								'declined',
								'notResponded',
							],
						},
						time: {
							type: 'string',
							description: 'The date and time the response was returned.',
						},
					},
					required: [],
				},
				responseRequested: {
					type: 'boolean',
					description:
						'Default is true, meaning the organizer would like an invitee to send a response to the event.',
				},
				allowNewTimeProposals: {
					type: 'boolean',
					description:
						'True if the meeting organizer allows invitees to propose a new time when responding.',
				},
				isOnlineMeeting: {
					type: 'boolean',
					description: 'True if this event has online meeting information.',
				},
				onlineMeetingProvider: {
					type: 'string',
					description: 'The online meeting service provider.',
					default: '',
					enum: [
						'',
						'unknown',
						'teamsForBusiness',
						'skypeForBusiness',
						'skypeForConsumer',
					],
				},
				onlineMeeting: {
					type: 'object',
					description: 'Details for an attendee to join the meeting online. Read-only.',
					properties: {
						joinUrl: {
							type: 'string',
							description: 'The URL used to join the online meeting.',
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						tollNumber: {
							type: 'string',
							description: 'The toll number used to dial in to the meeting.',
						},
						tollFreeNumbers: {
							type: 'array',
							description: 'The toll-free numbers used to dial in to the meeting.',
							items: { type: 'string', description: 'A toll-free dial-in number.' },
						},
						quickDial: {
							type: 'string',
							description:
								'The pre-formatted quick-dial number for dialing in to the meeting.',
						},
						joinLanguage: {
							type: 'string',
							description:
								'The language in which the join instructions are presented.',
						},
					},
					required: [],
				},
				onlineMeetingUrl: {
					type: 'string',
					description:
						'A URL for an online meeting. Read-only. Deprecated by Microsoft in favor of `onlineMeeting.joinUrl`.',
				},
				webLink: {
					type: 'string',
					description: 'The URL to open the event in Outlook on the web.',
				},
				transactionId: {
					type: 'string',
					description:
						'A custom identifier specified by a client app to avoid redundant event creation on retries.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'updateCalendar',
		label: 'Update a calendar',
		description: 'Updates the properties of a calendar.',
		context:
			'---\nname: updateCalendar\ndescription: Updates the properties of a calendar.\n---\n\nUpdates a [calendar](https://learn.microsoft.com/en-us/graph/api/resources/calendar).\nOnly the fields you provide are changed — omitted fields keep their current value.\nCall `getCalendar` first if you need to know the current values before changing them.\n\nNote: calendar container properties on **group** calendars are read-only; a PATCH\ntargeting a group calendar fails with `405 Method Not Allowed`.\n\nAPI reference: [Update calendar](https://learn.microsoft.com/en-us/graph/api/calendar-update).',
		accounts: { azure: { scope: ['Calendars.ReadWrite'] } },
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
				calendar: {
					type: 'string',
					description: 'The unique identifier of the calendar to update.',
				},
				name: {
					type: 'string',
					description: 'The new name of the calendar. Omit to leave unchanged.',
				},
				color: {
					type: 'string',
					description:
						'Specifies the color theme used to distinguish the calendar from other calendars in a UI. Omit to leave unchanged.',
					default: '',
					enum: [
						'',
						'auto',
						'lightBlue',
						'lightGreen',
						'lightOrange',
						'lightGray',
						'lightYellow',
						'lightTeal',
						'lightPink',
						'lightBrown',
						'lightRed',
						'maxColor',
					],
				},
				isDefaultCalendar: {
					type: 'boolean',
					description:
						"True if this calendar should be the user's default calendar, false otherwise. Omit to leave unchanged.",
				},
			},
			required: ['calendar'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: "The calendar's unique identifier. Read-only." },
				name: { type: 'string', description: 'The calendar name.' },
				color: {
					type: 'string',
					description:
						'Specifies the color theme used to distinguish the calendar from other calendars in a UI.',
					default: '',
					enum: [
						'',
						'auto',
						'lightBlue',
						'lightGreen',
						'lightOrange',
						'lightGray',
						'lightYellow',
						'lightTeal',
						'lightPink',
						'lightBrown',
						'lightRed',
						'maxColor',
					],
				},
				hexColor: {
					type: 'string',
					description:
						'The calendar color expressed as a hex color code. Empty if the user has never explicitly set a color. Read-only.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the calendar object. Changes every time the calendar is changed. Read-only.',
				},
				isDefaultCalendar: {
					type: 'boolean',
					description:
						'True if this is the default calendar where new events are created by default, false otherwise.',
				},
				isRemovable: {
					type: 'boolean',
					description:
						'Indicates whether this user calendar can be deleted from the user mailbox.',
				},
				isTallyingResponses: {
					type: 'boolean',
					description:
						"Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from a user's primary calendar support tracking.",
				},
				canShare: {
					type: 'boolean',
					description:
						'True if the user has permission to share the calendar, false otherwise. Only the creator of the calendar can share it.',
				},
				canViewPrivateItems: {
					type: 'boolean',
					description:
						'True if the user can read calendar items marked private, false otherwise.',
				},
				canEdit: {
					type: 'boolean',
					description: 'True if the user can write to the calendar, false otherwise.',
				},
				allowedOnlineMeetingProviders: {
					type: 'string',
					description:
						'The online meeting service providers that can be used to create online meetings in this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				defaultOnlineMeetingProvider: {
					type: 'string',
					description:
						'The default online meeting provider for meetings sent from this calendar.',
					default: '',
					enum: [
						'',
						'unknown',
						'skypeForBusiness',
						'skypeForConsumer',
						'teamsForBusiness',
					],
				},
				owner: {
					type: 'object',
					description:
						'The user who created or added the calendar, or the person who shared the calendar with the current user.',
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the calendar owner.',
						},
						address: {
							type: 'string',
							description: 'The email address of the calendar owner.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-calendar',
		appVersion: 2,
		endpointName: 'updateEvent',
		label: 'Update an event',
		description: 'Updates the properties of an event.',
		context:
			"---\nname: updateEvent\ndescription: Updates the properties of an event.\n---\n\nUpdates an [event](https://learn.microsoft.com/en-us/graph/api/resources/event).\nOnly the fields you provide are changed. Omitted fields keep their current value.\n\nUpdating `body` on an event with an online meeting can disable the meeting. The\nmeeting's join info is stored inside the current `body.content`. If the new content\ndoes not include it, Graph resets `isOnlineMeeting` to `false` and clears\n`onlineMeeting`. Resending `isOnlineMeeting` or `onlineMeetingProvider` does not\nprevent this. Call `getEvent` first, keep its exact `body.content`, and add your edit\nto it instead of retyping it.\n\n`transactionId` and `allowNewTimeProposals` can't be changed after an event is created\nand aren't accepted here.\n\nAPI reference: [Update event](https://learn.microsoft.com/en-us/graph/api/event-update).\n",
		accounts: { azure: { scope: ['Calendars.ReadWrite'] } },
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
				event: {
					type: 'string',
					description: 'The unique identifier of the event to update.',
				},
				subject: {
					type: 'string',
					description: "The text of the event's subject line. Omit to leave unchanged.",
				},
				start: {
					type: 'object',
					description:
						'The start date, time, and time zone of the event. Omit to leave unchanged.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'The local start date and time **without** a time zone offset, for example `2017-08-29T04:00:00`. Interpreted in the time zone given below.',
						},
						timeZone: {
							type: 'string',
							description:
								"The time zone the date/time above is expressed in. First check the [timezones supported for the user's mailbox](https://learn.microsoft.com/en-us/graph/api/outlookuser-supportedtimezones).",
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description:
						'The date, time, and time zone that the event ends. Omit to leave unchanged.',
					properties: {
						dateTime: {
							type: 'string',
							description:
								'The local end date and time **without** a time zone offset, for example `2017-08-29T05:00:00`. Interpreted in the time zone given below.',
						},
						timeZone: {
							type: 'string',
							description:
								"The time zone the date/time above is expressed in. First check the [timezones supported for the user's mailbox](https://learn.microsoft.com/en-us/graph/api/outlookuser-supportedtimezones).",
						},
					},
					required: [],
				},
				body: {
					type: 'object',
					description:
						'The body of the event, in HTML or text format. Omit to leave unchanged. If the event is an online meeting, get the current body first and preserve the meeting details blob when editing the content.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The format of the body content.',
							default: '',
							enum: ['', 'text', 'html'],
						},
						content: {
							type: 'string',
							description:
								'The content of the event body, in the format specified by content type.',
						},
					},
					required: [],
				},
				location: {
					type: 'object',
					description:
						'The location of the event. Omit to leave unchanged; setting it replaces the locations collection.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The name associated with the location.',
						},
						locationEmailAddress: {
							type: 'string',
							description: 'The optional email address of the location.',
						},
						locationUri: {
							type: 'string',
							description: 'An optional URI representing the location.',
						},
						address: {
							type: 'object',
							description: 'The street address of the location.',
							properties: {
								street: {
									type: 'string',
									description: 'The street name portion of the address.',
								},
								city: {
									type: 'string',
									description: 'The city name portion of the address.',
								},
								state: {
									type: 'string',
									description:
										'The state, province, or region name portion of the address.',
								},
								countryOrRegion: {
									type: 'string',
									description:
										'The country or region name portion of the address.',
								},
								postalCode: {
									type: 'string',
									description: 'The postal code portion of the address.',
								},
							},
							required: [],
						},
						coordinates: {
							type: 'object',
							description:
								'The geographic coordinates and elevation of the location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the location.',
								},
								accuracy: {
									type: 'number',
									description:
										'The accuracy, in meters, of the latitude and longitude.',
								},
								altitude: {
									type: 'number',
									description: 'The altitude of the location.',
								},
								altitudeAccuracy: {
									type: 'number',
									description: 'The accuracy, in meters, of the altitude.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				attendees: {
					type: 'array',
					description:
						'The collection of attendees for the event. Omit to leave unchanged. An update that includes only this field sends a meeting update to just the attendees that changed.',
					items: {
						type: 'object',
						description: 'An attendee of the event.',
						properties: {
							emailAddress: {
								type: 'object',
								description: 'The name and SMTP address of the attendee.',
								properties: {
									address: {
										type: 'string',
										description: 'The email address of the attendee.',
									},
									name: {
										type: 'string',
										description: 'The display name of the attendee.',
									},
								},
								required: ['address'],
							},
							type: {
								type: 'string',
								description: 'The attendee type.',
								default: '',
								enum: ['', 'required', 'optional', 'resource'],
							},
						},
						required: [],
					},
				},
				categories: {
					type: 'array',
					description:
						'The categories associated with the event. Omit to leave unchanged.',
					items: {
						type: 'string',
						description: 'The display name of an Outlook category.',
					},
				},
				recurrence: {
					type: 'object',
					description:
						'The recurrence pattern for the event. Omit to leave unchanged; send an empty value to make the event non-recurring.',
					properties: {
						pattern: {
							type: 'object',
							description: 'Describes the frequency of the recurring event.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence pattern type.',
									default: '',
									enum: [
										'',
										'daily',
										'weekly',
										'absoluteMonthly',
										'relativeMonthly',
										'absoluteYearly',
										'relativeYearly',
									],
								},
								interval: {
									type: 'number',
									description:
										'The number of units between occurrences, where units are determined by the recurrence type.',
								},
								month: {
									type: 'number',
									description:
										'The month in which the event occurs, for yearly patterns.',
								},
								dayOfMonth: {
									type: 'number',
									description:
										'The day of the month on which the event occurs, for monthly and yearly patterns.',
								},
								daysOfWeek: {
									type: 'string',
									description:
										'The days of the week on which the event occurs, for weekly and monthly patterns.',
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
								firstDayOfWeek: {
									type: 'string',
									description:
										'The first day of the week, for weekly and monthly patterns.',
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
								index: {
									type: 'string',
									description:
										'Specifies which instance of the days of week, for relative monthly/yearly patterns.',
									default: '',
									enum: ['', 'first', 'second', 'third', 'fourth', 'last'],
								},
							},
							required: [],
						},
						range: {
							type: 'object',
							description:
								'Describes the range of dates over which the recurrence pattern repeats.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence range type.',
									default: '',
									enum: ['', 'endDate', 'noEnd', 'numbered'],
								},
								startDate: {
									type: 'string',
									description:
										'The date to start applying the recurrence pattern.',
								},
								endDate: {
									type: 'string',
									description:
										'The date to stop applying the recurrence pattern, for an end-date range.',
								},
								recurrenceTimeZone: {
									type: 'string',
									description:
										'Time zone used for the start/end dates of the recurrence range.',
								},
								numberOfOccurrences: {
									type: 'number',
									description: 'The number of occurrences, for a numbered range.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				importance: {
					type: 'string',
					description: 'The importance of the event. Omit to leave unchanged.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				sensitivity: {
					type: 'string',
					description: 'The sensitivity of the event. Omit to leave unchanged.',
					default: '',
					enum: ['', 'normal', 'personal', 'private', 'confidential'],
				},
				showAs: {
					type: 'string',
					description: 'The status to show for the event. Omit to leave unchanged.',
					default: '',
					enum: ['', 'free', 'tentative', 'busy', 'oof', 'workingElsewhere', 'unknown'],
				},
				isAllDay: {
					type: 'boolean',
					description: 'Set to true if the event lasts all day. Omit to leave unchanged.',
				},
				isReminderOn: {
					type: 'boolean',
					description:
						'Set to true to alert the user before the event starts. Omit to leave unchanged.',
				},
				reminderMinutesBeforeStart: {
					type: 'number',
					description:
						'The number of minutes before the event start time that the reminder alert occurs. Omit to leave unchanged.',
				},
				responseRequested: {
					type: 'boolean',
					description:
						'Set to true if the sender would like a response when the event is accepted or declined. Omit to leave unchanged.',
				},
				hideAttendees: {
					type: 'boolean',
					description:
						'When set to true, each attendee only sees themselves in the meeting request and meeting tracking list. Omit to leave unchanged.',
				},
				isOnlineMeeting: {
					type: 'boolean',
					description:
						'Set to true to have Microsoft Graph create online meeting details for this event. Omit to leave unchanged. Note: an existing online meeting is disabled if a `body` update replaces its embedded meeting info.',
				},
				onlineMeetingProvider: {
					type: 'string',
					description:
						'The online meeting service provider to use. Omit to leave unchanged. Note: an existing online meeting is disabled if a `body` update replaces its embedded meeting info — resending this field does not prevent that.',
					default: '',
					enum: ['', 'teamsForBusiness', 'skypeForBusiness', 'skypeForConsumer'],
				},
			},
			required: ['event'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Unique identifier for the event. Case-sensitive. Read-only.',
				},
				iCalUId: {
					type: 'string',
					description: 'A unique identifier for an event across calendars. Read-only.',
				},
				subject: { type: 'string', description: "The text of the event's subject line." },
				bodyPreview: {
					type: 'string',
					description:
						'The preview of the message associated with the event, in text format.',
				},
				body: {
					type: 'object',
					description: 'The body of the message associated with the event.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The format of the body content.',
							default: '',
							enum: ['', 'text', 'html'],
						},
						content: { type: 'string', description: 'The content of the event body.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the event.',
					items: {
						type: 'string',
						description: 'The display name of an Outlook category.',
					},
				},
				changeKey: {
					type: 'string',
					description: 'Identifies the version of the event object.',
				},
				createdDateTime: {
					type: 'string',
					description: 'The date and time the event was created, in UTC.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the event was last modified, in UTC.',
				},
				start: {
					type: 'object',
					description: 'The start date, time, and time zone of the event.',
					properties: {
						dateTime: { type: 'string', description: 'A date and time value.' },
						timeZone: {
							type: 'string',
							description: 'The time zone of the date/time value.',
						},
					},
					required: [],
				},
				end: {
					type: 'object',
					description: 'The date, time, and time zone that the event ends.',
					properties: {
						dateTime: { type: 'string', description: 'A date and time value.' },
						timeZone: {
							type: 'string',
							description: 'The time zone of the date/time value.',
						},
					},
					required: [],
				},
				originalStartTimeZone: {
					type: 'string',
					description: 'The start time zone that was set when the event was created.',
				},
				originalEndTimeZone: {
					type: 'string',
					description: 'The end time zone that was set when the event was created.',
				},
				isAllDay: { type: 'boolean', description: 'True if the event lasts all day.' },
				isCancelled: {
					type: 'boolean',
					description: 'True if the event has been canceled.',
				},
				isDraft: {
					type: 'boolean',
					description:
						"True if the user has updated the meeting in Outlook but hasn't sent the updates to attendees.",
				},
				isOrganizer: {
					type: 'boolean',
					description: 'True if the calendar owner is the organizer of the event.',
				},
				isReminderOn: {
					type: 'boolean',
					description: 'True if an alert is set to remind the user of the event.',
				},
				reminderMinutesBeforeStart: {
					type: 'number',
					description:
						'The number of minutes before the event start time that the reminder alert occurs.',
				},
				hasAttachments: {
					type: 'boolean',
					description: 'True if the event has attachments.',
				},
				hideAttendees: {
					type: 'boolean',
					description:
						'When true, each attendee only sees themselves in the meeting request and meeting tracking list.',
				},
				importance: {
					type: 'string',
					description: 'The importance of the event.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				sensitivity: {
					type: 'string',
					description: 'The sensitivity of the event.',
					default: '',
					enum: ['', 'normal', 'personal', 'private', 'confidential'],
				},
				showAs: {
					type: 'string',
					description: 'The status to show for the event.',
					default: '',
					enum: ['', 'free', 'tentative', 'busy', 'oof', 'workingElsewhere', 'unknown'],
				},
				type: {
					type: 'string',
					description: 'The event type. Read-only.',
					default: '',
					enum: ['', 'singleInstance', 'occurrence', 'exception', 'seriesMaster'],
				},
				seriesMasterId: {
					type: 'string',
					description:
						'The ID for the recurring series master item, if this event is part of a recurring series.',
				},
				recurrence: {
					type: 'object',
					description:
						"The recurrence pattern for the event, if it's part of a recurring series.",
					properties: {
						pattern: {
							type: 'object',
							description: 'Describes the frequency of the recurring event.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence pattern type.',
									default: '',
									enum: [
										'',
										'daily',
										'weekly',
										'absoluteMonthly',
										'relativeMonthly',
										'absoluteYearly',
										'relativeYearly',
									],
								},
								interval: {
									type: 'number',
									description: 'The number of units between occurrences.',
								},
								month: {
									type: 'number',
									description:
										'The month in which the event occurs, for yearly patterns.',
								},
								dayOfMonth: {
									type: 'number',
									description: 'The day of the month on which the event occurs.',
								},
								daysOfWeek: {
									type: 'string',
									description: 'The days of the week on which the event occurs.',
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
								firstDayOfWeek: {
									type: 'string',
									description: 'The first day of the week.',
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
								index: {
									type: 'string',
									description: 'Specifies which instance of the days of week.',
									default: '',
									enum: ['', 'first', 'second', 'third', 'fourth', 'last'],
								},
							},
							required: [],
						},
						range: {
							type: 'object',
							description:
								'Describes the range of dates over which the recurrence pattern repeats.',
							properties: {
								type: {
									type: 'string',
									description: 'The recurrence range type.',
									default: '',
									enum: ['', 'endDate', 'noEnd', 'numbered'],
								},
								startDate: {
									type: 'string',
									description:
										'The date to start applying the recurrence pattern.',
								},
								endDate: {
									type: 'string',
									description:
										'The date to stop applying the recurrence pattern.',
								},
								recurrenceTimeZone: {
									type: 'string',
									description:
										'Time zone used for the start/end dates of the recurrence range.',
								},
								numberOfOccurrences: {
									type: 'number',
									description: 'The number of occurrences, for a numbered range.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				location: {
					type: 'object',
					description: 'The location of the event.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The name associated with the location.',
						},
						locationEmailAddress: {
							type: 'string',
							description: 'The optional email address of the location.',
						},
						locationUri: {
							type: 'string',
							description: 'An optional URI representing the location.',
						},
						locationType: {
							type: 'string',
							description: 'The type of location. Read-only.',
							default: '',
							enum: [
								'',
								'default',
								'conferenceRoom',
								'homeAddress',
								'businessAddress',
								'geoCoordinates',
								'streetAddress',
								'hotel',
								'restaurant',
								'localBusiness',
								'postalAddress',
							],
						},
						uniqueId: { type: 'string', description: 'For internal use only.' },
						uniqueIdType: { type: 'string', description: 'For internal use only.' },
						address: {
							type: 'object',
							description: 'The street address of the location.',
							properties: {
								street: {
									type: 'string',
									description: 'The street name portion of the address.',
								},
								city: {
									type: 'string',
									description: 'The city name portion of the address.',
								},
								state: {
									type: 'string',
									description:
										'The state, province, or region name portion of the address.',
								},
								countryOrRegion: {
									type: 'string',
									description:
										'The country or region name portion of the address.',
								},
								postalCode: {
									type: 'string',
									description: 'The postal code portion of the address.',
								},
							},
							required: [],
						},
						coordinates: {
							type: 'object',
							description:
								'The geographic coordinates and elevation of the location.',
							properties: {
								latitude: {
									type: 'number',
									description: 'The latitude of the location.',
								},
								longitude: {
									type: 'number',
									description: 'The longitude of the location.',
								},
								accuracy: {
									type: 'number',
									description:
										'The accuracy, in meters, of the latitude and longitude.',
								},
								altitude: {
									type: 'number',
									description: 'The altitude of the location.',
								},
								altitudeAccuracy: {
									type: 'number',
									description: 'The accuracy, in meters, of the altitude.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				locations: {
					type: 'array',
					description: 'The locations where the event is held or attended from.',
					items: {
						type: 'object',
						description: 'A location where the event is held or attended from.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The name associated with the location.',
							},
							locationEmailAddress: {
								type: 'string',
								description: 'The optional email address of the location.',
							},
							locationUri: {
								type: 'string',
								description: 'An optional URI representing the location.',
							},
							locationType: {
								type: 'string',
								description: 'The type of location. Read-only.',
								default: '',
								enum: [
									'',
									'default',
									'conferenceRoom',
									'homeAddress',
									'businessAddress',
									'geoCoordinates',
									'streetAddress',
									'hotel',
									'restaurant',
									'localBusiness',
									'postalAddress',
								],
							},
							uniqueId: { type: 'string', description: 'For internal use only.' },
							uniqueIdType: { type: 'string', description: 'For internal use only.' },
							address: {
								type: 'object',
								description: 'The street address of the location.',
								properties: {
									street: {
										type: 'string',
										description: 'The street name portion of the address.',
									},
									city: {
										type: 'string',
										description: 'The city name portion of the address.',
									},
									state: {
										type: 'string',
										description:
											'The state, province, or region name portion of the address.',
									},
									countryOrRegion: {
										type: 'string',
										description:
											'The country or region name portion of the address.',
									},
									postalCode: {
										type: 'string',
										description: 'The postal code portion of the address.',
									},
								},
								required: [],
							},
							coordinates: {
								type: 'object',
								description:
									'The geographic coordinates and elevation of the location.',
								properties: {
									latitude: {
										type: 'number',
										description: 'The latitude of the location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the location.',
									},
									accuracy: {
										type: 'number',
										description:
											'The accuracy, in meters, of the latitude and longitude.',
									},
									altitude: {
										type: 'number',
										description: 'The altitude of the location.',
									},
									altitudeAccuracy: {
										type: 'number',
										description: 'The accuracy, in meters, of the altitude.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				attendees: {
					type: 'array',
					description: 'The collection of attendees for the event.',
					items: {
						type: 'object',
						description: 'An attendee of the event.',
						properties: {
							type: {
								type: 'string',
								description: 'The attendee type.',
								default: '',
								enum: ['', 'required', 'optional', 'resource'],
							},
							emailAddress: {
								type: 'object',
								description: 'The name and SMTP address of the attendee.',
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the attendee.',
									},
									address: {
										type: 'string',
										description: 'The email address of the attendee.',
									},
								},
								required: [],
							},
							status: {
								type: 'object',
								description: "The attendee's response for the event.",
								properties: {
									response: {
										type: 'string',
										description: 'The response type.',
										default: '',
										enum: [
											'',
											'none',
											'organizer',
											'tentativelyAccepted',
											'accepted',
											'declined',
											'notResponded',
										],
									},
									time: {
										type: 'string',
										description: 'The date and time the response was returned.',
									},
								},
								required: [],
							},
							proposedNewTime: {
								type: 'object',
								description: 'An alternate date/time proposed by the attendee.',
								properties: {
									start: {
										type: 'object',
										description:
											'The proposed start date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed start date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed start.',
											},
										},
										required: [],
									},
									end: {
										type: 'object',
										description: 'The proposed end date, time, and time zone.',
										properties: {
											dateTime: {
												type: 'string',
												description: 'The proposed end date and time.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone of the proposed end.',
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
				organizer: {
					type: 'object',
					description: 'The organizer of the event.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The name and SMTP address of the organizer.',
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the organizer.',
								},
								address: {
									type: 'string',
									description: 'The email address of the organizer.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				responseStatus: {
					type: 'object',
					description:
						'The type of response the calendar owner sent in response to the event.',
					properties: {
						response: {
							type: 'string',
							description: 'The response type.',
							default: '',
							enum: [
								'',
								'none',
								'organizer',
								'tentativelyAccepted',
								'accepted',
								'declined',
								'notResponded',
							],
						},
						time: {
							type: 'string',
							description: 'The date and time the response was returned.',
						},
					},
					required: [],
				},
				responseRequested: {
					type: 'boolean',
					description:
						'Whether the organizer would like an invitee to send a response to the event.',
				},
				allowNewTimeProposals: {
					type: 'boolean',
					description:
						'Whether the meeting organizer allows invitees to propose a new time when responding.',
				},
				isOnlineMeeting: {
					type: 'boolean',
					description: 'True if this event has online meeting information.',
				},
				onlineMeetingProvider: {
					type: 'string',
					description: 'The online meeting service provider.',
					default: '',
					enum: [
						'',
						'unknown',
						'teamsForBusiness',
						'skypeForBusiness',
						'skypeForConsumer',
					],
				},
				onlineMeeting: {
					type: 'object',
					description: 'Details for an attendee to join the meeting online. Read-only.',
					properties: {
						joinUrl: {
							type: 'string',
							description: 'The URL used to join the online meeting.',
						},
						conferenceId: { type: 'string', description: 'The ID of the conference.' },
						tollNumber: {
							type: 'string',
							description: 'The toll number used to dial in to the meeting.',
						},
						tollFreeNumbers: {
							type: 'array',
							description: 'The toll-free numbers used to dial in to the meeting.',
							items: { type: 'string', description: 'A toll-free dial-in number.' },
						},
						quickDial: {
							type: 'string',
							description:
								'The pre-formatted quick-dial number for dialing in to the meeting.',
						},
						joinLanguage: {
							type: 'string',
							description:
								'The language in which the join instructions are presented.',
						},
					},
					required: [],
				},
				onlineMeetingUrl: {
					type: 'string',
					description:
						'A URL for an online meeting. Read-only. Deprecated by Microsoft in favor of `onlineMeeting.joinUrl`.',
				},
				webLink: {
					type: 'string',
					description: 'The URL to open the event in Outlook on the web.',
				},
				transactionId: {
					type: 'string',
					description:
						'A custom identifier specified by the client that created the event.',
				},
			},
			required: [],
		},
	},
];
