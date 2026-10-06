// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAssigneeInput = {
	/**
	 * The node ID of the assignee (user) to retrieve.
	 */
	id: string;
};

export type GetAssigneeOutput = {
	data?: {
		node?: {
			/**
			 * The node ID of the user object.
			 */
			id?: string;
			/**
			 * The username of the user.
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
			 * The user's publicly visible email address.
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
 * Get an assignee
 * Retrieves an existing assignee (user).
 */
export async function getAssignee(
	this: EndpointFunctionThis,
	payload: {
		input: GetAssigneeInput;
		connectionId: number;
	},
): Promise<GetAssigneeOutput> {
	const response = await this.endpointCaller<GetAssigneeOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getAssignee',
		},
		payload,
	);
	return response.output;
}
