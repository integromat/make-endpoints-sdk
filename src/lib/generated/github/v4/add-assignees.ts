// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddAssigneesInput = {
	/**
	 * The node ID of the assignable object (issue or pull request) to add assignees to.
	 */
	assignableId: string;
	/**
	 * An array of node IDs of actors (users) to add as assignees.
	 */
	assigneeIds: string[];
};

export type AddAssigneesOutput = {
	data?: {
		addAssigneesToAssignable?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
			/**
			 * The item that was assigned.
			 */
			assignable?: {
				/**
				 * The assignees after the mutation.
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
 * Add assignees
 * Adds assignees to an issue or pull request.
 */
export async function addAssignees(
	this: EndpointFunctionThis,
	payload: {
		input: AddAssigneesInput;
		connectionId: number;
	},
): Promise<AddAssigneesOutput> {
	const response = await this.endpointCaller<AddAssigneesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'addAssignees',
		},
		payload,
	);
	return response.output;
}
