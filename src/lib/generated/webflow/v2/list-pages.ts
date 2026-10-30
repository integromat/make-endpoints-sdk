// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListPagesInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	localeId?: string;
	/**
	 * Filter by the created on date. Provide `gte` (from) and/or `lte` (to); sent as `createdOn[gte]` / `createdOn[lte]`.
	 */
	createdOn?: {
		/**
		 * Filter pages created before this date.
		 */
		lte?: string;
		/**
		 * Filter pages created after this date.
		 */
		gte?: string;
	};
	/**
	 * Filter by the last updated date. Provide `gte` (from) and/or `lte` (to); sent as `lastUpdated[gte]` / `lastUpdated[lte]`.
	 */
	lastUpdated?: {
		/**
		 * Filter pages last updated before this date.
		 */
		lte?: string;
		/**
		 * Filter pages last updated after this date.
		 */
		gte?: string;
	};
	/**
	 * Sort results by the provided value. Defaults to `createdOn` if not provided.
	 */
	sortBy?: '' | 'createdOn' | 'lastUpdated';
	/**
	 * Sorts the results by asc or desc.
	 */
	sortOrder?: '' | 'asc' | 'desc';
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
};

export type ListPagesOutput = {
	/**
	 * Pages of the site, including collection template pages (those have a `collectionId`).
	 *
	 * Items: The Page object.
	 */
	pages?: {
		/**
		 * Unique identifier for the Page.
		 */
		id?: string;
		/**
		 * Unique identifier for the Site.
		 */
		siteId?: string;
		/**
		 * Slug of the Page in the site URL (Webflow derives it from the title by default).
		 */
		slug?: string;
		/**
		 * Identifier of the parent folder.
		 */
		parentId?: string;
		/**
		 * Unique identifier for a linked Collection, value will be null if the Page is not part of a Collection.
		 */
		collectionId?: string;
		/**
		 * The date the Page was created.
		 */
		createdOn?: string;
		/**
		 * The date the Page was most recently updated.
		 */
		lastUpdated?: string;
		/**
		 * Whether the Page has been archived. Defaults to `false`.
		 */
		archived?: boolean;
		/**
		 * Whether the Page is a draft. Defaults to `false`.
		 */
		draft?: boolean;
		/**
		 * Publishing flag of the page as returned by the API (`true` on every page observed). Returned by the API but not described in the vendor reference.
		 */
		shouldPublish?: boolean;
		/**
		 * Indicates whether the Page supports [Page Branching](https://university.webflow.com/lesson/page-branching). Pages that are already branches cannot be branched again. Defaults to `false`.
		 */
		canBranch?: boolean;
		/**
		 * Indicates whether the Page is a branch of another Page (see [Page Branching](https://university.webflow.com/lesson/page-branching)). Defaults to `false`.
		 */
		isBranch?: boolean;
		/**
		 * If the Page is a Branch of another Page, this is the ID of the Branch.
		 */
		branchId?: string;
		/**
		 * SEO-related fields for the Page.
		 */
		seo?: {
			/**
			 * The Page description shown in search engine results.
			 */
			description?: string;
		};
		/**
		 * Open Graph fields for the Page.
		 */
		openGraph?: {
			/**
			 * Indicates the Open Graph title was copied from the SEO title. Defaults to `true`.
			 */
			titleCopied?: boolean;
			/**
			 * The description supplied to Open Graph annotations.
			 */
			description?: string;
			/**
			 * Indicates the Open Graph description was copied from the SEO description. Defaults to `true`.
			 */
			descriptionCopied?: boolean;
			/**
			 * URL of the Open Graph image, or `null`. Returned by the API but not described in the vendor reference.
			 */
			imageUrl?: string;
			/**
			 * ID of the asset used as the Open Graph image, or `null`. Returned by the API but not described in the vendor reference.
			 */
			imageAssetId?: string;
		};
		/**
		 * Unique ID of the page locale.
		 */
		localeId?: string;
		/**
		 * Relative path of the published page URL.
		 */
		publishedPath?: string;
	}[];
	/**
	 * Pagination object.
	 */
	pagination?: {
		/**
		 * The limit used for pagination.
		 */
		limit?: number;
		/**
		 * The offset used for pagination.
		 */
		offset?: number;
		/**
		 * The total number of records.
		 */
		total?: number;
	};
};

/**
 * List pages
 * Lists the pages of a site, including collection template pages.
 */
export async function listPages(
	this: EndpointFunctionThis,
	payload: {
		input: ListPagesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListPagesOutput> {
	const response = await this.endpointCaller<ListPagesOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listPages',
		},
		payload,
	);
	return response.output;
}
