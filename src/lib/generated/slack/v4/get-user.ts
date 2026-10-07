// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserInput = {
	/**
	 * ID of the user to retrieve.
	 */
	user: string;
	/**
	 * Whether to include the user's locale in the response.
	 */
	include_locale?: boolean;
};

export type GetUserOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The requested user object.
	 */
	user?: {
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
		 * Human-readable name of the user's timezone.
		 */
		tz_label?: string;
		/**
		 * Offset of the user's timezone from UTC, in seconds.
		 */
		tz_offset?: number;
		/**
		 * Whether the user is a workspace admin.
		 */
		is_admin?: boolean;
		/**
		 * Whether the user is a workspace owner.
		 */
		is_owner?: boolean;
		/**
		 * Whether the user is the workspace's primary owner.
		 */
		is_primary_owner?: boolean;
		/**
		 * Whether the user is a multi-channel guest.
		 */
		is_restricted?: boolean;
		/**
		 * Whether the user is a single-channel guest.
		 */
		is_ultra_restricted?: boolean;
		/**
		 * Whether the user is a bot user.
		 */
		is_bot?: boolean;
		/**
		 * Whether the user is an app's user identity.
		 */
		is_app_user?: boolean;
		/**
		 * Unix timestamp of when the user's profile was last updated.
		 */
		updated?: number;
		/**
		 * Whether the user has two-factor authentication enabled.
		 */
		has_2fa?: boolean;
		/**
		 * The user's locale. Present only when `include_locale` was set.
		 */
		locale?: string;
		/**
		 * The user's profile details.
		 */
		profile?: {
			/**
			 * Hash used to build the user's avatar image URLs.
			 */
			avatar_hash?: string;
			/**
			 * The user's custom status text.
			 */
			status_text?: string;
			/**
			 * The user's custom status emoji.
			 */
			status_emoji?: string;
			/**
			 * The user's full name.
			 */
			real_name?: string;
			/**
			 * The user's display name.
			 */
			display_name?: string;
			/**
			 * The user's full name, normalized.
			 */
			real_name_normalized?: string;
			/**
			 * The user's display name, normalized.
			 */
			display_name_normalized?: string;
			/**
			 * The user's email address. Requires the `users:read.email` scope.
			 */
			email?: string;
			/**
			 * URL of the user's 24px avatar image.
			 */
			image_24?: string;
			/**
			 * URL of the user's 32px avatar image.
			 */
			image_32?: string;
			/**
			 * URL of the user's 48px avatar image.
			 */
			image_48?: string;
			/**
			 * URL of the user's 72px avatar image.
			 */
			image_72?: string;
			/**
			 * URL of the user's 192px avatar image.
			 */
			image_192?: string;
			/**
			 * URL of the user's 512px avatar image.
			 */
			image_512?: string;
			/**
			 * ID of the user's workspace.
			 */
			team?: string;
		};
	};
};

/**
 * Get a user
 * Returns information about a user.
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
			appName: 'slack',
			appVersion: 4,
			endpointName: 'getUser',
		},
		payload,
	);
	return response.output;
}
