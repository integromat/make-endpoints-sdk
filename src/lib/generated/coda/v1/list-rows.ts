// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRowsInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * Filter for the returned rows, as `<column_id_or_name>:<value>`. Quote a column name (`"My Column":123`). `value` is a JSON value, so quote strings (`c-tuVwxYz:"groceries"`). Pass it as plain text; it is URL-encoded automatically.
	 */
	query?: string;
	/**
	 * If true, row `values` are keyed by column name instead of column ID. Discouraged: renamed columns break callers that rely on names.
	 */
	useColumnNames?: boolean;
	/**
	 * The format of cell values. `simple` (default) returns strings, numbers, or booleans, with arrays as comma-delimited strings. `simpleWithArrays` returns arrays as JSON arrays. `rich` returns Markdown text and JSON-LD objects for currency, lookup, image, person, and hyperlink values.
	 */
	valueFormat?: '' | 'simple' | 'simpleWithArrays' | 'rich';
	/**
	 * If true, returns only visible rows and columns.
	 */
	visibleOnly?: boolean;
	/**
	 * Sort order of the rows. If omitted, rows are sorted by creation time, newest first; `createdAt` returns the same order. `updatedAt` ignores updates to calculated values. `natural` is the order in the table view and implies `visibleOnly` = true.
	 */
	sortBy?: '' | 'createdAt' | 'natural' | 'updatedAt';
	/**
	 * Maximum number of rows to return in this call. The API defaults to 25.
	 */
	limit?: number;
	/**
	 * Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.
	 */
	pageToken?: string;
	/**
	 * Token from `nextSyncToken` of a previous call. Returns only the rows relevant to the query since that call.
	 */
	syncToken?: string;
};

export type ListRowsOutput = {
	/**
	 * The rows on this page of results.
	 *
	 * Items: Info about a row.
	 */
	items?: {
		/**
		 * ID of the row, for example `i-tuVwxYz`.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `row`.
		 */
		type?: string;
		/**
		 * API link to the row.
		 */
		href?: string;
		/**
		 * The display name of the row, based on its identifying column.
		 */
		name?: string;
		/**
		 * Index of the row within the table.
		 */
		index?: number;
		/**
		 * Browser-friendly link to the row.
		 */
		browserLink?: string;
		/**
		 * Timestamp for when the row was created.
		 */
		createdAt?: string;
		/**
		 * Timestamp for when the row was last modified.
		 */
		updatedAt?: string;
		/**
		 * Cell values of the row, keyed by column ID (or by column name when `useColumnNames` is true). The value shape depends on `valueFormat`.
		 */
		values?: Record<string, JSONValue>;
	}[];
	/**
	 * API link to these results.
	 */
	href?: string;
	/**
	 * Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.
	 */
	nextPageToken?: string;
	/**
	 * API link to the next page of results. Absent when there are no more results.
	 */
	nextPageLink?: string;
	/**
	 * Token to pass as `syncToken` in a later call to get only the rows changed since this call. Returned on the last page of results.
	 */
	nextSyncToken?: string;
};

/**
 * List rows
 * Returns a list of rows in a table.
 */
export async function listRows(
	this: EndpointFunctionThis,
	payload: {
		input: ListRowsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListRowsOutput> {
	const response = await this.endpointCaller<ListRowsOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'listRows',
		},
		payload,
	);
	return response.output;
}
