// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAssetFoldersInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Number of folders to skip, for pagination.
	 */
	offset?: number;
	/**
	 * Maximum number of folders to return (max 100; Webflow defaults to 25 and caps larger values at 100).
	 */
	limit?: number;
};

export type ListAssetFoldersOutput = {
	/**
	 * A list of Asset folders.
	 *
	 * Items: Asset Folder details.
	 */
	assetFolders?: {
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
	}[];
	/**
	 * Pagination object.
	 */
	pagination?: {
		/**
		 * The limit used for pagination.
		 */
		limit?: number;
		/**
		 * The offset used for pagination.
		 */
		offset?: number;
		/**
		 * The total number of records.
		 */
		total?: number;
	};
};

/**
 * List asset folders
 * Lists the asset folders of a site.
 */
export async function listAssetFolders(
	this: EndpointFunctionThis,
	payload: {
		input: ListAssetFoldersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAssetFoldersOutput> {
	const response = await this.endpointCaller<ListAssetFoldersOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listAssetFolders',
		},
		payload,
	);
	return response.output;
}
