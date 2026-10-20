// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nAn escape hatch for NetSuite REST routes this app does not wrap. **Prefer a dedicated endpoint whenever one\nfits** — they validate their inputs, document their behaviour, and carry accurate safety annotations, none\nof which applies here.\n\nReach for this endpoint only for something genuinely not covered, such as the asynchronous job routes, the\n`!transform` and `!attach` routes, or the create-form and select-options variants of a record route.\n\n## What is handled for you\n\n- **Authentication.** The OAuth 1.0 token-based authorization header is computed and signed for you.\n- **Base URL.** `url` is relative to `https://{accountId}.suitetalk.api.netsuite.com/services/rest`, so\n  include the service prefix — `/record/v1/…`, `/query/v1/…`, `/async/v1/…`.\n- **Headers.** Content type and the `Prefer: transient` header NetSuite requires are set automatically.\n  Passing your own `Prefer` header overrides it, which is how the asynchronous routes are reached.\n\n## Query parameters go in the Query string field\n\nThe request signature covers the query parameters, so they must be passed through `qs` rather than appended\nto `url`. Parameters written into the URL string are not signed and the call will be rejected with a 401.\n\n## Writes are not reversible\n\nThis endpoint will issue any method, including DELETE. Confirm the exact request with the user before\nsending anything other than GET, and name the record being affected rather than quoting only its ID.\n\n## Reading the response\n\nSuccessful writes return **204 with no body** — an empty `body` is not a failure. The useful information is\nin `headers`:\n\n- `location` — the created record\'s URL; its last segment is the new internal ID.\n- `x-netsuite-warning` and `x-netsuite-propertyvalidation` — fields NetSuite silently ignored. A 204 does\n  not prove every field you sent was applied.\n\nErrors are raised with NetSuite\'s own message, taken from the `detail` entries of the `o:errorDetails`\narray, prefixed by the status code.\n\n## Asynchronous requests\n\nSending `Prefer: respond-async` returns **202** with a job URL in `location` instead of performing the work\ninline. The job then has to be followed through three further calls:\n\n1. `GET /async/v1/job/{id}` — poll until `completed` is true, then check `progress`.\n2. `GET /async/v1/job/{id}/task` — list the tasks.\n3. `GET /async/v1/job/{id}/task/{n}/result` — read an individual result.\n\nBe careful interpreting this: a job can report `progress: "succeeded"` while the underlying record\noperation failed, so confirm the outcome by reading the record rather than trusting the job status.\n\nReferences: [Overview of SuiteTalk REST Web Services](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1540391670.html) · [REST Web Services URL Schema](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1546938065.html)\n',
		accounts: { netsuite: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
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
						'Path relative to `https://{accountId}.suitetalk.api.netsuite.com/services/rest`, for example `/record/v1/metadata-catalog` or `/query/v1/suiteql`. A leading slash is optional. Do not include the host or a query string — put query parameters in the Query string field instead, because they have to be signed with the request.',
					default: '/',
				},
				method: {
					type: 'string',
					description:
						"HTTP method for the request. Check the record type's definition before using anything other than GET — not every NetSuite route supports every method, and an unsupported one returns 405.",
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
				},
				headers: {
					type: 'array',
					description:
						'Extra request headers. The authorization header, the content type, and the `Prefer` header NetSuite requires are all sent automatically and do not need to be added here.',
					items: {
						type: 'object',
						description: 'A single request header.',
						properties: {
							key: {
								type: 'string',
								description: 'Header name, for example `Accept`.',
							},
							value: {
								type: 'string',
								description:
									'Header value, for example `application/swagger+json`.',
							},
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description:
						'Query string parameters to append to the URL. Add them here rather than writing them into the URL, so they are included in the request signature. Values are URL-encoded automatically.',
					items: {
						type: 'object',
						description: 'A single query string parameter.',
						properties: {
							key: {
								type: 'string',
								description: 'Parameter name, for example `limit`.',
							},
							value: {
								type: 'string',
								description:
									'Parameter value, for example `10`. Enter it unencoded.',
							},
						},
						required: [],
					},
				},
				body: {
					description:
						'Request body as a JSON object; a JSON string is accepted too, for example `{"companyName": "Acme Ltd"}`. Leave empty for requests that take no body, such as GET and DELETE. Invalid JSON fails before the request is sent.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: {
					description:
						'Parsed response body returned by NetSuite. Empty for responses that carry no content, such as the 204 returned by a successful write.',
				},
				headers: {
					type: 'object',
					description:
						"Response headers. Worth reading on write calls: `location` carries the new record's URL, and `x-netsuite-warning` and `x-netsuite-propertyvalidation` report fields NetSuite ignored.",
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: {
					type: 'number',
					description:
						'HTTP status code of the response. Writes typically return 204 with no body rather than 200.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'createRecord',
		label: 'Create a record',
		description:
			'Creates a new NetSuite record of the specified type and returns its internal ID.',
		context:
			'---\nname: createRecord\ndescription: Creates a new NetSuite record of the specified type and returns its internal ID.\n---\n\nCreates one record. **This writes to the connected NetSuite account.** Confirm with the user before\ncalling it, and read the record type\'s definition first rather than guessing field names.\n\n## Before calling\n\n1. Call `getRecordDefinitions` for the record type. It tells you the exact field names, their types, which\n   are `readOnly` and therefore cannot be set, and whether the collection route even accepts `post` — not\n   every record type the REST service exposes is creatable.\n2. Check for mandatory custom fields — see below. This is the most common cause of a failed create, and\n   the definitions do **not** reveal it.\n3. Build `fields` from those definitions. Guessed field names are the second most common cause.\n\n## Mandatory custom fields are account-specific and invisible in the schema\n\nAn account can make custom fields mandatory, and such a field is rejected on create even though nothing in\n`getRecordDefinitions` marks it as required. The failure looks like:\n\n```\n[400] Bad Request: Error while accessing a resource. Please enter value(s) for: Group Number.\n```\n\nNote that the message gives the field\'s **UI label**, not the name you have to send. Resolve the label to a\nscript ID with `runSuiteQLQuery`:\n\n```sql\nSELECT scriptid, name, fieldvaluetype FROM customfield WHERE ismandatory = \'T\'\n```\n\nThat table returns script IDs in upper case, such as `CUSTENTITY_GROUPNUMBER_`, but the REST field name is\nthe **lower-case** form, `custentity_groupnumber_`. Running that query once per record type up front is far\ncheaper than discovering the fields one failed create at a time.\n\n## Writing the fields object\n\nUse the camel case REST names (`companyName`, `isPerson`), **not** SuiteQL\'s lower-case column names.\n`fields` accepts either a native JSON object or a stringified JSON object. Stringified values are parsed\nand validated before the request; malformed or non-object values are rejected before NetSuite is called.\n\n- **Plain fields** take their value directly: `"companyName": "Acme Ltd"`.\n- **Reference fields** take an object holding the related record\'s ID: `"subsidiary": { "id": "1" }`.\n  Passing a bare ID or a name string will fail. Use `searchRecords` or `runSuiteQLQuery` to resolve a name\n  to an ID first. On a OneWorld account `subsidiary` is mandatory for entity records.\n- **Enumerated fields** take the enum\'s internal ID, which `getRecordDefinitions` lists inline under the\n  field\'s `enum`.\n- **Sublists** take an object with an `items` array of line objects. A subrecord on a sublist line can be\n  written, for example `addressBookAddress` on a customer `addressBook` line.\n- **`externalId`** can be set here, which is what later makes `upsertRecord` usable for this record.\n\nOmitted fields are treated as empty or left to their NetSuite default, so only mandatory fields and the\nvalues you actually want to set need to be present.\n\n## The response has no body\n\nA successful create returns **HTTP 204 with no content**. The new record\'s ID is therefore not in a body\n— it is the last segment of the `Location` header, which this endpoint extracts into `id` for you. To see\nthe record as stored, including any values NetSuite defaulted or derived, follow up with `getRecord`.\n\nCheck `warning` and `propertyValidation` on the result. NetSuite can accept a create while silently\nignoring individual fields it did not like; those headers are where it says so, and a 204 alone does not\nmean every field you sent was applied. Both are `null` when there was nothing to report.\n\n## Not idempotent\n\nCalling this twice creates two records. There is no deduplication, and bulk creation is not supported —\none call creates one record. If a retry is needed after an unclear failure, first check with\n`searchRecords` or `runSuiteQLQuery` whether the record already exists.\n\nTo write a record that may or may not already exist, use `upsertRecord` instead — it keys on external ID\nand will update rather than duplicate.\n\nReference: [Creating a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545141395.html)\n',
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to create, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values, and the Get record definitions endpoint to confirm the type accepts a `post` operation before attempting a create.',
				},
				fields: {
					description:
						'The record to create, as a JSON object of field names and values — for example `{"companyName": "Acme Ltd", "subsidiary": {"id": "1"}}`. Use the camel case REST field names from the Get record definitions endpoint, `companyName` rather than the lower-case `companyname` SuiteQL uses. Reference fields take an object containing the related record\'s ID. Fields marked `readOnly` in the definitions cannot be set here. Sublists are supplied as an object with an `items` array.',
				},
				replace: {
					type: 'array',
					description:
						'Names of sublists whose existing lines should be replaced entirely by the lines in this request, rather than appended to. Rarely needed on create. Use the sublist name as it appears in the record definition, for example `addressBook`.',
					items: {
						type: 'string',
						description:
							'A single sublist name, for example `addressBook`, or `subrecord.sublist` for a sublist on a subrecord.',
					},
				},
			},
			required: ['recordType', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'Internal ID of the newly created record, taken from the final segment of the `Location` header. Pass this to the Get record endpoint to read the record back.',
				},
				location: {
					type: 'string',
					description:
						'Absolute URL of the newly created record, as returned in the `Location` response header.',
				},
				statusCode: {
					type: 'number',
					description:
						'HTTP status code of the response. A successful create returns 204, since NetSuite sends no response body.',
				},
				warning: {
					type: 'string',
					description:
						'Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none — its presence does not mean the create failed.',
				},
				propertyValidation: {
					type: 'string',
					description:
						'Description of any property validation failure, from the `X-NetSuite-PropertyValidation` header. Absent when every supplied field validated cleanly.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'deleteRecord',
		label: 'Delete a record',
		description: 'Permanently deletes a NetSuite record by its internal ID.',
		context:
			'---\nname: deleteRecord\ndescription: Permanently deletes a NetSuite record by its internal ID.\n---\n\nDeletes one record. **This permanently destroys data in the connected NetSuite account and cannot be\nundone.** Always confirm the specific record with the user before calling it — name the record, not just\nits ID.\n\n## Before calling\n\n1. Read the record with `getRecord` and show the user what is about to be deleted. An internal ID alone is\n   not enough for someone to recognise the record.\n2. Check `getRecordDefinitions` for the type. Many record types cannot be deleted through REST web\n   services at all; the absence of a `delete` method on the `/{type}/{id}` route is the reliable signal.\n\n## Consider deactivating instead\n\nFor most master-data record types — customers, vendors, items, employees — NetSuite\'s own convention is to\nset `isInactive` to true rather than delete, which preserves history and referential integrity. Deleting\nis usually the wrong choice for a record that has transactions against it, and NetSuite will often refuse\nit for that reason.\n\nIf the intent is "stop using this record", use `updateRecord` with `{ "isInactive": true }`. Only delete\nwhen the record genuinely should never have existed.\n\n## The response has no body\n\nA successful delete returns **HTTP 204 with no content**. There is nothing to read back, and no copy of\nthe deleted record is returned — if any of its data might be needed afterwards, read it with `getRecord`\nbefore deleting.\n\n## Errors\n\nA record that does not exist returns 404, so a repeat call after a successful delete will fail rather than\nsucceed silently. A record that cannot be deleted because other records depend on it returns 400, with the\nreason in the `o:errorDetails` array — that is NetSuite protecting referential integrity, and the right\nresponse is usually to deactivate the record instead of forcing the deletion.\n\nReference: [Deleting a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545142287.html)\n',
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to delete, for example `customer` or `salesOrder`. Use the Get record definitions endpoint to confirm the item route accepts a `delete` operation — many record types cannot be deleted through REST web services, and some can only be made inactive instead.',
				},
				recordId: {
					type: 'string',
					description:
						'Internal ID of the record to delete, for example `2655`. Confirm you have the right record by reading it with the Get record endpoint first — this operation cannot be undone.',
				},
			},
			required: ['recordType', 'recordId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				statusCode: {
					type: 'number',
					description:
						'HTTP status code of the response. A successful delete returns 204, since NetSuite sends no response body.',
				},
				warning: {
					type: 'string',
					description:
						'Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'getRecord',
		label: 'Get a record',
		description:
			'Retrieves a single NetSuite record by its internal or external ID, with all of its field values.',
		context:
			'---\nname: getRecord\ndescription: Retrieves a single NetSuite record by its internal or external ID, with all of its field values.\n---\n\nFetches one record and all of its field values. Use it after `searchRecords`, which returns IDs only, or\nwhenever an ID is already known.\n\n## Addressing the record\n\n`recordId` accepts either form:\n\n- **Internal ID** — the numeric ID, for example `2655`.\n- **External ID** — prefix with `eid:`, for example `eid:GRP132`. The prefix is what tells NetSuite to\n  resolve by external ID; without it the value is treated as an internal ID.\n\nFor a custom record type, use its script ID as the record type, for example `customrecord_my_type`.\n\n## Output shape\n\nThe response is the record exactly as NetSuite returns it. Only four properties are guaranteed across\nevery record type — `id`, `refName`, `externalId`, and `links`. Everything else depends on the record\ntype, so call `getRecordSchema` for the type to learn the field names and their types rather than\nguessing (`getRecordDefinitions` has the same fields inside a much larger OpenAPI document).\n\nReference fields are returned as objects of the form `{ "id": "123", "refName": "..." }`, not as bare\nIDs. Enumerated fields are the same shape unless `simpleEnumFormat` is set. Sublists that have not been\nexpanded appear as an object containing only a `links` array.\n\nA field that is empty is **omitted entirely** rather than returned as null, so absence means no value.\n\n## Custom fields\n\nThe account\'s custom fields are returned as ordinary top-level properties of the record, keyed by their\nlower-case script ID — `custentity_*` on entities, `custbody_*` on transactions, `custrecord_*` on custom\nrecord types, and so on. Verified on a customer record: `"custentity_groupnumber_": "GRP687"`,\n`"custentity_lead_source_custom": "Charlie Geiselhart"`.\n\n- Scalar custom fields (text, number, date, checkbox) are returned as plain values.\n- List/Record custom fields are returned like any other reference field, as `{ "id": "…", "refName":\n  "…", "links": [...] }`; `externalId` appears only when the referenced record has one.\n- An empty custom field is omitted, like any other empty field.\n- `fields` accepts custom field names, so `fields: ["custentity_groupnumber_"]` returns just that value\n  (plus `links`). Only the body fields named are returned.\n\nUse `getRecordSchema` to list the custom fields a record type has and their types; the property keys it\nreturns are exactly the names to pass here.\n\n## Controlling the response size\n\nCustomer and transaction records have hundreds of fields, so retrieving one in full is expensive.\n\n- **`fields`** returns only the body fields named. Use the REST names from `getRecordSchema` — camel case\n  for standard fields (`companyName`, `externalId`), lower-case script IDs for custom fields\n  (`custentity_my_field`) — **not** the lower-case column names SuiteQL uses (`companyname`). This is the\n  cheapest way to read a few known values. It applies to body fields only, standard or custom; NetSuite\n  does not support selectively retrieving sublists or subrecords this way.\n- **`expandSubResources`** inlines every sublist, sublist line, and subrecord. Off by default, where\n  sublists come back as links only. Turning it on can multiply the response size on records with large\n  sublists.\n- **`simpleEnumFormat`** reduces enumeration fields from `{ id, refName }` to the bare ID.\n\nIf you need a few fields from many records, this endpoint is the wrong tool — calling it per record is\nslow. Use `runSuiteQLQuery` instead, which returns many rows of selected columns in one request.\n\n## Errors\n\nBoth a missing record and a missing record type return 404, but the message distinguishes them, so read it\nrather than guessing:\n\n- `The record instance does not exist. Provide a valid record instance ID.` — the type is valid, the ID is\n  not.\n- `Record type \'xyz\' does not exist.` — the type is wrong or is not exposed by the REST Record Service.\n  Confirm it with `listRecordTypes`.\n\nReference: [Getting a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545141500.html)\n',
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to retrieve, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values. Matching is case-insensitive.',
				},
				recordId: {
					type: 'string',
					description:
						'Internal ID of the record, for example `2655`. To look the record up by its external ID instead, prefix the value with `eid:` — for example `eid:GRP132`.',
				},
				fields: {
					type: 'array',
					description:
						'Return only these body fields instead of the whole record, which keeps large records manageable. Use the REST field names exactly as they appear in the Get a record schema output — camel case for standard fields (`companyName`, not the lower-case `companyname` used by SuiteQL) and the lower-case script ID for custom fields (`custentity_my_field`). Body fields only, standard or custom: NetSuite does not support selectively retrieving sublists or subrecords this way. Leave empty to return every field.',
					items: {
						type: 'string',
						description:
							'A single body field name, for example `companyName` or `custentity_my_field`.',
					},
				},
				expandSubResources: {
					type: 'boolean',
					description:
						'Set to true to inline the full contents of every sublist, sublist line, and subrecord. Off by default, in which case sublists are returned as links only. This can increase the response size considerably on records with large sublists.',
				},
				simpleEnumFormat: {
					type: 'boolean',
					description:
						'Set to true to return enumeration fields as a bare internal ID value rather than an object containing `id` and `refName`. Off by default.',
				},
			},
			required: ['recordType', 'recordId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Internal ID of the record, as a string.' },
				refName: {
					type: 'string',
					description: 'Human-readable name NetSuite uses to refer to this record.',
				},
				externalId: {
					type: 'string',
					description:
						'External ID of the record, if one is assigned. Absent when the record has none.',
				},
				links: {
					type: 'array',
					description: 'Hypermedia links for this record, including its own `self` URL.',
					items: {
						type: 'object',
						description: 'A single hypermedia link.',
						properties: {
							rel: {
								type: 'string',
								description:
									'Relationship of the link to this record, for example `self`.',
							},
							href: {
								type: 'string',
								description:
									'Absolute URL the link points to, including any query parameters that were applied.',
							},
							method: {
								type: 'string',
								description: 'HTTP method to use with the URL, for example `GET`.',
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
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'getRecordDefinitions',
		label: 'Get record definitions',
		description:
			'Returns the OpenAPI 3.0 definitions of the specified NetSuite record types, including their fields, field types, sublists, and supported HTTP methods.',
		context:
			"---\nname: getRecordDefinitions\ndescription: Returns the OpenAPI 3.0 definitions of the specified NetSuite record types, including their fields, field types, sublists, and supported HTTP methods.\n---\n\nReturns the OpenAPI 3.0 document NetSuite generates for the record types you select. This is the\nauthoritative source for what fields a record type has, what types those fields are, which sublists it\nexposes, which fields can be filtered on, and which HTTP methods the REST Record Service supports for\nit. Read it before building a create, update, or search call against an unfamiliar record type, rather\nthan guessing field names.\n\n## Selecting record types\n\n`select` is required and takes one or more record type script IDs. Discover valid values with the\n`listRecordTypes` endpoint. Matching is case-insensitive, so that endpoint's output can be passed\nthrough unchanged; the `paths` and `components.schemas` keys in the response always come back in\nNetSuite's canonical casing (`/noteType`) regardless of the casing sent.\n\n## Response size — request one record type at a time\n\nThese documents are large and grow with the complexity of the record. Measured sizes:\n\n| Selection | Size |\n|---|---|\n| `noteType` | 41 KB |\n| `customer` | 161 KB |\n| `customer` + `salesOrder` | 317 KB |\n\nRequest a single record type per call unless you specifically need to compare two. Selecting broadly\nwill produce a document too large to work with.\n\nIf you only need the field structure of one record type — its fields, their types, and the account's\ncustom fields — use `getRecordSchema` instead. It returns the JSON Schema flavour of the same metadata\ncatalog, about 2.4 times smaller (67 KB for `customer`), without the routes and parameters described\nbelow.\n\n## Reading the result\n\n`components.schemas` holds the definitions. For record type `customer` the relevant entries are:\n\n- `customer` — the record itself. Each property carries a `title` (the NetSuite UI label), a `type`,\n  often a `format` (`date`, `date-time`, `double`, `int64`), and `nullable: true` where the field can be\n  cleared. Enumerated fields inline their allowed values as an `enum` under `id`.\n- `customerCollection` — the list wrapper, with `items`, `count`, `totalResults`, `hasMore`, `offset`.\n- `customer-{sublist}Collection` and `customer-{sublist}Element` — one pair per sublist, for example\n  `customer-addressBookElement`.\n- `nsResource` — the shape of every reference field: `{ id, refName, externalId, links }`. A property\n  whose schema is `$ref: nsResource` is a link to another record, set by passing `{ \"id\": \"123\" }`.\n- `nsError` — the error shape, including the `o:errorDetails` array with `o:errorCode` and `detail`.\n\nThree NetSuite vendor extensions carry information available nowhere else:\n\n- **`x-ns-filterable`** on a record schema is the definitive list of field names that can be used in the\n  `q` filter for that record type. A field absent from this array cannot be filtered on, even though it\n  exists on the record. Check this before writing a `q` expression.\n- **`x-ns-custom-field: true`** marks account-specific custom fields (the `custentity_*`, `custbody_*`\n  properties). These differ per account and are not in Oracle's public documentation.\n- **`x-ns-sublistkey`** on a sublist element schema names the properties that identify a line, under\n  `value.existing` and `value.new`. Those are the fields to send to target an existing sublist line on\n  update rather than appending a new one.\n\nFields marked `readOnly: true` are returned by the API but cannot be sent on create or update.\n\n## What this document does not tell you\n\n**It does not identify mandatory fields.** Nothing here marks a field as required, including custom fields\nan administrator has made mandatory, so a create built purely from this document can still be rejected.\nList the mandatory custom fields separately with `runSuiteQLQuery`:\n\n```sql\nSELECT scriptid, name, fieldvaluetype FROM customfield WHERE ismandatory = 'T'\n```\n\nIt also does not describe SuiteQL. These are the REST field names in camel case; SuiteQL uses lower-case\ncolumn names on a different set of tables.\n\n## Reading the routes\n\n`paths` lists every available route, which is more than plain CRUD:\n\n- `/{type}` — `get` lists records, `post` creates one. The `put`, `patch`, and `delete` methods here are\n  the *batch* operations: they take an `ids` query parameter or a collection body, and require the\n  header `Prefer: respond-async`.\n- `/{type}/{id}` — `get`, `patch`, and `delete` operate on a single record by **integer internal ID**.\n  The `put` on this route is upsert and takes an **external ID only**, matching the pattern `eid:(.+)`.\n- `/{type}/{id}/!transform/{targetType}` — converts a record into a related one, for example a customer\n  into an `estimate`, `invoice`, `salesOrder`, or `cashSale`.\n- `/{type}/{targetId}/!attach/...` and `/!detach/...` — link or unlink related records.\n\nThe methods present under a path are the operations the service actually accepts for that record type,\nso this is how to confirm a record type is writable before attempting a write.\n\nEach operation documents its own query parameters and headers, which is the reliable way to check\nwhether it supports options such as `expandSubResources`, `fields`, `simpleEnumFormat`, `replace`, or\n`replaceSelectedFields`. Note that `post` and `patch` also accept an `Accept` header of\n`application/vnd.oracle.resource+json; type=create-form`, `type=edit-form`, or `type=select-options`,\nwhich returns a prefilled form or a field's valid options **without writing anything** — useful for\ndiscovering which values a select field will accept, and reachable through `arbitraryCall`. Be aware that\nthis is not a dry run: it resolves references and fills defaults but does **not** enforce mandatory\nfields, so a payload that returns 200 as a create-form can still fail when actually posted.\n\nReference: [Getting Metadata](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540810174.html)\n",
		accounts: { netsuite: { scope: [] } },
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
				select: {
					type: 'array',
					description:
						'Script IDs of the record types to return definitions for. Use the List record types endpoint to discover valid values. Matching is case-insensitive, so the script IDs returned by that endpoint can be passed through unchanged.',
					items: {
						type: 'string',
						description:
							'A single record type script ID, for example `customer`, `salesOrder`, or `customrecord_my_type`.',
					},
				},
			},
			required: ['select'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				openapi: {
					type: 'string',
					description:
						'Version of the OpenAPI specification this document conforms to, for example `3.0.1`.',
				},
				info: {
					type: 'object',
					description: 'Metadata describing the generated document.',
					properties: {
						description: {
							type: 'string',
							description:
								'Generation timestamp plus the account ID, user, and role the document was generated for.',
						},
						termsOfService: {
							type: 'string',
							description: 'URL of the NetSuite terms of service.',
						},
						contact: {
							type: 'object',
							description: 'Oracle NetSuite contact details.',
							properties: {
								name: {
									type: 'string',
									description: 'Contact name, always `Oracle NetSuite`.',
								},
								url: { type: 'string', description: 'NetSuite website URL.' },
								email: {
									type: 'string',
									description: 'NetSuite contact email address.',
								},
							},
							required: [],
						},
						version: {
							type: 'string',
							description:
								'Version of the Record Service described, for example `v1`.',
						},
						'x-framework': {
							type: 'object',
							description:
								'Vendor extension identifying the framework that generated the document.',
							properties: {
								name: {
									type: 'string',
									description:
										'Framework name, always `oracle-netsuite-suitetalk-rest`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				servers: {
					type: 'array',
					description: 'Base URLs the documented operations are served from.',
					items: {
						type: 'object',
						description: 'A single server entry.',
						properties: {
							url: {
								type: 'string',
								description:
									'Account-specific base URL of the REST Record Service.',
							},
						},
						required: [],
					},
				},
				security: {
					type: 'array',
					description:
						'Authentication schemes the documented operations accept, for example `OAuth_1.0_authorization`.',
					items: {
						type: 'object',
						description:
							'A single security requirement, keyed by scheme name with an array of required scopes.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				paths: {
					type: 'object',
					description:
						'Request paths available for the selected record types, keyed by path such as `/noteType` and `/noteType/{id}`. Each entry lists the supported HTTP methods with their query parameters, request bodies, and response schemas. Keys depend on the record types requested, so they are not enumerated here.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				components: {
					type: 'object',
					description: 'Reusable definitions referenced from the paths.',
					properties: {
						schemas: {
							type: 'object',
							description:
								"Field definitions for the selected record types, keyed by schema name. Each schema lists the record's fields with their types and formats, its sublists, and any enumerated values. Keys depend on the record types requested, so they are not enumerated here.",
							properties: {},
							required: [],
							additionalProperties: true,
						},
						securitySchemes: {
							type: 'object',
							description:
								'Definitions of the authentication schemes listed under `security`.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'getRecordSchema',
		label: 'Get a record schema',
		description:
			'Returns the JSON Schema of one record type — every body field including custom fields, with type and format, plus sublists and subrecords.',
		context:
			'---\nname: getRecordSchema\ndescription: Returns the JSON Schema of one NetSuite record type — every body field including the account\'s custom fields, with type and format, plus sublists and subrecords.\n---\n\nReturns the JSON Schema document NetSuite generates for a single record type. It describes the structure\nof the record — every body field, its type and format, reference fields, sublists, and subrecords —\nincluding the custom fields this account has added. Use it to learn which custom fields a record type\nhas and how they are typed before reading them with `getRecord` or writing them with `createRecord` and\n`updateRecord`.\n\n## How it differs from the other metadata endpoints\n\n- **`getRecordDefinitions`** returns the OpenAPI 3.0 document: the same fields plus every route, its HTTP\n  methods, query parameters, and headers, for one or more record types at once. It is about 2.4 times\n  larger for the same record type (161 KB against 67 KB for `customer`). Use it when you need to know\n  which operations a record type supports; use this endpoint when you only need the field structure.\n- **`getRecord`** returns the *values* of one record instance. This endpoint returns no values — only the\n  schema — and takes no record ID.\n\nRequest one record type per call. For a custom record type, pass its script ID, for example\n`customrecord_my_type`.\n\n## Finding the custom fields\n\nCustom fields are ordinary entries in `properties`, keyed by their lower-case script ID. Identify them by\n**prefix** — these are the prefixes NetSuite assigns, and they are the reliable signal:\n\n| Prefix | Custom field type |\n|---|---|\n| `custentity_` | Entity fields (customer, vendor, employee, contact, …) |\n| `custbody_` | Transaction body fields |\n| `custcol_` | Transaction line fields and item options |\n| `custitem_` | Item fields |\n| `custitemnumber_` | Item number fields |\n| `custevent_` | CRM fields (events, tasks, cases, …) |\n| `custrecord_` | Fields on custom record types and other records |\n| `cseg_` | Custom segments |\n\nMatch the full prefix including the underscore: `customForm` is a standard field, not a custom one.\n\n`x-ns-custom-field: true` is a secondary signal only. On the schemas inspected it is present on scalar\ncustom fields (text, number, date, checkbox) but **absent from List/Record custom fields**, which look like\nany other reference field; and on custom record types NetSuite also sets it on the standard fields\n(`id`, `name`, `isInactive`, `created`, `externalId`). Do not use the flag alone to decide whether a field\nis custom.\n\nCustom fields come in three shapes:\n\n- **Scalar** — `title`, `type`, usually `nullable: true`, and `format` where relevant\n  (`{ "title": "Group Number", "type": "string", "nullable": true, "x-ns-custom-field": true }`).\n- **List/Record, single value** — an object whose `properties` are `id`, `refName`, `externalId`, and\n  `links`. The schema does not say which record type or custom list the field points to; `externalId`\n  is only present on a record when one is assigned. On a record the value is `{ "id": "123", "refName":\n  "…" }` and is set by passing `{ "id": "123" }`.\n- **List/Record, multiple select** — an object with `links`, `totalResults`, `count`, `hasMore`, `offset`,\n  and `items`, where `items.items.$ref` ends in the referenced record type\n  (`/services/rest/record/v1/metadata-catalog/employee`). This is the one shape that reveals the target\n  type.\n\n## Using the field names\n\nThe `properties` keys are the exact names to send and read:\n\n- `getRecord` returns custom fields under these keys, and its `fields` parameter accepts them, so\n  `fields: ["custentity_my_field"]` reads a single custom value cheaply.\n- `createRecord`, `updateRecord`, and `upsertRecord` take them as keys of `fields`.\n- `searchRecords` can filter on a field only if its name appears in `x-ns-filterable`.\n- SuiteQL uses different names — lower-case column names on a different set of tables — so do not carry\n  these keys into `runSuiteQLQuery` unchanged.\n\nFields marked `readOnly: true` are returned by NetSuite but cannot be sent on create or update.\n\n## What this document does not tell you\n\n- **Which fields are mandatory.** Nothing here marks a field as required, including custom fields an\n  administrator has made mandatory. List those with `runSuiteQLQuery`:\n\n  ```sql\n  SELECT scriptid, name, fieldvaluetype FROM customfield WHERE ismandatory = \'T\'\n  ```\n\n  Its `scriptid` values come back upper case; the REST field name is the lower-case form.\n- **Default values, sourcing, and display type** (hidden, disabled, inline) — these are form settings that\n  the REST metadata does not expose.\n- **The target of a single-value List/Record custom field.** Query the `customfield` table\'s\n  `fieldvaluetyperecord` column, or read a populated record and follow its `links`.\n\n## Size\n\nThe document grows with the record type: about 67 KB for `customer` (156 properties, 61 of them custom\non the account measured), under 1 KB for a small custom record type. It is still far smaller than the\nOpenAPI document from `getRecordDefinitions`.\n\n## Errors\n\nAn unknown record type returns 404 with `Record type \'xyz\' does not exist.` — the type is misspelled or is\nnot exposed by the REST Record Service. Confirm it with `listRecordTypes`.\n\nReference: [Working with JSON Schema Metadata](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545129726.html)\n',
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to describe, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values. Matching is case-insensitive. One record type per call.',
				},
			},
			required: ['recordType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				type: {
					type: 'string',
					description: 'JSON Schema type of the record document, always `object`.',
				},
				properties: {
					type: 'object',
					description:
						'One entry per field of the record type, keyed by the REST field name — camel case for standard fields (`companyName`) and the lower-case script ID for custom fields (`custentity_my_field`). Each entry is a JSON Schema fragment: `title` (the NetSuite UI label), `type`, and depending on the field `format` (`date`, `date-time`, `double`, `int64`), `nullable`, `description`, `readOnly`, `x-ns-custom-field`. Reference fields are objects whose `properties` hold `id`, `refName`, `externalId`, and `links`; enumerated fields list their allowed values as `enum` under `id`. Sublists and multi-select fields are objects with `links`, `totalResults`, `count`, `hasMore`, `offset`, and `items`, where `items.items.$ref` names the referenced metadata-catalog entry, and sublist elements carry `x-ns-sublistkey`. The keys vary per record type and are not enumerated here.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				$schema: {
					type: 'string',
					description:
						'URI of the JSON Schema dialect the document follows, `http://json-schema.org/draft-06/hyper-schema#`.',
				},
				'x-ns-filterable': {
					type: 'array',
					description:
						'Names of the fields that can be used in the `q` filter of the Search records endpoint for this record type. A field absent from this list cannot be filtered on even though it exists on the record.',
					items: {
						type: 'string',
						description:
							'A single filterable field name, for example `companyName` or `custentity_my_field`.',
					},
				},
				'x-ns-custom-record': {
					type: 'boolean',
					description:
						'`true` when the record type is a custom record type (`customrecord_*`). Absent for standard record types.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'listRecordTypes',
		label: 'List record types',
		description:
			'Returns the names of all record types available in the connected NetSuite account.',
		context:
			"---\nname: listRecordTypes\ndescription: Returns the names of all record types available in the connected NetSuite account.\n---\n\nLists the script ID of every record type the NetSuite REST Record Service exposes in the connected\naccount, including custom record types (script IDs that begin with `customrecord`). Use it to discover\nthe value to pass as the record type of the record endpoints, or as an entry in the `select` parameter\nof `getRecordDefinitions`.\n\n## What it returns\n\nNames only. NetSuite's raw `metadata-catalog` response wraps each record type in four metadata links,\nwhich makes it roughly 400 KB for a typical account; this endpoint returns just the script IDs instead.\n\nThe response contains **no field definitions**. Call `getRecordDefinitions` with the record types you\ncare about to get their fields, field types, sublists, and supported HTTP methods.\n\n## Usage notes\n\n- The catalog is stable within an account. Call this once and reuse the result rather than calling it\n  before every operation.\n- Custom record types are account-specific and never appear in Oracle's public REST API Browser, so\n  this endpoint is the only reliable way to discover them.\n- The list reflects what the REST Record Service exposes. Sales and purchase custom transactions are\n  not supported by the service and so will not appear.\n- Some script IDs here differ in casing from NetSuite's canonical form (`notetype` here versus\n  `noteType` in the metadata catalog paths). Record type matching is case-insensitive, so the names\n  returned by this endpoint can be passed to the other endpoints unchanged.\n\nReference: [Getting Metadata](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540810174.html)\n",
		accounts: { netsuite: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description:
						'The script IDs of every record type available in the connected NetSuite account, including custom record types. Pass a value from this list as the record type of the record endpoints, or as an entry in the `select` parameter of the Get record definitions endpoint.',
					items: {
						type: 'string',
						description:
							'The script ID of a single record type, for example `customer`, `salesOrder`, or `customrecord_project`.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'runSuiteQLQuery',
		label: 'Run a SuiteQL query',
		description:
			'Runs a read-only SuiteQL SELECT statement against the NetSuite account and returns the resulting rows.',
		context:
			"---\nname: runSuiteQLQuery\ndescription: Runs a read-only SuiteQL SELECT statement against the NetSuite account and returns the resulting rows.\n---\n\nRuns SQL against NetSuite's analytical tables. This is the most capable read tool in this app and usually\nthe right one when a question spans more than a single record.\n\n## When to use this instead of the record endpoints\n\nPrefer this endpoint when you need any of:\n\n- **Specific columns from many records.** `searchRecords` returns IDs only, so answering \"list the names\n  and emails of inactive customers\" through it would require one `getRecord` per result. One SuiteQL\n  query does it in a single request.\n- **Joins.** `searchRecords` can only filter a record's own body fields. SuiteQL joins freely, which is\n  the only way to filter or report across related records.\n- **Aggregation.** `COUNT`, `SUM`, `MIN`, `MAX`, `GROUP BY`, `HAVING` all work.\n- **Account configuration.** NetSuite's own metadata is queryable here and nowhere else in this app. The\n  `customfield` table is the only way to find which custom fields an account has made mandatory, which\n  `getRecordDefinitions` does not report:\n\n  ```sql\n  SELECT scriptid, name, fieldvaluetype FROM customfield WHERE ismandatory = 'T'\n  ```\n\n  Its `scriptid` values come back upper case; the REST field name is the lower-case form.\n\nUse `getRecord` instead when you want one known record in full, including its sublists — SuiteQL exposes\ntables, not the nested record representation.\n\n## Naming differs from the record endpoints\n\nSuiteQL table and column names are **lower case**: `companyname`, `isinactive`, `datecreated`. The record\nendpoints use camel case for the same fields (`companyName`, `isInactive`, `dateCreated`). Do not carry\nnames from `getRecordDefinitions` into a query unchanged — lower-case them. NetSuite's Records Catalog,\nreachable from the NetSuite UI, is the authoritative list of SuiteQL tables and their columns.\n\nString literals use **single** quotes: `WHERE companyname LIKE 'Acme%'`.\n\nAn unknown column is reported precisely — `Unknown identifier 'nosuchcolumn'` — so read the error rather\nthan guessing again.\n\n## Values must be inlined\n\nNetSuite's documented `params` array for `?` placeholders is **rejected on this account** — including it\nreturns a 400 even when the array is empty. Write literal values into the statement instead. Escape\nembedded single quotes by doubling them: `WHERE companyname = 'O''Brien Ltd'`.\n\n## Everything comes back as a string\n\nNumbers, counts, and IDs are all returned as JSON strings — a `COUNT(...)` of 822 arrives as `\"822\"`, and\n`id` as `\"2449\"`. Convert before doing arithmetic or numeric comparison on the results.\n\nColumn keys follow the `SELECT` clause, lower-cased. An alias becomes the key, so `COUNT(t.id) AS\ntxn_count` appears as `txn_count`. Alias every computed column; otherwise its key is NetSuite's own\ngenerated name.\n\n## Paging\n\n- `limit` accepts 1 to 1000 and defaults to 1000.\n- `offset` **must be divisible by `limit`** or NetSuite returns a 400. With `limit` 10, use 0, 10, 20, …\n- `totalResults` is the full row count; `count` is this page only. Page while `hasMore` is true.\n- A query may return at most 100,000 rows in total. Narrow the `WHERE` clause rather than paging through\n  a very large result set.\n\nOrdering is not guaranteed without an explicit `ORDER BY`, which matters when paging — without one, rows\ncan repeat or be skipped across pages.\n\nThe `Prefer: transient` header that SuiteQL requires is sent automatically; it does not need to be\nsupplied.\n\nReference: [SuiteQL](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156257770590.html)\n",
		accounts: { netsuite: { scope: [] } },
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
				q: {
					type: 'string',
					description:
						"A SuiteQL `SELECT` statement, for example `SELECT id, companyname FROM customer WHERE companyname LIKE 'Acme%'`. Table and column names are lower case — `companyname`, not the camel case `companyName` the record endpoints use. String literals take single quotes. Only read queries are supported; `INSERT`, `UPDATE`, and `DELETE` are rejected. Unlike the Search records endpoint, joins across tables are allowed.",
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of rows to return on one page, between 1 and 1000. NetSuite defaults to 1000 when omitted.',
					minimum: 1,
					maximum: 1000,
				},
				offset: {
					type: 'number',
					description:
						'Number of rows to skip, for paging through results. Must be divisible by `limit`, otherwise NetSuite returns a 400 error — with a limit of 10, valid offsets are 0, 10, 20, and so on. Defaults to 0.',
					minimum: 0,
				},
			},
			required: ['q'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description:
						"The result rows. Each row's properties are the columns named in the `SELECT` clause, lower-cased, so they vary per query and are not enumerated here. Aliasing a column in SQL changes its key in the output.",
					items: {
						type: 'object',
						description: 'A single result row, keyed by the selected column names.',
						properties: {
							links: {
								type: 'array',
								description:
									'Hypermedia links for the row. Empty for SuiteQL results, which are projections rather than addressable records.',
								items: {
									type: 'object',
									description: 'A single hypermedia link.',
									properties: {
										rel: {
											type: 'string',
											description: 'Relationship of the link to the row.',
										},
										href: {
											type: 'string',
											description: 'Absolute URL the link points to.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				count: {
					type: 'number',
					description: 'Number of rows returned on this page, which is at most `limit`.',
				},
				totalResults: {
					type: 'number',
					description:
						'Total number of rows the query matches across all pages, not just this page.',
				},
				hasMore: {
					type: 'boolean',
					description:
						'Whether further pages exist beyond this one. When true, increase `offset` by `limit` to fetch the next page.',
				},
				offset: {
					type: 'number',
					description: 'The offset this page was returned for, echoing the request.',
				},
				links: {
					type: 'array',
					description:
						"Pagination links for the result set, with relationships such as `self`, `next`, and `last`. The `last` link's offset reveals the final page.",
					items: {
						type: 'object',
						description: 'A single pagination link.',
						properties: {
							rel: {
								type: 'string',
								description:
									'Relationship of the link to this page, for example `next` or `last`.',
							},
							href: {
								type: 'string',
								description:
									'Absolute URL of the linked page, including its `limit` and `offset`.',
							},
							method: {
								type: 'string',
								description:
									'HTTP method to use with the URL, which is `POST` for SuiteQL.',
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
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'searchRecords',
		label: 'Search records',
		description:
			'Returns a paginated list of record IDs of the specified NetSuite record type, optionally filtered with a query expression.',
		context:
			"---\nname: searchRecords\ndescription: Returns a paginated list of record IDs of the specified NetSuite record type, optionally filtered with a query expression.\n---\n\nLists records of one type, optionally filtered. Use it to find the internal ID of a record when you know\nsomething about it but not its ID.\n\n## It returns IDs, not records\n\nEach entry in `items` contains only `id` and `links` — no field values, regardless of the query. This is\nhow NetSuite's Record Service behaves and is not a limitation of this endpoint. To get field values,\ntake an `id` from the results and call `getRecord`.\n\nIf you need several fields from many records in one call, do **not** loop `getRecord` over the results.\nUse `runSuiteQLQuery` instead — it returns real columns and is a single request.\n\nBatch expansion (`expandRecords` plus `ids`) is not exposed here because it requires\n`Prefer: respond-async`, which switches NetSuite into its asynchronous job workflow: the call returns 202\nwith a job URL that then has to be polled at `/async/v1/job/{id}` and its result read from\n`/async/v1/job/{id}/task/{n}/result`. None of that is modelled by these endpoints. It can be driven\nmanually through `arbitraryCall` if genuinely needed, but `runSuiteQLQuery` is almost always the better\nanswer.\n\n## Writing the query\n\n`q` uses NetSuite's **record collection filtering syntax, which is not SuiteQL**. Do not put a `SELECT`\nstatement here; that belongs in `runSuiteQLQuery`.\n\nEach condition is `field OPERATOR value`, joined with `AND` / `OR`, with `()` for precedence. Negation is\nexpressed by suffixing `_NOT` to the operator rather than by a separate keyword:\n\n- Text: `IS`, `IS_NOT`, `CONTAIN`, `CONTAIN_NOT`, `START_WITH`, `START_WITH_NOT`, `END_WITH`,\n  `END_WITH_NOT`\n- Presence: `EMPTY`, `EMPTY_NOT`\n- Sets: `ANY_OF`, `ANY_OF_NOT`\n- Numbers: `EQUAL`, `GREATER`, `GREATER_OR_EQUAL`, `LESS`, `LESS_OR_EQUAL`, `BETWEEN`, each with a\n  `_NOT` form\n- Dates: `ON`, `BEFORE`, `AFTER`, `ON_OR_BEFORE`, `ON_OR_AFTER`, each with a `_NOT` form\n\nQuotation marks are only required when the value contains spaces, though quoting always is safe. Field\nnames use the camel case REST form, as in `getRecordDefinitions`:\n\n```\nemail START_WITH barbara\ncompanyName CONTAIN \"acme ltd\"\nemail IS \"a@b.com\" AND isInactive IS false\nexternalId IS \"GRP132\"\n```\n\nTwo constraints that cause most failures:\n\n- **Only filterable fields work.** A record type's `x-ns-filterable` array is the definitive list; call\n  `getRecordDefinitions` for the type and read it before writing a query. A field that exists on the\n  record but is absent from that array cannot be filtered on.\n- **No joins.** Only the record's own body fields are available. Filtering on a related record's fields\n  requires `runSuiteQLQuery`.\n\n## Paging\n\n- `limit` accepts 1 to 1000 and defaults to 1000.\n- `offset` **must be divisible by `limit`** or NetSuite returns a 400. With `limit` 20, use 0, 20, 40, …\n- `totalResults` is the full match count; `count` is this page only.\n- Page forward while `hasMore` is true, adding `limit` to `offset` each time. The `last` entry in\n  `links` gives the final page's offset directly, which is cheaper than walking every page.\n\n## Ordering\n\nThis endpoint returns records in NetSuite's default order and cannot sort them. Neither `q` nor any other\ninput accepts a sort or order clause. To order results, including the most recently created records, use\n`runSuiteQLQuery` with `ORDER BY`, for example\n`SELECT id, entityid, companyname, datecreated FROM customer ORDER BY datecreated DESC`.\n\nReference: [Record Collection Filtering](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html) and [Listing All Record Instances](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1540810951.html)\n",
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to search, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values. Matching is case-insensitive.',
				},
				q: {
					type: 'string',
					description:
						'Filter expression in NetSuite\'s record query language — **not** SuiteQL. Compares a field to a value with operators such as `IS`, `CONTAIN`, `START_WITH`, `EMPTY`, `BEFORE`, `AFTER`, `ON`, and `ANY_OF`, combined with `AND` / `OR` and parentheses. String values go in double quotes, for example `companyName CONTAIN "acme"` or `email IS "a@b.com" AND isInactive IS false`. Only fields listed in the record type\'s `x-ns-filterable` array can be filtered; call the Get record definitions endpoint to see that list. Filtering is limited to the record\'s own body fields — joins across records are not supported, so use the Run SuiteQL query endpoint for those. Leave empty to list all records of the type.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of records to return on one page, between 1 and 1000. NetSuite defaults to 1000 when omitted.',
					minimum: 1,
					maximum: 1000,
				},
				offset: {
					type: 'number',
					description:
						'Number of records to skip, for paging through results. Must be divisible by `limit`, otherwise NetSuite returns a 400 error — with a limit of 20, valid offsets are 0, 20, 40, and so on. Defaults to 0.',
					minimum: 0,
				},
			},
			required: ['recordType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description:
						"The matching records, in pages of `count`. Each entry carries only the record's ID and links — no field values. Pass an ID to the Get record endpoint to retrieve the record itself.",
					items: {
						type: 'object',
						description: 'A single matching record, identified by ID only.',
						properties: {
							id: {
								type: 'string',
								description:
									'Internal ID of the record, as a string. Pass this to the Get record endpoint.',
							},
							links: {
								type: 'array',
								description:
									'Hypermedia links for this record, containing its direct `self` URL.',
								items: {
									type: 'object',
									description: 'A single hypermedia link.',
									properties: {
										rel: {
											type: 'string',
											description:
												'Relationship of the link to this record, for example `self`.',
										},
										href: {
											type: 'string',
											description: 'Absolute URL the link points to.',
										},
										method: {
											type: 'string',
											description:
												'HTTP method to use with the URL, for example `GET`.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				count: {
					type: 'number',
					description:
						'Number of records returned on this page, which is at most `limit`.',
				},
				totalResults: {
					type: 'number',
					description:
						'Total number of records matching the query across all pages, not just this page.',
				},
				hasMore: {
					type: 'boolean',
					description:
						'Whether further pages exist beyond this one. When true, increase `offset` by `limit` to fetch the next page.',
				},
				offset: {
					type: 'number',
					description: 'The offset this page was returned for, echoing the request.',
				},
				links: {
					type: 'array',
					description:
						"Pagination links for the result set, with relationships such as `self`, `next`, `previous`, `first`, and `last`. The `last` link's offset reveals the final page.",
					items: {
						type: 'object',
						description: 'A single pagination link.',
						properties: {
							rel: {
								type: 'string',
								description:
									'Relationship of the link to this page, for example `next` or `last`.',
							},
							href: {
								type: 'string',
								description:
									'Absolute URL of the linked page, including its `limit` and `offset`.',
							},
							method: {
								type: 'string',
								description: 'HTTP method to use with the URL, for example `GET`.',
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
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'updateRecord',
		label: 'Update a record',
		description:
			'Updates the supplied fields on an existing NetSuite record, leaving fields that are not supplied unchanged.',
		context:
			"---\nname: updateRecord\ndescription: Updates the supplied fields on an existing NetSuite record, leaving fields that are not supplied unchanged.\n---\n\nApplies a partial update to one existing record. **This overwrites data in the connected NetSuite\naccount.** Confirm with the user before calling it, and be specific about which record and which fields.\n\n## It is a partial update\n\nOnly the fields present in `fields` are written. Fields that are omitted entirely are left exactly as they\nwere, so there is no need to read the record first and send it back in full — and doing so risks writing\nstale values over changes made in the meantime. Send the minimum.\n\n## Clearing a field\n\nOmitting a field leaves it unchanged. To clear one, send it explicitly with a value of `null`, which\ndeletes the body field.\n\nBy default every `null` in the payload is applied. If you want to send a payload containing several nulls\nbut only clear some of them, set `replaceSelectedFields` to true and name the fields to clear in\n`replace` — then only those are deleted and the remaining nulls are ignored.\n\n## Sublists merge unless told otherwise\n\nBy default, sublist lines supplied here are matched against existing lines or appended to them. To make\nthe supplied lines the complete set, name the sublist in `replace` and its contents are replaced\nwholesale.\n\nWhen targeting a specific existing sublist line rather than adding one, send the line's key fields. The\nrecord definition's `x-ns-sublistkey` extension names them — see `getRecordDefinitions`.\n\nA subrecord on a sublist line can be updated, for example `addressBookAddress`. Send the line key from\n`x-ns-sublistkey` (`internalId` for an existing address) so the existing line is updated rather than a new\none appended.\n\n## The response has no body\n\nA successful update returns **HTTP 204 with no content**, so there is nothing to read back from the\nresponse. Call `getRecord` afterwards to confirm what was actually stored.\n\nCheck `propertyValidation` and `warning` on the result. NetSuite can return 204 having silently ignored\nindividual fields — a misspelled field name often produces a successful-looking response with a note in\nthose headers rather than an error, so a 204 is not by itself proof that the update applied.\n\n## Addressing the record\n\n`recordId` is the **internal** ID. To write a record by external ID, or to write one that may not exist\nyet, use `upsertRecord` instead.\n\nReference: [Updating a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545142173.html)\n",
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to update, for example `customer` or `salesOrder`. Use the Get record definitions endpoint to confirm the item route accepts a `patch` operation before attempting an update.',
				},
				recordId: {
					type: 'string',
					description:
						'Internal ID of the record to update, for example `2655`. Resolve a name to an ID with the Search records or Run SuiteQL query endpoint first. To write by external ID instead, use the Upsert record endpoint.',
				},
				fields: {
					description:
						'Only the fields to change, as a JSON object of field names and values — for example `{"comments": "Updated"}`. Fields that are omitted are left untouched, so there is no need to send the whole record. Send a field with a value of `null` to clear it. Use the camel case REST field names from the Get record definitions endpoint. Reference fields take an object containing the related record\'s ID, for example `{"terms": {"id": "4"}}`.',
				},
				replace: {
					type: 'array',
					description:
						'Names of sublists whose existing lines should be replaced entirely by the lines in this request, instead of being merged with them. Without this, supplied sublist lines are matched against existing lines or appended. Also used together with `replaceSelectedFields` to restrict which null body fields are cleared.',
					items: {
						type: 'string',
						description:
							'A single sublist name such as `addressBook`, `subrecord.sublist` for a sublist on a subrecord, or a body field name when narrowing deletion via `replaceSelectedFields`.',
					},
				},
				replaceSelectedFields: {
					type: 'boolean',
					description:
						'Set to true to apply only the null values whose field names are listed in `replace`, ignoring any other nulls in the payload. Off by default, in which case every field sent as `null` is cleared. This narrows clearing rather than enabling it — clearing a field does not require this parameter.',
				},
			},
			required: ['recordType', 'recordId', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				statusCode: {
					type: 'number',
					description:
						'HTTP status code of the response. A successful update returns 204, since NetSuite sends no response body.',
				},
				warning: {
					type: 'string',
					description:
						'Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none.',
				},
				propertyValidation: {
					type: 'string',
					description:
						'Description of any property validation failure, from the `X-NetSuite-PropertyValidation` header. Absent when every supplied field validated cleanly. Worth checking — a field NetSuite rejected is reported here rather than as an error.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'netsuite',
		appVersion: 2,
		endpointName: 'upsertRecord',
		label: 'Create or update a record',
		description:
			'Creates or updates a NetSuite record identified by its external ID, and returns its internal ID.',
		context:
			'---\nname: upsertRecord\ndescription: Creates or updates a NetSuite record identified by its external ID, and returns its internal ID.\n---\n\nWrites a record keyed on its **external ID**: if one already exists with that external ID it is updated,\notherwise a new record is created. **This writes to the connected NetSuite account.** Confirm with the\nuser before calling it.\n\n## External ID only\n\nNetSuite\'s upsert route accepts an external ID and nothing else — an internal ID will not work here. Pass\nthe bare value, without the `eid:` prefix; this endpoint adds it.\n\nThis is the right tool for syncing records from an external system, where the other system\'s key is stored\nas the NetSuite external ID. It is the only safe way to write a record repeatedly without creating\nduplicates, which is what makes it idempotent where `createRecord` is not.\n\nTo update a record you have the internal ID for, use `updateRecord`. To create one with no external ID,\nuse `createRecord`.\n\n## Send a complete record\n\nBecause the record may not exist yet, `fields` has to contain everything needed to **create** one, not\njust the fields being changed. A payload that would be a valid partial update can still fail here if the\nrecord turns out to be new and a required field is missing. `fields` accepts either a native JSON object\nor a stringified JSON object. Stringified values are parsed and validated before the request; malformed or\nnon-object values are rejected before NetSuite is called.\n\nUse the camel case REST field names from `getRecordDefinitions`. Reference fields take an object holding\nthe related record\'s ID, such as `"subsidiary": { "id": "1" }`.\n\nThat includes any **mandatory custom fields**, which are account-specific and are not marked as required\nanywhere in `getRecordDefinitions`. Omitting one fails with a message naming the field\'s UI label rather\nthan its script ID, for example *"Please enter value(s) for: Group Number."* List them with\n`runSuiteQLQuery`:\n\n```sql\nSELECT scriptid, name, fieldvaluetype FROM customfield WHERE ismandatory = \'T\'\n```\n\nThe script IDs come back upper case; send the lower-case form, so `CUSTENTITY_GROUPNUMBER_` becomes\n`custentity_groupnumber_`.\n\n## The response does not say which happened\n\nA successful upsert returns **HTTP 204 with no content**, and the status code is the same whether a record\nwas created or an existing one updated. The `Location` header, surfaced here as `id`, gives the internal\nID either way.\n\nIf the distinction matters, check for the record first with `searchRecords` using a query such as\n`externalId IS "GRP132"`, or read it back with `getRecord` using `eid:` followed by the external ID.\n\nCheck `warning` and `propertyValidation` on the result — NetSuite can return 204 while silently ignoring\nindividual fields, so a 204 alone does not prove every field was applied. Both are `null` when there was\nnothing to report.\n\nReference: [Using the Upsert Operation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156335203191.html)\n',
		accounts: { netsuite: { scope: [] } },
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
				recordType: {
					type: 'string',
					description:
						'Script ID of the record type to create or update, for example `customer` or `salesOrder`. Use the Get record definitions endpoint to confirm the item route accepts a `put` operation.',
				},
				externalId: {
					type: 'string',
					description:
						"The record's external ID, supplied **without** the `eid:` prefix — this endpoint adds it. For example `GRP132`. If a record of this type already carries this external ID it is updated; otherwise a new record is created with it.",
				},
				fields: {
					description:
						'The field names and values to write, as a JSON object — for example `{"companyName": "Acme Ltd", "subsidiary": {"id": "1"}}`. Use the camel case REST field names from the Get record definitions endpoint. Reference fields take an object containing the related record\'s ID. Because the record may not exist yet, include every field required to create one, not just the ones being changed.',
				},
				replace: {
					type: 'array',
					description:
						'Names of sublists whose existing lines should be replaced entirely by the lines in this request, instead of being merged with them. Also used together with `replaceSelectedFields` to restrict which null body fields are cleared.',
					items: {
						type: 'string',
						description:
							'A single sublist name such as `addressBook`, `subrecord.sublist` for a sublist on a subrecord, or a body field name when narrowing deletion via `replaceSelectedFields`.',
					},
				},
				replaceSelectedFields: {
					type: 'boolean',
					description:
						'Set to true to apply only the null values whose field names are listed in `replace`, ignoring any other nulls in the payload. Off by default, in which case every field sent as `null` is cleared. This narrows clearing rather than enabling it.',
				},
			},
			required: ['recordType', 'externalId', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'Internal ID of the created or updated record, taken from the final segment of the `Location` header. The same value is returned whether the record was created or updated.',
				},
				location: {
					type: 'string',
					description:
						'Absolute URL of the created or updated record, as returned in the `Location` response header.',
				},
				statusCode: {
					type: 'number',
					description:
						'HTTP status code of the response. A successful upsert returns 204, since NetSuite sends no response body. The code does not distinguish a create from an update.',
				},
				warning: {
					type: 'string',
					description:
						'Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none.',
				},
				propertyValidation: {
					type: 'string',
					description:
						'Description of any property validation failure, from the `X-NetSuite-PropertyValidation` header. Absent when every supplied field validated cleanly.',
				},
			},
			required: [],
		},
	},
];
