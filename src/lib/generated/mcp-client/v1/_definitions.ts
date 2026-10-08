// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'mcp-client',
		appVersion: 1,
		endpointName: 'toolsCall',
		label: 'Call a tool',
		description: 'Calls one tool on the connected MCP server.',
		context:
			'---\nname: toolsCall\ndescription: This endpoint can be used to call a tool on the connected MCP server\n---\n\nCalls a single tool by name. Get the tool names and their argument schemas from the `toolsList` endpoint first, then send the arguments that match the schema of the tool.\n\nA tool which fails returns `isError: true` together with the message. It does not fail the call.',
		accounts: { mcp: { scope: [] } },
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
				name: {
					type: 'string',
					description:
						'Name of the tool to call, as returned by the `toolsList` endpoint.',
				},
				arguments: {
					description:
						'Arguments for the tool, as a JSON object. They must match the `inputSchema` the `toolsList` endpoint returns for the tool.',
					type: 'object',
					additionalProperties: true,
					'x-json': true,
				},
			},
			required: ['name'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				isError: {
					type: 'boolean',
					description:
						'True when the tool reported a failure. Read `content` for the message. Absent or false means the tool succeeded.',
				},
				content: {
					type: 'array',
					description:
						'Content blocks the tool returned, as the server sent them. Each block has a `type` of `text`, `image`, `audio`, `resource_link` or `resource`, and carries the fields of that MCP content block type. No `spec` is declared, because a block type newer than this app has to reach the caller unchanged.',
				},
				structuredContent: {
					type: 'object',
					description:
						'Structured result, present when the tool declares an output schema.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				_meta: {
					type: 'object',
					description: 'Metadata the server attached to the response.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'mcp-client',
		appVersion: 1,
		endpointName: 'toolsList',
		label: 'List tools',
		description: 'Returns the tools the connected MCP server offers.',
		context:
			'---\nname: toolsList\ndescription: This endpoint can be used to discover the tools an MCP server offers\n---\n\nLists the tools exposed by the MCP server the connection points at. Every tool is returned with its JSON Schema input schema, so a tool can be called afterwards.',
		accounts: { mcp: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				cursor: {
					type: 'string',
					description:
						'Pagination cursor returned as `nextCursor` by a previous call. Leave empty to get the first page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				tools: {
					type: 'array',
					description:
						'Tools the server exposes. Every tool is returned as the server sent it, so a tool can carry fields this list does not name.',
					items: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
								description: 'Unique name of the tool. Use it to call the tool.',
							},
							description: { type: 'string', description: 'What the tool does.' },
							inputSchema: {
								type: 'object',
								description: 'JSON Schema of the arguments the tool accepts.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							annotations: {
								type: 'object',
								description:
									'Hints about the behaviour of the tool. Hints are not guarantees.',
								properties: {
									readOnlyHint: { type: 'boolean' },
									destructiveHint: { type: 'boolean' },
									idempotentHint: { type: 'boolean' },
									openWorldHint: { type: 'boolean' },
								},
								required: [],
							},
							outputSchema: {
								type: 'object',
								description:
									'JSON Schema of the structured result the tool returns. Present only when the tool declares one.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							icons: { type: 'array', description: 'Icons the tool publishes.' },
							_meta: {
								type: 'object',
								description: 'Metadata the server attached to the tool.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				nextCursor: {
					type: 'string',
					description:
						'Present when more tools are available. Pass it as `cursor` to get the next page.',
				},
				_meta: {
					type: 'object',
					description: 'Metadata the server attached to the response.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
];
