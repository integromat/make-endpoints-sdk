// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type NextItemsPageInput = Record<string, never>;

export type NextItemsPageOutput = Record<string, never>;

/**
 * Get the next items page
 * Returns the next page of items for a cursor returned by an items page query.
 */
export async function nextItemsPage(
	this: EndpointFunctionThis,
	payload: {
		input: NextItemsPageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<NextItemsPageOutput> {
	const response = await this.endpointCaller<NextItemsPageOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'nextItemsPage',
		},
		payload,
	);
	return response.output;
}
