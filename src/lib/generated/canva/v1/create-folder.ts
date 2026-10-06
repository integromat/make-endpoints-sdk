// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateFolderInput = {
	/**
	 * The name of the folder. Must be between 1 and 255 characters.
	 */
	name: string;
	/**
	 * The folder ID of the parent folder. Use `root` for the top level of a user's projects, or `uploads` for the Uploads folder.
	 */
	parent_folder_id: string;
};

export type CreateFolderOutput = {
	/**
	 * The created folder object.
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
 * Create a folder
 * Creates a new folder.
 */
export async function createFolder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFolderInput;
		connectionId: number;
	},
): Promise<CreateFolderOutput> {
	const response = await this.endpointCaller<CreateFolderOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'createFolder',
		},
		payload,
	);
	return response.output;
}
