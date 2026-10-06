// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addAttachment } from './add-attachment.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createDraft } from './create-draft.ts';
import { deleteMessage } from './delete-message.ts';
import { downloadAttachment } from './download-attachment.ts';
import { forwardMessage } from './forward-message.ts';
import { getMessage } from './get-message.ts';
import { listAttachments } from './list-attachments.ts';
import { listFolderMessages } from './list-folder-messages.ts';
import { listMessages } from './list-messages.ts';
import { moveMessage } from './move-message.ts';
import { replyToMessage } from './reply-to-message.ts';
import { sendDraft } from './send-draft.ts';
import { sendMail } from './send-mail.ts';
import { updateDraft } from './update-draft.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddAttachmentInput, AddAttachmentOutput } from './add-attachment.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateDraftInput, CreateDraftOutput } from './create-draft.ts';
export type { DeleteMessageInput, DeleteMessageOutput } from './delete-message.ts';
export type { DownloadAttachmentInput, DownloadAttachmentOutput } from './download-attachment.ts';
export type { ForwardMessageInput, ForwardMessageOutput } from './forward-message.ts';
export type { GetMessageInput, GetMessageOutput } from './get-message.ts';
export type { ListAttachmentsInput, ListAttachmentsOutput } from './list-attachments.ts';
export type { ListFolderMessagesInput, ListFolderMessagesOutput } from './list-folder-messages.ts';
export type { ListMessagesInput, ListMessagesOutput } from './list-messages.ts';
export type { MoveMessageInput, MoveMessageOutput } from './move-message.ts';
export type { ReplyToMessageInput, ReplyToMessageOutput } from './reply-to-message.ts';
export type { SendDraftInput, SendDraftOutput } from './send-draft.ts';
export type { SendMailInput, SendMailOutput } from './send-mail.ts';
export type { UpdateDraftInput, UpdateDraftOutput } from './update-draft.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addAttachment: addAttachment.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createDraft: createDraft.bind({ endpointCaller }),
		deleteMessage: deleteMessage.bind({ endpointCaller }),
		downloadAttachment: downloadAttachment.bind({ endpointCaller }),
		forwardMessage: forwardMessage.bind({ endpointCaller }),
		getMessage: getMessage.bind({ endpointCaller }),
		listAttachments: listAttachments.bind({ endpointCaller }),
		listFolderMessages: listFolderMessages.bind({ endpointCaller }),
		listMessages: listMessages.bind({ endpointCaller }),
		moveMessage: moveMessage.bind({ endpointCaller }),
		replyToMessage: replyToMessage.bind({ endpointCaller }),
		sendDraft: sendDraft.bind({ endpointCaller }),
		sendMail: sendMail.bind({ endpointCaller }),
		updateDraft: updateDraft.bind({ endpointCaller }),
	};
};

export class MicrosoftEmailV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
