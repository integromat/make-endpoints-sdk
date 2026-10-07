// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRepositoriesInput = {
	/**
	 * The login field of a user or organization.
	 */
	login: string;
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type ListRepositoriesOutput = {
	data?: {
		user?: {
			repositories?: {
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
					 * The User owner of the repository.
					 */
					owner?: {
						/**
						 * The login of the user.
						 */
						login?: string;
						/**
						 * A URL pointing to the user's avatar.
						 */
						avatarUrl?: string;
						/**
						 * The HTTP path for this user.
						 */
						resourcePath?: string;
						/**
						 * The HTTP URL for this user.
						 */
						url?: string;
					};
					/**
					 * Identifies the date and time when the repository was created.
					 */
					createdAt?: string;
					/**
					 * The Node ID of the Repository object.
					 */
					id?: string;
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
					/**
					 * Identifies the primary key from the database.
					 */
					databaseId?: number;
					/**
					 * The number of kilobytes this repository occupies on disk.
					 */
					diskUsage?: number;
					/**
					 * Returns how many forks there are of this repository in the whole network.
					 */
					forkCount?: number;
					/**
					 * Whether this repository allows forks.
					 */
					forkingAllowed?: boolean;
					/**
					 * Indicates if the repository has issues feature enabled.
					 */
					hasIssuesEnabled?: boolean;
					/**
					 * Indicates if the repository has the Projects feature enabled.
					 */
					hasProjectsEnabled?: boolean;
					/**
					 * Indicates if the repository has wiki feature enabled.
					 */
					hasWikiEnabled?: boolean;
					/**
					 * The repository's URL.
					 */
					homepageUrl?: string;
					/**
					 * The interaction ability settings for this repository.
					 */
					interactionAbility?: {
						/**
						 * The date and time when the interaction ability expires.
						 */
						expiresAt?: string;
						/**
						 * The limit on interactions allowed for this repository.
						 */
						limit?: string;
						/**
						 * The origin of the interaction ability settings.
						 */
						origin?: string;
					};
					/**
					 * Indicates if the repository is unmaintained.
					 */
					isArchived?: boolean;
					/**
					 * Returns whether or not this repository is disabled.
					 */
					isDisabled?: boolean;
					/**
					 * Returns whether or not this repository is empty.
					 */
					isEmpty?: boolean;
					/**
					 * Identifies if the repository is a fork.
					 */
					isFork?: boolean;
					/**
					 * Indicates if a repository is either owned by an organization, or is a private fork of an organization repository.
					 */
					isInOrganization?: boolean;
					/**
					 * Indicates if the repository has been locked or not.
					 */
					isLocked?: boolean;
					/**
					 * Returns true if this repository has a security policy.
					 */
					isSecurityPolicyEnabled?: boolean;
					/**
					 * Identifies if the repository is a template that can be used to generate new repositories.
					 */
					isTemplate?: boolean;
					/**
					 * Indicates whether this is a user configuration repository.
					 */
					isUserConfigurationRepository?: boolean;
					/**
					 * Get the latest release for the repository if one exists.
					 */
					latestRelease?: {
						/**
						 * The name of the release.
						 */
						name?: string;
						/**
						 * Identifies the date and time when the release was created.
						 */
						createdAt?: string;
						/**
						 * The description of the release.
						 */
						description?: string;
						/**
						 * Identifies the date and time when the release was published.
						 */
						publishedAt?: string;
						/**
						 * Identifies the date and time when the release was last updated.
						 */
						updatedAt?: string;
						/**
						 * The HTTP URL for the release.
						 */
						url?: string;
					};
					/**
					 * The reason the repository has been locked.
					 */
					lockReason?: string;
					/**
					 * Whether or not PRs are merged with a merge commit on this repository.
					 */
					mergeCommitAllowed?: boolean;
					/**
					 * The repository's original mirror URL.
					 */
					mirrorUrl?: string;
					/**
					 * The image used to represent this repository in Open Graph data.
					 */
					openGraphImageUrl?: string;
					/**
					 * The repository parent, if this is a fork.
					 */
					parent?: {
						/**
						 * The name of the parent repository.
						 */
						name?: string;
						/**
						 * The description of the parent repository.
						 */
						description?: string;
						/**
						 * The HTTP URL for the parent repository.
						 */
						url?: string;
					};
					/**
					 * The primary language of the repository's code.
					 */
					primaryLanguage?: {
						/**
						 * The color defined for this language.
						 */
						color?: string;
						/**
						 * The name of the language.
						 */
						name?: string;
					};
					/**
					 * The HTTP path listing the repository's projects.
					 */
					projectsResourcePath?: string;
					/**
					 * The HTTP URL listing the repository's projects.
					 */
					projectsUrl?: string;
					/**
					 * Identifies the date and time when the repository was last pushed to.
					 */
					pushedAt?: string;
					/**
					 * Whether or not rebase-merging is enabled on this repository.
					 */
					rebaseMergeAllowed?: boolean;
					/**
					 * The HTTP path for this repository.
					 */
					resourcePath?: string;
					/**
					 * The security policy URL.
					 */
					securityPolicyUrl?: string;
					/**
					 * A description of the repository, rendered to HTML without any links in it.
					 */
					shortDescriptionHTML?: string;
					/**
					 * Whether or not squash-merging is enabled on this repository.
					 */
					squashMergeAllowed?: boolean;
					/**
					 * The SSH URL to clone this repository.
					 */
					sshUrl?: string;
					/**
					 * Returns a count of how many stargazers there are on this object.
					 */
					stargazerCount?: number;
					/**
					 * Temporary authentication token for cloning this repository.
					 */
					tempCloneToken?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar.
					 */
					usesCustomOpenGraphImage?: boolean;
					/**
					 * Indicates whether the viewer has admin permissions on this repository.
					 */
					viewerCanAdminister?: boolean;
					/**
					 * Can the current viewer create new projects on this owner.
					 */
					viewerCanCreateProjects?: boolean;
					/**
					 * Check if the viewer is able to change their subscription status for the repository.
					 */
					viewerCanSubscribe?: boolean;
					/**
					 * Indicates whether the viewer can update the topics of this repository.
					 */
					viewerCanUpdateTopics?: boolean;
					/**
					 * The last commit email for the viewer.
					 */
					viewerDefaultCommitEmail?: string;
					/**
					 * The last used merge method by the viewer or the default for the repository.
					 */
					viewerDefaultMergeMethod?: string;
					/**
					 * Returns a boolean indicating whether the viewing user has starred this starrable.
					 */
					viewerHasStarred?: boolean;
					/**
					 * The user's permission level on the repository.
					 */
					viewerPermission?: string;
					/**
					 * A list of emails this viewer can commit with.
					 */
					viewerPossibleCommitEmails?: JSONValue[];
					/**
					 * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
					 */
					viewerSubscription?: string;
					/**
					 * Indicates the repository's visibility level.
					 */
					visibility?: string;
				}[];
			};
		};
	};
};

/**
 * List repositories
 * Retrieves a list of repositories.
 */
export async function listRepositories(
	this: EndpointFunctionThis,
	payload: {
		input: ListRepositoriesInput;
		connectionId: number;
	},
): Promise<ListRepositoriesOutput> {
	const response = await this.endpointCaller<ListRepositoriesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'listRepositories',
		},
		payload,
	);
	return response.output;
}
