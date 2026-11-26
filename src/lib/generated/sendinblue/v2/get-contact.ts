// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetContactInput = {
	id: number;
	email?: string;
	name?: string;
};

export type GetContactOutput = {
	id?: number;
};

/**
 * Get a contact
 * Retrieves a contact with its campaign statistics by email, ID, phone or external ID.
 */
export async function getContact(
	this: EndpointFunctionThis,
	payload: {
		input: GetContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetContactOutput>> {
	const response = await this.endpointCaller<GetContactOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'getContact',
		},
		payload,
	);
	return response;
}
