// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteQuoteInput = {
	/**
	 * The record ID of the quote to delete.
	 */
	id: string;
};

export type DeleteQuoteOutput = Record<string, never>;

/**
 * Delete a quote
 * Moves a quote to the recycling bin.
 */
export async function deleteQuote(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteQuoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteQuoteOutput> {
	const response = await this.endpointCaller<DeleteQuoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteQuote',
		},
		payload,
	);
	return response.output;
}
