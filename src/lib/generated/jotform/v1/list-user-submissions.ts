// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListUserSubmissionsInput = {
	/**
	 * Maximum number of submissions to return (API max 1000).
	 */
	limit?: number;
	/**
	 * Number of submissions to skip, for pagination.
	 */
	offset?: number;
	/**
	 * JSON filter object, for example `{"status":"ACTIVE"}`. See the [Jotform API docs](https://api.jotform.com/docs/#submissions).
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

export type ListUserSubmissionsOutput = {
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
		 * When the submission was last updated.
		 */
		updated_at?: string;
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
 * List user submissions
 * Lists submissions across all forms in the connected account.
 */
export async function listUserSubmissions(
	this: EndpointFunctionThis,
	payload: {
		input: ListUserSubmissionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListUserSubmissionsOutput> {
	const response = await this.endpointCaller<ListUserSubmissionsOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'listUserSubmissions',
		},
		payload,
	);
	return response.output;
}
