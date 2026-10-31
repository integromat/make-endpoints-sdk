// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type QueryPurchasingDocumentsInput = {
	/**
	 * Fields to include in the response, for example `key`, `id`, or `vendor.id` for a field of a related object. An aggregate can be requested as `function:fieldName`, for example `sum:totalTxnAmount`. Valid functions are `count`, `avg`, `sum`, `min` and `max`.
	 *
	 * Items: A field name, related-object field, or aggregate.
	 */
	fields?: string[];
	/**
	 * Conditions that select the purchasing documents to return. Each item is an object with one operator and one field, for example `{"$eq": {"state": "approved"}}`. Operators include `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$notIn`, `$between`, `$notBetween`, `$contains`, `$notContains`, `$startsWith`, `$notStartsWith`, `$endsWith`, `$notEndsWith`. Conditions are numbered from 1 in the order given, so you can reference them in **Filter expression**. To limit the results to one document type, filter on the transaction definition, for example `{"$eq": {"txnDefinition.id": "Purchase Order"}}`.
	 *
	 * Items: A filter condition, for example `{"$gte": {"txnDate": "2025-01-01"}}`.
	 */
	filters?: Record<string, JSONValue>[];
	/**
	 * Logical operators to combine multiple filter conditions. Conditions are numbered from 1 in the order given in **Filters**. Supports `and`, `or` and grouping with parentheses. For example, `(1 and 2) or 3`. If empty, all conditions must be true.
	 */
	filterExpression?: string;
	/**
	 * Pre-defined filter options.
	 */
	filterParameters?: {
		/**
		 * The "as of" date used for relative date comparisons in **Filters**, such as `priorMonth`. Use the format `YYYY-MM-DD`. The current date is used if empty.
		 */
		asOfDate?: string;
		/**
		 * Set to `true` to include hierarchical structure information with each object in the response.
		 */
		includeHierarchyFields?: boolean;
		/**
		 * Queries are case-sensitive by default. Set to `false` to ignore case in a query.
		 */
		caseSensitiveComparison?: boolean;
		/**
		 * In a multi-entity company, queries from the top-level entity do not access data in private entities by default. Set to `true` to include data in private entities.
		 */
		includePrivate?: boolean;
	};
	/**
	 * Sort order of the results. Each item is an object with a field name and `asc` or `desc`, for example `{"txnDate": "desc"}`.
	 *
	 * Items: A field name and sort direction, for example `{"txnDate": "asc"}`.
	 */
	orderBy?: Record<string, JSONValue>[];
	/**
	 * First record of the result set to include in the response. Use `meta.next` from the previous response to get the next page. For example, `1`.
	 */
	start?: number;
	/**
	 * Number of records to include in the response. The API maximum is 4000. For example, `100`.
	 */
	size?: number;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type QueryPurchasingDocumentsOutput = {
	/**
	 * The purchasing documents that match the query, with the requested fields only. Returned by the API as `ia::result`.
	 *
	 * Items: A purchasing document with the requested fields.
	 */
	result?: Record<string, JSONValue>[];
	/**
	 * Metadata about the result set. Returned by the API as `ia::meta`.
	 */
	meta?: {
		/**
		 * Total number of records in the result set.
		 */
		totalCount?: number;
		/**
		 * First record of the result set included in this response.
		 */
		start?: number;
		/**
		 * Maximum number of records in this response. The last page may contain fewer.
		 */
		pageSize?: number;
		/**
		 * First record number of the next page. Pass it as **Start** to get the next page. Empty on the last page.
		 */
		next?: number;
		/**
		 * First record number of the previous page. Empty on the first page.
		 */
		previous?: number;
	};
};

/**
 * Search purchasing documents
 * Returns a list of purchasing documents filtered by the specified criteria.
 */
export async function queryPurchasingDocuments(
	this: EndpointFunctionThis,
	payload: {
		input: QueryPurchasingDocumentsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<QueryPurchasingDocumentsOutput> {
	const response = await this.endpointCaller<QueryPurchasingDocumentsOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'queryPurchasingDocuments',
		},
		payload,
	);
	return response.output;
}
