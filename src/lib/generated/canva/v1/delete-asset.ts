// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAssetInput = {
	/**
	 * The ID of the asset to delete. Deleting an asset doesn't remove it from designs that already use it.
	 */
	assetId: string;
};

export type DeleteAssetOutput = Record<string, never>;

/**
 * Delete an asset
 * Deletes an asset from the user's projects.
 */
export async function deleteAsset(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAssetInput;
		connectionId: number;
	},
): Promise<DeleteAssetOutput> {
	const response = await this.endpointCaller<DeleteAssetOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'deleteAsset',
		},
		payload,
	);
	return response.output;
}
