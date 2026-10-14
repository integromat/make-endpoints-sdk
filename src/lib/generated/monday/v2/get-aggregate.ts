// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAggregateInput = Record<string, never>;

export type GetAggregateOutput = Record<string, never>;

/**
 * Get an aggregate
 * Runs an aggregation (sum, average, count, min, max, …) over the items of a board, optionally grouped and filtered.
 */
export async function getAggregate(
	this: EndpointFunctionThis,
	payload: {
		input: GetAggregateInput;
		connectionId: number;
	},
): Promise<GetAggregateOutput> {
	const response = await this.endpointCaller<GetAggregateOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getAggregate',
		},
		payload,
	);
	return response.output;
}
