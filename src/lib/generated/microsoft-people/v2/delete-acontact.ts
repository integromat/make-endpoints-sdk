// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAContactInput = {
	/**
	 * The ID of the contact. Use the **Search contacts** endpoint to find it.
	 */
	contact: string;
};

export type DeleteAContactOutput = Record<string, never>;

/**
 * Delete a contact
 * Deletes a contact.
 */
export async function deleteAcontact(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAContactOutput> {
	const response = await this.endpointCaller<DeleteAContactOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'deleteAContact',
		},
		payload,
	);
	return response.output;
}
