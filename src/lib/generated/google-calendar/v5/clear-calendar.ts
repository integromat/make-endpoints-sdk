// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ClearCalendarInput = Record<string, never>;

export type ClearCalendarOutput = Record<string, never>;

/**
 * Clear a calendar
 * Clears all events from a primary calendar.
 */
export async function clearCalendar(
	this: EndpointFunctionThis,
	payload: {
		input: ClearCalendarInput;
		connectionId: number;
	},
): Promise<ClearCalendarOutput> {
	const response = await this.endpointCaller<ClearCalendarOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'clearCalendar',
		},
		payload,
	);
	return response.output;
}
