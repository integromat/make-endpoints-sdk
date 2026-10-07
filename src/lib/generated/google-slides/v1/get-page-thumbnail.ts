// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetPageThumbnailInput = {
	/**
	 * The ID of the presentation that contains the page. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit
	 */
	presentationId: string;
	/**
	 * The object ID of the page whose thumbnail to retrieve.
	 */
	pageObjectId: string;
	/**
	 * Optional controls for thumbnail creation. If omitted, Google returns a PNG at a server-chosen size.
	 */
	thumbnailProperties?: {
		/**
		 * The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
		 */
		mimeType?: '' | 'PNG';
		/**
		 * The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.
		 */
		thumbnailSize?: '' | 'THUMBNAIL_SIZE_UNSPECIFIED' | 'LARGE' | 'MEDIUM' | 'SMALL';
	};
};

export type GetPageThumbnailOutput = {
	/**
	 * The positive width in pixels of the thumbnail image.
	 */
	width?: number;
	/**
	 * The positive height in pixels of the thumbnail image.
	 */
	height?: number;
	/**
	 * The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`.
	 */
	contentUrl?: string;
};

/**
 * Get a page thumbnail
 * Generates a thumbnail URL for a page in a Google Slides presentation.
 */
export async function getPageThumbnail(
	this: EndpointFunctionThis,
	payload: {
		input: GetPageThumbnailInput;
		connectionId: number;
	},
): Promise<GetPageThumbnailOutput> {
	const response = await this.endpointCaller<GetPageThumbnailOutput>(
		{
			appName: 'google-slides',
			appVersion: 1,
			endpointName: 'getPageThumbnail',
		},
		payload,
	);
	return response.output;
}
