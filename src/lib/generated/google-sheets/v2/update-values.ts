// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateValuesInput = {
	/**
	 * The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) of the values to update, for example `Sheet1!A1:C3` or `'My Sheet'!A2`.
	 */
	range: string;
	/**
	 * How the input data should be interpreted. `RAW` stores values as-is. `USER_ENTERED` parses them as if typed in the Google Sheets UI (numbers, dates, and formulas).
	 */
	valueInputOption: 'RAW' | 'USER_ENTERED';
	/**
	 * The data to write. This is a two-dimensional array: the outer array is the major dimension (rows by default), and each inner array is one row or column. Supported cell types are boolean, string, and number. Use an empty string to clear a cell. Null values are skipped.
	 */
	values: Record<string, JSONValue>[][];
	/**
	 * The major dimension of `values`. When omitted, Google defaults to `ROWS`.
	 */
	majorDimension?: '' | 'ROWS' | 'COLUMNS';
	/**
	 * When `true`, the response includes the values of the cells that were updated. By default, responses do not include the updated values.
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

export type UpdateValuesOutput = {
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
		 * The updated cell values.
		 */
		values?: Record<string, JSONValue>[][];
	};
};

/**
 * Update values
 * Sets values in a range of a spreadsheet.
 */
export async function updateValues(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateValuesInput;
		connectionId: number;
	},
): Promise<UpdateValuesOutput> {
	const response = await this.endpointCaller<UpdateValuesOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'updateValues',
		},
		payload,
	);
	return response.output;
}
