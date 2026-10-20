// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetEventInput = {
	/**
	 * The unique identifier of the scheduled event. You can find this in the event URI: `https://api.calendly.com/scheduled_events/{uuid}`.
	 */
	uuid: string;
};

export type GetEventOutput = {
	/**
	 * The scheduled event resource.
	 */
	resource?: {
		/**
		 * Canonical reference (unique identifier) for the event.
		 */
		uri?: string;
		/**
		 * The event name.
		 */
		name?: string;
		/**
		 * The internal meeting notes in plain text.
		 */
		meeting_notes_plain?: string;
		/**
		 * The internal meeting notes formatted with HTML.
		 */
		meeting_notes_html?: string;
		/**
		 * Indicates if the event is `active` or `canceled`.
		 */
		status?: string;
		/**
		 * The moment the event was scheduled to start in UTC time (e.g. `2020-01-02T03:04:05.678123Z`).
		 */
		start_time?: string;
		/**
		 * The moment the event was scheduled to end in UTC time (e.g. `2020-01-02T03:04:05.678123Z`).
		 */
		end_time?: string;
		/**
		 * The URI of the event type associated with this event.
		 */
		event_type?: string;
		/**
		 * The event location.
		 */
		location?: {
			/**
			 * The location type.
			 */
			type?: string;
			/**
			 * The location value (URL, address, or phone number depending on type).
			 */
			location?: string;
			/**
			 * Additional information about the location.
			 */
			additional_info?: string;
			/**
			 * The video conference meeting URL (e.g. Zoom, WebEx).
			 */
			join_url?: string;
			/**
			 * The video conferencing status.
			 */
			status?: string;
			/**
			 * Additional video conferencing data.
			 */
			data?: {
				/**
				 * The conference ID.
				 */
				id?: string;
				/**
				 * The conference password.
				 */
				password?: string;
				/**
				 * Telephony dial-in information.
				 */
				telephony?: {
					/**
					 * List of dial-in numbers.
					 *
					 * Items: A dial-in number.
					 */
					callInNumbers?: {
						/**
						 * The label for the number.
						 */
						label?: string;
						/**
						 * The phone number.
						 */
						callInNumber?: string;
						/**
						 * The toll type (e.g. `toll`, `tollFree`).
						 */
						tollType?: string;
					}[];
				};
			};
		};
		/**
		 * The number of invitees for the event.
		 */
		invitees_counter?: {
			/**
			 * The total number of invitees.
			 */
			total?: number;
			/**
			 * The number of active (not canceled) invitees.
			 */
			active?: number;
			/**
			 * The maximum number of invitees allowed.
			 */
			limit?: number;
		};
		/**
		 * The moment when the event was created (e.g. `2020-01-02T03:04:05.678123Z`).
		 */
		created_at?: string;
		/**
		 * The moment when the event was last updated (e.g. `2020-01-02T03:04:05.678123Z`).
		 */
		updated_at?: string;
		/**
		 * The list of event memberships (hosts).
		 *
		 * Items: A host of the event.
		 */
		event_memberships?: {
			/**
			 * The URI of the user.
			 */
			user?: string;
			/**
			 * The email of the user.
			 */
			user_email?: string;
			/**
			 * The name of the user.
			 */
			user_name?: string;
			/**
			 * The buffered start time of the event for this user.
			 */
			buffered_start_time?: string;
			/**
			 * The buffered end time of the event for this user.
			 */
			buffered_end_time?: string;
		}[];
		/**
		 * Additional people added to the event by an invitee.
		 *
		 * Items: A guest added to the event.
		 */
		event_guests?: {
			/**
			 * The email of the guest.
			 */
			email?: string;
			/**
			 * The moment when the guest was created.
			 */
			created_at?: string;
			/**
			 * The moment when the guest was last updated.
			 */
			updated_at?: string;
		}[];
		/**
		 * Cancellation details, populated when the event is canceled.
		 */
		cancellation?: {
			/**
			 * The name of the person who canceled.
			 */
			canceled_by?: string;
			/**
			 * The type of the canceler (e.g. `host`, `invitee`).
			 */
			canceler_type?: string;
			/**
			 * The reason for the cancellation.
			 */
			reason?: string;
			/**
			 * The moment when the cancellation was created.
			 */
			created_at?: string;
		};
		/**
		 * The calendar event associated with this scheduled event (deprecated).
		 */
		calendar_event?: {
			/**
			 * The calendar provider.
			 */
			kind?: string;
			/**
			 * The calendar event ID.
			 */
			external_id?: string;
		};
	};
};

/**
 * Get event
 * Returns information about a specified scheduled event.
 */
export async function getEvent(
	this: EndpointFunctionThis,
	payload: {
		input: GetEventInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetEventOutput> {
	const response = await this.endpointCaller<GetEventOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'getEvent',
		},
		payload,
	);
	return response.output;
}
