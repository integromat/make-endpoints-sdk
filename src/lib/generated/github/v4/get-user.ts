// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserInput = {
	/**
	 * The user's login.
	 */
	login: string;
};

export type GetUserOutput = {
	data?: {
		user?: {
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
		};
	};
};

/**
 * Get a user
 * Retrieves an existing user.
 */
export async function getUser(
	this: EndpointFunctionThis,
	payload: {
		input: GetUserInput;
		connectionId: number;
	},
): Promise<GetUserOutput> {
	const response = await this.endpointCaller<GetUserOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getUser',
		},
		payload,
	);
	return response.output;
}
