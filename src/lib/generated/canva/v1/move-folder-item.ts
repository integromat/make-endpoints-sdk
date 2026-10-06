// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type MoveFolderItemInput = {
	/**
	 * The ID of the folder to move the item to.
	 */
	to_folder_id: string;
	/**
	 * The ID of the item to move.
	 */
	item_id: string;
};

export type MoveFolderItemOutput = Record<string, never>;

/**
 * Move a folder item
 * Moves an item from one folder to another.
 */
export async function moveFolderItem(
	this: EndpointFunctionThis,
	payload: {
		input: MoveFolderItemInput;
		connectionId: number;
	},
): Promise<MoveFolderItemOutput> {
	const response = await this.endpointCaller<MoveFolderItemOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'moveFolderItem',
		},
		payload,
	);
	return response.output;
}
