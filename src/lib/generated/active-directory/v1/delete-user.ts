// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteUserInput = {
	/**
	 * The ID or the user principal name (UPN) of the user to delete.
	 */
	userId: string;
};

export type DeleteUserOutput = Record<string, never>;

/**
 * Delete a user
 * Deletes a user.
 */
export async function deleteUser(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteUserInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteUserOutput> {
	const response = await this.endpointCaller<DeleteUserOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'deleteUser',
		},
		payload,
	);
	return response.output;
}
