// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UpdateContactInput = {
	id: number;
	email?: string;
	name?: string;
};

export type UpdateContactOutput = {
	id?: number;
};

/**
 * Update a contact
 * Updates the attributes, lists and blacklist status of an existing contact.
 */
export async function updateContact(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdateContactOutput>> {
	const response = await this.endpointCaller<UpdateContactOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'updateContact',
		},
		payload,
	);
	return response;
}
