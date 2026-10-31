// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createArichMenu } from './create-arich-menu.ts';
import { deleteArichMenu } from './delete-arich-menu.ts';
import { getAgroupMemberProfile } from './get-agroup-member-profile.ts';
import { getAnumberOfFollowers } from './get-anumber-of-followers.ts';
import { getAnumberOfMessageDeliveries } from './get-anumber-of-message-deliveries.ts';
import { getArichMenu } from './get-arich-menu.ts';
import { getAroomMemberProfile } from './get-aroom-member-profile.ts';
import { getGroupMemberUserIds } from './get-group-member-user-ids.ts';
import { getRoomMemberUserIds } from './get-room-member-user-ids.ts';
import { leaveAgroup } from './leave-agroup.ts';
import { leaveAroom } from './leave-aroom.ts';
import { listRichMenus } from './list-rich-menus.ts';
import { sendAbroadcastMessage } from './send-abroadcast-message.ts';
import { sendAreplyMessage } from './send-areply-message.ts';
import { sendPushMessages } from './send-push-messages.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateARichMenuInput, CreateARichMenuOutput } from './create-arich-menu.ts';
export type { DeleteARichMenuInput, DeleteARichMenuOutput } from './delete-arich-menu.ts';
export type {
	GetAGroupMemberProfileInput,
	GetAGroupMemberProfileOutput,
} from './get-agroup-member-profile.ts';
export type {
	GetANumberOfFollowersInput,
	GetANumberOfFollowersOutput,
} from './get-anumber-of-followers.ts';
export type {
	GetANumberOfMessageDeliveriesInput,
	GetANumberOfMessageDeliveriesOutput,
} from './get-anumber-of-message-deliveries.ts';
export type { GetARichMenuInput, GetARichMenuOutput } from './get-arich-menu.ts';
export type {
	GetARoomMemberProfileInput,
	GetARoomMemberProfileOutput,
} from './get-aroom-member-profile.ts';
export type {
	GetGroupMemberUserIdsInput,
	GetGroupMemberUserIdsOutput,
} from './get-group-member-user-ids.ts';
export type {
	GetRoomMemberUserIdsInput,
	GetRoomMemberUserIdsOutput,
} from './get-room-member-user-ids.ts';
export type { LeaveAGroupInput, LeaveAGroupOutput } from './leave-agroup.ts';
export type { LeaveARoomInput, LeaveARoomOutput } from './leave-aroom.ts';
export type { ListRichMenusInput, ListRichMenusOutput } from './list-rich-menus.ts';
export type {
	SendABroadcastMessageInput,
	SendABroadcastMessageOutput,
} from './send-abroadcast-message.ts';
export type { SendAReplyMessageInput, SendAReplyMessageOutput } from './send-areply-message.ts';
export type { SendPushMessagesInput, SendPushMessagesOutput } from './send-push-messages.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createArichMenu: createArichMenu.bind({ endpointCaller }),
		deleteArichMenu: deleteArichMenu.bind({ endpointCaller }),
		getAgroupMemberProfile: getAgroupMemberProfile.bind({ endpointCaller }),
		getAnumberOfFollowers: getAnumberOfFollowers.bind({ endpointCaller }),
		getAnumberOfMessageDeliveries: getAnumberOfMessageDeliveries.bind({ endpointCaller }),
		getArichMenu: getArichMenu.bind({ endpointCaller }),
		getAroomMemberProfile: getAroomMemberProfile.bind({ endpointCaller }),
		getGroupMemberUserIds: getGroupMemberUserIds.bind({ endpointCaller }),
		getRoomMemberUserIds: getRoomMemberUserIds.bind({ endpointCaller }),
		leaveAgroup: leaveAgroup.bind({ endpointCaller }),
		leaveAroom: leaveAroom.bind({ endpointCaller }),
		listRichMenus: listRichMenus.bind({ endpointCaller }),
		sendAbroadcastMessage: sendAbroadcastMessage.bind({ endpointCaller }),
		sendAreplyMessage: sendAreplyMessage.bind({ endpointCaller }),
		sendPushMessages: sendPushMessages.bind({ endpointCaller }),
	};
};

export class LineV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
