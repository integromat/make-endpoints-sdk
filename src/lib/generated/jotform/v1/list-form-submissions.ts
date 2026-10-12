// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListFormSubmissionsInput = {
	/**
	 * ID of the form to list submissions for.
	 */
	formId: string;
	/**
	 * Maximum number of submissions to return (API page size, max 100).
	 */
	limit?: number;
	/**
	 * Number of submissions to skip, for pagination.
	 */
	offset?: number;
	/**
	 * JSON filter object, for example `{"status":"ACTIVE"}`. See the [Jotform API docs](https://api.jotform.com/docs/#form-id-submissions).
	 */
	filter?: string;
	/**
	 * Field to order the results by.
	 */
	orderby?:
		| ''
		| 'id'
		| 'form_id'
		| 'IP'
		| 'created_at'
		| 'status'
		| 'new'
		| 'flag'
		| 'updated_at';
};

export type ListFormSubmissionsOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * The page of submissions.
	 */
	content?: {
		/**
		 * ID of the submission.
		 */
		id?: string;
		/**
		 * ID of the form this submission belongs to.
		 */
		form_id?: string;
		/**
		 * IP address of the submitter.
		 */
		ip?: string;
		/**
		 * When the submission was created.
		 */
		created_at?: string;
		/**
		 * When the submission was last updated.
		 */
		updated_at?: string;
		/**
		 * Status of the submission.
		 */
		status?: string;
		/**
		 * Whether the submission is unread.
		 */
		new?: string;
		/**
		 * Flag stored on the submission.
		 */
		flag?: string;
		/**
		 * Notes stored on the submission.
		 */
		notes?: string;
		/**
		 * Submitted answers keyed by question ID (qid). Shape varies per question type.
		 */
		answers?: Record<string, JSONValue>;
	}[];
	/**
	 * Pagination summary for this page.
	 */
	resultSet?: {
		/**
		 * Number of submissions skipped before this page.
		 */
		offset?: number;
		/**
		 * Maximum number of submissions requested for this page.
		 */
		limit?: number;
		/**
		 * Number of submissions in this page.
		 */
		count?: number;
	};
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * List form submissions
 * Lists submissions for the specified form.
 */
export async function listFormSubmissions(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormSubmissionsInput;
		connectionId: number;
	},
): Promise<ListFormSubmissionsOutput> {
	const response = await this.endpointCaller<ListFormSubmissionsOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'listFormSubmissions',
		},
		payload,
	);
	return response.output;
}
