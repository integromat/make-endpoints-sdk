// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter a path relative to `https://api.linkedin.com/rest`. For example: `/adTargetingFacets`. A full URL (starting with `https://`, `http://` or `//`) is rejected with an error.
	 * The path is sent as written and is not encoded again. With the default `X-Restli-Protocol-Version: 2.0.0` header, percent-encode the reserved characters of a key in the path, for example `/adCampaigns/urn%3Ali%3AsponsoredCampaign%3A123`.
	 */
	url: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * The HTTP request headers. You don't have to add authorization headers — we already did that for you. If you don't set the `X-Restli-Protocol-Version` or `LinkedIn-Version` headers here, we'll add them for you with the defaults `2.0.0` and `202605`.
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
	 * The HTTP request query parameters. By default these are automatically encoded — enable **Send unencoded query string parameters** below to send them as provided instead.
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
	 * The HTTP request body. This input will be ignored if the HTTP request method is `GET`.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * Setting this to `Yes` will send the **Query string** parameters as provided, without automatic encoding. Use it for Rest.li structured values such as `List(urn%3Ali%3AsponsoredAccount%3A123)` or `(start:(year:2024,month:1,day:1))`, which break under standard URL encoding. You may need to percent-encode parts of the values yourself (for example `:` inside URNs as `%3A`).
	 */
	sendUnencodedQueryString?: boolean;
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
): Promise<EndpointResult<ArbitraryCallOutput>> {
	const response = await this.endpointCaller<ArbitraryCallOutput>(
		{
			appName: 'linkedin-ads-reports',
			appVersion: 1,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response;
}
