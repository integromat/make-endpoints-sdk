// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCommitsInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The number of the pull request whose commits to list.
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

export type ListCommitsOutput = {
	data?: {
		repository?: {
			pullRequest?: {
				/**
				 * A list of commits present in this pull request's head branch not present in the base branch.
				 */
				commits?: {
					/**
					 * Identifies the total count of commits in the pull request.
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
						 * The node ID of the pull request commit.
						 */
						id?: string;
						/**
						 * The HTTP URL for this pull request commit.
						 */
						url?: string;
						/**
						 * The HTTP path for this pull request commit.
						 */
						resourcePath?: string;
						/**
						 * The Git commit object.
						 */
						commit?: {
							/**
							 * The Git object ID.
							 */
							oid?: string;
							/**
							 * An abbreviated version of the Git object ID.
							 */
							abbreviatedOid?: string;
							/**
							 * The Git commit message.
							 */
							message?: string;
							/**
							 * The Git commit message headline.
							 */
							messageHeadline?: string;
							/**
							 * The datetime when this commit was committed.
							 */
							committedDate?: string;
							/**
							 * The datetime when this commit was pushed.
							 */
							pushedDate?: string;
							/**
							 * The HTTP URL for this commit.
							 */
							url?: string;
							/**
							 * The number of additions in this commit.
							 */
							additions?: number;
							/**
							 * The number of deletions in this commit.
							 */
							deletions?: number;
							/**
							 * The number of changed files in this commit.
							 */
							changedFiles?: number;
							/**
							 * Authorship details of the commit.
							 */
							author?: {
								/**
								 * The name in the Git commit.
								 */
								name?: string;
								/**
								 * The email in the Git commit.
								 */
								email?: string;
								/**
								 * The timestamp of the Git action (authoring or committing).
								 */
								date?: string;
								/**
								 * A URL pointing to the author's public avatar.
								 */
								avatarUrl?: string;
								/**
								 * The GitHub user corresponding to the email field. Null if no such user exists.
								 */
								user?: {
									/**
									 * The username used to login.
									 */
									login?: string;
									/**
									 * The HTTP URL for this user.
									 */
									url?: string;
								};
							};
							/**
							 * Committer details of the commit.
							 */
							committer?: {
								/**
								 * The name in the Git commit.
								 */
								name?: string;
								/**
								 * The email in the Git commit.
								 */
								email?: string;
								/**
								 * The timestamp of the Git action (authoring or committing).
								 */
								date?: string;
							};
							/**
							 * The parents of a commit.
							 */
							parents?: {
								/**
								 * Identifies the total count of items in the connection.
								 */
								totalCount?: number;
							};
						};
					}[];
				};
			};
		};
	};
};

/**
 * List commits
 * Lists the commits of a pull request.
 */
export async function listCommits(
	this: EndpointFunctionThis,
	payload: {
		input: ListCommitsInput;
		connectionId: number;
	},
): Promise<ListCommitsOutput> {
	const response = await this.endpointCaller<ListCommitsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'listCommits',
		},
		payload,
	);
	return response.output;
}
