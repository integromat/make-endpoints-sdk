// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeletePermissionInput = {
	/**
	 * The ID of the file or shared drive.
	 */
	fileId: string;
	/**
	 * The ID of the permission to delete.
	 */
	permissionId: string;
	/**
	 * Issue the request as a domain administrator. The requester must be an administrator of the domain to which the shared drive belongs.
	 */
	useDomainAdminAccess?: boolean;
};

export type DeletePermissionOutput = Record<string, never>;

/**
 * Delete a permission
 * Deletes a permission from a file or shared drive.
 */
export async function deletePermission(
	this: EndpointFunctionThis,
	payload: {
		input: DeletePermissionInput;
		connectionId: number;
	},
): Promise<DeletePermissionOutput> {
	const response = await this.endpointCaller<DeletePermissionOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'deletePermission',
		},
		payload,
	);
	return response.output;
}
