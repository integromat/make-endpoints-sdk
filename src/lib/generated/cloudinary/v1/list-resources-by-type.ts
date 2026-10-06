// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListResourcesByTypeInput = {
	/**
	 * The type of resources to list. Use `video` for all video and audio assets.
	 */
	resource_type: 'image' | 'video' | 'raw';
	/**
	 * The delivery type of assets to list. When not set, resources of all delivery types are returned. Required when using `Prefix` or `Public IDs` filters.
	 */
	type?:
		| ''
		| 'upload'
		| 'private'
		| 'authenticated'
		| 'fetch'
		| 'facebook'
		| 'twitter'
		| 'gravatar'
		| 'youtube'
		| 'vimeo'
		| 'hulu'
		| 'animoto'
		| 'worldstarhiphop'
		| 'dailymotion'
		| 'list';
	/**
	 * Find all assets with a public ID that starts with the specified prefix. The assets are sorted by public ID in the response. Requires `Delivery type` to be set.
	 */
	prefix?: string;
	/**
	 * An array of public IDs (up to 100). Get assets with the specified public IDs. Does not support public IDs with a `+` character (use `Prefix` instead). Requires `Delivery type` to be set.
	 *
	 * Items: A public ID of a resource to retrieve.
	 */
	public_ids?: string[];
	/**
	 * The maximum number of resources to return (up to 500).
	 */
	max_results?: number;
	/**
	 * A cursor for pagination. Pass the `next_cursor` value from a previous response to retrieve the next page of results.
	 */
	next_cursor?: string;
	/**
	 * Get assets created since the specified timestamp in ISO 8601 format (e.g., `2020-12-01`). Requires `Direction` to be set to `Ascending`, otherwise results may be empty. Not supported when `prefix` or `public_ids` are specified.
	 */
	start_at?: string;
	/**
	 * Control the order of returned assets by `created_at` date. If a `prefix` is specified, this parameter is ignored and results are sorted by public ID.
	 */
	direction?: '' | 'desc' | 'asc';
	/**
	 * Whether to include key-value pairs of contextual metadata associated with each asset.
	 */
	context?: boolean;
	/**
	 * Whether to include the structured metadata fields and values assigned to each asset.
	 */
	metadata?: boolean;
	/**
	 * Whether to include the list of tags for each resource in the response.
	 */
	tags?: boolean;
};

export type ListResourcesByTypeOutput = {
	/**
	 * The list of resources matching the specified type.
	 *
	 * Items: A resource in the list.
	 */
	resources?: {
		/**
		 * The unique, immutable identifier of the asset.
		 */
		asset_id?: string;
		/**
		 * The public identifier of the resource.
		 */
		public_id?: string;
		/**
		 * The format of the resource.
		 */
		format?: string;
		/**
		 * The current version number.
		 */
		version?: number;
		/**
		 * The type of the resource.
		 */
		resource_type?: string;
		/**
		 * The delivery type of the resource.
		 */
		type?: string;
		/**
		 * The date and time the resource was created (ISO 8601).
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
		 * The tags assigned to the resource. Returned when `tags` is requested.
		 *
		 * Items: A tag assigned to the resource.
		 */
		tags?: string[];
		/**
		 * Contextual metadata. Returned when `context` is requested.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Structured metadata. Returned when `metadata` is requested.
		 */
		metadata?: Record<string, JSONValue>;
		/**
		 * Timestamps of when specific attributes were last changed.
		 */
		last_updated?: {
			/**
			 * When tags were last updated (ISO 8601).
			 */
			tags_updated_at?: string;
			/**
			 * When structured metadata was last updated (ISO 8601).
			 */
			metadata_updated_at?: string;
			/**
			 * When the resource was last updated (ISO 8601).
			 */
			updated_at?: string;
		};
		/**
		 * The type of moderation applied to the resource (e.g., `aws_rek`, `manual`, `webpurify`).
		 */
		moderation_kind?: string;
		/**
		 * The moderation result for the resource (e.g., `approved`, `rejected`, `pending`).
		 */
		moderation_status?: string;
	}[];
	/**
	 * A cursor for retrieving the next page of results.
	 */
	next_cursor?: string;
	/**
	 * The maximum number of API requests allowed per hour.
	 */
	rate_limit_allowed?: number;
	/**
	 * The time at which the rate limit counter resets (ISO 8601).
	 */
	rate_limit_reset_at?: string;
	/**
	 * The number of API requests remaining before the rate limit is reached.
	 */
	rate_limit_remaining?: number;
};

/**
 * List resources by type
 * Lists resources of a specified resource type.
 */
export async function listResourcesByType(
	this: EndpointFunctionThis,
	payload: {
		input: ListResourcesByTypeInput;
		connectionId: number;
	},
): Promise<ListResourcesByTypeOutput> {
	const response = await this.endpointCaller<ListResourcesByTypeOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'listResourcesByType',
		},
		payload,
	);
	return response.output;
}
