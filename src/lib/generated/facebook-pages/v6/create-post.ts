// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreatePostInput = {
	/**
	 * The ID of the page to post to. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The text of the post. Supports emoji and page mentions in the `@[page-id]` format. Either `message` or `link` is required.
	 */
	message?: string;
	/**
	 * URL of a link to attach to the post. Either `message` or `link` is required.
	 */
	link?: string;
	/**
	 * Overrides the title of the link preview. Used only with `link`.
	 */
	name?: string;
	/**
	 * Overrides the description of the link preview. Used only with `link`.
	 */
	description?: string;
	/**
	 * URL of the preview image of the link. Used only with `link`.
	 */
	picture?: string;
	/**
	 * Photos to attach to the post. Upload each photo with `UploadPhoto` and `published` set to `false` first.
	 *
	 * Items: An attached photo.
	 */
	attached_media?: {
		/**
		 * The ID of an unpublished photo uploaded to the page.
		 */
		media_fbid: string;
	}[];
	/**
	 * Links of a carousel (multi-link) post. 2 to 5 items, or up to 10 when `multi_share_optimized` is `true`.
	 *
	 * Items: A link in the carousel.
	 */
	child_attachments?: {
		/**
		 * URL of the link.
		 */
		link: string;
		/**
		 * Title of the link preview. Typically truncated after 35 characters.
		 */
		name?: string;
		/**
		 * Price, discount, or website domain shown with the link. Typically truncated after 30 characters.
		 */
		description?: string;
		/**
		 * URL of the preview image (1:1 aspect ratio, at least 458 × 458 px). Either `picture` or `image_hash` is required.
		 */
		picture?: string;
		/**
		 * Hash of a preview image from your ad image library. Either `picture` or `image_hash` is required.
		 */
		image_hash?: string;
	}[];
	/**
	 * Whether to show the end card of a carousel post. Default is `true`.
	 */
	multi_share_end_card?: boolean;
	/**
	 * Whether Facebook picks the order of `child_attachments` when the post is used in an ad. Default is `true`.
	 */
	multi_share_optimized?: boolean;
	/**
	 * ID of a photo owned by the page to use as the thumbnail image of the link.
	 */
	object_attachment?: string;
	/**
	 * Action links attached to the post. Cannot be used together with `published`.
	 *
	 * Items: An action link.
	 */
	actions?: {
		/**
		 * URL of the action link.
		 */
		link?: string;
		/**
		 * Label of the action link.
		 */
		name?: string;
	}[];
	/**
	 * The page ID of a location associated with the post.
	 */
	place?: string;
	/**
	 * IDs of people tagged in the post. Can only be used together with `place`.
	 *
	 * Items: The ID of a tagged person.
	 */
	tags?: string[];
	/**
	 * Whether the post is published right away. Default is `true`. Set to `false` together with `scheduled_publish_time` to schedule the post.
	 */
	published?: boolean;
	/**
	 * UNIX timestamp (in seconds) when the post goes live. Must be between 10 minutes and 75 days from the time of the request. Requires `published` set to `false`.
	 */
	scheduled_publish_time?: number;
	/**
	 * Type of the unpublished post. Use `SCHEDULED` for a scheduled post with attached photos.
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
	 * UNIX timestamp (in seconds) in the past to backdate the post to.
	 */
	backdated_time?: number;
	/**
	 * Controls how the time of a backdated post is displayed. For example, `month` displays the post as "2 months ago" instead of an exact date.
	 */
	backdated_time_granularity?: '' | 'year' | 'month' | 'day' | 'hour' | 'min' | 'none';
	/**
	 * Audience that is more likely to see the post in feed. Others are less likely to see it, but still can.
	 */
	feed_targeting?: {
		/**
		 * Minimum age. Must be 13 or higher.
		 */
		age_min?: number;
		/**
		 * Maximum age. Must be 65 or lower.
		 */
		age_max?: number;
		/**
		 * Genders to target. Default is both.
		 *
		 * Items: `1` for male, `2` for female.
		 */
		genders?: number[];
		/**
		 * Geographic locations to target, as a JSON object. See the Facebook targeting guide for the format.
		 */
		geo_locations?: Record<string, JSONValue>;
		/**
		 * Graduation years from college.
		 *
		 * Items: A graduation year.
		 */
		college_years?: number[];
		/**
		 * Education levels to target.
		 *
		 * Items: `1` for high school, `2` for undergraduate, `3` for alum.
		 */
		education_statuses?: number[];
		/**
		 * IDs of interests to target. Search with `type=audienceinterest` to get the IDs.
		 *
		 * Items: An interest ID.
		 */
		interests?: number[];
		/**
		 * Locales to target. Search with `type=adlocale` to get the keys.
		 *
		 * Items: A locale key.
		 */
		locales?: number[];
		/**
		 * Relationship statuses to target. Default is all.
		 *
		 * Items: `1` single, `2` in a relationship, `3` married, `4` engaged.
		 */
		relationship_statuses?: number[];
	};
	/**
	 * Audience that can see the post. People outside it can't see the post. Does not override page-level restrictions.
	 */
	targeting?: {
		/**
		 * Minimum age of the audience.
		 */
		age_min?: '' | 13 | 15 | 18 | 21 | 25;
		/**
		 * Geographic locations of the audience, as a JSON object. See the Facebook targeting guide for the format.
		 */
		geo_locations?: Record<string, JSONValue>;
	};
	/**
	 * ID of the action of a feeling or activity, for example *feeling* or *watching*. Required together with `og_object_id`.
	 */
	og_action_type_id?: string;
	/**
	 * ID of the object of a feeling or activity. Required together with `og_action_type_id`.
	 */
	og_object_id?: string;
	/**
	 * ID of the icon of a feeling or activity. If not set, Facebook picks an icon based on `og_object_id`.
	 */
	og_icon_id?: string;
};

export type CreatePostOutput = {
	/**
	 * The ID of the new post, in the `{page_id}_{post_id}` format.
	 */
	id?: string;
};

/**
 * Create a post
 * Publishes a post to a Facebook page feed, optionally with a link or attached photos.
 */
export async function createPost(
	this: EndpointFunctionThis,
	payload: {
		input: CreatePostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreatePostOutput> {
	const response = await this.endpointCaller<CreatePostOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'CreatePost',
		},
		payload,
	);
	return response.output;
}
