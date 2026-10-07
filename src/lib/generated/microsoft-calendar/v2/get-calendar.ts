// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetCalendarInput = {
	/**
	 * The unique identifier of the calendar to retrieve.
	 */
	calendar: string;
};

export type GetCalendarOutput = {
	/**
	 * The calendar's unique identifier. Read-only.
	 */
	id?: string;
	/**
	 * The calendar name.
	 */
	name?: string;
	/**
	 * Specifies the color theme used to distinguish the calendar from other calendars in a UI.
	 */
	color?:
		| ''
		| 'auto'
		| 'lightBlue'
		| 'lightGreen'
		| 'lightOrange'
		| 'lightGray'
		| 'lightYellow'
		| 'lightTeal'
		| 'lightPink'
		| 'lightBrown'
		| 'lightRed'
		| 'maxColor';
	/**
	 * The calendar color expressed as a hex color code. Empty if the user has never explicitly set a color. Read-only.
	 */
	hexColor?: string;
	/**
	 * Identifies the version of the calendar object. Changes every time the calendar is changed. Read-only.
	 */
	changeKey?: string;
	/**
	 * True if this is the default calendar where new events are created by default, false otherwise.
	 */
	isDefaultCalendar?: boolean;
	/**
	 * Indicates whether this user calendar can be deleted from the user mailbox.
	 */
	isRemovable?: boolean;
	/**
	 * Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from a user's primary calendar support tracking.
	 */
	isTallyingResponses?: boolean;
	/**
	 * True if the user has permission to share the calendar, false otherwise. Only the creator of the calendar can share it.
	 */
	canShare?: boolean;
	/**
	 * True if the user can read calendar items marked private, false otherwise.
	 */
	canViewPrivateItems?: boolean;
	/**
	 * True if the user can write to the calendar, false otherwise.
	 */
	canEdit?: boolean;
	/**
	 * The online meeting service providers that can be used to create online meetings in this calendar.
	 */
	allowedOnlineMeetingProviders?:
		| ''
		| 'unknown'
		| 'skypeForBusiness'
		| 'skypeForConsumer'
		| 'teamsForBusiness';
	/**
	 * The default online meeting provider for meetings sent from this calendar.
	 */
	defaultOnlineMeetingProvider?:
		| ''
		| 'unknown'
		| 'skypeForBusiness'
		| 'skypeForConsumer'
		| 'teamsForBusiness';
	/**
	 * The user who created or added the calendar, or the person who shared the calendar with the current user.
	 */
	owner?: {
		/**
		 * The display name of the calendar owner.
		 */
		name?: string;
		/**
		 * The email address of the calendar owner.
		 */
		address?: string;
	};
};

/**
 * Get a calendar
 * Returns the properties of a calendar.
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
			appName: 'microsoft-calendar',
			appVersion: 2,
			endpointName: 'getCalendar',
		},
		payload,
	);
	return response.output;
}
