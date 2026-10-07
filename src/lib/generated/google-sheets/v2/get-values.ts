// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetValuesInput = {
	/**
	 * The ID of the spreadsheet to read. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation) of the range to retrieve. For example, `Sheet1!A1:D5` or `'My Sheet'!A1`.
	 */
	range: string;
	/**
	 * The major dimension that results should use. For data `A1=1,B1=2,A2=3,B2=4`, `ROWS` returns `[[1,2],[3,4]]` and `COLUMNS` returns `[[1,3],[2,4]]`.
	 */
	majorDimension?: '' | 'ROWS' | 'COLUMNS';
	/**
	 * How values should be represented in the output. Google defaults to `FORMATTED_VALUE` when omitted.
	 */
	valueRenderOption?: '' | 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
	/**
	 * How dates, times, and durations should be represented in the output. Ignored when `valueRenderOption` is `FORMATTED_VALUE`. Google defaults to `SERIAL_NUMBER` when omitted.
	 */
	dateTimeRenderOption?: '' | 'SERIAL_NUMBER' | 'FORMATTED_STRING';
};

export type GetValuesOutput = {
	/**
	 * The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation). For output, this is the entire requested range even though trailing empty rows and columns are omitted from `values`.
	 */
	range?: string;
	/**
	 * The major dimension of the values. `ROWS` means each inner array is a row; `COLUMNS` means each inner array is a column.
	 */
	majorDimension?: string;
	/**
	 * The data that was read. The outer array is the major dimension; each inner array is one row or column. Trailing empty rows and columns are omitted.
	 */
	values?: Record<string, JSONValue>[][];
};

/**
 * Get values
 * Retrieves values from a cell range of a spreadsheet.
 */
export async function getValues(
	this: EndpointFunctionThis,
	payload: {
		input: GetValuesInput;
		connectionId: number;
	},
): Promise<GetValuesOutput> {
	const response = await this.endpointCaller<GetValuesOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'getValues',
		},
		payload,
	);
	return response.output;
}
