// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEventsInput = {
	/**
	 * The unique identifier of a calendar group. **Ignored unless `calendar` is also provided** — Microsoft Graph has no events collection scoped to a calendar group alone; supplying only this field silently falls back to the user's default calendar.
	 */
	calendarGroup?: string;
	/**
	 * The unique identifier of the calendar to list events from. If left empty, events from the user's default calendar are returned.
	 */
	calendar?: string;
	/**
	 * The event properties to include in the response. If left empty, the default set of properties is returned.
	 *
	 * Items: The name of an event property, for example `subject` or `start`.
	 */
	select?: string[];
	/**
	 * An [OData `$filter` expression](https://learn.microsoft.com/en-us/graph/filter-query-parameter) to restrict the events returned, for example `importance eq 'high'`. The `recurrence` property can't be filtered on.
	 */
	filter?: string;
	/**
	 * An [OData `$orderby` expression](https://learn.microsoft.com/en-us/graph/query-parameters) used to sort the returned events, for example `createdDateTime desc`.
	 */
	orderby?: string;
	/**
	 * The maximum number of events to return per page (OData `$top`). Additional pages are followed automatically.
	 */
	top?: number;
	/**
	 * The number of events to skip before returning results (OData `$skip`).
	 */
	skip?: number;
};

export type ListEventsOutput = {
	/**
	 * Unique identifier for the event. Case-sensitive. Read-only.
	 */
	id?: string;
	/**
	 * A unique identifier for an event across calendars. Different for each occurrence in a recurring series. Read-only.
	 */
	iCalUId?: string;
	/**
	 * The text of the event's subject line.
	 */
	subject?: string;
	/**
	 * The preview of the message associated with the event, in text format.
	 */
	bodyPreview?: string;
	/**
	 * The body of the message associated with the event. Can be in HTML or text format.
	 */
	body?: {
		/**
		 * The format of the body content.
		 */
		contentType?: '' | 'text' | 'html';
		/**
		 * The content of the event body, in the format specified by content type.
		 */
		content?: string;
	};
	/**
	 * The categories associated with the event.
	 *
	 * Items: The display name of an Outlook category.
	 */
	categories?: string[];
	/**
	 * Identifies the version of the event object. Changes every time the event is changed.
	 */
	changeKey?: string;
	/**
	 * The date and time the event was created, in UTC.
	 */
	createdDateTime?: string;
	/**
	 * The date and time the event was last modified, in UTC.
	 */
	lastModifiedDateTime?: string;
	/**
	 * The start date, time, and time zone of the event. By default, the start time is in UTC.
	 */
	start?: {
		/**
		 * A date and time value, for example `2017-08-29T04:00:00.0000000`.
		 */
		dateTime?: string;
		/**
		 * The time zone of the date/time value, for example `Pacific Standard Time`.
		 */
		timeZone?: string;
	};
	/**
	 * The date, time, and time zone that the event ends. By default, the end time is in UTC.
	 */
	end?: {
		/**
		 * A date and time value, for example `2017-08-29T05:00:00.0000000`.
		 */
		dateTime?: string;
		/**
		 * The time zone of the date/time value, for example `Pacific Standard Time`.
		 */
		timeZone?: string;
	};
	/**
	 * The start time zone that was set when the event was created.
	 */
	originalStartTimeZone?: string;
	/**
	 * The end time zone that was set when the event was created.
	 */
	originalEndTimeZone?: string;
	/**
	 * The start time of an event when it's initially created as an occurrence or exception in a recurring series.
	 */
	originalStart?: string;
	/**
	 * True if the event lasts all day.
	 */
	isAllDay?: boolean;
	/**
	 * True if the event has been canceled.
	 */
	isCancelled?: boolean;
	/**
	 * True if the user has updated the meeting in Outlook but hasn't sent the updates to attendees.
	 */
	isDraft?: boolean;
	/**
	 * True if the calendar owner is the organizer of the event.
	 */
	isOrganizer?: boolean;
	/**
	 * True if an alert is set to remind the user of the event.
	 */
	isReminderOn?: boolean;
	/**
	 * The number of minutes before the event start time that the reminder alert occurs.
	 */
	reminderMinutesBeforeStart?: number;
	/**
	 * True if the event has attachments.
	 */
	hasAttachments?: boolean;
	/**
	 * When true, each attendee only sees themselves in the meeting request and meeting tracking list.
	 */
	hideAttendees?: boolean;
	/**
	 * The importance of the event.
	 */
	importance?: '' | 'low' | 'normal' | 'high';
	/**
	 * The sensitivity of the event.
	 */
	sensitivity?: '' | 'normal' | 'personal' | 'private' | 'confidential';
	/**
	 * The status to show for the event.
	 */
	showAs?: '' | 'free' | 'tentative' | 'busy' | 'oof' | 'workingElsewhere' | 'unknown';
	/**
	 * The event type. Read-only.
	 */
	type?: '' | 'singleInstance' | 'occurrence' | 'exception' | 'seriesMaster';
	/**
	 * The ID for the recurring series master item, if this event is part of a recurring series.
	 */
	seriesMasterId?: string;
	/**
	 * The recurrence pattern for the event, if it's part of a recurring series.
	 */
	recurrence?: {
		/**
		 * Describes the frequency of the recurring event.
		 */
		pattern?: {
			/**
			 * The recurrence pattern type.
			 */
			type?:
				| ''
				| 'daily'
				| 'weekly'
				| 'absoluteMonthly'
				| 'relativeMonthly'
				| 'absoluteYearly'
				| 'relativeYearly';
			/**
			 * The number of units between occurrences.
			 */
			interval?: number;
			/**
			 * The month in which the event occurs, for yearly patterns.
			 */
			month?: number;
			/**
			 * The day of the month on which the event occurs.
			 */
			dayOfMonth?: number;
			/**
			 * The days of the week on which the event occurs.
			 */
			daysOfWeek?:
				| ''
				| 'sunday'
				| 'monday'
				| 'tuesday'
				| 'wednesday'
				| 'thursday'
				| 'friday'
				| 'saturday';
			/**
			 * The first day of the week.
			 */
			firstDayOfWeek?:
				| ''
				| 'sunday'
				| 'monday'
				| 'tuesday'
				| 'wednesday'
				| 'thursday'
				| 'friday'
				| 'saturday';
			/**
			 * Specifies which instance of the days of week.
			 */
			index?: '' | 'first' | 'second' | 'third' | 'fourth' | 'last';
		};
		/**
		 * Describes the range of dates over which the recurrence pattern repeats.
		 */
		range?: {
			/**
			 * The recurrence range type.
			 */
			type?: '' | 'endDate' | 'noEnd' | 'numbered';
			/**
			 * The date to start applying the recurrence pattern.
			 */
			startDate?: string;
			/**
			 * The date to stop applying the recurrence pattern.
			 */
			endDate?: string;
			/**
			 * Time zone used for the start/end dates of the recurrence range.
			 */
			recurrenceTimeZone?: string;
			/**
			 * The number of occurrences, for a numbered range.
			 */
			numberOfOccurrences?: number;
		};
	};
	/**
	 * The occurrence IDs of canceled instances in a recurring series. Requires `select` to retrieve.
	 *
	 * Items: The occurrence ID of a canceled instance.
	 */
	cancelledOccurrences?: string[];
	/**
	 * The location of the event.
	 */
	location?: {
		/**
		 * The name associated with the location.
		 */
		displayName?: string;
		/**
		 * The optional email address of the location.
		 */
		locationEmailAddress?: string;
		/**
		 * An optional URI representing the location.
		 */
		locationUri?: string;
		/**
		 * The type of location. Read-only.
		 */
		locationType?:
			| ''
			| 'default'
			| 'conferenceRoom'
			| 'homeAddress'
			| 'businessAddress'
			| 'geoCoordinates'
			| 'streetAddress'
			| 'hotel'
			| 'restaurant'
			| 'localBusiness'
			| 'postalAddress';
		/**
		 * For internal use only.
		 */
		uniqueId?: string;
		/**
		 * For internal use only.
		 */
		uniqueIdType?: string;
		/**
		 * The street address of the location.
		 */
		address?: {
			/**
			 * The street name portion of the address.
			 */
			street?: string;
			/**
			 * The city name portion of the address.
			 */
			city?: string;
			/**
			 * The state, province, or region name portion of the address.
			 */
			state?: string;
			/**
			 * The country or region name portion of the address.
			 */
			countryOrRegion?: string;
			/**
			 * The postal code portion of the address.
			 */
			postalCode?: string;
		};
		/**
		 * The geographic coordinates and elevation of the location.
		 */
		coordinates?: {
			/**
			 * The latitude of the location.
			 */
			latitude?: number;
			/**
			 * The longitude of the location.
			 */
			longitude?: number;
			/**
			 * The accuracy, in meters, of the latitude and longitude.
			 */
			accuracy?: number;
			/**
			 * The altitude of the location.
			 */
			altitude?: number;
			/**
			 * The accuracy, in meters, of the altitude.
			 */
			altitudeAccuracy?: number;
		};
	};
	/**
	 * The locations where the event is held or attended from.
	 *
	 * Items: A location where the event is held or attended from.
	 */
	locations?: {
		/**
		 * The name associated with the location.
		 */
		displayName?: string;
		/**
		 * The optional email address of the location.
		 */
		locationEmailAddress?: string;
		/**
		 * An optional URI representing the location.
		 */
		locationUri?: string;
		/**
		 * The type of location. Read-only.
		 */
		locationType?:
			| ''
			| 'default'
			| 'conferenceRoom'
			| 'homeAddress'
			| 'businessAddress'
			| 'geoCoordinates'
			| 'streetAddress'
			| 'hotel'
			| 'restaurant'
			| 'localBusiness'
			| 'postalAddress';
		/**
		 * For internal use only.
		 */
		uniqueId?: string;
		/**
		 * For internal use only.
		 */
		uniqueIdType?: string;
		/**
		 * The street address of the location.
		 */
		address?: {
			/**
			 * The street name portion of the address.
			 */
			street?: string;
			/**
			 * The city name portion of the address.
			 */
			city?: string;
			/**
			 * The state, province, or region name portion of the address.
			 */
			state?: string;
			/**
			 * The country or region name portion of the address.
			 */
			countryOrRegion?: string;
			/**
			 * The postal code portion of the address.
			 */
			postalCode?: string;
		};
		/**
		 * The geographic coordinates and elevation of the location.
		 */
		coordinates?: {
			/**
			 * The latitude of the location.
			 */
			latitude?: number;
			/**
			 * The longitude of the location.
			 */
			longitude?: number;
			/**
			 * The accuracy, in meters, of the latitude and longitude.
			 */
			accuracy?: number;
			/**
			 * The altitude of the location.
			 */
			altitude?: number;
			/**
			 * The accuracy, in meters, of the altitude.
			 */
			altitudeAccuracy?: number;
		};
	}[];
	/**
	 * The collection of attendees for the event.
	 *
	 * Items: An attendee of the event.
	 */
	attendees?: {
		/**
		 * The attendee type.
		 */
		type?: '' | 'required' | 'optional' | 'resource';
		/**
		 * The name and SMTP address of the attendee.
		 */
		emailAddress?: {
			/**
			 * The display name of the attendee.
			 */
			name?: string;
			/**
			 * The email address of the attendee.
			 */
			address?: string;
		};
		/**
		 * The attendee's response for the event and the date/time the response was sent.
		 */
		status?: {
			/**
			 * The response type.
			 */
			response?:
				| ''
				| 'none'
				| 'organizer'
				| 'tentativelyAccepted'
				| 'accepted'
				| 'declined'
				| 'notResponded';
			/**
			 * The date and time the response was returned.
			 */
			time?: string;
		};
		/**
		 * An alternate date/time proposed by the attendee for the meeting.
		 */
		proposedNewTime?: {
			/**
			 * The proposed start date, time, and time zone.
			 */
			start?: {
				/**
				 * The proposed start date and time.
				 */
				dateTime?: string;
				/**
				 * The time zone of the proposed start.
				 */
				timeZone?: string;
			};
			/**
			 * The proposed end date, time, and time zone.
			 */
			end?: {
				/**
				 * The proposed end date and time.
				 */
				dateTime?: string;
				/**
				 * The time zone of the proposed end.
				 */
				timeZone?: string;
			};
		};
	}[];
	/**
	 * The organizer of the event.
	 */
	organizer?: {
		/**
		 * The name and SMTP address of the organizer.
		 */
		emailAddress?: {
			/**
			 * The display name of the organizer.
			 */
			name?: string;
			/**
			 * The email address of the organizer.
			 */
			address?: string;
		};
	};
	/**
	 * The type of response the calendar owner sent in response to the event, and when.
	 */
	responseStatus?: {
		/**
		 * The response type.
		 */
		response?:
			| ''
			| 'none'
			| 'organizer'
			| 'tentativelyAccepted'
			| 'accepted'
			| 'declined'
			| 'notResponded';
		/**
		 * The date and time the response was returned.
		 */
		time?: string;
	};
	/**
	 * Default is true, meaning the organizer would like an invitee to send a response to the event.
	 */
	responseRequested?: boolean;
	/**
	 * True if the meeting organizer allows invitees to propose a new time when responding.
	 */
	allowNewTimeProposals?: boolean;
	/**
	 * True if this event has online meeting information.
	 */
	isOnlineMeeting?: boolean;
	/**
	 * The online meeting service provider.
	 */
	onlineMeetingProvider?:
		| ''
		| 'unknown'
		| 'teamsForBusiness'
		| 'skypeForBusiness'
		| 'skypeForConsumer';
	/**
	 * Details for an attendee to join the meeting online. Read-only.
	 */
	onlineMeeting?: {
		/**
		 * The URL used to join the online meeting.
		 */
		joinUrl?: string;
		/**
		 * The ID of the conference.
		 */
		conferenceId?: string;
		/**
		 * The toll number used to dial in to the meeting.
		 */
		tollNumber?: string;
		/**
		 * The toll-free numbers used to dial in to the meeting.
		 *
		 * Items: A toll-free dial-in number.
		 */
		tollFreeNumbers?: string[];
		/**
		 * The pre-formatted quick-dial number for dialing in to the meeting.
		 */
		quickDial?: string;
		/**
		 * The language in which the join instructions are presented.
		 */
		joinLanguage?: string;
	};
	/**
	 * A URL for an online meeting. Read-only. Deprecated by Microsoft in favor of `onlineMeeting.joinUrl`.
	 */
	onlineMeetingUrl?: string;
	/**
	 * The URL to open the event in Outlook on the web.
	 */
	webLink?: string;
	/**
	 * A custom identifier specified by a client app to avoid redundant event creation on retries.
	 */
	transactionId?: string;
};

/**
 * List events
 * Returns a list of events in the signed-in user's mailbox or a specific calendar.
 */
export async function listEvents(
	this: EndpointFunctionThis,
	payload: {
		input: ListEventsInput;
		connectionId: number;
	},
): Promise<ListEventsOutput> {
	const response = await this.endpointCaller<ListEventsOutput>(
		{
			appName: 'microsoft-calendar',
			appVersion: 2,
			endpointName: 'listEvents',
		},
		payload,
	);
	return response.output;
}
