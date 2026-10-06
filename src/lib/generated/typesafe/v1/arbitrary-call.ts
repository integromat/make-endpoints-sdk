// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter a path relative to `https://api.typesafe.ai`. For example: `/v1/systemone`.
	 */
	url: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * You don't have to add authorization headers; we already did that for you.
	 */
	headers?: {
		/**
		 * Header name.
		 */
		key?: string;
		/**
		 * Header value.
		 */
		value?: string;
	}[];
	/**
	 * The HTTP request query parameters.
	 */
	qs?: {
		/**
		 * Query parameter name.
		 */
		key?: string;
		/**
		 * Query parameter value.
		 */
		value?: string;
	}[];
	/**
	 * The HTTP request body. Ignored if the method is GET.
	 */
	body?: string;
};

export type ArbitraryCallOutput = {
	/**
	 * The HTTP response body.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * The HTTP response headers.
	 */
	headers?: Record<string, JSONValue>;
	/**
	 * The HTTP response status code.
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
			appName: 'typesafe',
			appVersion: 1,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
