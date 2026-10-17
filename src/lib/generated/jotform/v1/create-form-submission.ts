// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateFormSubmissionInput = {
	/**
	 * ID of the form to submit to.
	 */
	formId: string;
	/**
	 * Answers to submit, one entry per question.
	 */
	answers: {
		/**
		 * ID (qid) of the question being answered. Use List form questions to find qids.
		 */
		qid: string;
		/**
		 * Answer value. Use a plain string or number for simple fields, or an object of sub-field values (for example `{"first":"John","last":"Doe"}`) for compound fields such as Full name or Address.
		 */
		value: Record<string, JSONValue>;
	}[];
};

export type CreateFormSubmissionOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * The created submission.
	 */
	content?: {
		/**
		 * ID of the new submission.
		 */
		submissionID?: string;
		/**
		 * API URL of the new submission.
		 */
		URL?: string;
	};
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * Submit a form
 * Submits answers to the specified form.
 */
export async function createFormSubmission(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFormSubmissionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateFormSubmissionOutput> {
	const response = await this.endpointCaller<CreateFormSubmissionOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'createFormSubmission',
		},
		payload,
	);
	return response.output;
}
