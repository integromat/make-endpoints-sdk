// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetUserInput = {
	/**
	 * The account ID of the user, which uniquely identifies the user across all Atlassian products, e.g. `5b10ac8d82e05b22cc7d4ef5`.
	 */
	accountId: string;
	/**
	 * Use `groups` and/or `applicationRoles` to include those details in the response.
	 */
	expand?: string;
};

export type GetUserOutput = {
	/**
	 * The account ID of the user.
	 */
	accountId?: string;
	/**
	 * The type of account: `atlassian`, `app`, or `customer`.
	 */
	accountType?: string;
	/**
	 * Whether the user is active.
	 */
	active?: boolean;
	/**
	 * The app type of the account, when `accountType` is `app`: `service` or `agent`.
	 */
	appType?: string;
	/**
	 * The display name of the user.
	 */
	displayName?: string;
	/**
	 * The email address of the user. May be null depending on the user's privacy settings.
	 */
	emailAddress?: string;
	/**
	 * The URL of the user.
	 */
	self?: string;
	/**
	 * The locale of the user. May be null depending on the user's privacy settings.
	 */
	locale?: string;
	/**
	 * The time zone specified in the user's profile.
	 */
	timeZone?: string;
	/**
	 * Whether the user is a guest.
	 */
	guest?: boolean;
	/**
	 * Expand options that were included in the response.
	 */
	expand?: string;
	/**
	 * The user's avatar in various sizes.
	 */
	avatarUrls?: {
		/**
		 * The URL of the 16x16 pixel avatar.
		 */
		'16x16'?: string;
		/**
		 * The URL of the 24x24 pixel avatar.
		 */
		'24x24'?: string;
		/**
		 * The URL of the 32x32 pixel avatar.
		 */
		'32x32'?: string;
		/**
		 * The URL of the 48x48 pixel avatar.
		 */
		'48x48'?: string;
	};
	/**
	 * The groups the user belongs to, when `groups` was requested via `Expand`.
	 */
	groups?: Record<string, JSONValue>;
	/**
	 * The application roles the user is assigned to, when `applicationRoles` was requested via `Expand`.
	 */
	applicationRoles?: Record<string, JSONValue>;
};

/**
 * Get user
 * Returns a user.
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
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getUser',
		},
		payload,
	);
	return response.output;
}
