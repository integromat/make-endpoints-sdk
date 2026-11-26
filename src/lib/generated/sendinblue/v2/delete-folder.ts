// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteFolderInput = {
	id: number;
	email?: string;
	name?: string;
};

export type DeleteFolderOutput = {
	id?: number;
};

/**
 * Delete a folder
 * Deletes a contact folder together with all lists inside it.
 */
export async function deleteFolder(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeleteFolderOutput>> {
	const response = await this.endpointCaller<DeleteFolderOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'deleteFolder',
		},
		payload,
	);
	return response;
}
