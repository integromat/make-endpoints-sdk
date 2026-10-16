// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RunSuiteQLQueryInput = {
	/**
	 * A SuiteQL `SELECT` statement, for example `SELECT id, companyname FROM customer WHERE companyname LIKE 'Acme%'`. Table and column names are lower case — `companyname`, not the camel case `companyName` the record endpoints use. String literals take single quotes. Only read queries are supported; `INSERT`, `UPDATE`, and `DELETE` are rejected. Unlike the Search records endpoint, joins across tables are allowed.
	 */
	q: string;
	/**
	 * Maximum number of rows to return on one page, between 1 and 1000. NetSuite defaults to 1000 when omitted.
	 */
	limit?: number;
	/**
	 * Number of rows to skip, for paging through results. Must be divisible by `limit`, otherwise NetSuite returns a 400 error — with a limit of 10, valid offsets are 0, 10, 20, and so on. Defaults to 0.
	 */
	offset?: number;
};

export type RunSuiteQLQueryOutput = {
	/**
	 * The result rows. Each row's properties are the columns named in the `SELECT` clause, lower-cased, so they vary per query and are not enumerated here. Aliasing a column in SQL changes its key in the output.
	 *
	 * Items: A single result row, keyed by the selected column names.
	 */
	items?: {
		/**
		 * Hypermedia links for the row. Empty for SuiteQL results, which are projections rather than addressable records.
		 *
		 * Items: A single hypermedia link.
		 */
		links?: {
			/**
			 * Relationship of the link to the row.
			 */
			rel?: string;
			/**
			 * Absolute URL the link points to.
			 */
			href?: string;
		}[];
	}[];
	/**
	 * Number of rows returned on this page, which is at most `limit`.
	 */
	count?: number;
	/**
	 * Total number of rows the query matches across all pages, not just this page.
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
	 * Pagination links for the result set, with relationships such as `self`, `next`, and `last`. The `last` link's offset reveals the final page.
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
		 * HTTP method to use with the URL, which is `POST` for SuiteQL.
		 */
		method?: string;
	}[];
};

/**
 * Run a SuiteQL query
 * Runs a read-only SuiteQL SELECT statement against the NetSuite account and returns the resulting rows.
 */
export async function runSuiteQlquery(
	this: EndpointFunctionThis,
	payload: {
		input: RunSuiteQLQueryInput;
		connectionId: number;
	},
): Promise<RunSuiteQLQueryOutput> {
	const response = await this.endpointCaller<RunSuiteQLQueryOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'runSuiteQLQuery',
		},
		payload,
	);
	return response.output;
}
