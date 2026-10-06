// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateProductInput = {
	/**
	 * The global ID of the product to update, such as `gid://shopify/Product/123`.
	 */
	id: string;
	/**
	 * The description of the product, including HTML tags such as `<b>` and `<i>`.
	 */
	descriptionHtml?: string;
	/**
	 * The product type that the merchant defines.
	 */
	productType?: string;
	/**
	 * The name of the product's vendor.
	 */
	vendor?: string;
	/**
	 * The product status, which controls visibility across all sales channels.
	 */
	status?: '' | 'ACTIVE' | 'ARCHIVED' | 'DRAFT';
	/**
	 * The global ID of the taxonomy category associated with the product, such as `gid://shopify/TaxonomyCategory/aa-1`. Look up category IDs in the [Shopify product taxonomy](https://shopify.github.io/product-taxonomy/).
	 */
	category?: string;
	/**
	 * The searchable keywords associated with the product. This **overwrites** any existing tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.
	 *
	 * Items: A searchable keyword associated with the product.
	 */
	tags?: string[];
	/**
	 * The unique, human-readable string used to identify the product in URLs. It can contain letters, hyphens, and numbers, but no spaces. Generated from the title when omitted.
	 */
	handle?: string;
	/**
	 * The SEO title and description associated with the product.
	 */
	seo?: {
		/**
		 * The SEO description of the product.
		 */
		description?: string;
	};
	/**
	 * The theme template used when customers view the product in the store.
	 */
	templateSuffix?: string;
	/**
	 * The theme template used when customers view a gift card in the store.
	 */
	giftCardTemplateSuffix?: string;
	/**
	 * The global IDs of the collections to associate the product with, such as `gid://shopify/Collection/123`.
	 *
	 * Items: The global ID of a collection to associate the product with.
	 */
	collectionsToJoin?: string[];
	/**
	 * Whether the product can only be purchased with a selling plan. Subscription-only products can be updated only for online stores, and setting this to `true` unpublishes the product from every channel except the online store.
	 */
	requiresSellingPlan?: boolean;
	/**
	 * The custom fields to associate with the product.
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
	 * The global IDs of the collections to disassociate from the product.
	 *
	 * Items: The global ID of a collection to disassociate from the product.
	 */
	collectionsToLeave?: string[];
	/**
	 * The media to create for the product. Only URL-based sources are supported; binary uploads are not available through endpoints.
	 *
	 * Items: A media object to create for the product.
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
	 * Whether to redirect the old handle to the new one automatically. Only relevant when **Handle** is changed.
	 */
	redirectNewHandle?: boolean;
	/**
	 * Whether to delete metafields whose constraints don't match the product category. Can only be used when **Category ID** is changed. Defaults to `false`.
	 */
	deleteConflictingConstrainedMetafields?: boolean;
};

export type UpdateProductOutput = {
	/**
	 * The updated product. Call the Get a product endpoint with this ID for the full product details.
	 */
	product?: {
		/**
		 * The global ID of the updated product.
		 */
		id?: string;
		/**
		 * The REST API ID of the updated product.
		 */
		legacyResourceId?: string;
		/**
		 * The unique, human-readable string used to identify the product in URLs.
		 */
		handle?: string;
		/**
		 * The product status: `ACTIVE`, `ARCHIVED`, or `DRAFT`.
		 */
		status?: string;
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
 * Update a product
 * Updates the attributes, media, and collection membership of a product.
 */
export async function updateProduct(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateProductInput;
		connectionId: number;
	},
): Promise<UpdateProductOutput> {
	const response = await this.endpointCaller<UpdateProductOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'updateProduct',
		},
		payload,
	);
	return response.output;
}
