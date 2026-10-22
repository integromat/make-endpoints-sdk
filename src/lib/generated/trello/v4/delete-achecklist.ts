// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAChecklistInput = {
	/**
	 * The ID of the checklist to delete.
	 */
	id: string;
};

export type DeleteAChecklistOutput = Record<string, never>;

/**
 * Delete a checklist
 * Deletes a checklist permanently.
 */
export async function deleteAchecklist(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAChecklistInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAChecklistOutput> {
	const response = await this.endpointCaller<DeleteAChecklistOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'deleteAChecklist',
		},
		payload,
	);
	return response.output;
}
