// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateItemInventoryInput = {
	/**
	 * Unique identifier of the SKUs collection of the site (the e-commerce collection whose `slug` is `sku`; see `listCollections`).
	 */
	collection_id: string;
	/**
	 * Unique identifier of the SKU item. SKU IDs are returned in `skus[].id` by `getProduct` / `listProducts`.
	 */
	item_id: string;
	/**
	 * Inventory tracking mode: `finite` tracks a numeric stock level, `infinite` disables stock tracking.
	 */
	inventoryType: 'infinite' | 'finite';
	/**
	 * Delta added to the currently stored quantity; can be negative. Applied on every call, so repeating the same request changes the stock again (not safe to retry). There is no floor — the stock can become negative. Ignored when `quantity` is also sent or when `inventoryType` is `infinite`.
	 */
	updateQuantity?: number;
	/**
	 * Absolute stock level to set; must be `>= 0` (negative values are rejected with `400`). Safe to repeat. Takes precedence over `updateQuantity` when both are sent; discarded when `inventoryType` is `infinite`.
	 */
	quantity?: number;
};

export type UpdateItemInventoryOutput = {
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
 * Update item inventory
 * Sets or adjusts the inventory level of a SKU item.
 */
export async function updateItemInventory(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateItemInventoryInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateItemInventoryOutput> {
	const response = await this.endpointCaller<UpdateItemInventoryOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'updateItemInventory',
		},
		payload,
	);
	return response.output;
}
