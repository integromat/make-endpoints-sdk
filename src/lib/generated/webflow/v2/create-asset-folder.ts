// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateAssetFolderInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * A human readable name for the Asset Folder.
	 */
	displayName: string;
	/**
	 * An (optional) pointer to a parent Asset Folder (or null for root).
	 */
	parentFolder?: string;
};

export type CreateAssetFolderOutput = {
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
 * Create an asset folder
 * Creates an asset folder in a site.
 */
export async function createAssetFolder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAssetFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateAssetFolderOutput> {
	const response = await this.endpointCaller<CreateAssetFolderOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'createAssetFolder',
		},
		payload,
	);
	return response.output;
}
