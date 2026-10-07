// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFileInput = {
	/**
	 * File identifier to get information about.
	 */
	file_id: string;
};

export type GetFileOutput = {
	/**
	 * Identifier for this file, which can be used to download or reuse the file.
	 */
	file_id?: string;
	/**
	 * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
	 */
	file_unique_id?: string;
	/**
	 * File size in bytes, if known.
	 */
	file_size?: number;
	/**
	 * File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to download the file. The link is guaranteed to be valid for at least 1 hour.
	 */
	file_path?: string;
};

/**
 * Get a file
 * Gets basic information about a file and prepares it for downloading.
 */
export async function getFile(
	this: EndpointFunctionThis,
	payload: {
		input: GetFileInput;
		connectionId: number;
	},
): Promise<GetFileOutput> {
	const response = await this.endpointCaller<GetFileOutput>(
		{
			appName: 'telegram',
			appVersion: 1,
			endpointName: 'getFile',
		},
		payload,
	);
	return response.output;
}
