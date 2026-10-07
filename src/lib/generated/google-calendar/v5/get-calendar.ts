// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetCalendarInput = {
	/**
	 * The identifier of the calendar to retrieve.
	 */
	calendarId: string;
};

export type GetCalendarOutput = {
	/**
	 * Type of the resource, always calendar#calendar.
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
	 * Label properties defined on this calendar.
	 */
	labelProperties?: {
		/**
		 * Event labels defined on this calendar. Each calendar can have a maximum of 200 labels.
		 */
		eventLabels?: {
			/**
			 * The ID of the label in UUID format.
			 */
			id?: string;
			/**
			 * Background color of the label in hexadecimal format, such as #039be5.
			 */
			backgroundColor?: string;
			/**
			 * Name of the label, at most 50 characters.
			 */
			name?: string;
		}[];
	};
	/**
	 * Whether invitations are automatically accepted for this calendar.
	 */
	autoAcceptInvitations?: boolean;
};

/**
 * Get a calendar
 * Returns metadata for a calendar.
 */
export async function getCalendar(
	this: EndpointFunctionThis,
	payload: {
		input: GetCalendarInput;
		connectionId: number;
	},
): Promise<GetCalendarOutput> {
	const response = await this.endpointCaller<GetCalendarOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'getCalendar',
		},
		payload,
	);
	return response.output;
}
