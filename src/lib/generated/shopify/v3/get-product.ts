// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetProductInput = {
	/**
	 * The global ID of the product to retrieve, such as `gid://shopify/Product/123`. The **Search products** endpoint returns this value as `id`.
	 */
	id: string;
	/**
	 * Whether to include the media of each product, such as images. Returned as `media`.
	 */
	images?: boolean;
	/**
	 * Whether to include the options of each product, such as size or color.
	 */
	options?: boolean;
	/**
	 * Whether to include the variants of each product. Increases the query cost.
	 */
	variants?: boolean;
	/**
	 * Whether to include the metafields of each product.
	 */
	metafields?: boolean;
};

export type GetProductOutput = {
	/**
	 * The global ID of the product, such as `gid://shopify/Product/123`.
	 */
	id?: string;
	/**
	 * The REST API ID of the product.
	 */
	legacyResourceId?: string;
	/**
	 * The description of the product, including HTML tags.
	 */
	descriptionHtml?: string;
	/**
	 * The theme template used when customers view the product in the store.
	 */
	templateSuffix?: string;
	/**
	 * The unique, human-readable string used to identify the product in URLs.
	 */
	handle?: string;
	/**
	 * The searchable keywords associated with the product.
	 *
	 * Items: A tag associated with the product.
	 */
	tags?: string[];
	/**
	 * The product status, which controls visibility across all sales channels: `ACTIVE`, `ARCHIVED`, or `DRAFT`.
	 */
	status?: string;
	/**
	 * The date and time when the product was published to the online store.
	 */
	publishedAt?: string;
	/**
	 * The product type that the merchant defined.
	 */
	productType?: string;
	/**
	 * The name of the product's vendor.
	 */
	vendor?: string;
	/**
	 * The date and time when the product was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the product was last modified.
	 */
	updatedAt?: string;
	/**
	 * The taxonomy category associated with the product.
	 */
	category?: {
		/**
		 * The global ID of the taxonomy category.
		 */
		id?: string;
		/**
		 * The name of the taxonomy category.
		 */
		name?: string;
		/**
		 * The full name of the taxonomy category, including its ancestors.
		 */
		fullName?: string;
		/**
		 * The depth of the category in the taxonomy tree.
		 */
		level?: number;
		/**
		 * Whether the category has no children.
		 */
		isLeaf?: boolean;
		/**
		 * Whether the category has no parent.
		 */
		isRoot?: boolean;
		/**
		 * Whether the category is archived.
		 */
		isArchived?: boolean;
		/**
		 * The global ID of the parent category.
		 */
		parentId?: string;
		/**
		 * The global IDs of all ancestor categories.
		 *
		 * Items: The global ID of an ancestor category.
		 */
		ancestorIds?: string[];
		/**
		 * The global IDs of all direct child categories.
		 *
		 * Items: The global ID of a child category.
		 */
		childrenIds?: string[];
	};
	/**
	 * The media of the product. Returned only when **Output product images** is enabled.
	 */
	media?: {
		/**
		 * The list of product media.
		 *
		 * Items: A media object of the product, such as an image, video, or 3D model.
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
	 * The options of the product, such as size or color. Returned only when **Output product options** is enabled. This is a list field, so it has no `nodes` wrapper.
	 *
	 * Items: An option of the product.
	 */
	options?: {
		/**
		 * The global ID of the product option.
		 */
		id?: string;
		/**
		 * The name of the product option, such as `Size`.
		 */
		name?: string;
		/**
		 * The position of the option in the list of options, starting at 1.
		 */
		position?: number;
		/**
		 * The values associated with the option.
		 *
		 * Items: A value associated with the option.
		 */
		values?: string[];
		/**
		 * The metafield the option is linked to, if any.
		 */
		linkedMetafield?: {
			/**
			 * The key of the linked metafield.
			 */
			key?: string;
			/**
			 * The namespace of the linked metafield.
			 */
			namespace?: string;
		};
	}[];
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
			 * The stock keeping unit of the product variant.
			 */
			sku?: string;
			/**
			 * The product title combined with the variant selected options.
			 */
			displayName?: string;
			/**
			 * The barcode of the product variant, such as an ISBN, UPC, or GTIN.
			 */
			barcode?: string;
			/**
			 * The price of the product variant in the shop currency, serialized as a decimal string.
			 */
			price?: string;
			/**
			 * The original price of the product variant before a sale, serialized as a decimal string.
			 */
			compareAtPrice?: string;
			/**
			 * The total sellable quantity of the product variant.
			 */
			inventoryQuantity?: number;
			/**
			 * The inventory item of the product variant.
			 */
			inventoryItem?: {
				/**
				 * The global ID of the inventory item. Use it with the inventory level endpoints.
				 */
				id?: string;
				/**
				 * Whether the inventory item requires shipping.
				 */
				requiresShipping?: boolean;
			};
			/**
			 * The product the variant belongs to.
			 */
			product?: {
				/**
				 * The global ID of the product.
				 */
				id?: string;
			};
		}[];
	};
	/**
	 * The metafields of the product. Returned only when **Output product metafields** is enabled.
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
 * Get a product
 * Returns a single product by its ID.
 */
export async function getProduct(
	this: EndpointFunctionThis,
	payload: {
		input: GetProductInput;
		connectionId: number;
	},
): Promise<GetProductOutput> {
	const response = await this.endpointCaller<GetProductOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'getProduct',
		},
		payload,
	);
	return response.output;
}
