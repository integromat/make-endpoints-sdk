// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchDealsInput = {
	/**
	 * Free-text search term matched against the object's default searchable properties. Maximum 3,000 characters.
	 */
	query?: string;
	/**
	 * Filter groups to apply. Filters within a group use AND; groups use OR. Maximum 5 groups and 18 filters total.
	 *
	 * Items: A group of up to 6 filters combined with AND.
	 */
	filterGroups?: {
		/**
		 * Filters combined with AND. Maximum 6 filters in this group and 18 across all groups.
		 *
		 * Items: A property filter. Supply value, high value, or values as required by the selected operator.
		 */
		filters?: {
			/**
			 * Internal name of the property to filter.
			 */
			propertyName: string;
			/**
			 * Comparison operator. BETWEEN uses Value and High value; IN and NOT_IN use Values; HAS_PROPERTY and NOT_HAS_PROPERTY require no value; other operators use Value.
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
			 * Comparison value for operators that accept one value. Also supplies the lower bound for BETWEEN.
			 */
			value?: string;
			/**
			 * Upper bound used only with the BETWEEN operator.
			 */
			highValue?: string;
			/**
			 * Comparison values used by IN and NOT_IN. String values must be lowercase.
			 *
			 * Items: A lowercase string value for IN or NOT_IN.
			 */
			values?: string[];
		}[];
	}[];
	/**
	 * Internal names of properties to return for each record.
	 *
	 * Items: Internal name of a property to include.
	 */
	properties?: string[];
	/**
	 * Property sort expression. HubSpot accepts only one sort for this operation.
	 *
	 * Items: Sort expression in the format expected by HubSpot, such as `-createdate`.
	 */
	sorts?: string[];
	/**
	 * Cursor from `paging.next.after` in the previous response.
	 */
	after?: string;
	/**
	 * Maximum number of records to return in this page. Maximum 200.
	 */
	limit?: number;
};

export type SearchDealsOutput = {
	/**
	 * Total number of matching records, up to HubSpot's 10,000-result query limit.
	 */
	total?: number;
	/**
	 * Records returned for this page.
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
		 * Trace identifier associated with the record write, when available.
		 */
		objectWriteTraceId?: string;
		/**
		 * Property values and their history, when returned.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * URL of the record, when returned.
		 */
		url?: string;
		/**
		 * Warnings returned for this record.
		 *
		 * Items: A warning associated with the record.
		 */
		warnings?: {
			/**
			 * Warning category.
			 */
			category?: string;
			/**
			 * Additional structured warning context.
			 */
			context?: Record<string, JSONValue>;
			/**
			 * Warning message.
			 */
			message?: string;
		}[];
	}[];
	/**
	 * Cursors and links for adjacent result pages.
	 */
	paging?: {
		/**
		 * Paging information for the next page.
		 */
		next?: {
			/**
			 * Cursor to pass as `after` for the next page.
			 */
			after?: string;
			/**
			 * URL for the next page.
			 */
			link?: string;
		};
		/**
		 * Paging information for the previous page.
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
 * Search deals
 * Searches deals by query and filters.
 */
export async function searchDeals(
	this: EndpointFunctionThis,
	payload: {
		input: SearchDealsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchDealsOutput> {
	const response = await this.endpointCaller<SearchDealsOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'searchDeals',
		},
		payload,
	);
	return response.output;
}
