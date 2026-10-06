// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUsersInput = {
	/**
	 * Whether to include each user's locale in the response.
	 */
	include_locale?: boolean;
	/**
	 * Encoded team ID to list users in. Required when using an org-wide token.
	 */
	team_id?: string;
	/**
	 * Maximum number of items to return. Slack recommends 200 or fewer per request. Defaults to returning the entire list.
	 */
	limit?: number;
	/**
	 * Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.
	 */
	cursor?: string;
};

export type ListUsersOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The workspace's users.
	 *
	 * Items: A single user.
	 */
	members?: {
		/**
		 * ID of the user.
		 */
		id?: string;
		/**
		 * ID of the user's workspace.
		 */
		team_id?: string;
		/**
		 * The user's Slack username.
		 */
		name?: string;
		/**
		 * Whether the user's account has been deactivated.
		 */
		deleted?: boolean;
		/**
		 * The user's full name.
		 */
		real_name?: string;
		/**
		 * The user's IANA timezone identifier.
		 */
		tz?: string;
		/**
		 * Whether the user is a workspace admin.
		 */
		is_admin?: boolean;
		/**
		 * Whether the user is a workspace owner.
		 */
		is_owner?: boolean;
		/**
		 * Whether the user is a bot user.
		 */
		is_bot?: boolean;
		/**
		 * Unix timestamp of when the user's profile was last updated.
		 */
		updated?: number;
		/**
		 * Whether the user has two-factor authentication enabled.
		 */
		has_2fa?: boolean;
		/**
		 * The user's profile details.
		 */
		profile?: {
			/**
			 * The user's full name.
			 */
			real_name?: string;
			/**
			 * The user's display name.
			 */
			display_name?: string;
			/**
			 * The user's email address. Requires the `users:read.email` scope.
			 */
			email?: string;
			/**
			 * URL of the user's 192px avatar image.
			 */
			image_192?: string;
		};
	}[];
	/**
	 * Timestamp indicating when this data was cached by Slack.
	 */
	cache_ts?: string;
	/**
	 * Pagination metadata for this response.
	 */
	response_metadata?: {
		/**
		 * Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.
		 */
		next_cursor?: string;
	};
};

/**
 * List users
 * Returns a list of users in the workspace.
 */
export async function listUsers(
	this: EndpointFunctionThis,
	payload: {
		input: ListUsersInput;
		connectionId: number;
	},
): Promise<ListUsersOutput> {
	const response = await this.endpointCaller<ListUsersOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'listUsers',
		},
		payload,
	);
	return response.output;
}
