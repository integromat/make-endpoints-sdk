// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetResourceInput = {
	/**
	 * The type of the resource. Use `video` for all video and audio assets.
	 */
	resource_type: 'image' | 'video' | 'raw';
	/**
	 * The delivery type of the resource.
	 */
	type:
		| 'upload'
		| 'private'
		| 'authenticated'
		| 'facebook'
		| 'twitter'
		| 'gravatar'
		| 'youtube'
		| 'vimeo'
		| 'hulu'
		| 'animoto'
		| 'worldstarhiphop'
		| 'dailymotion';
	/**
	 * The public ID of the resource to retrieve. If the public ID contains path separators (e.g., `folder/image`), pass the full path.
	 */
	public_id: string;
	/**
	 * Whether to include color information: predominant colors and histogram of 32 leading colors.
	 */
	colors?: boolean;
	/**
	 * Whether to include IPTC, XMP, and detailed Exif metadata in the response. Applies to both image and video asset types. Also returns the asset's ETag value for all asset types, including raw.
	 */
	media_metadata?: boolean;
	/**
	 * Whether to include a list of coordinates of detected faces.
	 */
	faces?: boolean;
	/**
	 * Whether to return quality analysis scores for the image.
	 */
	quality_analysis?: boolean;
	/**
	 * Whether to return accessibility analysis scores for the image.
	 */
	accessibility_analysis?: boolean;
	/**
	 * Whether to report the number of pages in multi-page documents (e.g., PDF). For PSD/TIFF with clipping paths, the response includes a `pages` value indicating how many clipping paths are stored.
	 */
	pages?: boolean;
	/**
	 * Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity detection.
	 */
	phash?: boolean;
	/**
	 * Whether to include previously specified custom cropping coordinates and faces coordinates.
	 */
	coordinates?: boolean;
	/**
	 * Whether to include details of all the backed up versions of the asset. Note: requesting versions consumes an additional 10 units of your rate limit (11 total).
	 */
	versions?: boolean;
	/**
	 * Whether to include the list of assets related to this asset.
	 */
	related?: boolean;
	/**
	 * If there are more than 100 related assets, pass the `related_next_cursor` value from a previous response to retrieve the next page.
	 */
	related_next_cursor?: string;
	/**
	 * Maximum number of derived assets to return (maximum 100).
	 */
	max_results?: number;
	/**
	 * If there are more derived images than `max_results`, pass the `derived_next_cursor` value from a previous response to retrieve the next page.
	 */
	derived_next_cursor?: string;
};

export type GetResourceOutput = {
	/**
	 * The unique, immutable identifier of the asset.
	 */
	asset_id?: string;
	/**
	 * The public identifier of the resource.
	 */
	public_id?: string;
	/**
	 * The format of the resource (e.g., jpg, png, mp4).
	 */
	format?: string;
	/**
	 * The current version number of the resource.
	 */
	version?: number;
	/**
	 * The type of the resource (image, video, or raw).
	 */
	resource_type?: string;
	/**
	 * The delivery type of the resource (e.g., upload, private, authenticated).
	 */
	type?: string;
	/**
	 * The date and time the resource was originally uploaded (ISO 8601).
	 */
	created_at?: string;
	/**
	 * The size of the resource in bytes.
	 */
	bytes?: number;
	/**
	 * The width of the resource in pixels.
	 */
	width?: number;
	/**
	 * The height of the resource in pixels.
	 */
	height?: number;
	/**
	 * The legacy folder path of the resource.
	 */
	folder?: string;
	/**
	 * The asset folder path where the resource is stored.
	 */
	asset_folder?: string;
	/**
	 * Whether the asset is a placeholder.
	 */
	placeholder?: boolean;
	/**
	 * Whether the asset has a backup.
	 */
	backup?: boolean;
	/**
	 * The user-friendly display name of the asset.
	 */
	display_name?: string;
	/**
	 * The HTTP URL for accessing the resource.
	 */
	url?: string;
	/**
	 * The HTTPS URL for accessing the resource.
	 */
	secure_url?: string;
	/**
	 * The type of moderation applied to the resource (e.g., `aws_rek`, `manual`, `webpurify`).
	 */
	moderation_kind?: string;
	/**
	 * The moderation result for the resource (e.g., `approved`, `rejected`, `pending`).
	 */
	moderation_status?: string;
	/**
	 * Detailed moderation results for the resource. Each entry represents one moderation check.
	 *
	 * Items: A moderation check result.
	 */
	moderation?: {
		/**
		 * The moderation add-on type (e.g., `aws_rek`, `manual`, `webpurify`).
		 */
		kind?: string;
		/**
		 * The moderation status (`approved`, `rejected`, `pending`, `aborted`).
		 */
		status?: string;
		/**
		 * The detailed moderation response from the add-on.
		 */
		response?: Record<string, JSONValue>;
		/**
		 * When the moderation check was last updated (ISO 8601).
		 */
		updated_at?: string;
	}[];
	/**
	 * The list of tags assigned to the resource.
	 *
	 * Items: A tag assigned to the resource.
	 */
	tags?: string[];
	/**
	 * Contextual metadata associated with the resource.
	 */
	context?: {
		/**
		 * Custom contextual metadata key-value pairs.
		 */
		custom?: Record<string, JSONValue>;
	};
	/**
	 * Structured metadata fields and values assigned to the resource.
	 */
	metadata?: Record<string, JSONValue>;
	/**
	 * Timestamps of when specific attributes were last changed.
	 */
	last_updated?: {
		/**
		 * When access control was last updated (ISO 8601).
		 */
		access_control_updated_at?: string;
		/**
		 * When context metadata was last updated (ISO 8601).
		 */
		context_updated_at?: string;
		/**
		 * When structured metadata was last updated (ISO 8601).
		 */
		metadata_updated_at?: string;
		/**
		 * When the public ID was last updated (ISO 8601).
		 */
		public_id_updated_at?: string;
		/**
		 * When tags were last updated (ISO 8601).
		 */
		tags_updated_at?: string;
		/**
		 * When the resource was last updated (ISO 8601).
		 */
		updated_at?: string;
	};
	/**
	 * A cursor for pagination through derived resources.
	 */
	next_cursor?: string;
	/**
	 * A list of derived assets (transformations) of this resource.
	 *
	 * Items: A derived asset of this resource.
	 */
	derived?: {
		/**
		 * The transformation string applied to the derived asset.
		 */
		transformation?: string;
		/**
		 * The format of the derived asset.
		 */
		format?: string;
		/**
		 * The size of the derived asset in bytes.
		 */
		bytes?: number;
		/**
		 * The identifier of the derived asset.
		 */
		id?: string;
		/**
		 * The HTTP URL of the derived asset.
		 */
		url?: string;
		/**
		 * The HTTPS URL of the derived asset.
		 */
		secure_url?: string;
	}[];
	/**
	 * The ETag of the resource for caching purposes.
	 */
	etag?: string;
	/**
	 * IPTC, XMP, and Exif metadata. Returned when `media_metadata` is requested.
	 */
	image_metadata?: Record<string, JSONValue>;
	/**
	 * Custom cropping and faces coordinates. Returned when `coordinates` is requested.
	 */
	coordinates?: Record<string, JSONValue>;
	/**
	 * A list of coordinates of detected faces. Returned when `faces` is requested.
	 */
	faces?: number[][];
	/**
	 * A score indicating how likely the image is an illustration (0 = photo, 1 = illustration).
	 */
	illustration_score?: number;
	/**
	 * Whether the image has semi-transparent pixels.
	 */
	semi_transparent?: boolean;
	/**
	 * Whether the image is grayscale.
	 */
	grayscale?: boolean;
	/**
	 * Color information for the image. Returned when `colors` is requested.
	 */
	colors?: string[][];
	/**
	 * The predominant colors detected in the image.
	 */
	predominant?: {
		/**
		 * Predominant colors as classified by Google.
		 */
		google?: string[][];
		/**
		 * Predominant colors as classified by Cloudinary.
		 */
		cloudinary?: string[][];
	};
	/**
	 * The perceptual hash of the image. Returned when `phash` is requested.
	 */
	phash?: string;
	/**
	 * Quality analysis scores. Returned when `quality_analysis` is requested.
	 */
	quality_analysis?: {
		/**
		 * The focus score of the image (0 to 1).
		 */
		focus?: number;
	};
	/**
	 * Accessibility analysis scores. Returned when `accessibility_analysis` is requested.
	 */
	accessibility_analysis?: {
		/**
		 * Analysis of colorblind accessibility.
		 */
		colorblind_accessibility_analysis?: {
			/**
			 * The ratio of distinct edges visible to colorblind viewers.
			 */
			distinct_edges?: number;
			/**
			 * The ratio of distinct colors visible to colorblind viewers.
			 */
			distinct_colors?: number;
			/**
			 * The pair of colors most difficult to distinguish.
			 *
			 * Items: A color in the most indistinct pair.
			 */
			most_indistinct_pair?: string[];
		};
		/**
		 * The overall colorblind accessibility score (0 to 1).
		 */
		colorblind_accessibility_score?: number;
	};
	/**
	 * The number of pages in a multi-page document. Returned when `pages` is requested.
	 */
	pages?: number;
	/**
	 * Related assets. Returned when `related` is requested.
	 */
	related?: Record<string, JSONValue>;
	/**
	 * Usage details for the resource.
	 */
	usage?: Record<string, JSONValue>;
	/**
	 * The original filename of the uploaded resource.
	 */
	original_filename?: string;
	/**
	 * Details of all backed up versions. Returned when `versions` is requested.
	 *
	 * Items: A backed up version of the asset.
	 */
	versions?: {
		/**
		 * The unique identifier of this version.
		 */
		version_id?: string;
		/**
		 * The version number.
		 */
		version?: string;
		/**
		 * The format of this version.
		 */
		format?: string;
		/**
		 * The size of this version in bytes.
		 */
		size?: number;
		/**
		 * The timestamp when this version was created.
		 */
		time?: string;
		/**
		 * Whether this version can be restored.
		 */
		restorable?: boolean;
	}[];
};

/**
 * Get a resource
 * Returns the details of a single resource by its public ID, including all derived assets.
 */
export async function getResource(
	this: EndpointFunctionThis,
	payload: {
		input: GetResourceInput;
		connectionId: number;
	},
): Promise<GetResourceOutput> {
	const response = await this.endpointCaller<GetResourceOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'getResource',
		},
		payload,
	);
	return response.output;
}
