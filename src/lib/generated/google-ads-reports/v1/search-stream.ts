// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type SearchStreamInput = {
	/**
	 * The ID of the Google Ads account (customer) to query, as 10 digits without hyphens. For example, `1234567890`. Metrics cannot be queried for manager (MCC) or canceled accounts; query one of their client accounts instead. The connection's Customer ID is sent as the login customer automatically.
	 */
	customerId: string;
	/**
	 * The [Google Ads Query Language (GAQL)](https://developers.google.com/google-ads/api/docs/query/overview) query. For example, `SELECT campaign.id, campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS`. See the [query structure](https://developers.google.com/google-ads/api/docs/query/structure) and the [fields reference](https://developers.google.com/google-ads/api/fields/v25/overview) for the available resources, segments, and metrics.
	 */
	query: string;
	/**
	 * Determines whether a summary row is returned. By default, the summary row is not returned. When requested, the summary row is sent in a batch by itself after all other query results. A summary row requires at least one `metrics.*` field in the query.
	 */
	summaryRowSetting?: '' | 'NO_SUMMARY_ROW' | 'SUMMARY_ROW_WITH_RESULTS' | 'SUMMARY_ROW_ONLY';
};

export type SearchStreamOutput = {
	/**
	 * The Endpoint returns an array of batch objects, each with the fields described here. The rows in this batch that matched the query. A batch contains up to 10,000 rows. Omitted when the batch has no rows.
	 *
	 * Items: A `GoogleAdsRow` with the resources, segments, and metrics selected in the query. Field names written in snake_case in the query are returned in camelCase, for example `metrics.cost_micros` → `metrics.costMicros` and `ad_group.id` → `adGroup.id`. The `resourceName` of the queried resource is always included. 64-bit integer values (IDs, `metrics.impressions`, `metrics.costMicros`) are returned as strings. Fields with no value are omitted.
	 */
	results?: Record<string, JSONValue>[];
	/**
	 * A `GoogleAdsRow` that aggregates the metrics across all results (sum, average, rate, and so on). Returned only when the summary row setting requests it, in the last batch by itself.
	 */
	summaryRow?: Record<string, JSONValue>;
	/**
	 * Comma-separated list of the fields requested in the query, in camelCase. For example, `campaign.id,campaign.name,metrics.clicks`.
	 */
	fieldMask?: string;
	/**
	 * The attributes of the metrics in the results.
	 *
	 * Items: The attributes of one metric.
	 */
	metricAttributes?: {
		/**
		 * The name of the metric.
		 */
		name?: string;
		/**
		 * The attributes of the metric.
		 *
		 * Items: An attribute of the metric in key-value format.
		 */
		attributes?: {
			/**
			 * The key of the attribute.
			 */
			key?: string;
			/**
			 * The value of the attribute.
			 */
			value?: string;
		}[];
	}[];
	/**
	 * The amount of resources consumed to serve the query, as a 64-bit integer string. Returned in the final batch of results; the summary row reports its own value separately.
	 */
	queryResourceConsumption?: string;
	/**
	 * The unique ID of the request, used for debugging.
	 */
	requestId?: string;
};

/**
 * Search with GAQL (stream)
 * Runs a Google Ads Query Language (GAQL) query against a Google Ads account and returns all matching rows in batches.
 */
export async function searchStream(
	this: EndpointFunctionThis,
	payload: {
		input: SearchStreamInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<SearchStreamOutput>> {
	const response = await this.endpointCaller<SearchStreamOutput>(
		{
			appName: 'google-ads-reports',
			appVersion: 1,
			endpointName: 'searchStream',
		},
		payload,
	);
	return response;
}
