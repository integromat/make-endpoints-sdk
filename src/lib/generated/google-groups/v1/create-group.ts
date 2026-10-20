// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateGroupInput = {
	/**
	 * The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The email must be unique.
	 */
	email: string;
	/**
	 * The group's display name.
	 */
	name?: string;
	/**
	 * An extended description to help users determine the purpose of a group. Maximum length is 4,096 characters.
	 */
	description?: string;
};

export type CreateGroupOutput = {
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
 * Create a group
 * Creates a group.
 */
export async function createGroup(
	this: EndpointFunctionThis,
	payload: {
		input: CreateGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateGroupOutput> {
	const response = await this.endpointCaller<CreateGroupOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'createGroup',
		},
		payload,
	);
	return response.output;
}
