// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetATaskListInput = {
	/**
	 * The ID of the task list. Use the "List task lists" endpoint to find it.
	 */
	tasklist: string;
};

export type GetATaskListOutput = {
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
 * Get a task list
 * Returns the specified task list.
 */
export async function getAtaskList(
	this: EndpointFunctionThis,
	payload: {
		input: GetATaskListInput;
		connectionId: number;
	},
): Promise<GetATaskListOutput> {
	const response = await this.endpointCaller<GetATaskListOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'getATaskList',
		},
		payload,
	);
	return response.output;
}
