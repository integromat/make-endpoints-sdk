// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetFreeBusyInput = {
	/**
	 * The start of the time interval for the query.
	 */
	timeMin: string;
	/**
	 * The end of the time interval for the query.
	 */
	timeMax: string;
	/**
	 * IANA time zone identifier. Defaults to UTC.
	 */
	timeZone?: string;
	/**
	 * List of calendars and groups to query. Each item must contain an id field with a calendar or group identifier.
	 */
	items: {
		/**
		 * The identifier of a calendar or group.
		 */
		id?: string;
	}[];
	/**
	 * Maximum number of calendar identifiers to expand per group. Maximum value is 100.
	 */
	groupExpansionMax?: number;
	/**
	 * Maximum number of calendars for which FreeBusy information is returned. Maximum value is 50.
	 */
	calendarExpansionMax?: number;
};

export type GetFreeBusyOutput = {
	/**
	 * Type of the resource. Value is always calendar#freeBusy.
	 */
	kind?: string;
	/**
	 * The start of the time interval, in RFC3339 format.
	 */
	timeMin?: string;
	/**
	 * The end of the time interval, in RFC3339 format.
	 */
	timeMax?: string;
	/**
	 * Expansion of groups. Each key is a group ID mapping to an object containing: calendars[] (array of calendar identifiers, each with an id field) and errors[] (array of error objects with domain, reason, and optional arguments).
	 */
	groups?: Record<string, JSONValue>;
	/**
	 * Free/busy information for calendars. Each key is a calendar ID mapping to an object containing: busy[] (array of time ranges, each with start and end in RFC3339 format) and errors[] (array of error objects with domain, reason, and optional arguments).
	 */
	calendars?: Record<string, JSONValue>;
};

/**
 * Get free/busy
 * Returns free/busy information for a set of calendars and groups.
 */
export async function getFreeBusy(
	this: EndpointFunctionThis,
	payload: {
		input: GetFreeBusyInput;
		connectionId: number;
	},
): Promise<GetFreeBusyOutput> {
	const response = await this.endpointCaller<GetFreeBusyOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'getFreeBusy',
		},
		payload,
	);
	return response.output;
}
