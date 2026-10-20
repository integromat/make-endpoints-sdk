// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteGroupInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
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
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteGroupOutput> {
	const response = await this.endpointCaller<DeleteGroupOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'deleteGroup',
		},
		payload,
	);
	return response.output;
}
