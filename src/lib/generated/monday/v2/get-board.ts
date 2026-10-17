// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetBoardInput = Record<string, never>;

export type GetBoardOutput = Record<string, never>;

/**
 * Get a board
 * Returns a single board with its columns, groups, views, tags, owners and subscribers.
 */
export async function getBoard(
	this: EndpointFunctionThis,
	payload: {
		input: GetBoardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetBoardOutput> {
	const response = await this.endpointCaller<GetBoardOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getBoard',
		},
		payload,
	);
	return response.output;
}
