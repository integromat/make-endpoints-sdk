// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetAboutInput = {
	/**
	 * The fields to include in the response. If not specified, all fields are returned.
	 */
	fields?: string;
};

export type GetAboutOutput = {
	/**
	 * Always 'drive#about'.
	 */
	kind?: string;
	/**
	 * The authenticated user.
	 */
	user?: {
		/**
		 * Always 'drive#user'.
		 */
		kind?: string;
		/**
		 * The user's display name.
		 */
		displayName?: string;
		/**
		 * A link to the user's profile photo.
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
	 * The user's storage quota.
	 */
	storageQuota?: {
		/**
		 * The usage limit, if applicable, in bytes. Will not be present if the user has unlimited storage.
		 */
		limit?: string;
		/**
		 * The total usage across all services, in bytes.
		 */
		usage?: string;
		/**
		 * The usage by all files in Google Drive, in bytes.
		 */
		usageInDrive?: string;
		/**
		 * The usage by trashed files in Google Drive, in bytes.
		 */
		usageInDriveTrash?: string;
	};
	/**
	 * A map of source MIME type to possible targets for all supported imports.
	 */
	importFormats?: Record<string, JSONValue>;
	/**
	 * A map of source MIME type to possible targets for all supported exports.
	 */
	exportFormats?: Record<string, JSONValue>;
	/**
	 * A map of maximum import sizes by MIME type, in bytes.
	 */
	maxImportSizes?: Record<string, JSONValue>;
	/**
	 * The maximum upload size in bytes.
	 */
	maxUploadSize?: string;
	/**
	 * Whether the user has installed the requesting app.
	 */
	appInstalled?: boolean;
	/**
	 * The currently supported folder colors as RGB hex strings.
	 *
	 * Items: An RGB hex color string.
	 */
	folderColorPalette?: string[];
	/**
	 * A list of themes that are supported for shared drives.
	 *
	 * Items: A shared drive theme.
	 */
	driveThemes?: {
		/**
		 * The ID of the theme.
		 */
		id?: string;
		/**
		 * A link to the theme's background image.
		 */
		backgroundImageLink?: string;
		/**
		 * The color of the theme as an RGB hex string.
		 */
		colorRgb?: string;
	}[];
	/**
	 * Whether the user can create shared drives.
	 */
	canCreateDrives?: boolean;
	/**
	 * Deprecated: Whether the user can create Team Drives.
	 */
	canCreateTeamDrives?: boolean;
};

/**
 * Get about
 * Returns information about the user, the user's Drive, and system capabilities.
 */
export async function getAbout(
	this: EndpointFunctionThis,
	payload: {
		input: GetAboutInput;
		connectionId: number;
	},
): Promise<GetAboutOutput> {
	const response = await this.endpointCaller<GetAboutOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'getAbout',
		},
		payload,
	);
	return response.output;
}
