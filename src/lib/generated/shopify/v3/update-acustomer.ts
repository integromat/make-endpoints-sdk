// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateACustomerInput = {
	/**
	 * The global ID of the customer to update, such as `gid://shopify/Customer/123`.
	 */
	id: string;
	/**
	 * The first name of the customer.
	 */
	firstName?: string;
	/**
	 * The last name of the customer.
	 */
	lastName?: string;
	/**
	 * The unique email address of the customer. Required when setting email marketing consent.
	 */
	email?: string;
	/**
	 * The unique phone number of the customer, in E.164 format such as `+16135551212`. Required when setting SMS marketing consent.
	 */
	phone?: string;
	/**
	 * The locale of the customer, such as `en` or `cs`.
	 */
	locale?: string;
	/**
	 * A note about the customer.
	 */
	note?: string;
	/**
	 * The tags to associate with the customer. This **overwrites** any existing tags. A customer can have up to 250 tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.
	 *
	 * Items: A tag to associate with the customer.
	 */
	tags?: string[];
	/**
	 * Whether the customer is exempt from paying taxes on their orders.
	 */
	taxExempt?: boolean;
	/**
	 * The tax exemptions to apply to the customer, such as `CA_STATUS_CARD_EXEMPTION` or `US_NY_RESELLER_EXEMPTION`. See [TaxExemption](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/TaxExemption) for the full list of values.
	 *
	 * Items: One tax exemption value from the Shopify `TaxExemption` enum.
	 */
	taxExemptions?: string[];
	/**
	 * A unique identifier for the customer used with multipass login.
	 */
	multipassIdentifier?: string;
	/**
	 * The metafields to associate with the customer.
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
};

export type UpdateACustomerOutput = {
	/**
	 * The updated customer. Call the Get a customer endpoint with this ID for the full customer details.
	 */
	customer?: {
		/**
		 * The global ID of the updated customer.
		 */
		id?: string;
		/**
		 * The REST API ID of the updated customer.
		 */
		legacyResourceId?: string;
		/**
		 * The full name of the customer, based on the first and last names.
		 */
		displayName?: string;
		/**
		 * The date and time when the customer was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the customer was last modified.
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
 * Update a customer
 * Updates the contact details, tags, and metafields of a customer.
 */
export async function updateAcustomer(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateACustomerInput;
		connectionId: number;
	},
): Promise<UpdateACustomerOutput> {
	const response = await this.endpointCaller<UpdateACustomerOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'updateACustomer',
		},
		payload,
	);
	return response.output;
}
