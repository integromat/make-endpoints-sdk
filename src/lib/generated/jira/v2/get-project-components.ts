// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetProjectComponentsInput = {
	/**
	 * The project ID or project key (case sensitive).
	 */
	projectIdOrKey: string;
	/**
	 * Filter results by a literal string matched against component `name` or `description` (case insensitive).
	 */
	query?: string;
	/**
	 * The source of the components to return.
	 */
	componentSource?: '' | 'jira' | 'compass' | 'auto';
	/**
	 * Order the results by a field.
	 */
	orderBy?: '' | 'description' | 'issueCount' | 'lead' | 'name';
	/**
	 * The index of the first item to return (page offset).
	 */
	startAt?: number;
	/**
	 * The maximum number of components to return per page.
	 */
	maxResults?: number;
};

export type GetProjectComponentsOutput = {
	/**
	 * The URL of the page.
	 */
	self?: string;
	/**
	 * The URL of the next page, if there is one.
	 */
	nextPage?: string;
	/**
	 * The index of the first item returned.
	 */
	startAt?: number;
	/**
	 * The maximum number of items that could be returned.
	 */
	maxResults?: number;
	/**
	 * The number of items returned.
	 */
	total?: number;
	/**
	 * Whether this is the last page of results.
	 */
	isLast?: boolean;
	/**
	 * The list of components.
	 *
	 * Items: A project component.
	 */
	values?: {
		/**
		 * The unique identifier for the component.
		 */
		id?: string;
		/**
		 * The URL of the component.
		 */
		self?: string;
		/**
		 * The name of the component.
		 */
		name?: string;
		/**
		 * The description of the component.
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
		 * Whether a user is associated with `Assignee type`.
		 */
		isAssigneeTypeValid?: boolean;
	}[];
};

/**
 * Get project components
 * Returns a paginated list of components in a project.
 */
export async function getProjectComponents(
	this: EndpointFunctionThis,
	payload: {
		input: GetProjectComponentsInput;
		connectionId: number;
	},
): Promise<GetProjectComponentsOutput> {
	const response = await this.endpointCaller<GetProjectComponentsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getProjectComponents',
		},
		payload,
	);
	return response.output;
}
