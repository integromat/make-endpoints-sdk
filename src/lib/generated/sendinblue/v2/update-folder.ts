// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UpdateFolderInput = {
	id: number;
	email?: string;
	name?: string;
};

export type UpdateFolderOutput = {
	id?: number;
};

/**
 * Update a folder
 * Renames a contact folder.
 */
export async function updateFolder(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdateFolderOutput>> {
	const response = await this.endpointCaller<UpdateFolderOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'updateFolder',
		},
		payload,
	);
	return response;
}
