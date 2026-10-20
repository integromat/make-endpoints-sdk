// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateATaskInput = {
	/**
	 * The ID of the task list. Use the "List task lists" endpoint to find it.
	 */
	tasklist: string;
	/**
	 * The ID of the parent task. Provide it to create a subtask; leave it empty to create a top-level task. An assigned task cannot be a parent task.
	 */
	parent?: string;
	/**
	 * The ID of the sibling task the new task is placed after. Leave it empty to place the new task first among its siblings.
	 */
	previous?: string;
	/**
	 * Notes describing the task. Maximum length is 8192 characters.
	 */
	notes?: string;
	/**
	 * The scheduled date of the task. Only the date part is used; Google Tasks discards the time portion.
	 */
	due?: string;
	/**
	 * The status of the new task. Leave it empty to create the task as `needsAction`.
	 */
	status?: '' | 'needsAction' | 'completed';
	/**
	 * The completion date of the task. It is normally set by Google when the status becomes `completed`.
	 */
	completed?: string;
	/**
	 * Whether the task is deleted. Set to `true` to delete the task, or `false` to restore a deleted task. Read-only for tasks assigned from Google Docs or Google Chat spaces.
	 */
	deleted?: boolean;
};

export type CreateATaskOutput = {
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
};

/**
 * Create a task
 * Creates a new task or subtask in the specified task list.
 */
export async function createAtask(
	this: EndpointFunctionThis,
	payload: {
		input: CreateATaskInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateATaskOutput> {
	const response = await this.endpointCaller<CreateATaskOutput>(
		{
			appName: 'google-tasks',
			appVersion: 5,
			endpointName: 'createATask',
		},
		payload,
	);
	return response.output;
}
