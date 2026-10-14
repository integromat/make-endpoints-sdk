// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListItemUpdatesInput = Record<string, never>;

export type ListItemUpdatesOutput = Record<string, never>;

/**
 * List item updates
 * Returns a page of an item's updates, newest first.
 */
export async function listItemUpdates(
	this: EndpointFunctionThis,
	payload: {
		input: ListItemUpdatesInput;
		connectionId: number;
	},
): Promise<ListItemUpdatesOutput> {
	const response = await this.endpointCaller<ListItemUpdatesOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listItemUpdates',
		},
		payload,
	);
	return response.output;
}
