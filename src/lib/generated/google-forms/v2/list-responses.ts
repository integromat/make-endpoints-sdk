// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListResponsesInput = {
	/**
	 * The ID of the form whose responses to list.
	 */
	formId: string;
	/**
	 * Which form responses to return. Supported filters: `timestamp > N` or `timestamp >= N`, where N is an RFC 3339 timestamp. Example: `timestamp >= 2024-01-01T00:00:00Z`.
	 */
	filter?: string;
	/**
	 * The maximum number of responses to return. If unspecified or zero, at most 5000 responses are returned.
	 */
	pageSize?: number;
	/**
	 * A page token returned by a previous list response. If set, the form and the values of the filter must be the same as for the original request.
	 */
	pageToken?: string;
};

export type ListResponsesOutput = {
	/**
	 * The returned form responses.
	 *
	 * Items: A single form response.
	 */
	responses?: {
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
		 * The actual answers to the questions, keyed by question ID.
		 */
		answers?: Record<string, JSONValue>;
		/**
		 * The total number of points the respondent received. Only set for graded quizzes.
		 */
		totalScore?: number;
	}[];
	/**
	 * If set, there are more responses. Provide this as `pageToken` in a subsequent request to get the next page.
	 */
	nextPageToken?: string;
};

/**
 * List responses
 * Lists a form's responses.
 */
export async function listResponses(
	this: EndpointFunctionThis,
	payload: {
		input: ListResponsesInput;
		connectionId: number;
	},
): Promise<ListResponsesOutput> {
	const response = await this.endpointCaller<ListResponsesOutput>(
		{
			appName: 'google-forms',
			appVersion: 2,
			endpointName: 'listResponses',
		},
		payload,
	);
	return response.output;
}
