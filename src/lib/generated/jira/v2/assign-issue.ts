// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AssignIssueInput = {
	/**
	 * The ID or key of the issue to assign, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * The account ID of the user to assign the issue to. Use `-1` to set the default (automatic) assignee for the project. Leave empty to unassign the issue.
	 */
	accountId?: string;
};

export type AssignIssueOutput = Record<string, never>;

/**
 * Assign issue
 * Assigns or unassigns an issue.
 */
export async function assignIssue(
	this: EndpointFunctionThis,
	payload: {
		input: AssignIssueInput;
		connectionId: number;
	},
): Promise<AssignIssueOutput> {
	const response = await this.endpointCaller<AssignIssueOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'assignIssue',
		},
		payload,
	);
	return response.output;
}
