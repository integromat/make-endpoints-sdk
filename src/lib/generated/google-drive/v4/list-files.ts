// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListFilesInput = {
	/**
	 * A query for filtering the file results. See [Search for files & folders](https://developers.google.com/drive/api/guides/search-files) for the supported syntax.
	 */
	q?: string;
	/**
	 * Bodies of items (files/documents) to which the query applies.
	 */
	corpora?: '' | 'user' | 'domain' | 'drive' | 'allDrives';
	/**
	 * ID of the shared drive to search. Required when corpora is set to 'drive'.
	 */
	driveId?: string;
	/**
	 * A comma-separated list of spaces to query within the corpora.
	 */
	spaces?: '' | 'drive' | 'appDataFolder';
	/**
	 * Whether both My Drive and shared drive items should be included in results.
	 */
	includeItemsFromAllDrives?: boolean;
	/**
	 * A list of sort keys. Each key sorts ascending by default; select the 'desc' variant for descending order.
	 */
	orderBy?:
		| ''
		| 'createdTime'
		| 'createdTime desc'
		| 'folder'
		| 'folder desc'
		| 'modifiedByMeTime'
		| 'modifiedByMeTime desc'
		| 'modifiedTime'
		| 'modifiedTime desc'
		| 'name'
		| 'name desc'
		| 'name_natural'
		| 'name_natural desc'
		| 'quotaBytesUsed'
		| 'quotaBytesUsed desc'
		| 'recency'
		| 'recency desc'
		| 'sharedWithMeTime'
		| 'sharedWithMeTime desc'
		| 'starred'
		| 'starred desc'
		| 'viewedByMeTime'
		| 'viewedByMeTime desc';
	/**
	 * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
	 */
	includePermissionsForView?: string;
	/**
	 * A comma-separated list of IDs of labels to include in the labelInfo part of the response.
	 */
	includeLabels?: string;
	/**
	 * The fields to include in the response. If not specified, all fields are returned. Use Google's field mask syntax, e.g. 'files(id,name,mimeType)'.
	 */
	fields?: string;
	/**
	 * The maximum number of files to return per page. Acceptable values are 1 to 1000. Default is 100.
	 */
	pageSize?: number;
	/**
	 * The token for continuing a previous list request on the next page.
	 */
	pageToken?: string;
};

export type ListFilesOutput = {
	/**
	 * Identifies what kind of resource this is. Value: the fixed string 'drive#fileList'.
	 */
	kind?: string;
	/**
	 * The page token for the next page of files. Absent if this is the last page of results.
	 */
	nextPageToken?: string;
	/**
	 * Whether the search process was incomplete. If true, some search results might be missing.
	 */
	incompleteSearch?: boolean;
	/**
	 * The list of files matching the query.
	 *
	 * Items: A file resource in Google Drive.
	 */
	files?: {
		/**
		 * Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
		 */
		kind?: string;
		/**
		 * The unique identifier of the file.
		 */
		id?: string;
		/**
		 * The name of the file.
		 */
		name?: string;
		/**
		 * The MIME type of the file.
		 */
		mimeType?: string;
		/**
		 * A short description of the file.
		 */
		description?: string;
		/**
		 * Whether the user has starred the file.
		 */
		starred?: boolean;
		/**
		 * Whether the file has been trashed, either explicitly or from a trashed parent folder.
		 */
		trashed?: boolean;
		/**
		 * Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
		 */
		explicitlyTrashed?: boolean;
		/**
		 * The user who trashed the file. Only populated for items in shared drives.
		 */
		trashingUser?: {
			/**
			 * Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
			 */
			kind?: string;
			/**
			 * A plain text displayable name for this user.
			 */
			displayName?: string;
			/**
			 * A link to the user's profile photo, if available.
			 */
			photoLink?: string;
			/**
			 * Whether this user is the requesting user.
			 */
			me?: boolean;
			/**
			 * The user's ID as visible in Permission resources.
			 */
			permissionId?: string;
			/**
			 * The email address of the user.
			 */
			emailAddress?: string;
		};
		/**
		 * The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
		 */
		trashedTime?: string;
		/**
		 * The IDs of the parent folders which contain the file.
		 *
		 * Items: The ID of a parent folder.
		 */
		parents?: string[];
		/**
		 * The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
		 *
		 * Items: A space the file belongs to, e.g. drive, appDataFolder.
		 */
		spaces?: string[];
		/**
		 * A monotonically increasing version number for the file.
		 */
		version?: string;
		/**
		 * A link for downloading the content of the file in a browser.
		 */
		webContentLink?: string;
		/**
		 * A link for opening the file in a relevant Google editor or viewer in a browser.
		 */
		webViewLink?: string;
		/**
		 * A static, unauthenticated link to the file's icon.
		 */
		iconLink?: string;
		/**
		 * Whether this file has a thumbnail.
		 */
		hasThumbnail?: boolean;
		/**
		 * A short-lived link to the file's thumbnail, if available.
		 */
		thumbnailLink?: string;
		/**
		 * The thumbnail version for use in thumbnail cache invalidation.
		 */
		thumbnailVersion?: string;
		/**
		 * Whether the file has been shared. Not populated for items in shared drives.
		 */
		shared?: boolean;
		/**
		 * Whether the user owns the file. Not populated for items in shared drives.
		 */
		ownedByMe?: boolean;
		/**
		 * Whether the file has been viewed by this user.
		 */
		viewedByMe?: boolean;
		/**
		 * The last time the file was viewed by the user (RFC 3339 date-time).
		 */
		viewedByMeTime?: string;
		/**
		 * The time at which the file was created (RFC 3339 date-time).
		 */
		createdTime?: string;
		/**
		 * The last time the file was modified by anyone (RFC 3339 date-time).
		 */
		modifiedTime?: string;
		/**
		 * The last time the file was modified by the user (RFC 3339 date-time).
		 */
		modifiedByMeTime?: string;
		/**
		 * Whether the file has been modified by this user.
		 */
		modifiedByMe?: boolean;
		/**
		 * The time at which the file was shared with the user (RFC 3339 date-time).
		 */
		sharedWithMeTime?: string;
		/**
		 * The user who shared the file with the requesting user, if applicable.
		 */
		sharingUser?: {
			/**
			 * Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
			 */
			kind?: string;
			/**
			 * A plain text displayable name for this user.
			 */
			displayName?: string;
			/**
			 * A link to the user's profile photo, if available.
			 */
			photoLink?: string;
			/**
			 * Whether this user is the requesting user.
			 */
			me?: boolean;
			/**
			 * The user's ID as visible in Permission resources.
			 */
			permissionId?: string;
			/**
			 * The email address of the user.
			 */
			emailAddress?: string;
		};
		/**
		 * The last user to modify the file.
		 */
		lastModifyingUser?: {
			/**
			 * Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
			 */
			kind?: string;
			/**
			 * A plain text displayable name for this user.
			 */
			displayName?: string;
			/**
			 * A link to the user's profile photo, if available.
			 */
			photoLink?: string;
			/**
			 * Whether this user is the requesting user.
			 */
			me?: boolean;
			/**
			 * The user's ID as visible in Permission resources.
			 */
			permissionId?: string;
			/**
			 * The email address of the user.
			 */
			emailAddress?: string;
		};
		/**
		 * The owner(s) of the file. Certain legacy files may have more than one owner.
		 *
		 * Items: A file owner.
		 */
		owners?: {
			/**
			 * Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
			 */
			kind?: string;
			/**
			 * A plain text displayable name for this user.
			 */
			displayName?: string;
			/**
			 * A link to the user's profile photo, if available.
			 */
			photoLink?: string;
			/**
			 * Whether this user is the requesting user.
			 */
			me?: boolean;
			/**
			 * The user's ID as visible in Permission resources.
			 */
			permissionId?: string;
			/**
			 * The email address of the user.
			 */
			emailAddress?: string;
		}[];
		/**
		 * Deprecated: Use driveId instead. The ID of the Team Drive.
		 */
		teamDriveId?: string;
		/**
		 * The ID of the shared drive the file resides in. Only populated for items in shared drives.
		 */
		driveId?: string;
		/**
		 * Whether the options to copy, print, or download this file should be disabled for readers and commenters.
		 */
		copyRequiresWriterPermission?: boolean;
		/**
		 * Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.
		 */
		writersCanShare?: boolean;
		/**
		 * Whether there are permissions directly on this file. Only populated for items in shared drives.
		 */
		hasAugmentedPermissions?: boolean;
		/**
		 * Size in bytes of blobs and first party editor files. Will not be populated for files that have no size, like shortcuts and folders.
		 */
		size?: string;
		/**
		 * The number of storage quota bytes used by the file.
		 */
		quotaBytesUsed?: string;
		/**
		 * The MD5 checksum for the content of the file. Only applicable to files with binary content.
		 */
		md5Checksum?: string;
		/**
		 * The SHA-1 checksum associated with this file, if available.
		 */
		sha1Checksum?: string;
		/**
		 * The SHA-256 checksum associated with this file, if available.
		 */
		sha256Checksum?: string;
		/**
		 * Whether the file was created or opened by the requesting app.
		 */
		isAppAuthorized?: boolean;
		/**
		 * The original filename of the uploaded content if available, or else the original value of the name field.
		 */
		originalFilename?: string;
		/**
		 * The full file extension extracted from the name field (e.g. 'tar.gz').
		 */
		fullFileExtension?: string;
		/**
		 * The final component of fullFileExtension (e.g. 'gz').
		 */
		fileExtension?: string;
		/**
		 * The ID of the file's head revision.
		 */
		headRevisionId?: string;
		/**
		 * A key needed to access the item via a shared link.
		 */
		resourceKey?: string;
		/**
		 * The color for a folder or a shortcut to a folder as an RGB hex string.
		 */
		folderColorRgb?: string;
		/**
		 * Capabilities the current user has on this file.
		 */
		capabilities?: {
			/**
			 * Whether the current user can edit this file.
			 */
			canEdit?: boolean;
			/**
			 * Whether the current user can comment on this file.
			 */
			canComment?: boolean;
			/**
			 * Whether the current user can modify the sharing settings for this file.
			 */
			canShare?: boolean;
			/**
			 * Whether the current user can copy this file.
			 */
			canCopy?: boolean;
			/**
			 * Whether the current user can delete this file.
			 */
			canDelete?: boolean;
			/**
			 * Whether the current user can download this file.
			 */
			canDownload?: boolean;
			/**
			 * Whether the current user can rename this file.
			 */
			canRename?: boolean;
			/**
			 * Whether the current user can move this file to trash.
			 */
			canTrash?: boolean;
			/**
			 * Whether the current user can restore this file from trash.
			 */
			canUntrash?: boolean;
			/**
			 * Whether the current user can move this item outside of this drive by changing its parent.
			 */
			canMoveItemOutOfDrive?: boolean;
			/**
			 * Whether the current user can move this item within this drive.
			 */
			canMoveItemWithinDrive?: boolean;
			/**
			 * Whether the current user can read the revisions resource of this file.
			 */
			canReadRevisions?: boolean;
			/**
			 * Whether the current user can add children to this folder. Always false when the item is not a folder.
			 */
			canAddChildren?: boolean;
			/**
			 * Whether the current user can remove children from this folder. Always false when the item is not a folder.
			 */
			canRemoveChildren?: boolean;
			/**
			 * Whether the current user can list the children of this folder. Always false when the item is not a folder.
			 */
			canListChildren?: boolean;
			/**
			 * Whether the current user can move children of this folder outside of the shared drive.
			 */
			canMoveChildrenOutOfDrive?: boolean;
			/**
			 * Whether the current user can move children of this folder within this drive.
			 */
			canMoveChildrenWithinDrive?: boolean;
			/**
			 * Whether the current user can change the copyRequiresWriterPermission restriction of this file.
			 */
			canChangeCopyRequiresWriterPermission?: boolean;
			/**
			 * Whether the current user can change the securityUpdateEnabled field on link share metadata.
			 */
			canChangeSecurityUpdateEnabled?: boolean;
			/**
			 * Deprecated. Whether the current user can change whether viewers can copy content.
			 */
			canChangeViewersCanCopyContent?: boolean;
			/**
			 * Whether the current user can modify the content of this file.
			 */
			canModifyContent?: boolean;
			/**
			 * Deprecated. Whether the current user can modify restrictions on content of this file.
			 */
			canModifyContentRestriction?: boolean;
			/**
			 * Deprecated: Use canMoveItemOutOfDrive instead.
			 */
			canMoveItemIntoTeamDrive?: boolean;
			/**
			 * Deprecated: Use canMoveItemOutOfDrive instead.
			 */
			canMoveItemOutOfTeamDrive?: boolean;
			/**
			 * Deprecated: Use canMoveItemWithinDrive instead.
			 */
			canMoveItemWithinTeamDrive?: boolean;
			/**
			 * Deprecated: Use canMoveItemWithinDrive or canMoveItemOutOfDrive instead.
			 */
			canMoveTeamDriveItem?: boolean;
			/**
			 * Deprecated: Use canReadDrive instead.
			 */
			canReadTeamDrive?: boolean;
			/**
			 * Whether the current user can add a parent for the item without removing an existing parent in the same request.
			 */
			canAddMyDriveParent?: boolean;
			/**
			 * Whether the current user can remove a parent from the item without adding another parent in the same request.
			 */
			canRemoveMyDriveParent?: boolean;
			/**
			 * Whether the current user can read the shared drive to which this file belongs.
			 */
			canReadDrive?: boolean;
			/**
			 * Whether the current user can delete children of this folder.
			 */
			canDeleteChildren?: boolean;
			/**
			 * Whether the current user can trash children of this folder.
			 */
			canTrashChildren?: boolean;
			/**
			 * Whether the current user can add a folder from another drive to this folder.
			 */
			canAddFolderFromAnotherDrive?: boolean;
			/**
			 * Whether the current user is the pending owner of the file.
			 */
			canAcceptOwnership?: boolean;
			/**
			 * Whether the current user can read the labels on the file.
			 */
			canReadLabels?: boolean;
			/**
			 * Whether the current user can modify the labels on the file.
			 */
			canModifyLabels?: boolean;
			/**
			 * Whether the current user can add or modify content restrictions which are editor restricted.
			 */
			canModifyEditorContentRestriction?: boolean;
			/**
			 * Whether the current user can add or modify content restrictions which are owner restricted.
			 */
			canModifyOwnerContentRestriction?: boolean;
			/**
			 * Whether there is a content restriction on the file that can be removed by the current user.
			 */
			canRemoveContentRestriction?: boolean;
			/**
			 * Whether the current user can disable inherited permissions.
			 */
			canDisableInheritedPermissions?: boolean;
			/**
			 * Whether the current user can re-enable inherited permissions.
			 */
			canEnableInheritedPermissions?: boolean;
			/**
			 * Whether the current user can change the download restrictions of the file.
			 */
			canChangeItemDownloadRestriction?: boolean;
			/**
			 * Whether the current user can start an approval on the file.
			 */
			canStartApproval?: boolean;
			/**
			 * Whether the current user can access this file via Gen AI features.
			 */
			canAccessViaGenAi?: boolean;
		};
		/**
		 * The full list of permissions for the file. Only available if the requesting user can share the file.
		 *
		 * Items: A permission for a file.
		 */
		permissions?: {
			/**
			 * The ID of this permission.
			 */
			id?: string;
			/**
			 * The type of the grantee. Valid values are: user, group, domain, anyone.
			 */
			type?: string;
			/**
			 * The email address of the user or group to which this permission refers.
			 */
			emailAddress?: string;
			/**
			 * The domain to which this permission refers.
			 */
			domain?: string;
			/**
			 * The role granted by this permission. Valid values are: owner, organizer, fileOrganizer, writer, commenter, reader.
			 */
			role?: string;
			/**
			 * The 'pretty' name of the value of the permission.
			 */
			displayName?: string;
			/**
			 * A link to the user's profile photo, if available.
			 */
			photoLink?: string;
			/**
			 * Whether the account associated with this permission has been deleted.
			 */
			deleted?: boolean;
			/**
			 * The time at which this permission will expire (RFC 3339 date-time).
			 */
			expirationTime?: string;
			/**
			 * Whether the permission allows the file to be discovered through search.
			 */
			allowFileDiscovery?: boolean;
			/**
			 * Whether the account associated with this permission is a pending owner.
			 */
			pendingOwner?: boolean;
			/**
			 * Indicates the view for this permission: published.
			 */
			view?: string;
			/**
			 * When true, only organizers, owners, and users with permissions added directly on the item can access it.
			 */
			inheritedPermissionsDisabled?: boolean;
			/**
			 * Details of whether the permissions on this shared drive item are inherited or directly on this item.
			 *
			 * Items: A detail entry for a permission.
			 */
			permissionDetails?: {
				/**
				 * The permission type for this user. Valid values are: file, member.
				 */
				permissionType?: string;
				/**
				 * The ID of the item from which this permission is inherited.
				 */
				inheritedFrom?: string;
				/**
				 * The primary role for this user. Valid values are: organizer, fileOrganizer, writer, commenter, reader.
				 */
				role?: string;
				/**
				 * Whether this permission is inherited.
				 */
				inherited?: boolean;
			}[];
		}[];
		/**
		 * List of permission IDs for users with access to this file.
		 *
		 * Items: The ID of a permission for a user with access to this file.
		 */
		permissionIds?: string[];
		/**
		 * Shortcut file details. Only populated for shortcut files.
		 */
		shortcutDetails?: {
			/**
			 * The ID of the file that this shortcut points to.
			 */
			targetId?: string;
			/**
			 * The MIME type of the file that this shortcut points to.
			 */
			targetMimeType?: string;
			/**
			 * The resource key of the target file.
			 */
			targetResourceKey?: string;
		};
		/**
		 * Restrictions for accessing the content of the file.
		 *
		 * Items: A restriction on accessing the content of the file.
		 */
		contentRestrictions?: {
			/**
			 * Whether the content of the file is read-only.
			 */
			readOnly?: boolean;
			/**
			 * Reason for why the content of the file is restricted.
			 */
			reason?: string;
			/**
			 * The type of the content restriction.
			 */
			type?: string;
			/**
			 * The user who set the content restriction.
			 */
			restrictingUser?: {
				/**
				 * Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
				 */
				kind?: string;
				/**
				 * A plain text displayable name for this user.
				 */
				displayName?: string;
				/**
				 * A link to the user's profile photo, if available.
				 */
				photoLink?: string;
				/**
				 * Whether this user is the requesting user.
				 */
				me?: boolean;
				/**
				 * The user's ID as visible in Permission resources.
				 */
				permissionId?: string;
				/**
				 * The email address of the user.
				 */
				emailAddress?: string;
			};
			/**
			 * The time at which the content restriction was set (RFC 3339 date-time).
			 */
			restrictionTime?: string;
			/**
			 * Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with organizer capabilities can modify or remove this content restriction.
			 */
			ownerRestricted?: boolean;
			/**
			 * Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions.
			 */
			systemRestricted?: boolean;
		}[];
		/**
		 * Additional metadata about image media, if available.
		 */
		imageMediaMetadata?: {
			/**
			 * Whether a flash was used to create the photo.
			 */
			flashUsed?: boolean;
			/**
			 * The metering mode used to create the photo.
			 */
			meteringMode?: string;
			/**
			 * The type of sensor used to create the photo.
			 */
			sensor?: string;
			/**
			 * The exposure mode used to create the photo.
			 */
			exposureMode?: string;
			/**
			 * The color space of the photo.
			 */
			colorSpace?: string;
			/**
			 * The white balance mode used to create the photo.
			 */
			whiteBalance?: string;
			/**
			 * The width of the image in pixels.
			 */
			width?: number;
			/**
			 * The height of the image in pixels.
			 */
			height?: number;
			/**
			 * Geographic location information stored in the image.
			 */
			location?: {
				/**
				 * The latitude stored in the image.
				 */
				latitude?: number;
				/**
				 * The longitude stored in the image.
				 */
				longitude?: number;
				/**
				 * The altitude stored in the image.
				 */
				altitude?: number;
			};
			/**
			 * The number of clockwise 90 degree rotations applied from the image's original orientation.
			 */
			rotation?: number;
			/**
			 * The date and time the photo was taken (EXIF DateTime).
			 */
			time?: string;
			/**
			 * The make of the camera used to create the photo.
			 */
			cameraMake?: string;
			/**
			 * The model of the camera used to create the photo.
			 */
			cameraModel?: string;
			/**
			 * The length of the exposure, in seconds.
			 */
			exposureTime?: number;
			/**
			 * The aperture used to create the photo (f-number).
			 */
			aperture?: number;
			/**
			 * The focal length used to create the photo, in millimeters.
			 */
			focalLength?: number;
			/**
			 * The ISO speed used to create the photo.
			 */
			isoSpeed?: number;
			/**
			 * The exposure bias of the photo (APEX value).
			 */
			exposureBias?: number;
			/**
			 * The smallest f-number of the lens at the focal length used to create the photo (APEX value).
			 */
			maxApertureValue?: number;
			/**
			 * The distance to the subject of the photo, in meters.
			 */
			subjectDistance?: number;
			/**
			 * The lens used to create the photo.
			 */
			lens?: string;
		};
		/**
		 * Additional metadata about video media, if available.
		 */
		videoMediaMetadata?: {
			/**
			 * The width of the video in pixels.
			 */
			width?: number;
			/**
			 * The height of the video in pixels.
			 */
			height?: number;
			/**
			 * The duration of the video in milliseconds.
			 */
			durationMillis?: string;
		};
		/**
		 * Contains details about the link URLs that clients are using to refer to this item.
		 */
		linkShareMetadata?: {
			/**
			 * Whether the file is eligible for security update.
			 */
			securityUpdateEligible?: boolean;
			/**
			 * Whether the security update is enabled for this file.
			 */
			securityUpdateEnabled?: boolean;
		};
		/**
		 * A collection of arbitrary key-value pairs visible to all apps.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * A collection of arbitrary key-value pairs private to the requesting app.
		 */
		appProperties?: Record<string, JSONValue>;
		/**
		 * Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.
		 */
		inheritedPermissionsDisabled?: boolean;
		/**
		 * Download restrictions applied on the file.
		 */
		downloadRestrictions?: {
			/**
			 * The download restriction of the file applied directly by the owner or organizer. This doesn't take into account shared drive settings or DLP rules.
			 */
			itemDownloadRestriction?: {
				/**
				 * Whether download and copy is restricted for readers.
				 */
				restrictedForReaders?: boolean;
				/**
				 * Whether download and copy is restricted for writers. If true, download is also restricted for readers.
				 */
				restrictedForWriters?: boolean;
			};
			/**
			 * The effective download restriction applied to this file. This considers all restriction settings and DLP rules.
			 */
			effectiveDownloadRestrictionWithContext?: {
				/**
				 * Whether download and copy is restricted for readers.
				 */
				restrictedForReaders?: boolean;
				/**
				 * Whether download and copy is restricted for writers. If true, download is also restricted for readers.
				 */
				restrictedForWriters?: boolean;
			};
		};
		/**
		 * An overview of the labels on the file. Only populated when includeLabels is specified.
		 */
		labelInfo?: {
			/**
			 * The set of labels on the file as requested by the label IDs in the includeLabels parameter.
			 *
			 * Items: A label on the file.
			 */
			labels?: {
				/**
				 * The ID of the label.
				 */
				id?: string;
				/**
				 * The revision ID of the label.
				 */
				revisionId?: string;
				/**
				 * Identifies what kind of resource this is. Value: the fixed string 'drive#label'.
				 */
				kind?: string;
			}[];
		};
		/**
		 * Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism.
		 */
		clientEncryptionDetails?: {
			/**
			 * The encryption state of the file. Expected values: encrypted, unencrypted.
			 */
			encryptionState?: string;
			/**
			 * The metadata used for client-side operations.
			 */
			decryptionMetadata?: {
				/**
				 * The URL-safe Base64 encoded wrapped key used to encrypt the contents of the file.
				 */
				wrappedKey?: string;
				/**
				 * The ID of the KACLS (Key ACL Service) used to encrypt the file.
				 */
				kaclsId?: string;
				/**
				 * The name of the KACLS (Key ACL Service) used to encrypt the file.
				 */
				kaclsName?: string;
				/**
				 * Chunk size used if content was encrypted with the AES 256 GCM Cipher. Possible values: default, small.
				 */
				aes256GcmChunkSize?: string;
				/**
				 * The signed JSON Web Token (JWT) which can be used to authorize the requesting user with the Key ACL Service (KACLS).
				 */
				jwt?: string;
				/**
				 * Key format for the unwrapped key. Must be tinkAesGcmKey.
				 */
				keyFormat?: string;
				/**
				 * The URL-safe Base64 encoded HMAC-SHA256 digest of the resource metadata with its DEK (Data Encryption Key).
				 */
				encryptionResourceKeyHash?: string;
			};
		};
		/**
		 * Links for exporting Docs Editors files to specific formats. A map from export MIME type to URL.
		 */
		exportLinks?: Record<string, JSONValue>;
	}[];
};

/**
 * List files
 * Returns a list of files and folders matching the specified criteria.
 */
export async function listFiles(
	this: EndpointFunctionThis,
	payload: {
		input: ListFilesInput;
		connectionId: number;
	},
): Promise<ListFilesOutput> {
	const response = await this.endpointCaller<ListFilesOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'listFiles',
		},
		payload,
	);
	return response.output;
}
