// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteItemInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
	/**
	 * Unique identifier for a collection item. Use the `listItems` endpoint to find it.
	 */
	item_id: string;
};

export type DeleteItemOutput = Record<string, never>;

/**
 * Delete an item
 * Deletes a staged item from a CMS collection.
 */
export async function deleteItem(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteItemOutput> {
	const response = await this.endpointCaller<DeleteItemOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'deleteItem',
		},
		payload,
	);
	return response.output;
}
