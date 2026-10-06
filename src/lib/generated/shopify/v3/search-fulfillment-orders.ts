// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchFulfillmentOrdersInput = {
	/**
	 * Filters the fulfillment orders using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys are `assigned_location_id`, `id`, `status`, and `updated_at` — for example `status:open AND updated_at:>2026-01-01`. See the [`fulfillmentOrders` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/fulfillmentOrders). Leave empty to return all accessible fulfillment orders.
	 */
	query?: string;
	/**
	 * The maximum number of fulfillment orders to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.
	 */
	first?: number;
	/**
	 * The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.
	 */
	after?: string;
	/**
	 * The field to sort the fulfillment orders by. Defaults to `ID`. See [FulfillmentOrderSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderSortKeys).
	 */
	sortKey?: '' | 'ID' | 'UPDATED_AT';
	/**
	 * Whether to reverse the sort order. Set to `true` to sort in descending order.
	 */
	reverse?: boolean;
	/**
	 * Whether to include closed fulfillment orders. Defaults to `false`, so completed work is hidden unless you ask for it.
	 */
	includeClosed?: boolean;
	/**
	 * Whether to include the line items of each fulfillment order. Their IDs are what the **Create a fulfillment** endpoint expects.
	 */
	lineItems?: boolean;
};

export type SearchFulfillmentOrdersOutput = {
	/**
	 * The list of fulfillment orders that match the query.
	 *
	 * Items: A group of items in an order that are expected to be fulfilled from the same location.
	 */
	nodes?: {
		/**
		 * The global ID of the fulfillment order, such as `gid://shopify/FulfillmentOrder/123`.
		 */
		id?: string;
		/**
		 * The status of the fulfillment order, such as `OPEN`, `IN_PROGRESS`, `SCHEDULED`, `ON_HOLD`, `INCOMPLETE`, `CANCELLED`, or `CLOSED`. See [FulfillmentOrderStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderStatus).
		 */
		status?: string;
		/**
		 * The status of the fulfillment request sent to the fulfillment service, such as `UNSUBMITTED`, `SUBMITTED`, `ACCEPTED`, or `REJECTED`. See [FulfillmentOrderRequestStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderRequestStatus).
		 */
		requestStatus?: string;
		/**
		 * The actions that can currently be performed on this fulfillment order. This is a list field, so it has no `nodes` wrapper.
		 *
		 * Items: One action the fulfillment order supports in its current state.
		 */
		supportedActions?: {
			/**
			 * The action value, such as `CREATE_FULFILLMENT`, `REQUEST_FULFILLMENT`, `MOVE`, or `HOLD`. See [FulfillmentOrderAction](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderAction).
			 */
			action?: string;
			/**
			 * The external URL used to start the fulfillment process outside Shopify. Present only when **Action** is `EXTERNAL`.
			 */
			externalUrl?: string;
		}[];
		/**
		 * The date and time when the fulfillment order was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the fulfillment order was last updated.
		 */
		updatedAt?: string;
		/**
		 * The date and time at which the fulfillment order becomes fulfillable. Set on scheduled fulfillment orders.
		 */
		fulfillAt?: string;
		/**
		 * The latest date and time by which all items in the fulfillment order need to be fulfilled.
		 */
		fulfillBy?: string;
		/**
		 * The global ID of the order the fulfillment order belongs to. Pass it to the **Get an order** endpoint for details.
		 */
		orderId?: string;
		/**
		 * The unique identifier that appears on the order page in the Shopify admin, such as `#1001`.
		 */
		orderName?: string;
		/**
		 * The date and time when the order was processed. This may differ from when the order was created.
		 */
		orderProcessedAt?: string;
		/**
		 * The total weight of all line items in the fulfillment order that are not yet fulfilled.
		 */
		remainingLineItemsWeight?: {
			/**
			 * The unit of measurement: `GRAMS`, `KILOGRAMS`, `OUNCES`, or `POUNDS`.
			 */
			unit?: string;
			/**
			 * The weight value in the given unit.
			 */
			value?: number;
		};
		/**
		 * The duties delivery method of the fulfillment order.
		 */
		internationalDuties?: {
			/**
			 * The method of duties payment, such as `DAP` or `DDP`.
			 */
			incoterm?: string;
		};
		/**
		 * The location where the fulfillment is expected to happen. These are snapshot values and may differ from the current location record.
		 */
		assignedLocation?: {
			/**
			 * The first line of the address, typically the street address or PO box number.
			 */
			address1?: string;
			/**
			 * The second line of the address, typically the apartment, suite, or unit number.
			 */
			address2?: string;
			/**
			 * The name of the city, district, village, or town.
			 */
			city?: string;
			/**
			 * The name of the region, such as the province, state, or district.
			 */
			province?: string;
			/**
			 * The two-letter country code of the address, such as `CZ` for Czechia.
			 */
			countryCode?: string;
			/**
			 * The zip or postal code of the address.
			 */
			zip?: string;
			/**
			 * The name of the assigned location.
			 */
			name?: string;
			/**
			 * The phone number of the assigned location.
			 */
			phone?: string;
			/**
			 * The location record behind the assignment. Absent when the location has been deleted.
			 */
			location?: {
				/**
				 * The global ID of the location.
				 */
				id?: string;
			};
		};
		/**
		 * The destination where the items should be sent.
		 */
		destination?: {
			/**
			 * The first line of the address, typically the street address or PO box number.
			 */
			address1?: string;
			/**
			 * The second line of the address, typically the apartment, suite, or unit number.
			 */
			address2?: string;
			/**
			 * The name of the city, district, village, or town.
			 */
			city?: string;
			/**
			 * The name of the region, such as the province, state, or district.
			 */
			province?: string;
			/**
			 * The two-letter country code of the address, such as `CZ` for Czechia.
			 */
			countryCode?: string;
			/**
			 * The zip or postal code of the address.
			 */
			zip?: string;
			/**
			 * The global ID of the fulfillment order destination.
			 */
			id?: string;
			/**
			 * The first name of the recipient.
			 */
			firstName?: string;
			/**
			 * The last name of the recipient.
			 */
			lastName?: string;
			/**
			 * The company of the recipient.
			 */
			company?: string;
			/**
			 * The email address of the recipient.
			 */
			email?: string;
			/**
			 * The phone number of the recipient.
			 */
			phone?: string;
		};
		/**
		 * The delivery method of the fulfillment order.
		 */
		deliveryMethod?: {
			/**
			 * The global ID of the delivery method.
			 */
			id?: string;
			/**
			 * The type of delivery method, such as `SHIPPING`, `LOCAL`, `PICK_UP`, `RETAIL`, or `NONE`.
			 */
			methodType?: string;
			/**
			 * The name of the delivery option as presented to the buyer.
			 */
			presentedName?: string;
			/**
			 * The code of the delivery service provider.
			 */
			serviceCode?: string;
			/**
			 * The reference to the shipping method on the source platform.
			 */
			sourceReference?: string;
			/**
			 * The earliest date and time the delivery is expected.
			 */
			minDeliveryDateTime?: string;
			/**
			 * The latest date and time the delivery is expected.
			 */
			maxDeliveryDateTime?: string;
			/**
			 * Additional delivery instructions supplied by the buyer.
			 */
			additionalInformation?: {
				/**
				 * The delivery instructions.
				 */
				instructions?: string;
				/**
				 * The phone number of the recipient for the delivery.
				 */
				phone?: string;
			};
			/**
			 * The branded delivery promise shown to the buyer, such as Shop Promise.
			 */
			brandedPromise?: {
				/**
				 * The handle of the branded promise, such as `shop_promise`.
				 */
				handle?: string;
				/**
				 * The human-readable name of the branded promise.
				 */
				name?: string;
			};
		};
		/**
		 * The line items of the fulfillment order. Returned only when **Output line items** is enabled.
		 */
		lineItems?: {
			/**
			 * The list of fulfillment order line items.
			 *
			 * Items: A line item of the fulfillment order.
			 */
			nodes?: {
				/**
				 * The global ID of the fulfillment order line item. This is the ID the **Create a fulfillment** endpoint expects.
				 */
				id?: string;
				/**
				 * The global ID of the inventory item of the line item.
				 */
				inventoryItemId?: string;
				/**
				 * The total number of units of the line item in the fulfillment order.
				 */
				totalQuantity?: number;
				/**
				 * The number of units that are still not fulfilled.
				 */
				remainingQuantity?: number;
				/**
				 * The title of the product of the line item.
				 */
				productTitle?: string;
				/**
				 * The title of the product variant of the line item.
				 */
				variantTitle?: string;
				/**
				 * The stock keeping unit of the line item.
				 */
				sku?: string;
				/**
				 * Whether the line item must be physically shipped.
				 */
				requiresShipping?: boolean;
			}[];
		};
	}[];
	/**
	 * The cursor information used to paginate through the result set.
	 */
	pageInfo?: {
		/**
		 * Whether another page of results exists after this one.
		 */
		hasNextPage?: boolean;
		/**
		 * Whether another page of results exists before this one.
		 */
		hasPreviousPage?: boolean;
		/**
		 * The cursor of the first result in this page.
		 */
		startCursor?: string;
		/**
		 * The cursor of the last result in this page. Pass it as **After** to fetch the next page.
		 */
		endCursor?: string;
	};
};

/**
 * Search fulfillment orders
 * Returns a list of fulfillment orders that match a search query.
 */
export async function searchFulfillmentOrders(
	this: EndpointFunctionThis,
	payload: {
		input: SearchFulfillmentOrdersInput;
		connectionId: number;
	},
): Promise<SearchFulfillmentOrdersOutput> {
	const response = await this.endpointCaller<SearchFulfillmentOrdersOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'searchFulfillmentOrders',
		},
		payload,
	);
	return response.output;
}
