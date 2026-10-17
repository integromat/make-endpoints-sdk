// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DuplicateBoardInput = Record<string, never>;

export type DuplicateBoardOutput = Record<string, never>;

/**
 * Duplicate a board
 * Duplicates a board with its structure and optionally its items and updates.
 */
export async function duplicateBoard(
	this: EndpointFunctionThis,
	payload: {
		input: DuplicateBoardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DuplicateBoardOutput> {
	const response = await this.endpointCaller<DuplicateBoardOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'duplicateBoard',
		},
		payload,
	);
	return response.output;
}
