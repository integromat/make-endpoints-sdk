// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateEventInviteeInput = {
	/**
	 * The URI of the event type to book. For example, `https://api.calendly.com/event_types/ABCD1234`.
	 */
	event_type: string;
	/**
	 * The start time of the event in UTC format. For example, `2024-01-15T10:00:00Z`.
	 */
	start_time: string;
	/**
	 * The invitee details.
	 */
	invitee: {
		/**
		 * The full name of the invitee. Required if `first_name` is not provided.
		 */
		name?: string;
		/**
		 * The first name of the invitee. Required if `name` is not provided.
		 */
		first_name?: string;
		/**
		 * The last name of the invitee.
		 */
		last_name?: string;
		/**
		 * The email address of the invitee.
		 */
		email: string;
		/**
		 * The timezone of the invitee in IANA format. For example, `America/New_York`.
		 */
		timezone: string;
		/**
		 * Phone number for SMS reminders. For example, `+14155551234`.
		 */
		text_reminder_number?: string;
	};
	/**
	 * The event location.
	 */
	location?: {
		/**
		 * The location type.
		 */
		kind:
			| 'physical'
			| 'outbound_call'
			| 'inbound_call'
			| 'ask_invitee'
			| 'custom'
			| 'google_conference'
			| 'zoom_conference'
			| 'gotomeeting_conference'
			| 'microsoft_teams_conference'
			| 'webex_conference';
		/**
		 * The location value. Required when `kind` is `physical`, `outbound_call`, `ask_invitee`, or `custom`.
		 */
		location?: string;
		/**
		 * The phone number. Required when `kind` is `inbound_call`.
		 */
		phone_number?: string;
	};
	/**
	 * Responses to custom questions on the event type.
	 *
	 * Items: A question and the invitee's answer.
	 */
	questions_and_answers?: {
		/**
		 * The question text. Must exactly match the question in the event type.
		 */
		question?: string;
		/**
		 * The invitee's response to the question.
		 */
		answer?: string;
		/**
		 * The position of the question in the list.
		 */
		position?: number;
	}[];
	/**
	 * UTM and Salesforce tracking parameters.
	 */
	tracking?: {
		/**
		 * The UTM campaign parameter.
		 */
		utm_campaign?: string;
		/**
		 * The UTM source parameter.
		 */
		utm_source?: string;
		/**
		 * The UTM medium parameter.
		 */
		utm_medium?: string;
		/**
		 * The UTM content parameter.
		 */
		utm_content?: string;
		/**
		 * The UTM term parameter.
		 */
		utm_term?: string;
		/**
		 * The Salesforce record unique identifier.
		 */
		salesforce_uuid?: string;
	};
	/**
	 * Emails of invitee guests. Maximum 10.
	 *
	 * @maxItems 10
	 *
	 * Items: The guest's email address.
	 */
	event_guests?:
		| []
		| [string]
		| [string, string]
		| [string, string, string]
		| [string, string, string, string]
		| [string, string, string, string, string]
		| [string, string, string, string, string, string]
		| [string, string, string, string, string, string, string]
		| [string, string, string, string, string, string, string, string]
		| [string, string, string, string, string, string, string, string, string]
		| [string, string, string, string, string, string, string, string, string, string];
};

export type CreateEventInviteeOutput = {
	/**
	 * The created invitee resource.
	 */
	resource?: {
		/**
		 * Canonical reference for the invitee.
		 */
		uri?: string;
		/**
		 * The invitee's email address.
		 */
		email?: string;
		/**
		 * The invitee's full name.
		 */
		name?: string;
		/**
		 * The invitee's first name.
		 */
		first_name?: string;
		/**
		 * The invitee's last name.
		 */
		last_name?: string;
		/**
		 * The invitee's status.
		 */
		status?: string;
		/**
		 * The invitee's timezone.
		 */
		timezone?: string;
		/**
		 * The URI of the scheduled event.
		 */
		event?: string;
		/**
		 * Phone number for SMS reminders.
		 */
		text_reminder_number?: string;
		/**
		 * Whether the invitee has rescheduled.
		 */
		rescheduled?: boolean;
		/**
		 * URI of the old invitee if rescheduled.
		 */
		old_invitee?: string;
		/**
		 * URI of the new invitee if rescheduled.
		 */
		new_invitee?: string;
		/**
		 * URL to cancel the event.
		 */
		cancel_url?: string;
		/**
		 * URL to reschedule the event.
		 */
		reschedule_url?: string;
		/**
		 * When the invitee was created.
		 */
		created_at?: string;
		/**
		 * When the invitee was last updated.
		 */
		updated_at?: string;
		/**
		 * The URI of the user who scheduled this invitee.
		 */
		invitee_scheduled_by?: string;
		/**
		 * URI of the routing form submission.
		 */
		routing_form_submission?: string;
		/**
		 * Cancellation details if the invitee or event was canceled.
		 */
		cancellation?: {
			/**
			 * Name of the person who canceled.
			 */
			canceled_by?: string;
			/**
			 * The reason for the cancellation.
			 */
			reason?: string;
			/**
			 * The type of canceler (e.g. `host`, `invitee`).
			 */
			canceler_type?: string;
			/**
			 * The moment when the cancellation was created.
			 */
			created_at?: string;
		};
		/**
		 * No show details if the invitee was marked as no show.
		 */
		no_show?: {
			/**
			 * URI of the no show record.
			 */
			uri?: string;
			/**
			 * When the no show was created.
			 */
			created_at?: string;
		};
		/**
		 * Payment details if the event is paid.
		 */
		payment?: {
			/**
			 * The payment processor's ID.
			 */
			external_id?: string;
			/**
			 * The payment provider.
			 */
			provider?: string;
			/**
			 * The payment amount.
			 */
			amount?: number;
			/**
			 * The payment currency.
			 */
			currency?: string;
			/**
			 * The payment terms.
			 */
			terms?: string;
			/**
			 * Whether the payment was successful.
			 */
			successful?: boolean;
		};
		/**
		 * Reconfirmation details.
		 */
		reconfirmation?: {
			/**
			 * When the reconfirmation was created.
			 */
			created_at?: string;
			/**
			 * When the invitee confirmed.
			 */
			confirmed_at?: string;
		};
		/**
		 * How the event was scheduled.
		 */
		scheduling_method?: string;
		/**
		 * The invitee's responses.
		 *
		 * Items: A question and answer.
		 */
		questions_and_answers?: {
			/**
			 * The question.
			 */
			question?: string;
			/**
			 * The answer.
			 */
			answer?: string;
			/**
			 * The position.
			 */
			position?: number;
		}[];
		/**
		 * Tracking parameters.
		 */
		tracking?: {
			/**
			 * UTM campaign.
			 */
			utm_campaign?: string;
			/**
			 * UTM source.
			 */
			utm_source?: string;
			/**
			 * UTM medium.
			 */
			utm_medium?: string;
			/**
			 * UTM content.
			 */
			utm_content?: string;
			/**
			 * UTM term.
			 */
			utm_term?: string;
			/**
			 * Salesforce UUID.
			 */
			salesforce_uuid?: string;
		};
	};
};

/**
 * Create event invitee
 * Creates a new booking for an event invitee. Requires a Calendly paid plan.
 */
export async function createEventInvitee(
	this: EndpointFunctionThis,
	payload: {
		input: CreateEventInviteeInput;
		connectionId: number;
	},
): Promise<CreateEventInviteeOutput> {
	const response = await this.endpointCaller<CreateEventInviteeOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'createEventInvitee',
		},
		payload,
	);
	return response.output;
}
