// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SyncInput = {
	/**
	 * Required to read resources. Use `*` to get all active resource data, or the `sync_token` returned by a previous request to get only the changes since then.
	 */
	sync_token?: string;
	/**
	 * Required to read resources. The types of resources to return. Use `all` to return every type.
	 */
	resource_types?:
		| ''
		| 'all'
		| 'labels'
		| 'projects'
		| 'items'
		| 'notes'
		| 'sections'
		| 'filters'
		| 'reminders'
		| 'reminders_location'
		| 'locations'
		| 'user'
		| 'live_notifications'
		| 'collaborators'
		| 'user_settings'
		| 'notification_settings'
		| 'user_plan_limits'
		| 'completed_info'
		| 'stats'
		| 'workspaces'
		| 'workspace_users'
		| 'workspace_filters'
		| 'view_options'
		| 'project_view_options_defaults'
		| 'role_actions'
		| 'user_item_orders';
	/**
	 * Required to write changes. The commands to run, processed in the given order. Each command creates, changes or deletes one resource.
	 *
	 * Items: A command to run.
	 */
	commands?: {
		/**
		 * The type of the command, for example `item_add` creates a task and `project_update` updates a project.
		 */
		type:
			| 'filter_add'
			| 'filter_delete'
			| 'filter_update'
			| 'filter_update_orders'
			| 'folder_add'
			| 'folder_update'
			| 'item_add'
			| 'item_close'
			| 'item_complete'
			| 'item_delete'
			| 'item_move'
			| 'item_reorder'
			| 'item_uncomplete'
			| 'item_update'
			| 'item_update_date_complete'
			| 'item_update_day_orders'
			| 'label_add'
			| 'label_delete'
			| 'label_delete_occurrences'
			| 'label_rename'
			| 'label_update'
			| 'label_update_orders'
			| 'live_notifications_mark_read'
			| 'live_notifications_mark_read_all'
			| 'live_notifications_mark_unread'
			| 'live_notifications_set_last_read'
			| 'note_add'
			| 'note_delete'
			| 'note_update'
			| 'project_add'
			| 'project_archive'
			| 'project_change_role'
			| 'project_delete'
			| 'project_leave'
			| 'project_move'
			| 'project_move_to_personal'
			| 'project_move_to_workspace'
			| 'project_reorder'
			| 'project_unarchive'
			| 'project_update'
			| 'project_view_options_defaults_set'
			| 'reminder_add'
			| 'reminder_delete'
			| 'reminder_update'
			| 'section_add'
			| 'section_archive'
			| 'section_delete'
			| 'section_move'
			| 'section_reorder'
			| 'section_unarchive'
			| 'section_update'
			| 'share_project'
			| 'accept_invitation'
			| 'reject_invitation'
			| 'delete_invitation'
			| 'delete_collaborator'
			| 'clear_locations'
			| 'update_goals'
			| 'user_item_order_update'
			| 'user_settings_update'
			| 'user_update'
			| 'view_options_delete'
			| 'view_options_set'
			| 'workspace_add'
			| 'workspace_delete'
			| 'workspace_delete_user'
			| 'workspace_filter_add'
			| 'workspace_filter_delete'
			| 'workspace_filter_update'
			| 'workspace_filter_update_orders'
			| 'workspace_invite'
			| 'workspace_leave'
			| 'workspace_resend_invite'
			| 'workspace_set_default_project_ordering'
			| 'workspace_update'
			| 'workspace_update_user'
			| 'workspace_update_user_sidebar_preference';
		/**
		 * A unique ID of the command, for example a UUID v4. The result of the command is returned under this ID in `sync_status`. A command with the same UUID as an already executed command is not executed again.
		 */
		uuid: string;
		/**
		 * A temporary ID for the resource created by the command, used only for commands that create resources such as `item_add`. Later commands in the same request can use it instead of the real ID, and `temp_id_mapping` maps it to the real ID.
		 */
		temp_id?: string;
		/**
		 * The arguments of the command as a JSON object. They depend on the command type, see the [Todoist Sync API reference](https://developer.todoist.com/api/v1/).
		 */
		args?: Record<string, JSONValue>;
	}[];
};

export type SyncOutput = {
	/**
	 * The token to pass in the next request to get only the changes since this request.
	 */
	sync_token?: string;
	/**
	 * Whether the response contains all data (full sync) or only the changes since the previous sync.
	 */
	full_sync?: boolean;
	/**
	 * For full syncs, the time when the data was generated. For big accounts, the data may be returned with a delay.
	 */
	full_sync_date_utc?: string;
	/**
	 * The result of each command. Each key is the UUID of a command and its value is `ok`. If a command fails, the endpoint returns an error instead of a response.
	 */
	sync_status?: Record<string, JSONValue>;
	/**
	 * Maps the temporary IDs of created resources to their real IDs.
	 */
	temp_id_mapping?: Record<string, JSONValue>;
	/**
	 * The current user.
	 */
	user?: {
		/**
		 * The ID of the user.
		 */
		id?: string;
		/**
		 * The email of the user.
		 */
		email?: string;
		/**
		 * The full name of the user.
		 */
		full_name?: string;
		/**
		 * The API token of the user.
		 */
		token?: string;
		/**
		 * The language of the user, for example `en`.
		 */
		lang?: string;
		/**
		 * The language used for date recognition instead of the user language. `null` if the user language is used.
		 */
		dateist_lang?: string;
		/**
		 * The date when the user joined Todoist.
		 */
		joined_at?: string;
		/**
		 * The ID of the Inbox project.
		 */
		inbox_project_id?: string;
		/**
		 * The ID of the business account of the user.
		 */
		business_account_id?: string;
		/**
		 * The ID of the avatar of the user.
		 */
		image_id?: string;
		/**
		 * The URL of the 195x195 avatar.
		 */
		avatar_big?: string;
		/**
		 * The URL of the 60x60 avatar.
		 */
		avatar_medium?: string;
		/**
		 * The URL of the 640x640 avatar.
		 */
		avatar_s640?: string;
		/**
		 * The URL of the 35x35 avatar.
		 */
		avatar_small?: string;
		/**
		 * Whether the user has a Todoist Pro subscription.
		 */
		is_premium?: boolean;
		/**
		 * Why the user is premium: `not_premium`, `current_personal_plan`, `legacy_personal_plan` or `teams_business_member`.
		 */
		premium_status?: string;
		/**
		 * The date when the Todoist Pro subscription ends. `null` if the user is not a Pro user.
		 */
		premium_until?: string;
		/**
		 * Whether the user has a password set.
		 */
		has_password?: boolean;
		/**
		 * Whether multi-factor authentication is enabled.
		 */
		mfa_enabled?: boolean;
		/**
		 * Whether the email of the user is verified: `unverified`, `verified`, `blocked` or `legacy`.
		 */
		verification_status?: string;
		/**
		 * Whether the user is activated.
		 */
		activated_user?: boolean;
		/**
		 * Whether celebrations are enabled.
		 */
		is_celebrations_enabled?: boolean;
		/**
		 * The Karma score of the user.
		 */
		karma?: number;
		/**
		 * The trend of the Karma score, for example `up`.
		 */
		karma_trend?: string;
		/**
		 * The daily goal of completed tasks for Karma.
		 */
		daily_goal?: number;
		/**
		 * The weekly goal of completed tasks for Karma.
		 */
		weekly_goal?: number;
		/**
		 * The days off of the user, from `1` (Monday) to `7` (Sunday).
		 *
		 * Items: A day off.
		 */
		days_off?: number[];
		/**
		 * The default time in minutes of the automatic reminders set when a due date is specified.
		 */
		auto_reminder?: number;
		/**
		 * The date format: `0` for DD-MM-YYYY, `1` for MM-DD-YYYY.
		 */
		date_format?: number;
		/**
		 * The time format: `0` for 24 hours, `1` for 12 hours.
		 */
		time_format?: number;
		/**
		 * The first day of the week, from `1` (Monday) to `7` (Sunday).
		 */
		start_day?: number;
		/**
		 * The day tasks are postponed to when scheduled for next week, from `1` (Monday) to `7` (Sunday).
		 */
		next_week?: number;
		/**
		 * The day tasks are scheduled for when scheduled for the weekend, from `1` (Monday) to `7` (Sunday).
		 */
		weekend_start_day?: number;
		/**
		 * How projects are sorted: `0` for oldest dates first, `1` for oldest dates last.
		 */
		sort_order?: number;
		/**
		 * The default view of the user, for example `inbox`, `today` or `project?id=1234`.
		 */
		start_page?: string;
		/**
		 * The selected theme, a number from `0` to `10`.
		 */
		theme_id?: string;
		/**
		 * The maximum number of collaborators the user can share projects with.
		 */
		share_limit?: number;
		/**
		 * An opaque ID used internally to handle features of the user.
		 */
		feature_identifier?: string;
		/**
		 * The special features of the user, used internally.
		 */
		features?: Record<string, JSONValue>;
		/**
		 * The workspace the user can join by domain. `null` if there is none.
		 */
		joinable_workspace?: Record<string, JSONValue>;
		/**
		 * The device that receives urgent reminder alarms. `null` if none is configured.
		 */
		urgent_reminder_device?: {
			/**
			 * The platform of the device: `ios` or `android`.
			 */
			device_platform?: string;
			/**
			 * The ID of the device.
			 */
			device_id?: string;
			/**
			 * The push notification token of the device.
			 */
			device_token?: string;
			/**
			 * The name of the device.
			 */
			device_name?: string;
		};
		/**
		 * The timezone of the user.
		 */
		tz_info?: {
			/**
			 * The name of the timezone, for example `Europe/Prague`.
			 */
			timezone?: string;
			/**
			 * The difference from GMT as text, for example `+02:00`.
			 */
			gmt_string?: string;
			/**
			 * The hours of the difference from GMT.
			 */
			hours?: number;
			/**
			 * The minutes of the difference from GMT.
			 */
			minutes?: number;
			/**
			 * Whether daylight saving time applies: `1` if yes, `0` if no.
			 */
			is_dst?: number;
		};
	};
	/**
	 * The projects.
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
	 * The tasks.
	 *
	 * Items: A task.
	 */
	items?: {
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
	 * The task comments.
	 *
	 * Items: A task comment.
	 */
	notes?: {
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
	 * The project comments.
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
	 * The sections.
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
	 * The personal labels.
	 *
	 * Items: A personal label.
	 */
	labels?: {
		/**
		 * The ID of the label.
		 */
		id?: string;
		/**
		 * The name of the label.
		 */
		name?: string;
		/**
		 * The color of the label icon, for example `berry_red`.
		 */
		color?: string;
		/**
		 * The position of the label in the label list.
		 */
		item_order?: number;
		/**
		 * The fractional-indexing order key of the label.
		 */
		order_key?: string;
		/**
		 * Whether the label is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * Whether the label is a favorite.
		 */
		is_favorite?: boolean;
	}[];
	/**
	 * The filters.
	 *
	 * Items: A filter.
	 */
	filters?: {
		/**
		 * The ID of the filter.
		 */
		id?: string;
		/**
		 * The name of the filter.
		 */
		name?: string;
		/**
		 * The query of the filter.
		 */
		query?: string;
		/**
		 * The description of the filter as markdown. Empty if the filter has none.
		 */
		description?: string;
		/**
		 * The color of the filter icon, for example `berry_red`.
		 */
		color?: string;
		/**
		 * The position of the filter in the filter list.
		 */
		item_order?: number;
		/**
		 * The fractional-indexing order key of the filter.
		 */
		order_key?: string;
		/**
		 * Whether the filter is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * Whether the filter is a favorite.
		 */
		is_favorite?: boolean;
		/**
		 * Whether the filter belongs to a canceled subscription and cannot be changed.
		 */
		is_frozen?: boolean;
	}[];
	/**
	 * The filters of the workspaces of the user.
	 *
	 * Items: A workspace filter.
	 */
	workspace_filters?: {
		/**
		 * The ID of the workspace filter.
		 */
		id?: string;
		/**
		 * The ID of the workspace the filter belongs to.
		 */
		workspace_id?: string;
		/**
		 * The name of the workspace filter.
		 */
		name?: string;
		/**
		 * The query of the workspace filter.
		 */
		query?: string;
		/**
		 * The description of the filter as markdown. Empty if the filter has none.
		 */
		description?: string;
		/**
		 * The color of the filter icon, for example `berry_red`.
		 */
		color?: string;
		/**
		 * The position of the filter in the filter list.
		 */
		item_order?: number;
		/**
		 * The fractional-indexing order key of the filter. May be `null` for workspaces that are not migrated yet.
		 */
		order_key?: string;
		/**
		 * Whether the filter is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * Whether the filter is a favorite of the user.
		 */
		is_favorite?: boolean;
		/**
		 * Whether the filter was created outside the plan limits and cannot be changed.
		 */
		is_frozen?: boolean;
		/**
		 * The ID of the user who created the filter.
		 */
		creator_uid?: string;
		/**
		 * The ID of the user who last updated the filter.
		 */
		updater_uid?: string;
		/**
		 * The date and time when the filter was created.
		 */
		created_at?: string;
		/**
		 * The date and time when the filter was last updated.
		 */
		updated_at?: string;
	}[];
	/**
	 * The reminders.
	 *
	 * Items: A reminder.
	 */
	reminders?: {
		/**
		 * The ID of the reminder.
		 */
		id?: string;
		/**
		 * The ID of the user who is notified about the reminder.
		 */
		notify_uid?: string;
		/**
		 * The ID of the task the reminder is for.
		 */
		item_id?: string;
		/**
		 * The type of the reminder: `relative` (minutes before the due date of the task), `absolute` (a specific date and time) or `location`.
		 */
		type?: string;
		/**
		 * The due date of the reminder. Only dates with time are supported. Not returned for location reminders.
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
		 * The number of minutes before the due date of the task when the reminder is triggered.
		 */
		minute_offset?: number;
		/**
		 * The name of the location. Only for location reminders.
		 */
		name?: string;
		/**
		 * The latitude of the location. Only for location reminders.
		 */
		loc_lat?: string;
		/**
		 * The longitude of the location. Only for location reminders.
		 */
		loc_long?: string;
		/**
		 * What triggers the reminder: `on_enter` or `on_leave`. Only for location reminders.
		 */
		loc_trigger?: string;
		/**
		 * The radius around the location in meters. Only for location reminders.
		 */
		radius?: number;
		/**
		 * Whether the reminder is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * Whether the reminder is urgent and triggers an alarm on the urgent reminder device of the user. Only for time-based reminders.
		 */
		is_urgent?: boolean;
	}[];
	/**
	 * The locations used by location reminders. Each location is a list of the name, latitude and longitude.
	 */
	locations?: string[][];
	/**
	 * The users who share at least one project with the current user.
	 *
	 * Items: A collaborator.
	 */
	collaborators?: {
		/**
		 * The ID of the collaborator.
		 */
		id?: string;
		/**
		 * The email of the collaborator.
		 */
		email?: string;
		/**
		 * The full name of the collaborator.
		 */
		full_name?: string;
		/**
		 * The timezone of the collaborator.
		 */
		timezone?: string;
		/**
		 * The ID of the avatar of the collaborator. `null` if the collaborator has no avatar.
		 */
		image_id?: string;
	}[];
	/**
	 * The state of each collaborator in each shared project.
	 *
	 * Items: The state of a collaborator in a project.
	 */
	collaborator_states?: {
		/**
		 * The ID of the shared project.
		 */
		project_id?: string;
		/**
		 * The ID of the collaborator.
		 */
		user_id?: string;
		/**
		 * The state of the collaborator in the project: `active` or `invited`.
		 */
		state?: string;
		/**
		 * Whether the collaborator has left the shared project.
		 */
		is_deleted?: boolean;
		/**
		 * The role of the collaborator in the project, for example `CREATOR`, `ADMIN` or `READ_WRITE`. Only available for teams.
		 */
		role?: string;
		/**
		 * The role of the collaborator in the workspace of the project, for example `ADMIN` or `MEMBER`. Only returned for workspace projects.
		 */
		workspace_role?: string;
	}[];
	/**
	 * The number of completed tasks within active projects, sections and parent tasks.
	 *
	 * Items: The number of completed tasks for one project, section or parent task.
	 */
	completed_info?: {
		/**
		 * The ID of the project. Returned for projects.
		 */
		project_id?: string;
		/**
		 * The ID of the section. Returned for sections.
		 */
		section_id?: string;
		/**
		 * The ID of the parent task. Returned for parent tasks.
		 */
		item_id?: string;
		/**
		 * The number of completed tasks.
		 */
		completed_items?: number;
		/**
		 * The number of archived sections. Returned for projects.
		 */
		archived_sections?: number;
	}[];
	/**
	 * The live notifications. Besides the common fields, each notification has extra fields that depend on its `notification_type`.
	 *
	 * Items: A live notification.
	 */
	live_notifications?: {
		/**
		 * The ID of the live notification.
		 */
		id?: string;
		/**
		 * The date and time when the live notification was created.
		 */
		created_at?: string;
		/**
		 * The unique key of the notification.
		 */
		notification_key?: string;
		/**
		 * The type of the notification, for example `karma_level`, `item_assigned` or `share_invitation_sent`. It defines which of the other fields are returned.
		 */
		notification_type?: string;
		/**
		 * Whether the notification is marked as unread.
		 */
		is_unread?: boolean;
		/**
		 * Whether the notification is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * The sequence number of the notification.
		 */
		seq_no?: number;
		/**
		 * The ID of the user who initiated the notification.
		 */
		from_uid?: string;
		/**
		 * The user who initiated the notification. Returned for some invitation notifications.
		 */
		from_user?: Record<string, JSONValue>;
		/**
		 * The state of the invitation: `invited`, `accepted` or `rejected`. Returned for invitation notifications.
		 */
		state?: string;
		/**
		 * The ID of the invitation. Returned for invitation notifications.
		 */
		invitation_id?: string;
		/**
		 * The secret key of the invitation, used to accept or reject it. Returned for invitation notifications.
		 */
		invitation_secret?: string;
		/**
		 * The email of the user who rejected the invitation. Returned for `share_invitation_rejected`.
		 */
		reject_email?: string;
		/**
		 * The ID of the project. Returned for project notifications.
		 */
		project_id?: string;
		/**
		 * The name of the project. Returned for some project notifications.
		 */
		project_name?: string;
		/**
		 * The name of the removed user. Returned for `user_removed_from_project`.
		 */
		removed_name?: string;
		/**
		 * The ID of the removed user. Returned for `user_removed_from_project`.
		 */
		removed_uid?: string;
		/**
		 * The ID of the task. Returned for task notifications.
		 */
		item_id?: string;
		/**
		 * The content of the task. Returned for task notifications.
		 */
		item_content?: string;
		/**
		 * The ID of the user who assigned the task. Returned for task notifications.
		 */
		assigned_by_uid?: string;
		/**
		 * The ID of the user responsible for the task. Returned for task notifications.
		 */
		responsible_uid?: string;
		/**
		 * The ID of the workspace. Returned for workspace notifications.
		 */
		workspace_id?: string;
		/**
		 * The name of the workspace. Returned for workspace notifications.
		 */
		workspace_name?: string;
		/**
		 * The plan of the workspace: `STARTER` or `BUSINESS`. Returned for workspace plan notifications.
		 */
		plan_type?: string;
		/**
		 * The acquisition cohort of the workspace team. Returned for `workspace_team_cohort_tagged`.
		 */
		team_acquisition_cohort?: string;
		/**
		 * The Karma level that was reached. Returned for `karma_level`.
		 */
		karma_level?: number;
		/**
		 * The number of tasks the user has completed. Returned for `karma_level`.
		 */
		completed_tasks?: number;
		/**
		 * The date and time when the Karma level was reached. Returned for `karma_level`.
		 */
		reached_at?: string;
		/**
		 * The percentage of users the user is ahead of. Returned for `karma_level`.
		 */
		top_procent?: number;
		/**
		 * The URL of the image of the Karma level. Returned for `karma_level`.
		 */
		promo_img?: string;
	}[];
	/**
	 * The ID of the last live notification the user has seen.
	 */
	live_notifications_last_read_id?: string;
	/**
	 * The settings of the user.
	 */
	user_settings?: {
		/**
		 * Whether reminders are sent as push notifications.
		 */
		reminder_push?: boolean;
		/**
		 * Whether reminders are shown in desktop applications.
		 */
		reminder_desktop?: boolean;
		/**
		 * Whether reminders are sent by email.
		 */
		reminder_email?: boolean;
		/**
		 * Whether a sound is played when a task is completed in desktop clients.
		 */
		completed_sound_desktop?: boolean;
		/**
		 * Whether a sound is played when a task is completed in mobile clients.
		 */
		completed_sound_mobile?: boolean;
		/**
		 * Whether the AI assistant for emails is enabled.
		 */
		ai_email_assist?: boolean;
		/**
		 * The date and time until debug logging is enabled. `null` if it is disabled.
		 */
		debug_logging_enabled_until?: string;
		/**
		 * Whether the user is on legacy pricing: `1` if yes, `0` if no.
		 */
		legacy_pricing?: number;
		/**
		 * Whether the sub-tasks of a recurring task are reset when the task is completed.
		 */
		reset_recurring_subtasks?: boolean;
		/**
		 * The settings of the habit push notifications.
		 */
		habit_push_notifications?: {
			/**
			 * The habit push notifications.
			 *
			 * Items: A habit push notification.
			 */
			features?: {
				/**
				 * The name of the notification, for example `plan_your_day`.
				 */
				name?: string;
				/**
				 * Whether the notification is enabled.
				 */
				enabled?: boolean;
				/**
				 * The time of the day when the notification is sent, for example `08:00`. `null` if it has no fixed time.
				 */
				send_at?: string;
			}[];
		};
		/**
		 * The settings of the navigation sidebar.
		 */
		navigation?: {
			/**
			 * Whether the task counts are shown.
			 */
			counts_shown?: boolean;
			/**
			 * The sidebar items.
			 *
			 * Items: A feature.
			 */
			features?: {
				/**
				 * The name of the feature.
				 */
				name?: string;
				/**
				 * Whether the item is shown in the sidebar.
				 */
				shown?: boolean;
			}[];
		};
		/**
		 * The settings of the quick add dialog.
		 */
		quick_add?: {
			/**
			 * Whether the description field is shown.
			 */
			description_shown?: boolean;
			/**
			 * Whether the labels are shown.
			 */
			labels_shown?: boolean;
			/**
			 * The items of the dialog.
			 *
			 * Items: A feature.
			 */
			features?: {
				/**
				 * The name of the feature.
				 */
				name?: string;
				/**
				 * Whether the item is shown in the dialog.
				 */
				shown?: boolean;
			}[];
		};
	};
	/**
	 * The notification settings of the user. Each key is a notification type and tells whether notifications of that type are sent by email and as push notifications. Returned for the `notification_settings` resource type.
	 */
	settings_notifications?: {
		/**
		 * The settings of the `biz_account_disabled` notifications.
		 */
		biz_account_disabled?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_invitation_accepted` notifications.
		 */
		biz_invitation_accepted?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_invitation_created` notifications.
		 */
		biz_invitation_created?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_invitation_rejected` notifications.
		 */
		biz_invitation_rejected?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_payment_failed` notifications.
		 */
		biz_payment_failed?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_policy_disallowed_invitation` notifications.
		 */
		biz_policy_disallowed_invitation?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_policy_rejected_invitation` notifications.
		 */
		biz_policy_rejected_invitation?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_trial_enter_cc` notifications.
		 */
		biz_trial_enter_cc?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `biz_trial_will_end` notifications.
		 */
		biz_trial_will_end?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `item_assigned` notifications.
		 */
		item_assigned?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `item_completed` notifications.
		 */
		item_completed?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `item_uncompleted` notifications.
		 */
		item_uncompleted?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `note_added` notifications.
		 */
		note_added?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `project_archived` notifications.
		 */
		project_archived?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `removed_from_workspace` notifications.
		 */
		removed_from_workspace?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `share_invitation_accepted` notifications.
		 */
		share_invitation_accepted?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `share_invitation_rejected` notifications.
		 */
		share_invitation_rejected?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `teams_workspace_canceled` notifications.
		 */
		teams_workspace_canceled?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `teams_workspace_payment_failed` notifications.
		 */
		teams_workspace_payment_failed?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `teams_workspace_upgraded` notifications.
		 */
		teams_workspace_upgraded?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `user_left_project` notifications.
		 */
		user_left_project?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `user_removed_from_project` notifications.
		 */
		user_removed_from_project?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `workspace_deleted` notifications.
		 */
		workspace_deleted?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `workspace_invitation_accepted` notifications.
		 */
		workspace_invitation_accepted?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `workspace_invitation_created` notifications.
		 */
		workspace_invitation_created?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `workspace_invitation_rejected` notifications.
		 */
		workspace_invitation_rejected?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
		/**
		 * The settings of the `workspace_user_joined_by_domain` notifications.
		 */
		workspace_user_joined_by_domain?: {
			/**
			 * Whether notifications of this type are sent by email.
			 */
			notify_email?: boolean;
			/**
			 * Whether notifications of this type are sent as push notifications.
			 */
			notify_push?: boolean;
		};
	};
	/**
	 * The features and limits of the plan of the user.
	 */
	user_plan_limits?: {
		/**
		 * The features and limits of the current plan.
		 */
		current?: {
			/**
			 * The name of the plan.
			 */
			plan_name?: string;
			/**
			 * Whether the user can view the activity log.
			 */
			activity_log?: boolean;
			/**
			 * The number of days of the activity log history that are displayed. `-1` if there is no limit.
			 */
			activity_log_limit?: number;
			/**
			 * Whether advanced permissions are available.
			 */
			advanced_permissions?: boolean;
			/**
			 * Whether backups are created automatically.
			 */
			automatic_backups?: boolean;
			/**
			 * Whether calendar feeds can be enabled for projects.
			 */
			calendar_feeds?: boolean;
			/**
			 * Whether the calendar layout is available.
			 */
			calendar_layout?: boolean;
			/**
			 * Whether the user can add comments.
			 */
			comments?: boolean;
			/**
			 * Whether the user can search the completed tasks archive.
			 */
			completed_tasks?: boolean;
			/**
			 * Whether the user can set a custom app icon on iOS.
			 */
			custom_app_icon?: boolean;
			/**
			 * Whether the user can use special themes or other visual customization.
			 */
			customization_color?: boolean;
			/**
			 * Whether deadlines are available.
			 */
			deadlines?: boolean;
			/**
			 * Whether task durations are available.
			 */
			durations?: boolean;
			/**
			 * Whether AI email forwarding is available.
			 */
			email_ai_forwarding?: boolean;
			/**
			 * Whether the user can add tasks or comments by email.
			 */
			email_forwarding?: boolean;
			/**
			 * Whether the user can add and update filters.
			 */
			filters?: boolean;
			/**
			 * Whether the user can add labels.
			 */
			labels?: boolean;
			/**
			 * The maximum number of calendar accounts.
			 */
			max_calendar_accounts?: number;
			/**
			 * The maximum number of collaborators in a project.
			 */
			max_collaborators?: number;
			/**
			 * The maximum number of filters.
			 */
			max_filters?: number;
			/**
			 * The maximum number of folders in a workspace.
			 */
			max_folders_per_workspace?: number;
			/**
			 * The maximum number of free workspaces the user can create.
			 */
			max_free_workspaces_created?: number;
			/**
			 * The maximum number of guests in a workspace.
			 */
			max_guests_per_workspace?: number;
			/**
			 * The maximum number of labels.
			 */
			max_labels?: number;
			/**
			 * The maximum number of live notifications.
			 */
			max_live_notifications?: number;
			/**
			 * The maximum number of captures per month.
			 */
			max_monthly_capture?: number;
			/**
			 * The maximum number of rambles per month.
			 */
			max_monthly_ramble?: number;
			/**
			 * The maximum number of active projects.
			 */
			max_projects?: number;
			/**
			 * The maximum number of projects the user can join.
			 */
			max_projects_joined?: number;
			/**
			 * The maximum number of location reminders.
			 */
			max_reminders_location?: number;
			/**
			 * The maximum number of time-based reminders.
			 */
			max_reminders_time?: number;
			/**
			 * The maximum number of active sections.
			 */
			max_sections?: number;
			/**
			 * The maximum number of active tasks.
			 */
			max_tasks?: number;
			/**
			 * The maximum number of templates of the user.
			 */
			max_user_templates?: number;
			/**
			 * The maximum number of filters per workspace.
			 */
			max_workspace_filters?: number;
			/**
			 * Whether the light version of project insights is available.
			 */
			project_insights_light?: boolean;
			/**
			 * Whether the user can add reminders.
			 */
			reminders?: boolean;
			/**
			 * Whether reminders at the due time are available.
			 */
			reminders_at_due?: boolean;
			/**
			 * Whether the user can import and export project templates.
			 */
			templates?: boolean;
			/**
			 * The maximum size of an uploaded file in MB.
			 */
			upload_limit_mb?: number;
			/**
			 * Whether the user can upload attachments.
			 */
			uploads?: boolean;
			/**
			 * Whether the user can view productivity stats.
			 */
			weekly_trends?: boolean;
			/**
			 * Whether the user can add and update workspace filters.
			 */
			workspace_filters?: boolean;
		};
		/**
		 * The features and limits of the plan available for an upgrade. `null` if there is no upgrade.
		 */
		next?: {
			/**
			 * The name of the plan.
			 */
			plan_name?: string;
			/**
			 * Whether the user can view the activity log.
			 */
			activity_log?: boolean;
			/**
			 * The number of days of the activity log history that are displayed. `-1` if there is no limit.
			 */
			activity_log_limit?: number;
			/**
			 * Whether advanced permissions are available.
			 */
			advanced_permissions?: boolean;
			/**
			 * Whether backups are created automatically.
			 */
			automatic_backups?: boolean;
			/**
			 * Whether calendar feeds can be enabled for projects.
			 */
			calendar_feeds?: boolean;
			/**
			 * Whether the calendar layout is available.
			 */
			calendar_layout?: boolean;
			/**
			 * Whether the user can add comments.
			 */
			comments?: boolean;
			/**
			 * Whether the user can search the completed tasks archive.
			 */
			completed_tasks?: boolean;
			/**
			 * Whether the user can set a custom app icon on iOS.
			 */
			custom_app_icon?: boolean;
			/**
			 * Whether the user can use special themes or other visual customization.
			 */
			customization_color?: boolean;
			/**
			 * Whether deadlines are available.
			 */
			deadlines?: boolean;
			/**
			 * Whether task durations are available.
			 */
			durations?: boolean;
			/**
			 * Whether AI email forwarding is available.
			 */
			email_ai_forwarding?: boolean;
			/**
			 * Whether the user can add tasks or comments by email.
			 */
			email_forwarding?: boolean;
			/**
			 * Whether the user can add and update filters.
			 */
			filters?: boolean;
			/**
			 * Whether the user can add labels.
			 */
			labels?: boolean;
			/**
			 * The maximum number of calendar accounts.
			 */
			max_calendar_accounts?: number;
			/**
			 * The maximum number of collaborators in a project.
			 */
			max_collaborators?: number;
			/**
			 * The maximum number of filters.
			 */
			max_filters?: number;
			/**
			 * The maximum number of folders in a workspace.
			 */
			max_folders_per_workspace?: number;
			/**
			 * The maximum number of free workspaces the user can create.
			 */
			max_free_workspaces_created?: number;
			/**
			 * The maximum number of guests in a workspace.
			 */
			max_guests_per_workspace?: number;
			/**
			 * The maximum number of labels.
			 */
			max_labels?: number;
			/**
			 * The maximum number of live notifications.
			 */
			max_live_notifications?: number;
			/**
			 * The maximum number of captures per month.
			 */
			max_monthly_capture?: number;
			/**
			 * The maximum number of rambles per month.
			 */
			max_monthly_ramble?: number;
			/**
			 * The maximum number of active projects.
			 */
			max_projects?: number;
			/**
			 * The maximum number of projects the user can join.
			 */
			max_projects_joined?: number;
			/**
			 * The maximum number of location reminders.
			 */
			max_reminders_location?: number;
			/**
			 * The maximum number of time-based reminders.
			 */
			max_reminders_time?: number;
			/**
			 * The maximum number of active sections.
			 */
			max_sections?: number;
			/**
			 * The maximum number of active tasks.
			 */
			max_tasks?: number;
			/**
			 * The maximum number of templates of the user.
			 */
			max_user_templates?: number;
			/**
			 * The maximum number of filters per workspace.
			 */
			max_workspace_filters?: number;
			/**
			 * Whether the light version of project insights is available.
			 */
			project_insights_light?: boolean;
			/**
			 * Whether the user can add reminders.
			 */
			reminders?: boolean;
			/**
			 * Whether reminders at the due time are available.
			 */
			reminders_at_due?: boolean;
			/**
			 * Whether the user can import and export project templates.
			 */
			templates?: boolean;
			/**
			 * The maximum size of an uploaded file in MB.
			 */
			upload_limit_mb?: number;
			/**
			 * Whether the user can upload attachments.
			 */
			uploads?: boolean;
			/**
			 * Whether the user can view productivity stats.
			 */
			weekly_trends?: boolean;
			/**
			 * Whether the user can add and update workspace filters.
			 */
			workspace_filters?: boolean;
		};
	};
	/**
	 * The productivity stats of the user with completion counts for today and this week.
	 */
	stats?: {
		/**
		 * The total number of tasks the user has completed.
		 */
		completed_count?: number;
		/**
		 * The completion statistics for today.
		 *
		 * Items: The completion statistics of one day.
		 */
		days_items?: {
			/**
			 * The date.
			 */
			date?: string;
			/**
			 * The number of tasks completed on that date.
			 */
			total_completed?: number;
		}[];
		/**
		 * The completion statistics for the current week.
		 *
		 * Items: The completion statistics of one week.
		 */
		week_items?: {
			/**
			 * The first day of the week.
			 */
			from?: string;
			/**
			 * The last day of the week.
			 */
			to?: string;
			/**
			 * The number of tasks completed in that week.
			 */
			total_completed?: number;
		}[];
	};
	/**
	 * The view options of the user.
	 *
	 * Items: The view options of one view.
	 */
	view_options?: {
		/**
		 * The ID of the view options.
		 */
		id?: string;
		/**
		 * The type of the view: `TODAY`, `UPCOMING`, `ASSIGNED_TO_ME`, `PROJECT`, `LABEL`, `FILTER` or `WORKSPACE_FILTER`.
		 */
		view_type?: string;
		/**
		 * The ID of the project, label, filter or workspace filter the view is for. `null` for the other views.
		 */
		object_id?: string;
		/**
		 * The search query of the view.
		 */
		filtered_by?: string;
		/**
		 * How the tasks are grouped, for example `PRIORITY` or `ASSIGNEE`. `null` if they are not grouped.
		 */
		grouped_by?: string;
		/**
		 * How the tasks are sorted, for example `DUE_DATE` or `ADDED_DATE`. `null` for the default order.
		 */
		sorted_by?: string;
		/**
		 * The sort order: `ASC` or `DESC`.
		 */
		sort_order?: string;
		/**
		 * Whether completed tasks are shown in the view.
		 */
		show_completed_tasks?: boolean;
		/**
		 * The way tasks are rendered: `LIST`, `BOARD` or `CALENDAR`.
		 */
		view_mode?: string;
		/**
		 * The settings of the calendar when the view mode is `CALENDAR`. `null` otherwise.
		 */
		calendar_settings?: {
			/**
			 * The layout of the calendar: `WEEK` or `MONTH`.
			 */
			layout?: string;
			/**
			 * The number of visible days of the week layout: `1`, `3` or `7`.
			 */
			visible_day_count?: number;
			/**
			 * What the colors of the tasks show: `PRIORITY`, `LABEL` or `PROJECT`.
			 */
			color?: string;
		};
		/**
		 * The deadline search query of the view.
		 */
		deadline?: string;
		/**
		 * Whether the view options are deleted.
		 */
		is_deleted?: boolean;
	}[];
	/**
	 * The default view options of the projects of the user.
	 *
	 * Items: The default view options of one project.
	 */
	project_view_options_defaults?: {
		/**
		 * The ID of the project.
		 */
		project_id?: string;
		/**
		 * The search query of the view.
		 */
		filtered_by?: string;
		/**
		 * How the tasks are grouped, for example `PRIORITY` or `ASSIGNEE`. `null` if they are not grouped.
		 */
		grouped_by?: string;
		/**
		 * How the tasks are sorted, for example `DUE_DATE` or `ADDED_DATE`. `null` for the default order.
		 */
		sorted_by?: string;
		/**
		 * The sort order: `ASC` or `DESC`.
		 */
		sort_order?: string;
		/**
		 * Whether completed tasks are shown in the view.
		 */
		show_completed_tasks?: boolean;
		/**
		 * The way tasks are rendered: `LIST`, `BOARD` or `CALENDAR`.
		 */
		view_mode?: string;
		/**
		 * The settings of the calendar when the view mode is `CALENDAR`. `null` otherwise.
		 */
		calendar_settings?: {
			/**
			 * The layout of the calendar: `WEEK` or `MONTH`.
			 */
			layout?: string;
			/**
			 * The number of visible days of the week layout: `1`, `3` or `7`.
			 */
			visible_day_count?: number;
			/**
			 * What the colors of the tasks show: `PRIORITY`, `LABEL` or `PROJECT`.
			 */
			color?: string;
		};
		/**
		 * The ID of the user who created the defaults.
		 */
		creator_uid?: number;
		/**
		 * The ID of the user who last updated the defaults.
		 */
		updater_uid?: number;
		/**
		 * Whether the defaults are deleted.
		 */
		is_deleted?: boolean;
	}[];
	/**
	 * The actions each role is allowed to perform.
	 */
	role_actions?: {
		/**
		 * The actions of the roles of project collaborators.
		 *
		 * Items: A role and its actions.
		 */
		project_collaborator_actions?: {
			/**
			 * The name of the role, for example `ADMIN` or `READ_WRITE`.
			 */
			name?: string;
			/**
			 * The actions the role is allowed to perform.
			 *
			 * Items: An action.
			 */
			actions?: {
				/**
				 * The name of the action, for example `CREATE_ITEM`.
				 */
				name?: string;
			}[];
		}[];
		/**
		 * The actions of the roles of workspace members.
		 *
		 * Items: A role and its actions.
		 */
		workspace_collaborator_actions?: {
			/**
			 * The name of the role, for example `ADMIN` or `READ_WRITE`.
			 */
			name?: string;
			/**
			 * The actions the role is allowed to perform.
			 *
			 * Items: An action.
			 */
			actions?: {
				/**
				 * The name of the action, for example `CREATE_ITEM`.
				 */
				name?: string;
			}[];
		}[];
	};
	/**
	 * The workspaces of the user.
	 *
	 * Items: A workspace.
	 */
	workspaces?: {
		/**
		 * The ID of the workspace.
		 */
		id?: string;
		/**
		 * The name of the workspace.
		 */
		name?: string;
		/**
		 * The description of the workspace.
		 */
		description?: string;
		/**
		 * The subscription plan of the workspace: `STARTER` or `BUSINESS`.
		 */
		plan?: string;
		/**
		 * The role of the current user in the workspace: `ADMIN`, `MEMBER` or `GUEST`.
		 */
		role?: string;
		/**
		 * The ID of the user who created the workspace.
		 */
		creator_id?: string;
		/**
		 * The date and time when the workspace was created.
		 */
		created_at?: string;
		/**
		 * Whether the workspace is deleted.
		 */
		is_deleted?: boolean;
		/**
		 * Whether the workspace is collapsed for the current user.
		 */
		is_collapsed?: boolean;
		/**
		 * Whether users from outside the workspace can join or be invited to workspace projects.
		 */
		is_guest_allowed?: boolean;
		/**
		 * Whether users can join the workspace with an invitation link. `null` for guests.
		 */
		is_link_sharing_enabled?: boolean;
		/**
		 * Whether a trial of the workspace is pending.
		 */
		is_trial_pending?: boolean;
		/**
		 * The code of the invitation link. `null` for guests.
		 */
		invite_code?: string;
		/**
		 * The domain name of the workspace.
		 */
		domain_name?: string;
		/**
		 * Whether users with an email in the workspace domain can join without an invitation.
		 */
		domain_discovery?: boolean;
		/**
		 * Whether only users with an email in the workspace domain can join.
		 */
		restrict_email_domains?: boolean;
		/**
		 * How the projects of the workspace are sorted, for example `MANUAL`.
		 */
		project_sort_preference?: string;
		/**
		 * Whether the default project ordering set by admins is applied.
		 */
		admin_sorting_applied?: boolean;
		/**
		 * Whether the project ordering of the user is applied.
		 */
		user_sorting_applied?: boolean;
		/**
		 * The number of active projects in the workspace.
		 */
		current_active_projects?: number;
		/**
		 * The number of members of the workspace.
		 */
		current_member_count?: number;
		/**
		 * The number of templates in the workspace.
		 */
		current_template_count?: number;
		/**
		 * The URL of the big logo.
		 */
		logo_big?: string;
		/**
		 * The URL of the medium logo.
		 */
		logo_medium?: string;
		/**
		 * The URL of the small logo.
		 */
		logo_small?: string;
		/**
		 * The URL of the square 640px logo.
		 */
		logo_s640?: string;
		/**
		 * The features and limits of the plan of the workspace.
		 */
		limits?: {
			/**
			 * The features and limits of the current plan.
			 */
			current?: {
				/**
				 * The name of the plan.
				 */
				plan_name?: string;
				/**
				 * Whether admin tools are available.
				 */
				admin_tools?: boolean;
				/**
				 * Whether advanced permissions are available.
				 */
				advanced_permissions?: boolean;
				/**
				 * Whether backups are created automatically.
				 */
				automatic_backups?: boolean;
				/**
				 * Whether the calendar layout is available.
				 */
				calendar_layout?: boolean;
				/**
				 * Whether task durations are available.
				 */
				durations?: boolean;
				/**
				 * Whether AI email forwarding is available.
				 */
				email_ai_forwarding?: boolean;
				/**
				 * Whether the users can add tasks or comments by email.
				 */
				email_forwarding?: boolean;
				/**
				 * The maximum number of collaborators in a project.
				 */
				max_collaborators?: number;
				/**
				 * The maximum number of filters.
				 */
				max_filters?: number;
				/**
				 * The maximum number of folders in the workspace.
				 */
				max_folders_per_workspace?: number;
				/**
				 * The maximum number of guests in the workspace.
				 */
				max_guests_per_workspace?: number;
				/**
				 * The maximum number of live notifications.
				 */
				max_live_notifications?: number;
				/**
				 * The maximum number of captures per month.
				 */
				max_monthly_capture?: number;
				/**
				 * The maximum number of rambles per month.
				 */
				max_monthly_ramble?: number;
				/**
				 * The maximum number of projects in the workspace.
				 */
				max_projects?: number;
				/**
				 * The maximum number of templates in the workspace.
				 */
				max_workspace_templates?: number;
				/**
				 * The maximum number of users in the workspace.
				 */
				max_workspace_users?: number;
				/**
				 * The maximum number of workspaces.
				 */
				max_workspaces?: number;
				/**
				 * Whether project insights are available.
				 */
				project_insights?: boolean;
				/**
				 * Whether reminders are available.
				 */
				reminders?: boolean;
				/**
				 * Whether reminders at the due time are available.
				 */
				reminders_at_due?: boolean;
				/**
				 * Whether security controls are available.
				 */
				security_controls?: boolean;
				/**
				 * The maximum size of an uploaded file in MB.
				 */
				upload_limit_mb?: number;
			};
			/**
			 * The features and limits of the plan available for an upgrade. `null` if there is no upgrade.
			 */
			next?: {
				/**
				 * The name of the plan.
				 */
				plan_name?: string;
				/**
				 * Whether admin tools are available.
				 */
				admin_tools?: boolean;
				/**
				 * Whether advanced permissions are available.
				 */
				advanced_permissions?: boolean;
				/**
				 * Whether backups are created automatically.
				 */
				automatic_backups?: boolean;
				/**
				 * Whether the calendar layout is available.
				 */
				calendar_layout?: boolean;
				/**
				 * Whether task durations are available.
				 */
				durations?: boolean;
				/**
				 * Whether AI email forwarding is available.
				 */
				email_ai_forwarding?: boolean;
				/**
				 * Whether the users can add tasks or comments by email.
				 */
				email_forwarding?: boolean;
				/**
				 * The maximum number of collaborators in a project.
				 */
				max_collaborators?: number;
				/**
				 * The maximum number of filters.
				 */
				max_filters?: number;
				/**
				 * The maximum number of folders in the workspace.
				 */
				max_folders_per_workspace?: number;
				/**
				 * The maximum number of guests in the workspace.
				 */
				max_guests_per_workspace?: number;
				/**
				 * The maximum number of live notifications.
				 */
				max_live_notifications?: number;
				/**
				 * The maximum number of captures per month.
				 */
				max_monthly_capture?: number;
				/**
				 * The maximum number of rambles per month.
				 */
				max_monthly_ramble?: number;
				/**
				 * The maximum number of projects in the workspace.
				 */
				max_projects?: number;
				/**
				 * The maximum number of templates in the workspace.
				 */
				max_workspace_templates?: number;
				/**
				 * The maximum number of users in the workspace.
				 */
				max_workspace_users?: number;
				/**
				 * The maximum number of workspaces.
				 */
				max_workspaces?: number;
				/**
				 * Whether project insights are available.
				 */
				project_insights?: boolean;
				/**
				 * Whether reminders are available.
				 */
				reminders?: boolean;
				/**
				 * Whether reminders at the due time are available.
				 */
				reminders_at_due?: boolean;
				/**
				 * Whether security controls are available.
				 */
				security_controls?: boolean;
				/**
				 * The maximum size of an uploaded file in MB.
				 */
				upload_limit_mb?: number;
			};
		};
		/**
		 * The number of users in the workspace by type.
		 */
		member_count_by_type?: {
			/**
			 * The number of admins.
			 */
			admin_count?: number;
			/**
			 * The number of guests.
			 */
			guest_count?: number;
			/**
			 * The number of members.
			 */
			member_count?: number;
		};
		/**
		 * The number of pending invitations by type.
		 */
		pending_invites_by_type?: {
			/**
			 * The number of admins.
			 */
			admin_count?: number;
			/**
			 * The number of guests.
			 */
			guest_count?: number;
			/**
			 * The number of members.
			 */
			member_count?: number;
		};
		/**
		 * The emails of the pending invitations.
		 *
		 * Items: The email of a pending invitation.
		 */
		pending_invitations?: string[];
		/**
		 * The users and groups added to new workspace projects by default.
		 */
		default_collaborators?: {
			/**
			 * The IDs of the predefined groups, for example `MEMBERS_IN_WORKSPACE`.
			 *
			 * Items: The ID of a predefined group.
			 */
			predefined_group_ids?: string[];
			/**
			 * The IDs of the users.
			 *
			 * Items: The ID of a user.
			 */
			user_ids?: string[];
		};
		/**
		 * The configuration properties of the workspace.
		 */
		properties?: {
			/**
			 * The industry of the workspace.
			 */
			industry?: string;
			/**
			 * The department of the workspace.
			 */
			department?: string;
			/**
			 * The size of the organization, for example `size_1`.
			 */
			organization_size?: string;
			/**
			 * The number of collaborators the creator intends to work with.
			 */
			intended_team_size?: string;
			/**
			 * The type of work of the team: `projects`, `processes` or `both`.
			 */
			type_of_work?: string;
			/**
			 * The role of the creator of the workspace.
			 */
			creator_role?: string;
			/**
			 * The 2-letter continent code.
			 */
			region?: string;
			/**
			 * The 2-letter ISO 3166-1 country code.
			 */
			country?: string;
			/**
			 * The default access level of new projects: `restricted` or `team`.
			 */
			default_access_level?: string;
			/**
			 * Whether beta features are enabled.
			 */
			beta_enabled?: boolean;
			/**
			 * The marketing channel that led to the creation of the workspace.
			 */
			acquisition_source?: string;
			/**
			 * The marketing attribution answer of the creator.
			 */
			hdyhau?: string;
			/**
			 * The date when the acquisition loop was last shown.
			 */
			acquisition_loop_last_show?: string;
			/**
			 * The ID of the filter created during onboarding.
			 */
			onboarding_filter_id?: number;
			/**
			 * The acquisition cohort of the workspace team.
			 */
			team_acquisition_cohort?: string;
		};
	}[];
	/**
	 * The users of the workspaces. Returned only in incremental sync.
	 *
	 * Items: A workspace user.
	 */
	workspace_users?: {
		/**
		 * The ID of the user.
		 */
		user_id?: string;
		/**
		 * The ID of the workspace.
		 */
		workspace_id?: string;
		/**
		 * The email of the user.
		 */
		user_email?: string;
		/**
		 * The full name of the user.
		 */
		full_name?: string;
		/**
		 * The timezone of the user.
		 */
		timezone?: string;
		/**
		 * The role of the user in the workspace: `ADMIN`, `MEMBER` or `GUEST`.
		 */
		role?: string;
		/**
		 * The ID of the avatar of the user. `null` if the user has no avatar.
		 */
		image_id?: string;
		/**
		 * The URL of the 195x195 avatar. Only if the user has an avatar.
		 */
		avatar_big?: string;
		/**
		 * The URL of the 60x60 avatar. Only if the user has an avatar.
		 */
		avatar_medium?: string;
		/**
		 * The URL of the 640x640 avatar. Only if the user has an avatar.
		 */
		avatar_s640?: string;
		/**
		 * The URL of the 35x35 avatar. Only if the user has an avatar.
		 */
		avatar_small?: string;
		/**
		 * Whether the workspace user is deleted.
		 */
		is_deleted?: boolean;
	}[];
	/**
	 * The places of tasks in the orderings of the user.
	 *
	 * Items: The place of one task in an ordering of the user.
	 */
	user_item_orders?: {
		/**
		 * The ID of the task.
		 */
		item_id?: string;
		/**
		 * The ordering the entry belongs to. Only `day` is currently served.
		 */
		scope?: string;
		/**
		 * The instance of the scope. Always `0` for `day`.
		 */
		scope_id?: number;
		/**
		 * The fractional-indexing order key. Entries sort by comparing keys lexicographically. `null` for cleared entries.
		 */
		order_key?: string;
		/**
		 * Whether the entry is cleared.
		 */
		is_deleted?: boolean;
	}[];
	/**
	 * The order of tasks in the daily agenda. Deprecated, use `user_item_orders` instead.
	 */
	day_orders?: Record<string, JSONValue>;
};

/**
 * Sync
 * Reads resources, writes changes with commands, or does both in a single request.
 */
export async function sync(
	this: EndpointFunctionThis,
	payload: {
		input: SyncInput;
		connectionId: number;
	},
): Promise<SyncOutput> {
	const response = await this.endpointCaller<SyncOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'sync',
		},
		payload,
	);
	return response.output;
}
