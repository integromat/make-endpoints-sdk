// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SetUserProfileInput = {
	/**
	 * JSON object of profile fields to set, for example `{ "status_text": "On vacation", "status_emoji": ":palm_tree:" }`. Use this for setting multiple fields at once; use `name`/`value` instead for a single field.
	 */
	profile?: Record<string, JSONValue>;
	/**
	 * Name of a single profile field to update, as an alternative to `profile`. Must be used together with `value`.
	 */
	name?: string;
	/**
	 * Value to set for the field named in `name`.
	 */
	value?: string;
	/**
	 * ID of the user to update, instead of the authenticated user. Admin-only, and only on paid plans.
	 */
	user?: string;
};

export type SetUserProfileOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The user's updated profile.
	 */
	profile?: {
		/**
		 * The user's first name.
		 */
		first_name?: string;
		/**
		 * The user's last name.
		 */
		last_name?: string;
		/**
		 * The user's full name.
		 */
		real_name?: string;
		/**
		 * The user's display name.
		 */
		display_name?: string;
		/**
		 * The user's email address.
		 */
		email?: string;
		/**
		 * The user's phone number.
		 */
		phone?: string;
		/**
		 * The user's stated pronouns.
		 */
		pronouns?: string;
		/**
		 * The user's custom status text.
		 */
		status_text?: string;
		/**
		 * The user's custom status emoji.
		 */
		status_emoji?: string;
		/**
		 * Unix timestamp of when the custom status expires. `0` means it does not expire.
		 */
		status_expiration?: number;
		/**
		 * The user's start date at the company.
		 */
		start_date?: string;
		/**
		 * Hash used to build the user's avatar image URLs.
		 */
		avatar_hash?: string;
		/**
		 * Custom profile field values, keyed by field ID, as raw JSON returned by Slack.
		 */
		fields?: Record<string, JSONValue>;
		/**
		 * URL of the user's 192px avatar image.
		 */
		image_192?: string;
		/**
		 * URL of the user's 512px avatar image.
		 */
		image_512?: string;
	};
};

/**
 * Set a user's profile
 * Updates the authenticated user's profile fields, including their status.
 */
export async function setUserProfile(
	this: EndpointFunctionThis,
	payload: {
		input: SetUserProfileInput;
		connectionId: number;
	},
): Promise<SetUserProfileOutput> {
	const response = await this.endpointCaller<SetUserProfileOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'setUserProfile',
		},
		payload,
	);
	return response.output;
}
