// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchPullRequestsInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * Filter pull requests by state. Leave empty to return all states.
	 */
	states?: '' | 'OPEN' | 'CLOSED' | 'MERGED';
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type SearchPullRequestsOutput = {
	data?: {
		repository?: {
			pullRequests?: {
				/**
				 * Identifies the total count of pull requests in the connection.
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
					 * The node ID of the pull request.
					 */
					id?: string;
					/**
					 * Identifies the pull request number.
					 */
					number?: number;
					/**
					 * The body as markdown.
					 */
					body?: string;
					/**
					 * The HTTP URL for this pull request.
					 */
					url?: string;
					/**
					 * Identifies the state of the pull request.
					 */
					state?: string;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * Identifies when the pull request was published at.
					 */
					publishedAt?: string;
					/**
					 * The moment the editor made the last edit.
					 */
					lastEditedAt?: string;
					/**
					 * true if the pull request is closed.
					 */
					closed?: boolean;
					/**
					 * Identifies the date and time when the object was closed.
					 */
					closedAt?: string;
					/**
					 * Whether or not the pull request was merged.
					 */
					merged?: boolean;
					/**
					 * The date and time that the pull request was merged.
					 */
					mergedAt?: string;
					/**
					 * Identifies if the pull request is a draft.
					 */
					isDraft?: boolean;
					/**
					 * true if the pull request is locked.
					 */
					locked?: boolean;
					/**
					 * Identifies the name of the base Ref associated with the pull request.
					 */
					baseRefName?: string;
					/**
					 * Identifies the name of the head Ref associated with the pull request.
					 */
					headRefName?: string;
					/**
					 * The number of additions in this pull request.
					 */
					additions?: number;
					/**
					 * The number of deletions in this pull request.
					 */
					deletions?: number;
					/**
					 * The number of changed files in this pull request.
					 */
					changedFiles?: number;
					/**
					 * The actor who authored the comment.
					 */
					author?: {
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
					/**
					 * The actor who merged the pull request.
					 */
					mergedBy?: {
						/**
						 * The username of the actor.
						 */
						login?: string;
						/**
						 * A URL pointing to the actor's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * The HTTP URL for this actor.
						 */
						url?: string;
					};
					/**
					 * The repository associated with this node.
					 */
					repository?: {
						/**
						 * The name of the repository.
						 */
						name?: string;
						/**
						 * The repository's name with owner.
						 */
						nameWithOwner?: string;
						/**
						 * The HTTP URL for this repository.
						 */
						url?: string;
					};
					/**
					 * A list of comments associated with the pull request.
					 */
					comments?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * A list of commits present in this pull request's head branch not present in the base branch.
					 */
					commits?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * A list of Users assigned to this object.
					 */
					assignees?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * A list of labels associated with the object.
					 */
					labels?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
				}[];
			};
		};
	};
};

/**
 * Search pull requests
 * Lists the pull requests of a repository.
 */
export async function searchPullRequests(
	this: EndpointFunctionThis,
	payload: {
		input: SearchPullRequestsInput;
		connectionId: number;
	},
): Promise<SearchPullRequestsOutput> {
	const response = await this.endpointCaller<SearchPullRequestsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchPullRequests',
		},
		payload,
	);
	return response.output;
}
