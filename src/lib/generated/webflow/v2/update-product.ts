// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateProductInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a product. Use the `listProducts` endpoint to find it.
	 */
	product_id: string;
	/**
	 * Indicate whether your Product should be set as "staging" or "live". Defaults to `staging`.
	 */
	publishStatus?: '' | 'staging' | 'live';
	/**
	 * The product to write. Standard product fields go under `fieldData`; custom fields of the product collection can be added under their field slug.
	 */
	product?: {
		/**
		 * Boolean determining if the Product is set to archived. Webflow resets it to `false` whenever it is omitted from `product`, so read the product first (`getProduct`) and pass the current value with every update — renaming an archived product without it un-archives it.
		 */
		isArchived?: boolean;
		/**
		 * Contains content-specific details for a product, covering both standard (e.g., title, description) and custom fields tailored to the product setup.
		 */
		fieldData?: {
			/**
			 * Name of the Product.
			 */
			name?: string;
			/**
			 * URL structure of the Product in your site.
			 */
			slug?: string;
			/**
			 * A description of your product.
			 */
			description?: string;
			/**
			 * Boolean determining if the Product is shippable.
			 */
			shippable?: boolean;
			/**
			 * Variant types to include in SKUs.
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
			/**
			 * The category your product belongs to.
			 *
			 * Items: ID of a category item.
			 */
			category?: string[];
			/**
			 * Product tax class.
			 */
			'tax-category'?:
				| ''
				| 'standard-taxable'
				| 'standard-exempt'
				| 'books-religious'
				| 'books-textbook'
				| 'clothing'
				| 'clothing-swimwear'
				| 'digital-goods'
				| 'digital-service'
				| 'drugs-non-prescription'
				| 'drugs-prescription'
				| 'food-bottled-water'
				| 'food-candy'
				| 'food-groceries'
				| 'food-prepared'
				| 'food-soda'
				| 'food-supplements'
				| 'magazine-individual'
				| 'magazine-subscription'
				| 'service-admission'
				| 'service-advertising'
				| 'service-dry-cleaning'
				| 'service-hairdressing'
				| 'service-installation'
				| 'service-miscellaneous'
				| 'service-parking'
				| 'service-printing'
				| 'service-professional'
				| 'service-repair'
				| 'service-training';
			/**
			 * The default SKU associated with this product.
			 */
			'default-sku'?: string;
			/**
			 * Product type. One of Physical, Digital, Service or Advanced (see [product types](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types)).
			 */
			'ec-product-type'?:
				| ''
				| 'ff42fee0113744f693a764e3431a9cc2'
				| 'f22027db68002190aef89a4a2b7ac8a1'
				| 'c599e43b1a1c34d5a323aedf75d3adf6'
				| 'b6ccc1830db4b1babeb06a9ac5f6dd76';
		};
	};
	/**
	 * The product's default SKU to update (optional). Standard SKU fields go under `fieldData`; custom fields of the SKU collection can be added under their field slug.
	 */
	sku?: {
		/**
		 * Standard and Custom fields for a SKU.
		 */
		fieldData?: {
			/**
			 * Mapping between SKU property IDs and SKU value IDs that identifies this variant, e.g. `{ "<colorPropertyId>": "<blueValueId>" }`. Omit for the default SKU of a product without variants.
			 */
			'sku-values'?: Record<string, JSONValue>;
			/**
			 * Name of the SKU (variant). Omit to keep the current value.
			 */
			name?: string;
			/**
			 * URL structure of the SKU in your site. Omit to keep the current value.
			 */
			slug?: string;
			/**
			 * Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD. Omit to keep the current value.
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
	};
};

export type UpdateProductOutput = {
	/**
	 * Unique identifier for the Product.
	 */
	id?: string;
	/**
	 * Identifier for the locale of the CMS item.
	 */
	cmsLocaleId?: string;
	/**
	 * The date the Product was last published.
	 */
	lastPublished?: string;
	/**
	 * The date the Product was last updated.
	 */
	lastUpdated?: string;
	/**
	 * The date the Product was created.
	 */
	createdOn?: string;
	/**
	 * Whether the product is archived. Products created without `isArchived` are not archived (`false`).
	 */
	isArchived?: boolean;
	/**
	 * Whether the product is a draft. Products created without `isDraft` are not drafts (`false`).
	 */
	isDraft?: boolean;
	/**
	 * Field values of the product keyed by the Products collection field slug. Standard fields are listed; custom fields added to the Products collection are returned under their slug as well and are not declared here.
	 */
	fieldData?: {
		/**
		 * Name of the Product.
		 */
		name?: string;
		/**
		 * URL structure of the Product in your site.
		 */
		slug?: string;
		/**
		 * A description of your product.
		 */
		description?: string;
		/**
		 * Boolean determining if the Product is shippable.
		 */
		shippable?: boolean;
		/**
		 * Variant types to include in SKUs.
		 *
		 * Items: A variant/option type for a SKU.
		 */
		'sku-properties'?: {
			/**
			 * Unique identifier for a collection of Product Variants.
			 */
			id?: string;
			/**
			 * Name of the collection of Product Variants.
			 */
			name?: string;
			/**
			 * The individual Product variants that are contained within the collection.
			 *
			 * Items: Enumerated Product variants/Options for the SKU.
			 */
			enum?: {
				/**
				 * Unique identifier for a Product variant/Option.
				 */
				id?: string;
				/**
				 * Name of the Product variant/Option.
				 */
				name?: string;
				/**
				 * Slug for the Product variant/Option in the Site URL structure.
				 */
				slug?: string;
			}[];
		}[];
		/**
		 * The category your product belongs to.
		 *
		 * Items: ID of a category item.
		 */
		category?: string[];
		/**
		 * Product tax class. One of: `standard-taxable`, `standard-exempt`, `books-religious`, `books-textbook`, `clothing`, `clothing-swimwear`, `digital-goods`, `digital-service`, `drugs-non-prescription`, `drugs-prescription`, `food-bottled-water`, `food-candy`, `food-groceries`, `food-prepared`, `food-soda`, `food-supplements`, `magazine-individual`, `magazine-subscription`, `service-admission`, `service-advertising`, `service-dry-cleaning`, `service-hairdressing`, `service-installation`, `service-miscellaneous`, `service-parking`, `service-printing`, `service-professional`, `service-repair`, `service-training`.
		 */
		'tax-category'?: string;
		/**
		 * The default SKU associated with this product.
		 */
		'default-sku'?: string;
		/**
		 * [Product types.](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types) Enums reflect the following values in order: Physical, Digital, Service, Membership, Advanced. One of: `ff42fee0113744f693a764e3431a9cc2`, `f22027db68002190aef89a4a2b7ac8a1`, `c599e43b1a1c34d5a323aedf75d3adf6`, `e348fd487d0102946c9179d2a94bb613`, `b6ccc1830db4b1babeb06a9ac5f6dd76`.
		 */
		'ec-product-type'?: string;
	};
};

/**
 * Update a product
 * Updates a product and optionally its default SKU.
 */
export async function updateProduct(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateProductInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateProductOutput> {
	const response = await this.endpointCaller<UpdateProductOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'updateProduct',
		},
		payload,
	);
	return response.output;
}
