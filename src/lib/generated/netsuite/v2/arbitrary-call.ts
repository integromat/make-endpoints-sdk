// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArbitraryCallInput = {
	/**
	 * Path relative to `https://{accountId}.suitetalk.api.netsuite.com/services/rest`, for example `/record/v1/metadata-catalog` or `/query/v1/suiteql`. A leading slash is optional. Do not include the host or a query string — put query parameters in the Query string field instead, because they have to be signed with the request.
	 */
	url: string;
	/**
	 * HTTP method for the request. Check the record type's definition before using anything other than GET — not every NetSuite route supports every method, and an unsupported one returns 405.
	 */
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
	/**
	 * Extra request headers. The authorization header, the content type, and the `Prefer` header NetSuite requires are all sent automatically and do not need to be added here.
	 *
	 * Items: A single request header.
	 */
	headers?: {
		/**
		 * Header name, for example `Accept`.
		 */
		key?: string;
		/**
		 * Header value, for example `application/swagger+json`.
		 */
		value?: string;
	}[];
	/**
	 * Query string parameters to append to the URL. Add them here rather than writing them into the URL, so they are included in the request signature. Values are URL-encoded automatically.
	 *
	 * Items: A single query string parameter.
	 */
	qs?: {
		/**
		 * Parameter name, for example `limit`.
		 */
		key?: string;
		/**
		 * Parameter value, for example `10`. Enter it unencoded.
		 */
		value?: string;
	}[];
	/**
	 * Request body as a JSON object; a JSON string is accepted too, for example `{"companyName": "Acme Ltd"}`. Leave empty for requests that take no body, such as GET and DELETE. Invalid JSON fails before the request is sent.
	 */
	body?: Record<string, JSONValue>;
};

export type ArbitraryCallOutput = {
	/**
	 * Parsed response body returned by NetSuite. Empty for responses that carry no content, such as the 204 returned by a successful write.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * Response headers. Worth reading on write calls: `location` carries the new record's URL, and `x-netsuite-warning` and `x-netsuite-propertyvalidation` report fields NetSuite ignored.
	 */
	headers?: Record<string, JSONValue>;
	/**
	 * HTTP status code of the response. Writes typically return 204 with no body rather than 200.
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
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
