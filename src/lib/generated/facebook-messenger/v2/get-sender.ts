// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetSenderInput = {
	/**
	 * The Page-scoped ID of the user whose profile to retrieve. The user must have interacted with the Page through one of the [Messenger entry points](https://developers.facebook.com/docs/messenger-platform/discovery). IDs returned by [Facebook Login](https://developers.facebook.com/docs/facebook-login) are app-scoped and do not work with the Messenger Platform.
	 */
	psid: string;
	/**
	 * The profile fields to return. `id` is always returned. Fields other than `name`, `first_name`, `last_name` and `profile_pic` require the Page to be approved for additional [user profile permissions](https://developers.facebook.com/docs/messenger-platform/identity/user-profile/#requesting-feature-access-to-user-fields-for-the-page).
	 */
	fields: 'name' | 'first_name' | 'last_name' | 'profile_pic' | 'gender' | 'locale' | 'timezone';
};

export type GetSenderOutput = {
	/**
	 * The Page-scoped ID of the user. Always returned.
	 */
	id?: string;
	/**
	 * The user's full name. Returned when `name` is requested in `fields`.
	 */
	name?: string;
	/**
	 * The user's first name. Returned when `first_name` is requested in `fields`.
	 */
	first_name?: string;
	/**
	 * The user's last name. Returned when `last_name` is requested in `fields`.
	 */
	last_name?: string;
	/**
	 * URL of the user's profile picture. The URL expires after a limited time. Returned when `profile_pic` is requested in `fields`.
	 */
	profile_pic?: string;
	/**
	 * The user's gender, e.g. `male` or `female`. Requires additional permission; returned when `gender` is requested in `fields`.
	 */
	gender?: string;
	/**
	 * The user's locale as a language and region code, e.g. `en_US`. Requires additional permission; returned when `locale` is requested in `fields`.
	 */
	locale?: string;
	/**
	 * The user's timezone as an offset from UTC in hours, e.g. `-7`. Requires additional permission; returned when `timezone` is requested in `fields`.
	 */
	timezone?: number;
};

/**
 * Get a sender
 * Retrieves the profile of a Messenger user by their page-scoped ID (PSID).
 */
export async function getSender(
	this: EndpointFunctionThis,
	payload: {
		input: GetSenderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetSenderOutput> {
	const response = await this.endpointCaller<GetSenderOutput>(
		{
			appName: 'facebook-messenger',
			appVersion: 2,
			endpointName: 'getSender',
		},
		payload,
	);
	return response.output;
}
