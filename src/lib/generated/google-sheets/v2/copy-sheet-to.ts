// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CopySheetToInput = {
	/**
	 * The ID of the spreadsheet containing the sheet to copy. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The numeric ID of the sheet to copy. This is `sheets[].properties.sheetId` from `getSpreadsheet`, not the sheet title.
	 */
	sheetId: number;
	/**
	 * The ID of the spreadsheet to copy the sheet to. To copy within the same spreadsheet, use the same value as **Spreadsheet ID**.
	 */
	destinationSpreadsheetId: string;
};

export type CopySheetToOutput = {
	/**
	 * The ID of the newly created sheet.
	 */
	sheetId?: number;
	/**
	 * The zero-based position of the new sheet within the destination spreadsheet.
	 */
	index?: number;
	/**
	 * The type of sheet. One of `GRID`, `OBJECT`, or `DATA_SOURCE`.
	 */
	sheetType?: string;
	/**
	 * Whether the sheet is hidden in the Google Sheets UI.
	 */
	hidden?: boolean;
	/**
	 * Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.
	 */
	rightToLeft?: boolean;
	/**
	 * Additional properties of a grid sheet.
	 */
	gridProperties?: {
		/**
		 * The number of rows in the grid.
		 */
		rowCount?: number;
		/**
		 * The number of columns in the grid.
		 */
		columnCount?: number;
		/**
		 * The number of rows that are frozen in the grid.
		 */
		frozenRowCount?: number;
		/**
		 * The number of columns that are frozen in the grid.
		 */
		frozenColumnCount?: number;
		/**
		 * Whether the grid hides its gridlines in the Google Sheets UI.
		 */
		hideGridlines?: boolean;
	};
};

/**
 * Copy a sheet
 * Copies a sheet from one spreadsheet to another.
 */
export async function copySheetTo(
	this: EndpointFunctionThis,
	payload: {
		input: CopySheetToInput;
		connectionId: number;
	},
): Promise<CopySheetToOutput> {
	const response = await this.endpointCaller<CopySheetToOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'copySheetTo',
		},
		payload,
	);
	return response.output;
}
