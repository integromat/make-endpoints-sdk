// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateRecordInput = {
	/**
	 * Script ID of the record type to update, for example `customer` or `salesOrder`. Use the Get record definitions endpoint to confirm the item route accepts a `patch` operation before attempting an update.
	 */
	recordType: string;
	/**
	 * Internal ID of the record to update, for example `2655`. Resolve a name to an ID with the Search records or Run SuiteQL query endpoint first. To write by external ID instead, use the Upsert record endpoint.
	 */
	recordId: string;
	/**
	 * Only the fields to change, as a JSON object of field names and values — for example `{"comments": "Updated"}`. Fields that are omitted are left untouched, so there is no need to send the whole record. Send a field with a value of `null` to clear it. Use the camel case REST field names from the Get record definitions endpoint. Reference fields take an object containing the related record's ID, for example `{"terms": {"id": "4"}}`.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * Names of sublists whose existing lines should be replaced entirely by the lines in this request, instead of being merged with them. Without this, supplied sublist lines are matched against existing lines or appended. Also used together with `replaceSelectedFields` to restrict which null body fields are cleared.
	 *
	 * Items: A single sublist name such as `addressBook`, `subrecord.sublist` for a sublist on a subrecord, or a body field name when narrowing deletion via `replaceSelectedFields`.
	 */
	replace?: string[];
	/**
	 * Set to true to apply only the null values whose field names are listed in `replace`, ignoring any other nulls in the payload. Off by default, in which case every field sent as `null` is cleared. This narrows clearing rather than enabling it — clearing a field does not require this parameter.
	 */
	replaceSelectedFields?: boolean;
};

export type UpdateRecordOutput = {
	/**
	 * HTTP status code of the response. A successful update returns 204, since NetSuite sends no response body.
	 */
	statusCode?: number;
	/**
	 * Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none.
	 */
	warning?: string;
	/**
	 * Description of any property validation failure, from the `X-NetSuite-PropertyValidation` header. Absent when every supplied field validated cleanly. Worth checking — a field NetSuite rejected is reported here rather than as an error.
	 */
	propertyValidation?: string;
};

/**
 * Update a record
 * Updates the supplied fields on an existing NetSuite record, leaving fields that are not supplied unchanged.
 */
export async function updateRecord(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateRecordInput;
		connectionId: number;
	},
): Promise<UpdateRecordOutput> {
	const response = await this.endpointCaller<UpdateRecordOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'updateRecord',
		},
		payload,
	);
	return response.output;
}
