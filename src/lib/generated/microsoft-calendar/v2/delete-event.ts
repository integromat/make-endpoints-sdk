// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteEventInput = {
	/**
	 * The unique identifier of the event to delete.
	 */
	event: string;
};

export type DeleteEventOutput = Record<string, never>;

/**
 * Delete an event
 * Deletes an event from its calendar.
 */
export async function deleteEvent(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteEventInput;
		connectionId: number;
	},
): Promise<DeleteEventOutput> {
	const response = await this.endpointCaller<DeleteEventOutput>(
		{
			appName: 'microsoft-calendar',
			appVersion: 2,
			endpointName: 'deleteEvent',
		},
		payload,
	);
	return response.output;
}
