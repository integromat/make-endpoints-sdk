// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetEventTypeInput = {
	/**
	 * The unique identifier of the event type. You can find this in the event type URI: `https://api.calendly.com/event_types/{uuid}`.
	 */
	uuid: string;
};

export type GetEventTypeOutput = {
	/**
	 * The event type resource.
	 */
	resource?: {
		/**
		 * Canonical reference (unique identifier) for the event type.
		 */
		uri?: string;
		/**
		 * The name of the event type.
		 */
		name?: string;
		/**
		 * Whether the event type is active and visible on the scheduling page.
		 */
		active?: boolean;
		/**
		 * The URL slug used in the scheduling page URL.
		 */
		slug?: string;
		/**
		 * The public URL where invitees can book this event type.
		 */
		scheduling_url?: string;
		/**
		 * The duration of the event in minutes.
		 */
		duration?: number;
		/**
		 * Array of duration options in minutes. Always null for adhoc event types.
		 *
		 * Items: A duration option in minutes.
		 */
		duration_options?: number[];
		/**
		 * The kind of event type (e.g. `solo` for individual, `group` for group events).
		 */
		kind?: string;
		/**
		 * The event type classification (e.g. `StandardEventType`, `AdhocEventType`).
		 */
		type?: string;
		/**
		 * The hexadecimal color value displayed in the UI (e.g. `#fff200`).
		 */
		color?: string;
		/**
		 * The event type description in plain text, shown to invitees.
		 */
		description_plain?: string;
		/**
		 * The event type description formatted with HTML.
		 */
		description_html?: string;
		/**
		 * Internal notes for the host. Not visible to invitees.
		 */
		internal_note?: string;
		/**
		 * The pooling type for round-robin events (e.g. `round_robin`, `collective`).
		 */
		pooling_type?: string;
		/**
		 * Position order of the event type, starting with 0 (for display purposes).
		 */
		position?: number;
		/**
		 * Whether the event type is secret (hidden from the public scheduling page but accessible via direct link).
		 */
		secret?: boolean;
		/**
		 * The booking method (e.g. `instant`, `poll`).
		 */
		booking_method?: string;
		/**
		 * Whether the event type requires payment from the invitee.
		 */
		is_paid?: boolean;
		/**
		 * Whether the event type is managed by an organization admin rather than the individual user.
		 */
		admin_managed?: boolean;
		/**
		 * The locale of the event type's scheduling page (e.g. `en`, `fr`, `de`).
		 */
		locale?: string;
		/**
		 * The profile of the event type owner.
		 */
		profile?: {
			/**
			 * The display name of the profile.
			 */
			name?: string;
			/**
			 * The URI of the user or organization that owns this event type.
			 */
			owner?: string;
			/**
			 * The profile type (e.g. `User`, `Team`).
			 */
			type?: string;
		};
		/**
		 * Custom questions configured for the event type, shown to invitees during booking.
		 *
		 * Items: A custom question for invitees.
		 */
		custom_questions?: {
			/**
			 * The question text shown to invitees.
			 */
			name?: string;
			/**
			 * The question type (e.g. `string`, `text`, `phone_number`, `select`, `radios`).
			 */
			type?: string;
			/**
			 * The display position of the question in the list.
			 */
			position?: number;
			/**
			 * Whether the question is currently enabled.
			 */
			enabled?: boolean;
			/**
			 * Whether the invitee must answer this question.
			 */
			required?: boolean;
			/**
			 * Whether an 'Other' free-text option is included for select/radio questions.
			 */
			include_other?: boolean;
			/**
			 * Available answer choices for select and radio question types.
			 *
			 * Items: An answer choice.
			 */
			answer_choices?: string[];
		}[];
		/**
		 * The locations configured for the event type.
		 *
		 * Items: An event location.
		 */
		locations?: {
			/**
			 * The location type (e.g. `physical`, `outbound_call`, `zoom_conference`).
			 */
			kind?: string;
			/**
			 * The location value (URL, address, or phone number depending on the kind).
			 */
			location?: string;
			/**
			 * Additional information about the location.
			 */
			additional_info?: string;
			/**
			 * The phone number for inbound call locations.
			 */
			phone_number?: string;
		}[];
		/**
		 * The moment when the event type was created.
		 */
		created_at?: string;
		/**
		 * The moment when the event type was last updated.
		 */
		updated_at?: string;
		/**
		 * The moment when the event type was deleted. Null if not deleted.
		 */
		deleted_at?: string;
	};
};

/**
 * Get event type
 * Returns information about a specified event type.
 */
export async function getEventType(
	this: EndpointFunctionThis,
	payload: {
		input: GetEventTypeInput;
		connectionId: number;
	},
): Promise<GetEventTypeOutput> {
	const response = await this.endpointCaller<GetEventTypeOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'getEventType',
		},
		payload,
	);
	return response.output;
}
