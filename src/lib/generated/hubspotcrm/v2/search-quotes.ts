// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchQuotesInput = {
	/**
	 * A free-text search term of up to 3,000 characters, matched against the quote's default searchable properties.
	 */
	query?: string;
	/**
	 * Up to 5 filter groups. Filters within a group are combined with AND; separate groups are combined with OR. Across all groups, use at most 18 filters.
	 *
	 * Items: A group whose filters are combined with AND. Separate groups are combined with OR; requests may contain at most 18 filters in total.
	 */
	filterGroups?: {
		/**
		 * Up to 6 filters combined with AND. Across all groups, use at most 18 filters.
		 *
		 * Items: A property comparison used to match quotes.
		 */
		filters?: {
			/**
			 * The internal name of the quote property to filter.
			 */
			propertyName: string;
			/**
			 * Use `value` with EQ, NEQ, LT, LTE, GT, GTE, or CONTAINS_TOKEN; use `value` and `highValue` with BETWEEN; use `values` with IN or NOT_IN; HAS_PROPERTY and NOT_HAS_PROPERTY need no value. Strings supplied to IN and NOT_IN must be lowercase.
			 */
			operator:
				| 'BETWEEN'
				| 'CONTAINS_TOKEN'
				| 'EQ'
				| 'GT'
				| 'GTE'
				| 'HAS_PROPERTY'
				| 'IN'
				| 'LT'
				| 'LTE'
				| 'NEQ'
				| 'NOT_CONTAINS_TOKEN'
				| 'NOT_HAS_PROPERTY'
				| 'NOT_IN';
			/**
			 * The comparison value for single-value operators, or the lower bound for BETWEEN.
			 */
			value?: string;
			/**
			 * The upper bound when **Operator** is BETWEEN.
			 */
			highValue?: string;
			/**
			 * Comparison values when **Operator** is IN or NOT_IN. String values must be lowercase.
			 *
			 * Items: A lowercase string to compare with the selected property.
			 */
			values?: string[];
		}[];
	}[];
	/**
	 * Internal names of quote properties to include in each result.
	 *
	 * Items: The internal name of a quote property to return.
	 */
	properties?: string[];
	/**
	 * At most one sort expression, such as `hs_createdate` for ascending or `-hs_createdate` for descending order.
	 *
	 * Items: A property name, optionally prefixed with `-` for descending order.
	 */
	sorts?: string[];
	/**
	 * The `paging.next.after` cursor from the previous response.
	 */
	after?: string;
	/**
	 * The maximum number of results to return, up to 200.
	 */
	limit?: number;
};

export type SearchQuotesOutput = {
	/**
	 * The total number of matching quotes, subject to HubSpot's 10,000-result search ceiling.
	 */
	total?: number;
	/**
	 * The matching quotes on this page.
	 *
	 * Items: A matching quote record.
	 */
	results?: {
		/**
		 * The unique ID of the quote.
		 */
		id?: string;
		/**
		 * The requested quote properties, keyed by internal property name.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * The date and time when the quote was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the quote was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the quote is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the quote was archived, when available.
		 */
		archivedAt?: string;
		/**
		 * The trace ID associated with the object write, when available.
		 */
		objectWriteTraceId?: string;
		/**
		 * Quote property values and their history, keyed by internal property name, when returned.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * The URL associated with the quote, when returned.
		 */
		url?: string;
		/**
		 * Warnings returned for this quote.
		 *
		 * Items: A warning associated with the quote.
		 */
		warnings?: {
			/**
			 * The warning category.
			 */
			category?: string;
			/**
			 * Additional structured context for the warning.
			 */
			context?: Record<string, JSONValue>;
			/**
			 * The warning message.
			 */
			message?: string;
		}[];
	}[];
	/**
	 * Cursor links for adjacent result pages.
	 */
	paging?: {
		/**
		 * Cursor and link for the next page, when available.
		 */
		next?: {
			/**
			 * The cursor for the next page.
			 */
			after?: string;
			/**
			 * The URL for the next page.
			 */
			link?: string;
		};
		/**
		 * Cursor and link for the previous page, when available.
		 */
		prev?: {
			/**
			 * The cursor for the previous page.
			 */
			before?: string;
			/**
			 * The URL for the previous page.
			 */
			link?: string;
		};
	};
};

/**
 * Search quotes
 * Searches quotes using a query, filters, sorting, and cursor pagination.
 */
export async function searchQuotes(
	this: EndpointFunctionThis,
	payload: {
		input: SearchQuotesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchQuotesOutput> {
	const response = await this.endpointCaller<SearchQuotesOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'searchQuotes',
		},
		payload,
	);
	return response.output;
}
