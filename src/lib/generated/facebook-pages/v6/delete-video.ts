// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteVideoInput = {
	/**
	 * The ID of the page that owns the video. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the video to delete.
	 */
	video_id: string;
};

export type DeleteVideoOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Delete a video
 * Deletes a video.
 */
export async function deleteVideo(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteVideoInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeleteVideoOutput>> {
	const response = await this.endpointCaller<DeleteVideoOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'DeleteVideo',
		},
		payload,
	);
	return response;
}
