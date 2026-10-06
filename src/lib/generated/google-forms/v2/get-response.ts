// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetResponseInput = {
	/**
	 * The ID of the form.
	 */
	formId: string;
	/**
	 * The ID of the response to retrieve.
	 */
	responseId: string;
};

export type GetResponseOutput = {
	/**
	 * The form ID.
	 */
	formId?: string;
	/**
	 * The response ID.
	 */
	responseId?: string;
	/**
	 * Timestamp for the first time the response was submitted, in RFC 3339 format.
	 */
	createTime?: string;
	/**
	 * Timestamp for the most recent time the response was submitted, in RFC 3339 format.
	 */
	lastSubmittedTime?: string;
	/**
	 * The email address of the respondent, if collected.
	 */
	respondentEmail?: string;
	/**
	 * The actual answers to the questions, keyed by question ID. Each value is an Answer object.
	 */
	answers?: Record<string, JSONValue>;
	/**
	 * The total number of points the respondent received. Only set if the form is a quiz and the response was graded.
	 */
	totalScore?: number;
};

/**
 * Get a response
 * Gets one response from a form.
 */
export async function getResponse(
	this: EndpointFunctionThis,
	payload: {
		input: GetResponseInput;
		connectionId: number;
	},
): Promise<GetResponseOutput> {
	const response = await this.endpointCaller<GetResponseOutput>(
		{
			appName: 'google-forms',
			appVersion: 2,
			endpointName: 'getResponse',
		},
		payload,
	);
	return response.output;
}
