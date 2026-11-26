// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListGroupsInput = Record<string, never>;

export type ListGroupsOutput = Record<string, never>;

/**
 * List groups
 * Returns the groups of a board.
 */
export async function listGroups(
	this: EndpointFunctionThis,
	payload: {
		input: ListGroupsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListGroupsOutput>> {
	const response = await this.endpointCaller<ListGroupsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listGroups',
		},
		payload,
	);
	return response;
}
