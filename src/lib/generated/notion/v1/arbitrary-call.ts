// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter a path relative to `https://api.notion.com`. For example, `/v1/users`.
	 */
	url: string;
	/**
	 * The API version sent in the `Notion-Version` header. Defaults to `2026-03-11`. See [Versioning](https://developers.notion.com/reference/versioning).
	 */
	version?: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * You don't have to add authorization headers; we already did that for you.
	 *
	 * Items: The HTTP request header.
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
	 *
	 * Items: The HTTP request query parameter.
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
	 * The HTTP request body, sent to the API exactly as provided. It must be a **JSON string**, not a structured object — for example `{"parent": {"page_id": "..."}, "properties": {}}` passed as text. Passing an object fails with `[400] Error parsing JSON body`. This input is ignored when the HTTP request method is `GET`.
	 */
	body?: Record<string, JSONValue>;
};

export type ArbitraryCallOutput = {
	/**
	 * The HTTP response body returned by the Notion API.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * The HTTP response headers returned by the Notion API.
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
			appName: 'notion',
			appVersion: 1,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
