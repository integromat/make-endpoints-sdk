export type JSONValue =
	| Partial<{
			[key: string]: JSONValue;
	  }>
	| JSONValue[]
	| string
	| number
	| boolean
	| null
	| undefined;

export type EndpointPointer = {
	appName: string;
	appVersion: number;
	endpointName: string;
};

export type EndpointOptions = {
	input?: JSONValue;
	connectionId?: number;
	/**
	 * Run confidentially, like a scenario with "Data is confidential": Make keeps no input, output or
	 * error data of the execution in its Endpoint execution log, only metadata. Defaults to false.
	 */
	confidential?: boolean;
	/**
	 * Makes the call safe to retry: within the team, Make runs the endpoint once per key and returns
	 * the outcome of that run for every repeat of the key. 1 to 255 characters of letters, digits,
	 * `_`, `.`, `:` and `-`. Travels beside `input`, never inside it.
	 */
	idempotencyKey?: string;
};

/**
 * What Make reports about an execution; servers that predate it send none. `id` is the execution's
 * id in the Endpoint execution log. `replayed`: the output comes from the earlier run that holds
 * the idempotency key, so the endpoint did not run again. `confidential`: Make stored no run data.
 */
export type EndpointExecution = {
	id: string;
	replayed?: true;
	confidential?: true;
};

export type EndpointCaller = <OUTPUT>(
	pointer: EndpointPointer,
	options: EndpointOptions,
) => Promise<{ output: OUTPUT; execution?: EndpointExecution }>;

export type EndpointFunctionThis = {
	endpointCaller: EndpointCaller;
};

/**
 * JSON Schema of an endpoint's input or output, normalized the same way as the generated
 * `<Endpoint>Input` and `<Endpoint>Output` types (titles stripped, `oneOf` of bare `const` branches
 * rewritten to `enum`).
 */
export type EndpointJsonSchema = Record<string, JSONValue>;

/**
 * A connection type the endpoint accepts, as the manifest declares it under `accounts[type]`: the
 * OAuth scopes a connection of that type needs for this endpoint.
 */
export type EndpointAccount = {
	scope?: string[];
};

/**
 * Behavioral hints from the endpoint manifest. The first four have MCP tool annotation semantics;
 * `arbitraryCallHint` is Make's own and marks an endpoint that performs an API call the caller
 * specifies, such as `arbitraryCall`.
 */
export type EndpointAnnotations = {
	readOnlyHint?: boolean;
	destructiveHint?: boolean;
	idempotentHint?: boolean;
	openWorldHint?: boolean;
	arbitraryCallHint?: boolean;
};

/**
 * Metadata of one generated endpoint, for tooling such as the CLI. It carries what the Make MCP
 * Server exposes for an endpoint, so tooling built on it can offer the same information. The SDK
 * itself never loads it.
 */
export type EndpointDefinition = EndpointPointer & {
	label?: string;
	description?: string;
	/** Longer guidance for agents, meant to be shown after the description. */
	context?: string;
	deprecated?: boolean;
	/**
	 * Manifest `accounts`: the connection types the endpoint accepts, keyed by type. Empty when the
	 * endpoint takes no `connectionId`.
	 */
	accounts: Record<string, EndpointAccount>;
	annotations?: EndpointAnnotations;
	inputSchema: EndpointJsonSchema;
	outputSchema: EndpointJsonSchema;
};
