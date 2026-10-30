// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetPageMetadataInput = {
	/**
	 * Unique identifier for a page. Use the `listPages` endpoint to find it.
	 */
	page_id: string;
	/**
	 * Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	localeId?: string;
	/**
	 * Unique identifier for the secondary Locale you're translating **into**. Returns only content that hasn't been excluded from translation for that locale. This is independent of `localeId`, which selects which version of the content is returned. To fetch the source text to translate, request the primary locale's content and set `translatable` to the locale you're translating into: `?localeId={primary locale id}&translatable={target locale id}`. Only exclusion rules scoped to manual translation are respected — rules scoped only to automatic translation don't affect this parameter's response. Omitting `translatable` returns the same response as if this parameter didn't exist. The value must be the id of one of the site's secondary locales — the primary locale id, or any other value, returns a `400` error. Requires translation exclusions to be enabled for the site; if they aren't, the request returns a `403` error. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	translatable?: string;
};

export type GetPageMetadataOutput = {
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
};

/**
 * Get page metadata
 * Returns the metadata of a page.
 */
export async function getPageMetadata(
	this: EndpointFunctionThis,
	payload: {
		input: GetPageMetadataInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetPageMetadataOutput> {
	const response = await this.endpointCaller<GetPageMetadataOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'getPageMetadata',
		},
		payload,
	);
	return response.output;
}
