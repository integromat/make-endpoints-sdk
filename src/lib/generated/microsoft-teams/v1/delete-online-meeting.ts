// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteOnlineMeetingInput = {
	/**
	 * The unique identifier of the online meeting to delete.
	 */
	meetingId: string;
};

export type DeleteOnlineMeetingOutput = Record<string, never>;

/**
 * Delete an online meeting
 * Deletes an online meeting.
 */
export async function deleteOnlineMeeting(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteOnlineMeetingInput;
		connectionId: number;
	},
): Promise<DeleteOnlineMeetingOutput> {
	const response = await this.endpointCaller<DeleteOnlineMeetingOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'deleteOnlineMeeting',
		},
		payload,
	);
	return response.output;
}
