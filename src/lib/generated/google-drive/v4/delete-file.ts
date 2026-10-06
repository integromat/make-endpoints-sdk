// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFileInput = {
	/**
	 * The ID of the file to permanently delete.
	 */
	fileId: string;
};

export type DeleteFileOutput = Record<string, never>;

/**
 * Delete a file
 * Permanently deletes a file owned by the user without moving it to the trash.
 */
export async function deleteFile(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFileInput;
		connectionId: number;
	},
): Promise<DeleteFileOutput> {
	const response = await this.endpointCaller<DeleteFileOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'deleteFile',
		},
		payload,
	);
	return response.output;
}
