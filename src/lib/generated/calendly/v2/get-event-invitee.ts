// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetEventInviteeInput = {
	/**
	 * The unique identifier of the scheduled event.
	 */
	event_uuid: string;
	/**
	 * The unique identifier of the invitee.
	 */
	invitee_uuid: string;
};

export type GetEventInviteeOutput = {
	/**
	 * The invitee resource.
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
		 * The invitee's status (`active` or `canceled`).
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
		 * The invitee's phone number for SMS reminders.
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
		 * URI of the routing form submission if applicable.
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
		 * The invitee's responses to custom questions.
		 *
		 * Items: A question and the invitee's answer.
		 */
		questions_and_answers?: {
			/**
			 * The question text.
			 */
			question?: string;
			/**
			 * The invitee's response.
			 */
			answer?: string;
			/**
			 * The position of the question.
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
	};
};

/**
 * Get event invitee
 * Returns information about a specified event invitee.
 */
export async function getEventInvitee(
	this: EndpointFunctionThis,
	payload: {
		input: GetEventInviteeInput;
		connectionId: number;
	},
): Promise<GetEventInviteeOutput> {
	const response = await this.endpointCaller<GetEventInviteeOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'getEventInvitee',
		},
		payload,
	);
	return response.output;
}
