// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveGroupMemberInput = {
	/**
	 * The ID of the group to remove the member from.
	 */
	groupId: string;
	/**
	 * The ID of the directory object (user, group, device, service principal or organizational contact) to remove from the group.
	 */
	memberId: string;
};

export type RemoveGroupMemberOutput = Record<string, never>;

/**
 * Remove a member from a group
 * Removes a member from a security or Microsoft 365 group.
 */
export async function removeGroupMember(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveGroupMemberInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RemoveGroupMemberOutput> {
	const response = await this.endpointCaller<RemoveGroupMemberOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'removeGroupMember',
		},
		payload,
	);
	return response.output;
}
