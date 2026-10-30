// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetRecordInput = {
	/**
	 * The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.
	 */
	entitySetName: string;
	/**
	 * The ID (GUID) of the record.
	 */
	id: string;
	/**
	 * A comma-separated list of columns to return, for example `name,revenue`. Sent as `$select`. If empty, all columns are returned.
	 */
	select?: string;
	/**
	 * A comma-separated list of navigation properties to expand. Sent as `$expand`.
	 */
	expand?: string;
};

export type GetRecordOutput = Record<string, never>;

/**
 * Get a record
 * Retrieves a record from a Dataverse table by its ID.
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
			appName: 'microsoft-dynamics-365-crm',
			appVersion: 1,
			endpointName: 'getRecord',
		},
		payload,
	);
	return response.output;
}
