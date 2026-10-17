// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchForContentInput = {
	/**
	 * The string to search for. This query is matched against item names, descriptions, text content of files, and various other fields of the different item types. This parameter supports a variety of operators to further refine the results returns. * `""` - by wrapping a query in double quotes only exact matches are returned by the API. Exact searches do not return search matches based on specific character sequences. Instead, they return matches based on phrases, that is, word sequences. For example: A search for `"Blue-Box"` may return search results including the sequence `"blue.box"`, `"Blue Box"`, and `"Blue-Box"`; any item containing the words `Blue` and `Box` consecutively, in the order specified. * `AND` - returns items that contain both the search terms. For example, a search for `marketing AND BoxWorks` returns items that have both `marketing` and `BoxWorks` within its text in any order. It does not return a result that only has `BoxWorks` in its text. * `OR` - returns items that contain either of the search terms. For example, a search for `marketing OR BoxWorks` returns a result that has either `marketing` or `BoxWorks` within its text. Using this operator is not necessary as we implicitly interpret multi-word queries as `OR` unless another supported boolean term is used. * `NOT` - returns items that do not contain the search term provided. For example, a search for `marketing AND NOT BoxWorks` returns a result that has only `marketing` within its text. Results containing `BoxWorks` are omitted. We do not support lower case (that is, `and`, `or`, and `not`) or mixed case (that is, `And`, `Or`, and `Not`) operators. This field is required unless the `mdfilters` parameter is defined.
	 */
	query?: string;
	/**
	 * Limits the search results to either the files that the user has access to, or to files available to the entire enterprise. The scope defaults to `user_content`, which limits the search results to content that is available to the currently authenticated user. The `enterprise_content` can be requested by an admin through our support channels. Once this scope has been enabled for a user, it will allow that use to query for content across the entire enterprise and not only the content that they have access to.
	 */
	scope?: '' | 'user_content' | 'enterprise_content';
	/**
	 * Limits the search results to any files that match any of the provided file extensions. This list is a comma-separated list of file extensions without the dots.
	 *
	 * Items: The file extension.
	 */
	file_extensions?: string[];
	/**
	 * Limits the search results to any items created within a given date range. Date ranges are defined as comma separated RFC3339 timestamps. If the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything created before the end date will be returned. If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will be used as the end date instead.
	 *
	 * Items: An RFC3339 timestamp, for example `2024-05-15T13:35:01-07:00`. Pass an empty string to leave this bound open.
	 */
	created_at_range?: string[];
	/**
	 * Limits the search results to any items updated within a given date range. Date ranges are defined as comma separated RFC3339 timestamps. If the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything updated before the end date will be returned. If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will be used as the end date instead.
	 *
	 * Items: An RFC3339 timestamp, for example `2024-05-15T13:35:01-07:00`. Pass an empty string to leave this bound open.
	 */
	updated_at_range?: string[];
	/**
	 * Limits the search results to any items with a size within a given file size range. This applied to files and folders. Size ranges are defined as list of a lower and upper byte size limit (inclusive). The upper and lower bound can be omitted to create open ranges.
	 *
	 * Items: A file size in bytes. Pass the lower bound first and the upper bound second.
	 */
	size_range?: number[];
	/**
	 * Limits the search results to any items that are owned by the given list of owners, defined as a list of comma separated user IDs. The items still need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users an empty result set will be returned. To search across an entire enterprise, we recommend using the `enterprise_content` scope parameter which can be requested with our support team.
	 *
	 * Items: The owner user id.
	 */
	owner_user_ids?: string[];
	/**
	 * Limits the search results to any items that have been updated by the given list of users, defined as a list of comma separated user IDs. The items still need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users an empty result set will be returned. This feature only searches back to the last 10 versions of an item.
	 *
	 * Items: The recent updater user id.
	 */
	recent_updater_user_ids?: string[];
	/**
	 * Limits the search results to items within the given list of folders, defined as a comma separated lists of folder IDs. Search results will also include items within any subfolders of those ancestor folders. The folders still need to be owned or shared with the currently authenticated user. If the folder is not accessible by this user, or it does not exist, a `HTTP 404` error code will be returned instead. To search across an entire enterprise, we recommend using the `enterprise_content` scope parameter which can be requested with our support team.
	 *
	 * Items: The ancestor folder id.
	 */
	ancestor_folder_ids?: string[];
	/**
	 * Limits the search results to any items that match the search query for a specific part of the file, for example the file description. Content types are defined as a comma separated lists of Box recognized content types. The allowed content types are as follows. * `name` - The name of the item, as defined by its `name` field. * `description` - The description of the item, as defined by its `description` field. * `file_content` - The actual content of the file. * `comments` - The content of any of the comments on a file or folder. * `tags` - Any tags that are applied to an item, as defined by its `tags` field.
	 */
	content_types?: '' | 'name' | 'description' | 'file_content' | 'comments' | 'tags';
	/**
	 * Limits the search results to any items of this type. This parameter only takes one value. By default the API returns items that match any of these types. * `file` - Limits the search results to files, * `folder` - Limits the search results to folders, * `web_link` - Limits the search results to web links, also known as bookmarks.
	 */
	type?: '' | 'file' | 'folder' | 'web_link';
	/**
	 * Determines if the search should look in the trash for items. By default, this API only returns search results for items not currently in the trash (`non_trashed_only`). * `trashed_only` - Only searches for items currently in the trash * `non_trashed_only` - Only searches for items currently not in the trash * `all_items` - Searches for both trashed and non-trashed items.
	 */
	trash_content?: '' | 'non_trashed_only' | 'trashed_only' | 'all_items';
	/**
	 * Limits the search results to any items for which the metadata matches the provided filter. This parameter is a list that specifies exactly **one** metadata template used to filter the search results. The parameter is required unless the `query` parameter is provided.
	 *
	 * @maxItems 1
	 */
	mdfilters?:
		| []
		| [
				{
					/**
					 * The scope of the metadata template to filter by: `enterprise` for templates defined in your own enterprise, `global` for Box-wide templates.
					 */
					scope?: '' | 'enterprise' | 'global';
					/**
					 * The key of the template used to filter search results. In many cases the template key is automatically derived of its display name, for example `Contract Template` would become `contractTemplate`. In some cases the creator of the template will have provided its own template key. Use the **List enterprise metadata templates** Endpoint (or **Get a metadata template**) to look up a template's key and its field keys. Note that Box uses the camelCase key `templateKey` inside this filter object.
					 */
					templateKey?: string;
					/**
					 * Specifies which fields on the template to filter the search results by. When more than one field is specified, the query performs a logical `AND` to ensure that the instance of the template matches each of the fields specified. A JSON object keyed by template field key, for example `{"category": "online"}` or `{"contractValue": {"gt": 1000, "lt": 5000}}`.
					 */
					filters?: Record<string, JSONValue>;
				},
		  ];
	/**
	 * Defines whether the search results should include any items that the user recently accessed through a shared link. When this parameter has been set to true, the format of the response of this API changes to return a list of [Search Results with Shared Links](https://developer.box.com/reference/resources/search-results-with-shared-links).
	 */
	include_recent_shared_links?: boolean;
	/**
	 * Limits the search results to items that were deleted by the given list of users, defined as a list of comma separated user IDs. The `trash_content` parameter needs to be set to `trashed_only`. If searching in trash is not performed, an empty result set is returned. The items need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users, an empty result set is returned. Data available from 2023-02-01 onwards.
	 *
	 * Items: The deleted user id.
	 */
	deleted_user_ids?: string[];
	/**
	 * Limits the search results to any items deleted within a given date range. Date ranges are defined as comma separated RFC3339 timestamps. If the start date is omitted (`2014-05-17T13:35:01-07:00`), anything deleted before the end date will be returned. If the end date is omitted (`2014-05-15T13:35:01-07:00`), the current date will be used as the end date instead. The `trash_content` parameter needs to be set to `trashed_only`. If searching in trash is not performed, then an empty result is returned. Data available from 2023-02-01 onwards.
	 *
	 * Items: An RFC3339 timestamp, for example `2024-05-15T13:35:01-07:00`. Pass an empty string to leave this bound open.
	 */
	deleted_at_range?: string[];
	/**
	 * Defines the order in which search results are returned. This API defaults to returning items by relevance unless this parameter is explicitly specified. * `relevance` (default) returns the results sorted by relevance to the query search term. The relevance is based on the occurrence of the search term in the items name, description, content, and additional properties. * `modified_at` returns the results ordered in descending order by date at which the item was last modified.
	 */
	sort?: '' | 'modified_at' | 'relevance';
	/**
	 * Defines the direction in which search results are ordered. This API defaults to returning items in descending (`DESC`) order unless this parameter is explicitly specified. When results are sorted by `relevance` the ordering is locked to returning items in descending order of relevance, and this parameter is ignored.
	 */
	direction?: '' | 'DESC' | 'ASC';
	/**
	 * A list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested. Metadata can be requested as well, for example `metadata.enterprise_12345.contractTemplate`. Sent as a comma-separated `fields` query parameter.
	 *
	 * Items: The name of an attribute to include in the response, for example `name`, `shared_link` or `metadata.enterprise_12345.contractTemplate`.
	 */
	fields?: string[];
	/**
	 * Defines the maximum number of items to return as part of a page of results.
	 */
	limit?: number;
	/**
	 * The offset of the item at which to begin the response. Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
	 */
	offset?: number;
};

export type SearchForContentOutput = {
	/**
	 * One greater than the offset of the last entry in the search results. The total number of entries in the collection may be less than `total_count`.
	 */
	total_count?: number;
	/**
	 * The limit that was used for this search. This will be the same as the `limit` query parameter unless that value exceeded the maximum value allowed.
	 */
	limit?: number;
	/**
	 * The 0-based offset of the first entry in this set. This will be the same as the `offset` query parameter used.
	 */
	offset?: number;
	/**
	 * Specifies the shape of the response. `search_results_items` when `include_recent_shared_links` is not set (each entry is a file, folder or web link resource), `search_results_with_shared_links` when it is set to `true` (each entry is wrapped as `{ item, accessible_via_shared_link }`).
	 */
	type?: string;
	/**
	 * The search results for the query provided. Each entry is a file, folder or web link resource; when `include_recent_shared_links` is `true` each entry is instead an object with `item` (the resource) and `accessible_via_shared_link` (the shared link URL it was found through).
	 */
	entries?: {
		/**
		 * The unique identifier that represent a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
		 */
		id?: string;
		/**
		 * The HTTP `etag` of this file. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the file if (no) changes have happened.
		 */
		etag?: string;
		/**
		 * The value will always be `file`. One of `file`.
		 */
		type?: string;
		/**
		 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
		 */
		sequence_id?: string;
		/**
		 * The name of the file.
		 */
		name?: string;
		/**
		 * The SHA1 hash of the file. This can be used to compare the contents of a file on Box with a local file.
		 */
		sha1?: string;
		/**
		 * A mini representation of a file version, used when nested within another resource.
		 */
		file_version?: {
			/**
			 * The unique identifier that represent a file version.
			 */
			id?: string;
			/**
			 * The value will always be `file_version`. One of `file_version`.
			 */
			type?: string;
			/**
			 * The SHA1 hash of this version of the file.
			 */
			sha1?: string;
		};
		/**
		 * The optional description of this file. If the description exceeds 255 characters, the first 255 characters are set as a file description and the rest of it is ignored.
		 */
		description?: string;
		/**
		 * The file size in bytes. Be careful parsing this integer as it can get very large and cause an integer overflow.
		 */
		size?: number;
		/**
		 * A list of parent folders for an item.
		 */
		path_collection?: {
			/**
			 * The number of folders in this list.
			 */
			total_count?: number;
			/**
			 * The parent folders for this item.
			 */
			entries?: {
				/**
				 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
				 */
				id?: string;
				/**
				 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
				 */
				etag?: string;
				/**
				 * The value will always be `folder`. One of `folder`.
				 */
				type?: string;
				/**
				 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
				 */
				sequence_id?: string;
				/**
				 * The name of the folder.
				 */
				name?: string;
			}[];
		};
		/**
		 * The date and time when the file was created on Box.
		 */
		created_at?: string;
		/**
		 * The date and time when the file was last updated on Box.
		 */
		modified_at?: string;
		/**
		 * The time at which this file was put in the trash.
		 */
		trashed_at?: string;
		/**
		 * The time at which this file is expected to be purged from the trash.
		 */
		purged_at?: string;
		/**
		 * The date and time at which this file was originally created, which might be before it was uploaded to Box.
		 */
		content_created_at?: string;
		/**
		 * The date and time at which this file was last updated, which might be before it was uploaded to Box.
		 */
		content_modified_at?: string;
		/**
		 * A mini representation of a user, as can be returned when nested within other resources.
		 */
		created_by?: {
			/**
			 * The unique identifier for this user.
			 */
			id?: string;
			/**
			 * The value will always be `user`. One of `user`.
			 */
			type?: string;
			/**
			 * The display name of this user.
			 */
			name?: string;
			/**
			 * The primary email address of this user.
			 */
			login?: string;
		};
		/**
		 * A mini representation of a user, as can be returned when nested within other resources.
		 */
		modified_by?: {
			/**
			 * The unique identifier for this user.
			 */
			id?: string;
			/**
			 * The value will always be `user`. One of `user`.
			 */
			type?: string;
			/**
			 * The display name of this user.
			 */
			name?: string;
			/**
			 * The primary email address of this user.
			 */
			login?: string;
		};
		/**
		 * A mini representation of a user, as can be returned when nested within other resources.
		 */
		owned_by?: {
			/**
			 * The unique identifier for this user.
			 */
			id?: string;
			/**
			 * The value will always be `user`. One of `user`.
			 */
			type?: string;
			/**
			 * The display name of this user.
			 */
			name?: string;
			/**
			 * The primary email address of this user.
			 */
			login?: string;
		};
		/**
		 * Shared links provide direct, read-only access to files or folder on Box. Shared links with open access level allow anyone with the URL to access the item, while shared links with company or collaborators access levels can only be accessed by appropriately authenticated Box users.
		 */
		shared_link?: {
			/**
			 * The URL that can be used to access the item on Box. This URL will display the item in Box's preview UI where the file can be downloaded if allowed. This URL will continue to work even when a custom `vanity_url` has been set for this shared link.
			 */
			url?: string;
			/**
			 * A URL that can be used to download the file. This URL can be used in a browser to download the file. This URL includes the file extension so that the file will be saved with the right file type. This property will be `null` for folders.
			 */
			download_url?: string;
			/**
			 * The "Custom URL" that can also be used to preview the item on Box. Custom URLs can only be created or modified in the Box Web application.
			 */
			vanity_url?: string;
			/**
			 * The custom name of a shared link, as used in the `vanity_url` field.
			 */
			vanity_name?: string;
			/**
			 * The access level for this shared link. * `open` - provides access to this item to anyone with this link * `company` - only provides access to this item to people the same company * `collaborators` - only provides access to this item to people who are collaborators on this item If this field is omitted when creating the shared link, the access level will be set to the default access level specified by the enterprise admin. One of `open`, `company`, `collaborators`.
			 */
			access?: string;
			/**
			 * The effective access level for the shared link. This can be a more restrictive access level than the value in the `access` field when the enterprise settings restrict the allowed access levels. One of `open`, `company`, `collaborators`.
			 */
			effective_access?: string;
			/**
			 * The effective permissions for this shared link. These result in the more restrictive combination of the share link permissions and the item permissions set by the administrator, the owner, and any ancestor item such as a folder. One of `can_edit`, `can_download`, `can_preview`, `no_access`.
			 */
			effective_permission?: string;
			/**
			 * The date and time when this link will be unshared. This field can only be set by users with paid accounts.
			 */
			unshared_at?: string;
			/**
			 * Defines if the shared link requires a password to access the item.
			 */
			is_password_enabled?: boolean;
			/**
			 * Defines if this link allows a user to preview, edit, and download an item. These permissions refer to the shared link only and do not supersede permissions applied to the item itself.
			 */
			permissions?: {
				/**
				 * Defines if the shared link allows for the item to be downloaded. For shared links on folders, this also applies to any items in the folder. This value can be set to `true` when the effective access level is set to `open` or `company`, not `collaborators`.
				 */
				can_download?: boolean;
				/**
				 * Defines if the shared link allows for the item to be previewed. This value is always `true`. For shared links on folders this also applies to any items in the folder.
				 */
				can_preview?: boolean;
				/**
				 * Defines if the shared link allows for the item to be edited. This value can only be `true` if `can_download` is also `true` and if the item has a type of `file`.
				 */
				can_edit?: boolean;
			};
			/**
			 * The number of times this item has been downloaded.
			 */
			download_count?: number;
			/**
			 * The number of times this item has been previewed.
			 */
			preview_count?: number;
		};
		/**
		 * A mini representation of a file version, used when nested under another resource.
		 */
		parent?: {
			/**
			 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
			 */
			id?: string;
			/**
			 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
			 */
			etag?: string;
			/**
			 * The value will always be `folder`. One of `folder`.
			 */
			type?: string;
			/**
			 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
			 */
			sequence_id?: string;
			/**
			 * The name of the folder.
			 */
			name?: string;
		};
		/**
		 * Defines if this item has been deleted or not. * `active` when the item has is not in the trash * `trashed` when the item has been moved to the trash but not deleted * `deleted` when the item has been permanently deleted. One of `active`, `trashed`, `deleted`.
		 */
		item_status?: string;
		/**
		 * The version number of this file.
		 */
		version_number?: string;
		/**
		 * The number of comments on this file.
		 */
		comment_count?: number;
		/**
		 * The permissions that the authenticated user has for a file.
		 */
		permissions?: {
			/**
			 * Specifies if the current user can delete this item.
			 */
			can_delete?: boolean;
			/**
			 * Specifies if the current user can download this item.
			 */
			can_download?: boolean;
			/**
			 * Specifies if the current user can invite new users to collaborate on this item, and if the user can update the role of a user already collaborated on this item.
			 */
			can_invite_collaborator?: boolean;
			/**
			 * Specifies if the user can rename this item.
			 */
			can_rename?: boolean;
			/**
			 * Specifies if the user can change the access level of an existing shared link on this item.
			 */
			can_set_share_access?: boolean;
			/**
			 * Specifies if the user can create a shared link for this item.
			 */
			can_share?: boolean;
			/**
			 * Specifies if the user can place annotations on this file.
			 */
			can_annotate?: boolean;
			/**
			 * Specifies if the user can place comments on this file.
			 */
			can_comment?: boolean;
			/**
			 * Specifies if the user can preview this file.
			 */
			can_preview?: boolean;
			/**
			 * Specifies if the user can upload a new version of this file.
			 */
			can_upload?: boolean;
			/**
			 * Specifies if the user view all annotations placed on this file.
			 */
			can_view_annotations_all?: boolean;
			/**
			 * Specifies if the user view annotations placed by themselves on this file.
			 */
			can_view_annotations_self?: boolean;
			/**
			 * Specifies if the user can apply a watermark to this file.
			 */
			can_apply_watermark?: boolean;
		};
		/**
		 * The tags for this item. These tags are shown in the Box web app and mobile apps next to an item. To add or remove a tag, retrieve the item's current tags, modify them, and then update this field. There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
		 *
		 * Items: The tag.
		 */
		tags?: string[];
		/**
		 * The lock held on a file. A lock prevents a file from being moved, renamed, or otherwise changed by anyone else than the user who created the lock.
		 */
		lock?: {
			/**
			 * The unique identifier for this lock.
			 */
			id?: string;
			/**
			 * The value will always be `lock`. One of `lock`.
			 */
			type?: string;
			/**
			 * A mini representation of a user, as can be returned when nested within other resources.
			 */
			created_by?: {
				/**
				 * The unique identifier for this user.
				 */
				id?: string;
				/**
				 * The value will always be `user`. One of `user`.
				 */
				type?: string;
				/**
				 * The display name of this user.
				 */
				name?: string;
				/**
				 * The primary email address of this user.
				 */
				login?: string;
			};
			/**
			 * The time this lock was created at.
			 */
			created_at?: string;
			/**
			 * The time this lock is to expire at, which might be in the past.
			 */
			expired_at?: string;
			/**
			 * Whether or not the file can be downloaded while locked.
			 */
			is_download_prevented?: boolean;
			/**
			 * If the lock is managed by an application rather than a user, this field identifies the type of the application that holds the lock. This is an open enum and may be extended with additional values in the future. One of `gsuite`, `office_wopi`, `office_wopiplus`, `other`.
			 */
			app_type?: string;
		};
		/**
		 * Indicates the (optional) file extension for this file. By default, this is set to an empty string.
		 */
		extension?: string;
		/**
		 * Indicates if the file is a package. Packages are commonly used by Mac Applications and can include iWork files.
		 */
		is_package?: boolean;
		/**
		 * An expiring Box Embed Link.
		 */
		expiring_embed_link?: {
			/**
			 * The requested access token.
			 */
			access_token?: string;
			/**
			 * The time in seconds by which this token will expire.
			 */
			expires_in?: number;
			/**
			 * The type of access token returned. One of `bearer`.
			 */
			token_type?: string;
			/**
			 * The permissions that this access token permits, providing a list of resources (files, folders, etc) and the scopes permitted for each of those resources.
			 */
			restricted_to?: {
				/**
				 * The scopes for the resource access. One of `annotation_edit`, `annotation_view_all`, `annotation_view_self`, `base_explorer`, `base_picker`, `base_preview`, `base_upload`, `item_delete`, `item_download`, `item_preview`, `item_rename`, `item_share`, `item_upload`, `item_read`.
				 */
				scope?: string;
				/**
				 * The file or folder resource.
				 */
				object?: {
					/**
					 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
					 */
					id?: string;
					/**
					 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
					 */
					etag?: string;
					/**
					 * The value will always be `folder`. One of `folder`.
					 */
					type?: string;
					/**
					 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
					 */
					sequence_id?: string;
					/**
					 * The name of the folder.
					 */
					name?: string;
					/**
					 * The SHA1 hash of the file. This can be used to compare the contents of a file on Box with a local file.
					 */
					sha1?: string;
					/**
					 * A mini representation of a file version, used when nested within another resource.
					 */
					file_version?: {
						/**
						 * The unique identifier that represent a file version.
						 */
						id?: string;
						/**
						 * The value will always be `file_version`. One of `file_version`.
						 */
						type?: string;
						/**
						 * The SHA1 hash of this version of the file.
						 */
						sha1?: string;
					};
				};
			}[];
			/**
			 * The actual expiring embed URL for this file, constructed from the file ID and access tokens specified in this object.
			 */
			url?: string;
		};
		/**
		 * Details about the watermark applied to this item.
		 */
		watermark_info?: {
			/**
			 * Specifies if this item has a watermark applied.
			 */
			is_watermarked?: boolean;
			/**
			 * Specifies if the watermark is inherited from any parent folder in the hierarchy.
			 */
			is_watermark_inherited?: boolean;
			/**
			 * Specifies if the watermark is enforced by an access policy.
			 */
			is_watermarked_by_access_policy?: boolean;
		};
		/**
		 * Specifies if the file can be accessed via the direct shared link or a shared link to a parent folder.
		 */
		is_accessible_via_shared_link?: boolean;
		/**
		 * A list of the types of roles that user can be invited at when sharing this file.
		 *
		 * Items: The allowed invitee role. One of `editor`, `viewer`, `previewer`, `uploader`, `previewer uploader`, `viewer uploader`, `co-owner`.
		 */
		allowed_invitee_roles?: string[];
		/**
		 * Specifies if this file is owned by a user outside of the authenticated enterprise.
		 */
		is_externally_owned?: boolean;
		/**
		 * Specifies if this file has any other collaborators.
		 */
		has_collaborations?: boolean;
		/**
		 * A list of metadata instances, nested within key-value pairs of their `scope` and `templateKey`. To access the metadata for a file or folder, first use the metadata endpoints to determine the metadata templates available to your enterprise. Then use the `GET /files/:id` or `GET /folder/:id` endpoint with the `fields` query parameter to get the metadata by ID. To request a metadata instance for a particular `scope` and `templateKey` use the following format for the `fields` parameter: `metadata.<scope>.<templateKey>` For example, `?fields=metadata.enterprise_27335.marketingCollateral`.
		 */
		metadata?: Record<string, JSONValue>;
		/**
		 * When the file will automatically be deleted.
		 */
		expires_at?: string;
		/**
		 * A list of file representations.
		 */
		representations?: {
			/**
			 * A list of files.
			 */
			entries?: {
				/**
				 * An object containing the URL that can be used to actually fetch the representation.
				 */
				content?: {
					/**
					 * The download URL that can be used to fetch the representation. Make sure to make an authenticated API call to this endpoint. This URL is a template and will require the `{+asset_path}` to be replaced by a path. In general, for unpaged representations it can be replaced by an empty string. For paged representations, replace the `{+asset_path}` with the page to request plus the extension for the file, for example `1.pdf`. When requesting the download URL the following additional query params can be passed along. * `set_content_disposition_type` - Sets the `Content-Disposition` header in the API response with the specified disposition type of either `inline` or `attachment`. If not supplied, the `Content-Disposition` header is not included in the response. * `set_content_disposition_filename` - Allows the application to define the representation's file name used in the…
					 */
					url_template?: string;
				};
				/**
				 * An object containing the URL that can be used to fetch more info on this representation.
				 */
				info?: {
					/**
					 * The API URL that can be used to get more info on this file representation. Make sure to make an authenticated API call to this endpoint.
					 */
					url?: string;
				};
				/**
				 * An object containing the size and type of this presentation.
				 */
				properties?: {
					/**
					 * The width by height size of this representation in pixels.
					 */
					dimensions?: string;
					/**
					 * Indicates if the representation is build up out of multiple pages.
					 */
					paged?: string;
					/**
					 * Indicates if the representation can be used as a thumbnail of the file.
					 */
					thumb?: string;
				};
				/**
				 * Indicates the file type of the returned representation.
				 */
				representation?: string;
				/**
				 * An object containing the status of this representation.
				 */
				status?: {
					/**
					 * The status of the representation. * `success` defines the representation as ready to be viewed. * `viewable` defines a video to be ready for viewing. * `pending` defines the representation as to be generated. Retry this endpoint to re-check the status. * `none` defines that the representation will be created when requested. Request the URL defined in the `info` object to trigger this generation. One of `success`, `viewable`, `pending`, `none`.
					 */
					state?: string;
				};
			}[];
		};
		/**
		 * The classification applied to an item.
		 */
		classification?: {
			/**
			 * The name of the classification.
			 */
			name?: string;
			/**
			 * An explanation of the meaning of this classification.
			 */
			definition?: string;
			/**
			 * The color that is used to display the classification label in a user-interface. Colors are defined by the admin or co-admin who created the classification in the Box web app.
			 */
			color?: string;
		};
		/**
		 * The display name of the user that uploaded the file. In most cases this is the name of the user logged in at the time of the upload. If the file was uploaded using a File Request form that requires the user to provide an email address, this field is populated with that email address. If an email address was not required in the File Request form, this field is set to return a value of `File Request`. In all other anonymous cases where no email was provided this field will default to a value of `Someone`.
		 */
		uploader_display_name?: string;
		/**
		 * The retention expiration timestamp for the given file.
		 */
		disposition_at?: string;
		/**
		 * A list of the types of roles that user can be invited at when sharing this file.
		 *
		 * Items: The shared link permission option. One of `can_preview`, `can_download`, `can_edit`.
		 */
		shared_link_permission_options?: string[];
		/**
		 * This field will return true if the file or any ancestor of the file is associated with at least one app item. Note that this will return true even if the context user does not have access to the app item(s) associated with the file.
		 */
		is_associated_with_app_item?: boolean;
		/**
		 * The collections that this file belongs to. For more information, see the [collections guide](https://developer.box.com/guides/collections).
		 */
		collections?: {
			/**
			 * The unique identifier for this collection.
			 */
			id?: string;
			/**
			 * The value will always be `collection`. One of `collection`.
			 */
			type?: string;
			/**
			 * The name of the collection. One of `Favorites`.
			 */
			name?: string;
			/**
			 * The type of the collection. This is used to determine the proper visual treatment for collections. One of `favorites`.
			 */
			collection_type?: string;
		}[];
		/**
		 * Whether the file's binary content is eligible to be downloaded. This is a content-level flag and does not reflect whether the current user is authorized to download the file. Use `permissions.can_download`, when available, for that.
		 */
		is_download_available?: boolean;
		/**
		 * A pre-authorized, expiring URL for directly downloading the file's content. Requires authentication and is valid only for the current session. This field is only returned for files, not folders or web links.
		 */
		download_url?: string;
		/**
		 * A stable API URL for the file content endpoint, `/2.0/files/{id}/content`. Unlike `download_url`, authorization is evaluated when the URL is requested with a valid access token. This field is only returned for files, not folders or web links.
		 */
		authenticated_download_url?: string;
		/**
		 * The shared link access levels the authenticated user is allowed to use when creating or updating a shared link for this file. The list depends on item policy and user authorization, so it may be narrower than the levels available to the owner. An empty array means no access level is available to this user.
		 *
		 * Items: The access level for a shared link. One of `open`, `company`, `collaborators`.
		 */
		allowed_shared_link_access_levels?: string[];
		/**
		 * The `folder_upload_email` parameter is not `null` if one of the following options is **true**: * The **Allow uploads to this folder via email** and the **Only allow email uploads from collaborators in this folder** are [enabled for a folder in the Admin Console](https://support.box.com/hc/en-us/articles/360043697534-Upload-to-Box-Through-Email), and the user has at least **Upload** permissions granted. * The **Allow uploads to this folder via email** setting is enabled for a folder in the Admin Console, and the **Only allow email uploads from collaborators in this folder** setting is deactivated (unchecked). If the conditions are not met, the parameter will have the following value: `folder_upload_email: null`.
		 */
		folder_upload_email?: {
			/**
			 * When this parameter has been set, users can email files to the email address that has been automatically created for this folder. To create an email address, set this property either when creating or updating the folder. When set to `collaborators`, only emails from registered email addresses for collaborators will be accepted. This includes any email aliases a user might have registered. When set to `open` it will accept emails from any email address. One of `open`, `collaborators`.
			 */
			access?: string;
			/**
			 * The optional upload email address for this folder.
			 */
			email?: string;
		};
		/**
		 * A list of files, folders, and web links in their mini representation.
		 */
		item_collection?: {
			/**
			 * The limit that was used for these entries. This will be the same as the `limit` query parameter unless that value exceeded the maximum value allowed. The maximum value varies by API.
			 */
			limit?: number;
			/**
			 * The marker for the start of the next page of results.
			 */
			next_marker?: string;
			/**
			 * The marker for the start of the previous page of results.
			 */
			prev_marker?: string;
			/**
			 * One greater than the offset of the last entry in the entire collection. The total number of entries in the collection may be less than `total_count`. This field is only returned for calls that use offset-based pagination. For marker-based paginated APIs, this field will be omitted.
			 */
			total_count?: number;
			/**
			 * The 0-based offset of the first entry in this set. This will be the same as the `offset` query parameter. This field is only returned for calls that use offset-based pagination. For marker-based paginated APIs, this field will be omitted.
			 */
			offset?: number;
			/**
			 * The order by which items are returned. This field is only returned for calls that use offset-based pagination. For marker-based paginated APIs, this field will be omitted.
			 */
			order?: {
				/**
				 * The field to order by.
				 */
				by?: string;
				/**
				 * The direction to order by, either ascending or descending. One of `ASC`, `DESC`.
				 */
				direction?: string;
			}[];
			/**
			 * The items in this collection.
			 */
			entries?: {
				/**
				 * The unique identifier that represent a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
				 */
				id?: string;
				/**
				 * The HTTP `etag` of this file. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the file if (no) changes have happened.
				 */
				etag?: string;
				/**
				 * The value will always be `file`. One of `file`.
				 */
				type?: string;
				/**
				 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
				 */
				sequence_id?: string;
				/**
				 * The name of the file.
				 */
				name?: string;
				/**
				 * The SHA1 hash of the file. This can be used to compare the contents of a file on Box with a local file.
				 */
				sha1?: string;
				/**
				 * A mini representation of a file version, used when nested within another resource.
				 */
				file_version?: {
					/**
					 * The unique identifier that represent a file version.
					 */
					id?: string;
					/**
					 * The value will always be `file_version`. One of `file_version`.
					 */
					type?: string;
					/**
					 * The SHA1 hash of this version of the file.
					 */
					sha1?: string;
				};
				/**
				 * The optional description of this file. If the description exceeds 255 characters, the first 255 characters are set as a file description and the rest of it is ignored.
				 */
				description?: string;
				/**
				 * The file size in bytes. Be careful parsing this integer as it can get very large and cause an integer overflow.
				 */
				size?: number;
				/**
				 * A list of parent folders for an item.
				 */
				path_collection?: {
					/**
					 * The number of folders in this list.
					 */
					total_count?: number;
					/**
					 * The parent folders for this item.
					 */
					entries?: {
						/**
						 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
						 */
						id?: string;
						/**
						 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
						 */
						etag?: string;
						/**
						 * The value will always be `folder`. One of `folder`.
						 */
						type?: string;
						/**
						 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
						 */
						sequence_id?: string;
						/**
						 * The name of the folder.
						 */
						name?: string;
					}[];
				};
				/**
				 * The date and time when the file was created on Box.
				 */
				created_at?: string;
				/**
				 * The date and time when the file was last updated on Box.
				 */
				modified_at?: string;
				/**
				 * The time at which this file was put in the trash.
				 */
				trashed_at?: string;
				/**
				 * The time at which this file is expected to be purged from the trash.
				 */
				purged_at?: string;
				/**
				 * The date and time at which this file was originally created, which might be before it was uploaded to Box.
				 */
				content_created_at?: string;
				/**
				 * The date and time at which this file was last updated, which might be before it was uploaded to Box.
				 */
				content_modified_at?: string;
				/**
				 * A mini representation of a user, as can be returned when nested within other resources.
				 */
				created_by?: {
					/**
					 * The unique identifier for this user.
					 */
					id?: string;
					/**
					 * The value will always be `user`. One of `user`.
					 */
					type?: string;
					/**
					 * The display name of this user.
					 */
					name?: string;
					/**
					 * The primary email address of this user.
					 */
					login?: string;
				};
				/**
				 * A mini representation of a user, as can be returned when nested within other resources.
				 */
				modified_by?: {
					/**
					 * The unique identifier for this user.
					 */
					id?: string;
					/**
					 * The value will always be `user`. One of `user`.
					 */
					type?: string;
					/**
					 * The display name of this user.
					 */
					name?: string;
					/**
					 * The primary email address of this user.
					 */
					login?: string;
				};
				/**
				 * A mini representation of a user, as can be returned when nested within other resources.
				 */
				owned_by?: {
					/**
					 * The unique identifier for this user.
					 */
					id?: string;
					/**
					 * The value will always be `user`. One of `user`.
					 */
					type?: string;
					/**
					 * The display name of this user.
					 */
					name?: string;
					/**
					 * The primary email address of this user.
					 */
					login?: string;
				};
				/**
				 * Shared links provide direct, read-only access to files or folder on Box. Shared links with open access level allow anyone with the URL to access the item, while shared links with company or collaborators access levels can only be accessed by appropriately authenticated Box users.
				 */
				shared_link?: {
					/**
					 * The URL that can be used to access the item on Box. This URL will display the item in Box's preview UI where the file can be downloaded if allowed. This URL will continue to work even when a custom `vanity_url` has been set for this shared link.
					 */
					url?: string;
					/**
					 * A URL that can be used to download the file. This URL can be used in a browser to download the file. This URL includes the file extension so that the file will be saved with the right file type. This property will be `null` for folders.
					 */
					download_url?: string;
					/**
					 * The "Custom URL" that can also be used to preview the item on Box. Custom URLs can only be created or modified in the Box Web application.
					 */
					vanity_url?: string;
					/**
					 * The custom name of a shared link, as used in the `vanity_url` field.
					 */
					vanity_name?: string;
					/**
					 * The access level for this shared link. * `open` - provides access to this item to anyone with this link * `company` - only provides access to this item to people the same company * `collaborators` - only provides access to this item to people who are collaborators on this item If this field is omitted when creating the shared link, the access level will be set to the default access level specified by the enterprise admin. One of `open`, `company`, `collaborators`.
					 */
					access?: string;
					/**
					 * The effective access level for the shared link. This can be a more restrictive access level than the value in the `access` field when the enterprise settings restrict the allowed access levels. One of `open`, `company`, `collaborators`.
					 */
					effective_access?: string;
					/**
					 * The effective permissions for this shared link. These result in the more restrictive combination of the share link permissions and the item permissions set by the administrator, the owner, and any ancestor item such as a folder. One of `can_edit`, `can_download`, `can_preview`, `no_access`.
					 */
					effective_permission?: string;
					/**
					 * The date and time when this link will be unshared. This field can only be set by users with paid accounts.
					 */
					unshared_at?: string;
					/**
					 * Defines if the shared link requires a password to access the item.
					 */
					is_password_enabled?: boolean;
					/**
					 * Defines if this link allows a user to preview, edit, and download an item. These permissions refer to the shared link only and do not supersede permissions applied to the item itself.
					 */
					permissions?: {
						/**
						 * Defines if the shared link allows for the item to be downloaded. For shared links on folders, this also applies to any items in the folder. This value can be set to `true` when the effective access level is set to `open` or `company`, not `collaborators`.
						 */
						can_download?: boolean;
						/**
						 * Defines if the shared link allows for the item to be previewed. This value is always `true`. For shared links on folders this also applies to any items in the folder.
						 */
						can_preview?: boolean;
						/**
						 * Defines if the shared link allows for the item to be edited. This value can only be `true` if `can_download` is also `true` and if the item has a type of `file`.
						 */
						can_edit?: boolean;
					};
					/**
					 * The number of times this item has been downloaded.
					 */
					download_count?: number;
					/**
					 * The number of times this item has been previewed.
					 */
					preview_count?: number;
				};
				/**
				 * A mini representation of a file version, used when nested under another resource.
				 */
				parent?: {
					/**
					 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
					 */
					id?: string;
					/**
					 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
					 */
					etag?: string;
					/**
					 * The value will always be `folder`. One of `folder`.
					 */
					type?: string;
					/**
					 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
					 */
					sequence_id?: string;
					/**
					 * The name of the folder.
					 */
					name?: string;
				};
				/**
				 * Defines if this item has been deleted or not. * `active` when the item has is not in the trash * `trashed` when the item has been moved to the trash but not deleted * `deleted` when the item has been permanently deleted. One of `active`, `trashed`, `deleted`.
				 */
				item_status?: string;
				/**
				 * The version number of this file.
				 */
				version_number?: string;
				/**
				 * The number of comments on this file.
				 */
				comment_count?: number;
				/**
				 * The permissions that the authenticated user has for a file.
				 */
				permissions?: {
					/**
					 * Specifies if the current user can delete this item.
					 */
					can_delete?: boolean;
					/**
					 * Specifies if the current user can download this item.
					 */
					can_download?: boolean;
					/**
					 * Specifies if the current user can invite new users to collaborate on this item, and if the user can update the role of a user already collaborated on this item.
					 */
					can_invite_collaborator?: boolean;
					/**
					 * Specifies if the user can rename this item.
					 */
					can_rename?: boolean;
					/**
					 * Specifies if the user can change the access level of an existing shared link on this item.
					 */
					can_set_share_access?: boolean;
					/**
					 * Specifies if the user can create a shared link for this item.
					 */
					can_share?: boolean;
					/**
					 * Specifies if the user can place annotations on this file.
					 */
					can_annotate?: boolean;
					/**
					 * Specifies if the user can place comments on this file.
					 */
					can_comment?: boolean;
					/**
					 * Specifies if the user can preview this file.
					 */
					can_preview?: boolean;
					/**
					 * Specifies if the user can upload a new version of this file.
					 */
					can_upload?: boolean;
					/**
					 * Specifies if the user view all annotations placed on this file.
					 */
					can_view_annotations_all?: boolean;
					/**
					 * Specifies if the user view annotations placed by themselves on this file.
					 */
					can_view_annotations_self?: boolean;
					/**
					 * Specifies if the user can apply a watermark to this file.
					 */
					can_apply_watermark?: boolean;
				};
				/**
				 * The tags for this item. These tags are shown in the Box web app and mobile apps next to an item. To add or remove a tag, retrieve the item's current tags, modify them, and then update this field. There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
				 *
				 * Items: The tag.
				 */
				tags?: string[];
				/**
				 * The lock held on a file. A lock prevents a file from being moved, renamed, or otherwise changed by anyone else than the user who created the lock.
				 */
				lock?: {
					/**
					 * The unique identifier for this lock.
					 */
					id?: string;
					/**
					 * The value will always be `lock`. One of `lock`.
					 */
					type?: string;
					/**
					 * A mini representation of a user, as can be returned when nested within other resources.
					 */
					created_by?: {
						/**
						 * The unique identifier for this user.
						 */
						id?: string;
						/**
						 * The value will always be `user`. One of `user`.
						 */
						type?: string;
						/**
						 * The display name of this user.
						 */
						name?: string;
						/**
						 * The primary email address of this user.
						 */
						login?: string;
					};
					/**
					 * The time this lock was created at.
					 */
					created_at?: string;
					/**
					 * The time this lock is to expire at, which might be in the past.
					 */
					expired_at?: string;
					/**
					 * Whether or not the file can be downloaded while locked.
					 */
					is_download_prevented?: boolean;
					/**
					 * If the lock is managed by an application rather than a user, this field identifies the type of the application that holds the lock. This is an open enum and may be extended with additional values in the future. One of `gsuite`, `office_wopi`, `office_wopiplus`, `other`.
					 */
					app_type?: string;
				};
				/**
				 * Indicates the (optional) file extension for this file. By default, this is set to an empty string.
				 */
				extension?: string;
				/**
				 * Indicates if the file is a package. Packages are commonly used by Mac Applications and can include iWork files.
				 */
				is_package?: boolean;
				/**
				 * An expiring Box Embed Link.
				 */
				expiring_embed_link?: {
					/**
					 * The requested access token.
					 */
					access_token?: string;
					/**
					 * The time in seconds by which this token will expire.
					 */
					expires_in?: number;
					/**
					 * The type of access token returned. One of `bearer`.
					 */
					token_type?: string;
					/**
					 * The permissions that this access token permits, providing a list of resources (files, folders, etc) and the scopes permitted for each of those resources.
					 */
					restricted_to?: {
						/**
						 * The scopes for the resource access. One of `annotation_edit`, `annotation_view_all`, `annotation_view_self`, `base_explorer`, `base_picker`, `base_preview`, `base_upload`, `item_delete`, `item_download`, `item_preview`, `item_rename`, `item_share`, `item_upload`, `item_read`.
						 */
						scope?: string;
						/**
						 * The file or folder resource.
						 */
						object?: {
							/**
							 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
							 */
							id?: string;
							/**
							 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
							 */
							etag?: string;
							/**
							 * The value will always be `folder`. One of `folder`.
							 */
							type?: string;
							/**
							 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
							 */
							sequence_id?: string;
							/**
							 * The name of the folder.
							 */
							name?: string;
							/**
							 * The SHA1 hash of the file. This can be used to compare the contents of a file on Box with a local file.
							 */
							sha1?: string;
							/**
							 * A mini representation of a file version, used when nested within another resource.
							 */
							file_version?: {
								/**
								 * The unique identifier that represent a file version.
								 */
								id?: string;
								/**
								 * The value will always be `file_version`. One of `file_version`.
								 */
								type?: string;
								/**
								 * The SHA1 hash of this version of the file.
								 */
								sha1?: string;
							};
						};
					}[];
					/**
					 * The actual expiring embed URL for this file, constructed from the file ID and access tokens specified in this object.
					 */
					url?: string;
				};
				/**
				 * Details about the watermark applied to this item.
				 */
				watermark_info?: {
					/**
					 * Specifies if this item has a watermark applied.
					 */
					is_watermarked?: boolean;
					/**
					 * Specifies if the watermark is inherited from any parent folder in the hierarchy.
					 */
					is_watermark_inherited?: boolean;
					/**
					 * Specifies if the watermark is enforced by an access policy.
					 */
					is_watermarked_by_access_policy?: boolean;
				};
				/**
				 * Specifies if the file can be accessed via the direct shared link or a shared link to a parent folder.
				 */
				is_accessible_via_shared_link?: boolean;
				/**
				 * A list of the types of roles that user can be invited at when sharing this file.
				 *
				 * Items: The allowed invitee role. One of `editor`, `viewer`, `previewer`, `uploader`, `previewer uploader`, `viewer uploader`, `co-owner`.
				 */
				allowed_invitee_roles?: string[];
				/**
				 * Specifies if this file is owned by a user outside of the authenticated enterprise.
				 */
				is_externally_owned?: boolean;
				/**
				 * Specifies if this file has any other collaborators.
				 */
				has_collaborations?: boolean;
				/**
				 * A list of metadata instances, nested within key-value pairs of their `scope` and `templateKey`. To access the metadata for a file or folder, first use the metadata endpoints to determine the metadata templates available to your enterprise. Then use the `GET /files/:id` or `GET /folder/:id` endpoint with the `fields` query parameter to get the metadata by ID. To request a metadata instance for a particular `scope` and `templateKey` use the following format for the `fields` parameter: `metadata.<scope>.<templateKey>` For example, `?fields=metadata.enterprise_27335.marketingCollateral`.
				 */
				metadata?: Record<string, JSONValue>;
				/**
				 * When the file will automatically be deleted.
				 */
				expires_at?: string;
				/**
				 * A list of file representations.
				 */
				representations?: {
					/**
					 * A list of files.
					 */
					entries?: {
						/**
						 * An object containing the URL that can be used to actually fetch the representation.
						 */
						content?: {
							/**
							 * The download URL that can be used to fetch the representation. Make sure to make an authenticated API call to this endpoint. This URL is a template and will require the `{+asset_path}` to be replaced by a path. In general, for unpaged representations it can be replaced by an empty string. For paged representations, replace the `{+asset_path}` with the page to request plus the extension for the file, for example `1.pdf`. When requesting the download URL the following additional query params can be passed along. * `set_content_disposition_type` - Sets the `Content-Disposition` header in the API response with the specified disposition type of either `inline` or `attachment`. If not supplied, the `Content-Disposition` header is not included in the response. * `set_content_disposition_filename` - Allows the application to define the representation's file name used in the…
							 */
							url_template?: string;
						};
						/**
						 * An object containing the URL that can be used to fetch more info on this representation.
						 */
						info?: {
							/**
							 * The API URL that can be used to get more info on this file representation. Make sure to make an authenticated API call to this endpoint.
							 */
							url?: string;
						};
						/**
						 * An object containing the size and type of this presentation.
						 */
						properties?: {
							/**
							 * The width by height size of this representation in pixels.
							 */
							dimensions?: string;
							/**
							 * Indicates if the representation is build up out of multiple pages.
							 */
							paged?: string;
							/**
							 * Indicates if the representation can be used as a thumbnail of the file.
							 */
							thumb?: string;
						};
						/**
						 * Indicates the file type of the returned representation.
						 */
						representation?: string;
						/**
						 * An object containing the status of this representation.
						 */
						status?: {
							/**
							 * The status of the representation. * `success` defines the representation as ready to be viewed. * `viewable` defines a video to be ready for viewing. * `pending` defines the representation as to be generated. Retry this endpoint to re-check the status. * `none` defines that the representation will be created when requested. Request the URL defined in the `info` object to trigger this generation. One of `success`, `viewable`, `pending`, `none`.
							 */
							state?: string;
						};
					}[];
				};
				/**
				 * The classification applied to an item.
				 */
				classification?: {
					/**
					 * The name of the classification.
					 */
					name?: string;
					/**
					 * An explanation of the meaning of this classification.
					 */
					definition?: string;
					/**
					 * The color that is used to display the classification label in a user-interface. Colors are defined by the admin or co-admin who created the classification in the Box web app.
					 */
					color?: string;
				};
				/**
				 * The display name of the user that uploaded the file. In most cases this is the name of the user logged in at the time of the upload. If the file was uploaded using a File Request form that requires the user to provide an email address, this field is populated with that email address. If an email address was not required in the File Request form, this field is set to return a value of `File Request`. In all other anonymous cases where no email was provided this field will default to a value of `Someone`.
				 */
				uploader_display_name?: string;
				/**
				 * The retention expiration timestamp for the given file.
				 */
				disposition_at?: string;
				/**
				 * A list of the types of roles that user can be invited at when sharing this file.
				 *
				 * Items: The shared link permission option. One of `can_preview`, `can_download`, `can_edit`.
				 */
				shared_link_permission_options?: string[];
				/**
				 * This field will return true if the file or any ancestor of the file is associated with at least one app item. Note that this will return true even if the context user does not have access to the app item(s) associated with the file.
				 */
				is_associated_with_app_item?: boolean;
				/**
				 * The collections that this file belongs to. For more information, see the [collections guide](https://developer.box.com/guides/collections).
				 */
				collections?: {
					/**
					 * The unique identifier for this collection.
					 */
					id?: string;
					/**
					 * The value will always be `collection`. One of `collection`.
					 */
					type?: string;
					/**
					 * The name of the collection. One of `Favorites`.
					 */
					name?: string;
					/**
					 * The type of the collection. This is used to determine the proper visual treatment for collections. One of `favorites`.
					 */
					collection_type?: string;
				}[];
				/**
				 * Whether the file's binary content is eligible to be downloaded. This is a content-level flag and does not reflect whether the current user is authorized to download the file. Use `permissions.can_download`, when available, for that.
				 */
				is_download_available?: boolean;
				/**
				 * A pre-authorized, expiring URL for directly downloading the file's content. Requires authentication and is valid only for the current session. This field is only returned for files, not folders or web links.
				 */
				download_url?: string;
				/**
				 * A stable API URL for the file content endpoint, `/2.0/files/{id}/content`. Unlike `download_url`, authorization is evaluated when the URL is requested with a valid access token. This field is only returned for files, not folders or web links.
				 */
				authenticated_download_url?: string;
				/**
				 * The shared link access levels the authenticated user is allowed to use when creating or updating a shared link for this file. The list depends on item policy and user authorization, so it may be narrower than the levels available to the owner. An empty array means no access level is available to this user.
				 *
				 * Items: The access level for a shared link. One of `open`, `company`, `collaborators`.
				 */
				allowed_shared_link_access_levels?: string[];
				/**
				 * The URL this web link points to.
				 */
				url?: string;
			}[];
		};
		/**
		 * Specifies whether a folder should be synced to a user's device or not. This is used by Box Sync (discontinued) and is not used by Box Drive. One of `synced`, `not_synced`, `partially_synced`.
		 */
		sync_state?: string;
		/**
		 * Specifies if users who are not the owner of the folder can invite new collaborators to the folder.
		 */
		can_non_owners_invite?: boolean;
		/**
		 * Specifies if new invites to this folder are restricted to users within the enterprise. This does not affect existing collaborations.
		 */
		is_collaboration_restricted_to_enterprise?: boolean;
		/**
		 * Specifies if collaborators who are not owners of this folder are restricted from viewing other collaborations on this folder. It also restricts non-owners from inviting new collaborators.
		 */
		can_non_owners_view_collaborators?: boolean;
		/**
		 * The URL this web link points to.
		 */
		url?: string;
	}[];
};

/**
 * Search for content
 * Searches for files, folders and web links that are available to the user or to the entire enterprise.
 */
export async function searchForContent(
	this: EndpointFunctionThis,
	payload: {
		input: SearchForContentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchForContentOutput> {
	const response = await this.endpointCaller<SearchForContentOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'searchForContent',
		},
		payload,
	);
	return response.output;
}
