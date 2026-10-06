// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetAnOrderInput = {
	/**
	 * The global ID of the order to retrieve, such as `gid://shopify/Order/123`. The Search orders endpoint returns this value as `id`.
	 */
	id: string;
	/**
	 * Whether to include the line items of each order. Increases the query cost.
	 */
	lineItems?: boolean;
	/**
	 * Whether to include the product variants of each line item. Requires **Output line items** and increases the query cost significantly.
	 */
	variants?: boolean;
	/**
	 * Whether to include the customer details of each order. The shipping and billing addresses are returned regardless of this setting.
	 */
	customer?: boolean;
	/**
	 * Whether to include the shipping lines of each order.
	 */
	shippingLines?: boolean;
	/**
	 * Whether to include the metafields of each order.
	 */
	metafields?: boolean;
	/**
	 * Whether to include the fulfillment order IDs and the fulfillment count of the order.
	 */
	fulfillmentOrders?: boolean;
};

export type GetAnOrderOutput = {
	/**
	 * The global ID of the order, such as `gid://shopify/Order/123`.
	 */
	id?: string;
	/**
	 * The REST API ID of the order.
	 */
	legacyResourceId?: string;
	/**
	 * The unique identifier of the order that appears on the order, such as `#1001`.
	 */
	name?: string;
	/**
	 * The email address associated with the order.
	 */
	email?: string;
	/**
	 * The phone number associated with the order, in E.164 format.
	 */
	phone?: string;
	/**
	 * The purchase order number associated with the order.
	 */
	poNumber?: string;
	/**
	 * The financial status of the order, such as `PAID`. See [OrderDisplayFinancialStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderDisplayFinancialStatus).
	 */
	displayFinancialStatus?: string;
	/**
	 * The fulfillment status of the order, such as `UNFULFILLED`. See [OrderDisplayFulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderDisplayFulfillmentStatus).
	 */
	displayFulfillmentStatus?: string;
	/**
	 * Whether inventory has been reserved for the order.
	 */
	confirmed?: boolean;
	/**
	 * The randomly generated code shown to the customer to confirm the order.
	 */
	confirmationNumber?: string;
	/**
	 * The tags attached to the order.
	 *
	 * Items: A tag attached to the order.
	 */
	tags?: string[];
	/**
	 * The URL of the order status page for the customer.
	 */
	statusPageUrl?: string;
	/**
	 * The note associated with the order.
	 */
	note?: string;
	/**
	 * The date and time when the order was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the order was last modified.
	 */
	updatedAt?: string;
	/**
	 * Whether the billing address matches the shipping address.
	 */
	billingAddressMatchesShippingAddress?: boolean;
	/**
	 * Whether the order has been paid in full.
	 */
	fullyPaid?: boolean;
	/**
	 * The total price of the order, including taxes, shipping, and discounts.
	 */
	totalPriceSet?: {
		/**
		 * The amount in the customer's presentment currency.
		 */
		presentmentMoney?: {
			/**
			 * The decimal monetary amount, serialized as a string.
			 */
			amount?: string;
			/**
			 * The three-letter currency code in ISO 4217 format, such as `USD`.
			 */
			currencyCode?: string;
		};
	};
	/**
	 * The mailing address the order is shipped to.
	 */
	shippingAddress?: {
		/**
		 * The full name of the person at this address.
		 */
		name?: string;
		/**
		 * The first name of the person at this address.
		 */
		firstName?: string;
		/**
		 * The last name of the person at this address.
		 */
		lastName?: string;
		/**
		 * The phone number at this address, in E.164 format.
		 */
		phone?: string;
		/**
		 * The company or organization at this address.
		 */
		company?: string;
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
		 * The code for the region, such as `QC` for Quebec, Canada.
		 */
		provinceCode?: string;
		/**
		 * The name of the country.
		 */
		country?: string;
		/**
		 * The two-letter country code of the address, such as `CZ` for Czechia.
		 */
		countryCodeV2?: string;
		/**
		 * The zip or postal code of the address.
		 */
		zip?: string;
	};
	/**
	 * The mailing address associated with the payment method.
	 */
	billingAddress?: {
		/**
		 * The full name of the person at this address.
		 */
		name?: string;
		/**
		 * The first name of the person at this address.
		 */
		firstName?: string;
		/**
		 * The last name of the person at this address.
		 */
		lastName?: string;
		/**
		 * The phone number at this address, in E.164 format.
		 */
		phone?: string;
		/**
		 * The company or organization at this address.
		 */
		company?: string;
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
		 * The code for the region, such as `QC` for Quebec, Canada.
		 */
		provinceCode?: string;
		/**
		 * The name of the country.
		 */
		country?: string;
		/**
		 * The two-letter country code of the address, such as `CZ` for Czechia.
		 */
		countryCodeV2?: string;
		/**
		 * The zip or postal code of the address.
		 */
		zip?: string;
	};
	/**
	 * The customer associated with the order. Returned only when **Output customer details** is enabled.
	 */
	customer?: {
		/**
		 * The global ID of the customer.
		 */
		id?: string;
		/**
		 * The REST API ID of the customer.
		 */
		legacyResourceId?: string;
		/**
		 * The first name of the customer.
		 */
		firstName?: string;
		/**
		 * The last name of the customer.
		 */
		lastName?: string;
		/**
		 * The full name of the customer, based on the first and last names.
		 */
		displayName?: string;
		/**
		 * Whether the customer has verified their email address.
		 */
		verifiedEmail?: boolean;
		/**
		 * The note associated with the customer.
		 */
		note?: string;
		/**
		 * The tags attached to the customer.
		 *
		 * Items: A tag attached to the customer.
		 */
		tags?: string[];
		/**
		 * The number of orders the customer has placed, returned as a string.
		 */
		numberOfOrders?: string;
		/**
		 * The default email address of the customer and its marketing state.
		 */
		defaultEmailAddress?: {
			/**
			 * The email address of the customer.
			 */
			emailAddress?: string;
			/**
			 * The marketing subscription opt-in level used when the customer consented to receive marketing material by email.
			 */
			marketingOptInLevel?: string;
			/**
			 * The current email marketing state of the customer.
			 */
			marketingState?: string;
			/**
			 * Whether the email address is formatted correctly.
			 */
			validFormat?: boolean;
		};
		/**
		 * The default phone number of the customer and its marketing state.
		 */
		defaultPhoneNumber?: {
			/**
			 * The phone number of the customer, in E.164 format.
			 */
			phoneNumber?: string;
			/**
			 * The marketing subscription opt-in level used when the customer consented to receive marketing material by SMS.
			 */
			marketingOptInLevel?: string;
			/**
			 * The current SMS marketing state of the customer.
			 */
			marketingState?: string;
		};
		/**
		 * The default mailing address of the customer.
		 */
		defaultAddress?: {
			/**
			 * The full name of the person at this address.
			 */
			name?: string;
			/**
			 * The first name of the person at this address.
			 */
			firstName?: string;
			/**
			 * The last name of the person at this address.
			 */
			lastName?: string;
			/**
			 * The phone number at this address, in E.164 format.
			 */
			phone?: string;
			/**
			 * The company or organization at this address.
			 */
			company?: string;
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
			 * The code for the region, such as `QC` for Quebec, Canada.
			 */
			provinceCode?: string;
			/**
			 * The name of the country.
			 */
			country?: string;
			/**
			 * The two-letter country code of the address, such as `CZ` for Czechia.
			 */
			countryCodeV2?: string;
			/**
			 * The zip or postal code of the address.
			 */
			zip?: string;
		};
	};
	/**
	 * The shipping methods applied to the order. Returned only when **Output shipping lines** is enabled.
	 */
	shippingLines?: {
		/**
		 * The list of shipping lines.
		 *
		 * Items: A shipping method applied to the order.
		 */
		nodes?: {
			/**
			 * The global ID of the shipping line.
			 */
			id?: string;
		}[];
	};
	/**
	 * The line items of the order. Returned only when **Output line items** is enabled.
	 */
	lineItems?: {
		/**
		 * The list of line items.
		 *
		 * Items: A line item of the order.
		 */
		nodes?: {
			/**
			 * The global ID of the line item.
			 */
			id?: string;
			/**
			 * The stock keeping unit of the line item variant.
			 */
			sku?: string;
			/**
			 * The number of units ordered.
			 */
			quantity?: number;
			/**
			 * The unit price of the line item before discounts.
			 */
			originalUnitPriceSet?: {
				/**
				 * The amount in the customer's presentment currency.
				 */
				presentmentMoney?: {
					/**
					 * The decimal monetary amount, serialized as a string.
					 */
					amount?: string;
					/**
					 * The three-letter currency code in ISO 4217 format, such as `USD`.
					 */
					currencyCode?: string;
				};
			};
			/**
			 * The unit price of the line item after line-level discounts.
			 */
			discountedUnitPriceSet?: {
				/**
				 * The amount in the customer's presentment currency.
				 */
				presentmentMoney?: {
					/**
					 * The decimal monetary amount, serialized as a string.
					 */
					amount?: string;
					/**
					 * The three-letter currency code in ISO 4217 format, such as `USD`.
					 */
					currencyCode?: string;
				};
			};
			/**
			 * The unit price of the line item after all line-level and order-level discounts.
			 */
			discountedUnitPriceAfterAllDiscountsSet?: {
				/**
				 * The amount in the customer's presentment currency.
				 */
				presentmentMoney?: {
					/**
					 * The decimal monetary amount, serialized as a string.
					 */
					amount?: string;
					/**
					 * The three-letter currency code in ISO 4217 format, such as `USD`.
					 */
					currencyCode?: string;
				};
			};
			/**
			 * The product variant of the line item. Returned only when **Output product variants** is enabled.
			 */
			variant?: {
				/**
				 * The global ID of the product variant.
				 */
				id?: string;
				/**
				 * The REST API ID of the product variant.
				 */
				legacyResourceId?: string;
				/**
				 * The product title combined with the variant selected options.
				 */
				displayName?: string;
				/**
				 * The stock keeping unit of the product variant.
				 */
				sku?: string;
				/**
				 * Whether a tax is charged when the product variant is sold.
				 */
				taxable?: boolean;
				/**
				 * Whether the product variant is available for sale.
				 */
				availableForSale?: boolean;
				/**
				 * The total sellable quantity of the product variant.
				 */
				inventoryQuantity?: number;
				/**
				 * The barcode of the product variant, such as an ISBN, UPC, or GTIN.
				 */
				barcode?: string;
			};
			/**
			 * The product of the line item.
			 */
			product?: {
				/**
				 * The global ID of the product.
				 */
				id?: string;
				/**
				 * The REST API ID of the product.
				 */
				legacyResourceId?: string;
				/**
				 * The quantity of inventory that is in stock across all locations.
				 */
				totalInventory?: number;
				/**
				 * Whether inventory tracking has been enabled for the product.
				 */
				tracksInventory?: boolean;
				/**
				 * The variants of the product. Returned only when **Output product variants** is enabled.
				 */
				variants?: {
					/**
					 * The list of product variants.
					 *
					 * Items: A variant of the product.
					 */
					nodes?: {
						/**
						 * The global ID of the product variant.
						 */
						id?: string;
						/**
						 * The REST API ID of the product variant.
						 */
						legacyResourceId?: string;
						/**
						 * The product title combined with the variant selected options.
						 */
						displayName?: string;
						/**
						 * The stock keeping unit of the product variant.
						 */
						sku?: string;
						/**
						 * Whether a tax is charged when the product variant is sold.
						 */
						taxable?: boolean;
						/**
						 * Whether the product variant is available for sale.
						 */
						availableForSale?: boolean;
						/**
						 * The total sellable quantity of the product variant.
						 */
						inventoryQuantity?: number;
						/**
						 * The barcode of the product variant, such as an ISBN, UPC, or GTIN.
						 */
						barcode?: string;
					}[];
				};
			};
		}[];
	};
	/**
	 * The metafields of the order. Returned only when **Output order metafields** is enabled.
	 */
	metafields?: {
		/**
		 * The list of metafields.
		 *
		 * Items: A metafield holding additional information about the resource.
		 */
		nodes?: {
			/**
			 * The global ID of the metafield.
			 */
			id?: string;
			/**
			 * The container the metafield belongs to.
			 */
			namespace?: string;
			/**
			 * The REST API ID of the metafield.
			 */
			legacyResourceId?: string;
			/**
			 * The unique identifier of the metafield within its namespace.
			 */
			key?: string;
			/**
			 * The data stored in the metafield, always returned as a string.
			 */
			value?: string;
			/**
			 * The data stored in the metafield, parsed into its JSON representation.
			 */
			jsonValue?: Record<string, JSONValue>;
			/**
			 * The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).
			 */
			type?: string;
		}[];
	};
	/**
	 * The number of fulfillments of the order. Returned only when **Output fulfillment order IDs** is enabled.
	 */
	fulfillmentsCount?: {
		/**
		 * The number of fulfillments.
		 */
		count?: number;
		/**
		 * Whether the count is exact or a lower bound, such as `EXACT` or `AT_LEAST`.
		 */
		precision?: string;
	};
	/**
	 * The fulfillment orders of the order. Returned only when **Output fulfillment order IDs** is enabled.
	 */
	fulfillmentOrders?: {
		/**
		 * The list of fulfillment orders.
		 *
		 * Items: A fulfillment order of the order.
		 */
		nodes?: {
			/**
			 * The global ID of the fulfillment order. Pass it to the Get a fulfillment order endpoint for details.
			 */
			id?: string;
		}[];
	};
};

/**
 * Get an order
 * Returns a single order by its ID.
 */
export async function getAnOrder(
	this: EndpointFunctionThis,
	payload: {
		input: GetAnOrderInput;
		connectionId: number;
	},
): Promise<GetAnOrderOutput> {
	const response = await this.endpointCaller<GetAnOrderOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'getAnOrder',
		},
		payload,
	);
	return response.output;
}
