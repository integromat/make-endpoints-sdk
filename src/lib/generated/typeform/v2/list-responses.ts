// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListResponsesInput = {
	/**
	 * Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.
	 */
	form_id: string;
	/**
	 * Search for an exact phrase within answer values, hidden field values, and variable values.
	 */
	query?: string;
	/**
	 * Show only these fields in the answers section. If a response has no answers for a specified field, the value is `null`.
	 *
	 * Items: A field ID to include in the answers section.
	 */
	fields?: string[];
	/**
	 * Limit to responses that include at least one of these fields in the answers section.
	 *
	 * Items: A field ID that must appear in the answers section.
	 */
	answered_fields?: string[];
	/**
	 * Limit the request to these `response_id` values.
	 *
	 * Items: A response ID to include.
	 */
	included_response_ids?: string[];
	/**
	 * Response IDs to exclude from the result.
	 *
	 * Items: A response ID to exclude.
	 */
	excluded_response_ids?: string[];
	/**
	 * Limit responses to these types, as a multi-select (sent as a comma-separated list). This changes how `since`/`until` filter: `completed` uses `submitted_at`, `partial` uses `staged_at`, otherwise `landed_at`. Default is `completed`. The deprecated `completed` query parameter is not exposed.
	 */
	response_type?: '' | 'started' | 'partial' | 'completed';
	/**
	 * Limit to responses submitted since this date and time, inclusive. The API accepts ISO 8601 UTC (`2020-03-20T14:00:59`) or a Unix timestamp in seconds.
	 */
	since?: string;
	/**
	 * Limit to responses submitted until this date and time, inclusive. The API accepts ISO 8601 UTC (`2020-03-20T14:00:59`) or a Unix timestamp in seconds.
	 */
	until?: string;
	/**
	 * Return responses submitted after this cursor (exclusive).
	 */
	after?: string;
	/**
	 * Return responses submitted before this cursor (exclusive).
	 */
	before?: string;
	/**
	 * How to sort the returned responses. Default is `submitted_at,desc` for completed responses, `staged_at,desc` for partial responses, and `landed_at,desc` for started responses.
	 */
	sort?: string;
	/**
	 * Maximum number of responses to return. If the form has more than 1000 responses, use `since`/`until` or `before`/`after` to narrow the request.
	 */
	page_size?: number;
};

export type ListResponsesOutput = {
	/**
	 * Total number of items in the retrieved collection.
	 */
	total_items?: number;
	/**
	 * Number of pages.
	 */
	page_count?: number;
	/**
	 * Responses to the form.
	 *
	 * Items: A form response.
	 */
	items?: {
		/**
		 * Unique ID for the form landing.
		 */
		landing_id?: string;
		/**
		 * Secret token for the response.
		 */
		token?: string;
		/**
		 * Unique ID for the response.
		 */
		response_id?: string;
		/**
		 * Date and time the respondent landed on the form, in ISO 8601 UTC format.
		 */
		landed_at?: string;
		/**
		 * Date and time the respondent submitted the form, in ISO 8601 UTC format. Unsubmitted responses may use a placeholder timestamp.
		 */
		submitted_at?: string;
		/**
		 * Browser and platform metadata for the response.
		 */
		metadata?: {
			/**
			 * User agent string of the respondent's browser.
			 */
			user_agent?: string;
			/**
			 * Platform the respondent used.
			 */
			platform?: string;
			/**
			 * Referer URL.
			 */
			referer?: string;
			/**
			 * Network identifier for the respondent.
			 */
			network_id?: string;
			/**
			 * Browser identifier.
			 */
			browser?: string;
		};
		/**
		 * Answers submitted for this response. Partial or started responses may omit answers.
		 *
		 * Items: An answer to a form field.
		 */
		answers?: {
			/**
			 * The form field this answer belongs to.
			 */
			field?: {
				/**
				 * Unique ID of the field.
				 */
				id?: string;
				/**
				 * Readable name of the field.
				 */
				ref?: string;
				/**
				 * Type of the field, for example `short_text` or `multiple_choice`.
				 */
				type?: string;
			};
			/**
			 * Answer type returned by the API. One of `text`, `boolean`, `email`, `number`, `date`, `choice`, `choices`, `file_url`, `url`, or `phone_number`.
			 */
			type?: string;
			/**
			 * Text answer. Present when `type` is `text`.
			 */
			text?: string;
			/**
			 * Boolean answer. Present when `type` is `boolean`.
			 */
			boolean?: boolean;
			/**
			 * Email answer. Present when `type` is `email`.
			 */
			email?: string;
			/**
			 * Numeric answer. Present when `type` is `number`.
			 */
			number?: number;
			/**
			 * Date answer. Present when `type` is `date`.
			 */
			date?: string;
			/**
			 * URL answer. Present when `type` is `url`.
			 */
			url?: string;
			/**
			 * URL of an uploaded file. Present when `type` is `file_url`. Use this URL with an authorized request to download the file.
			 */
			file_url?: string;
			/**
			 * Phone number answer. Present when `type` is `phone_number`.
			 */
			phone_number?: string;
			/**
			 * Single-choice answer. Present when `type` is `choice`.
			 */
			choice?: {
				/**
				 * ID of the selected choice.
				 */
				id?: string;
				/**
				 * Readable name of the selected choice.
				 */
				ref?: string;
				/**
				 * Label of the selected choice.
				 */
				label?: string;
				/**
				 * Free-text value when the respondent selected Other.
				 */
				other?: string;
			};
			/**
			 * Multi-choice answer. Present when `type` is `choices`.
			 */
			choices?: {
				/**
				 * IDs of the selected choices.
				 *
				 * Items: ID of a selected choice.
				 */
				ids?: string[];
				/**
				 * Readable names of the selected choices.
				 *
				 * Items: Readable name of a selected choice.
				 */
				refs?: string[];
				/**
				 * Labels of the selected choices.
				 *
				 * Items: Label of a selected choice.
				 */
				labels?: string[];
				/**
				 * Free-text value when the respondent selected Other.
				 */
				other?: string;
			};
		}[];
		/**
		 * Hidden Field values for this response. Open object of hidden field names to values.
		 */
		hidden?: Record<string, JSONValue>;
		/**
		 * Calculated values for this response.
		 */
		calculated?: {
			/**
			 * Calculated score.
			 */
			score?: number;
		};
		/**
		 * Variable values for this response.
		 *
		 * Items: A form variable value.
		 */
		variables?: {
			/**
			 * Variable name.
			 */
			key?: string;
			/**
			 * Variable type, for example `number` or `text`.
			 */
			type?: string;
			/**
			 * Numeric value when `type` is `number`.
			 */
			number?: number;
			/**
			 * Text value when `type` is `text`.
			 */
			text?: string;
		}[];
	}[];
};

/**
 * List responses
 * Retrieves responses for a form.
 */
export async function listResponses(
	this: EndpointFunctionThis,
	payload: {
		input: ListResponsesInput;
		connectionId: number;
	},
): Promise<ListResponsesOutput> {
	const response = await this.endpointCaller<ListResponsesOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'listResponses',
		},
		payload,
	);
	return response.output;
}
