// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateComponentInput = {
	/**
	 * The ID of the component to update.
	 */
	componentId: string;
	/**
	 * The unique name for the component in the project. Maximum length 255 characters.
	 */
	name?: string;
	/**
	 * The description for the component.
	 */
	description?: string;
	/**
	 * The account ID of the component's lead user.
	 */
	leadAccountId?: string;
	/**
	 * The nominal user type used to determine the assignee for issues created with this component.
	 */
	assigneeType?: '' | 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED';
};

export type UpdateComponentOutput = {
	/**
	 * The unique identifier for the component.
	 */
	id?: string;
	/**
	 * The URL of the component.
	 */
	self?: string;
	/**
	 * The unique name for the component in the project.
	 */
	name?: string;
	/**
	 * The description for the component.
	 */
	description?: string;
	/**
	 * The key of the project the component is assigned to.
	 */
	project?: string;
	/**
	 * The ID of the project the component is assigned to.
	 */
	projectId?: number;
	/**
	 * The nominal user type used to determine the assignee for issues created with this component.
	 */
	assigneeType?: string;
	/**
	 * The type of the assignee actually assigned, when `Assignee type` cannot identify a valid assignee.
	 */
	realAssigneeType?: string;
	/**
	 * Whether a user is associated with `Assignee type`.
	 */
	isAssigneeTypeValid?: boolean;
	/**
	 * The Compass component's ID, if linked to one.
	 */
	ari?: string;
	/**
	 * The Compass component's metadata, if linked to one.
	 */
	metadata?: Record<string, JSONValue>;
	/**
	 * The user details for the component's lead user.
	 */
	lead?: {
		/**
		 * The account ID of the user.
		 */
		accountId?: string;
		/**
		 * The display name of the user.
		 */
		displayName?: string;
		/**
		 * The email address of the user.
		 */
		emailAddress?: string;
		/**
		 * Whether the user is active.
		 */
		active?: boolean;
	};
	/**
	 * The details of the user associated with `Assignee type`, if any.
	 */
	assignee?: {
		/**
		 * The account ID of the user.
		 */
		accountId?: string;
		/**
		 * The display name of the user.
		 */
		displayName?: string;
		/**
		 * The email address of the user.
		 */
		emailAddress?: string;
		/**
		 * Whether the user is active.
		 */
		active?: boolean;
	};
	/**
	 * The user actually assigned to issues created with this component, when `Assignee type` cannot identify a valid assignee.
	 */
	realAssignee?: {
		/**
		 * The account ID of the user.
		 */
		accountId?: string;
		/**
		 * The display name of the user.
		 */
		displayName?: string;
		/**
		 * The email address of the user.
		 */
		emailAddress?: string;
		/**
		 * Whether the user is active.
		 */
		active?: boolean;
	};
};

/**
 * Update component
 * Updates a component.
 */
export async function updateComponent(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateComponentInput;
		connectionId: number;
	},
): Promise<UpdateComponentOutput> {
	const response = await this.endpointCaller<UpdateComponentOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'updateComponent',
		},
		payload,
	);
	return response.output;
}
