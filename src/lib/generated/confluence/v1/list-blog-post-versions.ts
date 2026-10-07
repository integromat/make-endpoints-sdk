// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBlogPostVersionsInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.
	 */
	blogPostId: string;
	/**
	 * Field to sort by. `-` prefix means descending.
	 */
	sort?: '' | '-modified-date' | 'modified-date';
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

export type ListBlogPostVersionsOutput = {
	/**
	 * The versions returned in this page, at most `limit` items.
	 */
	results?: {
		createdAt?: string;
		message?: string;
		number?: number;
		minorEdit?: boolean;
		authorId?: string;
		blogpost?: {
			id?: string;
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
		};
	}[];
	/**
	 * Pagination and context links for this versions page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.
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
 * List blog post versions
 * Returns a page of version history entries for a single blog post.
 */
export async function listBlogPostVersions(
	this: EndpointFunctionThis,
	payload: {
		input: ListBlogPostVersionsInput;
		connectionId: number;
	},
): Promise<ListBlogPostVersionsOutput> {
	const response = await this.endpointCaller<ListBlogPostVersionsOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'listBlogPostVersions',
		},
		payload,
	);
	return response.output;
}
