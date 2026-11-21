// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetVideoInput = {
	/**
	 * The URN of the video, for example `urn:li:video:C4E10AQGUkQY7trgh-Q`.
	 */
	videoUrn: string;
};

export type GetVideoOutput = {
	/**
	 * The URN of the video.
	 */
	id?: string;
	/**
	 * The URN of the person or organization that owns the video.
	 */
	owner?: string;
	/**
	 * The processing status of the video: `WAITING_UPLOAD`, `PROCESSING`, `PROCESSING_FAILED` or `AVAILABLE`.
	 */
	status?: string;
	/**
	 * The reason the processing failed. Present only when **Status** is `PROCESSING_FAILED`.
	 */
	processingFailureReason?: string;
	/**
	 * The length of the video in milliseconds. Empty when the video is not available.
	 */
	duration?: number;
	/**
	 * The aspect ratio width of the video, for example 16 for a 16:9 video.
	 */
	aspectRatioWidth?: number;
	/**
	 * The aspect ratio height of the video, for example 9 for a 16:9 video.
	 */
	aspectRatioHeight?: number;
	/**
	 * The URL to download or view the video. Empty when the video is not available.
	 */
	downloadUrl?: string;
	/**
	 * The time the download URL expires, in milliseconds since epoch. If empty, the URL may never expire.
	 */
	downloadUrlExpiresAt?: number;
	/**
	 * The URL of the thumbnail of the video.
	 */
	thumbnail?: string;
	/**
	 * The URL of the caption file. Present when captions were uploaded and processed.
	 */
	captions?: string;
	/**
	 * Metadata of the video in the media library of an ad account.
	 */
	mediaLibraryMetadata?: {
		/**
		 * The URN of the account that owns the media library, for example `urn:li:sponsoredAccount:123`.
		 */
		associatedAccount?: string;
		/**
		 * The name of the asset in the media library.
		 */
		assetName?: string;
		/**
		 * The status of the asset in the media library: `ACTIVE` or `ARCHIVED`.
		 */
		mediaLibraryStatus?: string;
	};
};

/**
 * Get a video
 * Retrieves the metadata and processing status of a LinkedIn video.
 */
export async function getVideo(
	this: EndpointFunctionThis,
	payload: {
		input: GetVideoInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetVideoOutput> {
	const response = await this.endpointCaller<GetVideoOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'getVideo',
		},
		payload,
	);
	return response.output;
}
