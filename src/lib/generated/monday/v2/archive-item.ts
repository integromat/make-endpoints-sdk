// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ArchiveItemInput = Record<string, never>;

export type ArchiveItemOutput = Record<string, never>;

/**
 * Archive an item
 * Archives an item or subitem and its nested subitems.
 */
export async function archiveItem(
	this: EndpointFunctionThis,
	payload: {
		input: ArchiveItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ArchiveItemOutput> {
	const response = await this.endpointCaller<ArchiveItemOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'archiveItem',
		},
		payload,
	);
	return response.output;
}
