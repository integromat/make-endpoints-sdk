// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteContactInput = {
	id: number;
	email?: string;
	name?: string;
};

export type DeleteContactOutput = {
	id?: number;
};

/**
 * Delete a contact
 * Permanently deletes a contact by email, ID, phone or external ID.
 */
export async function deleteContact(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeleteContactOutput>> {
	const response = await this.endpointCaller<DeleteContactOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'deleteContact',
		},
		payload,
	);
	return response;
}
