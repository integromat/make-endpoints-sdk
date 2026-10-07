// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchIssuesInput = {
	/**
	 * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. Must include a bounded search restriction (e.g. a `project`, `assignee`, or date clause) — unbounded queries are rejected for performance reasons.
	 */
	jql: string;
	/**
	 * Token for the page to fetch, taken from a previous response's `Next page token` output. Omit to fetch the first page.
	 */
	nextPageToken?: string;
	/**
	 * The maximum number of issues to return per page. The API may return fewer than requested when many fields or properties are requested.
	 */
	maxResults?: number;
	/**
	 * A list of fields to return for each issue. Use `*all` to return all fields, `*navigable` for navigable fields only, a field name to include it, or `-fieldname` to exclude it.
	 *
	 * Items: A field name, `*all`, `*navigable`, or `-fieldname` to exclude a field.
	 */
	fields?: string[];
	/**
	 * Comma-delimited list of extra details to include in the response, e.g. `names,schema,transitions,renderedFields`.
	 */
	expand?: string;
	/**
	 * Up to 5 issue properties to include in the results.
	 *
	 * Items: An issue property key.
	 */
	properties?: string[];
	/**
	 * Whether fields in `Fields` are referenced by their key rather than their ID.
	 */
	fieldsByKeys?: boolean;
	/**
	 * Whether to fail the whole request early if not all field data can be retrieved.
	 */
	failFast?: boolean;
	/**
	 * Up to 50 issue IDs requiring strong consistency, to be reconciled with the search results. Must be consistent across paginated requests.
	 *
	 * Items: An issue ID to reconcile.
	 */
	reconcileIssues?: string[];
	/**
	 * Whether to also return issues that belong to archived projects. Excluded by default.
	 */
	includeArchivedProjects?: boolean;
};

export type SearchIssuesOutput = {
	/**
	 * Whether this is the last page of the paginated response.
	 */
	isLast?: boolean;
	/**
	 * The list of issues found by the search.
	 *
	 * Items: An issue matching the search.
	 */
	issues?: {
		/**
		 * The ID of the issue.
		 */
		id?: string;
		/**
		 * The key of the issue.
		 */
		key?: string;
		/**
		 * The URL of the issue.
		 */
		self?: string;
		/**
		 * Expand options that were included in the response.
		 */
		expand?: string;
		/**
		 * The values of the fields requested for the issue. Keys are field IDs (or keys); values vary by field type.
		 */
		fields?: Record<string, JSONValue>;
	}[];
	/**
	 * The ID and name of each field in the search results, when `names` is requested via `expand`.
	 */
	names?: Record<string, JSONValue>;
	/**
	 * Token to fetch the next page. Absent or null when this is the last page.
	 */
	nextPageToken?: string;
	/**
	 * The schema describing the field types in the search results, when `schema` is requested via `expand`.
	 */
	schema?: Record<string, JSONValue>;
	/**
	 * Warnings generated during the search, e.g. when a JQL clause exceeded its argument limit.
	 *
	 * Items: A warning message.
	 */
	warnings?: string[];
};

/**
 * Search issues
 * Searches for issues using JQL.
 */
export async function searchIssues(
	this: EndpointFunctionThis,
	payload: {
		input: SearchIssuesInput;
		connectionId: number;
	},
): Promise<SearchIssuesOutput> {
	const response = await this.endpointCaller<SearchIssuesOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'searchIssues',
		},
		payload,
	);
	return response.output;
}
