// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DuplicateGroupInput = Record<string, never>;

export type DuplicateGroupOutput = Record<string, never>;

/**
 * Duplicate a group
 * Duplicates a group and all of its items.
 */
export async function duplicateGroup(
	this: EndpointFunctionThis,
	payload: {
		input: DuplicateGroupInput;
		connectionId: number;
	},
): Promise<DuplicateGroupOutput> {
	const response = await this.endpointCaller<DuplicateGroupOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'duplicateGroup',
		},
		payload,
	);
	return response.output;
}
