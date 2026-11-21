// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFolderInput = {
	id: number;
	email?: string;
	name?: string;
};

export type GetFolderOutput = {
	id?: number;
};

/**
 * Get a folder
 * Retrieves a contact folder with its subscriber counts.
 */
export async function getFolder(
	this: EndpointFunctionThis,
	payload: {
		input: GetFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetFolderOutput> {
	const response = await this.endpointCaller<GetFolderOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'getFolder',
		},
		payload,
	);
	return response.output;
}
