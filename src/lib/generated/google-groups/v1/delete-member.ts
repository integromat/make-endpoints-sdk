// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMemberInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
	/**
	 * The member's (group or user) primary email address, alias, or unique ID.
	 */
	memberKey: string;
};

export type DeleteMemberOutput = Record<string, never>;

/**
 * Remove a member from a group
 * Removes a member from a group.
 */
export async function deleteMember(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteMemberInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteMemberOutput> {
	const response = await this.endpointCaller<DeleteMemberOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'deleteMember',
		},
		payload,
	);
	return response.output;
}
