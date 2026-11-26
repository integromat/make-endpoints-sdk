// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type UpdateRowInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is updated. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.
	 */
	rowIdOrName: string;
	/**
	 * The edit to apply to the row.
	 */
	row: {
		/**
		 * Cell values to set. Cells of columns not listed here are not changed.
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
	};
	/**
	 * If true, the API stores the values as sent and does not try to parse them.
	 */
	disableParsing?: boolean;
};

export type UpdateRowOutput = {
	/**
	 * An arbitrary unique identifier for this request.
	 */
	requestId?: string;
	/**
	 * ID of the updated row.
	 */
	id?: string;
};

/**
 * Update a row
 * Updates cell values of a row in a table.
 */
export async function updateRow(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateRowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdateRowOutput>> {
	const response = await this.endpointCaller<UpdateRowOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'updateRow',
		},
		payload,
	);
	return response;
}
