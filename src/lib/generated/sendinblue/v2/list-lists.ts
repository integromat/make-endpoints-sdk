// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListListsInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ListListsOutput = {
	id?: number;
};

/**
 * List lists
 * Retrieves one page of contact lists across all folders.
 */
export async function listLists(
	this: EndpointFunctionThis,
	payload: {
		input: ListListsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListListsOutput> {
	const response = await this.endpointCaller<ListListsOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'listLists',
		},
		payload,
	);
	return response.output;
}
