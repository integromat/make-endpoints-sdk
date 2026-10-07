// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateInventoryLevelInput = {
	/**
	 * The absolute quantities to set. Each entry targets one inventory item at one location.
	 *
	 * @minItems 1
	 *
	 * Items: One absolute quantity to set.
	 */
	quantities: [
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
			 * The exact quantity to set at this location. This replaces the current value rather than adding to it.
			 */
			quantity: number;
			/**
			 * The quantity you expect at this location right now, for a compare-and-swap safety check. When it does not match, the call fails with `CHANGE_FROM_QUANTITY_STALE` instead of writing stale data. Leave it empty to skip the check — the endpoint then sends an explicit `null`, which the 2026-04 API requires.
			 */
			changeFromQuantity?: number;
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
			 * The exact quantity to set at this location. This replaces the current value rather than adding to it.
			 */
			quantity: number;
			/**
			 * The quantity you expect at this location right now, for a compare-and-swap safety check. When it does not match, the call fails with `CHANGE_FROM_QUANTITY_STALE` instead of writing stale data. Leave it empty to skip the check — the endpoint then sends an explicit `null`, which the 2026-04 API requires.
			 */
			changeFromQuantity?: number;
		}[],
	];
	/**
	 * The inventory quantity state to set. Only `available` and `on_hand` can be set to an absolute value.
	 */
	name: 'available' | 'on_hand';
	/**
	 * The reason recorded for the change. It must be one of the values Shopify accepts — see the [`inventorySetQuantities` reference](https://shopify.dev/docs/api/admin-graphql/2026-04/mutations/inventorySetQuantities).
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
	 * A URI recording why the change happened, shown in the merchant inventory history. Shopify prefers a global ID naming your app, such as `gid://erp-connector/SyncJob/SYNC-1`, but an `https://` URL or a custom scheme also works.
	 */
	referenceDocumentUri?: string;
	/**
	 * A key that makes the change safe to retry: repeating a call with the same key does not apply the change twice. The 2026-04 API requires one, so a fresh UUID is generated when you leave this empty. Supply your own value when you may retry after a timeout. See the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
	 */
	idempotencyKey?: string;
};

export type UpdateInventoryLevelOutput = {
	/**
	 * The batch of inventory changes this call produced. It is `null` when nothing actually changed, which happens when every quantity you sent already matched the stored value.
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
 * Update an inventory level
 * Sets inventory items at locations to exact quantities.
 */
export async function updateInventoryLevel(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateInventoryLevelInput;
		connectionId: number;
	},
): Promise<UpdateInventoryLevelOutput> {
	const response = await this.endpointCaller<UpdateInventoryLevelOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'updateInventoryLevel',
		},
		payload,
	);
	return response.output;
}
