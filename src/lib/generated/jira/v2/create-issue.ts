// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateIssueInput = {
	/**
	 * List of issue screen fields to set, as a JSON object mapping field ID (or key) to its value, e.g. `{"project": {"id": "10000"}, "issuetype": {"id": "10001"}, "summary": "New issue"}`. Field IDs vary per project and issue type — use the [Get create issue metadata](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get) API to discover which fields are required and their format.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * A JSON object mapping field name to a list of field modification operations (`add`, `set`, `remove`), e.g. `{"labels": [{"add": "triaged"}]}`. Fields present in both `Fields` and `Update` are rejected by the API — use one or the other for a given field. See the [Edit issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-put) documentation for the operation format.
	 */
	update?: Record<string, JSONValue>;
	/**
	 * Additional issue history details to record with this change, as a JSON object (`type`, `description`, `activityDescription`, `actor`, `generator`, `cause`, `extraData`, etc.).
	 */
	historyMetadata?: Record<string, JSONValue>;
	/**
	 * Issue properties to set on the created issue.
	 *
	 * Items: An issue property.
	 */
	properties?: {
		/**
		 * The key of the issue property.
		 */
		key: string;
		/**
		 * The value of the issue property.
		 */
		value: Record<string, JSONValue>;
	}[];
	/**
	 * Details of a transition to apply while creating the issue. Optional — only needed to create the issue directly in a non-default status.
	 */
	transition?: {
		/**
		 * The ID of the transition. Get available transition IDs from the [Get transitions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-get) endpoint.
		 */
		id: string;
	};
	/**
	 * Whether the project of the created issue is added to the user's **Recently viewed** project list.
	 */
	updateHistory?: boolean;
};

export type CreateIssueOutput = {
	/**
	 * The ID of the created issue.
	 */
	id?: string;
	/**
	 * The key of the created issue.
	 */
	key?: string;
	/**
	 * The URL of the created issue.
	 */
	self?: string;
	/**
	 * The response code and messages related to any requested transition.
	 */
	transition?: Record<string, JSONValue>;
	/**
	 * The response code and messages related to any requested watchers.
	 */
	watchers?: Record<string, JSONValue>;
};

/**
 * Create issue
 * Creates a new issue or subtask.
 */
export async function createIssue(
	this: EndpointFunctionThis,
	payload: {
		input: CreateIssueInput;
		connectionId: number;
	},
): Promise<CreateIssueOutput> {
	const response = await this.endpointCaller<CreateIssueOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'createIssue',
		},
		payload,
	);
	return response.output;
}
