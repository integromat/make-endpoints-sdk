// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreatePermissionInput = {
	/**
	 * The ID of the file or shared drive.
	 */
	fileId: string;
	/**
	 * The role granted by this permission.
	 */
	role: 'owner' | 'organizer' | 'fileOrganizer' | 'writer' | 'commenter' | 'reader';
	/**
	 * The type of the grantee.
	 */
	type: 'user' | 'group' | 'domain' | 'anyone';
	/**
	 * The email address of the user or group to which this permission refers. Required when type is 'user' or 'group'.
	 */
	emailAddress?: string;
	/**
	 * The domain to which this permission refers. Required when type is 'domain'.
	 */
	domain?: string;
	/**
	 * Whether the permission allows the file to be discovered through search. Only applicable for 'domain' and 'anyone' types.
	 */
	allowFileDiscovery?: boolean;
	/**
	 * Whether to send a notification email when sharing to users or groups.
	 */
	sendNotificationEmail?: boolean;
	/**
	 * A plain text custom message to include in the notification email.
	 */
	emailMessage?: string;
	/**
	 * Whether to transfer ownership to the specified user. Required when the role is 'owner'.
	 */
	transferOwnership?: boolean;
	/**
	 * This parameter only takes effect if the item isn't in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item is moved to the new owner's My Drive root folder and all prior parents removed.
	 */
	moveToNewOwnersRoot?: boolean;
	/**
	 * Issue the request as a domain administrator. The requester must be an administrator of the domain to which the shared drive belongs.
	 */
	useDomainAdminAccess?: boolean;
	/**
	 * The fields to include in the response. If not specified, all fields are returned.
	 */
	fields?: string;
};

export type CreatePermissionOutput = {
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
 * Create a permission
 * Creates a permission for a file or shared drive.
 */
export async function createPermission(
	this: EndpointFunctionThis,
	payload: {
		input: CreatePermissionInput;
		connectionId: number;
	},
): Promise<CreatePermissionOutput> {
	const response = await this.endpointCaller<CreatePermissionOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'createPermission',
		},
		payload,
	);
	return response.output;
}
