// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetIssueInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * A list of fields to return for the issue. Use `*all` to return all fields, `*navigable` for navigable fields only, a field name to include it, or `-fieldname` to exclude it. Leave empty to use the default (`*navigable`).
	 *
	 * Items: A field name, `*all`, `*navigable`, or `-fieldname` to exclude a field.
	 */
	fields?: string[];
	/**
	 * Whether fields in `Fields` are referenced by their key rather than their ID.
	 */
	fieldsByKeys?: boolean;
	/**
	 * Comma-separated list of extra details to include in the response, e.g. `renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations`.
	 */
	expand?: string;
	/**
	 * A list of issue properties to return. Use `*all` to return all issue properties, or a specific property key.
	 *
	 * Items: An issue property key, or `*all`.
	 */
	properties?: string[];
	/**
	 * Whether the project of the viewed issue is added to the user's **Recently viewed** project list.
	 */
	updateHistory?: boolean;
	/**
	 * Whether to fail the whole request if a single field fails to load.
	 */
	failFast?: boolean;
};

export type GetIssueOutput = {
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
	 * The values of the fields requested for the issue. Keys are field IDs (or keys, when `fieldsByKeys` is used); values vary by field type.
	 */
	fields?: Record<string, JSONValue>;
	/**
	 * The rendered (HTML) value of each field present on the issue, when `renderedFields` is requested via `expand`.
	 */
	renderedFields?: Record<string, JSONValue>;
	/**
	 * The issue properties requested via the `properties` parameter.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * The ID and name of each field present on the issue, when `names` is requested via `expand`.
	 */
	names?: Record<string, JSONValue>;
	/**
	 * The schema describing each field present on the issue, when `schema` is requested via `expand`.
	 */
	schema?: Record<string, JSONValue>;
	/**
	 * The operations that can be performed on the issue, when `operations` is requested via `expand`.
	 */
	operations?: Record<string, JSONValue>;
	/**
	 * The metadata for the fields on the issue that can be amended, when `editmeta` is requested via `expand`.
	 */
	editmeta?: Record<string, JSONValue>;
	/**
	 * The changelog of the issue, when `changelog` is requested via `expand`.
	 */
	changelog?: Record<string, JSONValue>;
	/**
	 * The versions of each field on the issue, when `versionedRepresentations` is requested via `expand`.
	 */
	versionedRepresentations?: Record<string, JSONValue>;
	/**
	 * Internal detail of which fields were included, excluded, or requested by keys.
	 */
	fieldsToInclude?: Record<string, JSONValue>;
};

/**
 * Get issue
 * Returns metadata for an issue.
 */
export async function getIssue(
	this: EndpointFunctionThis,
	payload: {
		input: GetIssueInput;
		connectionId: number;
	},
): Promise<GetIssueOutput> {
	const response = await this.endpointCaller<GetIssueOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getIssue',
		},
		payload,
	);
	return response.output;
}
