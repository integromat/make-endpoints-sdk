// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SetMetafieldsInput = {
	/**
	 * The metafield values to set. A maximum of 25 per call, with a total payload under 10 MB. The operation is atomic: if one entry fails, none are written.
	 *
	 * @minItems 1
	 * @maxItems 25
	 *
	 * Items: One metafield value to set on one resource.
	 */
	metafields: [
		{
			/**
			 * The global ID of the resource to attach the metafield to, such as `gid://shopify/Product/123`.
			 */
			ownerId: string;
			/**
			 * The unique identifier of the metafield within its namespace. 2-64 characters, alphanumeric plus hyphen and underscore.
			 */
			key: string;
			/**
			 * The data to store. Always sent as a string regardless of the type — for structured types such as `json` or `dimension`, pass the JSON-encoded value.
			 */
			value: string;
			/**
			 * The container to group the metafield under. 3-255 characters. The app-reserved namespace is used when omitted, which makes the metafield invisible to other apps.
			 */
			namespace?: string;
			/**
			 * The type of data stored, such as `single_line_text_field` or `number_integer`. Required unless a metafield definition already exists for this namespace, key and owner type. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).
			 */
			type?: string;
			/**
			 * The digest read from a previous query, for a safe concurrent update: the write only happens if the stored value still matches. Pass `null` when the metafield does not exist yet but you still want the guarantee. Omit it to write unconditionally. The **Search metafields** endpoint returns it as `compareDigest`.
			 */
			compareDigest?: string;
		},
		...{
			/**
			 * The global ID of the resource to attach the metafield to, such as `gid://shopify/Product/123`.
			 */
			ownerId: string;
			/**
			 * The unique identifier of the metafield within its namespace. 2-64 characters, alphanumeric plus hyphen and underscore.
			 */
			key: string;
			/**
			 * The data to store. Always sent as a string regardless of the type — for structured types such as `json` or `dimension`, pass the JSON-encoded value.
			 */
			value: string;
			/**
			 * The container to group the metafield under. 3-255 characters. The app-reserved namespace is used when omitted, which makes the metafield invisible to other apps.
			 */
			namespace?: string;
			/**
			 * The type of data stored, such as `single_line_text_field` or `number_integer`. Required unless a metafield definition already exists for this namespace, key and owner type. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).
			 */
			type?: string;
			/**
			 * The digest read from a previous query, for a safe concurrent update: the write only happens if the stored value still matches. Pass `null` when the metafield does not exist yet but you still want the guarantee. Omit it to write unconditionally. The **Search metafields** endpoint returns it as `compareDigest`.
			 */
			compareDigest?: string;
		}[],
	];
};

export type SetMetafieldsOutput = {
	/**
	 * The metafields that were set. This is a list field, so it has no `nodes` wrapper.
	 *
	 * Items: One metafield that was set.
	 */
	metafields?: {
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
	 * The list of errors that occurred while executing the mutation. The module fails when this list is not empty.
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
 * Set metafields
 * Creates or updates up to 25 metafields on one or more resources.
 */
export async function setMetafields(
	this: EndpointFunctionThis,
	payload: {
		input: SetMetafieldsInput;
		connectionId: number;
	},
): Promise<SetMetafieldsOutput> {
	const response = await this.endpointCaller<SetMetafieldsOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'setMetafields',
		},
		payload,
	);
	return response.output;
}
