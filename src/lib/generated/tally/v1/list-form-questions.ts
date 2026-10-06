// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFormQuestionsInput = {
	/**
	 * The ID of the form whose questions should be returned. For example, `mexJoq`.
	 */
	id: string;
};

export type ListFormQuestionsOutput = {
	/**
	 * List of questions in the form.
	 *
	 * Items: A question in the form.
	 */
	questions?: {
		/**
		 * Unique identifier of the question.
		 */
		id?: string;
		/**
		 * Question block type. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CHECKBOX`.
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
	 * Whether the form has at least one response.
	 */
	hasResponses?: boolean;
};

/**
 * List form questions
 * Returns a list of all questions in a form.
 */
export async function listFormQuestions(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormQuestionsInput;
		connectionId: number;
	},
): Promise<ListFormQuestionsOutput> {
	const response = await this.endpointCaller<ListFormQuestionsOutput>(
		{
			appName: 'tally',
			appVersion: 1,
			endpointName: 'listFormQuestions',
		},
		payload,
	);
	return response.output;
}
