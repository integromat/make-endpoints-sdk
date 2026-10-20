// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ModifyContactGroupMembersInput = {
	/**
	 * The resource name of the contact group, in the form `contactGroups/{contactGroupId}` — for example the `resourceName` value returned by the **List contact groups** endpoint. Contacts can be added to user groups and to the `contactGroups/myContacts` and `contactGroups/starred` system groups only; from other system groups they can only be removed.
	 */
	resourceName: string;
	/**
	 * The contact people to add to the group, each in the form `people/{personId}`. The combined number of names to add and to remove must not exceed 1000.
	 *
	 * Items: The resource name of a contact person, in the form `people/{personId}`.
	 */
	resourceNamesToAdd?: string[];
	/**
	 * The contact people to remove from the group, each in the form `people/{personId}`. The combined number of names to add and to remove must not exceed 1000.
	 *
	 * Items: The resource name of a contact person, in the form `people/{personId}`.
	 */
	resourceNamesToRemove?: string[];
};

export type ModifyContactGroupMembersOutput = {
	/**
	 * The contact people resource names that were not found.
	 *
	 * Items: The resource name of a contact person, in the form `people/{personId}`.
	 */
	notFoundResourceNames?: string[];
	/**
	 * The contact people resource names that cannot be removed from their last contact group.
	 *
	 * Items: The resource name of a contact person, in the form `people/{personId}`.
	 */
	canNotRemoveLastContactGroupResourceNames?: string[];
};

/**
 * Modify contact group members
 * Adds contacts to and removes contacts from a contact group owned by the authenticated user.
 */
export async function modifyContactGroupMembers(
	this: EndpointFunctionThis,
	payload: {
		input: ModifyContactGroupMembersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ModifyContactGroupMembersOutput> {
	const response = await this.endpointCaller<ModifyContactGroupMembersOutput>(
		{
			appName: 'google-contacts',
			appVersion: 4,
			endpointName: 'modifyContactGroupMembers',
		},
		payload,
	);
	return response.output;
}
