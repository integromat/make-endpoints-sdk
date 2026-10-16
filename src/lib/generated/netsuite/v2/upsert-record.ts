// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpsertRecordInput = {
	/**
	 * Script ID of the record type to create or update, for example `customer` or `salesOrder`. Use the Get record definitions endpoint to confirm the item route accepts a `put` operation.
	 */
	recordType: string;
	/**
	 * The record's external ID, supplied **without** the `eid:` prefix — this endpoint adds it. For example `GRP132`. If a record of this type already carries this external ID it is updated; otherwise a new record is created with it.
	 */
	externalId: string;
	/**
	 * The field names and values to write, as a JSON object — for example `{"companyName": "Acme Ltd", "subsidiary": {"id": "1"}}`. Use the camel case REST field names from the Get record definitions endpoint. Reference fields take an object containing the related record's ID. Because the record may not exist yet, include every field required to create one, not just the ones being changed.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * Names of sublists whose existing lines should be replaced entirely by the lines in this request, instead of being merged with them. Also used together with `replaceSelectedFields` to restrict which null body fields are cleared.
	 *
	 * Items: A single sublist name such as `addressBook`, `subrecord.sublist` for a sublist on a subrecord, or a body field name when narrowing deletion via `replaceSelectedFields`.
	 */
	replace?: string[];
	/**
	 * Set to true to apply only the null values whose field names are listed in `replace`, ignoring any other nulls in the payload. Off by default, in which case every field sent as `null` is cleared. This narrows clearing rather than enabling it.
	 */
	replaceSelectedFields?: boolean;
};

export type UpsertRecordOutput = {
	/**
	 * Internal ID of the created or updated record, taken from the final segment of the `Location` header. The same value is returned whether the record was created or updated.
	 */
	id?: string;
	/**
	 * Absolute URL of the created or updated record, as returned in the `Location` response header.
	 */
	location?: string;
	/**
	 * HTTP status code of the response. A successful upsert returns 204, since NetSuite sends no response body. The code does not distinguish a create from an update.
	 */
	statusCode?: number;
	/**
	 * Any warning NetSuite raised while processing the request, from the `X-NetSuite-Warning` header. Absent when there was none.
	 */
	warning?: string;
	/**
	 * Description of any property validation failure, from the `X-NetSuite-PropertyValidation` header. Absent when every supplied field validated cleanly.
	 */
	propertyValidation?: string;
};

/**
 * Create or update a record
 * Creates or updates a NetSuite record identified by its external ID, and returns its internal ID.
 */
export async function upsertRecord(
	this: EndpointFunctionThis,
	payload: {
		input: UpsertRecordInput;
		connectionId: number;
	},
): Promise<UpsertRecordOutput> {
	const response = await this.endpointCaller<UpsertRecordOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'upsertRecord',
		},
		payload,
	);
	return response.output;
}
