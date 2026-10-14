// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListWorkspacesInput = Record<string, never>;

export type ListWorkspacesOutput = Record<string, never>;

/**
 * List workspaces
 * Returns a page of the account's workspaces with their owners and subscribers.
 */
export async function listWorkspaces(
	this: EndpointFunctionThis,
	payload: {
		input: ListWorkspacesInput;
		connectionId: number;
	},
): Promise<ListWorkspacesOutput> {
	const response = await this.endpointCaller<ListWorkspacesOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listWorkspaces',
		},
		payload,
	);
	return response.output;
}
