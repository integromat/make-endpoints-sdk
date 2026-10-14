// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetItemInput = Record<string, never>;

export type GetItemOutput = Record<string, never>;

/**
 * Get an item
 * Returns a single item or subitem with its column values.
 */
export async function getItem(
	this: EndpointFunctionThis,
	payload: {
		input: GetItemInput;
		connectionId: number;
	},
): Promise<GetItemOutput> {
	const response = await this.endpointCaller<GetItemOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getItem',
		},
		payload,
	);
	return response.output;
}
