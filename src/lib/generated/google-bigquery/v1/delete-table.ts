// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteTableInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the dataset.
	 */
	datasetId: string;
	/**
	 * The ID of the table.
	 */
	tableId: string;
};

export type DeleteTableOutput = Record<string, never>;

/**
 * Delete a table
 * Deletes the table specified by table ID. If the table contains data, all the data is deleted.
 */
export async function deleteTable(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteTableInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteTableOutput> {
	const response = await this.endpointCaller<DeleteTableOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'deleteTable',
		},
		payload,
	);
	return response.output;
}
