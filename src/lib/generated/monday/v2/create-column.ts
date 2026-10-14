// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateColumnInput = Record<string, never>;

export type CreateColumnOutput = Record<string, never>;

/**
 * Create a column
 * Creates a new column on a board.
 */
export async function createColumn(
	this: EndpointFunctionThis,
	payload: {
		input: CreateColumnInput;
		connectionId: number;
	},
): Promise<CreateColumnOutput> {
	const response = await this.endpointCaller<CreateColumnOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createColumn',
		},
		payload,
	);
	return response.output;
}
