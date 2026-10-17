// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveContactFromWorkflowInput = {
	/**
	 * Legacy numeric ID of the workflow. Use Get a workflow ID mapping if you only have a flow ID.
	 */
	workflowId: number;
	/**
	 * Email address of the single contact to unenroll. The request layer URL-encodes it in the path.
	 */
	email: string;
};

export type RemoveContactFromWorkflowOutput = Record<string, never>;

/**
 * Remove a contact from a workflow
 * Unenrolls one contact from one HubSpot workflow using the legacy Workflows API.
 */
export async function removeContactFromWorkflow(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveContactFromWorkflowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RemoveContactFromWorkflowOutput> {
	const response = await this.endpointCaller<RemoveContactFromWorkflowOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'removeContactFromWorkflow',
		},
		payload,
	);
	return response.output;
}
