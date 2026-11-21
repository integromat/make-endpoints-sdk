// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter the part of the URL that comes after `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/`. The host follows the connection region (`api.twilio.com`, `api.dublin.ie1.twilio.com`, or `api.sydney.au1.twilio.com`). For example, `Calls.json`.
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
	 * The HTTP request body. For POST and PUT requests, pass a form-encoded string, for example `To=%2B15558675310&From=%2B15017122661&Body=Hi`. This input will be ignored if the HTTP request method is `GET`.
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
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ArbitraryCallOutput> {
	const response = await this.endpointCaller<ArbitraryCallOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
