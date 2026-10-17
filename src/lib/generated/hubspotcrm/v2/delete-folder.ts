// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFolderInput = {
	/**
	 * The ID of the folder to archive.
	 */
	folderId: string;
};

export type DeleteFolderOutput = Record<string, never>;

/**
 * Delete a folder
 * Archives a file folder.
 */
export async function deleteFolder(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteFolderOutput> {
	const response = await this.endpointCaller<DeleteFolderOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteFolder',
		},
		payload,
	);
	return response.output;
}
