// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { cancelEvent } from './cancel-event.ts';
import { createEventInvitee } from './create-event-invitee.ts';
import { createEventType } from './create-event-type.ts';
import { createInviteeNoShow } from './create-invitee-no-show.ts';
import { createOrganizationInvitation } from './create-organization-invitation.ts';
import { createSchedulingLink } from './create-scheduling-link.ts';
import { deleteInviteeNoShow } from './delete-invitee-no-show.ts';
import { getEvent } from './get-event.ts';
import { getEventInvitee } from './get-event-invitee.ts';
import { getEventType } from './get-event-type.ts';
import { getInviteeNoShow } from './get-invitee-no-show.ts';
import { getOrganizationMembership } from './get-organization-membership.ts';
import { getUserAvailabilitySchedule } from './get-user-availability-schedule.ts';
import { listEventInvitees } from './list-event-invitees.ts';
import { listEventTypeAvailabilitySchedules } from './list-event-type-availability-schedules.ts';
import { listEventTypeAvailableTimes } from './list-event-type-available-times.ts';
import { listEventTypes } from './list-event-types.ts';
import { listEvents } from './list-events.ts';
import { listOrganizationMemberships } from './list-organization-memberships.ts';
import { listUserAvailabilitySchedules } from './list-user-availability-schedules.ts';
import { listUserBusyTimes } from './list-user-busy-times.ts';
import { listUserMeetingLocations } from './list-user-meeting-locations.ts';
import { updateEventType } from './update-event-type.ts';
import { updateEventTypeAvailabilitySchedule } from './update-event-type-availability-schedule.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CancelEventInput, CancelEventOutput } from './cancel-event.ts';
export type { CreateEventInviteeInput, CreateEventInviteeOutput } from './create-event-invitee.ts';
export type { CreateEventTypeInput, CreateEventTypeOutput } from './create-event-type.ts';
export type {
	CreateInviteeNoShowInput,
	CreateInviteeNoShowOutput,
} from './create-invitee-no-show.ts';
export type {
	CreateOrganizationInvitationInput,
	CreateOrganizationInvitationOutput,
} from './create-organization-invitation.ts';
export type {
	CreateSchedulingLinkInput,
	CreateSchedulingLinkOutput,
} from './create-scheduling-link.ts';
export type {
	DeleteInviteeNoShowInput,
	DeleteInviteeNoShowOutput,
} from './delete-invitee-no-show.ts';
export type { GetEventInput, GetEventOutput } from './get-event.ts';
export type { GetEventInviteeInput, GetEventInviteeOutput } from './get-event-invitee.ts';
export type { GetEventTypeInput, GetEventTypeOutput } from './get-event-type.ts';
export type { GetInviteeNoShowInput, GetInviteeNoShowOutput } from './get-invitee-no-show.ts';
export type {
	GetOrganizationMembershipInput,
	GetOrganizationMembershipOutput,
} from './get-organization-membership.ts';
export type {
	GetUserAvailabilityScheduleInput,
	GetUserAvailabilityScheduleOutput,
} from './get-user-availability-schedule.ts';
export type { ListEventInviteesInput, ListEventInviteesOutput } from './list-event-invitees.ts';
export type {
	ListEventTypeAvailabilitySchedulesInput,
	ListEventTypeAvailabilitySchedulesOutput,
} from './list-event-type-availability-schedules.ts';
export type {
	ListEventTypeAvailableTimesInput,
	ListEventTypeAvailableTimesOutput,
} from './list-event-type-available-times.ts';
export type { ListEventTypesInput, ListEventTypesOutput } from './list-event-types.ts';
export type { ListEventsInput, ListEventsOutput } from './list-events.ts';
export type {
	ListOrganizationMembershipsInput,
	ListOrganizationMembershipsOutput,
} from './list-organization-memberships.ts';
export type {
	ListUserAvailabilitySchedulesInput,
	ListUserAvailabilitySchedulesOutput,
} from './list-user-availability-schedules.ts';
export type { ListUserBusyTimesInput, ListUserBusyTimesOutput } from './list-user-busy-times.ts';
export type {
	ListUserMeetingLocationsInput,
	ListUserMeetingLocationsOutput,
} from './list-user-meeting-locations.ts';
export type { UpdateEventTypeInput, UpdateEventTypeOutput } from './update-event-type.ts';
export type {
	UpdateEventTypeAvailabilityScheduleInput,
	UpdateEventTypeAvailabilityScheduleOutput,
} from './update-event-type-availability-schedule.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		cancelEvent: cancelEvent.bind({ endpointCaller }),
		createEventInvitee: createEventInvitee.bind({ endpointCaller }),
		createEventType: createEventType.bind({ endpointCaller }),
		createInviteeNoShow: createInviteeNoShow.bind({ endpointCaller }),
		createOrganizationInvitation: createOrganizationInvitation.bind({ endpointCaller }),
		createSchedulingLink: createSchedulingLink.bind({ endpointCaller }),
		deleteInviteeNoShow: deleteInviteeNoShow.bind({ endpointCaller }),
		getEvent: getEvent.bind({ endpointCaller }),
		getEventInvitee: getEventInvitee.bind({ endpointCaller }),
		getEventType: getEventType.bind({ endpointCaller }),
		getInviteeNoShow: getInviteeNoShow.bind({ endpointCaller }),
		getOrganizationMembership: getOrganizationMembership.bind({ endpointCaller }),
		getUserAvailabilitySchedule: getUserAvailabilitySchedule.bind({ endpointCaller }),
		listEventInvitees: listEventInvitees.bind({ endpointCaller }),
		listEvents: listEvents.bind({ endpointCaller }),
		listEventTypeAvailabilitySchedules: listEventTypeAvailabilitySchedules.bind({
			endpointCaller,
		}),
		listEventTypeAvailableTimes: listEventTypeAvailableTimes.bind({ endpointCaller }),
		listEventTypes: listEventTypes.bind({ endpointCaller }),
		listOrganizationMemberships: listOrganizationMemberships.bind({ endpointCaller }),
		listUserAvailabilitySchedules: listUserAvailabilitySchedules.bind({ endpointCaller }),
		listUserBusyTimes: listUserBusyTimes.bind({ endpointCaller }),
		listUserMeetingLocations: listUserMeetingLocations.bind({ endpointCaller }),
		updateEventType: updateEventType.bind({ endpointCaller }),
		updateEventTypeAvailabilitySchedule: updateEventTypeAvailabilitySchedule.bind({
			endpointCaller,
		}),
	};
};

export class CalendlyV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
