// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateUrlAssetUploadJobInput = {
	/**
	 * A name for the asset. Must be between 1 and 255 characters.
	 */
	name: string;
	/**
	 * The URL of the file to upload. Must be publicly accessible on the internet. Maximum length: 2048 characters.
	 */
	url: string;
};

export type CreateUrlAssetUploadJobOutput = {
	/**
	 * The asset upload job status.
	 */
	job?: {
		/**
		 * The ID of the asset upload job. Use this to poll the job status.
		 */
		id?: string;
		/**
		 * The status of the job. Values: `failed`, `in_progress`, `success`.
		 */
		status?: string;
		/**
		 * The uploaded asset metadata (available when status is `success`).
		 */
		asset?: {
			/**
			 * The type of the asset. Values: `image`, `video`.
			 */
			type?: string;
			/**
			 * The asset ID.
			 */
			id?: string;
			/**
			 * The name of the asset.
			 */
			name?: string;
			/**
			 * User-facing tags.
			 *
			 * Items: A tag value.
			 */
			tags?: string[];
			/**
			 * When the asset was created, as a Unix timestamp.
			 */
			created_at?: number;
			/**
			 * When the asset was last updated, as a Unix timestamp.
			 */
			updated_at?: number;
			/**
			 * The asset owner.
			 */
			owner?: {
				/**
				 * The user ID.
				 */
				user_id?: string;
				/**
				 * The team ID.
				 */
				team_id?: string;
			};
			/**
			 * A thumbnail for the asset.
			 */
			thumbnail?: {
				/**
				 * Width in pixels.
				 */
				width?: number;
				/**
				 * Height in pixels.
				 */
				height?: number;
				/**
				 * Thumbnail URL. Expires after 15 minutes.
				 */
				url?: string;
			};
			/**
			 * Type-specific metadata. For images: type, width, height, smart_tags. For videos: type, width, height, duration_ms.
			 */
			metadata?: {
				/**
				 * The metadata type. Values: `image`, `video`.
				 */
				type?: string;
				/**
				 * The width in pixels.
				 */
				width?: number;
				/**
				 * The height in pixels.
				 */
				height?: number;
				/**
				 * AI-generated tags for images.
				 *
				 * Items: A smart tag value.
				 */
				smart_tags?: string[];
				/**
				 * The duration of the video in milliseconds. Only present for video assets.
				 */
				duration_ms?: number;
			};
		};
		/**
		 * Error details if the upload failed.
		 */
		error?: {
			/**
			 * A short error code.
			 */
			code?: string;
			/**
			 * A human-readable error message.
			 */
			message?: string;
		};
	};
};

/**
 * Create asset upload job via URL
 * Creates an asynchronous job to upload an asset from a URL.
 */
export async function createUrlAssetUploadJob(
	this: EndpointFunctionThis,
	payload: {
		input: CreateUrlAssetUploadJobInput;
		connectionId: number;
	},
): Promise<CreateUrlAssetUploadJobOutput> {
	const response = await this.endpointCaller<CreateUrlAssetUploadJobOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'createUrlAssetUploadJob',
		},
		payload,
	);
	return response.output;
}
