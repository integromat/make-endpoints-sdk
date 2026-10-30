// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCommentThreadsInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	localeId?: string;
	/**
	 * Return only comment threads left on this page. Use `listPages` to find page IDs.
	 */
	pageId?: string;
	/**
	 * Return only resolved (`true`) or only unresolved (`false`) comment threads.
	 */
	isResolved?: boolean;
	/**
	 * Sort results by the provided value. Only allowed when sortOrder is provided.
	 */
	sortBy?: '' | 'createdOn' | 'lastUpdated';
	/**
	 * Sorts the results by asc or desc.
	 */
	sortOrder?: '' | 'asc' | 'desc';
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
};

export type ListCommentThreadsOutput = {
	/**
	 * Comments returned by the call.
	 *
	 * Items: A comment thread represents a conversation between users on a specific page. Each comment thread has a unique identifier and can contain multiple comments. Retrieve comment replies using the replies API endpoint.
	 */
	comments?: {
		/**
		 * Unique identifier for the comment thread.
		 */
		id?: string;
		/**
		 * The site unique identifier.
		 */
		siteId?: string;
		/**
		 * The page unique identifier.
		 */
		pageId?: string;
		/**
		 * The locale unique identifier.
		 */
		localeId?: string;
		/**
		 * ID of the element the comment is attached to. Returned by the API but not described in the vendor reference.
		 */
		elementId?: string;
		/**
		 * ID of the object the comment belongs to (the page ID for `objectType` `page`). Returned by the API but not described in the vendor reference.
		 */
		objectId?: string;
		/**
		 * Type of the object the comment belongs to, e.g. `page`. Returned by the API but not described in the vendor reference.
		 */
		objectType?: string;
		/**
		 * The item unique identifier.
		 */
		itemId?: string;
		/**
		 * The breakpoint the comment was left on.
		 */
		breakpoint?: string;
		/**
		 * The URL of the page the comment was left on.
		 */
		url?: string;
		/**
		 * The content of the thread's opening comment.
		 */
		content?: string;
		/**
		 * Boolean determining if the comment thread is resolved. Defaults to `false`.
		 */
		isResolved?: boolean;
		/**
		 * Author of the comment.
		 */
		author?: {
			/**
			 * The unique identifier of the author.
			 */
			userId?: string;
			/**
			 * Email of the author.
			 */
			email?: string;
			/**
			 * Name of the author.
			 */
			name?: string;
			/**
			 * Whether the user's email address is verified. Returned by the API but not described in the vendor reference.
			 */
			verified?: boolean;
		};
		/**
		 * List of mentioned users. This is an empty array until email notifications are sent, which can take up to 5 minutes after the comment is created.
		 *
		 * Items: One mentioned user.
		 */
		mentionedUsers?: {
			/**
			 * The unique identifier of the mentioned user.
			 */
			userId?: string;
			/**
			 * Email of the user.
			 */
			email?: string;
			/**
			 * Name of the User.
			 */
			name?: string;
			/**
			 * Whether the user's email address is verified. Returned by the API but not described in the vendor reference.
			 */
			verified?: boolean;
		}[];
		/**
		 * The date the comment thread was created.
		 */
		createdOn?: string;
		/**
		 * The date the comment thread was last updated.
		 */
		lastUpdated?: string;
	}[];
	/**
	 * Pagination information for the returned list.
	 */
	pagination?: {
		/**
		 * The limit specified in the request (default 100).
		 */
		limit?: number;
		/**
		 * The offset specified for pagination. Defaults to `0`.
		 */
		offset?: number;
		/**
		 * Total number of comment threads.
		 */
		total?: number;
	};
};

/**
 * List comment threads
 * Lists the comment threads of a site.
 */
export async function listCommentThreads(
	this: EndpointFunctionThis,
	payload: {
		input: ListCommentThreadsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListCommentThreadsOutput> {
	const response = await this.endpointCaller<ListCommentThreadsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listCommentThreads',
		},
		payload,
	);
	return response.output;
}
