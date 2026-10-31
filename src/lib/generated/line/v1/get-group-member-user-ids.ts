// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGroupMemberUserIdsInput = {
	/**
	 * ID of the group chat.
	 */
	groupId: string;
	/**
	 * Continuation token. Set it to the value of `next` from the previous response to get the next page of user IDs.
	 */
	start?: string;
};

export type GetGroupMemberUserIdsOutput = {
	/**
	 * List of user IDs of the members in the group chat. Only users of LINE for iOS and LINE for Android are included.
	 *
	 * Items: User ID of a member.
	 */
	memberIds?: string[];
	/**
	 * A continuation token to get the next array of user IDs of the members in the group chat. Returned only when there are remaining user IDs that were not returned in `memberIds` in the original request.
	 */
	next?: string;
};

/**
 * List group member user IDs
 * Returns the user IDs of the members of a group chat that the LINE Official Account is in.
 */
export async function getGroupMemberUserIds(
	this: EndpointFunctionThis,
	payload: {
		input: GetGroupMemberUserIdsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetGroupMemberUserIdsOutput> {
	const response = await this.endpointCaller<GetGroupMemberUserIdsOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getGroupMemberUserIds',
		},
		payload,
	);
	return response.output;
}
