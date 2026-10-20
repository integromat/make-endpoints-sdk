// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetMemberInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
	/**
	 * The member's (group or user) primary email address, alias, or unique ID.
	 */
	memberKey: string;
};

export type GetMemberOutput = {
	/**
	 * The unique ID of the group member. A member ID can be used as a member key in request URIs.
	 */
	id?: string;
	/**
	 * The member's email address.
	 */
	email?: string;
	/**
	 * The member's role in the group: `OWNER`, `MANAGER`, or `MEMBER`.
	 */
	role?: string;
	/**
	 * The type of group member: `CUSTOMER`, `EXTERNAL`, `GROUP`, or `USER`.
	 */
	type?: string;
	/**
	 * Status of the member (immutable).
	 */
	status?: string;
	/**
	 * The member's mail delivery preferences: `ALL_MAIL`, `DAILY`, `DIGEST`, `DISABLED`, or `NONE`.
	 */
	delivery_settings?: string;
	/**
	 * The type of the API resource. For members, the value is `admin#directory#member`.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
};

/**
 * Get a member
 * Retrieves a group member's properties.
 */
export async function getMember(
	this: EndpointFunctionThis,
	payload: {
		input: GetMemberInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetMemberOutput> {
	const response = await this.endpointCaller<GetMemberOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'getMember',
		},
		payload,
	);
	return response.output;
}
