// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'dropbox',
		appVersion: 5,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Dropbox API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.dropboxapi.com/`. Provide the remaining path in the URL parameter\n(e.g. `/2/users/get_current_account`). Authentication is handled automatically via the app\'s connection.\nDropbox RPC endpoints use POST. When an endpoint takes no arguments, send `null` as the body.\nThe body can be a JSON object or a JSON string, and a JSON body needs the `Content-Type: application/json` header.\n\nFile upload and download (`content.dropboxapi.com`) are not available. Endpoints cannot send or receive file bytes.\n\nBy default the `Dropbox-API-Path-Root` header is set to the connection\'s root namespace (`root` mode).\nSet **Disable Dropbox API path root** to `true` to omit that header.\nSee the [Dropbox Path Root Header Modes](https://docs.dropboxapi.com/dropbox-api/docs/technical-reference/path-root-header-modes) guide.\n\nRefer to the [Dropbox HTTP documentation](https://www.dropbox.com/developers/documentation/http/documentation) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { dropbox: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.dropboxapi.com`. For example, `/2/users/get_current_account`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method. Dropbox RPC endpoints use POST.',
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
						'The HTTP request body. This input will be ignored if the HTTP request method is `GET`. When a Dropbox RPC endpoint takes no arguments, send `null`.',
				},
				disablePathRoot: {
					type: 'boolean',
					description:
						"Set to `true` to omit the `Dropbox-API-Path-Root` header. Set to `false` to root the call to the connection's root namespace. See the [Dropbox Path Root Header Modes](https://docs.dropboxapi.com/dropbox-api/docs/technical-reference/path-root-header-modes) guide.",
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
