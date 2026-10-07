// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetProductVariantInput = {
	/**
	 * The global ID of the product variant to retrieve, such as `gid://shopify/ProductVariant/123`. The **Search products** endpoint returns variant IDs under **Variants** when **Output product variants** is enabled.
	 */
	id: string;
	/**
	 * Whether to include the inventory item of the variant, including its unit cost, weight, and country of origin.
	 */
	inventoryItem?: boolean;
	/**
	 * Whether to include the option values selected for the variant.
	 */
	selectedOptions?: boolean;
	/**
	 * Whether to include the media of the variant, such as images. Returned as `media`.
	 */
	image?: boolean;
	/**
	 * Whether to include the metafields of the variant.
	 */
	metafields?: boolean;
};

export type GetProductVariantOutput = {
	/**
	 * The global ID of the product variant, such as `gid://shopify/ProductVariant/123`.
	 */
	id?: string;
	/**
	 * The REST API ID of the product variant.
	 */
	legacyResourceId?: string;
	/**
	 * The barcode of the product variant, such as an ISBN, UPC, or GTIN.
	 */
	barcode?: string;
	/**
	 * The stock keeping unit of the product variant.
	 */
	sku?: string;
	/**
	 * The price of the product variant in the shop's currency, serialized as a decimal string.
	 */
	price?: string;
	/**
	 * The original price before a sale, serialized as a decimal string.
	 */
	compareAtPrice?: string;
	/**
	 * The total sellable quantity of the product variant across all locations.
	 */
	inventoryQuantity?: number;
	/**
	 * Whether a tax is charged when the product variant is sold.
	 */
	taxable?: boolean;
	/**
	 * The date and time when the product variant was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the product variant was last modified.
	 */
	updatedAt?: string;
	/**
	 * The product the variant belongs to.
	 */
	product?: {
		/**
		 * The global ID of the product.
		 */
		id?: string;
	};
	/**
	 * The inventory item of the product variant. Returned only when **Output inventory item** is enabled.
	 */
	inventoryItem?: {
		/**
		 * The global ID of the inventory item. Use it with the inventory level endpoints.
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
		 * Whether the item must be physically shipped to the customer.
		 */
		requiresShipping?: boolean;
		/**
		 * The two-letter ISO 3166-1 alpha-2 code of the country where the item was produced.
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
			 * The global ID of the inventory item measurement.
			 */
			id?: string;
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
	};
	/**
	 * The option values selected for this variant, such as `Size: Small`. Returned only when **Output selected options** is enabled. This is a list field, so it has no `nodes` wrapper.
	 *
	 * Items: One selected option of the variant.
	 */
	selectedOptions?: {
		/**
		 * The name of the product option, such as `Size`.
		 */
		name?: string;
		/**
		 * The selected value of the product option, such as `Small`.
		 */
		value?: string;
		/**
		 * The product option value object behind the selection.
		 */
		optionValue?: {
			/**
			 * The global ID of the product option value.
			 */
			id?: string;
			/**
			 * The name of the product option value.
			 */
			name?: string;
			/**
			 * Whether any variant of the product uses this option value.
			 */
			hasVariants?: boolean;
		};
	}[];
	/**
	 * The media of the product variant. Returned only when **Output image** is enabled.
	 */
	media?: {
		/**
		 * The list of variant media.
		 *
		 * Items: A media object of the product variant, such as an image, video, or 3D model.
		 */
		nodes?: {
			/**
			 * The global ID of the media.
			 */
			id?: string;
			/**
			 * A word or phrase that describes the nature or contents of the media.
			 */
			alt?: string;
			/**
			 * The content type of the media. Possible values are `IMAGE`, `VIDEO`, `EXTERNAL_VIDEO`, and `MODEL_3D`.
			 */
			mediaContentType?: string;
			/**
			 * The current status of the media. Possible values are `UPLOADED`, `PROCESSING`, `READY`, and `FAILED`.
			 */
			status?: string;
			/**
			 * The preview of the media.
			 */
			preview?: {
				/**
				 * The preview image of the media. Is `null` until the preview is processed.
				 */
				image?: {
					/**
					 * The URL of the preview image.
					 */
					url?: string;
					/**
					 * The alternative text describing the preview image.
					 */
					altText?: string;
				};
			};
			/**
			 * The original image of the media. Returned only for media whose content type is `IMAGE`, and is `null` until the status is `READY`.
			 */
			image?: {
				/**
				 * The global ID of the image.
				 */
				id?: string;
				/**
				 * The URL of the original, unmodified image.
				 */
				url?: string;
				/**
				 * The alternative text describing the image.
				 */
				altText?: string;
			};
		}[];
	};
	/**
	 * The metafields of the product variant. Returned only when **Output variant metafields** is enabled.
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
};

/**
 * Get a product variant
 * Returns a single product variant by its ID.
 */
export async function getProductVariant(
	this: EndpointFunctionThis,
	payload: {
		input: GetProductVariantInput;
		connectionId: number;
	},
): Promise<GetProductVariantOutput> {
	const response = await this.endpointCaller<GetProductVariantOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'getProductVariant',
		},
		payload,
	);
	return response.output;
}
