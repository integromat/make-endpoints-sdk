// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type MakeRequestInput = {
	/**
	 * Enter the complete HTTPS URL.
	 */
	url: string;
	method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
	headers?: {
		key: string;
		value: string;
	}[];
	qs?: {
		key: string;
		value: string;
	}[];
	body?: Record<string, JSONValue>;
};

export type MakeRequestOutput = {
	statusCode?: number;
	headers?: Record<string, JSONValue>;
	data?: Record<string, JSONValue>;
	/**
	 * Present as base64 only when data contains an encoded binary response.
	 */
	dataEncoding?: string;
};

/**
 * Make a request
 * Makes an arbitrary HTTPS request using a saved HTTP connection.
 */
export async function makeRequest(
	this: EndpointFunctionThis,
	payload: {
		input: MakeRequestInput;
		connectionId: number;
	},
): Promise<MakeRequestOutput> {
	const response = await this.endpointCaller<MakeRequestOutput>(
		{
			appName: 'http',
			appVersion: 4,
			endpointName: 'makeRequest',
		},
		payload,
	);
	return response.output;
}
