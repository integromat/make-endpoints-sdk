// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListOrganizationsInput = {
	/**
	 * The organization's login.
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

export type ListOrganizationsOutput = {
	data?: {
		user?: {
			organizations?: {
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
					 * The node ID of the organization object.
					 */
					id?: string;
					/**
					 * Determine if this repository owner has any items that can be pinned to their profile.
					 */
					anyPinnableItems?: boolean;
					/**
					 * A URL pointing to the organization's public avatar.
					 */
					avatarUrl?: string;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * Identifies the primary key from the database.
					 */
					databaseId?: number;
					/**
					 * The organization's public profile description.
					 */
					description?: string;
					/**
					 * The organization's public email.
					 */
					email?: string;
					/**
					 * A list of owners of the organization's enterprise account.
					 */
					enterpriseOwners?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * The estimated next GitHub Sponsors payout for this user/organization in cents (USD).
					 */
					estimatedNextSponsorsPayoutInCents?: number;
					/**
					 * True if this user/organization has a GitHub Sponsors listing.
					 */
					hasSponsorsListing?: boolean;
					/**
					 * The interaction ability settings for this organization.
					 */
					interactionAbility?: string;
					/**
					 * True if the viewer is sponsored by this user/organization.
					 */
					isSponsoringViewer?: boolean;
					/**
					 * Whether the organization has verified its profile email and website.
					 */
					isVerified?: boolean;
					/**
					 * Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity.
					 */
					itemShowcase?: {
						/**
						 * Whether or not the owner has pinned any repositories or gists.
						 */
						hasPinnedItems?: boolean;
						/**
						 * The repositories and gists in the showcase.
						 */
						items?: {
							/**
							 * Identifies the total count of items in the connection.
							 */
							totalCount?: number;
						};
					};
					/**
					 * The organization's public profile location.
					 */
					location?: string;
					/**
					 * The organization's login name.
					 */
					login?: string;
					/**
					 * The estimated monthly GitHub Sponsors income for this user/organization in cents (USD).
					 */
					monthlyEstimatedSponsorsIncomeInCents?: number;
					/**
					 * The organization's public profile name.
					 */
					name?: string;
					/**
					 * The HTTP path creating a new team.
					 */
					newTeamResourcePath?: string;
					/**
					 * The HTTP URL creating a new team.
					 */
					newTeamUrl?: string;
					/**
					 * The billing email for the organization.
					 */
					organizationBillingEmail?: string;
					/**
					 * A list of packages under the owner.
					 */
					packages?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * A list of users who have been invited to join this organization.
					 */
					pendingMembers?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * Returns how many more items this profile owner can pin to their profile.
					 */
					pinnedItemsRemaining?: number;
					/**
					 * A list of projects under the owner.
					 */
					projectsV2?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * The HTTP path listing organization's projects.
					 */
					projectsResourcePath?: string;
					/**
					 * The HTTP URL listing organization's projects.
					 */
					projectsUrl?: string;
					/**
					 * A list of repositories that the user owns.
					 */
					repositories?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * Discussion comments this user has authored.
					 */
					repositoryDiscussionComments?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * Discussions this user has started.
					 */
					repositoryDiscussions?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * The HTTP path for this organization.
					 */
					resourcePath?: string;
					/**
					 * A list of teams in this organization.
					 */
					teams?: {
						/**
						 * Identifies the total count of items in the connection.
						 */
						totalCount?: number;
					};
					/**
					 * The HTTP path listing organization's teams.
					 */
					teamsResourcePath?: string;
					/**
					 * The HTTP URL listing organization's teams.
					 */
					teamsUrl?: string;
					/**
					 * The organization's Twitter username.
					 */
					twitterUsername?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * The HTTP URL for this organization.
					 */
					url?: string;
					/**
					 * Organization is adminable by the viewer.
					 */
					viewerCanAdminister?: boolean;
					/**
					 * Can the viewer pin repositories and gists to the profile.
					 */
					viewerCanChangePinnedItems?: boolean;
					/**
					 * Can the current viewer create new projects on this owner.
					 */
					viewerCanCreateProjects?: boolean;
					/**
					 * Viewer can create repositories on this organization.
					 */
					viewerCanCreateRepositories?: boolean;
					/**
					 * Viewer can create teams on this organization.
					 */
					viewerCanCreateTeams?: boolean;
					/**
					 * Whether or not the viewer is able to sponsor this user/organization.
					 */
					viewerCanSponsor?: boolean;
					/**
					 * Viewer is an active member of this organization.
					 */
					viewerIsAMember?: boolean;
					/**
					 * True if the viewer is sponsoring this user/organization.
					 */
					viewerIsSponsoring?: boolean;
					/**
					 * The organization's public profile URL.
					 */
					websiteUrl?: string;
				}[];
			};
		};
	};
};

/**
 * List organizations
 * Retrieves a list of organizations.
 */
export async function listOrganizations(
	this: EndpointFunctionThis,
	payload: {
		input: ListOrganizationsInput;
		connectionId: number;
	},
): Promise<ListOrganizationsOutput> {
	const response = await this.endpointCaller<ListOrganizationsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'listOrganizations',
		},
		payload,
	);
	return response.output;
}
