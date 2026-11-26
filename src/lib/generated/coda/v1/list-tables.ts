// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListTablesInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * Types of tables to include. If omitted, tables, views, and databases are all included.
	 */
	tableTypes?: '' | 'table' | 'view' | 'database';
	/**
	 * Determines how the tables are sorted.
	 */
	sortBy?: '' | 'name';
	/**
	 * Maximum number of tables to return in this call. The API defaults to 25.
	 */
	limit?: number;
	/**
	 * Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.
	 */
	pageToken?: string;
};

export type ListTablesOutput = {
	/**
	 * The tables on this page of results.
	 *
	 * Items: Reference to a table or view.
	 */
	items?: {
		/**
		 * ID of the table, for example `grid-pqRst-U`.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `table`.
		 */
		type?: string;
		/**
		 * The kind of table: `table`, `view`, or `database`.
		 */
		tableType?: string;
		/**
		 * API link to the table.
		 */
		href?: string;
		/**
		 * Browser-friendly link to the table.
		 */
		browserLink?: string;
		/**
		 * Name of the table.
		 */
		name?: string;
		/**
		 * Reference to the page containing the table.
		 */
		parent?: {
			/**
			 * ID of the page.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `page`.
			 */
			type?: string;
			/**
			 * API link to the page.
			 */
			href?: string;
			/**
			 * Browser-friendly link to the page.
			 */
			browserLink?: string;
			/**
			 * Name of the page.
			 */
			name?: string;
		};
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
};

/**
 * List tables
 * Returns a list of tables and views in a doc.
 */
export async function listTables(
	this: EndpointFunctionThis,
	payload: {
		input: ListTablesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListTablesOutput>> {
	const response = await this.endpointCaller<ListTablesOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'listTables',
		},
		payload,
	);
	return response;
}
