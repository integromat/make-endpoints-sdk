// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListItemsInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.
	 */
	list: string;
	/**
	 * Relationships to expand. Sent as `expand`. Pass `fields` to include column values. See [List items](https://learn.microsoft.com/en-us/graph/api/listitem-list?view=graph-rest-1.0).
	 */
	expand?: string;
	/**
	 * OData filter expression. Sent as `$filter`. Only one indexed field can be filtered at a time. See [List items](https://learn.microsoft.com/en-us/graph/api/listitem-list?view=graph-rest-1.0).
	 */
	filter?: string;
	/**
	 * Page size. Sent as `$top`.
	 */
	top?: number;
	/**
	 * Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.
	 */
	skipToken?: string;
};

export type ListItemsOutput = {
	/**
	 * Items in the list.
	 *
	 * Items: One list item.
	 */
	value?: {
		/**
		 * Version token Graph attaches to this resource.
		 */
		'@odata.etag'?: string;
		/**
		 * SharePoint content type of the item.
		 */
		contentType?: {
			/**
			 * The content type id.
			 */
			id?: string;
			/**
			 * The content type name.
			 */
			name?: string;
		};
		/**
		 * Identity that created the item. Read-only.
		 */
		createdBy?: {
			/**
			 * The application associated with this action.
			 */
			application?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The application instance associated with this action.
			 */
			applicationInstance?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The conversation associated with this action.
			 */
			conversation?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The conversation identity type associated with this action.
			 */
			conversationIdentityType?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The device associated with this action.
			 */
			device?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The encrypted associated with this action.
			 */
			encrypted?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The on premises associated with this action.
			 */
			onPremises?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The guest associated with this action.
			 */
			guest?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The phone associated with this action.
			 */
			phone?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The user associated with this action.
			 */
			user?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
		};
		/**
		 * When the item was created. Read-only.
		 */
		createdDateTime?: string;
		/**
		 * Present on a delta result when the item was deleted. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).
		 */
		deleted?: Record<string, JSONValue>;
		/**
		 * Descriptive text for the item.
		 */
		description?: string;
		/**
		 * ETag for the item. Read-only.
		 */
		eTag?: string;
		/**
		 * Metadata URL Graph attaches beside `fields` when that property is expanded.
		 */
		'fields@odata.context'?: string;
		/**
		 * Column values. Keys are column internal names. Lookup columns come back as `{name}LookupId` unless you select the lookup by name. See [fieldValueSet](https://learn.microsoft.com/en-us/graph/api/resources/fieldvalueset?view=graph-rest-1.0).
		 */
		fields?: Record<string, JSONValue>;
		/**
		 * Unique identifier of the item. Read-only.
		 */
		id?: string;
		/**
		 * Identity that last modified the item. Read-only.
		 */
		lastModifiedBy?: {
			/**
			 * The application associated with this action.
			 */
			application?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The application instance associated with this action.
			 */
			applicationInstance?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The conversation associated with this action.
			 */
			conversation?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The conversation identity type associated with this action.
			 */
			conversationIdentityType?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The device associated with this action.
			 */
			device?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The encrypted associated with this action.
			 */
			encrypted?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The on premises associated with this action.
			 */
			onPremises?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The guest associated with this action.
			 */
			guest?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The phone associated with this action.
			 */
			phone?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
			/**
			 * The user associated with this action.
			 */
			user?: {
				/**
				 * The display name of the identity. For drive items this can lag a rename.
				 */
				displayName?: string;
				/**
				 * Unique identifier of the identity.
				 */
				id?: string;
				/**
				 * Email address of the identity, when the service returns one.
				 */
				email?: string;
				/**
				 * Unique identifier of the tenant. Optional.
				 */
				tenantId?: string;
				/**
				 * Keyed collection of [thumbnailSet](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailset?view=graph-rest-1.0) resources. Optional. Applies to drive items.
				 */
				thumbnails?: Record<string, JSONValue>;
			};
		};
		/**
		 * When the item was last modified. Read-only.
		 */
		lastModifiedDateTime?: string;
		/**
		 * Name or title of the item.
		 */
		name?: string;
		/**
		 * Address of the parent drive item or list item.
		 */
		parentReference?: {
			/**
			 * Identifier of the drive that contains the item. Only when the item is in a drive.
			 */
			driveId?: string;
			/**
			 * Type of drive. Only when the item is in a drive.
			 */
			driveType?: '' | 'personal' | 'business' | 'documentLibrary';
			/**
			 * Identifier of the parent item.
			 */
			id?: string;
			/**
			 * Name of the item being referenced.
			 */
			name?: string;
			/**
			 * Percent-encoded path that can be used to navigate to the item.
			 */
			path?: string;
			/**
			 * Identifier of a shared resource that can be accessed via the Shares API.
			 */
			shareId?: string;
			/**
			 * Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.
			 */
			sharepointIds?: {
				/**
				 * GUID of the item's list.
				 */
				listId?: string;
				/**
				 * Integer identifier of the item within its list, returned as a string.
				 */
				listItemId?: string;
				/**
				 * GUID of the item within OneDrive for Business or the SharePoint site.
				 */
				listItemUniqueId?: string;
				/**
				 * GUID of the item's site collection.
				 */
				siteId?: string;
				/**
				 * SharePoint URL of the site that contains the item.
				 */
				siteUrl?: string;
				/**
				 * GUID of the tenant.
				 */
				tenantId?: string;
				/**
				 * GUID of the item's site (SPWeb).
				 */
				webId?: string;
			};
			/**
			 * Composite site id of the parent site. Not populated for OneDrive personal.
			 */
			siteId?: string;
		};
		/**
		 * Identifiers for the SharePoint REST compatibility layer. Omitted for OneDrive personal.
		 */
		sharepointIds?: {
			/**
			 * GUID of the item's list.
			 */
			listId?: string;
			/**
			 * Integer identifier of the item within its list, returned as a string.
			 */
			listItemId?: string;
			/**
			 * GUID of the item within OneDrive for Business or the SharePoint site.
			 */
			listItemUniqueId?: string;
			/**
			 * GUID of the item's site collection.
			 */
			siteId?: string;
			/**
			 * SharePoint URL of the site that contains the item.
			 */
			siteUrl?: string;
			/**
			 * GUID of the tenant.
			 */
			tenantId?: string;
			/**
			 * GUID of the item's site (SPWeb).
			 */
			webId?: string;
		};
		/**
		 * URL that opens the item in the browser. Read-only.
		 */
		webUrl?: string;
		/**
		 * Recent activities on this item. Returned when expanded.
		 */
		activities?: Record<string, JSONValue>;
		/**
		 * View analytics for this item. Returned when expanded.
		 */
		analytics?: Record<string, JSONValue>;
		/**
		 * Document set versions. Returned when expanded.
		 */
		documentSetVersions?: Record<string, JSONValue>;
		/**
		 * The same item as a [driveItem](https://learn.microsoft.com/en-us/graph/api/resources/driveitem?view=graph-rest-1.0), for document libraries. Returned when expanded.
		 */
		driveItem?: Record<string, JSONValue>;
		/**
		 * Permissions on the item. Returned when expanded.
		 */
		permissions?: Record<string, JSONValue>;
		/**
		 * Previous versions of the list item. Returned when expanded.
		 */
		versions?: Record<string, JSONValue>;
	}[];
	/**
	 * URL of the next page. Absent when this page is the last.
	 */
	'@odata.nextLink'?: string;
	/**
	 * OData context URL for the collection.
	 */
	'@odata.context'?: string;
};

/**
 * List items
 * Lists items in a SharePoint list.
 */
export async function listItems(
	this: EndpointFunctionThis,
	payload: {
		input: ListItemsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListItemsOutput> {
	const response = await this.endpointCaller<ListItemsOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'listItems',
		},
		payload,
	);
	return response.output;
}
