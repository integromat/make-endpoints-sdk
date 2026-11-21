// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetPostReactionsInput = {
	/**
	 * The ID of the page that owns the object. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of a page post (`{page_id}_{post_id}`) or of a comment.
	 */
	object_id: string;
	/**
	 * Return only reactions of this type. The total count then counts only this type.
	 */
	type?:
		| ''
		| 'LIKE'
		| 'LOVE'
		| 'CARE'
		| 'WOW'
		| 'HAHA'
		| 'SAD'
		| 'ANGRY'
		| 'THANKFUL'
		| 'PRIDE'
		| 'FIRE'
		| 'HUNDRED'
		| 'NONE';
	/**
	 * Maximum number of items to return.
	 */
	limit?: number;
	/**
	 * Cursor of the next page, from `paging.cursors.after` of the previous response.
	 */
	after?: string;
	/**
	 * Cursor of the previous page, from `paging.cursors.before` of the previous response.
	 */
	before?: string;
};

export type GetPostReactionsOutput = {
	/**
	 * Reactions visible to the caller. Facebook returns only the caller's own reaction; other people's reactions are not returned for privacy reasons.
	 *
	 * Items: A reaction.
	 */
	data?: {
		/**
		 * ID of the page or person that reacted.
		 */
		id?: string;
		/**
		 * Name of the page or person that reacted.
		 */
		name?: string;
		/**
		 * Type of the reaction, for example `LIKE` or `LOVE`.
		 */
		type?: string;
	}[];
	/**
	 * Cursors for paging through results.
	 */
	paging?: {
		/**
		 * Paging cursors.
		 */
		cursors?: {
			/**
			 * Cursor of the start of the page. Pass it as `before` to get the previous page.
			 */
			before?: string;
			/**
			 * Cursor of the end of the page. Pass it as `after` to get the next page.
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
	 * Reaction counts.
	 */
	summary?: {
		/**
		 * Total number of reactions (of the selected `type`, if set).
		 */
		total_count?: number;
		/**
		 * The reaction of the caller, or `NONE`.
		 */
		viewer_reaction?: string;
	};
};

/**
 * Get post reactions
 * Gets the reactions on a Facebook page post or comment, with the total count.
 */
export async function getPostReactions(
	this: EndpointFunctionThis,
	payload: {
		input: GetPostReactionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetPostReactionsOutput> {
	const response = await this.endpointCaller<GetPostReactionsOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'GetPostReactions',
		},
		payload,
	);
	return response.output;
}
