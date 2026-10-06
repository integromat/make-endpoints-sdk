// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { batchModifyMessages } from './batch-modify-messages.ts';
import { createDraft } from './create-draft.ts';
import { getAttachment } from './get-attachment.ts';
import { getMessage } from './get-message.ts';
import { getThread } from './get-thread.ts';
import { listHistory } from './list-history.ts';
import { listLabels } from './list-labels.ts';
import { listMessages } from './list-messages.ts';
import { modifyMessageLabels } from './modify-message-labels.ts';
import { sendDraft } from './send-draft.ts';
import { sendMessage } from './send-message.ts';
import { trashMessage } from './trash-message.ts';
import { watchMailbox } from './watch-mailbox.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type {
	BatchModifyMessagesInput,
	BatchModifyMessagesOutput,
} from './batch-modify-messages.ts';
export type { CreateDraftInput, CreateDraftOutput } from './create-draft.ts';
export type { GetAttachmentInput, GetAttachmentOutput } from './get-attachment.ts';
export type { GetMessageInput, GetMessageOutput } from './get-message.ts';
export type { GetThreadInput, GetThreadOutput } from './get-thread.ts';
export type { ListHistoryInput, ListHistoryOutput } from './list-history.ts';
export type { ListLabelsInput, ListLabelsOutput } from './list-labels.ts';
export type { ListMessagesInput, ListMessagesOutput } from './list-messages.ts';
export type {
	ModifyMessageLabelsInput,
	ModifyMessageLabelsOutput,
} from './modify-message-labels.ts';
export type { SendDraftInput, SendDraftOutput } from './send-draft.ts';
export type { SendMessageInput, SendMessageOutput } from './send-message.ts';
export type { TrashMessageInput, TrashMessageOutput } from './trash-message.ts';
export type { WatchMailboxInput, WatchMailboxOutput } from './watch-mailbox.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		batchModifyMessages: batchModifyMessages.bind({ endpointCaller }),
		createDraft: createDraft.bind({ endpointCaller }),
		getAttachment: getAttachment.bind({ endpointCaller }),
		getMessage: getMessage.bind({ endpointCaller }),
		getThread: getThread.bind({ endpointCaller }),
		listHistory: listHistory.bind({ endpointCaller }),
		listLabels: listLabels.bind({ endpointCaller }),
		listMessages: listMessages.bind({ endpointCaller }),
		modifyMessageLabels: modifyMessageLabels.bind({ endpointCaller }),
		sendDraft: sendDraft.bind({ endpointCaller }),
		sendMessage: sendMessage.bind({ endpointCaller }),
		trashMessage: trashMessage.bind({ endpointCaller }),
		watchMailbox: watchMailbox.bind({ endpointCaller }),
	};
};

export class GoogleEmailV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
