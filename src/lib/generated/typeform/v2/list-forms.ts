// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFormsInput = {
	/**
	 * Returns items that contain the specified string.
	 */
	search?: string;
	/**
	 * Retrieve typeforms for the specified workspace.
	 */
	workspace_id?: string;
	/**
	 * Filter forms by their `settings.is_public` property.
	 */
	is_public?: boolean;
	/**
	 * Field to sort the results by. Currently only `created_at` and `last_updated_at` are accepted.
	 */
	sort_by?: '' | 'created_at' | 'last_updated_at';
	/**
	 * Sort order. Ascending `asc` or descending `desc`.
	 */
	order_by?: '' | 'asc' | 'desc';
	/**
	 * The page of results to retrieve. Default `1` is the first page of results.
	 */
	page?: number;
	/**
	 * Number of results to retrieve per page. Default is 10. Maximum is 200.
	 */
	page_size?: number;
};

export type ListFormsOutput = {
	/**
	 * Total number of items in the retrieved collection.
	 */
	total_items?: number;
	/**
	 * Number of pages.
	 */
	page_count?: number;
	/**
	 * JSON descriptions for all forms in your Typeform account (public and private).
	 *
	 * Items: A listed form.
	 */
	items?: {
		/**
		 * Unique ID of the form.
		 */
		id?: string;
		/**
		 * Time of the form's creation, in ISO 8601 UTC format.
		 */
		created_at?: string;
		/**
		 * Time of the last update, in ISO 8601 UTC format.
		 */
		last_updated_at?: string;
		/**
		 * Public/private setting for the listed form.
		 */
		settings?: {
			/**
			 * True if the form is public. Otherwise false.
			 */
			is_public?: boolean;
		};
		/**
		 * URL for the typeform.
		 */
		self?: {
			/**
			 * API URL for this form.
			 */
			href?: string;
		};
		/**
		 * Theme the typeform uses.
		 */
		theme?: {
			/**
			 * URL for the theme.
			 */
			href?: string;
		};
		/**
		 * Related URLs for the form.
		 */
		_links?: {
			/**
			 * URL for the actual form.
			 */
			display?: string;
			/**
			 * URL for the responses public API.
			 */
			responses?: string;
		};
	}[];
};

/**
 * List forms
 * Retrieves a list of forms in the Typeform account.
 */
export async function listForms(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormsInput;
		connectionId: number;
	},
): Promise<ListFormsOutput> {
	const response = await this.endpointCaller<ListFormsOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'listForms',
		},
		payload,
	);
	return response.output;
}
