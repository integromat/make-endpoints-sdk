// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteIssueInput = {
	/**
	 * Identifier of the issue to delete. Accepts a UUID or an issue key such as `ENG-123`.
	 */
	issueId: string;
};

export type DeleteIssueOutput = {
	/**
	 * Whether Linear deleted the issue.
	 */
	success?: boolean;
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
			appName: 'linear',
			appVersion: 1,
			endpointName: 'deleteIssue',
		},
		payload,
	);
	return response.output;
}
