// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchOrganizationMembersInput = {
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

export type SearchOrganizationMembersOutput = {
	data?: {
		organization?: {
			membersWithRole?: {
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
					 * The Node ID of the User object.
					 */
					id?: string;
					/**
					 * The username used to login.
					 */
					login?: string;
					/**
					 * The user's public profile name.
					 */
					name?: string;
					/**
					 * The user's public profile bio.
					 */
					bio?: string;
					/**
					 * A URL pointing to the user's public avatar.
					 */
					avatarUrl?: string;
					/**
					 * Identifies the date and time when the object was created.
					 */
					createdAt?: string;
					/**
					 * The user's publicly visible profile email.
					 */
					email?: string;
					/**
					 * The user's Twitter username.
					 */
					twitterUsername?: string;
					/**
					 * Identifies the date and time when the object was last updated.
					 */
					updatedAt?: string;
					/**
					 * The HTTP URL for this user.
					 */
					url?: string;
					/**
					 * A URL pointing to the user's public website/blog.
					 */
					websiteUrl?: string;
				}[];
			};
		};
	};
};

/**
 * Search organization members
 * Searches for organization members or lists them all.
 */
export async function searchOrganizationMembers(
	this: EndpointFunctionThis,
	payload: {
		input: SearchOrganizationMembersInput;
		connectionId: number;
	},
): Promise<SearchOrganizationMembersOutput> {
	const response = await this.endpointCaller<SearchOrganizationMembersOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchOrganizationMembers',
		},
		payload,
	);
	return response.output;
}
