// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchUsersInput = {
	/**
	 * A query string matched against `displayName` and `emailAddress` (prefix match) to find relevant users. Required unless `Account ID` or `Property` is provided.
	 */
	query?: string;
	/**
	 * A query string matched exactly against a user's account ID. Required unless `Query` or `Property` is provided.
	 */
	accountId?: string;
	/**
	 * A query string used to search user properties, specified by property key path. Required unless `Query` or `Account ID` is provided.
	 */
	property?: string;
	/**
	 * The index of the first item to return (page offset).
	 */
	startAt?: number;
	/**
	 * The maximum number of users to return per page.
	 */
	maxResults?: number;
};

export type SearchUsersOutput = Record<string, never>;

/**
 * Search users
 * Finds users matching a query, account ID, or property.
 */
export async function searchUsers(
	this: EndpointFunctionThis,
	payload: {
		input: SearchUsersInput;
		connectionId: number;
	},
): Promise<SearchUsersOutput> {
	const response = await this.endpointCaller<SearchUsersOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'searchUsers',
		},
		payload,
	);
	return response.output;
}
