// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteRecordInput = {
	/**
	 * The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.
	 */
	entitySetName: string;
	/**
	 * The ID (GUID) of the record to delete.
	 */
	id: string;
};

export type DeleteRecordOutput = Record<string, never>;

/**
 * Delete a record
 * Deletes a record from a Dataverse table.
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
			appName: 'microsoft-dynamics-365-crm',
			appVersion: 1,
			endpointName: 'deleteRecord',
		},
		payload,
	);
	return response.output;
}
