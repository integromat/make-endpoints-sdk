// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type ListColumnsInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * If true, returns only visible columns. Applies to base tables only, not to views.
	 */
	visibleOnly?: boolean;
	/**
	 * Maximum number of columns to return in this call (1-100). The API defaults to 25.
	 */
	limit?: number;
	/**
	 * Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.
	 */
	pageToken?: string;
};

export type ListColumnsOutput = {
	/**
	 * The columns on this page of results.
	 *
	 * Items: Info about a column.
	 */
	items?: {
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
		/**
		 * Name of the column.
		 */
		name?: string;
		/**
		 * Whether the column is the display column of the table.
		 */
		display?: boolean;
		/**
		 * Whether the column has a formula set on it.
		 */
		calculated?: boolean;
		/**
		 * Formula on the column, for example `thisRow.Created()`.
		 */
		formula?: string;
		/**
		 * Default value formula for the column.
		 */
		defaultValue?: string;
		/**
		 * Format of the column. `type` and `isArray` are always present; the other fields depend on the format type.
		 */
		format?: {
			/**
			 * Format type of the column: `text`, `person`, `lookup`, `number`, `percent`, `currency`, `date`, `dateTime`, `time`, `duration`, `email`, `link`, `slider`, `scale`, `image`, `imageReference`, `attachments`, `button`, `checkbox`, `select`, `packObject`, `reaction`, `canvas`, or `other`.
			 */
			type?: string;
			/**
			 * Whether the column holds an array of values.
			 */
			isArray?: boolean;
			/**
			 * Button columns: label formula for the button.
			 */
			label?: string;
			/**
			 * Button columns: formula that disables the button when true.
			 */
			disableIf?: string;
			/**
			 * Button columns: action formula for the button.
			 */
			action?: string;
			/**
			 * Checkbox columns: `toggle` or `check`. Slider columns: `slider` or `progress`.
			 */
			displayType?: string;
			/**
			 * Date and time columns: a format string in [Moment syntax](https://momentjs.com/docs/#/displaying/), for example `YYYY-MM-DD`. Currency columns: `currency`, `accounting`, or `financial`.
			 */
			format?: string;
			/**
			 * Date and time columns: date format string in [Moment syntax](https://momentjs.com/docs/#/displaying/).
			 */
			dateFormat?: string;
			/**
			 * Date and time columns: time format string in [Moment syntax](https://momentjs.com/docs/#/displaying/).
			 */
			timeFormat?: string;
			/**
			 * Numeric, currency, and duration columns: the decimal precision.
			 */
			precision?: number;
			/**
			 * Duration columns: the largest time unit shown: `days`, `hours`, `minutes`, or `seconds`.
			 */
			maxUnit?: string;
			/**
			 * Email columns: `iconAndEmail`, `iconOnly`, or `emailOnly`. Link columns: `iconOnly`, `url`, `title`, `card`, or `embed`.
			 */
			display?: string;
			/**
			 * Email columns: whether email autocomplete is enabled.
			 */
			autocomplete?: boolean;
			/**
			 * Link columns: whether embeds render on the client instead of the server, for sites that require user login.
			 */
			force?: boolean;
			/**
			 * Currency columns: the currency symbol, for example `$`.
			 */
			currencyCode?: string;
			/**
			 * Image reference columns: the image width, as a number or a formula string that evaluates to a number.
			 */
			width?: Record<string, JSONValue>;
			/**
			 * Image reference columns: the image height, as a number or a formula string that evaluates to a number.
			 */
			height?: Record<string, JSONValue>;
			/**
			 * Image reference columns: how the image is shown: `auto` or `circle`.
			 */
			style?: string;
			/**
			 * Numeric columns: whether a thousands separator is used.
			 */
			useThousandsSeparator?: boolean;
			/**
			 * Lookup (reference) columns: the table the column refers to.
			 */
			table?: {
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
			 * Select columns: the available options, when the select list uses a fixed set. Up to the first 5000 options.
			 *
			 * Items: An option of the select column.
			 */
			options?: {
				/**
				 * The name of the option.
				 */
				name?: string;
				/**
				 * The background color of the option, for example `#ff0000`.
				 */
				backgroundColor?: string;
				/**
				 * The foreground color of the option, for example `#ffffff`.
				 */
				foregroundColor?: string;
			}[];
			/**
			 * Scale columns: the maximum number allowed. Slider columns: the maximum, as a number or a formula string.
			 */
			maximum?: Record<string, JSONValue>;
			/**
			 * Scale columns: the icon set, for example `star`, `heart`, or `thumbsup`.
			 */
			icon?: string;
			/**
			 * Slider columns: the minimum, as a number or a formula string.
			 */
			minimum?: Record<string, JSONValue>;
			/**
			 * Slider columns: the step, as a number or a formula string.
			 */
			step?: Record<string, JSONValue>;
			/**
			 * Slider columns: whether the underlying numeric value is also shown.
			 */
			showValue?: boolean;
		};
	}[];
	/**
	 * API link to these results.
	 */
	href?: string;
	/**
	 * Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.
	 */
	nextPageToken?: string;
	/**
	 * API link to the next page of results. Absent when there are no more results.
	 */
	nextPageLink?: string;
};

/**
 * List columns
 * Returns a list of columns in a table.
 */
export async function listColumns(
	this: EndpointFunctionThis,
	payload: {
		input: ListColumnsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListColumnsOutput>> {
	const response = await this.endpointCaller<ListColumnsOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'listColumns',
		},
		payload,
	);
	return response;
}
