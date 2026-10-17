// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateRecordInput = {
	/**
	 * Salesforce object API name. For example, `Account`, `Contact`, or `Lead`. Letters, digits, and underscores only; other characters are removed. Use Describe an object to see which fields are createable.
	 */
	sObject: string;
	/**
	 * JSON object of field API names and values to set on the new record. For example, `{"LastName": "Smith", "Email": "smith@example.com"}` for a Contact. Do not include `Id`.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * Whether Salesforce assignment rules run for this record. Leave empty to use the org default. `Yes` sends `Sforce-Auto-Assign: TRUE`. `No` sends `FALSE`.
	 */
	autoAssign?: '' | 'TRUE' | 'FALSE';
};

export type CreateRecordOutput = {
	/**
	 * ID of the record Salesforce created.
	 */
	id?: string;
	/**
	 * Whether Salesforce created the record.
	 */
	success?: boolean;
	/**
	 * Errors returned by Salesforce. Empty on success.
	 *
	 * Items: One Salesforce error object.
	 */
	errors?: Record<string, JSONValue>[];
};

/**
 * Create a record
 * Creates a new record in an object.
 */
export async function createRecord(
	this: EndpointFunctionThis,
	payload: {
		input: CreateRecordInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateRecordOutput> {
	const response = await this.endpointCaller<CreateRecordOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'createRecord',
		},
		payload,
	);
	return response.output;
}
