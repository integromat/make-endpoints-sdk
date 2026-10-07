// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetACustomerInput = {
	/**
	 * The global ID of the customer to retrieve, such as `gid://shopify/Customer/123`. The **Search customers** endpoint returns this value as `id`.
	 */
	id: string;
	/**
	 * The maximum number of mailing addresses to include for each customer. Defaults to 250 when omitted.
	 */
	nAddresses?: number;
	/**
	 * Whether to include the metafields of each customer.
	 */
	metafields?: boolean;
};

export type GetACustomerOutput = {
	/**
	 * The global ID of the customer, such as `gid://shopify/Customer/123`.
	 */
	id?: string;
	/**
	 * The REST API ID of the customer.
	 */
	legacyResourceId?: string;
	/**
	 * The first name of the customer.
	 */
	firstName?: string;
	/**
	 * The last name of the customer.
	 */
	lastName?: string;
	/**
	 * The full name of the customer, based on the first and last names.
	 */
	displayName?: string;
	/**
	 * Whether the customer has verified their email address.
	 */
	verifiedEmail?: boolean;
	/**
	 * The state of the customer account with the shop, such as `ENABLED`, `DISABLED`, `INVITED`, or `DECLINED`.
	 */
	state?: string;
	/**
	 * Whether the customer is exempt from paying taxes on their orders.
	 */
	taxExempt?: boolean;
	/**
	 * How long the customer has been a customer, in a human-readable form such as `2 years`.
	 */
	lifetimeDuration?: string;
	/**
	 * The locale of the customer, such as `en`.
	 */
	locale?: string;
	/**
	 * The tags attached to the customer.
	 *
	 * Items: A tag attached to the customer.
	 */
	tags?: string[];
	/**
	 * The note associated with the customer.
	 */
	note?: string;
	/**
	 * The number of orders the customer has placed, returned as a string.
	 */
	numberOfOrders?: string;
	/**
	 * The date and time when the customer was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the customer was last modified.
	 */
	updatedAt?: string;
	/**
	 * The default email address of the customer and its marketing state.
	 */
	defaultEmailAddress?: {
		/**
		 * The email address of the customer.
		 */
		emailAddress?: string;
		/**
		 * The opt-in level used when the customer consented to email marketing.
		 */
		marketingOptInLevel?: string;
		/**
		 * The current email marketing state of the customer.
		 */
		marketingState?: string;
		/**
		 * Whether the email address is formatted correctly.
		 */
		validFormat?: boolean;
	};
	/**
	 * The default phone number of the customer and its marketing state.
	 */
	defaultPhoneNumber?: {
		/**
		 * The phone number of the customer, in E.164 format.
		 */
		phoneNumber?: string;
		/**
		 * The opt-in level used when the customer consented to SMS marketing.
		 */
		marketingOptInLevel?: string;
		/**
		 * The current SMS marketing state of the customer.
		 */
		marketingState?: string;
	};
	/**
	 * The default mailing address of the customer.
	 */
	defaultAddress?: {
		/**
		 * The global ID of the mailing address.
		 */
		id?: string;
		/**
		 * The full name of the person at this address.
		 */
		name?: string;
		/**
		 * The first name of the person at this address.
		 */
		firstName?: string;
		/**
		 * The last name of the person at this address.
		 */
		lastName?: string;
		/**
		 * The phone number at this address, in E.164 format.
		 */
		phone?: string;
		/**
		 * The company or organization at this address.
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
		 * The name of the region, such as the province, state, or district.
		 */
		province?: string;
		/**
		 * The code for the region, such as `QC` for Quebec, Canada.
		 */
		provinceCode?: string;
		/**
		 * The name of the country.
		 */
		country?: string;
		/**
		 * The two-letter country code of the address, such as `CZ` for Czechia.
		 */
		countryCodeV2?: string;
		/**
		 * The zip or postal code of the address.
		 */
		zip?: string;
	};
	/**
	 * The mailing addresses of the customer.
	 */
	addressesV2?: {
		/**
		 * The list of mailing addresses.
		 *
		 * Items: A mailing address of the customer.
		 */
		nodes?: {
			/**
			 * The global ID of the mailing address.
			 */
			id?: string;
			/**
			 * The full name of the person at this address.
			 */
			name?: string;
			/**
			 * The first name of the person at this address.
			 */
			firstName?: string;
			/**
			 * The last name of the person at this address.
			 */
			lastName?: string;
			/**
			 * The phone number at this address, in E.164 format.
			 */
			phone?: string;
			/**
			 * The company or organization at this address.
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
			 * The name of the region, such as the province, state, or district.
			 */
			province?: string;
			/**
			 * The code for the region, such as `QC` for Quebec, Canada.
			 */
			provinceCode?: string;
			/**
			 * The name of the country.
			 */
			country?: string;
			/**
			 * The two-letter country code of the address, such as `CZ` for Czechia.
			 */
			countryCodeV2?: string;
			/**
			 * The zip or postal code of the address.
			 */
			zip?: string;
		}[];
	};
	/**
	 * The most recent order the customer placed.
	 */
	lastOrder?: {
		/**
		 * The global ID of the order. Pass it to the Get an order endpoint for details.
		 */
		id?: string;
		/**
		 * The unique identifier that appears on the order, such as `#1001`.
		 */
		name?: string;
	};
	/**
	 * The total amount the customer has spent across all orders.
	 */
	amountSpent?: {
		/**
		 * The decimal monetary amount, serialized as a string.
		 */
		amount?: string;
		/**
		 * The three-letter currency code in ISO 4217 format.
		 */
		currencyCode?: string;
	};
	/**
	 * The Shopify-computed segmentation statistics of the customer.
	 */
	statistics?: {
		/**
		 * The predicted spend tier of the customer, such as `HIGH`, `MEDIUM`, or `LOW`.
		 */
		predictedSpendTier?: string;
		/**
		 * The recency, frequency, and monetary group the customer belongs to, such as `LOYAL` or `AT_RISK`.
		 */
		rfmGroup?: string;
	};
	/**
	 * The metafields of the customer. Returned only when **Output customer metafields** is enabled.
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
 * Get a customer
 * Returns a single customer by their ID.
 */
export async function getAcustomer(
	this: EndpointFunctionThis,
	payload: {
		input: GetACustomerInput;
		connectionId: number;
	},
): Promise<GetACustomerOutput> {
	const response = await this.endpointCaller<GetACustomerOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'getACustomer',
		},
		payload,
	);
	return response.output;
}
