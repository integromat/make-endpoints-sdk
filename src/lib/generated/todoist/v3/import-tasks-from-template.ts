// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ImportTasksFromTemplateInput = {
	/**
	 * The ID of the existing project to import the template into. The project must not be frozen.
	 */
	project_id: string;
	/**
	 * The ID of the saved template to import.
	 */
	template_id: string;
	/**
	 * The locale used for localized template content, for example `en`. Defaults to `en`.
	 */
	locale?: string;
};

export type ImportTasksFromTemplateOutput = {
	/**
	 * The status of the import, `ok` on success.
	 */
	status?: string;
	/**
	 * The type of the imported template, for example `project`.
	 */
	template_type?: string;
	/**
	 * The projects affected by the import.
	 *
	 * Items: A project.
	 */
	projects?: {
		/**
		 * The ID of the project.
		 */
		id?: string;
		/**
		 * The name of the project.
		 */
		name?: string;
		/**
		 * The description of the project. Only used for workspace projects.
		 */
		description?: string;
		/**
		 * The ID of the workspace the project belongs to. Only used for workspace projects.
		 */
		workspace_id?: string;
		/**
		 * The ID of the folder the project is in.
		 */
		folder_id?: string;
		/**
		 * The ID of the parent project. `null` for root projects.
		 */
		parent_id?: string;
		/**
		 * The color of the project icon, for example `berry_red`.
		 */
		color?: string;
		/**
		 * The position of the project among the projects with the same parent.
		 */
		child_order?: number;
		/**
		 * The fractional-indexing order key of the project. Always `null` for workspace projects.
		 */
		order_key?: string;
		/**
		 * The position of the project in the default ordering of its workspace.
		 */
		default_order?: number;
		/**
		 * The fractional-indexing key of the project in the default ordering of its workspace. Only used for workspace projects.
		 */
		default_order_key?: string;
		/**
		 * The way tasks are rendered in the project: `list`, `board` or `calendar`.
		 */
		view_style?: string;
		/**
		 * Whether the sub-projects of the project are collapsed.
		 */
		is_collapsed?: boolean;
		/**
		 * Whether the project is shared.
		 */
		is_shared?: boolean;
		/**
		 * Whether the project is archived.
		 */
		is_archived?: boolean;
		/**
		 * Whether the project is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * Whether the project is a favorite.
		 */
		is_favorite?: boolean;
		/**
		 * Whether the project belongs to a canceled subscription and is frozen.
		 */
		is_frozen?: boolean;
		/**
		 * Whether tasks in the project can be assigned to users.
		 */
		can_assign_tasks?: boolean;
		/**
		 * Whether the current user can comment in the project.
		 */
		can_comment?: boolean;
		/**
		 * Whether the project is the Inbox. Only sent for the Inbox project.
		 */
		inbox_project?: boolean;
		/**
		 * The ID of the user who created the project.
		 */
		creator_uid?: string;
		/**
		 * The role of the current user in the project: `CREATOR`, `ADMIN`, `READ_WRITE`, `EDIT_ONLY` or `COMPLETE_ONLY`.
		 */
		role?: string;
		/**
		 * Whether the project is accessible publicly.
		 */
		public_access?: boolean;
		/**
		 * The public key of the project, used to access public projects.
		 */
		public_key?: string;
		/**
		 * The status of the project: `PLANNED`, `IN_PROGRESS`, `PAUSED`, `COMPLETED` or `CANCELED`. Only used for workspace projects.
		 */
		status?: string;
		/**
		 * Whether the project is invite-only. Only used for workspace projects.
		 */
		is_invite_only?: boolean;
		/**
		 * Whether anyone with the link can join the project. Only used for workspace projects.
		 */
		is_link_sharing_enabled?: boolean;
		/**
		 * The default role of new collaborators. Only used for workspace projects.
		 */
		collaborator_role_default?: string;
		/**
		 * Whether default collaborators are still being added to the project in the background. Only used for workspace projects.
		 */
		is_pending_default_collaborator_invites?: boolean;
		/**
		 * Whether Project Insights is enabled for the project. Only used for workspace projects.
		 */
		is_project_insights_enabled?: boolean;
		/**
		 * The access configuration of the project. Only used for workspace projects.
		 */
		access?: {
			/**
			 * The visibility of the project: `restricted`, `team` or `public`.
			 */
			visibility?: string;
			/**
			 * The configuration of the project access.
			 */
			configuration?: {
				/**
				 * Whether collaborator details are hidden. Only for public projects.
				 */
				hide_collaborator_details?: boolean;
				/**
				 * Whether duplicating the project is disabled. Only for public projects.
				 */
				disable_duplication?: boolean;
			};
		};
		/**
		 * The date and time when the project was created.
		 */
		created_at?: string;
		/**
		 * The date and time when the project was last updated.
		 */
		updated_at?: string;
	}[];
	/**
	 * The sections created by the import.
	 *
	 * Items: A section.
	 */
	sections?: {
		/**
		 * The ID of the section.
		 */
		id?: string;
		/**
		 * The ID of the owner of the section.
		 */
		user_id?: string;
		/**
		 * The ID of the project the section belongs to.
		 */
		project_id?: string;
		/**
		 * The name of the section.
		 */
		name?: string;
		/**
		 * The description of the section.
		 */
		description?: string;
		/**
		 * The position of the section among the sections of the project.
		 */
		section_order?: number;
		/**
		 * The fractional-indexing order key of the section.
		 */
		order_key?: string;
		/**
		 * Whether the section is collapsed.
		 */
		is_collapsed?: boolean;
		/**
		 * Whether the section is archived.
		 */
		is_archived?: boolean;
		/**
		 * Whether the section is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * The date and time when the section was created.
		 */
		added_at?: string;
		/**
		 * The date and time when the section was last updated.
		 */
		updated_at?: string;
		/**
		 * The date and time when the section was archived.
		 */
		archived_at?: string;
	}[];
	/**
	 * The tasks created by the import.
	 *
	 * Items: A task.
	 */
	tasks?: {
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
	}[];
	/**
	 * The task comments created by the import.
	 *
	 * Items: A task comment.
	 */
	comments?: {
		/**
		 * The ID of the comment.
		 */
		id?: string;
		/**
		 * The ID of the user who posted the comment.
		 */
		posted_uid?: string;
		/**
		 * The ID of the task the comment belongs to.
		 */
		item_id?: string;
		/**
		 * The content of the comment. May contain markdown-formatted text and hyperlinks.
		 */
		content?: string;
		/**
		 * The file attached to the comment. `null` if there is none.
		 */
		file_attachment?: {
			/**
			 * The name of the file.
			 */
			file_name?: string;
			/**
			 * The size of the file in bytes.
			 */
			file_size?: number;
			/**
			 * The MIME type of the file, for example `image/png`.
			 */
			file_type?: string;
			/**
			 * The URL where the file is located.
			 */
			file_url?: string;
			/**
			 * The upload state of the file, for example `pending` or `completed`.
			 */
			upload_state?: string;
			/**
			 * The type of the attached resource, for example `file`.
			 */
			resource_type?: string;
			/**
			 * The URL of the image preview, if the file is an image.
			 */
			image?: string;
			/**
			 * The width of the image in pixels.
			 */
			image_width?: number;
			/**
			 * The height of the image in pixels.
			 */
			image_height?: number;
			/**
			 * The large thumbnail as a list of the URL, width and height.
			 */
			tn_l?: Record<string, JSONValue>;
			/**
			 * The medium thumbnail as a list of the URL, width and height.
			 */
			tn_m?: Record<string, JSONValue>;
			/**
			 * The small thumbnail as a list of the URL, width and height.
			 */
			tn_s?: Record<string, JSONValue>;
			/**
			 * The duration of the audio file in seconds.
			 */
			file_duration?: number;
		};
		/**
		 * The IDs of the users to notify about the comment.
		 *
		 * Items: The ID of a user to notify.
		 */
		uids_to_notify?: string[];
		/**
		 * Whether the comment is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * The date and time when the comment was posted.
		 */
		posted_at?: string;
		/**
		 * The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.
		 */
		reactions?: Record<string, JSONValue>;
	}[];
	/**
	 * The project comments created by the import.
	 *
	 * Items: A project comment.
	 */
	project_notes?: {
		/**
		 * The ID of the comment.
		 */
		id?: string;
		/**
		 * The ID of the user who posted the comment.
		 */
		posted_uid?: string;
		/**
		 * The ID of the project the comment belongs to.
		 */
		project_id?: string;
		/**
		 * The content of the comment. May contain markdown-formatted text and hyperlinks.
		 */
		content?: string;
		/**
		 * The file attached to the comment. `null` if there is none.
		 */
		file_attachment?: {
			/**
			 * The name of the file.
			 */
			file_name?: string;
			/**
			 * The size of the file in bytes.
			 */
			file_size?: number;
			/**
			 * The MIME type of the file, for example `image/png`.
			 */
			file_type?: string;
			/**
			 * The URL where the file is located.
			 */
			file_url?: string;
			/**
			 * The upload state of the file, for example `pending` or `completed`.
			 */
			upload_state?: string;
			/**
			 * The type of the attached resource, for example `file`.
			 */
			resource_type?: string;
			/**
			 * The URL of the image preview, if the file is an image.
			 */
			image?: string;
			/**
			 * The width of the image in pixels.
			 */
			image_width?: number;
			/**
			 * The height of the image in pixels.
			 */
			image_height?: number;
			/**
			 * The large thumbnail as a list of the URL, width and height.
			 */
			tn_l?: Record<string, JSONValue>;
			/**
			 * The medium thumbnail as a list of the URL, width and height.
			 */
			tn_m?: Record<string, JSONValue>;
			/**
			 * The small thumbnail as a list of the URL, width and height.
			 */
			tn_s?: Record<string, JSONValue>;
			/**
			 * The duration of the audio file in seconds.
			 */
			file_duration?: number;
		};
		/**
		 * The IDs of the users to notify about the comment.
		 *
		 * Items: The ID of a user to notify.
		 */
		uids_to_notify?: string[];
		/**
		 * Whether the comment is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * The date and time when the comment was posted.
		 */
		posted_at?: string;
		/**
		 * The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.
		 */
		reactions?: Record<string, JSONValue>;
	}[];
	/**
	 * The reminders created by the import.
	 *
	 * Items: A reminder.
	 */
	reminders?: {
		/**
		 * The ID of the reminder.
		 */
		id?: string;
		/**
		 * The ID of the task the reminder belongs to.
		 */
		item_id?: string;
		/**
		 * The ID of the user to notify.
		 */
		notify_uid?: string;
		/**
		 * The type of the reminder, for example `relative`.
		 */
		type?: string;
		/**
		 * The number of minutes before the due date when the reminder fires. Used by relative reminders.
		 */
		minute_offset?: number;
		/**
		 * Whether the reminder is urgent.
		 */
		is_urgent?: boolean;
		/**
		 * Whether the reminder is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * The due date of the reminder.
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
	}[];
	/**
	 * The default view options of the imported projects.
	 *
	 * Items: The default view options of one project.
	 */
	project_view_options_defaults?: {
		/**
		 * The ID of the project.
		 */
		project_id?: string;
		/**
		 * The view mode of the project, for example `LIST`.
		 */
		view_mode?: string;
		/**
		 * The calendar view settings of the project.
		 */
		calendar_settings?: {
			/**
			 * The calendar layout, for example `WEEK`.
			 */
			layout?: string;
			/**
			 * The number of days shown in the calendar.
			 */
			visible_day_count?: number;
			/**
			 * What the calendar colors are based on, for example `PRIORITY`.
			 */
			color?: string;
		};
	}[];
};

/**
 * Import tasks from template
 * Imports a saved template into an existing project.
 */
export async function importTasksFromTemplate(
	this: EndpointFunctionThis,
	payload: {
		input: ImportTasksFromTemplateInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ImportTasksFromTemplateOutput> {
	const response = await this.endpointCaller<ImportTasksFromTemplateOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'importTasksFromTemplate',
		},
		payload,
	);
	return response.output;
}
