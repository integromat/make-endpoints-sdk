// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type CreateContactInput = {
	id: number;
	email?: string;
	name?: string;
};

export type CreateContactOutput = {
	id?: number;
};

/**
 * Create a contact
 * Creates a contact, or updates the existing one when update is enabled.
 */
export async function createContact(
	this: EndpointFunctionThis,
	payload: {
		input: CreateContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<CreateContactOutput>> {
	const response = await this.endpointCaller<CreateContactOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'createContact',
		},
		payload,
	);
	return response;
}
