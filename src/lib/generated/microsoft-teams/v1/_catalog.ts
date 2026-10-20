// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addMemberToGroup } from './add-member-to-group.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createChannel } from './create-channel.ts';
import { createChat } from './create-chat.ts';
import { createGroup } from './create-group.ts';
import { createOnlineMeeting } from './create-online-meeting.ts';
import { createTeamFromGroup } from './create-team-from-group.ts';
import { createUser } from './create-user.ts';
import { deleteChannel } from './delete-channel.ts';
import { deleteGroup } from './delete-group.ts';
import { deleteOnlineMeeting } from './delete-online-meeting.ts';
import { getChannel } from './get-channel.ts';
import { getOnlineMeeting } from './get-online-meeting.ts';
import { getPresenceByUserIds } from './get-presence-by-user-ids.ts';
import { getTeam } from './get-team.ts';
import { listChannels } from './list-channels.ts';
import { listGroups } from './list-groups.ts';
import { listJoinedTeams } from './list-joined-teams.ts';
import { listUsers } from './list-users.ts';
import { replyToChannelMessage } from './reply-to-channel-message.ts';
import { sendChannelMessage } from './send-channel-message.ts';
import { sendChatMessage } from './send-chat-message.ts';
import { updateChannel } from './update-channel.ts';
import { updateOnlineMeeting } from './update-online-meeting.ts';
import { updateTeam } from './update-team.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddMemberToGroupInput, AddMemberToGroupOutput } from './add-member-to-group.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateChannelInput, CreateChannelOutput } from './create-channel.ts';
export type { CreateChatInput, CreateChatOutput } from './create-chat.ts';
export type { CreateGroupInput, CreateGroupOutput } from './create-group.ts';
export type {
	CreateOnlineMeetingInput,
	CreateOnlineMeetingOutput,
} from './create-online-meeting.ts';
export type {
	CreateTeamFromGroupInput,
	CreateTeamFromGroupOutput,
} from './create-team-from-group.ts';
export type { CreateUserInput, CreateUserOutput } from './create-user.ts';
export type { DeleteChannelInput, DeleteChannelOutput } from './delete-channel.ts';
export type { DeleteGroupInput, DeleteGroupOutput } from './delete-group.ts';
export type {
	DeleteOnlineMeetingInput,
	DeleteOnlineMeetingOutput,
} from './delete-online-meeting.ts';
export type { GetChannelInput, GetChannelOutput } from './get-channel.ts';
export type { GetOnlineMeetingInput, GetOnlineMeetingOutput } from './get-online-meeting.ts';
export type {
	GetPresenceByUserIdsInput,
	GetPresenceByUserIdsOutput,
} from './get-presence-by-user-ids.ts';
export type { GetTeamInput, GetTeamOutput } from './get-team.ts';
export type { ListChannelsInput, ListChannelsOutput } from './list-channels.ts';
export type { ListGroupsInput, ListGroupsOutput } from './list-groups.ts';
export type { ListJoinedTeamsInput, ListJoinedTeamsOutput } from './list-joined-teams.ts';
export type { ListUsersInput, ListUsersOutput } from './list-users.ts';
export type {
	ReplyToChannelMessageInput,
	ReplyToChannelMessageOutput,
} from './reply-to-channel-message.ts';
export type { SendChannelMessageInput, SendChannelMessageOutput } from './send-channel-message.ts';
export type { SendChatMessageInput, SendChatMessageOutput } from './send-chat-message.ts';
export type { UpdateChannelInput, UpdateChannelOutput } from './update-channel.ts';
export type {
	UpdateOnlineMeetingInput,
	UpdateOnlineMeetingOutput,
} from './update-online-meeting.ts';
export type { UpdateTeamInput, UpdateTeamOutput } from './update-team.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addMemberToGroup: addMemberToGroup.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createChannel: createChannel.bind({ endpointCaller }),
		createChat: createChat.bind({ endpointCaller }),
		createGroup: createGroup.bind({ endpointCaller }),
		createOnlineMeeting: createOnlineMeeting.bind({ endpointCaller }),
		createTeamFromGroup: createTeamFromGroup.bind({ endpointCaller }),
		createUser: createUser.bind({ endpointCaller }),
		deleteChannel: deleteChannel.bind({ endpointCaller }),
		deleteGroup: deleteGroup.bind({ endpointCaller }),
		deleteOnlineMeeting: deleteOnlineMeeting.bind({ endpointCaller }),
		getChannel: getChannel.bind({ endpointCaller }),
		getOnlineMeeting: getOnlineMeeting.bind({ endpointCaller }),
		getPresenceByUserIds: getPresenceByUserIds.bind({ endpointCaller }),
		getTeam: getTeam.bind({ endpointCaller }),
		listChannels: listChannels.bind({ endpointCaller }),
		listGroups: listGroups.bind({ endpointCaller }),
		listJoinedTeams: listJoinedTeams.bind({ endpointCaller }),
		listUsers: listUsers.bind({ endpointCaller }),
		replyToChannelMessage: replyToChannelMessage.bind({ endpointCaller }),
		sendChannelMessage: sendChannelMessage.bind({ endpointCaller }),
		sendChatMessage: sendChatMessage.bind({ endpointCaller }),
		updateChannel: updateChannel.bind({ endpointCaller }),
		updateOnlineMeeting: updateOnlineMeeting.bind({ endpointCaller }),
		updateTeam: updateTeam.bind({ endpointCaller }),
	};
};

export class MicrosoftTeamsV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
