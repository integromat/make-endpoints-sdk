// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetASiteInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name`. From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * Comma-separated properties to return. Sent as `$select`.
	 */
	select?: string;
	/**
	 * Navigation properties to expand, comma-separated, such as `drive` or `lists`. Sent as `$expand`. Complex properties are not navigation properties: `siteCollection` belongs in Select, and expanding it returns 400.
	 */
	expand?: string;
};

export type GetASiteOutput = {
	/**
	 * Metadata URL Graph attaches to this resource.
	 */
	'@odata.context'?: string;
	/**
	 * Version token Graph attaches to this resource.
	 */
	'@odata.etag'?: string;
	/**
	 * Composite site id: hostname, site-collection GUID, and site GUID.
	 */
	id?: string;
	/**
	 * Whether the site is a personal site. Read-only.
	 */
	isPersonalSite?: boolean;
	/**
	 * Present on the root site of the site collection.
	 */
	root?: Record<string, JSONValue>;
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
	 * Present when this site is the root of a site collection.
	 */
	siteCollection?: {
		/**
		 * Geographic region code. Only for multi-geo tenants. Read-only.
		 */
		dataLocationCode?: string;
		/**
		 * Hostname of the site collection. Read-only.
		 */
		hostname?: string;
		/**
		 * Present when this is a root site collection.
		 */
		root?: Record<string, JSONValue>;
		/**
		 * Archive state of the site collection.
		 */
		archivalDetails?: {
			/**
			 * Whether the site collection is archived or reactivating.
			 */
			archiveStatus?:
				| ''
				| 'recentlyArchived'
				| 'fullyArchived'
				| 'reactivating'
				| 'unknownFutureValue';
		};
	};
	/**
	 * Full title of the site. Read-only.
	 */
	displayName?: string;
	/**
	 * Name or title of the site.
	 */
	name?: string;
	/**
	 * When the site was created. Read-only.
	 */
	createdDateTime?: string;
	/**
	 * Descriptive text for the site.
	 */
	description?: string;
	/**
	 * ETag for the site. Read-only.
	 */
	eTag?: string;
	/**
	 * When the site was last modified. Read-only.
	 */
	lastModifiedDateTime?: string;
	/**
	 * URL that opens the site in the browser. Read-only.
	 */
	webUrl?: string;
	/**
	 * View analytics. Returned when expanded.
	 */
	analytics?: Record<string, JSONValue>;
	/**
	 * Metadata URL Graph attaches beside `columns` when that property is expanded.
	 */
	'columns@odata.context'?: string;
	/**
	 * Site column definitions. Returned when expanded.
	 *
	 * Items: A site column.
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
	 * Content types defined for the site. Returned when expanded.
	 */
	contentTypes?: Record<string, JSONValue>;
	/**
	 * Metadata URL Graph attaches beside `drive` when that property is expanded.
	 */
	'drive@odata.context'?: string;
	/**
	 * Default document library for the site. Returned when expanded.
	 */
	drive?: Record<string, JSONValue>;
	/**
	 * Document libraries under the site. Returned when expanded.
	 *
	 * Items: A drive resource.
	 */
	drives?: Record<string, JSONValue>[];
	/**
	 * Address of items in the site. This collection cannot be enumerated.
	 */
	items?: Record<string, JSONValue>;
	/**
	 * Lists under the site. Use List lists to enumerate them.
	 */
	lists?: Record<string, JSONValue>;
	/**
	 * OneNote notebook for the site.
	 */
	onenote?: Record<string, JSONValue>;
	/**
	 * Long-running operations on the site.
	 */
	operations?: Record<string, JSONValue>;
	/**
	 * Pages in the site. Use List pages to enumerate them.
	 */
	pages?: Record<string, JSONValue>;
	/**
	 * Permissions on the site.
	 */
	permissions?: Record<string, JSONValue>;
	/**
	 * Subsites. Returned when expanded.
	 *
	 * Items: A subsite.
	 */
	sites?: Record<string, JSONValue>[];
	/**
	 * Default term store under the site.
	 */
	termStore?: Record<string, JSONValue>;
	/**
	 * Term stores under the site.
	 */
	termStores?: Record<string, JSONValue>;
};

/**
 * Get a site
 * Returns one SharePoint site.
 */
export async function getAsite(
	this: EndpointFunctionThis,
	payload: {
		input: GetASiteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetASiteOutput> {
	const response = await this.endpointCaller<GetASiteOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'getASite',
		},
		payload,
	);
	return response.output;
}
