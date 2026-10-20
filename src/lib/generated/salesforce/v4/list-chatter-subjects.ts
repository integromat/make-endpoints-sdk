// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListChatterSubjectsInput = {
	/**
	 * Which Chatter subjects to list. Users returns people. Groups returns Chatter groups. To post on a record, or as the connected user, skip this endpoint and pass the record Id or me to Post a message to a Chatter feed.
	 */
	resource: 'users' | 'groups';
};

export type ListChatterSubjectsOutput = {
	/**
	 * Token of the current page, when returned.
	 */
	currentPageToken?: string;
	/**
	 * Path of the current page.
	 */
	currentPageUrl?: string;
	/**
	 * Token of the next page, when available.
	 */
	nextPageToken?: string;
	/**
	 * Path of the next page, when available. To get the next page, call Arbitrary call with GET and this value as URL, unchanged.
	 */
	nextPageUrl?: string;
	/**
	 * Token of the previous page, when available.
	 */
	previousPageToken?: string;
	/**
	 * Path of the previous page, when available.
	 */
	previousPageUrl?: string;
	/**
	 * Total number of matching subjects.
	 */
	total?: number;
	/**
	 * Complete Salesforce Chatter user resources for this page.
	 *
	 * Items: One complete Salesforce Chatter user resource.
	 */
	users?: Record<string, JSONValue>[];
	/**
	 * Complete Salesforce Chatter group resources for this page.
	 *
	 * Items: One complete Salesforce Chatter group resource.
	 */
	groups?: Record<string, JSONValue>[];
};

/**
 * List Chatter subjects
 * Returns Chatter users or groups that can parent a feed post.
 */
export async function listChatterSubjects(
	this: EndpointFunctionThis,
	payload: {
		input: ListChatterSubjectsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListChatterSubjectsOutput> {
	const response = await this.endpointCaller<ListChatterSubjectsOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'listChatterSubjects',
		},
		payload,
	);
	return response.output;
}
