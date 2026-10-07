// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchMetafieldsInput = {
	/**
	 * The global ID of the resource whose metafields you want, such as `gid://shopify/Product/123` or `gid://shopify/Order/123`. Any resource type that supports metafields works.
	 */
	id: string;
	/**
	 * Return only metafields in this container. All namespaces are returned when omitted.
	 */
	namespace?: string;
	/**
	 * Return only these metafields, given as `namespace.key` — for example `custom.care_guide`. They are returned in the same format.
	 *
	 * Items: One metafield identifier in `namespace.key` format.
	 */
	keys?: string[];
	/**
	 * The maximum number of metafields to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.
	 */
	first?: number;
	/**
	 * The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.
	 */
	after?: string;
	/**
	 * Whether to reverse the order of the returned metafields.
	 */
	reverse?: boolean;
};

export type SearchMetafieldsOutput = {
	/**
	 * The metafields attached to the resource.
	 *
	 * Items: A custom field attached to the resource.
	 */
	nodes?: {
		/**
		 * The global ID of the metafield.
		 */
		id?: string;
		/**
		 * The REST API ID of the metafield.
		 */
		legacyResourceId?: string;
		/**
		 * The container the metafield belongs to.
		 */
		namespace?: string;
		/**
		 * The unique identifier of the metafield within its namespace.
		 */
		key?: string;
		/**
		 * The data stored in the metafield, always returned as a string regardless of its type.
		 */
		value?: string;
		/**
		 * The data stored in the metafield, parsed into its JSON representation.
		 */
		jsonValue?: Record<string, JSONValue>;
		/**
		 * The type of data stored in the metafield, such as `single_line_text_field`. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).
		 */
		type?: string;
		/**
		 * The type of resource the metafield is attached to, such as `PRODUCT` or `ORDER`.
		 */
		ownerType?: string;
		/**
		 * A digest of the stored value. Pass it back as **Compare digest** on the **Set metafields** endpoint to update the metafield only if it has not changed since you read it.
		 */
		compareDigest?: string;
		/**
		 * The date and time when the metafield was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the metafield was last updated.
		 */
		updatedAt?: string;
	}[];
	/**
	 * The cursor information used to paginate through the result set.
	 */
	pageInfo?: {
		/**
		 * Whether another page of results exists after this one.
		 */
		hasNextPage?: boolean;
		/**
		 * Whether another page of results exists before this one.
		 */
		hasPreviousPage?: boolean;
		/**
		 * The cursor of the first result in this page.
		 */
		startCursor?: string;
		/**
		 * The cursor of the last result in this page. Pass it as **After** to fetch the next page.
		 */
		endCursor?: string;
	};
};

/**
 * Search metafields
 * Returns the metafields attached to any resource, by the resource ID.
 */
export async function searchMetafields(
	this: EndpointFunctionThis,
	payload: {
		input: SearchMetafieldsInput;
		connectionId: number;
	},
): Promise<SearchMetafieldsOutput> {
	const response = await this.endpointCaller<SearchMetafieldsOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'searchMetafields',
		},
		payload,
	);
	return response.output;
}
