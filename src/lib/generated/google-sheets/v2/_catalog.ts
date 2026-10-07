// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { appendValues } from './append-values.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { batchClearValues } from './batch-clear-values.ts';
import { batchGetValues } from './batch-get-values.ts';
import { batchUpdateSpreadsheet } from './batch-update-spreadsheet.ts';
import { clearValues } from './clear-values.ts';
import { copySheetTo } from './copy-sheet-to.ts';
import { createSpreadsheet } from './create-spreadsheet.ts';
import { getSpreadsheet } from './get-spreadsheet.ts';
import { getValues } from './get-values.ts';
import { updateValues } from './update-values.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AppendValuesInput, AppendValuesOutput } from './append-values.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { BatchClearValuesInput, BatchClearValuesOutput } from './batch-clear-values.ts';
export type { BatchGetValuesInput, BatchGetValuesOutput } from './batch-get-values.ts';
export type {
	BatchUpdateSpreadsheetInput,
	BatchUpdateSpreadsheetOutput,
} from './batch-update-spreadsheet.ts';
export type { ClearValuesInput, ClearValuesOutput } from './clear-values.ts';
export type { CopySheetToInput, CopySheetToOutput } from './copy-sheet-to.ts';
export type { CreateSpreadsheetInput, CreateSpreadsheetOutput } from './create-spreadsheet.ts';
export type { GetSpreadsheetInput, GetSpreadsheetOutput } from './get-spreadsheet.ts';
export type { GetValuesInput, GetValuesOutput } from './get-values.ts';
export type { UpdateValuesInput, UpdateValuesOutput } from './update-values.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		appendValues: appendValues.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		batchClearValues: batchClearValues.bind({ endpointCaller }),
		batchGetValues: batchGetValues.bind({ endpointCaller }),
		batchUpdateSpreadsheet: batchUpdateSpreadsheet.bind({ endpointCaller }),
		clearValues: clearValues.bind({ endpointCaller }),
		copySheetTo: copySheetTo.bind({ endpointCaller }),
		createSpreadsheet: createSpreadsheet.bind({ endpointCaller }),
		getSpreadsheet: getSpreadsheet.bind({ endpointCaller }),
		getValues: getValues.bind({ endpointCaller }),
		updateValues: updateValues.bind({ endpointCaller }),
	};
};

export class GoogleSheetsV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
