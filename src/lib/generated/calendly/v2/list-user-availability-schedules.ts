// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUserAvailabilitySchedulesInput = {
	/**
	 * The URI of the user. For example, `https://api.calendly.com/users/ABCD1234`.
	 */
	user: string;
};

export type ListUserAvailabilitySchedulesOutput = {
	/**
	 * The list of availability schedules.
	 *
	 * Items: A user availability schedule.
	 */
	collection?: {
		/**
		 * Canonical reference for the schedule.
		 */
		uri?: string;
		/**
		 * Whether this is the default schedule.
		 */
		default?: boolean;
		/**
		 * The name of the schedule.
		 */
		name?: string;
		/**
		 * The URI of the user.
		 */
		user?: string;
		/**
		 * The timezone in IANA format.
		 */
		timezone?: string;
		/**
		 * The availability rules.
		 *
		 * Items: An availability rule.
		 */
		rules?: {
			/**
			 * Rule type (`wday` or `date`).
			 */
			type?: string;
			/**
			 * The weekday name.
			 */
			wday?: string;
			/**
			 * A specific date.
			 */
			date?: string;
			/**
			 * Time intervals.
			 *
			 * Items: A time interval.
			 */
			intervals?: {
				/**
				 * Start time in 24-hour format (e.g. `09:00`).
				 */
				from?: string;
				/**
				 * End time in 24-hour format (e.g. `17:00`).
				 */
				to?: string;
			}[];
		}[];
	}[];
};

/**
 * List user availability schedules
 * Returns a list of availability schedules for a specified user.
 */
export async function listUserAvailabilitySchedules(
	this: EndpointFunctionThis,
	payload: {
		input: ListUserAvailabilitySchedulesInput;
		connectionId: number;
	},
): Promise<ListUserAvailabilitySchedulesOutput> {
	const response = await this.endpointCaller<ListUserAvailabilitySchedulesOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listUserAvailabilitySchedules',
		},
		payload,
	);
	return response.output;
}
