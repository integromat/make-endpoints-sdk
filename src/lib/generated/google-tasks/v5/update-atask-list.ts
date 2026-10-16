// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateATaskListInput = {
	/**
	 * The ID of the task list. Use the "List task lists" endpoint to find it.
	 */
	tasklist: string;
};

export type UpdateATaskListOutput = {
	/**
	 * The type of the resource. This is always `tasks#taskList`.
	 */
	kind?: string;
	/**
	 * The task list identifier.
	 */
	id?: string;
	/**
	 * The ETag of the resource.
	 */
	etag?: string;
	/**
	 * The last modification time of the task list.
	 */
	updated?: string;
	/**
	 * The URL pointing to this task list.
	 */
	selfLink?: string;
};

/**
 * Update a task list
 * Updates the specified task list using patch semantics.
 */
export async function updateAtaskList(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateATaskListInput;
		connectionId: number;
	},
): Promise<UpdateATaskListOutput> {
	const response = await this.endpointCaller<UpdateATaskListOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'updateATaskList',
		},
		payload,
	);
	return response.output;
}
