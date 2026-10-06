// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCommentInput = {
	/**
	 * The node ID of the issue or pull request comment to delete.
	 */
	id: string;
};

export type DeleteCommentOutput = {
	data?: {
		deleteIssueComment?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
		};
	};
};

/**
 * Delete a comment
 * Deletes an issue or pull request comment.
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
			appName: 'github',
			appVersion: 4,
			endpointName: 'deleteComment',
		},
		payload,
	);
	return response.output;
}
