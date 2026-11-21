// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateARowInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * Rows to insert or upsert.
	 *
	 * Items: A row to insert or upsert.
	 */
	rows: {
		/**
		 * Cell values of the row.
		 *
		 * Items: A cell value to set.
		 */
		cells: {
			/**
			 * Column ID (for example `c-tuVwxYz`), column URL, or column name (fragile, discouraged). Use the listColumns endpoint to find column IDs.
			 */
			column: string;
			/**
			 * The cell value: a string, number, or boolean, or an array of these for multi-value columns. Leave empty to clear the existing cell value.
			 */
			value?: Record<string, JSONValue>;
		}[];
	}[];
	/**
	 * Column IDs, URLs, or names (fragile, discouraged) used as upsert keys. Rows whose key column values match an existing row update that row instead of adding a new one. Omit to always insert.
	 *
	 * Items: Column ID, URL, or name used as an upsert key.
	 */
	keyColumns?: string[];
	/**
	 * If true, the API stores the values as sent and does not try to parse them.
	 */
	disableParsing?: boolean;
};

export type CreateARowOutput = {
	/**
	 * An arbitrary unique identifier for this request.
	 */
	requestId?: string;
	/**
	 * IDs of the rows that will be added. Returned only when `keyColumns` is not set.
	 *
	 * Items: ID of a row that will be added.
	 */
	addedRowIds?: string[];
};

/**
 * Insert or upsert rows
 * Inserts rows into a table, optionally updating existing rows that match the key columns.
 */
export async function createArow(
	this: EndpointFunctionThis,
	payload: {
		input: CreateARowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateARowOutput> {
	const response = await this.endpointCaller<CreateARowOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'createARow',
		},
		payload,
	);
	return response.output;
}
