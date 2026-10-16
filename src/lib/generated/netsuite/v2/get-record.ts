// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetRecordInput = {
	/**
	 * Script ID of the record type to retrieve, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values. Matching is case-insensitive.
	 */
	recordType: string;
	/**
	 * Internal ID of the record, for example `2655`. To look the record up by its external ID instead, prefix the value with `eid:` — for example `eid:GRP132`.
	 */
	recordId: string;
	/**
	 * Return only these body fields instead of the whole record, which keeps large records manageable. Use the REST field names exactly as they appear in the Get a record schema output — camel case for standard fields (`companyName`, not the lower-case `companyname` used by SuiteQL) and the lower-case script ID for custom fields (`custentity_my_field`). Body fields only, standard or custom: NetSuite does not support selectively retrieving sublists or subrecords this way. Leave empty to return every field.
	 *
	 * Items: A single body field name, for example `companyName` or `custentity_my_field`.
	 */
	fields?: string[];
	/**
	 * Set to true to inline the full contents of every sublist, sublist line, and subrecord. Off by default, in which case sublists are returned as links only. This can increase the response size considerably on records with large sublists.
	 */
	expandSubResources?: boolean;
	/**
	 * Set to true to return enumeration fields as a bare internal ID value rather than an object containing `id` and `refName`. Off by default.
	 */
	simpleEnumFormat?: boolean;
};

export type GetRecordOutput = {
	/**
	 * Internal ID of the record, as a string.
	 */
	id?: string;
	/**
	 * Human-readable name NetSuite uses to refer to this record.
	 */
	refName?: string;
	/**
	 * External ID of the record, if one is assigned. Absent when the record has none.
	 */
	externalId?: string;
	/**
	 * Hypermedia links for this record, including its own `self` URL.
	 *
	 * Items: A single hypermedia link.
	 */
	links?: {
		/**
		 * Relationship of the link to this record, for example `self`.
		 */
		rel?: string;
		/**
		 * Absolute URL the link points to, including any query parameters that were applied.
		 */
		href?: string;
		/**
		 * HTTP method to use with the URL, for example `GET`.
		 */
		method?: string;
	}[];
};

/**
 * Get a record
 * Retrieves a single NetSuite record by its internal or external ID, with all of its field values.
 */
export async function getRecord(
	this: EndpointFunctionThis,
	payload: {
		input: GetRecordInput;
		connectionId: number;
	},
): Promise<GetRecordOutput> {
	const response = await this.endpointCaller<GetRecordOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'getRecord',
		},
		payload,
	);
	return response.output;
}
