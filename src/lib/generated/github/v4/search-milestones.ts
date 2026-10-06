// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchMilestonesInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * Filter milestones by state.
	 */
	states?: '' | 'OPEN' | 'CLOSED';
	/**
	 * Ordering options for milestones returned from the connection.
	 */
	addDirectionAndField?: boolean;
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type SearchMilestonesOutput = {
	data?: {
		repository?: {
			milestones?: {
				/**
				 * Identifies the total count of milestones in the repository.
				 */
				totalCount?: number;
				pageInfo?: {
					/**
					 * Whether there are more results after the current page.
					 */
					hasNextPage?: boolean;
					/**
					 * The cursor to use in the After field to fetch the next page.
					 */
					endCursor?: string;
				};
				nodes?: {
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
				}[];
			};
		};
	};
};

/**
 * Search milestones
 * Lists the milestones of a repository.
 */
export async function searchMilestones(
	this: EndpointFunctionThis,
	payload: {
		input: SearchMilestonesInput;
		connectionId: number;
	},
): Promise<SearchMilestonesOutput> {
	const response = await this.endpointCaller<SearchMilestonesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchMilestones',
		},
		payload,
	);
	return response.output;
}
