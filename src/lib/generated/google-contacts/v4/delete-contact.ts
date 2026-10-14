// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteContactInput = {
	/**
	 * The resource name of the contact to delete, in the form `people/{personId}` — the `resourceName` value returned by the **List contacts** or **Get a contact** endpoint.
	 */
	resourceName: string;
};

export type DeleteContactOutput = Record<string, never>;

/**
 * Delete a contact
 * Deletes a contact person of the authenticated user.
 */
export async function deleteContact(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteContactInput;
		connectionId: number;
	},
): Promise<DeleteContactOutput> {
	const response = await this.endpointCaller<DeleteContactOutput>(
		{
			appName: 'google-contacts',
			appVersion: 4,
			endpointName: 'deleteContact',
		},
		payload,
	);
	return response.output;
}
