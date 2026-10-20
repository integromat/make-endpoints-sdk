// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddMemberToGroupInput = {
	/**
	 * The unique identifier of the group to add the member to.
	 */
	groupId: string;
	/**
	 * The full URI of the directory object to add as a member. Must be in the format `https://graph.microsoft.com/v1.0/directoryObjects/{id}` or `https://graph.microsoft.com/v1.0/users/{id}`.
	 */
	directoryObjectUri: string;
};

export type AddMemberToGroupOutput = Record<string, never>;

/**
 * Add a member to a group
 * Adds a member to a Microsoft 365 group.
 */
export async function addMemberToGroup(
	this: EndpointFunctionThis,
	payload: {
		input: AddMemberToGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddMemberToGroupOutput> {
	const response = await this.endpointCaller<AddMemberToGroupOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'addMemberToGroup',
		},
		payload,
	);
	return response.output;
}
