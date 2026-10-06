// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteEventInput = {
	/**
	 * The identifier of the calendar containing the event.
	 */
	calendarId: string;
	/**
	 * The identifier of the event to delete.
	 */
	eventId: string;
	/**
	 * Whether to send notifications about the event.
	 */
	sendUpdates?: '' | 'all' | 'externalOnly' | 'none';
};

export type DeleteEventOutput = Record<string, never>;

/**
 * Delete an event
 * Deletes an event from the specified calendar.
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
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'deleteEvent',
		},
		payload,
	);
	return response.output;
}
