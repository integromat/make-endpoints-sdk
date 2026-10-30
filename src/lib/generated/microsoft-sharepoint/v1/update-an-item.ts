// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateAnItemInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.
	 */
	list: string;
	/**
	 * Integer identifier (`id`) of the list item within the list. Do not pass `.`, `..`, or path separators (`/`).
	 */
	item: string;
	/**
	 * Column values to change as an array of `{key, value}` pairs (for example, `[{"key": "Title", "value": "Updated title"}]`). Sent as the `fieldValueSet` body. Columns you omit are left unchanged.
	 *
	 * Items: One column value.
	 */
	fields: {
		/**
		 * Column internal name, such as `Title` (or `{Name}LookupId` for single lookup/person columns).
		 */
		key: string;
		/**
		 * Column value matching the column type (string, number, boolean, or ISO 8601 date string). Always provide `value`; sending `null` or `""` (or omitting `value`) clears the column.
		 */
		value?: Record<string, JSONValue>;
	}[];
};

export type UpdateAnItemOutput = {
	/**
	 * Metadata URL Graph attaches to the field value set.
	 */
	'@odata.context'?: string;
	/**
	 * Version token Graph attaches to the field value set.
	 */
	'@odata.etag'?: string;
	/**
	 * List item id.
	 */
	id?: string;
	/**
	 * Content type name of the item, such as Item.
	 */
	ContentType?: string;
	/**
	 * Value of the Title column. Present on a generic list. Other columns come back as extra keys with the column internal name.
	 */
	Title?: string;
	/**
	 * When the item was last modified.
	 */
	Modified?: string;
	/**
	 * When the item was created.
	 */
	Created?: string;
	/**
	 * Lookup id of the user who created the item. Graph returns this string instead of the Author lookup object.
	 */
	AuthorLookupId?: string;
	/**
	 * Lookup id of the user who last changed the item.
	 */
	EditorLookupId?: string;
	/**
	 * Lookup id of the app that created the item.
	 */
	AppAuthorLookupId?: string;
	/**
	 * Lookup id of the app that last changed the item.
	 */
	AppEditorLookupId?: string;
	/**
	 * SharePoint UI version of the item, such as 2.0.
	 */
	_UIVersionString?: string;
	/**
	 * Whether the item has attachments.
	 */
	Attachments?: boolean;
	/**
	 * Edit link markup SharePoint returns for the item. Often empty.
	 */
	Edit?: string;
	/**
	 * Title rendered as a link. Follows the Title column on a generic list.
	 */
	LinkTitle?: string;
	/**
	 * Title link without the menu. Follows the Title column on a generic list.
	 */
	LinkTitleNoMenu?: string;
	/**
	 * Number of child items, returned as a string.
	 */
	ItemChildCount?: string;
	/**
	 * Number of child folders, returned as a string.
	 */
	FolderChildCount?: string;
	/**
	 * SharePoint compliance flags. Empty when none are set.
	 */
	_ComplianceFlags?: string;
	/**
	 * SharePoint compliance tag. Empty when none is set.
	 */
	_ComplianceTag?: string;
	/**
	 * When the compliance tag was written. Empty when no tag is set.
	 */
	_ComplianceTagWrittenTime?: string;
	/**
	 * User id that wrote the compliance tag. Empty when no tag is set.
	 */
	_ComplianceTagUserId?: string;
};

/**
 * Update an item
 * Updates column values on a list item.
 */
export async function updateAnItem(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateAnItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateAnItemOutput> {
	const response = await this.endpointCaller<UpdateAnItemOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'updateAnItem',
		},
		payload,
	);
	return response.output;
}
