// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateProductVariantsInput = {
	/**
	 * The global ID of the product to create the variants on, such as `gid://shopify/Product/123`.
	 */
	productId: string;
	/**
	 * The product variants to create. All of them are created on the same product.
	 *
	 * Items: A product variant to create.
	 */
	variants: {
		/**
		 * The starting inventory quantity of the variant at each location. Supported on create only; use **Quantity adjustments** or the inventory level endpoints afterwards.
		 *
		 * Items: The inventory quantity at one location.
		 */
		inventoryQuantities?: {
			/**
			 * The global ID of the location, such as `gid://shopify/Location/123`.
			 */
			locationId: string;
			/**
			 * The available quantity of the item at this location.
			 */
			availableQuantity: number;
		}[];
		/**
		 * The price of the variant in the shop's currency.
		 */
		price?: number;
		/**
		 * The original price of the variant before a sale.
		 */
		compareAtPrice?: number;
		/**
		 * The barcode associated with the variant, such as an ISBN, UPC, or GTIN.
		 */
		barcode?: string;
		/**
		 * Whether a tax is charged when the variant is sold.
		 */
		taxable?: boolean;
		/**
		 * The tax code associated with the variant. Available on Shopify Plus with Avalara AvaTax.
		 */
		taxCode?: string;
		/**
		 * Whether customers can order the variant when it's out of stock. Defaults to `DENY`.
		 */
		inventoryPolicy?: '' | 'DENY' | 'CONTINUE';
		/**
		 * The option values that define this variant. Provide one entry per product option. Identify the option by **Option ID** or **Option name**, and the value by **Option value ID** or **Name**.
		 *
		 * Items: One option value of the variant.
		 */
		optionValues?: {
			/**
			 * The global ID of the product option, such as `gid://shopify/ProductOption/123`. Provide this or **Option name**.
			 */
			optionId?: string;
			/**
			 * The name of the product option, such as `Size`. Provide this or **Option ID**.
			 */
			optionName?: string;
			/**
			 * The global ID of the product option value. Provide this or **Name**.
			 */
			id?: string;
			/**
			 * The name of the product option value, such as `Small`. Provide this or **Option value ID**.
			 */
			name?: string;
			/**
			 * The metafield value associated with the option. Use it only when the option is linked to a metafield.
			 */
			linkedMetafieldValue?: string;
		}[];
		/**
		 * The inventory item settings of the variant, such as its cost, weight, and customs information.
		 */
		inventoryItem?: {
			/**
			 * The stock keeping unit of the inventory item.
			 */
			sku?: string;
			/**
			 * The unit cost of the inventory item, in the shop's default currency.
			 */
			cost?: number;
			/**
			 * Whether inventory levels are tracked for the item.
			 */
			tracked?: boolean;
			/**
			 * Whether the item must be physically shipped. Digital goods and services usually do not.
			 */
			requiresShipping?: boolean;
			/**
			 * The two-letter ISO 3166-1 alpha-2 code of the country where the item was produced, such as `CZ`.
			 */
			countryCodeOfOrigin?: string;
			/**
			 * The two-letter ISO 3166-2 code of the province where the item was produced, such as `QC`.
			 */
			provinceCodeOfOrigin?: string;
			/**
			 * The global harmonized system code of the item. Must be a number of 6 to 13 digits.
			 */
			harmonizedSystemCode?: string;
			/**
			 * The country-specific harmonized system codes of the item.
			 *
			 * Items: A harmonized system code issued by a specific country.
			 */
			countryHarmonizedSystemCodes?: {
				/**
				 * The country-specific harmonized system code.
				 */
				harmonizedSystemCode: string;
				/**
				 * The two-letter ISO 3166-1 alpha-2 code of the country that issued the code.
				 */
				countryCode?: string;
			}[];
			/**
			 * The measurements of the inventory item.
			 */
			measurement?: {
				/**
				 * The global ID of the shipping package associated with the inventory item.
				 */
				shippingPackageId?: string;
				/**
				 * The weight of the inventory item.
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
			};
		};
		/**
		 * The measurement used to calculate a unit price for the variant, such as $9.99 per 100 ml.
		 */
		unitPriceMeasurement?: {
			/**
			 * The quantity value of the measurement, such as `100` in "100 ml".
			 */
			quantityValue?: number;
			/**
			 * The quantity unit of the measurement. See [UnitPriceMeasurementMeasuredUnit](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/UnitPriceMeasurementMeasuredUnit).
			 */
			quantityUnit?:
				| ''
				| 'CL'
				| 'CM'
				| 'FLOZ'
				| 'FT'
				| 'FT2'
				| 'G'
				| 'GAL'
				| 'IN'
				| 'ITEM'
				| 'KG'
				| 'L'
				| 'LB'
				| 'M'
				| 'M2'
				| 'M3'
				| 'MG'
				| 'ML'
				| 'MM'
				| 'OZ'
				| 'PT'
				| 'QT'
				| 'YD';
			/**
			 * The reference value of the measurement, such as `1` in "per 1 l".
			 */
			referenceValue?: number;
			/**
			 * The reference unit of the measurement.
			 */
			referenceUnit?:
				| ''
				| 'CL'
				| 'CM'
				| 'FLOZ'
				| 'FT'
				| 'FT2'
				| 'G'
				| 'GAL'
				| 'IN'
				| 'ITEM'
				| 'KG'
				| 'L'
				| 'LB'
				| 'M'
				| 'M2'
				| 'M3'
				| 'MG'
				| 'ML'
				| 'MM'
				| 'OZ'
				| 'PT'
				| 'QT'
				| 'YD';
		};
		/**
		 * Whether the unit price is shown for this variant.
		 */
		showUnitPrice?: boolean;
		/**
		 * Whether the variant requires components. When `true`, it can only be purchased as a parent bundle and is omitted from channels that do not support bundles. Defaults to `false`.
		 */
		requiresComponents?: boolean;
		/**
		 * The global ID of existing product media to associate with the variant.
		 */
		mediaId?: string;
		/**
		 * The URLs of media to associate with the variant.
		 *
		 * Items: The URL of a media object to associate with the variant.
		 */
		mediaSrc?: string[];
		/**
		 * The metafields to associate with the variant.
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
	}[];
	/**
	 * New media to add to the product. Only URL-based sources are supported; binary uploads are not available through endpoints.
	 *
	 * Items: A media object to add to the product.
	 */
	media?: {
		/**
		 * The content type of the media.
		 */
		mediaContentType: 'IMAGE' | 'VIDEO' | 'EXTERNAL_VIDEO' | 'MODEL_3D';
		/**
		 * The original source of the media object. Use an external URL or a staged upload URL.
		 */
		originalSource: string;
		/**
		 * The alternative text describing the media.
		 */
		alt?: string;
	}[];
	/**
	 * How to treat an existing standalone variant when the product has only one. `DEFAULT` deletes a standalone "Default Title" variant but keeps a custom one; `REMOVE_STANDALONE_VARIANT` deletes either; `PRESERVE_STANDALONE_VARIANT` keeps either. Defaults to `DEFAULT`.
	 */
	strategy?: '' | 'DEFAULT' | 'PRESERVE_STANDALONE_VARIANT' | 'REMOVE_STANDALONE_VARIANT';
};

export type CreateProductVariantsOutput = {
	/**
	 * The created product variants. This is a list field, so it has no `nodes` wrapper.
	 *
	 * Items: A created product variant.
	 */
	productVariants?: {
		/**
		 * The global ID of the product variant.
		 */
		id?: string;
		/**
		 * The REST API ID of the product variant.
		 */
		legacyResourceId?: string;
		/**
		 * The stock keeping unit of the product variant.
		 */
		sku?: string;
		/**
		 * The price of the variant in the shop's currency, serialized as a decimal string.
		 */
		price?: string;
		/**
		 * The date and time when the product variant was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the product variant was last modified.
		 */
		updatedAt?: string;
	}[];
	/**
	 * The product the variants belong to.
	 */
	product?: {
		/**
		 * The global ID of the product.
		 */
		id?: string;
		/**
		 * The date and time when the product was last modified.
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
 * Create product variants
 * Creates one or more product variants on a single product.
 */
export async function createProductVariants(
	this: EndpointFunctionThis,
	payload: {
		input: CreateProductVariantsInput;
		connectionId: number;
	},
): Promise<CreateProductVariantsOutput> {
	const response = await this.endpointCaller<CreateProductVariantsOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'createProductVariants',
		},
		payload,
	);
	return response.output;
}
