// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetTableInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * If true, `layout` returns `detail` and `form` for detail and form layouts, instead of `masterDetail` for both.
	 */
	useUpdatedTableLayouts?: boolean;
};

export type GetTableOutput = {
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
	/**
	 * Reference to the base table, when this table is a view.
	 */
	parentTable?: {
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
	/**
	 * Reference to the display column of the table.
	 */
	displayColumn?: {
		/**
		 * ID of the column, for example `c-tuVwxYz`.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `column`.
		 */
		type?: string;
		/**
		 * API link to the column.
		 */
		href?: string;
	};
	/**
	 * Total number of rows in the table.
	 */
	rowCount?: number;
	/**
	 * Sorts applied to the table.
	 *
	 * Items: A sort applied to the table.
	 */
	sorts?: {
		/**
		 * Reference to the sorted column.
		 */
		column?: {
			/**
			 * ID of the column, for example `c-tuVwxYz`.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `column`.
			 */
			type?: string;
			/**
			 * API link to the column.
			 */
			href?: string;
		};
		/**
		 * Direction of the sort: `ascending` or `descending`.
		 */
		direction?: string;
	}[];
	/**
	 * Layout type of the table or view: `default`, `areaChart`, `barChart`, `bubbleChart`, `calendar`, `card`, `detail`, `form`, `ganttChart`, `lineChart`, `masterDetail`, `pieChart`, `scatterChart`, `slide`, or `wordCloud`.
	 */
	layout?: string;
	/**
	 * Details about the filter formula applied to the table, if any.
	 */
	filter?: {
		/**
		 * Whether the formula is valid.
		 */
		valid?: boolean;
		/**
		 * Whether the formula can return different results in different contexts, for example for different users.
		 */
		isVolatile?: boolean;
		/**
		 * Whether the formula contains a `User()` formula.
		 */
		hasUserFormula?: boolean;
		/**
		 * Whether the formula contains a `Today()` formula.
		 */
		hasTodayFormula?: boolean;
		/**
		 * Whether the formula contains a `Now()` formula.
		 */
		hasNowFormula?: boolean;
	};
	/**
	 * Timestamp for when the table was created.
	 */
	createdAt?: string;
	/**
	 * Timestamp for when the table was last modified.
	 */
	updatedAt?: string;
	/**
	 * ID of the view. `default` for a base table, otherwise the ID of the view, for example `table-pqRst-U`.
	 */
	viewId?: string;
};

/**
 * Get a table
 * Returns details about a table or view in a doc.
 */
export async function getTable(
	this: EndpointFunctionThis,
	payload: {
		input: GetTableInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetTableOutput>> {
	const response = await this.endpointCaller<GetTableOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'getTable',
		},
		payload,
	);
	return response;
}
