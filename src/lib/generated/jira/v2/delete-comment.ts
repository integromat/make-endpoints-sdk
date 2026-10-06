// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCommentInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * The ID of the comment to delete.
	 */
	commentId: string;
};

export type DeleteCommentOutput = Record<string, never>;

/**
 * Delete comment
 * Deletes a comment.
 */
export async function deleteComment(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCommentInput;
		connectionId: number;
	},
): Promise<DeleteCommentOutput> {
	const response = await this.endpointCaller<DeleteCommentOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteComment',
		},
		payload,
	);
	return response.output;
}
