// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateProductSkusInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a product. Use the `listProducts` endpoint to find it.
	 */
	product_id: string;
	/**
	 * Indicate whether the SKUs should be set as "staging" or "live". Defaults to `staging`.
	 */
	publishStatus?: '' | 'staging' | 'live';
	/**
	 * SKUs to create, one entry per variant combination. Standard SKU fields go under each `fieldData`; custom fields of the SKU collection can be added under their field slug.
	 *
	 * Items: The SKU object.
	 */
	skus: {
		/**
		 * Standard and Custom fields for a SKU.
		 */
		fieldData?: {
			/**
			 * Required for every variant: maps each `sku-properties` ID declared on the product to one of its enum IDs, e.g. `{ "color": "blue" }`. The combination must be unique per SKU.
			 */
			'sku-values'?: Record<string, JSONValue>;
			/**
			 * Name of the SKU (variant).
			 */
			name: string;
			/**
			 * URL structure of the SKU in your site. Required — Webflow does not derive it from the name here.
			 */
			slug: string;
			/**
			 * Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.
			 */
			price: {
				/**
				 * Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.
				 */
				value?: number;
				/**
				 * ISO 4217 currency code of the amount, e.g. `USD`.
				 */
				unit?: string;
				/**
				 * Same value as `unit`; optional — Webflow returns only `unit`.
				 */
				currency?: string;
			};
			/**
			 * Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.
			 */
			'compare-at-price'?: {
				/**
				 * Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.
				 */
				value?: number;
				/**
				 * ISO 4217 currency code of the amount, e.g. `USD`.
				 */
				unit?: string;
			};
			/**
			 * [Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU.
			 */
			'ec-sku-billing-method'?: '' | 'one-time' | 'subscription';
			/**
			 * [Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.
			 */
			'ec-sku-subscription-plan'?: {
				/**
				 * Interval of subscription renewal.
				 */
				interval?: '' | 'day' | 'week' | 'month' | 'year';
				/**
				 * Frequency of billing within the interval.
				 */
				frequency?: number;
				/**
				 * Number of days of a trial.
				 */
				trial?: number;
				/**
				 * The plans of the subscription plan.
				 *
				 * Items: One subscription plan entry.
				 */
				plans?: {
					/**
					 * The platform of the subscription plan.
					 */
					platform?: '' | 'stripe';
					/**
					 * The unique identifier of the plan.
					 */
					id?: string;
					/**
					 * The status of the plan.
					 */
					status?: '' | 'active' | 'inactive' | 'canceled';
				}[];
			};
			/**
			 * URL of the main image of the SKU. Webflow stores a copy and returns it as an object (`fileId`, `url`, `alt`).
			 */
			'main-image'?: string;
			/**
			 * Your own SKU code for this variant (free text, shown in the Webflow dashboard).
			 */
			sku?: string;
			/**
			 * Options are declared on the product (`product.fieldData.sku-properties`), not per SKU — leave this out and reference them through `sku-values`. Present in the vendor schema, never returned for SKUs.
			 *
			 * Items: A variant/option type for a SKU.
			 */
			'sku-properties'?: {
				/**
				 * Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.
				 */
				id?: string;
				/**
				 * Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.
				 */
				name?: string;
				/**
				 * The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.
				 *
				 * Items: Enumerated Product variants/Options for the SKU.
				 */
				enum?: {
					/**
					 * Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.
					 */
					id?: string;
					/**
					 * Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.
					 */
					name?: string;
					/**
					 * Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.
					 */
					slug?: string;
				}[];
			}[];
		};
	}[];
};

export type CreateProductSkusOutput = {
	/**
	 * SKUs (variants) of the product.
	 *
	 * Items: The SKU object.
	 */
	skus?: {
		/**
		 * Unique identifier for the SKU.
		 */
		id?: string;
		/**
		 * Identifier for the locale of the CMS item.
		 */
		cmsLocaleId?: string;
		/**
		 * The date the SKU was last published.
		 */
		lastPublished?: string;
		/**
		 * The date the SKU was last updated.
		 */
		lastUpdated?: string;
		/**
		 * The date the SKU was created.
		 */
		createdOn?: string;
		/**
		 * Standard and Custom fields for a SKU.
		 */
		fieldData?: {
			/**
			 * A mapping between SKU properties and their values, represented as key-value pairs. Each key represents a SKU Property ID (e.g. "color") and maps to its corresponding SKU Value ID (e.g. "blue"). This structure defines the specific variant combination for a SKU.
			 */
			'sku-values'?: Record<string, JSONValue>;
			/**
			 * ID of the product item this SKU belongs to. Returned by the API but not described in the vendor reference.
			 */
			product?: string;
			/**
			 * Name of the SKU (variant).
			 */
			name?: string;
			/**
			 * URL structure of the SKU in your site.
			 */
			slug?: string;
			/**
			 * Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.
			 */
			price?: {
				/**
				 * Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.
				 */
				value?: number;
				/**
				 * ISO 4217 currency code of the amount, e.g. `USD`.
				 */
				unit?: string;
			};
			/**
			 * Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.
			 */
			'compare-at-price'?: {
				/**
				 * Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.
				 */
				value?: number;
				/**
				 * ISO 4217 currency code of the amount, e.g. `USD`.
				 */
				unit?: string;
			};
			/**
			 * [Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU. One of: `one-time`, `subscription`.
			 */
			'ec-sku-billing-method'?: string;
			/**
			 * [Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.
			 */
			'ec-sku-subscription-plan'?: {
				/**
				 * Interval of subscription renewal. One of: `day`, `week`, `month`, `year`.
				 */
				interval?: string;
				/**
				 * Frequency of billing within the interval.
				 */
				frequency?: number;
				/**
				 * Number of days of a trial.
				 */
				trial?: number;
				/**
				 * The plans of the subscription plan.
				 *
				 * Items: One subscription plan entry.
				 */
				plans?: {
					/**
					 * The platform of the subscription plan. One of: `stripe`.
					 */
					platform?: string;
					/**
					 * The unique identifier of the plan.
					 */
					id?: string;
					/**
					 * The status of the plan. One of: `active`, `inactive`, `canceled`.
					 */
					status?: string;
				}[];
			};
			/**
			 * The main image of the SKU, or `null`. Set with an image URL; Webflow stores a copy and returns the asset.
			 */
			'main-image'?: {
				/**
				 * ID of the uploaded image asset.
				 */
				fileId?: string;
				/**
				 * URL of the image.
				 */
				url?: string;
				/**
				 * Alt text of the image, or `null`.
				 */
				alt?: string;
			};
			/**
			 * Additional images of the SKU, or `null`. Returned by the API but not described in the vendor reference.
			 *
			 * Items: An additional image of the SKU.
			 */
			'more-images'?: {
				/**
				 * ID of the uploaded image asset.
				 */
				fileId?: string;
				/**
				 * URL of the image.
				 */
				url?: string;
				/**
				 * Alt text of the image, or `null`.
				 */
				alt?: string;
			}[];
			/**
			 * Downloadable files attached to the SKU (digital products), or `null`. Returned by the API but not described in the vendor reference. Only empty values were observed, so the item structure is left open.
			 *
			 * Items: A downloadable file of the SKU. Returned as an open object; only empty lists were observed and the vendor reference does not describe it.
			 */
			'download-files'?: Record<string, JSONValue>[];
			/**
			 * Your own SKU code for this variant (free text), or `null`.
			 */
			sku?: string;
			/**
			 * The physical width of the variant if provided, or null.
			 */
			width?: number;
			/**
			 * The physical length of the variant if provided, or null.
			 */
			length?: number;
			/**
			 * The physical height of the variant if provided, or null.
			 */
			height?: number;
			/**
			 * The physical weight of the variant if provided, or null.
			 */
			weight?: number;
		};
	}[];
};

/**
 * Create product SKUs
 * Adds SKUs (variants) to an existing product.
 */
export async function createProductSkus(
	this: EndpointFunctionThis,
	payload: {
		input: CreateProductSkusInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateProductSkusOutput> {
	const response = await this.endpointCaller<CreateProductSkusOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'createProductSkus',
		},
		payload,
	);
	return response.output;
}
