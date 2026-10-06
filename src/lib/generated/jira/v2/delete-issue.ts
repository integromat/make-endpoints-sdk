// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteIssueInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * Whether the issue's subtasks are deleted when the issue is deleted. If the issue has subtasks and this is `false`, the request fails.
	 */
	deleteSubtasks?: boolean;
};

export type DeleteIssueOutput = Record<string, never>;

/**
 * Delete issue
 * Deletes an issue.
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
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteIssue',
		},
		payload,
	);
	return response.output;
}
