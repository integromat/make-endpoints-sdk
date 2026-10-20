// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFolderInput = {
	/**
	 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
	 */
	folder_id: string;
	/**
	 * Sent as the `If-Match` header. Ensures this item hasn't recently changed before making changes. Pass in the item's last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.
	 */
	if_match?: string;
	/**
	 * Delete a folder that is not empty by recursively deleting the folder and all of its content.
	 */
	recursive?: boolean;
};

export type DeleteFolderOutput = Record<string, never>;

/**
 * Delete a folder
 * Deletes a folder, either permanently or by moving it to the trash, depending on the enterprise settings.
 */
export async function deleteFolder(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteFolderOutput> {
	const response = await this.endpointCaller<DeleteFolderOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'deleteFolder',
		},
		payload,
	);
	return response.output;
}
