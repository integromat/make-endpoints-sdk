// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Path relative to `https://api.hubapi.com`. For example, `/crm/v3/owners/`.
	 */
	url: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * HTTP request headers. Authorization is added automatically. `Content-Type` defaults to `application/json` unless set here.
	 */
	headers?: {
		/**
		 * The HTTP request header name.
		 */
		key: string;
		/**
		 * The HTTP request header value.
		 */
		value?: string;
	}[];
	/**
	 * HTTP request query parameters.
	 */
	qs?: {
		/**
		 * The query parameter name.
		 */
		key: string;
		/**
		 * The query parameter value.
		 */
		value?: string;
	}[];
	/**
	 * The HTTP request body, as a JSON object. A JSON string is not supported and HubSpot returns a `400` error. Ignored for `GET` requests.
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
 * Performs an arbitrary authorized API call to the HubSpot CRM API, similar to the app's "Make an API Call" module.
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
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
