// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetARoomMemberProfileInput = {
	/**
	 * ID of the multi-person chat.
	 */
	roomId: string;
	/**
	 * ID of the user.
	 */
	userId: string;
};

export type GetARoomMemberProfileOutput = {
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
 * Get a room member profile
 * Returns the profile of a member of a multi-person chat that the LINE Official Account is in.
 */
export async function getAroomMemberProfile(
	this: EndpointFunctionThis,
	payload: {
		input: GetARoomMemberProfileInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetARoomMemberProfileOutput> {
	const response = await this.endpointCaller<GetARoomMemberProfileOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getARoomMemberProfile',
		},
		payload,
	);
	return response.output;
}
