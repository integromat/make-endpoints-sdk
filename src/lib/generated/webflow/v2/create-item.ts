// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateItemInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
	/**
	 * Identifier of the CMS locale the item belongs to. Omit it for the primary locale; locale identifiers are listed as `cmsLocaleId` in the `getSite` response.
	 */
	cmsLocaleId?: string;
	/**
	 * Boolean determining if the Item is set to archived.
	 */
	isArchived?: boolean;
	/**
	 * Sets the item's draft state. The resulting status depends on whether the item has been published before: **Item that has never been published:** `isDraft: true` results in a `Draft` status. **Already-published item:** `isDraft: true` results in a `Changes in draft` status. The live item stays published, and your changes are held back until you publish them. Setting `isDraft: true` never unpublishes an item. To remove an item from the live site, use [Unpublish Live Collection Items](https://developers.webflow.com/data/reference/cms/collection-items/live-items/delete-items-live).
	 */
	isDraft?: boolean;
	/**
	 * Object of field values keyed by the collection field slug, e.g. `{ "name": "Mostly Harmless", "slug": "mostly-harmless" }`. `name` is required; `slug` is optional and derived from `name` when omitted. Use `getCollection` to list the field slugs and types; the accepted value format per type is in the [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values) reference.
	 */
	fieldData: Record<string, JSONValue>;
};

export type CreateItemOutput = {
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
	 * Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping. Items created without `isDraft` are drafts (`true`).
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
 * Create an item
 * Creates a staged item in a CMS collection.
 */
export async function createItem(
	this: EndpointFunctionThis,
	payload: {
		input: CreateItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateItemOutput> {
	const response = await this.endpointCaller<CreateItemOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'createItem',
		},
		payload,
	);
	return response.output;
}
