// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateUpdateInput = Record<string, never>;

export type CreateUpdateOutput = Record<string, never>;

/**
 * Create an update
 * Posts a new update on an item, or a reply to an existing update.
 */
export async function createUpdate(
	this: EndpointFunctionThis,
	payload: {
		input: CreateUpdateInput;
		connectionId: number;
	},
): Promise<CreateUpdateOutput> {
	const response = await this.endpointCaller<CreateUpdateOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createUpdate',
		},
		payload,
	);
	return response.output;
}
