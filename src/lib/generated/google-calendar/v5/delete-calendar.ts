// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCalendarInput = {
	/**
	 * The identifier of the secondary calendar to delete.
	 */
	calendarId: string;
};

export type DeleteCalendarOutput = Record<string, never>;

/**
 * Delete a calendar
 * Deletes a secondary calendar.
 */
export async function deleteCalendar(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCalendarInput;
		connectionId: number;
	},
): Promise<DeleteCalendarOutput> {
	const response = await this.endpointCaller<DeleteCalendarOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'deleteCalendar',
		},
		payload,
	);
	return response.output;
}
