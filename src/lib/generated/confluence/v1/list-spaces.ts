// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListSpacesInput = {
	/**
	 * Filter to these numeric space IDs.
	 */
	spaceIds?: string[];
	/**
	 * Filter to these space keys, e.g. `DEV`.
	 */
	keys?: string[];
	/**
	 * Filter to spaces carrying these labels.
	 */
	labels?: string[];
	/**
	 * Restrict to global or personal spaces.
	 */
	type?: '' | 'global' | 'personal';
	/**
	 * Restrict to current or archived spaces.
	 */
	status?: '' | 'current' | 'archived';
	/**
	 * Field to sort by. `-` prefix means descending.
	 */
	sort?: '' | 'name' | '-name' | 'key' | '-key' | 'id' | '-id';
	/**
	 * Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.
	 */
	cursor?: string;
	/**
	 * Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.
	 */
	limit?: number;
};

export type ListSpacesOutput = {
	/**
	 * The spaces returned in this page, at most `limit` items.
	 */
	results?: {
		/**
		 * Numeric space ID as a string. Use this, not the key, wherever a space ID is required.
		 */
		id?: string;
		/**
		 * Human-readable space key, e.g. `DEV`. Not interchangeable with the numeric ID.
		 */
		key?: string;
		/**
		 * Display name of the space.
		 */
		name?: string;
		/**
		 * `global` or `personal`.
		 */
		type?: string;
		/**
		 * `current` or `archived`.
		 */
		status?: string;
		/**
		 * Account ID of the space creator.
		 */
		authorId?: string;
		/**
		 * ISO 8601 creation timestamp.
		 */
		createdAt?: string;
		/**
		 * Page ID of the space homepage.
		 */
		homepageId?: string;
		/**
		 * Space description, when requested.
		 */
		description?: {
			plain?: {
				value?: string;
				representation?: string;
			};
		};
		/**
		 * Links for this space.
		 */
		_links?: {
			/**
			 * Relative UI path to the space.
			 */
			webui?: string;
		};
	}[];
	/**
	 * Pagination and context links for this spaces page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.
	 */
	_links?: {
		/**
		 * Relative URL of the next page, or absent on the last page.
		 */
		next?: string;
		/**
		 * Base URL of the Confluence site.
		 */
		base?: string;
	};
};

/**
 * List spaces
 * Returns a page of Confluence spaces, optionally filtered by ID, key, label, type or status.
 */
export async function listSpaces(
	this: EndpointFunctionThis,
	payload: {
		input: ListSpacesInput;
		connectionId: number;
	},
): Promise<ListSpacesOutput> {
	const response = await this.endpointCaller<ListSpacesOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'listSpaces',
		},
		payload,
	);
	return response.output;
}
