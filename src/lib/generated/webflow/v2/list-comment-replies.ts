// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCommentRepliesInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a comment thread. Use the `listCommentThreads` endpoint to find it.
	 */
	comment_thread_id: string;
	/**
	 * Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	localeId?: string;
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

export type ListCommentRepliesOutput = {
	/**
	 * Comments returned by the call.
	 *
	 * Items: A reply within the comment thread.
	 */
	comments?: {
		/**
		 * Unique identifier for the comment reply.
		 */
		id?: string;
		/**
		 * ID of the parent comment thread (equals the thread's `id`).
		 */
		commentId?: string;
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
		 * ID of the CMS item the comment is attached to, or `null`. Returned by the API but not described in the vendor reference.
		 */
		itemId?: string;
		/**
		 * The breakpoint the comment was left on.
		 */
		breakpoint?: string;
		/**
		 * Link to the comment thread in the Webflow Designer. Returned by the API but not described in the vendor reference.
		 */
		url?: string;
		/**
		 * The content of the comment reply.
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
		 * List of mentioned users is an empty array until email notifications are sent.
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
		 * The date the reply was last updated.
		 */
		lastUpdated?: string;
		/**
		 * The date the reply was created.
		 */
		createdOn?: string;
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
		 * Total number of comment replies.
		 */
		total?: number;
	};
};

/**
 * List comment replies
 * Lists the replies of a comment thread.
 */
export async function listCommentReplies(
	this: EndpointFunctionThis,
	payload: {
		input: ListCommentRepliesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListCommentRepliesOutput> {
	const response = await this.endpointCaller<ListCommentRepliesOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listCommentReplies',
		},
		payload,
	);
	return response.output;
}
