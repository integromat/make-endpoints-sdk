// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEventTypeAvailableTimesInput = {
	/**
	 * The URI of the event type for which to retrieve available times. For example, `https://api.calendly.com/event_types/ABCD1234`.
	 */
	event_type: string;
	/**
	 * Start of the time range to check for available times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`.
	 */
	start_time: string;
	/**
	 * End of the time range to check for available times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`. Maximum `31` days from `start_time`.
	 */
	end_time: string;
};

export type ListEventTypeAvailableTimesOutput = {
	/**
	 * The list of available time slots.
	 *
	 * Items: An available time slot.
	 */
	collection?: {
		/**
		 * The number of remaining invitee spots.
		 */
		invitees_remaining?: number;
		/**
		 * The URL to schedule at this time.
		 */
		scheduling_url?: string;
		/**
		 * The start time of the slot.
		 */
		start_time?: string;
		/**
		 * The status of the time slot (`available` or `unavailable`).
		 */
		status?: string;
	}[];
};

/**
 * List event type available times
 * Returns a list of available times for an event type within a specified date range.
 */
export async function listEventTypeAvailableTimes(
	this: EndpointFunctionThis,
	payload: {
		input: ListEventTypeAvailableTimesInput;
		connectionId: number;
	},
): Promise<ListEventTypeAvailableTimesOutput> {
	const response = await this.endpointCaller<ListEventTypeAvailableTimesOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listEventTypeAvailableTimes',
		},
		payload,
	);
	return response.output;
}
