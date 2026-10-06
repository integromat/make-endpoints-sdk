// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFormsInput = {
	/**
	 * Filter forms by workspace IDs. Leave empty to return forms from all accessible workspaces.
	 *
	 * Items: A workspace ID to include in the filter.
	 */
	workspaceIds?: string[];
	/**
	 * Page number to return. Default is `1`. This endpoint returns a single page; increment `page` while `hasMore` is true to fetch more results.
	 */
	page?: number;
	/**
	 * Number of forms to return per page. Default is `50`. Maximum is `500`.
	 */
	limit?: number;
};

export type ListFormsOutput = {
	/**
	 * Forms returned on this page.
	 *
	 * Items: A form the account can access.
	 */
	items?: {
		/**
		 * Unique identifier of the form.
		 */
		id?: string;
		/**
		 * Form name.
		 */
		name?: string;
		/**
		 * Whether the form name was customized by the form author.
		 */
		isNameModifiedByUser?: boolean;
		/**
		 * ID of the workspace that contains the form.
		 */
		workspaceId?: string;
		/**
		 * ID of the folder that contains the form, if any.
		 */
		folderId?: string;
		/**
		 * ID of the organization that owns the form.
		 */
		organizationId?: string;
		/**
		 * Form status. One of `BLANK`, `DRAFT`, or `PUBLISHED`.
		 */
		status?: string;
		/**
		 * Whether the form has unpublished draft blocks.
		 */
		hasDraftBlocks?: boolean;
		/**
		 * Number of submissions received for the form.
		 */
		numberOfSubmissions?: number;
		/**
		 * Whether the form is closed for new submissions.
		 */
		isClosed?: boolean;
		/**
		 * Position of the form in the list.
		 */
		index?: number;
		/**
		 * Payment amounts associated with the form.
		 *
		 * Items: A payment amount and currency for the form.
		 */
		payments?: {
			/**
			 * Payment amount.
			 */
			amount?: number;
			/**
			 * Payment currency code.
			 */
			currency?: string;
		}[];
		/**
		 * Date and time when the form was created.
		 */
		createdAt?: string;
		/**
		 * Date and time when the form was last updated.
		 */
		updatedAt?: string;
	}[];
	/**
	 * Current page number.
	 */
	page?: number;
	/**
	 * Number of forms returned on this page.
	 */
	limit?: number;
	/**
	 * Total number of forms matching the request.
	 */
	total?: number;
	/**
	 * Whether there are more pages of forms.
	 */
	hasMore?: boolean;
};

/**
 * List forms
 * Returns a list of all forms.
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
			appName: 'tally',
			appVersion: 1,
			endpointName: 'listForms',
		},
		payload,
	);
	return response.output;
}
