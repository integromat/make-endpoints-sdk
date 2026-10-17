// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ImportFileFromUrlInput = {
	/**
	 * Enter the publicly accessible URL of the file HubSpot should import.
	 */
	url: string;
	/**
	 * Select the file's visibility and indexing level. Defaults safely to Public not indexable when omitted.
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
	 * Enter the destination folder ID. Either **Folder ID** or **Folder path** is required; do not provide both.
	 */
	folderId?: string;
	/**
	 * Enter the destination folder path. Either **Folder path** or **Folder ID** is required; do not provide both.
	 */
	folderPath?: string;
	/**
	 * Enter a name for the imported file. Leave empty to let HubSpot derive it from the source.
	 */
	name?: string;
	/**
	 * Choose whether to overwrite a matching file. Overwriting creates a new file ID; an explicit false value is preserved.
	 */
	overwrite?: boolean;
	/**
	 * Enter the absolute date and time when the imported file should expire.
	 */
	expiresAt?: string;
	/**
	 * Enter HubSpot's relative time-to-live value for the imported file. Leave empty for no relative expiration.
	 */
	ttl?: string;
	/**
	 * Select whether HubSpot checks for duplicate files across the entire portal or only the exact destination folder.
	 */
	duplicateValidationScope?: '' | 'ENTIRE_PORTAL' | 'EXACT_FOLDER';
	/**
	 * Select how HubSpot handles a detected duplicate file.
	 */
	duplicateValidationStrategy?: '' | 'NONE' | 'REJECT' | 'RETURN_EXISTING';
};

export type ImportFileFromUrlOutput = {
	/**
	 * Identifier of the asynchronous import task returned by HubSpot.
	 */
	id: string;
	/**
	 * Map of related task URLs returned by HubSpot, including the status polling link.
	 */
	links: Record<string, JSONValue>;
};

/**
 * Import a file from a URL
 * Starts an asynchronous import of a file from a public URL into HubSpot File Manager.
 */
export async function importFileFromUrl(
	this: EndpointFunctionThis,
	payload: {
		input: ImportFileFromUrlInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ImportFileFromUrlOutput> {
	const response = await this.endpointCaller<ImportFileFromUrlOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'importFileFromUrl',
		},
		payload,
	);
	return response.output;
}
