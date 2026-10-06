// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { clearCalendar } from './clear-calendar.ts';
import { createAclRule } from './create-acl-rule.ts';
import { createCalendar } from './create-calendar.ts';
import { createEvent } from './create-event.ts';
import { deleteAclRule } from './delete-acl-rule.ts';
import { deleteCalendar } from './delete-calendar.ts';
import { deleteEvent } from './delete-event.ts';
import { getAclRule } from './get-acl-rule.ts';
import { getCalendar } from './get-calendar.ts';
import { getEvent } from './get-event.ts';
import { getFreeBusy } from './get-free-busy.ts';
import { listAclRules } from './list-acl-rules.ts';
import { listCalendars } from './list-calendars.ts';
import { listEvents } from './list-events.ts';
import { quickAddEvent } from './quick-add-event.ts';
import { updateAclRule } from './update-acl-rule.ts';
import { updateCalendar } from './update-calendar.ts';
import { updateEvent } from './update-event.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { ClearCalendarInput, ClearCalendarOutput } from './clear-calendar.ts';
export type { CreateAclRuleInput, CreateAclRuleOutput } from './create-acl-rule.ts';
export type { CreateCalendarInput, CreateCalendarOutput } from './create-calendar.ts';
export type { CreateEventInput, CreateEventOutput } from './create-event.ts';
export type { DeleteAclRuleInput, DeleteAclRuleOutput } from './delete-acl-rule.ts';
export type { DeleteCalendarInput, DeleteCalendarOutput } from './delete-calendar.ts';
export type { DeleteEventInput, DeleteEventOutput } from './delete-event.ts';
export type { GetAclRuleInput, GetAclRuleOutput } from './get-acl-rule.ts';
export type { GetCalendarInput, GetCalendarOutput } from './get-calendar.ts';
export type { GetEventInput, GetEventOutput } from './get-event.ts';
export type { GetFreeBusyInput, GetFreeBusyOutput } from './get-free-busy.ts';
export type { ListAclRulesInput, ListAclRulesOutput } from './list-acl-rules.ts';
export type { ListCalendarsInput, ListCalendarsOutput } from './list-calendars.ts';
export type { ListEventsInput, ListEventsOutput } from './list-events.ts';
export type { QuickAddEventInput, QuickAddEventOutput } from './quick-add-event.ts';
export type { UpdateAclRuleInput, UpdateAclRuleOutput } from './update-acl-rule.ts';
export type { UpdateCalendarInput, UpdateCalendarOutput } from './update-calendar.ts';
export type { UpdateEventInput, UpdateEventOutput } from './update-event.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		clearCalendar: clearCalendar.bind({ endpointCaller }),
		createAclRule: createAclRule.bind({ endpointCaller }),
		createCalendar: createCalendar.bind({ endpointCaller }),
		createEvent: createEvent.bind({ endpointCaller }),
		deleteAclRule: deleteAclRule.bind({ endpointCaller }),
		deleteCalendar: deleteCalendar.bind({ endpointCaller }),
		deleteEvent: deleteEvent.bind({ endpointCaller }),
		getAclRule: getAclRule.bind({ endpointCaller }),
		getCalendar: getCalendar.bind({ endpointCaller }),
		getEvent: getEvent.bind({ endpointCaller }),
		getFreeBusy: getFreeBusy.bind({ endpointCaller }),
		listAclRules: listAclRules.bind({ endpointCaller }),
		listCalendars: listCalendars.bind({ endpointCaller }),
		listEvents: listEvents.bind({ endpointCaller }),
		quickAddEvent: quickAddEvent.bind({ endpointCaller }),
		updateAclRule: updateAclRule.bind({ endpointCaller }),
		updateCalendar: updateCalendar.bind({ endpointCaller }),
		updateEvent: updateEvent.bind({ endpointCaller }),
	};
};

export class GoogleCalendarV5Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
