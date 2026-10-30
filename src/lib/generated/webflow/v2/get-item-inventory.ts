// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetItemInventoryInput = {
	/**
	 * Unique identifier of the SKUs collection of the site (the e-commerce collection whose `slug` is `sku`; see `listCollections`).
	 */
	collection_id: string;
	/**
	 * Unique identifier of the SKU item. SKU IDs are returned in `skus[].id` by `getProduct` / `listProducts`.
	 */
	item_id: string;
};

export type GetItemInventoryOutput = {
	/**
	 * Unique identifier for a SKU item.
	 */
	id?: string;
	/**
	 * Total quantity of items remaining in inventory (if inventoryType is finite).
	 */
	quantity?: number;
	/**
	 * Inventory type. One of: `infinite`, `finite`.
	 */
	inventoryType?: string;
};

/**
 * Get item inventory
 * Returns the current inventory level of a SKU item.
 */
export async function getItemInventory(
	this: EndpointFunctionThis,
	payload: {
		input: GetItemInventoryInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetItemInventoryOutput> {
	const response = await this.endpointCaller<GetItemInventoryOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'getItemInventory',
		},
		payload,
	);
	return response.output;
}
