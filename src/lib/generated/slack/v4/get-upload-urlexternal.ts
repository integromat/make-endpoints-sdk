// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUploadURLExternalInput = {
	/**
	 * Name of the file being uploaded.
	 */
	filename: string;
	/**
	 * Size in bytes of the file being uploaded.
	 */
	length: number;
	/**
	 * Syntax type of the snippet being uploaded, for example `python` or `json`, when uploading a code snippet.
	 */
	snippet_type?: string;
	/**
	 * Description of the image for screen readers, when uploading an image.
	 */
	alt_txt?: string;
};

export type GetUploadURLExternalOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * URL to upload the raw file bytes to via an HTTP POST, outside of this endpoint.
	 */
	upload_url?: string;
	/**
	 * ID assigned to the file. Pass this to `completeUploadExternal` after uploading the file content.
	 */
	file_id?: string;
};

/**
 * Get a file upload URL
 * Requests a URL for uploading file data, the first step of the modern file upload flow.
 */
export async function getUploadUrlexternal(
	this: EndpointFunctionThis,
	payload: {
		input: GetUploadURLExternalInput;
		connectionId: number;
	},
): Promise<GetUploadURLExternalOutput> {
	const response = await this.endpointCaller<GetUploadURLExternalOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'getUploadURLExternal',
		},
		payload,
	);
	return response.output;
}
