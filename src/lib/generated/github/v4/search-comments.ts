// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchCommentsInput = {
	/**
	 * The login field of a user or organization.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * Whether to list comments of an issue or a pull request.
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

export type SearchCommentsOutput = {
	data?: {
		repository?: {
			issue?: {
				comments?: {
					/**
					 * Identifies the total count of comments on the issue or pull request.
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
						 * Identifies the primary key from the database.
						 */
						databaseId?: number;
						/**
						 * The body as Markdown.
						 */
						body?: string;
						/**
						 * The body rendered to text.
						 */
						bodyText?: string;
						/**
						 * The HTTP URL for this comment.
						 */
						url?: string;
						/**
						 * The HTTP path for this comment.
						 */
						resourcePath?: string;
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
						 * Author's association with the subject of the comment.
						 */
						authorAssociation?: string;
						/**
						 * Whether the comment was created via an email reply.
						 */
						createdViaEmail?: boolean;
						/**
						 * Whether the comment was edited and includes an edit with the creation data.
						 */
						includesCreatedEdit?: boolean;
						/**
						 * Returns whether or not a comment has been minimized.
						 */
						isMinimized?: boolean;
						/**
						 * Returns why the comment was minimized.
						 */
						minimizedReason?: string;
						/**
						 * Whether the current viewer authored this comment.
						 */
						viewerDidAuthor?: boolean;
						author?: {
							login?: string;
							avatarUrl?: string;
							resourcePath?: string;
							url?: string;
						};
						editor?: {
							login?: string;
							avatarUrl?: string;
							resourcePath?: string;
							url?: string;
						};
						repository?: {
							name?: string;
							url?: string;
							description?: string;
						};
					}[];
				};
			};
			pullRequest?: {
				comments?: {
					/**
					 * Identifies the total count of comments on the issue or pull request.
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
						 * Identifies the primary key from the database.
						 */
						databaseId?: number;
						/**
						 * The body as Markdown.
						 */
						body?: string;
						/**
						 * The body rendered to text.
						 */
						bodyText?: string;
						/**
						 * The HTTP URL for this comment.
						 */
						url?: string;
						/**
						 * The HTTP path for this comment.
						 */
						resourcePath?: string;
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
						 * Author's association with the subject of the comment.
						 */
						authorAssociation?: string;
						/**
						 * Whether the comment was created via an email reply.
						 */
						createdViaEmail?: boolean;
						/**
						 * Whether the comment was edited and includes an edit with the creation data.
						 */
						includesCreatedEdit?: boolean;
						/**
						 * Returns whether or not a comment has been minimized.
						 */
						isMinimized?: boolean;
						/**
						 * Returns why the comment was minimized.
						 */
						minimizedReason?: string;
						/**
						 * Whether the current viewer authored this comment.
						 */
						viewerDidAuthor?: boolean;
						author?: {
							login?: string;
							avatarUrl?: string;
							resourcePath?: string;
							url?: string;
						};
						editor?: {
							login?: string;
							avatarUrl?: string;
							resourcePath?: string;
							url?: string;
						};
						repository?: {
							name?: string;
							url?: string;
							description?: string;
						};
					}[];
				};
			};
		};
	};
};

/**
 * Search comments
 * Lists the comments of an issue or pull request.
 */
export async function searchComments(
	this: EndpointFunctionThis,
	payload: {
		input: SearchCommentsInput;
		connectionId: number;
	},
): Promise<SearchCommentsOutput> {
	const response = await this.endpointCaller<SearchCommentsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchComments',
		},
		payload,
	);
	return response.output;
}
