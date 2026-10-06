// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFileInput = {
	/**
	 * ID of the file to delete.
	 */
	file: string;
};

export type DeleteFileOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Delete a file
 * Deletes a file.
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
			appName: 'slack',
			appVersion: 4,
			endpointName: 'deleteFile',
		},
		payload,
	);
	return response.output;
}
