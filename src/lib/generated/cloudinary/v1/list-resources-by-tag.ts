// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListResourcesByTagInput = {
	/**
	 * The type of resources to list. Use `video` for all video and audio assets.
	 */
	resource_type: 'image' | 'video' | 'raw';
	/**
	 * The tag to filter resources by. Only resources with this tag are returned.
	 */
	tag: string;
	/**
	 * The maximum number of resources to return (maximum 500).
	 */
	max_results?: number;
	/**
	 * A cursor for pagination. Pass the `next_cursor` value from a previous response to retrieve the next page of results.
	 */
	next_cursor?: string;
	/**
	 * Control the order of returned assets by `created_at` date.
	 */
	direction?: '' | 'desc' | 'asc';
	/**
	 * Whether to include the full list of tags for each resource in the response.
	 */
	tags?: boolean;
	/**
	 * Whether to include contextual metadata for each resource in the response.
	 */
	context?: boolean;
	/**
	 * Whether to include the structured metadata fields and values assigned to each asset.
	 */
	metadata?: boolean;
};

export type ListResourcesByTagOutput = {
	/**
	 * The list of resources with the specified tag.
	 *
	 * Items: A resource with the specified tag.
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
 * List resources by tag
 * Lists resources with a specified tag.
 */
export async function listResourcesByTag(
	this: EndpointFunctionThis,
	payload: {
		input: ListResourcesByTagInput;
		connectionId: number;
	},
): Promise<ListResourcesByTagOutput> {
	const response = await this.endpointCaller<ListResourcesByTagOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'listResourcesByTag',
		},
		payload,
	);
	return response.output;
}
