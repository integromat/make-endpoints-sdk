// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFolderInput = {
	/**
	 * The ID of the folder to delete.
	 */
	folderId: string;
};

export type DeleteFolderOutput = Record<string, never>;

/**
 * Delete a folder
 * Deletes a folder.
 */
export async function deleteFolder(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFolderInput;
		connectionId: number;
	},
): Promise<DeleteFolderOutput> {
	const response = await this.endpointCaller<DeleteFolderOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'deleteFolder',
		},
		payload,
	);
	return response.output;
}
