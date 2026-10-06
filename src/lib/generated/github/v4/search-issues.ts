// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchIssuesInput = {
	/**
	 * The login field of a user or organization.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The state to filter the issues by.
	 */
	states?: '' | 'OPEN' | 'CLOSED';
	/**
	 * Ordering options for issues returned from the connection.
	 */
	addDirectionAndField?: boolean;
	/**
	 * Filtering options for issues returned from the connection.
	 */
	addFilterBy?: boolean;
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type SearchIssuesOutput = {
	data?: {
		repository?: {
			issues?: {
				pageInfo?: {
					/**
					 * When paginating forwards, are there more items.
					 */
					hasNextPage?: boolean;
					/**
					 * When paginating forwards, the cursor to continue.
					 */
					endCursor?: string;
				};
				/**
				 * Identifies the total count of items in the connection.
				 */
				totalCount?: number;
				nodes?: {
					/**
					 * The node ID of the issue object.
					 */
					id?: string;
					/**
					 * The number of the issue.
					 */
					number?: number;
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
					 * The body as markdown.
					 */
					body?: string;
					/**
					 * The HTTP URL for this issue.
					 */
					url?: string;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * Identifies when the issue was published at.
					 */
					publishedAt?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * The moment the editor made the last edit.
					 */
					lastEditedAt?: string;
					/**
					 * Indicates if the object is closed (definition of closed may depend on type).
					 */
					closed?: boolean;
					/**
					 * Identifies the date and time when the object was closed.
					 */
					closedAt?: string;
				}[];
			};
		};
	};
};

/**
 * Search issues
 * Searches for issues or lists them all.
 */
export async function searchIssues(
	this: EndpointFunctionThis,
	payload: {
		input: SearchIssuesInput;
		connectionId: number;
	},
): Promise<SearchIssuesOutput> {
	const response = await this.endpointCaller<SearchIssuesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchIssues',
		},
		payload,
	);
	return response.output;
}
