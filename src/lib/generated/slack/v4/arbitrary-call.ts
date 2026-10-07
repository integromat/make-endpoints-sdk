// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter the part of the URL that comes after `https://slack.com/api/`. For example, `conversations.list`.
	 */
	url: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * The HTTP request headers. You don't have to add authorization headers; we already did that for you.
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
	 * The HTTP request body. This input is ignored if the HTTP request method is `GET`.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * The base URL to send the request against. Most Slack Web API methods use the default; incoming webhook calls use `https://hooks.slack.com/`.
	 */
	domain?: '' | 'https://slack.com/api/' | 'https://hooks.slack.com/';
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
			appName: 'slack',
			appVersion: 4,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
