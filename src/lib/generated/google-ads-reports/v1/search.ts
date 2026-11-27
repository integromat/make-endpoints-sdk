// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type SearchInput = {
	/**
	 * The ID of the Google Ads account (customer) to query, as 10 digits without hyphens. For example, `1234567890`. Metrics cannot be queried for manager (MCC) or canceled accounts; query one of their client accounts instead. The connection's Customer ID is sent as the login customer automatically.
	 */
	customerId: string;
	/**
	 * The [Google Ads Query Language (GAQL)](https://developers.google.com/google-ads/api/docs/query/overview) query. For example, `SELECT campaign.id, campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS`. See the [query structure](https://developers.google.com/google-ads/api/docs/query/structure) and the [fields reference](https://developers.google.com/google-ads/api/fields/v25/overview) for the available resources, segments, and metrics.
	 */
	query: string;
	/**
	 * Settings that control the request count, the summary row, and whether result rows are returned.
	 */
	searchSettings?: {
		/**
		 * If `true`, the total number of results that match the query, ignoring the `LIMIT` clause, is returned in `totalResultsCount`. Default is `false`.
		 */
		returnTotalResultsCount?: boolean;
		/**
		 * If `true`, a summary row that aggregates the metrics of all results is returned in `summaryRow` after all other results. Requires at least one `metrics.*` field in the query. Default is `false`.
		 */
		returnSummaryRow?: boolean;
		/**
		 * If `true`, result rows are excluded from the response; use it together with the total results count or the summary row. Default is `false`.
		 */
		omitResults?: boolean;
	};
	/**
	 * If `true`, the request is validated but not executed. No rows are returned.
	 */
	validateOnly?: boolean;
	/**
	 * Token of the page to retrieve. Leave empty for the first page. To get the next page, pass the `nextPageToken` value from the previous response. Pages have a fixed size of 10,000 rows.
	 */
	pageToken?: string;
};

export type SearchOutput = {
	/**
	 * The rows that matched the query, up to 10,000 per page. Omitted when no rows matched or when `omitResults` was set.
	 *
	 * Items: A `GoogleAdsRow` with the resources, segments, and metrics selected in the query. Field names written in snake_case in the query are returned in camelCase, for example `metrics.cost_micros` → `metrics.costMicros` and `ad_group.id` → `adGroup.id`. The `resourceName` of the queried resource is always included. 64-bit integer values (IDs, `metrics.impressions`, `metrics.costMicros`) are returned as strings. Fields with no value are omitted.
	 */
	results?: Record<string, JSONValue>[];
	/**
	 * Pagination token for the next page of results. Pass it as `pageToken` in the next request. Not returned for the last page.
	 */
	nextPageToken?: string;
	/**
	 * Total number of results that match the query ignoring the `LIMIT` clause, as a 64-bit integer string. Returned only when `returnTotalResultsCount` was set.
	 */
	totalResultsCount?: string;
	/**
	 * A `GoogleAdsRow` that aggregates the metrics across all results (sum, average, rate, and so on). Returned only when `returnSummaryRow` was set.
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
	 * The amount of resources consumed to serve the query, as a 64-bit integer string.
	 */
	queryResourceConsumption?: string;
};

/**
 * Search with GAQL
 * Runs a Google Ads Query Language (GAQL) query against a Google Ads account and returns one page of matching rows.
 */
export async function search(
	this: EndpointFunctionThis,
	payload: {
		input: SearchInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<SearchOutput>> {
	const response = await this.endpointCaller<SearchOutput>(
		{
			appName: 'google-ads-reports',
			appVersion: 1,
			endpointName: 'search',
		},
		payload,
	);
	return response;
}
