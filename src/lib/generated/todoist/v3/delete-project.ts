// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteProjectInput = {
	/**
	 * The ID of the project to delete.
	 */
	project_id: string;
};

export type DeleteProjectOutput = Record<string, never>;

/**
 * Delete a project
 * Deletes a project together with all of its sections and tasks.
 */
export async function deleteProject(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteProjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteProjectOutput> {
	const response = await this.endpointCaller<DeleteProjectOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'deleteProject',
		},
		payload,
	);
	return response.output;
}
