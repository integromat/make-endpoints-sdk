// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGroupInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
};

export type GetGroupOutput = {
	/**
	 * The unique ID of the group. A group ID can be used as a group key in request URIs.
	 */
	id?: string;
	/**
	 * The group's email address.
	 */
	email?: string;
	/**
	 * The group's display name.
	 */
	name?: string;
	/**
	 * An extended description to help users determine the purpose of the group.
	 */
	description?: string;
	/**
	 * Whether the group was created by an administrator rather than a user.
	 */
	adminCreated?: boolean;
	/**
	 * The number of users that are direct members of the group, as an integer string. Members of child groups are not counted.
	 */
	directMembersCount?: string;
	/**
	 * The type of the API resource. For groups, the value is `admin#directory#group`.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
	/**
	 * The list of the group's alias email addresses.
	 *
	 * Items: An alias email address of the group.
	 */
	aliases?: string[];
	/**
	 * The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains.
	 *
	 * Items: A non-editable alias email address of the group.
	 */
	nonEditableAliases?: string[];
};

/**
 * Get a group
 * Retrieves a group's properties.
 */
export async function getGroup(
	this: EndpointFunctionThis,
	payload: {
		input: GetGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetGroupOutput> {
	const response = await this.endpointCaller<GetGroupOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'getGroup',
		},
		payload,
	);
	return response.output;
}
