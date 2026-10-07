// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateCalendarInput = {
	/**
	 * The identifier of the calendar to update.
	 */
	calendarId: string;
	/**
	 * Title of the calendar.
	 */
	summary?: string;
	/**
	 * Description of the calendar.
	 */
	description?: string;
	/**
	 * Geographic location of the calendar as free-form text.
	 */
	location?: string;
	/**
	 * The time zone of the calendar in IANA format.
	 */
	timeZone?: string;
	/**
	 * Label properties to set on this calendar. If specified, overwrites existing label properties.
	 */
	labelProperties?: {
		/**
		 * Event labels for this calendar. Replaces existing labels when provided. Each calendar can have a maximum of 200 labels.
		 */
		eventLabels?: {
			/**
			 * Background color in hexadecimal format, such as #039be5.
			 */
			backgroundColor: string;
			/**
			 * The ID of the label. Optional when inserting; required when updating. Must be unique and in UUID format.
			 */
			id?: string;
			/**
			 * Name of the label, at most 50 characters.
			 */
			name?: string;
		}[];
	};
};

export type UpdateCalendarOutput = {
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
			 * Background color of the label in hexadecimal format, such as #039be5.
			 */
			backgroundColor?: string;
			/**
			 * The ID of the label in UUID format.
			 */
			id?: string;
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
 * Update a calendar
 * Updates metadata for a calendar using patch semantics.
 */
export async function updateCalendar(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCalendarInput;
		connectionId: number;
	},
): Promise<UpdateCalendarOutput> {
	const response = await this.endpointCaller<UpdateCalendarOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'updateCalendar',
		},
		payload,
	);
	return response.output;
}
