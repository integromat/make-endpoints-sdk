// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpsertRecordInput = {
	/**
	 * Salesforce object API name. For example, Account or Contact. Letters, digits, and underscores only; other characters are removed. Use Describe an object and keep a field whose externalId flag is true.
	 */
	sObject: string;
	/**
	 * API name of the external ID field used to match the record. For example, External_Id__c. The field must be marked as an external ID on the object. Letters, digits, and underscores only; other characters are removed.
	 */
	fieldName: string;
	/**
	 * Value of the external ID field to match. Salesforce updates the record when one match exists, and creates a record when none exists. More than one match returns an error and changes nothing. A `/` is removed.
	 */
	externalId: string;
	/**
	 * JSON object of field API names and values to write. Do not include the external ID field in this object; it is taken from External ID. For example, {"Name": "Acme"}.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * Whether Salesforce assignment rules run for this record. Leave empty to use the org default. Yes sends Sforce-Auto-Assign TRUE. No sends FALSE.
	 */
	autoAssign?: '' | 'TRUE' | 'FALSE';
};

export type UpsertRecordOutput = {
	/**
	 * ID of the record Salesforce created or updated.
	 */
	id?: string;
	/**
	 * Whether Salesforce processed the upsert successfully.
	 */
	success?: boolean;
	/**
	 * Whether Salesforce created a new record instead of updating an existing record.
	 */
	created?: boolean;
	/**
	 * Errors returned by Salesforce. Empty on success.
	 *
	 * Items: One Salesforce error object.
	 */
	errors?: Record<string, JSONValue>[];
};

/**
 * Create or update a record
 * Creates a new record or updates an existing one matched by an external ID.
 */
export async function upsertRecord(
	this: EndpointFunctionThis,
	payload: {
		input: UpsertRecordInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpsertRecordOutput> {
	const response = await this.endpointCaller<UpsertRecordOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'upsertRecord',
		},
		payload,
	);
	return response.output;
}
