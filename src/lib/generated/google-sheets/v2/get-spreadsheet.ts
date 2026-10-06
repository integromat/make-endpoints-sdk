// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetSpreadsheetInput = {
	/**
	 * The ID of the spreadsheet to retrieve. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * The ranges to retrieve, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation). For example, `Sheet1!A1:D5` or `Sheet2!A1:C4`. When omitted, sheet metadata is returned without limiting to specific ranges. Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
	 *
	 * Items: A range in A1 notation, for example `Sheet1!A1:D5`.
	 */
	ranges?: string[];
	/**
	 * When `true`, cell values and formatting are returned in each sheet's `data` field. Ignored when `fields` is set. For large spreadsheets, retrieve only the fields you need instead of setting this to `true`.
	 */
	includeGridData?: boolean;
	/**
	 * When `true`, tables are excluded from banded ranges in the response.
	 */
	excludeTablesInBandedRanges?: boolean;
	/**
	 * A [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing the fields to return, for example `spreadsheetId,properties,sheets.properties`. When set, `includeGridData` is ignored. Omit to return the default spreadsheet metadata.
	 */
	fields?: string;
};

export type GetSpreadsheetOutput = {
	/**
	 * The ID of the spreadsheet.
	 */
	spreadsheetId?: string;
	/**
	 * The URL of the spreadsheet.
	 */
	spreadsheetUrl?: string;
	/**
	 * Overall properties of the spreadsheet.
	 */
	properties?: {
		/**
		 * The locale of the spreadsheet, as an ISO 639-1 language code such as `en`, or a language and country combination such as `en_US`.
		 */
		locale?: string;
		/**
		 * How long to wait before volatile functions are recalculated. One of `ON_CHANGE`, `MINUTE`, or `HOUR`.
		 */
		autoRecalc?: string;
		/**
		 * The time zone of the spreadsheet in CLDR format, for example `America/New_York`.
		 */
		timeZone?: string;
	};
	/**
	 * The sheets that are part of the spreadsheet.
	 *
	 * Items: A sheet in the spreadsheet.
	 */
	sheets?: {
		/**
		 * The properties of the sheet.
		 */
		properties?: {
			/**
			 * The ID of the sheet. Cannot be changed once set.
			 */
			sheetId?: number;
			/**
			 * The zero-based position of the sheet within the spreadsheet.
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
				/**
				 * Whether the row grouping control toggle is shown after the group.
				 */
				rowGroupControlAfter?: boolean;
				/**
				 * Whether the column grouping control toggle is shown after the group.
				 */
				columnGroupControlAfter?: boolean;
			};
		};
		/**
		 * Grid data for this sheet. Returned only when `includeGridData` is `true` or a matching field mask is set.
		 *
		 * Items: A block of grid data covering a contiguous range.
		 */
		data?: {
			/**
			 * The first row this grid data refers to, zero-based.
			 */
			startRow?: number;
			/**
			 * The first column this grid data refers to, zero-based.
			 */
			startColumn?: number;
			/**
			 * The cell data in the grid, one entry per row starting at `startRow`. Each row contains `values` with per-cell `CellData` objects as described in the [Sheets API](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#CellData).
			 */
			rowData?: Record<string, JSONValue>;
		}[];
	}[];
	/**
	 * The named ranges defined in the spreadsheet.
	 *
	 * Items: A named range in the spreadsheet.
	 */
	namedRanges?: {
		/**
		 * The ID of the named range.
		 */
		namedRangeId?: string;
		/**
		 * The name of the named range.
		 */
		name?: string;
		/**
		 * The range this named range covers. Indexes are zero-based; start indexes are inclusive and end indexes are exclusive.
		 */
		range?: {
			/**
			 * The ID of the sheet this range is on.
			 */
			sheetId?: number;
			/**
			 * The zero-based inclusive start row of the range.
			 */
			startRowIndex?: number;
			/**
			 * The zero-based exclusive end row of the range.
			 */
			endRowIndex?: number;
			/**
			 * The zero-based inclusive start column of the range.
			 */
			startColumnIndex?: number;
			/**
			 * The zero-based exclusive end column of the range.
			 */
			endColumnIndex?: number;
		};
	}[];
};

/**
 * Get a spreadsheet
 * Retrieves a spreadsheet by ID, including its sheets and properties.
 */
export async function getSpreadsheet(
	this: EndpointFunctionThis,
	payload: {
		input: GetSpreadsheetInput;
		connectionId: number;
	},
): Promise<GetSpreadsheetOutput> {
	const response = await this.endpointCaller<GetSpreadsheetOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'getSpreadsheet',
		},
		payload,
	);
	return response.output;
}
