// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchAssigneesInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * Whether to list assignees of an issue or a pull request.
	 */
	issueOrPullRequest: 'issue' | 'pullRequest';
	/**
	 * The number of the issue or pull request.
	 */
	number: number;
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type SearchAssigneesOutput = {
	data?: {
		repository?: {
			pullRequest?: {
				assignees?: {
					/**
					 * Identifies the total count of assignees on the issue or pull request.
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
						 * The user's public profile bio.
						 */
						bio?: string;
						/**
						 * A URL pointing to the user's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * Identifies the date and time when the object was created.
						 */
						createdAt?: string;
						/**
						 * The user's publicly visible email address.
						 */
						email?: string;
						/**
						 * The user's Twitter username.
						 */
						twitterUsername?: string;
						/**
						 * Identifies the date and time when the object was last updated.
						 */
						updatedAt?: string;
						/**
						 * The HTTP URL for this user.
						 */
						url?: string;
						/**
						 * A URL pointing to the user's public website/blog.
						 */
						websiteUrl?: string;
					}[];
				};
			};
			issue?: {
				assignees?: {
					/**
					 * Identifies the total count of assignees on the issue or pull request.
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
						 * The user's public profile bio.
						 */
						bio?: string;
						/**
						 * A URL pointing to the user's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * Identifies the date and time when the object was created.
						 */
						createdAt?: string;
						/**
						 * The user's publicly visible email address.
						 */
						email?: string;
						/**
						 * The user's Twitter username.
						 */
						twitterUsername?: string;
						/**
						 * Identifies the date and time when the object was last updated.
						 */
						updatedAt?: string;
						/**
						 * The HTTP URL for this user.
						 */
						url?: string;
						/**
						 * A URL pointing to the user's public website/blog.
						 */
						websiteUrl?: string;
					}[];
				};
			};
		};
	};
};

/**
 * Search assignees
 * Lists the assignees of an issue or pull request.
 */
export async function searchAssignees(
	this: EndpointFunctionThis,
	payload: {
		input: SearchAssigneesInput;
		connectionId: number;
	},
): Promise<SearchAssigneesOutput> {
	const response = await this.endpointCaller<SearchAssigneesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchAssignees',
		},
		payload,
	);
	return response.output;
}
