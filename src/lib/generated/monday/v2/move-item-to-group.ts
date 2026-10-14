// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type MoveItemToGroupInput = Record<string, never>;

export type MoveItemToGroupOutput = Record<string, never>;

/**
 * Move an item to a group
 * Moves an item to another group on the same board.
 */
export async function moveItemToGroup(
	this: EndpointFunctionThis,
	payload: {
		input: MoveItemToGroupInput;
		connectionId: number;
	},
): Promise<MoveItemToGroupOutput> {
	const response = await this.endpointCaller<MoveItemToGroupOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'moveItemToGroup',
		},
		payload,
	);
	return response.output;
}
