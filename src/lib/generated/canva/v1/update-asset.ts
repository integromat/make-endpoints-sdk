// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateAssetInput = {
	/**
	 * The ID of the asset to update.
	 */
	assetId: string;
	/**
	 * The new name for the asset.
	 */
	name?: string;
	/**
	 * Tags to attach to the asset. Users can search by these tags in the Canva UI.
	 *
	 * Items: A tag value.
	 */
	tags?: string[];
};

export type UpdateAssetOutput = {
	/**
	 * The updated asset object.
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
		 * A thumbnail image representing the asset.
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
			 * State of the import job.
			 */
			state?: string;
			/**
			 * Error details if the import failed.
			 */
			error?: {
				/**
				 * Error message.
				 */
				message?: string;
				/**
				 * Error code. Values: `file_too_big`, `import_failed`.
				 */
				code?: string;
			};
		};
	};
};

/**
 * Update an asset
 * Updates the metadata for an asset.
 */
export async function updateAsset(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateAssetInput;
		connectionId: number;
	},
): Promise<UpdateAssetOutput> {
	const response = await this.endpointCaller<UpdateAssetOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'updateAsset',
		},
		payload,
	);
	return response.output;
}
