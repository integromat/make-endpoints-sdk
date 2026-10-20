// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchNotesInput = {
	/**
	 * A free-text search term of up to 3,000 characters, matched against the note's default searchable properties.
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
		 * Items: A property comparison used to match notes.
		 */
		filters?: {
			/**
			 * The internal name of the note property to filter.
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
	 * Internal names of note properties to include in each result.
	 *
	 * Items: The internal name of a note property to return.
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

export type SearchNotesOutput = {
	/**
	 * The total number of matching notes, subject to HubSpot's 10,000-result search ceiling.
	 */
	total?: number;
	/**
	 * The matching notes on this page.
	 *
	 * Items: A matching note record.
	 */
	results?: {
		/**
		 * The unique ID of the note.
		 */
		id?: string;
		/**
		 * The requested note properties, keyed by internal property name.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * The date and time when the note was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the note was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the note is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the note was archived, when available.
		 */
		archivedAt?: string;
		/**
		 * The trace ID associated with the object write, when available.
		 */
		objectWriteTraceId?: string;
		/**
		 * Note property values and their history, keyed by internal property name, when returned.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * The URL associated with the note, when returned.
		 */
		url?: string;
		/**
		 * Warnings returned for this note.
		 *
		 * Items: A warning associated with the note.
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
 * Search notes
 * Searches notes using a query, filters, sorting, and cursor pagination.
 */
export async function searchNotes(
	this: EndpointFunctionThis,
	payload: {
		input: SearchNotesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchNotesOutput> {
	const response = await this.endpointCaller<SearchNotesOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'searchNotes',
		},
		payload,
	);
	return response.output;
}
