// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateArticleInput = {
	/**
	 * The author of the article. Provide either **Name** or **User ID**, but never both.
	 */
	author: {
		/**
		 * The author's full name. Provide this or **User ID**.
		 */
		name?: string;
		/**
		 * The global ID of a staff member's account, such as `gid://shopify/StaffMember/123`. Provide this or **Name**.
		 */
		userId?: string;
	};
	/**
	 * The global ID of the blog to create the article in, such as `gid://shopify/Blog/123`. The **Search blogs** endpoint returns it as `id`.
	 */
	blogId?: string;
	/**
	 * The text of the article's body, complete with HTML markup.
	 */
	body?: string;
	/**
	 * A summary of the article, which can include HTML markup. Themes use it to display the article on listing pages such as the home page or the main blog page.
	 */
	summary?: string;
	/**
	 * The unique, human-friendly string used in the article's URL. Generated from the title when omitted.
	 */
	handle?: string;
	/**
	 * Whether the article is visible in the online store.
	 */
	isPublished?: boolean;
	/**
	 * The date and time when the article should become visible.
	 */
	publishDate?: string;
	/**
	 * The tags to attach to the article. Tags are short descriptors used for filtering and theme logic.
	 *
	 * Items: A tag to attach to the article.
	 */
	tags?: string[];
	/**
	 * The suffix of the template used to render the article page. The default article template is used when this is empty.
	 */
	templateSuffix?: string;
	/**
	 * The image associated with the article. Only URL-based sources are supported; binary uploads are not available through endpoints.
	 */
	image?: {
		/**
		 * The URL of the image. Required when an image is provided.
		 */
		url?: string;
		/**
		 * A word or phrase describing the nature or contents of the image.
		 */
		altText?: string;
	};
	/**
	 * The metafields to associate with the article.
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

export type CreateArticleOutput = {
	/**
	 * The created article. Use the **Search articles** endpoint with `id:` for the full article details.
	 */
	article?: {
		/**
		 * The global ID of the created article.
		 */
		id?: string;
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
		 * The date and time when the article was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the article was last modified.
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
 * Create an article
 * Creates a blog article with the given title, author, body, and image.
 */
export async function createArticle(
	this: EndpointFunctionThis,
	payload: {
		input: CreateArticleInput;
		connectionId: number;
	},
): Promise<CreateArticleOutput> {
	const response = await this.endpointCaller<CreateArticleOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'createArticle',
		},
		payload,
	);
	return response.output;
}
