// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteIssueInput = {
	/**
	 * The node ID of the issue to delete. This action is permanent and cannot be undone.
	 */
	issueId: string;
};

export type DeleteIssueOutput = {
	data?: {
		deleteIssue?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
		};
	};
};

/**
 * Delete an issue
 * Deletes an existing issue.
 */
export async function deleteIssue(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteIssueInput;
		connectionId: number;
	},
): Promise<DeleteIssueOutput> {
	const response = await this.endpointCaller<DeleteIssueOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'deleteIssue',
		},
		payload,
	);
	return response.output;
}
