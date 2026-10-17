// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetRecordInput = {
	/**
	 * Salesforce object API name. For example, `Account`, `Contact`, or `Lead`. Letters, digits, and underscores only; other characters are removed. Use List object types to discover names.
	 */
	sObject: string;
	/**
	 * Salesforce record Id, 15 or 18 letters and digits. Other characters are removed. For example, `001xx000003DGb2AAG`.
	 */
	recordId: string;
};

export type GetRecordOutput = {
	/**
	 * Number of records the query matched.
	 */
	totalSize?: number;
	/**
	 * Whether this is the last page of results.
	 */
	done?: boolean;
	/**
	 * Path for the next page, when present.
	 */
	nextRecordsUrl?: string;
	/**
	 * Matching Salesforce records, including their attributes metadata.
	 *
	 * Items: One Salesforce record with attributes metadata and object-specific fields.
	 */
	records?: Record<string, JSONValue>[];
};

/**
 * Get a record
 * Returns information about a specific record by its record ID.
 */
export async function getRecord(
	this: EndpointFunctionThis,
	payload: {
		input: GetRecordInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetRecordOutput> {
	const response = await this.endpointCaller<GetRecordOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'getRecord',
		},
		payload,
	);
	return response.output;
}
