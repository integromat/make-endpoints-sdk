// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateFormSubmissionInput = {
	/**
	 * Unique identifier for the site the submission belongs to (`siteId` on the submission). Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a form submission. Use the `listFormSubmissions` endpoint to find it.
	 */
	form_submission_id: string;
	/**
	 * Hidden fields to set on the submission, one entry per field. Only fields defined as **hidden** in the form schema (see `getForm`) can be updated.
	 *
	 * Items: A hidden form field and its new value.
	 */
	formSubmissionData: {
		/**
		 * Name of the hidden field as defined on the form.
		 */
		key: string;
		/**
		 * The value to store in the hidden field.
		 */
		value: string;
	}[];
};

export type UpdateFormSubmissionOutput = {
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
	 * The unique ID of the Form element.
	 */
	formElementId?: string;
	/**
	 * Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.
	 */
	componentElementId?: string;
};

/**
 * Update a form submission
 * Updates hidden field values on a form submission.
 */
export async function updateFormSubmission(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFormSubmissionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateFormSubmissionOutput> {
	const response = await this.endpointCaller<UpdateFormSubmissionOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'updateFormSubmission',
		},
		payload,
	);
	return response.output;
}
