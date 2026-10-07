// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateAnOrderInput = {
	/**
	 * The global ID of the order to update, such as `gid://shopify/Order/123`.
	 */
	id: string;
	/**
	 * A new customer email address for the order. Overwrites the existing email address.
	 */
	email?: string;
	/**
	 * A new customer phone number for the order, in E.164 format. Overwrites the existing phone number.
	 */
	phone?: string;
	/**
	 * The new contents of the note associated with the order. Overwrites the existing note.
	 */
	note?: string;
	/**
	 * The new purchase order number for the order.
	 */
	poNumber?: string;
	/**
	 * The new shipping address for the order. Overwrites the existing shipping address entirely, so provide every field you want to keep.
	 */
	shippingAddress?: {
		/**
		 * The first name of the customer.
		 */
		firstName?: string;
		/**
		 * The last name of the customer.
		 */
		lastName?: string;
		/**
		 * The name of the customer's company or organization.
		 */
		company?: string;
		/**
		 * The first line of the address, typically the street address or PO box number.
		 */
		address1?: string;
		/**
		 * The second line of the address, typically the apartment, suite, or unit number.
		 */
		address2?: string;
		/**
		 * The name of the city, district, village, or town.
		 */
		city?: string;
		/**
		 * The code for the region of the address, such as the province, state, or district. For example, `QC` for Quebec, Canada.
		 */
		provinceCode?: string;
		/**
		 * The two-letter country code of the address, such as `CZ` for Czechia. See [CountryCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CountryCode).
		 */
		countryCode?: string;
		/**
		 * The zip or postal code of the address.
		 */
		zip?: string;
		/**
		 * A unique phone number for the customer, formatted using the E.164 standard. For example, `+16135551111`.
		 */
		phone?: string;
	};
	/**
	 * A new list of tags for the order. Overwrites the existing tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.
	 *
	 * Items: A tag to attach to the order.
	 */
	tags?: string[];
	/**
	 * A new list of custom attributes for the order. Overwrites the existing custom attributes.
	 *
	 * Items: A custom attribute of the order.
	 */
	customAttributes?: {
		/**
		 * The key or name of the custom attribute.
		 */
		key: string;
		/**
		 * The value of the custom attribute.
		 */
		value?: string;
	}[];
	/**
	 * The metafields to add to the existing metafields of the order. Existing metafields that are not listed are left unchanged.
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
	 * The localized fields to add to the existing list. These are additional fields that certain countries require on international orders, such as customs or tax identification numbers.
	 *
	 * Items: A localized field of the order.
	 */
	localizedFields?: {
		/**
		 * The key of the localized field, such as `TAX_CREDENTIAL_BR`. See [LocalizedFieldKey](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/LocalizedFieldKey) for the full list.
		 */
		key: string;
		/**
		 * The localized field value.
		 */
		value: string;
	}[];
};

export type UpdateAnOrderOutput = {
	/**
	 * The updated order. Call the Get an order endpoint with this ID for the full order details.
	 */
	order?: {
		/**
		 * The global ID of the updated order.
		 */
		id?: string;
		/**
		 * The REST API ID of the updated order.
		 */
		legacyResourceId?: string;
		/**
		 * The unique identifier that appears on the order, such as `#1001`.
		 */
		name?: string;
		/**
		 * The date and time when the order was last modified.
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
 * Update an order
 * Updates the attributes of an order, such as its email, note, tags, shipping address, and metafields.
 */
export async function updateAnOrder(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateAnOrderInput;
		connectionId: number;
	},
): Promise<UpdateAnOrderOutput> {
	const response = await this.endpointCaller<UpdateAnOrderOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'updateAnOrder',
		},
		payload,
	);
	return response.output;
}
