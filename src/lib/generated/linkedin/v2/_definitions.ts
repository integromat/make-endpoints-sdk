// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the LinkedIn API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.linkedin.com/`. Provide the remaining path in the URL parameter\n(e.g. `/rest/organizationAcls`). Authentication is handled automatically via the app\'s connection.\n\nLinkedIn\'s unversioned API (`/v2/...`) was deprecated in March 2023 in favor of the versioned base path\n`https://api.linkedin.com/rest/`. A URL starting with `/v2` is automatically converted to `/rest`\n(except `/v2/me` and `/v2/userinfo`, which stay unversioned). Every request automatically includes the\n`X-Restli-Protocol-Version: 2.0.0` and `Linkedin-Version: 202605` headers unless you override them via the\n**Headers** parameter.\n\nQuery string parameters are URL-encoded by default. If you hit `invalid URL` or `invalid URL parameters`\nerrors, enable **Send Unencoded Query String Parameters** to send them as provided instead (you may then need\n`encodeURL()` on individual values yourself).\n\nRefer to the [LinkedIn API documentation](https://learn.microsoft.com/en-us/linkedin/) and the\n[LinkedIn API Versioning Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/versioning) for\navailable endpoints, required parameters, and response schemas.\n',
		accounts: { linkedin2: { scope: [] }, 'linkedin-openid': { scope: [] } },
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
						"Enter a path relative to `https://api.linkedin.com/`. For example: `/rest/organizationAcls`.\nLinkedIn's unversioned API was deprecated from March 2023 and released under a new base path: `https://api.linkedin.com/rest/`. The URL that starts with `/v2` will be converted to `/rest` except `/v2/me`. For more information please visit the [LinkedIn Marketing API Versioning Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/versioning).",
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers — we already did that for you. If you don't set the `X-Restli-Protocol-Version` or `Linkedin-Version` headers here, we'll add them for you with the defaults `2.0.0` and `202605`.",
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
					description:
						'The HTTP request query parameters. By default these are automatically encoded — enable **Send Unencoded Query String Parameters** below to send them as provided instead.',
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
				sendUnencodedQueryString: {
					type: 'boolean',
					description:
						"Setting this to `Yes` will send the **Query String** parameters as provided, without automatic encoding. This may be useful if you're facing `invalid URL` or `invalid URL parameters` errors, but you may need to use the `encodeURL()` function in parts of your **Query String** values to ensure those parts get encoded correctly.",
					default: false,
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
