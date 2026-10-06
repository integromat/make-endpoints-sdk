// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type AppendValuesInput = {
	/**
	 * The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) of a range to search for a logical table of data. Values are appended after the last row of that table. For a whole sheet, use `Sheet1` or `Sheet1!A1:D`.
	 */
	range: string;
	/**
	 * How the input data should be interpreted. `RAW` stores values as-is. `USER_ENTERED` parses them as if typed in the Google Sheets UI (numbers, dates, and formulas).
	 */
	valueInputOption: 'RAW' | 'USER_ENTERED';
	/**
	 * The data to append. This is a two-dimensional array: the outer array is the major dimension (rows by default), and each inner array is one row or column. Supported cell types are boolean, string, and number.
	 */
	values: Record<string, JSONValue>[][];
	/**
	 * The major dimension of `values`. When omitted, Google defaults to `ROWS`.
	 */
	majorDimension?: '' | 'ROWS' | 'COLUMNS';
	/**
	 * How the input data should be inserted. `OVERWRITE` writes over existing data in the area. `INSERT_ROWS` inserts new rows for the data.
	 */
	insertDataOption?: '' | 'OVERWRITE' | 'INSERT_ROWS';
	/**
	 * When `true`, the response includes the values of the cells that were appended. By default, responses do not include the updated values.
	 */
	includeValuesInResponse?: boolean;
	/**
	 * How values in the response should be rendered. Google defaults to `FORMATTED_VALUE`. Meaningful only when `includeValuesInResponse` is `true`.
	 */
	responseValueRenderOption?: '' | 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
	/**
	 * How dates, times, and durations in the response should be rendered. Ignored when `responseValueRenderOption` is `FORMATTED_VALUE`. Google defaults to `SERIAL_NUMBER`.
	 */
	responseDateTimeRenderOption?: '' | 'SERIAL_NUMBER' | 'FORMATTED_STRING';
};

export type AppendValuesOutput = {
	/**
	 * The spreadsheet the updates were applied to.
	 */
	spreadsheetId?: string;
	/**
	 * The range (in A1 notation) of the table that values were appended to, before the values were appended. Empty if no table was found.
	 */
	tableRange?: string;
	/**
	 * Information about the updates that were applied.
	 */
	updates?: {
		/**
		 * The spreadsheet the updates were applied to.
		 */
		spreadsheetId?: string;
		/**
		 * The range (in A1 notation) that updates were applied to.
		 */
		updatedRange?: string;
		/**
		 * The number of rows where at least one cell in the row was updated.
		 */
		updatedRows?: number;
		/**
		 * The number of columns where at least one cell in the column was updated.
		 */
		updatedColumns?: number;
		/**
		 * The number of cells updated.
		 */
		updatedCells?: number;
		/**
		 * The values of the cells after updates were applied. Present only when `includeValuesInResponse` is `true`.
		 */
		updatedData?: {
			/**
			 * The range the values cover, in A1 notation.
			 */
			range?: string;
			/**
			 * The major dimension of the values.
			 */
			majorDimension?: string;
			/**
			 * The appended cell values.
			 */
			values?: Record<string, JSONValue>[][];
		};
	};
};

/**
 * Append values
 * Appends values after the last row of a table in a spreadsheet.
 */
export async function appendValues(
	this: EndpointFunctionThis,
	payload: {
		input: AppendValuesInput;
		connectionId: number;
	},
): Promise<AppendValuesOutput> {
	const response = await this.endpointCaller<AppendValuesOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'appendValues',
		},
		payload,
	);
	return response.output;
}
