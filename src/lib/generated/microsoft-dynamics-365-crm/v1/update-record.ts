// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateRecordInput = {
	/**
	 * The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.
	 */
	entitySetName: string;
	/**
	 * The ID (GUID) of the record to update.
	 */
	id: string;
	/**
	 * A JSON object with only the columns to change, for example `{"name": "New name"}`. Bind lookups with `<navigationproperty>@odata.bind`. When you change `statecode`, also set `statuscode`. See [Update and delete table rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api).
	 */
	record: Record<string, JSONValue>;
};

export type UpdateRecordOutput = Record<string, never>;

/**
 * Update a record
 * Updates an existing record in a Dataverse table.
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
			appName: 'microsoft-dynamics-365-crm',
			appVersion: 1,
			endpointName: 'updateRecord',
		},
		payload,
	);
	return response.output;
}
