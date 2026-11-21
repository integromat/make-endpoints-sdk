// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Superhuman Docs (Coda) API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://coda.io/apis/`. Provide the remaining path, including the API version, in the URL parameter\n(e.g. `/v1/whoami`). Authentication is handled automatically via the app\'s connection.\n\nFor write requests (`POST`, `PUT`, `PATCH`), send `Content-Type: application/json` in `headers` and pass the JSON body.\n\nRefer to the [Superhuman Docs API reference](https://docs.superhuman.com/developers/apis/v1) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { coda: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://coda.io/apis/`. For example, `/v1/whoami`.',
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
		appName: 'coda',
		appVersion: 1,
		endpointName: 'createARow',
		label: 'Insert or upsert rows',
		description:
			'Inserts rows into a table, optionally updating existing rows that match the key columns.',
		context:
			'---\nname: createARow\ndescription: Inserts rows into a table, optionally updating existing rows that match the key columns.\n---\n\n# Insert or upsert rows\n\nInserts one or more rows into a base table. With `keyColumns`, it upserts: rows that match an existing row on the key columns update it instead of adding a new one.\n\n## Usage\n\n- `docId`, `tableIdOrName`, and `rows` are required. Use the listTables endpoint to find table IDs and the listColumns endpoint to find column IDs.\n- Each row is `{ "cells": [ { "column": "c-tuVwxYz", "value": "Apple" } ] }`. Prefer column IDs over names.\n- Works only on base tables, not on views.\n- `rows[].cells[].value` is optional to allow clearing an existing cell by sending an empty string ("").\n\n## Notes\n\n- Without `keyColumns`, every call adds new rows, so repeated calls create duplicates. With `keyColumns`, every matching row is updated; when several rows match, all of them are updated.\n- The change is processed asynchronously. The API returns HTTP 202 with `requestId` (and `addedRowIds` for plain inserts). Rows usually appear within 5 to 20 seconds and can take up to a minute; a getRow call made right after this one can return 404, so retry it later.\n\nAPI reference: [upsertRows](https://docs.superhuman.com/developers/apis/v1#operation/upsertRows)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				rows: {
					type: 'array',
					description: 'Rows to insert or upsert.',
					items: {
						type: 'object',
						description: 'A row to insert or upsert.',
						properties: {
							cells: {
								type: 'array',
								description: 'Cell values of the row.',
								items: {
									type: 'object',
									description: 'A cell value to set.',
									properties: {
										column: {
											type: 'string',
											description:
												'Column ID (for example `c-tuVwxYz`), column URL, or column name (fragile, discouraged). Use the listColumns endpoint to find column IDs.',
										},
										value: {
											description:
												'The cell value: a string, number, or boolean, or an array of these for multi-value columns. Leave empty to clear the existing cell value.',
										},
									},
									required: ['column'],
								},
							},
						},
						required: ['cells'],
					},
				},
				keyColumns: {
					type: 'array',
					description:
						'Column IDs, URLs, or names (fragile, discouraged) used as upsert keys. Rows whose key column values match an existing row update that row instead of adding a new one. Omit to always insert.',
					items: {
						type: 'string',
						description: 'Column ID, URL, or name used as an upsert key.',
					},
				},
				disableParsing: {
					type: 'boolean',
					description:
						'If true, the API stores the values as sent and does not try to parse them.',
				},
			},
			required: ['docId', 'tableIdOrName', 'rows'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				requestId: {
					type: 'string',
					description: 'An arbitrary unique identifier for this request.',
				},
				addedRowIds: {
					type: 'array',
					description:
						'IDs of the rows that will be added. Returned only when `keyColumns` is not set.',
					items: { type: 'string', description: 'ID of a row that will be added.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'createDoc',
		label: 'Create a doc',
		description: 'Creates a new doc, optionally copying an existing doc.',
		context:
			'---\nname: createDoc\ndescription: Creates a new doc, optionally copying an existing doc.\n---\n\n# Create a doc\n\nCreates a new doc. Creating a doc requires the user to be a Doc Maker in the target workspace (or be auto-promoted to one).\n\n## Usage\n\n- Every input is optional. Without inputs, the API creates an empty doc named `Untitled` in the user\'s default folder.\n- `sourceDoc` copies an existing doc. Use the listDocs endpoint to find doc IDs.\n- `folderId` picks the destination folder. Without it, the doc goes to the "My docs" folder in the oldest workspace the user joined.\n- `initialPage` sets up the first page. `initialPage.pageContent.type` decides which other content fields apply:\n  - `canvas`: `canvasContent.format` (`html` or `markdown`) and `canvasContent.content` are required.\n  - `embed`: `url` is required; `renderMethod` is optional.\n  - `syncPage`: `mode` and `sourceDocId` are required. With `mode` = `page`, `sourcePageId` and `includeSubpages` are also required.\n\n## Notes\n\n- The doc is created asynchronously. The response returns the doc ID right away, but the doc can take up to a minute before other endpoints can read it; a call made right away can return 404, so retry it later.\n- The response is the new doc\'s metadata plus `requestId`.\n\nAPI reference: [createDoc](https://docs.superhuman.com/developers/apis/v1#operation/createDoc)\n',
		accounts: { coda: { scope: [] } },
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
				sourceDoc: {
					type: 'string',
					description:
						'ID of an existing doc to copy. When set, the new doc is a copy of that doc.',
				},
				timezone: {
					type: 'string',
					description:
						'The timezone to use for the new doc, as an IANA timezone name, for example `America/Los_Angeles`.',
				},
				folderId: {
					type: 'string',
					description:
						'ID of the folder in which to create the doc, for example `fl-ABcdEFgHJi`. Defaults to the "My docs" folder in the oldest workspace the user joined.',
				},
				initialPage: {
					type: 'object',
					description: 'The initial page of the new doc.',
					properties: {
						name: { type: 'string', description: 'Name of the page.' },
						subtitle: { type: 'string', description: 'Subtitle of the page.' },
						iconName: {
							type: 'string',
							description: 'Name of the page icon, for example `rocket`.',
						},
						imageUrl: { type: 'string', description: 'URL of the cover image to use.' },
						parentPageId: {
							type: 'string',
							description: 'ID of the parent page, when creating a subpage.',
						},
						pageContent: {
							type: 'object',
							description:
								'Content of the page: canvas text, a full-page embed, or a sync page. Set `type` and fill the fields for that type.',
							properties: {
								type: {
									type: 'string',
									description:
										'The kind of page content. Required when page content is provided.',
									default: '',
									enum: ['', 'canvas', 'embed', 'syncPage'],
								},
							},
							required: [],
							allOf: [
								{
									if: { properties: { type: { const: 'canvas' } } },
									then: {
										type: 'object',
										properties: {
											canvasContent: {
												type: 'object',
												description:
													'Text or rich text content of the page. Required for the `canvas` type.',
												properties: {
													format: {
														type: 'string',
														description:
															'Format of the content. Required for canvas content.',
														default: '',
														enum: ['', 'html', 'markdown'],
													},
													content: {
														type: 'string',
														description:
															'The page content in the chosen format, for example `<p><b>This</b> is rich text</p>`. Required for canvas content.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								{
									if: { properties: { type: { const: 'embed' } } },
									then: {
										type: 'object',
										properties: {
											url: {
												type: 'string',
												description:
													'The URL of the content to embed. Required for the `embed` type.',
											},
											renderMethod: {
												type: 'string',
												description: 'Render mode for the embed page.',
												default: '',
												enum: ['', 'compatibility', 'standard'],
											},
										},
										required: [],
									},
								},
								{
									if: { properties: { type: { const: 'syncPage' } } },
									then: {
										type: 'object',
										properties: {
											mode: {
												type: 'string',
												description:
													'Whether to sync a single page or a whole doc. Required for the `syncPage` type.',
												default: '',
												enum: ['', 'page', 'document'],
											},
											sourceDocId: {
												type: 'string',
												description:
													'ID of the doc to insert as a sync page. Required for the `syncPage` type.',
											},
										},
										required: [],
										allOf: [
											{
												if: { properties: { mode: { const: 'page' } } },
												then: {
													type: 'object',
													properties: {
														sourcePageId: {
															type: 'string',
															description:
																'ID of the page to insert as a sync page, for example `canvas-IjkLmnO`. Required for the `page` mode.',
														},
														includeSubpages: {
															type: 'boolean',
															description:
																'Whether to include subpages in the sync page. Required for the `page` mode.',
														},
													},
													required: [],
												},
											},
										],
									},
								},
							],
						},
					},
					required: [],
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the doc.' },
				type: { type: 'string', description: 'The type of this resource. Always `doc`.' },
				href: { type: 'string', description: 'API link to the doc.' },
				browserLink: { type: 'string', description: 'Browser-friendly link to the doc.' },
				icon: {
					type: 'object',
					description: 'Info about the doc icon.',
					properties: {
						name: { type: 'string', description: 'Name of the icon.' },
						type: { type: 'string', description: 'MIME type of the icon.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the icon.',
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'Name of the doc.' },
				owner: { type: 'string', description: 'Email address of the doc owner.' },
				ownerName: { type: 'string', description: 'Name of the doc owner.' },
				docSize: {
					type: 'object',
					description: 'The number of components within the doc.',
					properties: {
						totalRowCount: {
							type: 'number',
							description:
								'The number of rows contained within all tables of the doc.',
						},
						tableAndViewCount: {
							type: 'number',
							description:
								'The total number of tables and views contained within the doc.',
						},
						baseTableCount: {
							type: 'number',
							description:
								'The total number of base tables contained within the doc.',
						},
						pageCount: {
							type: 'number',
							description: 'The total number of pages contained within the doc.',
						},
						overApiSizeLimit: {
							type: 'boolean',
							description: 'If true, the doc is over the API size limit.',
						},
					},
					required: [],
				},
				sourceDoc: {
					type: 'object',
					description: 'Reference to the doc this doc was copied from, if any.',
					properties: {
						id: { type: 'string', description: 'ID of the source doc.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `doc`.',
						},
						href: { type: 'string', description: 'API link to the source doc.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the source doc.',
						},
					},
					required: [],
				},
				createdAt: {
					type: 'string',
					description: 'Timestamp for when the doc was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Timestamp for when the doc was last modified.',
				},
				published: {
					type: 'object',
					description:
						'Information about the publishing state of the doc. Present only for published docs.',
					properties: {
						description: {
							type: 'string',
							description: 'Description of the published doc.',
						},
						browserLink: { type: 'string', description: 'URL to the published doc.' },
						imageLink: {
							type: 'string',
							description: 'URL to the cover image for the published doc.',
						},
						discoverable: {
							type: 'boolean',
							description: 'If true, the doc is discoverable.',
						},
						earnCredit: {
							type: 'boolean',
							description:
								'If true, new users may be required to sign in to view content within this doc, and the doc owner receives credit for each user who signs up via the doc.',
						},
						mode: {
							type: 'string',
							description:
								'Which interaction mode the published doc uses: `view`, `play`, or `edit`.',
						},
						categories: {
							type: 'array',
							description: 'Categories applied to the doc.',
							items: {
								type: 'object',
								description: 'A category applied to the doc.',
								properties: {
									name: { type: 'string', description: 'Name of the category.' },
								},
								required: [],
							},
						},
					},
					required: [],
				},
				folder: {
					type: 'object',
					description: 'Reference to the folder containing the doc.',
					properties: {
						id: { type: 'string', description: 'ID of the folder.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `folder`.',
						},
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the folder.',
						},
						name: {
							type: 'string',
							description:
								'Name of the folder. Included if the user has access to the folder.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description: 'Reference to the workspace.',
					properties: {
						id: { type: 'string', description: 'ID of the workspace.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `workspace`.',
						},
						organizationId: {
							type: 'string',
							description: 'ID of the organization bound to this workspace, if any.',
						},
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the workspace.',
						},
						name: {
							type: 'string',
							description:
								'Name of the workspace. Included if the user has access to the workspace.',
						},
					},
					required: [],
				},
				workspaceId: {
					type: 'string',
					description:
						'ID of the workspace containing the doc. Deprecated by the vendor: use `workspace.id` instead.',
				},
				folderId: {
					type: 'string',
					description:
						'ID of the folder containing the doc. Deprecated by the vendor: use `folder.id` instead.',
				},
				requestId: {
					type: 'string',
					description: 'An arbitrary unique identifier for this request.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'deleteRow',
		label: 'Delete a row',
		description: 'Deletes a row from a table or view.',
		context:
			'---\nname: deleteRow\ndescription: Deletes a row from a table or view.\n---\n\n# Delete a row\n\nDeletes one row from a table or view.\n\n## Usage\n\n- `docId`, `tableIdOrName`, and `rowIdOrName` are required. Use the listRows endpoint to find row IDs. Prefer the row ID: when a name matches several rows, an arbitrary one is deleted. Pass names as plain text; the endpoint URL-encodes them.\n\n## Notes\n\n- The deletion is processed asynchronously. The API returns HTTP 202 with `requestId` and the row `id`. The row usually disappears within 5 to 20 seconds and can take up to a minute; a getRow call made right after this one can still return it.\n\nAPI reference: [deleteRow](https://docs.superhuman.com/developers/apis/v1#operation/deleteRow)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				rowIdOrName: {
					type: 'string',
					description:
						'ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is deleted. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.',
				},
			},
			required: ['docId', 'tableIdOrName', 'rowIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				requestId: {
					type: 'string',
					description: 'An arbitrary unique identifier for this request.',
				},
				id: { type: 'string', description: 'ID of the row to be deleted.' },
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getColumn',
		label: 'Get a column',
		description: 'Returns details about a column in a table.',
		context:
			'---\nname: getColumn\ndescription: Returns details about a column in a table.\n---\n\n# Get a column\n\nReturns a column of a table: name, whether it is the display or a calculated column, its formula, default value, and format.\n\n## Usage\n\n- `docId`, `tableIdOrName`, and `columnIdOrName` are required. Use the listColumns endpoint to find column IDs. Pass names as plain text; the endpoint URL-encodes them.\n\n## Notes\n\n- `format.type` decides which other `format` fields are present. For example, select columns return `options`, lookup columns return `table`, and currency columns return `currencyCode`.\n\nAPI reference: [getColumn](https://docs.superhuman.com/developers/apis/v1#operation/getColumn)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				columnIdOrName: {
					type: 'string',
					description:
						'ID or name of the column. Names are discouraged because users can easily change them. Example ID: `c-tuVwxYz`. Use the listColumns endpoint to find column IDs.',
				},
			},
			required: ['docId', 'tableIdOrName', 'columnIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the column, for example `c-tuVwxYz`.' },
				type: {
					type: 'string',
					description: 'The type of this resource. Always `column`.',
				},
				href: { type: 'string', description: 'API link to the column.' },
				name: { type: 'string', description: 'Name of the column.' },
				display: {
					type: 'boolean',
					description: 'Whether the column is the display column of the table.',
				},
				calculated: {
					type: 'boolean',
					description: 'Whether the column has a formula set on it.',
				},
				formula: {
					type: 'string',
					description: 'Formula on the column, for example `thisRow.Created()`.',
				},
				defaultValue: {
					type: 'string',
					description: 'Default value formula for the column.',
				},
				format: {
					type: 'object',
					description:
						'Format of the column. `type` and `isArray` are always present; the other fields depend on the format type.',
					properties: {
						type: {
							type: 'string',
							description:
								'Format type of the column: `text`, `person`, `lookup`, `number`, `percent`, `currency`, `date`, `dateTime`, `time`, `duration`, `email`, `link`, `slider`, `scale`, `image`, `imageReference`, `attachments`, `button`, `checkbox`, `select`, `packObject`, `reaction`, `canvas`, or `other`.',
						},
						isArray: {
							type: 'boolean',
							description: 'Whether the column holds an array of values.',
						},
						label: {
							type: 'string',
							description: 'Button columns: label formula for the button.',
						},
						disableIf: {
							type: 'string',
							description:
								'Button columns: formula that disables the button when true.',
						},
						action: {
							type: 'string',
							description: 'Button columns: action formula for the button.',
						},
						displayType: {
							type: 'string',
							description:
								'Checkbox columns: `toggle` or `check`. Slider columns: `slider` or `progress`.',
						},
						format: {
							type: 'string',
							description:
								'Date and time columns: a format string in [Moment syntax](https://momentjs.com/docs/#/displaying/), for example `YYYY-MM-DD`. Currency columns: `currency`, `accounting`, or `financial`.',
						},
						dateFormat: {
							type: 'string',
							description:
								'Date and time columns: date format string in [Moment syntax](https://momentjs.com/docs/#/displaying/).',
						},
						timeFormat: {
							type: 'string',
							description:
								'Date and time columns: time format string in [Moment syntax](https://momentjs.com/docs/#/displaying/).',
						},
						precision: {
							type: 'number',
							description:
								'Numeric, currency, and duration columns: the decimal precision.',
						},
						maxUnit: {
							type: 'string',
							description:
								'Duration columns: the largest time unit shown: `days`, `hours`, `minutes`, or `seconds`.',
						},
						display: {
							type: 'string',
							description:
								'Email columns: `iconAndEmail`, `iconOnly`, or `emailOnly`. Link columns: `iconOnly`, `url`, `title`, `card`, or `embed`.',
						},
						autocomplete: {
							type: 'boolean',
							description: 'Email columns: whether email autocomplete is enabled.',
						},
						force: {
							type: 'boolean',
							description:
								'Link columns: whether embeds render on the client instead of the server, for sites that require user login.',
						},
						currencyCode: {
							type: 'string',
							description: 'Currency columns: the currency symbol, for example `$`.',
						},
						width: {
							description:
								'Image reference columns: the image width, as a number or a formula string that evaluates to a number.',
						},
						height: {
							description:
								'Image reference columns: the image height, as a number or a formula string that evaluates to a number.',
						},
						style: {
							type: 'string',
							description:
								'Image reference columns: how the image is shown: `auto` or `circle`.',
						},
						useThousandsSeparator: {
							type: 'boolean',
							description: 'Numeric columns: whether a thousands separator is used.',
						},
						table: {
							type: 'object',
							description:
								'Lookup (reference) columns: the table the column refers to.',
							properties: {
								id: {
									type: 'string',
									description: 'ID of the table, for example `grid-pqRst-U`.',
								},
								type: {
									type: 'string',
									description: 'The type of this resource. Always `table`.',
								},
								tableType: {
									type: 'string',
									description:
										'The kind of table: `table`, `view`, or `database`.',
								},
								href: { type: 'string', description: 'API link to the table.' },
								browserLink: {
									type: 'string',
									description: 'Browser-friendly link to the table.',
								},
								name: { type: 'string', description: 'Name of the table.' },
								parent: {
									type: 'object',
									description: 'Reference to the page containing the table.',
									properties: {
										id: { type: 'string', description: 'ID of the page.' },
										type: {
											type: 'string',
											description:
												'The type of this resource. Always `page`.',
										},
										href: {
											type: 'string',
											description: 'API link to the page.',
										},
										browserLink: {
											type: 'string',
											description: 'Browser-friendly link to the page.',
										},
										name: { type: 'string', description: 'Name of the page.' },
									},
									required: [],
								},
							},
							required: [],
						},
						options: {
							type: 'array',
							description:
								'Select columns: the available options, when the select list uses a fixed set. Up to the first 5000 options.',
							items: {
								type: 'object',
								description: 'An option of the select column.',
								properties: {
									name: {
										type: 'string',
										description: 'The name of the option.',
									},
									backgroundColor: {
										type: 'string',
										description:
											'The background color of the option, for example `#ff0000`.',
									},
									foregroundColor: {
										type: 'string',
										description:
											'The foreground color of the option, for example `#ffffff`.',
									},
								},
								required: [],
							},
						},
						maximum: {
							description:
								'Scale columns: the maximum number allowed. Slider columns: the maximum, as a number or a formula string.',
						},
						icon: {
							type: 'string',
							description:
								'Scale columns: the icon set, for example `star`, `heart`, or `thumbsup`.',
						},
						minimum: {
							description:
								'Slider columns: the minimum, as a number or a formula string.',
						},
						step: {
							description:
								'Slider columns: the step, as a number or a formula string.',
						},
						showValue: {
							type: 'boolean',
							description:
								'Slider columns: whether the underlying numeric value is also shown.',
						},
					},
					required: [],
				},
				parent: {
					type: 'object',
					description: 'Reference to the table containing the column.',
					properties: {
						id: {
							type: 'string',
							description: 'ID of the table, for example `grid-pqRst-U`.',
						},
						type: {
							type: 'string',
							description: 'The type of this resource. Always `table`.',
						},
						tableType: {
							type: 'string',
							description: 'The kind of table: `table`, `view`, or `database`.',
						},
						href: { type: 'string', description: 'API link to the table.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the table.',
						},
						name: { type: 'string', description: 'Name of the table.' },
						parent: {
							type: 'object',
							description: 'Reference to the page containing the table.',
							properties: {
								id: { type: 'string', description: 'ID of the page.' },
								type: {
									type: 'string',
									description: 'The type of this resource. Always `page`.',
								},
								href: { type: 'string', description: 'API link to the page.' },
								browserLink: {
									type: 'string',
									description: 'Browser-friendly link to the page.',
								},
								name: { type: 'string', description: 'Name of the page.' },
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
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getControl',
		label: 'Get a control',
		description: 'Returns details about a control in a doc, including its current value.',
		context:
			'---\nname: getControl\ndescription: Returns details about a control in a doc, including its current value.\n---\n\n# Get a control\n\nReturns a control in a doc with its type and current value.\n\n## Usage\n\n- `docId` and `controlIdOrName` are required. Use the listControls endpoint to find control IDs.\n- `controlIdOrName` accepts an ID (`ctrl-…`) or a name. Prefer the ID: names can change. Pass names as plain text; the endpoint URL-encodes them.\n\n## Notes\n\n- `value` is a string, number, or boolean, or an array of these, depending on `controlType`.\n\nAPI reference: [getControl](https://docs.superhuman.com/developers/apis/v1#operation/getControl)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				controlIdOrName: {
					type: 'string',
					description:
						'ID or name of the control. Names are discouraged because users can easily change them. Example ID: `ctrl-cDefGhij`. Use the listControls endpoint to find control IDs.',
				},
			},
			required: ['docId', 'controlIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the control.' },
				type: {
					type: 'string',
					description: 'The type of this resource. Always `control`.',
				},
				href: { type: 'string', description: 'API link to the control.' },
				name: { type: 'string', description: 'Name of the control.' },
				parent: {
					type: 'object',
					description: 'Reference to the page containing the control.',
					properties: {
						id: { type: 'string', description: 'ID of the parent page.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `page`.',
						},
						href: { type: 'string', description: 'API link to the parent page.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the parent page.',
						},
						name: { type: 'string', description: 'Name of the parent page.' },
					},
					required: [],
				},
				controlType: {
					type: 'string',
					description:
						'Type of the control: `aiBlock`, `button`, `checkbox`, `datePicker`, `dateRangePicker`, `dateTimePicker`, `lookup`, `multiselect`, `select`, `scale`, `slider`, `reaction`, `textbox`, or `timePicker`.',
				},
				value: {
					description:
						'The current value of the control: a string, number, or boolean, or an array of such values (arrays may be nested one level).',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getDoc',
		label: 'Get a doc',
		description: 'Returns metadata about a doc.',
		context:
			'---\nname: getDoc\ndescription: Returns metadata about a doc.\n---\n\n# Get a doc\n\nReturns metadata about a doc: name, owner, size, folder, workspace, publishing state, and timestamps.\n\n## Usage\n\n- `docId` is required. Use the listDocs endpoint to find doc IDs.\n\n## Notes\n\n- `workspaceId` and `folderId` in the response are deprecated by the vendor. Use `workspace.id` and `folder.id` instead.\n- `docSize.overApiSizeLimit` = true means the doc is too large for some API operations.\n\nAPI reference: [getDoc](https://docs.superhuman.com/developers/apis/v1#operation/getDoc)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
			},
			required: ['docId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the doc.' },
				type: { type: 'string', description: 'The type of this resource. Always `doc`.' },
				href: { type: 'string', description: 'API link to the doc.' },
				browserLink: { type: 'string', description: 'Browser-friendly link to the doc.' },
				icon: {
					type: 'object',
					description: 'Info about the doc icon.',
					properties: {
						name: { type: 'string', description: 'Name of the icon.' },
						type: { type: 'string', description: 'MIME type of the icon.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the icon.',
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'Name of the doc.' },
				owner: { type: 'string', description: 'Email address of the doc owner.' },
				ownerName: { type: 'string', description: 'Name of the doc owner.' },
				docSize: {
					type: 'object',
					description: 'The number of components within the doc.',
					properties: {
						totalRowCount: {
							type: 'number',
							description:
								'The number of rows contained within all tables of the doc.',
						},
						tableAndViewCount: {
							type: 'number',
							description:
								'The total number of tables and views contained within the doc.',
						},
						baseTableCount: {
							type: 'number',
							description:
								'The total number of base tables contained within the doc.',
						},
						pageCount: {
							type: 'number',
							description: 'The total number of pages contained within the doc.',
						},
						overApiSizeLimit: {
							type: 'boolean',
							description: 'If true, the doc is over the API size limit.',
						},
					},
					required: [],
				},
				sourceDoc: {
					type: 'object',
					description: 'Reference to the doc this doc was copied from, if any.',
					properties: {
						id: { type: 'string', description: 'ID of the source doc.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `doc`.',
						},
						href: { type: 'string', description: 'API link to the source doc.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the source doc.',
						},
					},
					required: [],
				},
				createdAt: {
					type: 'string',
					description: 'Timestamp for when the doc was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Timestamp for when the doc was last modified.',
				},
				published: {
					type: 'object',
					description:
						'Information about the publishing state of the doc. Present only for published docs.',
					properties: {
						description: {
							type: 'string',
							description: 'Description of the published doc.',
						},
						browserLink: { type: 'string', description: 'URL to the published doc.' },
						imageLink: {
							type: 'string',
							description: 'URL to the cover image for the published doc.',
						},
						discoverable: {
							type: 'boolean',
							description: 'If true, the doc is discoverable.',
						},
						earnCredit: {
							type: 'boolean',
							description:
								'If true, new users may be required to sign in to view content within this doc, and the doc owner receives credit for each user who signs up via the doc.',
						},
						mode: {
							type: 'string',
							description:
								'Which interaction mode the published doc uses: `view`, `play`, or `edit`.',
						},
						categories: {
							type: 'array',
							description: 'Categories applied to the doc.',
							items: {
								type: 'object',
								description: 'A category applied to the doc.',
								properties: {
									name: { type: 'string', description: 'Name of the category.' },
								},
								required: [],
							},
						},
					},
					required: [],
				},
				folder: {
					type: 'object',
					description: 'Reference to the folder containing the doc.',
					properties: {
						id: { type: 'string', description: 'ID of the folder.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `folder`.',
						},
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the folder.',
						},
						name: {
							type: 'string',
							description:
								'Name of the folder. Included if the user has access to the folder.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description: 'Reference to the workspace.',
					properties: {
						id: { type: 'string', description: 'ID of the workspace.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `workspace`.',
						},
						organizationId: {
							type: 'string',
							description: 'ID of the organization bound to this workspace, if any.',
						},
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the workspace.',
						},
						name: {
							type: 'string',
							description:
								'Name of the workspace. Included if the user has access to the workspace.',
						},
					},
					required: [],
				},
				workspaceId: {
					type: 'string',
					description:
						'ID of the workspace containing the doc. Deprecated by the vendor: use `workspace.id` instead.',
				},
				folderId: {
					type: 'string',
					description:
						'ID of the folder containing the doc. Deprecated by the vendor: use `folder.id` instead.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getFolder',
		label: 'Get a folder',
		description: 'Returns details about a folder.',
		context:
			'---\nname: getFolder\ndescription: Returns details about a folder.\n---\n\n# Get a folder\n\nReturns a folder: name, description, icon, workspace, creation time, and whether its settings can be edited.\n\n## Usage\n\n- `folderId` is required, for example `fl-1Ab234`. A doc\'s folder ID is in `folder.id` in the getDoc or listDocs response.\n\n## Notes\n\n- Folders belong to a workspace, not to a doc, so this call takes only the folder ID.\n- `canEdit` is false for folders whose settings cannot be changed, such as the personal "My docs" folder.\n\nAPI reference: [getFolder](https://docs.superhuman.com/developers/apis/v1#operation/getFolder)\n',
		accounts: { coda: { scope: [] } },
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
				folderId: {
					type: 'string',
					description:
						"ID of the folder, for example `fl-1Ab234`. A doc's folder ID is in `folder.id` in the getDoc or listDocs response.",
				},
			},
			required: ['folderId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the folder.' },
				type: {
					type: 'string',
					description: 'The type of this resource. Always `folder`.',
				},
				name: { type: 'string', description: 'The name of the folder.' },
				browserLink: {
					type: 'string',
					description: 'Browser-friendly link to the folder.',
				},
				description: { type: 'string', description: 'The description of the folder.' },
				icon: {
					type: 'object',
					description: 'Info about the folder icon.',
					properties: {
						name: { type: 'string', description: 'Name of the icon.' },
						type: { type: 'string', description: 'MIME type of the icon.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the icon.',
						},
					},
					required: [],
				},
				iconColor: {
					type: 'string',
					description:
						'Color scheme of the folder icon, for example `DARK_BLUE` or `LIGHT_GRAY`.',
				},
				createdAt: {
					type: 'string',
					description: 'Timestamp for when the folder was created.',
				},
				canEdit: {
					type: 'boolean',
					description:
						'Whether the folder settings can be edited. Some folder types, such as the personal "My docs" folder, cannot be edited.',
				},
				workspace: {
					type: 'object',
					description: 'Reference to the workspace.',
					properties: {
						id: { type: 'string', description: 'ID of the workspace.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `workspace`.',
						},
						organizationId: {
							type: 'string',
							description: 'ID of the organization bound to this workspace, if any.',
						},
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the workspace.',
						},
						name: {
							type: 'string',
							description:
								'Name of the workspace. Included if the user has access to the workspace.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getFormula',
		label: 'Get a formula',
		description: 'Returns details about a named formula in a doc, including its current value.',
		context:
			'---\nname: getFormula\ndescription: Returns details about a named formula in a doc, including its current value.\n---\n\n# Get a formula\n\nReturns a named formula in a doc with its current computed value.\n\n## Usage\n\n- `docId` and `formulaIdOrName` are required. Use the listFormulas endpoint to find formula IDs.\n- `formulaIdOrName` accepts an ID (`f-…`) or a name. Prefer the ID: names can change. Pass names as plain text; the endpoint URL-encodes them.\n\n## Notes\n\n- `value` is a string, number, or boolean, or an array of these.\n\nAPI reference: [getFormula](https://docs.superhuman.com/developers/apis/v1#operation/getFormula)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				formulaIdOrName: {
					type: 'string',
					description:
						'ID or name of the formula. Names are discouraged because users can easily change them. Example ID: `f-fgHijkLm`. Use the listFormulas endpoint to find formula IDs.',
				},
			},
			required: ['docId', 'formulaIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the formula.' },
				type: {
					type: 'string',
					description: 'The type of this resource. Always `formula`.',
				},
				href: { type: 'string', description: 'API link to the formula.' },
				name: { type: 'string', description: 'Name of the formula.' },
				parent: {
					type: 'object',
					description: 'Reference to the page containing the formula.',
					properties: {
						id: { type: 'string', description: 'ID of the parent page.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `page`.',
						},
						href: { type: 'string', description: 'API link to the parent page.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the parent page.',
						},
						name: { type: 'string', description: 'Name of the parent page.' },
					},
					required: [],
				},
				value: {
					description:
						'The current value of the formula: a string, number, or boolean, or an array of such values (arrays may be nested one level).',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getRow',
		label: 'Get a row',
		description: 'Returns details about a row in a table.',
		context:
			'---\nname: getRow\ndescription: Returns details about a row in a table.\n---\n\n# Get a row\n\nReturns one row of a table with its cell values and a reference to its table.\n\n## Usage\n\n- `docId`, `tableIdOrName`, and `rowIdOrName` are required. Use the listRows endpoint to find row IDs. Prefer the row ID: when a name matches several rows, an arbitrary one is returned. Pass names as plain text; the endpoint URL-encodes them.\n- `values` is keyed by column ID by default. Use the listColumns endpoint to map IDs to names, or set `useColumnNames` to true.\n- `valueFormat` controls the cell value shape: `simple`, `simpleWithArrays`, or `rich`.\n\nAPI reference: [getRow](https://docs.superhuman.com/developers/apis/v1#operation/getRow)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				rowIdOrName: {
					type: 'string',
					description:
						'ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is returned. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.',
				},
				useColumnNames: {
					type: 'boolean',
					description:
						'If true, `values` is keyed by column name instead of column ID. Discouraged: code that relies on names breaks when columns are renamed.',
				},
				valueFormat: {
					type: 'string',
					description:
						'The format of the returned cell values. The API defaults to `simple`.',
					default: '',
					enum: ['', 'simple', 'simpleWithArrays', 'rich'],
				},
			},
			required: ['docId', 'tableIdOrName', 'rowIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the row, for example `i-tuVwxYz`.' },
				type: { type: 'string', description: 'The type of this resource. Always `row`.' },
				href: { type: 'string', description: 'API link to the row.' },
				name: {
					type: 'string',
					description: 'The display name of the row, based on its identifying column.',
				},
				index: { type: 'number', description: 'Index of the row within the table.' },
				browserLink: { type: 'string', description: 'Browser-friendly link to the row.' },
				createdAt: {
					type: 'string',
					description: 'Timestamp for when the row was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Timestamp for when the row was last modified.',
				},
				values: {
					type: 'object',
					description:
						'Cell values of the row, keyed by column ID (or by column name when `useColumnNames` is true). The value shape depends on `valueFormat`.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				parent: {
					type: 'object',
					description: 'Reference to the table containing the row.',
					properties: {
						id: {
							type: 'string',
							description: 'ID of the table, for example `grid-pqRst-U`.',
						},
						type: {
							type: 'string',
							description: 'The type of this resource. Always `table`.',
						},
						tableType: {
							type: 'string',
							description: 'The kind of table: `table`, `view`, or `database`.',
						},
						href: { type: 'string', description: 'API link to the table.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the table.',
						},
						name: { type: 'string', description: 'Name of the table.' },
						parent: {
							type: 'object',
							description: 'Reference to the page containing the table.',
							properties: {
								id: { type: 'string', description: 'ID of the page.' },
								type: {
									type: 'string',
									description: 'The type of this resource. Always `page`.',
								},
								href: { type: 'string', description: 'API link to the page.' },
								browserLink: {
									type: 'string',
									description: 'Browser-friendly link to the page.',
								},
								name: { type: 'string', description: 'Name of the page.' },
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
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getSection',
		label: 'Get a page',
		description: 'Returns details about a page in a doc.',
		context:
			'---\nname: getSection\ndescription: Returns details about a page in a doc.\n---\n\n# Get a page\n\nReturns a page of a doc: name, subtitle, icon, cover image, content type, visibility, parent and child pages, authors, and timestamps. It does not return the page content.\n\n## Usage\n\n- `docId` and `pageIdOrName` are required. Use the listSections endpoint to find page IDs.\n- `pageIdOrName` accepts an ID (`canvas-…`) or a name. Prefer the ID: names can change, and when several pages share a name an arbitrary one is returned. Pass names as plain text; the endpoint URL-encodes them.\n\n## Notes\n\n- A deleted page returns HTTP 410.\n\nAPI reference: [getPage](https://docs.superhuman.com/developers/apis/v1#operation/getPage)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				pageIdOrName: {
					type: 'string',
					description:
						'ID or name of the page. Names are discouraged because users can easily change them. If several pages share the name, an arbitrary one is returned. Example ID: `canvas-IjkLmnO`. Use the listSections endpoint to find page IDs.',
				},
			},
			required: ['docId', 'pageIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the page.' },
				type: { type: 'string', description: 'The type of this resource. Always `page`.' },
				href: { type: 'string', description: 'API link to the page.' },
				browserLink: { type: 'string', description: 'Browser-friendly link to the page.' },
				name: { type: 'string', description: 'Name of the page.' },
				subtitle: { type: 'string', description: 'Subtitle of the page.' },
				icon: {
					type: 'object',
					description: 'Info about the page icon.',
					properties: {
						name: { type: 'string', description: 'Name of the icon.' },
						type: { type: 'string', description: 'MIME type of the icon.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the icon.',
						},
					},
					required: [],
				},
				image: {
					type: 'object',
					description: 'Info about the page cover image.',
					properties: {
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the image.',
						},
						type: { type: 'string', description: 'MIME type of the image.' },
						width: { type: 'number', description: 'The width of the image in pixels.' },
						height: {
							type: 'number',
							description: 'The height of the image in pixels.',
						},
					},
					required: [],
				},
				contentType: {
					type: 'string',
					description: 'The type of the page: `canvas`, `embed`, or `syncPage`.',
				},
				isHidden: { type: 'boolean', description: 'Whether the page is hidden in the UI.' },
				isEffectivelyHidden: {
					type: 'boolean',
					description: 'Whether the page or any of its parents is hidden in the UI.',
				},
				parent: {
					type: 'object',
					description: 'Reference to the parent page, if this is a subpage.',
					properties: {
						id: { type: 'string', description: 'ID of the parent page.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `page`.',
						},
						href: { type: 'string', description: 'API link to the parent page.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the parent page.',
						},
						name: { type: 'string', description: 'Name of the parent page.' },
					},
					required: [],
				},
				children: {
					type: 'array',
					description: 'References to the subpages of this page.',
					items: {
						type: 'object',
						description: 'Reference to a subpage.',
						properties: {
							id: { type: 'string', description: 'ID of the subpage.' },
							type: {
								type: 'string',
								description: 'The type of this resource. Always `page`.',
							},
							href: { type: 'string', description: 'API link to the subpage.' },
							browserLink: {
								type: 'string',
								description: 'Browser-friendly link to the subpage.',
							},
							name: { type: 'string', description: 'Name of the subpage.' },
						},
						required: [],
					},
				},
				authors: {
					type: 'array',
					description: 'Authors of the page.',
					items: {
						type: 'object',
						description: 'A person who authored the page.',
						properties: {
							'@context': {
								type: 'string',
								description:
									'A URL describing the schema context for this object, typically `http://schema.org/`.',
							},
							'@type': {
								type: 'string',
								description: 'The schema.org type of this object. Always `Person`.',
							},
							additionalType: {
								type: 'string',
								description:
									'An identifier of additional type info that may not be present in a schema.org taxonomy.',
							},
							name: { type: 'string', description: 'The full name of the person.' },
							email: {
								type: 'string',
								description: 'The email address of the person.',
							},
						},
						required: [],
					},
				},
				createdAt: {
					type: 'string',
					description: 'Timestamp for when the page was created.',
				},
				createdBy: {
					type: 'object',
					description: 'The person who created the page.',
					properties: {
						'@context': {
							type: 'string',
							description:
								'A URL describing the schema context for this object, typically `http://schema.org/`.',
						},
						'@type': {
							type: 'string',
							description: 'The schema.org type of this object. Always `Person`.',
						},
						additionalType: {
							type: 'string',
							description:
								'An identifier of additional type info that may not be present in a schema.org taxonomy.',
						},
						name: { type: 'string', description: 'The full name of the person.' },
						email: { type: 'string', description: 'The email address of the person.' },
					},
					required: [],
				},
				updatedAt: {
					type: 'string',
					description: 'Timestamp for when the page content was last modified.',
				},
				updatedBy: {
					type: 'object',
					description: 'The person who last modified the page content.',
					properties: {
						'@context': {
							type: 'string',
							description:
								'A URL describing the schema context for this object, typically `http://schema.org/`.',
						},
						'@type': {
							type: 'string',
							description: 'The schema.org type of this object. Always `Person`.',
						},
						additionalType: {
							type: 'string',
							description:
								'An identifier of additional type info that may not be present in a schema.org taxonomy.',
						},
						name: { type: 'string', description: 'The full name of the person.' },
						email: { type: 'string', description: 'The email address of the person.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'getTable',
		label: 'Get a table',
		description: 'Returns details about a table or view in a doc.',
		context:
			'---\nname: getTable\ndescription: Returns details about a table or view in a doc.\n---\n\n# Get a table\n\nReturns a table or view: type, parent page, base table (for views), display column, row count, sorts, layout, filter, and timestamps.\n\n## Usage\n\n- `docId` and `tableIdOrName` are required. Use the listTables endpoint to find table IDs. Prefer IDs: names can change. Pass names as plain text; the endpoint URL-encodes them.\n- Set `useUpdatedTableLayouts` to true to tell detail and form layouts apart in `layout`.\n\nAPI reference: [getTable](https://docs.superhuman.com/developers/apis/v1#operation/getTable)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				useUpdatedTableLayouts: {
					type: 'boolean',
					description:
						'If true, `layout` returns `detail` and `form` for detail and form layouts, instead of `masterDetail` for both.',
				},
			},
			required: ['docId', 'tableIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the table, for example `grid-pqRst-U`.' },
				type: { type: 'string', description: 'The type of this resource. Always `table`.' },
				tableType: {
					type: 'string',
					description: 'The kind of table: `table`, `view`, or `database`.',
				},
				href: { type: 'string', description: 'API link to the table.' },
				browserLink: { type: 'string', description: 'Browser-friendly link to the table.' },
				name: { type: 'string', description: 'Name of the table.' },
				parent: {
					type: 'object',
					description: 'Reference to the page containing the table.',
					properties: {
						id: { type: 'string', description: 'ID of the page.' },
						type: {
							type: 'string',
							description: 'The type of this resource. Always `page`.',
						},
						href: { type: 'string', description: 'API link to the page.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the page.',
						},
						name: { type: 'string', description: 'Name of the page.' },
					},
					required: [],
				},
				parentTable: {
					type: 'object',
					description: 'Reference to the base table, when this table is a view.',
					properties: {
						id: {
							type: 'string',
							description: 'ID of the table, for example `grid-pqRst-U`.',
						},
						type: {
							type: 'string',
							description: 'The type of this resource. Always `table`.',
						},
						tableType: {
							type: 'string',
							description: 'The kind of table: `table`, `view`, or `database`.',
						},
						href: { type: 'string', description: 'API link to the table.' },
						browserLink: {
							type: 'string',
							description: 'Browser-friendly link to the table.',
						},
						name: { type: 'string', description: 'Name of the table.' },
						parent: {
							type: 'object',
							description: 'Reference to the page containing the table.',
							properties: {
								id: { type: 'string', description: 'ID of the page.' },
								type: {
									type: 'string',
									description: 'The type of this resource. Always `page`.',
								},
								href: { type: 'string', description: 'API link to the page.' },
								browserLink: {
									type: 'string',
									description: 'Browser-friendly link to the page.',
								},
								name: { type: 'string', description: 'Name of the page.' },
							},
							required: [],
						},
					},
					required: [],
				},
				displayColumn: {
					type: 'object',
					description: 'Reference to the display column of the table.',
					properties: {
						id: {
							type: 'string',
							description: 'ID of the column, for example `c-tuVwxYz`.',
						},
						type: {
							type: 'string',
							description: 'The type of this resource. Always `column`.',
						},
						href: { type: 'string', description: 'API link to the column.' },
					},
					required: [],
				},
				rowCount: { type: 'number', description: 'Total number of rows in the table.' },
				sorts: {
					type: 'array',
					description: 'Sorts applied to the table.',
					items: {
						type: 'object',
						description: 'A sort applied to the table.',
						properties: {
							column: {
								type: 'object',
								description: 'Reference to the sorted column.',
								properties: {
									id: {
										type: 'string',
										description: 'ID of the column, for example `c-tuVwxYz`.',
									},
									type: {
										type: 'string',
										description: 'The type of this resource. Always `column`.',
									},
									href: {
										type: 'string',
										description: 'API link to the column.',
									},
								},
								required: [],
							},
							direction: {
								type: 'string',
								description: 'Direction of the sort: `ascending` or `descending`.',
							},
						},
						required: [],
					},
				},
				layout: {
					type: 'string',
					description:
						'Layout type of the table or view: `default`, `areaChart`, `barChart`, `bubbleChart`, `calendar`, `card`, `detail`, `form`, `ganttChart`, `lineChart`, `masterDetail`, `pieChart`, `scatterChart`, `slide`, or `wordCloud`.',
				},
				filter: {
					type: 'object',
					description: 'Details about the filter formula applied to the table, if any.',
					properties: {
						valid: { type: 'boolean', description: 'Whether the formula is valid.' },
						isVolatile: {
							type: 'boolean',
							description:
								'Whether the formula can return different results in different contexts, for example for different users.',
						},
						hasUserFormula: {
							type: 'boolean',
							description: 'Whether the formula contains a `User()` formula.',
						},
						hasTodayFormula: {
							type: 'boolean',
							description: 'Whether the formula contains a `Today()` formula.',
						},
						hasNowFormula: {
							type: 'boolean',
							description: 'Whether the formula contains a `Now()` formula.',
						},
					},
					required: [],
				},
				createdAt: {
					type: 'string',
					description: 'Timestamp for when the table was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Timestamp for when the table was last modified.',
				},
				viewId: {
					type: 'string',
					description:
						'ID of the view. `default` for a base table, otherwise the ID of the view, for example `table-pqRst-U`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listColumns',
		label: 'List columns',
		description: 'Returns a list of columns in a table.',
		context:
			'---\nname: listColumns\ndescription: Returns a list of columns in a table.\n---\n\n# List columns\n\nLists the columns of a table with their formulas and formats.\n\n## Usage\n\n- `docId` and `tableIdOrName` are required. Use the listTables endpoint to find table IDs. Pass table names as plain text; the endpoint URL-encodes them.\n- Column IDs from this call are the keys used in row `values` and in the `column` field of the createARow endpoint.\n\n## Pagination\n\nOne call returns one page. When the response contains `nextPageToken`, call again with the same inputs and `pageToken` set to that value. `limit` sets the page size (1-100, API default 25).\n\nAPI reference: [listColumns](https://docs.superhuman.com/developers/apis/v1#operation/listColumns)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				visibleOnly: {
					type: 'boolean',
					description:
						'If true, returns only visible columns. Applies to base tables only, not to views.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of columns to return in this call (1-100). The API defaults to 25.',
					minimum: 1,
					maximum: 100,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
			},
			required: ['docId', 'tableIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The columns on this page of results.',
					items: {
						type: 'object',
						description: 'Info about a column.',
						properties: {
							id: {
								type: 'string',
								description: 'ID of the column, for example `c-tuVwxYz`.',
							},
							type: {
								type: 'string',
								description: 'The type of this resource. Always `column`.',
							},
							href: { type: 'string', description: 'API link to the column.' },
							name: { type: 'string', description: 'Name of the column.' },
							display: {
								type: 'boolean',
								description:
									'Whether the column is the display column of the table.',
							},
							calculated: {
								type: 'boolean',
								description: 'Whether the column has a formula set on it.',
							},
							formula: {
								type: 'string',
								description:
									'Formula on the column, for example `thisRow.Created()`.',
							},
							defaultValue: {
								type: 'string',
								description: 'Default value formula for the column.',
							},
							format: {
								type: 'object',
								description:
									'Format of the column. `type` and `isArray` are always present; the other fields depend on the format type.',
								properties: {
									type: {
										type: 'string',
										description:
											'Format type of the column: `text`, `person`, `lookup`, `number`, `percent`, `currency`, `date`, `dateTime`, `time`, `duration`, `email`, `link`, `slider`, `scale`, `image`, `imageReference`, `attachments`, `button`, `checkbox`, `select`, `packObject`, `reaction`, `canvas`, or `other`.',
									},
									isArray: {
										type: 'boolean',
										description: 'Whether the column holds an array of values.',
									},
									label: {
										type: 'string',
										description:
											'Button columns: label formula for the button.',
									},
									disableIf: {
										type: 'string',
										description:
											'Button columns: formula that disables the button when true.',
									},
									action: {
										type: 'string',
										description:
											'Button columns: action formula for the button.',
									},
									displayType: {
										type: 'string',
										description:
											'Checkbox columns: `toggle` or `check`. Slider columns: `slider` or `progress`.',
									},
									format: {
										type: 'string',
										description:
											'Date and time columns: a format string in [Moment syntax](https://momentjs.com/docs/#/displaying/), for example `YYYY-MM-DD`. Currency columns: `currency`, `accounting`, or `financial`.',
									},
									dateFormat: {
										type: 'string',
										description:
											'Date and time columns: date format string in [Moment syntax](https://momentjs.com/docs/#/displaying/).',
									},
									timeFormat: {
										type: 'string',
										description:
											'Date and time columns: time format string in [Moment syntax](https://momentjs.com/docs/#/displaying/).',
									},
									precision: {
										type: 'number',
										description:
											'Numeric, currency, and duration columns: the decimal precision.',
									},
									maxUnit: {
										type: 'string',
										description:
											'Duration columns: the largest time unit shown: `days`, `hours`, `minutes`, or `seconds`.',
									},
									display: {
										type: 'string',
										description:
											'Email columns: `iconAndEmail`, `iconOnly`, or `emailOnly`. Link columns: `iconOnly`, `url`, `title`, `card`, or `embed`.',
									},
									autocomplete: {
										type: 'boolean',
										description:
											'Email columns: whether email autocomplete is enabled.',
									},
									force: {
										type: 'boolean',
										description:
											'Link columns: whether embeds render on the client instead of the server, for sites that require user login.',
									},
									currencyCode: {
										type: 'string',
										description:
											'Currency columns: the currency symbol, for example `$`.',
									},
									width: {
										description:
											'Image reference columns: the image width, as a number or a formula string that evaluates to a number.',
									},
									height: {
										description:
											'Image reference columns: the image height, as a number or a formula string that evaluates to a number.',
									},
									style: {
										type: 'string',
										description:
											'Image reference columns: how the image is shown: `auto` or `circle`.',
									},
									useThousandsSeparator: {
										type: 'boolean',
										description:
											'Numeric columns: whether a thousands separator is used.',
									},
									table: {
										type: 'object',
										description:
											'Lookup (reference) columns: the table the column refers to.',
										properties: {
											id: {
												type: 'string',
												description:
													'ID of the table, for example `grid-pqRst-U`.',
											},
											type: {
												type: 'string',
												description:
													'The type of this resource. Always `table`.',
											},
											tableType: {
												type: 'string',
												description:
													'The kind of table: `table`, `view`, or `database`.',
											},
											href: {
												type: 'string',
												description: 'API link to the table.',
											},
											browserLink: {
												type: 'string',
												description: 'Browser-friendly link to the table.',
											},
											name: {
												type: 'string',
												description: 'Name of the table.',
											},
											parent: {
												type: 'object',
												description:
													'Reference to the page containing the table.',
												properties: {
													id: {
														type: 'string',
														description: 'ID of the page.',
													},
													type: {
														type: 'string',
														description:
															'The type of this resource. Always `page`.',
													},
													href: {
														type: 'string',
														description: 'API link to the page.',
													},
													browserLink: {
														type: 'string',
														description:
															'Browser-friendly link to the page.',
													},
													name: {
														type: 'string',
														description: 'Name of the page.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									options: {
										type: 'array',
										description:
											'Select columns: the available options, when the select list uses a fixed set. Up to the first 5000 options.',
										items: {
											type: 'object',
											description: 'An option of the select column.',
											properties: {
												name: {
													type: 'string',
													description: 'The name of the option.',
												},
												backgroundColor: {
													type: 'string',
													description:
														'The background color of the option, for example `#ff0000`.',
												},
												foregroundColor: {
													type: 'string',
													description:
														'The foreground color of the option, for example `#ffffff`.',
												},
											},
											required: [],
										},
									},
									maximum: {
										description:
											'Scale columns: the maximum number allowed. Slider columns: the maximum, as a number or a formula string.',
									},
									icon: {
										type: 'string',
										description:
											'Scale columns: the icon set, for example `star`, `heart`, or `thumbsup`.',
									},
									minimum: {
										description:
											'Slider columns: the minimum, as a number or a formula string.',
									},
									step: {
										description:
											'Slider columns: the step, as a number or a formula string.',
									},
									showValue: {
										type: 'boolean',
										description:
											'Slider columns: whether the underlying numeric value is also shown.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listControls',
		label: 'List controls',
		description: 'Returns a list of controls in a doc.',
		context:
			"---\nname: listControls\ndescription: Returns a list of controls in a doc.\n---\n\n# List controls\n\nLists the controls (buttons, sliders, select lists, date pickers, and similar) in a doc.\n\n## Usage\n\n- `docId` is required.\n- Each item is a reference only (ID, name, parent page). Use the getControl endpoint to read a control's type and current value.\n\n## Pagination\n\nOne call returns one page. When the response contains `nextPageToken`, call again with `pageToken` set to that value. `limit` sets the page size (minimum 1, API default 25).\n\nAPI reference: [listControls](https://docs.superhuman.com/developers/apis/v1#operation/listControls)\n",
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				sortBy: {
					type: 'string',
					description: 'Determines how the controls are sorted.',
					default: '',
					enum: ['', 'name'],
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of controls to return in this call. The API defaults to 25.',
					minimum: 1,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
			},
			required: ['docId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The controls on this page of results.',
					items: {
						type: 'object',
						description: 'Reference to a control.',
						properties: {
							id: { type: 'string', description: 'ID of the control.' },
							type: {
								type: 'string',
								description: 'The type of this resource. Always `control`.',
							},
							href: { type: 'string', description: 'API link to the control.' },
							name: { type: 'string', description: 'Name of the control.' },
							parent: {
								type: 'object',
								description: 'Reference to the page containing the control.',
								properties: {
									id: { type: 'string', description: 'ID of the parent page.' },
									type: {
										type: 'string',
										description: 'The type of this resource. Always `page`.',
									},
									href: {
										type: 'string',
										description: 'API link to the parent page.',
									},
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the parent page.',
									},
									name: {
										type: 'string',
										description: 'Name of the parent page.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listDocs',
		label: 'List docs',
		description: 'Returns a list of docs accessible by the user.',
		context:
			'---\nname: listDocs\ndescription: Returns a list of docs accessible by the user.\n---\n\n# List docs\n\nLists docs that the user can access and has opened at least once. Results come in the same order as on the docs page: reverse chronological by the latest event relevant to the user (last viewed, edited, or shared).\n\n## Usage\n\n- All filters are optional and can be combined. `query` is a free-text search term.\n- `folderId` and `workspaceId` filter by container. Use the getFolder endpoint to read folder details.\n\n## Pagination\n\nOne call returns one page. When the response contains `nextPageToken`, call again with the same filters and `pageToken` set to that value. `limit` sets the page size (minimum 1, API default 25).\n\n## Notes\n\n- `workspaceId` and `folderId` in each returned doc are deprecated by the vendor. Use `workspace.id` and `folder.id` instead.\n\nAPI reference: [listDocs](https://docs.superhuman.com/developers/apis/v1#operation/listDocs)\n',
		accounts: { coda: { scope: [] } },
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
				query: { type: 'string', description: 'Search term used to filter down results.' },
				isOwner: {
					type: 'boolean',
					description: 'If true, returns only docs owned by the user.',
				},
				isPublished: {
					type: 'boolean',
					description: 'If true, returns only published docs.',
				},
				sourceDoc: {
					type: 'string',
					description: 'Returns only docs copied from the doc with this ID.',
				},
				isStarred: {
					type: 'boolean',
					description:
						'If true, returns only starred docs. If false, returns only docs that are not starred.',
				},
				inGallery: {
					type: 'boolean',
					description: 'If true, returns only docs visible within the gallery.',
				},
				workspaceId: {
					type: 'string',
					description:
						'Returns only docs belonging to the workspace with this ID, for example `ws-1Ab234`.',
				},
				folderId: {
					type: 'string',
					description:
						'Returns only docs belonging to the folder with this ID, for example `fl-1Ab234`.',
				},
				minimumAccess: {
					type: 'string',
					description:
						'Returns only docs where the user has at least this access level. `Write` includes both editors and managers.',
					default: '',
					enum: ['', 'readonly', 'comment', 'write'],
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of docs to return in this call. The API defaults to 25.',
					minimum: 1,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The docs on this page of results.',
					items: {
						type: 'object',
						description: 'Metadata about a doc.',
						properties: {
							id: { type: 'string', description: 'ID of the doc.' },
							type: {
								type: 'string',
								description: 'The type of this resource. Always `doc`.',
							},
							href: { type: 'string', description: 'API link to the doc.' },
							browserLink: {
								type: 'string',
								description: 'Browser-friendly link to the doc.',
							},
							icon: {
								type: 'object',
								description: 'Info about the doc icon.',
								properties: {
									name: { type: 'string', description: 'Name of the icon.' },
									type: { type: 'string', description: 'MIME type of the icon.' },
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the icon.',
									},
								},
								required: [],
							},
							name: { type: 'string', description: 'Name of the doc.' },
							owner: {
								type: 'string',
								description: 'Email address of the doc owner.',
							},
							ownerName: { type: 'string', description: 'Name of the doc owner.' },
							docSize: {
								type: 'object',
								description: 'The number of components within the doc.',
								properties: {
									totalRowCount: {
										type: 'number',
										description:
											'The number of rows contained within all tables of the doc.',
									},
									tableAndViewCount: {
										type: 'number',
										description:
											'The total number of tables and views contained within the doc.',
									},
									baseTableCount: {
										type: 'number',
										description:
											'The total number of base tables contained within the doc.',
									},
									pageCount: {
										type: 'number',
										description:
											'The total number of pages contained within the doc.',
									},
									overApiSizeLimit: {
										type: 'boolean',
										description: 'If true, the doc is over the API size limit.',
									},
								},
								required: [],
							},
							sourceDoc: {
								type: 'object',
								description:
									'Reference to the doc this doc was copied from, if any.',
								properties: {
									id: { type: 'string', description: 'ID of the source doc.' },
									type: {
										type: 'string',
										description: 'The type of this resource. Always `doc`.',
									},
									href: {
										type: 'string',
										description: 'API link to the source doc.',
									},
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the source doc.',
									},
								},
								required: [],
							},
							createdAt: {
								type: 'string',
								description: 'Timestamp for when the doc was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Timestamp for when the doc was last modified.',
							},
							published: {
								type: 'object',
								description:
									'Information about the publishing state of the doc. Present only for published docs.',
								properties: {
									description: {
										type: 'string',
										description: 'Description of the published doc.',
									},
									browserLink: {
										type: 'string',
										description: 'URL to the published doc.',
									},
									imageLink: {
										type: 'string',
										description:
											'URL to the cover image for the published doc.',
									},
									discoverable: {
										type: 'boolean',
										description: 'If true, the doc is discoverable.',
									},
									earnCredit: {
										type: 'boolean',
										description:
											'If true, new users may be required to sign in to view content within this doc, and the doc owner receives credit for each user who signs up via the doc.',
									},
									mode: {
										type: 'string',
										description:
											'Which interaction mode the published doc uses: `view`, `play`, or `edit`.',
									},
									categories: {
										type: 'array',
										description: 'Categories applied to the doc.',
										items: {
											type: 'object',
											description: 'A category applied to the doc.',
											properties: {
												name: {
													type: 'string',
													description: 'Name of the category.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							folder: {
								type: 'object',
								description: 'Reference to the folder containing the doc.',
								properties: {
									id: { type: 'string', description: 'ID of the folder.' },
									type: {
										type: 'string',
										description: 'The type of this resource. Always `folder`.',
									},
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the folder.',
									},
									name: {
										type: 'string',
										description:
											'Name of the folder. Included if the user has access to the folder.',
									},
								},
								required: [],
							},
							workspace: {
								type: 'object',
								description: 'Reference to the workspace.',
								properties: {
									id: { type: 'string', description: 'ID of the workspace.' },
									type: {
										type: 'string',
										description:
											'The type of this resource. Always `workspace`.',
									},
									organizationId: {
										type: 'string',
										description:
											'ID of the organization bound to this workspace, if any.',
									},
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the workspace.',
									},
									name: {
										type: 'string',
										description:
											'Name of the workspace. Included if the user has access to the workspace.',
									},
								},
								required: [],
							},
							workspaceId: {
								type: 'string',
								description:
									'ID of the workspace containing the doc. Deprecated by the vendor: use `workspace.id` instead.',
							},
							folderId: {
								type: 'string',
								description:
									'ID of the folder containing the doc. Deprecated by the vendor: use `folder.id` instead.',
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listFormulas',
		label: 'List formulas',
		description: 'Returns a list of named formulas in a doc.',
		context:
			"---\nname: listFormulas\ndescription: Returns a list of named formulas in a doc.\n---\n\n# List formulas\n\nLists the named formulas in a doc.\n\n## Usage\n\n- `docId` is required.\n- Each item is a reference only (ID, name, parent page). Use the getFormula endpoint to read a formula's current value.\n\n## Pagination\n\nOne call returns one page. When the response contains `nextPageToken`, call again with `pageToken` set to that value. `limit` sets the page size (minimum 1, API default 25).\n\nAPI reference: [listFormulas](https://docs.superhuman.com/developers/apis/v1#operation/listFormulas)\n",
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				sortBy: {
					type: 'string',
					description: 'Determines how the formulas are sorted.',
					default: '',
					enum: ['', 'name'],
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of formulas to return in this call. The API defaults to 25.',
					minimum: 1,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
			},
			required: ['docId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The formulas on this page of results.',
					items: {
						type: 'object',
						description: 'Reference to a named formula.',
						properties: {
							id: { type: 'string', description: 'ID of the formula.' },
							type: {
								type: 'string',
								description: 'The type of this resource. Always `formula`.',
							},
							href: { type: 'string', description: 'API link to the formula.' },
							name: { type: 'string', description: 'Name of the formula.' },
							parent: {
								type: 'object',
								description: 'Reference to the page containing the formula.',
								properties: {
									id: { type: 'string', description: 'ID of the parent page.' },
									type: {
										type: 'string',
										description: 'The type of this resource. Always `page`.',
									},
									href: {
										type: 'string',
										description: 'API link to the parent page.',
									},
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the parent page.',
									},
									name: {
										type: 'string',
										description: 'Name of the parent page.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listRows',
		label: 'List rows',
		description: 'Returns a list of rows in a table.',
		context:
			'---\nname: listRows\ndescription: Returns a list of rows in a table.\n---\n\n# List rows\n\nLists rows of a table with their cell values.\n\n## Usage\n\n- `docId` and `tableIdOrName` are required. Use the listTables endpoint to find table IDs. Pass table names as plain text; the endpoint URL-encodes them.\n- `query` filters by one column: `<column_id_or_name>:<value>`, where `value` is JSON (quote strings, for example `c-tuVwxYz:"groceries"`). Quote column names: `"Status":"Done"`.\n- `values` is keyed by column ID by default. Use the listColumns endpoint to map IDs to names, or set `useColumnNames` to true.\n- `valueFormat` controls the cell value shape: `simple`, `simpleWithArrays`, or `rich`.\n\n## Pagination\n\nOne call returns one page. When the response contains `nextPageToken`, call again with the same inputs and `pageToken` set to that value. `limit` sets the page size (minimum 1, API default 25).\n\n## Incremental sync\n\nThe last page returns `nextSyncToken`. Pass it later as `syncToken` to get only the rows relevant to the query since that call.\n\nAPI reference: [listRows](https://docs.superhuman.com/developers/apis/v1#operation/listRows)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				query: {
					type: 'string',
					description:
						'Filter for the returned rows, as `<column_id_or_name>:<value>`. Quote a column name (`"My Column":123`). `value` is a JSON value, so quote strings (`c-tuVwxYz:"groceries"`). Pass it as plain text; it is URL-encoded automatically.',
				},
				useColumnNames: {
					type: 'boolean',
					description:
						'If true, row `values` are keyed by column name instead of column ID. Discouraged: renamed columns break callers that rely on names.',
				},
				valueFormat: {
					type: 'string',
					description:
						'The format of cell values. `simple` (default) returns strings, numbers, or booleans, with arrays as comma-delimited strings. `simpleWithArrays` returns arrays as JSON arrays. `rich` returns Markdown text and JSON-LD objects for currency, lookup, image, person, and hyperlink values.',
					default: '',
					enum: ['', 'simple', 'simpleWithArrays', 'rich'],
				},
				visibleOnly: {
					type: 'boolean',
					description: 'If true, returns only visible rows and columns.',
				},
				sortBy: {
					type: 'string',
					description:
						'Sort order of the rows. If omitted, rows are sorted by creation time, newest first; `createdAt` returns the same order. `updatedAt` ignores updates to calculated values. `natural` is the order in the table view and implies `visibleOnly` = true.',
					default: '',
					enum: ['', 'createdAt', 'natural', 'updatedAt'],
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of rows to return in this call. The API defaults to 25.',
					minimum: 1,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
				syncToken: {
					type: 'string',
					description:
						'Token from `nextSyncToken` of a previous call. Returns only the rows relevant to the query since that call.',
				},
			},
			required: ['docId', 'tableIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The rows on this page of results.',
					items: {
						type: 'object',
						description: 'Info about a row.',
						properties: {
							id: {
								type: 'string',
								description: 'ID of the row, for example `i-tuVwxYz`.',
							},
							type: {
								type: 'string',
								description: 'The type of this resource. Always `row`.',
							},
							href: { type: 'string', description: 'API link to the row.' },
							name: {
								type: 'string',
								description:
									'The display name of the row, based on its identifying column.',
							},
							index: {
								type: 'number',
								description: 'Index of the row within the table.',
							},
							browserLink: {
								type: 'string',
								description: 'Browser-friendly link to the row.',
							},
							createdAt: {
								type: 'string',
								description: 'Timestamp for when the row was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Timestamp for when the row was last modified.',
							},
							values: {
								type: 'object',
								description:
									'Cell values of the row, keyed by column ID (or by column name when `useColumnNames` is true). The value shape depends on `valueFormat`.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
				nextSyncToken: {
					type: 'string',
					description:
						'Token to pass as `syncToken` in a later call to get only the rows changed since this call. Returned on the last page of results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listSections',
		label: 'List pages',
		description: 'Returns a list of pages in a doc.',
		context:
			'---\nname: listSections\ndescription: Returns a list of pages in a doc.\n---\n\n# List pages\n\nLists the pages of a doc, including subpages, with their full metadata.\n\n## Usage\n\n- `docId` is required.\n- Each item has `parent` (for subpages) and `children`, so the page tree can be rebuilt from the list.\n\n## Pagination\n\nOne call returns one page of results. When the response contains `nextPageToken`, call again with `pageToken` set to that value. `limit` sets the page size (minimum 1, API default 25).\n\nAPI reference: [listPages](https://docs.superhuman.com/developers/apis/v1#operation/listPages)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of pages to return in this call. The API defaults to 25.',
					minimum: 1,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
			},
			required: ['docId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The pages on this page of results.',
					items: {
						type: 'object',
						description: 'Metadata about a page.',
						properties: {
							id: { type: 'string', description: 'ID of the page.' },
							type: {
								type: 'string',
								description: 'The type of this resource. Always `page`.',
							},
							href: { type: 'string', description: 'API link to the page.' },
							browserLink: {
								type: 'string',
								description: 'Browser-friendly link to the page.',
							},
							name: { type: 'string', description: 'Name of the page.' },
							subtitle: { type: 'string', description: 'Subtitle of the page.' },
							icon: {
								type: 'object',
								description: 'Info about the page icon.',
								properties: {
									name: { type: 'string', description: 'Name of the icon.' },
									type: { type: 'string', description: 'MIME type of the icon.' },
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the icon.',
									},
								},
								required: [],
							},
							image: {
								type: 'object',
								description: 'Info about the page cover image.',
								properties: {
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the image.',
									},
									type: {
										type: 'string',
										description: 'MIME type of the image.',
									},
									width: {
										type: 'number',
										description: 'The width of the image in pixels.',
									},
									height: {
										type: 'number',
										description: 'The height of the image in pixels.',
									},
								},
								required: [],
							},
							contentType: {
								type: 'string',
								description:
									'The type of the page: `canvas`, `embed`, or `syncPage`.',
							},
							isHidden: {
								type: 'boolean',
								description: 'Whether the page is hidden in the UI.',
							},
							isEffectivelyHidden: {
								type: 'boolean',
								description:
									'Whether the page or any of its parents is hidden in the UI.',
							},
							parent: {
								type: 'object',
								description: 'Reference to the parent page, if this is a subpage.',
								properties: {
									id: { type: 'string', description: 'ID of the parent page.' },
									type: {
										type: 'string',
										description: 'The type of this resource. Always `page`.',
									},
									href: {
										type: 'string',
										description: 'API link to the parent page.',
									},
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the parent page.',
									},
									name: {
										type: 'string',
										description: 'Name of the parent page.',
									},
								},
								required: [],
							},
							children: {
								type: 'array',
								description: 'References to the subpages of this page.',
								items: {
									type: 'object',
									description: 'Reference to a subpage.',
									properties: {
										id: { type: 'string', description: 'ID of the subpage.' },
										type: {
											type: 'string',
											description:
												'The type of this resource. Always `page`.',
										},
										href: {
											type: 'string',
											description: 'API link to the subpage.',
										},
										browserLink: {
											type: 'string',
											description: 'Browser-friendly link to the subpage.',
										},
										name: {
											type: 'string',
											description: 'Name of the subpage.',
										},
									},
									required: [],
								},
							},
							authors: {
								type: 'array',
								description: 'Authors of the page.',
								items: {
									type: 'object',
									description: 'A person who authored the page.',
									properties: {
										'@context': {
											type: 'string',
											description:
												'A URL describing the schema context for this object, typically `http://schema.org/`.',
										},
										'@type': {
											type: 'string',
											description:
												'The schema.org type of this object. Always `Person`.',
										},
										additionalType: {
											type: 'string',
											description:
												'An identifier of additional type info that may not be present in a schema.org taxonomy.',
										},
										name: {
											type: 'string',
											description: 'The full name of the person.',
										},
										email: {
											type: 'string',
											description: 'The email address of the person.',
										},
									},
									required: [],
								},
							},
							createdAt: {
								type: 'string',
								description: 'Timestamp for when the page was created.',
							},
							createdBy: {
								type: 'object',
								description: 'The person who created the page.',
								properties: {
									'@context': {
										type: 'string',
										description:
											'A URL describing the schema context for this object, typically `http://schema.org/`.',
									},
									'@type': {
										type: 'string',
										description:
											'The schema.org type of this object. Always `Person`.',
									},
									additionalType: {
										type: 'string',
										description:
											'An identifier of additional type info that may not be present in a schema.org taxonomy.',
									},
									name: {
										type: 'string',
										description: 'The full name of the person.',
									},
									email: {
										type: 'string',
										description: 'The email address of the person.',
									},
								},
								required: [],
							},
							updatedAt: {
								type: 'string',
								description:
									'Timestamp for when the page content was last modified.',
							},
							updatedBy: {
								type: 'object',
								description: 'The person who last modified the page content.',
								properties: {
									'@context': {
										type: 'string',
										description:
											'A URL describing the schema context for this object, typically `http://schema.org/`.',
									},
									'@type': {
										type: 'string',
										description:
											'The schema.org type of this object. Always `Person`.',
									},
									additionalType: {
										type: 'string',
										description:
											'An identifier of additional type info that may not be present in a schema.org taxonomy.',
									},
									name: {
										type: 'string',
										description: 'The full name of the person.',
									},
									email: {
										type: 'string',
										description: 'The email address of the person.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'listTables',
		label: 'List tables',
		description: 'Returns a list of tables and views in a doc.',
		context:
			'---\nname: listTables\ndescription: Returns a list of tables and views in a doc.\n---\n\n# List tables\n\nLists the tables, views, and databases in a doc.\n\n## Usage\n\n- `docId` is required.\n- `tableTypes` limits the results to some kinds of tables. Each item is a reference only; use the getTable endpoint for row count, sorts, layout, and filter.\n\n## Pagination\n\nOne call returns one page. When the response contains `nextPageToken`, call again with the same inputs and `pageToken` set to that value. `limit` sets the page size (minimum 1, API default 25).\n\nAPI reference: [listTables](https://docs.superhuman.com/developers/apis/v1#operation/listTables)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableTypes: {
					type: 'string',
					description:
						'Types of tables to include. If omitted, tables, views, and databases are all included.',
					default: '',
					enum: ['', 'table', 'view', 'database'],
				},
				sortBy: {
					type: 'string',
					description: 'Determines how the tables are sorted.',
					default: '',
					enum: ['', 'name'],
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of tables to return in this call. The API defaults to 25.',
					minimum: 1,
				},
				pageToken: {
					type: 'string',
					description:
						'Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.',
				},
			},
			required: ['docId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'The tables on this page of results.',
					items: {
						type: 'object',
						description: 'Reference to a table or view.',
						properties: {
							id: {
								type: 'string',
								description: 'ID of the table, for example `grid-pqRst-U`.',
							},
							type: {
								type: 'string',
								description: 'The type of this resource. Always `table`.',
							},
							tableType: {
								type: 'string',
								description: 'The kind of table: `table`, `view`, or `database`.',
							},
							href: { type: 'string', description: 'API link to the table.' },
							browserLink: {
								type: 'string',
								description: 'Browser-friendly link to the table.',
							},
							name: { type: 'string', description: 'Name of the table.' },
							parent: {
								type: 'object',
								description: 'Reference to the page containing the table.',
								properties: {
									id: { type: 'string', description: 'ID of the page.' },
									type: {
										type: 'string',
										description: 'The type of this resource. Always `page`.',
									},
									href: { type: 'string', description: 'API link to the page.' },
									browserLink: {
										type: 'string',
										description: 'Browser-friendly link to the page.',
									},
									name: { type: 'string', description: 'Name of the page.' },
								},
								required: [],
							},
						},
						required: [],
					},
				},
				href: { type: 'string', description: 'API link to these results.' },
				nextPageToken: {
					type: 'string',
					description:
						'Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.',
				},
				nextPageLink: {
					type: 'string',
					description:
						'API link to the next page of results. Absent when there are no more results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'pushButton',
		label: 'Push a button',
		description: 'Pushes a button in a row of a table.',
		context:
			'---\nname: pushButton\ndescription: Pushes a button in a row of a table.\n---\n\n# Push a button\n\nPushes the button in one cell of a table, that is, runs the action formula of a button column for one row.\n\n## Usage\n\n- `docId`, `tableIdOrName`, `rowIdOrName`, and `columnIdOrName` are required. Use the listRows endpoint to find row IDs and the listColumns endpoint to find button columns (`format.type` is `button`; `format.action` shows the action formula). Pass names as plain text; the endpoint URL-encodes them.\n\n## Notes\n\n- The button can do anything its action formula defines: change or delete rows in any table of the doc, or run Pack actions that call external services. Check the action with the getColumn endpoint before pushing. Every push runs the action again.\n- Requires write access to the table.\n- The push is processed asynchronously. The API returns HTTP 202 with `requestId`, `rowId`, and `columnId`. The effects usually appear within 5 to 20 seconds and can take up to a minute.\n\nAPI reference: [pushButton](https://docs.superhuman.com/developers/apis/v1#operation/pushButton)\n',
		accounts: { coda: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				rowIdOrName: {
					type: 'string',
					description:
						'ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is used. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.',
				},
				columnIdOrName: {
					type: 'string',
					description:
						'ID or name of the button column. Names are discouraged because users can easily change them. Example ID: `c-tuVwxYz`. Use the listColumns endpoint to find button columns (`format.type` is `button`).',
				},
			},
			required: ['docId', 'tableIdOrName', 'rowIdOrName', 'columnIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				requestId: {
					type: 'string',
					description: 'An arbitrary unique identifier for this request.',
				},
				rowId: { type: 'string', description: 'ID of the row where the button exists.' },
				columnId: {
					type: 'string',
					description: 'ID of the column where the button exists.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'updatePage',
		label: 'Update a page',
		description: 'Updates the properties or the content of a page in a doc.',
		context:
			"---\nname: updatePage\ndescription: Updates the properties or the content of a page in a doc.\n---\n\n# Update a page\n\nUpdates a page's name, subtitle, icon, cover image, or visibility, and can append, prepend, or replace its canvas content. Changing the page name or icon requires the user to be a Doc Maker in the workspace.\n\n## Usage\n\n- `docId` and `pageIdOrName` are required. Use the listSections endpoint to find page IDs. Pass page names as plain text; the endpoint URL-encodes them.\n- Only the fields you send are changed. Call the getSection endpoint first to read the current values.\n- `contentUpdate` needs `insertionMode` and `canvasContent` (`format` + `content`). With `elementId`, the operation is relative to that element. Without it, `append`/`prepend` work on the whole page, and `replace` replaces all page content.\n\n## Notes\n\n- `append` and `prepend` add the content again on every call. `replace` removes existing content.\n- The update is processed asynchronously. The API returns HTTP 202 with `requestId` and the page `id`. Changes usually appear within 5 to 20 seconds and can take up to a minute; a getSection call made right after this one can still return the old values.\n\nAPI reference: [updatePage](https://docs.superhuman.com/developers/apis/v1#operation/updatePage)\n",
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				pageIdOrName: {
					type: 'string',
					description:
						'ID or name of the page. Names are discouraged because users can easily change them. If several pages share the name, an arbitrary one is used. Example ID: `canvas-IjkLmnO`. Use the listSections endpoint to find page IDs.',
				},
				name: { type: 'string', description: 'New name of the page.' },
				subtitle: { type: 'string', description: 'New subtitle of the page.' },
				iconName: {
					type: 'string',
					description: 'Name of the new page icon, for example `rocket`.',
				},
				imageUrl: { type: 'string', description: 'URL of the new cover image.' },
				isHidden: {
					type: 'boolean',
					description:
						'Whether the page is hidden. Ignored for pages that cannot be hidden, such as the only top-level page in a doc.',
				},
				contentUpdate: {
					type: 'object',
					description:
						'Changes the canvas content of the page. When provided, `insertionMode` and `canvasContent` are required.',
					properties: {
						insertionMode: {
							type: 'string',
							description:
								'How the content is applied: appended, prepended, or replacing existing content. Required when content update is provided.',
							default: '',
							enum: ['', 'append', 'prepend', 'replace'],
						},
						elementId: {
							type: 'string',
							description:
								'ID of the page element to use as the reference point, for example `cl-lzqh0Q0poT`. The content is appended after, prepended before, or replaces that element. If omitted, the operation applies to the whole page.',
						},
						canvasContent: {
							type: 'object',
							description:
								'The content to insert. Required when content update is provided.',
							properties: {
								format: {
									type: 'string',
									description:
										'Format of the content. Required for canvas content.',
									default: '',
									enum: ['', 'html', 'markdown'],
								},
								content: {
									type: 'string',
									description:
										'The content in the chosen format, for example `<p><b>This</b> is rich text</p>`. Required for canvas content.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
			},
			required: ['docId', 'pageIdOrName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				requestId: {
					type: 'string',
					description: 'An arbitrary unique identifier for this request.',
				},
				id: { type: 'string', description: 'ID of the updated page.' },
			},
			required: [],
		},
	},
	{
		appName: 'coda',
		appVersion: 1,
		endpointName: 'updateRow',
		label: 'Update a row',
		description: 'Updates cell values of a row in a table.',
		context:
			'---\nname: updateRow\ndescription: Updates cell values of a row in a table.\n---\n\n# Update a row\n\nSets cell values of one row in a table. Cells of columns that are not listed keep their values.\n\n## Usage\n\n- `docId`, `tableIdOrName`, `rowIdOrName`, and `row` are required. Use the listRows endpoint to find row IDs and the listColumns endpoint to find column IDs. Pass names as plain text; the endpoint URL-encodes them.\n- `row` is `{ "cells": [ { "column": "c-tuVwxYz", "value": "Apple" } ] }`. Prefer column and row IDs over names: when a row name matches several rows, an arbitrary one is updated.\n- Call the getRow endpoint first to read the current values.\n- `row.cells[].value` is optional to allow clearing an existing cell by sending an empty string ("").\n\n## Notes\n\n- The update overwrites the listed cells; an empty string clears a cell.\n- The update is processed asynchronously. The API returns HTTP 202 with `requestId` and the row `id` as long as the row exists and the edit is structurally valid. Changes usually appear within 5 to 20 seconds and can take up to a minute; a getRow call made right after this one can still return the old values.\n\nAPI reference: [updateRow](https://docs.superhuman.com/developers/apis/v1#operation/updateRow)\n',
		accounts: { coda: { scope: [] } },
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
				docId: {
					type: 'string',
					description:
						'ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.',
				},
				tableIdOrName: {
					type: 'string',
					description:
						'ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.',
				},
				rowIdOrName: {
					type: 'string',
					description:
						'ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is updated. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.',
				},
				row: {
					type: 'object',
					description: 'The edit to apply to the row.',
					properties: {
						cells: {
							type: 'array',
							description:
								'Cell values to set. Cells of columns not listed here are not changed.',
							items: {
								type: 'object',
								description: 'A cell value to set.',
								properties: {
									column: {
										type: 'string',
										description:
											'Column ID (for example `c-tuVwxYz`), column URL, or column name (fragile, discouraged). Use the listColumns endpoint to find column IDs.',
									},
									value: {
										description:
											'The cell value: a string, number, or boolean, or an array of these for multi-value columns. Leave empty to clear the existing cell value.',
									},
								},
								required: ['column'],
							},
						},
					},
					required: ['cells'],
				},
				disableParsing: {
					type: 'boolean',
					description:
						'If true, the API stores the values as sent and does not try to parse them.',
				},
			},
			required: ['docId', 'tableIdOrName', 'rowIdOrName', 'row'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				requestId: {
					type: 'string',
					description: 'An arbitrary unique identifier for this request.',
				},
				id: { type: 'string', description: 'ID of the updated row.' },
			},
			required: [],
		},
	},
];
