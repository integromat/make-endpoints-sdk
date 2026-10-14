// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteSubscribersFromBoardInput = Record<string, never>;

export type DeleteSubscribersFromBoardOutput = Record<string, never>;

/**
 * Delete subscribers from a board
 * Removes users from a board.
 */
export async function deleteSubscribersFromBoard(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteSubscribersFromBoardInput;
		connectionId: number;
	},
): Promise<DeleteSubscribersFromBoardOutput> {
	const response = await this.endpointCaller<DeleteSubscribersFromBoardOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'deleteSubscribersFromBoard',
		},
		payload,
	);
	return response.output;
}
