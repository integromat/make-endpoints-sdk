// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type FulfillOrderInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for an order. Use the `listOrders` endpoint to find it.
	 */
	order_id: string;
	/**
	 * Whether or not the Order Fulfilled email should be sent. Defaults to `false`.
	 */
	sendOrderFulfilledEmail?: boolean;
};

export type FulfillOrderOutput = {
	/**
	 * The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.
	 */
	orderId?: string;
	/**
	 * The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.
	 */
	status?: string;
	/**
	 * A comment string for this Order, which is editable by API user (not used by Webflow).
	 */
	comment?: string;
	/**
	 * A comment that the customer left when making their Order.
	 */
	orderComment?: string;
	/**
	 * The ISO8601 timestamp that an Order was placed.
	 */
	acceptedOn?: string;
	/**
	 * When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.
	 */
	fulfilledOn?: string;
	/**
	 * When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.
	 */
	refundedOn?: string;
	/**
	 * When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.
	 */
	disputedOn?: string;
	/**
	 * If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.
	 */
	disputeUpdatedOn?: string;
	/**
	 * If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.
	 */
	disputeLastStatus?: string;
	/**
	 * The total paid by the customer.
	 */
	customerPaid?: {
		/**
		 * The three-letter ISO currency code.
		 */
		unit?: string;
		/**
		 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
		 */
		value?: number;
		/**
		 * The user-facing string representation of the amount.
		 */
		string?: string;
	};
	/**
	 * The net amount after application fees.
	 */
	netAmount?: {
		/**
		 * The three-letter ISO currency code.
		 */
		unit?: string;
		/**
		 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
		 */
		value?: number;
		/**
		 * The user-facing string representation of the amount.
		 */
		string?: string;
	};
	/**
	 * The application fee assessed by the platform.
	 */
	applicationFee?: {
		/**
		 * The three-letter ISO currency code.
		 */
		unit?: string;
		/**
		 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
		 */
		value?: number;
		/**
		 * The user-facing string representation of the amount.
		 */
		string?: string;
	};
	/**
	 * All addresses provided by the customer during the ordering flow.
	 *
	 * Items: A customer address.
	 */
	allAddresses?: {
		/**
		 * The type of the order address (billing or shipping). One of: `shipping`, `billing`.
		 */
		type?: string;
		/**
		 * Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.
		 */
		japanType?: string;
		/**
		 * Display name on the address.
		 */
		addressee?: string;
		/**
		 * The first line of the address.
		 */
		line1?: string;
		/**
		 * The second line of the address.
		 */
		line2?: string;
		/**
		 * The city of the address.
		 */
		city?: string;
		/**
		 * The state or province of the address.
		 */
		state?: string;
		/**
		 * The country of the address.
		 */
		country?: string;
		/**
		 * The postal code of the address.
		 */
		postalCode?: string;
	}[];
	/**
	 * The shipping address.
	 */
	shippingAddress?: {
		/**
		 * The type of the order address (billing or shipping). One of: `shipping`, `billing`.
		 */
		type?: string;
		/**
		 * Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.
		 */
		japanType?: string;
		/**
		 * Display name on the address.
		 */
		addressee?: string;
		/**
		 * The first line of the address.
		 */
		line1?: string;
		/**
		 * The second line of the address.
		 */
		line2?: string;
		/**
		 * The city of the address.
		 */
		city?: string;
		/**
		 * The state or province of the address.
		 */
		state?: string;
		/**
		 * The country of the address.
		 */
		country?: string;
		/**
		 * The postal code of the address.
		 */
		postalCode?: string;
	};
	/**
	 * The billing address.
	 */
	billingAddress?: {
		/**
		 * The type of the order address (billing or shipping). One of: `shipping`, `billing`.
		 */
		type?: string;
		/**
		 * Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.
		 */
		japanType?: string;
		/**
		 * Display name on the address.
		 */
		addressee?: string;
		/**
		 * The first line of the address.
		 */
		line1?: string;
		/**
		 * The second line of the address.
		 */
		line2?: string;
		/**
		 * The city of the address.
		 */
		city?: string;
		/**
		 * The state or province of the address.
		 */
		state?: string;
		/**
		 * The country of the address.
		 */
		country?: string;
		/**
		 * The postal code of the address.
		 */
		postalCode?: string;
	};
	/**
	 * A string editable by the API user to note the shipping provider used (not used by Webflow).
	 */
	shippingProvider?: string;
	/**
	 * A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).
	 */
	shippingTracking?: string;
	/**
	 * The shipping tracking URL.
	 */
	shippingTrackingURL?: string;
	/**
	 * An object with the keys `fullName` and `email`.
	 */
	customerInfo?: {
		/**
		 * The full name of the Customer.
		 */
		fullName?: string;
		/**
		 * The Customer's email address.
		 */
		email?: string;
	};
	/**
	 * An array of all things that the Customer purchased.
	 *
	 * Items: An Item that was purchased.
	 */
	purchasedItems?: {
		/**
		 * Number of Item purchased.
		 */
		count?: number;
		/**
		 * The total for the row.
		 */
		rowTotal?: {
			/**
			 * The three-letter ISO currency code.
			 */
			unit?: string;
			/**
			 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
			 */
			value?: number;
			/**
			 * The user-facing string representation of the amount.
			 */
			string?: string;
		};
		/**
		 * The unique identifier for the Product.
		 */
		productId?: string;
		/**
		 * User-facing name of the Product.
		 */
		productName?: string;
		/**
		 * Slug for the Product.
		 */
		productSlug?: string;
		/**
		 * Identifier for the Product Variant (SKU).
		 */
		variantId?: string;
		/**
		 * User-facing name of the Product Variant (SKU).
		 */
		variantName?: string;
		/**
		 * Slug for the Product Variant (SKU).
		 */
		variantSlug?: string;
		/**
		 * The user-defined custom SKU of the Product Variant (SKU).
		 */
		variantSKU?: string;
		/**
		 * The variant image of the purchased item.
		 */
		variantImage?: {
			/**
			 * The hosted location for the Variant's image.
			 */
			url?: string;
			/**
			 * The file of the variant image.
			 */
			file?: {
				/**
				 * The image size in bytes.
				 */
				size?: number;
				/**
				 * The original name of the image.
				 */
				originalFileName?: string;
				/**
				 * The creation timestamp of the image.
				 */
				createdOn?: string;
				/**
				 * The MIME type of the image.
				 */
				contentType?: string;
				/**
				 * The image width in pixels.
				 */
				width?: number;
				/**
				 * The image height in pixels.
				 */
				height?: number;
				/**
				 * Variants of the supplied image.
				 *
				 * Items: A resized rendition of the image.
				 */
				variants?: {
					/**
					 * The hosted location for the Variant's image.
					 */
					url?: string;
					/**
					 * The original file name of the variant.
					 */
					originalFileName?: string;
					/**
					 * The image size in bytes.
					 */
					size?: number;
					/**
					 * The image width in pixels.
					 */
					width?: number;
					/**
					 * The image height in pixels.
					 */
					height?: number;
				}[];
			};
		};
		/**
		 * The price corresponding to the variant.
		 */
		variantPrice?: {
			/**
			 * The three-letter ISO currency code.
			 */
			unit?: string;
			/**
			 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
			 */
			value?: number;
			/**
			 * The user-facing string representation of the amount.
			 */
			string?: string;
		};
		/**
		 * The physical weight of the variant if provided, or null.
		 */
		weight?: number;
		/**
		 * The physical width of the variant if provided, or null.
		 */
		width?: number;
		/**
		 * The physical height of the variant if provided, or null.
		 */
		height?: number;
		/**
		 * The physical length of the variant if provided, or null.
		 */
		length?: number;
	}[];
	/**
	 * The sum of all 'count' fields in 'purchasedItems'.
	 */
	purchasedItemsCount?: number;
	/**
	 * An object with various Stripe IDs, useful for linking into the Stripe dashboard.
	 */
	stripeDetails?: {
		/**
		 * Stripe-generated identifier for the Subscription.
		 */
		subscriptionId?: string;
		/**
		 * Stripe-generated identifier for the PaymentMethod used.
		 */
		paymentMethod?: string;
		/**
		 * Stripe-generated identifier for the PaymentIntent, or null.
		 */
		paymentIntentId?: string;
		/**
		 * Stripe-generated customer identifier, or null.
		 */
		customerId?: string;
		/**
		 * Stripe-generated charge identifier, or null.
		 */
		chargeId?: string;
		/**
		 * Stripe-generated dispute identifier, or null.
		 */
		disputeId?: string;
		/**
		 * Stripe-generated refund identifier, or null.
		 */
		refundId?: string;
		/**
		 * Stripe-generated refund reason, or null.
		 */
		refundReason?: string;
	};
	/**
	 * Details on the card used to pay for this order, if the order was finalized with Stripe.
	 */
	stripeCard?: {
		/**
		 * The last 4 digits on the card as a string.
		 */
		last4?: string;
		/**
		 * The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.
		 */
		brand?: string;
		/**
		 * The name on the card.
		 */
		ownerName?: string;
		/**
		 * The card's expiration date.
		 */
		expires?: {
			/**
			 * Year that the card expires.
			 */
			year?: number;
			/**
			 * Month that the card expires.
			 */
			month?: number;
		};
	};
	/**
	 * PayPal transaction details when the order was paid with PayPal.
	 */
	paypalDetails?: {
		/**
		 * PayPal order identifier.
		 */
		orderId?: string;
		/**
		 * PayPal payer identifier.
		 */
		payerId?: string;
		/**
		 * PayPal capture identifier.
		 */
		captureId?: string;
		/**
		 * PayPal refund identifier.
		 */
		refundId?: string;
		/**
		 * PayPal-issued reason for the refund.
		 */
		refundReason?: string;
		/**
		 * PayPal dispute identifier.
		 */
		disputeId?: string;
	};
	/**
	 * An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.
	 *
	 * Items: One custom-data entry.
	 */
	customData?: Record<string, JSONValue>[];
	/**
	 * Additional metadata of the order.
	 */
	metadata?: {
		/**
		 * Whether the order was placed through the Buy Now button.
		 */
		isBuyNow?: boolean;
	};
	/**
	 * A boolean indicating whether the customer has been deleted from the site.
	 */
	isCustomerDeleted?: boolean;
	/**
	 * A boolean indicating whether the order contains one or more purchased items that require shipping.
	 */
	isShippingRequired?: boolean;
	/**
	 * A boolean indicating whether the order contains one or more purchased items that are downloadable.
	 */
	hasDownloads?: boolean;
	/**
	 * A string indicating the payment processor used for this order.
	 */
	paymentProcessor?: string;
	/**
	 * An object describing various pricing totals.
	 */
	totals?: {
		/**
		 * The subtotal price.
		 */
		subtotal?: {
			/**
			 * The three-letter ISO currency code.
			 */
			unit?: string;
			/**
			 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
			 */
			value?: number;
			/**
			 * The user-facing string representation of the amount.
			 */
			string?: string;
		};
		/**
		 * An array of extra items, includes discounts, shipping, and taxes.
		 *
		 * Items: Extra order items, includes discounts, shipping, and taxes.
		 */
		extras?: {
			/**
			 * The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.
			 */
			type?: string;
			/**
			 * A human-readable (but English) name for this extra charge.
			 */
			name?: string;
			/**
			 * A human-readable (but English) description of this extra charge.
			 */
			description?: string;
			/**
			 * The price for the item.
			 */
			price?: {
				/**
				 * The three-letter ISO currency code.
				 */
				unit?: string;
				/**
				 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
				 */
				value?: number;
				/**
				 * The user-facing string representation of the amount.
				 */
				string?: string;
			};
		}[];
		/**
		 * The total price.
		 */
		total?: {
			/**
			 * The three-letter ISO currency code.
			 */
			unit?: string;
			/**
			 * Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow's own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.
			 */
			value?: number;
			/**
			 * The user-facing string representation of the amount.
			 */
			string?: string;
		};
	};
	/**
	 * An array of downloadable file objects.
	 *
	 * Items: One downloadable file.
	 */
	downloadFiles?: {
		/**
		 * The unique identifier for the downloadable file.
		 */
		id?: string;
		/**
		 * The user-facing name for the downloadable file.
		 */
		name?: string;
		/**
		 * The hosted location for the downloadable file.
		 */
		url?: string;
	}[];
};

/**
 * Fulfill an order
 * Marks an order as fulfilled.
 */
export async function fulfillOrder(
	this: EndpointFunctionThis,
	payload: {
		input: FulfillOrderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<FulfillOrderOutput> {
	const response = await this.endpointCaller<FulfillOrderOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'fulfillOrder',
		},
		payload,
	);
	return response.output;
}
