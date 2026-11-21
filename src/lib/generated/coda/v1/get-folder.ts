// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFolderInput = {
	/**
	 * ID of the folder, for example `fl-1Ab234`. A doc's folder ID is in `folder.id` in the getDoc or listDocs response.
	 */
	folderId: string;
};

export type GetFolderOutput = {
	/**
	 * ID of the folder.
	 */
	id?: string;
	/**
	 * The type of this resource. Always `folder`.
	 */
	type?: string;
	/**
	 * The name of the folder.
	 */
	name?: string;
	/**
	 * Browser-friendly link to the folder.
	 */
	browserLink?: string;
	/**
	 * The description of the folder.
	 */
	description?: string;
	/**
	 * Info about the folder icon.
	 */
	icon?: {
		/**
		 * Name of the icon.
		 */
		name?: string;
		/**
		 * MIME type of the icon.
		 */
		type?: string;
		/**
		 * Browser-friendly link to the icon.
		 */
		browserLink?: string;
	};
	/**
	 * Color scheme of the folder icon, for example `DARK_BLUE` or `LIGHT_GRAY`.
	 */
	iconColor?: string;
	/**
	 * Timestamp for when the folder was created.
	 */
	createdAt?: string;
	/**
	 * Whether the folder settings can be edited. Some folder types, such as the personal "My docs" folder, cannot be edited.
	 */
	canEdit?: boolean;
	/**
	 * Reference to the workspace.
	 */
	workspace?: {
		/**
		 * ID of the workspace.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `workspace`.
		 */
		type?: string;
		/**
		 * ID of the organization bound to this workspace, if any.
		 */
		organizationId?: string;
		/**
		 * Browser-friendly link to the workspace.
		 */
		browserLink?: string;
		/**
		 * Name of the workspace. Included if the user has access to the workspace.
		 */
		name?: string;
	};
};

/**
 * Get a folder
 * Returns details about a folder.
 */
export async function getFolder(
	this: EndpointFunctionThis,
	payload: {
		input: GetFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetFolderOutput> {
	const response = await this.endpointCaller<GetFolderOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'getFolder',
		},
		payload,
	);
	return response.output;
}
