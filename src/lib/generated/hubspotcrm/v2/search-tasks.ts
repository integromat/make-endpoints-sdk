// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchTasksInput = {
	/**
	 * A free-text search term of up to 3,000 characters, matched against the task's default searchable properties.
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
		 * Items: A property comparison used to match tasks.
		 */
		filters?: {
			/**
			 * The internal name of the task property to filter.
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
	 * Internal names of task properties to include in each result.
	 *
	 * Items: The internal name of a task property to return.
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

export type SearchTasksOutput = {
	/**
	 * The total number of matching tasks, subject to HubSpot's 10,000-result search ceiling.
	 */
	total?: number;
	/**
	 * The matching tasks on this page.
	 *
	 * Items: A matching task record.
	 */
	results?: {
		/**
		 * The unique ID of the task.
		 */
		id?: string;
		/**
		 * The requested task properties, keyed by internal property name.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * The date and time when the task was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the task was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the task is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the task was archived, when available.
		 */
		archivedAt?: string;
		/**
		 * The trace ID associated with the object write, when available.
		 */
		objectWriteTraceId?: string;
		/**
		 * Task property values and their history, keyed by internal property name, when returned.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * The URL associated with the task, when returned.
		 */
		url?: string;
		/**
		 * Warnings returned for this task.
		 *
		 * Items: A warning associated with the task.
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
 * Search tasks
 * Searches tasks using a query, filters, sorting, and cursor pagination.
 */
export async function searchTasks(
	this: EndpointFunctionThis,
	payload: {
		input: SearchTasksInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchTasksOutput> {
	const response = await this.endpointCaller<SearchTasksOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'searchTasks',
		},
		payload,
	);
	return response.output;
}
