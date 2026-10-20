// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListGroupItemsInput = Record<string, never>;

export type ListGroupItemsOutput = Record<string, never>;

/**
 * List group items
 * Returns a page of items in a specific group of a board.
 */
export async function listGroupItems(
	this: EndpointFunctionThis,
	payload: {
		input: ListGroupItemsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListGroupItemsOutput> {
	const response = await this.endpointCaller<ListGroupItemsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listGroupItems',
		},
		payload,
	);
	return response.output;
}
