// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListListsInFolderInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ListListsInFolderOutput = {
	id?: number;
};

/**
 * List lists in a folder
 * Retrieves one page of contact lists in a folder.
 */
export async function listListsInFolder(
	this: EndpointFunctionThis,
	payload: {
		input: ListListsInFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListListsInFolderOutput> {
	const response = await this.endpointCaller<ListListsInFolderOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'listListsInFolder',
		},
		payload,
	);
	return response.output;
}
