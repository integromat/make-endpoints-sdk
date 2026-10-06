// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetUsageInput = {
	/**
	 * The date for the usage report. Must be within the last 3 months. Defaults to the current date if left empty.
	 */
	date?: string;
};

export type GetUsageOutput = {
	/**
	 * The name of the Cloudinary plan.
	 */
	plan?: string;
	/**
	 * The date the usage data was last updated.
	 */
	last_updated?: string;
	/**
	 * The date that was requested for the usage report (ISO 8601).
	 */
	date_requested?: string;
	/**
	 * Transformation usage statistics.
	 */
	transformations?: {
		/**
		 * The number of transformations used.
		 */
		usage?: number;
		/**
		 * The transformation limit for the plan.
		 */
		limit?: number;
		/**
		 * The percentage of the transformation limit used.
		 */
		used_percent?: number;
		/**
		 * The number of credits used for transformations.
		 */
		credits_usage?: number;
		/**
		 * Detailed breakdown of transformation usage by type.
		 */
		breakdown?: Record<string, JSONValue>;
	};
	/**
	 * Object usage statistics.
	 */
	objects?: {
		/**
		 * The number of objects.
		 */
		usage?: number;
	};
	/**
	 * Bandwidth usage statistics.
	 */
	bandwidth?: {
		/**
		 * The bandwidth used in bytes.
		 */
		usage?: number;
		/**
		 * The bandwidth limit in bytes.
		 */
		limit?: number;
		/**
		 * The percentage of the bandwidth limit used.
		 */
		used_percent?: number;
		/**
		 * The number of credits used for bandwidth.
		 */
		credits_usage?: number;
	};
	/**
	 * Storage usage statistics.
	 */
	storage?: {
		/**
		 * The storage used in bytes.
		 */
		usage?: number;
		/**
		 * The storage limit in bytes.
		 */
		limit?: number;
		/**
		 * The percentage of the storage limit used.
		 */
		used_percent?: number;
		/**
		 * The number of credits used for storage.
		 */
		credits_usage?: number;
	};
	/**
	 * Credit usage and limits.
	 */
	credits?: {
		/**
		 * The number of credits used.
		 */
		usage?: number;
		/**
		 * The credit limit for the plan.
		 */
		limit?: number;
		/**
		 * The percentage of credits used.
		 */
		used_percent?: number;
	};
	/**
	 * The number of API requests made.
	 */
	requests?: number;
	/**
	 * The total number of resources stored.
	 */
	resources?: number;
	/**
	 * The total number of derived resources.
	 */
	derived_resources?: number;
	/**
	 * Media size limits for the plan.
	 */
	media_limits?: {
		/**
		 * The maximum image file size in bytes.
		 */
		image_max_size_bytes?: number;
		/**
		 * The maximum video file size in bytes.
		 */
		video_max_size_bytes?: number;
		/**
		 * The maximum raw file size in bytes.
		 */
		raw_max_size_bytes?: number;
		/**
		 * The maximum number of pixels for an image.
		 */
		image_max_px?: number;
		/**
		 * The maximum total number of pixels for an asset.
		 */
		asset_max_total_px?: number;
	};
};

/**
 * Get usage report
 * Returns a usage report for the product environment.
 */
export async function getUsage(
	this: EndpointFunctionThis,
	payload: {
		input: GetUsageInput;
		connectionId: number;
	},
): Promise<GetUsageOutput> {
	const response = await this.endpointCaller<GetUsageOutput>(
		{
			appName: 'cloudinary',
			appVersion: 1,
			endpointName: 'getUsage',
		},
		payload,
	);
	return response.output;
}
