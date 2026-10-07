// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateIssueInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * List of issue screen fields to update, as a JSON object mapping field ID (or key) to its new value, e.g. `{"summary": "Updated summary"}`. Perform a GET first to see current values, since omitted fields are left unchanged (this is a partial update, not a replace).
	 */
	fields?: Record<string, JSONValue>;
	/**
	 * A JSON object mapping field name to a list of field modification operations (`add`, `set`, `remove`), e.g. `{"labels": [{"add": "triaged"}]}`. Fields present in both `Fields` and `Update` are rejected by the API.
	 */
	update?: Record<string, JSONValue>;
	/**
	 * Additional issue history details to record with this change, as a JSON object (`type`, `description`, `activityDescription`, `actor`, `generator`, `cause`, `extraData`, etc.).
	 */
	historyMetadata?: Record<string, JSONValue>;
	/**
	 * Issue properties to add or update on the issue.
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
	 * Whether a notification email about the update is sent to all watchers. Requires *Administer Jira* or *Administer projects* permission to disable.
	 */
	notifyUsers?: boolean;
	/**
	 * Whether screen security is overridden to enable hidden fields to be edited. Available only to Connect/Forge apps with the *Administer Jira* global permission.
	 */
	overrideScreenSecurity?: boolean;
	/**
	 * Whether screen security is overridden to enable uneditable fields to be edited. Available only to Connect/Forge apps with the *Administer Jira* global permission.
	 */
	overrideEditableFlag?: boolean;
	/**
	 * Whether the response should contain the updated issue, in the same format as the [Get issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get) API.
	 */
	returnIssue?: boolean;
	/**
	 * The Get issue API `expand` parameter to use in the response, when `Return issue` is enabled.
	 */
	expand?: string;
};

export type UpdateIssueOutput = {
	/**
	 * The ID of the issue. Only present when `Return issue` is enabled.
	 */
	id?: string;
	/**
	 * The key of the issue. Only present when `Return issue` is enabled.
	 */
	key?: string;
	/**
	 * The URL of the issue. Only present when `Return issue` is enabled.
	 */
	self?: string;
	/**
	 * The values of the issue's fields. Only present when `Return issue` is enabled.
	 */
	fields?: Record<string, JSONValue>;
};

/**
 * Update issue
 * Updates fields of an issue.
 */
export async function updateIssue(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateIssueInput;
		connectionId: number;
	},
): Promise<UpdateIssueOutput> {
	const response = await this.endpointCaller<UpdateIssueOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'updateIssue',
		},
		payload,
	);
	return response.output;
}
