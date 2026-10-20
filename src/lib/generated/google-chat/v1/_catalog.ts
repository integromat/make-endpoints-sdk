// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createMessage } from './create-message.ts';
import { deleteMessage } from './delete-message.ts';
import { getAttachment } from './get-attachment.ts';
import { getMember } from './get-member.ts';
import { getMessage } from './get-message.ts';
import { getSpace } from './get-space.ts';
import { listMembers } from './list-members.ts';
import { listSpaces } from './list-spaces.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateMessageInput, CreateMessageOutput } from './create-message.ts';
export type { DeleteMessageInput, DeleteMessageOutput } from './delete-message.ts';
export type { GetAttachmentInput, GetAttachmentOutput } from './get-attachment.ts';
export type { GetMemberInput, GetMemberOutput } from './get-member.ts';
export type { GetMessageInput, GetMessageOutput } from './get-message.ts';
export type { GetSpaceInput, GetSpaceOutput } from './get-space.ts';
export type { ListMembersInput, ListMembersOutput } from './list-members.ts';
export type { ListSpacesInput, ListSpacesOutput } from './list-spaces.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createMessage: createMessage.bind({ endpointCaller }),
		deleteMessage: deleteMessage.bind({ endpointCaller }),
		getAttachment: getAttachment.bind({ endpointCaller }),
		getMember: getMember.bind({ endpointCaller }),
		getMessage: getMessage.bind({ endpointCaller }),
		getSpace: getSpace.bind({ endpointCaller }),
		listMembers: listMembers.bind({ endpointCaller }),
		listSpaces: listSpaces.bind({ endpointCaller }),
	};
};

export class GoogleChatV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
