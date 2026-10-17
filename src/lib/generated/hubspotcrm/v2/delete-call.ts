// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCallInput = {
	/**
	 * The record ID of the call to move to the recycling bin.
	 */
	id: string;
};

export type DeleteCallOutput = Record<string, never>;

/**
 * Delete a call
 * Moves a call engagement to the recycling bin.
 */
export async function deleteCall(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCallInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteCallOutput> {
	const response = await this.endpointCaller<DeleteCallOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteCall',
		},
		payload,
	);
	return response.output;
}
