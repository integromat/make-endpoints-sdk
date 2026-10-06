// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAssetInput = {
	/**
	 * The ID of the asset to retrieve.
	 */
	assetId: string;
};

export type GetAssetOutput = {
	/**
	 * The asset object containing metadata about the asset.
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
		 * User-facing tags attached to the asset.
		 *
		 * Items: A tag value.
		 */
		tags?: string[];
		/**
		 * When the asset was added to Canva, as a Unix timestamp (in seconds).
		 */
		created_at?: number;
		/**
		 * When the asset was last updated, as a Unix timestamp (in seconds).
		 */
		updated_at?: number;
		/**
		 * Metadata for the asset owner.
		 */
		owner?: {
			/**
			 * The user ID of the owner.
			 */
			user_id?: string;
			/**
			 * The team ID of the owner.
			 */
			team_id?: string;
		};
		/**
		 * A thumbnail image representing the asset. URL expires after 15 minutes.
		 */
		thumbnail?: {
			/**
			 * Width of the thumbnail in pixels.
			 */
			width?: number;
			/**
			 * Height of the thumbnail in pixels.
			 */
			height?: number;
			/**
			 * URL for retrieving the thumbnail. Expires after 15 minutes.
			 */
			url?: string;
		};
		/**
		 * Type-specific metadata for the asset. For images: type, width, height, smart_tags. For videos: type, width, height, duration_ms.
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
		/**
		 * The import status of the asset.
		 */
		import_status?: {
			/**
			 * State of the import job. Values: `failed`, `in_progress`, `success`.
			 */
			state?: string;
			/**
			 * Error details if the import failed.
			 */
			error?: {
				/**
				 * A human-readable error message.
				 */
				message?: string;
				/**
				 * A short error code. Values: `file_too_big`, `import_failed`.
				 */
				code?: string;
			};
		};
	};
};

/**
 * Get an asset
 * Retrieves metadata for an asset.
 */
export async function getAsset(
	this: EndpointFunctionThis,
	payload: {
		input: GetAssetInput;
		connectionId: number;
	},
): Promise<GetAssetOutput> {
	const response = await this.endpointCaller<GetAssetOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'getAsset',
		},
		payload,
	);
	return response.output;
}
