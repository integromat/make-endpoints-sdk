// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type InsertRowsInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the dataset.
	 */
	datasetId: string;
	/**
	 * The ID of the table.
	 */
	tableId: string;
	/**
	 * The rows to insert. Each entry holds the row data as a JSON object whose keys are the table column names.
	 *
	 * Items: Data for a single insertion row.
	 */
	rows: {
		/**
		 * Data for a single row as a JSON object keyed by column name, e.g. `{"name": "Alice", "age": 30}`. Nested records are nested objects, repeated fields are arrays. A `null` value is sent as is.
		 */
		json: Record<string, JSONValue>;
		/**
		 * Insertion ID for best-effort deduplication. This feature is not recommended, and users seeking stronger insertion semantics are encouraged to use other mechanisms such as the BigQuery Write API.
		 */
		insertId?: string;
	}[];
	/**
	 * Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
	 */
	skipInvalidRows?: boolean;
	/**
	 * Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
	 */
	ignoreUnknownValues?: boolean;
	/**
	 * If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See [Template tables](https://cloud.google.com/bigquery/docs/streaming-data-into-bigquery#template-tables) for considerations when working with templates tables.
	 */
	templateSuffix?: string;
	/**
	 * Unique request trace id. Used for debugging purposes only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended.
	 */
	traceId?: string;
};

export type InsertRowsOutput = {
	/**
	 * Returns "bigquery#tableDataInsertAllResponse".
	 */
	kind?: string;
	/**
	 * Describes specific errors encountered while processing the request.
	 *
	 * Items: Error details about a single row's insertion.
	 */
	insertErrors?: {
		/**
		 * Error information for the row indicated by the index property.
		 *
		 * Items: Error details.
		 */
		errors?: {
			/**
			 * A short error code that summarizes the error.
			 */
			reason?: string;
			/**
			 * Specifies where the error occurred, if present.
			 */
			location?: string;
			/**
			 * A human-readable description of the error.
			 */
			message?: string;
			/**
			 * Debugging information. This property is internal to Google and should not be used.
			 */
			debugInfo?: string;
		}[];
		/**
		 * The index of the row that error applies to.
		 */
		index?: number;
	}[];
};

/**
 * Insert rows
 * Streams data into BigQuery one record at a time without needing to run a load job.
 */
export async function insertRows(
	this: EndpointFunctionThis,
	payload: {
		input: InsertRowsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<InsertRowsOutput>> {
	const response = await this.endpointCaller<InsertRowsOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'insertRows',
		},
		payload,
	);
	return response;
}
