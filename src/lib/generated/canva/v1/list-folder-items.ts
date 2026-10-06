// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFolderItemsInput = {
	/**
	 * The ID of the folder whose items to list.
	 */
	folderId: string;
	/**
	 * Filter the items by type.
	 */
	item_types?: '' | 'design' | 'folder' | 'image' | 'video';
	/**
	 * Sort the items by a specific field.
	 */
	sort_by?: '' | 'created_at' | 'updated_at' | 'name';
	/**
	 * The sort order for the results.
	 */
	sort_order?: '' | 'ascending' | 'descending';
	/**
	 * A continuation token for paginating through results. Pass the value from the previous response to get the next page.
	 */
	continuation?: string;
};

export type ListFolderItemsOutput = {
	/**
	 * The list of items in the folder.
	 *
	 * Items: A folder item.
	 */
	items?: {
		/**
		 * The type of the item.
		 */
		type?: string;
		/**
		 * The ID of the design (when type is `design`).
		 */
		design?: {
			/**
			 * The design ID.
			 */
			id?: string;
			/**
			 * A URL for the design.
			 */
			url?: string;
			/**
			 * A thumbnail for the design.
			 */
			thumbnail?: {
				/**
				 * Width in pixels.
				 */
				width?: number;
				/**
				 * Height in pixels.
				 */
				height?: number;
				/**
				 * Thumbnail URL. Expires after 15 minutes.
				 */
				url?: string;
			};
			/**
			 * When the design was created, as a Unix timestamp (in seconds).
			 */
			created_at?: number;
			/**
			 * When the design was last updated, as a Unix timestamp (in seconds).
			 */
			updated_at?: number;
		};
		/**
		 * The folder data (when type is `folder`).
		 */
		folder?: {
			/**
			 * The folder ID.
			 */
			id?: string;
			/**
			 * The folder name.
			 */
			name?: string;
			/**
			 * When the folder was created.
			 */
			created_at?: number;
			/**
			 * When the folder was last updated.
			 */
			updated_at?: number;
			/**
			 * A thumbnail for the folder.
			 */
			thumbnail?: {
				/**
				 * Width in pixels.
				 */
				width?: number;
				/**
				 * Height in pixels.
				 */
				height?: number;
				/**
				 * Thumbnail URL.
				 */
				url?: string;
			};
		};
		/**
		 * The image/video asset data.
		 */
		asset?: {
			/**
			 * The asset ID.
			 */
			id?: string;
			/**
			 * The asset name.
			 */
			name?: string;
			/**
			 * When the asset was created.
			 */
			created_at?: number;
			/**
			 * When the asset was last updated.
			 */
			updated_at?: number;
			/**
			 * A thumbnail for the asset.
			 */
			thumbnail?: {
				/**
				 * Width in pixels.
				 */
				width?: number;
				/**
				 * Height in pixels.
				 */
				height?: number;
				/**
				 * Thumbnail URL.
				 */
				url?: string;
			};
		};
	}[];
	/**
	 * A continuation token. Pass this to the `continuation` input parameter to get the next page of results. Empty when there are no more items.
	 */
	continuation?: string;
};

/**
 * List folder items
 * Lists items in a folder.
 */
export async function listFolderItems(
	this: EndpointFunctionThis,
	payload: {
		input: ListFolderItemsInput;
		connectionId: number;
	},
): Promise<ListFolderItemsOutput> {
	const response = await this.endpointCaller<ListFolderItemsOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'listFolderItems',
		},
		payload,
	);
	return response.output;
}
