// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Enter the part of the URL that comes after `https://api.dropboxapi.com`. For example, `/2/users/get_current_account`.
	 */
	url: string;
	/**
	 * The HTTP request method. Dropbox RPC endpoints use POST.
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
	 * The HTTP request body. This input will be ignored if the HTTP request method is `GET`. When a Dropbox RPC endpoint takes no arguments, send `null`.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * Set to `true` to omit the `Dropbox-API-Path-Root` header. Set to `false` to root the call to the connection's root namespace. See the [Dropbox Path Root Header Modes](https://docs.dropboxapi.com/dropbox-api/docs/technical-reference/path-root-header-modes) guide.
	 */
	disablePathRoot?: boolean;
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
			appName: 'dropbox',
			appVersion: 5,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
