// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListTasksInput = {
	/**
	 * The ID of the task list. Use the "List task lists" endpoint to find it.
	 */
	tasklist: string;
	/**
	 * The lower bound for the task completion date to filter by. By default, tasks are not filtered by completion date.
	 */
	completedMin?: string;
	/**
	 * The upper bound for the task completion date to filter by. By default, tasks are not filtered by completion date.
	 */
	completedMax?: string;
	/**
	 * The lower bound for the task due date to filter by. By default, tasks are not filtered by due date.
	 */
	dueMin?: string;
	/**
	 * The upper bound for the task due date to filter by. By default, tasks are not filtered by due date.
	 */
	dueMax?: string;
	/**
	 * Whether completed tasks are returned. The default is `true`. Tasks completed in Google's own apps (such as the web UI or mobile apps) are returned only when "Show hidden tasks" is also `true`.
	 */
	showCompleted?: boolean;
	/**
	 * Whether deleted tasks are returned. The default is `false`.
	 */
	showDeleted?: boolean;
	/**
	 * Whether hidden tasks are returned. The default is `false`. Tasks completed in Google's own apps (such as the web UI or mobile apps) are hidden, so set this to `true` to return them.
	 */
	showHidden?: boolean;
	/**
	 * Whether tasks assigned to the current user from Google Docs or Google Chat spaces are returned. The default is `false`.
	 */
	showAssigned?: boolean;
	/**
	 * The lower bound for the last modification time of a task to filter by. By default, tasks are not filtered by modification time.
	 */
	updatedMin?: string;
	/**
	 * The maximum number of tasks returned on one page. The default is 20 and the maximum is 100.
	 */
	maxResults?: number;
	/**
	 * The token specifying which result page to return. Use `nextPageToken` from the previous response.
	 */
	pageToken?: string;
};

export type ListTasksOutput = {
	/**
	 * The type of the resource. This is always `tasks#tasks`.
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
	 * The tasks in the task list.
	 *
	 * Items: A task.
	 */
	items?: {
		/**
		 * The type of the resource. This is always `tasks#task`.
		 */
		kind?: string;
		/**
		 * The task identifier.
		 */
		id?: string;
		/**
		 * The ETag of the resource.
		 */
		etag?: string;
		/**
		 * The last modification time of the task.
		 */
		updated?: string;
		/**
		 * The URL pointing to this task.
		 */
		selfLink?: string;
		/**
		 * The parent task identifier. Omitted for top-level tasks.
		 */
		parent?: string;
		/**
		 * A string indicating the position of the task among its sibling tasks. Tasks are ordered lexicographically by this value.
		 */
		position?: string;
		/**
		 * The notes describing the task.
		 */
		notes?: string;
		/**
		 * The status of the task. Either `needsAction` or `completed`.
		 */
		status?: string;
		/**
		 * The scheduled date of the task. Only the date part is recorded.
		 */
		due?: string;
		/**
		 * The completion date of the task. Omitted if the task has not been completed.
		 */
		completed?: string;
		/**
		 * Whether the task has been deleted.
		 */
		deleted?: boolean;
		/**
		 * Whether the task is hidden. This is the case if the task was marked completed when the task list was last cleared.
		 */
		hidden?: boolean;
		/**
		 * The collection of links attached to the task.
		 *
		 * Items: A link attached to the task.
		 */
		links?: {
			/**
			 * The type of the link, for example `email`, `generic`, `chat_message` or `keep_note`.
			 */
			type?: string;
			/**
			 * The description of the link. May be empty.
			 */
			description?: string;
			/**
			 * The URL of the link.
			 */
			link?: string;
		}[];
		/**
		 * An absolute link to the task in the Google Tasks web UI.
		 */
		webViewLink?: string;
		/**
		 * Context information for tasks assigned to the current user from Google Docs or Google Chat spaces.
		 */
		assignmentInfo?: {
			/**
			 * An absolute link to the original task in the surface of assignment.
			 */
			linkToTask?: string;
			/**
			 * The type of surface the assigned task originates from: `DOCUMENT` or `SPACE`.
			 */
			surfaceType?: string;
			/**
			 * Information about the Drive file the task originates from.
			 */
			driveResourceInfo?: {
				/**
				 * The identifier of the file in the Drive API.
				 */
				driveFileId?: string;
				/**
				 * The resource key required to access files shared via a shared link. Not required for all files.
				 */
				resourceKey?: string;
			};
			/**
			 * Information about the Chat space the task originates from.
			 */
			spaceInfo?: {
				/**
				 * The Chat space the task originates from, in the format `spaces/{space}`.
				 */
				space?: string;
			};
		};
	}[];
};

/**
 * List tasks
 * Returns all tasks in the specified task list.
 */
export async function listTasks(
	this: EndpointFunctionThis,
	payload: {
		input: ListTasksInput;
		connectionId: number;
	},
): Promise<ListTasksOutput> {
	const response = await this.endpointCaller<ListTasksOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'listTasks',
		},
		payload,
	);
	return response.output;
}
