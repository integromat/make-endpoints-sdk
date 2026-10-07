// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListForksInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository whose forks to list.
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

export type ListForksOutput = {
	data?: {
		repository?: {
			/**
			 * Identifies the total count of direct forked repositories.
			 */
			forkCount?: number;
			/**
			 * A list of direct forked repositories.
			 */
			forks?: {
				/**
				 * Identifies the total count of items in the connection.
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
					 * The ID of the repository.
					 */
					id?: string;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * The description of the repository.
					 */
					description?: string;
					/**
					 * The repository's URL.
					 */
					homepageUrl?: string;
					/**
					 * The name of the repository.
					 */
					name?: string;
					/**
					 * The repository's name with owner.
					 */
					nameWithOwner?: string;
					/**
					 * The User owner of the repository.
					 */
					owner?: {
						/**
						 * A URL pointing to the owner's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * The username used to login.
						 */
						login?: string;
						/**
						 * The HTTP URL for the owner.
						 */
						url?: string;
					};
					/**
					 * Identifies the date and time when the repository was last pushed to.
					 */
					pushedAt?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * The HTTP URL for this repository.
					 */
					url?: string;
					/**
					 * The HTTP path for this repository.
					 */
					resourcePath?: string;
					/**
					 * Identifies if the repository is private or internal.
					 */
					isPrivate?: boolean;
					/**
					 * Identifies if the repository is a fork.
					 */
					isFork?: boolean;
					/**
					 * Returns how many forks there are of this repository in the whole network.
					 */
					forkCount?: number;
					/**
					 * Returns a count of how many stargazers there are on this object.
					 */
					stargazerCount?: number;
				}[];
			};
		};
	};
};

/**
 * List forks
 * Lists the forks of a repository.
 */
export async function listForks(
	this: EndpointFunctionThis,
	payload: {
		input: ListForksInput;
		connectionId: number;
	},
): Promise<ListForksOutput> {
	const response = await this.endpointCaller<ListForksOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'listForks',
		},
		payload,
	);
	return response.output;
}
