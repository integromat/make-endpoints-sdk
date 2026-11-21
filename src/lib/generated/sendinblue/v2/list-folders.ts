// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListFoldersInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ListFoldersOutput = {
	id?: number;
};

/**
 * List folders
 * Retrieves one page of contact folders.
 */
export async function listFolders(
	this: EndpointFunctionThis,
	payload: {
		input: ListFoldersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListFoldersOutput> {
	const response = await this.endpointCaller<ListFoldersOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'listFolders',
		},
		payload,
	);
	return response.output;
}
