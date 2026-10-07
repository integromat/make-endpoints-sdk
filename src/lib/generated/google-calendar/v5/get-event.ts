// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetEventInput = {
	/**
	 * The identifier of the calendar containing the event.
	 */
	calendarId: string;
	/**
	 * The identifier of the event to retrieve.
	 */
	eventId: string;
	/**
	 * Time zone used in the response. Defaults to the calendar's time zone.
	 */
	timeZone?: string;
	/**
	 * The maximum number of attendees to include in the response.
	 */
	maxAttendees?: number;
};

export type GetEventOutput = {
	/**
	 * Type of the resource, always calendar#event.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
	/**
	 * Opaque identifier of the event.
	 */
	id?: string;
	/**
	 * Status of the event: confirmed, tentative, or cancelled.
	 */
	status?: string;
	/**
	 * URL link to the event in Google Calendar.
	 */
	htmlLink?: string;
	/**
	 * Creation time of the event in RFC3339 format.
	 */
	created?: string;
	/**
	 * Last modification time of the event in RFC3339 format.
	 */
	updated?: string;
	/**
	 * Title of the event.
	 */
	summary?: string;
	/**
	 * Description of the event.
	 */
	description?: string;
	/**
	 * Geographic location of the event.
	 */
	location?: string;
	/**
	 * The color ID of the event.
	 */
	colorId?: string;
	/**
	 * The event label ID associated with the event.
	 */
	eventLabelId?: string;
	/**
	 * The creator of the event.
	 */
	creator?: {
		/**
		 * The creator's profile ID.
		 */
		id?: string;
		/**
		 * The creator's email address.
		 */
		email?: string;
		/**
		 * The creator's name.
		 */
		displayName?: string;
		/**
		 * Whether the creator corresponds to the calendar on which the event appears.
		 */
		self?: boolean;
	};
	/**
	 * The organizer of the event.
	 */
	organizer?: {
		/**
		 * The organizer's profile ID.
		 */
		id?: string;
		/**
		 * The organizer's email address.
		 */
		email?: string;
		/**
		 * The organizer's name.
		 */
		displayName?: string;
		/**
		 * Whether the organizer corresponds to the calendar on which the event appears.
		 */
		self?: boolean;
	};
	/**
	 * The start time of the event.
	 */
	start?: {
		/**
		 * The date for all-day events in YYYY-MM-DD format.
		 */
		date?: string;
		/**
		 * The start time as a combined date-time value in RFC3339 format.
		 */
		dateTime?: string;
		/**
		 * The time zone in which the time is specified.
		 */
		timeZone?: string;
	};
	/**
	 * The end time of the event.
	 */
	end?: {
		/**
		 * The date for all-day events in YYYY-MM-DD format.
		 */
		date?: string;
		/**
		 * The end time as a combined date-time value in RFC3339 format.
		 */
		dateTime?: string;
		/**
		 * The time zone in which the time is specified.
		 */
		timeZone?: string;
	};
	/**
	 * Whether the end time is unspecified.
	 */
	endTimeUnspecified?: boolean;
	/**
	 * List of RRULE, EXRULE, RDATE, and EXDATE lines for a recurring event.
	 *
	 * Items: An RRULE, EXRULE, RDATE, or EXDATE line as defined in RFC 5545.
	 */
	recurrence?: string[];
	/**
	 * The ID of the recurring event to which this instance belongs.
	 */
	recurringEventId?: string;
	/**
	 * The original start time for recurring event instances.
	 */
	originalStartTime?: {
		/**
		 * The date for all-day events in YYYY-MM-DD format.
		 */
		date?: string;
		/**
		 * The date-time value in RFC3339 format.
		 */
		dateTime?: string;
		/**
		 * The time zone in which the time is specified.
		 */
		timeZone?: string;
	};
	/**
	 * Whether the event blocks time on the calendar: opaque or transparent.
	 */
	transparency?: string;
	/**
	 * Visibility of the event: default, public, private, or confidential.
	 */
	visibility?: string;
	/**
	 * Event unique identifier as defined in RFC5545.
	 */
	iCalUID?: string;
	/**
	 * Sequence number as per iCalendar.
	 */
	sequence?: number;
	/**
	 * The attendees of the event.
	 */
	attendees?: {
		/**
		 * The attendee's profile ID.
		 */
		id?: string;
		/**
		 * The attendee's email address.
		 */
		email?: string;
		/**
		 * The attendee's name.
		 */
		displayName?: string;
		/**
		 * Whether the attendee is the organizer.
		 */
		organizer?: boolean;
		/**
		 * Whether this entry represents the calendar on which the event appears.
		 */
		self?: boolean;
		/**
		 * Whether the attendee is a resource.
		 */
		resource?: boolean;
		/**
		 * Whether attendance is optional.
		 */
		optional?: boolean;
		/**
		 * The attendee's response status: needsAction, declined, tentative, or accepted.
		 */
		responseStatus?: string;
		/**
		 * The attendee's response comment.
		 */
		comment?: string;
		/**
		 * Number of additional guests the attendee has indicated.
		 */
		additionalGuests?: number;
		/**
		 * If set, indicates the ID of an async operation in progress for this attendee.
		 */
		asyncOperation?: string;
	}[];
	/**
	 * Whether attendees may have been omitted from the event's representation.
	 */
	attendeesOmitted?: boolean;
	/**
	 * URL for the associated Google Hangout.
	 */
	hangoutLink?: string;
	/**
	 * The conference-related information for the event.
	 */
	conferenceData?: {
		/**
		 * A request to generate a new conference.
		 */
		createRequest?: {
			/**
			 * The client-generated unique ID for this request.
			 */
			requestId?: string;
			/**
			 * The conference solution type.
			 */
			conferenceSolutionKey?: {
				/**
				 * The conference solution type: eventHangout, eventNamedHangout, or hangoutsMeet.
				 */
				type?: string;
			};
			/**
			 * The status of the conference create request.
			 */
			status?: {
				/**
				 * The current status: pending, success, or failure.
				 */
				statusCode?: string;
			};
		};
		/**
		 * Information about individual conference entry points.
		 */
		entryPoints?: {
			/**
			 * The type of conference entry point: video, phone, sip, or more.
			 */
			entryPointType?: string;
			/**
			 * The URI of the entry point.
			 */
			uri?: string;
			/**
			 * The label for the URI.
			 */
			label?: string;
			/**
			 * The PIN to access the conference.
			 */
			pin?: string;
			/**
			 * The access code to access the conference.
			 */
			accessCode?: string;
			/**
			 * The meeting code to access the conference.
			 */
			meetingCode?: string;
			/**
			 * The passcode to access the conference.
			 */
			passcode?: string;
			/**
			 * The password to access the conference.
			 */
			password?: string;
		}[];
		/**
		 * The conference solution used.
		 */
		conferenceSolution?: {
			/**
			 * The key which identifies the conference solution.
			 */
			key?: {
				/**
				 * The conference solution type.
				 */
				type?: string;
			};
			/**
			 * The user-visible name of the solution.
			 */
			name?: string;
			/**
			 * The user-visible icon for this solution.
			 */
			iconUri?: string;
		};
		/**
		 * The ID of the conference.
		 */
		conferenceId?: string;
		/**
		 * The signature of the conference data.
		 */
		signature?: string;
		/**
		 * Additional notes to display to the user about the conference.
		 */
		notes?: string;
	};
	/**
	 * Information about the event's reminders.
	 */
	reminders?: {
		/**
		 * Whether the default reminders of the calendar apply to the event.
		 */
		useDefault?: boolean;
		/**
		 * Custom reminder overrides for the event.
		 */
		overrides?: {
			/**
			 * The method of the reminder: email or popup.
			 */
			method?: string;
			/**
			 * Number of minutes before the event when the reminder should trigger.
			 */
			minutes?: number;
		}[];
	};
	/**
	 * Source from which the event was created.
	 */
	source?: {
		/**
		 * URL of the source pointing to a resource.
		 */
		url?: string;
	};
	/**
	 * File attachments for the event.
	 */
	attachments?: {
		/**
		 * URL link to the attachment.
		 */
		fileUrl?: string;
		/**
		 * Internet media type of the attachment.
		 */
		mimeType?: string;
		/**
		 * URL link to the attachment's icon.
		 */
		iconLink?: string;
		/**
		 * ID of the attached file.
		 */
		fileId?: string;
	}[];
	/**
	 * Specific type of the event: default, focusTime, outOfOffice, workingLocation, fromGmail, or birthday.
	 */
	eventType?: string;
	/**
	 * Whether attendees other than the organizer can invite others.
	 */
	guestsCanInviteOthers?: boolean;
	/**
	 * Whether attendees other than the organizer can modify the event.
	 */
	guestsCanModify?: boolean;
	/**
	 * Whether attendees other than the organizer can see the attendee list.
	 */
	guestsCanSeeOtherGuests?: boolean;
	/**
	 * Whether the event is a private copy that cannot be modified.
	 */
	privateCopy?: boolean;
	/**
	 * Whether the event is locked and no changes can be made.
	 */
	locked?: boolean;
	/**
	 * Out of office event data.
	 */
	outOfOfficeProperties?: {
		/**
		 * Whether to decline meeting invitations which overlap the event.
		 */
		autoDeclineMode?: string;
		/**
		 * Custom message to include in the declined response.
		 */
		declineMessage?: string;
	};
	/**
	 * Focus time event data.
	 */
	focusTimeProperties?: {
		/**
		 * Whether to decline meeting invitations which overlap the event.
		 */
		autoDeclineMode?: string;
		/**
		 * Custom message to include in the declined response.
		 */
		declineMessage?: string;
		/**
		 * The chat status during focus time.
		 */
		chatStatus?: string;
	};
	/**
	 * Working location event data.
	 */
	workingLocationProperties?: {
		/**
		 * Type of the working location: homeOffice, customLocation, or officeLocation.
		 */
		type?: string;
		/**
		 * If present, indicates the user is working from home.
		 */
		homeOffice?: string;
		/**
		 * Custom working location info.
		 */
		customLocation?: {
			/**
			 * An optional extra label for additional information.
			 */
			label?: string;
		};
		/**
		 * Office location info.
		 */
		officeLocation?: {
			/**
			 * The building identifier.
			 */
			buildingId?: string;
			/**
			 * The floor identifier.
			 */
			floorId?: string;
			/**
			 * The floor section identifier.
			 */
			floorSectionId?: string;
			/**
			 * The desk identifier.
			 */
			deskId?: string;
			/**
			 * The label of the office location.
			 */
			label?: string;
		};
	};
	/**
	 * Birthday event data.
	 */
	birthdayProperties?: {
		/**
		 * Resource name of the contact this birthday event is linked to.
		 */
		contact?: string;
		/**
		 * Type of the birthday event.
		 */
		type?: string;
		/**
		 * The custom type name for the birthday event.
		 */
		customTypeName?: string;
	};
	/**
	 * Extended properties of the event.
	 */
	extendedProperties?: {
		/**
		 * Properties visible only to the creator of the event.
		 */
		private?: Record<string, JSONValue>;
		/**
		 * Properties visible to all attendees.
		 */
		shared?: Record<string, JSONValue>;
	};
	/**
	 * A gadget that extends this event (deprecated).
	 */
	gadget?: {
		/**
		 * The gadget's type.
		 */
		type?: string;
		/**
		 * The gadget's URL.
		 */
		link?: string;
		/**
		 * The gadget's icon URL.
		 */
		iconLink?: string;
		/**
		 * The gadget's width in pixels.
		 */
		width?: number;
		/**
		 * The gadget's height in pixels.
		 */
		height?: number;
		/**
		 * The gadget's display mode.
		 */
		display?: string;
		/**
		 * Gadget preferences as key-value pairs.
		 */
		preferences?: Record<string, JSONValue>;
	};
};

/**
 * Get an event
 * Returns a single event from the specified calendar.
 */
export async function getEvent(
	this: EndpointFunctionThis,
	payload: {
		input: GetEventInput;
		connectionId: number;
	},
): Promise<GetEventOutput> {
	const response = await this.endpointCaller<GetEventOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'getEvent',
		},
		payload,
	);
	return response.output;
}
