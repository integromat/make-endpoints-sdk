// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DuplicateItemInput = Record<string, never>;

export type DuplicateItemOutput = Record<string, never>;

/**
 * Duplicate an item
 * Duplicates an item and its subitems on the same board.
 */
export async function duplicateItem(
	this: EndpointFunctionThis,
	payload: {
		input: DuplicateItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DuplicateItemOutput> {
	const response = await this.endpointCaller<DuplicateItemOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'duplicateItem',
		},
		payload,
	);
	return response.output;
}
