// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'addContactToWorkflow',
		label: 'Add a contact to a workflow',
		description: 'Enrolls a contact into a HubSpot workflow (automation flow).',
		context:
			"Enrolls a contact email in a legacy HubSpot workflow.\n\nPOST `/automation/v2/workflows/{workflowId}/enrollments/contacts/{email}` with no request body. Required scope: `automation`. A workflow that uses sensitive contact properties also requires `crm.objects.contacts.sensitive.write`.\n\n- Pass the numeric legacy `workflowId`. If you only have the workflow editor's `flowId`, call `getWorkflowIdMapping` first and use `results[0].workflowId`.\n- Only contact-based workflows that allow API enrollment are supported.\n- Success is HTTP 204 with an empty body. The output has no fields.\n- A later call with the same email and workflow can enroll the contact again when that workflow allows re-enrollment.\n\nDocs: https://developers.hubspot.com/docs/api-reference/legacy/automation/workflows/v2/enroll-contact\n",
		accounts: { hubspotcrm: { scope: ['automation'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				workflowId: {
					type: 'number',
					description:
						'The legacy numeric workflow ID. Use Get a workflow ID mapping if you only have a flow ID.',
				},
				email: {
					type: 'string',
					description: 'The email address of the contact to enroll.',
				},
			},
			required: ['workflowId', 'email'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'addListMembers',
		label: 'Add members to a list',
		description:
			"Adds one or more records to a static HubSpot list. This modern v3 endpoint works for contact lists as well as company/deal lists, replacing the legacy contacts-only 'add to list' endpoint.",
		context:
			'Adds records to a HubSpot list with `PUT /crm/v3/lists/{listId}/memberships/add`.\n\nRequired OAuth scopes: `crm.lists.read` and `crm.lists.write`.\n\n- The target list must have a `processingType` of `MANUAL` or `SNAPSHOT`. HubSpot manages `DYNAMIC` list membership from its filters and rejects manual membership changes.\n- The list determines the CRM object type; do not pass an object type separately.\n- Send `recordIds` as the raw JSON request body array, not inside an object.\n- Records that do not exist or are already list members are ignored and reported in the response as applicable.\n\nDocs: https://developers.hubspot.com/docs/api-reference/crm-lists-v3/memberships/put-crm-v3-lists-listId-memberships-add\n',
		accounts: { hubspotcrm: { scope: ['crm.lists.write', 'crm.lists.read'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				listId: {
					type: 'string',
					description:
						'The HubSpot internal ID of the MANUAL or SNAPSHOT list to add records to.',
				},
				recordIds: {
					type: 'array',
					description: 'IDs of the CRM records to add to the list.',
					items: {
						type: 'string',
						description: 'The ID of a CRM record to add to the list.',
					},
				},
			},
			required: ['listId', 'recordIds'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				recordsIdsAdded: {
					type: 'array',
					description: 'IDs of records added to the list.',
					items: { type: 'string', description: 'The ID of a record added to the list.' },
				},
				recordIdsRemoved: {
					type: 'array',
					description: 'IDs of records removed from the list.',
					items: {
						type: 'string',
						description: 'The ID of a record removed from the list.',
					},
				},
				recordIdsMissing: {
					type: 'array',
					description: 'IDs that did not exist and could not be added or removed.',
					items: {
						type: 'string',
						description: 'The ID of a record that HubSpot could not find.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description:
			'Performs an arbitrary authorized API call to the HubSpot CRM API, similar to the app\'s "Make an API Call" module.',
		context:
			"Performs an arbitrary authorized HTTP call against HubSpot's API when no dedicated endpoint covers the operation.\n\n- For API details, see the [HubSpot API reference](https://developers.hubspot.com/docs/api/overview).\n- GET example: set `method` to `GET` and `url` to `/crm/v3/owners/`.\n- `url` is resolved via `prependURLSlash()` against `https://api.hubapi.com` and checked against the endpoint blacklist. Absolute URLs and other hosts are not supported; use a dedicated endpoint such as `submitFormData` when an API uses another host.\n- URLs containing `/calendar/v1/events` or `/owners/v2` are deprecated and rejected before the request is sent.\n- Supply `qs` and `headers` as key/value pair arrays.\n- `body` must be a JSON object. A JSON string is not supported: it is sent as a single string value and HubSpot returns a `400` `Invalid input JSON` error.\n- If the selected connection is missing a scope required by the requested API route, edit the connection, add that scope under **Additional Scopes**, and reconnect if prompted.\n- The response includes `statusCode`, `headers`, and `body` only for 2xx statuses. A non-2xx status is returned as an error in the form `[statusCode] message`, with no `statusCode`, `headers`, or `body` output. Read the error message, correct the request, and retry.\n- HubSpot rejects these requests, so do not send them:\n  - Calls: `hs_is_voice_agent_call` is a read-only property and cannot be set (`READ_ONLY_VALUE`).\n  - Forms: `lifecyclestage` cannot be a form field in a form definition (`FIELD_HAS_EXTERNAL_OPTIONS`). Set the lifecycle stage with `selectedExternalOptions` in the legacy v2 Forms API, or with `configuration.lifecycleStages` in the v3 Forms API.\n- To inspect a property definition (type, options, group), use the `getRecordProperty` endpoint.\n",
		accounts: { hubspotcrm: { scope: [] } },
		annotations: { openWorldHint: false, arbitraryCallHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Path relative to `https://api.hubapi.com`. For example, `/crm/v3/owners/`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						'HTTP request headers. Authorization is added automatically. `Content-Type` defaults to `application/json` unless set here.',
					items: {
						type: 'object',
						properties: {
							key: { type: 'string', description: 'The HTTP request header name.' },
							value: {
								type: 'string',
								description: 'The HTTP request header value.',
							},
						},
						required: ['key'],
					},
				},
				qs: {
					type: 'array',
					description: 'HTTP request query parameters.',
					items: {
						type: 'object',
						properties: {
							key: { type: 'string', description: 'The query parameter name.' },
							value: { type: 'string', description: 'The query parameter value.' },
						},
						required: ['key'],
					},
				},
				body: {
					description:
						'The HTTP request body, as a JSON object. A JSON string is not supported and HubSpot returns a `400` error. Ignored for `GET` requests.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createAssociation',
		label: 'Create an association',
		description:
			'Associates two supported standard or custom CRM objects with one or more association types.',
		context:
			'Sets association labels between two supported CRM records with `PUT /crm/v4/objects/{fromObjectType}/{fromObjectId}/associations/{toObjectType}/{toObjectId}`.\n\n- `associationTypes` is sent as the raw JSON request body array, not wrapped in an object.\n- Association type IDs are directional. Use the type ID for the specified source-to-target direction.\n- Standard object types can use their API names or numeric object type IDs. For custom objects, use the `2-XXX` object type ID or a supported fully qualified name; a bare custom-object base name is not supported.\n- The Endpoint uses `crm.objects.contacts.write`, one OAuth scope alternative accepted by HubSpot for this generic association operation.\n\nDocs: https://developers.hubspot.com/docs/api-reference/legacy/crm/associations/associate-records/update-association-labeled\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fromObjectType: {
					type: 'string',
					description:
						"The source object's API name, numeric object type ID, or supported fully qualified custom-object name.",
				},
				fromObjectId: {
					type: 'string',
					description: 'The record ID of the source object.',
				},
				toObjectType: {
					type: 'string',
					description:
						"The target object's API name, numeric object type ID, or supported fully qualified custom-object name.",
				},
				toObjectId: { type: 'string', description: 'The record ID of the target object.' },
				associationTypes: {
					type: 'array',
					description:
						'One or more directional association types to apply between the two records.',
					items: {
						type: 'object',
						properties: {
							associationCategory: {
								type: 'string',
								description: 'The HubSpot category of the association type.',
								enum: [
									'HUBSPOT_DEFINED',
									'USER_DEFINED',
									'INTEGRATOR_DEFINED',
									'WORK',
								],
							},
							associationTypeId: {
								type: 'number',
								description:
									'The numeric ID of the association type for the specified source-to-target direction.',
							},
						},
						required: ['associationCategory', 'associationTypeId'],
					},
				},
			},
			required: [
				'fromObjectType',
				'fromObjectId',
				'toObjectType',
				'toObjectId',
				'associationTypes',
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				fromObjectTypeId: { type: 'string', description: 'Type ID of the source object.' },
				fromObjectId: { type: 'string', description: 'Record ID of the source object.' },
				toObjectTypeId: { type: 'string', description: 'Type ID of the target object.' },
				toObjectId: { type: 'string', description: 'Record ID of the target object.' },
				labels: {
					type: 'array',
					description: 'Association labels applied between the records.',
					items: { type: 'string', description: 'A label applied to the association.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createCall',
		label: 'Create a call',
		description:
			'Creates a call engagement with the given properties and returns the created object.',
		context:
			'Creates a call engagement with `POST /crm/objects/2026-03/calls`.\n\n- `properties` is a JSON object whose keys are HubSpot property internal names and whose values are strings.\n- `hs_timestamp` is required. Supply a Unix timestamp in milliseconds or a UTC/ISO timestamp.\n- `hs_is_voice_agent_call` cannot be set by third-party integrations and is removed from the request.\n- Use optional `associations` to create the call and associate it with existing CRM records in this single request. Association type IDs are directional.\n- Required OAuth scope: `crm.objects.contacts.write`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/calls/create-call\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of call property internal names and string values. `hs_timestamp` is required. `hs_is_voice_agent_call` cannot be set by third-party integrations and is removed.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new call in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the call.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the call and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the call-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created call.' },
				properties: { description: 'Property values returned for the created call.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the call was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the call was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the call is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the call was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created call, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the call.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the call.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createCommunication',
		label: 'Create a communication',
		description:
			'Creates a communication (e.g. a WhatsApp, SMS, or LinkedIn message log) with the given properties and returns the created object.',
		context:
			'Creates a communication log entry with `POST /crm/objects/2026-03/communications`.\n\n- `properties` is a JSON object whose keys are HubSpot property internal names and whose values are strings.\n- `hs_communication_channel_type` accepts `WHATS_APP`, `LINKEDIN_MESSAGE`, or `SMS`.\n- If supplied, `hs_communication_logged_from` must be `CRM`.\n- Use optional `associations` to create the communication and associate it with existing CRM records in this single request. Association type IDs are directional.\n- This API logs external communications; it does not create marketing SMS messages.\n- Required OAuth scope: `crm.objects.contacts.write`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/communications/create-communication\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of communication property internal names and string values. Channel type accepts `WHATS_APP`, `LINKEDIN_MESSAGE`, or `SMS`; `hs_communication_logged_from`, when supplied, must be `CRM`.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new communication in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record to associate with the communication.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the communication and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the communication-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created communication.' },
				properties: {
					description: 'Property values returned for the created communication.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the communication was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the communication was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the communication is archived.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time when the communication was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created communication, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the communication.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the communication.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createCompany',
		label: 'Create a company',
		description: 'Creates a company with the given properties and returns the created object.',
		context:
			'Creates a company with `POST /crm/objects/2026-03/companies`.\n\n- `properties` is a JSON object whose keys are HubSpot property internal names and whose values are strings.\n- Include at least `name` or `domain`. Prefer `domain` when available because HubSpot uses it as the primary company identifier and it helps reduce accidental duplicates.\n- Do not send calculated, nonexistent, or read-only properties. This Endpoint declares only the standard company-write scope; protected property values require separately approved sensitive-data scopes and are not covered.\n- Use optional `associations` to create the company and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/companies/create-company\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.companies.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of standard company property internal names and string values. Include at least `name` or `domain`; prefer `domain` when available.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new company in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record to associate with the company.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the company and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the company-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created company.' },
				properties: { description: 'Property values returned for the created company.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the company was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the company was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the company is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the company was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created company, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the company.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the company.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createContact',
		label: 'Create a contact',
		description: 'Creates a contact with the given properties and returns the created object.',
		context:
			"Creates a contact with `POST /crm/objects/2026-03/contacts`.\n\n- `properties` is a JSON object whose keys are HubSpot property internal names and whose values follow the API's string formatting for each property type.\n- Include at least one of `email`, `firstname`, or `lastname`. Prefer `email` when available because HubSpot uses it as the primary contact identifier and rejects a value already assigned to another contact.\n- Use internal enumeration option values and do not send calculated, nonexistent, or read-only properties. This Endpoint declares only the standard contact-write scope; protected property values require separately approved sensitive-data scopes and are not covered.\n- Use optional `associations` to create the contact and associate it with existing CRM records in this single request. Association type IDs are directional.\n- Use `upsertContact` instead when the contact may already exist.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/create-contact\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of standard contact property internal names and API-formatted string values. Include at least `email`, `firstname`, or `lastname`; prefer `email` when available.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new contact in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record to associate with the contact.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the contact and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the contact-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created contact.' },
				properties: { description: 'Property values returned for the created contact.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the contact was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the contact was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the contact is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the contact was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created contact, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the contact.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the contact.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createCustomObject',
		label: 'Create a custom object record',
		description:
			'Creates a custom object record with the given properties and returns the created object.',
		context:
			"Creates a custom object record with `POST /crm/objects/2026-03/{objectType}`.\n\n- `objectType` must be the custom object type ID (for example, `2-3465404`) or a fully qualified name in the form `p{HubID}_{object_name}` or `p_{object_name}`. A bare object base name is not supported.\n- `properties` is a JSON object whose keys are custom property internal names and whose values follow the API's string formatting for each property type. Include every property required by the custom object schema.\n- Use internal enumeration option values and do not send calculated, nonexistent, or read-only properties. This Endpoint declares only the standard custom-object write scope; protected property values require separately approved sensitive-data scopes and are not covered.\n- Use optional `associations` to create the record and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/custom-objects/create-custom-object\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.custom.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'The custom object type ID (for example, `2-3465404`) or fully qualified name in the form `p{HubID}_{object_name}` or `p_{object_name}`.',
				},
				properties: {
					description:
						'JSON object of custom property internal names and API-formatted string values. Include every property required by the custom object schema.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new custom object record in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record to associate with the custom object record.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the custom object record and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the custom-object-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['objectType', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique ID of the created custom object record.',
				},
				properties: {
					description: 'Property values returned for the created custom object record.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the custom object record was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the custom object record was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the custom object record is archived.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time when the custom object record was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description:
						'URL associated with the created custom object record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the custom object record.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the custom object record.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createDeal',
		label: 'Create a deal',
		description: 'Creates a deal with the given properties and returns the created object.',
		context:
			"Creates a deal with `POST /crm/objects/2026-03/deals`.\n\n- `properties` is a JSON object whose keys are deal property internal names and whose values follow the API's string formatting for each property type. Include `dealname` and `dealstage`; provide `pipeline` to select a non-default pipeline.\n- Use internal pipeline IDs, stage IDs, and enumeration option values rather than display labels. Multi-select values are semicolon-delimited; date and datetime values must use HubSpot's documented formats.\n- Do not send calculated, nonexistent, or read-only properties. This Endpoint declares only the standard deal-write scope; protected property values require separately approved sensitive-data scopes and are not covered.\n- Use optional `associations` to create the deal and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/deals/create-deal\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of deal property internal names and API-formatted string values. Include `dealname` and the internal `dealstage` ID; provide the internal `pipeline` ID to select a non-default pipeline.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new deal in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the deal.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the deal and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the deal-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created deal.' },
				properties: { description: 'Property values returned for the created deal.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the deal was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the deal was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the deal is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the deal was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created deal, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the deal.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the deal.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createEmail',
		label: 'Create an email',
		description:
			'Creates an email engagement with the given properties and returns the created object.',
		context:
			"Creates an email engagement with `POST /crm/objects/2026-03/emails`.\n\n- `properties` is a JSON object whose keys are email property internal names and whose values use HubSpot's string formats. Include required `hs_timestamp` and `hs_email_direction`.\n- `hs_timestamp` accepts Unix milliseconds or a UTC timestamp. `hs_email_direction` accepts `EMAIL`, `INCOMING_EMAIL`, or `FORWARDED_EMAIL`; `hs_email_status` accepts `BOUNCED`, `FAILED`, `SCHEDULED`, `SENDING`, or `SENT`.\n- Separate multiple `hs_attachment_ids` with semicolons. Supply `hs_email_headers` as a JSON-escaped string; header-derived properties such as `hs_email_from_email` and `hs_email_to_email` are read-only.\n- Do not send nonexistent or read-only properties. Use optional `associations` to create the email and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/emails/create-email\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of email property internal names and API-formatted string values. Include required `hs_timestamp` and `hs_email_direction`.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new email in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the email.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the email and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the email-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created email.' },
				properties: { description: 'Property values returned for the created email.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the email was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the email was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the email is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the email was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created email, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the email.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the email.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createEngagement',
		label: 'Create an engagement',
		description:
			'Creates an engagement (a call, email, meeting, note, or task) on an object in HubSpot.',
		context:
			"Creates one dynamically selected engagement type with `POST /crm/objects/2026-03/{objectType}`.\n\n- Prefer the type-specific Endpoint (`createCall`, `createEmail`, `createMeeting`, `createNote`, or `createTask`) when the engagement type is known in advance. Use this generic Endpoint when the type is selected dynamically.\n- `properties` is a JSON object whose keys are property internal names and whose values follow HubSpot's API string formats. Every supported type requires `hs_timestamp`; emails additionally require `hs_email_direction`.\n- Required and available properties differ by engagement type. Do not send calculated, nonexistent, or read-only properties, and use internal enumeration option values.\n- Use optional `associations` to create the engagement and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/using-object-apis\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'The engagement object type to create. Required properties vary by type.',
					enum: ['calls', 'emails', 'meetings', 'notes', 'tasks'],
				},
				properties: {
					description:
						'JSON object of engagement property internal names and API-formatted string values. Include `hs_timestamp` for every type and `hs_email_direction` for emails.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new engagement in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record to associate with the engagement.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the engagement and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the engagement-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['objectType', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created engagement.' },
				properties: { description: 'Property values returned for the created engagement.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the engagement was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the engagement was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the engagement is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the engagement was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created engagement, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the engagement.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the engagement.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createFolder',
		label: 'Create a folder',
		description: 'Creates a new file folder, optionally nested inside a parent folder.',
		context:
			'Creates a File Manager folder with `POST /files/2026-03/folders`.\n\n- Supply `name` and optionally identify an existing parent folder with either `parentFolderId` or `parentFolderPath`. Do not provide both parent fields.\n- Omit both parent fields to create the folder at the root level.\n- The returned `id` can be used as a parent folder ID for nested folders or by other file operations.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/files/guide#create-a-folder\n',
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				name: { type: 'string', description: 'Name of the new folder.' },
				parentFolderId: {
					type: 'string',
					description:
						'ID of the existing parent folder. Do not provide this together with `parentFolderPath`; leave both parent fields empty to create the folder at the root level.',
				},
				parentFolderPath: {
					type: 'string',
					description:
						'Path of the existing parent folder. Do not provide this together with `parentFolderId`; leave both parent fields empty to create the folder at the root level.',
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Folder ID.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the folder was created.',
				},
				archivedAt: {
					type: 'string',
					description: 'Date and time when the folder was archived.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the folder was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the folder is archived.' },
				parentFolderId: { type: 'string', description: 'ID of the parent folder.' },
				name: { type: 'string', description: 'Folder name.' },
				path: { type: 'string', description: "Folder path in HubSpot's file manager." },
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createLineItem',
		label: 'Create a line item',
		description:
			'Creates a line item with the given properties and returns the created object.',
		context:
			"Creates a line item with `POST /crm/objects/2026-03/line_items`.\n\n- `properties` is a JSON object whose keys are line-item property internal names and whose values follow HubSpot's API string formats. HubSpot recommends `name`, `quantity`, and `price` for a standard line item; `price` cannot be negative.\n- Use `hs_product_id` to create a product-backed line item. The created line item is a separate snapshot-like record whose values can be customized independently from the source product.\n- Associate a line item with only one parent record. Reusing one line item across parents such as a deal and quote can cause data loss when a parent is deleted.\n- Do not send calculated, nonexistent, or read-only properties. For tiered pricing, do not set `price` and ensure every tier range has a matching tier price.\n- Use optional `associations` to create the line item and associate it with a deal, quote, invoice, payment link, or subscription in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/line-items/create-line-item\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.line_items.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of line-item property internal names and API-formatted string values. HubSpot recommends `name`, `quantity`, and a non-negative `price` for standard line items.',
				},
				associations: {
					type: 'array',
					description:
						'A single parent CRM record to associate with the new line item in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing parent record to associate with the line item.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the line item and its parent record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the line-item-to-parent direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created line item.' },
				properties: { description: 'Property values returned for the created line item.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the line item was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the line item was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the line item is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the line item was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created line item, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the line item.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the line item.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createMeeting',
		label: 'Create a meeting',
		description:
			'Creates a meeting engagement with the given properties and returns the created object.',
		context:
			"Creates a CRM meeting engagement with `POST /crm/objects/2026-03/meetings`.\n\n- This logs a meeting activity on the CRM timeline; it does not schedule a calendar event. Use HubSpot's Scheduler API when an actual calendar event is required.\n- `properties` is a JSON object whose keys are meeting property internal names and whose values follow HubSpot's API string formats. Include `hs_timestamp`; when using `hs_meeting_start_time`, keep it equal to `hs_timestamp`.\n- Common optional properties include `hs_meeting_title`, `hs_meeting_end_time`, `hs_meeting_body`, `hs_internal_meeting_notes`, `hs_meeting_location`, `hs_meeting_external_url`, `hubspot_owner_id`, `hs_meeting_outcome`, and `hs_activity_type`.\n- Separate multiple `hs_attachment_ids` with semicolons. Do not send nonexistent or read-only properties.\n- Use optional `associations` to create the meeting and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/meetings/create-meeting\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of meeting property internal names and API-formatted string values. Include required `hs_timestamp`; keep `hs_meeting_start_time` equal to it when provided.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new meeting in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record to associate with the meeting.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the meeting and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the meeting-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created meeting.' },
				properties: { description: 'Property values returned for the created meeting.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the meeting was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the meeting was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the meeting is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the meeting was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created meeting, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the meeting.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the meeting.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createNote',
		label: 'Create a note',
		description:
			'Creates a note engagement with the given properties and returns the created object.',
		context:
			"Creates a CRM note engagement with `POST /crm/objects/2026-03/notes`. Required scope: `crm.objects.contacts.write`.\n\n- `properties` is a JSON object whose keys are note property internal names and whose values follow HubSpot's API string formats. Include required `hs_timestamp`; `hs_note_body` is optional and limited to 65,536 characters.\n- Set `hubspot_owner_id` to attribute the note to an owner. To attach existing HubSpot files, set `hs_attachment_ids` to their file IDs separated by semicolons; uploading the files is a separate operation.\n- Do not send nonexistent or read-only properties. Use optional `associations` to create the note and associate it with existing CRM records in this single request. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/notes/create-note\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of note property internal names and API-formatted string values. Include required `hs_timestamp`; separate multiple `hs_attachment_ids` with semicolons.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new note in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the note.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the note and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the note-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created note.' },
				properties: { description: 'Property values returned for the created note.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the note was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the note was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the note is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the note was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created note, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the note.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the note.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createOrder',
		label: 'Create an order',
		description: 'Creates an order with the given properties and returns the created object.',
		context:
			"Creates a completed-purchase order with `POST /crm/objects/2026-03/orders`.\n\n- Use a cart rather than an order for an in-progress or abandoned purchase.\n- `properties` is a JSON object whose keys are order property internal names and whose values follow HubSpot's API string formats. Common properties include `hs_order_name`, `hs_currency_code`, fulfillment and shipping fields, and pipeline fields.\n- Use internal enumeration values and valid date/datetime formats. Do not send nonexistent or read-only properties. Consider a unique external-order-ID property to prevent duplicate creation after an ambiguous retry.\n- Use optional `associations` to connect the order to records such as line items, contacts, companies, deals, invoices, payments, quotes, subscriptions, or tickets. Association type IDs are directional.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/orders/create-order\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.orders.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of order property internal names and API-formatted string values, such as `hs_order_name` and `hs_currency_code`.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new order in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the order.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the order and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the order-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created order.' },
				properties: { description: 'Property values returned for the created order.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the order was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the order was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the order is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the order was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created order, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the order.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the order.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createOrUpdateTimelineEvent',
		label: 'Create or update a timeline event',
		description:
			'Creates a new custom timeline event, or updates an existing one if an event with the same ID was already sent.',
		context:
			'Sends one legacy timeline-event instance with `POST /integrators/timeline/v3/events`.\n\n- This Endpoint works only for an eligible HubSpot public app that already owns the referenced legacy v1/v3 timeline event template. Private-app tokens and developer API keys cannot send event instances.\n- Supply the app-owned `eventTemplateId`, all template `tokens` (an empty object when the template has none), and a stable `id`. Reusing an ID for the same template updates/replaces that event; IDs must be unique per app and template.\n- Identify the target with at least one of `objectId`, `utk`, or `email`. For contacts, precedence is `objectId`, then `utk`, then `email`; non-contact templates require `objectId`.\n- `timestamp` defaults to submission time. Use `customObjectTypeId` for a custom-object template and optional `timelineIFrame` or `extraData` only when supported by the template.\n- This is a legacy API. After an event type is migrated to app events, HubSpot allows seven days to move occurrence calls to v4 before v1/v3 calls return 401.\n\nDocs: https://developers.hubspot.com/docs/api-reference/legacy/crm/extensions/timeline/events/create-timeline\n',
		accounts: { hubspotcrm: { scope: ['timeline'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				eventTemplateId: {
					type: 'string',
					description:
						'The ID of a legacy timeline event template owned by this public app.',
				},
				id: {
					type: 'string',
					description:
						'A stable identifier unique to this app and event template. Reusing it updates/replaces the existing event.',
				},
				tokens: {
					description:
						'JSON object containing every token defined by the event template; use an empty object when the template defines none.',
				},
				objectId: {
					type: 'string',
					description:
						'The target CRM record ID. Required for non-contact templates; for contacts it takes precedence over UTK and Email.',
				},
				utk: {
					type: 'string',
					description:
						'HubSpot user token identifying a contact. Provide at least one of Object ID, UTK, or Email.',
				},
				email: {
					type: 'string',
					description:
						'Contact email used when Object ID and UTK are unavailable. It can identify or create a contact.',
				},
				domain: {
					type: 'string',
					description: 'Event domain, commonly supplied together with UTK.',
				},
				timestamp: {
					type: 'string',
					description:
						'Date and time when the event occurred. HubSpot uses submission time when omitted.',
				},
				customObjectTypeId: {
					type: 'string',
					description:
						'Custom object type identifier when the template targets a custom object.',
				},
				timelineIFrame: {
					type: 'object',
					description: 'Optional iframe configuration displayed with the event.',
					properties: {
						linkLabel: {
							type: 'string',
							description: 'Text of the link that opens the iframe.',
						},
						headerLabel: {
							type: 'string',
							description: 'Heading displayed above the iframe.',
						},
						url: { type: 'string', description: 'HTTPS URL loaded in the iframe.' },
						width: { type: 'number', description: 'Iframe modal width in pixels.' },
						height: { type: 'number', description: 'Iframe modal height in pixels.' },
					},
					required: ['linkLabel', 'headerLabel', 'url', 'width', 'height'],
				},
				extraData: {
					description:
						"Additional JSON interpreted by the event template's detail section.",
				},
			},
			required: ['eventTemplateId', 'id', 'tokens'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Timeline event ID.' },
				eventTemplateId: {
					type: 'string',
					description: 'ID of the event template used by the event.',
				},
				email: {
					type: 'string',
					description: 'Email address used for a contact timeline event.',
				},
				objectId: {
					type: 'string',
					description: 'ID of the CRM object associated with the event.',
				},
				utk: { type: 'string', description: 'User token used to identify a contact.' },
				domain: { type: 'string', description: 'Event domain.' },
				timestamp: {
					type: 'string',
					description: 'Date and time when the event occurred.',
				},
				tokens: { description: 'Template token keys and values.' },
				extraData: { description: 'Additional event data interpreted by the template.' },
				timelineIFrame: {
					type: 'object',
					description: 'Iframe configuration displayed with the event.',
					properties: {
						linkLabel: { type: 'string', description: 'Text of the iframe link.' },
						headerLabel: { type: 'string', description: 'Iframe heading.' },
						url: { type: 'string', description: 'Iframe content URL.' },
						width: { type: 'number', description: 'Iframe width in pixels.' },
						height: { type: 'number', description: 'Iframe height in pixels.' },
					},
					required: [],
				},
				objectType: {
					type: 'string',
					description: 'CRM object type associated with the event template.',
				},
				customObjectTypeId: {
					type: 'string',
					description: 'Custom object type identifier associated with the event.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the event was created.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createProduct',
		label: 'Create a product',
		description: 'Creates a product with the given properties and returns the created object.',
		context:
			"Creates a reusable catalog product with `POST /crm/objects/2026-03/products`.\n\n- `properties` is a JSON object whose keys are product property internal names and whose values use HubSpot's API string formats. Common properties include `name`, `price`, `hs_sku`, `description`, `hs_cost_of_goods_sold`, and `hs_recurring_billing_period`.\n- Format `hs_recurring_billing_period` as `P#M`, where `#` is the number of months. For tiered pricing, send `hs_tier_ranges` and `hs_tier_prices` as serialized JSON strings and use a supported `hs_pricing_model`.\n- Products themselves cannot be associated with other CRM objects. Create a line item from a product when its information must be attached to a deal or quote.\n- This operation is not idempotent. Repeating it after an ambiguous response can create duplicate products.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/products/create-product\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.products.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of product property internal names and API-formatted string values, such as `name`, `price`, and `hs_sku`.',
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created product.' },
				properties: { description: 'Property values returned for the created product.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the product was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the product was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the product is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the product was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created product, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the product.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the product.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createQuote',
		label: 'Create a quote',
		description: 'Creates a quote with the given properties and returns the created object.',
		context:
			"Creates a Revenue Hub quote with `POST /crm/objects/2026-03/quotes`.\n\n- `properties` is a JSON object whose keys are quote property internal names and whose values follow HubSpot's API formats. At minimum, provide `hs_title`, `hs_expiration_date`, and `hs_template_type` set to `CPQ_QUOTE`.\n- A newly created quote starts in `DRAFT`. To publish and share it, associate line items, a contact, and a deal. Signature workflows also require a signing-contact association.\n- Use optional `associations` to connect the quote to line items, a deal, contacts, a company, or a quote template. Association type IDs are directional. A quote template can only be associated during creation.\n- Creating quotes requires an eligible Revenue Hub subscription or qualifying legacy access. This operation is not idempotent; repeating it after an ambiguous response can create duplicate quotes.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/quotes/create-quote\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.quotes.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of quote property internal names and API-formatted values. Include `hs_title`, `hs_expiration_date`, and `hs_template_type` set to `CPQ_QUOTE`.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new quote in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the quote.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the quote and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the quote-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created quote.' },
				properties: { description: 'Property values returned for the created quote.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the quote was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the quote was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the quote is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the quote was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created quote, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the quote.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the quote.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createTask',
		label: 'Create a task',
		description: 'Creates a task with the given properties and returns the created object.',
		context:
			'Creates a task engagement with `POST /crm/objects/2026-03/tasks`.\n\n- `properties` is a JSON object whose keys are task property internal names. `hs_timestamp` is required and accepts Unix milliseconds or a UTC timestamp; `hs_task_reminders` accepts Unix milliseconds only.\n- Common properties include `hs_task_subject`, `hs_task_body`, `hubspot_owner_id`, `hs_task_status`, `hs_task_priority`, and `hs_task_type`. Documented values are `COMPLETED` or `NOT_STARTED` for status; `LOW`, `MEDIUM`, or `HIGH` for priority; and `EMAIL`, `CALL`, or `TODO` for type.\n- Use optional `associations` to connect the task to existing CRM records. Association type IDs are directional.\n- This operation is not idempotent. Repeating it after an ambiguous response can create duplicate tasks.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/tasks/create-task\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of task property internal names and API-formatted values. Include required `hs_timestamp` as Unix milliseconds or a UTC timestamp.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records to associate with the new task in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description: 'The existing CRM record to associate with the task.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the task and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the task-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created task.' },
				properties: { description: 'Property values returned for the created task.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the task was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the task was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the task is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the task was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created task, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the task.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the task.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'createTicket',
		label: 'Create a ticket',
		description:
			'Creates a support ticket with the given properties and returns the created object.',
		context:
			"Creates a support ticket with `POST /crm/objects/2026-03/tickets`.\n\n- `properties` is a JSON object whose keys are ticket property internal names and whose values use HubSpot's API formats. Provide `subject` and `hs_pipeline_stage`; also provide `hs_pipeline` when the account has multiple ticket pipelines. Pipeline and stage values are internal IDs.\n- Use optional `associations` to connect the ticket to existing CRM records or activities. Association type IDs are directional.\n- This operation is not idempotent. Repeating it after an ambiguous response can create duplicate tickets.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/tickets/create-ticket\n",
		accounts: { hubspotcrm: { scope: ['tickets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				properties: {
					description:
						'JSON object of ticket property internal names and API-formatted values. Include `subject`, `hs_pipeline_stage`, and `hs_pipeline` when the account has multiple ticket pipelines.',
				},
				associations: {
					type: 'array',
					description:
						'Existing CRM records or activities to associate with the new ticket in the same request.',
					items: {
						type: 'object',
						properties: {
							to: {
								type: 'object',
								description:
									'The existing CRM record or activity to associate with the ticket.',
								properties: {
									id: {
										type: 'string',
										description: 'The ID of the target CRM record or activity.',
									},
								},
								required: ['id'],
							},
							types: {
								type: 'array',
								description:
									'One or more directional association types between the ticket and the target record.',
								items: {
									type: 'object',
									properties: {
										associationCategory: {
											type: 'string',
											description:
												'The HubSpot category of the association type.',
											enum: [
												'HUBSPOT_DEFINED',
												'USER_DEFINED',
												'INTEGRATOR_DEFINED',
												'WORK',
											],
										},
										associationTypeId: {
											type: 'number',
											description:
												'The numeric association type ID for the ticket-to-record direction.',
										},
									},
									required: ['associationCategory', 'associationTypeId'],
								},
							},
						},
						required: ['to', 'types'],
					},
				},
			},
			required: ['properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the created ticket.' },
				properties: { description: 'Property values returned for the created ticket.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the ticket was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the ticket was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the ticket is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the ticket was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the object write request.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the created ticket, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while creating the ticket.',
					items: {
						type: 'object',
						description: 'A warning returned while creating the ticket.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteAssociation',
		label: 'Delete an association',
		description: 'Removes all association types between two CRM objects.',
		context:
			'Removes all association labels between two supported CRM records with `DELETE /crm/v4/objects/{fromObjectType}/{fromObjectId}/associations/{toObjectType}/{toObjectId}`.\n\n- This removes the relationship between the records; it does not delete either record.\n- The operation removes every association label between the specified pair. It cannot remove only one selected label.\n- Standard object types can use their API names or numeric object type IDs. For custom objects, use the `2-XXX` object type ID or a supported fully qualified name.\n- The Endpoint uses `crm.objects.contacts.write`, one OAuth scope alternative accepted by HubSpot for this generic association operation.\n- A successful request returns `204 No Content`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/legacy/crm/associations/associate-records/delete-association\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fromObjectType: {
					type: 'string',
					description:
						"The source object's API name, numeric object type ID, or supported fully qualified custom-object name.",
				},
				fromObjectId: {
					type: 'string',
					description: 'The record ID of the source object.',
				},
				toObjectType: {
					type: 'string',
					description:
						"The target object's API name, numeric object type ID, or supported fully qualified custom-object name.",
				},
				toObjectId: { type: 'string', description: 'The record ID of the target object.' },
			},
			required: ['fromObjectType', 'fromObjectId', 'toObjectType', 'toObjectId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteCall',
		label: 'Delete a call',
		description: 'Moves a call engagement to the recycling bin.',
		context:
			'Moves a call engagement to the recycling bin with `DELETE /crm/objects/2026-03/calls/{callId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted activities can be restored for 90 days; after that they are permanently deleted.\n- Deleting a call permanently deletes its recording.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/calls/delete-call\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The record ID of the call to move to the recycling bin.',
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteCommunication',
		label: 'Delete a communication',
		description: 'Moves a communication to the recycling bin.',
		context:
			'Moves a communication record to the recycling bin with `DELETE /crm/objects/2026-03/communications/{communicationId}`. Required scope: `crm.objects.contacts.write`.\n\n- A successful request returns `204 No Content`.\n- Deleted activities can be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/communications/delete-communication\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The record ID of the communication to delete.',
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteCompany',
		label: 'Delete a company',
		description: 'Moves a company to the recycling bin.',
		context:
			'Moves a company to the recycling bin with `DELETE /crm/objects/2026-03/companies/{companyId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/companies/delete-company\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.companies.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the company to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteContact',
		label: 'Delete a contact',
		description: 'Moves a contact to the recycling bin.',
		context:
			'Moves a contact to the recycling bin with `DELETE /crm/objects/2026-03/contacts/{contactId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted contacts can generally be restored for 90 days, but workflow enrollment and list membership are not restored. Restoration can also be blocked by an active contact with the same email.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/delete-contact\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the contact to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteCustomObject',
		label: 'Delete a custom object record',
		description: 'Moves a custom object record to the recycling bin.',
		context:
			"Moves a custom object record to the recycling bin with `DELETE /crm/objects/2026-03/{objectType}/{objectId}`.\n\n- `objectType` must be the custom object's type ID or supported fully qualified name.\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/custom-objects/delete-custom-object\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.custom.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description: "The custom object's type ID or fully-qualified name.",
				},
				id: {
					type: 'string',
					description: 'The record ID of the custom object to delete.',
				},
			},
			required: ['objectType', 'id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteDeal',
		label: 'Delete a deal',
		description: 'Moves a deal to the recycling bin.',
		context:
			"Moves a deal to the recycling bin with `DELETE /crm/objects/2026-03/deals/{dealId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n- HubSpot's generated OpenAPI expresses the object type as `0-3`, while its guide and this app use the equivalent `deals` path.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/deals/delete-deal\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the deal to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteEmail',
		label: 'Delete an email',
		description: 'Permanently deletes an email engagement.',
		context:
			"Permanently deletes an email engagement with `DELETE /crm/objects/2026-03/emails/{emailId}`.\n\n- A successful request returns `204 No Content`.\n- HubSpot's email guide states that deleted emails cannot be restored, despite the operation reference describing the action as an archive.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/emails/delete-email\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the email to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteEngagement',
		label: 'Delete an engagement',
		description:
			'Deletes an engagement (a call, email, meeting, note, or task) on an object in HubSpot.',
		context:
			'Deletes the selected engagement type with `DELETE /crm/objects/2026-03/{objectType}/{engagementId}`. Supported types are calls, emails, meetings, notes, and tasks.\n\n- A successful request returns `204 No Content`.\n- Calls, meetings, notes, and tasks can generally be restored for 90 days; call recordings are permanently deleted.\n- Deleted emails cannot be restored.\n- Prefer a type-specific delete endpoint when the engagement type is known.\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description: 'Which kind of engagement to delete.',
					enum: ['calls', 'emails', 'meetings', 'notes', 'tasks'],
				},
				engagementId: {
					type: 'string',
					description: 'The record ID of the engagement to delete.',
				},
			},
			required: ['objectType', 'engagementId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteFile',
		label: 'Delete a file',
		description: 'Deletes a file normally or permanently.',
		context:
			'Deletes a file with the HubSpot Files API.\n\n- With `permanently` set to `false`, calls `DELETE /files/2026-03/files/{fileId}`. The file can be restored from Trash for 30 days.\n- With `permanently` set to `true`, calls `DELETE /files/2026-03/files/{fileId}/gdpr-delete`. Content and metadata are permanently deleted within seven days and cannot be restored.\n- Both operations return `204 No Content`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/files/guide\n',
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fileId: { type: 'string', description: 'The ID of the file to delete.' },
				permanently: {
					type: 'boolean',
					description:
						"When `true`, permanently deletes the file's content and metadata within seven days. When `false`, moves the file to Trash for up to 30 days.",
				},
			},
			required: ['fileId', 'permanently'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteFolder',
		label: 'Delete a folder',
		description: 'Archives a file folder.',
		context:
			"Archives a folder with `DELETE /files/2026-03/folders/{folderId}`. Required scope: `files`.\n\n- A successful request returns `204 No Content`.\n- HubSpot's schema models the folder as archived rather than immediately permanently deleted.\n- The API does not document whether deleting a non-empty folder rejects the request or cascades to contained files. Treat non-empty deletion as potentially cascading.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/files/guide\n",
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				folderId: { type: 'string', description: 'The ID of the folder to archive.' },
			},
			required: ['folderId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteLineItem',
		label: 'Delete a line item',
		description: 'Moves a line item to the recycling bin.',
		context:
			'Moves a line item to the recycling bin with `DELETE /crm/objects/2026-03/line_items/{lineItemId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/line-items/delete-line-item\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.line_items.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the line item to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteMeeting',
		label: 'Delete a meeting',
		description: 'Moves a meeting engagement to the recycling bin.',
		context:
			'Moves a meeting engagement to the recycling bin with `DELETE /crm/objects/2026-03/meetings/{meetingId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted activities can be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/meetings/delete-meeting\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the meeting to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteNote',
		label: 'Delete a note',
		description: 'Moves a note engagement to the recycling bin.',
		context:
			'Moves a note engagement to the recycling bin with `DELETE /crm/objects/2026-03/notes/{noteId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted activities can be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/notes/delete-note\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the note to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteOrder',
		label: 'Delete an order',
		description: 'Moves an order to the recycling bin.',
		context:
			'Moves an order to the recycling bin with `DELETE /crm/objects/2026-03/orders/{orderId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/orders/delete-order\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.orders.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the order to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteProduct',
		label: 'Delete a product',
		description: 'Moves a product to the recycling bin.',
		context:
			'Moves a reusable catalog product to the recycling bin with `DELETE /crm/objects/2026-03/products/{productId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n- Product-derived line items are separate records; no line-item deletion cascade is documented for product deletion.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/products/delete-product\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.products.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the product to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteQuote',
		label: 'Delete a quote',
		description: 'Moves a quote to the recycling bin.',
		context:
			'Moves a quote to the recycling bin with `DELETE /crm/objects/2026-03/quotes/{quoteId}`.\n\n- A successful request returns `204 No Content`.\n- Deleting a quote also deletes its line items. Reusing those line items on another object can therefore cause unexpected data loss.\n- Deleted CRM records can generally be restored for 90 days; restoration of cascade-deleted line items is not documented.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/quotes/delete-quote\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.quotes.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the quote to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteTask',
		label: 'Delete a task',
		description: 'Moves a task to the recycling bin.',
		context:
			'Moves a task engagement to the recycling bin with `DELETE /crm/objects/2026-03/tasks/{taskId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted activities can be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/tasks/delete-task\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The record ID of the task to delete.' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'deleteTicket',
		label: 'Delete a ticket',
		description: 'Moves a support ticket to the recycling bin.',
		context:
			'Moves a support ticket to the recycling bin with `DELETE /crm/objects/2026-03/tickets/{ticketId}`.\n\n- A successful request returns `204 No Content`.\n- Deleted CRM records can generally be restored for 90 days; after that they are permanently deleted.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/tickets/delete-ticket\n',
		accounts: { hubspotcrm: { scope: ['tickets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The record ID of the support ticket to delete.',
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'downloadFile',
		label: "Get a file's download URL",
		description: 'Returns a temporary signed URL for downloading a HubSpot file.',
		context:
			"Gets a temporary signed download URL from `GET /files/v3/files/{fileId}/signed-url`; it does not return file bytes. Treat the returned URL as a bearer credential and avoid logging or exposing it. Hidden files require a different permission and are outside this endpoint's static `files` scope. Official API reference: https://developers.hubspot.com/docs/api-reference/legacy/files/files/get-signed-url",
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fileId: {
					type: 'string',
					description:
						'Enter the numeric HubSpot ID of the file to get a signed download URL for. Use digits only.',
				},
				expirationSeconds: {
					type: 'number',
					description:
						"Enter how many seconds the signed URL should remain valid. Leave empty to use HubSpot's default expiration.",
				},
				size: {
					type: 'string',
					description:
						'Select an image rendition size. Leave empty to return the original file.',
					default: '',
					enum: ['', 'icon', 'medium', 'preview', 'thumb'],
				},
				upscale: {
					type: 'boolean',
					description:
						'Choose whether HubSpot may enlarge an image to the selected rendition size. An explicit false value is preserved.',
				},
			},
			required: ['fileId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				expiresAt: {
					type: 'string',
					description: 'Date and time when the signed URL expires.',
				},
				extension: { type: 'string', description: 'File name extension.' },
				height: {
					type: 'number',
					description: 'Height of the file in pixels when available.',
				},
				name: { type: 'string', description: 'Name of the file.' },
				size: { type: 'number', description: 'Size of the file in bytes.' },
				type: { type: 'string', description: 'HubSpot file type.' },
				url: {
					type: 'string',
					description:
						'Temporary signed URL for downloading the file. Treat this URL as a bearer credential.',
				},
				width: {
					type: 'number',
					description: 'Width of the file in pixels when available.',
				},
			},
			required: ['expiresAt', 'extension', 'name', 'size', 'type', 'url'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getCall',
		label: 'Get a call',
		description: 'Returns information about a specific call engagement.',
		context:
			"Retrieves one call engagement by record ID or by a unique property value with `GET /crm/objects/2026-03/calls/{id}`. Set `archived=true` to retrieve an archived record. When `idProperty` is provided, the path `id` is interpreted as that unique property's value. Optional property, property-history, and association lists are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/calls/get-call",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The call record ID, or a unique property value when ID property is provided.',
				},
				archived: {
					type: 'boolean',
					description: 'Set to true to retrieve the call from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'CRM object types whose associated record IDs should be returned.',
					items: {
						type: 'string',
						description:
							'An associated CRM object type, for example contacts or deals.',
					},
				},
				idProperty: {
					type: 'string',
					description:
						"A unique call property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.",
				},
				properties: {
					type: 'array',
					description: 'Call property internal names to return.',
					items: {
						type: 'string',
						description: 'The internal name of a call property to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Call property internal names to return with historical values.',
					items: {
						type: 'string',
						description:
							'The internal name of a call property whose value history should be returned.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The call record ID.' },
				properties: { description: "The call's requested property values." },
				createdAt: { type: 'string', description: 'When the call record was created.' },
				updatedAt: {
					type: 'string',
					description: 'When the call record was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the call record is archived.' },
				archivedAt: {
					type: 'string',
					description: 'When the call record was archived, if applicable.',
				},
				associations: {
					description: 'Associated record IDs grouped by requested CRM object type.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: "HubSpot's write trace identifier for the record, when returned.",
				},
				propertiesWithHistory: {
					description: 'Requested call properties with their historical values.',
				},
				url: {
					type: 'string',
					description: 'A HubSpot URL associated with the record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while reading the call.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getCommunication',
		label: 'Get a communication',
		description: 'Returns information about a specific communication.',
		context:
			"Retrieves one communication engagement by record ID or by a unique property value with `GET /crm/objects/2026-03/communications/{id}`. Set `archived=true` to retrieve an archived record. When `idProperty` is provided, the path `id` is interpreted as that unique property's value. Optional property, property-history, and association lists are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/communications/get-communication",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The communication record ID, or a unique property value when ID property is provided.',
				},
				archived: {
					type: 'boolean',
					description: 'Set to true to retrieve the communication from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'CRM object types whose associated record IDs should be returned.',
					items: {
						type: 'string',
						description: 'An associated CRM object type, for example contacts.',
					},
				},
				idProperty: {
					type: 'string',
					description:
						"A unique communication property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.",
				},
				properties: {
					type: 'array',
					description: 'Communication property internal names to return.',
					items: {
						type: 'string',
						description: 'The internal name of a communication property to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description:
						'Communication property internal names to return with historical values.',
					items: {
						type: 'string',
						description:
							'The internal name of a communication property whose value history should be returned.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The communication record ID.' },
				properties: { description: "The communication's requested property values." },
				createdAt: {
					type: 'string',
					description: 'When the communication record was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'When the communication record was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the communication record is archived.',
				},
				archivedAt: {
					type: 'string',
					description: 'When the communication record was archived, if applicable.',
				},
				associations: {
					description: 'Associated record IDs grouped by requested CRM object type.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: "HubSpot's write trace identifier for the record, when returned.",
				},
				propertiesWithHistory: {
					description: 'Requested communication properties with their historical values.',
				},
				url: {
					type: 'string',
					description: 'A HubSpot URL associated with the record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while reading the communication.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getCompany',
		label: 'Get a company',
		description: 'Returns information about a specific company.',
		context:
			"Retrieves one company by record ID or by a unique property value with `GET /crm/objects/2026-03/companies/{id}`. Set `archived=true` to retrieve an archived record. When `idProperty` is provided, the path `id` is interpreted as that unique property's value. Optional property, property-history, and association lists are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/companies/get-company",
		accounts: { hubspotcrm: { scope: ['crm.objects.companies.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The company record ID, or a unique property value when ID property is provided.',
				},
				archived: {
					type: 'boolean',
					description: 'Set to true to retrieve the company from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'CRM object types whose associated record IDs should be returned.',
					items: {
						type: 'string',
						description:
							'An associated CRM object type, for example contacts or deals.',
					},
				},
				idProperty: {
					type: 'string',
					description:
						"A unique company property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.",
				},
				properties: {
					type: 'array',
					description: 'Company property internal names to return.',
					items: {
						type: 'string',
						description: 'The internal name of a company property to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description:
						'Company property internal names to return with historical values.',
					items: {
						type: 'string',
						description:
							'The internal name of a company property whose value history should be returned.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The company record ID.' },
				properties: { description: "The company's requested property values." },
				createdAt: { type: 'string', description: 'When the company record was created.' },
				updatedAt: {
					type: 'string',
					description: 'When the company record was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the company record is archived.',
				},
				archivedAt: {
					type: 'string',
					description: 'When the company record was archived, if applicable.',
				},
				associations: {
					description: 'Associated record IDs grouped by requested CRM object type.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: "HubSpot's write trace identifier for the record, when returned.",
				},
				propertiesWithHistory: {
					description: 'Requested company properties with their historical values.',
				},
				url: {
					type: 'string',
					description: 'A HubSpot URL associated with the record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while reading the company.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getContact',
		label: 'Get a contact',
		description: 'Returns information about a specific contact.',
		context:
			"Retrieves one contact by record ID or by a unique property value with `GET /crm/objects/2026-03/contacts/{id}`. Set `archived=true` to retrieve an archived record. When `idProperty` is provided, the path `id` is interpreted as that unique property's value; for example, use `idProperty=email` to retrieve a contact by email address. Optional property, property-history, and association lists are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/get-contact",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The contact record ID, or a unique property value such as an email address when ID property is provided.',
				},
				archived: {
					type: 'boolean',
					description: 'Set to true to retrieve the contact from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'CRM object types whose associated record IDs should be returned.',
					items: {
						type: 'string',
						description:
							'An associated CRM object type, for example companies or deals.',
					},
				},
				idProperty: {
					type: 'string',
					description:
						"A unique contact property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID; use `email` to retrieve by email address.",
				},
				properties: {
					type: 'array',
					description: 'Contact property internal names to return.',
					items: {
						type: 'string',
						description: 'The internal name of a contact property to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description:
						'Contact property internal names to return with historical values.',
					items: {
						type: 'string',
						description:
							'The internal name of a contact property whose value history should be returned.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The contact record ID.' },
				properties: { description: "The contact's requested property values." },
				createdAt: { type: 'string', description: 'When the contact record was created.' },
				updatedAt: {
					type: 'string',
					description: 'When the contact record was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the contact record is archived.',
				},
				archivedAt: {
					type: 'string',
					description: 'When the contact record was archived, if applicable.',
				},
				associations: {
					description: 'Associated record IDs grouped by requested CRM object type.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: "HubSpot's write trace identifier for the record, when returned.",
				},
				propertiesWithHistory: {
					description: 'Requested contact properties with their historical values.',
				},
				url: {
					type: 'string',
					description: 'A HubSpot URL associated with the record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while reading the contact.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getCustomObject',
		label: 'Get a custom object record',
		description: 'Returns information about a specific custom object record.',
		context:
			"Retrieves one custom object record by record ID or by a unique property value with `GET /crm/objects/2026-03/{objectType}/{id}`. `objectType` must be the custom object type ID, for example `2-3465404`. Set `archived=true` to retrieve an archived record. When `idProperty` is provided, the path `id` is interpreted as that unique property's value. Optional property, property-history, and association lists are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/custom-objects/get-custom-object",
		accounts: { hubspotcrm: { scope: ['crm.objects.custom.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description: 'The custom object type ID, for example `2-3465404`.',
				},
				id: {
					type: 'string',
					description:
						'The custom object record ID, or a unique property value when ID property is provided.',
				},
				archived: {
					type: 'boolean',
					description:
						'Set to true to retrieve the custom object record from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'CRM object types whose associated record IDs should be returned.',
					items: {
						type: 'string',
						description:
							'An associated CRM object type, for example contacts or companies.',
					},
				},
				idProperty: {
					type: 'string',
					description:
						"A unique custom object property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.",
				},
				properties: {
					type: 'array',
					description: 'Custom object property internal names to return.',
					items: {
						type: 'string',
						description: 'The internal name of a custom object property to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description:
						'Custom object property internal names to return with historical values.',
					items: {
						type: 'string',
						description:
							'The internal name of a custom object property whose value history should be returned.',
					},
				},
			},
			required: ['objectType', 'id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The custom object record ID.' },
				properties: { description: "The custom object's requested property values." },
				createdAt: {
					type: 'string',
					description: 'When the custom object record was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'When the custom object record was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the custom object record is archived.',
				},
				archivedAt: {
					type: 'string',
					description: 'When the custom object record was archived, if applicable.',
				},
				associations: {
					description: 'Associated record IDs grouped by requested CRM object type.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: "HubSpot's write trace identifier for the record, when returned.",
				},
				propertiesWithHistory: {
					description: 'Requested custom object properties with their historical values.',
				},
				url: {
					type: 'string',
					description: 'A HubSpot URL associated with the record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while reading the custom object record.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getDeal',
		label: 'Get a deal',
		description: 'Returns information about a specific deal.',
		context:
			"Retrieves one deal by record ID or by a unique property value with `GET /crm/objects/2026-03/deals/{id}`. Set `archived=true` to retrieve an archived record. When `idProperty` is provided, the path `id` is interpreted as that unique property's value. Optional property, property-history, and association lists are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/deals/get-deal",
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The deal record ID, or a unique property value when ID property is provided.',
				},
				archived: {
					type: 'boolean',
					description: 'Set to true to retrieve the deal from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'CRM object types whose associated record IDs should be returned.',
					items: {
						type: 'string',
						description:
							'An associated CRM object type, for example contacts or companies.',
					},
				},
				idProperty: {
					type: 'string',
					description:
						"A unique deal property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.",
				},
				properties: {
					type: 'array',
					description: 'Deal property internal names to return.',
					items: {
						type: 'string',
						description: 'The internal name of a deal property to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Deal property internal names to return with historical values.',
					items: {
						type: 'string',
						description:
							'The internal name of a deal property whose value history should be returned.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The deal record ID.' },
				properties: { description: "The deal's requested property values." },
				createdAt: { type: 'string', description: 'When the deal record was created.' },
				updatedAt: {
					type: 'string',
					description: 'When the deal record was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the deal record is archived.' },
				archivedAt: {
					type: 'string',
					description: 'When the deal record was archived, if applicable.',
				},
				associations: {
					description: 'Associated record IDs grouped by requested CRM object type.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: "HubSpot's write trace identifier for the record, when returned.",
				},
				propertiesWithHistory: {
					description: 'Requested deal properties with their historical values.',
				},
				url: {
					type: 'string',
					description: 'A HubSpot URL associated with the record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while reading the deal.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getEmail',
		label: 'Get an email',
		description: 'Returns information about a specific email engagement.',
		context:
			'Retrieves one email engagement by record ID or a unique property value with `GET /crm/objects/2026-03/emails/{id}`. Set `archived=true` for archived records. `idProperty` makes the path ID a unique property value. Non-empty property, history, and association arrays become comma-separated query values.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/emails/get-email',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'Email record ID, or a unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'Set true to retrieve the email from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated CRM object types to return.',
					items: { type: 'string', description: 'CRM object type, such as contacts.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique email property name that makes the path ID its value.',
				},
				properties: {
					type: 'array',
					description: 'Email property names to return.',
					items: { type: 'string', description: 'Email property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Email properties to return with history.',
					items: {
						type: 'string',
						description: 'Email property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Email record ID.' },
				properties: { description: 'Requested email properties.' },
				createdAt: { type: 'string', description: 'Record creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether the record is archived.' },
				archivedAt: { type: 'string', description: 'Archive time, when applicable.' },
				associations: { description: 'Requested associated record IDs.' },
				objectWriteTraceId: {
					type: 'string',
					description: 'HubSpot write trace ID, when returned.',
				},
				propertiesWithHistory: {
					description: 'Requested properties and historical values.',
				},
				url: { type: 'string', description: 'HubSpot record URL, when returned.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned by HubSpot.',
					items: {
						type: 'object',
						description: 'One HubSpot warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Structured warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getInvoice',
		label: 'Get an invoice',
		description: 'Returns information about a specific invoice.',
		context:
			'Retrieves one invoice by record ID or a unique property value with `GET /crm/objects/2026-03/invoices/{id}`. Set `archived=true` for archived records. `idProperty` makes the path ID a unique property value. Non-empty property, history, and association arrays become comma-separated query values.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/invoices/get-invoice',
		accounts: { hubspotcrm: { scope: ['crm.objects.invoices.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'Invoice record ID, or a unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'Set true to retrieve the invoice from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated CRM object types to return.',
					items: {
						type: 'string',
						description: 'CRM object type, such as contacts or deals.',
					},
				},
				idProperty: {
					type: 'string',
					description: 'Unique invoice property name that makes the path ID its value.',
				},
				properties: {
					type: 'array',
					description: 'Invoice property names to return.',
					items: { type: 'string', description: 'Invoice property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Invoice properties to return with history.',
					items: {
						type: 'string',
						description: 'Invoice property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Invoice record ID.' },
				properties: { description: 'Requested invoice properties.' },
				createdAt: { type: 'string', description: 'Record creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether the record is archived.' },
				archivedAt: { type: 'string', description: 'Archive time, when applicable.' },
				associations: { description: 'Requested associated record IDs.' },
				objectWriteTraceId: {
					type: 'string',
					description: 'HubSpot write trace ID, when returned.',
				},
				propertiesWithHistory: {
					description: 'Requested properties and historical values.',
				},
				url: { type: 'string', description: 'HubSpot record URL, when returned.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned by HubSpot.',
					items: {
						type: 'object',
						description: 'One HubSpot warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Structured warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getLineItem',
		label: 'Get a line item',
		description: 'Returns information about a specific line item.',
		context:
			'Retrieves one line item by record ID or a unique property value with `GET /crm/objects/2026-03/line_items/{id}`. Set `archived=true` for archived records. `idProperty` makes the path ID a unique property value. Non-empty property, history, and association arrays become comma-separated query values.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/line-items/get-line-item',
		accounts: { hubspotcrm: { scope: ['crm.objects.line_items.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'Line item record ID, or a unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'Set true to retrieve the line item from archived records.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated CRM object types to return.',
					items: {
						type: 'string',
						description: 'CRM object type, such as deals or quotes.',
					},
				},
				idProperty: {
					type: 'string',
					description: 'Unique line item property name that makes the path ID its value.',
				},
				properties: {
					type: 'array',
					description: 'Line item property names to return.',
					items: { type: 'string', description: 'Line item property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Line item properties to return with history.',
					items: {
						type: 'string',
						description: 'Line item property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Line item record ID.' },
				properties: { description: 'Requested line item properties.' },
				createdAt: { type: 'string', description: 'Record creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether the record is archived.' },
				archivedAt: { type: 'string', description: 'Archive time, when applicable.' },
				associations: { description: 'Requested associated record IDs.' },
				objectWriteTraceId: {
					type: 'string',
					description: 'HubSpot write trace ID, when returned.',
				},
				propertiesWithHistory: {
					description: 'Requested properties and historical values.',
				},
				url: { type: 'string', description: 'HubSpot record URL, when returned.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned by HubSpot.',
					items: {
						type: 'object',
						description: 'One HubSpot warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Structured warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getMeeting',
		label: 'Get a meeting',
		description: 'Returns information about a specific meeting engagement.',
		context:
			'Retrieves one meeting engagement by ID or unique property value with `GET /crm/objects/2026-03/meetings/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Optional arrays are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/meetings/get-meeting',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Meeting ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived meeting.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated object types to return.',
					items: { type: 'string', description: 'CRM object type such as contacts.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Meeting properties to return.',
					items: { type: 'string', description: 'Meeting property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Meeting properties to return with history.',
					items: {
						type: 'string',
						description: 'Meeting property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Meeting record ID.' },
				properties: { description: 'Requested meeting properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: { description: 'Requested associated IDs.' },
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getNote',
		label: 'Get a note',
		description: 'Returns information about a specific note engagement.',
		context:
			'Retrieves one note engagement by ID or unique property value with `GET /crm/objects/2026-03/notes/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Optional arrays are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/notes/get-note',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Note ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived note.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated object types to return.',
					items: { type: 'string', description: 'CRM object type such as contacts.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Note properties to return.',
					items: { type: 'string', description: 'Note property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Note properties to return with history.',
					items: {
						type: 'string',
						description: 'Note property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Note record ID.' },
				properties: { description: 'Requested note properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: { description: 'Requested associated IDs.' },
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getOrder',
		label: 'Get an order',
		description: 'Returns information about a specific order.',
		context:
			'Retrieves one order by ID or unique property value with `GET /crm/objects/2026-03/orders/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Optional arrays are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/orders/get-order',
		accounts: { hubspotcrm: { scope: ['crm.objects.orders.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Order ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived order.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated object types to return.',
					items: { type: 'string', description: 'CRM object type such as contacts.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Order properties to return.',
					items: { type: 'string', description: 'Order property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Order properties to return with history.',
					items: {
						type: 'string',
						description: 'Order property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Order record ID.' },
				properties: { description: 'Requested order properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: { description: 'Requested associated IDs.' },
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getOwner',
		label: 'Get an owner',
		description: 'Returns information about a specific HubSpot owner.',
		context:
			'Retrieves a HubSpot owner with `GET /crm/v3/owners/{ownerId}`. Set `archived=true` to retrieve an archived owner. Choose `idProperty=userId` when `ownerId` contains the HubSpot user ID instead of the owner ID.\n\nDocs: https://developers.hubspot.com/docs/api-reference/legacy/crm/owners/get-owner',
		accounts: { hubspotcrm: { scope: ['crm.objects.owners.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				ownerId: {
					type: 'string',
					description:
						'The owner ID, or the HubSpot user ID when ID property is User ID.',
				},
				archived: {
					type: 'boolean',
					description: 'Set true to retrieve an archived owner.',
					default: false,
				},
				idProperty: {
					type: 'string',
					description:
						'How to interpret Owner ID. Select Owner ID for a HubSpot owner ID, or User ID for a HubSpot user ID.',
					default: '',
					enum: ['', 'id', 'userId'],
				},
			},
			required: ['ownerId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				archived: { type: 'boolean', description: 'Whether the owner is archived.' },
				createdAt: { type: 'string', description: 'When the owner was created.' },
				email: { type: 'string', description: "The owner's email address." },
				firstName: { type: 'string', description: "The owner's first name." },
				id: { type: 'string', description: 'The HubSpot owner ID.' },
				lastName: { type: 'string', description: "The owner's last name." },
				teams: {
					type: 'array',
					description: 'Teams assigned to the owner.',
					items: {
						type: 'object',
						description: 'A team assigned to the owner.',
						properties: {
							id: { type: 'string', description: 'The team ID.' },
							name: { type: 'string', description: 'The team name.' },
							primary: {
								type: 'boolean',
								description: "Whether this is the owner's primary team.",
							},
						},
						required: [],
					},
				},
				type: {
					type: 'string',
					description:
						'Owner type: `PERSON` for a user owner or `QUEUE` for a queue owner.',
				},
				updatedAt: { type: 'string', description: 'When the owner was last updated.' },
				userId: {
					type: 'number',
					description: 'The active HubSpot user ID, when available.',
				},
				userIdIncludingInactive: {
					type: 'number',
					description: 'The HubSpot user ID including inactive users, when available.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getPipeline',
		label: 'Get a pipeline',
		description:
			'Returns information about a specific pipeline (its stages, display order, and metadata) for a given CRM object type.',
		context:
			'Retrieves one deal or ticket pipeline with `GET /crm/pipelines/2026-03/{objectType}/{pipelineId}`. Select `deals` to use `crm.objects.deals.read` or `tickets` to use `tickets`; because this static endpoint advertises both selections and cannot amend connection scopes, both scopes are required.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/pipelines/get-pipeline',
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.read', 'tickets'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'The CRM object family whose pipeline is requested. Deals requires `crm.objects.deals.read`; Tickets requires `tickets`.',
					enum: ['deals', 'tickets'],
				},
				pipelineId: {
					type: 'string',
					description: 'The unique HubSpot ID of the pipeline to retrieve.',
				},
			},
			required: ['objectType', 'pipelineId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				archived: { type: 'boolean', description: 'Whether the pipeline is archived.' },
				archivedAt: { type: 'string', description: 'When the pipeline was archived.' },
				createdAt: { type: 'string', description: 'When the pipeline was created.' },
				displayOrder: { type: 'number', description: "The pipeline's display order." },
				id: { type: 'string', description: 'The pipeline ID.' },
				label: { type: 'string', description: "The pipeline's display label." },
				stages: {
					type: 'array',
					description: 'Stages in the pipeline.',
					items: {
						type: 'object',
						description: 'A pipeline stage.',
						properties: {
							archived: {
								type: 'boolean',
								description: 'Whether the stage is archived.',
							},
							archivedAt: {
								type: 'string',
								description: 'When the stage was archived.',
							},
							createdAt: {
								type: 'string',
								description: 'When the stage was created.',
							},
							displayOrder: {
								type: 'number',
								description: "The stage's display order.",
							},
							id: { type: 'string', description: 'The stage ID.' },
							label: { type: 'string', description: 'The stage display label.' },
							metadata: { description: 'Object-specific stage metadata.' },
							updatedAt: {
								type: 'string',
								description: 'When the stage was last updated.',
							},
							writePermissions: {
								type: 'string',
								description: 'The permission mode controlling stage updates.',
							},
						},
						required: [],
					},
				},
				updatedAt: { type: 'string', description: 'When the pipeline was last updated.' },
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getProduct',
		label: 'Get a product',
		description: 'Returns information about a specific product.',
		context:
			'Retrieves one product by ID or unique property value with `GET /crm/objects/2026-03/products/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Products cannot be directly associated with CRM records, so `associations` normally returns no useful direct associations.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/products/get-product',
		accounts: { hubspotcrm: { scope: ['crm.objects.products.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Product ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived product.',
					default: false,
				},
				associations: {
					type: 'array',
					description:
						'Associated object types to request. Products cannot be directly associated with CRM records, so this normally returns no useful direct associations.',
					items: {
						type: 'string',
						description:
							'CRM object type to request; direct product associations are generally unavailable.',
					},
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Product properties to return.',
					items: { type: 'string', description: 'Product property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Product properties to return with history.',
					items: {
						type: 'string',
						description: 'Product property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Product record ID.' },
				properties: { description: 'Requested product properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: {
					description:
						'Requested associations, normally empty or not useful for products.',
				},
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getQuote',
		label: 'Get a quote',
		description: 'Returns information about a specific quote.',
		context:
			'Retrieves one quote by ID or unique property value with `GET /crm/objects/2026-03/quotes/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Optional arrays are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/quotes/get-quote',
		accounts: { hubspotcrm: { scope: ['crm.objects.quotes.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Quote ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived quote.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated object types to return.',
					items: { type: 'string', description: 'CRM object type such as deals.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Quote properties to return.',
					items: { type: 'string', description: 'Quote property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Quote properties to return with history.',
					items: {
						type: 'string',
						description: 'Quote property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Quote record ID.' },
				properties: { description: 'Requested quote properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: { description: 'Requested associated IDs.' },
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getRecordProperty',
		label: 'Get a property definition',
		description:
			'Returns the definition (type, options, group, etc.) of a specific CRM object property.',
		context:
			'Retrieves the complete definition of one CRM property with `GET /crm/properties/2026-03/{objectType}/{propertyName}`. Supported advertised object families are contacts, companies, deals, tickets, and custom object type IDs. Because this static endpoint cannot amend connection scopes by selection, it requires the schema-read scope for all five families. Use `dataSensitivity` and `locale` to control the returned property definition.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/properties/get-property',
		accounts: {
			hubspotcrm: {
				scope: [
					'crm.schemas.contacts.read',
					'crm.schemas.companies.read',
					'crm.schemas.deals.read',
					'crm.schemas.tickets.read',
					'crm.schemas.custom.read',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'Supported object family: `contacts`, `companies`, `deals`, `tickets`, or a custom object type ID such as `2-3465404`.',
				},
				propertyName: { type: 'string', description: "The property's internal API name." },
				archived: {
					type: 'boolean',
					description: 'Set true to retrieve an archived property definition.',
					default: false,
				},
				dataSensitivity: {
					type: 'string',
					description: 'The sensitivity class of the property definition to retrieve.',
					default: '',
					enum: ['', 'non_sensitive', 'sensitive', 'highly_sensitive'],
				},
				locale: {
					type: 'string',
					description: 'Locale for localized property metadata, for example `en-US`.',
				},
			},
			required: ['objectType', 'propertyName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description:
						'The internal property name, used to reference the property in the API.',
				},
				label: {
					type: 'string',
					description: 'The human-readable property label shown in HubSpot.',
				},
				type: {
					type: 'string',
					description:
						'The property data type, such as `string`, `number`, `enumeration`, `date`, or `datetime`.',
				},
				fieldType: {
					type: 'string',
					description:
						'Controls how the property appears in HubSpot, such as `text`, `select`, or `checkbox`.',
				},
				description: {
					type: 'string',
					description: 'The property description shown as help text in HubSpot.',
				},
				groupName: {
					type: 'string',
					description: 'The name of the property group the property belongs to.',
				},
				options: {
					type: 'array',
					description:
						'The valid options of an enumerated property. Empty for other property types.',
					items: {
						type: 'object',
						description: 'A valid option of the property.',
						properties: {
							label: {
								type: 'string',
								description: 'The human-readable option label shown in HubSpot.',
							},
							value: {
								type: 'string',
								description:
									'The internal option value to use when setting the property value through the API.',
							},
							description: {
								type: 'string',
								description: 'The description of the option.',
							},
							displayOrder: {
								type: 'number',
								description:
									'The order in which the option is displayed, starting with the lowest positive value. A value of -1 displays the option after all positive values.',
							},
							hidden: {
								type: 'boolean',
								description: 'Whether the option is hidden in HubSpot.',
							},
						},
						required: [],
					},
				},
				displayOrder: {
					type: 'number',
					description:
						'The order in which the property is displayed, starting with the lowest positive value.',
				},
				hidden: {
					type: 'boolean',
					description: 'Whether the property is hidden in the HubSpot UI.',
				},
				hubspotDefined: {
					type: 'boolean',
					description: 'Whether the property is a default property built into HubSpot.',
				},
				hasUniqueValue: {
					type: 'boolean',
					description:
						'Whether the property value must be unique. Once set, this cannot be changed.',
				},
				formField: {
					type: 'boolean',
					description: 'Whether the property can be used in a HubSpot form.',
				},
				calculated: {
					type: 'boolean',
					description:
						'Whether a HubSpot process calculates the value of this default property.',
				},
				calculationFormula: {
					type: 'string',
					description: 'The formula used to compute a calculated property.',
				},
				externalOptions: {
					type: 'boolean',
					description:
						'Whether the options of this default property are stored outside the property settings.',
				},
				referencedObjectType: {
					type: 'string',
					description: 'The object type this property relates to, if any.',
				},
				currencyPropertyName: {
					type: 'string',
					description:
						'The name of the currency property associated with this property, if applicable.',
				},
				showCurrencySymbol: {
					type: 'boolean',
					description:
						'Whether the property displays the currency symbol set in the account settings.',
				},
				numberDisplayHint: {
					type: 'string',
					description:
						'How a number property is displayed: `currency`, `duration`, `formatted`, `percentage`, `probability`, or `unformatted`.',
				},
				textDisplayHint: {
					type: 'string',
					description:
						'How a text property is displayed, such as `multi_line`, `email`, `phone_number`, or `unformatted_single_line`.',
				},
				dateDisplayHint: {
					type: 'string',
					description:
						'How a date property is displayed: `absolute`, `absolute_with_relative`, `time_since`, or `time_until`.',
				},
				dataSensitivity: {
					type: 'string',
					description:
						'The data sensitivity level: `non_sensitive`, `sensitive`, or `highly_sensitive`.',
				},
				sensitiveDataCategories: {
					type: 'array',
					description:
						'The categories describing the sensitivity of the data in the property.',
					items: { type: 'string', description: 'A sensitive data category.' },
				},
				modificationMetadata: {
					type: 'object',
					description: 'Information about which parts of the property can be modified.',
					properties: {
						archivable: {
							type: 'boolean',
							description: 'Whether the property can be archived.',
						},
						readOnlyDefinition: {
							type: 'boolean',
							description:
								'Whether the property definition is read-only and cannot be modified.',
						},
						readOnlyOptions: {
							type: 'boolean',
							description:
								'Whether the property options are read-only and cannot be modified.',
						},
						readOnlyValue: {
							type: 'boolean',
							description:
								'Whether the property value is read-only and cannot be modified.',
						},
					},
					required: [],
				},
				archived: { type: 'boolean', description: 'Whether the property is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the property was archived.',
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the property was created.',
				},
				createdUserId: {
					type: 'string',
					description:
						'The internal ID of the user who created the property in HubSpot. Missing if the property was created outside of HubSpot.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the property was last updated.',
				},
				updatedUserId: {
					type: 'string',
					description:
						'The internal ID of the user who last updated the property in HubSpot. Missing if the property was updated outside of HubSpot.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getTask',
		label: 'Get a task',
		description: 'Returns information about a specific task.',
		context:
			'Retrieves one task engagement by ID or unique property value with `GET /crm/objects/2026-03/tasks/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Optional arrays are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/tasks/get-task',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Task ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived task.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated object types to return.',
					items: { type: 'string', description: 'CRM object type such as contacts.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Task properties to return.',
					items: { type: 'string', description: 'Task property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Task properties to return with history.',
					items: {
						type: 'string',
						description: 'Task property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Task record ID.' },
				properties: { description: 'Requested task properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: { description: 'Requested associated IDs.' },
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getTicket',
		label: 'Get a ticket',
		description: 'Returns information about a specific support ticket.',
		context:
			'Retrieves one ticket by ID or unique property value with `GET /crm/objects/2026-03/tickets/{id}`. `archived=true` retrieves archived records; `idProperty` makes the path ID a unique property value. Optional arrays are sent only when non-empty.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/tickets/get-ticket',
		accounts: { hubspotcrm: { scope: ['tickets'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Ticket ID or unique property value when ID property is set.',
				},
				archived: {
					type: 'boolean',
					description: 'True retrieves an archived ticket.',
					default: false,
				},
				associations: {
					type: 'array',
					description: 'Associated object types to return.',
					items: { type: 'string', description: 'CRM object type such as contacts.' },
				},
				idProperty: {
					type: 'string',
					description: 'Unique property whose value is supplied as the path ID.',
				},
				properties: {
					type: 'array',
					description: 'Ticket properties to return.',
					items: { type: 'string', description: 'Ticket property internal name.' },
				},
				propertiesWithHistory: {
					type: 'array',
					description: 'Ticket properties to return with history.',
					items: {
						type: 'string',
						description: 'Ticket property internal name whose history is requested.',
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Ticket record ID.' },
				properties: { description: 'Requested ticket properties.' },
				createdAt: { type: 'string', description: 'Creation time.' },
				updatedAt: { type: 'string', description: 'Last update time.' },
				archived: { type: 'boolean', description: 'Whether archived.' },
				archivedAt: { type: 'string', description: 'Archive time.' },
				associations: { description: 'Requested associated IDs.' },
				objectWriteTraceId: { type: 'string', description: 'HubSpot write trace ID.' },
				propertiesWithHistory: { description: 'Properties with historical values.' },
				url: { type: 'string', description: 'HubSpot record URL.' },
				warnings: {
					type: 'array',
					description: 'HubSpot warnings.',
					items: {
						type: 'object',
						description: 'One warning.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'getWorkflowIdMapping',
		label: 'Get a workflow ID mapping',
		description: 'Retrieves the legacy workflow ID associated with a HubSpot flow ID.',
		context:
			"Looks up the legacy numeric `workflowId` for a workflow editor `flowId` with `POST /automation/v4/workflow-id-mappings/batch/read`. Required scope: `automation`.\n\n- Only the `flowId` lookup is supported (HubSpot's `FLOW_ID` coordinate type).\n- The full HubSpot batch response is returned. Use `results[0].workflowId` as the `workflowId` for the legacy workflow enrollment and unenrollment operations.\n- A `flowId` that cannot be mapped is reported in `errors` instead of `results`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/legacy/automation/workflows/batch/get-workflow-id-mappings",
		accounts: { hubspotcrm: { scope: ['automation'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				flowId: {
					type: 'string',
					description:
						'The workflow editor flow ID, available in the HubSpot workflow editor URL.',
				},
			},
			required: ['flowId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				completedAt: {
					type: 'string',
					description: 'When the batch mapping request completed.',
				},
				errors: {
					type: 'array',
					description: 'Per-item StandardError values returned by HubSpot.',
					items: {
						description:
							'A complete HubSpot StandardError object for one failed mapping.',
					},
				},
				links: { description: 'The complete set of links related to the batch request.' },
				numErrors: { type: 'number', description: 'The number of mapping errors.' },
				requestedAt: {
					type: 'string',
					description: 'When HubSpot received the batch mapping request.',
				},
				results: {
					type: 'array',
					description: 'Workflow ID mappings returned by HubSpot.',
					items: {
						type: 'object',
						description: 'A mapping from a flow ID to its legacy workflow ID.',
						properties: {
							flowId: {
								type: 'number',
								description: 'The workflow editor flow ID supplied to the lookup.',
							},
							workflowId: {
								type: 'number',
								description: 'The corresponding legacy numeric workflow ID.',
							},
						},
						required: [],
					},
				},
				startedAt: {
					type: 'string',
					description: 'When HubSpot started processing the request.',
				},
				status: { type: 'string', description: 'The batch mapping request status.' },
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'importFileFromUrl',
		label: 'Import a file from a URL',
		description:
			'Starts an asynchronous import of a file from a public URL into HubSpot File Manager.',
		context:
			"Starts an asynchronous import with `POST /files/v3/files/import-from-url/async` and returns the immediate 202 task response. Poll the status URL in `links` with the import status endpoint to obtain completion details. Supply either `folderId` or `folderPath`; one is required and they are mutually exclusive. When `overwrite` is true, HubSpot replaces the matching file content but creates a new file ID. `expiresAt` sets an absolute expiration, while `ttl` sets a relative time-to-live; follow HubSpot's TTL constraints and do not send both unless supported for the intended import. HubSpot applies file size, type, and account limits. Official API reference: https://developers.hubspot.com/docs/api-reference/legacy/files/files/import-from-url",
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the publicly accessible URL of the file HubSpot should import.',
				},
				access: {
					type: 'string',
					description:
						"Select the file's visibility and indexing level. Defaults safely to Public not indexable when omitted.",
					default: '',
					enum: [
						'',
						'HIDDEN_INDEXABLE',
						'HIDDEN_NOT_INDEXABLE',
						'HIDDEN_PRIVATE',
						'HIDDEN_SENSITIVE',
						'PRIVATE',
						'PUBLIC_INDEXABLE',
						'PUBLIC_NOT_INDEXABLE',
						'SENSITIVE',
					],
				},
				folderId: {
					type: 'string',
					description:
						'Enter the destination folder ID. Either **Folder ID** or **Folder path** is required; do not provide both.',
				},
				folderPath: {
					type: 'string',
					description:
						'Enter the destination folder path. Either **Folder path** or **Folder ID** is required; do not provide both.',
				},
				name: {
					type: 'string',
					description:
						'Enter a name for the imported file. Leave empty to let HubSpot derive it from the source.',
				},
				overwrite: {
					type: 'boolean',
					description:
						'Choose whether to overwrite a matching file. Overwriting creates a new file ID; an explicit false value is preserved.',
				},
				expiresAt: {
					type: 'string',
					description:
						'Enter the absolute date and time when the imported file should expire.',
				},
				ttl: {
					type: 'string',
					description:
						"Enter HubSpot's relative time-to-live value for the imported file. Leave empty for no relative expiration.",
				},
				duplicateValidationScope: {
					type: 'string',
					description:
						'Select whether HubSpot checks for duplicate files across the entire portal or only the exact destination folder.',
					default: '',
					enum: ['', 'ENTIRE_PORTAL', 'EXACT_FOLDER'],
				},
				duplicateValidationStrategy: {
					type: 'string',
					description: 'Select how HubSpot handles a detected duplicate file.',
					default: '',
					enum: ['', 'NONE', 'REJECT', 'RETURN_EXISTING'],
				},
			},
			required: ['url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Identifier of the asynchronous import task returned by HubSpot.',
				},
				links: {
					description:
						'Map of related task URLs returned by HubSpot, including the status polling link.',
				},
			},
			required: ['id', 'links'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listAllContacts',
		label: 'List all contacts',
		description:
			'Returns one page of contacts, including requested properties, history, and associations.',
		context:
			"Lists one page of contacts with `GET /crm/objects/2026-03/contacts`. This endpoint does not aggregate all pages; use `paging.next.after` as the next call's `after` value. Requesting property history can reduce the number of contacts returned in a page because HubSpot limits the response payload size. Optional array query parameters are omitted when empty. Requires the static OAuth scope `crm.objects.contacts.read`. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/get-contacts",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				after: {
					type: 'string',
					description: 'The `paging.next.after` value from the previous response.',
				},
				archived: {
					type: 'boolean',
					description:
						'Whether to return only archived contacts. When true, only archived contacts are returned.',
					default: false,
				},
				associations: {
					type: 'array',
					description:
						'Object types whose associations should be returned with each contact.',
					items: {
						type: 'string',
						description: 'An object type whose associated records should be included.',
					},
				},
				limit: {
					type: 'number',
					description:
						'The maximum number of contacts to return in this page, up to 100.',
					default: 10,
					maximum: 100,
				},
				properties: {
					type: 'array',
					description: 'Contact property internal names to include in the response.',
					items: {
						type: 'string',
						description: 'A contact property internal name to return.',
					},
				},
				propertiesWithHistory: {
					type: 'array',
					description:
						'Contact property internal names whose historical values should be included.',
					items: {
						type: 'string',
						description:
							'A contact property internal name whose value history should be returned.',
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The contacts returned in this page.',
					items: {
						type: 'object',
						description:
							'A HubSpot contact record with requested properties and associations.',
						properties: {
							id: { type: 'string', description: 'The unique contact record ID.' },
							properties: {
								description: 'The requested current contact property values.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the contact was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the contact was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the contact is archived.',
							},
							archivedAt: {
								type: 'string',
								description: 'The date and time when the contact was archived.',
							},
							associations: {
								description: 'Associated records grouped by requested object type.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'The trace identifier associated with the object write.',
							},
							propertiesWithHistory: {
								description: 'Historical values for the requested properties.',
							},
							url: {
								type: 'string',
								description: 'The URL associated with the contact record.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings generated while reading the contact.',
								items: {
									type: 'object',
									description: 'A PublicObjectWarning returned for the contact.',
									properties: {
										category: {
											type: 'string',
											description: 'The warning category.',
										},
										context: { description: 'Additional warning context.' },
										message: {
											type: 'string',
											description: 'The warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor information for the next page.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for requesting the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listAssociations',
		label: 'List associations',
		description:
			'Returns one page of associations from a source CRM record to one target object type.',
		context:
			"Lists associations with `GET /crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}`. The source `objectType` is limited by this endpoint's static scopes to contacts, companies, deals, or a custom object type ID/name. The endpoint accepts one target object type per call. Per HubSpot documentation, standard path object types may use singular names or object type IDs. This endpoint returns one page; paginate by passing `paging.next.after` to `after`. Because an AI caller cannot amend connection scopes, the endpoint statically requires `crm.objects.contacts.read`, `crm.objects.companies.read`, `crm.objects.deals.read`, and `crm.objects.custom.read`. Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/crm/associations/associate-records/get-associations",
		accounts: {
			hubspotcrm: {
				scope: [
					'crm.objects.contacts.read',
					'crm.objects.companies.read',
					'crm.objects.deals.read',
					'crm.objects.custom.read',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'The source object type: contacts, companies, deals, or a custom object type ID or fully qualified name.',
				},
				objectId: { type: 'string', description: 'The ID of the source CRM record.' },
				toObjectType: {
					type: 'string',
					description:
						'One target object type to list associations for. Standard types may use a singular name or object type ID.',
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` value from the previous response.',
				},
				limit: {
					type: 'number',
					description:
						'The maximum number of associations to return in this page, up to 500.',
					default: 500,
					maximum: 500,
				},
			},
			required: ['objectType', 'objectId', 'toObjectType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The associations returned in this page.',
					items: {
						type: 'object',
						description: 'An associated target record and its association types.',
						properties: {
							toObjectId: {
								type: 'string',
								description: 'The ID of the associated target record.',
							},
							associationTypes: {
								type: 'array',
								description: 'The association definitions connecting the records.',
								items: {
									type: 'object',
									description:
										'A definition of the association between the source and target records.',
									properties: {
										category: {
											type: 'string',
											description:
												'The association category: `HUBSPOT_DEFINED`, `INTEGRATOR_DEFINED`, `USER_DEFINED`, or `WORK`.',
										},
										typeId: {
											type: 'number',
											description: 'The numeric association type ID.',
										},
										label: {
											type: 'string',
											description: 'The association label.',
										},
										fromObjectTypeId: {
											type: 'string',
											description: 'The source object type ID.',
										},
										toObjectTypeId: {
											type: 'string',
											description: 'The target object type ID.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor information for the next page.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for requesting the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listFiles',
		label: 'List files',
		description:
			'Searches HubSpot files using the documented 2026-03 filters and returns one response page.',
		context:
			'Searches files with `GET /files/2026-03/files/search`. This endpoint returns one page and exposes the documented 2026-03 search filters. Use `paging.next.after` or `paging.prev.before` to navigate; `after` and `before` should not be combined in one call. Optional scalar and array query parameters are omitted when empty, and arrays are comma-joined. HubSpot limits the page size to 100. Int64 IDs are represented as text to avoid precision loss. Requires the static OAuth scope `files`. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/files/files/search-files',
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				after: {
					type: 'string',
					description: 'The next-page cursor; do not combine it with **Before**.',
				},
				allowsAnonymousAccess: {
					type: 'boolean',
					description: 'Whether anonymous access is allowed for the file.',
				},
				before: {
					type: 'string',
					description: 'The previous-page cursor; do not combine it with **After**.',
				},
				createdAt: {
					type: 'string',
					description: 'The exact file creation date and time to match.',
				},
				createdAtGte: {
					type: 'string',
					description: 'The earliest file creation date and time to include.',
				},
				createdAtLte: {
					type: 'string',
					description: 'The latest file creation date and time to include.',
				},
				encoding: { type: 'string', description: 'The file encoding to match.' },
				expiresAt: {
					type: 'string',
					description: 'The exact file expiration date and time to match.',
				},
				expiresAtGte: {
					type: 'string',
					description: 'The earliest file expiration date and time to include.',
				},
				expiresAtLte: {
					type: 'string',
					description: 'The latest file expiration date and time to include.',
				},
				extension: { type: 'string', description: 'The file extension to match.' },
				fileMd5: { type: 'string', description: 'The MD5 checksum to match.' },
				height: {
					type: 'number',
					description: 'The exact image height in pixels to match.',
				},
				heightGte: { type: 'number', description: 'The minimum image height in pixels.' },
				heightLte: { type: 'number', description: 'The maximum image height in pixels.' },
				idGte: {
					type: 'string',
					description: 'The lowest int64 file ID to include, represented as text.',
				},
				idLte: {
					type: 'string',
					description: 'The highest int64 file ID to include, represented as text.',
				},
				ids: {
					type: 'array',
					description: 'The file IDs to include.',
					items: { type: 'string', description: 'An int64 file ID represented as text.' },
				},
				isUsableInContent: {
					type: 'boolean',
					description: 'Whether the file can be used in HubSpot content.',
				},
				limit: {
					type: 'number',
					description: 'The maximum number of files to return in this page, up to 100.',
					default: 100,
					maximum: 100,
				},
				name: { type: 'string', description: 'The file name to match.' },
				parentFolderIds: {
					type: 'array',
					description: 'The parent folder IDs to include.',
					items: {
						type: 'string',
						description: 'An int64 parent folder ID represented as text.',
					},
				},
				path: { type: 'string', description: 'The file path to match.' },
				properties: {
					type: 'array',
					description: 'Additional file properties to include.',
					items: {
						type: 'string',
						description: 'An additional file property to return.',
					},
				},
				size: { type: 'number', description: 'The exact file size in bytes to match.' },
				sizeGte: { type: 'number', description: 'The minimum file size in bytes.' },
				sizeLte: { type: 'number', description: 'The maximum file size in bytes.' },
				sort: {
					type: 'array',
					description: 'The ordered sort expressions to apply.',
					items: {
						type: 'string',
						description: 'A field and direction used to sort results.',
					},
				},
				type: { type: 'string', description: 'The file type to match.' },
				updatedAt: {
					type: 'string',
					description: 'The exact file update date and time to match.',
				},
				updatedAtGte: {
					type: 'string',
					description: 'The earliest file update date and time to include.',
				},
				updatedAtLte: {
					type: 'string',
					description: 'The latest file update date and time to include.',
				},
				url: { type: 'string', description: 'The file URL to match.' },
				width: { type: 'number', description: 'The exact image width in pixels to match.' },
				widthGte: { type: 'number', description: 'The minimum image width in pixels.' },
				widthLte: { type: 'number', description: 'The maximum image width in pixels.' },
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The files returned in this page.',
					items: {
						type: 'object',
						description: 'A HubSpot file record.',
						properties: {
							access: { type: 'string', description: 'The file access setting.' },
							archived: {
								type: 'boolean',
								description: 'Whether the file is archived.',
							},
							archivedAt: {
								type: 'string',
								description: 'The date and time when the file was archived.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the file was created.',
							},
							defaultHostingUrl: {
								type: 'string',
								description: "The file's default hosted URL.",
							},
							encoding: { type: 'string', description: 'The file encoding.' },
							expiresAt: {
								type: 'number',
								description: 'The file expiration timestamp returned by HubSpot.',
							},
							extension: { type: 'string', description: 'The file extension.' },
							fileMd5: { type: 'string', description: "The file's MD5 checksum." },
							height: { type: 'number', description: 'The image height in pixels.' },
							id: {
								type: 'string',
								description: 'The int64 file ID represented as text.',
							},
							isUsableInContent: {
								type: 'boolean',
								description: 'Whether the file can be used in HubSpot content.',
							},
							name: { type: 'string', description: 'The file name.' },
							parentFolderId: {
								type: 'string',
								description: 'The int64 parent folder ID represented as text.',
							},
							path: { type: 'string', description: 'The file path.' },
							size: { type: 'number', description: 'The file size in bytes.' },
							sourceGroup: {
								type: 'string',
								description: "The file's source group.",
							},
							type: { type: 'string', description: 'The file type.' },
							updatedAt: {
								type: 'string',
								description: 'The date and time when the file was last updated.',
							},
							url: { type: 'string', description: 'The file URL.' },
							width: { type: 'number', description: 'The image width in pixels.' },
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor information for adjacent pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for requesting the next page.',
							properties: {
								after: { type: 'string', description: 'The next-page cursor.' },
								link: { type: 'string', description: 'The URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Information for requesting the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'The previous-page cursor.',
								},
								link: {
									type: 'string',
									description: 'The URL for the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listForms',
		label: 'List forms',
		description: 'Returns one page of legacy HubSpot marketing form definitions.',
		context:
			'Lists forms with the valid legacy `GET /marketing/v3/forms` operation. Legacy v3 remains supported, but HubSpot has scheduled it for sunset in September 2027; this endpoint intentionally does not switch to the 2026-09 beta API. It returns one page; paginate by passing `paging.next.after` to `after`. The optional `formTypes` array is omitted when empty and comma-joined when present. Requires the static OAuth scope `forms`. Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/get-forms',
		accounts: { hubspotcrm: { scope: ['forms'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formTypes: {
					type: 'array',
					description:
						'The form types to include. HubSpot, Captured, Flow and Blog comment filter by that form type; All includes all supported form types.',
					items: {
						type: 'string',
						description: 'A supported HubSpot form type.',
						default: '',
						enum: ['', 'hubspot', 'captured', 'flow', 'blog_comment', 'all'],
					},
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` value from the previous response.',
				},
				archived: {
					type: 'boolean',
					description:
						'Whether to return only archived forms. When true, only archived forms are returned.',
					default: false,
				},
				limit: {
					type: 'number',
					description: 'The number of forms to request in this page.',
					default: 20,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The form definitions returned in this page.',
					items: {
						type: 'object',
						description: 'A HubSpotFormDefinition returned by the legacy API.',
						properties: {
							archived: {
								type: 'boolean',
								description: 'Whether the form is archived.',
							},
							archivedAt: {
								type: 'string',
								description: 'The date and time when the form was archived.',
							},
							configuration: {
								description:
									"The form's official complex or polymorphic configuration.",
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the form was created.',
							},
							displayOptions: {
								description:
									"The form's official complex or polymorphic display options.",
							},
							fieldGroups: {
								type: 'array',
								description: 'The field groups in the form definition.',
								items: {
									description:
										'An official complex or polymorphic field group definition.',
								},
							},
							formType: { type: 'string', description: 'The form type.' },
							id: { type: 'string', description: 'The unique form identifier.' },
							legalConsentOptions: {
								description:
									"The form's official complex or polymorphic legal consent options.",
							},
							name: { type: 'string', description: 'The form name.' },
							updatedAt: {
								type: 'string',
								description: 'The date and time when the form was last updated.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor information for the next page.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for requesting the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listOwners',
		label: 'List owners',
		description: 'Returns one page of active or archived HubSpot owners.',
		context:
			"Lists owners with `GET /crm/owners/2026-03`. This endpoint returns one page; paginate by passing `paging.next.after` to `after`. The optional email and after filters are omitted when empty. Setting `archived` to true returns only archived owners, not active and archived owners together. HubSpot's v3 migration guidance supports a maximum page size of 500, which this endpoint enforces. Requires the static OAuth scope `crm.objects.owners.read`. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/owners/get-owners",
		accounts: { hubspotcrm: { scope: ['crm.objects.owners.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				email: { type: 'string', description: 'The email address of the owner to return.' },
				archived: {
					type: 'boolean',
					description:
						'Whether to return only archived owners. When false, only active owners are returned.',
					default: false,
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` value from the previous response.',
				},
				limit: {
					type: 'number',
					description: 'The maximum number of owners to return in this page, up to 500.',
					default: 100,
					maximum: 500,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The owners returned in this page.',
					items: {
						type: 'object',
						description: 'A HubSpot owner record.',
						properties: {
							id: { type: 'string', description: 'The unique owner ID.' },
							email: { type: 'string', description: "The owner's email address." },
							firstName: { type: 'string', description: "The owner's first name." },
							lastName: { type: 'string', description: "The owner's last name." },
							type: {
								type: 'string',
								description: 'The owner type: `PERSON` or `QUEUE`.',
							},
							userId: {
								type: 'number',
								description:
									'The associated active HubSpot user ID returned as an int32 number.',
							},
							userIdIncludingInactive: {
								type: 'number',
								description:
									'The associated HubSpot user ID, including inactive users, returned as an int32 number.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the owner was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the owner was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the owner is archived.',
							},
							teams: {
								type: 'array',
								description: 'The teams to which the owner belongs.',
								items: {
									type: 'object',
									description: 'A HubSpot team associated with the owner.',
									properties: {
										id: { type: 'string', description: 'The unique team ID.' },
										name: { type: 'string', description: 'The team name.' },
										primary: {
											type: 'boolean',
											description:
												"Whether this is the owner's primary team.",
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor information for the next page.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for requesting the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listPipelines',
		label: 'List pipelines',
		description: 'Returns all pipelines and stages for deals or tickets.',
		context:
			'Lists pipelines with `GET /crm/pipelines/2026-03/{objectType}` and returns the complete response body. The static endpoint advertises both deals and tickets, and an AI caller cannot amend connection scopes, so it requires both direct scopes: `crm.objects.deals.read` and `tickets`. HubSpot returns all pipelines for the selected object type; this operation does not use pagination. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/pipelines/get-pipelines',
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.read', 'tickets'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'The CRM object type whose pipelines should be returned. Deals requires `crm.objects.deals.read`; Tickets requires `tickets`.',
					enum: ['deals', 'tickets'],
				},
			},
			required: ['objectType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The pipelines for the selected object type.',
					items: {
						type: 'object',
						description: 'A HubSpot CRM pipeline.',
						properties: {
							id: { type: 'string', description: 'The unique pipeline ID.' },
							label: {
								type: 'string',
								description: "The pipeline's user-facing label.",
							},
							displayOrder: {
								type: 'number',
								description: "The pipeline's display order.",
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the pipeline was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the pipeline was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the pipeline is archived.',
							},
							archivedAt: {
								type: 'string',
								description: 'The date and time when the pipeline was archived.',
							},
							stages: {
								type: 'array',
								description: 'The ordered stages in the pipeline.',
								items: {
									type: 'object',
									description: 'A stage within the pipeline.',
									properties: {
										id: { type: 'string', description: 'The unique stage ID.' },
										label: {
											type: 'string',
											description: "The stage's user-facing label.",
										},
										displayOrder: {
											type: 'number',
											description: "The stage's display order.",
										},
										metadata: {
											description:
												"HubSpot's object-specific string-valued metadata map for the stage.",
										},
										createdAt: {
											type: 'string',
											description:
												'The date and time when the stage was created.',
										},
										updatedAt: {
											type: 'string',
											description:
												'The date and time when the stage was last updated.',
										},
										archived: {
											type: 'boolean',
											description: 'Whether the stage is archived.',
										},
										archivedAt: {
											type: 'string',
											description:
												'The date and time when the stage was archived.',
										},
										writePermissions: {
											type: 'string',
											description:
												'The write-permission setting for the stage.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'listTimelineEventTemplates',
		label: 'List timeline event templates',
		description: 'Returns the legacy timeline event templates owned by a HubSpot public app.',
		context:
			'DEPRECATED BY HUBSPOT. Lists legacy timeline event templates with `GET /integrators/timeline/v3/{appId}/event-templates`.\n\n- Authentication: HubSpot documents this operation with a developer API key only (`hapikey` query parameter). It documents no OAuth access and no OAuth scope for it. The Endpoint sends the key and no OAuth bearer token.\n- The connection must have the **HubSpot Developer API Key** filled in its advanced settings. The key is read from the connection; it is not an input and the agent cannot supply it. Without the key, the call cannot be authenticated.\n- `appId` is read from the connection. It is the owning legacy public app ID, not a customer portal ID. There is no input parameter.\n- Only usable for legacy public apps that already have timeline templates.\n- The operation is not paginated and HubSpot caps an app at 750 timeline event templates.\n\nOfficial documentation: https://developers.hubspot.com/docs/api-reference/legacy/crm/extensions/timeline/v3-event-types-external/get-timeline',
		accounts: { hubspotcrm: { scope: [] } },
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
				results: {
					type: 'array',
					description: 'The timeline event templates owned by the app.',
					items: {
						type: 'object',
						description: 'A legacy HubSpot timeline event template.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique timeline event template ID.',
							},
							name: { type: 'string', description: 'The template name.' },
							objectType: {
								type: 'string',
								description:
									'The CRM object type to which events using this template belong.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the template was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the template was last updated.',
							},
							headerTemplate: {
								type: 'string',
								description: 'The template used to render an event header.',
							},
							detailTemplate: {
								type: 'string',
								description: 'The template used to render event details.',
							},
							tokens: {
								type: 'array',
								description: 'The tokens available to the timeline event template.',
								items: {
									type: 'object',
									description: 'A token defined for the timeline event template.',
									properties: {
										name: {
											type: 'string',
											description: "The token's internal name.",
										},
										label: {
											type: 'string',
											description: "The token's user-facing label.",
										},
										type: {
											type: 'string',
											description: 'The token data type.',
										},
										createdAt: {
											type: 'string',
											description:
												'The date and time when the token was created.',
										},
										updatedAt: {
											type: 'string',
											description:
												'The date and time when the token was last updated.',
										},
										objectPropertyName: {
											type: 'string',
											description:
												'The CRM object property linked to the token.',
										},
										options: {
											type: 'array',
											description:
												'The selectable values configured for the token.',
											items: {
												type: 'object',
												description: 'A selectable token option.',
												properties: {
													label: {
														type: 'string',
														description:
															"The option's user-facing label.",
													},
													value: {
														type: 'string',
														description: 'The option value.',
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
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'mergeContacts',
		label: 'Merge contacts',
		description:
			'Irreversibly merges one contact into another and returns the authoritative merged contact record.',
		context:
			"Irreversibly merges two contacts with `POST /crm/objects/2026-03/contacts/merge`.\n\n- Treat the returned contact ID as authoritative: the default merge may create a new ID. Preserving the primary contact ID is available only through HubSpot's beta merge behavior.\n- Primary contact property values generally take precedence over secondary values.\n- HubSpot retains merge history, but association behavior is subject to HubSpot's merge and association limits.\n- Activity synchronization can be delayed after the merge.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/merge-contacts\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				primaryContactId: {
					type: 'string',
					description:
						'ID of the contact whose property values generally take precedence during the irreversible merge. The returned contact ID may differ.',
				},
				secondaryContactId: {
					type: 'string',
					description:
						'ID of the contact to merge into the primary contact. This record stops existing independently after the irreversible merge.',
				},
			},
			required: ['primaryContactId', 'secondaryContactId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'Authoritative ID of the contact returned by the merge.',
				},
				properties: { description: 'Current property values of the merged contact.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the returned contact was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the returned contact was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the returned contact is archived.',
				},
				archivedAt: {
					type: 'string',
					description: 'Date and time when the contact was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description:
						'Trace identifier associated with the object write, when returned.',
				},
				propertiesWithHistory: {
					description: 'Contact property values with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the returned contact, when available.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while processing the merge.',
					items: {
						type: 'object',
						description: 'A warning returned while processing the merge.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: {
								type: 'string',
								description: 'Human-readable warning message.',
							},
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'removeContactFromWorkflow',
		label: 'Remove a contact from a workflow',
		description:
			'Unenrolls one contact from one HubSpot workflow using the legacy Workflows API.',
		context:
			"Removes one contact from one HubSpot workflow with the legacy `DELETE /automation/v2/workflows/{workflowId}/enrollments/contacts/{email}` endpoint.\n\n- The legacy endpoint remains active until September 2027.\n- Requires a Marketing Hub Professional or Enterprise subscription.\n- A successful request returns HTTP 204 with no response body.\n- Pass the numeric legacy `workflowId`. If you only have the workflow editor's `flowId`, call `getWorkflowIdMapping` first and use `results[0].workflowId`.\n- The request layer URL-encodes the contact email in the path.\n- HubSpot additionally requires the contacts sensitive-data write permission only when the workflow uses sensitive data; do not request that permission statically for all calls.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/automation/workflows/v2/unenroll-contact\n",
		accounts: { hubspotcrm: { scope: ['automation'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				workflowId: {
					type: 'number',
					description:
						'Legacy numeric ID of the workflow. Use Get a workflow ID mapping if you only have a flow ID.',
				},
				email: {
					type: 'string',
					description:
						'Email address of the single contact to unenroll. The request layer URL-encodes it in the path.',
				},
			},
			required: ['workflowId', 'email'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'removeListMembers',
		label: 'Remove members from a list',
		description:
			'Removes records from a manual list or a completed snapshot list; dynamic lists are unsupported.',
		context:
			'Removes records with the legacy v3 `PUT /crm/v3/lists/{listId}/memberships/remove` endpoint.\n\n- Supports MANUAL lists and completed SNAPSHOT lists. DYNAMIC lists are unsupported.\n- Nonexistent record IDs and records that are not present in the list are ignored and reported by the response where applicable.\n- `recordIds` is sent as the raw request body array.\n- HubSpot sunsets this v3 endpoint in September 2027; use the 2026-09 replacement for future implementations.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/crm/lists/memberships/remove-from-list\n',
		accounts: { hubspotcrm: { scope: ['crm.lists.write', 'crm.lists.read'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				listId: {
					type: 'string',
					description:
						'Internal ID of a MANUAL list or a completed SNAPSHOT list. DYNAMIC lists are unsupported.',
				},
				recordIds: {
					type: 'array',
					description:
						'CRM record IDs to remove. Nonexistent IDs and records not present in the list are ignored.',
					items: {
						type: 'string',
						description: 'Internal ID of a CRM record to remove from the list.',
					},
				},
			},
			required: ['listId', 'recordIds'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				recordsIdsAdded: {
					type: 'array',
					description: 'Record IDs added as part of membership processing, if any.',
					items: { type: 'string', description: 'ID of a record added to the list.' },
				},
				recordIdsRemoved: {
					type: 'array',
					description: 'Record IDs successfully removed from the list.',
					items: { type: 'string', description: 'ID of a record removed from the list.' },
				},
				recordIdsMissing: {
					type: 'array',
					description: 'Record IDs that did not exist or were not present in the list.',
					items: {
						type: 'string',
						description:
							'ID of a record that did not exist or was not present in the list.',
					},
				},
			},
			required: ['recordsIdsAdded', 'recordIdsRemoved', 'recordIdsMissing'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchCalls',
		label: 'Search calls',
		description:
			'Searches call engagements using a query, filters, sorting, properties, and cursor pagination.',
		context:
			'Searches call engagements with `POST /crm/objects/2026-03/calls/search`. Filters within each filter group are combined with AND; filter groups are combined with OR. Page size is at most 200 records. The query is at most 3,000 characters. A request may contain at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Newly written or updated records may take time to appear in search results. This endpoint requires the static OAuth scope `crm.objects.contacts.read`. Official operation documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/calls/search/search-calls',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"Free-text query matched against the object's default searchable properties. The query can contain at most 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group are combined with AND; groups are combined with OR. Provide at most 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters that are combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group. These filters are combined with AND; use separate groups for OR conditions.',
								items: {
									type: 'object',
									description:
										'A property filter. Required value fields depend on the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the property to filter by.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses value and high value; IN and NOT_IN use values; HAS_PROPERTY and NOT_HAS_PROPERTY use no value; all other operators use value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that take one value, and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound required when the operator is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values required for IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to include in each result.',
					items: {
						type: 'string',
						description: 'Internal name of a property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Sort expression. HubSpot accepts at most one string sort for this operation.',
					items: {
						type: 'string',
						description:
							"Property sort expression accepted by HubSpot's 2026-03 search operation.",
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return on this page, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description: 'Total number of matching records available for the query.',
				},
				results: {
					type: 'array',
					description: 'Matching records returned on this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'Trace identifier associated with the object write.',
							},
							propertiesWithHistory: {
								description:
									'Property values with history when returned by HubSpot.',
							},
							url: {
								type: 'string',
								description:
									'URL associated with the record when returned by HubSpot.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for the record.',
								items: {
									type: 'object',
									description: 'A warning returned by HubSpot.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor pagination links for adjacent pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for the next page.',
							properties: {
								after: {
									type: 'string',
									description:
										'Cursor to pass as after to request the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchCommunications',
		label: 'Search communications',
		description:
			'Searches communications using a query, filters, sorting, properties, and cursor pagination.',
		context:
			'Searches communications with `POST /crm/objects/2026-03/communications/search`. Filters within each filter group are combined with AND; filter groups are combined with OR. Page size is at most 200 records. The query is at most 3,000 characters. A request may contain at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Newly written or updated records may take time to appear in search results. This endpoint requires the static OAuth scope `crm.objects.contacts.read`. Official operation documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/communications/search/search-communications',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"Free-text query matched against the object's default searchable properties. The query can contain at most 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group are combined with AND; groups are combined with OR. Provide at most 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters that are combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group. These filters are combined with AND; use separate groups for OR conditions.',
								items: {
									type: 'object',
									description:
										'A property filter. Required value fields depend on the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the property to filter by.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses value and high value; IN and NOT_IN use values; HAS_PROPERTY and NOT_HAS_PROPERTY use no value; all other operators use value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that take one value, and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound required when the operator is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values required for IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to include in each result.',
					items: {
						type: 'string',
						description: 'Internal name of a property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Sort expression. HubSpot accepts at most one string sort for this operation.',
					items: {
						type: 'string',
						description:
							"Property sort expression accepted by HubSpot's 2026-03 search operation.",
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return on this page, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description: 'Total number of matching records available for the query.',
				},
				results: {
					type: 'array',
					description: 'Matching records returned on this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'Trace identifier associated with the object write.',
							},
							propertiesWithHistory: {
								description:
									'Property values with history when returned by HubSpot.',
							},
							url: {
								type: 'string',
								description:
									'URL associated with the record when returned by HubSpot.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for the record.',
								items: {
									type: 'object',
									description: 'A warning returned by HubSpot.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor pagination links for adjacent pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for the next page.',
							properties: {
								after: {
									type: 'string',
									description:
										'Cursor to pass as after to request the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchCompanies',
		label: 'Search companies',
		description: 'Searches companies by query and filters.',
		context:
			'Calls `POST /crm/objects/2026-03/companies/search`. Filters within a filter group are combined with AND; filter groups are combined with OR. A page contains at most 200 records. `query` is limited to 3,000 characters. Requests allow at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Recent writes may take time to appear in search results. Required static scope: `crm.objects.companies.read`. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/companies/search/search-companies',
		accounts: { hubspotcrm: { scope: ['crm.objects.companies.read'] } },
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
						"Free-text search term matched against the object's default searchable properties. Maximum 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group use AND; groups use OR. Maximum 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters combined with AND. Maximum 6 filters in this group and 18 across all groups.',
								items: {
									type: 'object',
									description:
										'A property filter. Supply value, high value, or values as required by the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description: 'Internal name of the property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses Value and High value; IN and NOT_IN use Values; HAS_PROPERTY and NOT_HAS_PROPERTY require no value; other operators use Value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that accept one value. Also supplies the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound used only with the BETWEEN operator.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values used by IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to return for each record.',
					items: {
						type: 'string',
						description: 'Internal name of a property to include.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Property sort expression. HubSpot accepts only one sort for this operation.',
					items: {
						type: 'string',
						description:
							'Sort expression in the format expected by HubSpot, such as `-createdate`.',
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from `paging.next.after` in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching records, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Records returned for this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'Trace identifier associated with the record write, when available.',
							},
							propertiesWithHistory: {
								description: 'Property values and their history, when returned.',
							},
							url: {
								type: 'string',
								description: 'URL of the record, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this record.',
								items: {
									type: 'object',
									description: 'A warning associated with the record.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description: 'Additional structured warning context.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Paging information for the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as `after` for the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Paging information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchContacts',
		label: 'Search contacts',
		description: 'Searches contacts by query and filters.',
		context:
			'Calls `POST /crm/objects/2026-03/contacts/search`. Filters within a filter group are combined with AND; filter groups are combined with OR. A page contains at most 200 records. `query` is limited to 3,000 characters. Requests allow at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Recent writes may take time to appear in search results. Required static scope: `crm.objects.contacts.read`. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/search/search-contacts',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"Free-text search term matched against the object's default searchable properties. Maximum 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group use AND; groups use OR. Maximum 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters combined with AND. Maximum 6 filters in this group and 18 across all groups.',
								items: {
									type: 'object',
									description:
										'A property filter. Supply value, high value, or values as required by the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description: 'Internal name of the property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses Value and High value; IN and NOT_IN use Values; HAS_PROPERTY and NOT_HAS_PROPERTY require no value; other operators use Value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that accept one value. Also supplies the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound used only with the BETWEEN operator.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values used by IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to return for each record.',
					items: {
						type: 'string',
						description: 'Internal name of a property to include.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Property sort expression. HubSpot accepts only one sort for this operation.',
					items: {
						type: 'string',
						description:
							'Sort expression in the format expected by HubSpot, such as `-createdate`.',
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from `paging.next.after` in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching records, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Records returned for this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'Trace identifier associated with the record write, when available.',
							},
							propertiesWithHistory: {
								description: 'Property values and their history, when returned.',
							},
							url: {
								type: 'string',
								description: 'URL of the record, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this record.',
								items: {
									type: 'object',
									description: 'A warning associated with the record.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description: 'Additional structured warning context.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Paging information for the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as `after` for the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Paging information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchCustomObjects',
		label: 'Search custom object records',
		description:
			'Searches custom object records using a query, filters, sorting, and cursor pagination.',
		context:
			'Searches custom object records only with `POST /crm/objects/2026-03/{objectType}/search`. Filters within a group are combined with AND; filter groups are combined with OR. The page size is at most 200 records. The query is at most 3,000 characters. A request supports at most 5 filter groups, 6 filters per group, and 18 filters total, plus one sort. Results are limited to the first 10,000 matches. HubSpot permits 5 search requests per second per account. Archived records are excluded. Recently created or updated records may not appear immediately because search indexing is eventually consistent. Scope is static and limited to `crm.objects.custom.read`; no schema, module, RPC, or helper scope is required. Verified official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/custom-objects/search/search-custom-objects',
		accounts: { hubspotcrm: { scope: ['crm.objects.custom.read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						"The custom object's object type ID or fully qualified name, for example `2-123456` or `p123456_my_object`. Standard CRM object types are not supported.",
				},
				query: {
					type: 'string',
					description:
						"A free-text search term of up to 3,000 characters, matched against the object's default searchable properties.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Up to 5 filter groups. Filters within a group are combined with AND; separate groups are combined with OR. Across all groups, use at most 18 filters.',
					items: {
						type: 'object',
						description:
							'A group whose filters are combined with AND. Separate groups are combined with OR; requests may contain at most 18 filters in total.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Up to 6 filters combined with AND. Across all groups, use at most 18 filters.',
								items: {
									type: 'object',
									description: 'A property comparison used to match records.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'The internal name of the property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Use `value` with EQ, NEQ, LT, LTE, GT, GTE, or CONTAINS_TOKEN; use `value` and `highValue` with BETWEEN; use `values` with IN or NOT_IN; HAS_PROPERTY and NOT_HAS_PROPERTY need no value. Strings supplied to IN and NOT_IN must be lowercase.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'The comparison value for single-value operators, or the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'The upper bound when **Operator** is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values when **Operator** is IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string to compare with the selected property.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to include in each result.',
					items: {
						type: 'string',
						description: 'The internal name of a property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'At most one sort expression, such as `createdate` for ascending or `-createdate` for descending order.',
					items: {
						type: 'string',
						description:
							'A property name, optionally prefixed with `-` for descending order.',
					},
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` cursor from the previous response.',
				},
				limit: {
					type: 'number',
					description: 'The maximum number of results to return, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: ['objectType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"The total number of matching records, subject to HubSpot's 10,000-result search ceiling.",
				},
				results: {
					type: 'array',
					description: 'The matching CRM records on this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the CRM record.' },
							properties: {
								description:
									'The requested record properties, keyed by internal property name.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'The date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'The trace ID associated with the object write, when available.',
							},
							propertiesWithHistory: {
								description:
									'Property values and their history, keyed by internal property name, when returned.',
							},
							url: {
								type: 'string',
								description: 'The URL associated with the record, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this record.',
								items: {
									type: 'object',
									description: 'A warning associated with the record.',
									properties: {
										category: {
											type: 'string',
											description: 'The warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'The warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Cursor and link for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Cursor and link for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'The cursor for the previous page.',
								},
								link: {
									type: 'string',
									description: 'The URL for the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchDeals',
		label: 'Search deals',
		description: 'Searches deals by query and filters.',
		context:
			'Calls `POST /crm/objects/2026-03/deals/search`. Filters within a filter group are combined with AND; filter groups are combined with OR. A page contains at most 200 records; `limit` defaults to 10 when omitted. Without `properties`, HubSpot returns only a small default set of deal properties (such as `dealname`, `amount`, `dealstage`, `pipeline`, `closedate` and `createdate`); list the internal names you need in `properties`. For the next page, pass `paging.next.after` from the response as `after`. `query` is limited to 3,000 characters. Requests allow at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Recent writes may take time to appear in search results. Required static scope: `crm.objects.deals.read`. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/deals/search-deals',
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.read'] } },
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
						"Free-text search term matched against the object's default searchable properties. Maximum 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group use AND; groups use OR. Maximum 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters combined with AND. Maximum 6 filters in this group and 18 across all groups.',
								items: {
									type: 'object',
									description:
										'A property filter. Supply value, high value, or values as required by the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description: 'Internal name of the property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses Value and High value; IN and NOT_IN use Values; HAS_PROPERTY and NOT_HAS_PROPERTY require no value; other operators use Value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that accept one value. Also supplies the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound used only with the BETWEEN operator.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values used by IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to return for each record.',
					items: {
						type: 'string',
						description: 'Internal name of a property to include.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Property sort expression. HubSpot accepts only one sort for this operation.',
					items: {
						type: 'string',
						description:
							'Sort expression in the format expected by HubSpot, such as `-createdate`.',
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from `paging.next.after` in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching records, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Records returned for this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'Trace identifier associated with the record write, when available.',
							},
							propertiesWithHistory: {
								description: 'Property values and their history, when returned.',
							},
							url: {
								type: 'string',
								description: 'URL of the record, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this record.',
								items: {
									type: 'object',
									description: 'A warning associated with the record.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description: 'Additional structured warning context.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Paging information for the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as `after` for the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Paging information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchEmails',
		label: 'Search emails',
		description:
			'Searches email engagements using a query, filters, sorting, properties, and cursor pagination.',
		context:
			'Searches email engagements with `POST /crm/objects/2026-03/emails/search`. Filters within each filter group are combined with AND; filter groups are combined with OR. Page size is at most 200 records. The query is at most 3,000 characters. A request may contain at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Newly written or updated records may take time to appear in search results. This endpoint requires the static OAuth scope `crm.objects.contacts.read`. Official operation documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/emails/search/search-emails',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"Free-text query matched against the object's default searchable properties. The query can contain at most 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group are combined with AND; groups are combined with OR. Provide at most 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters that are combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group. These filters are combined with AND; use separate groups for OR conditions.',
								items: {
									type: 'object',
									description:
										'A property filter. Required value fields depend on the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the property to filter by.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses value and high value; IN and NOT_IN use values; HAS_PROPERTY and NOT_HAS_PROPERTY use no value; all other operators use value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that take one value, and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound required when the operator is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values required for IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to include in each result.',
					items: {
						type: 'string',
						description: 'Internal name of a property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Sort expression. HubSpot accepts at most one string sort for this operation.',
					items: {
						type: 'string',
						description:
							"Property sort expression accepted by HubSpot's 2026-03 search operation.",
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return on this page, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description: 'Total number of matching records available for the query.',
				},
				results: {
					type: 'array',
					description: 'Matching records returned on this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'Trace identifier associated with the object write.',
							},
							propertiesWithHistory: {
								description:
									'Property values with history when returned by HubSpot.',
							},
							url: {
								type: 'string',
								description:
									'URL associated with the record when returned by HubSpot.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for the record.',
								items: {
									type: 'object',
									description: 'A warning returned by HubSpot.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor pagination links for adjacent pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for the next page.',
							properties: {
								after: {
									type: 'string',
									description:
										'Cursor to pass as after to request the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchInvoices',
		label: 'Search invoices',
		description: 'Searches HubSpot invoices by free-text query and structured filters.',
		context:
			'Searches invoices with `POST /crm/objects/2026-03/invoices/search`. Filters in one group use AND; groups use OR. A page contains at most 200 records. The query is limited to 3,000 characters; requests support at most 5 filter groups, 6 filters per group, 18 filters total, and one sort. HubSpot returns at most 10,000 results per query and allows 5 search requests per second per account. Archived records are excluded. Search indexing is eventually consistent, so recent changes may not appear immediately. Static scope: `crm.objects.invoices.read` only; no helper, module, or RPC scopes. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/invoices/search/search-invoices',
		accounts: { hubspotcrm: { scope: ['crm.objects.invoices.read'] } },
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
						'Free-text search across the invoice properties that HubSpot makes searchable. Maximum 3,000 characters.',
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups are combined with OR. Maximum 5 groups and 18 filters total across all groups.',
					items: {
						type: 'object',
						description: 'A group of filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group are combined with AND. Maximum 6 filters per group and 18 filters total.',
								items: {
									type: 'object',
									description: 'A property filter for this invoice search.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the invoice property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison: EQ, NEQ, GT, GTE, LT, LTE. Range: BETWEEN uses value and high value. Text: CONTAINS_TOKEN, NOT_CONTAINS_TOKEN. Presence: HAS_PROPERTY, NOT_HAS_PROPERTY. Membership: IN, NOT_IN use values and lowercase string values.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value. Required by single-value operators and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description: 'Upper bound used only with BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Values used with IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of invoice properties to return.',
					items: {
						type: 'string',
						description: 'Internal name of an invoice property to include.',
					},
				},
				sorts: {
					type: 'array',
					description: 'Sort expression. HubSpot accepts at most one sort.',
					items: {
						type: 'string',
						description: 'Property sort expression, such as createdate or -createdate.',
					},
				},
				after: {
					type: 'string',
					description: 'Paging cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Number of results in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching invoices, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Matching invoices in this page.',
					items: {
						type: 'object',
						description: 'A matching HubSpot invoice.',
						properties: {
							id: { type: 'string', description: 'Unique invoice record ID.' },
							properties: { description: 'Current invoice property values.' },
							createdAt: {
								type: 'string',
								description: 'Date and time when the invoice was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the invoice was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the invoice is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the invoice was archived, when applicable.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'HubSpot write trace identifier, when returned.',
							},
							propertiesWithHistory: {
								description: 'Invoice property history, when returned.',
							},
							url: {
								type: 'string',
								description: 'HubSpot URL for the invoice, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned by HubSpot for this invoice.',
								items: {
									type: 'object',
									description: 'A HubSpot search warning.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Structured context associated with the warning.',
										},
										message: {
											type: 'string',
											description: 'Human-readable warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Paging cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Details for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as after for the next page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the next page.',
								},
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Details for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchLineItems',
		label: 'Search line items',
		description: 'Searches HubSpot line items by free-text query and structured filters.',
		context:
			'Searches line items with `POST /crm/objects/2026-03/line_items/search`. Filters in one group use AND; groups use OR. A page contains at most 200 records. The query is limited to 3,000 characters; requests support at most 5 filter groups, 6 filters per group, 18 filters total, and one sort. HubSpot returns at most 10,000 results per query and allows 5 search requests per second per account. Archived records are excluded. Search indexing is eventually consistent, so recent changes may not appear immediately. Static scope: `crm.objects.line_items.read` only; no helper, module, or RPC scopes. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/line-items/search/search-line-items',
		accounts: { hubspotcrm: { scope: ['crm.objects.line_items.read'] } },
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
						'Free-text search across the line item properties that HubSpot makes searchable. Maximum 3,000 characters.',
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups are combined with OR. Maximum 5 groups and 18 filters total across all groups.',
					items: {
						type: 'object',
						description: 'A group of filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group are combined with AND. Maximum 6 filters per group and 18 filters total.',
								items: {
									type: 'object',
									description: 'A property filter for this line item search.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the line item property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison: EQ, NEQ, GT, GTE, LT, LTE. Range: BETWEEN uses value and high value. Text: CONTAINS_TOKEN, NOT_CONTAINS_TOKEN. Presence: HAS_PROPERTY, NOT_HAS_PROPERTY. Membership: IN, NOT_IN use values and lowercase string values.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value. Required by single-value operators and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description: 'Upper bound used only with BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Values used with IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of line item properties to return.',
					items: {
						type: 'string',
						description: 'Internal name of a line item property to include.',
					},
				},
				sorts: {
					type: 'array',
					description: 'Sort expression. HubSpot accepts at most one sort.',
					items: {
						type: 'string',
						description: 'Property sort expression, such as createdate or -createdate.',
					},
				},
				after: {
					type: 'string',
					description: 'Paging cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Number of results in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching line items, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Matching line items in this page.',
					items: {
						type: 'object',
						description: 'A matching HubSpot line item.',
						properties: {
							id: { type: 'string', description: 'Unique line item record ID.' },
							properties: { description: 'Current line item property values.' },
							createdAt: {
								type: 'string',
								description: 'Date and time when the line item was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the line item was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the line item is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the line item was archived, when applicable.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'HubSpot write trace identifier, when returned.',
							},
							propertiesWithHistory: {
								description: 'Line item property history, when returned.',
							},
							url: {
								type: 'string',
								description: 'HubSpot URL for the line item, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned by HubSpot for this line item.',
								items: {
									type: 'object',
									description: 'A HubSpot search warning.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Structured context associated with the warning.',
										},
										message: {
											type: 'string',
											description: 'Human-readable warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Paging cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Details for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as after for the next page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the next page.',
								},
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Details for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchMeetings',
		label: 'Search meetings',
		description:
			'Searches meeting engagements using a query, filters, sorting, properties, and cursor pagination.',
		context:
			'Searches meeting engagements with `POST /crm/objects/2026-03/meetings/search`. Filters within each filter group are combined with AND; filter groups are combined with OR. Page size is at most 200 records. The query is at most 3,000 characters. A request may contain at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Newly written or updated records may take time to appear in search results. This endpoint requires the static OAuth scope `crm.objects.contacts.read`. Official operation documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/meetings/search/search-meetings',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"Free-text query matched against the object's default searchable properties. The query can contain at most 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group are combined with AND; groups are combined with OR. Provide at most 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters that are combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group. These filters are combined with AND; use separate groups for OR conditions.',
								items: {
									type: 'object',
									description:
										'A property filter. Required value fields depend on the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the property to filter by.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses value and high value; IN and NOT_IN use values; HAS_PROPERTY and NOT_HAS_PROPERTY use no value; all other operators use value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that take one value, and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound required when the operator is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values required for IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to include in each result.',
					items: {
						type: 'string',
						description: 'Internal name of a property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Sort expression. HubSpot accepts at most one string sort for this operation.',
					items: {
						type: 'string',
						description:
							"Property sort expression accepted by HubSpot's 2026-03 search operation.",
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return on this page, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description: 'Total number of matching records available for the query.',
				},
				results: {
					type: 'array',
					description: 'Matching records returned on this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'Trace identifier associated with the object write.',
							},
							propertiesWithHistory: {
								description:
									'Property values with history when returned by HubSpot.',
							},
							url: {
								type: 'string',
								description:
									'URL associated with the record when returned by HubSpot.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for the record.',
								items: {
									type: 'object',
									description: 'A warning returned by HubSpot.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor pagination links for adjacent pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Information for the next page.',
							properties: {
								after: {
									type: 'string',
									description:
										'Cursor to pass as after to request the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchNotes',
		label: 'Search notes',
		description: 'Searches notes using a query, filters, sorting, and cursor pagination.',
		context:
			'Searches notes with `POST /crm/objects/2026-03/notes/search`. Filters within a group are combined with AND; filter groups are combined with OR. The page size is at most 200 records. The query is at most 3,000 characters. A request supports at most 5 filter groups, 6 filters per group, and 18 filters total, plus one sort. Results are limited to the first 10,000 matches. HubSpot permits 5 search requests per second per account. Archived records are excluded. Recently created or updated records may not appear immediately because search indexing is eventually consistent. Scope is static and limited to `crm.objects.contacts.read`; no module, RPC, or helper scope is required. Verified official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/notes/search/search-notes',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"A free-text search term of up to 3,000 characters, matched against the note's default searchable properties.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Up to 5 filter groups. Filters within a group are combined with AND; separate groups are combined with OR. Across all groups, use at most 18 filters.',
					items: {
						type: 'object',
						description:
							'A group whose filters are combined with AND. Separate groups are combined with OR; requests may contain at most 18 filters in total.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Up to 6 filters combined with AND. Across all groups, use at most 18 filters.',
								items: {
									type: 'object',
									description: 'A property comparison used to match notes.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'The internal name of the note property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Use `value` with EQ, NEQ, LT, LTE, GT, GTE, or CONTAINS_TOKEN; use `value` and `highValue` with BETWEEN; use `values` with IN or NOT_IN; HAS_PROPERTY and NOT_HAS_PROPERTY need no value. Strings supplied to IN and NOT_IN must be lowercase.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'The comparison value for single-value operators, or the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'The upper bound when **Operator** is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values when **Operator** is IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string to compare with the selected property.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of note properties to include in each result.',
					items: {
						type: 'string',
						description: 'The internal name of a note property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'At most one sort expression, such as `hs_createdate` for ascending or `-hs_createdate` for descending order.',
					items: {
						type: 'string',
						description:
							'A property name, optionally prefixed with `-` for descending order.',
					},
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` cursor from the previous response.',
				},
				limit: {
					type: 'number',
					description: 'The maximum number of results to return, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"The total number of matching notes, subject to HubSpot's 10,000-result search ceiling.",
				},
				results: {
					type: 'array',
					description: 'The matching notes on this page.',
					items: {
						type: 'object',
						description: 'A matching note record.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the note.' },
							properties: {
								description:
									'The requested note properties, keyed by internal property name.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the note was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the note was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the note is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'The date and time when the note was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'The trace ID associated with the object write, when available.',
							},
							propertiesWithHistory: {
								description:
									'Note property values and their history, keyed by internal property name, when returned.',
							},
							url: {
								type: 'string',
								description: 'The URL associated with the note, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this note.',
								items: {
									type: 'object',
									description: 'A warning associated with the note.',
									properties: {
										category: {
											type: 'string',
											description: 'The warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'The warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Cursor and link for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Cursor and link for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'The cursor for the previous page.',
								},
								link: {
									type: 'string',
									description: 'The URL for the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchOrders',
		label: 'Search orders',
		description: 'Searches HubSpot orders by free-text query and structured filters.',
		context:
			'Searches orders with `POST /crm/objects/2026-03/orders/search`. Filters in one group use AND; groups use OR. A page contains at most 200 records. The query is limited to 3,000 characters; requests support at most 5 filter groups, 6 filters per group, 18 filters total, and one sort. HubSpot returns at most 10,000 results per query and allows 5 search requests per second per account. Archived records are excluded. Search indexing is eventually consistent, so recent changes may not appear immediately. Static scope: `crm.objects.orders.read` only; no helper, module, or RPC scopes. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/orders/search/search-orders',
		accounts: { hubspotcrm: { scope: ['crm.objects.orders.read'] } },
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
						'Free-text search across the order properties that HubSpot makes searchable. Maximum 3,000 characters.',
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups are combined with OR. Maximum 5 groups and 18 filters total across all groups.',
					items: {
						type: 'object',
						description: 'A group of filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group are combined with AND. Maximum 6 filters per group and 18 filters total.',
								items: {
									type: 'object',
									description: 'A property filter for this order search.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the order property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison: EQ, NEQ, GT, GTE, LT, LTE. Range: BETWEEN uses value and high value. Text: CONTAINS_TOKEN, NOT_CONTAINS_TOKEN. Presence: HAS_PROPERTY, NOT_HAS_PROPERTY. Membership: IN, NOT_IN use values and lowercase string values.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value. Required by single-value operators and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description: 'Upper bound used only with BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Values used with IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of order properties to return.',
					items: {
						type: 'string',
						description: 'Internal name of an order property to include.',
					},
				},
				sorts: {
					type: 'array',
					description: 'Sort expression. HubSpot accepts at most one sort.',
					items: {
						type: 'string',
						description: 'Property sort expression, such as createdate or -createdate.',
					},
				},
				after: {
					type: 'string',
					description: 'Paging cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Number of results in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching orders, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Matching orders in this page.',
					items: {
						type: 'object',
						description: 'A matching HubSpot order.',
						properties: {
							id: { type: 'string', description: 'Unique order record ID.' },
							properties: { description: 'Current order property values.' },
							createdAt: {
								type: 'string',
								description: 'Date and time when the order was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the order was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the order is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the order was archived, when applicable.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'HubSpot write trace identifier, when returned.',
							},
							propertiesWithHistory: {
								description: 'Order property history, when returned.',
							},
							url: {
								type: 'string',
								description: 'HubSpot URL for the order, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned by HubSpot for this order.',
								items: {
									type: 'object',
									description: 'A HubSpot search warning.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Structured context associated with the warning.',
										},
										message: {
											type: 'string',
											description: 'Human-readable warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Paging cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Details for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as after for the next page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the next page.',
								},
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Details for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchProducts',
		label: 'Search products',
		description: 'Searches HubSpot products by free-text query and structured filters.',
		context:
			'Searches products with `POST /crm/objects/2026-03/products/search`. Filters in one group use AND; groups use OR. A page contains at most 200 records. The query is limited to 3,000 characters; requests support at most 5 filter groups, 6 filters per group, 18 filters total, and one sort. HubSpot returns at most 10,000 results per query and allows 5 search requests per second per account. Archived records are excluded. Search indexing is eventually consistent, so recent changes may not appear immediately. Static scope: `crm.objects.products.read` only; no helper, module, or RPC scopes. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/products/search/search-products',
		accounts: { hubspotcrm: { scope: ['crm.objects.products.read'] } },
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
						'Free-text search across the product properties that HubSpot makes searchable. Maximum 3,000 characters.',
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups are combined with OR. Maximum 5 groups and 18 filters total across all groups.',
					items: {
						type: 'object',
						description: 'A group of filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters in this group are combined with AND. Maximum 6 filters per group and 18 filters total.',
								items: {
									type: 'object',
									description: 'A property filter for this product search.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'Internal name of the product property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison: EQ, NEQ, GT, GTE, LT, LTE. Range: BETWEEN uses value and high value. Text: CONTAINS_TOKEN, NOT_CONTAINS_TOKEN. Presence: HAS_PROPERTY, NOT_HAS_PROPERTY. Membership: IN, NOT_IN use values and lowercase string values.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value. Required by single-value operators and the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description: 'Upper bound used only with BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Values used with IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of product properties to return.',
					items: {
						type: 'string',
						description: 'Internal name of a product property to include.',
					},
				},
				sorts: {
					type: 'array',
					description: 'Sort expression. HubSpot accepts at most one sort.',
					items: {
						type: 'string',
						description: 'Property sort expression, such as createdate or -createdate.',
					},
				},
				after: {
					type: 'string',
					description: 'Paging cursor from paging.next.after in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Number of results in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching products, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Matching products in this page.',
					items: {
						type: 'object',
						description: 'A matching HubSpot product.',
						properties: {
							id: { type: 'string', description: 'Unique product record ID.' },
							properties: { description: 'Current product property values.' },
							createdAt: {
								type: 'string',
								description: 'Date and time when the product was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the product was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the product is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the product was archived, when applicable.',
							},
							objectWriteTraceId: {
								type: 'string',
								description: 'HubSpot write trace identifier, when returned.',
							},
							propertiesWithHistory: {
								description: 'Product property history, when returned.',
							},
							url: {
								type: 'string',
								description: 'HubSpot URL for the product, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned by HubSpot for this product.',
								items: {
									type: 'object',
									description: 'A HubSpot search warning.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description:
												'Structured context associated with the warning.',
										},
										message: {
											type: 'string',
											description: 'Human-readable warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Paging cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Details for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as after for the next page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the next page.',
								},
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Details for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: {
									type: 'string',
									description: 'HubSpot link to the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchQuotes',
		label: 'Search quotes',
		description: 'Searches quotes using a query, filters, sorting, and cursor pagination.',
		context:
			'Searches quotes with `POST /crm/objects/2026-03/quotes/search`. Filters within a group are combined with AND; filter groups are combined with OR. The page size is at most 200 records. The query is at most 3,000 characters. A request supports at most 5 filter groups, 6 filters per group, and 18 filters total, plus one sort. Results are limited to the first 10,000 matches. HubSpot permits 5 search requests per second per account. Archived records are excluded. Recently created or updated records may not appear immediately because search indexing is eventually consistent. Scope is static and limited to the direct quote read scope `crm.objects.quotes.read`; no module, RPC, or helper scope is required. Verified official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/quotes/search/search-quotes',
		accounts: { hubspotcrm: { scope: ['crm.objects.quotes.read'] } },
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
						"A free-text search term of up to 3,000 characters, matched against the quote's default searchable properties.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Up to 5 filter groups. Filters within a group are combined with AND; separate groups are combined with OR. Across all groups, use at most 18 filters.',
					items: {
						type: 'object',
						description:
							'A group whose filters are combined with AND. Separate groups are combined with OR; requests may contain at most 18 filters in total.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Up to 6 filters combined with AND. Across all groups, use at most 18 filters.',
								items: {
									type: 'object',
									description: 'A property comparison used to match quotes.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'The internal name of the quote property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Use `value` with EQ, NEQ, LT, LTE, GT, GTE, or CONTAINS_TOKEN; use `value` and `highValue` with BETWEEN; use `values` with IN or NOT_IN; HAS_PROPERTY and NOT_HAS_PROPERTY need no value. Strings supplied to IN and NOT_IN must be lowercase.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'The comparison value for single-value operators, or the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'The upper bound when **Operator** is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values when **Operator** is IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string to compare with the selected property.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of quote properties to include in each result.',
					items: {
						type: 'string',
						description: 'The internal name of a quote property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'At most one sort expression, such as `hs_createdate` for ascending or `-hs_createdate` for descending order.',
					items: {
						type: 'string',
						description:
							'A property name, optionally prefixed with `-` for descending order.',
					},
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` cursor from the previous response.',
				},
				limit: {
					type: 'number',
					description: 'The maximum number of results to return, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"The total number of matching quotes, subject to HubSpot's 10,000-result search ceiling.",
				},
				results: {
					type: 'array',
					description: 'The matching quotes on this page.',
					items: {
						type: 'object',
						description: 'A matching quote record.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the quote.' },
							properties: {
								description:
									'The requested quote properties, keyed by internal property name.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the quote was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the quote was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the quote is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'The date and time when the quote was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'The trace ID associated with the object write, when available.',
							},
							propertiesWithHistory: {
								description:
									'Quote property values and their history, keyed by internal property name, when returned.',
							},
							url: {
								type: 'string',
								description: 'The URL associated with the quote, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this quote.',
								items: {
									type: 'object',
									description: 'A warning associated with the quote.',
									properties: {
										category: {
											type: 'string',
											description: 'The warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'The warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Cursor and link for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Cursor and link for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'The cursor for the previous page.',
								},
								link: {
									type: 'string',
									description: 'The URL for the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchTasks',
		label: 'Search tasks',
		description: 'Searches tasks using a query, filters, sorting, and cursor pagination.',
		context:
			'Searches tasks with `POST /crm/objects/2026-03/tasks/search`. Filters within a group are combined with AND; filter groups are combined with OR. The page size is at most 200 records. The query is at most 3,000 characters. A request supports at most 5 filter groups, 6 filters per group, and 18 filters total, plus one sort. Results are limited to the first 10,000 matches. HubSpot permits 5 search requests per second per account. Archived records are excluded. Recently created or updated records may not appear immediately because search indexing is eventually consistent. Scope is static and limited to `crm.objects.contacts.read`; no module, RPC, or helper scope is required. Verified official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/tasks/search/search-tasks',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.read'] } },
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
						"A free-text search term of up to 3,000 characters, matched against the task's default searchable properties.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Up to 5 filter groups. Filters within a group are combined with AND; separate groups are combined with OR. Across all groups, use at most 18 filters.',
					items: {
						type: 'object',
						description:
							'A group whose filters are combined with AND. Separate groups are combined with OR; requests may contain at most 18 filters in total.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Up to 6 filters combined with AND. Across all groups, use at most 18 filters.',
								items: {
									type: 'object',
									description: 'A property comparison used to match tasks.',
									properties: {
										propertyName: {
											type: 'string',
											description:
												'The internal name of the task property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Use `value` with EQ, NEQ, LT, LTE, GT, GTE, or CONTAINS_TOKEN; use `value` and `highValue` with BETWEEN; use `values` with IN or NOT_IN; HAS_PROPERTY and NOT_HAS_PROPERTY need no value. Strings supplied to IN and NOT_IN must be lowercase.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'The comparison value for single-value operators, or the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'The upper bound when **Operator** is BETWEEN.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values when **Operator** is IN or NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string to compare with the selected property.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of task properties to include in each result.',
					items: {
						type: 'string',
						description: 'The internal name of a task property to return.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'At most one sort expression, such as `hs_createdate` for ascending or `-hs_createdate` for descending order.',
					items: {
						type: 'string',
						description:
							'A property name, optionally prefixed with `-` for descending order.',
					},
				},
				after: {
					type: 'string',
					description: 'The `paging.next.after` cursor from the previous response.',
				},
				limit: {
					type: 'number',
					description: 'The maximum number of results to return, up to 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"The total number of matching tasks, subject to HubSpot's 10,000-result search ceiling.",
				},
				results: {
					type: 'array',
					description: 'The matching tasks on this page.',
					items: {
						type: 'object',
						description: 'A matching task record.',
						properties: {
							id: { type: 'string', description: 'The unique ID of the task.' },
							properties: {
								description:
									'The requested task properties, keyed by internal property name.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the task was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the task was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the task is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'The date and time when the task was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'The trace ID associated with the object write, when available.',
							},
							propertiesWithHistory: {
								description:
									'Task property values and their history, keyed by internal property name, when returned.',
							},
							url: {
								type: 'string',
								description: 'The URL associated with the task, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this task.',
								items: {
									type: 'object',
									description: 'A warning associated with the task.',
									properties: {
										category: {
											type: 'string',
											description: 'The warning category.',
										},
										context: {
											description:
												'Additional structured context for the warning.',
										},
										message: {
											type: 'string',
											description: 'The warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursor links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Cursor and link for the next page, when available.',
							properties: {
								after: {
									type: 'string',
									description: 'The cursor for the next page.',
								},
								link: { type: 'string', description: 'The URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Cursor and link for the previous page, when available.',
							properties: {
								before: {
									type: 'string',
									description: 'The cursor for the previous page.',
								},
								link: {
									type: 'string',
									description: 'The URL for the previous page.',
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'searchTickets',
		label: 'Search tickets',
		description: 'Searches tickets by query and filters.',
		context:
			'Calls `POST /crm/objects/2026-03/tickets/search`. Filters within a filter group are combined with AND; filter groups are combined with OR. A page contains at most 200 records. `query` is limited to 3,000 characters. Requests allow at most 5 filter groups, 6 filters per group, and 18 filters total. Only one sort is allowed. HubSpot returns at most 10,000 results per query and permits 5 search requests per second per account. Archived records are excluded. Recent writes may take time to appear in search results. Required static scope: `tickets`. Official operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/tickets/search/search-tickets',
		accounts: { hubspotcrm: { scope: ['tickets'] } },
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
						"Free-text search term matched against the object's default searchable properties. Maximum 3,000 characters.",
					maximum: 3000,
				},
				filterGroups: {
					type: 'array',
					description:
						'Filter groups to apply. Filters within a group use AND; groups use OR. Maximum 5 groups and 18 filters total.',
					items: {
						type: 'object',
						description: 'A group of up to 6 filters combined with AND.',
						properties: {
							filters: {
								type: 'array',
								description:
									'Filters combined with AND. Maximum 6 filters in this group and 18 across all groups.',
								items: {
									type: 'object',
									description:
										'A property filter. Supply value, high value, or values as required by the selected operator.',
									properties: {
										propertyName: {
											type: 'string',
											description: 'Internal name of the property to filter.',
										},
										operator: {
											type: 'string',
											description:
												'Comparison operator. BETWEEN uses Value and High value; IN and NOT_IN use Values; HAS_PROPERTY and NOT_HAS_PROPERTY require no value; other operators use Value.',
											enum: [
												'BETWEEN',
												'CONTAINS_TOKEN',
												'EQ',
												'GT',
												'GTE',
												'HAS_PROPERTY',
												'IN',
												'LT',
												'LTE',
												'NEQ',
												'NOT_CONTAINS_TOKEN',
												'NOT_HAS_PROPERTY',
												'NOT_IN',
											],
										},
										value: {
											type: 'string',
											description:
												'Comparison value for operators that accept one value. Also supplies the lower bound for BETWEEN.',
										},
										highValue: {
											type: 'string',
											description:
												'Upper bound used only with the BETWEEN operator.',
										},
										values: {
											type: 'array',
											description:
												'Comparison values used by IN and NOT_IN. String values must be lowercase.',
											items: {
												type: 'string',
												description:
													'A lowercase string value for IN or NOT_IN.',
											},
										},
									},
									required: ['propertyName', 'operator'],
								},
							},
						},
						required: [],
					},
				},
				properties: {
					type: 'array',
					description: 'Internal names of properties to return for each record.',
					items: {
						type: 'string',
						description: 'Internal name of a property to include.',
					},
				},
				sorts: {
					type: 'array',
					description:
						'Property sort expression. HubSpot accepts only one sort for this operation.',
					items: {
						type: 'string',
						description:
							'Sort expression in the format expected by HubSpot, such as `-createdate`.',
					},
				},
				after: {
					type: 'string',
					description: 'Cursor from `paging.next.after` in the previous response.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return in this page. Maximum 200.',
					default: 10,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total: {
					type: 'number',
					description:
						"Total number of matching records, up to HubSpot's 10,000-result query limit.",
				},
				results: {
					type: 'array',
					description: 'Records returned for this page.',
					items: {
						type: 'object',
						description: 'A matching CRM record.',
						properties: {
							id: { type: 'string', description: 'Unique record ID.' },
							properties: {
								description: 'Current property values returned for the record.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the record was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the record was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the record is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the record was archived, when available.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'Trace identifier associated with the record write, when available.',
							},
							propertiesWithHistory: {
								description: 'Property values and their history, when returned.',
							},
							url: {
								type: 'string',
								description: 'URL of the record, when returned.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned for this record.',
								items: {
									type: 'object',
									description: 'A warning associated with the record.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: {
											description: 'Additional structured warning context.',
										},
										message: {
											type: 'string',
											description: 'Warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors and links for adjacent result pages.',
					properties: {
						next: {
							type: 'object',
							description: 'Paging information for the next page.',
							properties: {
								after: {
									type: 'string',
									description: 'Cursor to pass as `after` for the next page.',
								},
								link: { type: 'string', description: 'URL for the next page.' },
							},
							required: [],
						},
						prev: {
							type: 'object',
							description: 'Paging information for the previous page.',
							properties: {
								before: {
									type: 'string',
									description: 'Cursor identifying the previous page.',
								},
								link: { type: 'string', description: 'URL for the previous page.' },
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
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'submitFormData',
		label: 'Submit form data',
		description:
			"Submits data to a HubSpot marketing form, creating or updating the associated contact as HubSpot's form-processing rules dictate.",
		context:
			"Submits data to a HubSpot marketing form through the legacy v3 unauthenticated submission endpoint.\n\n- Uses the official global Forms API host: `https://api.hsforms.com`.\n- This endpoint does not require authentication and supports cross-origin (CORS) requests.\n- Required consent data depends on the form's configured consent options.\n- A successful submission does not guarantee that HubSpot creates or updates a contact; contact handling depends on the form and account configuration.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated\n",
		accounts: { hubspotcrm: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				portalId: {
					type: 'string',
					description: 'The HubSpot account (hub) ID that owns the form.',
				},
				formGuid: {
					type: 'string',
					description: 'The unique ID of the HubSpot form to submit.',
				},
				fields: {
					type: 'array',
					description: 'The form field values to submit. Add no more than 1,000 fields.',
					items: {
						type: 'object',
						properties: {
							objectTypeId: {
								type: 'string',
								description:
									'The type of CRM object that contains the property, for example `0-1` for contacts or `0-2` for companies.',
							},
							name: {
								type: 'string',
								description: 'The internal name of the form field or CRM property.',
							},
							value: {
								type: 'string',
								description: 'The value to submit for the field.',
							},
						},
						required: ['objectTypeId', 'name', 'value'],
					},
				},
				submittedAt: {
					type: 'string',
					description:
						'The submission time as a millisecond timestamp. It cannot be older than one month.',
				},
				context: {
					type: 'object',
					description: 'Context about the visitor and page where the form was submitted.',
					properties: {
						hutk: {
							type: 'string',
							description:
								"The visitor's `hubspotutk` cookie value used to associate the submission with tracking data.",
						},
						ipAddress: { type: 'string', description: "The visitor's IP address." },
						pageName: {
							type: 'string',
							description:
								'The name or title of the page where the form was submitted.',
						},
						pageUri: {
							type: 'string',
							description: 'The URI of the page where the form was submitted.',
						},
						pageId: {
							type: 'string',
							description: 'The ID of the HubSpot page where the form was submitted.',
						},
						sfdcCampaignId: {
							type: 'string',
							description:
								'The Salesforce campaign ID to associate with the submission.',
						},
						goToWebinarWebinarKey: {
							type: 'string',
							description:
								'The GoToWebinar webinar key to associate with the submission.',
						},
					},
					required: [],
				},
				legalConsentOptions: {
					type: 'object',
					description:
						"Consent details required by the form's data privacy configuration.",
					properties: {
						consent: {
							type: 'object',
							description:
								'Explicit consent to process data and receive specified communications.',
							properties: {
								consentToProcess: {
									type: 'boolean',
									description:
										'Whether the visitor consents to the processing of their personal data.',
								},
								text: {
									type: 'string',
									description:
										'The notice text shown when the visitor gave consent to data processing.',
								},
								communications: {
									type: 'array',
									description:
										'Consent choices for individual communication subscription types.',
									items: {
										type: 'object',
										properties: {
											value: {
												type: 'boolean',
												description:
													'Whether the visitor consents to this communication subscription type.',
											},
											subscriptionTypeId: {
												type: 'number',
												description:
													'The ID of the communication subscription type.',
											},
											text: {
												type: 'string',
												description:
													'The notice text shown for this communication consent choice.',
											},
										},
										required: ['value', 'subscriptionTypeId', 'text'],
									},
								},
							},
							required: ['consentToProcess', 'text', 'communications'],
						},
						legitimateInterest: {
							type: 'object',
							description:
								'Legitimate-interest details for processing and communication.',
							properties: {
								value: {
									type: 'boolean',
									description:
										'Confirms legitimate interest. This value must be `true`.',
								},
								subscriptionTypeId: {
									type: 'number',
									description:
										'The ID of the communication subscription type covered by legitimate interest.',
								},
								legalBasis: {
									type: 'string',
									description:
										'Whether the legitimate-interest relationship is with a customer or a lead.',
									enum: ['CUSTOMER', 'LEAD'],
								},
								text: {
									type: 'string',
									description:
										'The legitimate-interest notice shown to the visitor.',
								},
							},
							required: ['value', 'subscriptionTypeId', 'legalBasis', 'text'],
						},
					},
					required: [],
				},
			},
			required: ['portalId', 'formGuid', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				redirectUri: {
					type: 'string',
					description:
						'The configured redirect URI when the form redirects after submission.',
				},
				inlineMessage: {
					type: 'string',
					description:
						'The configured HTML thank-you message when the form displays an inline message.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'subscribeContact',
		label: 'Subscribe a contact',
		description:
			"Subscribes a contact's email address to a specific communication subscription type.",
		context:
			"Subscribes an email address to a communication subscription type through HubSpot's legacy email-only v3 Communication Preferences API.\n\n- Subscription definitions and IDs come from HubSpot's communication preference subscription definitions.\n- Use this operation only when the contact has actually granted the required permission and applicable privacy law permits the subscription.\n- The response describes the resulting communication preference status.\n- This v3 operation cannot resubscribe a contact who previously opted out of the subscription.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/communication-preferences/v3/subscribe-contact\n",
		accounts: { hubspotcrm: { scope: ['communication_preferences.read_write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				emailAddress: {
					type: 'string',
					description: "The contact's email address to subscribe.",
				},
				subscriptionId: {
					type: 'string',
					description:
						'The ID of the communication subscription type. Obtain it from the subscription definitions endpoint.',
				},
				legalBasis: {
					type: 'string',
					description:
						"The legal basis for processing the contact's data for this subscription.",
					default: '',
					enum: [
						'',
						'CONSENT_WITH_NOTICE',
						'LEGITIMATE_INTEREST_CLIENT',
						'LEGITIMATE_INTEREST_OTHER',
						'LEGITIMATE_INTEREST_PQL',
						'NON_GDPR',
						'PERFORMANCE_OF_CONTRACT',
						'PROCESS_AND_STORE',
					],
				},
				legalBasisExplanation: {
					type: 'string',
					description: 'An explanation supporting the selected legal basis.',
				},
			},
			required: ['emailAddress', 'subscriptionId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The ID of the communication subscription status.',
				},
				name: {
					type: 'string',
					description: 'The name of the communication subscription type.',
				},
				description: {
					type: 'string',
					description: 'The description of the communication subscription type.',
				},
				sourceOfStatus: {
					type: 'string',
					description:
						'The level from which the returned subscription status originates.',
					enum: ['BRAND_WIDE_STATUS', 'PORTAL_WIDE_STATUS', 'SUBSCRIPTION_STATUS'],
				},
				status: {
					type: 'string',
					description: "The contact's resulting subscription status.",
					enum: ['NOT_SUBSCRIBED', 'SUBSCRIBED'],
				},
				brandId: {
					type: 'number',
					description: 'The ID of the brand associated with the subscription status.',
				},
				legalBasis: {
					type: 'string',
					description: 'The legal basis recorded for the subscription status.',
					default: '',
					enum: [
						'',
						'CONSENT_WITH_NOTICE',
						'LEGITIMATE_INTEREST_CLIENT',
						'LEGITIMATE_INTEREST_OTHER',
						'LEGITIMATE_INTEREST_PQL',
						'NON_GDPR',
						'PERFORMANCE_OF_CONTRACT',
						'PROCESS_AND_STORE',
					],
				},
				legalBasisExplanation: {
					type: 'string',
					description: 'The explanation recorded for the legal basis.',
				},
				preferenceGroupName: {
					type: 'string',
					description:
						'The name of the preference group containing the subscription type.',
				},
			},
			required: ['id', 'name', 'description', 'sourceOfStatus', 'status'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'unsubscribeContact',
		label: 'Unsubscribe a contact',
		description:
			"Unsubscribes a contact's email address from a specific communication subscription type.",
		context:
			"Unsubscribes an email address from a communication subscription type with `POST /communication-preferences/v3/unsubscribe` (HubSpot's legacy email-only v3 Communication Preferences API). Required scope: `communication_preferences.read_write`.\n\n- Subscription definitions and IDs come from HubSpot's communication preference subscription definitions.\n- Use this operation according to the contact's actual permission and applicable privacy law.\n- The response describes the resulting communication preference status.\n- Removing a subscription status is destructive because this v3 API cannot necessarily reverse a previous opt-out.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/legacy/communication-preferences/v3/unsubscribe-contact\n",
		accounts: { hubspotcrm: { scope: ['communication_preferences.read_write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				emailAddress: {
					type: 'string',
					description: "The contact's email address to unsubscribe.",
				},
				subscriptionId: {
					type: 'string',
					description:
						'The ID of the communication subscription type. Obtain it from the subscription definitions endpoint.',
				},
				legalBasis: {
					type: 'string',
					description:
						'The legal basis associated with changing this subscription status.',
					default: '',
					enum: [
						'',
						'CONSENT_WITH_NOTICE',
						'LEGITIMATE_INTEREST_CLIENT',
						'LEGITIMATE_INTEREST_OTHER',
						'LEGITIMATE_INTEREST_PQL',
						'NON_GDPR',
						'PERFORMANCE_OF_CONTRACT',
						'PROCESS_AND_STORE',
					],
				},
				legalBasisExplanation: {
					type: 'string',
					description: 'An explanation supporting the selected legal basis.',
				},
			},
			required: ['emailAddress', 'subscriptionId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The ID of the communication subscription status.',
				},
				name: {
					type: 'string',
					description: 'The name of the communication subscription type.',
				},
				description: {
					type: 'string',
					description: 'The description of the communication subscription type.',
				},
				sourceOfStatus: {
					type: 'string',
					description:
						'The level from which the returned subscription status originates.',
					enum: ['BRAND_WIDE_STATUS', 'PORTAL_WIDE_STATUS', 'SUBSCRIPTION_STATUS'],
				},
				status: {
					type: 'string',
					description: "The contact's resulting subscription status.",
					enum: ['NOT_SUBSCRIBED', 'SUBSCRIBED'],
				},
				brandId: {
					type: 'number',
					description: 'The ID of the brand associated with the subscription status.',
				},
				legalBasis: {
					type: 'string',
					description: 'The legal basis recorded for the subscription status.',
					default: '',
					enum: [
						'',
						'CONSENT_WITH_NOTICE',
						'LEGITIMATE_INTEREST_CLIENT',
						'LEGITIMATE_INTEREST_OTHER',
						'LEGITIMATE_INTEREST_PQL',
						'NON_GDPR',
						'PERFORMANCE_OF_CONTRACT',
						'PROCESS_AND_STORE',
					],
				},
				legalBasisExplanation: {
					type: 'string',
					description: 'The explanation recorded for the legal basis.',
				},
				preferenceGroupName: {
					type: 'string',
					description:
						'The name of the preference group containing the subscription type.',
				},
			},
			required: ['id', 'name', 'description', 'sourceOfStatus', 'status'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateCall',
		label: 'Update a call',
		description: "Updates a HubSpot call's properties.",
		context:
			'Updates a call with `PATCH /crm/objects/2026-03/calls/{id}`. This is a partial update: only keys included in `properties` are changed; an empty string clears a property, while omitted properties remain unchanged. Read-only or nonexistent properties cause an error. `id` may be the internal record ID or a unique property value when `idProperty` is supplied. Associations require a separate association endpoint. Static OAuth scope: `crm.objects.contacts.write`. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/calls/update-call',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"The call's internal record ID, or the value of the unique property selected in ID property.",
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique call property used to identify the record. Leave empty when ID is the internal record ID.',
				},
				properties: {
					description:
						'A JSON object whose keys are call property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique call record ID.' },
				properties: {
					description: "The call's current property values returned by HubSpot.",
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the call was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the call was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the call is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the call was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier associated with the object write.',
				},
				propertiesWithHistory: {
					description: 'Historical values for returned call properties.',
				},
				url: { type: 'string', description: 'The URL associated with the call record.' },
				warnings: {
					type: 'array',
					description: 'Warnings generated while updating the call.',
					items: {
						type: 'object',
						description: 'A warning returned for the call update.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateCommunication',
		label: 'Update a communication',
		description: "Updates a HubSpot communication's properties.",
		context:
			'Updates a communication with `PATCH /crm/objects/2026-03/communications/{id}`. This is a partial update: only keys included in `properties` are changed; an empty string clears a property, while omitted properties remain unchanged. Read-only or nonexistent properties cause an error. `id` may be the internal record ID or a unique property value when `idProperty` is supplied. Associations require a separate association endpoint. Communications represent messages from external channels; this endpoint does not send or manage HubSpot marketing SMS. Static OAuth scope: `crm.objects.contacts.write`. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/communications/update-communication',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"The communication's internal record ID, or the value of the unique property selected in ID property.",
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique communication property used to identify the record. Leave empty when ID is the internal record ID.',
				},
				properties: {
					description:
						'A JSON object whose keys are communication property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique communication record ID.' },
				properties: {
					description: "The communication's current property values returned by HubSpot.",
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the communication was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the communication was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the communication is archived.',
				},
				archivedAt: {
					type: 'string',
					description: 'The date and time when the communication was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier associated with the object write.',
				},
				propertiesWithHistory: {
					description: 'Historical values for returned communication properties.',
				},
				url: {
					type: 'string',
					description: 'The URL associated with the communication record.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings generated while updating the communication.',
					items: {
						type: 'object',
						description: 'A warning returned for the communication update.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateCompany',
		label: 'Update a company',
		description: "Updates a HubSpot company's properties.",
		context:
			"Updates a company with `PATCH /crm/objects/2026-03/companies/{id}`. This is a partial update: only keys included in `properties` are changed; an empty string clears a property, while omitted properties remain unchanged. Read-only or nonexistent properties cause an error. `id` may be the internal record ID or a unique property value when `idProperty` is supplied. Associations require a separate association endpoint. The `lifecyclestage` property can move forward only; clear it first before moving it backward. Static OAuth scope: `crm.objects.companies.write`. Updating classified company properties conditionally requires `crm.objects.companies.sensitive.write.v2` or `crm.objects.companies.highly_sensitive.write.v2`, according to the property's classification. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/companies/update-company",
		accounts: { hubspotcrm: { scope: ['crm.objects.companies.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"The company's internal record ID, or the value of the unique property selected in ID property.",
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique company property used to identify the record. Leave empty when ID is the internal record ID.',
				},
				properties: {
					description:
						'A JSON object whose keys are company property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique company record ID.' },
				properties: {
					description: "The company's current property values returned by HubSpot.",
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the company was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the company was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the company is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the company was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier associated with the object write.',
				},
				propertiesWithHistory: {
					description: 'Historical values for returned company properties.',
				},
				url: { type: 'string', description: 'The URL associated with the company record.' },
				warnings: {
					type: 'array',
					description: 'Warnings generated while updating the company.',
					items: {
						type: 'object',
						description: 'A warning returned for the company update.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateContact',
		label: 'Update a contact',
		description: "Updates a HubSpot contact's properties.",
		context:
			"Updates a contact with `PATCH /crm/objects/2026-03/contacts/{id}`. This is a partial update: only keys included in `properties` are changed; an empty string clears a property, while omitted properties remain unchanged. Read-only or nonexistent properties cause an error. `id` may be the internal record ID or a unique property value when `idProperty` is supplied. Associations require a separate association endpoint. The `lifecyclestage` property can move forward only; clear it first before moving it backward. Static OAuth scope: `crm.objects.contacts.write`. Updating classified contact properties conditionally requires `crm.objects.contacts.sensitive.write.v2` or `crm.objects.contacts.highly_sensitive.write.v2`, according to the property's classification. Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/update-contact",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"The contact's internal record ID, or the value of the unique property selected in ID property.",
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique contact property used to identify the record. Leave empty when ID is the internal record ID.',
				},
				properties: {
					description:
						'A JSON object whose keys are contact property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique contact record ID.' },
				properties: {
					description: "The contact's current property values returned by HubSpot.",
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the contact was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the contact was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the contact is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the contact was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier associated with the object write.',
				},
				propertiesWithHistory: {
					description: 'Historical values for returned contact properties.',
				},
				url: { type: 'string', description: 'The URL associated with the contact record.' },
				warnings: {
					type: 'array',
					description: 'Warnings generated while updating the contact.',
					items: {
						type: 'object',
						description: 'A warning returned for the contact update.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateCustomObject',
		label: 'Update a custom object record',
		description:
			'Updates the properties of an existing custom object record and returns the updated object.',
		context:
			"Updates selected properties of a custom object record with `PATCH /crm/objects/2026-03/{objectType}/{id}`. This is a partial update: omitted properties remain unchanged; pass an empty string to clear a property value. Invalid, read-only, or nonexistent properties cause an error. By default, `id` is the record's internal ID; set `idProperty` when `id` is a unique property value. Associations are managed separately through association operations. The endpoint requests only the static `crm.objects.custom.write` scope; updating classified properties additionally requires the connected HubSpot account to have the applicable sensitive or highly sensitive property write permission. Official 2026-03 operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/custom-objects/update-custom-object",
		accounts: { hubspotcrm: { scope: ['crm.objects.custom.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				objectType: {
					type: 'string',
					description:
						'Custom object type ID or fully qualified name. Standard CRM objects such as contacts, companies, deals, and tickets are not supported.',
				},
				id: {
					type: 'string',
					description:
						"The record's internal ID, or a unique property value when ID property is provided.",
				},
				idProperty: {
					type: 'string',
					description:
						'Internal name of the unique property used to identify the record. Omit it when Record ID or unique value contains the internal record ID.',
				},
				properties: {
					description:
						'JSON object whose keys are property internal names. Send values as strings; an empty string clears a property, and omitted properties remain unchanged. Invalid or read-only properties cause an error.',
				},
			},
			required: ['objectType', 'id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID of the updated record.' },
				properties: {
					description: 'Current property values returned for the updated record.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the record was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the record was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the record is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the record was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description:
						'Trace identifier associated with the object write, when returned.',
				},
				propertiesWithHistory: {
					description: 'Property values and their historical versions, when returned.',
				},
				url: {
					type: 'string',
					description: 'HubSpot URL for the updated record, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the record.',
					items: {
						type: 'object',
						description: 'A warning returned while updating the record.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: {
								type: 'string',
								description: 'Human-readable warning message.',
							},
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateDeal',
		label: 'Update a deal',
		description: 'Updates the properties of an existing deal and returns the updated object.',
		context:
			"Updates selected deal properties with `PATCH /crm/objects/2026-03/0-3/{id}`. This is a partial update: omitted properties remain unchanged; pass an empty string to clear a property value. Invalid, read-only, or nonexistent properties cause an error. By default, `id` is the deal's internal ID; set `idProperty` when `id` is a unique property value. Associations are managed separately through association operations. The endpoint requests only the static `crm.objects.deals.write` scope; updating classified properties additionally requires the connected HubSpot account to have the applicable sensitive or highly sensitive property write permission. Official 2026-03 operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/deals/update-deal",
		accounts: { hubspotcrm: { scope: ['crm.objects.deals.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"The deal's internal ID, or a unique property value when ID property is provided.",
				},
				idProperty: {
					type: 'string',
					description:
						'Internal name of the unique property used to identify the deal. Omit it when Deal ID or unique value contains the internal record ID.',
				},
				properties: {
					description:
						'JSON object whose keys are deal property internal names. Send values as strings; an empty string clears a property, and omitted properties remain unchanged. Invalid or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID of the updated deal.' },
				properties: {
					description: 'Current property values returned for the updated deal.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the deal was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the deal was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the deal is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the deal was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Trace identifier associated with the deal write, when returned.',
				},
				propertiesWithHistory: {
					description:
						'Deal property values and their historical versions, when returned.',
				},
				url: {
					type: 'string',
					description: 'HubSpot URL for the updated deal, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the deal.',
					items: {
						type: 'object',
						description: 'A warning returned while updating the deal.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: {
								type: 'string',
								description: 'Human-readable warning message.',
							},
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateEmail',
		label: 'Update an email',
		description:
			'Updates the properties of an existing email engagement and returns the updated object.',
		context:
			"Updates selected email engagement properties with `PATCH /crm/objects/2026-03/emails/{id}`. This is a partial update: omitted properties remain unchanged; pass an empty string to clear a property value. Invalid, read-only, or nonexistent properties cause an error. By default, `id` is the email's internal ID; set `idProperty` when `id` is a unique property value. Associations are managed separately through association operations. The endpoint requests only the static `crm.objects.contacts.write` scope, the documented sufficient alternative for this 2026-03 operation; updating classified properties additionally requires the connected HubSpot account to have the applicable sensitive or highly sensitive property write permission. Official 2026-03 operation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/emails/update-email",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						"The email engagement's internal ID, or a unique property value when ID property is provided.",
				},
				idProperty: {
					type: 'string',
					description:
						'Internal name of the unique property used to identify the email engagement. Omit it when Email ID or unique value contains the internal record ID.',
				},
				properties: {
					description:
						'JSON object whose keys are email property internal names. Send values as strings; an empty string clears a property, and omitted properties remain unchanged. Invalid or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID of the updated email engagement.' },
				properties: {
					description:
						'Current property values returned for the updated email engagement.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the email engagement was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the email engagement was last updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the email engagement is archived.',
				},
				archivedAt: {
					type: 'string',
					description:
						'Date and time when the email engagement was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description:
						'Trace identifier associated with the email engagement write, when returned.',
				},
				propertiesWithHistory: {
					description:
						'Email property values and their historical versions, when returned.',
				},
				url: {
					type: 'string',
					description: 'HubSpot URL for the updated email engagement, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the email engagement.',
					items: {
						type: 'object',
						description: 'A warning returned while updating the email engagement.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: {
								description: 'Additional structured context for the warning.',
							},
							message: {
								type: 'string',
								description: 'Human-readable warning message.',
							},
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateFileProperties',
		label: 'Update file properties',
		description:
			"Updates a file's name, folder location, access permissions, expiration, or content usability.",
		context:
			'Updates file metadata with the legacy Files v3 operation `PATCH /files/v3/files/{fileId}`. Supply at least one update field. `parentFolderId` and `parentFolderPath` are mutually exclusive. `clearExpires` removes the current expiration; `createdAt` is immutable. This operation updates metadata only. Use the file content replacement `PUT` operation to replace file contents. The endpoint requests only the static `files` scope. Official legacy v3 operation: https://developers.hubspot.com/docs/api-reference/files-files-v3/files/patch-files-v3-files-fileId',
		accounts: { hubspotcrm: { scope: ['files'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fileId: {
					type: 'string',
					description: 'Numeric ID of the file to update. Enter digits only.',
				},
				name: {
					type: 'string',
					description: 'New file name. Omit it to leave the current name unchanged.',
				},
				parentFolderId: {
					type: 'string',
					description:
						'Numeric ID of the destination folder. Do not provide Parent folder path in the same request.',
				},
				parentFolderPath: {
					type: 'string',
					description:
						'Path of the destination folder. Do not provide Parent folder ID in the same request.',
				},
				access: {
					type: 'string',
					description:
						'New file visibility and indexing level. Omit it to leave the current access unchanged.',
					default: '',
					enum: [
						'',
						'HIDDEN_INDEXABLE',
						'HIDDEN_NOT_INDEXABLE',
						'HIDDEN_PRIVATE',
						'HIDDEN_SENSITIVE',
						'PRIVATE',
						'PUBLIC_INDEXABLE',
						'PUBLIC_NOT_INDEXABLE',
						'SENSITIVE',
					],
				},
				expiresAt: {
					type: 'string',
					description:
						'Date and time when the file should expire. Omit it to leave the current expiration unchanged.',
				},
				clearExpires: {
					type: 'boolean',
					description:
						"Set to true to remove the file's current expiration. False is preserved when explicitly provided.",
				},
				isUsableInContent: {
					type: 'boolean',
					description:
						'Whether the file can be used in HubSpot content. False is preserved when explicitly provided.',
				},
			},
			required: ['fileId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique numeric ID of the file.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the file was created.',
				},
				archivedAt: {
					type: 'string',
					description: 'Date and time when the file was archived, when applicable.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the file was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the file is archived.' },
				parentFolderId: {
					type: 'string',
					description: 'ID of the folder that contains the file.',
				},
				name: { type: 'string', description: 'Current file name.' },
				path: { type: 'string', description: "Current path in HubSpot's file manager." },
				size: { type: 'number', description: 'File size in bytes.' },
				height: {
					type: 'number',
					description: 'File height in pixels for supported visual media.',
				},
				width: {
					type: 'number',
					description: 'File width in pixels for supported visual media.',
				},
				encoding: { type: 'string', description: 'Character encoding, when available.' },
				type: {
					type: 'string',
					description: 'HubSpot file type: IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.',
				},
				extension: {
					type: 'string',
					description: 'File extension without the leading period.',
				},
				defaultHostingUrl: {
					type: 'string',
					description: 'Default HubSpot-hosted URL for the file.',
				},
				url: { type: 'string', description: 'Current URL used to access the file.' },
				isUsableInContent: {
					type: 'boolean',
					description: 'Whether the file can be used in HubSpot content.',
				},
				access: {
					type: 'string',
					description: 'Current file visibility and indexing level.',
				},
				sourceGroup: {
					type: 'string',
					description:
						'HubSpot product area that owns the file: CONTENT, CONVERSATIONS, FORMS, UI_EXTENSIONS, or UNKNOWN.',
				},
				fileMd5: { type: 'string', description: 'MD5 checksum of the file contents.' },
				expiresAt: {
					type: 'number',
					description:
						'File expiration timestamp in milliseconds since the Unix epoch, when configured.',
				},
			},
			required: ['id', 'createdAt', 'updatedAt', 'archived', 'access'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateLineItem',
		label: 'Update a line item',
		description:
			'Updates the properties of an existing line item and returns the updated object.',
		context:
			"Updates a line item's properties with `PATCH /crm/objects/2026-03/line_items/{id}`. This is a partial update: omitted properties remain unchanged. Property values must be strings; an empty string clears a property, and invalid or read-only properties cause an error. By default, `id` is the line item record ID; set `idProperty` when `id` is a value from a custom unique identifier property. Associations are managed separately and are not changed by this operation. A line item should belong to only one parent object. Tiered pricing must use HubSpot's dedicated tiered-pricing properties instead of the standard `price` property. Required OAuth scope: `crm.objects.line_items.write`.\n\nOfficial documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/line-items/update-line-item",
		accounts: { hubspotcrm: { scope: ['crm.objects.line_items.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The line item record ID, or the value of the unique property specified in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a custom property that requires unique values. Leave empty when ID is the line item record ID.',
				},
				properties: {
					description:
						'A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The line item record ID.' },
				properties: { description: "The line item's current property values." },
				createdAt: {
					type: 'string',
					description: 'The date and time when the line item was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the line item was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the line item is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the line item was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier for the write operation.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their historical versions.',
				},
				url: { type: 'string', description: 'The URL of the line item in HubSpot.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the line item.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional context for the warning.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateMeeting',
		label: 'Update a meeting',
		description:
			'Updates the properties of an existing meeting engagement and returns the updated object.',
		context:
			"Updates a meeting engagement's properties with `PATCH /crm/objects/2026-03/meetings/{id}`. This is a partial update: omitted properties remain unchanged. Property values must be strings; an empty string clears a property, and invalid or read-only properties cause an error. By default, `id` is the meeting record ID; set `idProperty` when `id` is a value from a custom unique identifier property. Associations are managed separately and are not changed by this operation. Required OAuth scope: `crm.objects.contacts.write`.\n\nOfficial documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/meetings/update-meeting",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The meeting record ID, or the value of the unique property specified in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a custom property that requires unique values. Leave empty when ID is the meeting record ID.',
				},
				properties: {
					description:
						'A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The meeting record ID.' },
				properties: { description: "The meeting's current property values." },
				createdAt: {
					type: 'string',
					description: 'The date and time when the meeting was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the meeting was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the meeting is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the meeting was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier for the write operation.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their historical versions.',
				},
				url: { type: 'string', description: 'The URL of the meeting in HubSpot.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the meeting.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional context for the warning.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateNote',
		label: 'Update a note',
		description:
			'Updates the properties of an existing note engagement and returns the updated object.',
		context:
			"Updates a note engagement's properties with `PATCH /crm/objects/2026-03/notes/{id}`. This is a partial update: omitted properties remain unchanged. Property values must be strings; an empty string clears a property, and invalid or read-only properties cause an error. By default, `id` is the note record ID; set `idProperty` when `id` is a value from a custom unique identifier property. Associations are managed separately and are not changed by this operation. The `hs_note_body` property has a maximum length of 65,536 characters. In `hs_attachment_ids`, separate multiple attachment IDs with semicolons. Required OAuth scope: `crm.objects.contacts.write`.\n\nOfficial documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/notes/update-note",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The note record ID, or the value of the unique property specified in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a custom property that requires unique values. Leave empty when ID is the note record ID.',
				},
				properties: {
					description:
						'A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The note record ID.' },
				properties: { description: "The note's current property values." },
				createdAt: {
					type: 'string',
					description: 'The date and time when the note was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the note was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the note is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the note was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier for the write operation.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their historical versions.',
				},
				url: { type: 'string', description: 'The URL of the note in HubSpot.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the note.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional context for the warning.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateOrder',
		label: 'Update an order',
		description: 'Updates the properties of an existing order and returns the updated object.',
		context:
			"Updates an order's properties with `PATCH /crm/objects/2026-03/orders/{id}`. This is a partial update: omitted properties remain unchanged. Property values must be strings; an empty string clears a property, and invalid or read-only properties cause an error. By default, `id` is the order record ID; set `idProperty` when `id` is a value from a custom unique identifier property. Associations are managed separately and are not changed by this operation. Required OAuth scope: `crm.objects.orders.write`.\n\nOfficial documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/orders/update-order",
		accounts: { hubspotcrm: { scope: ['crm.objects.orders.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The order record ID, or the value of the unique property specified in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a custom property that requires unique values. Leave empty when ID is the order record ID.',
				},
				properties: {
					description:
						'A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The order record ID.' },
				properties: { description: "The order's current property values." },
				createdAt: {
					type: 'string',
					description: 'The date and time when the order was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the order was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the order is archived.' },
				archivedAt: {
					type: 'string',
					description: 'The date and time when the order was archived.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'The trace identifier for the write operation.',
				},
				propertiesWithHistory: {
					description: 'Property values together with their historical versions.',
				},
				url: { type: 'string', description: 'The URL of the order in HubSpot.' },
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the order.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'The warning category.' },
							context: { description: 'Additional context for the warning.' },
							message: { type: 'string', description: 'The warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateProduct',
		label: 'Update a product',
		description:
			'Updates the properties of an existing product and returns the updated object.',
		context:
			"Updates a product's properties with `PATCH /crm/objects/2026-03/products/{id}`. This is a partial update: only supplied properties are changed, and an empty string clears a property. Use `idProperty` when `id` contains a unique property value instead of the record ID. Invalid property names or values and read-only properties cause an error.\n\nThis endpoint does not change associations. Products cannot be associated directly with other CRM objects; create a product-based line item to attach product information to a deal or quote. Tiered pricing uses `hs_tier_ranges` and `hs_tier_prices` serialized as JSON strings with a supported `hs_pricing_model`.\n\nThe required OAuth scope is statically limited to `crm.objects.products.write`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/products/update-product\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.products.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The product record ID, or the value of the unique property selected in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique product property used to identify the product. Leave empty when ID contains the record ID.',
				},
				properties: {
					description:
						'JSON object of product property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the updated product.' },
				properties: { description: 'Property values returned for the updated product.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the product was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the product was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the product is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the product was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description:
						'Identifier used to trace the product update request, when returned.',
				},
				propertiesWithHistory: {
					description:
						'Product property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the updated product, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the product.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateQuote',
		label: 'Update a quote',
		description: 'Updates the properties of an existing quote and returns the updated object.',
		context:
			"Updates a quote's properties with `PATCH /crm/objects/2026-03/quotes/{id}`. This is a partial update: only supplied properties are changed, and an empty string clears a property. Use `idProperty` when `id` contains a unique property value instead of the record ID. Invalid property names or values and read-only properties cause an error.\n\nThis endpoint does not change associations. Published quotes are locked; return a quote to `DRAFT`, `PENDING_APPROVAL`, or `REJECTED` before modifying it. `hs_quote_link` is read-only after publishing, and a quote template association can be set only when the quote is created.\n\nThe required OAuth scope is statically limited to `crm.objects.quotes.write`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/quotes/update-quote\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.quotes.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The quote record ID, or the value of the unique property selected in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique quote property used to identify the quote. Leave empty when ID contains the record ID.',
				},
				properties: {
					description:
						'JSON object of quote property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the updated quote.' },
				properties: { description: 'Property values returned for the updated quote.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the quote was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the quote was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the quote is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the quote was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description:
						'Identifier used to trace the quote update request, when returned.',
				},
				propertiesWithHistory: {
					description:
						'Quote property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the updated quote, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the quote.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateTask',
		label: 'Update a task',
		description: 'Updates the properties of an existing task and returns the updated object.',
		context:
			"Updates a task's properties with `PATCH /crm/objects/2026-03/tasks/{id}`. This is a partial update: only supplied properties are changed, and an empty string clears a property. Use `idProperty` when `id` contains a unique property value instead of the record ID. Invalid property names or values and read-only properties cause an error.\n\nThis endpoint does not change associations. Documented task statuses are `COMPLETED` and `NOT_STARTED`; priorities are `LOW`, `MEDIUM`, and `HIGH`; task types are `EMAIL`, `CALL`, and `TODO`.\n\nThe required OAuth scope is statically limited to `crm.objects.contacts.write`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/activities/tasks/update-task\n",
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The task record ID, or the value of the unique property selected in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique task property used to identify the task. Leave empty when ID contains the record ID.',
				},
				properties: {
					description:
						'JSON object of task property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the updated task.' },
				properties: { description: 'Property values returned for the updated task.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the task was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the task was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the task is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the task was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Identifier used to trace the task update request, when returned.',
				},
				propertiesWithHistory: {
					description: 'Task property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the updated task, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the task.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'updateTicket',
		label: 'Update a ticket',
		description:
			'Updates the properties of an existing support ticket and returns the updated object.',
		context:
			"Updates a ticket's properties with `PATCH /crm/objects/2026-03/tickets/{id}`. This is a partial update: only supplied properties are changed, and an empty string clears a property. Use `idProperty` when `id` contains a unique property value instead of the record ID. Invalid property names or values and read-only properties cause an error.\n\nThis endpoint does not change associations. Use internal IDs for the ticket pipeline and pipeline stage. A pinned activity must already be associated with the ticket, and a ticket can have at most one pinned activity. Updating classified ticket properties conditionally requires the corresponding permissions; those conditional permissions are not added to this endpoint's static scope.\n\nThe required OAuth scope is statically limited to `tickets`.\n\nDocs: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/tickets/update-ticket-objectId\n",
		accounts: { hubspotcrm: { scope: ['tickets'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The ticket record ID, or the value of the unique property selected in ID property.',
				},
				idProperty: {
					type: 'string',
					description:
						'The internal name of a unique ticket property used to identify the ticket. Leave empty when ID contains the record ID.',
				},
				properties: {
					description:
						'JSON object of ticket property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.',
				},
			},
			required: ['id', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the updated ticket.' },
				properties: { description: 'Property values returned for the updated ticket.' },
				createdAt: {
					type: 'string',
					description: 'Date and time when the ticket was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the ticket was last updated.',
				},
				archived: { type: 'boolean', description: 'Whether the ticket is archived.' },
				archivedAt: {
					type: 'string',
					description: 'Date and time when the ticket was archived, when applicable.',
				},
				objectWriteTraceId: {
					type: 'string',
					description:
						'Identifier used to trace the ticket update request, when returned.',
				},
				propertiesWithHistory: {
					description:
						'Ticket property values together with their history, when returned.',
				},
				url: {
					type: 'string',
					description: 'URL associated with the updated ticket, when returned.',
				},
				warnings: {
					type: 'array',
					description: 'Warnings returned while updating the ticket.',
					items: {
						type: 'object',
						description: 'A warning returned by HubSpot.',
						properties: {
							category: { type: 'string', description: 'Warning category.' },
							context: { description: 'Additional warning context.' },
							message: { type: 'string', description: 'Warning message.' },
						},
						required: [],
					},
				},
			},
			required: ['id', 'properties', 'createdAt', 'updatedAt', 'archived'],
		},
	},
	{
		appName: 'hubspotcrm',
		appVersion: 2,
		endpointName: 'upsertContact',
		label: 'Create or update a contact',
		description:
			'Creates or fully updates one contact identified by email using a one-item batch upsert.',
		context:
			'Creates or updates one contact with `POST /crm/objects/2026-03/contacts/batch/upsert`, using `email` as the unique identifier and a single-item batch.\n\n- Email-based partial upserts are unsupported. This email-only endpoint must provide the complete intended property set.\n- For partial upserts, use a custom unique identifier with the batch upsert API (outside this email-only endpoint) or use Update Contact.\n- The API batch maximum is irrelevant here because this endpoint intentionally accepts exactly one contact.\n- Official documentation: https://developers.hubspot.com/docs/api-reference/2026-03/crm/objects/contacts/batch/upsert-contacts\n',
		accounts: { hubspotcrm: { scope: ['crm.objects.contacts.write'] } },
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
				email: {
					type: 'string',
					description:
						'Unique email address used as the contact ID for this one-item upsert. Email-based partial upserts are unsupported.',
				},
				properties: {
					description:
						'JSON object containing the complete intended contact property set for the email-based upsert, for example {"email":"jane@example.com","firstname":"Jane"}.',
				},
				objectWriteTraceId: {
					type: 'string',
					description: 'Optional trace identifier to associate with this contact write.',
				},
			},
			required: ['email', 'properties'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				completedAt: {
					type: 'string',
					description: 'Date and time when batch processing completed.',
				},
				startedAt: {
					type: 'string',
					description: 'Date and time when batch processing started.',
				},
				status: {
					type: 'string',
					description: 'Current processing status of the one-item batch.',
					enum: ['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'],
				},
				results: {
					type: 'array',
					description: 'Contact records returned by the one-item batch upsert.',
					items: {
						type: 'object',
						description: 'A contact returned by the upsert.',
						properties: {
							id: {
								type: 'string',
								description: 'ID of the created or updated contact.',
							},
							new: {
								type: 'boolean',
								description: 'Whether the contact was created by this upsert.',
							},
							properties: { description: 'Current property values of the contact.' },
							createdAt: {
								type: 'string',
								description: 'Date and time when the contact was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the contact was last updated.',
							},
							archived: {
								type: 'boolean',
								description: 'Whether the contact is archived.',
							},
							archivedAt: {
								type: 'string',
								description:
									'Date and time when the contact was archived, when applicable.',
							},
							objectWriteTraceId: {
								type: 'string',
								description:
									'Trace identifier associated with the object write, when returned.',
							},
							propertiesWithHistory: {
								description:
									'Contact property values with their history, when returned.',
							},
							url: {
								type: 'string',
								description: 'URL associated with the contact, when available.',
							},
							warnings: {
								type: 'array',
								description: 'Warnings returned while processing this contact.',
								items: {
									type: 'object',
									description:
										'A warning returned while processing this contact.',
									properties: {
										category: {
											type: 'string',
											description: 'Warning category.',
										},
										context: { description: 'Additional warning context.' },
										message: {
											type: 'string',
											description: 'Human-readable warning message.',
										},
									},
									required: [],
								},
							},
						},
						required: ['id', 'new', 'properties', 'createdAt', 'updatedAt', 'archived'],
					},
				},
				requestedAt: {
					type: 'string',
					description: 'Date and time when batch processing was requested.',
				},
				links: { description: 'Links related to the batch operation, when returned.' },
				numErrors: {
					type: 'number',
					description: 'Number of errors produced by the batch operation.',
				},
				errors: {
					type: 'array',
					description: 'Errors returned by the batch operation.',
					items: {
						type: 'object',
						description: 'A standard HubSpot error returned by the batch operation.',
						properties: {
							id: {
								type: 'string',
								description: 'Error identifier, when available.',
							},
							status: { type: 'string', description: 'Error status.' },
							category: { type: 'string', description: 'Error category.' },
							message: {
								type: 'string',
								description: 'Human-readable error message.',
							},
							context: { description: 'Additional error context.' },
							errors: { description: 'Nested error details, when available.' },
							links: { description: 'Links related to the error, when available.' },
							subCategory: { description: 'Error subcategory, when available.' },
						},
						required: [],
					},
				},
			},
			required: ['completedAt', 'startedAt', 'status', 'results'],
		},
	},
];
