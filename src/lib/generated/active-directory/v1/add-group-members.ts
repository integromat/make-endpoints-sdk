// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddGroupMembersInput = {
	/**
	 * The ID of the group to add the members to.
	 */
	groupId: string;
	/**
	 * The references to the directory objects to add. You can add up to 20 members per request. Sent as `members@odata.bind`.
	 *
	 * Items: The full reference to a directory object, for example `https://graph.microsoft.com/v1.0/directoryObjects/{id}`. For Microsoft 365 groups, the object must be a user.
	 */
	members: string[];
};

export type AddGroupMembersOutput = Record<string, never>;

/**
 * Add members to a group
 * Adds up to 20 members to a security or Microsoft 365 group in one request.
 */
export async function addGroupMembers(
	this: EndpointFunctionThis,
	payload: {
		input: AddGroupMembersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddGroupMembersOutput> {
	const response = await this.endpointCaller<AddGroupMembersOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'addGroupMembers',
		},
		payload,
	);
	return response.output;
}
