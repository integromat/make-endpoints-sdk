// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteMeetingInput = {
	/**
	 * The record ID of the meeting to delete.
	 */
	id: string;
};

export type DeleteMeetingOutput = Record<string, never>;

/**
 * Delete a meeting
 * Moves a meeting engagement to the recycling bin.
 */
export async function deleteMeeting(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteMeetingInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteMeetingOutput> {
	const response = await this.endpointCaller<DeleteMeetingOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteMeeting',
		},
		payload,
	);
	return response.output;
}
