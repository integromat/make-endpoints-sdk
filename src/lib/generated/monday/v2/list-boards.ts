// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBoardsInput = Record<string, never>;

export type ListBoardsOutput = Record<string, never>;

/**
 * List boards
 * Returns a page of boards matching the given filters.
 */
export async function listBoards(
	this: EndpointFunctionThis,
	payload: {
		input: ListBoardsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListBoardsOutput> {
	const response = await this.endpointCaller<ListBoardsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listBoards',
		},
		payload,
	);
	return response.output;
}
