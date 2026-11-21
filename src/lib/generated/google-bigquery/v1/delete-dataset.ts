// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteDatasetInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the dataset.
	 */
	datasetId: string;
	/**
	 * If `true`, delete all the tables in the dataset. If `false` and the dataset contains tables, the request fails. Default is `false`.
	 */
	deleteContents?: boolean;
};

export type DeleteDatasetOutput = Record<string, never>;

/**
 * Delete a dataset
 * Deletes the dataset specified by dataset ID.
 */
export async function deleteDataset(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteDatasetInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteDatasetOutput> {
	const response = await this.endpointCaller<DeleteDatasetOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'deleteDataset',
		},
		payload,
	);
	return response.output;
}
