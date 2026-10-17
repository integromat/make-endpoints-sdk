// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateBoardInput = Record<string, never>;

export type CreateBoardOutput = Record<string, never>;

/**
 * Create a board
 * Creates a new board.
 */
export async function createBoard(
	this: EndpointFunctionThis,
	payload: {
		input: CreateBoardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateBoardOutput> {
	const response = await this.endpointCaller<CreateBoardOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createBoard',
		},
		payload,
	);
	return response.output;
}
