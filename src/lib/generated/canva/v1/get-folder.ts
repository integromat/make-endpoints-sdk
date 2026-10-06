// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFolderInput = {
	/**
	 * The ID of the folder to retrieve.
	 */
	folderId: string;
};

export type GetFolderOutput = {
	/**
	 * The folder object.
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
 * Get a folder
 * Retrieves metadata for an existing folder.
 */
export async function getFolder(
	this: EndpointFunctionThis,
	payload: {
		input: GetFolderInput;
		connectionId: number;
	},
): Promise<GetFolderOutput> {
	const response = await this.endpointCaller<GetFolderOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'getFolder',
		},
		payload,
	);
	return response.output;
}
