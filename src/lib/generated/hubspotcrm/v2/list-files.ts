// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFilesInput = {
	/**
	 * The next-page cursor; do not combine it with **Before**.
	 */
	after?: string;
	/**
	 * Whether anonymous access is allowed for the file.
	 */
	allowsAnonymousAccess?: boolean;
	/**
	 * The previous-page cursor; do not combine it with **After**.
	 */
	before?: string;
	/**
	 * The exact file creation date and time to match.
	 */
	createdAt?: string;
	/**
	 * The earliest file creation date and time to include.
	 */
	createdAtGte?: string;
	/**
	 * The latest file creation date and time to include.
	 */
	createdAtLte?: string;
	/**
	 * The file encoding to match.
	 */
	encoding?: string;
	/**
	 * The exact file expiration date and time to match.
	 */
	expiresAt?: string;
	/**
	 * The earliest file expiration date and time to include.
	 */
	expiresAtGte?: string;
	/**
	 * The latest file expiration date and time to include.
	 */
	expiresAtLte?: string;
	/**
	 * The file extension to match.
	 */
	extension?: string;
	/**
	 * The MD5 checksum to match.
	 */
	fileMd5?: string;
	/**
	 * The exact image height in pixels to match.
	 */
	height?: number;
	/**
	 * The minimum image height in pixels.
	 */
	heightGte?: number;
	/**
	 * The maximum image height in pixels.
	 */
	heightLte?: number;
	/**
	 * The lowest int64 file ID to include, represented as text.
	 */
	idGte?: string;
	/**
	 * The highest int64 file ID to include, represented as text.
	 */
	idLte?: string;
	/**
	 * The file IDs to include.
	 *
	 * Items: An int64 file ID represented as text.
	 */
	ids?: string[];
	/**
	 * Whether the file can be used in HubSpot content.
	 */
	isUsableInContent?: boolean;
	/**
	 * The maximum number of files to return in this page, up to 100.
	 */
	limit?: number;
	/**
	 * The file name to match.
	 */
	name?: string;
	/**
	 * The parent folder IDs to include.
	 *
	 * Items: An int64 parent folder ID represented as text.
	 */
	parentFolderIds?: string[];
	/**
	 * The file path to match.
	 */
	path?: string;
	/**
	 * Additional file properties to include.
	 *
	 * Items: An additional file property to return.
	 */
	properties?: string[];
	/**
	 * The exact file size in bytes to match.
	 */
	size?: number;
	/**
	 * The minimum file size in bytes.
	 */
	sizeGte?: number;
	/**
	 * The maximum file size in bytes.
	 */
	sizeLte?: number;
	/**
	 * The ordered sort expressions to apply.
	 *
	 * Items: A field and direction used to sort results.
	 */
	sort?: string[];
	/**
	 * The file type to match.
	 */
	type?: string;
	/**
	 * The exact file update date and time to match.
	 */
	updatedAt?: string;
	/**
	 * The earliest file update date and time to include.
	 */
	updatedAtGte?: string;
	/**
	 * The latest file update date and time to include.
	 */
	updatedAtLte?: string;
	/**
	 * The file URL to match.
	 */
	url?: string;
	/**
	 * The exact image width in pixels to match.
	 */
	width?: number;
	/**
	 * The minimum image width in pixels.
	 */
	widthGte?: number;
	/**
	 * The maximum image width in pixels.
	 */
	widthLte?: number;
};

export type ListFilesOutput = {
	/**
	 * The files returned in this page.
	 *
	 * Items: A HubSpot file record.
	 */
	results?: {
		/**
		 * The file access setting.
		 */
		access?: string;
		/**
		 * Whether the file is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the file was archived.
		 */
		archivedAt?: string;
		/**
		 * The date and time when the file was created.
		 */
		createdAt?: string;
		/**
		 * The file's default hosted URL.
		 */
		defaultHostingUrl?: string;
		/**
		 * The file encoding.
		 */
		encoding?: string;
		/**
		 * The file expiration timestamp returned by HubSpot.
		 */
		expiresAt?: number;
		/**
		 * The file extension.
		 */
		extension?: string;
		/**
		 * The file's MD5 checksum.
		 */
		fileMd5?: string;
		/**
		 * The image height in pixels.
		 */
		height?: number;
		/**
		 * The int64 file ID represented as text.
		 */
		id?: string;
		/**
		 * Whether the file can be used in HubSpot content.
		 */
		isUsableInContent?: boolean;
		/**
		 * The file name.
		 */
		name?: string;
		/**
		 * The int64 parent folder ID represented as text.
		 */
		parentFolderId?: string;
		/**
		 * The file path.
		 */
		path?: string;
		/**
		 * The file size in bytes.
		 */
		size?: number;
		/**
		 * The file's source group.
		 */
		sourceGroup?: string;
		/**
		 * The file type.
		 */
		type?: string;
		/**
		 * The date and time when the file was last updated.
		 */
		updatedAt?: string;
		/**
		 * The file URL.
		 */
		url?: string;
		/**
		 * The image width in pixels.
		 */
		width?: number;
	}[];
	/**
	 * Cursor information for adjacent pages.
	 */
	paging?: {
		/**
		 * Information for requesting the next page.
		 */
		next?: {
			/**
			 * The next-page cursor.
			 */
			after?: string;
			/**
			 * The URL for the next page.
			 */
			link?: string;
		};
		/**
		 * Information for requesting the previous page.
		 */
		prev?: {
			/**
			 * The previous-page cursor.
			 */
			before?: string;
			/**
			 * The URL for the previous page.
			 */
			link?: string;
		};
	};
};

/**
 * List files
 * Searches HubSpot files using the documented 2026-03 filters and returns one response page.
 */
export async function listFiles(
	this: EndpointFunctionThis,
	payload: {
		input: ListFilesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListFilesOutput> {
	const response = await this.endpointCaller<ListFilesOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listFiles',
		},
		payload,
	);
	return response.output;
}
