// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteImageInput = {
	/**
	 * Unique ID for the image to delete.
	 */
	image_id: string;
};

export type DeleteImageOutput = Record<string, never>;

/**
 * Delete an image
 * Deletes an image from the Typeform account.
 */
export async function deleteImage(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteImageInput;
		connectionId: number;
	},
): Promise<DeleteImageOutput> {
	const response = await this.endpointCaller<DeleteImageOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'deleteImage',
		},
		payload,
	);
	return response.output;
}
