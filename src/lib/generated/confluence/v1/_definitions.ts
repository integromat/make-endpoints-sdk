// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Confluence Cloud REST API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.atlassian.com/ex/confluence/{cloudId}/wiki`, where `{cloudId}` is\nresolved automatically from the connection. Provide the remaining path in the URL parameter\n(e.g. `/api/v2/spaces`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Confluence Cloud REST API v2 reference](https://developer.atlassian.com/cloud/confluence/rest/v2/intro/) for available\nendpoints, required parameters, and response schemas.',
		accounts: { confluence: { scope: [] } },
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
						'Enter a path relative to `https://api.atlassian.com/ex/confluence/{cloudId}/wiki`. For example, `/api/v2/spaces`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"You don't have to add authorization headers; we already did that for you.",
					items: {
						type: 'object',
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
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'createBlogPost',
		label: 'Create a blog post',
		description: 'Creates a new blog post in a space, as a draft or published.',
		context:
			'---\nname: createBlogPost\ndescription: Creates a new blog post in a space, as a draft or published.\n---\n\nCreates a blog post. Resolve `spaceId` with `listSpaces` first - it is the numeric space id, not the\nspace key.\n\nCreating with `status: draft` produces version 1 and does not publish. Publish later with\n`updateBlogPost` using `status: current`.\n\nThe response is the created blog post, including its new `id` and `version.number`.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Body formats\n\n`representation` names the format of the `content` you send:\n\n- `atlas_doc_format` - JSON ADF, the default\n- `storage` - Confluence Storage Format (XHTML-like), best for programmatic content\n- `wiki` - Confluence Wiki Markup, accepted on write only\n\nOn read, the body is **not returned at all** unless `bodyFormat` is passed.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['write:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spaceId: {
					type: 'string',
					description:
						'Numeric ID of the space to create in. Use `listSpaces` to find it. Note this is the numeric id, not the space key.',
				},
				status: {
					type: 'string',
					description:
						'Create the blog post as published (`current`) or as a draft (`draft`).',
					enum: ['current', 'draft'],
				},
				representation: {
					type: 'string',
					description:
						'Format of the `content` value you are sending. `atlas_doc_format` is JSON ADF (https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/); `storage` is Confluence Storage Format, XHTML-like (https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html); `wiki` is Confluence Wiki Markup and is accepted on write only.',
					enum: ['atlas_doc_format', 'storage', 'wiki'],
				},
				content: {
					type: 'string',
					description:
						'The body content, encoded in the format named by `representation`.',
				},
				private: {
					type: 'boolean',
					description:
						'When true, only the creating user can view or edit the new blog post.',
					default: false,
					'x-advanced': true,
				},
			},
			required: ['spaceId', 'status', 'title', 'representation', 'content'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				authorId: { type: 'string' },
				id: { type: 'string' },
				version: {
					type: 'object',
					properties: {
						number: { type: 'number' },
						message: { type: 'string' },
						minorEdit: { type: 'boolean' },
						authorId: { type: 'string' },
						createdAt: { type: 'string' },
					},
					required: [],
				},
				status: { type: 'string' },
				body: {
					type: 'object',
					properties: {
						storage: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						atlas_doc_format: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						view: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
					},
					required: [],
				},
				spaceId: { type: 'string' },
				createdAt: { type: 'string' },
				_links: {
					type: 'object',
					properties: {
						editui: { type: 'string' },
						webui: { type: 'string' },
						tinyui: { type: 'string' },
						base: { type: 'string' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'createPage',
		label: 'Create a page',
		description: 'Creates a new page in a space, as a draft or published.',
		context:
			'---\nname: createPage\ndescription: Creates a new page in a space, as a draft or published.\n---\n\nCreates a page. Resolve `spaceId` with `listSpaces` first - it is the numeric space id, not the\nspace key.\n\nCreating with `status: draft` produces version 1 and does not publish. Publish later with\n`updatePage` using `status: current`.\n\nThe response is the created page, including its new `id` and `version.number`.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Body formats\n\n`representation` names the format of the `content` you send:\n\n- `atlas_doc_format` - JSON ADF, the default\n- `storage` - Confluence Storage Format (XHTML-like), best for programmatic content\n- `wiki` - Confluence Wiki Markup, accepted on write only\n\nOn read, the body is **not returned at all** unless `bodyFormat` is passed.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['write:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spaceId: {
					type: 'string',
					description:
						'Numeric ID of the space to create in. Use `listSpaces` to find it. Note this is the numeric id, not the space key.',
				},
				status: {
					type: 'string',
					description:
						'Create the page as published (`current`) or as a draft (`draft`).',
					enum: ['current', 'draft'],
				},
				representation: {
					type: 'string',
					description:
						'Format of the `content` value you are sending. `atlas_doc_format` is JSON ADF (https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/); `storage` is Confluence Storage Format, XHTML-like (https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html); `wiki` is Confluence Wiki Markup and is accepted on write only.',
					enum: ['atlas_doc_format', 'storage', 'wiki'],
				},
				content: {
					type: 'string',
					description:
						'The body content, encoded in the format named by `representation`.',
				},
				parentId: {
					type: 'string',
					description:
						'Numeric ID of the parent page. Omit to create at the space root. Blog posts cannot be nested; pages can.',
					'x-advanced': true,
				},
				private: {
					type: 'boolean',
					description: 'When true, only the creating user can view or edit the new page.',
					default: false,
					'x-advanced': true,
				},
				embedded: {
					type: 'boolean',
					description: 'Tag the content as embedded, creating it in NCS.',
					default: false,
					'x-advanced': true,
				},
			},
			required: ['spaceId', 'status', 'title', 'representation', 'content'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string' },
				status: { type: 'string' },
				spaceId: { type: 'string' },
				parentId: { type: 'string' },
				parentType: { type: 'string' },
				position: { type: 'number' },
				authorId: { type: 'string' },
				createdAt: { type: 'string' },
				version: {
					type: 'object',
					properties: {
						createdAt: { type: 'string' },
						message: { type: 'string' },
						number: { type: 'number' },
						minorEdit: { type: 'boolean' },
						authorId: { type: 'string' },
					},
					required: [],
				},
				body: {
					type: 'object',
					properties: {
						storage: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						atlas_doc_format: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
					},
					required: [],
				},
				_links: {
					type: 'object',
					properties: {
						webui: { type: 'string' },
						editui: { type: 'string' },
						tinyui: { type: 'string' },
						base: { type: 'string' },
					},
					required: [],
				},
				ownerId: { type: 'string' },
				lastOwnerId: { type: 'string' },
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'deleteBlogPost',
		label: 'Delete a blog post',
		description: 'Deletes a blog post by its numeric ID. Destructive.',
		context:
			'---\nname: deleteBlogPost\ndescription: Deletes a blog post by its numeric ID. Destructive.\n---\n\nDeletes a blog post. **Destructive.** Confirm the target before calling: resolve the ID with\n`searchBlogPosts` and read it back with `getBlogPost` if there is any\ndoubt, because there is no undo through this endpoint.\n\nBy default, a published blog post is moved to the **trash** and can be restored from the\nConfluence UI. Passing `purge: true` permanently destroys an already-trashed blog post and\n**cannot be undone**.\n\n**Drafts are different:** deleting a draft with `draft: true` permanently removes it immediately.\nDrafts are not moved to the trash and cannot subsequently be restored or purged.\n\nConfluence returns HTTP 204 with an empty body, so the `deleted` output is synthesized by this\nendpoint rather than read from the response. A failure surfaces as an error, not `deleted: false`.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)\n',
		accounts: {
			confluence: {
				scope: ['delete:page:confluence', 'read:space:confluence', 'read:page:confluence'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				blogPostId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.',
				},
				draft: {
					type: 'boolean',
					description: 'Delete a draft blog post rather than a published one.',
					'x-advanced': true,
				},
				purge: {
					type: 'boolean',
					description:
						'Permanently purge an already-trashed blog post. This is irreversible. A normal delete moves the blog post to the trash and can be undone in the UI.',
					'x-advanced': true,
				},
			},
			required: ['blogPostId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				deleted: {
					type: 'boolean',
					description:
						'Always true when the call succeeds. Confluence returns HTTP 204 with an empty body on a successful blog post delete, so this is synthesized by the endpoint rather than read from the response; a failure surfaces as an error instead.',
				},
				blogPostId: {
					type: 'string',
					description: 'Echo of the blog post ID that was deleted.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'deletePage',
		label: 'Delete a page',
		description: 'Deletes a page by its numeric ID. Destructive.',
		context:
			'---\nname: deletePage\ndescription: Deletes a page by its numeric ID. Destructive.\n---\n\nDeletes a page. **Destructive.** Confirm the target before calling: resolve the ID with\n`searchPages` and read it back with `getPage` if there is any\ndoubt, because there is no undo through this endpoint.\n\nBy default, a published page is moved to the **trash** and can be restored from the\nConfluence UI. Passing `purge: true` permanently destroys an already-trashed page and\n**cannot be undone**.\n\n**Drafts are different:** deleting a draft with `draft: true` permanently removes it immediately.\nDrafts are not moved to the trash and cannot subsequently be restored or purged.\n\nConfluence returns HTTP 204 with an empty body, so the `deleted` output is synthesized by this\nendpoint rather than read from the response. A failure surfaces as an error, not `deleted: false`.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)\n',
		accounts: {
			confluence: {
				scope: ['delete:page:confluence', 'read:page:confluence', 'read:space:confluence'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				pageId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.',
				},
				draft: {
					type: 'boolean',
					description: 'Delete a draft page rather than a published one.',
					'x-advanced': true,
				},
				purge: {
					type: 'boolean',
					description:
						'Permanently purge an already-trashed page. This is irreversible. A normal delete moves the page to the trash and can be undone in the UI.',
					'x-advanced': true,
				},
			},
			required: ['pageId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				deleted: {
					type: 'boolean',
					description:
						'Always true when the call succeeds. Confluence returns HTTP 204 with an empty body on a successful page delete, so this is synthesized by the endpoint rather than read from the response; a failure surfaces as an error instead.',
				},
				pageId: { type: 'string', description: 'Echo of the page ID that was deleted.' },
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'getBlogPost',
		label: 'Get a blog post',
		description:
			'Retrieves a single blog post by its numeric ID, optionally at a specific version.',
		context:
			'---\nname: getBlogPost\ndescription: Retrieves a single blog post by its numeric ID, optionally at a specific version.\n---\n\nFetches one blog post by numeric ID. Call this before `updateBlogPost`:\nits `version.number` output is what you increment to build a valid update.\n\n`bodyFormat` is required to get any content back - without it the `body` output is empty.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Body formats\n\n`representation` names the format of the `content` you send:\n\n- `atlas_doc_format` - JSON ADF, the default\n- `storage` - Confluence Storage Format (XHTML-like), best for programmatic content\n- `wiki` - Confluence Wiki Markup, accepted on write only\n\nOn read, the body is **not returned at all** unless `bodyFormat` is passed.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				blogPostId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.',
				},
				bodyFormat: {
					type: 'string',
					description:
						'Content format returned in the `body` output field. The body is NOT returned at all unless this is set. Use `storage` (XHTML-like) for programmatic content, or `atlas_doc_format` for JSON ADF.',
					default: '',
					enum: [
						'',
						'storage',
						'atlas_doc_format',
						'view',
						'export_view',
						'anonymous_export_view',
					],
				},
				version: {
					type: 'number',
					description:
						'Retrieve a specific previously published version of the blog post. Version numbers are sequential integers starting at 1. Omit for the latest.',
					'x-advanced': true,
				},
				getDraft: {
					type: 'boolean',
					description:
						'Retrieve the draft version of the blog post instead of the published one.',
					'x-advanced': true,
				},
			},
			required: ['blogPostId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				authorId: { type: 'string' },
				id: { type: 'string' },
				version: {
					type: 'object',
					properties: {
						number: { type: 'number' },
						message: { type: 'string' },
						minorEdit: { type: 'boolean' },
						authorId: { type: 'string' },
						createdAt: { type: 'string' },
					},
					required: [],
				},
				status: { type: 'string' },
				body: {
					type: 'object',
					properties: {
						storage: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						atlas_doc_format: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						view: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
					},
					required: [],
				},
				spaceId: { type: 'string' },
				createdAt: { type: 'string' },
				_links: {
					type: 'object',
					properties: {
						editui: { type: 'string' },
						webui: { type: 'string' },
						tinyui: { type: 'string' },
						base: { type: 'string' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'getFolderDirectChildren',
		label: 'Get folder direct children',
		description:
			'Returns a page of the direct children of one folder. Results are heterogeneous (pages, folders, whiteboards, databases, embeds), each row carrying a `type` discriminator.',
		context:
			"---\nname: getFolderDirectChildren\ndescription: Returns a page of the direct children of one folder. Results are heterogeneous (pages, folders, whiteboards, databases, embeds), each row carrying a `type` discriminator.\n---\n\nReturns what sits immediately beneath one folder - one level only, not the whole subtree.\n\n## Walking the content tree\n\nConfluence v2 hangs all content off each space's `homepageId`, and **these are the only endpoints\nthat return folders alongside pages** - `listSpacePages` and `searchPages` return pages only and\nnever reveal a folder. So a full traversal is:\n\n1. `listSpaces` -> take the space's `homepageId`.\n2. `getPageDirectChildren` on that `homepageId` -> the space's top-level content, mixed types.\n3. Recurse, choosing the endpoint by each row's `type`: `page` -> `getPageDirectChildren`,\n   `folder` -> `getFolderDirectChildren`.\n\nResults are **heterogeneous** - every row carries a `type` discriminator, and the row shape is a\nslim child descriptor (`id`, `type`, `status`, `title`, `spaceId`, `childPosition`), not a full\npage. Fetch the full resource with `getPage` when you need body, version or author.\n\nA space with no `homepageId` (rare) cannot be enumerated this way.\n\n## Scope\n\nThis endpoint needs `read:hierarchical-content:confluence`, which is **not** one of the page or\nspace scopes the rest of this app uses. It must be granted for these calls to work.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)",
		accounts: { confluence: { scope: ['read:hierarchical-content:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				folderId: {
					type: 'string',
					description:
						'Numeric ID of the parent folder, as a string. Folder IDs are not listable directly: discover them from a `getPageDirectChildren` row whose `type` is `folder`.',
				},
				sort: {
					type: 'string',
					description:
						'Field to sort children by. `-` prefix means descending. `child-position` is the manual order shown in the Confluence page tree, which is usually what a human means by "the order they appear".',
					default: '',
					'x-advanced': true,
					enum: [
						'',
						'child-position',
						'-child-position',
						'title',
						'-title',
						'created-date',
						'-created-date',
						'modified-date',
						'-modified-date',
						'id',
						'-id',
					],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: ['folderId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The children returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: 'Numeric ID of the child, as a string.',
							},
							type: {
								type: 'string',
								description:
									'Discriminator for what this child is: `page`, `folder`, `whiteboard`, `database` or `embed`. Use it to decide how to recurse - `page` children expand with `getPageDirectChildren`, `folder` children with `getFolderDirectChildren`. `whiteboard`, `database` and `embed` are leaves for the purposes of these two endpoints.',
							},
							status: {
								type: 'string',
								description: 'Status of the child, e.g. `current`.',
							},
							spaceId: {
								type: 'string',
								description: 'Numeric ID of the space the child lives in.',
							},
							childPosition: {
								type: 'number',
								description:
									'Manual ordering position within the parent. Absent when the parent has no explicit ordering.',
							},
						},
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this children page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'getPage',
		label: 'Get a page',
		description: 'Retrieves a single page by its numeric ID, optionally at a specific version.',
		context:
			'---\nname: getPage\ndescription: Retrieves a single page by its numeric ID, optionally at a specific version.\n---\n\nFetches one page by numeric ID. Call this before `updatePage`:\nits `version.number` output is what you increment to build a valid update.\n\n`bodyFormat` is required to get any content back - without it the `body` output is empty.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Body formats\n\n`representation` names the format of the `content` you send:\n\n- `atlas_doc_format` - JSON ADF, the default\n- `storage` - Confluence Storage Format (XHTML-like), best for programmatic content\n- `wiki` - Confluence Wiki Markup, accepted on write only\n\nOn read, the body is **not returned at all** unless `bodyFormat` is passed.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				pageId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.',
				},
				bodyFormat: {
					type: 'string',
					description:
						'Content format returned in the `body` output field. The body is NOT returned at all unless this is set. Use `storage` (XHTML-like) for programmatic content, or `atlas_doc_format` for JSON ADF.',
					default: '',
					enum: [
						'',
						'storage',
						'atlas_doc_format',
						'view',
						'export_view',
						'anonymous_export_view',
					],
				},
				version: {
					type: 'number',
					description:
						'Retrieve a specific previously published version of the page. Version numbers are sequential integers starting at 1. Omit for the latest.',
					'x-advanced': true,
				},
				getDraft: {
					type: 'boolean',
					description:
						'Retrieve the draft version of the page instead of the published one.',
					'x-advanced': true,
				},
			},
			required: ['pageId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string' },
				status: { type: 'string' },
				spaceId: { type: 'string' },
				parentId: { type: 'string' },
				parentType: { type: 'string' },
				position: { type: 'number' },
				authorId: { type: 'string' },
				createdAt: { type: 'string' },
				version: {
					type: 'object',
					properties: {
						createdAt: { type: 'string' },
						message: { type: 'string' },
						number: { type: 'number' },
						minorEdit: { type: 'boolean' },
						authorId: { type: 'string' },
					},
					required: [],
				},
				body: {
					type: 'object',
					properties: {
						storage: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						atlas_doc_format: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						anonymous_export_view: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						export_view: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						view: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
					},
					required: [],
				},
				_links: {
					type: 'object',
					properties: {
						webui: { type: 'string' },
						editui: { type: 'string' },
						tinyui: { type: 'string' },
						base: { type: 'string' },
					},
					required: [],
				},
				ownerId: { type: 'string' },
				lastOwnerId: { type: 'string' },
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'getPageDirectChildren',
		label: 'Get page direct children',
		description:
			'Returns a page of the direct children of one page. Results are heterogeneous (pages, folders, whiteboards, databases, embeds), each row carrying a `type` discriminator.',
		context:
			"---\nname: getPageDirectChildren\ndescription: Returns a page of the direct children of one page. Results are heterogeneous (pages, folders, whiteboards, databases, embeds), each row carrying a `type` discriminator.\n---\n\nReturns what sits immediately beneath one page - one level only, not the whole subtree. Call it against a space's `homepageId` to enumerate that space's top-level content.\n\n## Walking the content tree\n\nConfluence v2 hangs all content off each space's `homepageId`, and **these are the only endpoints\nthat return folders alongside pages** - `listSpacePages` and `searchPages` return pages only and\nnever reveal a folder. So a full traversal is:\n\n1. `listSpaces` -> take the space's `homepageId`.\n2. `getPageDirectChildren` on that `homepageId` -> the space's top-level content, mixed types.\n3. Recurse, choosing the endpoint by each row's `type`: `page` -> `getPageDirectChildren`,\n   `folder` -> `getFolderDirectChildren`.\n\nResults are **heterogeneous** - every row carries a `type` discriminator, and the row shape is a\nslim child descriptor (`id`, `type`, `status`, `title`, `spaceId`, `childPosition`), not a full\npage. Fetch the full resource with `getPage` when you need body, version or author.\n\nA space with no `homepageId` (rare) cannot be enumerated this way.\n\n## Scope\n\nThis endpoint needs `read:hierarchical-content:confluence`, which is **not** one of the page or\nspace scopes the rest of this app uses. It must be granted for these calls to work.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)",
		accounts: { confluence: { scope: ['read:hierarchical-content:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				pageId: {
					type: 'string',
					description:
						"Numeric ID of the parent page, as a string. Use `searchPages` to find a page ID, or a space's `homepageId` from `listSpaces` to enumerate that space's top level.",
				},
				sort: {
					type: 'string',
					description:
						'Field to sort children by. `-` prefix means descending. `child-position` is the manual order shown in the Confluence page tree, which is usually what a human means by "the order they appear".',
					default: '',
					'x-advanced': true,
					enum: [
						'',
						'child-position',
						'-child-position',
						'title',
						'-title',
						'created-date',
						'-created-date',
						'modified-date',
						'-modified-date',
						'id',
						'-id',
					],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: ['pageId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The children returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description: 'Numeric ID of the child, as a string.',
							},
							type: {
								type: 'string',
								description:
									'Discriminator for what this child is: `page`, `folder`, `whiteboard`, `database` or `embed`. Use it to decide how to recurse - `page` children expand with `getPageDirectChildren`, `folder` children with `getFolderDirectChildren`. `whiteboard`, `database` and `embed` are leaves for the purposes of these two endpoints.',
							},
							status: {
								type: 'string',
								description: 'Status of the child, e.g. `current`.',
							},
							spaceId: {
								type: 'string',
								description: 'Numeric ID of the space the child lives in.',
							},
							childPosition: {
								type: 'number',
								description:
									'Manual ordering position within the parent. Absent when the parent has no explicit ordering.',
							},
						},
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this children page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'listBlogPostVersions',
		label: 'List blog post versions',
		description: 'Returns a page of version history entries for a single blog post.',
		context:
			'---\nname: listBlogPostVersions\ndescription: Returns a page of version history entries for a single blog post.\n---\n\nLists the version history of one blog post. Versions are sequential integers starting at 1; the\nhighest `number` is the current version.\n\nUse this when you need the history. To simply update the blog post, call\n`getBlogPost` instead - it returns the current\n`version.number` directly and is one call rather than a paged scan.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				blogPostId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.',
				},
				sort: {
					type: 'string',
					description: 'Field to sort by. `-` prefix means descending.',
					default: '',
					'x-advanced': true,
					enum: ['', '-modified-date', 'modified-date'],
				},
				bodyFormat: {
					type: 'string',
					description:
						"Content format returned in each result's `body` field. The body is NOT returned unless this is set.",
					default: '',
					enum: ['', 'atlas_doc_format', 'storage'],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: ['blogPostId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The versions returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							createdAt: { type: 'string' },
							message: { type: 'string' },
							number: { type: 'number' },
							minorEdit: { type: 'boolean' },
							authorId: { type: 'string' },
							blogpost: {
								type: 'object',
								properties: {
									id: { type: 'string' },
									body: {
										type: 'object',
										properties: {
											storage: {
												type: 'object',
												properties: {
													value: { type: 'string' },
													representation: { type: 'string' },
												},
												required: [],
											},
											atlas_doc_format: {
												type: 'object',
												properties: {
													value: { type: 'string' },
													representation: { type: 'string' },
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
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this versions page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'listPageVersions',
		label: 'List page versions',
		description: 'Returns a page of version history entries for a single page.',
		context:
			'---\nname: listPageVersions\ndescription: Returns a page of version history entries for a single page.\n---\n\nLists the version history of one page. Versions are sequential integers starting at 1; the\nhighest `number` is the current version.\n\nUse this when you need the history. To simply update the page, call\n`getPage` instead - it returns the current\n`version.number` directly and is one call rather than a paged scan.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				pageId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.',
				},
				sort: {
					type: 'string',
					description: 'Field to sort by. `-` prefix means descending.',
					default: '',
					'x-advanced': true,
					enum: ['', '-modified-date', 'modified-date'],
				},
				bodyFormat: {
					type: 'string',
					description:
						"Content format returned in each result's `body` field. The body is NOT returned unless this is set.",
					default: '',
					enum: ['', 'atlas_doc_format', 'storage'],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: ['pageId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The versions returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							createdAt: { type: 'string' },
							message: { type: 'string' },
							number: { type: 'number' },
							minorEdit: { type: 'boolean' },
							authorId: { type: 'string' },
							page: {
								type: 'object',
								properties: {
									id: { type: 'string' },
									body: {
										type: 'object',
										properties: {
											storage: {
												type: 'object',
												properties: {
													value: { type: 'string' },
													representation: { type: 'string' },
												},
												required: [],
											},
											atlas_doc_format: {
												type: 'object',
												properties: {
													value: { type: 'string' },
													representation: { type: 'string' },
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
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this versions page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'listSpacePages',
		label: 'List space pages',
		description:
			'Returns a page of pages inside one space, optionally only those at the space root.',
		context:
			"---\nname: listSpacePages\ndescription: Returns a page of pages inside one space, optionally only those at the space root.\n---\n\nLists the pages contained in one space, resolved by numeric `spaceId` (use `listSpaces` to find it).\n\n## When to use this instead of `searchPages`\n\n`searchPages` can already filter by space via its `spaceIds` input, so these overlap. Reach for\nthis endpoint when you need **`depth: root`** - only the top-level pages sitting directly under the\nspace, excluding every descendant. `searchPages` cannot express that; it always returns pages at\nany depth. For anything else, including searching across several spaces at once, prefer\n`searchPages`.\n\nNote this returns pages only. Blog posts are not pages in Confluence's model and never appear\nhere - use `searchBlogPosts` for those.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)",
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spaceId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `listSpaces` endpoint to find it.',
				},
				depth: {
					type: 'string',
					description:
						'`root` returns only top-level pages sitting directly under the space; `all` returns every page in the space. Confluence defaults to `all` when omitted. This filter is the reason to use this endpoint over `searchPages`.',
					default: '',
					enum: ['', 'root', 'all'],
				},
				status: {
					type: 'string',
					description:
						'Filter to pages with these statuses. Confluence defaults to `current` and `archived`.',
					default: '',
					enum: ['', 'current', 'archived', 'deleted', 'trashed'],
				},
				sort: {
					type: 'string',
					description: 'Field to sort by. `-` prefix means descending.',
					default: '',
					'x-advanced': true,
					enum: [
						'',
						'id',
						'-id',
						'created-date',
						'-created-date',
						'modified-date',
						'-modified-date',
						'title',
						'-title',
					],
				},
				bodyFormat: {
					type: 'string',
					description:
						"Content format returned in each result's `body` field. The body is NOT returned unless this is set.",
					default: '',
					enum: ['', 'atlas_doc_format', 'storage'],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: ['spaceId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The pages returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string' },
							status: { type: 'string' },
							spaceId: { type: 'string' },
							parentId: { type: 'string' },
							parentType: { type: 'string' },
							position: { type: 'number' },
							authorId: { type: 'string' },
							createdAt: { type: 'string' },
							version: {
								type: 'object',
								properties: {
									createdAt: { type: 'string' },
									message: { type: 'string' },
									number: { type: 'number' },
									minorEdit: { type: 'boolean' },
									authorId: { type: 'string' },
								},
								required: [],
							},
							body: {
								type: 'object',
								properties: {
									storage: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
									atlas_doc_format: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
								},
								required: [],
							},
							_links: {
								type: 'object',
								properties: {
									webui: { type: 'string' },
									editui: { type: 'string' },
									tinyui: { type: 'string' },
								},
								required: [],
							},
							ownerId: { type: 'string' },
							lastOwnerId: { type: 'string' },
						},
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this pages page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'listSpaces',
		label: 'List spaces',
		description:
			'Returns a page of Confluence spaces, optionally filtered by ID, key, label, type or status.',
		context:
			'---\nname: listSpaces\ndescription: Returns a page of Confluence spaces, optionally filtered by ID, key, label, type or status.\n---\n\nLists Confluence spaces. This is the entry point for discovering the `spaceId` that\n`createPage`, `createBlogPost`, `searchPages` and `searchBlogPosts` need.\n\nFilters combine with AND. `spaceIds`, `keys` and `labels` are arrays and are sent to Confluence\ncomma-separated.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\nCommon cases: **404** unknown or inaccessible ID, **403** insufficient scope or permission,\n**429** rate limited (honour `Retry-After`).',
		accounts: { confluence: { scope: ['read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				spaceIds: {
					type: 'array',
					description: 'Filter to these numeric space IDs.',
					items: { type: 'string' },
				},
				keys: {
					type: 'array',
					description: 'Filter to these space keys, e.g. `DEV`.',
					items: { type: 'string' },
				},
				labels: {
					type: 'array',
					description: 'Filter to spaces carrying these labels.',
					items: { type: 'string' },
				},
				type: {
					type: 'string',
					description: 'Restrict to global or personal spaces.',
					default: '',
					enum: ['', 'global', 'personal'],
				},
				status: {
					type: 'string',
					description: 'Restrict to current or archived spaces.',
					default: '',
					enum: ['', 'current', 'archived'],
				},
				sort: {
					type: 'string',
					description: 'Field to sort by. `-` prefix means descending.',
					default: '',
					'x-advanced': true,
					enum: ['', 'name', '-name', 'key', '-key', 'id', '-id'],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The spaces returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description:
									'Numeric space ID as a string. Use this, not the key, wherever a space ID is required.',
							},
							key: {
								type: 'string',
								description:
									'Human-readable space key, e.g. `DEV`. Not interchangeable with the numeric ID.',
							},
							name: { type: 'string', description: 'Display name of the space.' },
							type: { type: 'string', description: '`global` or `personal`.' },
							status: { type: 'string', description: '`current` or `archived`.' },
							authorId: {
								type: 'string',
								description: 'Account ID of the space creator.',
							},
							createdAt: {
								type: 'string',
								description: 'ISO 8601 creation timestamp.',
							},
							homepageId: {
								type: 'string',
								description: 'Page ID of the space homepage.',
							},
							description: {
								type: 'object',
								description: 'Space description, when requested.',
								properties: {
									plain: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
								},
								required: [],
							},
							_links: {
								type: 'object',
								description: 'Links for this space.',
								properties: {
									webui: {
										type: 'string',
										description: 'Relative UI path to the space.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this spaces page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'searchBlogPosts',
		label: 'Search blog posts',
		description:
			'Returns a page of blog posts, optionally filtered by title, ID, space or status.',
		context:
			'---\nname: searchBlogPosts\ndescription: Returns a page of blog posts, optionally filtered by title, ID, space or status.\n---\n\nSearches blog posts across the site. Use this to resolve a title into an ID before calling\n`getBlogPost`, `updateBlogPost` or `deleteBlogPost`.\n\nAll filters combine with AND. `blogPostIds`, `spaceIds` and `status` are arrays and are sent to\nConfluence comma-separated.\n\nBody content is omitted from every result unless `bodyFormat` is set.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				blogPostIds: {
					type: 'array',
					description: 'Filter to these numeric blog post IDs.',
					items: { type: 'string' },
				},
				spaceIds: {
					type: 'array',
					description:
						'Filter to these numeric space IDs. Use `listSpaces` to find them.',
					items: { type: 'string' },
				},
				status: {
					type: 'string',
					description:
						'Filter to blog posts with these statuses. Confluence defaults to `current`.',
					default: '',
					enum: ['', 'current', 'deleted', 'trashed'],
				},
				sort: {
					type: 'string',
					description: 'Field to sort by. `-` prefix means descending.',
					default: '',
					'x-advanced': true,
					enum: [
						'',
						'id',
						'-id',
						'created-date',
						'-created-date',
						'modified-date',
						'-modified-date',
					],
				},
				bodyFormat: {
					type: 'string',
					description:
						"Content format returned in each result's `body` field. The body is NOT returned unless this is set.",
					default: '',
					enum: ['', 'atlas_doc_format', 'storage'],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The blog posts returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							authorId: { type: 'string' },
							id: { type: 'string' },
							version: {
								type: 'object',
								properties: {
									number: { type: 'number' },
									message: { type: 'string' },
									minorEdit: { type: 'boolean' },
									authorId: { type: 'string' },
									createdAt: { type: 'string' },
								},
								required: [],
							},
							status: { type: 'string' },
							body: {
								type: 'object',
								properties: {
									storage: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
									atlas_doc_format: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
									view: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
								},
								required: [],
							},
							spaceId: { type: 'string' },
							createdAt: { type: 'string' },
							_links: {
								type: 'object',
								properties: {
									editui: { type: 'string' },
									webui: { type: 'string' },
									tinyui: { type: 'string' },
								},
								required: [],
							},
						},
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this blog posts page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'searchPages',
		label: 'Search pages',
		description: 'Returns a page of pages, optionally filtered by title, ID, space or status.',
		context:
			'---\nname: searchPages\ndescription: Returns a page of pages, optionally filtered by title, ID, space or status.\n---\n\nSearches pages across the site. Use this to resolve a title into an ID before calling\n`getPage`, `updatePage` or `deletePage`.\n\nAll filters combine with AND. `pageIds`, `spaceIds` and `status` are arrays and are sent to\nConfluence comma-separated.\n\nBody content is omitted from every result unless `bodyFormat` is set.\n\n## IDs\n\nAll Confluence IDs are **numeric strings**. Note a space **key** (e.g. `DEV`) is not the same as\na space **id** (e.g. `123456789`); this endpoint uses the numeric id.\n\n## Pagination\n\nThis endpoint returns **one bounded page** and does not follow pagination automatically.\n\n1. Call without `cursor` to get the first page.\n2. Read `_links.next` from the output. It is a **relative URL**, not a cursor, e.g.\n   `/wiki/api/v2/pages?cursor=abc123&limit=25`.\n3. Extract the value of its `cursor` query parameter and pass that as `cursor` on the next call.\n4. When `_links.next` is absent, you have reached the last page.\n\nNever construct or guess a cursor value.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: { confluence: { scope: ['read:page:confluence', 'read:space:confluence'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				pageIds: {
					type: 'array',
					description: 'Filter to these numeric page IDs.',
					items: { type: 'string' },
				},
				spaceIds: {
					type: 'array',
					description:
						'Filter to these numeric space IDs. Use `listSpaces` to find them.',
					items: { type: 'string' },
				},
				status: {
					type: 'string',
					description:
						'Filter to pages with these statuses. Confluence defaults to `current` and `archived`.',
					default: '',
					enum: ['', 'current', 'archived', 'deleted', 'trashed'],
				},
				sort: {
					type: 'string',
					description: 'Field to sort by. `-` prefix means descending.',
					default: '',
					'x-advanced': true,
					enum: [
						'',
						'id',
						'-id',
						'created-date',
						'-created-date',
						'modified-date',
						'-modified-date',
						'title',
						'-title',
					],
				},
				bodyFormat: {
					type: 'string',
					description:
						"Content format returned in each result's `body` field. The body is NOT returned unless this is set.",
					default: '',
					enum: ['', 'atlas_doc_format', 'storage'],
				},
				cursor: {
					type: 'string',
					description:
						'Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.',
					default: 25,
					minimum: 1,
					maximum: 250,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description: 'The pages returned in this page, at most `limit` items.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string' },
							status: { type: 'string' },
							spaceId: { type: 'string' },
							parentId: { type: 'string' },
							parentType: { type: 'string' },
							position: { type: 'number' },
							authorId: { type: 'string' },
							createdAt: { type: 'string' },
							version: {
								type: 'object',
								properties: {
									createdAt: { type: 'string' },
									message: { type: 'string' },
									number: { type: 'number' },
									minorEdit: { type: 'boolean' },
									authorId: { type: 'string' },
								},
								required: [],
							},
							body: {
								type: 'object',
								properties: {
									storage: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
									atlas_doc_format: {
										type: 'object',
										properties: {
											value: { type: 'string' },
											representation: { type: 'string' },
										},
										required: [],
									},
								},
								required: [],
							},
							_links: {
								type: 'object',
								properties: {
									webui: { type: 'string' },
									editui: { type: 'string' },
									tinyui: { type: 'string' },
								},
								required: [],
							},
							ownerId: { type: 'string' },
							lastOwnerId: { type: 'string' },
						},
						required: [],
					},
				},
				_links: {
					type: 'object',
					description:
						"Pagination and context links for this pages page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.",
					properties: {
						next: {
							type: 'string',
							description:
								'Relative URL of the next page, or absent on the last page.',
						},
						base: { type: 'string', description: 'Base URL of the Confluence site.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'updateBlogPost',
		label: 'Update a blog post',
		description:
			'Replaces the title, body, status and version of an existing blog post. Full replacement - omitted fields are overwritten.',
		context:
			'---\nname: updateBlogPost\ndescription: Replaces the title, body, status and version of an existing blog post. Full replacement - omitted fields are overwritten.\n---\n\nUpdates one blog post with a single `PUT`.\n\n## Version numbers are mandatory and branch on status\n\nConfluence rejects an update whose `versionNumber` is not exactly right with **409 Conflict**.\nThe correct value depends on `status`:\n\n- `status: current` (publishing) - call `getBlogPost` first, read `version.number` from its output,\n  and pass **that number + 1**.\n- `status: draft` (saving a draft) - pass **1**. Drafts always use version 1; passing\n  current + 1 here will fail.\n- First-time publish of a draft (`status: current`) - pass **1**.\n\n`versionNumber` is always required because Forman cannot express conditionally-required fields.\n\n## This is a full replacement, not a patch\n\nThe request is a bare `PUT` with no read-modify-write. Every field you omit is **overwritten**,\nso omitting `content` blanks the blog post body. Always send the complete intended state:\nfetch the current blog post with `getBlogPost`, merge your changes, then send everything back.\n\n## Body formats\n\n`representation` names the format of the `content` you send:\n\n- `atlas_doc_format` - JSON ADF, the default\n- `storage` - Confluence Storage Format (XHTML-like), best for programmatic content\n- `wiki` - Confluence Wiki Markup, accepted on write only\n\nOn read, the body is **not returned at all** unless `bodyFormat` is passed.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: {
			confluence: {
				scope: ['write:page:confluence', 'read:page:confluence', 'read:space:confluence'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				blogPostId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.',
				},
				status: {
					type: 'string',
					description:
						'Target status. `current` publishes the blog post; `draft` saves a draft. This choice changes which `versionNumber` is valid - see the description.',
					enum: ['current', 'draft'],
				},
				representation: {
					type: 'string',
					description:
						'Format of the `content` value you are sending. `atlas_doc_format` is JSON ADF (https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/); `storage` is Confluence Storage Format, XHTML-like (https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html); `wiki` is Confluence Wiki Markup and is accepted on write only.',
					enum: ['atlas_doc_format', 'storage', 'wiki'],
				},
				content: {
					type: 'string',
					description:
						'The body content, encoded in the format named by `representation`.',
				},
				versionNumber: {
					type: 'number',
					description:
						'For `status: current`, the current `version.number` from getBlogPost PLUS 1. For `status: draft`, always `1`. A wrong value returns 409 Conflict.',
				},
				versionMessage: {
					type: 'string',
					description: 'Optional note stored alongside this version in the history.',
					'x-advanced': true,
				},
			},
			required: [
				'blogPostId',
				'status',
				'title',
				'representation',
				'content',
				'versionNumber',
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				authorId: { type: 'string' },
				id: { type: 'string' },
				version: {
					type: 'object',
					properties: {
						number: { type: 'number' },
						message: { type: 'string' },
						minorEdit: { type: 'boolean' },
						authorId: { type: 'string' },
						createdAt: { type: 'string' },
					},
					required: [],
				},
				status: { type: 'string' },
				body: {
					type: 'object',
					properties: {
						storage: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						atlas_doc_format: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						view: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
					},
					required: [],
				},
				spaceId: { type: 'string' },
				createdAt: { type: 'string' },
				_links: {
					type: 'object',
					properties: {
						editui: { type: 'string' },
						webui: { type: 'string' },
						tinyui: { type: 'string' },
						base: { type: 'string' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'confluence',
		appVersion: 1,
		endpointName: 'updatePage',
		label: 'Update a page',
		description:
			'Replaces the title, body, status and version of an existing page. Full replacement - omitted fields are overwritten.',
		context:
			'---\nname: updatePage\ndescription: Replaces the title, body, status and version of an existing page. Full replacement - omitted fields are overwritten.\n---\n\nUpdates one page with a single `PUT`.\n\n## Version numbers are mandatory and branch on status\n\nConfluence rejects an update whose `versionNumber` is not exactly right with **409 Conflict**.\nThe correct value depends on `status`:\n\n- `status: current` (publishing) - call `getPage` first, read `version.number` from its output,\n  and pass **that number + 1**.\n- `status: draft` (saving a draft) - pass **1**. Drafts always use version 1; passing\n  current + 1 here will fail.\n- First-time publish of a draft (`status: current`) - pass **1**.\n\n`versionNumber` is always required because Forman cannot express conditionally-required fields.\n\n## This is a full replacement, not a patch\n\nThe request is a bare `PUT` with no read-modify-write. Every field you omit is **overwritten**,\nso omitting `content` blanks the page body. Always send the complete intended state:\nfetch the current page with `getPage`, merge your changes, then send everything back.\n\n## Body formats\n\n`representation` names the format of the `content` you send:\n\n- `atlas_doc_format` - JSON ADF, the default\n- `storage` - Confluence Storage Format (XHTML-like), best for programmatic content\n- `wiki` - Confluence Wiki Markup, accepted on write only\n\nOn read, the body is **not returned at all** unless `bodyFormat` is passed.\n\n## Errors\n\nErrors surface as `[<statusCode>] <message>`, resolved from the Confluence `errors` array.\n\nCommon cases:\n\n- **404** unknown or inaccessible ID\n- **403** insufficient scope or permission\n- **429** rate limited (honour `Retry-After`)',
		accounts: {
			confluence: {
				scope: ['read:page:confluence', 'write:page:confluence', 'read:space:confluence'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				pageId: {
					type: 'string',
					description:
						'Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.',
				},
				status: {
					type: 'string',
					description:
						'Target status. `current` publishes the page; `draft` saves a draft. This choice changes which `versionNumber` is valid - see the description.',
					enum: ['current', 'draft'],
				},
				representation: {
					type: 'string',
					description:
						'Format of the `content` value you are sending. `atlas_doc_format` is JSON ADF (https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/); `storage` is Confluence Storage Format, XHTML-like (https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html); `wiki` is Confluence Wiki Markup and is accepted on write only.',
					enum: ['atlas_doc_format', 'storage', 'wiki'],
				},
				content: {
					type: 'string',
					description:
						'The body content, encoded in the format named by `representation`.',
				},
				versionNumber: {
					type: 'number',
					description:
						'For `status: current`, the current `version.number` from getPage PLUS 1. For `status: draft`, always `1`. A wrong value returns 409 Conflict.',
				},
				versionMessage: {
					type: 'string',
					description: 'Optional note stored alongside this version in the history.',
					'x-advanced': true,
				},
				parentId: {
					type: 'string',
					description:
						'Numeric ID of the parent page, to move the page within the same space. Moving between spaces is not supported by this API.',
					'x-advanced': true,
				},
			},
			required: ['pageId', 'status', 'title', 'representation', 'content', 'versionNumber'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string' },
				status: { type: 'string' },
				spaceId: { type: 'string' },
				parentId: { type: 'string' },
				parentType: { type: 'string' },
				position: { type: 'number' },
				authorId: { type: 'string' },
				createdAt: { type: 'string' },
				version: {
					type: 'object',
					properties: {
						createdAt: { type: 'string' },
						message: { type: 'string' },
						number: { type: 'number' },
						minorEdit: { type: 'boolean' },
						authorId: { type: 'string' },
					},
					required: [],
				},
				body: {
					type: 'object',
					properties: {
						storage: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
						atlas_doc_format: {
							type: 'object',
							properties: {
								value: { type: 'string' },
								representation: { type: 'string' },
							},
							required: [],
						},
					},
					required: [],
				},
				_links: {
					type: 'object',
					properties: {
						webui: { type: 'string' },
						editui: { type: 'string' },
						tinyui: { type: 'string' },
						base: { type: 'string' },
					},
					required: [],
				},
				ownerId: { type: 'string' },
				lastOwnerId: { type: 'string' },
			},
			required: [],
		},
	},
];
