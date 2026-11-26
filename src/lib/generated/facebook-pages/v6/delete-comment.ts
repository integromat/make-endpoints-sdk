// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteCommentInput = {
	/**
	 * The ID of the page where the comment was posted. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the comment to delete.
	 */
	comment_id: string;
};

export type DeleteCommentOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Delete a comment
 * Deletes a comment.
 */
export async function deleteComment(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCommentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeleteCommentOutput>> {
	const response = await this.endpointCaller<DeleteCommentOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'DeleteComment',
		},
		payload,
	);
	return response;
}
