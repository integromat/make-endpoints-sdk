// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateRecordInput = {
	/**
	 * ID of the base that contains the table, for example `appX1Y2Z3`. Use the Get base schema or List bases endpoint to find it.
	 */
	base: string;
	/**
	 * Name or ID of the table to create the record in, for example `Table One` or `tbl5MgBETBiBY5IOA`. Use the Get base schema endpoint to find it.
	 */
	table: string;
	/**
	 * Cell values for the new record, as an object keyed by field name or field ID, for example `{"Name": "Union Square", "Visited": true}`. Use the Get base schema endpoint to find the table's field names, IDs, and types.
	 */
	fields: Record<string, JSONValue>;
	/**
	 * If enabled, the Airtable API performs best-effort automatic data conversion from string values (for example turning a plain string into a matching linked record or select option, creating new select options if needed). Disabled by default to protect data integrity.
	 */
	typecast?: boolean;
	/**
	 * If enabled, the created record's 'Fields' object is keyed by field ID instead of field name. Useful to make results resilient to field renames.
	 */
	returnFieldsByFieldId?: boolean;
};

export type CreateRecordOutput = {
	/**
	 * Unique identifier of the newly created record (starts with 'rec').
	 */
	id?: string;
	/**
	 * Date and time the record was created, in ISO 8601 format.
	 */
	createdTime?: string;
	/**
	 * Cell values of the created record, keyed by field name (or by field ID if 'Return fields by field ID' was enabled). Shape varies depending on the table's schema; use the Get base schema endpoint to inspect field names, types, and options for a given table.
	 */
	fields?: Record<string, JSONValue>;
	/**
	 * Present only when the record was created but part of the request partially failed (for example, an attachment could not be uploaded).
	 */
	details?: {
		/**
		 * Always 'partialSuccess' when the 'Details' object is present.
		 */
		message?: string;
		/**
		 * List of reasons explaining the partial failure.
		 *
		 * Items: Reason code for the partial failure, for example 'attachmentsFailedUploading' or 'attachmentUploadRateIsTooHigh'.
		 */
		reasons?: string[];
	};
};

/**
 * Create record
 * Creates a new record in a table with the given field values.
 */
export async function createRecord(
	this: EndpointFunctionThis,
	payload: {
		input: CreateRecordInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateRecordOutput> {
	const response = await this.endpointCaller<CreateRecordOutput>(
		{
			appName: 'airtable',
			appVersion: 3,
			endpointName: 'createRecord',
		},
		payload,
	);
	return response.output;
}
