// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBoardItemsInput = Record<string, never>;

export type ListBoardItemsOutput = Record<string, never>;

/**
 * List board items
 * Returns a page of items on a board, optionally filtered and sorted by column values.
 */
export async function listBoardItems(
	this: EndpointFunctionThis,
	payload: {
		input: ListBoardItemsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListBoardItemsOutput> {
	const response = await this.endpointCaller<ListBoardItemsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listBoardItems',
		},
		payload,
	);
	return response.output;
}
