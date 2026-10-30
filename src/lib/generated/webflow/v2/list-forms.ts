// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListFormsInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
};

export type ListFormsOutput = {
	/**
	 * Forms of the site.
	 *
	 * Items: A Webflow form.
	 */
	forms?: {
		/**
		 * The Form name displayed on the site.
		 */
		displayName?: string;
		/**
		 * Date that the Form was created on.
		 */
		createdOn?: string;
		/**
		 * Date that the Form was last updated on.
		 */
		lastUpdated?: string;
		/**
		 * A collection of form field objects.
		 */
		fields?: Record<string, JSONValue>;
		/**
		 * Settings for form responses.
		 */
		responseSettings?: {
			/**
			 * The URL or path to redirect the user to after form submission.
			 */
			redirectUrl?: string;
			/**
			 * The HTTP request method to use for the redirectUrl (e.g. POST or GET).
			 */
			redirectMethod?: string;
			/**
			 * The action to take after form submission.
			 */
			redirectAction?: string;
			/**
			 * Whether to send an email confirmation to the user.
			 */
			sendEmailConfirmation?: boolean;
		};
		/**
		 * The unique ID for the Form.
		 */
		id?: string;
		/**
		 * The unique ID of the Site the Form belongs to.
		 */
		siteId?: string;
		/**
		 * The unique ID corresponding to the site's Domain name.
		 */
		siteDomainId?: string;
		/**
		 * The unique ID for the Page on which the Form is placed.
		 */
		pageId?: string;
		/**
		 * The user-visible name of the Page where the Form is placed.
		 */
		pageName?: string;
		/**
		 * The unique ID of the Form element.
		 */
		formElementId?: string;
		/**
		 * The unique ID of the Workspace the Site belongs to.
		 */
		workspaceId?: string;
		/**
		 * ID of the component the form is placed in; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.
		 */
		componentId?: string;
		/**
		 * Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.
		 */
		componentElementId?: string;
	}[];
	/**
	 * Pagination object.
	 */
	pagination?: {
		/**
		 * The limit used for pagination.
		 */
		limit?: number;
		/**
		 * The offset used for pagination.
		 */
		offset?: number;
		/**
		 * The total number of records.
		 */
		total?: number;
	};
};

/**
 * List forms
 * Lists the forms of a site.
 */
export async function listForms(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListFormsOutput> {
	const response = await this.endpointCaller<ListFormsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listForms',
		},
		payload,
	);
	return response.output;
}
