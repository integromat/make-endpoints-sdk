// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFileInput = {
	/**
	 * The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
	 */
	file_id: string;
	/**
	 * Sent as the `If-Match` header. Ensures this item hasn't recently changed before making changes. Pass in the item's last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.
	 */
	if_match?: string;
};

export type DeleteFileOutput = Record<string, never>;

/**
 * Delete a file
 * Deletes a file, either permanently or by moving it to the trash, depending on the enterprise settings.
 */
export async function deleteFile(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFileInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteFileOutput> {
	const response = await this.endpointCaller<DeleteFileOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'deleteFile',
		},
		payload,
	);
	return response.output;
}
