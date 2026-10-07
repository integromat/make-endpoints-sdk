// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteResourceInput = {
	/**
	 * The type of asset to delete. Use `video` for all video and audio assets.
	 */
	resource_type: 'image' | 'video' | 'raw';
	/**
	 * The identifier of the uploaded asset to delete. Do not include a file extension for images and videos. Include the file extension for `raw` files only.
	 */
	public_id: string;
	/**
	 * The delivery type of the asset to delete.
	 */
	type?: '' | 'upload' | 'private' | 'authenticated';
	/**
	 * Whether to also invalidate the cached copies of the asset (and all its transformed versions) on the CDN. It usually takes between a few seconds and a few minutes for the invalidation to fully propagate.
	 */
	invalidate?: boolean;
	/**
	 * An HTTP or HTTPS URL to notify your application (a webhook) when the process has completed.
	 */
	notification_url?: string;
};

export type DeleteResourceOutput = {
	/**
	 * The result of the delete operation. Returns `ok` on success or `not found` if the resource does not exist.
	 */
	result?: string;
};

/**
 * Delete a resource
 * Permanently deletes a single resource by its public ID.
 */
export async function deleteResource(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteResourceInput;
		connectionId: number;
	},
): Promise<DeleteResourceOutput> {
	const response = await this.endpointCaller<DeleteResourceOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'deleteResource',
		},
		payload,
	);
	return response.output;
}
