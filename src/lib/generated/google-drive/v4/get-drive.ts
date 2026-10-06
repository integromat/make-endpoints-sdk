// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetDriveInput = {
	/**
	 * The ID of the shared drive.
	 */
	driveId: string;
	/**
	 * Whether to issue the request as a domain administrator.
	 */
	useDomainAdminAccess?: boolean;
	/**
	 * The fields to include in the response. If not specified, all fields are returned.
	 */
	fields?: string;
};

export type GetDriveOutput = {
	/**
	 * Always 'drive#drive'.
	 */
	kind?: string;
	/**
	 * The ID of this shared drive.
	 */
	id?: string;
	/**
	 * The name of this shared drive.
	 */
	name?: string;
	/**
	 * The color of this shared drive as an RGB hex string.
	 */
	colorRgb?: string;
	/**
	 * The ID of the theme from which the background image and color are set.
	 */
	themeId?: string;
	/**
	 * An image file and cropping parameters.
	 */
	backgroundImageFile?: {
		/**
		 * The ID of an image file in Google Drive to use for the background image.
		 */
		id?: string;
		/**
		 * The X coordinate of the upper left corner of the cropping area.
		 */
		xCoordinate?: number;
		/**
		 * The Y coordinate of the upper left corner of the cropping area.
		 */
		yCoordinate?: number;
		/**
		 * The width of the cropped image.
		 */
		width?: number;
	};
	/**
	 * A short-lived link to this shared drive's background image.
	 */
	backgroundImageLink?: string;
	/**
	 * The time at which the shared drive was created, in RFC 3339 format.
	 */
	createdTime?: string;
	/**
	 * Whether the shared drive is hidden from default view.
	 */
	hidden?: boolean;
	/**
	 * The organizational unit of this shared drive.
	 */
	orgUnitId?: string;
	/**
	 * Capabilities the current user has on this shared drive.
	 */
	capabilities?: {
		/**
		 * Whether the current user can add children.
		 */
		canAddChildren?: boolean;
		/**
		 * Whether the current user can change the copy restriction.
		 */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean;
		/**
		 * Whether the current user can change the domain users restriction.
		 */
		canChangeDomainUsersOnlyRestriction?: boolean;
		/**
		 * Whether the current user can change the background.
		 */
		canChangeDriveBackground?: boolean;
		/**
		 * Whether the current user can change the members-only restriction.
		 */
		canChangeDriveMembersOnlyRestriction?: boolean;
		/**
		 * Whether the current user can comment.
		 */
		canComment?: boolean;
		/**
		 * Whether the current user can copy files.
		 */
		canCopy?: boolean;
		/**
		 * Whether the current user can delete children.
		 */
		canDeleteChildren?: boolean;
		/**
		 * Whether the current user can delete this shared drive.
		 */
		canDeleteDrive?: boolean;
		/**
		 * Whether the current user can download files.
		 */
		canDownload?: boolean;
		/**
		 * Whether the current user can edit files.
		 */
		canEdit?: boolean;
		/**
		 * Whether the current user can list children.
		 */
		canListChildren?: boolean;
		/**
		 * Whether the current user can manage members.
		 */
		canManageMembers?: boolean;
		/**
		 * Whether the current user can read revisions.
		 */
		canReadRevisions?: boolean;
		/**
		 * Whether the current user can rename files.
		 */
		canRename?: boolean;
		/**
		 * Whether the current user can rename this shared drive.
		 */
		canRenameDrive?: boolean;
		/**
		 * Whether the current user can change the sharing folders restriction.
		 */
		canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
		/**
		 * Whether the current user can share files.
		 */
		canShare?: boolean;
		/**
		 * Whether the current user can trash children.
		 */
		canTrashChildren?: boolean;
		/**
		 * Whether the current user can reset drive restrictions.
		 */
		canResetDriveRestrictions?: boolean;
		/**
		 * Whether the current user can change organizer-applied download restrictions.
		 */
		canChangeDownloadRestriction?: boolean;
	};
	/**
	 * A set of restrictions on this shared drive.
	 */
	restrictions?: {
		/**
		 * Whether copying files requires writer permission.
		 */
		copyRequiresWriterPermission?: boolean;
		/**
		 * Whether access is restricted to domain users.
		 */
		domainUsersOnly?: boolean;
		/**
		 * Whether access is restricted to drive members.
		 */
		driveMembersOnly?: boolean;
		/**
		 * Whether the restrictions are admin managed.
		 */
		adminManagedRestrictions?: boolean;
		/**
		 * Whether sharing folders requires organizer permission.
		 */
		sharingFoldersRequiresOrganizerPermission?: boolean;
		/**
		 * Download restrictions applied by shared drive managers.
		 */
		downloadRestriction?: {
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
};

/**
 * Get a shared drive
 * Returns metadata for a shared drive by its ID.
 */
export async function getDrive(
	this: EndpointFunctionThis,
	payload: {
		input: GetDriveInput;
		connectionId: number;
	},
): Promise<GetDriveOutput> {
	const response = await this.endpointCaller<GetDriveOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'getDrive',
		},
		payload,
	);
	return response.output;
}
