// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DownloadFileInput = {
	/**
	 * Enter the numeric HubSpot ID of the file to get a signed download URL for. Use digits only.
	 */
	fileId: string;
	/**
	 * Enter how many seconds the signed URL should remain valid. Leave empty to use HubSpot's default expiration.
	 */
	expirationSeconds?: number;
	/**
	 * Select an image rendition size. Leave empty to return the original file.
	 */
	size?: '' | 'icon' | 'medium' | 'preview' | 'thumb';
	/**
	 * Choose whether HubSpot may enlarge an image to the selected rendition size. An explicit false value is preserved.
	 */
	upscale?: boolean;
};

export type DownloadFileOutput = {
	/**
	 * Date and time when the signed URL expires.
	 */
	expiresAt: string;
	/**
	 * File name extension.
	 */
	extension: string;
	/**
	 * Height of the file in pixels when available.
	 */
	height?: number;
	/**
	 * Name of the file.
	 */
	name: string;
	/**
	 * Size of the file in bytes.
	 */
	size: number;
	/**
	 * HubSpot file type.
	 */
	type: string;
	/**
	 * Temporary signed URL for downloading the file. Treat this URL as a bearer credential.
	 */
	url: string;
	/**
	 * Width of the file in pixels when available.
	 */
	width?: number;
};

/**
 * Get a file's download URL
 * Returns a temporary signed URL for downloading a HubSpot file.
 */
export async function downloadFile(
	this: EndpointFunctionThis,
	payload: {
		input: DownloadFileInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DownloadFileOutput> {
	const response = await this.endpointCaller<DownloadFileOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'downloadFile',
		},
		payload,
	);
	return response.output;
}
