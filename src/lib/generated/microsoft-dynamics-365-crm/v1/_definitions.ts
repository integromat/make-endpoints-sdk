// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			"---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route. It forwards an arbitrary call (method, path, query string, headers and body) to the Microsoft Dynamics 365 - CRM (Dataverse) API, similar to the \"Make an API Call\" module.\n\nThe URL is built as `{organization URL}/{URL parameter}`, so include the API path, for example `api/data/v9.2/WhoAmI`. Authentication is handled automatically via the app's connection.\n\nFinding the columns of a table: use method `GET`, URL `api/data/v9.2/EntityDefinitions(LogicalName='account')/Attributes` (replace `account` with the table's logical name) and query string `$select` = `LogicalName,AttributeType,RequiredLevel`. Always use `$select`; the full metadata is large. Use the result to build the `record` for the Create a record and Update a record Endpoints.\n\nNext page of List records: call `GET` with the path and query string of the `@odata.nextLink` value from the previous response (the part after the organization URL).\n\nRefer to the [Dataverse Web API reference](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/about?view=dataverse-latest) for available endpoints, required parameters and response schemas.",
		accounts: { 'microsoft-dynamics-365-crm': { scope: [] } },
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
						'Enter the part of the URL that comes after your organization URL (the connection host). For example, `api/data/v9.2/WhoAmI`.',
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
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'createRecord',
		label: 'Create a record',
		description: 'Creates a new record in a Dataverse table and returns it.',
		context:
			"---\nname: createRecord\ndescription: Creates a new record in a Dataverse table and returns it.\n---\n\nPrerequisite: get the entity set name (for example `accounts`) with the List table definitions Endpoint (`EntitySetName`).\n\nThe request always sends `Prefer: return=representation`, so the response is the created record (HTTP 201). The columns depend on the table. Use Select to limit them. The response also contains `@odata.context` and `@odata.etag`. The output schema declares no fixed fields because columns differ for every table.\n\nThe `record` input is a JSON object of column logical names. Lookups are set with `<navigationproperty>@odata.bind` = `/<entitysetname>(<id>)`. Related records can be created in the same call by nesting objects (deep insert).\n\nTo find the column names of a table, call the Arbitrary call Endpoint with method `GET`, URL `api/data/v9.2/EntityDefinitions(LogicalName='account')/Attributes` (replace `account` with the table's logical name) and query string `$select` = `LogicalName,AttributeType,RequiredLevel`. Always use `$select`; the full metadata is large.\n\nDuplicate detection is suppressed by default. Set Detect duplicates to enable it.\n\nSee [Create a table row](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/create-entity-web-api).",
		accounts: { 'microsoft-dynamics-365-crm': { scope: ['{host}/.default'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				entitySetName: {
					type: 'string',
					description:
						'The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.',
				},
				record: {
					description:
						'A JSON object of column logical names and values, for example `{"name": "Contoso"}`. Bind lookups with `<navigationproperty>@odata.bind` set to `/<entitysetname>(<id>)`. Related records can be created in the same request (deep insert) by nesting objects. See [Create a table row](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/create-entity-web-api).',
				},
				detectDuplicates: {
					type: 'boolean',
					description:
						'If `true`, duplicate detection runs for the request (sent as `MSCRM.SuppressDuplicateDetection: false`). By default, duplicate detection is suppressed. It only applies if duplicate detection is enabled for the organization and the table.',
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of columns to return for the created record. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'A comma-separated list of navigation properties to expand in the returned record. Sent as `$expand`.',
				},
			},
			required: ['entitySetName', 'record'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'deleteRecord',
		label: 'Delete a record',
		description: 'Deletes a record from a Dataverse table.',
		context:
			'---\nname: deleteRecord\ndescription: Deletes a record from a Dataverse table.\n---\n\nPrerequisite: get the entity set name (for example `accounts`) with the List table definitions Endpoint (`EntitySetName`), and the record ID with List records or Get a record.\n\nDeletion cannot be undone. A successful delete returns HTTP 204 with an empty body. A missing record returns 404.\n\nSee [Update and delete table rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api).',
		accounts: { 'microsoft-dynamics-365-crm': { scope: ['{host}/.default'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				entitySetName: {
					type: 'string',
					description:
						'The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.',
				},
				id: { type: 'string', description: 'The ID (GUID) of the record to delete.' },
			},
			required: ['entitySetName', 'id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'getRecord',
		label: 'Get a record',
		description: 'Retrieves a record from a Dataverse table by its ID.',
		context:
			'---\nname: getRecord\ndescription: Retrieves a record from a Dataverse table by its ID.\n---\n\nPrerequisite: get the entity set name (for example `accounts`) with the List table definitions Endpoint (`EntitySetName`).\n\nThe columns in the response depend on the table and on Select. The response also contains `@odata.context` and `@odata.etag`. The output schema declares no fixed fields because columns differ for every table. Lookup columns are returned as `_<name>_value` GUIDs.\n\nAlways use Select; without it every column is returned.\n\nSee [Retrieve a table row](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/retrieve-entity-using-web-api).',
		accounts: { 'microsoft-dynamics-365-crm': { scope: ['{host}/.default'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				entitySetName: {
					type: 'string',
					description:
						'The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.',
				},
				id: { type: 'string', description: 'The ID (GUID) of the record.' },
				select: {
					type: 'string',
					description:
						'A comma-separated list of columns to return, for example `name,revenue`. Sent as `$select`. If empty, all columns are returned.',
				},
				expand: {
					type: 'string',
					description:
						'A comma-separated list of navigation properties to expand. Sent as `$expand`.',
				},
			},
			required: ['entitySetName', 'id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'listEntityDefinitions',
		label: 'List table definitions',
		description: 'Returns the definitions (metadata) of Dataverse tables.',
		context:
			"---\nname: listEntityDefinitions\ndescription: Returns the definitions (metadata) of Dataverse tables.\n---\n\nCall this first to find the entity set name of a table. The other record Endpoints (create, get, list, update, delete) need the `EntitySetName` value (for example `accounts`), which is not always the plural of the logical name or equal to `LogicalCollectionName`.\n\nExample: filter `LogicalName eq 'account'` with select `LogicalName,EntitySetName,PrimaryIdAttribute`.\n\nTable definitions are large and not paged. Always use Select.\n\nThe output schema declares only the commonly used table properties, not all of the table properties that Dataverse has. Any other property that you list in Select is still returned. See [EntityMetadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/entitymetadata?view=dataverse-latest) for the full list.\n\nSee [Query table definitions](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api).",
		accounts: { 'microsoft-dynamics-365-crm': { scope: ['{host}/.default'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				filter: {
					type: 'string',
					description:
						"An OData `$filter` expression on table properties, for example `LogicalName eq 'account'`. Sent as `$filter`. See [Query table definitions](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api).",
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of table properties to return, for example `LogicalName,EntitySetName,PrimaryIdAttribute`. Sent as `$select`. Table definitions are large, so select only what you need.',
				},
				expand: {
					type: 'string',
					description:
						'A comma-separated list of navigation properties to expand, for example `Attributes($select=LogicalName)`. Sent as `$expand`.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData metadata context URL of the response.',
				},
				value: {
					type: 'array',
					description: 'The table definitions that match the request.',
					items: {
						type: 'object',
						description:
							'A table definition. Only the properties you select (or all, if none are selected) are present. This schema declares the commonly used properties only. Any other property you select is returned too. See [EntityMetadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/entitymetadata?view=dataverse-latest).',
						properties: {
							MetadataId: {
								type: 'string',
								description: 'The unique identifier of the table definition.',
							},
							LogicalName: {
								type: 'string',
								description:
									'The logical name of the table, for example `account`.',
							},
							SchemaName: {
								type: 'string',
								description: 'The schema name of the table.',
							},
							LogicalCollectionName: {
								type: 'string',
								description: 'The logical collection (plural) name of the table.',
							},
							CollectionSchemaName: {
								type: 'string',
								description: 'The collection (plural) schema name of the table.',
							},
							EntitySetName: {
								type: 'string',
								description:
									'The entity set name used in Web API URLs, for example `accounts`. Use this value as the entity set name in the other Endpoints.',
							},
							PrimaryIdAttribute: {
								type: 'string',
								description:
									'The logical name of the column that holds the record ID.',
							},
							PrimaryNameAttribute: {
								type: 'string',
								description:
									'The logical name of the column that holds the primary name of the record.',
							},
							PrimaryImageAttribute: {
								type: 'string',
								description:
									'The logical name of the column that holds the primary image of the record.',
							},
							ObjectTypeCode: {
								type: 'number',
								description: 'The object type code of the table.',
							},
							OwnershipType: {
								type: 'string',
								description:
									'The ownership type of the table, for example `UserOwned` or `OrganizationOwned`.',
							},
							IsCustomEntity: {
								type: 'boolean',
								description: 'Whether the table is a custom table.',
							},
							IsActivity: {
								type: 'boolean',
								description: 'Whether the table is an activity table.',
							},
							HasActivities: {
								type: 'boolean',
								description: 'Whether activities are associated with the table.',
							},
							HasNotes: {
								type: 'boolean',
								description: 'Whether notes are associated with the table.',
							},
							ChangeTrackingEnabled: {
								type: 'boolean',
								description: 'Whether change tracking is enabled for the table.',
							},
							IsAuditEnabled: {
								type: 'object',
								description:
									'Whether auditing is enabled for the table, as a managed property.',
								properties: {
									Value: {
										type: 'boolean',
										description: 'The value of the managed property.',
									},
									CanBeChanged: {
										type: 'boolean',
										description:
											'Whether the value of the managed property can be changed.',
									},
									ManagedPropertyLogicalName: {
										type: 'string',
										description: 'The logical name of the managed property.',
									},
								},
								required: [],
							},
							CreatedOn: {
								type: 'string',
								description: 'The date and time when the table was created.',
							},
							DisplayName: {
								type: 'object',
								description: 'The localized display name of the table.',
								properties: {
									LocalizedLabels: {
										type: 'array',
										description: 'The labels in each language.',
										items: {
											type: 'object',
											description: 'A label in one language.',
											properties: {
												Label: {
													type: 'string',
													description: 'The label text.',
												},
												LanguageCode: {
													type: 'number',
													description:
														'The locale ID (LCID) of the label.',
												},
											},
											required: [],
										},
									},
									UserLocalizedLabel: {
										type: 'object',
										description:
											'The label in the language of the calling user.',
										properties: {
											Label: {
												type: 'string',
												description: 'The label text.',
											},
											LanguageCode: {
												type: 'number',
												description: 'The locale ID (LCID) of the label.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							DisplayCollectionName: {
								type: 'object',
								description: 'The localized plural display name of the table.',
								properties: {
									LocalizedLabels: {
										type: 'array',
										description: 'The labels in each language.',
										items: {
											type: 'object',
											description: 'A label in one language.',
											properties: {
												Label: {
													type: 'string',
													description: 'The label text.',
												},
												LanguageCode: {
													type: 'number',
													description:
														'The locale ID (LCID) of the label.',
												},
											},
											required: [],
										},
									},
									UserLocalizedLabel: {
										type: 'object',
										description:
											'The label in the language of the calling user.',
										properties: {
											Label: {
												type: 'string',
												description: 'The label text.',
											},
											LanguageCode: {
												type: 'number',
												description: 'The locale ID (LCID) of the label.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							Description: {
								type: 'object',
								description: 'The localized description of the table.',
								properties: {
									LocalizedLabels: {
										type: 'array',
										description: 'The labels in each language.',
										items: {
											type: 'object',
											description: 'A label in one language.',
											properties: {
												Label: {
													type: 'string',
													description: 'The label text.',
												},
												LanguageCode: {
													type: 'number',
													description:
														'The locale ID (LCID) of the label.',
												},
											},
											required: [],
										},
									},
									UserLocalizedLabel: {
										type: 'object',
										description:
											'The label in the language of the calling user.',
										properties: {
											Label: {
												type: 'string',
												description: 'The label text.',
											},
											LanguageCode: {
												type: 'number',
												description: 'The locale ID (LCID) of the label.',
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
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'listRecords',
		label: 'List records',
		description: 'Returns a page of records from a Dataverse table.',
		context:
			"---\nname: listRecords\ndescription: Returns a page of records from a Dataverse table.\n---\n\nPrerequisite: get the entity set name (for example `accounts`) with the List table definitions Endpoint (`EntitySetName`).\n\nThis Endpoint returns one page. When more records exist, the output contains `@odata.nextLink`. `@odata.count` is present only if Count is `true`. To get the next page, call the Arbitrary call Endpoint with `GET` and the part of the `@odata.nextLink` value after the organization URL (path and query string).\n\nDon't combine Top with Maximum page size. Without either, up to 5,000 records are returned. Option names in Filter and Order by are case-sensitive. `$skip` and `$search` are not supported by Dataverse.\n\nTo list the newest records first, use Order by `createdon desc`.\n\nSee [Query data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/overview).",
		accounts: { 'microsoft-dynamics-365-crm': { scope: ['{host}/.default'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				entitySetName: {
					type: 'string',
					description:
						'The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.',
				},
				filter: {
					type: 'string',
					description:
						'An OData `$filter` expression, for example `statecode eq 0`. Sent as `$filter`. See [Filter rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/filter-rows).',
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of columns to return, for example `name,revenue`. Sent as `$select`. Select only what you need.',
				},
				expand: {
					type: 'string',
					description:
						'A comma-separated list of navigation properties to expand. Sent as `$expand`.',
				},
				orderby: {
					type: 'string',
					description:
						'A comma-separated list of columns with optional `asc` or `desc`, for example `name asc`. Sent as `$orderby`.',
				},
				apply: {
					type: 'string',
					description:
						'An OData `$apply` expression to aggregate and group data. Sent as `$apply`. See [Aggregate data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/aggregate-data).',
				},
				top: {
					type: 'number',
					description:
						"The maximum number of records to return. Sent as `$top`. Don't combine it with the maximum page size.",
				},
				count: {
					type: 'boolean',
					description:
						'If `true`, the response includes the count of matching records. Sent as `$count`.',
				},
				maxPageSize: {
					type: 'number',
					description:
						'The maximum number of records per page. Sent as `Prefer: odata.maxpagesize`. Without it, up to 5,000 records are returned.',
				},
			},
			required: ['entitySetName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData metadata context URL of the response.',
				},
				'@odata.count': {
					type: 'number',
					description:
						'The number of records that match the request. Only present when Count is `true`.',
				},
				'@odata.nextLink': {
					type: 'string',
					description:
						'The URL of the next page of records. Only present when more records exist. To get the next page, call the Arbitrary call Endpoint with the part of this URL after the organization URL.',
				},
				value: {
					type: 'array',
					description:
						'The records in the page. The columns depend on the table and on Select.',
					items: { description: 'A record. Its columns depend on the table.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-dynamics-365-crm',
		appVersion: 1,
		endpointName: 'updateRecord',
		label: 'Update a record',
		description: 'Updates an existing record in a Dataverse table.',
		context:
			"---\nname: updateRecord\ndescription: Updates an existing record in a Dataverse table.\n---\n\nPrerequisite: get the entity set name (for example `accounts`) with the List table definitions Endpoint (`EntitySetName`), and the record ID with List records or Get a record.\n\nSend only the columns you want to change. The request sends `If-Match: *`, so it fails with 404 instead of creating the record when the ID does not exist. A successful update returns HTTP 204 with an empty body.\n\nWhen you change `statecode`, also set `statuscode`; otherwise the default status for that state is used. Columns marked system-required cannot be set to null.\n\nTo find the column names of a table, call the Arbitrary call Endpoint with method `GET`, URL `api/data/v9.2/EntityDefinitions(LogicalName='account')/Attributes` (replace `account` with the table's logical name) and query string `$select` = `LogicalName,AttributeType,RequiredLevel`. Always use `$select`; the full metadata is large.\n\nSee [Update and delete table rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api).",
		accounts: { 'microsoft-dynamics-365-crm': { scope: ['{host}/.default'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				entitySetName: {
					type: 'string',
					description:
						'The entity set name of the table, for example `accounts`. Get it from `EntitySetName` returned by the List table definitions Endpoint. Pass only the name (letters, digits and underscores), never a path, query string or parentheses.',
				},
				id: { type: 'string', description: 'The ID (GUID) of the record to update.' },
				record: {
					description:
						'A JSON object with only the columns to change, for example `{"name": "New name"}`. Bind lookups with `<navigationproperty>@odata.bind`. When you change `statecode`, also set `statuscode`. See [Update and delete table rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api).',
				},
			},
			required: ['entitySetName', 'id', 'record'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
];
