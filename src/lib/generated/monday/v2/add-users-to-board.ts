// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddUsersToBoardInput = Record<string, never>;

export type AddUsersToBoardOutput = Record<string, never>;

/**
 * Add users to a board
 * Subscribes users to a board as subscribers or owners.
 */
export async function addUsersToBoard(
	this: EndpointFunctionThis,
	payload: {
		input: AddUsersToBoardInput;
		connectionId: number;
	},
): Promise<AddUsersToBoardOutput> {
	const response = await this.endpointCaller<AddUsersToBoardOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'addUsersToBoard',
		},
		payload,
	);
	return response.output;
}
