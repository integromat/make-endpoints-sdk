// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFormResponsesInput = {
	/**
	 * The ID of the form whose submissions should be returned. For example, `mexJoq`.
	 */
	id: string;
	/**
	 * Filter submissions by status. One of `all`, `completed`, or `partial`.
	 */
	filter?: '' | 'all' | 'completed' | 'partial';
	/**
	 * Return submissions submitted on or after this date (ISO 8601).
	 */
	startDate?: string;
	/**
	 * Return submissions submitted on or before this date (ISO 8601).
	 */
	endDate?: string;
	/**
	 * Return submissions that came after this submission ID.
	 */
	afterId?: string;
	/**
	 * Page number to return. Default is `1`. This endpoint returns a single page; increment `page` while `hasMore` is true to fetch more results.
	 */
	page?: number;
	/**
	 * Number of submissions to return per page. Default is `50`. Maximum is `500`.
	 */
	limit?: number;
};

export type ListFormResponsesOutput = {
	/**
	 * Current page number.
	 */
	page?: number;
	/**
	 * Number of submissions returned on this page.
	 */
	limit?: number;
	/**
	 * Whether there are more pages of submissions.
	 */
	hasMore?: boolean;
	/**
	 * Total submission counts grouped by status filter.
	 */
	totalNumberOfSubmissionsPerFilter?: {
		/**
		 * Total number of all submissions.
		 */
		all?: number;
		/**
		 * Total number of completed submissions.
		 */
		completed?: number;
		/**
		 * Total number of partial submissions.
		 */
		partial?: number;
	};
	/**
	 * List of form questions included with the submissions.
	 *
	 * Items: A question in the form.
	 */
	questions?: {
		/**
		 * Unique identifier of the question.
		 */
		id?: string;
		/**
		 * Question block type. For example, `INPUT_TEXT` or `CHECKBOX`.
		 */
		type?: string;
		/**
		 * Whether the question title was customized by the form author.
		 */
		isTitleModifiedByUser?: boolean;
		/**
		 * ID of the form this question belongs to.
		 */
		formId?: string;
		/**
		 * Whether the question has been deleted.
		 */
		isDeleted?: boolean;
		/**
		 * Number of responses recorded for this question.
		 */
		numberOfResponses?: number;
		/**
		 * Date and time when the question was created.
		 */
		createdAt?: string;
		/**
		 * Date and time when the question was last updated.
		 */
		updatedAt?: string;
		/**
		 * Input fields that belong to this question.
		 *
		 * Items: A field that belongs to the question.
		 */
		fields?: {
			/**
			 * Unique identifier of the field.
			 */
			uuid?: string;
			/**
			 * Field block type.
			 */
			type?: string;
			/**
			 * UUID of the block group this field belongs to.
			 */
			blockGroupUuid?: string;
			/**
			 * Question type of the field. For example, `INPUT_TEXT`.
			 */
			questionType?: string;
		}[];
	}[];
	/**
	 * List of form submissions on this page.
	 *
	 * Items: A form submission and its answers.
	 */
	submissions?: {
		/**
		 * Unique identifier of the submission.
		 */
		id?: string;
		/**
		 * ID of the form this submission belongs to.
		 */
		formId?: string;
		/**
		 * ID of the respondent who submitted the form.
		 */
		respondentId?: string;
		/**
		 * Whether the submission is completed.
		 */
		isCompleted?: boolean;
		/**
		 * Date and time when the submission was submitted.
		 */
		submittedAt?: string;
		/**
		 * Date and time when the submission was created.
		 */
		createdAt?: string;
		/**
		 * Date and time when the submission was last updated.
		 */
		updatedAt?: string;
		/**
		 * Signed URL to view the submission in a browser. Includes an access token and has no expiry.
		 */
		previewUrl?: string;
		/**
		 * Signed URL to download the submission as a PDF. Includes an access token and has no expiry.
		 */
		pdfUrl?: string;
		/**
		 * Answers to form questions. Only questions that have been answered appear in this array.
		 *
		 * Items: An answer to a form question.
		 */
		responses?: {
			/**
			 * Unique identifier of this response.
			 */
			id?: string;
			/**
			 * ID of the form this response belongs to.
			 */
			formId?: string;
			/**
			 * ID of the question this answer belongs to.
			 */
			questionId?: string;
			/**
			 * ID of the respondent who submitted the answer.
			 */
			respondentId?: string;
			/**
			 * ID of the parent submission. May be `null`.
			 */
			submissionId?: string;
			/**
			 * UUID of the respondent session.
			 */
			sessionUuid?: string;
			/**
			 * The answer value for this question. Type varies by question type (text, number, boolean, array, or object) and may be `null`.
			 */
			answer?: string;
			/**
			 * Formatted answer, for example for number inputs with custom formatting.
			 */
			formattedAnswer?: string;
			/**
			 * Date and time when the response was created.
			 */
			createdAt?: string;
			/**
			 * Date and time when the response was last updated.
			 */
			updatedAt?: string;
		}[];
	}[];
};

/**
 * List form responses
 * Returns a paginated list of form submissions with their responses.
 */
export async function listFormResponses(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormResponsesInput;
		connectionId: number;
	},
): Promise<ListFormResponsesOutput> {
	const response = await this.endpointCaller<ListFormResponsesOutput>(
		{
			appName: 'tally',
			appVersion: 1,
			endpointName: 'listFormResponses',
		},
		payload,
	);
	return response.output;
}
