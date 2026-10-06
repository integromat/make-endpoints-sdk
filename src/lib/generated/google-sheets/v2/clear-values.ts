// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ClearValuesInput = {
	/**
	 * The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation) of the values to clear, for example `Sheet1!A1` or `'My Sheet'!A5:D5`. Only values are cleared -- formatting, data validation, and other cell properties are kept.
	 */
	range: string;
};

export type ClearValuesOutput = {
	/**
	 * The spreadsheet the updates were applied to.
	 */
	spreadsheetId?: string;
	/**
	 * The range (in A1 notation) that was cleared. If the request was for an unbounded range or a range larger than the sheet, this is the actual range that was cleared, bounded to the sheet's limits.
	 */
	clearedRange?: string;
};

/**
 * Clear values
 * Clears values from a range of a spreadsheet.
 */
export async function clearValues(
	this: EndpointFunctionThis,
	payload: {
		input: ClearValuesInput;
		connectionId: number;
	},
): Promise<ClearValuesOutput> {
	const response = await this.endpointCaller<ClearValuesOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'clearValues',
		},
		payload,
	);
	return response.output;
}
