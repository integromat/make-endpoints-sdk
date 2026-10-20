// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route. It forwards an arbitrary call (method, path, query string, headers, and body) to the Salesforce REST API, mirroring the Make an API Call module.\n\nThe request URL is `{instanceUrl}/services/data/` plus the URL parameter. For example, URL `/v66.0/query` calls `https://{instance}.salesforce.com/services/data/v66.0/query`. Authentication is handled by the connection.\n\nTo get the next page of Search records (SOQL) or List Chatter subjects, use GET and set URL to the `nextRecordsUrl` or `nextPageUrl` from the previous response, unchanged. A leading `/services/data/` in the URL is removed, so that path works as returned.\n\nThe request is sent with `Content-Type: application/json` unless you add your own `Content-Type` header. A POST or PATCH with a JSON body does not need a header.\n\nRefer to the [Salesforce REST API reference](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm) for available resources.',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
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
						'Enter the path that comes after the org instance URL and /services/data. For example, /v66.0/query. To get a next page, enter the Next records URL or Next page URL from the previous response unchanged. A leading /services/data/ is removed. Authorization is added for you.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. Content-Type is sent as application/json unless you add a Content-Type header. You don't have to add authorization headers; we already did that for you.",
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
						'The HTTP request body. This input is ignored when the method is GET.',
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
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'createRecord',
		label: 'Create a record',
		description: 'Creates a new record in an object.',
		context:
			'---\nname: createRecord\ndescription: Creates a new record in an object.\n---\n\nPOST `/sobjects/{sObject}` with a JSON object of field API names. Call `describeObject` first and send only fields where `createable` is true.\n\nDo not send `Id`. Salesforce returns the new record Id.\n\nOptional Auto assign maps to the `Sforce-Auto-Assign` header. Leave it empty to keep the org default.\n\nObject type keeps only letters, digits, and underscores. Any other character is removed before the request is sent, so a malformed value returns a Salesforce error or 404.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				sObject: {
					type: 'string',
					description:
						'Salesforce object API name. For example, `Account`, `Contact`, or `Lead`. Letters, digits, and underscores only; other characters are removed. Use Describe an object to see which fields are createable.',
				},
				fields: {
					description:
						'JSON object of field API names and values to set on the new record. For example, `{"LastName": "Smith", "Email": "smith@example.com"}` for a Contact. Do not include `Id`.',
				},
				autoAssign: {
					type: 'string',
					description:
						'Whether Salesforce assignment rules run for this record. Leave empty to use the org default. `Yes` sends `Sforce-Auto-Assign: TRUE`. `No` sends `FALSE`.',
					default: '',
					enum: ['', 'TRUE', 'FALSE'],
				},
			},
			required: ['sObject', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'ID of the record Salesforce created.' },
				success: { type: 'boolean', description: 'Whether Salesforce created the record.' },
				errors: {
					type: 'array',
					description: 'Errors returned by Salesforce. Empty on success.',
					items: { description: 'One Salesforce error object.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'deleteRecord',
		label: 'Delete a record',
		description: 'Deletes a record.',
		context:
			'---\nname: deleteRecord\ndescription: Deletes a record.\n---\n\nDELETE `/sobjects/{sObject}/{recordId}`. Success is HTTP 204 with no body. A second call for the same Id returns 404.\n\nObject type keeps only letters, digits, and underscores, and Record ID keeps only letters and digits. Any other character is removed before the request is sent, so a malformed value returns a Salesforce error or 404.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				sObject: {
					type: 'string',
					description:
						'Salesforce object API name of the record to delete. For example, Account or Contact. Letters, digits, and underscores only; other characters are removed.',
				},
				recordId: {
					type: 'string',
					description:
						'Salesforce record Id to delete, 15 or 18 letters and digits. Other characters are removed. This permanently deletes the record or moves it to the Recycle Bin, depending on the object.',
				},
			},
			required: ['sObject', 'recordId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'describeObject',
		label: 'Describe an object',
		description: 'Returns field definitions for one Salesforce object.',
		context:
			'---\nname: describeObject\ndescription: Returns field definitions for one Salesforce object.\n---\n\nGET `/sobjects/{sObject}/describe`. This is the field definition for every record endpoint. It replaces the module RPCs that only reshaped this same response: list object fields, external-id field names, and filter fields.\n\nOn each field, read `name`, `label`, `type`, `createable`, `updateable`, `nillable`, `externalId`, `unique`, `filterable`, `relationshipName`, `referenceTo`, and `picklistValues`. Salesforce also returns other describe properties on the same objects.\n\nUse `externalId` true as External ID field for Create or update a record. Use `filterable` and `type` when writing a SOQL WHERE clause. Use `relationshipName` for related names, for example `Owner.Name`.\n\nObject type keeps only letters, digits, and underscores. Any other character is removed before the request is sent, so a malformed value returns a Salesforce error or 404.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				sObject: {
					type: 'string',
					description:
						'Salesforce object API name to describe. For example, Account, Contact, or Lead. Letters, digits, and underscores only; other characters are removed. Use List object types to discover names.',
				},
			},
			required: ['sObject'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				actionOverrides: {
					type: 'array',
					description: 'Action override definitions for the object.',
					items: { description: 'One Salesforce action override definition.' },
				},
				activateable: {
					type: 'boolean',
					description: 'Whether records of this object can be activated.',
				},
				associateEntityType: {
					type: 'string',
					description: 'Associate entity type of the object. Null when not applicable.',
				},
				associateParentEntity: {
					type: 'string',
					description: 'Parent entity of the associate entity. Null when not applicable.',
				},
				childRelationships: {
					type: 'array',
					description: 'Child relationship definitions for the object.',
					items: { description: 'One Salesforce child relationship definition.' },
				},
				compactLayoutable: {
					type: 'boolean',
					description: 'Whether compact layouts are available.',
				},
				createable: {
					type: 'boolean',
					description: 'Whether records of this object can be created.',
				},
				custom: { type: 'boolean', description: 'Whether this is a custom object.' },
				customSetting: {
					type: 'boolean',
					description: 'Whether this object is a custom setting.',
				},
				deepCloneable: {
					type: 'boolean',
					description: 'Whether records support deep cloning.',
				},
				defaultImplementation: {
					type: 'string',
					description:
						'Default implementation of the object when it is an interface. Null when not applicable.',
				},
				deletable: {
					type: 'boolean',
					description: 'Whether records of this object can be deleted.',
				},
				deprecatedAndHidden: {
					type: 'boolean',
					description: 'Whether the object is deprecated and hidden.',
				},
				extendedBy: {
					type: 'string',
					description: 'Objects that extend this object. Null when not applicable.',
				},
				extendsInterfaces: {
					type: 'string',
					description: 'Interfaces that this object extends. Null when not applicable.',
				},
				feedEnabled: {
					type: 'boolean',
					description: 'Whether feeds are enabled for the object.',
				},
				fields: {
					type: 'array',
					description: 'Complete Salesforce field definitions for the object.',
					items: { description: 'One complete Salesforce field definition.' },
				},
				hasSubtypes: { type: 'boolean', description: 'Whether the object has subtypes.' },
				implementedBy: {
					type: 'string',
					description:
						'Objects that implement this object when it is an interface. Null when not applicable.',
				},
				implementsInterfaces: {
					type: 'string',
					description:
						'Interfaces that this object implements. Null when not applicable.',
				},
				isInterface: {
					type: 'boolean',
					description: 'Whether the object is an interface.',
				},
				isSubtype: { type: 'boolean', description: 'Whether the object is a subtype.' },
				keyPrefix: {
					type: 'string',
					description: 'Three-character record ID prefix, when available.',
				},
				label: { type: 'string', description: 'Singular object label.' },
				labelPlural: { type: 'string', description: 'Plural object label.' },
				layoutable: { type: 'boolean', description: 'Whether layouts are available.' },
				listviewable: {
					type: 'boolean',
					description: 'Whether list views are available, when returned by Salesforce.',
				},
				lookupLayoutable: {
					type: 'boolean',
					description:
						'Whether lookup layouts are available, when returned by Salesforce.',
				},
				mergeable: { type: 'boolean', description: 'Whether records can be merged.' },
				mruEnabled: {
					type: 'boolean',
					description: 'Whether most-recently-used tracking is enabled.',
				},
				name: { type: 'string', description: 'Object API name.' },
				namedLayoutInfos: {
					type: 'array',
					description: 'Named layout definitions.',
					items: { description: 'One Salesforce named layout definition.' },
				},
				networkScopeFieldName: {
					type: 'string',
					description: 'Network scope field API name, when applicable.',
				},
				queryable: {
					type: 'boolean',
					description: 'Whether the object can be queried with SOQL.',
				},
				recordTypeInfos: {
					type: 'array',
					description: 'Record type definitions for the object.',
					items: { description: 'One Salesforce record type definition.' },
				},
				replicateable: {
					type: 'boolean',
					description: 'Whether records can be replicated.',
				},
				retrieveable: { type: 'boolean', description: 'Whether records can be retrieved.' },
				searchLayoutable: {
					type: 'boolean',
					description: 'Whether search layouts are available.',
				},
				searchable: {
					type: 'boolean',
					description: 'Whether the object can be searched with SOSL.',
				},
				sobjectDescribeOption: {
					type: 'string',
					description: 'Level of detail of this describe response, for example FULL.',
				},
				supportedScopes: {
					type: 'array',
					description: 'Supported data scopes for the object.',
					items: { description: 'One Salesforce supported scope definition.' },
				},
				triggerable: { type: 'boolean', description: 'Whether triggers are supported.' },
				undeletable: {
					type: 'boolean',
					description: 'Whether deleted records can be restored.',
				},
				updateable: { type: 'boolean', description: 'Whether records can be updated.' },
				urls: { description: 'URLs for object metadata and record operations.' },
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'getRecord',
		label: 'Get a record',
		description: 'Returns information about a specific record by its record ID.',
		context:
			"---\nname: getRecord\ndescription: Returns the Salesforce query response for a specific record ID.\n---\n\nRuns `SELECT FIELDS(ALL) FROM {sObject} WHERE Id = '{recordId}' LIMIT 1` on `/query` and returns the unmodified Salesforce query response.\n\n`FIELDS(ALL)` requires a LIMIT of 200 or less. This endpoint always sends `LIMIT 1`. A well-formed ID that matches nothing returns `totalSize` 0 and an empty `records` array. A malformed ID returns a 400 `invalid ID field` error.\n\nObject type keeps only letters, digits, and underscores, and Record ID keeps only letters and digits. Any other character is removed before the request is sent, so a malformed value returns a Salesforce error or 404.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm",
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				sObject: {
					type: 'string',
					description:
						'Salesforce object API name. For example, `Account`, `Contact`, or `Lead`. Letters, digits, and underscores only; other characters are removed. Use List object types to discover names.',
				},
				recordId: {
					type: 'string',
					description:
						'Salesforce record Id, 15 or 18 letters and digits. Other characters are removed. For example, `001xx000003DGb2AAG`.',
				},
			},
			required: ['sObject', 'recordId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				totalSize: { type: 'number', description: 'Number of records the query matched.' },
				done: { type: 'boolean', description: 'Whether this is the last page of results.' },
				nextRecordsUrl: {
					type: 'string',
					description: 'Path for the next page, when present.',
				},
				records: {
					type: 'array',
					description:
						'Matching Salesforce records, including their attributes metadata.',
					items: {
						description:
							'One Salesforce record with attributes metadata and object-specific fields.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'listChatterSubjects',
		label: 'List Chatter subjects',
		description: 'Returns Chatter users or groups that can parent a feed post.',
		context:
			"---\nname: listChatterSubjects\ndescription: Returns a Salesforce Chatter users or groups page.\n---\n\nGET `/chatter/users` or `/chatter/groups`, depending on Resource, and returns the unmodified Salesforce page. Use each user's or group's `id` as Subject ID on Post a message to a Chatter feed.\n\nThe response contains `users` for Resource Users or `groups` for Resource Groups. When `nextPageUrl` is set, call `arbitraryCall` with GET and set URL to the `nextPageUrl` from the response, unchanged.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_list.htm",
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				resource: {
					type: 'string',
					description:
						'Which Chatter subjects to list. Users returns people. Groups returns Chatter groups. To post on a record, or as the connected user, skip this endpoint and pass the record Id or me to Post a message to a Chatter feed.',
					enum: ['users', 'groups'],
				},
			},
			required: ['resource'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				currentPageToken: {
					type: 'string',
					description: 'Token of the current page, when returned.',
				},
				currentPageUrl: { type: 'string', description: 'Path of the current page.' },
				nextPageToken: {
					type: 'string',
					description: 'Token of the next page, when available.',
				},
				nextPageUrl: {
					type: 'string',
					description:
						'Path of the next page, when available. To get the next page, call Arbitrary call with GET and this value as URL, unchanged.',
				},
				previousPageToken: {
					type: 'string',
					description: 'Token of the previous page, when available.',
				},
				previousPageUrl: {
					type: 'string',
					description: 'Path of the previous page, when available.',
				},
				total: { type: 'number', description: 'Total number of matching subjects.' },
				users: {
					type: 'array',
					description: 'Complete Salesforce Chatter user resources for this page.',
					items: { description: 'One complete Salesforce Chatter user resource.' },
				},
				groups: {
					type: 'array',
					description: 'Complete Salesforce Chatter group resources for this page.',
					items: { description: 'One complete Salesforce Chatter group resource.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'listObjectTypes',
		label: 'List object types',
		description: 'Returns Salesforce object types in the org.',
		context:
			'---\nname: listObjectTypes\ndescription: Returns Salesforce global object metadata.\n---\n\nGET `/sobjects/` and returns the unmodified Salesforce global describe response. Read object definitions from `sobjects`; each item includes its API name and capability flags.\n\nFilter `sobjects` yourself. For example, keep items with `queryable` true before Search records (SOQL), and `createable` true before Create a record.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				encoding: {
					type: 'string',
					description: 'Character encoding used by the organization.',
				},
				maxBatchSize: { type: 'number', description: 'Maximum supported batch size.' },
				sobjects: {
					type: 'array',
					description:
						'Complete Salesforce object type definitions returned by global describe.',
					items: { description: 'One complete Salesforce object type definition.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'postChatterFeedMessage',
		label: 'Post a message to a Chatter feed',
		description: 'Posts a message to a Chatter feed.',
		context:
			'---\nname: postChatterFeedMessage\ndescription: Posts a message to a Chatter feed.\n---\n\nPOST `/chatter/feed-elements` as a FeedItem with one text segment and return the unmodified Salesforce feed element.\n\n`subjectId` is a user ID, group ID, record ID, or `me` for the connected user. Use `listChatterSubjects` when you need a user or group ID.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				subjectId: {
					type: 'string',
					description:
						'Id of the user, group, or record that parents the feed item. Use me to post to the connected user. Use List Chatter subjects to find a user or group id.',
				},
				text: {
					type: 'string',
					description:
						'Text of the Chatter post. One text segment is sent. The feed item body limit is 10000 characters.',
				},
			},
			required: ['subjectId', 'text'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				actor: { description: 'User or entity that created the feed element.' },
				body: { description: 'Feed element body and message segments.' },
				capabilities: { description: 'Capabilities available for the feed element.' },
				clientInfo: { description: 'Client application information.' },
				createdDate: {
					type: 'string',
					description: 'Date and time the feed element was created.',
				},
				event: {
					type: 'boolean',
					description: 'Whether the feed element represents an event.',
				},
				feedElementType: { type: 'string', description: 'Salesforce feed element type.' },
				hasVerifiedComment: {
					type: 'boolean',
					description: 'Whether the feed element has a verified comment.',
				},
				header: { description: 'Rendered feed element header.' },
				id: { type: 'string', description: 'Salesforce feed element ID.' },
				isDeleteRestricted: {
					type: 'boolean',
					description: 'Whether deletion is restricted.',
				},
				isSharable: {
					type: 'boolean',
					description: 'Whether the feed element can be shared.',
				},
				modifiedDate: {
					type: 'string',
					description: 'Date and time the feed element was last modified.',
				},
				originalFeedItem: {
					description: 'Original feed item when this item references another item.',
				},
				originalFeedItemActor: { description: 'Actor of the original feed item.' },
				parent: { description: 'Parent user, group, or record resource.' },
				photoUrl: {
					type: 'string',
					description: 'Photo URL associated with the feed element.',
				},
				relativeCreatedDate: {
					type: 'string',
					description: 'Human-readable relative creation time.',
				},
				type: { type: 'string', description: 'Feed item type.' },
				url: { type: 'string', description: 'Salesforce API path for the feed element.' },
				visibility: { type: 'string', description: 'Feed element visibility.' },
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'searchRecordsSoql',
		label: 'Search records (SOQL)',
		description: 'Returns a list of records using a SOQL query.',
		context:
			'---\nname: searchRecordsSoql\ndescription: Returns the Salesforce response for a SOQL query.\n---\n\nRuns one SOQL query through `/query`, or `/queryAll` when Include deleted records is true, and returns the unmodified Salesforce query response.\n\nThis endpoint does not page automatically. Put `LIMIT` and `ORDER BY` in the query. When `done` is false, call `arbitraryCall` with GET and set URL to the `nextRecordsUrl` from the response, unchanged.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				includeDeleted: {
					type: 'boolean',
					description:
						'Whether to include deleted and archived records. When enabled, the call uses /queryAll instead of /query. Permanently deleted records cannot be retrieved.',
					default: false,
				},
				query: {
					type: 'string',
					description:
						'A SOQL query to run. For example, SELECT Id, Name FROM Account ORDER BY Name LIMIT 10. Include LIMIT and ORDER BY yourself. This endpoint returns one page. To get the next page, call Arbitrary call with the Next records URL from the response.',
				},
			},
			required: ['query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				totalSize: { type: 'number', description: 'Number of records the query matched.' },
				done: { type: 'boolean', description: 'Whether this is the last page of results.' },
				nextRecordsUrl: {
					type: 'string',
					description:
						'Path for the next page, when present. To get the next page, call Arbitrary call with GET and this value as URL, unchanged.',
				},
				records: {
					type: 'array',
					description:
						'Salesforce records returned on this page, including attributes metadata.',
					items: {
						description:
							'One Salesforce record with attributes metadata and query-selected fields.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'searchRecordsSosl',
		label: 'Search records (SOSL)',
		description: 'Returns a list of records using a SOSL query.',
		context:
			'---\nname: searchRecordsSosl\ndescription: Returns the Salesforce response for a SOSL query.\n---\n\nRuns one SOSL search on `/search` and returns the unmodified Salesforce search response. The `RETURNING` clause decides which objects and fields are included in `searchRecords`.\n\nUse this endpoint to find record IDs by text. For a structured filter, use `searchRecordsSoql`.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'A SOSL query to run. For example, `FIND {Acme} IN NAME FIELDS RETURNING Account(Id, Name)`. The `RETURNING` clause decides which objects and fields come back.',
				},
			},
			required: ['query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				searchRecords: {
					type: 'array',
					description:
						'Salesforce records that matched the SOSL query, including attributes metadata.',
					items: {
						description:
							'One Salesforce record with attributes metadata and SOSL-selected fields.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'updateRecord',
		label: 'Update a record',
		description: 'Updates an existing record in an object.',
		context:
			'---\nname: updateRecord\ndescription: Updates an existing record in an object.\n---\n\nPATCH `/sobjects/{sObject}/{recordId}`. Salesforce PATCH is partial: omitted fields are unchanged. GET the record first when you need to inspect its current values, then send only fields that should change. Call `describeObject` and use fields where `updateable` is true.\n\nSuccess is HTTP 204 with no body. Optional Auto assign maps to the `Sforce-Auto-Assign` header.\n\nObject type keeps only letters, digits, and underscores, and Record ID keeps only letters and digits. Any other character is removed before the request is sent, so a malformed value returns a Salesforce error or 404.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
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
				sObject: {
					type: 'string',
					description:
						'Salesforce object API name. For example, `Account`, `Contact`, or `Lead`. Letters, digits, and underscores only; other characters are removed. Use Describe an object to see which fields are updateable.',
				},
				recordId: {
					type: 'string',
					description:
						'Salesforce record Id of the record to update, 15 or 18 letters and digits. Other characters are removed.',
				},
				fields: {
					description:
						'JSON object of field API names and values to change. Only the fields you send are updated. For example, `{"Phone": "555-0100"}`.',
				},
				autoAssign: {
					type: 'string',
					description:
						'Whether Salesforce assignment rules run for this record. Leave empty to use the org default. `Yes` sends `Sforce-Auto-Assign: TRUE`. `No` sends `FALSE`.',
					default: '',
					enum: ['', 'TRUE', 'FALSE'],
				},
			},
			required: ['sObject', 'recordId', 'fields'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'salesforce',
		appVersion: 4,
		endpointName: 'upsertRecord',
		label: 'Create or update a record',
		description: 'Creates a new record or updates an existing one matched by an external ID.',
		context:
			'---\nname: upsertRecord\ndescription: Creates or updates a record matched by an external ID.\n---\n\nPATCH `/sobjects/{sObject}/{fieldName}/{externalId}`. Salesforce PATCH is partial: omitted fields are unchanged. GET or search for the record first when you need to inspect current values. This endpoint covers only the external-ID upsert; use `createRecord` when no external ID is available.\n\nIn API v46.0 and later, Salesforce returns HTTP 200 with an upsert result when it updates one matching record and HTTP 201 with an upsert result when it creates a record. Read `created` to distinguish the outcomes. More than one match returns HTTP 300 and changes nothing.\n\n`fieldName` must have `externalId` true in `describeObject`. Do not repeat that field inside Fields.\n\nObject type and External ID field keep only letters, digits, and underscores. A `/` is removed from External ID. Removed characters are not reported, so a malformed value returns a Salesforce error or 404.\n\nhttps://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_patch.htm',
		accounts: { salesforce: { scope: [] }, salesforce2: { scope: [] } },
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
				sObject: {
					type: 'string',
					description:
						'Salesforce object API name. For example, Account or Contact. Letters, digits, and underscores only; other characters are removed. Use Describe an object and keep a field whose externalId flag is true.',
				},
				fieldName: {
					type: 'string',
					description:
						'API name of the external ID field used to match the record. For example, External_Id__c. The field must be marked as an external ID on the object. Letters, digits, and underscores only; other characters are removed.',
				},
				externalId: {
					type: 'string',
					description:
						'Value of the external ID field to match. Salesforce updates the record when one match exists, and creates a record when none exists. More than one match returns an error and changes nothing. A `/` is removed.',
				},
				fields: {
					description:
						'JSON object of field API names and values to write. Do not include the external ID field in this object; it is taken from External ID. For example, {"Name": "Acme"}.',
				},
				autoAssign: {
					type: 'string',
					description:
						'Whether Salesforce assignment rules run for this record. Leave empty to use the org default. Yes sends Sforce-Auto-Assign TRUE. No sends FALSE.',
					default: '',
					enum: ['', 'TRUE', 'FALSE'],
				},
			},
			required: ['sObject', 'fieldName', 'externalId', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'ID of the record Salesforce created or updated.',
				},
				success: {
					type: 'boolean',
					description: 'Whether Salesforce processed the upsert successfully.',
				},
				created: {
					type: 'boolean',
					description:
						'Whether Salesforce created a new record instead of updating an existing record.',
				},
				errors: {
					type: 'array',
					description: 'Errors returned by Salesforce. Empty on success.',
					items: { description: 'One Salesforce error object.' },
				},
			},
			required: [],
		},
	},
];
