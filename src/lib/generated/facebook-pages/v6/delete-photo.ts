// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeletePhotoInput = {
	/**
	 * The ID of the page that owns the photo. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the photo to delete.
	 */
	photo_id: string;
};

export type DeletePhotoOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Delete a photo
 * Deletes a photo.
 */
export async function deletePhoto(
	this: EndpointFunctionThis,
	payload: {
		input: DeletePhotoInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeletePhotoOutput>> {
	const response = await this.endpointCaller<DeletePhotoOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'DeletePhoto',
		},
		payload,
	);
	return response;
}
