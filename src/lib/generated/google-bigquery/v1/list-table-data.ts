// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListTableDataInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the dataset.
	 */
	datasetId: string;
	/**
	 * The ID of the table.
	 */
	tableId: string;
	/**
	 * Subset of fields to return, supports select into sub fields. Example: `a,e.d.f`.
	 */
	selectedFields?: string;
	/**
	 * Output timestamp as usec int64. Default is false. Sent as the `formatOptions.useInt64Timestamp` query parameter.
	 */
	useInt64Timestamp?: boolean;
	/**
	 * The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the `useInt64Timestamp` option. The two options are mutually exclusive: sending both is rejected by the API. Values: `FLOAT64` - Timestamp is output as float64 seconds since Unix epoch; `INT64` - Timestamp is output as int64 microseconds since Unix epoch; `ISO8601_STRING` - Timestamp is output as ISO 8601 String ("YYYY-MM-DDTHH:MM:SS.FFFFFFFFFFFFZ"). Sent as the `formatOptions.timestampOutputFormat` query parameter.
	 */
	timestampOutputFormat?: '' | 'FLOAT64' | 'INT64' | 'ISO8601_STRING';
	/**
	 * Start row index of the table. Zero-based.
	 */
	startIndex?: number;
	/**
	 * Row limit of the table.
	 */
	maxResults?: number;
	/**
	 * The `pageToken` value returned by the previous call, to request the next page of results. Omit it for the first page.
	 */
	pageToken?: string;
};

export type ListTableDataOutput = {
	/**
	 * The resource type of the response.
	 */
	kind?: string;
	/**
	 * A hash of this page of results.
	 */
	etag?: string;
	/**
	 * Total rows of the entire table. In order to show default value 0 we have to present it as string.
	 */
	totalRows?: string;
	/**
	 * A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
	 */
	pageToken?: string;
	/**
	 * Rows of results.
	 *
	 * Items: A single row.
	 */
	rows?: {
		/**
		 * The cells of the row, in the order of `schema.fields`.
		 *
		 * Items: One cell of the row.
		 */
		f?: {
			/**
			 * The cell value as a string (`null` for a SQL NULL). A nested `RECORD` is an object with its own `f` array of cells; a `REPEATED` field is an array of `{ "v": ... }` items.
			 */
			v?: Record<string, JSONValue>;
		}[];
	}[];
};

/**
 * List table data
 * Lists the content of a table in rows.
 */
export async function listTableData(
	this: EndpointFunctionThis,
	payload: {
		input: ListTableDataInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListTableDataOutput> {
	const response = await this.endpointCaller<ListTableDataOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'listTableData',
		},
		payload,
	);
	return response.output;
}
