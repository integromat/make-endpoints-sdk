// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRecordsInput = {
	/**
	 * The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.
	 */
	entitySetName: string;
	/**
	 * An OData `$filter` expression, for example `statecode eq 0`. Sent as `$filter`. See [Filter rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/filter-rows).
	 */
	filter?: string;
	/**
	 * A comma-separated list of columns to return, for example `name,revenue`. Sent as `$select`. Select only what you need.
	 */
	select?: string;
	/**
	 * A comma-separated list of navigation properties to expand. Sent as `$expand`.
	 */
	expand?: string;
	/**
	 * A comma-separated list of columns with optional `asc` or `desc`, for example `name asc`. Sent as `$orderby`.
	 */
	orderby?: string;
	/**
	 * An OData `$apply` expression to aggregate and group data. Sent as `$apply`. See [Aggregate data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/aggregate-data).
	 */
	apply?: string;
	/**
	 * The maximum number of records to return. Sent as `$top`. Don't combine it with the maximum page size.
	 */
	top?: number;
	/**
	 * If `true`, the response includes the count of matching records. Sent as `$count`.
	 */
	count?: boolean;
	/**
	 * The maximum number of records per page. Sent as `Prefer: odata.maxpagesize`. Without it, up to 5,000 records are returned.
	 */
	maxPageSize?: number;
};

export type ListRecordsOutput = {
	/**
	 * The OData metadata context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The number of records that match the request. Only present when Count is `true`.
	 */
	'@odata.count'?: number;
	/**
	 * The URL of the next page of records. Only present when more records exist. To get the next page, call the Arbitrary call Endpoint with the part of this URL after the organization URL.
	 */
	'@odata.nextLink'?: string;
	/**
	 * The records in the page. The columns depend on the table and on Select.
	 *
	 * Items: A record. Its columns depend on the table.
	 */
	value?: Record<string, JSONValue>[];
};

/**
 * List records
 * Returns a page of records from a Dataverse table.
 */
export async function listRecords(
	this: EndpointFunctionThis,
	payload: {
		input: ListRecordsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListRecordsOutput> {
	const response = await this.endpointCaller<ListRecordsOutput>(
		{
			appName: 'microsoft-dynamics-365-crm',
			appVersion: 1,
			endpointName: 'listRecords',
		},
		payload,
	);
	return response.output;
}
