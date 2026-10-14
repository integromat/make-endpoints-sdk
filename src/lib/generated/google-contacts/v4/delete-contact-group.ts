// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteContactGroupInput = {
	/**
	 * The resource name of the contact group, in the form `contactGroups/{contactGroupId}` — for example the `resourceName` value returned by the **List contact groups** endpoint. Only user groups can be deleted; system groups cannot.
	 */
	resourceName: string;
	/**
	 * Whether to also delete the contacts that are members of the group. Defaults to false, which deletes the group only and leaves its contacts in place.
	 */
	deleteContacts?: boolean;
};

export type DeleteContactGroupOutput = Record<string, never>;

/**
 * Delete a contact group
 * Deletes a contact group owned by the authenticated user.
 */
export async function deleteContactGroup(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteContactGroupInput;
		connectionId: number;
	},
): Promise<DeleteContactGroupOutput> {
	const response = await this.endpointCaller<DeleteContactGroupOutput>(
		{
			appName: 'google-contacts',
			appVersion: 4,
			endpointName: 'deleteContactGroup',
		},
		payload,
	);
	return response.output;
}
