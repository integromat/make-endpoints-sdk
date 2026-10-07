// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UploadResourceInput = {
	/**
	 * The type of asset to upload. Use `video` for all video and audio assets. Use `auto` to automatically detect the file type.
	 */
	resource_type: 'image' | 'video' | 'raw' | 'auto';
	/**
	 * The URL of the file to upload. Accepts a remote HTTP/HTTPS URL, an FTP URL, a Base64 Data URI, or a private storage bucket (S3 or Google Storage) URL of an allowlisted bucket. Binary file upload is not supported in SDK Endpoints.
	 */
	file: string;
	/**
	 * The delivery type of the uploaded resource.
	 */
	type?: '' | 'upload' | 'private' | 'authenticated';
	/**
	 * The identifier for accessing the uploaded asset. A randomly generated ID is assigned if left blank. Can include folder path separated by `/`. Do not include a file extension for images and videos.
	 */
	public_id?: string;
	/**
	 * A user-friendly name for the asset shown in the Media Library. Defaults to the public ID. Can have spaces and special characters but cannot include forward slashes.
	 */
	display_name?: string;
	/**
	 * The full path of the folder where the asset is placed in the Cloudinary repository. Does not impact the asset's public ID path. Not relevant for product environments using legacy fixed folder mode.
	 */
	asset_folder?: string;
	/**
	 * Only relevant for product environments using legacy fixed folder mode. Defines both the folder path and a prefix prepended to the public ID.
	 */
	folder?: string;
	/**
	 * The name of an upload preset defined for the Cloudinary product environment. Upload presets centrally define upload options.
	 */
	upload_preset?: string;
	/**
	 * Whether to use the original file name of the uploaded asset as the public ID. Only relevant if `public_id` is not set.
	 */
	use_filename?: boolean;
	/**
	 * Whether to append random characters to the filename to guarantee uniqueness. Only relevant when `use_filename` is `true`.
	 */
	unique_filename?: boolean;
	/**
	 * Whether to overwrite an existing asset with the same public ID. When `false` and an asset with the same public ID exists, the upload returns the existing asset.
	 */
	overwrite?: boolean;
	/**
	 * A comma-separated list of tags to assign to the uploaded asset (e.g., `animal,cat`).
	 */
	tags?: string;
	/**
	 * A pipe-separated list of key-value pairs of contextual metadata (e.g., `alt=My image|caption=Profile image`). Escape `=` and `|` with a backslash.
	 */
	context?: string;
	/**
	 * A pipe-separated list of custom metadata fields (by external_id) and values (e.g., `in_stock_id=50|color_id=["green","red"]`).
	 */
	metadata?: string;
	/**
	 * An HTTP or HTTPS URL to notify your application (a webhook) when the upload or any requested asynchronous action is completed.
	 */
	notification_url?: string;
	/**
	 * A pipe-separated list of transformations to create for the uploaded asset eagerly, instead of lazily on first access.
	 */
	eager?: string;
	/**
	 * Whether to invalidate CDN cached copies of a previously uploaded asset with the same public ID.
	 */
	invalidate?: boolean;
	/**
	 * The moderation mode: `manual`, `perception_point`, `webpurify`, `aws_rek`, `duplicate:<threshold>`, `aws_rek_video`, or `google_video_moderation`. Multiple values separated by pipe.
	 */
	moderation?: string;
	/**
	 * Whether to return IPTC, XMP, and detailed Exif metadata of the uploaded asset in the response.
	 */
	media_metadata?: boolean;
	/**
	 * Whether to retrieve predominant colors and color histogram of the uploaded image.
	 */
	colors?: boolean;
	/**
	 * Whether to return the coordinates of faces contained in the uploaded image.
	 */
	faces?: boolean;
	/**
	 * Whether to return a quality analysis value for the image between 0 and 1.
	 */
	quality_analysis?: boolean;
	/**
	 * Whether to return the perceptual hash (pHash) of the uploaded photo for image similarity detection.
	 */
	phash?: boolean;
};

export type UploadResourceOutput = {
	/**
	 * The unique, immutable identifier of the uploaded asset.
	 */
	asset_id?: string;
	/**
	 * The public identifier of the uploaded resource.
	 */
	public_id?: string;
	/**
	 * The version number of the uploaded resource.
	 */
	version?: number;
	/**
	 * The unique identifier of this specific version.
	 */
	version_id?: string;
	/**
	 * The signature of the upload response for verification.
	 */
	signature?: string;
	/**
	 * The width of the uploaded resource in pixels.
	 */
	width?: number;
	/**
	 * The height of the uploaded resource in pixels.
	 */
	height?: number;
	/**
	 * The format of the uploaded resource (e.g., jpg, png, mp4).
	 */
	format?: string;
	/**
	 * The type of the uploaded resource (image, video, or raw).
	 */
	resource_type?: string;
	/**
	 * The date and time the resource was uploaded (ISO 8601).
	 */
	created_at?: string;
	/**
	 * The tags assigned to the uploaded resource.
	 *
	 * Items: A tag assigned to the resource.
	 */
	tags?: string[];
	/**
	 * The size of the uploaded resource in bytes.
	 */
	bytes?: number;
	/**
	 * The delivery type of the uploaded resource.
	 */
	type?: string;
	/**
	 * The ETag of the uploaded resource.
	 */
	etag?: string;
	/**
	 * Whether the asset is a placeholder.
	 */
	placeholder?: boolean;
	/**
	 * The asset folder path where the resource is stored.
	 */
	asset_folder?: string;
	/**
	 * The user-friendly display name of the asset.
	 */
	display_name?: string;
	/**
	 * The HTTP URL for accessing the uploaded resource.
	 */
	url?: string;
	/**
	 * The HTTPS URL for accessing the uploaded resource.
	 */
	secure_url?: string;
	/**
	 * The access mode of the uploaded resource.
	 */
	access_mode?: string;
	/**
	 * The original filename of the uploaded resource.
	 */
	original_filename?: string;
	/**
	 * Whether an existing resource was overwritten.
	 */
	overwritten?: boolean;
	/**
	 * Whether the resource already existed (when overwrite is false).
	 */
	existing?: boolean;
	/**
	 * Contextual metadata associated with the resource.
	 */
	context?: Record<string, JSONValue>;
	/**
	 * Structured metadata fields and values assigned to the resource.
	 */
	metadata?: Record<string, JSONValue>;
};

/**
 * Upload a resource
 * Uploads a resource from a URL to the product environment.
 */
export async function uploadResource(
	this: EndpointFunctionThis,
	payload: {
		input: UploadResourceInput;
		connectionId: number;
	},
): Promise<UploadResourceOutput> {
	const response = await this.endpointCaller<UploadResourceOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'uploadResource',
		},
		payload,
	);
	return response.output;
}
