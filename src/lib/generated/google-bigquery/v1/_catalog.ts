// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createDataset } from './create-dataset.ts';
import { createJob } from './create-job.ts';
import { createTable } from './create-table.ts';
import { deleteDataset } from './delete-dataset.ts';
import { deleteTable } from './delete-table.ts';
import { getDataset } from './get-dataset.ts';
import { getJob } from './get-job.ts';
import { getQueryResults } from './get-query-results.ts';
import { getTable } from './get-table.ts';
import { insertRows } from './insert-rows.ts';
import { listDatasets } from './list-datasets.ts';
import { listJobs } from './list-jobs.ts';
import { listTableData } from './list-table-data.ts';
import { listTables } from './list-tables.ts';
import { runQuery } from './run-query.ts';
import { updateDataset } from './update-dataset.ts';
import { updateTable } from './update-table.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateDatasetInput, CreateDatasetOutput } from './create-dataset.ts';
export type { CreateJobInput, CreateJobOutput } from './create-job.ts';
export type { CreateTableInput, CreateTableOutput } from './create-table.ts';
export type { DeleteDatasetInput, DeleteDatasetOutput } from './delete-dataset.ts';
export type { DeleteTableInput, DeleteTableOutput } from './delete-table.ts';
export type { GetDatasetInput, GetDatasetOutput } from './get-dataset.ts';
export type { GetJobInput, GetJobOutput } from './get-job.ts';
export type { GetQueryResultsInput, GetQueryResultsOutput } from './get-query-results.ts';
export type { GetTableInput, GetTableOutput } from './get-table.ts';
export type { InsertRowsInput, InsertRowsOutput } from './insert-rows.ts';
export type { ListDatasetsInput, ListDatasetsOutput } from './list-datasets.ts';
export type { ListJobsInput, ListJobsOutput } from './list-jobs.ts';
export type { ListTableDataInput, ListTableDataOutput } from './list-table-data.ts';
export type { ListTablesInput, ListTablesOutput } from './list-tables.ts';
export type { RunQueryInput, RunQueryOutput } from './run-query.ts';
export type { UpdateDatasetInput, UpdateDatasetOutput } from './update-dataset.ts';
export type { UpdateTableInput, UpdateTableOutput } from './update-table.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createDataset: createDataset.bind({ endpointCaller }),
		createJob: createJob.bind({ endpointCaller }),
		createTable: createTable.bind({ endpointCaller }),
		deleteDataset: deleteDataset.bind({ endpointCaller }),
		deleteTable: deleteTable.bind({ endpointCaller }),
		getDataset: getDataset.bind({ endpointCaller }),
		getJob: getJob.bind({ endpointCaller }),
		getQueryResults: getQueryResults.bind({ endpointCaller }),
		getTable: getTable.bind({ endpointCaller }),
		insertRows: insertRows.bind({ endpointCaller }),
		listDatasets: listDatasets.bind({ endpointCaller }),
		listJobs: listJobs.bind({ endpointCaller }),
		listTableData: listTableData.bind({ endpointCaller }),
		listTables: listTables.bind({ endpointCaller }),
		runQuery: runQuery.bind({ endpointCaller }),
		updateDataset: updateDataset.bind({ endpointCaller }),
		updateTable: updateTable.bind({ endpointCaller }),
	};
};

export class GoogleBigqueryV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
