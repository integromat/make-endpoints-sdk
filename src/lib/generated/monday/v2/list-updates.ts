// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUpdatesInput = Record<string, never>;

export type ListUpdatesOutput = Record<string, never>;

/**
 * List updates
 * Returns a page of updates across the account, newest first, optionally filtered by IDs or a date range.
 */
export async function listUpdates(
	this: EndpointFunctionThis,
	payload: {
		input: ListUpdatesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListUpdatesOutput> {
	const response = await this.endpointCaller<ListUpdatesOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listUpdates',
		},
		payload,
	);
	return response.output;
}
