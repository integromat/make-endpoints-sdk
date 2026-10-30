// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateAContactFolderInput = {
	/**
	 * The ID of the contact folder. Use the **List contact folders** endpoint to find it.
	 */
	contactFolder: string;
	/**
	 * The folder's display name.
	 */
	displayName?: string;
};

export type UpdateAContactFolderOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier of the contact folder.
	 */
	id?: string;
	/**
	 * The ID of the folder's parent folder.
	 */
	parentFolderId?: string;
	/**
	 * The folder's display name.
	 */
	displayName?: string;
};

/**
 * Update a contact folder
 * Updates the properties of a contact folder.
 */
export async function updateAcontactFolder(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateAContactFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateAContactFolderOutput> {
	const response = await this.endpointCaller<UpdateAContactFolderOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'updateAContactFolder',
		},
		payload,
	);
	return response.output;
}
