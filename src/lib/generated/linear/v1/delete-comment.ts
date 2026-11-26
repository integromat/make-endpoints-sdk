// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteCommentInput = {
	/**
	 * Unique identifier of the comment to delete.
	 */
	commentId: string;
};

export type DeleteCommentOutput = {
	/**
	 * Whether Linear deleted the comment.
	 */
	success?: boolean;
};

/**
 * Delete a comment
 * Deletes an existing comment.
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
			appName: 'linear',
			appVersion: 1,
			endpointName: 'deleteComment',
		},
		payload,
	);
	return response;
}
