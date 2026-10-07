// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateSpreadsheetInput = {
	/**
	 * Overall properties of the new spreadsheet.
	 */
	properties?: {
		/**
		 * The locale of the spreadsheet, as an ISO 639-1 language code such as `en`, an ISO 639-2 language code such as `fil` when no 639-1 code exists, or a language and country combination such as `en_US`. Not all locales are supported.
		 */
		locale?: string;
		/**
		 * The time zone of the spreadsheet in CLDR format, for example `America/New_York`.
		 */
		timeZone?: string;
		/**
		 * How long to wait before volatile functions are recalculated. Google defaults to `ON_CHANGE` when omitted.
		 */
		autoRecalc?: '' | 'ON_CHANGE' | 'MINUTE' | 'HOUR';
	};
	/**
	 * The sheets to create in the new spreadsheet. If omitted, Google creates a single sheet named `Sheet1`.
	 *
	 * Items: A sheet to create in the new spreadsheet.
	 */
	sheets?: {
		/**
		 * The properties of the sheet.
		 */
		properties?: {
			/**
			 * The ID of the sheet. Cannot be changed once set. Set it explicitly when you need to reference this sheet from **Named Ranges** in the same request; otherwise leave it empty and let Google assign one.
			 */
			sheetId?: number;
			/**
			 * The zero-based position of the sheet within the spreadsheet. If omitted, the sheet is added to the end of the sheet list.
			 */
			index?: number;
			/**
			 * Whether the sheet is hidden in the Google Sheets UI.
			 */
			hidden?: boolean;
			/**
			 * Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.
			 */
			rightToLeft?: boolean;
			/**
			 * Additional properties that apply only to grid sheets. Setting these on a non-grid sheet is an error.
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
	}[];
	/**
	 * The named ranges to define in the new spreadsheet.
	 *
	 * Items: A named range in the new spreadsheet.
	 */
	namedRanges?: {
		/**
		 * The name of the named range.
		 */
		name?: string;
		/**
		 * The range this named range covers. All indexes are zero-based; start indexes are inclusive and end indexes are exclusive. Omitting an index leaves that side of the range unbounded.
		 */
		range?: {
			/**
			 * The ID of the sheet this range is on. Must match a **Sheet ID** set explicitly under **Sheets**.
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

export type CreateSpreadsheetOutput = {
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
 * Create a spreadsheet
 * Creates a new Google Sheets spreadsheet.
 */
export async function createSpreadsheet(
	this: EndpointFunctionThis,
	payload: {
		input: CreateSpreadsheetInput;
		connectionId: number;
	},
): Promise<CreateSpreadsheetOutput> {
	const response = await this.endpointCaller<CreateSpreadsheetOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'createSpreadsheet',
		},
		payload,
	);
	return response.output;
}
