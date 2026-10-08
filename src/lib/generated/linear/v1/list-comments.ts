// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCommentsInput = {
	/**
	 * Number of comments to return in this call. Must be from 1 to 50. Defaults to 50.
	 */
	first?: number;
	/**
	 * Pagination cursor returned as `endCursor` by a previous call to this endpoint. Omit it to fetch the first page.
	 */
	after?: string;
};

export type ListCommentsOutput = {
	/**
	 * Comments returned in this page.
	 *
	 * Items: One comment.
	 */
	nodes?: {
		/**
		 * Unique identifier of the comment.
		 */
		id?: string;
		/**
		 * Comment content in markdown.
		 */
		body?: string;
		/**
		 * Date and time the comment was created.
		 */
		createdAt?: string;
		/**
		 * Date and time the comment was last updated.
		 */
		updatedAt?: string;
		/**
		 * Date and time the comment was archived. Empty when the comment is not archived.
		 */
		archivedAt?: string;
		/**
		 * Date and time the comment body was last edited. Empty when the comment was never edited.
		 */
		editedAt?: string;
		/**
		 * URL of the comment in Linear.
		 */
		url?: string;
		/**
		 * User who wrote the comment.
		 */
		user?: {
			/**
			 * Unique identifier of the user who wrote the comment.
			 */
			id?: string;
			/**
			 * Name of the user who wrote the comment.
			 */
			name?: string;
		};
		/**
		 * Issue the comment belongs to.
		 */
		issue?: {
			/**
			 * Unique identifier of the issue.
			 */
			id?: string;
			/**
			 * Date and time the issue was created.
			 */
			createdAt?: string;
			/**
			 * Workflow state of the issue.
			 */
			state?: {
				/**
				 * Unique identifier of the workflow state.
				 */
				id?: string;
				/**
				 * Name of the workflow state.
				 */
				name?: string;
			};
		};
	}[];
	/**
	 * Whether another page of comments exists. When true, pass `endCursor` back as `after`.
	 */
	hasNextPage?: boolean;
	/**
	 * Cursor for the next page. Pass it as `after` on the next call when `hasNextPage` is true.
	 */
	endCursor?: string;
};

/**
 * List comments
 * Retrieves one page of comments.
 */
export async function listComments(
	this: EndpointFunctionThis,
	payload: {
		input: ListCommentsInput;
		connectionId: number;
	},
): Promise<ListCommentsOutput> {
	const response = await this.endpointCaller<ListCommentsOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'listComments',
		},
		payload,
	);
	return response.output;
}
