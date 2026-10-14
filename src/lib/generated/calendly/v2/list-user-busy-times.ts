// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUserBusyTimesInput = {
	/**
	 * The URI of the user whose busy times to list. For example, `https://api.calendly.com/users/ABCD1234`.
	 */
	user: string;
	/**
	 * Start of the time range to check for busy times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`.
	 */
	start_time: string;
	/**
	 * End of the time range to check for busy times. Must be in UTC format: `2020-01-02T03:04:05.678123Z`. Maximum `7` days from `start_time`.
	 */
	end_time: string;
};

export type ListUserBusyTimesOutput = {
	/**
	 * The list of busy time periods.
	 *
	 * Items: A busy time period.
	 */
	collection?: {
		/**
		 * The type of busy time (`calendly` or `external`).
		 */
		type?: string;
		/**
		 * The start of the busy time period.
		 */
		start_time?: string;
		/**
		 * The end of the busy time period.
		 */
		end_time?: string;
		/**
		 * The buffered start time (includes buffer before event).
		 */
		buffered_start_time?: string;
		/**
		 * The buffered end time (includes buffer after event).
		 */
		buffered_end_time?: string;
		/**
		 * The associated event details (only for Calendly events).
		 */
		event?: {
			/**
			 * The URI of the scheduled event.
			 */
			uri?: string;
		};
	}[];
};

/**
 * List user busy times
 * Returns a list of busy time periods for a specified user within a date range.
 */
export async function listUserBusyTimes(
	this: EndpointFunctionThis,
	payload: {
		input: ListUserBusyTimesInput;
		connectionId: number;
	},
): Promise<ListUserBusyTimesOutput> {
	const response = await this.endpointCaller<ListUserBusyTimesOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listUserBusyTimes',
		},
		payload,
	);
	return response.output;
}
