// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchResourcesInput = {
	/**
	 * The search expression in Lucene-like query language (e.g., `resource_type:image AND tags:cat`). If not provided, all resources are listed (up to `max_results`). See [search expressions](https://cloudinary.com/documentation/search_api#expressions).
	 */
	expression?: string;
	/**
	 * Sort criteria. Each entry specifies a field name and a direction. Supported fields include `created_at`, `public_id`, `score` (for relevance).
	 *
	 * Items: A sort criterion specifying a field name and direction.
	 */
	sort_by?: {
		/**
		 * The field to sort by (e.g., `created_at`, `public_id`, `score`).
		 */
		key?: string;
		/**
		 * The sort direction.
		 */
		value?: '' | 'asc' | 'desc';
	}[];
	/**
	 * The maximum number of resources to return (maximum 500).
	 */
	max_results?: number;
	/**
	 * A cursor for pagination. Pass the `next_cursor` value from a previous response to retrieve the next page of results.
	 */
	next_cursor?: string;
	/**
	 * The name of an additional asset attribute to include for each asset in the response. Possible values: `context`, `tags`, `metadata`, `image_metadata`, `image_analysis`. You can specify multiple values separated by commas.
	 */
	with_field?: string;
	/**
	 * A comma-separated list of fields to include in the response. Takes precedence over `with_field`, so make sure to include any additional attributes here as well. The following fields are always included: `public_id`, `asset_id`, `asset_folder`, `created_at`, `status`, `type`, `resource_type`.
	 */
	fields?: string;
	/**
	 * The name of a field for which an aggregation count should be calculated and returned in the response. Tier 2 only.
	 */
	aggregate?: '' | 'resource_type' | 'type' | 'format' | 'pixels' | 'duration' | 'bytes';
};

export type SearchResourcesOutput = {
	/**
	 * The total number of resources matching the search expression.
	 */
	total_count?: number;
	/**
	 * The time taken to process the search query, in milliseconds.
	 */
	time?: number;
	/**
	 * A cursor for retrieving the next page of results. Pass this value in the `next_cursor` input parameter.
	 */
	next_cursor?: string;
	/**
	 * The list of resources matching the search criteria.
	 *
	 * Items: A resource matching the search criteria.
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
		 * The asset folder path where the resource is stored.
		 */
		asset_folder?: string;
		/**
		 * The user-friendly display name of the asset.
		 */
		display_name?: string;
		/**
		 * The folder path of the resource.
		 */
		folder?: string;
		/**
		 * The filename of the resource.
		 */
		filename?: string;
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
		 * The date and time the resource was originally uploaded (ISO 8601).
		 */
		created_at?: string;
		/**
		 * The date and time the resource was last uploaded (ISO 8601).
		 */
		uploaded_at?: string;
		/**
		 * The size of the resource in bytes.
		 */
		bytes?: number;
		/**
		 * The size of the resource backup in bytes.
		 */
		backup_bytes?: number;
		/**
		 * The width of the resource in pixels.
		 */
		width?: number;
		/**
		 * The height of the resource in pixels.
		 */
		height?: number;
		/**
		 * The aspect ratio of the resource.
		 */
		aspect_ratio?: number;
		/**
		 * The total number of pixels in the resource.
		 */
		pixels?: number;
		/**
		 * The HTTP URL for accessing the resource.
		 */
		url?: string;
		/**
		 * The HTTPS URL for accessing the resource.
		 */
		secure_url?: string;
		/**
		 * The status of the resource.
		 */
		status?: string;
		/**
		 * The access mode of the resource.
		 */
		access_mode?: string;
		/**
		 * The tags assigned to the resource. Returned when requested via `with_field`.
		 *
		 * Items: A tag assigned to the resource.
		 */
		tags?: string[];
		/**
		 * Contextual metadata. Returned when requested via `with_field`.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The ETag of the resource.
		 */
		etag?: string;
		/**
		 * Information about who created the resource.
		 */
		created_by?: Record<string, JSONValue>;
		/**
		 * Information about who uploaded the resource.
		 */
		uploaded_by?: Record<string, JSONValue>;
	}[];
	/**
	 * Aggregation counts. Returned when `aggregate` is provided.
	 */
	aggregations?: Record<string, JSONValue>;
};

/**
 * Search resources
 * Searches for resources using a Lucene-like query expression.
 */
export async function searchResources(
	this: EndpointFunctionThis,
	payload: {
		input: SearchResourcesInput;
		connectionId: number;
	},
): Promise<SearchResourcesOutput> {
	const response = await this.endpointCaller<SearchResourcesOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'searchResources',
		},
		payload,
	);
	return response.output;
}
