// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteContactInput = {
	/**
	 * The record ID of the contact to delete.
	 */
	id: string;
};

export type DeleteContactOutput = Record<string, never>;

/**
 * Delete a contact
 * Moves a contact to the recycling bin.
 */
export async function deleteContact(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteContactOutput> {
	const response = await this.endpointCaller<DeleteContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteContact',
		},
		payload,
	);
	return response.output;
}
