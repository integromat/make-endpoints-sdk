// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCalendarsInput = {
	/**
	 * The unique identifier of a calendar group to list calendars from. If left empty, all of the user's calendars are returned.
	 */
	calendarGroup?: string;
	/**
	 * The calendar properties to include in the response. If left empty, all properties are returned.
	 *
	 * Items: The name of a calendar property, for example `name` or `color`.
	 */
	select?: string[];
	/**
	 * An [OData `$filter` expression](https://learn.microsoft.com/en-us/graph/filter-query-parameter) to restrict the calendars returned, for example `isDefaultCalendar eq true`.
	 */
	filter?: string;
	/**
	 * An [OData `$orderby` expression](https://learn.microsoft.com/en-us/graph/query-parameters) used to sort the returned calendars, for example `name asc`.
	 */
	orderby?: string;
	/**
	 * The maximum number of calendars to return per page (OData `$top`). Additional pages are followed automatically.
	 */
	top?: number;
	/**
	 * The number of calendars to skip before returning results (OData `$skip`).
	 */
	skip?: number;
};

export type ListCalendarsOutput = {
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
 * List calendars
 * Returns the signed-in user's calendars.
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
			appName: 'microsoft-calendar',
			appVersion: 2,
			endpointName: 'listCalendars',
		},
		payload,
	);
	return response.output;
}
