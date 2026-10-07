// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListSpacePagesInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `listSpaces` endpoint to find it.
	 */
	spaceId: string;
	/**
	 * `root` returns only top-level pages sitting directly under the space; `all` returns every page in the space. Confluence defaults to `all` when omitted. This filter is the reason to use this endpoint over `searchPages`.
	 */
	depth?: '' | 'root' | 'all';
	/**
	 * Filter to pages with these statuses. Confluence defaults to `current` and `archived`.
	 */
	status?: '' | 'current' | 'archived' | 'deleted' | 'trashed';
	/**
	 * Field to sort by. `-` prefix means descending.
	 */
	sort?:
		| ''
		| 'id'
		| '-id'
		| 'created-date'
		| '-created-date'
		| 'modified-date'
		| '-modified-date'
		| 'title'
		| '-title';
	/**
	 * Content format returned in each result's `body` field. The body is NOT returned unless this is set.
	 */
	bodyFormat?: '' | 'atlas_doc_format' | 'storage';
	/**
	 * Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.
	 */
	cursor?: string;
	/**
	 * Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.
	 */
	limit?: number;
};

export type ListSpacePagesOutput = {
	/**
	 * The pages returned in this page, at most `limit` items.
	 */
	results?: {
		id?: string;
		status?: string;
		spaceId?: string;
		parentId?: string;
		parentType?: string;
		position?: number;
		authorId?: string;
		createdAt?: string;
		version?: {
			createdAt?: string;
			message?: string;
			number?: number;
			minorEdit?: boolean;
			authorId?: string;
		};
		body?: {
			storage?: {
				value?: string;
				representation?: string;
			};
			atlas_doc_format?: {
				value?: string;
				representation?: string;
			};
		};
		_links?: {
			webui?: string;
			editui?: string;
			tinyui?: string;
		};
		ownerId?: string;
		lastOwnerId?: string;
	}[];
	/**
	 * Pagination and context links for this pages page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.
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
 * List space pages
 * Returns a page of pages inside one space, optionally only those at the space root.
 */
export async function listSpacePages(
	this: EndpointFunctionThis,
	payload: {
		input: ListSpacePagesInput;
		connectionId: number;
	},
): Promise<ListSpacePagesOutput> {
	const response = await this.endpointCaller<ListSpacePagesOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'listSpacePages',
		},
		payload,
	);
	return response.output;
}
