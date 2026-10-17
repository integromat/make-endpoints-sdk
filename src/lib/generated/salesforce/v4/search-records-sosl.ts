// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchRecordsSoslInput = {
	/**
	 * A SOSL query to run. For example, `FIND {Acme} IN NAME FIELDS RETURNING Account(Id, Name)`. The `RETURNING` clause decides which objects and fields come back.
	 */
	query: string;
};

export type SearchRecordsSoslOutput = {
	/**
	 * Salesforce records that matched the SOSL query, including attributes metadata.
	 *
	 * Items: One Salesforce record with attributes metadata and SOSL-selected fields.
	 */
	searchRecords?: Record<string, JSONValue>[];
};

/**
 * Search records (SOSL)
 * Returns a list of records using a SOSL query.
 */
export async function searchRecordsSosl(
	this: EndpointFunctionThis,
	payload: {
		input: SearchRecordsSoslInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchRecordsSoslOutput> {
	const response = await this.endpointCaller<SearchRecordsSoslOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'searchRecordsSosl',
		},
		payload,
	);
	return response.output;
}
