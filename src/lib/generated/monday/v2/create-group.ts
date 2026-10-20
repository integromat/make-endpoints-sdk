// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateGroupInput = Record<string, never>;

export type CreateGroupOutput = Record<string, never>;

/**
 * Create a group
 * Creates a new empty group on a board.
 */
export async function createGroup(
	this: EndpointFunctionThis,
	payload: {
		input: CreateGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateGroupOutput> {
	const response = await this.endpointCaller<CreateGroupOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createGroup',
		},
		payload,
	);
	return response.output;
}
