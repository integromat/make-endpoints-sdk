// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchArticlesInput = {
	/**
	 * Filters the articles using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys include `author`, `blog_id`, `blog_title`, `created_at`, `handle`, `id`, `published_at`, `published_status`, `tag`, `tag_not`, `title`, and `updated_at` — for example `blog_id:1234 AND tag:news`. A bare term runs a full-text search. See the [`articles` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/articles). Leave empty to return all articles.
	 */
	query?: string;
	/**
	 * The maximum number of articles to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.
	 */
	first?: number;
	/**
	 * The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.
	 */
	after?: string;
	/**
	 * The field to sort the articles by. Defaults to `ID`. See [ArticleSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/ArticleSortKeys).
	 */
	sortKey?: '' | 'AUTHOR' | 'BLOG_TITLE' | 'ID' | 'PUBLISHED_AT' | 'TITLE' | 'UPDATED_AT';
	/**
	 * Whether to reverse the sort order. Set to `true` to sort in descending order.
	 */
	reverse?: boolean;
	/**
	 * Whether to include the metafields of each article.
	 */
	metafields?: boolean;
};

export type SearchArticlesOutput = {
	/**
	 * The list of articles that match the query.
	 *
	 * Items: A blog post from one of the shop's blogs.
	 */
	nodes?: {
		/**
		 * The global ID of the article, such as `gid://shopify/Article/123`.
		 */
		id?: string;
		/**
		 * The text of the article's body, including HTML markup.
		 */
		body?: string;
		/**
		 * A summary of the article, which can include HTML markup. Themes use it to display the article on listing pages.
		 */
		summary?: string;
		/**
		 * The unique, human-friendly string used in the article's URL.
		 */
		handle?: string;
		/**
		 * Whether the article is visible in the online store.
		 */
		isPublished?: boolean;
		/**
		 * The date and time when the article became visible.
		 */
		publishedAt?: string;
		/**
		 * The tags attached to the article.
		 *
		 * Items: A tag attached to the article.
		 */
		tags?: string[];
		/**
		 * The date and time when the article was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the article was last modified.
		 */
		updatedAt?: string;
		/**
		 * The author of the article.
		 */
		author?: {
			/**
			 * The author's full name.
			 */
			name?: string;
		};
		/**
		 * The blog that contains the article.
		 */
		blog?: {
			/**
			 * The global ID of the blog.
			 */
			id?: string;
		};
		/**
		 * The image associated with the article.
		 */
		image?: {
			/**
			 * A word or phrase describing the nature or contents of the image.
			 */
			altText?: string;
			/**
			 * The URL of the image.
			 */
			url?: string;
		};
		/**
		 * The metafields of the article. Returned only when **Output article metafields** is enabled.
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
 * Search articles
 * Returns a list of blog articles that match a search query.
 */
export async function searchArticles(
	this: EndpointFunctionThis,
	payload: {
		input: SearchArticlesInput;
		connectionId: number;
	},
): Promise<SearchArticlesOutput> {
	const response = await this.endpointCaller<SearchArticlesOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'searchArticles',
		},
		payload,
	);
	return response.output;
}
