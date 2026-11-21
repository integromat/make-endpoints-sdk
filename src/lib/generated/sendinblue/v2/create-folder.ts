// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateFolderInput = {
	id: number;
	email?: string;
	name?: string;
};

export type CreateFolderOutput = {
	id?: number;
};

/**
 * Create a folder
 * Creates a contact folder.
 */
export async function createFolder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateFolderOutput> {
	const response = await this.endpointCaller<CreateFolderOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'createFolder',
		},
		payload,
	);
	return response.output;
}
