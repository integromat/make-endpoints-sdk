// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteLineItemInput = {
	/**
	 * The record ID of the line item to delete.
	 */
	id: string;
};

export type DeleteLineItemOutput = Record<string, never>;

/**
 * Delete a line item
 * Moves a line item to the recycling bin.
 */
export async function deleteLineItem(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteLineItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeleteLineItemOutput>> {
	const response = await this.endpointCaller<DeleteLineItemOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteLineItem',
		},
		payload,
	);
	return response;
}
