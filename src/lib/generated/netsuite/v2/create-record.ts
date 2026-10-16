// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateRecordInput = {
	/**
	 * Script ID of the record type to create, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values, and the Get record definitions endpoint to confirm the type accepts a `post` operation before attempting a create.
	 */
	recordType: string;
	/**
	 * The record to create, as a JSON object of field names and values — for example `{"companyName": "Acme Ltd", "subsidiary": {"id": "1"}}`. Use the camel case REST field names from the Get record definitions endpoint, `companyName` rather than the lower-case `companyname` SuiteQL uses. Reference fields take an object containing the related record's ID. Fields marked `readOnly` in the definitions cannot be set here. Sublists are supplied as an object with an `items` array.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * Names of sublists whose existing lines should be replaced entirely by the lines in this request, rather than appended to. Rarely needed on create. Use the sublist name as it appears in the record definition, for example `addressBook`.
	 *
	 * Items: A single sublist name, for example `addressBook`, or `subrecord.sublist` for a sublist on a subrecord.
	 */
	replace?: string[];
};

export type CreateRecordOutput = {
	/**
	 * Internal ID of the newly created record, taken from the final segment of the `Location` header. Pass this to the Get record endpoint to read the record back.
	 */
	id?: string;
	/**
	 * Absolute URL of the newly created record, as returned in the `Location` response header.
	 */
	location?: string;
	/**
	 * HTTP status code of the response. A successful create returns 204, since NetSuite sends no response body.
	 */
	statusCode?: number;
	/**
	 * Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none — its presence does not mean the create failed.
	 */
	warning?: string;
	/**
	 * Description of any property validation failure, from the `X-NetSuite-PropertyValidation` header. Absent when every supplied field validated cleanly.
	 */
	propertyValidation?: string;
};

/**
 * Create a record
 * Creates a new NetSuite record of the specified type and returns its internal ID.
 */
export async function createRecord(
	this: EndpointFunctionThis,
	payload: {
		input: CreateRecordInput;
		connectionId: number;
	},
): Promise<CreateRecordOutput> {
	const response = await this.endpointCaller<CreateRecordOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'createRecord',
		},
		payload,
	);
	return response.output;
}
