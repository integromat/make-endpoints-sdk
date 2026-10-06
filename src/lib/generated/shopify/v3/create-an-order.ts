// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateAnOrderInput = {
	/**
	 * The line items to create for the order. Each line item must reference either a product variant or a title and price.
	 *
	 * Items: A line item to create for the order.
	 */
	lineItems: {
		/**
		 * The number of units purchased.
		 */
		quantity: number;
		/**
		 * The global ID of the product variant, such as `gid://shopify/ProductVariant/123`. When both **Product ID** and **Variant ID** are provided, the product of the variant is used.
		 */
		variantId?: string;
		/**
		 * The global ID of the product the line item belongs to, such as `gid://shopify/Product/123`.
		 */
		productId?: string;
		/**
		 * The title of the product variant.
		 */
		variantTitle?: string;
		/**
		 * The price of the item before discounts, in the shop currency. Required when no product variant is referenced.
		 */
		priceSet?: {
			/**
			 * The amount in the shop's currency. Required when this price is provided.
			 */
			shopMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
			/**
			 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
			 */
			presentmentMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
		};
		/**
		 * The stock keeping unit of the item.
		 */
		sku?: string;
		/**
		 * The name of the item's supplier.
		 */
		vendor?: string;
		/**
		 * Whether the item is taxable. Defaults to `true`.
		 */
		taxable?: boolean;
		/**
		 * Whether the item requires shipping. Defaults to `false`.
		 */
		requiresShipping?: boolean;
		/**
		 * Whether the item is a gift card. Gift cards are not taxed and are not considered for shipping charges. Defaults to `false`.
		 */
		giftCard?: boolean;
		/**
		 * The handle of the fulfillment service that stocks the product variant. Third-party services do not use the `manual` handle.
		 */
		fulfillmentService?: string;
		/**
		 * The weight of the line item. Takes precedence over the weight of the product variant.
		 */
		weight?: {
			/**
			 * The unit of measurement for the weight value.
			 */
			unit?: '' | 'GRAMS' | 'KILOGRAMS' | 'OUNCES' | 'POUNDS';
			/**
			 * The weight value in the selected unit.
			 */
			value?: number;
		};
		/**
		 * Custom information added to the item, often used for product customization options.
		 *
		 * Items: A custom property of the line item.
		 */
		properties?: {
			/**
			 * The name of the line item property.
			 */
			name: string;
			/**
			 * The value of the line item property.
			 */
			value: string;
		}[];
		/**
		 * The taxes applied to this line item. Tax lines can be set on the order or on its line items, but not both.
		 *
		 * Items: A tax applicable to the item.
		 */
		taxLines?: {
			/**
			 * The proportion of the item price that the tax represents, as a decimal. For example, `0.21` for 21%.
			 */
			rate: number;
			/**
			 * The amount added to the order for this tax, after discounts are applied.
			 */
			priceSet?: {
				/**
				 * The amount in the shop's currency. Required when this price is provided.
				 */
				shopMoney?: {
					/**
					 * The decimal monetary amount.
					 */
					amount?: number;
					/**
					 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
					 */
					currencyCode?: string;
				};
				/**
				 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
				 */
				presentmentMoney?: {
					/**
					 * The decimal monetary amount.
					 */
					amount?: number;
					/**
					 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
					 */
					currencyCode?: string;
				};
			};
			/**
			 * Whether the channel that submitted the tax line is liable for remitting it. Defaults to `false`.
			 */
			channelLiable?: boolean;
		}[];
	}[];
	/**
	 * The customer to associate with the order. Provide either **To associate** for an existing customer or **To upsert** to create or update one, but not both.
	 */
	customer?: {
		/**
		 * An existing customer to associate with the order, identified by ID or email.
		 */
		toAssociate?: {
			/**
			 * The global ID of the customer, such as `gid://shopify/Customer/123`.
			 */
			id?: string;
			/**
			 * The email of the customer to associate. Takes precedence over the order **Email** field.
			 */
			email?: string;
		};
		/**
		 * A customer to create, or an existing one to update, and associate with the order.
		 */
		toUpsert?: {
			/**
			 * The global ID of the customer to update. Omit it to create a new customer.
			 */
			id?: string;
			/**
			 * The email address of the customer. Used to uniquely identify the customer when no ID is provided, and takes precedence over the order **Email** field.
			 */
			email?: string;
			/**
			 * The first name of the customer.
			 */
			firstName?: string;
			/**
			 * The last name of the customer.
			 */
			lastName?: string;
			/**
			 * A unique phone number for the customer in E.164 format, such as `+16135551212`. Assigning the same number to multiple customers returns an error.
			 */
			phone?: string;
			/**
			 * A note about the customer.
			 */
			note?: string;
			/**
			 * The tags to attach to the customer. A customer can have up to 250 tags of up to 255 characters each.
			 *
			 * Items: A tag to attach to the customer.
			 */
			tags?: string[];
			/**
			 * Whether the customer is exempt from paying taxes on their order.
			 */
			taxExempt?: boolean;
			/**
			 * A unique identifier for the customer used with multipass login.
			 */
			multipassIdentifier?: string;
			/**
			 * The mailing addresses to associate with the customer. These use country and province **names**, unlike the order addresses, which use codes.
			 *
			 * Items: A mailing address of the customer.
			 */
			addresses?: {
				/**
				 * The first name of the customer.
				 */
				firstName?: string;
				/**
				 * The last name of the customer.
				 */
				lastName?: string;
				/**
				 * The name of the customer's company or organization.
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
				 * The name of the country.
				 */
				country?: string;
				/**
				 * The zip or postal code of the address.
				 */
				zip?: string;
				/**
				 * A unique phone number for the customer, formatted using the E.164 standard.
				 */
				phone?: string;
			}[];
		};
	};
	/**
	 * The email address of the order. When a customer is provided without an email, the customer email is set to this value.
	 */
	email?: string;
	/**
	 * The customer phone number of the order, in E.164 format.
	 */
	phone?: string;
	/**
	 * The mailing address the order is shipped to. When a customer is provided, this address takes precedence over the billing address as the customer default address.
	 */
	shippingAddress?: {
		/**
		 * The first name of the customer.
		 */
		firstName?: string;
		/**
		 * The last name of the customer.
		 */
		lastName?: string;
		/**
		 * The name of the customer's company or organization.
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
		 * The code for the region of the address, such as the province, state, or district. For example, `QC` for Quebec, Canada.
		 */
		provinceCode?: string;
		/**
		 * The two-letter country code of the address, such as `CZ` for Czechia. See [CountryCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CountryCode).
		 */
		countryCode?: string;
		/**
		 * The zip or postal code of the address.
		 */
		zip?: string;
		/**
		 * A unique phone number for the customer, formatted using the E.164 standard. For example, `+16135551111`.
		 */
		phone?: string;
	};
	/**
	 * The mailing address associated with the payment method. Not available on orders that do not require a payment method.
	 */
	billingAddress?: {
		/**
		 * The first name of the customer.
		 */
		firstName?: string;
		/**
		 * The last name of the customer.
		 */
		lastName?: string;
		/**
		 * The name of the customer's company or organization.
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
		 * The code for the region of the address, such as the province, state, or district. For example, `QC` for Quebec, Canada.
		 */
		provinceCode?: string;
		/**
		 * The two-letter country code of the address, such as `CZ` for Czechia. See [CountryCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CountryCode).
		 */
		countryCode?: string;
		/**
		 * The zip or postal code of the address.
		 */
		zip?: string;
		/**
		 * A unique phone number for the customer, formatted using the E.164 standard. For example, `+16135551111`.
		 */
		phone?: string;
	};
	/**
	 * The shipping methods applied to the order.
	 *
	 * Items: A shipping method applied to the order.
	 */
	shippingLines?: {
		/**
		 * The price of this shipping method in the shop currency. Cannot be negative. Required when a shipping line is provided.
		 */
		priceSet?: {
			/**
			 * The amount in the shop's currency. Required when this price is provided.
			 */
			shopMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
			/**
			 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
			 */
			presentmentMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
		};
		/**
		 * A reference to the shipping method.
		 */
		code?: string;
		/**
		 * The source of the shipping method.
		 */
		source?: string;
		/**
		 * The taxes applicable to this shipping line.
		 *
		 * Items: A tax applicable to the item.
		 */
		taxLines?: {
			/**
			 * The proportion of the item price that the tax represents, as a decimal. For example, `0.21` for 21%.
			 */
			rate: number;
			/**
			 * The amount added to the order for this tax, after discounts are applied.
			 */
			priceSet?: {
				/**
				 * The amount in the shop's currency. Required when this price is provided.
				 */
				shopMoney?: {
					/**
					 * The decimal monetary amount.
					 */
					amount?: number;
					/**
					 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
					 */
					currencyCode?: string;
				};
				/**
				 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
				 */
				presentmentMoney?: {
					/**
					 * The decimal monetary amount.
					 */
					amount?: number;
					/**
					 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
					 */
					currencyCode?: string;
				};
			};
			/**
			 * Whether the channel that submitted the tax line is liable for remitting it. Defaults to `false`.
			 */
			channelLiable?: boolean;
		}[];
	}[];
	/**
	 * The financial status of the order. Derived from the transactions when omitted, and can be recalculated later as the transactions change.
	 */
	financialStatus?:
		| ''
		| 'PENDING'
		| 'AUTHORIZED'
		| 'PARTIALLY_PAID'
		| 'PAID'
		| 'PARTIALLY_REFUNDED'
		| 'REFUNDED'
		| 'EXPIRED'
		| 'VOIDED';
	/**
	 * The fulfillment status of the order. Defaults to unfulfilled when omitted.
	 */
	fulfillmentStatus?: '' | 'FULFILLED' | 'PARTIAL' | 'RESTOCKED';
	/**
	 * A fulfillment to create for the order. It applies to all line items.
	 */
	fulfillment?: {
		/**
		 * The global ID of the location to fulfill the order from, such as `gid://shopify/Location/123`.
		 */
		locationId?: string;
		/**
		 * The tracking number of the fulfillment.
		 */
		trackingNumber?: string;
		/**
		 * The name of the tracking company, written exactly as in the [supported tracking companies list](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/FulfillmentTrackingInfo#supported-tracking-companies). Capitalization matters.
		 */
		trackingCompany?: string;
		/**
		 * Whether the customer is notified of changes to the fulfillment. Defaults to `false`.
		 */
		notifyCustomer?: boolean;
		/**
		 * The status of the shipment.
		 */
		shipmentStatus?:
			| ''
			| 'ATTEMPTED_DELIVERY'
			| 'CARRIER_PICKED_UP'
			| 'CONFIRMED'
			| 'DELAYED'
			| 'DELIVERED'
			| 'FAILURE'
			| 'IN_TRANSIT'
			| 'LABEL_PRINTED'
			| 'LABEL_PURCHASED'
			| 'OUT_FOR_DELIVERY'
			| 'READY_FOR_PICKUP';
		/**
		 * The address at which the fulfillment occurred, typically the warehouse or fulfillment center. Intended for tax calculation.
		 */
		originAddress?: {
			/**
			 * The street address of the fulfillment location.
			 */
			address1?: string;
			/**
			 * The second line of the address, typically the apartment, suite, or unit number.
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
			 * The country of the fulfillment location. Required when an origin address is provided.
			 */
			countryCode?: string;
			/**
			 * The zip code of the fulfillment location.
			 */
			zip?: string;
		};
	};
	/**
	 * The payment transactions to create for the order.
	 *
	 * Items: A payment transaction of the order.
	 */
	transactions?: {
		/**
		 * The amount of the transaction. Required when a transaction is provided.
		 */
		amountSet?: {
			/**
			 * The amount in the shop's currency. Required when this price is provided.
			 */
			shopMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
			/**
			 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
			 */
			presentmentMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
		};
		/**
		 * The kind of transaction. Defaults to `SALE`.
		 */
		kind?:
			| ''
			| 'AUTHORIZATION'
			| 'CAPTURE'
			| 'CHANGE'
			| 'EMV_AUTHORIZATION'
			| 'REFUND'
			| 'SALE'
			| 'SUGGESTED_REFUND'
			| 'VOID';
		/**
		 * The status of the transaction. Defaults to `SUCCESS`.
		 */
		status?: '' | 'AWAITING_RESPONSE' | 'ERROR' | 'FAILURE' | 'PENDING' | 'SUCCESS' | 'UNKNOWN';
		/**
		 * The name of the gateway the transaction was issued through.
		 */
		gateway?: string;
		/**
		 * The authorization code associated with the transaction.
		 */
		authorizationCode?: string;
		/**
		 * The date and time when the transaction was processed.
		 */
		processedAt?: string;
		/**
		 * The global ID of the location where the transaction was processed.
		 */
		locationId?: string;
		/**
		 * The global ID of the device used to process the transaction.
		 */
		deviceId?: string;
		/**
		 * The global ID of the gift card used for this transaction.
		 */
		giftCardId?: string;
		/**
		 * The global ID of the user who processed the transaction.
		 */
		userId?: string;
		/**
		 * The transaction receipt that the payment gateway attaches to the transaction. Its shape depends on the gateway.
		 */
		receiptJson?: Record<string, JSONValue>;
		/**
		 * Whether the transaction is a test transaction. Defaults to `false`.
		 */
		test?: boolean;
	}[];
	/**
	 * The taxes applicable to the order. Tax lines can be set on the order or on its line items, but not both. Order-level tax lines are split across the taxable line items.
	 *
	 * Items: A tax applicable to the item.
	 */
	taxLines?: {
		/**
		 * The proportion of the item price that the tax represents, as a decimal. For example, `0.21` for 21%.
		 */
		rate: number;
		/**
		 * The amount added to the order for this tax, after discounts are applied.
		 */
		priceSet?: {
			/**
			 * The amount in the shop's currency. Required when this price is provided.
			 */
			shopMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
			/**
			 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
			 */
			presentmentMoney?: {
				/**
				 * The decimal monetary amount.
				 */
				amount?: number;
				/**
				 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
				 */
				currencyCode?: string;
			};
		};
		/**
		 * Whether the channel that submitted the tax line is liable for remitting it. Defaults to `false`.
		 */
		channelLiable?: boolean;
	}[];
	/**
	 * A discount code applied to the order. Provide exactly one of the three discount types.
	 */
	discountCode?: {
		/**
		 * A free shipping discount code applied to the shipping on the order.
		 */
		freeShippingDiscountCode?: {
			/**
			 * The discount code entered at checkout.
			 */
			code?: string;
		};
		/**
		 * A fixed amount discount code applied to the line items on the order.
		 */
		itemFixedDiscountCode?: {
			/**
			 * The discount code entered at checkout.
			 */
			code?: string;
			/**
			 * The monetary amount deducted from the order total.
			 */
			amountSet?: {
				/**
				 * The amount in the shop's currency. Required when this price is provided.
				 */
				shopMoney?: {
					/**
					 * The decimal monetary amount.
					 */
					amount?: number;
					/**
					 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
					 */
					currencyCode?: string;
				};
				/**
				 * The amount in the customer's presentment currency. Defaults to the shop currency when omitted.
				 */
				presentmentMoney?: {
					/**
					 * The decimal monetary amount.
					 */
					amount?: number;
					/**
					 * The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
					 */
					currencyCode?: string;
				};
			};
		};
		/**
		 * A percentage discount code applied to the line items on the order.
		 */
		itemPercentageDiscountCode?: {
			/**
			 * The discount code entered at checkout.
			 */
			code?: string;
			/**
			 * The percentage deducted from the order total.
			 */
			percentage?: number;
		};
	};
	/**
	 * The shop-facing currency of the order, as a three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code. Defaults to the shop currency. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).
	 */
	currency?: string;
	/**
	 * The presentment currency used to display prices to the customer, as a three-letter ISO 4217 code. Required when any presentment currency amounts are used in the order.
	 */
	presentmentCurrency?: string;
	/**
	 * Whether taxes are included in the order subtotal. Defaults to `false`.
	 */
	taxesIncluded?: boolean;
	/**
	 * The global ID of the purchasing company's location for the order, such as `gid://shopify/CompanyLocation/123`.
	 */
	companyLocationId?: string;
	/**
	 * The order name shown to the merchant, such as `#1001`. Generated from the order number and the shop prefix and suffix when omitted. This is not the order ID.
	 */
	name?: string;
	/**
	 * The purchase order number associated with the order.
	 */
	poNumber?: string;
	/**
	 * The note associated with the order.
	 */
	note?: string;
	/**
	 * The tags to attach to the order.
	 *
	 * Items: A tag to attach to the order.
	 */
	tags?: string[];
	/**
	 * Extra information added to the order. Appears in the Additional details section of the order details page in the Shopify admin.
	 *
	 * Items: A note attribute of the order.
	 */
	customAttributes?: {
		/**
		 * The key or name of the custom attribute.
		 */
		key: string;
		/**
		 * The value of the custom attribute.
		 */
		value: string;
	}[];
	/**
	 * The metafields to add to the order.
	 *
	 * Items: A metafield holding additional information about the resource.
	 */
	metafields?: {
		/**
		 * The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.
		 */
		namespace?: string;
		/**
		 * The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.
		 */
		key?: string;
		/**
		 * The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).
		 */
		type?: string;
		/**
		 * The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.
		 */
		value?: string;
		/**
		 * The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.
		 */
		id?: string;
	}[];
	/**
	 * Whether the customer consented to receive email updates from the shop.
	 */
	buyerAcceptsMarketing?: boolean;
	/**
	 * The date and time when the order was processed. This is the date shown on the order and used in analytics reports. Set it to a past date when importing historical orders. On API version 2026-04, a future value returns a `PROCESSED_AT_INVALID` error.
	 */
	processedAt?: string;
	/**
	 * The date and time when the order was closed.
	 */
	closedAt?: string;
	/**
	 * The website where the customer clicked a link to the shop.
	 */
	referringSite?: string;
	/**
	 * The source channel the order is attributed to. Use the handle of an order attribution definition configured for your sales channel app, such as `youtube`.
	 */
	sourceName?: string;
	/**
	 * The ID of the order on the originating platform. This is not the Shopify ID.
	 */
	sourceIdentifier?: string;
	/**
	 * A valid URL to the original order on the originating surface, shown to merchants on the order details page. Invalid URLs are not displayed.
	 */
	sourceUrl?: string;
	/**
	 * The global ID of the staff member who processed the order, such as `gid://shopify/StaffMember/123`.
	 */
	userId?: string;
	/**
	 * Whether this is a test order. Defaults to `false`.
	 */
	test?: boolean;
	/**
	 * The inventory and notification behavior applied while creating the order.
	 */
	options?: {
		/**
		 * How inventory is claimed. `BYPASS` does not claim inventory and is the default.
		 */
		inventoryBehaviour?:
			| ''
			| 'BYPASS'
			| 'DECREMENT_IGNORING_POLICY'
			| 'DECREMENT_OBEYING_POLICY';
		/**
		 * Whether to send an order confirmation to the customer. Defaults to `false`.
		 */
		sendReceipt?: boolean;
		/**
		 * Whether to send a shipping confirmation to the customer. Defaults to `false`.
		 */
		sendFulfillmentReceipt?: boolean;
	};
};

export type CreateAnOrderOutput = {
	/**
	 * The created order. Call the Get an order endpoint with this ID for the full order details.
	 */
	order?: {
		/**
		 * The global ID of the created order.
		 */
		id?: string;
		/**
		 * The REST API ID of the created order.
		 */
		legacyResourceId?: string;
		/**
		 * The unique identifier that appears on the order, such as `#1001`.
		 */
		name?: string;
		/**
		 * The date and time when the order was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the order was last modified.
		 */
		updatedAt?: string;
	};
	/**
	 * The list of errors that occurred while executing the mutation. The call fails when this list is not empty.
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
 * Create an order
 * Creates an order with the given line items, customer, addresses, and transactions.
 */
export async function createAnOrder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAnOrderInput;
		connectionId: number;
	},
): Promise<CreateAnOrderOutput> {
	const response = await this.endpointCaller<CreateAnOrderOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'createAnOrder',
		},
		payload,
	);
	return response.output;
}
