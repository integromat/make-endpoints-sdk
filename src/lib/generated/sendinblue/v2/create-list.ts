// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type CreateListInput = {
	id: number;
	email?: string;
	name?: string;
};

export type CreateListOutput = {
	id?: number;
};

/**
 * Create a list
 * Creates a contact list in a folder.
 */
export async function createList(
	this: EndpointFunctionThis,
	payload: {
		input: CreateListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<CreateListOutput>> {
	const response = await this.endpointCaller<CreateListOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'createList',
		},
		payload,
	);
	return response;
}
