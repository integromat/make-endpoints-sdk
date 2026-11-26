// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListPhotosInput = {
	/**
	 * The ID of the page that owns the photos or the album. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of a page or of an album. Use an album ID to list the photos of one album.
	 */
	page_or_album_id: string;
	/**
	 * Which photos of a page to return. Default is `profile`. Ignored for albums.
	 */
	type?: '' | 'uploaded' | 'profile';
	/**
	 * The business tag ID to filter photos.
	 */
	biz_tag_id?: number;
	/**
	 * The ID of a business. Facebook uses it to support filters such as recently used photos.
	 */
	business_id?: string;
	/**
	 * Fields to return for each photo. If empty, these fields are returned: `id,name,alt_text,alt_text_custom,album,created_time,updated_time,backdated_time,can_backdate,can_delete,can_tag,from,height,width,icon,images,webp_images,link,picture,place,page_story_id,name_tags`.
	 */
	fields?:
		| ''
		| 'id'
		| 'name'
		| 'alt_text'
		| 'alt_text_custom'
		| 'album'
		| 'created_time'
		| 'updated_time'
		| 'backdated_time'
		| 'can_backdate'
		| 'can_delete'
		| 'can_tag'
		| 'from'
		| 'height'
		| 'width'
		| 'icon'
		| 'images'
		| 'webp_images'
		| 'link'
		| 'picture'
		| 'place'
		| 'page_story_id'
		| 'name_tags'
		| 'backdated_time_granularity'
		| 'target';
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

export type ListPhotosOutput = {
	/**
	 * List of photos.
	 *
	 * Items: A photo.
	 */
	data?: {
		/**
		 * The ID of the photo.
		 */
		id?: string;
		/**
		 * The caption of the photo.
		 */
		name?: string;
		/**
		 * Automatically generated alternative text of the photo.
		 */
		alt_text?: string;
		/**
		 * Alternative text of the photo provided by the user.
		 */
		alt_text_custom?: string;
		/**
		 * The album the photo is in.
		 */
		album?: {
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
		 * The time the photo was published.
		 */
		created_time?: string;
		/**
		 * The last time the photo was updated.
		 */
		updated_time?: string;
		/**
		 * The backdated creation time of the photo.
		 */
		backdated_time?: string;
		/**
		 * Which part of `backdated_time` is displayed.
		 */
		backdated_time_granularity?: string;
		/**
		 * Whether the viewer can backdate the photo.
		 */
		can_backdate?: boolean;
		/**
		 * Whether the viewer can delete the photo.
		 */
		can_delete?: boolean;
		/**
		 * Whether the viewer can tag the photo.
		 */
		can_tag?: boolean;
		/**
		 * The page or person that uploaded the photo.
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
		 * Height of the photo in pixels.
		 */
		height?: number;
		/**
		 * Width of the photo in pixels.
		 */
		width?: number;
		/**
		 * URL of the icon Facebook shows when the photo is published to the feed.
		 */
		icon?: string;
		/**
		 * Stored versions of the photo in different sizes.
		 *
		 * Items: A stored version of the photo.
		 */
		images?: {
			/**
			 * Height in pixels.
			 */
			height?: number;
			/**
			 * Width in pixels.
			 */
			width?: number;
			/**
			 * URL of the image.
			 */
			source?: string;
		}[];
		/**
		 * Stored versions of the photo in WebP format.
		 *
		 * Items: A stored version of the photo.
		 */
		webp_images?: {
			/**
			 * Height in pixels.
			 */
			height?: number;
			/**
			 * Width in pixels.
			 */
			width?: number;
			/**
			 * URL of the image.
			 */
			source?: string;
		}[];
		/**
		 * URL of the photo on Facebook.
		 */
		link?: string;
		/**
		 * URL of a thumbnail of the photo.
		 */
		picture?: string;
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
		 * ID of the page story of the photo. Only for published photos.
		 */
		page_story_id?: string;
		/**
		 * Profiles mentioned in the caption.
		 *
		 * Items: A profile mentioned in the caption.
		 */
		name_tags?: {
			/**
			 * ID of the profile.
			 */
			id?: string;
			/**
			 * Name of the profile.
			 */
			name?: string;
			/**
			 * Type of the profile, for example `user` or `page`.
			 */
			type?: string;
			/**
			 * Position of the mention in the caption.
			 */
			offset?: number;
			/**
			 * Length of the mention.
			 */
			length?: number;
		}[];
		/**
		 * The profile the photo is published to.
		 */
		target?: {
			/**
			 * ID of the profile.
			 */
			id?: string;
		};
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
 * List photos
 * Lists the photos of a Facebook page or album.
 */
export async function listPhotos(
	this: EndpointFunctionThis,
	payload: {
		input: ListPhotosInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListPhotosOutput>> {
	const response = await this.endpointCaller<ListPhotosOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'ListPhotos',
		},
		payload,
	);
	return response;
}
