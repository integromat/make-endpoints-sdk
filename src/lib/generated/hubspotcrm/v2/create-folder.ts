// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateFolderInput = {
	/**
	 * Name of the new folder.
	 */
	name: string;
	/**
	 * ID of the existing parent folder. Do not provide this together with `parentFolderPath`; leave both parent fields empty to create the folder at the root level.
	 */
	parentFolderId?: string;
	/**
	 * Path of the existing parent folder. Do not provide this together with `parentFolderId`; leave both parent fields empty to create the folder at the root level.
	 */
	parentFolderPath?: string;
};

export type CreateFolderOutput = {
	/**
	 * Folder ID.
	 */
	id?: string;
	/**
	 * Date and time when the folder was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the folder was archived.
	 */
	archivedAt?: string;
	/**
	 * Date and time when the folder was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the folder is archived.
	 */
	archived?: boolean;
	/**
	 * ID of the parent folder.
	 */
	parentFolderId?: string;
	/**
	 * Folder name.
	 */
	name?: string;
	/**
	 * Folder path in HubSpot's file manager.
	 */
	path?: string;
};

/**
 * Create a folder
 * Creates a new file folder, optionally nested inside a parent folder.
 */
export async function createFolder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateFolderOutput> {
	const response = await this.endpointCaller<CreateFolderOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createFolder',
		},
		payload,
	);
	return response.output;
}
