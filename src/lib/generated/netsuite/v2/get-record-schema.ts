// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetRecordSchemaInput = {
	/**
	 * Script ID of the record type to describe, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values. Matching is case-insensitive. One record type per call.
	 */
	recordType: string;
};

export type GetRecordSchemaOutput = {
	/**
	 * JSON Schema type of the record document, always `object`.
	 */
	type?: string;
	/**
	 * One entry per field of the record type, keyed by the REST field name — camel case for standard fields (`companyName`) and the lower-case script ID for custom fields (`custentity_my_field`). Each entry is a JSON Schema fragment: `title` (the NetSuite UI label), `type`, and depending on the field `format` (`date`, `date-time`, `double`, `int64`), `nullable`, `description`, `readOnly`, `x-ns-custom-field`. Reference fields are objects whose `properties` hold `id`, `refName`, `externalId`, and `links`; enumerated fields list their allowed values as `enum` under `id`. Sublists and multi-select fields are objects with `links`, `totalResults`, `count`, `hasMore`, `offset`, and `items`, where `items.items.$ref` names the referenced metadata-catalog entry, and sublist elements carry `x-ns-sublistkey`. The keys vary per record type and are not enumerated here.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * URI of the JSON Schema dialect the document follows, `http://json-schema.org/draft-06/hyper-schema#`.
	 */
	$schema?: string;
	/**
	 * Names of the fields that can be used in the `q` filter of the Search records endpoint for this record type. A field absent from this list cannot be filtered on even though it exists on the record.
	 *
	 * Items: A single filterable field name, for example `companyName` or `custentity_my_field`.
	 */
	'x-ns-filterable'?: string[];
	/**
	 * `true` when the record type is a custom record type (`customrecord_*`). Absent for standard record types.
	 */
	'x-ns-custom-record'?: boolean;
};

/**
 * Get a record schema
 * Returns the JSON Schema of one record type — every body field including custom fields, with type and format, plus sublists and subrecords.
 */
export async function getRecordSchema(
	this: EndpointFunctionThis,
	payload: {
		input: GetRecordSchemaInput;
		connectionId: number;
	},
): Promise<GetRecordSchemaOutput> {
	const response = await this.endpointCaller<GetRecordSchemaOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'getRecordSchema',
		},
		payload,
	);
	return response.output;
}
