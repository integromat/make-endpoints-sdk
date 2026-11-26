// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type PublishReelInput = {
	/**
	 * The ID of the page to publish the reel to. Must be the page used in `StartReelUpload`. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The `video_id` returned by `StartReelUpload`.
	 */
	video_id: string;
	/**
	 * Publish state of the reel.
	 */
	video_state: 'PUBLISHED' | 'SCHEDULED' | 'DRAFT';
	/**
	 * Description of the reel. Supports hashtags.
	 */
	description?: string;
	/**
	 * UNIX timestamp (in seconds) when the reel goes live. Must be more than 10 minutes and less than 29 days from now. Requires `video_state` set to `SCHEDULED`.
	 */
	scheduled_publish_time?: number;
	/**
	 * ID of a page with a valid location to tag as the location of the reel.
	 */
	place?: string;
	/**
	 * Set to `true` to disclose that the reel was created or edited using AI. Defaults to `false`.
	 */
	is_ai_generated?: boolean;
};

export type PublishReelOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Publish a reel
 * Finishes a reel upload and publishes, schedules, or saves the reel as a draft on a Facebook page.
 */
export async function publishReel(
	this: EndpointFunctionThis,
	payload: {
		input: PublishReelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<PublishReelOutput>> {
	const response = await this.endpointCaller<PublishReelOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'PublishReel',
		},
		payload,
	);
	return response;
}
