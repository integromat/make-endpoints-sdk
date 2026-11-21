// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListContactsInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ListContactsOutput = {
	id?: number;
};

/**
 * List contacts
 * Retrieves one page of contacts, optionally filtered by lists, segment, attributes or dates.
 */
export async function listContacts(
	this: EndpointFunctionThis,
	payload: {
		input: ListContactsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListContactsOutput> {
	const response = await this.endpointCaller<ListContactsOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'listContacts',
		},
		payload,
	);
	return response.output;
}
