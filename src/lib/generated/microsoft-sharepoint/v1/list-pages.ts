// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListPagesInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * Comma-separated properties to return. Sent as `$select`.
	 */
	select?: string;
	/**
	 * Navigation properties to expand, comma-separated, such as `canvasLayout`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.
	 */
	expand?: string;
	/**
	 * OData `$filter` expression. Sent as `$filter`.
	 */
	filter?: string;
	/**
	 * OData order expression. Sent as `$orderBy`. The list is sorted by `name` ascending when this is omitted.
	 */
	orderby?: string;
	/**
	 * Page size. Sent as `$top`.
	 */
	top?: number;
	/**
	 * When true, the response includes `@odata.count`. Sent as `$count`.
	 */
	count?: boolean;
	/**
	 * Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.
	 */
	skipToken?: string;
};

export type ListPagesOutput = {
	/**
	 * Pages in the site.
	 *
	 * Items: One page.
	 */
	value?: {
		/**
		 * Version token Graph attaches to this resource.
		 */
		'@odata.etag'?: string;
		/**
		 * OData type of the page, `#microsoft.graph.sitePage`.
		 */
		'@odata.type'?: string;
		/**
		 * File name of the page.
		 */
		name?: string;
		/**
		 * Descriptive text for the page.
		 */
		description?: string;
		/**
		 * Page layout.
		 */
		pageLayout?: '' | 'microsoftReserved' | 'article' | 'home' | 'unknownFutureValue';
		/**
		 * How the page is promoted.
		 */
		promotionKind?: '' | 'microsoftReserved' | 'page' | 'newsPost' | 'unknownFutureValue';
		/**
		 * Whether comments are shown at the bottom of the page.
		 */
		showComments?: boolean;
		/**
		 * Whether recommended pages are shown at the bottom of the page.
		 */
		showRecommendedPages?: boolean;
		/**
		 * URL of the page thumbnail.
		 */
		thumbnailWebUrl?: string;
		/**
		 * Title area of the page. See [titleArea](https://learn.microsoft.com/en-us/graph/api/resources/titlearea?view=graph-rest-1.0).
		 */
		titleArea?: {
			/**
			 * Alternative text on the title area.
			 */
			alternativeText?: string;
			/**
			 * Whether the title area uses a gradient.
			 */
			enableGradientEffect?: boolean;
			/**
			 * URL of the image in the title area.
			 */
			imageWebUrl?: string;
			/**
			 * Layout of the title area.
			 */
			layout?:
				| ''
				| 'imageAndTitle'
				| 'plain'
				| 'colorBlock'
				| 'overlap'
				| 'unknownFutureValue';
			/**
			 * Server-processed content such as search index and link fixup data.
			 */
			serverProcessedContent?: Record<string, JSONValue>;
			/**
			 * Whether the author is shown in the title area.
			 */
			showAuthor?: boolean;
			/**
			 * Whether the published date is shown in the title area.
			 */
			showPublishedDate?: boolean;
			/**
			 * Whether the text block above the title is shown.
			 */
			showTextBlockAboveTitle?: boolean;
			/**
			 * Text shown above the title.
			 */
			textAboveTitle?: string;
			/**
			 * Text alignment in the title area.
			 */
			textAlignment?: '' | 'left' | 'center' | 'unknownFutureValue';
			/**
			 * Source type of the title image, as returned by Graph.
			 */
			imageSourceType?: number;
			/**
			 * Whether the title has been committed.
			 */
			hasTitleBeenCommitted?: boolean;
			/**
			 * OData type of `authors`. Graph returns `#Collection(String)`. The titleArea reference page does not list this property.
			 */
			'authors@odata.type'?: string;
			/**
			 * Author strings Graph returns on the title area. Often empty. The titleArea reference page does not list this property.
			 *
			 * Items: One string in the collection.
			 */
			authors?: string[];
			/**
			 * OData type of `authorByline`. Graph returns `#Collection(String)`. The titleArea reference page does not list this property.
			 */
			'authorByline@odata.type'?: string;
			/**
			 * Byline strings Graph returns on the title area. Often empty. The titleArea reference page does not list this property.
			 *
			 * Items: One string in the collection.
			 */
			authorByline?: string[];
		};
		/**
		 * Metadata URL Graph attaches beside `canvasLayout` when that property is expanded.
		 */
		'canvasLayout@odata.context'?: string;
		/**
		 * Page canvas, including horizontal sections and web parts. Web part `data` differs by web part type, so this object is free-form. See [Create sitePage](https://learn.microsoft.com/en-us/graph/api/sitepage-create?view=graph-rest-1.0).
		 */
		canvasLayout?: Record<string, JSONValue>;
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
		 * Identity that created the page. Read-only.
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
		 * When the page was created. Read-only.
		 */
		createdDateTime?: string;
		/**
		 * ETag for the page.
		 */
		eTag?: string;
		/**
		 * Unique identifier of the page.
		 */
		id?: string;
		/**
		 * Identity that last modified the page. Read-only.
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
		 * When the page was last modified. Read-only.
		 */
		lastModifiedDateTime?: string;
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
		 * Publishing status and the version visible to the caller.
		 */
		publishingState?: {
			/**
			 * Publication state.
			 */
			level?: '' | 'published' | 'checkout' | 'draft';
			/**
			 * Identifier of the version visible to the caller.
			 */
			versionId?: string;
			/**
			 * The user who checked out the file.
			 */
			checkedOutBy?: {
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
		};
		/**
		 * Reaction counts for the page. See [reactionsFacet](https://learn.microsoft.com/en-us/graph/api/resources/reactionsfacet?view=graph-rest-1.0).
		 */
		reactions?: Record<string, JSONValue>;
		/**
		 * URL that opens the page in the browser. Read-only.
		 */
		webUrl?: string;
		/**
		 * User who created the page. Returned when expanded.
		 */
		createdByUser?: Record<string, JSONValue>;
		/**
		 * User who last modified the page. Returned when expanded.
		 */
		lastModifiedByUser?: Record<string, JSONValue>;
		/**
		 * Web parts on the page. Returned when expanded.
		 */
		webParts?: Record<string, JSONValue>;
	}[];
	/**
	 * URL of the next page. Absent when this page is the last.
	 */
	'@odata.nextLink'?: string;
	/**
	 * OData context URL for the collection.
	 */
	'@odata.context'?: string;
	/**
	 * Total number of pages. Present when count is true.
	 */
	'@odata.count'?: number;
};

/**
 * List pages
 * Returns site pages in a SharePoint site.
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
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'listPages',
		},
		payload,
	);
	return response.output;
}
