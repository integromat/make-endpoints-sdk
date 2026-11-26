// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UploadPhotoInput = {
	/**
	 * The ID of the page to upload the photo to, or the page that owns the album. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of a page or of an album to upload the photo to.
	 */
	page_or_album_id: string;
	/**
	 * Public URL of the photo. Supported formats: JPEG, BMP, PNG, GIF, TIFF. Maximum size is 10 MB.
	 */
	url: string;
	/**
	 * Description of the photo. Supports emoji.
	 */
	caption?: string;
	/**
	 * Alternative text of the image, for accessibility.
	 */
	alt_text_custom?: string;
	/**
	 * Whether the photo is published right away. Default is `true`. Set to `false` to attach the photo to a post with `CreatePost`.
	 */
	published?: boolean;
	/**
	 * Whether the photo is temporary. Use it for photos attached to a scheduled post. Requires `published` set to `false` and can't be used with `scheduled_publish_time`.
	 */
	temporary?: boolean;
	/**
	 * Whether to skip creating a feed story for the photo.
	 */
	no_story?: boolean;
	/**
	 * UNIX timestamp (in seconds) when an unpublished photo goes live. Requires `published` set to `false`.
	 */
	scheduled_publish_time?: number;
	/**
	 * Type of the unpublished photo, for example `SCHEDULED` or `DRAFT`.
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
	 * UNIX timestamp (in seconds) in the past to backdate the photo to.
	 */
	backdated_time?: number;
	/**
	 * Which part of `backdated_time` is displayed. Default is `none`.
	 */
	backdated_time_granularity?: '' | 'year' | 'month' | 'day' | 'hour' | 'min' | 'none';
	/**
	 * The page ID of a place associated with the photo.
	 */
	place?: string;
	/**
	 * People tagged in the photo.
	 *
	 * Items: A tag on the photo.
	 */
	tags?: {
		/**
		 * The ID of the tagged person.
		 */
		tag_uid?: string;
		/**
		 * Text of the tag, used when the tag doesn't point to a person.
		 */
		tag_text?: string;
		/**
		 * Horizontal position of the tag, in percent from the left edge.
		 */
		x?: number;
		/**
		 * Vertical position of the tag, in percent from the top edge.
		 */
		y?: number;
	}[];
};

export type UploadPhotoOutput = {
	/**
	 * The ID of the uploaded photo.
	 */
	id?: string;
	/**
	 * The ID of the post created for the photo, in the `{page_id}_{post_id}` format. Returned only when a post is created.
	 */
	post_id?: string;
};

/**
 * Upload a photo
 * Uploads a photo from a URL to a Facebook page, either as a published photo post or as an unpublished photo to attach to a post.
 */
export async function uploadPhoto(
	this: EndpointFunctionThis,
	payload: {
		input: UploadPhotoInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UploadPhotoOutput>> {
	const response = await this.endpointCaller<UploadPhotoOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UploadPhoto',
		},
		payload,
	);
	return response;
}
