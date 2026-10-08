// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'http',
		appVersion: 4,
		endpointName: 'makeRequest',
		label: 'Make a request',
		description: 'Makes an arbitrary HTTPS request using a saved HTTP connection.',
		context:
			'---\nname: makeRequest\ndescription: Make an HTTPS request using an API key, Basic Auth or existing OAuth connection.\n---\n\nUse an authorized connectionId. New HTTP API-key and Basic connections enforce their configured service origins. Existing OAuth connections retain their existing destination contract. Credentials are not endpoint inputs. Binary data is base64 with dataEncoding.',
		accounts: {
			'http-v4-apikey': { scope: [] },
			'http-v4-basicauth': { scope: [] },
			oauth2: { scope: [] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: true,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: { type: 'string', description: 'Enter the complete HTTPS URL.' },
				method: {
					type: 'string',
					enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
				},
				headers: {
					type: 'array',
					items: {
						type: 'object',
						properties: { key: { type: 'string' }, value: { type: 'string' } },
						required: ['key', 'value'],
					},
				},
				qs: {
					type: 'array',
					items: {
						type: 'object',
						properties: { key: { type: 'string' }, value: { type: 'string' } },
						required: ['key', 'value'],
					},
				},
				body: {},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				statusCode: { type: 'number' },
				headers: {
					type: 'object',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				data: {},
				dataEncoding: {
					type: 'string',
					description:
						'Present as base64 only when data contains an encoded binary response.',
				},
			},
			required: [],
		},
	},
];
