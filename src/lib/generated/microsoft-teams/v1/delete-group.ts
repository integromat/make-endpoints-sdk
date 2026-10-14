// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteGroupInput = {
	/**
	 * The unique identifier of the group to delete.
	 */
	groupId: string;
};

export type DeleteGroupOutput = Record<string, never>;

/**
 * Delete a group
 * Deletes a group.
 */
export async function deleteGroup(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteGroupInput;
		connectionId: number;
	},
): Promise<DeleteGroupOutput> {
	const response = await this.endpointCaller<DeleteGroupOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'deleteGroup',
		},
		payload,
	);
	return response.output;
}
