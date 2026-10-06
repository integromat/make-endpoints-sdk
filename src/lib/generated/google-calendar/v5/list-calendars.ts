// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCalendarsInput = {
	/**
	 * Maximum number of entries returned. Acceptable range is 1 to 250, default is 100.
	 */
	maxResults?: number;
	/**
	 * The minimum access role for the user in the returned entries.
	 */
	minAccessRole?:
		| ''
		| 'freeBusyReader'
		| 'reader'
		| 'writer'
		| 'writerWithoutPrivateAccess'
		| 'owner';
	/**
	 * Whether to show hidden entries.
	 */
	showHidden?: boolean;
	/**
	 * Whether to include deleted calendar list entries in the result.
	 */
	showDeleted?: boolean;
	/**
	 * Whether to show only entries for calendars from the organization. Only applicable to Google Workspace users.
	 */
	showOwnOrganizationOnly?: boolean;
	/**
	 * Token specifying which result page to return.
	 */
	pageToken?: string;
	/**
	 * Token for retrieving only entries that have changed since the last list request.
	 */
	syncToken?: string;
};

export type ListCalendarsOutput = {
	/**
	 * Type of the collection, always calendar#calendarList.
	 */
	kind?: string;
	/**
	 * ETag of the collection.
	 */
	etag?: string;
	/**
	 * Token used to access the next page of results.
	 */
	nextPageToken?: string;
	/**
	 * Token used for incremental synchronization.
	 */
	nextSyncToken?: string;
	/**
	 * Calendars that are present on the user's calendar list.
	 */
	items?: {
		/**
		 * Type of the resource, always calendar#calendarListEntry.
		 */
		kind?: string;
		/**
		 * ETag of the resource.
		 */
		etag?: string;
		/**
		 * Identifier of the calendar.
		 */
		id?: string;
		/**
		 * Title of the calendar.
		 */
		summary?: string;
		/**
		 * Description of the calendar.
		 */
		description?: string;
		/**
		 * Geographic location of the calendar.
		 */
		location?: string;
		/**
		 * The time zone of the calendar.
		 */
		timeZone?: string;
		/**
		 * The data owner of the calendar.
		 */
		dataOwner?: string;
		/**
		 * The summary that the authenticated user has set for this calendar.
		 */
		summaryOverride?: string;
		/**
		 * The color ID of the calendar.
		 */
		colorId?: string;
		/**
		 * The main color of the calendar in hexadecimal format.
		 */
		backgroundColor?: string;
		/**
		 * The foreground color of the calendar in hexadecimal format.
		 */
		foregroundColor?: string;
		/**
		 * Whether the calendar has been hidden from the list.
		 */
		hidden?: boolean;
		/**
		 * Whether the calendar content shows up in the UI.
		 */
		selected?: boolean;
		/**
		 * The effective access role that the authenticated user has on the calendar.
		 */
		accessRole?: string;
		/**
		 * The default reminders that the authenticated user has for this calendar.
		 */
		defaultReminders?: {
			/**
			 * The method used by this reminder, such as email or popup.
			 */
			method?: string;
			/**
			 * Number of minutes before the event start when the reminder should trigger.
			 */
			minutes?: number;
		}[];
		/**
		 * The notifications that the authenticated user is receiving for this calendar.
		 */
		notificationSettings?: {
			/**
			 * The list of notifications set for this calendar.
			 */
			notifications?: {
				/**
				 * The type of notification.
				 */
				type?: string;
				/**
				 * The method used to deliver the notification.
				 */
				method?: string;
			}[];
		};
		/**
		 * Whether the calendar is the primary calendar of the authenticated user.
		 */
		primary?: boolean;
		/**
		 * Whether this calendar list entry has been deleted from the calendar list.
		 */
		deleted?: boolean;
		/**
		 * Conferencing properties for this calendar.
		 */
		conferenceProperties?: {
			/**
			 * The types of conference solutions that are supported for this calendar.
			 *
			 * Items: A conference solution type, e.g. eventHangout, eventNamedHangout, or hangoutsMeet.
			 */
			allowedConferenceSolutionTypes?: string[];
		};
		/**
		 * Whether invitations are automatically accepted for this calendar.
		 */
		autoAcceptInvitations?: boolean;
	}[];
};

/**
 * List calendars
 * Returns the calendars on the user's calendar list.
 */
export async function listCalendars(
	this: EndpointFunctionThis,
	payload: {
		input: ListCalendarsInput;
		connectionId: number;
	},
): Promise<ListCalendarsOutput> {
	const response = await this.endpointCaller<ListCalendarsOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'listCalendars',
		},
		payload,
	);
	return response.output;
}
