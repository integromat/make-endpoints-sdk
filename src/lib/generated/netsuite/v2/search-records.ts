// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchRecordsInput = {
	/**
	 * Script ID of the record type to search, for example `customer`, `salesOrder`, or `customrecord_my_type`. Use the List record types endpoint to discover valid values. Matching is case-insensitive.
	 */
	recordType: string;
	/**
	 * Filter expression in NetSuite's record query language — **not** SuiteQL. Compares a field to a value with operators such as `IS`, `CONTAIN`, `START_WITH`, `EMPTY`, `BEFORE`, `AFTER`, `ON`, and `ANY_OF`, combined with `AND` / `OR` and parentheses. String values go in double quotes, for example `companyName CONTAIN "acme"` or `email IS "a@b.com" AND isInactive IS false`. Only fields listed in the record type's `x-ns-filterable` array can be filtered; call the Get record definitions endpoint to see that list. Filtering is limited to the record's own body fields — joins across records are not supported, so use the Run SuiteQL query endpoint for those. Leave empty to list all records of the type.
	 */
	q?: string;
	/**
	 * Maximum number of records to return on one page, between 1 and 1000. NetSuite defaults to 1000 when omitted.
	 */
	limit?: number;
	/**
	 * Number of records to skip, for paging through results. Must be divisible by `limit`, otherwise NetSuite returns a 400 error — with a limit of 20, valid offsets are 0, 20, 40, and so on. Defaults to 0.
	 */
	offset?: number;
};

export type SearchRecordsOutput = {
	/**
	 * The matching records, in pages of `count`. Each entry carries only the record's ID and links — no field values. Pass an ID to the Get record endpoint to retrieve the record itself.
	 *
	 * Items: A single matching record, identified by ID only.
	 */
	items?: {
		/**
		 * Internal ID of the record, as a string. Pass this to the Get record endpoint.
		 */
		id?: string;
		/**
		 * Hypermedia links for this record, containing its direct `self` URL.
		 *
		 * Items: A single hypermedia link.
		 */
		links?: {
			/**
			 * Relationship of the link to this record, for example `self`.
			 */
			rel?: string;
			/**
			 * Absolute URL the link points to.
			 */
			href?: string;
			/**
			 * HTTP method to use with the URL, for example `GET`.
			 */
			method?: string;
		}[];
	}[];
	/**
	 * Number of records returned on this page, which is at most `limit`.
	 */
	count?: number;
	/**
	 * Total number of records matching the query across all pages, not just this page.
	 */
	totalResults?: number;
	/**
	 * Whether further pages exist beyond this one. When true, increase `offset` by `limit` to fetch the next page.
	 */
	hasMore?: boolean;
	/**
	 * The offset this page was returned for, echoing the request.
	 */
	offset?: number;
	/**
	 * Pagination links for the result set, with relationships such as `self`, `next`, `previous`, `first`, and `last`. The `last` link's offset reveals the final page.
	 *
	 * Items: A single pagination link.
	 */
	links?: {
		/**
		 * Relationship of the link to this page, for example `next` or `last`.
		 */
		rel?: string;
		/**
		 * Absolute URL of the linked page, including its `limit` and `offset`.
		 */
		href?: string;
		/**
		 * HTTP method to use with the URL, for example `GET`.
		 */
		method?: string;
	}[];
};

/**
 * Search records
 * Returns a paginated list of record IDs of the specified NetSuite record type, optionally filtered with a query expression.
 */
export async function searchRecords(
	this: EndpointFunctionThis,
	payload: {
		input: SearchRecordsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchRecordsOutput> {
	const response = await this.endpointCaller<SearchRecordsOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'searchRecords',
		},
		payload,
	);
	return response.output;
}
