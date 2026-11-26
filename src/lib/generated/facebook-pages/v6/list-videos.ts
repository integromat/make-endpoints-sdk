// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListVideosInput = {
	/**
	 * The ID of the page. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * Which videos to return: videos uploaded by the page or videos the page is tagged in.
	 */
	type?: '' | 'uploaded' | 'tagged';
	/**
	 * Fields to return for each video. If empty, these fields are returned: `id,title,description,created_time,updated_time,published,permalink_url,picture,source,length,embed_html,embeddable,content_category,content_tags,custom_labels,backdated_time,backdated_time_granularity,scheduled_publish_time,format,from,icon,is_crosspost_video,is_crossposting_eligible,is_episode,is_instagram_eligible,place,post_id,privacy,spherical,status,universal_video_id`.
	 */
	fields?:
		| ''
		| 'id'
		| 'title'
		| 'description'
		| 'created_time'
		| 'updated_time'
		| 'published'
		| 'permalink_url'
		| 'picture'
		| 'source'
		| 'length'
		| 'embed_html'
		| 'embeddable'
		| 'content_category'
		| 'content_tags'
		| 'custom_labels'
		| 'backdated_time'
		| 'backdated_time_granularity'
		| 'scheduled_publish_time'
		| 'format'
		| 'from'
		| 'icon'
		| 'is_crosspost_video'
		| 'is_crossposting_eligible'
		| 'is_episode'
		| 'is_instagram_eligible'
		| 'place'
		| 'post_id'
		| 'privacy'
		| 'spherical'
		| 'status'
		| 'universal_video_id'
		| 'is_reference_only'
		| 'live_status'
		| 'post_views'
		| 'views'
		| 'ad_breaks';
	/**
	 * Maximum number of items to return.
	 */
	limit?: number;
	/**
	 * Cursor of the next page, from `paging.cursors.after` of the previous response.
	 */
	after?: string;
	/**
	 * Cursor of the previous page, from `paging.cursors.before` of the previous response.
	 */
	before?: string;
};

export type ListVideosOutput = {
	/**
	 * List of videos.
	 *
	 * Items: A video.
	 */
	data?: {
		/**
		 * The ID of the video.
		 */
		id?: string;
		/**
		 * Description of the video.
		 */
		description?: string;
		/**
		 * The time the video was published.
		 */
		created_time?: string;
		/**
		 * The last time the video or its caption was updated.
		 */
		updated_time?: string;
		/**
		 * Whether the video is published.
		 */
		published?: boolean;
		/**
		 * The permanent path of the video on facebook.com, for example `/{page}/videos/{video_id}/`.
		 */
		permalink_url?: string;
		/**
		 * URL of the thumbnail of the video.
		 */
		picture?: string;
		/**
		 * URL of the playable video file. Expires after some time.
		 */
		source?: string;
		/**
		 * Duration of the video in seconds.
		 */
		length?: number;
		/**
		 * HTML for embedding the video on a website.
		 */
		embed_html?: string;
		/**
		 * Whether the video can be embedded.
		 */
		embeddable?: boolean;
		/**
		 * Content category of the video, for example `BUSINESS` or `MUSIC`.
		 */
		content_category?: string;
		/**
		 * IDs of tags describing the video content.
		 *
		 * Items: A content tag ID.
		 */
		content_tags?: string[];
		/**
		 * Labels of the video, shown only in insights.
		 *
		 * Items: A custom label.
		 */
		custom_labels?: string[];
		/**
		 * The backdated time of the video post.
		 */
		backdated_time?: string;
		/**
		 * Which part of `backdated_time` is displayed.
		 */
		backdated_time_granularity?: string;
		/**
		 * When a scheduled video goes live.
		 */
		scheduled_publish_time?: string;
		/**
		 * Available formats of the video.
		 *
		 * Items: A format of the video.
		 */
		format?: {
			/**
			 * Name of the format, for example `130x130` or `native`.
			 */
			filter?: string;
			/**
			 * HTML for embedding the video in this format.
			 */
			embed_html?: string;
			/**
			 * Height in pixels.
			 */
			height?: number;
			/**
			 * Width in pixels.
			 */
			width?: number;
			/**
			 * URL of the thumbnail in this format.
			 */
			picture?: string;
		}[];
		/**
		 * The page or person that created the video.
		 */
		from?: {
			/**
			 * ID.
			 */
			id?: string;
			/**
			 * Name.
			 */
			name?: string;
		};
		/**
		 * URL of the icon Facebook shows when the video is published to the feed.
		 */
		icon?: string;
		/**
		 * Whether the video is crossposted from another page.
		 */
		is_crosspost_video?: boolean;
		/**
		 * Whether the video can be crossposted.
		 */
		is_crossposting_eligible?: boolean;
		/**
		 * Whether the video is an episode of a show.
		 */
		is_episode?: boolean;
		/**
		 * Whether the video can be shared to Instagram.
		 */
		is_instagram_eligible?: boolean;
		/**
		 * Whether the video is used only as a copyright reference.
		 */
		is_reference_only?: boolean;
		/**
		 * Status of a live video, for example `LIVE` or `VOD`.
		 */
		live_status?: string;
		/**
		 * The place (location page) associated with the object.
		 */
		place?: {
			/**
			 * ID of the place page.
			 */
			id?: string;
			/**
			 * Name of the place.
			 */
			name?: string;
			/**
			 * Location of the place.
			 */
			location?: {
				/**
				 * City.
				 */
				city?: string;
				/**
				 * Country.
				 */
				country?: string;
				/**
				 * Latitude.
				 */
				latitude?: number;
				/**
				 * Longitude.
				 */
				longitude?: number;
				/**
				 * Street address.
				 */
				street?: string;
				/**
				 * Postal code.
				 */
				zip?: string;
			};
		};
		/**
		 * ID of the post created for the video.
		 */
		post_id?: string;
		/**
		 * Number of views of the video post.
		 */
		post_views?: number;
		/**
		 * Number of views of the video.
		 */
		views?: number;
		/**
		 * Privacy settings.
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
			 * Which friends can see the object, when `value` is `CUSTOM`.
			 */
			friends?: string;
			/**
			 * Comma-separated IDs that can see the object, when `value` is `CUSTOM`.
			 */
			allow?: string;
			/**
			 * Comma-separated IDs that can't see the object, when `value` is `CUSTOM`.
			 */
			deny?: string;
		};
		/**
		 * Whether the video is a 360° video.
		 */
		spherical?: boolean;
		/**
		 * Upload, processing, and publishing status of the video.
		 */
		status?: {
			/**
			 * Overall status: `uploading`, `upload_complete`, `upload_failed`, `processing`, `ready`, `expired`, or `error`.
			 */
			video_status?: string;
			/**
			 * Progress of the upload.
			 */
			uploading_phase?: {
				/**
				 * Status of the uploading phase: `not_started`, `in_progress`, `complete`, or `error`.
				 */
				status?: string;
				/**
				 * Number of bytes of the video file uploaded so far.
				 */
				bytes_transfered?: number;
				/**
				 * Size of the video file in bytes.
				 */
				source_file_size?: number;
				/**
				 * Errors of the upload.
				 *
				 * Items: An upload error.
				 */
				errors?: {
					/**
					 * Error message.
					 */
					message?: string;
				}[];
			};
			/**
			 * Progress of processing, such as encoding and thumbnail generation.
			 */
			processing_phase?: {
				/**
				 * Status of the processing phase: `not_started`, `in_progress`, `complete`, or `error`.
				 */
				status?: string;
				/**
				 * Details of a processing error.
				 */
				error?: {
					/**
					 * Error message.
					 */
					message?: string;
				};
			};
			/**
			 * Progress of publishing to the page.
			 */
			publishing_phase?: {
				/**
				 * Status of the publishing phase: `not_started`, `in_progress`, `complete`, or `error`.
				 */
				status?: string;
				/**
				 * Publish state: `published`, `scheduled`, `draft`, or `error`.
				 */
				publish_status?: string;
				/**
				 * Actual or scheduled publish time.
				 */
				publish_time?: string;
				/**
				 * Details of a publishing error.
				 */
				error?: {
					/**
					 * Error message.
					 */
					message?: string;
				};
			};
		};
		/**
		 * The publisher's asset management code of the video.
		 */
		universal_video_id?: string;
		/**
		 * Time offsets of ad breaks, in milliseconds.
		 *
		 * Items: An ad break offset in milliseconds.
		 */
		ad_breaks?: number[];
	}[];
	/**
	 * Cursors for paging through results.
	 */
	paging?: {
		/**
		 * Paging cursors.
		 */
		cursors?: {
			/**
			 * Cursor of the start of the page. Pass it as `before` to get the previous page.
			 */
			before?: string;
			/**
			 * Cursor of the end of the page. Pass it as `after` to get the next page.
			 */
			after?: string;
		};
		/**
		 * URL of the next page. Missing on the last page.
		 */
		next?: string;
		/**
		 * URL of the previous page. Missing on the first page.
		 */
		previous?: string;
	};
};

/**
 * List videos
 * Lists the videos of a Facebook page.
 */
export async function listVideos(
	this: EndpointFunctionThis,
	payload: {
		input: ListVideosInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListVideosOutput>> {
	const response = await this.endpointCaller<ListVideosOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'ListVideos',
		},
		payload,
	);
	return response;
}
