// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter a path relative to `https://api.linkedin.com/`. For example: `/rest/organizationAcls`.
	 * LinkedIn's unversioned API was deprecated from March 2023 and released under a new base path: `https://api.linkedin.com/rest/`. The URL that starts with `/v2` will be converted to `/rest` except `/v2/me`. For more information please visit the [LinkedIn Marketing API Versioning Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/versioning).
	 */
	url: string;
	/**
	 * The HTTP request method.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	/**
	 * The HTTP request headers. You don't have to add authorization headers — we already did that for you. If you don't set the `X-Restli-Protocol-Version` or `Linkedin-Version` headers here, we'll add them for you with the defaults `2.0.0` and `202605`.
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
	 * The HTTP request query parameters. By default these are automatically encoded — enable **Send Unencoded Query String Parameters** below to send them as provided instead.
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
	 * Setting this to `Yes` will send the **Query String** parameters as provided, without automatic encoding. This may be useful if you're facing `invalid URL` or `invalid URL parameters` errors, but you may need to use the `encodeURL()` function in parts of your **Query String** values to ensure those parts get encoded correctly.
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
	},
): Promise<ArbitraryCallOutput> {
	const response = await this.endpointCaller<ArbitraryCallOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
