// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetListInput = {
	id: number;
	email?: string;
	name?: string;
};

export type GetListOutput = {
	id?: number;
};

/**
 * Get a list
 * Retrieves a contact list with its subscriber counts and campaign statistics.
 */
export async function getList(
	this: EndpointFunctionThis,
	payload: {
		input: GetListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetListOutput>> {
	const response = await this.endpointCaller<GetListOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'getList',
		},
		payload,
	);
	return response;
}
