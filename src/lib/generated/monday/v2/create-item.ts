// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateItemInput = Record<string, never>;

export type CreateItemOutput = Record<string, never>;

/**
 * Create an item
 * Creates a new item on a board.
 */
export async function createItem(
	this: EndpointFunctionThis,
	payload: {
		input: CreateItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateItemOutput> {
	const response = await this.endpointCaller<CreateItemOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createItem',
		},
		payload,
	);
	return response.output;
}
