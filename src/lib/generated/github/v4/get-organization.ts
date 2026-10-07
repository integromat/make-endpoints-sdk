// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetOrganizationInput = {
	/**
	 * The organization's login.
	 */
	login: string;
};

export type GetOrganizationOutput = {
	data?: {
		organization?: {
			/**
			 * A URL pointing to the organization's public avatar.
			 */
			avatarUrl?: string;
			/**
			 * The organization's public profile name.
			 */
			name?: string;
			/**
			 * The organization's login name.
			 */
			login?: string;
			/**
			 * The organization's public profile description.
			 */
			description?: string;
			/**
			 * The organization's public email.
			 */
			email?: string;
			/**
			 * Identifies the date and time when the object was created.
			 */
			createdAt?: string;
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
			 * The organization's public profile URL.
			 */
			websiteUrl?: string;
		};
	};
};

/**
 * Get an organization
 * Retrieves an existing organization.
 */
export async function getOrganization(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrganizationInput;
		connectionId: number;
	},
): Promise<GetOrganizationOutput> {
	const response = await this.endpointCaller<GetOrganizationOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getOrganization',
		},
		payload,
	);
	return response.output;
}
