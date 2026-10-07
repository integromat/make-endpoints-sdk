// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type BatchUpdateSpreadsheetInput = {
	/**
	 * The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.
	 */
	spreadsheetId: string;
	/**
	 * A list of updates to apply, in order. Each item is a [Request](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#Request) object. If any request is invalid, none are applied.
	 *
	 * Items: A single Request object, for example `{"addSheet": {"properties": {"title": "Sheet2"}}}` or `{"deleteSheet": {"sheetId": 123}}`.
	 */
	requests: Record<string, JSONValue>[];
	/**
	 * When `true`, the response includes the spreadsheet resource after the updates are applied.
	 */
	includeSpreadsheetInResponse?: boolean;
	/**
	 * Limits the ranges included in the response spreadsheet. Meaningful only when `includeSpreadsheetInResponse` is `true`.
	 *
	 * Items: A range in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) to include in the response spreadsheet.
	 */
	responseRanges?: string[];
	/**
	 * When `true`, grid data is returned in the response spreadsheet. Meaningful only when `includeSpreadsheetInResponse` is `true`.
	 */
	responseIncludeGridData?: boolean;
};

export type BatchUpdateSpreadsheetOutput = {
	/**
	 * The spreadsheet the updates were applied to.
	 */
	spreadsheetId?: string;
	/**
	 * The reply of the updates. This maps 1:1 with the requests. Replies to some requests may be empty.
	 *
	 * Items: The [Response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/response#Response) for one request. Empty when that request type has no reply payload.
	 */
	replies?: Record<string, JSONValue>[];
	/**
	 * The spreadsheet after updates were applied. Present only when `includeSpreadsheetInResponse` is `true`. Same Spreadsheet resource as `getSpreadsheet`.
	 */
	updatedSpreadsheet?: {
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
			 * Grid data for this sheet. Returned only when `responseIncludeGridData` is `true` or a matching field mask is set.
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
};

/**
 * Batch update a spreadsheet
 * Applies one or more updates to a spreadsheet.
 */
export async function batchUpdateSpreadsheet(
	this: EndpointFunctionThis,
	payload: {
		input: BatchUpdateSpreadsheetInput;
		connectionId: number;
	},
): Promise<BatchUpdateSpreadsheetOutput> {
	const response = await this.endpointCaller<BatchUpdateSpreadsheetOutput>(
		{
			appName: 'google-sheets',
			appVersion: 2,
			endpointName: 'batchUpdateSpreadsheet',
		},
		payload,
	);
	return response.output;
}
