import type { EndpointDefinition } from '../../lib/shared.ts';

// Hand-written definitions shaped like generated ones. Specs must not depend on real generated
// endpoints, which the automated sync can change or remove at any time.

const GET_ITEM_SCHEMA = {
	type: 'object',
	properties: {
		itemId: { type: 'string', description: 'ID of the item.' },
		teamId: {
			type: 'string',
			description: 'An input field that clashes with a tool argument.',
		},
	},
	required: ['itemId', 'teamId'],
	additionalProperties: false,
};

const ITEM_SCHEMA = {
	type: 'object',
	properties: { id: { type: 'string', description: 'ID of the item.' } },
};

export const ALPHA_V1_GET_ITEM: EndpointDefinition = {
	appName: 'alpha',
	appVersion: 1,
	endpointName: 'getItem',
	label: 'Get an item (v1)',
	accounts: { alpha: { scope: ['items:read'] } },
	inputSchema: GET_ITEM_SCHEMA,
	outputSchema: ITEM_SCHEMA,
};

export const ALPHA_V2_GET_ITEM: EndpointDefinition = {
	appName: 'alpha',
	appVersion: 2,
	endpointName: 'getItem',
	label: 'Get an item',
	description: 'Gets an item by its ID.',
	context: 'Prefer this over LegacyCall.',
	accounts: { alpha: { scope: ['items:read'] }, 'alpha-oauth': { scope: ['items:read', 'profile'] } },
	annotations: { readOnlyHint: true },
	inputSchema: GET_ITEM_SCHEMA,
	outputSchema: ITEM_SCHEMA,
};

export const ALPHA_V2_LEGACY_CALL: EndpointDefinition = {
	appName: 'alpha',
	appVersion: 2,
	endpointName: 'LegacyCall',
	deprecated: true,
	accounts: { alpha: {} },
	inputSchema: { type: 'object', properties: {}, additionalProperties: false },
	outputSchema: { type: 'object', properties: {}, additionalProperties: false },
};

export const BETA_V1_LIST_THINGS: EndpointDefinition = {
	appName: 'beta',
	appVersion: 1,
	endpointName: 'listThings',
	label: 'List things',
	accounts: {},
	inputSchema: {
		type: 'object',
		properties: {
			includeArchived: { type: 'boolean' },
			limit: { type: 'integer', description: 'Maximum number of things.' },
			tags: { type: 'array', items: { type: 'string' } },
			output: { type: 'string', description: 'Clashes with the global --output flag.' },
		},
	},
	outputSchema: { type: 'object', properties: { things: { type: 'array' } } },
};

export const DEFINITIONS: EndpointDefinition[] = [
	ALPHA_V1_GET_ITEM,
	ALPHA_V2_GET_ITEM,
	ALPHA_V2_LEGACY_CALL,
	BETA_V1_LIST_THINGS,
];
