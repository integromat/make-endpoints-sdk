// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UploadReelFromUrlInput = {
	/**
	 * The ID of the page used in `StartReelUpload`. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The `video_id` returned by `StartReelUpload`.
	 */
	video_id: string;
	/**
	 * Public HTTP or HTTPS URL of the video file. URLs that require authentication are not supported.
	 */
	file_url: string;
};

export type UploadReelFromUrlOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Upload a reel from a URL
 * Uploads the video file of a reel from a public URL to an open reel upload session.
 */
export async function uploadReelFromUrl(
	this: EndpointFunctionThis,
	payload: {
		input: UploadReelFromUrlInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UploadReelFromUrlOutput> {
	const response = await this.endpointCaller<UploadReelFromUrlOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UploadReelFromUrl',
		},
		payload,
	);
	return response.output;
}
