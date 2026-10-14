// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEventTypesInput = {
	/**
	 * Return event types for the user associated with this URI. For example, `https://api.calendly.com/users/ABCD1234`.
	 */
	user?: string;
	/**
	 * Return event types for the organization associated with this URI. Requires admin or owner privileges.
	 */
	organization?: string;
	/**
	 * Return only active (`true`) or inactive (`false`) event types.
	 */
	active?: boolean;
	/**
	 * Order results by the specified field and direction.
	 */
	sort?: '' | 'name:asc' | 'name:desc';
	/**
	 * The number of rows to return. Minimum `1`, maximum `100`.
	 */
	count?: number;
	/**
	 * The token to pass to get the next or previous portion of the collection.
	 */
	page_token?: string;
};

export type ListEventTypesOutput = {
	/**
	 * The list of event types.
	 *
	 * Items: An event type.
	 */
	collection?: {
		/**
		 * Canonical reference for the event type.
		 */
		uri?: string;
		/**
		 * The name of the event type.
		 */
		name?: string;
		/**
		 * Whether the event type is active.
		 */
		active?: boolean;
		/**
		 * The URL slug of the event type.
		 */
		slug?: string;
		/**
		 * The public scheduling URL for this event type.
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
		 * The kind of event type (e.g. `solo`, `group`).
		 */
		kind?: string;
		/**
		 * The event type classification.
		 */
		type?: string;
		/**
		 * The hexadecimal color value.
		 */
		color?: string;
		/**
		 * The description in plain text.
		 */
		description_plain?: string;
		/**
		 * The description in HTML.
		 */
		description_html?: string;
		/**
		 * Internal notes for the host.
		 */
		internal_note?: string;
		/**
		 * The pooling type for round-robin events.
		 */
		pooling_type?: string;
		/**
		 * Position order of the event type, starting with 0 (for display purposes).
		 */
		position?: number;
		/**
		 * Whether the event type is secret (hidden from the scheduling page).
		 */
		secret?: boolean;
		/**
		 * The booking method.
		 */
		booking_method?: string;
		/**
		 * Whether the event type requires payment.
		 */
		is_paid?: boolean;
		/**
		 * Whether the event type is admin managed.
		 */
		admin_managed?: boolean;
		/**
		 * The locale of the event type's scheduling page.
		 */
		locale?: string;
		/**
		 * The profile of the event type owner.
		 */
		profile?: {
			/**
			 * The profile name.
			 */
			name?: string;
			/**
			 * The URI of the owner.
			 */
			owner?: string;
			/**
			 * The profile type.
			 */
			type?: string;
		};
		/**
		 * Custom questions for the event type.
		 *
		 * Items: A custom question.
		 */
		custom_questions?: {
			/**
			 * The question text.
			 */
			name?: string;
			/**
			 * The question type.
			 */
			type?: string;
			/**
			 * The position of the question.
			 */
			position?: number;
			/**
			 * Whether the question is enabled.
			 */
			enabled?: boolean;
			/**
			 * Whether the question is required.
			 */
			required?: boolean;
			/**
			 * Whether an 'Other' option is included.
			 */
			include_other?: boolean;
			/**
			 * Available answer choices.
			 *
			 * Items: An answer choice.
			 */
			answer_choices?: string[];
		}[];
		/**
		 * The locations for the event type.
		 *
		 * Items: A location.
		 */
		locations?: {
			/**
			 * The location kind.
			 */
			kind?: string;
			/**
			 * The location value.
			 */
			location?: string;
			/**
			 * Additional information about the location.
			 */
			additional_info?: string;
			/**
			 * The phone number.
			 */
			phone_number?: string;
		}[];
		/**
		 * When the event type was created.
		 */
		created_at?: string;
		/**
		 * When the event type was last updated.
		 */
		updated_at?: string;
		/**
		 * The moment when the event type was deleted. Null if not deleted.
		 */
		deleted_at?: string;
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
 * List event types
 * Returns all event types associated with a specified user.
 */
export async function listEventTypes(
	this: EndpointFunctionThis,
	payload: {
		input: ListEventTypesInput;
		connectionId: number;
	},
): Promise<ListEventTypesOutput> {
	const response = await this.endpointCaller<ListEventTypesOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listEventTypes',
		},
		payload,
	);
	return response.output;
}
