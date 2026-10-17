// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteRecordInput = {
	/**
	 * Script ID of the record type to delete, for example `customer` or `salesOrder`. Use the Get record definitions endpoint to confirm the item route accepts a `delete` operation — many record types cannot be deleted through REST web services, and some can only be made inactive instead.
	 */
	recordType: string;
	/**
	 * Internal ID of the record to delete, for example `2655`. Confirm you have the right record by reading it with the Get record endpoint first — this operation cannot be undone.
	 */
	recordId: string;
};

export type DeleteRecordOutput = {
	/**
	 * HTTP status code of the response. A successful delete returns 204, since NetSuite sends no response body.
	 */
	statusCode?: number;
	/**
	 * Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none.
	 */
	warning?: string;
};

/**
 * Delete a record
 * Permanently deletes a NetSuite record by its internal ID.
 */
export async function deleteRecord(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteRecordInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteRecordOutput> {
	const response = await this.endpointCaller<DeleteRecordOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'deleteRecord',
		},
		payload,
	);
	return response.output;
}
