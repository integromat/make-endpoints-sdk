// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetOrganizationMembershipInput = {
	/**
	 * The unique identifier of the organization membership.
	 */
	uuid: string;
};

export type GetOrganizationMembershipOutput = {
	/**
	 * The organization membership resource.
	 */
	resource?: {
		/**
		 * Canonical reference for the membership.
		 */
		uri?: string;
		/**
		 * The role of the member (`user`, `admin`, `owner`).
		 */
		role?: string;
		/**
		 * The URI of the organization.
		 */
		organization?: string;
		/**
		 * The user details.
		 */
		user?: {
			/**
			 * The URI of the user.
			 */
			uri?: string;
			/**
			 * The user's name.
			 */
			name?: string;
			/**
			 * The user's email.
			 */
			email?: string;
			/**
			 * The user's slug.
			 */
			slug?: string;
			/**
			 * The user's scheduling URL.
			 */
			scheduling_url?: string;
			/**
			 * The user's timezone.
			 */
			timezone?: string;
			/**
			 * The user's avatar URL.
			 */
			avatar_url?: string;
			/**
			 * The user's language preference.
			 */
			locale?: string;
			/**
			 * When the user was created.
			 */
			created_at?: string;
			/**
			 * When the user was last updated.
			 */
			updated_at?: string;
		};
		/**
		 * When the membership was created.
		 */
		created_at?: string;
		/**
		 * When the membership was last updated.
		 */
		updated_at?: string;
	};
};

/**
 * Get organization membership
 * Returns information about a specified organization membership.
 */
export async function getOrganizationMembership(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrganizationMembershipInput;
		connectionId: number;
	},
): Promise<GetOrganizationMembershipOutput> {
	const response = await this.endpointCaller<GetOrganizationMembershipOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'getOrganizationMembership',
		},
		payload,
	);
	return response.output;
}
