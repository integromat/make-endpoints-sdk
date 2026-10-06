// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addPin } from './add-pin.ts';
import { addReaction } from './add-reaction.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { archiveChannel } from './archive-channel.ts';
import { completeUploadExternal } from './complete-upload-external.ts';
import { createChannel } from './create-channel.ts';
import { deleteFile } from './delete-file.ts';
import { deleteMessage } from './delete-message.ts';
import { getChannel } from './get-channel.ts';
import { getChannelHistory } from './get-channel-history.ts';
import { getFileInfo } from './get-file-info.ts';
import { getUploadUrlexternal } from './get-upload-urlexternal.ts';
import { getUser } from './get-user.ts';
import { inviteToChannel } from './invite-to-channel.ts';
import { joinChannel } from './join-channel.ts';
import { kickFromChannel } from './kick-from-channel.ts';
import { leaveChannel } from './leave-channel.ts';
import { listChannelMembers } from './list-channel-members.ts';
import { listChannels } from './list-channels.ts';
import { listFiles } from './list-files.ts';
import { listReactions } from './list-reactions.ts';
import { listReplies } from './list-replies.ts';
import { listUsers } from './list-users.ts';
import { lookupUserByEmail } from './lookup-user-by-email.ts';
import { postMessage } from './post-message.ts';
import { removePin } from './remove-pin.ts';
import { removeReaction } from './remove-reaction.ts';
import { searchMessages } from './search-messages.ts';
import { setChannelPurpose } from './set-channel-purpose.ts';
import { setChannelTopic } from './set-channel-topic.ts';
import { setUserProfile } from './set-user-profile.ts';
import { unarchiveChannel } from './unarchive-channel.ts';
import { updateMessage } from './update-message.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddPinInput, AddPinOutput } from './add-pin.ts';
export type { AddReactionInput, AddReactionOutput } from './add-reaction.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { ArchiveChannelInput, ArchiveChannelOutput } from './archive-channel.ts';
export type {
	CompleteUploadExternalInput,
	CompleteUploadExternalOutput,
} from './complete-upload-external.ts';
export type { CreateChannelInput, CreateChannelOutput } from './create-channel.ts';
export type { DeleteFileInput, DeleteFileOutput } from './delete-file.ts';
export type { DeleteMessageInput, DeleteMessageOutput } from './delete-message.ts';
export type { GetChannelInput, GetChannelOutput } from './get-channel.ts';
export type { GetChannelHistoryInput, GetChannelHistoryOutput } from './get-channel-history.ts';
export type { GetFileInfoInput, GetFileInfoOutput } from './get-file-info.ts';
export type {
	GetUploadURLExternalInput,
	GetUploadURLExternalOutput,
} from './get-upload-urlexternal.ts';
export type { GetUserInput, GetUserOutput } from './get-user.ts';
export type { InviteToChannelInput, InviteToChannelOutput } from './invite-to-channel.ts';
export type { JoinChannelInput, JoinChannelOutput } from './join-channel.ts';
export type { KickFromChannelInput, KickFromChannelOutput } from './kick-from-channel.ts';
export type { LeaveChannelInput, LeaveChannelOutput } from './leave-channel.ts';
export type { ListChannelMembersInput, ListChannelMembersOutput } from './list-channel-members.ts';
export type { ListChannelsInput, ListChannelsOutput } from './list-channels.ts';
export type { ListFilesInput, ListFilesOutput } from './list-files.ts';
export type { ListReactionsInput, ListReactionsOutput } from './list-reactions.ts';
export type { ListRepliesInput, ListRepliesOutput } from './list-replies.ts';
export type { ListUsersInput, ListUsersOutput } from './list-users.ts';
export type { LookupUserByEmailInput, LookupUserByEmailOutput } from './lookup-user-by-email.ts';
export type { PostMessageInput, PostMessageOutput } from './post-message.ts';
export type { RemovePinInput, RemovePinOutput } from './remove-pin.ts';
export type { RemoveReactionInput, RemoveReactionOutput } from './remove-reaction.ts';
export type { SearchMessagesInput, SearchMessagesOutput } from './search-messages.ts';
export type { SetChannelPurposeInput, SetChannelPurposeOutput } from './set-channel-purpose.ts';
export type { SetChannelTopicInput, SetChannelTopicOutput } from './set-channel-topic.ts';
export type { SetUserProfileInput, SetUserProfileOutput } from './set-user-profile.ts';
export type { UnarchiveChannelInput, UnarchiveChannelOutput } from './unarchive-channel.ts';
export type { UpdateMessageInput, UpdateMessageOutput } from './update-message.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addPin: addPin.bind({ endpointCaller }),
		addReaction: addReaction.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		archiveChannel: archiveChannel.bind({ endpointCaller }),
		completeUploadExternal: completeUploadExternal.bind({ endpointCaller }),
		createChannel: createChannel.bind({ endpointCaller }),
		deleteFile: deleteFile.bind({ endpointCaller }),
		deleteMessage: deleteMessage.bind({ endpointCaller }),
		getChannel: getChannel.bind({ endpointCaller }),
		getChannelHistory: getChannelHistory.bind({ endpointCaller }),
		getFileInfo: getFileInfo.bind({ endpointCaller }),
		getUploadUrlexternal: getUploadUrlexternal.bind({ endpointCaller }),
		getUser: getUser.bind({ endpointCaller }),
		inviteToChannel: inviteToChannel.bind({ endpointCaller }),
		joinChannel: joinChannel.bind({ endpointCaller }),
		kickFromChannel: kickFromChannel.bind({ endpointCaller }),
		leaveChannel: leaveChannel.bind({ endpointCaller }),
		listChannelMembers: listChannelMembers.bind({ endpointCaller }),
		listChannels: listChannels.bind({ endpointCaller }),
		listFiles: listFiles.bind({ endpointCaller }),
		listReactions: listReactions.bind({ endpointCaller }),
		listReplies: listReplies.bind({ endpointCaller }),
		listUsers: listUsers.bind({ endpointCaller }),
		lookupUserByEmail: lookupUserByEmail.bind({ endpointCaller }),
		postMessage: postMessage.bind({ endpointCaller }),
		removePin: removePin.bind({ endpointCaller }),
		removeReaction: removeReaction.bind({ endpointCaller }),
		searchMessages: searchMessages.bind({ endpointCaller }),
		setChannelPurpose: setChannelPurpose.bind({ endpointCaller }),
		setChannelTopic: setChannelTopic.bind({ endpointCaller }),
		setUserProfile: setUserProfile.bind({ endpointCaller }),
		unarchiveChannel: unarchiveChannel.bind({ endpointCaller }),
		updateMessage: updateMessage.bind({ endpointCaller }),
	};
};

export class SlackV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
