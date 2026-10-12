// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'# Context for the Universal Endpoint\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Airtable API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.airtable.com/`. Provide the remaining path in the URL parameter\n(e.g. `v0/meta/whoami` — a cheap GET that returns the connected account\'s user ID).\n\nRefer to the [Airtable Web API reference](https://airtable.com/developers/web/api/introduction) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { airtable2: { scope: [] }, airtable3: { scope: [] } },
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
						'Enter a path relative to `https://api.airtable.com/`\nFor example: `v0/{base}/{table}`',
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
						'The HTTP request query body. This input will be ignored if the HTTP request method is `GET`.',
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
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'createRecord',
		label: 'Create record',
		description: 'Creates a new record in a table with the given field values.',
		context:
			'---\nname: createRecord\ndescription: This endpoint can be used to create a new record in an Airtable table\n---\n\nCreates a new record in a table with the given field values (POST `/v0/{base}/{table}`). Returns the created record (`id`, `createdTime`, `fields`).\n\n## Required inputs\n\n- `base` — base ID (`app…`). Use List bases.\n- `table` — table name or ID (`tbl…`). Use Get base schema.\n- `fields` — object of cell values keyed by field name or field ID, for example `{ "Name": "Union Square", "Visited": true }`. Use Get base schema to find field names, IDs, and types.\n\n## Typecast\n\n`typecast` is off by default to protect data integrity. If enabled, Airtable performs best-effort conversion from strings (matching linked records or select options, and creating new select options if needed).\n\n## Partial success\n\nIf the record is created but part of the request fails (for example an attachment upload), `details.message` is `partialSuccess` and `details.reasons` lists codes such as `attachmentsFailedUploading`.\n\nSet `returnFieldsByFieldId` to key the response `fields` by field ID instead of name.\n',
		accounts: {
			airtable2: { scope: ['data.records:write'] },
			airtable3: { scope: ['data.records:write'] },
		},
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
				base: {
					type: 'string',
					description:
						'ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.',
				},
				table: {
					type: 'string',
					description:
						'Name or ID of the table to create the record in, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.',
				},
				fields: {
					description:
						'Cell values for the new record, as an object keyed by field name or field ID, for example `{"Name": "Union Square", "Visited": true}`. Use the Get base schema endpoint to find the table\'s field names, IDs, and types.',
				},
				typecast: {
					type: 'boolean',
					description:
						'If enabled, the Airtable API performs best-effort automatic data conversion from string values (for example turning a plain string into a matching linked record or select option, creating new select options if needed). Disabled by default to protect data integrity.',
					default: false,
				},
				returnFieldsByFieldId: {
					type: 'boolean',
					description:
						"If enabled, the created record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.",
					default: false,
				},
			},
			required: ['base', 'table', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"Unique identifier of the newly created record (starts with 'rec').",
				},
				createdTime: {
					type: 'string',
					description: 'Date and time the record was created, in ISO 8601 format.',
				},
				fields: {
					description:
						"Cell values of the created record, keyed by field name (or by field ID if 'Return fields by field ID' was enabled). Shape varies depending on the table's schema; use the Get base schema endpoint to inspect field names, types, and options for a given table.",
				},
				details: {
					type: 'object',
					description:
						'Present only when the record was created but part of the request partially failed (for example, an attachment could not be uploaded).',
					properties: {
						message: {
							type: 'string',
							description:
								"Always 'partialSuccess' when the 'Details' object is present.",
						},
						reasons: {
							type: 'array',
							description: 'List of reasons explaining the partial failure.',
							items: {
								type: 'string',
								description:
									"Reason code for the partial failure, for example 'attachmentsFailedUploading' or 'attachmentUploadRateIsTooHigh'.",
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
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'getBaseSchema',
		label: 'Get base schema',
		description: 'Returns the base schema.',
		context:
			"---\nname: getBaseSchema\ndescription: This endpoint can be used to fetch the tables, fields, and views of an Airtable base\n---\n\nRetrieves the schema of a single Airtable base by ID: tables, their fields (columns), and views.\n\nCall this before Create record, Update record, List records, or Get record so you know table names/IDs, field names/IDs/types, and view names/IDs.\n\n## Required inputs\n\n- `base` — base ID (`app…`). Use List bases to find it.\n\n## Field options\n\nField `options` is untyped (`any`) because the shape varies by Airtable field type (select choices, linked table IDs, number precision, currency symbol, formula, rollup, lookup, and so on). See Airtable's Field model: https://airtable.com/developers/web/api/field-model\n\nThe table's primary field (first column, used to identify records) is `primaryFieldId`.\n",
		accounts: {
			airtable2: { scope: ['schema.bases:read'] },
			airtable3: { scope: ['schema.bases:read'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				base: {
					type: 'string',
					description:
						'ID of the base to retrieve the schema for, for example `appX1Y2Z3`. Use the List bases endpoint to find it.',
				},
			},
			required: ['base'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				tables: {
					type: 'array',
					description:
						'List of tables that belong to the base, each including its fields and views.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: "Unique identifier of the table (starts with 'tbl').",
							},
							name: {
								type: 'string',
								description: 'Name of the table as shown in the Airtable UI.',
							},
							primaryFieldId: {
								type: 'string',
								description:
									"ID of the field that acts as the table's primary field (the first column, used to identify records).",
							},
							fields: {
								type: 'array',
								description: 'List of fields (columns) defined on the table.',
								items: {
									type: 'object',
									properties: {
										type: {
											type: 'string',
											description:
												"Airtable field type, for example 'singleLineText', 'multipleSelects', or 'number'.",
										},
										options: {
											description:
												"Type-specific configuration for the field, shaped differently depending on 'Type' (for example 'choices' for select fields, 'linkedTableId' for linked record fields, 'precision' for number fields, 'symbol' for currency fields, etc.). Only present for field types that support extra options. See Airtable's Field model reference for the exact shape per type: https://airtable.com/developers/web/api/field-model",
										},
										id: {
											type: 'string',
											description:
												"Unique identifier of the field (starts with 'fld').",
										},
										name: {
											type: 'string',
											description:
												'Name of the field (column) as shown in the Airtable UI.',
										},
									},
									required: [],
								},
							},
							views: {
								type: 'array',
								description: 'List of views defined on the table.',
								items: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description:
												"Unique identifier of the view (starts with 'viw').",
										},
										name: {
											type: 'string',
											description:
												'Name of the view as shown in the Airtable UI.',
										},
										type: {
											type: 'string',
											description:
												"Type of the view, for example 'grid', 'form', 'calendar', or 'kanban'.",
										},
									},
									required: [],
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
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'getRecord',
		label: 'Get record',
		description: 'Retrieves a single record from a table by its record ID.',
		context:
			'---\nname: getRecord\ndescription: This endpoint can be used to fetch a single Airtable record by ID\n---\n\nRetrieves one record from a table by record ID. Returns `id` (starts with `rec`), `createdTime`, and `fields`.\n\n## Required inputs\n\n- `base` — base ID (`app…`). Use List bases.\n- `table` — table name or ID (`tbl…`). Use Get base schema.\n- `recordId` — record ID (`rec…`). Use List records if you do not already have it.\n\n## Cell format and field keys\n\nDefault `cellFormat` is `json` (type-specific values). If `cellFormat` is `string`, you must also set `timeZone` and `userLocale`. Empty cell values (empty string, empty array, or false) are omitted from `fields`. Set `returnFieldsByFieldId` to key `fields` by field ID instead of name.\n\nThe shape of `fields` depends on the table schema — use Get base schema to inspect field names, types, and options.\n',
		accounts: {
			airtable2: { scope: ['data.records:read'] },
			airtable3: { scope: ['data.records:read'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				base: {
					type: 'string',
					description:
						'ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.',
				},
				table: {
					type: 'string',
					description:
						'Name or ID of the table that contains the record, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.',
				},
				recordId: {
					type: 'string',
					description: 'ID of the record to retrieve, for example `rec560UJdUtocSouk`.',
				},
				cellFormat: {
					type: 'string',
					description:
						"Format used for cell values in the response. 'JSON' returns type-specific JSON values (default); 'String' returns user-facing display strings and requires 'Time zone' and 'User locale' to be set.",
					default: '',
					enum: ['', 'json', 'string'],
				},
				timeZone: {
					type: 'string',
					description:
						"Time zone used to format dates when 'Cell format' is 'String', for example `Europe/Prague`. Required only when 'Cell format' is 'String'.",
				},
				userLocale: {
					type: 'string',
					description:
						"User locale used to format dates when 'Cell format' is 'String', for example `en-US`. Required only when 'Cell format' is 'String'.",
				},
				returnFieldsByFieldId: {
					type: 'boolean',
					description:
						"If enabled, the record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.",
					default: false,
				},
				includeDateDependencyMetadata: {
					type: 'boolean',
					description:
						"If enabled, linked record fields are returned as objects with an 'id' property (and, where configured, date-dependency details) instead of plain record ID strings.",
					default: false,
				},
			},
			required: ['base', 'table', 'recordId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: "Unique identifier of the record (starts with 'rec').",
				},
				createdTime: {
					type: 'string',
					description: 'Date and time the record was created, in ISO 8601 format.',
				},
				fields: {
					description:
						"Cell values keyed by field name (or by field ID if 'Return fields by field ID' was enabled). Shape varies depending on the table's schema; use the Get base schema endpoint to inspect field names, types, and options for a given table. Fields with empty values (empty string, empty array, or false) are omitted.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'listBases',
		label: 'List bases',
		description: 'Returns detailed list of all bases.',
		context:
			'---\nname: listBases\ndescription: This endpoint can be used to list all Airtable bases the connected account can access\n---\n\nReturns a page of bases for the connected Airtable account. Each base includes `id` (starts with `app`), `name`, and `permissionLevel` (`none`, `read`, `comment`, `edit`, `create`, or `interfaceOnly`).\n\n## Pagination\n\nThis endpoint returns one page at a time (up to 1000 bases).\n\n1. Call without `offset` to get the first page.\n2. If `offset` is present in the response, pass it back as `offset` on the next call.\n3. Repeat until `offset` is omitted.\n\nUse a returned base `id` as the `base` input of Get base schema, List records, Get record, Create record, and Update record.\n',
		accounts: {
			airtable2: { scope: ['schema.bases:read'] },
			airtable3: { scope: ['schema.bases:read'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				offset: {
					type: 'string',
					description:
						"Pagination cursor returned by a previous call to this endpoint (as 'Offset' in the response). Pass it here to fetch the next page of bases.",
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				bases: {
					type: 'array',
					description: 'The page of bases returned by this call (up to 1000).',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description:
									'Unique identifier of the base, for example `appLkNDICXNqxSDhG`.',
							},
							name: {
								type: 'string',
								description: 'Name of the base as shown in the Airtable UI.',
							},
							permissionLevel: {
								type: 'string',
								description:
									'Access level the connected account holds on the base. One of: `none`, `read`, `comment`, `edit`, `create`, or `interfaceOnly`.',
							},
						},
						required: [],
					},
				},
				offset: {
					type: 'string',
					description:
						"Pagination cursor. Present only when more bases remain; pass it back as the 'Offset' input parameter to fetch the next page.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'listRecords',
		label: 'List records',
		description:
			'Lists records from a table, with optional filtering, sorting, view selection, and field selection. Supports pagination via offset.',
		context:
			"---\nname: listRecords\ndescription: This endpoint can be used to list records from an Airtable table with optional filter, sort, view, and field selection\n---\n\nLists records from a table (POST `/v0/{base}/{table}/listRecords`). Each record includes `id` (starts with `rec`), `createdTime`, and `fields`.\n\n## Required inputs\n\n- `base` — base ID (`app…`). Use List bases.\n- `table` — table name or ID (`tbl…`). Use Get base schema.\n\n## Filtering, sorting, and views\n\n- `view` — restrict results to records visible in that view; the view's sort applies unless `sort` is set.\n- `sort` — array of `{ field, direction }` (`asc` / `desc`); overrides the view sort.\n- `filterByFormula` — Airtable formula evaluated per record; the record is included unless the result is `0`, `false`, an empty string, `NaN`, an empty array, or `#Error!`. Formula reference: https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference\n- `fields` — names or IDs of fields to include; omit to return all fields.\n\n## Pagination\n\nManual only — this call returns one page:\n\n1. Call without `offset` (`pageSize` max 100, default 100).\n2. If `offset` is present in the response, pass it as `offset` on the next call.\n3. Repeat until `offset` is omitted.\n\n`maxRecords` is the intended total across pages; a single call still returns at most `pageSize` records.\n\n## Cell format and field keys\n\nDefault `cellFormat` is `json` (type-specific values). If `cellFormat` is `string`, you must also set `timeZone` and `userLocale`. Empty cell values (empty string, empty array, or false) are omitted from `fields`. Set `returnFieldsByFieldId` to key `fields` by field ID instead of name.\n",
		accounts: {
			airtable2: { scope: ['data.records:read'] },
			airtable3: { scope: ['data.records:read'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				base: {
					type: 'string',
					description:
						'ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.',
				},
				table: {
					type: 'string',
					description:
						'Name or ID of the table to list records from, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.',
				},
				view: {
					type: 'string',
					description:
						"Name or ID of a view in the table. If set, only records visible in that view are returned, sorted according to the view's order unless 'Sort' is provided.",
				},
				sort: {
					type: 'array',
					description:
						"List of sort instructions applied to the returned records, in order of priority. Overrides the sorting of the view set in 'View'.",
					items: {
						type: 'object',
						description: 'A single sort instruction.',
						properties: {
							field: {
								type: 'string',
								description: 'Name or ID of the field to sort by.',
							},
							direction: {
								type: 'string',
								description:
									'Sort direction for the field. Defaults to ascending if not set.',
								default: '',
								enum: ['', 'asc', 'desc'],
							},
						},
						required: ['field'],
					},
				},
				filterByFormula: {
					type: 'string',
					description:
						"An Airtable formula used to filter records. Evaluated for each record; the record is included only if the result is not '0', 'false', an empty string, 'NaN', an empty array, or '#Error!'. See Airtable's Formula Field Reference: https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference",
				},
				fields: {
					type: 'array',
					description:
						'Names or IDs of the fields to include in each returned record. If left empty, all fields are returned.',
					items: { type: 'string', description: 'Name or ID of a field to include.' },
				},
				pageSize: {
					type: 'number',
					description:
						'Number of records returned by this single call. Must be 100 or less. Defaults to 100.',
					default: 100,
				},
				maxRecords: {
					type: 'number',
					description:
						"Maximum total number of records intended to be collected across multiple paginated calls. If larger than 'Page size', use the 'Offset' output from this call as the 'Offset' input of the next call to fetch further pages.",
				},
				offset: {
					type: 'string',
					description:
						"Pagination cursor returned by a previous call to this endpoint (as 'Offset' in the response). Pass it here to fetch the next page of records.",
				},
				cellFormat: {
					type: 'string',
					description:
						"Format used for cell values in the response. 'JSON' returns type-specific JSON values (default); 'String' returns user-facing display strings and requires 'Time zone' and 'User locale' to be set.",
					default: '',
					enum: ['', 'json', 'string'],
				},
				timeZone: {
					type: 'string',
					description:
						"Time zone used to format dates when 'Cell format' is 'String', for example `Europe/Prague`. Required only when 'Cell format' is 'String'.",
				},
				userLocale: {
					type: 'string',
					description:
						"User locale used to format dates when 'Cell format' is 'String', for example `en-US`. Required only when 'Cell format' is 'String'.",
				},
				returnFieldsByFieldId: {
					type: 'boolean',
					description:
						"If enabled, each record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.",
					default: false,
				},
				includeDateDependencyMetadata: {
					type: 'boolean',
					description:
						"If enabled, linked record fields are returned as objects with an 'id' property (and, where configured, date-dependency details) instead of plain record ID strings.",
					default: false,
				},
				recordMetadata: {
					type: 'string',
					description:
						"Additional per-record metadata to include in the response. Currently only 'Comment count' is supported.",
					default: '',
					enum: ['', 'commentCount'],
				},
			},
			required: ['base', 'table'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				records: {
					type: 'array',
					description: 'The page of records returned by this call.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: "Unique identifier of the record (starts with 'rec').",
							},
							createdTime: {
								type: 'string',
								description:
									'Date and time the record was created, in ISO 8601 format.',
							},
							fields: {
								description:
									"Cell values keyed by field name (or by field ID if 'Return fields by field ID' was enabled). Shape varies depending on the table's schema; use the Get base schema endpoint to inspect field names, types, and options for a given table. Fields with empty values (empty string, empty array, or false) are omitted.",
							},
							commentCount: {
								type: 'number',
								description:
									"Number of comments on the record. Only present when 'Record metadata' includes 'Comment count'.",
							},
						},
						required: [],
					},
				},
				offset: {
					type: 'string',
					description:
						"Pagination cursor. Present only when more records remain; pass it back as the 'Offset' input parameter to fetch the next page.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'airtable',
		appVersion: 3,
		endpointName: 'updateRecord',
		label: 'Update record',
		description:
			'Updates specific field values of an existing record in a table, leaving other fields unchanged.',
		context:
			'---\nname: updateRecord\ndescription: This endpoint can be used to update specific fields of an existing Airtable record\n---\n\nUpdates an existing record by ID (PATCH `/v0/{base}/{table}/{recordId}`). Only the fields you send are changed; all other fields on the record are left as they were.\n\n## Required inputs\n\n- `base` — base ID (`app…`). Use List bases.\n- `table` — table name or ID (`tbl…`). Use Get base schema.\n- `recordId` — record ID (`rec…`).\n- `fields` — object of cell values to change, keyed by field name or field ID, for example `{ "Name": "Ferry Building" }`. Omit fields you do not want to change.\n\n## Typecast\n\n`typecast` is off by default to protect data integrity. If enabled, Airtable performs best-effort conversion from strings (matching linked records or select options, and creating new select options if needed).\n\n## Partial success\n\nIf the record is updated but part of the request fails (for example an attachment upload), `details.message` is `partialSuccess` and `details.reasons` lists codes such as `attachmentsFailedUploading`.\n\nSet `returnFieldsByFieldId` to key the response `fields` by field ID instead of name. This is a PATCH, not a full replace — do not send a complete record unless you intend to overwrite every included field.\n',
		accounts: {
			airtable2: { scope: ['data.records:write'] },
			airtable3: { scope: ['data.records:write'] },
		},
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
				base: {
					type: 'string',
					description:
						'ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.',
				},
				table: {
					type: 'string',
					description:
						'Name or ID of the table that contains the record, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.',
				},
				recordId: {
					type: 'string',
					description: 'ID of the record to update, for example `rec560UJdUtocSouk`.',
				},
				fields: {
					description:
						'Cell values to update on the record, as an object keyed by field name or field ID, for example `{"Name": "Ferry Building"}`. Only the fields provided here are changed; all other existing fields on the record are left as they were (PATCH semantics). Use the Get base schema endpoint to find the table\'s field names, IDs, and types.',
				},
				typecast: {
					type: 'boolean',
					description:
						'If enabled, the Airtable API performs best-effort automatic data conversion from string values (for example turning a plain string into a matching linked record or select option, creating new select options if needed). Disabled by default to protect data integrity.',
					default: false,
				},
				returnFieldsByFieldId: {
					type: 'boolean',
					description:
						"If enabled, the updated record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.",
					default: false,
				},
			},
			required: ['base', 'table', 'recordId', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: "Unique identifier of the updated record (starts with 'rec').",
				},
				createdTime: {
					type: 'string',
					description:
						'Date and time the record was originally created, in ISO 8601 format.',
				},
				fields: {
					description:
						"Cell values of the record after the update, keyed by field name (or by field ID if 'Return fields by field ID' was enabled). Shape varies depending on the table's schema; use the Get base schema endpoint to inspect field names, types, and options for a given table.",
				},
				details: {
					type: 'object',
					description:
						'Present only when the record was updated but part of the request partially failed (for example, an attachment could not be uploaded).',
					properties: {
						message: {
							type: 'string',
							description:
								"Always 'partialSuccess' when the 'Details' object is present.",
						},
						reasons: {
							type: 'array',
							description: 'List of reasons explaining the partial failure.',
							items: {
								type: 'string',
								description:
									"Reason code for the partial failure, for example 'attachmentsFailedUploading' or 'attachmentUploadRateIsTooHigh'.",
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
