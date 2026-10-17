// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAssetsInput = Record<string, never>;

export type ListAssetsOutput = Record<string, never>;

/**
 * List assets
 * Returns the metadata and download URLs of files by their asset IDs.
 */
export async function listAssets(
	this: EndpointFunctionThis,
	payload: {
		input: ListAssetsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAssetsOutput> {
	const response = await this.endpointCaller<ListAssetsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listAssets',
		},
		payload,
	);
	return response.output;
}
