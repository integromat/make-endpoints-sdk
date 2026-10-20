// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateMemberInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
	/**
	 * The member's (group or user) primary email address, alias, or unique ID.
	 */
	memberKey: string;
	/**
	 * The member's email address. A member can be a user or another group. The email must be unique and cannot be an alias of another group.
	 */
	email?: string;
	/**
	 * The member's role in the group.
	 * `OWNER`: This role can send messages to the group, add or remove members, change member roles, change the group's settings, and delete the group. An owner must be a member of the group.
	 * `MANAGER`: This role is only available if Google Groups for Business is enabled in the Admin console. A manager can do everything an owner can, except make a member an owner or delete the group.
	 * `MEMBER`: This role can subscribe to a group, view discussion archives, and view the group's membership list.
	 */
	role?: '' | 'OWNER' | 'MANAGER' | 'MEMBER';
	/**
	 * The member's mail delivery preferences.
	 * `ALL_MAIL`: All messages, delivered as soon as they arrive.
	 * `DAILY`: No more than one message a day.
	 * `DIGEST`: Up to 25 messages bundled into a single message.
	 * `DISABLED`: Remove subscription.
	 * `NONE`: No messages.
	 */
	delivery_settings?: '' | 'ALL_MAIL' | 'DAILY' | 'DIGEST' | 'DISABLED' | 'NONE';
};

export type UpdateMemberOutput = {
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
 * Update a member
 * Updates the membership of a user in the specified group.
 */
export async function updateMember(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateMemberInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateMemberOutput> {
	const response = await this.endpointCaller<UpdateMemberOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'updateMember',
		},
		payload,
	);
	return response.output;
}
