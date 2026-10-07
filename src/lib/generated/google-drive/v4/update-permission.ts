// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdatePermissionInput = {
	/**
	 * The ID of the file or shared drive.
	 */
	fileId: string;
	/**
	 * The ID of the permission to update.
	 */
	permissionId: string;
	/**
	 * The role granted by this permission.
	 */
	role?: '' | 'owner' | 'organizer' | 'fileOrganizer' | 'writer' | 'commenter' | 'reader';
	/**
	 * The time at which this permission will expire, in RFC 3339 format. Expiration times cannot be set on shared drive permissions.
	 */
	expirationTime?: string;
	/**
	 * Whether the account associated with this permission is a pending owner.
	 */
	pendingOwner?: boolean;
	/**
	 * Indicates the view for this permission: 'published'.
	 */
	view?: string;
	/**
	 * Whether to remove the expiration date.
	 */
	removeExpiration?: boolean;
	/**
	 * Whether to transfer ownership to the specified user.
	 */
	transferOwnership?: boolean;
	/**
	 * Issue the request as a domain administrator. The requester must be an administrator of the domain to which the shared drive belongs.
	 */
	useDomainAdminAccess?: boolean;
	/**
	 * The fields to include in the response. If not specified, all fields are returned.
	 */
	fields?: string;
};

export type UpdatePermissionOutput = {
	/**
	 * Always 'drive#permission'.
	 */
	kind?: string;
	/**
	 * The ID of the permission.
	 */
	id?: string;
	/**
	 * The type of the grantee: user, group, domain, or anyone.
	 */
	type?: string;
	/**
	 * The email address of the user or group.
	 */
	emailAddress?: string;
	/**
	 * The domain name of the entity.
	 */
	domain?: string;
	/**
	 * The role granted by this permission: owner, organizer, fileOrganizer, writer, commenter, reader.
	 */
	role?: string;
	/**
	 * The 'pretty' name of the permission.
	 */
	displayName?: string;
	/**
	 * A link to the user's profile photo.
	 */
	photoLink?: string;
	/**
	 * Whether the account associated with this permission has been deleted.
	 */
	deleted?: boolean;
	/**
	 * Whether the permission allows the file to be discovered through search.
	 */
	allowFileDiscovery?: boolean;
	/**
	 * The time at which this permission will expire, in RFC 3339 format.
	 */
	expirationTime?: string;
	/**
	 * Whether the account associated with this permission is a pending owner.
	 */
	pendingOwner?: boolean;
	/**
	 * Details of whether the permissions on this shared drive item are inherited or directly on this item.
	 *
	 * Items: A permission detail entry.
	 */
	permissionDetails?: {
		/**
		 * The permission type: file or member.
		 */
		permissionType?: string;
		/**
		 * The ID of the item from which this permission is inherited.
		 */
		inheritedFrom?: string;
		/**
		 * The primary role for this user.
		 */
		role?: string;
		/**
		 * Whether this permission is inherited.
		 */
		inherited?: boolean;
	}[];
	/**
	 * Indicates the view for this permission: published.
	 */
	view?: string;
	/**
	 * When true, only organizers, owners, and users with permissions added directly on the item can access it.
	 */
	inheritedPermissionsDisabled?: boolean;
};

/**
 * Update a permission
 * Updates a permission using patch semantics.
 */
export async function updatePermission(
	this: EndpointFunctionThis,
	payload: {
		input: UpdatePermissionInput;
		connectionId: number;
	},
): Promise<UpdatePermissionOutput> {
	const response = await this.endpointCaller<UpdatePermissionOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'updatePermission',
		},
		payload,
	);
	return response.output;
}
