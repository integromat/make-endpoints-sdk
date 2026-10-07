// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchReleasesInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * Ordering options for releases returned from the connection.
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

export type SearchReleasesOutput = {
	data?: {
		repository?: {
			releases?: {
				/**
				 * Identifies the total count of releases in the repository.
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
					 * The node ID of the release object.
					 */
					id?: string;
					/**
					 * The title of the release.
					 */
					name?: string;
					/**
					 * The name of the release's Git tag.
					 */
					tagName?: string;
					/**
					 * The description of the release.
					 */
					description?: string;
					/**
					 * The HTTP URL for this release.
					 */
					url?: string;
					/**
					 * Whether or not the release is a draft.
					 */
					isDraft?: boolean;
					/**
					 * Whether or not the release is a prerelease.
					 */
					isPrerelease?: boolean;
					/**
					 * Whether or not the release is the latest release in the repository.
					 */
					isLatest?: boolean;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * Identifies the date and time when the release was published.
					 */
					publishedAt?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * The author of the release.
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
					 * The Git tag associated with this release.
					 */
					tag?: {
						/**
						 * The ref name of the Git tag.
						 */
						name?: string;
					};
				}[];
			};
		};
	};
};

/**
 * Search releases
 * Lists the releases of a repository.
 */
export async function searchReleases(
	this: EndpointFunctionThis,
	payload: {
		input: SearchReleasesInput;
		connectionId: number;
	},
): Promise<SearchReleasesOutput> {
	const response = await this.endpointCaller<SearchReleasesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchReleases',
		},
		payload,
	);
	return response.output;
}
