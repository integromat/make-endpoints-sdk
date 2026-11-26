// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type StartReelUploadInput = {
	/**
	 * The ID of the page to publish the reel to. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
};

export type StartReelUploadOutput = {
	/**
	 * ID of the new video. Pass it to `UploadReelFromUrl` and `PublishReel`.
	 */
	video_id?: string;
	/**
	 * URL for uploading the video file.
	 */
	upload_url?: string;
};

/**
 * Start a reel upload
 * Starts a reel upload session for a Facebook page and returns the video ID for the upload.
 */
export async function startReelUpload(
	this: EndpointFunctionThis,
	payload: {
		input: StartReelUploadInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<StartReelUploadOutput>> {
	const response = await this.endpointCaller<StartReelUploadOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'StartReelUpload',
		},
		payload,
	);
	return response;
}
