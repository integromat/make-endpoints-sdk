// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateATaskListInput = Record<string, never>;

export type CreateATaskListOutput = {
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
 * Create a task list
 * Creates a new task list.
 */
export async function createAtaskList(
	this: EndpointFunctionThis,
	payload: {
		input: CreateATaskListInput;
		connectionId: number;
	},
): Promise<CreateATaskListOutput> {
	const response = await this.endpointCaller<CreateATaskListOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'createATaskList',
		},
		payload,
	);
	return response.output;
}
