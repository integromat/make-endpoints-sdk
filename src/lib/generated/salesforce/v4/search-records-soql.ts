// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchRecordsSoqlInput = {
	/**
	 * Whether to include deleted and archived records. When enabled, the call uses /queryAll instead of /query. Permanently deleted records cannot be retrieved.
	 */
	includeDeleted?: boolean;
	/**
	 * A SOQL query to run. For example, SELECT Id, Name FROM Account ORDER BY Name LIMIT 10. Include LIMIT and ORDER BY yourself. This endpoint returns one page. To get the next page, call Arbitrary call with the Next records URL from the response.
	 */
	query: string;
};

export type SearchRecordsSoqlOutput = {
	/**
	 * Number of records the query matched.
	 */
	totalSize?: number;
	/**
	 * Whether this is the last page of results.
	 */
	done?: boolean;
	/**
	 * Path for the next page, when present. To get the next page, call Arbitrary call with GET and this value as URL, unchanged.
	 */
	nextRecordsUrl?: string;
	/**
	 * Salesforce records returned on this page, including attributes metadata.
	 *
	 * Items: One Salesforce record with attributes metadata and query-selected fields.
	 */
	records?: Record<string, JSONValue>[];
};

/**
 * Search records (SOQL)
 * Returns a list of records using a SOQL query.
 */
export async function searchRecordsSoql(
	this: EndpointFunctionThis,
	payload: {
		input: SearchRecordsSoqlInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchRecordsSoqlOutput> {
	const response = await this.endpointCaller<SearchRecordsSoqlOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'searchRecordsSoql',
		},
		payload,
	);
	return response.output;
}
