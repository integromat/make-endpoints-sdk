// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteDriveInput = {
	/**
	 * The ID of the shared drive to delete.
	 */
	driveId: string;
	/**
	 * Whether to issue the request as a domain administrator.
	 */
	useDomainAdminAccess?: boolean;
	/**
	 * Whether any items inside the shared drive should also be deleted. This option is only supported when useDomainAdminAccess is also set to true.
	 */
	allowItemDeletion?: boolean;
};

export type DeleteDriveOutput = Record<string, never>;

/**
 * Delete a shared drive
 * Permanently deletes a shared drive. The shared drive must be empty.
 */
export async function deleteDrive(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteDriveInput;
		connectionId: number;
	},
): Promise<DeleteDriveOutput> {
	const response = await this.endpointCaller<DeleteDriveOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'deleteDrive',
		},
		payload,
	);
	return response.output;
}
