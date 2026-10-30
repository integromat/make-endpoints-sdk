// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateAContactFolderInput = {
	/**
	 * The folder's display name.
	 */
	displayName: string;
};

export type CreateAContactFolderOutput = {
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
 * Create a contact folder
 * Creates a contact folder.
 */
export async function createAcontactFolder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAContactFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateAContactFolderOutput> {
	const response = await this.endpointCaller<CreateAContactFolderOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'createAContactFolder',
		},
		payload,
	);
	return response.output;
}
