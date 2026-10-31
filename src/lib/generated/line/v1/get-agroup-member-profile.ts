// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAGroupMemberProfileInput = {
	/**
	 * ID of the group chat.
	 */
	groupId: string;
	/**
	 * ID of the user.
	 */
	userId: string;
};

export type GetAGroupMemberProfileOutput = {
	/**
	 * User's display name.
	 */
	displayName?: string;
	/**
	 * User ID.
	 */
	userId?: string;
	/**
	 * URL of the user's profile image. Not included in the response if the user doesn't have a profile image.
	 */
	pictureUrl?: string;
};

/**
 * Get a group member profile
 * Returns the profile of a member of a group chat that the LINE Official Account is in.
 */
export async function getAgroupMemberProfile(
	this: EndpointFunctionThis,
	payload: {
		input: GetAGroupMemberProfileInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetAGroupMemberProfileOutput> {
	const response = await this.endpointCaller<GetAGroupMemberProfileOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getAGroupMemberProfile',
		},
		payload,
	);
	return response.output;
}
