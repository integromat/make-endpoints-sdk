// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAssetInput = {
	/**
	 * Unique identifier for an asset. Use the `listAssets` endpoint to find it.
	 */
	asset_id: string;
};

export type DeleteAssetOutput = Record<string, never>;

/**
 * Delete an asset
 * Deletes an asset from a site.
 */
export async function deleteAsset(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAssetInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAssetOutput> {
	const response = await this.endpointCaller<DeleteAssetOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'deleteAsset',
		},
		payload,
	);
	return response.output;
}
