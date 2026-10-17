// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createRecord } from './create-record.ts';
import { deleteRecord } from './delete-record.ts';
import { describeObject } from './describe-object.ts';
import { getRecord } from './get-record.ts';
import { listChatterSubjects } from './list-chatter-subjects.ts';
import { listObjectTypes } from './list-object-types.ts';
import { postChatterFeedMessage } from './post-chatter-feed-message.ts';
import { searchRecordsSoql } from './search-records-soql.ts';
import { searchRecordsSosl } from './search-records-sosl.ts';
import { updateRecord } from './update-record.ts';
import { upsertRecord } from './upsert-record.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateRecordInput, CreateRecordOutput } from './create-record.ts';
export type { DeleteRecordInput, DeleteRecordOutput } from './delete-record.ts';
export type { DescribeObjectInput, DescribeObjectOutput } from './describe-object.ts';
export type { GetRecordInput, GetRecordOutput } from './get-record.ts';
export type {
	ListChatterSubjectsInput,
	ListChatterSubjectsOutput,
} from './list-chatter-subjects.ts';
export type { ListObjectTypesInput, ListObjectTypesOutput } from './list-object-types.ts';
export type {
	PostChatterFeedMessageInput,
	PostChatterFeedMessageOutput,
} from './post-chatter-feed-message.ts';
export type { SearchRecordsSoqlInput, SearchRecordsSoqlOutput } from './search-records-soql.ts';
export type { SearchRecordsSoslInput, SearchRecordsSoslOutput } from './search-records-sosl.ts';
export type { UpdateRecordInput, UpdateRecordOutput } from './update-record.ts';
export type { UpsertRecordInput, UpsertRecordOutput } from './upsert-record.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createRecord: createRecord.bind({ endpointCaller }),
		deleteRecord: deleteRecord.bind({ endpointCaller }),
		describeObject: describeObject.bind({ endpointCaller }),
		getRecord: getRecord.bind({ endpointCaller }),
		listChatterSubjects: listChatterSubjects.bind({ endpointCaller }),
		listObjectTypes: listObjectTypes.bind({ endpointCaller }),
		postChatterFeedMessage: postChatterFeedMessage.bind({ endpointCaller }),
		searchRecordsSoql: searchRecordsSoql.bind({ endpointCaller }),
		searchRecordsSosl: searchRecordsSosl.bind({ endpointCaller }),
		updateRecord: updateRecord.bind({ endpointCaller }),
		upsertRecord: upsertRecord.bind({ endpointCaller }),
	};
};

export class SalesforceV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
