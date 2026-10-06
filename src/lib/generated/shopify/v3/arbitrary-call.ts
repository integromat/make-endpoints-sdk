// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * The GraphQL document to send. It can be a query or a mutation — the field is called **Query** because that is the name of the JSON key Shopify expects. Example: `query { shop { name } }`.
	 */
	query: string;
	/**
	 * The GraphQL variables as a JSON object, for example `{"id": "gid://shopify/Product/123"}`. Pass an object, not a string. Omit it for a document with no variables.
	 */
	variables?: Record<string, JSONValue>;
	/**
	 * The Shopify Admin API version to call, such as `2026-07`. Defaults to `2026-04`, the version the rest of this app targets. See the [API versioning documentation](https://shopify.dev/docs/api/usage/versioning).
	 */
	version?: string;
};

export type ArbitraryCallOutput = {
	/**
	 * The raw GraphQL response body, with `data` and — on partial failures — `errors` and `extensions`. Not flattened, so GraphQL connections keep their `nodes` and `edges` wrappers.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * The HTTP response headers.
	 */
	headers?: Record<string, JSONValue>;
	/**
	 * The HTTP response status code. The GraphQL Admin API answers `200` even for failed operations, so read `body.errors` rather than relying on this.
	 */
	statusCode?: number;
};

/**
 * Arbitrary call
 * Performs an arbitrary authorized API call.
 */
export async function arbitraryCall(
	this: EndpointFunctionThis,
	payload: {
		input: ArbitraryCallInput;
		connectionId: number;
	},
): Promise<ArbitraryCallOutput> {
	const response = await this.endpointCaller<ArbitraryCallOutput>(
		{
			appName: 'shopify',
			appVersion: 3,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
