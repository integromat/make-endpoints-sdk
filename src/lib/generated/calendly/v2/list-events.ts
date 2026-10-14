// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEventsInput = {
	/**
	 * Return events for the organization associated with this URI. For example, `https://api.calendly.com/organizations/ABCD1234`. Requires admin or owner privileges on the organization.
	 */
	organization?: string;
	/**
	 * Return events scheduled with the user associated with this URI. Defaults to the authenticated user when neither `user` nor `organization` is provided.
	 */
	user?: string;
	/**
	 * Return events scheduled with the invitee associated with this email address.
	 */
	invitee_email?: string;
	/**
	 * Whether the scheduled event is active or canceled.
	 */
	status?: '' | 'active' | 'canceled';
	/**
	 * Order results by the specified field and direction.
	 */
	sort?: '' | 'start_time:asc' | 'start_time:desc';
	/**
	 * Include events with start times after this time. Use UTC format: `2020-01-02T03:04:05.678123Z`.
	 */
	min_start_time?: string;
	/**
	 * Include events with start times prior to this time. Use UTC format: `2020-01-02T03:04:05.678123Z`.
	 */
	max_start_time?: string;
	/**
	 * Return events for the group associated with this URI. Requires organization admin/owner or group admin privilege.
	 */
	group?: string;
	/**
	 * The number of rows to return. Minimum `1`, maximum `100`.
	 */
	count?: number;
	/**
	 * The token to pass to get the next or previous portion of the collection. Obtained from `pagination.next_page_token` in a previous response.
	 */
	page_token?: string;
};

export type ListEventsOutput = {
	/**
	 * The list of scheduled events.
	 *
	 * Items: A scheduled event.
	 */
	collection?: {
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
		 * The moment the event was scheduled to start in UTC time.
		 */
		start_time?: string;
		/**
		 * The moment the event was scheduled to end in UTC time.
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
			 * The location value.
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
		 * The number of invitees.
		 */
		invitees_counter?: {
			/**
			 * Total invitees.
			 */
			total?: number;
			/**
			 * Active invitees.
			 */
			active?: number;
			/**
			 * Maximum allowed.
			 */
			limit?: number;
		};
		/**
		 * When the event was created.
		 */
		created_at?: string;
		/**
		 * When the event was last updated.
		 */
		updated_at?: string;
		/**
		 * The list of event memberships (hosts).
		 *
		 * Items: A host.
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
			 * Buffered start time for this user.
			 */
			buffered_start_time?: string;
			/**
			 * Buffered end time for this user.
			 */
			buffered_end_time?: string;
		}[];
		/**
		 * Additional people added by an invitee.
		 *
		 * Items: A guest.
		 */
		event_guests?: {
			/**
			 * The email of the guest.
			 */
			email?: string;
			/**
			 * When the guest was created.
			 */
			created_at?: string;
			/**
			 * When the guest was last updated.
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
			 * The type of canceler.
			 */
			canceler_type?: string;
			/**
			 * The reason for cancellation.
			 */
			reason?: string;
			/**
			 * When the cancellation was created.
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
		 * URI to get the next page of results.
		 */
		next_page?: string;
		/**
		 * URI to get the previous page of results.
		 */
		previous_page?: string;
		/**
		 * Token to pass as `page_token` for the next page.
		 */
		next_page_token?: string;
		/**
		 * Token to pass as `page_token` for the previous page.
		 */
		previous_page_token?: string;
	};
};

/**
 * List events
 * Returns a list of scheduled events.
 */
export async function listEvents(
	this: EndpointFunctionThis,
	payload: {
		input: ListEventsInput;
		connectionId: number;
	},
): Promise<ListEventsOutput> {
	const response = await this.endpointCaller<ListEventsOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listEvents',
		},
		payload,
	);
	return response.output;
}
