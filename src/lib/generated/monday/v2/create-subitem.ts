// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateSubitemInput = Record<string, never>;

export type CreateSubitemOutput = Record<string, never>;

/**
 * Create a subitem
 * Creates a new subitem under a parent item.
 */
export async function createSubitem(
	this: EndpointFunctionThis,
	payload: {
		input: CreateSubitemInput;
		connectionId: number;
	},
): Promise<CreateSubitemOutput> {
	const response = await this.endpointCaller<CreateSubitemOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createSubitem',
		},
		payload,
	);
	return response.output;
}
