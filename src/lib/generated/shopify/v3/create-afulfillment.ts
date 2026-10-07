// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateAFulfillmentInput = {
	/**
	 * The fulfillment to create from one or more fulfillment orders.
	 */
	fulfillment: {
		/**
		 * The fulfillment order line items to fulfill, grouped by fulfillment order. Leave **Line items** empty for an entry to fulfill everything in that fulfillment order.
		 *
		 * @minItems 1
		 *
		 * Items: One fulfillment order and the line items of it to fulfill.
		 */
		lineItemsByFulfillmentOrder: [
			{
				/**
				 * The global ID of the fulfillment order, such as `gid://shopify/FulfillmentOrder/123`. The **Get a fulfillment order** endpoint returns it as `id`.
				 */
				fulfillmentOrderId: string;
				/**
				 * The specific line items to fulfill. Leave empty to fulfill all line items of the fulfillment order. Accepts a maximum of 512 line items.
				 *
				 * Items: One fulfillment order line item and the quantity to fulfill.
				 */
				fulfillmentOrderLineItems?: {
					/**
					 * The global ID of the fulfillment order line item, as returned by the **Get a fulfillment order** endpoint under **Line items**. Required when a line item is provided.
					 */
					id?: string;
					/**
					 * The number of units of this line item to fulfill. Required when a line item is provided.
					 */
					quantity?: number;
				}[];
			},
			...{
				/**
				 * The global ID of the fulfillment order, such as `gid://shopify/FulfillmentOrder/123`. The **Get a fulfillment order** endpoint returns it as `id`.
				 */
				fulfillmentOrderId: string;
				/**
				 * The specific line items to fulfill. Leave empty to fulfill all line items of the fulfillment order. Accepts a maximum of 512 line items.
				 *
				 * Items: One fulfillment order line item and the quantity to fulfill.
				 */
				fulfillmentOrderLineItems?: {
					/**
					 * The global ID of the fulfillment order line item, as returned by the **Get a fulfillment order** endpoint under **Line items**. Required when a line item is provided.
					 */
					id?: string;
					/**
					 * The number of units of this line item to fulfill. Required when a line item is provided.
					 */
					quantity?: number;
				}[];
			}[],
		];
		/**
		 * Whether a shipping notification is sent to the customer when the fulfillment is created. Defaults to `false`.
		 */
		notifyCustomer?: boolean;
		/**
		 * The tracking information of the fulfillment. Provide either the singular **Number** / **URL** pair or the plural **Numbers** / **URLs** pair, never a mix of the two.
		 */
		trackingInfo?: {
			/**
			 * The name of the tracking company. When it matches one of the [supported tracking companies](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/FulfillmentTrackingInfo#supported-tracking-companies) exactly — capitalization included — Shopify builds the tracking URLs automatically and you only need the numbers. Otherwise supply the URLs yourself.
			 */
			company?: string;
			/**
			 * The tracking number of the fulfillment. Use this with **URL** for a single shipment; do not combine it with **Numbers**.
			 */
			number?: string;
			/**
			 * The URL to track the fulfillment, such as `https://www.myshipping.com/track/?tracknumbers=TRACKING_NUMBER`. Must be an RFC 3986-compliant URI. Provide it together with **Number**.
			 */
			url?: string;
			/**
			 * The tracking numbers of the fulfillment when one fulfillment covers several shipments. Use this with **URLs**; do not combine it with **Number**.
			 *
			 * Items: One tracking number of the fulfillment.
			 */
			numbers?: string[];
			/**
			 * The tracking URLs of the fulfillment. They are matched to **Numbers** by position, so the first URL belongs to the first number.
			 *
			 * Items: One tracking URL of the fulfillment. Must be an RFC 3986-compliant URI.
			 */
			urls?: string[];
		};
		/**
		 * The address the order was fulfilled from, typically the warehouse or fulfillment center. Intended for tax calculation.
		 */
		originAddress?: {
			/**
			 * The country of the fulfillment location. Required when an origin address is provided.
			 */
			countryCode?: string;
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
			 * The zip code of the fulfillment location.
			 */
			zip?: string;
		};
	};
	/**
	 * An optional message about the fulfillment, shown to the fulfillment service.
	 */
	message?: string;
};

export type CreateAFulfillmentOutput = {
	/**
	 * The created fulfillment.
	 */
	fulfillment?: {
		/**
		 * The global ID of the created fulfillment.
		 */
		id?: string;
		/**
		 * The REST API ID of the created fulfillment.
		 */
		legacyResourceId?: string;
		/**
		 * A human-readable identifier of the fulfillment, such as `#1001.1`.
		 */
		name?: string;
		/**
		 * The status of the fulfillment, such as `SUCCESS` or `PENDING`.
		 */
		status?: string;
		/**
		 * The total number of units in the fulfillment.
		 */
		totalQuantity?: number;
		/**
		 * The date and time when the fulfillment was created.
		 */
		createdAt?: string;
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
 * Create a fulfillment
 * Creates a fulfillment for the line items of one or more fulfillment orders.
 */
export async function createAfulfillment(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAFulfillmentInput;
		connectionId: number;
	},
): Promise<CreateAFulfillmentOutput> {
	const response = await this.endpointCaller<CreateAFulfillmentOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'createAFulfillment',
		},
		payload,
	);
	return response.output;
}
