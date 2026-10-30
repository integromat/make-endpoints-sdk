// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createRecord } from './create-record.ts';
import { deleteRecord } from './delete-record.ts';
import { getRecord } from './get-record.ts';
import { listEntityDefinitions } from './list-entity-definitions.ts';
import { listRecords } from './list-records.ts';
import { updateRecord } from './update-record.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateRecordInput, CreateRecordOutput } from './create-record.ts';
export type { DeleteRecordInput, DeleteRecordOutput } from './delete-record.ts';
export type { GetRecordInput, GetRecordOutput } from './get-record.ts';
export type {
	ListEntityDefinitionsInput,
	ListEntityDefinitionsOutput,
} from './list-entity-definitions.ts';
export type { ListRecordsInput, ListRecordsOutput } from './list-records.ts';
export type { UpdateRecordInput, UpdateRecordOutput } from './update-record.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createRecord: createRecord.bind({ endpointCaller }),
		deleteRecord: deleteRecord.bind({ endpointCaller }),
		getRecord: getRecord.bind({ endpointCaller }),
		listEntityDefinitions: listEntityDefinitions.bind({ endpointCaller }),
		listRecords: listRecords.bind({ endpointCaller }),
		updateRecord: updateRecord.bind({ endpointCaller }),
	};
};

export class MicrosoftDynamics365CrmV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
