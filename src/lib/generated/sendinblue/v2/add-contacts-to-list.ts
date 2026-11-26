// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type AddContactsToListInput = {
	id: number;
	email?: string;
	name?: string;
};

export type AddContactsToListOutput = {
	id?: number;
};

/**
 * Add contacts to a list
 * Adds existing contacts to a list by email addresses, IDs or external IDs.
 */
export async function addContactsToList(
	this: EndpointFunctionThis,
	payload: {
		input: AddContactsToListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<AddContactsToListOutput>> {
	const response = await this.endpointCaller<AddContactsToListOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'addContactsToList',
		},
		payload,
	);
	return response;
}
