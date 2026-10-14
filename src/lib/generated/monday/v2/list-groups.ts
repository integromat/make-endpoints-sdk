// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

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
	},
): Promise<ListGroupsOutput> {
	const response = await this.endpointCaller<ListGroupsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listGroups',
		},
		payload,
	);
	return response.output;
}
