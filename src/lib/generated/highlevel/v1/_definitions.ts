// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'highlevel',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			"# Arbitrary call\n\nSends one HTTP request to the GoHighLevel API. The base URL is hardcoded to `https://services.leadconnectorhq.com`. Put the path in `url`, for example `/locations/{locationId}`.\n\nWorks with GoHighLevel Location OAuth (`highlevel3`) and Company OAuth (`highlevel4`). This endpoint adds no extra scope; the connection's scopes apply. A Company OAuth token is agency-level. For sub-account routes HighLevel may require exchanging it for a sub-account token (`POST /oauth/locationToken`).\n\nSend header `Version` on every request. HighLevel documents it as required. Use the value shown on the operation's page in the API docs, for example `v3` (older versions such as `2021-07-28` are still supported).\n\nMost routes need a `locationId` (query string, path, or body). Use the ID of the sub-account the connection belongs to.\n\nCheap read: method `GET`, url `/locations/{locationId}`, header `Version: v3`, no body. Needs the `locations.readonly` scope.\n\nDo not use `GET /users/`. HighLevel deprecated it and it fails with 422 `LocationId can't be undefined` unless `locationId` is in the query string. Use `GET /users/search` with header `Version: v3` and query string `companyId` (required) and `locationId`.\n\n`qs` becomes the query string. `body` is the JSON body and is ignored for `GET`. Do not send an Authorization header; the connection adds it.\n\nDocs: https://marketplace.gohighlevel.com/docs/",
		accounts: { highlevel3: { scope: [] }, highlevel4: { scope: [] } },
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
						'Enter a path relative to `https://services.leadconnectorhq.com`.\ne.g.`/contacts/`',
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
];
