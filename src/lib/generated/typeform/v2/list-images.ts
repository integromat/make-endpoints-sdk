// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListImagesInput = Record<string, never>;

export type ListImagesOutput = Record<string, never>;

/**
 * List images
 * Retrieves all images in the Typeform account.
 */
export async function listImages(
	this: EndpointFunctionThis,
	payload: {
		input: ListImagesInput;
		connectionId: number;
	},
): Promise<ListImagesOutput> {
	const response = await this.endpointCaller<ListImagesOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'listImages',
		},
		payload,
	);
	return response.output;
}
