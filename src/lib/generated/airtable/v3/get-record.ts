// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetRecordInput = {
	/**
	 * ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.
	 */
	base: string;
	/**
	 * Name or ID of the table that contains the record, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.
	 */
	table: string;
	/**
	 * ID of the record to retrieve, for example `rec560UJdUtocSouk`.
	 */
	recordId: string;
	/**
	 * Format used for cell values in the response. 'JSON' returns type-specific JSON values (default); 'String' returns user-facing display strings and requires 'Time zone' and 'User locale' to be set.
	 */
	cellFormat?: '' | 'json' | 'string';
	/**
	 * Time zone used to format dates when 'Cell format' is 'String', for example `Europe/Prague`. Required only when 'Cell format' is 'String'.
	 */
	timeZone?: string;
	/**
	 * User locale used to format dates when 'Cell format' is 'String', for example `en-US`. Required only when 'Cell format' is 'String'.
	 */
	userLocale?: string;
	/**
	 * If enabled, the record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.
	 */
	returnFieldsByFieldId?: boolean;
	/**
	 * If enabled, linked record fields are returned as objects with an 'id' property (and, where configured, date-dependency details) instead of plain record ID strings.
	 */
	includeDateDependencyMetadata?: boolean;
};

export type GetRecordOutput = {
	/**
	 * Unique identifier of the record (starts with 'rec').
	 */
	id?: string;
	/**
	 * Date and time the record was created, in ISO 8601 format.
	 */
	createdTime?: string;
	/**
	 * Cell values keyed by field name (or by field ID if 'Return fields by field ID' was enabled). Shape varies depending on the table's schema; use the Get base schema endpoint to inspect field names, types, and options for a given table. Fields with empty values (empty string, empty array, or false) are omitted.
	 */
	fields?: Record<string, JSONValue>;
};

/**
 * Get record
 * Retrieves a single record from a table by its record ID.
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
			appName: 'airtable',
			appVersion: 3,
			endpointName: 'getRecord',
		},
		payload,
	);
	return response.output;
}
