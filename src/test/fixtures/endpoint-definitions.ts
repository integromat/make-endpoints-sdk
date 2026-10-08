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

export const ALPHA_V1_GET_ITEM: EndpointDefinition = {
	appName: 'alpha',
	appVersion: 1,
	endpointName: 'getItem',
	label: 'Get an item (v1)',
	connectionTypes: ['alpha'],
	inputSchema: GET_ITEM_SCHEMA,
};

export const ALPHA_V2_GET_ITEM: EndpointDefinition = {
	appName: 'alpha',
	appVersion: 2,
	endpointName: 'getItem',
	label: 'Get an item',
	description: 'Gets an item by its ID.',
	connectionTypes: ['alpha', 'alpha-oauth'],
	annotations: { readOnlyHint: true },
	inputSchema: GET_ITEM_SCHEMA,
};

export const ALPHA_V2_LEGACY_CALL: EndpointDefinition = {
	appName: 'alpha',
	appVersion: 2,
	endpointName: 'LegacyCall',
	deprecated: true,
	connectionTypes: ['alpha'],
	inputSchema: { type: 'object', properties: {}, additionalProperties: false },
};

export const BETA_V1_LIST_THINGS: EndpointDefinition = {
	appName: 'beta',
	appVersion: 1,
	endpointName: 'listThings',
	label: 'List things',
	connectionTypes: [],
	inputSchema: {
		type: 'object',
		properties: {
			includeArchived: { type: 'boolean' },
			limit: { type: 'integer', description: 'Maximum number of things.' },
			tags: { type: 'array', items: { type: 'string' } },
			output: { type: 'string', description: 'Clashes with the global --output flag.' },
		},
	},
};

export const DEFINITIONS: EndpointDefinition[] = [
	ALPHA_V1_GET_ITEM,
	ALPHA_V2_GET_ITEM,
	ALPHA_V2_LEGACY_CALL,
	BETA_V1_LIST_THINGS,
];
