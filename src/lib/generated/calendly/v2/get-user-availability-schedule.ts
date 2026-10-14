// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserAvailabilityScheduleInput = {
	/**
	 * The unique identifier of the availability schedule.
	 */
	uuid: string;
};

export type GetUserAvailabilityScheduleOutput = {
	/**
	 * The user availability schedule resource.
	 */
	resource?: {
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
	};
};

/**
 * Get user availability schedule
 * Returns information about a specified user availability schedule.
 */
export async function getUserAvailabilitySchedule(
	this: EndpointFunctionThis,
	payload: {
		input: GetUserAvailabilityScheduleInput;
		connectionId: number;
	},
): Promise<GetUserAvailabilityScheduleOutput> {
	const response = await this.endpointCaller<GetUserAvailabilityScheduleOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'getUserAvailabilitySchedule',
		},
		payload,
	);
	return response.output;
}
