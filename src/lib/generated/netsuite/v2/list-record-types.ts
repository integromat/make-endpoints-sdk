// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListRecordTypesInput = Record<string, never>;

export type ListRecordTypesOutput = {
	/**
	 * The script IDs of every record type available in the connected NetSuite account, including custom record types. Pass a value from this list as the record type of the record endpoints, or as an entry in the `select` parameter of the Get record definitions endpoint.
	 *
	 * Items: The script ID of a single record type, for example `customer`, `salesOrder`, or `customrecord_project`.
	 */
	items?: string[];
};

/**
 * List record types
 * Returns the names of all record types available in the connected NetSuite account.
 */
export async function listRecordTypes(
	this: EndpointFunctionThis,
	payload: {
		input: ListRecordTypesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListRecordTypesOutput> {
	const response = await this.endpointCaller<ListRecordTypesOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'listRecordTypes',
		},
		payload,
	);
	return response.output;
}
