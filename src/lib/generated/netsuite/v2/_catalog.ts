// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createRecord } from './create-record.ts';
import { deleteRecord } from './delete-record.ts';
import { getRecord } from './get-record.ts';
import { getRecordDefinitions } from './get-record-definitions.ts';
import { getRecordSchema } from './get-record-schema.ts';
import { listRecordTypes } from './list-record-types.ts';
import { runSuiteQlquery } from './run-suite-qlquery.ts';
import { searchRecords } from './search-records.ts';
import { updateRecord } from './update-record.ts';
import { upsertRecord } from './upsert-record.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateRecordInput, CreateRecordOutput } from './create-record.ts';
export type { DeleteRecordInput, DeleteRecordOutput } from './delete-record.ts';
export type { GetRecordInput, GetRecordOutput } from './get-record.ts';
export type {
	GetRecordDefinitionsInput,
	GetRecordDefinitionsOutput,
} from './get-record-definitions.ts';
export type { GetRecordSchemaInput, GetRecordSchemaOutput } from './get-record-schema.ts';
export type { ListRecordTypesInput, ListRecordTypesOutput } from './list-record-types.ts';
export type { RunSuiteQLQueryInput, RunSuiteQLQueryOutput } from './run-suite-qlquery.ts';
export type { SearchRecordsInput, SearchRecordsOutput } from './search-records.ts';
export type { UpdateRecordInput, UpdateRecordOutput } from './update-record.ts';
export type { UpsertRecordInput, UpsertRecordOutput } from './upsert-record.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createRecord: createRecord.bind({ endpointCaller }),
		deleteRecord: deleteRecord.bind({ endpointCaller }),
		getRecord: getRecord.bind({ endpointCaller }),
		getRecordDefinitions: getRecordDefinitions.bind({ endpointCaller }),
		getRecordSchema: getRecordSchema.bind({ endpointCaller }),
		listRecordTypes: listRecordTypes.bind({ endpointCaller }),
		runSuiteQlquery: runSuiteQlquery.bind({ endpointCaller }),
		searchRecords: searchRecords.bind({ endpointCaller }),
		updateRecord: updateRecord.bind({ endpointCaller }),
		upsertRecord: upsertRecord.bind({ endpointCaller }),
	};
};

export class NetsuiteV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
