// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-ads-reports',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Ads API.\n\nThe base URL is `https://googleads.googleapis.com/v25/`. Provide the remaining path in the URL parameter\n(e.g. `customers:listAccessibleCustomers`). Authentication is handled automatically via the app\'s connection:\nthe OAuth token, the developer token, and the `login-customer-id` header (the Customer ID of the connection)\nare added to every request.\n\nMost Google Ads API calls are `POST` requests with a JSON body, for example\n`customers/1234567890/googleAds:search` with `{"query": "SELECT campaign.id, campaign.name FROM campaign"}`.\nCustomer IDs in paths are 10 digits without hyphens. On `POST`, `PUT`, and `PATCH` requests, send the\n`Content-Type: application/json` header explicitly in `headers`.\n\nRefer to the [Google Ads API reference](https://developers.google.com/google-ads/api/reference/rpc) and the\n[REST interface overview](https://developers.google.com/google-ads/api/rest/overview) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { 'google-ads2': { scope: ['https://www.googleapis.com/auth/adwords'] } },
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
						'Enter the part of the URL that comes after `https://googleads.googleapis.com/v25/`. For example, `customers:listAccessibleCustomers`.',
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
		appName: 'google-ads-reports',
		appVersion: 1,
		endpointName: 'search',
		label: 'Search with GAQL',
		description:
			'Runs a Google Ads Query Language (GAQL) query against a Google Ads account and returns one page of matching rows.',
		context:
			"---\nname: search\ndescription: Runs a Google Ads Query Language (GAQL) query against a Google Ads account and returns one page of matching rows.\n---\n\nCalls `GoogleAdsService.Search` (`POST /customers/{customerId}/googleAds:search`). The call only reads data.\nUse it for any report or lookup: campaigns, ad groups, keywords, account (customer) data, audiences (user lists),\nconversion actions, and so on. The `FROM` resource, the selected fields, and the `WHERE` clause of the query\ndecide what is returned.\n\nThis is the paged variant of the searchStream endpoint. Use `search` when you want pages of up to 10,000 rows with\na continuation token, or need `totalResultsCount`; use searchStream when you want the whole result set in one call.\n\nThe generic GAQL read endpoints (`search`, `searchStream`) and the arbitrary call live only in this app for the whole\nGoogle Ads family (Campaign Management, Conversions, Customer Match, Lead Forms). All of these apps share the same\nGoogle Ads connection, so any resource those apps manage can be read here with the same permissions.\n\n## Input\n\n- `customerId`: the Google Ads account ID, 10 digits without hyphens (`123-456-7890` becomes `1234567890`).\n  Manager (MCC) and canceled accounts cannot be queried for metrics; query a client account of the manager instead.\n  The connection's Customer ID is sent as the login customer automatically.\n- `query`: a GAQL query. The query is sent as is. Write field names in snake_case (`metrics.cost_micros`), and enum,\n  string, and date values in single quotes where the grammar requires them (`campaign.status = 'ENABLED'`,\n  `segments.date BETWEEN '2026-01-01' AND '2026-01-31'`). `SELECT` and `FROM` are required; `WHERE`, `ORDER BY`,\n  `LIMIT`, and `PARAMETERS` are optional.\n- `searchSettings` (optional): `returnTotalResultsCount` adds `totalResultsCount` (the match count ignoring\n  `LIMIT`), `returnSummaryRow` adds an aggregated `summaryRow` (needs at least one `metrics.*` field),\n  `omitResults` drops the rows (useful together with the count or the summary row).\n- `validateOnly` (optional): validate the query without running it.\n- `pageToken` (optional): the `nextPageToken` from the previous response.\n\n## Output\n\nThe response is a single page. Rows are in `results`; each row is keyed by the selected resources in camelCase:\n`campaign.name`, `segments.date`, `metrics.costMicros`. The `resourceName` of the `FROM` resource (and of every\nattributed resource with a selected field) is always included unless the query sets\n`PARAMETERS omit_unselected_resource_names = true`. 64-bit integers (IDs, `impressions`, `clicks`, `costMicros`)\nare strings, doubles (`conversions`, `searchImpressionShare`) are numbers, and fields without a value are omitted.\nCost is in micros: divide `metrics.costMicros` by 1,000,000 for the amount in the account currency.\n\n## Paging\n\nThe page size is fixed at 10,000 rows and cannot be changed (the former `pageSize` field is rejected by the API).\nWhen `nextPageToken` is present, call the Endpoint again with the same `query` and that value in `pageToken`.\nUse `LIMIT` in the query to cap the total number of rows.\n\n## Example queries\n\nDaily campaign performance for a date range:\n\n```sql\nSELECT segments.date, campaign.id, campaign.name, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions FROM campaign WHERE segments.date BETWEEN '2026-01-01' AND '2026-01-31' ORDER BY segments.date DESC\n```\n\nCount enabled campaigns without returning rows:\n\n```sql\nSELECT campaign.id FROM campaign WHERE campaign.status = 'ENABLED'\n```\n\nwith `searchSettings` `{ \"returnTotalResultsCount\": true, \"omitResults\": true }`.\n\nList Customer Match audiences, newest first:\n\n```sql\nSELECT user_list.id, user_list.name, user_list.membership_status, user_list.size_for_search FROM user_list WHERE user_list.type = CRM_BASED ORDER BY user_list.id DESC\n```\n\n## Limitations\n\n- Not all metrics and segments can be combined, and some require a specific `FROM` resource. Incompatible fields\n  are rejected with an error that names the field. Check the\n  [fields reference](https://developers.google.com/google-ads/api/fields/v25/overview).\n- Selecting a core date segment (`segments.date`, `segments.week`, `segments.month`, `segments.quarter`,\n  `segments.year`) requires a finite date range on one of them in `WHERE`.\n- Other segments used in `WHERE` must also be selected.\n- `returnSummaryRow` requires at least one `metrics.*` field in `SELECT`; otherwise the request fails with HTTP 400.\n\nSee [Search and SearchStream](https://developers.google.com/google-ads/api/rest/common/search),\nthe [GAQL overview](https://developers.google.com/google-ads/api/docs/query/overview), and\n[GoogleAdsService.Search](https://developers.google.com/google-ads/api/reference/rpc/v25/GoogleAdsService/Search?transport=rest).\n",
		accounts: { 'google-ads2': { scope: ['https://www.googleapis.com/auth/adwords'] } },
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
				customerId: {
					type: 'string',
					description:
						"The ID of the Google Ads account (customer) to query, as 10 digits without hyphens. For example, `1234567890`. Metrics cannot be queried for manager (MCC) or canceled accounts; query one of their client accounts instead. The connection's Customer ID is sent as the login customer automatically.",
					pattern: String.raw`^\d{10}$`,
				},
				query: {
					type: 'string',
					description:
						'The [Google Ads Query Language (GAQL)](https://developers.google.com/google-ads/api/docs/query/overview) query. For example, `SELECT campaign.id, campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS`. See the [query structure](https://developers.google.com/google-ads/api/docs/query/structure) and the [fields reference](https://developers.google.com/google-ads/api/fields/v25/overview) for the available resources, segments, and metrics.',
				},
				searchSettings: {
					type: 'object',
					description:
						'Settings that control the request count, the summary row, and whether result rows are returned.',
					properties: {
						returnTotalResultsCount: {
							type: 'boolean',
							description:
								'If `true`, the total number of results that match the query, ignoring the `LIMIT` clause, is returned in `totalResultsCount`. Default is `false`.',
						},
						returnSummaryRow: {
							type: 'boolean',
							description:
								'If `true`, a summary row that aggregates the metrics of all results is returned in `summaryRow` after all other results. Requires at least one `metrics.*` field in the query. Default is `false`.',
						},
						omitResults: {
							type: 'boolean',
							description:
								'If `true`, result rows are excluded from the response; use it together with the total results count or the summary row. Default is `false`.',
						},
					},
					required: [],
				},
				validateOnly: {
					type: 'boolean',
					description:
						'If `true`, the request is validated but not executed. No rows are returned.',
				},
				pageToken: {
					type: 'string',
					description:
						'Token of the page to retrieve. Leave empty for the first page. To get the next page, pass the `nextPageToken` value from the previous response. Pages have a fixed size of 10,000 rows.',
				},
			},
			required: ['customerId', 'query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description:
						'The rows that matched the query, up to 10,000 per page. Omitted when no rows matched or when `omitResults` was set.',
					items: {
						type: 'object',
						description:
							'A `GoogleAdsRow` with the resources, segments, and metrics selected in the query. Field names written in snake_case in the query are returned in camelCase, for example `metrics.cost_micros` → `metrics.costMicros` and `ad_group.id` → `adGroup.id`. The `resourceName` of the queried resource is always included. 64-bit integer values (IDs, `metrics.impressions`, `metrics.costMicros`) are returned as strings. Fields with no value are omitted.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				nextPageToken: {
					type: 'string',
					description:
						'Pagination token for the next page of results. Pass it as `pageToken` in the next request. Not returned for the last page.',
				},
				totalResultsCount: {
					type: 'string',
					description:
						'Total number of results that match the query ignoring the `LIMIT` clause, as a 64-bit integer string. Returned only when `returnTotalResultsCount` was set.',
				},
				summaryRow: {
					type: 'object',
					description:
						'A `GoogleAdsRow` that aggregates the metrics across all results (sum, average, rate, and so on). Returned only when `returnSummaryRow` was set.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				fieldMask: {
					type: 'string',
					description:
						'Comma-separated list of the fields requested in the query, in camelCase. For example, `campaign.id,campaign.name,metrics.clicks`.',
				},
				metricAttributes: {
					type: 'array',
					description: 'The attributes of the metrics in the results.',
					items: {
						type: 'object',
						description: 'The attributes of one metric.',
						properties: {
							name: { type: 'string', description: 'The name of the metric.' },
							attributes: {
								type: 'array',
								description: 'The attributes of the metric.',
								items: {
									type: 'object',
									description: 'An attribute of the metric in key-value format.',
									properties: {
										key: {
											type: 'string',
											description: 'The key of the attribute.',
										},
										value: {
											type: 'string',
											description: 'The value of the attribute.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				queryResourceConsumption: {
					type: 'string',
					description:
						'The amount of resources consumed to serve the query, as a 64-bit integer string.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-ads-reports',
		appVersion: 1,
		endpointName: 'searchStream',
		label: 'Search with GAQL (stream)',
		description:
			'Runs a Google Ads Query Language (GAQL) query against a Google Ads account and returns all matching rows in batches.',
		context:
			"---\nname: searchStream\ndescription: Runs a Google Ads Query Language (GAQL) query against a Google Ads account and returns all matching rows as a stream of batches.\n---\n\nCalls `GoogleAdsService.SearchStream` (`POST /customers/{customerId}/googleAds:searchStream`). The call only reads data. Use it for any report or lookup: campaigns, ad groups, keywords, account (customer) data, audiences (user lists), conversion actions, and so on. The `FROM` resource, the selected fields, and the `WHERE` clause of the query decide what is returned.\n\nThis is the streaming variant of the search endpoint. Use `searchStream` when you want the whole result set in one call; use `search` when you want pages of up to 10,000 rows with a continuation token, or need `totalResultsCount`.\n\nThe generic GAQL read endpoints (`search`, `searchStream`) and the arbitrary call live only in this app for the whole Google Ads family (Campaign Management, Conversions, Customer Match, Lead Forms). All of these apps share the same Google Ads connection, so any resource those apps manage can be read here with the same permissions.\n\n## Input\n\n- `customerId`: the Google Ads account ID, 10 digits without hyphens (`123-456-7890` becomes `1234567890`). Manager (MCC) and canceled accounts cannot be queried for metrics. Query a client account of the manager instead. The connection's Customer ID is sent as the login customer automatically.\n- `query`: a GAQL query. The query is sent as is. Write field names in snake_case (`metrics.cost_micros`), and enum, string, and date values in single quotes (`campaign.status = 'ENABLED'`, `segments.date BETWEEN '2026-01-01' AND '2026-01-31'`). `SELECT` and `FROM` are required; `WHERE`, `ORDER BY`, `LIMIT`, and `PARAMETERS` are optional.\n- `summaryRowSetting` (optional): `SUMMARY_ROW_WITH_RESULTS` adds an aggregated row at the end, `SUMMARY_ROW_ONLY` returns just that row.\n\n## Output\n\nThe response is an **array of batches**. Each batch has up to 10,000 rows in `results`. Read the rows from every batch. A batch without rows has no `results` key at all. `fieldMask` and `requestId` repeat per batch, `queryResourceConsumption` comes with the final batch of results, and `summaryRow` (when requested) arrives in a batch of its own after the results.\n\nEach row is keyed by the selected resources in camelCase: `campaign.name`, `segments.date`, `metrics.costMicros`. The `resourceName` of the `FROM` resource (and of every attributed resource with a selected field) is always included unless the query sets `PARAMETERS omit_unselected_resource_names = true`. 64-bit integers (IDs, `impressions`, `clicks`, `costMicros`) are strings, and doubles (`conversions`, `searchImpressionShare`) are numbers. Fields without a value are omitted from the row. Cost is in micros: divide `metrics.costMicros` by 1,000,000 for the amount in the account currency.\n\nThere is no paging: the whole result set comes back in one call. Use `LIMIT` in the query to cap the rows.\n\n## Example queries\n\nDaily campaign performance for a date range:\n\n```sql\nSELECT segments.date, customer.id, customer.descriptive_name, campaign.id, campaign.name, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.conversions_value, metrics.search_impression_share FROM campaign WHERE segments.date BETWEEN '2026-01-01' AND '2026-01-31' ORDER BY segments.date DESC\n```\n\nAdd `AND campaign.id IN (123, 456)` to the `WHERE` clause to limit the report to specific campaigns.\n\nDaily account performance:\n\n```sql\nSELECT segments.date, customer.id, customer.descriptive_name, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.all_conversions, metrics.video_trueview_views FROM customer WHERE segments.date BETWEEN '2026-01-01' AND '2026-01-31' ORDER BY segments.date DESC\n```\n\n## Limitations\n\n- Not all metrics and segments can be combined, and some require a specific `FROM` resource. Incompatible fields are rejected with an error that names the field. Check the [fields reference](https://developers.google.com/google-ads/api/fields/v25/overview).\n- Selecting a core date segment (`segments.date`, `segments.week`, `segments.month`, `segments.quarter`, `segments.year`) requires a finite date range on one of them in `WHERE` (`BETWEEN '2026-01-01' AND '2026-01-31'` or `DURING LAST_30_DAYS`).\n- Other segments used in `WHERE` must also be selected.\n- `SUMMARY_ROW_WITH_RESULTS` and `SUMMARY_ROW_ONLY` require at least one `metrics.*` field in `SELECT`; otherwise the request fails with HTTP 400.\n\nSee [Search and SearchStream](https://developers.google.com/google-ads/api/rest/common/search) and the [GAQL overview](https://developers.google.com/google-ads/api/docs/query/overview).\n",
		accounts: { 'google-ads2': { scope: ['https://www.googleapis.com/auth/adwords'] } },
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
				customerId: {
					type: 'string',
					description:
						"The ID of the Google Ads account (customer) to query, as 10 digits without hyphens. For example, `1234567890`. Metrics cannot be queried for manager (MCC) or canceled accounts; query one of their client accounts instead. The connection's Customer ID is sent as the login customer automatically.",
					pattern: String.raw`^\d{10}$`,
				},
				query: {
					type: 'string',
					description:
						'The [Google Ads Query Language (GAQL)](https://developers.google.com/google-ads/api/docs/query/overview) query. For example, `SELECT campaign.id, campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS`. See the [query structure](https://developers.google.com/google-ads/api/docs/query/structure) and the [fields reference](https://developers.google.com/google-ads/api/fields/v25/overview) for the available resources, segments, and metrics.',
				},
				summaryRowSetting: {
					type: 'string',
					description:
						'Determines whether a summary row is returned. By default, the summary row is not returned. When requested, the summary row is sent in a batch by itself after all other query results. A summary row requires at least one `metrics.*` field in the query.',
					default: '',
					enum: ['', 'NO_SUMMARY_ROW', 'SUMMARY_ROW_WITH_RESULTS', 'SUMMARY_ROW_ONLY'],
				},
			},
			required: ['customerId', 'query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description:
						'The Endpoint returns an array of batch objects, each with the fields described here. The rows in this batch that matched the query. A batch contains up to 10,000 rows. Omitted when the batch has no rows.',
					items: {
						type: 'object',
						description:
							'A `GoogleAdsRow` with the resources, segments, and metrics selected in the query. Field names written in snake_case in the query are returned in camelCase, for example `metrics.cost_micros` → `metrics.costMicros` and `ad_group.id` → `adGroup.id`. The `resourceName` of the queried resource is always included. 64-bit integer values (IDs, `metrics.impressions`, `metrics.costMicros`) are returned as strings. Fields with no value are omitted.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				summaryRow: {
					type: 'object',
					description:
						'A `GoogleAdsRow` that aggregates the metrics across all results (sum, average, rate, and so on). Returned only when the summary row setting requests it, in the last batch by itself.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				fieldMask: {
					type: 'string',
					description:
						'Comma-separated list of the fields requested in the query, in camelCase. For example, `campaign.id,campaign.name,metrics.clicks`.',
				},
				metricAttributes: {
					type: 'array',
					description: 'The attributes of the metrics in the results.',
					items: {
						type: 'object',
						description: 'The attributes of one metric.',
						properties: {
							name: { type: 'string', description: 'The name of the metric.' },
							attributes: {
								type: 'array',
								description: 'The attributes of the metric.',
								items: {
									type: 'object',
									description: 'An attribute of the metric in key-value format.',
									properties: {
										key: {
											type: 'string',
											description: 'The key of the attribute.',
										},
										value: {
											type: 'string',
											description: 'The value of the attribute.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				queryResourceConsumption: {
					type: 'string',
					description:
						'The amount of resources consumed to serve the query, as a 64-bit integer string. Returned in the final batch of results; the summary row reports its own value separately.',
				},
				requestId: {
					type: 'string',
					description: 'The unique ID of the request, used for debugging.',
				},
			},
			required: [],
		},
	},
];
