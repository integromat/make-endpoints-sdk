// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListProductsInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
};

export type ListProductsOutput = {
	/**
	 * List of Item objects within the Collection. Contains product and skus keys for each Item.
	 *
	 * Items: A product and its SKUs.
	 */
	items?: {
		/**
		 * The Product object.
		 */
		product?: {
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
		 * A list of SKU Objects.
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
	}[];
	/**
	 * Pagination object.
	 */
	pagination?: {
		/**
		 * The limit used for pagination.
		 */
		limit?: number;
		/**
		 * The offset used for pagination.
		 */
		offset?: number;
		/**
		 * The total number of records.
		 */
		total?: number;
	};
};

/**
 * List products
 * Lists the products of a site together with their SKUs.
 */
export async function listProducts(
	this: EndpointFunctionThis,
	payload: {
		input: ListProductsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListProductsOutput> {
	const response = await this.endpointCaller<ListProductsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listProducts',
		},
		payload,
	);
	return response.output;
}
