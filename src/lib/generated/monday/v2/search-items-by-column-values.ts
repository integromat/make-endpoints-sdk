// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchItemsByColumnValuesInput = Record<string, never>;

export type SearchItemsByColumnValuesOutput = Record<string, never>;

/**
 * Search items by column values
 * Returns a page of items on a board whose columns match the given values.
 */
export async function searchItemsByColumnValues(
	this: EndpointFunctionThis,
	payload: {
		input: SearchItemsByColumnValuesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchItemsByColumnValuesOutput> {
	const response = await this.endpointCaller<SearchItemsByColumnValuesOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'searchItemsByColumnValues',
		},
		payload,
	);
	return response.output;
}
