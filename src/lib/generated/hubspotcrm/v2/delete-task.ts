// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteTaskInput = {
	/**
	 * The record ID of the task to delete.
	 */
	id: string;
};

export type DeleteTaskOutput = Record<string, never>;

/**
 * Delete a task
 * Moves a task to the recycling bin.
 */
export async function deleteTask(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteTaskInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteTaskOutput> {
	const response = await this.endpointCaller<DeleteTaskOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteTask',
		},
		payload,
	);
	return response.output;
}
