// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEventTypeAvailabilitySchedulesInput = {
	/**
	 * The URI of the event type. For example, `https://api.calendly.com/event_types/ABCD1234`.
	 */
	event_type: string;
	/**
	 * The number of rows to return.
	 */
	count?: number;
	/**
	 * The token to pass to get the next portion of the collection.
	 */
	page_token?: string;
};

export type ListEventTypeAvailabilitySchedulesOutput = {
	/**
	 * The list of availability schedules.
	 *
	 * Items: An availability schedule.
	 */
	collection?: {
		/**
		 * The URI of the associated event type.
		 */
		event_type?: string;
		/**
		 * The availability setting.
		 */
		availability_setting?: string;
		/**
		 * The availability rule.
		 */
		availability_rule?: {
			/**
			 * URI of the availability rule.
			 */
			uri?: string;
			/**
			 * Name of the rule.
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
	}[];
	/**
	 * Pagination information.
	 */
	pagination?: {
		/**
		 * The number of rows returned.
		 */
		count?: number;
		/**
		 * URI to get the next page.
		 */
		next_page?: string;
		/**
		 * URI to get the previous page.
		 */
		previous_page?: string;
		/**
		 * Token for the next page.
		 */
		next_page_token?: string;
		/**
		 * Token for the previous page.
		 */
		previous_page_token?: string;
	};
};

/**
 * List event type availability schedules
 * Returns a list of availability schedules for an event type.
 */
export async function listEventTypeAvailabilitySchedules(
	this: EndpointFunctionThis,
	payload: {
		input: ListEventTypeAvailabilitySchedulesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListEventTypeAvailabilitySchedulesOutput> {
	const response = await this.endpointCaller<ListEventTypeAvailabilitySchedulesOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listEventTypeAvailabilitySchedules',
		},
		payload,
	);
	return response.output;
}
