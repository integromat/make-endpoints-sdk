// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetBaseSchemaInput = {
	/**
	 * ID of the base to retrieve the schema for, for example `appX1Y2Z3`. Use the List bases endpoint to find it.
	 */
	base: string;
};

export type GetBaseSchemaOutput = {
	/**
	 * List of tables that belong to the base, each including its fields and views.
	 */
	tables?: {
		/**
		 * Unique identifier of the table (starts with 'tbl').
		 */
		id?: string;
		/**
		 * Name of the table as shown in the Airtable UI.
		 */
		name?: string;
		/**
		 * ID of the field that acts as the table's primary field (the first column, used to identify records).
		 */
		primaryFieldId?: string;
		/**
		 * List of fields (columns) defined on the table.
		 */
		fields?: {
			/**
			 * Airtable field type, for example 'singleLineText', 'multipleSelects', or 'number'.
			 */
			type?: string;
			/**
			 * Type-specific configuration for the field, shaped differently depending on 'Type' (for example 'choices' for select fields, 'linkedTableId' for linked record fields, 'precision' for number fields, 'symbol' for currency fields, etc.). Only present for field types that support extra options. See Airtable's Field model reference for the exact shape per type: https://airtable.com/developers/web/api/field-model
			 */
			options?: Record<string, JSONValue>;
			/**
			 * Unique identifier of the field (starts with 'fld').
			 */
			id?: string;
			/**
			 * Name of the field (column) as shown in the Airtable UI.
			 */
			name?: string;
		}[];
		/**
		 * List of views defined on the table.
		 */
		views?: {
			/**
			 * Unique identifier of the view (starts with 'viw').
			 */
			id?: string;
			/**
			 * Name of the view as shown in the Airtable UI.
			 */
			name?: string;
			/**
			 * Type of the view, for example 'grid', 'form', 'calendar', or 'kanban'.
			 */
			type?: string;
		}[];
	}[];
};

/**
 * Get base schema
 * Returns the base schema.
 */
export async function getBaseSchema(
	this: EndpointFunctionThis,
	payload: {
		input: GetBaseSchemaInput;
		connectionId: number;
	},
): Promise<GetBaseSchemaOutput> {
	const response = await this.endpointCaller<GetBaseSchemaOutput>(
		{
			appName: 'airtable',
			appVersion: 3,
			endpointName: 'getBaseSchema',
		},
		payload,
	);
	return response.output;
}
