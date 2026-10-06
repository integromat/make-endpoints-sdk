// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type LookupUserByEmailInput = {
	/**
	 * Email address of a user in the workspace.
	 */
	email: string;
};

export type LookupUserByEmailOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The matching user object.
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
			 * The user's email address.
			 */
			email?: string;
			/**
			 * URL of the user's 192px avatar image.
			 */
			image_192?: string;
		};
	};
};

/**
 * Find a user by email
 * Finds a user in the workspace by their email address.
 */
export async function lookupUserByEmail(
	this: EndpointFunctionThis,
	payload: {
		input: LookupUserByEmailInput;
		connectionId: number;
	},
): Promise<LookupUserByEmailOutput> {
	const response = await this.endpointCaller<LookupUserByEmailOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'lookupUserByEmail',
		},
		payload,
	);
	return response.output;
}
