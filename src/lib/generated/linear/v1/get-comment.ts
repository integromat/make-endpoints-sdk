// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetCommentInput = {
	/**
	 * Unique identifier of the comment to return.
	 */
	commentId: string;
};

export type GetCommentOutput = {
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
};

/**
 * Get a comment
 * Retrieves an existing comment.
 */
export async function getComment(
	this: EndpointFunctionThis,
	payload: {
		input: GetCommentInput;
		connectionId: number;
	},
): Promise<GetCommentOutput> {
	const response = await this.endpointCaller<GetCommentOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'getComment',
		},
		payload,
	);
	return response.output;
}
