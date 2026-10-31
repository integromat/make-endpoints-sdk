// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetRoomMemberUserIdsInput = {
	/**
	 * ID of the multi-person chat.
	 */
	roomId: string;
	/**
	 * Continuation token. Set it to the value of `next` from the previous response to get the next page of user IDs.
	 */
	start?: string;
};

export type GetRoomMemberUserIdsOutput = {
	/**
	 * List of user IDs of the members in the multi-person chat. Only users of LINE for iOS and LINE for Android are included.
	 *
	 * Items: User ID of a member.
	 */
	memberIds?: string[];
	/**
	 * A continuation token to get the next array of user IDs of the members in the multi-person chat. Returned only when there are remaining user IDs that were not returned in `memberIds` in the original request.
	 */
	next?: string;
};

/**
 * List room member user IDs
 * Returns the user IDs of the members of a multi-person chat that the LINE Official Account is in.
 */
export async function getRoomMemberUserIds(
	this: EndpointFunctionThis,
	payload: {
		input: GetRoomMemberUserIdsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetRoomMemberUserIdsOutput> {
	const response = await this.endpointCaller<GetRoomMemberUserIdsOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getRoomMemberUserIds',
		},
		payload,
	);
	return response.output;
}
