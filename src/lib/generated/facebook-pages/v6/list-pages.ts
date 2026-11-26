// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListPagesInput = {
	/**
	 * Page fields to return for each page. If left empty, only the page ID and name are returned.
	 */
	fields?:
		| ''
		| 'id'
		| 'name'
		| 'category'
		| 'category_list'
		| 'tasks'
		| 'location'
		| 'username'
		| 'link'
		| 'about'
		| 'fan_count'
		| 'followers_count'
		| 'picture'
		| 'website'
		| 'is_published'
		| 'verification_status';
	/**
	 * If set, returns only pages that are places (`true`) or only pages that are not places (`false`).
	 */
	is_place?: boolean;
	/**
	 * If set, returns only pages that can be promoted (`true`) or only pages that cannot be promoted (`false`).
	 */
	is_promotable?: boolean;
	/**
	 * Returns only pages associated with this ad ID.
	 */
	ad_id?: string;
	/**
	 * Set to `total_count` to include the total number of pages in the `summary` output.
	 */
	summary?: '' | 'total_count';
	/**
	 * Maximum number of pages to return in one response.
	 */
	limit?: number;
	/**
	 * Cursor that points to the end of the page of data that has been returned. Use `paging.cursors.after` from the previous response to get the next page.
	 */
	after?: string;
	/**
	 * Cursor that points to the start of the page of data that has been returned. Use `paging.cursors.before` from the previous response to get the previous page.
	 */
	before?: string;
};

export type ListPagesOutput = {
	/**
	 * Pages the connected user has a role on.
	 *
	 * Items: A Facebook Page.
	 */
	data?: {
		/**
		 * The ID of the Page. Use it as `page_id` in the other Facebook Pages endpoints.
		 */
		id?: string;
		/**
		 * The name of the Page.
		 */
		name?: string;
		/**
		 * The main category of the Page.
		 */
		category?: string;
		/**
		 * All categories of the Page.
		 *
		 * Items: A Page category.
		 */
		category_list?: {
			/**
			 * The ID of the category.
			 */
			id?: string;
			/**
			 * The name of the category.
			 */
			name?: string;
		}[];
		/**
		 * The tasks the connected user can perform on the Page, for example `MODERATE`, `CREATE_CONTENT`, `MANAGE`.
		 *
		 * Items: A task the user can perform on the Page.
		 */
		tasks?: string[];
		/**
		 * The location of the Page.
		 */
		location?: {
			/**
			 * Street address.
			 */
			street?: string;
			/**
			 * City.
			 */
			city?: string;
			/**
			 * State or region.
			 */
			state?: string;
			/**
			 * Country.
			 */
			country?: string;
			/**
			 * Postal code.
			 */
			zip?: string;
			/**
			 * Latitude of the location.
			 */
			latitude?: number;
			/**
			 * Longitude of the location.
			 */
			longitude?: number;
		};
		/**
		 * The username of the Page.
		 */
		username?: string;
		/**
		 * The URL of the Page on Facebook.
		 */
		link?: string;
		/**
		 * Short description of the Page.
		 */
		about?: string;
		/**
		 * The number of users who like the Page.
		 */
		fan_count?: number;
		/**
		 * The number of users who follow the Page.
		 */
		followers_count?: number;
		/**
		 * The profile picture of the Page.
		 */
		picture?: {
			/**
			 * Profile picture details.
			 */
			data?: {
				/**
				 * URL of the picture.
				 */
				url?: string;
				/**
				 * Picture height in pixels.
				 */
				height?: number;
				/**
				 * Picture width in pixels.
				 */
				width?: number;
				/**
				 * Whether the picture is the default silhouette.
				 */
				is_silhouette?: boolean;
			};
		};
		/**
		 * The website of the Page, as entered by the Page.
		 */
		website?: string;
		/**
		 * Whether the Page is published.
		 */
		is_published?: boolean;
		/**
		 * The verification status of the Page.
		 */
		verification_status?: string;
	}[];
	/**
	 * Pagination information.
	 */
	paging?: {
		/**
		 * Pagination cursors.
		 */
		cursors?: {
			/**
			 * Cursor for the previous page. Pass it as `before`.
			 */
			before?: string;
			/**
			 * Cursor for the next page. Pass it as `after`.
			 */
			after?: string;
		};
		/**
		 * URL of the next page. Missing on the last page.
		 */
		next?: string;
		/**
		 * URL of the previous page. Missing on the first page.
		 */
		previous?: string;
	};
	/**
	 * Aggregated information. Returned only when `summary` is set.
	 */
	summary?: {
		/**
		 * Total number of Pages the user has a role on.
		 */
		total_count?: number;
	};
};

/**
 * List pages
 * Returns the Facebook pages the connected user has a role on.
 */
export async function listPages(
	this: EndpointFunctionThis,
	payload: {
		input: ListPagesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListPagesOutput>> {
	const response = await this.endpointCaller<ListPagesOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'ListPages',
		},
		payload,
	);
	return response;
}
