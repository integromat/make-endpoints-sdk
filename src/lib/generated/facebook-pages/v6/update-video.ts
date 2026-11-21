// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateVideoInput = {
	/**
	 * The ID of the page that owns the video. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the video to update.
	 */
	video_id: string;
	/**
	 * The new title of the video.
	 */
	name?: string;
	/**
	 * The new description of the video. Supports emoji.
	 */
	description?: string;
	/**
	 * Whether the video post is published. Set to `true` to publish an unpublished video.
	 */
	published?: boolean;
	/**
	 * UNIX timestamp (in seconds) when an unpublished video post goes live.
	 */
	scheduled_publish_time?: number;
	/**
	 * UNIX timestamp (in seconds) in the past to backdate the video post to.
	 */
	backdated_time?: number;
	/**
	 * Which part of `backdated_time` is displayed.
	 */
	backdated_time_granularity?: '' | 'year' | 'month' | 'day' | 'hour' | 'min' | 'none';
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
	 * IDs of tags that describe the video content. Replaces the current tags.
	 *
	 * Items: A content tag ID.
	 */
	content_tags?: string[];
	/**
	 * Labels of the video. Not published; shown only in insights. Replaces the current labels.
	 *
	 * Items: A custom label.
	 */
	custom_labels?: string[];
	/**
	 * Whether the video can be embedded on other websites.
	 */
	embeddable?: boolean;
	/**
	 * Whether likes, comments, and sharing are allowed on an unlisted video.
	 */
	social_actions?: boolean;
	/**
	 * ID of a thumbnail of the video to use as its preferred thumbnail.
	 */
	preferred_thumbnail_id?: string;
	/**
	 * Whether the video is shown in news feed.
	 */
	publish_to_news_feed?: boolean;
	/**
	 * Whether the video is shown on the page's videos tab.
	 */
	publish_to_videos_tab?: boolean;
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
	/**
	 * Whether the video expires immediately.
	 */
	expire_now?: boolean;
};

export type UpdateVideoOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Update a video
 * Updates the title, description, and settings of a video on a Facebook page.
 */
export async function updateVideo(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateVideoInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateVideoOutput> {
	const response = await this.endpointCaller<UpdateVideoOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UpdateVideo',
		},
		payload,
	);
	return response.output;
}
