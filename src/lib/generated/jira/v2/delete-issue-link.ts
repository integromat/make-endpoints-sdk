// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteIssueLinkInput = {
	/**
	 * The ID of the issue link to delete.
	 */
	linkId: string;
};

export type DeleteIssueLinkOutput = Record<string, never>;

/**
 * Delete issue link
 * Deletes an issue link.
 */
export async function deleteIssueLink(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteIssueLinkInput;
		connectionId: number;
	},
): Promise<DeleteIssueLinkOutput> {
	const response = await this.endpointCaller<DeleteIssueLinkOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteIssueLink',
		},
		payload,
	);
	return response.output;
}
