// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGroupInput = Record<string, never>;

export type GetGroupOutput = Record<string, never>;

/**
 * Get a group
 * Returns a single group of a board.
 */
export async function getGroup(
	this: EndpointFunctionThis,
	payload: {
		input: GetGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetGroupOutput> {
	const response = await this.endpointCaller<GetGroupOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getGroup',
		},
		payload,
	);
	return response.output;
}
