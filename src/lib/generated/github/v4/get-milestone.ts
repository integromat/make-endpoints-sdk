// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetMilestoneInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The number of the milestone.
	 */
	number: number;
};

export type GetMilestoneOutput = {
	data?: {
		repository?: {
			milestone?: {
				/**
				 * The node ID of the milestone object.
				 */
				id?: string;
				/**
				 * Identifies the number of the milestone.
				 */
				number?: number;
				/**
				 * Identifies the description of the milestone.
				 */
				description?: string;
				/**
				 * The HTTP URL for this milestone.
				 */
				url?: string;
				/**
				 * Identifies the state of the milestone (OPEN or CLOSED).
				 */
				state?: string;
				/**
				 * Indicates if the object is closed (definition of closed may depend on type).
				 */
				closed?: boolean;
				/**
				 * Identifies the date and time when the object was closed.
				 */
				closedAt?: string;
				/**
				 * Identifies the date and time when the object was created.
				 */
				createdAt?: string;
				/**
				 * Identifies the date and time when the object was last updated.
				 */
				updatedAt?: string;
				/**
				 * Identifies the due date of the milestone.
				 */
				dueOn?: string;
				/**
				 * Identifies the percentage complete for the milestone.
				 */
				progressPercentage?: number;
				/**
				 * Identifies the actor who created the milestone.
				 */
				creator?: {
					/**
					 * The username of the actor.
					 */
					login?: string;
					/**
					 * A URL pointing to the actor's public avatar.
					 */
					avatarUrl?: string;
					/**
					 * The HTTP path for this actor.
					 */
					resourcePath?: string;
					/**
					 * The HTTP URL for this actor.
					 */
					url?: string;
				};
			};
		};
	};
};

/**
 * Get a milestone
 * Retrieves an existing milestone.
 */
export async function getMilestone(
	this: EndpointFunctionThis,
	payload: {
		input: GetMilestoneInput;
		connectionId: number;
	},
): Promise<GetMilestoneOutput> {
	const response = await this.endpointCaller<GetMilestoneOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getMilestone',
		},
		payload,
	);
	return response.output;
}
