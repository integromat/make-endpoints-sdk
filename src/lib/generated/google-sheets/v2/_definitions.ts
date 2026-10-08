// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'appendValues',
		label: 'Append values',
		description: 'Appends values after the last row of a table in a spreadsheet.',
		context:
			"---\nname: appendValues\ndescription: Appends values after the last row of a table in a spreadsheet.\n---\n\nAppends rows with `POST /spreadsheets/{spreadsheetId}/values/{range}:append`.\nGoogle uses `range` to find a logical table, then writes after that table's last\nrow, starting at the table's first column.\n\n`valueInputOption` is required (`RAW` or `USER_ENTERED`). `insertDataOption`\ncontrols whether existing data is overwritten (`OVERWRITE`) or new rows are\ninserted (`INSERT_ROWS`).\n\nThis is the atomic call behind Add a Row and Bulk Add Rows. The endpoint does\nnot compose header ranges -- pass the table range directly, for example\n`Sheet1!A1:D` or `Sheet1`.\n\nRefer to the [spreadsheets.values.append reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append).\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				range: {
					type: 'string',
					description:
						'The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) of a range to search for a logical table of data. Values are appended after the last row of that table. For a whole sheet, use `Sheet1` or `Sheet1!A1:D`.',
				},
				valueInputOption: {
					type: 'string',
					description:
						'How the input data should be interpreted. `RAW` stores values as-is. `USER_ENTERED` parses them as if typed in the Google Sheets UI (numbers, dates, and formulas).',
					enum: ['RAW', 'USER_ENTERED'],
				},
				values: {
					type: 'array',
					description:
						'The data to append. This is a two-dimensional array: the outer array is the major dimension (rows by default), and each inner array is one row or column. Supported cell types are boolean, string, and number.',
					items: {
						type: 'array',
						description: 'Values in one row or column.',
						items: {
							description:
								'A cell value. Supported types are boolean, string, and number.',
						},
					},
				},
				majorDimension: {
					type: 'string',
					description:
						'The major dimension of `values`. When omitted, Google defaults to `ROWS`.',
					default: '',
					enum: ['', 'ROWS', 'COLUMNS'],
				},
				insertDataOption: {
					type: 'string',
					description:
						'How the input data should be inserted. `OVERWRITE` writes over existing data in the area. `INSERT_ROWS` inserts new rows for the data.',
					default: '',
					enum: ['', 'OVERWRITE', 'INSERT_ROWS'],
				},
				includeValuesInResponse: {
					type: 'boolean',
					description:
						'When `true`, the response includes the values of the cells that were appended. By default, responses do not include the updated values.',
				},
				responseValueRenderOption: {
					type: 'string',
					description:
						'How values in the response should be rendered. Google defaults to `FORMATTED_VALUE`. Meaningful only when `includeValuesInResponse` is `true`.',
					default: '',
					enum: ['', 'FORMATTED_VALUE', 'UNFORMATTED_VALUE', 'FORMULA'],
				},
				responseDateTimeRenderOption: {
					type: 'string',
					description:
						'How dates, times, and durations in the response should be rendered. Ignored when `responseValueRenderOption` is `FORMATTED_VALUE`. Google defaults to `SERIAL_NUMBER`.',
					default: '',
					enum: ['', 'SERIAL_NUMBER', 'FORMATTED_STRING'],
				},
			},
			required: ['spreadsheetId', 'range', 'valueInputOption', 'values'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description: 'The spreadsheet the updates were applied to.',
				},
				tableRange: {
					type: 'string',
					description:
						'The range (in A1 notation) of the table that values were appended to, before the values were appended. Empty if no table was found.',
				},
				updates: {
					type: 'object',
					description: 'Information about the updates that were applied.',
					properties: {
						spreadsheetId: {
							type: 'string',
							description: 'The spreadsheet the updates were applied to.',
						},
						updatedRange: {
							type: 'string',
							description: 'The range (in A1 notation) that updates were applied to.',
						},
						updatedRows: {
							type: 'number',
							description:
								'The number of rows where at least one cell in the row was updated.',
						},
						updatedColumns: {
							type: 'number',
							description:
								'The number of columns where at least one cell in the column was updated.',
						},
						updatedCells: {
							type: 'number',
							description: 'The number of cells updated.',
						},
						updatedData: {
							type: 'object',
							description:
								'The values of the cells after updates were applied. Present only when `includeValuesInResponse` is `true`.',
							properties: {
								range: {
									type: 'string',
									description: 'The range the values cover, in A1 notation.',
								},
								majorDimension: {
									type: 'string',
									description: 'The major dimension of the values.',
								},
								values: {
									type: 'array',
									description: 'The appended cell values.',
									items: {
										type: 'array',
										description: 'Values in one row or column.',
										items: { description: 'A cell value after the append.' },
									},
								},
							},
							required: [],
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Sheets API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://sheets.googleapis.com/v4`. Provide the remaining path in the URL parameter\n(e.g. `/spreadsheets/{spreadsheetId}`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Sheets API reference](https://developers.google.com/workspace/sheets/api/reference/rest) for available\nendpoints, required parameters, and response schemas.',
		accounts: {
			google: {
				scope: [
					'https://www.googleapis.com/auth/spreadsheets',
					'https://www.googleapis.com/auth/drive',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter a path relative to `https://sheets.googleapis.com/v4`. For example, `/spreadsheets/{spreadsheetId}`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you.",
					items: {
						type: 'object',
						description: 'The HTTP request header.',
						properties: {
							key: { type: 'string', description: 'The HTTP request header key.' },
							value: {
								type: 'string',
								description: 'The HTTP request header value.',
							},
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description: 'The HTTP request query parameters.',
					items: {
						type: 'object',
						description: 'The HTTP request query parameter.',
						properties: {
							key: {
								type: 'string',
								description: "The HTTP request query parameter's key.",
							},
							value: {
								type: 'string',
								description: "The HTTP request query parameter's value.",
							},
						},
						required: [],
					},
				},
				body: {
					description:
						'The HTTP request body. This input will be ignored if the HTTP request method is `GET`.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: { type: 'number', description: 'The HTTP response status code.' },
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'batchClearValues',
		label: 'Batch clear values',
		description: 'Clears values from one or more ranges of a spreadsheet.',
		context:
			'---\nname: batchClearValues\ndescription: Clears values from one or more ranges of a spreadsheet.\n---\n\nClears several ranges in one call with\n`POST /spreadsheets/{spreadsheetId}/values:batchClear`.\nOnly values are removed. Formatting, data validation, and other cell properties\nare kept.\n\nThis is the atomic call behind Clear Values from a Range. Pass each range in\nA1 or R1C1 notation, for example `Sheet1!A1:D5`.\n\nRefer to the [spreadsheets.values.batchClear reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchClear).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				ranges: {
					type: 'array',
					description:
						'The ranges to clear, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation). Only values are cleared -- formatting and data validation are kept.',
					items: {
						type: 'string',
						description: 'A range in A1 or R1C1 notation, for example `Sheet1!A1:D5`.',
					},
				},
			},
			required: ['spreadsheetId', 'ranges'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description: 'The spreadsheet the updates were applied to.',
				},
				clearedRanges: {
					type: 'array',
					description:
						"The ranges that were cleared, in A1 notation. If a request was for an unbounded range or a range larger than the sheet, this is the actual range that was cleared, bounded to the sheet's limits.",
					items: { type: 'string', description: 'A cleared range in A1 notation.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'batchGetValues',
		label: 'Batch get values',
		description: 'Retrieves values from one or more ranges of a spreadsheet.',
		context:
			'---\nname: batchGetValues\ndescription: Retrieves values from one or more ranges of a spreadsheet.\n---\n\nReturns one or more ranges of values with\n`GET /spreadsheets/{spreadsheetId}/values:batchGet`.\n`ranges` is a list of [A1](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation)\nor [R1C1](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation)\nranges. The `valueRanges` array in the response is in the same order.\n\nThis is the atomic call behind Search Rows. For a single range, `getValues` is\nenough.\n\nRefer to the [spreadsheets.values.batchGet reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchGet).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to read. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				ranges: {
					type: 'array',
					description:
						'The ranges to retrieve, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation). The order of results matches this list.',
					items: {
						type: 'string',
						description: 'A range in A1 or R1C1 notation, for example `Sheet1!A1:D5`.',
					},
				},
				majorDimension: {
					type: 'string',
					description:
						'The major dimension that results should use. For data `A1=1,B1=2,A2=3,B2=4`, `ROWS` returns `[[1,2],[3,4]]` and `COLUMNS` returns `[[1,3],[2,4]]`.',
					default: '',
					enum: ['', 'ROWS', 'COLUMNS'],
				},
				valueRenderOption: {
					type: 'string',
					description:
						'How values should be represented in the output. Google defaults to `FORMATTED_VALUE` when omitted.',
					default: '',
					enum: ['', 'FORMATTED_VALUE', 'UNFORMATTED_VALUE', 'FORMULA'],
				},
				dateTimeRenderOption: {
					type: 'string',
					description:
						'How dates, times, and durations should be represented in the output. Ignored when `valueRenderOption` is `FORMATTED_VALUE`. Google defaults to `SERIAL_NUMBER` when omitted.',
					default: '',
					enum: ['', 'SERIAL_NUMBER', 'FORMATTED_STRING'],
				},
			},
			required: ['spreadsheetId', 'ranges'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description: 'The ID of the spreadsheet the data was retrieved from.',
				},
				valueRanges: {
					type: 'array',
					description:
						'The requested values. The order of the value ranges is the same as the order of the requested ranges.',
					items: {
						type: 'object',
						description: 'Values for one requested range.',
						properties: {
							range: {
								type: 'string',
								description:
									'The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation).',
							},
							majorDimension: {
								type: 'string',
								description:
									'The major dimension of the values. `ROWS` means each inner array is a row; `COLUMNS` means each inner array is a column.',
							},
							values: {
								type: 'array',
								description:
									'The data that was read. Trailing empty rows and columns are omitted.',
								items: {
									type: 'array',
									description: 'Values in one row or column.',
									items: {
										description:
											'A cell value. Google returns a string, number, or boolean depending on the render options.',
									},
								},
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'batchUpdateSpreadsheet',
		label: 'Batch update a spreadsheet',
		description: 'Applies one or more updates to a spreadsheet.',
		context:
			'---\nname: batchUpdateSpreadsheet\ndescription: Applies one or more updates to a spreadsheet.\n---\n\nSends a batch of update requests with `POST /spreadsheets/{spreadsheetId}:batchUpdate`.\nEach item in `requests` is one [Request](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#Request)\nobject. All requests are validated before any are applied -- if any request is\ninvalid, the entire batch fails.\n\nThis is the generic Sheets `batchUpdate` wrapper. Modules such as Add a Sheet,\nDelete a Sheet, Rename a Sheet, Delete a Row, and Add/Delete a Conditional Format\nRule all map to this call.\n\n## Common request examples\n\nAdd a sheet:\n```json\n{\n    "addSheet": {\n        "properties": {\n            "title": "Sheet2"\n        }\n    }\n}\n```\n\nDelete a sheet:\n```json\n{\n    "deleteSheet": {\n        "sheetId": 123456789\n    }\n}\n```\n\nRename a sheet:\n```json\n{\n    "updateSheetProperties": {\n        "properties": {\n            "sheetId": 123456789,\n            "title": "New name"\n        },\n        "fields": "title"\n    }\n}\n```\n\nDelete a row (indexes are zero-based; `endIndex` is exclusive):\n```json\n{\n    "deleteDimension": {\n        "range": {\n            "sheetId": 123456789,\n            "dimension": "ROWS",\n            "startIndex": 4,\n            "endIndex": 5\n        }\n    }\n}\n```\n\nAdd a conditional format rule:\n```json\n{\n    "addConditionalFormatRule": {\n        "rule": {\n            "ranges": [\n                {\n                    "sheetId": 123456789,\n                    "startRowIndex": 0,\n                    "endRowIndex": 10\n                }\n            ],\n            "booleanRule": {\n                "condition": {\n                    "type": "NUMBER_GREATER",\n                    "values": [{ "userEnteredValue": "10" }]\n                },\n                "format": {\n                    "backgroundColorStyle": {\n                        "rgbColor": { "red": 1, "green": 0.8, "blue": 0.8 }\n                    }\n                }\n            }\n        }\n    }\n}\n```\n\nDelete a conditional format rule:\n```json\n{\n    "deleteConditionalFormatRule": {\n        "sheetId": 123456789,\n        "index": 0\n    }\n}\n```\n\n`replies` maps 1:1 with `requests`. Many request types return an empty reply.\nSet `includeSpreadsheetInResponse` to `true` when you need the spreadsheet\nresource after the update.\n\nRefer to the [spreadsheets.batchUpdate reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				requests: {
					type: 'array',
					description:
						'A list of updates to apply, in order. Each item is a [Request](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#Request) object. If any request is invalid, none are applied.',
					items: {
						description:
							'A single Request object, for example `{"addSheet": {"properties": {"title": "Sheet2"}}}` or `{"deleteSheet": {"sheetId": 123}}`.',
					},
				},
				includeSpreadsheetInResponse: {
					type: 'boolean',
					description:
						'When `true`, the response includes the spreadsheet resource after the updates are applied.',
				},
				responseRanges: {
					type: 'array',
					description:
						'Limits the ranges included in the response spreadsheet. Meaningful only when `includeSpreadsheetInResponse` is `true`.',
					items: {
						type: 'string',
						description:
							'A range in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) to include in the response spreadsheet.',
					},
				},
				responseIncludeGridData: {
					type: 'boolean',
					description:
						'When `true`, grid data is returned in the response spreadsheet. Meaningful only when `includeSpreadsheetInResponse` is `true`.',
				},
			},
			required: ['spreadsheetId', 'requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description: 'The spreadsheet the updates were applied to.',
				},
				replies: {
					type: 'array',
					description:
						'The reply of the updates. This maps 1:1 with the requests. Replies to some requests may be empty.',
					items: {
						description:
							'The [Response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/response#Response) for one request. Empty when that request type has no reply payload.',
					},
				},
				updatedSpreadsheet: {
					type: 'object',
					description:
						'The spreadsheet after updates were applied. Present only when `includeSpreadsheetInResponse` is `true`. Same Spreadsheet resource as `getSpreadsheet`.',
					properties: {
						spreadsheetId: {
							type: 'string',
							description: 'The ID of the spreadsheet.',
						},
						spreadsheetUrl: {
							type: 'string',
							description: 'The URL of the spreadsheet.',
						},
						properties: {
							type: 'object',
							description: 'Overall properties of the spreadsheet.',
							properties: {
								locale: {
									type: 'string',
									description:
										'The locale of the spreadsheet, as an ISO 639-1 language code such as `en`, or a language and country combination such as `en_US`.',
								},
								autoRecalc: {
									type: 'string',
									description:
										'How long to wait before volatile functions are recalculated. One of `ON_CHANGE`, `MINUTE`, or `HOUR`.',
								},
								timeZone: {
									type: 'string',
									description:
										'The time zone of the spreadsheet in CLDR format, for example `America/New_York`.',
								},
							},
							required: [],
						},
						sheets: {
							type: 'array',
							description: 'The sheets that are part of the spreadsheet.',
							items: {
								type: 'object',
								description: 'A sheet in the spreadsheet.',
								properties: {
									properties: {
										type: 'object',
										description: 'The properties of the sheet.',
										properties: {
											sheetId: {
												type: 'number',
												description:
													'The ID of the sheet. Cannot be changed once set.',
											},
											index: {
												type: 'number',
												description:
													'The zero-based position of the sheet within the spreadsheet.',
											},
											sheetType: {
												type: 'string',
												description:
													'The type of sheet. One of `GRID`, `OBJECT`, or `DATA_SOURCE`.',
											},
											hidden: {
												type: 'boolean',
												description:
													'Whether the sheet is hidden in the Google Sheets UI.',
											},
											rightToLeft: {
												type: 'boolean',
												description:
													'Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.',
											},
											gridProperties: {
												type: 'object',
												description:
													'Additional properties of a grid sheet.',
												properties: {
													rowCount: {
														type: 'number',
														description:
															'The number of rows in the grid.',
													},
													columnCount: {
														type: 'number',
														description:
															'The number of columns in the grid.',
													},
													frozenRowCount: {
														type: 'number',
														description:
															'The number of rows that are frozen in the grid.',
													},
													frozenColumnCount: {
														type: 'number',
														description:
															'The number of columns that are frozen in the grid.',
													},
													hideGridlines: {
														type: 'boolean',
														description:
															'Whether the grid hides its gridlines in the Google Sheets UI.',
													},
													rowGroupControlAfter: {
														type: 'boolean',
														description:
															'Whether the row grouping control toggle is shown after the group.',
													},
													columnGroupControlAfter: {
														type: 'boolean',
														description:
															'Whether the column grouping control toggle is shown after the group.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									data: {
										type: 'array',
										description:
											'Grid data for this sheet. Returned only when `responseIncludeGridData` is `true` or a matching field mask is set.',
										items: {
											type: 'object',
											description:
												'A block of grid data covering a contiguous range.',
											properties: {
												startRow: {
													type: 'number',
													description:
														'The first row this grid data refers to, zero-based.',
												},
												startColumn: {
													type: 'number',
													description:
														'The first column this grid data refers to, zero-based.',
												},
												rowData: {
													description:
														'The cell data in the grid, one entry per row starting at `startRow`. Each row contains `values` with per-cell `CellData` objects as described in the [Sheets API](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#CellData).',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						namedRanges: {
							type: 'array',
							description: 'The named ranges defined in the spreadsheet.',
							items: {
								type: 'object',
								description: 'A named range in the spreadsheet.',
								properties: {
									namedRangeId: {
										type: 'string',
										description: 'The ID of the named range.',
									},
									name: {
										type: 'string',
										description: 'The name of the named range.',
									},
									range: {
										type: 'object',
										description:
											'The range this named range covers. Indexes are zero-based; start indexes are inclusive and end indexes are exclusive.',
										properties: {
											sheetId: {
												type: 'number',
												description:
													'The ID of the sheet this range is on.',
											},
											startRowIndex: {
												type: 'number',
												description:
													'The zero-based inclusive start row of the range.',
											},
											endRowIndex: {
												type: 'number',
												description:
													'The zero-based exclusive end row of the range.',
											},
											startColumnIndex: {
												type: 'number',
												description:
													'The zero-based inclusive start column of the range.',
											},
											endColumnIndex: {
												type: 'number',
												description:
													'The zero-based exclusive end column of the range.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'clearValues',
		label: 'Clear values',
		description: 'Clears values from a range of a spreadsheet.',
		context:
			'---\nname: clearValues\ndescription: Clears values from a range of a spreadsheet.\n---\n\nClears cell values with `POST /spreadsheets/{spreadsheetId}/values/{range}:clear`.\nOnly values are removed. Formatting, data validation, and other cell properties\nare kept.\n\nThis is the atomic call behind Clear a Cell and Clear a Row. Pass the range\ndirectly, for example `Sheet1!B2` or `Sheet1!A5:Z5`.\n\nThe request body is empty. The response reports `spreadsheetId` and the actual\n`clearedRange`.\n\nRefer to the [spreadsheets.values.clear reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/clear).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				range: {
					type: 'string',
					description:
						"The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation) of the values to clear, for example `Sheet1!A1` or `'My Sheet'!A5:D5`. Only values are cleared -- formatting, data validation, and other cell properties are kept.",
				},
			},
			required: ['spreadsheetId', 'range'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description: 'The spreadsheet the updates were applied to.',
				},
				clearedRange: {
					type: 'string',
					description:
						"The range (in A1 notation) that was cleared. If the request was for an unbounded range or a range larger than the sheet, this is the actual range that was cleared, bounded to the sheet's limits.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'copySheetTo',
		label: 'Copy a sheet',
		description: 'Copies a sheet from one spreadsheet to another.',
		context:
			'---\nname: copySheetTo\ndescription: Copies a sheet from one spreadsheet to another.\n---\n\nCopies a single sheet with\n`POST /spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo`.\nThe response is the `SheetProperties` of the newly created sheet in the\ndestination spreadsheet.\n\n`sheetId` is the numeric sheet ID (`sheets[].properties.sheetId` from\n`getSpreadsheet`), not the sheet title. To copy within the same spreadsheet,\nset `destinationSpreadsheetId` to the same ID as `spreadsheetId`.\n\nThe Copy a Sheet module optionally follows this call with `batchUpdateSpreadsheet`\nto rename the copy. This endpoint is only the `copyTo` call -- rename the new\nsheet afterwards if you need a custom title.\n\nRefer to the [spreadsheets.sheets.copyTo reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.sheets/copyTo).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet containing the sheet to copy. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				sheetId: {
					type: 'number',
					description:
						'The numeric ID of the sheet to copy. This is `sheets[].properties.sheetId` from `getSpreadsheet`, not the sheet title.',
				},
				destinationSpreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to copy the sheet to. To copy within the same spreadsheet, use the same value as **Spreadsheet ID**.',
				},
			},
			required: ['spreadsheetId', 'sheetId', 'destinationSpreadsheetId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				sheetId: { type: 'number', description: 'The ID of the newly created sheet.' },
				index: {
					type: 'number',
					description:
						'The zero-based position of the new sheet within the destination spreadsheet.',
				},
				sheetType: {
					type: 'string',
					description: 'The type of sheet. One of `GRID`, `OBJECT`, or `DATA_SOURCE`.',
				},
				hidden: {
					type: 'boolean',
					description: 'Whether the sheet is hidden in the Google Sheets UI.',
				},
				rightToLeft: {
					type: 'boolean',
					description:
						'Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.',
				},
				gridProperties: {
					type: 'object',
					description: 'Additional properties of a grid sheet.',
					properties: {
						rowCount: {
							type: 'number',
							description: 'The number of rows in the grid.',
						},
						columnCount: {
							type: 'number',
							description: 'The number of columns in the grid.',
						},
						frozenRowCount: {
							type: 'number',
							description: 'The number of rows that are frozen in the grid.',
						},
						frozenColumnCount: {
							type: 'number',
							description: 'The number of columns that are frozen in the grid.',
						},
						hideGridlines: {
							type: 'boolean',
							description:
								'Whether the grid hides its gridlines in the Google Sheets UI.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'createSpreadsheet',
		label: 'Create a spreadsheet',
		description: 'Creates a new Google Sheets spreadsheet.',
		context:
			"---\nname: createSpreadsheet\ndescription: Creates a new Google Sheets spreadsheet.\n---\n\nCreates a spreadsheet with `POST /spreadsheets`. The response is the full\nSpreadsheet resource (`spreadsheetId`, `spreadsheetUrl`, `properties`, `sheets`,\n`namedRanges`), matching `getSpreadsheet`. Create does not return cell grid data\nin `sheets[].data`.\n\nThe spreadsheet is always created in the authenticated user's My Drive root folder.\nThe Sheets API cannot place a new spreadsheet into a specific folder -- move the\nfile with the Drive API after creating it.\n\nOnly writable fields are exposed as input:\n\n- `properties` -- title, locale, time zone, and recalculation interval.\n- `sheets` -- the sheets to create. When omitted, Google creates a single sheet named `Sheet1`.\n- `namedRanges` -- named ranges to define up front.\n\n`properties.defaultFormat` is documented as read-only by Google, so it is not an\ninput. This endpoint does not write cell values -- create the spreadsheet first,\nthen write values with `updateValues` or `appendValues`.\n\nSheet IDs are normally assigned by Google. If a named range needs to point at a\nsheet created in the same request, set that sheet's `sheetId` explicitly and reuse\nthe same value in `namedRanges[].range.sheetId`. Grid range indexes are zero-based:\nstart indexes are inclusive, end indexes are exclusive.\n\nRefer to the [spreadsheets.create reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/create).\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					type: 'object',
					description: 'Overall properties of the new spreadsheet.',
					properties: {
						locale: {
							type: 'string',
							description:
								'The locale of the spreadsheet, as an ISO 639-1 language code such as `en`, an ISO 639-2 language code such as `fil` when no 639-1 code exists, or a language and country combination such as `en_US`. Not all locales are supported.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the spreadsheet in CLDR format, for example `America/New_York`.',
						},
						autoRecalc: {
							type: 'string',
							description:
								'How long to wait before volatile functions are recalculated. Google defaults to `ON_CHANGE` when omitted.',
							default: '',
							enum: ['', 'ON_CHANGE', 'MINUTE', 'HOUR'],
						},
					},
					required: [],
				},
				sheets: {
					type: 'array',
					description:
						'The sheets to create in the new spreadsheet. If omitted, Google creates a single sheet named `Sheet1`.',
					items: {
						type: 'object',
						description: 'A sheet to create in the new spreadsheet.',
						properties: {
							properties: {
								type: 'object',
								description: 'The properties of the sheet.',
								properties: {
									sheetId: {
										type: 'number',
										description:
											'The ID of the sheet. Cannot be changed once set. Set it explicitly when you need to reference this sheet from **Named Ranges** in the same request; otherwise leave it empty and let Google assign one.',
									},
									index: {
										type: 'number',
										description:
											'The zero-based position of the sheet within the spreadsheet. If omitted, the sheet is added to the end of the sheet list.',
									},
									hidden: {
										type: 'boolean',
										description:
											'Whether the sheet is hidden in the Google Sheets UI.',
									},
									rightToLeft: {
										type: 'boolean',
										description:
											'Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.',
									},
									gridProperties: {
										type: 'object',
										description:
											'Additional properties that apply only to grid sheets. Setting these on a non-grid sheet is an error.',
										properties: {
											rowCount: {
												type: 'number',
												description: 'The number of rows in the grid.',
											},
											columnCount: {
												type: 'number',
												description: 'The number of columns in the grid.',
											},
											frozenRowCount: {
												type: 'number',
												description:
													'The number of rows that are frozen in the grid.',
											},
											frozenColumnCount: {
												type: 'number',
												description:
													'The number of columns that are frozen in the grid.',
											},
											hideGridlines: {
												type: 'boolean',
												description:
													'Whether the grid hides its gridlines in the Google Sheets UI.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				namedRanges: {
					type: 'array',
					description: 'The named ranges to define in the new spreadsheet.',
					items: {
						type: 'object',
						description: 'A named range in the new spreadsheet.',
						properties: {
							name: { type: 'string', description: 'The name of the named range.' },
							range: {
								type: 'object',
								description:
									'The range this named range covers. All indexes are zero-based; start indexes are inclusive and end indexes are exclusive. Omitting an index leaves that side of the range unbounded.',
								properties: {
									sheetId: {
										type: 'number',
										description:
											'The ID of the sheet this range is on. Must match a **Sheet ID** set explicitly under **Sheets**.',
									},
									startRowIndex: {
										type: 'number',
										description:
											'The zero-based inclusive start row of the range.',
									},
									endRowIndex: {
										type: 'number',
										description:
											'The zero-based exclusive end row of the range.',
									},
									startColumnIndex: {
										type: 'number',
										description:
											'The zero-based inclusive start column of the range.',
									},
									endColumnIndex: {
										type: 'number',
										description:
											'The zero-based exclusive end column of the range.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: { type: 'string', description: 'The ID of the spreadsheet.' },
				spreadsheetUrl: { type: 'string', description: 'The URL of the spreadsheet.' },
				properties: {
					type: 'object',
					description: 'Overall properties of the spreadsheet.',
					properties: {
						locale: {
							type: 'string',
							description:
								'The locale of the spreadsheet, as an ISO 639-1 language code such as `en`, or a language and country combination such as `en_US`.',
						},
						autoRecalc: {
							type: 'string',
							description:
								'How long to wait before volatile functions are recalculated. One of `ON_CHANGE`, `MINUTE`, or `HOUR`.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the spreadsheet in CLDR format, for example `America/New_York`.',
						},
					},
					required: [],
				},
				sheets: {
					type: 'array',
					description: 'The sheets that are part of the spreadsheet.',
					items: {
						type: 'object',
						description: 'A sheet in the spreadsheet.',
						properties: {
							properties: {
								type: 'object',
								description: 'The properties of the sheet.',
								properties: {
									sheetId: {
										type: 'number',
										description:
											'The ID of the sheet. Cannot be changed once set.',
									},
									index: {
										type: 'number',
										description:
											'The zero-based position of the sheet within the spreadsheet.',
									},
									sheetType: {
										type: 'string',
										description:
											'The type of sheet. One of `GRID`, `OBJECT`, or `DATA_SOURCE`.',
									},
									hidden: {
										type: 'boolean',
										description:
											'Whether the sheet is hidden in the Google Sheets UI.',
									},
									rightToLeft: {
										type: 'boolean',
										description:
											'Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.',
									},
									gridProperties: {
										type: 'object',
										description: 'Additional properties of a grid sheet.',
										properties: {
											rowCount: {
												type: 'number',
												description: 'The number of rows in the grid.',
											},
											columnCount: {
												type: 'number',
												description: 'The number of columns in the grid.',
											},
											frozenRowCount: {
												type: 'number',
												description:
													'The number of rows that are frozen in the grid.',
											},
											frozenColumnCount: {
												type: 'number',
												description:
													'The number of columns that are frozen in the grid.',
											},
											hideGridlines: {
												type: 'boolean',
												description:
													'Whether the grid hides its gridlines in the Google Sheets UI.',
											},
											rowGroupControlAfter: {
												type: 'boolean',
												description:
													'Whether the row grouping control toggle is shown after the group.',
											},
											columnGroupControlAfter: {
												type: 'boolean',
												description:
													'Whether the column grouping control toggle is shown after the group.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							data: {
								type: 'array',
								description:
									'Grid data for this sheet. Returned only when `includeGridData` is `true` or a matching field mask is set.',
								items: {
									type: 'object',
									description:
										'A block of grid data covering a contiguous range.',
									properties: {
										startRow: {
											type: 'number',
											description:
												'The first row this grid data refers to, zero-based.',
										},
										startColumn: {
											type: 'number',
											description:
												'The first column this grid data refers to, zero-based.',
										},
										rowData: {
											description:
												'The cell data in the grid, one entry per row starting at `startRow`. Each row contains `values` with per-cell `CellData` objects as described in the [Sheets API](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#CellData).',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				namedRanges: {
					type: 'array',
					description: 'The named ranges defined in the spreadsheet.',
					items: {
						type: 'object',
						description: 'A named range in the spreadsheet.',
						properties: {
							namedRangeId: {
								type: 'string',
								description: 'The ID of the named range.',
							},
							name: { type: 'string', description: 'The name of the named range.' },
							range: {
								type: 'object',
								description:
									'The range this named range covers. Indexes are zero-based; start indexes are inclusive and end indexes are exclusive.',
								properties: {
									sheetId: {
										type: 'number',
										description: 'The ID of the sheet this range is on.',
									},
									startRowIndex: {
										type: 'number',
										description:
											'The zero-based inclusive start row of the range.',
									},
									endRowIndex: {
										type: 'number',
										description:
											'The zero-based exclusive end row of the range.',
									},
									startColumnIndex: {
										type: 'number',
										description:
											'The zero-based inclusive start column of the range.',
									},
									endColumnIndex: {
										type: 'number',
										description:
											'The zero-based exclusive end column of the range.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'getSpreadsheet',
		label: 'Get a spreadsheet',
		description: 'Retrieves a spreadsheet by ID, including its sheets and properties.',
		context:
			'---\nname: getSpreadsheet\ndescription: Retrieves a spreadsheet by ID, including its sheets and properties.\n---\n\nReturns the spreadsheet at the given ID with `GET /spreadsheets/{spreadsheetId}`.\nBy default, grid (cell) data is not returned -- only spreadsheet and sheet\nproperties. That is enough to list sheets, read titles, and resolve `sheetId` values.\n\nTo include cell values and formatting, set `includeGridData` to `true`, or pass a\n`fields` mask such as `spreadsheetId,properties,sheets.properties,sheets.data`.\nFor large spreadsheets, prefer a field mask over `includeGridData`. When `fields`\nis set, `includeGridData` is ignored.\n\nUse `ranges` in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation)\nto limit the response to specific areas, for example `Sheet1!A1:D5`. You can\nrequest several ranges at once.\n\nDeveloper Preview query parameters such as `commentsViewMode` are not exposed.\n\nRefer to the [spreadsheets.get reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to retrieve. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				ranges: {
					type: 'array',
					description:
						'The ranges to retrieve, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation). For example, `Sheet1!A1:D5` or `Sheet2!A1:C4`. When omitted, sheet metadata is returned without limiting to specific ranges. Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.',
					items: {
						type: 'string',
						description: 'A range in A1 notation, for example `Sheet1!A1:D5`.',
					},
				},
				includeGridData: {
					type: 'boolean',
					description:
						"When `true`, cell values and formatting are returned in each sheet's `data` field. Ignored when `fields` is set. For large spreadsheets, retrieve only the fields you need instead of setting this to `true`.",
				},
				excludeTablesInBandedRanges: {
					type: 'boolean',
					description:
						'When `true`, tables are excluded from banded ranges in the response.',
				},
				fields: {
					type: 'string',
					description:
						'A [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing the fields to return, for example `spreadsheetId,properties,sheets.properties`. When set, `includeGridData` is ignored. Omit to return the default spreadsheet metadata.',
				},
			},
			required: ['spreadsheetId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: { type: 'string', description: 'The ID of the spreadsheet.' },
				spreadsheetUrl: { type: 'string', description: 'The URL of the spreadsheet.' },
				properties: {
					type: 'object',
					description: 'Overall properties of the spreadsheet.',
					properties: {
						locale: {
							type: 'string',
							description:
								'The locale of the spreadsheet, as an ISO 639-1 language code such as `en`, or a language and country combination such as `en_US`.',
						},
						autoRecalc: {
							type: 'string',
							description:
								'How long to wait before volatile functions are recalculated. One of `ON_CHANGE`, `MINUTE`, or `HOUR`.',
						},
						timeZone: {
							type: 'string',
							description:
								'The time zone of the spreadsheet in CLDR format, for example `America/New_York`.',
						},
					},
					required: [],
				},
				sheets: {
					type: 'array',
					description: 'The sheets that are part of the spreadsheet.',
					items: {
						type: 'object',
						description: 'A sheet in the spreadsheet.',
						properties: {
							properties: {
								type: 'object',
								description: 'The properties of the sheet.',
								properties: {
									sheetId: {
										type: 'number',
										description:
											'The ID of the sheet. Cannot be changed once set.',
									},
									index: {
										type: 'number',
										description:
											'The zero-based position of the sheet within the spreadsheet.',
									},
									sheetType: {
										type: 'string',
										description:
											'The type of sheet. One of `GRID`, `OBJECT`, or `DATA_SOURCE`.',
									},
									hidden: {
										type: 'boolean',
										description:
											'Whether the sheet is hidden in the Google Sheets UI.',
									},
									rightToLeft: {
										type: 'boolean',
										description:
											'Whether the sheet is a right-to-left sheet instead of a left-to-right sheet.',
									},
									gridProperties: {
										type: 'object',
										description: 'Additional properties of a grid sheet.',
										properties: {
											rowCount: {
												type: 'number',
												description: 'The number of rows in the grid.',
											},
											columnCount: {
												type: 'number',
												description: 'The number of columns in the grid.',
											},
											frozenRowCount: {
												type: 'number',
												description:
													'The number of rows that are frozen in the grid.',
											},
											frozenColumnCount: {
												type: 'number',
												description:
													'The number of columns that are frozen in the grid.',
											},
											hideGridlines: {
												type: 'boolean',
												description:
													'Whether the grid hides its gridlines in the Google Sheets UI.',
											},
											rowGroupControlAfter: {
												type: 'boolean',
												description:
													'Whether the row grouping control toggle is shown after the group.',
											},
											columnGroupControlAfter: {
												type: 'boolean',
												description:
													'Whether the column grouping control toggle is shown after the group.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							data: {
								type: 'array',
								description:
									'Grid data for this sheet. Returned only when `includeGridData` is `true` or a matching field mask is set.',
								items: {
									type: 'object',
									description:
										'A block of grid data covering a contiguous range.',
									properties: {
										startRow: {
											type: 'number',
											description:
												'The first row this grid data refers to, zero-based.',
										},
										startColumn: {
											type: 'number',
											description:
												'The first column this grid data refers to, zero-based.',
										},
										rowData: {
											description:
												'The cell data in the grid, one entry per row starting at `startRow`. Each row contains `values` with per-cell `CellData` objects as described in the [Sheets API](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/sheets#CellData).',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				namedRanges: {
					type: 'array',
					description: 'The named ranges defined in the spreadsheet.',
					items: {
						type: 'object',
						description: 'A named range in the spreadsheet.',
						properties: {
							namedRangeId: {
								type: 'string',
								description: 'The ID of the named range.',
							},
							name: { type: 'string', description: 'The name of the named range.' },
							range: {
								type: 'object',
								description:
									'The range this named range covers. Indexes are zero-based; start indexes are inclusive and end indexes are exclusive.',
								properties: {
									sheetId: {
										type: 'number',
										description: 'The ID of the sheet this range is on.',
									},
									startRowIndex: {
										type: 'number',
										description:
											'The zero-based inclusive start row of the range.',
									},
									endRowIndex: {
										type: 'number',
										description:
											'The zero-based exclusive end row of the range.',
									},
									startColumnIndex: {
										type: 'number',
										description:
											'The zero-based inclusive start column of the range.',
									},
									endColumnIndex: {
										type: 'number',
										description:
											'The zero-based exclusive end column of the range.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'getValues',
		label: 'Get values',
		description: 'Retrieves values from a cell range of a spreadsheet.',
		context:
			"---\nname: getValues\ndescription: Retrieves values from a cell range of a spreadsheet.\n---\n\nReturns a range of values with `GET /spreadsheets/{spreadsheetId}/values/{range}`.\nThe response is a `ValueRange`: the resolved `range`, `majorDimension`, and a\ntwo-dimensional `values` array.\n\n`range` accepts [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation)\nor [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation).\nQuote sheet names that contain spaces or special characters, for example `'My Sheet'!A1:D5`.\n\n`valueRenderOption` controls how cell contents appear (`FORMATTED_VALUE` by\ndefault, `UNFORMATTED_VALUE`, or `FORMULA`). `dateTimeRenderOption` applies only\nwhen values are unformatted.\n\nTo read several ranges in one call, use `batchGetValues`.\n\nRefer to the [spreadsheets.values.get reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get).\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to read. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				range: {
					type: 'string',
					description:
						"The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) or [R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#r1c1_notation) of the range to retrieve. For example, `Sheet1!A1:D5` or `'My Sheet'!A1`.",
				},
				majorDimension: {
					type: 'string',
					description:
						'The major dimension that results should use. For data `A1=1,B1=2,A2=3,B2=4`, `ROWS` returns `[[1,2],[3,4]]` and `COLUMNS` returns `[[1,3],[2,4]]`.',
					default: '',
					enum: ['', 'ROWS', 'COLUMNS'],
				},
				valueRenderOption: {
					type: 'string',
					description:
						'How values should be represented in the output. Google defaults to `FORMATTED_VALUE` when omitted.',
					default: '',
					enum: ['', 'FORMATTED_VALUE', 'UNFORMATTED_VALUE', 'FORMULA'],
				},
				dateTimeRenderOption: {
					type: 'string',
					description:
						'How dates, times, and durations should be represented in the output. Ignored when `valueRenderOption` is `FORMATTED_VALUE`. Google defaults to `SERIAL_NUMBER` when omitted.',
					default: '',
					enum: ['', 'SERIAL_NUMBER', 'FORMATTED_STRING'],
				},
			},
			required: ['spreadsheetId', 'range'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				range: {
					type: 'string',
					description:
						'The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation). For output, this is the entire requested range even though trailing empty rows and columns are omitted from `values`.',
				},
				majorDimension: {
					type: 'string',
					description:
						'The major dimension of the values. `ROWS` means each inner array is a row; `COLUMNS` means each inner array is a column.',
				},
				values: {
					type: 'array',
					description:
						'The data that was read. The outer array is the major dimension; each inner array is one row or column. Trailing empty rows and columns are omitted.',
					items: {
						type: 'array',
						description: 'Values in one row or column.',
						items: {
							description:
								'A cell value. Google returns a string, number, or boolean depending on the render options.',
						},
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-sheets',
		appVersion: 2,
		endpointName: 'updateValues',
		label: 'Update values',
		description: 'Sets values in a range of a spreadsheet.',
		context:
			'---\nname: updateValues\ndescription: Sets values in a range of a spreadsheet.\n---\n\nOverwrites a range with `PUT /spreadsheets/{spreadsheetId}/values/{range}`.\n`valueInputOption` is required by the Sheets API: `RAW` stores values as-is,\n`USER_ENTERED` parses them as if typed in the UI (including formulas such as `=SUM(A1:A3)`).\n\n`values` is a two-dimensional array. With the default major dimension `ROWS`,\n`[["a","b"],["c","d"]]` writes A1=a, B1=b, A2=c, B2=d.\n\nThis is the atomic call behind Update a Cell, Update a Row, and Bulk Update Rows.\nThe endpoint does not compose A1 ranges from row numbers -- pass the range\ndirectly.\n\nOmitted cells in the body are not written. To clear cells, use `clearValues` or\nwrite empty strings.\n\nRefer to the [spreadsheets.values.update reference](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/spreadsheets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description:
						'The ID of the spreadsheet to update. You can find this in the spreadsheet URL: `docs.google.com/spreadsheets/d/{spreadsheetId}/edit`.',
				},
				range: {
					type: 'string',
					description:
						"The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1_notation) of the values to update, for example `Sheet1!A1:C3` or `'My Sheet'!A2`.",
				},
				valueInputOption: {
					type: 'string',
					description:
						'How the input data should be interpreted. `RAW` stores values as-is. `USER_ENTERED` parses them as if typed in the Google Sheets UI (numbers, dates, and formulas).',
					enum: ['RAW', 'USER_ENTERED'],
				},
				values: {
					type: 'array',
					description:
						'The data to write. This is a two-dimensional array: the outer array is the major dimension (rows by default), and each inner array is one row or column. Supported cell types are boolean, string, and number. Use an empty string to clear a cell. Null values are skipped.',
					items: {
						type: 'array',
						description: 'Values in one row or column.',
						items: {
							description:
								'A cell value. Supported types are boolean, string, and number. Use an empty string to clear a cell.',
						},
					},
				},
				majorDimension: {
					type: 'string',
					description:
						'The major dimension of `values`. When omitted, Google defaults to `ROWS`.',
					default: '',
					enum: ['', 'ROWS', 'COLUMNS'],
				},
				includeValuesInResponse: {
					type: 'boolean',
					description:
						'When `true`, the response includes the values of the cells that were updated. By default, responses do not include the updated values.',
				},
				responseValueRenderOption: {
					type: 'string',
					description:
						'How values in the response should be rendered. Google defaults to `FORMATTED_VALUE`. Meaningful only when `includeValuesInResponse` is `true`.',
					default: '',
					enum: ['', 'FORMATTED_VALUE', 'UNFORMATTED_VALUE', 'FORMULA'],
				},
				responseDateTimeRenderOption: {
					type: 'string',
					description:
						'How dates, times, and durations in the response should be rendered. Ignored when `responseValueRenderOption` is `FORMATTED_VALUE`. Google defaults to `SERIAL_NUMBER`.',
					default: '',
					enum: ['', 'SERIAL_NUMBER', 'FORMATTED_STRING'],
				},
			},
			required: ['spreadsheetId', 'range', 'valueInputOption', 'values'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				spreadsheetId: {
					type: 'string',
					description: 'The spreadsheet the updates were applied to.',
				},
				updatedRange: {
					type: 'string',
					description: 'The range (in A1 notation) that updates were applied to.',
				},
				updatedRows: {
					type: 'number',
					description:
						'The number of rows where at least one cell in the row was updated.',
				},
				updatedColumns: {
					type: 'number',
					description:
						'The number of columns where at least one cell in the column was updated.',
				},
				updatedCells: { type: 'number', description: 'The number of cells updated.' },
				updatedData: {
					type: 'object',
					description:
						'The values of the cells after updates were applied. Present only when `includeValuesInResponse` is `true`.',
					properties: {
						range: {
							type: 'string',
							description: 'The range the values cover, in A1 notation.',
						},
						majorDimension: {
							type: 'string',
							description: 'The major dimension of the values.',
						},
						values: {
							type: 'array',
							description: 'The updated cell values.',
							items: {
								type: 'array',
								description: 'Values in one row or column.',
								items: { description: 'A cell value after the update.' },
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
