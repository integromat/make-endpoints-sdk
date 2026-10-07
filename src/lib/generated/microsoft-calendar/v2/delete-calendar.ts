// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCalendarInput = {
	/**
	 * The unique identifier of the calendar to delete. The default calendar cannot be deleted.
	 */
	calendar: string;
};

export type DeleteCalendarOutput = Record<string, never>;

/**
 * Delete a calendar
 * Deletes a calendar other than the default calendar.
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
			appName: 'microsoft-calendar',
			appVersion: 2,
			endpointName: 'deleteCalendar',
		},
		payload,
	);
	return response.output;
}
