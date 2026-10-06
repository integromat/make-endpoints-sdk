// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateFolderInput = {
	/**
	 * The ID of the folder to update.
	 */
	folderId: string;
	/**
	 * The new name for the folder. Must be between 1 and 255 characters.
	 */
	name: string;
};

export type UpdateFolderOutput = {
	/**
	 * The updated folder object.
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
		 * When the folder was created, as a Unix timestamp (in seconds).
		 */
		created_at?: number;
		/**
		 * When the folder was last updated, as a Unix timestamp (in seconds).
		 */
		updated_at?: number;
		/**
		 * A thumbnail image representing the folder.
		 */
		thumbnail?: {
			/**
			 * The width of the thumbnail image in pixels.
			 */
			width?: number;
			/**
			 * The height of the thumbnail image in pixels.
			 */
			height?: number;
			/**
			 * A URL for retrieving the thumbnail image. Expires after 15 minutes.
			 */
			url?: string;
		};
	};
};

/**
 * Update a folder
 * Updates a folder's metadata.
 */
export async function updateFolder(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFolderInput;
		connectionId: number;
	},
): Promise<UpdateFolderOutput> {
	const response = await this.endpointCaller<UpdateFolderOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'updateFolder',
		},
		payload,
	);
	return response.output;
}
