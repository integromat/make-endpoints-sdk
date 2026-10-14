// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateEventTypeAvailabilityScheduleInput = {
	/**
	 * The URI of the event type. For example, `https://api.calendly.com/event_types/ABCD1234`.
	 */
	event_type: string;
	/**
	 * The availability rule to set. Updating rules overwrites all existing rules for the event type.
	 */
	availability_rule: {
		/**
		 * The timezone in IANA format. For example, `America/New_York`.
		 */
		timezone: string;
		/**
		 * The availability rules.
		 *
		 * Items: An availability rule entry.
		 */
		rules: {
			/**
			 * The rule type.
			 */
			type: 'wday' | 'date';
			/**
			 * The day of the week. Required when type is `wday`.
			 */
			wday?:
				| ''
				| 'sunday'
				| 'monday'
				| 'tuesday'
				| 'wednesday'
				| 'thursday'
				| 'friday'
				| 'saturday';
			/**
			 * A specific date in `YYYY-MM-DD` format. Required when type is `date`.
			 */
			date?: string;
			/**
			 * Time intervals. If empty, there is no availability for that day.
			 *
			 * Items: A time interval.
			 */
			intervals: {
				/**
				 * Start time in 24-hour format (e.g. `09:00`).
				 */
				from: string;
				/**
				 * End time in 24-hour format (e.g. `17:00`).
				 */
				to: string;
			}[];
		}[];
	};
	/**
	 * A user URI. Required when an admin or organization owner is updating a specific user's availability schedule.
	 */
	user?: string;
};

export type UpdateEventTypeAvailabilityScheduleOutput = {
	/**
	 * The updated availability schedule.
	 */
	resource?: {
		/**
		 * The URI of the associated event type.
		 */
		event_type?: string;
		/**
		 * The availability setting.
		 */
		availability_setting?: string;
		/**
		 * The updated availability rule.
		 */
		availability_rule?: {
			/**
			 * URI of the availability rule.
			 */
			uri?: string;
			/**
			 * Name of the availability rule.
			 */
			name?: string;
			/**
			 * Timezone in IANA format.
			 */
			timezone?: string;
			/**
			 * The URI of the user.
			 */
			user?: string;
			/**
			 * The individual rules.
			 *
			 * Items: A rule entry.
			 */
			rules?: {
				/**
				 * Rule type (`wday` or `date`).
				 */
				type?: string;
				/**
				 * The weekday name (e.g. `monday`).
				 */
				wday?: string;
				/**
				 * A specific date (e.g. `2030-12-31`).
				 */
				date?: string;
				/**
				 * Time intervals for this rule.
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
};

/**
 * Update event type availability schedule
 * Updates the availability schedule for an event type.
 */
export async function updateEventTypeAvailabilitySchedule(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateEventTypeAvailabilityScheduleInput;
		connectionId: number;
	},
): Promise<UpdateEventTypeAvailabilityScheduleOutput> {
	const response = await this.endpointCaller<UpdateEventTypeAvailabilityScheduleOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'updateEventTypeAvailabilitySchedule',
		},
		payload,
	);
	return response.output;
}
