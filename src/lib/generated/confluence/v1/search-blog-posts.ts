// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchBlogPostsInput = {
	/**
	 * Filter to these numeric blog post IDs.
	 */
	blogPostIds?: string[];
	/**
	 * Filter to these numeric space IDs. Use `listSpaces` to find them.
	 */
	spaceIds?: string[];
	/**
	 * Filter to blog posts with these statuses. Confluence defaults to `current`.
	 */
	status?: '' | 'current' | 'deleted' | 'trashed';
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
		| '-modified-date';
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

export type SearchBlogPostsOutput = {
	/**
	 * The blog posts returned in this page, at most `limit` items.
	 */
	results?: {
		authorId?: string;
		id?: string;
		version?: {
			number?: number;
			message?: string;
			minorEdit?: boolean;
			authorId?: string;
			createdAt?: string;
		};
		status?: string;
		body?: {
			storage?: {
				value?: string;
				representation?: string;
			};
			atlas_doc_format?: {
				value?: string;
				representation?: string;
			};
			view?: {
				value?: string;
				representation?: string;
			};
		};
		spaceId?: string;
		createdAt?: string;
		_links?: {
			editui?: string;
			webui?: string;
			tinyui?: string;
		};
	}[];
	/**
	 * Pagination and context links for this blog posts page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.
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
 * Search blog posts
 * Returns a page of blog posts, optionally filtered by title, ID, space or status.
 */
export async function searchBlogPosts(
	this: EndpointFunctionThis,
	payload: {
		input: SearchBlogPostsInput;
		connectionId: number;
	},
): Promise<SearchBlogPostsOutput> {
	const response = await this.endpointCaller<SearchBlogPostsOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'searchBlogPosts',
		},
		payload,
	);
	return response.output;
}
