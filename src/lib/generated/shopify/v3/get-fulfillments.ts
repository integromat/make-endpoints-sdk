// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFulfillmentsInput = {
	/**
	 * The global ID of the fulfillment order to retrieve, such as `gid://shopify/FulfillmentOrder/123`. The **Get an order** endpoint returns these IDs when **Output fulfillment order IDs** is enabled, and the **Search fulfillment orders** endpoint returns them as `id`.
	 */
	id: string;
	/**
	 * Whether to include the line items of the fulfillment order. Their IDs are what the **Create a fulfillment** endpoint expects.
	 */
	lineItems?: boolean;
	/**
	 * Whether to include the fulfillments already created for this fulfillment order, with their tracking information and location.
	 */
	fulfillments?: boolean;
	/**
	 * Whether to include the inventory levels of each fulfillment location. Requires **Output fulfillments** and increases the query cost significantly, so it is off by default.
	 */
	inventoryLevels?: boolean;
	/**
	 * Whether to include the tracking events of each fulfillment. Requires **Output fulfillments**. Off by default to keep the query cost down.
	 */
	events?: boolean;
};

export type GetFulfillmentsOutput = {
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
	/**
	 * The fulfillments created for this fulfillment order. Returned only when **Output fulfillments** is enabled.
	 */
	fulfillments?: {
		/**
		 * The list of fulfillments.
		 *
		 * Items: A fulfillment of the fulfillment order.
		 */
		nodes?: {
			/**
			 * The global ID of the fulfillment.
			 */
			id?: string;
			/**
			 * The REST API ID of the fulfillment.
			 */
			legacyResourceId?: string;
			/**
			 * A human-readable identifier of the fulfillment, such as `#1001.1`.
			 */
			name?: string;
			/**
			 * The status of the fulfillment, such as `SUCCESS`, `PENDING`, `OPEN`, `CANCELLED`, `ERROR`, or `FAILURE`.
			 */
			status?: string;
			/**
			 * The human-readable delivery status shown to the merchant, such as `DELIVERED` or `IN_TRANSIT`.
			 */
			displayStatus?: string;
			/**
			 * The total number of units in the fulfillment.
			 */
			totalQuantity?: number;
			/**
			 * Whether any of the line items require shipping.
			 */
			requiresShipping?: boolean;
			/**
			 * The date and time when the fulfillment was created.
			 */
			createdAt?: string;
			/**
			 * The estimated date and time of delivery.
			 */
			estimatedDeliveryAt?: string;
			/**
			 * The date and time when the fulfillment was delivered.
			 */
			deliveredAt?: string;
			/**
			 * The date and time when the fulfillment went into transit.
			 */
			inTransitAt?: string;
			/**
			 * The tracking information of the fulfillment. This is a list field, so it has no `nodes` wrapper.
			 *
			 * Items: One tracking entry of the fulfillment.
			 */
			trackingInfo?: {
				/**
				 * The name of the tracking company.
				 */
				company?: string;
				/**
				 * The tracking number of the fulfillment.
				 */
				number?: string;
				/**
				 * The URL to track the fulfillment.
				 */
				url?: string;
			}[];
			/**
			 * The address the fulfillment was sent from.
			 */
			originAddress?: {
				/**
				 * The street address of the fulfillment location.
				 */
				address1?: string;
				/**
				 * The second line of the address.
				 */
				address2?: string;
				/**
				 * The city of the fulfillment location.
				 */
				city?: string;
				/**
				 * The province of the fulfillment location.
				 */
				provinceCode?: string;
				/**
				 * The country of the fulfillment location.
				 */
				countryCode?: string;
				/**
				 * The zip code of the fulfillment location.
				 */
				zip?: string;
			};
			/**
			 * The location the fulfillment was processed at.
			 */
			location?: {
				/**
				 * Whether the location can be reactivated.
				 */
				activatable?: boolean;
				/**
				 * Whether the address of the location has been verified.
				 */
				addressVerified?: boolean;
				/**
				 * The date and time when the location was created.
				 */
				createdAt?: string;
				/**
				 * Whether the location can be deactivated.
				 */
				deactivatable?: boolean;
				/**
				 * The date the location was deactivated, as a string. Empty when the location is active.
				 */
				deactivatedAt?: string;
				/**
				 * Whether the location can be deleted.
				 */
				deletable?: boolean;
				/**
				 * Whether the location is used for calculating delivery rates for online orders.
				 */
				fulfillsOnlineOrders?: boolean;
				/**
				 * Whether the location is active.
				 */
				isActive?: boolean;
				/**
				 * Whether the location is the default one for shipping inventory.
				 */
				shipsInventory?: boolean;
				/**
				 * The address of the location.
				 */
				address?: {
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
					 * The code for the region of the address, such as `QC`.
					 */
					provinceCode?: string;
					/**
					 * The name of the country.
					 */
					country?: string;
					/**
					 * The phone number of the location.
					 */
					phone?: string;
					/**
					 * The latitude of the location.
					 */
					latitude?: number;
					/**
					 * The longitude of the location.
					 */
					longitude?: number;
				};
				/**
				 * The fulfillment service that manages the location.
				 */
				fulfillmentService?: {
					/**
					 * The global ID of the fulfillment service.
					 */
					id?: string;
					/**
					 * The handle of the fulfillment service. A handle other than `manual` indicates a third-party service.
					 */
					handle?: string;
					/**
					 * Whether the fulfillment service tracks product inventory and provides updates to Shopify.
					 */
					inventoryManagement?: boolean;
				};
				/**
				 * The inventory levels at the location. Returned only when **Output inventory levels** is enabled.
				 */
				inventoryLevels?: {
					/**
					 * The list of inventory levels.
					 *
					 * Items: An inventory level of one inventory item at the location.
					 */
					nodes?: {
						/**
						 * The global ID of the inventory level.
						 */
						id?: string;
						/**
						 * Whether the inventory item can be deactivated at this location.
						 */
						canDeactivate?: boolean;
						/**
						 * The reason the inventory item cannot be deactivated at this location.
						 */
						deactivationAlert?: string;
						/**
						 * The date and time when the inventory level was created.
						 */
						createdAt?: string;
						/**
						 * The date and time when the inventory level was last modified.
						 */
						updatedAt?: string;
						/**
						 * The inventory item the level belongs to.
						 */
						item?: {
							/**
							 * The global ID of the inventory item.
							 */
							id?: string;
							/**
							 * The REST API ID of the inventory item.
							 */
							legacyResourceId?: string;
							/**
							 * The stock keeping unit of the inventory item.
							 */
							sku?: string;
							/**
							 * Whether inventory levels are tracked for the item.
							 */
							tracked?: boolean;
							/**
							 * Whether the item must be physically shipped.
							 */
							requiresShipping?: boolean;
							/**
							 * The two-letter code of the country where the item was produced.
							 */
							countryCodeOfOrigin?: string;
							/**
							 * The two-letter code of the province where the item was produced.
							 */
							provinceCodeOfOrigin?: string;
							/**
							 * The date and time when the inventory item was created.
							 */
							createdAt?: string;
							/**
							 * The date and time when the inventory item was last modified.
							 */
							updatedAt?: string;
							/**
							 * The measurements of the inventory item.
							 */
							measurement?: {
								/**
								 * The weight of the inventory item.
								 */
								weight?: {
									/**
									 * The unit of measurement: `GRAMS`, `KILOGRAMS`, `OUNCES`, or `POUNDS`.
									 */
									unit?: string;
									/**
									 * The weight value in the given unit.
									 */
									value?: number;
								};
							};
							/**
							 * The unit cost of the inventory item, in the shop's default currency.
							 */
							unitCost?: {
								/**
								 * The decimal monetary amount, serialized as a string.
								 */
								amount?: string;
								/**
								 * The three-letter currency code in ISO 4217 format.
								 */
								currencyCode?: string;
							};
							/**
							 * The product variant the inventory item belongs to.
							 */
							variant?: {
								/**
								 * The global ID of the product variant.
								 */
								id?: string;
							};
						};
					}[];
				};
			};
			/**
			 * The tracking events of the fulfillment. Returned only when **Output fulfillment events** is enabled.
			 */
			events?: {
				/**
				 * The list of fulfillment events.
				 *
				 * Items: One tracking event of the fulfillment.
				 */
				nodes?: {
					/**
					 * The global ID of the fulfillment event.
					 */
					id?: string;
					/**
					 * The status the event records, such as `IN_TRANSIT` or `DELIVERED`.
					 */
					status?: string;
					/**
					 * The message associated with the event.
					 */
					message?: string;
					/**
					 * The date and time when the event was created.
					 */
					createdAt?: string;
					/**
					 * The date and time when the event occurred.
					 */
					happenedAt?: string;
					/**
					 * The estimated delivery date and time recorded by the event.
					 */
					estimatedDeliveryAt?: string;
					/**
					 * The street address where the event occurred.
					 */
					address1?: string;
					/**
					 * The city where the event occurred.
					 */
					city?: string;
					/**
					 * The province where the event occurred.
					 */
					province?: string;
					/**
					 * The country where the event occurred.
					 */
					country?: string;
					/**
					 * The zip code where the event occurred.
					 */
					zip?: string;
					/**
					 * The latitude where the event occurred.
					 */
					latitude?: number;
					/**
					 * The longitude where the event occurred.
					 */
					longitude?: number;
				}[];
			};
		}[];
	};
};

/**
 * Get a fulfillment order
 * Returns a single fulfillment order by its ID, including its line items and fulfillments.
 */
export async function getFulfillments(
	this: EndpointFunctionThis,
	payload: {
		input: GetFulfillmentsInput;
		connectionId: number;
	},
): Promise<GetFulfillmentsOutput> {
	const response = await this.endpointCaller<GetFulfillmentsOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'getFulfillments',
		},
		payload,
	);
	return response.output;
}
