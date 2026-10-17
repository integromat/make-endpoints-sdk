// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteRecordInput = {
	/**
	 * Salesforce object API name of the record to delete. For example, Account or Contact. Letters, digits, and underscores only; other characters are removed.
	 */
	sObject: string;
	/**
	 * Salesforce record Id to delete, 15 or 18 letters and digits. Other characters are removed. This permanently deletes the record or moves it to the Recycle Bin, depending on the object.
	 */
	recordId: string;
};

export type DeleteRecordOutput = Record<string, never>;

/**
 * Delete a record
 * Deletes a record.
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
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'deleteRecord',
		},
		payload,
	);
	return response.output;
}
