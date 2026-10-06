// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type BatchClearValuesInput = {
	/**
	 * The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The ranges to clear, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation). Only values are cleared -- formatting and data validation are kept.
	 *
	 * Items: A range in A1 or R1C1 notation, for example `Sheet1!A1:D5`.
	 */
	ranges: string[];
};

export type BatchClearValuesOutput = {
	/**
	 * The spreadsheet the updates were applied to.
	 */
	spreadsheetId?: string;
	/**
	 * The ranges that were cleared, in A1 notation. If a request was for an unbounded range or a range larger than the sheet, this is the actual range that was cleared, bounded to the sheet's limits.
	 *
	 * Items: A cleared range in A1 notation.
	 */
	clearedRanges?: string[];
};

/**
 * Batch clear values
 * Clears values from one or more ranges of a spreadsheet.
 */
export async function batchClearValues(
	this: EndpointFunctionThis,
	payload: {
		input: BatchClearValuesInput;
		connectionId: number;
	},
): Promise<BatchClearValuesOutput> {
	const response = await this.endpointCaller<BatchClearValuesOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'batchClearValues',
		},
		payload,
	);
	return response.output;
}
