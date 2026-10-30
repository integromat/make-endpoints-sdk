// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListFormSubmissionsInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a form. Use the `listForms` endpoint to find it.
	 */
	form_id: string;
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
};

export type ListFormSubmissionsOutput = {
	/**
	 * Form submissions.
	 *
	 * Items: One form submission.
	 */
	formSubmissions?: {
		/**
		 * The unique ID of the Form submission.
		 */
		id?: string;
		/**
		 * The ID of the form the submission belongs to.
		 */
		formId?: string;
		/**
		 * The Form name displayed on the site.
		 */
		displayName?: string;
		/**
		 * The unique ID of the Site the Form belongs to.
		 */
		siteId?: string;
		/**
		 * The unique ID of the Workspace the Site belongs to.
		 */
		workspaceId?: string;
		/**
		 * Date that the Form was submitted on.
		 */
		dateSubmitted?: string;
		/**
		 * The data submitted in the Form.
		 */
		formResponse?: Record<string, JSONValue>;
		/**
		 * The ID of the locale the form was submitted from. `null` for primary-locale submissions or sites without localization.
		 */
		localeId?: string;
		/**
		 * The unique ID for the Page on which the Form is placed.
		 */
		pageId?: string;
		/**
		 * Relative path of the published page URL.
		 */
		publishedPath?: string;
		/**
		 * A list of fields from the submitted form. Returned by the GET endpoints (`listFormSubmissions`, `getFormSubmission`) only; the `updateFormSubmission` response omits it.
		 *
		 * Items: A field of the submitted form.
		 */
		schema?: {
			/**
			 * Form field name; matches a key of `formResponse`.
			 */
			fieldName?: string;
			/**
			 * Form field type, e.g. `FormTextInput`, `FormTextarea`.
			 */
			fieldType?: string;
			/**
			 * Element ID of the Form Field.
			 */
			fieldElementId?: string;
		}[];
		/**
		 * The unique ID of the Form element.
		 */
		formElementId?: string;
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
 * List form submissions
 * Lists the submissions of a form.
 */
export async function listFormSubmissions(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormSubmissionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListFormSubmissionsOutput> {
	const response = await this.endpointCaller<ListFormSubmissionsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listFormSubmissions',
		},
		payload,
	);
	return response.output;
}
