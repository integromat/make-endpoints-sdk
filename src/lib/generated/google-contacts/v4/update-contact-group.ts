// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateContactGroupInput = {
	/**
	 * The resource name of the contact group, in the form `contactGroups/{contactGroupId}` — for example the `resourceName` value returned by the **List contact groups** endpoint. Only user groups can be updated; system groups cannot.
	 */
	resourceName: string;
	/**
	 * The new contact group name. Required when `name` is part of the update mask, which is the default. It must be unique among the user's contact groups — a duplicate name returns a 409 error.
	 */
	name: string;
	/**
	 * The HTTP entity tag of the contact group as returned by the **Get a contact group** endpoint. Send it to make the update fail instead of overwriting when the group changed in the meantime.
	 */
	etag: string;
	/**
	 * Arbitrary client data populated by the client. Duplicate keys and values are allowed.
	 *
	 * Items: A single client data key-value pair.
	 */
	clientData?: {
		/**
		 * The client specified key of the client data.
		 */
		key?: string;
		/**
		 * The client specified value of the client data.
		 */
		value?: string;
	}[];
	/**
	 * A field mask restricting which fields of the group are updated. Defaults to `name` when left empty. Every listed field is replaced by the value sent in this request.
	 */
	updateGroupFields?: '' | 'clientData' | 'name';
	/**
	 * A field mask restricting which fields of the updated group are returned. Defaults to `metadata`, `groupType` and `name` when left empty. See the [contactGroups.update reference](https://developers.google.com/people/api/rest/v1/contactGroups/update).
	 */
	readGroupFields?: '' | 'clientData' | 'groupType' | 'memberCount' | 'metadata' | 'name';
};

export type UpdateContactGroupOutput = {
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
};

/**
 * Update a contact group
 * Updates an existing contact group owned by the authenticated user.
 */
export async function updateContactGroup(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateContactGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateContactGroupOutput> {
	const response = await this.endpointCaller<UpdateContactGroupOutput>(
		{
			appName: 'google-contacts',
			appVersion: 4,
			endpointName: 'updateContactGroup',
		},
		payload,
	);
	return response.output;
}
