// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetPostInput = {
	/**
	 * The ID of the page that owns the post. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the page post in the `{page_id}_{post_id}` format.
	 */
	page_post_id: string;
	/**
	 * Fields to return. If empty, these fields are returned: `id,created_time,updated_time,message,story,full_picture,permalink_url,status_type,shares,attachments`.
	 */
	fields?:
		| ''
		| 'id'
		| 'created_time'
		| 'updated_time'
		| 'message'
		| 'message_tags'
		| 'story'
		| 'full_picture'
		| 'icon'
		| 'permalink_url'
		| 'status_type'
		| 'from'
		| 'attachments'
		| 'is_hidden'
		| 'is_published'
		| 'is_expired'
		| 'is_popular'
		| 'is_eligible_for_promotion'
		| 'is_spherical'
		| 'parent_id'
		| 'privacy'
		| 'promotable_id'
		| 'shares'
		| 'backdated_time';
};

export type GetPostOutput = {
	/**
	 * The ID of the post, in the `{page_id}_{post_id}` format.
	 */
	id?: string;
	/**
	 * The time the post was published.
	 */
	created_time?: string;
	/**
	 * The time the post was last updated, including new comments.
	 */
	updated_time?: string;
	/**
	 * The text of the post.
	 */
	message?: string;
	/**
	 * Profiles tagged in the message.
	 *
	 * Items: A profile tagged in the message.
	 */
	message_tags?: {
		/**
		 * ID of the tagged profile.
		 */
		id?: string;
		/**
		 * Text used to tag the profile.
		 */
		name?: string;
		/**
		 * Type of the tagged profile: `user`, `page`, or `group`.
		 */
		type?: string;
		/**
		 * Position of the first character of the tag in the message, in Unicode code points.
		 */
		offset?: number;
		/**
		 * Length of the tag text, in Unicode code points.
		 */
		length?: number;
	}[];
	/**
	 * Text of an automatically generated story, for example when a photo is added.
	 */
	story?: string;
	/**
	 * URL of the full-size picture of the post. Resized to 720 px on the largest side when bigger.
	 */
	full_picture?: string;
	/**
	 * URL of an icon representing the type of the post.
	 */
	icon?: string;
	/**
	 * The permanent URL of the post on facebook.com.
	 */
	permalink_url?: string;
	/**
	 * Type of the post, for example `added_photos`, `added_video`, `mobile_status_update`, `shared_story`, or `wall_post`.
	 */
	status_type?: string;
	/**
	 * The page, person, or group that created the post.
	 */
	from?: {
		/**
		 * ID of the page or person.
		 */
		id?: string;
		/**
		 * Name of the page or person.
		 */
		name?: string;
	};
	/**
	 * Attachments of the post.
	 */
	attachments?: {
		/**
		 * List of attachments.
		 *
		 * Items: An attachment.
		 */
		data?: {
			/**
			 * Description of the attachment.
			 */
			description?: string;
			/**
			 * Media of the attachment.
			 */
			media?: {
				/**
				 * Image of the attachment.
				 */
				image?: {
					/**
					 * Image height in pixels.
					 */
					height?: number;
					/**
					 * URL of the image.
					 */
					src?: string;
					/**
					 * Image width in pixels.
					 */
					width?: number;
				};
				/**
				 * URL of the video, for video attachments.
				 */
				source?: string;
			};
			/**
			 * The object the attachment links to.
			 */
			target?: {
				/**
				 * ID of the target object.
				 */
				id?: string;
				/**
				 * URL of the target object.
				 */
				url?: string;
			};
			/**
			 * Type of the attachment, for example `photo`, `video_inline`, `share`, or `album`.
			 */
			type?: string;
			/**
			 * URL of the attachment.
			 */
			url?: string;
			/**
			 * The original URL of the attachment, without the Facebook redirect.
			 */
			unshimmed_url?: string;
			/**
			 * Nested attachments, for example photos of an album post.
			 */
			subattachments?: {
				/**
				 * List of nested attachments.
				 *
				 * Items: A nested attachment.
				 */
				data?: {
					/**
					 * Description of the attachment.
					 */
					description?: string;
					/**
					 * Media of the attachment.
					 */
					media?: {
						/**
						 * Image of the attachment.
						 */
						image?: {
							/**
							 * Image height in pixels.
							 */
							height?: number;
							/**
							 * URL of the image.
							 */
							src?: string;
							/**
							 * Image width in pixels.
							 */
							width?: number;
						};
						/**
						 * URL of the video, for video attachments.
						 */
						source?: string;
					};
					/**
					 * The object the attachment links to.
					 */
					target?: {
						/**
						 * ID of the target object.
						 */
						id?: string;
						/**
						 * URL of the target object.
						 */
						url?: string;
					};
					/**
					 * Type of the attachment, for example `photo`, `video_inline`, `share`, or `album`.
					 */
					type?: string;
					/**
					 * URL of the attachment.
					 */
					url?: string;
					/**
					 * The original URL of the attachment, without the Facebook redirect.
					 */
					unshimmed_url?: string;
				}[];
			};
		}[];
	};
	/**
	 * Whether the post is hidden from the page timeline.
	 */
	is_hidden?: boolean;
	/**
	 * Whether a scheduled post was published.
	 */
	is_published?: boolean;
	/**
	 * Whether the post has an expiration time that has passed.
	 */
	is_expired?: boolean;
	/**
	 * Whether the post is popular.
	 */
	is_popular?: boolean;
	/**
	 * Whether the post can be promoted.
	 */
	is_eligible_for_promotion?: boolean;
	/**
	 * Whether the post is a spherical (360°) video post.
	 */
	is_spherical?: boolean;
	/**
	 * ID of the parent post, for example the original post where the page was mentioned.
	 */
	parent_id?: string;
	/**
	 * Privacy settings of the post.
	 */
	privacy?: {
		/**
		 * The privacy setting: `EVERYONE`, `ALL_FRIENDS`, `FRIENDS_OF_FRIENDS`, `CUSTOM`, or `SELF`.
		 */
		value?: string;
		/**
		 * Description of the privacy setting, as shown on Facebook.
		 */
		description?: string;
		/**
		 * Which friends can see the post, when `value` is `CUSTOM`.
		 */
		friends?: string;
		/**
		 * Comma-separated IDs that can see the post, when `value` is `CUSTOM`.
		 */
		allow?: string;
		/**
		 * Comma-separated IDs that can't see the post, when `value` is `CUSTOM`.
		 */
		deny?: string;
	};
	/**
	 * ID of the post to use when promoting it.
	 */
	promotable_id?: string;
	/**
	 * Share count of the post.
	 */
	shares?: {
		/**
		 * Number of shares.
		 */
		count?: number;
	};
	/**
	 * The backdated time of the post. Empty for regular posts.
	 */
	backdated_time?: string;
};

/**
 * Get a post
 * Gets a Facebook page post by its ID.
 */
export async function getPost(
	this: EndpointFunctionThis,
	payload: {
		input: GetPostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetPostOutput>> {
	const response = await this.endpointCaller<GetPostOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'GetPost',
		},
		payload,
	);
	return response;
}
