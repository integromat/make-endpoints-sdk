// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserInput = Record<string, never>;

export type GetUserOutput = Record<string, never>;

/**
 * Get a user
 * Returns a single user by ID.
 */
export async function getUser(
	this: EndpointFunctionThis,
	payload: {
		input: GetUserInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetUserOutput> {
	const response = await this.endpointCaller<GetUserOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getUser',
		},
		payload,
	);
	return response.output;
}
