// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateItemInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
	/**
	 * Unique identifier for a collection item. Use the `listItems` endpoint to find it.
	 */
	item_id: string;
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
	 * Object of field values keyed by the collection field slug, e.g. `{ "name": "Mostly Harmless", "slug": "mostly-harmless" }`. Use `getCollection` to list the field slugs and types; the accepted value format per type is in the [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values) reference. Omit it to change only `isArchived` / `isDraft`; only the slugs present in the object are changed.
	 */
	fieldData?: Record<string, JSONValue>;
};

export type UpdateItemOutput = {
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
 * Update an item
 * Updates a staged item in a CMS collection.
 */
export async function updateItem(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateItemOutput> {
	const response = await this.endpointCaller<UpdateItemOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'updateItem',
		},
		payload,
	);
	return response.output;
}
