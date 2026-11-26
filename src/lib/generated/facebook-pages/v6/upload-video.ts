// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UploadVideoInput = {
	/**
	 * The ID of the page to upload the video to. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * Public URL of the video file.
	 */
	file_url: string;
	/**
	 * Description of the video, used as the text of the video post. Supports emoji.
	 */
	description?: string;
	/**
	 * Whether a post about the video is published. Default is `true`. Unpublished videos can't be backdated.
	 */
	published?: boolean;
	/**
	 * UNIX timestamp (in seconds) when the video post goes live. Must be between 10 minutes and 6 months from now. Requires `published` set to `false`.
	 */
	scheduled_publish_time?: number;
	/**
	 * Type of the unpublished video, for example `SCHEDULED` or `DRAFT`.
	 */
	unpublished_content_type?:
		| ''
		| 'SCHEDULED'
		| 'SCHEDULED_RECURRING'
		| 'DRAFT'
		| 'PUBLISH_PENDING'
		| 'ADS_POST'
		| 'INLINE_CREATED'
		| 'PUBLISHED'
		| 'REVIEWABLE_BRANDED_CONTENT';
	/**
	 * Whether to skip creating feed and timeline stories for the video.
	 */
	no_story?: boolean;
	/**
	 * Content category of the video.
	 */
	content_category?:
		| ''
		| 'BEAUTY_FASHION'
		| 'BUSINESS'
		| 'CARS_TRUCKS'
		| 'COMEDY'
		| 'CUTE_ANIMALS'
		| 'ENTERTAINMENT'
		| 'FAMILY'
		| 'FOOD_HEALTH'
		| 'HOME'
		| 'LIFESTYLE'
		| 'MUSIC'
		| 'NEWS'
		| 'POLITICS'
		| 'SCIENCE'
		| 'SPORTS'
		| 'TECHNOLOGY'
		| 'VIDEO_GAMING'
		| 'OTHER';
	/**
	 * IDs of tags that describe the video content. Search with `type=adinterest` to get the IDs.
	 *
	 * Items: A content tag ID.
	 */
	content_tags?: string[];
	/**
	 * Labels of the video. Not published; shown only in insights.
	 *
	 * Items: A custom label.
	 */
	custom_labels?: string[];
	/**
	 * Whether the video can be embedded on other websites.
	 */
	embeddable?: boolean;
	/**
	 * Whether the video is hidden everywhere on Facebook and not searchable. It can still be viewed via its permalink and embeds. Default is `false`.
	 */
	secret?: boolean;
	/**
	 * Whether likes, comments, and sharing are allowed on an unlisted video. Default is `false`.
	 */
	social_actions?: boolean;
	/**
	 * Settings of a backdated video post. A backdated post must be published.
	 */
	backdated_post?: {
		/**
		 * UNIX timestamp (in seconds) in the past to backdate the video post to.
		 */
		backdated_time?: number;
		/**
		 * Which part of `backdated_time` is displayed. Default is `none`.
		 */
		backdated_time_granularity?: '' | 'year' | 'month' | 'day' | 'hour' | 'min' | 'none';
		/**
		 * Whether to hide the backdated post from news feed. Default is `false`.
		 */
		hide_from_newsfeed?: boolean;
	};
	/**
	 * When the video expires and what happens then.
	 */
	expiration?: {
		/**
		 * Expiration time of the video.
		 */
		time?: string;
		/**
		 * What happens when the video expires.
		 */
		type?: '' | 'expire_and_delete' | 'expire_only';
	};
};

export type UploadVideoOutput = {
	/**
	 * The ID of the uploaded video.
	 */
	id?: string;
};

/**
 * Upload a video
 * Uploads a video from a URL to a Facebook page and creates a video post.
 */
export async function uploadVideo(
	this: EndpointFunctionThis,
	payload: {
		input: UploadVideoInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UploadVideoOutput>> {
	const response = await this.endpointCaller<UploadVideoOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UploadVideo',
		},
		payload,
	);
	return response;
}
