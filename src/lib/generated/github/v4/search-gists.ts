// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchGistsInput = {
	/**
	 * The login field of the user whose gists are listed.
	 */
	login: string;
	/**
	 * Ordering options for gists returned from the connection.
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

export type SearchGistsOutput = {
	data?: {
		user?: {
			gists?: {
				/**
				 * Identifies the total count of gists of the user.
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
					 * The node ID of the gist object.
					 */
					id?: string;
					/**
					 * The gist name.
					 */
					name?: string;
					/**
					 * The gist description.
					 */
					description?: string;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * Identifies the date and time when the gist was last pushed to.
					 */
					pushedAt?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * The HTTP URL for this gist.
					 */
					url?: string;
					/**
					 * The HTML path to this resource.
					 */
					resourcePath?: string;
					/**
					 * Identifies if the gist is a fork.
					 */
					isFork?: boolean;
					/**
					 * Whether the gist is public or not.
					 */
					isPublic?: boolean;
					/**
					 * Returns a count of how many stargazers there are on this object.
					 */
					stargazerCount?: number;
					/**
					 * Returns a boolean indicating whether the viewing user has starred this starrable.
					 */
					viewerHasStarred?: boolean;
					/**
					 * The gist owner.
					 */
					owner?: {
						/**
						 * The username used to login.
						 */
						login?: string;
						/**
						 * A URL pointing to the owner's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * The HTTP path for the owner.
						 */
						resourcePath?: string;
						/**
						 * The HTTP URL for the owner.
						 */
						url?: string;
					};
					/**
					 * A list of a gist's files.
					 */
					files?: {
						/**
						 * The gist file name.
						 */
						name?: string;
						/**
						 * The gist file extension.
						 */
						extension?: string;
						/**
						 * The gist file size in bytes.
						 */
						size?: number;
						/**
						 * Whether the file is an image.
						 */
						isImage?: boolean;
						/**
						 * Whether the file's contents were truncated.
						 */
						isTruncated?: boolean;
						/**
						 * The encoding used to encode the file contents.
						 */
						encoding?: string;
						/**
						 * The programming language this file is written in.
						 */
						language?: {
							/**
							 * The name of the current language.
							 */
							name?: string;
						};
					}[];
				}[];
			};
		};
	};
};

/**
 * Search gists
 * Lists the gists of a user.
 */
export async function searchGists(
	this: EndpointFunctionThis,
	payload: {
		input: SearchGistsInput;
		connectionId: number;
	},
): Promise<SearchGistsOutput> {
	const response = await this.endpointCaller<SearchGistsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchGists',
		},
		payload,
	);
	return response.output;
}
