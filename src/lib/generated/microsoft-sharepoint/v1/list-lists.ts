// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListListsInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * Comma-separated properties to return. Sent as `$select`. Include `system` to return system-managed lists, which are hidden otherwise.
	 */
	select?: string;
	/**
	 * Page size. Sent as `$top`.
	 */
	top?: number;
	/**
	 * Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.
	 */
	skipToken?: string;
};

export type ListListsOutput = {
	/**
	 * Lists in the site.
	 *
	 * Items: One list.
	 */
	value?: {
		/**
		 * Version token Graph attaches to this resource.
		 */
		'@odata.etag'?: string;
		/**
		 * Identity that created the list. Read-only.
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
		 * When the list was created. Read-only.
		 */
		createdDateTime?: string;
		/**
		 * Descriptive text for the list.
		 */
		description?: string;
		/**
		 * Display title of the list.
		 */
		displayName?: string;
		/**
		 * ETag for the list. Read-only.
		 */
		eTag?: string;
		/**
		 * Unique identifier of the list. Read-only.
		 */
		id?: string;
		/**
		 * Identity that last modified the list. Read-only.
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
		 * When the list was last modified. Read-only.
		 */
		lastModifiedDateTime?: string;
		/**
		 * Additional information about the list. When omitted on create, Graph uses the genericList template.
		 */
		list?: {
			/**
			 * Whether content types are enabled for this list.
			 */
			contentTypesEnabled?: boolean;
			/**
			 * Whether the list is hidden in the SharePoint UI.
			 */
			hidden?: boolean;
			/**
			 * Base list template. [listInfo](https://learn.microsoft.com/en-us/graph/api/resources/listinfo?view=graph-rest-1.0) names both `tasks` and `task`, and says other SPListTemplateType names can appear on responses. This list is only the names that page spells out.
			 */
			template?:
				| ''
				| 'documentLibrary'
				| 'genericList'
				| 'tasks'
				| 'task'
				| 'survey'
				| 'links'
				| 'announcements'
				| 'contacts';
		};
		/**
		 * Name of the list. Read-only.
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
		 * Present when the list is system-managed. See [systemFacet](https://learn.microsoft.com/en-us/graph/api/resources/systemfacet?view=graph-rest-1.0).
		 */
		system?: Record<string, JSONValue>;
		/**
		 * URL that opens the list in the browser. Read-only.
		 */
		webUrl?: string;
		/**
		 * Metadata URL Graph attaches beside `columns` when that property is expanded.
		 */
		'columns@odata.context'?: string;
		/**
		 * Column definitions for this list. Returned when expanded.
		 *
		 * Items: A column definition.
		 */
		columns?: {
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [boolean column](https://learn.microsoft.com/en-us/graph/api/resources/booleancolumn?view=graph-rest-1.0).
			 */
			boolean?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [calculated column](https://learn.microsoft.com/en-us/graph/api/resources/calculatedcolumn?view=graph-rest-1.0).
			 */
			calculated?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [choice column](https://learn.microsoft.com/en-us/graph/api/resources/choicecolumn?view=graph-rest-1.0).
			 */
			choice?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [content approval status column](https://learn.microsoft.com/en-us/graph/api/resources/contentapprovalstatuscolumn?view=graph-rest-1.0).
			 */
			contentApprovalStatus?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [currency column](https://learn.microsoft.com/en-us/graph/api/resources/currencycolumn?view=graph-rest-1.0).
			 */
			currency?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [date time column](https://learn.microsoft.com/en-us/graph/api/resources/datetimecolumn?view=graph-rest-1.0).
			 */
			dateTime?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [geolocation column](https://learn.microsoft.com/en-us/graph/api/resources/geolocationcolumn?view=graph-rest-1.0).
			 */
			geolocation?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [hyperlink or picture column](https://learn.microsoft.com/en-us/graph/api/resources/hyperlinkorpicturecolumn?view=graph-rest-1.0).
			 */
			hyperlinkOrPicture?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [lookup column](https://learn.microsoft.com/en-us/graph/api/resources/lookupcolumn?view=graph-rest-1.0).
			 */
			lookup?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [number column](https://learn.microsoft.com/en-us/graph/api/resources/numbercolumn?view=graph-rest-1.0).
			 */
			number?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [person or group column](https://learn.microsoft.com/en-us/graph/api/resources/personorgroupcolumn?view=graph-rest-1.0).
			 */
			personOrGroup?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [term column](https://learn.microsoft.com/en-us/graph/api/resources/termcolumn?view=graph-rest-1.0).
			 */
			term?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [text column](https://learn.microsoft.com/en-us/graph/api/resources/textcolumn?view=graph-rest-1.0).
			 */
			text?: Record<string, JSONValue>;
			/**
			 * Column type facet. Mutually exclusive with the other type facets. See [thumbnail column](https://learn.microsoft.com/en-us/graph/api/resources/thumbnailcolumn?view=graph-rest-1.0).
			 */
			thumbnail?: Record<string, JSONValue>;
			/**
			 * For site columns, the group this column belongs to.
			 */
			columnGroup?: string;
			/**
			 * Default value for this column. See [defaultColumnValue](https://learn.microsoft.com/en-us/graph/api/resources/defaultcolumnvalue?view=graph-rest-1.0).
			 */
			defaultValue?: Record<string, JSONValue>;
			/**
			 * User-facing description of the column.
			 */
			description?: string;
			/**
			 * User-facing name of the column.
			 */
			displayName?: string;
			/**
			 * When true, no two list items may have the same value for this column.
			 */
			enforceUniqueValues?: boolean;
			/**
			 * Whether the column is hidden in the SharePoint UI.
			 */
			hidden?: boolean;
			/**
			 * Whether the column can be used for sorting and searching.
			 */
			indexed?: boolean;
			/**
			 * API-facing column name, used as the key on a list item's fields.
			 */
			name?: string;
			/**
			 * When true, changes to this column propagate to lists that implement it.
			 */
			propagateChanges?: boolean;
			/**
			 * Whether values in this column can be modified.
			 */
			readOnly?: boolean;
			/**
			 * Whether the column value is mandatory on items.
			 */
			required?: boolean;
			/**
			 * Validation formula and message. See [columnValidation](https://learn.microsoft.com/en-us/graph/api/resources/columnvalidation?view=graph-rest-1.0).
			 */
			validation?: Record<string, JSONValue>;
			/**
			 * Unique identifier of the column.
			 */
			id?: string;
			/**
			 * Whether this column can be deleted. Not returned for every list-column response.
			 */
			isDeletable?: boolean;
			/**
			 * Whether values in the column can be reordered. Read-only.
			 */
			isReorderable?: boolean;
			/**
			 * Whether the column can be changed.
			 */
			isSealed?: boolean;
			/**
			 * SharePoint content type of the item.
			 */
			sourceContentType?: {
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
			 * Read-only column type for site columns. See [columnTypes](https://learn.microsoft.com/en-us/graph/api/resources/columntypes?view=graph-rest-1.0).
			 */
			type?: string;
			/**
			 * Source column when this column is inherited from a content type.
			 */
			sourceColumn?: Record<string, JSONValue>;
		}[];
		/**
		 * Content types in this list. Returned when expanded.
		 */
		contentTypes?: Record<string, JSONValue>;
		/**
		 * Metadata URL Graph attaches beside `drive` when that property is expanded.
		 */
		'drive@odata.context'?: string;
		/**
		 * The list as a drive. Only on document libraries.
		 */
		drive?: Record<string, JSONValue>;
		/**
		 * Items in the list. Use List items to enumerate them.
		 */
		items?: Record<string, JSONValue>;
		/**
		 * Long-running operations on the list.
		 */
		operations?: Record<string, JSONValue>;
		/**
		 * Permissions on the list.
		 */
		permissions?: Record<string, JSONValue>;
		/**
		 * Subscriptions on the list.
		 */
		subscriptions?: Record<string, JSONValue>;
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
 * List lists
 * Lists the lists in a SharePoint site.
 */
export async function listLists(
	this: EndpointFunctionThis,
	payload: {
		input: ListListsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListListsOutput> {
	const response = await this.endpointCaller<ListListsOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'listLists',
		},
		payload,
	);
	return response.output;
}
