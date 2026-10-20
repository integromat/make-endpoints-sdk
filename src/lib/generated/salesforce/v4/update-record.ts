// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateRecordInput = {
	/**
	 * Salesforce object API name. For example, `Account`, `Contact`, or `Lead`. Letters, digits, and underscores only; other characters are removed. Use Describe an object to see which fields are updateable.
	 */
	sObject: string;
	/**
	 * Salesforce record Id of the record to update, 15 or 18 letters and digits. Other characters are removed.
	 */
	recordId: string;
	/**
	 * JSON object of field API names and values to change. Only the fields you send are updated. For example, `{"Phone": "555-0100"}`.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * Whether Salesforce assignment rules run for this record. Leave empty to use the org default. `Yes` sends `Sforce-Auto-Assign: TRUE`. `No` sends `FALSE`.
	 */
	autoAssign?: '' | 'TRUE' | 'FALSE';
};

export type UpdateRecordOutput = Record<string, never>;

/**
 * Update a record
 * Updates an existing record in an object.
 */
export async function updateRecord(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateRecordInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateRecordOutput> {
	const response = await this.endpointCaller<UpdateRecordOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'updateRecord',
		},
		payload,
	);
	return response.output;
}
