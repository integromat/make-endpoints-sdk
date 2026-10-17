// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteOrderInput = {
	/**
	 * The record ID of the order to delete.
	 */
	id: string;
};

export type DeleteOrderOutput = Record<string, never>;

/**
 * Delete an order
 * Moves an order to the recycling bin.
 */
export async function deleteOrder(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteOrderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteOrderOutput> {
	const response = await this.endpointCaller<DeleteOrderOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteOrder',
		},
		payload,
	);
	return response.output;
}
