// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateCommentInput = {
	/**
	 * Unique identifier of the comment to update.
	 */
	commentId: string;
	/**
	 * Replacement comment content in markdown. Omit it to leave the body unchanged.
	 */
	body?: string;
};

export type UpdateCommentOutput = {
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
 * Update a comment
 * Updates an existing comment.
 */
export async function updateComment(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCommentInput;
		connectionId: number;
	},
): Promise<UpdateCommentOutput> {
	const response = await this.endpointCaller<UpdateCommentOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'updateComment',
		},
		payload,
	);
	return response.output;
}
