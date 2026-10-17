// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListTaskListsInput = {
	/**
	 * The maximum number of task lists returned on one page. The default and the maximum are both 1000.
	 */
	maxResults?: number;
	/**
	 * The token specifying which result page to return. Use `nextPageToken` from the previous response.
	 */
	pageToken?: string;
};

export type ListTaskListsOutput = {
	/**
	 * The type of the resource. This is always `tasks#taskLists`.
	 */
	kind?: string;
	/**
	 * The ETag of the resource.
	 */
	etag?: string;
	/**
	 * The token used to access the next page of results. Omitted on the last page.
	 */
	nextPageToken?: string;
	/**
	 * The task lists of the authenticated user.
	 *
	 * Items: A task list.
	 */
	items?: {
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
	}[];
};

/**
 * List task lists
 * Returns all of the authenticated user's task lists.
 */
export async function listTaskLists(
	this: EndpointFunctionThis,
	payload: {
		input: ListTaskListsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListTaskListsOutput> {
	const response = await this.endpointCaller<ListTaskListsOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'listTaskLists',
		},
		payload,
	);
	return response.output;
}
