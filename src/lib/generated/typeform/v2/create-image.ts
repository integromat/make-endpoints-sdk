// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateImageInput = {
	/**
	 * File name for the image.
	 */
	file_name?: string;
	/**
	 * Base64 code for the image. Do not include descriptors such as `data:image/png;base64,` — include only the base64 code. Send either `image` or `url`.
	 */
	image?: string;
	/**
	 * URL of the image to import. Send either `image` or `url`.
	 */
	url?: string;
	/**
	 * The source of the image upload.
	 */
	upload_source?: '' | 'user_upload' | 'stock_image' | 'stock_icon' | 'unknown';
};

export type CreateImageOutput = {
	/**
	 * Unique ID for the image.
	 */
	id?: string;
	/**
	 * URL for the image.
	 */
	src?: string;
	/**
	 * File name for the image (specified when the image is created).
	 */
	file_name?: string;
	/**
	 * Width of the image in pixels.
	 */
	width?: number;
	/**
	 * Height of the image in pixels.
	 */
	height?: number;
	/**
	 * The MIME type of the image.
	 */
	media_type?: '' | 'image/gif' | 'image/jpeg' | 'image/png';
	/**
	 * True if the image has an alpha channel (some degree of transparency).
	 */
	has_alpha?: boolean;
	/**
	 * Average color of the image in hexadecimal format.
	 */
	avg_color?: string;
	/**
	 * The source of the image upload.
	 */
	upload_source?: '' | 'user_upload' | 'stock_image' | 'stock_icon' | 'unknown';
};

/**
 * Create an image
 * Adds an image to the Typeform account.
 */
export async function createImage(
	this: EndpointFunctionThis,
	payload: {
		input: CreateImageInput;
		connectionId: number;
	},
): Promise<CreateImageOutput> {
	const response = await this.endpointCaller<CreateImageOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'createImage',
		},
		payload,
	);
	return response.output;
}
