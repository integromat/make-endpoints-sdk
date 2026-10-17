// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAPermissionInput = {
	/**
	 * The note shared by all permissions being deleted. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.
	 */
	parent: string;
	/**
	 * The names of the permissions to delete. Format: `notes/{note}/permissions/{permission}`. You can get them from the `permissions` field of **Get a note**.
	 *
	 * Items: The name of a permission to delete. Format: `notes/{note}/permissions/{permission}`.
	 */
	names: string[];
};

export type DeleteAPermissionOutput = Record<string, never>;

/**
 * Delete permissions
 * Deletes one or more permissions on a note.
 */
export async function deleteApermission(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAPermissionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAPermissionOutput> {
	const response = await this.endpointCaller<DeleteAPermissionOutput>(
		{
			appName: 'google-keep',
			appVersion: 1,
			endpointName: 'deleteAPermission',
		},
		payload,
	);
	return response.output;
}
