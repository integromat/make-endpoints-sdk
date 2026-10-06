// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter a path relative to the Typeform API base URL. The base URL depends on your connection region: `https://api.typeform.com` (US / default), `https://api.eu.typeform.com` (EU), or `https://api.typeform.eu` (EU New). For example, `/forms`.
	 */
	url: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * The HTTP request headers. You don't have to add authorization headers; we already did that for you.
	 */
	headers?: {
		/**
		 * The HTTP request header key.
		 */
		key?: string;
		/**
		 * The HTTP request header value.
		 */
		value?: string;
	}[];
	/**
	 * The HTTP request query parameters.
	 */
	qs?: {
		/**
		 * The HTTP request query parameter's key.
		 */
		key?: string;
		/**
		 * The HTTP request query parameter's value.
		 */
		value?: string;
	}[];
	/**
	 * The HTTP request body. This input will be ignored if the HTTP request method is `GET`.
	 */
	body?: Record<string, JSONValue>;
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
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
