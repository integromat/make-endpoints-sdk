// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteANoteInput = {
	/**
	 * The resource name of the note to delete. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.
	 */
	name: string;
};

export type DeleteANoteOutput = Record<string, never>;

/**
 * Delete a note
 * Permanently deletes a note.
 */
export async function deleteAnote(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteANoteInput;
		connectionId: number;
	},
): Promise<DeleteANoteOutput> {
	const response = await this.endpointCaller<DeleteANoteOutput>(
		{
			appName: 'google-keep',
			appVersion: 1,
			endpointName: 'deleteANote',
		},
		payload,
	);
	return response.output;
}
