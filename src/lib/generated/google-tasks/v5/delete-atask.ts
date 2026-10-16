// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteATaskInput = {
	/**
	 * The ID of the task list. Use the "List task lists" endpoint to find it.
	 */
	tasklist: string;
	/**
	 * The ID of the task. Use the "List tasks" endpoint to find it.
	 */
	task: string;
};

export type DeleteATaskOutput = Record<string, never>;

/**
 * Delete a task
 * Deletes the specified task from the task list.
 */
export async function deleteAtask(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteATaskInput;
		connectionId: number;
	},
): Promise<DeleteATaskOutput> {
	const response = await this.endpointCaller<DeleteATaskOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'deleteATask',
		},
		payload,
	);
	return response.output;
}
