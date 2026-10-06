// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListLocationsInput = {
	/**
	 * Filters the locations using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys include `name`, `address1`, `address2`, `city`, `province`, `country`, `zip`, `active`, `legacy`, `geolocated`, `id`, `location_id` and `pickup_in_store` — for example `name:Warehouse`. A bare term runs a full-text search. See the [`locations` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/locations). Leave empty to return all locations.
	 */
	query?: string;
	/**
	 * The maximum number of locations to return in one call. Shopify allows up to 250. Defaults to 50 when omitted.
	 */
	first?: number;
	/**
	 * The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.
	 */
	after?: string;
	/**
	 * The field to sort by. Defaults to `NAME`. See [LocationSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/LocationSortKeys).
	 */
	sortKey?: '' | 'NAME' | 'ID' | 'RELEVANCE';
	/**
	 * Whether to reverse the sort order. Set to `true` to sort in descending order.
	 */
	reverse?: boolean;
	/**
	 * Whether to include deactivated locations. They can no longer stock inventory or fulfil orders, so leave this off when you need a location to write to. Defaults to `false`.
	 */
	includeInactive?: boolean;
	/**
	 * Whether to include the legacy locations that fulfillment service apps manage. Defaults to `false`.
	 */
	includeLegacy?: boolean;
};

export type ListLocationsOutput = {
	/**
	 * The locations that match the query.
	 *
	 * Items: A location where the merchant stocks inventory and fulfils orders.
	 */
	nodes?: {
		/**
		 * The global ID of the location, such as `gid://shopify/Location/123`. This is the value the inventory and fulfillment endpoints expect as **Location ID**.
		 */
		id?: string;
		/**
		 * The name of the location as the merchant sees it.
		 */
		name?: string;
		/**
		 * Whether the location is active. Only active locations can stock inventory and fulfil orders.
		 */
		isActive?: boolean;
		/**
		 * Whether the location can be reactivated.
		 */
		activatable?: boolean;
		/**
		 * Whether the location can be deactivated.
		 */
		deactivatable?: boolean;
		/**
		 * The date the location was deactivated, as a string. Empty while the location is active.
		 */
		deactivatedAt?: string;
		/**
		 * Whether the location can be deleted.
		 */
		deletable?: boolean;
		/**
		 * Whether Shopify has verified the address of the location.
		 */
		addressVerified?: boolean;
		/**
		 * Whether the location is used when calculating delivery rates for online orders.
		 */
		fulfillsOnlineOrders?: boolean;
		/**
		 * Whether the location is the default one for shipping inventory.
		 */
		shipsInventory?: boolean;
		/**
		 * The date and time when the location was created.
		 */
		createdAt?: string;
		/**
		 * The address of the location.
		 */
		address?: {
			/**
			 * The address formatted for display, one line per element.
			 *
			 * Items: One line of the formatted address.
			 */
			formatted?: string[];
			/**
			 * The first line of the address, typically the street address.
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
			countryCode?: string;
			/**
			 * The zip or postal code of the address.
			 */
			zip?: string;
			/**
			 * The phone number of the location.
			 */
			phone?: string;
			/**
			 * The latitude of the location.
			 */
			latitude?: number;
			/**
			 * The longitude of the location.
			 */
			longitude?: number;
		};
		/**
		 * The fulfillment service that manages the location, when one does.
		 */
		fulfillmentService?: {
			/**
			 * The global ID of the fulfillment service.
			 */
			id?: string;
			/**
			 * The handle of the fulfillment service. A handle other than `manual` means a third-party service manages this location.
			 */
			handle?: string;
			/**
			 * Whether the fulfillment service tracks inventory and reports it back to Shopify.
			 */
			inventoryManagement?: boolean;
		};
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
 * Search locations
 * Returns the locations where the shop stocks inventory and fulfils orders.
 */
export async function listLocations(
	this: EndpointFunctionThis,
	payload: {
		input: ListLocationsInput;
		connectionId: number;
	},
): Promise<ListLocationsOutput> {
	const response = await this.endpointCaller<ListLocationsOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'listLocations',
		},
		payload,
	);
	return response.output;
}
