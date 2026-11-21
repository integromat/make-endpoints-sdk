// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListContactsInListInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ListContactsInListOutput = {
	id?: number;
};

/**
 * List contacts in a list
 * Retrieves one page of contacts that belong to a list.
 */
export async function listContactsInList(
	this: EndpointFunctionThis,
	payload: {
		input: ListContactsInListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListContactsInListOutput> {
	const response = await this.endpointCaller<ListContactsInListOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'listContactsInList',
		},
		payload,
	);
	return response.output;
}
