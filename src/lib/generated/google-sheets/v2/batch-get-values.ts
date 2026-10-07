// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type BatchGetValuesInput = {
	/**
	 * The ID of the spreadsheet to read. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The ranges to retrieve, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation). The order of results matches this list.
	 *
	 * Items: A range in A1 or R1C1 notation, for example `Sheet1!A1:D5`.
	 */
	ranges: string[];
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

export type BatchGetValuesOutput = {
	/**
	 * The ID of the spreadsheet the data was retrieved from.
	 */
	spreadsheetId?: string;
	/**
	 * The requested values. The order of the value ranges is the same as the order of the requested ranges.
	 *
	 * Items: Values for one requested range.
	 */
	valueRanges?: {
		/**
		 * The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation).
		 */
		range?: string;
		/**
		 * The major dimension of the values. `ROWS` means each inner array is a row; `COLUMNS` means each inner array is a column.
		 */
		majorDimension?: string;
		/**
		 * The data that was read. Trailing empty rows and columns are omitted.
		 */
		values?: Record<string, JSONValue>[][];
	}[];
};

/**
 * Batch get values
 * Retrieves values from one or more ranges of a spreadsheet.
 */
export async function batchGetValues(
	this: EndpointFunctionThis,
	payload: {
		input: BatchGetValuesInput;
		connectionId: number;
	},
): Promise<BatchGetValuesOutput> {
	const response = await this.endpointCaller<BatchGetValuesOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'batchGetValues',
		},
		payload,
	);
	return response.output;
}
