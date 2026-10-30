// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Microsoft Graph API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://graph.microsoft.com/`. Provide the remaining path in the URL parameter\n(e.g. `v1.0/sites/root` or `beta/sites/root/pages`; a leading slash is also accepted). Authentication is handled automatically via the app\'s connection.\n\n- **Following `@odata.nextLink`**: Do not pass the full `https://graph.microsoft.com/...` URL. Strip the `https://graph.microsoft.com/` prefix and pass the remaining path and query string in `url` (for example, `v1.0/sites?search=*&$skiptoken=...`).\n- **Write requests (`POST`, `PUT`, `PATCH`)**: Always include the `Content-Type: application/json` header in `headers` when sending a JSON `body`.\n- **Advanced queries (`$count`, non-indexed `$filter`)**: Pass `{"key": "ConsistencyLevel", "value": "eventual"}` in `headers` when using `$count=true`, or `{"key": "Prefer", "value": "HonorNonIndexedQueriesWarningMayFailRandomly"}` when filtering list items on a non-indexed column.\n\nRefer to the [Microsoft Graph API overview](https://learn.microsoft.com/en-us/graph/api/overview) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { azure: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://graph.microsoft.com/`. For example, `v1.0/sites/root`.',
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
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'createAFolder',
		label: 'Create a folder',
		description: 'Creates a folder in a document library.',
		context:
			'---\nname: createAFolder\ndescription: Creates a folder in a document library.\n---\n\nCreates a folder with `POST /sites/{site-id}/drives/{drive-id}/items/{parent-id}/children`.\n\n`folder` is always sent as an empty object so the new item is a folder. `name` is required. Conflict behavior is optional.\n\nAPI reference: [Create a new folder](https://learn.microsoft.com/en-us/graph/api/driveitem-post-children?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Files.ReadWrite.All', 'Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				drive: {
					type: 'string',
					description:
						'Identifier of the document library drive. Expand `drive` or `drives` on Get a site to discover it.',
				},
				parentItemId: {
					type: 'string',
					description:
						'Drive item id of the parent folder. Use `root` to create the folder in the drive root.',
				},
				name: { type: 'string', description: 'Name of the new folder.' },
				conflictBehavior: {
					type: 'string',
					description:
						'What to do when a child with this name already exists. Sent as `@microsoft.graph.conflictBehavior`. Omitted when empty, so Graph uses its default.',
					default: '',
					enum: ['', 'fail', 'replace', 'rename'],
				},
			},
			required: ['site', 'drive', 'parentItemId', 'name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				audio: {
					description:
						'Audio metadata. Only on OneDrive personal. Read-only. See [audio](https://learn.microsoft.com/en-us/graph/api/resources/audio?view=graph-rest-1.0).',
				},
				bundle: {
					description:
						'Bundle metadata. Read-only. See [bundle](https://learn.microsoft.com/en-us/graph/api/resources/bundle?view=graph-rest-1.0).',
				},
				createdBy: {
					type: 'object',
					description: 'Identity that created the item. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'When the item was created on the service. Read-only.',
				},
				cTag: {
					type: 'string',
					description:
						'ETag for the content. Not returned for folders in OneDrive for Business or SharePoint. Read-only.',
				},
				deleted: {
					description:
						'Deleted state. Read-only. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).',
				},
				description: {
					type: 'string',
					description: 'User-visible description. Only on OneDrive personal.',
				},
				eTag: { type: 'string', description: 'ETag for metadata and content. Read-only.' },
				file: {
					type: 'object',
					description: 'Present when the item is a file. Read-only.',
					properties: {
						hashes: {
							description:
								'Hashes of the file content. See [hashes](https://learn.microsoft.com/en-us/graph/api/resources/hashes?view=graph-rest-1.0).',
						},
						mimeType: {
							type: 'string',
							description: 'MIME type chosen by the service. Read-only.',
						},
					},
					required: [],
				},
				fileSystemInfo: {
					type: 'object',
					description:
						'Created and modified times as reported by the client. These differ from the service timestamps on the item.',
					properties: {
						createdDateTime: {
							type: 'string',
							description: 'UTC date and time the file was created on the client.',
						},
						lastAccessedDateTime: {
							type: 'string',
							description:
								'UTC date and time the file was last accessed. Not returned for SharePoint or OneDrive for Business.',
						},
						lastModifiedDateTime: {
							type: 'string',
							description:
								'UTC date and time the file was last modified on the client.',
						},
					},
					required: [],
				},
				folder: {
					type: 'object',
					description: 'Present when the item is a folder. Read-only.',
					properties: {
						childCount: {
							type: 'number',
							description: 'Number of immediate children.',
						},
						view: {
							description:
								'Recommended folder view. See [folderView](https://learn.microsoft.com/en-us/graph/api/resources/folderview?view=graph-rest-1.0).',
						},
					},
					required: [],
				},
				id: {
					type: 'string',
					description: 'Unique identifier of the item within the drive. Read-only.',
				},
				image: {
					description:
						'Image metadata. Read-only. See [image](https://learn.microsoft.com/en-us/graph/api/resources/image?view=graph-rest-1.0).',
				},
				lastModifiedBy: {
					type: 'object',
					description: 'Identity that last modified the item. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the item was last modified on the service. Read-only.',
				},
				location: {
					description:
						'Location metadata. Read-only. See [location](https://learn.microsoft.com/en-us/graph/api/resources/geocoordinates?view=graph-rest-1.0).',
				},
				malware: {
					description:
						'Present when the item was detected as malware. Read-only. See [malware](https://learn.microsoft.com/en-us/graph/api/resources/malware?view=graph-rest-1.0).',
				},
				name: { type: 'string', description: 'File or folder name.' },
				package: {
					description:
						'Present when the item is a package. Read-only. See [package](https://learn.microsoft.com/en-us/graph/api/resources/package?view=graph-rest-1.0).',
				},
				parentReference: {
					type: 'object',
					description: 'Address of the parent drive item or list item.',
					properties: {
						driveId: {
							type: 'string',
							description:
								'Identifier of the drive that contains the item. Only when the item is in a drive.',
						},
						driveType: {
							type: 'string',
							description: 'Type of drive. Only when the item is in a drive.',
							default: '',
							enum: ['', 'personal', 'business', 'documentLibrary'],
						},
						id: { type: 'string', description: 'Identifier of the parent item.' },
						name: { type: 'string', description: 'Name of the item being referenced.' },
						path: {
							type: 'string',
							description:
								'Percent-encoded path that can be used to navigate to the item.',
						},
						shareId: {
							type: 'string',
							description:
								'Identifier of a shared resource that can be accessed via the Shares API.',
						},
						sharepointIds: {
							type: 'object',
							description:
								'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
							properties: {
								listId: { type: 'string', description: "GUID of the item's list." },
								listItemId: {
									type: 'string',
									description:
										'Integer identifier of the item within its list, returned as a string.',
								},
								listItemUniqueId: {
									type: 'string',
									description:
										'GUID of the item within OneDrive for Business or the SharePoint site.',
								},
								siteId: {
									type: 'string',
									description: "GUID of the item's site collection.",
								},
								siteUrl: {
									type: 'string',
									description:
										'SharePoint URL of the site that contains the item.',
								},
								tenantId: { type: 'string', description: 'GUID of the tenant.' },
								webId: {
									type: 'string',
									description: "GUID of the item's site (SPWeb).",
								},
							},
							required: [],
						},
						siteId: {
							type: 'string',
							description:
								'Composite site id of the parent site. Not populated for OneDrive personal.',
						},
					},
					required: [],
				},
				pendingOperations: {
					description:
						'Operations that may still change this item. Read-only. See [pending operations](https://learn.microsoft.com/en-us/graph/api/resources/pendingoperations?view=graph-rest-1.0).',
				},
				photo: {
					description:
						'Photo metadata. Read-only. See [photo](https://learn.microsoft.com/en-us/graph/api/resources/photo?view=graph-rest-1.0).',
				},
				publication: {
					type: 'object',
					description: 'Published or checked-out state. Not returned unless requested.',
					properties: {
						level: {
							type: 'string',
							description: 'Publication state.',
							default: '',
							enum: ['', 'published', 'checkout'],
						},
						versionId: {
							type: 'string',
							description: 'Identifier of the version visible to the caller.',
						},
						checkedOutBy: {
							type: 'object',
							description: 'The user who checked out the file.',
							properties: {
								application: {
									type: 'object',
									description: 'The application associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								applicationInstance: {
									type: 'object',
									description:
										'The application instance associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								conversation: {
									type: 'object',
									description: 'The conversation associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								conversationIdentityType: {
									type: 'object',
									description:
										'The conversation identity type associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								device: {
									type: 'object',
									description: 'The device associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								encrypted: {
									type: 'object',
									description: 'The encrypted associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								onPremises: {
									type: 'object',
									description: 'The on premises associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								guest: {
									type: 'object',
									description: 'The guest associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								phone: {
									type: 'object',
									description: 'The phone associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								user: {
									type: 'object',
									description: 'The user associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
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
				remoteItem: {
					description:
						'Present when the item lives in another drive. Read-only. See [remote item](https://learn.microsoft.com/en-us/graph/api/resources/remoteitem?view=graph-rest-1.0).',
				},
				root: { description: 'Present when this item is the root of the drive.' },
				searchResult: {
					type: 'object',
					description: 'Present on items returned by search. Read-only.',
					properties: {
						onClickTelemetryUrl: {
							type: 'string',
							description: 'Telemetry URL returned with a search hit.',
						},
					},
					required: [],
				},
				shared: {
					description:
						'Sharing state. Read-only. See [shared](https://learn.microsoft.com/en-us/graph/api/resources/shared?view=graph-rest-1.0).',
				},
				sharepointIds: {
					type: 'object',
					description:
						'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
					properties: {
						listId: { type: 'string', description: "GUID of the item's list." },
						listItemId: {
							type: 'string',
							description:
								'Integer identifier of the item within its list, returned as a string.',
						},
						listItemUniqueId: {
							type: 'string',
							description:
								'GUID of the item within OneDrive for Business or the SharePoint site.',
						},
						siteId: {
							type: 'string',
							description: "GUID of the item's site collection.",
						},
						siteUrl: {
							type: 'string',
							description: 'SharePoint URL of the site that contains the item.',
						},
						tenantId: { type: 'string', description: 'GUID of the tenant.' },
						webId: { type: 'string', description: "GUID of the item's site (SPWeb)." },
					},
					required: [],
				},
				size: { type: 'number', description: 'Size in bytes. Read-only.' },
				specialFolder: {
					description:
						'Present when the item is also a special folder. Read-only. See [special folder](https://learn.microsoft.com/en-us/graph/api/resources/specialfolder?view=graph-rest-1.0).',
				},
				video: {
					description:
						'Video metadata. Read-only. See [video](https://learn.microsoft.com/en-us/graph/api/resources/video?view=graph-rest-1.0).',
				},
				webDavUrl: { type: 'string', description: 'WebDAV URL for the item.' },
				webUrl: {
					type: 'string',
					description: 'URL that opens the item in the browser. Read-only.',
				},
				'@microsoft.graph.downloadUrl': {
					type: 'string',
					description:
						'Short-lived URL that downloads the file without an Authorization header. Read-only. Expires in about an hour.',
				},
				activities: { description: 'Recent activities. Returned when expanded.' },
				analytics: { description: 'View analytics. Returned when expanded.' },
				children: {
					type: 'array',
					description:
						'Immediate children. Only folders have children. Returned when expanded; each entry is a driveItem.',
					items: { description: 'A child drive item.' },
				},
				createdByUser: {
					description: 'User who created the item. Returned when expanded.',
				},
				lastModifiedByUser: {
					description: 'User who last modified the item. Returned when expanded.',
				},
				listItem: {
					description:
						'The document-library list item for this drive item. Returned when expanded.',
				},
				permissions: { description: 'Permissions on the item. Returned when expanded.' },
				retentionLabel: {
					description:
						'Retention label settings. See [itemRetentionLabel](https://learn.microsoft.com/en-us/graph/api/resources/itemretentionlabel?view=graph-rest-1.0).',
				},
				subscriptions: {
					description: 'Subscriptions. Only supported on the root of a drive.',
				},
				'thumbnails@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `thumbnails` when that property is expanded.',
				},
				commentSettings: {
					type: 'object',
					description:
						'Comment settings Graph returns on a SharePoint drive item. The driveItem reference page does not list this property.',
					properties: {
						commentingDisabled: {
							type: 'object',
							description: 'Whether commenting is disabled on this item.',
							properties: {
								isDisabled: {
									type: 'boolean',
									description: 'True when commenting is disabled.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				thumbnails: { description: 'Thumbnail sets. Returned when expanded.' },
				versions: { description: 'Previous versions of the file. Returned when expanded.' },
				workbook: { description: 'Workbook API for Excel files.' },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'createAList',
		label: 'Create a list',
		description: 'Creates a list in a SharePoint site.',
		context:
			'---\nname: createAList\ndescription: Creates a list in a SharePoint site.\n---\n\nCreates a list with `POST /sites/{site-id}/lists`.\n\nIf `list.template` is omitted, Graph uses `genericList`, which includes a Title column. Column type facets (`text`, `number`, `choice`, and the others) are mutually exclusive.\n\nAPI reference: [Create a list](https://learn.microsoft.com/en-us/graph/api/list-create?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.Manage.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				displayName: { type: 'string', description: 'Title of the new list.' },
				description: { type: 'string', description: 'Descriptive text for the list.' },
				list: {
					type: 'object',
					description:
						'Additional information about the list. When omitted on create, Graph uses the genericList template.',
					properties: {
						contentTypesEnabled: {
							type: 'boolean',
							description: 'Whether content types are enabled for this list.',
						},
						hidden: {
							type: 'boolean',
							description: 'Whether the list is hidden in the SharePoint UI.',
						},
						template: {
							type: 'string',
							description:
								'Base list template. [listInfo](https://learn.microsoft.com/en-us/graph/api/resources/listinfo?view=graph-rest-1.0) names both `tasks` and `task`, and says other SPListTemplateType names can appear on responses. This list is only the names that page spells out.',
							default: '',
							enum: [
								'',
								'documentLibrary',
								'genericList',
								'tasks',
								'task',
								'survey',
								'links',
								'announcements',
								'contacts',
							],
						},
					},
					required: [],
				},
				columns: {
					type: 'array',
					description:
						'Optional columns to add besides the columns that come from the template.',
					items: {
						type: 'object',
						description:
							'A column to create with the list. Type facets are mutually exclusive.',
						properties: {
							boolean: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).',
							},
							calculated: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).',
							},
							choice: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).',
							},
							contentApprovalStatus: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).',
							},
							currency: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).',
							},
							dateTime: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).',
							},
							geolocation: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).',
							},
							hyperlinkOrPicture: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).',
							},
							lookup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).',
							},
							number: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).',
							},
							personOrGroup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).',
							},
							term: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).',
							},
							text: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).',
							},
							thumbnail: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).',
							},
							columnGroup: {
								type: 'string',
								description: 'For site columns, the group this column belongs to.',
							},
							defaultValue: {
								description:
									'Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'User-facing description of the column.',
							},
							displayName: {
								type: 'string',
								description: 'User-facing name of the column.',
							},
							enforceUniqueValues: {
								type: 'boolean',
								description:
									'When true, no two list items may have the same value for this column.',
							},
							hidden: {
								type: 'boolean',
								description: 'Whether the column is hidden in the SharePoint UI.',
							},
							indexed: {
								type: 'boolean',
								description:
									'Whether the column can be used for sorting and searching.',
							},
							name: {
								type: 'string',
								description:
									"API-facing column name, used as the key on a list item's fields. Required when this column object is sent.",
							},
							propagateChanges: {
								type: 'boolean',
								description:
									'When true, changes to this column propagate to lists that implement it.',
							},
							readOnly: {
								type: 'boolean',
								description: 'Whether values in this column can be modified.',
							},
							required: {
								type: 'boolean',
								description: 'Whether the column value is mandatory on items.',
							},
							validation: {
								type: 'object',
								description:
									'Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0). SharePoint returns 400 when `defaultLanguage` is missing or is not a tag such as `en-US`.',
								properties: {
									formula: {
										type: 'string',
										description:
											'Formula that the column value must satisfy. SharePoint formulas use a syntax similar to Excel.',
									},
									defaultLanguage: {
										type: 'string',
										description:
											'BCP 47 language tag for the validation message, such as `en-US`. SharePoint returns 400 if this tag is omitted or not accepted.',
									},
									descriptions: {
										type: 'array',
										description:
											'Localized messages shown when validation fails.',
										items: {
											type: 'object',
											description:
												'One localized validation message. See [displayNameLocalization](https://learn.microsoft.com/en-us/graph/api/resources/displaynamelocalization?view=graph-rest-1.0).',
											properties: {
												languageTag: {
													type: 'string',
													description:
														'BCP 47 language tag, such as `en-US`.',
												},
												displayName: {
													type: 'string',
													description:
														'Message shown for this language when validation fails.',
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
			},
			required: ['site', 'displayName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				createdBy: {
					type: 'object',
					description: 'Identity that created the list. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'When the list was created. Read-only.',
				},
				description: { type: 'string', description: 'Descriptive text for the list.' },
				displayName: { type: 'string', description: 'Display title of the list.' },
				eTag: { type: 'string', description: 'ETag for the list. Read-only.' },
				id: { type: 'string', description: 'Unique identifier of the list. Read-only.' },
				lastModifiedBy: {
					type: 'object',
					description: 'Identity that last modified the list. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the list was last modified. Read-only.',
				},
				list: {
					type: 'object',
					description:
						'Additional information about the list. When omitted on create, Graph uses the genericList template.',
					properties: {
						contentTypesEnabled: {
							type: 'boolean',
							description: 'Whether content types are enabled for this list.',
						},
						hidden: {
							type: 'boolean',
							description: 'Whether the list is hidden in the SharePoint UI.',
						},
						template: {
							type: 'string',
							description:
								'Base list template. [listInfo](https://learn.microsoft.com/en-us/graph/api/resources/listinfo?view=graph-rest-1.0) names both `tasks` and `task`, and says other SPListTemplateType names can appear on responses. This list is only the names that page spells out.',
							default: '',
							enum: [
								'',
								'documentLibrary',
								'genericList',
								'tasks',
								'task',
								'survey',
								'links',
								'announcements',
								'contacts',
							],
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'Name of the list. Read-only.' },
				parentReference: {
					type: 'object',
					description: 'Address of the parent drive item or list item.',
					properties: {
						driveId: {
							type: 'string',
							description:
								'Identifier of the drive that contains the item. Only when the item is in a drive.',
						},
						driveType: {
							type: 'string',
							description: 'Type of drive. Only when the item is in a drive.',
							default: '',
							enum: ['', 'personal', 'business', 'documentLibrary'],
						},
						id: { type: 'string', description: 'Identifier of the parent item.' },
						name: { type: 'string', description: 'Name of the item being referenced.' },
						path: {
							type: 'string',
							description:
								'Percent-encoded path that can be used to navigate to the item.',
						},
						shareId: {
							type: 'string',
							description:
								'Identifier of a shared resource that can be accessed via the Shares API.',
						},
						sharepointIds: {
							type: 'object',
							description:
								'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
							properties: {
								listId: { type: 'string', description: "GUID of the item's list." },
								listItemId: {
									type: 'string',
									description:
										'Integer identifier of the item within its list, returned as a string.',
								},
								listItemUniqueId: {
									type: 'string',
									description:
										'GUID of the item within OneDrive for Business or the SharePoint site.',
								},
								siteId: {
									type: 'string',
									description: "GUID of the item's site collection.",
								},
								siteUrl: {
									type: 'string',
									description:
										'SharePoint URL of the site that contains the item.',
								},
								tenantId: { type: 'string', description: 'GUID of the tenant.' },
								webId: {
									type: 'string',
									description: "GUID of the item's site (SPWeb).",
								},
							},
							required: [],
						},
						siteId: {
							type: 'string',
							description:
								'Composite site id of the parent site. Not populated for OneDrive personal.',
						},
					},
					required: [],
				},
				sharepointIds: {
					type: 'object',
					description:
						'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
					properties: {
						listId: { type: 'string', description: "GUID of the item's list." },
						listItemId: {
							type: 'string',
							description:
								'Integer identifier of the item within its list, returned as a string.',
						},
						listItemUniqueId: {
							type: 'string',
							description:
								'GUID of the item within OneDrive for Business or the SharePoint site.',
						},
						siteId: {
							type: 'string',
							description: "GUID of the item's site collection.",
						},
						siteUrl: {
							type: 'string',
							description: 'SharePoint URL of the site that contains the item.',
						},
						tenantId: { type: 'string', description: 'GUID of the tenant.' },
						webId: { type: 'string', description: "GUID of the item's site (SPWeb)." },
					},
					required: [],
				},
				system: {
					description:
						'Present when the list is system-managed. See [systemFacet](https://learn.microsoft.com/en-us/graph/api/resources/systemfacet?view=graph-rest-1.0).',
				},
				webUrl: {
					type: 'string',
					description: 'URL that opens the list in the browser. Read-only.',
				},
				'columns@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `columns` when that property is expanded.',
				},
				columns: {
					type: 'array',
					description: 'Column definitions for this list. Returned when expanded.',
					items: {
						type: 'object',
						description: 'A column definition.',
						properties: {
							boolean: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).',
							},
							calculated: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).',
							},
							choice: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).',
							},
							contentApprovalStatus: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).',
							},
							currency: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).',
							},
							dateTime: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).',
							},
							geolocation: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).',
							},
							hyperlinkOrPicture: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).',
							},
							lookup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).',
							},
							number: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).',
							},
							personOrGroup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).',
							},
							term: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).',
							},
							text: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).',
							},
							thumbnail: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).',
							},
							columnGroup: {
								type: 'string',
								description: 'For site columns, the group this column belongs to.',
							},
							defaultValue: {
								description:
									'Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'User-facing description of the column.',
							},
							displayName: {
								type: 'string',
								description: 'User-facing name of the column.',
							},
							enforceUniqueValues: {
								type: 'boolean',
								description:
									'When true, no two list items may have the same value for this column.',
							},
							hidden: {
								type: 'boolean',
								description: 'Whether the column is hidden in the SharePoint UI.',
							},
							indexed: {
								type: 'boolean',
								description:
									'Whether the column can be used for sorting and searching.',
							},
							name: {
								type: 'string',
								description:
									"API-facing column name, used as the key on a list item's fields.",
							},
							propagateChanges: {
								type: 'boolean',
								description:
									'When true, changes to this column propagate to lists that implement it.',
							},
							readOnly: {
								type: 'boolean',
								description: 'Whether values in this column can be modified.',
							},
							required: {
								type: 'boolean',
								description: 'Whether the column value is mandatory on items.',
							},
							validation: {
								description:
									'Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0).',
							},
							id: { type: 'string', description: 'Unique identifier of the column.' },
							isDeletable: {
								type: 'boolean',
								description:
									'Whether this column can be deleted. Not returned for every list-column response.',
							},
							isReorderable: {
								type: 'boolean',
								description:
									'Whether values in the column can be reordered. Read-only.',
							},
							isSealed: {
								type: 'boolean',
								description: 'Whether the column can be changed.',
							},
							sourceContentType: {
								type: 'object',
								description: 'SharePoint content type of the item.',
								properties: {
									id: { type: 'string', description: 'The content type id.' },
									name: { type: 'string', description: 'The content type name.' },
								},
								required: [],
							},
							type: {
								type: 'string',
								description:
									'Read-only column type for site columns. See [columnTypes](https://learn.microsoft.com/en-us/graph/api/resources/columntypes?view=graph-rest-1.0).',
							},
							sourceColumn: {
								description:
									'Source column when this column is inherited from a content type.',
							},
						},
						required: [],
					},
				},
				contentTypes: {
					description: 'Content types in this list. Returned when expanded.',
				},
				'drive@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `drive` when that property is expanded.',
				},
				drive: { description: 'The list as a drive. Only on document libraries.' },
				items: { description: 'Items in the list. Use List items to enumerate them.' },
				operations: { description: 'Long-running operations on the list.' },
				permissions: { description: 'Permissions on the list.' },
				subscriptions: { description: 'Subscriptions on the list.' },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'createAnItem',
		label: 'Create an item',
		description: 'Creates an item in a SharePoint list.',
		context:
			'---\nname: createAnItem\ndescription: Creates an item in a SharePoint list.\n---\n\nCreates a [listItem](https://learn.microsoft.com/en-us/graph/api/resources/listitem?view=graph-rest-1.0) with `POST /sites/{site-id}/lists/{list-id}/items`.\n\n`list` accepts the list GUID (`id`) or display name. When a list\'s display name contains `?`, `/`, `#`, or `%` (or is `.` or `..`), pass its GUID instead — Microsoft Graph rejects `?`, `/`, and `#` in path segments and double-decodes `%` on the server side, which can target a different list.\n\n`fields` is an array of `{"key", "value"}` pairs (for example, `[{"key": "Title", "value": "Review launch"}]`) converted into the `fields` object (`fieldValueSet`) keyed by column internal names. Numbers (`0` included) and booleans (`false` included) stay typed. Sending `null` or `""` (or omitting `value` on an entry) clears a text column.\n\n### Column value shapes\n\n- **Text / single choice**: string, e.g. `{"key": "Title", "value": "Review launch"}`.\n- **Number / currency**: number, e.g. `{"key": "Priority", "value": 1}`.\n- **Yes/No (boolean)**: boolean, e.g. `{"key": "Approved", "value": false}`.\n- **Date and time**: ISO 8601 UTC string, e.g. `{"key": "DueDate", "value": "2026-10-23T07:00:00Z"}` (`dateOnly` columns are stored at the site\'s time-zone midnight in UTC).\n- **Lookup / Person or Group (single)**: set `{ColumnInternalName}LookupId` to the target item or user list ID, e.g. `{"key": "ProjectLookupId", "value": "5"}`.\n- **Multi-choice**: requires the OData type annotation entry `{"key": "{ColumnInternalName}@odata.type", "value": "Collection(Edm.String)"}` alongside the array `{"key": "{ColumnInternalName}", "value": ["Option A", "Option B"]}` (note: SharePoint Graph v1.0 may reject multi-choice updates on some column configurations).\n\nAPI reference: [Create listItem](https://learn.microsoft.com/en-us/graph/api/listitem-create?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.ReadWrite.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				list: {
					type: 'string',
					description:
						'GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#%]+$`,
				},
				contentType: {
					type: 'object',
					description: 'SharePoint content type of the item.',
					properties: {
						id: { type: 'string', description: 'The content type id.' },
						name: { type: 'string', description: 'The content type name.' },
					},
					required: [],
				},
				fields: {
					type: 'array',
					description:
						'Column values for the new item as an array of `{key, value}` pairs (for example, `[{"key": "Title", "value": "Review launch"}]`). Sent as the `fields` object keyed by column internal names.',
					items: {
						type: 'object',
						description: 'One column value.',
						properties: {
							key: {
								type: 'string',
								description:
									'Column internal name, such as `Title` (or `{Name}LookupId` for single lookup/person columns).',
							},
							value: {
								description:
									'Column value matching the column type (string, number, boolean, or ISO 8601 date string). Sending `null` or `""` (or omitting `value`) clears the column.',
							},
						},
						required: ['key'],
					},
				},
			},
			required: ['site', 'list', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				contentType: {
					type: 'object',
					description: 'SharePoint content type of the item.',
					properties: {
						id: { type: 'string', description: 'The content type id.' },
						name: { type: 'string', description: 'The content type name.' },
					},
					required: [],
				},
				createdBy: {
					type: 'object',
					description: 'Identity that created the item. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'When the item was created. Read-only.',
				},
				deleted: {
					description:
						'Present on a delta result when the item was deleted. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).',
				},
				description: { type: 'string', description: 'Descriptive text for the item.' },
				eTag: { type: 'string', description: 'ETag for the item. Read-only.' },
				'fields@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `fields` when that property is expanded.',
				},
				fields: {
					type: 'object',
					description:
						'Column values. Keys are column internal names. Lookup columns come back as `{name}LookupId` unless you select the lookup by name. See [fieldValueSet](https://learn.microsoft.com/en-us/graph/api/resources/fieldvalueset?view=graph-rest-1.0).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				id: { type: 'string', description: 'Unique identifier of the item. Read-only.' },
				lastModifiedBy: {
					type: 'object',
					description: 'Identity that last modified the item. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the item was last modified. Read-only.',
				},
				name: { type: 'string', description: 'Name or title of the item.' },
				parentReference: {
					type: 'object',
					description: 'Address of the parent drive item or list item.',
					properties: {
						driveId: {
							type: 'string',
							description:
								'Identifier of the drive that contains the item. Only when the item is in a drive.',
						},
						driveType: {
							type: 'string',
							description: 'Type of drive. Only when the item is in a drive.',
							default: '',
							enum: ['', 'personal', 'business', 'documentLibrary'],
						},
						id: { type: 'string', description: 'Identifier of the parent item.' },
						name: { type: 'string', description: 'Name of the item being referenced.' },
						path: {
							type: 'string',
							description:
								'Percent-encoded path that can be used to navigate to the item.',
						},
						shareId: {
							type: 'string',
							description:
								'Identifier of a shared resource that can be accessed via the Shares API.',
						},
						sharepointIds: {
							type: 'object',
							description:
								'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
							properties: {
								listId: { type: 'string', description: "GUID of the item's list." },
								listItemId: {
									type: 'string',
									description:
										'Integer identifier of the item within its list, returned as a string.',
								},
								listItemUniqueId: {
									type: 'string',
									description:
										'GUID of the item within OneDrive for Business or the SharePoint site.',
								},
								siteId: {
									type: 'string',
									description: "GUID of the item's site collection.",
								},
								siteUrl: {
									type: 'string',
									description:
										'SharePoint URL of the site that contains the item.',
								},
								tenantId: { type: 'string', description: 'GUID of the tenant.' },
								webId: {
									type: 'string',
									description: "GUID of the item's site (SPWeb).",
								},
							},
							required: [],
						},
						siteId: {
							type: 'string',
							description:
								'Composite site id of the parent site. Not populated for OneDrive personal.',
						},
					},
					required: [],
				},
				sharepointIds: {
					type: 'object',
					description:
						'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
					properties: {
						listId: { type: 'string', description: "GUID of the item's list." },
						listItemId: {
							type: 'string',
							description:
								'Integer identifier of the item within its list, returned as a string.',
						},
						listItemUniqueId: {
							type: 'string',
							description:
								'GUID of the item within OneDrive for Business or the SharePoint site.',
						},
						siteId: {
							type: 'string',
							description: "GUID of the item's site collection.",
						},
						siteUrl: {
							type: 'string',
							description: 'SharePoint URL of the site that contains the item.',
						},
						tenantId: { type: 'string', description: 'GUID of the tenant.' },
						webId: { type: 'string', description: "GUID of the item's site (SPWeb)." },
					},
					required: [],
				},
				webUrl: {
					type: 'string',
					description: 'URL that opens the item in the browser. Read-only.',
				},
				activities: {
					description: 'Recent activities on this item. Returned when expanded.',
				},
				analytics: { description: 'View analytics for this item. Returned when expanded.' },
				documentSetVersions: {
					description: 'Document set versions. Returned when expanded.',
				},
				driveItem: {
					description:
						'The same item as a [driveItem](https://learn.microsoft.com/en-us/graph/api/resources/driveitem?view=graph-rest-1.0), for document libraries. Returned when expanded.',
				},
				permissions: { description: 'Permissions on the item. Returned when expanded.' },
				versions: {
					description: 'Previous versions of the list item. Returned when expanded.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'deleteAnItem',
		label: 'Delete an item',
		description: 'Deletes an item from a SharePoint list.',
		context:
			"---\nname: deleteAnItem\ndescription: Deletes an item from a SharePoint list.\n---\n\nDeletes a list item with `DELETE /sites/{site-id}/lists/{list-id}/items/{item-id}`.\n\n`list` accepts the list GUID (`id`) or display name; when a list's display name contains `?`, `/`, `#`, or `%` (or is `.` or `..`), pass its GUID instead. `item` must be the item's integer `id` — never pass `.`, `..`, or a relative path, as dot segments resolve to the parent list URL (`DELETE /sites/{site-id}/lists/{list-id}`) and delete the entire list.\n\nSuccess is `204 No Content`. The response body is empty.\n\nAPI reference: [Delete listItem](https://learn.microsoft.com/en-us/graph/api/listitem-delete?view=graph-rest-1.0).\n",
		accounts: { azure: { scope: ['Sites.ReadWrite.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				list: {
					type: 'string',
					description:
						'GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#%]+$`,
				},
				item: {
					type: 'string',
					description:
						'Integer identifier (`id`) of the list item within the list. Do not pass `.`, `..`, or path separators (`/`).',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#]+$`,
				},
			},
			required: ['site', 'list', 'item'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'getAList',
		label: 'Get a list',
		description: 'Returns one list in a SharePoint site.',
		context:
			"---\nname: getAList\ndescription: Returns one list in a SharePoint site.\n---\n\nReturns one [list](https://learn.microsoft.com/en-us/graph/api/resources/list?view=graph-rest-1.0) from `GET /sites/{site-id}/lists/{list-id}`.\n\nExpand `columns` to include column definitions.\n\n`list` accepts the list GUID (`id`) or display name. When a list's display name contains `?`, `/`, `#`, or `%` (or is `.` or `..`), pass its GUID instead — Microsoft Graph rejects `?`, `/`, and `#` in path segments and double-decodes `%` on the server side, which can resolve to a different list.\n\nAPI reference: [Get list](https://learn.microsoft.com/en-us/graph/api/list-get?view=graph-rest-1.0).\n",
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				list: {
					type: 'string',
					description:
						'GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#%]+$`,
				},
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'Navigation properties to expand, comma-separated, such as `columns`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.',
				},
			},
			required: ['site', 'list'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				createdBy: {
					type: 'object',
					description: 'Identity that created the list. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'When the list was created. Read-only.',
				},
				description: { type: 'string', description: 'Descriptive text for the list.' },
				displayName: { type: 'string', description: 'Display title of the list.' },
				eTag: { type: 'string', description: 'ETag for the list. Read-only.' },
				id: { type: 'string', description: 'Unique identifier of the list. Read-only.' },
				lastModifiedBy: {
					type: 'object',
					description: 'Identity that last modified the list. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the list was last modified. Read-only.',
				},
				list: {
					type: 'object',
					description:
						'Additional information about the list. When omitted on create, Graph uses the genericList template.',
					properties: {
						contentTypesEnabled: {
							type: 'boolean',
							description: 'Whether content types are enabled for this list.',
						},
						hidden: {
							type: 'boolean',
							description: 'Whether the list is hidden in the SharePoint UI.',
						},
						template: {
							type: 'string',
							description:
								'Base list template. [listInfo](https://learn.microsoft.com/en-us/graph/api/resources/listinfo?view=graph-rest-1.0) names both `tasks` and `task`, and says other SPListTemplateType names can appear on responses. This list is only the names that page spells out.',
							default: '',
							enum: [
								'',
								'documentLibrary',
								'genericList',
								'tasks',
								'task',
								'survey',
								'links',
								'announcements',
								'contacts',
							],
						},
					},
					required: [],
				},
				name: { type: 'string', description: 'Name of the list. Read-only.' },
				parentReference: {
					type: 'object',
					description: 'Address of the parent drive item or list item.',
					properties: {
						driveId: {
							type: 'string',
							description:
								'Identifier of the drive that contains the item. Only when the item is in a drive.',
						},
						driveType: {
							type: 'string',
							description: 'Type of drive. Only when the item is in a drive.',
							default: '',
							enum: ['', 'personal', 'business', 'documentLibrary'],
						},
						id: { type: 'string', description: 'Identifier of the parent item.' },
						name: { type: 'string', description: 'Name of the item being referenced.' },
						path: {
							type: 'string',
							description:
								'Percent-encoded path that can be used to navigate to the item.',
						},
						shareId: {
							type: 'string',
							description:
								'Identifier of a shared resource that can be accessed via the Shares API.',
						},
						sharepointIds: {
							type: 'object',
							description:
								'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
							properties: {
								listId: { type: 'string', description: "GUID of the item's list." },
								listItemId: {
									type: 'string',
									description:
										'Integer identifier of the item within its list, returned as a string.',
								},
								listItemUniqueId: {
									type: 'string',
									description:
										'GUID of the item within OneDrive for Business or the SharePoint site.',
								},
								siteId: {
									type: 'string',
									description: "GUID of the item's site collection.",
								},
								siteUrl: {
									type: 'string',
									description:
										'SharePoint URL of the site that contains the item.',
								},
								tenantId: { type: 'string', description: 'GUID of the tenant.' },
								webId: {
									type: 'string',
									description: "GUID of the item's site (SPWeb).",
								},
							},
							required: [],
						},
						siteId: {
							type: 'string',
							description:
								'Composite site id of the parent site. Not populated for OneDrive personal.',
						},
					},
					required: [],
				},
				sharepointIds: {
					type: 'object',
					description:
						'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
					properties: {
						listId: { type: 'string', description: "GUID of the item's list." },
						listItemId: {
							type: 'string',
							description:
								'Integer identifier of the item within its list, returned as a string.',
						},
						listItemUniqueId: {
							type: 'string',
							description:
								'GUID of the item within OneDrive for Business or the SharePoint site.',
						},
						siteId: {
							type: 'string',
							description: "GUID of the item's site collection.",
						},
						siteUrl: {
							type: 'string',
							description: 'SharePoint URL of the site that contains the item.',
						},
						tenantId: { type: 'string', description: 'GUID of the tenant.' },
						webId: { type: 'string', description: "GUID of the item's site (SPWeb)." },
					},
					required: [],
				},
				system: {
					description:
						'Present when the list is system-managed. See [systemFacet](https://learn.microsoft.com/en-us/graph/api/resources/systemfacet?view=graph-rest-1.0).',
				},
				webUrl: {
					type: 'string',
					description: 'URL that opens the list in the browser. Read-only.',
				},
				'columns@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `columns` when that property is expanded.',
				},
				columns: {
					type: 'array',
					description: 'Column definitions for this list. Returned when expanded.',
					items: {
						type: 'object',
						description: 'A column definition.',
						properties: {
							boolean: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).',
							},
							calculated: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).',
							},
							choice: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).',
							},
							contentApprovalStatus: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).',
							},
							currency: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).',
							},
							dateTime: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).',
							},
							geolocation: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).',
							},
							hyperlinkOrPicture: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).',
							},
							lookup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).',
							},
							number: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).',
							},
							personOrGroup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).',
							},
							term: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).',
							},
							text: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).',
							},
							thumbnail: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).',
							},
							columnGroup: {
								type: 'string',
								description: 'For site columns, the group this column belongs to.',
							},
							defaultValue: {
								description:
									'Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'User-facing description of the column.',
							},
							displayName: {
								type: 'string',
								description: 'User-facing name of the column.',
							},
							enforceUniqueValues: {
								type: 'boolean',
								description:
									'When true, no two list items may have the same value for this column.',
							},
							hidden: {
								type: 'boolean',
								description: 'Whether the column is hidden in the SharePoint UI.',
							},
							indexed: {
								type: 'boolean',
								description:
									'Whether the column can be used for sorting and searching.',
							},
							name: {
								type: 'string',
								description:
									"API-facing column name, used as the key on a list item's fields.",
							},
							propagateChanges: {
								type: 'boolean',
								description:
									'When true, changes to this column propagate to lists that implement it.',
							},
							readOnly: {
								type: 'boolean',
								description: 'Whether values in this column can be modified.',
							},
							required: {
								type: 'boolean',
								description: 'Whether the column value is mandatory on items.',
							},
							validation: {
								description:
									'Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0).',
							},
							id: { type: 'string', description: 'Unique identifier of the column.' },
							isDeletable: {
								type: 'boolean',
								description:
									'Whether this column can be deleted. Not returned for every list-column response.',
							},
							isReorderable: {
								type: 'boolean',
								description:
									'Whether values in the column can be reordered. Read-only.',
							},
							isSealed: {
								type: 'boolean',
								description: 'Whether the column can be changed.',
							},
							sourceContentType: {
								type: 'object',
								description: 'SharePoint content type of the item.',
								properties: {
									id: { type: 'string', description: 'The content type id.' },
									name: { type: 'string', description: 'The content type name.' },
								},
								required: [],
							},
							type: {
								type: 'string',
								description:
									'Read-only column type for site columns. See [columnTypes](https://learn.microsoft.com/en-us/graph/api/resources/columntypes?view=graph-rest-1.0).',
							},
							sourceColumn: {
								description:
									'Source column when this column is inherited from a content type.',
							},
						},
						required: [],
					},
				},
				contentTypes: {
					description: 'Content types in this list. Returned when expanded.',
				},
				'drive@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `drive` when that property is expanded.',
				},
				drive: { description: 'The list as a drive. Only on document libraries.' },
				items: { description: 'Items in the list. Use List items to enumerate them.' },
				operations: { description: 'Long-running operations on the list.' },
				permissions: { description: 'Permissions on the list.' },
				subscriptions: { description: 'Subscriptions on the list.' },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'getAnItem',
		label: 'Get an item',
		description: 'Returns one item from a SharePoint list.',
		context:
			"---\nname: getAnItem\ndescription: Returns one item from a SharePoint list.\n---\n\nReturns one [listItem](https://learn.microsoft.com/en-us/graph/api/resources/listitem?view=graph-rest-1.0) from `GET /sites/{site-id}/lists/{list-id}/items/{item-id}`.\n\nPass `expand` as `fields` to include column values. `expand` is sent without a `$` prefix, the same way List items sends it.\n\n`list` accepts the list GUID (`id`) or display name; when a list's display name contains `?`, `/`, `#`, or `%` (or is `.` or `..`), pass its GUID instead. `item` must be the item's integer `id` (never `.`, `..`, or a path segment).\n\nAPI reference: [Get listItem](https://learn.microsoft.com/en-us/graph/api/listitem-get?view=graph-rest-1.0).\n",
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				list: {
					type: 'string',
					description:
						'GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#%]+$`,
				},
				item: {
					type: 'string',
					description:
						'Integer identifier (`id`) of the list item within the list. Do not pass `.`, `..`, or path separators (`/`).',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#]+$`,
				},
				expand: {
					type: 'string',
					description:
						'Relationships to expand. Sent as `expand`. Pass `fields` to include column values. See [Get listItem](https://learn.microsoft.com/en-us/graph/api/listitem-get?view=graph-rest-1.0).',
				},
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
			},
			required: ['site', 'list', 'item'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				contentType: {
					type: 'object',
					description: 'SharePoint content type of the item.',
					properties: {
						id: { type: 'string', description: 'The content type id.' },
						name: { type: 'string', description: 'The content type name.' },
					},
					required: [],
				},
				createdBy: {
					type: 'object',
					description: 'Identity that created the item. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'When the item was created. Read-only.',
				},
				deleted: {
					description:
						'Present on a delta result when the item was deleted. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).',
				},
				description: { type: 'string', description: 'Descriptive text for the item.' },
				eTag: { type: 'string', description: 'ETag for the item. Read-only.' },
				'fields@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `fields` when that property is expanded.',
				},
				fields: {
					type: 'object',
					description:
						'Column values. Keys are column internal names. Lookup columns come back as `{name}LookupId` unless you select the lookup by name. See [fieldValueSet](https://learn.microsoft.com/en-us/graph/api/resources/fieldvalueset?view=graph-rest-1.0).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				id: { type: 'string', description: 'Unique identifier of the item. Read-only.' },
				lastModifiedBy: {
					type: 'object',
					description: 'Identity that last modified the item. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the item was last modified. Read-only.',
				},
				name: { type: 'string', description: 'Name or title of the item.' },
				parentReference: {
					type: 'object',
					description: 'Address of the parent drive item or list item.',
					properties: {
						driveId: {
							type: 'string',
							description:
								'Identifier of the drive that contains the item. Only when the item is in a drive.',
						},
						driveType: {
							type: 'string',
							description: 'Type of drive. Only when the item is in a drive.',
							default: '',
							enum: ['', 'personal', 'business', 'documentLibrary'],
						},
						id: { type: 'string', description: 'Identifier of the parent item.' },
						name: { type: 'string', description: 'Name of the item being referenced.' },
						path: {
							type: 'string',
							description:
								'Percent-encoded path that can be used to navigate to the item.',
						},
						shareId: {
							type: 'string',
							description:
								'Identifier of a shared resource that can be accessed via the Shares API.',
						},
						sharepointIds: {
							type: 'object',
							description:
								'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
							properties: {
								listId: { type: 'string', description: "GUID of the item's list." },
								listItemId: {
									type: 'string',
									description:
										'Integer identifier of the item within its list, returned as a string.',
								},
								listItemUniqueId: {
									type: 'string',
									description:
										'GUID of the item within OneDrive for Business or the SharePoint site.',
								},
								siteId: {
									type: 'string',
									description: "GUID of the item's site collection.",
								},
								siteUrl: {
									type: 'string',
									description:
										'SharePoint URL of the site that contains the item.',
								},
								tenantId: { type: 'string', description: 'GUID of the tenant.' },
								webId: {
									type: 'string',
									description: "GUID of the item's site (SPWeb).",
								},
							},
							required: [],
						},
						siteId: {
							type: 'string',
							description:
								'Composite site id of the parent site. Not populated for OneDrive personal.',
						},
					},
					required: [],
				},
				sharepointIds: {
					type: 'object',
					description:
						'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
					properties: {
						listId: { type: 'string', description: "GUID of the item's list." },
						listItemId: {
							type: 'string',
							description:
								'Integer identifier of the item within its list, returned as a string.',
						},
						listItemUniqueId: {
							type: 'string',
							description:
								'GUID of the item within OneDrive for Business or the SharePoint site.',
						},
						siteId: {
							type: 'string',
							description: "GUID of the item's site collection.",
						},
						siteUrl: {
							type: 'string',
							description: 'SharePoint URL of the site that contains the item.',
						},
						tenantId: { type: 'string', description: 'GUID of the tenant.' },
						webId: { type: 'string', description: "GUID of the item's site (SPWeb)." },
					},
					required: [],
				},
				webUrl: {
					type: 'string',
					description: 'URL that opens the item in the browser. Read-only.',
				},
				activities: {
					description: 'Recent activities on this item. Returned when expanded.',
				},
				analytics: { description: 'View analytics for this item. Returned when expanded.' },
				documentSetVersions: {
					description: 'Document set versions. Returned when expanded.',
				},
				driveItem: {
					description:
						'The same item as a [driveItem](https://learn.microsoft.com/en-us/graph/api/resources/driveitem?view=graph-rest-1.0), for document libraries. Returned when expanded.',
				},
				permissions: { description: 'Permissions on the item. Returned when expanded.' },
				versions: {
					description: 'Previous versions of the list item. Returned when expanded.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'getAPage',
		label: 'Get a page',
		description: 'Returns one page in a SharePoint site.',
		context:
			'---\nname: getAPage\ndescription: Returns one page in a SharePoint site.\n---\n\nReturns one [sitePage](https://learn.microsoft.com/en-us/graph/api/resources/sitepage?view=graph-rest-1.0) from `GET /sites/{site-id}/pages/{page-id}/microsoft.graph.sitePage` on Microsoft Graph v1.0.\n\nPass `expand` as `canvasLayout` to include the page content. `publishingState.level` indicates whether the page is `published`, `checkout`, or `draft`.\n\nAPI reference: [Get sitePage](https://learn.microsoft.com/en-us/graph/api/sitepage-get?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				page: { type: 'string', description: 'Identifier of the site page.' },
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'Navigation properties to expand, comma-separated, such as `canvasLayout`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.',
				},
			},
			required: ['site', 'page'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				'@odata.type': {
					type: 'string',
					description: 'OData type of the page, `#microsoft.graph.sitePage`.',
				},
				name: { type: 'string', description: 'File name of the page.' },
				description: { type: 'string', description: 'Descriptive text for the page.' },
				pageLayout: {
					type: 'string',
					description: 'Page layout.',
					default: '',
					enum: ['', 'microsoftReserved', 'article', 'home', 'unknownFutureValue'],
				},
				promotionKind: {
					type: 'string',
					description: 'How the page is promoted.',
					default: '',
					enum: ['', 'microsoftReserved', 'page', 'newsPost', 'unknownFutureValue'],
				},
				showComments: {
					type: 'boolean',
					description: 'Whether comments are shown at the bottom of the page.',
				},
				showRecommendedPages: {
					type: 'boolean',
					description: 'Whether recommended pages are shown at the bottom of the page.',
				},
				thumbnailWebUrl: { type: 'string', description: 'URL of the page thumbnail.' },
				titleArea: {
					type: 'object',
					description:
						'Title area of the page. See [titleArea](https://learn.microsoft.com/en-us/graph/api/resources/titlearea?view=graph-rest-1.0).',
					properties: {
						alternativeText: {
							type: 'string',
							description: 'Alternative text on the title area.',
						},
						enableGradientEffect: {
							type: 'boolean',
							description: 'Whether the title area uses a gradient.',
						},
						imageWebUrl: {
							type: 'string',
							description: 'URL of the image in the title area.',
						},
						layout: {
							type: 'string',
							description: 'Layout of the title area.',
							default: '',
							enum: [
								'',
								'imageAndTitle',
								'plain',
								'colorBlock',
								'overlap',
								'unknownFutureValue',
							],
						},
						serverProcessedContent: {
							description:
								'Server-processed content such as search index and link fixup data.',
						},
						showAuthor: {
							type: 'boolean',
							description: 'Whether the author is shown in the title area.',
						},
						showPublishedDate: {
							type: 'boolean',
							description: 'Whether the published date is shown in the title area.',
						},
						showTextBlockAboveTitle: {
							type: 'boolean',
							description: 'Whether the text block above the title is shown.',
						},
						textAboveTitle: {
							type: 'string',
							description: 'Text shown above the title.',
						},
						textAlignment: {
							type: 'string',
							description: 'Text alignment in the title area.',
							default: '',
							enum: ['', 'left', 'center', 'unknownFutureValue'],
						},
						imageSourceType: {
							type: 'number',
							description: 'Source type of the title image, as returned by Graph.',
						},
						hasTitleBeenCommitted: {
							type: 'boolean',
							description: 'Whether the title has been committed.',
						},
						'authors@odata.type': {
							type: 'string',
							description:
								'OData type of `authors`. Graph returns `#Collection(String)`. The titleArea reference page does not list this property.',
						},
						authors: {
							type: 'array',
							description:
								'Author strings Graph returns on the title area. Often empty. The titleArea reference page does not list this property.',
							items: { type: 'string', description: 'One string in the collection.' },
						},
						'authorByline@odata.type': {
							type: 'string',
							description:
								'OData type of `authorByline`. Graph returns `#Collection(String)`. The titleArea reference page does not list this property.',
						},
						authorByline: {
							type: 'array',
							description:
								'Byline strings Graph returns on the title area. Often empty. The titleArea reference page does not list this property.',
							items: { type: 'string', description: 'One string in the collection.' },
						},
					},
					required: [],
				},
				'canvasLayout@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `canvasLayout` when that property is expanded.',
				},
				canvasLayout: {
					description:
						'Page canvas, including horizontal sections and web parts. Web part `data` differs by web part type, so this object is free-form. See [Create sitePage](https://learn.microsoft.com/en-us/graph/api/sitepage-create?view=graph-rest-1.0).',
				},
				contentType: {
					type: 'object',
					description: 'SharePoint content type of the item.',
					properties: {
						id: { type: 'string', description: 'The content type id.' },
						name: { type: 'string', description: 'The content type name.' },
					},
					required: [],
				},
				createdBy: {
					type: 'object',
					description: 'Identity that created the page. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				createdDateTime: {
					type: 'string',
					description: 'When the page was created. Read-only.',
				},
				eTag: { type: 'string', description: 'ETag for the page.' },
				id: { type: 'string', description: 'Unique identifier of the page.' },
				lastModifiedBy: {
					type: 'object',
					description: 'Identity that last modified the page. Read-only.',
					properties: {
						application: {
							type: 'object',
							description: 'The application associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						applicationInstance: {
							type: 'object',
							description: 'The application instance associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversation: {
							type: 'object',
							description: 'The conversation associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						conversationIdentityType: {
							type: 'object',
							description:
								'The conversation identity type associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						device: {
							type: 'object',
							description: 'The device associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						encrypted: {
							type: 'object',
							description: 'The encrypted associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						onPremises: {
							type: 'object',
							description: 'The on premises associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						guest: {
							type: 'object',
							description: 'The guest associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						phone: {
							type: 'object',
							description: 'The phone associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
						user: {
							type: 'object',
							description: 'The user associated with this action.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The display name of the identity. For drive items this can lag a rename.',
								},
								id: {
									type: 'string',
									description: 'Unique identifier of the identity.',
								},
								email: {
									type: 'string',
									description:
										'Email address of the identity, when the service returns one.',
								},
								tenantId: {
									type: 'string',
									description: 'Unique identifier of the tenant. Optional.',
								},
								thumbnails: {
									description:
										'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the page was last modified. Read-only.',
				},
				parentReference: {
					type: 'object',
					description: 'Address of the parent drive item or list item.',
					properties: {
						driveId: {
							type: 'string',
							description:
								'Identifier of the drive that contains the item. Only when the item is in a drive.',
						},
						driveType: {
							type: 'string',
							description: 'Type of drive. Only when the item is in a drive.',
							default: '',
							enum: ['', 'personal', 'business', 'documentLibrary'],
						},
						id: { type: 'string', description: 'Identifier of the parent item.' },
						name: { type: 'string', description: 'Name of the item being referenced.' },
						path: {
							type: 'string',
							description:
								'Percent-encoded path that can be used to navigate to the item.',
						},
						shareId: {
							type: 'string',
							description:
								'Identifier of a shared resource that can be accessed via the Shares API.',
						},
						sharepointIds: {
							type: 'object',
							description:
								'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
							properties: {
								listId: { type: 'string', description: "GUID of the item's list." },
								listItemId: {
									type: 'string',
									description:
										'Integer identifier of the item within its list, returned as a string.',
								},
								listItemUniqueId: {
									type: 'string',
									description:
										'GUID of the item within OneDrive for Business or the SharePoint site.',
								},
								siteId: {
									type: 'string',
									description: "GUID of the item's site collection.",
								},
								siteUrl: {
									type: 'string',
									description:
										'SharePoint URL of the site that contains the item.',
								},
								tenantId: { type: 'string', description: 'GUID of the tenant.' },
								webId: {
									type: 'string',
									description: "GUID of the item's site (SPWeb).",
								},
							},
							required: [],
						},
						siteId: {
							type: 'string',
							description:
								'Composite site id of the parent site. Not populated for OneDrive personal.',
						},
					},
					required: [],
				},
				publishingState: {
					type: 'object',
					description: 'Publishing status and the version visible to the caller.',
					properties: {
						level: {
							type: 'string',
							description: 'Publication state.',
							default: '',
							enum: ['', 'published', 'checkout', 'draft'],
						},
						versionId: {
							type: 'string',
							description: 'Identifier of the version visible to the caller.',
						},
						checkedOutBy: {
							type: 'object',
							description: 'The user who checked out the file.',
							properties: {
								application: {
									type: 'object',
									description: 'The application associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								applicationInstance: {
									type: 'object',
									description:
										'The application instance associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								conversation: {
									type: 'object',
									description: 'The conversation associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								conversationIdentityType: {
									type: 'object',
									description:
										'The conversation identity type associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								device: {
									type: 'object',
									description: 'The device associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								encrypted: {
									type: 'object',
									description: 'The encrypted associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								onPremises: {
									type: 'object',
									description: 'The on premises associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								guest: {
									type: 'object',
									description: 'The guest associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								phone: {
									type: 'object',
									description: 'The phone associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
										},
									},
									required: [],
								},
								user: {
									type: 'object',
									description: 'The user associated with this action.',
									properties: {
										displayName: {
											type: 'string',
											description:
												'The display name of the identity. For drive items this can lag a rename.',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the identity.',
										},
										email: {
											type: 'string',
											description:
												'Email address of the identity, when the service returns one.',
										},
										tenantId: {
											type: 'string',
											description:
												'Unique identifier of the tenant. Optional.',
										},
										thumbnails: {
											description:
												'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
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
				reactions: {
					type: 'object',
					description: 'Counts of comments, likes, and shares on the page.',
					properties: {
						commentCount: { type: 'number', description: 'Number of comments.' },
						likeCount: { type: 'number', description: 'Number of likes.' },
						shareCount: { type: 'number', description: 'Number of shares.' },
					},
					required: [],
				},
				webUrl: {
					type: 'string',
					description: 'URL that opens the page in the browser. Read-only.',
				},
				createdByUser: {
					description: 'User who created the page. Returned when expanded.',
				},
				lastModifiedByUser: {
					description: 'User who last modified the page. Returned when expanded.',
				},
				webParts: { description: 'Web parts on the page. Returned when expanded.' },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'getASite',
		label: 'Get a site',
		description: 'Returns one SharePoint site.',
		context:
			'---\nname: getASite\ndescription: Returns one SharePoint site.\n---\n\nReturns one [site](https://learn.microsoft.com/en-us/graph/api/resources/site?view=graph-rest-1.0) from `GET /sites/{site-id}`.\n\nUse site id `root` for the tenant root site, the composite id (`hostname,siteCollectionId,siteId`), or a server-relative URL in the form `hostname:/sites/name`. When addressing child resources (`/lists`, `/drives`, `/pages`) by server-relative URL on other endpoints, append a closing colon (`hostname:/sites/name:`) or pass the composite `id` returned by this endpoint. Expand `drives` when you need a document library id for the file endpoints.\n\nAPI reference: [Get site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name`. From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'Navigation properties to expand, comma-separated, such as `drive` or `lists`. Sent as `$expand`. Complex properties are not navigation properties: `siteCollection` belongs in Select, and expanding it returns 400.',
				},
			},
			required: ['site'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to this resource.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to this resource.',
				},
				id: {
					type: 'string',
					description:
						'Composite site id: hostname, site-collection GUID, and site GUID.',
				},
				isPersonalSite: {
					type: 'boolean',
					description: 'Whether the site is a personal site. Read-only.',
				},
				root: { description: 'Present on the root site of the site collection.' },
				sharepointIds: {
					type: 'object',
					description:
						'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
					properties: {
						listId: { type: 'string', description: "GUID of the item's list." },
						listItemId: {
							type: 'string',
							description:
								'Integer identifier of the item within its list, returned as a string.',
						},
						listItemUniqueId: {
							type: 'string',
							description:
								'GUID of the item within OneDrive for Business or the SharePoint site.',
						},
						siteId: {
							type: 'string',
							description: "GUID of the item's site collection.",
						},
						siteUrl: {
							type: 'string',
							description: 'SharePoint URL of the site that contains the item.',
						},
						tenantId: { type: 'string', description: 'GUID of the tenant.' },
						webId: { type: 'string', description: "GUID of the item's site (SPWeb)." },
					},
					required: [],
				},
				siteCollection: {
					type: 'object',
					description: 'Present when this site is the root of a site collection.',
					properties: {
						dataLocationCode: {
							type: 'string',
							description:
								'Geographic region code. Only for multi-geo tenants. Read-only.',
						},
						hostname: {
							type: 'string',
							description: 'Hostname of the site collection. Read-only.',
						},
						root: { description: 'Present when this is a root site collection.' },
						archivalDetails: {
							type: 'object',
							description: 'Archive state of the site collection.',
							properties: {
								archiveStatus: {
									type: 'string',
									description:
										'Whether the site collection is archived or reactivating.',
									default: '',
									enum: [
										'',
										'recentlyArchived',
										'fullyArchived',
										'reactivating',
										'unknownFutureValue',
									],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				displayName: { type: 'string', description: 'Full title of the site. Read-only.' },
				name: { type: 'string', description: 'Name or title of the site.' },
				createdDateTime: {
					type: 'string',
					description: 'When the site was created. Read-only.',
				},
				description: { type: 'string', description: 'Descriptive text for the site.' },
				eTag: { type: 'string', description: 'ETag for the site. Read-only.' },
				lastModifiedDateTime: {
					type: 'string',
					description: 'When the site was last modified. Read-only.',
				},
				webUrl: {
					type: 'string',
					description: 'URL that opens the site in the browser. Read-only.',
				},
				analytics: { description: 'View analytics. Returned when expanded.' },
				'columns@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `columns` when that property is expanded.',
				},
				columns: {
					type: 'array',
					description: 'Site column definitions. Returned when expanded.',
					items: {
						type: 'object',
						description: 'A site column.',
						properties: {
							boolean: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).',
							},
							calculated: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).',
							},
							choice: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).',
							},
							contentApprovalStatus: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).',
							},
							currency: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).',
							},
							dateTime: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).',
							},
							geolocation: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).',
							},
							hyperlinkOrPicture: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).',
							},
							lookup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).',
							},
							number: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).',
							},
							personOrGroup: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).',
							},
							term: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).',
							},
							text: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).',
							},
							thumbnail: {
								description:
									'Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).',
							},
							columnGroup: {
								type: 'string',
								description: 'For site columns, the group this column belongs to.',
							},
							defaultValue: {
								description:
									'Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'User-facing description of the column.',
							},
							displayName: {
								type: 'string',
								description: 'User-facing name of the column.',
							},
							enforceUniqueValues: {
								type: 'boolean',
								description:
									'When true, no two list items may have the same value for this column.',
							},
							hidden: {
								type: 'boolean',
								description: 'Whether the column is hidden in the SharePoint UI.',
							},
							indexed: {
								type: 'boolean',
								description:
									'Whether the column can be used for sorting and searching.',
							},
							name: {
								type: 'string',
								description:
									"API-facing column name, used as the key on a list item's fields.",
							},
							propagateChanges: {
								type: 'boolean',
								description:
									'When true, changes to this column propagate to lists that implement it.',
							},
							readOnly: {
								type: 'boolean',
								description: 'Whether values in this column can be modified.',
							},
							required: {
								type: 'boolean',
								description: 'Whether the column value is mandatory on items.',
							},
							validation: {
								description:
									'Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0).',
							},
							id: { type: 'string', description: 'Unique identifier of the column.' },
							isDeletable: {
								type: 'boolean',
								description:
									'Whether this column can be deleted. Not returned for every list-column response.',
							},
							isReorderable: {
								type: 'boolean',
								description:
									'Whether values in the column can be reordered. Read-only.',
							},
							isSealed: {
								type: 'boolean',
								description: 'Whether the column can be changed.',
							},
							sourceContentType: {
								type: 'object',
								description: 'SharePoint content type of the item.',
								properties: {
									id: { type: 'string', description: 'The content type id.' },
									name: { type: 'string', description: 'The content type name.' },
								},
								required: [],
							},
							type: {
								type: 'string',
								description:
									'Read-only column type for site columns. See [columnTypes](https://learn.microsoft.com/en-us/graph/api/resources/columntypes?view=graph-rest-1.0).',
							},
							sourceColumn: {
								description:
									'Source column when this column is inherited from a content type.',
							},
						},
						required: [],
					},
				},
				contentTypes: {
					description: 'Content types defined for the site. Returned when expanded.',
				},
				'drive@odata.context': {
					type: 'string',
					description:
						'Metadata URL Graph attaches beside `drive` when that property is expanded.',
				},
				drive: {
					description: 'Default document library for the site. Returned when expanded.',
				},
				drives: {
					type: 'array',
					description: 'Document libraries under the site. Returned when expanded.',
					items: { description: 'A drive resource.' },
				},
				items: {
					description:
						'Address of items in the site. This collection cannot be enumerated.',
				},
				lists: { description: 'Lists under the site. Use List lists to enumerate them.' },
				onenote: { description: 'OneNote notebook for the site.' },
				operations: { description: 'Long-running operations on the site.' },
				pages: { description: 'Pages in the site. Use List pages to enumerate them.' },
				permissions: { description: 'Permissions on the site.' },
				sites: {
					type: 'array',
					description: 'Subsites. Returned when expanded.',
					items: { description: 'A subsite.' },
				},
				termStore: { description: 'Default term store under the site.' },
				termStores: { description: 'Term stores under the site.' },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'listDriveItemChildren',
		label: 'List drive item children',
		description: 'Lists files and folders in a drive folder.',
		context:
			'---\nname: listDriveItemChildren\ndescription: Lists files and folders in a drive folder.\n---\n\nLists children with `GET /sites/{site-id}/drives/{drive-id}/items/{item-id}/children`.\n\nSearch under an item is the searchDriveItems endpoint. Path addressing (`root:/{path}:/children`) is a different URL and is not this endpoint.\n\nThe default page size is 200. `@odata.nextLink` is present when more children exist; keep following `skipToken` until `@odata.nextLink` is absent, as pages can be empty or short.\n\nAPI reference: [List children](https://learn.microsoft.com/en-us/graph/api/driveitem-list-children?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Files.Read.All', 'Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				drive: {
					type: 'string',
					description:
						'Identifier of the document library drive. Expand `drive` or `drives` on Get a site to discover it.',
				},
				itemId: {
					type: 'string',
					description: 'Drive item id of the folder. Use `root` for the drive root.',
				},
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'Navigation properties to expand, comma-separated, such as `thumbnails`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.',
				},
				orderby: {
					type: 'string',
					description: 'OData `$orderby` expression. Sent as `$orderby`.',
				},
				top: { type: 'number', description: 'Page size. Sent as `$top`.' },
				skipToken: {
					type: 'string',
					description: 'Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.',
				},
			},
			required: ['site', 'drive', 'itemId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'Children of the folder.',
					items: {
						type: 'object',
						description: 'One drive item.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'Version token Graph attaches to this resource.',
							},
							audio: {
								description:
									'Audio metadata. Only on OneDrive personal. Read-only. See [audio](https://learn.microsoft.com/en-us/graph/api/resources/audio?view=graph-rest-1.0).',
							},
							bundle: {
								description:
									'Bundle metadata. Read-only. See [bundle](https://learn.microsoft.com/en-us/graph/api/resources/bundle?view=graph-rest-1.0).',
							},
							createdBy: {
								type: 'object',
								description: 'Identity that created the item. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							createdDateTime: {
								type: 'string',
								description: 'When the item was created on the service. Read-only.',
							},
							cTag: {
								type: 'string',
								description:
									'ETag for the content. Not returned for folders in OneDrive for Business or SharePoint. Read-only.',
							},
							deleted: {
								description:
									'Deleted state. Read-only. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'User-visible description. Only on OneDrive personal.',
							},
							eTag: {
								type: 'string',
								description: 'ETag for metadata and content. Read-only.',
							},
							file: {
								type: 'object',
								description: 'Present when the item is a file. Read-only.',
								properties: {
									hashes: {
										description:
											'Hashes of the file content. See [hashes](https://learn.microsoft.com/en-us/graph/api/resources/hashes?view=graph-rest-1.0).',
									},
									mimeType: {
										type: 'string',
										description: 'MIME type chosen by the service. Read-only.',
									},
								},
								required: [],
							},
							fileSystemInfo: {
								type: 'object',
								description:
									'Created and modified times as reported by the client. These differ from the service timestamps on the item.',
								properties: {
									createdDateTime: {
										type: 'string',
										description:
											'UTC date and time the file was created on the client.',
									},
									lastAccessedDateTime: {
										type: 'string',
										description:
											'UTC date and time the file was last accessed. Not returned for SharePoint or OneDrive for Business.',
									},
									lastModifiedDateTime: {
										type: 'string',
										description:
											'UTC date and time the file was last modified on the client.',
									},
								},
								required: [],
							},
							folder: {
								type: 'object',
								description: 'Present when the item is a folder. Read-only.',
								properties: {
									childCount: {
										type: 'number',
										description: 'Number of immediate children.',
									},
									view: {
										description:
											'Recommended folder view. See [folderView](https://learn.microsoft.com/en-us/graph/api/resources/folderview?view=graph-rest-1.0).',
									},
								},
								required: [],
							},
							id: {
								type: 'string',
								description:
									'Unique identifier of the item within the drive. Read-only.',
							},
							image: {
								description:
									'Image metadata. Read-only. See [image](https://learn.microsoft.com/en-us/graph/api/resources/image?view=graph-rest-1.0).',
							},
							lastModifiedBy: {
								type: 'object',
								description: 'Identity that last modified the item. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							lastModifiedDateTime: {
								type: 'string',
								description:
									'When the item was last modified on the service. Read-only.',
							},
							location: {
								description:
									'Location metadata. Read-only. See [location](https://learn.microsoft.com/en-us/graph/api/resources/geocoordinates?view=graph-rest-1.0).',
							},
							malware: {
								description:
									'Present when the item was detected as malware. Read-only. See [malware](https://learn.microsoft.com/en-us/graph/api/resources/malware?view=graph-rest-1.0).',
							},
							name: { type: 'string', description: 'File or folder name.' },
							package: {
								description:
									'Present when the item is a package. Read-only. See [package](https://learn.microsoft.com/en-us/graph/api/resources/package?view=graph-rest-1.0).',
							},
							parentReference: {
								type: 'object',
								description: 'Address of the parent drive item or list item.',
								properties: {
									driveId: {
										type: 'string',
										description:
											'Identifier of the drive that contains the item. Only when the item is in a drive.',
									},
									driveType: {
										type: 'string',
										description:
											'Type of drive. Only when the item is in a drive.',
										default: '',
										enum: ['', 'personal', 'business', 'documentLibrary'],
									},
									id: {
										type: 'string',
										description: 'Identifier of the parent item.',
									},
									name: {
										type: 'string',
										description: 'Name of the item being referenced.',
									},
									path: {
										type: 'string',
										description:
											'Percent-encoded path that can be used to navigate to the item.',
									},
									shareId: {
										type: 'string',
										description:
											'Identifier of a shared resource that can be accessed via the Shares API.',
									},
									sharepointIds: {
										type: 'object',
										description:
											'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
										properties: {
											listId: {
												type: 'string',
												description: "GUID of the item's list.",
											},
											listItemId: {
												type: 'string',
												description:
													'Integer identifier of the item within its list, returned as a string.',
											},
											listItemUniqueId: {
												type: 'string',
												description:
													'GUID of the item within OneDrive for Business or the SharePoint site.',
											},
											siteId: {
												type: 'string',
												description: "GUID of the item's site collection.",
											},
											siteUrl: {
												type: 'string',
												description:
													'SharePoint URL of the site that contains the item.',
											},
											tenantId: {
												type: 'string',
												description: 'GUID of the tenant.',
											},
											webId: {
												type: 'string',
												description: "GUID of the item's site (SPWeb).",
											},
										},
										required: [],
									},
									siteId: {
										type: 'string',
										description:
											'Composite site id of the parent site. Not populated for OneDrive personal.',
									},
								},
								required: [],
							},
							pendingOperations: {
								description:
									'Operations that may still change this item. Read-only. See [pending operations](https://learn.microsoft.com/en-us/graph/api/resources/pendingoperations?view=graph-rest-1.0).',
							},
							photo: {
								description:
									'Photo metadata. Read-only. See [photo](https://learn.microsoft.com/en-us/graph/api/resources/photo?view=graph-rest-1.0).',
							},
							publication: {
								type: 'object',
								description:
									'Published or checked-out state. Not returned unless requested.',
								properties: {
									level: {
										type: 'string',
										description: 'Publication state.',
										default: '',
										enum: ['', 'published', 'checkout'],
									},
									versionId: {
										type: 'string',
										description:
											'Identifier of the version visible to the caller.',
									},
									checkedOutBy: {
										type: 'object',
										description: 'The user who checked out the file.',
										properties: {
											application: {
												type: 'object',
												description:
													'The application associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											applicationInstance: {
												type: 'object',
												description:
													'The application instance associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											conversation: {
												type: 'object',
												description:
													'The conversation associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											conversationIdentityType: {
												type: 'object',
												description:
													'The conversation identity type associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											device: {
												type: 'object',
												description:
													'The device associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											encrypted: {
												type: 'object',
												description:
													'The encrypted associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											onPremises: {
												type: 'object',
												description:
													'The on premises associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											guest: {
												type: 'object',
												description:
													'The guest associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											phone: {
												type: 'object',
												description:
													'The phone associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											user: {
												type: 'object',
												description:
													'The user associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
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
							remoteItem: {
								description:
									'Present when the item lives in another drive. Read-only. See [remote item](https://learn.microsoft.com/en-us/graph/api/resources/remoteitem?view=graph-rest-1.0).',
							},
							root: {
								description: 'Present when this item is the root of the drive.',
							},
							searchResult: {
								type: 'object',
								description: 'Present on items returned by search. Read-only.',
								properties: {
									onClickTelemetryUrl: {
										type: 'string',
										description: 'Telemetry URL returned with a search hit.',
									},
								},
								required: [],
							},
							shared: {
								description:
									'Sharing state. Read-only. See [shared](https://learn.microsoft.com/en-us/graph/api/resources/shared?view=graph-rest-1.0).',
							},
							sharepointIds: {
								type: 'object',
								description:
									'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
								properties: {
									listId: {
										type: 'string',
										description: "GUID of the item's list.",
									},
									listItemId: {
										type: 'string',
										description:
											'Integer identifier of the item within its list, returned as a string.',
									},
									listItemUniqueId: {
										type: 'string',
										description:
											'GUID of the item within OneDrive for Business or the SharePoint site.',
									},
									siteId: {
										type: 'string',
										description: "GUID of the item's site collection.",
									},
									siteUrl: {
										type: 'string',
										description:
											'SharePoint URL of the site that contains the item.',
									},
									tenantId: {
										type: 'string',
										description: 'GUID of the tenant.',
									},
									webId: {
										type: 'string',
										description: "GUID of the item's site (SPWeb).",
									},
								},
								required: [],
							},
							size: { type: 'number', description: 'Size in bytes. Read-only.' },
							specialFolder: {
								description:
									'Present when the item is also a special folder. Read-only. See [special folder](https://learn.microsoft.com/en-us/graph/api/resources/specialfolder?view=graph-rest-1.0).',
							},
							video: {
								description:
									'Video metadata. Read-only. See [video](https://learn.microsoft.com/en-us/graph/api/resources/video?view=graph-rest-1.0).',
							},
							webDavUrl: { type: 'string', description: 'WebDAV URL for the item.' },
							webUrl: {
								type: 'string',
								description: 'URL that opens the item in the browser. Read-only.',
							},
							'@microsoft.graph.downloadUrl': {
								type: 'string',
								description:
									'Short-lived URL that downloads the file without an Authorization header. Read-only. Expires in about an hour.',
							},
							activities: {
								description: 'Recent activities. Returned when expanded.',
							},
							analytics: { description: 'View analytics. Returned when expanded.' },
							children: {
								type: 'array',
								description:
									'Immediate children. Only folders have children. Returned when expanded; each entry is a driveItem.',
								items: { description: 'A child drive item.' },
							},
							createdByUser: {
								description: 'User who created the item. Returned when expanded.',
							},
							lastModifiedByUser: {
								description:
									'User who last modified the item. Returned when expanded.',
							},
							listItem: {
								description:
									'The document-library list item for this drive item. Returned when expanded.',
							},
							permissions: {
								description: 'Permissions on the item. Returned when expanded.',
							},
							retentionLabel: {
								description:
									'Retention label settings. See [itemRetentionLabel](https://learn.microsoft.com/en-us/graph/api/resources/itemretentionlabel?view=graph-rest-1.0).',
							},
							subscriptions: {
								description:
									'Subscriptions. Only supported on the root of a drive.',
							},
							'thumbnails@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `thumbnails` when that property is expanded.',
							},
							commentSettings: {
								type: 'object',
								description:
									'Comment settings Graph returns on a SharePoint drive item. The driveItem reference page does not list this property.',
								properties: {
									commentingDisabled: {
										type: 'object',
										description: 'Whether commenting is disabled on this item.',
										properties: {
											isDisabled: {
												type: 'boolean',
												description: 'True when commenting is disabled.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							thumbnails: { description: 'Thumbnail sets. Returned when expanded.' },
							versions: {
								description:
									'Previous versions of the file. Returned when expanded.',
							},
							workbook: { description: 'Workbook API for Excel files.' },
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'URL of the next page. Absent when this page is the last.',
				},
				'@odata.context': {
					type: 'string',
					description: 'OData context URL for the collection.',
				},
				isAuthoritative: {
					type: 'boolean',
					description:
						'Whether the SharePoint site returned on the response is marked as authoritative.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'listItems',
		label: 'List items',
		description: 'Lists items in a SharePoint list.',
		context:
			"---\nname: listItems\ndescription: Lists items in a SharePoint list.\n---\n\nReturns [listItem](https://learn.microsoft.com/en-us/graph/api/resources/listitem?view=graph-rest-1.0) objects from `GET /sites/{site-id}/lists/{list-id}/items`.\n\nColumn values are not in the default response. Pass `expand` as `fields` or `fields(select=Title,Color)`. The query name is `expand`, matching the list-items reference. `filter` is sent as `$filter`.\n\nFiltering on a non-indexed column returns a 400 error unless the `Prefer: HonorNonIndexedQueriesWarningMayFailRandomly` header is sent; to filter on a non-indexed column, call `v1.0/sites/{site-id}/lists/{list-id}/items` via the `arbitraryCall` endpoint with that header.\n\nUp to 12 lookup fields can be selected in one query. When `@odata.nextLink` is present, keep following `skipToken` until `@odata.nextLink` is absent; pages can be empty or short.\n\n`list` accepts the list GUID (`id`) or display name. When a list's display name contains `?`, `/`, `#`, or `%` (or is `.` or `..`), pass its GUID instead — Microsoft Graph rejects `?`, `/`, and `#` in path segments and double-decodes `%` on the server side, which can resolve to a different list.\n\nAPI reference: [List items](https://learn.microsoft.com/en-us/graph/api/listitem-list?view=graph-rest-1.0).\n",
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				list: {
					type: 'string',
					description:
						'GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#%]+$`,
				},
				expand: {
					type: 'string',
					description:
						'Relationships to expand. Sent as `expand`. Pass `fields` to include column values. See [List items](https://learn.microsoft.com/en-us/graph/api/listitem-list?view=graph-rest-1.0).',
				},
				filter: {
					type: 'string',
					description:
						'OData filter expression. Sent as `$filter`. Only one indexed field can be filtered at a time. See [List items](https://learn.microsoft.com/en-us/graph/api/listitem-list?view=graph-rest-1.0).',
				},
				top: { type: 'number', description: 'Page size. Sent as `$top`.' },
				skipToken: {
					type: 'string',
					description: 'Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.',
				},
			},
			required: ['site', 'list'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'Items in the list.',
					items: {
						type: 'object',
						description: 'One list item.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'Version token Graph attaches to this resource.',
							},
							contentType: {
								type: 'object',
								description: 'SharePoint content type of the item.',
								properties: {
									id: { type: 'string', description: 'The content type id.' },
									name: { type: 'string', description: 'The content type name.' },
								},
								required: [],
							},
							createdBy: {
								type: 'object',
								description: 'Identity that created the item. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							createdDateTime: {
								type: 'string',
								description: 'When the item was created. Read-only.',
							},
							deleted: {
								description:
									'Present on a delta result when the item was deleted. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'Descriptive text for the item.',
							},
							eTag: { type: 'string', description: 'ETag for the item. Read-only.' },
							'fields@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `fields` when that property is expanded.',
							},
							fields: {
								type: 'object',
								description:
									'Column values. Keys are column internal names. Lookup columns come back as `{name}LookupId` unless you select the lookup by name. See [fieldValueSet](https://learn.microsoft.com/en-us/graph/api/resources/fieldvalueset?view=graph-rest-1.0).',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							id: {
								type: 'string',
								description: 'Unique identifier of the item. Read-only.',
							},
							lastModifiedBy: {
								type: 'object',
								description: 'Identity that last modified the item. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'When the item was last modified. Read-only.',
							},
							name: { type: 'string', description: 'Name or title of the item.' },
							parentReference: {
								type: 'object',
								description: 'Address of the parent drive item or list item.',
								properties: {
									driveId: {
										type: 'string',
										description:
											'Identifier of the drive that contains the item. Only when the item is in a drive.',
									},
									driveType: {
										type: 'string',
										description:
											'Type of drive. Only when the item is in a drive.',
										default: '',
										enum: ['', 'personal', 'business', 'documentLibrary'],
									},
									id: {
										type: 'string',
										description: 'Identifier of the parent item.',
									},
									name: {
										type: 'string',
										description: 'Name of the item being referenced.',
									},
									path: {
										type: 'string',
										description:
											'Percent-encoded path that can be used to navigate to the item.',
									},
									shareId: {
										type: 'string',
										description:
											'Identifier of a shared resource that can be accessed via the Shares API.',
									},
									sharepointIds: {
										type: 'object',
										description:
											'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
										properties: {
											listId: {
												type: 'string',
												description: "GUID of the item's list.",
											},
											listItemId: {
												type: 'string',
												description:
													'Integer identifier of the item within its list, returned as a string.',
											},
											listItemUniqueId: {
												type: 'string',
												description:
													'GUID of the item within OneDrive for Business or the SharePoint site.',
											},
											siteId: {
												type: 'string',
												description: "GUID of the item's site collection.",
											},
											siteUrl: {
												type: 'string',
												description:
													'SharePoint URL of the site that contains the item.',
											},
											tenantId: {
												type: 'string',
												description: 'GUID of the tenant.',
											},
											webId: {
												type: 'string',
												description: "GUID of the item's site (SPWeb).",
											},
										},
										required: [],
									},
									siteId: {
										type: 'string',
										description:
											'Composite site id of the parent site. Not populated for OneDrive personal.',
									},
								},
								required: [],
							},
							sharepointIds: {
								type: 'object',
								description:
									'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
								properties: {
									listId: {
										type: 'string',
										description: "GUID of the item's list.",
									},
									listItemId: {
										type: 'string',
										description:
											'Integer identifier of the item within its list, returned as a string.',
									},
									listItemUniqueId: {
										type: 'string',
										description:
											'GUID of the item within OneDrive for Business or the SharePoint site.',
									},
									siteId: {
										type: 'string',
										description: "GUID of the item's site collection.",
									},
									siteUrl: {
										type: 'string',
										description:
											'SharePoint URL of the site that contains the item.',
									},
									tenantId: {
										type: 'string',
										description: 'GUID of the tenant.',
									},
									webId: {
										type: 'string',
										description: "GUID of the item's site (SPWeb).",
									},
								},
								required: [],
							},
							webUrl: {
								type: 'string',
								description: 'URL that opens the item in the browser. Read-only.',
							},
							activities: {
								description:
									'Recent activities on this item. Returned when expanded.',
							},
							analytics: {
								description:
									'View analytics for this item. Returned when expanded.',
							},
							documentSetVersions: {
								description: 'Document set versions. Returned when expanded.',
							},
							driveItem: {
								description:
									'The same item as a [driveItem](https://learn.microsoft.com/en-us/graph/api/resources/driveitem?view=graph-rest-1.0), for document libraries. Returned when expanded.',
							},
							permissions: {
								description: 'Permissions on the item. Returned when expanded.',
							},
							versions: {
								description:
									'Previous versions of the list item. Returned when expanded.',
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'URL of the next page. Absent when this page is the last.',
				},
				'@odata.context': {
					type: 'string',
					description: 'OData context URL for the collection.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'listLists',
		label: 'List lists',
		description: 'Lists the lists in a SharePoint site.',
		context:
			'---\nname: listLists\ndescription: Lists the lists in a SharePoint site.\n---\n\nReturns [list](https://learn.microsoft.com/en-us/graph/api/resources/list?view=graph-rest-1.0) objects from `GET /sites/{site-id}/lists`.\n\nSystem lists are hidden unless `select` includes `system`. Pass `top` to set the page size. When `@odata.nextLink` is present, keep following `skipToken` until `@odata.nextLink` is absent; pages can be empty or short.\n\nAPI reference: [List lists](https://learn.microsoft.com/en-us/graph/api/list-list?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				select: {
					type: 'string',
					description:
						'Comma-separated properties to return. Sent as `$select`. Include `system` to return system-managed lists, which are hidden otherwise.',
				},
				top: { type: 'number', description: 'Page size. Sent as `$top`.' },
				skipToken: {
					type: 'string',
					description: 'Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.',
				},
			},
			required: ['site'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'Lists in the site.',
					items: {
						type: 'object',
						description: 'One list.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'Version token Graph attaches to this resource.',
							},
							createdBy: {
								type: 'object',
								description: 'Identity that created the list. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							createdDateTime: {
								type: 'string',
								description: 'When the list was created. Read-only.',
							},
							description: {
								type: 'string',
								description: 'Descriptive text for the list.',
							},
							displayName: {
								type: 'string',
								description: 'Display title of the list.',
							},
							eTag: { type: 'string', description: 'ETag for the list. Read-only.' },
							id: {
								type: 'string',
								description: 'Unique identifier of the list. Read-only.',
							},
							lastModifiedBy: {
								type: 'object',
								description: 'Identity that last modified the list. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'When the list was last modified. Read-only.',
							},
							list: {
								type: 'object',
								description:
									'Additional information about the list. When omitted on create, Graph uses the genericList template.',
								properties: {
									contentTypesEnabled: {
										type: 'boolean',
										description:
											'Whether content types are enabled for this list.',
									},
									hidden: {
										type: 'boolean',
										description:
											'Whether the list is hidden in the SharePoint UI.',
									},
									template: {
										type: 'string',
										description:
											'Base list template. [listInfo](https://learn.microsoft.com/en-us/graph/api/resources/listinfo?view=graph-rest-1.0) names both `tasks` and `task`, and says other SPListTemplateType names can appear on responses. This list is only the names that page spells out.',
										default: '',
										enum: [
											'',
											'documentLibrary',
											'genericList',
											'tasks',
											'task',
											'survey',
											'links',
											'announcements',
											'contacts',
										],
									},
								},
								required: [],
							},
							name: { type: 'string', description: 'Name of the list. Read-only.' },
							parentReference: {
								type: 'object',
								description: 'Address of the parent drive item or list item.',
								properties: {
									driveId: {
										type: 'string',
										description:
											'Identifier of the drive that contains the item. Only when the item is in a drive.',
									},
									driveType: {
										type: 'string',
										description:
											'Type of drive. Only when the item is in a drive.',
										default: '',
										enum: ['', 'personal', 'business', 'documentLibrary'],
									},
									id: {
										type: 'string',
										description: 'Identifier of the parent item.',
									},
									name: {
										type: 'string',
										description: 'Name of the item being referenced.',
									},
									path: {
										type: 'string',
										description:
											'Percent-encoded path that can be used to navigate to the item.',
									},
									shareId: {
										type: 'string',
										description:
											'Identifier of a shared resource that can be accessed via the Shares API.',
									},
									sharepointIds: {
										type: 'object',
										description:
											'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
										properties: {
											listId: {
												type: 'string',
												description: "GUID of the item's list.",
											},
											listItemId: {
												type: 'string',
												description:
													'Integer identifier of the item within its list, returned as a string.',
											},
											listItemUniqueId: {
												type: 'string',
												description:
													'GUID of the item within OneDrive for Business or the SharePoint site.',
											},
											siteId: {
												type: 'string',
												description: "GUID of the item's site collection.",
											},
											siteUrl: {
												type: 'string',
												description:
													'SharePoint URL of the site that contains the item.',
											},
											tenantId: {
												type: 'string',
												description: 'GUID of the tenant.',
											},
											webId: {
												type: 'string',
												description: "GUID of the item's site (SPWeb).",
											},
										},
										required: [],
									},
									siteId: {
										type: 'string',
										description:
											'Composite site id of the parent site. Not populated for OneDrive personal.',
									},
								},
								required: [],
							},
							sharepointIds: {
								type: 'object',
								description:
									'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
								properties: {
									listId: {
										type: 'string',
										description: "GUID of the item's list.",
									},
									listItemId: {
										type: 'string',
										description:
											'Integer identifier of the item within its list, returned as a string.',
									},
									listItemUniqueId: {
										type: 'string',
										description:
											'GUID of the item within OneDrive for Business or the SharePoint site.',
									},
									siteId: {
										type: 'string',
										description: "GUID of the item's site collection.",
									},
									siteUrl: {
										type: 'string',
										description:
											'SharePoint URL of the site that contains the item.',
									},
									tenantId: {
										type: 'string',
										description: 'GUID of the tenant.',
									},
									webId: {
										type: 'string',
										description: "GUID of the item's site (SPWeb).",
									},
								},
								required: [],
							},
							system: {
								description:
									'Present when the list is system-managed. See [systemFacet](https://learn.microsoft.com/en-us/graph/api/resources/systemfacet?view=graph-rest-1.0).',
							},
							webUrl: {
								type: 'string',
								description: 'URL that opens the list in the browser. Read-only.',
							},
							'columns@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `columns` when that property is expanded.',
							},
							columns: {
								type: 'array',
								description:
									'Column definitions for this list. Returned when expanded.',
								items: {
									type: 'object',
									description: 'A column definition.',
									properties: {
										boolean: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).',
										},
										calculated: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).',
										},
										choice: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).',
										},
										contentApprovalStatus: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).',
										},
										currency: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).',
										},
										dateTime: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).',
										},
										geolocation: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).',
										},
										hyperlinkOrPicture: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).',
										},
										lookup: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).',
										},
										number: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).',
										},
										personOrGroup: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).',
										},
										term: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).',
										},
										text: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).',
										},
										thumbnail: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).',
										},
										columnGroup: {
											type: 'string',
											description:
												'For site columns, the group this column belongs to.',
										},
										defaultValue: {
											description:
												'Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).',
										},
										description: {
											type: 'string',
											description: 'User-facing description of the column.',
										},
										displayName: {
											type: 'string',
											description: 'User-facing name of the column.',
										},
										enforceUniqueValues: {
											type: 'boolean',
											description:
												'When true, no two list items may have the same value for this column.',
										},
										hidden: {
											type: 'boolean',
											description:
												'Whether the column is hidden in the SharePoint UI.',
										},
										indexed: {
											type: 'boolean',
											description:
												'Whether the column can be used for sorting and searching.',
										},
										name: {
											type: 'string',
											description:
												"API-facing column name, used as the key on a list item's fields.",
										},
										propagateChanges: {
											type: 'boolean',
											description:
												'When true, changes to this column propagate to lists that implement it.',
										},
										readOnly: {
											type: 'boolean',
											description:
												'Whether values in this column can be modified.',
										},
										required: {
											type: 'boolean',
											description:
												'Whether the column value is mandatory on items.',
										},
										validation: {
											description:
												'Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0).',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the column.',
										},
										isDeletable: {
											type: 'boolean',
											description:
												'Whether this column can be deleted. Not returned for every list-column response.',
										},
										isReorderable: {
											type: 'boolean',
											description:
												'Whether values in the column can be reordered. Read-only.',
										},
										isSealed: {
											type: 'boolean',
											description: 'Whether the column can be changed.',
										},
										sourceContentType: {
											type: 'object',
											description: 'SharePoint content type of the item.',
											properties: {
												id: {
													type: 'string',
													description: 'The content type id.',
												},
												name: {
													type: 'string',
													description: 'The content type name.',
												},
											},
											required: [],
										},
										type: {
											type: 'string',
											description:
												'Read-only column type for site columns. See [columnTypes](https://learn.microsoft.com/en-us/graph/api/resources/columntypes?view=graph-rest-1.0).',
										},
										sourceColumn: {
											description:
												'Source column when this column is inherited from a content type.',
										},
									},
									required: [],
								},
							},
							contentTypes: {
								description: 'Content types in this list. Returned when expanded.',
							},
							'drive@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `drive` when that property is expanded.',
							},
							drive: {
								description: 'The list as a drive. Only on document libraries.',
							},
							items: {
								description: 'Items in the list. Use List items to enumerate them.',
							},
							operations: { description: 'Long-running operations on the list.' },
							permissions: { description: 'Permissions on the list.' },
							subscriptions: { description: 'Subscriptions on the list.' },
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'URL of the next page. Absent when this page is the last.',
				},
				'@odata.context': {
					type: 'string',
					description: 'OData context URL for the collection.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'listPages',
		label: 'List pages',
		description: 'Returns site pages in a SharePoint site.',
		context:
			"---\nname: listPages\ndescription: Returns site pages in a SharePoint site.\n---\n\nReturns [sitePage](https://learn.microsoft.com/en-us/graph/api/resources/sitepage?view=graph-rest-1.0) objects from `GET /sites/{site-id}/pages/microsoft.graph.sitePage`.\n\nThis is the v1.0 page API. It returns pages in all publishing states (`published`, `checkout`, and `draft` under `publishingState.level`). To return only published pages, pass `filter` as `publishingState/level eq 'published'`.\n\nPass `top` to set the page size. When `@odata.nextLink` is present, call this endpoint again with `skipToken` taken from that URL (`$skiptoken`), or call Arbitrary call with `https://graph.microsoft.com/` stripped from the URL. Keep following `skipToken` until `@odata.nextLink` is absent; pages can be empty or short.\n\nAPI reference: [List site pages](https://learn.microsoft.com/en-us/graph/api/sitepage-list?view=graph-rest-1.0).\n",
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'Navigation properties to expand, comma-separated, such as `canvasLayout`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.',
				},
				filter: {
					type: 'string',
					description: 'OData `$filter` expression. Sent as `$filter`.',
				},
				orderby: {
					type: 'string',
					description:
						'OData order expression. Sent as `$orderBy`. The list is sorted by `name` ascending when this is omitted.',
				},
				top: { type: 'number', description: 'Page size. Sent as `$top`.' },
				count: {
					type: 'boolean',
					description:
						'When true, the response includes `@odata.count`. Sent as `$count`.',
				},
				skipToken: {
					type: 'string',
					description: 'Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.',
				},
			},
			required: ['site'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'Pages in the site.',
					items: {
						type: 'object',
						description: 'One page.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'Version token Graph attaches to this resource.',
							},
							'@odata.type': {
								type: 'string',
								description: 'OData type of the page, `#microsoft.graph.sitePage`.',
							},
							name: { type: 'string', description: 'File name of the page.' },
							description: {
								type: 'string',
								description: 'Descriptive text for the page.',
							},
							pageLayout: {
								type: 'string',
								description: 'Page layout.',
								default: '',
								enum: [
									'',
									'microsoftReserved',
									'article',
									'home',
									'unknownFutureValue',
								],
							},
							promotionKind: {
								type: 'string',
								description: 'How the page is promoted.',
								default: '',
								enum: [
									'',
									'microsoftReserved',
									'page',
									'newsPost',
									'unknownFutureValue',
								],
							},
							showComments: {
								type: 'boolean',
								description:
									'Whether comments are shown at the bottom of the page.',
							},
							showRecommendedPages: {
								type: 'boolean',
								description:
									'Whether recommended pages are shown at the bottom of the page.',
							},
							thumbnailWebUrl: {
								type: 'string',
								description: 'URL of the page thumbnail.',
							},
							titleArea: {
								type: 'object',
								description:
									'Title area of the page. See [titleArea](https://learn.microsoft.com/en-us/graph/api/resources/titlearea?view=graph-rest-1.0).',
								properties: {
									alternativeText: {
										type: 'string',
										description: 'Alternative text on the title area.',
									},
									enableGradientEffect: {
										type: 'boolean',
										description: 'Whether the title area uses a gradient.',
									},
									imageWebUrl: {
										type: 'string',
										description: 'URL of the image in the title area.',
									},
									layout: {
										type: 'string',
										description: 'Layout of the title area.',
										default: '',
										enum: [
											'',
											'imageAndTitle',
											'plain',
											'colorBlock',
											'overlap',
											'unknownFutureValue',
										],
									},
									serverProcessedContent: {
										description:
											'Server-processed content such as search index and link fixup data.',
									},
									showAuthor: {
										type: 'boolean',
										description:
											'Whether the author is shown in the title area.',
									},
									showPublishedDate: {
										type: 'boolean',
										description:
											'Whether the published date is shown in the title area.',
									},
									showTextBlockAboveTitle: {
										type: 'boolean',
										description:
											'Whether the text block above the title is shown.',
									},
									textAboveTitle: {
										type: 'string',
										description: 'Text shown above the title.',
									},
									textAlignment: {
										type: 'string',
										description: 'Text alignment in the title area.',
										default: '',
										enum: ['', 'left', 'center', 'unknownFutureValue'],
									},
									imageSourceType: {
										type: 'number',
										description:
											'Source type of the title image, as returned by Graph.',
									},
									hasTitleBeenCommitted: {
										type: 'boolean',
										description: 'Whether the title has been committed.',
									},
									'authors@odata.type': {
										type: 'string',
										description:
											'OData type of `authors`. Graph returns `#Collection(String)`. The titleArea reference page does not list this property.',
									},
									authors: {
										type: 'array',
										description:
											'Author strings Graph returns on the title area. Often empty. The titleArea reference page does not list this property.',
										items: {
											type: 'string',
											description: 'One string in the collection.',
										},
									},
									'authorByline@odata.type': {
										type: 'string',
										description:
											'OData type of `authorByline`. Graph returns `#Collection(String)`. The titleArea reference page does not list this property.',
									},
									authorByline: {
										type: 'array',
										description:
											'Byline strings Graph returns on the title area. Often empty. The titleArea reference page does not list this property.',
										items: {
											type: 'string',
											description: 'One string in the collection.',
										},
									},
								},
								required: [],
							},
							'canvasLayout@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `canvasLayout` when that property is expanded.',
							},
							canvasLayout: {
								description:
									'Page canvas, including horizontal sections and web parts. Web part `data` differs by web part type, so this object is free-form. See [Create sitePage](https://learn.microsoft.com/en-us/graph/api/sitepage-create?view=graph-rest-1.0).',
							},
							contentType: {
								type: 'object',
								description: 'SharePoint content type of the item.',
								properties: {
									id: { type: 'string', description: 'The content type id.' },
									name: { type: 'string', description: 'The content type name.' },
								},
								required: [],
							},
							createdBy: {
								type: 'object',
								description: 'Identity that created the page. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							createdDateTime: {
								type: 'string',
								description: 'When the page was created. Read-only.',
							},
							eTag: { type: 'string', description: 'ETag for the page.' },
							id: { type: 'string', description: 'Unique identifier of the page.' },
							lastModifiedBy: {
								type: 'object',
								description: 'Identity that last modified the page. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'When the page was last modified. Read-only.',
							},
							parentReference: {
								type: 'object',
								description: 'Address of the parent drive item or list item.',
								properties: {
									driveId: {
										type: 'string',
										description:
											'Identifier of the drive that contains the item. Only when the item is in a drive.',
									},
									driveType: {
										type: 'string',
										description:
											'Type of drive. Only when the item is in a drive.',
										default: '',
										enum: ['', 'personal', 'business', 'documentLibrary'],
									},
									id: {
										type: 'string',
										description: 'Identifier of the parent item.',
									},
									name: {
										type: 'string',
										description: 'Name of the item being referenced.',
									},
									path: {
										type: 'string',
										description:
											'Percent-encoded path that can be used to navigate to the item.',
									},
									shareId: {
										type: 'string',
										description:
											'Identifier of a shared resource that can be accessed via the Shares API.',
									},
									sharepointIds: {
										type: 'object',
										description:
											'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
										properties: {
											listId: {
												type: 'string',
												description: "GUID of the item's list.",
											},
											listItemId: {
												type: 'string',
												description:
													'Integer identifier of the item within its list, returned as a string.',
											},
											listItemUniqueId: {
												type: 'string',
												description:
													'GUID of the item within OneDrive for Business or the SharePoint site.',
											},
											siteId: {
												type: 'string',
												description: "GUID of the item's site collection.",
											},
											siteUrl: {
												type: 'string',
												description:
													'SharePoint URL of the site that contains the item.',
											},
											tenantId: {
												type: 'string',
												description: 'GUID of the tenant.',
											},
											webId: {
												type: 'string',
												description: "GUID of the item's site (SPWeb).",
											},
										},
										required: [],
									},
									siteId: {
										type: 'string',
										description:
											'Composite site id of the parent site. Not populated for OneDrive personal.',
									},
								},
								required: [],
							},
							publishingState: {
								type: 'object',
								description:
									'Publishing status and the version visible to the caller.',
								properties: {
									level: {
										type: 'string',
										description: 'Publication state.',
										default: '',
										enum: ['', 'published', 'checkout', 'draft'],
									},
									versionId: {
										type: 'string',
										description:
											'Identifier of the version visible to the caller.',
									},
									checkedOutBy: {
										type: 'object',
										description: 'The user who checked out the file.',
										properties: {
											application: {
												type: 'object',
												description:
													'The application associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											applicationInstance: {
												type: 'object',
												description:
													'The application instance associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											conversation: {
												type: 'object',
												description:
													'The conversation associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											conversationIdentityType: {
												type: 'object',
												description:
													'The conversation identity type associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											device: {
												type: 'object',
												description:
													'The device associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											encrypted: {
												type: 'object',
												description:
													'The encrypted associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											onPremises: {
												type: 'object',
												description:
													'The on premises associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											guest: {
												type: 'object',
												description:
													'The guest associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											phone: {
												type: 'object',
												description:
													'The phone associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											user: {
												type: 'object',
												description:
													'The user associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
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
							reactions: {
								description:
									'Reaction counts for the page. See [reactionsFacet](https://learn.microsoft.com/en-us/graph/api/resources/reactionsfacet?view=graph-rest-1.0).',
							},
							webUrl: {
								type: 'string',
								description: 'URL that opens the page in the browser. Read-only.',
							},
							createdByUser: {
								description: 'User who created the page. Returned when expanded.',
							},
							lastModifiedByUser: {
								description:
									'User who last modified the page. Returned when expanded.',
							},
							webParts: {
								description: 'Web parts on the page. Returned when expanded.',
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'URL of the next page. Absent when this page is the last.',
				},
				'@odata.context': {
					type: 'string',
					description: 'OData context URL for the collection.',
				},
				'@odata.count': {
					type: 'number',
					description: 'Total number of pages. Present when count is true.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'publishAPage',
		label: 'Publish a page',
		description: 'Publishes the latest version of a page.',
		context:
			'---\nname: publishAPage\ndescription: Publishes the latest version of a page.\n---\n\nPublishes a page with `POST /sites/{site-id}/pages/{page-id}/microsoft.graph.sitePage/publish`.\n\nSuccess is `204 No Content`. The response body is empty.\n\nIf the page is checked out to the caller, Graph checks it in and then publishes it. If a page approval flow is turned on for the page library, the page stays unpublished until that flow finishes.\n\nAPI reference: [sitePage: publish](https://learn.microsoft.com/en-us/graph/api/sitepage-publish?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.ReadWrite.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				page: { type: 'string', description: 'Identifier of the site page to publish.' },
			},
			required: ['site', 'page'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'searchDriveItems',
		label: 'Search drive items',
		description: 'Searches for files and folders under a drive item.',
		context:
			"---\nname: searchDriveItems\ndescription: Searches for files and folders under a drive item.\n---\n\nSearches with `GET /sites/{site-id}/drives/{drive-id}/items/{item-id}/search(q='{query}')`.\n\n`GET /drives/{drive-id}/search(q=...)` is a different call: it can return items shared with the user, outside this drive. Use Arbitrary call for that URL (with `https://graph.microsoft.com/` stripped from `url`).\n\nWhen `@odata.nextLink` is present, keep following `skipToken` until `@odata.nextLink` is absent; pages can be empty or short.\n\nAPI reference: [Search for files](https://learn.microsoft.com/en-us/graph/api/driveitem-search?view=graph-rest-1.0).\n",
		accounts: { azure: { scope: ['Files.Read.All', 'Sites.Read.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				drive: {
					type: 'string',
					description:
						'Identifier of the document library drive. Expand `drive` or `drives` on Get a site to discover it.',
				},
				itemId: {
					type: 'string',
					description:
						'Drive item id to search under. Use `root` to search the whole drive.',
				},
				query: {
					type: 'string',
					description:
						'Text matched against file name, metadata, and content. Sent as the `q` argument of `search`.',
				},
				select: {
					type: 'string',
					description: 'Comma-separated properties to return. Sent as `$select`.',
				},
				expand: {
					type: 'string',
					description:
						'Navigation properties to expand, comma-separated, such as `thumbnails`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.',
				},
				orderby: {
					type: 'string',
					description: 'OData `$orderby` expression. Sent as `$orderby`.',
				},
				top: { type: 'number', description: 'Page size. Sent as `$top`.' },
				skipToken: {
					type: 'string',
					description: 'Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.',
				},
			},
			required: ['site', 'drive', 'itemId', 'query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'Drive items that match the query.',
					items: {
						type: 'object',
						description: 'One drive item.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'Version token Graph attaches to this resource.',
							},
							audio: {
								description:
									'Audio metadata. Only on OneDrive personal. Read-only. See [audio](https://learn.microsoft.com/en-us/graph/api/resources/audio?view=graph-rest-1.0).',
							},
							bundle: {
								description:
									'Bundle metadata. Read-only. See [bundle](https://learn.microsoft.com/en-us/graph/api/resources/bundle?view=graph-rest-1.0).',
							},
							createdBy: {
								type: 'object',
								description: 'Identity that created the item. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							createdDateTime: {
								type: 'string',
								description: 'When the item was created on the service. Read-only.',
							},
							cTag: {
								type: 'string',
								description:
									'ETag for the content. Not returned for folders in OneDrive for Business or SharePoint. Read-only.',
							},
							deleted: {
								description:
									'Deleted state. Read-only. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).',
							},
							description: {
								type: 'string',
								description: 'User-visible description. Only on OneDrive personal.',
							},
							eTag: {
								type: 'string',
								description: 'ETag for metadata and content. Read-only.',
							},
							file: {
								type: 'object',
								description: 'Present when the item is a file. Read-only.',
								properties: {
									hashes: {
										description:
											'Hashes of the file content. See [hashes](https://learn.microsoft.com/en-us/graph/api/resources/hashes?view=graph-rest-1.0).',
									},
									mimeType: {
										type: 'string',
										description: 'MIME type chosen by the service. Read-only.',
									},
								},
								required: [],
							},
							fileSystemInfo: {
								type: 'object',
								description:
									'Created and modified times as reported by the client. These differ from the service timestamps on the item.',
								properties: {
									createdDateTime: {
										type: 'string',
										description:
											'UTC date and time the file was created on the client.',
									},
									lastAccessedDateTime: {
										type: 'string',
										description:
											'UTC date and time the file was last accessed. Not returned for SharePoint or OneDrive for Business.',
									},
									lastModifiedDateTime: {
										type: 'string',
										description:
											'UTC date and time the file was last modified on the client.',
									},
								},
								required: [],
							},
							folder: {
								type: 'object',
								description: 'Present when the item is a folder. Read-only.',
								properties: {
									childCount: {
										type: 'number',
										description: 'Number of immediate children.',
									},
									view: {
										description:
											'Recommended folder view. See [folderView](https://learn.microsoft.com/en-us/graph/api/resources/folderview?view=graph-rest-1.0).',
									},
								},
								required: [],
							},
							id: {
								type: 'string',
								description:
									'Unique identifier of the item within the drive. Read-only.',
							},
							image: {
								description:
									'Image metadata. Read-only. See [image](https://learn.microsoft.com/en-us/graph/api/resources/image?view=graph-rest-1.0).',
							},
							lastModifiedBy: {
								type: 'object',
								description: 'Identity that last modified the item. Read-only.',
								properties: {
									application: {
										type: 'object',
										description: 'The application associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									applicationInstance: {
										type: 'object',
										description:
											'The application instance associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversation: {
										type: 'object',
										description:
											'The conversation associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									conversationIdentityType: {
										type: 'object',
										description:
											'The conversation identity type associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									device: {
										type: 'object',
										description: 'The device associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									encrypted: {
										type: 'object',
										description: 'The encrypted associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									onPremises: {
										type: 'object',
										description: 'The on premises associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									guest: {
										type: 'object',
										description: 'The guest associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									phone: {
										type: 'object',
										description: 'The phone associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
									user: {
										type: 'object',
										description: 'The user associated with this action.',
										properties: {
											displayName: {
												type: 'string',
												description:
													'The display name of the identity. For drive items this can lag a rename.',
											},
											id: {
												type: 'string',
												description: 'Unique identifier of the identity.',
											},
											email: {
												type: 'string',
												description:
													'Email address of the identity, when the service returns one.',
											},
											tenantId: {
												type: 'string',
												description:
													'Unique identifier of the tenant. Optional.',
											},
											thumbnails: {
												description:
													'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							lastModifiedDateTime: {
								type: 'string',
								description:
									'When the item was last modified on the service. Read-only.',
							},
							location: {
								description:
									'Location metadata. Read-only. See [location](https://learn.microsoft.com/en-us/graph/api/resources/geocoordinates?view=graph-rest-1.0).',
							},
							malware: {
								description:
									'Present when the item was detected as malware. Read-only. See [malware](https://learn.microsoft.com/en-us/graph/api/resources/malware?view=graph-rest-1.0).',
							},
							name: { type: 'string', description: 'File or folder name.' },
							package: {
								description:
									'Present when the item is a package. Read-only. See [package](https://learn.microsoft.com/en-us/graph/api/resources/package?view=graph-rest-1.0).',
							},
							parentReference: {
								type: 'object',
								description: 'Address of the parent drive item or list item.',
								properties: {
									driveId: {
										type: 'string',
										description:
											'Identifier of the drive that contains the item. Only when the item is in a drive.',
									},
									driveType: {
										type: 'string',
										description:
											'Type of drive. Only when the item is in a drive.',
										default: '',
										enum: ['', 'personal', 'business', 'documentLibrary'],
									},
									id: {
										type: 'string',
										description: 'Identifier of the parent item.',
									},
									name: {
										type: 'string',
										description: 'Name of the item being referenced.',
									},
									path: {
										type: 'string',
										description:
											'Percent-encoded path that can be used to navigate to the item.',
									},
									shareId: {
										type: 'string',
										description:
											'Identifier of a shared resource that can be accessed via the Shares API.',
									},
									sharepointIds: {
										type: 'object',
										description:
											'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
										properties: {
											listId: {
												type: 'string',
												description: "GUID of the item's list.",
											},
											listItemId: {
												type: 'string',
												description:
													'Integer identifier of the item within its list, returned as a string.',
											},
											listItemUniqueId: {
												type: 'string',
												description:
													'GUID of the item within OneDrive for Business or the SharePoint site.',
											},
											siteId: {
												type: 'string',
												description: "GUID of the item's site collection.",
											},
											siteUrl: {
												type: 'string',
												description:
													'SharePoint URL of the site that contains the item.',
											},
											tenantId: {
												type: 'string',
												description: 'GUID of the tenant.',
											},
											webId: {
												type: 'string',
												description: "GUID of the item's site (SPWeb).",
											},
										},
										required: [],
									},
									siteId: {
										type: 'string',
										description:
											'Composite site id of the parent site. Not populated for OneDrive personal.',
									},
								},
								required: [],
							},
							pendingOperations: {
								description:
									'Operations that may still change this item. Read-only. See [pending operations](https://learn.microsoft.com/en-us/graph/api/resources/pendingoperations?view=graph-rest-1.0).',
							},
							photo: {
								description:
									'Photo metadata. Read-only. See [photo](https://learn.microsoft.com/en-us/graph/api/resources/photo?view=graph-rest-1.0).',
							},
							publication: {
								type: 'object',
								description:
									'Published or checked-out state. Not returned unless requested.',
								properties: {
									level: {
										type: 'string',
										description: 'Publication state.',
										default: '',
										enum: ['', 'published', 'checkout'],
									},
									versionId: {
										type: 'string',
										description:
											'Identifier of the version visible to the caller.',
									},
									checkedOutBy: {
										type: 'object',
										description: 'The user who checked out the file.',
										properties: {
											application: {
												type: 'object',
												description:
													'The application associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											applicationInstance: {
												type: 'object',
												description:
													'The application instance associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											conversation: {
												type: 'object',
												description:
													'The conversation associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											conversationIdentityType: {
												type: 'object',
												description:
													'The conversation identity type associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											device: {
												type: 'object',
												description:
													'The device associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											encrypted: {
												type: 'object',
												description:
													'The encrypted associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											onPremises: {
												type: 'object',
												description:
													'The on premises associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											guest: {
												type: 'object',
												description:
													'The guest associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											phone: {
												type: 'object',
												description:
													'The phone associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
													},
												},
												required: [],
											},
											user: {
												type: 'object',
												description:
													'The user associated with this action.',
												properties: {
													displayName: {
														type: 'string',
														description:
															'The display name of the identity. For drive items this can lag a rename.',
													},
													id: {
														type: 'string',
														description:
															'Unique identifier of the identity.',
													},
													email: {
														type: 'string',
														description:
															'Email address of the identity, when the service returns one.',
													},
													tenantId: {
														type: 'string',
														description:
															'Unique identifier of the tenant. Optional.',
													},
													thumbnails: {
														description:
															'Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.',
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
							remoteItem: {
								description:
									'Present when the item lives in another drive. Read-only. See [remote item](https://learn.microsoft.com/en-us/graph/api/resources/remoteitem?view=graph-rest-1.0).',
							},
							root: {
								description: 'Present when this item is the root of the drive.',
							},
							searchResult: {
								type: 'object',
								description: 'Present on items returned by search. Read-only.',
								properties: {
									onClickTelemetryUrl: {
										type: 'string',
										description: 'Telemetry URL returned with a search hit.',
									},
								},
								required: [],
							},
							shared: {
								description:
									'Sharing state. Read-only. See [shared](https://learn.microsoft.com/en-us/graph/api/resources/shared?view=graph-rest-1.0).',
							},
							sharepointIds: {
								type: 'object',
								description:
									'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
								properties: {
									listId: {
										type: 'string',
										description: "GUID of the item's list.",
									},
									listItemId: {
										type: 'string',
										description:
											'Integer identifier of the item within its list, returned as a string.',
									},
									listItemUniqueId: {
										type: 'string',
										description:
											'GUID of the item within OneDrive for Business or the SharePoint site.',
									},
									siteId: {
										type: 'string',
										description: "GUID of the item's site collection.",
									},
									siteUrl: {
										type: 'string',
										description:
											'SharePoint URL of the site that contains the item.',
									},
									tenantId: {
										type: 'string',
										description: 'GUID of the tenant.',
									},
									webId: {
										type: 'string',
										description: "GUID of the item's site (SPWeb).",
									},
								},
								required: [],
							},
							size: { type: 'number', description: 'Size in bytes. Read-only.' },
							specialFolder: {
								description:
									'Present when the item is also a special folder. Read-only. See [special folder](https://learn.microsoft.com/en-us/graph/api/resources/specialfolder?view=graph-rest-1.0).',
							},
							video: {
								description:
									'Video metadata. Read-only. See [video](https://learn.microsoft.com/en-us/graph/api/resources/video?view=graph-rest-1.0).',
							},
							webDavUrl: { type: 'string', description: 'WebDAV URL for the item.' },
							webUrl: {
								type: 'string',
								description: 'URL that opens the item in the browser. Read-only.',
							},
							'@microsoft.graph.downloadUrl': {
								type: 'string',
								description:
									'Short-lived URL that downloads the file without an Authorization header. Read-only. Expires in about an hour.',
							},
							activities: {
								description: 'Recent activities. Returned when expanded.',
							},
							analytics: { description: 'View analytics. Returned when expanded.' },
							children: {
								type: 'array',
								description:
									'Immediate children. Only folders have children. Returned when expanded; each entry is a driveItem.',
								items: { description: 'A child drive item.' },
							},
							createdByUser: {
								description: 'User who created the item. Returned when expanded.',
							},
							lastModifiedByUser: {
								description:
									'User who last modified the item. Returned when expanded.',
							},
							listItem: {
								description:
									'The document-library list item for this drive item. Returned when expanded.',
							},
							permissions: {
								description: 'Permissions on the item. Returned when expanded.',
							},
							retentionLabel: {
								description:
									'Retention label settings. See [itemRetentionLabel](https://learn.microsoft.com/en-us/graph/api/resources/itemretentionlabel?view=graph-rest-1.0).',
							},
							subscriptions: {
								description:
									'Subscriptions. Only supported on the root of a drive.',
							},
							'thumbnails@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `thumbnails` when that property is expanded.',
							},
							commentSettings: {
								type: 'object',
								description:
									'Comment settings Graph returns on a SharePoint drive item. The driveItem reference page does not list this property.',
								properties: {
									commentingDisabled: {
										type: 'object',
										description: 'Whether commenting is disabled on this item.',
										properties: {
											isDisabled: {
												type: 'boolean',
												description: 'True when commenting is disabled.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							thumbnails: { description: 'Thumbnail sets. Returned when expanded.' },
							versions: {
								description:
									'Previous versions of the file. Returned when expanded.',
							},
							workbook: { description: 'Workbook API for Excel files.' },
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'URL of the next page. Absent when this page is the last.',
				},
				'@odata.context': {
					type: 'string',
					description: 'OData context URL for the collection.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'searchSites',
		label: 'Search sites',
		description: 'Searches for SharePoint sites in the tenant.',
		context:
			'---\nname: searchSites\ndescription: Searches for SharePoint sites in the tenant.\n---\n\nSearches the tenant with `GET /sites?search={query}`. The query parameter is `search`, not `$search`.\n\nThis endpoint requires the search text. Pass `top` to set the page size.\n\nWhen `@odata.nextLink` is present, call this endpoint again with `skipToken` taken from that URL (`$skiptoken`). Keep following `skipToken` until `@odata.nextLink` is absent; pages can be empty or short.\n\nAPI reference: [Search for sites](https://learn.microsoft.com/en-us/graph/api/site-search?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.Read.All'] } },
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
				search: {
					type: 'string',
					description:
						'Free-text keywords matched across site properties. Sent as `search`. Use `*` to match every site.',
				},
				top: { type: 'number', description: 'Page size. Sent as `$top`.' },
				skipToken: {
					type: 'string',
					description: 'Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.',
				},
			},
			required: ['search'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'Sites that match the search.',
					items: {
						type: 'object',
						description: 'One site.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'Version token Graph attaches to this resource.',
							},
							id: {
								type: 'string',
								description:
									'Composite site id: hostname, site-collection GUID, and site GUID.',
							},
							isPersonalSite: {
								type: 'boolean',
								description: 'Whether the site is a personal site. Read-only.',
							},
							root: {
								description: 'Present on the root site of the site collection.',
							},
							sharepointIds: {
								type: 'object',
								description:
									'Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.',
								properties: {
									listId: {
										type: 'string',
										description: "GUID of the item's list.",
									},
									listItemId: {
										type: 'string',
										description:
											'Integer identifier of the item within its list, returned as a string.',
									},
									listItemUniqueId: {
										type: 'string',
										description:
											'GUID of the item within OneDrive for Business or the SharePoint site.',
									},
									siteId: {
										type: 'string',
										description: "GUID of the item's site collection.",
									},
									siteUrl: {
										type: 'string',
										description:
											'SharePoint URL of the site that contains the item.',
									},
									tenantId: {
										type: 'string',
										description: 'GUID of the tenant.',
									},
									webId: {
										type: 'string',
										description: "GUID of the item's site (SPWeb).",
									},
								},
								required: [],
							},
							siteCollection: {
								type: 'object',
								description:
									'Present when this site is the root of a site collection.',
								properties: {
									dataLocationCode: {
										type: 'string',
										description:
											'Geographic region code. Only for multi-geo tenants. Read-only.',
									},
									hostname: {
										type: 'string',
										description: 'Hostname of the site collection. Read-only.',
									},
									root: {
										description: 'Present when this is a root site collection.',
									},
									archivalDetails: {
										type: 'object',
										description: 'Archive state of the site collection.',
										properties: {
											archiveStatus: {
												type: 'string',
												description:
													'Whether the site collection is archived or reactivating.',
												default: '',
												enum: [
													'',
													'recentlyArchived',
													'fullyArchived',
													'reactivating',
													'unknownFutureValue',
												],
											},
										},
										required: [],
									},
								},
								required: [],
							},
							displayName: {
								type: 'string',
								description: 'Full title of the site. Read-only.',
							},
							name: { type: 'string', description: 'Name or title of the site.' },
							createdDateTime: {
								type: 'string',
								description: 'When the site was created. Read-only.',
							},
							description: {
								type: 'string',
								description: 'Descriptive text for the site.',
							},
							eTag: { type: 'string', description: 'ETag for the site. Read-only.' },
							lastModifiedDateTime: {
								type: 'string',
								description: 'When the site was last modified. Read-only.',
							},
							webUrl: {
								type: 'string',
								description: 'URL that opens the site in the browser. Read-only.',
							},
							analytics: { description: 'View analytics. Returned when expanded.' },
							'columns@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `columns` when that property is expanded.',
							},
							columns: {
								type: 'array',
								description: 'Site column definitions. Returned when expanded.',
								items: {
									type: 'object',
									description: 'A site column.',
									properties: {
										boolean: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).',
										},
										calculated: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).',
										},
										choice: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).',
										},
										contentApprovalStatus: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).',
										},
										currency: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).',
										},
										dateTime: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).',
										},
										geolocation: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).',
										},
										hyperlinkOrPicture: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).',
										},
										lookup: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).',
										},
										number: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).',
										},
										personOrGroup: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).',
										},
										term: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).',
										},
										text: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).',
										},
										thumbnail: {
											description:
												'Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).',
										},
										columnGroup: {
											type: 'string',
											description:
												'For site columns, the group this column belongs to.',
										},
										defaultValue: {
											description:
												'Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).',
										},
										description: {
											type: 'string',
											description: 'User-facing description of the column.',
										},
										displayName: {
											type: 'string',
											description: 'User-facing name of the column.',
										},
										enforceUniqueValues: {
											type: 'boolean',
											description:
												'When true, no two list items may have the same value for this column.',
										},
										hidden: {
											type: 'boolean',
											description:
												'Whether the column is hidden in the SharePoint UI.',
										},
										indexed: {
											type: 'boolean',
											description:
												'Whether the column can be used for sorting and searching.',
										},
										name: {
											type: 'string',
											description:
												"API-facing column name, used as the key on a list item's fields.",
										},
										propagateChanges: {
											type: 'boolean',
											description:
												'When true, changes to this column propagate to lists that implement it.',
										},
										readOnly: {
											type: 'boolean',
											description:
												'Whether values in this column can be modified.',
										},
										required: {
											type: 'boolean',
											description:
												'Whether the column value is mandatory on items.',
										},
										validation: {
											description:
												'Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0).',
										},
										id: {
											type: 'string',
											description: 'Unique identifier of the column.',
										},
										isDeletable: {
											type: 'boolean',
											description:
												'Whether this column can be deleted. Not returned for every list-column response.',
										},
										isReorderable: {
											type: 'boolean',
											description:
												'Whether values in the column can be reordered. Read-only.',
										},
										isSealed: {
											type: 'boolean',
											description: 'Whether the column can be changed.',
										},
										sourceContentType: {
											type: 'object',
											description: 'SharePoint content type of the item.',
											properties: {
												id: {
													type: 'string',
													description: 'The content type id.',
												},
												name: {
													type: 'string',
													description: 'The content type name.',
												},
											},
											required: [],
										},
										type: {
											type: 'string',
											description:
												'Read-only column type for site columns. See [columnTypes](https://learn.microsoft.com/en-us/graph/api/resources/columntypes?view=graph-rest-1.0).',
										},
										sourceColumn: {
											description:
												'Source column when this column is inherited from a content type.',
										},
									},
									required: [],
								},
							},
							contentTypes: {
								description:
									'Content types defined for the site. Returned when expanded.',
							},
							'drive@odata.context': {
								type: 'string',
								description:
									'Metadata URL Graph attaches beside `drive` when that property is expanded.',
							},
							drive: {
								description:
									'Default document library for the site. Returned when expanded.',
							},
							drives: {
								type: 'array',
								description:
									'Document libraries under the site. Returned when expanded.',
								items: { description: 'A drive resource.' },
							},
							items: {
								description:
									'Address of items in the site. This collection cannot be enumerated.',
							},
							lists: {
								description:
									'Lists under the site. Use List lists to enumerate them.',
							},
							onenote: { description: 'OneNote notebook for the site.' },
							operations: { description: 'Long-running operations on the site.' },
							pages: {
								description: 'Pages in the site. Use List pages to enumerate them.',
							},
							permissions: { description: 'Permissions on the site.' },
							sites: {
								type: 'array',
								description: 'Subsites. Returned when expanded.',
								items: { description: 'A subsite.' },
							},
							termStore: { description: 'Default term store under the site.' },
							termStores: { description: 'Term stores under the site.' },
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'URL of the next page. Absent when this page is the last.',
				},
				'@odata.context': {
					type: 'string',
					description: 'OData context URL for the collection.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-sharepoint',
		appVersion: 1,
		endpointName: 'updateAnItem',
		label: 'Update an item',
		description: 'Updates column values on a list item.',
		context:
			'---\nname: updateAnItem\ndescription: Updates column values on a list item.\n---\n\nUpdates column values with `PATCH /sites/{site-id}/lists/{list-id}/items/{item-id}/fields`.\n\n`list` accepts the list GUID (`id`) or display name; when a list\'s display name contains `?`, `/`, `#`, or `%` (or is `.` or `..`), pass its GUID instead. `item` must be the item\'s integer `id` (never `.`, `..`, or a path segment).\n\n`fields` is an array of `{"key", "value"}` pairs (for example, `[{"key": "Title", "value": "Updated title"}]`) converted into the [fieldValueSet](https://learn.microsoft.com/en-us/graph/api/resources/fieldvalueset?view=graph-rest-1.0) JSON body whose keys are column internal names. Columns you do not include in `fields` stay unchanged; consider calling `getAnItem` with `expand: "fields"` first when inspecting existing values.\n\nEvery entry in `fields` must include `value`. Sending `value: null` (or `""` on a text column) clears that column, and omitting `value` on an entry sends `null` and clears the column as well. Numbers (`0` included) and booleans (`false` included) stay typed.\n\n### Column value shapes\n\n- **Text / single choice**: string, e.g. `{"key": "Title", "value": "Updated title"}`.\n- **Number / currency**: number, e.g. `{"key": "Priority", "value": 0}`.\n- **Yes/No (boolean)**: boolean, e.g. `{"key": "Approved", "value": false}`.\n- **Date and time**: ISO 8601 UTC string, e.g. `{"key": "DueDate", "value": "2026-10-23T07:00:00Z"}` (`dateOnly` columns are stored at the site\'s time-zone midnight in UTC).\n- **Lookup / Person or Group (single)**: set `{ColumnInternalName}LookupId` to the target item or user list ID, e.g. `{"key": "ProjectLookupId", "value": "5"}`.\n- **Multi-choice**: requires the OData type annotation entry `{"key": "{ColumnInternalName}@odata.type", "value": "Collection(Edm.String)"}` alongside the array `{"key": "{ColumnInternalName}", "value": ["Option A", "Option B"]}` (note: SharePoint Graph v1.0 may reject multi-choice updates on some column configurations).\n\nThe response is that same field value set, `200 OK`. A generic list returns the system keys in the output schema (`id`, `Title`, `ContentType`, `Modified`, `Created`, the lookup ids, and the compliance fields). A column that exists only on that list is returned as one more key, named with the column internal name.\n\nGraph also documents `PATCH` on the list item itself. This endpoint updates column values.\n\nAPI reference: [Update listItem](https://learn.microsoft.com/en-us/graph/api/listitem-update?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Sites.ReadWrite.All'] } },
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
				site: {
					type: 'string',
					description:
						'Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).',
				},
				list: {
					type: 'string',
					description:
						'GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#%]+$`,
				},
				item: {
					type: 'string',
					description:
						'Integer identifier (`id`) of the list item within the list. Do not pass `.`, `..`, or path separators (`/`).',
					pattern: String.raw`^(?!\.{1,2}$)[^/?#]+$`,
				},
				fields: {
					type: 'array',
					description:
						'Column values to change as an array of `{key, value}` pairs (for example, `[{"key": "Title", "value": "Updated title"}]`). Sent as the `fieldValueSet` body. Columns you omit are left unchanged.',
					items: {
						type: 'object',
						description: 'One column value.',
						properties: {
							key: {
								type: 'string',
								description:
									'Column internal name, such as `Title` (or `{Name}LookupId` for single lookup/person columns).',
							},
							value: {
								description:
									'Column value matching the column type (string, number, boolean, or ISO 8601 date string). Always provide `value`; sending `null` or `""` (or omitting `value`) clears the column.',
							},
						},
						required: ['key'],
					},
				},
			},
			required: ['site', 'list', 'item', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'Metadata URL Graph attaches to the field value set.',
				},
				'@odata.etag': {
					type: 'string',
					description: 'Version token Graph attaches to the field value set.',
				},
				id: { type: 'string', description: 'List item id.' },
				ContentType: {
					type: 'string',
					description: 'Content type name of the item, such as Item.',
				},
				Title: {
					type: 'string',
					description:
						'Value of the Title column. Present on a generic list. Other columns come back as extra keys with the column internal name.',
				},
				Modified: { type: 'string', description: 'When the item was last modified.' },
				Created: { type: 'string', description: 'When the item was created.' },
				AuthorLookupId: {
					type: 'string',
					description:
						'Lookup id of the user who created the item. Graph returns this string instead of the Author lookup object.',
				},
				EditorLookupId: {
					type: 'string',
					description: 'Lookup id of the user who last changed the item.',
				},
				AppAuthorLookupId: {
					type: 'string',
					description: 'Lookup id of the app that created the item.',
				},
				AppEditorLookupId: {
					type: 'string',
					description: 'Lookup id of the app that last changed the item.',
				},
				_UIVersionString: {
					type: 'string',
					description: 'SharePoint UI version of the item, such as 2.0.',
				},
				Attachments: { type: 'boolean', description: 'Whether the item has attachments.' },
				Edit: {
					type: 'string',
					description: 'Edit link markup SharePoint returns for the item. Often empty.',
				},
				LinkTitle: {
					type: 'string',
					description:
						'Title rendered as a link. Follows the Title column on a generic list.',
				},
				LinkTitleNoMenu: {
					type: 'string',
					description:
						'Title link without the menu. Follows the Title column on a generic list.',
				},
				ItemChildCount: {
					type: 'string',
					description: 'Number of child items, returned as a string.',
				},
				FolderChildCount: {
					type: 'string',
					description: 'Number of child folders, returned as a string.',
				},
				_ComplianceFlags: {
					type: 'string',
					description: 'SharePoint compliance flags. Empty when none are set.',
				},
				_ComplianceTag: {
					type: 'string',
					description: 'SharePoint compliance tag. Empty when none is set.',
				},
				_ComplianceTagWrittenTime: {
					type: 'string',
					description: 'When the compliance tag was written. Empty when no tag is set.',
				},
				_ComplianceTagUserId: {
					type: 'string',
					description: 'User id that wrote the compliance tag. Empty when no tag is set.',
				},
			},
			required: [],
		},
	},
];
