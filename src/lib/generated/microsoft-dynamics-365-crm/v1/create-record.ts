// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateRecordInput = {
	/**
	 * The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.
	 */
	entitySetName: string;
	/**
	 * A JSON object of column logical names and values, for example `{"name": "Contoso"}`. Bind lookups with `<navigationproperty>@odata.bind` set to `/<entitysetname>(<id>)`. Related records can be created in the same request (deep insert) by nesting objects. See [Create a table row](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/create-entity-web-api).
	 */
	record: Record<string, JSONValue>;
	/**
	 * If `true`, duplicate detection runs for the request (sent as `MSCRM.SuppressDuplicateDetection: false`). By default, duplicate detection is suppressed. It only applies if duplicate detection is enabled for the organization and the table.
	 */
	detectDuplicates?: boolean;
	/**
	 * A comma-separated list of columns to return for the created record. Sent as `$select`.
	 */
	select?: string;
	/**
	 * A comma-separated list of navigation properties to expand in the returned record. Sent as `$expand`.
	 */
	expand?: string;
};

export type CreateRecordOutput = Record<string, never>;

/**
 * Create a record
 * Creates a new record in a Dataverse table and returns it.
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
			appName: 'microsoft-dynamics-365-crm',
			appVersion: 1,
			endpointName: 'createRecord',
		},
		payload,
	);
	return response.output;
}
