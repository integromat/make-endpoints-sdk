// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveAssigneesInput = {
	/**
	 * The node ID of the assignable object (issue or pull request) to remove assignees from.
	 */
	assignableId: string;
	/**
	 * An array of node IDs of actors (users) to remove as assignees.
	 */
	assigneeIds: string[];
};

export type RemoveAssigneesOutput = {
	data?: {
		removeAssigneesFromAssignable?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
			/**
			 * The item that was unassigned.
			 */
			assignable?: {
				/**
				 * The assignees remaining after the mutation.
				 */
				assignees?: {
					/**
					 * Identifies the total count of assignees.
					 */
					totalCount?: number;
					nodes?: {
						/**
						 * The node ID of the user object.
						 */
						id?: string;
						/**
						 * The username of the user.
						 */
						login?: string;
						/**
						 * The user's public profile name.
						 */
						name?: string;
						/**
						 * A URL pointing to the user's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * The HTTP URL for this user.
						 */
						url?: string;
					}[];
				};
			};
		};
	};
};

/**
 * Remove assignees
 * Removes assignees from an issue or pull request.
 */
export async function removeAssignees(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveAssigneesInput;
		connectionId: number;
	},
): Promise<RemoveAssigneesOutput> {
	const response = await this.endpointCaller<RemoveAssigneesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'removeAssignees',
		},
		payload,
	);
	return response.output;
}
