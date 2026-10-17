// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteProductInput = {
	/**
	 * The record ID of the product to delete.
	 */
	id: string;
};

export type DeleteProductOutput = Record<string, never>;

/**
 * Delete a product
 * Moves a product to the recycling bin.
 */
export async function deleteProduct(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteProductInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteProductOutput> {
	const response = await this.endpointCaller<DeleteProductOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteProduct',
		},
		payload,
	);
	return response.output;
}
