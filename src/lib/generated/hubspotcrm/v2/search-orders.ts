// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchOrdersInput = {
	/**
	 * Free-text search across the order properties that HubSpot makes searchable. Maximum 3,000 characters.
	 */
	query?: string;
	/**
	 * Filter groups are combined with OR. Maximum 5 groups and 18 filters total across all groups.
	 *
	 * Items: A group of filters combined with AND.
	 */
	filterGroups?: {
		/**
		 * Filters in this group are combined with AND. Maximum 6 filters per group and 18 filters total.
		 *
		 * Items: A property filter for this order search.
		 */
		filters?: {
			/**
			 * Internal name of the order property to filter.
			 */
			propertyName: string;
			/**
			 * Comparison: EQ, NEQ, GT, GTE, LT, LTE. Range: BETWEEN uses value and high value. Text: CONTAINS_TOKEN, NOT_CONTAINS_TOKEN. Presence: HAS_PROPERTY, NOT_HAS_PROPERTY. Membership: IN, NOT_IN use values and lowercase string values.
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
			 * Comparison value. Required by single-value operators and the lower bound for BETWEEN.
			 */
			value?: string;
			/**
			 * Upper bound used only with BETWEEN.
			 */
			highValue?: string;
			/**
			 * Values used with IN or NOT_IN. String values must be lowercase.
			 *
			 * Items: A lowercase string value for IN or NOT_IN.
			 */
			values?: string[];
		}[];
	}[];
	/**
	 * Internal names of order properties to return.
	 *
	 * Items: Internal name of an order property to include.
	 */
	properties?: string[];
	/**
	 * Sort expression. HubSpot accepts at most one sort.
	 *
	 * Items: Property sort expression, such as createdate or -createdate.
	 */
	sorts?: string[];
	/**
	 * Paging cursor from paging.next.after in the previous response.
	 */
	after?: string;
	/**
	 * Number of results in this page. Maximum 200.
	 */
	limit?: number;
};

export type SearchOrdersOutput = {
	/**
	 * Total number of matching orders, up to HubSpot's 10,000-result query limit.
	 */
	total?: number;
	/**
	 * Matching orders in this page.
	 *
	 * Items: A matching HubSpot order.
	 */
	results?: {
		/**
		 * Unique order record ID.
		 */
		id?: string;
		/**
		 * Current order property values.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * Date and time when the order was created.
		 */
		createdAt?: string;
		/**
		 * Date and time when the order was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the order is archived.
		 */
		archived?: boolean;
		/**
		 * Date and time when the order was archived, when applicable.
		 */
		archivedAt?: string;
		/**
		 * HubSpot write trace identifier, when returned.
		 */
		objectWriteTraceId?: string;
		/**
		 * Order property history, when returned.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * HubSpot URL for the order, when returned.
		 */
		url?: string;
		/**
		 * Warnings returned by HubSpot for this order.
		 *
		 * Items: A HubSpot search warning.
		 */
		warnings?: {
			/**
			 * Warning category.
			 */
			category?: string;
			/**
			 * Structured context associated with the warning.
			 */
			context?: Record<string, JSONValue>;
			/**
			 * Human-readable warning message.
			 */
			message?: string;
		}[];
	}[];
	/**
	 * Paging cursors and links for adjacent result pages.
	 */
	paging?: {
		/**
		 * Details for the next page, when available.
		 */
		next?: {
			/**
			 * Cursor to pass as after for the next page.
			 */
			after?: string;
			/**
			 * HubSpot link to the next page.
			 */
			link?: string;
		};
		/**
		 * Details for the previous page, when available.
		 */
		prev?: {
			/**
			 * Cursor identifying the previous page.
			 */
			before?: string;
			/**
			 * HubSpot link to the previous page.
			 */
			link?: string;
		};
	};
};

/**
 * Search orders
 * Searches HubSpot orders by free-text query and structured filters.
 */
export async function searchOrders(
	this: EndpointFunctionThis,
	payload: {
		input: SearchOrdersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchOrdersOutput> {
	const response = await this.endpointCaller<SearchOrdersOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'searchOrders',
		},
		payload,
	);
	return response.output;
}
