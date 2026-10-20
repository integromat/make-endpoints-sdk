// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteATaskListInput = {
	/**
	 * The ID of the task list. Use the "List task lists" endpoint to find it.
	 */
	tasklist: string;
};

export type DeleteATaskListOutput = Record<string, never>;

/**
 * Delete a task list
 * Deletes the specified task list.
 */
export async function deleteAtaskList(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteATaskListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteATaskListOutput> {
	const response = await this.endpointCaller<DeleteATaskListOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'deleteATaskList',
		},
		payload,
	);
	return response.output;
}
