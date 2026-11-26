// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ArbitraryCallInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ArbitraryCallOutput = {
	id?: number;
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
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response;
}
