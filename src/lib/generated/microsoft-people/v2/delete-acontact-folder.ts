// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAContactFolderInput = {
	/**
	 * The ID of the contact folder. Use the **List contact folders** endpoint to find it.
	 */
	contactFolder: string;
};

export type DeleteAContactFolderOutput = Record<string, never>;

/**
 * Delete a contact folder
 * Deletes a contact folder.
 */
export async function deleteAcontactFolder(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAContactFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAContactFolderOutput> {
	const response = await this.endpointCaller<DeleteAContactFolderOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'deleteAContactFolder',
		},
		payload,
	);
	return response.output;
}
