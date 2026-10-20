// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ChangeMultipleColumnValuesInput = Record<string, never>;

export type ChangeMultipleColumnValuesOutput = Record<string, never>;

/**
 * Change multiple column values
 * Updates one or more column values of an item.
 */
export async function changeMultipleColumnValues(
	this: EndpointFunctionThis,
	payload: {
		input: ChangeMultipleColumnValuesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ChangeMultipleColumnValuesOutput> {
	const response = await this.endpointCaller<ChangeMultipleColumnValuesOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'changeMultipleColumnValues',
		},
		payload,
	);
	return response.output;
}
