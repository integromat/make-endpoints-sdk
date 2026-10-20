// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFileInput = {
	/**
	 * The ID of the file to delete.
	 */
	fileId: string;
	/**
	 * When `true`, permanently deletes the file's content and metadata within seven days. When `false`, moves the file to Trash for up to 30 days.
	 */
	permanently: boolean;
};

export type DeleteFileOutput = Record<string, never>;

/**
 * Delete a file
 * Deletes a file normally or permanently.
 */
export async function deleteFile(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFileInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteFileOutput> {
	const response = await this.endpointCaller<DeleteFileOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteFile',
		},
		payload,
	);
	return response.output;
}
