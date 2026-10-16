// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetTaskInput = {
	/**
	 * The ID of the task to return.
	 */
	task_id: string;
	/**
	 * The public key of a public project. Needed only to access a public project you are not a collaborator of.
	 */
	public_key?: string;
};

export type GetTaskOutput = {
	/**
	 * The ID of the task.
	 */
	id?: string;
	/**
	 * The ID of the owner of the task.
	 */
	user_id?: string;
	/**
	 * The ID of the parent project.
	 */
	project_id?: string;
	/**
	 * The ID of the parent section. `null` for tasks that do not belong to a section.
	 */
	section_id?: string;
	/**
	 * The ID of the parent task. `null` for root tasks.
	 */
	parent_id?: string;
	/**
	 * The text of the task. May contain markdown-formatted text and hyperlinks.
	 */
	content?: string;
	/**
	 * The description of the task. May contain markdown-formatted text and hyperlinks.
	 */
	description?: string;
	/**
	 * The due date of the task. `null` if the task has no due date.
	 */
	due?: {
		/**
		 * The due date, either a full-day date (`YYYY-MM-DD`), a floating date with time (`YYYY-MM-DDTHH:MM:SS`) or a date with time in UTC (`YYYY-MM-DDTHH:MM:SSZ`).
		 */
		date?: string;
		/**
		 * The timezone name for due dates with a fixed timezone, for example `Asia/Jakarta`. `null` for full-day and floating due dates.
		 */
		timezone?: string;
		/**
		 * Whether the due date is recurring.
		 */
		is_recurring?: boolean;
		/**
		 * The human-readable due date string, for example `tomorrow at 12`.
		 */
		string?: string;
		/**
		 * The language code of the due date string, for example `en`.
		 */
		lang?: string;
	};
	/**
	 * The deadline of the task. `null` if the task has no deadline.
	 */
	deadline?: {
		/**
		 * The deadline in the `YYYY-MM-DD` format.
		 */
		date?: string;
		/**
		 * The language code of the deadline. Only returned in the output.
		 */
		lang?: string;
	};
	/**
	 * The duration of the task. `null` if the task has no duration.
	 */
	duration?: {
		/**
		 * The amount of time the task takes, a positive integer.
		 */
		amount?: number;
		/**
		 * The unit of the duration, `minute` or `day`.
		 */
		unit?: string;
	};
	/**
	 * The priority of the task, from `1` (normal) to `4` (very urgent). Todoist clients show `4` as p1.
	 */
	priority?: number;
	/**
	 * The names of the labels of the task. They can be personal or shared labels.
	 *
	 * Items: The name of a label.
	 */
	labels?: string[];
	/**
	 * The position of the task among the tasks with the same parent.
	 */
	child_order?: number;
	/**
	 * The fractional-indexing order key of the task. Tasks sort by comparing keys lexicographically among siblings.
	 */
	order_key?: string;
	/**
	 * The position of the task in the Today or Next 7 days view.
	 */
	day_order?: number;
	/**
	 * Whether the sub-tasks of the task are collapsed.
	 */
	is_collapsed?: boolean;
	/**
	 * The ID of the user who created the task. Relevant for shared projects only.
	 */
	added_by_uid?: string;
	/**
	 * The ID of the user who assigned the task. Relevant for shared projects only.
	 */
	assigned_by_uid?: string;
	/**
	 * The ID of the user responsible for the task. Relevant for shared projects only.
	 */
	responsible_uid?: string;
	/**
	 * Whether the task is completed.
	 */
	checked?: boolean;
	/**
	 * Whether the task is deleted.
	 */
	is_deleted?: boolean;
	/**
	 * The date and time when the task was created.
	 */
	added_at?: string;
	/**
	 * The date and time when the task was last updated.
	 */
	updated_at?: string;
	/**
	 * The date and time when the task was completed. `null` if the task is not completed.
	 */
	completed_at?: string;
	/**
	 * The ID of the user who completed the task.
	 */
	completed_by_uid?: string;
	/**
	 * The number of comments on the task.
	 */
	note_count?: number;
	/**
	 * How many times the task has been completed. Relevant for recurring tasks.
	 */
	completed_count?: number;
	/**
	 * How many times the task has been postponed.
	 */
	postponed_count?: number;
};

/**
 * Get a task
 * Returns an active (not completed) task by its ID.
 */
export async function getTask(
	this: EndpointFunctionThis,
	payload: {
		input: GetTaskInput;
		connectionId: number;
	},
): Promise<GetTaskOutput> {
	const response = await this.endpointCaller<GetTaskOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'getTask',
		},
		payload,
	);
	return response.output;
}
