// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCustomObjectInput = {
	/**
	 * The custom object's type ID or fully-qualified name.
	 */
	objectType: string;
	/**
	 * The record ID of the custom object to delete.
	 */
	id: string;
};

export type DeleteCustomObjectOutput = Record<string, never>;

/**
 * Delete a custom object record
 * Moves a custom object record to the recycling bin.
 */
export async function deleteCustomObject(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCustomObjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteCustomObjectOutput> {
	const response = await this.endpointCaller<DeleteCustomObjectOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteCustomObject',
		},
		payload,
	);
	return response.output;
}
