// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRecordsInput = {
	/**
	 * ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.
	 */
	base: string;
	/**
	 * Name or ID of the table to list records from, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.
	 */
	table: string;
	/**
	 * Name or ID of a view in the table. If set, only records visible in that view are returned, sorted according to the view's order unless 'Sort' is provided.
	 */
	view?: string;
	/**
	 * List of sort instructions applied to the returned records, in order of priority. Overrides the sorting of the view set in 'View'.
	 *
	 * Items: A single sort instruction.
	 */
	sort?: {
		/**
		 * Name or ID of the field to sort by.
		 */
		field: string;
		/**
		 * Sort direction for the field. Defaults to ascending if not set.
		 */
		direction?: '' | 'asc' | 'desc';
	}[];
	/**
	 * An Airtable formula used to filter records. Evaluated for each record; the record is included only if the result is not '0', 'false', an empty string, 'NaN', an empty array, or '#Error!'. See Airtable's Formula Field Reference: https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference
	 */
	filterByFormula?: string;
	/**
	 * Names or IDs of the fields to include in each returned record. If left empty, all fields are returned.
	 *
	 * Items: Name or ID of a field to include.
	 */
	fields?: string[];
	/**
	 * Number of records returned by this single call. Must be 100 or less. Defaults to 100.
	 */
	pageSize?: number;
	/**
	 * Maximum total number of records intended to be collected across multiple paginated calls. If larger than 'Page size', use the 'Offset' output from this call as the 'Offset' input of the next call to fetch further pages.
	 */
	maxRecords?: number;
	/**
	 * Pagination cursor returned by a previous call to this endpoint (as 'Offset' in the response). Pass it here to fetch the next page of records.
	 */
	offset?: string;
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
	 * If enabled, each record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.
	 */
	returnFieldsByFieldId?: boolean;
	/**
	 * If enabled, linked record fields are returned as objects with an 'id' property (and, where configured, date-dependency details) instead of plain record ID strings.
	 */
	includeDateDependencyMetadata?: boolean;
	/**
	 * Additional per-record metadata to include in the response. Currently only 'Comment count' is supported.
	 */
	recordMetadata?: '' | 'commentCount';
};

export type ListRecordsOutput = {
	/**
	 * The page of records returned by this call.
	 */
	records?: {
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
		/**
		 * Number of comments on the record. Only present when 'Record metadata' includes 'Comment count'.
		 */
		commentCount?: number;
	}[];
	/**
	 * Pagination cursor. Present only when more records remain; pass it back as the 'Offset' input parameter to fetch the next page.
	 */
	offset?: string;
};

/**
 * List records
 * Lists records from a table, with optional filtering, sorting, view selection, and field selection. Supports pagination via offset.
 */
export async function listRecords(
	this: EndpointFunctionThis,
	payload: {
		input: ListRecordsInput;
		connectionId: number;
	},
): Promise<ListRecordsOutput> {
	const response = await this.endpointCaller<ListRecordsOutput>(
		{
			appName: 'airtable',
			appVersion: 3,
			endpointName: 'listRecords',
		},
		payload,
	);
	return response.output;
}
