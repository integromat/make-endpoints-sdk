// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddContactToWorkflowInput = {
	/**
	 * The legacy numeric workflow ID. Use Get a workflow ID mapping if you only have a flow ID.
	 */
	workflowId: number;
	/**
	 * The email address of the contact to enroll.
	 */
	email: string;
};

export type AddContactToWorkflowOutput = Record<string, never>;

/**
 * Add a contact to a workflow
 * Enrolls a contact into a HubSpot workflow (automation flow).
 */
export async function addContactToWorkflow(
	this: EndpointFunctionThis,
	payload: {
		input: AddContactToWorkflowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddContactToWorkflowOutput> {
	const response = await this.endpointCaller<AddContactToWorkflowOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'addContactToWorkflow',
		},
		payload,
	);
	return response.output;
}
