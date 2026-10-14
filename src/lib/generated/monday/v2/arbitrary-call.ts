// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ArbitraryCallInput = Record<string, never>;

export type ArbitraryCallOutput = Record<string, never>;

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
			appName: 'monday',
			appVersion: 2,
			endpointName: 'arbitraryCall',
		},
		payload,
	);
	return response.output;
}
