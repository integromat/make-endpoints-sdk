// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListMembersInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
	/**
	 * Return only members with these roles. If empty, members of all roles are returned.
	 */
	roles?: '' | 'OWNER' | 'MANAGER' | 'MEMBER';
	/**
	 * Whether to list indirect memberships. The default is `false`.
	 */
	includeDerivedMembership?: boolean;
	/**
	 * Maximum number of results to return. The maximum allowed value is 200.
	 */
	maxResults?: number;
	/**
	 * Token to specify the next page in the list. Use the `nextPageToken` value from the previous response.
	 */
	pageToken?: string;
};

export type ListMembersOutput = {
	/**
	 * The kind of the resource.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
	/**
	 * A list of member objects.
	 *
	 * Items: A group member.
	 */
	members?: {
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
	}[];
	/**
	 * Token used to access the next page of the result. Pass it as `pageToken` to get the next page.
	 */
	nextPageToken?: string;
};

/**
 * List members
 * Retrieves a paginated list of all members in a group.
 */
export async function listMembers(
	this: EndpointFunctionThis,
	payload: {
		input: ListMembersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListMembersOutput> {
	const response = await this.endpointCaller<ListMembersOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'listMembers',
		},
		payload,
	);
	return response.output;
}
