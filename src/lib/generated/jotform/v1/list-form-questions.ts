// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListFormQuestionsInput = {
	/**
	 * ID of the form to list questions for.
	 */
	formId: string;
};

export type ListFormQuestionsOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * Object keyed by question ID (qid). Each value is a question definition object whose keys (for example `type`, `text`, `name`, `order`, `required`, `options`) vary depending on the question type.
	 */
	content?: Record<string, JSONValue>;
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * List form questions
 * Lists all questions of the specified form.
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
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'listFormQuestions',
		},
		payload,
	);
	return response.output;
}
