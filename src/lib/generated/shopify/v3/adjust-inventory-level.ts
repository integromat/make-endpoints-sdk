// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AdjustInventoryLevelInput = {
	/**
	 * The relative quantity changes to apply. Each entry targets one inventory item at one location.
	 *
	 * @minItems 1
	 *
	 * Items: One relative quantity change.
	 */
	changes: [
		{
			/**
			 * The global ID of the inventory item, such as `gid://shopify/InventoryItem/123`. The **Get a product variant** endpoint returns it as `inventoryItem.id`.
			 */
			inventoryItemId: string;
			/**
			 * The global ID of the location, such as `gid://shopify/Location/123`. The **Search locations** endpoint returns it as `id`.
			 */
			locationId: string;
			/**
			 * The amount by which the quantity changes. Use a negative number to remove stock.
			 */
			delta: number;
			/**
			 * The quantity you expect at this location right now, for a compare-and-swap safety check. When it does not match, the call fails with `CHANGE_FROM_QUANTITY_STALE` instead of writing stale data. Leave it empty to skip the check — the endpoint then sends an explicit `null`, which the 2026-04 API requires.
			 */
			changeFromQuantity?: number;
			/**
			 * A non-Shopify URI identifying the specific inventory transaction behind this change, such as `gid://warehouse-app/InventoryTransaction/TXN-1`. Required for every quantity name except `available`, and not supported for `available`. A `gid://shopify/…` value is rejected.
			 */
			ledgerDocumentUri?: string;
		},
		...{
			/**
			 * The global ID of the inventory item, such as `gid://shopify/InventoryItem/123`. The **Get a product variant** endpoint returns it as `inventoryItem.id`.
			 */
			inventoryItemId: string;
			/**
			 * The global ID of the location, such as `gid://shopify/Location/123`. The **Search locations** endpoint returns it as `id`.
			 */
			locationId: string;
			/**
			 * The amount by which the quantity changes. Use a negative number to remove stock.
			 */
			delta: number;
			/**
			 * The quantity you expect at this location right now, for a compare-and-swap safety check. When it does not match, the call fails with `CHANGE_FROM_QUANTITY_STALE` instead of writing stale data. Leave it empty to skip the check — the endpoint then sends an explicit `null`, which the 2026-04 API requires.
			 */
			changeFromQuantity?: number;
			/**
			 * A non-Shopify URI identifying the specific inventory transaction behind this change, such as `gid://warehouse-app/InventoryTransaction/TXN-1`. Required for every quantity name except `available`, and not supported for `available`. A `gid://shopify/…` value is rejected.
			 */
			ledgerDocumentUri?: string;
		}[],
	];
	/**
	 * The inventory quantity state to adjust.
	 */
	name: 'available' | 'damaged' | 'incoming' | 'quality_control' | 'reserved' | 'safety_stock';
	/**
	 * The reason recorded for the adjustment. It must be one of the values Shopify accepts — see the [`inventoryAdjustQuantities` reference](https://shopify.dev/docs/api/admin-graphql/2026-04/mutations/inventoryAdjustQuantities).
	 */
	reason:
		| 'correction'
		| 'cycle_count_available'
		| 'damaged'
		| 'movement_created'
		| 'movement_updated'
		| 'movement_received'
		| 'movement_canceled'
		| 'other'
		| 'promotion'
		| 'quality_control'
		| 'received'
		| 'reservation_created'
		| 'reservation_deleted'
		| 'reservation_updated'
		| 'restock'
		| 'safety_stock'
		| 'shrinkage';
	/**
	 * A URI recording why the change happened, shown in the merchant inventory history. Shopify prefers a global ID naming your app, such as `gid://warehouse-app/PurchaseOrder/PO-1`, but an `https://` URL or a custom scheme also works.
	 */
	referenceDocumentUri?: string;
	/**
	 * A key that makes the adjustment safe to retry: repeating a call with the same key does not apply the change twice. The 2026-04 API requires one, so a fresh UUID is generated when you leave this empty. Supply your own value when you may retry after a timeout. See the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
	 */
	idempotencyKey?: string;
};

export type AdjustInventoryLevelOutput = {
	/**
	 * The batch of inventory changes this call produced.
	 */
	inventoryAdjustmentGroup?: {
		/**
		 * The global ID of the inventory adjustment group.
		 */
		id?: string;
		/**
		 * The date and time when the adjustment group was created.
		 */
		createdAt?: string;
		/**
		 * The reason recorded for the group of adjustments.
		 */
		reason?: string;
		/**
		 * The URI recorded as the reason the inventory change happened.
		 */
		referenceDocumentUri?: string;
		/**
		 * The individual quantity changes in this group. This is a list field, so it has no `nodes` wrapper.
		 *
		 * Items: One quantity change of one inventory item at one location.
		 */
		changes?: {
			/**
			 * The name of the inventory quantity that changed, such as `available`.
			 */
			name?: string;
			/**
			 * The amount by which the quantity changed. Negative when stock was removed.
			 */
			delta?: number;
			/**
			 * The resulting quantity of the named inventory state after the change.
			 */
			quantityAfterChange?: number;
			/**
			 * The URI identifying what the quantity change was applied to.
			 */
			ledgerDocumentUri?: string;
			/**
			 * The inventory item the change applies to.
			 */
			item?: {
				/**
				 * The global ID of the inventory item.
				 */
				id?: string;
			};
			/**
			 * The location the change applies to.
			 */
			location?: {
				/**
				 * The global ID of the location.
				 */
				id?: string;
			};
		}[];
	};
	/**
	 * The list of errors that occurred while executing the mutation. The module fails when this list is not empty.
	 *
	 * Items: An error returned by the mutation.
	 */
	userErrors?: {
		/**
		 * The path to the input field that caused the error.
		 *
		 * Items: One segment of the path to the input field that caused the error.
		 */
		field?: string[];
		/**
		 * The error message describing the problem.
		 */
		message?: string;
	}[];
};

/**
 * Adjust an inventory level
 * Applies relative quantity changes to inventory items at locations.
 */
export async function adjustInventoryLevel(
	this: EndpointFunctionThis,
	payload: {
		input: AdjustInventoryLevelInput;
		connectionId: number;
	},
): Promise<AdjustInventoryLevelOutput> {
	const response = await this.endpointCaller<AdjustInventoryLevelOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'adjustInventoryLevel',
		},
		payload,
	);
	return response.output;
}
