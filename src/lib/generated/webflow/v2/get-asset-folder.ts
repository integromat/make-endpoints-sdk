// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAssetFolderInput = {
	/**
	 * Unique identifier for an asset folder. Use the `listAssetFolders` endpoint to find it.
	 */
	asset_folder_id: string;
};

export type GetAssetFolderOutput = {
	/**
	 * Unique identifier for the Asset Folder.
	 */
	id?: string;
	/**
	 * User visible name for the Asset Folder.
	 */
	displayName?: string;
	/**
	 * Pointer to parent Asset Folder (or null if root).
	 */
	parentFolder?: string;
	/**
	 * IDs of the assets in the folder.
	 *
	 * Items: ID of an asset in the folder.
	 */
	assets?: string[];
	/**
	 * The unique ID of the site the Asset Folder belongs to.
	 */
	siteId?: string;
	/**
	 * Date that the Asset Folder was created on.
	 */
	createdOn?: string;
	/**
	 * Date that the Asset Folder was last updated on.
	 */
	lastUpdated?: string;
};

/**
 * Get an asset folder
 * Returns the details of an asset folder.
 */
export async function getAssetFolder(
	this: EndpointFunctionThis,
	payload: {
		input: GetAssetFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetAssetFolderOutput> {
	const response = await this.endpointCaller<GetAssetFolderOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'getAssetFolder',
		},
		payload,
	);
	return response.output;
}
