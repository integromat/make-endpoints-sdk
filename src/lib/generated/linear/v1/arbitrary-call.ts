// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * HTTP method. Use GET for an introspection query string, or POST for a query or mutation body.
	 */
	method: 'GET' | 'POST';
};

export type ArbitraryCallOutput = {
	/**
	 * GraphQL response body, including `data` and any `errors`.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * HTTP response headers.
	 */
	headers?: Record<string, JSONValue>;
	/**
	 * HTTP response status code. Linear often returns 200 even when `errors` is present. Rate limits use 400.
	 */
	statusCode?: number;
};

/**
 * Arbitrary call
 * Performs an arbitrary authorized GraphQL query.
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
			appName: 'linear',
			appVersion: 1,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
