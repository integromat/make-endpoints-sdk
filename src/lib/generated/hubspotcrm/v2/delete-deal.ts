// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteDealInput = {
	/**
	 * The record ID of the deal to delete.
	 */
	id: string;
};

export type DeleteDealOutput = Record<string, never>;

/**
 * Delete a deal
 * Moves a deal to the recycling bin.
 */
export async function deleteDeal(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteDealInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteDealOutput> {
	const response = await this.endpointCaller<DeleteDealOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteDeal',
		},
		payload,
	);
	return response.output;
}
