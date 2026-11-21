// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteListInput = {
	id: number;
	email?: string;
	name?: string;
};

export type DeleteListOutput = {
	id?: number;
};

/**
 * Delete a list
 * Deletes a contact list. The contacts in the list are not deleted.
 */
export async function deleteList(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteListOutput> {
	const response = await this.endpointCaller<DeleteListOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'deleteList',
		},
		payload,
	);
	return response.output;
}
