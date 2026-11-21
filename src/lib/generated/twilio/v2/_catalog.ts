// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createCall } from './create-call.ts';
import { createExecution } from './create-execution.ts';
import { createMessage } from './create-message.ts';
import { deleteCall } from './delete-call.ts';
import { deleteExecution } from './delete-execution.ts';
import { deleteMessage } from './delete-message.ts';
import { getCall } from './get-call.ts';
import { getExecution } from './get-execution.ts';
import { getLineType } from './get-line-type.ts';
import { getMessage } from './get-message.ts';
import { listAlerts } from './list-alerts.ts';
import { listCalls } from './list-calls.ts';
import { listMessageMedia } from './list-message-media.ts';
import { listMessages } from './list-messages.ts';
import { listRecordingTranscriptions } from './list-recording-transcriptions.ts';
import { listRecordings } from './list-recordings.ts';
import { listTranscriptions } from './list-transcriptions.ts';
import { updateExecution } from './update-execution.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateCallInput, CreateCallOutput } from './create-call.ts';
export type { CreateExecutionInput, CreateExecutionOutput } from './create-execution.ts';
export type { CreateMessageInput, CreateMessageOutput } from './create-message.ts';
export type { DeleteCallInput, DeleteCallOutput } from './delete-call.ts';
export type { DeleteExecutionInput, DeleteExecutionOutput } from './delete-execution.ts';
export type { DeleteMessageInput, DeleteMessageOutput } from './delete-message.ts';
export type { GetCallInput, GetCallOutput } from './get-call.ts';
export type { GetExecutionInput, GetExecutionOutput } from './get-execution.ts';
export type { GetLineTypeInput, GetLineTypeOutput } from './get-line-type.ts';
export type { GetMessageInput, GetMessageOutput } from './get-message.ts';
export type { ListAlertsInput, ListAlertsOutput } from './list-alerts.ts';
export type { ListCallsInput, ListCallsOutput } from './list-calls.ts';
export type { ListMessageMediaInput, ListMessageMediaOutput } from './list-message-media.ts';
export type { ListMessagesInput, ListMessagesOutput } from './list-messages.ts';
export type {
	ListRecordingTranscriptionsInput,
	ListRecordingTranscriptionsOutput,
} from './list-recording-transcriptions.ts';
export type { ListRecordingsInput, ListRecordingsOutput } from './list-recordings.ts';
export type { ListTranscriptionsInput, ListTranscriptionsOutput } from './list-transcriptions.ts';
export type { UpdateExecutionInput, UpdateExecutionOutput } from './update-execution.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createCall: createCall.bind({ endpointCaller }),
		createExecution: createExecution.bind({ endpointCaller }),
		createMessage: createMessage.bind({ endpointCaller }),
		deleteCall: deleteCall.bind({ endpointCaller }),
		deleteExecution: deleteExecution.bind({ endpointCaller }),
		deleteMessage: deleteMessage.bind({ endpointCaller }),
		getCall: getCall.bind({ endpointCaller }),
		getExecution: getExecution.bind({ endpointCaller }),
		getLineType: getLineType.bind({ endpointCaller }),
		getMessage: getMessage.bind({ endpointCaller }),
		listAlerts: listAlerts.bind({ endpointCaller }),
		listCalls: listCalls.bind({ endpointCaller }),
		listMessageMedia: listMessageMedia.bind({ endpointCaller }),
		listMessages: listMessages.bind({ endpointCaller }),
		listRecordings: listRecordings.bind({ endpointCaller }),
		listRecordingTranscriptions: listRecordingTranscriptions.bind({ endpointCaller }),
		listTranscriptions: listTranscriptions.bind({ endpointCaller }),
		updateExecution: updateExecution.bind({ endpointCaller }),
	};
};

export class TwilioV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
