// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchCommitCommentsInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type SearchCommitCommentsOutput = {
	data?: {
		repository?: {
			commitComments?: {
				/**
				 * Identifies the total count of commit comments in the repository.
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
					 * The node ID of the comment.
					 */
					id?: string;
					/**
					 * The body as markdown.
					 */
					body?: string;
					/**
					 * Identifies the primary key from the database.
					 */
					databaseId?: number;
					/**
					 * Identifies the date and time when the comment was created.
					 */
					createdAt?: string;
					/**
					 * Identifies the date and time when the comment was last updated.
					 */
					updatedAt?: string;
					/**
					 * Identifies when the comment was published at.
					 */
					publishedAt?: string;
					/**
					 * The moment the editor made the last edit.
					 */
					lastEditedAt?: string;
					/**
					 * The path to which this comment applies.
					 */
					path?: string;
					/**
					 * The line index in the diff to which the comment applies.
					 */
					position?: number;
					/**
					 * Author's association with the subject of the comment.
					 */
					authorAssociation?: string;
					/**
					 * The HTTP URL permalink for this commit comment.
					 */
					url?: string;
					/**
					 * The HTTP path permalink for this commit comment.
					 */
					resourcePath?: string;
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
					 * The actor who edited the comment.
					 */
					editor?: {
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
					 * Identifies the commit associated with the comment, if the commit exists.
					 */
					commit?: {
						/**
						 * The Node ID of the Commit object.
						 */
						id?: string;
						/**
						 * The Git commit message.
						 */
						message?: string;
						/**
						 * The HTTP URL for this commit.
						 */
						url?: string;
						/**
						 * The datetime when this commit was committed.
						 */
						committedDate?: string;
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
						};
					};
				}[];
			};
		};
	};
};

/**
 * Search commit comments
 * Lists the commit comments of a repository.
 */
export async function searchCommitComments(
	this: EndpointFunctionThis,
	payload: {
		input: SearchCommitCommentsInput;
		connectionId: number;
	},
): Promise<SearchCommitCommentsOutput> {
	const response = await this.endpointCaller<SearchCommitCommentsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchCommitComments',
		},
		payload,
	);
	return response.output;
}
