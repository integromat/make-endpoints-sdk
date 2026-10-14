// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListContactGroupsInput = {
	/**
	 * A field mask restricting which fields on the group are returned. Defaults to `metadata`, `groupType`, `memberCount` and `name` when left empty. See the [contactGroups.list reference](https://developers.google.com/people/api/rest/v1/contactGroups/list).
	 */
	groupFields?: '' | 'clientData' | 'groupType' | 'memberCount' | 'metadata' | 'name';
	/**
	 * The maximum number of contact groups to return. Valid values are between 1 and 1000, inclusive. Defaults to 30 if not set.
	 */
	pageSize?: number;
	/**
	 * A page token received as `nextPageToken` in a previous response. Provide it to retrieve the subsequent page of contact groups.
	 */
	pageToken?: string;
	/**
	 * A sync token received as `nextSyncToken` in a previous response. Provide it to return only the contact groups changed since that request; groups deleted meanwhile come back with `metadata.deleted` set to true.
	 */
	syncToken?: string;
};

export type ListContactGroupsOutput = {
	/**
	 * The list of contact groups. Members of the contact groups are not populated.
	 *
	 * Items: A contact group.
	 */
	contactGroups?: {
		/**
		 * The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`.
		 */
		resourceName?: string;
		/**
		 * The contact group name set by the group owner or a system provided name for system groups. For [`contactGroups.create`](https://developers.google.com/people/api/rest/v1/contactGroups/create) or [`contactGroups.update`](https://developers.google.com/people/api/rest/v1/contactGroups/update) the name must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error.
		 */
		name?: string;
		/**
		 * The group's client data.
		 *
		 * Items: Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
		 */
		clientData?: {
			/**
			 * The client specified value of the client data.
			 */
			value?: string;
			/**
			 * The client specified key of the client data.
			 */
			key?: string;
		}[];
		/**
		 * Metadata about the contact group.
		 */
		metadata?: {
			/**
			 * True if the contact group resource has been deleted. Populated only for [`ListContactGroups`](https://developers.google.com/people/api/rest/v1/contactgroups/list) requests that include a sync token.
			 */
			deleted?: boolean;
			/**
			 * The time the group was last updated.
			 */
			updateTime?: string;
		};
		/**
		 * The contact group type. Possible values: `USER_CONTACT_GROUP`, `SYSTEM_CONTACT_GROUP`.
		 */
		groupType?: string;
		/**
		 * The total number of contacts in the group irrespective of max members in specified in the request.
		 */
		memberCount?: number;
		/**
		 * The list of contact person resource names that are members of the contact group. The field is only populated for GET requests and will only return as many members as `maxMembers` in the get request.
		 *
		 * Items: A single member resource names value.
		 */
		memberResourceNames?: string[];
		/**
		 * The name translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale for system groups names. Group names set by the owner are the same as name.
		 */
		formattedName?: string;
		/**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
		 */
		etag?: string;
	}[];
	/**
	 * The token that can be used to retrieve the next page of results.
	 */
	nextPageToken?: string;
	/**
	 * The token that can be used to retrieve the changes made since this request.
	 */
	nextSyncToken?: string;
	/**
	 * The total number of items in the list without pagination.
	 */
	totalItems?: number;
};

/**
 * List contact groups
 * Returns the contact groups owned by the authenticated user.
 */
export async function listContactGroups(
	this: EndpointFunctionThis,
	payload: {
		input: ListContactGroupsInput;
		connectionId: number;
	},
): Promise<ListContactGroupsOutput> {
	const response = await this.endpointCaller<ListContactGroupsOutput>(
		{
			appName: 'google-contacts',
			appVersion: 4,
			endpointName: 'listContactGroups',
		},
		payload,
	);
	return response.output;
}
