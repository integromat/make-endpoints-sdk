// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteNoteInput = {
	/**
	 * The record ID of the note to delete.
	 */
	id: string;
};

export type DeleteNoteOutput = Record<string, never>;

/**
 * Delete a note
 * Moves a note engagement to the recycling bin.
 */
export async function deleteNote(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteNoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteNoteOutput> {
	const response = await this.endpointCaller<DeleteNoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteNote',
		},
		payload,
	);
	return response.output;
}
