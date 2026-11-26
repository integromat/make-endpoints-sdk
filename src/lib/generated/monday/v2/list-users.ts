// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListUsersInput = Record<string, never>;

export type ListUsersOutput = Record<string, never>;

/**
 * List users
 * Returns a page of users in the account matching the given filters.
 */
export async function listUsers(
	this: EndpointFunctionThis,
	payload: {
		input: ListUsersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListUsersOutput>> {
	const response = await this.endpointCaller<ListUsersOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listUsers',
		},
		payload,
	);
	return response;
}
