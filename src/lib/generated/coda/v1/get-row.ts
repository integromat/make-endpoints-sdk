// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type GetRowInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is returned. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.
	 */
	rowIdOrName: string;
	/**
	 * If true, `values` is keyed by column name instead of column ID. Discouraged: code that relies on names breaks when columns are renamed.
	 */
	useColumnNames?: boolean;
	/**
	 * The format of the returned cell values. The API defaults to `simple`.
	 */
	valueFormat?: '' | 'simple' | 'simpleWithArrays' | 'rich';
};

export type GetRowOutput = {
	/**
	 * ID of the row, for example `i-tuVwxYz`.
	 */
	id?: string;
	/**
	 * The type of this resource. Always `row`.
	 */
	type?: string;
	/**
	 * API link to the row.
	 */
	href?: string;
	/**
	 * The display name of the row, based on its identifying column.
	 */
	name?: string;
	/**
	 * Index of the row within the table.
	 */
	index?: number;
	/**
	 * Browser-friendly link to the row.
	 */
	browserLink?: string;
	/**
	 * Timestamp for when the row was created.
	 */
	createdAt?: string;
	/**
	 * Timestamp for when the row was last modified.
	 */
	updatedAt?: string;
	/**
	 * Cell values of the row, keyed by column ID (or by column name when `useColumnNames` is true). The value shape depends on `valueFormat`.
	 */
	values?: Record<string, JSONValue>;
	/**
	 * Reference to the table containing the row.
	 */
	parent?: {
		/**
		 * ID of the table, for example `grid-pqRst-U`.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `table`.
		 */
		type?: string;
		/**
		 * The kind of table: `table`, `view`, or `database`.
		 */
		tableType?: string;
		/**
		 * API link to the table.
		 */
		href?: string;
		/**
		 * Browser-friendly link to the table.
		 */
		browserLink?: string;
		/**
		 * Name of the table.
		 */
		name?: string;
		/**
		 * Reference to the page containing the table.
		 */
		parent?: {
			/**
			 * ID of the page.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `page`.
			 */
			type?: string;
			/**
			 * API link to the page.
			 */
			href?: string;
			/**
			 * Browser-friendly link to the page.
			 */
			browserLink?: string;
			/**
			 * Name of the page.
			 */
			name?: string;
		};
	};
};

/**
 * Get a row
 * Returns details about a row in a table.
 */
export async function getRow(
	this: EndpointFunctionThis,
	payload: {
		input: GetRowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetRowOutput>> {
	const response = await this.endpointCaller<GetRowOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'getRow',
		},
		payload,
	);
	return response;
}
