// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { getSender } from './get-sender.ts';
import { sendMessage } from './send-message.ts';
import { sendSenderAction } from './send-sender-action.ts';
import { uploadAttachment } from './upload-attachment.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { GetSenderInput, GetSenderOutput } from './get-sender.ts';
export type { SendMessageInput, SendMessageOutput } from './send-message.ts';
export type { SendSenderActionInput, SendSenderActionOutput } from './send-sender-action.ts';
export type { UploadAttachmentInput, UploadAttachmentOutput } from './upload-attachment.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		getSender: getSender.bind({ endpointCaller }),
		sendMessage: sendMessage.bind({ endpointCaller }),
		sendSenderAction: sendSenderAction.bind({ endpointCaller }),
		uploadAttachment: uploadAttachment.bind({ endpointCaller }),
	};
};

export class FacebookMessengerV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
