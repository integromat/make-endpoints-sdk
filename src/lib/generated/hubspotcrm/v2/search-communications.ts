// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchCommunicationsInput = {
	/**
	 * Free-text query matched against the object's default searchable properties. The query can contain at most 3,000 characters.
	 */
	query?: string;
	/**
	 * Filter groups to apply. Filters within a group are combined with AND; groups are combined with OR. Provide at most 5 groups and 18 filters total.
	 *
	 * Items: A group of up to 6 filters that are combined with AND.
	 */
	filterGroups?: {
		/**
		 * Filters in this group. These filters are combined with AND; use separate groups for OR conditions.
		 *
		 * Items: A property filter. Required value fields depend on the selected operator.
		 */
		filters?: {
			/**
			 * Internal name of the property to filter by.
			 */
			propertyName: string;
			/**
			 * Comparison operator. BETWEEN uses value and high value; IN and NOT_IN use values; HAS_PROPERTY and NOT_HAS_PROPERTY use no value; all other operators use value.
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
			 * Comparison value for operators that take one value, and the lower bound for BETWEEN.
			 */
			value?: string;
			/**
			 * Upper bound required when the operator is BETWEEN.
			 */
			highValue?: string;
			/**
			 * Comparison values required for IN and NOT_IN. String values must be lowercase.
			 *
			 * Items: A lowercase string value for IN or NOT_IN.
			 */
			values?: string[];
		}[];
	}[];
	/**
	 * Internal names of properties to include in each result.
	 *
	 * Items: Internal name of a property to return.
	 */
	properties?: string[];
	/**
	 * Sort expression. HubSpot accepts at most one string sort for this operation.
	 *
	 * Items: Property sort expression accepted by HubSpot's 2026-03 search operation.
	 */
	sorts?: string[];
	/**
	 * Cursor from paging.next.after in the previous response.
	 */
	after?: string;
	/**
	 * Maximum number of records to return on this page, up to 200.
	 */
	limit?: number;
};

export type SearchCommunicationsOutput = {
	/**
	 * Total number of matching records available for the query.
	 */
	total?: number;
	/**
	 * Matching records returned on this page.
	 *
	 * Items: A matching CRM record.
	 */
	results?: {
		/**
		 * Unique record ID.
		 */
		id?: string;
		/**
		 * Current property values returned for the record.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * Date and time when the record was created.
		 */
		createdAt?: string;
		/**
		 * Date and time when the record was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the record is archived.
		 */
		archived?: boolean;
		/**
		 * Date and time when the record was archived, when available.
		 */
		archivedAt?: string;
		/**
		 * Trace identifier associated with the object write.
		 */
		objectWriteTraceId?: string;
		/**
		 * Property values with history when returned by HubSpot.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * URL associated with the record when returned by HubSpot.
		 */
		url?: string;
		/**
		 * Warnings returned for the record.
		 *
		 * Items: A warning returned by HubSpot.
		 */
		warnings?: {
			/**
			 * Warning category.
			 */
			category?: string;
			/**
			 * Additional structured context for the warning.
			 */
			context?: Record<string, JSONValue>;
			/**
			 * Warning message.
			 */
			message?: string;
		}[];
	}[];
	/**
	 * Cursor pagination links for adjacent pages.
	 */
	paging?: {
		/**
		 * Information for the next page.
		 */
		next?: {
			/**
			 * Cursor to pass as after to request the next page.
			 */
			after?: string;
			/**
			 * URL for the next page.
			 */
			link?: string;
		};
		/**
		 * Information for the previous page.
		 */
		prev?: {
			/**
			 * Cursor identifying the previous page.
			 */
			before?: string;
			/**
			 * URL for the previous page.
			 */
			link?: string;
		};
	};
};

/**
 * Search communications
 * Searches communications using a query, filters, sorting, properties, and cursor pagination.
 */
export async function searchCommunications(
	this: EndpointFunctionThis,
	payload: {
		input: SearchCommunicationsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchCommunicationsOutput> {
	const response = await this.endpointCaller<SearchCommunicationsOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'searchCommunications',
		},
		payload,
	);
	return response.output;
}
