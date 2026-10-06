// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteRevisionInput = {
	/**
	 * The ID of the file.
	 */
	fileId: string;
	/**
	 * The ID of the revision to permanently delete.
	 */
	revisionId: string;
};

export type DeleteRevisionOutput = Record<string, never>;

/**
 * Delete a file revision
 * Permanently deletes a file revision.
 */
export async function deleteRevision(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteRevisionInput;
		connectionId: number;
	},
): Promise<DeleteRevisionOutput> {
	const response = await this.endpointCaller<DeleteRevisionOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'deleteRevision',
		},
		payload,
	);
	return response.output;
}
