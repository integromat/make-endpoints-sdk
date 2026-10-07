// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListMessagesInput = {
	/**
	 * The query is used to filter the returned messages.
	 */
	q?: string;
	labelIds?: string[];
	/**
	 * Include messages from spam and trash in the results.
	 */
	includeSpamTrash?: boolean;
	/**
	 * Page token to retrieve a specific page of results in the list.
	 */
	pageToken?: string;
	/**
	 * Maximum number of messages to return.
	 */
	maxResults?: number;
};

export type ListMessagesOutput = {
	/**
	 * List of messages.
	 */
	messages?: {
		/**
		 * The immutable ID of the message.
		 */
		id?: string;
		/**
		 * The ID of the thread the message belongs to.
		 */
		threadId?: string;
	}[];
	/**
	 * Token to retrieve the next page of results in the list.
	 */
	nextPageToken?: string;
	/**
	 * Estimated total number of results.
	 */
	resultSizeEstimate?: number;
};

/**
 * List messages
 * Returns a list of messages filtered by query.
 */
export async function listMessages(
	this: EndpointFunctionThis,
	payload: {
		input: ListMessagesInput;
		connectionId: number;
	},
): Promise<ListMessagesOutput> {
	const response = await this.endpointCaller<ListMessagesOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'listMessages',
		},
		payload,
	);
	return response.output;
}
