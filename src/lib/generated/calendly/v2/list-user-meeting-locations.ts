// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUserMeetingLocationsInput = {
	/**
	 * The URI of the user. For example, `https://api.calendly.com/users/ABCD1234`.
	 */
	user: string;
};

export type ListUserMeetingLocationsOutput = {
	/**
	 * The list of meeting locations.
	 *
	 * Items: A meeting location.
	 */
	collection?: {
		/**
		 * The type of meeting location (e.g. `physical`, `outbound_call`, `inbound_call`, `custom`, `google_conference`, `zoom_conference`, `microsoft_teams_conference`).
		 */
		kind?: string;
		/**
		 * Whether the location is connected (for conferencing integrations).
		 */
		connected?: boolean;
	}[];
};

/**
 * List user meeting locations
 * Returns a list of meeting locations available to a specified user.
 */
export async function listUserMeetingLocations(
	this: EndpointFunctionThis,
	payload: {
		input: ListUserMeetingLocationsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListUserMeetingLocationsOutput> {
	const response = await this.endpointCaller<ListUserMeetingLocationsOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listUserMeetingLocations',
		},
		payload,
	);
	return response.output;
}
