// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUsersInput = {
	/**
	 * The index of the first item to return (page offset).
	 */
	startAt?: number;
	/**
	 * The maximum number of users to return per page. Limited to 1000.
	 */
	maxResults?: number;
};

export type ListUsersOutput = Record<string, never>;

/**
 * List users
 * Returns a paginated list of all users, in the order they were created.
 */
export async function listUsers(
	this: EndpointFunctionThis,
	payload: {
		input: ListUsersInput;
		connectionId: number;
	},
): Promise<ListUsersOutput> {
	const response = await this.endpointCaller<ListUsersOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'listUsers',
		},
		payload,
	);
	return response.output;
}
