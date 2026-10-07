// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createCalendar } from './create-calendar.ts';
import { createEvent } from './create-event.ts';
import { deleteCalendar } from './delete-calendar.ts';
import { deleteEvent } from './delete-event.ts';
import { getCalendar } from './get-calendar.ts';
import { getEvent } from './get-event.ts';
import { listCalendars } from './list-calendars.ts';
import { listEvents } from './list-events.ts';
import { updateCalendar } from './update-calendar.ts';
import { updateEvent } from './update-event.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateCalendarInput, CreateCalendarOutput } from './create-calendar.ts';
export type { CreateEventInput, CreateEventOutput } from './create-event.ts';
export type { DeleteCalendarInput, DeleteCalendarOutput } from './delete-calendar.ts';
export type { DeleteEventInput, DeleteEventOutput } from './delete-event.ts';
export type { GetCalendarInput, GetCalendarOutput } from './get-calendar.ts';
export type { GetEventInput, GetEventOutput } from './get-event.ts';
export type { ListCalendarsInput, ListCalendarsOutput } from './list-calendars.ts';
export type { ListEventsInput, ListEventsOutput } from './list-events.ts';
export type { UpdateCalendarInput, UpdateCalendarOutput } from './update-calendar.ts';
export type { UpdateEventInput, UpdateEventOutput } from './update-event.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createCalendar: createCalendar.bind({ endpointCaller }),
		createEvent: createEvent.bind({ endpointCaller }),
		deleteCalendar: deleteCalendar.bind({ endpointCaller }),
		deleteEvent: deleteEvent.bind({ endpointCaller }),
		getCalendar: getCalendar.bind({ endpointCaller }),
		getEvent: getEvent.bind({ endpointCaller }),
		listCalendars: listCalendars.bind({ endpointCaller }),
		listEvents: listEvents.bind({ endpointCaller }),
		updateCalendar: updateCalendar.bind({ endpointCaller }),
		updateEvent: updateEvent.bind({ endpointCaller }),
	};
};

export class MicrosoftCalendarV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
