// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteItemInput = Record<string, never>;

export type DeleteItemOutput = Record<string, never>;

/**
 * Delete an item
 * Deletes an item or subitem and its nested subitems.
 */
export async function deleteItem(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteItemInput;
		connectionId: number;
	},
): Promise<DeleteItemOutput> {
	const response = await this.endpointCaller<DeleteItemOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'deleteItem',
		},
		payload,
	);
	return response.output;
}
