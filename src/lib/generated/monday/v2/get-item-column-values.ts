// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetItemColumnValuesInput = Record<string, never>;

export type GetItemColumnValuesOutput = Record<string, never>;

/**
 * Get item column values
 * Returns an item's column values, optionally limited to specific columns or column types.
 */
export async function getItemColumnValues(
	this: EndpointFunctionThis,
	payload: {
		input: GetItemColumnValuesInput;
		connectionId: number;
	},
): Promise<GetItemColumnValuesOutput> {
	const response = await this.endpointCaller<GetItemColumnValuesOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getItemColumnValues',
		},
		payload,
	);
	return response.output;
}
