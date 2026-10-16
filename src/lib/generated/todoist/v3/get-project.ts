// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetProjectInput = {
	/**
	 * The ID of the project to return.
	 */
	project_id: string;
};

export type GetProjectOutput = {
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
};

/**
 * Get a project
 * Returns a project by its ID.
 */
export async function getProject(
	this: EndpointFunctionThis,
	payload: {
		input: GetProjectInput;
		connectionId: number;
	},
): Promise<GetProjectOutput> {
	const response = await this.endpointCaller<GetProjectOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'getProject',
		},
		payload,
	);
	return response.output;
}
