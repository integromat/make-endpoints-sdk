// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateACustomerInput = {
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
	 * When and how the customer consented to receive marketing material by email. **Email** is required when creating a customer with email marketing consent.
	 */
	emailMarketingConsent?: {
		/**
		 * The email marketing state to set. Only `SUBSCRIBED`, `UNSUBSCRIBED`, and `PENDING` are accepted as input; `NOT_SUBSCRIBED`, `REDACTED`, and `INVALID` are rejected.
		 */
		marketingState?: '' | 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'PENDING';
		/**
		 * The opt-in level recorded at the time the customer subscribed.
		 */
		marketingOptInLevel?: '' | 'CONFIRMED_OPT_IN' | 'SINGLE_OPT_IN' | 'UNKNOWN';
		/**
		 * The date and time when the customer last consented or objected. Defaults to the time the request is sent.
		 */
		consentUpdatedAt?: string;
		/**
		 * The global ID of the location where the customer gave consent, such as `gid://shopify/Location/123`.
		 */
		sourceLocationId?: string;
	};
	/**
	 * When and how the customer consented to receive marketing material by SMS. **Phone** is required when creating a customer with SMS marketing consent.
	 */
	smsMarketingConsent?: {
		/**
		 * The SMS marketing state to set. `REDACTED` is read-only and cannot be sent.
		 */
		marketingState?: '' | 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'PENDING' | 'NOT_SUBSCRIBED';
		/**
		 * The opt-in level recorded at the time the customer subscribed.
		 */
		marketingOptInLevel?: '' | 'CONFIRMED_OPT_IN' | 'SINGLE_OPT_IN' | 'UNKNOWN';
		/**
		 * The date and time when the customer last consented or objected. Defaults to the time the request is sent.
		 */
		consentUpdatedAt?: string;
		/**
		 * The global ID of the location where the customer gave consent, such as `gid://shopify/Location/123`.
		 */
		sourceLocationId?: string;
	};
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

export type CreateACustomerOutput = {
	/**
	 * The created customer. Call the Get a customer endpoint with this ID for the full customer details.
	 */
	customer?: {
		/**
		 * The global ID of the created customer.
		 */
		id?: string;
		/**
		 * The REST API ID of the created customer.
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
 * Create a customer
 * Creates a customer with the given contact details, marketing consent, tags, and metafields.
 */
export async function createAcustomer(
	this: EndpointFunctionThis,
	payload: {
		input: CreateACustomerInput;
		connectionId: number;
	},
): Promise<CreateACustomerOutput> {
	const response = await this.endpointCaller<CreateACustomerOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'createACustomer',
		},
		payload,
	);
	return response.output;
}
