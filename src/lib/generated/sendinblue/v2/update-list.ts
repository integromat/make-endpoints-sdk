// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UpdateListInput = {
	id: number;
	email?: string;
	name?: string;
};

export type UpdateListOutput = {
	id?: number;
};

/**
 * Update a list
 * Renames a contact list or moves it to another folder.
 */
export async function updateList(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdateListOutput>> {
	const response = await this.endpointCaller<UpdateListOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'updateList',
		},
		payload,
	);
	return response;
}
