// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListGroupsInput = {
	/**
	 * The unique ID of the customer's Google Workspace account, or the `my_customer` alias for your own account. Use this field instead of `domain` to list the groups of all domains of a multi-domain account. Either `customer` or `domain` is required. Cannot be combined with `userKey`.
	 */
	customer?: string;
	/**
	 * The domain name. Use this field to get groups from only one domain. To return the groups of all domains of an account, use `customer` instead. Either `customer` or `domain` is required.
	 */
	domain?: string;
	/**
	 * Query string search. Contains one or more search clauses, each with a field, operator, and value, for example `memberKey=address@email.com`. See [Search for groups](https://developers.google.com/workspace/admin/directory/v1/guides/search-groups) for the available options.
	 */
	query?: string;
	/**
	 * Email or immutable ID of a user. If set, only the groups that this user is a member of are listed. Cannot be used together with `customer`.
	 */
	userKey?: string;
	/**
	 * Whether to return results in ascending or descending order. Results are sorted by email.
	 */
	sortOrder?: '' | 'ASCENDING' | 'DESCENDING';
	/**
	 * Maximum number of results to return. The maximum allowed value is 200.
	 */
	maxResults?: number;
	/**
	 * Token to specify the next page in the list. Use the `nextPageToken` value from the previous response.
	 */
	pageToken?: string;
};

export type ListGroupsOutput = {
	/**
	 * The kind of the resource.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
	/**
	 * A list of group objects.
	 *
	 * Items: A group.
	 */
	groups?: {
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
	}[];
	/**
	 * Token used to access the next page of the result. Pass it as `pageToken` to get the next page.
	 */
	nextPageToken?: string;
};

/**
 * List groups
 * Retrieves all groups of a domain or of a user given a user key (paginated).
 */
export async function listGroups(
	this: EndpointFunctionThis,
	payload: {
		input: ListGroupsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListGroupsOutput> {
	const response = await this.endpointCaller<ListGroupsOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'listGroups',
		},
		payload,
	);
	return response.output;
}
