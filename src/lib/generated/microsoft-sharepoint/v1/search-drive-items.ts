// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchDriveItemsInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * Identifier of the document library drive. Expand `drive` or `drives` on Get a site to discover it.
	 */
	drive: string;
	/**
	 * Drive item id to search under. Use `root` to search the whole drive.
	 */
	itemId: string;
	/**
	 * Text matched against file name, metadata, and content. Sent as the `q` argument of `search`.
	 */
	query: string;
	/**
	 * Comma-separated properties to return. Sent as `$select`.
	 */
	select?: string;
	/**
	 * Navigation properties to expand, comma-separated, such as `thumbnails`. Sent as `$expand`. Expanding a complex property that is not a navigation property returns 400.
	 */
	expand?: string;
	/**
	 * OData `$orderby` expression. Sent as `$orderby`.
	 */
	orderby?: string;
	/**
	 * Page size. Sent as `$top`.
	 */
	top?: number;
	/**
	 * Continuation token from `@odata.nextLink`. Sent as `$skiptoken`.
	 */
	skipToken?: string;
};

export type SearchDriveItemsOutput = {
	/**
	 * Drive items that match the query.
	 *
	 * Items: One drive item.
	 */
	value?: {
		/**
		 * Version token Graph attaches to this resource.
		 */
		'@odata.etag'?: string;
		/**
		 * Audio metadata. Only on OneDrive personal. Read-only. See [audio](https://learn.microsoft.com/en-us/graph/api/resources/audio?view=graph-rest-1.0).
		 */
		audio?: Record<string, JSONValue>;
		/**
		 * Bundle metadata. Read-only. See [bundle](https://learn.microsoft.com/en-us/graph/api/resources/bundle?view=graph-rest-1.0).
		 */
		bundle?: Record<string, JSONValue>;
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
		 * When the item was created on the service. Read-only.
		 */
		createdDateTime?: string;
		/**
		 * ETag for the content. Not returned for folders in OneDrive for Business or SharePoint. Read-only.
		 */
		cTag?: string;
		/**
		 * Deleted state. Read-only. See [deleted](https://learn.microsoft.com/en-us/graph/api/resources/deleted?view=graph-rest-1.0).
		 */
		deleted?: Record<string, JSONValue>;
		/**
		 * User-visible description. Only on OneDrive personal.
		 */
		description?: string;
		/**
		 * ETag for metadata and content. Read-only.
		 */
		eTag?: string;
		/**
		 * Present when the item is a file. Read-only.
		 */
		file?: {
			/**
			 * Hashes of the file content. See [hashes](https://learn.microsoft.com/en-us/graph/api/resources/hashes?view=graph-rest-1.0).
			 */
			hashes?: Record<string, JSONValue>;
			/**
			 * MIME type chosen by the service. Read-only.
			 */
			mimeType?: string;
		};
		/**
		 * Created and modified times as reported by the client. These differ from the service timestamps on the item.
		 */
		fileSystemInfo?: {
			/**
			 * UTC date and time the file was created on the client.
			 */
			createdDateTime?: string;
			/**
			 * UTC date and time the file was last accessed. Not returned for SharePoint or OneDrive for Business.
			 */
			lastAccessedDateTime?: string;
			/**
			 * UTC date and time the file was last modified on the client.
			 */
			lastModifiedDateTime?: string;
		};
		/**
		 * Present when the item is a folder. Read-only.
		 */
		folder?: {
			/**
			 * Number of immediate children.
			 */
			childCount?: number;
			/**
			 * Recommended folder view. See [folderView](https://learn.microsoft.com/en-us/graph/api/resources/folderview?view=graph-rest-1.0).
			 */
			view?: Record<string, JSONValue>;
		};
		/**
		 * Unique identifier of the item within the drive. Read-only.
		 */
		id?: string;
		/**
		 * Image metadata. Read-only. See [image](https://learn.microsoft.com/en-us/graph/api/resources/image?view=graph-rest-1.0).
		 */
		image?: Record<string, JSONValue>;
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
		 * When the item was last modified on the service. Read-only.
		 */
		lastModifiedDateTime?: string;
		/**
		 * Location metadata. Read-only. See [location](https://learn.microsoft.com/en-us/graph/api/resources/geocoordinates?view=graph-rest-1.0).
		 */
		location?: Record<string, JSONValue>;
		/**
		 * Present when the item was detected as malware. Read-only. See [malware](https://learn.microsoft.com/en-us/graph/api/resources/malware?view=graph-rest-1.0).
		 */
		malware?: Record<string, JSONValue>;
		/**
		 * File or folder name.
		 */
		name?: string;
		/**
		 * Present when the item is a package. Read-only. See [package](https://learn.microsoft.com/en-us/graph/api/resources/package?view=graph-rest-1.0).
		 */
		package?: Record<string, JSONValue>;
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
		 * Operations that may still change this item. Read-only. See [pending operations](https://learn.microsoft.com/en-us/graph/api/resources/pendingoperations?view=graph-rest-1.0).
		 */
		pendingOperations?: Record<string, JSONValue>;
		/**
		 * Photo metadata. Read-only. See [photo](https://learn.microsoft.com/en-us/graph/api/resources/photo?view=graph-rest-1.0).
		 */
		photo?: Record<string, JSONValue>;
		/**
		 * Published or checked-out state. Not returned unless requested.
		 */
		publication?: {
			/**
			 * Publication state.
			 */
			level?: '' | 'published' | 'checkout';
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
		 * Present when the item lives in another drive. Read-only. See [remote item](https://learn.microsoft.com/en-us/graph/api/resources/remoteitem?view=graph-rest-1.0).
		 */
		remoteItem?: Record<string, JSONValue>;
		/**
		 * Present when this item is the root of the drive.
		 */
		root?: Record<string, JSONValue>;
		/**
		 * Present on items returned by search. Read-only.
		 */
		searchResult?: {
			/**
			 * Telemetry URL returned with a search hit.
			 */
			onClickTelemetryUrl?: string;
		};
		/**
		 * Sharing state. Read-only. See [shared](https://learn.microsoft.com/en-us/graph/api/resources/shared?view=graph-rest-1.0).
		 */
		shared?: Record<string, JSONValue>;
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
		 * Size in bytes. Read-only.
		 */
		size?: number;
		/**
		 * Present when the item is also a special folder. Read-only. See [special folder](https://learn.microsoft.com/en-us/graph/api/resources/specialfolder?view=graph-rest-1.0).
		 */
		specialFolder?: Record<string, JSONValue>;
		/**
		 * Video metadata. Read-only. See [video](https://learn.microsoft.com/en-us/graph/api/resources/video?view=graph-rest-1.0).
		 */
		video?: Record<string, JSONValue>;
		/**
		 * WebDAV URL for the item.
		 */
		webDavUrl?: string;
		/**
		 * URL that opens the item in the browser. Read-only.
		 */
		webUrl?: string;
		/**
		 * Short-lived URL that downloads the file without an Authorization header. Read-only. Expires in about an hour.
		 */
		'@microsoft.graph.downloadUrl'?: string;
		/**
		 * Recent activities. Returned when expanded.
		 */
		activities?: Record<string, JSONValue>;
		/**
		 * View analytics. Returned when expanded.
		 */
		analytics?: Record<string, JSONValue>;
		/**
		 * Immediate children. Only folders have children. Returned when expanded; each entry is a driveItem.
		 *
		 * Items: A child drive item.
		 */
		children?: Record<string, JSONValue>[];
		/**
		 * User who created the item. Returned when expanded.
		 */
		createdByUser?: Record<string, JSONValue>;
		/**
		 * User who last modified the item. Returned when expanded.
		 */
		lastModifiedByUser?: Record<string, JSONValue>;
		/**
		 * The document-library list item for this drive item. Returned when expanded.
		 */
		listItem?: Record<string, JSONValue>;
		/**
		 * Permissions on the item. Returned when expanded.
		 */
		permissions?: Record<string, JSONValue>;
		/**
		 * Retention label settings. See [itemRetentionLabel](https://learn.microsoft.com/en-us/graph/api/resources/itemretentionlabel?view=graph-rest-1.0).
		 */
		retentionLabel?: Record<string, JSONValue>;
		/**
		 * Subscriptions. Only supported on the root of a drive.
		 */
		subscriptions?: Record<string, JSONValue>;
		/**
		 * Metadata URL Graph attaches beside `thumbnails` when that property is expanded.
		 */
		'thumbnails@odata.context'?: string;
		/**
		 * Comment settings Graph returns on a SharePoint drive item. The driveItem reference page does not list this property.
		 */
		commentSettings?: {
			/**
			 * Whether commenting is disabled on this item.
			 */
			commentingDisabled?: {
				/**
				 * True when commenting is disabled.
				 */
				isDisabled?: boolean;
			};
		};
		/**
		 * Thumbnail sets. Returned when expanded.
		 */
		thumbnails?: Record<string, JSONValue>;
		/**
		 * Previous versions of the file. Returned when expanded.
		 */
		versions?: Record<string, JSONValue>;
		/**
		 * Workbook API for Excel files.
		 */
		workbook?: Record<string, JSONValue>;
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
 * Search drive items
 * Searches for files and folders under a drive item.
 */
export async function searchDriveItems(
	this: EndpointFunctionThis,
	payload: {
		input: SearchDriveItemsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchDriveItemsOutput> {
	const response = await this.endpointCaller<SearchDriveItemsOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'searchDriveItems',
		},
		payload,
	);
	return response.output;
}
