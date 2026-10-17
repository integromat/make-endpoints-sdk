// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListOrganizationMembershipsInput = {
	/**
	 * Return memberships for the organization associated with this URI.
	 */
	organization?: string;
	/**
	 * Return memberships for the user associated with this URI. Defaults to the authenticated user when neither `user` nor `organization` is provided.
	 */
	user?: string;
	/**
	 * Filter by the member's email address.
	 */
	email?: string;
	/**
	 * The number of rows to return. Minimum `1`, maximum `100`.
	 */
	count?: number;
	/**
	 * The token to pass for pagination.
	 */
	page_token?: string;
};

export type ListOrganizationMembershipsOutput = {
	/**
	 * The list of organization memberships.
	 *
	 * Items: An organization membership.
	 */
	collection?: {
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
	}[];
	/**
	 * Pagination information.
	 */
	pagination?: {
		/**
		 * The number of rows returned.
		 */
		count?: number;
		/**
		 * URI to get the next page.
		 */
		next_page?: string;
		/**
		 * URI to get the previous page.
		 */
		previous_page?: string;
		/**
		 * Token for the next page.
		 */
		next_page_token?: string;
		/**
		 * Token for the previous page.
		 */
		previous_page_token?: string;
	};
};

/**
 * List organization memberships
 * Returns a list of organization memberships.
 */
export async function listOrganizationMemberships(
	this: EndpointFunctionThis,
	payload: {
		input: ListOrganizationMembershipsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListOrganizationMembershipsOutput> {
	const response = await this.endpointCaller<ListOrganizationMembershipsOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'listOrganizationMemberships',
		},
		payload,
	);
	return response.output;
}
