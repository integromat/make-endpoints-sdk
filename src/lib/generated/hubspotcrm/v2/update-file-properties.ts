// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateFilePropertiesInput = {
	/**
	 * Numeric ID of the file to update. Enter digits only.
	 */
	fileId: string;
	/**
	 * New file name. Omit it to leave the current name unchanged.
	 */
	name?: string;
	/**
	 * Numeric ID of the destination folder. Do not provide Parent folder path in the same request.
	 */
	parentFolderId?: string;
	/**
	 * Path of the destination folder. Do not provide Parent folder ID in the same request.
	 */
	parentFolderPath?: string;
	/**
	 * New file visibility and indexing level. Omit it to leave the current access unchanged.
	 */
	access?:
		| ''
		| 'HIDDEN_INDEXABLE'
		| 'HIDDEN_NOT_INDEXABLE'
		| 'HIDDEN_PRIVATE'
		| 'HIDDEN_SENSITIVE'
		| 'PRIVATE'
		| 'PUBLIC_INDEXABLE'
		| 'PUBLIC_NOT_INDEXABLE'
		| 'SENSITIVE';
	/**
	 * Date and time when the file should expire. Omit it to leave the current expiration unchanged.
	 */
	expiresAt?: string;
	/**
	 * Set to true to remove the file's current expiration. False is preserved when explicitly provided.
	 */
	clearExpires?: boolean;
	/**
	 * Whether the file can be used in HubSpot content. False is preserved when explicitly provided.
	 */
	isUsableInContent?: boolean;
};

export type UpdateFilePropertiesOutput = {
	/**
	 * Unique numeric ID of the file.
	 */
	id: string;
	/**
	 * Date and time when the file was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the file was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Date and time when the file was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the file is archived.
	 */
	archived: boolean;
	/**
	 * ID of the folder that contains the file.
	 */
	parentFolderId?: string;
	/**
	 * Current file name.
	 */
	name?: string;
	/**
	 * Current path in HubSpot's file manager.
	 */
	path?: string;
	/**
	 * File size in bytes.
	 */
	size?: number;
	/**
	 * File height in pixels for supported visual media.
	 */
	height?: number;
	/**
	 * File width in pixels for supported visual media.
	 */
	width?: number;
	/**
	 * Character encoding, when available.
	 */
	encoding?: string;
	/**
	 * HubSpot file type: IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
	 */
	type?: string;
	/**
	 * File extension without the leading period.
	 */
	extension?: string;
	/**
	 * Default HubSpot-hosted URL for the file.
	 */
	defaultHostingUrl?: string;
	/**
	 * Current URL used to access the file.
	 */
	url?: string;
	/**
	 * Whether the file can be used in HubSpot content.
	 */
	isUsableInContent?: boolean;
	/**
	 * Current file visibility and indexing level.
	 */
	access: string;
	/**
	 * HubSpot product area that owns the file: CONTENT, CONVERSATIONS, FORMS, UI_EXTENSIONS, or UNKNOWN.
	 */
	sourceGroup?: string;
	/**
	 * MD5 checksum of the file contents.
	 */
	fileMd5?: string;
	/**
	 * File expiration timestamp in milliseconds since the Unix epoch, when configured.
	 */
	expiresAt?: number;
};

/**
 * Update file properties
 * Updates a file's name, folder location, access permissions, expiration, or content usability.
 */
export async function updateFileProperties(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFilePropertiesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateFilePropertiesOutput> {
	const response = await this.endpointCaller<UpdateFilePropertiesOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateFileProperties',
		},
		payload,
	);
	return response.output;
}
