// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createRecord } from './create-record.ts';
import { getBaseSchema } from './get-base-schema.ts';
import { getRecord } from './get-record.ts';
import { listBases } from './list-bases.ts';
import { listRecords } from './list-records.ts';
import { updateRecord } from './update-record.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateRecordInput, CreateRecordOutput } from './create-record.ts';
export type { GetBaseSchemaInput, GetBaseSchemaOutput } from './get-base-schema.ts';
export type { GetRecordInput, GetRecordOutput } from './get-record.ts';
export type { ListBasesInput, ListBasesOutput } from './list-bases.ts';
export type { ListRecordsInput, ListRecordsOutput } from './list-records.ts';
export type { UpdateRecordInput, UpdateRecordOutput } from './update-record.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createRecord: createRecord.bind({ endpointCaller }),
		getBaseSchema: getBaseSchema.bind({ endpointCaller }),
		getRecord: getRecord.bind({ endpointCaller }),
		listBases: listBases.bind({ endpointCaller }),
		listRecords: listRecords.bind({ endpointCaller }),
		updateRecord: updateRecord.bind({ endpointCaller }),
	};
};

export class AirtableV3Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
