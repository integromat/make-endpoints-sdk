// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UpdatePostInput = {
	/**
	 * The ID of the page that owns the post. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the page post in the `{page_id}_{post_id}` format.
	 */
	page_post_id: string;
	/**
	 * The new text of the post. Supports emoji and page mentions in the `@[page-id]` format.
	 */
	message?: string;
	/**
	 * Whether the post is hidden from the page timeline.
	 */
	is_hidden?: boolean;
	/**
	 * Whether the post is published. Set to `true` to publish an unpublished post.
	 */
	is_published?: boolean;
	/**
	 * Whether the post is pinned to the top of the page.
	 */
	is_pinned?: boolean;
	/**
	 * UNIX timestamp (in seconds) when an unpublished post goes live. Must be between 10 minutes and 75 days from the time of the request.
	 */
	scheduled_publish_time?: number;
	/**
	 * UNIX timestamp (in seconds) in the past to backdate the post to.
	 */
	backdated_time?: number;
	/**
	 * Controls how the time of a backdated post is displayed. For example, `month` displays the post as "2 months ago" instead of an exact date.
	 */
	backdated_time_granularity?: '' | 'year' | 'month' | 'day' | 'hour' | 'min' | 'none';
	/**
	 * Visibility of the post on the page timeline.
	 */
	timeline_visibility?: '' | 'hidden' | 'normal' | 'forced_allow';
	/**
	 * Visibility of the post's story in news feed.
	 */
	feed_story_visibility?: '' | 'hidden' | 'visible';
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
	 * Photos to attach to the post.
	 *
	 * Items: An attached photo.
	 */
	attached_media?: {
		/**
		 * The ID of an unpublished photo uploaded to the page.
		 */
		media_fbid?: string;
	}[];
};

export type UpdatePostOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Edit a post
 * Updates a page post.
 */
export async function updatePost(
	this: EndpointFunctionThis,
	payload: {
		input: UpdatePostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdatePostOutput>> {
	const response = await this.endpointCaller<UpdatePostOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UpdatePost',
		},
		payload,
	);
	return response;
}
