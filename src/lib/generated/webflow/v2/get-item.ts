// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetItemInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
	/**
	 * Unique identifier for a collection item. Use the `listItems` endpoint to find it.
	 */
	item_id: string;
	/**
	 * Unique identifier for a CMS Locale. This UID is different from the Site locale identifier and is listed as `cmsLocaleId` in the Sites response. This endpoint returns a single item, so it accepts one locale. To retrieve an item in several locales, use [List Collection Items](https://developers.webflow.com/data/reference/cms/collection-items/staged-items/list-items) with `filter[id][eq]` and a comma separated `cmsLocaleId`.
	 */
	cmsLocaleId?: string;
	/**
	 * Unique identifier for the secondary Locale you're translating **into**. Returns only content that hasn't been excluded from translation for that locale. This is independent of `cmsLocaleId`, which selects which version of the content is returned. To fetch the source text to translate, request the primary locale's content and set `translatable` to the locale you're translating into: `?cmsLocaleId={primary CMS locale id}&translatable={target locale id}`. Only exclusion rules scoped to manual translation are respected — rules scoped only to automatic translation don't affect this parameter's response. Omitting `translatable` returns the same response as if this parameter didn't exist. The value must be the ID of one of the site's secondary locales (see `locales.secondary[]` in the `getSite` response; Webflow's reference does not say whether its `id` or its `cmsLocaleId` is expected) — the primary locale, or any other value, returns a `400` error. Requires translation exclusions to be enabled for the site; if they aren't, the request returns a `403` error. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	translatable?: string;
};

export type GetItemOutput = {
	/**
	 * Unique identifier for the Item.
	 */
	id?: string;
	/**
	 * Identifier for the locale of the CMS item.
	 */
	cmsLocaleId?: string;
	/**
	 * The date the item was last published.
	 */
	lastPublished?: string;
	/**
	 * The date the item was last updated.
	 */
	lastUpdated?: string;
	/**
	 * The date the item was created.
	 */
	createdOn?: string;
	/**
	 * Boolean determining if the Item is set to archived. Defaults to `false`.
	 */
	isArchived?: boolean;
	/**
	 * Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping.
	 */
	isDraft?: boolean;
	/**
	 * Field values keyed by the collection field slug. Standard fields are listed; custom fields of the collection are returned under their slug as well.
	 */
	fieldData?: {
		/**
		 * Name of the Item.
		 */
		name?: string;
		/**
		 * URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug.
		 */
		slug?: string;
	};
};

/**
 * Get an item
 * Returns a single staged item of a CMS collection.
 */
export async function getItem(
	this: EndpointFunctionThis,
	payload: {
		input: GetItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetItemOutput> {
	const response = await this.endpointCaller<GetItemOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'getItem',
		},
		payload,
	);
	return response.output;
}
