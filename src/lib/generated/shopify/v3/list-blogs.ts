// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBlogsInput = {
	/**
	 * Filters the blogs using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys are `title`, `handle`, `id`, `created_at` and `updated_at` — for example `title:News`. A bare term runs a full-text search. See the [`blogs` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/blogs). Leave empty to return all blogs.
	 */
	query?: string;
	/**
	 * The maximum number of blogs to return in one call. Shopify allows up to 250. Defaults to 50 when omitted.
	 */
	first?: number;
	/**
	 * The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.
	 */
	after?: string;
	/**
	 * The field to sort by. Defaults to `ID`. See [BlogSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/BlogSortKeys).
	 */
	sortKey?: '' | 'ID' | 'HANDLE' | 'TITLE';
	/**
	 * Whether to reverse the sort order. Set to `true` to sort in descending order.
	 */
	reverse?: boolean;
};

export type ListBlogsOutput = {
	/**
	 * The blogs that match the query.
	 *
	 * Items: A container for the shop's articles.
	 */
	nodes?: {
		/**
		 * The global ID of the blog, such as `gid://shopify/Blog/123`. This is the value the **Create an article** endpoint expects as **Blog ID**.
		 */
		id?: string;
		/**
		 * The unique, human-friendly string used in the blog's URL.
		 */
		handle?: string;
		/**
		 * Whether readers can comment on the articles of this blog: `MODERATED`, `CLOSED`, or `AUTO_PUBLISHED`.
		 */
		commentPolicy?: string;
		/**
		 * The theme template used when customers view the blog in the store.
		 */
		templateSuffix?: string;
		/**
		 * The tags used across the articles of this blog.
		 *
		 * Items: One tag used by an article of this blog.
		 */
		tags?: string[];
		/**
		 * The date and time when the blog was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the blog was last modified.
		 */
		updatedAt?: string;
		/**
		 * The RSS feed of the blog. Empty when the blog has no feed.
		 */
		feed?: {
			/**
			 * The path to the RSS feed of the blog.
			 */
			path?: string;
			/**
			 * The full URL of the RSS feed of the blog.
			 */
			location?: string;
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
 * Search blogs
 * Returns the blogs of the shop.
 */
export async function listBlogs(
	this: EndpointFunctionThis,
	payload: {
		input: ListBlogsInput;
		connectionId: number;
	},
): Promise<ListBlogsOutput> {
	const response = await this.endpointCaller<ListBlogsOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'listBlogs',
		},
		payload,
	);
	return response.output;
}
